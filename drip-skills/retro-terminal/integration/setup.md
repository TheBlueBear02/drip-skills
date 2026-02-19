# SETUP — RETRO TERMINAL SKILL

Follow these steps in order before writing any component code.

---

## 1. Install Dependencies

```bash
npm install framer-motion
```

Tailwind CSS should already be installed. If not:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 2. Wire Up the Tailwind Config

Merge the skill's Tailwind config into your project's `tailwind.config.js`.

If you don't have one yet, copy `integration/tailwind.config.js` directly.

If you already have a config, extend it with the `theme.extend` block from the skill's config:

```js
// tailwind.config.js — YOUR PROJECT
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ← paste the theme.extend block from skill/integration/tailwind.config.js here
    },
  },
  plugins: [],
};
```

---

## 3. Import globals.css

Add the import to your project's root entry file:

**Next.js (App Router):**
```js
// app/layout.tsx
import '@/skills/retro-terminal/integration/globals.css'
```

**Next.js (Pages Router):**
```js
// pages/_app.tsx
import '../skills/retro-terminal/integration/globals.css'
```

**Vite / CRA:**
```js
// main.jsx or main.tsx
import './skills/retro-terminal/integration/globals.css'
```

---

## 4. Add the TerminalCursor Component

The custom cursor is a global component that must be mounted at the root layout level.
It replaces the native browser cursor across the entire app.

```jsx
// In your root layout component:
import { TerminalCursor } from '@/skills/retro-terminal/components/core/TerminalCursor'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TerminalCursor />
        {children}
      </body>
    </html>
  )
}
```

---

## 5. Verify the Setup

After completing the steps above, create a test page with this markup:

```jsx
export default function SkillTest() {
  return (
    <div className="bg-terminal-bg min-h-screen p-10 font-terminal">
      <h1 className="text-terminal-primary text-4xl font-bold glow-text-md animate-blink">
        SKILL ACTIVE █
      </h1>
      <p className="text-terminal-dim text-body mt-4">
        &gt; retro-terminal skill loaded successfully.
      </p>
    </div>
  )
}
```

You should see:
- Near-black background
- Glowing phosphor green text
- CRT scanlines overlaid on the page
- Corner vignette
- A custom cursor (block cursor, blinking)
- No default browser cursor

If all of these are present, the skill is correctly set up.

---

## Folder Location Recommendation

Place the skill folder at:
```
your-project/
└── skills/
    └── retro-terminal/    ← skill folder lives here
```

This keeps skills separate from your app source code and makes it easy
to add future skills alongside it.
