// RETRO-TERMINAL SKILL — Card.jsx (Terminal Window)
//
// WHY THIS LOOKS THE WAY IT DOES:
// Every card in this system is a terminal window.
// The title bar with traffic-light dots (red/yellow/green) references macOS
// terminal windows, which themselves reference the original terminal aesthetic.
// The dots aren't decorative — they are window controls the user recognizes.
//
// The pulsing glow variant signals the "active" or "featured" window —
// the one the user should look at first. Only one window should pulse at a time.
//
// The body padding is deliberate — tight enough to feel data-dense,
// generous enough to be readable.

import { useState } from "react";

export function Card({
  title,
  children,
  variant = "default",   // "default" | "active" | "ghost"
  interactive = false,   // adds hover state if true
  style: externalStyle,
}) {
  const [hovered, setHovered] = useState(false);

  const variants = {
    default: {
      border: "1px solid #1a2e1a",
      background: "#0D0D0D",
      boxShadow: "none",
    },
    active: {
      border: "1px solid #00AA2B",
      background: "#0D0D0D",
      boxShadow: "0 0 24px #00FF4133, inset 0 0 24px #00FF4105",
      animation: "pulse-border 3s ease-in-out infinite",
    },
    ghost: {
      border: "1px solid #0d1a0d",
      background: "transparent",
      boxShadow: "none",
    },
  };

  const v = variants[variant];

  const hoverOverride = interactive && hovered ? {
    background: "#111411",
    boxShadow: "inset 0 0 40px #00FF4108",
    borderColor: "#2a4a2a",
  } : {};

  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        borderRadius: 0,   // WHY: Always 0. Cards are windows, not cards.
        overflow: "hidden",
        transition: "background 200ms, box-shadow 200ms, border-color 200ms",
        cursor: interactive ? "none" : "default",
        ...v,
        ...hoverOverride,
        ...externalStyle,
      }}
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
    >
      {/* Title bar — always present when title is provided */}
      {title && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderBottom: "1px solid #1a2e1a",
          background: "#111411",
        }}>
          {/* Traffic light dots — window control references */}
          {/* WHY: These three dots are the universal shorthand for "terminal window" */}
          {["#FF3333", "#FFB700", "#00FF41"].map((color, i) => (
            <div key={i} style={{
              width: 8,
              height: 8,
              borderRadius: "50%",  // Exception: dots are circular by convention
              background: color,
              opacity: 0.8,
              flexShrink: 0,
            }} />
          ))}

          {/* Window title — path/command style */}
          <span style={{
            fontSize: 11,
            color: "#4a7a4a",
            marginLeft: 8,
            letterSpacing: "0.1em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
            {title}
          </span>
        </div>
      )}

      {/* Content area */}
      <div style={{ padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Card title="agent@project:~/app — bash">
//   <p>Terminal content here</p>
// </Card>
//
// <Card title="system.log" variant="active">
//   Active / featured window with pulsing glow
// </Card>
//
// <Card interactive>
//   No title bar — plain interactive panel
// </Card>
