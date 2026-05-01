import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { localizeHref } from "@/lib/site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const title = isFr
    ? "Glossaire PPWR — chaque terme défini du Règlement (UE) 2025/40"
    : "PPWR glossary — every defined term in Regulation (EU) 2025/40";
  const description = isFr
    ? "Glossaire PPWR : définitions claires de chaque terme défini du Règlement (UE) 2025/40 — du mandataire au sac plastique très léger, avec références d'articles. règlement ppwr, ppwr signification, ppwr texte."
    : "Plain-English definitions of every defined term in the PPWR — from authorised representative to very lightweight plastic carrier bag, with article references.";

  return {
    title,
    description,
    keywords: isFr
      ? [
          "glossaire ppwr",
          "ppwr signification",
          "règlement ppwr",
          "ppwr texte",
          "PPWR France",
          "ppwr emballage",
          "loi ppwr",
        ]
      : undefined,
    alternates: {
      canonical: `/${locale}/resources/ppwr-glossary`,
      languages: {
        fr: "/fr/resources/ppwr-glossary",
        en: "/en/resources/ppwr-glossary",
        "x-default": "/fr/resources/ppwr-glossary",
      },
    },
    openGraph: {
      title: isFr
        ? "Glossaire PPWR — termes définis du Règlement (UE) 2025/40"
        : "PPWR glossary — defined terms in Regulation (EU) 2025/40",
      description: isFr
        ? "Plus de trente termes définis de la PPWR, chacun rattaché à l'article qui le définit ou l'utilise pour la première fois."
        : "Thirty-plus PPWR defined terms with the article that defines or first uses each one.",
      url: `https://pactum-advisory.eu/${locale}/resources/ppwr-glossary`,
      type: "article",
    },
  };
}

type Term = {
  term: string;
  article: string;
  definition: string;
};

const TERMS_EN: Term[] = [
  {
    term: "Authorised representative",
    article: "Art. 18",
    definition:
      "A natural or legal person established in the Union who has received a written mandate from a manufacturer to act on its behalf in relation to specific obligations under the Regulation. Required where the manufacturer is established outside the Union and an importer does not assume the equivalent role.",
  },
  {
    term: "Brand owner",
    article: "Art. 3",
    definition:
      "An economic operator that places packaged products on the market under its own name or trademark and is therefore commercially associated with the packaging unit by the end-user.",
  },
  {
    term: "Compostable packaging",
    article: "Art. 9",
    definition:
      "Packaging capable of undergoing physical, chemical, thermal or biological decomposition such that it ultimately decomposes into carbon dioxide, biomass and water in industrial composting conditions, and meets the technical specifications set under the Regulation.",
  },
  {
    term: "Contact-sensitive packaging",
    article: "Annex II",
    definition:
      "Packaging used for products listed in Annex II of the Regulation — predominantly food, feed, pharmaceutical and medical-device products — where direct or indirect contact with the packaged product imposes additional safety, hygiene or quality constraints. Drives the lower recycled-content target under Article 7.",
  },
  {
    term: "Declaration of Conformity (DoC)",
    article: "Art. 39",
    definition:
      "A written declaration drawn up by the manufacturer (or importer) before placing packaging on the EU market, stating that the packaging satisfies the applicable requirements of Regulation (EU) 2025/40 and identifying the harmonised standards or technical specifications applied.",
  },
  {
    term: "Deposit return scheme (DRS)",
    article: "Art. 50",
    definition:
      "A national or regional scheme requiring a deposit on selected packaging units — primarily single-use plastic beverage bottles up to 3 L and metal beverage cans — refunded to the consumer on return of the empty packaging through approved collection points.",
  },
  {
    term: "Design for recycling (DfR)",
    article: "Art. 6",
    definition:
      "The set of design choices that determine whether a packaging unit can be sorted and recycled in EU-wide industrial recycling infrastructure. Graded by Article 6 into Class A (≥95%), Class B (≥80%) and Class C (≥70%) recyclability performance.",
  },
  {
    term: "Distributor",
    article: "Art. 3",
    definition:
      "Any natural or legal person in the supply chain, other than the manufacturer or the importer, who makes packaging available on the EU market.",
  },
  {
    term: "Empty space ratio",
    article: "Art. 24",
    definition:
      "The ratio between the volume of the packaging unit and the volume of the packaged product. From 12 August 2028, the empty space ratio must not exceed 50% in grouped, transport and e-commerce packaging.",
  },
  {
    term: "Extended Producer Responsibility (EPR)",
    article: "Art. 45",
    definition:
      "An obligation under which producers cover the net costs of separate collection, sorting, transport, treatment, awareness-raising and litter clean-up for the packaging they place on the EU market. Fees must be eco-modulated by recyclability class and recycled content.",
  },
  {
    term: "Fulfilment service provider",
    article: "Art. 4",
    definition:
      "A natural or legal person offering, in the course of commercial activity, at least two of the following services: warehousing, packaging, addressing, dispatching of products of which they are not the owner. Carries obligations under the Regulation when goods enter the EU market.",
  },
  {
    term: "Grouped packaging",
    article: "Art. 3",
    definition:
      "Packaging conceived to constitute, at the point of purchase, a grouping of a certain number of sales units, whether sold to the end-user or used to replenish shelves at the point of sale.",
  },
  {
    term: "HORECA",
    article: "Art. 25, Annex V",
    definition:
      "Hotels, restaurants, cafés and similar food-service operators. Subject to specific reuse, single-use ban and refill obligations under the Regulation.",
  },
  {
    term: "Importer",
    article: "Art. 17",
    definition:
      "Any natural or legal person established within the Union who places packaging from a third country on the EU market. The importer assumes the manufacturer's obligations where the manufacturer is established outside the Union.",
  },
  {
    term: "Manufacturer",
    article: "Art. 16",
    definition:
      "Any natural or legal person who manufactures packaging — or has packaging designed or manufactured — and markets that packaging under its own name or trademark.",
  },
  {
    term: "Mass balance",
    article: "Art. 7",
    definition:
      "A chain-of-custody methodology used to allocate recycled content across batches of plastic when physically segregated streams are not available. Permitted under conditions to be set by Commission implementing act.",
  },
  {
    term: "Obligated economic operator",
    article: "Art. 4",
    definition:
      "Any of the actors with duties under the Regulation: manufacturers, suppliers of raw materials, importers, distributors, fulfilment service providers and authorised representatives.",
  },
  {
    term: "Packaging unit",
    article: "Art. 3",
    definition:
      "The smallest packaged item placed on the market — for example a single PET bottle, an aluminium can, a folded carton — assessed individually for recyclability, recycled content, labelling and Declaration of Conformity.",
  },
  {
    term: "Packaging waste",
    article: "Art. 3",
    definition:
      "Any packaging or packaging material covered by the Regulation that the holder discards, intends to discard or is required to discard.",
  },
  {
    term: "PFAS — Per- and polyfluoroalkyl substances",
    article: "Art. 5",
    definition:
      "A class of synthetic organofluorine compounds. Article 5 prohibits intentionally added PFAS in food-contact packaging from 12 August 2026, with thresholds of 25 ppb (any individual PFAS), 250 ppb (sum of PFAS) and 50 ppm of total fluorine as an indicator.",
  },
  {
    term: "Producer",
    article: "Art. 45",
    definition:
      "Any manufacturer, importer or distributor that, irrespective of the selling technique used (including distance contracts), places packaging on the EU market for the first time within a Member State on a professional basis.",
  },
  {
    term: "Producer Responsibility Organisation (PRO)",
    article: "Art. 47",
    definition:
      "An entity formed individually or collectively by producers to fulfil EPR obligations on their behalf — collecting fees, contracting collection and treatment, and reporting to national registers.",
  },
  {
    term: "Recyclable packaging",
    article: "Art. 6",
    definition:
      "Packaging designed for material recycling, capable of being separately collected and sorted at scale in EU recycling infrastructure, and reaching at least Class C (≥70%) performance under the design-for-recycling criteria.",
  },
  {
    term: "Recyclability performance grade",
    article: "Art. 6",
    definition:
      "The classification A / B / C of a packaging unit based on the share of its mass that can be high-quality recycled at scale: A ≥95%, B ≥80%, C ≥70%. From 1 January 2038, only A and B are permitted on the EU market.",
  },
  {
    term: "Recycled content",
    article: "Art. 7",
    definition:
      "The share, expressed as a percentage of mass, of post-consumer plastic waste recycled and incorporated into the plastic packaging unit. Targets apply per packaging type from 1 January 2030 and rise from 1 January 2040.",
  },
  {
    term: "Reusable packaging",
    article: "Art. 11",
    definition:
      "Packaging conceived, designed and placed on the market to accomplish, within its life cycle, multiple trips or rotations by being refilled or reused for the same purpose for which it was conceived, satisfying durability, washability and sortability criteria.",
  },
  {
    term: "Reuse system",
    article: "Art. 30",
    definition:
      "A combination of organisational arrangements, technical infrastructure and financial flows ensuring that reusable packaging is collected, washed, restored and reissued. Required to meet the reuse first targets in Article 29 from 1 January 2030.",
  },
  {
    term: "Sales packaging",
    article: "Art. 3",
    definition:
      "Packaging conceived to constitute a sales unit at the point of purchase, comprising the product and the immediate packaging the consumer takes home.",
  },
  {
    term: "Single-use packaging",
    article: "Art. 3",
    definition:
      "Packaging not designed to be reused — used once for the purpose for which it was conceived and then discarded. Subject to format-specific bans under Annex V from 12 August 2026.",
  },
  {
    term: "Single-use plastic beverage bottle",
    article: "Art. 3",
    definition:
      "A single-use plastic container intended for beverages, with a capacity of up to three litres. Subject to a 30% recycled content target from 1 January 2030 (rising to 65% from 1 January 2040) and to the 90% separate-collection DRS target by 31 December 2029.",
  },
  {
    term: "Total fluorine",
    article: "Art. 5",
    definition:
      "The sum of organic and inorganic fluorine in a packaging material, used as an indicator measurement for PFAS presence. Threshold: 50 ppm in food-contact packaging from 12 August 2026.",
  },
  {
    term: "Transport packaging",
    article: "Art. 3",
    definition:
      "Packaging conceived to facilitate the handling and transport of sales units or grouped packaging from the manufacturer to the distribution centre, excluding road, rail, ship and air containers.",
  },
  {
    term: "Very lightweight plastic carrier bag",
    article: "Annex V",
    definition:
      "A plastic carrier bag with a wall thickness below 15 microns, required for hygiene purposes or supplied as primary packaging for loose food. Other very lightweight plastic carrier bags are banned from 12 August 2026.",
  },
];

const TERMS_FR: Term[] = [
  {
    term: "Bilan massique",
    article: "Art. 7",
    definition:
      "Méthodologie de chaîne de traçabilité utilisée pour allouer le contenu recyclé entre lots de plastique lorsque la ségrégation physique n'est pas disponible. Autorisée sous conditions fixées par acte d'exécution de la Commission.",
  },
  {
    term: "Bouteille plastique de boisson à usage unique",
    article: "Art. 3",
    definition:
      "Contenant plastique à usage unique destiné aux boissons, d'une capacité jusqu'à trois litres. Soumis à un objectif de 30 % de contenu recyclé à compter du 1er janvier 2030 (porté à 65 % au 1er janvier 2040) et à l'objectif DRS de 90 % de collecte séparée au 31 décembre 2029.",
  },
  {
    term: "Classe de recyclabilité",
    article: "Art. 6",
    definition:
      "Classement A / B / C d'une unité d'emballage selon la part de sa masse pouvant être recyclée à grande échelle en haute qualité : A ≥ 95 %, B ≥ 80 %, C ≥ 70 %. À partir du 1er janvier 2038, seules les classes A et B sont autorisées sur le marché européen.",
  },
  {
    term: "Conception pour le recyclage (DfR)",
    article: "Art. 6",
    definition:
      "Ensemble des choix de conception qui déterminent si une unité d'emballage peut être triée et recyclée dans l'infrastructure industrielle de recyclage à l'échelle de l'UE. Notée par l'article 6 en classes A (≥ 95 %), B (≥ 80 %) et C (≥ 70 %) de performance de recyclabilité.",
  },
  {
    term: "Contenu recyclé",
    article: "Art. 7",
    definition:
      "Part, exprimée en pourcentage de masse, de déchets plastiques post-consommation recyclés et incorporés dans l'unité d'emballage plastique. Des objectifs s'appliquent par type d'emballage à compter du 1er janvier 2030 et augmentent au 1er janvier 2040.",
  },
  {
    term: "Déchet d'emballage",
    article: "Art. 3",
    definition:
      "Tout emballage ou matériau d'emballage couvert par le Règlement dont le détenteur se défait, a l'intention de se défaire ou est tenu de se défaire.",
  },
  {
    term: "Déclaration de conformité (DoC)",
    article: "Art. 39",
    definition:
      "Déclaration écrite établie par le fabricant (ou l'importateur) avant la mise sur le marché européen de l'emballage, attestant que l'emballage satisfait aux exigences applicables du Règlement (UE) 2025/40 et identifiant les normes harmonisées ou spécifications techniques appliquées.",
  },
  {
    term: "Distributeur",
    article: "Art. 3",
    definition:
      "Toute personne physique ou morale de la chaîne d'approvisionnement, autre que le fabricant ou l'importateur, qui met l'emballage à disposition sur le marché européen.",
  },
  {
    term: "Éco-organisme (PRO)",
    article: "Art. 47",
    definition:
      "Entité constituée individuellement ou collectivement par les producteurs pour remplir leurs obligations REP en leur nom — collecte des éco-contributions, contractualisation de la collecte et du traitement, et reporting aux registres nationaux.",
  },
  {
    term: "Emballage à usage unique",
    article: "Art. 3",
    definition:
      "Emballage non conçu pour être réutilisé — utilisé une seule fois pour la finalité pour laquelle il a été conçu, puis jeté. Soumis aux interdictions de formats spécifiques de l'Annexe V à compter du 12 août 2026.",
  },
  {
    term: "Emballage compostable",
    article: "Art. 9",
    definition:
      "Emballage capable de subir une décomposition physique, chimique, thermique ou biologique de telle sorte qu'il se décompose finalement en dioxyde de carbone, biomasse et eau dans des conditions de compostage industriel, et qui satisfait aux spécifications techniques fixées par le Règlement.",
  },
  {
    term: "Emballage de transport",
    article: "Art. 3",
    definition:
      "Emballage conçu pour faciliter la manutention et le transport des unités de vente ou des emballages groupés du fabricant au centre de distribution, à l'exclusion des conteneurs routiers, ferroviaires, maritimes et aériens.",
  },
  {
    term: "Emballage de vente",
    article: "Art. 3",
    definition:
      "Emballage conçu pour constituer une unité de vente au point d'achat, comprenant le produit et l'emballage immédiat que le consommateur emporte chez lui.",
  },
  {
    term: "Emballage en contact sensible",
    article: "Annexe II",
    definition:
      "Emballage utilisé pour les produits listés à l'Annexe II du Règlement — principalement les produits alimentaires, aliments pour animaux, pharmaceutiques et dispositifs médicaux — où le contact direct ou indirect avec le produit emballé impose des contraintes supplémentaires de sécurité, d'hygiène ou de qualité. Détermine l'objectif inférieur de contenu recyclé au titre de l'article 7.",
  },
  {
    term: "Emballage groupé",
    article: "Art. 3",
    definition:
      "Emballage conçu pour constituer, au point d'achat, un groupement d'un certain nombre d'unités de vente, qu'elles soient vendues à l'utilisateur final ou utilisées pour réapprovisionner les rayons au point de vente.",
  },
  {
    term: "Emballage recyclable",
    article: "Art. 6",
    definition:
      "Emballage conçu pour le recyclage matière, capable d'être collecté séparément et trié à grande échelle dans l'infrastructure de recyclage de l'UE, et atteignant au minimum la classe C (≥ 70 %) selon les critères d'éco-conception pour le recyclage.",
  },
  {
    term: "Emballage réemployable",
    article: "Art. 11",
    definition:
      "Emballage conçu, dessiné et mis sur le marché pour effectuer, au cours de son cycle de vie, plusieurs trajets ou rotations en étant rempli ou réutilisé pour la même finalité que celle pour laquelle il a été conçu, satisfaisant aux critères de durabilité, lavabilité et triabilité.",
  },
  {
    term: "Fabricant",
    article: "Art. 16",
    definition:
      "Toute personne physique ou morale qui fabrique un emballage — ou qui fait concevoir ou fabriquer un emballage — et le commercialise sous son propre nom ou sa propre marque.",
  },
  {
    term: "Fluor total",
    article: "Art. 5",
    definition:
      "Somme du fluor organique et inorganique dans un matériau d'emballage, utilisée comme mesure indicatrice de la présence de PFAS. Seuil : 50 ppm dans les emballages au contact alimentaire à compter du 12 août 2026.",
  },
  {
    term: "CHR (HORECA)",
    article: "Art. 25, Annexe V",
    definition:
      "Cafés, hôtels, restaurants et opérateurs de restauration similaires. Soumis à des obligations spécifiques de réemploi, d'interdiction d'usage unique et de rechargement au titre du Règlement.",
  },
  {
    term: "Importateur",
    article: "Art. 17",
    definition:
      "Toute personne physique ou morale établie dans l'Union qui met sur le marché européen un emballage en provenance d'un pays tiers. L'importateur assume les obligations du fabricant lorsque celui-ci est établi hors Union.",
  },
  {
    term: "Mandataire",
    article: "Art. 18",
    definition:
      "Personne physique ou morale établie dans l'Union ayant reçu un mandat écrit d'un fabricant pour agir en son nom au regard d'obligations spécifiques du Règlement. Requis lorsque le fabricant est établi hors Union et qu'aucun importateur ne joue un rôle équivalent.",
  },
  {
    term: "Metteur sur le marché",
    article: "Art. 3",
    definition:
      "Opérateur économique qui met sur le marché des produits emballés sous son propre nom ou sa propre marque, et qui est donc commercialement associé à l'unité d'emballage par l'utilisateur final.",
  },
  {
    term: "Opérateur économique obligé",
    article: "Art. 4",
    definition:
      "Tout acteur ayant des obligations au titre du Règlement : fabricants, fournisseurs de matières premières, importateurs, distributeurs, prestataires de services d'exécution de commandes et mandataires.",
  },
  {
    term: "PFAS — Substances per- et polyfluoroalkylées",
    article: "Art. 5",
    definition:
      "Classe de composés organofluorés synthétiques. L'article 5 interdit les PFAS intentionnellement ajoutés dans les emballages au contact alimentaire à compter du 12 août 2026, avec des seuils de 25 ppb (PFAS individuel), 250 ppb (somme des PFAS) et 50 ppm de fluor total à titre indicatif.",
  },
  {
    term: "Prestataire de services d'exécution de commandes",
    article: "Art. 4",
    definition:
      "Personne physique ou morale qui propose, dans le cadre d'une activité commerciale, au moins deux des services suivants : entreposage, conditionnement, adressage, expédition de produits dont elle n'est pas propriétaire. Porte des obligations au titre du Règlement lorsque les biens entrent sur le marché européen.",
  },
  {
    term: "Producteur",
    article: "Art. 45",
    definition:
      "Tout fabricant, importateur ou distributeur qui, indépendamment de la technique de vente utilisée (y compris les contrats à distance), met pour la première fois un emballage sur le marché européen au sein d'un État membre à titre professionnel.",
  },
  {
    term: "Ratio d'espace vide",
    article: "Art. 24",
    definition:
      "Rapport entre le volume de l'unité d'emballage et le volume du produit emballé. À compter du 12 août 2028, le ratio d'espace vide ne doit pas dépasser 50 % dans les emballages groupés, de transport et e-commerce.",
  },
  {
    term: "Responsabilité élargie du producteur (REP)",
    article: "Art. 45",
    definition:
      "Obligation au titre de laquelle les producteurs couvrent les coûts nets de la collecte séparée, du tri, du transport, du traitement, de la sensibilisation et du nettoyage des déchets sauvages des emballages qu'ils mettent sur le marché européen. Les éco-contributions doivent être éco-modulées selon la classe de recyclabilité et le contenu recyclé.",
  },
  {
    term: "Sac plastique très léger",
    article: "Annexe V",
    definition:
      "Sac plastique de transport dont l'épaisseur de paroi est inférieure à 15 microns, requis à des fins d'hygiène ou fourni comme emballage primaire pour les denrées en vrac. Les autres sacs plastiques très légers sont interdits à compter du 12 août 2026.",
  },
  {
    term: "Système de consigne (DRS)",
    article: "Art. 50",
    definition:
      "Système national ou régional imposant une consigne sur des unités d'emballage sélectionnées — principalement les bouteilles plastiques de boisson à usage unique jusqu'à 3 L et les canettes métalliques de boisson — remboursée au consommateur sur retour de l'emballage vide via des points de collecte agréés.",
  },
  {
    term: "Système de réemploi",
    article: "Art. 30",
    definition:
      "Combinaison de dispositions organisationnelles, d'infrastructures techniques et de flux financiers garantissant que les emballages réemployables sont collectés, lavés, remis en état et réémis. Requis pour atteindre les premiers objectifs de réemploi de l'article 29 à compter du 1er janvier 2030.",
  },
  {
    term: "Unité d'emballage",
    article: "Art. 3",
    definition:
      "Article emballé le plus petit mis sur le marché — par exemple une bouteille PET, une canette aluminium, un étui plié — évalué individuellement pour la recyclabilité, le contenu recyclé, l'étiquetage et la Déclaration de conformité.",
  },
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default async function GlossaryPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const TERMS = isFr ? TERMS_FR : TERMS_EN;
  const ALPHABET = Array.from(new Set(TERMS.map((t) => t.term[0].toUpperCase()))).sort();

  const t = isFr
    ? {
        crumbHome: "Accueil",
        crumbResources: "Ressources",
        crumbCurrent: "Glossaire PPWR",
        eyebrow: "Ressource · Glossaire",
        h1: "Glossaire PPWR — chaque terme défini, chaque référence d'article.",
        introBefore:
          "Définitions claires de chaque terme défini ou utilisé pour la première fois dans le Règlement (UE) 2025/40, étiquetées avec l'article qui les ancre. Recoupées avec le texte officiel du JO L sur ",
        introAfter: ".",
        jumpTo: "Aller à la lettre",
        related: "Liens connexes",
        related1: "Calendrier 2025-2040",
        related2: "FAQ PPWR (40+)",
        related3: "Service d'analyse des écarts",
      }
    : {
        crumbHome: "Home",
        crumbResources: "Resources",
        crumbCurrent: "PPWR Glossary",
        eyebrow: "Resource · Glossary",
        h1: "PPWR glossary — every defined term, every article reference.",
        introBefore:
          "Plain-English definitions of every term defined or first used in Regulation (EU) 2025/40, tagged with the article that anchors it. Cross-checked against the official OJ L text on ",
        introAfter: ".",
        jumpTo: "Jump to letter",
        related: "Related",
        related1: "Timeline 2025–2040",
        related2: "40+ PPWR FAQs",
        related3: "Gap analysis service",
      };

  const grouped = ALPHABET.map((letter) => ({
    letter,
    terms: TERMS.filter((tt) => tt.term[0].toUpperCase() === letter),
  }));

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: t.crumbHome, href: localizeHref("/", locale) },
          { label: t.crumbResources, href: localizeHref("/resources/ppwr-timeline", locale) },
          { label: t.crumbCurrent },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.eyebrow}
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            {t.h1}
          </h1>
          <p
            className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {t.introBefore}
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32025R0040"
              target="_blank"
              rel="noopener"
              className="text-[#10b981] underline-offset-2 hover:underline inline-flex items-center gap-1"
            >
              EUR-Lex
              <ExternalLink size={12} />
            </a>
            {t.introAfter}
          </p>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
          {/* Side TOC */}
          <aside className="hidden lg:block">
            <nav
              className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border bg-[#f5f7f4] p-5"
              aria-label={t.jumpTo}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.jumpTo}
              </p>
              <div className="mt-3 grid grid-cols-4 gap-1.5">
                {ALPHABET.map((l) => (
                  <a
                    key={l}
                    href={`#letter-${l}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-foreground hover:bg-[#10b981] hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {l}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-border text-sm">
                <p
                  className="font-bold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {t.related}
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>
                    <a
                      href={localizeHref("/resources/ppwr-timeline", locale)}
                      className="text-[#10b981] underline-offset-2 hover:underline"
                    >
                      {t.related1}
                    </a>
                  </li>
                  <li>
                    <a
                      href={localizeHref("/resources/ppwr-faq", locale)}
                      className="text-[#10b981] underline-offset-2 hover:underline"
                    >
                      {t.related2}
                    </a>
                  </li>
                  <li>
                    <a
                      href={localizeHref("/services/ppwr-gap-analysis", locale)}
                      className="text-[#10b981] underline-offset-2 hover:underline"
                    >
                      {t.related3}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Content */}
          <div>
            {grouped.map((group) => (
              <section
                key={group.letter}
                id={`letter-${group.letter}`}
                className="scroll-mt-28 mb-12"
              >
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {group.letter}
                </h2>
                <dl className="mt-5 space-y-5">
                  {group.terms.map((tt) => (
                    <div
                      key={tt.term}
                      id={slugify(tt.term)}
                      className="scroll-mt-28 rounded-2xl border border-border bg-white p-5 hover:border-[#10b981]/40 transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline gap-3">
                        <dt
                          className="text-lg md:text-xl font-bold text-foreground"
                          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                        >
                          {tt.term}
                        </dt>
                        <span
                          className="rounded-full bg-[#d1fae5] px-2.5 py-0.5 text-[11px] font-semibold text-[#065f46]"
                          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                        >
                          {tt.article}
                        </span>
                      </div>
                      <dd
                        className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground"
                        style={{ fontFamily: "var(--font-maison-neue)" }}
                      >
                        {tt.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          inLanguage: isFr ? "fr-FR" : "en-GB",
          name: isFr
            ? "Glossaire PPWR — Règlement (UE) 2025/40"
            : "PPWR — Regulation (EU) 2025/40 glossary",
          url: `https://pactum-advisory.eu/${locale}/resources/ppwr-glossary`,
          description: isFr
            ? "Termes définis du Règlement (UE) 2025/40 sur les emballages et déchets d'emballages."
            : "Defined terms in Regulation (EU) 2025/40 on packaging and packaging waste.",
          hasDefinedTerm: TERMS.map((tt) => ({
            "@type": "DefinedTerm",
            name: tt.term,
            description: tt.definition,
            inDefinedTermSet: `https://pactum-advisory.eu/${locale}/resources/ppwr-glossary`,
            termCode: tt.article,
            url: `https://pactum-advisory.eu/${locale}/resources/ppwr-glossary#${slugify(tt.term)}`,
          })),
        }}
      />
    </>
  );
}
