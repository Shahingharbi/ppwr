import type { Metadata } from "next";

import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Page not found | Pactum",
  description:
    "The page you requested is not available. Return to Pactum, the EU PPWR advisory, or consult our Regulation (EU) 2025/40 FAQ.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-background px-6 py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span
          className="inline-flex items-center rounded-full border border-[#d1fae5] bg-[#d1fae5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#065f46]"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          Error 404
        </span>
        <h1
          className="mt-6 text-4xl text-[#0f1a16] sm:text-5xl"
          style={{ fontFamily: "var(--font-ginto-nord)" }}
        >
          Page not found.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-[#0f1a16]/80 sm:text-lg">
          The page you requested is not part of the Pactum advisory. The link may be
          out of date, or the resource has been re-titled while we kept pace with
          Regulation (EU) 2025/40. Return to the home page, or pick up where you left
          off in our PPWR FAQ.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton href="/" variant="primary">
            Back to home
          </CTAButton>
          <CTAButton href="/resources/ppwr-faq" variant="ghost">
            Read the PPWR FAQ
          </CTAButton>
        </div>
        <p className="mt-10 text-sm text-[#0f1a16]/60">
          Need a working session?{" "}
          <a
            href="/contact"
            className="font-semibold text-[#10b981] underline-offset-4 hover:underline"
          >
            Contact the advisory team
          </a>
          .
        </p>
      </div>
    </section>
  );
}
