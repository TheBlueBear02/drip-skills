/** @type {import('tailwindcss').Config} */

// RETRO-TERMINAL SKILL — Tailwind Config Extension
// This file extends your project's Tailwind config with all skill tokens.
// Merge this into your existing tailwind.config.js — do not replace it.

module.exports = {
  theme: {
    extend: {
      // ── COLORS ─────────────────────────────────────────────────────────────
      // All colors reference CSS variables defined in globals.css.
      // This allows dark/light mode overrides without changing class names.
      colors: {
        terminal: {
          // Backgrounds
          bg:         "var(--color-bg)",         // #080808 — the void
          surface:    "var(--color-surface)",     // #0D0D0D — panels, cards
          "surface-hi": "var(--color-surface-hi)", // #111411 — elevated surfaces

          // Borders
          border:     "var(--color-border)",      // #1a2e1a — default borders
          hi:         "var(--color-border-hi)",   // #00FF41 — active borders

          // Phosphor green
          primary:    "var(--color-primary)",     // #00FF41 — THE color
          dim:        "var(--color-primary-dim)", // #00AA2B — secondary text
          muted:      "var(--color-primary-muted)", // #4a7a4a — de-emphasized
          ghost:      "var(--color-primary-ghost)", // #2a4a2a — disabled/meta

          // Accents (use sparingly)
          amber:      "var(--color-amber)",       // #FFB700 — warnings, decoration
          cyan:       "var(--color-cyan)",        // #00FFFF — secondary accent
          red:        "var(--color-red)",         // #FF3333 — errors only
        },
      },

      // ── FONTS ──────────────────────────────────────────────────────────────
      fontFamily: {
        terminal: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
      },

      // ── FONT SIZES ─────────────────────────────────────────────────────────
      fontSize: {
        "micro":   ["9px",  { lineHeight: "1.4", letterSpacing: "0.2em" }],
        "label":   ["10px", { lineHeight: "1.5", letterSpacing: "0.2em" }],
        "caption": ["11px", { lineHeight: "1.6", letterSpacing: "0.12em" }],
        "body":    ["13px", { lineHeight: "1.8", letterSpacing: "0.04em" }],
      },

      // ── SPACING ────────────────────────────────────────────────────────────
      maxWidth: {
        content: "1100px",
        narrow:  "680px",
        wide:    "1400px",
      },

      // ── BORDER RADIUS ──────────────────────────────────────────────────────
      // Explicitly defined to make the 0px rule clear and enforced.
      borderRadius: {
        none:    "0px",
        DEFAULT: "0px",  // Override Tailwind's default — nothing rounds here
        sm:      "0px",
        md:      "0px",
        lg:      "0px",
        xl:      "0px",
        full:    "0px",  // Even 'rounded-full' gives 0 in this skill
      },

      // ── BOX SHADOWS (GLOWS) ────────────────────────────────────────────────
      boxShadow: {
        "glow-xs": "0 0 6px var(--color-primary-glow)",
        "glow-sm": "0 0 12px var(--color-primary-glow)",
        "glow-md": "0 0 24px var(--color-primary-glow)",
        "glow-lg": "0 0 40px var(--color-primary-glow), 0 0 80px var(--color-primary-glow-soft)",
        "glow-xl": "0 0 60px var(--color-primary-glow-hi), 0 0 120px var(--color-primary-glow)",
        "glow-inner": "inset 0 0 24px var(--color-primary-glow-subtle)",
        "glow-amber": "0 0 12px var(--color-amber-glow)",
        "glow-red":   "0 0 12px var(--color-red-glow)",
      },

      // ── ANIMATIONS ─────────────────────────────────────────────────────────
      animation: {
        "blink":        "blink 1s step-end infinite",
        "blink-slow":   "blink 1.4s step-end infinite",
        "flicker":      "flicker 10s infinite",
        "flicker-fast": "flicker 6s infinite",
        "pulse-border": "pulse-border 3s ease-in-out infinite",
        "pulse-glow":   "pulse-glow 3s ease-in-out infinite",
        "boot":         "boot 0.5s ease-out both",
        "fade-up":      "fadeInUp 0.4s ease-out both",
        "scandown":     "scandown 8s linear infinite",
        "glitch":       "glitch 0.3s ease-in-out",
      },

      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.85" },
          "94%": { opacity: "1" },
          "96%": { opacity: "0.92" },
          "97%": { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-border": {
          "0%, 100%": { borderColor: "var(--color-primary-dim)", boxShadow: "0 0 0px var(--color-primary-glow)" },
          "50%":       { borderColor: "var(--color-primary)",     boxShadow: "0 0 14px var(--color-primary-glow)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 12px var(--color-primary-glow)" },
          "50%":       { boxShadow: "0 0 24px var(--color-primary-glow-hi)" },
        },
        boot: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        scandown: {
          from: { transform: "translateY(-100%)" },
          to:   { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%":   { transform: "translate(0)" },
          "20%":  { transform: "translate(-2px, 1px)" },
          "40%":  { transform: "translate(2px, -1px)" },
          "60%":  { transform: "translate(-1px, 2px)" },
          "80%":  { transform: "translate(1px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
};
