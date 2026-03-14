---
name: "ProbDropoutMidi"
tagline: "MIDI note mangler — probabilistic dropouts, grid-synced or per-note, fully deterministic"
description: "A MIDI-through processor that drops note-ons based on configurable probability. Two modes: per-note independent drops or per-step grid-quantized decisions. Deterministic seed means the same pattern every time."
platforms: ["VST3"]
published: true
order: 10
features:
  - title: "Two dropout modes"
    description: "Per Note evaluates each note-on independently. Per Step quantizes to a grid division — all notes at the same grid step get the exact same dropout decision."
  - title: "Grid-synced quantization"
    description: "In Per Step mode, choose 1/4, 1/8, 1/16, or 1/32 grid resolution synced to host transport."
  - title: "Velocity randomization"
    description: "Blend original velocity with a seeded random value (0–100%). Adds human feel to programmed sequences without touching pitch or timing."
  - title: "Deterministic randomness"
    description: "Splitmix64 hashing keyed to seed value. Same seed + same input = identical output across sessions and buffer sizes."
---

Drop it on a MIDI track between your source and your synth. Notes go in, fewer come out. Which ones survive is up to probability.

## How it works

ProbDropoutMidi sits as a MIDI effect in your signal chain. It receives all incoming MIDI, passes CCs, pitch bend, and everything else through untouched, but rolls the dice on every note-on. If a note gets dropped, its corresponding note-off is also suppressed — no stuck notes, ever. All-notes-off and all-sound-off messages pass through and reset the internal state.

## Parameters

- **Drop Probability** — 0.0 to 1.0. At zero everything passes. At one, silence. Default sits at 0.25 — roughly one in four notes vanish.
- **Velocity Randomness** — 0.0 to 1.0. Blends the original velocity with a seeded random value. At zero, velocities are untouched. Crank it for fully randomized dynamics.
- **Seed** — 0.0 to 1.0, mapped internally to a 32-bit integer. Controls the deterministic RNG. Same seed + same musical input = same output. Change it to get a different pattern.
- **Mode** — Per Note or Per Step (Grid). Per Note hashes PPQ position × channel × note number, so each note-on is evaluated independently. Per Step hashes only the grid step index — all notes at the same grid step get the exact same dropout decision.
- **Grid** — 1/4, 1/8, 1/16, or 1/32 quarter-note divisions. Only active in Per Step mode.
