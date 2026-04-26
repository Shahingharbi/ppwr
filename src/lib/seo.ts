import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const DEFAULT_OG = "/seo/og-default.svg";
export const LOCALE = "en_GB";

export type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
};

/**
 * Build a Next.js Metadata object with consistent OpenGraph, Twitter and
 * canonical configuration. The page is expected to provide its full title
 * (the root template `%s | Pactum` is bypassed when `title` is a string with
 * no template); this helper does NOT prepend the site name.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG,
  type = "website",
}: BuildMetadataInput): Metadata {
  const canonical = path.startsWith("http")
    ? path
    : `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
  const absoluteOg = ogImage.startsWith("http") ? ogImage : `${siteConfig.url}${ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      locale: LOCALE,
      images: [
        {
          url: absoluteOg,
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
      images: [absoluteOg],
    },
  };
}
