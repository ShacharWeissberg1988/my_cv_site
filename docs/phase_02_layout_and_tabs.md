# 🎨 Phase 02 – Layout & Tabs

## 🎯 Objective
Implement the full layout structure of the website, including header, tabbed navigation, and animated tab switching between content sections. Prepare UI for future injection of real CV content.

---

## ✅ Goals
- Create the app’s main layout (`AppLayout`)
- Implement navigation tabs (`NavTabs`) with animated underline
- Render dynamic content per selected tab
- Add responsive layout support
- Include basic language toggle button

---

## 📦 Components to Create

### 1. `AppLayout.tsx`
Responsible for wrapping the full app in:
- A header (name, title, language switch)
- Navigation tabs (across top or side)
- Content container below

### 2. `NavTabs.tsx`
Displays the 6 navigation tabs:
- HW
- SW
- SYS
- PRO EXPERIENCE
- ABOUT ME
- FUN

Each tab should:
- Highlight when active
- Use Framer Motion for a sliding underline
- Use Tailwind hover effects

### 3. `App.tsx`
- Internal state for `activeTab`
- Imports the tab components from `/sections/`
- Renders the component matching the current tab
- Optional: Framer Motion fade transition when switching

---

## 🧠 Logic Overview

```tsx
const [activeTab, setActiveTab] = useState("HW");

return (
  <AppLayout>
    <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>

      {activeTab === "HW" && <TabHW />}
      {activeTab === "SW" && <TabSW />}
      {activeTab === "SYS" && <TabSYS />}
      {activeTab === "PRO" && <TabProExperience />}
      {activeTab === "ABOUT" && <TabAboutMe />}
      {activeTab === "FUN" && <TabFunAndVolunteering />}

    </motion.div>
  </AppLayout>
)
```

---

## 🌍 Language Toggle UI
- Add button at top right for language switch (EN / עברית)
- When clicked, switches between `en.json` / `he.json`
- Store dictionary in React Context or Zustand store

Example:
```tsx
<button onClick={toggleLang} className="text-sm opacity-60 hover:opacity-100">
  {currentLang === 'en' ? 'עברית' : 'English'}
</button>
```

---

## 📱 Responsiveness Targets
- Tabs collapse to horizontal scroll on mobile
- Font sizes and paddings scale with screen size
- Language toggle and header stay accessible on all viewports

---

## 🧪 Validation Checklist
- [ ] Header appears with name and language toggle
- [ ] Tabs rendered across top with all 6 sections
- [ ] Tabs visually highlight active selection
- [ ] Tab switch animates in with Framer Motion
- [ ] Works on mobile and desktop
- [ ] Language toggle switches tab labels correctly

---

## 🔁 Suggested Folder Output

```bash
src/
├─ components/
│  ├─ layout/
│  │  ├─ AppLayout.tsx
│  │  └─ NavTabs.tsx
├─ sections/
│  ├─ TabHW.tsx
│  ├─ TabSW.tsx
│  ├─ TabSYS.tsx
│  ├─ TabProExperience.tsx
│  ├─ TabAboutMe.tsx
│  └─ TabFunAndVolunteering.tsx
```

Each `Tab*.tsx` file can currently return a `<div>Coming Soon: [tab name]</div>` until Phase 3.

---

## 🔮 Next Step
Proceed to:
- `phase-03-tabs-content-structure.md` → add placeholder components for each tab and layout its future structure.
- Begin defining reusable `Card`, `Tag`, and `Timeline` components to be used across tabs.

