# GetDrip Skill Creation Prompt

Copy everything between the horizontal rules and use it as your prompt.
Attach the UI screenshots and both guide files alongside it.

**Files to attach:**
- `getdrip-skill-creation-guide.md`
- `getdrip-screenshot-to-skill-guide.md`
- All UI screenshots you want the skill based on

---

You are creating a GetDrip design skill. GetDrip is a CLI tool (`npx getdrip add <skill-name>`) that installs a design system into a React project so AI coding tools produce professional UI instead of generic AI-generated output.

I have attached:
1. `getdrip-skill-creation-guide.md` — defines what every skill must contain, the file structure, and the 11 universal anti-slop rules
2. `getdrip-screenshot-to-skill-guide.md` — defines how to analyze UI screenshots and extract design decisions
3. One or more UI screenshots that this skill should be based on

Your job is to analyze the screenshots using the 9-step process in `getdrip-screenshot-to-skill-guide.md`, then produce a complete skill using the structure and rules in `getdrip-skill-creation-guide.md`.

---

## Instructions

**Read both guide files in full before doing anything else.**

Then follow this process:

### Phase 1 — Screenshot Analysis

Work through all 9 steps from `getdrip-screenshot-to-skill-guide.md` in order. For each step, write a short analysis block before moving on. Do not skip steps and do not merge them.

Steps:
1. Background & surfaces
2. Text colors & sizes
3. Accent & semantic color
4. Spacing & layout
5. Component anatomy
6. Typography details
7. Icons & decorative elements (especially what is ABSENT)
8. Interactive states
9. The distinctive decisions — what would a generic AI do differently here?

For Step 9, go through the "what's absent" checklist from the guide and explicitly mark each item present or absent. Every absent item becomes a NEVER rule.

If something is not visible or readable in the screenshots, mark it `[INFER]` and state the decision you will make and why.

### Phase 2 — Skill Name & Project Type

Before writing files, state:
- **Skill name:** a hyphenated lowercase name that describes the aesthetic (not the project type). Examples: `glass-command`, `paper-ledger`, `warm-minimal`. Do not use generic names like `dark-theme` or `clean-ui`.
- **Project type:** `dashboard`, `saas-website`, `landing-page`, or `portfolio`
- **Category:** `dark` or `light` only
- **Mood tags:** 4–6 words that describe the feel. This is where personality words go (colorful, playful, bold, luxury, etc.)
- **3 aesthetic references:** real products or designers whose work shares the same DNA

### Phase 3 — Write the Skill Files

Produce every file listed below. Do not skip any. Do not merge files.

Output each file with its full path as a header, followed by the complete file content.

**Required files:**

```
[skill-name]/skill.json
[skill-name]/SKILL.md
[skill-name]/philosophy.md
[skill-name]/tokens/colors.md
[skill-name]/tokens/typography.md
[skill-name]/tokens/spacing.md
[skill-name]/tokens/motion.md
[skill-name]/components/[primary-component].md
[skill-name]/components/[navigation-component].md
[skill-name]/components/[data-component].md
[skill-name]/integration/setup.md
```

Replace `[skill-name]` with the name from Phase 2.
Replace the component file names with the actual component types for this project type (e.g. `kpi-card.md`, `sidebar.md`, `data-table.md` for dashboards; `hero.md`, `navbar.md`, `feature-card.md` for landing pages).

---

## Rules for Writing Each File

**`philosophy.md`**
Write this first, before any tokens. Explain *why* the design looks the way it does — not what it looks like. Name the core principle. Name the 2–3 "enemies" of this aesthetic (things that make a UI look generic). Reference the real products whose DNA matches. Do not use marketing language. Do not say "elegant" or "clean" or "modern." Say specific things.

**`tokens/colors.md`**
Every color value must have a rule next to it defining when it is used and when it is not. The accent color section must explicitly list what the accent color is NEVER used for. The semantic colors section must state that these colors appear ONLY for their designated meaning.

**`tokens/typography.md`**
State the hierarchy ratio explicitly (e.g. 4:1). Name the forbidden typography choices — what would an AI default to that this skill overrides. Include number formatting rules.

**`tokens/spacing.md`**
Name at least 3 density tiers. Assign specific elements to each tier. Include exact pixel values for the primary layout containers.

**`tokens/motion.md`**
Include an explicit list of what to animate and what to NEVER animate. For dashboards: table sorts and filter changes are never animated. For landing pages: scroll-triggered effects are a decision that must be explicitly made.

**Component files**
Every component file must include:
- A plain-text anatomy diagram showing the exact visual order of elements
- Working JSX with `/* WHY: ... */` comments on every non-obvious decision
- A skeleton loading state that matches the exact dimensions of the loaded component
- A "Common mistakes to avoid" section with at least 4 `❌` rules, each explaining why the pattern is wrong

**`SKILL.md`**
Write this last. It must include all 11 universal anti-slop rules from `getdrip-skill-creation-guide.md`, adapted to this specific aesthetic. Add at least 3 skill-specific rules for the most distinctive decisions you identified in Step 9. The "never override" list must contain the decisions that, if changed, would make the output no longer belong to this skill.

**`skill.json`**
`signature_traits` must have 8–10 entries. Each must be a concrete fact, not an adjective. Bad: `"Premium feel"`. Good: `"Card shadows use three layers: border highlight + soft diffuse + optional glow — never single-layer"`.

---

## Quality Checks Before Finishing

Run these before outputting anything:

1. **Anti-slop rule coverage:** Confirm each of the 11 universal rules from the guide is present in SKILL.md, adapted to this aesthetic.

2. **The "would AI break this?" test:** For each rule in the skill-specific anti-generic section, ask: would Claude or GPT-4 break this rule if given only a generic prompt with no screenshot? If the answer is no, the rule is not important enough to include.

3. **The absence check:** Confirm that everything marked absent in Step 9 appears as a NEVER rule somewhere in the skill files.

4. **No emojis:** Confirm no component file, SKILL.md, or philosophy.md suggests or allows emojis in any UI element.

5. **No `[INFER]` placeholders remaining:** Every inferred decision must be resolved to an explicit value or rule before the skill is complete.

---

## Output Format

Start with the Phase 1 analysis (9 steps, brief per step).
Then Phase 2 (name, type, category, mood, references).
Then Phase 3 (all files, one after another, each starting with the file path as a heading).

Do not add commentary between files. Do not summarize what you did. Just produce the analysis and then the files.

---
