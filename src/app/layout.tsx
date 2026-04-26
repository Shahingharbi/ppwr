import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBanner } from "@/components/TopBanner";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Pactum — The PPWR Advisory",
    template: "%s | Pactum",
  },
  description: siteConfig.description,
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
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_EU",
    url: siteConfig.url,
    title: "Pactum — The PPWR Advisory",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Pactum — The PPWR Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pactum — The PPWR Advisory",
    description: siteConfig.description,
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
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/seo/logo.png`,
  description: siteConfig.description,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gintoNord.variable} ${maisonNeueExtended.variable} ${maisonNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-foreground bg-background">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- JSON-LD is a static, trusted payload
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <TopBanner />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
