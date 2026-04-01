---
title: "NLC Splish: Compact Difference Rectifier"
description: "Nonlinearcircuits' 4HP signal combiner that turns 3 inputs into 8 mathematically related outputs"
---

> "A gloopy mess of the incoming signals, smeared all over your patch." - Andrew Fitch, Nonlinearcircuits

---

## Introduction

The Splish is a compact difference rectifier module designed by Andrew Fitch of Nonlinearcircuits. It takes 3 input signals—CV, audio, or any combination—and produces 8 outputs, each carrying a different mathematical combination of those inputs. It's the smaller sibling of the 12HP Let's Splosh, condensed into just 4HP with no controls, no menus, and no digital processing. Plug signals in, get related but distinct signals out.

The core operation is simple: sum some signals, subtract others, then split the result into positive and negative components. But when multiple stages of this process are chained with different input combinations, the outputs become complex, unpredictable, and musically useful in ways that are difficult to achieve with conventional mixers or logic modules.

---

## How It Works

The Splish is built around **difference rectifier** circuits—each stage consisting of an op-amp and two diodes. The operation of each stage follows three steps:

1. **Sum the "+" inputs** together
2. **Sum the "-" inputs** together
3. **Subtract** the negative sum from the positive sum

If the result is positive, it appears at the "+" output. If negative, it appears at the "-" output. The opposite output sits at 0V.

The Splish contains multiple difference rectifier stages, each wired to combine the 3 inputs in different configurations. This produces 8 outputs arranged in pairs—left column carries positive components, right column carries negative components. Every output is mathematically related to the inputs but distinct from every other output.

The circuit is entirely analog: TL072 op-amps, LL4148 signal diodes, and 100k resistors. No microprocessor, no clock, no quantization. Signals pass through at full bandwidth.

---

## Inputs and Outputs

**3 inputs** accept any signal type. CV and audio can be mixed freely—the circuit makes no distinction. Feed in LFOs, oscillators, envelopes, noise, triggers, or any combination.

**8 outputs** arranged in 4 pairs. Each pair represents the positive and negative components of a different combination of the input signals. All outputs are active simultaneously and independent of each other.

Because the difference rectifier splits signals into positive and negative halves, the outputs behave like a cross between a waveshaper and a logic processor. Simple input waveforms produce complex output waveforms. Complex inputs produce unpredictable results.

---

## Panel

No knobs. No switches. No LEDs. The panel has 3 input jacks and 8 output jacks. That's it. The module's behavior is determined entirely by what you patch into it. This follows Nonlinearcircuits' philosophy of letting the circuit do what it does without intervention—complexity emerges from patching, not from parameter tweaking.

---

## Relationship to Let's Splosh

The Splish is a scaled-down version of the Let's Splosh module. Let's Splosh offers 4 inputs (whimsically named Custard, Treacle, Natto, and Batter) and 16 outputs across 12HP. The Splish trades some of that combinatorial depth for a much smaller footprint—3 inputs and 8 outputs in 4HP. If you want maximum output variety, use Let's Splosh. If you want the core difference rectifier behavior in minimal space, Splish delivers.

---

## Patching Ideas

Route two or three LFOs at different rates into the inputs. The 8 outputs become a bank of complex, evolving CV sources—each related to the original LFOs but following different trajectories. Use them to modulate filter cutoff, resonance, oscillator pitch, panning, and VCA level simultaneously for patches that evolve organically from simple sources.

Feed audio-rate signals into the inputs for waveshaping and harmonic generation. The rectification and subtraction stages create new harmonic content, folded waveforms, and asymmetric distortion. Each output produces a different flavor of mangling from the same source material.

Mix CV and audio simultaneously. An LFO and an oscillator fed into two inputs creates amplitude-modulation-like effects at some outputs and envelope-following behavior at others. The third input adds another dimension of interaction.

For feedback patching, route one or two outputs back into unused inputs—directly or through other modules. This creates self-referential signal paths where the module processes its own output, generating evolving textures that shift between stable patterns and chaotic behavior. Pair with Sloths or Neurons in the feedback loop for additional unpredictability.

---

## Technical Specifications

- **Width**: 4HP
- **Depth**: Shallow (typical NLC build)
- **Power consumption**: ~20mA per rail or less
- **+5V**: Not used
- **Inputs**: 3
- **Outputs**: 8
- **Circuit**: Analog (TL072 op-amps, LL4148 diodes, 100k resistors)
- **Format**: Eurorack

---

All Nonlinearcircuits modules are open-source and DIY-focused, available as PCBs, PCB-and-panel kits, or occasionally fully assembled. The Splish's minimal component count makes it a straightforward build for anyone comfortable with SMD soldering.

---

**Sources**: [NLC Splish](https://www.nonlinearcircuits.com/modules/p/splish) | [NLC Let's Splosh](https://www.nonlinearcircuits.com/modules/p/lets-splosh) | [ModularGrid](https://modulargrid.net/e/nonlinearcircuits-splish)
