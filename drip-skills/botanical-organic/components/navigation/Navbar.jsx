// BOTANICAL ORGANIC SKILL — Navbar.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The nav is transparent, floating above the canvas — not a solid bar.
// It gains a frosted glass background on scroll (blur + white tint).
// The logo uses Playfair Display italic — the brand name is elegant, never bold-generic.
// Nav links use Source Sans 3, sentence case, terracotta hover — warm, not cold.
// The CTA button is the forest green pill — primary action, always visible.
// Mobile: hamburger opens a full-screen frosted overlay with stacked links.

import { useState, useEffect } from "react";

export function Navbar({ brand = "Botanica", links = [], ctaLabel = "Get Started", onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ctaHov, setCtaHov] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        height: 72,
        background: scrolled ? "rgba(249,248,244,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(230,226,218,0.6)" : "none",
        transition: "all 400ms ease-out",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 32px",
          height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo — Playfair italic, the signature typography move */}
          <a href="/" style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700, fontSize: 24, fontStyle: "italic",
            color: "#2D3A31", textDecoration: "none",
            letterSpacing: "-0.01em",
          }}>
            {brand}
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {links.map((l, i) => (
              <NavLink key={i} href={l.href}>{l.label}</NavLink>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {/* Desktop CTA */}
            <button
              onMouseEnter={() => setCtaHov(true)}
              onMouseLeave={() => setCtaHov(false)}
              onClick={onCtaClick}
              style={{
                height: 44, padding: "0 24px",
                background: ctaHov ? "#C27B66" : "#2D3A31",
                color: "#F9F8F4", borderRadius: 9999, border: "none",
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 500, fontSize: 14, letterSpacing: "0.04em",
                cursor: "pointer", outline: "none",
                boxShadow: ctaHov
                  ? "0 12px 24px rgba(194,123,102,0.25)"
                  : "0 8px 16px rgba(45,58,49,0.12)",
                transform: ctaHov ? "translateY(-1px)" : "none",
                transition: "all 300ms ease-out",
              }}
            >
              {ctaLabel}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                width: 44, height: 44, background: "transparent",
                border: "1px solid #E6E2DA", borderRadius: 12,
                cursor: "pointer", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 4,
                transition: "all 300ms ease-out",
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", width: 16, height: 1.5,
                  background: "#2D3A31", borderRadius: 2,
                  transform: mobileOpen
                    ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                    : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                    : "scaleX(0)"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                  transition: "all 300ms ease-out",
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 39,
          background: "rgba(249,248,244,0.97)",
          backdropFilter: "blur(20px)",
          paddingTop: 88, paddingLeft: 32, paddingRight: 32, paddingBottom: 32,
          display: "flex", flexDirection: "column",
        }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} style={{
              display: "block",
              padding: "20px 0",
              borderBottom: i < links.length - 1 ? "1px solid #E6E2DA" : "none",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600, fontSize: 28, color: "#2D3A31",
              textDecoration: "none", letterSpacing: "-0.01em",
            }}>
              {l.label}
            </a>
          ))}
          <button onClick={onCtaClick} style={{
            marginTop: 32, height: 56, width: "100%",
            background: "#2D3A31", color: "#F9F8F4",
            borderRadius: 9999, border: "none", cursor: "pointer",
            fontFamily: "'Source Sans 3', sans-serif",
            fontWeight: 500, fontSize: 15,
          }}>
            {ctaLabel}
          </button>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "8px 16px",
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 500, fontSize: 14, letterSpacing: "0.02em",
        color: hov ? "#C27B66" : "#2D3A31",
        textDecoration: "none",
        transition: "color 300ms ease-out",
      }}
    >
      {children}
    </a>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Navbar
//   brand="Botanica"
//   links={[
//     { label: "Journal",   href: "/journal" },
//     { label: "Shop",      href: "/shop" },
//     { label: "About",     href: "/about" },
//   ]}
//   ctaLabel="Get Started"
//   onCtaClick={() => {}}
// />
