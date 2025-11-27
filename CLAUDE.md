# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, interactive CV/portfolio website for Shachar Weissberg, showcasing expertise across Hardware, Software, and System Engineering. The site features a dark, elegant design with purple/cyan accents, multilingual support (EN/HE with full RTL), and gamified interactive elements.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS 3 with custom dark theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages via GitHub Actions
- **i18n**: Custom JSON-based translation system with RTL support

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to GitHub Pages (manual)
npm run deploy
```

## Project Architecture

### Component Structure

The app follows a hierarchical component structure:

- **Layout Components** (`src/components/layout/`):
  - `AppLayout.tsx`: Main app shell with header, nav, content area, and footer
  - `NavTabs.tsx`: Sticky navigation bar with tab switching and language toggle

- **Section Components** (`src/components/sections/`):
  - `TabHW.tsx`: Hardware engineering expertise
  - `TabSW.tsx`: Software engineering expertise
  - `TabSYS.tsx`: System engineering expertise
  - `TabProExperience.tsx`: Professional timeline
  - `TabAboutMe.tsx`: Personal introduction with video
  - `TabFunAndVolunteering.tsx`: Hobbies, volunteering, and fun facts

- **UI Components** (`src/components/ui/`):
  - `Card.tsx`: Reusable card with gradient background and hover effects
  - `Badge.tsx`: Skill/tag badge with color variants
  - `TagPill.tsx`: Simple tag pill for technologies

- **Widget Components** (`src/components/widgets/`):
  - `DidYouKnowGame.tsx`: Auto-cycling trivia cards
  - `VolunteeringCards.tsx`: Volunteering activities display
  - `SkillsRadar.tsx`: Skills badge grid

### Data Management

All content is stored in JSON files under `src/data/`:
- `cv_hw.json`: Hardware skills and projects
- `cv_sw.json`: Software skills and projects
- `cv_sys.json`: System engineering skills and projects
- `experience.json`: Professional timeline
- `fun_facts.json`: Trivia, volunteering, and hobbies

### Internationalization (i18n)

- Translation files: `src/i18n/en.json` and `src/i18n/he.json`
- Context provider: `src/i18n/i18nContext.tsx`
- Usage: `const { t, language, setLanguage, isRTL } = useI18n()`
- Language persists in localStorage
- Hebrew triggers full RTL layout via `document.documentElement.dir`

### Styling System

Custom Tailwind theme extends base with:
- **Color Palette**:
  - `primary-purple`, `primary-cyan`: Main accent colors
  - `metallic-silver`, `metallic-gold`, `metallic-bronze`: Accent highlights
  - `dark-bg`, `dark-bg-secondary`, `dark-bg-tertiary`: Background layers
  - `dark-border`: Border color
- **Utility Classes**:
  - `.gradient-text`: Purple-to-cyan gradient text
  - `.card-gradient`: Subtle background gradient for cards
- **Animations**: `fade-in`, `slide-up`, `slide-down` keyframes

## Key Implementation Patterns

### Tab Navigation
Tabs are managed via local state in `AppLayout` with smooth transitions using Framer Motion. Active tab indicator uses `layoutId` for shared layout animations.

### Language Switching
Language changes update localStorage, toggle document direction, and trigger re-render via React Context. All text content uses the `t()` function for translation keys.

### Responsive Design
Mobile-first approach with TailwindCSS responsive utilities. Navigation tabs scroll horizontally on small screens.

## Deployment

### GitHub Pages Setup

1. Enable GitHub Pages in repository settings (Source: GitHub Actions)
2. Push to `main` branch triggers automatic deployment
3. Site URL: `https://<username>.github.io/my_cv_site/`

### Vite Configuration

The `base` path in `vite.config.ts` must match the repository name:
```ts
base: '/my_cv_site/'
```

## Content Updates

To update CV content:
1. Edit JSON files in `src/data/`
2. For new translation keys, update both `src/i18n/en.json` and `src/i18n/he.json`
3. Video file should be placed at `public/about-me.mp4`

## Phase Documentation

Detailed implementation phases are documented in `docs/tasks/`:
- Phase 01: Architecture and setup (completed)
- Phase 02-08: Future feature development and polish
