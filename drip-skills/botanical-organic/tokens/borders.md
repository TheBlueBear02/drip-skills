# TOKENS — BORDERS & RADIUS

## Organic Shapes. Nothing Sharp.

The natural world has almost no right angles. River stones, leaves, arches,
pebbles — all curves. This system follows that principle.

---

## Radius Scale

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 12px | Tags, small badges |
| `radius-md` | 20px | Small cards, inner elements |
| `radius-lg` | 24px (`rounded-3xl`) | Standard cards — the default |
| `radius-full` | 9999px | Buttons (pill), avatars |
| `radius-arch` | `200px 200px 0 0` | Hero and feature images |
| `radius-blob` | `60% 40% 70% 30% / 50% 60% 40% 70%` | Decorative shapes |

---

## The Arch

```css
border-radius: 200px 200px 0 0;
```

Transforms rectangular images into Roman arch shapes. Use on:
- Hero portrait/feature images
- Large illustrative images in feature sections

```jsx
<div style={{ borderRadius: "200px 200px 0 0", overflow: "hidden", height: 480, width: 360 }}>
  <img src="…" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>
```

---

## Border Rules

```
Width:   1px always — never 2px or more
Color:   #E6E2DA (Stone) — subtle
Style:   solid
```

---

## Focus States

```css
outline: 2px solid #8C9A84;  /* Sage green ring */
outline-offset: 2px;
```
