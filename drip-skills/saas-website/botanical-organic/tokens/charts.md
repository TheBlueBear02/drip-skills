# TOKENS — CHARTS & GRAPHS

## AGENT RULES FOR EXISTING CHARTS

If the project already contains charts or graphs, restyle them — do not
rewrite them. The data logic, chart type, data structure, props, and
component architecture are all off-limits.

**What you MAY change:** Colors, fonts, border radius, container card styling,
grid line colors, animation timing, tooltip background and text, legend styling.

**What you MUST NOT change:** The chart library, data fetching or transformation,
chart type, component file names, business logic, or JSX structure.

**Approach:** Read the component first. Identify which props accept style values.
Apply skill tokens to those props only. Do not refactor the code structure.

---

## Library

**Recommended:** Recharts (React)

```bash
npm install recharts
```

---

## Data Colors

| Token | Value | Usage |
|---|---|---|
| `data-1` | `#8C9A84` | First series — sage green |
| `data-2` | `#C27B66` | Second series — terracotta |
| `data-3` | `#DCCFC2` | Third series — soft clay |
| `data-4` | `#2D3A31` | Fourth series — forest green |
| `data-5` | `#B8C4B0` | Fifth series — pale sage |
| `data-positive` | `#8C9A84` | Gains, up trends — sage |
| `data-negative` | `#C27B66` | Losses, down trends — terracotta |
| `data-neutral` | `#DCCFC2` | Flat/unchanged — clay |

Series fills at 25% opacity. Strokes at 80% opacity.

---

## Chart Container

```jsx
<div style={{
  background: "#FFFFFF",
  border: "1px solid #E6E2DA",
  borderRadius: 24,
  boxShadow: "0 10px 15px rgba(45,58,49,0.06)",
  padding: "32px",
  transition: "box-shadow 500ms ease-out",
}}>
  {/* Header */}
  <div style={{ marginBottom: 24 }}>
    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 20, color: "#2D3A31", marginBottom: 4 }}>
      Chart Title
    </h3>
    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, color: "rgba(45,58,49,0.55)" }}>
      Subtitle or date range
    </p>
  </div>
  {/* Chart goes here */}
</div>
```

---

## Typography in Charts

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Chart title | Playfair Display | 20px | 600 | `#2D3A31` |
| Axis labels | Source Sans 3 | 12px | 400 | `rgba(45,58,49,0.55)` |
| Tick values | Source Sans 3 | 12px | 400 | `rgba(45,58,49,0.55)` |
| Legend labels | Source Sans 3 | 13px | 400 | `#2D3A31` |
| Tooltip value | Playfair Display | 22px | 600 | `#2D3A31` |
| Tooltip label | Source Sans 3 | 12px | 400 | `rgba(45,58,49,0.55)` |

---

## Grid & Axes

```
Grid lines:  rgba(45,58,49,0.06) — very subtle green tint
Style:       solid, 1px
Axis lines:  rgba(45,58,49,0.12)
Zero line:   rgba(45,58,49,0.25) — slightly more visible
```

---

## Chart Types

### Line Chart
```
Stroke:       2px, series color at 80%
Area fill:    series color at 20% opacity
Dot:          show on hover only, 5px, white border 2px
Curve:        monotone — smooth, organic feel
```

### Bar Chart
```
Fill:         series color at 80%
Border radius: 8px on top corners only (natural, not sharp)
Gap:          4px between grouped bars
Hover:        opacity 100%
```

### Area Chart
```
Stroke:       2px, series color at 80%
Fill:         gradient — series color 30% top → 0% bottom
Curve:        monotone
```

### Donut / Pie
```
Segment gap:  2px with white stroke
Corner radius: 4px (soft, not sharp)
Center value: Playfair Display 600, text-3xl
Center label: Source Sans 3, text-sm, muted
Hover:        segment shifts out 6px, smooth 300ms ease-out
```

---

## Tooltip

```jsx
<div style={{
  background: "rgba(249,248,244,0.95)",
  backdropFilter: "blur(8px)",
  border: "1px solid #E6E2DA",
  borderRadius: 16,
  boxShadow: "0 20px 40px rgba(45,58,49,0.12)",
  padding: "14px 18px",
  fontFamily: "'Source Sans 3', sans-serif",
}}>
  <div style={{ fontSize: 12, color: "rgba(45,58,49,0.55)", marginBottom: 6 }}>{label}</div>
  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 22, color: "#2D3A31" }}>{value}</div>
</div>
```

Frosted glass background using the canvas color. Soft shadow. Rounded.

---

## Motion

```
Bar entry:       grow from 0 over 600ms ease-out
Line draw:       strokeDasharray 700ms ease-out
Tooltip:         300ms ease-out fade-in
Hover response:  300ms ease-out (fast enough to feel responsive)
```

Set Recharts `animationEasing="ease-out"` and `animationDuration={600}`.

---

## Quick Reference

| Property | Value |
|---|---|
| Data color 1 | `#8C9A84` |
| Data color 2 | `#C27B66` |
| Data color 3 | `#DCCFC2` |
| Positive | `#8C9A84` |
| Negative | `#C27B66` |
| Grid line | `rgba(45,58,49,0.06)` |
| Tooltip bg | `rgba(249,248,244,0.95)` |
| Container border | `1px solid #E6E2DA` |
| Container radius | `24px` |
| Container shadow | `0 10px 15px rgba(45,58,49,0.06)` |
| Font — titles | Playfair Display 600 |
| Font — labels | Source Sans 3 400 |
| Bar radius | `8px top corners` |
