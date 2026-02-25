```jsx
// LUXURY BOLD — Spinner.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The spinner is understated yet distinctive—a crucial loading indicator that captures the user's attention without distraction. Its minimalistic rotation points to the design's ultimate focus on delivering immediately effective utility without compromising elegance. The choice of a simple shade in the same palette respects the aesthetic simplicity while maintaining the clarity of purpose.

import React from 'react';

export function Spinner() {
  const styles = {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    border: '3px solid #CCCCCC',
    borderRadius: '50%',
    borderTopColor: '#EFFF00',
    animation: 'spin 1s linear infinite',
  };

  return <div style={styles}></div>;
}

const spinKeyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Add this to the global styles
const globalStyles = document.createElement('style');
globalStyles.textContent = spinKeyframes;
document.head.appendChild(globalStyles);

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
//
// <Spinner />
```