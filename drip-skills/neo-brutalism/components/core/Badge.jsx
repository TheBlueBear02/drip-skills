// NEO-BRUTALISM SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges are sticker labels — border-4, uppercase, rotated slightly, hard shadow.
// They look pinned to the surface like price tags on a zine.

const variants = {
  default:   { bg: "#FFFFFF", text: "#000000", border: "4px solid #000", shadow: "4px 4px 0px 0px #000" },
  primary:   { bg: "#FF6B6B", text: "#000000", border: "4px solid #000", shadow: "4px 4px 0px 0px #000" },
  secondary: { bg: "#FFD93D", text: "#000000", border: "4px solid #000", shadow: "4px 4px 0px 0px #000" },
  violet:    { bg: "#C4B5FD", text: "#000000", border: "4px solid #000", shadow: "4px 4px 0px 0px #000" },
};

export function Badge({ children, variant = "default", rotate = -3 }) {
  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 14px",
      fontSize: 11,
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 900,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: v.text,
      background: v.bg,
      borderRadius: 0,
      border: v.border,
      boxShadow: v.shadow,
      transform: `rotate(${rotate}deg)`,
      whiteSpace: "nowrap",
      userSelect: "none",
    }}>
      {children}
    </span>
  );
}
