// RETRO-TERMINAL SKILL — Navbar.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The nav bar is the system status bar. It tells you where you are (the logo/name),
// what commands are available (nav links as paths), and offers a primary action
// (a command button).
//
// The blinking dot next to the logo is the system heartbeat — a signal that
// the application is running. One blinking element in the nav at all times.
//
// Links are styled as file paths (./docs, ./pricing) — they ARE paths
// in the terminal world. This is not stylistic affectation, it's the vocabulary.

import { useState } from "react";

export function Navbar({
  brand = "TERM//OS",           // Application name/brand
  links = [],                   // [{ label: string, href: string }]
  ctaLabel = "$ CONNECT",       // Primary CTA text
  onCtaClick,
  sticky = true,
}) {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 40px",
      borderBottom: "1px solid #1a2e1a",
      background: "#080808",
      position: sticky ? "sticky" : "static",
      top: 0,
      zIndex: 100,
      // WHY: Subtle flicker gives the nav a "running system" feel.
      // Applied to the nav specifically because it's always visible.
      animation: "flicker 10s infinite",
      fontFamily: "'JetBrains Mono', monospace",
    }}>

      {/* BRAND — system identifier */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Heartbeat indicator — always blinking */}
        <div style={{
          width: 8,
          height: 8,
          background: "#00FF41",
          flexShrink: 0,
          animation: "blink 1.4s step-end infinite",
          boxShadow: "0 0 6px #00FF4166",
        }} />
        <span style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.2em",
          color: "#00FF41",
          userSelect: "none",
        }}>
          {brand}
        </span>
      </div>

      {/* NAV LINKS — styled as file system paths */}
      {links.length > 0 && (
        <div style={{ display: "flex", gap: 32 }}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textDecoration: "none",
                color: hoveredLink === i ? "#00FF41" : "#00AA2B",
                transition: "color 150ms",
                cursor: "none",
              }}
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {/* WHY: ./ prefix turns labels into paths — part of the terminal vocabulary */}
              {link.label.startsWith("./") ? link.label : `./${link.label}`}
            </a>
          ))}
        </div>
      )}

      {/* CTA BUTTON — primary command */}
      <button
        style={{
          background: ctaHovered ? "#00FF41" : "transparent",
          border: "1px solid #00FF41",
          color: ctaHovered ? "#080808" : "#00FF41",
          padding: "6px 18px",
          fontSize: 11,
          fontFamily: "inherit",
          fontWeight: 500,
          letterSpacing: "0.15em",
          borderRadius: 0,
          cursor: "none",
          boxShadow: ctaHovered ? "0 0 16px #00FF4166" : "0 0 8px #00FF4133",
          transition: "all 150ms",
          userSelect: "none",
        }}
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
        onClick={onCtaClick}
      >
        {ctaLabel}
      </button>
    </nav>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Navbar
//   brand="MYAPP//v2"
//   links={[
//     { label: "./docs", href: "/docs" },
//     { label: "./pricing", href: "/pricing" },
//     { label: "./changelog", href: "/changelog" },
//   ]}
//   ctaLabel="$ GET STARTED"
//   onCtaClick={() => router.push("/signup")}
// />
