# Quality Test Prompts — Minimalist Monochrome

Use these prompts to run **Law 1 (Extrapolation Test)** before publishing or after major changes.

---

## Prompt 1: Modal Dialog

> Build a stark confirmation modal for account deletion. Black and white only.

**Pass criteria:**
- Zero border-radius on all elements
- No shadows — depth from 3px black border only
- Playfair Display uppercase heading
- Hover inversion on buttons

---

## Prompt 2: Article Index

> Build a magazine-style article index with title, date, and category for 5 articles.

**Pass criteria:**
- Oversized Playfair Display titles as typographic objects
- 4px black horizontal rules between entries
- Section texture layer (lines or grid) visible
- No color anywhere — black, white, `#525252` only

---

## Prompt 3: Table of Contents

> Build a sidebar table of contents for a long-form editorial page.

**Pass criteria:**
- Active item uses inversion (black bg, white text)
- JetBrains Mono or Source Serif 4 for page numbers
- Maximum 100ms transitions — instant feel
- Thin icons strokeWidth 1 — never chunky
