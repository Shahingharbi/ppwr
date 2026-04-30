import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";
import { LOCALE_OG_TAG, type Locale } from "@/lib/i18n/types";

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
 *
 * NOTE: kept for backward compatibility. Bilingual pages should prefer
 * `buildLocalizedMetadata` which adds hreflang alternates.
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

export type BuildLocalizedMetadataInput = {
  title: string;
  description: string;
  /**
   * The locale-agnostic path (e.g. "/", "/services/ppwr-gap-analysis").
   * Do NOT include the locale prefix — it is added automatically.
   */
  path: string;
  locale: Locale;
  ogImage?: string;
  type?: "website" | "article" | "profile";
};

const normalizeLocalePath = (path: string): string => {
  if (path === "/" || path === "") return "";
  return path.startsWith("/") ? path : `/${path}`;
};

const buildLocaleUrl = (locale: Locale, path: string): string =>
  `${siteConfig.url}/${locale}${normalizeLocalePath(path)}`;

/**
 * Build a Next.js Metadata object for a bilingual (FR primary / EN) page.
 *
 * - Sets canonical to the current-locale URL.
 * - Emits `alternates.languages` with `fr`, `en` and `x-default` (FR is the
 *   primary locale, so `x-default` points to the FR URL).
 * - Sets OpenGraph locale to the matching `LOCALE_OG_TAG` mapping.
 */
export function buildLocalizedMetadata({
  title,
  description,
  path,
  locale,
  ogImage = DEFAULT_OG,
  type = "website",
}: BuildLocalizedMetadataInput): Metadata {
  const canonical = buildLocaleUrl(locale, path);
  const frUrl = buildLocaleUrl("fr", path);
  const enUrl = buildLocaleUrl("en", path);
  const absoluteOg = ogImage.startsWith("http") ? ogImage : `${siteConfig.url}${ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: frUrl,
        en: enUrl,
        "x-default": frUrl,
      },
    },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      locale: LOCALE_OG_TAG[locale],
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
