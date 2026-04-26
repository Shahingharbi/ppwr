import { services, siteConfig } from "@/lib/site-config";

type JsonLd = Record<string, unknown>;

const absoluteUrl = (path: string): string => {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
};

const PPWR_KNOWS_ABOUT = [
  "EU Regulation 2025/40",
  "Packaging and Packaging Waste Regulation",
  "PFAS in food-contact packaging",
  "Recycled content in plastic packaging",
  "Recyclability assessment",
  "Reuse and refill systems",
  "Declaration of Conformity",
] as const;

/**
 * Organization schema — site-wide.
 * https://schema.org/Organization
 */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/seo/logo.png"),
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    foundingDate: String(siteConfig.foundedYear),
    areaServed: {
      "@type": "Place",
      name: "European Union",
    },
    knowsAbout: [...PPWR_KNOWS_ABOUT],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
  };
}

/**
 * ProfessionalService schema for the home page.
 * https://schema.org/ProfessionalService
 */
export function professionalServiceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}#professional-service`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    image: absoluteUrl("/seo/og-default.svg"),
    logo: absoluteUrl("/images/seo/logo.png"),
    sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
    serviceArea: {
      "@type": "Place",
      name: "European Union",
    },
    areaServed: {
      "@type": "Place",
      name: "European Union",
    },
    knowsAbout: [...PPWR_KNOWS_ABOUT],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PPWR Advisory Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        url: absoluteUrl(service.href),
        itemOffered: {
          "@type": "Service",
          name: service.label,
          description: service.description,
          url: absoluteUrl(service.href),
        },
      })),
    },
  };
}

/**
 * BreadcrumbList schema.
 * https://schema.org/BreadcrumbList
 */
export function breadcrumbSchema(items: { name: string; href: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export type ServiceSchemaInput = {
  name: string;
  slug: string;
  description: string;
  providerUrl?: string;
};

/**
 * Service schema for individual service pages.
 * https://schema.org/Service
 */
export function serviceSchema({
  name,
  slug,
  description,
  providerUrl,
}: ServiceSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(slug),
    serviceType: name,
    areaServed: {
      "@type": "Place",
      name: "European Union",
    },
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.legalName,
      url: providerUrl ?? siteConfig.url,
    },
  };
}

export type ArticleSchemaInput = {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
};

/**
 * Article schema for blog posts.
 * https://schema.org/Article
 */
export function articleSchema({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  authorName,
  image,
}: ArticleSchemaInput): JsonLd {
  const url = absoluteUrl(slug);
  const img = image ? absoluteUrl(image) : absoluteUrl("/seo/og-default.svg");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/seo/logo.png"),
      },
    },
    image: [img],
  };
}

/**
 * FAQPage schema.
 * https://schema.org/FAQPage
 */
export function faqSchema(items: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/**
 * DefinedTermSet schema for the glossary.
 * https://schema.org/DefinedTermSet
 */
export function definedTermSetSchema(
  items: { name: string; description: string; href?: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "PPWR Glossary",
    description:
      "Plain-English definitions of every defined term in Regulation (EU) 2025/40.",
    inDefinedTermSet: absoluteUrl("/resources/ppwr-glossary"),
    hasDefinedTerm: items.map((item) => ({
      "@type": "DefinedTerm",
      name: item.name,
      description: item.description,
      ...(item.href ? { url: absoluteUrl(item.href) } : {}),
    })),
  };
}
