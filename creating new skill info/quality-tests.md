# Quality Tests — The 5 Laws

This document defines how to manually validate skills before publishing.
Run `node scripts/validate-skill.mjs` first for structural compliance, then run these behavioral tests.

---

## Law 1 — The Extrapolation Test

**Goal:** Agent builds unknown components that still feel native.

**Procedure:**
1. Read only Tier A files from `SKILL.md` (philosophy + 2 defining token files).
2. Run all 3 prompts in `meta/quality-prompts.md` for the skill.
3. Score each output against the pass criteria in that file.

**Pass:** All 3 components feel unmistakably on-brand. None could belong to another skill.

**Fail:** Any component looks generic, uses wrong shadows, wrong fonts, or wrong motion.

---

## Law 2 — The Solo Element Test

**Goal:** Single components are instantly recognizable.

**Procedure:**
1. Screenshot any one component (Button, Card, or Badge) in isolation.
2. Show to someone unfamiliar with the skill name.
3. Ask: "Which design system does this belong to?"

**Pass:** They identify the correct skill or describe its signature trait (pop shadow, gold glow, ink shadow, etc.).

**Fail:** They say "generic SaaS" or name a different skill.

---

## Law 3 — The Non-Negotiables Test

**Goal:** Breaking rules produces obviously wrong output.

**Procedure:**
1. Open `SKILL.md` → "WHAT YOU MUST NEVER OVERRIDE".
2. Pick the top 3 rules.
3. Deliberately break each one in a test component.
4. Compare broken vs correct side by side.

**Pass:** Each broken version looks clearly wrong to anyone, not just designers.

**Fail:** Breaking a rule still "looks fine" — the rule is too vague. Rewrite with hex values, px offsets, or named patterns.

---

## Law 4 — The New Developer Test

**Goal:** Philosophy + SKILL.md enable prediction before seeing code.

**Procedure:**
1. Give a new reader only `SKILL.md` (Tier A sections) and `philosophy.md`.
2. Ask them to describe what a pricing page would look like — colors, shadows, typography, motion.
3. Then show `examples/LandingPage.jsx`.

**Pass:** Their prediction matches the example on signature traits (not exact layout).

**Fail:** They predict generic UI or a different skill's traits.

---

## Law 5 — The Drift Test

**Goal:** Design language persists without re-reading the skill.

**Procedure:**
1. Build 5 components using the skill (mix of library + extrapolated).
2. Wait at least 24 hours (or switch to a fresh agent session).
3. Build a 6th component WITHOUT re-reading any skill files.

**Pass:** The 6th component is visually consistent with the first 5.

**Fail:** Shadows, fonts, motion, or colors drift toward generic defaults.

---

## Automated Structural Validation

```bash
# Validate all production skills
node scripts/validate-skill.mjs

# Validate a single first-party skill
node scripts/validate-skill.mjs drip-skills/saas-website/linear-modern

# Validate WIP generated skill (warnings only for quality-prompts)
node scripts/validate-skill.mjs drip-skills/generated/saas-website/luxury-bold
```

---

## Promotion Checklist (generated → production)

Before moving a skill out of `drip-skills/generated/{projectType}/` to `drip-skills/{projectType}/`:

- [ ] Passes `validate-skill.mjs` with zero errors
- [ ] Passes all 5 laws manually
- [ ] All 3 quality-prompts pass criteria met
- [ ] Added to `registry.json`
- [ ] `SKILL.md` has production `description` and no `disable-model-invocation` (unless intentional)
- [ ] No markdown fences wrapping `.jsx` source files
- [ ] Human review of `examples/LandingPage.jsx` against `examples/README.md` checklist
