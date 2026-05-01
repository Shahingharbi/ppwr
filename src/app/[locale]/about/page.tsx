import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { WorkflowVisual } from "@/components/shared/WorkflowVisual";
import { CTAButton } from "@/components/shared/CTAButton";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { localizeHref } from "@/lib/site-config";
import {
  Scale,
  Languages,
  MapPin,
  CheckCircle2,
  Lock,
  FileBadge,
  AlertOctagon,
} from "lucide-react";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const title = isFr
    ? "À propos de Pactum — le cabinet de conseil PPWR pour les groupes intensifs en emballage"
    : "About Pactum — the EU PPWR advisory built for packaging-intensive groups";
  const description = isFr
    ? "Pactum est le cabinet de conseil dédié au Règlement (UE) 2025/40 (PPWR France). Fondé en 2025 à Bruxelles, nous traduisons la loi PPWR en feuille de route conformité audit-ready : règlement ppwr emballage, ppwr signification, ppwr texte."
    : "Pactum is the pure-play advisory for Regulation (EU) 2025/40. Founded 2025 in Brussels, we turn the PPWR into a costed, audit-ready compliance roadmap.";

  return {
    title,
    description,
    keywords: isFr
      ? [
          "règlement ppwr",
          "PPWR France",
          "ppwr emballage",
          "loi ppwr",
          "règlement 2025/40",
          "ppwr signification",
          "ppwr texte",
          "cabinet conseil PPWR",
        ]
      : undefined,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { fr: "/fr/about", en: "/en/about", "x-default": "/fr/about" },
    },
    openGraph: {
      title: isFr
        ? "À propos de Pactum — le cabinet de conseil PPWR"
        : "About Pactum — the EU PPWR advisory",
      description: isFr
        ? "Cabinet PPWR pure-play fondé en 2025 à Bruxelles. Juristes réglementaires, ingénieurs emballage et économistes supply chain, travaillant article par article."
        : "Pure-play PPWR advisory founded 2025 in Brussels. Regulatory lawyers, packaging engineers and supply-chain economists, working article by article.",
      url: `https://pactum-advisory.eu/${locale}/about`,
      type: "website",
    },
  };
}

const VALUES_EN = [
  {
    icon: Scale,
    title: "Article-precise",
    body: "Every recommendation cites the article, recital or Annex of Regulation (EU) 2025/40 it derives from. No abstract advice.",
  },
  {
    icon: Lock,
    title: "NDA-first",
    body: "Engagements open under a mutual non-disclosure agreement. Your packaging portfolio is competitive intelligence; we treat it as such.",
  },
  {
    icon: Languages,
    title: "Plain English",
    body: "We deliver to packaging directors and general counsels, not to other lawyers. The roadmap reads like an operating plan.",
  },
  {
    icon: MapPin,
    title: "EU-wide",
    body: "Brussels base, project teams across DE, FR, NL, IT and ES. We follow Member State transpositions in real time.",
  },
];

const VALUES_FR = [
  {
    icon: Scale,
    title: "Article par article",
    body: "Chaque recommandation cite l'article, le considérant ou l'Annexe du Règlement (UE) 2025/40 dont elle découle. Aucun conseil abstrait.",
  },
  {
    icon: Lock,
    title: "NDA en amont",
    body: "Les missions s'ouvrent sous accord de confidentialité mutuel. Votre portefeuille emballages est de l'intelligence concurrentielle ; nous le traitons comme telle.",
  },
  {
    icon: Languages,
    title: "Langage clair",
    body: "Nous livrons à des directeurs packaging et des directions juridiques, pas à d'autres juristes. La feuille de route se lit comme un plan opérationnel.",
  },
  {
    icon: MapPin,
    title: "Couverture UE",
    body: "Base à Bruxelles, équipes projet en DE, FR, NL, IT et ES. Nous suivons les transpositions par État membre en temps réel.",
  },
];

const STANDARDS_EN = [
  "ISO 9001 (quality management) — certification programme targeted for 2026.",
  "GDPR-compliant data handling. Client packaging data stored in EU-region encrypted environments.",
  "No client conflict policy: we decline mandates where two direct competitors are active in the same SKU category.",
  "Annual independent review of our methodology against the latest delegated and implementing acts.",
];

const STANDARDS_FR = [
  "ISO 9001 (management de la qualité) — programme de certification visé pour 2026.",
  "Traitement des données conforme au RGPD. Les données emballages clients sont stockées dans des environnements chiffrés en zone UE.",
  "Politique anti-conflits client : nous déclinons les mandats où deux concurrents directs sont actifs sur la même catégorie de SKU.",
  "Revue indépendante annuelle de notre méthodologie face aux derniers actes délégués et d'exécution.",
];

const NEGATIVES_EN = [
  "We do not do PR.",
  "We do not do greenwashing.",
  "We do not do generic ESG reporting.",
  "We do not bill for travel.",
  "We do not gate insights behind paywalls.",
];

const NEGATIVES_FR = [
  "Nous ne faisons pas de RP.",
  "Nous ne faisons pas de greenwashing.",
  "Nous ne faisons pas de reporting ESG générique.",
  "Nous ne facturons pas les déplacements.",
  "Nous ne mettons pas nos analyses derrière un paywall.",
];

export default async function AboutPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const VALUES = isFr ? VALUES_FR : VALUES_EN;
  const STANDARDS = isFr ? STANDARDS_FR : STANDARDS_EN;
  const NEGATIVES = isFr ? NEGATIVES_FR : NEGATIVES_EN;

  const t = isFr
    ? {
        crumbHome: "Accueil",
        crumbAbout: "À propos",
        eyebrow: "À propos de Pactum Advisory",
        h1: "Le cabinet de conseil PPWR que vous auriez aimé avoir.",
        intro:
          "Pactum est un cabinet de conseil pure-play travaillant exclusivement sur le Règlement (UE) 2025/40 — le Règlement Emballages et Déchets d'Emballages (PPWR). Nous traduisons le texte du Règlement en plans opérationnels chiffrés et audit-ready pour les groupes de la grande consommation, de l'automobile, de l'e-commerce, de la pharmacie et des boissons opérant dans l'Union européenne.",
        ctaPrimary: "Réserver une session de travail",
        ctaSecondary: "Diagnostic PPWR gratuit",
        foundingChip: "Notre histoire",
        foundingTitle:
          "Fondé en 2025 à Bruxelles, le jour où le Règlement est entré en vigueur.",
        founding1:
          "Pactum Advisory a été constitué début 2025, quelques semaines après la publication du Règlement (UE) 2025/40 au Journal officiel le 22 janvier 2025 et son entrée en vigueur le 11 février 2025. Le choix d'établir le cabinet à Bruxelles était délibéré : proximité de la Commission européenne, du Parlement européen et des organismes de normalisation qui rédigeront les trente et quelques actes délégués et d'exécution dont dépend le Règlement.",
        founding2:
          "L'équipe fondatrice est interdisciplinaire par construction. Des juristes réglementaires issus des pratiques droit de la concurrence et conformité produit de l'Union, des ingénieurs emballage venus de groupes FMCG, boissons et pharmaceutiques, et des économistes supply chain expérimentés en sourcing rPET, papier et aluminium. Aucun d'entre nous ne vient du circuit du conseil en développement durable ; c'est une vertu, pas un défaut. La PPWR n'est pas un cadre ESG — c'est une loi de conformité produit contraignante, assortie d'amendes, de rappels et de retraits du marché.",
        founding3a:
          "Nos premières missions sont restées confidentielles. Trois metteurs sur le marché européens, de taille intermédiaire et cotés, ont posé la même question : « Que ce Règlement nous demande-t-il réellement de faire, dans quel ordre, à quelle échéance, et combien cela coûte-t-il ? » La réponse est devenue la",
        founding3b: " feuille de route chiffrée en cinq jours ",
        founding3c:
          "qui constitue désormais notre produit d'entrée standard. Nous avons figé le prix et le périmètre car les directeurs packaging sont à court de temps et les équipes finance ont besoin de lignes budgétaires prévisibles.",
        founding4a:
          "Nous ne publions pas de mur de portraits dirigeants. Le résultat client est le plan de conformité article par article, le",
        founding4b: " dossier technique de Déclaration de conformité ",
        founding4c: "et la",
        founding4d: " note de recyclabilité ",
        founding4e:
          "— pas une personnalité. L'équipe est nommée par écrit dans chaque cahier des charges et travaille sous le même NDA que celui signé par le client.",
        retainerEyebrow: "Au-delà des cinq jours",
        retainerTitle:
          "Retainer pour la veille des actes délégués et d'exécution.",
        retainerBody:
          "La feuille de route en cinq jours est le produit d'entrée. La plupart des clients basculent ensuite sur un retainer trimestriel dans lequel nous surveillons les trente et quelques actes délégués et d'exécution en cours d'adoption par la Commission européenne — méthodologie des critères d'éco-conception pour le recyclage, calcul et vérification du contenu recyclé, spécifications du Passeport numérique de produit, mécanique de mise à jour de l'Annexe V — et traduisons chaque nouveau projet en note d'impact opérationnel d'une page pour le comité de pilotage. La transposition par État membre (sanctions au titre de l'article 68, structures d'éco-contributions REP au titre de l'article 45, systèmes DRS au titre de l'article 50) est suivie pays par pays. Lorsqu'un projet d'acte est mis en consultation publique, nous y déposons la position du metteur sur le marché. Lorsque l'acte final est publié, la feuille de route est mise à jour sous 48 heures.",
        valuesEyebrow: "Notre méthode",
        valuesTitle: "Quatre valeurs opérationnelles, appliquées à chaque mission.",
        standardsTitle: "Standards que nous nous imposons.",
        standardsBody:
          "Pactum est un prestataire de niveau cabinet réglementé. Nous documentons nos processus comme nous demandons à nos clients de documenter les leurs.",
        negativesChip: "Ce que nous ne sommes pas",
        negativesTitle:
          "Ce que vous ne verrez jamais sur une facture Pactum.",
        seeTimeline: "Voir le calendrier 2025-2040",
        faqLink: "FAQ PPWR — 40+ réponses",
        gapLink: "L'analyse des écarts en 5 jours",
      }
    : {
        crumbHome: "Home",
        crumbAbout: "About",
        eyebrow: "About Pactum Advisory",
        h1: "We are the PPWR specialists you wish your packaging vendor was.",
        intro:
          "Pactum is a pure-play advisory firm working exclusively on Regulation (EU) 2025/40 — the Packaging and Packaging Waste Regulation. We turn the text of the Regulation into costed, audit-ready operating plans for FMCG, automotive, e-commerce, pharmaceutical and beverage groups operating in the European Union.",
        ctaPrimary: "Book a working session",
        ctaSecondary: "Free PPWR readiness check",
        foundingChip: "Founding story",
        foundingTitle:
          "Founded in 2025 in Brussels, on the day the Regulation entered into force.",
        founding1:
          "Pactum Advisory was incorporated in early 2025, weeks after Regulation (EU) 2025/40 was published in the Official Journal on 22 January 2025 and entered into force on 11 February 2025. The decision to base the firm in Brussels was deliberate: proximity to the European Commission, the European Parliament and the standardisation bodies that will draft the thirty-plus delegated and implementing acts the Regulation depends on.",
        founding2:
          "The founding team is interdisciplinary by design. Regulatory lawyers from EU competition and product compliance practices, packaging engineers from FMCG, beverage and pharmaceutical groups, and supply-chain economists with rPET, paper and aluminium sourcing experience. None of us came from the sustainability-consulting circuit; that is a feature, not a flaw. The PPWR is not an ESG framework — it is binding product-compliance law with fines, recalls and market withdrawals attached.",
        founding3a:
          "Our first engagements were unannounced. Three European brand owners, mid-size and publicly listed, asked the same question: “What does this Regulation actually require us to do, in order, by when, and what does it cost?” The answer became the",
        founding3b: " five-day costed roadmap ",
        founding3c:
          "that is now our standard entry product. We held the price flat and the scope fixed because packaging directors are time-poor and finance teams need predictable line items.",
        founding4a:
          "We do not publish a leadership wall of headshots. The client outcome is the article-by-article compliance plan, the",
        founding4b: " Declaration of Conformity technical file ",
        founding4c: "and the",
        founding4d: " recyclability grading ",
        founding4e:
          "— not a personality. The team is named in writing on every Statement of Work and works under the same NDA the client signs.",
        retainerEyebrow: "Beyond the five days",
        retainerTitle: "Retainer for delegated and implementing acts watch.",
        retainerBody:
          "The five-day roadmap is the entry product. Most clients then move onto a quarterly retainer in which we monitor the European Commission's thirty-plus pending delegated and implementing acts — design-for-recycling criteria methodology, recycled content calculation and verification, Digital Product Passport specifications, Annex V update mechanics — and translate each new draft into a one-page operational impact note for the steering committee. Member State transposition (penalties under Article 68, EPR fee structures under Article 45, DRS schemes under Article 50) is tracked country by country. When a draft goes to public consultation, we file the brand owner's position. When the final act is published, the roadmap is updated within 48 hours.",
        valuesEyebrow: "How we work",
        valuesTitle: "Four operating values, applied on every engagement.",
        standardsTitle: "Standards we hold ourselves to.",
        standardsBody:
          "Pactum is a regulated-firm-grade vendor. We document our processes the way we ask our clients to document theirs.",
        negativesChip: "Who we are not",
        negativesTitle: "What you will never see on a Pactum invoice.",
        seeTimeline: "See the 2025-2040 timeline",
        faqLink: "40+ PPWR FAQs",
        gapLink: "The 5-day gap analysis",
      };

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: t.crumbHome, href: localizeHref("/", locale) },
          { label: t.crumbAbout },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.eyebrow}
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            {t.h1}
          </h1>
          <p
            className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {t.intro}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CTAButton href={localizeHref("/contact", locale)}>
              {t.ctaPrimary}
            </CTAButton>
            <CTAButton
              href={localizeHref("/resources/ppwr-readiness-assessment", locale)}
              variant="ghost"
            >
              {t.ctaSecondary}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#f5f7f4] border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.foundingChip}
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.foundingTitle}
          </h2>
          <div
            className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>{t.founding1}</p>
            <p>{t.founding2}</p>
            <p>
              {t.founding3a}
              <a
                href={localizeHref("/services/ppwr-gap-analysis", locale)}
                className="text-[#10b981] underline-offset-2 hover:underline"
              >
                {t.founding3b}
              </a>
              {t.founding3c}
            </p>
            <p>
              {t.founding4a}
              {" "}
              <a
                href={localizeHref("/services/declaration-of-conformity", locale)}
                className="text-[#10b981] underline-offset-2 hover:underline"
              >
                {t.founding4b}
              </a>
              {t.founding4c}
              {" "}
              <a
                href={localizeHref("/services/recyclability-assessment", locale)}
                className="text-[#10b981] underline-offset-2 hover:underline"
              >
                {t.founding4d}
              </a>
              {t.founding4e}
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — embed WorkflowVisual */}
      <WorkflowVisual />

      <section className="bg-[#f5f7f4] py-16 md:py-20">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.retainerEyebrow}
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.retainerTitle}
          </h2>
          <p
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {t.retainerBody}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="text-center">
            <span
              className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {t.valuesEyebrow}
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {t.valuesTitle}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-6 transition-all hover:border-[#10b981]/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                  <v.icon size={20} />
                </div>
                <h3
                  className="mt-5 text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="mt-2 text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-[#0f1a16] py-20 md:py-24 text-white">
        <div className="mx-auto max-w-[920px] px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div>
            <FileBadge size={32} className="text-[#10b981]" />
            <h2
              className="mt-5 text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {t.standardsTitle}
            </h2>
            <p
              className="mt-4 text-base text-white/70 leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {t.standardsBody}
            </p>
          </div>
          <ul className="space-y-4">
            {STANDARDS.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-[#10b981]" />
                <span
                  className="text-base text-white/85 leading-relaxed"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are not */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-semibold text-red-700"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.negativesChip}
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.negativesTitle}
          </h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {NEGATIVES.map((n) => (
              <li
                key={n}
                className="flex items-start gap-3 rounded-2xl border border-border bg-[#f5f7f4] p-4"
              >
                <AlertOctagon size={18} className="mt-0.5 flex-shrink-0 text-red-500" />
                <span
                  className="text-base font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {n}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <a
              href={localizeHref("/resources/ppwr-timeline", locale)}
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              {t.seeTimeline}
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href={localizeHref("/resources/ppwr-faq", locale)}
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              {t.faqLink}
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href={localizeHref("/services/ppwr-gap-analysis", locale)}
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              {t.gapLink}
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: isFr ? "À propos de Pactum Advisory" : "About Pactum Advisory",
          url: `https://pactum-advisory.eu/${locale}/about`,
          inLanguage: isFr ? "fr-FR" : "en-GB",
          mainEntity: {
            "@type": "Organization",
            name: "Pactum",
            legalName: "Pactum Advisory",
            url: "https://pactum-advisory.eu",
            email: "advisory@pactum-advisory.eu",
            foundingDate: "2025",
            foundingLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brussels",
                addressCountry: "BE",
              },
            },
            description: isFr
              ? "Cabinet de conseil pure-play sur le Règlement (UE) 2025/40 — Règlement Emballages et Déchets d'Emballages."
              : "Pure-play advisory on Regulation (EU) 2025/40 — Packaging and Packaging Waste Regulation.",
            knowsAbout: [
              "Regulation (EU) 2025/40",
              "Packaging recyclability",
              "Recycled content in plastic packaging",
              "PFAS in food-contact packaging",
              "Declaration of Conformity",
              "Extended Producer Responsibility",
              "Reuse and refill systems",
            ],
            sameAs: ["https://www.linkedin.com/company/pactum-advisory"],
          },
        }}
      />
    </>
  );
}
