import type { Metadata } from "next";
import { LogosStrip } from "@/components/shared/LogosStrip";
import { Testimonials } from "@/components/shared/Testimonials";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Hero } from "@/components/pages/home/Hero";
import { CountdownStrip } from "@/components/pages/home/CountdownStrip";
import { RegulationAtAGlance } from "@/components/pages/home/RegulationAtAGlance";
import { ServicesGrid } from "@/components/pages/home/ServicesGrid";
import { Methodology } from "@/components/pages/home/Methodology";
import { WhyPactum } from "@/components/pages/home/WhyPactum";
import { SectorsGrid } from "@/components/pages/home/SectorsGrid";
import { InsightsTeaser } from "@/components/pages/home/InsightsTeaser";
import { getDict } from "@/lib/i18n/dict";
import { isLocale, LOCALE_OG_TAG, resolveLocale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    return {};
  }
  const locale = rawLocale;
  const isFr = locale === "fr";

  const title = isFr
    ? "Pactum | Le cabinet PPWR — Règlement (UE) 2025/40"
    : "Pactum | The PPWR Advisory — Regulation (EU) 2025/40";

  const description = isFr
    ? "Pactum traduit le Règlement (UE) 2025/40 en feuille de route audit-ready. Conseil article par article sur les PFAS, la recyclabilité, le contenu recyclé, le réemploi et la Déclaration de conformité."
    : "Pactum turns Regulation (EU) 2025/40 into an audit-ready compliance roadmap. Article-precise advisory on PFAS, recyclability, recycled content, reuse and Declaration of Conformity.";

  const ogDescription = isFr
    ? "Conseil PPWR article par article pour les groupes industriels intensifs en emballage. Feuille de route chiffrée en 5 jours, NDA en amont."
    : "Article-precise PPWR advisory for FMCG, automotive, e-commerce and pharma groups. 5-day costed roadmap, NDA-first.";

  const twitterDescription = isFr
    ? "Feuilles de route PPWR audit-ready. Cabinet pure-player du Règlement (UE) 2025/40."
    : "Audit-ready PPWR roadmaps. Pure-play Regulation (EU) 2025/40 advisory.";

  const twitterTitle = isFr ? "Pactum | Le cabinet PPWR" : "Pactum | The PPWR Advisory";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": "/fr",
      },
    },
    openGraph: {
      title,
      description: ogDescription,
      url: `${siteConfig.url}/${locale}`,
      siteName: "Pactum",
      locale: LOCALE_OG_TAG[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = getDict(locale);

  return (
    <>
      <Hero locale={locale} />
      <LogosStrip caption={dict.logos.caption} />
      <CountdownStrip locale={locale} />
      <RegulationAtAGlance locale={locale} />
      <ServicesGrid locale={locale} />
      <Methodology locale={locale} />
      <WhyPactum locale={locale} />
      <SectorsGrid locale={locale} />
      <Testimonials />
      <InsightsTeaser locale={locale} />
      <ContactCTA
        title={dict.contactCta.title}
        description={dict.contactCta.description}
      />
    </>
  );
}
