# TOKENS — COLORS

All colors reference CSS variables defined in `integration/globals.css`.
Use the variable names in Tailwind via the extended config, or directly in inline styles.

---

## The Phosphor Palette

This palette is built on a single hue — phosphor green — at many luminosity levels.
Secondary accents (amber, cyan, red) are used sparingly and purposefully.

### Backgrounds

| Token | CSS Var | Hex | Tailwind Class | Usage |
|---|---|---|---|---|
| bg | `--color-bg` | `#080808` | `bg-terminal-bg` | Page background. The void. |
| surface | `--color-surface` | `#0D0D0D` | `bg-terminal-surface` | Cards, panels, windows. |
| surface-hi | `--color-surface-hi` | `#111411` | `bg-terminal-surface-hi` | Elevated surfaces, title bars. Slight green tint. |

### Borders

| Token | CSS Var | Hex | Tailwind Class | Usage |
|---|---|---|---|---|
| border | `--color-border` | `#1a2e1a` | `border-terminal-border` | Default borders. Subtle green-tinted. |
| border-hi | `--color-border-hi` | `#00FF41` | `border-terminal-hi` | Active, focused, or highlighted borders. |

### Phosphor Green — Primary

| Token | CSS Var | Hex | Tailwind Class | Usage |
|---|---|---|---|---|
| primary | `--color-primary` | `#00FF41` | `text-terminal-primary` / `bg-terminal-primary` | All primary text, active elements, CTAs. The signature color. |
| primary-dim | `--color-primary-dim` | `#00AA2B` | `text-terminal-dim` | Secondary text, nav links, labels. |
| primary-muted | `--color-primary-muted` | `#4a7a4a` | `text-terminal-muted` | De-emphasized text, placeholders. |
| primary-ghost | `--color-primary-ghost` | `#2a4a2a` | `text-terminal-ghost` | Very muted — disabled states, metadata. |
| primary-glow | `--color-primary-glow` | `#00FF4133` | — | Glow layer for box-shadow / text-shadow. Use in inline styles. |

### Accent Colors (use sparingly)

| Token | CSS Var | Hex | Tailwind Class | Usage |
|---|---|---|---|---|
| amber | `--color-amber` | `#FFB700` | `text-terminal-amber` | Warnings, highlights, box-drawing decorations. |
| cyan | `--color-cyan` | `#00FFFF` | `text-terminal-cyan` | Secondary accent. Links, secondary CTAs. |
| red | `--color-red` | `#FF3333` | `text-terminal-red` | Errors, destructive actions, critical alerts. |
| red-glow | `--color-red-glow` | `#FF333333` | — | Glow layer for error states. |

### Overlays

| Token | CSS Var | Hex | Usage |
|---|---|---|---|
| scanline | `--color-scanline` | `#00FF4108` | CRT scanline overlay (in globals.css). Do not use elsewhere. |
| overlay | `--color-overlay` | `#000000CC` | Modal backdrops, vignette layer. |

---

## Color Rules

1. **Primary text is always `primary`** — never white, never gray.
2. **Background text contrast**: Primary `#00FF41` on bg `#080808` = 15.3:1 contrast ratio. Do not reduce this.
3. **Amber is for decoration and warnings only** — never use as a primary action color.
4. **Red is for errors only** — never use as a stylistic choice.
5. **Cyan is the only secondary action color** — use for secondary buttons, links.
6. **Glow variables are always used in `box-shadow` or `text-shadow`**, never as background fills.
