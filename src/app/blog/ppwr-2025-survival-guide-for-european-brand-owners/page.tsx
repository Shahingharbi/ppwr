import type { Metadata } from "next";
import Link from "next/link";

import { BlogLayout } from "@/components/shared/BlogLayout";
import { ArticleSummary } from "@/components/shared/ArticleSummary";
import { InlineCTA } from "@/components/shared/InlineCTA";
import { TipBox } from "@/components/shared/TipBox";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

const slug = "ppwr-2025-survival-guide-for-european-brand-owners";
const post = getPostBySlug(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = {
  title: "PPWR 2025: the survival guide for brand owners",
  description:
    "Regulation (EU) 2025/40 applies from 12 August 2026. Scope, eight obligations, the timeline to 2040 and the seven mistakes most brand owners will make.",
  keywords: post.keywords,
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    type: "article",
    title: "PPWR 2025: the survival guide for European brand owners",
    description:
      "The pillar briefing on Regulation (EU) 2025/40 — identity, scope, obligations, timeline, enforcement and the 90-day action plan.",
    url,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    authors: [post.author.name],
    images: post.hero ? [{ url: post.hero.src, alt: post.hero.alt }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "PPWR 2025: the survival guide for European brand owners",
    description:
      "Regulation (EU) 2025/40 — identity, scope, obligations, timeline, enforcement and the 90-day action plan.",
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

export default function PpwrSurvivalGuide() {
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
        publishedAt="15 April 2026"
        category={post.category}
        heroImage={post.hero!.src}
        ctaTitle="Turn Regulation (EU) 2025/40 into a costed roadmap"
        ctaDescription="Book a working session with Pactum. We map every SKU against the eight obligations of the PPWR under NDA and return a recyclability grading, recycled-content gap and 24-month action plan within five business days."
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
            <li className="text-foreground">PPWR survival guide</li>
          </ol>
        </nav>

        <ArticleSummary
          items={[
            "Regulation (EU) 2025/40 — the PPWR — entered into force on 11 February 2025 and applies generally from 12 August 2026.",
            "Eight obligation themes bite: PFAS (Art. 5), recyclability (Art. 6), recycled content (Art. 7), minimisation and empty space (Art. 10 / 24), labelling and DPP (Art. 12), reuse and refill (Art. 29-33), Declaration of Conformity (Art. 39) and EPR (Art. 45).",
            "The hardest near-term deadlines: 12 August 2026 (PFAS ban, Annex V single-use bans, HORECA reuse offer) and 12 August 2028 (harmonised labels, 50% empty-space cap).",
            "The 2030 cliff is the recyclability grading, the four recycled-content targets (30% / 10% / 30% / 35%) and the 40% transport-packaging reuse rate.",
            "Enforcement runs through Member State penalties and Regulation (EU) 2019/1020 market surveillance — non-compliant packaging can be withdrawn or recalled.",
          ]}
        />

        <h2 id="tldr">TL;DR</h2>
        <p>
          <strong>Regulation (EU) 2025/40</strong> — the Packaging and Packaging Waste
          Regulation, or PPWR — is the largest single piece of packaging legislation the
          European Union has adopted. It was published in the Official Journal on
          22 January 2025, entered into force on 11 February 2025, and applies generally
          from <strong>12 August 2026</strong>, eighteen months after entry into force.
          It replaces Directive 94/62/EC, amends Regulation (EU) 2019/1020 on market
          surveillance and amends Directive (EU) 2019/904 on single-use plastics. Its
          CELEX number is <strong>32025R0040</strong>. Its full text is on{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
            target="_blank"
            rel="noreferrer noopener"
          >
            EUR-Lex
          </a>
          . If you place packaging on the EU market — directly, through an importer or
          through a fulfilment service provider — almost every line of the Regulation
          applies to you.
        </p>
        <p>
          This briefing distils the Regulation into eight obligation themes, walks the
          full compliance timeline through 2040, lists the seven operational mistakes
          we already see clients make, and proposes a 90-day action plan to take a
          packaging portfolio from worried to working. It is written for senior
          decision-makers — Director of Packaging, Head of Sustainability, General
          Counsel, Compliance Officer — who do not need another sustainability essay,
          they need the regulation, by article, with the dates that bite.
        </p>

        <h2 id="identity">What is Regulation (EU) 2025/40</h2>
        <p>
          The full title of the Regulation is{" "}
          <em>
            Regulation (EU) 2025/40 of the European Parliament and of the Council of
            19 December 2024 on packaging and packaging waste, amending Regulation
            (EU) 2019/1020 and Directive (EU) 2019/904, and repealing Directive
            94/62/EC
          </em>
          . The published text appears in OJ L of 22 January 2025. Entry into force is
          set at the twentieth day after publication, which falls on{" "}
          <strong>11 February 2025</strong>. Article 78 sets the general date of
          application at <strong>12 August 2026</strong> — eighteen months after
          entry into force — except for the provisions that the Regulation itself
          stages later (recyclability classes from 1 January 2030, recycled content
          targets from 1 January 2030, harmonised labels from 12 August 2028,
          empty-space rules from 12 August 2028, reuse targets from 1 January 2030,
          and so on).
        </p>
        <p>
          The Regulation is a <strong>regulation</strong>, not a directive. That single
          legal fact changes the playing field. A directive — like the 1994 Directive
          94/62/EC it replaces — leaves Member States to transpose the rules into
          national law, with substantial discretion, on their own timeline. A
          regulation is directly applicable in every Member State on the same day.
          That means a brand owner with operations in twenty-seven Member States no
          longer has to compile twenty-seven national requirements; it has one
          European text. The flip side is that Member States retain enforcement,
          penalties (Article 68) and a handful of derogations — particularly on reuse
          (Article 29(7)) and DRS (Article 50) — so the operational picture is still
          national in places.
        </p>
        <p>
          The Regulation is built on Article 114 TFEU (single market) rather than
          Article 192 TFEU (environmental protection). That is a deliberate choice
          and it matters: it means the Regulation harmonises packaging requirements
          to remove internal market frictions, and Member States cannot in principle
          adopt unilaterally stricter national packaging design rules than those laid
          down by the PPWR. Existing national packaging rules — France&apos;s Loi
          AGEC, Germany&apos;s VerpackG, Spain&apos;s RD 1055/2022 — must be aligned
          to the PPWR.
        </p>

        <TipBox variant="info" label="Regulatory identity">
          On first reference in any compliance memo, cite{" "}
          <strong>Regulation (EU) 2025/40</strong> in full, then refer to it as
          &ldquo;the PPWR&rdquo; or &ldquo;the Regulation&rdquo;. Track CELEX{" "}
          <strong>32025R0040</strong> in your regulatory database. Pin{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
            target="_blank"
            rel="noreferrer noopener"
          >
            the EUR-Lex ELI URL
          </a>{" "}
          in your DMS — it always points at the consolidated, authoritative version.
        </TipBox>

        <h2 id="who-is-in-scope">Who is in scope</h2>
        <p>
          Article 4 of the Regulation defines the obligated economic operators. The
          list is broader than most first-line compliance reviews assume. It captures
          every link in the chain that puts packaging onto the EU market:
        </p>
        <ul>
          <li>
            <strong>Manufacturers of packaging</strong> — converters, mould makers,
            paper-packaging printers, glass producers, can-makers — for the design and
            material composition of the empty packaging.
          </li>
          <li>
            <strong>Suppliers of packaging</strong> — the upstream chemical,
            additive and resin suppliers — for the substances of concern obligations
            (Article 5) including the PFAS restriction.
          </li>
          <li>
            <strong>Importers of packaged products</strong> — any operator that places
            packaging from a third country on the EU market is responsible for the
            same obligations as an EU manufacturer, including drawing up the
            Declaration of Conformity (Article 39).
          </li>
          <li>
            <strong>Distributors</strong> — wholesale and retail — must verify
            conformity markings, refuse non-compliant packaging and keep traceability
            records.
          </li>
          <li>
            <strong>Fulfilment service providers</strong> — Amazon FBA-style operators
            that store, pack and ship goods for third-party sellers — are explicitly
            obligated economic operators under Article 4. This was the European
            legislator&apos;s response to the e-commerce loophole.
          </li>
          <li>
            <strong>Authorised representatives</strong> — non-EU manufacturers may
            appoint an EU-established authorised representative to fulfil Articles
            39, 40 and 41 obligations on their behalf.
          </li>
          <li>
            <strong>Final distributors</strong> selling to the consumer (especially
            relevant for the reuse offer in Articles 29-30 and the refill obligations
            in Article 33).
          </li>
        </ul>
        <p>
          The shorthand most legal teams settle on is: if you{" "}
          <em>place</em> packaging on the EU market, you are in scope. &ldquo;Placing
          on the market&rdquo; is the defined term, and it captures the first making
          available — for sale, hire, or free — of a unit of packaging in the EU. It
          does not require a sale; supplying retailer house-brand stock counts. It
          does not require an EU establishment; non-EU manufacturers selling DTC into
          the EU are in scope and need an authorised representative.
        </p>

        <h2 id="timeline">The timeline at a glance</h2>
        <p>
          Below is the consolidated timeline of binding deadlines we track for our
          clients. It is not exhaustive — the Commission must adopt around{" "}
          <strong>30 delegated and implementing acts</strong> over 2025-2028 that
          will fill in design-for-recycling criteria, recycled-content calculation
          methodology, label specifications and the technical content of the
          Declaration of Conformity. The dates below are in the Regulation itself
          and are not subject to those acts.
        </p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Article</th>
              <th>Obligation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11 February 2025</td>
              <td>Art. 78</td>
              <td>Entry into force of Regulation (EU) 2025/40.</td>
            </tr>
            <tr>
              <td>12 August 2026</td>
              <td>Art. 5</td>
              <td>
                PFAS ban in food-contact packaging (25 ppb / 250 ppb / 50 ppm).
              </td>
            </tr>
            <tr>
              <td>12 August 2026</td>
              <td>Art. 25 + Annex V</td>
              <td>
                Single-use plastic bans: fresh fruit/veg &lt; 1.5 kg, HORECA on-premise,
                hotel mini-toiletries, condiment sachets, very lightweight bags.
              </td>
            </tr>
            <tr>
              <td>12 August 2026</td>
              <td>Art. 32</td>
              <td>HORECA take-away must offer a reusable container option.</td>
            </tr>
            <tr>
              <td>12 August 2026</td>
              <td>Art. 39</td>
              <td>
                Declaration of Conformity required before placing packaging on the EU
                market.
              </td>
            </tr>
            <tr>
              <td>12 August 2028</td>
              <td>Art. 12</td>
              <td>
                Harmonised material composition labelling on every packaging unit; QR
                code / DPP rollout begins.
              </td>
            </tr>
            <tr>
              <td>12 August 2028</td>
              <td>Art. 24</td>
              <td>
                Maximum 50% empty space ratio in grouped, transport and e-commerce
                packaging.
              </td>
            </tr>
            <tr>
              <td>31 December 2026</td>
              <td>Art. 50</td>
              <td>
                Member States must reach 80% separate collection of single-use plastic
                beverage bottles to retain DRS derogation; otherwise DRS becomes
                mandatory by 2029.
              </td>
            </tr>
            <tr>
              <td>31 December 2029</td>
              <td>Art. 50</td>
              <td>
                90% separate collection of single-use plastic beverage bottles up to
                3 L and metal cans.
              </td>
            </tr>
            <tr>
              <td>1 January 2030</td>
              <td>Art. 6</td>
              <td>
                All packaging recyclable by design; recyclability classes A (≥95%),
                B (≥80%), C (≥70%) become operative.
              </td>
            </tr>
            <tr>
              <td>1 January 2030</td>
              <td>Art. 7</td>
              <td>
                Recycled content in plastic packaging: 30% (contact-sensitive PET),
                10% (other contact-sensitive), 30% (single-use beverage bottles),
                35% (other plastic packaging).
              </td>
            </tr>
            <tr>
              <td>1 January 2030</td>
              <td>Art. 10 / 24</td>
              <td>
                Minimisation in weight, volume and number of layers; empty-space
                ratios consolidated.
              </td>
            </tr>
            <tr>
              <td>1 January 2030</td>
              <td>Art. 29-30</td>
              <td>
                Reuse rates: transport/grouped packaging 40%; beverages 10%; large
                household appliance transport packaging 90%; retail refill stations
                obligation.
              </td>
            </tr>
            <tr>
              <td>1 January 2038</td>
              <td>Art. 6</td>
              <td>Class C packaging banned; only Class A and B may be placed on market.</td>
            </tr>
            <tr>
              <td>1 January 2040</td>
              <td>Art. 7</td>
              <td>
                Recycled content targets escalate to 50% / 25% / 65% / 65%
                respectively.
              </td>
            </tr>
            <tr>
              <td>1 January 2040</td>
              <td>Art. 29</td>
              <td>
                Reuse rates escalate: transport/grouped 70%; beverages 40% (with
                Member State derogation possible).
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          The full timeline including Member State transposition checkpoints is
          maintained at{" "}
          <Link href="/resources/ppwr-timeline">
            /resources/ppwr-timeline
          </Link>{" "}
          and we update it within 48 hours of each new Commission act.
        </p>

        <h2 id="eight-obligations">The eight obligations that bite</h2>
        <p>
          The PPWR contains eighty articles plus thirteen annexes. For operational
          planning we group the substantive obligations into eight themes. Each is
          built around a specific article (or article cluster), a specific deadline
          and a specific output a brand owner must produce.
        </p>

        <h3 id="obligation-pfas">1. Substances of concern — Article 5 (PFAS)</h3>
        <p>
          From 12 August 2026, food-contact packaging must not contain intentionally
          added per- and polyfluoroalkyl substances (PFAS) at or above three
          thresholds operating concurrently: <strong>25 ppb</strong> for any
          individual PFAS in targeted analysis, <strong>250 ppb</strong> for the sum
          of all targeted PFAS, and <strong>50 ppm</strong> on the total fluorine
          indicator. Article 5 also restricts other substances of concern listed in
          Annex II. The deadline does not move; testing capacity is already
          constrained. We dedicate{" "}
          <Link href="/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline">
            an entire briefing
          </Link>{" "}
          to this article and operational route to compliance is on{" "}
          <Link href="/services/pfas-compliance">
            /services/pfas-compliance
          </Link>
          .
        </p>

        <h3 id="obligation-recyclability">
          2. Recyclability — Article 6 and design-for-recycling criteria
        </h3>
        <p>
          From 1 January 2030, every packaging unit placed on the EU market must be
          designed for recycling. Performance is graded into three classes —{" "}
          <strong>Class A</strong> (≥95% recyclable by weight), <strong>Class B</strong>{" "}
          (≥80%) and <strong>Class C</strong> (≥70%). From 1 January 2038, Class C
          packaging is banned; only Class A and B may remain on the market. The
          design-for-recycling criteria — the actual technical specifications that
          decide which class a packaging falls into — will be adopted by the
          Commission through delegated acts expected by end-2027. Eco-modulation of
          EPR fees is tied directly to the class (Article 47), so a Class C grade
          will translate into materially higher fees from 2030 even before the 2038
          ban. Our methodology is detailed at{" "}
          <Link href="/services/recyclability-assessment">
            /services/recyclability-assessment
          </Link>
          .
        </p>

        <h3 id="obligation-recycled-content">
          3. Recycled content in plastic packaging — Article 7
        </h3>
        <p>
          From 1 January 2030, plastic packaging must contain a minimum percentage
          of recycled content from post-consumer plastic waste, calculated per
          packaging unit per packaging-type per manufacturing plant per year. The
          four targets are <strong>30%</strong> for contact-sensitive PET packaging,{" "}
          <strong>10%</strong> for contact-sensitive plastics other than PET,{" "}
          <strong>30%</strong> for single-use plastic beverage bottles and{" "}
          <strong>35%</strong> for other plastic packaging. From 1 January 2040 these
          escalate to <strong>50% / 25% / 65% / 65%</strong>. The dedicated briefing
          on the four targets, certification, mass-balance and sourcing realities is{" "}
          <Link href="/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap">
            here
          </Link>
          ; the service is{" "}
          <Link href="/services/recycled-content-roadmap">
            /services/recycled-content-roadmap
          </Link>
          .
        </p>

        <h3 id="obligation-minimisation">
          4. Minimisation and empty space — Articles 10 and 24
        </h3>
        <p>
          Article 10 imposes a packaging minimisation duty: from 1 January 2030,
          packaging must be reduced to the minimum weight, volume and number of
          layers necessary to ensure functionality. Article 24 imposes a maximum{" "}
          <strong>50% empty-space ratio</strong> for grouped, transport and
          e-commerce packaging from 12 August 2028. E-commerce operators with
          oversized boxes for small items are squarely in scope. The empty-space
          calculation is volume-based and the methodology is set out in Annex IV.
          Article 39&apos;s Declaration of Conformity must record the minimisation
          analysis.
        </p>

        <h3 id="obligation-labelling">
          5. Labelling, sorting and the Digital Product Passport — Articles 12-13
        </h3>
        <p>
          From 12 August 2028, every packaging unit must carry a harmonised material
          composition label and a sorting label aligned across Member States. Article
          12 also introduces a digital data carrier — typically a QR code — that
          ramps into the Digital Product Passport (DPP). Recycled content claims may
          only be made if substantiated and cannot include the percentage as a
          marketing claim if the underlying calculation has not been verified. The
          implementing act on label specifications is expected mid-2027.
        </p>

        <h3 id="obligation-reuse">
          6. Reuse, refill and HORECA — Articles 29 to 33
        </h3>
        <p>
          From 1 January 2030, transport and grouped packaging used between operators
          (B2B logistics) must be reused at a <strong>40%</strong> rate, rising to{" "}
          <strong>70%</strong> by 1 January 2040. Beverage packaging — water, soft
          drinks, beer, wine and spirits — must be <strong>10%</strong> reusable
          by 2030 and <strong>40%</strong> by 2040, with Member State derogations
          possible. Large household appliances must reach <strong>90%</strong> reuse
          of transport packaging by 2030. From 12 August 2026, HORECA take-away
          operators must offer a reusable container option to consumers at no extra
          charge or with a clear deposit. Retailers above 400 m² selling food and
          detergents must offer refill from 1 January 2030. The strategy is at{" "}
          <Link href="/services/reuse-targets-strategy">
            /services/reuse-targets-strategy
          </Link>
          .
        </p>

        <h3 id="obligation-doc">
          7. Declaration of Conformity and technical documentation — Articles 39-40
        </h3>
        <p>
          Before placing packaging on the EU market, the manufacturer (or importer
          when based outside the EU) must draw up a written Declaration of Conformity
          attesting compliance with Articles 5 to 11 and Article 24. The technical
          documentation supporting the DoC must be retained for{" "}
          <strong>10 years</strong> from the last day of placing on the market and
          made available to market surveillance authorities on request. The
          Commission will adopt an implementing act setting the DoC template; until
          then the substantive content is mandatory. Treat the DoC as the
          packaging-equivalent of a CE mark dossier — it is the document an inspector
          asks for first. Our methodology is at{" "}
          <Link href="/services/declaration-of-conformity">
            /services/declaration-of-conformity
          </Link>
          .
        </p>

        <h3 id="obligation-epr-drs">
          8. Extended Producer Responsibility and DRS — Articles 45 and 50
        </h3>
        <p>
          Article 45 obliges producers — directly or through Producer Responsibility
          Organisations (PROs) — to cover the net costs of separate collection,
          sorting, recycling, treatment, awareness and littering clean-up. Fees must
          be eco-modulated based on recyclability class (A/B/C), recycled content
          and presence of substances of concern (Article 47). Article 50 requires
          Member States to achieve 90% separate collection of single-use plastic
          beverage bottles up to 3 L and metal cans by 31 December 2029. DRS becomes
          mandatory unless 80% collection has been achieved otherwise by 31 December
          2026 with a credible plan for the 90% by 2029. France, Germany and the
          Netherlands run DRS today; Italy and Spain are in scope of the obligation
          and the next 24 months will see substantial DRS rollout.
        </p>

        <TipBox variant="tip" label="The eco-modulation lever">
          Article 47 ties EPR fees to recyclability class and recycled content.
          Internal modelling we run shows that moving a portfolio from average Class
          C / 0% rPET to Class B / 30% rPET reduces fee exposure by 30 to 55% in
          large producer countries like Germany, France and Italy. The recycled
          content roadmap pays for itself before the regulation forces it.
        </TipBox>

        <h2 id="enforcement">Enforcement and penalties (Article 68)</h2>
        <p>
          Article 68 obliges Member States to lay down rules on penalties applicable
          to infringements of the Regulation. The standard EU formulation applies:
          penalties must be <strong>effective, proportionate and dissuasive</strong>.
          Each Member State sets its own penalty regime — France uses Article L541
          of the Code de l&apos;environnement, Germany operates through the
          Verpackungsgesetz amended in 2025, Italy through D.Lgs. 152/2006. The
          Commission has signalled in recital 145 that fines below the level
          producing real deterrence will be subject to peer pressure and possible
          infringement procedures.
        </p>
        <p>
          The other half of the enforcement architecture sits in Regulation (EU)
          2019/1020 on market surveillance, which the PPWR amends. National market
          surveillance authorities now have explicit powers over packaging including
          inspection, sampling, formal information requests, public warnings,
          withdrawal from the market and recall. The penalty for placing
          non-compliant packaging on the market is therefore not merely a fine; it
          is the recall cost. Recalling a season&apos;s e-commerce mailers because
          the empty-space ratio breaches Article 24, or a year&apos;s ready-meal
          trays because the PFAS threshold is breached under Article 5, is
          materially more expensive than the underlying compliance work.
        </p>
        <p>
          A Declaration of Conformity that materially overstates compliance is a
          separate exposure. In several Member States — notably Germany, France and
          the Netherlands — incorrect DoCs trigger criminal liability, not
          administrative fines. General Counsel should treat the DoC as a regulated
          attestation, not a marketing document.
        </p>

        <InlineCTA
          title="Stop translating articles. Start mapping SKUs."
          description="Pactum&apos;s 5-day PPWR Gap Analysis maps every packaging unit against the eight obligations, grades recyclability A/B/C, screens for PFAS, computes the recycled content gap and produces the article-by-article roadmap your steerco needs."
          ctaLabel="Get the article-by-article roadmap"
          ctaHref="/services/ppwr-gap-analysis"
          imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop"
          variant="dark"
        />

        <h2 id="seven-mistakes">Seven mistakes most brand owners will make</h2>
        <p>
          We have been running PPWR gap analyses since the political agreement in
          March 2024. Mistakes cluster. Here are the seven we see most often, in
          rough order of business cost.
        </p>

        <h3 id="mistake-1">
          1. Assuming the Tier-1 packaging supplier handles the Declaration of
          Conformity
        </h3>
        <p>
          The DoC obligation under Article 39 sits with the manufacturer of the
          packaging or — when the packaging is supplied to the brand owner empty for
          downstream filling — with the brand owner that places the filled packaged
          product on the EU market. Most brand owners assume their carton supplier
          or PET preform supplier writes the DoC. They will not. They write a
          conformity declaration on the empty packaging unit they manufacture; the
          brand owner is the one placing the filled, finished packaged product on
          the market and is responsible for its DoC. Insourcing a template now and
          contractualising the upstream attestations is a board-level decision.
        </p>

        <h3 id="mistake-2">
          2. Missing the 12 August 2028 empty-space deadline
        </h3>
        <p>
          The empty-space ratio under Article 24 applies from{" "}
          <strong>12 August 2028</strong>, not 2030. E-commerce and direct-to-consumer
          operations with multi-size box programmes need to redesign carton ranges,
          retool fulfilment-centre dispatch logic and verify the 50% threshold by
          batch. The work is two-year work, not six-month work.
        </p>

        <h3 id="mistake-3">
          3. Sourcing rPET without certified mass-balance documentation
        </h3>
        <p>
          The Article 7 recycled content obligation is calculated per packaging-type
          per plant per year. The Commission&apos;s pending implementing act will
          specify the calculation method but recital 70 makes clear that mass-balance
          attribution is acceptable when accompanied by certified chain-of-custody
          documentation. ISCC PLUS and RecyClass certifications under{" "}
          <strong>CEN/TS 16137</strong> are the de facto market standard. Spot-buying
          rPET on a paper certificate of recycled origin without certified
          mass-balance traceability will not pass an Article 39 audit and will not
          pass an EPR-fee verification.
        </p>

        <h3 id="mistake-4">
          4. Conflating the recyclability class with the EPR fee modulation
        </h3>
        <p>
          The recyclability classes under Article 6 and the EPR fee modulation under
          Article 47 are linked but distinct. The class is a regulatory grade (A, B
          or C, with C banned from 2038). The fee modulation is the financial
          instrument national PROs use to translate the grade into pricing. Treating
          them as one exercise mislabels the work: the grading work is technical
          (you grade and you cannot legally argue with the result); the fee work is
          national-PRO-by-national-PRO commercial work where reasonable engagement
          can change exposure by a factor of two.
        </p>

        <h3 id="mistake-5">
          5. Ignoring the fulfilment service provider obligations
        </h3>
        <p>
          Article 4 explicitly captures fulfilment service providers — the
          Amazon/Cdiscount-style operators who receive, store, pick, pack and ship
          third-party stock. If you sell into the EU through such an operator, two
          things are true at once: you remain in scope as the seller, and the
          fulfilment service provider has its own obligations on the e-commerce
          packaging it adds. The contractual allocation between you and the platform
          must be in place before 12 August 2026.
        </p>

        <h3 id="mistake-6">
          6. Treating the PFAS deadline as a 2030 problem
        </h3>
        <p>
          The PFAS restriction under Article 5 applies from{" "}
          <strong>12 August 2026</strong>, not 2030. Reformulating barrier coatings
          on paper-based food-contact packaging — pizza boxes, microwave popcorn
          bags, butter wraps, ready-meal trays — typically takes 9 to 14 months from
          decision to validated product. Brands that have not started by Q2 2026
          will not make the deadline.
        </p>

        <h3 id="mistake-7">
          7. Building reuse pilots in a vacuum, not pooled systems
        </h3>
        <p>
          The 40% transport-packaging reuse rate by 2030 is achievable only through
          shared, pooled systems. A pilot run on a single SKU in a single warehouse
          to a single retailer cannot scale to 40% in four years. The brands hitting
          the target are joining sectoral pools, harmonising container specifications
          and contracting back-haul reverse logistics with their retailers. The
          first-mover advantage is real.
        </p>

        <h2 id="action-plan">The 90-day action plan</h2>
        <p>
          The single best use of the next 90 days is to put in place the regulatory
          baseline that everything else attaches to. We run this with clients in
          twelve weeks.
        </p>
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Workstream</th>
              <th>Deliverable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Week 1</td>
              <td>Portfolio scoping under NDA</td>
              <td>SKU master list with packaging type and material composition.</td>
            </tr>
            <tr>
              <td>Week 2</td>
              <td>Article-by-article applicability map</td>
              <td>Heat map: which SKU is hit by which article, by what date.</td>
            </tr>
            <tr>
              <td>Weeks 3-4</td>
              <td>Recyclability pre-grading (Art. 6)</td>
              <td>Provisional A/B/C grade per SKU with reasoned dossier.</td>
            </tr>
            <tr>
              <td>Weeks 4-5</td>
              <td>PFAS risk screening (Art. 5)</td>
              <td>Food-contact SKUs flagged by likely PFAS use; lab tests scoped.</td>
            </tr>
            <tr>
              <td>Weeks 5-6</td>
              <td>Recycled content gap (Art. 7)</td>
              <td>Current % vs 2030 target per packaging-type / plant / year.</td>
            </tr>
            <tr>
              <td>Week 7</td>
              <td>Empty space audit (Art. 24)</td>
              <td>Volume audit of e-commerce SKUs against 50% threshold.</td>
            </tr>
            <tr>
              <td>Week 8</td>
              <td>Reuse exposure (Art. 29-33)</td>
              <td>Where reuse rates apply; preliminary economic model.</td>
            </tr>
            <tr>
              <td>Week 9</td>
              <td>EPR fee model (Art. 45-47)</td>
              <td>Country-level fee exposure with eco-modulation forecast.</td>
            </tr>
            <tr>
              <td>Week 10</td>
              <td>Declaration of Conformity template</td>
              <td>Pactum-drafted DoC template with technical documentation index.</td>
            </tr>
            <tr>
              <td>Week 11</td>
              <td>Supplier contractual clauses</td>
              <td>Standard clause library to push to converters and resin suppliers.</td>
            </tr>
            <tr>
              <td>Week 12</td>
              <td>Costed 24-month roadmap</td>
              <td>
                Steerco pack: deliverables, owners, milestones, capex / opex envelope.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          The PPWR readiness self-assessment is at{" "}
          <Link href="/resources/ppwr-readiness-assessment">
            /resources/ppwr-readiness-assessment
          </Link>
          ; the consolidated glossary of the Regulation&apos;s defined terms is at{" "}
          <Link href="/resources/ppwr-glossary">
            /resources/ppwr-glossary
          </Link>
          ; and the running FAQ — currently 40+ questions — is at{" "}
          <Link href="/resources/ppwr-faq">
            /resources/ppwr-faq
          </Link>
          .
        </p>

        <TipBox variant="warning" label="Read the recitals">
          Eighty articles plus thirteen annexes is dense. The 145 recitals at the
          front of the Regulation are not just preamble — they are how the
          Commission, the European courts and Member State enforcement bodies will
          interpret ambiguity. When in doubt about scope or methodology, read the
          recitals before guessing at the article.
        </TipBox>

        <h2 id="faq">Frequently asked questions</h2>

        <h3 id="faq-1">When does the PPWR apply?</h3>
        <p>
          Regulation (EU) 2025/40 entered into force on 11 February 2025. It applies
          generally from 12 August 2026, eighteen months later. Specific obligations
          have later trigger dates — recyclability and recycled content from
          1 January 2030, harmonised labels and the empty-space cap from 12 August
          2028, the Class C ban from 1 January 2038, the 2040 escalations from
          1 January 2040.
        </p>

        <h3 id="faq-2">Does the PPWR replace national packaging laws?</h3>
        <p>
          Yes — for the matters it harmonises (essentially packaging design,
          labelling, recycled content, recyclability, substances of concern). It
          leaves Member States competence on EPR organisation, DRS operation and
          penalties.
        </p>

        <h3 id="faq-3">Are imported packaged products in scope?</h3>
        <p>
          Yes. The importer is the obligated economic operator and is responsible
          for the Declaration of Conformity, the technical documentation and the
          conformity of the packaging with Articles 5 to 11.
        </p>

        <h3 id="faq-4">What is a fulfilment service provider under the PPWR?</h3>
        <p>
          An economic operator that, in the course of commercial activity, offers at
          least two of warehousing, packaging, addressing and dispatching of products
          on behalf of a third party. The PPWR closes the e-commerce loophole by
          making them obligated economic operators.
        </p>

        <h3 id="faq-5">Is paper packaging out of scope of the recycled content rules?</h3>
        <p>
          Article 7 applies to plastic packaging only. Paper, glass, metal and wood
          packaging are subject to recyclability (Article 6), minimisation
          (Article 10), labelling (Article 12), reuse where applicable and EPR
          (Article 45) but not the recycled content quotas of Article 7.
        </p>

        <h3 id="faq-6">What does &ldquo;contact-sensitive packaging&rdquo; mean?</h3>
        <p>
          It is defined in Article 3 as packaging intended to be used for products
          covered by Regulation (EC) 1935/2004 (food contact), Directive 2001/83/EC
          (medicinal products for human use), Regulation (EU) 2017/745 (medical
          devices), Regulation (EU) 2017/746 (in-vitro diagnostic medical devices)
          and similar contact-sensitive uses. Recycled content thresholds for
          contact-sensitive packaging are lower than for non-contact-sensitive.
        </p>

        <h3 id="faq-7">Are biodegradable plastics treated differently?</h3>
        <p>
          Biodegradable and compostable plastics are addressed in Article 9. They
          are not given a free pass on recyclability; tea/coffee bags, sticky labels
          on fruit and vegetables and very lightweight plastic carrier bags must be
          industrially compostable. Most other compostable plastic packaging is
          treated like other plastic packaging and falls under Article 6 and 7.
        </p>

        <h3 id="faq-8">How is the recycled content percentage calculated?</h3>
        <p>
          Article 7(8) states the percentage is calculated as an average per
          packaging-type per manufacturing plant per year. The Commission must adopt
          an implementing act on the calculation methodology. Mass balance attribution
          is acceptable when supported by chain-of-custody certification.
        </p>

        <h3 id="faq-9">What happens if my packaging fails the Class C threshold?</h3>
        <p>
          From 1 January 2030 it can still be placed on the market but will attract
          punitive eco-modulated EPR fees. From 1 January 2038, Class C packaging
          may no longer be placed on the EU market.
        </p>

        <h3 id="faq-10">What is the cost of non-compliance?</h3>
        <p>
          Three components. First, national administrative fines under Article 68 —
          set by Member States. Second, market-surveillance enforcement under
          Regulation (EU) 2019/1020 including withdrawal and recall. Third, the
          eco-modulation surcharge through EPR fees, which can be material year-on-year
          even without an enforcement event. We model all three for clients during
          the gap analysis.
        </p>

        <p>
          For a deeper dive on the August 2026 PFAS deadline, see{" "}
          <Link href="/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline">
            our dedicated PFAS briefing
          </Link>
          . For the four recycled content targets and the certification landscape,
          see{" "}
          <Link href="/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap">
            the recycled content roadmap
          </Link>
          . The full text of the Regulation is on{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
            target="_blank"
            rel="noreferrer noopener"
          >
            EUR-Lex
          </a>
          ; the European Commission&apos;s packaging policy page sits at{" "}
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
