import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ClipboardList,
  FileSpreadsheet,
  Wallet,
  Presentation,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { RegulationBlock } from "@/components/pages/services/_shared/RegulationBlock";
import { OperationsImpact } from "@/components/pages/services/_shared/OperationsImpact";
import { DeliverablesGrid } from "@/components/pages/services/_shared/DeliverablesGrid";
import { HowWeWork } from "@/components/pages/services/_shared/HowWeWork";
import {
  JsonLd,
  buildServiceSchema,
  buildFaqSchema,
} from "@/components/pages/services/_shared/JsonLd";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { buildLocalizedMetadata } from "@/lib/seo";

const SERVICE_PATH = "/services/ppwr-gap-analysis";
const SERVICE_URL_BASE = "https://pactum-advisory.eu";

const SERVICE_NAME_EN = "PPWR Gap Analysis";
const SERVICE_NAME_FR = "Analyse des écarts PPWR";

const META_EN = {
  title: "PPWR Gap Analysis — Article-by-article in 5 days | Pactum",
  description:
    "Map every SKU against Regulation (EU) 2025/40 in 5 working days. Get an article-by-article gap report, costed remediation backlog and steering deck.",
};

const META_FR = {
  title:
    "Analyse des écarts PPWR — article par article en 5 jours | Pactum",
  description:
    "Cartographier chaque SKU face au règlement PPWR (Règlement (UE) 2025/40) en 5 jours ouvrés. Rapport article par article, backlog chiffré et deck de comité de pilotage.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const meta = rawLocale === "fr" ? META_FR : META_EN;
  return buildLocalizedMetadata({
    title: meta.title,
    description: meta.description,
    path: SERVICE_PATH,
    locale: rawLocale,
  });
}

const FAQ_ITEMS_EN = [
  {
    question: "Which articles of Regulation (EU) 2025/40 do you cover?",
    answerText:
      "All articles material to placing packaging on the EU market: Article 5 (substances of concern, including the PFAS thresholds), Article 6 (recyclability A/B/C), Article 7 (recycled content), Article 9 (compostability), Article 10 (minimisation), Article 11 (reusable packaging), Article 12 (labelling and digital data carrier), Article 24 (empty space ratio), Article 25 and Annex V (restricted formats), Article 29 (reuse and refill), Article 39 (Declaration of Conformity), Article 45 (EPR), and Article 50 (deposit return schemes).",
  },
  {
    question: "How granular is the SKU mapping?",
    answerText:
      "We work at packaging-unit level: every primary, grouped and transport packaging configuration is mapped to its applicable obligations. For multi-component packaging (cap, sleeve, label, tray, film) we record each component separately because Article 6 design-for-recycling and Article 7 recycled content apply to plastic by mass per unit, not per finished good.",
  },
  {
    question: "Can you actually deliver in five working days?",
    answerText:
      "Yes, when the input data is provided on day one: an SKU master list, packaging specifications (material, weight, supplier), volumes by Member State, and the most recent supplier declarations. The 5-day window is for the gap report and the remediation backlog. Implementation projects (recyclability redesign, supplier change-overs) run separately.",
  },
  {
    question: "Do you cover non-EU manufacturers selling into the Union?",
    answerText:
      "Yes. Under Article 16, an obligated economic operator established outside the EU must designate an authorised representative or rely on the importer to draw up the Declaration of Conformity (Article 39). The gap report flags every SKU where authorised-representative coverage is missing or where the importer has not been formally designated.",
  },
  {
    question: "What format is the deliverable?",
    answerText:
      "An Excel SKU-level matrix (one row per packaging unit, one column per applicable obligation with status, deadline and owner), a written gap report with article references, a costed remediation backlog ranked by regulatory deadline and EBITDA impact, and a 25–30 slide steering-committee deck. All artefacts are NDA-bound and yours to keep.",
  },
  {
    question: "How does this connect to your other services?",
    answerText:
      "The gap analysis is the entry point. Where it surfaces Article 6 design issues we move into a Recyclability Assessment; where it flags Article 7 plastic shortfalls we move into a Recycled-content Roadmap; where Article 5 PFAS exposure appears we run the PFAS programme; where Article 39 documentation is missing we build the Declaration of Conformity stack.",
  },
];

const FAQ_ITEMS_FR = [
  {
    question: "Quels articles du Règlement (UE) 2025/40 couvrez-vous ?",
    answerText:
      "Tous les articles déterminants pour la mise sur le marché européen : article 5 (substances préoccupantes, y compris les seuils PFAS), article 6 (recyclabilité Classe A/B/C), article 7 (contenu recyclé), article 9 (compostabilité), article 10 (minimisation), article 11 (emballages réutilisables), article 12 (étiquetage et identifiant numérique), article 24 (ratio d'espace vide), article 25 et Annexe V (formats interdits), article 29 (réemploi et rechargement), article 39 (Déclaration de conformité), article 45 (REP) et article 50 (consigne).",
  },
  {
    question: "Quelle est la granularité de la cartographie SKU ?",
    answerText:
      "Nous travaillons au niveau de l'unité d'emballage : chaque configuration primaire, regroupée et de transport est mise en regard des obligations applicables. Pour les emballages multi-composants (bouchon, manchon, étiquette, barquette, film), chaque composant est documenté séparément, car la conception en vue du recyclage (article 6) et le contenu recyclé (article 7) s'appliquent au plastique par masse et par unité, et non au produit fini.",
  },
  {
    question: "Pouvez-vous réellement livrer en cinq jours ouvrés ?",
    answerText:
      "Oui, à condition que les données soient fournies dès le jour 1 : liste maître SKU, spécifications d'emballage (matière, poids, fournisseur), volumes par État membre et dernières déclarations fournisseurs. La fenêtre de 5 jours porte sur le rapport d'écarts et le backlog de remédiation. Les projets d'implémentation (refonte recyclabilité, changement de fournisseur) sont menés séparément.",
  },
  {
    question: "Couvrez-vous les fabricants non-UE vendant dans l'Union ?",
    answerText:
      "Oui. En vertu de l'article 16, un opérateur économique obligé établi hors UE doit désigner un mandataire ou s'appuyer sur l'importateur pour établir la Déclaration de conformité (article 39). Le rapport d'écarts signale chaque SKU pour lequel la couverture par mandataire fait défaut ou pour lequel l'importateur n'a pas été formellement désigné.",
  },
  {
    question: "Quel est le format du livrable ?",
    answerText:
      "Une matrice Excel au niveau SKU (une ligne par unité d'emballage, une colonne par obligation applicable avec statut, échéance et propriétaire), un rapport d'écarts rédigé avec les références aux articles, un backlog de remédiation chiffré, classé par échéance réglementaire et impact EBITDA, et un deck de comité de pilotage de 25 à 30 slides. Tous les livrables sont sous NDA et vous appartiennent.",
  },
  {
    question: "Comment ce service s'articule avec vos autres prestations ?",
    answerText:
      "L'analyse des écarts est le point d'entrée. Lorsqu'elle révèle des problèmes de conception au titre de l'article 6, nous enchaînons sur une Évaluation de recyclabilité ; pour les manques au titre de l'article 7, sur la Feuille de route contenu recyclé ; pour l'exposition PFAS (article 5), sur le programme PFAS ; pour les lacunes documentaires (article 39), sur la Déclaration de conformité.",
  },
];

const COMPARISON_HEADERS = {
  en: {
    eyebrow: "How we compare",
    title: "Pactum vs. Big-4 vs. sustainability consultancies",
    intro:
      "We are a pure-play PPWR advisory. Big-4 firms have packaging within their sustainability practice and run multi-month engagements. Sustainability consultancies cover ESG broadly and are rarely article-precise on Regulation (EU) 2025/40.",
    big4: "Typical Big-4",
    sustainability: "Sustainability consultancy",
    caption: "Engagement dimension",
  },
  fr: {
    eyebrow: "Comparatif",
    title: "Pactum face aux Big-4 et aux cabinets RSE",
    intro:
      "Pactum est un cabinet pure-player PPWR. Les Big-4 traitent l'emballage dans leur pratique RSE et mènent des missions sur plusieurs mois. Les cabinets RSE couvrent la durabilité dans son ensemble et sont rarement article-précis sur le Règlement (UE) 2025/40.",
    big4: "Big-4 typique",
    sustainability: "Cabinet RSE",
    caption: "Dimension de mission",
  },
} as const;

const CONTINUE_READING = {
  en: "Continue reading:",
  fr: "Pour aller plus loin :",
};

function EnglishVersion({ locale }: { locale: Locale }) {
  const FAQ_ITEMS = FAQ_ITEMS_EN;
  const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
    question: it.question,
    answer: it.answerText,
  }));
  const SERVICE_URL = `${SERVICE_URL_BASE}/${locale}${SERVICE_PATH}`;
  const h = COMPARISON_HEADERS.en;

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Services", href: `/${locale}/services/ppwr-gap-analysis` },
          { label: SERVICE_NAME_EN },
        ]}
      />

      <PageHero
        eyebrow="REGULATION (EU) 2025/40 · GAP ANALYSIS"
        title="PPWR Gap Analysis — Article-by-article in 5 days."
        subtitle="One Excel matrix, every SKU mapped to every obligation, every deadline. Five working days from kick-off to a costed remediation backlog you can take to your CFO."
        primaryCTA={{ href: `/${locale}/contact`, label: "Book a working session" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock locale={locale} title="What the regulation says">
        <p>
          Regulation (EU) 2025/40, the Packaging and Packaging Waste Regulation
          (PPWR), was adopted on 19 December 2024 and published in the Official
          Journal on 22 January 2025. It entered into force on 11 February 2025
          and applies generally from <strong>12 August 2026</strong>, eighteen
          months after entry into force, except where an article sets a
          different date. The Regulation amends Regulation (EU) 2019/1020 on
          market surveillance and Directive (EU) 2019/904, and repeals the
          previous packaging directive 94/62/EC.
        </p>
        <p>
          Article 4 places the Regulation&apos;s sustainability obligations on
          every <em>obligated economic operator</em> placing packaging on the
          EU market: the manufacturer, the supplier of raw materials, the
          importer, the distributor, the fulfilment service provider and, for
          non-EU manufacturers, the <em>authorised representative</em>{" "}
          designated under Article 16. Article 39 then requires those operators
          to draw up a written Declaration of Conformity before any packaging
          unit is placed on the market and to retain the supporting technical
          documentation for ten years.
        </p>
        <p>
          The substantive obligations are spread across the Regulation:{" "}
          <strong>Article 5</strong> (substances of concern, including PFAS
          from 12 August 2026), <strong>Article 6</strong> (recyclability,
          design-for-recycling Class A/B/C from 1 January 2030 with Class C
          banned from 1 January 2038), <strong>Article 7</strong> (recycled
          content in plastic packaging from 1 January 2030),{" "}
          <strong>Article 9</strong> (compostability of specific items),{" "}
          <strong>Article 10</strong> (minimisation of weight and volume),{" "}
          <strong>Article 11</strong> (reusable packaging design criteria),{" "}
          <strong>Article 12</strong> (harmonised labelling and digital data
          carrier from 12 August 2028), <strong>Article 24</strong> (empty
          space ratio of 50% maximum from 12 August 2028),{" "}
          <strong>Article 25 with Annex V</strong> (banned single-use formats
          from 12 August 2026), <strong>Article 29</strong> (reuse and refill
          targets), <strong>Article 39</strong> (Declaration of Conformity),{" "}
          <strong>Article 45</strong> (Extended Producer Responsibility with
          eco-modulated fees) and <strong>Article 50</strong> (deposit return
          schemes for beverage bottles up to 3 L). Article 68 leaves
          Member States to set effective, proportionate and dissuasive
          penalties, including the recall and withdrawal of non-compliant
          packaging.
        </p>
        <p>
          Roughly thirty delegated and implementing acts will land between
          2025 and 2028, including the design-for-recycling criteria
          (Article 6), the recycled-content calculation methodology
          (Article 7), the labelling specifications (Article 12) and the
          empty-space methodology (Article 24). A gap analysis without a
          horizon scan of those acts is incomplete on day one.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        title="What changes for your operations"
        items={[
          {
            title: "SKU master data must be packaging-true",
            description:
              "Your ERP needs at minimum: material per component, weight in grams, recyclate percentage, supplier, country of placing on the market and Annex V format flag. Most ERPs we audit are missing three of those six fields.",
          },
          {
            title: "Procurement contracts need PPWR clauses",
            description:
              "Suppliers must declare composition and recycled-content shares for Articles 5, 6 and 7. We rewrite the relevant clauses in your master purchase agreement so non-compliance is a contractual breach, not a surprise.",
          },
          {
            title: "Packaging changes get a regulatory review gate",
            description:
              "Every NPD project needs a sign-off step against Articles 5, 6, 7, 10, 11 and 24 before tooling is committed. We document the RACI and the checklist your category teams use at gate review.",
          },
          {
            title: "Authorised representative coverage by Member State",
            description:
              "Non-EU manufacturers must designate an authorised representative under Article 16. Importers carry the Article 39 obligations otherwise. The matrix flags every coverage gap by SKU and country.",
          },
          {
            title: "EPR fee budgets shift to eco-modulation",
            description:
              "Article 45 mandates fee modulation based on Class A/B/C and recycled content. Your current EPR accruals are likely under-stated for Class C SKUs from 2030. We forecast the impact at country level.",
          },
          {
            title: "Market surveillance is real and enforceable",
            description:
              "Reg. (EU) 2019/1020 governs market surveillance under Article 39 of the PPWR. Authorities can demand the technical file, sample test, withdraw stock and impose Article 68 penalties. Document discipline becomes a board-level risk.",
          },
          {
            title: "Recall and withdrawal exposure is now packaging-led",
            description:
              "Until 2026 packaging non-compliance was rarely the cause of a recall. Under Articles 39 and 68, a missing Declaration of Conformity or a non-conforming Annex V format is itself grounds for withdrawal.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        title="What you get"
        description="A standardised, NDA-bound deliverable pack a Director of Packaging or General Counsel can take into a steering committee on day five."
        deliverables={[
          {
            icon: ClipboardList,
            title: "Inventory & SKU mapping",
            description:
              "Excel SKU master with one row per packaging unit, one column per applicable PPWR obligation. Components, materials, weights, recyclate share, Annex V flag, country of placement.",
          },
          {
            icon: FileSpreadsheet,
            title: "Article-by-article gap report",
            description:
              "Written report against Articles 5, 6, 7, 9, 10, 11, 12, 24, 25, 29, 39, 45 and 50. Each finding is dated, sourced and tied to the specific recital where the obligation is anchored.",
          },
          {
            icon: Wallet,
            title: "Costed remediation backlog",
            description:
              "Every gap converted to an action with capex/opex range, owner, regulatory deadline and dependency. Sequenced for 12 Aug 2026, 1 Jan 2030 and 1 Jan 2038 cut-offs.",
          },
          {
            icon: Presentation,
            title: "Steering-committee deck",
            description:
              "A 25–30 slide executive deck for your CFO, General Counsel and CEO. Headline exposure, top-ten SKU risks, three-year compliance budget, and the next 90-day plan.",
          },
        ]}
        timeToDeliver="5 working days from data delivery"
        teamComposition="1 partner, 1 senior analyst, 1 packaging engineer"
      />

      <HowWeWork
        locale={locale}
        title="How we work — five days, five gates"
        steps={[
          {
            step: "01",
            title: "NDA and data intake",
            duration: "Day 0",
            description:
              "Mutual NDA signed before any data exchange. We share a one-page intake checklist: SKU master, packaging specs, supplier list, volumes by Member State, prior PFAS and recyclability declarations.",
          },
          {
            step: "02",
            title: "Kick-off and scoping workshop",
            duration: "Day 1",
            description:
              "A 90-minute kick-off with packaging, procurement, regulatory, sustainability and finance. We confirm the perimeter, the Member States in scope and the SKU sample for deep-dive testing.",
          },
          {
            step: "03",
            title: "Article-by-article assessment",
            duration: "Days 2–3",
            description:
              "We test every SKU against Articles 5, 6, 7, 9, 10, 11, 12, 24, 25, 29, 39, 45 and 50. Material composition, recyclate share, Annex V status, DoC status and country exposure are scored.",
          },
          {
            step: "04",
            title: "Costing and prioritisation",
            duration: "Day 4",
            description:
              "Each gap becomes a costed action with capex, opex, supplier dependency and regulatory deadline. We sequence the backlog for the 12 Aug 2026, 1 Jan 2028, 1 Jan 2030 and 1 Jan 2038 cut-offs.",
          },
          {
            step: "05",
            title: "Steering committee and hand-over",
            duration: "Day 5",
            description:
              "We present the gap report and the costed backlog to your steering committee, hand over the SKU matrix and the source-cited slide deck, and agree the implementation workstreams.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {h.eyebrow}
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {h.title}
            </h2>
            <p
              className="mt-4 text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {h.intro}
            </p>
          </div>

          <div className="mt-10">
            <ComparisonTable
              usLabel="Pactum"
              competitor1Label={h.big4}
              competitor2Label={h.sustainability}
              caption={h.caption}
              rows={[
                {
                  criterion: "Pure-play PPWR specialism",
                  us: { type: "yes", text: "Regulation (EU) 2025/40, only" },
                  competitor1: { type: "no", text: "One offer in an ESG portfolio" },
                  competitor2: { type: "no", text: "ESG / circular-economy generalist" },
                },
                {
                  criterion: "Regulatory horizon scanning",
                  us: { type: "yes", text: "30+ delegated and implementing acts tracked weekly" },
                  competitor1: { type: "mixed", text: "Quarterly briefings" },
                  competitor2: { type: "no", text: "Ad-hoc" },
                },
                {
                  criterion: "Time to first deliverable",
                  us: { type: "yes", text: "5 working days, fixed" },
                  competitor1: { type: "no", text: "8–14 weeks" },
                  competitor2: { type: "no", text: "6–10 weeks" },
                },
                {
                  criterion: "Fixed scope, fixed price",
                  us: { type: "yes", text: "Quoted before kick-off, no T&M" },
                  competitor1: { type: "no", text: "Time-and-materials" },
                  competitor2: { type: "mixed", text: "Sometimes" },
                },
                {
                  criterion: "NDA-first engagement",
                  us: { type: "yes", text: "Signed before any data exchange" },
                  competitor1: { type: "mixed", text: "Standard MSA" },
                  competitor2: { type: "mixed", text: "Standard MSA" },
                },
                {
                  criterion: "EU-wide team",
                  us: { type: "yes", text: "Multi-jurisdiction analysts in EU" },
                  competitor1: { type: "yes", text: "Global, often non-EU lead" },
                  competitor2: { type: "mixed", text: "Single-country lead common" },
                },
              ]}
            />
          </div>
        </div>
      </section>

      <FAQ title="Questions on the PPWR gap analysis" items={FAQ_ITEMS_FOR_FAQ} />

      <section className="bg-[#f5f7f4] py-12">
        <div className="mx-auto max-w-[1080px] px-6">
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {CONTINUE_READING.en}{" "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/recyclability-assessment`}
            >
              Recyclability assessment (Article 6)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/recycled-content-roadmap`}
            >
              Recycled-content roadmap (Article 7)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/declaration-of-conformity`}
            >
              Declaration of Conformity (Article 39)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/resources/ppwr-timeline`}
            >
              PPWR Timeline 2025–2040
            </a>
            .
          </p>
        </div>
      </section>

      <ContactCTA
        title="Get a costed PPWR roadmap in 5 days"
        description="Book a 30-minute working session with a Pactum partner. We confirm scope, sign the NDA and start your gap analysis the same week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_EN,
          description: META_EN.description,
          serviceType: "Regulatory compliance advisory — PPWR gap analysis",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}

function FrenchVersion({ locale }: { locale: Locale }) {
  const FAQ_ITEMS = FAQ_ITEMS_FR;
  const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
    question: it.question,
    answer: it.answerText,
  }));
  const SERVICE_URL = `${SERVICE_URL_BASE}/${locale}${SERVICE_PATH}`;
  const h = COMPARISON_HEADERS.fr;

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: "Accueil", href: `/${locale}` },
          { label: "Services", href: `/${locale}/services/ppwr-gap-analysis` },
          { label: SERVICE_NAME_FR },
        ]}
      />

      <PageHero
        eyebrow="RÈGLEMENT (UE) 2025/40 · ANALYSE DES ÉCARTS"
        title="Analyse des écarts PPWR — article par article, en 5 jours."
        subtitle="Une matrice Excel, chaque SKU rapproché de chaque obligation et de chaque échéance. Cinq jours ouvrés du kick-off à un backlog de remédiation chiffré pour votre directeur financier."
        primaryCTA={{ href: `/${locale}/contact`, label: "Réserver une session de travail" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Diagnostic PPWR gratuit",
        }}
      />

      <RegulationBlock locale={locale}>
        <p>
          Le Règlement (UE) 2025/40, dit règlement PPWR (règlement emballages
          et déchets d&apos;emballages), a été adopté le 19 décembre 2024 et
          publié au Journal officiel le 22 janvier 2025. Il est entré en
          vigueur le 11 février 2025 et s&apos;applique généralement à compter
          du <strong>12 août 2026</strong>, dix-huit mois après son entrée en
          vigueur, sauf disposition contraire d&apos;un article. Le règlement
          modifie le Règlement (UE) 2019/1020 relatif à la surveillance du
          marché et la directive (UE) 2019/904, et abroge la directive
          emballages 94/62/CE.
        </p>
        <p>
          L&apos;article 4 fait peser les obligations de durabilité sur chaque{" "}
          <em>opérateur économique obligé</em> mettant un emballage sur le
          marché européen : le fabricant, le fournisseur de matières
          premières, l&apos;importateur, le distributeur, le prestataire de
          services d&apos;exécution de commandes et, pour les fabricants
          non-UE, le <em>mandataire</em> désigné au titre de l&apos;article 16.
          L&apos;article 39 oblige ensuite ces opérateurs à établir une
          Déclaration de conformité (DoC) écrite avant toute mise sur le
          marché d&apos;une unité d&apos;emballage et à conserver la
          documentation technique de soutien pendant dix ans.
        </p>
        <p>
          Les obligations matérielles couvrent le règlement : <strong>article 5</strong>{" "}
          (substances préoccupantes, dont les PFAS à compter du 12 août 2026),{" "}
          <strong>article 6</strong> (recyclabilité, conception en vue du
          recyclage, classes A/B/C à compter du 1er janvier 2030, Classe C
          interdite à partir du 1er janvier 2038), <strong>article 7</strong>{" "}
          (contenu recyclé dans les emballages plastiques à compter du 1er
          janvier 2030), <strong>article 9</strong> (compostabilité de produits
          spécifiques), <strong>article 10</strong> (minimisation du poids et
          du volume), <strong>article 11</strong> (critères de conception des
          emballages réutilisables), <strong>article 12</strong> (étiquetage
          harmonisé et identifiant numérique à compter du 12 août 2028),{" "}
          <strong>article 24</strong> (ratio d&apos;espace vide de 50 % maximum
          à compter du 12 août 2028), <strong>article 25 avec Annexe V</strong>{" "}
          (formats à usage unique interdits à compter du 12 août 2026),{" "}
          <strong>article 29</strong> (objectifs de réemploi et de
          rechargement), <strong>article 39</strong> (Déclaration de
          conformité), <strong>article 45</strong> (responsabilité élargie du
          producteur avec éco-modulation) et <strong>article 50</strong>{" "}
          (consigne pour les bouteilles de boisson jusqu&apos;à 3 L).
          L&apos;article 68 laisse aux États membres le soin de fixer des
          sanctions effectives, proportionnées et dissuasives, dont le rappel
          et le retrait du marché des emballages non conformes.
        </p>
        <p>
          Une trentaine d&apos;actes délégués et d&apos;actes d&apos;exécution
          tomberont entre 2025 et 2028, dont les critères de conception en vue
          du recyclage (article 6), la méthodologie de calcul du contenu
          recyclé (article 7), les spécifications d&apos;étiquetage (article
          12) et la méthodologie d&apos;espace vide (article 24). Une analyse
          des écarts privée d&apos;un suivi de ces actes est incomplète dès le
          premier jour.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        items={[
          {
            title: "La donnée maître SKU doit être fidèle à l'emballage",
            description:
              "Votre ERP a besoin a minima de : matière par composant, poids en grammes, taux de recyclat, fournisseur, pays de mise sur le marché et indicateur de format Annexe V. La plupart des ERP que nous auditons ne disposent que de trois de ces six champs.",
          },
          {
            title: "Les contrats achats exigent des clauses PPWR",
            description:
              "Les fournisseurs doivent déclarer la composition et les taux de recyclat au titre des articles 5, 6 et 7. Nous reformulons les clauses concernées de votre contrat-cadre d'achat afin que toute non-conformité constitue un manquement contractuel, et non une surprise.",
          },
          {
            title: "Toute évolution d'emballage passe par un point réglementaire",
            description:
              "Chaque projet d'innovation produit nécessite une validation au regard des articles 5, 6, 7, 10, 11 et 24 avant l'engagement d'outillage. Nous documentons la RACI et la checklist que vos équipes catégorie utilisent en revue de jalon.",
          },
          {
            title: "Couverture mandataire par État membre",
            description:
              "Les fabricants non-UE doivent désigner un mandataire au titre de l'article 16. À défaut, l'importateur porte les obligations de l'article 39. La matrice signale chaque trou de couverture par SKU et par pays.",
          },
          {
            title: "Les budgets REP basculent vers l'éco-modulation",
            description:
              "L'article 45 impose la modulation des éco-contributions selon la classe A/B/C et le contenu recyclé. Vos provisions REP actuelles sous-estiment probablement les SKU Classe C dès 2030. Nous projetons l'impact pays par pays.",
          },
          {
            title: "La surveillance du marché est réelle et opposable",
            description:
              "Le Règlement (UE) 2019/1020 régit la surveillance du marché au titre de l'article 39 PPWR. Les autorités peuvent exiger le dossier technique, prélever des échantillons, retirer les stocks et imposer les sanctions de l'article 68. La discipline documentaire devient un risque de niveau conseil d'administration.",
          },
          {
            title: "L'exposition au rappel devient pilotée par l'emballage",
            description:
              "Jusqu'en 2026, la non-conformité d'emballage causait rarement un rappel. Au titre des articles 39 et 68, l'absence de Déclaration de conformité ou un format Annexe V non conforme constitue en soi un motif de retrait.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        description="Un pack de livrables standardisé, sous NDA, qu'un Directeur Emballages ou un Directeur juridique peut présenter en comité de pilotage dès le cinquième jour."
        deliverables={[
          {
            icon: ClipboardList,
            title: "Inventaire et cartographie SKU",
            description:
              "Maître Excel SKU avec une ligne par unité d'emballage et une colonne par obligation PPWR applicable. Composants, matières, poids, taux de recyclat, indicateur Annexe V, pays de mise sur le marché.",
          },
          {
            icon: FileSpreadsheet,
            title: "Rapport d'écarts article par article",
            description:
              "Rapport rédigé contre les articles 5, 6, 7, 9, 10, 11, 12, 24, 25, 29, 39, 45 et 50. Chaque constat est daté, sourcé et rattaché au considérant qui ancre l'obligation.",
          },
          {
            icon: Wallet,
            title: "Backlog de remédiation chiffré",
            description:
              "Chaque écart converti en action avec fourchette capex/opex, propriétaire, échéance réglementaire et dépendance. Séquencé pour les jalons du 12 août 2026, 1er janvier 2030 et 1er janvier 2038.",
          },
          {
            icon: Presentation,
            title: "Deck de comité de pilotage",
            description:
              "Un deck exécutif de 25 à 30 slides pour votre directeur financier, votre directeur juridique et votre direction générale. Exposition globale, top 10 des SKU à risque, budget conformité 3 ans et plan à 90 jours.",
          },
        ]}
        timeToDeliver="5 jours ouvrés à compter de la livraison des données"
        teamComposition="1 associé, 1 analyste senior, 1 ingénieur emballage"
      />

      <HowWeWork
        locale={locale}
        title="Notre méthode — cinq jours, cinq jalons"
        steps={[
          {
            step: "01",
            title: "NDA et collecte de données",
            duration: "Jour 0",
            description:
              "NDA mutuel signé avant tout échange de données. Nous transmettons une checklist d'intake d'une page : maître SKU, spécifications emballage, liste fournisseurs, volumes par État membre, déclarations PFAS et recyclabilité antérieures.",
          },
          {
            step: "02",
            title: "Kick-off et atelier de cadrage",
            duration: "Jour 1",
            description:
              "Un kick-off de 90 minutes avec emballage, achats, réglementaire, durabilité et finance. Nous confirmons le périmètre, les États membres ciblés et l'échantillon SKU pour les tests approfondis.",
          },
          {
            step: "03",
            title: "Évaluation article par article",
            duration: "Jours 2-3",
            description:
              "Nous testons chaque SKU contre les articles 5, 6, 7, 9, 10, 11, 12, 24, 25, 29, 39, 45 et 50. Composition matière, taux de recyclat, statut Annexe V, statut DoC et exposition pays sont notés.",
          },
          {
            step: "04",
            title: "Chiffrage et priorisation",
            duration: "Jour 4",
            description:
              "Chaque écart devient une action chiffrée avec capex, opex, dépendance fournisseur et échéance réglementaire. Nous séquençons le backlog pour les jalons du 12 août 2026, 1er janvier 2028, 1er janvier 2030 et 1er janvier 2038.",
          },
          {
            step: "05",
            title: "Comité de pilotage et passation",
            duration: "Jour 5",
            description:
              "Nous présentons le rapport d'écarts et le backlog chiffré à votre comité de pilotage, remettons la matrice SKU et le deck sourcé, et convenons des chantiers d'implémentation.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {h.eyebrow}
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {h.title}
            </h2>
            <p
              className="mt-4 text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {h.intro}
            </p>
          </div>

          <div className="mt-10">
            <ComparisonTable
              usLabel="Pactum"
              competitor1Label={h.big4}
              competitor2Label={h.sustainability}
              caption={h.caption}
              rows={[
                {
                  criterion: "Spécialisation pure-player PPWR",
                  us: { type: "yes", text: "Règlement (UE) 2025/40, exclusivement" },
                  competitor1: { type: "no", text: "Une offre dans un portefeuille RSE" },
                  competitor2: { type: "no", text: "Généraliste RSE / économie circulaire" },
                },
                {
                  criterion: "Veille réglementaire",
                  us: { type: "yes", text: "Plus de 30 actes délégués et d'exécution suivis chaque semaine" },
                  competitor1: { type: "mixed", text: "Briefings trimestriels" },
                  competitor2: { type: "no", text: "Au coup par coup" },
                },
                {
                  criterion: "Délai au premier livrable",
                  us: { type: "yes", text: "5 jours ouvrés, fixe" },
                  competitor1: { type: "no", text: "8 à 14 semaines" },
                  competitor2: { type: "no", text: "6 à 10 semaines" },
                },
                {
                  criterion: "Périmètre fixe, prix fixe",
                  us: { type: "yes", text: "Devis avant kick-off, sans régie" },
                  competitor1: { type: "no", text: "Régie (T&M)" },
                  competitor2: { type: "mixed", text: "Parfois" },
                },
                {
                  criterion: "Engagement NDA en amont",
                  us: { type: "yes", text: "Signé avant tout échange de données" },
                  competitor1: { type: "mixed", text: "MSA standard" },
                  competitor2: { type: "mixed", text: "MSA standard" },
                },
                {
                  criterion: "Équipe couvrant l'UE",
                  us: { type: "yes", text: "Analystes multi-juridictions en UE" },
                  competitor1: { type: "yes", text: "Global, souvent piloté hors UE" },
                  competitor2: { type: "mixed", text: "Pilotage mono-pays fréquent" },
                },
              ]}
            />
          </div>
        </div>
      </section>

      <FAQ
        title="Questions sur l'analyse des écarts PPWR"
        items={FAQ_ITEMS_FOR_FAQ}
      />

      <section className="bg-[#f5f7f4] py-12">
        <div className="mx-auto max-w-[1080px] px-6">
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {CONTINUE_READING.fr}{" "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/recyclability-assessment`}
            >
              Évaluation de recyclabilité (article 6)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/recycled-content-roadmap`}
            >
              Feuille de route contenu recyclé (article 7)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/declaration-of-conformity`}
            >
              Déclaration de conformité (article 39)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/resources/ppwr-timeline`}
            >
              Calendrier PPWR 2025-2040
            </a>
            .
          </p>
        </div>
      </section>

      <ContactCTA
        title="Une feuille de route PPWR chiffrée en 5 jours"
        description="Réservez une session de travail de 30 minutes avec un associé Pactum. Nous confirmons le périmètre, signons le NDA et démarrons votre analyse des écarts dans la semaine."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_FR,
          description: META_FR.description,
          serviceType: "Conseil conformité réglementaire — analyse des écarts PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}

export default async function PpwrGapAnalysisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  if (locale === "fr") return <FrenchVersion locale={locale} />;
  return <EnglishVersion locale={locale} />;
}
