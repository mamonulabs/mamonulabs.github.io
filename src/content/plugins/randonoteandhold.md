---
name: "RandoNoteAndHold"
tagline: "Generative MIDI sequencer — 17 noise algorithms, Euclidean gating, deterministic chaos"
description: "A generative MIDI sequencer that samples from 17 noise and chaos algorithms at configurable clock divisions to produce random melodic patterns synced to your DAW's transport."
platforms: ["VST3", "AU"]
published: true
order: 1
image: "/assets/img/plugin-randonoteandhold.jpg"
features:
  - title: "17 noise & chaos algorithms"
    description: "White, Pink, Fibonacci, Turing machine, Logistic map, Glitch Walk, WoggleBuggy S&H, Ramp+Noise, Sine+Noise, Perlin, Splish, SlothSplish, SplishTuring, SquidAxon, Rungler, Henon, and GrayNoise. Each one responds differently to the Character knob."
  - title: "Euclidean rhythmic gating"
    description: "Layer Bjorklund-distributed rhythms over any algorithm. Set steps (1–16) and hits — the plugin spaces them as evenly as possible, producing the asymmetric grooves found in West African percussion and electronic music."
  - title: "Freeze, Infinity & Glide"
    description: "Freeze captures a loop on the spot. Infinity auto-regenerates after N repeats for self-evolving sequences. Glide adds 303-style legato overlap between pitch changes."
  - title: "Scale quantization & export"
    description: "Quantize output to any of 16 built-in scales or define a custom one via the interactive keyboard. Export patterns as MIDI files or Serum .shp LFO shapes."
  - title: "MIDI CC output & Sloth modulation"
    description: "Pitch-tracking CC output with optional inversion, plus 5 continuous Sloth/Splish CC streams (X, Y, W, Splish A, Splish B) with configurable CC numbers and Lo/Hi range."
  - title: "Presets & MIDI In Base"
    description: "Save and load presets. Latch incoming MIDI note-on messages as the base note for live key-following."
---

Drop it on a MIDI track, hit play, and let 17 different flavors of randomness write melodies you'd never come up with yourself.

## How it works

RandoNoteAndHold samples from a selected noise algorithm at tempo-synced clock divisions (1/4, 1/8, 1/16) and maps the output to MIDI notes within a configurable pitch range. The **Character** knob shapes each algorithm differently — bit-crush depth for White, flip rate for Turing, the `r` parameter for Logistic chaos, and so on.

Set unipolar mode to generate notes above a base pitch, or bipolar to scatter them above and below. Dial in a **Drop** probability to randomly silence steps. Add velocity randomization for dynamics. Every parameter is deterministic — the same **Seed** value produces the same sequence every time.

## The algorithms

Each algorithm has a different character. Some are wild, some are smooth, some evolve slowly. The **Character** knob shapes each one differently.

- **White** — Xorshift32 LFSR, every note equally likely. Character controls bit-crush quantization.
- **Pink** — Voss-McCartney 8-row summing, weighted toward lower notes. Character controls active row count.
- **Fibonacci** — Additive sequence with wrapping, self-similar and mathematical. Character controls spread factor.
- **Turing** — 16-bit shift register with probabilistic bit flip, evolving loops. Character controls flip rate.
- **Logistic** — x(n+1) = r·x(n)·(1−x(n)), deterministic chaos. Character controls the r parameter (3.5–4.0).
- **Glitch Walk** — 8 parallel random walkers, one selected per step, stuttery texture. Character controls max step size.
- **WoggleBuggy S&H** — Bounded random walk, Buchla-inspired melodic phrases. Character controls step size.
- **Ramp+Noise** — Falling sawtooth mixed with white noise, cascading energy. Character controls noise mix.
- **Sine+Noise** — Sum of 4 sine waves at prime ratios with mutating amplitudes. Character controls mutation rate.
- **Perlin** — Multi-octave sine summation + noise perturbation, smooth contours. Character controls roughness.
- **[Splish](/infobits/nlc-splish)** — Difference rectifier of White + Fibonacci + WoggleBuggy (NonlinearCircuits). Character controls diff gain.
- **[Sloth](/infobits/nlc-sloth)[Splish](/infobits/nlc-splish)** — Sloth Torpor chaotic oscillator fed into Splish diff rectifier (NonlinearCircuits). Character controls sloth mix.
- **[Splish](/infobits/nlc-splish)Turing** — Turing output versus average of Rungler + GrayNoise through a difference rectifier (NonlinearCircuits). Character controls diff gain.
- **SquidAxon** — 4-stage shift register with nonlinear diode feedback (NonlinearCircuits). Character controls feedback gain.
- **Rungler** — 8-bit LFSR with white noise XOR input, Hordijk-inspired digital chaos. Character controls number of feedback taps.
- **Henon** — 2D quadratic chaotic map, jumpy orbiting patterns. Character controls `a` parameter (1.0–1.4).
- **GrayNoise** — 32-bit register with single-bit flips, minimal step-to-step movement. Character controls bit range flipped.

## Note duration & gating

Note lengths are probabilistic: mix the 1/4 and 1/8 sliders to weight longer durations, or leave them at zero for all-sixteenths. Turn **Gate** on to sustain notes for the full clock division.

Layer Euclidean patterns on top of any algorithm with the **EUCL** toggle. Set **STP** (total steps, 1–16) and **HIT** (active beats). The default 5-over-11 gives you an asymmetric groove that moves. The gate pattern locks to frozen loops too.

## Freeze, Infinity, Glide

**FRZ** captures the current pattern into a buffer and loops it. **INF** does the same, but auto-regenerates after a set number of repeats — sequences that evolve on their own schedule. **GLIDE** adds 303-style legato: the previous note bleeds into the next on pitch changes, rests still cut clean.

## Scale quantization

16 built-in presets: Major, Minor, Pentatonic Maj/Min, Harmonic Minor, Melodic Minor, Phrygian, Blues, Dorian, Mixolydian, Lydian, Locrian, Whole Tone, Diminished, Chromatic, and Custom. Build a custom scale by toggling semitones on the interactive piano keyboard.

## Visualizations

- **Noise Waveform** — last 256 samples, color-coded by Euclidean hits/rests
- **Pattern View** — piano roll of the last 64 notes with step cursor, glide connectors, and duration bars
- **Euclidean Monitor** — circular step sequencer with live playhead
- **Scale Column** — interactive keyboard for custom scale editing
- **Attractor Visualizer** — 2D phase plot of the Sloth oscillator trajectory with fading trail (Advanced tab)

## MIDI CC output

Enable pitch-tracking CC output to map generated note pitch to a configurable CC number (default CC74) with optional inversion. Useful for driving filter cutoff or other parameters that follow the melodic contour.

The Sloth/Splish CC section outputs 5 simultaneous streams from the built-in chaotic oscillator: [Sloth](/infobits/nlc-sloth) X, Y, and W axes plus [Splish](/infobits/nlc-splish) A and B difference-rectifier outputs. Each stream has its own CC number, and a shared Lo/Hi range control limits the output to a subset of 0–127.

## MIDI In Base

Enable MIDI In Base to latch incoming MIDI note-on messages as the base note. Play a key and the generative pattern recenters around that pitch in real time — useful for live performance and key-following.

## Presets

Save and load full parameter snapshots. All settings including algorithm, scale, seed, and advanced parameters are captured.

## Export

Save the visible pattern as a standard **.mid** file, or export the raw noise waveform as a **Serum .shp** LFO shape.
