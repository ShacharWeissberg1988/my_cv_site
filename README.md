# Shachar Weissberg - CV & Portfolio Website

A modern, interactive CV/portfolio website built with React, TypeScript, and TailwindCSS, featuring a dark elegant design with multilingual support (EN/HE with full RTL).

## Features

- 🎨 Modern dark UI with purple/cyan gradient accents
- 🌍 Multilingual support (English/Hebrew) with full RTL layout
- 📱 Fully responsive design (desktop-first, mobile-optimized)
- ✨ Smooth animations powered by Framer Motion
- 🎮 Interactive gamified elements (Did You Know trivia cards)
- 📊 Organized expertise sections: Hardware, Software, System Engineering
- 💼 Professional experience timeline
- 🎥 About Me section with video introduction
- 🎯 Volunteering and hobbies showcase

## Tech Stack

- **React 18** with **TypeScript**
- **Vite 6** for blazing-fast builds
- **TailwindCSS 3** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **GitHub Pages** deployment via GitHub Actions

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/         # AppLayout, NavTabs
│   ├── sections/       # Tab components (HW, SW, SYS, etc.)
│   ├── ui/            # Reusable UI components (Card, Badge, etc.)
│   └── widgets/       # Interactive widgets (DidYouKnow, etc.)
├── data/              # JSON content files
├── i18n/              # Translation files (en.json, he.json)
└── styles/            # Global CSS styles
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. Make sure GitHub Pages is enabled in your repository settings with "GitHub Actions" as the source.

## License

© 2024 Shachar Weissberg. All rights reserved.