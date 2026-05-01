import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MessageSquare, Clock, MapPin, Building2 } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FAQ } from "@/components/shared/FAQ";
import { ContactForm } from "@/components/pages/contact/ContactForm";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { localizeHref } from "@/lib/site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const title = isFr
    ? "Contact Pactum — réserver une session de travail PPWR"
    : "Contact Pactum — book a PPWR working session";
  const description = isFr
    ? "Réservez une session de travail PPWR de 30 minutes avec un consultant Pactum. Équipes UE, siège à Bruxelles, réponse sous un jour ouvré. NDA sur demande. règlement ppwr, PPWR France, ppwr emballage."
    : "Book a 30-minute PPWR working session with a Pactum advisor. EU-wide team, Brussels HQ, response within one business day. NDA on request.";

  return {
    title,
    description,
    keywords: isFr
      ? [
          "contact ppwr",
          "règlement ppwr",
          "PPWR France",
          "ppwr emballage",
          "loi ppwr",
          "cabinet conseil ppwr",
          "diagnostic ppwr gratuit",
        ]
      : undefined,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { fr: "/fr/contact", en: "/en/contact", "x-default": "/fr/contact" },
    },
    openGraph: {
      title,
      description: isFr
        ? "Réservez une session de travail de 30 minutes avec un consultant Pactum sur le Règlement (UE) 2025/40."
        : "Book a 30-minute working session with a Pactum advisor on Regulation (EU) 2025/40.",
      url: `https://pactum-advisory.eu/${locale}/contact`,
      type: "website",
    },
  };
}

const NEXT_STEPS_EN = [
  {
    n: "1",
    title: "Acknowledgement",
    body: "We reply within one business day with a mutual NDA template (or sign yours) and propose three slots.",
  },
  {
    n: "2",
    title: "30-minute working session",
    body: "We map your packaging perimeter, applicable articles and the realistic shape of a five-day gap analysis.",
  },
  {
    n: "3",
    title: "Statement of work",
    body: "Within 48 hours, a fixed-scope, fixed-price SOW lands in your inbox. No procurement theatre.",
  },
];

const NEXT_STEPS_FR = [
  {
    n: "1",
    title: "Accusé de réception",
    body: "Nous répondons sous un jour ouvré avec un modèle de NDA mutuel (ou signons le vôtre) et proposons trois créneaux.",
  },
  {
    n: "2",
    title: "Session de travail de 30 minutes",
    body: "Nous cartographions votre périmètre emballages, les articles applicables et la forme réaliste d'une analyse des écarts en cinq jours.",
  },
  {
    n: "3",
    title: "Cahier des charges",
    body: "Sous 48 heures, un SOW à périmètre fixe et prix fixe arrive dans votre boîte mail. Aucun théâtre achats.",
  },
];

const FAQS_EN = [
  {
    question: "What does an engagement cost?",
    answer:
      "The five-day PPWR gap analysis is a fixed-scope, fixed-price product. Pricing scales with portfolio size (number of SKUs, number of EU markets) and we share an indicative range during the first call. Larger transformation programmes are time-and-materials with a capped envelope.",
  },
  {
    question: "How long is a typical engagement?",
    answer:
      "The standard entry product is five business days from kick-off to roadmap handover. Article-specific deep-dives — Article 6 recyclability grading or Article 7 recycled-content sourcing — run two to four weeks. Quarterly retainers cover delegated and implementing acts watch.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. NDA-first is one of our four operating values. We work under mutual non-disclosure from the first 30-minute call. We can sign your NDA template or share ours; either is in EU jurisdiction with EU-region data hosting.",
  },
  {
    question: "Remote or onsite?",
    answer:
      "Default delivery is remote with two onsite working sessions on request — typically the kick-off and the steering committee read-out. We do not bill for travel within the EU. Onsite weeks are available for transformation programmes.",
  },
];

const FAQS_FR = [
  {
    question: "Combien coûte une mission ?",
    answer:
      "L'analyse des écarts PPWR en cinq jours est un produit à périmètre fixe et prix fixe. La tarification varie selon la taille du portefeuille (nombre de SKU, nombre de marchés UE) et nous partageons une fourchette indicative dès le premier appel. Les programmes de transformation plus larges sont en régie avec une enveloppe plafonnée.",
  },
  {
    question: "Quelle est la durée d'une mission type ?",
    answer:
      "Le produit d'entrée standard fait cinq jours ouvrés du kick-off à la remise de la feuille de route. Les approfondissements article par article — notation de recyclabilité (article 6) ou sourcing de contenu recyclé (article 7) — durent deux à quatre semaines. Les retainers trimestriels couvrent la veille des actes délégués et d'exécution.",
  },
  {
    question: "Signez-vous des NDA ?",
    answer:
      "Oui. Le NDA en amont est l'une de nos quatre valeurs opérationnelles. Nous travaillons sous accord de confidentialité mutuel dès le premier appel de 30 minutes. Nous pouvons signer votre modèle de NDA ou partager le nôtre ; l'un comme l'autre relève de la juridiction UE avec hébergement des données en zone UE.",
  },
  {
    question: "Mission à distance ou sur site ?",
    answer:
      "La livraison par défaut est à distance, avec deux sessions de travail sur site sur demande — typiquement le kick-off et la restitution au comité de pilotage. Nous ne facturons pas les déplacements au sein de l'UE. Des semaines sur site sont disponibles pour les programmes de transformation.",
  },
];

export default async function ContactPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const NEXT_STEPS = isFr ? NEXT_STEPS_FR : NEXT_STEPS_EN;
  const FAQS = isFr ? FAQS_FR : FAQS_EN;

  const t = isFr
    ? {
        crumbHome: "Accueil",
        crumbContact: "Contact",
        eyebrow: "Contact",
        h1: "Réservez une session de travail.",
        intro:
          "Trente minutes avec un consultant Pactum. Nous cartographions votre périmètre emballages face au Règlement (UE) 2025/40, identifions les échéances contraignantes qui s'appliquent à vous et cadrons une feuille de route chiffrée.",
        otherWaysTitle: "Autres moyens de nous joindre",
        emailLabel: "E-mail",
        linkedinLabel: "LinkedIn",
        linkedinValue: "Pactum Advisory · Message direct",
        responseLabel: "Délai de réponse",
        responseValue: "Sous un jour ouvré, heure de Bruxelles.",
        nextSteps: "Étapes suivantes",
        salesNote:
          "Nous n'avons pas d'équipe commerciale. La personne au téléphone est le consultant qui mènera la mission.",
        whereChip: "Où nous sommes",
        whereTitle: "Bruxelles · Équipes projet en France, Allemagne, Pays-Bas, Italie, Espagne",
        hqTitle: "Pactum Advisory · Bruxelles",
        hqBody:
          "Avenue des Arts, 1000 Bruxelles, Belgique. À deux minutes de la Commission européenne et du Parlement européen — par construction.",
        teamsTitle: "Équipes projet dans toute l'UE",
        teamsBody:
          "Allemagne, France, Pays-Bas, Italie et Espagne. Nous staffons chaque mission avec au moins un consultant travaillant dans la juridiction d'origine du client, afin que la transposition des articles 45, 50 et 68 par État membre soit couverte localement.",
        readMethodology: "Lire la méthodologie du cabinet",
        freeCheck: "Diagnostic gratuit",
        faqTitle: "Questions fréquentes sur travailler avec Pactum",
      }
    : {
        crumbHome: "Home",
        crumbContact: "Contact",
        eyebrow: "Contact",
        h1: "Book a working session.",
        intro:
          "Thirty minutes with a Pactum advisor. We map your packaging perimeter against Regulation (EU) 2025/40, identify the binding deadlines that apply to you, and scope a costed roadmap.",
        otherWaysTitle: "Other ways to reach us",
        emailLabel: "Email",
        linkedinLabel: "LinkedIn",
        linkedinValue: "Pactum Advisory · DM the firm",
        responseLabel: "Response time",
        responseValue: "Within one business day, Brussels time.",
        nextSteps: "What happens next",
        salesNote:
          "We do not have a sales team. The person on the call is the advisor who will work the engagement.",
        whereChip: "Where we are",
        whereTitle: "Brussels HQ. Project teams across the EU.",
        hqTitle: "Pactum Advisory · Brussels",
        hqBody:
          "Avenue des Arts, 1000 Brussels, Belgium. Two minutes from the European Commission and the European Parliament — by design.",
        teamsTitle: "Project teams across the EU",
        teamsBody:
          "Germany, France, Netherlands, Italy and Spain. We staff each engagement with at least one advisor working in the client's home jurisdiction so Member State transposition under Articles 45, 50 and 68 is covered locally.",
        readMethodology: "Read the firm's methodology",
        freeCheck: "Free readiness check",
        faqTitle: "Frequently asked questions about working with Pactum",
      };

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: t.crumbHome, href: localizeHref("/", locale) },
          { label: t.crumbContact },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.eyebrow}
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-3xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            {t.h1}
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {t.intro}
          </p>
        </div>
      </section>

      {/* Two-column layout: form + side info */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
          <div className="relative">
            <ContactForm locale={locale} />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-[#f5f7f4] p-6 md:p-8">
              <h2
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.otherWaysTitle}
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#10b981]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {t.emailLabel}
                    </p>
                    <a
                      href="mailto:advisory@pactum-advisory.eu"
                      className="text-sm text-[#10b981] underline-offset-2 hover:underline"
                    >
                      advisory@pactum-advisory.eu
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#10b981]">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {t.linkedinLabel}
                    </p>
                    <a
                      href="https://www.linkedin.com/company/pactum-advisory"
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-[#10b981] underline-offset-2 hover:underline"
                    >
                      {t.linkedinValue}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#10b981]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {t.responseLabel}
                    </p>
                    <p className="text-sm text-muted-foreground">{t.responseValue}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <p
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.nextSteps}
              </p>
              <ol className="mt-5 space-y-5">
                {NEXT_STEPS.map((s) => (
                  <li key={s.n} className="flex items-start gap-4">
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1a16] text-sm font-bold text-white"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <p
                        className="text-base font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                      >
                        {s.title}
                      </p>
                      <p
                        className="mt-1 text-sm text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "var(--font-maison-neue)" }}
                      >
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p
              className="rounded-2xl border border-dashed border-border bg-[#f5f7f4] p-4 text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {t.salesNote}
            </p>
          </aside>
        </div>
      </section>

      {/* Office locations */}
      <section className="bg-[#f5f7f4] py-16 md:py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.whereChip}
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.whereTitle}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6">
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                <Building2 size={20} />
              </div>
              <h3
                className="mt-5 text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.hqTitle}
              </h3>
              <p
                className="mt-2 text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.hqBody}
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                <MapPin size={20} />
              </div>
              <h3
                className="mt-5 text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.teamsTitle}
              </h3>
              <p
                className="mt-2 text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.teamsBody}
              </p>
              <p className="mt-4 text-sm">
                <a
                  href={localizeHref("/about", locale)}
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  {t.readMethodology}
                </a>{" "}
                ·{" "}
                <a
                  href={localizeHref("/resources/ppwr-readiness-assessment", locale)}
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  {t.freeCheck}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={FAQS} title={t.faqTitle} />

      <ContactCTA />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: isFr ? "Contacter Pactum" : "Contact Pactum",
          url: `https://pactum-advisory.eu/${locale}/contact`,
          inLanguage: isFr ? "fr-FR" : "en-GB",
          mainEntity: {
            "@type": "Organization",
            name: "Pactum",
            legalName: "Pactum Advisory",
            email: "advisory@pactum-advisory.eu",
            url: "https://pactum-advisory.eu",
            sameAs: ["https://www.linkedin.com/company/pactum-advisory"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Brussels",
              addressCountry: "BE",
            },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
    </>
  );
}
