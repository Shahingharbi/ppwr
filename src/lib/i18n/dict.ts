import type { Locale } from "./types";

export type Dict = {
  nav: {
    home: string;
    services: string;
    sectors: string;
    resources: string;
    insights: string;
    about: string;
    contact: string;
    bookSession: string;
    readinessCheck: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
  };
  topBanner: {
    chip: string;
    label: string;
    application: string;
    daysLeft: (n: number) => string;
    dismiss: string;
  };
  cta: {
    primary: string;
    secondary: string;
    bookSession: string;
    readinessCheck: string;
    learnMore: string;
    readArticle: string;
    allArticles: string;
    exploreArrow: string;
    discussScope: string;
    startCheck: string;
  };
  footer: {
    tagline: string;
    independent: string;
    services: string;
    sectors: string;
    resources: string;
    company: string;
    legal: string;
    insights: string;
    about: string;
    contact: string;
    imprint: string;
    privacy: string;
    cookies: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      submit: string;
    };
    copyright: string;
    madeInEu: string;
    motto: string;
  };
  reassurance: string[];
  social: {
    ndaFirst: string;
    articlePrecise: string;
    euWide: string;
    specialists: string;
  };
  contactCta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  stickyMobile: {
    readiness: string;
    book: string;
  };
  pricing: {
    chip: string;
    title: string;
    description: string;
    tiers: {
      readiness: { name: string; price: string; hours: string; target: string; features: string[]; cta: string };
      gap: { name: string; price: string; hours: string; target: string; features: string[]; cta: string };
      retainer: { name: string; price: string; hours: string; target: string; features: string[]; cta: string };
    };
    mostChosen: string;
    fineprint: string;
  };
  faq: {
    defaultTitle: string;
  };
  blogPreview: {
    chip: string;
    title: string;
    description: string;
    allArticles: string;
    readMore: string;
    minRead: (m: string) => string;
  };
  logos: {
    caption: string;
  };
  stats: { value: string; label: string }[];
  comparison: {
    criterion: string;
    yes: string;
    no: string;
  };
  bigBlogCta: {
    eyebrow: string;
    primary: string;
    secondary: string;
    badges: string[];
    boardTitle: string;
    statusEyebrow: string;
    statusBody: string;
  };
  stickyBlogCta: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    badges: string[];
    share: string;
  };
  tipBox: {
    tip: string;
    info: string;
    warning: string;
  };
  articleSummary: {
    label: string;
  };
  workflow: {
    title: string;
    eyebrow: string;
    description: string;
    boardTitle: string;
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
    secondary: string;
  };
  localeSwitcher: {
    label: string;
  };
};

const fr: Dict = {
  nav: {
    home: "Accueil",
    services: "Services",
    sectors: "Secteurs",
    resources: "Ressources",
    insights: "Analyses",
    about: "À propos",
    contact: "Contact",
    bookSession: "Réserver une session",
    readinessCheck: "Diagnostic gratuit",
    skipToContent: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  topBanner: {
    chip: "Règlement (UE) 2025/40",
    label: "Application générale PPWR :",
    application: "12 août 2026",
    daysLeft: (n) => `Plus que ${n} jours`,
    dismiss: "Fermer la bannière",
  },
  cta: {
    primary: "Réserver une session de travail",
    secondary: "Diagnostic PPWR gratuit",
    bookSession: "Réserver une session",
    readinessCheck: "Diagnostic gratuit",
    learnMore: "En savoir plus",
    readArticle: "Lire l’article",
    allArticles: "Tous les articles",
    exploreArrow: "Explorer →",
    discussScope: "Discuter du périmètre",
    startCheck: "Lancer le diagnostic",
  },
  footer: {
    tagline:
      "Cabinet de conseil dédié au Règlement (UE) 2025/40 — la PPWR. Feuilles de route audit-ready, article par article.",
    independent:
      "Pactum est un cabinet indépendant. Aucun lien capitalistique avec les institutions de l’Union européenne.",
    services: "Services",
    sectors: "Secteurs",
    resources: "Ressources",
    company: "Cabinet",
    legal: "Mentions",
    insights: "Analyses",
    about: "À propos",
    contact: "Contact",
    imprint: "Mentions légales",
    privacy: "Confidentialité",
    cookies: "Cookies",
    newsletter: {
      title: "Briefing trimestriel",
      description:
        "Mises à jour réglementaires uniquement. Aucune sollicitation commerciale.",
      placeholder: "vous@entreprise.com",
      submit: "M’abonner",
    },
    copyright: "© 2025 Pactum Advisory",
    madeInEu: "Made in EU",
    motto: "Règlement (UE) 2025/40 — votre feuille de route, notre métier",
  },
  reassurance: [
    "NDA signé en amont",
    "Feuille de route chiffrée en 5 jours",
    "Équipes projet dans toute l’UE",
  ],
  social: {
    ndaFirst: "NDA en amont",
    articlePrecise: "Article par article",
    euWide: "Équipes UE",
    specialists: "Spécialistes du Règlement (UE) 2025/40",
  },
  contactCta: {
    title: "Soyez prêt pour la PPWR avant le 12 août 2026",
    description:
      "Réservez une session de travail de 30 minutes avec un consultant Pactum. Nous cartographions votre portefeuille emballages face au Règlement (UE) 2025/40 et livrons une feuille de route chiffrée sous 5 jours ouvrés.",
    primary: "Réserver une session de travail",
    secondary: "Diagnostic gratuit",
  },
  stickyMobile: {
    readiness: "Diagnostic",
    book: "Réserver",
  },
  pricing: {
    chip: "Engagements",
    title: "Trois façons de travailler avec Pactum",
    description:
      "Périmètre fixe, prix fixe. Diagnostic en libre-service, feuille de route 5 jours (point d’entrée le plus choisi), ou retainer programme pluriannuel.",
    tiers: {
      readiness: {
        name: "Diagnostic",
        price: "Gratuit",
        hours: "10 minutes",
        target: "Pour estimer la taille du chantier",
        features: [
          "Auto-évaluation 12 questions en ligne",
          "Score indicatif A / B / C",
          "Rapport PDF par e-mail",
          "Aucune relance commerciale sans demande",
        ],
        cta: "Lancer le diagnostic",
      },
      gap: {
        name: "Feuille de route",
        price: "À partir de 38 k€",
        hours: "5 jours ouvrés",
        target: "Le point d’entrée le plus choisi",
        features: [
          "Inventaire SKU sous NDA (jusqu’à 200 SKU)",
          "Analyse des écarts article par article (Art. 5 à 50)",
          "Note de recyclabilité A / B / C par SKU",
          "Criblage PFAS / Annexe V",
          "Backlog de remédiation chiffré",
          "Deck de comité de pilotage",
        ],
        cta: "Réserver une session",
      },
      retainer: {
        name: "Retainer programme",
        price: "Sur mesure",
        hours: "12 mois minimum",
        target: "Pour piloter la PPWR comme un programme pluriannuel",
        features: [
          "Inclut la feuille de route 5 jours",
          "Veille réglementaire trimestrielle",
          "Suivi des actes délégués et d’exécution",
          "Bibliothèque de clauses fournisseurs et audits",
          "Tracker d’implémentation par État membre",
          "Appui à la rédaction des Déclarations de conformité (Art. 39)",
        ],
        cta: "Cadrer le périmètre",
      },
    },
    mostChosen: "Le plus choisi",
    fineprint:
      "Tarification indicative. Périmètre final convenu par écrit sous NDA. Aucune commission, aucun rétro-paiement, aucun upsell.",
  },
  faq: {
    defaultTitle: "Questions fréquentes sur la PPWR",
  },
  blogPreview: {
    chip: "Analyses",
    title: "Cellule de recherche PPWR",
    description:
      "Analyses précises article par article du Règlement (UE) 2025/40 — rédigées par les équipes qui construisent les feuilles de route. Sans baratin, sans contenu SEO de remplissage.",
    allArticles: "Tous les articles",
    readMore: "Lire l’article",
    minRead: (m) => `${m} de lecture`,
  },
  logos: {
    caption:
      "Choisi par des groupes industriels intensifs en emballage opérant dans toute l’UE",
  },
  stats: [
    { value: "12 août 2026", label: "Application générale de la PPWR" },
    { value: "5 jours", label: "Du NDA à la feuille de route chiffrée" },
    { value: "27 + EEE", label: "États couverts à chaque mission" },
    { value: "Jusqu’à 4 %", label: "Du chiffre d’affaires exposé (Art. 68)" },
  ],
  comparison: {
    criterion: "Critère",
    yes: "Oui",
    no: "Non",
  },
  bigBlogCta: {
    eyebrow: "Prêt pour la PPWR ?",
    primary: "Réserver une session",
    secondary: "Diagnostic gratuit",
    badges: ["NDA sur demande", "Feuille de route en 5 jours", "Équipes UE"],
    boardTitle: "Pactum · Tableau de conformité PPWR",
    statusEyebrow: "Statut conformité · août 2026",
    statusBody: "76 % du portefeuille conforme · 4 actions prioritaires en file pour le comité.",
  },
  stickyBlogCta: {
    eyebrow: "Pactum",
    title: "Du doute PPWR à l’audit-ready",
    body:
      "Feuille de route chiffrée en 5 jours, SKU par SKU, face au Règlement (UE) 2025/40. NDA signé en amont, sans upsell.",
    cta: "Réserver une session",
    badges: ["NDA en amont", "Couverture UE", "Livrable en 5 jours"],
    share: "Partager",
  },
  tipBox: {
    tip: "Conseil Pactum",
    info: "À savoir",
    warning: "Attention",
  },
  articleSummary: {
    label: "L’essentiel",
  },
  workflow: {
    title: "Notre méthode",
    eyebrow: "Cycle de livraison · 5 jours",
    description:
      "Une cadence éprouvée : NDA signé en amont, intake SKU, analyse article par article, criblage PFAS / Annexe V, présentation de la feuille de route chiffrée.",
    boardTitle: "Pactum · 5 jours de mission",
  },
  notFound: {
    title: "Page introuvable",
    body:
      "Cette page n’existe pas — peut-être déplacée. Reprenez depuis l’accueil ou consultez la FAQ PPWR.",
    cta: "Retour à l’accueil",
    secondary: "FAQ PPWR",
  },
  localeSwitcher: {
    label: "Choisir la langue",
  },
};

const en: Dict = {
  nav: {
    home: "Home",
    services: "Services",
    sectors: "Sectors",
    resources: "Resources",
    insights: "Insights",
    about: "About",
    contact: "Contact",
    bookSession: "Book a working session",
    readinessCheck: "Free readiness check",
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  topBanner: {
    chip: "Regulation (EU) 2025/40",
    label: "PPWR general application:",
    application: "12 August 2026",
    daysLeft: (n) => `${n} days left`,
    dismiss: "Dismiss banner",
  },
  cta: {
    primary: "Book a working session",
    secondary: "Free PPWR readiness check",
    bookSession: "Book a working session",
    readinessCheck: "Free readiness check",
    learnMore: "Learn more",
    readArticle: "Read article",
    allArticles: "All articles",
    exploreArrow: "Explore →",
    discussScope: "Discuss scope",
    startCheck: "Start the check",
  },
  footer: {
    tagline:
      "Pure-play advisory on Regulation (EU) 2025/40 — the PPWR. Audit-ready roadmaps, article by article.",
    independent:
      "Pactum is an independent firm. No capital ties to any European Union institution.",
    services: "Services",
    sectors: "Sectors",
    resources: "Resources",
    company: "Firm",
    legal: "Legal",
    insights: "Insights",
    about: "About",
    contact: "Contact",
    imprint: "Imprint",
    privacy: "Privacy",
    cookies: "Cookies",
    newsletter: {
      title: "Quarterly briefing",
      description: "Regulatory updates only. No upsell, ever.",
      placeholder: "you@company.com",
      submit: "Subscribe",
    },
    copyright: "© 2025 Pactum Advisory",
    madeInEu: "Made in EU",
    motto: "Regulation (EU) 2025/40 — your roadmap, our craft",
  },
  reassurance: ["NDA upfront", "5-day costed roadmap", "EU-wide project teams"],
  social: {
    ndaFirst: "NDA-first",
    articlePrecise: "Article-precise",
    euWide: "EU-wide team",
    specialists: "Regulation (EU) 2025/40 specialists",
  },
  contactCta: {
    title: "Get PPWR-ready before August 2026",
    description:
      "Book a 30-minute working session with a Pactum advisor. We map your packaging portfolio against Regulation (EU) 2025/40 and deliver a costed compliance roadmap within 5 working days.",
    primary: "Book a working session",
    secondary: "Free readiness check",
  },
  stickyMobile: {
    readiness: "Readiness check",
    book: "Book working session",
  },
  pricing: {
    chip: "Engagements",
    title: "Three ways to work with Pactum",
    description:
      "Fixed scope, fixed price. Self-serve readiness check, the 5-day gap roadmap most clients start with, or a multi-year programme retainer.",
    tiers: {
      readiness: {
        name: "Readiness check",
        price: "Free",
        hours: "10 minutes",
        target: "For teams scoping the size of the gap",
        features: [
          "12-question self-assessment online",
          "Indicative readiness score A / B / C",
          "PDF report by email",
          "No commercial follow-up unless requested",
        ],
        cta: "Start the check",
      },
      gap: {
        name: "Gap roadmap",
        price: "From €38k",
        hours: "5 working days",
        target: "Most clients start here",
        features: [
          "NDA-first SKU intake (up to 200 SKUs)",
          "Article-by-article gap analysis (Art. 5 to 50)",
          "Recyclability A / B / C grade per SKU",
          "PFAS / Annex V screening",
          "Costed remediation backlog",
          "Steering-committee deck",
        ],
        cta: "Book a working session",
      },
      retainer: {
        name: "Programme retainer",
        price: "Custom",
        hours: "12 months minimum",
        target: "For groups managing PPWR as a multi-year programme",
        features: [
          "Everything in Gap roadmap",
          "Quarterly regulatory horizon scan",
          "Delegated and implementing acts watch",
          "Supplier clauses library and audits",
          "Member State implementation tracker",
          "Article 39 Declaration of Conformity drafting support",
        ],
        cta: "Discuss scope",
      },
    },
    mostChosen: "Most chosen",
    fineprint:
      "Pricing indicative. Final scope agreed in writing under NDA. No commission, no kickback, no upsell.",
  },
  faq: {
    defaultTitle: "Frequently asked questions about PPWR",
  },
  blogPreview: {
    chip: "Insights",
    title: "PPWR research desk",
    description:
      "Article-precise briefings on Regulation (EU) 2025/40 — written by the team that builds the roadmaps. No fluff, no SEO filler.",
    allArticles: "All articles",
    readMore: "Read article",
    minRead: (m) => `${m} read`,
  },
  logos: {
    caption: "Trusted by packaging-intensive groups operating across the EU",
  },
  stats: [
    { value: "12 Aug 2026", label: "PPWR general application date" },
    { value: "5 days", label: "From NDA to costed roadmap" },
    { value: "27 + EEA", label: "Member States covered by every engagement" },
    { value: "Up to 4%", label: "Of turnover at penalty risk under Art. 68" },
  ],
  comparison: {
    criterion: "Criterion",
    yes: "Yes",
    no: "No",
  },
  bigBlogCta: {
    eyebrow: "Ready for PPWR?",
    primary: "Book a working session",
    secondary: "Free readiness check",
    badges: ["NDA on request", "5-day roadmap delivery", "EU-wide team"],
    boardTitle: "Pactum · PPWR readiness board",
    statusEyebrow: "Compliance status · Aug 2026",
    statusBody: "76% portfolio compliant · 4 priority actions queued for steerco.",
  },
  stickyBlogCta: {
    eyebrow: "Pactum",
    title: "From PPWR worry to PPWR ready",
    body:
      "5-day costed roadmap mapping every SKU against Regulation (EU) 2025/40. NDA-first, no upsell.",
    cta: "Book working session",
    badges: ["NDA upfront", "EU-wide", "5-day delivery"],
    share: "Share this article",
  },
  tipBox: {
    tip: "Pactum insight",
    info: "Good to know",
    warning: "Watch out",
  },
  articleSummary: {
    label: "TL;DR",
  },
  workflow: {
    title: "How we work",
    eyebrow: "5-day delivery cycle",
    description:
      "A proven cadence: NDA-first scoping, SKU intake, article-by-article gap analysis, PFAS / Annex V screen, costed roadmap presentation.",
    boardTitle: "Pactum · 5-day delivery",
  },
  notFound: {
    title: "Page not found",
    body:
      "This page doesn’t exist — it may have moved. Head back home or browse the PPWR FAQ.",
    cta: "Back to home",
    secondary: "PPWR FAQ",
  },
  localeSwitcher: {
    label: "Choose language",
  },
};

const dictionaries: Record<Locale, Dict> = { fr, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
