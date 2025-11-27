# 📦 Phase 01 – Architecture & Setup

## 🎯 Objective
Establish the base project with the correct tooling, visual foundation, and initial structure. This step is crucial to allow fast iterations and clean component reuse across the site.

---

## ✅ Goals
- Initialize React + TypeScript project with Vite
- Setup TailwindCSS for modern dark UI styling
- Add Framer Motion for transitions/animations
- Create base layout components (App shell, Tabs)
- Setup language support (EN/HE) via JSON files

---

## 🔨 Step-by-Step Instructions

### 1. Create Project
```bash
npm create vite@latest cv-site -- --template react-ts
cd cv-site
npm install
```

### 2. Install Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install framer-motion
npm install lucide-react
```

### 3. Configure TailwindCSS
Update `tailwind.config.js`:
```ts
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
theme: {
  extend: {
    colors: {
      primary: '#8e7dff', // Accent
      background: '#0d0d0d',
      surface: '#1a1a1a',
      text: '#eaeaea'
    },
  },
},
darkMode: 'class',
```

Update `src/styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-background text-text;
}
```

### 4. File Cleanup
Remove unneeded files:
```bash
rm src/assets/react.svg
rm src/App.css
```
Update `src/main.tsx` to import Tailwind:
```ts
import './styles/globals.css';
```

---

## 🌐 Language Support Setup (i18n)

Create `src/i18n/` and two files:
- `en.json`
- `he.json`

Example content:
```json
{
  "tabs": {
    "hw": "Hardware",
    "sw": "Software",
    "sys": "System",
    "pro": "Experience",
    "about": "About Me",
    "fun": "Fun"
  },
  "welcome": "Welcome to my portfolio"
}
```

Use `react context` or `zustand` for managing selected language.
Each text in components will refer to a helper like `t('tabs.hw')`.

---

## 🧱 Initial Component Structure

Create:
- `src/components/layout/AppLayout.tsx` – basic structure
- `src/components/layout/NavTabs.tsx` – clickable tabs with Framer Motion underline
- `src/App.tsx` – container with routing logic (later replaced by internal state tabs)

---

## 📁 Folder Preparation

```bash
mkdir -p src/components/{layout,sections,ui,widgets}
mkdir -p src/data
mkdir -p src/i18n
mkdir -p src/styles
```

Create placeholder files:
```bash
touch src/components/layout/AppLayout.tsx
      src/components/layout/NavTabs.tsx
      src/styles/globals.css
      src/i18n/en.json
      src/i18n/he.json
```

---

## 🧪 Validation Checklist
- [ ] Vite server runs without error: `npm run dev`
- [ ] Tailwind classes apply correctly
- [ ] Dark background with readable text
- [ ] Tabs rendered at top with 6 sections
- [ ] Language toggle dropdown exists and switches json source

---

## 📎 Notes
- Fonts will be added in future phase (custom Google Font or local Hebrew font)
- Theme toggle (light/dark) is not needed – design is purely dark
- Language toggle does not need to persist (no need for localStorage)

---

## 🚀 Next
Proceed to:
- `phase-02-layout-and-tabs.md` → Full implementation of layout and tab content switching
- Add routing logic if future deep-linking is desired

