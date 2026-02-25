```jsx
// LUXURY BOLD — Card.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Each Card in Luxury Bold reflects an essence of modern art—structured, tightly knit, and deliberately flat to bring harmony between textual and visual language. Using a muted dark background instantly recedes to allow the content to prevail, while a thin white border emphatically defines space within the grid, thus accounting for the deliberate design placements reminiscent of structured exhibitions or editorials in high-end publications.

import React from 'react';

export function Card({ children }) {
  const styles = {
    backgroundColor: '#303030',
    border: '1px solid #FFFFFF',
    padding: '24px',
    borderRadius: '0px',
    color: '#FFFFFF',
    transition: 'background-color 200ms ease-in-out',
    hover: {
      backgroundColor: '#2A2A2A',
    },
  };

  return (
    <div
      style={styles}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#303030')}
    >
      {children}
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
//
// <Card>Content goes here</Card>
// <Card>Another card in the grid</Card>
```