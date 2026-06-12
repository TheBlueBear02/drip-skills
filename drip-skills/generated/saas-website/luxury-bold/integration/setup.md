# SETUP — LUXURY BOLD

## 1. Install Dependencies
```
npm install tailwindcss postcss autoprefixer framer-motion
```

## 2. Wire Up Tailwind Config
Use the provided tailwind.config.js and merge it into your project configuration.

## 3. Import globals.css
Add the following to your project's main entry file:
```javascript
import './globals.css';
```

## 4. Verify Setup
To verify correct installation, add the following component to the page:
```jsx
<div class="bg-bd-primary text-bd-text-primary font-sans">
  <p>This text should be white on a dark background with Helvetica Neue applied as font.</p>
</div>
```
You should see a white text paragraph on a dark background, ensuring the fonts and settings have been applied correctly.

## 5. Folder Location Recommendation
Place the skill in `project/skills/luxury-bold/`
```

```