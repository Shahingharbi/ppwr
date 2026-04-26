type ServiceSchemaInput = {
  name: string;
  description: string;
  serviceType: string;
  url: string;
};

type FaqSchemaInput = {
  question: string;
  /** Plain-text answer body. Either `answer` or `answerText` may be supplied. */
  answer?: string;
  answerText?: string;
};

/**
 * Inline JSON-LD `<script>` tag.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildServiceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: input.url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "European Union",
    },
    provider: {
      "@type": "Organization",
      name: "Pactum",
      legalName: "Pactum Advisory",
      url: "https://pactum-advisory.eu",
      email: "advisory@pactum-advisory.eu",
      sameAs: [
        "https://www.linkedin.com/company/pactum-advisory",
      ],
    },
  };
}

export function buildFaqSchema(items: FaqSchemaInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answerText ?? it.answer ?? "",
      },
    })),
  };
}
