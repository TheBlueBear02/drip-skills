# RESPONSIVE — PATTERNS

## Core Principle: Stack, Don't Squish

On small screens, components stack vertically. They never squish horizontally.
A 3-column stat grid becomes a 2-column grid becomes a 1-column list.
Navigation collapses to a hamburger menu (but the menu itself is styled as a terminal panel).

---

## Navigation — Mobile

On mobile, the Navbar hides all links. A menu button appears instead.
When tapped, a full-screen terminal panel slides in from the left with all links.

```jsx
// Responsive Navbar pattern (Tailwind classes on wrapper):
// - Links: hidden on mobile → `hidden md:flex`
// - CTA: hidden on mobile → `hidden sm:block`
// - Menu button: visible on mobile → `flex md:hidden`
```

The mobile menu panel style:
```css
position: fixed;
inset: 0;
background: #080808;
border-right: 1px solid #1a2e1a;
z-index: 200;
padding: 24px;
```

---

## Hero Section — Mobile

On mobile:
- Heading size drops: `clamp(28px, 8vw, 64px)`
- Boot text is hidden (too much content for small screens)
- CTA buttons stack vertically with `flex-direction: column`
- Max width on the subtitle paragraph becomes 100%

---

## Stat Row — Mobile

4 stats on mobile becomes a 2×2 grid:
```
┌──────────┬──────────┐
│  STAT 1  │  STAT 2  │
├──────────┼──────────┤
│  STAT 3  │  STAT 4  │
└──────────┴──────────┘
```

---

## Card Grid — Mobile

3-column grid collapses to single column:
```jsx
// Tailwind:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-terminal-border"
```

---

## Sidebar — Mobile

The `AppShell` sidebar is hidden on mobile. Replace with a top-level tab bar:
```
┌────────────────────────────────┐
│  ⬡  ◈  ◻  ◎  ◇              │  ← icon-only tab bar at top
└────────────────────────────────┘
```
Each tab is 48px wide, centered icon only, with the active state using
the left-border → top-border indicator pattern.

---

## Typography — Mobile Adjustments

| Role | Desktop | Mobile |
|---|---|---|
| Display | 64px | `clamp(32px, 8vw, 48px)` |
| Heading-1 | 48px | `clamp(28px, 7vw, 40px)` |
| Heading-2 | 32px | `clamp(22px, 5vw, 28px)` |
| Body | 13px | 13px (unchanged) |
| Label | 11px | 10px |

---

## Touch Targets

All interactive elements must have a minimum touch target of 44×44px on mobile,
even if the visible element is smaller. Use padding to extend the tap area.

```css
/* Extend touch target without changing visual size */
position: relative;
padding: 12px;
margin: -12px;
```

---

## The CRT Overlay on Mobile

The CRT scanline and vignette effects remain on mobile — they are part of the
core identity and should not be removed for performance reasons unless the
device's refresh rate makes them visually problematic.
