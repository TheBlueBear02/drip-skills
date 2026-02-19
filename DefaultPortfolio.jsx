import { useState, useEffect } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const tokens = {
  colors: {
    bg: "#080808",
    surface: "#0D0D0D",
    surfaceHi: "#111411",
    border: "#1a2e1a",
    borderHi: "#00FF41",
    primary: "#00FF41",
    primaryDim: "#00AA2B",
    primaryMuted: "#4a7a4a",
    primaryGhost: "#2a4a2a",
    primaryGlow: "#00FF4133",
    amber: "#FFB700",
    cyan: "#00FFFF",
    red: "#FF3333",
    scanline: "#00FF4108",
  },
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  },
};

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${tokens.colors.bg};
    color: ${tokens.colors.primary};
    font-family: ${tokens.fonts.mono};
    -webkit-font-smoothing: none;
    cursor: none;
    min-height: 100vh;
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

  @keyframes pulse-border {
    0%, 100% { border-color: ${tokens.colors.primaryDim}; box-shadow: 0 0 0px ${tokens.colors.primaryGlow}; }
    50% { border-color: ${tokens.colors.primary}; box-shadow: 0 0 12px ${tokens.colors.primaryGlow}; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// ─── TERMINAL CURSOR ────────────────────────────────────────────────────────
function TerminalCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <div style={{
      position: "fixed",
      width: 12,
      height: 18,
      background: tokens.colors.primary,
      left: position.x,
      top: position.y,
      transform: "translate(-50%, -50%)",
      animation: "blink 1s step-end infinite",
      zIndex: 99999,
      pointerEvents: "none",
      boxShadow: "0 0 8px #00FF4166",
      opacity: visible ? 1 : 0,
      transition: "opacity 100ms",
      mixBlendMode: "screen",
    }} />
  );
}

// ─── BLINKING CURSOR BLOCK ───────────────────────────────────────────────────
function BlinkingCursor() {
  return (
    <span style={{
      display: "inline-block",
      width: "0.6em",
      height: "1em",
      background: tokens.colors.primary,
      animation: "blink 1s step-end infinite",
      marginLeft: "0.2em",
      verticalAlign: "baseline",
    }} />
  );
}

export default function DefaultPortfolio() {
  const projects = [
    { title: "E-Commerce App", desc: "A full-stack shopping platform built with React and Node.js.", tags: ["React", "Node.js", "MongoDB"] },
    { title: "Task Manager", desc: "Productivity app with drag-and-drop functionality and team collaboration.", tags: ["Vue.js", "Firebase", "Tailwind"] },
    { title: "Weather Dashboard", desc: "Real-time weather data visualization with interactive charts.", tags: ["React", "D3.js", "API"] },
    { title: "Blog Platform", desc: "Content management system with markdown support and SEO optimization.", tags: ["Next.js", "PostgreSQL", "Vercel"] },
  ];

  const skills = ["React", "JavaScript", "TypeScript", "Node.js", "Python", "Figma", "AWS", "Docker"];

  return (
    <>
      <style>{globalStyles}</style>
      <TerminalCursor />
      <div style={{
        fontFamily: tokens.fonts.mono,
        background: tokens.colors.bg,
        color: tokens.colors.primary,
        minHeight: "100vh",
      }}>

        {/* NAV */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          borderBottom: `1px solid ${tokens.colors.border}`,
          position: "sticky",
          top: 0,
          background: tokens.colors.bg,
          zIndex: 100,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 10,
              height: 10,
              background: tokens.colors.primary,
              animation: "blink 1.4s step-end infinite",
            }} />
            <span style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: tokens.colors.primary,
            }}>
              ALEX CHEN
            </span>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {["./about", "./projects", "./skills", "./contact"].map(l => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: 11,
                  color: tokens.colors.primaryDim,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  transition: "color 150ms",
                }}
                onMouseEnter={e => e.target.style.color = tokens.colors.primary}
                onMouseLeave={e => e.target.style.color = tokens.colors.primaryDim}
              >
                {l}
              </a>
            ))}
          </div>
          <button
            style={{
              background: "transparent",
              border: `1px solid ${tokens.colors.primary}`,
              color: tokens.colors.primary,
              padding: "6px 18px",
              fontSize: 11,
              letterSpacing: "0.15em",
              cursor: "none",
              borderRadius: 0,
              transition: "background 150ms, color 150ms, box-shadow 150ms",
            }}
            onMouseEnter={e => {
              e.target.style.background = tokens.colors.primary;
              e.target.style.color = tokens.colors.bg;
              e.target.style.boxShadow = `0 0 12px ${tokens.colors.primaryGlow}`;
            }}
            onMouseLeave={e => {
              e.target.style.background = "transparent";
              e.target.style.color = tokens.colors.primary;
              e.target.style.boxShadow = "none";
            }}
          >
            $ HIRE ME
          </button>
        </nav>

        {/* HERO */}
        <section style={{
          padding: "80px 40px",
          textAlign: "center",
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          <div style={{
            width: 100,
            height: 100,
            borderRadius: 0,
            background: tokens.colors.surface,
            border: `1px solid ${tokens.colors.border}`,
            margin: "0 auto 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            boxShadow: `0 0 24px ${tokens.colors.primaryGlow}`,
          }}>
            👨‍💻
          </div>
          <div style={{
            display: "inline-block",
            background: tokens.colors.surface,
            border: `1px solid ${tokens.colors.border}`,
            color: tokens.colors.primaryDim,
            padding: "4px 16px",
            borderRadius: 0,
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.12em",
            marginBottom: 20,
          }}>
            AVAILABLE FOR WORK
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 800,
            margin: "0 0 16px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: tokens.colors.primary,
            textShadow: `0 0 40px ${tokens.colors.primaryGlow}, 0 0 80px ${tokens.colors.primaryGlow}`,
          }}>
            HI, I'M ALEX CHEN 👋<BlinkingCursor />
          </h1>
          <p style={{
            fontSize: 13,
            color: tokens.colors.primaryDim,
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.8,
            letterSpacing: "0.04em",
          }}>
            Full-stack developer passionate about building beautiful web experiences.
            I turn ideas into reality with clean code and creative design.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: tokens.colors.primary,
                border: "none",
                color: tokens.colors.bg,
                padding: "14px 32px",
                borderRadius: 0,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                cursor: "none",
                transition: "box-shadow 150ms",
                boxShadow: `0 0 24px ${tokens.colors.primaryGlow}`,
                fontFamily: tokens.fonts.mono,
              }}
              onMouseEnter={e => {
                e.target.style.boxShadow = `0 0 40px ${tokens.colors.primary}`;
              }}
              onMouseLeave={e => {
                e.target.style.boxShadow = `0 0 24px ${tokens.colors.primaryGlow}`;
              }}
            >
              $ VIEW MY WORK →
            </button>
            <button
              style={{
                background: "transparent",
                border: `1px solid ${tokens.colors.border}`,
                color: tokens.colors.primaryDim,
                padding: "14px 32px",
                borderRadius: 0,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.15em",
                cursor: "none",
                transition: "border-color 150ms, color 150ms",
                fontFamily: tokens.fonts.mono,
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = tokens.colors.primaryDim;
                e.target.style.color = tokens.colors.primary;
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = tokens.colors.border;
                e.target.style.color = tokens.colors.primaryDim;
              }}
            >
              $ DOWNLOAD CV
            </button>
          </div>
        </section>

        {/* STATS */}
        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: `1px solid ${tokens.colors.border}`,
          borderBottom: `1px solid ${tokens.colors.border}`,
        }}>
          {[["5+", "YEARS EXPERIENCE"], ["50+", "PROJECTS COMPLETED"], ["30+", "HAPPY CLIENTS"]].map(([val, label], i) => (
            <div
              key={label}
              style={{
                padding: "40px",
                textAlign: "center",
                borderRight: i < 2 ? `1px solid ${tokens.colors.border}` : "none",
              }}
            >
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: tokens.colors.primary,
                marginBottom: 6,
                letterSpacing: "-0.02em",
                textShadow: `0 0 20px ${tokens.colors.primaryGlow}`,
              }}>
                {val}
              </div>
              <div style={{
                fontSize: 11,
                color: tokens.colors.primaryMuted,
                letterSpacing: "0.12em",
              }}>
                {label}
              </div>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section style={{ padding: "80px 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{
              fontSize: 10,
              fontWeight: 400,
              color: tokens.colors.primaryMuted,
              letterSpacing: "0.2em",
              marginBottom: 12,
            }}>
              &gt; ls ./portfolio/ — {projects.length} RESULTS
            </div>
            <h2 style={{
              fontSize: 48,
              fontWeight: 800,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
              color: tokens.colors.primary,
              textShadow: `0 0 30px ${tokens.colors.primaryGlow}, 0 0 60px ${tokens.colors.primaryGlow}`,
            }}>
              FEATURED PROJECTS
            </h2>
            <p style={{
              fontSize: 13,
              color: tokens.colors.primaryDim,
              marginTop: 12,
              letterSpacing: "0.04em",
            }}>
              A selection of my recent work
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            background: tokens.colors.border,
            maxWidth: 1000,
            margin: "0 auto",
          }}>
            {projects.map((p, i) => (
              <div
                key={i}
                style={{
                  background: tokens.colors.surface,
                  border: `1px solid ${tokens.colors.border}`,
                  borderRadius: 0,
                  padding: "28px",
                  cursor: "none",
                  transition: "background 200ms, box-shadow 200ms",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = tokens.colors.surfaceHi;
                  e.currentTarget.style.boxShadow = `inset 0 0 40px ${tokens.colors.primaryGlow}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = tokens.colors.surface;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 0,
                  background: tokens.colors.surfaceHi,
                  border: `1px solid ${tokens.colors.border}`,
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}>
                  ▣
                </div>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: tokens.colors.primary,
                  letterSpacing: "0.05em",
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: 13,
                  color: tokens.colors.primaryDim,
                  lineHeight: 1.8,
                  marginBottom: 16,
                  letterSpacing: "0.04em",
                }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tags.map(t => (
                    <span
                      key={t}
                      style={{
                        background: tokens.colors.surfaceHi,
                        border: `1px solid ${tokens.colors.border}`,
                        color: tokens.colors.primaryDim,
                        padding: "4px 12px",
                        borderRadius: 0,
                        fontSize: 10,
                        fontWeight: 400,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section style={{
          padding: "80px 40px",
          background: tokens.colors.surface,
          borderTop: `1px solid ${tokens.colors.border}`,
          borderBottom: `1px solid ${tokens.colors.border}`,
        }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{
              fontSize: 10,
              fontWeight: 400,
              color: tokens.colors.primaryMuted,
              letterSpacing: "0.2em",
              marginBottom: 12,
            }}>
              &gt; cat ./skills.txt
            </div>
            <h2 style={{
              fontSize: 48,
              fontWeight: 800,
              margin: 0,
              letterSpacing: "-0.02em",
              color: tokens.colors.primary,
              textShadow: `0 0 30px ${tokens.colors.primaryGlow}, 0 0 60px ${tokens.colors.primaryGlow}`,
            }}>
              SKILLS & TECHNOLOGIES
            </h2>
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            maxWidth: 700,
            margin: "0 auto",
          }}>
            {skills.map(s => (
              <span
                key={s}
                style={{
                  background: tokens.colors.bg,
                  border: `1px solid ${tokens.colors.border}`,
                  color: tokens.colors.primaryDim,
                  padding: "10px 20px",
                  borderRadius: 0,
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ padding: "80px 40px", textAlign: "center" }}>
          <div style={{
            fontSize: 10,
            fontWeight: 400,
            color: tokens.colors.primaryMuted,
            letterSpacing: "0.2em",
            marginBottom: 12,
          }}>
            &gt; echo "GET IN TOUCH"
          </div>
          <h2 style={{
            fontSize: 48,
            fontWeight: 800,
            marginBottom: 16,
            letterSpacing: "-0.02em",
            color: tokens.colors.primary,
            textShadow: `0 0 30px ${tokens.colors.primaryGlow}, 0 0 60px ${tokens.colors.primaryGlow}`,
          }}>
            LET'S WORK TOGETHER
          </h2>
          <p style={{
            fontSize: 13,
            color: tokens.colors.primaryDim,
            marginBottom: 40,
            maxWidth: 500,
            margin: "0 auto 40px",
            lineHeight: 1.8,
            letterSpacing: "0.04em",
          }}>
            Have a project in mind? I'd love to hear about it.
            Let's create something amazing together.
          </p>
          <div style={{ display: "flex", gap: 16, maxWidth: 480, margin: "0 auto" }}>
            <input
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "14px 20px",
                border: `1px solid ${tokens.colors.border}`,
                borderRadius: 0,
                fontSize: 13,
                outline: "none",
                fontFamily: tokens.fonts.mono,
                background: tokens.colors.surface,
                color: tokens.colors.primary,
                letterSpacing: "0.04em",
              }}
              onFocus={e => {
                e.target.style.borderColor = tokens.colors.primary;
                e.target.style.boxShadow = `0 0 12px ${tokens.colors.primaryGlow}`;
              }}
              onBlur={e => {
                e.target.style.borderColor = tokens.colors.border;
                e.target.style.boxShadow = "none";
              }}
            />
            <button
              style={{
                background: tokens.colors.primary,
                border: "none",
                color: tokens.colors.bg,
                padding: "14px 28px",
                borderRadius: 0,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                cursor: "none",
                whiteSpace: "nowrap",
                transition: "box-shadow 150ms",
                boxShadow: `0 0 12px ${tokens.colors.primaryGlow}`,
                fontFamily: tokens.fonts.mono,
              }}
              onMouseEnter={e => {
                e.target.style.boxShadow = `0 0 24px ${tokens.colors.primary}`;
              }}
              onMouseLeave={e => {
                e.target.style.boxShadow = `0 0 12px ${tokens.colors.primaryGlow}`;
              }}
            >
              $ SEND MESSAGE
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          padding: "32px 40px",
          borderTop: `1px solid ${tokens.colors.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{
            fontSize: 10,
            color: tokens.colors.primaryGhost,
            letterSpacing: "0.1em",
          }}>
            © 2024 ALEX CHEN. ALL RIGHTS RESERVED.
          </span>
          <div style={{ display: "flex", gap: 16 }}>
            {["./github", "./linkedin", "./twitter"].map(s => (
              <a
                key={s}
                href="#"
                style={{
                  fontSize: 11,
                  color: tokens.colors.primaryDim,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  transition: "color 150ms",
                }}
                onMouseEnter={e => e.target.style.color = tokens.colors.primary}
                onMouseLeave={e => e.target.style.color = tokens.colors.primaryDim}
              >
                {s}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
