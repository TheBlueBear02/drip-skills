---
name: hand-drawn
description: >-
  Applies hand-drawn sketch aesthetic with wobbly multi-value border-radius, hard
  zero-blur offset shadows, and handwritten fonts on dot-grid paper. Use for creative
  portfolios, playful apps, or when the user mentions hand-drawn, sketch UI, or doodle design.
version: 1.0.0
metadata:
  stack: React + Tailwind CSS
  category: playful
  mood: [sketchy, creative, human, approachable, spontaneous, playful]
  signature_element: wobbly border-radius with hard offset shadows
paths:
  - "skills/hand-drawn/**"
  - "**/skills/hand-drawn/**"
---

# HAND-DRAWN SKILL

Authentic imperfection and human touch in a digital world. This skill
rejects the clinical precision of modern UI in favor of organic, playful
irregularity — sticky notes on a wall, napkin diagrams, sketches on
notebook paper. It celebrates messiness as honesty. Every line is wobbly.
Every shadow is hard. Every font is handwritten.

Core principles live in `philosophy.md` under **Core Principles**.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read intent before code

#### Tier A (always — read first)
1. `philosophy.md`          ← Why wobbly. Why hard shadows. Core Principles.
2. `tokens/colors.md`       ← 4 colors only. Pencil, paper, red marker, blue pen.
3. `tokens/borders.md`      ← CRITICAL. The wobbly border-radius technique.

#### Tier B (before full pages)
4. `tokens/typography.md`   ← Kalam + Patrick Hand. Scale dramatically for notes.
5. `tokens/shadows.md`      ← Hard offset, zero blur. Never soft shadows.
6. `tokens/motion.md`       ← Snappy 100ms. Rotation jiggle. Button press-flat.
7. `tokens/spacing.md`      ← py-20 sections. Generous gaps. Contained sketchbook.
8. `integration/setup.md`   ← Fonts, dot-grid background, wobbly radius config.

#### Tier C (before new components)
9. `components/`             ← WHY annotations on every reference component.
10. `examples/LandingPage.jsx` ← North star — wobbly borders, tape, press-flat buttons.

### STEP 2 — Integration
Follow `integration/setup.md`. Font imports, dot-grid background, and the
wobbly border-radius config extensions must be in place before any
component will look hand-drawn.

### STEP 3 — Study the north star
Read `examples/LandingPage.jsx` completely before building any page.
The wobbly borders, hard shadows, button press-flat mechanic, tape
decorations, SVG squiggles, and rotation jiggle are all required.

### STEP 4 — Build components
Every component file includes WHY annotations. Read them before copying.

For extrapolation tests, see `meta/quality-prompts.md`.

---

## WHAT YOU CAN OVERRIDE
- Rotation angles (stay within ±3 degrees)
- Which wobbly radius variant to use on a given element
- Decoration type (tape vs tack vs none)
- Specific accent moments (red vs blue)

## WHAT YOU MUST NEVER OVERRIDE
- **Wobbly border-radius**: Never standard rounded classes on any visible container
- **Hard shadows**: Never add blur. `4px 4px 0px 0px #2d2d2d` — zero blur always
- **Kalam + Patrick Hand**: Non-negotiable. These ARE the aesthetic.
- **Button press-flat mechanic**: `active: shadow-none + translate(4px,4px)` — always
- **Dot-grid background**: The paper texture is mandatory. Without it the background is dead.
- **Foreground color #2d2d2d**: Never pure black. The pencil lead color is warmer.
- **Background #fdfbf7**: Never pure white. The warm paper color is essential.
- **Dashed borders on secondary elements**: Solid primary, dashed secondary — always.
- **Rotation on decorative elements**: Things tilted at rest feel hand-placed.

---

## AGENT BEHAVIOR RULES
- Every container uses irregular multi-value `border-radius` — never `rounded-lg` or `rounded-md`.
- Shadows are always hard offset `4px 4px 0px 0px #2d2d2d` — zero blur radius ever.
- All text uses Kalam (headings) or Patrick Hand (body) — never system or geometric sans fonts.
- Buttons implement press-flat: hover reduces shadow, active kills shadow and translates fully.
- Dot-grid paper texture appears on every section background — flat white is wrong.
- Decorative elements (tape, tacks, squiggles) rotate ±1–3deg at rest — never perfectly aligned.
- Secondary UI elements use dashed borders; primary elements use solid pencil-stroke borders.
- Motion is snappy at 100ms linear — never slow ease-in-out on interactions.
- Post-it yellow `#fff9c4` is reserved for highlight cards — not the default surface.
- New components must pass the extrapolation test in `meta/quality-prompts.md`.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+
- Kalam (Google Fonts, weight 700)
- Patrick Hand (Google Fonts, weight 400)
- Lucide React (strokeWidth 2.5–3 — thick, sketchy strokes)
