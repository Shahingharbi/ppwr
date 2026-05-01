import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  TestTube,
  ShieldAlert,
  FileSignature,
  ArrowLeftRight,
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

const SERVICE_PATH = "/services/pfas-compliance";
const SERVICE_URL_BASE = "https://pactum-advisory.eu";

const SERVICE_NAME_EN = "PFAS Compliance (Article 5)";
const SERVICE_NAME_FR = "Conformité PFAS (article 5)";

const META_EN = {
  title: "PFAS in food-contact packaging — out by 12 August 2026 | Pactum",
  description:
    "Phase out intentionally added PFAS in food-contact packaging before 12 August 2026. Test, substitute and document against the 25 ppb / 250 ppb / 50 ppm thresholds.",
};

const META_FR = {
  title:
    "PFAS dans le contact alimentaire — sortir avant le 12 août 2026 | Pactum",
  description:
    "Sortir les PFAS intentionnels des emballages au contact alimentaire avant le 12 août 2026. Tester, substituer et documenter face aux seuils 25 ppb / 250 ppb / 50 ppm de l'article 5 du règlement PPWR.",
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
    question: "What does Article 5 prohibit and from when?",
    answerText:
      "Article 5 of Regulation (EU) 2025/40, in conjunction with Annex II, prohibits the placing on the market of food-contact packaging containing intentionally added PFAS at concentrations above the thresholds set in the Annex from 12 August 2026. The prohibition applies to the packaging unit and to each component of it, regardless of material. Stocks placed on the market before 12 August 2026 may continue to circulate within the supply chain under transitional rules but cannot be re-labelled or re-packed for new placement.",
  },
  {
    question: "What are the three thresholds?",
    answerText:
      "The Annex II thresholds are: 25 ppb for any individual PFAS substance measured by targeted analysis, 250 ppb for the sum of PFAS measured by targeted analysis (with degradation taken into account), and 50 ppm of total fluorine as an indicator. Fluorine above 50 ppm is treated as a presumption of intentional PFAS addition; the operator must then demonstrate by targeted analysis that the individual and sum thresholds are not exceeded.",
  },
  {
    question: "Which packaging is in scope?",
    answerText:
      "Food-contact packaging — primary packaging in direct or indirect contact with food, including paper and board with grease-resistant coatings, moulded fibre containers, films, trays, lids, and the inner coatings of metal cans. Article 5 reaches the component level, so a tray with a fluorinated grease-resistant coating is non-compliant even if the assembled item is mostly compliant. Non-food-contact packaging is not in scope of Article 5 — but PFAS may still fall under REACH or POPs restrictions.",
  },
  {
    question: "What is targeted analysis vs total fluorine?",
    answerText:
      "Targeted analysis is the chromatographic determination (LC-MS/MS, GC-MS) of named PFAS substances against the 25 ppb individual and 250 ppb sum limits. Total fluorine is an elemental method (combustion ion chromatography, EOF) that captures all organic fluorine as a single number, used as a screening indicator against the 50 ppm limit. The Regulation's calibration is targeted-first; total fluorine is the safety net for non-targeted PFAS chemistries.",
  },
  {
    question: "How do we secure the supply chain?",
    answerText:
      "Three steps. First, supplier declarations: a written attestation, recital-cited and component-specific, that no PFAS is intentionally added. Second, contractual clauses in the master purchase agreement making non-compliance with Article 5 a breach with indemnification, recall cost and warranty obligations. Third, a sampling and testing plan: representative samples per supplier per quarter, with results in the Article 39 technical file for ten years.",
  },
  {
    question: "What are the substitute materials?",
    answerText:
      "For grease resistance: silicone-based coatings, alkyl ketene dimer (AKD) sizing, fibre densification, and laminated films using polyolefins or PLA. For non-stick or release: silicone, biopolymer films, untreated paper-and-board where the application allows. Each substitute has trade-offs — runnability, food-contact migration, recyclability under Article 6, and recyclate eligibility under Article 7. We test each candidate against your application.",
  },
];

const FAQ_ITEMS_FR = [
  {
    question: "Que prohibe l'article 5 et à compter de quand ?",
    answerText:
      "L'article 5 du Règlement (UE) 2025/40, lu conjointement avec l'Annexe II, interdit la mise sur le marché des emballages au contact alimentaire contenant des PFAS intentionnellement ajoutés à des concentrations supérieures aux seuils de l'Annexe à compter du 12 août 2026. L'interdiction s'applique à l'unité d'emballage et à chacun de ses composants, quel que soit le matériau. Les stocks mis sur le marché avant le 12 août 2026 peuvent continuer à circuler dans la chaîne d'approvisionnement au titre des mesures transitoires, mais ne peuvent être ré-étiquetés ou ré-emballés pour une nouvelle mise sur le marché.",
  },
  {
    question: "Quels sont les trois seuils ?",
    answerText:
      "Les seuils de l'Annexe II sont : 25 ppb pour toute substance PFAS individuelle mesurée par analyse ciblée, 250 ppb pour la somme des PFAS mesurée par analyse ciblée (en tenant compte de la dégradation) et 50 ppm de fluor total comme indicateur. Un fluor supérieur à 50 ppm est traité comme une présomption d'ajout intentionnel de PFAS ; l'opérateur doit alors démontrer par analyse ciblée que les seuils individuel et somme ne sont pas dépassés.",
  },
  {
    question: "Quels emballages sont concernés ?",
    answerText:
      "Les emballages au contact alimentaire — emballage primaire en contact direct ou indirect avec l'aliment, y compris les papiers et cartons à revêtements anti-graisse, les barquettes en fibres moulées, les films, les barquettes, les opercules et les vernis intérieurs des boîtes métalliques. L'article 5 atteint le niveau composant : une barquette avec un revêtement anti-graisse fluoré est non conforme même si l'unité assemblée est globalement conforme. Les emballages hors contact alimentaire ne sont pas dans le périmètre de l'article 5 — mais les PFAS peuvent rester soumis à REACH ou aux restrictions POP.",
  },
  {
    question: "Qu'est-ce que l'analyse ciblée par rapport au fluor total ?",
    answerText:
      "L'analyse ciblée est la détermination chromatographique (LC-MS/MS, GC-MS) de substances PFAS nommément identifiées face aux seuils 25 ppb individuel et 250 ppb somme. Le fluor total est une méthode élémentaire (combustion-chromatographie ionique, EOF) qui capte tout le fluor organique comme un chiffre unique, utilisée comme indicateur de criblage face au seuil de 50 ppm. Le calibrage du règlement est ciblage-first ; le fluor total est le filet de sécurité pour les chimies PFAS non ciblées.",
  },
  {
    question: "Comment sécuriser la chaîne d'approvisionnement ?",
    answerText:
      "Trois étapes. D'abord, les déclarations fournisseurs : une attestation écrite, citant les considérants et spécifique au composant, qu'aucun PFAS n'est intentionnellement ajouté. Ensuite, des clauses contractuelles dans le contrat-cadre d'achat faisant de toute non-conformité à l'article 5 un manquement avec indemnisation, prise en charge des coûts de rappel et obligations de garantie. Enfin, un plan de prélèvement et de test : échantillons représentatifs par fournisseur et par trimestre, résultats versés au dossier technique de l'article 39 pendant dix ans.",
  },
  {
    question: "Quels sont les matériaux de substitution ?",
    answerText:
      "Pour la résistance aux graisses : revêtements à base de silicone, encollage AKD (dimère cétène alkylique), densification fibre et films complexés à base de polyoléfines ou de PLA. Pour le démoulage ou l'anti-adhérence : silicone, films biopolymères, papier-carton non traité lorsque l'application le permet. Chaque substitut a ses arbitrages — aptitude à la machine, migration au contact alimentaire, recyclabilité au titre de l'article 6 et éligibilité au recyclat au titre de l'article 7. Nous testons chaque candidat face à votre application.",
  },
];

const COMPARISON_HEADERS = {
  en: {
    eyebrow: "How we compare",
    title: "Pactum vs. Big-4 vs. sustainability consultancies",
    intro:
      "The PFAS programme is a regulatory and supply-chain problem with chemistry inside it. The advisor must read targeted analysis, substitute migration and supplier risk in the same brief.",
    big4: "Typical Big-4",
    sustainability: "Sustainability consultancy",
    caption: "Engagement dimension",
  },
  fr: {
    eyebrow: "Comparatif",
    title: "Pactum face aux Big-4 et aux cabinets RSE",
    intro:
      "Le programme PFAS est un problème réglementaire et de chaîne d'approvisionnement avec de la chimie à l'intérieur. Le conseil doit lire analyse ciblée, migration des substituts et risque fournisseur dans le même brief.",
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
          { label: "PFAS compliance" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 5 · SUBSTANCES OF CONCERN"
        title="PFAS in food-contact packaging — out by 12 August 2026."
        subtitle="Article 5 prohibits intentionally added PFAS in food-contact packaging above 25 ppb individual, 250 ppb sum, or 50 ppm total fluorine. Twelve months to test, substitute and document — we run the programme end to end."
        primaryCTA={{ href: `/${locale}/contact`, label: "Book a working session" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock locale={locale} title="What the regulation says">
        <p>
          Article 5 of Regulation (EU) 2025/40 prohibits the placing on the EU
          market of food-contact packaging containing per- and polyfluoroalkyl
          substances (PFAS) intentionally added at concentrations above the
          thresholds set in Annex II from <strong>12 August 2026</strong>.
          PFAS are defined for the purpose of the Regulation by reference to
          the OECD definition adopted by the Commission — any substance
          containing at least one fully fluorinated methyl (CF₃-) or methylene
          (-CF₂-) carbon atom, with the limited exclusions listed in the
          Annex.
        </p>
        <p>The three thresholds are:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>25 ppb</strong> for any individual PFAS substance measured
            by <em>targeted analysis</em> on the packaging or component;
          </li>
          <li>
            <strong>250 ppb</strong> for the sum of PFAS measured by targeted
            analysis, with degradation accounted for;
          </li>
          <li>
            <strong>50 ppm</strong> of total fluorine as an indicator
            screening test, above which the operator must demonstrate by
            targeted analysis that the individual and sum thresholds are not
            exceeded.
          </li>
        </ul>
        <p>
          The prohibition applies to the packaging unit and to each component
          of it, regardless of material. A coated paper tray, a metal can with
          a fluorinated lacquer, a plastic film with a fluorinated additive,
          and a moulded fibre container with a grease-resistant treatment are
          all in scope. The Article 5 obligation is anchored on the obligated
          economic operator placing the packaging on the EU market — the
          manufacturer, the importer or the authorised representative — and
          flows through to Article 39, which requires a written Declaration of
          Conformity and the technical documentation evidencing compliance to
          be retained for ten years.
        </p>
        <p>
          Non-compliance is enforced through the market-surveillance regime of
          Regulation (EU) 2019/1020 (as amended by the PPWR) and the Article
          68 penalties Member States must set. Authorities can demand the test
          file, sample-test the packaging, withdraw stock and impose financial
          penalties. Stocks placed on the market before 12 August 2026 may
          continue to circulate under transitional rules but cannot be re-
          labelled or re-packaged for fresh placement.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        title="What changes for your operations"
        items={[
          {
            title: "Every food-contact SKU needs a PFAS file",
            description:
              "Supplier declarations alone are not enough. Article 39 requires test evidence in the technical file. Targeted analysis on a representative sample per supplier per packaging type is the minimum defensible standard.",
          },
          {
            title: "Total-fluorine screening becomes routine",
            description:
              "EOF or combustion-IC for total organic fluorine becomes the front-line screen at incoming-goods. Above 50 ppm triggers the targeted-analysis follow-up. Most labs now offer the screen at €120–€220 per sample.",
          },
          {
            title: "Grease-resistant fibre packaging is the largest exposure",
            description:
              "Pizza boxes, fast-food trays, microwave popcorn bags, baking moulds, and quick-service paper wraps historically use fluorinated coatings. Substitution programmes need to start in 2025 to be on shelf by mid-2026.",
          },
          {
            title: "Master purchase agreements need PFAS clauses now",
            description:
              "Suppliers must warrant compliance with Article 5 thresholds, accept audit and re-testing rights, and indemnify recall and withdrawal cost. The clause sits on top of the existing food-contact warranty (Reg. (EC) 1935/2004).",
          },
          {
            title: "Substitute candidates need a multi-criteria sign-off",
            description:
              "Silicone, AKD sizing, PLA, polyolefin laminates and uncoated densified fibre each carry trade-offs against runnability, recyclability (Article 6), recyclate uptake (Article 7) and migration limits (Reg. (EU) 10/2011 / 1935/2004).",
          },
          {
            title: "Recall and withdrawal exposure is real",
            description:
              "Article 39 documentation gaps are themselves grounds for withdrawal, and Article 68 lets Member States impose dissuasive penalties. The board-level question is recall cost and brand harm, not just compliance theatre.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        title="What you get"
        description="A defensible, audit-ready PFAS programme built around your food-contact portfolio. Test plan, substitution roadmap, supplier clauses, and the file your market-surveillance authority can request."
        deliverables={[
          {
            icon: ShieldAlert,
            title: "PFAS exposure register",
            description:
              "Every food-contact SKU mapped to its component-level PFAS risk: coatings, sizings, films, lacquers, release agents, additives. Supplier-by-supplier exposure quantified and ranked.",
          },
          {
            icon: TestTube,
            title: "Test plan and lab partnerships",
            description:
              "Sampling protocol, targeted analysis (LC-MS/MS, GC-MS) and total fluorine (EOF / CIC) test plan, accredited lab shortlist, schedule of recurring testing and chain-of-custody for the Article 39 file.",
          },
          {
            icon: ArrowLeftRight,
            title: "Substitution roadmap",
            description:
              "Substitute material shortlist per application: silicone, AKD, fibre densification, polyolefin laminates, biopolymer films. Multi-criteria scorecard against PPWR Articles 6 and 7, food-contact migration and runnability.",
          },
          {
            icon: FileSignature,
            title: "Supplier clause library",
            description:
              "Master purchase agreement clauses, supplier attestation template, audit and re-testing rights, indemnification language. Aligned with Reg. (EC) 1935/2004 and Reg. (EU) 10/2011 for plastics in food contact.",
          },
        ]}
        timeToDeliver="4–6 weeks for a typical food and beverage portfolio"
        teamComposition="1 partner, 1 senior food-contact specialist, 1 procurement lead"
      />

      <HowWeWork
        locale={locale}
        title="How we work — five gates from exposure to file"
        steps={[
          {
            step: "01",
            title: "NDA, food-contact perimeter and SKU registration",
            duration: "Week 0",
            description:
              "Mutual NDA. We register every food-contact SKU placed on the EU market, with material, supplier, country and volume. Non-food-contact items are de-scoped at this stage.",
          },
          {
            step: "02",
            title: "Component-level risk assessment",
            duration: "Weeks 1–2",
            description:
              "We score every component for PFAS risk: fluorinated coatings, sizings, additives, release agents, lacquers. Supplier declarations are gathered and ranked by reliability — many are not specific enough to be defensible.",
          },
          {
            step: "03",
            title: "Test plan execution",
            duration: "Weeks 2–4",
            description:
              "Total-fluorine screening runs first as the indicator test against the 50 ppm threshold; positive screens trigger targeted analysis against 25 ppb individual and 250 ppb sum. Results are logged in the technical file format.",
          },
          {
            step: "04",
            title: "Substitution and supplier negotiation",
            duration: "Weeks 4–5",
            description:
              "For non-conforming SKUs we shortlist substitutes, run a multi-criteria evaluation, and negotiate with existing or alternate suppliers. New PPA clauses are drafted and signed before line-trial.",
          },
          {
            step: "05",
            title: "Steering committee and Article 39 hand-over",
            duration: "Weeks 5–6",
            description:
              "We hand over the exposure register, the test file, the substitution roadmap and the clause library. We brief the steering committee and integrate the file into your Declaration of Conformity workflow.",
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
                  us: { type: "yes", text: "Article 5 every day" },
                  competitor1: { type: "no", text: "One offer in ESG portfolio" },
                  competitor2: { type: "no", text: "Circular-economy generalist" },
                },
                {
                  criterion: "Regulatory horizon scanning",
                  us: { type: "yes", text: "REACH, POPs, food-contact regimes tracked weekly" },
                  competitor1: { type: "mixed", text: "Quarterly briefings" },
                  competitor2: { type: "no", text: "Ad-hoc" },
                },
                {
                  criterion: "Time to first deliverable",
                  us: { type: "yes", text: "Programme in 4–6 weeks" },
                  competitor1: { type: "no", text: "12–20 weeks" },
                  competitor2: { type: "no", text: "8–14 weeks" },
                },
                {
                  criterion: "Fixed scope, fixed price",
                  us: { type: "yes", text: "Quoted before kick-off" },
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

      <FAQ
        title="Questions on the Article 5 PFAS programme"
        items={FAQ_ITEMS_FOR_FAQ}
      />

      <section className="bg-[#f5f7f4] py-12">
        <div className="mx-auto max-w-[1080px] px-6">
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {CONTINUE_READING.en}{" "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/ppwr-gap-analysis`}
            >
              PPWR Gap Analysis
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
              href={`/${locale}/services/recyclability-assessment`}
            >
              Recyclability assessment (Article 6)
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
        title="Be PFAS-clear before 12 August 2026"
        description="Book a 30-minute working session. We confirm the food-contact perimeter, sign the NDA and start the test plan within the week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_EN,
          description: META_EN.description,
          serviceType: "Article 5 PFAS compliance for PPWR",
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
          { label: "Conformité PFAS" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 5 · SUBSTANCES PRÉOCCUPANTES"
        title="PFAS dans le contact alimentaire — sortir avant le 12 août 2026."
        subtitle="L'article 5 interdit les PFAS intentionnellement ajoutés dans les emballages au contact alimentaire au-delà de 25 ppb individuel, 250 ppb somme ou 50 ppm de fluor total. Douze mois pour tester, substituer et documenter — nous menons le programme de bout en bout."
        primaryCTA={{ href: `/${locale}/contact`, label: "Réserver une session de travail" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Diagnostic PPWR gratuit",
        }}
      />

      <RegulationBlock locale={locale}>
        <p>
          L&apos;article 5 du Règlement (UE) 2025/40 interdit la mise sur le
          marché européen d&apos;emballages au contact alimentaire contenant
          des substances per- et polyfluoroalkylées (PFAS) intentionnellement
          ajoutées à des concentrations supérieures aux seuils de
          l&apos;Annexe II à compter du <strong>12 août 2026</strong>. Les
          PFAS sont définis aux fins du règlement par renvoi à la définition
          OCDE adoptée par la Commission — toute substance contenant au moins
          un atome de carbone méthyle (CF₃-) ou méthylène (-CF₂-) entièrement
          fluoré, avec les exclusions limitées listées en annexe.
        </p>
        <p>Les trois seuils sont :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>25 ppb</strong> pour toute substance PFAS individuelle
            mesurée par <em>analyse ciblée</em> sur l&apos;emballage ou le
            composant ;
          </li>
          <li>
            <strong>250 ppb</strong> pour la somme des PFAS mesurée par
            analyse ciblée, dégradation prise en compte ;
          </li>
          <li>
            <strong>50 ppm</strong> de fluor total comme test indicateur de
            criblage ; au-delà, l&apos;opérateur doit démontrer par analyse
            ciblée que les seuils individuel et somme ne sont pas dépassés.
          </li>
        </ul>
        <p>
          L&apos;interdiction s&apos;applique à l&apos;unité d&apos;emballage
          et à chacun de ses composants, quel que soit le matériau. Une
          barquette papier enduite, une boîte métallique avec vernis fluoré,
          un film plastique avec additif fluoré et une barquette en fibres
          moulées avec traitement anti-graisse sont tous concernés.
          L&apos;obligation de l&apos;article 5 s&apos;ancre sur
          l&apos;opérateur économique obligé qui met l&apos;emballage sur le
          marché européen — fabricant, importateur ou mandataire — et se
          répercute sur l&apos;article 39, qui exige une Déclaration de
          conformité écrite et la conservation pendant dix ans de la
          documentation technique attestant la conformité.
        </p>
        <p>
          La non-conformité est sanctionnée via le régime de surveillance du
          marché du Règlement (UE) 2019/1020 (modifié par la PPWR) et les
          sanctions de l&apos;article 68 que les États membres doivent fixer.
          Les autorités peuvent exiger le dossier de tests, prélever des
          échantillons, retirer les stocks et imposer des sanctions
          financières. Les stocks mis sur le marché avant le 12 août 2026
          peuvent continuer à circuler au titre des mesures transitoires,
          mais ne peuvent être ré-étiquetés ou ré-emballés pour une nouvelle
          mise sur le marché.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        items={[
          {
            title: "Chaque SKU au contact alimentaire a besoin d'un dossier PFAS",
            description:
              "Les déclarations fournisseurs ne suffisent pas. L'article 39 exige des preuves de tests dans le dossier technique. L'analyse ciblée sur un échantillon représentatif par fournisseur et par type d'emballage est le standard minimum défendable.",
          },
          {
            title: "Le criblage fluor total devient une routine",
            description:
              "L'EOF ou la combustion-IC pour le fluor organique total devient le criblage de première ligne en réception. Au-delà de 50 ppm, l'analyse ciblée prend le relais. La plupart des laboratoires proposent désormais le criblage à 120-220 € par échantillon.",
          },
          {
            title: "Les emballages fibreux anti-graisse sont l'exposition principale",
            description:
              "Boîtes à pizza, barquettes restauration rapide, sachets pop-corn micro-ondes, moules de cuisson et papiers emballants en restauration rapide utilisent historiquement des revêtements fluorés. Les programmes de substitution doivent démarrer en 2025 pour être en linéaire à mi-2026.",
          },
          {
            title: "Les contrats-cadres d'achat exigent des clauses PFAS dès aujourd'hui",
            description:
              "Les fournisseurs doivent garantir la conformité aux seuils de l'article 5, accepter les droits d'audit et de re-test et indemniser les coûts de rappel et de retrait. La clause s'ajoute à la garantie contact alimentaire existante (Règlement (CE) 1935/2004).",
          },
          {
            title: "Les substituts nécessitent une validation multi-critères",
            description:
              "Silicone, encollage AKD, PLA, complexes polyoléfines et fibre densifiée non enduite ont chacun des arbitrages face à l'aptitude machine, la recyclabilité (article 6), l'éligibilité au recyclat (article 7) et les limites de migration (Règlement (UE) 10/2011 / 1935/2004).",
          },
          {
            title: "L'exposition au rappel et au retrait est réelle",
            description:
              "Les lacunes documentaires de l'article 39 constituent en elles-mêmes un motif de retrait, et l'article 68 permet aux États membres d'imposer des sanctions dissuasives. La question pour le conseil d'administration est le coût de rappel et l'atteinte à la marque, et non le simple théâtre de la conformité.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        description="Un programme PFAS audit-ready et défendable, construit autour de votre portefeuille au contact alimentaire. Plan de tests, feuille de route de substitution, clauses fournisseurs et dossier que votre autorité de surveillance peut demander."
        deliverables={[
          {
            icon: ShieldAlert,
            title: "Registre d'exposition PFAS",
            description:
              "Chaque SKU au contact alimentaire rapproché de son risque PFAS au niveau composant : revêtements, encollages, films, vernis, agents de démoulage, additifs. Exposition fournisseur par fournisseur quantifiée et hiérarchisée.",
          },
          {
            icon: TestTube,
            title: "Plan de tests et partenariats laboratoire",
            description:
              "Protocole d'échantillonnage, plan de tests d'analyse ciblée (LC-MS/MS, GC-MS) et fluor total (EOF / CIC), short-list de laboratoires accrédités, calendrier de tests récurrents et chaîne de traçabilité pour le dossier de l'article 39.",
          },
          {
            icon: ArrowLeftRight,
            title: "Feuille de route de substitution",
            description:
              "Short-list de matériaux de substitution par application : silicone, AKD, densification fibre, complexes polyoléfines, films biopolymères. Tableau de notation multi-critères face aux articles 6 et 7 PPWR, à la migration au contact alimentaire et à l'aptitude machine.",
          },
          {
            icon: FileSignature,
            title: "Bibliothèque de clauses fournisseurs",
            description:
              "Clauses de contrat-cadre d'achat, modèle d'attestation fournisseur, droits d'audit et de re-test, libellés d'indemnisation. Alignées sur le Règlement (CE) 1935/2004 et le Règlement (UE) 10/2011 pour le plastique au contact alimentaire.",
          },
        ]}
        timeToDeliver="4 à 6 semaines pour un portefeuille agroalimentaire typique"
        teamComposition="1 associé, 1 spécialiste senior contact alimentaire, 1 lead achats"
      />

      <HowWeWork
        locale={locale}
        title="Notre méthode — cinq jalons, de l'exposition au dossier"
        steps={[
          {
            step: "01",
            title: "NDA, périmètre contact alimentaire et enregistrement SKU",
            duration: "Semaine 0",
            description:
              "NDA mutuel. Nous enregistrons chaque SKU au contact alimentaire mis sur le marché européen, avec matière, fournisseur, pays et volume. Les articles hors contact alimentaire sont sortis du périmètre à ce stade.",
          },
          {
            step: "02",
            title: "Évaluation du risque au niveau composant",
            duration: "Semaines 1-2",
            description:
              "Nous notons chaque composant pour le risque PFAS : revêtements fluorés, encollages, additifs, agents de démoulage, vernis. Les déclarations fournisseurs sont collectées et classées selon leur fiabilité — beaucoup ne sont pas suffisamment précises pour être défendables.",
          },
          {
            step: "03",
            title: "Exécution du plan de tests",
            duration: "Semaines 2-4",
            description:
              "Le criblage fluor total est exécuté en premier comme test indicateur face au seuil de 50 ppm ; les criblages positifs déclenchent l'analyse ciblée face à 25 ppb individuel et 250 ppb somme. Les résultats sont consignés au format dossier technique.",
          },
          {
            step: "04",
            title: "Substitution et négociation fournisseurs",
            duration: "Semaines 4-5",
            description:
              "Pour les SKU non conformes, nous établissons une short-list de substituts, menons une évaluation multi-critères et négocions avec les fournisseurs existants ou alternatifs. De nouvelles clauses contractuelles sont rédigées et signées avant essai de ligne.",
          },
          {
            step: "05",
            title: "Comité de pilotage et passation à l'article 39",
            duration: "Semaines 5-6",
            description:
              "Nous remettons le registre d'exposition, le dossier de tests, la feuille de route de substitution et la bibliothèque de clauses. Nous briefons le comité de pilotage et intégrons le dossier dans votre processus de Déclaration de conformité.",
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
                  us: { type: "yes", text: "Article 5 au quotidien" },
                  competitor1: { type: "no", text: "Une offre dans un portefeuille RSE" },
                  competitor2: { type: "no", text: "Généraliste économie circulaire" },
                },
                {
                  criterion: "Veille réglementaire",
                  us: { type: "yes", text: "REACH, POP et régimes contact alimentaire suivis chaque semaine" },
                  competitor1: { type: "mixed", text: "Briefings trimestriels" },
                  competitor2: { type: "no", text: "Au coup par coup" },
                },
                {
                  criterion: "Délai au premier livrable",
                  us: { type: "yes", text: "Programme en 4 à 6 semaines" },
                  competitor1: { type: "no", text: "12 à 20 semaines" },
                  competitor2: { type: "no", text: "8 à 14 semaines" },
                },
                {
                  criterion: "Périmètre fixe, prix fixe",
                  us: { type: "yes", text: "Devis avant kick-off" },
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
        title="Questions sur le programme PFAS (article 5)"
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
              href={`/${locale}/services/ppwr-gap-analysis`}
            >
              Analyse des écarts PPWR
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
              href={`/${locale}/services/recyclability-assessment`}
            >
              Évaluation de recyclabilité (article 6)
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
        title="Soyez PFAS-clear avant le 12 août 2026"
        description="Réservez une session de travail de 30 minutes. Nous confirmons le périmètre contact alimentaire, signons le NDA et démarrons le plan de tests dans la semaine."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_FR,
          description: META_FR.description,
          serviceType: "Conformité PFAS (article 5) PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}

export default async function PfasCompliancePage({
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
