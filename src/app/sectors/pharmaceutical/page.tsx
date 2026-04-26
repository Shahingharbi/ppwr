import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { PharmaceuticalStats } from "@/components/pages/sectors/pharmaceutical/PharmaceuticalStats";

const PAGE_PATH = "/sectors/pharmaceutical";
const SECTOR_LABEL = "Pharma & medical devices";

export const metadata: Metadata = {
  title: "PPWR for pharma — medicinal products, medical devices, contact-sensitive plastics",
  description:
    "How Regulation (EU) 2025/40 reshapes pharmaceutical and medical-device packaging — exemptions, contact-sensitive recycled-content limits, MDR overlap, and Article 39 Declaration of Conformity for blisters, vials and outer cartons.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${siteConfig.url}${PAGE_PATH}`,
    title: "PPWR for pharma — medicinal products, medical devices, contact-sensitive plastics",
    description:
      "How Regulation (EU) 2025/40 reshapes pharmaceutical and medical-device packaging — exemptions, contact-sensitive recycled-content limits, MDR overlap, and Article 39 Declaration of Conformity for blisters, vials and outer cartons.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PPWR advisory for pharma — Pactum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPWR for pharma — Pactum",
    description:
      "Regulation (EU) 2025/40 applied to medicinal products, medical devices and contact-sensitive packaging.",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Sectors", href: "/sectors/pharmaceutical" },
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
  name: "PPWR advisory for pharmaceutical",
  serviceType: "PPWR advisory for pharmaceutical",
  provider: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  areaServed: { "@type": "Place", name: "European Union" },
  description:
    "Pure-play advisory on Regulation (EU) 2025/40 for pharmaceutical and medical-device manufacturers — exemptions and partial carve-outs under Article 25, contact-sensitive recycled content under Article 7, regulatory overlap with Regulation (EU) 2017/745 MDR and Directive 2001/83/EC, and Article 39 Declaration of Conformity for blisters, vials, ampoules, IV bags and outer cartons.",
  url: `${siteConfig.url}${PAGE_PATH}`,
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Pharmaceutical and medical-device manufacturers placing packaging on the EU market",
  },
};

const articlesThatBite = [
  {
    article: "Article 7",
    headline:
      "Contact-sensitive non-PET plastics: 10% recycled content (2030), 25% (2040)",
    deadline: "From 1 January 2030, then 1 January 2040",
    action:
      "We model the recycled-content path for blister-grade PVC/PVDC, PP IV-bag film and HDPE bottles, validate against pharmacopoeial extractables/leachables, and structure the regulatory variation pathway.",
    serviceHref: "/services/recycled-content-roadmap",
    serviceLabel: "Recycled Content Roadmap",
  },
  {
    article: "Article 5",
    headline:
      "PFAS thresholds (25 ppb / 250 ppb / 50 ppm) in food-contact packaging — interaction with pharma scope",
    deadline: "Applies from 12 August 2026",
    action:
      "We separate the SKUs in scope (e.g. medical food, OTC food-contact packaging) from the SKUs out of scope (most medicinal products) and document the rationale supplier-side.",
    serviceHref: "/services/pfas-compliance",
    serviceLabel: "PFAS Compliance",
  },
  {
    article: "Article 6",
    headline:
      "Recyclable-by-design grading (Class A/B/C) for outer cartons, leaflets and secondary packaging",
    deadline:
      "Class C minimum from 1 January 2030; Class C banned from 1 January 2038",
    action:
      "We grade folding cartons, multi-layer leaflets, foiled secondary cartons and shipper boxes against the design-for-recycling criteria and engineer Class C SKUs up to B.",
    serviceHref: "/services/recyclability-assessment",
    serviceLabel: "Recyclability Assessment",
  },
  {
    article: "Article 25",
    headline:
      "Single-use restrictions and Annex V — applicability to medicinal and medical-device packaging",
    deadline: "Applies from 12 August 2026",
    action:
      "We map every SKU against the Article 25 exemption regime, document the medicinal-product carve-out and produce supplier-ready clauses to defend the position.",
    serviceHref: "/services/ppwr-gap-analysis",
    serviceLabel: "PPWR Gap Analysis",
  },
  {
    article: "Article 39",
    headline:
      "Declaration of Conformity required before placing packaging on the market",
    deadline: "From 12 August 2026, retained for 10 years (Article 40)",
    action:
      "We assemble the technical file per packaging unit, draft the DoC and align it with the existing MDR or marketing-authorisation regulatory dossier so audits are coherent.",
    serviceHref: "/services/declaration-of-conformity",
    serviceLabel: "Declaration of Conformity",
  },
];

const sectorRisks = [
  "Regulatory overlap with Regulation (EU) 2017/745 (MDR) and Directive 2001/83/EC (medicinal products): a substrate change on a primary packaging unit can trigger a Type-II variation or an MDR technical-documentation update — the PPWR DoC, the MDR technical file and the marketing authorisation dossier must move in lockstep.",
  "Contact-sensitive recycled-content lower bound: Article 7 sets the contact-sensitive non-PET target at 10% by 2030 (rising to 25% by 2040), but the pharmacopoeial extractables/leachables qualification of recycled resin for blister film and IV-bag film is the real constraint — qualified recyclate supply is currently scarce.",
  "Compostability rules (Article 9) typically out of scope for pharma but require explicit documentation: tea/coffee bags, fruit/veg labels and very lightweight carrier bags are in scope; pharmaceutical blisters and unit-dose packs are not — the rationale must be documented to defend the position to a market-surveillance authority.",
  "Cold-chain transport packaging: insulated shippers, vacuum-insulation panels and gel packs typically grade poorly against Article 6 design-for-recycling criteria — the cost of switching to mono-material EPS-free or paper-based insulated shippers is non-trivial and trial-validated.",
  "Patient-information leaflet substrates: ultra-thin coated paper, multi-layer foldouts and laminated security features can drag a folding carton from Class B to Class C grading — a switch that is invisible to the patient but binding under Article 6 from 1 January 2030.",
  "Clinical-trial packaging is not exempt: comparator-product packaging, blinded supplies and investigational medicinal product (IMP) outer cartons placed on the EU market still need a DoC under Article 39 and an Article 6 grading, even though the underlying product moves under Regulation (EU) 536/2014.",
];

const sectorFaqs = [
  {
    question:
      "Are medicinal products exempt from the PPWR?",
    answer:
      "No. Medicinal products are not granted a blanket exemption. The packaging of medicinal products is in scope of Regulation (EU) 2025/40, with specific carve-outs under Article 25 / Annex V for some single-use restrictions and partial accommodations elsewhere. Article 6 grading, Article 7 recycled content for plastic packaging, Article 39 Declaration of Conformity and Article 45 EPR all apply to pharmaceutical packaging placed on the EU market.",
  },
  {
    question:
      "How does the PPWR interact with Regulation (EU) 2017/745 (MDR) for medical-device packaging?",
    answer:
      "The PPWR and the MDR are parallel regimes. The MDR governs the conformity of the medical device itself, including the role of packaging in maintaining sterility and preventing damage. The PPWR governs the sustainability and recyclability requirements of that packaging. A device manufacturer must satisfy both — a substrate change on a sterile barrier system requires both an MDR technical-documentation update and a PPWR Declaration of Conformity.",
  },
  {
    question:
      "What is the contact-sensitive recycled-content target for pharmaceutical plastics?",
    answer:
      "Article 7 sets a 10% minimum recycled content for contact-sensitive plastic packaging in plastics other than PET from 1 January 2030, rising to 25% from 1 January 2040. Contact-sensitive PET packaging is at 30% by 2030 (rising to 50%). Pharmaceutical blister film, IV-bag PVC, HDPE solid-oral-dose bottles and similar primary packaging fall under the 10%/25% bracket. The binding constraint in practice is pharmacopoeial qualification of recycled resin.",
  },
  {
    question:
      "Are clinical-trial and investigational medicinal product (IMP) packaging in scope?",
    answer:
      "Yes. Packaging placed on the EU market for clinical-trial or IMP supply is not granted a stand-alone exemption under the PPWR. Article 39 Declaration of Conformity, Article 6 recyclability grading and Article 7 recycled-content thresholds apply, with the practical caveat that clinical-trial packaging is typically lower volume and bespoke, so the Article 7 plant-level averaging tolerates greater variability.",
  },
  {
    question:
      "How does the PFAS Article 5 ban interact with pharmaceutical packaging?",
    answer:
      "Article 5 prohibits intentionally added PFAS in food-contact packaging from 12 August 2026 above 25 ppb (any individual PFAS, targeted analysis), 250 ppb (sum of PFAS, targeted) or 50 ppm (total fluorine indicator). Most medicinal-product packaging is not in food contact and is therefore not directly captured by Article 5, but medical food, oral nutritional supplement packaging and certain OTC products are. We document the in-scope/out-of-scope determination per SKU and run substitution where it is needed.",
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

export default function PharmaceuticalSectorPage() {
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
        title="PPWR for pharma and medical devices"
        subtitle="Regulation (EU) 2025/40 applies to pharmaceutical and medical-device packaging with partial carve-outs — not blanket exemptions. Recycled-content rules are constrained for contact-sensitive plastics, the regulation overlaps with Regulation (EU) 2017/745 MDR and Directive 2001/83/EC, and the Article 39 Declaration of Conformity sits alongside your existing regulatory dossier."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
        imageSrc="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80&auto=format&fit=crop"
      />

      {/* What PPWR means for pharmaceutical */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            What PPWR means for pharma
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Targeted carve-outs, not exemptions — and the DoC sits next to the MDR file.
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-foreground/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              Regulation (EU) 2025/40, published in OJ L on 22 January 2025 and entered into
              force on 11 February 2025, applies generally from 12 August 2026. For
              pharmaceutical and medical-device manufacturers the key starting point is
              negative: the PPWR does not grant a blanket exemption to medicinal-product or
              medical-device packaging. It grants targeted carve-outs in Article 25 and
              partial accommodations in Article 7 for contact-sensitive plastics — but
              Article 6 grading, Article 39 Declaration of Conformity, Article 40 technical
              documentation and Article 45 Extended Producer Responsibility all apply.
            </p>
            <p>
              Article 7 is where the operational tension is sharpest. Contact-sensitive
              packaging in plastics other than PET — the bucket that captures most blister
              films (PVC, PVDC, COC, COP), IV-bag PVC, HDPE solid-oral-dose bottles and
              similar primary pack — must reach 10% minimum recycled content from 1 January
              2030, rising to 25% from 1 January 2040. Contact-sensitive PET packaging
              moves to 30% by 2030 (rising to 50%). The binding constraint is not
              regulatory; it is supply-side. Pharmacopoeial qualification (Ph. Eur. 3.1.x,
              ICH Q3D, USP &lt;661&gt; and the relevant extractables/leachables programmes)
              for recycled resin is currently a multi-quarter exercise per substrate per
              supplier.
            </p>
            <p>
              Article 5 PFAS thresholds — 25 ppb for any individual PFAS by targeted
              analysis, 250 ppb for the sum of PFAS, 50 ppm of total fluorine as an
              indicator — apply to food-contact packaging from 12 August 2026. Most
              medicinal-product packaging is out of food-contact scope, but medical food,
              oral nutritional supplements and certain OTC formats fall in. The rationale
              for placing each SKU in or out of scope must be documented in the technical
              file under Article 40, defensible to a market-surveillance authority on
              request.
            </p>
            <p>
              Article 6 recyclability grading applies across the secondary and tertiary
              packaging stack — folding cartons, patient-information leaflets, multi-layer
              foldouts, security-feature laminates, shipper boxes and cold-chain insulated
              shippers. Class A (≥95%), Class B (≥80%) and Class C (≥70%) are the grading
              bands; from 1 January 2030 every unit must reach Class C, and from 1 January
              2038 Class C is banned. Cold-chain insulated shippers and vacuum-insulation
              panels are the most exposed components today, often grading C without
              substrate redesign.
            </p>
            <p>
              Article 9 compostability obligations (tea bags, fruit/veg labels, very
              lightweight carrier bags) typically do not apply to pharmaceutical packaging,
              but the in-/out-of-scope determination must be documented. Article 25 and
              Annex V single-use restrictions also need careful mapping — most
              pharmaceutical-product packaging falls outside the listed bans, but the
              documented exemption argument is what defends the SKU at audit. The PPWR
              regime sits alongside, not instead of, Regulation (EU) 2017/745 (MDR),
              Directive 2001/83/EC on medicinal products for human use, and Regulation (EU)
              536/2014 on clinical trials. Substrate or component changes can trigger
              parallel regulatory updates.
            </p>
            <p>
              Article 39 closes the loop: every packaging unit needs a Declaration of
              Conformity supported by a technical file retained for 10 years under Article
              40. We run our pharmaceutical engagements so the PPWR DoC, the MDR technical
              file and the marketing-authorisation dossier move in lockstep — see our{" "}
              <a
                href="/services/ppwr-gap-analysis"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                PPWR Gap Analysis
              </a>{" "}
              for the article-by-article scope, the{" "}
              <a
                href="/services/recycled-content-roadmap"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                Recycled Content Roadmap
              </a>{" "}
              for the pharmacopoeial-qualified recyclate sourcing path, and the{" "}
              <a
                href="/services/declaration-of-conformity"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                Declaration of Conformity
              </a>{" "}
              programme that aligns with your existing dossier.
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
              Five PPWR articles that determine your pharmaceutical readiness.
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
            Where pharma manufacturers underestimate the regulation.
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

      <PharmaceuticalStats />

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
            How we&apos;d approach a mid-cap European pharma group.
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-white/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              A mid-cap European pharma group with three EU manufacturing sites, a
              prescription portfolio of 140 medicinal products, an OTC range with 24 SKUs
              including two oral nutritional supplements in food-contact scope, and a
              parallel medical-device line under MDR comes to us twelve months before the
              12 August 2026 general application date. Their starting position: 620 active
              packaging SKUs, a regulatory affairs team focused on the EMA dossier and the
              MDR file, no consolidated PPWR DoC programme, and a procurement organisation
              already fielding eco-modulated EPR fee invoices in France and the Netherlands.
            </p>
            <p>
              We open with a 5-day costed roadmap on Articles 5, 6, 7, 25 and 39. Within the
              first week we have a documented in-scope/out-of-scope determination on the
              two food-contact OTC products under Article 5, a Class A/B/C grading on every
              folding carton and shipper, a quantified contact-sensitive recycled-content
              gap under Article 7 with pharmacopoeial qualification timelines, and an
              Article 25 / Annex V applicability map. The first deliverable is an 18-page
              article-by-article briefing the Head of Regulatory Affairs takes into the
              next quality-management-system review.
            </p>
            <p>
              From there the engagement runs in three coordinated streams over fifteen
              months: a PFAS-out programme on the two OTC food-contact products, closing
              before 12 August 2026; a contact-sensitive recycled-content qualification
              programme with two resin suppliers and the relevant Type-IB / Type-II
              variations filed in parallel; and a centralised DoC programme aligned with
              the existing MDR technical file structure, with documents retained for ten
              years per Article 40. Output at month fifteen: a defensible PPWR scope per
              SKU, a forecastable recycled-content path to 2030, and a coherent
              regulatory dossier the Head of QA can present to a market-surveillance
              authority and a notified body in the same audit cycle.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        title="Pharma PPWR — frequently asked questions"
        items={sectorFaqs}
        id="faq"
      />

      <ContactCTA
        title="Get your pharmaceutical packaging PPWR-ready"
        description="Book a 30-minute working session. We map your medicinal-product and medical-device packaging against Regulation (EU) 2025/40 — exemptions, recycled content, MDR overlap and DoC — and deliver a costed roadmap within 5 working days."
        id="contact"
      />
    </>
  );
}
