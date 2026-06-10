// ART DECO SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts use gold-bordered frames on obsidian surfaces with glow accents.
// Typography is uppercase Josefin Sans — system messages as theatre announcements.

import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const variants = {
  info:    { border: "rgba(212,175,55,0.4)", text: "#F2F0E4", icon: Info, glow: "0 0 10px rgba(212,175,55,0.15)" },
  success: { border: "#D4AF37", text: "#D4AF37", icon: CheckCircle, glow: "0 0 15px rgba(212,175,55,0.25)" },
  warning: { border: "#F2E8C4", text: "#F2E8C4", icon: AlertTriangle, glow: "0 0 10px rgba(242,232,196,0.2)" },
  error:   { border: "#D4AF37", text: "#F2F0E4", icon: XCircle, glow: "0 0 15px rgba(212,175,55,0.3)" },
};

export function Alert({ type = "info", title, children }) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div style={{
      display: "flex",
      gap: 16,
      padding: "20px 24px",
      background: "#141414",
      borderRadius: 0,
      border: `1px solid ${v.border}`,
      boxShadow: v.glow,
      fontFamily: '"Josefin Sans", sans-serif',
    }}>
      <Icon size={16} strokeWidth={1} color={v.text} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontSize: 12, fontWeight: 400, color: v.text,
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: children ? 8 : 0,
          }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontSize: 14, color: "#888888", lineHeight: 1.7, fontWeight: 300 }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
