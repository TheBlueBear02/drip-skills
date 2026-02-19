// RETRO-TERMINAL SKILL — Button.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Terminal buttons are commands waiting to be executed.
// They don't beg for attention with gradients or rounded corners.
// They sit flat, bordered, and precise — until you hover, at which point
// the machine responds: color inverts, glow appears, the interface wakes up.
//
// PRIMARY: Green fill on hover — the terminal "executes" your command.
// SECONDARY: Stays dark, border brightens — a queued action, not a primary one.
// DANGER: Red border and glow — the machine is warning you.

import { useState } from "react";

// Variant styles — each communicates a different command type
const variants = {
  primary: {
    base: {
      background: "transparent",
      border: "1px solid #00FF41",
      color: "#00FF41",
      boxShadow: "0 0 8px #00FF4133",
    },
    hover: {
      background: "#00FF41",
      color: "#080808",
      boxShadow: "0 0 24px #00FF4166",
    },
  },
  secondary: {
    base: {
      background: "transparent",
      border: "1px solid #1a2e1a",
      color: "#00AA2B",
      boxShadow: "none",
    },
    hover: {
      background: "transparent",
      border: "1px solid #00AA2B",
      color: "#00FF41",
      boxShadow: "0 0 8px #00FF4133",
    },
  },
  danger: {
    base: {
      background: "transparent",
      border: "1px solid #FF3333",
      color: "#FF3333",
      boxShadow: "none",
    },
    hover: {
      background: "#FF3333",
      color: "#080808",
      boxShadow: "0 0 16px #FF333366",
    },
  },
  ghost: {
    base: {
      background: "transparent",
      border: "1px solid transparent",
      color: "#4a7a4a",
      boxShadow: "none",
    },
    hover: {
      border: "1px solid #1a2e1a",
      color: "#00FF41",
      boxShadow: "none",
    },
  },
};

const sizes = {
  sm: { padding: "6px 16px",  fontSize: "10px", letterSpacing: "0.15em" },
  md: { padding: "10px 24px", fontSize: "11px", letterSpacing: "0.15em" },
  lg: { padding: "14px 32px", fontSize: "12px", letterSpacing: "0.15em" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  prefix = "$", // Terminal command prefix — set to null to remove
}) {
  const [hovered, setHovered] = useState(false);

  const v = variants[variant];
  const s = sizes[size];

  const style = {
    // Typography — always monospace, always uppercase feel
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 500,
    ...s,

    // Shape — flat, rectilinear, terminal
    // WHY: Border radius is always 0. No exceptions.
    borderRadius: 0,

    // State-driven styles
    ...(hovered && !disabled ? { ...v.base, ...v.hover } : v.base),

    // Disabled state — the terminal goes silent
    ...(disabled ? { opacity: 0.35, cursor: "not-allowed" } : { cursor: "none" }),

    // Transitions — only specific properties, never "all"
    // WHY: `transition: all` can cause unexpected behavior and is imprecise
    transition: "background 150ms, color 150ms, box-shadow 150ms, border-color 150ms",

    // Layout
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    whiteSpace: "nowrap",
    userSelect: "none",

    // Remove default button styles
    border: v.base.border,
    outline: "none",
  };

  return (
    <button
      style={style}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled}
    >
      {/* Terminal command prefix — makes it feel like a shell command */}
      {prefix && !loading && (
        <span style={{ opacity: 0.6, fontWeight: 300 }}>{prefix}</span>
      )}

      {/* Loading state — process running indicator */}
      {loading ? (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ animation: "blink 0.7s step-end infinite" }}>█</span>
          PROCESSING...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Button variant="primary" size="lg">BROWSE SKILLS →</Button>
// <Button variant="secondary">READ DOCS</Button>
// <Button variant="danger" prefix="!">DELETE RECORD</Button>
// <Button variant="ghost" prefix={null}>Cancel</Button>
// <Button loading>SUBMIT</Button>
