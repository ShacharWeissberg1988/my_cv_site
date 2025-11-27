# 🎥 Phase 06 – About Me Video & Intro

## 🎯 Objective
Create a warm, professional self-introduction section featuring a personal video, biographical text, and CV download link. This section is the most emotionally resonant part of the site and must feel authentic and well-produced.

---

## ✅ Goals
- Embed the actual video file (from `/public/about-me.mp4`)
- Add short bio/introduction text (EN + HE supported)
- Provide button to download the CV in PDF

---

## 🧩 Layout Overview – `TabAboutMe.tsx`

```tsx
<section className="space-y-8 max-w-4xl mx-auto px-6 py-10">
  <h1 className="text-3xl font-bold">{t("tabs.about")}</h1>

  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
    <video controls src="/about-me.mp4" className="w-full h-full object-cover rounded-lg" />
  </div>

  <div className="text-base leading-relaxed text-muted-foreground space-y-4">
    <p>{t("about.paragraph1")}</p>
    <p>{t("about.paragraph2")}</p>
  </div>

  <a href="/Shachar_CV.pdf" download className="inline-block mt-6 text-sm bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90">
    {t("about.download_cv")}
  </a>
</section>
```

---

## 📄 Language Files: `en.json`, `he.json`

### `en.json`
```json
"about": {
  "paragraph1": "Hi, I’m Shachar Weissberg – an engineer, builder, and innovator...",
  "paragraph2": "I founded PensionAI to solve the complexity of financial systems...",
  "download_cv": "Download My CV (PDF)"
}
```

### `he.json`
```json
"about": {
  "paragraph1": "שלום, אני שחר וייסברג – מהנדס, בונה ויוצר...",
  "paragraph2": "הקמתי את PensionAI כדי לפשט את העולם הפיננסי...",
  "download_cv": "הורד קורות חיים (PDF)"
}
```

You may customize these paragraphs manually later. We recommend no more than 2–3 paragraphs for readability.

---

## 📎 Video Handling Notes
- Place video in `/public/about-me.mp4`
- Format: H.264 MP4 for maximum compatibility
- Keep file size under ~25MB for web loading
- Autoplay is disabled – video starts on user click
- Use `controls` for user play/pause

---

## 🧪 Validation Checklist
- [ ] Video plays correctly and responsively
- [ ] Two bio paragraphs render in selected language
- [ ] Download CV button links to the correct PDF
- [ ] Section styling is clean, centered, and mobile-friendly

---

## 🔮 Next Step
Proceed to:
- `phase-07-animations-and-polish.md` → micro-interactions, hover effects, transitions, background visuals