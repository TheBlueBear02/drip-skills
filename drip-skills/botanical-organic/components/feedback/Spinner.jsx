// BOTANICAL ORGANIC SKILL — Spinner.jsx + Alert + ProgressBar
//
// Loading and feedback states in botanical design are gentle and unobtrusive.
// No harsh colors. No jarring animations. Everything soft, slow, organic.

// ── SPINNER ───────────────────────────────────────────────────────────────────
// A thin, gracefully rotating ring — not a bold mechanical square.

export function Spinner({ size = "md", label, color = "#8C9A84" }) {
  const sizes = { sm: 24, md: 36, lg: 52 };
  const stroke = { sm: 2, md: 2, lg: 2 };
  const s = sizes[size] || sizes.md;
  const sw = stroke[size] || 2;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ animation: "botanical-spin 1.2s ease-in-out infinite" }}>
        <circle
          cx={s / 2} cy={s / 2} r={s / 2 - sw}
          fill="none" stroke="#E6E2DA" strokeWidth={sw}
        />
        <circle
          cx={s / 2} cy={s / 2} r={s / 2 - sw}
          fill="none" stroke={color} strokeWidth={sw}
          strokeLinecap="round"
          strokeDasharray={`${Math.PI * (s - sw * 2) * 0.65} ${Math.PI * (s - sw * 2)}`}
          style={{ transformOrigin: "center" }}
        />
      </svg>

      {label && (
        <span style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontWeight: 400, fontSize: 14, color: "rgba(45,58,49,0.7)",
          letterSpacing: "0.02em",
        }}>
          {label}
        </span>
      )}

      <style>{`
        @keyframes botanical-spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ── PROGRESS BAR ─────────────────────────────────────────────────────────────

export function ProgressBar({ value = 0, label, color = "#8C9A84", showPercent = true }) {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      {(label || showPercent) && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          {label && (
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 15, color: "#2D3A31" }}>
              {label}
            </span>
          )}
          {showPercent && (
            <span style={{ fontWeight: 400, fontSize: 14, color: "rgba(45,58,49,0.6)" }}>
              {value}%
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div style={{
        height: 6, borderRadius: 9999,
        background: "#F2F0EB",
        overflow: "hidden",
      }}>
        {/* Fill */}
        <div style={{
          height: "100%",
          width: `${value}%`,
          background: color,
          borderRadius: 9999,
          transition: "width 600ms ease-out",
          boxShadow: `0 0 8px rgba(140,154,132,0.4)`,
        }} />
      </div>
    </div>
  );
}

// ── ALERT ─────────────────────────────────────────────────────────────────────

export function Alert({ type = "info", title, children, onDismiss }) {
  const types = {
    info:    { bg: "rgba(140,154,132,0.10)", border: "rgba(140,154,132,0.3)", dot: "#8C9A84" },
    success: { bg: "rgba(134,179,126,0.10)", border: "rgba(134,179,126,0.3)", dot: "#86B37E" },
    warning: { bg: "rgba(194,123,102,0.08)", border: "rgba(194,123,102,0.25)", dot: "#C27B66" },
    error:   { bg: "rgba(180,80,80,0.08)",   border: "rgba(180,80,80,0.25)",   dot: "#B45050" },
  };
  const t = types[type] || types.info;

  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 14,
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 16,
      padding: "16px 20px",
      fontFamily: "'Source Sans 3', sans-serif",
    }}>
      {/* Soft dot indicator */}
      <div style={{
        width: 8, height: 8, borderRadius: "50%",
        background: t.dot, flexShrink: 0, marginTop: 6,
      }} />

      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600, fontSize: 15, color: "#2D3A31",
            marginBottom: children ? 4 : 0,
          }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontWeight: 400, fontSize: 14, color: "rgba(45,58,49,0.75)", lineHeight: 1.6 }}>
            {children}
          </div>
        )}
      </div>

      {onDismiss && (
        <button onClick={onDismiss} style={{
          background: "none", border: "none", cursor: "pointer",
          color: "rgba(45,58,49,0.4)", fontSize: 18, lineHeight: 1,
          padding: 2, flexShrink: 0,
          transition: "color 300ms ease-out",
        }}>×</button>
      )}
    </div>
  );
}

// ── SKELETON ──────────────────────────────────────────────────────────────────

export function Skeleton({ width = "100%", height = 20, radius = 8, style: ext }) {
  return (
    <div style={{
      width, height,
      borderRadius: radius,
      background: "linear-gradient(90deg, #F2F0EB 25%, #E8E5DF 50%, #F2F0EB 75%)",
      backgroundSize: "200% 100%",
      animation: "botanical-shimmer 1.8s ease-in-out infinite",
      ...ext,
    }}>
      <style>{`
        @keyframes botanical-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Spinner size="md" label="Loading collection..." />
// <Spinner size="lg" color="#C27B66" />
//
// <ProgressBar value={65} label="Growing season" color="#8C9A84" />
//
// <Alert type="success" title="Order placed">Your items are on their way.</Alert>
// <Alert type="warning" title="Low stock" onDismiss={() => {}}>Only 3 remaining.</Alert>
//
// <Skeleton height={24} width="60%" />
// <Skeleton height={200} radius={24} />
