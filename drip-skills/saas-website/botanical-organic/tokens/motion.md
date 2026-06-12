# TOKENS — MOTION

## Honey-Slow. Ease-Out. Always.

---

## Duration Scale

| Token | Value | Usage |
|---|---|---|
| `fast` | 300ms | Button hovers, link colors |
| `standard` | 500ms | Card lifts, transforms |
| `slow` | 700ms | Image scale (luxurious) |
| `dramatic` | 1000ms | Page entry, hero |

Nothing below 300ms for hover states.

---

## Easing: Always `ease-out`

Natural deceleration. Never linear. Never ease-in.

---

## Core Patterns

### Card Lift
```
rest:   translateY(0)  shadow-md
hover:  translateY(-4px) shadow-lg
timing: 500ms ease-out
```

### Image Scale
```
rest:   scale(1)
hover:  scale(1.05)
timing: 700ms ease-out
```

### Button Hover
```
rest:   bg #2D3A31
hover:  bg #C27B66 (terracotta shift)
timing: 300ms ease-out
```

### Scroll Fade-Up
```
initial: opacity:0 translateY(16px)
visible: opacity:1 translateY(0)
timing:  600ms ease-out
```

---

## Looping Animations

```css
@keyframes botanical-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-8px) rotate(1deg); }
}
.animate-botanical-float { animation: botanical-float 6s ease-in-out infinite; }

@keyframes botanical-breathe {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.02); }
}
.animate-botanical-breathe { animation: botanical-breathe 4s ease-in-out infinite; }
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
