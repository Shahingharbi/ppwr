import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd, buildFaqSchema } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FaqGroup, type FaqItem } from "@/components/pages/resources/FaqGroup";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { localizeHref } from "@/lib/site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const title = isFr
    ? "FAQ PPWR — 40+ réponses sur le Règlement (UE) 2025/40"
    : "PPWR FAQ — 40+ answers on Regulation (EU) 2025/40";
  const description = isFr
    ? "FAQ PPWR : 40+ réponses claires sur le périmètre, la recyclabilité, le contenu recyclé, le réemploi, les PFAS, l'étiquetage, la REP, le DRS et les sanctions du Règlement (UE) 2025/40. faq ppwr, règlement ppwr, PPWR France."
    : "PPWR FAQ: 40+ plain-English answers on scope, recyclability, recycled content, reuse, PFAS, labelling, EPR, DRS and penalties under Regulation (EU) 2025/40.";

  return {
    title,
    description,
    keywords: isFr
      ? [
          "faq ppwr",
          "règlement ppwr",
          "PPWR France",
          "ppwr emballage",
          "loi ppwr",
          "ppwr signification",
          "ppwr texte",
          "règlement 2025/40",
        ]
      : undefined,
    alternates: {
      canonical: `/${locale}/resources/ppwr-faq`,
      languages: {
        fr: "/fr/resources/ppwr-faq",
        en: "/en/resources/ppwr-faq",
        "x-default": "/fr/resources/ppwr-faq",
      },
    },
    openGraph: {
      title,
      description: isFr
        ? "Plus de quarante questions PPWR répondues en deux à cinq phrases, avec références d'articles et dates."
        : "Forty-plus PPWR questions answered in two to five sentences each, with article and date references.",
      url: `https://pactum-advisory.eu/${locale}/resources/ppwr-faq`,
      type: "article",
    },
  };
}

const GROUPS_EN: { id: string; title: string; items: FaqItem[] }[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        question: "What is the PPWR?",
        answer:
          "Regulation (EU) 2025/40 of the European Parliament and of the Council on packaging and packaging waste — known as the PPWR. CELEX 32025R0040. It replaces Directive 94/62/EC and amends Regulation (EU) 2019/1020 and Directive (EU) 2019/904. It is binding in its entirety and directly applicable in every Member State.",
      },
      {
        question: "When did the PPWR enter into force?",
        answer:
          "11 February 2025 — the twentieth day after publication in the Official Journal on 22 January 2025 (Article 79).",
      },
      {
        question: "When does the PPWR generally apply?",
        answer:
          "12 August 2026 — eighteen months after entry into force — except for provisions with a different application date (notably Article 6 recyclability and Article 7 recycled content from 1 January 2030).",
      },
      {
        question: "Does the PPWR apply to non-EU companies?",
        answer:
          "Yes. Any packaging placed on the EU market is in scope, regardless of where the brand owner is established. Non-EU manufacturers must designate an authorised representative under Article 18 if no EU importer assumes the equivalent role.",
      },
    ],
  },
  {
    id: "scope",
    title: "Scope",
    items: [
      {
        question: "Which packaging materials are covered?",
        answer:
          "All of them — plastic, paper, glass, metal, wood and composites — placed on the EU market or generated as waste in the Union.",
      },
      {
        question: "Who are the obligated economic operators?",
        answer:
          "Manufacturers, suppliers of raw materials, importers, distributors, fulfilment service providers and authorised representatives. Each role carries specific duties under Articles 16 to 20.",
      },
      {
        question: "Are sales packaging, grouped packaging and transport packaging all in scope?",
        answer:
          "Yes. Article 3 defines all three. Each must satisfy applicable Article 5 to 13 sustainability requirements, and each is subject to the Article 24 empty space ratio cap from 12 August 2028.",
      },
      {
        question: "Is medical device packaging in scope?",
        answer:
          "Yes, but with carve-outs. Contact-sensitive packaging for pharmaceutical and medical devices is included in Annex II and benefits from lower recycled-content targets under Article 7. Specific labelling and reuse derogations apply.",
      },
    ],
  },
  {
    id: "recyclability",
    title: "Recyclability (Article 6)",
    items: [
      {
        question: "What is Class A, B, C recyclability?",
        answer:
          "Article 6 grades each packaging unit by recyclability performance. Class A is at least 95%, Class B at least 80%, Class C at least 70%. From 1 January 2030 every packaging unit must reach at least Class C; from 1 January 2038 only Class A and B are permitted on the EU market.",
      },
      {
        question: "Who decides which class applies to my packaging?",
        answer:
          "The manufacturer or importer self-declares the class in the Declaration of Conformity (Article 39), based on the design-for-recycling criteria set by Commission delegated act, expected by end-2027. Market surveillance authorities may challenge the grade.",
      },
      {
        question: "What happens to Class C packaging in 2038?",
        answer:
          "It cannot be placed on the EU market. Withdrawal and recall powers under Article 68 apply. The 2030–2038 window is the redesign runway.",
      },
      {
        question: "Are there exemptions for innovative or contact-sensitive packaging?",
        answer:
          "Limited exemptions exist for innovative packaging on a temporary basis under Article 6, and for some contact-sensitive packaging where no recyclable alternative exists. These exemptions must be granted by Commission decision.",
      },
    ],
  },
  {
    id: "recycled-content",
    title: "Recycled content (Article 7)",
    items: [
      {
        question: "What are the recycled content targets for 2030?",
        answer:
          "30% for contact-sensitive packaging containing PET as major component, 10% for contact-sensitive packaging in other plastics, 30% for single-use plastic beverage bottles, and 35% for other plastic packaging. Calculated as an average per manufacturing plant and year.",
      },
      {
        question: "What about 2040?",
        answer:
          "Targets rise on 1 January 2040 to 50% (contact-sensitive PET), 25% (other contact-sensitive plastics), 65% (beverage bottles) and 65% (other plastic packaging).",
      },
      {
        question: "Is mass balance allowed?",
        answer:
          "Yes, under conditions to be set by Commission implementing act. Physical segregation is preferred but mass balance with chain-of-custody verification is permitted to scale food-grade rPET supply.",
      },
      {
        question: "Does post-industrial recyclate count?",
        answer:
          "No. Article 7 requires post-consumer recyclate. Post-industrial waste does not count toward the targets.",
      },
    ],
  },
  {
    id: "reuse",
    title: "Reuse and refill (Articles 29 to 33)",
    items: [
      {
        question: "What are the reuse first targets for 2030?",
        answer:
          "40% reuse rate for transport and grouped packaging, 10% for beverage packaging, 90% reuse of transport packaging for large household appliances. Member States may derogate from the beverage target under conditions.",
      },
      {
        question: "What are the reuse stretch targets for 2040?",
        answer:
          "70% for transport and grouped packaging, 40% for beverage packaging.",
      },
      {
        question: "Must HORECA offer reusable take-away?",
        answer:
          "Yes, from 12 August 2026. Article 33 requires HORECA operators to offer a reusable container option for take-away food and beverages, at no additional cost above the reusable container deposit.",
      },
      {
        question: "Which retailers must offer refill stations?",
        answer:
          "From 1 January 2030, retailers with surface area equal to or greater than 400 m² selling food or detergents must offer refill stations under Article 30.",
      },
    ],
  },
  {
    id: "pfas",
    title: "PFAS (Article 5)",
    items: [
      {
        question: "When does the PFAS ban apply?",
        answer:
          "12 August 2026. From that date, food-contact packaging must not contain intentionally added PFAS in concentrations equal to or above the Article 5 thresholds.",
      },
      {
        question: "What are the PFAS thresholds?",
        answer:
          "25 ppb for any individual PFAS (targeted analysis), 250 ppb for the sum of PFAS (targeted analysis), and 50 ppm of total fluorine as an indicator measurement.",
      },
      {
        question: "Which packaging is in scope?",
        answer:
          "Food-contact packaging, including primary packaging in direct or indirect contact with food and feed. Non-food packaging is currently outside Article 5 scope but may fall under separate REACH or POPs Regulation rules on PFAS.",
      },
      {
        question: "How is PFAS tested?",
        answer:
          "Two complementary methods: targeted analysis for individual PFAS species (LC-MS/MS for the 25 ppb and 250 ppb thresholds), and total fluorine measurement (CIC or PIGE for the 50 ppm indicator). A finding above any threshold triggers enforcement.",
      },
    ],
  },
  {
    id: "labelling",
    title: "Labelling and Digital Product Passport (Articles 12 to 13)",
    items: [
      {
        question: "When does harmonised labelling apply?",
        answer:
          "12 August 2028. Every packaging unit must carry harmonised material composition and sorting labels in line with the implementing act adopted by the Commission.",
      },
      {
        question: "Is a QR code mandatory?",
        answer:
          "Yes — Article 12 requires a QR code or other digital data carrier on every packaging unit. The detailed specifications, data fields and access governance are set by implementing act.",
      },
      {
        question: "Can I claim recycled content on-pack?",
        answer:
          "Only if substantiated and verified under Article 7. Unsubstantiated recycled-content claims constitute greenwashing and may trigger Article 68 penalties as well as separate sanctions under the Empowering Consumers Directive.",
      },
      {
        question: "Does the Digital Product Passport apply to all packaging?",
        answer:
          "Rollout is phased. The DPP is referenced in Article 12 with rollout starting 2028 and extending through 2030 by category. Detailed scope is set by implementing act.",
      },
    ],
  },
  {
    id: "epr-drs",
    title: "EPR and DRS (Articles 45 and 50)",
    items: [
      {
        question: "What does EPR cover under the PPWR?",
        answer:
          "Producers (or PROs on their behalf) cover the net costs of separate collection, sorting, transport, treatment, awareness-raising and litter clean-up. Article 45 makes this universal across the EU and requires eco-modulation of fees by recyclability class and recycled content.",
      },
      {
        question: "What is the DRS target for 2029?",
        answer:
          "90% separate collection of single-use plastic beverage bottles up to 3 L and metal beverage cans, by 31 December 2029 (Article 50). Member States that achieve 80% by 31 December 2026 with a credible plan may avoid mandatory DRS.",
      },
      {
        question: "Are EPR fees harmonised across the EU?",
        answer:
          "The fee level is set nationally; the methodology — including eco-modulation parameters — is harmonised by Commission implementing act. National registers track producer compliance.",
      },
      {
        question: "What is a Producer Responsibility Organisation?",
        answer:
          "An entity formed by producers individually or collectively to discharge EPR obligations on their behalf — collecting fees, contracting collection and treatment services, and reporting to national registers (Article 47).",
      },
    ],
  },
  {
    id: "penalties",
    title: "Penalties and enforcement (Article 68)",
    items: [
      {
        question: "What penalties apply?",
        answer:
          "Member States set effective, proportionate and dissuasive penalties. Typical national transposition includes administrative fines (often a percentage of EU turnover), market-withdrawal orders, recall powers and criminal liability for repeated or wilful breaches.",
      },
      {
        question: "Can market surveillance authorities recall non-compliant packaging?",
        answer:
          "Yes. Articles 68 and 69, together with Regulation (EU) 2019/1020, give authorities the power to require corrective action, withdraw products from the market, and order recall.",
      },
      {
        question: "Who is liable for non-compliance?",
        answer:
          "The obligated economic operator that placed the packaging on the EU market. For non-EU manufacturers, the importer or authorised representative carries the liability.",
      },
      {
        question: "How long must technical documentation be kept?",
        answer:
          "Ten years from the date the packaging is placed on the EU market (Article 40). Documentation must be produced to market surveillance authorities on request.",
      },
    ],
  },
  {
    id: "how-to-start",
    title: "How to start",
    items: [
      {
        question: "What is the first step?",
        answer:
          "Map every SKU against the binding articles. The Pactum five-day gap analysis produces an article-by-article portfolio read with a costed action plan. Start there before committing CAPEX.",
      },
      {
        question: "How long does compliance take?",
        answer:
          "12 August 2026 obligations (PFAS, Annex V, HORECA reuse) are typically achievable in nine to twelve months. 1 January 2030 obligations (recyclability, recycled content, reuse, refill) require eighteen to thirty-six months because supplier contracts and tooling redesign drive the lead time.",
      },
      {
        question: "Should we wait for the delegated and implementing acts?",
        answer:
          "No. Wait-and-see is the most expensive option. The dates and headline thresholds are fixed in the Regulation. Designing under reasonable interpretations now and adjusting at the margin once the acts publish is materially cheaper than scrambling in 2029.",
      },
      {
        question: "Where can we get help?",
        answer:
          "Pactum Advisory runs five-day costed gap analyses, recyclability grading, recycled-content roadmaps, PFAS phase-outs, reuse strategy and Declaration of Conformity files. See the Services section or book a working session.",
      },
    ],
  },
];

const GROUPS_FR: { id: string; title: string; items: FaqItem[] }[] = [
  {
    id: "general",
    title: "Général",
    items: [
      {
        question: "Qu'est-ce que la PPWR ?",
        answer:
          "Le Règlement (UE) 2025/40 du Parlement européen et du Conseil sur les emballages et les déchets d'emballages — connu sous l'acronyme PPWR. CELEX 32025R0040. Il remplace la Directive 94/62/CE et modifie le Règlement (UE) 2019/1020 et la Directive (UE) 2019/904. Il est obligatoire dans tous ses éléments et directement applicable dans chaque État membre.",
      },
      {
        question: "Quand la PPWR est-elle entrée en vigueur ?",
        answer:
          "Le 11 février 2025 — vingtième jour après la publication au Journal officiel le 22 janvier 2025 (article 79).",
      },
      {
        question: "Quand la PPWR s'applique-t-elle de manière générale ?",
        answer:
          "Le 12 août 2026 — dix-huit mois après l'entrée en vigueur — sauf pour les dispositions ayant une autre date d'application (notamment la recyclabilité de l'article 6 et le contenu recyclé de l'article 7 à compter du 1er janvier 2030).",
      },
      {
        question: "La PPWR s'applique-t-elle aux entreprises hors UE ?",
        answer:
          "Oui. Tout emballage mis sur le marché européen est dans le périmètre, indépendamment de l'établissement du metteur sur le marché. Les fabricants hors UE doivent désigner un mandataire au titre de l'article 18 si aucun importateur établi dans l'Union ne joue un rôle équivalent.",
      },
    ],
  },
  {
    id: "scope",
    title: "Périmètre",
    items: [
      {
        question: "Quels matériaux d'emballage sont couverts ?",
        answer:
          "Tous — plastique, papier, verre, métal, bois et composites — mis sur le marché européen ou générés comme déchets dans l'Union.",
      },
      {
        question: "Qui sont les opérateurs économiques obligés ?",
        answer:
          "Les fabricants, les fournisseurs de matières premières, les importateurs, les distributeurs, les prestataires de services d'exécution de commandes et les mandataires. Chaque rôle porte des obligations spécifiques aux articles 16 à 20.",
      },
      {
        question:
          "Les emballages de vente, groupés et de transport sont-ils tous dans le périmètre ?",
        answer:
          "Oui. L'article 3 définit les trois. Chacun doit satisfaire aux exigences de durabilité applicables des articles 5 à 13, et chacun est soumis au plafond du ratio d'espace vide de l'article 24 à compter du 12 août 2028.",
      },
      {
        question: "Les emballages de dispositifs médicaux sont-ils dans le périmètre ?",
        answer:
          "Oui, avec des aménagements. Les emballages en contact sensible des produits pharmaceutiques et dispositifs médicaux figurent à l'Annexe II et bénéficient d'objectifs réduits de contenu recyclé au titre de l'article 7. Des dérogations spécifiques d'étiquetage et de réemploi s'appliquent.",
      },
    ],
  },
  {
    id: "recyclability",
    title: "Recyclabilité (article 6)",
    items: [
      {
        question: "Qu'est-ce que la recyclabilité classe A, B, C ?",
        answer:
          "L'article 6 note chaque unité d'emballage par sa performance de recyclabilité. La classe A est d'au moins 95 %, la classe B d'au moins 80 % et la classe C d'au moins 70 %. À compter du 1er janvier 2030, chaque unité d'emballage doit atteindre au minimum la classe C ; à compter du 1er janvier 2038, seules les classes A et B sont autorisées sur le marché européen.",
      },
      {
        question: "Qui décide de la classe applicable à mon emballage ?",
        answer:
          "Le fabricant ou l'importateur auto-déclare la classe dans la Déclaration de conformité (article 39), sur la base des critères d'éco-conception pour le recyclage fixés par acte délégué de la Commission, attendu d'ici fin 2027. Les autorités de surveillance du marché peuvent contester la note.",
      },
      {
        question: "Que se passe-t-il pour les emballages classe C en 2038 ?",
        answer:
          "Ils ne peuvent plus être mis sur le marché européen. Les pouvoirs de retrait et de rappel au titre de l'article 68 s'appliquent. La fenêtre 2030-2038 est la piste de refonte.",
      },
      {
        question:
          "Existe-t-il des exemptions pour les emballages innovants ou en contact sensible ?",
        answer:
          "Des exemptions limitées existent pour les emballages innovants à titre temporaire au titre de l'article 6, et pour certains emballages en contact sensible lorsque aucune alternative recyclable n'existe. Ces exemptions doivent être accordées par décision de la Commission.",
      },
    ],
  },
  {
    id: "recycled-content",
    title: "Contenu recyclé (article 7)",
    items: [
      {
        question: "Quels sont les objectifs de contenu recyclé pour 2030 ?",
        answer:
          "30 % pour les emballages en contact sensible contenant du PET comme composant majeur, 10 % pour les emballages en contact sensible en autres plastiques, 30 % pour les bouteilles plastiques de boisson à usage unique et 35 % pour les autres emballages plastiques. Calculé en moyenne par site de fabrication et par an.",
      },
      {
        question: "Et 2040 ?",
        answer:
          "Les objectifs montent au 1er janvier 2040 à 50 % (PET en contact sensible), 25 % (autres plastiques en contact sensible), 65 % (bouteilles de boisson) et 65 % (autres emballages plastiques).",
      },
      {
        question: "Le bilan massique est-il autorisé ?",
        answer:
          "Oui, sous conditions à fixer par acte d'exécution de la Commission. La ségrégation physique est privilégiée mais le bilan massique, avec vérification de la chaîne de traçabilité, est autorisé pour faire monter en échelle l'offre de rPET de qualité alimentaire.",
      },
      {
        question: "Le recyclat post-industriel compte-t-il ?",
        answer:
          "Non. L'article 7 exige du recyclat post-consommation. Les déchets post-industriels ne comptent pas pour les objectifs.",
      },
    ],
  },
  {
    id: "reuse",
    title: "Réemploi et rechargement (articles 29 à 33)",
    items: [
      {
        question: "Quels sont les premiers objectifs de réemploi pour 2030 ?",
        answer:
          "40 % de taux de réemploi pour les emballages de transport et groupés, 10 % pour les emballages de boissons, 90 % de réemploi des emballages de transport pour le gros électroménager. Les États membres peuvent déroger à l'objectif boissons sous conditions.",
      },
      {
        question: "Quels sont les objectifs ambitieux de réemploi pour 2040 ?",
        answer:
          "70 % pour les emballages de transport et groupés, 40 % pour les emballages de boissons.",
      },
      {
        question: "Les CHR doivent-ils proposer du réemploi pour la vente à emporter ?",
        answer:
          "Oui, à compter du 12 août 2026. L'article 33 impose aux opérateurs CHR de proposer une option de contenant réemployable pour les boissons et plats à emporter, sans surcoût au-delà de la consigne du contenant réemployable.",
      },
      {
        question: "Quels détaillants doivent proposer des stations de recharge ?",
        answer:
          "À compter du 1er janvier 2030, les détaillants ayant une surface ≥ 400 m² vendant des produits alimentaires ou détergents doivent proposer des stations de recharge au titre de l'article 30.",
      },
    ],
  },
  {
    id: "pfas",
    title: "PFAS (article 5)",
    items: [
      {
        question: "Quand l'interdiction des PFAS s'applique-t-elle ?",
        answer:
          "Le 12 août 2026. À partir de cette date, les emballages au contact alimentaire ne doivent pas contenir de PFAS intentionnellement ajoutés à des concentrations égales ou supérieures aux seuils de l'article 5.",
      },
      {
        question: "Quels sont les seuils PFAS ?",
        answer:
          "25 ppb pour tout PFAS individuel (analyse ciblée), 250 ppb pour la somme des PFAS (analyse ciblée) et 50 ppm de fluor total à titre de mesure indicatrice.",
      },
      {
        question: "Quels emballages sont dans le périmètre ?",
        answer:
          "Les emballages au contact alimentaire, y compris les emballages primaires en contact direct ou indirect avec les denrées et aliments pour animaux. Les emballages non alimentaires sont actuellement hors du périmètre de l'article 5 mais peuvent relever des règles séparées du Règlement REACH ou du Règlement POP sur les PFAS.",
      },
      {
        question: "Comment teste-t-on les PFAS ?",
        answer:
          "Deux méthodes complémentaires : analyse ciblée pour les espèces PFAS individuelles (LC-MS/MS pour les seuils 25 ppb et 250 ppb) et mesure du fluor total (CIC ou PIGE pour l'indicateur 50 ppm). Une détection au-dessus de l'un des seuils déclenche une mesure d'exécution.",
      },
    ],
  },
  {
    id: "labelling",
    title: "Étiquetage et Passeport numérique de produit (articles 12 à 13)",
    items: [
      {
        question: "Quand l'étiquetage harmonisé s'applique-t-il ?",
        answer:
          "Le 12 août 2028. Chaque unité d'emballage doit porter des étiquettes harmonisées de composition matériau et de tri conformément à l'acte d'exécution adopté par la Commission.",
      },
      {
        question: "Le code QR est-il obligatoire ?",
        answer:
          "Oui — l'article 12 impose un code QR ou autre support de données numérique sur chaque unité d'emballage. Les spécifications détaillées, les champs de données et la gouvernance d'accès sont fixés par acte d'exécution.",
      },
      {
        question: "Puis-je revendiquer un contenu recyclé sur l'emballage ?",
        answer:
          "Uniquement si la revendication est étayée et vérifiée au titre de l'article 7. Les revendications de contenu recyclé non étayées constituent du greenwashing et peuvent déclencher des sanctions au titre de l'article 68 ainsi que des sanctions séparées au titre de la Directive sur l'autonomisation des consommateurs.",
      },
      {
        question: "Le Passeport numérique de produit s'applique-t-il à tous les emballages ?",
        answer:
          "Le déploiement est progressif. Le DPP est référencé à l'article 12 avec un déploiement débutant en 2028 et s'étendant jusqu'en 2030 par catégorie. Le périmètre détaillé est fixé par acte d'exécution.",
      },
    ],
  },
  {
    id: "epr-drs",
    title: "REP et DRS (articles 45 et 50)",
    items: [
      {
        question: "Que couvre la REP au titre de la PPWR ?",
        answer:
          "Les producteurs (ou les éco-organismes pour leur compte) couvrent les coûts nets de la collecte séparée, du tri, du transport, du traitement, de la sensibilisation et du nettoyage des déchets sauvages. L'article 45 généralise ce principe à toute l'UE et impose une éco-modulation des éco-contributions selon la classe de recyclabilité et le contenu recyclé.",
      },
      {
        question: "Quel est l'objectif DRS pour 2029 ?",
        answer:
          "90 % de collecte séparée des bouteilles plastiques de boisson à usage unique jusqu'à 3 L et des canettes métalliques de boisson, au 31 décembre 2029 (article 50). Les États membres atteignant 80 % au 31 décembre 2026 avec un plan crédible peuvent éviter le DRS obligatoire.",
      },
      {
        question: "Les éco-contributions REP sont-elles harmonisées dans l'UE ?",
        answer:
          "Le niveau de l'éco-contribution est fixé au niveau national ; la méthodologie — y compris les paramètres d'éco-modulation — est harmonisée par acte d'exécution de la Commission. Des registres nationaux suivent la conformité des producteurs.",
      },
      {
        question: "Qu'est-ce qu'un éco-organisme (PRO) ?",
        answer:
          "Une entité constituée par les producteurs individuellement ou collectivement pour s'acquitter des obligations REP en leur nom — collecte des éco-contributions, contractualisation des services de collecte et de traitement, et reporting aux registres nationaux (article 47).",
      },
    ],
  },
  {
    id: "penalties",
    title: "Sanctions et exécution (article 68)",
    items: [
      {
        question: "Quelles sanctions s'appliquent ?",
        answer:
          "Les États membres fixent des sanctions effectives, proportionnées et dissuasives. La transposition nationale type inclut des amendes administratives (souvent un pourcentage du chiffre d'affaires UE), des ordres de retrait du marché, des pouvoirs de rappel et une responsabilité pénale en cas d'infractions répétées ou intentionnelles.",
      },
      {
        question:
          "Les autorités de surveillance du marché peuvent-elles rappeler des emballages non conformes ?",
        answer:
          "Oui. Les articles 68 et 69, combinés au Règlement (UE) 2019/1020, donnent aux autorités le pouvoir d'exiger des actions correctives, de retirer les produits du marché et d'ordonner leur rappel.",
      },
      {
        question: "Qui est responsable en cas de non-conformité ?",
        answer:
          "L'opérateur économique obligé qui a mis l'emballage sur le marché européen. Pour les fabricants hors UE, la responsabilité incombe à l'importateur ou au mandataire.",
      },
      {
        question: "Combien de temps la documentation technique doit-elle être conservée ?",
        answer:
          "Dix ans à compter de la date de mise sur le marché européen de l'emballage (article 40). La documentation doit être produite aux autorités de surveillance du marché sur demande.",
      },
    ],
  },
  {
    id: "how-to-start",
    title: "Par où commencer",
    items: [
      {
        question: "Quelle est la première étape ?",
        answer:
          "Cartographiez chaque SKU face aux articles contraignants. L'analyse des écarts Pactum en cinq jours produit une lecture portefeuille article par article avec un plan d'action chiffré. Commencez par là avant d'engager des CAPEX.",
      },
      {
        question: "Combien de temps prend la conformité ?",
        answer:
          "Les obligations du 12 août 2026 (PFAS, Annexe V, réemploi CHR) sont typiquement atteignables en neuf à douze mois. Les obligations du 1er janvier 2030 (recyclabilité, contenu recyclé, réemploi, rechargement) demandent dix-huit à trente-six mois car les contrats fournisseurs et la refonte d'outillage commandent les délais.",
      },
      {
        question: "Devons-nous attendre les actes délégués et d'exécution ?",
        answer:
          "Non. L'attentisme est l'option la plus coûteuse. Les dates et seuils principaux sont figés dans le Règlement. Concevoir aujourd'hui sous des interprétations raisonnables et ajuster à la marge à la publication des actes coûte matériellement moins cher qu'une course en 2029.",
      },
      {
        question: "Où obtenir de l'aide ?",
        answer:
          "Pactum Advisory réalise des analyses des écarts chiffrées en cinq jours, des notations de recyclabilité, des feuilles de route contenu recyclé, des sorties de PFAS, des stratégies de réemploi et des dossiers de Déclaration de conformité. Voir la section Services ou réservez une session de travail.",
      },
    ],
  },
];

export default async function FaqPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  const GROUPS = isFr ? GROUPS_FR : GROUPS_EN;
  const allItems = GROUPS.flatMap((g) => g.items);

  const t = isFr
    ? {
        crumbHome: "Accueil",
        crumbResources: "Ressources",
        crumbCurrent: "FAQ PPWR",
        eyebrow: "Ressource · FAQ pillar",
        h1: "FAQ PPWR — 40+ réponses, dix thématiques, chaque article cité.",
        introBefore:
          "Les quarante questions que nos clients posent lors du premier kick-off, répondues en deux à cinq phrases. Recoupées avec le texte officiel du Règlement (UE) 2025/40 sur ",
        introAfter: ".",
        link1: "Voir le calendrier des échéances",
        link2: "Glossaire des termes définis",
        link3: "Diagnostic gratuit",
        topics: "Thématiques",
        ctaTitle: "Vous avez encore une question PPWR ?",
        ctaDesc:
          "Réservez une session de travail de 30 minutes et nous répondrons à votre question spécifique au portefeuille face à l'article qui la régit.",
      }
    : {
        crumbHome: "Home",
        crumbResources: "Resources",
        crumbCurrent: "PPWR FAQ",
        eyebrow: "Resource · Pillar FAQ",
        h1: "PPWR FAQ — 40+ answers, ten topic areas, every article cited.",
        introBefore:
          "The forty questions our clients ask in their first kick-off call, answered in two to five sentences. Cross-checked against the official text of Regulation (EU) 2025/40 on ",
        introAfter: ".",
        link1: "See the deadline timeline",
        link2: "Glossary of defined terms",
        link3: "Free readiness check",
        topics: "Topics",
        ctaTitle: "Still have a PPWR question?",
        ctaDesc:
          "Book a 30-minute working session and we will answer your portfolio-specific question against the article that governs it.",
      };

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
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a
              href={localizeHref("/resources/ppwr-timeline", locale)}
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              {t.link1}
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href={localizeHref("/resources/ppwr-glossary", locale)}
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              {t.link2}
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href={localizeHref("/resources/ppwr-readiness-assessment", locale)}
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              {t.link3}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-10">
          {/* Side TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <p
                className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-4"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.topics}
              </p>
              <ul className="space-y-1.5 text-sm">
                {GROUPS.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      className="block border-l-2 border-border py-1.5 pl-3 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-12">
            {GROUPS.map((g) => (
              <div key={g.id} id={g.id} className="scroll-mt-28">
                <FaqGroup title={g.title} items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA title={t.ctaTitle} description={t.ctaDesc} />

      <JsonLd data={buildFaqSchema(allItems)} />
    </>
  );
}
