import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
// These will become tokens/colors.md, tokens/typography.md etc. in the skill
const tokens = {
  colors: {
    bg:         "#080808",       // near-black — the void
    surface:    "#0D0D0D",       // card backgrounds
    surfaceHi:  "#111411",       // elevated surfaces with green tint
    border:     "#1a2e1a",       // subtle green-tinted borders
    borderHi:   "#00FF41",       // phosphor green — primary accent
    primary:    "#00FF41",       // phosphor green — THE color
    primaryDim: "#00AA2B",       // dimmed green for secondary text
    primaryGlow:"#00FF4133",     // glow layer
    amber:      "#FFB700",       // amber warning/highlight accent
    red:        "#FF3333",       // error / danger
    cyan:       "#00FFFF",       // secondary accent
    textPrimary:"#00FF41",       // all primary text is green
    textDim:    "#4a7a4a",       // de-emphasized text
    textMuted:  "#2a4a2a",       // very muted
    scanline:   "#00FF4108",     // scanline overlay
  },
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  },
  motion: {
    fast:   "80ms",
    normal: "150ms",
    slow:   "400ms",
    blink:  "1s",
  }
};

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${tokens.colors.bg};
    color: ${tokens.colors.textPrimary};
    font-family: ${tokens.fonts.mono};
    -webkit-font-smoothing: none;
    cursor: none;
  }

  /* CRT scanlines overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      ${tokens.colors.scanline} 2px,
      ${tokens.colors.scanline} 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  /* CRT vignette */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 60%, #000000cc 100%);
    pointer-events: none;
    z-index: 9998;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${tokens.colors.bg}; }
  ::-webkit-scrollbar-thumb { background: ${tokens.colors.primaryDim}; }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes scandown {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes flicker {
    0%, 100% { opacity: 1; }
    92% { opacity: 1; }
    93% { opacity: 0.8; }
    94% { opacity: 1; }
    96% { opacity: 0.9; }
    97% { opacity: 1; }
  }
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 1px); }
    40% { transform: translate(2px, -1px); }
    60% { transform: translate(-1px, 2px); }
    80% { transform: translate(1px, -2px); }
    100% { transform: translate(0); }
  }
  @keyframes pulse-border {
    0%, 100% { border-color: ${tokens.colors.primaryDim}; box-shadow: 0 0 0px ${tokens.colors.primaryGlow}; }
    50% { border-color: ${tokens.colors.primary}; box-shadow: 0 0 12px ${tokens.colors.primaryGlow}; }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }
  @keyframes boot {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

// ─── CUSTOM CURSOR ────────────────────────────────────────────────────────────
function TerminalCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div style={{
      position: "fixed",
      left: pos.x,
      top: pos.y,
      width: 12,
      height: 18,
      background: tokens.colors.primary,
      transform: "translate(-50%, -50%)",
      zIndex: 99999,
      animation: "blink 1s step-end infinite",
      pointerEvents: "none",
      mixBlendMode: "screen",
    }} />
  );
}

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
function Typewriter({ text, delay = 0, speed = 40, onDone }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) { onDone?.(); return; }
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [started, displayed, text, speed, onDone]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span style={{ animation: "blink 0.7s step-end infinite", fontWeight: 700 }}>█</span>
      )}
    </span>
  );
}

// ─── TERMINAL WINDOW ──────────────────────────────────────────────────────────
function TerminalWindow({ title, children, style, glowing }) {
  return (
    <div style={{
      border: `1px solid ${glowing ? tokens.colors.primary : tokens.colors.border}`,
      background: tokens.colors.surface,
      animation: glowing ? "pulse-border 3s ease-in-out infinite" : undefined,
      boxShadow: glowing ? `0 0 24px ${tokens.colors.primaryGlow}, inset 0 0 24px #00FF4105` : `0 0 0 1px #0a0a0a`,
      ...style,
    }}>
      {/* Title bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        borderBottom: `1px solid ${tokens.colors.border}`,
        background: tokens.colors.surfaceHi,
      }}>
        {["#FF3333","#FFB700","#00FF41"].map((c, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.8 }} />
        ))}
        <span style={{ fontSize: 11, color: tokens.colors.primaryDim, marginLeft: 8, letterSpacing: "0.12em" }}>
          {title}
        </span>
      </div>
      <div style={{ padding: "20px 20px" }}>{children}</div>
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const links = ["./docs", "./pricing", "./changelog", "./github"];
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 40px",
      borderBottom: `1px solid ${tokens.colors.border}`,
      background: tokens.colors.bg,
      position: "sticky",
      top: 0,
      zIndex: 100,
      animation: "flicker 8s infinite",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 10, height: 10,
          background: tokens.colors.primary,
          animation: "blink 1.4s step-end infinite",
        }} />
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: tokens.colors.primary }}>
          TERM//OS
        </span>
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {links.map(l => (
          <a key={l} href="#" style={{
            fontSize: 11,
            color: tokens.colors.primaryDim,
            textDecoration: "none",
            letterSpacing: "0.1em",
            transition: `color ${tokens.motion.normal}`,
          }}
          onMouseEnter={e => e.target.style.color = tokens.colors.primary}
          onMouseLeave={e => e.target.style.color = tokens.colors.primaryDim}
          >{l}</a>
        ))}
      </div>
      <button style={{
        background: "transparent",
        border: `1px solid ${tokens.colors.primary}`,
        color: tokens.colors.primary,
        padding: "6px 18px",
        fontSize: 11,
        letterSpacing: "0.15em",
        cursor: "none",
        transition: `all ${tokens.motion.normal}`,
      }}
      onMouseEnter={e => { e.target.style.background = tokens.colors.primary; e.target.style.color = tokens.colors.bg; }}
      onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = tokens.colors.primary; }}
      >$ CONNECT</button>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);

  return (
    <section style={{
      padding: "80px 40px",
      maxWidth: 1100,
      margin: "0 auto",
      animation: "boot 0.5s ease-out",
    }}>
      {/* system boot text */}
      <div style={{ fontSize: 10, color: tokens.colors.textDim, letterSpacing: "0.08em", marginBottom: 40, lineHeight: 2 }}>
        {["BIOS v2.31 — TERM//OS KERNEL LOADING...", "MEMORY CHECK: 640K OK", "INITIALIZING DISPLAY SUBSYSTEM...", "READY."].map((l, i) => (
          <div key={i} style={{ animation: `fadeInUp 0.3s ease-out ${i * 0.1}s both` }}>{l}</div>
        ))}
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, color: tokens.colors.amber, letterSpacing: "0.2em", marginBottom: 16 }}>
          ┌── SYSTEM MESSAGE ──────────────────────────────┐
        </div>
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 64px)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: tokens.colors.primary,
          textShadow: `0 0 40px ${tokens.colors.primaryGlow}, 0 0 80px ${tokens.colors.primaryGlow}`,
          marginBottom: 8,
          animation: "flicker 12s infinite",
        }}>
          <Typewriter text="BUILD INTERFACES" speed={35} onDone={() => setLine1Done(true)} />
        </h1>
        {line1Done && (
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: tokens.colors.textDim,
            marginBottom: 8,
          }}>
            <Typewriter text="THAT REMEMBER" speed={35} onDone={() => setLine2Done(true)} />
          </h1>
        )}
        {line2Done && (
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: tokens.colors.textDim,
          }}>
            <Typewriter text="WHERE THEY CAME FROM." speed={35} />
          </h1>
        )}
        <div style={{ fontSize: 11, color: tokens.colors.amber, letterSpacing: "0.2em", marginTop: 16 }}>
          └────────────────────────────────────────────────┘
        </div>
      </div>

      <p style={{
        fontSize: 13,
        color: tokens.colors.primaryDim,
        maxWidth: 560,
        lineHeight: 1.8,
        letterSpacing: "0.04em",
        marginBottom: 48,
        animation: "fadeInUp 0.6s ease-out 1.5s both",
      }}>
        &gt; Design skills for AI agents. Drop a skill folder into your project.<br />
        &gt; Your agent reads it. Every component it builds from that point on<br />
        &gt; follows the same visual language. Permanently.
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeInUp 0.6s ease-out 2s both" }}>
        <button style={{
          background: tokens.colors.primary,
          border: "none",
          color: tokens.colors.bg,
          padding: "14px 32px",
          fontSize: 12,
          fontFamily: tokens.fonts.mono,
          fontWeight: 700,
          letterSpacing: "0.15em",
          cursor: "none",
          transition: `all ${tokens.motion.normal}`,
          boxShadow: `0 0 24px ${tokens.colors.primaryGlow}`,
        }}
        onMouseEnter={e => { e.target.style.boxShadow = `0 0 40px ${tokens.colors.primary}`; e.target.style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { e.target.style.boxShadow = `0 0 24px ${tokens.colors.primaryGlow}`; e.target.style.transform = "none"; }}
        >$ BROWSE SKILLS →</button>

        <button style={{
          background: "transparent",
          border: `1px solid ${tokens.colors.border}`,
          color: tokens.colors.primaryDim,
          padding: "14px 32px",
          fontSize: 12,
          fontFamily: tokens.fonts.mono,
          letterSpacing: "0.15em",
          cursor: "none",
          transition: `all ${tokens.motion.normal}`,
        }}
        onMouseEnter={e => { e.target.style.borderColor = tokens.colors.primaryDim; e.target.style.color = tokens.colors.primary; }}
        onMouseLeave={e => { e.target.style.borderColor = tokens.colors.border; e.target.style.color = tokens.colors.primaryDim; }}
        >$ READ DOCS</button>
      </div>
    </section>
  );
}

// ─── LIVE TERMINAL DEMO ───────────────────────────────────────────────────────
function LiveDemo() {
  const lines = [
    { text: "$ agent apply-skill retro-terminal", delay: 0, color: tokens.colors.primary },
    { text: "  → Reading SKILL.md...", delay: 600, color: tokens.colors.primaryDim },
    { text: "  → Loading 6 token files...", delay: 1200, color: tokens.colors.primaryDim },
    { text: "  → Indexing 24 components...", delay: 1800, color: tokens.colors.primaryDim },
    { text: "  → Registering Tailwind config...", delay: 2400, color: tokens.colors.primaryDim },
    { text: "  ✓ Skill active. Agent is now design-aware.", delay: 3200, color: tokens.colors.amber },
    { text: "", delay: 3800, color: tokens.colors.primaryDim },
    { text: "$ agent build landing-page", delay: 4000, color: tokens.colors.primary },
    { text: "  → Applying retro-terminal philosophy...", delay: 4600, color: tokens.colors.primaryDim },
    { text: "  → Components generated: 12", delay: 5200, color: tokens.colors.primaryDim },
    { text: "  ✓ Build complete. 0 style violations.", delay: 5900, color: tokens.colors.amber },
  ];

  const [visible, setVisible] = useState([]);
  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => setVisible(v => [...v, i]), line.delay + 500);
    });
  }, []);

  return (
    <section style={{ padding: "0 40px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <TerminalWindow title="agent@project:~/app — bash" glowing>
        <div style={{ fontFamily: tokens.fonts.mono, fontSize: 12, lineHeight: 2.2 }}>
          {lines.map((line, i) => (
            <div key={i} style={{
              color: line.color,
              opacity: visible.includes(i) ? 1 : 0,
              transform: visible.includes(i) ? "none" : "translateY(4px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              letterSpacing: "0.05em",
            }}>
              {line.text}
            </div>
          ))}
          <span style={{ animation: "blink 1s step-end infinite", color: tokens.colors.primary }}>█</span>
        </div>
      </TerminalWindow>
    </section>
  );
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { label: "SKILLS AVAILABLE", value: "12" },
    { label: "COMPONENTS PER SKILL", value: "24+" },
    { label: "FRAMEWORKS", value: "React" },
    { label: "AGENT COMPATIBLE", value: "100%" },
  ];
  return (
    <div style={{
      borderTop: `1px solid ${tokens.colors.border}`,
      borderBottom: `1px solid ${tokens.colors.border}`,
      display: "grid",
      gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      margin: "0 0 80px",
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: "32px 40px",
          borderRight: i < stats.length - 1 ? `1px solid ${tokens.colors.border}` : "none",
        }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: tokens.colors.primary, letterSpacing: "-0.02em", marginBottom: 6, textShadow: `0 0 20px ${tokens.colors.primaryGlow}` }}>
            {s.value}
          </div>
          <div style={{ fontSize: 9, color: tokens.colors.textDim, letterSpacing: "0.2em" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ─── SKILL CARDS ──────────────────────────────────────────────────────────────
function SkillGrid() {
  const skills = [
    { name: "retro-terminal", tag: "DARK", desc: "Phosphor green on void black. CRT scanlines. The original.", status: "STABLE" },
    { name: "brutalist", tag: "AGGRESSIVE", desc: "Raw borders. No radius. No apologies. Pure structure.", status: "STABLE" },
    { name: "glassmorphism", tag: "LIGHT", desc: "Frosted layers. Depth through blur. Soft luminosity.", status: "BETA" },
    { name: "swiss-grid", tag: "EDITORIAL", desc: "International typographic style. Grid discipline. Red accents.", status: "STABLE" },
    { name: "bento", tag: "MODULAR", desc: "Variable grid cells. Dense information. Modern dashboard.", status: "BETA" },
    { name: "neo-brutalist", tag: "BOLD", desc: "Hard shadows. Thick borders. Color blocks. Loud by design.", status: "SOON" },
  ];

  return (
    <section style={{ padding: "0 40px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ fontSize: 10, color: tokens.colors.textDim, letterSpacing: "0.2em", marginBottom: 40 }}>
        &gt; ls ./skills/ — {skills.length} RESULTS
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: tokens.colors.border }}>
        {skills.map((s, i) => (
          <div key={i}
            style={{
              background: tokens.colors.surface,
              padding: "28px 28px",
              cursor: s.status !== "SOON" ? "none" : "default",
              transition: `all ${tokens.motion.slow}`,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              if (s.status === "SOON") return;
              e.currentTarget.style.background = tokens.colors.surfaceHi;
              e.currentTarget.style.boxShadow = `inset 0 0 40px #00FF4108`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = tokens.colors.surface;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <span style={{
                fontSize: 9, letterSpacing: "0.2em",
                color: s.status === "STABLE" ? tokens.colors.primary : s.status === "BETA" ? tokens.colors.amber : tokens.colors.textDim,
                border: `1px solid currentColor`,
                padding: "2px 8px",
              }}>{s.status}</span>
              <span style={{ fontSize: 9, color: tokens.colors.textMuted, letterSpacing: "0.15em" }}>{s.tag}</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: tokens.colors.primary, marginBottom: 10, letterSpacing: "0.05em" }}>
              ./{s.name}
            </div>
            <div style={{ fontSize: 11, color: tokens.colors.textDim, lineHeight: 1.7, letterSpacing: "0.03em" }}>{s.desc}</div>
            {s.status !== "SOON" && (
              <div style={{ marginTop: 20, fontSize: 10, color: tokens.colors.primaryDim, letterSpacing: "0.1em" }}>
                $ download →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: "01", cmd: "$ browse skills", desc: "Pick a visual aesthetic from the library. Each skill ships with a live preview so you see exactly what your agent will build." },
    { num: "02", cmd: "$ download ./skill", desc: "Download the skill folder. Drop it into the root of your project. One folder, complete design system." },
    { num: "03", cmd: "$ tell your agent", desc: 'Say "use the retro-terminal skill" and your agent reads the philosophy, tokens, and component patterns automatically.' },
    { num: "04", cmd: "$ ship it", desc: "Every component your agent builds from now on — today and months from now — matches the skill faithfully." },
  ];

  return (
    <section style={{ padding: "80px 40px", borderTop: `1px solid ${tokens.colors.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontSize: 10, color: tokens.colors.textDim, letterSpacing: "0.2em", marginBottom: 60 }}>
          &gt; cat HOW_IT_WORKS.md
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: tokens.colors.border }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: tokens.colors.bg, padding: "40px 40px" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: tokens.colors.textMuted, lineHeight: 1, marginBottom: 20 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: tokens.colors.primary, marginBottom: 16, letterSpacing: "0.05em" }}>{s.cmd}</div>
              <div style={{ fontSize: 12, color: tokens.colors.primaryDim, lineHeight: 1.8, letterSpacing: "0.03em" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${tokens.colors.border}`,
      padding: "40px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <div style={{ fontSize: 10, color: tokens.colors.textMuted, letterSpacing: "0.1em" }}>
        TERM//OS DESIGN SKILLS — ALL SYSTEMS OPERATIONAL
      </div>
      <div style={{ fontSize: 10, color: tokens.colors.textMuted, letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 6, height: 6, background: tokens.colors.primary, animation: "blink 1.4s step-end infinite" }} />
        UPTIME: 99.99%
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function RetroTerminalPage() {
  return (
    <>
      <style>{globalStyles}</style>
      <TerminalCursor />
      <div style={{ minHeight: "100vh", background: tokens.colors.bg, animation: "flicker 15s infinite" }}>
        <Nav />
        <Hero />
        <LiveDemo />
        <StatsBar />
        <SkillGrid />
        <HowItWorks />
        <Footer />
      </div>
    </>
  );
}
