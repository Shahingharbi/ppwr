import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBanner } from "@/components/TopBanner";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { LOCALE_OG_TAG, isLocale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale = rawLocale;
  const isFr = locale === "fr";
  const title = isFr ? "Pactum — Le cabinet PPWR" : "Pactum — The PPWR Advisory";
  const description = siteConfig.description[locale];

  return {
    title: {
      default: title,
      template: "%s | Pactum",
    },
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
      type: "website",
      siteName: "Pactum",
      locale: LOCALE_OG_TAG[locale],
      alternateLocale: locale === "fr" ? ["en_GB"] : ["fr_FR"],
      url: `${siteConfig.url}/${locale}`,
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@pactumadvisory",
      site: "@pactumadvisory",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;


  return (
    <>
      <TopBanner locale={locale} />
      <Navbar locale={locale} />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer locale={locale} />
      <StickyMobileCTA locale={locale} />
    </>
  );
}
