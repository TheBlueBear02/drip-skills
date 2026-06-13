# GetDrip Skill Creation Guide

**How to build design skills that make AI produce professional UI instead of AI slop.**

---

## What a Skill Actually Is

A GetDrip skill is not a component library. It is not a CSS theme. It is not a color palette.

A skill is a set of opinionated design decisions — written in plain language — that an AI reads before generating any UI. The AI does not know what "professional" looks like by default. Its default is the statistical average of everything in its training data, which is generic. A skill overrides that average with specific, defended decisions.

The quality of a skill is determined by one test: **does the AI produce UI that looks like a designer worked on it, or does it look like it came out of a prompt?**

If you cannot tell the difference, the skill is not done.

---

## The File Structure (Required)

Every skill must have exactly this structure. No files are optional.

```
skills/
  [project-type]/
    [skill-name]/
      SKILL.md          ← The master file. AI reads this first. Most important.
      skill.json        ← Machine-readable metadata (registry, CLI, site).
      philosophy.md     ← The design intent. Why this skill exists. The soul.
      tokens/
        colors.md       ← Full color system. Every color has exactly one purpose.
        typography.md   ← Font choices, size scale, hierarchy rules.
        spacing.md      ← Base unit, density tiers, layout grid.
        motion.md       ← What animates, what doesn't, timing, easing.
      components/
        [component].md  ← One file per major component. Anatomy + code + rules.
      integration/
        setup.md        ← How to install dependencies and wire the system.
```

Minimum components required:
- The primary interactive unit for the project type (KPI card for dashboards, hero section for landing pages, etc.)
- Navigation (sidebar or header)
- One data display component (table, list, or grid)

---

## Step 1 — Define the Skill Before Writing Anything

Answer these four questions first. If you cannot answer them, do not start writing files.

**1. Who is the user of this skill, and what product are they building?**
Not "a developer building a dashboard" — be specific. "A non-technical founder building an internal analytics tool for their SaaS product, using Bolt or Lovable, who wants it to look like Segment built it."

**2. What is the aesthetic reference?**
Name 2–3 real products that have the look. "Vercel analytics + Segment dashboard + Linear's sidebar." These are your quality bar. The skill should produce something a person would believe came from one of these teams.

**3. What are the 3 most important design decisions that make this aesthetic distinctive?**
Not generic things like "dark background" or "clean typography." Specific things: "Geist Mono for all metric numbers," "sidebar text at 45% luminance vs content," "emerald for positive deltas, rose for negative — never generic red/green." If the decisions are not specific enough to sound opinionated, they are not specific enough.

**4. What does the AI default to that this skill must override?**
This is the most important question. AI defaults are: Inter for everything, blue-purple gradients, uniform spacing, equal-weight labels and values, Recharts default colors, rounded everything, generic blue primary buttons. Your skill should explicitly name and forbid every one of these that applies to your aesthetic.

---

## Step 2 — Write `philosophy.md` First

Write the philosophy file before any tokens or components. This is the document that explains **why** the skill looks the way it does. If you write it first, the token and component decisions follow naturally from it. If you write it last, it will just describe the decisions you already made without explaining their logic.

A good philosophy file answers:
- What is the core design principle that every decision flows from?
- What problem is this skill solving for the user's end-user?
- What are the 2–3 "enemies" of this aesthetic — the things that look wrong?
- What real-world products share this DNA?
- What is this skill NOT?

**The philosophy file is not marketing copy.** Do not say "elegant" or "modern" or "clean." Every aesthetic claims to be those things. Say what is specific to this skill. "The sidebar recedes intentionally — it is navigation, not content, and should disappear when the user is reading data."

**Length:** 400–600 words. Long enough to be substantive, short enough to be read in full.

---

## Step 3 — Write the Token Files

Each token file encodes decisions, not just values. Every hex value needs a rule that governs when it is used and when it is not.

### `tokens/colors.md`

**Required sections:**
1. **The rule before the tokens** — what does color mean in this system? ("Color communicates exactly one of three things: surface depth, interactivity, or semantic state. If a color does not serve one of these three purposes, it does not belong here.")
2. **Background surfaces** — the depth layers (2–4 levels max). Name each layer and what type of element goes on it.
3. **Text colors** — at minimum: primary, secondary, tertiary. State which text type uses which.
4. **Accent color** — the ONE interactive color. State explicitly what it is used for AND what it is never used for.
5. **Semantic state colors** — positive, negative, warning, neutral. State that these are used ONLY for their meaning.
6. **Border / divider** — when to use borders vs background contrast alone.

**The anti-slop requirement:** Every color entry must have a rule alongside the value. Not just `--accent: #3B82F6;` — but `--accent: #3B82F6; /* Interactive elements ONLY: buttons, links, focus rings, active nav. Never decorative. */`

### `tokens/typography.md`

**Required sections:**
1. **The font choices** — which fonts, why those fonts, not others. Specificity matters: "Inter because it is neutral and readable at 12px" is better than "Inter for clean modern look."
2. **The type scale** — sizes from largest (hero) to smallest (caption). Every size needs a name and a use case.
3. **The hierarchy rule** — the ratio between the most important text element and its label/context. Name the ratio. Enforce it. ("4:1 metric-to-label. If the ratio is smaller, the hierarchy is wrong.")
4. **Formatting rules** — how numbers are displayed (abbreviated, decimal places, currency symbols), what to do with zero states, whether to uppercase labels.
5. **What you must never do** — explicit forbidden typography choices. ("Never use the same font weight for a metric and its label. Never apply Inter to metric numbers.")

### `tokens/spacing.md`

**Required sections:**
1. **The base unit** — always a multiple-of-4 system (4px base). No arbitrary values.
2. **The density gradient** — the most important concept. Spacing communicates importance. Name at least 3 density tiers and what elements belong to each.
3. **Layout structure** — the specific pixel values for the main layout containers (sidebar width, content padding, section gaps, card padding, table row padding).
4. **Grid systems** — column layouts for the most common page patterns.
5. **Rules** — what spacing decisions are forbidden and why.

### `tokens/motion.md`

**Required sections:**
1. **The philosophy** — when does motion serve the user vs. when is it decoration? (In a dashboard: motion exists to help users track change. In a landing page: motion creates perceived quality. Name it explicitly.)
2. **Timing** — named durations (instant, fast, base, slow). Maximum 5 values.
3. **Easing** — named curves. Always include the cubic-bezier values. Explain when each is used.
4. **What to animate** — explicit list of elements and their animation pattern.
5. **What to NEVER animate** — explicit list. This is as important as the list above.

---

## Step 4 — Write the Component Files

Each component file covers one major UI pattern. Write one file per component. A component file is not a tutorial — it is a reference the AI reads before building that component.

### Required in every component file:

**Anatomy diagram** — A plain-text box diagram showing the visual structure, in exact order top to bottom. This sets the reading order expectation before any code.

**Implementation code** — Working JSX with inline `/* WHY: ... */` comments on every non-obvious decision. The WHY comments are the most important part. An AI following this code without understanding the WHY will extrapolate wrong.

**The anti-slop rules** — A short section at the end titled "Common mistakes to avoid" or "Rules." Each rule must be:
- Written as a forbidden pattern with an `❌` prefix
- Followed by a brief explanation of why it is wrong
- Not just a style preference — a decision that would make the output look AI-generated

**Skeleton loading state** — Every component that loads data must have its skeleton defined. The skeleton must match the exact dimensions of the loaded component. Generic grey rectangles are not acceptable.

### Writing WHY comments

WHY comments explain design decisions that look arbitrary but are not. Examples:

```jsx
// WHY: Background is --bg-surface (#111113), NOT a colored card.
// Color on the card background duplicates the signal already in the delta indicator.
// Two color signals for one status = noise.

// WHY Geist Mono: monospaced digits prevent layout shift when values update live.

// WHY left: -20 on YAxis: The tooltip shows exact values, making the Y-axis
// labels redundant. Pulling them off-canvas reduces visual clutter without
// losing information.

// WHY uppercase on labels: 12px labels need increased tracking to be readable.
// Uppercase + tracking-wide achieves readability without icon-sized labels.
```

A WHY comment that says `// WHY: looks better` is not a WHY comment.

---

## Step 5 — Write `SKILL.md`

SKILL.md is the master file. The AI reads this first, before any component or token file. It must contain everything the AI needs to understand the skill's intent and access the rest of the files.

### Required sections (in this exact order):

**1. Frontmatter block**
```yaml
---
name: skill-name
description: >-
  One sentence. What aesthetic does this apply? When should this skill be used?
  Include trigger phrases ("use when building X" or "use when the user mentions Y").
version: 1.0.0
metadata:
  stack: React + Tailwind CSS + [other deps]
  category: dark | light | colorful | bold | playful | luxury
  projectType: dashboard | saas-website | landing-page | portfolio
  mood: [word, word, word, word]
  signature_element: The one most distinctive visual decision in this skill
---
```

**2. One-paragraph skill description**
What does this design system feel like? What are the 3 most important things an AI needs to understand before touching this skill? What real products does it reference?

**3. Reading order (tiered)**
Tier A: files to read always, before any page.
Tier B: files to read before building a full page.
Tier C: files to read before building a specific component.

**4. The anti-AI-slop rules — the 10 rules section**
This is the most important section in SKILL.md. Ten explicit rules that name and forbid the AI default behaviors that would otherwise produce generic output. Each rule must:
- Have a number and a name
- Describe a specific forbidden or required behavior (not a vague principle)
- Be written as something an AI can check: "Did I follow this rule yes/no?"

See the template below for the 11 universal rules that apply to every skill, plus notes on skill-specific rules.

**5. What you can override / what you must never override**
Two lists. Override: things that can change per project without breaking the aesthetic. Never override: the foundational decisions that make this skill what it is. If someone overrides these, the result no longer belongs to this skill.

**6. Agent behavior rules**
Specific instructions for how the AI should behave when generating pages with this skill. Not design principles — behavioral rules. "When generating a KPI section, always use 3–4 cards. Never make all cards identical in layout." "Every chart must have a custom tooltip. If you use the Recharts default tooltip, you have not followed the skill."

**7. Layout template**
A JSX snippet showing the top-level layout structure for a typical page using this skill. This is the scaffolding the AI should use as its starting point.

---

## The 11 Universal Anti-Slop Rules

Every skill must include these 11 rules, adapted to its aesthetic. They encode the most common AI default failures.

**Rule 1: No generic font defaults**
State the exact font(s) for this skill and forbid the AI defaults. For dark/professional skills: "Never Inter for metric numbers — use Geist Mono or JetBrains Mono." For light editorial skills: "Never Inter for headlines — use the defined serif." The AI defaults to Inter for everything. This rule prevents that.

**Rule 2: The hierarchy ratio is explicit and enforced**
State the size ratio between primary content and its label/context. 4:1, 3:1, or 2:1 — pick one and name it. "Metric at 4× the label size. If the ratio is smaller, the hierarchy is wrong." This prevents the AI from rendering labels and values at equal visual weight.

**Rule 3: Color only means something**
Define what each color means. Then state that color appears nowhere else. "Blue = interactive only. Emerald = positive only. Rose = negative only. Any color that does not serve one of these purposes is removed." This prevents decorative gradients and rainbow color usage.

**Rule 4: The background depth system has a ceiling**
State the number of background levels (2–4 max) and the exact values. "Three levels only: base → surface → elevated. Never invent a fourth. Never use a colored background for cards." This prevents the AI from adding colored card backgrounds, gradient overlays, and additional depth levels that muddy the design.

**Rule 5: Third-party library defaults are always overridden**
Name every library used (Recharts, Framer Motion, etc.) and the specific defaults that must be replaced. "Never use Recharts default colors. Always override with the skill palette. Always use a custom tooltip." Libraries have their own aesthetics. This rule prevents them from leaking into the skill.

**Rule 6: Loading states must match content shape**
"Skeleton loaders must replicate the exact dimensions of the loaded content. Generic grey rectangles are not acceptable." This is consistently missed by AI-generated code and is one of the most visible quality signals.

**Rule 7: Motion must serve function**
State what is animated and what is not. "Never animate table sorts, filter changes, or pagination — these are instant operations. Animate: initial card entrance, chart first render, metric value updates." Purposeless animation is one of the fastest ways to make a UI look AI-generated.

**Rule 8: Spacing signals importance**
"Spacing is not uniform. More important elements get more breathing room. Define at least 3 density tiers and assign elements to them explicitly." This prevents the flat, uniform-spacing output that makes AI dashboards look like templates.

**Rule 9: Navigation recedes by design**
"Navigation elements (sidebar, tab bar, header) use intentionally lower contrast than content elements. The user's attention should be on the content, not the chrome." The exact contrast ratio or color value should be stated. This is consistently ignored by AI defaults.

**Rule 10: Empty and error states are designed, not blank**
"An empty table is not a blank table. An error state is not a hidden state. Every component must have a defined empty state (icon + title + description + optional CTA) and an error state (error message + retry action)." AI-generated code almost never includes these.

**Rule 11: No emojis in UI**
"No emojis anywhere in the interface — not in headings, labels, buttons, empty states, nav items, or tooltips." AI defaults to using emojis as a shortcut for visual interest (🚀 for a launch section, ✅ for success states, 📊 for analytics). This signals immediately that no designer was involved. Use icons from the defined icon library (Lucide React, strokeWidth 1.5) instead. The only exception is user-generated content that happens to contain emojis — never inject them from the codebase itself.

---

## How to Add Skill-Specific Rules

Beyond the 10 universal rules, add 2–5 rules that are specific to your skill's aesthetic. These should name the single most distinctive decision of your skill and defend it.

Examples:
- linear-modern: "Multi-layer shadows on every card — never a single-layer shadow. Always combine a border highlight + soft diffuse + optional accent glow."
- analytics-dark: "Geist Mono for all numeric cells in data tables — monospaced alignment is critical when values vary in digit count."
- neo-brutalism: "Hard 2–3px solid black borders on every interactive element, no exceptions. No subtle borders, no transparent borders."
- minimalist-monochrome: "Two colors only: #0A0A0A and #FFFFFF. Any color that is not pure black or pure white does not belong here."

---

## Quality Test: Is the Skill Done?

Before committing a skill to the repository, run this test:

**Test 1 — The blind generation test**
Give an AI only `SKILL.md` and ask it to build a generic page for the project type. Look at the output. Does it look like it came from the aesthetic reference products you named in the philosophy, or does it still look generic? If it looks generic, the skill has missing or insufficiently specific rules.

**Test 2 — The WHY removal test**
Remove all WHY comments from a component file. Show just the code to a developer who has not read the skill. Ask them to build a new component in the same style. If they cannot, the WHY comments were not doing enough explanatory work — or the structure/tokens were not explicit enough to be self-evident.

**Test 3 — The 10-rules audit**
For each of the 10 universal rules, check: does the skill address this rule explicitly? Does the rule name the specific AI default it is overriding? If a rule is missing or vague, the AI will fall back to its default for that decision.

**Test 4 — The "before" comparison**
Take the exact same prompt (e.g., "Build me a dashboard overview page") and run it once without the skill and once with it. If the output is not visibly, obviously different, the skill is not doing its job.

---

## `skill.json` Reference

```json
{
  "name": "skill-name",
  "version": "1.0.0",
  "description": "One sentence description matching SKILL.md frontmatter.",
  "category": "dark | light",   // Only these two values. Colorful, bold, playful, luxury etc. go in mood.
  "projectType": "dashboard | saas-website | landing-page | portfolio",
  "projectTypeLabel": "Dashboard | SaaS Website | Landing Page | Portfolio",
  "mood": ["word", "word", "word", "word", "word"],
  "stack": ["react", "tailwind", "recharts", "framer-motion", "lucide-react"],
  "dependencies": {
    "package-name": "^version"
  },
  "devDependencies": {},
  "author": "getdrip",
  "preview": "https://getdrip.dev/skills/skill-name",
  "docs": "https://getdrip.dev/docs/skill-name",
  "components": 6,
  "tags": ["tag1", "tag2", "tag3"],
  "palette": {
    "background": "#hex",
    "foreground": "#hex",
    "accent": "#hex",
    "muted": "#hex",
    "border": "#hex"
  },
  "fonts": {
    "heading": "Font Name",
    "body": "Font Name"
  },
  "signature_traits": [
    "The single most distinctive decision — written as a concrete fact, not a vague adjective.",
    "The second most distinctive decision.",
    "The third most distinctive decision.",
    "The fourth — usually a forbidden pattern that most skills allow.",
    "The fifth — usually a timing or motion decision.",
    "The sixth — a component-level rule.",
    "The seventh — a color or hierarchy rule.",
    "The eighth — a typography rule.",
    "The ninth — a spacing rule.",
    "The tenth — an anti-default rule (what generic AI does that this skill forbids)."
  ]
}
```

**On `signature_traits`:** These appear on the GetDrip website and in CLI output. Write them as concrete facts, not marketing. Bad: "Elegant typography." Good: "Metric numbers always Geist Mono — monospaced digits prevent layout shift on live updates."

---

## Checklist Before Publishing

- [ ] `philosophy.md` written before tokens and components
- [ ] Every hex value in `colors.md` has a rule defining when it is used and when it is not
- [ ] Typography scale includes the hierarchy ratio and it is explicitly enforced
- [ ] Spacing file defines at least 3 density tiers and assigns elements to each
- [ ] Motion file lists what to animate AND what to never animate
- [ ] Every component file has an anatomy diagram, WHY comments, and a skeleton state
- [ ] SKILL.md includes all 11 universal anti-slop rules, adapted to this skill
- [ ] SKILL.md includes at least 2 skill-specific rules for the most distinctive decisions
- [ ] The "never override" list in SKILL.md contains the 3–5 foundational decisions
- [ ] `skill.json` has 8–10 `signature_traits` written as concrete facts
- [ ] Blind generation test passed
- [ ] 10-rules audit passed
- [ ] Before/after comparison shows obvious difference
