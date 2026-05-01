import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { PharmaceuticalStats } from "@/components/pages/sectors/pharmaceutical/PharmaceuticalStats";

const PAGE_PATH = "/sectors/pharmaceutical";

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
        "PPWR dans la pharma — exemptions, contact-sensible, DoC | Pactum",
      metaDescription:
        "Comment le règlement PPWR (UE) 2025/40 transforme l'emballage pharmaceutique et des dispositifs médicaux — exemptions, seuils de contenu recyclé pour plastiques contact-sensibles, recouvrement avec MDR et Déclaration de conformité Art. 39 pour blisters, flacons et étuis. Règlement PPWR pharma pour les laboratoires européens.",
      ogAlt: "Conseil PPWR pour la pharma — Pactum",
      twitterTitle: "PPWR pharma — Pactum",
      twitterDescription:
        "Règlement (UE) 2025/40 appliqué aux médicaments, dispositifs médicaux et emballages contact-sensibles.",
      homeLabel: "Accueil",
      sectorsLabel: "Secteurs",
      sectorLabel: "Pharma & dispositifs médicaux",
      serviceJsonLdName: "Conseil PPWR pour la pharmaceutique",
      serviceJsonLdDescription:
        "Conseil pure-play sur le règlement (UE) 2025/40 pour les fabricants pharmaceutiques et de dispositifs médicaux — exemptions et dérogations partielles au titre de l'article 25, contenu recyclé contact-sensible au titre de l'article 7, recouvrement réglementaire avec règlement (UE) 2017/745 MDR et directive 2001/83/CE, et Déclaration de conformité Art. 39 pour blisters, flacons, ampoules, poches IV et étuis.",
      audienceType:
        "Fabricants pharmaceutiques et de dispositifs médicaux plaçant des emballages sur le marché européen",
      hero: {
        eyebrow: "SECTEUR",
        title: "PPWR dans la pharma — exemptions, contact-sensible, DoC",
        subtitle:
          "Le règlement (UE) 2025/40 s'applique à l'emballage pharmaceutique et des dispositifs médicaux avec des dérogations partielles — pas des exemptions générales. Les règles de contenu recyclé sont contraintes pour les plastiques contact-sensibles, le règlement chevauche le règlement (UE) 2017/745 MDR et la directive 2001/83/CE, et la Déclaration de conformité Art. 39 cohabite avec votre dossier réglementaire existant.",
        primaryCta: "Réserver une session de travail",
        secondaryCta: "Diagnostic PPWR gratuit",
      },
      whatPpwr: {
        chip: "Ce que la PPWR change pour la pharma",
        title:
          "Dérogations ciblées, pas exemptions — et la DoC cohabite avec le dossier MDR.",
        paragraphs: [
          <>
            Le règlement (UE) 2025/40, publié au JO L le 22 janvier 2025 et entré en vigueur le
            11 février 2025, s'applique de manière générale à compter du 12 août 2026. Pour les
            fabricants pharmaceutiques et de dispositifs médicaux, le point de départ clé est
            négatif : la PPWR n'accorde pas d'exemption générale aux emballages de médicaments
            ou de dispositifs médicaux. Elle accorde des dérogations ciblées à l'article 25 et
            des accommodements partiels à l'article 7 pour les plastiques contact-sensibles —
            mais la notation Art. 6, la Déclaration de conformité Art. 39, le dossier technique
            Art. 40 et la responsabilité élargie du producteur Art. 45 s'appliquent toutes.
          </>,
          <>
            L'article 7 est l'endroit où la tension opérationnelle est la plus vive.
            L'emballage en contact sensible dans les plastiques autres que le PET — la catégorie
            qui couvre la plupart des films blister (PVC, PVDC, COC, COP), le PVC des poches IV,
            les flacons HDPE pour formes sèches orales et les emballages primaires similaires —
            doit atteindre 10 % de contenu recyclé minimum à compter du 1er janvier 2030, puis
            25 % au 1er janvier 2040. L'emballage PET en contact sensible passe à 30 % en 2030
            (puis 50 %). La contrainte limitante n'est pas réglementaire ; elle est côté
            approvisionnement. La qualification pharmacopéenne (Ph. Eur. 3.1.x, ICH Q3D, USP
            &lt;661&gt; et les programmes extractables/leachables associés) de la résine
            recyclée est aujourd'hui un exercice de plusieurs trimestres par substrat et par
            fournisseur.
          </>,
          <>
            Les seuils PFAS de l'article 5 — 25 ppb pour tout PFAS individuel par analyse
            ciblée, 250 ppb pour la somme des PFAS, 50 ppm de fluor total comme indicateur —
            s'appliquent à l'emballage contact alimentaire à compter du 12 août 2026. La
            plupart des emballages de médicaments sont hors du périmètre contact alimentaire,
            mais les aliments médicaux, compléments nutritionnels oraux et certains formats OTC
            y entrent. La justification pour placer chaque SKU dans ou hors du périmètre doit
            être documentée dans le dossier technique au titre de l'article 40, défendable face
            à une autorité de surveillance du marché à la demande.
          </>,
          <>
            La notation recyclabilité Art. 6 s'applique sur l'ensemble du stack secondaire et
            tertiaire — étuis pliants, notices patient, dépliants multi-couches, laminés à
            éléments de sécurité, caisses d'expédition et expéditeurs isothermes chaîne du
            froid. Les bandes de notation sont Classe A (≥95 %), Classe B (≥80 %) et Classe C
            (≥70 %) ; à compter du 1er janvier 2030, chaque unité doit atteindre la Classe C,
            et à compter du 1er janvier 2038, la Classe C est interdite. Les expéditeurs
            isothermes chaîne du froid et les panneaux d'isolation sous vide sont aujourd'hui
            les composants les plus exposés, souvent notés C sans redesign de substrat.
          </>,
          <>
            Les obligations de compostabilité de l'article 9 (sachets de thé, étiquettes
            fruits/légumes, sacs plastique très légers) ne s'appliquent généralement pas à
            l'emballage pharmaceutique, mais la détermination dans/hors périmètre doit être
            documentée. L'article 25 et l'Annexe V sur les restrictions à usage unique
            exigent également une cartographie soigneuse — la plupart des emballages de
            médicaments tombent en dehors des interdictions listées, mais l'argument
            d'exemption documenté est ce qui défend le SKU à l'audit. Le régime PPWR cohabite,
            sans se substituer, avec le règlement (UE) 2017/745 (MDR), la directive 2001/83/CE
            sur les médicaments à usage humain et le règlement (UE) 536/2014 sur les essais
            cliniques. Tout changement de substrat ou composant peut déclencher des mises à
            jour réglementaires parallèles.
          </>,
          <>
            L'article 39 boucle la boucle : chaque unité d'emballage exige une Déclaration de
            conformité étayée par un dossier technique conservé 10 ans au titre de l'article
            40. Nous menons nos missions pharma de manière à ce que la DoC PPWR, le dossier
            technique MDR et le dossier d'autorisation de mise sur le marché avancent en
            parallèle — voir notre{" "}
            <a
              href="/fr/services/ppwr-gap-analysis"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Analyse des écarts PPWR
            </a>{" "}
            pour le périmètre article par article, la{" "}
            <a
              href="/fr/services/recycled-content-roadmap"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Feuille de route contenu recyclé
            </a>{" "}
            pour le sourcing de recyclat qualifié pharmacopée, et le programme{" "}
            <a
              href="/fr/services/declaration-of-conformity"
              className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
            >
              Déclaration de conformité
            </a>{" "}
            qui s'aligne sur votre dossier existant.
          </>,
        ],
      },
      articlesEyebrow: "Les articles les plus contraignants",
      articlesTitle:
        "Cinq articles PPWR qui déterminent votre conformité pharmaceutique.",
      articlesIntro:
        "Chaque carte associe l'obligation contraignante au service précis que nous menons pour la couvrir.",
      whatWeDoLabel: "Ce que nous faisons.",
      goToLabel: (service) => `Aller à ${service}`,
      articlesThatBite: [
        {
          article: "Article 7",
          headline:
            "Plastiques contact-sensibles non PET : 10 % de contenu recyclé (2030), 25 % (2040)",
          deadline: "À compter du 1er janvier 2030, puis 1er janvier 2040",
          action:
            "Nous modélisons la trajectoire de contenu recyclé pour le PVC/PVDC qualité blister, le film PP des poches IV et les flacons HDPE, validons face aux extractables/leachables pharmacopée et structurons le parcours de variation réglementaire.",
          serviceHref: "/fr/services/recycled-content-roadmap",
          serviceLabel: "Feuille de route contenu recyclé",
        },
        {
          article: "Article 5",
          headline:
            "Seuils PFAS (25 ppb / 250 ppb / 50 ppm) dans l'emballage contact alimentaire — interaction avec le périmètre pharma",
          deadline: "Applicable à compter du 12 août 2026",
          action:
            "Nous séparons les SKU dans le périmètre (ex. aliment médical, OTC contact alimentaire) des SKU hors périmètre (la plupart des médicaments) et documentons la justification côté fournisseurs.",
          serviceHref: "/fr/services/pfas-compliance",
          serviceLabel: "Conformité PFAS",
        },
        {
          article: "Article 6",
          headline:
            "Notation recyclabilité par conception (Classe A/B/C) pour étuis, notices et emballages secondaires",
          deadline:
            "Classe C minimum à compter du 1er janvier 2030 ; Classe C interdite à compter du 1er janvier 2038",
          action:
            "Nous notons étuis pliants, notices multi-couches, étuis aluminisés et expéditeurs face aux critères d'éco-conception et faisons remonter les SKU Classe C en B.",
          serviceHref: "/fr/services/recyclability-assessment",
          serviceLabel: "Évaluation de recyclabilité",
        },
        {
          article: "Article 25",
          headline:
            "Restrictions à usage unique et Annexe V — applicabilité aux emballages de médicaments et dispositifs médicaux",
          deadline: "Applicable à compter du 12 août 2026",
          action:
            "Nous cartographions chaque SKU face au régime d'exemption de l'article 25, documentons la dérogation médicament et produisons des clauses fournisseurs prêtes à défendre la position.",
          serviceHref: "/fr/services/ppwr-gap-analysis",
          serviceLabel: "Analyse des écarts PPWR",
        },
        {
          article: "Article 39",
          headline:
            "Déclaration de conformité exigée avant placement de l'emballage sur le marché",
          deadline: "À compter du 12 août 2026, conservée 10 ans (Art. 40)",
          action:
            "Nous montons le dossier technique par unité d'emballage, rédigeons la DoC et l'alignons sur le dossier réglementaire MDR ou AMM existant pour des audits cohérents.",
          serviceHref: "/fr/services/declaration-of-conformity",
          serviceLabel: "Déclaration de conformité",
        },
      ],
      risksChip: "Risques propres au secteur",
      risksTitle:
        "Là où les fabricants pharma sous-estiment le règlement.",
      sectorRisks: [
        "Recouvrement réglementaire avec le règlement (UE) 2017/745 (MDR) et la directive 2001/83/CE (médicaments) : un changement de substrat sur une unité d'emballage primaire peut déclencher une variation Type II ou une mise à jour du dossier technique MDR — la DoC PPWR, le dossier technique MDR et le dossier AMM doivent avancer ensemble.",
        "Plancher de contenu recyclé contact-sensible : l'article 7 fixe l'objectif contact-sensible non PET à 10 % en 2030 (puis 25 % en 2040), mais la qualification pharmacopée extractables/leachables de la résine recyclée pour film blister et poches IV est la vraie contrainte — l'approvisionnement en recyclat qualifié est aujourd'hui rare.",
        "Règles de compostabilité (article 9) typiquement hors périmètre pharma mais exigent une documentation explicite : sachets de thé, étiquettes fruits/légumes et sacs très légers sont dans le périmètre ; blisters pharmaceutiques et présentations unitaires non — la justification doit être documentée pour défendre la position face à une autorité de surveillance du marché.",
        "Emballage de transport chaîne du froid : expéditeurs isothermes, panneaux d'isolation sous vide et pains de gel se notent typiquement mal face aux critères d'éco-conception Art. 6 — le coût du basculement vers des expéditeurs isothermes mono-matériau sans EPS ou à base papier est non négligeable et exige validation par essai.",
        "Substrats des notices patient : papier couché ultra-fin, dépliants multi-couches et éléments de sécurité laminés peuvent faire chuter un étui de Classe B à Classe C — un basculement invisible pour le patient mais contraignant au titre de l'article 6 à compter du 1er janvier 2030.",
        "L'emballage des essais cliniques n'est pas exempté : l'emballage du produit comparateur, les approvisionnements en aveugle et les étuis de médicament expérimental (IMP) placés sur le marché européen exigent toujours une DoC au titre de l'article 39 et une notation Art. 6, même si le produit sous-jacent relève du règlement (UE) 536/2014.",
      ],
      illustrativeChip: "Mission illustrative (anonymisée), pas un client réel",
      illustrativeTitle:
        "Comment nous traiterions un groupe pharma européen mid-cap.",
      illustrativeParagraphs: [
        "Un groupe pharma européen mid-cap avec trois sites de fabrication UE, un portefeuille de 140 médicaments sous prescription, une gamme OTC avec 24 SKU dont deux compléments nutritionnels oraux en périmètre contact alimentaire, et une ligne de dispositifs médicaux parallèle sous MDR vient nous voir douze mois avant la date d'application générale du 12 août 2026. Position de départ : 620 SKU emballages actifs, une équipe affaires réglementaires concentrée sur le dossier EMA et le dossier MDR, aucun programme DoC PPWR consolidé, et une organisation Achats déjà confrontée à des factures d'éco-contributions modulées en France et aux Pays-Bas.",
        "Nous ouvrons par une feuille de route chiffrée en 5 jours sur les articles 5, 6, 7, 25 et 39. Dans la première semaine, nous disposons d'une détermination dans/hors périmètre documentée sur les deux produits OTC contact alimentaire au titre de l'article 5, d'une notation Classe A/B/C sur chaque étui pliant et expéditeur, d'un écart contenu recyclé contact-sensible chiffré au titre de l'article 7 avec calendriers de qualification pharmacopée, et d'une carte d'applicabilité Art. 25 / Annexe V. Le premier livrable est un briefing article par article de 18 pages que le directeur des Affaires réglementaires emporte dans la prochaine revue système qualité.",
        "À partir de là, la mission se déroule en trois flux coordonnés sur quinze mois : un programme PFAS-out sur les deux produits OTC contact alimentaire, clôturé avant le 12 août 2026 ; un programme de qualification contenu recyclé contact-sensible avec deux fournisseurs de résine et les variations Type IB / Type II concernées déposées en parallèle ; et un programme DoC centralisé aligné sur la structure du dossier technique MDR existant, avec documents conservés dix ans au titre de l'article 40. Sortie au mois quinze : un périmètre PPWR défendable par SKU, une trajectoire de contenu recyclé prévisible à 2030, et un dossier réglementaire cohérent que le directeur QA peut présenter à une autorité de surveillance du marché et à un organisme notifié dans le même cycle d'audit.",
      ],
      faqTitle: "PPWR pharma — questions fréquentes",
      sectorFaqs: [
        {
          question: "Les médicaments sont-ils exemptés de la PPWR ?",
          answer:
            "Non. Les médicaments ne bénéficient pas d'une exemption générale. L'emballage des médicaments est dans le périmètre du règlement (UE) 2025/40, avec des dérogations spécifiques à l'article 25 / Annexe V pour certaines restrictions à usage unique et des accommodements partiels ailleurs. Notation Art. 6, contenu recyclé Art. 7 pour l'emballage plastique, Déclaration de conformité Art. 39 et REP Art. 45 s'appliquent toutes à l'emballage pharmaceutique placé sur le marché européen.",
        },
        {
          question:
            "Comment la PPWR interagit-elle avec le règlement (UE) 2017/745 (MDR) pour l'emballage des dispositifs médicaux ?",
          answer:
            "La PPWR et le MDR sont des régimes parallèles. Le MDR régit la conformité du dispositif médical lui-même, y compris le rôle de l'emballage dans le maintien de la stérilité et la prévention des dommages. La PPWR régit les exigences de durabilité et de recyclabilité de cet emballage. Un fabricant de dispositif doit satisfaire aux deux — un changement de substrat sur un système de barrière stérile exige à la fois une mise à jour du dossier technique MDR et une Déclaration de conformité PPWR.",
        },
        {
          question:
            "Quel est l'objectif de contenu recyclé contact-sensible pour les plastiques pharmaceutiques ?",
          answer:
            "L'article 7 fixe un minimum de 10 % de contenu recyclé pour l'emballage plastique en contact sensible dans les plastiques autres que le PET à compter du 1er janvier 2030, puis 25 % à compter du 1er janvier 2040. L'emballage PET en contact sensible est à 30 % en 2030 (puis 50 %). Film blister pharmaceutique, PVC des poches IV, flacons HDPE pour formes sèches orales et emballages primaires similaires entrent dans la fourchette 10 %/25 %. La contrainte limitante en pratique est la qualification pharmacopée de la résine recyclée.",
        },
        {
          question:
            "Les emballages des essais cliniques et des médicaments expérimentaux (IMP) sont-ils dans le périmètre ?",
          answer:
            "Oui. L'emballage placé sur le marché européen pour les essais cliniques ou l'approvisionnement IMP n'est pas exempté de manière autonome au titre de la PPWR. Déclaration de conformité Art. 39, notation recyclabilité Art. 6 et seuils de contenu recyclé Art. 7 s'appliquent, avec la nuance pratique que l'emballage des essais cliniques est typiquement de plus faible volume et sur mesure, donc la moyenne au niveau usine de l'article 7 tolère une plus grande variabilité.",
        },
        {
          question:
            "Comment l'interdiction PFAS de l'article 5 interagit-elle avec l'emballage pharmaceutique ?",
          answer:
            "L'article 5 interdit les PFAS intentionnellement ajoutés dans l'emballage contact alimentaire à compter du 12 août 2026 au-delà de 25 ppb (tout PFAS individuel, analyse ciblée), 250 ppb (somme des PFAS, ciblée) ou 50 ppm (indicateur fluor total). La plupart des emballages de médicaments ne sont pas en contact alimentaire et ne sont donc pas directement captés par l'article 5, mais l'aliment médical, l'emballage des compléments nutritionnels oraux et certains produits OTC le sont. Nous documentons la détermination dans/hors périmètre par SKU et menons la substitution là où c'est nécessaire.",
        },
      ],
      contactTitle: "Mettez votre emballage pharmaceutique en conformité PPWR",
      contactDescription:
        "Réservez une session de travail de 30 minutes. Nous cartographions votre emballage médicament et dispositif médical face au règlement (UE) 2025/40 — exemptions, contenu recyclé, recouvrement MDR et DoC — et livrons une feuille de route chiffrée sous 5 jours ouvrés.",
    };
  }

  return {
    metaTitle:
      "PPWR for pharma — medicinal products, medical devices, contact-sensitive plastics | Pactum",
    metaDescription:
      "How Regulation (EU) 2025/40 reshapes pharmaceutical and medical-device packaging — exemptions, contact-sensitive recycled-content limits, MDR overlap, and Article 39 Declaration of Conformity for blisters, vials and outer cartons.",
    ogAlt: "PPWR advisory for pharma — Pactum",
    twitterTitle: "PPWR for pharma — Pactum",
    twitterDescription:
      "Regulation (EU) 2025/40 applied to medicinal products, medical devices and contact-sensitive packaging.",
    homeLabel: "Home",
    sectorsLabel: "Sectors",
    sectorLabel: "Pharma & medical devices",
    serviceJsonLdName: "PPWR advisory for pharmaceutical",
    serviceJsonLdDescription:
      "Pure-play advisory on Regulation (EU) 2025/40 for pharmaceutical and medical-device manufacturers — exemptions and partial carve-outs under Article 25, contact-sensitive recycled content under Article 7, regulatory overlap with Regulation (EU) 2017/745 MDR and Directive 2001/83/EC, and Article 39 Declaration of Conformity for blisters, vials, ampoules, IV bags and outer cartons.",
    audienceType:
      "Pharmaceutical and medical-device manufacturers placing packaging on the EU market",
    hero: {
      eyebrow: "SECTOR",
      title: "PPWR for pharma and medical devices",
      subtitle:
        "Regulation (EU) 2025/40 applies to pharmaceutical and medical-device packaging with partial carve-outs — not blanket exemptions. Recycled-content rules are constrained for contact-sensitive plastics, the regulation overlaps with Regulation (EU) 2017/745 MDR and Directive 2001/83/EC, and the Article 39 Declaration of Conformity sits alongside your existing regulatory dossier.",
      primaryCta: "Book a working session",
      secondaryCta: "Free PPWR readiness check",
    },
    whatPpwr: {
      chip: "What PPWR means for pharma",
      title:
        "Targeted carve-outs, not exemptions — and the DoC sits next to the MDR file.",
      paragraphs: [
        <>
          Regulation (EU) 2025/40, published in OJ L on 22 January 2025 and entered into
          force on 11 February 2025, applies generally from 12 August 2026. For
          pharmaceutical and medical-device manufacturers the key starting point is
          negative: the PPWR does not grant a blanket exemption to medicinal-product or
          medical-device packaging. It grants targeted carve-outs in Article 25 and
          partial accommodations in Article 7 for contact-sensitive plastics — but
          Article 6 grading, Article 39 Declaration of Conformity, Article 40 technical
          documentation and Article 45 Extended Producer Responsibility all apply.
        </>,
        <>
          Article 7 is where the operational tension is sharpest. Contact-sensitive
          packaging in plastics other than PET — the bucket that captures most blister
          films (PVC, PVDC, COC, COP), IV-bag PVC, HDPE solid-oral-dose bottles and
          similar primary pack — must reach 10% minimum recycled content from 1 January
          2030, rising to 25% from 1 January 2040. Contact-sensitive PET packaging
          moves to 30% by 2030 (rising to 50%). The binding constraint is not
          regulatory; it is supply-side. Pharmacopoeial qualification (Ph. Eur. 3.1.x,
          ICH Q3D, USP &lt;661&gt; and the relevant extractables/leachables programmes)
          for recycled resin is currently a multi-quarter exercise per substrate per
          supplier.
        </>,
        <>
          Article 5 PFAS thresholds — 25 ppb for any individual PFAS by targeted
          analysis, 250 ppb for the sum of PFAS, 50 ppm of total fluorine as an
          indicator — apply to food-contact packaging from 12 August 2026. Most
          medicinal-product packaging is out of food-contact scope, but medical food,
          oral nutritional supplements and certain OTC formats fall in. The rationale
          for placing each SKU in or out of scope must be documented in the technical
          file under Article 40, defensible to a market-surveillance authority on
          request.
        </>,
        <>
          Article 6 recyclability grading applies across the secondary and tertiary
          packaging stack — folding cartons, patient-information leaflets, multi-layer
          foldouts, security-feature laminates, shipper boxes and cold-chain insulated
          shippers. Class A (≥95%), Class B (≥80%) and Class C (≥70%) are the grading
          bands; from 1 January 2030 every unit must reach Class C, and from 1 January
          2038 Class C is banned. Cold-chain insulated shippers and vacuum-insulation
          panels are the most exposed components today, often grading C without
          substrate redesign.
        </>,
        <>
          Article 9 compostability obligations (tea bags, fruit/veg labels, very
          lightweight carrier bags) typically do not apply to pharmaceutical packaging,
          but the in-/out-of-scope determination must be documented. Article 25 and
          Annex V single-use restrictions also need careful mapping — most
          pharmaceutical-product packaging falls outside the listed bans, but the
          documented exemption argument is what defends the SKU at audit. The PPWR
          regime sits alongside, not instead of, Regulation (EU) 2017/745 (MDR),
          Directive 2001/83/EC on medicinal products for human use, and Regulation (EU)
          536/2014 on clinical trials. Substrate or component changes can trigger
          parallel regulatory updates.
        </>,
        <>
          Article 39 closes the loop: every packaging unit needs a Declaration of
          Conformity supported by a technical file retained for 10 years under Article
          40. We run our pharmaceutical engagements so the PPWR DoC, the MDR technical
          file and the marketing-authorisation dossier move in lockstep — see our{" "}
          <a
            href="/en/services/ppwr-gap-analysis"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            PPWR Gap Analysis
          </a>{" "}
          for the article-by-article scope, the{" "}
          <a
            href="/en/services/recycled-content-roadmap"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            Recycled Content Roadmap
          </a>{" "}
          for the pharmacopoeial-qualified recyclate sourcing path, and the{" "}
          <a
            href="/en/services/declaration-of-conformity"
            className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
          >
            Declaration of Conformity
          </a>{" "}
          programme that aligns with your existing dossier.
        </>,
      ],
    },
    articlesEyebrow: "Articles that bite hardest",
    articlesTitle: "Five PPWR articles that determine your pharmaceutical readiness.",
    articlesIntro:
      "Each card pairs the binding obligation with the specific service we run to close it.",
    whatWeDoLabel: "What we do about it.",
    goToLabel: (service) => `Go to ${service}`,
    articlesThatBite: [
      {
        article: "Article 7",
        headline:
          "Contact-sensitive non-PET plastics: 10% recycled content (2030), 25% (2040)",
        deadline: "From 1 January 2030, then 1 January 2040",
        action:
          "We model the recycled-content path for blister-grade PVC/PVDC, PP IV-bag film and HDPE bottles, validate against pharmacopoeial extractables/leachables, and structure the regulatory variation pathway.",
        serviceHref: "/en/services/recycled-content-roadmap",
        serviceLabel: "Recycled Content Roadmap",
      },
      {
        article: "Article 5",
        headline:
          "PFAS thresholds (25 ppb / 250 ppb / 50 ppm) in food-contact packaging — interaction with pharma scope",
        deadline: "Applies from 12 August 2026",
        action:
          "We separate the SKUs in scope (e.g. medical food, OTC food-contact packaging) from the SKUs out of scope (most medicinal products) and document the rationale supplier-side.",
        serviceHref: "/en/services/pfas-compliance",
        serviceLabel: "PFAS Compliance",
      },
      {
        article: "Article 6",
        headline:
          "Recyclable-by-design grading (Class A/B/C) for outer cartons, leaflets and secondary packaging",
        deadline:
          "Class C minimum from 1 January 2030; Class C banned from 1 January 2038",
        action:
          "We grade folding cartons, multi-layer leaflets, foiled secondary cartons and shipper boxes against the design-for-recycling criteria and engineer Class C SKUs up to B.",
        serviceHref: "/en/services/recyclability-assessment",
        serviceLabel: "Recyclability Assessment",
      },
      {
        article: "Article 25",
        headline:
          "Single-use restrictions and Annex V — applicability to medicinal and medical-device packaging",
        deadline: "Applies from 12 August 2026",
        action:
          "We map every SKU against the Article 25 exemption regime, document the medicinal-product carve-out and produce supplier-ready clauses to defend the position.",
        serviceHref: "/en/services/ppwr-gap-analysis",
        serviceLabel: "PPWR Gap Analysis",
      },
      {
        article: "Article 39",
        headline:
          "Declaration of Conformity required before placing packaging on the market",
        deadline: "From 12 August 2026, retained for 10 years (Article 40)",
        action:
          "We assemble the technical file per packaging unit, draft the DoC and align it with the existing MDR or marketing-authorisation regulatory dossier so audits are coherent.",
        serviceHref: "/en/services/declaration-of-conformity",
        serviceLabel: "Declaration of Conformity",
      },
    ],
    risksChip: "Sector-specific risks",
    risksTitle: "Where pharma manufacturers underestimate the regulation.",
    sectorRisks: [
      "Regulatory overlap with Regulation (EU) 2017/745 (MDR) and Directive 2001/83/EC (medicinal products): a substrate change on a primary packaging unit can trigger a Type-II variation or an MDR technical-documentation update — the PPWR DoC, the MDR technical file and the marketing authorisation dossier must move in lockstep.",
      "Contact-sensitive recycled-content lower bound: Article 7 sets the contact-sensitive non-PET target at 10% by 2030 (rising to 25% by 2040), but the pharmacopoeial extractables/leachables qualification of recycled resin for blister film and IV-bag film is the real constraint — qualified recyclate supply is currently scarce.",
      "Compostability rules (Article 9) typically out of scope for pharma but require explicit documentation: tea/coffee bags, fruit/veg labels and very lightweight carrier bags are in scope; pharmaceutical blisters and unit-dose packs are not — the rationale must be documented to defend the position to a market-surveillance authority.",
      "Cold-chain transport packaging: insulated shippers, vacuum-insulation panels and gel packs typically grade poorly against Article 6 design-for-recycling criteria — the cost of switching to mono-material EPS-free or paper-based insulated shippers is non-trivial and trial-validated.",
      "Patient-information leaflet substrates: ultra-thin coated paper, multi-layer foldouts and laminated security features can drag a folding carton from Class B to Class C grading — a switch that is invisible to the patient but binding under Article 6 from 1 January 2030.",
      "Clinical-trial packaging is not exempt: comparator-product packaging, blinded supplies and investigational medicinal product (IMP) outer cartons placed on the EU market still need a DoC under Article 39 and an Article 6 grading, even though the underlying product moves under Regulation (EU) 536/2014.",
    ],
    illustrativeChip: "Illustrative engagement, not a real client",
    illustrativeTitle: "How we'd approach a mid-cap European pharma group.",
    illustrativeParagraphs: [
      "A mid-cap European pharma group with three EU manufacturing sites, a prescription portfolio of 140 medicinal products, an OTC range with 24 SKUs including two oral nutritional supplements in food-contact scope, and a parallel medical-device line under MDR comes to us twelve months before the 12 August 2026 general application date. Their starting position: 620 active packaging SKUs, a regulatory affairs team focused on the EMA dossier and the MDR file, no consolidated PPWR DoC programme, and a procurement organisation already fielding eco-modulated EPR fee invoices in France and the Netherlands.",
      "We open with a 5-day costed roadmap on Articles 5, 6, 7, 25 and 39. Within the first week we have a documented in-scope/out-of-scope determination on the two food-contact OTC products under Article 5, a Class A/B/C grading on every folding carton and shipper, a quantified contact-sensitive recycled-content gap under Article 7 with pharmacopoeial qualification timelines, and an Article 25 / Annex V applicability map. The first deliverable is an 18-page article-by-article briefing the Head of Regulatory Affairs takes into the next quality-management-system review.",
      "From there the engagement runs in three coordinated streams over fifteen months: a PFAS-out programme on the two OTC food-contact products, closing before 12 August 2026; a contact-sensitive recycled-content qualification programme with two resin suppliers and the relevant Type-IB / Type-II variations filed in parallel; and a centralised DoC programme aligned with the existing MDR technical file structure, with documents retained for ten years per Article 40. Output at month fifteen: a defensible PPWR scope per SKU, a forecastable recycled-content path to 2030, and a coherent regulatory dossier the Head of QA can present to a market-surveillance authority and a notified body in the same audit cycle.",
    ],
    faqTitle: "Pharma PPWR — frequently asked questions",
    sectorFaqs: [
      {
        question: "Are medicinal products exempt from the PPWR?",
        answer:
          "No. Medicinal products are not granted a blanket exemption. The packaging of medicinal products is in scope of Regulation (EU) 2025/40, with specific carve-outs under Article 25 / Annex V for some single-use restrictions and partial accommodations elsewhere. Article 6 grading, Article 7 recycled content for plastic packaging, Article 39 Declaration of Conformity and Article 45 EPR all apply to pharmaceutical packaging placed on the EU market.",
      },
      {
        question:
          "How does the PPWR interact with Regulation (EU) 2017/745 (MDR) for medical-device packaging?",
        answer:
          "The PPWR and the MDR are parallel regimes. The MDR governs the conformity of the medical device itself, including the role of packaging in maintaining sterility and preventing damage. The PPWR governs the sustainability and recyclability requirements of that packaging. A device manufacturer must satisfy both — a substrate change on a sterile barrier system requires both an MDR technical-documentation update and a PPWR Declaration of Conformity.",
      },
      {
        question:
          "What is the contact-sensitive recycled-content target for pharmaceutical plastics?",
        answer:
          "Article 7 sets a 10% minimum recycled content for contact-sensitive plastic packaging in plastics other than PET from 1 January 2030, rising to 25% from 1 January 2040. Contact-sensitive PET packaging is at 30% by 2030 (rising to 50%). Pharmaceutical blister film, IV-bag PVC, HDPE solid-oral-dose bottles and similar primary packaging fall under the 10%/25% bracket. The binding constraint in practice is pharmacopoeial qualification of recycled resin.",
      },
      {
        question:
          "Are clinical-trial and investigational medicinal product (IMP) packaging in scope?",
        answer:
          "Yes. Packaging placed on the EU market for clinical-trial or IMP supply is not granted a stand-alone exemption under the PPWR. Article 39 Declaration of Conformity, Article 6 recyclability grading and Article 7 recycled-content thresholds apply, with the practical caveat that clinical-trial packaging is typically lower volume and bespoke, so the Article 7 plant-level averaging tolerates greater variability.",
      },
      {
        question:
          "How does the PFAS Article 5 ban interact with pharmaceutical packaging?",
        answer:
          "Article 5 prohibits intentionally added PFAS in food-contact packaging from 12 August 2026 above 25 ppb (any individual PFAS, targeted analysis), 250 ppb (sum of PFAS, targeted) or 50 ppm (total fluorine indicator). Most medicinal-product packaging is not in food contact and is therefore not directly captured by Article 5, but medical food, oral nutritional supplement packaging and certain OTC products are. We document the in-scope/out-of-scope determination per SKU and run substitution where it is needed.",
      },
    ],
    contactTitle: "Get your pharmaceutical packaging PPWR-ready",
    contactDescription:
      "Book a 30-minute working session. We map your medicinal-product and medical-device packaging against Regulation (EU) 2025/40 — exemptions, recycled content, MDR overlap and DoC — and deliver a costed roadmap within 5 working days.",
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

export default async function PharmaceuticalSectorPage({
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
        imageSrc="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80&auto=format&fit=crop"
      />

      {/* What PPWR means for pharmaceutical */}
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

      <PharmaceuticalStats locale={locale} />

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
