// BOTANICAL ORGANIC SKILL — Input.jsx + Badge
//
// WHY INPUTS LOOK THIS WAY:
// Inputs use a soft clay background (#F2F0EB) that feels like warm paper.
// Focus state transitions border to sage green — not a harsh blue ring.
// The transition is 300ms ease-out — the border gently blooms.
// Radius is rounded-xl (12px) — soft but not a full pill.
// Labels use Playfair Display to maintain typographic character in forms.

import { useState } from "react";

export function Input({
  label, placeholder = "", value, onChange,
  type = "text", error, hint, required = false,
  disabled = false, size = "md",
}) {
  const [focused, setFocused] = useState(false);
  const heights = { sm: 44, md: 52, lg: 60 };
  const h = heights[size] || heights.md;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "'Source Sans 3', sans-serif" }}>
      {label && (
        <label style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600, fontSize: 15, color: "#2D3A31",
        }}>
          {label}
          {required && <span style={{ color: "#C27B66", marginLeft: 4 }}>*</span>}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          height: h,
          padding: "0 20px",
          fontSize: 16,
          fontFamily: "'Source Sans 3', sans-serif",
          fontWeight: 400,
          color: "#2D3A31",
          background: focused ? "#FFFFFF" : "#F2F0EB",
          border: error
            ? "1px solid #C27B66"
            : focused
            ? "1px solid #8C9A84"
            : "1px solid #E6E2DA",
          borderRadius: 12,
          outline: "none",
          boxShadow: focused
            ? "0 0 0 3px rgba(140,154,132,0.15)"
            : "none",
          transition: "all 300ms ease-out",
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "not-allowed" : "text",
        }}
      />

      {error && (
        <span style={{ fontSize: 13, color: "#C27B66", display: "flex", alignItems: "center", gap: 6 }}>
          {error}
        </span>
      )}
      {hint && !error && (
        <span style={{ fontSize: 13, color: "rgba(45,58,49,0.55)" }}>{hint}</span>
      )}
    </div>
  );
}

export function Textarea({ label, placeholder, value, onChange, rows = 4, error, hint, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {label && (
        <label style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 15, color: "#2D3A31" }}>
          {label}
          {required && <span style={{ color: "#C27B66", marginLeft: 4 }}>*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "16px 20px",
          fontSize: 16,
          fontFamily: "'Source Sans 3', sans-serif",
          color: "#2D3A31",
          background: focused ? "#FFFFFF" : "#F2F0EB",
          border: focused ? "1px solid #8C9A84" : "1px solid #E6E2DA",
          borderRadius: 16,
          outline: "none",
          resize: "vertical",
          boxShadow: focused ? "0 0 0 3px rgba(140,154,132,0.15)" : "none",
          transition: "all 300ms ease-out",
        }}
      />
      {error && <span style={{ fontSize: 13, color: "#C27B66" }}>{error}</span>}
      {hint && !error && <span style={{ fontSize: 13, color: "rgba(45,58,49,0.55)" }}>{hint}</span>}
    </div>
  );
}

// ── BADGE ─────────────────────────────────────────────────────────────────────
// Soft pill badges — organic tags for categories, labels, status.
// Never bold. Never uppercase (that breaks the soft voice).

export function Badge({ children, variant = "sage", size = "md" }) {
  const variants = {
    sage:        { bg: "rgba(140,154,132,0.15)", color: "#4A5E42", border: "1px solid rgba(140,154,132,0.3)" },
    terracotta:  { bg: "rgba(194,123,102,0.12)", color: "#A05540", border: "1px solid rgba(194,123,102,0.25)" },
    clay:        { bg: "#F2F0EB", color: "#2D3A31", border: "1px solid #E6E2DA" },
    dark:        { bg: "#2D3A31", color: "#F9F8F4", border: "none" },
    outline:     { bg: "transparent", color: "#8C9A84", border: "1px solid #8C9A84" },
  };
  const sizes = {
    sm: { padding: "3px 12px",  fontSize: 11 },
    md: { padding: "5px 14px",  fontSize: 13 },
    lg: { padding: "7px 18px",  fontSize: 14 },
  };
  const v = variants[variant] || variants.sage;
  const s = sizes[size] || sizes.md;

  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: s.padding, borderRadius: 9999,
      background: v.bg, color: v.color, border: v.border,
      fontSize: s.fontSize,
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 500, letterSpacing: "0.03em",
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Input label="Your name" placeholder="Jane Smith" required />
// <Input label="Email" type="email" error="Please enter a valid email" />
// <Input label="Website" hint="Include https://" size="lg" />
// <Textarea label="Message" rows={5} placeholder="Tell us about your project..." />
//
// <Badge>Organic</Badge>
// <Badge variant="terracotta">New</Badge>
// <Badge variant="dark" size="lg">Featured</Badge>
