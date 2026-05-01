import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Truck,
  ScrollText,
  Factory,
  Calculator,
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

const SERVICE_PATH = "/services/recycled-content-roadmap";
const SERVICE_URL_BASE = "https://pactum-advisory.eu";

const SERVICE_NAME_EN = "Recycled Content Roadmap (Article 7)";
const SERVICE_NAME_FR = "Feuille de route contenu recyclé (article 7)";

const META_EN = {
  title: "Recycled-content roadmap for plastic packaging | Pactum",
  description:
    "Hit Article 7 recycled-content targets — 30%, 35%, 50%, 65%. Build a 24-month sourcing roadmap with mass-balance rules, ISCC certification and food-grade rPET supply.",
};

const META_FR = {
  title:
    "Feuille de route contenu recyclé PPWR — 30 %, 35 % et au-delà | Pactum",
  description:
    "Atteindre les objectifs de contenu recyclé de l'article 7 du règlement PPWR (Règlement (UE) 2025/40) — 30 %, 35 %, 50 %, 65 %. Sourcing 24 mois, bilan massique, certification ISCC et rPET alimentaire.",
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
    question: "What are the Article 7 recycled-content targets?",
    answerText:
      "Article 7 of Regulation (EU) 2025/40 sets four target categories for plastic packaging from 1 January 2030: 30% for contact-sensitive packaging containing PET as the major component, 10% for contact-sensitive packaging from other plastics, 30% for single-use plastic beverage bottles, and 35% for other plastic packaging. From 1 January 2040 the targets rise to 50%, 25%, 65% and 65% respectively. The shares are calculated as an average per manufacturing plant and per year.",
  },
  {
    question: "Is mass balance allowed under Article 7?",
    answerText:
      "Article 7(7) provides that the methodology for calculating recycled content, including the conditions under which mass balance accounting is admissible, is to be set by Commission implementing act. The implementing act is expected by end-2026. Until adoption, free-attribution and mass-balance approaches must be reconciled with the chain-of-custody standards used by certified suppliers (notably ISCC PLUS and RedCert). Our roadmap models both scenarios so the procurement decision is robust to either outcome.",
  },
  {
    question: "What about food-grade rPET supply?",
    answerText:
      "Food-contact recyclate is governed by Commission Regulation (EU) 2022/1616. Today only EFSA-authorised PET recycling processes deliver food-grade rPET at scale; rHDPE and rPP food-grade routes are limited and case-by-case. EU food-grade rPET supply is structurally short of the 2030 demand curve. Long-term offtake contracts, vertical integration and certified imports are the three credible levers — we model each.",
  },
  {
    question: "Which certifications matter?",
    answerText:
      "ISCC PLUS and RedCert² are the two chain-of-custody schemes most commonly accepted by Member State authorities for mass-balance claims. CEN/TS 16137 governs the determination of plastics recycling. EuCertPlast and RecyClass certify the recycler and the recyclate. Our deliverable maps each SKU to the certifications you will need to defend the recycled-content claim under Article 39 documentation.",
  },
  {
    question: "Are recyclate claims subject to substantiation?",
    answerText:
      "Yes. Article 12 prohibits unsubstantiated recycled-content claims on packaging, and the EU Green Claims Directive (2024/825) prohibits unsubstantiated environmental claims more broadly. Every percentage on a label must be backed by certified supplier documentation kept in the technical file (Article 39, ten-year retention). Failure triggers the Article 68 penalty regime.",
  },
  {
    question: "How does this connect to your other services?",
    answerText:
      "The recycled-content roadmap usually follows the PPWR Gap Analysis or the Recyclability Assessment. The grade matrix flags the SKUs with the largest plastic content, and Article 7 then asks how much of that plastic must come from recyclate. Where Article 7 forces a redesign — for example to switch a contact-sensitive HDPE bottle to PET — we pass the work back to the recyclability assessment for re-grading.",
  },
];

const FAQ_ITEMS_FR = [
  {
    question: "Quels sont les objectifs de contenu recyclé de l'article 7 ?",
    answerText:
      "L'article 7 du Règlement (UE) 2025/40 fixe quatre catégories d'objectifs pour les emballages plastiques à compter du 1er janvier 2030 : 30 % pour les emballages au contact dont le PET est le composant majoritaire, 10 % pour les autres emballages plastiques au contact, 30 % pour les bouteilles de boisson à usage unique en plastique et 35 % pour les autres emballages plastiques. À compter du 1er janvier 2040, les objectifs passent respectivement à 50 %, 25 %, 65 % et 65 %. Les taux sont calculés en moyenne par usine de fabrication et par année civile.",
  },
  {
    question: "Le bilan massique est-il admis au titre de l'article 7 ?",
    answerText:
      "L'article 7(7) prévoit que la méthodologie de calcul du contenu recyclé, y compris les conditions dans lesquelles le bilan massique est admissible, sera fixée par acte d'exécution de la Commission. L'acte d'exécution est attendu d'ici fin 2026. En attendant, les approches d'attribution libre et de bilan massique doivent être conciliées avec les normes de chaîne de traçabilité utilisées par les fournisseurs certifiés (notamment ISCC PLUS et RedCert). Notre feuille de route modélise les deux scénarios pour que la décision achats soit robuste quel que soit le choix retenu.",
  },
  {
    question: "Qu'en est-il de l'approvisionnement en rPET alimentaire ?",
    answerText:
      "Le recyclat au contact alimentaire est régi par le Règlement (UE) 2022/1616. Aujourd'hui, seuls les procédés de recyclage PET autorisés par l'EFSA livrent du rPET alimentaire à grande échelle ; les filières rPEHD et rPP au contact alimentaire sont limitées et au cas par cas. L'offre européenne de rPET alimentaire est structurellement déficitaire face à la demande 2030. Contrats d'enlèvement long terme, intégration verticale et importations certifiées sont les trois leviers crédibles — nous modélisons chacun.",
  },
  {
    question: "Quelles certifications comptent ?",
    answerText:
      "ISCC PLUS et RedCert² sont les deux schémas de chaîne de traçabilité les plus largement acceptés par les autorités des États membres pour les revendications de bilan massique. CEN/TS 16137 régit la détermination du recyclage des plastiques. EuCertPlast et RecyClass certifient le recycleur et le recyclat. Notre livrable rapproche chaque SKU des certifications nécessaires pour défendre la revendication de contenu recyclé dans la documentation de l'article 39.",
  },
  {
    question: "Les revendications de recyclat doivent-elles être justifiées ?",
    answerText:
      "Oui. L'article 12 interdit les revendications de contenu recyclé non étayées sur l'emballage, et la directive européenne « Green Claims » (2024/825) interdit plus largement les revendications environnementales non étayées. Chaque pourcentage affiché doit être appuyé par une documentation fournisseur certifiée tenue dans le dossier technique (article 39, conservation 10 ans). Le défaut déclenche le régime de sanctions de l'article 68.",
  },
  {
    question: "Comment ce service s'articule avec vos autres prestations ?",
    answerText:
      "La feuille de route contenu recyclé fait habituellement suite à l'Analyse des écarts PPWR ou à l'Évaluation de recyclabilité. La matrice de notes signale les SKU à plus forte teneur plastique, et l'article 7 détermine ensuite la part de ce plastique qui doit provenir de recyclat. Lorsque l'article 7 impose un redesign — par exemple pour basculer un flacon PEHD au contact en PET — le travail est renvoyé à l'évaluation de recyclabilité pour re-notation.",
  },
];

const COMPARISON_HEADERS = {
  en: {
    eyebrow: "How we compare",
    title: "Pactum vs. Big-4 vs. sustainability consultancies",
    intro:
      "Article 7 is a procurement and chain-of-custody problem dressed as a sustainability number. The advisor needs to know polymer markets, certification schemes and the implementing-act calendar equally well.",
    big4: "Typical Big-4",
    sustainability: "Sustainability consultancy",
    caption: "Engagement dimension",
  },
  fr: {
    eyebrow: "Comparatif",
    title: "Pactum face aux Big-4 et aux cabinets RSE",
    intro:
      "L'article 7 est un sujet d'achats et de chaîne de traçabilité déguisé en chiffre de durabilité. Le conseil doit connaître aussi bien les marchés des polymères, les schémas de certification et le calendrier des actes d'exécution.",
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
          { label: "Recycled-content roadmap" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 7 · RECYCLED CONTENT"
        title="Recycled-content roadmap for plastic packaging — 30%, 35% and beyond."
        subtitle="Article 7 puts four mandatory shares on every plastic packaging unit by 2030. We model your sourcing across mass balance and free attribution, then write the 24-month plan that pencils out at unit cost."
        primaryCTA={{ href: `/${locale}/contact`, label: "Book a working session" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock locale={locale} title="What the regulation says">
        <p>
          Article 7 of Regulation (EU) 2025/40 sets minimum recycled-content
          shares for plastic packaging, calculated as an average per
          manufacturing plant and per calendar year. The recyclate must come
          from <em>post-consumer plastic waste</em>, defined by reference to
          the waste definitions in Directive 2008/98/EC. The four target
          categories and the 1 January 2030 numbers are:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>30%</strong> for contact-sensitive packaging containing
            PET as its major component (e.g. food trays, condiment bottles);
          </li>
          <li>
            <strong>10%</strong> for contact-sensitive packaging in plastics
            other than PET (e.g. HDPE dairy bottles, PP yoghurt pots);
          </li>
          <li>
            <strong>30%</strong> for single-use plastic beverage bottles
            (water, soft drinks, juice, beer ≤ 3 L);
          </li>
          <li>
            <strong>35%</strong> for all other plastic packaging
            (transport film, secondary packaging, non-contact bottles).
          </li>
        </ul>
        <p>
          From <strong>1 January 2040</strong>, those targets rise to{" "}
          <strong>50%, 25%, 65% and 65%</strong> respectively. Article 7(8)
          allows a temporary derogation for specific packaging where the
          Commission demonstrates by implementing act that the shares cannot
          be met by 2030 — but the burden of proof is on the Commission, not
          on individual operators.
        </p>
        <p>
          The methodology to verify the shares — including whether and how{" "}
          <em>mass balance accounting</em> is admissible against{" "}
          <em>free attribution</em> — is set by Commission implementing act,
          due by end of 2026. Recyclate from contact-sensitive applications
          must come from EFSA-authorised processes under Commission Regulation
          (EU) 2022/1616. Article 12 prohibits unsubstantiated recycled-content
          claims on packaging, and the technical file (Article 39) must
          contain certified supplier evidence retained for ten years. Article
          45 makes recycled content a fee-modulation criterion under Extended
          Producer Responsibility, on top of the Class A/B/C grade.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        title="What changes for your operations"
        items={[
          {
            title: "Sourcing must shift two to three years ahead of demand",
            description:
              "Food-grade rPET capacity is structurally short of the 2030 European demand curve. SKUs in scope of the 30% target need long-term offtake contracts signed in 2025–2026 to be supplied in 2029–2030.",
          },
          {
            title: "Certified chain-of-custody becomes contractual",
            description:
              "Suppliers must hold ISCC PLUS, RedCert² or equivalent. Mass-balance attestations need to map clearly to the SKU and the manufacturing plant. Master purchase agreements need new clauses now.",
          },
          {
            title: "Plant-and-year averaging changes ERP reporting",
            description:
              "The percentages are calculated per manufacturing plant and per calendar year, not per SKU. Your data warehouse must aggregate recyclate kilograms by plant by year — most ERP setups today aggregate by SKU and customer.",
          },
          {
            title: "Make-or-buy decisions get re-opened",
            description:
              "Vertical integration into recycling, joint ventures with recyclers and certified imports become real options. We model each against the 2030 and 2040 numbers, currency and feedstock risk included.",
          },
          {
            title: "Article 12 substantiation is non-negotiable",
            description:
              "Every claim on pack — '30% recycled', 'rPET' — must be backed by certified supplier evidence held in the Article 39 technical file. We pre-empt Green Claims Directive (2024/825) substantiation tests as well.",
          },
          {
            title: "EPR fees re-price for recycled content",
            description:
              "Article 45 mandates eco-modulation across Member States. SKUs with low recyclate content will face materially higher fees from 2030 onward. The roadmap forecasts the fee delta at country level for the next five years.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        title="What you get"
        description="A defendable, certified, 24-month sourcing roadmap that takes your plastic packaging to the Article 7 numbers — for 2030 first, with the 2040 step-up modelled in parallel."
        deliverables={[
          {
            icon: Calculator,
            title: "SKU-by-SKU recyclate model",
            description:
              "Every plastic SKU mapped to its Article 7 target category, with current recyclate share, Class A/B/C grade and the kilograms of post-consumer recyclate required per plant per year by 2030.",
          },
          {
            icon: Truck,
            title: "Sourcing strategy",
            description:
              "Offtake contracts, certified imports, vertical-integration scenarios and make-or-buy for rPET, rHDPE, rPP and rPE-LD. Volume, price ceiling and contract length per supplier route.",
          },
          {
            icon: ScrollText,
            title: "Mass-balance vs. free-attribution model",
            description:
              "Two scenarios run side-by-side, ISCC PLUS and RedCert² documentation requirements per scenario, and a sensitivity table for the implementing act on calculation methodology.",
          },
          {
            icon: Factory,
            title: "Plant-and-year reporting blueprint",
            description:
              "Data flow from supplier attestation through ERP into the Article 39 technical file. Aggregation rules per plant per year, audit trail and the dashboard we hand to your sustainability and finance leads.",
          },
        ]}
        timeToDeliver="4–6 weeks for up to 200 plastic SKUs"
        teamComposition="1 partner, 1 senior procurement analyst, 1 polymer specialist"
      />

      <HowWeWork
        locale={locale}
        title="How we work — five gates from target to contract"
        steps={[
          {
            step: "01",
            title: "NDA, perimeter and target-category split",
            duration: "Week 0",
            description:
              "Mutual NDA. We agree the perimeter of plastic SKUs in scope and split them into the four Article 7 target categories: contact-sensitive PET, contact-sensitive other, beverage bottles, other plastic.",
          },
          {
            step: "02",
            title: "Demand model — kilograms of recyclate by plant by year",
            duration: "Weeks 1–2",
            description:
              "Volumes, weights and recyclate shares are converted into kilograms of post-consumer recyclate required, per manufacturing plant, for 2030, 2035 and 2040. Missing-data flags are documented.",
          },
          {
            step: "03",
            title: "Supply model — certified vs. uncertified, mass-balance vs. attributed",
            duration: "Weeks 2–3",
            description:
              "We map the supplier base (recyclers, traders, vertically-integrated converters), certification status and price curves. Two scenarios are run: mass-balance allowed and mass-balance denied.",
          },
          {
            step: "04",
            title: "Contract framework and procurement clauses",
            duration: "Weeks 3–4",
            description:
              "Offtake contract templates, certification clauses, audit rights, force-majeure for feedstock, and the substantiation language for Article 39 documentation and on-pack claims.",
          },
          {
            step: "05",
            title: "Steering committee and procurement plan",
            duration: "Weeks 4–6",
            description:
              "We hand over the recyclate model, the supplier shortlist, the contract framework and the EPR fee forecast. We brief the steering committee and align procurement, sustainability and finance.",
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
                  us: { type: "yes", text: "Article 7 every day" },
                  competitor1: { type: "no", text: "One offer in ESG portfolio" },
                  competitor2: { type: "no", text: "Circular-economy generalist" },
                },
                {
                  criterion: "Regulatory horizon scanning",
                  us: { type: "yes", text: "Implementing act on calculation methodology tracked weekly" },
                  competitor1: { type: "mixed", text: "Quarterly briefings" },
                  competitor2: { type: "no", text: "Ad-hoc" },
                },
                {
                  criterion: "Time to first deliverable",
                  us: { type: "yes", text: "Sourcing roadmap in 4–6 weeks" },
                  competitor1: { type: "no", text: "12–20 weeks" },
                  competitor2: { type: "no", text: "10–14 weeks" },
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
        title="Questions on the Article 7 recycled-content roadmap"
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
              href={`/${locale}/services/recyclability-assessment`}
            >
              Recyclability assessment (Article 6)
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
        title="Sign your recyclate offtake before 2027"
        description="Book a 30-minute working session. We confirm the SKU perimeter, sign the NDA and start the sourcing roadmap within the week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_EN,
          description: META_EN.description,
          serviceType: "Article 7 recycled-content roadmap for PPWR",
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
          { label: "Feuille de route contenu recyclé" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 7 · CONTENU RECYCLÉ"
        title="Feuille de route contenu recyclé — 30 %, 35 % et au-delà."
        subtitle="L'article 7 impose quatre taux obligatoires sur chaque unité d'emballage plastique d'ici 2030. Nous modélisons votre sourcing en bilan massique et en attribution libre, puis rédigeons le plan 24 mois qui tient au coût unitaire."
        primaryCTA={{ href: `/${locale}/contact`, label: "Réserver une session de travail" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Diagnostic PPWR gratuit",
        }}
      />

      <RegulationBlock locale={locale}>
        <p>
          L&apos;article 7 du Règlement (UE) 2025/40 fixe des taux minimaux
          de contenu recyclé pour les emballages plastiques, calculés en
          moyenne par usine de fabrication et par année civile. Le recyclat
          doit provenir de <em>déchets plastiques post-consommation</em>,
          définis par renvoi à la directive 2008/98/CE. Les quatre catégories
          d&apos;objectifs et les chiffres au 1er janvier 2030 sont :
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>30 %</strong> pour les emballages au contact dont le PET
            est le composant majoritaire (barquettes alimentaires, flacons de
            condiments) ;
          </li>
          <li>
            <strong>10 %</strong> pour les emballages au contact en plastiques
            autres que le PET (flacons PEHD pour produits laitiers, pots PP de
            yaourts) ;
          </li>
          <li>
            <strong>30 %</strong> pour les bouteilles de boisson à usage
            unique en plastique (eau, soft drinks, jus, bière ≤ 3 L) ;
          </li>
          <li>
            <strong>35 %</strong> pour tous les autres emballages plastiques
            (films de transport, emballages secondaires, flacons hors contact).
          </li>
        </ul>
        <p>
          À compter du <strong>1er janvier 2040</strong>, ces objectifs passent
          respectivement à <strong>50 %, 25 %, 65 % et 65 %</strong>.
          L&apos;article 7(8) autorise une dérogation temporaire pour des
          emballages spécifiques lorsque la Commission démontre, par acte
          d&apos;exécution, que les taux ne peuvent être atteints en 2030 —
          mais la charge de la preuve incombe à la Commission, et non aux
          opérateurs individuels.
        </p>
        <p>
          La méthodologie de vérification des taux — y compris les conditions
          d&apos;admission du <em>bilan massique</em> face à l&apos;{" "}
          <em>attribution libre</em> — est fixée par acte d&apos;exécution
          de la Commission, attendu d&apos;ici fin 2026. Le recyclat destiné
          aux applications au contact alimentaire doit provenir de procédés
          autorisés par l&apos;EFSA au titre du Règlement (UE) 2022/1616.
          L&apos;article 12 interdit les revendications de contenu recyclé
          non étayées et le dossier technique (article 39) doit contenir des
          preuves fournisseurs certifiées conservées dix ans.
          L&apos;article 45 fait du contenu recyclé un critère de modulation
          des éco-contributions, en sus de la classe A/B/C.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        items={[
          {
            title: "Le sourcing doit basculer deux à trois ans avant la demande",
            description:
              "La capacité européenne en rPET alimentaire est structurellement déficitaire face à la courbe de demande 2030. Les SKU concernés par l'objectif 30 % nécessitent des contrats d'enlèvement long terme signés en 2025-2026 pour livraison en 2029-2030.",
          },
          {
            title: "La chaîne de traçabilité certifiée devient contractuelle",
            description:
              "Les fournisseurs doivent détenir ISCC PLUS, RedCert² ou équivalent. Les attestations de bilan massique doivent se rapporter clairement au SKU et à l'usine de fabrication. Les contrats-cadres d'achat ont besoin de nouvelles clauses dès maintenant.",
          },
          {
            title: "L'agrégation par usine et par année change le reporting ERP",
            description:
              "Les pourcentages sont calculés par usine de fabrication et par année civile, et non par SKU. Votre entrepôt de données doit agréger les kilogrammes de recyclat par usine et par année — la plupart des ERP agrègent aujourd'hui par SKU et par client.",
          },
          {
            title: "Les arbitrages make-or-buy se rouvrent",
            description:
              "Intégration verticale dans le recyclage, co-entreprises avec des recycleurs et importations certifiées deviennent des options réelles. Nous modélisons chaque option face aux objectifs 2030 et 2040, en intégrant le risque devise et le risque matière première.",
          },
          {
            title: "L'étayage de l'article 12 n'est pas négociable",
            description:
              "Chaque mention sur emballage — « 30 % recyclé », « rPET » — doit être appuyée par des preuves fournisseurs certifiées tenues dans le dossier technique de l'article 39. Nous anticipons également les tests d'étayage de la directive Green Claims (2024/825).",
          },
          {
            title: "Les éco-contributions reprice le contenu recyclé",
            description:
              "L'article 45 impose l'éco-modulation dans tous les États membres. Les SKU à faible taux de recyclat seront soumis à des contributions sensiblement plus élevées dès 2030. La feuille de route projette le delta de contributions par pays sur cinq ans.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        description="Une feuille de route sourcing 24 mois, défendable et certifiée, qui amène votre emballage plastique aux taux de l'article 7 — d'abord pour 2030, avec la marche 2040 modélisée en parallèle."
        deliverables={[
          {
            icon: Calculator,
            title: "Modèle recyclat SKU par SKU",
            description:
              "Chaque SKU plastique rapproché de sa catégorie d'objectif article 7, avec son taux de recyclat actuel, sa classe A/B/C et les kilogrammes de recyclat post-consommation requis par usine et par année à 2030.",
          },
          {
            icon: Truck,
            title: "Stratégie de sourcing",
            description:
              "Contrats d'enlèvement, importations certifiées, scénarios d'intégration verticale et arbitrages make-or-buy pour rPET, rPEHD, rPP et rPE-BD. Volume, plafond de prix et durée par filière fournisseur.",
          },
          {
            icon: ScrollText,
            title: "Modèle bilan massique vs attribution libre",
            description:
              "Deux scénarios menés en parallèle, exigences documentaires ISCC PLUS et RedCert² par scénario, et une matrice de sensibilité face à l'acte d'exécution sur la méthodologie de calcul.",
          },
          {
            icon: Factory,
            title: "Schéma de reporting par usine et par année",
            description:
              "Flux de données depuis l'attestation fournisseur jusqu'au dossier technique article 39 via l'ERP. Règles d'agrégation par usine et par année, piste d'audit et tableau de bord remis à vos responsables durabilité et finance.",
          },
        ]}
        timeToDeliver="4 à 6 semaines pour jusqu'à 200 SKU plastiques"
        teamComposition="1 associé, 1 analyste achats senior, 1 spécialiste polymères"
      />

      <HowWeWork
        locale={locale}
        title="Notre méthode — cinq jalons, de l'objectif au contrat"
        steps={[
          {
            step: "01",
            title: "NDA, périmètre et répartition par catégorie d'objectif",
            duration: "Semaine 0",
            description:
              "NDA mutuel. Nous arrêtons le périmètre des SKU plastiques visés et les répartissons dans les quatre catégories de l'article 7 : PET au contact, autres plastiques au contact, bouteilles de boisson, autres plastiques.",
          },
          {
            step: "02",
            title: "Modèle de demande — kilogrammes de recyclat par usine et par année",
            duration: "Semaines 1-2",
            description:
              "Volumes, poids et taux de recyclat sont convertis en kilogrammes de recyclat post-consommation requis, par usine, pour 2030, 2035 et 2040. Les manques de données sont signalés.",
          },
          {
            step: "03",
            title: "Modèle d'offre — certifié vs non certifié, bilan massique vs attribué",
            duration: "Semaines 2-3",
            description:
              "Nous cartographions la base fournisseurs (recycleurs, négociants, transformateurs intégrés), le statut de certification et les courbes de prix. Deux scénarios sont menés : bilan massique admis et bilan massique refusé.",
          },
          {
            step: "04",
            title: "Cadre contractuel et clauses achats",
            duration: "Semaines 3-4",
            description:
              "Modèles de contrats d'enlèvement, clauses de certification, droits d'audit, force majeure matière première, et libellés d'étayage pour la documentation article 39 et les revendications sur emballage.",
          },
          {
            step: "05",
            title: "Comité de pilotage et plan d'achats",
            duration: "Semaines 4-6",
            description:
              "Nous remettons le modèle recyclat, la short-list fournisseurs, le cadre contractuel et la prévision d'éco-contributions. Nous briefons le comité de pilotage et alignons achats, durabilité et finance.",
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
                  us: { type: "yes", text: "Article 7 au quotidien" },
                  competitor1: { type: "no", text: "Une offre dans un portefeuille RSE" },
                  competitor2: { type: "no", text: "Généraliste économie circulaire" },
                },
                {
                  criterion: "Veille réglementaire",
                  us: { type: "yes", text: "Acte d'exécution sur la méthodologie de calcul suivi chaque semaine" },
                  competitor1: { type: "mixed", text: "Briefings trimestriels" },
                  competitor2: { type: "no", text: "Au coup par coup" },
                },
                {
                  criterion: "Délai au premier livrable",
                  us: { type: "yes", text: "Feuille de route en 4 à 6 semaines" },
                  competitor1: { type: "no", text: "12 à 20 semaines" },
                  competitor2: { type: "no", text: "10 à 14 semaines" },
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
        title="Questions sur la feuille de route contenu recyclé (article 7)"
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
              href={`/${locale}/services/recyclability-assessment`}
            >
              Évaluation de recyclabilité (article 6)
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
        title="Signez vos contrats de recyclat avant 2027"
        description="Réservez une session de travail de 30 minutes. Nous confirmons le périmètre SKU, signons le NDA et démarrons la feuille de route sourcing dans la semaine."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_FR,
          description: META_FR.description,
          serviceType: "Feuille de route contenu recyclé (article 7) PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}

export default async function RecycledContentRoadmapPage({
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
