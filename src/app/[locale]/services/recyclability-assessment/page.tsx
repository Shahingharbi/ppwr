import type { Metadata } from "next";
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

const SERVICE_NAME = "Recyclability Assessment (Article 6)";
const SERVICE_PATH = "/services/recyclability-assessment";
const SERVICE_URL = `https://pactum-advisory.eu${SERVICE_PATH}`;

const META_DESCRIPTION =
  "Grade every SKU against Article 6 of Regulation (EU) 2025/40. Get A, B or C scores, redesign actions and cost-to-grade-up estimates before the 1 January 2030 cut-off.";

export const metadata: Metadata = {
  title:
    "Recyclability assessment — Grade every SKU A, B or C | Pactum",
  description: META_DESCRIPTION,
  alternates: { canonical: SERVICE_PATH },
  openGraph: {
    title:
      "Recyclability assessment — Grade every SKU A, B or C | Pactum",
    description: META_DESCRIPTION,
    url: SERVICE_URL,
    siteName: "Pactum",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Recyclability assessment — Grade every SKU A, B or C | Pactum",
    description: META_DESCRIPTION,
  },
};

const FAQ_ITEMS = [
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

const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
  question: it.question,
  answer: it.answerText,
}));

export default function RecyclabilityAssessmentPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/ppwr-gap-analysis" },
          { label: "Recyclability assessment" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 6 · DESIGN FOR RECYCLING"
        title="Recyclability assessment — grade every SKU A, B or C."
        subtitle="Article 6 grades every packaging unit by recyclate yield: Class A ≥95%, Class B ≥80%, Class C ≥70%. We grade your portfolio, list redesigns and cost the move from C to B before 1 January 2030."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock title="What the regulation says">
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
              Recyclability is testable, not a thought experiment. Article 6
              demands evidence — by component, against published criteria, in
              the file your market surveillance authority can request.
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
        title="Grade every SKU before 2030"
        description="Book a 30-minute working session. We confirm the SKU perimeter, sign the NDA and start the recyclability assessment within the week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME,
          description: META_DESCRIPTION,
          serviceType: "Article 6 recyclability assessment for PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}
