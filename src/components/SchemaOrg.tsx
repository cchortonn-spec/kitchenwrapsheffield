type JsonLd = Record<string, unknown>;

type SchemaOrgProps = {
  data: JsonLd | JsonLd[];
};

function toList(data: JsonLd | JsonLd[]): JsonLd[] {
  return (Array.isArray(data) ? data : [data]).filter(
    (item): item is JsonLd =>
      Boolean(item) && typeof item === "object" && !Array.isArray(item)
  );
}

/** Emits one JSON-LD script per object — never a bare array root (breaks Next.js). */
export function SchemaOrg({ data }: SchemaOrgProps) {
  const items = toList(data);

  return (
    <>
      {items.map((item, index) => (
        <script
          key={`${String(item["@type"] ?? "schema")}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Kitchen Wrap Sheffield",
    url: "https://kitchenwrapsheffield.com",
    telephone: "+447848428975",
    email: "hello@kitchenwrapsheffield.com",
    description:
      "Vinyl kitchen wrapping in Sheffield. Transform tired kitchens in 2–3 days at a fraction of replacement cost.",
    areaServed: [
      { "@type": "City", name: "Sheffield" },
      { "@type": "AdministrativeArea", name: "South Yorkshire" },
      "Ecclesfield",
      "Hillsborough",
      "Fulwood",
      "Dore",
      "Crookes",
      "Chapeltown",
      "Mosborough",
      "Handsworth",
      "Stocksbridge",
      "Woodseats",
      "Nether Edge",
      "Totley",
      "Beauchief",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "££",
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://kitchenwrapsheffield.com${item.path}`,
    })),
  };
}

export function faqSchema(
  faqs: readonly { question: string; answer: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(
  services: readonly { title: string; description: string }[]
): JsonLd[] {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Kitchen Wrap Sheffield",
      url: "https://kitchenwrapsheffield.com",
    },
    areaServed: {
      "@type": "City",
      name: "Sheffield",
    },
  }));
}
