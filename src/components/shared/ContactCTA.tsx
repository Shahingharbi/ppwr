import { CTAButton } from "./CTAButton";
import { ReassuranceBadges } from "./ReassuranceBadges";

type Props = {
  title?: string;
  description?: string;
  id?: string;
};

export function ContactCTA({
  title = "Get PPWR-ready before August 2026",
  description = "Book a 30-minute working session with a Pactum advisor. We map your packaging portfolio against Regulation (EU) 2025/40 and deliver a costed compliance roadmap within 5 working days.",
  id = "contact",
}: Props) {
  return (
    <section id={id} className="relative overflow-hidden bg-[#10b981] py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-[1080px] px-6 text-center">
        <h2
          className="text-3xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {title}
        </h2>
        <p
          className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-white/90 leading-relaxed"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <CTAButton
            href="/contact"
            variant="secondary"
            className="bg-[#0f1a16] hover:bg-black"
          >
            Book a working session
          </CTAButton>
          <CTAButton
            href="/resources/ppwr-readiness-assessment"
            variant="ghost"
            icon={false}
            className="bg-white text-[#0f1a16] border-white hover:bg-white/90"
          >
            Free readiness assessment
          </CTAButton>
        </div>
        <div className="mt-8 flex justify-center">
          <ReassuranceBadges />
        </div>
      </div>
    </section>
  );
}
