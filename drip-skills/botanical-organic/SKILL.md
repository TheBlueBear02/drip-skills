---
name: botanical-organic
description: >-
  Applies organic botanical design with paper grain texture, arch imagery, serif italic
  emphasis, and slow graceful motion on warm alabaster backgrounds. Use for wellness,
  sustainable brands, editorial nature sites, or when the user mentions botanical-organic.
version: 1.0.0
metadata:
  stack: React + Tailwind CSS
  category: elegant
  mood: [organic, serene, artisanal, warm, sophisticated, botanical]
  signature_element: mandatory SVG paper grain overlay
paths:
  - "skills/botanical-organic/**"
  - "**/skills/botanical-organic/**"
---

# BOTANICAL ORGANIC SKILL

A digital ode to nature. This skill breathes, flows, and grounds itself in
organic beauty — soft, sophisticated, and deeply intentional. It rejects
rigid hyper-digital sharpness in favor of warmth, tactility, and natural
imperfection. Think botanical garden meets ceramics studio meets high-end
editorial design. It whispers rather than shouts.

Core principles live in `philosophy.md` under **Core Principles**.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read intent before code

#### Tier A (always — read first)
1. `philosophy.md`            ← The organic manifesto. Core Principles define every decision.
2. `tokens/colors.md`         ← Earth-derived palette. No artificial brights. Ever.
3. `tokens/shadows.md`        ← Diffused, soft. The antithesis of hard shadows.

#### Tier B (before full pages)
4. `tokens/typography.md`     ← Playfair Display + Source Sans 3. Italics as emphasis.
5. `tokens/borders.md`        ← Highly rounded. Arch imagery. Organic shapes.
6. `tokens/motion.md`         ← Slow, graceful, honey-like. Nothing snaps.
7. `tokens/spacing.md`        ← Generous whitespace. Breathing room is sacred.
8. `integration/setup.md`     ← Paper grain texture and fonts must be wired first.

#### Tier C (before new components)
9. `components/`               ← WHY annotations on radius, shadow, and motion choices.
10. `examples/LandingPage.jsx`  ← North star — arch images, staggered grid, italic headlines.

### STEP 2 — Integration
Follow `integration/setup.md`. The paper grain texture and font imports must
be in place before any component will feel correct. Without the grain, the
design loses its soul and reads as flat digital.

### STEP 3 — Study the north star
Read `examples/LandingPage.jsx` completely before building any page. The arch
images, staggered grid cards, italic Playfair headlines, and slow hover
transitions are the signature — miss any one and the design reads as generic.

### STEP 4 — Build components
Every component file contains WHY annotations explaining the radius choices,
shadow decisions, and animation curves. Read before copying.

For extrapolation tests, see `meta/quality-prompts.md`.

---

## WHAT YOU CAN OVERRIDE
- Accent color direction (terracotta vs sage as primary CTA)
- Specific font sizes within the established scale
- Image shapes (arch vs blob vs rounded rectangle)
- Section ordering and content

## WHAT YOU MUST NEVER OVERRIDE
- **Paper grain texture**: Non-negotiable. Always present. Always `z-50 pointer-events-none fixed`.
- **Playfair Display for headings**: Its high-contrast strokes are the typographic identity.
- **Earthy palette**: No saturated brights, no pure white backgrounds (#F9F8F4 only), no pure black.
- **Rounded shapes**: Never use sharp rectangular corners on cards or images.
- **Slow animation duration**: Never go below `duration-300` for any hover. Never `linear` easing.
- **Generous whitespace**: Never compress `py-24` to `py-8`. Space is the design.
- **Italic emphasis in headlines**: Single italic words inside Playfair headings are signature.
- **Thin icon strokes**: `stroke-width={1.5}` always. Never bold icons.
- **Soft diffused shadows**: Never use hard, dark, or offset shadows.

---

## AGENT BEHAVIOR RULES
- Every page includes the fixed SVG paper grain overlay at opacity ~0.015 — check first.
- Cards use `rounded-3xl` and green-tinted diffused shadows — never hard offset shadows.
- Hero images use arch border-radius (`rounded-t-[200px]`) — never sharp rectangles.
- Headlines use Playfair Display with one italic emphasis word — never all-regular weight.
- Hover transitions are minimum 500ms ease-out — never snappy or bouncy motion.
- Interactive hovers use terracotta `#C27B66` — never saturated artificial brights.
- Grids use staggered vertical offset on alternating cards — never perfectly flat rows.
- Icons use Lucide at strokeWidth 1.5 — thin and elegant, never chunky.
- Background is warm alabaster `#F9F8F4` — never pure white `#FFFFFF`.
- New components must pass the extrapolation test in `meta/quality-prompts.md`.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+
- Playfair Display + Source Sans 3 (Google Fonts)
- Lucide React (strokeWidth 1.5 — thin, elegant)
