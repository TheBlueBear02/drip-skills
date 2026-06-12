---
name: neo-brutalism
description: >-
  Applies neo-brutalist UI with thick black borders, hard ink shadows, and mechanical
  press/lift interactions on a cream canvas. Use for bold marketing sites, punk aesthetics,
  sticker UI, or when the user mentions neo-brutalism or brutalism.
version: 1.0.0
metadata:
  stack: React + Tailwind CSS
  category: bold
  mood: [rebellious, loud, tactile, energetic, raw, punk]
  signature_element: hard zero-blur ink shadows at 45 degrees
paths:
  - "skills/neo-brutalism/**"
  - "**/skills/neo-brutalism/**"
---

# NEO-BRUTALISM SKILL

Digital punk rebellion against polished "Clean SaaS" aesthetics. This skill
combines the raw structural honesty of brutalism with the high-saturation energy
of Pop Art, DIY zine design, and Y2K internet culture. Every element has visual
weight. Structure is enforced with thick black lines. Shadows are solid blocks
of ink. Buttons physically click down. Cards physically lift up.

This is the anti-subtle. If it doesn't have a border, it doesn't exist.

Core principles live in `philosophy.md` under **Core Principles**.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read intent before code

#### Tier A (always — read first)
1. `philosophy.md`           ← The punk manifesto. Core Principles define every decision.
2. `tokens/colors.md`        ← 5 colors only. Strict rules. No grays, ever.
3. `tokens/shadows.md`       ← THE defining visual element. Hard ink blocks.

#### Tier B (before full pages)
4. `tokens/typography.md`    ← Space Grotesk Black only. Uppercase. Dense.
5. `tokens/borders.md`       ← Border-4 everywhere. Sharp or full-round. Nothing in between.
6. `tokens/motion.md`        ← Mechanical, snappy, arcade-like. No soft easing.
7. `tokens/spacing.md`       ← Dense grids, asymmetric, sticker layering.
8. `integration/setup.md`    ← Hard shadow utilities and fonts must be wired first.

#### Tier C (before new components)
9. `components/`              ← WHY annotations on borders, shadows, and mechanics.
10. `examples/LandingPage.jsx` ← North star — button push, card lift, textures.

### STEP 2 — Integration
Follow `integration/setup.md`. The hard shadow utilities, Space Grotesk font,
and texture patterns must be in place before any component will look correct.

### STEP 3 — Study the north star
Read `examples/LandingPage.jsx` before building any page. The button push
mechanics, card lift physics, sticker rotation, and texture backgrounds are
the signature — miss any one and the design reads as generic.

### STEP 4 — Build components
Every component file includes WHY annotations explaining the border decisions,
shadow choices, and interaction mechanics. Read them before copying.

For extrapolation tests, see `meta/quality-prompts.md`.

---

## WHAT YOU CAN OVERRIDE
- **Accent colors**: The 3 accent colors can shift while maintaining saturation.
  Hot colors only — no pastels, no muted tones.
- **Rotation angles**: Small tweaks to sticker rotations (`±1–3 degrees`).
- **Content and copy**: All placeholder text is replaceable.
- **Shadow size**: Can scale between small (4px) and massive (20px) for hierarchy.

## WHAT YOU MUST NEVER OVERRIDE
- **Pure black borders**: `#000000` only. Never dark gray. Never `#333`.
- **Sharp corners**: `rounded-none` on all interactive elements. Never `rounded-md`.
- **Space Grotesk font**: Non-negotiable. Its geometry IS the aesthetic.
- **Hard shadow zero-blur**: Any blur on the shadow destroys the visual language.
- **Button push mechanic**: `active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`.
  This is the most iconic interaction in this system. Never soften it.
- **Cream background**: `#FFFDF5` — not white, not gray. The aged-paper warmth
  is essential for the highlighter colors to read correctly against it.
- **High-saturation palette**: No muting, no desaturation. Colors must scream.
- **Uppercase text**: All headings, buttons, labels. Never sentence case on emphasis.
- **Font weight 700/900 only**: Regular weight is forbidden in neo-brutalism.

---

## AGENT BEHAVIOR RULES
- Every interactive element has `border-4 border-black` — no exceptions.
- Buttons use the push mechanic — ALWAYS implement `active:translate` + `active:shadow-none`.
- Cards use the lift mechanic — ALWAYS implement `hover:-translate-y-2` + deeper shadow.
- Background is never flat — add halftone, grid, or noise texture.
- Text in buttons is UPPERCASE, font-bold minimum, tracking-wide.
- Shadows always have zero blur — never use Tailwind's built-in shadow utilities.
- Sticker badges rotate `-6deg` to `6deg` — never perfectly horizontal.
- Display headings use text-stroke hollow treatment where specified in examples.
- Color blocks alternate between accent colors — never a single flat section.
- New components must pass the extrapolation test in `meta/quality-prompts.md`.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+
- Space Grotesk (Google Fonts, weight 700/900)
- Lucide React (strokeWidth 2.5, chunky strokes)
