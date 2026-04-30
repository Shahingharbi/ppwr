import type { Metadata } from "next";
import { LogosStrip } from "@/components/shared/LogosStrip";
import { Testimonials } from "@/components/shared/Testimonials";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Hero } from "@/components/pages/home/Hero";
import { CountdownStrip } from "@/components/pages/home/CountdownStrip";
import { RegulationAtAGlance } from "@/components/pages/home/RegulationAtAGlance";
import { ServicesGrid } from "@/components/pages/home/ServicesGrid";
import { Methodology } from "@/components/pages/home/Methodology";
import { WhyPactum } from "@/components/pages/home/WhyPactum";
import { SectorsGrid } from "@/components/pages/home/SectorsGrid";
import { InsightsTeaser } from "@/components/pages/home/InsightsTeaser";

export const metadata: Metadata = {
  title: "Pactum | The PPWR Advisory — Regulation (EU) 2025/40",
  description:
    "Pactum turns Regulation (EU) 2025/40 into an audit-ready compliance roadmap. Article-precise advisory on PFAS, recyclability, recycled content, reuse and Declaration of Conformity.",
  alternates: { canonical: "https://pactum-advisory.eu/" },
  openGraph: {
    title: "Pactum | The PPWR Advisory — Regulation (EU) 2025/40",
    description:
      "Article-precise PPWR advisory for FMCG, automotive, e-commerce and pharma groups. 5-day costed roadmap, NDA-first.",
    url: "https://pactum-advisory.eu/",
    siteName: "Pactum",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pactum | The PPWR Advisory",
    description:
      "Audit-ready PPWR roadmaps. Pure-play Regulation (EU) 2025/40 advisory.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogosStrip />
      <CountdownStrip />
      <RegulationAtAGlance />
      <ServicesGrid />
      <Methodology />
      <WhyPactum />
      <SectorsGrid />
      <Testimonials />
      <InsightsTeaser />
      <ContactCTA />
    </>
  );
}
