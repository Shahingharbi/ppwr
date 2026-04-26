export const siteConfig = {
  name: "Pactum",
  legalName: "Pactum Advisory",
  tagline: "The PPWR Advisory",
  positioning:
    "Premium B2B regulatory consulting on EU Regulation (EU) 2025/40 — Packaging and Packaging Waste Regulation (PPWR).",
  url: "https://pactum-advisory.eu",
  ogImage: "/images/seo/og-default.png",
  contactEmail: "advisory@pactum-advisory.eu",
  locale: "en",
  defaultLanguage: "en",
  foundedYear: 2025,
  description:
    "Pactum is the EU PPWR advisory. We turn Regulation (EU) 2025/40 into a costed, audit-ready compliance roadmap covering recyclability, recycled content, reuse, PFAS, EPR and Declaration of Conformity for packaging-intensive companies.",
  social: {
    linkedin: "https://www.linkedin.com/company/pactum-advisory",
    x: "https://x.com/pactumadvisory",
  },
} as const;

export type NavItem = { href: string; label: string; description?: string };

export const services: NavItem[] = [
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
];

export const sectors: NavItem[] = [
  { href: "/sectors/automotive", label: "Automotive & mobility" },
  { href: "/sectors/fmcg", label: "FMCG & food and beverage" },
  { href: "/sectors/ecommerce", label: "E-commerce & marketplaces" },
  { href: "/sectors/pharmaceutical", label: "Pharma & medical devices" },
];

export const resources: NavItem[] = [
  {
    href: "/resources/ppwr-timeline",
    label: "PPWR Timeline 2025-2040",
    description: "Every milestone from entry into force to the 2040 stretch targets.",
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
];

export const blogIndexHref = "/blog";

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services/ppwr-gap-analysis", label: "Services" },
  { href: "/sectors/fmcg", label: "Sectors" },
  { href: "/resources/ppwr-timeline", label: "Resources" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const ctaPrimary = {
  href: "/contact",
  label: "Book a working session",
};

export const ctaSecondary = {
  href: "/resources/ppwr-readiness-assessment",
  label: "Free PPWR readiness check",
};
