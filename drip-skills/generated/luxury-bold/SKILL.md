---
name: luxury-bold
description: >-
  Applies bold minimalist typography with high-contrast monochrome layout and neon yellow
  accent on dark surfaces. WIP generated skill — use only when the user explicitly requests
  luxury-bold. Not recommended for production without review.
version: 0.1.0
disable-model-invocation: true
metadata:
  stack: React + Tailwind CSS + Framer Motion
  category: minimal
  mood: [bold, minimalistic, sophisticated, contemporary, structured]
  signature_element: neon yellow accent on zero-radius monochrome
  status: wip
paths:
  - "skills/generated/luxury-bold/**"
  - "**/skills/generated/luxury-bold/**"
---

# LUXURY BOLD (WIP)

Bold minimalism with architectural typography discipline. High contrast between
near-black surfaces and neon yellow accent `#EFFF00`. Zero border-radius everywhere.
No drop shadows — depth comes from contrast and grid alignment only. Inspired by
Bauhaus structure and high-end editorial layout.

**Status: Work in progress.** This skill lives under `generated/` and has not passed
full quality review. Prefer `minimalist-monochrome` for production editorial work.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read intent before code

#### Tier A (always — read first)
1. `philosophy.md`
2. `tokens/colors.md`
3. `tokens/typography.md`

#### Tier B (before full pages)
4. `tokens/spacing.md`
5. `tokens/borders.md`
6. `tokens/motion.md`
7. `integration/setup.md`

#### Tier C (before new components)
8. `components/`
9. `examples/LandingPage.jsx`

### STEP 2 — Set up the project
Follow `integration/setup.md` exactly.

### STEP 3 — Study components as reference patterns
Read WHY annotations in `components/` before extrapolating. Match the neon accent,
zero-radius, and uppercase bold typography patterns.

### STEP 4 — Use examples as your quality benchmark
Read `examples/LandingPage.jsx` before building any page.

For extrapolation tests, see `meta/quality-prompts.md`.

---

## WHAT YOU CAN OVERRIDE
- Hero image or illustration content
- Section ordering and copy
- Grid column counts within the 12-column system

## WHAT YOU MUST NEVER OVERRIDE
- **Border-radius**: Always `0px` on every element — no exceptions.
- **Accent color**: Primary CTA accent is `#EFFF00` neon yellow on `#1A1A1A` dark.
- **Typography**: Headings use bold uppercase sans-serif at dramatic scale.
- **Shadows**: None. Flat aesthetic only — depth from contrast, not box-shadow.
- **Palette**: Monochrome base with single neon accent — no secondary color ramps.
- **Motion**: 200ms ease-out maximum — never bounce, spring, or slow fades.

---

## AGENT BEHAVIOR RULES
- Headlines are bold uppercase at dramatic scale — typography IS the design.
- Primary CTAs use `#EFFF00` background with `#1A1A1A` text — never inverted on CTAs.
- Layout follows strict 12-column grid with precise alignment — no organic asymmetry.
- Images remain grayscale or high-contrast monochrome — no color photography.
- No decorative patterns, blobs, or ornamental elements — structure only.
- All interactive elements use 200ms ease-out transitions — instant feel, not playful.
- Border-radius is always 0px — verify on every new component before shipping.
- New components must pass the extrapolation test in `meta/quality-prompts.md`.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+
- Framer Motion 10+ (optional, for minimal transitions)
- System sans-serif stack (Helvetica Neue, Arial, sans-serif)
