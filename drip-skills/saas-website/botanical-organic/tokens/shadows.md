# TOKENS — SHADOWS

## Diffused Light, Not Directional Drama

Shadows in this system simulate the quality of light in a botanical conservatory —
soft, diffused, coming from overhead through glass. Not a spotlight. Not a hard
drop. A gentle bloom of darker air beneath an object.

Every shadow uses the forest green tint (`rgba(45,58,49,…)`) rather than gray.
This keeps shadows from feeling cold or generic.

---

## Shadow Scale

| Token | CSS Value | Usage |
|---|---|---|
| `shadow-xs` | `0 2px 4px rgba(45,58,49,0.04)` | Subtle lift — inputs, tags |
| `shadow-sm` | `0 4px 6px rgba(45,58,49,0.05)` | Small cards, tooltips |
| `shadow-md` | `0 10px 15px rgba(45,58,49,0.06)` | Standard cards (rest) |
| `shadow-lg` | `0 20px 40px rgba(45,58,49,0.08)` | Cards on hover |
| `shadow-xl` | `0 25px 50px rgba(45,58,49,0.12)` | Featured/hero cards |
| `shadow-2xl` | `0 40px 80px rgba(45,58,49,0.15)` | Modal overlays |

### Hover Shadow Progressions
Cards transition from rest shadow to hover shadow:
```
Standard card rest:   shadow-md → hover: shadow-lg
Featured card rest:   shadow-xl → hover: shadow-2xl
Image:                shadow-md → hover: shadow-xl + scale-105
```

---

## Rules

1. **Green-tinted shadows only.** Never `rgba(0,0,0,…)` — it's cold.
2. **No hard or offset shadows.** X and Y offsets are always 0. Only vertical (Y).
3. **No colored shadows.** Not sage, not terracotta — forest green only.
4. **Large blur radius.** `40px`, `50px`, `80px` — very diffused.
5. **Never use Tailwind's built-in `shadow-*` utilities directly** — they use gray.
   Always define shadows as inline styles or CSS custom properties.

---

# TOKENS — BORDERS & RADIUS

## Organic Shapes. Nothing Sharp.

The natural world has almost no right angles. River stones, leaves, arches,
pebbles — all curves. This system follows that principle. The only question
is how *much* to round, not whether to round.

---

## Radius Scale

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 12px | Tags, small badges, inputs |
| `radius-md` | 20px | Small cards, inner elements |
| `radius-lg` | 24px (`rounded-3xl`) | Standard cards — the default |
| `radius-full` | 9999px | Buttons (pill), avatars, tags |
| `radius-arch` | `200px 200px 0 0` | Hero and feature images |
| `radius-blob` | `60% 40% 70% 30% / 50% 60% 40% 70%` | Decorative shapes |

---

## The Arch — The Signature Shape

```css
border-radius: 200px 200px 0 0;
```

This creates a Roman arch effect on top of images. Use on:
- Hero portrait/feature images
- Large illustrative images in feature sections
- Testimonial photos at display size

```jsx
<div style={{
  borderRadius: "200px 200px 0 0",
  overflow: "hidden",
  height: 480,
  width: 360,
}}>
  <img src="…" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>
```

WHY: Arches are the oldest architectural form derived from natural tension.
They reference botanical conservatory windows. They transform a mundane
rectangle into a shape with history and warmth.

---

## Border Rules

```
Width:   1px always — never 2px or more
Color:   #E6E2DA (Stone) — subtle, never contrasting
Style:   solid
Usage:   Cards (optional), inputs (bottom-only or full), dividers
```

**No bold borders.** A 2px or 4px border in this system would be jarring —
it would reference construction and engineering, not nature and craft.

---

## Focus States

```css
outline: 2px solid #8C9A84;
outline-offset: 2px;
```

Sage green ring. No harsh blue browser default. No thick black ring.
It should feel like a gentle glow, not a hard selection indicator.

---

# TOKENS — MOTION

## Honey-Slow. Ease-Out. Always.

Everything in this system moves as if suspended in warm honey or swaying
gently in a breeze. Fast, snappy animations belong to neo-brutalism.
Here, transitions are slow enough to be *felt*, not just noticed.

---

## Duration Scale

| Token | Value | Usage |
|---|---|---|
| `fast` | 300ms | Button hovers, link color changes |
| `standard` | 500ms | Card lifts, scale transforms |
| `slow` | 700ms | Image scale (luxurious hover) |
| `dramatic` | 1000ms | Page entry, hero animations |

**Nothing below 300ms for hover states.** Quick transitions break the organic feel.

---

## Easing

**Always `ease-out`** for interactions. The start is fast (responsive), the
end decelerates (natural). This mimics how objects move in the physical world
when air resistance slows them.

Never:
- `linear` — mechanical, robotic
- `ease-in` — starts slow, feels laggy
- `ease-in-out` — acceptable but lacks botanical character
- Spring physics — too bouncy for this world

---

## Core Interaction Patterns

### Card Hover (Lift + Bloom)
```css
rest:   transform: translateY(0);  box-shadow: [shadow-md];
hover:  transform: translateY(-4px); box-shadow: [shadow-lg];
timing: 500ms ease-out
```

### Image Hover (Luxurious Scale)
```css
rest:   transform: scale(1);
hover:  transform: scale(1.05);
timing: 700ms ease-out
```

### Button Hover
```css
rest:   background: #2D3A31; opacity: 1;
hover:  background: #C27B66; (terracotta shift)
        OR opacity: 0.85
timing: 300ms ease-out
```

### Link Hover
```css
rest:   color: #2D3A31;
hover:  color: #C27B66;
timing: 300ms ease-out
```

### Scroll Fade-Up (Section Entry)
```css
initial: opacity: 0; transform: translateY(16px);
visible: opacity: 1; transform: translateY(0);
timing:  600ms ease-out
```

### Accordion Open
```css
closed: max-height: 0; opacity: 0;
open:   max-height: 200px; opacity: 1;
timing: 400ms ease-out
```

---

## Looping Animations

```css
/* Slow float for decorative botanical elements */
@keyframes botanical-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-8px) rotate(1deg); }
}
.animate-botanical-float {
  animation: botanical-float 6s ease-in-out infinite;
}

/* Subtle pulse for CTA badges */
@keyframes botanical-breathe {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.02); opacity: 0.9; }
}
.animate-botanical-breathe {
  animation: botanical-breathe 4s ease-in-out infinite;
}
```

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# TOKENS — SPACING

## Breathing Room Is the Design

In botanical design, whitespace is not empty — it is deliberate air. The gap
between elements is where the design breathes. Compressing whitespace collapses
the organic, airy quality that makes this style feel premium.

---

## Spacing Scale

| Usage | Value | Tailwind |
|---|---|---|
| Between inline elements | 8–16px | `gap-2 gap-4` |
| Between related elements | 20–32px | `gap-5 gap-8` |
| Between cards | 32–48px | `gap-8 gap-12` |
| Card internal padding | 32–40px | `p-8 p-10` |
| Section vertical padding | 96–128px | `py-24 py-32` |
| Hero padding | 128–160px | `py-32 py-40` |

**`py-24` is the minimum for any section.** Compress below this and the
design begins to feel crowded, losing its garden-like spaciousness.

---

## Container

```
Max width:  max-w-7xl (1280px) — room for air on large screens
Padding:    px-6 (mobile) → px-8 (tablet) → px-12 (desktop)
```

---

## The Stagger System — Breaking the Grid

Every second card in a feature row is offset vertically:

```jsx
{features.map((f, i) => (
  <div
    key={i}
    style={{
      transform: i % 2 !== 0 ? "translateY(48px)" : "none",
    }}
  >
    <FeatureCard {...f} />
  </div>
))}
```

On mobile, this offset is removed — staggering looks broken on single-column.
On desktop (md+), the `translate-y-12` creates the organic, natural flow.

WHY: Perfect grids feel engineered. Staggered grids feel grown.
The asymmetry references the way plants in a garden never align perfectly.

---

## Overlapping Typography

Hero headlines can overlap decorative background elements:

```jsx
<div style={{ position: "relative" }}>
  {/* Background decorative circle */}
  <div style={{
    position: "absolute", top: -40, right: -20,
    width: 300, height: 300,
    background: "#DCCFC2", borderRadius: "50%",
    opacity: 0.4, zIndex: 0,
  }} />
  {/* Headline overlaps the circle */}
  <h1 style={{ position: "relative", zIndex: 1 }}>…</h1>
</div>
```

This deliberate overlap creates depth and removes the sterile grid rigidity.
