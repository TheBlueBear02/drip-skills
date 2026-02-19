# TOKENS — BORDERS

## The Core Rule: 0px Radius, Always

`border-radius: 0` everywhere. No exceptions. Not `2px`, not `4px`, not `rounded-sm`.
Zero. Sharp corners are foundational to this aesthetic.
Rounded corners would immediately destroy the terminal feel.

---

## Border Widths

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `border-thin` | 1px | `border` | Default — all panels, cards, inputs |
| `border-thick` | 2px | `border-2` | Active states, focus rings, highlighted windows |
| `border-heavy` | 4px | `border-4` | Emphasis elements, CTA borders |

---

## Border Colors

Always use the color tokens from `tokens/colors.md`:

| State | Color | Hex | When |
|---|---|---|---|
| Default | `border-terminal-border` | `#1a2e1a` | Resting state of all bordered elements |
| Active / Focus | `border-terminal-hi` | `#00FF41` | Focused input, active panel, selected tab |
| Warning | `border-terminal-amber` | `#FFB700` | Warning states |
| Error | `border-terminal-red` | `#FF3333` | Error states, destructive zones |
| Muted | `#0d1a0d` | — | Very subtle separation, barely visible |

---

## Border Patterns

### Standard component border
```css
border: 1px solid #1a2e1a;
```

### Active / glowing border
```css
border: 1px solid #00FF41;
box-shadow: 0 0 12px #00FF4133;
```

### Pulsing active border (for selected/focused windows)
```css
animation: pulse-border 3s ease-in-out infinite;

@keyframes pulse-border {
  0%, 100% { border-color: #00AA2B; box-shadow: 0 0 0px #00FF4133; }
  50% { border-color: #00FF41; box-shadow: 0 0 12px #00FF4133; }
}
```

### Box-drawing decorations
Use Unicode box-drawing characters as decorative text elements, not CSS borders:
```
┌── SECTION TITLE ─────────────────┐
│  content here                    │
└──────────────────────────────────┘
```
These should be in `color: #FFB700` (amber) for decorative headers,
`color: #2a4a2a` (ghost) for structural containers.

---

## Dividers

Horizontal rules between sections:
```css
border-top: 1px solid #1a2e1a;  /* standard divider */
border-top: 1px solid #00FF41;  /* emphasized divider */
```

Never use `<hr>` with default browser styling. Always style explicitly.
