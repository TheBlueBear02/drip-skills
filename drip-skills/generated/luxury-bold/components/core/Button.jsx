```jsx
// LUXURY BOLD — Button.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The Button design in Luxury Bold is minimal yet striking, using a sole neon yellow accent (#EFFF00) against a dark background to demand attention and convey modernity. This choice aligns with the Clarity Fusion philosophy of using high contrast to draw focus. The uppercase, bold typography ensures clarity and directness, reflecting the structural discipline of Bauhaus design principles. The button is a critical point of interaction in the UI, and thus, the simplicity and precision in its design are intentional to provide an unmistakable focal point in any interface.

import React from 'react';

export function Button({ children, onClick, type = 'button', variant = 'primary' }) {
  const styles = {
    backgroundColor: '#EFFF00',
    color: '#1A1A1A',
    border: 'none',
    padding: '16px 24px',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    borderRadius: '0px',
    cursor: 'pointer',
    transition: 'background-color 200ms ease-in-out',
  };

  const hoverStyles = {
    backgroundColor: '#D4E000',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={styles}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4E000')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EFFF00')}
    >
      {children}
    </button>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
//
// <Button onClick={handleClick}>Click Me</Button>
// <Button type="submit">Submit</Button>
// <Button variant="secondary">Learn More</Button>
```