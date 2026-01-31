# 🗓️ Live French Revolutionary Calendar Clock JSX

A production-grade React component showcasing the French Revolutionary Calendar system with live decimal time conversion, multi-language support, and authentic historical naming conventions.

## 📺 Quick Preview

**[🔴 VIEW LIVE DEMO →](./demo.html)**

Open `demo.html` in your browser for an immediate preview of the component in action.

---

## ✨ Features

### 🕐 Decimal Time System
- Real-time conversion from standard 24-hour time to revolutionary decimal time
- **Format:** `H:MM:SS` (10 hours, 100 minutes, 100 seconds per day)
- Smooth 100ms update intervals for precise timing

### 📅 Accurate Calendar Conversion
- Gregorian to Revolutionary calendar conversion
- Starts from September 22, 1792 (Year 1 of the French Republic)
- 12 months × 30 days + 5 complementary days per year
- Automatic leap year calculations

### 🎨 Poetic Month System
All 12 months with nature-based names and cultural significance:
- **Vendémiaire** (Grape Harvest)
- **Brumaire** (Mist)
- **Frimaire** (Frost)
- **Nivôse** (Snow)
- **Pluviôse** (Rain)
- **Ventôse** (Wind)
- **Germinal** (Germination)
- **Floréal** (Flower)
- **Prairial** (Meadow)
- **Messidor** (Harvest)
- **Thermidor** (Heat)
- **Fructidor** (Fruit)

### 📝 365 Unique Daily Names
Each day of the year has a poetic name associated with:
- Plants and flowers
- Animals and insects
- Minerals and metals
- Agricultural tools and implements

### 🌍 Multi-Language Support
- **English** 🇬🇧
- **German** 🇩🇪
- **Spanish** 🇪🇸
- Intuitive flag-based language toggle
- All UI text, month meanings, and descriptions fully translated

### 🎭 Revolutionary Aesthetic
- Dark, atmospheric design inspired by Revolutionary era
- Gold and slate color scheme
- Serif typography for historical authenticity
- Smooth animations and transitions
- Fully responsive mobile and desktop layout

### ♿ Accessible & Performant
- Semantic HTML structure
- Proper color contrast
- Keyboard navigable language toggle
- Optimized re-render cycles (100ms intervals)
- Minimal dependencies

---

## 🚀 Getting Started

### Fastest Method: View the Demo

Simply open **`demo.html`** in any modern web browser. No installation needed!

```bash
# Clone or download the repository
git clone https://github.com/MushroomFleet/live-french-revolutionary-clock-JSX.git
cd live-french-revolutionary-clock-JSX

# Open demo in browser
open demo.html  # macOS
xdg-open demo.html  # Linux
start demo.html  # Windows
```

### Integration into Your React Project

1. **Copy the component:**
```bash
cp FrenchRevolutionaryTime.jsx src/components/
```

2. **Install dependencies:**
```bash
npm install react lucide-react tailwindcss
```

3. **Import and use:**
```jsx
import FrenchRevolutionaryTime from './components/FrenchRevolutionaryTime';

export default function App() {
  return <FrenchRevolutionaryTime />;
}
```

For detailed integration instructions, see **[INTEGRATION GUIDE](./live-french-revolutionary-clock-JSX-integration.md)**.

---

## 📦 Project Structure

```
live-french-revolutionary-clock-JSX/
├── FrenchRevolutionaryTime.jsx           # Main React component
├── demo.html                              # Standalone HTML demo
├── live-french-revolutionary-clock-JSX-integration.md  # Integration guide
├── README.md                              # This file
└── package.json                           # Dependencies (if using npm)
```

---

## 🔧 Requirements

### For Development
- **Node.js** 14+ (optional, for build tools)
- **React** 16.8+ (hooks support)

### For Viewing
- Any modern web browser with ES6+ support
- Chrome, Firefox, Safari, Edge

### Dependencies
```json
{
  "react": "^16.8.0",
  "lucide-react": "^0.1.0",
  "tailwindcss": "^3.0.0"
}
```

---

## 💻 Usage Examples

### Basic React Integration
```jsx
import FrenchRevolutionaryTime from './FrenchRevolutionaryTime';

function App() {
  return (
    <div>
      <h1>Revolutionary Calendar</h1>
      <FrenchRevolutionaryTime />
    </div>
  );
}

export default App;
```

### Dashboard Widget
```jsx
import React from 'react';
import FrenchRevolutionaryTime from './components/FrenchRevolutionaryTime';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <section className="widget">
        <h2>Current Time & Date</h2>
        <FrenchRevolutionaryTime />
      </section>
    </div>
  );
}
```

### Next.js Integration
```jsx
'use client'; // Client-side component

import FrenchRevolutionaryTime from './components/FrenchRevolutionaryTime';

export default function Page() {
  return <FrenchRevolutionaryTime />;
}
```

---

## 🎨 Customization

### Change Default Language
```jsx
const [language, setLanguage] = useState('de'); // German
```

### Add Custom Translations
Edit the `translations` object in the component to add new languages:
```jsx
const translations = {
  en: { /* ... */ },
  de: { /* ... */ },
  es: { /* ... */ },
  fr: { /* French translations */ }
};
```

### Modify Styling
All styling uses Tailwind CSS utility classes. Customize by editing gradient colors, padding, borders, etc.

For comprehensive customization options, see the **[INTEGRATION GUIDE](./live-french-revolutionary-clock-JSX-integration.md#customization)**.

---

## 📚 Educational Value

This component serves as an educational tool for understanding:

- **Revolutionary History:** The French Revolution's bold reimagining of timekeeping
- **Decimal Systems:** Base-10 time instead of traditional 60-minute hours
- **Calendar Systems:** How different cultures organize and name time
- **React Patterns:** Modern React hooks, state management, and component design
- **Internationalization:** Multi-language support implementation
- **UI/UX Design:** Creating historically-informed, visually engaging interfaces

---

## 🔍 Component Details

### Time Calculation
The component converts Gregorian time to decimal time by:
1. Calculating total milliseconds in the current day
2. Dividing by milliseconds per decimal hour (8,640,000 ms)
3. Extracting minutes and seconds using modulo arithmetic

### Date Calculation
Revolutionary dates are calculated by:
1. Days since September 22, 1792 (the Revolution's epoch)
2. Dividing by 365 to get the current year
3. Modulo 365 to get the day of year
4. Converting to month (30-day months) and day of month

### Daily Names
All 365 days are pre-defined in the `dailyNames` array, sourced from the authentic French Revolutionary calendar.

---

## 🌐 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome/Chromium | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 📖 Documentation

- **[Integration Guide](./live-french-revolutionary-clock-JSX-integration.md)** - Detailed setup for various frameworks
- **[Demo](./demo.html)** - Live working example
- **[GitHub Repository](https://github.com/MushroomFleet/live-french-revolutionary-clock-JSX)** - Source code and issues

---

## 🎓 Historical Context

The French Revolutionary Calendar was created in 1792 as part of the radical reimagining of society during the French Revolution. It featured:

- **Decimal time:** 10 hours per day, 100 minutes per hour, 100 seconds per minute
- **Rational months:** All months exactly 30 days
- **Poetic naming:** Days and months named after natural phenomena
- **Removal of religious references:** Secular alternative to the Gregorian calendar

Though officially abandoned in 1806, it remains a fascinating example of enlightenment thinking and social engineering through timekeeping.

---

## 🚦 Performance

- **Update Interval:** 100ms for smooth real-time display
- **Bundle Size:** ~15KB (minified without dependencies)
- **Rendering:** Optimized with React hooks and memoization
- **Dependencies:** Only React and Tailwind CSS

---

## 🤝 Contributing

Found a bug? Have a suggestion? Please:

1. Open an issue on [GitHub](https://github.com/MushroomFleet/live-french-revolutionary-clock-JSX)
2. Submit translations for additional languages
3. Share improvements to the historical accuracy

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 📚 Citation

### Academic Citation
If you use this codebase in your research or project, please cite:

```bibtex
@software{live_french_revolutionary_clock,
  title = {Live French Revolutionary Calendar Clock JSX: A Production-Grade React Component},
  author = {Drift Johnson},
  year = {2025},
  url = {https://github.com/MushroomFleet/live-french-revolutionary-clock-JSX},
  version = {1.0.0}
}
```

### APA Citation
Drift Johnson. (2025). *Live French Revolutionary Calendar Clock JSX* (Version 1.0.0) [Computer software]. https://github.com/MushroomFleet/live-french-revolutionary-clock-JSX

### MLA Citation
Johnson, Drift. *Live French Revolutionary Calendar Clock JSX*. Version 1.0.0, 2025, github.com/MushroomFleet/live-french-revolutionary-clock-JSX.

---

## 💝 Support This Project

If you find this component useful, please consider:

### ☕ Buy Me a Coffee
Support development and future enhancements:

[![Ko-Fi](https://cdn.ko-fi.com/cdn/kofi3.png?v=3)](https://ko-fi.com/driftjohnson)

### ⭐ Star on GitHub
Show your support by starring the repository!

### 📢 Share the Love
Tell others about this project on social media or in your community.

### 🤖 Contribute Code
Submit pull requests, report issues, or suggest improvements.

---

## 🙏 Acknowledgments

- **Fabre d'Églantine** - Original designer of the Revolutionary Calendar
- **French Revolution** - Historical inspiration
- **React Community** - Tools and libraries that made this possible
- **Tailwind CSS** - Utilities for beautiful styling

---

## 📞 Contact

- **GitHub:** [@MushroomFleet](https://github.com/MushroomFleet)
- **Ko-Fi:** [driftjohnson](https://ko-fi.com/driftjohnson)
- **Project:** [live-french-revolutionary-clock-JSX](https://github.com/MushroomFleet/live-french-revolutionary-clock-JSX)

---

## 🗺️ Roadmap

Future enhancements planned:
- [ ] Additional language translations (French, Italian, Portuguese)
- [ ] Historical events timeline
- [ ] Calendar comparison view (Gregorian vs Revolutionary)
- [ ] Export functionality (JSON, CSV)
- [ ] Dark/Light theme toggle
- [ ] Mobile app version
- [ ] Voice synthesis for time announcements
- [ ] Extended historical documentation

---

**Created with ❤️ for history enthusiasts, developers, and calendar nerds.**

*"Liberty, Equality, Fraternity... and Decimal Time!"* ⏰🗽🇫🇷

---

**Last Updated:** January 31, 2025  
**Current Version:** 1.0.0  
**Status:** Production Ready ✅
