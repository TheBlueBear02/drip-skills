# TOKENS — TYPOGRAPHY

## The Rule: One Family, Total Discipline

This skill uses exactly one font family: **JetBrains Mono**.
There is no display font, no body font, no alternate. One family, everywhere.
The monospace grid IS the design system. Variation comes from weight, size, and spacing.

---

## Font

| Property | Value |
|---|---|
| Family | JetBrains Mono |
| Source | Google Fonts — `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&display=swap` |
| Fallback stack | `'Fira Code', 'Courier New', monospace` |
| Rendering | `-webkit-font-smoothing: none` — pixelated rendering is intentional |
| Ligatures | `font-feature-settings: "liga" 1` — enable code ligatures |

---

## Type Scale

| Role | Size | Weight | Letter Spacing | Line Height | Usage |
|---|---|---|---|---|---|
| `display` | 64px / `text-6xl` | 800 | `-0.02em` | 1.05 | Hero headlines only |
| `heading-1` | 48px / `text-5xl` | 800 | `-0.02em` | 1.1 | Page titles |
| `heading-2` | 32px / `text-4xl` | 700 | `-0.01em` | 1.2 | Section headings |
| `heading-3` | 24px / `text-2xl` | 700 | `0em` | 1.3 | Card titles, panel headers |
| `heading-4` | 18px / `text-lg` | 700 | `0.02em` | 1.4 | Sub-headings |
| `body` | 13px / `text-sm` | 400 | `0.04em` | 1.8 | All body copy |
| `label` | 11px / `text-xs` | 400 | `0.12em` | 1.6 | Labels, nav links, metadata |
| `caption` | 10px / `text-[10px]` | 400 | `0.2em` | 1.5 | System messages, timestamps, tiny labels |
| `micro` | 9px / `text-[9px]` | 400 | `0.2em` | 1.4 | Status badges, tags |

---

## Letter Spacing Rules

Letter spacing is one of the most important controls in this system.
Wider tracking makes text feel more "terminal output" — tighter tracking feels like code.

- **Headings**: Tight (`-0.02em`) — monumental, not spread
- **Body**: Slightly open (`0.04em`) — readable scan
- **Labels & nav**: Wide (`0.12em–0.2em`) — system-font feel
- **ALL CAPS strings**: Always `0.15em` minimum — caps + wide tracking = terminal label

---

## Text Glow

Primary headings (`display`, `heading-1`, `heading-2`) should have a text glow
to simulate phosphor luminosity:

```css
text-shadow: 0 0 20px #00FF4133, 0 0 40px #00FF4115;
```

Body text and labels should NOT have text-glow — only headings.

---

## Usage Examples

```jsx
// Display hero headline
<h1 style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05,
  color: '#00FF41', textShadow: '0 0 30px #00FF4133' }}>
  BUILD INTERFACES
</h1>

// Section label / eyebrow
<span style={{ fontSize: 10, fontWeight: 400, letterSpacing: '0.2em', color: '#4a7a4a' }}>
  &gt; ls ./features/
</span>

// Body copy
<p style={{ fontSize: 13, fontWeight: 400, letterSpacing: '0.04em', lineHeight: 1.8,
  color: '#00AA2B' }}>
  Your agent reads the skill and stays consistent.
</p>
```

---

## What Never To Do

- Never use `font-family: sans-serif` anywhere in this skill's components
- Never use `font-smoothing: antialiased` — the pixelated look is intentional
- Never mix weights randomly — weight communicates hierarchy, use it deliberately
- Never set letter-spacing to `0` on ALL CAPS text — it will look broken
