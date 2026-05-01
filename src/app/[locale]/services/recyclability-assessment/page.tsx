import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Recycle,
  FlaskConical,
  Hammer,
  LineChart,
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

const SERVICE_PATH = "/services/recyclability-assessment";
const SERVICE_URL_BASE = "https://pactum-advisory.eu";

const SERVICE_NAME_EN = "Recyclability Assessment (Article 6)";
const SERVICE_NAME_FR = "Évaluation de recyclabilité (article 6)";

const META_EN = {
  title: "Recyclability assessment — Grade every SKU A, B or C | Pactum",
  description:
    "Grade every SKU against Article 6 of Regulation (EU) 2025/40. Get A, B or C scores, redesign actions and cost-to-grade-up estimates before the 1 January 2030 cut-off.",
};

const META_FR = {
  title:
    "Évaluation de recyclabilité PPWR — noter chaque SKU A, B ou C | Pactum",
  description:
    "Noter chaque SKU au regard de l'article 6 du règlement PPWR (Règlement (UE) 2025/40). Classes A, B ou C, actions de redesign et coûts de montée en gamme avant le 1er janvier 2030.",
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
    question: "What are the recyclability classes under Article 6?",
    answerText:
      "Article 6 of Regulation (EU) 2025/40 grades every packaging unit by recyclate yield: Class A is at least 95%, Class B at least 80%, and Class C at least 70%. Below 70% the packaging is non-recyclable by design and cannot be placed on the EU market from 1 January 2030. Class C is permitted between 1 January 2030 and 31 December 2037 only; from 1 January 2038 only Classes A and B remain admissible.",
  },
  {
    question: "When are the design-for-recycling delegated acts due?",
    answerText:
      "The Commission must adopt the design-for-recycling delegated acts by the end of 2027. Until then, the high-level criteria in Article 6 apply: separability of components, no inks or adhesives that block sorting or recycling, no labels covering more than 50% of the surface, and no carbon-black pigments that defeat NIR sorting. Our assessment uses the published draft criteria and the most-recent CEN technical specifications.",
  },
  {
    question: "Are food-contact and contact-sensitive SKUs assessed differently?",
    answerText:
      "Yes. Contact-sensitive packaging — Article 3(43) — has stricter constraints because EFSA-authorised recycling routes for food-contact rPET, rHDPE and rPP are limited. We flag every food-contact SKU separately and cross-reference Commission Regulation (EU) 2022/1616 on recycled plastic materials and articles intended to come into contact with food.",
  },
  {
    question: "What does cost-to-grade-up actually include?",
    answerText:
      "For each SKU graded B or C we cost the actions required to lift it one class: tooling and mould changes, label and ink changes, cap or pump redesign, supplier qualification, line-trial cost and, where relevant, EFSA notification fees. We give a low-mid-high range and the months-to-implementation. Class C SKUs that cannot reach Class B by 1 January 2038 are flagged for portfolio rationalisation.",
  },
  {
    question: "Can the assessment be used for EPR fee modulation?",
    answerText:
      "Yes. Article 45 makes eco-modulated fees mandatory across Member States and the modulation is anchored on the Article 6 grade. The output of our assessment is the file you submit to your PRO. We also forecast the EPR fee impact at country level for the next five years using the most-recent published modulation curves.",
  },
  {
    question: "How does this work with the PPWR Gap Analysis?",
    answerText:
      "The Gap Analysis is portfolio-wide and covers every article. The Recyclability Assessment is the deep dive on Article 6 for SKUs flagged at risk. Most clients run the Gap Analysis first, then commission the assessment for the 100–500 SKUs that are at Class C risk. We hand off the same SKU master between the two engagements.",
  },
];

const FAQ_ITEMS_FR = [
  {
    question: "Quelles sont les classes de recyclabilité au titre de l'article 6 ?",
    answerText:
      "L'article 6 du Règlement (UE) 2025/40 note chaque unité d'emballage selon son rendement de recyclat : Classe A au moins 95 %, Classe B au moins 80 %, Classe C au moins 70 %. En deçà de 70 %, l'emballage est non recyclable par conception et ne peut être mis sur le marché européen à partir du 1er janvier 2030. La Classe C n'est autorisée qu'entre le 1er janvier 2030 et le 31 décembre 2037 ; à partir du 1er janvier 2038, seules les Classes A et B restent admissibles.",
  },
  {
    question: "Quand les actes délégués sur la conception en vue du recyclage sont-ils attendus ?",
    answerText:
      "La Commission doit adopter les actes délégués sur la conception en vue du recyclage avant fin 2027. D'ici là, les critères de haut niveau de l'article 6 s'appliquent : séparabilité des composants, pas d'encres ou d'adhésifs bloquant le tri ou le recyclage, étiquettes ne couvrant pas plus de 50 % de la surface, pas de pigments noir de carbone bloquant le tri NIR. Notre évaluation s'appuie sur les critères en projet publiés et les spécifications techniques CEN les plus récentes.",
  },
  {
    question: "Les SKU au contact alimentaire sont-ils évalués différemment ?",
    answerText:
      "Oui. Les emballages au contact (article 3(43)) sont soumis à des contraintes plus strictes car les filières de recyclage autorisées par l'EFSA pour le rPET, rPEHD et rPP au contact alimentaire sont limitées. Nous identifions chaque SKU au contact séparément et croisons avec le Règlement (UE) 2022/1616 sur les matériaux et objets en plastique recyclé destinés au contact alimentaire.",
  },
  {
    question: "Que recouvre le coût de montée en gamme ?",
    answerText:
      "Pour chaque SKU classé B ou C, nous chiffrons les actions nécessaires pour le faire monter d'une classe : modifications d'outillage et de moules, changements d'étiquettes et d'encres, redesign de bouchons ou de pompes, qualification fournisseur, essais de ligne et, le cas échéant, frais de notification EFSA. Nous donnons une fourchette basse-moyenne-haute et un délai en mois. Les SKU Classe C qui ne peuvent atteindre la Classe B avant le 1er janvier 2038 sont signalés pour rationalisation de portefeuille.",
  },
  {
    question: "L'évaluation peut-elle servir à la modulation des éco-contributions ?",
    answerText:
      "Oui. L'article 45 rend l'éco-modulation obligatoire dans tous les États membres et la modulation s'appuie sur la classe de l'article 6. La sortie de notre évaluation est le dossier que vous remettez à votre éco-organisme. Nous projetons également l'impact des éco-contributions par pays sur cinq ans en utilisant les courbes de modulation publiées les plus récentes.",
  },
  {
    question: "Comment ce service s'articule avec l'analyse des écarts PPWR ?",
    answerText:
      "L'analyse des écarts couvre l'ensemble du portefeuille et tous les articles. L'évaluation de recyclabilité est l'approfondissement sur l'article 6 pour les SKU signalés à risque. La plupart des clients lancent d'abord l'analyse des écarts, puis commandent l'évaluation pour les 100 à 500 SKU exposés au risque Classe C. Nous transférons le même maître SKU entre les deux missions.",
  },
];

const COMPARISON_HEADERS = {
  en: {
    eyebrow: "How we compare",
    title: "Pactum vs. Big-4 vs. sustainability consultancies",
    intro:
      "Recyclability is testable, not a thought experiment. Article 6 demands evidence — by component, against published criteria, in the file your market surveillance authority can request.",
    big4: "Typical Big-4",
    sustainability: "Sustainability consultancy",
    caption: "Engagement dimension",
  },
  fr: {
    eyebrow: "Comparatif",
    title: "Pactum face aux Big-4 et aux cabinets RSE",
    intro:
      "La recyclabilité se teste, ce n'est pas une expérience de pensée. L'article 6 exige des preuves, composant par composant, au regard des critères publiés, dans le dossier que votre autorité de surveillance peut demander.",
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
          { label: "Recyclability assessment" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 6 · DESIGN FOR RECYCLING"
        title="Recyclability assessment — grade every SKU A, B or C."
        subtitle="Article 6 grades every packaging unit by recyclate yield: Class A ≥95%, Class B ≥80%, Class C ≥70%. We grade your portfolio, list redesigns and cost the move from C to B before 1 January 2030."
        primaryCTA={{ href: `/${locale}/contact`, label: "Book a working session" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock locale={locale} title="What the regulation says">
        <p>
          Article 6 of Regulation (EU) 2025/40 makes recyclability by design a
          placing-on-the-market obligation. From <strong>1 January 2030</strong>,
          every packaging unit placed on the EU market must be{" "}
          <em>recyclable</em> in line with the design-for-recycling criteria
          set by delegated act, and must achieve a recyclate yield of at least
          70% (Class C). Below that threshold, the packaging cannot lawfully be
          placed on the market.
        </p>
        <p>
          The grading scale is fixed by the Regulation:{" "}
          <strong>Class A ≥ 95%</strong>, <strong>Class B ≥ 80%</strong>,{" "}
          <strong>Class C ≥ 70%</strong>. From <strong>1 January 2038</strong>,
          only Classes A and B remain admissible — Class C is banned. Specific
          packaging types (transport, grouped, e-commerce) face an earlier 2030
          ceiling on Class C placement under delegated criteria still being
          finalised.
        </p>
        <p>
          Article 6 also sets the high-level criteria the delegated acts must
          translate into testable rules: components must be separable for
          sorting, the packaging must use no inks, adhesives or pigments that
          inhibit sorting or recycling (notably no NIR-blocking carbon black on
          plastic packaging), labels must not cover more than the surface area
          set by delegated act (the published draft caps at 50% on rigid
          plastic), and the recyclability assessment must be performed on the
          packaging unit as placed on the market, not on its individual
          components in isolation.
        </p>
        <p>
          The Commission must adopt the delegated acts on design-for-recycling
          criteria, the harmonised methodology to determine recyclability and
          the calculation of recyclate yield by <strong>end of 2027</strong>.
          Article 6 is then read together with Article 7 (recycled content),
          Article 12 (sorting label and digital data carrier) and Article 45
          (eco-modulated EPR fees), all of which use the A/B/C grade as the
          reference. A non-conforming packaging unit triggers Article 39
          documentation issues and the penalties Member States set under
          Article 68, including recall and withdrawal.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        title="What changes for your operations"
        items={[
          {
            title: "Sorting labels and inks come under the microscope",
            description:
              "Carbon-black on PET, full-sleeve PVC labels and metallised inks all degrade NIR sorting. Article 6 criteria will require switches to detectable formulations on every Class A and B claim.",
          },
          {
            title: "Multi-material laminates lose their default status",
            description:
              "Aluminium-PET-PE laminates, paper-plastic composites for snacks, and coated cartons need separability at end-of-life. Where they cannot be redesigned, Class C is the ceiling — and Class C disappears in 2038.",
          },
          {
            title: "Caps, pumps and dispensers are scored separately",
            description:
              "An HDPE bottle with a PP cap and an aluminium-foil seal scores against the assembled unit. Cap-tethering (Directive (EU) 2019/904) compounds the constraint. Each component change has tooling cost.",
          },
          {
            title: "Food-contact recyclate gates the plastic redesign",
            description:
              "Commission Regulation (EU) 2022/1616 limits food-contact recyclate to EFSA-authorised processes, today mainly rPET. Delivering Class A on a food-grade HDPE bottle in 2030 requires a supply contract today.",
          },
          {
            title: "EPR fees re-price every SKU from 2030",
            description:
              "Article 45 mandates eco-modulation. Class C fees will be materially higher than Class A; some Member States already publish indicative curves. The assessment feeds your fee forecast and your make-or-buy.",
          },
          {
            title: "NPD gate review needs a recyclability sign-off",
            description:
              "Every new packaging project must clear an Article 6 review before tooling. We document the RACI, the test-method standards (CEN/TS 19101) and the file your category teams keep on record.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        title="What you get"
        description="The artefacts your packaging engineering, procurement and regulatory teams need to take Class C SKUs to Class B before 2030 — and Class B to Class A before 2038."
        deliverables={[
          {
            icon: Recycle,
            title: "A/B/C grade per SKU",
            description:
              "Excel matrix grading every SKU against Article 6 design-for-recycling criteria and the published draft delegated act. Component-level scoring, not just the assembled unit.",
          },
          {
            icon: FlaskConical,
            title: "Test-method file",
            description:
              "Documented test methods, lab references and supplier evidence for each grade. Aligned with CEN/TS 19101, the EFSA opinions for food-contact rPET and the Commission's recyclability calculator.",
          },
          {
            icon: Hammer,
            title: "Redesign action list",
            description:
              "Per-SKU list of redesigns to lift the grade: ink change, label substitution, cap re-spec, NIR-detectable pigment, mono-material conversion. Tooling cost, supplier and months-to-line.",
          },
          {
            icon: LineChart,
            title: "Cost-to-grade-up model",
            description:
              "Capex/opex range to move each SKU one class up, EPR fee delta at country level, and a ranked backlog showing which SKUs to redesign, which to rationalise and which to switch supplier.",
          },
        ]}
        timeToDeliver="3–4 weeks for up to 250 SKUs"
        teamComposition="1 partner, 1 senior packaging engineer, 1 regulatory analyst"
      />

      <HowWeWork
        locale={locale}
        title="How we work — five gates from grade to redesign"
        steps={[
          {
            step: "01",
            title: "NDA, scope and SKU sample",
            duration: "Week 0",
            description:
              "Mutual NDA. We agree the SKU perimeter (typically 50–500), the Member States in scope and the priority Annex V categories. You provide the packaging specs and supplier declarations.",
          },
          {
            step: "02",
            title: "Test-method calibration",
            duration: "Week 1",
            description:
              "We calibrate the grading method against the published Commission methodology, the CEN/TS standards and the most recent draft delegated acts. Where ambiguity remains, we document the assumption.",
          },
          {
            step: "03",
            title: "Component-level grading",
            duration: "Weeks 1–2",
            description:
              "Every SKU is scored at component and assembled-unit level. Inks, adhesives, pigments, label coverage, cap tethering, separability and NIR-detectability are all tested against the criteria.",
          },
          {
            step: "04",
            title: "Redesign and cost-up",
            duration: "Weeks 2–3",
            description:
              "For every Class B and Class C SKU we cost the actions to lift the grade. Tooling, supplier qualification, line-trial cost, EFSA notification where required, and time to first commercial run.",
          },
          {
            step: "05",
            title: "Steering committee and EPR forecast",
            duration: "Week 3–4",
            description:
              "We hand over the SKU grade matrix, the redesign backlog, the cost model and the EPR fee forecast at country level. We brief the steering committee and agree the redesign roadmap.",
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
                  us: { type: "yes", text: "Article 6 every day" },
                  competitor1: { type: "no", text: "One offer in ESG portfolio" },
                  competitor2: { type: "no", text: "Circular-economy generalist" },
                },
                {
                  criterion: "Regulatory horizon scanning",
                  us: { type: "yes", text: "Delegated acts and CEN standards tracked weekly" },
                  competitor1: { type: "mixed", text: "Quarterly briefings" },
                  competitor2: { type: "no", text: "Ad-hoc" },
                },
                {
                  criterion: "Time to first deliverable",
                  us: { type: "yes", text: "Grade matrix in 3–4 weeks" },
                  competitor1: { type: "no", text: "10–16 weeks" },
                  competitor2: { type: "no", text: "8–12 weeks" },
                },
                {
                  criterion: "Fixed scope, fixed price",
                  us: { type: "yes", text: "Quoted per SKU band before kick-off" },
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
        title="Questions on the Article 6 recyclability assessment"
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
        title="Grade every SKU before 2030"
        description="Book a 30-minute working session. We confirm the SKU perimeter, sign the NDA and start the recyclability assessment within the week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_EN,
          description: META_EN.description,
          serviceType: "Article 6 recyclability assessment for PPWR",
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
          { label: "Évaluation de recyclabilité" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 6 · CONCEPTION POUR LE RECYCLAGE"
        title="Évaluation de recyclabilité — noter chaque SKU A, B ou C."
        subtitle="L'article 6 note chaque unité d'emballage selon son rendement de recyclat : Classe A ≥ 95 %, Classe B ≥ 80 %, Classe C ≥ 70 %. Nous notons votre portefeuille, listons les redesigns et chiffrons le passage de C à B avant le 1er janvier 2030."
        primaryCTA={{ href: `/${locale}/contact`, label: "Réserver une session de travail" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Diagnostic PPWR gratuit",
        }}
      />

      <RegulationBlock locale={locale}>
        <p>
          L&apos;article 6 du Règlement (UE) 2025/40 fait de la recyclabilité
          par conception une obligation de mise sur le marché. À compter du{" "}
          <strong>1er janvier 2030</strong>, chaque unité d&apos;emballage mise
          sur le marché européen doit être <em>recyclable</em> conformément
          aux critères de conception en vue du recyclage fixés par acte
          délégué et atteindre un rendement de recyclat d&apos;au moins 70 %
          (Classe C). En deçà de ce seuil, l&apos;emballage ne peut légalement
          être mis sur le marché.
        </p>
        <p>
          L&apos;échelle de notation est fixée par le règlement :{" "}
          <strong>Classe A ≥ 95 %</strong>, <strong>Classe B ≥ 80 %</strong>,{" "}
          <strong>Classe C ≥ 70 %</strong>. À compter du{" "}
          <strong>1er janvier 2038</strong>, seules les Classes A et B sont
          admissibles : la Classe C est interdite. Certains formats (transport,
          regroupé, e-commerce) sont soumis à un plafonnement plus précoce de
          la Classe C dès 2030, en vertu de critères délégués en cours
          d&apos;élaboration.
        </p>
        <p>
          L&apos;article 6 fixe également les critères de haut niveau que les
          actes délégués devront décliner en règles testables : les composants
          doivent être séparables au tri ; l&apos;emballage ne doit pas
          comporter d&apos;encres, d&apos;adhésifs ou de pigments inhibant le
          tri ou le recyclage (notamment pas de noir de carbone bloquant le
          NIR sur les plastiques) ; les étiquettes ne doivent pas couvrir plus
          que la surface fixée par acte délégué (le projet publié plafonne à
          50 % sur le plastique rigide) ; et l&apos;évaluation de
          recyclabilité doit être effectuée sur l&apos;unité d&apos;emballage
          telle que mise sur le marché, et non sur ses composants pris
          isolément.
        </p>
        <p>
          La Commission doit adopter les actes délégués sur les critères de
          conception en vue du recyclage, la méthodologie harmonisée pour
          déterminer la recyclabilité et le calcul du rendement de recyclat
          avant <strong>fin 2027</strong>. L&apos;article 6 se lit ensuite
          conjointement avec l&apos;article 7 (contenu recyclé), l&apos;article
          12 (étiquette de tri et identifiant numérique) et l&apos;article 45
          (éco-modulation REP), qui prennent tous la classe A/B/C comme
          référence. Une unité non conforme déclenche les difficultés
          documentaires de l&apos;article 39 et les sanctions fixées par les
          États membres au titre de l&apos;article 68, dont le rappel et le
          retrait du marché.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        items={[
          {
            title: "Étiquettes et encres de tri sous surveillance",
            description:
              "Le noir de carbone sur PET, les manchons PVC pleine surface et les encres métallisées dégradent le tri NIR. Les critères de l'article 6 imposeront le passage à des formulations détectables sur toute revendication Classe A et B.",
          },
          {
            title: "Les complexes multi-matières perdent leur statut par défaut",
            description:
              "Les complexes aluminium-PET-PE, les composites papier-plastique pour snacks et les cartons enduits doivent être séparables en fin de vie. Quand le redesign est impossible, la Classe C est le plafond, et la Classe C disparaît en 2038.",
          },
          {
            title: "Bouchons, pompes et distributeurs notés séparément",
            description:
              "Une bouteille PEHD avec un bouchon PP et un opercule aluminium est notée par rapport à l'unité assemblée. Le bouchon attaché (directive (UE) 2019/904) accentue la contrainte. Chaque évolution de composant a un coût d'outillage.",
          },
          {
            title: "Le recyclat alimentaire conditionne le redesign plastique",
            description:
              "Le Règlement (UE) 2022/1616 limite le recyclat au contact alimentaire aux procédés autorisés par l'EFSA, aujourd'hui essentiellement le rPET. Atteindre une Classe A sur un flacon PEHD au contact alimentaire en 2030 nécessite un contrat d'approvisionnement signé dès aujourd'hui.",
          },
          {
            title: "Les éco-contributions reprice chaque SKU à partir de 2030",
            description:
              "L'article 45 impose l'éco-modulation. Les contributions Classe C seront sensiblement supérieures à celles de la Classe A ; certains États membres publient déjà des courbes indicatives. L'évaluation alimente votre prévision de contributions et votre make-or-buy.",
          },
          {
            title: "La revue de jalon NPI exige un sign-off recyclabilité",
            description:
              "Chaque nouveau projet d'emballage doit franchir une revue article 6 avant outillage. Nous documentons la RACI, les normes de méthode (CEN/TS 19101) et le dossier que vos équipes catégorie tiennent à jour.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        description="Les artefacts dont vos équipes ingénierie emballage, achats et réglementaire ont besoin pour faire passer les SKU Classe C à Classe B avant 2030, et Classe B à Classe A avant 2038."
        deliverables={[
          {
            icon: Recycle,
            title: "Note A/B/C par SKU",
            description:
              "Matrice Excel notant chaque SKU au regard des critères de conception en vue du recyclage de l'article 6 et du projet d'acte délégué publié. Notation au niveau composant, et non uniquement de l'unité assemblée.",
          },
          {
            icon: FlaskConical,
            title: "Dossier de méthodes de test",
            description:
              "Méthodes de test documentées, références laboratoire et preuves fournisseurs pour chaque classe. Aligné avec CEN/TS 19101, les avis EFSA pour le rPET au contact alimentaire et le calculateur de recyclabilité de la Commission.",
          },
          {
            icon: Hammer,
            title: "Plan d'actions de redesign",
            description:
              "Liste par SKU des redesigns pour gagner une classe : changement d'encre, substitution d'étiquette, re-spec de bouchon, pigment détectable NIR, conversion mono-matériau. Coût d'outillage, fournisseur et délai en mois.",
          },
          {
            icon: LineChart,
            title: "Modèle de coût de montée en gamme",
            description:
              "Fourchette capex/opex pour faire monter chaque SKU d'une classe, delta d'éco-contribution par pays, et backlog hiérarchisé des SKU à redessiner, à rationaliser ou à changer de fournisseur.",
          },
        ]}
        timeToDeliver="3 à 4 semaines pour jusqu'à 250 SKU"
        teamComposition="1 associé, 1 ingénieur emballage senior, 1 analyste réglementaire"
      />

      <HowWeWork
        locale={locale}
        title="Notre méthode — cinq jalons, de la note au redesign"
        steps={[
          {
            step: "01",
            title: "NDA, périmètre et échantillon SKU",
            duration: "Semaine 0",
            description:
              "NDA mutuel. Nous arrêtons le périmètre SKU (typiquement 50 à 500), les États membres ciblés et les catégories Annexe V prioritaires. Vous fournissez les spécifications d'emballage et les déclarations fournisseurs.",
          },
          {
            step: "02",
            title: "Calibration de la méthode de test",
            duration: "Semaine 1",
            description:
              "Nous calibrons la méthode de notation sur la méthodologie publiée par la Commission, les normes CEN/TS et les projets d'actes délégués les plus récents. En cas d'ambiguïté, l'hypothèse est documentée.",
          },
          {
            step: "03",
            title: "Notation au niveau composant",
            duration: "Semaines 1-2",
            description:
              "Chaque SKU est noté au niveau composant et à l'unité assemblée. Encres, adhésifs, pigments, taux de couverture étiquette, bouchon attaché, séparabilité et détectabilité NIR sont testés.",
          },
          {
            step: "04",
            title: "Redesign et chiffrage",
            duration: "Semaines 2-3",
            description:
              "Pour chaque SKU Classe B et C, nous chiffrons les actions de montée en classe. Outillage, qualification fournisseur, essais de ligne, notification EFSA si nécessaire, délai au premier passage commercial.",
          },
          {
            step: "05",
            title: "Comité de pilotage et prévision REP",
            duration: "Semaines 3-4",
            description:
              "Nous remettons la matrice de notes SKU, le backlog de redesign, le modèle de coût et la prévision d'éco-contributions par pays. Nous briefons le comité de pilotage et alignons la feuille de route redesign.",
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
                  us: { type: "yes", text: "Article 6 au quotidien" },
                  competitor1: { type: "no", text: "Une offre dans un portefeuille RSE" },
                  competitor2: { type: "no", text: "Généraliste économie circulaire" },
                },
                {
                  criterion: "Veille réglementaire",
                  us: { type: "yes", text: "Actes délégués et normes CEN suivis chaque semaine" },
                  competitor1: { type: "mixed", text: "Briefings trimestriels" },
                  competitor2: { type: "no", text: "Au coup par coup" },
                },
                {
                  criterion: "Délai au premier livrable",
                  us: { type: "yes", text: "Matrice de notes en 3 à 4 semaines" },
                  competitor1: { type: "no", text: "10 à 16 semaines" },
                  competitor2: { type: "no", text: "8 à 12 semaines" },
                },
                {
                  criterion: "Périmètre fixe, prix fixe",
                  us: { type: "yes", text: "Devis par tranche de SKU avant kick-off" },
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
        title="Questions sur l'évaluation de recyclabilité (article 6)"
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
        title="Noter chaque SKU avant 2030"
        description="Réservez une session de travail de 30 minutes. Nous confirmons le périmètre SKU, signons le NDA et démarrons l'évaluation de recyclabilité dans la semaine."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_FR,
          description: META_FR.description,
          serviceType: "Évaluation de recyclabilité (article 6) PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}

export default async function RecyclabilityAssessmentPage({
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
