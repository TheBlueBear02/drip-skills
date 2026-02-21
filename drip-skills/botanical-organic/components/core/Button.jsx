// BOTANICAL ORGANIC SKILL — Button.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Buttons are pill-shaped (rounded-full) — organic, soft, inviting.
// No sharp corners anywhere. The primary button shifts from forest green to
// terracotta on hover — a warm, natural color transition, not a brightness change.
// Transitions are 300ms ease-out — fast enough to feel responsive, slow enough to feel graceful.
// Font is Source Sans 3 medium — never uppercase, never heavy.

import { useState } from "react";

const C = {
  bg:          "#F9F8F4",
  fg:          "#2D3A31",
  primary:     "#8C9A84",
  secondary:   "#DCCFC2",
  border:      "#E6E2DA",
  interactive: "#C27B66",
};

const VARIANTS = {
  primary: {
    bg:      "#2D3A31",
    color:   "#F9F8F4",
    border:  "none",
    bgHover: "#C27B66",
    shadow:  "0 10px 15px rgba(45,58,49,0.10)",
  },
  sage: {
    bg:      "#8C9A84",
    color:   "#F9F8F4",
    border:  "none",
    bgHover: "#6B7D63",
    shadow:  "0 10px 15px rgba(45,58,49,0.08)",
  },
  secondary: {
    bg:      "transparent",
    color:   "#8C9A84",
    border:  "1px solid #8C9A84",
    bgHover: "#F2F0EB",
    shadow:  "none",
  },
  outline: {
    bg:      "transparent",
    color:   "#2D3A31",
    border:  "1px solid #E6E2DA",
    bgHover: "#F2F0EB",
    shadow:  "none",
  },
  ghost: {
    bg:      "transparent",
    color:   "#2D3A31",
    border:  "none",
    bgHover: "rgba(140,154,132,0.12)",
    shadow:  "none",
  },
};

const SIZES = {
  sm: { height: 40, padding: "0 20px", fontSize: 13 },
  md: { height: 48, padding: "0 28px", fontSize: 14 },
  lg: { height: 56, padding: "0 36px", fontSize: 15 },
  xl: { height: 64, padding: "0 44px", fontSize: 16 },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  onClick,
}) {
  const [hov, setHov] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHov(true)}
      onMouseLeave={() => setHov(false)}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height: s.height,
        padding: s.padding,
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
        fontWeight: 500,
        fontSize: s.fontSize,
        letterSpacing: "0.04em",
        borderRadius: 9999,
        border: v.border || "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        outline: "none",
        width: fullWidth ? "100%" : undefined,
        background: hov ? v.bgHover : v.bg,
        color: v.color,
        boxShadow: hov ? "0 16px 24px rgba(45,58,49,0.14)" : v.shadow,
        transform: hov ? "translateY(-1px)" : "none",
        transition: "all 300ms ease-out",
      }}
    >
      {Icon && iconPosition === "left"  && <Icon size={s.fontSize} strokeWidth={1.5} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={s.fontSize} strokeWidth={1.5} />}
    </button>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Button>Get Started</Button>
// <Button variant="secondary">Learn More</Button>
// <Button variant="outline" icon={ArrowRight}>View Details</Button>
// <Button variant="sage" size="lg">Explore Collection</Button>
// <Button variant="ghost">Cancel</Button>
