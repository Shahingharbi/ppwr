import { Clock, Calendar, User } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { TableOfContents } from "@/components/shared/TableOfContents";
import { StickyBlogCTA } from "@/components/shared/StickyBlogCTA";
import { BigBlogCTA } from "@/components/shared/BigBlogCTA";

type Props = {
  title: string;
  description: string;
  author: string;
  readingTime: string;
  publishedAt: string;
  category: string;
  heroImage: string;
  children: React.ReactNode;
  ctaTitle?: string;
  ctaDescription?: string;
};

export function BlogLayout({
  title,
  description,
  author,
  readingTime,
  publishedAt,
  category,
  heroImage,
  children,
  ctaTitle,
  ctaDescription,
}: Props) {
  return (
    <SectionShell>
      <article className="bg-white">
        <header className="relative overflow-hidden bg-gradient-to-b from-[#f5f7f4] to-white pt-14 pb-10 md:pt-20">
          <div className="mx-auto max-w-[860px] px-6">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span
                className="rounded-full bg-[#d1fae5] px-3 py-1 text-[#065f46]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {category}
              </span>
              <span className="text-muted-foreground">PPWR insight · 2026</span>
            </div>
            <h1
              className="mt-6 text-4xl md:text-5xl font-bold leading-[1.08] text-foreground"
              style={{ fontFamily: "var(--font-ginto-nord)" }}
            >
              {title}
            </h1>
            <p
              className="mt-5 text-lg text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {description}
            </p>
            <div
              className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <User size={14} className="text-[#10b981]" />
                {author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-[#10b981]" />
                {publishedAt}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-[#10b981]" />
                {readingTime}
              </span>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[1200px] px-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt=""
              className="h-[320px] md:h-[460px] w-full rounded-[32px] object-cover shadow-2xl"
            />
          </div>
        </header>

        {/* 3-column body: TOC · article · sticky CTA */}
        <div className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)_300px] gap-10 xl:gap-14">
            <div className="hidden lg:block">
              <TableOfContents />
            </div>
            <div
              className="prose-article text-foreground min-w-0"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {children}
            </div>
            <div className="hidden lg:block">
              <StickyBlogCTA />
            </div>
          </div>
        </div>
      </article>

      <BigBlogCTA
        title={ctaTitle ?? "Turn Regulation (EU) 2025/40 into a costed roadmap"}
        description={
          ctaDescription ??
          "Book a working session with Pactum. We scope your packaging portfolio under NDA and return an article-by-article gap analysis, recyclability grading and 24-month action plan within five business days."
        }
      />
    </SectionShell>
  );
}
