---
name: "DataHell"
tagline: "Data sonification instrument — turn anything into MIDI sequences"
description: "A MIDI plugin that converts arbitrary data — numbers, text, CSV files, live weather — into playable note sequences with scale quantization, velocity randomization, and tempo-synced playback."
platforms: ["VST3", "AU"]
published: true
order: 4
image: "/assets/img/plugin-datahell.svg"
features:
  - title: "Universal data input"
    description: "Paste numbers, text, CSV, or load any file. Numbers map directly to pitch. Non-numeric tokens are deterministically hashed so the same word always produces the same note. No input ever fails — everything becomes music."
  - title: "Live weather data"
    description: "Fetch hourly temperature, humidity, and wind speed from the Open-Meteo API for a random world city. Turn real atmospheric conditions into melodies."
  - title: "Scale quantization & custom scales"
    description: "15 built-in scales from Chromatic to Diminished, plus a Custom mode with an interactive piano keyboard for toggling individual scale degrees."
  - title: "Randomized velocity, length & gate"
    description: "Per-note velocity randomization between configurable min/max. Random note length as a percentage of step duration. Gate probability to silence steps for rhythmic variation."
---

Feed it anything — numbers, words, weather data, the contents of a text file — and it turns the data into a MIDI sequence. No input fails. Everything becomes music.

## How it works

DataHell parses whatever you give it into a sequence of up to 256 values. Numbers map directly to pitch. Text is deterministically hashed so the same word always produces the same note. The parsed values are normalized to 0.0–1.0 and mapped across a configurable MIDI note range (default C1–C5), then quantized to your chosen scale.

When the DAW transport runs, DataHell steps through the sequence at a configurable rate synced to tempo, generating MIDI notes with randomized velocity and duration.

## Data input

Four ways to get data in:

- **Type / Paste** — Enter numbers, text, CSV, semicolons, tabs, or any mix directly into the text field.
- **Load File** — Import from .txt, .csv, or any text file.
- **Random Fill** — Generate 128 random values instantly.
- **Fetch Weather** — Pull live hourly weather data (temperature, humidity, wind speed) from the Open-Meteo API for a random city worldwide. No API key needed.

## Step sequencer display

A flowing grid shows all parsed data values. The active step highlights with inverted colors and auto-scrolls to keep the current position visible as the sequence plays.

## Pitch mapping

Data values are normalized between the minimum and maximum of the input set, then linearly interpolated across a configurable MIDI note range. The result is quantized to the selected scale before output.

## Randomization

- **Velocity** — Each note gets a random velocity between configurable min and max values.
- **Note Length** — Random duration as a percentage of the step length, so some notes are short stabs and others ring out.
- **Gate** — Probability of silencing any given step, punching holes in the sequence for rhythmic variation.

## Playback

- **Rate** — Step rate synced to DAW tempo: 1/32, 1/16, 1/8, 1/4, 1/2, or 1 bar.

Playback starts automatically when the DAW transport runs and data is present.

## Export

Write the current MIDI sequence to a standard .mid file for use anywhere.
