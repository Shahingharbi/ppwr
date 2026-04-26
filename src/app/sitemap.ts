import type { MetadataRoute } from "next";

import { resources, sectors, services, siteConfig } from "@/lib/site-config";

const BLOG_SLUGS = [
  "ppwr-2025-survival-guide-for-european-brand-owners",
  "pfas-food-contact-packaging-ppwr-august-2026-deadline",
  "recycled-content-targets-2030-2040-plastic-packaging-roadmap",
] as const;

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const buildUrl = (path: string): string => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: Entry[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  ];

  const serviceEntries: Entry[] = services.map((service) => ({
    path: service.href,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const sectorEntries: Entry[] = sectors.map((sector) => ({
    path: sector.href,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const resourceEntries: Entry[] = resources.map((resource) => ({
    path: resource.href,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: Entry[] = BLOG_SLUGS.map((slug) => ({
    path: `/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const all = [
    ...staticEntries,
    ...serviceEntries,
    ...sectorEntries,
    ...resourceEntries,
    ...blogEntries,
  ];

  return all.map(({ path, changeFrequency, priority }) => {
    const url = buildUrl(path);
    return {
      url,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: url,
        },
      },
    };
  });
}
