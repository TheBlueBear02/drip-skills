# TOKENS — SHADOWS (GLOW SYSTEM)

## Glow, Not Shadow

This skill does not use traditional drop shadows to imply depth.
Phosphor screens emit light — they glow outward, they don't cast shadows downward.
Every "shadow" in this system is an outward luminous glow.

---

## Glow Scale

| Token | CSS | Usage |
|---|---|---|
| `glow-xs` | `box-shadow: 0 0 6px #00FF4133` | Subtle active state, hovered nav items |
| `glow-sm` | `box-shadow: 0 0 12px #00FF4133` | Focused inputs, hovered cards |
| `glow-md` | `box-shadow: 0 0 24px #00FF4133` | Primary CTA buttons, active panels |
| `glow-lg` | `box-shadow: 0 0 40px #00FF4133, 0 0 80px #00FF4115` | Hero elements, featured windows |
| `glow-xl` | `box-shadow: 0 0 60px #00FF4155, 0 0 120px #00FF4122` | Splash screens, maximum emphasis |

## Inner Glow

For windows and cards that should feel "lit from within":
```css
box-shadow: inset 0 0 24px #00FF4105;
```
Use sparingly — only on the most important surface on screen.

## Text Glow

For headings only:
```css
/* Subtle — heading-3, heading-4 */
text-shadow: 0 0 20px #00FF4133;

/* Strong — heading-1, heading-2 */
text-shadow: 0 0 30px #00FF4133, 0 0 60px #00FF4115;

/* Maximum — display hero text */
text-shadow: 0 0 40px #00FF4133, 0 0 80px #00FF4115;
```

## Accent Glows

For amber (warning / decoration) elements:
```css
box-shadow: 0 0 12px #FFB70033;
text-shadow: 0 0 20px #FFB70033;
```

For red (error) elements:
```css
box-shadow: 0 0 12px #FF333333;
```

---

## Glow Animation

The pulsing glow creates a "breathing" effect for active elements:
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 12px #00FF4133; }
  50%       { box-shadow: 0 0 24px #00FF4166; }
}
```

---

## Rules

1. Never use `box-shadow` with X/Y offset for depth — offset means `0 0` always.
2. Glow intensity signals importance — more glow = higher hierarchy.
3. Interactive elements must increase glow on hover, not just change color.
4. Multiple glow layers (stacked box-shadows) create realism — use 2 layers for `glow-lg` and above.
5. Never glow body text, only headings and interactive elements.
