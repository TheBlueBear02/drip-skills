---
name: art-deco
description: >-
  Applies Art Deco luxury UI with obsidian black, gold glows, zero border-radius, and
  theatrical all-caps typography (The Gatsby aesthetic). Use for premium brands, cultural
  institutions, luxury services, or when the user mentions art-deco or Gatsby design.
version: 1.0.0
metadata:
  stack: React + Tailwind CSS
  category: luxury
  mood: [opulent, geometric, theatrical, timeless, architectural, exclusive]
  signature_element: gold glows on crosshatch obsidian backgrounds
paths:
  - "skills/art-deco/**"
  - "**/skills/art-deco/**"
---

# ART DECO SKILL — THE GATSBY AESTHETIC

Opulence, mathematical precision, and architectural grandeur. This skill
captures the Roaring Twenties — jazz-age prosperity expressed through hard
geometry, extreme contrast, and metallic gold on obsidian black. It's
"The Great Gatsby" meets Fritz Lang's "Metropolis": champagne towers in
skyscraper ballrooms, chrome elevator grilles, sunburst marquees.

This is maximalist restraint. Every element is intentional and ornamental,
yet precisely placed. Not for soft SaaS startups — for luxury brands,
premium services, cultural institutions, and products that want to feel
like heirlooms.

Core principles live in `philosophy.md` under **Core Principles**.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read intent before code

#### Tier A (always — read first)
1. `philosophy.md`          ← The Gatsby manifesto. Core Principles define every decision.
2. `tokens/colors.md`       ← Obsidian black, champagne cream, metallic gold. Nothing else.
3. `tokens/shadows.md`      ← Glows not shadows. Gold halos. No soft drops.

#### Tier B (before full pages)
4. `tokens/typography.md`   ← Marcellus headings, Josefin Sans body. ALL-CAPS always.
5. `tokens/borders.md`      ← 0px radius. Double frames. Corner embellishments.
6. `tokens/motion.md`       ← Theatrical, mechanical. 300–500ms. Elevator doors.
7. `tokens/spacing.md`      ← py-32 sections. Symmetry. Verticality. Stage presence.
8. `integration/setup.md`   ← Fonts, crosshatch texture, CSS variables first.

#### Tier C (before new components)
9. `components/`             ← WHY annotations on every reference component.
10. `examples/LandingPage.jsx` ← North star — crosshatch, sunburst, diamond icons.

### STEP 2 — Integration
Follow `integration/setup.md`. Font imports, crosshatch background texture,
and the CSS custom property definitions must be in place before any component
will read as Art Deco. Without the background texture, the design is empty.

### STEP 3 — Study the north star
Read `examples/LandingPage.jsx` completely before building any page.
Diagonal crosshatch, sunburst radial, rotated diamond icons, corner
L-brackets, stepped dividers, Roman numerals — all must be present.

### STEP 4 — Build components
Every component file has WHY annotations. Read them before copying.

For extrapolation tests, see `meta/quality-prompts.md`.

---

## WHAT YOU CAN OVERRIDE
- Specific corner embellishment positions (top-left/bottom-right vs opposite)
- Sunburst intensity (radial gradient opacity)
- Whether to use Roman numerals or styled Arabic numbers
- Glow radius (15px to 30px range)

## WHAT YOU MUST NEVER OVERRIDE
- **Border-radius**: Must be 0px everywhere visible. Non-negotiable.
- **Gold (#D4AF37)**: The primary accent. Never substitute with yellow, orange, or warm white.
- **Background (#0A0A0A)**: True near-black. Never charcoal or dark gray.
- **Gold glows**: Never switch to drop shadows. Glow or nothing.
- **Marcellus font for headings**: The Roman-serif shapes ARE the Art Deco identity.
- **All-caps headings**: Case is a design decision here. Never sentence case.
- **Crosshatch background texture**: Must always be present. Dead without it.
- **0px border-radius**: If you add rounding, the skill reads as generic dark UI.

---

## AGENT BEHAVIOR RULES
- Every container uses `border-radius: 0` — never Tailwind rounded utilities on visible elements.
- Shadows are gold glows only: `0 0 15px rgba(212,175,55,0.2)` — never drop-shadow or blur stacks.
- All headings are UPPERCASE with `letter-spacing: 0.2em` minimum in Marcellus.
- Every section needs crosshatch or sunburst texture — flat black backgrounds are wrong.
- Cards get corner L-brackets and gold border hover intensification — not generic dark cards.
- Icon containers use rotated diamond frames — never plain circular icons.
- Section headings are flanked by gold gradient divider lines — symmetry is mandatory.
- Hover lifts use `translateY(-8px)` at 500ms ease-out — theatrical, not snappy.
- Lucide icons always use `strokeWidth={1}` — thin and architectural.
- New components must pass the extrapolation test in `meta/quality-prompts.md`.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+
- Marcellus (Google Fonts, weight 400)
- Josefin Sans (Google Fonts, weight 300/400)
- Lucide React (strokeWidth 1 — thin, precise, architectural)
