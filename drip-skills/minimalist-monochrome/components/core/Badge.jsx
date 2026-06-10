// MINIMALIST MONOCHROME SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges are typographic labels — zero radius, hairline borders, Playfair Display.
// No color, no shadow — structure through line weight and inversion only.

const variants = {
  default: { bg: "#FFFFFF", text: "#000000", border: "1px solid #000000" },
  inverted: { bg: "#000000", text: "#FFFFFF", border: "1px solid #000000" },
  muted:   { bg: "#FFFFFF", text: "#525252", border: "1px solid #E5E5E5" },
};

export function Badge({ children, variant = "default" }) {
  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      fontSize: 10,
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: v.text,
      background: v.bg,
      borderRadius: 0,
      border: v.border,
      whiteSpace: "nowrap",
      userSelect: "none",
    }}>
      {children}
    </span>
  );
}
