// META — CHANGELOG AND MANIFEST

This file contains the changelog and differentiation notes.
See skill.json for the machine-readable manifest.

# CHANGELOG — BOTANICAL ORGANIC SKILL

## v1.0.0 — Initial Release

### Files (22 total)

```
botanical-organic/
├── SKILL.md
├── philosophy.md
├── skill.json
├── tokens/
│   ├── colors.md
│   ├── typography.md
│   ├── shadows.md
│   ├── borders.md
│   ├── motion.md
│   ├── spacing.md
│   └── charts.md
├── integration/
│   ├── globals.css
│   ├── tailwind.config.js
│   └── setup.md
├── components/
│   ├── core/
│   │   ├── Button.jsx
│   │   └── Input.jsx      ← includes Badge, Textarea
│   ├── display/
│   │   └── Card.jsx       ← includes FeatureCard, ArchImage, StatCard
│   ├── navigation/
│   │   └── Navbar.jsx
│   └── feedback/
│       └── Spinner.jsx    ← includes Alert, ProgressBar, Skeleton
├── examples/
│   ├── LandingPage.jsx
│   └── README.md
├── responsive/
│   └── breakpoints.md
└── meta/
    └── changelog.md
```

### Design Decisions

**Why #F9F8F4 instead of white?**
Warm Alabaster reads as paper or linen, not screen. The cream warmth makes
sage green and terracotta feel like they're on a natural surface rather than
a backlit display. Pure white would make this palette feel clinical.

**Why Playfair Display?**
Its calligraphic high-contrast strokes (thick verticals, hairline horizontals)
reference botanical print illustration and engraved typography. The italic
variant is extraordinarily expressive — italic "nature" in a headline reads as
a gentle whisper of emphasis. No other free Google Font achieves this.

**Why green-tinted shadows?**
Standard gray shadows (rgba(0,0,0,...)) feel cold and digitally harsh against
the warm earthy palette. Tinting shadows with the foreground color
(rgba(45,58,49,...) — deep forest green) keeps the shadow feeling like it
belongs to the same world as the rest of the design.

**Why 200px arch border-radius?**
Arch shapes evoke Roman botanical conservatories, greenhouse windows, Victorian
herbarium frames — the entire visual history of botanical design. Applied to
images, they instantly signal "this is not a generic product template." They are
distinctive without being gimmicky because they have genuine cultural resonance.

**Why 500ms ease-out for card hovers?**
Quick hovers (100–200ms) feel mechanical — a switch flipping. 500ms ease-out
feels like a leaf rotating gently in a breeze. The deceleration at the end
communicates organic physics, not engineering. This is the single most
important motion decision in the system.

**Why no uppercase text?**
UPPERCASE typography signals urgency, authority, or aggression. None of those
belong here. Sentence case with elegant Playfair Display signals craft, calm,
and confidence. Botanica is an authority by reputation, not volume.

---

### Differentiation vs Other Skills

| Aspect | Botanical Organic | Neo-Brutalism | Linear Modern | Retro Terminal |
|---|---|---|---|---|
| Background | `#F9F8F4` warm cream | `#FFFDF5` with halftone | `#050506` near-black | `#0A0A0A` black |
| Text | `#2D3A31` forest green | `#000000` pure black | `#FFFFFF` white | `#39FF14` green |
| Borders | 1px stone, soft | 4px black, hard | 1px subtle | 1px green, glow |
| Shadow | Soft diffused bloom | Hard zero-blur offset | Subtle glow | Neon glow |
| Button | Full pill, slow hover | Sharp rect, press-down | Subtle rect | Pixel block |
| Radius | 24px cards, 9999px buttons | 0px / 9999px only | 8–16px precise | 0px |
| Font | Playfair + Source Sans | Space Grotesk 900 | Inter | Courier Mono |
| Motion | 500–700ms ease-out | 100ms linear snap | 200ms expo-out | Instant / scan |
| Texture | Paper grain SVG | Halftone / grid dots | Noise overlay | Scanline CRT |
| Vibe | Warm artisanal calm | Punk rebel energy | Premium dark tech | Hacker terminal |
