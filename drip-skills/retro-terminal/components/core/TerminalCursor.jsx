// RETRO-TERMINAL SKILL — TerminalCursor.jsx
//
// WHY THIS EXISTS:
// The native browser cursor is a pointer — a relic of the GUI world.
// In a terminal aesthetic, the cursor is a blinking block that marks
// where the machine is "reading" or "writing."
// Replacing the native cursor is one of the highest-impact personality
// details in this skill. It changes how the entire interface FEELS.
//
// IMPORTANT: Mount this once at the ROOT layout level.
// It must be outside any scrollable container to work correctly.
// Set `cursor: none` on the body (done in globals.css) for this to take effect.

import { useState, useEffect } from "react";

export function TerminalCursor() {
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
      // WHY: The cursor is a 12×18px block — the exact proportion of a
      // character cell in a monospace font. It literally IS a character cursor.
      width: 12,
      height: 18,
      background: "#00FF41",

      // Transform centers the cursor on the pointer position
      left: position.x,
      top: position.y,
      transform: "translate(-50%, -50%)",

      // Blink — the heartbeat of the terminal
      // WHY: step-end makes it switch instantly, not fade — authentic behavior
      animation: "blink 1s step-end infinite",

      // Above CRT effects (z-index 9999) but below nothing
      zIndex: 99999,

      // Doesn't interfere with clicks
      pointerEvents: "none",

      // Phosphor glow — it's a light source, not just a shape
      boxShadow: "0 0 8px #00FF4166",

      opacity: visible ? 1 : 0,
      transition: "opacity 100ms",

      // Screen blend — mixes with content below, more authentic
      mixBlendMode: "screen",
    }} />
  );
}
