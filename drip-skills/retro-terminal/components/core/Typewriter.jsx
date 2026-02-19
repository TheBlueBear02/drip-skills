// RETRO-TERMINAL SKILL — Typewriter.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The typewriter effect is the most defining motion pattern in this skill.
// It makes the interface feel ALIVE — as if the machine is generating content
// in real time, executing a process you can watch.
//
// CRITICAL IMPLEMENTATION NOTES:
// - This is NOT a CSS animation. CSS-based typewriter effects use `steps()`
//   on `width`, which produces incorrect behavior for variable-width characters.
// - This is pure JS state — characters are appended one by one via setTimeout.
// - The blinking █ cursor appears DURING typing, disappears or goes static after.
// - For multiple lines, chain them — next line starts only after previous completes.
// - Speed ranges: 20-30ms = fast terminal output, 40-60ms = human typing.

import { useState, useEffect } from "react";

export function Typewriter({
  text,
  speed = 40,          // ms per character — 40ms feels natural
  delay = 0,           // ms before typing starts
  cursor = true,       // show blinking cursor during/after typing
  cursorChar = "█",    // block cursor is canonical for terminal
  staticCursor = false,// if true, cursor stays solid (not blinking) when done
  onComplete,          // callback when typing finishes
  style,
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [complete, setComplete] = useState(false);

  // Delay before starting — allows staggered multi-line sequences
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  // Character-by-character appending
  useEffect(() => {
    if (!started || complete) return;
    if (displayed.length >= text.length) {
      setComplete(true);
      onComplete?.();
      return;
    }
    const t = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      speed
    );
    return () => clearTimeout(t);
  }, [started, displayed, text, speed, complete, onComplete]);

  return (
    <span style={{ fontFamily: "'JetBrains Mono', monospace", ...style }}>
      {displayed}
      {/* Cursor logic:
          - During typing: always blinks
          - After typing: blinks unless staticCursor=true
          - If cursor=false: never shows */}
      {cursor && started && (
        <span style={{
          animation: (!complete || !staticCursor) ? "blink 0.7s step-end infinite" : "none",
          opacity: complete && staticCursor ? 0.4 : 1,
          color: "inherit",
        }}>
          {cursorChar}
        </span>
      )}
    </span>
  );
}

// ── MULTI-LINE TYPEWRITER ─────────────────────────────────────────────────────
// For sequences of lines (like boot text or terminal output),
// use this pattern to chain lines sequentially:

export function TypewriterSequence({ lines, speed = 35 }) {
  const [visibleLines, setVisibleLines] = useState(0);

  const handleLineComplete = (index) => {
    // Small pause between lines — feels like the machine processing
    setTimeout(() => setVisibleLines(index + 1), 200);
  };

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {lines.map((line, i) => (
        <div key={i} style={{ lineHeight: 2 }}>
          {i < visibleLines && (
            <Typewriter
              text={line.text}
              speed={speed}
              cursor={i === visibleLines - 1}
              style={{ color: line.color || "#00AA2B" }}
              onComplete={() => i === visibleLines - 1 && handleLineComplete(i)}
            />
          )}
          {i === visibleLines && (
            <Typewriter
              text={line.text}
              speed={speed}
              style={{ color: line.color || "#00AA2B" }}
              onComplete={() => handleLineComplete(i)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// Single line:
// <Typewriter text="SYSTEM ONLINE" speed={40} />
//
// Sequential lines:
// <TypewriterSequence lines={[
//   { text: "$ initializing...", color: "#00FF41" },
//   { text: "  → loading modules", color: "#00AA2B" },
//   { text: "  ✓ ready.", color: "#FFB700" },
// ]} />
