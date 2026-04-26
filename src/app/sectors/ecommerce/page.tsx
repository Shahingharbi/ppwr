import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { EcommerceStats } from "@/components/pages/sectors/ecommerce/EcommerceStats";

const PAGE_PATH = "/sectors/ecommerce";
const SECTOR_LABEL = "E-commerce & marketplaces";

export const metadata: Metadata = {
  title: "PPWR for e-commerce — empty space ratio, fulfilment service providers, parcels",
  description:
    "How Regulation (EU) 2025/40 reshapes e-commerce parcel packaging, marketplace seller obligations and fulfilment service provider duties — Article 24 empty space, Article 6 corrugated recyclability and Article 39 DoC.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${siteConfig.url}${PAGE_PATH}`,
    title: "PPWR for e-commerce — empty space ratio, fulfilment service providers, parcels",
    description:
      "How Regulation (EU) 2025/40 reshapes e-commerce parcel packaging, marketplace seller obligations and fulfilment service provider duties — Article 24 empty space, Article 6 corrugated recyclability and Article 39 DoC.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PPWR advisory for e-commerce — Pactum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPWR for e-commerce — Pactum",
    description:
      "Regulation (EU) 2025/40 applied to last-mile parcels, marketplaces and fulfilment service providers.",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Sectors", href: "/sectors/ecommerce" },
  { label: SECTOR_LABEL },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbItems.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.label,
    ...(it.href ? { item: `${siteConfig.url}${it.href}` } : {}),
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PPWR advisory for e-commerce",
  serviceType: "PPWR advisory for e-commerce",
  provider: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  areaServed: { "@type": "Place", name: "European Union" },
  description:
    "Pure-play advisory on Regulation (EU) 2025/40 for e-commerce retailers, marketplaces and fulfilment service providers — Article 24 empty space, Article 6 corrugated recyclability, Article 4 fulfilment service provider obligations under Regulation (EU) 2019/1020 and Article 39 Declaration of Conformity.",
  url: `${siteConfig.url}${PAGE_PATH}`,
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "E-commerce retailers, online marketplaces, fulfilment service providers",
  },
};

const articlesThatBite = [
  {
    article: "Article 24",
    headline:
      "E-commerce parcels capped at 50% empty space ratio — measured per packaging unit",
    deadline: "Applies from 12 August 2028",
    action:
      "We re-spec your carton range, right-sizing algorithm and void-fill mix so each parcel sits inside the 50% limit without breaking pick-and-pack throughput.",
    serviceHref: "/services/ppwr-gap-analysis",
    serviceLabel: "PPWR Gap Analysis",
  },
  {
    article: "Article 6",
    headline:
      "Recyclable-by-design grading (Class A/B/C) for corrugated and plastic mailers",
    deadline:
      "Class C minimum from 1 January 2030; Class C banned from 1 January 2038",
    action:
      "We grade printed corrugated, plastic mailers, padded envelopes and tape against draft design-for-recycling criteria and engineer Class C SKUs up to B.",
    serviceHref: "/services/recyclability-assessment",
    serviceLabel: "Recyclability Assessment",
  },
  {
    article: "Article 4 + Reg. (EU) 2019/1020",
    headline:
      "Fulfilment service providers explicitly obligated; marketplaces accountable for non-EU sellers",
    deadline: "Applies from 12 August 2026",
    action:
      "We map the operator chain (seller, marketplace, FSP, authorised representative), assign DoC ownership and draft the supply-side contractual clauses.",
    serviceHref: "/services/declaration-of-conformity",
    serviceLabel: "Declaration of Conformity",
  },
  {
    article: "Article 7",
    headline:
      "Plastic mailers and tape: 35% recycled content (2030), 65% (2040)",
    deadline: "From 1 January 2030, then 1 January 2040",
    action:
      "We model rPE and rPP supply, build mass-balance contracts with ISCC PLUS or CEN/TS certification and lock in volumes ahead of the 2028 supply squeeze.",
    serviceHref: "/services/recycled-content-roadmap",
    serviceLabel: "Recycled Content Roadmap",
  },
  {
    article: "Article 39",
    headline:
      "Declaration of Conformity required before placing packaging on the market",
    deadline: "From 12 August 2026, retained for 10 years (Article 40)",
    action:
      "We assemble the technical file per packaging unit, draft the DoC and brief market-surveillance enquiries before they hit your operations team.",
    serviceHref: "/services/declaration-of-conformity",
    serviceLabel: "Declaration of Conformity",
  },
];

const sectorRisks = [
  "Right-sizing algorithm exposure: a fulfilment centre that picks from a 12-carton size matrix typically generates 35-50% empty-space ratios on small-order parcels — every parcel above 50% is non-compliant from 12 August 2028 under Article 24.",
  "Void-fill economics flip: paper void fill, air pillows and bio-foam are not all equal under Article 6 grading, and the cost-per-parcel calculation changes once eco-modulation under Article 45 is layered on top of unit cost.",
  "Returns logistics double-handling: one outbound parcel and one returns mailer per item is two packaging units placed on the EU market — both need DoC under Article 39, and reuse strategies for returns mailers can be built under Article 29 only with proper loop tracking.",
  "Marketplace liability for non-EU sellers: under Article 4 read with Regulation (EU) 2019/1020, the marketplace and the fulfilment service provider can be treated as the obligated economic operator when the seller is established outside the Union and has not appointed an authorised representative.",
  "Branded over-boxing: customer-facing branded shipping cartons (e.g. luxury, premium electronics) often fail Article 6 grading because of metallic inks, foil stamping and laminated finishes — a Class-C grade kills the SKU on the EU shelf from 1 January 2038.",
  "Cross-border fulfilment and Member State register fragmentation: Article 45 EPR registers remain national, so a seller fulfilling from a single hub into 27 Member States must register, report and pay eco-modulated fees in each market where the parcel lands.",
];

const sectorFaqs = [
  {
    question:
      "Does the 50% empty-space limit apply to every parcel, or only on average across a fulfilment centre?",
    answer:
      "Article 24 applies the 50% empty-space ratio per packaging unit — i.e. per parcel — not as an average. A right-sized parcel of book-and-charger fitted into the smallest available carton may comply, while the next parcel of the same charger alone in the same carton may not. The compliance assessment is per parcel placed on the market from 12 August 2028.",
  },
  {
    question:
      "Are online marketplaces obligated economic operators under the PPWR?",
    answer:
      "Yes, when they meet the conditions of Article 4 of the PPWR read together with Regulation (EU) 2019/1020 on market surveillance. Marketplaces are accountable for ensuring that packaging placed on the EU market through their platform complies with Articles 5-13, particularly where the seller is established outside the Union. Fulfilment service providers are explicitly named in the regulation and bear independent obligations.",
  },
  {
    question:
      "Where does the Declaration of Conformity sit when the seller, marketplace and fulfilment provider are different entities?",
    answer:
      "Under Article 39 the manufacturer of the packaging unit signs the DoC, or the importer where the manufacturer is established outside the Union. In an e-commerce supply chain the DoC sits with whoever first places the packaging unit on the EU market — usually the seller for primary product packaging and the fulfilment centre or marketplace-branded carton for secondary shipping packaging. We map ownership unit-by-unit so it is unambiguous.",
  },
  {
    question:
      "Can we use the same shipping carton for outbound and customer returns to count as a reuse loop?",
    answer:
      "Article 29 reuse counting requires the packaging unit to be designed, in line with Article 11, for multiple rotations and to be operated within an auditable reuse system under Article 30. A returns mailer used once for delivery and once for return can qualify if the system is documented, the unit meets durability criteria and the rotation is captured by the reporting infrastructure under Article 56. Without that infrastructure, a return is just a second one-way trip.",
  },
  {
    question:
      "Does Article 6 recyclability apply to both the product packaging and the shipping carton?",
    answer:
      "Yes. Article 6 applies to every packaging unit — primary product packaging, secondary grouped packaging and tertiary shipping packaging — placed on the EU market. The corrugated parcel, the plastic mailer, the paper void fill and the brand-printed inner sleeve are each separately graded Class A/B/C. From 1 January 2030 every unit must reach Class C; from 1 January 2038 only Class A and B remain on the market.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sectorFaqs.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
};

export default function EcommerceSectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1280px] px-6 pt-6"
        style={{ fontFamily: "var(--font-maison-neue)" }}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {breadcrumbItems.map((it, i) => {
            const isLast = i === breadcrumbItems.length - 1;
            return (
              <li key={`${it.label}-${i}`} className="flex items-center gap-1.5">
                {it.href && !isLast ? (
                  <a href={it.href} className="hover:text-foreground transition-colors">
                    {it.label}
                  </a>
                ) : (
                  <span
                    className={isLast ? "text-foreground font-semibold" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {it.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    size={14}
                    className="text-muted-foreground/60"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <PageHero
        eyebrow="SECTOR"
        title="PPWR for e-commerce and marketplaces"
        subtitle="Regulation (EU) 2025/40 hits e-commerce on three fronts: the 50% empty-space ratio under Article 24, recyclability grading of corrugated and mailers under Article 6, and explicit obligations on fulfilment service providers under Article 4 read with Regulation (EU) 2019/1020. Right-sizing logic is a regulatory parameter now."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
        imageSrc="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80&auto=format&fit=crop"
      />

      {/* What PPWR means for e-commerce */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            What PPWR means for e-commerce
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            The Regulation rewrites every line of your fulfilment cost stack.
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-foreground/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              Regulation (EU) 2025/40, published in OJ L on 22 January 2025 and entered into
              force on 11 February 2025, applies generally from 12 August 2026. For
              e-commerce retailers, marketplaces and fulfilment service providers it is the
              single most operationally disruptive piece of EU legislation since the VAT
              e-commerce package — because it changes the parameters of the right-sizing
              algorithm, the carton matrix, the void-fill choice and the operator chain at
              the same time.
            </p>
            <p>
              The most disruptive provision is Article 24. From 12 August 2028, the empty
              space ratio of grouped, transport and e-commerce packaging is capped at 50%,
              measured per packaging unit. A standard fulfilment centre running on a
              12-carton matrix and a fixed right-sizing rule typically produces 35-55%
              empty-space ratios on small-order parcels — that distribution must shift
              entirely below 50% before August 2028, or each parcel above the line is
              non-compliant. The cost is not paper void fill; the cost is re-engineering
              the carton matrix and the algorithm that selects from it.
            </p>
            <p>
              Article 6 then grades every packaging unit — corrugated parcels, plastic
              mailers, padded envelopes, void fill, paper tape — for recyclability.
              Recyclability classes are A (≥95%), B (≥80%) and C (≥70%); from 1 January
              2030 every unit must reach Class C, and from 1 January 2038 Class C is banned
              from the market. Branded shipping cartons that lean on metallic inks, foil
              stamping or full-coverage laminated print are the most exposed today.
              Delegated acts setting the design-for-recycling criteria are expected by
              end-2027.
            </p>
            <p>
              Article 4, read together with Regulation (EU) 2019/1020, names fulfilment
              service providers explicitly as obligated economic operators alongside
              manufacturers, importers, distributors and authorised representatives.
              Marketplaces selling on behalf of non-EU sellers and the Amazon-FBA-style
              fulfilment chain operating under one roof inherit the DoC, the technical
              documentation under Article 40, and the eco-modulated EPR fees under Article
              45. Where the seller is established outside the Union and has not appointed
              an authorised representative, the obligation flows up the chain.
            </p>
            <p>
              Article 7 sets minimum recycled-content thresholds in plastic packaging from
              1 January 2030 — 35% for &ldquo;other plastic packaging&rdquo;, the bucket that captures
              plastic mailers, polybags, stretch wrap and tape — rising to 65% by 1
              January 2040. Article 39 and Article 40 close the loop: every packaging unit
              placed on the market needs a Declaration of Conformity supported by a
              technical file retained for 10 years. For a marketplace placing thousands of
              SKU-specific shipping units on the EU market every day, the DoC programme is
              an industrial workstream, not a back-office task. We run them in three
              streams — a{" "}
              <a
                href="/services/ppwr-gap-analysis"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                PPWR Gap Analysis
              </a>{" "}
              to scope, a{" "}
              <a
                href="/services/recyclability-assessment"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                Recyclability Assessment
              </a>{" "}
              to grade, and a{" "}
              <a
                href="/services/declaration-of-conformity"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                Declaration of Conformity
              </a>{" "}
              programme to evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Articles that bite hardest */}
      <section className="bg-[#f5f7f4] py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="max-w-3xl">
            <span
              className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Articles that bite hardest
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Five PPWR articles that determine your parcel-readiness.
            </h2>
            <p
              className="mt-4 text-base text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Each card pairs the binding obligation with the specific service we run to
              close it.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {articlesThatBite.map((card) => (
              <li
                key={card.article + card.headline}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <span
                  className="inline-flex w-fit items-center rounded-full bg-[#0f1a16] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.article}
                </span>
                <h3
                  className="mt-4 text-lg font-semibold text-foreground leading-snug"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.headline}
                </h3>
                <p
                  className="mt-2 text-sm font-semibold text-[#065f46]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.deadline}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  <span className="font-semibold text-foreground">What we do about it.</span>{" "}
                  {card.action}
                </p>
                <a
                  href={card.serviceHref}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#10b981] hover:text-[#059669]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Go to {card.serviceLabel}
                  <ChevronRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sector-specific risks */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Sector-specific risks
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Where e-commerce groups underestimate the regulation.
          </h2>

          <ul className="mt-10 space-y-4">
            {sectorRisks.map((risk, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-[#f5f7f4]/60 p-5"
              >
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1a16] text-xs font-semibold text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {i + 1}
                </span>
                <p
                  className="text-base leading-relaxed text-foreground/85"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {risk}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EcommerceStats />

      {/* Illustrative engagement */}
      <section className="bg-[#0f1a16] py-20 md:py-28 text-white">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#10b981]/15 px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Illustrative engagement, not a real client
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            How we&apos;d approach a pan-European marketplace.
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-white/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              A pan-European marketplace operating four EU fulfilment centres in Germany,
              Poland, France and Spain, dispatching 240,000 parcels a day across 27 Member
              States, comes to us 24 months before the 12 August 2028 empty-space ratio
              cliff. Their starting position: a 14-carton size matrix, a right-sizing
              algorithm tuned for cube utilisation rather than empty-space ratio,
              third-party void-fill suppliers across three categories, and 320,000 active
              third-party sellers — half established outside the Union, fewer than half
              with an authorised representative on file.
            </p>
            <p>
              We open with a 5-day costed roadmap on Articles 4, 6, 7, 24 and 39. Inside the
              first week we model the empty-space distribution across one full month of
              outbound parcels, identify the 38% of parcels above 50%, simulate three
              alternative carton matrices and quantify the throughput cost of each
              right-sizing rule change. The first deliverable is a 16-page article-by-article
              briefing the Director of Operations takes into the next capital allocation
              review, alongside a quantified non-compliance exposure for August 2028.
            </p>
            <p>
              From there the engagement runs in three parallel streams over fifteen months:
              a carton-matrix and right-sizing redesign closing the empty-space gap below
              50% with quantified throughput preservation; a fulfilment-side DoC programme
              covering all marketplace-branded shipping packaging, with technical files
              retained for ten years per Article 40; and a seller-onboarding overhaul that
              flags non-EU sellers without an authorised representative and pulls the
              packaging-compliance obligation into the marketplace under Article 4. Output
              at month fifteen: a defensible empty-space distribution, a forecastable rPE
              and rPP path to 2030, and a clean operator-chain map the legal team can hand
              to a market-surveillance authority on request.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        title="E-commerce PPWR — frequently asked questions"
        items={sectorFaqs}
        id="faq"
      />

      <ContactCTA
        title="Get your fulfilment chain PPWR-ready"
        description="Book a 30-minute working session. We map your e-commerce packaging portfolio against Regulation (EU) 2025/40 — empty space, recyclability, fulfilment service provider obligations and DoC — and deliver a costed roadmap within 5 working days."
        id="contact"
      />
    </>
  );
}
