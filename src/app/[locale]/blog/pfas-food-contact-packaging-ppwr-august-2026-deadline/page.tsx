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

const slug = "pfas-food-contact-packaging-ppwr-august-2026-deadline";

type RouteParams = { params: Promise<{ locale: string }> };

const TITLE = {
  fr: "PFAS dans les emballages au contact alimentaire — l'échéance du 12 août 2026",
  en: "PFAS in food-contact packaging: 12 August 2026 deadline",
} as const;

const META_TITLE = {
  fr: "PFAS contact alimentaire — échéance 12 août 2026",
  en: "PFAS in food-contact packaging: 12 August 2026 deadline",
} as const;

const META_DESCRIPTION = {
  fr: "L'article 5 du Règlement (UE) 2025/40 (la PPWR) interdit les PFAS ajoutés intentionnellement dans les emballages au contact alimentaire au 12 août 2026.",
  en: "Article 5 of Regulation (EU) 2025/40 bans intentionally added PFAS in food-contact packaging from 12 August 2026. Thresholds, testing and substitutes.",
} as const;

const OG_TITLE = {
  fr: "PFAS dans les emballages au contact alimentaire — 12 août 2026",
  en: "PFAS in food-contact packaging: 12 August 2026 deadline",
} as const;

const OG_DESCRIPTION = {
  fr: "Les seuils 25 ppb / 250 ppb / 50 ppm, les essais, les substitutions et les clauses fournisseurs de la restriction PFAS de l'article 5 PPWR.",
  en: "The 25 ppb / 250 ppb / 50 ppm thresholds, testing, substitutes and supplier clauses for the PPWR PFAS restriction.",
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

export default async function PfasFoodContactBriefing({ params }: RouteParams) {
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
          publishedAt="9 avril 2026"
          category={post.category}
          heroImage={post.hero!.src}
          ctaTitle="Sortez les PFAS avant le 12 août 2026"
          ctaDescription="Le service Conformité PFAS de Pactum criblage chaque SKU au contact alimentaire, cadre les essais accrédités, rédige les clauses fournisseurs et prépare la Déclaration de conformité de l'article 39. Cinq jours ouvrés, NDA en amont."
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
              <li className="text-foreground">PFAS dans les emballages au contact alimentaire</li>
            </ol>
          </nav>

          <ArticleSummary
            items={[
              "L'article 5 du Règlement (UE) 2025/40 interdit la mise sur le marché de l'Union d'emballages au contact alimentaire contenant des PFAS ajoutés intentionnellement à des concentrations égales ou supérieures à 25 ppb (un PFAS individuel, analyse ciblée), 250 ppb (somme des PFAS, analyse ciblée) ou 50 ppm (indicateur fluor total), à compter du 12 août 2026.",
              "Les trois seuils s'appliquent cumulativement : une unité d'emballage doit être en dessous des trois pour être placée sur le marché.",
              "L'analyse ciblée (25 ppb / 250 ppb) et le fluor total (50 ppm) sont des méthodes différentes qui répondent à des questions différentes. Un dossier de conformité a besoin des deux.",
              "La substitution est technique : multi-couches papier-PE, barrières d'origine végétale, revêtements minéraux et cires biosourcées peuvent toutes remplacer les barrières fluorées — aucune n'est universelle dans toute la gamme CHR / plats préparés / petfood.",
              "Les clauses fournisseurs, les réservations de laboratoires accrédités et la Déclaration de conformité de l'article 39 doivent être en place avant l'échéance, pas après.",
            ]}
          />

          <h2 id="essentiel">L'essentiel</h2>
          <p>
            À compter du <strong>12 août 2026</strong>, les emballages au
            contact alimentaire contenant des substances per- et
            polyfluoroalkylées (PFAS) ajoutées intentionnellement à des
            concentrations égales ou supérieures à trois seuils cumulatifs ne
            pourront plus être placés sur le marché de l'Union. L'article 5
            du <strong>Règlement (UE) 2025/40 (la PPWR)</strong> fixe le
            régime. Les seuils sont <strong>25 ppb</strong> pour tout PFAS
            individuel mesuré en analyse ciblée, <strong>250 ppb</strong>{" "}
            pour la somme des PFAS ciblés, et <strong>50 ppm</strong> pour
            l'indicateur fluor total (mesuré couramment par chromatographie
            ionique après combustion). Les trois s'appliquent cumulativement.
            Le texte intégral du Règlement est sur{" "}
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
            Ce briefing parcourt l'échéance, les seuils exacts, ce qui
            constitue le contact alimentaire au sens de la PPWR, les
            interactions avec l'annexe V, le paysage des essais, les options
            de substitution qui fonctionnent réellement en production, les
            clauses contractuelles que nous insérons aujourd'hui dans les
            contrats d'approvisionnement de nos clients, et un plan à
            90 jours pour le trimestre à venir.
          </p>

          <h2 id="echeance-surprise">L'échéance qui surprend tout le monde</h2>
          <p>
            L'échéance PFAS n'est <strong>pas</strong> le 1er janvier 2030 et
            n'est <strong>pas</strong> la proposition distincte de la
            Commission européenne au titre de REACH (qui suit une procédure
            distincte et n'est pas encore adoptée). C'est le{" "}
            <strong>12 août 2026</strong>, la date d'application générale de
            la PPWR. Cela représente, à la date de ce briefing, environ
            quatre mois pour beaucoup de metteurs sur le marché européens.
            Reformuler une barrière fluorée vers une alternative non fluorée
            prend généralement 9 à 14 mois entre la décision technique, la
            requalification fournisseur, les essais ligne, la validation
            durée de conservation et la rotation de stock. Les marques qui
            ont commencé en T4 2024 atterrissent à temps. Celles qui n'ont
            pas commencé passent de la conformité à la gestion de crise.
          </p>
          <p>
            La restriction PFAS de la PPWR coexiste avec des interdictions
            nationales déjà en vigueur. La loi AGEC en France a interdit les
            PFAS dans les emballages papier au contact alimentaire à compter
            du 1er janvier 2025. Le Danemark a interdit les PFAS dans les
            emballages papier et carton au contact alimentaire à compter du
            1er juillet 2020. La PPWR consolide et étend : elle vise
            plastique, papier, carton et tout autre emballage au contact
            alimentaire, avec une structure de seuils unique au niveau de
            l'Union.
          </p>

          <TipBox variant="warning" label="Deux restrictions, pas une">
            La restriction de l'article 5 de la PPWR est distincte de la
            proposition plus large de restriction PFAS au titre de REACH (la
            restriction PFAS dite « universelle » soumise par l'Allemagne,
            les Pays-Bas, la Suède, le Danemark et la Norvège en février 2023).
            La proposition REACH n'est pas encore adoptée, a un périmètre
            plus large (usages industriels, textiles, mousses extinctrices,
            dispositifs médicaux) et un calendrier de mise en œuvre
            différent. L'article 5 de la PPWR est adopté, en vigueur, et
            mord le 12 août 2026 pour les emballages au contact alimentaire.
          </TipBox>

          <h2 id="seuils">Les seuils exacts</h2>
          <p>
            L'article 5 interdit la mise sur le marché de l'Union d'un
            emballage au contact alimentaire contenant des PFAS à des
            concentrations <strong>égales ou supérieures</strong> à trois
            valeurs, appliquées cumulativement. Le mécanisme est précisé
            ci-dessous.
          </p>
          <table>
            <thead>
              <tr>
                <th>Seuil</th>
                <th>Valeur</th>
                <th>Méthode</th>
                <th>Question à laquelle il répond</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PFAS individuel</td>
                <td>25 ppb (25 µg/kg)</td>
                <td>Analyse ciblée (LC-MS/MS, GC-MS/MS)</td>
                <td>
                  Une espèce PFAS isolée (par ex. PFOA, PFOS, 6:2 FTS) est-elle présente à 25 ppb ou plus ?
                </td>
              </tr>
              <tr>
                <td>Somme des PFAS</td>
                <td>250 ppb (250 µg/kg)</td>
                <td>Analyse ciblée sur la liste PFAS convenue</td>
                <td>La concentration cumulée de la liste PFAS ciblée est-elle à 250 ppb ou plus ?</td>
              </tr>
              <tr>
                <td>Fluor total</td>
                <td>50 ppm (50 mg/kg)</td>
                <td>
                  Chromatographie ionique après combustion (CIC) ou fluor organique extractible (EOF)
                </td>
                <td>
                  Le fluor organique total — y compris les PFAS non ciblés — est-il à 50 ppm ou plus ?
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Les trois seuils répondent à des questions différentes. L'analyse
            ciblée à 25 ppb / 250 ppb identifie les espèces PFAS{" "}
            <em>connues</em> par rapport à une liste d'analytes définie. Le
            fluor total à 50 ppm joue le rôle d'indicateur : il capte tout ce
            qui est fluoré, y compris la longue traîne d'espèces PFAS non
            ciblées que l'analyse ciblée ne peut pas détecter par
            construction. Un dossier de conformité fondé sur la seule analyse
            ciblée est incomplet. Un dossier fondé sur le seul fluor total
            indique la présence de fluor mais pas l'espèce. L'article 5
            attend les deux.
          </p>

          <h3 id="ajoutes-intentionnellement">« Ajoutés intentionnellement » — la qualification clé</h3>
          <p>
            L'article 5 interdit les PFAS <em>ajoutés intentionnellement</em>.
            La contamination de fond provenant de fibres recyclées entrantes,
            la présence environnementale dans les matières premières ou la
            migration trace depuis des auxiliaires amont ne sont pas la cible
            principale de l'interdiction — mais les seuils s'appliquent tout
            de même, et un metteur sur le marché ne peut pas se prévaloir du
            caractère « non intentionnel » comme moyen de défense si l'unité
            mesure plus de 50 ppm en fluor total. La position défendable
            consiste à démontrer, par déclarations fournisseurs et essais,
            qu'aucun ingrédient contenant des PFAS ne figure dans la
            nomenclature, et que le fluor mesuré est de toute façon inférieur
            aux seuils.
          </p>

          <h2 id="contact-alimentaire">Ce que signifie « contact alimentaire » au sens de la PPWR</h2>
          <p>
            L'article 3 de la PPWR renvoie au{" "}
            <strong>Règlement (CE) 1935/2004</strong> sur les matériaux et
            objets destinés à entrer en contact avec des denrées alimentaires.
            Le périmètre est donc très large : tout ce qui est destiné à
            entrer en contact avec des denrées alimentaires, dans des
            conditions normales ou raisonnablement prévisibles d'utilisation,
            est concerné. Cela inclut :
          </p>
          <ul>
            <li>
              Les emballages primaires alimentaires — boîtes à pizza, sachets
              de pop-corn micro-ondable, papiers beurre, barquettes plats
              préparés, contenants de nouilles instantanées, barquettes
              vente à emporter, sachets sandwich, sachets boulangerie.
            </li>
            <li>
              Les jetables de la restauration rapide — gobelets, couvercles,
              papiers, paniers carton.
            </li>
            <li>
              L'emballage primaire petfood — sachets aliments humides,
              sacs aliments secs.
            </li>
            <li>
              Les chemises intérieures en contact avec l'aliment — pots
              carton crème glacée, cartons surgelés.
            </li>
            <li>
              Les emballages flexibles multi-couches lorsque l'une des
              couches est en contact avec l'aliment, même si la couche
              fluorée n'est pas la couche au contact (les arguments de
              barrière fonctionnelle sont très limités au sens de l'article 5).
            </li>
          </ul>
          <p>
            L'emballage de transport extérieur qui n'est pas en contact avec
            l'aliment est hors périmètre de l'article 5 spécifiquement —
            mais reste dans le périmètre des articles 6, 7, 10 et 24. Voyez
            notre{" "}
            <Link href={`/${locale}/blog/ppwr-2025-survival-guide-for-european-brand-owners`}>
              guide de survie
            </Link>{" "}
            pour la cartographie complète des obligations.
          </p>

          <h2 id="annexe-v">Exemptions et cas limites de l'annexe V</h2>
          <p>
            L'annexe V de la PPWR concerne les interdictions de formats de
            l'article 25 (emballages plastiques à usage unique pour fruits et
            légumes frais &lt; 1,5 kg, jetables CHR sur place, miniatures
            d'hôtellerie, sachets de condiments, etc.). Elle n'exempte aucune
            catégorie de la restriction PFAS. Les rares cas limites autour
            de l'article 5 sont :
          </p>
          <ul>
            <li>
              <strong>Dispositifs médicaux et médicaments</strong> ont leurs
              propres règles d'emballage. La PPWR renvoie au Règlement (UE)
              2017/745, mais la restriction PFAS dans les emballages au
              contact alimentaire s'applique malgré tout aux usages au
              contact alimentaire (par exemple, l'emballage primaire de
              nutrition entérale est concerné).
            </li>
            <li>
              <strong>Les emballages réutilisables au contact alimentaire</strong>{" "}
              sont concernés. Les revêtements anti-adhésifs fluorés sur les
              plateaux réutilisables professionnels doivent être conformes.
            </li>
            <li>
              <strong>Les emballages mis sur le marché de l'Union avant le 12 août 2026</strong>{" "}
              et déjà en distribution finale peuvent continuer à être
              écoulés (disposition transitoire, article 78). Les stocks
              placés sur le marché après cette date doivent être conformes.
            </li>
          </ul>

          <h2 id="essais-aujourdhui">Comment tester aujourd'hui</h2>
          <p>
            Trois méthodes accréditées sous-tendent le dossier de conformité
            article 5. Le paysage normatif a été consolidé par l'EFSA et le
            Centre commun de recherche en 2023 ; l'acte d'exécution
            d'harmonisation méthodologique de la Commission est attendu pour
            T4 2026.
          </p>
          <h3 id="methode-ciblee">Analyse ciblée (LC-MS/MS, GC-MS/MS)</h3>
          <p>
            Une méthode ciblée quantifie les espèces PFAS nommées par
            rapport à une liste d'analytes définie — typiquement les 20 à
            30 espèces les plus fréquemment rapportées par l'EFSA dans les
            denrées alimentaires et les matériaux au contact alimentaire.
            C'est la méthode qui répond au seuil 25 ppb individuel et au
            seuil 250 ppb somme des PFAS. Délais : 5 à 10 jours ouvrés dans
            les grands laboratoires accrédités de l'Union. Coût : typiquement
            350 à 650 € par échantillon.
          </p>
          <h3 id="methode-fluor-total">
            Fluor total — chromatographie ionique après combustion (CIC)
          </h3>
          <p>
            La CIC brûle l'échantillon à 1000 °C et mesure le fluorure total
            dans les gaz de combustion. Elle capte toutes les espèces
            organiques fluorées — ciblées et non ciblées — et répond au
            seuil 50 ppm. Délais : 7 à 14 jours ouvrés. Coût : typiquement
            200 à 400 € par échantillon. La CIC n'identifie pas l'espèce
            PFAS présente ; elle quantifie uniquement le fluor total.
          </p>
          <h3 id="methode-eof">Fluor organique extractible (EOF)</h3>
          <p>
            L'EOF est une méthode complémentaire qui extrait le fluor
            organique de l'échantillon d'emballage, puis mesure le fluorure.
            Elle est plus sensible que la CIC à faibles concentrations et
            sert de méthode de confirmation. Coût : typiquement 350 à 550 €
            par échantillon.
          </p>

          <TipBox variant="info" label="La capacité laboratoire est un problème 2026">
            La capacité des laboratoires accrédités sur les trois méthodes
            appliquées aux matrices emballage est déjà tendue dans toute
            l'Union. Réserver l'analyse de 50+ SKU en T3 2026 — quand toutes
            les marques feront la même chose — ne fonctionnera pas. Bloquez
            des créneaux laboratoire en T1-T2 2026 avec au moins un
            laboratoire principal et un laboratoire de secours. Les
            engagements contractuels de volume minimum sécurisent la
            priorité.
          </TipBox>

          <h2 id="materiaux-substitution">Matériaux de substitution — ce qui marche, ce qui ne marche pas</h2>
          <p>
            La barrière fluorée anti-graisse et anti-eau était utilisée dans
            les emballages papier et carton au contact alimentaire parce
            qu'elle était bon marché, performait sur une large plage de
            températures, était thermoformable et n'avait pas d'impact
            organoleptique. La remplacer sans sacrifier ces propriétés n'est
            pas une décision unique ; c'est une décision portefeuille par
            cas d'usage.
          </p>
          <h3 id="sub-papierpe">Multi-couches papier-PE</h3>
          <p>
            Le papier laminé avec un film polyéthylène fournit la barrière
            anti-graisse. Largement utilisé pour les gobelets restauration
            rapide, les pots de glace et les papiers beurre. Le compromis
            recyclabilité est réel : le multi-couches papier-PE est
            recyclable dans de nombreuses papeteries européennes mais
            disqualifie la classe A de l'article 6. Planifiez la substitution
            conjointement avec la stratégie recyclabilité, sinon elle vous
            reviendra en boomerang en 2030.
          </p>
          <h3 id="sub-bio">Barrières d'origine végétale et cires biosourcées</h3>
          <p>
            Les dispersions de cires d'origine végétale (carnauba, dérivés
            de cire d'abeille) et les revêtements amidons modifiés sont
            désormais matures pour les applications ambiantes et réfrigérées.
            Ils peinent en haute température et sur les barquettes plats
            préparés à longue durée de conservation.
          </p>
          <h3 id="sub-mineraux">Revêtements minéraux</h3>
          <p>
            Les revêtements minéraux à base de carbonate de calcium et de
            silicates offrent une bonne résistance aux huiles et graisses.
            La compatibilité avec l'impression offset et numérique est bonne.
            Le coût est de 8 à 15 % au-dessus des revêtements fluorés à
            volumes équivalents.
          </p>
          <h3 id="sub-compostable">Plastiques compostables</h3>
          <p>
            PLA, PBAT et PHA peuvent remplacer les revêtements fluorés sur
            papier dans les applications mono-portion de la restauration
            rapide. Ils interagissent avec le régime de compostabilité de
            l'article 9 : les sachets de thé / café et les sacs très légers
            doivent être compostables ; pour les autres usages, le plastique
            compostable est traité comme un emballage plastique au sens des
            articles 6, 7 et 24.
          </p>
          <h3 id="sub-non-revetu">Papier non revêtu ou faiblement revêtu</h3>
          <p>
            Pour les denrées sèches (boulangerie, céréales, croquettes
            petfood), la réponse la plus simple est souvent qu'aucune
            barrière n'est nécessaire. Le dossier de conformité article 5
            devient une confirmation d'absence plutôt qu'une analyse de
            substitution.
          </p>
          <table>
            <thead>
              <tr>
                <th>Substitut</th>
                <th>Meilleure adéquation</th>
                <th>Coût vs fluoré</th>
                <th>Impact recyclabilité</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Papier-PE</td>
                <td>Gobelets restauration rapide, glaces</td>
                <td>+5-10 %</td>
                <td>Classe B ; dépend de la papeterie</td>
              </tr>
              <tr>
                <td>Cire d'origine végétale</td>
                <td>Boulangerie, ambiant</td>
                <td>+10-20 %</td>
                <td>Neutre / classe A possible</td>
              </tr>
              <tr>
                <td>Revêtement minéral</td>
                <td>Surgelé, plats préparés</td>
                <td>+8-15 %</td>
                <td>Classe A possible</td>
              </tr>
              <tr>
                <td>Compostable PLA/PBAT</td>
                <td>Mono-portion restauration rapide</td>
                <td>+25-40 %</td>
                <td>Compostage industriel uniquement</td>
              </tr>
              <tr>
                <td>Papier non revêtu</td>
                <td>Denrées sèches</td>
                <td>−3-5 %</td>
                <td>Classe A typique</td>
              </tr>
            </tbody>
          </table>

          <InlineCTA
            title="Une substitution PFAS est aussi une décision de recyclabilité."
            description="Pactum mène la substitution PFAS et la notation de recyclabilité de l'article 6 sur les mêmes données. Évitez le boomerang qui consiste à remplacer une barrière fluorée par un multi-couches qui rate la classe A en 2030."
            ctaLabel="Obtenir la feuille de route article par article"
            ctaHref={`/${locale}/services/ppwr-gap-analysis`}
            imageSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&auto=format&fit=crop"
            variant="dark"
          />

          <h2 id="clauses-fournisseurs">Clauses fournisseurs à insérer ce trimestre</h2>
          <p>
            Quel que soit le résultat technique, l'exposition juridique
            transite par le contrat d'approvisionnement. La Déclaration de
            conformité de l'article 39 que le metteur sur le marché établit
            dépend des attestations des fournisseurs amont. Nous insérons
            actuellement quatre clauses standard dans les contrats
            d'approvisionnement d'emballages au contact alimentaire.
          </p>

          <h3 id="clause-attestation">Clause 1 — Attestation PFAS</h3>
          <blockquote>
            Le Fournisseur garantit que l'Emballage livré au titre du présent
            Contrat ne contient aucune substance per- ou polyfluoroalkylée
            (PFAS) ajoutée intentionnellement, et qu'à partir d'échantillons
            représentatifs de production testés conformément à la
            méthodologie accréditée en vigueur, l'Emballage respecte les
            seuils prévus à l'article 5 du Règlement (UE) 2025/40 (25 µg/kg
            par PFAS individuel en analyse ciblée, 250 µg/kg en somme des
            PFAS en analyse ciblée, 50 mg/kg en fluor total par
            chromatographie ionique après combustion ou fluor organique
            extractible).
          </blockquote>

          <h3 id="clause-preuve">Clause 2 — Preuve à la demande</h3>
          <blockquote>
            Le Fournisseur fournit, sur demande écrite de l'Acheteur et dans
            un délai de dix (10) jours ouvrés, des certificats d'analyse
            émis par un laboratoire accrédité dans l'Union (ISO/CEI 17025)
            couvrant l'analyse PFAS ciblée et le fluor total, pour le lot de
            production identifié par l'Acheteur. La fréquence des essais ne
            peut être inférieure à une fois par trimestre civil par
            référence d'emballage par site de production.
          </blockquote>

          <h3 id="clause-modifications">Clause 3 — Notification des modifications</h3>
          <blockquote>
            Le Fournisseur notifie l'Acheteur par écrit au moins soixante (60)
            jours calendaires avant toute modification de matières premières,
            additifs, auxiliaires de production ou site de production
            susceptible d'affecter la teneur en PFAS ou en fluor total de
            l'Emballage.
          </blockquote>

          <h3 id="clause-indemnite">Clause 4 — Indemnité et rappel</h3>
          <blockquote>
            Le Fournisseur indemnise et tient l'Acheteur indemne de toute
            perte directe résultant d'une violation des clauses 1 à 3, y
            compris les coûts de rappel, de retrait et de remplacement
            engagés au titre du Règlement (UE) 2019/1020 sur la surveillance
            du marché, dans la limite du montant prévu à l'Annexe [X].
          </blockquote>

          <p>
            Les fournisseurs résisteront à la clause 4 sur le plafond
            d'indemnité. Tenez la ligne : l'exposition au rappel au titre du
            (UE) 2019/1020 est matériellement plus élevée que la valeur du
            contrat, et une clause non plafonnée n'est pas inhabituelle sur
            les attestations réglementées. Notre bibliothèque de clauses
            standard fait partie des livrables du service{" "}
            <Link href={`/${locale}/services/pfas-compliance`}>
              /{locale}/services/pfas-compliance
            </Link>{" "}
            et du service connexe{" "}
            <Link href={`/${locale}/services/declaration-of-conformity`}>
              Déclaration de conformité
            </Link>
            .
          </p>

          <h2 id="risque">Risque de contrôle et coût de l'erreur</h2>
          <p>
            Trois composantes de coût naissent d'un événement de
            non-conformité PFAS.
          </p>
          <p>
            <strong>Amendes administratives au titre de l'article 68.</strong>{" "}
            Les États membres conservent leur pouvoir d'appréciation. Plages
            indicatives constatées dans les cadres nationaux adoptés :
            Allemagne, jusqu'à 100 000 € par type d'unité d'emballage par
            infraction ; France, jusqu'à 4 % du chiffre d'affaires national
            au titre du Code de l'environnement après les modifications de
            2025 alignées sur la PPWR ; Italie, échelle comparable via le
            D.Lgs. 152/2006.
          </p>
          <p>
            <strong>Mesures de surveillance du marché au titre du (UE) 2019/1020.</strong>{" "}
            Les pouvoirs de retrait et de rappel sont explicites. Le coût du
            rappel d'un déploiement national d'une gamme plats préparés se
            situe typiquement entre 1,5 et 8 millions d'euros pour un FMCG
            de taille intermédiaire, hors atteinte à la réputation.
          </p>
          <p>
            <strong>Responsabilité pénale dans certains États membres.</strong>{" "}
            Une Déclaration de conformité matériellement incorrecte peut
            engager la responsabilité pénale du représentant légal qui l'a
            signée en Allemagne (§267 StGB), en France (Code pénal, art. 441-1)
            et aux Pays-Bas (art. 225 Sr).
          </p>

          <TipBox variant="warning" label="La DoC est une attestation réglementée">
            Traitez la Déclaration de conformité de l'article 39 comme une
            attestation réglementée — pas comme un document marketing. Trois
            signatures sont fréquentes sur les DoC clients : Directeur de
            l'emballage, Direction juridique, et soit Qualité soit
            Conformité. Un visa conjoint impose la discipline probatoire.
          </TipBox>

          <h2 id="plan-90-jours">Plan à 90 jours</h2>
          <p>
            Un chantier PFAS focalisé prend environ douze semaines.
            Ci-dessous le plan que nous menons aujourd'hui avec nos clients.
          </p>
          <table>
            <thead>
              <tr>
                <th>Semaine</th>
                <th>Activité</th>
                <th>Propriétaire</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Liste maître des SKU au contact alimentaire avec composition matérielle</td>
                <td>Emballage</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Enquête fournisseurs : demande d'attestation PFAS et revue de la nomenclature</td>
                <td>Achats</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Réservation de capacité laboratoire et confirmation du périmètre méthode</td>
                <td>Qualité / R&amp;D</td>
              </tr>
              <tr>
                <td>4-5</td>
                <td>Analyse ciblée (25 / 250 ppb) sur SKU prioritaires</td>
                <td>Laboratoire</td>
              </tr>
              <tr>
                <td>5-6</td>
                <td>Fluor total (50 ppm) par CIC sur SKU prioritaires</td>
                <td>Laboratoire</td>
              </tr>
              <tr>
                <td>6-7</td>
                <td>Liste de matériaux de substitution par cas d'usage</td>
                <td>R&amp;D</td>
              </tr>
              <tr>
                <td>7-8</td>
                <td>Essais ligne pilote sur les trois meilleurs substituts</td>
                <td>Opérations</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Insertion des clauses fournisseurs (clauses 1-4)</td>
                <td>Achats / Juridique</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Rédaction de la DoC article 39 par type d'unité d'emballage</td>
                <td>Conformité</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Plan de rotation des stocks : coupure mise sur le marché avant le 12 août 2026</td>
                <td>Supply chain</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Visa comité de pilotage et protocole de surveillance</td>
                <td>Comité de pilotage</td>
              </tr>
            </tbody>
          </table>
          <p>
            Le diagnostic PPWR gratuit est sur{" "}
            <Link href={`/${locale}/resources/ppwr-readiness-assessment`}>
              /{locale}/resources/ppwr-readiness-assessment
            </Link>
            ; le calendrier complet sur{" "}
            <Link href={`/${locale}/resources/ppwr-timeline`}>
              /{locale}/resources/ppwr-timeline
            </Link>
            ; la FAQ PPWR sur{" "}
            <Link href={`/${locale}/resources/ppwr-faq`}>
              /{locale}/resources/ppwr-faq
            </Link>
            .
          </p>

          <h2 id="faq">Questions fréquentes</h2>

          <h3 id="faq-1">L'article 5 interdit-il tous les PFAS ou seulement ceux ajoutés intentionnellement ?</h3>
          <p>
            L'article utilise la qualification « ajoutés intentionnellement »,
            mais les trois seuils numériques s'appliquent comme limites de
            coupure quelle que soit l'intention. Une unité d'emballage qui
            mesure plus de 50 ppm en fluor total est non conforme, même si
            aucun PFAS n'a été délibérément incorporé.
          </p>

          <h3 id="faq-2">Les sachets papier issus de papeteries hors UE sont-ils dans le périmètre ?</h3>
          <p>
            Oui. L'importateur qui place l'emballage sur le marché de l'Union
            est l'opérateur économique obligé et doit respecter les seuils
            de l'article 5 et la Déclaration de conformité de l'article 39.
          </p>

          <h3 id="faq-3">Puis-je m'appuyer sur un seul essai par SKU ?</h3>
          <p>
            Une fois pour un dossier de conformité initial, c'est le
            plancher, pas le plafond. La bonne pratique — et la position
            que les autorités de surveillance du marché de l'Union
            signalent — est l'échantillonnage représentatif par lot ou par
            trimestre, avec conservation d'échantillons de référence pour
            re-test sur événement de contrôle.
          </p>

          <h3 id="faq-4">Que faire de la fibre papier recyclée qui contient des PFAS de fond ?</h3>
          <p>
            La présence de PFAS de fond dans la fibre recyclée est le cas le
            plus difficile. La position défendable consiste à tester, à
            attester de valeurs sous les seuils et à exiger contractuellement
            des fournisseurs de fibre qu'ils s'approvisionnent en intrants
            vierges et recyclés sans PFAS. Certains transformateurs sont
            passés à la fibre vierge uniquement pour les applications au
            contact alimentaire par précaution.
          </p>

          <h3 id="faq-5">Les plateaux alimentaires réutilisables sont-ils dans le périmètre ?</h3>
          <p>
            Oui. L'emballage réutilisable est de l'emballage au sens de
            l'article 3 et il est dans le périmètre des seuils de l'article 5.
            Les revêtements anti-adhésifs fluorés sur les plateaux
            réutilisables professionnels sont restreints.
          </p>

          <h3 id="faq-6">Et si mon emballage est sous 25 ppb mais que je ne peux pas mesurer le fluor total ?</h3>
          <p>
            Vous êtes dans une zone grise. Les trois seuils s'appliquent
            cumulativement. Un dossier qui omet le fluor total ne peut pas
            attester d'une conformité concomitante. Contractualisez un essai
            CIC dans le périmètre standard d'essais.
          </p>

          <h3 id="faq-7">Quel rapport avec la dose hebdomadaire tolérable de l'EFSA ?</h3>
          <p>
            La dose hebdomadaire tolérable de l'EFSA de 4,4 ng/kg poids
            corporel par semaine pour la somme de quatre PFAS dans
            l'alimentation, fixée en 2020, a fourni la base toxicologique
            pour les seuils 25 ppb / 250 ppb de la PPWR. Les seuils sont
            spécifiques au contact alimentaire et ne sont pas une DHT ; la
            justification de santé publique sous-jacente est la même.
          </p>

          <h3 id="faq-8">Puis-je continuer à vendre les stocks placés sur le marché avant le 12 août 2026 ?</h3>
          <p>
            Oui. L'article 78 contient des dispositions transitoires : les
            emballages légalement placés sur le marché de l'Union avant la
            date d'application peuvent être mis à disposition et écoulés.
            Les nouveaux stocks placés sur le marché après cette date doivent
            être conformes.
          </p>

          <h3 id="faq-9">Le certificat d'analyse du fournisseur suffit-il pour ma DoC ?</h3>
          <p>
            Pas à lui seul. La DoC article 39 du metteur sur le marché doit
            inclure les preuves fournisseur plus l'évaluation de conformité
            du metteur sur le marché et un volume d'essais suffisant sur
            échantillons représentatifs de l'unité placée sur le marché.
            Externalisez le premier, n'externalisez pas le second.
          </p>

          <h3 id="faq-10">L'acte d'exécution sur la méthodologie modifiera-t-il les seuils ?</h3>
          <p>
            L'acte d'exécution de la Commission harmonisera la <em>méthodologie</em>{" "}
            — échantillonnage, préparation d'échantillons, spécifications de
            méthode laboratoire. Il ne peut pas baisser ni augmenter les
            seuils numériques : ceux-ci sont fixés à l'article 5 du
            règlement de base et requièrent une co-décision pour être
            modifiés.
          </p>

          <p>
            Pour la cartographie des obligations sur les huit thèmes de la
            PPWR, voyez{" "}
            <Link href={`/${locale}/blog/ppwr-2025-survival-guide-for-european-brand-owners`}>
              le guide de survie PPWR
            </Link>
            ; pour la feuille de route contenu recyclé qui interagit avec la
            substitution PFAS, voyez{" "}
            <Link href={`/${locale}/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap`}>
              le briefing contenu recyclé 2030 / 2040
            </Link>
            . Le texte intégral est sur{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>{" "}
            et la page politique de la Commission européenne sur{" "}
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
          publishedAt="9 April 2026"
          category={post.category}
          heroImage={post.hero!.src}
          ctaTitle="Phase out PFAS before 12 August 2026"
          ctaDescription="Pactum&apos;s PFAS Compliance service screens every food-contact SKU, scopes accredited testing, drafts the supplier clauses and prepares the Article 39 Declaration of Conformity. Five business days, NDA upfront."
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
              <li className="text-foreground">PFAS in food-contact packaging</li>
            </ol>
          </nav>

          <ArticleSummary
            items={[
              "Article 5 of Regulation (EU) 2025/40 prohibits placing food-contact packaging on the EU market with intentionally added PFAS at or above 25 ppb (any individual PFAS, targeted analysis), 250 ppb (sum of PFAS, targeted) or 50 ppm (total fluorine indicator), from 12 August 2026.",
              "The three thresholds operate concurrently: a packaging unit must be below all three to be placed on the market.",
              "Targeted analysis (25 ppb / 250 ppb) and total fluorine (50 ppm) are different methods that answer different questions. A compliance file needs both.",
              "Substitution is technical: paper-PE multi-layer, plant-based barriers, mineral coatings and bio-based wax can all replace fluorinated barriers — none are drop-in across the full HORECA / ready-meal / pet-food range.",
              "Supplier contractual clauses, accredited laboratory bookings and the Article 39 Declaration of Conformity must be in place before the deadline — not after.",
            ]}
          />

          <h2 id="tldr">TL;DR</h2>
          <p>
            From <strong>12 August 2026</strong>, food-contact packaging containing
            intentionally added per- and polyfluoroalkyl substances (PFAS) at or above
            three concurrent thresholds may no longer be placed on the EU market.
            Article 5 of <strong>Regulation (EU) 2025/40</strong> — the PPWR — sets the
            regime. The thresholds are <strong>25 ppb</strong> for any individual PFAS
            measured by targeted analysis, <strong>250 ppb</strong> for the sum of all
            targeted PFAS, and <strong>50 ppm</strong> for the total fluorine indicator
            (commonly run by combustion ion chromatography). All three operate
            concurrently. The full text of the Regulation is on{" "}
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
            This briefing walks through the deadline, the exact thresholds, what counts
            as food-contact under the PPWR, the Annex V interactions, the testing
            landscape, the substitute material options actually working in production,
            the contractual clauses we are inserting in client supply agreements right
            now, and a 90-day plan for the next quarter.
          </p>

          <h2 id="deadline-surprise">The deadline that surprises everyone</h2>
          <p>
            The PFAS deadline is <strong>not</strong> 1 January 2030 and it is{" "}
            <strong>not</strong> the European Commission&apos;s separate broad PFAS
            restriction proposal under REACH (which is on a different track and is not
            yet adopted). It is <strong>12 August 2026</strong>, the general date of
            application of the PPWR. That is roughly four months from the publication
            date of this briefing for many EU brand owners. Reformulating a
            fluorinated barrier coating to a non-fluorinated alternative typically
            takes 9 to 14 months from technical decision through supplier
            requalification, line trials, shelf-life validation and stock rotation.
            Brands that started in Q4 2024 are landing on time. Brands that have not
            started yet are moving from compliance to crisis management.
          </p>
          <p>
            The PPWR PFAS restriction also runs alongside national bans that are
            already in force. France&apos;s Loi AGEC banned PFAS in food-contact
            paper-based packaging from 1 January 2025. Denmark banned PFAS in paper
            and board food-contact packaging from 1 July 2020. The PPWR consolidates
            and extends: it captures plastic, paper, board and any other food-contact
            packaging, with a single EU threshold structure.
          </p>

          <TipBox variant="warning" label="Two restrictions, not one">
            The PPWR Article 5 restriction is separate from the broader PFAS
            restriction proposal under REACH (the &ldquo;universal&rdquo; PFAS
            restriction submitted by Germany, the Netherlands, Sweden, Denmark and
            Norway in February 2023). The REACH proposal is not yet adopted, has a
            longer scope (industrial uses, textiles, firefighting foams, medical
            devices) and a different phase-in. Article 5 of the PPWR is adopted, in
            force, and bites on 12 August 2026 for food-contact packaging.
          </TipBox>

          <h2 id="exact-thresholds">The exact thresholds</h2>
          <p>
            Article 5 prohibits placing on the EU market food-contact packaging
            containing PFAS in concentrations <strong>equal to or greater than</strong>{" "}
            three values, applied concurrently. The full mechanism is set out below.
          </p>
          <table>
            <thead>
              <tr>
                <th>Threshold</th>
                <th>Value</th>
                <th>Method</th>
                <th>What it answers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Individual PFAS</td>
                <td>25 ppb (25 µg/kg)</td>
                <td>Targeted analysis (LC-MS/MS, GC-MS/MS)</td>
                <td>
                  Is any single PFAS species (e.g. PFOA, PFOS, 6:2 FTS) present at or
                  above 25 ppb?
                </td>
              </tr>
              <tr>
                <td>Sum of PFAS</td>
                <td>250 ppb (250 µg/kg)</td>
                <td>Targeted analysis on the agreed PFAS list</td>
                <td>Is the cumulative concentration of the targeted PFAS list at or above 250 ppb?</td>
              </tr>
              <tr>
                <td>Total fluorine</td>
                <td>50 ppm (50 mg/kg)</td>
                <td>
                  Combustion ion chromatography (CIC) or organic fluorine after
                  extraction (EOF)
                </td>
                <td>
                  Is the total organic fluorine — including non-targeted PFAS species —
                  at or above 50 ppm?
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The three thresholds answer different questions. Targeted analysis at 25
            ppb / 250 ppb identifies <em>known</em> PFAS species against a defined
            list of analytes. Total fluorine at 50 ppm acts as an indicator: it
            captures everything fluorinated, including the long tail of non-targeted
            PFAS species that targeted analysis cannot see by definition. A compliance
            file based on targeted analysis alone is incomplete. A file based on total
            fluorine alone tells you fluorine is present but not which species.
            Article 5 expects both.
          </p>

          <h3 id="intentionally-added">&ldquo;Intentionally added&rdquo; — the key qualifier</h3>
          <p>
            Article 5 prohibits <em>intentionally added</em> PFAS. Background
            contamination from incoming recycled fibre, environmental presence in raw
            materials or trace migration from upstream auxiliaries are not the focus
            of the prohibition — but the thresholds still apply, and a brand owner
            cannot use &ldquo;unintentional&rdquo; as a defence if the unit measures
            above 50 ppm total fluorine. The defensible position is to evidence,
            through supplier declarations and testing, that no PFAS-containing
            ingredient is in the bill of materials, and that the measured fluorine is
            below the thresholds anyway.
          </p>

          <h2 id="food-contact-meaning">What &ldquo;food-contact&rdquo; means under the PPWR</h2>
          <p>
            Article 3 of the PPWR cross-references{" "}
            <strong>Regulation (EC) 1935/2004</strong> on materials and articles
            intended to come into contact with food. The scope is therefore very
            broad: anything intended to come into contact with food, in normal or
            foreseeable conditions of use, is in. That includes:
          </p>
          <ul>
            <li>
              Primary food packaging — pizza boxes, microwave popcorn bags, butter
              wraps, ready-meal trays, cup-noodle containers, takeaway clamshells,
              sandwich wedges, bakery bags.
            </li>
            <li>
              Quick-service-restaurant disposables — cups, lids, wraps, paper baskets.
            </li>
            <li>
              Pet food primary packaging — wet pet food pouches, dry pet food bags.
            </li>
            <li>
              Inner liners that touch food — cardboard tube ice-cream cartons, frozen
              food cartons.
            </li>
            <li>
              Multi-layer flexible packaging where any layer contacts food, even if
              the fluorinated layer is not the food-contact layer (functional barrier
              arguments are highly limited under Article 5).
            </li>
          </ul>
          <p>
            Outer transit packaging that does not contact food is out of scope of
            Article 5 specifically — but is in scope of Articles 6, 7, 10 and 24. See
            our{" "}
            <Link href={`/${locale}/blog/ppwr-2025-survival-guide-for-european-brand-owners`}>
              survival guide
            </Link>{" "}
            for the full obligation map.
          </p>

          <h2 id="annex-v-edges">Annex V exemptions and edge cases</h2>
          <p>
            Annex V of the PPWR concerns the format-based bans of Article 25 (single-use
            plastic packaging for fresh fruit and vegetables under 1.5 kg, HORECA
            on-premise single use, hotel mini-toiletries, condiment sachets, etc.).
            It does not exempt categories from the PFAS restriction. The few real
            edges around Article 5 are:
          </p>
          <ul>
            <li>
              <strong>Medical devices and medicinal products</strong> have separate
              packaging rules. PPWR cross-refers to Regulation (EU) 2017/745, but the
              PFAS restriction in food-contact packaging applies regardless to
              food-contact uses (e.g. enteral nutrition primary packaging is in scope).
            </li>
            <li>
              <strong>Reusable food-contact packaging</strong> is in scope. Fluorinated
              non-stick coatings on commercial reusable trays must comply.
            </li>
            <li>
              <strong>Packaging placed on the EU market before 12 August 2026</strong>{" "}
              and already at consumer-facing retail can continue to be sold through
              (transitional provision in Article 78). Stock placed on the market after
              the date must comply.
            </li>
          </ul>

          <h2 id="testing-today">How to test today</h2>
          <p>
            Three accredited methods underpin the Article 5 compliance file. The
            standards landscape was last consolidated by EFSA and the Joint Research
            Centre in 2023; the Commission&apos;s implementing act on harmonised
            methodology is expected by Q4 2026.
          </p>
          <h3 id="method-targeted">Targeted analysis (LC-MS/MS, GC-MS/MS)</h3>
          <p>
            A targeted method quantifies named PFAS species against a defined list of
            analytes — typically the 20 to 30 species most commonly reported by EFSA
            in food and food-contact materials. It is the method that answers the 25
            ppb individual threshold and the 250 ppb sum-of-PFAS threshold. Lead
            times: 5 to 10 working days at major EU accredited labs. Cost: typically
            €350 to €650 per sample.
          </p>
          <h3 id="method-total-fluorine">
            Total fluorine — combustion ion chromatography (CIC)
          </h3>
          <p>
            CIC combusts the sample at 1000 °C and measures total fluoride in the
            combustion gases. It captures all fluorinated organic species — targeted
            and non-targeted — and answers the 50 ppm threshold. Lead times: 7 to 14
            working days. Cost: typically €200 to €400 per sample. CIC does not
            identify which PFAS species is present; it only quantifies total
            fluorine.
          </p>
          <h3 id="method-eof">Extractable organic fluorine (EOF)</h3>
          <p>
            EOF is a complementary method that extracts the organic fluorine from the
            packaging sample, then measures fluoride. It is more sensitive than CIC at
            low concentrations and is used as a confirmatory method. Cost typically
            €350 to €550 per sample.
          </p>

          <TipBox variant="info" label="Lab capacity is a 2026 problem">
            Accredited lab capacity for the three methods on packaging matrices is
            already constrained across the EU. Booking 50+ SKUs into testing in Q3
            2026 — when every brand owner is doing the same thing — will not work.
            Block lab slots in Q1-Q2 2026 with at least one primary lab and one
            fallback. Contractual minimum-volume commitments lock priority.
          </TipBox>

          <h2 id="substitute-materials">Substitute materials — what works, what does not</h2>
          <p>
            The fluorinated grease- and water-resistance barrier was used in
            food-contact paper and board because it was inexpensive, performed across
            a wide temperature range, was thermoformable and had no organoleptic
            impact. Replacing it without sacrificing those properties is not a single
            decision; it is a portfolio decision per use case.
          </p>
          <h3 id="sub-paperpe">Multi-layer paper-PE</h3>
          <p>
            Paper laminated with a polyethylene film provides the grease barrier. Used
            widely for QSR cups, ice-cream cartons and butter wraps. The recyclability
            trade-off is real: paper-PE multi-layer is recyclable in many EU paper
            mills but dissolves the Article 6 Class A grade. Plan the substitution
            jointly with the recyclability strategy or it will boomerang in 2030.
          </p>
          <h3 id="sub-bio-barriers">Plant-based and bio-wax barriers</h3>
          <p>
            Plant-based wax dispersions (carnauba, beeswax derivatives) and modified
            starch coatings are now mature for ambient and chilled food applications.
            They struggle at high heat and on long shelf-life ready-meal trays.
          </p>
          <h3 id="sub-mineral">Mineral coatings</h3>
          <p>
            Calcium carbonate-based and silicate-based mineral coatings provide good
            oil and grease resistance. Compatibility with offset and digital printing
            is good. Cost is 8-15% above fluorinated coatings at parity volumes.
          </p>
          <h3 id="sub-compostable">Compostable plastics</h3>
          <p>
            PLA, PBAT and PHA can replace fluorinated paper coatings in QSR
            single-serve applications. They interact with the Article 9 compostability
            regime: tea/coffee bags and very lightweight carrier bags must be
            compostable; for other uses, compostable plastic is treated as plastic
            packaging under Articles 6, 7 and 24.
          </p>
          <h3 id="sub-uncoated">Uncoated and lightly coated paper</h3>
          <p>
            For dry foods (bakery, cereals, dry pet food kibble) the simplest answer
            is often that no barrier is needed at all. The Article 5 compliance file
            becomes a confirmation of absence rather than a substitution analysis.
          </p>
          <table>
            <thead>
              <tr>
                <th>Substitute</th>
                <th>Best fit</th>
                <th>Cost vs fluorinated</th>
                <th>Recyclability impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paper-PE</td>
                <td>QSR cups, ice cream</td>
                <td>+5-10%</td>
                <td>Class B; mill-dependent</td>
              </tr>
              <tr>
                <td>Plant-based wax</td>
                <td>Bakery, ambient</td>
                <td>+10-20%</td>
                <td>Neutral / Class A possible</td>
              </tr>
              <tr>
                <td>Mineral coating</td>
                <td>Frozen, ready meals</td>
                <td>+8-15%</td>
                <td>Class A possible</td>
              </tr>
              <tr>
                <td>Compostable PLA/PBAT</td>
                <td>QSR single-serve</td>
                <td>+25-40%</td>
                <td>Industrial composting only</td>
              </tr>
              <tr>
                <td>Uncoated paper</td>
                <td>Dry foods</td>
                <td>−3-5%</td>
                <td>Class A typical</td>
              </tr>
            </tbody>
          </table>

          <InlineCTA
            title="A PFAS substitution is also a recyclability decision."
            description="Pactum runs PFAS substitution and Article 6 recyclability grading on the same data. Avoid the boomerang of replacing a fluorinated barrier with a multi-layer that fails Class A in 2030."
            ctaLabel="Get the article-by-article roadmap"
            ctaHref={`/${locale}/services/ppwr-gap-analysis`}
            imageSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&auto=format&fit=crop"
            variant="dark"
          />

          <h2 id="supplier-clauses">Supplier contractual clauses to insert this quarter</h2>
          <p>
            Whatever the technical outcome, the legal exposure runs through the
            supply contract. The Article 39 Declaration of Conformity that the brand
            owner draws up depends on attestations from upstream suppliers. We are
            inserting four standard clauses in food-contact packaging supply
            agreements at the moment.
          </p>

          <h3 id="clause-attestation">Clause 1 — PFAS attestation</h3>
          <blockquote>
            The Supplier warrants that the Packaging supplied under this Agreement
            does not contain any per- or polyfluoroalkyl substance (PFAS) intentionally
            added, and that on representative production samples tested in accordance
            with current accredited methodology, the Packaging meets the thresholds set
            out in Article 5 of Regulation (EU) 2025/40 (25 µg/kg per individual PFAS
            on targeted analysis, 250 µg/kg sum of PFAS on targeted analysis, 50 mg/kg
            total fluorine on combustion ion chromatography or extractable organic
            fluorine).
          </blockquote>

          <h3 id="clause-evidence">Clause 2 — Evidence on demand</h3>
          <blockquote>
            The Supplier shall provide, on the Buyer&apos;s written request and within
            ten (10) Business Days, certificates of analysis from an EU-accredited
            laboratory (ISO/IEC 17025) covering targeted PFAS analysis and total
            fluorine, for the production batch identified by the Buyer. The frequency
            of testing shall be no less than once per calendar quarter per packaging
            reference per manufacturing site.
          </blockquote>

          <h3 id="clause-changes">Clause 3 — Notification of changes</h3>
          <blockquote>
            The Supplier shall notify the Buyer in writing at least sixty (60)
            calendar days prior to any change in raw materials, additives, processing
            aids or production site that could affect the PFAS or total fluorine
            content of the Packaging.
          </blockquote>

          <h3 id="clause-indemnity">Clause 4 — Indemnity and recall</h3>
          <blockquote>
            The Supplier shall indemnify and hold harmless the Buyer from and against
            any direct loss arising from a breach of Clauses 1 to 3, including
            recall, withdrawal and replacement costs incurred under Regulation (EU)
            2019/1020 on market surveillance, up to the amount specified in Schedule
            [X].
          </blockquote>

          <p>
            Suppliers will resist Clause 4 on the indemnity cap. Hold the line: the
            recall exposure under (EU) 2019/1020 is materially larger than the
            contract value, and an uncapped clause is not unusual on regulated
            attestations. Our standard clause library is part of the deliverables on{" "}
            <Link href={`/${locale}/services/pfas-compliance`}>
              /{locale}/services/pfas-compliance
            </Link>{" "}
            and the related{" "}
            <Link href={`/${locale}/services/declaration-of-conformity`}>
              Declaration of Conformity
            </Link>{" "}
            service.
          </p>

          <h2 id="enforcement-cost">Enforcement risk and cost of getting it wrong</h2>
          <p>
            Three components of cost arise on a PFAS non-compliance event.
          </p>
          <p>
            <strong>Administrative fines under Article 68.</strong> Member States
            retain discretion. Indicative current ranges in adopted national
            frameworks: Germany up to €100 000 per packaging unit type per
            infringement; France up to 4% of national turnover under the
            Code de l&apos;environnement following the 2025 amendments aligning with
            the PPWR; Italy comparable scale via D.Lgs. 152/2006.
          </p>
          <p>
            <strong>Market-surveillance enforcement under (EU) 2019/1020.</strong>{" "}
            Withdrawal and recall powers are explicit. The cost of recalling a
            national rollout of a ready-meal range typically lands between €1.5m and
            €8m for a mid-sized FMCG, before reputational damage.
          </p>
          <p>
            <strong>Criminal liability in some Member States.</strong> A materially
            incorrect Declaration of Conformity can trigger criminal liability for
            the legal representative who signed it in Germany (§267 StGB), France
            (Code pénal Art. 441-1) and the Netherlands (Art. 225 Sr).
          </p>

          <TipBox variant="warning" label="The DoC is a regulated attestation">
            Treat the Article 39 Declaration of Conformity as a regulated attestation
            — not a marketing document. Three signatures are common on client DoCs:
            Director of Packaging, General Counsel, and either Quality or Compliance.
            Joint sign-off forces evidentiary discipline.
          </TipBox>

          <h2 id="ninety-day-plan">The 90-day plan</h2>
          <p>
            A focused PFAS workstream takes about twelve weeks. Below is the plan we
            run with clients today.
          </p>
          <table>
            <thead>
              <tr>
                <th>Week</th>
                <th>Activity</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Food-contact SKU master list with material composition</td>
                <td>Packaging</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Supplier survey: PFAS attestation request and BoM line review</td>
                <td>Procurement</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lab capacity booking and method scope confirmation</td>
                <td>Quality / R&amp;D</td>
              </tr>
              <tr>
                <td>4-5</td>
                <td>Targeted analysis (25 / 250 ppb) on prioritised SKUs</td>
                <td>Lab</td>
              </tr>
              <tr>
                <td>5-6</td>
                <td>Total fluorine (50 ppm) by CIC on prioritised SKUs</td>
                <td>Lab</td>
              </tr>
              <tr>
                <td>6-7</td>
                <td>Substitute material shortlist per use case</td>
                <td>R&amp;D</td>
              </tr>
              <tr>
                <td>7-8</td>
                <td>Pilot line trials on top three substitutes</td>
                <td>Operations</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Supplier clause insertion (Clauses 1-4)</td>
                <td>Procurement / Legal</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Article 39 DoC drafting per packaging unit type</td>
                <td>Compliance</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Stock rotation plan: place-on-market cut-off ahead of 12 Aug 2026</td>
                <td>Supply chain</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Steerco sign-off and surveillance testing protocol</td>
                <td>Steerco</td>
              </tr>
            </tbody>
          </table>
          <p>
            The free PPWR readiness self-assessment is at{" "}
            <Link href={`/${locale}/resources/ppwr-readiness-assessment`}>
              /{locale}/resources/ppwr-readiness-assessment
            </Link>
            ; the full timeline at{" "}
            <Link href={`/${locale}/resources/ppwr-timeline`}>
              /{locale}/resources/ppwr-timeline
            </Link>
            ; the PPWR FAQ at{" "}
            <Link href={`/${locale}/resources/ppwr-faq`}>
              /{locale}/resources/ppwr-faq
            </Link>
            .
          </p>

          <h2 id="faq">Frequently asked questions</h2>

          <h3 id="faq-1">Does Article 5 ban all PFAS or only intentionally added PFAS?</h3>
          <p>
            The Article uses the &ldquo;intentionally added&rdquo; qualifier, but the
            three numerical thresholds operate as cut-off limits regardless of intent.
            A packaging unit measuring above 50 ppm total fluorine is non-compliant
            even if no PFAS was deliberately included.
          </p>

          <h3 id="faq-2">Are paper bags from non-EU mills in scope?</h3>
          <p>
            Yes. The importer placing the packaging on the EU market is the obligated
            economic operator and must comply with Article 5 thresholds and the
            Article 39 Declaration of Conformity.
          </p>

          <h3 id="faq-3">Can I rely on a single test per SKU?</h3>
          <p>
            Once for an initial compliance file is the floor, not the ceiling. Best
            practice — and the position EU market surveillance authorities are
            signalling — is per-batch or per-quarter representative sampling, with
            retained reference samples for re-testing on enforcement event.
          </p>

          <h3 id="faq-4">What about recycled paper fibre that contains background PFAS?</h3>
          <p>
            Background PFAS from recycled fibre is the most challenging case. The
            defensible position is to test, evidence sub-threshold values and
            contractually require fibre suppliers to source PFAS-free virgin and
            recycled inputs. Some converters have moved to virgin-only fibre for
            food-contact applications as a precaution.
          </p>

          <h3 id="faq-5">Are reusable food trays in scope?</h3>
          <p>
            Yes. Reusable packaging is packaging under Article 3 and is in scope of
            the Article 5 thresholds. Fluorinated non-stick coatings on commercial
            reusable trays are restricted.
          </p>

          <h3 id="faq-6">What if my packaging is below 25 ppb but I cannot measure total fluorine?</h3>
          <p>
            You are in regulatory limbo. The three thresholds operate concurrently. A
            file that omits total fluorine cannot evidence concurrent compliance.
            Contract a CIC test as part of the standard testing scope.
          </p>

          <h3 id="faq-7">What is the relationship to EFSA&apos;s tolerable weekly intake?</h3>
          <p>
            EFSA&apos;s 2020 tolerable weekly intake of 4.4 ng/kg body weight per week
            for the sum of four PFAS in food was the toxicological basis for the
            PPWR&apos;s 25 ppb / 250 ppb thresholds. The thresholds are
            food-contact-specific and not a TWI; the underlying public health rationale
            is the same.
          </p>

          <h3 id="faq-8">Can I keep selling stock placed on the market before 12 August 2026?</h3>
          <p>
            Yes. Article 78 contains transitional provisions: packaging lawfully
            placed on the EU market before the application date can be made available
            and sold through. New stock placed on the market after the date must
            comply.
          </p>

          <h3 id="faq-9">Is the supplier&apos;s certificate of analysis enough for my DoC?</h3>
          <p>
            Not on its own. The brand owner&apos;s Article 39 DoC must include
            supplier evidence plus the brand owner&apos;s own conformity assessment
            and sufficient testing on representative samples of the placed-on-market
            unit. Outsource one, do not outsource the second.
          </p>

          <h3 id="faq-10">Will the implementing act on methodology change the thresholds?</h3>
          <p>
            The Commission&apos;s implementing act will harmonise <em>methodology</em>{" "}
            — sampling, sample preparation, lab method specifications. It cannot lower
            or raise the numerical thresholds: those are set in Article 5 of the
            basic regulation and require co-decision to amend.
          </p>

          <p>
            For the obligation map across all eight PPWR themes, see{" "}
            <Link href={`/${locale}/blog/ppwr-2025-survival-guide-for-european-brand-owners`}>
              the PPWR survival guide
            </Link>
            ; for the recycled content roadmap that interacts with PFAS substitution,
            see{" "}
            <Link href={`/${locale}/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap`}>
              the 2030 / 2040 recycled content briefing
            </Link>
            . The full text is on{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>{" "}
            and the European Commission&apos;s policy page is at{" "}
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
