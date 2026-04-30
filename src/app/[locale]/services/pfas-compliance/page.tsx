import type { Metadata } from "next";
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

const SERVICE_NAME = "PFAS Compliance (Article 5)";
const SERVICE_PATH = "/services/pfas-compliance";
const SERVICE_URL = `https://pactum-advisory.eu${SERVICE_PATH}`;

const META_DESCRIPTION =
  "Phase out intentionally added PFAS in food-contact packaging before 12 August 2026. Test, substitute and document against the 25 ppb / 250 ppb / 50 ppm thresholds.";

export const metadata: Metadata = {
  title:
    "PFAS in food-contact packaging — out by 12 August 2026 | Pactum",
  description: META_DESCRIPTION,
  alternates: { canonical: SERVICE_PATH },
  openGraph: {
    title: "PFAS in food-contact packaging — out by 12 August 2026 | Pactum",
    description: META_DESCRIPTION,
    url: SERVICE_URL,
    siteName: "Pactum",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PFAS in food-contact packaging — out by 12 August 2026 | Pactum",
    description: META_DESCRIPTION,
  },
};

const FAQ_ITEMS = [
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

const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
  question: it.question,
  answer: it.answerText,
}));

export default function PfasCompliancePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/ppwr-gap-analysis" },
          { label: "PFAS compliance" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 5 · SUBSTANCES OF CONCERN"
        title="PFAS in food-contact packaging — out by 12 August 2026."
        subtitle="Article 5 prohibits intentionally added PFAS in food-contact packaging above 25 ppb individual, 250 ppb sum, or 50 ppm total fluorine. Twelve months to test, substitute and document — we run the programme end to end."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock title="What the regulation says">
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
              The PFAS programme is a regulatory and supply-chain problem with
              chemistry inside it. The advisor must read targeted analysis,
              substitute migration and supplier risk in the same brief.
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
              href="/services/declaration-of-conformity"
            >
              Declaration of Conformity (Article 39)
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
              href="/resources/ppwr-timeline"
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
          name: SERVICE_NAME,
          description: META_DESCRIPTION,
          serviceType: "Article 5 PFAS compliance for PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}
