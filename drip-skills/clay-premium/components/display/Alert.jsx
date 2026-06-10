// CLAY PREMIUM SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts are convex clay panels — 4-layer shadow, rounded-3xl, candy-tinted backgrounds.
// Icons sit in gradient circles matching the clay icon container pattern.

import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const variants = {
  info:    { bg: "#FFFFFF", tint: "#9B59B6", icon: Info },
  success: { bg: "#FFFFFF", tint: "#2ECC71", icon: CheckCircle },
  warning: { bg: "#FFFFFF", tint: "#F39C12", icon: AlertTriangle },
  error:   { bg: "#FFFFFF", tint: "#E74C3C", icon: XCircle },
};

export function Alert({ type = "info", title, children }) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div style={{
      display: "flex",
      gap: 16,
      padding: "20px 24px",
      background: v.bg,
      borderRadius: 24,
      boxShadow: "0 4px 8px rgba(99,95,105,0.06), 0 8px 24px rgba(99,95,105,0.08), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(99,95,105,0.06)",
      fontFamily: '"DM Sans", sans-serif',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 16,
        background: `linear-gradient(135deg, ${v.tint}, ${v.tint}CC)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
      }}>
        <Icon size={18} strokeWidth={2} color="#FFFFFF" />
      </div>
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontSize: 15, fontWeight: 700, color: "#2D2B32",
            fontFamily: '"Nunito", sans-serif', marginBottom: children ? 4 : 0,
          }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontSize: 14, color: "#635F69", lineHeight: 1.6 }}>{children}</div>
        )}
      </div>
    </div>
  );
}
