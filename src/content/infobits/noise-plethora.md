---
title: "Befaco Noise Plethora"
description: "A three-channel digital noise generator with analog filtering"
---

<img src="/assets/img/noise-plethora.jpg" alt="Noise Plethora" style="height: 300px; width: auto;" />

> "Like a steam-filled train station at peak rush hour with all the trains simultaneously coming to a screeching halt." - Waveform Magazine

---

## Overview

Noise Plethora is a 14HP Eurorack module housing three independent noise generators, each followed by analog filtering. Channels A and B use digital algorithms with 40 different programs each, while Channel C provides traditional white noise and a granular "gritty" noise source. All three channels feature analog multimode filters for sound shaping.

---

## Channel A & B Architecture

The first two channels are identical in structure. Each contains a digital noise algorithm generator followed by a 12dB analog OTA multimode filter.

### Algorithm Selection

Channels A and B each have access to 40 different noise generation algorithms, organized into three banks:

**Textures Bank** - Cross-modulated oscillator algorithms ranging from subtle noise textures to aggressive digital tones. Includes:
- Cross FM between two square wave oscillators, output is ring modulation of both
- Cross FM between two sine wave oscillators, output is ring modulation of both
- Two square waves with PWM/FM cross modulation (first does PWM to second, second does FM to first)
- FM patches using randomized wavetables

**HH Clusters Bank** - Algorithms producing stacked, detuned harmonic content:
- White noise generators gated by independent pulse LFOs
- Multiple oscillator stacking with detune controls
- Algorithms designed for metallic, percussive timbres

**Harsh and Wild Bank** - Digital noise algorithms emphasizing their digital character:
- **ExistenceisPain**: Sample-and-hold noise processed through four bandpass filters, with four triangle oscillators controlling the filter frequencies
- **SatanWorkout**: White noise frequency-modulating a sine wave, then downsampled and distorted
- Square wave sent through granular cell with FM feedback to the oscillator, output combined using XOR logic gate
- Noise through sample-and-hold with built-in reverb processing

### X and Y Parameters

Each algorithm has two control parameters labeled X and Y. These are algorithm-specific variables that change depending on which program is selected. For example:
- In cross-modulation algorithms, X might control modulation depth while Y controls frequency ratio
- In granular algorithms, X could be grain density and Y grain pitch
- In filter-based algorithms, X might be filter sweep and Y resonance amount

Both X and Y have:
- Dedicated manual control knobs
- CV input jacks
- Attenuators for the CV inputs (10Vp-p range)

### 12dB Analog Filter (Channels A & B)

Each of the first two channels includes an analog OTA (Operational Transconductance Amplifier) multimode filter with three modes:
- **Low-pass**: Removes high frequencies, useful for smoothing harsh digital artifacts
- **Band-pass**: Isolates mid-range frequencies, creates vocal-like or resonant textures
- **High-pass**: Removes low frequencies, emphasizes brightness and air

Filter controls per channel:
- **Cutoff knob**: Manual control of filter frequency
- **Resonance knob**: Adds emphasis at the cutoff frequency; at high settings causes self-oscillation
- **Cutoff CV input**: Voltage control over cutoff frequency with attenuator
- **1V/octave tracking**: The CV input tracks at 1V/octave when using musical pitch sources

The 12dB/octave slope provides a gentler filtering curve compared to steeper filters, allowing more harmonic content to pass through while still shaping the sound.

---

## Channel C Architecture (Bottom Section)

The third channel, located in the bottom section of the module, provides two classic noise sources with a 24dB multimode filter.

### Noise Sources

Channel C generates two types of noise simultaneously:

**White Noise Output** - Full-spectrum noise with flat frequency response. Outputs directly without filtering for use as a raw noise source or external processing.

**Gritty Noise** - Granular-textured noise with voltage-controlled "grit quantity." The grit control adds crackling, grainy artifacts to the noise signal, ranging from subtle texture to heavy granulation.

### Grit Quantity Controls

The amount of grit applied to the noise is controlled by:
- **Grit Qty knob**: Manual control from smooth to heavily textured
- **Grit Qty CV input**: Voltage control input (10Vp-p range) summed with the manual knob position

This allows dynamic control of the grain density and character of the noise output.

### Noise Source Selector

A switch chooses which noise source feeds into the filter:
- **White** position: Routes white noise to the filter
- **Gritty** position: Routes gritty noise to the filter

The unfiltered outputs remain available regardless of switch position.

### 24dB Multimode Filter (Channel C)

Channel C's filter is steeper than channels A and B, providing 24dB/octave attenuation. The same three modes are available:
- Low-pass
- Band-pass
- High-pass

Controls:
- **Cutoff knob**: Manual filter frequency control
- **Resonance knob**: Emphasis at cutoff, capable of self-oscillation
- **Cutoff CV input with attenuator**

The steeper 24dB slope removes frequency content more aggressively, useful for isolating specific bands or creating stark filtering effects.

---

## Independent Outputs

The module provides five separate outputs:

**Channel A output** - Filtered output of Channel A's selected algorithm

**Channel B output** - Filtered output of Channel B's selected algorithm

**Channel C White output** - Unfiltered white noise

**Channel C Gritty output** - Gritty noise with voltage-controlled grain texture

**Channel C Filtered output** - Selected noise source (white or gritty) processed through the 24dB filter

All outputs can be used simultaneously, allowing complex layering and mixing.

---

## Typical Applications

### Percussion Synthesis

The HH Clusters algorithms excel at creating hi-hat, cymbal, and metallic percussion sounds. Using the filter CV inputs with envelope generators allows percussive shaping. The resonance can be pushed for tonal, ringing hits.

### Modulation Source

All channels can function as random voltage generators. Channel C's white noise is particularly useful for sample-and-hold circuits. The filtered outputs from A and B provide bandwidth-limited random voltages suitable for musical modulation.

### Textural Layering

Combining outputs from multiple channels creates dense, evolving noise beds. For example: Channel A on a smooth texture algorithm, Channel B on a metallic cluster, and Channel C's gritty noise filtered in band-pass mode provides three distinct layers that can be mixed and modulated independently.

### Lo-Fi Oscillator

With resonance at maximum and CV input tracking 1V/octave, the filters can be used as sine wave oscillators. The noise algorithms add harmonic dirt and instability, creating degraded, noisy pitched tones suitable for basslines or leads.

### Sound Design and Atmospherics

The Harsh and Wild algorithms, combined with slow modulation of X/Y parameters, generate evolving, cinematic textures. Channel C's gritty noise with low-pass filtering creates vinyl crackle and tape hiss effects.

---

## Firmware and Expandability

The digital algorithm section runs on updateable firmware. New algorithms can be added via firmware updates available from Befaco's website. This allows the module's sound palette to expand over time.

Installation requires a USB connection and following Befaco's firmware update procedure.

---

## Technical Specifications

- **Width**: 14HP
- **Depth**: 25mm
- **Power consumption**: +12V: 110mA, -12V: 67mA
- **Algorithm count**: 40 per channel (A & B)
- **Filter types**: Multimode (LP/BP/HP)
- **Filter slopes**: 12dB/octave (A & B), 24dB/octave (C)
- **CV input range**: 10Vp-p
- **Outputs**: 5 independent

---

## Interface Layout

**Top section** - Channel A controls and output
**Middle section** - Channel B controls and output
**Bottom section** - Channel C with grit controls, noise selector, filter controls, and three outputs

The front panel uses Befaco's signature red, black, and gray color scheme with clearly labeled sections for each channel.

---

The module consolidates what would typically require multiple noise sources, filters, and modulation processors into a single, performance-oriented interface focused on noise generation and shaping.

---

*Based on the [Befaco Noise Plethora documentation](https://www.befaco.org/noise-plethora/)*
