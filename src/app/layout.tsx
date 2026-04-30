import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";

import "./globals.css";

import { LOCALE_HTML_LANG, resolveLocale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

const gintoNord = localFont({
  src: [{ path: "../../public/fonts/GintoNord-500.woff2", weight: "500", style: "normal" }],
  variable: "--font-ginto-nord",
  display: "swap",
});

const maisonNeueExtended = localFont({
  src: [
    { path: "../../public/fonts/MaisonNeueExtended-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/MaisonNeueExtended-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-maison-neue-extended",
  display: "swap",
});

const maisonNeue = localFont({
  src: [
    { path: "../../public/fonts/MaisonNeue-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/MaisonNeue-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-maison-neue",
  display: "swap",
});

const DEFAULT_TITLE = "Pactum — The PPWR Advisory";
const DEFAULT_DESCRIPTION = siteConfig.description.en;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Pactum",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  keywords: [
    "PPWR",
    "Regulation (EU) 2025/40",
    "Packaging and Packaging Waste Regulation",
    "EU packaging regulation",
    "PFAS food contact packaging",
    "recyclability assessment",
    "recycled content targets",
    "Declaration of Conformity packaging",
    "Extended Producer Responsibility",
    "reuse and refill",
  ],
  alternates: {
    canonical: "/",
    languages: {
      fr: "/fr",
      en: "/en",
      "x-default": "/fr",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Pactum",
    locale: "en_GB",
    alternateLocale: ["fr_FR"],
    url: siteConfig.url,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [siteConfig.ogImage],
    creator: "@pactumadvisory",
    site: "@pactumadvisory",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/seo/logo.png`,
  description: DEFAULT_DESCRIPTION,
  email: siteConfig.contactEmail,
  foundingDate: String(siteConfig.foundedYear),
  areaServed: {
    "@type": "Place",
    name: "European Union",
  },
  knowsAbout: [
    "Regulation (EU) 2025/40",
    "Packaging and Packaging Waste Regulation",
    "PFAS in food-contact packaging",
    "Recyclability of packaging",
    "Recycled content in plastic packaging",
    "Extended Producer Responsibility",
    "Reuse and refill systems",
    "Declaration of Conformity",
  ],
  sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
} as const;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const locale = resolveLocale(headerList.get("x-locale"));

  return (
    <html
      lang={LOCALE_HTML_LANG[locale]}
      className={`${gintoNord.variable} ${maisonNeueExtended.variable} ${maisonNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-foreground bg-background">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- JSON-LD is a static, trusted payload
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
