export type BlogCategory =
  | "Survival guide"
  | "PFAS"
  | "Recycled content"
  | "Methodology";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string; role: string };
  hero?: { src: string; alt: string };
  keywords: string[];
};

export const defaultAuthor = {
  name: "Pactum Editorial",
  role: "Regulatory research desk",
} as const;

export const posts: BlogPost[] = [
  {
    slug: "ppwr-2025-survival-guide-for-european-brand-owners",
    title: "PPWR 2025: the survival guide for European brand owners",
    excerpt:
      "Regulation (EU) 2025/40 enters general application on 12 August 2026. Identity, scope, the eight obligations that bite, the timeline through 2040 and the seven mistakes most brand owners will make.",
    category: "Survival guide",
    readTime: "18 min read",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-22",
    author: defaultAuthor,
    hero: {
      src: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=1600&q=80&auto=format&fit=crop",
      alt: "Industrial packaging line with sealed cartons under inspection",
    },
    keywords: [
      "PPWR",
      "Regulation (EU) 2025/40",
      "PPWR survival guide",
      "EU packaging regulation 2025",
      "PPWR 2025/40",
      "what is PPWR",
      "PPWR summary",
    ],
  },
  {
    slug: "pfas-food-contact-packaging-ppwr-august-2026-deadline",
    title: "PFAS in food-contact packaging: 12 August 2026 deadline",
    excerpt:
      "Article 5 of the PPWR bans intentionally added PFAS in food-contact packaging from 12 August 2026. Exact thresholds, testing methods, substitute materials, supplier clauses and a 90-day plan.",
    category: "PFAS",
    readTime: "16 min read",
    publishedAt: "2026-04-09",
    author: defaultAuthor,
    hero: {
      src: "https://images.unsplash.com/photo-1583922146273-d398354e1c5d?w=1600&q=80&auto=format&fit=crop",
      alt: "Stack of folded paper food-contact packaging in a converter warehouse",
    },
    keywords: [
      "PFAS PPWR",
      "PFAS food packaging EU",
      "PFAS ban Europe",
      "12 August 2026 PFAS deadline",
      "Article 5 PPWR",
      "PFAS food contact packaging",
    ],
  },
  {
    slug: "recycled-content-targets-2030-2040-plastic-packaging-roadmap",
    title: "Recycled content targets 2030 / 2040: the plastic packaging roadmap",
    excerpt:
      "Article 7 sets four recycled content targets that escalate from 2030 to 2040. The four numbers, the calculation methodology, mass balance vs free attribution, certification and a 24-month sourcing roadmap.",
    category: "Recycled content",
    readTime: "17 min read",
    publishedAt: "2026-04-02",
    author: defaultAuthor,
    hero: {
      src: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=1600&q=80&auto=format&fit=crop",
      alt: "Clear PET flake at a plastic recycling facility",
    },
    keywords: [
      "PPWR recycled content",
      "Article 7 PPWR",
      "recycled content targets 2030",
      "PET recycled content EU",
      "rPET sourcing",
      "PPWR 2040 targets",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}

export const blogCategories: BlogCategory[] = [
  "Survival guide",
  "PFAS",
  "Recycled content",
  "Methodology",
];
