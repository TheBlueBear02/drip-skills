# TOKENS — SPACING

## Breathing Room Is the Design

Whitespace is not empty — it is deliberate air. Compressing it collapses the
organic, airy quality that makes this style feel premium.

---

## Scale

| Usage | Value | Tailwind |
|---|---|---|
| Between inline elements | 8–16px | `gap-2 gap-4` |
| Between cards | 32–48px | `gap-8 gap-12` |
| Card internal padding | 32–40px | `p-8 p-10` |
| Section vertical | 96–128px | `py-24 py-32` |
| Hero padding | 128–160px | `py-32 py-40` |

`py-24` is the minimum for any section.

---

## Container

```
Max width:  max-w-7xl (1280px)
Padding:    px-6 (mobile) → px-8 (tablet) → px-12 (desktop)
```

---

## The Stagger System

Every second feature card is offset +48px vertically:

```jsx
style={{ transform: i % 2 !== 0 ? "translateY(48px)" : "none" }}
```

Mobile: remove offset (single column looks broken staggered).
Desktop (md+): stagger applies. Perfect grids feel engineered — staggered grids feel grown.
