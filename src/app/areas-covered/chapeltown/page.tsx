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
  title: "Kitchen Wrapping Chapeltown | S35 Kitchen Wrap Quotes",
  description:
    "Kitchen wrapping in Chapeltown, S35. Door, cupboard and worktop wraps for homes near Chapeltown Park, Lane End, High Green and Burncross.",
  path: "/areas-covered/chapeltown",
});

const pagePath = "/areas-covered/chapeltown";

const wrapOptions = [
  {
    title: "Door and drawer wraps",
    body: "Good for kitchens where the layout still works but the colour, gloss or old wood effect makes the room feel dated.",
  },
  {
    title: "Worktop wrapping",
    body: "Useful when the worktop is sound but marked, dark, or out of step with newer flooring and wall colours.",
  },
  {
    title: "Full kitchen refresh",
    body: "Doors, visible panels and worktops wrapped together, planned around your access, parking and family routine.",
  },
];

const localPlanningNotes = [
  "S35 homes around Chapeltown town centre, the railway station and Chapeltown Park",
  "Older properties near Lane End, Burncross Road and the former St John's church buildings",
  "Family kitchens towards High Green, Burncross, Thorncliffe and Ecclesfield",
  "Access planning for homes near the A6135, A629 and the M1 commuter routes",
];

const nearbyAreas = [
  "Chapeltown",
  "High Green",
  "Burncross",
  "Thorncliffe",
  "Ecclesfield",
  "Grenoside",
];

const pageImages = [
  {
    src: "/images/after/navy-blue-kitchen-door-wrap-sheffield-01.jpeg",
    alt: "Navy kitchen door wrap suitable for a Chapeltown S35 home",
    caption: "Door wraps can lift a solid kitchen without changing the layout",
  },
  {
    src: "/images/in-progress/kitchen-wrapping-in-progress-sheffield-01.jpeg",
    alt: "Kitchen wrapping preparation in progress for a Sheffield kitchen",
    caption: "Careful prep keeps edges clean and tidy",
  },
  {
    src: "/images/after/marble-worktop-wrap-sheffield-02.jpeg",
    alt: "Marble-effect worktop wrap for a north Sheffield kitchen",
    caption: "A lighter worktop finish can make smaller rooms feel brighter",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Chapeltown and the whole S35 area?",
    answer:
      "Yes. We cover Chapeltown, High Green, Burncross, Thorncliffe, Ecclesfield, Grenoside and nearby north Sheffield postcodes. If you are on the Barnsley side or just outside S35, send your postcode and we will confirm before booking a survey.",
  },
  {
    question: "Is wrapping sensible for older Chapeltown kitchens?",
    answer:
      "Often, yes, but we check first. Older homes around Lane End and Burncross Road can have uneven walls, older carcasses or previous DIY repairs. If the doors, panels or worktops are not sound enough for a lasting wrap, we will tell you before quoting.",
  },
  {
    question: "Can you work around Chapeltown commuter routines?",
    answer:
      "Usually. Chapeltown sits between Sheffield and Barnsley, with the station, A6135 and M1 routes all shaping people's days. We can arrange surveys and fitting plans around practical access, parking and school-run timing where possible.",
  },
  {
    question: "How much does a kitchen wrap cost in Chapeltown?",
    answer:
      "Most full kitchen wraps in Sheffield start from around £1,250, with smaller door-only or worktop-only jobs costing less. Your Chapeltown quote depends on door count, worktop length, finish choice and the current condition of the kitchen.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Chapeltown",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Chapeltown and nearby S35 homes in north Sheffield.",
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
      name: "Chapeltown",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S35",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "High Green" },
    { "@type": "Place", name: "Burncross" },
    { "@type": "Place", name: "Thorncliffe" },
    { "@type": "Place", name: "Ecclesfield" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function ChapeltownKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Chapeltown", path: pagePath },
          ]),
          faqSchema(faqs),
          serviceJsonLd,
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Chapeltown kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Chapeltown
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your Chapeltown kitchen is solid but tired, wrapping can change
              the doors, drawer fronts, panels and worktops without ripping the
              whole room out. We cover S35 homes around Chapeltown Park, the
              railway station, Lane End, High Green, Burncross, Thorncliffe and
              the routes back towards Ecclesfield.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65">
              The aim is simple: keep the kitchen that works, change the finish
              you are fed up with, and avoid weeks of mess in a busy family home.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Chapeltown Quote"
                showCall
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </div>

          <aside className="rounded-[2rem] bg-linen p-6 shadow-sm">
            <p className="eyebrow">Straight answer first</p>
            <p className="mt-4 font-heading text-3xl leading-tight">
              Send photos before you spend money on a full refit.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              We can often spot from photos whether your doors are worth
              wrapping, whether worktop joins need a closer look, and whether a
              survey is the sensible next step.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "chapeltown_hero_panel" }}
              className="mt-6 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay}
            </TrackedLink>
          </aside>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Why it suits Chapeltown</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A practical refresh for a practical north Sheffield area
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Chapeltown is not a city-centre patch, and it is not a quiet
                Peak-edge village either. It is a working north Sheffield area
                with commuter links, family houses, older buildings around Lane
                End and Burncross Road, and busy routes like the A6135 and A629
                running through it. A kitchen job here needs to be tidy, planned
                and realistic.
              </p>
              <p>
                That is where wrapping helps. If the carcasses are still firm and
                the doors close properly, you may not need new units at all. A
                fresh vinyl finish can move a kitchen away from yellowing gloss,
                dark wood effect or marked laminate, while keeping the same
                layout, plumbing and appliances.
              </p>
              <p>
                If you are comparing options, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield pricing guide
                </Link>
                , or look at nearby{" "}
                <Link
                  href="/areas-covered/ecclesfield"
                  className="font-medium text-moss link-underline"
                >
                  Ecclesfield kitchen wrapping
                </Link>{" "}
                if you are just down the corridor.
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
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="eyebrow">Local details we plan around</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Your quote should match the kitchen, not just the postcode
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A small kitchen near the station is a different job from a larger
              family kitchen towards High Green. Some homes have easy parking
              and simple door runs. Others need more careful planning around
              tight access, older units, awkward worktop joins or previous
              repairs.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              We look before we price. That keeps the quote fair and avoids the
              usual problem with online estimates: they sound neat until someone
              sees the actual kitchen.
            </p>
          </div>

          <div className="space-y-3">
            {localPlanningNotes.map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-ink/8 bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">What can change</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Pick the level of wrap that actually solves the problem
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              You do not always need the full works. Sometimes the doors are the
              issue. Sometimes the worktop is dragging everything down. Sometimes
              the room needs both doing together so it feels properly finished.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {wrapOptions.map((option) => (
              <article key={option.title} className="rounded-3xl bg-mist/50 p-7">
                <h3 className="font-heading text-2xl font-medium">{option.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {option.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">S35 coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Chapeltown and nearby areas
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/65">
              We are local to Sheffield, not a national lead form. Chapeltown is
              a normal service area for surveys, samples and installs, whether
              you are near Chapeltown Park and its war memorial, close to the
              station, or further out towards the edge of north Sheffield.
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
          <p className="eyebrow">Chapeltown questions</p>
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
          <p className="eyebrow text-linen/60">Free local quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want a straight answer on your Chapeltown kitchen?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos or book a free survey. We will tell you what can be
            wrapped, what may need repair first, and whether replacing would be
            the more sensible route.
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
            Prefer a form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and include your Chapeltown or S35 postcode.
          </p>
        </div>
      </section>
    </>
  );
}
