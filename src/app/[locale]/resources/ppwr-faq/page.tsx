import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd, buildFaqSchema } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FaqGroup, type FaqItem } from "@/components/pages/resources/FaqGroup";

export const metadata: Metadata = {
  title: "PPWR FAQ — 40+ answers on Regulation (EU) 2025/40",
  description:
    "PPWR FAQ: 40+ plain-English answers on scope, recyclability, recycled content, reuse, PFAS, labelling, EPR, DRS and penalties under Regulation (EU) 2025/40.",
  alternates: { canonical: "/resources/ppwr-faq" },
  openGraph: {
    title: "PPWR FAQ — 40+ answers on Regulation (EU) 2025/40",
    description:
      "Forty-plus PPWR questions answered in two to five sentences each, with article and date references.",
    url: "https://pactum-advisory.eu/resources/ppwr-faq",
    type: "article",
  },
};

const GROUPS: { id: string; title: string; items: FaqItem[] }[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        question: "What is the PPWR?",
        answer:
          "Regulation (EU) 2025/40 of the European Parliament and of the Council on packaging and packaging waste — known as the PPWR. CELEX 32025R0040. It replaces Directive 94/62/EC and amends Regulation (EU) 2019/1020 and Directive (EU) 2019/904. It is binding in its entirety and directly applicable in every Member State.",
      },
      {
        question: "When did the PPWR enter into force?",
        answer:
          "11 February 2025 — the twentieth day after publication in the Official Journal on 22 January 2025 (Article 79).",
      },
      {
        question: "When does the PPWR generally apply?",
        answer:
          "12 August 2026 — eighteen months after entry into force — except for provisions with a different application date (notably Article 6 recyclability and Article 7 recycled content from 1 January 2030).",
      },
      {
        question: "Does the PPWR apply to non-EU companies?",
        answer:
          "Yes. Any packaging placed on the EU market is in scope, regardless of where the brand owner is established. Non-EU manufacturers must designate an authorised representative under Article 18 if no EU importer assumes the equivalent role.",
      },
    ],
  },
  {
    id: "scope",
    title: "Scope",
    items: [
      {
        question: "Which packaging materials are covered?",
        answer:
          "All of them — plastic, paper, glass, metal, wood and composites — placed on the EU market or generated as waste in the Union.",
      },
      {
        question: "Who are the obligated economic operators?",
        answer:
          "Manufacturers, suppliers of raw materials, importers, distributors, fulfilment service providers and authorised representatives. Each role carries specific duties under Articles 16 to 20.",
      },
      {
        question: "Are sales packaging, grouped packaging and transport packaging all in scope?",
        answer:
          "Yes. Article 3 defines all three. Each must satisfy applicable Article 5 to 13 sustainability requirements, and each is subject to the Article 24 empty space ratio cap from 12 August 2028.",
      },
      {
        question: "Is medical device packaging in scope?",
        answer:
          "Yes, but with carve-outs. Contact-sensitive packaging for pharmaceutical and medical devices is included in Annex II and benefits from lower recycled-content targets under Article 7. Specific labelling and reuse derogations apply.",
      },
    ],
  },
  {
    id: "recyclability",
    title: "Recyclability (Article 6)",
    items: [
      {
        question: "What is Class A, B, C recyclability?",
        answer:
          "Article 6 grades each packaging unit by recyclability performance. Class A is at least 95%, Class B at least 80%, Class C at least 70%. From 1 January 2030 every packaging unit must reach at least Class C; from 1 January 2038 only Class A and B are permitted on the EU market.",
      },
      {
        question: "Who decides which class applies to my packaging?",
        answer:
          "The manufacturer or importer self-declares the class in the Declaration of Conformity (Article 39), based on the design-for-recycling criteria set by Commission delegated act, expected by end-2027. Market surveillance authorities may challenge the grade.",
      },
      {
        question: "What happens to Class C packaging in 2038?",
        answer:
          "It cannot be placed on the EU market. Withdrawal and recall powers under Article 68 apply. The 2030–2038 window is the redesign runway.",
      },
      {
        question: "Are there exemptions for innovative or contact-sensitive packaging?",
        answer:
          "Limited exemptions exist for innovative packaging on a temporary basis under Article 6, and for some contact-sensitive packaging where no recyclable alternative exists. These exemptions must be granted by Commission decision.",
      },
    ],
  },
  {
    id: "recycled-content",
    title: "Recycled content (Article 7)",
    items: [
      {
        question: "What are the recycled content targets for 2030?",
        answer:
          "30% for contact-sensitive packaging containing PET as major component, 10% for contact-sensitive packaging in other plastics, 30% for single-use plastic beverage bottles, and 35% for other plastic packaging. Calculated as an average per manufacturing plant and year.",
      },
      {
        question: "What about 2040?",
        answer:
          "Targets rise on 1 January 2040 to 50% (contact-sensitive PET), 25% (other contact-sensitive plastics), 65% (beverage bottles) and 65% (other plastic packaging).",
      },
      {
        question: "Is mass balance allowed?",
        answer:
          "Yes, under conditions to be set by Commission implementing act. Physical segregation is preferred but mass balance with chain-of-custody verification is permitted to scale food-grade rPET supply.",
      },
      {
        question: "Does post-industrial recyclate count?",
        answer:
          "No. Article 7 requires post-consumer recyclate. Post-industrial waste does not count toward the targets.",
      },
    ],
  },
  {
    id: "reuse",
    title: "Reuse and refill (Articles 29 to 33)",
    items: [
      {
        question: "What are the reuse first targets for 2030?",
        answer:
          "40% reuse rate for transport and grouped packaging, 10% for beverage packaging, 90% reuse of transport packaging for large household appliances. Member States may derogate from the beverage target under conditions.",
      },
      {
        question: "What are the reuse stretch targets for 2040?",
        answer:
          "70% for transport and grouped packaging, 40% for beverage packaging.",
      },
      {
        question: "Must HORECA offer reusable take-away?",
        answer:
          "Yes, from 12 August 2026. Article 33 requires HORECA operators to offer a reusable container option for take-away food and beverages, at no additional cost above the reusable container deposit.",
      },
      {
        question: "Which retailers must offer refill stations?",
        answer:
          "From 1 January 2030, retailers with surface area equal to or greater than 400 m² selling food or detergents must offer refill stations under Article 30.",
      },
    ],
  },
  {
    id: "pfas",
    title: "PFAS (Article 5)",
    items: [
      {
        question: "When does the PFAS ban apply?",
        answer:
          "12 August 2026. From that date, food-contact packaging must not contain intentionally added PFAS in concentrations equal to or above the Article 5 thresholds.",
      },
      {
        question: "What are the PFAS thresholds?",
        answer:
          "25 ppb for any individual PFAS (targeted analysis), 250 ppb for the sum of PFAS (targeted analysis), and 50 ppm of total fluorine as an indicator measurement.",
      },
      {
        question: "Which packaging is in scope?",
        answer:
          "Food-contact packaging, including primary packaging in direct or indirect contact with food and feed. Non-food packaging is currently outside Article 5 scope but may fall under separate REACH or POPs Regulation rules on PFAS.",
      },
      {
        question: "How is PFAS tested?",
        answer:
          "Two complementary methods: targeted analysis for individual PFAS species (LC-MS/MS for the 25 ppb and 250 ppb thresholds), and total fluorine measurement (CIC or PIGE for the 50 ppm indicator). A finding above any threshold triggers enforcement.",
      },
    ],
  },
  {
    id: "labelling",
    title: "Labelling and Digital Product Passport (Articles 12 to 13)",
    items: [
      {
        question: "When does harmonised labelling apply?",
        answer:
          "12 August 2028. Every packaging unit must carry harmonised material composition and sorting labels in line with the implementing act adopted by the Commission.",
      },
      {
        question: "Is a QR code mandatory?",
        answer:
          "Yes — Article 12 requires a QR code or other digital data carrier on every packaging unit. The detailed specifications, data fields and access governance are set by implementing act.",
      },
      {
        question: "Can I claim recycled content on-pack?",
        answer:
          "Only if substantiated and verified under Article 7. Unsubstantiated recycled-content claims constitute greenwashing and may trigger Article 68 penalties as well as separate sanctions under the Empowering Consumers Directive.",
      },
      {
        question: "Does the Digital Product Passport apply to all packaging?",
        answer:
          "Rollout is phased. The DPP is referenced in Article 12 with rollout starting 2028 and extending through 2030 by category. Detailed scope is set by implementing act.",
      },
    ],
  },
  {
    id: "epr-drs",
    title: "EPR and DRS (Articles 45 and 50)",
    items: [
      {
        question: "What does EPR cover under the PPWR?",
        answer:
          "Producers (or PROs on their behalf) cover the net costs of separate collection, sorting, transport, treatment, awareness-raising and litter clean-up. Article 45 makes this universal across the EU and requires eco-modulation of fees by recyclability class and recycled content.",
      },
      {
        question: "What is the DRS target for 2029?",
        answer:
          "90% separate collection of single-use plastic beverage bottles up to 3 L and metal beverage cans, by 31 December 2029 (Article 50). Member States that achieve 80% by 31 December 2026 with a credible plan may avoid mandatory DRS.",
      },
      {
        question: "Are EPR fees harmonised across the EU?",
        answer:
          "The fee level is set nationally; the methodology — including eco-modulation parameters — is harmonised by Commission implementing act. National registers track producer compliance.",
      },
      {
        question: "What is a Producer Responsibility Organisation?",
        answer:
          "An entity formed by producers individually or collectively to discharge EPR obligations on their behalf — collecting fees, contracting collection and treatment services, and reporting to national registers (Article 47).",
      },
    ],
  },
  {
    id: "penalties",
    title: "Penalties and enforcement (Article 68)",
    items: [
      {
        question: "What penalties apply?",
        answer:
          "Member States set effective, proportionate and dissuasive penalties. Typical national transposition includes administrative fines (often a percentage of EU turnover), market-withdrawal orders, recall powers and criminal liability for repeated or wilful breaches.",
      },
      {
        question: "Can market surveillance authorities recall non-compliant packaging?",
        answer:
          "Yes. Articles 68 and 69, together with Regulation (EU) 2019/1020, give authorities the power to require corrective action, withdraw products from the market, and order recall.",
      },
      {
        question: "Who is liable for non-compliance?",
        answer:
          "The obligated economic operator that placed the packaging on the EU market. For non-EU manufacturers, the importer or authorised representative carries the liability.",
      },
      {
        question: "How long must technical documentation be kept?",
        answer:
          "Ten years from the date the packaging is placed on the EU market (Article 40). Documentation must be produced to market surveillance authorities on request.",
      },
    ],
  },
  {
    id: "how-to-start",
    title: "How to start",
    items: [
      {
        question: "What is the first step?",
        answer:
          "Map every SKU against the binding articles. The Pactum five-day gap analysis produces an article-by-article portfolio read with a costed action plan. Start there before committing CAPEX.",
      },
      {
        question: "How long does compliance take?",
        answer:
          "12 August 2026 obligations (PFAS, Annex V, HORECA reuse) are typically achievable in nine to twelve months. 1 January 2030 obligations (recyclability, recycled content, reuse, refill) require eighteen to thirty-six months because supplier contracts and tooling redesign drive the lead time.",
      },
      {
        question: "Should we wait for the delegated and implementing acts?",
        answer:
          "No. Wait-and-see is the most expensive option. The dates and headline thresholds are fixed in the Regulation. Designing under reasonable interpretations now and adjusting at the margin once the acts publish is materially cheaper than scrambling in 2029.",
      },
      {
        question: "Where can we get help?",
        answer:
          "Pactum Advisory runs five-day costed gap analyses, recyclability grading, recycled-content roadmaps, PFAS phase-outs, reuse strategy and Declaration of Conformity files. See the Services section or book a working session.",
      },
    ],
  },
];

export default function FaqPage() {
  const allItems = GROUPS.flatMap((g) => g.items);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/ppwr-timeline" },
          { label: "PPWR FAQ" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Resource · Pillar FAQ
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            PPWR FAQ — 40+ answers, ten topic areas, every article cited.
          </h1>
          <p
            className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            The forty questions our clients ask in their first kick-off call, answered in two to five
            sentences. Cross-checked against the official text of Regulation (EU) 2025/40 on{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32025R0040"
              target="_blank"
              rel="noopener"
              className="text-[#10b981] underline-offset-2 hover:underline inline-flex items-center gap-1"
            >
              EUR-Lex
              <ExternalLink size={12} />
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a
              href="/resources/ppwr-timeline"
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              See the deadline timeline
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="/resources/ppwr-glossary"
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              Glossary of defined terms
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="/resources/ppwr-readiness-assessment"
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              Free readiness check
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-10">
          {/* Side TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <p
                className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-4"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Topics
              </p>
              <ul className="space-y-1.5 text-sm">
                {GROUPS.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      className="block border-l-2 border-border py-1.5 pl-3 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-12">
            {GROUPS.map((g) => (
              <div key={g.id} id={g.id} className="scroll-mt-28">
                <FaqGroup title={g.title} items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Still have a PPWR question?"
        description="Book a 30-minute working session and we will answer your portfolio-specific question against the article that governs it."
      />

      <JsonLd data={buildFaqSchema(allItems)} />
    </>
  );
}
