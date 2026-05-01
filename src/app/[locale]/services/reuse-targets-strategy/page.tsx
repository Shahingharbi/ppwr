import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Repeat,
  Wallet,
  Building2,
  Workflow,
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

const SERVICE_PATH = "/services/reuse-targets-strategy";
const SERVICE_URL_BASE = "https://pactum-advisory.eu";

const SERVICE_NAME_EN = "Reuse & Refill Strategy (Article 29)";
const SERVICE_NAME_FR = "Stratégie réemploi et rechargement (article 29)";

const META_EN = {
  title: "Reuse and refill strategy — Article 29 PPWR | Pactum",
  description:
    "Hit Article 29 reuse targets — 40% transport, 10% beverages, 90% appliances — without breaking unit economics. Pooled-systems design, cost-to-serve and refill rollout.",
};

const META_FR = {
  title:
    "Réemploi et rechargement PPWR — article 29 Règlement (UE) 2025/40 | Pactum",
  description:
    "Atteindre les objectifs de réemploi de l'article 29 du règlement PPWR — 40 % transport, 10 % boissons, 90 % gros électroménager — sans casser l'économie unitaire. Conception de systèmes mutualisés et déploiement.",
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
    question: "What does Article 29 require by 2030?",
    answerText:
      "From 1 January 2030, Article 29 of Regulation (EU) 2025/40 imposes minimum reuse rates: 40% of transport and grouped packaging, 10% of beverage packaging in scope (water, soft drinks, beer, wine and spirits), and 90% of transport packaging used for large household appliances. From 1 January 2040, transport and grouped reuse rises to 70% and beverage reuse to 40%. Member States may grant time-bound derogations on the beverage target under Article 29(8) where conditions on collection rates and recycling are met.",
  },
  {
    question: "What are the 12 August 2026 obligations?",
    answerText:
      "From 12 August 2026, HORECA operators serving take-away food and beverages must offer the customer a reusable container option (Article 29). The Article 25 ban on single-use plastic packaging for HORECA on-premise consumption and on hotel single-use miniature toiletries also applies from that date. These are placing-on-the-market or service-of-service obligations, enforced through Member State penalties under Article 68.",
  },
  {
    question: "What about refill stations from 2030?",
    answerText:
      "From 1 January 2030, retailers operating sales areas of 400 m² or more selling food, drinks, detergents or hygiene products must offer refill stations for at least a portion of their assortment, defined by delegated act. The customer brings the container or pays for a deposit on a reusable supplied by the retailer. The detailed criteria are still being finalised; we model your store fleet against the published draft.",
  },
  {
    question: "Are pooled systems required?",
    answerText:
      "Article 30 anchors reuse on pooled systems: shared assets across multiple participants, third-party operators and standardised packaging. Single-operator closed loops are allowed but rarely cost-competitive at the scale Article 29 demands. Our roadmap models pooled, semi-open and closed-loop architectures and ranks them on capex, opex per rotation and Member State coverage.",
  },
  {
    question: "How is the reuse rate measured?",
    answerText:
      "Article 29 measures the reuse rate as the share of packaging that is part of a reuse system, by number of units placed on the market and per packaging type. The Commission must adopt an implementing act setting the calculation methodology, including how to count rotations and how to handle reusable packaging that exits the system. The implementing act is expected by end-2026; we assume the published draft until adoption.",
  },
  {
    question: "How does this connect to your other services?",
    answerText:
      "Reuse interacts with Article 6 recyclability (a reusable unit must still be recyclable at end-of-life), Article 11 reusable design criteria (durability, washability, sortable parts), and Article 24 empty-space ratio (reusable transport packaging must still hit 50% maximum). Where the reuse strategy forces a packaging redesign we feed the change back into the Recyclability Assessment.",
  },
];

const FAQ_ITEMS_FR = [
  {
    question: "Que prévoit l'article 29 à l'horizon 2030 ?",
    answerText:
      "À compter du 1er janvier 2030, l'article 29 du Règlement (UE) 2025/40 impose des taux minimaux de réemploi : 40 % des emballages de transport et regroupés, 10 % des emballages de boisson dans le périmètre (eau, soft drinks, bière, vin et spiritueux) et 90 % des emballages de transport pour le gros électroménager. À compter du 1er janvier 2040, le réemploi transport et regroupé passe à 70 % et le réemploi boissons à 40 %. Les États membres peuvent accorder des dérogations à durée limitée sur l'objectif boissons au titre de l'article 29(8), sous conditions de taux de collecte et de recyclage.",
  },
  {
    question: "Quelles obligations s'appliquent au 12 août 2026 ?",
    answerText:
      "À compter du 12 août 2026, les opérateurs CHR (HORECA) servant de la restauration et des boissons à emporter doivent proposer au client une option contenant réutilisable (article 29). L'interdiction des emballages plastiques à usage unique pour la consommation sur place en CHR (HORECA) et des miniatures hôtelières (article 25) s'applique également à cette date. Ces obligations sont des obligations de mise sur le marché ou de service, sanctionnées via les régimes des États membres au titre de l'article 68.",
  },
  {
    question: "Que prévoient les stations de rechargement à compter de 2030 ?",
    answerText:
      "À compter du 1er janvier 2030, les distributeurs exploitant des surfaces de vente de 400 m² ou plus vendant alimentaire, boissons, détergents ou hygiène doivent proposer des stations de rechargement pour une partie de leur assortiment, définie par acte délégué. Le client apporte son contenant ou s'acquitte d'une consigne sur un contenant réutilisable fourni par le distributeur. Les critères détaillés sont en cours de finalisation ; nous modélisons votre parc de magasins face au projet publié.",
  },
  {
    question: "Les systèmes mutualisés sont-ils obligatoires ?",
    answerText:
      "L'article 30 ancre le réemploi sur des systèmes mutualisés : actifs partagés entre plusieurs participants, opérateurs tiers et emballages standardisés. Les boucles fermées mono-opérateur sont autorisées mais rarement compétitives en coût à l'échelle exigée par l'article 29. Notre feuille de route modélise les architectures mutualisée, semi-ouverte et fermée et les classe sur capex, opex par rotation et couverture État membre.",
  },
  {
    question: "Comment le taux de réemploi est-il mesuré ?",
    answerText:
      "L'article 29 mesure le taux de réemploi comme la part d'emballage faisant partie d'un système de réemploi, en nombre d'unités mises sur le marché et par type d'emballage. La Commission doit adopter un acte d'exécution fixant la méthodologie de calcul, y compris le décompte des rotations et le traitement des emballages réutilisables sortant du système. L'acte d'exécution est attendu fin 2026 ; nous retenons le projet publié jusqu'à son adoption.",
  },
  {
    question: "Comment ce service s'articule avec vos autres prestations ?",
    answerText:
      "Le réemploi interagit avec l'article 6 (l'unité réutilisable doit rester recyclable en fin de vie), l'article 11 (critères de conception : durabilité, lavabilité, parties triables) et l'article 24 (l'emballage de transport réutilisable reste soumis au plafond de 50 % d'espace vide). Lorsque la stratégie de réemploi impose un redesign, nous renvoyons l'évolution à l'évaluation de recyclabilité.",
  },
];

const COMPARISON_HEADERS = {
  en: {
    eyebrow: "How we compare",
    title: "Pactum vs. Big-4 vs. sustainability consultancies",
    intro:
      "Reuse is an operations and finance problem first, regulation second. The advisor needs to model rotation curves and pool economics as fluently as Article 29 itself.",
    big4: "Typical Big-4",
    sustainability: "Sustainability consultancy",
    caption: "Engagement dimension",
  },
  fr: {
    eyebrow: "Comparatif",
    title: "Pactum face aux Big-4 et aux cabinets RSE",
    intro:
      "Le réemploi est d'abord un problème d'opérations et de finance, ensuite seulement de réglementation. Le conseil doit modéliser les courbes de rotation et l'économie des systèmes mutualisés avec autant de fluidité que l'article 29 lui-même.",
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
          { label: "Reuse & refill strategy" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 29 · REUSE AND REFILL"
        title="Reuse and refill — design pooled systems that pencil out."
        subtitle="40% transport, 10% beverages, 90% large appliances by 2030. We design the pooled system, model the cost per rotation and lock the unit economics before your CFO does."
        primaryCTA={{ href: `/${locale}/contact`, label: "Book a working session" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock locale={locale} title="What the regulation says">
        <p>
          Article 29 of Regulation (EU) 2025/40 imposes minimum reuse and
          refill obligations on packaging types that account for the largest
          share of EU packaging waste: transport and grouped packaging,
          beverages, large household appliances and HORECA take-away. The
          obligations sit on the <em>final distributor</em> of the relevant
          product or, for transport packaging, the obligated economic operator
          using the packaging to ship goods.
        </p>
        <p>The 1 January 2030 targets are:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Transport and grouped packaging</strong>: 40% reusable —
            applies to pallets, crates, dollies, IBCs, drums, trays and the
            grouped packaging of consumer goods within an EU shipment;
          </li>
          <li>
            <strong>Beverage packaging</strong>: 10% reusable — water, soft
            drinks, beer, wine and spirits packaging in scope, with
            Member-State derogations available under Article 29(8);
          </li>
          <li>
            <strong>Transport packaging for large household appliances</strong>
            : 90% reusable — washing machines, dishwashers, dryers, fridges,
            ovens.
          </li>
        </ul>
        <p>
          From <strong>1 January 2040</strong>, transport and grouped reuse
          rises to <strong>70%</strong> and beverage reuse to{" "}
          <strong>40%</strong>. Article 29 also imposes service-level
          obligations from <strong>12 August 2026</strong>: HORECA operators
          must offer a reusable container option for take-away food and
          drinks. From <strong>1 January 2030</strong>, retailers with sales
          areas of <strong>400 m² or more</strong> selling food, drinks and
          detergents must offer refill for part of their assortment, defined
          by delegated act.
        </p>
        <p>
          Article 30 anchors reuse on <em>pooled systems</em> with shared
          standards, shared infrastructure and accredited operators. Article
          11 sets the design criteria for reusable packaging — durability,
          washability, sortable parts. Article 24 imposes the 50% empty-space
          ceiling on reusable transport and e-commerce packaging from 12
          August 2028, on the same footing as single-use. The reuse rate is
          measured per packaging type and Member State; the implementing act
          on the calculation methodology is due by end of 2026. Failure
          triggers Article 68 penalties and, for non-conforming packaging,
          recall and withdrawal under Article 39 documentation rules.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        title="What changes for your operations"
        items={[
          {
            title: "Transport packaging shifts to pools",
            description:
              "Single-use cardboard, stretch film and EPS for transport are out at 40% by 2030. Pooled crates, IBCs and pallets enter at scale. Inbound and outbound flows must be re-engineered around return logistics.",
          },
          {
            title: "Beverage SKUs need refillable parallel ranges",
            description:
              "Hitting the 10% beverage target by 2030 requires refillable glass or PET parallel to the single-use range. Closed-loop deposit infrastructure must be live in 2028 to ramp by 2030. Member States with DRS get there fastest.",
          },
          {
            title: "HORECA take-away must offer a reusable from 12 August 2026",
            description:
              "Cafés, QSR chains, canteens and delivery platforms must offer customers a reusable container at the point of order. The delivery platform's interface and the operator's till system both need a reusable SKU.",
          },
          {
            title: "Large appliances ship in pooled blankets and frames",
            description:
              "90% reuse on washing machine, dishwasher and fridge transport packaging by 2030 means pooled blanket-wrap and reusable frame systems on every European shipment. The OEM-retailer-3PL contract triangle has to fund the pool.",
          },
          {
            title: "Retailers ≥ 400 m² fund refill infrastructure",
            description:
              "From 2030 retailers must offer refill on part of the assortment. That means refill stations, in-store deposit machines and SKU re-rationalisation. Capex per store and SKU range need a 2026–2028 rollout window.",
          },
          {
            title: "ERP and finance need rotation accounting",
            description:
              "Reusable packaging is a balance-sheet asset, not COGS. Your ERP and asset register must track unit, rotation count, depreciation, loss rate and pool fees. Most current setups treat pallets and crates as supplies.",
          },
          {
            title: "Carbon and water footprints flip on rotations",
            description:
              "Reusable beats single-use only above the break-even rotation count, typically 3–25 depending on weight and washing energy. The roadmap models the rotation curve so the strategy clears LCA scrutiny under the Green Claims Directive.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        title="What you get"
        description="A reuse strategy that ties the Article 29 numbers to your unit economics. Pool design, contract framework, country-by-country rollout and the steering deck for your CEO and CFO."
        deliverables={[
          {
            icon: Repeat,
            title: "Pooled-system blueprint",
            description:
              "Pool architecture per packaging type: closed loop, semi-open, open pool. Operator shortlist, SLA template, rotation count per asset class and the integration points with your 3PL and your retailer customers.",
          },
          {
            icon: Wallet,
            title: "Cost-to-serve model",
            description:
              "Cost per rotation, capex per asset, depreciation, loss rate, washing energy and water, return logistics. Side-by-side single-use vs. reusable at SKU level, 2026 to 2040, with sensitivity tables.",
          },
          {
            icon: Building2,
            title: "Country and channel rollout plan",
            description:
              "Country-by-country rollout for the 27 Member States plus the EEA, sequenced by DRS maturity, retailer readiness and HORECA volume. Refill infrastructure for retailers ≥ 400 m² where applicable.",
          },
          {
            icon: Workflow,
            title: "Reporting and rotation accounting",
            description:
              "Article 29 rate calculation per packaging type and per Member State, tied to your ERP. The data model your finance team uses to depreciate the pool and the file you submit to market surveillance.",
          },
        ]}
        timeToDeliver="6–8 weeks for a multi-country, multi-format strategy"
        teamComposition="1 partner, 1 operations consultant, 1 polymer specialist, 1 finance modeller"
      />

      <HowWeWork
        locale={locale}
        title="How we work — five gates from target to rollout"
        steps={[
          {
            step: "01",
            title: "NDA, perimeter and target obligation map",
            duration: "Week 0",
            description:
              "Mutual NDA. We agree the perimeter — transport, beverages, large appliances, HORECA, refill — and the Member States in scope. Article 29 obligations are pinned to the corresponding legal entity in your group.",
          },
          {
            step: "02",
            title: "Single-use baseline and rotation modelling",
            duration: "Weeks 1–2",
            description:
              "Volumes, weights, distances, loss rates and washing data are converted into a single-use baseline. We model the break-even rotation count per asset class against the 2030 and 2040 targets.",
          },
          {
            step: "03",
            title: "Pool design and operator shortlist",
            duration: "Weeks 2–4",
            description:
              "Pool architectures are tested against your channel mix, your retailer customers and your 3PL footprint. Operator shortlist covers EU-wide pools, regional pools and own-pool options. Cost-to-serve and SLA terms are quantified.",
          },
          {
            step: "04",
            title: "Country and channel rollout",
            duration: "Weeks 4–6",
            description:
              "Roll-out sequencing for the 27 Member States, refill rollout for retailers with sales areas ≥ 400 m², and HORECA take-away activation for the 12 August 2026 obligation. Capex and operational milestones by quarter.",
          },
          {
            step: "05",
            title: "Steering committee and contract framework",
            duration: "Weeks 6–8",
            description:
              "We hand over the pool blueprint, the cost-to-serve model, the rollout plan and the contract framework. We brief the steering committee and align operations, finance, sustainability and legal.",
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
                  us: { type: "yes", text: "Articles 29–30 every day" },
                  competitor1: { type: "no", text: "One offer in ESG portfolio" },
                  competitor2: { type: "no", text: "Circular-economy generalist" },
                },
                {
                  criterion: "Regulatory horizon scanning",
                  us: { type: "yes", text: "Implementing act on rotation methodology tracked weekly" },
                  competitor1: { type: "mixed", text: "Quarterly briefings" },
                  competitor2: { type: "no", text: "Ad-hoc" },
                },
                {
                  criterion: "Time to first deliverable",
                  us: { type: "yes", text: "Strategy in 6–8 weeks" },
                  competitor1: { type: "no", text: "16–26 weeks" },
                  competitor2: { type: "no", text: "12–20 weeks" },
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
        title="Questions on the Article 29 reuse strategy"
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
        title="Lock the unit economics of reuse"
        description="Book a 30-minute working session. We confirm the perimeter, sign the NDA and start the reuse strategy within the week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_EN,
          description: META_EN.description,
          serviceType: "Article 29 reuse and refill strategy for PPWR",
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
          { label: "Stratégie réemploi et rechargement" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 29 · RÉEMPLOI ET RECHARGEMENT"
        title="Réemploi et rechargement — concevoir des systèmes mutualisés rentables."
        subtitle="40 % transport, 10 % boissons, 90 % gros électroménager d'ici 2030. Nous concevons le système mutualisé, modélisons le coût par rotation et verrouillons l'économie unitaire avant que votre directeur financier ne le fasse."
        primaryCTA={{ href: `/${locale}/contact`, label: "Réserver une session de travail" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Diagnostic PPWR gratuit",
        }}
      />

      <RegulationBlock locale={locale}>
        <p>
          L&apos;article 29 du Règlement (UE) 2025/40 impose des obligations
          minimales de réemploi et de rechargement sur les types
          d&apos;emballage représentant la part la plus importante des
          déchets d&apos;emballages dans l&apos;UE : emballages de transport
          et regroupés, boissons, gros électroménager et restauration à
          emporter en CHR (HORECA). Les obligations pèsent sur le{" "}
          <em>distributeur final</em> du produit concerné ou, pour
          l&apos;emballage de transport, sur l&apos;opérateur économique
          obligé qui utilise l&apos;emballage pour expédier ses marchandises.
        </p>
        <p>Les objectifs au 1er janvier 2030 sont :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Emballages de transport et regroupés</strong> : 40 %
            réutilisables — palettes, caisses, rolls, GRV, fûts, plateaux et
            emballages regroupés de produits de grande consommation au sein
            d&apos;une expédition UE ;
          </li>
          <li>
            <strong>Emballages de boisson</strong> : 10 % réutilisables — eau,
            soft drinks, bière, vin et spiritueux dans le périmètre, avec
            possibilités de dérogation des États membres au titre de
            l&apos;article 29(8) ;
          </li>
          <li>
            <strong>Emballages de transport pour le gros électroménager</strong>
            : 90 % réutilisables — lave-linge, lave-vaisselle, sèche-linge,
            réfrigérateurs, fours.
          </li>
        </ul>
        <p>
          À compter du <strong>1er janvier 2040</strong>, le réemploi
          transport et regroupé passe à <strong>70 %</strong> et le réemploi
          boissons à <strong>40 %</strong>. L&apos;article 29 prévoit
          également des obligations de service à compter du{" "}
          <strong>12 août 2026</strong> : les opérateurs CHR (HORECA) doivent
          proposer une option contenant réutilisable pour la restauration et
          les boissons à emporter. À compter du{" "}
          <strong>1er janvier 2030</strong>, les distributeurs disposant de
          surfaces de vente de <strong>400 m² ou plus</strong> vendant
          alimentaire, boissons et détergents doivent proposer le
          rechargement pour une partie de leur assortiment, définie par acte
          délégué.
        </p>
        <p>
          L&apos;article 30 ancre le réemploi sur des{" "}
          <em>systèmes mutualisés</em> avec normes partagées, infrastructures
          partagées et opérateurs accrédités. L&apos;article 11 fixe les
          critères de conception des emballages réutilisables — durabilité,
          lavabilité, parties triables. L&apos;article 24 impose le
          plafonnement à 50 % d&apos;espace vide aux emballages de transport
          et e-commerce réutilisables à compter du 12 août 2028, au même
          titre que l&apos;usage unique. Le taux de réemploi est mesuré par
          type d&apos;emballage et par État membre ; l&apos;acte
          d&apos;exécution sur la méthodologie de calcul est attendu fin
          2026. Tout manquement déclenche les sanctions de l&apos;article 68
          et, pour les emballages non conformes, le rappel et le retrait au
          titre de la documentation de l&apos;article 39.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        items={[
          {
            title: "L'emballage de transport bascule en mutualisé",
            description:
              "Le carton à usage unique, le film étirable et le PSE pour le transport disparaissent à 40 % d'ici 2030. Les caisses, GRV et palettes mutualisés entrent à grande échelle. Les flux entrants et sortants doivent être ré-ingéniés autour de la logistique retour.",
          },
          {
            title: "Les SKU boissons exigent des gammes rechargeables parallèles",
            description:
              "Atteindre l'objectif boissons de 10 % en 2030 nécessite du verre ou du PET rechargeable parallèlement à la gamme à usage unique. L'infrastructure de consigne en boucle fermée doit être en service en 2028 pour monter en puissance d'ici 2030. Les États membres dotés d'une consigne y arrivent les premiers.",
          },
          {
            title: "Le CHR (HORECA) à emporter doit proposer un réutilisable au 12 août 2026",
            description:
              "Cafés, chaînes de restauration rapide, cantines et plateformes de livraison doivent proposer aux clients un contenant réutilisable au moment de la commande. L'interface de la plateforme et le système de caisse de l'opérateur doivent tous deux disposer d'un SKU réutilisable.",
          },
          {
            title: "Le gros électroménager est expédié en housses et cadres mutualisés",
            description:
              "90 % de réemploi sur l'emballage de transport des lave-linge, lave-vaisselle et réfrigérateurs en 2030 implique des systèmes de housses et cadres réutilisables mutualisés sur chaque expédition européenne. Le triangle contractuel constructeur-distributeur-3PL doit financer le système mutualisé.",
          },
          {
            title: "Les distributeurs ≥ 400 m² financent l'infrastructure de rechargement",
            description:
              "À partir de 2030, les distributeurs doivent proposer le rechargement sur une partie de leur assortiment. Cela implique des stations de rechargement, des automates de consigne en magasin et une rationalisation des SKU. Le capex par magasin et la gamme SKU appellent une fenêtre de déploiement 2026-2028.",
          },
          {
            title: "L'ERP et la finance ont besoin d'une comptabilité par rotation",
            description:
              "L'emballage réutilisable est un actif au bilan, et non du COGS. Votre ERP et votre registre des actifs doivent suivre l'unité, le compteur de rotations, l'amortissement, le taux de perte et les frais de système mutualisé. La plupart des configurations actuelles traitent palettes et caisses comme des fournitures.",
          },
          {
            title: "Empreintes carbone et eau basculent selon le nombre de rotations",
            description:
              "Le réutilisable ne bat l'usage unique qu'au-delà du seuil de rentabilité en rotations, typiquement 3 à 25 selon le poids et l'énergie de lavage. La feuille de route modélise la courbe de rotations afin que la stratégie passe l'ACV au crible de la directive Green Claims.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        description="Une stratégie de réemploi qui relie les chiffres de l'article 29 à votre économie unitaire. Conception du système mutualisé, cadre contractuel, déploiement pays par pays et deck pour direction générale et direction financière."
        deliverables={[
          {
            icon: Repeat,
            title: "Schéma de système mutualisé",
            description:
              "Architecture du système par type d'emballage : boucle fermée, semi-ouverte, mutualisé ouvert. Short-list opérateurs, modèle de SLA, compteur de rotations par classe d'actif et points d'intégration avec votre 3PL et vos clients distributeurs.",
          },
          {
            icon: Wallet,
            title: "Modèle de coût-au-service",
            description:
              "Coût par rotation, capex par actif, amortissement, taux de perte, énergie et eau de lavage, logistique retour. Comparaison usage unique vs réutilisable au niveau SKU, de 2026 à 2040, avec matrices de sensibilité.",
          },
          {
            icon: Building2,
            title: "Plan de déploiement pays et canal",
            description:
              "Déploiement pays par pays pour les 27 États membres et l'EEE, séquencé selon la maturité des consignes, la maturité des distributeurs et le volume CHR (HORECA). Infrastructure de rechargement pour les distributeurs ≥ 400 m² lorsque applicable.",
          },
          {
            icon: Workflow,
            title: "Reporting et comptabilité par rotation",
            description:
              "Calcul du taux de l'article 29 par type d'emballage et par État membre, connecté à votre ERP. Le modèle de données utilisé par la finance pour amortir le système mutualisé et le dossier remis à la surveillance du marché.",
          },
        ]}
        timeToDeliver="6 à 8 semaines pour une stratégie multi-pays multi-formats"
        teamComposition="1 associé, 1 consultant opérations, 1 spécialiste polymères, 1 modélisateur finance"
      />

      <HowWeWork
        locale={locale}
        title="Notre méthode — cinq jalons, de l'objectif au déploiement"
        steps={[
          {
            step: "01",
            title: "NDA, périmètre et cartographie des obligations",
            duration: "Semaine 0",
            description:
              "NDA mutuel. Nous arrêtons le périmètre — transport, boissons, gros électroménager, CHR (HORECA), rechargement — et les États membres ciblés. Les obligations de l'article 29 sont rattachées à l'entité juridique correspondante de votre groupe.",
          },
          {
            step: "02",
            title: "Référentiel usage unique et modélisation des rotations",
            duration: "Semaines 1-2",
            description:
              "Volumes, poids, distances, taux de perte et données de lavage sont convertis en référentiel usage unique. Nous modélisons le seuil de rentabilité en rotations par classe d'actif face aux objectifs 2030 et 2040.",
          },
          {
            step: "03",
            title: "Conception du système mutualisé et short-list opérateurs",
            duration: "Semaines 2-4",
            description:
              "Les architectures de système mutualisé sont testées contre votre mix canal, vos clients distributeurs et votre empreinte 3PL. La short-list opérateurs couvre les systèmes mutualisés UE, régionaux et propriétaires. Coût-au-service et SLA sont chiffrés.",
          },
          {
            step: "04",
            title: "Déploiement pays et canal",
            duration: "Semaines 4-6",
            description:
              "Séquencement du déploiement pour les 27 États membres, déploiement du rechargement pour les distributeurs ≥ 400 m² et activation CHR (HORECA) à emporter pour l'obligation du 12 août 2026. Capex et jalons opérationnels par trimestre.",
          },
          {
            step: "05",
            title: "Comité de pilotage et cadre contractuel",
            duration: "Semaines 6-8",
            description:
              "Nous remettons le schéma de système mutualisé, le modèle de coût-au-service, le plan de déploiement et le cadre contractuel. Nous briefons le comité de pilotage et alignons opérations, finance, durabilité et juridique.",
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
                  us: { type: "yes", text: "Articles 29-30 au quotidien" },
                  competitor1: { type: "no", text: "Une offre dans un portefeuille RSE" },
                  competitor2: { type: "no", text: "Généraliste économie circulaire" },
                },
                {
                  criterion: "Veille réglementaire",
                  us: { type: "yes", text: "Acte d'exécution sur la méthodologie de rotation suivi chaque semaine" },
                  competitor1: { type: "mixed", text: "Briefings trimestriels" },
                  competitor2: { type: "no", text: "Au coup par coup" },
                },
                {
                  criterion: "Délai au premier livrable",
                  us: { type: "yes", text: "Stratégie en 6 à 8 semaines" },
                  competitor1: { type: "no", text: "16 à 26 semaines" },
                  competitor2: { type: "no", text: "12 à 20 semaines" },
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
        title="Questions sur la stratégie de réemploi (article 29)"
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
        title="Verrouillez l'économie unitaire du réemploi"
        description="Réservez une session de travail de 30 minutes. Nous confirmons le périmètre, signons le NDA et démarrons la stratégie de réemploi dans la semaine."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_FR,
          description: META_FR.description,
          serviceType: "Stratégie réemploi et rechargement (article 29) PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}

export default async function ReuseTargetsStrategyPage({
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
