// BOTANICAL ORGANIC SKILL — LandingPage.jsx (North Star Example)
//
// This is the complete reference implementation. Every design pattern lives here.
// Read this file completely before building any page.
//
// CHECKLIST — If any of these are missing, the design is incomplete:
// [ ] #F9F8F4 warm alabaster background (not #FFF)
// [ ] #2D3A31 deep forest green for all text (not #000)
// [ ] SVG paper grain fixed overlay (z-50, pointer-events-none, opacity-[0.015])
// [ ] Playfair Display on all headings with italic emphasis on key words
// [ ] Source Sans 3 for all body text
// [ ] Green-tinted soft diffused shadows (rgba(45,58,49,…))
// [ ] rounded-3xl (24px) on all cards
// [ ] rounded-full (pill) on all buttons
// [ ] Arch border-radius (200px 200px 0 0) on hero/feature images
// [ ] 500ms ease-out card hover (lift + shadow bloom)
// [ ] 700ms ease-out image scale on hover
// [ ] py-24/py-32 section padding minimum
// [ ] Staggered grid (every second card translateY 48px on desktop)
// [ ] 1px border #E6E2DA — never thicker
// [ ] Terracotta (#C27B66) on hover/interactive states
// [ ] thin icon strokes (strokeWidth={1.5})
// [ ] No uppercase text — sentence case or Title Case only

import { useState } from "react";
import {
  ArrowRight, Leaf, Sun, Droplets, Wind, Sprout, BookOpen,
  Star, ChevronDown, Menu, X,
} from "lucide-react";

// ── CONSTANTS ─────────────────────────────────────────────────────────────────

const C = {
  bg:          "#F9F8F4",
  fg:          "#2D3A31",
  primary:     "#8C9A84",
  secondary:   "#DCCFC2",
  border:      "#E6E2DA",
  interactive: "#C27B66",
  surface:     "#FFFFFF",
  muted:       "rgba(45,58,49,0.55)",
};

const SHADOW = {
  sm:  "0 4px 6px rgba(45,58,49,0.05)",
  md:  "0 10px 15px rgba(45,58,49,0.06)",
  lg:  "0 20px 40px rgba(45,58,49,0.08)",
  xl:  "0 25px 50px rgba(45,58,49,0.12)",
  xxl: "0 40px 80px rgba(45,58,49,0.15)",
};

const FONT_SERIF = "'Playfair Display', Georgia, serif";
const FONT_SANS  = "'Source Sans 3', system-ui, sans-serif";

// ── GRAIN TEXTURE (MANDATORY) ─────────────────────────────────────────────────

function PaperGrain() {
  return (
    <div
      style={{
        pointerEvents: "none", position: "fixed", inset: 0, zIndex: 50,
        opacity: 0.015,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

// ── REUSABLE MICRO-COMPONENTS ─────────────────────────────────────────────────

function PillButton({ children, variant = "primary", onClick, icon: Icon, size = "md", fullWidth }) {
  const [hov, setHov] = useState(false);
  const heights = { sm: 40, md: 48, lg: 56 };
  const fonts   = { sm: 13, md: 14, lg: 15 };

  const styles = {
    primary: {
      bg:      hov ? "#C27B66" : "#2D3A31",
      color:   "#F9F8F4",
      border:  "none",
      shadow:  hov ? "0 16px 24px rgba(45,58,49,0.14)" : SHADOW.md,
    },
    secondary: {
      bg:      hov ? "#F2F0EB" : "transparent",
      color:   "#8C9A84",
      border:  "1px solid #8C9A84",
      shadow:  "none",
    },
    outline: {
      bg:      hov ? "#F2F0EB" : "transparent",
      color:   "#2D3A31",
      border:  "1px solid #E6E2DA",
      shadow:  "none",
    },
  };

  const s = styles[variant] || styles.primary;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        height: heights[size], padding: `0 ${heights[size] * 0.6}px`,
        background: s.bg, color: s.color, border: s.border,
        borderRadius: 9999, cursor: "pointer", outline: "none",
        fontFamily: FONT_SANS, fontWeight: 500, fontSize: fonts[size],
        letterSpacing: "0.04em", display: "inline-flex",
        alignItems: "center", gap: 8,
        width: fullWidth ? "100%" : undefined,
        justifyContent: fullWidth ? "center" : undefined,
        boxShadow: s.shadow,
        transform: hov ? "translateY(-1px)" : "none",
        transition: "all 300ms ease-out",
      }}
    >
      {children}
      {Icon && <Icon size={fonts[size]} strokeWidth={1.5} />}
    </button>
  );
}

function SoftCard({ children, bg = C.surface, style: ext, interactive = true }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: bg, borderRadius: 24, padding: 32,
        boxShadow: interactive && hov ? SHADOW.lg : SHADOW.md,
        transform: interactive && hov ? "translateY(-4px)" : "none",
        transition: "all 500ms ease-out",
        ...ext,
      }}
    >
      {children}
    </div>
  );
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ctaHov, setCtaHov] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 20));
  }

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40, height: 72,
        background: scrolled ? "rgba(249,248,244,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(230,226,218,0.6)" : "none",
        transition: "all 400ms ease-out",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 32px", height: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo — Playfair italic, the signature move */}
          <a href="/" style={{
            fontFamily: FONT_SERIF, fontWeight: 700, fontSize: 24,
            fontStyle: "italic", color: C.fg, textDecoration: "none",
          }}>
            Botanica
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {["Journal", "Shop", "About", "Community"].map(l => (
              <NavLink key={l} href={`/${l.toLowerCase()}`}>{l}</NavLink>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button
              onMouseEnter={() => setCtaHov(true)}
              onMouseLeave={() => setCtaHov(false)}
              style={{
                height: 44, padding: "0 24px",
                background: ctaHov ? C.interactive : C.fg,
                color: C.bg, borderRadius: 9999, border: "none",
                fontFamily: FONT_SANS, fontWeight: 500, fontSize: 14,
                letterSpacing: "0.04em", cursor: "pointer",
                boxShadow: SHADOW.md,
                transform: ctaHov ? "translateY(-1px)" : "none",
                transition: "all 300ms ease-out",
              }}
            >
              Get Started
            </button>
            <button
              onClick={() => setOpen(!open)}
              style={{
                width: 44, height: 44, background: "transparent",
                border: "1px solid #E6E2DA", borderRadius: 12,
                cursor: "pointer", display: "flex",
                flexDirection: "column", alignItems: "center",
                justifyContent: "center", gap: 4,
              }}
            >
              {open ? <X size={18} strokeWidth={1.5} color={C.fg} /> : <Menu size={18} strokeWidth={1.5} color={C.fg} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 39,
          background: "rgba(249,248,244,0.97)", backdropFilter: "blur(20px)",
          paddingTop: 96, paddingLeft: 32, paddingRight: 32,
          display: "flex", flexDirection: "column",
        }}>
          {["Journal", "Shop", "About", "Community"].map((l, i, arr) => (
            <a key={l} href={`/${l.toLowerCase()}`} style={{
              display: "block", padding: "20px 0",
              borderBottom: i < arr.length - 1 ? "1px solid #E6E2DA" : "none",
              fontFamily: FONT_SERIF, fontWeight: 600, fontSize: 28,
              color: C.fg, textDecoration: "none",
            }}>{l}</a>
          ))}
          <div style={{ marginTop: 32 }}>
            <PillButton fullWidth>Get Started</PillButton>
          </div>
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
        padding: "8px 16px", fontFamily: FONT_SANS, fontWeight: 500, fontSize: 14,
        color: hov ? C.interactive : C.fg, textDecoration: "none",
        transition: "color 300ms ease-out",
      }}
    >{children}</a>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────

function Hero() {
  const [imgHov, setImgHov] = useState(false);

  return (
    <section style={{
      background: C.bg, minHeight: "100vh",
      display: "flex", alignItems: "center",
      padding: "128px 32px 96px",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", width: "100%",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center",
      }}>
        {/* Left */}
        <div>
          {/* Eyebrow tag */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(140,154,132,0.12)", borderRadius: 9999,
            border: "1px solid rgba(140,154,132,0.25)",
            padding: "6px 16px", marginBottom: 32,
            fontFamily: FONT_SANS, fontWeight: 500, fontSize: 12,
            letterSpacing: "0.06em", color: "#4A5E42",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8C9A84", display: "inline-block" }} />
            Rooted in nature, designed for life
          </div>

          {/* Hero headline — italic key words */}
          <h1 style={{
            fontFamily: FONT_SERIF, fontWeight: 700,
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 1.05, letterSpacing: "-0.02em",
            color: C.fg, marginBottom: 28,
          }}>
            Where <em style={{ fontStyle: "italic", color: C.interactive }}>nature</em> meets<br />
            everyday <em style={{ fontStyle: "italic" }}>living</em>
          </h1>

          <p style={{
            fontFamily: FONT_SANS, fontWeight: 400, fontSize: 18,
            color: C.muted, lineHeight: 1.75, marginBottom: 40, maxWidth: 480,
          }}>
            Curated botanical designs and sustainable home goods that bring
            the warmth of the natural world into your everyday rituals.
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <PillButton icon={ArrowRight}>Explore Collection</PillButton>
            <PillButton variant="secondary">Our Story</PillButton>
          </div>

          {/* Social proof */}
          <div style={{ display: "flex", gap: 32, marginTop: 48, paddingTop: 32, borderTop: "1px solid #E6E2DA" }}>
            {[["2.4K+", "Happy growers"], ["98%", "Satisfaction rate"], ["12", "Plant families"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: FONT_SERIF, fontWeight: 700, fontSize: 28, color: C.fg, letterSpacing: "-0.02em" }}>{n}</div>
                <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.muted, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — arch image + floating card */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Decorative background circle */}
          <div style={{
            position: "absolute", top: -40, right: -20,
            width: 320, height: 320, borderRadius: "50%",
            background: C.secondary, opacity: 0.35, zIndex: 0,
          }} />

          {/* Arch image — THE SIGNATURE SHAPE */}
          <div
            onMouseEnter={() => setImgHov(true)}
            onMouseLeave={() => setImgHov(false)}
            style={{
              borderRadius: "200px 200px 0 0",
              overflow: "hidden", position: "relative", zIndex: 1,
              width: 380, height: 500,
              boxShadow: SHADOW.xl,
            }}
          >
            {/* Placeholder gradient — replace with <img> */}
            <div style={{
              width: "100%", height: "100%",
              background: "linear-gradient(160deg, #8C9A84 0%, #DCCFC2 50%, #C27B66 100%)",
              transform: imgHov ? "scale(1.05)" : "scale(1)",
              transition: "transform 700ms ease-out",
            }}>
              {/* Overlay botanical label */}
              <div style={{
                position: "absolute", bottom: 32, left: 32, right: 32,
                background: "rgba(249,248,244,0.88)", backdropFilter: "blur(8px)",
                borderRadius: 16, padding: "16px 20px",
                boxShadow: SHADOW.md,
              }}>
                <div style={{ fontFamily: FONT_SERIF, fontWeight: 600, fontSize: 16, color: C.fg, marginBottom: 4 }}>
                  Sacred <em style={{ fontStyle: "italic" }}>herb</em> collection
                </div>
                <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.muted }}>Spring 2025 · 24 pieces</div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: "absolute", top: 48, left: -16, zIndex: 2,
            background: C.secondary, borderRadius: 16, padding: "12px 20px",
            boxShadow: SHADOW.lg, border: "1px solid #E6E2DA",
            animation: "botanical-float 6s ease-in-out infinite",
          }}>
            <div style={{ fontFamily: FONT_SANS, fontSize: 11, color: C.muted, letterSpacing: "0.06em", marginBottom: 2 }}>CURATED</div>
            <div style={{ fontFamily: FONT_SERIF, fontWeight: 600, fontSize: 16, color: C.fg }}>100% Natural</div>
          </div>

          <style>{`
            @keyframes botanical-float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-8px) rotate(1deg); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

// ── FEATURES ─────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    { icon: Leaf,     title: "Organic Materials",  body: "Every product is sourced from regenerative farms and ethical suppliers who share our reverence for the earth.", accent: "#8C9A84", stag: false },
    { icon: Sun,      title: "Sun-Kissed Design",  body: "Inspired by golden hour light on leaves — warm, inviting, and unhurried. Designed to feel like a deep breath.", accent: "#C27B66", stag: true },
    { icon: Droplets, title: "Water-Wise",         body: "Our ceramics and planters are crafted to minimise water loss, helping your plants thrive with less effort.", accent: "#8C9A84", stag: false },
    { icon: Wind,     title: "Lightly Packaged",   body: "Shipping materials are compostable. The box is the last single-use plastic you'll ever get from us.", accent: "#C27B66", stag: true },
    { icon: Sprout,   title: "Grows With You",     body: "Our curated guides and seasonal journals grow alongside your collection, season after season.", accent: "#8C9A84", stag: false },
    { icon: BookOpen, title: "Living Library",     body: "A growing archive of botanical knowledge, care guides, and seasonal rituals — free, forever.", accent: "#C27B66", stag: true },
  ];

  return (
    <section style={{ background: C.bg, padding: "96px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 72, maxWidth: 560 }}>
          <p style={{ fontFamily: FONT_SANS, fontWeight: 500, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: C.primary, marginBottom: 16 }}>
            Why botanical
          </p>
          <h2 style={{ fontFamily: FONT_SERIF, fontWeight: 700, fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: C.fg }}>
            Designed with the <em style={{ fontStyle: "italic" }}>patience</em> of a gardener
          </h2>
        </div>

        {/* Staggered grid — THE SIGNATURE LAYOUT MOVE */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, body, accent, stag }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.surface, borderRadius: 24, padding: "36px 32px",
        border: "1px solid rgba(230,226,218,0.6)",
        boxShadow: hov ? SHADOW.lg : SHADOW.md,
        transform: hov ? "translateY(-4px)" : stag ? "translateY(48px)" : "none",
        transition: "all 500ms ease-out",
      }}
    >
      {/* Soft icon circle */}
      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        background: `rgba(${accent === "#C27B66" ? "194,123,102" : "140,154,132"},0.12)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 24,
      }}>
        <Icon size={22} strokeWidth={1.5} color={accent} />
      </div>

      <h3 style={{ fontFamily: FONT_SERIF, fontWeight: 600, fontSize: 22, color: C.fg, marginBottom: 12, lineHeight: 1.3 }}>
        {title}
      </h3>
      <p style={{ fontFamily: FONT_SANS, fontWeight: 400, fontSize: 15, color: C.muted, lineHeight: 1.75 }}>
        {body}
      </p>
    </div>
  );
}

// ── STATS ─────────────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
    { value: "98%",  label: "Customer satisfaction" },
    { value: "2.4K", label: "Happy growers worldwide" },
    { value: "60+",  label: "Plant varieties available" },
    { value: "100%", label: "Natural, organic materials" },
  ];

  return (
    <section style={{ background: C.fg, padding: "96px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: FONT_SERIF, fontWeight: 700,
          fontSize: "clamp(32px, 4vw, 48px)", textAlign: "center",
          color: C.bg, letterSpacing: "-0.02em", marginBottom: 64,
        }}>
          Growing something <em style={{ fontStyle: "italic", color: C.secondary }}>beautiful</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {stats.map((s, i) => (
            <StatBlock key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textAlign: "center", padding: "32px 16px",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20,
        background: hov ? "rgba(255,255,255,0.05)" : "transparent",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "all 400ms ease-out",
      }}
    >
      <div style={{ fontFamily: FONT_SERIF, fontWeight: 700, fontSize: 52, color: C.secondary, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 10 }}>
        {value}
      </div>
      <div style={{ fontFamily: FONT_SANS, fontSize: 14, color: "rgba(249,248,244,0.65)", lineHeight: 1.5 }}>
        {label}
      </div>
    </div>
  );
}

// ── EDITORIAL ────────────────────────────────────────────────────────────────

function Editorial() {
  const posts = [
    { tag: "Seasonal", title: "The ritual of repotting — a spring meditation", date: "Mar 2025", readTime: "5 min" },
    { tag: "Care",     title: "Why your monstera needs morning light, not noon sun", date: "Feb 2025", readTime: "4 min" },
    { tag: "Journal",  title: "Our ceramics studio: where clay meets intention", date: "Jan 2025", readTime: "7 min" },
  ];

  return (
    <section style={{ background: "#F4F2ED", padding: "96px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
          <div>
            <p style={{ fontFamily: FONT_SANS, fontWeight: 500, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: C.primary, marginBottom: 12 }}>
              The botanical journal
            </p>
            <h2 style={{ fontFamily: FONT_SERIF, fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: C.fg }}>
              Stories from the <em style={{ fontStyle: "italic" }}>garden</em>
            </h2>
          </div>
          <PillButton variant="outline" icon={ArrowRight}>View all</PillButton>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {posts.map((p, i) => (
            <BlogCard key={i} {...p} staggered={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ tag, title, date, readTime, staggered }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.surface, borderRadius: 24, overflow: "hidden",
        boxShadow: hov ? SHADOW.lg : SHADOW.sm,
        transform: hov ? "translateY(-4px)" : staggered ? "translateY(32px)" : "none",
        transition: "all 500ms ease-out",
        cursor: "pointer",
      }}
    >
      {/* Image area — arch-shaped inner preview */}
      <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
        <div style={{
          width: "100%", height: "100%",
          background: `linear-gradient(135deg, ${["#8C9A84","#DCCFC2","#C27B66"][["Seasonal","Care","Journal"].indexOf(tag)]} 0%, #F2F0EB 100%)`,
          transform: hov ? "scale(1.05)" : "scale(1)",
          transition: "transform 700ms ease-out",
        }} />
        <div style={{
          position: "absolute", top: 16, left: 16,
          background: "rgba(249,248,244,0.92)", borderRadius: 9999, padding: "4px 14px",
          fontFamily: FONT_SANS, fontSize: 11, fontWeight: 500,
          letterSpacing: "0.06em", color: C.fg,
        }}>
          {tag}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 28px 28px" }}>
        <h3 style={{
          fontFamily: FONT_SERIF, fontWeight: 600, fontSize: 20,
          color: C.fg, lineHeight: 1.35, marginBottom: 16,
        }}>
          {title}
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.muted }}>{date} · {readTime} read</span>
          <ArrowRight
            size={16} strokeWidth={1.5} color={C.primary}
            style={{ transform: hov ? "translateX(4px)" : "none", transition: "transform 300ms ease-out" }}
          />
        </div>
      </div>
    </div>
  );
}

// ── TESTIMONIAL ───────────────────────────────────────────────────────────────

function Testimonial() {
  return (
    <section style={{ background: C.bg, padding: "96px 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        {/* Stars */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 32 }}>
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} size={18} strokeWidth={0} fill={C.interactive} />
          ))}
        </div>

        <blockquote style={{
          fontFamily: FONT_SERIF, fontWeight: 600, fontSize: "clamp(22px, 3vw, 36px)",
          fontStyle: "italic", lineHeight: 1.45, color: C.fg,
          letterSpacing: "-0.01em", marginBottom: 32,
        }}>
          "Botanica changed how I relate to my home. Every morning with these
          plants feels like a meditation. The quality is extraordinary."
        </blockquote>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: C.secondary, border: "2px solid #E6E2DA",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: FONT_SERIF, fontWeight: 700, fontSize: 18, color: C.fg,
          }}>
            L
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: FONT_SERIF, fontWeight: 600, fontSize: 16, color: C.fg }}>Laura M.</div>
            <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.muted }}>Interior designer, São Paulo</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA SECTION ───────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section style={{ background: C.fg, padding: "112px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 48 }}>
        <div>
          <p style={{ fontFamily: FONT_SANS, fontWeight: 500, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(249,248,244,0.5)", marginBottom: 16 }}>
            Begin your journey
          </p>
          <h2 style={{ fontFamily: FONT_SERIF, fontWeight: 700, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.bg }}>
            Grow something<br /><em style={{ fontStyle: "italic", color: C.secondary }}>beautiful</em>
          </h2>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <PillButton size="lg">Explore the Collection</PillButton>
          <PillButton variant="outline" size="lg" icon={ArrowRight}>
            <span style={{ color: "#F9F8F4" }}>Read the Journal</span>
          </PillButton>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "#EDEAE4", borderTop: "1px solid #E6E2DA", padding: "64px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 48, marginBottom: 48 }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ fontFamily: FONT_SERIF, fontWeight: 700, fontSize: 22, fontStyle: "italic", color: C.fg, marginBottom: 16 }}>
              Botanica
            </div>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, color: C.muted, lineHeight: 1.75 }}>
              Rooted in nature. Designed for everyday living. Grown with love.
            </p>
          </div>
          <div style={{ display: "flex", gap: 64 }}>
            {[
              { title: "Explore", links: ["Shop", "Journal", "About", "Community"] },
              { title: "Support", links: ["FAQ", "Shipping", "Returns", "Contact"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontFamily: FONT_SERIF, fontWeight: 600, fontSize: 14, color: C.fg, marginBottom: 16 }}>
                  {col.title}
                </div>
                {col.links.map(l => (
                  <a key={l} href={`/${l.toLowerCase()}`} style={{
                    display: "block", fontFamily: FONT_SANS, fontSize: 14,
                    color: C.muted, textDecoration: "none", marginBottom: 10,
                    transition: "color 300ms ease-out",
                  }}>
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #E6E2DA", paddingTop: 24, display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "rgba(45,58,49,0.4)" }}>
            © 2025 Botanica. All rights reserved.
          </p>
          <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "rgba(45,58,49,0.4)" }}>
            Crafted with care for the planet.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE COMPOSITION ──────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div style={{ background: C.bg, fontFamily: FONT_SANS }}>
      <PaperGrain />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Editorial />
      <Testimonial />
      <CTASection />
      <Footer />
    </div>
  );
}
