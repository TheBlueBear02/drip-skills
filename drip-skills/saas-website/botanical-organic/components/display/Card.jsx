// BOTANICAL ORGANIC SKILL — Card.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Cards are soft, rounded, paper-like surfaces that float above the canvas.
// rounded-3xl (24px) is the standard — soft but with structure.
// On hover, cards lift gently (-4px) and their shadow blooms.
// The transition is 500ms ease-out — luxuriously slow, never snappy.
// Arch images use border-radius 200px 200px 0 0 to create the signature shape.
// Stagger: every second card in a row gets translateY(48px) — organic, grown, not engineered.

import { useState } from "react";

const SHADOW = {
  md:  "0 10px 15px rgba(45,58,49,0.06)",
  lg:  "0 20px 40px rgba(45,58,49,0.08)",
  xl:  "0 25px 50px rgba(45,58,49,0.12)",
  xxl: "0 40px 80px rgba(45,58,49,0.15)",
};

export function Card({ children, bg = "#FFFFFF", shadow = "md", interactive = true, padding = "32px", style: ext }) {
  const [hov, setHov] = useState(false);
  const hoverShadows = { md: SHADOW.lg, lg: SHADOW.xl, xl: SHADOW.xxl };

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: bg,
        borderRadius: 24,
        boxShadow: interactive && hov ? hoverShadows[shadow] : SHADOW[shadow],
        transform: interactive && hov ? "translateY(-4px)" : "none",
        transition: "all 500ms ease-out",
        padding,
        ...ext,
      }}
    >
      {children}
    </div>
  );
}

// ── FEATURE CARD ──────────────────────────────────────────────────────────────

export function FeatureCard({ icon: Icon, title, body, accentColor = "#8C9A84", staggered = false }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: 24,
        padding: "36px 32px",
        boxShadow: hov ? SHADOW.lg : SHADOW.md,
        transform: hov
          ? "translateY(-4px)"
          : staggered
          ? "translateY(48px)"
          : "none",
        transition: "all 500ms ease-out",
        border: "1px solid rgba(230,226,218,0.6)",
      }}
    >
      {/* Soft icon container — floating, not boxed */}
      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        background: `rgba(${accentColor === "#C27B66" ? "194,123,102" : "140,154,132"},0.12)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 24,
      }}>
        {Icon && <Icon size={24} strokeWidth={1.5} color={accentColor} />}
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 600, fontSize: 22, color: "#2D3A31",
        marginBottom: 12, lineHeight: 1.3,
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 400, fontSize: 16, color: "rgba(45,58,49,0.7)",
        lineHeight: 1.7,
      }}>
        {body}
      </p>
    </div>
  );
}

// ── ARCH IMAGE CARD ───────────────────────────────────────────────────────────
// The signature image shape in this skill.

export function ArchImage({ src, alt, height = 480, width = 360 }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      borderRadius: "200px 200px 0 0",
      overflow: "hidden",
      height, width,
      boxShadow: hov ? SHADOW.xl : SHADOW.lg,
      transition: "all 500ms ease-out",
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <img src={src} alt={alt} style={{
        width: "100%", height: "100%", objectFit: "cover",
        transform: hov ? "scale(1.05)" : "scale(1)",
        transition: "transform 700ms ease-out",
      }} />
    </div>
  );
}

// ── STAT CARD ─────────────────────────────────────────────────────────────────

export function StatCard({ value, label, bg = "#F9F8F4" }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: bg, borderRadius: 20, padding: "32px 24px",
        boxShadow: hov ? SHADOW.lg : SHADOW.sm,
        transform: hov ? "translateY(-4px)" : "none",
        transition: "all 500ms ease-out",
        textAlign: "center",
      }}
    >
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700, fontSize: 48, color: "#2D3A31",
        lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 8,
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 400, fontSize: 14, color: "rgba(45,58,49,0.6)",
        letterSpacing: "0.04em",
      }}>
        {label}
      </div>
    </div>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Card>Simple card content</Card>
// <Card bg="#F2F0EB" shadow="lg">Secondary background card</Card>
// <FeatureCard icon={Leaf} title="Organic Materials" body="Sourced from nature." />
// <FeatureCard icon={Sun} title="Sun-Warmed" body="..." staggered={true} />
// <ArchImage src="/garden.jpg" alt="Garden" height={480} width={360} />
// <StatCard value="98%" label="Customer satisfaction" />
