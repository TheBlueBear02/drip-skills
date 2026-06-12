// LINEAR MODERN SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges are subtle status indicators on dark glass surfaces — not loud pills.
// They use inset borders and soft diffuse glows, never hard pop shadows.
// The accent glow on "active" variants mirrors button glow behavior.

const variants = {
  default:  { bg: "rgba(255,255,255,0.05)", text: "#8A8F98", border: "rgba(255,255,255,0.08)", glow: "none" },
  accent:   { bg: "rgba(94,106,210,0.15)", text: "#A5ADFF", border: "rgba(94,106,210,0.3)", glow: "0 0 12px rgba(94,106,210,0.2)" },
  success:  { bg: "rgba(34,197,94,0.12)", text: "#86EFAC", border: "rgba(34,197,94,0.25)", glow: "0 0 8px rgba(34,197,94,0.15)" },
  warning:  { bg: "rgba(234,179,8,0.12)", text: "#FDE047", border: "rgba(234,179,8,0.25)", glow: "none" },
  error:    { bg: "rgba(239,68,68,0.12)", text: "#FCA5A5", border: "rgba(239,68,68,0.25)", glow: "none" },
};

export function Badge({ children, variant = "default", dot = false }) {
  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      fontSize: 11,
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: "0.02em",
      color: v.text,
      background: v.bg,
      borderRadius: 6,
      border: `1px solid ${v.border}`,
      boxShadow: v.glow,
      whiteSpace: "nowrap",
      userSelect: "none",
    }}>
      {dot && (
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: v.text, flexShrink: 0,
          boxShadow: v.glow !== "none" ? v.glow : "none",
        }} />
      )}
      {children}
    </span>
  );
}
