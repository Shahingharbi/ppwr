import type { Metadata } from "next";
import {
  FileSignature,
  Files,
  ShieldCheck,
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

const SERVICE_NAME = "Declaration of Conformity (Article 39)";
const SERVICE_PATH = "/services/declaration-of-conformity";
const SERVICE_URL = `https://pactum-advisory.eu${SERVICE_PATH}`;

const META_DESCRIPTION =
  "Build audit-ready Declarations of Conformity and ten-year technical files for every packaging unit you place on the EU market under Article 39 PPWR.";

export const metadata: Metadata = {
  title:
    "Declaration of Conformity — Article 39 PPWR | Pactum",
  description: META_DESCRIPTION,
  alternates: { canonical: SERVICE_PATH },
  openGraph: {
    title: "Declaration of Conformity — Article 39 PPWR | Pactum",
    description: META_DESCRIPTION,
    url: SERVICE_URL,
    siteName: "Pactum",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Declaration of Conformity — Article 39 PPWR | Pactum",
    description: META_DESCRIPTION,
  },
};

const FAQ_ITEMS = [
  {
    question: "Who must draw up the Declaration of Conformity?",
    answerText:
      "Article 39 of Regulation (EU) 2025/40 places the duty on the manufacturer of the packaging. Where the manufacturer is established outside the European Union, the duty falls on the importer or on the authorised representative designated under Article 16. The DoC must be drawn up before the packaging is placed on the EU market and made available to market-surveillance authorities on request.",
  },
  {
    question: "What must the Declaration contain?",
    answerText:
      "Article 39 and the model declaration in Annex VII require: identification of the packaging (model, batch or serial number), the name and address of the manufacturer and, where applicable, the authorised representative, a statement that the declaration is issued under the sole responsibility of the manufacturer, the harmonised standards or technical specifications applied, and the date and place of issue plus the signature of the responsible person. The declaration cites Regulation (EU) 2025/40 explicitly.",
  },
  {
    question: "What goes into the technical documentation?",
    answerText:
      "The technical file underpins the DoC. Article 40 lists the minimum content: a general description of the packaging unit, design and manufacturing drawings, descriptions and explanations of those drawings, the harmonised standards applied in full or in part, the results of design calculations and examinations, test reports for Articles 5, 6, 7, 9, 10, 11 and 24 as applicable, and the documents demonstrating compliance with each obligation. The file is retained for ten years from the date of placing on the market.",
  },
  {
    question: "How does Article 39 interact with food-contact regulations?",
    answerText:
      "Article 39 PPWR sits alongside Regulation (EC) 1935/2004 on food-contact materials and Regulation (EU) 10/2011 on plastic materials in food contact. Each regime requires its own declaration, but they share evidence (migration testing, recycled-content certifications, PFAS test results). We design the technical file so a single evidence base feeds both regimes without duplication.",
  },
  {
    question: "How is enforcement organised?",
    answerText:
      "Market surveillance is governed by Regulation (EU) 2019/1020, as amended by the PPWR. Authorities can demand the DoC and the technical file, sample-test the packaging, require corrective action, withdraw or recall non-compliant stock, and impose Article 68 penalties. From 12 August 2026, the Information and Communication System on Market Surveillance (ICSMS) is the primary cross-border enforcement channel for packaging.",
  },
  {
    question: "How does the DoC connect to the gap analysis and recyclability assessment?",
    answerText:
      "The DoC is the closing artefact of every PPWR workstream. The gap analysis defines what evidence is required per SKU; the recyclability assessment generates the Article 6 evidence; the recycled-content roadmap generates the Article 7 evidence; the PFAS programme generates the Article 5 evidence. We assemble all of it into the Article 39 file so each SKU is audit-ready when market surveillance asks.",
  },
];

const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
  question: it.question,
  answer: it.answerText,
}));

export default function DeclarationOfConformityPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/ppwr-gap-analysis" },
          { label: "Declaration of Conformity" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 39 · DECLARATION OF CONFORMITY"
        title="Declaration of Conformity — audit-ready, every SKU, every market."
        subtitle="Article 39 puts the manufacturer on the hook for a written DoC and a ten-year technical file before any packaging unit is placed on the EU market. We build the file once, you defend it for the next decade."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock title="What the regulation says">
        <p>
          Article 39 of Regulation (EU) 2025/40 imposes on the manufacturer of
          a packaging unit the duty to draw up a written{" "}
          <em>Declaration of Conformity</em> (DoC) before that unit is placed
          on the EU market. Where the manufacturer is established outside the
          Union, the duty falls on the importer placing the goods on the
          market or on the <em>authorised representative</em> designated under
          Article 16. The DoC follows the model in Annex VII, cites
          Regulation (EU) 2025/40 by name and version, and is issued under the
          sole responsibility of the manufacturer.
        </p>
        <p>
          Article 40 specifies the supporting <em>technical documentation</em>
          : a general description of the packaging unit, design and
          manufacturing drawings, descriptions and explanations, the
          harmonised standards or technical specifications applied (in full or
          in part, with deviations explained), the results of design
          calculations and examinations, the test reports demonstrating
          compliance with the substantive obligations of the Regulation
          (Articles 5, 6, 7, 9, 10, 11, 24 and others as applicable), and any
          other documents proving the unit conforms. The file must be kept
          for <strong>ten years</strong> from the date of placing on the
          market and produced to market-surveillance authorities within the
          deadline they set.
        </p>
        <p>
          Market surveillance is organised under Regulation (EU) 2019/1020 on
          market surveillance and compliance of products, as amended by the
          PPWR. Authorities have wide powers: to demand the DoC and technical
          file, to sample-test the packaging, to issue corrective measures,
          and — under Article 39 read together with Article 68 — to{" "}
          <em>withdraw</em> or <em>recall</em> non-compliant packaging from
          the market and impose penalties Member States must set as
          effective, proportionate and dissuasive. The Information and
          Communication System on Market Surveillance (ICSMS) is the
          cross-border channel from <strong>12 August 2026</strong>.
        </p>
        <p>
          Article 39 reaches every packaging unit, regardless of material —
          plastic, paper and board, glass, metal, wood and composites — and
          every market segment, including B2B transport packaging. It is not
          a sustainability obligation in the soft sense; it is the
          accountability backbone of the Regulation. The CE-marking comparison
          is direct: a packaging unit on the EU market without a DoC behind
          it is, by Article 39 alone, non-compliant.
        </p>
      </RegulationBlock>

      <OperationsImpact
        title="What changes for your operations"
        items={[
          {
            title: "Every SKU needs a signed DoC before placing",
            description:
              "Article 39 is a placing-on-the-market gate. Your launch checklist must include the DoC sign-off; without it, packaging cannot lawfully ship. Manufacturer signature, date, harmonised standards cited, model identification — all six fields are mandatory.",
          },
          {
            title: "The technical file becomes a system, not a folder",
            description:
              "Drawings, test reports, supplier declarations and harmonised-standard references must be retrieval-ready for ten years. PDM, document management or a dedicated PPWR file system — pick one, then govern it.",
          },
          {
            title: "Authorised representative coverage by Member State",
            description:
              "Non-EU manufacturers must designate an authorised representative under Article 16 with the documented power to act on the DoC. Importers carry the duty otherwise. The matrix flags each SKU's coverage by Member State.",
          },
          {
            title: "Harmonised standards must be cited explicitly",
            description:
              "EN 13427 (general), EN 13428–13432 (specific) and the new harmonised standards being mandated by the Commission must be cited in full or in part. Deviations need a documented engineering rationale that survives expert challenge.",
          },
          {
            title: "Market surveillance is real and EU-wide",
            description:
              "Reg. (EU) 2019/1020 governs cross-border enforcement. ICSMS connects authorities; an action in one Member State propagates to others. Withdrawal in one country can trigger market-wide action within weeks.",
          },
          {
            title: "Recall and penalty exposure is at packaging level",
            description:
              "Article 68 requires effective, proportionate and dissuasive penalties. Several Member States are signalling fines tied to turnover. Recall and withdrawal cost is the operational risk to budget for, not the fine alone.",
          },
        ]}
      />

      <DeliverablesGrid
        title="What you get"
        description="The Article 39 stack you would need to defend at a market-surveillance audit anywhere in the Union — drafted once, governed for the next decade."
        deliverables={[
          {
            icon: FileSignature,
            title: "DoC template per packaging family",
            description:
              "Annex VII-aligned Declaration of Conformity template per packaging family. Manufacturer or authorised-representative variants. Multi-language coverage for the Member States you place into.",
          },
          {
            icon: Files,
            title: "Technical file architecture",
            description:
              "Document map for the ten-year technical file: drawings, test reports, supplier declarations, harmonised-standard references. PDM or DMS integration plan, retention policy and audit trail.",
          },
          {
            icon: ShieldCheck,
            title: "Evidence library and standards crosswalk",
            description:
              "Crosswalk between PPWR articles, applicable harmonised standards (EN 13427 series and new mandates) and the test reports in your supply chain. Gap list per SKU and the test plan to close it.",
          },
          {
            icon: Workflow,
            title: "DoC governance model",
            description:
              "RACI for the manufacturer, the authorised representative, the importer and the distributor. Sign-off workflow into your launch process, change-control procedure and supplier escalation.",
          },
        ]}
        timeToDeliver="3–5 weeks for a typical 100–500 SKU portfolio"
        teamComposition="1 partner, 1 senior regulatory analyst, 1 quality systems lead"
      />

      <HowWeWork
        title="How we work — five gates from blank file to audit-ready"
        steps={[
          {
            step: "01",
            title: "NDA, perimeter and obligated-operator map",
            duration: "Week 0",
            description:
              "Mutual NDA. We map every legal entity placing packaging on the EU market, the Member States in scope and the authorised-representative or importer setup per country. SKU master is registered.",
          },
          {
            step: "02",
            title: "Article-by-article evidence assessment",
            duration: "Weeks 1–2",
            description:
              "We test every SKU's existing evidence base against Articles 5, 6, 7, 9, 10, 11 and 24. Gaps, unsubstantiated supplier claims and missing harmonised-standard citations are listed.",
          },
          {
            step: "03",
            title: "DoC drafting and templating",
            duration: "Weeks 2–3",
            description:
              "Annex VII-aligned templates per packaging family, multi-language where needed, with manufacturer or authorised-representative variants. The legal text is reviewed against EU and national obligations.",
          },
          {
            step: "04",
            title: "Technical file architecture and DMS integration",
            duration: "Weeks 3–4",
            description:
              "Document map, retention policy and integration into your PDM or DMS. The retrieval workflow is designed to deliver any SKU's file within 48 hours of a market-surveillance request.",
          },
          {
            step: "05",
            title: "Steering committee and ten-year governance",
            duration: "Weeks 4–5",
            description:
              "We hand over the DoC templates, the technical file architecture, the RACI and the change-control procedure. Quarterly reviews are scheduled; we hand over the calendar of acts that will affect future DoCs.",
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
              The Declaration of Conformity is a regulatory engineering
              problem, not a slide deck. The advisor must read harmonised
              standards, market surveillance procedures and supplier
              attestations as primary evidence.
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
                  us: { type: "yes", text: "Article 39 every day" },
                  competitor1: { type: "no", text: "One offer in ESG portfolio" },
                  competitor2: { type: "no", text: "Circular-economy generalist" },
                },
                {
                  criterion: "Regulatory horizon scanning",
                  us: { type: "yes", text: "Reg. 2019/1020 and harmonised standards tracked weekly" },
                  competitor1: { type: "mixed", text: "Quarterly briefings" },
                  competitor2: { type: "no", text: "Ad-hoc" },
                },
                {
                  criterion: "Time to first deliverable",
                  us: { type: "yes", text: "DoC stack in 3–5 weeks" },
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
        title="Questions on the Article 39 Declaration of Conformity"
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
              href="/services/pfas-compliance"
            >
              PFAS compliance (Article 5)
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
        title="Be audit-ready before 12 August 2026"
        description="Book a 30-minute working session. We confirm the legal entities and the SKU perimeter, sign the NDA, and start the DoC stack within the week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME,
          description: META_DESCRIPTION,
          serviceType: "Article 39 Declaration of Conformity for PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}
