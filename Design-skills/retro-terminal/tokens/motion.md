# TOKENS — MOTION

## Motion Philosophy

Animation in this skill is not decoration — it is character.
A terminal responds to you. Text types. Systems boot. Processes execute.
Motion should always feel like the machine is doing something real.

Never animate things simultaneously. Never animate things instantly.
Sequence matters. The cursor blinks on its own schedule, not yours.

---

## Duration Scale

| Token | Value | Usage |
|---|---|---|
| `duration-instant` | 80ms | Color switches, border color changes |
| `duration-fast` | 150ms | Hover transitions, button states |
| `duration-normal` | 300ms | Component enter/exit, tab switches |
| `duration-slow` | 500ms | Page transitions, panel slides |
| `duration-boot` | 800ms–2000ms | Boot sequences, staggered reveals |

---

## Easing

| Token | Value | Usage |
|---|---|---|
| `ease-terminal` | `steps(1)` | Typewriter, cursor blink — no interpolation |
| `ease-snap` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elements snapping into place |
| `ease-out-hard` | `cubic-bezier(0.0, 0.8, 0.2, 1)` | Panels sliding in |
| `ease-linear` | `linear` | Scanline movement, progress bars |

---

## Keyframe Library

These are the canonical animations for this skill. Use them consistently.

### blink — the heartbeat
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
/* Usage: cursor block, status indicators */
animation: blink 1s step-end infinite;
```

### flicker — CRT instability
```css
@keyframes flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.85; }
  94% { opacity: 1; }
  96% { opacity: 0.92; }
  97% { opacity: 1; }
}
/* Usage: apply to entire sections/nav for ambient CRT feel */
/* Duration: 8s–15s — slow and rare, not distracting */
animation: flicker 10s infinite;
```

### fadeInUp — element entrance
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Usage: staggered content reveals on page load */
animation: fadeInUp 0.4s ease-out both;
animation-delay: calc(var(--i) * 100ms); /* stagger with CSS var */
```

### pulse-border — active window
```css
@keyframes pulse-border {
  0%, 100% { border-color: #00AA2B; box-shadow: 0 0 0px #00FF4133; }
  50%       { border-color: #00FF41; box-shadow: 0 0 14px #00FF4133; }
}
animation: pulse-border 3s ease-in-out infinite;
```

### scandown — CRT scan line
```css
@keyframes scandown {
  from { transform: translateY(-100%); }
  to   { transform: translateY(100vh); }
}
/* Applied to a thin line element that moves down the screen */
```

### boot — system startup fade
```css
@keyframes boot {
  from { opacity: 0; }
  to   { opacity: 1; }
}
animation: boot 0.5s ease-out both;
```

### glitch — error / disturbance
```css
@keyframes glitch {
  0%   { transform: translate(0); }
  20%  { transform: translate(-2px, 1px); }
  40%  { transform: translate(2px, -1px); }
  60%  { transform: translate(-1px, 2px); }
  80%  { transform: translate(1px, -2px); }
  100% { transform: translate(0); }
}
/* Usage: error states, destructive confirmations */
/* Duration: 0.3s, triggered once (not infinite) */
```

---

## Typewriter Pattern

The typewriter effect is one of the most important interaction patterns in this skill.
It must be implemented character-by-character with no CSS animation —
only JS state-driven character appending creates the authentic feel.

```jsx
// See components/core/Typewriter.jsx for the canonical implementation
// Rules:
// - Speed: 35-50ms per character for normal text
// - Speed: 20-30ms for "fast" terminal output
// - Always show a blinking █ cursor during typing
// - Cursor disappears or becomes static when typing is done
// - Stagger multiple lines — next line starts only after previous completes
```

---

## Framer Motion Variants

For components using Framer Motion, use these standard variants:

```js
// Standard element entrance
export const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0, 0.8, 0.2, 1] } }
};

// Staggered container
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Terminal output line (instant, no interpolation)
export const terminalLine = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } }
};
```

---

## What Must Never Be Animated

- Font size (never scale text with animation)
- Border-radius (it's always 0, don't animate it)
- Color with `transition: all` — only transition specific properties
- Layout shifts (no animating `width`, `height` for content containers)
