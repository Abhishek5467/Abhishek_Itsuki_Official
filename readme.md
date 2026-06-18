# Abhishek Singh — Portfolio Design System

### "Photonic Lab" — a dark, instrument-panel system for an AI & photonics research portfolio

This design system powers the personal portfolio of **Abhishek Singh** — B.Tech Electrical Engineering at **IIT Patna** (Batch of 2027), AI researcher, software engineer and silicon-photonics researcher. It packages his brand voice, a deep-space color system, type, components and a full 3D-animated portfolio screen so any agent can generate on-brand pages, decks and mocks.

---

## Who this is for / about

Abhishek is an **AI Researcher · Software Engineer · Photonics Researcher**. The portfolio surfaces: academics (IIT Patna), achievements (GATE/JEE ranks, competitive-programming ratings), research (video anomaly detection + silicon photonics), projects, the **Sam Animation( Startup Name)** 2D-3D studio, and IITakuEdits YouTube channel, and social links.

**Persona / one-liner:** *"Building intelligent systems at the intersection of Animation, AI, photonics, mathematics and engineering."*

---

## Source materials (for whoever maintains this)

The reader may not have access to these, but they are the system's source of truth:

- **GitHub profile (primary content source):** https://github.com/Abhishek5467 — the profile README carries the full bio, achievements, research, projects, ratings and socials.
- **AI Surveillance research:** https://github.com/Abhishek5467/AI_Surveillance — DA-HPFS video anomaly detection; benchmark figures and result heatmaps live in `assets/research-*.png`.
- **Sam Animation studio:** https://github.com/Abhishek5467/Sam_Animation — his Three.js + Blender studio site; logo in `assets/sam-animation-logo.svg`.
- **Starter codebase:** the attached `My-portfolio/` (Three.js + GSAP + p5 starter) and the portrait `assets/abhishek-portrait.png`.
- **Figma:** `Abhishek_portfolio.fig` was attached but is currently **empty** (0 frames / 0 components) — nothing to extract; the visual system here is authored fresh.
- Explore those repos to build richer, more accurate designs.

---

## CONTENT FUNDAMENTALS — how the copy is written

- **Voice:** first person, confident but precise. Engineering-grade specificity over hype — "calibrates anomaly scoring per dataset", not "revolutionary AI".
- **Tone:** technical, quietly ambitious, a little playful in the studio/creator sections.
- **Casing:** Sentence case for prose and headings. **UPPERCASE mono** for kickers, labels, stats captions and metadata (e.g. `GATE ECE`, `// research · index 02`).
- **Numbers are the hook:** lead with hard figures — `AIR 1046`, `0.816 AUC`, `1000+`, `3★ · 1643`. Always tabular, always exact.
- **"I" vs "you":** speaks as "I" about the work; addresses the visitor as "you" only in CTAs ("Let's build something intelligent").
- **Emoji:** **avoid** in the rendered UI. (The GitHub README uses them heavily; the *site* does not — it uses the icon system instead.)
- **Sigils:** mono prefixes `//`, `#`, `λ` add lab-notebook texture. Section indices `01–05`.
- **Examples:** "Reading the *anomalous* signal" · "Things I've *built*" · "Ranks, ratings & *reps*" — short titles with one *gradient-highlighted* word.

---

## VISUAL FOUNDATIONS

- **Mood:** deep-space instrument panel. Think oscilloscope / photonics bench at night.
- **Color:** near-black obsidian surfaces (`--obsidian #0A0E1A`) with a **photon-cyan** signature (`--photon #16EAD5`, lifted from the Sam Animation logo). Secondary accents: **optic violet** `#7C6CFF`, **resonance amber** `#F5B642`, **signal red** `#FF4D5E` (anomaly), **lime** `#88FFB0` (online/pass). Accents are used sparingly as light sources, not fills.
- **Type:** **Space Grotesk** (display, tight negative tracking), **Sora** (body), **JetBrains Mono** (data/labels/code). Big fluid display via `clamp()`; one word per title gets the cyan→violet gradient (`<em>`).
- **Backgrounds:** faint 56px **photonic grid** (`.bg-grid`), a top **radial bloom** (`.bg-bloom`), and **scanlines** (`.bg-scan`) for surveillance contexts. The hero runs a live **Three.js** scene — a wireframe icosahedron core inside a drifting, color-tinted particle field, reactive to the cursor. Layer these; never use flat gradient washes.
- **Animation:** purposeful, springy settles (`--ease-out`, `--ease-spring`). Signature flourish is the **3D cursor-tilt** (`TiltCard`) with a photon glare. Hover = lift `-2/-3px` + accent border + soft glow. Press = `scale(.985)`. Marquees pause on hover. Everything respects `prefers-reduced-motion`.
- **Borders & cards:** hairline borders (`rgba(244,247,255,.08)`); cards are glass (`backdrop-filter: blur`) or solid slate, radius `--r-lg (16px)`, with a `--rim-top` inner highlight and an optional 2px gradient top rule + mono corner "registration tick" (`FIG.01`).
- **Shadows / glows:** deep, tight drop shadows tuned for dark UI, plus **photon glows** (`--glow-photon`) used as the accent's bloom — a glow replaces a heavy shadow on active/primary elements.
- **Imagery:** cool, technical — research heatmaps, optical diagrams, the portrait in a glass tilt card. No stock photography.
- **Radii:** `8 / 12 / 16 / 22 / 30 / pill`. Pills for buttons and the floating nav; 16px for cards.
- **Layout:** 1200px container, generous `clamp()` section rhythm, a floating glass nav pill rather than a full-width bar.

---

## ICONOGRAPHY

- **Brand / social logos:** use **[simple-icons](https://simpleicons.org) via CDN** — `https://cdn.simpleicons.org/<slug>/<hexcolor>` (e.g. `.../github/white`, `.../linkedin/4DF5E5`). This is the canonical, accurate source — never hand-draw brand marks. Tint them to the photon palette where it reads well.
- **UI icons (arrows, download, etc.):** small inline stroke SVGs (Lucide-style, 2px round caps) drawn directly in components — keep stroke weight consistent.
- **Sigils as icons:** mono glyphs `// # λ ◆ °` carry a lot of the "instrument" texture; prefer them over decorative icons for labels and separators.
- **Emoji:** not used in the rendered UI.
- **Assets** live in `assets/` (portrait, résumé, Sam Animation logo, research heatmaps).

---

## Index / manifest

**Foundations**

- `styles.css` — root entry (import-only). Consumers link just this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**Components** (`window.AbhishekSinghPortfolioDesignSystem_9edb24.*`)

- `components/core/` — **Button, Badge, Tag, Card, IconButton, Avatar, Divider**
- `components/portfolio/` — **SectionHeading, StatCard, ProjectCard, TimelineItem, SkillMeter, SocialLink, Marquee, TiltCard**
- `components/layout/` — **NavBar**

**UI kit**

- `ui_kits/portfolio/` — full single-page, 3D-animated portfolio (`index.html` + `sections-*.jsx`
  + `photon-bg.js`).

**Specimens** — `guidelines/*.html` (color, type, spacing, brand cards shown in the Design System tab).

**Other** — `assets/`, `SKILL.md`.

---

## Using a component

```jsx
const { Button, StatCard, TiltCard } = window.AbhishekSinghPortfolioDesignSystem_9edb24;
<StatCard label="GATE ECE" value="1046" unit="AIR" sub="Score 662" />
```

Each component has a sibling `.prompt.md` with a usage snippet and variants.

---

## Caveats / substitutions

- **Fonts** (Space Grotesk, Sora, JetBrains Mono) load from **Google Fonts** via `@import`. Swap to local `@font-face` if you need fully offline binaries.
- **Email** in the contact CTA is a placeholder (`mailto:abhishek@example.com`) — replace with a real address.
- **YouTube:** channel is **IITakuEdits** (https://www.youtube.com/@IITakuEdits). **Sam Animation Studio** is Abhishek's upcoming venture (in progress) — the studio logo (`assets/sam-animation-logo.svg`) is its mark.
- The **Figma** file was empty; the visual language was authored from the GitHub materials + brand.
