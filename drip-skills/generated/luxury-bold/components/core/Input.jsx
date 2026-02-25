```jsx
// LUXURY BOLD — Input.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Inputs in the Luxury Bold aesthetic maintain a deliberate simplicity with emphasis on function—spotlighting content without unnecessary distraction. The use of a monochrome background and no border underscores the clarity and focus of the interface. A neon underline during focus provides a subdued yet distinct cue that respects the user's interaction in alignment with the minimalist design philosophy, enhancing usability without altering the visual serenity of the form.

import React from 'react';

export function Input({ placeholder, value, onChange }) {
  const styles = {
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    border: 'none',
    borderBottom: '2px solid #CCCCCC',
    padding: '8px 16px',
    fontSize: '1rem',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    width: '100%',
    outline: 'none',
    transition: 'border-color 200ms ease-in-out',
  };

  const focusStyles = {
    borderBottomColor: '#EFFF00',
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={styles}
      onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#EFFF00')}
      onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#CCCCCC')}
    />
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
//
// <Input placeholder="Enter text" />
// <Input value="Pre-filled" onChange={handleChange} />
```