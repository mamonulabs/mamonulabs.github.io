---
title: "Mutable Instruments Warps"
description: "A dual-input cross-modulation processor with seven distinct algorithms"
---

<img src="/assets/img/warps.jpg" alt="Warps" style="max-width: 60%;" />

---

## Overview

Warps is a 10HP Eurorack module that processes two input signals—designated carrier and modulator—through seven distinct cross-modulation algorithms. These algorithms range from simple mixing and waveshaping to ring modulation, bitwise operations, and vocoding. The module provides voltage control over algorithm selection, timbre characteristics, and signal levels, plus an internal oscillator that can replace either input signal when external sources are not connected.

---

## Signal Flow Architecture

Warps operates on two independent audio inputs:

**Carrier input** - The primary signal to be modulated or processed. When no external signal is connected, the internal oscillator outputs to the carrier path.

**Modulator input** - The modulating or secondary signal. When no external signal is connected, the internal oscillator outputs to the modulator path.

Each input has:
- Dedicated level control (knob)
- CV input (normalized to ±5V) for voltage-controlled amplitude
- Independent gain staging before algorithm processing

The two conditioned signals enter the selected algorithm, which combines or modulates them according to its specific processing method. The TIMBRE parameter adjusts algorithm-specific characteristics, and the result appears at the output jack.

---

## Seven Cross-Modulation Algorithms

### 1. Crossfade

Linear blending between carrier and modulator using constant-power crossfading law.

The TIMBRE knob controls mix position:
- Fully counterclockwise: 100% carrier, 0% modulator
- Center (12 o'clock): Equal amplitude blend (constant power)
- Fully clockwise: 0% carrier, 100% modulator

Constant-power crossfading maintains perceived loudness across the full sweep, preventing the center position from sounding louder than the extremes. Useful for smooth morphing between two sound sources or creating evolving textures by modulating the TIMBRE parameter.

### 2. Cross-Folding

Sums carrier and modulator, then applies wavefolder processing to the combined signal.

The summed signal passes through a wavefolder whose intensity is controlled by the TIMBRE parameter:
- Low TIMBRE: Minimal folding, output resembles simple sum
- High TIMBRE: Aggressive folding, generating additional harmonics through waveform reflection

Cross-folding creates harmonic content beyond simple addition. As the combined waveform exceeds threshold levels, it "folds back" on itself, producing new harmonics and generating timbres associated with wavefolding synthesis. The interaction between the two input signals determines which harmonics emerge.

### 3. Diode Ring Modulator

Digital emulation of an analog diode-based ring modulator circuit.

Ring modulation multiplies two signals, producing sum and difference frequencies while suppressing the original fundamentals. The diode ring modulator model simulates the behavior of passive diode circuits used in vintage ring modulators, which exhibit:
- Non-ideal multiplication (introduces harmonics beyond simple f1±f2)
- Diode clipping characteristics
- Asymmetric processing

The TIMBRE control adjusts post-processing gain and the degree of diode clipping emulation. Lower TIMBRE values produce cleaner ring modulation. Higher values emphasize the distortion and artifacts characteristic of diode-based designs.

Diode ring modulators are associated with metallic, clangorous timbres and are commonly used for bell sounds, inharmonic textures, and harsh modulation effects.

### 4. Digital Ring Modulation

Precision multiplication in the digital domain, equivalent to analog multiplier ICs like the AD633.

Unlike the diode ring modulator, digital ring modulation performs mathematically accurate multiplication of the two input signals:

Output = Carrier × Modulator

This produces clean sum and difference frequencies (f1 + f2, f1 - f2) with suppression of the original carrier and modulator frequencies. The TIMBRE parameter applies gain boost and soft clipping to the output, allowing control over saturation and harmonic density without the asymmetric distortion of diode circuits.

Digital ring modulation provides precise control over spectral content, useful for creating harmonic sidebands, metallic tones, and complex frequency interactions.

### 5. XOR (Exclusive OR)

Bitwise logical operation applied to 16-bit integer representations of the audio signals.

Both carrier and modulator are converted to 16-bit signed integers. The XOR operation compares corresponding bits:
- If bits differ (one is 1, other is 0): output bit is 1
- If bits match (both 0 or both 1): output bit is 0

The TIMBRE control determines which bit positions participate in the XOR operation, effectively selecting which frequency ranges are affected. Lower TIMBRE values process higher-order bits (low frequencies), while higher TIMBRE values include lower-order bits (high frequencies).

XOR modulation produces digital artifacts, aliasing, and non-linear distortion. The resulting timbres are harsh, glitchy, and unpredictable, useful for aggressive digital textures and bitcrushed effects.

### 6. Octaver / Comparator

Synthesis via conditional signal selection based on amplitude comparisons.

The algorithm compares the absolute values of carrier and modulator at each sample, then selects output based on comparison logic. Multiple comparison methods are available, morphed by the TIMBRE control:
- Comparison A: Select carrier if |carrier| > |modulator|, else select modulator
- Comparison B: Select modulator if |modulator| > threshold, else select carrier
- Additional comparison modes producing octave-like effects

These conditional selections create abrupt switching between signals, generating harmonic content including subharmonics (octave-down effects). The TIMBRE parameter morphs between different comparison logic variants, each producing distinct harmonic series.

This algorithm excels at creating octave dividers, sub-bass generation, and sample-and-hold-like timbral variations.

### 7. Vocoder

20-band vocoder with third-octave 48dB filters for analysis and synthesis.

The vocoder uses two parallel filter banks:

**Analysis bank** (20 bandpass filters): Processes the modulator signal, extracting amplitude envelopes in 20 frequency bands via envelope followers.

**Synthesis bank** (20 bandpass filters): Processes the carrier signal, with each filter's gain controlled by the corresponding modulator envelope.

When the modulator contains speech or rhythmic material, its spectral envelope is imposed on the carrier, creating the classic vocoder effect where one sound appears to "speak" with the voice of another.

The TIMBRE control provides formant warping:
- Low TIMBRE: Standard envelope following, direct mapping between analysis and synthesis bands
- Medium TIMBRE: Shifted formant mapping, creating pitch-shift-like effects
- High TIMBRE (fully clockwise): Freezes the modulator envelope, applying a static spectral filter to the carrier

The 48dB filter slope provides strong band isolation, and the 20-band resolution offers detailed spectral control compared to simpler vocoders.

---

## Control Parameters

### Algorithm Selection

**ALGORITHM knob** - Selects one of seven algorithms. The knob position is quantized; turning between detents switches algorithms.

**ALGORITHM CV input** - Voltage control over algorithm selection. CV is summed with knob position, allowing dynamic switching between algorithms via modulation sources.

Algorithm switching is instantaneous but may produce clicks or discontinuities. CV control enables rhythmic algorithm changes or smooth sweeps through multiple algorithms.

### Timbre

**TIMBRE knob** - Secondary parameter control, function varies per algorithm:
- Crossfade: Mix position
- Cross-folding: Wavefold intensity
- Diode ring mod: Clipping amount
- Digital ring mod: Saturation level
- XOR: Bit position selection
- Octaver: Comparison mode morph
- Vocoder: Formant shift / freeze

**TIMBRE CV input** - Voltage control over timbre parameter. Allows dynamic control of algorithm-specific characteristics.

The TIMBRE parameter dramatically alters the character of each algorithm, functioning as the primary timbral shaping control beyond simple level adjustments.

### Level Controls

**CARRIER LEVEL knob** - Gain control for carrier input

**MODULATOR LEVEL knob** - Gain control for modulator input

**CARRIER LEVEL CV input** - Normalized to ±5V, sums with knob position

**MODULATOR LEVEL CV input** - Normalized to ±5V, sums with knob position

Independent level control allows balancing the two signals for optimal algorithm behavior. Different algorithms respond differently to level relationships; ring modulators produce sidebands proportional to signal amplitudes, while vocoders require sufficient modulator level to extract clear envelopes.

---

## Internal Oscillator

When no external signal is connected to either input, Warps activates an internal oscillator to provide a signal source. The oscillator can output to carrier, modulator, or both paths.

### Waveform Selection

Oscillator waveforms depend on the selected algorithm:

**For cross-modulation algorithms (crossfade, cross-folding, ring modulators, XOR, octaver)**:
- Sine wave
- Triangle wave
- Sawtooth wave

**For vocoder**:
- Sawtooth wave
- Pulse wave
- Filtered noise

Waveform selection is typically controlled via button presses or CV interactions, depending on implementation.

### Oscillator Frequency

The oscillator tracks the carrier input when used as a phase modulation source (specific to certain configurations). Otherwise, frequency is set via dedicated controls or CV inputs.

The internal oscillator allows Warps to function as a self-contained synthesizer voice when processing a single external input or when generating tones from modulation sources alone.

---

## Output

Single mono output carrying the processed result of the selected algorithm. Output level is optimized for Eurorack levels (typically ±5V to ±10V depending on processing and input levels).

Some algorithms (ring modulators, XOR) can produce output levels exceeding input levels due to multiplication or bitwise operations. The module includes internal limiting or soft clipping where appropriate to prevent harsh digital clipping.

---

## Technical Specifications

- **Width**: 10HP
- **Depth**: 25mm
- **Power consumption**: +12V: 110mA, -12V: 5mA
- **Algorithms**: 7 distinct cross-modulation types
- **Vocoder bands**: 20 (third-octave spacing)
- **Vocoder filter slope**: 48dB/octave
- **Input impedance**: Standard Eurorack (100kΩ)
- **Output level**: Eurorack standard (±5V nominal, up to ±10V)

---

## Typical Applications

### Timbral Morphing

Use crossfade algorithm with modulation on TIMBRE to smoothly transition between two sound sources. Crossfades maintain constant power for even perceived loudness.

### Harmonic Generation

Cross-folding adds harmonics to simple waveforms. Feed sine waves into both inputs, adjust TIMBRE for varying levels of fold intensity. Creates evolving harmonic content from static sources.

### Classic Ring Modulation

Digital ring modulation algorithm provides clean, predictable sidebands for metallic tones and bell-like sounds. Diode ring modulator adds vintage character and asymmetric distortion.

### Vocoding

Feed speech, drums, or rhythmic material into modulator input. Carrier can be oscillator, pads, or noise. The carrier takes on the spectral envelope of the modulator. TIMBRE control shifts formants or freezes the envelope for static filtering.

### Bitcrushing and Glitch Effects

XOR algorithm produces digital artifacts and harsh textures. Modulate TIMBRE to sweep through bit positions, creating dynamic distortion and aliasing.

### Subharmonic Generation

Octaver/comparator algorithm generates octave-down and sub-bass content from incoming signals. Useful for bass enhancement or creating subharmonics from melodic material.

---

Warps consolidates seven distinct signal processing approaches into a single module with unified CV control, functioning as a cross-modulator, waveshaper, ring modulator, bitcrusher, and vocoder depending on algorithm selection.

---

*Based on the [Mutable Instruments Warps documentation](https://pichenettes.github.io/mutable-instruments-documentation/modules/warps/)*
