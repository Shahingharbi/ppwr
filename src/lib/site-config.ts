import type { Locale } from "./i18n/types";

export const siteConfig = {
  name: "Pactum",
  legalName: "Pactum Advisory",
  tagline: {
    fr: "Le cabinet PPWR",
    en: "The PPWR Advisory",
  },
  positioning: {
    fr: "Cabinet de conseil B2B premium sur le Règlement (UE) 2025/40 — Règlement Emballages et Déchets d’Emballages (PPWR).",
    en: "Premium B2B regulatory consulting on EU Regulation (EU) 2025/40 — Packaging and Packaging Waste Regulation (PPWR).",
  },
  url: "https://pactum-advisory.eu",
  ogImage: "/seo/og-default.svg",
  contactEmail: "advisory@pactum-advisory.eu",
  defaultLanguage: "fr" as Locale,
  foundedYear: 2025,
  description: {
    fr: "Pactum traduit le Règlement (UE) 2025/40 en feuille de route conformité audit-ready : recyclabilité, contenu recyclé, réemploi, PFAS, REP et Déclaration de conformité — pour les groupes industriels intensifs en emballage en Europe.",
    en: "Pactum is the EU PPWR advisory. We turn Regulation (EU) 2025/40 into a costed, audit-ready compliance roadmap covering recyclability, recycled content, reuse, PFAS, EPR and Declaration of Conformity for packaging-intensive companies.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/pactum-advisory",
    x: "https://x.com/pactumadvisory",
  },
} as const;

export type NavItem = { href: string; label: string; description?: string };

type LocalizedNav = {
  services: NavItem[];
  sectors: NavItem[];
  resources: NavItem[];
  mainNav: NavItem[];
};

const navigation: Record<Locale, LocalizedNav> = {
  fr: {
    services: [
      {
        href: "/services/ppwr-gap-analysis",
        label: "Analyse des écarts PPWR",
        description:
          "Cartographier chaque SKU face au Règlement (UE) 2025/40 en 5 jours ouvrés. Feuille de route chiffrée, propriétaire par propriétaire.",
      },
      {
        href: "/services/recyclability-assessment",
        label: "Évaluation de recyclabilité (Art. 6)",
        description:
          "Noter vos emballages A/B/C selon les critères d’éco-conception. Identifier les SKU à risque pour 2030.",
      },
      {
        href: "/services/recycled-content-roadmap",
        label: "Feuille de route contenu recyclé (Art. 7)",
        description:
          "Objectifs de contenu recyclé pour les emballages plastiques 2030 / 2040 — sourcing, bilan massique, certification.",
      },
      {
        href: "/services/reuse-targets-strategy",
        label: "Stratégie réemploi & rechargement (Art. 29)",
        description:
          "Concevoir des systèmes de réemploi mutualisés qui tiennent les objectifs transport, boissons et CHR sans casser l’économie.",
      },
      {
        href: "/services/pfas-compliance",
        label: "Conformité PFAS (Art. 5)",
        description:
          "Sortir les PFAS intentionnels des emballages au contact alimentaire avant le 12 août 2026.",
      },
      {
        href: "/services/declaration-of-conformity",
        label: "Déclaration de conformité (Art. 39)",
        description:
          "Documentation technique audit-ready et DoC pour chaque unité d’emballage placée sur le marché européen.",
      },
    ],
    sectors: [
      { href: "/sectors/automotive", label: "Automobile & mobilité" },
      { href: "/sectors/fmcg", label: "Grande consommation & agroalimentaire" },
      { href: "/sectors/ecommerce", label: "E-commerce & marketplaces" },
      { href: "/sectors/pharmaceutical", label: "Pharma & dispositifs médicaux" },
    ],
    resources: [
      {
        href: "/resources/ppwr-timeline",
        label: "Calendrier PPWR 2025-2040",
        description:
          "Toutes les échéances, de l’entrée en vigueur aux objectifs 2040.",
      },
      {
        href: "/resources/ppwr-glossary",
        label: "Glossaire PPWR",
        description:
          "Définitions claires de chaque terme du Règlement (UE) 2025/40.",
      },
      {
        href: "/resources/ppwr-faq",
        label: "FAQ PPWR",
        description: "Les 40 questions posées en kick-off.",
      },
      {
        href: "/resources/ppwr-readiness-assessment",
        label: "Diagnostic PPWR gratuit",
        description: "Auto-évaluation 10 minutes. Rapport PDF par e-mail.",
      },
    ],
    mainNav: [
      { href: "/", label: "Accueil" },
      { href: "/services/ppwr-gap-analysis", label: "Services" },
      { href: "/sectors/fmcg", label: "Secteurs" },
      { href: "/resources/ppwr-timeline", label: "Ressources" },
      { href: "/blog", label: "Analyses" },
      { href: "/about", label: "À propos" },
      { href: "/contact", label: "Contact" },
    ],
  },
  en: {
    services: [
      {
        href: "/services/ppwr-gap-analysis",
        label: "PPWR Gap Analysis",
        description:
          "Map every SKU against Regulation (EU) 2025/40 in 5 working days. Costed roadmap, owner-by-owner.",
      },
      {
        href: "/services/recyclability-assessment",
        label: "Recyclability Assessment (Article 6)",
        description:
          "Grade your packaging A/B/C per the design-for-recycling criteria. Identify Class C SKUs at risk for 2030.",
      },
      {
        href: "/services/recycled-content-roadmap",
        label: "Recycled Content Roadmap (Article 7)",
        description:
          "Plastic packaging recycled content targets for 2030 / 2040 — sourcing, mass balance, certification.",
      },
      {
        href: "/services/reuse-targets-strategy",
        label: "Reuse & Refill Strategy (Article 29)",
        description:
          "Design pooled reuse systems that hit transport, beverage and HORECA targets without breaking unit economics.",
      },
      {
        href: "/services/pfas-compliance",
        label: "PFAS Compliance (Article 5)",
        description:
          "Phase out intentionally added PFAS in food-contact packaging before the 12 August 2026 deadline.",
      },
      {
        href: "/services/declaration-of-conformity",
        label: "Declaration of Conformity (Article 39)",
        description:
          "Audit-ready technical documentation and DoC for every packaging unit you place on the EU market.",
      },
    ],
    sectors: [
      { href: "/sectors/automotive", label: "Automotive & mobility" },
      { href: "/sectors/fmcg", label: "FMCG & food and beverage" },
      { href: "/sectors/ecommerce", label: "E-commerce & marketplaces" },
      { href: "/sectors/pharmaceutical", label: "Pharma & medical devices" },
    ],
    resources: [
      {
        href: "/resources/ppwr-timeline",
        label: "PPWR Timeline 2025-2040",
        description:
          "Every milestone from entry into force to the 2040 stretch targets.",
      },
      {
        href: "/resources/ppwr-glossary",
        label: "PPWR Glossary",
        description:
          "Plain-English definitions of every defined term in Regulation (EU) 2025/40.",
      },
      {
        href: "/resources/ppwr-faq",
        label: "PPWR FAQ",
        description: "The 40 questions our clients ask in their first kick-off call.",
      },
      {
        href: "/resources/ppwr-readiness-assessment",
        label: "Free PPWR readiness check",
        description: "10-minute self-assessment. PDF report delivered by email.",
      },
    ],
    mainNav: [
      { href: "/", label: "Home" },
      { href: "/services/ppwr-gap-analysis", label: "Services" },
      { href: "/sectors/fmcg", label: "Sectors" },
      { href: "/resources/ppwr-timeline", label: "Resources" },
      { href: "/blog", label: "Insights" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
};

export function getServicesNav(locale: Locale): NavItem[] {
  return navigation[locale].services;
}

export function getSectorsNav(locale: Locale): NavItem[] {
  return navigation[locale].sectors;
}

export function getResourcesNav(locale: Locale): NavItem[] {
  return navigation[locale].resources;
}

export function getMainNav(locale: Locale): NavItem[] {
  return navigation[locale].mainNav;
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }
  if (href === "/") return `/${locale}`;
  if (href.startsWith("/")) return `/${locale}${href}`;
  return href;
}

export const blogIndexHref = "/blog";

// Backward-compat exports (English defaults — used by pages that haven't been
// migrated to use getXxxNav(locale) yet).
export const services = navigation.en.services;
export const sectors = navigation.en.sectors;
export const resources = navigation.en.resources;
export const mainNav = navigation.en.mainNav;

export const ctaPrimary = {
  href: "/contact",
  label: "Book a working session",
};

export const ctaSecondary = {
  href: "/resources/ppwr-readiness-assessment",
  label: "Free PPWR readiness check",
};
