// BOTANICAL ORGANIC SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges are soft organic labels — pill shape, sage tones, thin borders.
// They whisper status rather than shout — fitting the serene aesthetic.

const variants = {
  default: { bg: "#F9F8F4", text: "#2D3A31", border: "#E6E2DA" },
  sage:    { bg: "#8C9A84", text: "#FFFFFF", border: "#8C9A84" },
  terra:   { bg: "rgba(194,123,102,0.15)", text: "#C27B66", border: "rgba(194,123,102,0.3)" },
};

export function Badge({ children, variant = "default" }) {
  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 14px",
      fontSize: 11,
      fontFamily: '"Source Sans 3", sans-serif',
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: v.text,
      background: v.bg,
      borderRadius: 9999,
      border: `1px solid ${v.border}`,
      whiteSpace: "nowrap",
      userSelect: "none",
    }}>
      {children}
    </span>
  );
}
