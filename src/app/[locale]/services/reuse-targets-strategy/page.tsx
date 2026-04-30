import type { Metadata } from "next";
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

const SERVICE_NAME = "Reuse & Refill Strategy (Article 29)";
const SERVICE_PATH = "/services/reuse-targets-strategy";
const SERVICE_URL = `https://pactum-advisory.eu${SERVICE_PATH}`;

const META_DESCRIPTION =
  "Hit Article 29 reuse targets — 40% transport, 10% beverages, 90% appliances — without breaking unit economics. Pooled-systems design, cost-to-serve and refill rollout.";

export const metadata: Metadata = {
  title:
    "Reuse and refill strategy — Article 29 PPWR | Pactum",
  description: META_DESCRIPTION,
  alternates: { canonical: SERVICE_PATH },
  openGraph: {
    title: "Reuse and refill strategy — Article 29 PPWR | Pactum",
    description: META_DESCRIPTION,
    url: SERVICE_URL,
    siteName: "Pactum",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reuse and refill strategy — Article 29 PPWR | Pactum",
    description: META_DESCRIPTION,
  },
};

const FAQ_ITEMS = [
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

const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
  question: it.question,
  answer: it.answerText,
}));

export default function ReuseTargetsStrategyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/ppwr-gap-analysis" },
          { label: "Reuse & refill strategy" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 29 · REUSE AND REFILL"
        title="Reuse and refill — design pooled systems that pencil out."
        subtitle="40% transport, 10% beverages, 90% large appliances by 2030. We design the pooled system, model the cost per rotation and lock the unit economics before your CFO does."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock title="What the regulation says">
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
              How we compare
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Pactum vs. Big-4 vs. sustainability consultancies
            </h2>
            <p
              className="mt-4 text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Reuse is an operations and finance problem first, regulation
              second. The advisor needs to model rotation curves and pool
              economics as fluently as Article 29 itself.
            </p>
          </div>

          <div className="mt-10">
            <ComparisonTable
              usLabel="Pactum"
              competitor1Label="Typical Big-4"
              competitor2Label="Sustainability consultancy"
              caption="Engagement dimension"
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
            Continue reading:{" "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href="/services/ppwr-gap-analysis"
            >
              PPWR Gap Analysis
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href="/services/recyclability-assessment"
            >
              Recyclability assessment (Article 6)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href="/services/declaration-of-conformity"
            >
              Declaration of Conformity (Article 39)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href="/resources/ppwr-timeline"
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
          name: SERVICE_NAME,
          description: META_DESCRIPTION,
          serviceType: "Article 29 reuse and refill strategy for PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}
