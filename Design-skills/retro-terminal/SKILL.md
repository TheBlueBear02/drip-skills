---
name: retro-terminal
version: 1.0.0
stack: React + Tailwind CSS + Framer Motion
category: dark / aesthetic
mood: raw, technical, nostalgic, precise
---

# RETRO-TERMINAL SKILL

A complete design system rooted in the aesthetic of phosphor-screen terminals,
CRT monitors, and command-line interfaces from the 1970s–90s. Every design
decision in this skill references that world — the glow of a green phosphor dot,
the weight of a blinking cursor, the rhythm of a monospace grid.

This is not a costume. It is a complete, coherent visual language.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read intent before code
Read these files in order before generating anything:

1. `philosophy.md`           ← The soul. Read this first, always.
2. `tokens/colors.md`        ← The palette. Every color has a rule.
3. `tokens/typography.md`    ← One font family. Many precise rules.
4. `tokens/motion.md`        ← Animation is character, not decoration.
5. `tokens/spacing.md`       ← Grid-based. Do not deviate.
6. `tokens/borders.md`       ← Borders define structure here.
7. `tokens/shadows.md`       ← Glow, not shadow. Understand the difference.

### STEP 2 — Set up the project
Follow `integration/setup.md` exactly. Wire in the Tailwind config and globals.css
before writing any component code.

### STEP 3 — Study components as reference patterns
Files in `components/` are annotated references. Read the comments.
They explain WHY each decision was made — not just what the code does.
When building components not in this library, apply the same logic.

### STEP 4 — Use examples as your quality benchmark
Read `examples/LandingPage.jsx` before generating any full page.
This is what the skill looks like when everything works together.
Every page you build should feel like it belongs in the same world.

---

## WHAT YOU CAN OVERRIDE
- **Primary color**: The phosphor green `#00FF41` can be swapped for amber
  `#FFB700` or cyan `#00FFFF` if the user's brand requires it. Maintain
  the same luminosity and glow behavior.
- **Font size scale**: Can shift one step up or down across the board.
- **Content**: All copy, labels, and placeholder text.

## WHAT YOU MUST NEVER OVERRIDE
- **Border radius**: Always `0px`. No exceptions. No "slight rounding."
- **Font family**: Always monospace. JetBrains Mono is the default.
  Any substitute must be monospace.
- **Anti-aliasing**: Always `-webkit-font-smoothing: none`. The pixelated
  rendering is intentional and essential.
- **CRT effects**: The scanline overlay and vignette in `globals.css`
  are non-negotiable. They are part of the aesthetic, not decoration.
- **The blinking cursor**: At least one blinking element must exist on
  every primary screen. This is the heartbeat of the design.
- **Color temperature**: All text is green (or the chosen phosphor color).
  Never white. Never gray. The monochrome phosphor feel is the identity.

---

## AGENT BEHAVIOR RULES
- Never use Tailwind's default color palette (blue, red, etc.) directly.
  Map everything through the CSS variables defined in `globals.css`.
- When a component doesn't exist in this skill, extrapolate from the
  patterns you've seen. Ask: "Would this look at home on a 1985 terminal?"
- When in doubt, add a border. When very much in doubt, add a glow.
- All interactive elements must have a hover state. Terminals respond.
- Cursor is always `cursor-none` on elements where the custom cursor is active.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+ (config extended via `integration/tailwind.config.js`)
- Framer Motion 10+ (for all JS animations)
- JetBrains Mono via Google Fonts (or self-hosted from `assets/fonts/`)
