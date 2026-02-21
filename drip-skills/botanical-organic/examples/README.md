# BOTANICAL ORGANIC — Examples Guide

## LandingPage.jsx — The North Star

The complete reference implementation. Every design pattern in this skill
appears at least once. Read it top to bottom before building any new page.

---

## What to Notice in Each Section

### PAPER GRAIN (PaperGrain component)
- Fixed overlay, z-50, pointer-events-none, opacity 0.015
- Applied as the FIRST child in the page wrapper
- Must be present in EVERY page. Without it the design is flat.

### NAVBAR
- Transparent at top, frosted glass on scroll (backdrop-filter blur + bg opacity)
- Logo: Playfair Display italic — the brand name is a typographic moment, not a wordmark
- Links: Source Sans 3, sentence case, terracotta on hover (300ms ease-out)
- CTA pill: forest green → terracotta on hover
- Mobile: full-screen frosted overlay with oversized Playfair links

### HERO
- Eyebrow tag: soft sage pill badge — the first tone-setter
- Headline: Playfair 700, italic key words ("nature", "living") — never italic the whole headline
- Body: Source Sans 3 400, muted forest green at 55% opacity
- Arch image: `border-radius: 200px 200px 0 0` — THE signature shape of this skill
- Frosted glass label inside the arch: backdrop-filter blur, not a solid card
- Floating badge: animate-botanical-float — slow 6s sine wave, not a bounce
- Decorative background circle: secondary color, 35% opacity, z-index 0

### FEATURES
- Section eyebrow: Source Sans 12px, uppercase, tracked, sage green
- Section headline: Playfair, italic key word ("patience")
- 3-column grid
- EVERY SECOND CARD has `translateY(48px)` stagger — this is what makes it organic
- Stagger is removed on mobile (single column)
- Icon sits in soft tinted circle (not a bordered box)
- Card hover: translateY(-4px) + shadow blooms — 500ms ease-out

### STATS
- Dark forest green section — used ONCE per page for drama
- Playfair numbers in secondary (clay) color for warmth
- Italic key word in section headline in secondary color
- Card hover inside dark section: subtle white glass on hover

### EDITORIAL (Blog)
- Full-bleed image area with color gradient placeholder
- Image scales 1.05 on card hover (700ms ease-out) — luxurious, never snappy
- Arrow icon translates 4px right on card hover — subtle directional cue
- Stagger: middle card is offset 32px vertically

### TESTIMONIAL
- Full-width centered quote — Playfair italic, generous size
- Stars: terracotta fill, no stroke (strokeWidth={0}, fill={C.interactive})
- Author: small avatar circle + Playfair name + Source Sans subtitle

### CTA SECTION
- Dark section — second use only if first was halfway through page
- Italic key word in secondary/clay color against dark background
- Two buttons: forest green pill + outlined pill with white text

### FOOTER
- Slightly darker background than main canvas (#EDEAE4)
- Italic Playfair brand name — always italic in footer too
- Very low opacity text for copyright — not muted color, pure opacity

---

## Pre-Ship Checklist

- [ ] `#F9F8F4` background (not #FFF, not #FAFAFA)
- [ ] `#2D3A31` text (not #000, not #333)
- [ ] Paper grain overlay present and fixed
- [ ] Playfair Display loaded (italic weights included)
- [ ] Source Sans 3 loaded
- [ ] At least one italic word in every major headline
- [ ] All card corners: `border-radius: 24px`
- [ ] All buttons: `border-radius: 9999px` (pill)
- [ ] Arch image present on hero/feature: `border-radius: 200px 200px 0 0`
- [ ] Card hover: translateY(-4px) + shadow bloom at 500ms ease-out
- [ ] Image hover: scale(1.05) at 700ms ease-out
- [ ] Green-tinted shadows: `rgba(45,58,49,…)` — not `rgba(0,0,0,…)`
- [ ] Staggered feature grid (every 2nd card +48px)
- [ ] All icon strokes: strokeWidth={1.5}
- [ ] No uppercase text on headings
- [ ] No pure black or pure white used anywhere
- [ ] 1px borders only — never thicker
- [ ] Section padding: minimum py-24 (96px)
