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

const pagePath = "/areas-covered/sheffield-city-centre";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Sheffield City Centre | S1 & S2 Flats",
  description:
    "Kitchen wrapping in Sheffield City Centre for S1 and S2 flats, rentals and apartments around Kelham Island, West Bar, The Moor, Castlegate and the station.",
  path: pagePath,
});

const cityCentreSituations = [
  {
    title: "Compact flats where the layout already works",
    body: "Many city-centre kitchens are small, open-plan and built into the main living space. If the carcasses are sound, wrapping the doors, panels and worktops can change the room without removing half the flat.",
  },
  {
    title: "Rental refreshes between tenants",
    body: "Landlords around Kelham Island, West Bar, Devonshire Quarter and The Moor often need a kitchen to photograph better without losing weeks to a refit. A wrap can be planned around access, lifts and handover dates.",
  },
  {
    title: "Apartment kitchens with limited access",
    body: "High-rise blocks, converted mills and managed buildings need more planning than a driveway install. We ask about parking, loading bays, lifts, concierge access and working hours before quoting.",
  },
] as const;

const surveyChecks = [
  "Whether the building has lift access, loading rules, concierge arrangements or booked delivery slots.",
  "Door edges, foil lift, heat marks and water damage around the sink, hob and kettle corner.",
  "Worktop joins and breakfast bars in open-plan rooms, especially where the counter is the first thing you see from the sofa.",
  "Whether the kitchen needs a neutral rental finish, a warmer owner-occupier update or a sharper sale-ready look.",
  "How much preparation is needed if previous owners have painted, patched or replaced odd doors.",
] as const;

const localMarkers = [
  "Kelham Island and Neepsend edges",
  "West Bar, St Vincent's Quarter and Shalesmoor",
  "Cathedral Quarter and Castlegate",
  "Devonshire Quarter, Division Street and West Street",
  "The Moor, Heart of the City and Furnival Gate",
  "Sheffield Station, Sheaf Valley and the Cultural Industries Quarter",
] as const;

const finishAdvice = [
  {
    label: "Calm matt doors for open-plan rooms",
    detail:
      "A low-sheen matt finish often works well in flats because the kitchen is visible from the living area and strong gloss can bounce light harshly in compact spaces.",
  },
  {
    label: "Stone-effect worktops for tired counters",
    detail:
      "Older laminate counters can make an otherwise clean apartment kitchen feel dated. We check joins, sink cuts and hob areas before suggesting a worktop wrap.",
  },
  {
    label: "Neutral finishes for letting and resale",
    detail:
      "For rental flats and sale preparation, a simple neutral finish usually beats a bold trend. It helps the room look clean without putting off the next viewer.",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Sheffield City Centre apartments?",
    answer:
      "Yes. We cover S1 and nearby S2 city-centre kitchens, including Kelham Island, West Bar, Castlegate, Cathedral Quarter, Devonshire Quarter, The Moor, the station side and nearby apartment blocks. Send your postcode and building access notes with your photos.",
  },
  {
    question: "Can you work in flats with lifts or managed access?",
    answer:
      "Usually, yes, but it needs planning. We will ask about parking, loading, lift access, concierge rules, waste rules and any restricted working hours before confirming the quote and fitting plan.",
  },
  {
    question: "Is wrapping suitable for rental flats in the city centre?",
    answer:
      "Often it is, especially when the carcasses and layout are sound but the doors or worktops look tired in listing photos. We still check surface condition first because peeling foil, swollen MDF or water damage may need a different fix.",
  },
  {
    question: "How much does a city-centre kitchen wrap cost?",
    answer:
      "Most full Sheffield kitchen wraps start from around 1,250 pounds, with smaller door-only or worktop-only jobs costing less. A city-centre quote depends on door count, worktop length, finish choice, surface condition, access and parking.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Sheffield City Centre",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Sheffield City Centre flats, rentals and apartments.",
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
      name: "Sheffield City Centre",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S1",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Kelham Island" },
    { "@type": "Place", name: "West Bar" },
    { "@type": "Place", name: "Castlegate" },
    { "@type": "Place", name: "Devonshire Quarter" },
    { "@type": "Place", name: "Sheffield Station" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: GALLERY_IMAGES[1].src,
    alt: "Navy kitchen door wrap suitable for a Sheffield City Centre apartment",
    caption: "Door wrapping can lift a compact flat kitchen without changing the layout.",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation for a Sheffield apartment kitchen",
    caption: "Access and preparation matter in apartment blocks and managed buildings.",
  },
  {
    src: FINISH_IMAGES[1].src,
    alt: "Kitchen wrap finish samples for Sheffield City Centre flats",
    caption: "Samples help choose a finish that suits the room and the wider flat.",
  },
] as const;

export default function SheffieldCityCentreKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Sheffield City Centre", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div>
            <p className="eyebrow">Sheffield City Centre kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Sheffield City Centre
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              City-centre kitchens are often part of the living room, not a
              separate room you can shut away. If the doors, panels or worktops
              look tired, the whole flat can feel dated even when the layout
              still works.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We wrap kitchens across S1 and nearby S2, including Kelham
              Island, West Bar, Castlegate, Devonshire Quarter, The Moor and
              station-side apartments. The first step is checking the kitchen
              and the access, not just choosing a colour.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get a City Centre Quote"
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
              <p className="eyebrow">Flat-friendly refreshes</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A practical update for S1 flats, rentals and apartments
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Current search results for Sheffield kitchen wrapping mostly
                talk about cost saving, speed and no rip-out. Those points are
                useful, but city-centre work has its own details: shared
                entrances, lifts, loading bays, parking restrictions and compact
                kitchens that are always on show.
              </p>
              <p>
                Around Kelham Island and West Bar, newer apartments can have
                gloss doors that date quickly or counters that mark easily. Near
                Devonshire Quarter, The Moor and the station, rental and resale
                kitchens often need a cleaner finish without a full replacement
                project in a managed building.
              </p>
              <p>
                For the full service breakdown, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                . If you want a budget guide first, start with{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  kitchen wrap pricing in Sheffield
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {cityCentreSituations.map((item) => (
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
            <p className="eyebrow">Survey first</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              City-centre access is part of the quote
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A city-centre kitchen wrap needs more than a tape measure. Before
              pricing, we want to understand the condition of the kitchen and
              how the job can run smoothly inside the building.
            </p>
            <ul className="mt-8 grid gap-3">
              {surveyChecks.map((check) => (
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
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">City-centre coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              From Kelham Island to The Moor, Castlegate and the station
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                Sheffield City Centre is not one type of property. There are
                converted industrial buildings around Kelham and Neepsend,
                newer apartments around West Bar, compact flats near West
                Street, and station-side kitchens close to Sheaf Square and the
                Cultural Industries Quarter.
              </p>
              <p>
                If you are just outside the centre, these nearby pages may help
                too:{" "}
                <Link href="/areas-covered/walkley" className="font-medium text-moss link-underline">
                  Walkley kitchen wrapping
                </Link>
                ,{" "}
                <Link href="/areas-covered/broomhill" className="font-medium text-moss link-underline">
                  Broomhill kitchen wrapping
                </Link>{" "}
                and{" "}
                <Link href="/areas-covered/ecclesall" className="font-medium text-moss link-underline">
                  Ecclesall kitchen wrapping
                </Link>
                .
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "sheffield_city_centre_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for city-centre kitchen wrapping advice
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {localMarkers.map((marker) => (
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
              Choose a finish that works in an open-plan flat
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              In a terrace or detached house, the kitchen can be its own room.
              In many city-centre flats, it is part of the living space. That
              makes colour, glare, worktop tone and how it photographs more
              important.
            </p>
            <div className="mt-8 grid gap-4">
              {finishAdvice.map((item) => (
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
            <p className="mt-6 text-sm leading-relaxed text-ink/65">
              If worktops are the main issue, the{" "}
              <Link
                href="/pricing/worktop-wrap-cost-sheffield"
                className="font-medium text-moss link-underline"
              >
                worktop wrap cost guide
              </Link>{" "}
              explains what affects the price.
            </p>
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
          <p className="eyebrow">City-centre FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before wrapping a city-centre kitchen
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
              <p className="eyebrow text-linen/60">Free city-centre quote</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Want a straight answer on your S1 or S2 kitchen?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send clear photos of the full kitchen, close-ups of worn edges
                and worktops, your postcode and any access notes for the
                building. We will explain whether wrapping is suitable before
                you book anything.
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
                What to include
              </p>
              <p className="mt-4 text-sm leading-relaxed text-linen/70">
                Use the{" "}
                <Link href="/contact" className="font-medium text-linen link-underline">
                  contact form
                </Link>{" "}
                and include wide photos, close-ups of doors and worktops, the
                building name if helpful, parking or loading notes, and whether
                you are near Kelham Island, West Bar, The Moor, Castlegate or
                the station.
              </p>
              <p className="mt-5 text-sm text-linen/70">
                Call {SITE.phoneDisplay} if you would rather talk it through
                first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
