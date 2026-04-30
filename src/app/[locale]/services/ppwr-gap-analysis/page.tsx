import type { Metadata } from "next";
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

const SERVICE_NAME = "PPWR Gap Analysis";
const SERVICE_PATH = "/services/ppwr-gap-analysis";
const SERVICE_URL = `https://pactum-advisory.eu${SERVICE_PATH}`;

const META_DESCRIPTION =
  "Map every SKU against Regulation (EU) 2025/40 in 5 working days. Get an article-by-article gap report, costed remediation backlog and steering deck.";

export const metadata: Metadata = {
  title: "PPWR Gap Analysis — Article-by-article in 5 days | Pactum",
  description: META_DESCRIPTION,
  alternates: { canonical: SERVICE_PATH },
  openGraph: {
    title: "PPWR Gap Analysis — Article-by-article in 5 days | Pactum",
    description: META_DESCRIPTION,
    url: SERVICE_URL,
    siteName: "Pactum",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPWR Gap Analysis — Article-by-article in 5 days | Pactum",
    description: META_DESCRIPTION,
  },
};

const FAQ_ITEMS = [
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

const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
  question: it.question,
  answer: it.answerText,
}));

export default function PpwrGapAnalysisPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/ppwr-gap-analysis" },
          { label: SERVICE_NAME },
        ]}
      />

      <PageHero
        eyebrow="REGULATION (EU) 2025/40 · GAP ANALYSIS"
        title="PPWR Gap Analysis — Article-by-article in 5 days."
        subtitle="One Excel matrix, every SKU mapped to every obligation, every deadline. Five working days from kick-off to a costed remediation backlog you can take to your CFO."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock title="What the regulation says">
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
              We are a pure-play PPWR advisory. Big-4 firms have packaging
              within their sustainability practice and run multi-month
              engagements. Sustainability consultancies cover ESG broadly and
              are rarely article-precise on Regulation (EU) 2025/40.
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

      <FAQ
        title="Questions on the PPWR gap analysis"
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
              href="/services/recyclability-assessment"
            >
              Recyclability assessment (Article 6)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href="/services/recycled-content-roadmap"
            >
              Recycled-content roadmap (Article 7)
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
        title="Get a costed PPWR roadmap in 5 days"
        description="Book a 30-minute working session with a Pactum partner. We confirm scope, sign the NDA and start your gap analysis the same week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME,
          description: META_DESCRIPTION,
          serviceType: "Regulatory compliance advisory — PPWR gap analysis",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}
