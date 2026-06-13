# CHARTS & GRAPHS — [SKILL NAME]
## Token file: `tokens/charts.md`

This file defines how charts and graphs should look and behave inside the
[SKILL NAME] design system. Every visual decision here must be derived from
the existing skill tokens — colors, typography, shadows, borders, and motion.
Charts are not a separate design system. They are surfaces that belong to the
same world as every other component.

---

## 0. AGENT RULES FOR EXISTING CHARTS

**Read this before touching any chart code.**

If the project already contains charts or graphs, your job is to restyle
them — not rewrite them. The data logic, the chart type, the data structure,
the props, and the component architecture are all off-limits.

**What you MAY change:**
- Colors (fills, strokes, gradients)
- Fonts and font sizes on axis labels, tooltips, legends
- Border radius on bars, tooltips, containers
- Shadow and background on the chart container card
- Grid line color, opacity, and style
- Animation duration and easing (if the library supports it)
- Tooltip background, border, and text styling
- Dot/point size and color on line charts
- Legend layout, spacing, and text styling

**What you MUST NOT change:**
- The chart library itself (do not swap Recharts for Chart.js or vice versa)
- Data fetching, data transformation, or data props
- The chart type (do not turn a bar chart into a line chart)
- Component file names or export names
- Any business logic inside the chart component
- The structure of the JSX — only add or change style-related props

**How to approach an existing chart:**
1. Read the component first — understand what library and chart type it uses
2. Identify which props accept style values (colors, fonts, sizes)
3. Apply the skill's tokens to those props only
4. Do not refactor, simplify, or "improve" the code structure
5. If a style cannot be applied without restructuring the component — leave it and note what couldn't be changed

**If the chart has inline styles or a separate styles file:**
Update the style values only. Do not reorganize how styles are applied.

**If the chart uses a config object:**
Update only the visual properties inside the config. Leave data and options
that affect chart behavior untouched.

---

## 1. LIBRARY

**Recommended:** Recharts (React) or Chart.js
**Why:** [Explain which fits this skill's personality — e.g. Recharts for
smooth/animated, Chart.js for more rigid/structured]

```bash
npm install recharts
# or
npm install chart.js react-chartjs-2
```

---

## 2. COLOR PALETTE FOR DATA

Charts need a dedicated set of sequential data colors derived from the
skill's accent palette. Never use arbitrary colors — every data color
should trace back to the skill's token system.

| Token | Hex | Usage |
|---|---|---|
| `data-1` | [PRIMARY ACCENT] | First series / most important |
| `data-2` | [SECONDARY ACCENT] | Second series |
| `data-3` | [TERTIARY COLOR] | Third series |
| `data-4` | [MUTED VARIANT] | Fourth series |
| `data-5` | [SUBTLE VARIANT] | Fifth series / least emphasis |
| `data-positive` | [SUCCESS COLOR] | Gains, up trends, good states |
| `data-negative` | [ERROR/WARNING COLOR] | Losses, down trends, alerts |
| `data-neutral`  | [MUTED COLOR] | Flat/unchanged, zero baseline |

**Rules:**
- [ ] Define your color sequence — what order do data colors appear?
- [ ] What opacity do fills use vs. strokes? (e.g. fill at 20%, stroke at 100%)
- [ ] How do colors behave on hover? (brighten, saturate, or outline?)
- [ ] What color is the zero baseline / reference line?

---

## 3. CHART CONTAINER

The outer wrapper that holds any chart. Should match the skill's card style.

```
Background:   [card background from skill]
Border radius:[card radius from skill]
Shadow:       [card shadow from skill]
Padding:      [standard card padding]
```

**Questions to answer:**
- [ ] Does the chart container use the glass/translucent card style or solid?
- [ ] Does it have the same hover lift behavior as other cards?
- [ ] Is there a header area inside the card (title + time filter)?

---

## 4. TYPOGRAPHY IN CHARTS

All text inside charts must use the skill's font system.

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Chart title | [HEADING FONT] | [SIZE] | [WEIGHT] | [FG COLOR] |
| Axis labels | [BODY FONT] | [SMALL SIZE] | [WEIGHT] | [MUTED COLOR] |
| Tick values | [BODY or MONO FONT] | [XS SIZE] | [WEIGHT] | [MUTED COLOR] |
| Legend labels | [BODY FONT] | [SM SIZE] | [WEIGHT] | [FG COLOR] |
| Tooltip values | [HEADING FONT] | [SIZE] | [BOLD] | [FG COLOR] |
| Tooltip labels | [BODY FONT] | [SM SIZE] | [WEIGHT] | [MUTED COLOR] |

**Questions to answer:**
- [ ] Do numeric values use the heading font (more graphic) or body font (more readable)?
- [ ] Does the skill use a monospace font for numbers? (good for dashboards)
- [ ] What is the minimum readable font size at the smallest chart breakpoint?

---

## 5. GRID & AXES

The structural skeleton of the chart. Should feel like it belongs to the skill's
visual language — not like a default browser stylesheet.

```
Grid lines:
  Color:    [very subtle — muted color at low opacity]
  Style:    [solid / dashed / dotted]
  Width:    [1px]

Axis lines:
  Color:    [slightly more visible than grid lines]
  Width:    [1px]
  Show X?   [yes/no]
  Show Y?   [yes/no]

Tick marks:
  Show?     [yes/no]
  Length:   [px]
  Color:    [muted]
```

**Questions to answer:**
- [ ] Does this skill's aesthetic support visible grid lines or minimal/none?
- [ ] Should axes have labels on both sides or just left/bottom?
- [ ] Does the skill use horizontal or vertical reference lines for context?

---

## 6. CHART TYPES & THEIR SPECIFIC RULES

### Line Chart
```
Line stroke:    [width] px, rounded linecap
Area fill:      [gradient from accent to transparent, or flat fill at low opacity]
Data point dot: [show always / show on hover / never]
Dot size:       [px]
Dot border:     [card background color] — creates floating dot effect
```

### Bar Chart
```
Bar fill:       [data color at full or partial opacity]
Bar radius:     [top corners rounded? how much? — match skill border style]
Bar gap:        [gap between bars in a group]
Hover state:    [brighten fill / show outline / lift?]
```

### Area Chart
```
Fill:           [gradient: accent at top → transparent at bottom]
Stroke:         [accent at full opacity]
Gradient stops: [top opacity] → [bottom opacity]
```

### Donut / Pie Chart
```
Segment gap:    [px between segments]
Center label:   [total value / percentage / label]
Center font:    [heading font, large]
Hover:          [segment lifts / brightens / shows callout?]
Radius:         [inner radius] / [outer radius]
```

### Stat Card (single number)
```
Value font:     [heading font, largest size]
Delta display:  [arrow + percentage, colored by positive/negative]
Sparkline:      [mini line chart below the number, same data colors]
```

---

## 7. TOOLTIP

The most important interactive element in charts. Must feel native to the skill.

```
Background:   [card background — glass or solid]
Shadow:       [card shadow from skill]
Border radius:[medium radius from skill]
Padding:      [16px / 20px]
Border:       [subtle border matching skill style, optional]

Label:        [body font, muted color, small size]
Value:        [heading font, full weight, fg color, larger size]
Color dot:    [6px circle matching the data series color]
```

**Questions to answer:**
- [ ] Does the tooltip follow the cursor or anchor to the data point?
- [ ] Does it show a vertical cursor line when hovering?
- [ ] Does it animate in (fade, scale) or appear instantly?
- [ ] Does it show one series or all series at that x-position?

---

## 8. LEGEND

```
Position:     [top / bottom / right / inline with chart title]
Layout:       [horizontal row / vertical list]
Item spacing: [gap between legend items]
Color swatch: [circle / square / line] at [size]px
Font:         [body font, small, muted color]
```

---

## 9. MOTION & ANIMATION

Chart animations must match the skill's motion token system.

```
Entry animation:    [describe how bars grow / lines draw / segments rotate in]
Duration:           [match skill's standard transition duration]
Easing:             [match skill's easing token]
Stagger:            [do series animate in sequence or all at once?]
Hover transition:   [duration for tooltip appear / data point highlight]
```

**Questions to answer:**
- [ ] Does this skill's personality support expressive chart entry animations or instant?
- [ ] Do bars grow from zero or fade in?
- [ ] Does the line draw itself left to right or appear all at once?

---

## 10. EMPTY & LOADING STATES

```
Loading:      [skeleton placeholder matching skill's skeleton style]
Empty:        [centered message + icon, using skill's muted text color]
Error:        [error color text + retry option]
```

---

## 11. RESPONSIVE BEHAVIOR

```
Mobile (< 640px):
  - Hide Y-axis labels? [yes/no]
  - Reduce tick count?  [yes/no]
  - Simplify tooltip?   [yes/no]
  - Minimum chart height: [px]

Tablet (640–1024px):
  - [any adjustments]

Desktop (> 1024px):
  - Full feature set
```

---

## 12. ACCESSIBILITY

- [ ] All data colors meet 3:1 contrast against the chart background
- [ ] Charts have `role="img"` and `aria-label` describing the data
- [ ] Tooltips are keyboard accessible (tab through data points)
- [ ] Color is never the only differentiator between series — also use pattern or label
- [ ] Animations respect `prefers-reduced-motion`

---

## 13. QUICK REFERENCE — THE NON-NEGOTIABLES

Fill in these 8 values and you have the minimum needed to style any chart:

| Property | Value |
|---|---|
| Data color 1 | |
| Data color 2 | |
| Data color 3 | |
| Positive/up color | |
| Negative/down color | |
| Grid line color | |
| Tooltip background | |
| Chart card shadow | |
