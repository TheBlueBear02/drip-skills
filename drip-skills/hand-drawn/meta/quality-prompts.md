# Quality Test Prompts — Hand Drawn

Use these prompts to run **Law 1 (Extrapolation Test)** before publishing or after major changes.

---

## Prompt 1: Modal Dialog

> Build a sketchy "Delete this note?" modal that looks like a sticky note on a cork board.

**Pass criteria:**
- Wobbly multi-value border-radius — not rounded-lg
- Hard shadow `4px 4px 0px 0px #2d2d2d` with zero blur
- Kalam heading + Patrick Hand body
- Slight rotation (-1 to 3deg) at rest

---

## Prompt 2: Kanban Board

> Build a simple 3-column kanban board (To Do, Doing, Done) with draggable-style cards.

**Pass criteria:**
- Dot-grid paper texture on background
- Each card has unique wobbly radius variant
- Dashed borders on secondary columns, solid on primary cards
- Press-flat button mechanic on any CTAs

---

## Prompt 3: Comment Thread

> Build a comment thread with avatar, username, timestamp, and reply button.

**Pass criteria:**
- Handwritten fonts throughout — no system sans
- Hard offset shadows on comment cards
- Warm paper `#fdfbf7` background
- Optional tape or tack decoration on featured comment
