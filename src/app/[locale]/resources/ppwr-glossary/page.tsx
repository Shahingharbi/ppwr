import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "PPWR glossary — every defined term in Regulation (EU) 2025/40",
  description:
    "Plain-English definitions of every defined term in the PPWR — from authorised representative to very lightweight plastic carrier bag, with article references.",
  alternates: { canonical: "/resources/ppwr-glossary" },
  openGraph: {
    title: "PPWR glossary — defined terms in Regulation (EU) 2025/40",
    description:
      "Thirty-plus PPWR defined terms with the article that defines or first uses each one.",
    url: "https://pactum-advisory.eu/resources/ppwr-glossary",
    type: "article",
  },
};

type Term = {
  term: string;
  article: string;
  definition: string;
};

const TERMS: Term[] = [
  {
    term: "Authorised representative",
    article: "Art. 18",
    definition:
      "A natural or legal person established in the Union who has received a written mandate from a manufacturer to act on its behalf in relation to specific obligations under the Regulation. Required where the manufacturer is established outside the Union and an importer does not assume the equivalent role.",
  },
  {
    term: "Brand owner",
    article: "Art. 3",
    definition:
      "An economic operator that places packaged products on the market under its own name or trademark and is therefore commercially associated with the packaging unit by the end-user.",
  },
  {
    term: "Compostable packaging",
    article: "Art. 9",
    definition:
      "Packaging capable of undergoing physical, chemical, thermal or biological decomposition such that it ultimately decomposes into carbon dioxide, biomass and water in industrial composting conditions, and meets the technical specifications set under the Regulation.",
  },
  {
    term: "Contact-sensitive packaging",
    article: "Annex II",
    definition:
      "Packaging used for products listed in Annex II of the Regulation — predominantly food, feed, pharmaceutical and medical-device products — where direct or indirect contact with the packaged product imposes additional safety, hygiene or quality constraints. Drives the lower recycled-content target under Article 7.",
  },
  {
    term: "Declaration of Conformity (DoC)",
    article: "Art. 39",
    definition:
      "A written declaration drawn up by the manufacturer (or importer) before placing packaging on the EU market, stating that the packaging satisfies the applicable requirements of Regulation (EU) 2025/40 and identifying the harmonised standards or technical specifications applied.",
  },
  {
    term: "Deposit return scheme (DRS)",
    article: "Art. 50",
    definition:
      "A national or regional scheme requiring a deposit on selected packaging units — primarily single-use plastic beverage bottles up to 3 L and metal beverage cans — refunded to the consumer on return of the empty packaging through approved collection points.",
  },
  {
    term: "Design for recycling (DfR)",
    article: "Art. 6",
    definition:
      "The set of design choices that determine whether a packaging unit can be sorted and recycled in EU-wide industrial recycling infrastructure. Graded by Article 6 into Class A (≥95%), Class B (≥80%) and Class C (≥70%) recyclability performance.",
  },
  {
    term: "Distributor",
    article: "Art. 3",
    definition:
      "Any natural or legal person in the supply chain, other than the manufacturer or the importer, who makes packaging available on the EU market.",
  },
  {
    term: "Empty space ratio",
    article: "Art. 24",
    definition:
      "The ratio between the volume of the packaging unit and the volume of the packaged product. From 12 August 2028, the empty space ratio must not exceed 50% in grouped, transport and e-commerce packaging.",
  },
  {
    term: "Extended Producer Responsibility (EPR)",
    article: "Art. 45",
    definition:
      "An obligation under which producers cover the net costs of separate collection, sorting, transport, treatment, awareness-raising and litter clean-up for the packaging they place on the EU market. Fees must be eco-modulated by recyclability class and recycled content.",
  },
  {
    term: "Fulfilment service provider",
    article: "Art. 4",
    definition:
      "A natural or legal person offering, in the course of commercial activity, at least two of the following services: warehousing, packaging, addressing, dispatching of products of which they are not the owner. Carries obligations under the Regulation when goods enter the EU market.",
  },
  {
    term: "Grouped packaging",
    article: "Art. 3",
    definition:
      "Packaging conceived to constitute, at the point of purchase, a grouping of a certain number of sales units, whether sold to the end-user or used to replenish shelves at the point of sale.",
  },
  {
    term: "HORECA",
    article: "Art. 25, Annex V",
    definition:
      "Hotels, restaurants, cafés and similar food-service operators. Subject to specific reuse, single-use ban and refill obligations under the Regulation.",
  },
  {
    term: "Importer",
    article: "Art. 17",
    definition:
      "Any natural or legal person established within the Union who places packaging from a third country on the EU market. The importer assumes the manufacturer's obligations where the manufacturer is established outside the Union.",
  },
  {
    term: "Manufacturer",
    article: "Art. 16",
    definition:
      "Any natural or legal person who manufactures packaging — or has packaging designed or manufactured — and markets that packaging under its own name or trademark.",
  },
  {
    term: "Mass balance",
    article: "Art. 7",
    definition:
      "A chain-of-custody methodology used to allocate recycled content across batches of plastic when physically segregated streams are not available. Permitted under conditions to be set by Commission implementing act.",
  },
  {
    term: "Obligated economic operator",
    article: "Art. 4",
    definition:
      "Any of the actors with duties under the Regulation: manufacturers, suppliers of raw materials, importers, distributors, fulfilment service providers and authorised representatives.",
  },
  {
    term: "Packaging unit",
    article: "Art. 3",
    definition:
      "The smallest packaged item placed on the market — for example a single PET bottle, an aluminium can, a folded carton — assessed individually for recyclability, recycled content, labelling and Declaration of Conformity.",
  },
  {
    term: "Packaging waste",
    article: "Art. 3",
    definition:
      "Any packaging or packaging material covered by the Regulation that the holder discards, intends to discard or is required to discard.",
  },
  {
    term: "PFAS — Per- and polyfluoroalkyl substances",
    article: "Art. 5",
    definition:
      "A class of synthetic organofluorine compounds. Article 5 prohibits intentionally added PFAS in food-contact packaging from 12 August 2026, with thresholds of 25 ppb (any individual PFAS), 250 ppb (sum of PFAS) and 50 ppm of total fluorine as an indicator.",
  },
  {
    term: "Producer",
    article: "Art. 45",
    definition:
      "Any manufacturer, importer or distributor that, irrespective of the selling technique used (including distance contracts), places packaging on the EU market for the first time within a Member State on a professional basis.",
  },
  {
    term: "Producer Responsibility Organisation (PRO)",
    article: "Art. 47",
    definition:
      "An entity formed individually or collectively by producers to fulfil EPR obligations on their behalf — collecting fees, contracting collection and treatment, and reporting to national registers.",
  },
  {
    term: "Recyclable packaging",
    article: "Art. 6",
    definition:
      "Packaging designed for material recycling, capable of being separately collected and sorted at scale in EU recycling infrastructure, and reaching at least Class C (≥70%) performance under the design-for-recycling criteria.",
  },
  {
    term: "Recyclability performance grade",
    article: "Art. 6",
    definition:
      "The classification A / B / C of a packaging unit based on the share of its mass that can be high-quality recycled at scale: A ≥95%, B ≥80%, C ≥70%. From 1 January 2038, only A and B are permitted on the EU market.",
  },
  {
    term: "Recycled content",
    article: "Art. 7",
    definition:
      "The share, expressed as a percentage of mass, of post-consumer plastic waste recycled and incorporated into the plastic packaging unit. Targets apply per packaging type from 1 January 2030 and rise from 1 January 2040.",
  },
  {
    term: "Reusable packaging",
    article: "Art. 11",
    definition:
      "Packaging conceived, designed and placed on the market to accomplish, within its life cycle, multiple trips or rotations by being refilled or reused for the same purpose for which it was conceived, satisfying durability, washability and sortability criteria.",
  },
  {
    term: "Reuse system",
    article: "Art. 30",
    definition:
      "A combination of organisational arrangements, technical infrastructure and financial flows ensuring that reusable packaging is collected, washed, restored and reissued. Required to meet the reuse first targets in Article 29 from 1 January 2030.",
  },
  {
    term: "Sales packaging",
    article: "Art. 3",
    definition:
      "Packaging conceived to constitute a sales unit at the point of purchase, comprising the product and the immediate packaging the consumer takes home.",
  },
  {
    term: "Single-use packaging",
    article: "Art. 3",
    definition:
      "Packaging not designed to be reused — used once for the purpose for which it was conceived and then discarded. Subject to format-specific bans under Annex V from 12 August 2026.",
  },
  {
    term: "Single-use plastic beverage bottle",
    article: "Art. 3",
    definition:
      "A single-use plastic container intended for beverages, with a capacity of up to three litres. Subject to a 30% recycled content target from 1 January 2030 (rising to 65% from 1 January 2040) and to the 90% separate-collection DRS target by 31 December 2029.",
  },
  {
    term: "Total fluorine",
    article: "Art. 5",
    definition:
      "The sum of organic and inorganic fluorine in a packaging material, used as an indicator measurement for PFAS presence. Threshold: 50 ppm in food-contact packaging from 12 August 2026.",
  },
  {
    term: "Transport packaging",
    article: "Art. 3",
    definition:
      "Packaging conceived to facilitate the handling and transport of sales units or grouped packaging from the manufacturer to the distribution centre, excluding road, rail, ship and air containers.",
  },
  {
    term: "Very lightweight plastic carrier bag",
    article: "Annex V",
    definition:
      "A plastic carrier bag with a wall thickness below 15 microns, required for hygiene purposes or supplied as primary packaging for loose food. Other very lightweight plastic carrier bags are banned from 12 August 2026.",
  },
];

const ALPHABET = Array.from(new Set(TERMS.map((t) => t.term[0].toUpperCase()))).sort();

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function GlossaryPage() {
  const grouped = ALPHABET.map((letter) => ({
    letter,
    terms: TERMS.filter((t) => t.term[0].toUpperCase() === letter),
  }));

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/ppwr-timeline" },
          { label: "PPWR Glossary" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Resource · Glossary
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            PPWR glossary — every defined term, every article reference.
          </h1>
          <p
            className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            Plain-English definitions of every term defined or first used in Regulation (EU) 2025/40,
            tagged with the article that anchors it. Cross-checked against the official OJ L text on{" "}
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
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
          {/* Side TOC */}
          <aside className="hidden lg:block">
            <nav
              className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border bg-[#f5f7f4] p-5"
              aria-label="Glossary letter index"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Jump to letter
              </p>
              <div className="mt-3 grid grid-cols-4 gap-1.5">
                {ALPHABET.map((l) => (
                  <a
                    key={l}
                    href={`#letter-${l}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-foreground hover:bg-[#10b981] hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {l}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-border text-sm">
                <p
                  className="font-bold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Related
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>
                    <a
                      href="/resources/ppwr-timeline"
                      className="text-[#10b981] underline-offset-2 hover:underline"
                    >
                      Timeline 2025–2040
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resources/ppwr-faq"
                      className="text-[#10b981] underline-offset-2 hover:underline"
                    >
                      40+ PPWR FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/ppwr-gap-analysis"
                      className="text-[#10b981] underline-offset-2 hover:underline"
                    >
                      Gap analysis service
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Content */}
          <div>
            {grouped.map((group) => (
              <section
                key={group.letter}
                id={`letter-${group.letter}`}
                className="scroll-mt-28 mb-12"
              >
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {group.letter}
                </h2>
                <dl className="mt-5 space-y-5">
                  {group.terms.map((t) => (
                    <div
                      key={t.term}
                      id={slugify(t.term)}
                      className="scroll-mt-28 rounded-2xl border border-border bg-white p-5 hover:border-[#10b981]/40 transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline gap-3">
                        <dt
                          className="text-lg md:text-xl font-bold text-foreground"
                          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                        >
                          {t.term}
                        </dt>
                        <span
                          className="rounded-full bg-[#d1fae5] px-2.5 py-0.5 text-[11px] font-semibold text-[#065f46]"
                          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                        >
                          {t.article}
                        </span>
                      </div>
                      <dd
                        className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground"
                        style={{ fontFamily: "var(--font-maison-neue)" }}
                      >
                        {t.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "PPWR — Regulation (EU) 2025/40 glossary",
          url: "https://pactum-advisory.eu/resources/ppwr-glossary",
          description:
            "Defined terms in Regulation (EU) 2025/40 on packaging and packaging waste.",
          hasDefinedTerm: TERMS.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.definition,
            inDefinedTermSet: "https://pactum-advisory.eu/resources/ppwr-glossary",
            termCode: t.article,
            url: `https://pactum-advisory.eu/resources/ppwr-glossary#${slugify(t.term)}`,
          })),
        }}
      />
    </>
  );
}
