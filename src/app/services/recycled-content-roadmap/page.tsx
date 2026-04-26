import type { Metadata } from "next";
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

const SERVICE_NAME = "Recycled Content Roadmap (Article 7)";
const SERVICE_PATH = "/services/recycled-content-roadmap";
const SERVICE_URL = `https://pactum-advisory.eu${SERVICE_PATH}`;

const META_DESCRIPTION =
  "Hit Article 7 recycled-content targets — 30%, 35%, 50%, 65%. Build a 24-month sourcing roadmap with mass-balance rules, ISCC certification and food-grade rPET supply.";

export const metadata: Metadata = {
  title:
    "Recycled-content roadmap for plastic packaging | Pactum",
  description: META_DESCRIPTION,
  alternates: { canonical: SERVICE_PATH },
  openGraph: {
    title: "Recycled-content roadmap for plastic packaging | Pactum",
    description: META_DESCRIPTION,
    url: SERVICE_URL,
    siteName: "Pactum",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recycled-content roadmap for plastic packaging | Pactum",
    description: META_DESCRIPTION,
  },
};

const FAQ_ITEMS = [
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

const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
  question: it.question,
  answer: it.answerText,
}));

export default function RecycledContentRoadmapPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/ppwr-gap-analysis" },
          { label: "Recycled-content roadmap" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 7 · RECYCLED CONTENT"
        title="Recycled-content roadmap for plastic packaging — 30%, 35% and beyond."
        subtitle="Article 7 puts four mandatory shares on every plastic packaging unit by 2030. We model your sourcing across mass balance and free attribution, then write the 24-month plan that pencils out at unit cost."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock title="What the regulation says">
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
              Article 7 is a procurement and chain-of-custody problem dressed
              as a sustainability number. The advisor needs to know polymer
              markets, certification schemes and the implementing-act calendar
              equally well.
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
        title="Sign your recyclate offtake before 2027"
        description="Book a 30-minute working session. We confirm the SKU perimeter, sign the NDA and start the sourcing roadmap within the week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME,
          description: META_DESCRIPTION,
          serviceType: "Article 7 recycled-content roadmap for PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}
