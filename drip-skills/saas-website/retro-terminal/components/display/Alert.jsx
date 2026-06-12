// RETRO-TERMINAL SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Terminal alerts are system messages — they use the machine's vocabulary.
// INFO is a log entry. WARNING is a flag. ERROR is a fault. SUCCESS is a confirmation.
// Each uses its color semantically: green = ok, amber = caution, red = fault.
// The box-drawing border decoration reinforces the "system output" feel.

export function Alert({ type = "info", title, children }) {
  const types = {
    info: {
      color: "#00AA2B",
      border: "1px solid #1a2e1a",
      bg: "#0D0D0D",
      prefix: "> INFO",
      glow: "none",
    },
    success: {
      color: "#00FF41",
      border: "1px solid #00FF41",
      bg: "#080808",
      prefix: "✓ OK",
      glow: "0 0 12px #00FF4133",
    },
    warning: {
      color: "#FFB700",
      border: "1px solid #FFB700",
      bg: "#080808",
      prefix: "⚠ WARN",
      glow: "0 0 8px #FFB70033",
    },
    error: {
      color: "#FF3333",
      border: "1px solid #FF3333",
      bg: "#080808",
      prefix: "✕ ERR",
      glow: "0 0 12px #FF333333",
    },
  };

  const t = types[type];

  return (
    <div style={{
      border: t.border,
      background: t.bg,
      padding: "14px 16px",
      borderRadius: 0,
      boxShadow: t.glow,
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      <div style={{
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
      }}>
        {/* Type prefix — machine code style */}
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          color: t.color,
          letterSpacing: "0.15em",
          flexShrink: 0,
          paddingTop: 1,
        }}>
          [{t.prefix}]
        </span>

        <div style={{ flex: 1 }}>
          {title && (
            <div style={{
              fontSize: 12,
              fontWeight: 700,
              color: t.color,
              letterSpacing: "0.08em",
              marginBottom: children ? 6 : 0,
            }}>
              {title.toUpperCase()}
            </div>
          )}
          {children && (
            <div style={{
              fontSize: 11,
              color: type === "info" ? "#4a7a4a" : t.color,
              lineHeight: 1.7,
              letterSpacing: "0.04em",
              opacity: 0.85,
            }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Alert type="info" title="System Ready">All modules loaded successfully.</Alert>
// <Alert type="success" title="Connection Established" />
// <Alert type="warning" title="Rate Limit Approaching">
//   87% of monthly quota consumed.
// </Alert>
// <Alert type="error" title="Connection Refused">
//   ERR_CONNECTION_REFUSED — check host configuration.
// </Alert>
