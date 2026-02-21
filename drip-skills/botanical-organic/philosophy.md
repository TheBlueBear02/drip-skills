# PHILOSOPHY — BOTANICAL ORGANIC

## The Reference World

Imagine a high-end botanical garden café. Linen napkins, handmade ceramic
cups, pressed flowers framed on warm plaster walls. A menu set in elegant
serif type on paper that feels slightly textured under your fingers.
Sunlight comes through arched windows and lands on a stone floor.
Everything is curated but feels effortless. Nothing is loud.

Now imagine building a software interface from that world.

That is this skill.

---

## Why This Aesthetic Exists

This is a reaction against sterile, clinical tech design. Against:
- Pure white backgrounds (#FFF) that feel like hospital rooms
- Hard rectangular cards with no personality
- Snap animations that feel engineered, not alive
- Saturated color palettes that scream rather than invite
- Icons with thick strokes that feel like IKEA instruction manuals

It says: interfaces can feel warm. They can have texture and weight.
They can breathe. They can feel like they were made by a person, not a system.

---

## The Physics of This World

### Surfaces are warm paper, not glass
The background is `#F9F8F4` — warm alabaster, the color of aged paper or
natural linen. Never pure white. The SVG grain texture sits over the entire
viewport at near-zero opacity, turning cold pixels into something tactile.

### Shapes are natural, not manufactured
Plants have no hard corners. River stones have none. Ceramics have none.
Cards are `rounded-3xl`. Buttons are `rounded-full` pills.
Images are arches — the oldest architectural form, derived from nature's
tension-bearing structures. Organic shapes everywhere.

### Light is diffused, not directional
Shadows in this world are large, soft, and barely there.
`0 20px 40px rgba(45,58,49,0.05)` — a barely-visible bloom of darkness.
Not a hard drop. Not a theatrical spotlight. Gentle morning light through leaves.

### Motion is natural, not mechanical
In nature, nothing moves at a constant speed. Things ease into motion
and ease out of it. Duration-500 to duration-700. `ease-out` always.
An accordion opens like a flower. A card lifts like it's breathing.
A button hover fades like a color changing in warm light.

---

## The Color Strategy

Every color derives from something you could find in nature:

| Token | Hex | Natural Source |
|---|---|---|
| Background | `#F9F8F4` | Aged paper, rice paper, dry linen |
| Foreground | `#2D3A31` | Forest floor, deep moss, old oak |
| Primary | `#8C9A84` | Sage leaf, dusty eucalyptus |
| Secondary | `#DCCFC2` | Dry clay, mushroom, bleached driftwood |
| Border | `#E6E2DA` | River stone, weathered concrete |
| Interactive | `#C27B66` | Terracotta tile, red clay pottery |

**The rules:**
- Nothing saturated. If it would look at home in a neon sign, it doesn't belong.
- No pure black. Deep Forest Green is the darkest color in the system.
- No pure white. Warm Alabaster is the lightest surface.
- Terracotta is used sparingly — it's the surprise, the pop of warmth,
  not the dominant color.

---

## Typography as Protagonist

Playfair Display is not just a font choice. Its high-contrast strokes —
thick verticals, hairline horizontals — reference the calligraphic tradition.
It has the character of an engraved botanical print.

The italic variant is the most important tool in this system. A single word
italicized within a bold serif headline creates:
- Visual rhythm
- A sense of handwriting, of personal emphasis
- The feeling that a real human crafted this text

Example: "Designed for *natural* living" — the italic word floats differently,
drawing the eye without screaming.

Source Sans 3 pairs because it is neutral without being cold. Its humanist
letter-shapes have warmth. It does not compete with Playfair — it supports it.

---

## The Paper Grain — The Most Important Element

```jsx
<div
  className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
  }}
/>
```

This is a fixed SVG noise overlay. It sits above everything (`z-50`).
It is `pointer-events-none` — invisible to interaction.
At `opacity-[0.015]` it is imperceptible consciously but felt unconsciously.
It is the difference between digital and tactile. Never remove it.

---

## Arch Imagery — The Signature Shape

The Roman arch is the oldest architectural form that nature inspired.
Applying it to images creates an instant visual signature:

```css
border-radius: 200px 200px 0 0;  /* top arch */
```

It transforms a rectangular image into something architectural and organic.
It references arched windows in botanical garden conservatories.
It is the most recognizable visual element in this skill.

Use on: hero images, feature images, testimonial avatars at large sizes.
Never on: cards, buttons, or functional UI elements (only on images/decorative).

---

## What Breaks This Aesthetic

| ❌ WRONG | ✓ RIGHT |
|---|---|
| `#FFFFFF` pure white background | `#F9F8F4` warm alabaster |
| `#000000` pure black text | `#2D3A31` deep forest green |
| `shadow-lg` dark Tailwind shadow | `0 20px 40px rgba(45,58,49,0.05)` |
| `rounded-md` cards | `rounded-3xl` cards |
| `rounded-none` buttons | `rounded-full` pill buttons |
| `duration-100` snappy hover | `duration-500` slow, graceful |
| `ease-linear` mechanical timing | `ease-out` natural deceleration |
| `stroke-width={3}` bold icons | `stroke-width={1.5}` thin icons |
| Saturated accent color (#FF0066) | Muted terracotta (#C27B66) |
| No texture on background | SVG grain overlay always present |
| All bold weight (900) headings | Playfair 600–700 with italic variance |
| Uppercase button text + tracking | Sentence case or Title Case buttons |
| Color-blocked sections | Subtle background shifts on scroll |
| Symmetrical perfect grid | Staggered `translate-y-12` offset grid |
