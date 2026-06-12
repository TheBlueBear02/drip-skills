// MINIMALIST MONOCHROME SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts use structural borders and inversion — no color, no shadow, no radius.
// Typography carries all emphasis through scale and weight.

import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export function Alert({ type = "info", title, children }) {
  const icons = { info: Info, success: CheckCircle, warning: AlertTriangle, error: XCircle };
  const Icon = icons[type] || Info;
  const inverted = type === "error";

  return (
    <div style={{
      display: "flex",
      gap: 16,
      padding: "24px 28px",
      background: inverted ? "#000000" : "#FFFFFF",
      borderRadius: 0,
      border: "3px solid #000000",
      fontFamily: '"Source Serif 4", serif',
    }}>
      <Icon
        size={20}
        strokeWidth={1}
        color={inverted ? "#FFFFFF" : "#000000"}
        style={{ flexShrink: 0, marginTop: 2 }}
      />
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontSize: 14, fontWeight: 600, color: inverted ? "#FFFFFF" : "#000000",
            fontFamily: '"Playfair Display", serif',
            letterSpacing: "0.05em", textTransform: "uppercase",
            marginBottom: children ? 8 : 0,
          }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{
            fontSize: 15, color: inverted ? "#FFFFFF" : "#525252", lineHeight: 1.7,
          }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
