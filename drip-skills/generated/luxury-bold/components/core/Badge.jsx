```jsx
// LUXURY BOLD — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The Badge in Luxury Bold acts as both an informational and decorative element, complementing the interface's stately minimalism while delivering critical content. Implemented in neon yellow for high visibility, it leverages the palette's accent color to ensure immediate recognition. The intense focus on typography ensures legibility at a glance, aligning with the minimalist ethos iconic to modern sophistication. Every detail maintains the clarity focus, ensuring the badge integrates seamlessly into the UI's calm yet dynamic palette.

import React from 'react';

export function Badge({ text, variant = 'primary' }) {
  const styles = {
    display: 'inline-block',
    backgroundColor: '#EFFF00',
    color: '#1A1A1A',
    padding: '4px 12px',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    borderRadius: '0px',
  };

  return <span style={styles}>{text}</span>;
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
//
// <Badge text="New" />
// <Badge text="Featured" />
// <Badge text="Limited Edition" />
```