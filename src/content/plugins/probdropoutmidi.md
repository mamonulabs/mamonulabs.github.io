---
name: "ProbDropoutMidi"
tagline: "Probabilistic MIDI note dropout and velocity humanizer"
description: "Create glitchy rhythmic patterns and humanize performances with probabilistic note dropouts, grid-synced or per-note, with deterministic randomness."
platforms: ["VST3", "AU", "CLAP"]
order: 3
features:
  - title: "Adjustable dropout probability with two modes"
    description: "Drop notes independently (Per Note) or synchronize dropouts across musical grid steps (Per Step) with 1/4, 1/8, 1/16, or 1/32 grid options."
  - title: "Velocity randomness for humanization"
    description: "Blend original note velocities with random values to add natural performance variation and expression."
  - title: "Deterministic seed-based randomness"
    description: "Use the same seed with identical musical timing to generate repeatable, recallable dropout patterns."
  - title: "Smart note-off suppression"
    description: "Automatically prevents stuck notes by suppressing note-offs for dropped note-ons, ensuring clean MIDI output."
---
