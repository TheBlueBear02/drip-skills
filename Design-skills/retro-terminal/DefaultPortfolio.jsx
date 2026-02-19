// DEFAULT PORTFOLIO — The generic vibe-coded output
// This is what every AI platform produces by default:
// Inter font, purple gradients, rounded corners, white background.
// Technically fine. Visually forgettable.

export default function DefaultPortfolio() {
  const projects = [
    { title: "E-Commerce App", desc: "A full-stack shopping platform built with React and Node.js.", tags: ["React", "Node.js", "MongoDB"] },
    { title: "Task Manager", desc: "Productivity app with drag-and-drop functionality and team collaboration.", tags: ["Vue.js", "Firebase", "Tailwind"] },
    { title: "Weather Dashboard", desc: "Real-time weather data visualization with interactive charts.", tags: ["React", "D3.js", "API"] },
    { title: "Blog Platform", desc: "Content management system with markdown support and SEO optimization.", tags: ["Next.js", "PostgreSQL", "Vercel"] },
  ];

  const skills = ["React", "JavaScript", "TypeScript", "Node.js", "Python", "Figma", "AWS", "Docker"];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#ffffff", color: "#1a1a2e", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 80px", borderBottom: "1px solid #f0f0f0",
        position: "sticky", top: 0, background: "#fff", zIndex: 100,
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
      }}>
        <span style={{ fontSize: 20, fontWeight: 700, color: "#6366f1" }}>Alex Chen</span>
        <div style={{ display: "flex", gap: 32 }}>
          {["About", "Projects", "Skills", "Contact"].map(l => (
            <a key={l} href="#" style={{ fontSize: 14, color: "#64748b", textDecoration: "none", fontWeight: 500 }}>{l}</a>
          ))}
        </div>
        <button style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff", border: "none", padding: "10px 24px",
          borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer"
        }}>Hire Me</button>
      </nav>

      {/* HERO */}
      <section style={{
        padding: "100px 80px",
        background: "linear-gradient(135deg, #f8f7ff 0%, #ede9fe 50%, #f0f9ff 100%)",
        textAlign: "center"
      }}>
        <div style={{
          width: 100, height: 100, borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          margin: "0 auto 24px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 36
        }}>👨‍💻</div>
        <div style={{
          display: "inline-block", background: "#ede9fe", color: "#6366f1",
          padding: "4px 16px", borderRadius: 100, fontSize: 13, fontWeight: 500,
          marginBottom: 20
        }}>Available for work</div>
        <h1 style={{ fontSize: 56, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.1,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>
          Hi, I'm Alex Chen 👋
        </h1>
        <p style={{ fontSize: 20, color: "#64748b", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Full-stack developer passionate about building beautiful web experiences.
          I turn ideas into reality with clean code and creative design.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff",
            border: "none", padding: "14px 32px", borderRadius: 12,
            fontSize: 16, fontWeight: 600, cursor: "pointer",
            boxShadow: "0 4px 15px rgba(99,102,241,0.4)"
          }}>View My Work →</button>
          <button style={{
            background: "#fff", color: "#6366f1", border: "2px solid #e0e7ff",
            padding: "14px 32px", borderRadius: 12, fontSize: 16, fontWeight: 600, cursor: "pointer"
          }}>Download CV</button>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0"
      }}>
        {[["5+", "Years Experience"], ["50+", "Projects Completed"], ["30+", "Happy Clients"]].map(([val, label]) => (
          <div key={label} style={{ padding: "40px", textAlign: "center", borderRight: "1px solid #f0f0f0" }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: "#6366f1", marginBottom: 6 }}>{val}</div>
            <div style={{ fontSize: 14, color: "#94a3b8" }}>{label}</div>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "80px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#6366f1", letterSpacing: "0.1em", marginBottom: 12, textTransform: "uppercase" }}>Portfolio</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>Featured Projects</h2>
          <p style={{ fontSize: 16, color: "#64748b", marginTop: 12 }}>A selection of my recent work</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
          {projects.map((p, i) => (
            <div key={i} style={{
              border: "1px solid #f0f0f0", borderRadius: 16, padding: "28px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              transition: "all 0.2s", cursor: "pointer",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 10px 40px rgba(99,102,241,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ background: "#ede9fe", color: "#6366f1", padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ padding: "80px 80px", background: "#f8f7ff" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#6366f1", letterSpacing: "0.1em", marginBottom: 12, textTransform: "uppercase" }}>Expertise</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>Skills & Technologies</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", maxWidth: 700, margin: "0 auto" }}>
          {skills.map(s => (
            <span key={s} style={{
              background: "#fff", border: "1px solid #e0e7ff", color: "#4f46e5",
              padding: "10px 20px", borderRadius: 100, fontSize: 14, fontWeight: 500,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}>{s}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px 80px", textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#6366f1", letterSpacing: "0.1em", marginBottom: 12, textTransform: "uppercase" }}>Get In Touch</div>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Let's Work Together</h2>
        <p style={{ fontSize: 16, color: "#64748b", marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
          Have a project in mind? I'd love to hear about it.
          Let's create something amazing together.
        </p>
        <div style={{ display: "flex", gap: 16, maxWidth: 480, margin: "0 auto" }}>
          <input placeholder="your@email.com" style={{
            flex: 1, padding: "14px 20px", border: "2px solid #e0e7ff",
            borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit"
          }} />
          <button style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff",
            border: "none", padding: "14px 28px", borderRadius: 12,
            fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap"
          }}>Send Message</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 80px", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 14, color: "#94a3b8" }}>© 2024 Alex Chen. All rights reserved.</span>
        <div style={{ display: "flex", gap: 16 }}>
          {["GitHub", "LinkedIn", "Twitter"].map(s => (
            <a key={s} href="#" style={{ fontSize: 14, color: "#94a3b8", textDecoration: "none" }}>{s}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
