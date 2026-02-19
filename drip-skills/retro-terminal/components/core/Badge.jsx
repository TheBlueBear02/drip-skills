// RETRO-TERMINAL SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges are status codes. They communicate machine state — STABLE, BETA,
// ERROR, OFFLINE. They use the same vocabulary as system logs and status monitors.
// The border approach (text + border, no fill) keeps them lightweight.
// Filled variants are used only for highest-priority states.

export function Badge({ children, variant = "default", dot = false }) {
  // Each variant maps to a specific system state — use them semantically
  const variants = {
    default:  { color: "#00AA2B", border: "1px solid #00AA2B",  bg: "transparent" },
    active:   { color: "#00FF41", border: "1px solid #00FF41",  bg: "transparent", glow: "0 0 8px #00FF4133" },
    warning:  { color: "#FFB700", border: "1px solid #FFB700",  bg: "transparent" },
    error:    { color: "#FF3333", border: "1px solid #FF3333",  bg: "transparent" },
    muted:    { color: "#4a7a4a", border: "1px solid #2a4a2a",  bg: "transparent" },
    filled:   { color: "#080808", border: "1px solid #00FF41",  bg: "#00FF41" },
    "filled-red": { color: "#080808", border: "1px solid #FF3333", bg: "#FF3333" },
  };

  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "2px 8px",
      fontSize: 9,
      fontFamily: "'JetBrains Mono', monospace",
      fontWeight: 500,
      letterSpacing: "0.2em",
      borderRadius: 0,      // WHY: Always 0. Badges are data labels, not pills.
      color: v.color,
      border: v.border,
      background: v.bg,
      boxShadow: v.glow || "none",
      whiteSpace: "nowrap",
      userSelect: "none",
    }}>
      {/* Status dot — blinking for active states, solid for stable */}
      {dot && (
        <span style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: v.color,
          flexShrink: 0,
          animation: variant === "active" ? "blink 1.4s step-end infinite" : "none",
        }} />
      )}
      {typeof children === "string" ? children.toUpperCase() : children}
    </span>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Badge variant="active" dot>ONLINE</Badge>
// <Badge variant="warning">BETA</Badge>
// <Badge variant="error" dot>OFFLINE</Badge>
// <Badge variant="muted">DEPRECATED</Badge>
// <Badge variant="filled">STABLE</Badge>
