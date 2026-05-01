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

const slug = "ppwr-2025-survival-guide-for-european-brand-owners";

type RouteParams = { params: Promise<{ locale: string }> };

const TITLE = {
  fr: "PPWR 2025 — Le guide de survie pour les metteurs sur le marché européens",
  en: "PPWR 2025: the survival guide for European brand owners",
} as const;

const META_TITLE = {
  fr: "PPWR 2025 — Guide de survie pour les marques",
  en: "PPWR 2025: the survival guide for brand owners",
} as const;

const META_DESCRIPTION = {
  fr: "Le Règlement (UE) 2025/40 (la PPWR) s'applique le 12 août 2026. Périmètre, huit obligations, calendrier 2030-2040 et sept erreurs à éviter.",
  en: "Regulation (EU) 2025/40 applies from 12 August 2026. Scope, eight obligations, the timeline to 2040 and the seven mistakes most brand owners will make.",
} as const;

const OG_TITLE = {
  fr: "PPWR 2025 — Guide de survie pour les metteurs sur le marché européens",
  en: "PPWR 2025: the survival guide for European brand owners",
} as const;

const OG_DESCRIPTION = {
  fr: "Le briefing pilier sur le Règlement (UE) 2025/40 — identité, périmètre, obligations, calendrier, contrôles et plan à 90 jours.",
  en: "The pillar briefing on Regulation (EU) 2025/40 — identity, scope, obligations, timeline, enforcement and the 90-day action plan.",
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

export default async function PpwrSurvivalGuide({ params }: RouteParams) {
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
          publishedAt="15 avril 2026"
          category={post.category}
          heroImage={post.hero!.src}
          ctaTitle="Transformez le Règlement (UE) 2025/40 en feuille de route chiffrée"
          ctaDescription="Réservez une session de travail avec Pactum. Nous cartographions chaque SKU face aux huit obligations de la PPWR sous NDA et livrons une notation de recyclabilité, l'écart de contenu recyclé et un plan d'action à 24 mois en cinq jours ouvrés."
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
              <li className="text-foreground">Guide de survie PPWR</li>
            </ol>
          </nav>

          <ArticleSummary
            items={[
              "Le Règlement (UE) 2025/40 — la PPWR — est entré en vigueur le 11 février 2025 et s'applique de manière générale à compter du 12 août 2026.",
              "Huit thèmes d'obligations mordent : PFAS (article 5), recyclabilité (article 6), contenu recyclé (article 7), minimisation et vide d'air (articles 10 / 24), étiquetage et passeport numérique (article 12), réemploi et rechargement (articles 29 à 33), Déclaration de conformité (article 39) et REP (article 45).",
              "Les échéances proches qui pèsent : 12 août 2026 (interdiction PFAS, formats interdits Annexe V, offre réutilisable en CHR) et 12 août 2028 (étiquetage harmonisé, plafond de vide d'air à 50 %).",
              "La falaise 2030 : la notation de recyclabilité, les quatre objectifs de contenu recyclé (30 % / 10 % / 30 % / 35 %) et le taux de réemploi des emballages de transport à 40 %.",
              "Les contrôles passent par les sanctions des États membres et la surveillance du marché du Règlement (UE) 2019/1020 — un emballage non conforme peut être retiré ou rappelé.",
            ]}
          />

          <h2 id="essentiel">L'essentiel</h2>
          <p>
            Le <strong>Règlement (UE) 2025/40 (la PPWR)</strong> — Règlement
            sur les emballages et les déchets d'emballages — est le plus
            important texte sur l'emballage jamais adopté par l'Union
            européenne. Il a été publié au Journal officiel le 22 janvier 2025,
            il est entré en vigueur le 11 février 2025 et il s'applique de
            manière générale à compter du <strong>12 août 2026</strong>, dix-huit
            mois après son entrée en vigueur. Il abroge la directive 94/62/CE,
            modifie le Règlement (UE) 2019/1020 sur la surveillance du marché
            et modifie la directive (UE) 2019/904 sur les plastiques à usage
            unique. Son numéro CELEX est <strong>32025R0040</strong>. Le texte
            intégral est disponible sur{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>
            . Si vous placez des emballages sur le marché de l'Union — directement,
            par l'intermédiaire d'un importateur ou d'un prestataire de
            services d'exécution des commandes — la quasi-totalité des
            articles du Règlement vous concernent.
          </p>
          <p>
            Ce briefing condense le Règlement en huit thèmes d'obligations,
            parcourt l'ensemble du calendrier de conformité jusqu'en 2040,
            liste les sept erreurs opérationnelles que nous voyons déjà chez
            nos clients et propose un plan à 90 jours pour passer d'un
            portefeuille emballages anxiogène à un portefeuille opérationnel.
            Il s'adresse aux décideurs seniors — Directeur de l'emballage,
            Responsable développement durable, Direction juridique, Directeur
            conformité — qui ne cherchent pas un nouvel essai sur le
            développement durable, mais le règlement, article par article,
            avec les dates qui comptent.
          </p>

          <h2 id="identite">Qu'est-ce que le Règlement (UE) 2025/40</h2>
          <p>
            L'intitulé complet du Règlement est{" "}
            <em>
              Règlement (UE) 2025/40 du Parlement européen et du Conseil du
              19 décembre 2024 relatif aux emballages et aux déchets
              d'emballages, modifiant le Règlement (UE) 2019/1020 et la
              directive (UE) 2019/904, et abrogeant la directive 94/62/CE
            </em>
            . Le texte publié figure au JO L du 22 janvier 2025. L'entrée en
            vigueur est fixée au vingtième jour suivant la publication, soit
            le <strong>11 février 2025</strong>. L'article 78 fixe la date
            d'application générale au <strong>12 août 2026</strong> — dix-huit
            mois après l'entrée en vigueur — sauf pour les dispositions que
            le Règlement échelonne plus tard (classes de recyclabilité au
            1er janvier 2030, objectifs de contenu recyclé au 1er janvier 2030,
            étiquetage harmonisé au 12 août 2028, vide d'air au 12 août 2028,
            objectifs de réemploi au 1er janvier 2030, etc.).
          </p>
          <p>
            Le texte est un <strong>règlement</strong>, pas une directive.
            Cette différence juridique change tout. Une directive — comme la
            directive 94/62/CE de 1994 qu'il remplace — laisse aux États
            membres le soin de transposer les règles en droit national, avec
            une marge de manœuvre importante et selon leur propre calendrier.
            Un règlement est directement applicable dans chaque État membre
            le même jour. Concrètement, un metteur sur le marché présent dans
            vingt-sept États membres n'a plus à compiler vingt-sept exigences
            nationales : il y a un texte européen unique. Le revers, ce sont
            les compétences que les États membres conservent : application,
            sanctions (article 68) et quelques dérogations — notamment sur le
            réemploi (article 29(7)) et les consignes (article 50). La
            réalité opérationnelle reste donc nationale par endroits.
          </p>
          <p>
            Le Règlement repose sur l'article 114 du TFUE (marché intérieur)
            et non sur l'article 192 (protection de l'environnement). Ce
            choix est délibéré : il harmonise les exigences relatives aux
            emballages pour supprimer les frictions du marché intérieur, et
            les États membres ne peuvent en principe pas adopter
            unilatéralement des règles nationales d'éco-conception
            d'emballage plus strictes que celles fixées par la PPWR. Les
            règles nationales existantes — la loi AGEC en France, la VerpackG
            en Allemagne, le RD 1055/2022 en Espagne — doivent être alignées
            sur la PPWR.
          </p>

          <TipBox variant="info" label="Identité réglementaire">
            En première occurrence dans toute note de conformité, citez{" "}
            <strong>Règlement (UE) 2025/40</strong> en intégralité, puis
            mentionnez « la PPWR » ou « le Règlement ». Suivez le CELEX{" "}
            <strong>32025R0040</strong> dans votre base réglementaire.
            Épinglez{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              l'URL ELI EUR-Lex
            </a>{" "}
            dans votre GED — elle pointe toujours vers la version consolidée
            faisant foi.
          </TipBox>

          <h2 id="perimetre">Qui est concerné</h2>
          <p>
            L'article 4 du Règlement définit les opérateurs économiques
            soumis aux obligations. La liste est plus large que ne le
            supposent la plupart des revues juridiques de premier niveau.
            Elle couvre chaque maillon de la chaîne qui place de l'emballage
            sur le marché de l'Union :
          </p>
          <ul>
            <li>
              <strong>Les fabricants d'emballages</strong> — transformateurs,
              fabricants de moules, imprimeurs d'emballages papier, verriers,
              fabricants de boîtes métalliques — pour la conception et la
              composition matérielle de l'emballage vide.
            </li>
            <li>
              <strong>Les fournisseurs d'emballages</strong> — fournisseurs
              amont de produits chimiques, additifs et résines — pour les
              obligations relatives aux substances préoccupantes (article 5),
              y compris la restriction PFAS.
            </li>
            <li>
              <strong>Les importateurs de produits emballés</strong> — tout
              opérateur qui place sur le marché de l'Union un emballage en
              provenance d'un pays tiers est responsable des mêmes obligations
              qu'un fabricant établi dans l'Union, y compris l'établissement
              de la Déclaration de conformité (article 39).
            </li>
            <li>
              <strong>Les distributeurs</strong> — gros et détail — doivent
              vérifier les marquages de conformité, refuser un emballage non
              conforme et conserver des registres de traçabilité.
            </li>
            <li>
              <strong>Les prestataires de services d'exécution des
              commandes</strong> — opérateurs de type Amazon FBA qui stockent,
              emballent et expédient pour le compte de tiers — sont
              explicitement des opérateurs économiques obligés au titre de
              l'article 4. C'est la réponse du législateur européen au
              contournement e-commerce.
            </li>
            <li>
              <strong>Les mandataires</strong> — un fabricant non
              établi dans l'Union peut désigner un mandataire établi dans
              l'Union pour assumer en son nom les obligations des articles 39,
              40 et 41.
            </li>
            <li>
              <strong>Les distributeurs finaux</strong> qui vendent au
              consommateur (particulièrement concernés par l'offre
              réutilisable des articles 29-30 et l'obligation de
              rechargement de l'article 33).
            </li>
          </ul>
          <p>
            Le raccourci sur lequel se calent la plupart des directions
            juridiques est simple : si vous <em>placez</em> un emballage sur
            le marché de l'Union, vous êtes concerné. La « mise sur le
            marché » est la notion définie ; elle vise la première mise à
            disposition — pour vente, location ou gratuitement — d'une unité
            d'emballage dans l'Union. Une vente n'est pas requise ; livrer du
            stock de marque distributeur compte. Un établissement dans
            l'Union n'est pas requis ; les fabricants non européens vendant
            directement aux consommateurs européens sont concernés et doivent
            désigner un mandataire.
          </p>

          <h2 id="calendrier">Le calendrier en un coup d'œil</h2>
          <p>
            Le tableau ci-dessous est le calendrier consolidé que nous
            suivons pour nos clients. Il n'est pas exhaustif : la Commission
            doit adopter environ <strong>30 actes délégués et actes
            d'exécution</strong> sur la période 2025-2028, qui préciseront
            les critères d'éco-conception, la méthodologie de calcul du
            contenu recyclé, les spécifications des étiquettes et le contenu
            technique de la Déclaration de conformité. Les dates ci-dessous
            figurent dans le Règlement lui-même et ne dépendent pas de ces
            actes.
          </p>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Article</th>
                <th>Obligation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11 février 2025</td>
                <td>Art. 78</td>
                <td>Entrée en vigueur du Règlement (UE) 2025/40.</td>
              </tr>
              <tr>
                <td>12 août 2026</td>
                <td>Art. 5</td>
                <td>
                  Interdiction des PFAS dans les emballages au contact alimentaire (25 ppb / 250 ppb / 50 ppm).
                </td>
              </tr>
              <tr>
                <td>12 août 2026</td>
                <td>Art. 25 + Annexe V</td>
                <td>
                  Interdictions de formats à usage unique : fruits et légumes frais &lt; 1,5 kg, CHR sur place,
                  miniatures d'hôtellerie, sachets de condiments, sacs très légers en plastique.
                </td>
              </tr>
              <tr>
                <td>12 août 2026</td>
                <td>Art. 32</td>
                <td>La vente à emporter en CHR doit proposer une option de contenant réutilisable.</td>
              </tr>
              <tr>
                <td>12 août 2026</td>
                <td>Art. 39</td>
                <td>
                  Déclaration de conformité requise avant toute mise sur le marché de l'Union.
                </td>
              </tr>
              <tr>
                <td>12 août 2028</td>
                <td>Art. 12</td>
                <td>
                  Étiquetage harmonisé de la composition matérielle sur chaque unité d'emballage ; déploiement du QR code / DPP.
                </td>
              </tr>
              <tr>
                <td>12 août 2028</td>
                <td>Art. 24</td>
                <td>
                  Taux de vide d'air maximal de 50 % pour les emballages groupés, de transport et de e-commerce.
                </td>
              </tr>
              <tr>
                <td>31 décembre 2026</td>
                <td>Art. 50</td>
                <td>
                  Les États membres doivent atteindre 80 % de collecte séparée des bouteilles plastique de boisson à usage unique pour conserver la dérogation à la consigne ; à défaut, la consigne devient obligatoire d'ici 2029.
                </td>
              </tr>
              <tr>
                <td>31 décembre 2029</td>
                <td>Art. 50</td>
                <td>
                  90 % de collecte séparée des bouteilles plastique de boisson à usage unique jusqu'à 3 L et des canettes métalliques.
                </td>
              </tr>
              <tr>
                <td>1er janvier 2030</td>
                <td>Art. 6</td>
                <td>
                  Tous les emballages conçus pour être recyclables ; classes de recyclabilité A (≥95 %), B (≥80 %) et C (≥70 %) opérationnelles.
                </td>
              </tr>
              <tr>
                <td>1er janvier 2030</td>
                <td>Art. 7</td>
                <td>
                  Contenu recyclé dans les emballages plastiques : 30 % (PET sensible au contact), 10 % (autres plastiques sensibles au contact), 30 % (bouteilles plastique de boisson à usage unique), 35 % (autres emballages plastiques).
                </td>
              </tr>
              <tr>
                <td>1er janvier 2030</td>
                <td>Art. 10 / 24</td>
                <td>
                  Minimisation en poids, volume et nombre de couches ; consolidation des taux de vide d'air.
                </td>
              </tr>
              <tr>
                <td>1er janvier 2030</td>
                <td>Art. 29-30</td>
                <td>
                  Taux de réemploi : transport / groupage 40 % ; boissons 10 % ; emballages de transport du gros électroménager 90 % ; obligation de stations de rechargement chez les détaillants.
                </td>
              </tr>
              <tr>
                <td>1er janvier 2038</td>
                <td>Art. 6</td>
                <td>Interdiction de la classe C ; seules les classes A et B peuvent être mises sur le marché.</td>
              </tr>
              <tr>
                <td>1er janvier 2040</td>
                <td>Art. 7</td>
                <td>
                  Les objectifs de contenu recyclé passent à 50 % / 25 % / 65 % / 65 %.
                </td>
              </tr>
              <tr>
                <td>1er janvier 2040</td>
                <td>Art. 29</td>
                <td>
                  Les taux de réemploi passent à : transport / groupage 70 % ; boissons 40 % (dérogation possible des États membres).
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Le calendrier complet, y compris les jalons de transposition des
            États membres, est tenu à jour sur{" "}
            <Link href={`/${locale}/resources/ppwr-timeline`}>
              /{locale}/resources/ppwr-timeline
            </Link>{" "}
            et nous le mettons à jour dans les 48 heures qui suivent chaque
            nouvel acte de la Commission.
          </p>

          <h2 id="huit-obligations">Les huit obligations qui mordent</h2>
          <p>
            La PPWR comporte quatre-vingts articles et treize annexes. Pour
            la planification opérationnelle, nous regroupons les obligations
            de fond en huit thèmes. Chacun est articulé autour d'un article
            (ou d'un groupe d'articles) précis, d'une échéance précise et
            d'un livrable précis qu'un metteur sur le marché doit produire.
          </p>

          <h3 id="obligation-pfas">1. Substances préoccupantes — l'article 5 (PFAS)</h3>
          <p>
            À compter du 12 août 2026, les emballages au contact alimentaire
            ne doivent pas contenir de substances per- et polyfluoroalkylées
            (PFAS) ajoutées intentionnellement à hauteur de trois seuils
            cumulatifs : <strong>25 ppb</strong> pour tout PFAS individuel en
            analyse ciblée, <strong>250 ppb</strong> pour la somme des PFAS
            ciblés et <strong>50 ppm</strong> sur l'indicateur fluor total.
            L'article 5 restreint également d'autres substances
            préoccupantes listées à l'annexe II. L'échéance ne bouge pas ; la
            capacité d'essai est déjà tendue. Nous consacrons{" "}
            <Link href={`/${locale}/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline`}>
              un briefing entier
            </Link>{" "}
            à cet article et la trajectoire opérationnelle de mise en
            conformité figure sur{" "}
            <Link href={`/${locale}/services/pfas-compliance`}>
              /{locale}/services/pfas-compliance
            </Link>
            .
          </p>

          <h3 id="obligation-recyclabilite">
            2. Recyclabilité — l'article 6 et les critères d'éco-conception
          </h3>
          <p>
            À compter du 1er janvier 2030, chaque unité d'emballage placée
            sur le marché de l'Union doit être conçue pour être recyclable.
            La performance est notée en trois classes — <strong>Classe A</strong>{" "}
            (≥95 % recyclable en poids), <strong>Classe B</strong> (≥80 %) et{" "}
            <strong>Classe C</strong> (≥70 %). À compter du 1er janvier 2038,
            la classe C est interdite ; seules les classes A et B peuvent
            rester sur le marché. Les critères techniques d'éco-conception —
            les spécifications qui détermineront la classe d'un emballage —
            seront adoptés par la Commission via des actes délégués attendus
            d'ici fin 2027. La modulation des contributions REP est
            directement liée à la classe (article 47), de sorte qu'une
            classe C se traduira par des contributions sensiblement plus
            élevées dès 2030, bien avant l'interdiction de 2038. Notre
            méthodologie est détaillée sur{" "}
            <Link href={`/${locale}/services/recyclability-assessment`}>
              /{locale}/services/recyclability-assessment
            </Link>
            .
          </p>

          <h3 id="obligation-contenu-recycle">
            3. Contenu recyclé dans les emballages plastiques — l'article 7
          </h3>
          <p>
            À compter du 1er janvier 2030, les emballages plastiques doivent
            contenir un pourcentage minimum de matière recyclée issue de
            déchets plastiques post-consommation, calculé par type
            d'emballage, par site de production, par année. Les quatre
            objectifs sont : <strong>30 %</strong> pour les emballages
            sensibles au contact en PET, <strong>10 %</strong> pour les
            emballages sensibles au contact dans des plastiques autres que le
            PET, <strong>30 %</strong> pour les bouteilles plastique de
            boisson à usage unique, et <strong>35 %</strong> pour les autres
            emballages plastiques. À compter du 1er janvier 2040, ces
            objectifs passent à <strong>50 % / 25 % / 65 % / 65 %</strong>.
            Le briefing dédié aux quatre objectifs, à la certification, au
            bilan massique et aux réalités d'approvisionnement est{" "}
            <Link href={`/${locale}/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap`}>
              ici
            </Link>
            ; le service est sur{" "}
            <Link href={`/${locale}/services/recycled-content-roadmap`}>
              /{locale}/services/recycled-content-roadmap
            </Link>
            .
          </p>

          <h3 id="obligation-minimisation">
            4. Minimisation et vide d'air — les articles 10 et 24
          </h3>
          <p>
            L'article 10 impose une obligation de minimisation : à compter
            du 1er janvier 2030, l'emballage doit être réduit au minimum
            nécessaire en poids, en volume et en nombre de couches pour
            assurer sa fonctionnalité. L'article 24 impose un{" "}
            <strong>taux de vide d'air maximal de 50 %</strong> aux
            emballages groupés, de transport et de e-commerce à compter du
            12 août 2028. Les opérateurs e-commerce qui utilisent des cartons
            surdimensionnés pour de petits articles sont directement
            concernés. Le calcul de vide d'air est volumétrique et la
            méthodologie figure à l'annexe IV. La Déclaration de conformité
            de l'article 39 doit consigner l'analyse de minimisation.
          </p>

          <h3 id="obligation-etiquetage">
            5. Étiquetage, tri et passeport numérique du produit — les articles 12-13
          </h3>
          <p>
            À compter du 12 août 2028, chaque unité d'emballage doit porter
            un étiquetage harmonisé de composition matérielle et un
            étiquetage de tri aligné dans tous les États membres. L'article 12
            introduit également un support de données numérique — typiquement
            un QR code — qui montera en charge avec le passeport numérique
            du produit (DPP). Toute revendication de contenu recyclé doit
            être étayée et ne peut afficher le pourcentage comme argument
            commercial si le calcul sous-jacent n'a pas été vérifié. L'acte
            d'exécution sur les spécifications d'étiquetage est attendu mi-2027.
          </p>

          <h3 id="obligation-reemploi">
            6. Réemploi, rechargement et CHR — les articles 29 à 33
          </h3>
          <p>
            À compter du 1er janvier 2030, les emballages de transport et de
            groupage utilisés entre opérateurs (logistique B2B) doivent être
            réemployés à un taux de <strong>40 %</strong>, porté à{" "}
            <strong>70 %</strong> au 1er janvier 2040. Les emballages de
            boisson — eau, boissons rafraîchissantes, bière, vin, spiritueux —
            doivent être réutilisables à <strong>10 %</strong> en 2030 et{" "}
            <strong>40 %</strong> en 2040, avec dérogations possibles des
            États membres. Le gros électroménager doit atteindre{" "}
            <strong>90 %</strong> de réemploi des emballages de transport en
            2030. À compter du 12 août 2026, les opérateurs de vente à
            emporter en CHR doivent proposer aux consommateurs une option de
            contenant réutilisable, sans frais supplémentaires ou avec un
            système de consigne clair. Les détaillants de plus de 400 m²
            vendant denrées alimentaires et détergents doivent proposer le
            rechargement à compter du 1er janvier 2030. La stratégie est sur{" "}
            <Link href={`/${locale}/services/reuse-targets-strategy`}>
              /{locale}/services/reuse-targets-strategy
            </Link>
            .
          </p>

          <h3 id="obligation-doc">
            7. Déclaration de conformité et documentation technique — les articles 39-40
          </h3>
          <p>
            Avant toute mise sur le marché de l'Union, le fabricant (ou
            l'importateur lorsqu'il est établi hors de l'Union) doit établir
            une Déclaration de conformité écrite attestant la conformité aux
            articles 5 à 11 et à l'article 24. La documentation technique à
            l'appui de la DoC doit être conservée pendant{" "}
            <strong>10 ans</strong> à compter du dernier jour de mise sur le
            marché et tenue à la disposition des autorités de surveillance
            sur demande. La Commission adoptera un acte d'exécution fixant
            le modèle de DoC ; en attendant, le contenu de fond est
            obligatoire. Traitez la DoC comme l'équivalent emballage d'un
            dossier marquage CE : c'est le document que l'inspecteur
            demandera en premier. Notre méthodologie est sur{" "}
            <Link href={`/${locale}/services/declaration-of-conformity`}>
              /{locale}/services/declaration-of-conformity
            </Link>
            .
          </p>

          <h3 id="obligation-rep-consigne">
            8. Responsabilité élargie du producteur et consigne — les articles 45 et 50
          </h3>
          <p>
            L'article 45 oblige les producteurs — directement ou via des
            éco-organismes — à couvrir les coûts nets de la collecte
            séparée, du tri, du recyclage, du traitement, de la sensibilisation
            et du nettoyage des déchets sauvages. Les contributions doivent
            être éco-modulées en fonction de la classe de recyclabilité (A /
            B / C), du contenu recyclé et de la présence de substances
            préoccupantes (article 47). L'article 50 impose aux États membres
            d'atteindre 90 % de collecte séparée des bouteilles plastique de
            boisson à usage unique jusqu'à 3 L et des canettes métalliques
            d'ici le 31 décembre 2029. La consigne devient obligatoire à
            moins qu'un taux de collecte de 80 % n'ait été atteint par
            d'autres moyens d'ici le 31 décembre 2026, avec un plan crédible
            pour atteindre 90 % d'ici 2029. La France, l'Allemagne et les
            Pays-Bas opèrent des consignes aujourd'hui ; l'Italie et
            l'Espagne sont concernées par l'obligation et les 24 prochains
            mois verront un déploiement substantiel.
          </p>

          <TipBox variant="tip" label="Le levier d'éco-modulation">
            L'article 47 lie les contributions REP à la classe de
            recyclabilité et au contenu recyclé. Nos modélisations internes
            montrent que faire passer un portefeuille d'une moyenne classe C /
            0 % de rPET à classe B / 30 % de rPET réduit l'exposition aux
            contributions de 30 à 55 % dans les pays à fort volume comme
            l'Allemagne, la France et l'Italie. La feuille de route contenu
            recyclé se rentabilise avant que le règlement ne l'impose.
          </TipBox>

          <h2 id="controles">Contrôles et sanctions (article 68)</h2>
          <p>
            L'article 68 oblige les États membres à fixer le régime de
            sanctions applicables aux infractions au Règlement. La formule
            européenne classique s'applique : les sanctions doivent être{" "}
            <strong>effectives, proportionnées et dissuasives</strong>.
            Chaque État membre fixe son propre régime — la France s'appuie
            sur l'article L541 du Code de l'environnement, l'Allemagne via la
            VerpackG modifiée en 2025, l'Italie via le D.Lgs. 152/2006. La
            Commission a indiqué au considérant 145 que des amendes
            inférieures au niveau produisant un effet dissuasif réel
            feront l'objet d'une pression entre pairs et, le cas échéant, de
            procédures d'infraction.
          </p>
          <p>
            L'autre versant du dispositif réside dans le Règlement (UE) 2019/1020
            sur la surveillance du marché, que la PPWR modifie. Les autorités
            nationales de surveillance disposent désormais de pouvoirs
            explicites sur les emballages : inspection, prélèvement,
            demandes formelles d'information, alertes publiques, retrait du
            marché et rappel. La sanction de la mise sur le marché d'un
            emballage non conforme ne se limite donc pas à une amende ; c'est
            le coût du rappel. Rappeler les enveloppes e-commerce d'une
            saison parce que le taux de vide d'air viole l'article 24, ou
            une année de barquettes plats préparés parce que le seuil PFAS
            est dépassé au titre de l'article 5, coûte matériellement plus
            cher que le travail de conformité sous-jacent.
          </p>
          <p>
            Une Déclaration de conformité qui surévalue matériellement la
            conformité constitue une exposition distincte. Dans plusieurs
            États membres — notamment Allemagne, France et Pays-Bas — une
            DoC inexacte engage la responsabilité pénale, et non
            simplement administrative. La direction juridique doit traiter
            la DoC comme une attestation réglementée, pas comme un document
            marketing.
          </p>

          <InlineCTA
            title="Arrêtez de traduire les articles. Cartographiez vos SKU."
            description="L'analyse des écarts PPWR de Pactum en 5 jours cartographie chaque unité d'emballage face aux huit obligations, note la recyclabilité A/B/C, criblage PFAS, calcule l'écart de contenu recyclé et produit la feuille de route article par article que votre comité de pilotage attend."
            ctaLabel="Obtenir la feuille de route article par article"
            ctaHref={`/${locale}/services/ppwr-gap-analysis`}
            imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop"
            variant="dark"
          />

          <h2 id="erreurs">Sept erreurs à éviter</h2>
          <p>
            Nous menons des analyses d'écarts PPWR depuis l'accord politique
            de mars 2024. Les erreurs se ressemblent. Voici les sept que nous
            voyons le plus souvent, classées approximativement par coût
            métier.
          </p>

          <h3 id="erreur-1">
            1. Supposer que le fournisseur d'emballage rang 1 prend en charge la Déclaration de conformité
          </h3>
          <p>
            L'obligation de DoC au titre de l'article 39 incombe au fabricant
            de l'emballage ou — lorsque l'emballage est livré vide au metteur
            sur le marché pour conditionnement — au metteur sur le marché qui
            place le produit emballé fini sur le marché de l'Union. La plupart
            des marques supposent que leur fournisseur de cartons ou de
            préformes PET rédige la DoC. Il ne le fera pas. Il rédigera une
            déclaration de conformité sur l'unité d'emballage vide qu'il
            fabrique ; le metteur sur le marché est celui qui place le
            produit emballé fini sur le marché et qui est responsable de sa
            DoC. Internaliser un modèle dès maintenant et contractualiser les
            attestations amont est une décision de niveau direction.
          </p>

          <h3 id="erreur-2">
            2. Manquer l'échéance vide d'air du 12 août 2028
          </h3>
          <p>
            Le taux de vide d'air de l'article 24 s'applique au{" "}
            <strong>12 août 2028</strong>, pas en 2030. Les opérations
            e-commerce et direct-to-consumer avec des programmes
            multi-tailles de cartons doivent revoir leurs gammes, refondre la
            logique d'expédition des centres de distribution et vérifier le
            seuil de 50 % par lot. C'est un chantier de deux ans, pas de six
            mois.
          </p>

          <h3 id="erreur-3">
            3. Sourcer du rPET sans documentation bilan massique certifiée
          </h3>
          <p>
            L'obligation de contenu recyclé de l'article 7 est calculée par
            type d'emballage, par site, par année. L'acte d'exécution à venir
            de la Commission précisera la méthode de calcul, mais le
            considérant 70 indique clairement que l'attribution par bilan
            massique est acceptable lorsqu'elle est étayée par une chaîne de
            traçabilité certifiée. Les certifications ISCC PLUS et RecyClass
            au titre de la <strong>CEN/TS 16137</strong> sont la norme de
            marché de fait. Acheter du rPET au comptant sur la base d'un
            certificat papier d'origine recyclée sans traçabilité bilan
            massique certifiée ne passera ni un audit article 39, ni une
            vérification de modulation REP.
          </p>

          <h3 id="erreur-4">
            4. Confondre la classe de recyclabilité et la modulation des contributions REP
          </h3>
          <p>
            Les classes de recyclabilité de l'article 6 et la modulation des
            contributions REP de l'article 47 sont liées mais distinctes. La
            classe est une note réglementaire (A, B ou C, avec C interdite à
            partir de 2038). La modulation est l'instrument financier que les
            éco-organismes nationaux utilisent pour traduire la note en
            tarifs. Les confondre désaxe le travail : la notation est un
            travail technique (vous notez et vous ne pouvez pas
            juridiquement contester le résultat) ; la modulation des
            contributions est un travail commercial éco-organisme par
            éco-organisme, où une discussion raisonnée peut faire varier
            l'exposition d'un facteur deux.
          </p>

          <h3 id="erreur-5">
            5. Ignorer les obligations des prestataires de services d'exécution des commandes
          </h3>
          <p>
            L'article 4 vise explicitement les prestataires de services
            d'exécution des commandes — les opérateurs de type Amazon /
            Cdiscount qui réceptionnent, stockent, préparent, emballent et
            expédient le stock de tiers. Si vous vendez dans l'Union via un
            tel opérateur, deux choses sont vraies en même temps : vous
            restez concerné en tant que vendeur, et le prestataire a ses
            propres obligations sur l'emballage e-commerce qu'il ajoute.
            L'allocation contractuelle entre vous et la plateforme doit être
            en place avant le 12 août 2026.
          </p>

          <h3 id="erreur-6">
            6. Traiter l'échéance PFAS comme un sujet 2030
          </h3>
          <p>
            La restriction PFAS de l'article 5 s'applique au{" "}
            <strong>12 août 2026</strong>, pas en 2030. Reformuler les
            barrières d'emballage papier au contact alimentaire — boîtes à
            pizza, sachets de pop-corn micro-ondable, papiers beurre,
            barquettes plats préparés — prend généralement 9 à 14 mois entre
            la décision et le produit validé. Les marques qui n'auront pas
            commencé d'ici Q2 2026 ne tiendront pas l'échéance.
          </p>

          <h3 id="erreur-7">
            7. Construire des pilotes de réemploi en silo, pas des systèmes mutualisés
          </h3>
          <p>
            Le taux de réemploi de 40 % des emballages de transport en 2030
            n'est atteignable que via des systèmes partagés et mutualisés.
            Un pilote sur un seul SKU dans un seul entrepôt avec un seul
            distributeur ne peut pas passer à 40 % en quatre ans. Les marques
            qui tiennent l'objectif rejoignent des pools sectoriels,
            harmonisent les spécifications de contenants et contractualisent
            la logistique retour avec leurs distributeurs. L'avantage du
            premier entrant est réel.
          </p>

          <h2 id="plan-90-jours">Le plan à 90 jours</h2>
          <p>
            Le meilleur usage des 90 prochains jours est de poser la base
            réglementaire à laquelle tout le reste s'attache. Nous le menons
            avec nos clients en douze semaines.
          </p>
          <table>
            <thead>
              <tr>
                <th>Semaine</th>
                <th>Chantier</th>
                <th>Livrable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Semaine 1</td>
                <td>Cadrage du portefeuille sous NDA</td>
                <td>Liste maître des SKU avec type d'emballage et composition matérielle.</td>
              </tr>
              <tr>
                <td>Semaine 2</td>
                <td>Carte d'applicabilité article par article</td>
                <td>Heat map : quel SKU est touché par quel article, à quelle date.</td>
              </tr>
              <tr>
                <td>Semaines 3-4</td>
                <td>Pré-notation de recyclabilité (Art. 6)</td>
                <td>Note A / B / C provisoire par SKU avec dossier motivé.</td>
              </tr>
              <tr>
                <td>Semaines 4-5</td>
                <td>Criblage du risque PFAS (Art. 5)</td>
                <td>SKU au contact alimentaire signalés selon usage probable de PFAS ; cadrage des essais.</td>
              </tr>
              <tr>
                <td>Semaines 5-6</td>
                <td>Écart de contenu recyclé (Art. 7)</td>
                <td>% actuel vs cible 2030 par type d'emballage / site / année.</td>
              </tr>
              <tr>
                <td>Semaine 7</td>
                <td>Audit du vide d'air (Art. 24)</td>
                <td>Audit volumétrique des SKU e-commerce face au seuil de 50 %.</td>
              </tr>
              <tr>
                <td>Semaine 8</td>
                <td>Exposition réemploi (Art. 29-33)</td>
                <td>Périmètre des taux de réemploi ; modèle économique préliminaire.</td>
              </tr>
              <tr>
                <td>Semaine 9</td>
                <td>Modèle de contributions REP (Art. 45-47)</td>
                <td>Exposition par pays avec projection d'éco-modulation.</td>
              </tr>
              <tr>
                <td>Semaine 10</td>
                <td>Modèle de Déclaration de conformité</td>
                <td>Modèle de DoC rédigé par Pactum avec index de la documentation technique.</td>
              </tr>
              <tr>
                <td>Semaine 11</td>
                <td>Clauses contractuelles fournisseurs</td>
                <td>Bibliothèque de clauses standard à pousser aux transformateurs et fournisseurs de résines.</td>
              </tr>
              <tr>
                <td>Semaine 12</td>
                <td>Feuille de route à 24 mois chiffrée</td>
                <td>
                  Pack comité de pilotage : livrables, propriétaires, jalons, enveloppe capex / opex.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Le diagnostic PPWR en libre-service est sur{" "}
            <Link href={`/${locale}/resources/ppwr-readiness-assessment`}>
              /{locale}/resources/ppwr-readiness-assessment
            </Link>
            ; le glossaire consolidé des termes définis par le Règlement est
            sur{" "}
            <Link href={`/${locale}/resources/ppwr-glossary`}>
              /{locale}/resources/ppwr-glossary
            </Link>
            ; et la FAQ vivante — actuellement plus de 40 questions — est
            sur{" "}
            <Link href={`/${locale}/resources/ppwr-faq`}>
              /{locale}/resources/ppwr-faq
            </Link>
            .
          </p>

          <TipBox variant="warning" label="Lisez les considérants">
            Quatre-vingts articles plus treize annexes, c'est dense. Les 145
            considérants en tête du Règlement ne sont pas qu'un préambule —
            ils sont la grille de lecture que la Commission, les
            juridictions européennes et les autorités d'application des
            États membres utiliseront pour résoudre les ambiguïtés. En cas
            de doute sur le périmètre ou la méthodologie, lisez les
            considérants avant de tenter de deviner l'article.
          </TipBox>

          <h2 id="faq">Questions fréquentes</h2>

          <h3 id="faq-1">Quand la PPWR s'applique-t-elle ?</h3>
          <p>
            Le Règlement (UE) 2025/40 est entré en vigueur le 11 février 2025.
            Il s'applique de manière générale à compter du 12 août 2026,
            dix-huit mois plus tard. Certaines obligations ont des dates
            d'activation ultérieures — recyclabilité et contenu recyclé au
            1er janvier 2030, étiquetage harmonisé et plafond de vide d'air
            au 12 août 2028, interdiction de la classe C au 1er janvier 2038,
            objectifs 2040 au 1er janvier 2040.
          </p>

          <h3 id="faq-2">La PPWR remplace-t-elle les lois nationales sur l'emballage ?</h3>
          <p>
            Oui — pour les matières qu'elle harmonise (essentiellement
            l'éco-conception, l'étiquetage, le contenu recyclé, la
            recyclabilité, les substances préoccupantes). Elle laisse aux
            États membres compétence sur l'organisation REP, la mise en
            œuvre des consignes et les sanctions.
          </p>

          <h3 id="faq-3">Les produits emballés importés sont-ils dans le périmètre ?</h3>
          <p>
            Oui. L'importateur est l'opérateur économique obligé et il est
            responsable de la Déclaration de conformité, de la documentation
            technique et de la conformité de l'emballage aux articles 5 à 11.
          </p>

          <h3 id="faq-4">Qu'est-ce qu'un prestataire de services d'exécution des commandes au sens de la PPWR ?</h3>
          <p>
            Un opérateur économique qui, dans le cadre d'une activité
            commerciale, propose au moins deux des services suivants :
            entreposage, conditionnement, étiquetage et expédition de
            produits pour le compte d'un tiers. La PPWR ferme le
            contournement e-commerce en en faisant des opérateurs économiques
            obligés.
          </p>

          <h3 id="faq-5">L'emballage papier est-il hors périmètre des règles de contenu recyclé ?</h3>
          <p>
            L'article 7 ne s'applique qu'aux emballages plastiques. Les
            emballages papier, verre, métal et bois sont soumis à la
            recyclabilité (article 6), à la minimisation (article 10), à
            l'étiquetage (article 12), au réemploi le cas échéant et à la
            REP (article 45), mais pas aux quotas de contenu recyclé de
            l'article 7.
          </p>

          <h3 id="faq-6">Que signifie « emballage sensible au contact » ?</h3>
          <p>
            Il est défini à l'article 3 comme un emballage destiné à des
            produits couverts par le Règlement (CE) 1935/2004 (contact
            alimentaire), la directive 2001/83/CE (médicaments à usage
            humain), le Règlement (UE) 2017/745 (dispositifs médicaux), le
            Règlement (UE) 2017/746 (dispositifs médicaux de diagnostic
            in vitro) et autres usages sensibles au contact analogues. Les
            seuils de contenu recyclé pour les emballages sensibles au
            contact sont plus bas que pour les emballages non sensibles.
          </p>

          <h3 id="faq-7">Les plastiques biodégradables sont-ils traités différemment ?</h3>
          <p>
            Les plastiques biodégradables et compostables sont traités à
            l'article 9. Ils ne bénéficient pas d'un blanc-seing sur la
            recyclabilité ; les sachets de thé / café, étiquettes adhésives
            sur fruits et légumes, et sacs très légers en plastique doivent
            être compostables industriellement. La plupart des autres
            emballages plastiques compostables sont traités comme des
            emballages plastiques au sens des articles 6 et 7.
          </p>

          <h3 id="faq-8">Comment le pourcentage de contenu recyclé est-il calculé ?</h3>
          <p>
            L'article 7(8) précise que le pourcentage est calculé en
            moyenne par type d'emballage, par site de production, par
            année. La Commission doit adopter un acte d'exécution sur la
            méthodologie de calcul. L'attribution par bilan massique est
            acceptable lorsqu'elle est étayée par une certification de
            chaîne de traçabilité.
          </p>

          <h3 id="faq-9">Que se passe-t-il si mon emballage échoue au seuil classe C ?</h3>
          <p>
            À compter du 1er janvier 2030, il peut encore être placé sur le
            marché mais subira des contributions REP éco-modulées
            punitives. À compter du 1er janvier 2038, un emballage classe C
            ne peut plus être mis sur le marché de l'Union.
          </p>

          <h3 id="faq-10">Quel est le coût de la non-conformité ?</h3>
          <p>
            Trois composantes. D'abord, les amendes administratives
            nationales au titre de l'article 68 — fixées par les États
            membres. Ensuite, les mesures de surveillance du marché au
            titre du Règlement (UE) 2019/1020, y compris retrait et rappel.
            Enfin, le surcoût d'éco-modulation via les contributions REP,
            qui peut être matériel d'une année sur l'autre même sans
            événement de contrôle. Nous modélisons les trois pour nos
            clients pendant l'analyse des écarts.
          </p>

          <p>
            Pour un focus sur l'échéance PFAS du 12 août 2026, voyez{" "}
            <Link href={`/${locale}/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline`}>
              notre briefing PFAS dédié
            </Link>
            . Pour les quatre objectifs de contenu recyclé et le paysage de
            la certification, voyez{" "}
            <Link href={`/${locale}/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap`}>
              la feuille de route contenu recyclé
            </Link>
            . Le texte intégral du Règlement est sur{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>
            ; la page politique d'emballage de la Commission européenne se
            trouve sur{" "}
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
          publishedAt="15 April 2026"
          category={post.category}
          heroImage={post.hero!.src}
          ctaTitle="Turn Regulation (EU) 2025/40 into a costed roadmap"
          ctaDescription="Book a working session with Pactum. We map every SKU against the eight obligations of the PPWR under NDA and return a recyclability grading, recycled-content gap and 24-month action plan within five business days."
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
              <li className="text-foreground">PPWR survival guide</li>
            </ol>
          </nav>

          <ArticleSummary
            items={[
              "Regulation (EU) 2025/40 — the PPWR — entered into force on 11 February 2025 and applies generally from 12 August 2026.",
              "Eight obligation themes bite: PFAS (Art. 5), recyclability (Art. 6), recycled content (Art. 7), minimisation and empty space (Art. 10 / 24), labelling and DPP (Art. 12), reuse and refill (Art. 29-33), Declaration of Conformity (Art. 39) and EPR (Art. 45).",
              "The hardest near-term deadlines: 12 August 2026 (PFAS ban, Annex V single-use bans, HORECA reuse offer) and 12 August 2028 (harmonised labels, 50% empty-space cap).",
              "The 2030 cliff is the recyclability grading, the four recycled-content targets (30% / 10% / 30% / 35%) and the 40% transport-packaging reuse rate.",
              "Enforcement runs through Member State penalties and Regulation (EU) 2019/1020 market surveillance — non-compliant packaging can be withdrawn or recalled.",
            ]}
          />

          <h2 id="tldr">TL;DR</h2>
          <p>
            <strong>Regulation (EU) 2025/40</strong> — the Packaging and Packaging Waste
            Regulation, or PPWR — is the largest single piece of packaging legislation the
            European Union has adopted. It was published in the Official Journal on
            22 January 2025, entered into force on 11 February 2025, and applies generally
            from <strong>12 August 2026</strong>, eighteen months after entry into force.
            It replaces Directive 94/62/EC, amends Regulation (EU) 2019/1020 on market
            surveillance and amends Directive (EU) 2019/904 on single-use plastics. Its
            CELEX number is <strong>32025R0040</strong>. Its full text is on{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>
            . If you place packaging on the EU market — directly, through an importer or
            through a fulfilment service provider — almost every line of the Regulation
            applies to you.
          </p>
          <p>
            This briefing distils the Regulation into eight obligation themes, walks the
            full compliance timeline through 2040, lists the seven operational mistakes
            we already see clients make, and proposes a 90-day action plan to take a
            packaging portfolio from worried to working. It is written for senior
            decision-makers — Director of Packaging, Head of Sustainability, General
            Counsel, Compliance Officer — who do not need another sustainability essay,
            they need the regulation, by article, with the dates that bite.
          </p>

          <h2 id="identity">What is Regulation (EU) 2025/40</h2>
          <p>
            The full title of the Regulation is{" "}
            <em>
              Regulation (EU) 2025/40 of the European Parliament and of the Council of
              19 December 2024 on packaging and packaging waste, amending Regulation
              (EU) 2019/1020 and Directive (EU) 2019/904, and repealing Directive
              94/62/EC
            </em>
            . The published text appears in OJ L of 22 January 2025. Entry into force is
            set at the twentieth day after publication, which falls on{" "}
            <strong>11 February 2025</strong>. Article 78 sets the general date of
            application at <strong>12 August 2026</strong> — eighteen months after
            entry into force — except for the provisions that the Regulation itself
            stages later (recyclability classes from 1 January 2030, recycled content
            targets from 1 January 2030, harmonised labels from 12 August 2028,
            empty-space rules from 12 August 2028, reuse targets from 1 January 2030,
            and so on).
          </p>
          <p>
            The Regulation is a <strong>regulation</strong>, not a directive. That single
            legal fact changes the playing field. A directive — like the 1994 Directive
            94/62/EC it replaces — leaves Member States to transpose the rules into
            national law, with substantial discretion, on their own timeline. A
            regulation is directly applicable in every Member State on the same day.
            That means a brand owner with operations in twenty-seven Member States no
            longer has to compile twenty-seven national requirements; it has one
            European text. The flip side is that Member States retain enforcement,
            penalties (Article 68) and a handful of derogations — particularly on reuse
            (Article 29(7)) and DRS (Article 50) — so the operational picture is still
            national in places.
          </p>
          <p>
            The Regulation is built on Article 114 TFEU (single market) rather than
            Article 192 TFEU (environmental protection). That is a deliberate choice
            and it matters: it means the Regulation harmonises packaging requirements
            to remove internal market frictions, and Member States cannot in principle
            adopt unilaterally stricter national packaging design rules than those laid
            down by the PPWR. Existing national packaging rules — France&apos;s Loi
            AGEC, Germany&apos;s VerpackG, Spain&apos;s RD 1055/2022 — must be aligned
            to the PPWR.
          </p>

          <TipBox variant="info" label="Regulatory identity">
            On first reference in any compliance memo, cite{" "}
            <strong>Regulation (EU) 2025/40</strong> in full, then refer to it as
            &ldquo;the PPWR&rdquo; or &ldquo;the Regulation&rdquo;. Track CELEX{" "}
            <strong>32025R0040</strong> in your regulatory database. Pin{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              the EUR-Lex ELI URL
            </a>{" "}
            in your DMS — it always points at the consolidated, authoritative version.
          </TipBox>

          <h2 id="who-is-in-scope">Who is in scope</h2>
          <p>
            Article 4 of the Regulation defines the obligated economic operators. The
            list is broader than most first-line compliance reviews assume. It captures
            every link in the chain that puts packaging onto the EU market:
          </p>
          <ul>
            <li>
              <strong>Manufacturers of packaging</strong> — converters, mould makers,
              paper-packaging printers, glass producers, can-makers — for the design and
              material composition of the empty packaging.
            </li>
            <li>
              <strong>Suppliers of packaging</strong> — the upstream chemical,
              additive and resin suppliers — for the substances of concern obligations
              (Article 5) including the PFAS restriction.
            </li>
            <li>
              <strong>Importers of packaged products</strong> — any operator that places
              packaging from a third country on the EU market is responsible for the
              same obligations as an EU manufacturer, including drawing up the
              Declaration of Conformity (Article 39).
            </li>
            <li>
              <strong>Distributors</strong> — wholesale and retail — must verify
              conformity markings, refuse non-compliant packaging and keep traceability
              records.
            </li>
            <li>
              <strong>Fulfilment service providers</strong> — Amazon FBA-style operators
              that store, pack and ship goods for third-party sellers — are explicitly
              obligated economic operators under Article 4. This was the European
              legislator&apos;s response to the e-commerce loophole.
            </li>
            <li>
              <strong>Authorised representatives</strong> — non-EU manufacturers may
              appoint an EU-established authorised representative to fulfil Articles
              39, 40 and 41 obligations on their behalf.
            </li>
            <li>
              <strong>Final distributors</strong> selling to the consumer (especially
              relevant for the reuse offer in Articles 29-30 and the refill obligations
              in Article 33).
            </li>
          </ul>
          <p>
            The shorthand most legal teams settle on is: if you{" "}
            <em>place</em> packaging on the EU market, you are in scope. &ldquo;Placing
            on the market&rdquo; is the defined term, and it captures the first making
            available — for sale, hire, or free — of a unit of packaging in the EU. It
            does not require a sale; supplying retailer house-brand stock counts. It
            does not require an EU establishment; non-EU manufacturers selling DTC into
            the EU are in scope and need an authorised representative.
          </p>

          <h2 id="timeline">The timeline at a glance</h2>
          <p>
            Below is the consolidated timeline of binding deadlines we track for our
            clients. It is not exhaustive — the Commission must adopt around{" "}
            <strong>30 delegated and implementing acts</strong> over 2025-2028 that
            will fill in design-for-recycling criteria, recycled-content calculation
            methodology, label specifications and the technical content of the
            Declaration of Conformity. The dates below are in the Regulation itself
            and are not subject to those acts.
          </p>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Article</th>
                <th>Obligation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11 February 2025</td>
                <td>Art. 78</td>
                <td>Entry into force of Regulation (EU) 2025/40.</td>
              </tr>
              <tr>
                <td>12 August 2026</td>
                <td>Art. 5</td>
                <td>
                  PFAS ban in food-contact packaging (25 ppb / 250 ppb / 50 ppm).
                </td>
              </tr>
              <tr>
                <td>12 August 2026</td>
                <td>Art. 25 + Annex V</td>
                <td>
                  Single-use plastic bans: fresh fruit/veg &lt; 1.5 kg, HORECA on-premise,
                  hotel mini-toiletries, condiment sachets, very lightweight bags.
                </td>
              </tr>
              <tr>
                <td>12 August 2026</td>
                <td>Art. 32</td>
                <td>HORECA take-away must offer a reusable container option.</td>
              </tr>
              <tr>
                <td>12 August 2026</td>
                <td>Art. 39</td>
                <td>
                  Declaration of Conformity required before placing packaging on the EU
                  market.
                </td>
              </tr>
              <tr>
                <td>12 August 2028</td>
                <td>Art. 12</td>
                <td>
                  Harmonised material composition labelling on every packaging unit; QR
                  code / DPP rollout begins.
                </td>
              </tr>
              <tr>
                <td>12 August 2028</td>
                <td>Art. 24</td>
                <td>
                  Maximum 50% empty space ratio in grouped, transport and e-commerce
                  packaging.
                </td>
              </tr>
              <tr>
                <td>31 December 2026</td>
                <td>Art. 50</td>
                <td>
                  Member States must reach 80% separate collection of single-use plastic
                  beverage bottles to retain DRS derogation; otherwise DRS becomes
                  mandatory by 2029.
                </td>
              </tr>
              <tr>
                <td>31 December 2029</td>
                <td>Art. 50</td>
                <td>
                  90% separate collection of single-use plastic beverage bottles up to
                  3 L and metal cans.
                </td>
              </tr>
              <tr>
                <td>1 January 2030</td>
                <td>Art. 6</td>
                <td>
                  All packaging recyclable by design; recyclability classes A (≥95%),
                  B (≥80%), C (≥70%) become operative.
                </td>
              </tr>
              <tr>
                <td>1 January 2030</td>
                <td>Art. 7</td>
                <td>
                  Recycled content in plastic packaging: 30% (contact-sensitive PET),
                  10% (other contact-sensitive), 30% (single-use beverage bottles),
                  35% (other plastic packaging).
                </td>
              </tr>
              <tr>
                <td>1 January 2030</td>
                <td>Art. 10 / 24</td>
                <td>
                  Minimisation in weight, volume and number of layers; empty-space
                  ratios consolidated.
                </td>
              </tr>
              <tr>
                <td>1 January 2030</td>
                <td>Art. 29-30</td>
                <td>
                  Reuse rates: transport/grouped packaging 40%; beverages 10%; large
                  household appliance transport packaging 90%; retail refill stations
                  obligation.
                </td>
              </tr>
              <tr>
                <td>1 January 2038</td>
                <td>Art. 6</td>
                <td>Class C packaging banned; only Class A and B may be placed on market.</td>
              </tr>
              <tr>
                <td>1 January 2040</td>
                <td>Art. 7</td>
                <td>
                  Recycled content targets escalate to 50% / 25% / 65% / 65%
                  respectively.
                </td>
              </tr>
              <tr>
                <td>1 January 2040</td>
                <td>Art. 29</td>
                <td>
                  Reuse rates escalate: transport/grouped 70%; beverages 40% (with
                  Member State derogation possible).
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The full timeline including Member State transposition checkpoints is
            maintained at{" "}
            <Link href={`/${locale}/resources/ppwr-timeline`}>
              /{locale}/resources/ppwr-timeline
            </Link>{" "}
            and we update it within 48 hours of each new Commission act.
          </p>

          <h2 id="eight-obligations">The eight obligations that bite</h2>
          <p>
            The PPWR contains eighty articles plus thirteen annexes. For operational
            planning we group the substantive obligations into eight themes. Each is
            built around a specific article (or article cluster), a specific deadline
            and a specific output a brand owner must produce.
          </p>

          <h3 id="obligation-pfas">1. Substances of concern — Article 5 (PFAS)</h3>
          <p>
            From 12 August 2026, food-contact packaging must not contain intentionally
            added per- and polyfluoroalkyl substances (PFAS) at or above three
            thresholds operating concurrently: <strong>25 ppb</strong> for any
            individual PFAS in targeted analysis, <strong>250 ppb</strong> for the sum
            of all targeted PFAS, and <strong>50 ppm</strong> on the total fluorine
            indicator. Article 5 also restricts other substances of concern listed in
            Annex II. The deadline does not move; testing capacity is already
            constrained. We dedicate{" "}
            <Link href={`/${locale}/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline`}>
              an entire briefing
            </Link>{" "}
            to this article and operational route to compliance is on{" "}
            <Link href={`/${locale}/services/pfas-compliance`}>
              /{locale}/services/pfas-compliance
            </Link>
            .
          </p>

          <h3 id="obligation-recyclability">
            2. Recyclability — Article 6 and design-for-recycling criteria
          </h3>
          <p>
            From 1 January 2030, every packaging unit placed on the EU market must be
            designed for recycling. Performance is graded into three classes —{" "}
            <strong>Class A</strong> (≥95% recyclable by weight), <strong>Class B</strong>{" "}
            (≥80%) and <strong>Class C</strong> (≥70%). From 1 January 2038, Class C
            packaging is banned; only Class A and B may remain on the market. The
            design-for-recycling criteria — the actual technical specifications that
            decide which class a packaging falls into — will be adopted by the
            Commission through delegated acts expected by end-2027. Eco-modulation of
            EPR fees is tied directly to the class (Article 47), so a Class C grade
            will translate into materially higher fees from 2030 even before the 2038
            ban. Our methodology is detailed at{" "}
            <Link href={`/${locale}/services/recyclability-assessment`}>
              /{locale}/services/recyclability-assessment
            </Link>
            .
          </p>

          <h3 id="obligation-recycled-content">
            3. Recycled content in plastic packaging — Article 7
          </h3>
          <p>
            From 1 January 2030, plastic packaging must contain a minimum percentage
            of recycled content from post-consumer plastic waste, calculated per
            packaging unit per packaging-type per manufacturing plant per year. The
            four targets are <strong>30%</strong> for contact-sensitive PET packaging,{" "}
            <strong>10%</strong> for contact-sensitive plastics other than PET,{" "}
            <strong>30%</strong> for single-use plastic beverage bottles and{" "}
            <strong>35%</strong> for other plastic packaging. From 1 January 2040 these
            escalate to <strong>50% / 25% / 65% / 65%</strong>. The dedicated briefing
            on the four targets, certification, mass-balance and sourcing realities is{" "}
            <Link href={`/${locale}/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap`}>
              here
            </Link>
            ; the service is{" "}
            <Link href={`/${locale}/services/recycled-content-roadmap`}>
              /{locale}/services/recycled-content-roadmap
            </Link>
            .
          </p>

          <h3 id="obligation-minimisation">
            4. Minimisation and empty space — Articles 10 and 24
          </h3>
          <p>
            Article 10 imposes a packaging minimisation duty: from 1 January 2030,
            packaging must be reduced to the minimum weight, volume and number of
            layers necessary to ensure functionality. Article 24 imposes a maximum{" "}
            <strong>50% empty-space ratio</strong> for grouped, transport and
            e-commerce packaging from 12 August 2028. E-commerce operators with
            oversized boxes for small items are squarely in scope. The empty-space
            calculation is volume-based and the methodology is set out in Annex IV.
            Article 39&apos;s Declaration of Conformity must record the minimisation
            analysis.
          </p>

          <h3 id="obligation-labelling">
            5. Labelling, sorting and the Digital Product Passport — Articles 12-13
          </h3>
          <p>
            From 12 August 2028, every packaging unit must carry a harmonised material
            composition label and a sorting label aligned across Member States. Article
            12 also introduces a digital data carrier — typically a QR code — that
            ramps into the Digital Product Passport (DPP). Recycled content claims may
            only be made if substantiated and cannot include the percentage as a
            marketing claim if the underlying calculation has not been verified. The
            implementing act on label specifications is expected mid-2027.
          </p>

          <h3 id="obligation-reuse">
            6. Reuse, refill and HORECA — Articles 29 to 33
          </h3>
          <p>
            From 1 January 2030, transport and grouped packaging used between operators
            (B2B logistics) must be reused at a <strong>40%</strong> rate, rising to{" "}
            <strong>70%</strong> by 1 January 2040. Beverage packaging — water, soft
            drinks, beer, wine and spirits — must be <strong>10%</strong> reusable
            by 2030 and <strong>40%</strong> by 2040, with Member State derogations
            possible. Large household appliances must reach <strong>90%</strong> reuse
            of transport packaging by 2030. From 12 August 2026, HORECA take-away
            operators must offer a reusable container option to consumers at no extra
            charge or with a clear deposit. Retailers above 400 m² selling food and
            detergents must offer refill from 1 January 2030. The strategy is at{" "}
            <Link href={`/${locale}/services/reuse-targets-strategy`}>
              /{locale}/services/reuse-targets-strategy
            </Link>
            .
          </p>

          <h3 id="obligation-doc">
            7. Declaration of Conformity and technical documentation — Articles 39-40
          </h3>
          <p>
            Before placing packaging on the EU market, the manufacturer (or importer
            when based outside the EU) must draw up a written Declaration of Conformity
            attesting compliance with Articles 5 to 11 and Article 24. The technical
            documentation supporting the DoC must be retained for{" "}
            <strong>10 years</strong> from the last day of placing on the market and
            made available to market surveillance authorities on request. The
            Commission will adopt an implementing act setting the DoC template; until
            then the substantive content is mandatory. Treat the DoC as the
            packaging-equivalent of a CE mark dossier — it is the document an inspector
            asks for first. Our methodology is at{" "}
            <Link href={`/${locale}/services/declaration-of-conformity`}>
              /{locale}/services/declaration-of-conformity
            </Link>
            .
          </p>

          <h3 id="obligation-epr-drs">
            8. Extended Producer Responsibility and DRS — Articles 45 and 50
          </h3>
          <p>
            Article 45 obliges producers — directly or through Producer Responsibility
            Organisations (PROs) — to cover the net costs of separate collection,
            sorting, recycling, treatment, awareness and littering clean-up. Fees must
            be eco-modulated based on recyclability class (A/B/C), recycled content
            and presence of substances of concern (Article 47). Article 50 requires
            Member States to achieve 90% separate collection of single-use plastic
            beverage bottles up to 3 L and metal cans by 31 December 2029. DRS becomes
            mandatory unless 80% collection has been achieved otherwise by 31 December
            2026 with a credible plan for the 90% by 2029. France, Germany and the
            Netherlands run DRS today; Italy and Spain are in scope of the obligation
            and the next 24 months will see substantial DRS rollout.
          </p>

          <TipBox variant="tip" label="The eco-modulation lever">
            Article 47 ties EPR fees to recyclability class and recycled content.
            Internal modelling we run shows that moving a portfolio from average Class
            C / 0% rPET to Class B / 30% rPET reduces fee exposure by 30 to 55% in
            large producer countries like Germany, France and Italy. The recycled
            content roadmap pays for itself before the regulation forces it.
          </TipBox>

          <h2 id="enforcement">Enforcement and penalties (Article 68)</h2>
          <p>
            Article 68 obliges Member States to lay down rules on penalties applicable
            to infringements of the Regulation. The standard EU formulation applies:
            penalties must be <strong>effective, proportionate and dissuasive</strong>.
            Each Member State sets its own penalty regime — France uses Article L541
            of the Code de l&apos;environnement, Germany operates through the
            Verpackungsgesetz amended in 2025, Italy through D.Lgs. 152/2006. The
            Commission has signalled in recital 145 that fines below the level
            producing real deterrence will be subject to peer pressure and possible
            infringement procedures.
          </p>
          <p>
            The other half of the enforcement architecture sits in Regulation (EU)
            2019/1020 on market surveillance, which the PPWR amends. National market
            surveillance authorities now have explicit powers over packaging including
            inspection, sampling, formal information requests, public warnings,
            withdrawal from the market and recall. The penalty for placing
            non-compliant packaging on the market is therefore not merely a fine; it
            is the recall cost. Recalling a season&apos;s e-commerce mailers because
            the empty-space ratio breaches Article 24, or a year&apos;s ready-meal
            trays because the PFAS threshold is breached under Article 5, is
            materially more expensive than the underlying compliance work.
          </p>
          <p>
            A Declaration of Conformity that materially overstates compliance is a
            separate exposure. In several Member States — notably Germany, France and
            the Netherlands — incorrect DoCs trigger criminal liability, not
            administrative fines. General Counsel should treat the DoC as a regulated
            attestation, not a marketing document.
          </p>

          <InlineCTA
            title="Stop translating articles. Start mapping SKUs."
            description="Pactum&apos;s 5-day PPWR Gap Analysis maps every packaging unit against the eight obligations, grades recyclability A/B/C, screens for PFAS, computes the recycled content gap and produces the article-by-article roadmap your steerco needs."
            ctaLabel="Get the article-by-article roadmap"
            ctaHref={`/${locale}/services/ppwr-gap-analysis`}
            imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop"
            variant="dark"
          />

          <h2 id="seven-mistakes">Seven mistakes most brand owners will make</h2>
          <p>
            We have been running PPWR gap analyses since the political agreement in
            March 2024. Mistakes cluster. Here are the seven we see most often, in
            rough order of business cost.
          </p>

          <h3 id="mistake-1">
            1. Assuming the Tier-1 packaging supplier handles the Declaration of
            Conformity
          </h3>
          <p>
            The DoC obligation under Article 39 sits with the manufacturer of the
            packaging or — when the packaging is supplied to the brand owner empty for
            downstream filling — with the brand owner that places the filled packaged
            product on the EU market. Most brand owners assume their carton supplier
            or PET preform supplier writes the DoC. They will not. They write a
            conformity declaration on the empty packaging unit they manufacture; the
            brand owner is the one placing the filled, finished packaged product on
            the market and is responsible for its DoC. Insourcing a template now and
            contractualising the upstream attestations is a board-level decision.
          </p>

          <h3 id="mistake-2">
            2. Missing the 12 August 2028 empty-space deadline
          </h3>
          <p>
            The empty-space ratio under Article 24 applies from{" "}
            <strong>12 August 2028</strong>, not 2030. E-commerce and direct-to-consumer
            operations with multi-size box programmes need to redesign carton ranges,
            retool fulfilment-centre dispatch logic and verify the 50% threshold by
            batch. The work is two-year work, not six-month work.
          </p>

          <h3 id="mistake-3">
            3. Sourcing rPET without certified mass-balance documentation
          </h3>
          <p>
            The Article 7 recycled content obligation is calculated per packaging-type
            per plant per year. The Commission&apos;s pending implementing act will
            specify the calculation method but recital 70 makes clear that mass-balance
            attribution is acceptable when accompanied by certified chain-of-custody
            documentation. ISCC PLUS and RecyClass certifications under{" "}
            <strong>CEN/TS 16137</strong> are the de facto market standard. Spot-buying
            rPET on a paper certificate of recycled origin without certified
            mass-balance traceability will not pass an Article 39 audit and will not
            pass an EPR-fee verification.
          </p>

          <h3 id="mistake-4">
            4. Conflating the recyclability class with the EPR fee modulation
          </h3>
          <p>
            The recyclability classes under Article 6 and the EPR fee modulation under
            Article 47 are linked but distinct. The class is a regulatory grade (A, B
            or C, with C banned from 2038). The fee modulation is the financial
            instrument national PROs use to translate the grade into pricing. Treating
            them as one exercise mislabels the work: the grading work is technical
            (you grade and you cannot legally argue with the result); the fee work is
            national-PRO-by-national-PRO commercial work where reasonable engagement
            can change exposure by a factor of two.
          </p>

          <h3 id="mistake-5">
            5. Ignoring the fulfilment service provider obligations
          </h3>
          <p>
            Article 4 explicitly captures fulfilment service providers — the
            Amazon/Cdiscount-style operators who receive, store, pick, pack and ship
            third-party stock. If you sell into the EU through such an operator, two
            things are true at once: you remain in scope as the seller, and the
            fulfilment service provider has its own obligations on the e-commerce
            packaging it adds. The contractual allocation between you and the platform
            must be in place before 12 August 2026.
          </p>

          <h3 id="mistake-6">
            6. Treating the PFAS deadline as a 2030 problem
          </h3>
          <p>
            The PFAS restriction under Article 5 applies from{" "}
            <strong>12 August 2026</strong>, not 2030. Reformulating barrier coatings
            on paper-based food-contact packaging — pizza boxes, microwave popcorn
            bags, butter wraps, ready-meal trays — typically takes 9 to 14 months from
            decision to validated product. Brands that have not started by Q2 2026
            will not make the deadline.
          </p>

          <h3 id="mistake-7">
            7. Building reuse pilots in a vacuum, not pooled systems
          </h3>
          <p>
            The 40% transport-packaging reuse rate by 2030 is achievable only through
            shared, pooled systems. A pilot run on a single SKU in a single warehouse
            to a single retailer cannot scale to 40% in four years. The brands hitting
            the target are joining sectoral pools, harmonising container specifications
            and contracting back-haul reverse logistics with their retailers. The
            first-mover advantage is real.
          </p>

          <h2 id="action-plan">The 90-day action plan</h2>
          <p>
            The single best use of the next 90 days is to put in place the regulatory
            baseline that everything else attaches to. We run this with clients in
            twelve weeks.
          </p>
          <table>
            <thead>
              <tr>
                <th>Week</th>
                <th>Workstream</th>
                <th>Deliverable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Week 1</td>
                <td>Portfolio scoping under NDA</td>
                <td>SKU master list with packaging type and material composition.</td>
              </tr>
              <tr>
                <td>Week 2</td>
                <td>Article-by-article applicability map</td>
                <td>Heat map: which SKU is hit by which article, by what date.</td>
              </tr>
              <tr>
                <td>Weeks 3-4</td>
                <td>Recyclability pre-grading (Art. 6)</td>
                <td>Provisional A/B/C grade per SKU with reasoned dossier.</td>
              </tr>
              <tr>
                <td>Weeks 4-5</td>
                <td>PFAS risk screening (Art. 5)</td>
                <td>Food-contact SKUs flagged by likely PFAS use; lab tests scoped.</td>
              </tr>
              <tr>
                <td>Weeks 5-6</td>
                <td>Recycled content gap (Art. 7)</td>
                <td>Current % vs 2030 target per packaging-type / plant / year.</td>
              </tr>
              <tr>
                <td>Week 7</td>
                <td>Empty space audit (Art. 24)</td>
                <td>Volume audit of e-commerce SKUs against 50% threshold.</td>
              </tr>
              <tr>
                <td>Week 8</td>
                <td>Reuse exposure (Art. 29-33)</td>
                <td>Where reuse rates apply; preliminary economic model.</td>
              </tr>
              <tr>
                <td>Week 9</td>
                <td>EPR fee model (Art. 45-47)</td>
                <td>Country-level fee exposure with eco-modulation forecast.</td>
              </tr>
              <tr>
                <td>Week 10</td>
                <td>Declaration of Conformity template</td>
                <td>Pactum-drafted DoC template with technical documentation index.</td>
              </tr>
              <tr>
                <td>Week 11</td>
                <td>Supplier contractual clauses</td>
                <td>Standard clause library to push to converters and resin suppliers.</td>
              </tr>
              <tr>
                <td>Week 12</td>
                <td>Costed 24-month roadmap</td>
                <td>
                  Steerco pack: deliverables, owners, milestones, capex / opex envelope.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The PPWR readiness self-assessment is at{" "}
            <Link href={`/${locale}/resources/ppwr-readiness-assessment`}>
              /{locale}/resources/ppwr-readiness-assessment
            </Link>
            ; the consolidated glossary of the Regulation&apos;s defined terms is at{" "}
            <Link href={`/${locale}/resources/ppwr-glossary`}>
              /{locale}/resources/ppwr-glossary
            </Link>
            ; and the running FAQ — currently 40+ questions — is at{" "}
            <Link href={`/${locale}/resources/ppwr-faq`}>
              /{locale}/resources/ppwr-faq
            </Link>
            .
          </p>

          <TipBox variant="warning" label="Read the recitals">
            Eighty articles plus thirteen annexes is dense. The 145 recitals at the
            front of the Regulation are not just preamble — they are how the
            Commission, the European courts and Member State enforcement bodies will
            interpret ambiguity. When in doubt about scope or methodology, read the
            recitals before guessing at the article.
          </TipBox>

          <h2 id="faq">Frequently asked questions</h2>

          <h3 id="faq-1">When does the PPWR apply?</h3>
          <p>
            Regulation (EU) 2025/40 entered into force on 11 February 2025. It applies
            generally from 12 August 2026, eighteen months later. Specific obligations
            have later trigger dates — recyclability and recycled content from
            1 January 2030, harmonised labels and the empty-space cap from 12 August
            2028, the Class C ban from 1 January 2038, the 2040 escalations from
            1 January 2040.
          </p>

          <h3 id="faq-2">Does the PPWR replace national packaging laws?</h3>
          <p>
            Yes — for the matters it harmonises (essentially packaging design,
            labelling, recycled content, recyclability, substances of concern). It
            leaves Member States competence on EPR organisation, DRS operation and
            penalties.
          </p>

          <h3 id="faq-3">Are imported packaged products in scope?</h3>
          <p>
            Yes. The importer is the obligated economic operator and is responsible
            for the Declaration of Conformity, the technical documentation and the
            conformity of the packaging with Articles 5 to 11.
          </p>

          <h3 id="faq-4">What is a fulfilment service provider under the PPWR?</h3>
          <p>
            An economic operator that, in the course of commercial activity, offers at
            least two of warehousing, packaging, addressing and dispatching of products
            on behalf of a third party. The PPWR closes the e-commerce loophole by
            making them obligated economic operators.
          </p>

          <h3 id="faq-5">Is paper packaging out of scope of the recycled content rules?</h3>
          <p>
            Article 7 applies to plastic packaging only. Paper, glass, metal and wood
            packaging are subject to recyclability (Article 6), minimisation
            (Article 10), labelling (Article 12), reuse where applicable and EPR
            (Article 45) but not the recycled content quotas of Article 7.
          </p>

          <h3 id="faq-6">What does &ldquo;contact-sensitive packaging&rdquo; mean?</h3>
          <p>
            It is defined in Article 3 as packaging intended to be used for products
            covered by Regulation (EC) 1935/2004 (food contact), Directive 2001/83/EC
            (medicinal products for human use), Regulation (EU) 2017/745 (medical
            devices), Regulation (EU) 2017/746 (in-vitro diagnostic medical devices)
            and similar contact-sensitive uses. Recycled content thresholds for
            contact-sensitive packaging are lower than for non-contact-sensitive.
          </p>

          <h3 id="faq-7">Are biodegradable plastics treated differently?</h3>
          <p>
            Biodegradable and compostable plastics are addressed in Article 9. They
            are not given a free pass on recyclability; tea/coffee bags, sticky labels
            on fruit and vegetables and very lightweight plastic carrier bags must be
            industrially compostable. Most other compostable plastic packaging is
            treated like other plastic packaging and falls under Article 6 and 7.
          </p>

          <h3 id="faq-8">How is the recycled content percentage calculated?</h3>
          <p>
            Article 7(8) states the percentage is calculated as an average per
            packaging-type per manufacturing plant per year. The Commission must adopt
            an implementing act on the calculation methodology. Mass balance attribution
            is acceptable when supported by chain-of-custody certification.
          </p>

          <h3 id="faq-9">What happens if my packaging fails the Class C threshold?</h3>
          <p>
            From 1 January 2030 it can still be placed on the market but will attract
            punitive eco-modulated EPR fees. From 1 January 2038, Class C packaging
            may no longer be placed on the EU market.
          </p>

          <h3 id="faq-10">What is the cost of non-compliance?</h3>
          <p>
            Three components. First, national administrative fines under Article 68 —
            set by Member States. Second, market-surveillance enforcement under
            Regulation (EU) 2019/1020 including withdrawal and recall. Third, the
            eco-modulation surcharge through EPR fees, which can be material year-on-year
            even without an enforcement event. We model all three for clients during
            the gap analysis.
          </p>

          <p>
            For a deeper dive on the August 2026 PFAS deadline, see{" "}
            <Link href={`/${locale}/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline`}>
              our dedicated PFAS briefing
            </Link>
            . For the four recycled content targets and the certification landscape,
            see{" "}
            <Link href={`/${locale}/blog/recycled-content-targets-2030-2040-plastic-packaging-roadmap`}>
              the recycled content roadmap
            </Link>
            . The full text of the Regulation is on{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
              target="_blank"
              rel="noreferrer noopener"
            >
              EUR-Lex
            </a>
            ; the European Commission&apos;s packaging policy page sits at{" "}
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
