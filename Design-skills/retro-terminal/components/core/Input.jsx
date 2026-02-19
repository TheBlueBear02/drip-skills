// RETRO-TERMINAL SKILL — Input.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// A terminal input is a command line. The prompt prefix (>) signals that
// the machine is ready to receive input. The border glows on focus because
// the terminal "activates" — it's listening.
// The blinking cursor inside the input is authentic to the feel.
//
// Unlike most UI systems, this input doesn't soften or round anything.
// It is a data entry field for a machine, not a form for a consumer app.

import { useState, useRef } from "react";

export function Input({
  label,
  placeholder = "",
  value,
  onChange,
  type = "text",
  error,
  hint,
  prefix = ">",   // Terminal prompt character
  disabled = false,
}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontFamily: "'JetBrains Mono', monospace",
  };

  const labelStyle = {
    fontSize: 10,
    letterSpacing: "0.2em",
    // Label color changes based on state — mirrors the terminal's feedback
    color: error ? "#FF3333" : focused ? "#00FF41" : "#4a7a4a",
    transition: "color 150ms",
  };

  const inputWrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    // WHY: The border is the most important visual signal here.
    // Default: barely visible. Focused: full phosphor green + glow.
    // Error: red border and glow to signal machine fault.
    border: error
      ? "1px solid #FF3333"
      : focused
      ? "1px solid #00FF41"
      : "1px solid #1a2e1a",
    background: "#0D0D0D",
    padding: "10px 14px",
    borderRadius: 0,   // Always 0. No exceptions.
    boxShadow: error
      ? "0 0 8px #FF333333"
      : focused
      ? "0 0 12px #00FF4133"
      : "none",
    transition: "border-color 150ms, box-shadow 150ms",
    opacity: disabled ? 0.4 : 1,
  };

  const inputStyle = {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#00FF41",
    fontSize: 12,
    letterSpacing: "0.05em",
    fontFamily: "inherit",
    cursor: disabled ? "not-allowed" : "none",
    // WHY: No font-smoothing — keeps the pixelated terminal character
    WebkitFontSmoothing: "none",
  };

  const prefixStyle = {
    color: focused ? "#00FF41" : "#00AA2B",
    fontSize: 12,
    fontWeight: 500,
    flexShrink: 0,
    transition: "color 150ms",
    userSelect: "none",
  };

  return (
    <div style={containerStyle}>
      {/* Label — positioned above, system-output style */}
      {label && (
        <label style={labelStyle} onClick={() => inputRef.current?.focus()}>
          {label.toUpperCase()}
        </label>
      )}

      <div style={inputWrapperStyle}>
        {/* Terminal prompt prefix */}
        {prefix && <span style={prefixStyle}>{prefix}</span>}

        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>

      {/* Error message — system fault output */}
      {error && (
        <span style={{ fontSize: 10, color: "#FF3333", letterSpacing: "0.1em" }}>
          ERR: {error.toUpperCase()}
        </span>
      )}

      {/* Hint — secondary system message */}
      {hint && !error && (
        <span style={{ fontSize: 10, color: "#4a7a4a", letterSpacing: "0.08em" }}>
          {hint}
        </span>
      )}
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Input label="Username" placeholder="enter identifier" />
// <Input label="Password" type="password" prefix="$" />
// <Input label="API Key" error="Invalid format — expected 32 chars" />
// <Input label="Search" prefix="/" hint="Press Enter to execute" />
