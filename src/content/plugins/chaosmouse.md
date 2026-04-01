---
name: "ChaosMouse"
tagline: "Chaotic oscillator MIDI CC generator — 5 modulation streams from a Sloth circuit"
description: "A generative MIDI CC plugin that runs a Sloth Torpor chaotic oscillator and outputs 5 continuous control streams (X, Y, W, Splish A, Splish B) as slow, unpredictable modulation synced to your DAW."
platforms: ["VST3", "AU"]
published: true
order: 8
features:
  - title: "Sloth chaotic oscillator"
    description: "A 4-variable implicit ODE system ported from the Don Cross / Andrew Fitch analog circuit model. Three speed variants — Torpor (slowest), Apathy (medium), Inertia (fastest) — with automatic stuck-point detection and RNG-based jitter to prevent settling."
  - title: "5 simultaneous CC streams"
    description: "Three raw axes (X, Y, W) from the oscillator plus two derived Splish outputs computed via a difference-rectifier algorithm. Each stream has its own configurable CC number and output range."
  - title: "Continuous & tempo-synced modes"
    description: "Fire CC messages every ~100ms in continuous mode, or lock to host tempo with clock division options (1/1, 1/2, 1/4, 1/8, 1/16) for rhythmically coherent modulation."
  - title: "Real-time attractor visualizer"
    description: "2D phase plot with fading trail showing the oscillator trajectory in real time. Toggle between X/Y view (cyan) and Splish A/B view (orange). Lock-free ring buffer keeps the display responsive without blocking the audio thread."
---

Drop it on a MIDI track and let a chaotic oscillator write modulation you'd never program by hand. Five CC streams, one circuit, zero repetition.

## How it works

ChaosMouse runs a [Sloth](/infobits/nlc-sloth) Torpor chaotic oscillator — a 4-variable implicit ODE system that produces slowly evolving, never-repeating trajectories. The oscillator's X, Y, and W coordinates are mapped to MIDI CC values, and two additional streams ([Splish](/infobits/nlc-splish) A and Splish B) are derived through a difference-rectifier algorithm inspired by NonlinearCircuits designs.

All incoming MIDI passes through untouched. ChaosMouse adds its generated CC messages on top, so you can layer chaotic modulation over any existing MIDI performance.

## The oscillator

The [Sloth](/infobits/nlc-sloth) circuit has three speed variants that control how fast the trajectory evolves:

- **Torpor** — The slowest. Long, sweeping modulation arcs that unfold over bars.
- **Apathy** — Medium speed. Good balance between movement and stability.
- **Inertia** — The fastest. Rapid, jittery modulation with more frequent direction changes.

The oscillator uses auto-scaling to track the dynamic range of each axis, so output always fills the configured CC range regardless of speed setting. Built-in stuck-point detection with xorshift32 RNG jitter prevents the system from settling into fixed points.

## Output streams

Each of the five streams maps to a configurable MIDI CC number (defaults: X=20, Y=21, W=22, A=23, B=24):

- **X, Y, W** — Direct coordinates from the chaotic oscillator. Each moves independently with its own characteristic motion.
- **[Splish](/infobits/nlc-splish) A, Splish B** — Derived signals that combine and rectify differences between the raw axes, producing spikier, more rhythmic modulation patterns.

All outputs are mapped to a configurable Lo/Hi range within 0–127.

## Seed & determinism

Set a seed value to initialize the oscillator's starting position. The same seed produces the same trajectory every time. Hit the dice button to randomize for a fresh starting point.

## Parameters

- **Seed** — Starting position for the oscillator trajectory. Same seed = same modulation.
- **Speed** — Torpor, Apathy, or Inertia. Controls oscillator time constant.
- **CC Enable** — Master on/off for CC output.
- **CC Numbers** — Individual CC assignment for X, Y, W, Splish A, Splish B (0–127).
- **Lo / Hi** — Output range mapping for all CC streams.
- **Mode** — Continuous (~100ms intervals) or Synced (tempo-locked).
- **Clock Division** — 1/1, 1/2, 1/4, 1/8, 1/16. Only active in Synced mode.
- **MIDI Channel** — Output channel (1–16).
