// NEO-BRUTALISM SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts are loud system announcements — thick borders, hard shadows, uppercase.
// Each type uses a high-saturation background block on cream canvas.

import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const variants = {
  info:    { bg: "#C4B5FD", text: "#000000", icon: Info },
  success: { bg: "#FFD93D", text: "#000000", icon: CheckCircle },
  warning: { bg: "#FFD93D", text: "#000000", icon: AlertTriangle },
  error:   { bg: "#FF6B6B", text: "#000000", icon: XCircle },
};

export function Alert({ type = "info", title, children }) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div style={{
      display: "flex",
      gap: 14,
      padding: "16px 20px",
      background: v.bg,
      borderRadius: 0,
      border: "4px solid #000000",
      boxShadow: "8px 8px 0px 0px #000000",
      fontFamily: '"Space Grotesk", sans-serif',
    }}>
      <Icon size={20} strokeWidth={2.5} color="#000000" style={{ flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontSize: 14, fontWeight: 900, color: v.text,
            textTransform: "uppercase", letterSpacing: "0.05em",
            marginBottom: children ? 6 : 0,
          }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontSize: 14, fontWeight: 700, color: v.text, lineHeight: 1.5 }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
