# TOKENS — TYPOGRAPHY

## Two Fonts. Contrast and Harmony.

**Playfair Display** for headings — protagonist.
**Source Sans 3** for body — supporting cast.

These two fonts are not interchangeable. Playfair's high-contrast calligraphic
strokes and Source Sans's humanist neutrality create the right tension: one
demands attention, one delivers clarity.

---

## Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Source+Sans+3:wght@400;500&display=swap" rel="stylesheet">
```

Both italic AND regular weights of Playfair must be loaded.
The italic variant is core to the design — not optional.

Apply globally:
```css
body {
  font-family: 'Source Sans 3', system-ui, sans-serif;
  font-weight: 400;
  color: #2D3A31;
  background: #F9F8F4;
}

h1, h2, h3, h4 {
  font-family: 'Playfair Display', Georgia, serif;
}
```

---

## Playfair Display — Heading Font

### Weight Guide
| Weight | Use | Class |
|---|---|---|
| 700 | Hero headlines, section titles | `font-bold` |
| 600 | Subsections, card titles | `font-semibold` |
| Italic 600/700 | Emphasized words within headlines | `italic` |

### Scale
| Element | Size | Weight | Style | Tracking | Leading |
|---|---|---|---|---|---|
| Hero h1 | `clamp(48px, 7vw, 96px)` | 700 | Often partial italic | `-0.02em` | `1.05` |
| Section h2 | `text-5xl → text-6xl` | 700 | Italic on key word | `-0.02em` | `1.1` |
| Subsection h3 | `text-3xl → text-4xl` | 600 | Italic optional | `-0.01em` | `1.2` |
| Card title | `text-2xl → text-3xl` | 600 | Upright | normal | `1.3` |
| Quote / Pull | `text-2xl → text-4xl` | 600 | Full italic | normal | `1.4` |

### The Italic Emphasis Technique

This is the most distinctive typographic move in this skill.
Take a key word in a headline and italicize it:

```jsx
<h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
  Designed for <em style={{ fontStyle: "italic" }}>natural</em> living
</h1>
```

Rules:
- One to two words per headline maximum
- Choose the most emotionally resonant word
- Never italicize the entire headline — contrast is the point
- Never use italic on small text (below 24px) — the contrast disappears

---

## Source Sans 3 — Body Font

### Weight Guide
| Weight | Use | Class |
|---|---|---|
| 400 | Body text, captions, metadata | `font-normal` |
| 500 | Emphasis, button labels, nav | `font-medium` |

### Scale
| Element | Size | Weight | Leading |
|---|---|---|---|
| Body large | `text-lg` (18px) | 400 | `leading-relaxed` (1.625) |
| Body | `text-base` (16px) | 400 | `leading-relaxed` |
| Small / Caption | `text-sm` (14px) | 400 | `leading-normal` |
| Button | `text-sm` (14px) | 500 | — |
| Nav links | `text-sm` (14px) | 500 | — |
| Label / Tag | `text-xs` (12px) | 500 | — |

---

## Button Typography

Botanical buttons use Title Case or sentence case — never UPPERCASE.
```
WRONG:  GET STARTED  (uppercase — too aggressive)
RIGHT:  Get Started  (Title Case — elegant, approachable)
RIGHT:  Explore now  (sentence case — relaxed, warm)
```

Letter spacing on buttons: `tracking-wider` (0.05em) — subtle, not aggressive.

---

## Rules

1. **Playfair on all headings.** Never use Source Sans for h1–h4.
2. **Italic at least one word per major headline.** This is the signature move.
3. **Source Sans 400 for body.** Never bold body text.
4. **No uppercase headings.** Playfair loses its elegance in all-caps.
5. **No tight letter-spacing on body.** Readability over style for body copy.
6. **Scale generously.** Too small feels cramped, not minimal. Air is the design.
