# 🚀 Phase 08 – Deploy & README

## 🎯 Objective
Finalize the project by publishing it online using **GitHub Pages**, and writing a clear `README.md` that explains setup, development, and contribution instructions. This is the official delivery phase.

---

## ✅ Goals
- Deploy project live using GitHub Pages
- Create a production-ready README file
- Automate deployment via GitHub Actions

---

## 🧩 Step-by-Step: GitHub Pages Deployment

### 1. In `vite.config.ts`, add base path:
```ts
export default defineConfig({
  base: '/cv-site/', // Replace with repo name
  ...
})
```

### 2. Install Vite GitHub Pages deploy helper (optional):
```bash
npm install gh-pages -D
```

### 3. Update `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://USERNAME.github.io/cv-site"
```
Replace `USERNAME` and `cv-site` accordingly.

### 4. Manual Deployment:
```bash
npm run deploy
```

### 5. (Optional) GitHub Actions Auto Deploy
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm run build
      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
```
Make sure `main` is your default branch.

---

## 📄 `README.md` Template
Create at root of project:

```md
# 💼 Shachar Weissberg – CV Website

An interactive, animated personal CV website built with React, Vite, and Tailwind.

## 🧱 Tech Stack
- React + TypeScript
- Vite
- TailwindCSS + Framer Motion
- GitHub Pages Deployment

## 📦 Project Structure
```
src/
├─ components/
├─ data/
├─ i18n/
├─ styles/
public/
docs/tasks/
```

## 🚀 Run Locally
```bash
npm install
npm run dev
```

## 🌐 Deploy
```bash
npm run deploy
```

## 🔄 Language Toggle
- Default: English
- Toggle: Hebrew (RTL layout)

## 👤 About
This site is the digital portfolio of Shachar Weissberg.

- [LinkedIn](https://linkedin.com/in/yourprofile)
- [CV PDF](public/Shachar_CV.pdf)

## 📄 License
MIT
```

---

## 🧪 Final Checklist Before Going Live
- [ ] All tabs fully populated with real data
- [ ] No console errors
- [ ] Responsive layout confirmed on desktop + mobile
- [ ] Language toggle works across tabs
- [ ] Video plays and CV downloads
- [ ] Repo is public and live at `https://USERNAME.github.io/cv-site/`

---

## ✅ Project Complete
Once deployed, you now have:
- Full interactive multilingual animated CV site
- Live hosted link to share with recruiters or investors
- Modular component system you can expand
- All documentation for future contributors