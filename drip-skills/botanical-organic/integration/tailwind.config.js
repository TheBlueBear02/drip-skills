/** @type {import('tailwindcss').Config} */

// BOTANICAL ORGANIC SKILL — Tailwind Config Extension
// Merge theme.extend into your existing tailwind.config.js

module.exports = {
  theme: {
    extend: {
      // ── COLORS ────────────────────────────────────────────────────────────
      colors: {
        botanical: {
          bg:          "#F9F8F4",
          fg:          "#2D3A31",
          primary:     "#8C9A84",
          secondary:   "#DCCFC2",
          border:      "#E6E2DA",
          interactive: "#C27B66",
          surface:     "#FFFFFF",
        },
      },

      // ── FONTS ─────────────────────────────────────────────────────────────
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Source Sans 3", "system-ui", "sans-serif"],
      },

      // ── SHADOWS — Green-tinted, diffused, soft ────────────────────────────
      boxShadow: {
        "botanical-xs":  "0 2px 4px rgba(45,58,49,0.04)",
        "botanical-sm":  "0 4px 6px rgba(45,58,49,0.05)",
        "botanical-md":  "0 10px 15px rgba(45,58,49,0.06)",
        "botanical-lg":  "0 20px 40px rgba(45,58,49,0.08)",
        "botanical-xl":  "0 25px 50px rgba(45,58,49,0.12)",
        "botanical-2xl": "0 40px 80px rgba(45,58,49,0.15)",
      },

      // ── BORDER RADIUS ──────────────────────────────────────────────────────
      borderRadius: {
        sm:   "12px",
        md:   "20px",
        "3xl": "24px",
        "4xl": "32px",
        full:  "9999px",
      },

      // ── ANIMATIONS ────────────────────────────────────────────────────────
      animation: {
        "botanical-float":    "botanical-float 6s ease-in-out infinite",
        "botanical-breathe":  "botanical-breathe 4s ease-in-out infinite",
        "botanical-fade-up":  "botanical-fade-up 0.6s ease-out both",
      },

      keyframes: {
        "botanical-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%":       { transform: "translateY(-8px) rotate(1deg)" },
        },
        "botanical-breathe": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%":       { transform: "scale(1.02)", opacity: "0.85" },
        },
        "botanical-fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },

      // ── TRANSITION DURATIONS ──────────────────────────────────────────────
      transitionDuration: {
        fast:     "300ms",
        standard: "500ms",
        slow:     "700ms",
        dramatic: "1000ms",
      },

      // ── TIMING FUNCTIONS ──────────────────────────────────────────────────
      transitionTimingFunction: {
        botanical: "cubic-bezier(0.0, 0.0, 0.2, 1)", // ease-out natural
      },
    },
  },
  plugins: [],
};
