# Quality Test Prompts — Retro Terminal

Use these prompts to run **Law 1 (Extrapolation Test)** before publishing or after major changes.

---

## Prompt 1: Modal Dialog

> Build a system confirmation dialog styled as a terminal prompt: `[Y/N] Confirm deletion?`

**Pass criteria:**
- Zero border-radius everywhere
- Phosphor green `#00FF41` text with glow
- JetBrains Mono monospace only
- At least one blinking cursor element

---

## Prompt 2: Process Monitor

> Build a live process monitor table showing PID, name, CPU%, and status.

**Pass criteria:**
- Status badges as uppercase machine codes with glow on active
- CRT scanline aesthetic maintained
- No white or gray text — phosphor color only
- Grid-aligned monospace columns

---

## Prompt 3: Command Palette

> Build a command palette overlay with search input and filtered command list.

**Pass criteria:**
- Typewriter or terminal cursor animation on input
- Box-drawing border decorations on container
- Hover states glow brighter — terminals respond
- Map colors through CSS variables — not Tailwind defaults
