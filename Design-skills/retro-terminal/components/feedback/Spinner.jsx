// RETRO-TERMINAL SKILL — Spinner.jsx + ProgressBar.jsx
//
// WHY THESE LOOK THE WAY THEY DO:
// Loading states in a terminal are text-based — the machine tells you what's happening.
// Spinners use ASCII rotation characters. Progress bars use block characters.
// These aren't "designed" — they ARE the terminal's native loading vocabulary.

import { useState, useEffect } from "react";

// ── SPINNER ───────────────────────────────────────────────────────────────────
// Uses ASCII spinner frames — the authentic terminal loading indicator.
// WHY: A CSS spinning circle would break the aesthetic. Terminals don't have circles.

const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
// Alternative ASCII frames for environments without braille support:
const ASCII_FRAMES = ["|", "/", "-", "\\"];

export function Spinner({
  label = "PROCESSING",
  size = "md",        // "sm" | "md" | "lg"
  ascii = false,      // use ASCII frames instead of braille
}) {
  const [frame, setFrame] = useState(0);
  const frames = ascii ? ASCII_FRAMES : SPINNER_FRAMES;

  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % frames.length), 80);
    return () => clearInterval(t);
  }, [frames.length]);

  const sizes = {
    sm: { fontSize: 11, gap: 8 },
    md: { fontSize: 13, gap: 10 },
    lg: { fontSize: 16, gap: 12 },
  };

  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: sizes[size].gap,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: sizes[size].fontSize,
      color: "#00FF41",
      letterSpacing: "0.1em",
    }}>
      <span style={{ color: "#00FF41", minWidth: "1ch", textAlign: "center" }}>
        {frames[frame]}
      </span>
      {label && (
        <span style={{ color: "#00AA2B" }}>
          {label.toUpperCase()}
          <span style={{ animation: "blink 0.7s step-end infinite" }}>_</span>
        </span>
      )}
    </div>
  );
}

// ── PROGRESS BAR ─────────────────────────────────────────────────────────────
// Block-character progress bar — the terminal's native progress indicator.
// WHY: `█` and `░` are the authentic progress characters from DOS/terminal UIs.
// The percentage counter to the right mirrors how terminals report progress.

export function ProgressBar({
  value = 0,          // 0–100
  label,
  showPercent = true,
  width = 30,         // number of character cells wide
  animated = true,    // animate the fill on mount
}) {
  const [displayed, setDisplayed] = useState(animated ? 0 : value);

  useEffect(() => {
    if (!animated) { setDisplayed(value); return; }
    // Animate fill from current to target
    const start = displayed;
    const diff = value - start;
    const duration = 600;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayed(Math.round(start + diff * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);

  const filled = Math.round((displayed / 100) * width);
  const empty = width - filled;

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {label && (
        <div style={{
          fontSize: 10,
          color: "#4a7a4a",
          letterSpacing: "0.15em",
          marginBottom: 6,
        }}>
          {label.toUpperCase()}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Bar — block characters */}
        <span style={{
          fontSize: 13,
          color: "#00FF41",
          letterSpacing: 0,
          textShadow: "0 0 8px #00FF4133",
        }}>
          {"█".repeat(filled)}
          <span style={{ color: "#1a2e1a" }}>{"░".repeat(empty)}</span>
        </span>

        {/* Percentage */}
        {showPercent && (
          <span style={{
            fontSize: 11,
            color: displayed === 100 ? "#00FF41" : "#00AA2B",
            minWidth: "4ch",
            textAlign: "right",
            letterSpacing: "0.05em",
          }}>
            {displayed}%
          </span>
        )}
      </div>
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Spinner label="LOADING MODULES" />
// <Spinner ascii size="sm" label="WAIT" />
//
// <ProgressBar value={72} label="Upload Progress" />
// <ProgressBar value={100} label="Install Complete" />
