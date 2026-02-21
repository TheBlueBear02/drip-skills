---
name: botanical-organic
version: 1.0.0
stack: React + Tailwind CSS
category: elegant
mood: [organic, serene, artisanal, warm, sophisticated]
---

# BOTANICAL ORGANIC SKILL

A digital ode to nature. This skill breathes, flows, and grounds itself in
organic beauty — soft, sophisticated, and deeply intentional. It rejects
rigid hyper-digital sharpness in favor of warmth, tactility, and natural
imperfection. Think botanical garden meets ceramics studio meets high-end
editorial design. It whispers rather than shouts.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read before you code
Read these files in order. Do not skip ahead to components.

1. `philosophy.md`            ← The organic manifesto. The WHY behind every decision.
2. `tokens/colors.md`         ← Earth-derived palette. No artificial brights. Ever.
3. `tokens/typography.md`     ← Playfair Display + Source Sans 3. Italics as emphasis.
4. `tokens/shadows.md`        ← Diffused, soft. The antithesis of hard shadows.
5. `tokens/borders.md`        ← Highly rounded. Arch imagery. Organic shapes.
6. `tokens/motion.md`         ← Slow, graceful, honey-like. Nothing snaps.
7. `tokens/spacing.md`        ← Generous whitespace. Breathing room is sacred.

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

---

## THE THREE LAWS

### Law 1: Texture is mandatory
The SVG paper grain overlay at `opacity-[0.015]` fixed to the viewport is
non-negotiable. Without it, the design is flat, cold, and digital.
With it, the design is warm, tactile, and alive. This single element is
the most important thing in the entire system.

### Law 2: Everything is rounded or flowing
`rounded-3xl` on cards. `rounded-full` on buttons and avatars.
Arch borders (`rounded-t-[200px]`) on hero images.
There are no hard rectangular shapes in nature — there are none here either.
Sharp corners are reserved only for deliberate, rare structural moments.

### Law 3: Motion is slow and graceful
`duration-500` minimum for transitions. `duration-700` for images.
`ease-out` always. Nothing in a botanical garden moves quickly or snaps.
Fast animations (under 300ms) break the organic feel entirely.

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

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+
- Playfair Display + Source Sans 3 (Google Fonts)
- Lucide React (strokeWidth 1.5 — thin, elegant)
