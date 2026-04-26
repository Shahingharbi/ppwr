# Pactum — Brand & Build Brief

This is the SINGLE SOURCE OF TRUTH for every agent building pages, components, copy, or SEO. Read this fully before writing any file. Cite article numbers, dates and percentages exactly as written here.

## 1. Brand identity

| Field | Value |
|------|------|
| Name | **Pactum** |
| Tagline | **The PPWR Advisory** |
| Legal name | Pactum Advisory |
| Domain (target) | pactum-advisory.eu |
| Founding year | 2025 |
| Locale (site) | EN (English) — primary; FR/DE planned |
| Email | advisory@pactum-advisory.eu |
| LinkedIn | https://www.linkedin.com/company/pactum-advisory |

**Positioning** — Pactum is a pure-play advisory firm specialised in EU Regulation (EU) 2025/40, the Packaging and Packaging Waste Regulation (PPWR). We turn the regulation into a costed, audit-ready compliance roadmap: recyclability (Art. 6), recycled content (Art. 7), reuse and refill (Art. 29-30), PFAS (Art. 5), Declaration of Conformity (Art. 39), Digital Product Passport, EPR (Art. 45), DRS (Art. 50). Our clients are FMCG, automotive, e-commerce, pharma, cosmetics and beverage groups operating in the EU.

**Differentiation** vs. McKinsey / Eunomia / Big-4:
1. **Pure-play PPWR** — not "sustainability strategy", not "ESG reporting" — the regulation, only.
2. **Article-precise deliverables** — every recommendation is tied to a specific article number and applicability date.
3. **5-day costed roadmap** as the standard entry product — fixed scope, fixed price.
4. **NDA-first engagements** — your packaging portfolio is competitive intelligence; we lead with confidentiality.
5. **EU-wide regulatory horizon scan** — we track the 30+ delegated and implementing acts the Commission must adopt.

## 2. Voice, tone, language rules

**Tone** — McKinsey-tier authoritative. Plain confident English. Factual and specific. The reader is a Director of Packaging, Head of Sustainability, General Counsel or Compliance Officer at a European group. They are senior and time-poor.

**Always**
- Cite the exact regulation number `Regulation (EU) 2025/40` on first mention per page; thereafter `the PPWR` or `the Regulation`.
- Cite article numbers, recital numbers and Annex references when relevant.
- Use exact dates (`12 August 2026`, `1 January 2030`) — never "soon" or "in the next few years".
- Use exact percentages and thresholds (`30%`, `50%`, `25 ppb`, `1.5 kg`).
- Use the EU's defined terms verbatim where possible: "obligated economic operator", "fulfilment service provider", "authorised representative", "packaging unit", "single-use plastic packaging", "contact-sensitive packaging".

**Never**
- Generic sustainability fluff ("we help you go green", "let's build a sustainable future").
- Buzzwords without substance ("synergies", "leverage", "world-class", "best-in-class").
- Emoji.
- Motivational language.
- Filler greetings ("Hello!", "Welcome!").
- Vague timeframes ("in the coming months", "by the end of the decade").
- Sales pressure ("limited offer", "act now").
- Greenwashing claims (no "sustainable", "eco-friendly", "green", "natural" without explicit regulatory grounding).

**House style**
- Sentence-case headings except for proper nouns and acronyms.
- "The Regulation", "the Commission", "the Member States", "the Council" — capitalised when referring to the EU institutions.
- Use the Oxford comma.
- Numbers under ten in words; ten and above in digits — except in headings, tables and dates where digits are always used.
- One-line answers in FAQs are encouraged where the regulation is unambiguous.

## 3. Design system (DO NOT change)

| Token | Hex | Usage |
|------|------|------|
| `#0f1a16` | Foreground / primary dark | Body text, dark surfaces, hero contrast blocks |
| `#10b981` | Accent / emerald | CTAs, key highlights, accent borders |
| `#059669` | Green hover | CTA hover state |
| `#065f46` | Green dark | Dark accent, selected states |
| `#d1fae5` | Green soft | Subtle highlight backgrounds, badges |
| `#f5f7f4` | Beige | Section background surfaces |
| `#e8ede5` | Beige dark | Subtle bordered surfaces |
| `#ffffff` | Background | Default page background |

**Fonts** (already loaded in `src/app/layout.tsx`):
- Display H1: `var(--font-ginto-nord)` — heaviest impact, hero only
- Headings H2-H6: `var(--font-maison-neue-extended)` — section titles, card titles, eyebrows
- Body: `var(--font-maison-neue)` — paragraphs, lists, descriptions

**Radius**: `--radius: 0.75rem`. Use `rounded-2xl`, `rounded-3xl`, `rounded-full` consistently.

**Layout grid**: max content width 1120-1200px on desktop; px-6 on mobile.

## 4. Information architecture (final)

```
/                                         Home
/services/ppwr-gap-analysis               Service · Gap Analysis
/services/recyclability-assessment        Service · Recyclability (Art. 6)
/services/recycled-content-roadmap        Service · Recycled content (Art. 7)
/services/reuse-targets-strategy          Service · Reuse (Art. 29)
/services/pfas-compliance                 Service · PFAS (Art. 5 / Annex V)
/services/declaration-of-conformity       Service · DoC (Art. 39)
/sectors/automotive                       Sector · Automotive & mobility
/sectors/fmcg                             Sector · FMCG / food & beverage
/sectors/ecommerce                        Sector · E-commerce & marketplaces
/sectors/pharmaceutical                   Sector · Pharma & medical devices
/resources/ppwr-timeline                  Pillar · 2025-2040 timeline
/resources/ppwr-glossary                  Pillar · Glossary
/resources/ppwr-faq                       Pillar · FAQ (40+ Q/A)
/resources/ppwr-readiness-assessment      Lead magnet · self-assessment intake
/about                                    About — methodology, team
/contact                                  Contact form + scheduling
/blog                                     Insights index
/blog/[slug]                              3 long-form articles (defined below)
```

## 5. PPWR — verified factual baseline (use confidently)

### Identity
- **Full name**: Regulation (EU) 2025/40 of the European Parliament and of the Council on packaging and packaging waste, amending Regulation (EU) 2019/1020 and Directive (EU) 2019/904, and repealing Directive 94/62/EC.
- **CELEX**: 32025R0040
- **Published in OJ L**: 22 January 2025
- **Entry into force**: 11 February 2025 (twentieth day after publication)
- **General application**: 12 August 2026 (eighteen months after entry into force) — except provisions stated otherwise.

### Scope and obligated parties
- All packaging placed on the EU market and all packaging waste in the Union, regardless of material (plastic, paper, glass, metal, wood, composites).
- Obligated economic operators: manufacturers, suppliers (raw materials), importers, distributors, fulfilment service providers, authorised representatives.

### Sustainability requirements (Art. 5–11)
- **Art. 5 — Substances of concern**: PFAS restriction in food-contact packaging from 12 August 2026 — packaging must not contain intentionally added PFAS in concentrations equal to or above 25 ppb (any individual PFAS, targeted analysis), 250 ppb (sum of PFAS, targeted), or 50 ppm (total fluorine indicator).
- **Art. 6 — Recyclability**: All packaging recyclable by design from 1 January 2030 (graded performance Class A ≥95%, Class B ≥80%, Class C ≥70%); from 1 January 2038, only Class A and B allowed (Class C banned). Delegated acts on design-for-recycling criteria expected by end-2027.
- **Art. 7 — Recycled content in plastic packaging** (from 1 January 2030):
  - Contact-sensitive packaging containing PET as major component: **30%**
  - Contact-sensitive packaging from other plastics: **10%**
  - Single-use plastic beverage bottles: **30%**
  - Other plastic packaging: **35%**
  - From 1 January 2040: targets rise to **50% / 25% / 65% / 65%** respectively.
- **Art. 10 — Minimisation**: From 1 January 2030, packaging minimised in weight, volume and number of layers. Empty space ratio (Article 24) max 50% for grouped, transport and e-commerce packaging.
- **Art. 9 — Compostability**: tea/coffee bags, sticky labels on fruit/veg, and very lightweight plastic carrier bags must be compostable in industrial composting.
- **Art. 11 — Reusable packaging**: design criteria for reusable packaging units (durability, washability, sortable parts).

### Labelling (Art. 12–13)
- Harmonised material composition labelling on every packaging unit from 12 August 2028.
- Sorting label aligned across Member States.
- QR code or other digital data carrier per Article 12 — Digital Product Passport rollout starting 2028.
- Recycled content claim only if substantiated.

### Restrictions on certain packaging formats (Art. 25 + Annex V) from 12 August 2026
- Single-use plastic packaging for fresh fruit and vegetables under 1.5 kg.
- HORECA single-use packaging consumed on-premise.
- Hotel single-use miniature toiletries (under 100 ml shampoo/lotion bottles).
- Single-use sachets and condiment portions in HORECA.
- Single-use grouped packaging at retail used solely to encourage volume sales.
- Very lightweight plastic carrier bags (excluding hygienic, primary food contact use).

### Reuse and refill (Art. 29–33) from 1 January 2030
- Transport and grouped packaging: **40%** reuse rate by 2030, **70%** by 2040.
- Beverage packaging (water, soft drinks, beer, wine, spirits): **10%** reusable by 2030, **40%** by 2040 — Member States may derogate under conditions.
- Large household appliances: **90%** reuse of transport packaging by 2030.
- HORECA take-away: must offer reusable container option from 12 August 2026.
- Refill stations: retailers ≥400 m² selling food and detergents must offer refill from 1 January 2030.

### Empty space ratio (Art. 24) from 12 August 2028
- Maximum 50% empty space in grouped, transport and e-commerce packaging.

### Deposit return schemes (Art. 50)
- Member States must achieve 90% separate collection of single-use plastic beverage bottles up to 3 L and metal cans by 31 December 2029. DRS mandatory unless 80% collection achieved otherwise by 31 December 2026 and a credible plan to reach 90% by 2029.

### EPR — Extended Producer Responsibility (Art. 45–47)
- Producers (or PROs on their behalf) cover net costs of separate collection, transport, treatment, awareness and littering clean-up.
- Mandatory eco-modulation of fees based on recyclability class (A/B/C) and recycled content.
- Harmonised national registers.

### Declaration of Conformity & technical documentation (Art. 39–40)
- Manufacturers (or importers) must draw up the DoC before placing packaging on the EU market.
- Technical documentation kept for 10 years and provided to market surveillance on request.
- CE-marking-style accountability for packaging.

### Penalties (Art. 68)
- Member States set effective, proportionate, dissuasive penalties.
- Recall and withdrawal from the market for non-compliant packaging.

## 6. Imagery & assets

- **Photography style**: industrial / engineering / supply-chain / packaging-line; muted, contrasted; no stock-photo people poses; **NO photographs of women or men used as decorative subjects** — packaging, machinery, materials, abstract close-ups only.
- **Free-licence sources to use**: Unsplash, Pexels, Pixabay (image URLs hot-linked through Next/Image is acceptable for now). Always include `alt` text describing the regulatory or material concept.
- **Avoid**: smiling stock people; Earth-from-space clichés; recycle-symbol clip art; AI-generated faces.
- **Diagrams / mockups**: prefer Tailwind-styled HTML mockups (like the dashboard mock in `BigBlogCTA.tsx`) over raster images — they're crisp, lightweight and editable.

## 7. SEO standards (every page)

Every page must include:
- Unique `<title>`: `[Page-specific] | Pactum`
- Unique meta description (150-160 chars), verb-led, factual.
- `<link rel="canonical">` (Next handles via metadata).
- OpenGraph + Twitter card metadata.
- One `<h1>` per page, then ordered hierarchical `h2/h3`.
- Schema.org JSON-LD: `Organization` (site-wide), `BreadcrumbList`, plus page-specific (`Service`, `FAQPage`, `Article`).
- Internal links to ≥3 related pages.
- Outbound link to ≥1 authoritative source (EUR-Lex, European Commission).
- Image `alt` text on all images.
- Lazy loading via Next/Image.

Site-wide:
- `src/app/sitemap.ts` and `src/app/robots.ts` (handled by SEO infra agent).
- 404 page.
- Lighthouse target 95+.

## 8. CTAs & conversion pattern

- **Primary CTA** (everywhere): "Book a working session" → `/contact`
- **Secondary CTA** (everywhere): "Free PPWR readiness check" → `/resources/ppwr-readiness-assessment`
- **In-article CTA** (mid-blog): "Get the article-by-article roadmap" → `/services/ppwr-gap-analysis`

## 9. Reusable components in `src/components/shared` (DO NOT change signatures)

These are already cleaned and ready to import:
- `PageHero({ eyebrow, title, subtitle, ctaLabel, ctaHref, secondaryCta? })`
- `LogosStrip({ logos: string[] })`
- `StatsStrip({ items: {value, label}[] })`
- `SocialProof({ items })`
- `Testimonials({ items })`
- `ComparisonTable({ usLabel?, competitor1Label, competitor2Label, rows, caption? })`
- `FAQ({ title?, items })`
- `PricingTiers({ tiers })`
- `ReassuranceBadges()`
- `WorkflowVisual({ steps })`
- `SectionShell({ children, eyebrow?, title?, description?, dark? })`
- `CTAButton({ href, variant?, icon?, children })`
- `ContactCTA({ title?, description?, id? })`
- `InlineCTA(...)`, `BigBlogCTA(...)`, `StickyBlogCTA()`, `StickyMobileCTA()`
- `BlogPreview({ posts })`, `BlogLayout(...)`, `ArticleSummary(...)`, `TableOfContents(...)`, `TipBox(...)`

Inspect each file's exact prop signature before using.

## 10. Blog — three pillar articles (must each be 2500-4000 words)

1. **`/blog/ppwr-2025-survival-guide-for-european-brand-owners`** — pillar piece. Targets keywords: `ppwr survival guide`, `ppwr 2025/40`, `ppwr regulation summary`, `what is ppwr`, `eu packaging regulation 2025`. Structure: TL;DR → identity of the regulation → who is in scope → key dates timeline (table) → 8 key obligations one by one (each with article reference, deadline, action) → enforcement and penalties → seven mistakes most brands will make → 90-day action plan → FAQ.
2. **`/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline`** — narrow pillar. Targets: `pfas ppwr`, `ppwr pfas`, `pfas food packaging eu`, `pfas ban europe`. Structure: what changes 12 Aug 2026 → exact threshold definitions (25 ppb / 250 ppb / 50 ppm) → which packaging is in/out of scope (Annex V) → testing methods (targeted vs total fluorine) → substitution materials → supplier contractual clauses to insert now → enforcement risk and penalties.
3. **`/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap`** — operational pillar. Targets: `ppwr recycled content`, `ppwr 2030`, `recycled content targets`, `pet recycled content eu`. Structure: the four target categories explained → 2030 vs 2040 numbers (table) → mass balance vs free attribution rules → certification (CEN, ISCC) → sourcing realities of food-grade rPET → make-or-buy decisions → 24-month sourcing roadmap.

Each article must:
- Use `BlogLayout` from shared components.
- Have a working TableOfContents.
- Cite EUR-Lex URL and the CELEX number.
- Have 5+ internal links to service pages.
- Include 1+ TipBox callouts.
- End with BigBlogCTA.

## 11. NEVER mention or reference

- Admingo, secrétariat, fiche de paie, externalisation administrative, accueil téléphonique — these are from the prior project and must not appear anywhere.
- French-language copy by default — site is English. (Multilingual support comes later.)

## 12. Repository facts

- **Path**: `c:/Users/superindep/ppwr-projet/ppwr-projet/`
- **Stack**: Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui base.
- **Build commands**: `npm run lint`, `npm run typecheck`, `npm run build`.
- **Working directory for agents**: always use absolute paths under `c:/Users/superindep/ppwr-projet/ppwr-projet/`.

When in doubt about content: cite Regulation (EU) 2025/40 and stay specific.
