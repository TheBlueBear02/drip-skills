```jsx
// LUXURY BOLD — Navbar.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The Navbar bears the clarity of the interface's identity, racing impassively across the top in a calm yet mighty presence. It encapsulates the minimalist aesthetic found in the clarity fusion, with neon highlights boosting essential interactivity. Each link is a coherent piece of structured navigation, directly echoing the effortless flow observed in high-end environments.

import React from 'react';

export function Navbar() {
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: '#1A1A1A',
  };

  const linkStyles = {
    color: '#FFFFFF',
    textDecoration: 'none',
    margin: '0 12px',
    paddingBottom: '2px',
    transition: 'color 200ms ease-in-out',
  };

  const linkHover = {
    color: '#EFFF00',
  };

  return (
    <nav style={navStyles}>
      <div>Brand</div>
      <div>
        <a href="#" style={linkStyles}
           onMouseEnter={(e) => (e.currentTarget.style.color = '#EFFF00')}
           onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        >
          Home
        </a>
        <a href="#" style={linkStyles}
           onMouseEnter={(e) => (e.currentTarget.style.color = '#EFFF00')}
           onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        >
          About
        </a>
        <a href="#" style={linkStyles}
           onMouseEnter={(e) => (e.currentTarget.style.color = '#EFFF00')}
           onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        >
          Services
        </a>
      </div>
    </nav>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
//
// <Navbar />
```