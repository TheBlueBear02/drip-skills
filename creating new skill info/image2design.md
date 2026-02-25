You are an expert UI/UX designer, visual design analyst, and design systems architect.

I am giving you a screenshot of a UI. Your job is to reverse-engineer it into a complete, detailed design system document — structured exactly like a professional design system spec.

Analyze the screenshot thoroughly and extract every visual decision you can observe or reasonably infer. Be specific, opinionated, and exhaustive. Do not be vague. If you cannot determine an exact value, make a precise, well-reasoned inference based on what you see.

Output the design system in the following structure:

---

# Design Style: [Name the style — invent a precise, evocative name based on what you observe]

## Design Philosophy

### Core Principle
[1–2 sentences capturing the singular design philosophy driving all decisions. What is this design "about"?]

### Visual Vibe
**Emotional Keywords**: [6–10 single adjectives]

This is the visual language of:
- [4–6 real-world analogues: brands, publications, spaces, cultural references that match the vibe]

### What This Design Is NOT
[5–7 things this design actively rejects, with ❌ prefix]

### The DNA of [Style Name]
[5–8 numbered sections, each naming a core visual principle and explaining it in 2–4 sentences. These should be the building blocks of the style — things like typography approach, color logic, shape language, spacing philosophy, use of depth/shadow, etc.]

---

## Design Token System

### Colors
[Extract every color role you can identify. Format:]
role:             #HEX (description)
[Include: background, foreground, primary, secondary, accent, muted, mutedForeground, border, card, cardForeground, any state colors (success, warning, error if present), and any brand colors. Note the overall palette strategy.]

**Palette Rule**: [Describe the governing logic of the color system in 1–2 sentences.]

### Typography

**Font Stack**:
[Identify or infer each font used. Classify as Display, Body, Mono/UI, etc. If you cannot identify the exact font, name the closest match and describe its character.]
- **Display/Headlines**: `"FontName", fallback, category` — [describe its character]
- **Body**: `"FontName", fallback, category` — [describe its character]
- **UI/Labels**: `"FontName", fallback, category` — [describe its character]

**Type Scale**:
[Map out every text size you observe, from smallest to largest. Estimate rem/px values.]
xs:   Xrem  (Xpx) — [usage]
sm:   Xrem  (Xpx) — [usage]
base: Xrem  (Xpx) — [usage]
...continue through the full scale observed

**Tracking & Leading**:
[Describe letter-spacing and line-height patterns for different text roles]

**Font Weight Usage**:
[Map which weights are used and when]

### Border Radius
[Extract every radius value used. Be precise — note if consistent, variable, or never used.]

### Spacing System
[Infer the base spacing unit and scale. Note any patterns in padding, margins, gaps.]
Base unit: Xpx
Scale: [list key values used]

### Borders & Lines
[Extract every border style observed — weight, color, style, where used]
[name]: Xpx [style] [color] — [where used]

### Shadows & Depth
[Describe every shadow or depth technique observed — or explicitly state "None" if flat]
[level/name]: [box-shadow value or description]

### Textures & Patterns
[Describe any background textures, noise, gradients, patterns, or overlays observed. If none, state "None." If present, provide approximate CSS recreations.]

---

## Component Stylings

### Buttons
[For every button variant visible, describe:]
- Background, text color, border
- Padding, font size, weight, transform
- Border radius
- Hover/active state (infer if not visible)
- Any icons or decorative elements

### Cards / Containers
[Describe every card or container pattern: background, border, radius, shadow, padding, hover behavior]

### Navigation
[Describe nav structure: layout, link styles, active states, any dropdowns, mobile behavior]

### Inputs / Forms
[If visible: input styling, label treatment, placeholder style, focus state, error state]

### Typography Components
[Headings, body text, captions, labels, tags, badges — describe styling for each]

### Icons
[Style: outlined/filled/duotone, stroke width, size conventions, color usage, container treatment if any]

### Images
[How images are treated: aspect ratios, borders, filters (grayscale, etc.), hover effects, cropping style]

---

## Layout Strategy

### Container
[Max-width, horizontal padding at different breakpoints]

### Section Spacing
[Vertical padding conventions for sections, spacing between sections]

### Grid System
[Number of columns, gap sizes, any notable grid patterns]

### Alignment Patterns
[Left-aligned, centered, mixed? Any notable asymmetry or editorial layout choices?]

---

## Effects & Animation

**Motion Philosophy**: [1 sentence]

[Describe any animations, transitions, or micro-interactions visible or clearly implied. Note:]
- Transition durations
- Easing functions
- What triggers animation
- Hover effects
- Any loading states

**Explicitly Absent**: [List motion patterns this design avoids]

---

## Responsive Strategy

[Infer mobile/responsive behavior based on the layout structure. Describe:]
- How columns collapse
- How typography scales
- How navigation changes
- Any mobile-specific patterns

---

## Accessibility Signals
[Note any accessibility considerations observable: contrast ratios, focus indicators, touch target sizes, ARIA patterns, skip links]

---

## Bold / Distinctive Choices
[List 8–14 specific design decisions that make this UI memorable or distinctive. These should be the things someone would immediately notice or that define the style's personality. Number them.]

---

## What Success Looks Like

A successfully implemented [Style Name] design should feel like:
- [4 real-world analogues or experiences]

It should NOT feel like:
- [4 things it must not resemble]

---

Be exhaustive. Be precise. Name exact hex values where visible. Estimate confidently where not. The goal is a document detailed enough that a developer could implement this design system from scratch without ever seeing the original screenshot.