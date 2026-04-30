import type { Metadata } from "next";
import { Mail, MessageSquare, Clock, MapPin, Building2 } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FAQ } from "@/components/shared/FAQ";
import { ContactForm } from "@/components/pages/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Pactum — book a PPWR working session",
  description:
    "Book a 30-minute PPWR working session with a Pactum advisor. EU-wide team, Brussels HQ, response within one business day. NDA on request.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Pactum — book a PPWR working session",
    description:
      "Book a 30-minute working session with a Pactum advisor on Regulation (EU) 2025/40.",
    url: "https://pactum-advisory.eu/contact",
    type: "website",
  },
};

const NEXT_STEPS = [
  {
    n: "1",
    title: "Acknowledgement",
    body: "We reply within one business day with a mutual NDA template (or sign yours) and propose three slots.",
  },
  {
    n: "2",
    title: "30-minute working session",
    body: "We map your packaging perimeter, applicable articles and the realistic shape of a five-day gap analysis.",
  },
  {
    n: "3",
    title: "Statement of work",
    body: "Within 48 hours, a fixed-scope, fixed-price SOW lands in your inbox. No procurement theatre.",
  },
];

const FAQS = [
  {
    question: "What does an engagement cost?",
    answer:
      "The five-day PPWR gap analysis is a fixed-scope, fixed-price product. Pricing scales with portfolio size (number of SKUs, number of EU markets) and we share an indicative range during the first call. Larger transformation programmes are time-and-materials with a capped envelope.",
  },
  {
    question: "How long is a typical engagement?",
    answer:
      "The standard entry product is five business days from kick-off to roadmap handover. Article-specific deep-dives — Article 6 recyclability grading or Article 7 recycled-content sourcing — run two to four weeks. Quarterly retainers cover delegated and implementing acts watch.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. NDA-first is one of our four operating values. We work under mutual non-disclosure from the first 30-minute call. We can sign your NDA template or share ours; either is in EU jurisdiction with EU-region data hosting.",
  },
  {
    question: "Remote or onsite?",
    answer:
      "Default delivery is remote with two onsite working sessions on request — typically the kick-off and the steering committee read-out. We do not bill for travel within the EU. Onsite weeks are available for transformation programmes.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Contact
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-3xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            Book a working session.
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            Thirty minutes with a Pactum advisor. We map your packaging perimeter against Regulation
            (EU) 2025/40, identify the binding deadlines that apply to you, and scope a costed
            roadmap.
          </p>
        </div>
      </section>

      {/* Two-column layout: form + side info */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
          <div className="relative">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-[#f5f7f4] p-6 md:p-8">
              <h2
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Other ways to reach us
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#10b981]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:advisory@pactum-advisory.eu"
                      className="text-sm text-[#10b981] underline-offset-2 hover:underline"
                    >
                      advisory@pactum-advisory.eu
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#10b981]">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/company/pactum-advisory"
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-[#10b981] underline-offset-2 hover:underline"
                    >
                      Pactum Advisory · DM the firm
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#10b981]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      Response time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Within one business day, Brussels time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <p
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                What happens next
              </p>
              <ol className="mt-5 space-y-5">
                {NEXT_STEPS.map((s) => (
                  <li key={s.n} className="flex items-start gap-4">
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1a16] text-sm font-bold text-white"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <p
                        className="text-base font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                      >
                        {s.title}
                      </p>
                      <p
                        className="mt-1 text-sm text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "var(--font-maison-neue)" }}
                      >
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p
              className="rounded-2xl border border-dashed border-border bg-[#f5f7f4] p-4 text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              We do not have a sales team. The person on the call is the advisor who will work the
              engagement.
            </p>
          </aside>
        </div>
      </section>

      {/* Office locations */}
      <section className="bg-[#f5f7f4] py-16 md:py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Where we are
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Brussels HQ. Project teams across the EU.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6">
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                <Building2 size={20} />
              </div>
              <h3
                className="mt-5 text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Pactum Advisory · Brussels
              </h3>
              <p
                className="mt-2 text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                Avenue des Arts, 1000 Brussels, Belgium. Two minutes from the European Commission and
                the European Parliament — by design.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                <MapPin size={20} />
              </div>
              <h3
                className="mt-5 text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Project teams across the EU
              </h3>
              <p
                className="mt-2 text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                Germany, France, Netherlands, Italy and Spain. We staff each engagement with at least
                one advisor working in the client&apos;s home jurisdiction so Member State transposition
                under Articles 45, 50 and 68 is covered locally.
              </p>
              <p className="mt-4 text-sm">
                <a
                  href="/about"
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  Read the firm&apos;s methodology
                </a>{" "}
                ·{" "}
                <a
                  href="/resources/ppwr-readiness-assessment"
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  Free readiness check
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={FAQS}
        title="Frequently asked questions about working with Pactum"
      />

      <ContactCTA />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Pactum",
          url: "https://pactum-advisory.eu/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Pactum",
            legalName: "Pactum Advisory",
            email: "advisory@pactum-advisory.eu",
            url: "https://pactum-advisory.eu",
            sameAs: ["https://www.linkedin.com/company/pactum-advisory"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Brussels",
              addressCountry: "BE",
            },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
    </>
  );
}
