# 📥 Phase 04 – Import Real CV Data

## 🎯 Objective
Replace placeholder content with structured real data extracted from the user's actual CV documents. Move from static UI to fully dynamic components powered by JSON.

---

## ✅ Goals
- Create structured JSON files from existing CVs (one per category)
- Load CV content dynamically into each tab component
- Replace all placeholder cards/lists with mapped components
- Maintain clean data/component separation for scalability

---

## 📁 Data Files to Create (`src/data/`)

| File               | Source Document                        | Purpose                                   |
|--------------------|----------------------------------------|-------------------------------------------|
| `cv_hw.json`       | `_System HW Shachar's CV.pdf`          | High-speed board design, bring-up, etc.   |
| `cv_sw.json`       | `Shachar's_CV.pdf`                     | Software (Flutter, FastAPI, Supabase)     |
| `cv_sys.json`      | `HW Shachar's CV.pdf`                  | System engineering / Integration          |
| `experience.json`  | `Shachar_CV_MultiVersion_Full.docx`   | Full career timeline (companies, roles)   |
| `fun_facts.json`   | Manual                                | Cool facts, trivia, volunteering          |

---

## 🧠 Data Format Examples

### `cv_hw.json`
```json
[
  {
    "title": "High-Speed PCB Design",
    "keywords": ["DDR4", "SerDes", "SI/PI", "Allegro"],
    "description": "Designed multilayer boards with 10+Gbps traces, simulated using Sigrity."
  },
  ...
]
```

### `cv_sw.json`
```json
[
  {
    "title": "Flutter & Dart",
    "projects": ["PensionAI Client App", "Campaign Web Editor"],
    "tools": ["BLoC", "GoRouter", "fl_chart"]
  },
  ...
]
```

### `experience.json`
```json
[
  {
    "company": "Opsys",
    "role": "System Engineer",
    "years": "2019–2023",
    "description": "Led development of optical radar modules for AV."
  },
  {
    "company": "PensionAI",
    "role": "CTO & Co-Founder",
    "years": "2023–Present",
    "description": "Built AI-powered pension platform from zero to MVP."
  }
]
```

### `fun_facts.json`
```json
[
  "Shachar builds his own furniture and swore off IKEA.",
  "He was a guide for youth with autism in Krembo Wings.",
  "He can MIG weld and wire a LiDAR board."
]
```

---

## 🧱 Component Binding
In each tab (e.g. `TabHW.tsx`):

```tsx
import hwData from "@/data/cv_hw.json";

return (
  <section>
    {hwData.map((item) => (
      <Card title={item.title}>
        <ul>
          {item.keywords.map((kw) => <TagPill>{kw}</TagPill>)}
        </ul>
        <p>{item.description}</p>
      </Card>
    ))}
  </section>
)
```

---

## 📄 Data Ingestion Tips
- Convert CV content manually or use AI to extract text → structure
- Keep structure **flat** and clear – avoid deep nesting
- Keep descriptions **concise** – design comes first, not verbosity

---

## 🧪 Validation Checklist
- [ ] JSON files load correctly without syntax errors
- [ ] Each tab dynamically renders mapped content
- [ ] Layouts adapt visually to dynamic data
- [ ] No hardcoded CV lines remain in JSX
- [ ] Data can be swapped out without editing components

---

## 🔮 Next Step
Proceed to:
- `phase-05-fun-widgets-and-did-you-know.md` → build dynamic "Did you know?" game, volunteering cards, and interactive personality touches