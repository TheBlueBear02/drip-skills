# Quality Test Prompts — Neo-Brutalism

Use these prompts to run **Law 1 (Extrapolation Test)** before publishing or after major changes.

---

## Prompt 1: Modal Dialog

> Build a loud confirmation modal with "DELETE" and "CANCEL" buttons. It must feel like a sticker pasted on the cream canvas.

**Pass criteria:**
- `border-4 border-black` on modal and buttons
- Hard zero-blur shadow `8px 8px 0px 0px #000`
- DELETE button uses push mechanic on active
- Uppercase Space Grotesk Black text

---

## Prompt 2: Stats Banner

> Build a horizontal stats banner showing 3 metrics (Users, Revenue, Growth) with large numbers.

**Pass criteria:**
- Each stat block has border-4 and hard shadow
- Numbers in Space Grotesk 900 uppercase
- Background has halftone or grid texture — not flat cream
- High-saturation accent color blocks

---

## Prompt 3: Dropdown Menu

> Build a dropdown menu for account actions (Profile, Settings, Logout).

**Pass criteria:**
- Menu items have border-4 and lift on hover
- Zero blur on all shadows
- Cream canvas `#FFFDF5` background
- Mechanical 100-200ms linear transitions
