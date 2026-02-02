---
title: "Mutable Instruments Rings"
description: "A resonator module implementing modal synthesis and Karplus-Strong algorithms"
---

<img src="/assets/img/rings.jpg" alt="Rings" style="max-width: 60%;" />

---

## Overview

Rings is a 14HP Eurorack resonator module that transforms brief excitation signals into sustained, resonant tones using two primary synthesis techniques: modal synthesis via parallel band-pass filters, and Karplus-Strong string synthesis using delay lines with feedback. The module processes incoming audio or generates internal excitation to drive three distinct resonator models, each offering control over timbre through four core parameters: structure, brightness, damping, and position.

---

## Resonator Architecture

### Modal Resonator

The modal resonator implements modal synthesis using a bank of up to 64 parallel band-pass filters (State Variable Filters). Each filter represents a "mode"—a resonant frequency at which the simulated structure naturally vibrates.

When excited, energy is distributed across these filters according to their tuning and Q factor. The filters ring at their designated frequencies with decay times determined by the damping parameter. The structure parameter adjusts the frequency relationships between modes, morphing between different material characteristics.

**String-like structures** have modes at harmonic intervals (integer multiples of the fundamental frequency). As structure increases, the mode relationships become inharmonic, mimicking bars, tubes, and plates where resonances don't align with harmonic series.

The position parameter affects the amplitude of individual modes. Striking at the center cancels even-numbered modes due to symmetry, while off-center positions preserve all modes with different amplitude distributions.

Resolution (number of active modes) determines computational load and timbral complexity. Higher resolution uses more filters for richer harmonic content but requires more processing.

### Karplus-Strong String Synthesis

The string model uses the Karplus-Strong algorithm: a delay line with feedback and filtering to simulate a vibrating string. An excitation signal (typically a noise burst or impulse) is fed into a delay line tuned to the desired pitch. The delayed output feeds back to the input, creating a sustained tone that decays according to the damping filter characteristics.

**Delay line length** determines pitch. Shorter delays produce higher pitches, longer delays produce lower pitches. The delay is continuously variable to achieve precise tuning across the full frequency range.

**Damping filter** simulates frequency-dependent energy loss. High frequencies decay faster than low frequencies, as in real strings where friction and air resistance affect higher partials more than the fundamental. The brightness parameter controls the filter cutoff, while damping controls overall decay rate.

**Dispersion** simulates stiffness in the string. Ideal strings have perfectly harmonic partials, but real strings (especially thick or stiff ones) exhibit inharmonicity where upper partials are slightly sharp. Dispersion control adds this effect, stretching the harmonic series.

**Curved bridge simulation** modulates the delay time slightly, introducing pitch variations and chorus-like effects that mimic the behavior of strings on curved or flexible bridges.

Position parameter determines where the string is "plucked" or "struck" along its length, affecting which harmonics are emphasized or cancelled.

### Sympathetic String Model

This mode uses multiple instances of the Karplus-Strong string synthesis running in parallel. Instead of one string, up to 8 virtual strings (depending on polyphony setting) are active simultaneously, tuned to different frequencies.

When one string is excited, energy couples between strings through the shared excitation signal and processing, causing unstruck strings to resonate sympathetically at their tuned frequencies. This adds harmonic complexity and sustain beyond what a single string provides.

The structure parameter controls the frequency ratios between sympathetic strings:
- Low values: Consonant intervals (octaves, fifths, thirds)
- Medium values: More complex interval relationships
- High values: Detuned or microtonal intervals creating beating and interference

This creates drone-like textures characteristic of instruments like sitars, tamburas, and other sympathetic string instruments.

---

## Core Parameters

All resonator models respond to four fundamental parameters that shape the resonator's behavior.

### Structure

Controls the internal characteristics of the resonator, with effects varying by model:

**Modal resonator**: Adjusts the frequency ratios between modal filters. Low values produce harmonic mode relationships (string-like). High values introduce inharmonicity (plate-like, metallic).

**Sympathetic strings**: Sets frequency ratios between the multiple strings. Low values create consonant harmonic relationships. High values introduce detuning and microtonal intervals.

**Karplus-Strong string**: Controls dispersion and modulation amount. Low values produce pure harmonic strings. High values add inharmonicity and chorus effects.

Structure morphs the timbral character from harmonic/consonant to inharmonic/dissonant within each model's design.

### Brightness

Manages high-frequency content through filtering applied to both the excitation signal and the resonator's damping characteristics.

**Excitation filtering**: At low brightness values, incoming excitation is low-pass filtered, simulating soft mallets or fingers that produce muted, warm attacks. At high brightness values, the excitation passes unfiltered, simulating hard picks or hammers with sharp, bright attacks.

**Damping filter behavior**: Brightness also affects the resonator's internal damping filter cutoff frequency. Lower brightness causes high frequencies to decay rapidly (woody, warm timbres). Higher brightness allows high frequencies to sustain longer (metallic, bright timbres).

Material simulation:
- Low brightness: Wood, nylon, soft materials
- High brightness: Metal, glass, hard materials

### Damping

Controls decay time of the resonator, ranging from short percussive bursts to sustained tones approaching infinite sustain.

**Modal resonator**: Damping adjusts the Q factor of all band-pass filters simultaneously. Low damping produces short, tight resonances. High damping increases filter Q, allowing extended decay times.

**String models**: Damping controls the feedback amount in the delay line and the strength of the damping filter. Low damping results in quick decay (plucked instruments like guitar or harp). High damping extends sustain (bowed strings or sustained bells).

At maximum damping with sufficient input level, the resonator can achieve self-sustaining oscillation, continuously ringing without additional excitation.

### Position

Determines the point at which the resonator is excited, affecting which harmonics are emphasized or cancelled.

In physical instruments, striking or plucking position significantly alters timbre:
- Center position cancels even harmonics due to symmetry (hollow, square wave-like tone)
- Off-center positions preserve all harmonics with varying amplitudes
- Specific positions (1/3, 1/4 length) cancel particular harmonic series

The resonator models simulate this behavior. Modulating position creates phasing effects, spectral sweeps, and timbral movement without changing pitch.

---

## Polyphony

Rings supports three polyphony modes: monophonic, duophonic, and quadriphonic (4 voices).

**Monophonic**: Single voice with maximum harmonic complexity. Full resolution (up to 64 modes in modal resonator) provides the richest, most detailed timbre. Each new note cuts the previous note's decay.

**Duophonic**: Two voices allow legato playing and two-note intervals. Harmonic complexity per voice is reduced to manage processing load, but two notes can sustain simultaneously.

**Quadriphonic**: Four voices enable full chord voicings. When rapidly triggered (burst of gates), the voices function as a strummer, allowing chords to be arpeggiated and sustained together. Further reduction in per-voice complexity compared to lower polyphony modes.

Polyphony affects CPU allocation: fewer voices mean more processing per voice (higher modal resolution, more complex filtering). More voices distribute processing across multiple instances with reduced per-voice detail.

---

## Excitation System

Resonators require excitation to initiate vibration. Rings provides both internal and external excitation options.

### Internal Excitation

When no external audio is connected, Rings generates excitation internally using a "plucker" algorithm:

**Modal and sympathetic modes**: Short, low-pass filtered pulse simulating a mallet or finger strike

**String mode**: Brief noise burst simulating a pick or bow grab

Internal excitation triggers automatically on note changes (detected via pitch CV) or when a trigger is received at the strum input.

### External Excitation

Any audio signal can excite the resonator:

- Trigger/gate pulses for repeatable, percussive excitation
- Noise bursts for unpredictable, textured strikes
- Contact microphone signals for acoustic excitation
- Continuous signals (oscillators, audio rate modulation) for bowed or sustained excitation
- Granular textures for complex, evolving resonator behavior

External audio is processed by the excitation filter (controlled by brightness) before entering the resonator.

### Trigger Input

The strum input accepts gates or triggers to explicitly command excitation events. Without a strum input, the module auto-detects triggering from sharp transients in incoming audio or note changes on the frequency CV input.

---

## Reverb

An integrated reverb algorithm processes the resonator output, adding space and depth to the dry signal. Reverb parameters are typically controlled via interface elements specific to the implementation (hardware module or software version).

The reverb uses a diffuser network and feedback delays to create dense reflections. It's designed to complement the resonator output without overwhelming the direct signal.

---

## Output Configuration

**ODD output**: Emphasizes odd-numbered harmonics (1st, 3rd, 5th, 7th, etc.), producing a "hollow" or "woody" character.

**EVEN output**: Emphasizes even-numbered harmonics (2nd, 4th, 6th, 8th, etc.), creating brighter, more metallic timbres.

Using both outputs together (mixed or processed separately) provides the full harmonic spectrum. Independent use allows differential processing or pseudo-stereo imaging.

---

## Technical Implementation

**Modal resonator**: Bank of up to 64 State Variable Filters (SVF) configured as band-pass filters. Each filter tuned to a modal frequency with adjustable Q. Structure parameter determines frequency ratios, position affects mode amplitudes.

**String model**: Delay line (up to 2048 samples) with feedback. Damping implemented using FIR and IIR filters. Dispersion via additional delay line (stiffness compensation). DC blocker prevents DC buildup in feedback loop.

**Sympathetic strings**: Multiple string instances (up to 8 depending on polyphony) running in parallel, tuned according to structure parameter.

**Excitation**: State Variable Filter for brightness control, plucker algorithm for internal pluck generation, DC blocker for external input conditioning.

**Polyphony**: Up to 4 independent voice processors, each capable of running modal or string synthesis with shared parameter control.

---

## Typical Applications

### Modal Percussion

Modal resonator with short to medium damping creates tuned percussion: marimbas, vibraphones, bells, chimes. Structure parameter morphs from wooden (low) to metallic (high) timbres.

### Plucked Strings

String model with noise burst excitation and low to medium damping produces plucked string tones. Position and brightness controls articulate attack and sustain characteristics.

### Harmonic Drones

Sympathetic string mode with maximum damping and continuous low-level excitation generates evolving harmonic drones. Structure parameter adjusts intervallic relationships between resonating strings.

### Resonant Processing

Feed drums, vocals, or field recordings into the excitation input. The resonator imposes its harmonic structure onto the input material, creating pitched versions of unpitched sources.

### Physical Modeling Synthesis

Combine with external excitation sources (noise, impulses, contact microphones) to create complete physical modeling instruments. The resonator provides the acoustic body, external sources provide the excitation mechanism.

---

## Technical Specifications

- **Width**: 14HP
- **Depth**: 25mm
- **Power consumption**: +12V: 120mA, -12V: 5mA
- **Polyphony**: 1, 2, or 4 voices
- **Modal resolution**: Up to 64 modes (monophonic)
- **String delay line**: 2048 samples
- **Filter type**: State Variable Filter (modal), FIR/IIR (string damping)

---

Rings implements physical modeling resonator synthesis through parallel band-pass filtering (modal) and delay-line feedback (Karplus-Strong), controlled by a unified four-parameter interface designed for integration into modular synthesis environments.

---

*Based on the [Mutable Instruments Rings documentation](https://pichenettes.github.io/mutable-instruments-documentation/modules/rings/)*
