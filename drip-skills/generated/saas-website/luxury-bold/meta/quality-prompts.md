# Quality Test Prompts — Luxury Bold (WIP)

**Status:** Work in progress. These prompts validate the generated skill before promotion to production.

Use these prompts to run **Law 1 (Extrapolation Test)**. Prefer `minimalist-monochrome` for production editorial work until this skill passes full review.

---

## Prompt 1: Modal Dialog

> Build a bold confirmation modal with neon yellow confirm button on dark background.

**Pass criteria:**
- Zero border-radius on modal and buttons
- Confirm button `#EFFF00` on `#1A1A1A` dark surface
- Bold uppercase headline typography
- No shadows — flat contrast only

---

## Prompt 2: Feature Grid

> Build a 2x2 feature grid with bold headlines and short descriptions.

**Pass criteria:**
- Strict 12-column grid alignment
- Grayscale imagery or no images
- Monochrome base with single neon accent
- 200ms ease-out transitions only

---

## Prompt 3: Navigation Drawer

> Build a slide-in navigation drawer for mobile with 5 menu items.

**Pass criteria:**
- Zero border-radius on drawer and items
- High contrast black/white with neon active indicator
- No decorative patterns or blobs
- Typography-driven hierarchy — no color ramps
