# 🚀 Live French Revolutionary Clock JSX - Integration Guide

## Table of Contents
1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
3. [Integration Methods](#integration-methods)
4. [Customization](#customization)
5. [Advanced Usage](#advanced-usage)
6. [Troubleshooting](#troubleshooting)

---

## Installation

### Method 1: Direct Import (React Projects)

1. Copy the `FrenchRevolutionaryTime.jsx` file into your project's components directory:
```bash
cp FrenchRevolutionaryTime.jsx src/components/
```

2. Install required dependencies (if not already installed):
```bash
npm install react lucide-react tailwindcss
```

### Method 2: Using as Module

Place the component file in your project and import it:
```bash
cp FrenchRevolutionaryTime.jsx src/components/
```

---

## Basic Usage

### Simple Integration into a React App

```jsx
import FrenchRevolutionaryTime from './components/FrenchRevolutionaryTime';

export default function App() {
  return (
    <div>
      <FrenchRevolutionaryTime />
    </div>
  );
}
```

### Vite + React Setup

1. Create a new project:
```bash
npm create vite@latest my-calendar -- --template react
cd my-calendar
npm install
npm install lucide-react
```

2. Copy `FrenchRevolutionaryTime.jsx` to `src/components/`

3. Update `src/App.jsx`:
```jsx
import FrenchRevolutionaryTime from './components/FrenchRevolutionaryTime'

function App() {
  return <FrenchRevolutionaryTime />
}

export default App
```

4. Run your development server:
```bash
npm run dev
```

### Create React App Setup

1. Create a new project:
```bash
npx create-react-app french-calendar
cd french-calendar
npm install lucide-react
```

2. Copy `FrenchRevolutionaryTime.jsx` to `src/components/`

3. Update `src/App.js`:
```jsx
import FrenchRevolutionaryTime from './components/FrenchRevolutionaryTime';

function App() {
  return <FrenchRevolutionaryTime />;
}

export default App;
```

4. Start your app:
```bash
npm start
```

### Next.js Integration

1. Copy component to `app/components/FrenchRevolutionaryTime.jsx`

2. Create `app/page.jsx`:
```jsx
'use client'; // Mark as client component

import FrenchRevolutionaryTime from './components/FrenchRevolutionaryTime';

export default function Home() {
  return <FrenchRevolutionaryTime />;
}
```

3. Ensure `tailwindcss` is configured in your `tailwind.config.js`

---

## Integration Methods

### Method 1: Standalone HTML (No Build Tools)

Use the `demo.html` file directly:

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/lucide@latest"></script>
</head>
<body>
    <div id="root"></div>
    <!-- Include component code here -->
</body>
</html>
```

### Method 2: Modern Frontend Frameworks

#### **Vue 3**
Wrap the React component using `vue-reactivity`:
```vue
<script setup>
import { ref } from 'vue'
import FrenchRevolutionaryTime from './FrenchRevolutionaryTime.jsx'
</script>

<template>
  <FrenchRevolutionaryTime />
</template>
```

#### **Svelte**
Create a wrapper component using Svelte's interop:
```svelte
<script>
  import FrenchRevolutionaryTime from './FrenchRevolutionaryTime.jsx'
</script>

<FrenchRevolutionaryTime />
```

### Method 3: Embedding in Existing Components

```jsx
import React from 'react';
import FrenchRevolutionaryTime from './components/FrenchRevolutionaryTime';

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <nav>Dashboard</nav>
      
      <div className="content">
        <FrenchRevolutionaryTime />
      </div>
      
      <footer>© 2025</footer>
    </div>
  );
}
```

---

## Customization

### Modifying Default Language

Edit the component's initial state to change default language:

```jsx
const [language, setLanguage] = useState('de'); // Change to German, Spanish, etc.
```

Options: `'en'` (English), `'de'` (German), `'es'` (Spanish)

### Adding Custom Translations

Extend the translations object:

```jsx
const translations = {
  en: {
    // ... existing translations
  },
  fr: {
    title: "Calendrier Révolutionnaire",
    subtitle: "Temps décimal de la République Française",
    // ... add more translations
  }
};

const flags = {
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
  es: '🇪🇸'
};
```

### Styling Customization

The component uses Tailwind CSS. Customize colors by modifying the gradient classes:

```jsx
// Change decimal time clock background
<div className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 ...">

// Modify month gradient colors
const monthNames = [
  { name: "Vendémiaire", meaning: "Grape Harvest", color: "from-custom-600 to-custom-700" },
  // ...
];
```

### Custom Dark/Light Themes

Replace dark theme with light theme:

```jsx
<div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white p-6">
  {/* Light theme content */}
</div>
```

---

## Advanced Usage

### Creating a Dashboard Widget

```jsx
import React from 'react';
import FrenchRevolutionaryTime from './FrenchRevolutionaryTime';

export default function CalendarWidget() {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Revolutionary Calendar</h2>
      <FrenchRevolutionaryTime />
    </div>
  );
}
```

### Extracting Time/Date Logic

Use the calculation logic separately:

```jsx
function useRevolutionaryTime() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const totalMs = now.getHours() * 3600000 + 
                      now.getMinutes() * 60000 + 
                      now.getSeconds() * 1000 + 
                      now.getMilliseconds();
      
      const msPerDay = 86400000;
      const msPerDecimalHour = msPerDay / 10;
      const msPerDecimalMinute = msPerDecimalHour / 100;
      
      const hours = Math.floor(totalMs / msPerDecimalHour) % 10;
      const minutes = Math.floor((totalMs % msPerDecimalHour) / msPerDecimalMinute) % 100;
      const seconds = Math.floor((totalMs % msPerDecimalMinute) / (msPerDecimalMinute / 100)) % 100;
      
      setTime({ hours, minutes, seconds });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return time;
}
```

### Combining with Other Components

```jsx
export default function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome</h1>
      </header>
      
      <main className="grid grid-cols-2 gap-8">
        <section>
          <h2>Current Time</h2>
          <FrenchRevolutionaryTime />
        </section>
        
        <section>
          <h2>Other Content</h2>
          {/* Your other components */}
        </section>
      </main>
    </div>
  );
}
```

---

## Troubleshooting

### Issue: Component Not Rendering

**Solution:** Ensure Tailwind CSS is properly configured:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:
```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Issue: lucide-react Icons Not Showing

**Solution:** Ensure lucide-react is installed:
```bash
npm install lucide-react
```

### Issue: Language Toggle Not Working

**Solution:** Check that the component state is properly initialized:
```jsx
const [language, setLanguage] = useState('en'); // Must be at top of component
```

### Issue: Time Not Updating

**Solution:** Verify the interval cleanup function:
```jsx
useEffect(() => {
  const interval = setInterval(calculateRevolutionaryTime, 100);
  return () => clearInterval(interval); // Important!
}, []);
```

### Issue: Styles Not Applied

**Solution:** Ensure Tailwind CSS is imported in your main CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Performance Optimization

### Memoization

To prevent unnecessary re-renders:

```jsx
import { memo } from 'react';

const FrenchRevolutionaryTime = memo(() => {
  // Component code...
});

export default FrenchRevolutionaryTime;
```

### Conditional Updates

Only update state when values actually change:

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    const newTime = calculateTime();
    
    // Only update if changed
    if (JSON.stringify(newTime) !== JSON.stringify(time)) {
      setTime(newTime);
    }
  }, 1000); // Increase to 1000ms for less frequent updates
  
  return () => clearInterval(interval);
}, []);
```

---

## Browser Support

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE 11: ❌ Not supported (requires Babel transpilation)

---

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^16.8.0+ | Core React library |
| lucide-react | ^0.1.0+ | Icon components |
| tailwindcss | ^3.0.0+ | Styling framework |

---

## Need Help?

- Check the `demo.html` for a working example
- Review the full component code in `FrenchRevolutionaryTime.jsx`
- Refer to the main `README.md` for project overview
- Visit the GitHub repository for issues and discussions

---

## License

This component is part of the Live French Revolutionary Clock project. See the main repository for licensing details.

---

**Last Updated:** January 2025  
**Component Version:** 1.0.0
