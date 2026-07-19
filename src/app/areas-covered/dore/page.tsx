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
  title: "Kitchen Wrapping Dore | S17 Kitchen Wrap Quotes",
  description:
    "Kitchen wrapping in Dore, S17. Door, cupboard and worktop wraps for homes around Dore village, Savage Lane, Dore Moor and Dore and Totley station.",
  path: "/areas-covered/dore",
});

const pagePath = "/areas-covered/dore";

const pageImages = [
  {
    src: "/images/after/kitchen-wrap-sheffield-completed-03.jpeg",
    alt: "Completed kitchen wrap suitable for a Dore S17 home",
    caption: "A full wrap can refresh a sound kitchen without changing the room",
  },
  {
    src: "/images/after/marble-worktop-wrap-sheffield-01.jpeg",
    alt: "Light marble-effect worktop wrap for a south-west Sheffield kitchen",
    caption: "Light stone finishes work well in many Dore kitchens",
  },
  {
    src: "/images/finishes/kitchen-wrap-finish-swatches-sheffield-01.jpeg",
    alt: "Kitchen wrap finish samples for Dore homeowners",
    caption: "Samples help you judge colour against your own light and units",
  },
] as const;

const surveyChecks = [
  {
    title: "Door condition",
    body: "We check edges, hinges, old paint layers and any swelling before saying a wrap is suitable. Dore homes can have older joinery, so this step matters.",
  },
  {
    title: "Worktop joins",
    body: "Sink cut-outs, upstands and corners need a proper look. A neat worktop wrap depends on preparation, not just picking a smart marble finish.",
  },
  {
    title: "Finish in natural light",
    body: "Kitchens around the Peak edge can be bright, shaded or garden-facing. We would rather show samples in the room than guess from a screen.",
  },
] as const;

const localAreas = [
  "Dore village and High Street",
  "Savage Lane and the Old School area",
  "Christ Church and Townhead",
  "Dore Moor and Hathersage Road side",
  "Dore and Totley station near Abbeydale Road South",
  "Totley, Bradway and nearby S17 streets",
] as const;

const faqs = [
  {
    question: "Do you cover all of Dore and S17?",
    answer:
      "Yes. We cover Dore village, Dore Moor, roads around Savage Lane and Townhead, the Dore and Totley station side, plus nearby Totley, Bradway and other S17 postcodes. If you are just outside the area, send your postcode and we will confirm.",
  },
  {
    question: "Is kitchen wrapping suitable for older Dore properties?",
    answer:
      "Often it is, but we check first. Older doors, handmade panels, previous paintwork and uneven frames all affect the result. If the kitchen is not a good candidate for wrapping, we will say so before you spend anything.",
  },
  {
    question: "Can you wrap worktops as well as doors in a Dore kitchen?",
    answer:
      "Yes. We can wrap doors, drawers, end panels and suitable worktops. Many Dore homeowners ask about lighter stone or marble-effect worktop finishes because they brighten the room without replacing heavy surfaces.",
  },
  {
    question: "How long does a Dore kitchen wrap usually take?",
    answer:
      "Most Sheffield kitchen wraps take 2-3 days once the finish is chosen and materials are ready. Larger rooms, extra panels or door and worktop projects can take longer, but we confirm that clearly after the survey.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Dore",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Dore and nearby S17 homes in south-west Sheffield.",
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
      name: "Dore",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S17",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Dore Moor" },
    { "@type": "Place", name: "Totley" },
    { "@type": "Place", name: "Bradway" },
    { "@type": "Place", name: "Abbeydale Road South" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function DoreKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Dore", path: pagePath },
          ]),
          faqSchema(faqs),
          serviceJsonLd,
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Dore kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Dore
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your Dore kitchen is solid but starting to feel dated, wrapping
              can give it a new finish without turning the house upside down.
              We wrap kitchen doors, drawer fronts, end panels and suitable
              worktops across S17, from the village and Savage Lane through to
              Dore Moor, Totley and the Dore and Totley station side.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65">
              This is not about forcing a quick cover-up onto every kitchen. Dore
              has plenty of older homes, carefully kept rooms and kitchens where
              the details matter. We check the condition first, show proper
              finish options, then give you a straight quote.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Dore Quote"
                showCall
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src={pageImages[0].src}
                alt={pageImages[0].alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              {pageImages[0].caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow">Why Dore homeowners ask</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A careful refresh for kitchens that are too good to rip out
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Dore has a different feel from many parts of Sheffield. Around
                the village green, Christ Church, the Old School on Savage Lane
                and the lanes heading towards Dore Moor, plenty of homes have
                character and settled layouts. The kitchen may not need a new
                footprint. It may just need the tired cream, old gloss or dark
                worktop replacing with a finish that suits the rest of the house.
              </p>
              <p>
                Kitchen wrapping sits in that useful middle ground. It is more
                than painting the doors, but far less disruptive than ordering a
                full replacement. We prepare the existing surfaces, wrap the
                agreed doors, drawers, panels and worktops, then leave the room
                usable again in days rather than weeks.
              </p>
              <p>
                If you are still comparing options, start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or browse the{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>{" "}
                before you ask for a quote.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {pageImages.slice(1).map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-3xl bg-mist/50">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow">Survey first</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What we check before quoting a Dore kitchen
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good wrap starts before the vinyl comes out. We would rather
              spend time checking the kitchen properly than promise a finish that
              will not last. These are the practical details we look at during a
              Dore survey.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "dore_survey_section" }}
              className="mt-6 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} to talk it through
            </TrackedLink>
          </div>

          <div className="grid gap-4">
            {surveyChecks.map((check) => (
              <article key={check.title} className="rounded-3xl bg-linen p-7">
                <h3 className="font-heading text-2xl font-medium">
                  {check.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {check.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Local coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Around Dore, Dore Moor and S17
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              Whether you are close to the village shops, near the listed Old
              School and war memorial at Savage Lane, up towards Dore Moor, or
              nearer Dore and Totley station on Abbeydale Road South, the process
              is simple: photos first if helpful, then a free survey and a clear
              written quote.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              Parking and access are usually easier than a full refit because we
              are not bringing in skips, carcasses and heavy worktops. We still
              plan it properly, especially on narrower village roads or shared
              drives.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {localAreas.map((area) => (
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

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Dore questions</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl bg-linen open:bg-linen/80"
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
          <p className="eyebrow text-linen/60">Straight answer first</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want to know if your Dore kitchen is worth wrapping?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos or book a free local survey. We will tell you whether
            wrapping is suitable, what finish options make sense, and what the
            job is likely to cost before you commit.
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
            Prefer a form? Use the main{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and include your Dore or S17 postcode.
          </p>
        </div>
      </section>
    </>
  );
}
