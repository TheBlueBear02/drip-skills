// ART DECO SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges are ornamental labels — uppercase Marcellus, gold border, zero radius.
// They glow on active states like backlit signage, never drop-shadow.

const variants = {
  default: { bg: "#141414", text: "#F2F0E4", border: "rgba(212,175,55,0.3)", glow: "none" },
  gold:    { bg: "rgba(212,175,55,0.1)", text: "#D4AF37", border: "#D4AF37", glow: "0 0 12px rgba(212,175,55,0.25)" },
  muted:   { bg: "transparent", text: "#888888", border: "rgba(136,136,136,0.4)", glow: "none" },
};

export function Badge({ children, variant = "default" }) {
  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 14px",
      fontSize: 10,
      fontFamily: '"Marcellus", serif',
      fontWeight: 400,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: v.text,
      background: v.bg,
      borderRadius: 0,
      border: `1px solid ${v.border}`,
      boxShadow: v.glow,
      whiteSpace: "nowrap",
      userSelect: "none",
    }}>
      {children}
    </span>
  );
}
