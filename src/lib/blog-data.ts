import type { Locale } from "./i18n/types";

export type BlogCategory =
  | "Survival guide"
  | "PFAS"
  | "Recycled content"
  | "Methodology";

export type LocalizedString = Record<Locale, string>;

export type BlogPost = {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  category: BlogCategory;
  categoryLabel: LocalizedString;
  readTime: LocalizedString;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string; role: LocalizedString };
  hero?: { src: string; alt: LocalizedString };
  keywords: LocalizedString;
};

export type LocalizedBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  categoryLabel: string;
  readTime: string;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string; role: string };
  hero?: { src: string; alt: string };
  keywords: string[];
};

export const defaultAuthor = {
  name: "Pactum Editorial",
  role: {
    fr: "Cellule de recherche réglementaire",
    en: "Regulatory research desk",
  } as LocalizedString,
} as const;

export const blogCategoryLabels: Record<BlogCategory, LocalizedString> = {
  "Survival guide": { fr: "Guide de survie", en: "Survival guide" },
  PFAS: { fr: "PFAS", en: "PFAS" },
  "Recycled content": { fr: "Contenu recyclé", en: "Recycled content" },
  Methodology: { fr: "Méthodologie", en: "Methodology" },
};

export const posts: BlogPost[] = [
  {
    slug: "ppwr-2025-survival-guide-for-european-brand-owners",
    title: {
      fr: "PPWR 2025 — Le guide de survie pour les metteurs sur le marché européens",
      en: "PPWR 2025: the survival guide for European brand owners",
    },
    excerpt: {
      fr:
        "Le Règlement (UE) 2025/40 (la PPWR) entre en application générale le 12 août 2026. Identité du texte, périmètre, les huit obligations qui mordent, la trajectoire jusqu'en 2040 et les sept erreurs que la plupart des metteurs sur le marché commettront.",
      en:
        "Regulation (EU) 2025/40 enters general application on 12 August 2026. Identity, scope, the eight obligations that bite, the timeline through 2040 and the seven mistakes most brand owners will make.",
    },
    category: "Survival guide",
    categoryLabel: blogCategoryLabels["Survival guide"],
    readTime: { fr: "18 min de lecture", en: "18 min read" },
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-22",
    author: defaultAuthor,
    hero: {
      src: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=1600&q=80&auto=format&fit=crop",
      alt: {
        fr: "Ligne d'emballage industrielle avec cartons scellés en cours d'inspection",
        en: "Industrial packaging line with sealed cartons under inspection",
      },
    },
    keywords: {
      fr:
        "PPWR, règlement PPWR, PPWR emballage, PPWR France, Règlement (UE) 2025/40, règlement 2025/40, PPWR signification, loi PPWR, PPWR texte, PPWR 2026, PPWR 2030, guide de survie PPWR, PPWR pour les marques",
      en:
        "PPWR, Regulation (EU) 2025/40, PPWR survival guide, EU packaging regulation 2025, PPWR 2025/40, what is PPWR, PPWR summary",
    },
  },
  {
    slug: "pfas-food-contact-packaging-ppwr-august-2026-deadline",
    title: {
      fr: "PFAS dans les emballages au contact alimentaire — l'échéance du 12 août 2026",
      en: "PFAS in food-contact packaging: 12 August 2026 deadline",
    },
    excerpt: {
      fr:
        "L'article 5 du Règlement (UE) 2025/40 (la PPWR) interdit les PFAS ajoutés intentionnellement dans les emballages au contact alimentaire à partir du 12 août 2026. Seuils exacts, méthodes d'essai, matériaux de substitution, clauses fournisseurs et plan à 90 jours.",
      en:
        "Article 5 of the PPWR bans intentionally added PFAS in food-contact packaging from 12 August 2026. Exact thresholds, testing methods, substitute materials, supplier clauses and a 90-day plan.",
    },
    category: "PFAS",
    categoryLabel: blogCategoryLabels.PFAS,
    readTime: { fr: "16 min de lecture", en: "16 min read" },
    publishedAt: "2026-04-09",
    author: defaultAuthor,
    hero: {
      src: "https://images.unsplash.com/photo-1583922146273-d398354e1c5d?w=1600&q=80&auto=format&fit=crop",
      alt: {
        fr: "Pile d'emballages papier au contact alimentaire pliés dans l'entrepôt d'un transformateur",
        en: "Stack of folded paper food-contact packaging in a converter warehouse",
      },
    },
    keywords: {
      fr:
        "PFAS PPWR, PFAS emballage alimentaire UE, interdiction PFAS Europe, échéance PFAS 12 août 2026, article 5 PPWR, PFAS contact alimentaire, règlement 2025/40 PFAS",
      en:
        "PFAS PPWR, PFAS food packaging EU, PFAS ban Europe, 12 August 2026 PFAS deadline, Article 5 PPWR, PFAS food contact packaging",
    },
  },
  {
    slug: "recycled-content-targets-2030-2040-plastic-packaging-roadmap",
    title: {
      fr: "Objectifs de contenu recyclé 2030 / 2040 — feuille de route plastique",
      en: "Recycled content targets 2030 / 2040: the plastic packaging roadmap",
    },
    excerpt: {
      fr:
        "L'article 7 du Règlement (UE) 2025/40 (la PPWR) fixe quatre objectifs de contenu recyclé qui s'élèvent de 2030 à 2040. Les quatre chiffres, la méthodologie de calcul, bilan massique vs attribution libre, certification et feuille de route d'approvisionnement à 24 mois.",
      en:
        "Article 7 sets four recycled content targets that escalate from 2030 to 2040. The four numbers, the calculation methodology, mass balance vs free attribution, certification and a 24-month sourcing roadmap.",
    },
    category: "Recycled content",
    categoryLabel: blogCategoryLabels["Recycled content"],
    readTime: { fr: "17 min de lecture", en: "17 min read" },
    publishedAt: "2026-04-02",
    author: defaultAuthor,
    hero: {
      src: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=1600&q=80&auto=format&fit=crop",
      alt: {
        fr: "Paillettes de PET clair dans une installation de recyclage des plastiques",
        en: "Clear PET flake at a plastic recycling facility",
      },
    },
    keywords: {
      fr:
        "PPWR contenu recyclé, article 7 PPWR, objectifs contenu recyclé 2030, contenu recyclé PET UE, sourcing rPET, objectifs PPWR 2040, règlement 2025/40 recyclage",
      en:
        "PPWR recycled content, Article 7 PPWR, recycled content targets 2030, PET recycled content EU, rPET sourcing, PPWR 2040 targets",
    },
  },
];

function localizePost(post: BlogPost, locale: Locale): LocalizedBlogPost {
  return {
    slug: post.slug,
    title: post.title[locale],
    excerpt: post.excerpt[locale],
    category: post.category,
    categoryLabel: post.categoryLabel[locale],
    readTime: post.readTime[locale],
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: { name: post.author.name, role: post.author.role[locale] },
    hero: post.hero
      ? { src: post.hero.src, alt: post.hero.alt[locale] }
      : undefined,
    keywords: post.keywords[locale]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  };
}

export function getPosts(locale: Locale): LocalizedBlogPost[] {
  return posts.map((p) => localizePost(p, locale));
}

export function getPostBySlug(
  slug: string,
  locale: Locale = "en"
): LocalizedBlogPost | undefined {
  const found = posts.find((p) => p.slug === slug);
  return found ? localizePost(found, locale) : undefined;
}

export function getRelatedPosts(
  slug: string,
  locale: Locale,
  limit = 2
): LocalizedBlogPost[] {
  return posts
    .filter((p) => p.slug !== slug)
    .slice(0, limit)
    .map((p) => localizePost(p, locale));
}

export const blogCategories: BlogCategory[] = [
  "Survival guide",
  "PFAS",
  "Recycled content",
  "Methodology",
];

export function getBlogCategoryLabel(
  category: BlogCategory | "All",
  locale: Locale = "en"
): string {
  if (category === "All") {
    return locale === "fr" ? "Tous" : "All";
  }
  return blogCategoryLabels[category][locale];
}
