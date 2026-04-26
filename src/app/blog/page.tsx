import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail } from "lucide-react";

import { ContactCTA } from "@/components/shared/ContactCTA";
import { SectionShell } from "@/components/shared/SectionShell";
import { posts, blogCategories } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Insights — PPWR research desk",
  description:
    "Long-form regulatory briefings on Regulation (EU) 2025/40 — PPWR survival guide, PFAS in food-contact packaging, recycled content targets for 2030 and 2040. Written by the Pactum research desk.",
  alternates: { canonical: "/blog" },
  keywords: [
    "PPWR insights",
    "Regulation (EU) 2025/40",
    "PFAS food packaging",
    "recycled content PPWR",
    "EU packaging regulation analysis",
  ],
  openGraph: {
    type: "website",
    title: "Insights — PPWR research desk | Pactum",
    description:
      "Long-form regulatory briefings on Regulation (EU) 2025/40. Survival guide, PFAS deadline, recycled content targets.",
    url: `${siteConfig.url}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — PPWR research desk | Pactum",
    description:
      "Long-form regulatory briefings on Regulation (EU) 2025/40 from the Pactum research desk.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Insights",
      item: `${siteConfig.url}/blog`,
    },
  ],
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Pactum — PPWR Insights",
  description:
    "Long-form regulatory briefings on Regulation (EU) 2025/40 from the Pactum research desk.",
  url: `${siteConfig.url}/blog`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.publishedAt,
    dateModified: p.updatedAt ?? p.publishedAt,
    url: `${siteConfig.url}/blog/${p.slug}`,
    author: { "@type": "Organization", name: p.author.name },
  })),
};

const categoryAccent: Record<string, string> = {
  All: "bg-[#0f1a16] text-white border-[#0f1a16]",
  "Survival guide": "bg-white text-[#065f46] border-[#10b981]/40",
  PFAS: "bg-white text-[#065f46] border-[#10b981]/40",
  "Recycled content": "bg-white text-[#065f46] border-[#10b981]/40",
  Methodology: "bg-white text-[#065f46] border-[#10b981]/40",
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f7f4] to-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-semibold">Insights</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span
              className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              PPWR research desk
            </span>
            <h1
              className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] text-foreground"
              style={{ fontFamily: "var(--font-ginto-nord)" }}
            >
              Insights — PPWR research desk.
            </h1>
            <p
              className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Long-form regulatory briefings on Regulation (EU) 2025/40. Article-level
              precision, exact dates, exact thresholds. Written for Directors of
              Packaging, Heads of Sustainability and General Counsel preparing for the
              12 August 2026 application date.
            </p>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-2"
            aria-label="Filter by category"
          >
            {(["All", ...blogCategories] as const).map((c) => (
              <span
                key={c}
                className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${categoryAccent[c]}`}
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#d1fae5] via-white to-[#10b981]/15">
                {post.hero ? (
                  <Image
                    src={post.hero.src}
                    alt={post.hero.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={idx === 0}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-xs font-bold uppercase tracking-[0.18em] text-[#10b981]"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      Pactum · PPWR
                    </span>
                  </div>
                )}
                <span
                  className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#065f46] backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div
                  className="flex items-center gap-3 text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span aria-hidden>·</span>
                  <time dateTime={post.publishedAt}>
                    {dateFormatter.format(new Date(post.publishedAt))}
                  </time>
                </div>
                <h2
                  className="mt-3 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {post.title}
                </h2>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-5">
                  <div
                    className="flex items-center justify-between text-xs"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    <span className="text-muted-foreground">
                      {post.author.name} · {post.author.role}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 font-semibold text-[#10b981] transition-all group-hover:gap-2.5"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <aside className="mt-16 overflow-hidden rounded-3xl border border-border bg-[#0f1a16] p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.16em] text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                PPWR briefing — monthly
              </p>
              <h2
                className="mt-3 text-2xl md:text-3xl font-bold leading-tight text-white"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                The 30 delegated and implementing acts, tracked in one email.
              </h2>
              <p
                className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                One email per month. Adopted acts, draft consultations, Member State
                transposition status. No marketing, no promotion. Written by the same
                desk that produces these briefings.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              <Mail size={14} />
              Subscribe to the briefing
            </Link>
          </div>
        </aside>
      </SectionShell>

      <ContactCTA />
    </>
  );
}
