# SETUP — BOTANICAL ORGANIC SKILL

## 1. Install Dependencies

```bash
npm install lucide-react
```

---

## 2. Wire Up Fonts

Add to your `<head>` (Next.js: `layout.jsx`, Vite: `index.html`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Source+Sans+3:wght@400;500&display=swap" rel="stylesheet">
```

Both italic AND upright Playfair weights must load. Italic is core to the design.

---

## 3. Import globals.css

```js
// Next.js App Router (layout.jsx)
import '@/skills/botanical-organic/integration/globals.css'

// Vite / CRA
import './skills/botanical-organic/integration/globals.css'
```

---

## 4. Add the Paper Grain Texture

This is the most important setup step. Add this to your root layout,
as the first or last child of your outermost container:

```jsx
{/* Paper grain — MANDATORY. Do not remove. */}
<div
  style={{
    pointerEvents: "none",
    position: "fixed",
    inset: 0,
    zIndex: 50,
    opacity: 0.015,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
  }}
/>
```

Without this, the design is flat and digital. With it, the design is warm
and tactile. The difference is imperceptible consciously but felt as quality.

---

## 5. Merge Tailwind Config

Add the `theme.extend` block from `tailwind.config.js` into your project config.

Key additions:
- `botanical.*` color tokens
- `shadow-botanical-*` — green-tinted soft diffused shadows
- `font-serif` (Playfair Display), `font-sans` (Source Sans 3)
- Animation utilities

---

## 6. Verify Setup

Paste this snippet to confirm fonts, colors, and grain are working:

```jsx
export default function BotanicalTest() {
  return (
    <div style={{ background: "#F9F8F4", minHeight: "100vh", padding: 48, position: "relative" }}>
      {/* Paper grain */}
      <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 50, opacity: 0.015, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat" }} />

      <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 48, color: "#2D3A31" }}>
        Designed for <em style={{ fontStyle: "italic" }}>natural</em> living
      </h1>
      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 18, color: "#2D3A31", marginTop: 16, opacity: 0.75 }}>
        Source Sans 3 body text — warm, readable, elegant.
      </p>
      <button style={{
        marginTop: 24, height: 48, padding: "0 28px",
        background: "#2D3A31", color: "#F9F8F4",
        borderRadius: 9999, border: "none", cursor: "pointer",
        fontFamily: "'Source Sans 3', sans-serif", fontWeight: 500, fontSize: 14,
        letterSpacing: "0.05em",
        boxShadow: "0 10px 15px rgba(45,58,49,0.06)",
        transition: "background 300ms ease-out",
      }}>
        Get Started
      </button>
    </div>
  );
}
```

You should see:
- Warm alabaster background (#F9F8F4) — not pure white
- Playfair Display with the italic "natural" floating differently
- Source Sans 3 body text
- Soft forest green pill button with no harsh shadow

---

## 7. Folder Location

```
your-project/
└── skills/
    └── botanical-organic/
```
