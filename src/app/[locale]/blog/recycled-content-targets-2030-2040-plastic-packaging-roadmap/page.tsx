import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogLayout } from "@/components/shared/BlogLayout";
import { ArticleSummary } from "@/components/shared/ArticleSummary";
import { InlineCTA } from "@/components/shared/InlineCTA";
import { TipBox } from "@/components/shared/TipBox";
import { getPostBySlug } from "@/lib/blog-data";
import { isLocale, LOCALE_OG_TAG } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

const slug = "recycled-content-targets-2030-2040-plastic-packaging-roadmap";

type RouteParams = { params: Promise<{ locale: string }> };

const TITLE = {
  fr: "Objectifs de contenu recyclé 2030 / 2040 — feuille de route plastique",
  en: "Recycled content targets 2030 / 2040: the plastic packaging roadmap",
} as const;

const META_TITLE = {
  fr: "Contenu recyclé 2030 / 2040 — feuille de route",
  en: "Recycled content 2030 / 2040: the plastic roadmap",
} as const;

const META_DESCRIPTION = {
  fr: "L'article 7 du Règlement (UE) 2025/40 (la PPWR) fixe quatre objectifs de contenu recyclé qui montent de 2030 à 2040. Chiffres, certification, feuille de route à 24 mois.",
  en: "Article 7 of Regulation (EU) 2025/40 sets four recycled content targets that escalate from 2030 to 2040. The numbers, certification and a 24-month roadmap.",
} as const;

const OG_TITLE = {
  fr: "Objectifs de contenu recyclé 2030 / 2040 — feuille de route plastique",
  en: "Recycled content 2030 / 2040: the plastic packaging roadmap",
} as const;

const OG_DESCRIPTION = {
  fr: "Les quatre objectifs, bilan massique vs attribution libre, certification (CEN/TS 16137, ISCC PLUS) et feuille de route d'approvisionnement à 24 mois.",
  en: "The four targets, mass balance vs free attribution, certification (CEN/TS 16137, ISCC PLUS) and the 24-month sourcing roadmap.",
} as const;

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale;
  const post = getPostBySlug(slug, locale)!;
  const url = `${siteConfig.url}/${locale}/blog/${slug}`;

  return {
    title: META_TITLE[locale],
    description: META_DESCRIPTION[locale],
    keywords: post.keywords,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        fr: `/fr/blog/${slug}`,
        en: `/en/blog/${slug}`,
        "x-default": `/fr/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: OG_TITLE[locale],
      description: OG_DESCRIPTION[locale],
      url,
      locale: LOCALE_OG_TAG[locale],
      alternateLocale: locale === "fr" ? ["en_GB"] : ["fr_FR"],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
      images: post.hero ? [{ url: post.hero.src, alt: post.hero.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: OG_TITLE[locale],
      description: META_DESCRIPTION[locale],
      images: post.hero ? [post.hero.src] : undefined,
    },
  };
}

export default async function RecycledContentRoadmap({ params }: RouteParams) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const post = getPostBySlug(slug, locale)!;
  const url = `${siteConfig.url}/${locale}/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE[locale],
    description: post.excerpt,
    image: post.hero ? [post.hero.src] : [],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/seo/logo.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: locale,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "fr" ? "Accueil" : "Home",
        item: `${siteConfig.url}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "fr" ? "Analyses" : "Insights",
        item: `${siteConfig.url}/${locale}/blog`,
      },
      { "@type": "ListItem", position: 3, name: TITLE[locale], item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {locale === "fr" ? (
        <BlogLayout
          title={post.title}
          description={post.excerpt}
          author={`${post.author.name} · ${post.author.role}`}
          readingTime={post.readTime}
          publishedAt="2 avril 2026"
          category={post.category}
          heroImage={post.hero!.src}
          ctaTitle="Construisez la feuille de route contenu recyclé que votre comité de pilotage signera"
          ctaDescription="Le service article 7 de Pactum cartographie l'écart par type d'emballage, par site, par année, classe les options d'approvisionnement face au prix et au risque de certification, et produit la feuille de route à 24 mois. Cinq jours ouvrés, NDA en amont."
        >
          <nav
            aria-label="Fil d'Ariane"
            className="not-prose mb-6 text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={`/${locale}`} className="hover:text-foreground">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/${locale}/blog`} className="hover:text-foreground">
                  Analyses
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Contenu recyclé 2030 / 2040</li>
            </ol>
          </nav>

          <ArticleSummary
            items={[
              "À compter du 1er janvier 2030, les emballages plastiques placés sur le marché de l'Union doivent contenir un minimum de matière recyclée : 30 % (PET sensible au contact), 10 % (autres plastiques sensibles au contact), 30 % (bouteilles plastique de boisson à usage unique) et 35 % (autres emballages plastiques).",
              "À compter du 1er janvier 2040, ces quatre objectifs passent à 50 % / 25 % / 65 % / 65 % — les « quatre chiffres à retenir ».",
              "Le pourcentage est calculé par type d'emballage, par site de production, par année — pas par unité individuelle.",
              "L'attribution par bilan massique est acceptable lorsqu'elle est étayée par une certification de chaîne de traçabilité (CEN/TS 16137, ISCC PLUS, RecyClass, EuCertPlast). Une certification papier seule ne passera pas un audit article 39.",
              "La capacité européenne de rPET de qualité contact alimentaire est insuffisante face à la demande 2030. Une décision faire ou faire faire en 2026 n'est structurellement pas la même qu'en 2028.",
            ]}
          />

          <h2 id="essentiel">L'essentiel — les quatre chiffres</h2>
          <p>
            À compter du <strong>1er janvier 2030</strong>, l'article 7 du{" "}
            <strong>Règlement (UE) 2025/40 (la PPWR)</strong> impose aux
            emballages plastiques placés sur le marché de l'Union un minimum
            de contenu recyclé mesuré sur quatre catégories d'emballage. Les
            quatre chiffres sont : <strong>30 %</strong> pour les emballages
            sensibles au contact contenant le PET comme composant majeur,{" "}
            <strong>10 %</strong> pour les emballages sensibles au contact
            faits de plastiques autres que le PET, <strong>30 %</strong> pour
            les bouteilles plastique de boisson à usage unique, et{" "}
            <strong>35 %</strong> pour tous les autres emballages plastiques.
            À compter du <strong>1er janvier 2040</strong>, ces quatre
            chiffres passent à <strong>50 % / 25 % / 65 % / 65 %</strong>. Le
            texte intégral est sur{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>
            .
          </p>
          <p>
            Le calcul se fait par type d'emballage, par site de production,
            par année. Le contenu recyclé doit provenir de déchets plastiques{" "}
            <strong>post-consommation</strong> — pas de chutes industrielles
            pré-consommation. La certification sous-tend la chaîne de
            traçabilité et le bilan massique est acceptable. La Commission
            doit adopter un acte d'exécution sur la méthodologie de calcul
            précise au titre de l'article 7(8) ; un projet a été mis en
            consultation fin 2025.
          </p>

          <h2 id="quatre-categories">Les quatre catégories d'objectifs</h2>
          <p>
            L'article 7 fixe quatre catégories d'emballage mutuellement
            exclusives. Une unité d'emballage relève d'une seule. La mauvaise
            classification est l'erreur initiale la plus fréquente — et la
            plus coûteuse.
          </p>
          <h3 id="cat-1">Emballages sensibles au contact à dominante PET — 30 % en 2030</h3>
          <p>
            Les emballages sensibles au contact sont définis à l'article 3
            par renvoi au Règlement (CE) 1935/2004 (contact alimentaire), à
            la directive 2001/83/CE (médicaments à usage humain), au
            Règlement (UE) 2017/745 (dispositifs médicaux) et autres usages
            connexes. Lorsque l'emballage contient le PET comme composant
            majeur, l'objectif de contenu recyclé est de 30 % à partir de
            2030 et passe à 50 % à partir de 2040. Cela couvre l'essentiel
            des barquettes PET au contact alimentaire, des bouteilles de
            produits sensibles, des blisters PET pharmaceutiques et
            similaires.
          </p>
          <h3 id="cat-2">Emballages sensibles au contact en autres plastiques — 10 % en 2030</h3>
          <p>
            Lorsque l'emballage sensible au contact est fait de plastiques
            autres que le PET — PP, HDPE, LDPE, PS, EVOH, PA — l'objectif est
            de 10 % en 2030 et de 25 % en 2040. Le seuil plus bas reflète la
            réalité d'approvisionnement : la capacité PP et HDPE recyclés
            qualité contact alimentaire à grande échelle est matériellement
            plus faible que pour le rPET, et la procédure d'autorisation
            EFSA pour les résines recyclées non-PET au contact alimentaire
            est relativement récente.
          </p>
          <h3 id="cat-3">Bouteilles plastique de boisson à usage unique — 30 % en 2030</h3>
          <p>
            Les bouteilles plastique de boisson à usage unique jusqu'à 3 L —
            les bouteilles concernées par l'architecture de consigne de
            l'article 50 — sont soumises à un objectif de 30 % en 2030 (déjà
            partiellement appliqué par la directive (UE) 2019/904 depuis
            2025 pour les bouteilles PET), porté à 65 % en 2040. C'est la
            catégorie où la demande de rPET dominera. C'est aussi celle où
            la collecte bouteille-à-bouteille via consigne est
            l'approvisionnement le plus efficace.
          </p>
          <h3 id="cat-4">Autres emballages plastiques — 35 % en 2030</h3>
          <p>
            La catégorie balai — emballages plastiques non sensibles au
            contact, hors bouteilles de boisson — est à 35 % à partir de
            2030, montant à 65 % à partir de 2040. Ce panier inclut le film
            étirable, les emballages plastiques secondaires, les enveloppes
            e-commerce, les sacs industriels, les enveloppes externes FMCG,
            les films de transport et la large population d'emballages
            plastiques B2B. L'objectif 65 % en 2040 est en pratique le plus
            agressif des quatre, parce que l'approvisionnement doit
            principalement provenir de déchets plastiques mélangés
            post-consommation et qu'il peine actuellement sur la qualité.
          </p>

          <h2 id="tableau-chiffres">Les chiffres 2030 et les chiffres 2040</h2>
          <p>
            Le tableau ci-dessous est la référence consolidée. Nous le
            gardons sur la table pendant chaque comité de pilotage client.
          </p>
          <table>
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Objectif 2030</th>
                <th>Objectif 2040</th>
                <th>Applications typiques</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sensible au contact à dominante PET</td>
                <td>30 %</td>
                <td>50 %</td>
                <td>Barquettes PET au contact alimentaire, bouteilles sensibles, PET pharmaceutique</td>
              </tr>
              <tr>
                <td>Sensible au contact en autres plastiques</td>
                <td>10 %</td>
                <td>25 %</td>
                <td>PP / HDPE / LDPE au contact alimentaire, multi-couches EVOH, PA</td>
              </tr>
              <tr>
                <td>Bouteilles plastique de boisson à usage unique</td>
                <td>30 %</td>
                <td>65 %</td>
                <td>Eau, boissons rafraîchissantes, jus, isotoniques jusqu'à 3 L</td>
              </tr>
              <tr>
                <td>Autres emballages plastiques</td>
                <td>35 %</td>
                <td>65 %</td>
                <td>
                  Film étirable, enveloppes, films de transport, externes FMCG, sacs industriels
                </td>
              </tr>
            </tbody>
          </table>

          <TipBox variant="info" label="Ce que ce n'est pas">
            L'article 7 ne s'applique ni au papier, ni au verre, ni au métal,
            ni au bois. Ces matériaux ont leurs propres régimes de
            recyclabilité et de REP. L'article 7 est une règle plastique
            uniquement. Le contenu recyclé pour les emballages papier est
            régi par la modulation nationale des contributions REP, pas par
            un minimum européen contraignant.
          </TipBox>

          <h2 id="calcul">Comment le contenu recyclé est mesuré</h2>
          <p>
            L'article 7(8) fixe le principe de calcul : le pourcentage de
            contenu recyclé est calculé en{" "}
            <strong>moyenne par type d'emballage, par site de production, par année</strong>.
            Cette phrase unique structure la discipline opérationnelle.
          </p>
          <ul>
            <li>
              <strong>Par type d'emballage</strong> — les objectifs s'attachent
              à la catégorie d'emballage (par exemple toutes les barquettes
              PET au contact alimentaire mises sur le marché de l'Union par
              un opérateur), pas à un SKU individuel. La moyenne interne sur
              les SKU d'un même type d'emballage est admise.
            </li>
            <li>
              <strong>Par site de production</strong> — la moyenne est faite
              au niveau du site. Un transformateur ne peut pas faire de
              moyenne sur plusieurs sites ; chaque site doit atteindre
              l'objectif seul. Les producteurs multi-sites doivent gérer
              l'achat de matière recyclée site par site.
            </li>
            <li>
              <strong>Par année civile</strong> — la période de calcul
              glissante est l'année civile. Un rachat de rattrapage de rPET
              en T4 pour relever la moyenne annuelle est autorisé ; la
              conformité trimestrielle n'est pas requise.
            </li>
          </ul>
          <p>
            L'acte d'exécution de la Commission sur la méthodologie de
            calcul est attendu pour T3 2026, suivi des règles de
            vérification. Tant qu'il n'est pas adopté, la référence
            technique courante est la <strong>CEN/TS 16137</strong> sur la
            détermination du contenu recyclé dans les plastiques, combinée
            à la certification EuCertPlast ou équivalent. Le considérant 70
            de la PPWR indique clairement que l'attribution par bilan
            massique avec chaîne de traçabilité certifiée est acceptable, y
            compris pour les intrants issus du recyclage chimique.
          </p>

          <h2 id="bilan-massique">Bilan massique vs attribution libre</h2>
          <p>
            Deux modèles d'attribution coexistent dans la pratique actuelle.
            Le choix entre les deux importe.
          </p>
          <h3 id="bm-massique">Bilan massique avec chaîne de traçabilité certifiée</h3>
          <p>
            Le bilan massique permet à un producteur d'introduire une
            quantité définie de matière recyclée dans un procédé et
            d'attribuer le contenu recyclé à une quantité d'extrant
            correspondante, même si les intrants recyclés et vierges sont
            physiquement mélangés au niveau moléculaire (typique des
            charges issues du recyclage chimique passant par un vapocraqueur).
            Le bilan massique n'est crédible <em>que</em> lorsqu'il est
            vérifié de bout en bout par un certificateur via un schéma
            robuste. Les schémas de bilan massique certifiés courants sont{" "}
            <strong>ISCC PLUS</strong> (le plus utilisé sur les plastiques
            européens aujourd'hui) et <strong>RedCert²</strong>. Les deux
            sont reconnus par les principaux producteurs de résines.
          </p>
          <h3 id="bm-libre">Attribution libre — à éviter</h3>
          <p>
            L'attribution libre alloue les revendications de contenu
            recyclé aux extrants sans couplage physique ou volumique
            rigoureux. Elle n'est pas robuste, ne passera pas un audit de
            Déclaration de conformité au titre de l'article 39 et est de
            plus en plus rejetée par les éco-organismes nationaux lors des
            revues de modulation des contributions. Évitez les fournisseurs
            incapables de décrire leur modèle d'attribution par écrit.
          </p>

          <h2 id="certification">Certification — ce qui passe l'audit</h2>
          <p>
            Le paysage de la certification se consolide rapidement. Cinq
            cadres comptent pour un dossier de conformité article 7 en 2026.
          </p>
          <table>
            <thead>
              <tr>
                <th>Schéma</th>
                <th>Propriétaire</th>
                <th>Meilleur pour</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CEN/TS 16137</td>
                <td>CEN</td>
                <td>
                  Détermination du contenu recyclé dans les plastiques — spécification technique
                </td>
                <td>La norme de référence pour la méthode de mesure.</td>
              </tr>
              <tr>
                <td>ISCC PLUS</td>
                <td>ISCC</td>
                <td>Certification bilan massique de la chaîne de traçabilité des charges</td>
                <td>Dominant dans les plastiques recyclés chimiquement et bio-circulaires européens.</td>
              </tr>
              <tr>
                <td>RecyClass</td>
                <td>Plastics Recyclers Europe</td>
                <td>
                  Recyclabilité et traçabilité des plastiques recyclés mécaniquement
                </td>
                <td>Audits de traçabilité au niveau du transformateur.</td>
              </tr>
              <tr>
                <td>EuCertPlast</td>
                <td>EuCertPlast / Cyclos-HTP</td>
                <td>
                  Certification des recycleurs — origine, traçabilité, audit du recyclat
                </td>
                <td>Exigée par plusieurs éco-organismes pour l'éco-modulation.</td>
              </tr>
              <tr>
                <td>RedCert²</td>
                <td>Redcert GmbH</td>
                <td>Certification bilan massique (matières premières renouvelables)</td>
                <td>Moins fréquent dans le plastique ; usage en alimentation animale et bioénergie.</td>
              </tr>
            </tbody>
          </table>
          <p>
            La Déclaration de conformité de l'article 39 défendable
            référence la <strong>CEN/TS 16137</strong> pour la mesure, plus
            la certification de chaîne de traçabilité (ISCC PLUS pour la
            charge en bilan massique, ou EuCertPlast pour le recyclat
            mécanique), plus la certification de site du transformateur
            (par ex. RecyClass).
          </p>

          <TipBox variant="warning" label="La certification papier ne passe pas">
            Un « certificat d'origine recyclée » émis par un négociant,
            sans audit de chaîne de traçabilité ni accréditation de schéma,
            ne constitue pas une preuve au sens de l'article 7. Nous le
            voyons régulièrement dans l'approvisionnement rPET au comptant.
            Les éco-organismes nationaux les rejettent déjà lors de la
            vérification des contributions. La DoC article 39 doit
            référencer un schéma accrédité, pas un papier à en-tête.
          </TipBox>

          <h2 id="probleme-approvisionnement">Le problème d'approvisionnement</h2>
          <p>
            La demande 2030 en rPET qualité contact alimentaire, en PP /
            HDPE recyclé mécaniquement qualité contact alimentaire et en
            charges recyclées chimiquement autorisées EFSA dépassera
            matériellement la capacité installée dans l'Union. C'est la
            réalité opérationnelle à laquelle se heurte le règlement.
          </p>
          <p>
            Le suivi de capacité de Plastics Recyclers Europe situait la
            capacité européenne installée de recyclage mécanique du PET
            autour de 2,4 millions de tonnes fin 2024, dont environ
            1,5 million de tonnes autorisées qualité contact alimentaire.
            La demande européenne d'emballage PET approche les 5 millions
            de tonnes par an. À un objectif de 30 % sur le PET sensible au
            contact à dominante PET plus 30 % sur les bouteilles de boisson
            à usage unique, la demande non contrainte en rPET qualité
            contact alimentaire avoisine 1,6 million de tonnes par an —
            déjà au-dessus de l'offre autorisée qualité contact, avant de
            compter la concurrence à l'export depuis les États-Unis sous
            l'IRA et depuis les grands producteurs britanniques qui
            reconstruisent leurs capacités.
          </p>
          <p>
            Trois risques structurels :
          </p>
          <ul>
            <li>
              <strong>Contamination de la charge rPET</strong> — les
              bouteilles PET collectées contiennent de plus en plus de
              manchons non-PET, de PET opaque, de multi-couches PET / EVOH
              et de pigments CMR qui dégradent le rendement de sortie.
            </li>
            <li>
              <strong>Volatilité des prix</strong> — le prix du rPET s'est
              découplé du PET vierge en 2024, a affiché une prime de 35 à
              60 % sur le vierge début 2025, et est désormais structurellement
              lié à l'économie de la collecte de la charge.
            </li>
            <li>
              <strong>Exposition géopolitique et commerciale</strong> — les
              règles d'export des déchets-charges se sont durcies en
              2024-2025 et la demande tirée par l'IRA aux États-Unis
              attire le recyclat européen vers l'ouest. Le passage en
              conformité 2030 dans l'Union risque de coïncider avec la plus
              grande relocalisation nord-américaine de plastique recyclé
              de l'histoire.
            </li>
          </ul>

          <InlineCTA
            title="Sourcez le rPET comme un intrant régulé, pas comme une commodité."
            description="Le service article 7 de Pactum en 5 jours produit une matrice d'approvisionnement par type d'emballage et par site, avec offres bilan massique certifiées, données de traçabilité et structures de couverture de la volatilité prix."
            ctaLabel="Construire la matrice d'approvisionnement"
            ctaHref={`/${locale}/services/recycled-content-roadmap`}
            imageSrc="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80&auto=format&fit=crop"
            variant="dark"
          />

          <TipBox variant="tip" label="La courbe intermédiaire 2034">
            La rampe annuelle implicite de 30 % en 2030 à 50 % en 2040 sur
            le PET sensible au contact à dominante PET est de +2 points par
            an. La rampe implicite des bouteilles de boisson, de 30 % à 65 %,
            est de +3,5 points par an — la plus raide des quatre paniers.
            La direction financière et les achats placent des jalons
            internes en 2034 et 2037 pour éviter la falaise.
          </TipBox>

          <h2 id="faire-ou-faire-faire">Faire ou faire faire — la décision stratégique</h2>
          <p>
            Le grand archétype des metteurs sur le marché à l'aube de 2026
            relève d'un des trois camps suivants. La plupart des clients
            sont en transition du camp A vers le camp C.
          </p>
          <h3 id="ffr-a">A — Achat au comptant sur le marché ouvert</h3>
          <p>
            Acheter du rPET sur des contrats trimestriels auprès de
            négociants généralistes au prix spot plus prime négociée.
            Flexibilité maximale, certitude minimale. Praticable pour les
            emballages à faible volume et faible criticité ; insuffisant
            pour les catégories PET sensible au contact à dominante PET et
            bouteilles de boisson à partir de 2028.
          </p>
          <h3 id="ffr-b">B — Contrats d'enlèvement long terme avec recycleurs certifiés</h3>
          <p>
            Signer des contrats d'enlèvement de 3 à 7 ans avec des
            recycleurs mécaniques certifiés (Plastipak Recycling, Indorama,
            JV recyclage ALPLA, Veolia plastiques, PETCO). Sécurise le
            volume et une chaîne de traçabilité de niveau audit. Les
            composantes de prix fixe couvrent la volatilité. Les clauses
            de droits de capacité verrouillent la priorité en cas de
            pénurie. Le modèle dominant des metteurs sur le marché Tier 1
            aujourd'hui.
          </p>
          <h3 id="ffr-c">C — Intégration amont / coentreprise dans le recyclage</h3>
          <p>
            Prendre une participation ou bâtir une JV avec un transformateur
            et un opérateur de gestion des déchets. Exemples : les JV PET
            européennes de Coca-Cola, le partenariat recycleur d'Unilever
            Indonésie, la JV de recyclage chimique de L'Oréal. Capex
            élevé, prix du rPET structurellement sous le marché à long
            terme, et alignement avec les incitations d'éco-modulation REP
            nationales. Utilisé par les plus grands metteurs sur le marché
            intensifs en emballage avec une exposition supérieure à
            1 million de tonnes de plastique.
          </p>
          <p>
            Les facteurs de décision sont : tonnage plastique annuel total,
            part qualité contact alimentaire, relations transformateurs
            existantes, capacité bilancielle et calendrier vers 2030. Sous
            50 000 tonnes par an, le camp C se rentabilise rarement. Au-dessus
            de 250 000 tonnes par an, le camp A n'est plus crédible.
          </p>

          <h2 id="feuille-de-route">La feuille de route à 24 mois d'approvisionnement</h2>
          <p>
            Vingt-quatre mois entre l'approbation du comité de pilotage et
            une chaîne d'approvisionnement entièrement certifiée et
            contractualisée constitue la fenêtre d'engagement habituelle
            que nous menons avec nos clients. Le tableau ci-dessous est le
            plan standard.
          </p>
          <table>
            <thead>
              <tr>
                <th>Trimestre</th>
                <th>Chantier</th>
                <th>Résultat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T1</td>
                <td>Calcul de référence article 7 par site et par type d'emballage</td>
                <td>% actuel vs cible 2030 ; tonnage de l'écart quantifié.</td>
              </tr>
              <tr>
                <td>T1</td>
                <td>Décision stratégique faire ou faire faire</td>
                <td>Camp A / B / C choisi et approuvé par le comité de pilotage.</td>
              </tr>
              <tr>
                <td>T2</td>
                <td>RFI / RFP auprès de recycleurs et producteurs de résines certifiés</td>
                <td>Liste courte de trois partenaires d'enlèvement par type d'emballage.</td>
              </tr>
              <tr>
                <td>T2</td>
                <td>Essais de requalification chez les transformateurs</td>
                <td>Substitution rPET / r-résine validée sur lignes de production.</td>
              </tr>
              <tr>
                <td>T3</td>
                <td>Négociation des contrats d'enlèvement long terme</td>
                <td>Contrats 3-7 ans ; obligations ISCC PLUS / EuCertPlast.</td>
              </tr>
              <tr>
                <td>T3</td>
                <td>Structure de la DoC article 39 pour la conformité article 7</td>
                <td>Méthodologie de calcul et matrice de certification verrouillées.</td>
              </tr>
              <tr>
                <td>T4</td>
                <td>Montée en volume sur les contrats d'enlèvement</td>
                <td>30-50 % du volume cible 2030 sécurisé.</td>
              </tr>
              <tr>
                <td>A2 T1</td>
                <td>Évaluation de l'intégration amont (camp C uniquement)</td>
                <td>Cadrage de la JV, modèle capex, due diligence partenaire gestion des déchets.</td>
              </tr>
              <tr>
                <td>A2 T2</td>
                <td>Engagement éco-modulation REP par État membre</td>
                <td>Décotes de contributions article 47 documentées et appliquées.</td>
              </tr>
              <tr>
                <td>A2 T3</td>
                <td>Audit bilan massique certifié (année complète d'opération)</td>
                <td>Visa d'auditeur externe sur la chaîne de traçabilité.</td>
              </tr>
              <tr>
                <td>A2 T4</td>
                <td>Répétition générale de la conformité 2030</td>
                <td>Simulation complète article 7 + article 39 sur un site représentatif.</td>
              </tr>
            </tbody>
          </table>

          <h2 id="contractuel">Architecture contractuelle de la chaîne d'approvisionnement</h2>
          <p>
            Le dossier de conformité article 7 repose sur une chaîne de
            contrats qui doivent être alignés. Nous structurons
            l'architecture contractuelle autour de quatre instruments
            imbriqués.
          </p>
          <p>
            <strong>Le Contrat-cadre d'approvisionnement en contenu recyclé.</strong>{" "}
            Un contrat parapluie de 3 à 7 ans entre le metteur sur le
            marché et un producteur de résine ou un recycleur certifié. Il
            verrouille le tonnage, le pourcentage de contenu recyclé par
            type d'emballage, le périmètre de certification (ISCC PLUS ou
            EuCertPlast), la formule de prix et les exclusions de force
            majeure. Les engagements minimum annuels — typiquement 70 à
            85 % de la demande prévue — préservent la flexibilité pour la
            part résiduelle au comptant.
          </p>
          <p>
            <strong>L'Annexe Données de traçabilité.</strong> Une annexe au
            Contrat-cadre précisant les données que le fournisseur doit
            livrer par expédition : identifiant de lot, allocation bilan
            massique, facteur de conversion, période d'audit couverte,
            référence de certificateur. Sans cette annexe, le metteur sur
            le marché ne peut pas constituer la Déclaration de conformité
            de l'article 39 en fin d'année.
          </p>
          <p>
            <strong>La Clause de répercussion par le transformateur.</strong>{" "}
            Lorsque le metteur sur le marché achète l'emballage fini auprès
            d'un transformateur plutôt que la résine auprès d'un producteur,
            l'obligation de contenu recyclé doit transiter par le
            transformateur. La clause exige que le transformateur prouve
            que la résine en intrant atteint le pourcentage de contenu
            recyclé contracté et qu'il livre les mêmes données de
            traçabilité au metteur sur le marché.
          </p>
          <p>
            <strong>Le Droit d'audit.</strong> Une clause standard avec
            préavis de 60 jours donnant au metteur sur le marché — ou à un
            auditeur tiers pour son compte — accès aux registres de
            certification du fournisseur, aux livres de bilan massique et à
            la documentation de traçabilité. Les fournisseurs résistent
            au droit d'audit complet et n'acceptent souvent que des
            attestations papier ; selon notre expérience, le droit d'audit
            a été utilisé deux fois ces 24 derniers mois et a évité aux
            deux clients une exposition matérielle sur la vérification des
            contributions REP.
          </p>
          <p>
            Les quatre instruments fonctionnent ensemble. Un Contrat-cadre
            sans Annexe Données de traçabilité est inapplicable ; un
            contrat transformateur sans clause de répercussion déplace la
            responsabilité vers l'amont du metteur sur le marché ; un
            droit d'audit sans mécanisme de préavis est théorique. Les
            achats, le juridique et la conformité co-pilotent cette
            architecture dans les missions Pactum.
          </p>

          <h2 id="erreurs-a-eviter">Erreurs à éviter</h2>

          <h3 id="e-1">1. Accepter une certification papier seule</h3>
          <p>
            Un certificat de négociant sans audit de schéma ne passera pas
            la revue de DoC article 39 et pourra être contesté par les
            éco-organismes lors de la modulation. Insistez sur le bilan
            massique audité par schéma (ISCC PLUS) ou le recyclat
            mécanique audité par schéma (EuCertPlast / RecyClass), et
            vérifiez le certificat dans le registre public du
            certificateur.
          </p>

          <h3 id="e-2">2. Ne pas contractualiser les données de traçabilité</h3>
          <p>
            La DoC a besoin de données de traçabilité — origine de la
            charge, ratio de conversion, allocation bilan massique,
            période d'audit. Si votre contrat fournisseur n'exige pas la
            livraison mensuelle ou trimestrielle des données de
            traçabilité, vous reconstituerez le dossier sous pression de
            contrôle en 2030.
          </p>

          <h3 id="e-3">3. Ignorer la falaise 2040</h3>
          <p>
            Le passage de 30 % à 50 % sur le PET sensible au contact à
            dominante PET, et de 30 % à 65 % sur les bouteilles de
            boisson, est matériellement plus difficile que l'entrée 2030.
            L'approvisionnement qui couvre la cible 2030 n'est pas une
            extension linéaire vers 2040. Un plan limité à 2030 nécessitera
            une seconde vague d'investissement en 2034-2036 — et la
            décision faire ou faire faire est différente à 65 % qu'à 30 %.
          </p>

          <h3 id="e-4">4. Traiter chaque site comme une île</h3>
          <p>
            L'article 7 interdit la moyenne inter-sites mais n'interdit
            pas un achat de rPET centralisé groupe alimentant plusieurs
            sites. Centraliser les achats tout en respectant le calcul par
            site représente une économie de 5 à 15 % que la plupart des
            clients ratent dans leur premier plan.
          </p>

          <h3 id="e-5">5. Oublier l'autorisation EFSA pour le contact alimentaire non-PET</h3>
          <p>
            L'autorisation contact alimentaire au titre des avis EFSA sur
            les procédés de recyclage est spécifique à l'espèce, à la
            technologie et au fournisseur. Une nouvelle ligne de recyclage
            mécanique PP qualité contact alimentaire requiert une
            autorisation EFSA individuelle qui prend 18 à 30 mois.
            Intégrez le travail de dossier EFSA à la feuille de route — un
            contrat long terme sur une charge non autorisée ne résout pas
            l'article 7.
          </p>

          <h2 id="faq">Questions fréquentes</h2>

          <h3 id="faq-1">L'article 7 s'applique-t-il aux emballages papier ou verre ?</h3>
          <p>
            Non. L'article 7 ne concerne que le plastique. Le papier, le
            verre, le métal et le bois sont soumis aux articles 6
            (recyclabilité), 10 (minimisation), 12 (étiquetage) et 45
            (REP), mais pas aux quotas de contenu recyclé de l'article 7.
          </p>

          <h3 id="faq-2">Les chutes industrielles pré-consommation sont-elles du contenu recyclé ?</h3>
          <p>
            Non. L'article 7 exige des déchets plastiques post-consommation
            — la matière qui a atteint l'utilisateur final et qui a été
            collectée pour recyclage. Les chutes industrielles
            pré-consommation et les déchets de production ne se
            qualifient pas, par construction.
          </p>

          <h3 id="faq-3">Le contenu recyclé chimiquement est-il autorisé ?</h3>
          <p>
            Oui. Le considérant 70 reconnaît explicitement les charges
            recyclées chimiquement avec attribution par bilan massique et
            chaîne de traçabilité certifiée comme contenu recyclé éligible
            au titre de l'article 7. ISCC PLUS est le schéma dominant.
          </p>

          <h3 id="faq-4">Comment le pourcentage est-il calculé pour un emballage plastique multi-couches ?</h3>
          <p>
            Au poids de l'ensemble du plastique de l'unité d'emballage,
            moyennes au niveau du type d'emballage et du site. Les couches
            non plastiques (papier, EVOH s'il est classé plastique, films
            métallisés) sont traitées selon la méthodologie de l'acte
            d'exécution — actuellement en projet.
          </p>

          <h3 id="faq-5">Et le plastique biosourcé ?</h3>
          <p>
            Le contenu biosourcé n'est pas du contenu recyclé. Une
            bouteille en PE biosourcé fait à partir d'éthanol de canne à
            sucre est du plastique vierge par charge, avec un bénéfice
            carbone mais aucune contribution à l'article 7. Les deux
            régimes ne sont pas interchangeables.
          </p>

          <h3 id="faq-6">Existe-t-il des dérogations pour les PME ?</h3>
          <p>
            Le Règlement n'exempte pas les PME de l'article 7. Les PME
            bénéficient d'une documentation article 39 simplifiée et de
            schémas de soutien des États membres, mais les objectifs
            30 % / 10 % / 30 % / 35 % s'appliquent à tous les emballages
            plastiques placés sur le marché de l'Union, quelle que soit la
            taille du producteur.
          </p>

          <h3 id="faq-7">Que faire si mon site n'atteint pas l'objectif en 2030 ?</h3>
          <p>
            L'unité d'emballage ne peut pas être légalement placée sur le
            marché de l'Union en non-conformité. La DoC doit attester de la
            conformité. Le metteur sur le marché doit (i) atteindre la
            cible par les achats, (ii) réduire le volume d'emballage
            plastique de ce panier, (iii) changer de catégorie de matériau
            — par exemple en remplaçant une barquette PP au contact
            alimentaire par une barquette fibre, qui sort intégralement de
            l'article 7 — ou (iv) faire face aux sanctions de l'article 68
            et aux mesures du (UE) 2019/1020.
          </p>

          <h3 id="faq-8">Une dérogation des États membres s'applique-t-elle ?</h3>
          <p>
            Non. Les objectifs de l'article 7 sont harmonisés.
            Contrairement aux objectifs de réemploi de l'article 29, qui
            permettent des dérogations sous conditions, les objectifs de
            contenu recyclé sont européens et uniformes.
          </p>

          <h3 id="faq-9">Comment l'article 7 interagit-il avec les contributions REP de l'article 47 ?</h3>
          <p>
            Les contributions REP doivent être éco-modulées sur la base du
            contenu recyclé (article 47). Un contenu recyclé plus élevé
            réduit les contributions dans la plupart des schémas
            nationaux. La structure d'incitation amène souvent l'économie
            du metteur sur le marché en avance sur l'échéance
            réglementaire.
          </p>

          <h3 id="faq-10">Quand la méthodologie de calcul sera-t-elle finalisée ?</h3>
          <p>
            La Commission doit adopter l'acte d'exécution au titre de
            l'article 7(8). La consultation publique s'est achevée fin
            2025 ; l'adoption est visée au T3 2026. Le projet de
            consultation s'appuyait sur la CEN/TS 16137 comme base de
            mesure et acceptait le bilan massique de type ISCC PLUS.
          </p>

          <p>
            Pour la cartographie complète des obligations sur les huit
            thèmes de la PPWR, voyez{" "}
            <Link href={`/${locale}/blog/ppwr-2025-survival-guide-for-european-brand-owners`}>
              le guide de survie PPWR
            </Link>
            ; pour l'échéance PFAS du 12 août 2026, voyez{" "}
            <Link href={`/${locale}/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline`}>
              le briefing PFAS dédié
            </Link>
            . Le service contenu recyclé est sur{" "}
            <Link href={`/${locale}/services/recycled-content-roadmap`}>
              /{locale}/services/recycled-content-roadmap
            </Link>
            ; le service recyclabilité sur{" "}
            <Link href={`/${locale}/services/recyclability-assessment`}>
              /{locale}/services/recyclability-assessment
            </Link>
            ; le calendrier consolidé sur{" "}
            <Link href={`/${locale}/resources/ppwr-timeline`}>
              /{locale}/resources/ppwr-timeline
            </Link>
            ; la FAQ vivante sur{" "}
            <Link href={`/${locale}/resources/ppwr-faq`}>
              /{locale}/resources/ppwr-faq
            </Link>
            . Le texte du Règlement est sur{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>
            ; la page politique de la Commission européenne se trouve sur{" "}
            <a
              href="https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en"
              target="_blank"
              rel="noreferrer noopener"
            >
              environment.ec.europa.eu
            </a>
            .
          </p>
        </BlogLayout>
      ) : (
        <BlogLayout
          title={post.title}
          description={post.excerpt}
          author={`${post.author.name} · ${post.author.role}`}
          readingTime={post.readTime}
          publishedAt="2 April 2026"
          category={post.category}
          heroImage={post.hero!.src}
          ctaTitle="Build the recycled content roadmap your steerco will sign"
          ctaDescription="Pactum&apos;s Article 7 service maps the gap per packaging-type, per plant, per year, ranks supply options against price and certification risk, and produces the 24-month sourcing roadmap. Five business days, NDA upfront."
        >
          <nav
            aria-label="Breadcrumb"
            className="not-prose mb-6 text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={`/${locale}`} className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/${locale}/blog`} className="hover:text-foreground">
                  Insights
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Recycled content 2030 / 2040</li>
            </ol>
          </nav>

          <ArticleSummary
            items={[
              "From 1 January 2030, plastic packaging placed on the EU market must contain minimum recycled content: 30% (contact-sensitive PET), 10% (other contact-sensitive), 30% (single-use beverage bottles) and 35% (other plastic packaging).",
              "From 1 January 2040, those four targets escalate to 50% / 25% / 65% / 65% — the &ldquo;four numbers everyone needs to remember&rdquo;.",
              "The percentage is calculated per packaging-type per manufacturing plant per year, not per individual unit.",
              "Mass-balance attribution is acceptable when supported by chain-of-custody certification (CEN/TS 16137, ISCC PLUS, RecyClass, EuCertPlast). Paper-only certification will not pass an Article 39 audit.",
              "Food-grade rPET capacity in the EU is short relative to 2030 demand. A make-or-buy decision in 2026 is structurally different from one in 2028.",
            ]}
          />

          <h2 id="tldr">TL;DR — the four numbers</h2>
          <p>
            From <strong>1 January 2030</strong>, Article 7 of{" "}
            <strong>Regulation (EU) 2025/40</strong> — the PPWR — requires plastic
            packaging placed on the EU market to contain minimum recycled content
            measured against four packaging categories. The four numbers are:{" "}
            <strong>30%</strong> for contact-sensitive packaging containing PET as the
            major component, <strong>10%</strong> for contact-sensitive packaging from
            plastics other than PET, <strong>30%</strong> for single-use plastic
            beverage bottles, and <strong>35%</strong> for all other plastic
            packaging. From <strong>1 January 2040</strong>, those four numbers
            escalate to <strong>50% / 25% / 65% / 65%</strong>. The full text is on{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>
            .
          </p>
          <p>
            The calculation is per packaging-type per manufacturing plant per year. The
            recycled content must come from <strong>post-consumer</strong> plastic
            waste — not pre-consumer industrial scrap. Certification underpins the
            chain of custody and mass balance is acceptable. The Commission must adopt
            an implementing act on the precise calculation methodology under Article
            7(8); a draft was put out for consultation in late 2025.
          </p>

          <h2 id="four-categories">The four target categories explained</h2>
          <p>
            Article 7 lays down four mutually exclusive packaging buckets. A packaging
            unit falls into exactly one. Misclassification is the most common — and
            most expensive — early error.
          </p>
          <h3 id="cat-1">Contact-sensitive PET-major packaging — 30% by 2030</h3>
          <p>
            Contact-sensitive packaging is defined in Article 3 by reference to
            Regulation (EC) 1935/2004 (food contact), Directive 2001/83/EC (medicinal
            products for human use), Regulation (EU) 2017/745 (medical devices) and
            related uses. Where the packaging contains PET as the major component, the
            recycled content target is 30% from 2030, rising to 50% from 2040. This
            covers the bulk of food-contact PET trays, bottles for sensitive products,
            pharmaceutical PET blister packs and similar.
          </p>
          <h3 id="cat-2">Contact-sensitive other-plastic packaging — 10% by 2030</h3>
          <p>
            Where contact-sensitive packaging is made from plastics other than PET —
            PP, HDPE, LDPE, PS, EVOH, PA — the target is 10% by 2030 and 25% by 2040.
            The lower threshold reflects the supply reality: food-grade recycled PP
            and HDPE capacity at scale is materially smaller than rPET, and the EFSA
            authorisation process for food-grade recycled non-PET resins is
            comparatively recent.
          </p>
          <h3 id="cat-3">Single-use plastic beverage bottles — 30% by 2030</h3>
          <p>
            Single-use plastic beverage bottles up to 3 L — the bottles in scope of the
            Article 50 deposit return scheme architecture — are subject to a 30%
            target by 2030 (already partly enforced by Directive (EU) 2019/904 from
            2025 for PET bottles), rising to 65% by 2040. This is the category where
            rPET demand will dominate. It is also the category where DRS bottle-to-bottle
            collection is the most efficient supply.
          </p>
          <h3 id="cat-4">Other plastic packaging — 35% by 2030</h3>
          <p>
            The catch-all category — non-contact-sensitive, non-beverage-bottle plastic
            packaging — is at 35% from 2030, escalating to 65% from 2040. This bucket
            includes pallet stretch wrap, secondary plastic packaging, e-commerce
            mailers, industrial big bags, FMCG outer packs, transit film and the wide
            population of B2B plastic packaging. The 65% target by 2040 is, in
            practice, the most aggressive of the four because the supply must come
            predominantly from post-consumer mixed plastic waste and currently
            struggles on quality.
          </p>

          <h2 id="numbers-table">The 2030 numbers and the 2040 numbers</h2>
          <p>
            The table below is the consolidated reference. We keep it on the desk
            during every client steerco.
          </p>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>2030 target</th>
                <th>2040 target</th>
                <th>Typical applications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contact-sensitive PET-major</td>
                <td>30%</td>
                <td>50%</td>
                <td>Food-contact PET trays, sensitive bottles, pharmaceutical PET</td>
              </tr>
              <tr>
                <td>Contact-sensitive other plastics</td>
                <td>10%</td>
                <td>25%</td>
                <td>PP / HDPE / LDPE food-contact, EVOH multi-layer, PA</td>
              </tr>
              <tr>
                <td>Single-use plastic beverage bottles</td>
                <td>30%</td>
                <td>65%</td>
                <td>Water, soft drinks, juice, isotonics up to 3 L</td>
              </tr>
              <tr>
                <td>Other plastic packaging</td>
                <td>35%</td>
                <td>65%</td>
                <td>
                  Stretch wrap, mailers, transit film, FMCG outer, industrial big bags
                </td>
              </tr>
            </tbody>
          </table>

          <TipBox variant="info" label="What this is not">
            Article 7 does not apply to paper, glass, metal or wood packaging. Those
            materials have their own recyclability and EPR regimes. Article 7 is a
            plastic-only rule. The recycled content for paper-based packaging is
            governed by national EPR fee modulation, not by an EU mandatory minimum.
          </TipBox>

          <h2 id="calculation">How recycled content is measured</h2>
          <p>
            Article 7(8) sets the calculation principle: the recycled content
            percentage is computed as an{" "}
            <strong>average per packaging-type per manufacturing plant per year</strong>.
            That single sentence drives the operational discipline.
          </p>
          <ul>
            <li>
              <strong>Per packaging-type</strong> — the targets attach to the
              packaging category (e.g. all PET food trays placed on the EU market by a
              given operator), not to an individual SKU. Internal averaging across
              SKUs within a packaging type is permitted.
            </li>
            <li>
              <strong>Per manufacturing plant</strong> — averaging is done at the
              plant level. A converter cannot average across multiple plants; each
              plant must hit the target on its own. Multi-site producers must manage
              recycled-content procurement plant by plant.
            </li>
            <li>
              <strong>Per calendar year</strong> — the rolling computation period is
              the calendar year. Q4 catch-up purchasing of rPET to lift an annual
              average is allowed; quarterly compliance is not required.
            </li>
          </ul>
          <p>
            The Commission&apos;s implementing act on the calculation methodology is
            expected by Q3 2026, with verification rules following. Until adopted, the
            mainstream technical reference is{" "}
            <strong>CEN/TS 16137</strong> on plastic recycled content determination,
            combined with EuCertPlast certification or equivalent. Recital 70 of the
            PPWR makes clear that mass-balance attribution with certified
            chain-of-custody is acceptable, including for chemically recycled inputs.
          </p>

          <h2 id="mass-balance">Mass balance vs free attribution</h2>
          <p>
            Two attribution models compete in current practice. The choice between
            them matters.
          </p>
          <h3 id="ma-mass">Mass balance with certified chain of custody</h3>
          <p>
            Mass balance allows a producer to acquire a defined quantity of recycled
            material into a process and to attribute the recycled content to a
            corresponding quantity of output, even if the recycled and virgin inputs
            are physically blended at the molecular level (typical for chemically
            recycled feedstocks routed through a steam cracker). Mass-balance is
            credible <em>only</em> when verified end-to-end by a certifier using a
            robust scheme. The mainstream certified mass-balance schemes are{" "}
            <strong>ISCC PLUS</strong> (the most widely used in EU plastics today)
            and <strong>RedCert²</strong>. Both are recognised by major resin
            producers.
          </p>
          <h3 id="ma-free">Free attribution — to be avoided</h3>
          <p>
            Free attribution allocates recycled content claims to outputs without
            rigorous physical or volumetric coupling. It is not robust, will not pass
            an Article 39 Declaration of Conformity audit and is increasingly rejected
            by national EPR schemes during fee modulation reviews. Avoid suppliers
            who cannot describe their attribution model in writing.
          </p>

          <h2 id="certification">Certification — what passes audit</h2>
          <p>
            The certification landscape consolidates rapidly. Five frameworks matter
            for an Article 7 compliance file in 2026.
          </p>
          <table>
            <thead>
              <tr>
                <th>Scheme</th>
                <th>Owner</th>
                <th>Best for</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CEN/TS 16137</td>
                <td>CEN</td>
                <td>
                  Determination of recycled content in plastics — technical specification
                </td>
                <td>The reference standard for measurement methodology.</td>
              </tr>
              <tr>
                <td>ISCC PLUS</td>
                <td>ISCC</td>
                <td>Mass-balance certification of feedstock chain of custody</td>
                <td>Dominant in EU chemically recycled and bio-circular plastics.</td>
              </tr>
              <tr>
                <td>RecyClass</td>
                <td>Plastics Recyclers Europe</td>
                <td>
                  Recyclability and traceability of mechanically recycled plastics
                </td>
                <td>Provides traceability audits at the converter level.</td>
              </tr>
              <tr>
                <td>EuCertPlast</td>
                <td>EuCertPlast / Cyclos-HTP</td>
                <td>
                  Recyclers&apos; certification — origin, traceability, audit of
                  recyclate
                </td>
                <td>Required by several EPR PROs for fee modulation evidence.</td>
              </tr>
              <tr>
                <td>RedCert²</td>
                <td>Redcert GmbH</td>
                <td>Mass-balance certification (renewable raw materials)</td>
                <td>Less common in plastics; used in feed and bio-energy chains.</td>
              </tr>
            </tbody>
          </table>
          <p>
            The defensible Article 39 Declaration of Conformity references{" "}
            <strong>CEN/TS 16137</strong> for measurement, plus the chain-of-custody
            certification (ISCC PLUS for mass-balance feedstock or EuCertPlast for
            mechanical recyclate), plus the converter&apos;s site certification (e.g.
            RecyClass).
          </p>

          <TipBox variant="warning" label="Paper-only certification will not pass">
            A &ldquo;certificate of recycled origin&rdquo; from a trader, with no
            chain-of-custody audit and no scheme accreditation, is not evidence under
            Article 7. We see this regularly in spot-purchase rPET supply. National
            EPR PROs are already rejecting these on fee verification. The Article 39
            DoC must reference an accredited scheme, not a trader letterhead.
          </TipBox>

          <h2 id="supply-problem">The supply problem</h2>
          <p>
            The 2030 demand for food-grade rPET, mechanically recycled food-grade PP /
            HDPE and EFSA-authorised chemically recycled feedstock will materially
            exceed installed EU capacity. This is the operational reality the
            regulation collides with.
          </p>
          <p>
            Plastics Recyclers Europe&apos;s capacity tracking placed installed EU
            mechanical PET recycling capacity at around 2.4 million tonnes at end-2024
            with food-grade authorisation on roughly 1.5 million tonnes. EU PET
            packaging demand approaches 5 million tonnes per year. At a 30% target on
            contact-sensitive PET-major plus the 30% on single-use beverage bottles,
            unconstrained demand for food-grade rPET sits near 1.6 million tonnes a
            year — already above food-grade authorised supply, before counting export
            competition from the US under the IRA and from major UK producers
            rebuilding capacity.
          </p>
          <p>
            Three structural risks:
          </p>
          <ul>
            <li>
              <strong>Contamination of rPET feedstock</strong> — collected PET bottles
              increasingly contain non-PET sleeves, opaque PET, multi-layer PET / EVOH
              and CMR-pigment colourants that degrade output yield.
            </li>
            <li>
              <strong>Price volatility</strong> — rPET pricing decoupled from virgin
              PET in 2024, hit a premium of 35-60% over virgin in early 2025, and is
              now structurally tied to feedstock collection economics.
            </li>
            <li>
              <strong>Geopolitical and trade exposure</strong> — feedstock waste
              export rules tightened in 2024-2025 and US IRA-driven demand pulls EU
              recyclate westwards. The 2030 EU compliance run risks coinciding with
              the largest North American re-shoring of recycled plastic in history.
            </li>
          </ul>

          <InlineCTA
            title="Source rPET like a regulated input, not a commodity."
            description="Pactum&apos;s 5-day Article 7 service produces a sourcing matrix per packaging-type per plant, with certified mass-balance offers, traceability data and price-volatility hedging structures."
            ctaLabel="Build the sourcing matrix"
            ctaHref={`/${locale}/services/recycled-content-roadmap`}
            imageSrc="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80&auto=format&fit=crop"
            variant="dark"
          />

          <TipBox variant="tip" label="The 2034 mid-curve">
            The implicit annual ramp from 30% in 2030 to 50% in 2040 on contact-sensitive
            PET-major is +2 percentage points per year. The implicit ramp on
            beverage bottles from 30% to 65% is +3.5 points per year — that is the
            steepest curve in the four buckets. Treasury and procurement build
            internal milestones in 2034 and 2037 to avoid the cliff.
          </TipBox>

          <h2 id="make-or-buy">Make or buy — the strategic decision</h2>
          <p>
            The major brand-owner archetype going into 2026 falls into one of three
            camps. Most clients are mid-way through a switch from camp A to camp C.
          </p>
          <h3 id="mob-a">A — Spot buy on the open market</h3>
          <p>
            Buy rPET on quarterly contracts from generalist resin traders at spot
            plus negotiated premium. Maximum flexibility; minimum certainty. Workable
            for low-volume and low-criticality packaging; insufficient for the
            contact-sensitive PET-major and beverage-bottle categories from 2028
            onwards.
          </p>
          <h3 id="mob-b">B — Long-term offtake with certified recyclers</h3>
          <p>
            Sign 3-7 year offtake agreements with certified mechanical recyclers
            (Plastipak Recycling, Indorama, ALPLA recycling JVs, Veolia plastics,
            PETCO). Secures volume and audit-grade chain of custody. Fixed-price
            components hedge volatility. Capacity-rights clauses lock priority during
            shortages. The dominant operating model for Tier-1 brand owners
            today.
          </p>
          <h3 id="mob-c">C — Backward integration / joint venture into recycling</h3>
          <p>
            Take an equity stake or build a JV recycling site with a converter and a
            waste-management operator. Examples: Coca-Cola&apos;s European PET JVs,
            Unilever Indonesia&apos;s recycler partnership, L&apos;Oréal&apos;s
            chemically recycled JV. High capex, structurally below market price on
            rPET in the long run, and aligns with national EPR eco-modulation
            incentives. Used by the largest packaging-intensive brand owners with
            1m+ tonnes of plastic packaging exposure.
          </p>
          <p>
            The decision factors are: total annual plastic packaging tonnage,
            food-grade share, existing converter relationships, balance sheet capacity
            and the timeline to 2030. Below 50 000 tonnes per year, camp C rarely
            pays back. Above 250 000 tonnes per year, camp A is no longer credible.
          </p>

          <h2 id="roadmap">The 24-month sourcing roadmap</h2>
          <p>
            Twenty-four months from steerco approval to a fully certified,
            contractually locked supply chain is the typical engagement window we run
            with clients. The table below is the standard plan.
          </p>
          <table>
            <thead>
              <tr>
                <th>Quarter</th>
                <th>Workstream</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td>
                <td>Article 7 baseline calculation per plant per packaging-type</td>
                <td>Current % vs 2030 target; tonnage gap quantified.</td>
              </tr>
              <tr>
                <td>Q1</td>
                <td>Make-or-buy strategic decision</td>
                <td>Camp A / B / C selected and approved by the steerco.</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>RFI / RFP to certified recyclers and resin producers</td>
                <td>Shortlist of three offtake partners per packaging-type.</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>Converter requalification trials</td>
                <td>Validated rPET / r-resin substitution on production lines.</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>Long-term offtake negotiation</td>
                <td>3-7 year contracts; ISCC PLUS / EuCertPlast obligations.</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>Article 39 DoC structure for Article 7 compliance</td>
                <td>Calculation methodology and certification matrix locked.</td>
              </tr>
              <tr>
                <td>Q4</td>
                <td>Volume ramp on offtake contracts</td>
                <td>30-50% of 2030 target volume secured.</td>
              </tr>
              <tr>
                <td>Y2 Q1</td>
                <td>Backward-integration evaluation (camp C only)</td>
                <td>JV scoping, capex model, waste-management partner due diligence.</td>
              </tr>
              <tr>
                <td>Y2 Q2</td>
                <td>EPR fee modulation engagement per Member State</td>
                <td>Article 47 fee discounts evidenced and applied.</td>
              </tr>
              <tr>
                <td>Y2 Q3</td>
                <td>Certified mass-balance audit (full year of operation)</td>
                <td>External auditor sign-off on the chain of custody.</td>
              </tr>
              <tr>
                <td>Y2 Q4</td>
                <td>2030 readiness rehearsal</td>
                <td>Full Article 7 + Article 39 simulation on a representative plant.</td>
              </tr>
            </tbody>
          </table>

          <h2 id="contractual">Contractual architecture for the supply chain</h2>
          <p>
            The Article 7 compliance file rests on a chain of contracts that must be
            aligned. We structure the contractual architecture around four
            interlocking instruments.
          </p>
          <p>
            <strong>The Master Recycled Content Supply Agreement.</strong> A 3-7 year
            umbrella contract between the brand owner and a certified resin producer
            or recycler. It locks tonnage, recycled content percentage by packaging
            type, certification scope (ISCC PLUS or EuCertPlast), price-formula and
            force-majeure carve-outs. Annual minimum tonnage commitments — typically
            70 to 85% of forecast demand — preserve flexibility for the residual spot
            market.
          </p>
          <p>
            <strong>The Traceability Data Annex.</strong> A schedule to the Master
            Agreement specifying the data the supplier must deliver per shipment:
            batch identifier, mass-balance allocation, conversion factor, audit period
            covered, certifier reference. Without this annex the brand owner cannot
            assemble the Article 39 Declaration of Conformity at year-end.
          </p>
          <p>
            <strong>The Converter Pass-Through Clause.</strong> When the brand owner
            buys finished packaging from a converter rather than resin from a producer,
            the recycled content obligation must pass through the converter. The
            clause requires the converter to evidence that the input resin meets the
            contracted recycled content percentage and to deliver the same traceability
            data to the brand owner.
          </p>
          <p>
            <strong>The Audit Right.</strong> A standard 60-day notice clause giving
            the brand owner — or a third-party auditor on its behalf — access to the
            supplier&apos;s certification records, mass-balance ledgers and chain-of-custody
            documentation. We see suppliers resisting full audit rights and accepting
            paper attestations only; in our experience the audit right has been used
            twice in the last 24 months and saved both clients material exposure on
            fee verification.
          </p>
          <p>
            The four instruments work together. A Master Agreement without a
            Traceability Data Annex is unenforceable; a converter contract without a
            pass-through clause shifts liability inwards; an audit right without a
            notice mechanism is theoretical. Procurement, Legal and Compliance jointly
            own this architecture in Pactum engagements.
          </p>

          <h2 id="mistakes">Mistakes to avoid</h2>

          <h3 id="m-1">1. Accepting paper-only certification</h3>
          <p>
            A trader certificate without scheme audit will not pass an Article 39 DoC
            review and may be challenged by EPR PROs during fee modulation. Insist on
            scheme-audited mass balance (ISCC PLUS) or scheme-audited mechanical
            recyclate (EuCertPlast / RecyClass), and verify the certificate against
            the certifier&apos;s public register.
          </p>

          <h3 id="m-2">2. Failing to contract for traceability data</h3>
          <p>
            The DoC needs traceability data — input feedstock origin, conversion
            ratio, mass-balance allocation, audit period. If your supplier contract
            does not require traceability data delivery monthly or quarterly, you will
            be reconstructing the file under enforcement pressure in 2030.
          </p>

          <h3 id="m-3">3. Ignoring the 2040 cliff</h3>
          <p>
            The jump from 30% to 50% on contact-sensitive PET-major, and from 30% to
            65% on beverage bottles, is materially harder than the 2030 entry. The
            supply that fills the 2030 target is not a linear extension to 2040. A
            2030-only plan will need a second wave of investment in 2034-2036 — and
            the make-or-buy decision is different at 65% than at 30%.
          </p>

          <h3 id="m-4">4. Treating each plant as an island</h3>
          <p>
            Article 7 forbids cross-plant averaging, but it does not forbid corporate
            treasury-level rPET procurement that feeds multiple plants. Centralising
            procurement while respecting per-plant calculation is a 5-15% saving that
            most clients miss in their first plan.
          </p>

          <h3 id="m-5">5. Forgetting EFSA authorisation for non-PET food-grade</h3>
          <p>
            Food-grade authorisation under EFSA&apos;s recycling process opinions is
            species-specific, technology-specific and supplier-specific. A new
            mechanical PP recycling line for food contact requires individual EFSA
            authorisation that takes 18-30 months. Plan EFSA dossier work into the
            roadmap — a long-term contract on unauthorised supply does not solve
            Article 7.
          </p>

          <h2 id="faq">Frequently asked questions</h2>

          <h3 id="faq-1">Does Article 7 apply to paper or glass packaging?</h3>
          <p>
            No. Article 7 is plastic-only. Paper, glass, metal and wood packaging are
            subject to Articles 6 (recyclability), 10 (minimisation), 12 (labelling)
            and 45 (EPR), but not the recycled content quotas of Article 7.
          </p>

          <h3 id="faq-2">Is industrial pre-consumer scrap recycled content?</h3>
          <p>
            No. Article 7 requires post-consumer plastic waste — the material that
            has reached the end-user and been collected for recycling. Industrial
            pre-consumer scrap and production waste do not qualify, by design.
          </p>

          <h3 id="faq-3">Is chemically recycled content allowed?</h3>
          <p>
            Yes. Recital 70 explicitly recognises chemically recycled feedstock with
            mass-balance attribution and certified chain of custody as eligible
            recycled content under Article 7. ISCC PLUS is the dominant scheme.
          </p>

          <h3 id="faq-4">How is the percentage calculated for multi-layer plastic packaging?</h3>
          <p>
            By weight of all plastic in the packaging unit, averaged across the
            packaging-type at the plant level. Layers other than plastic (paper, EVOH
            if classified as plastic, metallised film) are treated according to the
            implementing act&apos;s methodology — currently in draft.
          </p>

          <h3 id="faq-5">What about bio-based plastic?</h3>
          <p>
            Bio-based content is not recycled content. A bio-based PE bottle made
            from sugar-cane ethanol is virgin plastic by feedstock, with carbon
            benefits but zero contribution to Article 7. The two regimes do not
            interchange.
          </p>

          <h3 id="faq-6">Are there derogations for SMEs?</h3>
          <p>
            The Regulation does not exempt SMEs from Article 7. SMEs benefit from
            simplified Article 39 documentation and from Member State support
            schemes, but the 30% / 10% / 30% / 35% targets apply to all plastic
            packaging placed on the EU market regardless of producer size.
          </p>

          <h3 id="faq-7">What if my plant cannot hit the target in 2030?</h3>
          <p>
            The packaging unit cannot be lawfully placed on the EU market in
            non-compliance. The DoC must attest compliance. The brand owner must
            either (i) hit the target through procurement, (ii) reduce plastic
            packaging volume in that bucket, (iii) switch material category — for
            example, replacing a PP food-contact tray with a fibre tray, which moves
            out of Article 7 entirely — or (iv) face Article 68 penalties and
            (EU) 2019/1020 enforcement.
          </p>

          <h3 id="faq-8">Does Member State derogation apply?</h3>
          <p>
            No. Article 7 targets are harmonised. Unlike Article 29 reuse targets,
            which permit Member State derogations under conditions, the recycled
            content targets are EU-wide and uniform.
          </p>

          <h3 id="faq-9">How does Article 7 interact with Article 47 EPR fees?</h3>
          <p>
            EPR fees must be eco-modulated on the basis of recycled content (Article
            47). Higher recycled content reduces fees in most national schemes. The
            incentive structure usually moves the brand-owner economics ahead of the
            regulatory deadline.
          </p>

          <h3 id="faq-10">When will the calculation methodology be finalised?</h3>
          <p>
            The Commission must adopt the implementing act under Article 7(8). The
            public consultation closed in late 2025; adoption is targeted for Q3
            2026. The consultation draft tracked CEN/TS 16137 as the measurement
            basis and accepted ISCC PLUS-style mass balance.
          </p>

          <p>
            For the full obligation map across the eight PPWR themes, see{" "}
            <Link href={`/${locale}/blog/ppwr-2025-survival-guide-for-european-brand-owners`}>
              the PPWR survival guide
            </Link>
            ; for the August 2026 PFAS deadline, see{" "}
            <Link href={`/${locale}/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline`}>
              the dedicated PFAS briefing
            </Link>
            . The recycled content service is at{" "}
            <Link href={`/${locale}/services/recycled-content-roadmap`}>
              /{locale}/services/recycled-content-roadmap
            </Link>
            ; the recyclability service at{" "}
            <Link href={`/${locale}/services/recyclability-assessment`}>
              /{locale}/services/recyclability-assessment
            </Link>
            ; the consolidated timeline at{" "}
            <Link href={`/${locale}/resources/ppwr-timeline`}>
              /{locale}/resources/ppwr-timeline
            </Link>
            ; the running FAQ at{" "}
            <Link href={`/${locale}/resources/ppwr-faq`}>
              /{locale}/resources/ppwr-faq
            </Link>
            . The Regulation text is on{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>
            ; the European Commission&apos;s policy page sits at{" "}
            <a
              href="https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en"
              target="_blank"
              rel="noreferrer noopener"
            >
              environment.ec.europa.eu
            </a>
            .
          </p>
        </BlogLayout>
      )}
    </>
  );
}
