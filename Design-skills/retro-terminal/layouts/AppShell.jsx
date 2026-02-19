// RETRO-TERMINAL SKILL — AppShell.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The AppShell is the root layout for any multi-page application.
// It combines a sticky Navbar, an optional collapsible Sidebar, and the main content area.
// The sidebar uses the same bordered panel pattern as all other surfaces.
// The layout is strictly rectilinear — all columns and rows align to the grid.

import { useState } from "react";
import { Navbar } from "../components/navigation/Navbar";

export function AppShell({
  brand,
  navLinks,
  navCta,
  sidebarItems = [],
  children,
}) {
  const [activeSidebarItem, setActiveSidebarItem] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080808",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {/* TOP NAV */}
      <Navbar brand={brand} links={navLinks} ctaLabel={navCta} />

      {/* BODY — sidebar + main */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* SIDEBAR */}
        {sidebarItems.length > 0 && (
          <aside style={{
            width: sidebarOpen ? 220 : 48,
            borderRight: "1px solid #1a2e1a",
            background: "#0D0D0D",
            flexShrink: 0,
            transition: "width 300ms cubic-bezier(0, 0.8, 0.2, 1)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}>
            {/* Sidebar header */}
            <div style={{
              padding: "12px 14px",
              borderBottom: "1px solid #1a2e1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              {sidebarOpen && (
                <span style={{ fontSize: 9, color: "#2a4a2a", letterSpacing: "0.2em" }}>
                  NAVIGATION
                </span>
              )}
              <button
                onClick={() => setSidebarOpen(o => !o)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#4a7a4a",
                  cursor: "none",
                  fontSize: 12,
                  padding: 2,
                  fontFamily: "inherit",
                  transition: "color 150ms",
                }}
                onMouseEnter={e => e.target.style.color = "#00FF41"}
                onMouseLeave={e => e.target.style.color = "#4a7a4a"}
              >
                {sidebarOpen ? "◀" : "▶"}
              </button>
            </div>

            {/* Sidebar nav items */}
            <nav style={{ padding: "8px 0", flex: 1 }}>
              {sidebarItems.map((item, i) => {
                const active = activeSidebarItem === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveSidebarItem(i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      width: "100%",
                      padding: "10px 14px",
                      background: active ? "#111411" : "transparent",
                      borderLeft: active ? "2px solid #00FF41" : "2px solid transparent",
                      border: "none",
                      borderRight: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      color: active ? "#00FF41" : "#4a7a4a",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textAlign: "left",
                      cursor: "none",
                      fontFamily: "inherit",
                      transition: "all 150ms",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                    onMouseEnter={e => !active && (e.currentTarget.style.color = "#00AA2B")}
                    onMouseLeave={e => !active && (e.currentTarget.style.color = "#4a7a4a")}
                  >
                    {/* Icon/symbol */}
                    <span style={{ flexShrink: 0, fontSize: 13 }}>{item.icon || "›"}</span>
                    {/* Label — hidden when collapsed */}
                    {sidebarOpen && (
                      <span>{item.label}</span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Sidebar footer — system info */}
            {sidebarOpen && (
              <div style={{
                padding: "12px 14px",
                borderTop: "1px solid #1a2e1a",
                fontSize: 9,
                color: "#2a4a2a",
                letterSpacing: "0.12em",
                lineHeight: 1.8,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 5, height: 5, background: "#00FF41", animation: "blink 1.4s step-end infinite" }} />
                  SYSTEM ONLINE
                </div>
              </div>
            )}
          </aside>
        )}

        {/* MAIN CONTENT */}
        <main style={{
          flex: 1,
          overflow: "auto",
          padding: "32px 40px",
        }}>
          {children}
        </main>
      </div>
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <AppShell
//   brand="MYAPP//v2"
//   navLinks={[{ label: "./docs", href: "/docs" }]}
//   sidebarItems={[
//     { icon: "⬡", label: "Dashboard" },
//     { icon: "◈", label: "Analytics" },
//     { icon: "◻", label: "Settings" },
//   ]}
// >
//   <YourPageContent />
// </AppShell>
