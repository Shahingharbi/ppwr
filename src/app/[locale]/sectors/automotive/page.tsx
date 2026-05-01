import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { AutomotiveStats } from "@/components/pages/sectors/automotive/AutomotiveStats";

const PAGE_PATH = "/sectors/automotive";

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
        "PPWR dans l'automobile — emballage de transport, retours, mutualisation | Pactum",
      metaDescription:
        "Comment le règlement PPWR (UE) 2025/40 transforme les emballages de transport entrants des fournisseurs de rang 1, les contenants réemployables, le sourcing de contenu recyclé et la Déclaration de conformité — règlement PPWR automobile pour les constructeurs et équipementiers européens.",
      ogAlt: "Conseil PPWR pour l'automobile — Pactum",
      twitterTitle: "PPWR automobile — Pactum",
      twitterDescription:
        "Règlement (UE) 2025/40 appliqué aux emballages de rang 1, aux contenants mutualisés et à la logistique entrante automobile.",
      homeLabel: "Accueil",
      sectorsLabel: "Secteurs",
      sectorLabel: "Automobile & mobilité",
      serviceJsonLdName: "Conseil PPWR pour l'automobile",
      serviceJsonLdDescription:
        "Conseil pure-play sur le règlement (UE) 2025/40 pour les constructeurs automobiles et fournisseurs de rang 1 — recyclabilité Art. 6, contenu recyclé Art. 7, ratio d'espace vide Art. 24, réemploi Art. 29 et Déclaration de conformité Art. 39 appliqués aux emballages de transport entrants et aux pools de contenants réemployables.",
      audienceType:
        "Constructeurs automobiles et fournisseurs de rang 1",
      hero: {
        eyebrow: "SECTEUR",
        title: "PPWR dans l'automobile — emballage de transport, retours, mutualisation",
        subtitle:
          "Le règlement (UE) 2025/40 redessine les emballages de transport entrants, les pools de contenants réemployables des fournisseurs de rang 1 et le sourcing de contenu recyclé pour les composants moteur, carrosserie, électronique et batterie. Renault, Stellantis, BMW, Volkswagen et Volvo Trucks opèrent l'emballage de rang 1 à grande échelle — chaque boucle compte.",
        primaryCta: "Réserver une session de travail",
        secondaryCta: "Diagnostic PPWR gratuit",
      },
      whatPpwr: {
        chip: "Ce que la PPWR change pour l'automobile",
        title:
          "Le règlement frappe le plus fort sur l'emballage entrant, les contenants réemployables et la chaîne d'approvisionnement rPP.",
        paragraphs: [
          <>
            Le règlement (UE) 2025/40, publié au JO L le 22 janvier 2025 et entré en vigueur
            le 11 février 2025, s'applique de manière générale à compter du 12 août 2026. Pour
            l'automobile et la mobilité, le centre de gravité n'est pas l'emballage de
            distribution — c'est le flux entrant de calage, bacs, KLT, racks, films étirables
            et carton ondulé qui transporte chaque jour moteurs, transmissions, faisceaux
            électriques, modules électroniques, panneaux de carrosserie peints et cellules de
            batterie à travers des centaines d'usines européennes.
          </>,
          <>
            L'article 24 plafonne le ratio d'espace vide des emballages groupés, de transport
            et e-commerce à 50 % à compter du 12 août 2028. Pour les emballages de transport
            de rang 1 conçus autour de racks acier fixes et de KLT standardisés, cette limite
            impose une re-conception massive du calage interne et de la modularité de
            l'unité de charge. Un berceau moteur dimensionné pour la plus grosse variante
            d'une gamme dépassera, sur les variantes plus petites, les 50 % d'espace vide et
            sera donc non conforme.
          </>,
          <>
            L'article 29 fixe ensuite le plafond opérationnel : 40 % des emballages de
            transport et groupés doivent être réemployables à compter du 1er janvier 2030,
            puis 70 % à compter du 1er janvier 2040. Le gros électroménager doit atteindre
            90 % de réemploi des emballages de transport en 2030, et bien que l'automobile ne
            soit pas nommée comme cible autonome, les flux de rang 1 reposent déjà largement
            sur des contenants réemployables — la question est de savoir si les boucles sont
            auditables, transfrontalières conformes et correctement attribuées au titre de
            l'article 30 (responsabilité) et de l'article 56 (déclaration par les États
            membres).
          </>,
          <>
            L'article 6 note chaque unité d'emballage selon sa recyclabilité. À compter du
            1er janvier 2030, chaque unité doit atteindre au minimum la Classe C (≥70 % de
            recyclabilité) ; à compter du 1er janvier 2038, la Classe C est interdite et seules
            les Classes A (≥95 %) et B (≥80 %) peuvent être placées sur le marché. Les calages
            mousse multi-matériaux, berceaux moteur en EPS, protections d'angles PE
            métallisées et étiquettes laminées d'identification sont aujourd'hui les plus
            exposés. Les actes délégués fixant les critères d'éco-conception sont attendus
            d'ici fin 2027, ce qui laisse environ 24 mois entre les critères finaux et la
            falaise de 2030.
          </>,
          <>
            L'article 7 impose un contenu recyclé minimum dans l'emballage plastique à compter
            du 1er janvier 2030 — 35 % pour les « autres emballages plastiques », catégorie
            qui couvre la plupart des emballages de transport rigides automobiles — qui passe
            à 65 % au 1er janvier 2040. La contrainte d'approvisionnement est réelle : le rPET
            de qualité contact alimentaire et haute spécification a la priorité sur les flux
            de matière recyclée, et les volumes de rPP et rABS dont a besoin le secteur
            automobile doivent être verrouillés bien avant 2030, avec une comptabilité par
            bilan massique au titre de l'acte d'exécution et une certification CEN ou ISCC de
            la chaîne de traçabilité.
          </>,
          <>
            En dessous de tout cela se trouve l'article 39 — chaque unité d'emballage placée
            sur le marché européen exige une Déclaration de conformité, soutenue par un
            dossier technique conservé 10 ans au titre de l'article 40. Pour un constructeur
            opérant six usines d'assemblage européennes ou plus et des dizaines de milliers de
            SKU emballages entrants, le seul volume de DoC est un chantier en soi. Nous le
            traitons comme le livrable qui boucle tous les autres articles. Voir notre{" "}
            <a
              href="/fr/services/ppwr-gap-analysis"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Analyse des écarts PPWR
            </a>{" "}
            pour le cadrage article par article, la{" "}
            <a
              href="/fr/services/reuse-targets-strategy"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Stratégie réemploi & rechargement
            </a>{" "}
            pour l'architecture de pool inter-usines, et la{" "}
            <a
              href="/fr/services/recycled-content-roadmap"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Feuille de route contenu recyclé
            </a>{" "}
            pour le dossier sourcing rPP et rABS.
          </>,
        ],
      },
      articlesEyebrow: "Les articles les plus contraignants",
      articlesTitle: "Cinq articles PPWR qui déterminent votre préparation 2030.",
      articlesIntro:
        "Chaque carte associe l'obligation contraignante au service précis que nous menons pour la couvrir.",
      whatWeDoLabel: "Ce que nous faisons.",
      goToLabel: (service) => `Aller à ${service}`,
      articlesThatBite: [
        {
          article: "Article 24",
          headline: "Ratio d'espace vide plafonné à 50 % pour les emballages de transport",
          deadline: "Applicable à compter du 12 août 2028",
          action:
            "Nous re-spécifions bacs réemployables, calages et inserts KLT pour que chaque boucle reste sous le seuil de 50 % sans casser le takt-time en ligne.",
          serviceHref: "/fr/services/recyclability-assessment",
          serviceLabel: "Évaluation de recyclabilité",
        },
        {
          article: "Article 29",
          headline:
            "Objectifs de réemploi 40 % (2030) et 70 % (2040) pour les emballages de transport et groupés",
          deadline: "À compter du 1er janvier 2030, puis 1er janvier 2040",
          action:
            "Nous concevons des systèmes de contenants mutualisés inter-usines, y compris l'architecture juridique des pools transfrontaliers entre sites constructeurs et fournisseurs de rang 1.",
          serviceHref: "/fr/services/reuse-targets-strategy",
          serviceLabel: "Stratégie réemploi & rechargement",
        },
        {
          article: "Article 6",
          headline: "Notation recyclabilité par conception (Classe A/B/C) pour chaque unité d'emballage",
          deadline:
            "Classe C minimum à compter du 1er janvier 2030 ; Classe C interdite à compter du 1er janvier 2038",
          action:
            "Nous notons EPS, mousses PP, laminés multi-matériaux et carton ondulé imprimé face aux critères d'éco-conception et faisons remonter les SKU Classe C en B.",
          serviceHref: "/fr/services/recyclability-assessment",
          serviceLabel: "Évaluation de recyclabilité",
        },
        {
          article: "Article 7",
          headline: "Seuils de contenu recyclé pour les emballages plastiques de transport",
          deadline: "À compter du 1er janvier 2030 (35 %), montée à 65 % au 1er janvier 2040",
          action:
            "Nous modélisons les réalités d'approvisionnement rPP et rABS, bâtissons des contrats double source avec certification bilan massique (CEN/ISCC) et sécurisons les volumes avant les pics de prix.",
          serviceHref: "/fr/services/recycled-content-roadmap",
          serviceLabel: "Feuille de route contenu recyclé",
        },
        {
          article: "Article 39",
          headline:
            "Déclaration de conformité exigée avant placement de l'emballage sur le marché",
          deadline: "À compter du 12 août 2026, conservée 10 ans (Art. 40)",
          action:
            "Nous montons le dossier technique par unité d'emballage, rédigeons la DoC et préparons les réponses de surveillance du marché avant qu'elles n'atteignent votre Qualité.",
          serviceHref: "/fr/services/declaration-of-conformity",
          serviceLabel: "Déclaration de conformité",
        },
      ],
      risksChip: "Risques propres au secteur",
      risksTitle: "Là où les groupes automobiles sous-estiment le règlement.",
      sectorRisks: [
        "Pénalités sur le réemploi des emballages de transport des fournisseurs de rang 1 : un objectif Art. 29 manqué sur les flux entrants peut se répercuter en surtaxes d'éco-modulation sur chaque usine que le constructeur exploite dans l'UE.",
        "Sécurité juridique des systèmes de contenants réemployables mutualisés à l'échelle UE : les pools transfrontaliers entre France, Allemagne, Espagne, Tchéquie et Slovaquie doivent être structurés pour éviter le double comptage au titre des articles 29-30 et satisfaire la déclaration des États membres au titre de l'article 56.",
        "Contraintes de livraison JIT et juste-en-séquence : la limite de 50 % d'espace vide de l'article 24 entre en collision avec les milk-runs mixtes en ligne, forçant une réingénierie du calage et de la modularité des unités de charge.",
        "Arbitrage palette EUR vs. emballage sur mesure : l'économie au tour des contenants plastiques sur mesure bascule fortement une fois que les objectifs rPP de l'Art. 7 et la notation Art. 6 s'appliquent au 1er janvier 2030.",
        "Emballage des composants batteries, électroniques et haute tension : les pièces plastiques en contact sensible et les emballages de transport ATEX exigent une lecture parallèle de la PPWR avec le règlement (UE) 2023/1542 sur les batteries.",
        "PFAS intentionnellement ajoutés dans les revêtements fluoropolymères de papiers anti-adhésifs et papiers cirés utilisés dans l'emballage moteur et électronique : les seuils de 25 ppb / 250 ppb / 50 ppm de l'article 5 s'appliquent à compter du 12 août 2026 dès lors que l'emballage est en contact alimentaire, et de plus en plus aux substrats industriels au fur et à mesure que les États membres durcissent l'application.",
      ],
      illustrativeChip: "Mission illustrative (anonymisée), pas un client réel",
      illustrativeTitle:
        "Comment nous traiterions un programme de contenants réemployables de rang 1.",
      illustrativeParagraphs: [
        "Un intégrateur de modules de rang 1 européen exploitant huit usines entre la France, l'Allemagne, l'Espagne et la Tchéquie, fournissant berceaux moteur et modules de portes à quatre constructeurs, vient nous voir six mois avant la date d'application générale du 12 août 2026. Son flux entrant repose sur un mix de KLT propriété constructeur, de racks acier soudés sur mesure, de caisses bois à usage unique de sous-fournisseurs et de volumes croissants de carton ondulé. Position de départ : 1 840 SKU emballages entrants distincts, aucun programme DoC consolidé, et un reporting de contenu recyclé limité à une seule catégorie de pièces de garniture intérieure injectées.",
        "Nous ouvrons par une feuille de route chiffrée en 5 jours bâtie directement sur les articles 5, 6, 7, 24, 29 et 39. Dans la première semaine, nous disposons d'une notation Classe A/B/C sur chaque SKU plastique, d'une heatmap des 312 SKU à risque Classe C en 2030, d'une exposition d'espace vide quantifiée sur les 87 racks les plus expédiés, et d'un scénario bilan massique comparant un sourcing rPP mono-source à 1 950 €/t à un contrat ISCC-PLUS double source. Le premier livrable est un briefing article par article de 14 pages que le directeur Emballages emporte dans la prochaine revue commerciale constructeur.",
        "À partir de là, la mission se déroule en trois vagues sur neuf mois : redesign des 87 racks et KLT au plus fort volume pour passer sous la limite des 50 % d'espace vide ; négociation d'une charte de contenants réemployables mutualisés multi-constructeurs alignée sur les articles 29 et 30 ; et constitution des dossiers techniques plus DoC pour chaque unité d'emballage que l'intégrateur place sur le marché européen. Sortie au mois neuf : un programme DoC signé, un volume rPP prévisionnel à 2030, et une piste d'audit que l'équipe conformité peut remettre à une autorité de surveillance du marché sans courrier de relance.",
      ],
      faqTitle: "PPWR automobile — questions fréquentes",
      sectorFaqs: [
        {
          question:
            "La PPWR s'applique-t-elle aux emballages de transport entrants entre fournisseurs de rang 1 et usines constructeurs ?",
          answer:
            "Oui. L'article 3 définit l'emballage de transport sans exclusion pour les flux B2B entrants, et l'article 29 fixe les objectifs de réemploi à 40 % (2030) et 70 % (2040) pour les emballages de transport et groupés. Un fournisseur de rang 1 livrant des assemblages moteur dans des racks acier réemployables vers une usine Stellantis à Hordain ou Volkswagen à Wolfsburg entre pleinement dans le périmètre.",
        },
        {
          question:
            "Comment traiter les KLT, bacs et systèmes de racks que nous partageons déjà avec plusieurs constructeurs ?",
          answer:
            "Les systèmes mutualisés sont explicitement prévus par les articles 29-30. Le taux de réemploi se calcule par opérateur économique plaçant l'emballage sur le marché pour la première fois ; le propriétaire juridique du pool — typiquement le constructeur ou un opérateur de pool tiers — porte donc l'obligation déclarative. Nous cartographions la propriété de chaque support de charge pour que le décompte soit sans ambiguïté et audit-ready.",
        },
        {
          question:
            "Pouvons-nous conserver nos calages EPS et mousse PE actuels au-delà de 2030 ?",
          answer:
            "Probablement pas, du moins pas sans modification. L'EPS pour calages moteur, boîte et électronique se note mal face au projet de critères d'éco-conception de l'article 6 et risque une notation Classe C, ce qui devient invendable à compter du 1er janvier 2038. Plus la décision de substitution est prise tôt — généralement vers le rPET thermoformé, le nid d'abeille en PP recyclé ou des supports acier/composites réemployables — plus l'amortissement d'outillage est faible.",
        },
        {
          question:
            "Les palettes EUR et stillages métalliques tombent-ils sous les règles de contenu recyclé de l'article 7 ?",
          answer:
            "L'article 7 ne s'applique qu'aux emballages plastiques, donc les palettes EUR bois et stillages métalliques nus sont hors du périmètre des seuils de contenu recyclé. Ils restent dans le périmètre de la notation recyclabilité Art. 6 lorsque feuillards plastiques, films étirables ou pièces composites sont impliqués, et du régime plus large des substances préoccupantes Art. 5.",
        },
        {
          question:
            "Qui signe la Déclaration de conformité sur un dispositif multi-usines UE ?",
          answer:
            "Le fabricant de l'unité d'emballage signe la DoC au titre de l'article 39, ou l'importateur lorsque le fabricant est établi hors UE. Pour des emballages propriété constructeur produits en interne dans plusieurs usines, la DoC est rédigée par unité d'emballage avec le site de fabrication concerné identifié dans le dossier technique, conservé 10 ans au titre de l'article 40.",
        },
      ],
      contactTitle: "Mettez votre emballage de rang 1 en conformité PPWR",
      contactDescription:
        "Réservez une session de travail de 30 minutes. Nous cartographions votre portefeuille d'emballages entrants face au règlement (UE) 2025/40 et livrons une feuille de route Articles 6, 7, 24 et 29 chiffrée sous 5 jours ouvrés.",
    };
  }

  return {
    metaTitle: "PPWR for automotive — Tier-1 packaging, returnables, transport loops | Pactum",
    metaDescription:
      "How Regulation (EU) 2025/40 reshapes Tier-1 inbound packaging, returnable container pools, recycled-content sourcing and Declaration of Conformity for automotive OEMs and suppliers.",
    ogAlt: "PPWR advisory for automotive — Pactum",
    twitterTitle: "PPWR for automotive — Pactum",
    twitterDescription:
      "Regulation (EU) 2025/40 applied to Tier-1 packaging, returnable pools and inbound logistics.",
    homeLabel: "Home",
    sectorsLabel: "Sectors",
    sectorLabel: "Automotive & mobility",
    serviceJsonLdName: "PPWR advisory for automotive",
    serviceJsonLdDescription:
      "Pure-play advisory on Regulation (EU) 2025/40 for automotive OEMs and Tier-1 suppliers — Article 6 recyclability, Article 7 recycled content, Article 24 empty space, Article 29 reuse and Article 39 Declaration of Conformity applied to inbound transport packaging and returnable container pools.",
    audienceType: "Automotive OEMs and Tier-1 suppliers",
    hero: {
      eyebrow: "SECTOR",
      title: "PPWR for automotive and mobility",
      subtitle:
        "Regulation (EU) 2025/40 reshapes inbound transport packaging, Tier-1 returnable container pools and recycled-content sourcing for engine, body, electronics and battery components. Renault, Stellantis, BMW, Volkswagen and Volvo Trucks operate Tier-1 packaging at scale — every loop matters.",
      primaryCta: "Book a working session",
      secondaryCta: "Free PPWR readiness check",
    },
    whatPpwr: {
      chip: "What PPWR means for automotive",
      title:
        "The Regulation lands hardest on inbound packaging, returnables and the rPP supply chain.",
      paragraphs: [
        <>
          Regulation (EU) 2025/40, published in OJ L on 22 January 2025 and entered into
          force on 11 February 2025, applies generally from 12 August 2026. For automotive
          and mobility, the centre of gravity is not retail-shelf packaging — it is the
          inbound flow of dunnage, totes, KLTs, racks, stretch wrap and corrugated that
          moves engines, transmissions, wiring harnesses, electronics modules, painted body
          panels and battery cells across hundreds of EU plants every day.
        </>,
        <>
          Article 24 caps the empty space ratio of grouped, transport and e-commerce
          packaging at 50% from 12 August 2028. For Tier-1 transport packaging engineered
          around fixed steel racks and standardised KLTs, that limit forces a wholesale
          re-design of internal dunnage and modular load-unit configurations. A typical
          engine carrier sized for the largest variant in a model range will, on smaller
          variants, exceed 50% empty space and therefore be non-compliant.
        </>,
        <>
          Article 29 then sets the operational ceiling: 40% of transport and grouped
          packaging must be reusable from 1 January 2030, rising to 70% from 1 January
          2040. Large household appliances are required to hit 90% transport-packaging
          reuse by 2030, and although automotive is not named as a stand-alone target,
          Tier-1 supply already runs largely on returnables — the question is whether the
          loops are auditable, cross-border-compliant and properly attributed under
          Article 30 (responsibility) and Article 56 (Member State reporting).
        </>,
        <>
          Article 6 grades every packaging unit for recyclability. From 1 January 2030
          every unit must reach at least Class C (≥70% recyclability); from 1 January 2038
          Class C is banned and only Class A (≥95%) and Class B (≥80%) are placed on the
          market. Multi-material foam dunnage, EPS engine cradles, metallised PE corner
          protectors and printed laminate identification labels are the most exposed
          today. Delegated acts setting the design-for-recycling criteria are expected by
          end-2027, leaving roughly 24 months between final criteria and the 2030 cliff.
        </>,
        <>
          Article 7 imposes minimum recycled content in plastic packaging from 1 January
          2030 — 35% for &ldquo;other plastic packaging&rdquo;, the bucket that captures most rigid
          automotive transport packaging — rising to 65% by 1 January 2040. The supply
          constraint is real: food-grade and high-spec rPET have priority claims on
          recyclate streams, and the rPP and rABS volumes the automotive sector needs
          must be locked in well before 2030, with mass-balance accounting under the
          implementing act and CEN or ISCC certification of the chain of custody.
        </>,
        <>
          Underneath all of that sits Article 39 — every packaging unit placed on the EU
          market requires a Declaration of Conformity, supported by a technical file
          retained for 10 years under Article 40. For an OEM operating six or more EU
          assembly plants and tens of thousands of inbound packaging SKUs, the DoC volume
          alone is a workstream. We treat it as the deliverable that closes the loop on
          every other Article. See our{" "}
          <a
            href="/en/services/ppwr-gap-analysis"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            PPWR Gap Analysis
          </a>{" "}
          for the article-by-article scoping, the{" "}
          <a
            href="/en/services/reuse-targets-strategy"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            Reuse & Refill Strategy
          </a>{" "}
          for the cross-plant pool architecture, and the{" "}
          <a
            href="/en/services/recycled-content-roadmap"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            Recycled Content Roadmap
          </a>{" "}
          for the rPP and rABS sourcing case.
        </>,
      ],
    },
    articlesEyebrow: "Articles that bite hardest",
    articlesTitle: "Five PPWR articles that determine your 2030 readiness.",
    articlesIntro:
      "Each card pairs the binding obligation with the specific service we run to close it.",
    whatWeDoLabel: "What we do about it.",
    goToLabel: (service) => `Go to ${service}`,
    articlesThatBite: [
      {
        article: "Article 24",
        headline: "Empty space ratio capped at 50% for transport packaging",
        deadline: "Applies from 12 August 2028",
        action:
          "We re-spec returnable totes, dunnage and KLT inserts so each loop sits inside the 50% limit without breaking takt-time at the line.",
        serviceHref: "/en/services/recyclability-assessment",
        serviceLabel: "Recyclability Assessment",
      },
      {
        article: "Article 29",
        headline: "Reuse targets 40% (2030) and 70% (2040) for transport and grouped packaging",
        deadline: "From 1 January 2030, then 1 January 2040",
        action:
          "We design pooled returnable systems across plants, including legal architecture for cross-border container pools between OEM and Tier-1 sites.",
        serviceHref: "/en/services/reuse-targets-strategy",
        serviceLabel: "Reuse & Refill Strategy",
      },
      {
        article: "Article 6",
        headline: "Recyclable-by-design grading (Class A/B/C) for every packaging unit",
        deadline:
          "Class C minimum from 1 January 2030; Class C banned from 1 January 2038",
        action:
          "We grade EPS, PP foam, multi-material laminates and printed corrugated against the design-for-recycling criteria and engineer Class C SKUs up to B.",
        serviceHref: "/en/services/recyclability-assessment",
        serviceLabel: "Recyclability Assessment",
      },
      {
        article: "Article 7",
        headline: "Recycled content thresholds for plastic transport packaging",
        deadline: "From 1 January 2030 (35%), rising to 65% by 1 January 2040",
        action:
          "We model rPP and rABS supply realities, build dual-source contracts with mass-balance certification (CEN/ISCC) and lock in volumes ahead of price spikes.",
        serviceHref: "/en/services/recycled-content-roadmap",
        serviceLabel: "Recycled Content Roadmap",
      },
      {
        article: "Article 39",
        headline: "Declaration of Conformity required before placing packaging on the market",
        deadline: "From 12 August 2026, retained for 10 years (Article 40)",
        action:
          "We assemble the technical file per packaging unit, draft the DoC and brief market-surveillance enquiries before they hit your Quality team.",
        serviceHref: "/en/services/declaration-of-conformity",
        serviceLabel: "Declaration of Conformity",
      },
    ],
    risksChip: "Sector-specific risks",
    risksTitle: "Where automotive groups underestimate the regulation.",
    sectorRisks: [
      "Tier-1 supplier transport packaging reuse penalties: a missed Article 29 target on inbound flows can cascade into eco-modulation surcharges across every plant the OEM operates in the EU.",
      "Legal certainty over EU-wide pooled returnable systems: cross-border container pools between France, Germany, Spain, Czechia and Slovakia must be structured to avoid double-counting under Articles 29-30 and to satisfy Member State reporting under Article 56.",
      "JIT and just-in-sequence delivery constraints: 50% empty-space limits under Article 24 collide with mixed-load milk-runs to the line, forcing a re-engineering of dunnage and load-unit modularity.",
      "EUR-pallet vs. custom packaging trade-off: the cost-per-trip economics of custom plastic load carriers shift sharply once Article 7 rPP targets and Article 6 grading apply at 1 January 2030.",
      "Battery, electronics and high-voltage component packaging: contact-sensitive plastic parts and ATEX-rated transport packaging demand a parallel reading of the PPWR alongside Regulation (EU) 2023/1542 on batteries.",
      "Intentionally added PFAS in fluoropolymer-coated release liners and wax papers used inside engine and electronics packaging: the 25 ppb / 250 ppb / 50 ppm thresholds of Article 5 apply from 12 August 2026 wherever the packaging is in food contact, and increasingly to industrial substrates as Member States tighten enforcement.",
    ],
    illustrativeChip: "Illustrative engagement, not a real client",
    illustrativeTitle: "How we'd approach a Tier-1 returnables programme.",
    illustrativeParagraphs: [
      "A European Tier-1 module integrator operating eight plants between France, Germany, Spain and Czechia, supplying engine cradles and door modules to four OEMs, comes to us six months before the 12 August 2026 general application date. Their inbound flow runs on a mix of OEM-owned KLTs, custom welded steel racks, single-trip wooden crates from sub-suppliers and increasing volumes of corrugated. Their starting position: 1,840 distinct inbound packaging SKUs, no consolidated DoC programme, and recycled-content reporting limited to a single category of injection-moulded interior trim parts.",
      "We open with a 5-day costed roadmap built directly on Articles 5, 6, 7, 24, 29 and 39. Within the first week we have a Class A/B/C grading on every plastic SKU, a heat-map of the 312 SKUs at risk of being Class C in 2030, a quantified empty-space exposure on the 87 most-shipped racks, and a mass-balance scenario comparing single-source rPP at €1,950/t against a dual-source ISCC-PLUS contract. The first deliverable is a 14-page article-by-article briefing that the Director of Packaging takes into the next OEM commercial review.",
      "From there the engagement runs in three waves over nine months: redesign of the 87 highest-volume racks and KLTs to clear the 50% empty-space limit; negotiation of a multi-OEM pooled returnable charter aligned with Articles 29 and 30; and assembly of the technical files plus DoC for every packaging unit the integrator places on the EU market. Output at month nine: a signed DoC programme, a forecastable rPP volume to 2030, and an audit trail their compliance team can hand to a market-surveillance authority without a follow-up letter.",
    ],
    faqTitle: "Automotive PPWR — frequently asked questions",
    sectorFaqs: [
      {
        question: "Does the PPWR apply to inbound transport packaging between Tier-1 suppliers and OEM plants?",
        answer:
          "Yes. Article 3 defines transport packaging without carve-outs for B2B inbound flows, and Article 29 sets the 40% (2030) and 70% (2040) reuse targets for transport and grouped packaging. A Tier-1 supplying engine assemblies in returnable steel racks to a Stellantis plant in Hordain or a Volkswagen plant in Wolfsburg falls squarely in scope.",
      },
      {
        question: "How do we treat KLT, totes and rack systems we already share with multiple OEMs?",
        answer:
          "Pooled systems are explicitly contemplated by Articles 29-30. The reuse rate is calculated per economic operator placing the packaging on the market for the first time, so the legal owner of the pool — typically the OEM or a third-party pool operator — bears the reporting obligation. We map ownership of every load carrier so the count is unambiguous and audit-ready.",
      },
      {
        question: "Can we keep our current EPS and PE foam dunnage past 2030?",
        answer:
          "Probably not, at least not unmodified. EPS for engine, gearbox and electronics dunnage grades poorly against the draft Article 6 design-for-recycling criteria and risks a Class C rating, which becomes unmarketable from 1 January 2038. The earlier substitution decision is taken — usually toward thermoformed rPET, recycled PP honeycomb or returnable steel/composite carriers — the lower the tooling write-off.",
      },
      {
        question: "Do EUR-pallets and metal stillages fall under Article 7 recycled content rules?",
        answer:
          "Article 7 applies to plastic packaging only, so wooden EUR-pallets and bare-metal stillages are out of scope of the recycled-content thresholds. They remain in scope of Article 6 recyclability grading where plastic strapping, stretch wrap or composite parts are involved, and of the broader Article 5 substances-of-concern regime.",
      },
      {
        question: "Who signs the Declaration of Conformity for packaging on a multi-plant EU footprint?",
        answer:
          "The manufacturer of the packaging unit signs the DoC under Article 39, or the importer where the manufacturer is established outside the Union. For OEM-owned packaging produced in-house at multiple plants, the DoC is drawn up per packaging unit with the relevant manufacturing site identified in the technical documentation, retained for 10 years per Article 40.",
      },
    ],
    contactTitle: "Get your Tier-1 packaging PPWR-ready",
    contactDescription:
      "Book a 30-minute working session. We map your inbound packaging portfolio against Regulation (EU) 2025/40 and deliver a costed Article-6, Article-7, Article-24 and Article-29 roadmap within 5 working days.",
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

export default async function AutomotiveSectorPage({
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
        imageSrc="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop"
      />

      {/* What PPWR means for automotive */}
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

      <AutomotiveStats locale={locale} />

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
