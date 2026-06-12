// LINEAR MODERN SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts sit on glass surfaces with multi-layer inset borders and soft accent glows.
// Icons use thin Lucide strokes. No hard pop shadows — depth comes from layering.

import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

const variants = {
  info:    { bg: "rgba(94,106,210,0.08)", border: "rgba(94,106,210,0.2)", text: "#EDEDEF", icon: Info, iconColor: "#5E6AD2" },
  success: { bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)", text: "#EDEDEF", icon: CheckCircle, iconColor: "#22C55E" },
  warning: { bg: "rgba(234,179,8,0.08)", border: "rgba(234,179,8,0.2)", text: "#EDEDEF", icon: AlertTriangle, iconColor: "#EAB308" },
  error:   { bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", text: "#EDEDEF", icon: XCircle, iconColor: "#EF4444" },
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
      borderRadius: 10,
      border: `1px solid ${v.border}`,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 16px rgba(0,0,0,0.3)",
      fontFamily: '"Inter", sans-serif',
    }}>
      <Icon size={18} strokeWidth={1.5} color={v.iconColor} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontSize: 14, fontWeight: 600, color: v.text, marginBottom: children ? 4 : 0 }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontSize: 13, color: "#8A8F98", lineHeight: 1.6 }}>{children}</div>
        )}
      </div>
    </div>
  );
}
