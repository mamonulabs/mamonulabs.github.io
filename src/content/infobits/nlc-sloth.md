---
title: "NLC Sloth: Ultra-Slow Chaos Across Formats"
description: "Exploring Nonlinearcircuits' family of ultra-slow chaos generators from 4HP to 1U"
---

> "Chaos doesn't have to be fast. Sometimes the most interesting modulation unfolds over minutes, not milliseconds." - Andrew Fitch, Nonlinearcircuits

---

## Introduction

The Sloth is a family of ultra-slow chaos generators designed by Andrew Fitch of Nonlinearcircuits (NLC). Unlike traditional LFOs that cycle predictably, or sample-and-hold circuits that jump randomly, Sloth modules generate continuously evolving voltages that travel through chaotic attractors—creating organic, never-repeating modulation that can take anywhere from 15 seconds to 20 hours to complete a single orbit.

The Sloth circuit is based on a three-dimensional chaotic system that produces output voltages which are constantly changing but remain within bounded regions. This creates modulation that feels alive and intentional rather than merely random, making Sloth modules ideal for ambient music, generative patches, and long-form sonic explorations.

Nonlinearcircuits offers the Sloth in three distinct formats, each with multiple speed variants, allowing modularists to choose the right combination of time scale and panel density for their system.

---

## 4HP Sloth Chaos (Single)

<img src="/assets/img/nlc-sloth-4hp.jpg" alt="NLC 4HP Sloth Chaos" style="max-width: 60%;" />

### Overview

The 4HP Sloth Chaos is the most compact version of the Sloth circuit, offering a complete chaos generator in a minimal footprint. This module is perfect for systems where space is at a premium but ultra-slow modulation is essential.

### Physical Specifications

- **Format**: Eurorack (3U)
- **Width**: 4HP
- **Depth**: 16mm (ultra-shallow)
- **Power Consumption**: Minimal (specific values vary by build)
- **Price Range**: $8-26 USD (depending on configuration)

### Speed Variants

The 4HP Sloth can be built in four distinct speed configurations:

**Regular (15 seconds per orbit)**:
- Fastest Sloth variant
- Completes one chaotic cycle approximately every 15 seconds
- Useful for slowly evolving textures and gradual timbral shifts
- Still much slower than typical LFOs

**Slow (1 minute per orbit)**:
- Takes approximately 60 seconds to complete one orbit
- Ideal for evolving pad sounds and ambient drones
- Creates perceptible change without drawing attention to the modulation

**Slooow (15 minutes per orbit)**:
- Extremely slow evolution taking 15 minutes per cycle
- Perfect for long-form generative compositions
- Modulation unfolds almost imperceptibly, creating subtle drift

**Sloooooow (2+ hours per orbit)**:
- Ultra-slow chaos taking approximately 2 hours per complete orbit
- For installation work and extremely long-form pieces
- Creates nearly imperceptible drift that reveals itself over extended listening

### Functionality

**Outputs**:
- **X Output**: First chaos output, taken from one stage of the circuit
- **Y Output**: Second chaos output, taken from a different circuit stage
- Both outputs provide related but distinct voltages that evolve together through the chaotic attractor

**Control**:
- **Potentiometer**: Does NOT control speed (which is fixed by component choice)
- Instead adjusts the balance of the chaotic orbit
- Influences how much time the circuit spends around different regions of the attractor
- Allows shaping of the probability distribution without changing frequency

**Inputs**:
- No CV inputs on the basic 4HP version
- Completely self-contained and autonomous

### Design Philosophy

The 4HP Sloth embraces extreme simplicity. With no inputs and only a single control, it's designed to be patched in and left to do its work. The lack of CV control is intentional—the Sloth is meant to be an autonomous source of organic change, not a controllable modulator.

The compact 16mm depth makes it ideal for shallow cases, and the minimal power draw means it barely impacts power supply headroom.

### Use Cases

- **Ambient Pads**: Use X and Y to modulate filter cutoff and resonance for evolving textures
- **Generative Sequences**: Control quantized pitch CV for slowly mutating melodic patterns
- **Parameter Drift**: Add gradual evolution to static patches
- **Installation Art**: Ultra-slow variants provide hours of non-repeating modulation
- **Dual Modulation**: X and Y outputs create related but distinct modulation paths

---

## Triple Sloth (8HP)

<img src="/assets/img/nlc-triple-sloth.jpg" alt="NLC Triple Sloth" style="max-width: 60%;" />

### Overview

The Triple Sloth is the flagship Sloth module, combining three independent chaos circuits operating at different time scales in a single 8HP module. This configuration provides a complete spectrum of ultra-slow modulation sources, from 15 seconds to 40 minutes per orbit.

### Physical Specifications

- **Format**: Eurorack (3U)
- **Width**: 8HP
- **Depth**: Approximately 30mm
- **Power Consumption**: Moderate (three chaos circuits)
- **Price Range**: $10-230 USD (PCB only to fully assembled)

### The Three Sloths

The Triple Sloth contains three distinct chaos generators, each named for its characteristic speed:

**Torpor (15-30 seconds)**:
- Fastest of the three circuits
- Completes orbits around two strange attractors in 15-30 seconds
- Provides rhythmically relevant modulation
- Includes CV input and attenuator knob
- Best for evolving timbres and gradual filter sweeps

**Apathy (60-90 seconds)**:
- Mid-speed chaos generator
- Takes 60-90 seconds per complete orbit
- Creates slowly shifting modulation ideal for pads and textures
- Includes CV input and attenuator knob
- Bridges the gap between Torpor's relative speed and Inertia's glacial pace

**Inertia (30-40 minutes)**:
- Ultra-slow chaos generator
- Completes one orbit in 30-40 minutes
- Perfect for installation work and long-form compositions
- **No user controls whatsoever**
- "It does what it wants" - completely autonomous
- Creates nearly imperceptible drift that reveals itself over extended time

### Outputs

Each chaos generator provides three outputs:

**X, Y, and Z Outputs** (per Sloth):
- **X**: First chaos voltage from specific circuit stage
- **Y**: Second chaos voltage from different circuit stage
- **Z**: Inverted version of Y (identical signal, opposite polarity)

This gives **nine chaos outputs total** from the module (3 Sloths × 3 outputs each).

All outputs are taken from different stages of their respective circuits, providing related but distinct voltages that travel together through their chaotic attractors but express different aspects of the underlying system.

### Difference Rectifier

The Triple Sloth includes a unique **Difference Rectifier** circuit that combines all three Z outputs mathematically:

**Calculation**: VApathy + VInertia - VTorpor

**Outputs**:
- **Positive Output**: Voltage when (Apathy + Inertia - Torpor) > 0V
- **Negative Output**: Voltage when (Apathy + Inertia - Torpor) < 0V

This creates two additional modulation sources that represent the interaction between all three chaos circuits, providing even more complex, slowly evolving voltages.

### Controls

**Torpor Section**:
- **Attenuator Knob**: Adjusts influence on chaotic orbit
- **CV Input**: External voltage control of orbit balance

**Apathy Section**:
- **Attenuator Knob**: Adjusts influence on chaotic orbit
- **CV Input**: External voltage control of orbit balance

**Inertia Section**:
- **No controls**: Completely autonomous
- "It does what it wants"

**Important Note**: The knobs and CV inputs do NOT control speed or frequency. Instead, they influence how the chaotic system travels through its attractor—affecting which regions the voltage spends more time exploring. This shapes the probability distribution and character of the modulation without changing the fundamental time scale.

### Functionality

**Chaotic Behavior**:
- All three circuits generate true chaotic voltages
- Outputs never repeat exactly
- Bounded but unpredictable evolution
- Each circuit travels through two strange attractors
- Time spent around each attractor influenced by controls (Torpor and Apathy only)

**Output Voltage Range**:
- Typically ±2V to ±4V range
- Exact range varies by circuit and moment
- Suitable for most CV modulation applications
- Can be attenuated/offset with external utilities if needed

### Use Cases

**Multi-Timescale Modulation**:
- Use all three Sloths simultaneously for modulation at different time scales
- Torpor: Short-term evolution (timbral shifts)
- Apathy: Medium-term evolution (phrase-level changes)
- Inertia: Long-term evolution (piece-level development)

**Generative Composition**:
- Patch all nine outputs to various parameters
- Create self-evolving patches that change organically over 30+ minutes
- No two performances will ever be identical

**Ambient and Drone**:
- Modulate multiple oscillator frequencies for slowly shifting harmonies
- Control filter parameters for evolving textures
- Adjust effect parameters for changing spatial characteristics

**Installation Art**:
- Inertia's 30-40 minute cycles perfect for gallery installations
- Difference Rectifier outputs provide complex interaction between all three time scales

**Experimental Mixing**:
- Use Difference Rectifier for voltage-controlled mixing/crossfading
- Create evolving feedback patches with positive/negative outputs

---

## 1U Sloth Chaos

<img src="/assets/img/nlc-sloth-1u.jpg" alt="NLC 1U Sloth Chaos" style="max-width: 60%;" />

### Overview

The 1U Sloth Chaos brings the Sloth circuit to compact 1U format cases, available in both Intellijel and Pulp Logic panel formats. This version offers a single Sloth circuit per module, with three speed variants matching the individual circuits from the Triple Sloth.

### Physical Specifications

- **Format**: 1U (Intellijel and Pulp Logic compatible)
- **Width**: 6HP (1U)
- **Depth**: Minimal
- **Power**: 10-pin Eurorack power connector
- **Price Range**: $6-12 USD (depending on configuration)

### Speed Variants

The 1U Sloth is available in three versions, matching the individual circuits from the Triple Sloth:

**Torpor (15-20 second orbits)**:
- Fastest 1U variant
- Similar to Torpor from the Triple Sloth
- Completes chaotic cycles in 15-20 seconds
- Best for relatively quick timbral evolution

**Apathy (1-3 minute orbits)**:
- Mid-speed chaos generator
- Takes 1-3 minutes per orbit
- Ideal for gradually evolving textures and ambient work

**Inertia (15-20 minute orbits)**:
- Ultra-slow chaos generation
- 15-20 minutes per complete orbit
- Note: Faster than Triple Sloth's Inertia (30-40 min), but still extremely slow
- Perfect for long-form generative composition

### Functionality

**Outputs**:
- **Two Chaos Outputs**: Different signals from different circuit stages
- Related but distinct voltages that evolve together through the attractor
- No labels (outputs determined by circuit design)

**Input**:
- **Signal Injection Input**: Allows external signal to influence the chaos circuit
- Not a CV input for speed control
- Instead injects voltage into the circuit, disturbing and modulating the chaotic behavior
- Can create more complex interactions when multiple 1U Sloths are cross-patched

**No Manual Controls**:
- Completely autonomous operation
- No knobs or switches
- Simple patch-and-play design

### Panel Formats

**Intellijel Format**:
- Designed for Intellijel 1U cases
- Uses Intellijel 1U panel specifications
- Direct compatibility with Intellijel systems

**Pulp Logic Format**:
- Designed for Pulp Logic 1U cases
- Different panel height and mounting
- Compatible with Tile format systems

### Design Considerations

**Early Version Note (V1)**:
- White PCB versions have reversed printing
- Components must be installed on the blank side of the PCB
- Later versions corrected this issue

**Power Compatibility**:
- Standard Eurorack 10-pin connector
- Can be powered from any Eurorack power supply
- Very low power consumption

### Use Cases

**Compact Systems**:
- Perfect for small cases where HP is precious
- 1U row utilization for utility modules
- Add ultra-slow modulation without sacrificing 3U space

**Utility Modulation**:
- Fill out 1U rows with slow chaotic CV sources
- Pair with other 1U modules (mixers, attenuators, logic)
- Create dedicated modulation row

**Multiple Sloths**:
- Build a multi-Sloth system across the 1U row
- Use all three variants (Torpor, Apathy, Inertia) for different time scales
- Cross-patch injection inputs for interacting chaos circuits

**Minimal Setups**:
- Add organic modulation to otherwise static 1U utility sections
- Pair with 1U quantizers for chaotic melodic generation
- Modulate 1U mixers and VCAs for evolving dynamics

---

## Comparative Overview

### Format Comparison

| Version | Format | Width | Outputs | Speed Options | Controls | Best For |
|---------|--------|-------|---------|---------------|----------|----------|
| **4HP Single** | 3U Eurorack | 4HP | 2 (X, Y) | 4 variants (15s - 2hr) | 1 pot | Minimal systems, single timescale |
| **Triple Sloth** | 3U Eurorack | 8HP | 11 (9 chaos + 2 diff rect) | All 3 (15s - 40min) | 2 pots, 2 CV ins | Complete solution, multi-timescale |
| **1U** | 1U (I/PL) | 6HP | 2 | 3 variants (15s - 20min) | None (1 input) | Compact cases, utility row |

### Speed Comparison

**4HP Single Sloth**:
- Regular: 15 seconds
- Slow: 1 minute
- Slooow: 15 minutes
- Sloooooow: 2+ hours

**Triple Sloth**:
- Torpor: 15-30 seconds
- Apathy: 60-90 seconds
- Inertia: 30-40 minutes

**1U Sloth**:
- Torpor: 15-20 seconds
- Apathy: 1-3 minutes
- Inertia: 15-20 minutes

### Control Philosophy

**4HP Single**: Minimal control—one pot to influence orbit, no CV input. Embrace autonomy.

**Triple Sloth**: Moderate control—Torpor and Apathy have pots and CV inputs, Inertia is autonomous. Balance between control and chaos.

**1U**: No controls—only injection input to disturb the circuit. Maximum autonomy in minimal space.

---

## Understanding Sloth Chaos

### What Makes Sloth Different?

**Not an LFO**:
- LFOs repeat predictably—same waveform, same cycle
- Sloth never repeats—chaotic trajectories through attractors
- LFOs have defined shapes (sine, triangle, square)
- Sloth has organic, continuously varying shapes

**Not Sample-and-Hold**:
- S&H jumps discretely between random values
- Sloth glides continuously through voltage space
- S&H is uniformly random
- Sloth is bounded and structured by attractor geometry

**Not Random CV**:
- Random CV has no memory or structure
- Sloth trajectories are deterministic chaos—current state determines future evolution
- Random CV probability is static
- Sloth explores different regions of attractor based on initial conditions and influences

### Chaotic Attractors Explained

A chaotic attractor is a region of voltage space that the circuit's outputs orbit within. Think of it like a strange bowl that a ball rolls around inside—the ball never stops moving, never repeats the same path exactly, but stays within the bowl's boundaries.

**Key Characteristics**:
- **Bounded**: Voltages stay within a limited range (typically ±2 to ±4V)
- **Non-repeating**: Exact trajectory never repeats
- **Deterministic**: Current state determines future evolution (not random)
- **Sensitive**: Tiny changes in conditions create dramatically different long-term paths
- **Structured**: Output has shape and form, not uniform randomness

**Multiple Attractors**:
Sloth circuits (especially Torpor and Apathy) orbit between two strange attractors. The circuit spends time exploring the neighborhood of one attractor, then transitions to orbit the other, then back again. This creates a meta-pattern where the modulation has both local complexity (within one attractor) and global structure (transitions between attractors).

The control knobs and CV inputs influence how much time is spent near each attractor, allowing you to shape the long-term probability distribution without changing the fundamental chaotic nature.

### Time Scales and Musical Application

**Fast Sloth (15-30 seconds)**:
- Perceivable as evolving modulation
- Suitable for timbral changes within a single musical phrase
- Can create "slowly wobbling" filters or pitch variations
- Still much slower than typical LFOs (which operate in 0.1-10 second ranges)

**Medium Sloth (1-3 minutes)**:
- Evolution happens across multiple phrases or verses
- Creates sectional variation in longer pieces
- Modulation unfolds subtly—listeners notice change without tracking the modulator
- Perfect for ambient textures that evolve but don't draw attention to themselves

**Slow Sloth (15-40 minutes)**:
- Evolution happens across an entire piece or set
- Changes are nearly imperceptible moment-to-moment
- Reveals itself through extended listening
- Ideal for installation work, meditation music, or long-form ambient

**Ultra-Slow Sloth (2+ hours)**:
- Modulation unfolds over gallery hours or installation runtime
- Creates sense of living, breathing environment
- Perfect for generative systems meant to run indefinitely
- Ensures no two listening sessions are identical

---

## Patching Strategies

### Single Sloth Patches

**Slowly Evolving Filter**:
- Patch Sloth X to filter cutoff
- Patch Sloth Y to filter resonance
- Creates continuously morphing timbral character
- Add attenuators to taste

**Chaotic Pitch Drift**:
- Patch Sloth output through quantizer
- Send quantized output to VCO 1V/oct input
- Creates slowly mutating melodies
- Combine with clock for generative sequences

**Wandering Delay**:
- Patch Sloth to delay time CV input
- Creates continuously shifting delay times
- Useful for ambient guitars, pads, or feedback patches

### Multi-Sloth Patches (Triple Sloth or Multiple Modules)

**Three-Dimensional Modulation**:
- Torpor → Timbral changes (filter, waveshape)
- Apathy → Spatial changes (panning, reverb size)
- Inertia → Macro changes (overall brightness, density)
- Creates evolution at three different time scales simultaneously

**Chaotic State Variable Filter**:
- Torpor X → Cutoff frequency
- Apathy Y → Resonance
- Inertia X → Filter mode CV (LP/BP/HP)
- Creates filter that evolves in frequency, resonance, and character

**Generative Polyphony**:
- Patch three Sloth outputs through three quantizers
- Send to three VCOs
- Creates slowly evolving three-note harmonies
- Chords drift and morph over time

**Cross-Modulated Chaos** (1U with injection inputs):
- Patch Sloth 1 output → Sloth 2 injection input
- Patch Sloth 2 output → Sloth 3 injection input
- Patch Sloth 3 output → Sloth 1 injection input
- Creates ring of interacting chaos circuits
- Emergent complexity from coupled systems

### Difference Rectifier Applications (Triple Sloth)

**Voltage-Controlled Mixing**:
- Use positive and negative outputs as VCA CV inputs
- Send audio to each VCA
- Creates chaotic crossfading between two sources
- Balance shifts slowly and organically

**Feedback Routing**:
- Positive output opens feedback path
- Negative output closes feedback path
- Creates slowly varying feedback intensity
- Useful with delays, reverbs, or distortion

**Dual Modulation**:
- Positive output → Parameter A
- Negative output → Parameter B
- Creates inverse correlation between two parameters
- As one increases, the other decreases
- But relationship evolves chaotically over time

---

## Technical Notes

### Circuit Topology

The Sloth is based on a three-dimensional autonomous chaotic oscillator circuit. While the exact topology is proprietary to Nonlinearcircuits, it shares characteristics with classic chaotic systems like the Rössler attractor or Chua's circuit.

**Key Technical Features**:
- Analog circuit (not digital simulation)
- Three-dimensional state space
- Multiple stable and unstable equilibrium points
- Continuous-time evolution (not clocked)
- Very low frequency operation (sub-audio)

### Component Selection and Speed

Speed variants are achieved through component selection during the build process:
- Different capacitor values change time constants
- Larger capacitors = slower operation
- Resistor values also influence timing
- Once built, speed is fixed (not voltage-controllable)

This is why speed variants are chosen at build time rather than being switchable or CV-controllable.

### Output Characteristics

**Voltage Range**:
- Typical: ±2V to ±4V
- Not calibrated to specific range
- Varies by circuit state and attractor region
- Use external utilities for precise ranging if needed

**Slew Rate**:
- Continuously variable
- Sometimes gentle slopes
- Sometimes steeper transitions (attractor switching)
- Never instantaneous jumps (unlike S&H)

**Frequency Content**:
- Predominantly very low frequencies
- Some harmonic content from attractor transitions
- Suitable for CV (not audio)
- Could be used as sub-bass modulation source at audio rates if amplified

---

## DIY and Availability

### Build Difficulty

**4HP Single Sloth**:
- Described as "very simple to build"
- Through-hole components
- Minimal part count
- Good beginner project

**Triple Sloth**:
- More complex (three circuits + difference rectifier)
- Still through-hole
- Well-documented build guide
- Intermediate skill level

**1U Sloth**:
- Simple circuit
- Note about V1 reversed PCB printing
- Check version before building

### Purchase Options

Nonlinearcircuits offers several purchase tiers for each module:

**PCB Only** ($6-10):
- Just the circuit board
- Source components yourself
- Most economical option
- Requires electronics knowledge

**PCB + Panel** ($10-20):
- Circuit board and front panel
- Still need to source and install components
- Good for experienced DIY builders

**Complete Kit**:
- PCB, panel, and all components
- Everything needed to build
- Follow build guide for assembly

**Assembled Module** ($26-230):
- Fully built and tested
- Ready to use
- Higher price reflects labor
- Typical 1-4 week build time

### Resources

- **Build Guides**: Detailed PDFs with step-by-step instructions
- **BOMs**: Complete bill of materials with part numbers
- **Panel Templates**: For custom panel creation
- **Mouser Carts**: Pre-configured component orders for easy sourcing
- **Community**: Active modular community support and documentation

---

## Legacy and Influence

The Sloth family represents Nonlinearcircuits' philosophy of exploring unconventional modulation sources. By pushing time scales to extremes—minutes and hours instead of seconds—the Sloth challenges conventional notions of what modulation can be.

### Impact on Modular Synthesis

**Ambient and Drone Music**:
- Sloth has become essential for artists working with long-form composition
- Provides the glacial evolution that defines ambient aesthetics
- Eliminates the "looping" quality of traditional LFO-based modulation

**Generative Systems**:
- True non-repeating behavior makes Sloth ideal for generative patches
- Long time scales mean patches can run for hours without repetition
- Multiple Sloths create complex, multi-timescale evolution

**Installation Art**:
- Ultra-slow variants perfect for sound installations
- Creates living, breathing soundscapes that change over gallery hours
- Each visitor's experience is unique

**Philosophical Shift**:
- Demonstrates that control isn't always desirable
- Embraces unpredictability and autonomy
- Represents trust in the circuit to do interesting things without intervention

### The DIY Ethos

Nonlinearcircuits modules are all open-source and DIY-focused. This philosophy has:
- Made unusual circuits accessible to builders worldwide
- Fostered experimentation and modification
- Built a community around unconventional modulation
- Kept costs low while encouraging learning

The Sloth's simplicity (especially the 4HP version) makes it an excellent introduction to DIY modular synthesis and analog circuit building.

---

## Conclusion

The Nonlinearcircuits Sloth family offers something rare in modular synthesis: patience. In a world of snappy envelopes and quick LFOs, Sloth asks us to think in minutes and hours instead of milliseconds and seconds.

Whether you choose the minimal 4HP Single, the comprehensive Triple Sloth, or the compact 1U variant, you're adding a source of organic, never-repeating modulation that unfolds slowly enough to feel intentional but chaotically enough to remain surprising.

Sloth modules excel in:
- **Ambient and drone music** where evolution happens slowly
- **Generative composition** where true non-repeating behavior matters
- **Installation art** where runtime is measured in hours or days
- **Experimental patching** where unpredictability is a feature, not a bug

By embracing ultra-slow time scales and autonomous operation, Sloth reminds us that some of the most interesting musical events unfold too slowly to control—and that's exactly the point.

---

## Sources and Further Reading

- [Nonlinearcircuits 4HP Sloth Chaos](https://www.nonlinearcircuits.com/modules/p/4hp-sloth-chaos)
- [Nonlinearcircuits Triple Sloth](https://www.nonlinearcircuits.com/modules/p/triple-sloth)
- [Nonlinearcircuits 1U Sloth Chaos](https://www.nonlinearcircuits.com/modules/p/1u-sloth-chaos)
- [ModularGrid: Sloth Chaos 4HP](https://modulargrid.net/e/nonlinearcircuits-sloth-chaos-4hp)
- [ModularGrid: Triple Sloths V2](https://modulargrid.net/e/nonlinearcircuits-triple-sloths-v2)
- [ModularGrid: 1U Sloth Chaos](https://modulargrid.net/e/nonlinearcircuits-1u-sloth-chaos)
- [Triple Sloth Build Guide (PDF)](https://www.nonlinearcircuits.com/s/8HP-Sloth-build-and-BOM-new.pdf)
- [Momo Modular: Triple Sloth](https://momomodular.com/products/nonlinearcircuits-triple-sloth-nlc-sloths-eurorack-synth-module-white-gold)

---

*The Sloth family proves that chaos doesn't need to be fast to be fascinating. Sometimes the most beautiful evolution happens slowly enough to inhabit, not just observe.*
