import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClipboardList, Send, FileText, Mail, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { ReadinessQuiz } from "@/components/pages/resources/ReadinessQuiz";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { localizeHref } from "@/lib/site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const title = isFr
    ? "Diagnostic PPWR gratuit — auto-évaluation 10 minutes avec rapport PDF"
    : "Free PPWR readiness check — 10-minute self-assessment with PDF report";
  const description = isFr
    ? "Évaluez votre maturité face au Règlement (UE) 2025/40 en 10 minutes. 12 questions article par article, score indicatif, rapport PDF par e-mail. Indicatif uniquement. Ne constitue pas un avis juridique. diagnostic ppwr gratuit."
    : "Score your readiness against Regulation (EU) 2025/40 in 10 minutes. 12 article-by-article questions, indicative score, PDF report delivered by email.";

  return {
    title,
    description,
    keywords: isFr
      ? [
          "diagnostic ppwr gratuit",
          "règlement ppwr",
          "PPWR France",
          "ppwr emballage",
          "loi ppwr",
          "ppwr signification",
          "auto-évaluation ppwr",
          "calendrier ppwr 2026",
        ]
      : undefined,
    alternates: {
      canonical: `/${locale}/resources/ppwr-readiness-assessment`,
      languages: {
        fr: "/fr/resources/ppwr-readiness-assessment",
        en: "/en/resources/ppwr-readiness-assessment",
        "x-default": "/fr/resources/ppwr-readiness-assessment",
      },
    },
    openGraph: {
      title: isFr ? "Diagnostic PPWR gratuit" : "Free PPWR readiness check",
      description: isFr
        ? "Douze questions article par article, score indicatif, rapport PDF par e-mail. Indicatif uniquement — ne constitue pas un avis juridique."
        : "Twelve article-by-article questions, indicative score, PDF report by email. Indicative only — not legal advice.",
      url: `https://pactum-advisory.eu/${locale}/resources/ppwr-readiness-assessment`,
      type: "website",
    },
  };
}

const STEPS_EN = [
  {
    icon: ClipboardList,
    title: "Self-assess",
    body: "12 yes / no / I do not know questions covering Articles 5, 6, 7, 12, 18, 24, 25, 29, 30, 39 and 50.",
  },
  {
    icon: Send,
    title: "Submit",
    body: "Enter your work email. We compute an indicative readiness score and queue the PDF report.",
  },
  {
    icon: FileText,
    title: "Get the PDF",
    body: "A 12-page article-by-article report lands in your inbox within minutes — Track A, B or C with priority articles.",
  },
];

const STEPS_FR = [
  {
    icon: ClipboardList,
    title: "Auto-évaluation",
    body: "12 questions Oui / Non / Je ne sais pas couvrant les articles 5, 6, 7, 12, 18, 24, 25, 29, 30, 39 et 50.",
  },
  {
    icon: Send,
    title: "Envoyer",
    body: "Saisissez votre e-mail professionnel. Nous calculons un score de maturité indicatif et déclenchons le rapport PDF.",
  },
  {
    icon: FileText,
    title: "Recevoir le PDF",
    body: "Un rapport article par article de 12 pages arrive dans votre boîte mail en quelques minutes — Voie A, B ou C avec articles prioritaires.",
  },
];

export default async function ReadinessPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const STEPS = isFr ? STEPS_FR : STEPS_EN;

  const t = isFr
    ? {
        crumbHome: "Accueil",
        crumbResources: "Ressources",
        crumbCurrent: "Diagnostic PPWR gratuit",
        eyebrow: "Lead magnet · Gratuit",
        h1: "Diagnostic PPWR — 10 minutes. Rapport PDF par e-mail.",
        intro:
          "Douze questions article par article couvrant les articles 5, 6, 7, 12, 18, 24, 25, 29, 30, 39 et 50 du Règlement (UE) 2025/40. Conçu pour les directeurs packaging, responsables développement durable, directions juridiques et responsables conformité des groupes européens.",
        pdfTitle: "Que contient le rapport PDF ?",
        pdfList: [
          "· Verdict de maturité Voie A / B / C pour votre portefeuille.",
          "· Interprétation article par article des écarts pour vos 12 réponses.",
          "· Articles prioritaires par échéance (12 août 2026 vs 1er janvier 2030).",
          "· Une feuille de route exemple à 24 mois utilisable comme base de planification.",
          "· Liens vers les services Pactum pertinents pour chaque écart.",
        ],
        notTitle: "Ce que nous ne faisons pas",
        notBody:
          "Nous ne vous abonnons pas à une newsletter. Nous ne vous relançons pas par e-mails commerciaux. Le PDF arrive une fois. Si vous voulez un échange approfondi, vous réservez vous-même une session de travail.",
        link1: "Calendrier 2025-2040",
        link2: "FAQ PPWR",
        link3: "Service d'analyse des écarts",
        ctaTitle: "Vous voulez une lecture spécifique à votre portefeuille ?",
        ctaDesc:
          "Le diagnostic de 10 minutes est indicatif. L'analyse des écarts Pactum en cinq jours applique le même diagnostic à chaque SKU de votre portefeuille avec une feuille de route chiffrée.",
        disclaimer:
          "Indicatif uniquement. Ne constitue pas un avis juridique.",
      }
    : {
        crumbHome: "Home",
        crumbResources: "Resources",
        crumbCurrent: "Free PPWR readiness check",
        eyebrow: "Lead magnet · Free",
        h1: "10-minute PPWR readiness check. PDF report by email.",
        intro:
          "Twelve article-by-article questions covering Articles 5, 6, 7, 12, 18, 24, 25, 29, 30, 39 and 50 of Regulation (EU) 2025/40. Designed for packaging directors, heads of sustainability, general counsels and compliance officers at European groups.",
        pdfTitle: "What is in the PDF report?",
        pdfList: [
          "· Track A / B / C readiness verdict for your portfolio.",
          "· Article-by-article gap interpretation for your 12 answers.",
          "· Priority articles by deadline (12 August 2026 vs 1 January 2030).",
          "· A sample 24-month roadmap to use as a planning baseline.",
          "· Links to the relevant Pactum services for each gap.",
        ],
        notTitle: "What we do not do",
        notBody:
          "We do not subscribe you to a newsletter. We do not chase you with sales emails. The PDF lands once. If you want a deeper read, you book a working session yourself.",
        link1: "Timeline 2025–2040",
        link2: "PPWR FAQ",
        link3: "Gap analysis service",
        ctaTitle: "Want a portfolio-specific read?",
        ctaDesc:
          "The 10-minute check is indicative. The five-day Pactum gap analysis runs the same diagnostic against every SKU in your portfolio with a costed roadmap.",
        disclaimer: "Indicative only. Not legal advice.",
      };

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: t.crumbHome, href: localizeHref("/", locale) },
          { label: t.crumbResources, href: localizeHref("/resources/ppwr-timeline", locale) },
          { label: t.crumbCurrent },
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
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            {t.h1}
          </h1>
          <p
            className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {t.intro}
          </p>
          <p
            className="mt-3 text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {t.disclaimer}
          </p>
        </div>
      </section>

      {/* 3-step explainer */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f1a16] text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                    <s.icon size={18} />
                  </div>
                </div>
                <h3
                  className="mt-4 text-lg font-bold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz + side info */}
      <section className="bg-[#f5f7f4] py-12 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
          <ReadinessQuiz locale={locale} />

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                <Mail size={20} />
              </div>
              <h2
                className="mt-5 text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.pdfTitle}
              </h2>
              <ul
                className="mt-4 space-y-2.5 text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.pdfList.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                <ShieldCheck size={20} />
              </div>
              <h2
                className="mt-5 text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.notTitle}
              </h2>
              <p
                className="mt-3 text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.notBody}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a
                  href={localizeHref("/resources/ppwr-timeline", locale)}
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  {t.link1}
                </a>
                <a
                  href={localizeHref("/resources/ppwr-faq", locale)}
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  {t.link2}
                </a>
                <a
                  href={localizeHref("/services/ppwr-gap-analysis", locale)}
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  {t.link3}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ContactCTA title={t.ctaTitle} description={t.ctaDesc} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          inLanguage: isFr ? "fr-FR" : "en-GB",
          name: isFr ? "Diagnostic PPWR" : "PPWR readiness assessment",
          url: `https://pactum-advisory.eu/${locale}/resources/ppwr-readiness-assessment`,
          description: isFr
            ? "Diagnostic PPWR gratuit en 10 minutes. Douze questions article par article sur le Règlement (UE) 2025/40, score indicatif, rapport PDF par e-mail."
            : "Free 10-minute PPWR readiness check. Twelve article-by-article questions on Regulation (EU) 2025/40, indicative score, PDF report by email.",
          isPartOf: {
            "@type": "WebSite",
            name: "Pactum Advisory",
            url: "https://pactum-advisory.eu",
          },
        }}
      />
    </>
  );
}
