# RESPONSIVE — BOTANICAL ORGANIC SKILL

## The Prime Directive: Preserve the Warmth on Every Screen

The aesthetic must feel intentional at every breakpoint. Organic softness,
Playfair headlines, and soft shadows do not disappear on mobile. The design
scales gracefully — never defaulting to a generic mobile look.

---

## Breakpoints

| Name | px | When |
|---|---|---|
| base | 0px | Mobile first |
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Desktops |
| xl | 1280px | Large desktops |

---

## Typography Scaling

| Element | Mobile | Desktop |
|---|---|---|
| Hero h1 | `clamp(40px, 10vw, 88px)` | 88px |
| Section h2 | `clamp(28px, 5vw, 56px)` | 56px |
| Subsection h3 | `text-2xl` (24px) | `text-3xl` (30px) |
| Body | `text-base` (16px) | `text-lg` (18px) |
| Stats | `text-4xl` (36px) | `text-5xl` (52px) |

Always use `clamp()` for hero — smooth scaling beats breakpoint jumps.

---

## Layout Changes by Section

### Navbar
- Mobile: Logo + hamburger only. Desktop links hidden.
- Open state: Full-screen frosted overlay, oversized Playfair nav links.
- CTA button: always visible in both states.

### Hero
- Mobile: Single column. Image below text. 
- Image: `aspect-ratio: 3/4` on mobile → fixed `height: 480px` on md+.
- Arch shape: maintained at all sizes.
- Floating badge: hidden on mobile (too cramped).
- Stats row: `grid-cols-2` on mobile → `flex` row on md+.

### Features
- Mobile: `grid-cols-1`. Stagger offset REMOVED — single column needs none.
- Tablet: `grid-cols-2`. Half stagger (odd rows offset).
- Desktop: `grid-cols-3`. Full stagger (every 2nd card +48px).

### Stats
- Mobile: `grid-cols-2` (2×2).
- Desktop: `grid-cols-4` (single row).
- Font size reduces but stays large and impactful.

### Editorial / Blog
- Mobile: `grid-cols-1`. Stagger removed.
- Desktop: `grid-cols-3`. Middle card offset 32px.

### Pricing
- Mobile: `grid-cols-1`, stacked.
- Tablet: `grid-cols-2`.
- Desktop: `grid-cols-3`.

### CTA Section
- Mobile: Stacked. Headline above buttons.
- Desktop: Side-by-side flex row.

### Footer
- Mobile: Stacked. Brand + text first, then nav columns.
- Desktop: Flex row with space-between.

---

## Components

### Buttons
- Mobile: min-height 48px (touch target). Full-width on primary CTAs.
- Hover states: replaced with `:active` on touch. Same color transitions.
- Pill shape maintained at all sizes.

### Cards
- Mobile: Shadow slightly reduced.
- Hover lift (translateY): removed concept on mobile (hover not meaningful on touch).
- Border radius stays 24px at all sizes.

### Images / Arch
- Arch shape maintained on mobile — it scales with the container.
- Scale hover: on touch, apply a subtle opacity shift instead.

---

## What MUST NOT Change at Any Breakpoint

| Rule | Why |
|---|---|
| `#F9F8F4` background | Never swap to pure white on mobile |
| `#2D3A31` text color | Never swap to black for "legibility" |
| Paper grain overlay | Always present — it costs nothing in perf |
| Playfair Display on headings | Never fall back to a system serif |
| Italic emphasis in headlines | Playfair italic is mobile-friendly |
| Rounded-3xl card radius | Never sharpen corners on mobile |
| Pill buttons | Never change to rectangular on mobile |
| Soft green-tinted shadows | Never remove on mobile for "performance" |
| 1px borders | Never thicken on mobile |
