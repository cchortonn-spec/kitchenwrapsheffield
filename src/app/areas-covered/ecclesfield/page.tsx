import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Ecclesfield | S35 Kitchen Wrap Quotes",
  description:
    "Kitchen wrapping in Ecclesfield, S35. Door, cupboard and worktop wraps for homes around St Mary's, Ecclesfield Park, Chapeltown and High Green.",
  path: "/areas-covered/ecclesfield",
});

const pagePath = "/areas-covered/ecclesfield";

const localChecks = [
  "Solid doors or drawer fronts that look dated but still close properly",
  "Laminate worktops that are marked, dark, or out of step with the rest of the room",
  "Rental or family kitchens where a full rip-out would cause too much disruption",
  "Homes where parking, access, or school-run timing needs planning before we start",
];

const nearbyAreas = [
  "Ecclesfield village",
  "Chapeltown",
  "High Green",
  "Burncross",
  "Grenoside",
  "Thorncliffe",
];

const processSteps = [
  {
    title: "Send a few photos",
    body: "A quick set of photos helps us spot door style, worktop joins, end panels, and any repairs that need discussing before a survey.",
  },
  {
    title: "Free local survey",
    body: "We check the kitchen in person, talk through finishes, and tell you straight if wrapping is not the sensible option.",
  },
  {
    title: "Wrap in days, not weeks",
    body: "Most Ecclesfield kitchen wraps are completed in 2-3 days, with doors removed where needed and the rest protected while we work.",
  },
];

const faqs = [
  {
    question: "Do you cover the whole Ecclesfield S35 area?",
    answer:
      "Yes. We cover Ecclesfield village and nearby north Sheffield areas including Chapeltown, High Green, Burncross, Grenoside, Thorncliffe and the A61 corridor. If you are just outside S35, send your postcode and we will confirm.",
  },
  {
    question: "Can you survey an Ecclesfield kitchen after work?",
    answer:
      "Usually, yes. Many Ecclesfield homeowners commute into Sheffield, Barnsley or Rotherham, so we try to keep survey slots practical. Tell us your usual availability when you enquire.",
  },
  {
    question: "Is wrapping suitable for older Ecclesfield homes?",
    answer:
      "Often it is, as long as the units are sound. Older homes can have uneven walls, older carcasses or previous DIY repairs, so we check condition carefully before promising a finish.",
  },
  {
    question: "How much does kitchen wrapping cost in Ecclesfield?",
    answer:
      "As a guide, a full kitchen wrap in Sheffield typically starts from around £1,250, with door-only and worktop-only jobs costing less. Your exact Ecclesfield price depends on the number of doors, worktop length, finish and current condition.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Ecclesfield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard and worktop vinyl wrapping for Ecclesfield and nearby S35 homes in north Sheffield.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Ecclesfield",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S35",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Chapeltown" },
    { "@type": "Place", name: "High Green" },
    { "@type": "Place", name: "Burncross" },
    { "@type": "Place", name: "Grenoside" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: "/images/after/powder-blue-kitchen-cabinet-wrap-sheffield-01.jpeg",
    alt: "Powder blue kitchen cabinet wrap suitable for Ecclesfield homes",
    caption: "Fresh colour without replacing the units",
  },
  {
    src: "/images/in-progress/kitchen-wrapping-in-progress-sheffield-01.jpeg",
    alt: "Kitchen wrapping in progress with doors prepared for vinyl fitting",
    caption: "Preparation matters more than speed",
  },
  {
    src: "/images/after/marble-worktop-wrap-sheffield-02.jpeg",
    alt: "Marble-effect worktop wrap for a Sheffield kitchen",
    caption: "Worktop wraps can change the whole room",
  },
] as const;

export default function EcclesfieldKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Ecclesfield", path: pagePath },
          ]),
          faqSchema(faqs),
          serviceJsonLd,
        ]}
      />

      <section className="bg-mist/40 section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Ecclesfield kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Ecclesfield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your Ecclesfield kitchen still works but looks tired, wrapping
              can give it a clean new finish without booking a full rip-out.
              We cover homes across S35, from the village around St Mary&apos;s
              Church and Ecclesfield Park through to Chapeltown, High Green,
              Burncross, Grenoside, and Thorncliffe.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaButtons
                quoteLabel="Get an Ecclesfield Quote"
                showCall
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </div>

          <div className="rounded-[2rem] bg-linen p-6 shadow-sm">
            <p className="eyebrow">Fast local help</p>
            <p className="mt-4 font-heading text-3xl leading-tight">
              Send photos today. Get honest advice before you spend.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              We will tell you whether your doors, worktops and end panels are
              good candidates for wrapping. No hard sell, and no pretending a
              damaged kitchen will wrap well if it will not.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "ecclesfield_hero_panel" }}
              className="mt-6 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay}
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Why Ecclesfield homeowners ask</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A new-look kitchen without a month of mess
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Ecclesfield has a real mix of homes: older stone properties
                near the village centre, family houses off the Chapeltown
                corridor, and newer layouts around north Sheffield estates.
                The kitchen problems are usually similar though. The carcasses
                are sound, but the colour dates the room. The worktop is dark
                or worn. The doors still fit, but the finish has had enough.
              </p>
              <p>
                Wrapping is for that middle ground. You do not need a skip on
                the drive, weeks of dust, or a new kitchen loan. We prepare the
                surfaces properly, wrap the agreed doors, drawers, panels and
                worktops, then leave you with a kitchen that feels changed
                without changing the layout you already know works.
              </p>
              <p>
                If you are comparing options, start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>{" "}
                and{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield pricing guide
                </Link>
                . They explain the difference between door wrapping, worktop
                wrapping and a full kitchen wrap before you ask for a quote.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pageImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-3xl bg-mist/50">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-ink/65">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Good fit or not?</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              What we check before quoting
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Ecclesfield kitchens can vary a lot, especially around older
              properties near Church Street, The Priory and the village centre.
              Before we quote, we look at the practical bits that decide
              whether a wrap will last.
            </p>
          </div>

          <ul className="space-y-3">
            {localChecks.map((check) => (
              <li
                key={check}
                className="rounded-2xl border border-ink/8 bg-linen/70 px-5 py-4 text-sm leading-relaxed text-ink/75"
              >
                {check}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works locally</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Simple survey, careful prep, tidy finish
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Whether you are near Ecclesfield Park, heading up towards High
              Green, or tucked between Burncross and Grenoside, the process is
              the same: clear advice first, then a tidy install planned around
              your home.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl bg-mist/50 p-7">
                <p className="font-heading text-4xl text-moss/30">0{index + 1}</p>
                <h3 className="mt-4 font-heading text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">North Sheffield coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Around Ecclesfield and S35
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/65">
              We are not a national lead site pretending to know every road.
              We cover Sheffield and South Yorkshire from a local base, so
              Ecclesfield is a normal service area for surveys and installs.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {nearbyAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-ink/8 bg-linen px-5 py-4 text-sm font-medium text-ink/75"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Ecclesfield questions</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl bg-mist/50 open:bg-mist/80"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-heading text-xl font-medium">
                  {faq.question}
                </summary>
                <p className="border-t border-ink/8 px-6 py-5 text-sm leading-relaxed text-ink/65">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-moss text-linen">
        <div className="container-site section-padding text-center">
          <p className="eyebrow text-linen/60">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want a straight answer on your Ecclesfield kitchen?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos or book a free survey. We will talk through finishes,
            likely cost, and whether wrapping is the right route before you
            commit to anything.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Ask for a Free Survey"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            You can also use the main{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact form
            </Link>{" "}
            and include your Ecclesfield postcode.
          </p>
        </div>
      </section>
    </>
  );
}
