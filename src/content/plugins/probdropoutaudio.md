---
name: "ProbDropoutAudio"
tagline: "Tempo-synced probabilistic audio gate with deterministic patterns"
description: "Tempo-synced probabilistic audio gate. Drops chunks of audio based on probability, with envelope shaping and deterministic seed."
platforms: ["VST3", "AU", "CLAP"]
published: false
order: 2
features:
  - title: "Tempo-synced grid with adjustable drop probability"
    description: "Gate timing locked to 1/4, 1/8, 1/16, or 1/32 note divisions with 0-100% probability control for each step."
  - title: "Attack and release envelope shaping"
    description: "Adjustable 0.1-50ms attack and release times on each gate edge."
  - title: "Mix control"
    description: "Wet/dry blend from full muting (100%) to gentle ducking (0%)."
  - title: "Deterministic seed-based randomness"
    description: "Same seed = same dropout pattern every time, across sessions and buffer sizes."
---
