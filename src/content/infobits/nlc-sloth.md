---
title: "NLC Sloth: Ultra-Slow Chaos Generators"
description: "Nonlinearcircuits' family of chaos modules that evolve over minutes and hours"
---

> "Chaos doesn't have to be fast. Sometimes the most interesting modulation unfolds over minutes, not milliseconds." - Andrew Fitch, Nonlinearcircuits

---

## Introduction

The Sloth is a family of ultra-slow chaos generators designed by Andrew Fitch of Nonlinearcircuits. Unlike LFOs that cycle predictably or sample-and-hold circuits that jump randomly, Sloth modules generate continuously evolving voltages that travel through chaotic attractors—creating organic, never-repeating modulation that can take anywhere from 15 seconds to 2 hours to complete a single orbit.

The circuit is based on a three-dimensional chaotic system producing voltages that constantly change but remain bounded. This creates modulation that feels alive rather than merely random, perfect for ambient music, generative patches, and long-form explorations.

---

## 4HP Sloth Chaos

<img src="/assets/img/nlc-sloth-4hp.jpg" alt="NLC 4HP Sloth Chaos" style="height: 300px; width: auto;" />

The most compact version, offering a complete chaos generator in just 4HP and 16mm depth. The module can be built in four speed configurations: **Regular** (15 seconds), **Slow** (1 minute), **Slooow** (15 minutes), or **Sloooooow** (2+ hours). Speed is determined by component selection during building and cannot be changed afterward.

The module provides two chaos outputs (X and Y) taken from different circuit stages. A single potentiometer doesn't control speed—instead it adjusts how the circuit orbits through its chaotic attractor, influencing which regions the voltage explores. There are no CV inputs; the module is completely autonomous.

With minimal power draw and ultra-shallow depth, it's ideal for adding organic modulation to space-constrained systems. Patch it in, turn the knob, and let it evolve on its own.

---

## Triple Sloth

<img src="/assets/img/nlc-triple-sloth.jpg" alt="NLC Triple Sloth" style="height: 300px; width: auto;" />

The flagship module combines three independent chaos circuits operating at different time scales in 8HP. **Torpor** cycles in 15-30 seconds, **Apathy** takes 60-90 seconds, and **Inertia** requires 30-40 minutes per orbit.

Each circuit provides three outputs (X, Y, and Z), giving nine chaos outputs total. Torpor and Apathy include control knobs and CV inputs that influence their chaotic behavior—not speed, but how they travel through their attractors. Inertia has no controls whatsoever. As the manual states: "It does what it wants."

The module also includes a unique Difference Rectifier that mathematically combines all three circuits (Apathy + Inertia - Torpor), providing positive and negative outputs. This creates two additional modulation sources representing the interaction between all three time scales.

This is the complete Sloth solution: three time scales from fast to glacial, eleven outputs total, and enough complexity to drive an entire generative patch on its own.

---

## 1U Sloth Chaos

<img src="/assets/img/nlc-sloth-1u.jpg" alt="NLC 1U Sloth Chaos" style="height: 300px; width: auto;" />

The 1U version brings Sloth to compact cases in both Intellijel and Pulp Logic formats. Available in three speed variants—**Torpor** (15-20 seconds), **Apathy** (1-3 minutes), and **Inertia** (15-20 minutes)—each provides two chaos outputs and one injection input.

The injection input doesn't control speed; it allows external signals to influence the chaotic behavior. This enables cross-patching multiple 1U Sloths for interacting chaos systems. With no manual controls and minimal depth, these are pure patch-and-play modules.

Perfect for utilizing 1U utility rows or building multi-Sloth systems without sacrificing 3U space.

---

## Understanding Sloth

Sloth differs fundamentally from typical modulation sources. LFOs repeat predictably with defined waveforms. Sample-and-hold jumps between discrete random values. Sloth glides continuously through chaotic attractors—bounded regions of voltage space that outputs orbit within. Think of a ball rolling around inside a strange bowl, never stopping, never repeating exactly, but always staying within boundaries.

The chaos is deterministic (current state determines future evolution) but sensitive (tiny changes create dramatically different paths). This produces structured, organic modulation rather than uniform randomness. Many Sloth circuits orbit between two attractors, spending time around one, transitioning to the other, then back again.

Time scales range from perceptible evolution (15-30 seconds for timbral changes within phrases) to nearly imperceptible drift (hours for installation work). Medium speeds (1-3 minutes) provide sectional variation, while ultra-slow variants (15-40 minutes) create piece-level development.

---

## Comparison

| Version | Width | Outputs | Speeds | Controls | Price |
|---------|-------|---------|--------|----------|-------|
| 4HP | 4HP | 2 | 15s to 2hr (choose one) | 1 pot | $8-26 |
| Triple | 8HP | 11 | 15s, 60s, 30min (all three) | 2 pots, 2 CV | $10-230 |
| 1U | 6HP 1U | 2 | 15s, 1min, or 15min (choose one) | 1 input | $6-12 |

---

## Patching Ideas

Use fast Sloth (Torpor) for timbral evolution—modulate filter cutoff and resonance for continuously morphing tone colors. Medium Sloth (Apathy) works well for spatial changes like panning or reverb size, creating sectional variation. Slow Sloth (Inertia) provides macro-level evolution—overall brightness or texture density that shifts imperceptibly over the piece.

Patch Sloth through a quantizer into VCO pitch for slowly mutating melodies. Multiple Sloths at different speeds create multi-dimensional modulation: timbre shifts every 30 seconds, harmony evolves every 2 minutes, overall character drifts every 30 minutes.

The Triple Sloth's Difference Rectifier outputs work beautifully for voltage-controlled crossfading between two audio sources or controlling feedback intensity in delay/reverb patches. The positive output opens one path while the negative closes another, with the balance shifting chaotically.

For 1U modules with injection inputs, create rings of interacting chaos by patching each Sloth's output into the next one's injection input. This generates emergent complexity from coupled systems.

---

## Philosophy

The Sloth family represents Nonlinearcircuits' philosophy of unconventional modulation. By pushing time scales to extremes—minutes and hours instead of milliseconds—Sloth challenges what modulation can be. It eliminates the "looping" quality of LFO-based patches and provides genuinely non-repeating evolution for generative systems.

The minimal or absent controls embrace autonomy over precision. Sloth asks you to trust the circuit to do interesting things without constant intervention. For ambient, drone, and installation work, this patience and unpredictability is exactly the point.

All Nonlinearcircuits modules are open-source and DIY-focused, keeping costs low while encouraging experimentation. The 4HP Sloth's simplicity makes it an excellent introduction to building analog circuits.

---

*Sometimes the most beautiful evolution happens slowly enough to inhabit, not just observe.*

---

**Sources**: [NLC 4HP Sloth](https://www.nonlinearcircuits.com/modules/p/4hp-sloth-chaos) • [NLC Triple Sloth](https://www.nonlinearcircuits.com/modules/p/triple-sloth) • [NLC 1U Sloth](https://www.nonlinearcircuits.com/modules/p/1u-sloth-chaos) • [ModularGrid](https://modulargrid.net/e/vendors/view/294)
