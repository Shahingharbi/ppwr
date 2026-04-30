import type { MetadataRoute } from "next";

import { resources, sectors, services, siteConfig } from "@/lib/site-config";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n/types";

const BLOG_SLUGS = [
  "ppwr-2025-survival-guide-for-european-brand-owners",
  "pfas-food-contact-packaging-ppwr-august-2026-deadline",
  "recycled-content-targets-2030-2040-plastic-packaging-roadmap",
] as const;

type RouteEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const localizedUrl = (locale: Locale, path: string): string => {
  const normalized = path === "/" ? "" : path;
  return `${siteConfig.url}/${locale}${normalized}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: RouteEntry[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    ...services.map((service) => ({
      path: service.href,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...sectors.map((sector) => ({
      path: sector.href,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...resources.map((resource) => ({
      path: resource.href,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    ...BLOG_SLUGS.map((slug) => ({
      path: `/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of SUPPORTED_LOCALES) {
    for (const { path, changeFrequency, priority } of routes) {
      const frUrl = localizedUrl("fr", path);
      const enUrl = localizedUrl("en", path);
      entries.push({
        url: localizedUrl(locale, path),
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            fr: frUrl,
            en: enUrl,
            "x-default": frUrl,
          },
        },
      });
    }
  }

  return entries;
}
