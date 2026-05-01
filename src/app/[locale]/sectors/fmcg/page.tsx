import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { FmcgStats } from "@/components/pages/sectors/fmcg/FmcgStats";

const PAGE_PATH = "/sectors/fmcg";

type SectorContent = {
  metaTitle: string;
  metaDescription: string;
  ogAlt: string;
  twitterTitle: string;
  twitterDescription: string;
  homeLabel: string;
  sectorsLabel: string;
  sectorLabel: string;
  serviceJsonLdName: string;
  serviceJsonLdDescription: string;
  audienceType: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whatPpwr: {
    chip: string;
    title: string;
    paragraphs: React.ReactNode[];
  };
  articlesEyebrow: string;
  articlesTitle: string;
  articlesIntro: string;
  whatWeDoLabel: string;
  goToLabel: (service: string) => string;
  articlesThatBite: {
    article: string;
    headline: string;
    deadline: string;
    action: string;
    serviceHref: string;
    serviceLabel: string;
  }[];
  risksChip: string;
  risksTitle: string;
  sectorRisks: string[];
  illustrativeChip: string;
  illustrativeTitle: string;
  illustrativeParagraphs: string[];
  faqTitle: string;
  sectorFaqs: { question: string; answer: string }[];
  contactTitle: string;
  contactDescription: string;
};

function getContent(locale: Locale): SectorContent {
  if (locale === "fr") {
    return {
      metaTitle:
        "PPWR dans la grande consommation — bouteilles, sachets, retraits Annexe V | Pactum",
      metaDescription:
        "Comment le règlement PPWR (UE) 2025/40 transforme les emballages alimentaires, boissons, hygiène et soin de la grande consommation — PFAS Art. 5, contenu recyclé PET Art. 7, réemploi boissons Art. 29 et interdictions Annexe V. Règlement PPWR grande consommation pour les marques européennes.",
      ogAlt: "Conseil PPWR pour la grande consommation — Pactum",
      twitterTitle: "PPWR grande consommation — Pactum",
      twitterDescription:
        "Règlement (UE) 2025/40 appliqué à l'emballage alimentaire, boissons, hygiène et soin de marque et MDD.",
      homeLabel: "Accueil",
      sectorsLabel: "Secteurs",
      sectorLabel: "Grande consommation & agroalimentaire",
      serviceJsonLdName: "Conseil PPWR pour la grande consommation",
      serviceJsonLdDescription:
        "Conseil pure-play sur le règlement (UE) 2025/40 pour les groupes de grande consommation, marques et MDD — PFAS contact alimentaire (Art. 5), contenu recyclé PET et autres plastiques (Art. 7), réemploi boissons et CHR (Art. 29), interdictions à usage unique (Art. 25 / Annexe V) et Déclaration de conformité (Art. 39).",
      audienceType:
        "Industriels de la grande consommation — alimentaire, boissons, hygiène, soin",
      hero: {
        eyebrow: "SECTEUR",
        title: "PPWR dans la grande consommation — bouteilles, sachets, retraits Annexe V",
        subtitle:
          "Le règlement (UE) 2025/40 frappe simultanément l'alimentaire, les boissons, l'hygiène et le soin — PFAS au contact alimentaire dès août 2026, contenu recyclé PET dès 2030, objectifs de réemploi boissons et interdictions Annexe V à usage unique. Marque et MDD, chaque SKU est concerné.",
        primaryCta: "Réserver une session de travail",
        secondaryCta: "Diagnostic PPWR gratuit",
      },
      whatPpwr: {
        chip: "Ce que la PPWR change pour la grande consommation",
        title: "Le règlement frappe la grande consommation sur cinq fronts simultanément.",
        paragraphs: [
          <>
            Le règlement (UE) 2025/40, publié au JO L le 22 janvier 2025 et entré en vigueur
            le 11 février 2025, s'applique de manière générale à compter du 12 août 2026. Pour
            les groupes de grande consommation — marques et MDD, alimentaire, boissons,
            hygiène et soin — le règlement frappe plus fort que dans la plupart des autres
            secteurs car il s'active simultanément sur cinq vecteurs distincts, avec des
            échéances et des standards de preuve différents pour chacun.
          </>,
          <>
            Le premier vecteur est l'article 5 : à compter du 12 août 2026, l'emballage ne
            doit pas contenir de PFAS intentionnellement ajoutés au contact alimentaire au-delà
            de 25 ppb pour tout PFAS individuel (analyse ciblée), 250 ppb pour la somme des
            PFAS, ou 50 ppm de fluor total comme indicateur. Papiers anti-graisse, plaques de
            cuisson, suscepteurs micro-ondes, barquettes en fibre moulée et opercules à
            revêtement fluoropolymère sont les substrats les plus exposés. La substitution
            existe, mais qualifier des matériaux de remplacement pour la performance barrière
            et anti-graisse prend 12-18 mois — autrement dit, le chantier doit être lancé.
          </>,
          <>
            Le deuxième vecteur est l'article 7. À compter du 1er janvier 2030, les emballages
            plastiques doivent atteindre des seuils minimums de contenu recyclé : 30 % pour le
            PET en contact sensible (50 % au 1er janvier 2040), 30 % pour les bouteilles
            plastique de boissons à usage unique (65 %), 10 % pour les emballages contact
            sensible dans d'autres plastiques (25 %) et 35 % pour les autres emballages
            plastiques (65 %). L'approvisionnement en rPET de qualité contact alimentaire est
            la contrainte limitante, et les marques qui verrouillent des contrats long terme
            en 2025-2026 disposeront d'un avantage de coût structurel sur celles qui achèteront
            au comptant en 2029.
          </>,
          <>
            Le troisième vecteur est le réemploi de l'article 29, focalisé sur les boissons :
            10 % des emballages d'eau, boissons rafraîchissantes, bière, vin et spiritueux
            doivent être réemployables à compter du 1er janvier 2030, puis 40 % au 1er janvier
            2040, avec dérogations possibles des États membres au titre de l'article 29(8). Le
            CHR à emporter doit proposer une option de contenant réemployable à compter du
            12 août 2026, et les distributeurs vendant alimentaire et détergents en magasins
            ≥400 m² doivent proposer le rechargement à compter du 1er janvier 2030. Pour les
            groupes boissons construits sur le PET à usage unique, c'est une décision de
            niveau capex.
          </>,
          <>
            Le quatrième vecteur est l'article 25 et l'Annexe V. À compter du 12 août 2026, le
            règlement interdit les emballages plastiques à usage unique pour les fruits et
            légumes frais sous 1,5 kg, l'emballage CHR à usage unique consommé sur place, les
            miniatures d'hôtellerie sous 100 ml, les sachets de condiments à usage unique en
            CHR et l'emballage groupé utilisé uniquement pour encourager les ventes en volume.
            La liste est courte mais opérationnellement chirurgicale pour les gammes de marque
            qui s'appuient sur les formats promotionnels multipack.
          </>,
          <>
            Le cinquième vecteur est la notation Art. 6 et la Déclaration de conformité Art.
            39. Chaque unité d'emballage exige une notation Classe A/B/C et une DoC signée
            avant placement sur le marché. Pour un groupe FMCG avec des milliers de SKU sur
            plusieurs catégories, ni l'un ni l'autre n'est une tâche ponctuelle — ce sont des
            programmes. Nous les pilotons en trois flux : une{" "}
            <a
              href="/fr/services/ppwr-gap-analysis"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Analyse des écarts PPWR
            </a>{" "}
            pour cadrer, une{" "}
            <a
              href="/fr/services/recycled-content-roadmap"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Feuille de route contenu recyclé
            </a>{" "}
            pour sourcer, et un programme{" "}
            <a
              href="/fr/services/declaration-of-conformity"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Déclaration de conformité
            </a>{" "}
            pour preuve.
          </>,
        ],
      },
      articlesEyebrow: "Les articles les plus contraignants",
      articlesTitle:
        "Cinq articles PPWR qui déterminent votre conformité linéaire UE.",
      articlesIntro:
        "Chaque carte associe l'obligation contraignante au service précis que nous menons pour la couvrir.",
      whatWeDoLabel: "Ce que nous faisons.",
      goToLabel: (service) => `Aller à ${service}`,
      articlesThatBite: [
        {
          article: "Article 5",
          headline:
            "PFAS intentionnellement ajoutés interdits dans l'emballage contact alimentaire à 25 ppb / 250 ppb / 50 ppm",
          deadline: "Applicable à compter du 12 août 2026",
          action:
            "Nous auditons papiers anti-graisse, plaques de cuisson, suscepteurs micro-ondes et encres d'impression face aux seuils en analyse ciblée et fluor total, puis menons un programme de substitution et de clauses fournisseurs.",
          serviceHref: "/fr/services/pfas-compliance",
          serviceLabel: "Conformité PFAS",
        },
        {
          article: "Article 7",
          headline:
            "Bouteilles PET 30 % de contenu recyclé (2030), 65 % (2040) ; autres plastiques 35 % / 65 %",
          deadline: "À compter du 1er janvier 2030, puis 1er janvier 2040",
          action:
            "Nous modélisons le sourcing rPET qualité alimentaire, bâtissons des contrats bilan massique avec certification ISCC PLUS ou CEN/TS et sécurisons l'approvisionnement avant le pic de prix de 2028.",
          serviceHref: "/fr/services/recycled-content-roadmap",
          serviceLabel: "Feuille de route contenu recyclé",
        },
        {
          article: "Article 29",
          headline:
            "Réemploi boissons 10 % en 2030, 40 % en 2040 (eau, boissons rafraîchissantes, bière, vin, spiritueux)",
          deadline: "À compter du 1er janvier 2030, puis 1er janvier 2040",
          action:
            "Nous concevons l'architecture verre et PET rechargeables, l'interface consigne avec les systèmes nationaux et l'économie unitaire qui tient sur des portefeuilles SKU multi-pays.",
          serviceHref: "/fr/services/reuse-targets-strategy",
          serviceLabel: "Stratégie réemploi & rechargement",
        },
        {
          article: "Article 25 / Annexe V",
          headline:
            "Interdictions usage unique : CHR sur place, fruits & légumes sous 1,5 kg, miniatures d'hôtel, sachets",
          deadline: "Applicable à compter du 12 août 2026",
          action:
            "Nous re-classifions chaque SKU exposé Annexe V, validons les exemptions et réingéniorons les formats — distributeurs rechargeables, dérogations contact alimentaire primaire et service CHR réemployable.",
          serviceHref: "/fr/services/ppwr-gap-analysis",
          serviceLabel: "Analyse des écarts PPWR",
        },
        {
          article: "Article 6",
          headline:
            "Notation recyclabilité par conception (Classe A/B/C) pour chaque unité d'emballage",
          deadline:
            "Classe C minimum à compter du 1er janvier 2030 ; Classe C interdite à compter du 1er janvier 2038",
          action:
            "Nous notons souples, pochettes multicouches, manchons et étiquettes pleine retrait face aux critères d'éco-conception et faisons remonter les SKU Classe C en B.",
          serviceHref: "/fr/services/recyclability-assessment",
          serviceLabel: "Évaluation de recyclabilité",
        },
      ],
      risksChip: "Risques propres au secteur",
      risksTitle: "Là où les groupes FMCG sous-estiment le règlement.",
      sectorRisks: [
        "Prolifération SKU multi-pays : une gamme yaourt à douze parfums, trois formats et sept variantes nationales génère des centaines d'unités d'emballages distinctes, chacune exigeant sa propre Déclaration de conformité Art. 39 et sa notation Art. 6.",
        "Pression de conformité distributeurs : enseignes françaises, allemandes et néerlandaises mènent déjà des audits fournisseurs avant le 12 août 2026 et déréférencent des SKU MDD qui ne peuvent pas démontrer la conformité Annexe V ou l'absence de PFAS au contact alimentaire.",
        "Partage de responsabilité marque vs. MDD : au titre des articles 3 et 4, le metteur sur le marché et l'enseigne MDD peuvent tous deux qualifier comme opérateurs économiques obligés — les clauses contractuelles doivent être réécrites pour répartir proprement la charge de dossier technique.",
        "Réemploi boissons vs. lignes d'embouteillage à usage unique existantes : l'objectif de réemploi de 10 % en 2030 entre en collision frontale avec une capacité PET à usage unique bâtie autour du remplissage à chaud et aseptique, et le régime de dérogation au titre de l'article 29(8) exige une intervention de l'État membre plutôt qu'une auto-déclaration de l'industrie.",
        "Éco-modulation au titre de l'article 45 : les éco-contributions seront modulées selon la classe de recyclabilité et le contenu recyclé dès 2026 — un SKU Classe C peut payer 2 à 4 fois la contribution d'un SKU Classe A sur des marchés comme la France, l'Italie ou l'Espagne, multipliant le coût de l'inaction.",
        "Substantiation des allégations recyclables : au titre des articles 7(7) et 12, les allégations de contenu recyclé et de recyclabilité doivent être étayées par des preuves documentées — les allégations génériques sur emballage (« recyclable », « 30 % de matière recyclée ») sans dossier de preuve déclenchent un retrait au titre de l'article 68.",
      ],
      illustrativeChip: "Mission illustrative (anonymisée), pas un client réel",
      illustrativeTitle:
        "Comment nous traiterions un groupe alimentaire de marque multi-pays.",
      illustrativeParagraphs: [
        "Un groupe alimentaire de marque de 4 Md€ avec 18 catégories vendues dans 22 États membres de l'UE — un mix de produits laitiers frais, épicerie ambiante, plats cuisinés surgelés et packs de service CHR — vient nous voir neuf mois avant la date d'application générale du 12 août 2026. Position de départ : 4 200 SKU emballages actifs, trois centres R&D régionaux menant des programmes de substitution non coordonnés, et une équipe category management confrontée simultanément à des menaces de déréférencement MDD de deux clients distributeurs en France et en Allemagne pour la présence de PFAS dans les barquettes à suscepteur micro-ondes.",
        "Nous ouvrons par une feuille de route chiffrée en 5 jours bâtie sur les articles 5, 6, 7, 25 et 39. Au troisième jour, nous disposons d'une notation Classe A/B/C sur chaque SKU plastique, d'une carte d'exposition PFAS sur 380 substrats contact alimentaire, d'une re-classification Annexe V des formats promotionnels et d'un écart de contenu recyclé par catégorie à 2030. Le premier livrable est un briefing article par article de 22 pages que le directeur Emballages emporte dans la prochaine revue de catégorie et la prochaine ronde de négociation fournisseurs.",
        "À partir de là, la mission se déroule en trois flux parallèles sur douze mois : un programme PFAS-out (substitution, clauses fournisseurs, COA en preuve) clôturé avant le 12 août 2026 ; un plan de sourcing rPET qualité alimentaire avec deux fournisseurs certifiés ISCC-PLUS verrouillant les volumes 2027-2030 ; et un programme DoC centralisé, avec dossiers techniques conservés dix ans au titre de l'article 40, que l'équipe conformité peut remettre à une autorité de surveillance du marché à la demande. Sortie au mois douze : zéro format Annexe V interdit en linéaire, une trajectoire rPET prévisible à 30 % en 2030 et une position défendable face aux clients distributeurs avant leurs audits fournisseurs 2026.",
      ],
      faqTitle: "PPWR grande consommation — questions fréquentes",
      sectorFaqs: [
        {
          question:
            "L'interdiction PFAS du 12 août 2026 couvre-t-elle tous les emballages contact alimentaire ou seulement certains formats ?",
          answer:
            "L'article 5 interdit les PFAS intentionnellement ajoutés sur l'ensemble des emballages contact alimentaire placés sur le marché européen à compter du 12 août 2026, quel que soit le format. Les seuils — 25 ppb pour tout PFAS individuel par analyse ciblée, 250 ppb pour la somme des PFAS, et 50 ppm de fluor total comme indicateur — s'appliquent à l'unité d'emballage telle que placée sur le marché. Papier anti-graisse, plaques de cuisson, suscepteurs micro-ondes, opercules à revêtement fluoropolymère et certaines encres sont les éléments les plus à risque.",
        },
        {
          question:
            "Les emballages MDD et marque propre sont-ils traités de la même manière par la PPWR ?",
          answer:
            "Oui. Les articles 3 et 4 ne distinguent pas entre emballages de marque et MDD. Tous deux peuvent placer un emballage sur le marché via différents opérateurs de la chaîne. En pratique, le metteur sur le marché — qu'il s'agisse d'un groupe FMCG national ou de la branche MDD d'une enseigne — porte l'obligation de Déclaration de conformité au titre de l'article 39, sauf réallocation contractuelle à un co-fabricant ou un importateur.",
        },
        {
          question:
            "Les objectifs de contenu recyclé Art. 7 s'appliquent-ils par SKU, par gamme ou par usine ?",
          answer:
            "L'article 7 fixe la part minimale de contenu recyclé calculée comme moyenne par site de fabrication et par année calendaire, par type d'emballage. Un SKU sous-performant peut donc être compensé au sein du portefeuille annuel d'une usine, mais une usine qui rate la moyenne est non conforme pour cette année. Nous bâtissons le modèle au niveau usine et le plan de sourcing, pas seulement les objectifs au SKU.",
        },
        {
          question:
            "Que signifie l'Annexe V pour les marques CHR et les formats hors domicile ?",
          answer:
            "L'Annexe V interdit les emballages plastiques à usage unique consommés sur place dans hôtels, restaurants et cafés à compter du 12 août 2026, ainsi que les miniatures d'hôtel sous 100 ml, les sachets de condiments à usage unique et les sacs plastique très légers. L'article 29 exige ensuite que le CHR à emporter propose une option de contenant réemployable. Les marques vendant en CHR ont besoin d'une stratégie SKU parallèle : distributeurs réemployables, formats rechargeables et alternatives en gros conditionnement.",
        },
        {
          question:
            "À quelle vitesse l'éco-modulation des éco-contributions se matérialise-t-elle après le 12 août 2026 ?",
          answer:
            "L'article 45 oblige les États membres à moduler les éco-contributions sur la base de la classe de recyclabilité et de la présence de substances préoccupantes, la méthodologie devant être fixée par la Commission et transposée nationalement. La France (Citeo) et les Pays-Bas (Verpact) publient déjà des tarifs modulés avant les critères harmonisés ; l'Allemagne (ZSVR) et l'Italie (CONAI) alignent leurs barèmes en 2025-2026. L'impact pratique sur les SKU Classe C se ressent en 2026-2027, bien avant la falaise contraignante de 2030.",
        },
      ],
      contactTitle: "Mettez votre portefeuille de marque en conformité PPWR",
      contactDescription:
        "Réservez une session de travail de 30 minutes. Nous cartographions votre portefeuille emballages face au règlement (UE) 2025/40 — PFAS, contenu recyclé, réemploi boissons, interdictions à usage unique et DoC — et livrons une feuille de route chiffrée sous 5 jours ouvrés.",
    };
  }

  return {
    metaTitle:
      "PPWR for FMCG — PFAS, recycled content, beverage reuse, single-use bans | Pactum",
    metaDescription:
      "How Regulation (EU) 2025/40 reshapes branded food, beverage, household and personal-care packaging — Article 5 PFAS, Article 7 PET targets, Article 29 reuse and Article 25 single-use bans for FMCG groups.",
    ogAlt: "PPWR advisory for FMCG — Pactum",
    twitterTitle: "PPWR for FMCG — Pactum",
    twitterDescription:
      "Regulation (EU) 2025/40 applied to branded food, beverage, household and personal-care packaging.",
    homeLabel: "Home",
    sectorsLabel: "Sectors",
    sectorLabel: "FMCG & food and beverage",
    serviceJsonLdName: "PPWR advisory for FMCG",
    serviceJsonLdDescription:
      "Pure-play advisory on Regulation (EU) 2025/40 for branded and private-label FMCG groups — PFAS in food contact (Article 5), recycled content in PET and other plastics (Article 7), beverage and HORECA reuse (Article 29), single-use bans (Article 25 / Annex V) and Declaration of Conformity (Article 39).",
    audienceType:
      "FMCG manufacturers — food, beverage, household care, personal care",
    hero: {
      eyebrow: "SECTOR",
      title: "PPWR for FMCG and food & beverage",
      subtitle:
        "Regulation (EU) 2025/40 lands across food, beverage, household care and personal care simultaneously — PFAS in food contact from August 2026, PET recycled content from 2030, beverage reuse targets, and Annex V single-use bans. Branded and private-label, every SKU is in scope.",
      primaryCta: "Book a working session",
      secondaryCta: "Free PPWR readiness check",
    },
    whatPpwr: {
      chip: "What PPWR means for FMCG",
      title: "The Regulation hits FMCG on five fronts at once.",
      paragraphs: [
        <>
          Regulation (EU) 2025/40, published in OJ L on 22 January 2025 and entered into
          force on 11 February 2025, applies generally from 12 August 2026. For
          fast-moving consumer goods groups — branded and private-label, across food,
          beverage, household care and personal care — the regulation lands harder than
          for most other sectors because it activates on five different vectors
          simultaneously, with different deadlines and different evidence standards on
          each.
        </>,
        <>
          The first vector is Article 5: from 12 August 2026 packaging must not contain
          intentionally added PFAS in food contact above 25 ppb for any individual PFAS
          (targeted analysis), 250 ppb for the sum of PFAS, or 50 ppm of total fluorine
          as an indicator. Greaseproof papers, bake-out boards, microwave susceptors,
          moulded-fibre meal trays and fluoropolymer-coated lids are the highest-risk
          substrates. Substitution exists, but qualifying replacement materials for
          barrier and grease performance takes 12-18 months — meaning the work has to
          be running now.
        </>,
        <>
          The second vector is Article 7. From 1 January 2030, plastic packaging must
          meet minimum recycled-content thresholds: 30% for contact-sensitive PET
          (rising to 50% by 1 January 2040), 30% for single-use plastic beverage bottles
          (rising to 65%), 10% for contact-sensitive packaging in other plastics (rising
          to 25%) and 35% for other plastic packaging (rising to 65%). Food-grade rPET
          supply is the binding constraint, and the brands that lock in long-term
          supply contracts in 2025-2026 will have a structural cost advantage over those
          that buy on the spot market in 2029.
        </>,
        <>
          The third vector is Article 29 reuse, focused on beverages: 10% of water,
          soft drinks, beer, wine and spirits packaging must be reusable from 1 January
          2030, rising to 40% by 1 January 2040, with Member State derogations possible
          under Article 29(8). HORECA take-away must offer a reusable container option
          from 12 August 2026, and retailers selling food and detergents in stores ≥400
          m² must offer refill from 1 January 2030. For beverage groups built on
          one-way PET, this is a capex-grade decision.
        </>,
        <>
          The fourth vector is Article 25 and Annex V. From 12 August 2026 the
          regulation bans single-use plastic packaging for fresh fruit and vegetables
          under 1.5 kg, single-use HORECA on-premise packaging, hotel miniature
          toiletries under 100 ml, single-use condiment sachets in HORECA and grouped
          packaging used solely to encourage volume sales. The list is short but
          operationally surgical for branded ranges that lean on multi-pack promotional
          formats.
        </>,
        <>
          The fifth vector is Article 6 grading and Article 39 Declaration of
          Conformity. Every packaging unit needs a Class A/B/C grade and a signed DoC
          before being placed on the market. For an FMCG group with thousands of
          SKUs across multiple categories, neither is a one-off task — they are
          programmes. We run them in three streams: a{" "}
          <a
            href="/en/services/ppwr-gap-analysis"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            PPWR Gap Analysis
          </a>{" "}
          to scope, a{" "}
          <a
            href="/en/services/recycled-content-roadmap"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            Recycled Content Roadmap
          </a>{" "}
          to source, and a{" "}
          <a
            href="/en/services/declaration-of-conformity"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            Declaration of Conformity
          </a>{" "}
          programme to evidence.
        </>,
      ],
    },
    articlesEyebrow: "Articles that bite hardest",
    articlesTitle: "Five PPWR articles that determine your EU shelf-readiness.",
    articlesIntro:
      "Each card pairs the binding obligation with the specific service we run to close it.",
    whatWeDoLabel: "What we do about it.",
    goToLabel: (service) => `Go to ${service}`,
    articlesThatBite: [
      {
        article: "Article 5",
        headline:
          "Intentionally added PFAS prohibited in food-contact packaging at 25 ppb / 250 ppb / 50 ppm",
        deadline: "Applies from 12 August 2026",
        action:
          "We audit greaseproof papers, bake-out boards, microwave susceptors and printing inks against the targeted-analysis and total-fluorine indicator thresholds, then run a substitution and supplier-clause programme.",
        serviceHref: "/en/services/pfas-compliance",
        serviceLabel: "PFAS Compliance",
      },
      {
        article: "Article 7",
        headline:
          "PET bottles 30% recycled content (2030), 65% (2040); other plastics 35% / 65%",
        deadline: "From 1 January 2030, then 1 January 2040",
        action:
          "We model food-grade rPET sourcing, build mass-balance contracts with ISCC PLUS or CEN/TS certification and protect supply ahead of the 2028 price spike.",
        serviceHref: "/en/services/recycled-content-roadmap",
        serviceLabel: "Recycled Content Roadmap",
      },
      {
        article: "Article 29",
        headline:
          "Beverage reuse 10% by 2030, 40% by 2040 (water, soft drinks, beer, wine, spirits)",
        deadline: "From 1 January 2030, then 1 January 2040",
        action:
          "We design the refillable glass and PET architecture, the deposit interface with national DRS and the unit economics that hold under multi-country SKU portfolios.",
        serviceHref: "/en/services/reuse-targets-strategy",
        serviceLabel: "Reuse & Refill Strategy",
      },
      {
        article: "Article 25 / Annex V",
        headline:
          "Single-use bans: HORECA on-premise, fruit & veg under 1.5 kg, hotel miniatures, sachets",
        deadline: "Applies from 12 August 2026",
        action:
          "We re-classify every Annex-V exposed SKU, validate exemptions and re-engineer formats — refillable dispensers, primary food-contact carve-outs and reusable HORECA service.",
        serviceHref: "/en/services/ppwr-gap-analysis",
        serviceLabel: "PPWR Gap Analysis",
      },
      {
        article: "Article 6",
        headline:
          "Recyclable-by-design grading (Class A/B/C) for every packaging unit",
        deadline:
          "Class C minimum from 1 January 2030; Class C banned from 1 January 2038",
        action:
          "We grade flexibles, multi-layer pouches, sleeves and full-shrink labels against the design-for-recycling criteria and engineer Class C SKUs up to B.",
        serviceHref: "/en/services/recyclability-assessment",
        serviceLabel: "Recyclability Assessment",
      },
    ],
    risksChip: "Sector-specific risks",
    risksTitle: "Where FMCG groups underestimate the regulation.",
    sectorRisks: [
      "Multi-country SKU proliferation: a yoghurt range with twelve flavours, three pack sizes and seven national variants generates hundreds of distinct packaging units, each requiring its own Article 39 Declaration of Conformity and Article 6 grading.",
      "Retailer compliance pressure: French, German and Dutch retailers are already running supplier audits ahead of 12 August 2026 and de-listing private-label SKUs that cannot evidence Annex V compliance or PFAS-free food contact.",
      "Branded vs. private-label split responsibility: under Article 3 and Article 4, both the brand owner and the private-label retailer can qualify as obligated economic operators — contract clauses must be re-written to allocate the technical-documentation burden cleanly.",
      "Beverage reuse vs. existing one-way bottling lines: the 10% reuse target by 2030 collides head-on with single-use PET capacity built around hot-fill and aseptic, and the derogation regime under Article 29(8) requires Member State intervention rather than industry self-declaration.",
      "Eco-modulation under Article 45: PRO fees will be modulated by recyclability class and recycled content from 2026 onward — a Class-C SKU can pay 2-4x the Class-A fee in markets like France, Italy and Spain, multiplying the cost of inaction.",
      "Recyclable claim substantiation: under Article 7(7) and Article 12, recycled-content and recyclability claims must be substantiated with documented evidence — generic on-pack claims (“recyclable”, “made from 30% recycled material”) without backing files trigger withdrawal under Article 68.",
    ],
    illustrativeChip: "Illustrative engagement, not a real client",
    illustrativeTitle: "How we'd approach a multi-country branded food group.",
    illustrativeParagraphs: [
      "A €4 bn branded food group with 18 categories sold in 22 EU Member States — a mix of chilled dairy, ambient grocery, frozen ready meals and HORECA service packs — comes to us nine months before the 12 August 2026 general application date. Their starting position: 4,200 active packaging SKUs, three regional R&D centres running disconnected substitution programmes, and a category management team facing simultaneous private-label de-listing threats from two retail customers in France and Germany over PFAS in microwave-susceptor trays.",
      "We open with a 5-day costed roadmap built on Articles 5, 6, 7, 25 and 39. By day three we have a Class A/B/C grading on every plastic SKU, a PFAS exposure map across 380 food-contact substrates, an Annex V re-classification of promotional formats, and a category-level recycled-content gap to 2030. The first deliverable is a 22-page article-by-article briefing the Director of Packaging takes into the next category review and the next supplier negotiation round.",
      "From there the engagement runs in three parallel streams over twelve months: a PFAS-out programme (substitution, supplier clauses, COA evidence) closing before 12 August 2026; a food-grade rPET sourcing plan with two ISCC-PLUS certified suppliers locking 2027-2030 volumes; and a centralised DoC programme, with technical files retained for ten years per Article 40, that the compliance team can hand to a market-surveillance authority on demand. Output at month twelve: zero Annex-V-banned formats on shelf, a forecastable rPET path to 30% by 2030, and a defensible position with retail customers ahead of their 2026 supplier audits.",
    ],
    faqTitle: "FMCG PPWR — frequently asked questions",
    sectorFaqs: [
      {
        question:
          "Does the 12 August 2026 PFAS ban cover all food-contact packaging or only specific formats?",
        answer:
          "Article 5 prohibits intentionally added PFAS across all food-contact packaging placed on the EU market from 12 August 2026, regardless of format. The thresholds — 25 ppb for any individual PFAS by targeted analysis, 250 ppb for the sum of PFAS, and 50 ppm of total fluorine as an indicator — apply to the packaging unit as placed on the market. Greaseproof paper, bake-out boards, microwave susceptors, fluoropolymer-coated lids and certain inks are the highest-risk items.",
      },
      {
        question:
          "Are private-label and own-brand packaging treated the same way under the PPWR?",
        answer:
          "Yes. Article 3 and Article 4 do not distinguish between branded and private-label packaging. Both can place packaging on the market through different operators in the chain. In practice, the brand owner — whether a national CPG group or a retailer's private-label arm — bears the Declaration of Conformity obligation under Article 39 unless contractually re-allocated to a co-manufacturer or importer.",
      },
      {
        question:
          "Do the Article 7 recycled-content targets apply per SKU, per product range or per plant?",
        answer:
          "Article 7 sets the minimum recycled-content share calculated as an average per manufacturing plant and per calendar year, per type of packaging. So a single underperforming SKU can be balanced inside a plant's annual portfolio, but a plant that misses the average is non-compliant for that year. We build the plant-level model and sourcing plan, not just SKU-level targets.",
      },
      {
        question:
          "What does Annex V mean for HORECA brands and out-of-home formats?",
        answer:
          "Annex V bans single-use plastic packaging used for on-premise consumption in hotels, restaurants and cafés from 12 August 2026, alongside hotel miniature toiletries under 100 ml, single-use condiment sachets and very lightweight plastic carrier bags. Article 29 then requires HORECA take-away to offer a reusable container option. Brands selling into HORECA need a parallel SKU strategy: reusable dispensers, refill formats and bulk-pack alternatives.",
      },
      {
        question:
          "How fast does eco-modulation of EPR fees materialise after 12 August 2026?",
        answer:
          "Article 45 obliges Member States to modulate EPR fees on the basis of recyclability performance class and presence of substances of concern, with the methodology to be set by the Commission and transposed nationally. France (Citeo) and the Netherlands (Verpact) already publish modulated tariffs ahead of the harmonised criteria; Germany (ZSVR) and Italy (CONAI) are aligning their schemes during 2025-2026. Practical impact on Class-C SKUs is felt in 2026-2027, well before the 2030 binding cliff.",
      },
    ],
    contactTitle: "Get your branded portfolio PPWR-ready",
    contactDescription:
      "Book a 30-minute working session. We map your packaging portfolio against Regulation (EU) 2025/40 — PFAS, recycled content, beverage reuse, single-use bans and DoC — and deliver a costed roadmap within 5 working days.",
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    return {};
  }
  const locale = rawLocale;
  const c = getContent(locale);
  const url = `${siteConfig.url}/${locale}${PAGE_PATH}`;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/${locale}${PAGE_PATH}`,
      languages: {
        fr: `/fr${PAGE_PATH}`,
        en: `/en${PAGE_PATH}`,
        "x-default": `/fr${PAGE_PATH}`,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: c.metaTitle,
      description: c.metaDescription,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: c.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.twitterTitle,
      description: c.twitterDescription,
    },
  };
}

export default async function FmcgSectorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale;
  const c = getContent(locale);

  const breadcrumbItems = [
    { label: c.homeLabel, href: `/${locale}` },
    { label: c.sectorsLabel, href: `/${locale}${PAGE_PATH}` },
    { label: c.sectorLabel },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: `${siteConfig.url}${it.href}` } : {}),
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.serviceJsonLdName,
    serviceType: c.serviceJsonLdName,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: { "@type": "Place", name: "European Union" },
    description: c.serviceJsonLdDescription,
    url: `${siteConfig.url}/${locale}${PAGE_PATH}`,
    audience: {
      "@type": "BusinessAudience",
      audienceType: c.audienceType,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.sectorFaqs.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1280px] px-6 pt-6"
        style={{ fontFamily: "var(--font-maison-neue)" }}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {breadcrumbItems.map((it, i) => {
            const isLast = i === breadcrumbItems.length - 1;
            return (
              <li key={`${it.label}-${i}`} className="flex items-center gap-1.5">
                {it.href && !isLast ? (
                  <a href={it.href} className="hover:text-foreground transition-colors">
                    {it.label}
                  </a>
                ) : (
                  <span
                    className={isLast ? "text-foreground font-semibold" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {it.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    size={14}
                    className="text-muted-foreground/60"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        primaryCTA={{ href: `/${locale}/contact`, label: c.hero.primaryCta }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: c.hero.secondaryCta,
        }}
        imageSrc="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop"
      />

      {/* What PPWR means for FMCG */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {c.whatPpwr.chip}
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {c.whatPpwr.title}
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-foreground/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {c.whatPpwr.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Articles that bite hardest */}
      <section className="bg-[#f5f7f4] py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="max-w-3xl">
            <span
              className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {c.articlesEyebrow}
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {c.articlesTitle}
            </h2>
            <p
              className="mt-4 text-base text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {c.articlesIntro}
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.articlesThatBite.map((card) => (
              <li
                key={card.article + card.headline}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <span
                  className="inline-flex w-fit items-center rounded-full bg-[#0f1a16] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.article}
                </span>
                <h3
                  className="mt-4 text-lg font-semibold text-foreground leading-snug"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.headline}
                </h3>
                <p
                  className="mt-2 text-sm font-semibold text-[#065f46]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.deadline}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  <span className="font-semibold text-foreground">{c.whatWeDoLabel}</span>{" "}
                  {card.action}
                </p>
                <a
                  href={card.serviceHref}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#10b981] hover:text-[#059669]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {c.goToLabel(card.serviceLabel)}
                  <ChevronRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sector-specific risks */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {c.risksChip}
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {c.risksTitle}
          </h2>

          <ul className="mt-10 space-y-4">
            {c.sectorRisks.map((risk, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-[#f5f7f4]/60 p-5"
              >
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1a16] text-xs font-semibold text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {i + 1}
                </span>
                <p
                  className="text-base leading-relaxed text-foreground/85"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {risk}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FmcgStats locale={locale} />

      {/* Illustrative engagement */}
      <section className="bg-[#0f1a16] py-20 md:py-28 text-white">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#10b981]/15 px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {c.illustrativeChip}
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {c.illustrativeTitle}
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-white/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {c.illustrativeParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        title={c.faqTitle}
        items={c.sectorFaqs}
        id="faq"
      />

      <ContactCTA
        title={c.contactTitle}
        description={c.contactDescription}
        id="contact"
      />
    </>
  );
}
