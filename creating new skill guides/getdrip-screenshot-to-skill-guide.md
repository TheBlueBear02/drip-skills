# Screenshot → Skill Guide

**How to analyze UI screenshots and turn what you see into a complete GetDrip skill.**

This guide works in tandem with `getdrip-skill-creation-guide.md`. That guide explains what a skill must contain. This guide explains how to extract the information from screenshots to fill it.

---

## Before You Start

You need at least 3 screenshots to build a skill. More is better. Ideal set:

1. **A full page view** — shows layout structure, sidebar/nav, overall spacing rhythm
2. **A component close-up** — shows a card, form, or table at enough resolution to read typography sizes and spacing
3. **An interactive state** — shows a hover, active selection, or open dropdown so you can see interactive colors and transitions

If you only have one screenshot, you can still extract the color system, typography hierarchy, and spacing — but you will need to infer the interaction patterns.

Do not guess. If something is not visible in the screenshots, mark it as `[INFER]` in your notes and make an explicit decision in the skill file, noting it was inferred rather than observed.

---

## The Analysis Order

Look at screenshots in this exact order. Each layer of analysis builds on the previous one.

```
1. Background & surfaces  →  establishes the depth system
2. Text colors & sizes    →  establishes the type hierarchy
3. Accent & semantic color →  establishes the color rules
4. Spacing & layout       →  establishes the density system
5. Component anatomy      →  establishes reading order and structure
6. Typography details     →  establishes the exact font decisions
7. Icons & decorative elements →  establishes what is and isn't there
8. Interactive states     →  establishes hover, active, focus patterns
9. The distinctive decisions  →  the most important step — what makes this NOT generic
```

---

## Step 1 — Background & Surfaces

**What to look for:**
Count the number of distinct background colors you can see. A professional UI uses 2–4. More than 4 suggests ad-hoc decisions. Less than 2 suggests a flat design.

**Questions to answer:**
- What is the darkest/lightest background? This is `--bg-base`.
- What color are cards and panels sitting on? This is `--bg-surface`.
- Is there a third level for dropdowns or modals visible? This is `--bg-elevated`.
- Are borders used to separate surfaces, or does background contrast alone do it?

**How to extract the value:**
If you can zoom in on a flat background area, describe it precisely. "Near-black with a very slight cool blue tint" or "warm off-white, not pure white." This verbal description is enough — you do not need to eyedrop an exact hex value to write the skill. You need to understand the *intent* of the color choice.

**Write into:** `tokens/colors.md` → Background Surfaces section

**Red flags that signal slop:**
- Pure `#000000` black background — professional dark UIs use near-black with slight tint
- Pure `#FFFFFF` white background — professional light UIs use very slightly warm or cool white
- More than 4 depth levels — sign of ad-hoc decisions, not a system

---

## Step 2 — Text Colors & Sizes

**What to look for:**
Identify the text hierarchy by looking for the most visually prominent text, then the next level down, then the next. Most UIs have 3 text color tiers: primary (main content), secondary (labels, helper text), tertiary (disabled, metadata).

**Questions to answer:**
- What is the primary text color? (The color of the most important readable text)
- What is the secondary text color? (Labels, column headers, helper text — clearly lighter/less prominent)
- Is there a tertiary level? (Timestamps, disabled states, placeholder text)
- What is the size relationship between the biggest and smallest text visible? (Ratio — e.g., 48px metric vs 12px label = 4:1)

**How to identify the hierarchy ratio:**
Find the most important number or heading on screen. Find its label or context text. Estimate their size relationship. This ratio is one of the most important decisions in the skill — write it down explicitly.

Common ratios:
- 4:1 (48px / 12px) — strong data hierarchy, typical in analytics dashboards
- 3:1 (36px / 12px) — moderate hierarchy, typical in SaaS product UIs
- 2:1 (28px / 14px) — subtle hierarchy, typical in editorial or content UIs

**Write into:** `tokens/typography.md` → Scale + Hierarchy Rule sections

---

## Step 3 — Accent & Semantic Color

**What to look for:**
Find every non-neutral color in the UI. Write down what each one is attached to. Then identify the pattern.

**Questions to answer:**
- What color are the interactive elements? (Buttons, links, active nav items, focused inputs) — this is the accent color.
- Is there more than one interactive color, or is it strictly one?
- What color indicates something positive? (Revenue up, success state, healthy status)
- What color indicates something negative? (Error, decline, warning)
- Is color used decoratively anywhere? (Gradients on cards, colored section backgrounds, illustrative elements)

**The most important observation:** Is color used to communicate or to decorate?

A professionally designed UI uses color to communicate. Every colored element means something. If you see color that does not mean anything — a blue card header, a purple section background, a gradient on a stat card — that is a design decision you should note as either a specific trait of this skill OR a red flag that the reference UI itself has quality issues.

**Write into:** `tokens/colors.md` → Accent Color + Semantic State Colors sections

---

## Step 4 — Spacing & Layout

**What to look for:**
Spacing is harder to extract from screenshots than color, because you cannot measure pixels directly. Instead, look for *relationships* between spacing levels.

**Questions to answer:**
- Is the spacing uniform (everything has the same gaps) or graduated (important elements have more space)?
- Roughly, what is the ratio between the tightest spacing (inside a dense table row) and the most generous spacing (around a KPI card or hero element)?
- What is the column structure? How many columns for KPI cards? Is the sidebar fixed width or fluid?
- How much padding does a typical card have? (Estimate: tight = ~12px, normal = ~20px, generous = ~24px+)
- Are there clear section breaks between groups of elements, or does everything run together?

**Density tier identification:**
Look for the densest element in the UI (usually a data table or a list). Look for the most spacious element (usually a KPI card or hero stat). Everything else falls between these two poles. These are your density tiers. Name them and estimate their spacing.

**Write into:** `tokens/spacing.md` → Density Gradient + Layout Structure sections

---

## Step 5 — Component Anatomy

For each major component visible in the screenshots, identify its internal reading order.

**KPI / Stat cards — answer these:**
- Does the label come before or after the metric value? (Label first = professional. Metric first = sometimes used but less common.)
- Is there a delta/trend indicator? Where does it sit relative to the metric?
- Is there an icon? Where — left of the label, top-left corner, or elsewhere?
- Does the card have a visible border, or does the background contrast define its edge?
- Are all cards the same height in a row, or do they vary?

**Navigation / Sidebar — answer these:**
- How visually prominent is the active nav item? Does it have a background fill, a colored dot, an underline, or just a color change?
- What is the contrast difference between active and inactive nav items? (High contrast = sidebar competes with content. Low contrast = sidebar recedes.)
- Are there section labels grouping nav items? How do they look compared to the nav items?
- Is there a visible border between the sidebar and main content, or does background depth separate them?

**Data tables — answer these:**
- What do column headers look like compared to cell values? (Size, weight, color)
- How are row separators shown? (Border lines, background alternation, or nothing)
- How is status shown? (Text, colored dot, badge, icon)
- Is there a visible row hover state?

**Charts — answer these:**
- What color palette is the chart using? Is it the same accent color as interactive elements, or a separate palette?
- Are there gridlines? Horizontal only, both, or none?
- Is there a tooltip visible, and does it match the surrounding UI's dark/light theme?

**Write into:** `components/[component-name].md` → Anatomy section

---

## Step 6 — Typography Details

After identifying size hierarchy (Step 2), now look closely at the specific font characteristics.

**Questions to answer:**
- Is the font a sans-serif, serif, monospace, or a mix?
- For sans-serifs: is it geometric (round, uniform strokes — like Geist, DM Sans, Plus Jakarta) or humanist (slight variation in stroke width — like Inter, Nunito, Lato)?
- For headings/metrics: does it have any unique personality, or is it completely neutral?
- Is the same font used for everything, or are there two fonts in use?
- Are any numbers in a monospaced font? (A strong signal of professional dashboard design — prevents layout shift)
- Is letter-spacing used? Tight on large headings? Wider on small labels?
- Are labels in uppercase or mixed case?

**Font identification without exact names:**
You often cannot identify the exact font from a screenshot. That is fine. Describe what you see:
- "A very neutral geometric sans-serif, likely Inter or Geist Sans — extremely even strokes, no personality, highly readable"
- "A slightly condensed grotesque with more character than Inter — possibly Space Grotesk or Plus Jakarta Sans"
- "Monospaced numbers on metric values — likely Geist Mono, JetBrains Mono, or Roboto Mono"
- "A transitional serif for headlines, used only for display sizes — possibly Playfair Display or Instrument Serif"

The skill can specify a font that matches the character of what you see even if you cannot identify the exact font in the screenshot.

**Write into:** `tokens/typography.md` → The Two-Font System (or single-font) section

---

## Step 7 — Icons & Decorative Elements

**What to look for:**
This step is about identifying two things: what is there, and what is conspicuously absent.

**Questions to answer about what IS there:**
- What icon style? (Outline/stroke icons vs. filled icons vs. duotone)
- What stroke weight on icons? (Thin ~1px, medium ~1.5px, heavy ~2px)
- Icon size relative to text — small and inline, or prominent standalone?
- Are there any illustrative or decorative elements? (Gradient blobs, background textures, abstract shapes, photography)
- Are there any emojis in the UI? (Note this. If present, it is a quality flag — professional UIs do not use emojis in chrome.)

**Questions to answer about what is ABSENT:**
This is equally important. Look for what a generic AI-generated UI would typically include, but which is missing from this UI:
- No gradient backgrounds on cards?
- No decorative borders?
- No shadow under every card?
- No colored section headers?
- No emoji in empty states?
- No blue-purple gradient hero?

What is absent is as much a part of the design system as what is present. Write these as "never" rules in the skill.

**Write into:** `SKILL.md` → What You Must Never Override section + Rule 11 (emojis)

---

## Step 8 — Interactive States

If any screenshot shows a hover, focus, active, or selected state:

**Questions to answer:**
- Hover on a card: does the background lighten/darken, a border appears, or a shadow appears?
- Active nav item: colored background, left border indicator, dot, or text color change only?
- Focused input: border color changes to accent? Glow? Both?
- Button hover: darker shade of accent, or lighter?
- Table row hover: how subtle is the background change?

**If no interactive states are visible in screenshots:**
Infer them from the color system. If the accent is `#3B82F6` blue, the hover button is `#2563EB` (one shade darker). Card hover is one depth level up from the card's background. Note these as `[INFER]` in the skill file.

**Write into:** `components/[component].md` → Implementation code (the hover/active class logic)

---

## Step 9 — The Distinctive Decisions

This is the most important step and the one that requires the most judgment.

After completing steps 1–8, you have the *data* of the design. Now you need to identify the *decisions* — specifically, the choices this designer made that a generic AI would not make.

**How to identify a distinctive decision:**

Ask: "What would Claude or GPT-4 generate if I gave it a prompt with no screenshot?" If the answer is different from what you see in the screenshot, you have found a distinctive decision. Write it as a rule.

**Common distinctive decisions and how to articulate them:**

| What you see | How to write it as a rule |
|---|---|
| Labels are all-caps at 11px | "Labels are always uppercase at 11px with 0.06em letter-spacing. Never sentence case for labels." |
| No shadow on any card — background contrast only | "Cards have no box-shadow. Surface separation is achieved by background depth alone (#0A0A0B → #111113)." |
| Sidebar text is noticeably more muted than content | "Sidebar nav item text is #71717A — intentionally at ~45% luminance vs content text. It recedes." |
| Only one interactive color used throughout | "One accent color (#3B82F6) only. Never a secondary interactive color." |
| Monospaced font only on numbers, not labels | "Geist Mono is used exclusively for numeric values. Inter for all non-numeric text, including labels on KPI cards." |
| Positive deltas in emerald, not generic green | "Positive = #10B981 (emerald). Negative = #F43F5E (rose). Never #00FF00 or #FF0000." |
| Charts have no Y-axis | "Y-axis is hidden in all charts. The tooltip shows exact values. The axis line adds clutter without information." |
| Empty state has illustration + title + CTA | "Empty states always have: icon (24px, --text-tertiary), title (16px semibold), description (14px --text-secondary), optional CTA button." |

**The "what's absent" list:**

Go through this list and check each item against the screenshots. If a typical AI-generated UI would include it but the screenshots do not — write it as a forbidden pattern.

- [ ] Blue-purple gradient backgrounds
- [ ] Gradient fills on card backgrounds
- [ ] Shadows on every card
- [ ] Colored card backgrounds to indicate status
- [ ] Multiple accent colors for different interactive elements
- [ ] Emojis in any UI text
- [ ] Generic Recharts color palette
- [ ] Vertical gridlines in charts
- [ ] Uniform spacing on all elements regardless of importance
- [ ] Bold/heavy font weights (700+)
- [ ] Uppercase headings (unless this design specifically uses them)
- [ ] Decorative dividers or section ornaments
- [ ] Animated gradient borders on hover

Any item checked becomes a "NEVER" rule in the skill.

**Write into:** `SKILL.md` → The Anti-AI-Generic Rules section + `skill.json` → `signature_traits`

---

## Translating Observations Into Skill Files

Once you have completed all 9 analysis steps, fill in the files in this order:

### 1. Write `philosophy.md` from your Step 9 findings

The philosophy is not a description of the visual. It is an explanation of the *intent* behind it. Ask: "Why did the designer make these decisions?" Look at the distinctive decisions you identified and synthesize them into a design principle.

Example: If the UI has very low-contrast navigation, semantic color usage, and no decoration, the principle might be: "Navigation recedes so content leads. Color communicates, never decorates. Every element earns its place."

### 2. Fill `tokens/colors.md` from Steps 1, 3

Write the background values, text colors, accent, and semantic colors you observed. For every value, write the rule alongside it — when it is used and when it is not.

### 3. Fill `tokens/typography.md` from Steps 2, 6

Write the fonts (or best-match descriptions), the size scale, and the hierarchy ratio you measured. Include formatting rules for numbers observed in the screenshots.

### 4. Fill `tokens/spacing.md` from Step 4

Write the base unit (default: 4px), the density tiers, and the specific layout measurements you estimated. If measurements are estimated rather than exact, note that — the intent matters more than the pixel value.

### 5. Fill `tokens/motion.md` from Step 8 (or infer)

If interactive states were visible, describe the transitions. If not, infer them from the character of the design. A precise, data-forward design uses fast transitions (150–200ms). A soft, warm design uses slightly slower transitions (200–300ms). A playful design might use bouncy easing.

### 6. Write component files from Step 5

One file per major component. Start with the anatomy, then write the implementation with WHY comments, then write the forbidden patterns you identified in Step 9.

### 7. Write `SKILL.md` last

Once all token and component files are written, write SKILL.md. The reading order section should reference the files you just created. The 11 universal rules should be adapted to this specific aesthetic using what you learned in Step 9. The "never override" list should contain the 5–7 most distinctive decisions you found.

---

## Quality Check

Before declaring the skill complete, run these checks:

**The verbal description test**
Describe the UI in 3 sentences without mentioning any colors, fonts, or specific values. Only describe what it *feels like* and what decisions it *refuses* to make. If you can do this, you understand the design well enough to have written a real skill.

Example: "This is a UI that trusts the user to understand data without decoration. It gives numbers the most visual space and treats everything else — labels, navigation, borders — as scaffolding that should fade away. It refuses gradient, refuses emojis, and refuses to make the sidebar compete with the content."

**The anti-slop rule coverage test**
For each of the 11 universal rules in `getdrip-skill-creation-guide.md`, confirm the skill has an explicit rule addressing it. If any of the 11 are not addressed, the skill is incomplete.

**The "would AI break this rule?" test**
For each rule in SKILL.md's anti-generic section, ask: "Would Claude or GPT-4, given a generic prompt, break this rule?" If the answer is no — if the AI would naturally follow this rule without being told — then the rule is not important enough to be in the skill. Only rules that override AI defaults belong here.

---

## Notes on Screenshot Quality

**Low resolution / small screenshots:** You can still identify the hierarchy ratio, color temperature, depth levels, and spacing relationships. You cannot identify exact fonts or fine border details. Mark those as `[INFER]`.

**Single component screenshot:** Useful for component anatomy and typography details. You cannot establish the full layout or spacing system. Supplement with a full-page screenshot if possible.

**Light mode vs. dark mode UI:** The analysis process is identical. For light mode, pay extra attention to whether backgrounds are warm (cream/ivory tone) or cool (blue-grey tone) — this determines the character of the system.

**Screenshots from a competitor or reference product (not your own):** Analyze exactly the same way. You are extracting design decisions, not copying code. The skill encodes the *decisions*, not the *implementation*.
