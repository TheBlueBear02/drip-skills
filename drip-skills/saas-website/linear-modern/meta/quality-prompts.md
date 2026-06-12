# Quality Test Prompts — Linear Modern

Use these prompts to run **Law 1 (Extrapolation Test)** before publishing or after major changes.
Ask an agent to build each component **without re-reading the full token corpus** — only Tier A files + relevant components.

---

## Prompt 1: Modal Dialog

> Build a confirmation modal for deleting a project. Include title, description, cancel and confirm buttons, and a subtle backdrop blur. It must feel native to the linear-modern skill — ambient depth, expo-out transitions, multi-layer shadows.

**Pass criteria:**
- Near-black layered background, not flat `#000000`
- Multi-layer shadow on the modal panel
- Expo-out easing at 200-300ms
- Accent confirm button has glow effect
- No bounce, spring, or linear easing

---

## Prompt 2: Data Table

> Build a settings data table listing team members with name, email, role, and status columns. Include hover row states and a status badge column.

**Pass criteria:**
- Glass-surface row hover with inset border highlight
- Status badges use subtle accent glow, not flat pills
- Monospace or Inter at strokeWidth 1.5 for icons
- Table sits on layered background — not white or flat gray

---

## Prompt 3: Settings Panel

> Build a "Notifications" settings panel with toggle rows for email, push, and SMS alerts. Each row has a label, description, and toggle switch.

**Pass criteria:**
- Toggle uses accent glow when active
- Section uses asymmetric spacing consistent with bento rhythm
- Focus rings use accent at 50% opacity
- No single-layer `box-shadow: 0 2px 4px` anywhere
