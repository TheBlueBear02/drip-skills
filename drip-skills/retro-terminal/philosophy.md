# PHILOSOPHY — RETRO TERMINAL

## The Reference World

Imagine a room in 1983. A DEC VT100 terminal sits on a metal desk.
The room is dark. The screen glows green — not because green was chosen
from a palette, but because that's what phosphor does.

Every design decision in this skill traces back to that image.
Not as nostalgia. As a complete aesthetic logic that happens to be beautiful.

---

## Core Principles

### 1. The Screen Is a Grid
A monospace font means every character occupies exactly the same width.
This is not a limitation — it is the foundation of the entire spatial system.
All layouts, all alignment, all composition respects the invisible character grid.
Things line up because they MUST line up. That precision is the aesthetic.

### 2. Luminosity Over Color
This is not a dark theme with colorful accents.
It is a single-color luminous system — one phosphor color, many brightness levels.
Primary text glows. Secondary text dimms. Disabled text barely exists.
The palette is monochromatic with intent: `primary → dim → muted → void`.

### 3. Response Is Character
In a real terminal, the screen responds to you immediately and visibly.
Cursor blinks. Text types. Commands execute line by line.
Every interaction in this skill should feel ACTIVE and ALIVE.
Hover states are not optional polish — they are the interface speaking back.

### 4. Structure Is Exposed
There is no chrome. No decoration that doesn't serve structure.
Borders define regions because that's how terminals delineated areas.
Box-drawing characters (`┌─┐│└─┘`) are used as intentional decorative language.
Nothing is rounded. Everything is rectilinear. Grids and edges everywhere.

### 5. The Glow Is Real
Phosphor screens don't have shadows — they have glow.
`box-shadow` in this system is always outward luminosity, never depth.
Text glow (`text-shadow`) should be used on primary headings.
The glow intensity communicates hierarchy: more important = more glow.

---

## Visual References
- DEC VT100 / VT220 terminals
- IBM PC DOS command prompt
- Matrix terminal rain (the abstracted idea, not the cliché)
- Fallout terminal UI (the game's pip-boy and terminal interfaces)
- Wargames (1983 film) computer interfaces
- Hacker aesthetic — not the Hollywood version, the real one

---

## What Breaks This Aesthetic (Do Not Do These)

| ❌ WRONG | ✓ RIGHT |
|---|---|
| Any border-radius | Sharp 0px corners always |
| White or gray text | Phosphor green (or dim variants) |
| Sans-serif or serif fonts | Monospace only |
| Smooth font rendering | `-webkit-font-smoothing: none` |
| Drop shadows (depth) | Glow effects (luminosity) |
| Colorful UI accents | Amber or cyan as secondary only |
| Gradient backgrounds | Flat near-black `#080808` |
| Hover opacity fades | Color/glow transitions only |
| Icons as SVGs without terminal feel | ASCII / unicode symbols preferred |
| CSS `transition: all` | Specific targeted transitions |

---

## Tone of Copy & Labels

Navigation labels, button text, and system messages should feel like commands
or system output — not marketing language.

- Buttons say `$ CONNECT` not "Get Started"
- Errors say `ERR: CONNECTION_REFUSED` not "Something went wrong"
- Empty states say `> NO RESULTS FOUND — 0 RECORDS` not "Nothing here yet"
- Loading says `INITIALIZING...` not "Loading..."

This is optional for user-facing content copy, but mandatory for all UI labels,
status indicators, and system messages.
