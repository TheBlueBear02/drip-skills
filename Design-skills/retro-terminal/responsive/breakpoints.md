# RESPONSIVE — BREAKPOINTS

## Breakpoint System

This skill uses Tailwind's standard breakpoints, extended with semantic names
that map to the terminal aesthetic's spatial logic.

| Name | Min Width | Tailwind Prefix | Description |
|---|---|---|---|
| `mobile` | 0px | (base) | Single column. Stack everything vertically. |
| `sm` | 640px | `sm:` | Still compact. 2-column max. |
| `md` | 768px | `md:` | Tablet. 2–3 columns. Sidebar starts appearing. |
| `lg` | 1024px | `lg:` | Desktop. Full layout. Sidebar always visible. |
| `xl` | 1280px | `xl:` | Wide desktop. Max-width content containers kick in. |

---

## Content Width Behavior

| Breakpoint | Max Content Width | Padding |
|---|---|---|
| Mobile | 100% | `px-5` (20px) |
| sm | 100% | `px-8` (32px) |
| md | 100% | `px-10` (40px) |
| lg+ | 1100px centered | `px-10` (40px) |

```jsx
// Standard content container — use this wrapper on every page section
<div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
```

---

## Grid Breakpoints

| Layout | Mobile | md | lg |
|---|---|---|---|
| Stat row | 2 columns | 2 columns | 4 columns |
| Feature grid | 1 column | 2 columns | 3 columns |
| Skill card grid | 1 column | 2 columns | 3 columns |
| Hero | Stacked | Stacked | Side by side |
| AppShell sidebar | Hidden (hamburger) | Hidden | Visible (220px) |

---

## The 1px Grid Gap Technique — Responsive Notes

When using the grid-gap-1px-background technique on mobile:
- Use `grid-cols-1` on mobile — a single bordered column
- Use `grid-cols-2` on `md:` — 2 bordered columns  
- Use `grid-cols-3` on `lg:` — 3 bordered columns

```jsx
<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: 1,
  background: "#1a2e1a", // border color as background
}}>
  // @media md: gridTemplateColumns: "repeat(2, 1fr)"
  // @media lg: gridTemplateColumns: "repeat(3, 1fr)"
</div>
```

Because this skill uses inline styles for most components (for portability),
responsive behavior is handled either via Tailwind classes on wrapper elements
or via JS-based breakpoint detection. See `responsive/patterns.md` for specifics.
