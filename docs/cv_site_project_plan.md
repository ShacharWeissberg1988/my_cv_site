# 📘 CV Website – Project Overview & Requirements

## 🔥 Vision
Build a **visually stunning, interactive, modern CV website** that reflects both the professional and personal sides of Shachar Weissberg. This website should serve as a live portfolio, personal brand, and playful yet elegant representation of the user’s career, personality, and skills.

---

## 🧠 Client Requirements ("The Vision")

- 🎨 **Design Style**: Modern, dark, elegant, “sexy” UI
  - Base color: Black / dark gray
  - Accents: Purples, cyans, metallics (TBD)
  - Futuristic yet friendly layout with clean lines and animations

- 📁 **Sectioning by Expertise Tabs**:
  - `HW` (Hardware Engineering)
  - `SW` (Software Engineering)
  - `SYS` (System Engineering)
  - `PRO EXPERIENCE` (Full career timeline)
  - `ABOUT ME` (Video + biography)
  - `FUN` (volunteering, cool facts, hobbies, games)

- 🧠 **Gamified Elements**:
  - "Did you know?" trivia cards cycling fun/quirky facts
  - Volunteering highlights
  - Personality cards (narrative UI)

- 📽️ **About Me Video**:
  - Embedded custom intro video (hosted locally)

- 🌍 **Multilingual (EN default, HE optional)**:
  - Full site content will be in **English by default**
  - Toggle language to **Hebrew**, RTL support including full mirroring of layout
  - All tabs/content/widgets must be translatable via a clean JSON i18n system

- 🧱 **Architecture Expectations**:
  - Fully static SPA hosted on **GitHub Pages**
  - Fully responsive (desktop-first, mobile-optimized)
  - No backend required
  
- 📂 **Source Control & Structure**:
  - GitHub public repo (`cv-site` or `shachar-portfolio`)
  - Project structure clearly defined for collaboration with Claude Code or Copilot

---

## 🧱 Architecture & Stack

| Component        | Tech                                             |
|------------------|--------------------------------------------------|
| **Framework**     | React + TypeScript + Vite                       |
| **Styling**       | TailwindCSS                                     |
| **Animations**    | Framer Motion                                   |
| **Icons**         | Lucide or Heroicons                             |
| **Deployment**    | GitHub Pages + GitHub Actions                   |
| **i18n**          | Simple JSON-based dictionary per language       |
| **Media**         | `public/about-me.mp4`                           |

---

## 📁 Project Directory Structure

```bash
root/
├─ public/
│  ├─ about-me.mp4
│  ├─ favicon.svg
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ AppLayout.tsx
│  │  │  └─ NavTabs.tsx
│  │  ├─ sections/
│  │  │  ├─ TabHW.tsx
│  │  │  ├─ TabSW.tsx
│  │  │  ├─ TabSYS.tsx
│  │  │  ├─ TabProExperience.tsx
│  │  │  ├─ TabAboutMe.tsx
│  │  │  └─ TabFunAndVolunteering.tsx
│  │  ├─ ui/
│  │  │  ├─ Card.tsx
│  │  │  ├─ Badge.tsx
│  │  │  └─ TagPill.tsx
│  │  └─ widgets/
│  │     ├─ DidYouKnowGame.tsx
│  │     ├─ VolunteeringCards.tsx
│  │     └─ SkillsRadar.tsx
│  ├─ data/
│  │  ├─ cv_hw.json
│  │  ├─ cv_sw.json
│  │  ├─ cv_sys.json
│  │  ├─ experience.json
│  │  └─ fun_facts.json
│  ├─ i18n/
│  │  ├─ en.json
│  │  └─ he.json
│  ├─ main.tsx
│  ├─ App.tsx
│  └─ styles/
│     └─ globals.css
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ README.md
├─ package.json
├─ vite.config.ts
└─ docs/tasks/
   ├─ phase-01-architecture-and-setup.md
   ├─ phase-02-layout-and-tabs.md
   ├─ phase-03-tabs-content-structure.md
   ├─ phase-04-import-cv-data.md
   ├─ phase-05-fun-widgets-and-did-you-know.md
   ├─ phase-06-about-me-video-and-intro.md
   ├─ phase-07-animations-and-polish.md
   └─ phase-08-deploy-and-readme.md
```

---

## ✅ MVP Definition – Completion Criteria

1. All 6 tabs working and styled (with sample and real data)
2. Site is responsive and deployable to GitHub Pages
3. Toggle language (EN/HE) across all content
4. Framer Motion animations and interactive elements in place
5. Games/widgets load correctly (Did You Know, Volunteering, Skills)
6. About Me tab includes video + text + CV download
7. Full documentation of setup and all phases in markdown

---

## ✅ Next Step
We'll now start writing the markdown phase files, starting with:
**`phase-01-architecture-and-setup.md`** → full environment + project setup.

Shall I begin with that now?

