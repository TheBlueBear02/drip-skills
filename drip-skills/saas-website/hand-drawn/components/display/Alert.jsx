// HAND-DRAWN SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts look like annotated sticky notes — wobbly borders, hard shadows, marker colors.
// Friendly copy tone — "Heads up!" not "Error 400".

import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const WOBBLY = "15px 225px 15px 255px / 255px 15px 225px 15px";

const variants = {
  info:    { bg: "#fdfbf7", border: "2px dashed #2d5da1", text: "#2d2d2d", icon: Info, iconColor: "#2d5da1" },
  success: { bg: "#fdfbf7", border: "2px solid #2d2d2d", text: "#2d2d2d", icon: CheckCircle, iconColor: "#2d2d2d" },
  warning: { bg: "#fff9c4", border: "2px solid #2d2d2d", text: "#2d2d2d", icon: AlertTriangle, iconColor: "#2d2d2d" },
  error:   { bg: "#ff4d4d", border: "2px solid #2d2d2d", text: "#fdfbf7", icon: XCircle, iconColor: "#fdfbf7" },
};

export function Alert({ type = "info", title, children }) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div style={{
      display: "flex",
      gap: 12,
      padding: "16px 20px",
      background: v.bg,
      borderRadius: WOBBLY,
      border: v.border,
      boxShadow: "4px 4px 0px 0px #2d2d2d",
      fontFamily: '"Patrick Hand", cursive',
      transform: "rotate(-1deg)",
    }}>
      <Icon size={20} strokeWidth={2.5} color={v.iconColor} style={{ flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontSize: 16, fontWeight: 700, color: v.text,
            fontFamily: '"Kalam", cursive', marginBottom: children ? 4 : 0,
          }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontSize: 15, color: v.text, lineHeight: 1.5 }}>{children}</div>
        )}
      </div>
    </div>
  );
}
