# EXAMPLES — README

These files are your quality benchmark. Before generating any page or layout,
read at least one of these examples in full. They show the skill working as
a complete, cohesive system — not just individual components.

---

## LandingPage.jsx
**The north star example.** A full marketing landing page including:
- Boot sequence hero with typewriter headlines
- Live terminal demo window (animated)
- Stats bar with phosphor numbers
- Skill card grid using the 1px gap technique
- 4-step how-it-works section
- Sticky nav and footer

**What to notice:**
- The staggered `animation-delay` on the boot text lines
- How `flicker` is applied to sections (not everything, just the persistent chrome)
- The 1px background grid technique for the card and stat grids
- The box-drawing characters used as decorative header framing
- How the single blinking element (nav heartbeat dot) anchors the page

---

## Things Every Page Must Have

Before shipping any page built with this skill, verify:

- [ ] At least one blinking element on screen
- [ ] CRT scanlines visible (globals.css imported)
- [ ] Custom cursor active (TerminalCursor mounted at root)
- [ ] All text is phosphor green or its dim/muted variants — no white, no gray
- [ ] No border radius anywhere
- [ ] All fonts are monospace
- [ ] At least one box-drawing decoration (`┌─┐`) or terminal prefix (`>`, `$`, `./`)
- [ ] `-webkit-font-smoothing: none` applied (via globals.css body rule)
- [ ] Hover states exist on all interactive elements
- [ ] The page loads with a visible entrance animation (boot, fadeInUp, or typewriter)
