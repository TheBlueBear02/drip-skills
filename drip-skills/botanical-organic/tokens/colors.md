# TOKENS — COLORS

## Earth-Derived Palette. Nothing Artificial.

Every color in this system can be found in nature. If a color would look
at home in a neon sign or a tech startup logo, it does not belong here.
Muted, sophisticated, grounded in the physical world.

---

## The Palette

| Token | Hex | Name | Source | Role |
|---|---|---|---|---|
| `background` | `#F9F8F4` | Warm Alabaster | Aged paper, dry linen | Page canvas |
| `foreground` | `#2D3A31` | Deep Forest Green | Forest floor, old oak | All text, icons |
| `primary` | `#8C9A84` | Sage Green | Sage leaf, eucalyptus | Buttons, accents |
| `secondary` | `#DCCFC2` | Soft Clay | Dry clay, mushroom | Card backgrounds |
| `border` | `#E6E2DA` | Stone | River stone, concrete | All borders |
| `interactive` | `#C27B66` | Terracotta | Terracotta tile, clay | Hover states, pops |
| `surface` | `#FFFFFF` | White | — | Card surfaces |
| `muted-text` | `rgba(45,58,49,0.55)` | Muted Forest | — | Secondary text |

In Tailwind config: `botanical-bg`, `botanical-fg`, `botanical-primary`,
`botanical-secondary`, `botanical-border`, `botanical-interactive`

---

## Color-by-Role Reference

### Backgrounds
```
Page canvas:         #F9F8F4  (botanical-bg)
Card surface:        #FFFFFF  (white)
Secondary card:      #F2F0EB  (botanical-secondary tinted)
Subtle sections:     #F4F2ED  (bg with slight warm shift)
Input field:         #F2F0EB  (soft clay tint)
```

### Text
```
Primary text:        #2D3A31  (botanical-fg) — all body, headings
Secondary text:      rgba(45,58,49,0.55) — captions, metadata
Placeholder:         rgba(45,58,49,0.35)
Reversed (on dark):  #F9F8F4  (bg color)
Link hover:          #C27B66  (terracotta)
```

### Borders
```
Standard:            #E6E2DA  (botanical-border) — 1px
Subtle:              rgba(230,226,218,0.6) — overlays
Input:               #E6E2DA — rest state
Input focus:         #8C9A84 — sage transition
```

### Shadows
```
All shadows use:     rgba(45,58,49,…) — forest green tint, never gray
Small:               rgba(45,58,49,0.05)
Medium:              rgba(45,58,49,0.08)
Large:               rgba(45,58,49,0.12)
Extra large:         rgba(45,58,49,0.15)
```

---

## The No-Saturation Rule

**Never introduce a saturated color.**

The palette's power comes from restraint. Terracotta (`#C27B66`) is the most
vivid color in the system and it is still muted. If you find yourself
reaching for a bright blue, bright orange, or vivid purple — stop.
Ask: what natural material has this color? If the answer is a synthetic dye
or electric light, choose a different color.

---

## Section Backgrounds

Sections shift subtly, not dramatically. No color blocking:
```
Section 1:  #F9F8F4 (default canvas)
Section 2:  #F4F2ED (very slightly warmer)
Section 3:  #FFFFFF (card white — feels fresh, airy)
Section 4:  #2D3A31 (forest green — rare, dramatic inversion for CTA)
Section 5:  #F9F8F4 (back to canvas)
```

The dark forest green section is used once — maximum once per page.
It is the dramatic moment. It should feel like stepping into shade.

---

## Accessibility

Core combinations all pass WCAG AA:
- Forest Green on Alabaster `#2D3A31 / #F9F8F4`: 11.2:1 ✓
- Forest Green on White `#2D3A31 / #FFFFFF`: 13.4:1 ✓
- White on Forest Green `#FFF / #2D3A31`: 13.4:1 ✓
- Forest Green on Soft Clay `#2D3A31 / #DCCFC2`: 7.8:1 ✓
- Sage text on White: 3.1:1 — use only for large text (18pt+) or decorative
