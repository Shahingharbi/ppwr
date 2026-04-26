import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  heroImage?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ppwr-2025-survival-guide-for-european-brand-owners",
    title: "PPWR 2025: the survival guide for European brand owners",
    excerpt:
      "Regulation (EU) 2025/40 in plain English — every article that bites, every deadline, the seven mistakes most brand owners are about to make, and a 90-day action plan.",
    category: "Survival guide",
    readingTime: "14 min",
  },
  {
    slug: "pfas-food-contact-packaging-ppwr-august-2026-deadline",
    title: "PFAS in food-contact packaging: the 12 August 2026 deadline",
    excerpt:
      "The exact thresholds (25 ppb / 250 ppb / 50 ppm), the testing methods that pass audit, supplier clauses to insert this quarter, and the substitute materials that actually work.",
    category: "PFAS",
    readingTime: "11 min",
  },
  {
    slug: "recycled-content-targets-2030-2040-plastic-packaging-roadmap",
    title: "Recycled content targets 2030 / 2040: the plastic packaging roadmap",
    excerpt:
      "The four numbers everyone needs to remember, mass-balance vs free attribution, certified rPET supply realities, and a 24-month sourcing roadmap that survives a 2040 cliff.",
    category: "Recycled content",
    readingTime: "13 min",
  },
];

type Props = {
  posts?: BlogPost[];
  title?: string;
  description?: string;
};

export function BlogPreview({
  posts = BLOG_POSTS,
  title = "PPWR research desk",
  description = "Article-precise briefings on Regulation (EU) 2025/40 — written by the team that builds the roadmaps. No fluff, no SEO filler.",
}: Props) {
  return (
    <section id="blog" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span
              className="inline-block rounded-full bg-[#f5f7f4] border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Insights
            </span>
            <h2
              className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {title}
            </h2>
            <p
              className="mt-4 text-base text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {description}
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#10b981] hover:gap-3 transition-all"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            All articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#0f1a16] via-[#10b981]/40 to-[#d1fae5]">
                <span
                  className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {post.category}
                </span>
                <span
                  className="absolute bottom-4 left-4 right-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Regulation (EU) 2025/40
                </span>
              </div>
              <div className="p-6">
                <div
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  <Clock size={12} /> {post.readingTime} read
                </div>
                <h3
                  className="mt-3 text-xl font-bold text-foreground leading-snug group-hover:text-[#10b981] transition-colors"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {post.excerpt}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#10b981] group-hover:gap-2.5 transition-all"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
