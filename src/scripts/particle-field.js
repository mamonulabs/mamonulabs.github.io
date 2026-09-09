/*!
Particle field adapted from the ScreenMind scene used on mamonu.github.io.

MIT License

Copyright (c) 2026 Ayush Shekhar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// mamonulabs primary #0d59f2 sits at ~220deg. Particles fan from there toward
// indigo so the field reads as part of the existing palette, not against it.
const HUE_BASE = 0.611;
const HUE_SPREAD = 0.05;

// 'sample-hold' | 'cloud'. Flip to compare against the original blob.
const SHAPE = 'sample-hold';

// Echoes the 0.123456 sitting in every plugin UI. The field is seeded rather
// than random, so the homepage is the same field on every visit — the site
// demonstrating the determinism the plugins are built on.
const SEED = 0x123456;

// splitmix32 — the 32-bit sibling of the splitmix64 ProbDropoutMidi hashes with.
function makeRng(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x9e3779b9) | 0;
    let t = a ^ (a >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    t = t ^ (t >>> 15);
    return (t >>> 0) / 4294967296;
  };
}

const smooth = t => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = v => Math.min(Math.max(v, 0), 1);

// A GL point is an untextured screen-facing square. Masking it with a radial
// falloff turns each particle into a soft disc. Generated at runtime so the
// site ships no extra asset; additive blending swallows the transparent
// surround, so there are no square edges left to see.
function createSpriteTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const half = size / 2;
  const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.72)');
  gradient.addColorStop(0.55, 'rgba(255, 255, 255, 0.22)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// The original blob: uniform fill of an ellipsoid, split into two lobes.
function fillCloud(home, count, rng) {
  for (let i = 0; i < count; i++) {
    const theta = rng() * Math.PI * 2;
    const phi = Math.acos(2 * rng() - 1);
    const r = Math.cbrt(rng());
    let x = Math.sin(phi) * Math.cos(theta) * 12.5 * r;
    let y = Math.cos(phi) * 8.75 * r;
    let z = Math.sin(phi) * Math.sin(theta) * 10.25 * r;
    x += x > 0 ? 1.4 : -1.4;
    home[i * 3] = x + (rng() - 0.5) * 1.4;
    home[i * 3 + 1] = y + (rng() - 0.5) * 1.4;
    home[i * 3 + 2] = z + (rng() - 0.5) * 1.4;
  }
}

// Sample and hold, with the time axis pointing INTO the screen rather than
// across it. Each stream is a strand running away from the camera whose x/y
// position is piecewise-constant in z: held for the length of a step, then
// jumped. Flying down the time axis means you never see a staircase profile —
// you pass strands that lurch sideways at their own rates.
//
// BLUR is the one dial that matters. It sets strand thickness against the size
// of the jumps between held positions. Thin strands read as structure; fat
// ones overlap until the whole field is statistically a uniform cloud, which
// is exactly the trap the first version fell into. Keep it under ~0.6 or the
// steps stop existing.
const BLUR = 0.3;

function fillSampleHold(home, count, rng) {
  // Ten strands rather than five: five left most of the volume dark, which was
  // a straight regression from the blob. Density check: 10 streams puts the
  // scatter-to-spacing ratio at 0.35, still well clear of the ~0.85 where
  // clusters merge back into a featureless cloud.
  const STREAMS = 10;
  const Z_NEAR = 12;
  const Z_FAR = -14;
  const X_RANGE = 8.5;
  const Y_RANGE = 5.6;
  const STEP_LENGTHS = [1.6, 2.4, 3.4, 4.6];
  const tube = lerp(0.55, 3.0, clamp01(BLUR));

  const streams = [];
  for (let s = 0; s < STREAMS; s++) {
    const stepLen = STEP_LENGTHS[(rng() * STEP_LENGTHS.length) | 0];
    const steps = [];
    // Stagger each stream's phase so the jumps never line up.
    for (let z = Z_NEAR + rng() * stepLen; z > Z_FAR; z -= stepLen) {
      steps.push({ z0: z, z1: z - stepLen, x: (rng() * 2 - 1) * X_RANGE, y: (rng() * 2 - 1) * Y_RANGE });
    }
    streams.push(steps);
  }

  const gauss = () => (rng() + rng() + rng() - 1.5) * 0.8;
  for (let i = 0; i < count; i++) {
    const steps = streams[(rng() * STREAMS) | 0];
    const step = steps[(rng() * steps.length) | 0];
    home[i * 3] = step.x + gauss() * tube;
    home[i * 3 + 1] = step.y + gauss() * tube;
    // Fill the full length of the hold, so the strand is continuous in z and
    // the discontinuity lands squarely on the step boundary.
    home[i * 3 + 2] = lerp(step.z0, step.z1, rng());
  }
}

export function createParticleField(container, {
  count = 12000,
  calm = false,
  shape = SHAPE,
  seed = SEED,
  onError = () => {},
} = {}) {
  const sampleHold = shape === 'sample-hold';
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch (error) {
    onError(error);
    return null;
  }

  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.05);
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);
  camera.position.set(0, 0.2, 8.4);

  // ── Point cloud ──
  const COUNT = count;
  const home = new Float32Array(COUNT * 3);
  const pos = new Float32Array(COUNT * 3);
  const vel = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const cbase = new Float32Array(COUNT * 3);
  const spring = new Float32Array(COUNT);
  const c = new THREE.Color();
  const rng = makeRng(seed);

  if (sampleHold) fillSampleHold(home, COUNT, rng);
  else fillCloud(home, COUNT, rng);

  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = home[i * 3];
    pos[i * 3 + 1] = home[i * 3 + 1];
    pos[i * 3 + 2] = home[i * 3 + 2];
    // Each particle returns home at its own rate, so a disturbance never
    // resolves on a clean edge — the hold smears in time as well as space.
    spring[i] = 0.014 + rng() * 0.042;
    c.setHSL(HUE_BASE + rng() * HUE_SPREAD, 0.85, 0.5 + rng() * 0.2);
    colors[i * 3] = cbase[i * 3] = c.r;
    colors[i * 3 + 1] = cbase[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = cbase[i * 3 + 2] = c.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const sprite = createSpriteTexture();
  const cloudMat = new THREE.PointsMaterial({
    // Soft edges shrink the apparent radius, so this runs larger than the
    // hard-square size it replaces.
    size: sampleHold ? 0.14 : 0.11,
    map: sprite,
    vertexColors: true,
    transparent: true,
    // Dimmer points under sample-and-hold; the wider bloom supplies the glow,
    // which keeps the field soft without milking over the text in front of it.
    opacity: sampleHold ? 0.62 : 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const cloud = new THREE.Points(geo, cloudMat);
  cloud.frustumCulled = false;
  scene.add(cloud);

  // ── Nearest-neighbour filaments ──
  // Fewer and dimmer under sample-and-hold: filaments are what would let the
  // eye trace structure, and structure is the thing being hidden here.
  const SEG_COUNT = sampleHold ? 300 : 220;
  const SEG_OPACITY = sampleHold ? 0.85 : 0.7;
  const seg = [];
  const segPhase = [];
  const segGate = [];

  // Each filament is a staircase rather than a straight thread: alternating
  // holds (travel along z, the time axis, with x/y frozen) and jumps (step
  // sideways with z frozen). A random 2-5 holds per run, so no two read alike.
  // Phase accumulates with arc length over the WHOLE path, so one pulse crawls
  // the entire zigzag — corners included — instead of restarting each segment.
  function pushStaircase(ax, ay, az, bx, by, bz) {
    const holds = 2 + ((rng() * 4) | 0);
    const path = [[ax, ay, az]];
    let cx = ax, cy = ay;
    for (let k = 1; k <= holds; k++) {
      const t = k / holds;
      const nz = lerp(az, bz, t);
      const nx = lerp(ax, bx, t);
      const ny = lerp(ay, by, t);
      path.push([cx, cy, nz]);   // hold
      path.push([nx, ny, nz]);   // jump
      cx = nx; cy = ny;
    }

    const lens = [0];
    for (let i = 1; i < path.length; i++) {
      const dx = path[i][0] - path[i - 1][0];
      const dy = path[i][1] - path[i - 1][1];
      const dz = path[i][2] - path[i - 1][2];
      lens.push(lens[i - 1] + Math.sqrt(dx * dx + dy * dy + dz * dz));
    }
    const total = lens[lens.length - 1] || 1;
    const base = rng();
    const gate = rng();
    for (let i = 1; i < path.length; i++) {
      seg.push(path[i - 1][0], path[i - 1][1], path[i - 1][2], path[i][0], path[i][1], path[i][2]);
      segPhase.push(base + lens[i - 1] / total, base + lens[i] / total);
      segGate.push(gate, gate);
    }
  }

  for (let i = 0; i < SEG_COUNT; i++) {
    const a = (rng() * COUNT) | 0;
    let best = -1;
    let bd = 1e9;
    for (let k = 0; k < 6; k++) {
      const b = (rng() * COUNT) | 0;
      const dx = home[a * 3] - home[b * 3];
      const dy = home[a * 3 + 1] - home[b * 3 + 1];
      const dz = home[a * 3 + 2] - home[b * 3 + 2];
      const d = dx * dx + dy * dy + dz * dz;
      if (d < bd && b !== a) { bd = d; best = b; }
    }
    if (best >= 0) {
      if (sampleHold) {
        pushStaircase(
          home[a * 3], home[a * 3 + 1], home[a * 3 + 2],
          home[best * 3], home[best * 3 + 1], home[best * 3 + 2],
        );
      } else {
        const base = rng();
        segPhase.push(base, base + 1);
        const g = rng();
        segGate.push(g, g);
        seg.push(
          home[a * 3], home[a * 3 + 1], home[a * 3 + 2],
          home[best * 3], home[best * 3 + 1], home[best * 3 + 2],
        );
      }
    }
  }
  const lgeo = new THREE.BufferGeometry();
  lgeo.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
  lgeo.setAttribute('phase', new THREE.Float32BufferAttribute(segPhase, 1));
  lgeo.setAttribute('gate', new THREE.Float32BufferAttribute(segGate, 1));
  // Borrowed from the GitHub-activity scene on mamonu.github.io: a hard pulse
  // crawling along each filament. IDLE_ALPHA is what the path looks like
  // between pulses — at 0.0 the staircases are completely invisible and only
  // the travelling spark is ever drawn, which is the intent here. The cos
  // exponent sets how long the streak reads: higher is a tighter dot.
  const lineMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      time: { value: 0 },
      calm: { value: calm ? 1 : 0 },
      opacity: { value: SEG_OPACITY },
    },
    vertexShader: `
      attribute float phase;
      attribute float gate;
      varying float vTrail;
      varying float vGate;
      void main() {
        vTrail = phase;
        vGate = gate;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      #define IDLE_ALPHA 0.0
      // Violet, echoing the 0x8b5cf6 filaments on mamonu.github.io. COOL is the
      // pulse's tail, HOT its core — deliberately not white.
      #define PULSE_COOL vec3(0.32, 0.12, 0.78)
      #define PULSE_HOT  vec3(0.76, 0.52, 1.0)
      uniform float time;
      uniform float calm;
      uniform float opacity;
      varying float vTrail;
      varying float vGate;
      void main() {
        // Every path always contains exactly one pulse peak, so raw brightness
        // would scale with filament count. This slow per-filament envelope
        // fires each staircase only part of the time — sporadic, like a gate —
        // which is what lets the count go up without the field washing out.
        float duty = smoothstep(0.15, 0.65, sin(time * 0.23 + vGate * 6.28318));
        float wave = pow(max(0.0, cos(vTrail * 6.28318 - time * 0.9)), 16.0) * (1.0 - calm) * duty;
        vec3 color = mix(PULSE_COOL, PULSE_HOT, wave);
        gl_FragColor = vec4(color, (IDLE_ALPHA + wave * (1.0 - IDLE_ALPHA)) * opacity);
      }
    `,
  });
  const lines = new THREE.LineSegments(lgeo, lineMat);
  scene.add(lines);

  // ── Post-processing ──
  // strength / radius / threshold. Radius is the "blurrier" knob; a low
  // threshold blooms the whole field rather than only the hottest cores.
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = sampleHold
    ? new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.75, 0.95, 0.06)
    : new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.55, 0.2);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // ── Pointer ──
  const ray = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-10, -10);
  const pLocal = new THREE.Vector3(999, 999, 999);
  const tmpV = new THREE.Vector3();
  const camLocalV = new THREE.Vector3();

  const onPointerMove = e => {
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
  };
  const onPointerOut = event => { if (!event.relatedTarget) mouse.set(-10, -10); };
  addEventListener('pointermove', onPointerMove, { passive: true });
  addEventListener('pointerout', onPointerOut);

  // ── Scroll depth ──
  let progress = 0;
  let dirty = true;
  const refresh = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress = !isCalm && max > 0 ? clamp01(scrollY / max) : 0;
    dirty = true;
  };
  addEventListener('scroll', refresh, { passive: true });

  const onResize = () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    refresh();
  };
  addEventListener('resize', onResize);

  const onContextLost = event => { event.preventDefault(); onError(new Error('WebGL context lost')); };
  renderer.domElement.addEventListener('webglcontextlost', onContextLost);

  let isCalm = calm;
  let disposed = false;
  let frameId = 0;
  let sceneTime = 0;
  let last = performance.now();
  refresh();

  function animate() {
    if (disposed) return;
    frameId = requestAnimationFrame(animate);
    const now = performance.now();
    if (document.hidden || (isCalm && !dirty)) { last = now; return; }
    dirty = false;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!isCalm) sceneTime += dt;
    const time = sceneTime;

    // Pointer repulsion with spring-return, plus a near-camera fade so points
    // do not smear across the lens as the camera travels through the cloud.
    if (!isCalm) {
      ray.setFromCamera(mouse, camera);
      pLocal.copy(ray.ray.origin).addScaledVector(ray.ray.direction, 6);
      cloud.worldToLocal(pLocal);
      camLocalV.copy(camera.position);
      cloud.worldToLocal(camLocalV);
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3, iy = ix + 1, iz = ix + 2;
        const dx = pos[ix] - pLocal.x, dy = pos[iy] - pLocal.y, dz = pos[iz] - pLocal.z;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < 1.8 && d > 1e-4) {
          const f = (1.8 - d) * 0.05 / d;
          vel[ix] += dx * f; vel[iy] += dy * f; vel[iz] += dz * f;
        }
        const k = spring[i];
        vel[ix] += (home[ix] - pos[ix]) * k;
        vel[iy] += (home[iy] - pos[iy]) * k;
        vel[iz] += (home[iz] - pos[iz]) * k;
        vel[ix] *= 0.85; vel[iy] *= 0.85; vel[iz] *= 0.85;
        pos[ix] += vel[ix]; pos[iy] += vel[iy]; pos[iz] += vel[iz];
        const cdx = pos[ix] - camLocalV.x, cdy = pos[iy] - camLocalV.y, cdz = pos[iz] - camLocalV.z;
        const cd = Math.sqrt(cdx * cdx + cdy * cdy + cdz * cdz);
        const a = clamp01((cd - 1.5) / 2.5);
        colors[ix] = cbase[ix] * a;
        colors[iy] = cbase[iy] * a;
        colors[iz] = cbase[iz] * a;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
    }

    lineMat.uniforms.time.value = time;
    lineMat.uniforms.calm.value = isCalm ? 1 : 0;

    // Scroll drives the dolly: surface -> through the cloud -> out the far side.
    const p = progress;
    const cz = p < 0.2 ? lerp(8.4, -2, smooth(p / 0.2)) : lerp(-2, -8, (p - 0.2) / 0.8);
    const wIn = smooth(clamp01((p - 0.2) / 0.18));
    const wx = (Math.sin(p * 6.0 + 0.6) * 4.0 + Math.sin(time * 0.15) * 0.4) * wIn;
    const wy = (Math.cos(p * 5.0) * 3.0 + Math.cos(time * 0.13) * 0.3) * wIn;
    camera.position.lerp(tmpV.set(wx, wy, cz), isCalm ? 1 : 0.12);
    camera.up.set(0, 1, 0);
    camera.lookAt(
      Math.sin((p + 0.06) * 6.0 + 0.6) * 4.0 * wIn,
      Math.cos((p + 0.06) * 5.0) * 3.0 * wIn,
      cz - 8,
    );
    camera.rotateZ(Math.sin(time * 0.08) * 0.05 * wIn);
    cloud.rotation.y = lines.rotation.y = time * 0.05 + p * 1.4;

    composer.render();
  }
  animate();

  return {
    setCalm(value) { isCalm = value; dirty = true; refresh(); },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frameId);
      removeEventListener('pointermove', onPointerMove);
      removeEventListener('pointerout', onPointerOut);
      removeEventListener('scroll', refresh);
      removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      geo.dispose(); lgeo.dispose(); cloudMat.dispose(); lineMat.dispose(); sprite.dispose();
      composer.dispose(); renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
