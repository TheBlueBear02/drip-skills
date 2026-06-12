// BOTANICAL ORGANIC SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts use soft rounded containers with diffused green-tinted shadows.
// Copy is gentle and editorial — never clinical error codes.

import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const variants = {
  info:    { bg: "#F9F8F4", border: "#8C9A84", text: "#2D3A31", icon: Info },
  success: { bg: "rgba(140,154,132,0.12)", border: "#8C9A84", text: "#2D3A31", icon: CheckCircle },
  warning: { bg: "rgba(194,123,102,0.1)", border: "#C27B66", text: "#2D3A31", icon: AlertTriangle },
  error:   { bg: "rgba(194,123,102,0.15)", border: "#C27B66", text: "#2D3A31", icon: XCircle },
};

export function Alert({ type = "info", title, children }) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div style={{
      display: "flex",
      gap: 14,
      padding: "20px 24px",
      background: v.bg,
      borderRadius: 24,
      border: `1px solid ${v.border}`,
      boxShadow: "0 8px 32px rgba(45,58,49,0.08)",
      fontFamily: '"Source Sans 3", sans-serif',
    }}>
      <Icon size={18} strokeWidth={1.5} color={v.border} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontSize: 15, fontWeight: 600, color: v.text,
            fontFamily: '"Playfair Display", serif',
            marginBottom: children ? 6 : 0,
          }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontSize: 14, color: "#2D3A31", lineHeight: 1.7, opacity: 0.85 }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
