import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, Hourglass } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd, buildFaqSchema } from "@/components/pages/services/_shared/JsonLd";
import { BigBlogCTA } from "@/components/shared/BigBlogCTA";
import { Timeline } from "@/components/pages/resources/Timeline";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { localizeHref } from "@/lib/site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const title = isFr
    ? "Calendrier PPWR 2025-2040 — chaque échéance, chaque article, chaque action"
    : "PPWR timeline 2025–2040 — every milestone, article and deadline";
  const description = isFr
    ? "Calendrier PPWR 2026 et au-delà : toutes les échéances du Règlement (UE) 2025/40, de l'entrée en vigueur du 11 février 2025 aux objectifs 2040 (réemploi, contenu recyclé). loi ppwr, règlement 2025/40, calendrier ppwr 2026."
    : "PPWR timeline: every Regulation (EU) 2025/40 deadline from 11 February 2025 entry into force to the 2040 reuse and recycled-content stretch targets.";

  return {
    title,
    description,
    keywords: isFr
      ? [
          "calendrier ppwr 2026",
          "règlement ppwr",
          "PPWR France",
          "ppwr emballage",
          "loi ppwr",
          "règlement 2025/40",
          "ppwr texte",
          "échéances ppwr",
        ]
      : undefined,
    alternates: {
      canonical: `/${locale}/resources/ppwr-timeline`,
      languages: {
        fr: "/fr/resources/ppwr-timeline",
        en: "/en/resources/ppwr-timeline",
        "x-default": "/fr/resources/ppwr-timeline",
      },
    },
    openGraph: {
      title: isFr ? "Calendrier PPWR 2025-2040" : "PPWR timeline 2025–2040",
      description: isFr
        ? "Chaque échéance PPWR avec la référence d'article, l'implication opérationnelle et le service Pactum associé."
        : "Every PPWR milestone with the article reference, the operational implication and the linked Pactum service.",
      url: `https://pactum-advisory.eu/${locale}/resources/ppwr-timeline`,
      type: "article",
    },
  };
}

const PENDING_ACTS_EN = [
  {
    name: "Design-for-recycling criteria methodology (Art. 6)",
    body: "Implementing act setting the methodology for grading recyclability performance Class A, B or C. Expected by end-2027.",
  },
  {
    name: "Recycled-content calculation and verification (Art. 7)",
    body: "Implementing act on the calculation methodology, mass balance rules and chain-of-custody verification for plastic recyclate. Critical for 2030 target compliance.",
  },
  {
    name: "Sustainability requirements for compostable packaging (Art. 9)",
    body: "Delegated act specifying which packaging categories must be compostable in industrial composting and the testing standards that apply.",
  },
  {
    name: "Empty space ratio measurement (Art. 24)",
    body: "Implementing act on the harmonised method for measuring the empty space ratio in grouped, transport and e-commerce packaging.",
  },
  {
    name: "Reuse system design and labelling (Art. 30)",
    body: "Delegated act specifying the criteria a reuse system must satisfy, the labelling required, and the conditions for Member State derogations from beverage reuse targets.",
  },
  {
    name: "Digital Product Passport detailed specifications (Art. 12)",
    body: "Implementing act on the QR code or digital data carrier format, the data fields, and the access governance.",
  },
  {
    name: "Eco-modulation of EPR fees (Art. 45)",
    body: "Implementing act setting the harmonised parameters for eco-modulation of EPR fees based on recyclability class and recycled content.",
  },
  {
    name: "Single-use plastic beverage bottle DRS reporting (Art. 50)",
    body: "Implementing act on the data Member States must publish to demonstrate progress against the 90% separate-collection target.",
  },
];

const PENDING_ACTS_FR = [
  {
    name: "Méthodologie des critères d'éco-conception pour le recyclage (Art. 6)",
    body: "Acte d'exécution fixant la méthodologie de notation de la performance de recyclabilité en classes A, B ou C. Attendu d'ici fin 2027.",
  },
  {
    name: "Calcul et vérification du contenu recyclé (Art. 7)",
    body: "Acte d'exécution sur la méthodologie de calcul, les règles de bilan massique et la vérification de la chaîne de traçabilité pour le recyclat plastique. Critique pour la conformité aux objectifs 2030.",
  },
  {
    name: "Exigences de durabilité pour les emballages compostables (Art. 9)",
    body: "Acte délégué précisant les catégories d'emballages devant être compostables en compostage industriel et les normes d'essai applicables.",
  },
  {
    name: "Mesure du ratio d'espace vide (Art. 24)",
    body: "Acte d'exécution sur la méthode harmonisée de mesure du ratio d'espace vide dans les emballages groupés, de transport et e-commerce.",
  },
  {
    name: "Conception et étiquetage des systèmes de réemploi (Art. 30)",
    body: "Acte délégué précisant les critères que doit satisfaire un système de réemploi, l'étiquetage requis et les conditions des dérogations des États membres aux objectifs de réemploi des boissons.",
  },
  {
    name: "Spécifications détaillées du Passeport numérique de produit (Art. 12)",
    body: "Acte d'exécution sur le format du code QR ou support de données numérique, les champs de données et la gouvernance d'accès.",
  },
  {
    name: "Éco-modulation des éco-contributions REP (Art. 45)",
    body: "Acte d'exécution fixant les paramètres harmonisés d'éco-modulation des éco-contributions REP selon la classe de recyclabilité et le contenu recyclé.",
  },
  {
    name: "Reporting DRS des bouteilles plastiques de boisson à usage unique (Art. 50)",
    body: "Acte d'exécution sur les données que les États membres doivent publier pour démontrer leur progression vers l'objectif de 90 % de collecte séparée.",
  },
];

const FAQS_EN = [
  {
    question: "When did the PPWR enter into force?",
    answer:
      "Regulation (EU) 2025/40 entered into force on 11 February 2025, the twentieth day after publication in the Official Journal on 22 January 2025.",
  },
  {
    question: "When does the PPWR generally apply?",
    answer:
      "General application is 12 August 2026, eighteen months after entry into force, except for provisions with a different application date — Article 7 recycled-content targets and Article 6 recyclability thresholds apply from 1 January 2030.",
  },
  {
    question: "What changes on 12 August 2026?",
    answer:
      "Article 5 PFAS restrictions in food-contact packaging take effect (25 ppb / 250 ppb / 50 ppm thresholds). Annex V single-use format bans apply (under-1.5 kg fresh produce films, on-premise HORECA single-use, hotel miniature toiletries, condiment sachets, very lightweight carrier bags). HORECA must offer reusable take-away containers.",
  },
  {
    question: "What changes on 1 January 2030?",
    answer:
      "Every packaging unit on the EU market must be at least Class C recyclable (Article 6). Recycled-content targets apply to plastic packaging: 30% contact-sensitive PET, 10% other contact-sensitive plastics, 30% beverage bottles, 35% other plastic (Article 7). Reuse first targets: 40% transport and grouped, 10% beverage (Article 29). Refill stations required at retailers with ≥400 m² surface area selling food or detergents (Article 30).",
  },
  {
    question: "What changes on 1 January 2038?",
    answer:
      "Class C recyclability is no longer permitted. Only Class A (≥95%) and Class B (≥80%) packaging may be placed on the EU market. Class C packaging is withdrawn from the market.",
  },
];

const FAQS_FR = [
  {
    question: "Quand le PPWR est-il entré en vigueur ?",
    answer:
      "Le Règlement (UE) 2025/40 est entré en vigueur le 11 février 2025, vingtième jour après la publication au Journal officiel le 22 janvier 2025.",
  },
  {
    question: "Quand le PPWR s'applique-t-il de manière générale ?",
    answer:
      "L'application générale est fixée au 12 août 2026, dix-huit mois après l'entrée en vigueur, sauf pour les dispositions ayant une autre date d'application — les objectifs de contenu recyclé de l'article 7 et les seuils de recyclabilité de l'article 6 s'appliquent à compter du 1er janvier 2030.",
  },
  {
    question: "Que se passe-t-il le 12 août 2026 ?",
    answer:
      "Les restrictions PFAS de l'article 5 sur les emballages au contact alimentaire entrent en vigueur (seuils 25 ppb / 250 ppb / 50 ppm). Les interdictions de formats à usage unique de l'Annexe V s'appliquent (films pour fruits et légumes frais sous 1,5 kg, vaisselle CHR consommée sur place, mini-toiletries d'hôtel, sachets de condiments, sacs plastiques très légers). Les CHR doivent proposer des contenants réemployables pour la vente à emporter.",
  },
  {
    question: "Que se passe-t-il le 1er janvier 2030 ?",
    answer:
      "Chaque unité d'emballage mise sur le marché européen doit atteindre au minimum la classe C de recyclabilité (article 6). Les objectifs de contenu recyclé s'appliquent aux emballages plastiques : 30 % PET en contact sensible, 10 % autres plastiques en contact sensible, 30 % bouteilles de boisson, 35 % autres plastiques (article 7). Premiers objectifs de réemploi : 40 % transport et groupés, 10 % boissons (article 29). Stations de recharge obligatoires chez les détaillants avec surface ≥ 400 m² vendant alimentaire ou détergents (article 30).",
  },
  {
    question: "Que se passe-t-il le 1er janvier 2038 ?",
    answer:
      "La recyclabilité classe C n'est plus autorisée. Seuls les emballages classe A (≥ 95 %) et classe B (≥ 80 %) peuvent être mis sur le marché européen. Les emballages classe C sont retirés du marché.",
  },
];

export default async function TimelinePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const PENDING_ACTS = isFr ? PENDING_ACTS_FR : PENDING_ACTS_EN;
  const FAQS = isFr ? FAQS_FR : FAQS_EN;

  const t = isFr
    ? {
        crumbHome: "Accueil",
        crumbResources: "Ressources",
        crumbCurrent: "Calendrier PPWR 2025-2040",
        eyebrow: "Ressource · Pillar",
        h1: "Calendrier PPWR 2025-2040 — chaque échéance, chaque article, chaque action.",
        intro:
          "Le calendrier complet des échéances du Règlement (UE) 2025/40, avec les références d'articles et la conséquence opérationnelle de chaque jalon pour les entreprises intensives en emballage opérant dans l'Union européenne.",
        toc: "Sur cette page",
        tocItems: [
          ["intro", "Identité du Règlement"],
          ["timeline", "Jalons 2025-2040"],
          ["read-time", "Lire votre temps restant"],
          ["pending-acts", "Actes en attente de la Commission"],
          ["faq", "FAQ"],
        ] as const,
        identityH2: "Identité du Règlement",
        identity1Before:
          "Le Règlement (UE) 2025/40 du Parlement européen et du Conseil sur les emballages et les déchets d'emballages — CELEX 32025R0040 — remplace la Directive 94/62/CE et modifie le Règlement (UE) 2019/1020 et la Directive (UE) 2019/904. Il est obligatoire dans tous ses éléments et directement applicable dans chaque État membre. Le texte intégral est disponible sur ",
        identity1After: ".",
        identity2a:
          "Le calendrier ci-dessous liste les dates qui comptent opérationnellement, les articles qui les commandent et l'action qu'un metteur sur le marché, importateur, distributeur ou prestataire de services d'exécution doit avoir achevée à chaque échéance. Utilisez-le comme base de planification ; combinez-le avec notre ",
        identity2b: "diagnostic gratuit",
        identity2c: " ou l'",
        identity2d: "analyse des écarts en cinq jours",
        identity2e: " pour une lecture au niveau SKU.",
        milestonesH2: "Jalons 2025-2040",
        readH2: "Lire votre temps restant",
        readP1:
          "Trois échéances commandent presque tout programme PPWR. Inscrivez-les sur le même calendrier que vos cycles CAPEX.",
        readP2a: "12 août 2026",
        readP2b:
          " est la falaise « PFAS, Annexe V et CHR » — délai court, exécution binaire, risque de rappel au titre de l'article 68. Traitez-la comme l'échéance derrière laquelle rien ne peut glisser.",
        readP3a: "1er janvier 2030",
        readP3b:
          " est la falaise « recyclabilité et contenu recyclé » — délai long, nécessite des contrats de sourcing et des refontes d'outillage dès maintenant. Les décisions matériaux prises en 2026 verrouillent la conformité en 2030.",
        readP4a: "1er janvier 2038",
        readP4b:
          " est le « coucher de soleil de la classe C » — les huit ans entre 2030 et 2038 sont votre piste de refonte. Tout ce qui reste classé C fin 2029 nécessite un budget de refonte approuvé.",
        pendingH2: "Actes délégués et d'exécution en attente de la Commission",
        pendingBody:
          "Le Règlement dépend de l'adoption par la Commission de plus de trente actes délégués et d'exécution. Les huit ci-dessous sont ceux qui reviennent le plus souvent dans les comités de pilotage de nos clients parce qu'ils modifient matériellement le coût de la conformité.",
        faqH2: "Questions fréquentes",
        ctaTitle: "Obtenez la feuille de route article par article",
        ctaDesc:
          "L'analyse des écarts Pactum en cinq jours cartographie chaque SKU de votre portefeuille face aux échéances de cette page et produit un plan d'action chiffré, propriétaire par propriétaire.",
        ctaLabel: "Réserver une session de travail",
      }
    : {
        crumbHome: "Home",
        crumbResources: "Resources",
        crumbCurrent: "PPWR Timeline 2025–2040",
        eyebrow: "Resource · Pillar",
        h1: "PPWR Timeline 2025–2040 — every milestone, every article, every action.",
        intro:
          "The complete deadline schedule for Regulation (EU) 2025/40, with article references and the operational consequence of each milestone for packaging-intensive companies operating in the European Union.",
        toc: "On this page",
        tocItems: [
          ["intro", "Identity of the Regulation"],
          ["timeline", "Milestones 2025–2040"],
          ["read-time", "How to read your remaining time"],
          ["pending-acts", "Pending Commission acts"],
          ["faq", "FAQ"],
        ] as const,
        identityH2: "Identity of the Regulation",
        identity1Before:
          "Regulation (EU) 2025/40 of the European Parliament and of the Council on packaging and packaging waste — CELEX 32025R0040 — replaces Directive 94/62/EC and amends Regulation (EU) 2019/1020 and Directive (EU) 2019/904. It is binding in its entirety and directly applicable in every Member State. The full text is available on ",
        identity1After: ".",
        identity2a:
          "The schedule below lists the dates that matter operationally, the articles that command them, and the action a brand owner, importer, distributor or fulfilment service provider must have completed by each. Use it as a planning baseline; pair it with our ",
        identity2b: "free readiness assessment",
        identity2c: " or the ",
        identity2d: "five-day gap analysis",
        identity2e: " for an SKU-level read.",
        milestonesH2: "Milestones 2025–2040",
        readH2: "How to read your remaining time",
        readP1:
          "Three deadlines drive almost every PPWR programme. Mark them on the same calendar as your CAPEX cycles.",
        readP2a: "12 August 2026",
        readP2b:
          " is the “PFAS, Annex V and HORECA” cliff — short lead time, binary enforcement, recall risk under Article 68. Treat it as the deadline behind which nothing can slip.",
        readP3a: "1 January 2030",
        readP3b:
          " is the “recyclability and recycled content” cliff — long lead time, requires sourcing contracts and tooling redesign now. Material decisions made in 2026 lock compliance in 2030.",
        readP4a: "1 January 2038",
        readP4b:
          " is the “Class C sunset” — the eight years between 2030 and 2038 are your redesign runway. Anything still grading C in late 2029 needs a redesign budget approved.",
        pendingH2: "Pending Commission delegated and implementing acts",
        pendingBody:
          "The Regulation depends on the Commission adopting more than thirty delegated and implementing acts. The eight below are the ones that most often appear in our client steering committees because they materially change the cost of compliance.",
        faqH2: "Frequently asked questions",
        ctaTitle: "Get the article-by-article roadmap",
        ctaDesc:
          "The five-day Pactum gap analysis maps every SKU in your portfolio against the deadlines on this page and produces a costed, owner-by-owner action plan.",
        ctaLabel: "Book a working session",
      };

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: t.crumbHome, href: localizeHref("/", locale) },
          { label: t.crumbResources, href: localizeHref("/resources/ppwr-timeline", locale) },
          { label: t.crumbCurrent },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.eyebrow}
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            {t.h1}
          </h1>
          <p
            className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {t.intro}
          </p>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          {/* Side TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <p
                className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-4"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.toc}
              </p>
              <ul className="space-y-1.5 text-sm">
                {t.tocItems.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="block border-l-2 border-border py-1.5 pl-3 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div>
            <section id="intro">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.identityH2}
              </h2>
              <p
                className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.identity1Before}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32025R0040"
                  target="_blank"
                  rel="noopener"
                  className="text-[#10b981] underline-offset-2 hover:underline inline-flex items-center gap-1"
                >
                  EUR-Lex
                  <ExternalLink size={12} />
                </a>
                {t.identity1After}
              </p>
              <p
                className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.identity2a}
                <a
                  href={localizeHref("/resources/ppwr-readiness-assessment", locale)}
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  {t.identity2b}
                </a>
                {t.identity2c}
                <a
                  href={localizeHref("/services/ppwr-gap-analysis", locale)}
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  {t.identity2d}
                </a>
                {t.identity2e}
              </p>
            </section>

            {/* Timeline */}
            <section id="timeline" className="mt-14">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.milestonesH2}
              </h2>
              <div className="mt-8">
                <Timeline locale={locale} />
              </div>
            </section>

            {/* How to read remaining time */}
            <section id="read-time" className="mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.readH2}
              </h2>
              <div className="mt-5 rounded-3xl border border-border bg-[#f5f7f4] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#10b981] text-white">
                    <Hourglass size={20} />
                  </div>
                  <div
                    className="space-y-4 text-base leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    <p>{t.readP1}</p>
                    <p>
                      <strong className="text-foreground">{t.readP2a}</strong>
                      {t.readP2b}
                    </p>
                    <p>
                      <strong className="text-foreground">{t.readP3a}</strong>
                      {t.readP3b}
                    </p>
                    <p>
                      <strong className="text-foreground">{t.readP4a}</strong>
                      {t.readP4b}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pending acts */}
            <section id="pending-acts" className="mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.pendingH2}
              </h2>
              <p
                className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.pendingBody}
              </p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {PENDING_ACTS.map((a) => (
                  <li
                    key={a.name}
                    className="rounded-2xl border border-border bg-white p-5"
                  >
                    <p
                      className="text-sm font-bold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {a.name}
                    </p>
                    <p
                      className="mt-2 text-sm text-muted-foreground leading-relaxed"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {a.body}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.faqH2}
              </h2>
              <dl className="mt-8 space-y-5">
                {FAQS.map((f) => (
                  <div
                    key={f.question}
                    className="rounded-2xl border border-border bg-white p-5"
                  >
                    <dt
                      className="text-base font-bold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {f.question}
                    </dt>
                    <dd
                      className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {f.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </section>

      <BigBlogCTA
        title={t.ctaTitle}
        description={t.ctaDesc}
        ctaLabel={t.ctaLabel}
        ctaHref={localizeHref("/services/ppwr-gap-analysis", locale)}
      />

      <JsonLd data={buildFaqSchema(FAQS)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          inLanguage: isFr ? "fr-FR" : "en-GB",
          headline: isFr ? "Calendrier PPWR 2025-2040" : "PPWR Timeline 2025–2040",
          description: isFr
            ? "Chaque échéance du Règlement (UE) 2025/40 avec référence d'article et implication opérationnelle."
            : "Every Regulation (EU) 2025/40 deadline with article reference and operational implication.",
          author: {
            "@type": "Organization",
            name: "Pactum Advisory",
            url: "https://pactum-advisory.eu",
          },
          publisher: {
            "@type": "Organization",
            name: "Pactum Advisory",
            url: "https://pactum-advisory.eu",
          },
          datePublished: "2025-02-15",
          dateModified: "2025-02-15",
          mainEntityOfPage: `https://pactum-advisory.eu/${locale}/resources/ppwr-timeline`,
        }}
      />
    </>
  );
}
