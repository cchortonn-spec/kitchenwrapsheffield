import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { FINISH_IMAGES, GALLERY_IMAGES, PROCESS_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const pagePath = "/areas-covered/broomhill";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Broomhill Sheffield | S10 Kitchen Wraps",
  description:
    "Kitchen wrapping in Broomhill, Sheffield for S10 period homes, flats and rentals near Glossop Road, the Botanical Gardens, hospitals and university edge.",
  path: pagePath,
});

const broomhillHomes = [
  {
    title: "Period homes with solid but dated kitchens",
    body: "Broomhill's conservation-area character means many homes have older details worth respecting. If the kitchen layout works, wrapping can update the visible doors and worktops without forcing a full refit into a house that already has its own style.",
  },
  {
    title: "Hospital and university-side flats",
    body: "Around Glossop Road, Beech Hill Road and the Royal Hallamshire side, compact flats often need a cleaner finish rather than a bigger building job. A wrap can be planned around tight access, shared entrances and limited parking.",
  },
  {
    title: "Rental kitchens that need to photograph well",
    body: "Broomhill has a busy rental market near the University of Sheffield, teaching hospitals and Crookesmoor. When carcasses are sound, wrapping can lift the kitchen before listing photos, viewings or a new tenancy.",
  },
] as const;

const localReferences = [
  "Broomhill Conservation Area and streets around Taptonville Road",
  "Glossop Road, Newbould Lane and the Broomhill shopping centre",
  "The Mount, King Edward VII School and St Mark's Church",
  "Sheffield Botanical Gardens and the Weston Park edge",
  "Royal Hallamshire Hospital, Children's Hospital and university routes",
  "Nearby Crookes, Fulwood, Broomhall and Crookesmoor homes",
] as const;

const quoteChecks = [
  "Door profiles and older frames, especially if previous owners have painted, filled or repaired them.",
  "Worktop joins, sink areas and kettle positions in compact flat or terrace kitchens.",
  "Parking, loading and shared-access arrangements around Glossop Road, Parkers Road and hospital-side streets.",
  "Whether the finish should feel modern, traditional, warm or understated beside period features.",
  "Signs of peeling foil, swollen MDF or loose laminate that could make wrapping the wrong answer.",
] as const;

const finishRoutes = [
  {
    label: "Soft heritage colours",
    detail:
      "Muted greens, blues and warm neutrals can suit older Broomhill interiors better than high-gloss white.",
  },
  {
    label: "Stone-effect worktops",
    detail:
      "Useful where the doors still work visually but a worn laminate counter makes the whole room feel tired.",
  },
  {
    label: "Calm rental finishes",
    detail:
      "For lets and flats, robust neutral finishes help the room feel clean without making future touchpoints difficult.",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Broomhill and S10?",
    answer:
      "Yes. We cover Broomhill, Glossop Road, Taptonville Road, Newbould Lane, the Botanical Gardens side, the hospital and university edge, plus nearby Crookes, Fulwood, Broomhall and Crookesmoor. Send your postcode if you are on a boundary street and we will confirm.",
  },
  {
    question: "Is kitchen wrapping suitable for Broomhill period homes?",
    answer:
      "Often, yes, provided the doors, panels and worktops are stable. Broomhill has many older homes where a sympathetic finish matters. We can help choose warmer colours or stone-effect worktops that refresh the kitchen without fighting the character of the house.",
  },
  {
    question: "Can you wrap a kitchen in a Broomhill flat or rental?",
    answer:
      "Yes, when access is agreed and the kitchen surfaces are sound. For flats and rentals near the hospitals or university, photos are a good first step because they let us check door count, worktop shape, peeling areas and any shared-access issues before arranging a survey.",
  },
  {
    question: "How much does a Broomhill kitchen wrap cost?",
    answer:
      "Most full Sheffield kitchen wraps start from around 1,250 pounds, with smaller door-only or worktop-only jobs costing less. Broomhill pricing depends on door count, worktop length, finish choice, preparation, parking and whether the job is in a house, flat or shared-access building.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Broomhill, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Broomhill, S10 and nearby west Sheffield homes, flats and rental properties.",
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
      name: "Broomhill",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S10",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Glossop Road" },
    { "@type": "Place", name: "Taptonville Road" },
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Fulwood" },
    { "@type": "Place", name: "Broomhall" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: FINISH_IMAGES[0].src,
    alt: "Kitchen wrap colour samples for a Broomhill Sheffield home",
    caption: "Finish choice matters in older S10 homes.",
  },
  {
    src: GALLERY_IMAGES[3].src,
    alt: "Marble-effect worktop wrap suitable for a Broomhill Sheffield kitchen",
    caption: "A worktop wrap can lift a room without replacing the base units.",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield kitchen",
    caption: "Careful preparation is what makes the finish last.",
  },
] as const;

export default function BroomhillKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Broomhill", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Broomhill kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Broomhill, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Broomhill kitchens sit in a very particular part of Sheffield:
              S10 period houses, hospital-side flats, student rentals, family
              homes near the Botanical Gardens, and streets that move quickly
              between leafy, busy and tightly parked.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              If your cabinets are sound but the colour, worktop or door finish
              lets the room down, wrapping can give the kitchen a calmer, cleaner
              look without pulling out the carcasses. We check the surfaces
              first, then give straight advice on whether a wrap is worth it.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get a Broomhill Quote"
              showCall
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
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
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="eyebrow">Why Broomhill is different</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A useful refresh for character homes, flats and rentals
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Sheffield City Council describes Broomhill Conservation Area as
                sitting about 2km west of the city centre, just north of the
                Botanical Gardens. It is known for 19th-century villas, terraces,
                mature trees, stone boundary walls and listed buildings such as
                The Mount and King Edward VII School.
              </p>
              <p>
                That matters because not every kitchen refresh should look like
                a glossy new-build showroom. In many Broomhill homes, the better
                result is a softer finish that respects the rest of the property
                while still making the room easier to live with, rent or sell.
              </p>
              <p>
                Start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>{" "}
                if you want to compare doors, panels and worktops. For budget
                expectations, see the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {broomhillHomes.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-ink/8 bg-linen/70 p-7"
              >
                <h3 className="font-heading text-2xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={pageImages[1].src}
                alt={pageImages[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              {pageImages[1].caption}
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">Before quoting</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The practical checks behind a Broomhill quote
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Broomhill can be straightforward once the access and surface
              condition are understood. A kitchen near the hospital edge may
              have different parking constraints from a house near Taptonville
              Road or a flat closer to Crookesmoor.
            </p>
            <ul className="mt-8 grid gap-3">
              {quoteChecks.map((check) => (
                <li
                  key={check}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/70 shadow-sm"
                >
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="eyebrow">Local coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Glossop Road, the Botanical Gardens and the S10 edge
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                We cover Broomhill itself and the streets around it, including
                homes between Fulwood Road, Crookes Road, Newbould Lane and the
                Botanical Gardens side. Tell us early if parking, a permit bay
                or a shared entrance will affect the survey.
              </p>
              <p>
                Nearby pages may also help if you are just outside Broomhill:
                see{" "}
                <Link href="/areas-covered/crookes" className="font-medium text-moss link-underline">
                  Crookes kitchen wrapping
                </Link>
                ,{" "}
                <Link href="/areas-covered/fulwood" className="font-medium text-moss link-underline">
                  Fulwood kitchen wrapping
                </Link>{" "}
                or the full{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas covered
                </Link>{" "}
                guide.
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "broomhill_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for Broomhill kitchen wrapping advice
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {localReferences.map((marker) => (
              <div
                key={marker}
                className="rounded-2xl border border-ink/8 bg-mist/50 px-5 py-4 text-sm font-medium text-ink/75"
              >
                {marker}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Finish direction</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Choose a finish that suits the building and the use
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              The right finish for a long-term family kitchen near St Mark&apos;s
              can be different from the right finish for a rental flat near the
              hospitals. We narrow the options after seeing the light, floor,
              worktops and door condition.
            </p>
            <div className="mt-8 grid gap-4">
              {finishRoutes.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-ink/8 bg-linen/70 px-5 py-4"
                >
                  <h3 className="font-heading text-2xl font-medium">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={pageImages[2].src}
                alt={pageImages[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              {pageImages[2].caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Broomhill FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before wrapping a Broomhill kitchen
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
        <div className="container-site section-padding">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow text-linen/60">Free Broomhill quote</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Want a calmer, cleaner kitchen without a Broomhill refit?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send photos of the full kitchen, door edges, worktops and any
                peeling areas. We will explain whether wrapping is suitable,
                what preparation is needed, and what route gives the best value
                for your S10 home or rental.
              </p>
              <div className="mt-8">
                <CtaButtons
                  onDark
                  showCall
                  quoteLabel="Ask for a Free Survey"
                  callLabel={`Call ${SITE.phoneDisplay}`}
                />
              </div>
            </div>

            <div className="rounded-3xl border border-linen/15 bg-linen/8 p-6">
              <p className="font-heading text-2xl font-medium text-linen">
                Helpful photo checklist
              </p>
              <p className="mt-4 text-sm leading-relaxed text-linen/70">
                Use the{" "}
                <Link href="/contact" className="font-medium text-linen link-underline">
                  contact form
                </Link>{" "}
                and include the postcode, access notes, wide kitchen photos,
                close-ups of worn edges, and any worktop damage near the sink or
                hob.
              </p>
              <p className="mt-5 text-sm text-linen/70">
                Call {SITE.phoneDisplay} if you would rather talk through a
                Broomhill kitchen first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
