# 🎮 Phase 05 – Fun Widgets & “Did You Know?”

## 🎯 Objective
Add personality to the site through interactive, gamified components that highlight personal facts, volunteering experience, and Shachar’s unique traits. These reinforce emotional engagement and give a human dimension to the technical profile.

---

## ✅ Goals
- Create the **“Did You Know?”** trivia component
- Build the **Volunteering Cards** UI
- Optionally display a **personality trait map** or chart
- Inject all of these into the `FUN` tab

---

## 📦 Components to Create

### `DidYouKnowGame.tsx`
Displays a rotating list of fun facts.

#### Behavior:
- One fact visible at a time
- Button: "Next Fact" → advances to random new item
- Optional counter: `Fact 3 of 12`

#### Example:
```tsx
const [index, setIndex] = useState(0);
const fact = funFacts[index];

return (
  <Card>
    <p className="text-lg italic">"{fact}"</p>
    <button onClick={() => setIndex((i) => (i + 1) % funFacts.length)}>
      Next Fact
    </button>
  </Card>
)
```

---

### `VolunteeringCards.tsx`
Each card represents a volunteering activity, e.g.:
- “Krembo Wings” – Youth with disabilities
- “HaNoar HaOved” – Youth Movement

#### Data from `fun_facts.json` or new file `volunteering.json`:
```json
[
  {
    "title": "Krembo Wings",
    "years": "2010–2012",
    "description": "Weekly activities with children on the spectrum.",
    "icon": "🧠"
  },
  ...
]
```

### Layout:
```tsx
<VolunteeringCards data={volunteeringData} />

// Inside component:
{data.map(v => (
  <Card title={v.title} icon={v.icon}>
    <p>{v.years}</p>
    <p>{v.description}</p>
  </Card>
))}
```

---

### 🧬 (Optional) Personality Chart
A playful radar or bar chart showing traits:

```json
{
  "creative": 9,
  "technical": 10,
  "funny": 7,
  "empathy": 8,
  "risk_taker": 9
}
```
Use `Recharts`, `Chart.js`, or static SVG. Include in FUN tab below the other content.

---

## 📍 Integration – `TabFunAndVolunteering.tsx`

```tsx
<section className="space-y-6">
  <h2 className="text-2xl font-bold">{t("tabs.fun")}</h2>
  <DidYouKnowGame />
  <VolunteeringCards />
  <PersonalityChart />
</section>
```

---

## 🧪 Validation Checklist
- [ ] “Did You Know?” rotates through JSON facts with no repeat
- [ ] Volunteering Cards are responsive and styled
- [ ] Optional: Personality traits chart renders correctly
- [ ] All text respects selected language (i18n-compatible)

---

## 🔮 Next Step
Proceed to:
- `phase-06-about-me-video-and-intro.md` → embed actual video file and add personal introduction section

