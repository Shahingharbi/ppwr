import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { EcommerceStats } from "@/components/pages/sectors/ecommerce/EcommerceStats";

const PAGE_PATH = "/sectors/ecommerce";

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
        "PPWR dans l'e-commerce — ratio d'espace vide, recyclabilité, FBA | Pactum",
      metaDescription:
        "Comment le règlement PPWR (UE) 2025/40 transforme l'emballage des colis e-commerce, les obligations des places de marché et des prestataires de services d'exécution de commandes — Art. 24 espace vide, Art. 6 carton ondulé et Art. 39 DoC. Règlement PPWR e-commerce pour les acteurs européens.",
      ogAlt: "Conseil PPWR pour l'e-commerce — Pactum",
      twitterTitle: "PPWR e-commerce — Pactum",
      twitterDescription:
        "Règlement (UE) 2025/40 appliqué aux colis dernier kilomètre, marketplaces et prestataires de services d'exécution.",
      homeLabel: "Accueil",
      sectorsLabel: "Secteurs",
      sectorLabel: "E-commerce & marketplaces",
      serviceJsonLdName: "Conseil PPWR pour l'e-commerce",
      serviceJsonLdDescription:
        "Conseil pure-play sur le règlement (UE) 2025/40 pour les enseignes e-commerce, places de marché et prestataires de services d'exécution de commandes — espace vide Art. 24, recyclabilité carton Art. 6, obligations prestataires d'exécution Art. 4 lu avec règlement (UE) 2019/1020 et Déclaration de conformité Art. 39.",
      audienceType:
        "Enseignes e-commerce, places de marché en ligne, prestataires de services d'exécution de commandes",
      hero: {
        eyebrow: "SECTEUR",
        title: "PPWR dans l'e-commerce — ratio d'espace vide, recyclabilité, FBA",
        subtitle:
          "Le règlement (UE) 2025/40 frappe l'e-commerce sur trois fronts : ratio d'espace vide de 50 % au titre de l'article 24, notation recyclabilité du carton ondulé et des pochettes au titre de l'article 6, et obligations explicites pesant sur les prestataires de services d'exécution de commandes au titre de l'article 4 lu avec le règlement (UE) 2019/1020. La logique de right-sizing est désormais un paramètre réglementaire.",
        primaryCta: "Réserver une session de travail",
        secondaryCta: "Diagnostic PPWR gratuit",
      },
      whatPpwr: {
        chip: "Ce que la PPWR change pour l'e-commerce",
        title:
          "Le règlement réécrit chaque ligne de votre stack de coût d'exécution.",
        paragraphs: [
          <>
            Le règlement (UE) 2025/40, publié au JO L le 22 janvier 2025 et entré en vigueur
            le 11 février 2025, s'applique de manière générale à compter du 12 août 2026. Pour
            les enseignes e-commerce, places de marché et prestataires de services d'exécution
            de commandes, c'est le texte européen le plus opérationnellement disruptif depuis
            le paquet TVA e-commerce — parce qu'il modifie simultanément les paramètres de
            l'algorithme de right-sizing, la matrice de cartons, le choix de calage et la
            chaîne d'opérateurs.
          </>,
          <>
            La disposition la plus disruptive est l'article 24. À compter du 12 août 2028, le
            ratio d'espace vide des emballages groupés, de transport et e-commerce est plafonné
            à 50 %, mesuré par unité d'emballage. Un centre d'exécution typique tournant sur
            une matrice de 12 cartons et une règle de right-sizing fixe produit des ratios
            d'espace vide de 35-55 % sur les colis de petites commandes — cette distribution
            doit basculer entièrement sous 50 % avant août 2028, sous peine de non-conformité
            par colis au-dessus de la ligne. Le coût n'est pas le calage papier ; le coût est
            la réingénierie de la matrice de cartons et de l'algorithme qui s'en sert.
          </>,
          <>
            L'article 6 note ensuite chaque unité d'emballage — colis carton ondulé, pochettes
            plastique, enveloppes matelassées, calage, ruban papier — pour la recyclabilité.
            Les classes de recyclabilité sont A (≥95 %), B (≥80 %) et C (≥70 %) ; à compter du
            1er janvier 2030, chaque unité doit atteindre la Classe C, et à compter du 1er
            janvier 2038, la Classe C est interdite sur le marché. Les colis de marque
            s'appuyant sur encres métalliques, dorure à chaud ou impression laminée pleine
            couverture sont aujourd'hui les plus exposés. Les actes délégués fixant les
            critères d'éco-conception sont attendus d'ici fin 2027.
          </>,
          <>
            L'article 4, lu avec le règlement (UE) 2019/1020, désigne explicitement les
            prestataires de services d'exécution de commandes comme opérateurs économiques
            obligés au même titre que les fabricants, importateurs, distributeurs et
            mandataires. Les places de marché vendant pour le compte de vendeurs hors UE et la
            chaîne d'exécution type Amazon-FBA opérant sous un même toit héritent de la DoC,
            du dossier technique au titre de l'article 40 et des éco-contributions modulées au
            titre de l'article 45. Lorsque le vendeur est établi hors UE et n'a pas désigné de
            mandataire, l'obligation remonte la chaîne.
          </>,
          <>
            L'article 7 fixe des seuils minimums de contenu recyclé dans l'emballage plastique
            à compter du 1er janvier 2030 — 35 % pour les « autres emballages plastiques »,
            catégorie qui couvre les pochettes plastique, polybags, films étirables et rubans —
            avec une montée à 65 % au 1er janvier 2040. Les articles 39 et 40 bouclent la
            boucle : chaque unité d'emballage placée sur le marché exige une Déclaration de
            conformité étayée par un dossier technique conservé 10 ans. Pour une place de
            marché qui place chaque jour des milliers d'unités d'expédition spécifiques au SKU
            sur le marché européen, le programme DoC est un chantier industriel, pas une tâche
            de back-office. Nous le pilotons en trois flux — une{" "}
            <a
              href="/fr/services/ppwr-gap-analysis"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Analyse des écarts PPWR
            </a>{" "}
            pour cadrer, une{" "}
            <a
              href="/fr/services/recyclability-assessment"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Évaluation de recyclabilité
            </a>{" "}
            pour noter, et un programme{" "}
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
        "Cinq articles PPWR qui déterminent votre conformité colis.",
      articlesIntro:
        "Chaque carte associe l'obligation contraignante au service précis que nous menons pour la couvrir.",
      whatWeDoLabel: "Ce que nous faisons.",
      goToLabel: (service) => `Aller à ${service}`,
      articlesThatBite: [
        {
          article: "Article 24",
          headline:
            "Colis e-commerce plafonnés à 50 % de ratio d'espace vide — mesuré par unité d'emballage",
          deadline: "Applicable à compter du 12 août 2028",
          action:
            "Nous re-spécifions votre gamme de cartons, l'algorithme de right-sizing et le mix de calages pour que chaque colis reste sous le seuil des 50 % sans casser le throughput pick-and-pack.",
          serviceHref: "/fr/services/ppwr-gap-analysis",
          serviceLabel: "Analyse des écarts PPWR",
        },
        {
          article: "Article 6",
          headline:
            "Notation recyclabilité par conception (Classe A/B/C) pour carton ondulé et pochettes plastique",
          deadline:
            "Classe C minimum à compter du 1er janvier 2030 ; Classe C interdite à compter du 1er janvier 2038",
          action:
            "Nous notons carton ondulé imprimé, pochettes plastique, enveloppes matelassées et ruban face aux projets de critères d'éco-conception et faisons remonter les SKU Classe C en B.",
          serviceHref: "/fr/services/recyclability-assessment",
          serviceLabel: "Évaluation de recyclabilité",
        },
        {
          article: "Article 4 + Règl. (UE) 2019/1020",
          headline:
            "Prestataires de services d'exécution de commandes explicitement obligés ; marketplaces responsables des vendeurs hors UE",
          deadline: "Applicable à compter du 12 août 2026",
          action:
            "Nous cartographions la chaîne d'opérateurs (vendeur, place de marché, prestataire d'exécution, mandataire), répartissons la propriété DoC et rédigeons les clauses contractuelles côté approvisionnement.",
          serviceHref: "/fr/services/declaration-of-conformity",
          serviceLabel: "Déclaration de conformité",
        },
        {
          article: "Article 7",
          headline:
            "Pochettes plastique et ruban : 35 % de contenu recyclé (2030), 65 % (2040)",
          deadline: "À compter du 1er janvier 2030, puis 1er janvier 2040",
          action:
            "Nous modélisons l'approvisionnement rPE et rPP, bâtissons des contrats bilan massique avec certification ISCC PLUS ou CEN/TS et sécurisons les volumes avant la pénurie de 2028.",
          serviceHref: "/fr/services/recycled-content-roadmap",
          serviceLabel: "Feuille de route contenu recyclé",
        },
        {
          article: "Article 39",
          headline:
            "Déclaration de conformité exigée avant placement de l'emballage sur le marché",
          deadline: "À compter du 12 août 2026, conservée 10 ans (Art. 40)",
          action:
            "Nous montons le dossier technique par unité d'emballage, rédigeons la DoC et préparons les réponses de surveillance du marché avant qu'elles n'atteignent vos opérations.",
          serviceHref: "/fr/services/declaration-of-conformity",
          serviceLabel: "Déclaration de conformité",
        },
      ],
      risksChip: "Risques propres au secteur",
      risksTitle: "Là où les groupes e-commerce sous-estiment le règlement.",
      sectorRisks: [
        "Exposition de l'algorithme de right-sizing : un centre d'exécution qui sélectionne dans une matrice de 12 cartons génère typiquement 35-50 % d'espace vide sur les colis de petites commandes — chaque colis au-dessus de 50 % est non conforme à compter du 12 août 2028 au titre de l'article 24.",
        "Bascule économique du calage : calage papier, coussins d'air et mousses biosourcées ne sont pas tous équivalents face à la notation Art. 6, et le calcul coût-par-colis change une fois l'éco-modulation Art. 45 superposée au coût unitaire.",
        "Double manutention de la logistique des retours : un colis sortant et une pochette retour par article font deux unités d'emballage placées sur le marché européen — toutes deux exigent une DoC au titre de l'article 39, et les stratégies de réemploi des pochettes retour ne peuvent être bâties au titre de l'article 29 qu'avec un suivi de boucle correct.",
        "Responsabilité des places de marché pour les vendeurs hors UE : au titre de l'article 4 lu avec le règlement (UE) 2019/1020, la place de marché et le prestataire de services d'exécution de commandes peuvent être traités comme l'opérateur économique obligé lorsque le vendeur est établi hors UE et n'a pas désigné de mandataire.",
        "Sur-emballage de marque : les colis de marque côté client (luxe, électronique premium) échouent souvent à la notation Art. 6 à cause d'encres métalliques, dorures à chaud et finitions laminées — une notation Classe C tue le SKU en linéaire UE à compter du 1er janvier 2038.",
        "Exécution transfrontalière et fragmentation des registres État membre : les registres REP de l'article 45 restent nationaux, donc un vendeur expédiant depuis un hub unique vers les 27 États membres doit s'enregistrer, déclarer et payer des éco-contributions modulées sur chaque marché où le colis arrive.",
      ],
      illustrativeChip: "Mission illustrative (anonymisée), pas un client réel",
      illustrativeTitle:
        "Comment nous traiterions une place de marché paneuropéenne.",
      illustrativeParagraphs: [
        "Une place de marché paneuropéenne exploitant quatre centres d'exécution UE en Allemagne, Pologne, France et Espagne, expédiant 240 000 colis par jour vers les 27 États membres, vient nous voir 24 mois avant la falaise du ratio d'espace vide du 12 août 2028. Position de départ : une matrice de 14 tailles de cartons, un algorithme de right-sizing calé sur l'utilisation de cube plutôt que sur le ratio d'espace vide, des fournisseurs de calage tiers sur trois catégories, et 320 000 vendeurs tiers actifs — la moitié établis hors UE, moins de la moitié avec un mandataire en dossier.",
        "Nous ouvrons par une feuille de route chiffrée en 5 jours sur les articles 4, 6, 7, 24 et 39. Dans la première semaine, nous modélisons la distribution d'espace vide sur un mois complet de colis sortants, identifions les 38 % de colis au-dessus de 50 %, simulons trois matrices de cartons alternatives et chiffrons le coût throughput de chaque changement de règle de right-sizing. Le premier livrable est un briefing article par article de 16 pages que le directeur des Opérations emporte dans la prochaine revue d'allocation capital, avec une exposition de non-conformité chiffrée pour août 2028.",
        "À partir de là, la mission se déroule en trois flux parallèles sur quinze mois : un redesign matrice de cartons et right-sizing fermant l'écart d'espace vide sous 50 % avec préservation chiffrée du throughput ; un programme DoC côté exécution couvrant tous les emballages d'expédition à la marque marketplace, avec dossiers techniques conservés dix ans au titre de l'article 40 ; et une refonte de l'onboarding vendeurs qui flague les vendeurs hors UE sans mandataire et fait remonter l'obligation conformité emballage à la place de marché au titre de l'article 4. Sortie au mois quinze : une distribution d'espace vide défendable, une trajectoire rPE et rPP prévisible à 2030, et une cartographie d'opérateurs propre que l'équipe juridique peut remettre à une autorité de surveillance du marché à la demande.",
      ],
      faqTitle: "PPWR e-commerce — questions fréquentes",
      sectorFaqs: [
        {
          question:
            "La limite de 50 % d'espace vide s'applique-t-elle à chaque colis ou seulement en moyenne sur un centre d'exécution ?",
          answer:
            "L'article 24 applique le ratio d'espace vide de 50 % par unité d'emballage — c'est-à-dire par colis — pas en moyenne. Un colis right-sizé livre-et-chargeur dans le plus petit carton disponible peut être conforme, alors que le colis suivant du même chargeur seul dans le même carton peut ne pas l'être. L'évaluation de conformité se fait par colis placé sur le marché à compter du 12 août 2028.",
        },
        {
          question:
            "Les places de marché en ligne sont-elles des opérateurs économiques obligés au titre de la PPWR ?",
          answer:
            "Oui, lorsqu'elles satisfont aux conditions de l'article 4 de la PPWR lu avec le règlement (UE) 2019/1020 sur la surveillance du marché. Les places de marché sont responsables de garantir que l'emballage placé sur le marché européen via leur plateforme respecte les articles 5-13, en particulier lorsque le vendeur est établi hors UE. Les prestataires de services d'exécution de commandes sont explicitement nommés dans le règlement et portent des obligations indépendantes.",
        },
        {
          question:
            "Où se situe la Déclaration de conformité quand vendeur, marketplace et prestataire d'exécution sont des entités différentes ?",
          answer:
            "Au titre de l'article 39, le fabricant de l'unité d'emballage signe la DoC, ou l'importateur quand le fabricant est établi hors UE. Dans une chaîne e-commerce, la DoC se situe chez celui qui place le premier l'unité d'emballage sur le marché européen — généralement le vendeur pour l'emballage produit primaire et le centre d'exécution ou le carton à la marque marketplace pour l'emballage d'expédition secondaire. Nous cartographions la propriété unité par unité pour qu'il n'y ait pas d'ambiguïté.",
        },
        {
          question:
            "Pouvons-nous utiliser le même carton d'expédition pour l'envoi et le retour client afin de compter une boucle de réemploi ?",
          answer:
            "Le décompte du réemploi de l'article 29 exige que l'unité d'emballage soit conçue, conformément à l'article 11, pour de multiples rotations et soit opérée dans un système de réemploi auditable au titre de l'article 30. Une pochette retour utilisée une fois pour la livraison et une fois pour le retour peut qualifier si le système est documenté, l'unité respecte les critères de durabilité et la rotation est captée par l'infrastructure de reporting au titre de l'article 56. Sans cette infrastructure, un retour n'est qu'un second trajet à usage unique.",
        },
        {
          question:
            "L'article 6 sur la recyclabilité s'applique-t-il à la fois à l'emballage produit et au carton d'expédition ?",
          answer:
            "Oui. L'article 6 s'applique à chaque unité d'emballage — emballage produit primaire, emballage groupé secondaire et emballage d'expédition tertiaire — placée sur le marché européen. Le colis carton ondulé, la pochette plastique, le calage papier et le manchon imprimé intérieur sont notés séparément en Classe A/B/C. À compter du 1er janvier 2030, chaque unité doit atteindre la Classe C ; à compter du 1er janvier 2038, seuls les Classes A et B restent sur le marché.",
        },
      ],
      contactTitle: "Mettez votre chaîne d'exécution en conformité PPWR",
      contactDescription:
        "Réservez une session de travail de 30 minutes. Nous cartographions votre portefeuille emballages e-commerce face au règlement (UE) 2025/40 — espace vide, recyclabilité, obligations prestataires d'exécution et DoC — et livrons une feuille de route chiffrée sous 5 jours ouvrés.",
    };
  }

  return {
    metaTitle:
      "PPWR for e-commerce — empty space ratio, fulfilment service providers, parcels | Pactum",
    metaDescription:
      "How Regulation (EU) 2025/40 reshapes e-commerce parcel packaging, marketplace seller obligations and fulfilment service provider duties — Article 24 empty space, Article 6 corrugated recyclability and Article 39 DoC.",
    ogAlt: "PPWR advisory for e-commerce — Pactum",
    twitterTitle: "PPWR for e-commerce — Pactum",
    twitterDescription:
      "Regulation (EU) 2025/40 applied to last-mile parcels, marketplaces and fulfilment service providers.",
    homeLabel: "Home",
    sectorsLabel: "Sectors",
    sectorLabel: "E-commerce & marketplaces",
    serviceJsonLdName: "PPWR advisory for e-commerce",
    serviceJsonLdDescription:
      "Pure-play advisory on Regulation (EU) 2025/40 for e-commerce retailers, marketplaces and fulfilment service providers — Article 24 empty space, Article 6 corrugated recyclability, Article 4 fulfilment service provider obligations under Regulation (EU) 2019/1020 and Article 39 Declaration of Conformity.",
    audienceType:
      "E-commerce retailers, online marketplaces, fulfilment service providers",
    hero: {
      eyebrow: "SECTOR",
      title: "PPWR for e-commerce and marketplaces",
      subtitle:
        "Regulation (EU) 2025/40 hits e-commerce on three fronts: the 50% empty-space ratio under Article 24, recyclability grading of corrugated and mailers under Article 6, and explicit obligations on fulfilment service providers under Article 4 read with Regulation (EU) 2019/1020. Right-sizing logic is a regulatory parameter now.",
      primaryCta: "Book a working session",
      secondaryCta: "Free PPWR readiness check",
    },
    whatPpwr: {
      chip: "What PPWR means for e-commerce",
      title: "The Regulation rewrites every line of your fulfilment cost stack.",
      paragraphs: [
        <>
          Regulation (EU) 2025/40, published in OJ L on 22 January 2025 and entered into
          force on 11 February 2025, applies generally from 12 August 2026. For
          e-commerce retailers, marketplaces and fulfilment service providers it is the
          single most operationally disruptive piece of EU legislation since the VAT
          e-commerce package — because it changes the parameters of the right-sizing
          algorithm, the carton matrix, the void-fill choice and the operator chain at
          the same time.
        </>,
        <>
          The most disruptive provision is Article 24. From 12 August 2028, the empty
          space ratio of grouped, transport and e-commerce packaging is capped at 50%,
          measured per packaging unit. A standard fulfilment centre running on a
          12-carton matrix and a fixed right-sizing rule typically produces 35-55%
          empty-space ratios on small-order parcels — that distribution must shift
          entirely below 50% before August 2028, or each parcel above the line is
          non-compliant. The cost is not paper void fill; the cost is re-engineering
          the carton matrix and the algorithm that selects from it.
        </>,
        <>
          Article 6 then grades every packaging unit — corrugated parcels, plastic
          mailers, padded envelopes, void fill, paper tape — for recyclability.
          Recyclability classes are A (≥95%), B (≥80%) and C (≥70%); from 1 January
          2030 every unit must reach Class C, and from 1 January 2038 Class C is banned
          from the market. Branded shipping cartons that lean on metallic inks, foil
          stamping or full-coverage laminated print are the most exposed today.
          Delegated acts setting the design-for-recycling criteria are expected by
          end-2027.
        </>,
        <>
          Article 4, read together with Regulation (EU) 2019/1020, names fulfilment
          service providers explicitly as obligated economic operators alongside
          manufacturers, importers, distributors and authorised representatives.
          Marketplaces selling on behalf of non-EU sellers and the Amazon-FBA-style
          fulfilment chain operating under one roof inherit the DoC, the technical
          documentation under Article 40, and the eco-modulated EPR fees under Article
          45. Where the seller is established outside the Union and has not appointed
          an authorised representative, the obligation flows up the chain.
        </>,
        <>
          Article 7 sets minimum recycled-content thresholds in plastic packaging from
          1 January 2030 — 35% for &ldquo;other plastic packaging&rdquo;, the bucket that captures
          plastic mailers, polybags, stretch wrap and tape — rising to 65% by 1
          January 2040. Article 39 and Article 40 close the loop: every packaging unit
          placed on the market needs a Declaration of Conformity supported by a
          technical file retained for 10 years. For a marketplace placing thousands of
          SKU-specific shipping units on the EU market every day, the DoC programme is
          an industrial workstream, not a back-office task. We run them in three
          streams — a{" "}
          <a
            href="/en/services/ppwr-gap-analysis"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            PPWR Gap Analysis
          </a>{" "}
          to scope, a{" "}
          <a
            href="/en/services/recyclability-assessment"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            Recyclability Assessment
          </a>{" "}
          to grade, and a{" "}
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
    articlesTitle: "Five PPWR articles that determine your parcel-readiness.",
    articlesIntro:
      "Each card pairs the binding obligation with the specific service we run to close it.",
    whatWeDoLabel: "What we do about it.",
    goToLabel: (service) => `Go to ${service}`,
    articlesThatBite: [
      {
        article: "Article 24",
        headline:
          "E-commerce parcels capped at 50% empty space ratio — measured per packaging unit",
        deadline: "Applies from 12 August 2028",
        action:
          "We re-spec your carton range, right-sizing algorithm and void-fill mix so each parcel sits inside the 50% limit without breaking pick-and-pack throughput.",
        serviceHref: "/en/services/ppwr-gap-analysis",
        serviceLabel: "PPWR Gap Analysis",
      },
      {
        article: "Article 6",
        headline:
          "Recyclable-by-design grading (Class A/B/C) for corrugated and plastic mailers",
        deadline:
          "Class C minimum from 1 January 2030; Class C banned from 1 January 2038",
        action:
          "We grade printed corrugated, plastic mailers, padded envelopes and tape against draft design-for-recycling criteria and engineer Class C SKUs up to B.",
        serviceHref: "/en/services/recyclability-assessment",
        serviceLabel: "Recyclability Assessment",
      },
      {
        article: "Article 4 + Reg. (EU) 2019/1020",
        headline:
          "Fulfilment service providers explicitly obligated; marketplaces accountable for non-EU sellers",
        deadline: "Applies from 12 August 2026",
        action:
          "We map the operator chain (seller, marketplace, FSP, authorised representative), assign DoC ownership and draft the supply-side contractual clauses.",
        serviceHref: "/en/services/declaration-of-conformity",
        serviceLabel: "Declaration of Conformity",
      },
      {
        article: "Article 7",
        headline:
          "Plastic mailers and tape: 35% recycled content (2030), 65% (2040)",
        deadline: "From 1 January 2030, then 1 January 2040",
        action:
          "We model rPE and rPP supply, build mass-balance contracts with ISCC PLUS or CEN/TS certification and lock in volumes ahead of the 2028 supply squeeze.",
        serviceHref: "/en/services/recycled-content-roadmap",
        serviceLabel: "Recycled Content Roadmap",
      },
      {
        article: "Article 39",
        headline:
          "Declaration of Conformity required before placing packaging on the market",
        deadline: "From 12 August 2026, retained for 10 years (Article 40)",
        action:
          "We assemble the technical file per packaging unit, draft the DoC and brief market-surveillance enquiries before they hit your operations team.",
        serviceHref: "/en/services/declaration-of-conformity",
        serviceLabel: "Declaration of Conformity",
      },
    ],
    risksChip: "Sector-specific risks",
    risksTitle: "Where e-commerce groups underestimate the regulation.",
    sectorRisks: [
      "Right-sizing algorithm exposure: a fulfilment centre that picks from a 12-carton size matrix typically generates 35-50% empty-space ratios on small-order parcels — every parcel above 50% is non-compliant from 12 August 2028 under Article 24.",
      "Void-fill economics flip: paper void fill, air pillows and bio-foam are not all equal under Article 6 grading, and the cost-per-parcel calculation changes once eco-modulation under Article 45 is layered on top of unit cost.",
      "Returns logistics double-handling: one outbound parcel and one returns mailer per item is two packaging units placed on the EU market — both need DoC under Article 39, and reuse strategies for returns mailers can be built under Article 29 only with proper loop tracking.",
      "Marketplace liability for non-EU sellers: under Article 4 read with Regulation (EU) 2019/1020, the marketplace and the fulfilment service provider can be treated as the obligated economic operator when the seller is established outside the Union and has not appointed an authorised representative.",
      "Branded over-boxing: customer-facing branded shipping cartons (e.g. luxury, premium electronics) often fail Article 6 grading because of metallic inks, foil stamping and laminated finishes — a Class-C grade kills the SKU on the EU shelf from 1 January 2038.",
      "Cross-border fulfilment and Member State register fragmentation: Article 45 EPR registers remain national, so a seller fulfilling from a single hub into 27 Member States must register, report and pay eco-modulated fees in each market where the parcel lands.",
    ],
    illustrativeChip: "Illustrative engagement, not a real client",
    illustrativeTitle: "How we'd approach a pan-European marketplace.",
    illustrativeParagraphs: [
      "A pan-European marketplace operating four EU fulfilment centres in Germany, Poland, France and Spain, dispatching 240,000 parcels a day across 27 Member States, comes to us 24 months before the 12 August 2028 empty-space ratio cliff. Their starting position: a 14-carton size matrix, a right-sizing algorithm tuned for cube utilisation rather than empty-space ratio, third-party void-fill suppliers across three categories, and 320,000 active third-party sellers — half established outside the Union, fewer than half with an authorised representative on file.",
      "We open with a 5-day costed roadmap on Articles 4, 6, 7, 24 and 39. Inside the first week we model the empty-space distribution across one full month of outbound parcels, identify the 38% of parcels above 50%, simulate three alternative carton matrices and quantify the throughput cost of each right-sizing rule change. The first deliverable is a 16-page article-by-article briefing the Director of Operations takes into the next capital allocation review, alongside a quantified non-compliance exposure for August 2028.",
      "From there the engagement runs in three parallel streams over fifteen months: a carton-matrix and right-sizing redesign closing the empty-space gap below 50% with quantified throughput preservation; a fulfilment-side DoC programme covering all marketplace-branded shipping packaging, with technical files retained for ten years per Article 40; and a seller-onboarding overhaul that flags non-EU sellers without an authorised representative and pulls the packaging-compliance obligation into the marketplace under Article 4. Output at month fifteen: a defensible empty-space distribution, a forecastable rPE and rPP path to 2030, and a clean operator-chain map the legal team can hand to a market-surveillance authority on request.",
    ],
    faqTitle: "E-commerce PPWR — frequently asked questions",
    sectorFaqs: [
      {
        question:
          "Does the 50% empty-space limit apply to every parcel, or only on average across a fulfilment centre?",
        answer:
          "Article 24 applies the 50% empty-space ratio per packaging unit — i.e. per parcel — not as an average. A right-sized parcel of book-and-charger fitted into the smallest available carton may comply, while the next parcel of the same charger alone in the same carton may not. The compliance assessment is per parcel placed on the market from 12 August 2028.",
      },
      {
        question:
          "Are online marketplaces obligated economic operators under the PPWR?",
        answer:
          "Yes, when they meet the conditions of Article 4 of the PPWR read together with Regulation (EU) 2019/1020 on market surveillance. Marketplaces are accountable for ensuring that packaging placed on the EU market through their platform complies with Articles 5-13, particularly where the seller is established outside the Union. Fulfilment service providers are explicitly named in the regulation and bear independent obligations.",
      },
      {
        question:
          "Where does the Declaration of Conformity sit when the seller, marketplace and fulfilment provider are different entities?",
        answer:
          "Under Article 39 the manufacturer of the packaging unit signs the DoC, or the importer where the manufacturer is established outside the Union. In an e-commerce supply chain the DoC sits with whoever first places the packaging unit on the EU market — usually the seller for primary product packaging and the fulfilment centre or marketplace-branded carton for secondary shipping packaging. We map ownership unit-by-unit so it is unambiguous.",
      },
      {
        question:
          "Can we use the same shipping carton for outbound and customer returns to count as a reuse loop?",
        answer:
          "Article 29 reuse counting requires the packaging unit to be designed, in line with Article 11, for multiple rotations and to be operated within an auditable reuse system under Article 30. A returns mailer used once for delivery and once for return can qualify if the system is documented, the unit meets durability criteria and the rotation is captured by the reporting infrastructure under Article 56. Without that infrastructure, a return is just a second one-way trip.",
      },
      {
        question:
          "Does Article 6 recyclability apply to both the product packaging and the shipping carton?",
        answer:
          "Yes. Article 6 applies to every packaging unit — primary product packaging, secondary grouped packaging and tertiary shipping packaging — placed on the EU market. The corrugated parcel, the plastic mailer, the paper void fill and the brand-printed inner sleeve are each separately graded Class A/B/C. From 1 January 2030 every unit must reach Class C; from 1 January 2038 only Class A and B remain on the market.",
      },
    ],
    contactTitle: "Get your fulfilment chain PPWR-ready",
    contactDescription:
      "Book a 30-minute working session. We map your e-commerce packaging portfolio against Regulation (EU) 2025/40 — empty space, recyclability, fulfilment service provider obligations and DoC — and deliver a costed roadmap within 5 working days.",
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

export default async function EcommerceSectorPage({
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
        imageSrc="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80&auto=format&fit=crop"
      />

      {/* What PPWR means for e-commerce */}
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

      <EcommerceStats locale={locale} />

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
