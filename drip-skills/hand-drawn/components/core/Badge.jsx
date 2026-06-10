// HAND-DRAWN SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges look like sticky-note labels — wobbly radius, hard shadow, slight rotation.
// Kalam font at small scale mimics hand-written tags on a cork board.

const WOBBLY = "255px 15px 225px 15px / 15px 225px 15px 255px";

const variants = {
  default: { bg: "#fff9c4", text: "#2d2d2d", border: "2px solid #2d2d2d" },
  accent:  { bg: "#ff4d4d", text: "#fdfbf7", border: "2px solid #2d2d2d" },
  blue:    { bg: "#2d5da1", text: "#fdfbf7", border: "2px solid #2d2d2d" },
};

export function Badge({ children, variant = "default", rotate = 2 }) {
  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      fontSize: 13,
      fontFamily: '"Kalam", cursive',
      fontWeight: 700,
      color: v.text,
      background: v.bg,
      borderRadius: WOBBLY,
      border: v.border,
      boxShadow: "3px 3px 0px 0px #2d2d2d",
      transform: `rotate(${rotate}deg)`,
      whiteSpace: "nowrap",
      userSelect: "none",
    }}>
      {children}
    </span>
  );
}
