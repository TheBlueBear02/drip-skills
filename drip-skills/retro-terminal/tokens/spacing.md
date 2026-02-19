# TOKENS — SPACING

## Base Unit: 4px

All spacing in this system is a multiple of 4px.
This mirrors the character-cell grid of a monospace font — everything aligns.

---

## Spacing Scale

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `space-1` | 4px | `p-1` / `m-1` | Micro gaps — icon padding, tight inline elements |
| `space-2` | 8px | `p-2` / `m-2` | Compact padding — badge, tag, small button |
| `space-3` | 12px | `p-3` / `m-3` | Default inner padding — inputs, tight cards |
| `space-4` | 16px | `p-4` / `m-4` | Standard padding — most components |
| `space-5` | 20px | `p-5` / `m-5` | Comfortable padding — panels, modals |
| `space-6` | 24px | `p-6` / `m-6` | Section inner padding |
| `space-8` | 32px | `p-8` / `m-8` | Card padding, generous inner spacing |
| `space-10` | 40px | `p-10` / `m-10` | Nav padding, large section inner |
| `space-16` | 64px | `p-16` / `m-16` | Between major sections |
| `space-20` | 80px | `p-20` / `m-20` | Page section vertical padding |

---

## Layout Widths

| Token | Value | Usage |
|---|---|---|
| `max-w-content` | 1100px | Standard page content max-width |
| `max-w-narrow` | 680px | Text-heavy content, docs, auth pages |
| `max-w-wide` | 1400px | Dashboard, data-heavy layouts |

---

## Grid & Gap Rules

- **Component grids**: Use `gap-[1px]` with a border-colored background to create
  "grid lines" between cells. This is the terminal window-pane technique.
- **Standard component gap**: `gap-4` (16px)
- **Section gap**: `gap-8` (32px)  
- **Page section spacing**: `py-20` (80px) top and bottom

---

## Spacing Principles

1. **Density over air**: Terminals are information-dense. Don't over-pad.
   A card with `p-7` feels wrong. `p-5` or `p-6` is usually right.
2. **Consistent rhythm**: Sections should all share the same vertical rhythm.
   `py-20` for major sections, `py-10` for minor ones.
3. **The 1px grid gap trick**: When tiling components into a grid,
   set `gap-[1px]` on the grid container and set background to the border color.
   Each cell's background covers the gap color. This creates clean grid lines
   without having to manage individual borders.
4. **Never use arbitrary values** for spacing unless it's a specific pixel offset
   for optical alignment (e.g., nudging an icon 1px). Always use the scale.
