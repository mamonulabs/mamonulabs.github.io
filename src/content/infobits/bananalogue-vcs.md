---
title: "Bananalogue VCS — Voltage Controlled Slopes"
description: "The Bananalogue VCS module: an adaptation of Serge Tcherepnin's Dual Universal Slope Generator with patch and sound examples"
---

## Introduction

The Serge VCS module from Bananalogue is an extremely versatile control voltage generator and audio source. In the early 1970s, Serge Tcherepnin developed the Positive Slew and Negative Slew modules for the original [Serge synthesizer](http://www.cgs.synth.net/synth/serge/). In time these merged into the classic Dual Universal Slope Generator. The Bananalogue VCS is an adaptation of Serge's original circuit with a few new features.

---

## Control Panel

The VCS is a unity gain voltage follower. The rising and falling slopes are independently and jointly voltage controllable over a wide range.

<img src="/assets/img/bananalogue-vcs-panel.jpg" alt="Bananalogue VCS Control Panel" style="height: 500px; width: auto;" />

**A** — Trigger input. Trigger fires envelope, gate sustains level
**B** — Input
**C** — Cycle switch. Connects "End Out" to "Trigger"
**D** — AC Out. AC coupled output
**E** — Output LED
**F** — Output
**G** — Both. VC control both Rise and Fall
**H** — Exp CV. Approximately 1V/Oct scaled input
**I** — Rise knob. Manual control of rise time
**J** — End Out. Outputs a trigger pulse when the envelope completes a cycle
**K** — Fall knob. Manual control of fall time
**L** — VC Rise. Voltage control of Rise
**M** — VC Rise Knob. Attenuates VC Rise amount. Pull the knob out for non-linear slopes
**N** — VC Fall. Voltage control of Fall
**O** — VC Fall Knob. Attenuates VC Fall amount. Pull the knob out for non-linear slopes

---

## Patch & Sound Examples

The VCS is an extremely versatile module, creating and modifying CV and audio. Here are some examples:

### VC Transient Envelope Generator

A pulse at the trigger input will start the envelope, or a gate input will sustain the level and the envelope will fall when the gate goes low. Rise and fall are independently and jointly voltage controllable, with variable linear and exponential wave shapes.

### VC Portamento

Voltage is slewed according to the rise and fall times.

[VC Portamento](/assets/snd/vcs-BANport.mp3)

### VC LFO

When the cycle switch is thrown, the trigger input is connected internally to the end trigger output, creating a VC clock with variable waveform and independent rise and fall times.

[VC LFO — Pulse Filter](/assets/snd/vcs-BANpulsefilter.mp3)

### VC Oscillator

While not as wide ranged or accurate as a dedicated oscillator module, the VCS is still an excellent audio source. The Exp CV input is scaled approximately to the 1V/Oct standard. The output wave can be swept from triangle to saw with linear and non-linear waveforms. End Out also produces a pulse waveform.

[VC Oscillator — Sweep](/assets/snd/vcs-BANsweep.mp3)

[VC Oscillator — Audio FM](/assets/snd/vcs-BANaudiofm.mp3)

### VC Non-Linear Audio Processor (Low-Pass Gate)

If an audio rate signal is slewed, the module responds like a VCF, and a rough VCA. The signal is low-pass filtered down to silence, similar to a low-pass gate.

[VC Non-Linear Audio Processor](/assets/snd/vcs-BANfilter.mp3)

### Envelope Follower

Positive and negative peak detection envelope follower.

### VC Pulse Delay

Trigger input starts the envelope and a trigger will be produced again at the "End Out" when the envelope completes its cycle.

### Sub-Harmonic Generator

If a series of triggers are applied to the VCS faster than the total rise and fall times, the module will divide the incoming signal by a whole number. In the audio range the output will be the sub-harmonic series.

[Sub-Harmonic Generator](/assets/snd/vcs-BANdivide.mp3)

---

## User Submitted Patch & Sound Examples

The following examples were kindly provided by VCS user [Ingo Zobel](http://www.selfoscillate.de/). The front panel settings are given, with a brief mp3 clip.

### Triangle VCO

8 note sequence from an analog sequencer at the Exp CV input.
cycle = on · rise = 12 o'clock · fall = 12 o'clock · both slopes linear

[Triangle VCO — AC Output](/assets/snd/vcs-triangle-vco.mp3)

### Skimmed Sawtooth VCO

8 note sequence from an analog sequencer at the Exp CV input.
cycle = on · rise = 12 o'clock · fall = 12 o'clock · vc rise = fully ccw exponential · vc fall = fully cw exponential

[Skimmed Sawtooth VCO — AC Output](/assets/snd/vcs-skimmedsaw-vco.mp3)

### Narrow Pulse VCO

8 note sequence from an analog sequencer at the Exp CV input.
cycle = on · rise = 12 o'clock · fall = 12 o'clock · vc rise = linear · vc fall = fully cw exponential

[Narrow Pulse VCO — End Out](/assets/snd/vcs-pulse-vco.mp3)

### Low Pass VCF + VCA Response

Analog sequence sent to a VCO. Sawtooth output goes to the VCS Input. A slow triangle wave from an LFO goes to the VC Both input.
cycle = off · rise = fully ccw · fall = fully ccw · both slopes linear

[Low Pass VCF + VCA — AC Output](/assets/snd/vcs-lowpass-vca.mp3)

### High Pass VCF + VCA Response

Same patch as above, but the slow triangle LFO is patched to VC Fall only.
cycle = off · rise = fully ccw · fall = fully ccw · vc rise = linear · vc fall = 9 o'clock exponential

[High Pass VCF + VCA — AC Output](/assets/snd/vcs-highpass-vca.mp3)

### Sync + Low Pass + VCA

Analog sequence sent to two slightly detuned VCOs. Sawtooth of VCO1 goes to VCS Input. Squarewave from VCO2 goes to VCS Trigger Input. Slow triangle LFO goes to VC Both input.
cycle = off · rise = fully ccw · fall = fully ccw · vc rise = 1 o'clock linear · vc fall = 1 o'clock linear

[Sync + Low Pass + VCA — AC Output](/assets/snd/vcs-sync-lowpass-vca.mp3)

Same as above, with Cycle switched on:

[Sync + Low Pass + VCA (Cycle On) — AC Output](/assets/snd/vcs-sync2-lowpass-vca.mp3)

### VC Waveshaper

VCO Sawtooth to VCS Input. A triangle wave from the same VCO is patched to the VC Both input.
cycle = off · rise = fully ccw · fall = fully ccw · both slopes exponential, starting fully cw

First the VC Fall knob is turned from fully cw to fully ccw. Then the VC Rise knob is turned from fully cw to fully ccw.

[VC Waveshaper — AC Output](/assets/snd/vcs-waveshape.mp3)

### Animated Wave

2 VCOs slightly detuned. Sine from VCO1 fed to VCS Input. Sine from VCO2 fed to VC Both input.
cycle = off · rise = fully ccw · fall = fully ccw · vc rise = fully cw exponential · vc fall = fully ccw exponential

[Animated Wave — AC Output](/assets/snd/vcs-animatedwave.mp3)

### VC Slew Limiter

Audio source is a VCO pulse wave. Pulsewidth is modulated by the sinewave of another VCO. The analog sequencer CV goes into the VCS Input. VCS Output is fed into the 1V/Oct CV input of both VCOs. Slew time is modulated by a slowly increasing positive control voltage at the VC Both input.
cycle = off · rise = 2 o'clock · fall = 2 o'clock · vc rise = fully cw linear · vc fall = fully cw linear

[VC Slew Limiter — VCO Pulse Output](/assets/snd/vcs-slew.mp3)

Same patch as above, but the VCS is in Cycle mode. The voltage at the VC Both input goes from −5V in the beginning to +5V at the end.

[VC Slew Limiter (Cycle) — VCO Pulse Output](/assets/snd/vcs-slew-fm.mp3)

### VC Envelope Generator

Audio source is a filtered VCO pulse wave. Pulsewidth is modulated by the sinewave of another VCO. Filter cutoff is modulated by the VCS Output. The VCS is triggered with each note. A second sequencer row goes into the VC Fall input for increasing the decay time on three of the eight notes in the sequence.
cycle = off · rise = fully ccw · fall = 2 o'clock · vc rise = fully cw exponential · vc fall = 1 o'clock exponential

[VC Envelope Generator — VCF Output](/assets/snd/vcs-env-mod.mp3)

### VC Pulse Delay

Audio source is a filtered VCO pulse wave. Pulsewidth is modulated by the sinewave of another VCO. The filter is a multimode filter in lowpass mode. Two ADSR envelopes are used for cutoff modulation. Every note triggers the first envelope and also the VCS. The second envelope is triggered by the End Out of the VCS. In the first half of the recording the filter is modulated by the first envelope only. In the second half you hear a modulation from both envelopes.
cycle = off · rise = 10 o'clock · fall = 2 o'clock · both slopes linear

[VC Pulse Delay — VCF Lowpass Output](/assets/snd/vcs-pulsedelay.mp3)

### VC Envelope Follower

The audio source is an analog drum machine, coming into the system through an external input module. From there the audio signal is fed into the VCS Input and a lowpass filter. The cutoff of the filter is modulated by the VCS Output. A variable control voltage at the VC Both input is used to modulate the slew time of the envelope follower. The voltage is slowly increasing from −10V in the beginning to +10V at the end.
cycle = off · rise = 9 o'clock · fall = 12 o'clock · vc rise = half past 1 linear · vc fall = half past 1 linear

[VC Envelope Follower — VCF Output](/assets/snd/vcs-envfollow.mp3)

---

*Information and sound examples from the Internet Archive Wayback Machine of the original [Bananalogue VCS page](https://web.archive.org/web/20080224013413/www.bananalogue.com/vcs.html). User-submitted examples by [Ingo Zobel](http://www.selfoscillate.de/).*
