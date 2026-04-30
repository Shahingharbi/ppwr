import type { Metadata } from "next";
import Link from "next/link";

import { BlogLayout } from "@/components/shared/BlogLayout";
import { ArticleSummary } from "@/components/shared/ArticleSummary";
import { InlineCTA } from "@/components/shared/InlineCTA";
import { TipBox } from "@/components/shared/TipBox";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

const slug = "pfas-food-contact-packaging-ppwr-august-2026-deadline";
const post = getPostBySlug(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = {
  title: "PFAS in food-contact packaging: 12 August 2026 deadline",
  description:
    "Article 5 of Regulation (EU) 2025/40 bans intentionally added PFAS in food-contact packaging from 12 August 2026. Thresholds, testing and substitutes.",
  keywords: post.keywords,
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    type: "article",
    title: "PFAS in food-contact packaging: 12 August 2026 deadline",
    description:
      "The 25 ppb / 250 ppb / 50 ppm thresholds, testing, substitutes and supplier clauses for the PPWR PFAS restriction.",
    url,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    authors: [post.author.name],
    images: post.hero ? [{ url: post.hero.src, alt: post.hero.alt }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "PFAS in food-contact packaging: 12 August 2026 deadline",
    description:
      "Exact thresholds, testing methods and substitutes for the PPWR Article 5 PFAS restriction.",
    images: post.hero ? [post.hero.src] : undefined,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: post.hero ? [post.hero.src] : [],
  datePublished: post.publishedAt,
  dateModified: post.updatedAt ?? post.publishedAt,
  author: {
    "@type": "Organization",
    name: post.author.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/seo/logo.png`,
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  keywords: post.keywords.join(", "),
  articleSection: post.category,
  inLanguage: "en",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: post.title, item: url },
  ],
};

export default function PfasFoodContactBriefing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <BlogLayout
        title={post.title}
        description={post.excerpt}
        author={`${post.author.name} · ${post.author.role}`}
        readingTime={post.readTime}
        publishedAt="9 April 2026"
        category={post.category}
        heroImage={post.hero!.src}
        ctaTitle="Phase out PFAS before 12 August 2026"
        ctaDescription="Pactum&apos;s PFAS Compliance service screens every food-contact SKU, scopes accredited testing, drafts the supplier clauses and prepares the Article 39 Declaration of Conformity. Five business days, NDA upfront."
      >
        <nav
          aria-label="Breadcrumb"
          className="not-prose mb-6 text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="hover:text-foreground">
                Insights
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">PFAS in food-contact packaging</li>
          </ol>
        </nav>

        <ArticleSummary
          items={[
            "Article 5 of Regulation (EU) 2025/40 prohibits placing food-contact packaging on the EU market with intentionally added PFAS at or above 25 ppb (any individual PFAS, targeted analysis), 250 ppb (sum of PFAS, targeted) or 50 ppm (total fluorine indicator), from 12 August 2026.",
            "The three thresholds operate concurrently: a packaging unit must be below all three to be placed on the market.",
            "Targeted analysis (25 ppb / 250 ppb) and total fluorine (50 ppm) are different methods that answer different questions. A compliance file needs both.",
            "Substitution is technical: paper-PE multi-layer, plant-based barriers, mineral coatings and bio-based wax can all replace fluorinated barriers — none are drop-in across the full HORECA / ready-meal / pet-food range.",
            "Supplier contractual clauses, accredited laboratory bookings and the Article 39 Declaration of Conformity must be in place before the deadline — not after.",
          ]}
        />

        <h2 id="tldr">TL;DR</h2>
        <p>
          From <strong>12 August 2026</strong>, food-contact packaging containing
          intentionally added per- and polyfluoroalkyl substances (PFAS) at or above
          three concurrent thresholds may no longer be placed on the EU market.
          Article 5 of <strong>Regulation (EU) 2025/40</strong> — the PPWR — sets the
          regime. The thresholds are <strong>25 ppb</strong> for any individual PFAS
          measured by targeted analysis, <strong>250 ppb</strong> for the sum of all
          targeted PFAS, and <strong>50 ppm</strong> for the total fluorine indicator
          (commonly run by combustion ion chromatography). All three operate
          concurrently. The full text of the Regulation is on{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
            target="_blank"
            rel="noreferrer noopener"
          >
            EUR-Lex
          </a>
          .
        </p>
        <p>
          This briefing walks through the deadline, the exact thresholds, what counts
          as food-contact under the PPWR, the Annex V interactions, the testing
          landscape, the substitute material options actually working in production,
          the contractual clauses we are inserting in client supply agreements right
          now, and a 90-day plan for the next quarter.
        </p>

        <h2 id="deadline-surprise">The deadline that surprises everyone</h2>
        <p>
          The PFAS deadline is <strong>not</strong> 1 January 2030 and it is{" "}
          <strong>not</strong> the European Commission&apos;s separate broad PFAS
          restriction proposal under REACH (which is on a different track and is not
          yet adopted). It is <strong>12 August 2026</strong>, the general date of
          application of the PPWR. That is roughly four months from the publication
          date of this briefing for many EU brand owners. Reformulating a
          fluorinated barrier coating to a non-fluorinated alternative typically
          takes 9 to 14 months from technical decision through supplier
          requalification, line trials, shelf-life validation and stock rotation.
          Brands that started in Q4 2024 are landing on time. Brands that have not
          started yet are moving from compliance to crisis management.
        </p>
        <p>
          The PPWR PFAS restriction also runs alongside national bans that are
          already in force. France&apos;s Loi AGEC banned PFAS in food-contact
          paper-based packaging from 1 January 2025. Denmark banned PFAS in paper
          and board food-contact packaging from 1 July 2020. The PPWR consolidates
          and extends: it captures plastic, paper, board and any other food-contact
          packaging, with a single EU threshold structure.
        </p>

        <TipBox variant="warning" label="Two restrictions, not one">
          The PPWR Article 5 restriction is separate from the broader PFAS
          restriction proposal under REACH (the &ldquo;universal&rdquo; PFAS
          restriction submitted by Germany, the Netherlands, Sweden, Denmark and
          Norway in February 2023). The REACH proposal is not yet adopted, has a
          longer scope (industrial uses, textiles, firefighting foams, medical
          devices) and a different phase-in. Article 5 of the PPWR is adopted, in
          force, and bites on 12 August 2026 for food-contact packaging.
        </TipBox>

        <h2 id="exact-thresholds">The exact thresholds</h2>
        <p>
          Article 5 prohibits placing on the EU market food-contact packaging
          containing PFAS in concentrations <strong>equal to or greater than</strong>{" "}
          three values, applied concurrently. The full mechanism is set out below.
        </p>
        <table>
          <thead>
            <tr>
              <th>Threshold</th>
              <th>Value</th>
              <th>Method</th>
              <th>What it answers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Individual PFAS</td>
              <td>25 ppb (25 µg/kg)</td>
              <td>Targeted analysis (LC-MS/MS, GC-MS/MS)</td>
              <td>
                Is any single PFAS species (e.g. PFOA, PFOS, 6:2 FTS) present at or
                above 25 ppb?
              </td>
            </tr>
            <tr>
              <td>Sum of PFAS</td>
              <td>250 ppb (250 µg/kg)</td>
              <td>Targeted analysis on the agreed PFAS list</td>
              <td>Is the cumulative concentration of the targeted PFAS list at or above 250 ppb?</td>
            </tr>
            <tr>
              <td>Total fluorine</td>
              <td>50 ppm (50 mg/kg)</td>
              <td>
                Combustion ion chromatography (CIC) or organic fluorine after
                extraction (EOF)
              </td>
              <td>
                Is the total organic fluorine — including non-targeted PFAS species —
                at or above 50 ppm?
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          The three thresholds answer different questions. Targeted analysis at 25
          ppb / 250 ppb identifies <em>known</em> PFAS species against a defined
          list of analytes. Total fluorine at 50 ppm acts as an indicator: it
          captures everything fluorinated, including the long tail of non-targeted
          PFAS species that targeted analysis cannot see by definition. A compliance
          file based on targeted analysis alone is incomplete. A file based on total
          fluorine alone tells you fluorine is present but not which species.
          Article 5 expects both.
        </p>

        <h3 id="intentionally-added">&ldquo;Intentionally added&rdquo; — the key qualifier</h3>
        <p>
          Article 5 prohibits <em>intentionally added</em> PFAS. Background
          contamination from incoming recycled fibre, environmental presence in raw
          materials or trace migration from upstream auxiliaries are not the focus
          of the prohibition — but the thresholds still apply, and a brand owner
          cannot use &ldquo;unintentional&rdquo; as a defence if the unit measures
          above 50 ppm total fluorine. The defensible position is to evidence,
          through supplier declarations and testing, that no PFAS-containing
          ingredient is in the bill of materials, and that the measured fluorine is
          below the thresholds anyway.
        </p>

        <h2 id="food-contact-meaning">What &ldquo;food-contact&rdquo; means under the PPWR</h2>
        <p>
          Article 3 of the PPWR cross-references{" "}
          <strong>Regulation (EC) 1935/2004</strong> on materials and articles
          intended to come into contact with food. The scope is therefore very
          broad: anything intended to come into contact with food, in normal or
          foreseeable conditions of use, is in. That includes:
        </p>
        <ul>
          <li>
            Primary food packaging — pizza boxes, microwave popcorn bags, butter
            wraps, ready-meal trays, cup-noodle containers, takeaway clamshells,
            sandwich wedges, bakery bags.
          </li>
          <li>
            Quick-service-restaurant disposables — cups, lids, wraps, paper baskets.
          </li>
          <li>
            Pet food primary packaging — wet pet food pouches, dry pet food bags.
          </li>
          <li>
            Inner liners that touch food — cardboard tube ice-cream cartons, frozen
            food cartons.
          </li>
          <li>
            Multi-layer flexible packaging where any layer contacts food, even if
            the fluorinated layer is not the food-contact layer (functional barrier
            arguments are highly limited under Article 5).
          </li>
        </ul>
        <p>
          Outer transit packaging that does not contact food is out of scope of
          Article 5 specifically — but is in scope of Articles 6, 7, 10 and 24. See
          our{" "}
          <Link href="/blog/ppwr-2025-survival-guide-for-european-brand-owners">
            survival guide
          </Link>{" "}
          for the full obligation map.
        </p>

        <h2 id="annex-v-edges">Annex V exemptions and edge cases</h2>
        <p>
          Annex V of the PPWR concerns the format-based bans of Article 25 (single-use
          plastic packaging for fresh fruit and vegetables under 1.5 kg, HORECA
          on-premise single use, hotel mini-toiletries, condiment sachets, etc.).
          It does not exempt categories from the PFAS restriction. The few real
          edges around Article 5 are:
        </p>
        <ul>
          <li>
            <strong>Medical devices and medicinal products</strong> have separate
            packaging rules. PPWR cross-refers to Regulation (EU) 2017/745, but the
            PFAS restriction in food-contact packaging applies regardless to
            food-contact uses (e.g. enteral nutrition primary packaging is in scope).
          </li>
          <li>
            <strong>Reusable food-contact packaging</strong> is in scope. Fluorinated
            non-stick coatings on commercial reusable trays must comply.
          </li>
          <li>
            <strong>Packaging placed on the EU market before 12 August 2026</strong>{" "}
            and already at consumer-facing retail can continue to be sold through
            (transitional provision in Article 78). Stock placed on the market after
            the date must comply.
          </li>
        </ul>

        <h2 id="testing-today">How to test today</h2>
        <p>
          Three accredited methods underpin the Article 5 compliance file. The
          standards landscape was last consolidated by EFSA and the Joint Research
          Centre in 2023; the Commission&apos;s implementing act on harmonised
          methodology is expected by Q4 2026.
        </p>
        <h3 id="method-targeted">Targeted analysis (LC-MS/MS, GC-MS/MS)</h3>
        <p>
          A targeted method quantifies named PFAS species against a defined list of
          analytes — typically the 20 to 30 species most commonly reported by EFSA
          in food and food-contact materials. It is the method that answers the 25
          ppb individual threshold and the 250 ppb sum-of-PFAS threshold. Lead
          times: 5 to 10 working days at major EU accredited labs. Cost: typically
          €350 to €650 per sample.
        </p>
        <h3 id="method-total-fluorine">
          Total fluorine — combustion ion chromatography (CIC)
        </h3>
        <p>
          CIC combusts the sample at 1000 °C and measures total fluoride in the
          combustion gases. It captures all fluorinated organic species — targeted
          and non-targeted — and answers the 50 ppm threshold. Lead times: 7 to 14
          working days. Cost: typically €200 to €400 per sample. CIC does not
          identify which PFAS species is present; it only quantifies total
          fluorine.
        </p>
        <h3 id="method-eof">Extractable organic fluorine (EOF)</h3>
        <p>
          EOF is a complementary method that extracts the organic fluorine from the
          packaging sample, then measures fluoride. It is more sensitive than CIC at
          low concentrations and is used as a confirmatory method. Cost typically
          €350 to €550 per sample.
        </p>

        <TipBox variant="info" label="Lab capacity is a 2026 problem">
          Accredited lab capacity for the three methods on packaging matrices is
          already constrained across the EU. Booking 50+ SKUs into testing in Q3
          2026 — when every brand owner is doing the same thing — will not work.
          Block lab slots in Q1-Q2 2026 with at least one primary lab and one
          fallback. Contractual minimum-volume commitments lock priority.
        </TipBox>

        <h2 id="substitute-materials">Substitute materials — what works, what does not</h2>
        <p>
          The fluorinated grease- and water-resistance barrier was used in
          food-contact paper and board because it was inexpensive, performed across
          a wide temperature range, was thermoformable and had no organoleptic
          impact. Replacing it without sacrificing those properties is not a single
          decision; it is a portfolio decision per use case.
        </p>
        <h3 id="sub-paperpe">Multi-layer paper-PE</h3>
        <p>
          Paper laminated with a polyethylene film provides the grease barrier. Used
          widely for QSR cups, ice-cream cartons and butter wraps. The recyclability
          trade-off is real: paper-PE multi-layer is recyclable in many EU paper
          mills but dissolves the Article 6 Class A grade. Plan the substitution
          jointly with the recyclability strategy or it will boomerang in 2030.
        </p>
        <h3 id="sub-bio-barriers">Plant-based and bio-wax barriers</h3>
        <p>
          Plant-based wax dispersions (carnauba, beeswax derivatives) and modified
          starch coatings are now mature for ambient and chilled food applications.
          They struggle at high heat and on long shelf-life ready-meal trays.
        </p>
        <h3 id="sub-mineral">Mineral coatings</h3>
        <p>
          Calcium carbonate-based and silicate-based mineral coatings provide good
          oil and grease resistance. Compatibility with offset and digital printing
          is good. Cost is 8-15% above fluorinated coatings at parity volumes.
        </p>
        <h3 id="sub-compostable">Compostable plastics</h3>
        <p>
          PLA, PBAT and PHA can replace fluorinated paper coatings in QSR
          single-serve applications. They interact with the Article 9 compostability
          regime: tea/coffee bags and very lightweight carrier bags must be
          compostable; for other uses, compostable plastic is treated as plastic
          packaging under Articles 6, 7 and 24.
        </p>
        <h3 id="sub-uncoated">Uncoated and lightly coated paper</h3>
        <p>
          For dry foods (bakery, cereals, dry pet food kibble) the simplest answer
          is often that no barrier is needed at all. The Article 5 compliance file
          becomes a confirmation of absence rather than a substitution analysis.
        </p>
        <table>
          <thead>
            <tr>
              <th>Substitute</th>
              <th>Best fit</th>
              <th>Cost vs fluorinated</th>
              <th>Recyclability impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paper-PE</td>
              <td>QSR cups, ice cream</td>
              <td>+5-10%</td>
              <td>Class B; mill-dependent</td>
            </tr>
            <tr>
              <td>Plant-based wax</td>
              <td>Bakery, ambient</td>
              <td>+10-20%</td>
              <td>Neutral / Class A possible</td>
            </tr>
            <tr>
              <td>Mineral coating</td>
              <td>Frozen, ready meals</td>
              <td>+8-15%</td>
              <td>Class A possible</td>
            </tr>
            <tr>
              <td>Compostable PLA/PBAT</td>
              <td>QSR single-serve</td>
              <td>+25-40%</td>
              <td>Industrial composting only</td>
            </tr>
            <tr>
              <td>Uncoated paper</td>
              <td>Dry foods</td>
              <td>−3-5%</td>
              <td>Class A typical</td>
            </tr>
          </tbody>
        </table>

        <InlineCTA
          title="A PFAS substitution is also a recyclability decision."
          description="Pactum runs PFAS substitution and Article 6 recyclability grading on the same data. Avoid the boomerang of replacing a fluorinated barrier with a multi-layer that fails Class A in 2030."
          ctaLabel="Get the article-by-article roadmap"
          ctaHref="/services/ppwr-gap-analysis"
          imageSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&auto=format&fit=crop"
          variant="dark"
        />

        <h2 id="supplier-clauses">Supplier contractual clauses to insert this quarter</h2>
        <p>
          Whatever the technical outcome, the legal exposure runs through the
          supply contract. The Article 39 Declaration of Conformity that the brand
          owner draws up depends on attestations from upstream suppliers. We are
          inserting four standard clauses in food-contact packaging supply
          agreements at the moment.
        </p>

        <h3 id="clause-attestation">Clause 1 — PFAS attestation</h3>
        <blockquote>
          The Supplier warrants that the Packaging supplied under this Agreement
          does not contain any per- or polyfluoroalkyl substance (PFAS) intentionally
          added, and that on representative production samples tested in accordance
          with current accredited methodology, the Packaging meets the thresholds set
          out in Article 5 of Regulation (EU) 2025/40 (25 µg/kg per individual PFAS
          on targeted analysis, 250 µg/kg sum of PFAS on targeted analysis, 50 mg/kg
          total fluorine on combustion ion chromatography or extractable organic
          fluorine).
        </blockquote>

        <h3 id="clause-evidence">Clause 2 — Evidence on demand</h3>
        <blockquote>
          The Supplier shall provide, on the Buyer&apos;s written request and within
          ten (10) Business Days, certificates of analysis from an EU-accredited
          laboratory (ISO/IEC 17025) covering targeted PFAS analysis and total
          fluorine, for the production batch identified by the Buyer. The frequency
          of testing shall be no less than once per calendar quarter per packaging
          reference per manufacturing site.
        </blockquote>

        <h3 id="clause-changes">Clause 3 — Notification of changes</h3>
        <blockquote>
          The Supplier shall notify the Buyer in writing at least sixty (60)
          calendar days prior to any change in raw materials, additives, processing
          aids or production site that could affect the PFAS or total fluorine
          content of the Packaging.
        </blockquote>

        <h3 id="clause-indemnity">Clause 4 — Indemnity and recall</h3>
        <blockquote>
          The Supplier shall indemnify and hold harmless the Buyer from and against
          any direct loss arising from a breach of Clauses 1 to 3, including
          recall, withdrawal and replacement costs incurred under Regulation (EU)
          2019/1020 on market surveillance, up to the amount specified in Schedule
          [X].
        </blockquote>

        <p>
          Suppliers will resist Clause 4 on the indemnity cap. Hold the line: the
          recall exposure under (EU) 2019/1020 is materially larger than the
          contract value, and an uncapped clause is not unusual on regulated
          attestations. Our standard clause library is part of the deliverables on{" "}
          <Link href="/services/pfas-compliance">
            /services/pfas-compliance
          </Link>{" "}
          and the related{" "}
          <Link href="/services/declaration-of-conformity">
            Declaration of Conformity
          </Link>{" "}
          service.
        </p>

        <h2 id="enforcement-cost">Enforcement risk and cost of getting it wrong</h2>
        <p>
          Three components of cost arise on a PFAS non-compliance event.
        </p>
        <p>
          <strong>Administrative fines under Article 68.</strong> Member States
          retain discretion. Indicative current ranges in adopted national
          frameworks: Germany up to €100 000 per packaging unit type per
          infringement; France up to 4% of national turnover under the
          Code de l&apos;environnement following the 2025 amendments aligning with
          the PPWR; Italy comparable scale via D.Lgs. 152/2006.
        </p>
        <p>
          <strong>Market-surveillance enforcement under (EU) 2019/1020.</strong>{" "}
          Withdrawal and recall powers are explicit. The cost of recalling a
          national rollout of a ready-meal range typically lands between €1.5m and
          €8m for a mid-sized FMCG, before reputational damage.
        </p>
        <p>
          <strong>Criminal liability in some Member States.</strong> A materially
          incorrect Declaration of Conformity can trigger criminal liability for
          the legal representative who signed it in Germany (§267 StGB), France
          (Code pénal Art. 441-1) and the Netherlands (Art. 225 Sr).
        </p>

        <TipBox variant="warning" label="The DoC is a regulated attestation">
          Treat the Article 39 Declaration of Conformity as a regulated attestation
          — not a marketing document. Three signatures are common on client DoCs:
          Director of Packaging, General Counsel, and either Quality or Compliance.
          Joint sign-off forces evidentiary discipline.
        </TipBox>

        <h2 id="ninety-day-plan">The 90-day plan</h2>
        <p>
          A focused PFAS workstream takes about twelve weeks. Below is the plan we
          run with clients today.
        </p>
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Activity</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Food-contact SKU master list with material composition</td>
              <td>Packaging</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Supplier survey: PFAS attestation request and BoM line review</td>
              <td>Procurement</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lab capacity booking and method scope confirmation</td>
              <td>Quality / R&amp;D</td>
            </tr>
            <tr>
              <td>4-5</td>
              <td>Targeted analysis (25 / 250 ppb) on prioritised SKUs</td>
              <td>Lab</td>
            </tr>
            <tr>
              <td>5-6</td>
              <td>Total fluorine (50 ppm) by CIC on prioritised SKUs</td>
              <td>Lab</td>
            </tr>
            <tr>
              <td>6-7</td>
              <td>Substitute material shortlist per use case</td>
              <td>R&amp;D</td>
            </tr>
            <tr>
              <td>7-8</td>
              <td>Pilot line trials on top three substitutes</td>
              <td>Operations</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Supplier clause insertion (Clauses 1-4)</td>
              <td>Procurement / Legal</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Article 39 DoC drafting per packaging unit type</td>
              <td>Compliance</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Stock rotation plan: place-on-market cut-off ahead of 12 Aug 2026</td>
              <td>Supply chain</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Steerco sign-off and surveillance testing protocol</td>
              <td>Steerco</td>
            </tr>
          </tbody>
        </table>
        <p>
          The free PPWR readiness self-assessment is at{" "}
          <Link href="/resources/ppwr-readiness-assessment">
            /resources/ppwr-readiness-assessment
          </Link>
          ; the full timeline at{" "}
          <Link href="/resources/ppwr-timeline">
            /resources/ppwr-timeline
          </Link>
          ; the PPWR FAQ at{" "}
          <Link href="/resources/ppwr-faq">
            /resources/ppwr-faq
          </Link>
          .
        </p>

        <h2 id="faq">Frequently asked questions</h2>

        <h3 id="faq-1">Does Article 5 ban all PFAS or only intentionally added PFAS?</h3>
        <p>
          The Article uses the &ldquo;intentionally added&rdquo; qualifier, but the
          three numerical thresholds operate as cut-off limits regardless of intent.
          A packaging unit measuring above 50 ppm total fluorine is non-compliant
          even if no PFAS was deliberately included.
        </p>

        <h3 id="faq-2">Are paper bags from non-EU mills in scope?</h3>
        <p>
          Yes. The importer placing the packaging on the EU market is the obligated
          economic operator and must comply with Article 5 thresholds and the
          Article 39 Declaration of Conformity.
        </p>

        <h3 id="faq-3">Can I rely on a single test per SKU?</h3>
        <p>
          Once for an initial compliance file is the floor, not the ceiling. Best
          practice — and the position EU market surveillance authorities are
          signalling — is per-batch or per-quarter representative sampling, with
          retained reference samples for re-testing on enforcement event.
        </p>

        <h3 id="faq-4">What about recycled paper fibre that contains background PFAS?</h3>
        <p>
          Background PFAS from recycled fibre is the most challenging case. The
          defensible position is to test, evidence sub-threshold values and
          contractually require fibre suppliers to source PFAS-free virgin and
          recycled inputs. Some converters have moved to virgin-only fibre for
          food-contact applications as a precaution.
        </p>

        <h3 id="faq-5">Are reusable food trays in scope?</h3>
        <p>
          Yes. Reusable packaging is packaging under Article 3 and is in scope of
          the Article 5 thresholds. Fluorinated non-stick coatings on commercial
          reusable trays are restricted.
        </p>

        <h3 id="faq-6">What if my packaging is below 25 ppb but I cannot measure total fluorine?</h3>
        <p>
          You are in regulatory limbo. The three thresholds operate concurrently. A
          file that omits total fluorine cannot evidence concurrent compliance.
          Contract a CIC test as part of the standard testing scope.
        </p>

        <h3 id="faq-7">What is the relationship to EFSA&apos;s tolerable weekly intake?</h3>
        <p>
          EFSA&apos;s 2020 tolerable weekly intake of 4.4 ng/kg body weight per week
          for the sum of four PFAS in food was the toxicological basis for the
          PPWR&apos;s 25 ppb / 250 ppb thresholds. The thresholds are
          food-contact-specific and not a TWI; the underlying public health rationale
          is the same.
        </p>

        <h3 id="faq-8">Can I keep selling stock placed on the market before 12 August 2026?</h3>
        <p>
          Yes. Article 78 contains transitional provisions: packaging lawfully
          placed on the EU market before the application date can be made available
          and sold through. New stock placed on the market after the date must
          comply.
        </p>

        <h3 id="faq-9">Is the supplier&apos;s certificate of analysis enough for my DoC?</h3>
        <p>
          Not on its own. The brand owner&apos;s Article 39 DoC must include
          supplier evidence plus the brand owner&apos;s own conformity assessment
          and sufficient testing on representative samples of the placed-on-market
          unit. Outsource one, do not outsource the second.
        </p>

        <h3 id="faq-10">Will the implementing act on methodology change the thresholds?</h3>
        <p>
          The Commission&apos;s implementing act will harmonise <em>methodology</em>{" "}
          — sampling, sample preparation, lab method specifications. It cannot lower
          or raise the numerical thresholds: those are set in Article 5 of the
          basic regulation and require co-decision to amend.
        </p>

        <p>
          For the obligation map across all eight PPWR themes, see{" "}
          <Link href="/blog/ppwr-2025-survival-guide-for-european-brand-owners">
            the PPWR survival guide
          </Link>
          ; for the recycled content roadmap that interacts with PFAS substitution,
          see{" "}
          <Link href="/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap">
            the 2030 / 2040 recycled content briefing
          </Link>
          . The full text is on{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
            target="_blank"
            rel="noreferrer noopener"
          >
            EUR-Lex
          </a>{" "}
          and the European Commission&apos;s policy page is at{" "}
          <a
            href="https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en"
            target="_blank"
            rel="noreferrer noopener"
          >
            environment.ec.europa.eu
          </a>
          .
        </p>
      </BlogLayout>
    </>
  );
}
