# 🧱 Phase 03 – Tabs Content Structure

## 🎯 Objective
Create and wire up the component structure for each tab section. For this phase we will use **placeholder content** and **basic layouts** to ensure each tab is visually distinct and ready for real CV data in the next phase.

---

## ✅ Goals
- Scaffold 6 separate tab content components
- Create base layout per tab: title, subtitle, container
- Use placeholder elements to simulate future data
- Ensure smooth animation and responsiveness per section

---

## 📁 Components to Create (in `src/components/sections/`)

| File                     | Purpose                                          |
|--------------------------|--------------------------------------------------|
| `TabHW.tsx`              | Hardware skills + experience overview            |
| `TabSW.tsx`              | Software tech stack, projects, tools             |
| `TabSYS.tsx`             | System integration / architecture experience     |
| `TabProExperience.tsx`   | Full timeline of job experience                  |
| `TabAboutMe.tsx`         | Video + intro bio + CV download                  |
| `TabFunAndVolunteering.tsx` | Volunteering, fun facts, hobbies ("Did you know?") |

---

## ✨ Layout Guidelines for Tabs

Use consistent internal structure across all tabs:

```tsx
return (
  <section className="px-6 py-10 max-w-5xl mx-auto space-y-8">
    <h1 className="text-3xl font-bold tracking-tight">{t("tabs.hw")}</h1>
    <p className="text-muted-foreground">Coming soon: this tab will show all my hardware skills.</p>
    <div className="grid md:grid-cols-2 gap-4">
      <Card title="Placeholder" content="Example of card layout" />
    </div>
  </section>
)
```

✅ Use dummy cards, badges, timelines or video placeholders
✅ Use Tailwind utility classes – no raw CSS

---

## 🔄 Sample Placeholder by Tab

### `TabHW.tsx`
- Title: “Hardware Engineering”
- 2–3 dummy cards (e.g. High-Speed Design, PCB Bring-Up)
- Fake chips + signal labels for fun

### `TabSW.tsx`
- Title: “Software & Tools”
- Badges for: React, Flutter, FastAPI, Supabase, GitHub Actions

### `TabSYS.tsx`
- Title: “System Projects”
- Timeline or grid with placeholder projects (e.g. LiDAR board integration)

### `TabProExperience.tsx`
- Vertical timeline of past jobs (fake data)
- Company name, title, dates, 2 bullets per job

### `TabAboutMe.tsx`
- Empty video placeholder box
- Paragraph with dummy text like: “My name is Shachar…”
- Button: `Download CV (PDF)` – link to `public/Shachar_CV.pdf`

### `TabFunAndVolunteering.tsx`
- One `DidYouKnowCard` component with dummy fact
- One `VolunteeringCard` (e.g. “Krembo Wings” placeholder)

---

## 🧪 Validation Checklist
- [ ] Each of the 6 tabs renders a distinct component
- [ ] Each tab contains heading, subheading, placeholder content
- [ ] Layouts are responsive and readable on mobile
- [ ] Visual design fits the dark mode Tailwind theme
- [ ] No console errors / broken imports

---

## 🛠 Optional Helper Components to Start
Create these in `components/ui/` or `components/widgets/`:

- `Card.tsx` – a stylized block with title + content
- `TagPill.tsx` – badge-style label
- `TimelineItem.tsx` – one vertical timeline entry
- `DidYouKnowCard.tsx` – gamified fact viewer (static for now)

---

## 🔮 Next Step
Move to:
- `phase-04-import-cv-data.md` → bring in real JSON-based CV content from PDF/docx
- Replace placeholder elements with real dynamic data
- Build data-driven sections using mapping over JSON arrays

