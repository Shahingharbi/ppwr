import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Pactum delivered an article-by-article gap analysis on 412 SKUs in five business days, with Class A/B/C grading and a costed Article 7 recycled-content roadmap. Their NDA-first approach was the deciding factor — none of the Big-4 firms came close on regulatory precision.",
    author: "M. Hartmann",
    role: "Director of Packaging",
    company: "Tier-1 European FMCG group",
    avatar: "",
  },
  {
    quote:
      "The PFAS gap analysis identified seven part numbers above the 25 ppb individual threshold across our interior trim suppliers, with substitution options ranked by cost and lead time. We went into the 12 August 2026 deadline with a defensible Declaration of Conformity technical file.",
    author: "L. Ferrari",
    role: "Head of Sustainability",
    company: "Global automotive Tier-1 supplier",
    avatar: "",
  },
  {
    quote:
      "We needed a 2030 recycled-content roadmap that legal could sign off on, not a sustainability deck. Pactum tied every recommendation to Article 7, the 30% PET threshold and the mass-balance rules. The DoC technical file they outlined is now the template our packaging suppliers must meet.",
    author: "A. Lindqvist",
    role: "General Counsel",
    company: "European beverage group",
    avatar: "",
  },
];

function getInitials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Testimonials() {
  return (
    <section className="bg-[#0f1a16] text-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Selected client engagements
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            What senior packaging, sustainability and legal leaders say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="fill-[#10b981] text-[#10b981]" />
                ))}
              </div>
              <blockquote
                className="mt-4 text-base leading-relaxed text-white/90"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#10b981]/15 text-xs font-semibold text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {getInitials(t.author)}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {t.author}
                  </p>
                  <p className="text-xs text-white/60">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
