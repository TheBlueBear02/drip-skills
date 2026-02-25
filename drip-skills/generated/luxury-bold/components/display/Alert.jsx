```jsx
// LUXURY BOLD — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts in the Luxury Bold style are not intrusive, maintaining the quintessential simplicity yet conveying messages with clarity and distinction. The monochromatic theme fortifies the alert against the usual noise associated with commonplace alert boxes. This blend of minimal color and bold text ensures that attention is maintained where it belongs—on the message itself without diluting focus away from the core experience.

import React from 'react';

export function Alert({ message, type = 'info' }) {
  const baseStyles = {
    padding: '16px 24px',
    fontSize: '1rem',
    fontWeight: '700',
    borderRadius: '0px',
    margin: '16px 0',
    display: 'block',
  };

  const typeStyles = {
    info: {
      backgroundColor: '#1A1A1A',
      color: '#FFFFFF',
    },
    success: {
      backgroundColor: '#00FF00', // softer success indicator
      color: '#1A1A1A',
    },
    warning: {
      backgroundColor: '#EFFF00',
      color: '#1A1A1A',
    },
    error: {
      backgroundColor: '#FF0000', // intense as a lived experience
      color: '#1A1A1A',
    },
  };

  return <div style={{ ...baseStyles, ...typeStyles[type] }}>{message}</div>;
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
//
// <Alert message="This is an information alert." type="info" />
// <Alert message="Success!" type="success" />
// <Alert message="Warning! Take caution." type="warning" />
// <Alert message="Error! Something went wrong." type="error" />
```