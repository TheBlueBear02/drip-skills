// CLAY PREMIUM SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges are small clay pills — 4-layer shadow stack, super-rounded, candy colors.
// They float slightly above the lavender canvas like gummy labels.

const variants = {
  default: { bg: "#FFFFFF", text: "#635F69", shadow: "0 2px 4px rgba(99,95,105,0.08), 0 4px 8px rgba(99,95,105,0.06), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 0 1px rgba(99,95,105,0.06)" },
  pink:    { bg: "linear-gradient(135deg, #FF6B9D, #FF8FAB)", text: "#FFFFFF", shadow: "0 4px 12px rgba(255,107,157,0.3), 0 2px 4px rgba(255,107,157,0.2), inset 0 1px 0 rgba(255,255,255,0.3), 0 0 0 1px rgba(255,107,157,0.2)" },
  purple:  { bg: "linear-gradient(135deg, #9B59B6, #BB8FCE)", text: "#FFFFFF", shadow: "0 4px 12px rgba(155,89,182,0.3), 0 2px 4px rgba(155,89,182,0.2), inset 0 1px 0 rgba(255,255,255,0.3), 0 0 0 1px rgba(155,89,182,0.2)" },
};

export function Badge({ children, variant = "default" }) {
  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 14px",
      fontSize: 12,
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 800,
      color: v.text,
      background: v.bg,
      borderRadius: 9999,
      boxShadow: v.shadow,
      whiteSpace: "nowrap",
      userSelect: "none",
    }}>
      {children}
    </span>
  );
}
