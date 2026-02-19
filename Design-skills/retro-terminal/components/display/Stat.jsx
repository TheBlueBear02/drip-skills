// RETRO-TERMINAL SKILL — Stat.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Stat components are system monitors — they display live machine metrics.
// The large number should feel like a counter on a monitoring dashboard.
// The label beneath is the channel identifier, always in caps and wide-spaced.
// The optional delta indicator (▲/▼) is system status feedback.

export function Stat({ value, label, delta, deltaLabel, glowing = false }) {
  const deltaPositive = delta > 0;
  const deltaColor = delta === 0 ? "#4a7a4a" : deltaPositive ? "#00FF41" : "#FF3333";

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      padding: "28px 32px",
    }}>
      {/* Channel label — always above the value */}
      <div style={{
        fontSize: 9,
        letterSpacing: "0.22em",
        color: "#4a7a4a",
        marginBottom: 12,
        textTransform: "uppercase",
      }}>
        {label}
      </div>

      {/* Primary value — the number that matters */}
      <div style={{
        fontSize: 36,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        lineHeight: 1,
        color: "#00FF41",
        // WHY: Glow scales with importance — a glowing stat is the one to watch
        textShadow: glowing
          ? "0 0 30px #00FF4133, 0 0 60px #00FF4115"
          : "0 0 10px #00FF4120",
        marginBottom: 10,
      }}>
        {value}
      </div>

      {/* Delta indicator — machine reporting change */}
      {delta !== undefined && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: 10,
          letterSpacing: "0.1em",
        }}>
          <span style={{ color: deltaColor, fontWeight: 700 }}>
            {delta > 0 ? "▲" : delta < 0 ? "▼" : "━"}
            {" "}
            {Math.abs(delta)}%
          </span>
          {deltaLabel && (
            <span style={{ color: "#2a4a2a" }}>{deltaLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Stat value="99.9%" label="Uptime" delta={0.1} deltaLabel="vs last month" glowing />
// <Stat value="2,847" label="Active Sessions" delta={-12} deltaLabel="24h change" />
// <Stat value="$14.2K" label="MRR" delta={8} deltaLabel="month over month" />
