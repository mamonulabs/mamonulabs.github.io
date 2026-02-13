---
name: "ProbStutter"
tagline: "Probabilistic beat-slicer with tempo-synced stuttering"
description: "Tempo-synced beat-slicer inspired by BBCut algorithms that captures and repeats audio slices with probabilistic triggering and deterministic randomness."
platforms: ["VST3", "AU", "CLAP"]
published: false
order: 5
features:
  - title: "Grid-synced probabilistic stutter triggering"
    description: "Adjustable 0-100% probability per grid step (1/4, 1/8, 1/16, 1/32 note divisions) synced to your DAW tempo for rhythmic glitch effects."
  - title: "Adjustable repeat count and duty cycle"
    description: "Control minimum and maximum repetitions (1-16) per stutter event, with duty cycle adjustment for gated or continuous repeats."
  - title: "Click-free envelope shaping with fade control"
    description: "Exponential attack/release envelope with adjustable 0.1-50ms fade time prevents clicks and pops during slice transitions."
  - title: "Deterministic seed-based randomness with mix control"
    description: "Generate repeatable stutter patterns using the same seed value, with wet/dry blend for subtle to extreme effects."
---
