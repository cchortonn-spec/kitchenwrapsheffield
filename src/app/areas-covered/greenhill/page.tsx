import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { FINISH_IMAGES, PROCESS_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const pagePath = "/areas-covered/greenhill";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Greenhill Sheffield | S8 Kitchen Wraps",
  description:
    "Kitchen wrapping in Greenhill, Sheffield for S8 homes around Greenhill Main Road, School Lane, Bocking Lane, Meadowhead, Lowedges and Beauchief.",
  path: pagePath,
});

const greenhillSignals = [
  {
    title: "Older village-core details",
    body: "Homes around Greenhill Main Road and School Lane can have a more settled, traditional feel, so stark high-gloss finishes are not always the best match. We look at the room, light and existing details before suggesting colours.",
  },
  {
    title: "Family kitchens that still function",
    body: "Across Greenhill, Meadowhead and the Lowedges edge, many kitchens are practical rather than broken. Wrapping can refresh the visible doors, panels and suitable worktops while keeping the layout that already works.",
  },
  {
    title: "South Sheffield access planning",
    body: "A wrap avoids skips and large carcass deliveries, but parking, school-run timing and access still matter around Greenhill Main Road, Bocking Lane, Meadowhead and nearby side streets.",
  },
] as const;

const surveyQuestions = [
  "Are the doors flat, dry and stable, or is old foil lifting around the edges?",
  "Would a worktop wrap solve the main problem, or are the sink and hob areas too damaged?",
  "Does the finish need to suit a traditional S8 home, a rental refresh or a family kitchen being used every day?",
  "Are there access notes around Greenhill Main Road, School Lane, Bocking Lane, Meadowhead, Lowedges or the Beauchief edge?",
] as const;

const localMarkers = [
  "Greenhill Main Road and School Lane",
  "The historic village green and pond area",
  "Bocking Lane shops and local services",
  "Greenhill Conservation Area and stone boundary walls",
  "Meadowhead, Beauchief and Chancet Wood edges",
  "Lowedges, Bradway, Woodseats and nearby S8 streets",
] as const;

const finishChoices = [
  {
    label: "Warm neutrals for older rooms",
    detail:
      "Cream, taupe, mushroom and soft greige finishes can modernise a kitchen without fighting against stone, timber, older tiles or darker corners.",
  },
  {
    label: "Muted greens and blues",
    detail:
      "Greenhill homes often suit calmer colour rather than a hard showroom look. Samples help judge the shade in your own light before a decision is made.",
  },
  {
    label: "Stone-effect worktops",
    detail:
      "If the cupboards are acceptable but the counter is dating the room, a stone-effect worktop wrap can give the kitchen a cleaner focal surface.",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Greenhill in Sheffield?",
    answer:
      "Yes. We cover Greenhill, Greenhill Main Road, School Lane, Bocking Lane, Meadowhead, Lowedges, Beauchief, Bradway, Woodseats and nearby S8 streets. Send your postcode with kitchen photos and we will confirm coverage before arranging a survey.",
  },
  {
    question: "Is wrapping suitable for older Greenhill kitchen doors?",
    answer:
      "Often, but only if the surface is stable. We check for peeling foil, swollen MDF, loose laminate, damaged edges and water marks before recommending wrapping. If the base is failing, we will explain the safer options.",
  },
  {
    question: "Can you wrap worktops in a Greenhill kitchen?",
    answer:
      "Usually, if the worktop is secure, dry and in good enough condition around joins, sink cut-outs, hob areas and upstands. We can quote for worktops only, doors only or a full kitchen wrap.",
  },
  {
    question: "How much does a Greenhill kitchen wrap cost?",
    answer:
      "Most full Sheffield kitchen wraps start from around 1,250 pounds, with smaller door-only or worktop-only jobs costing less. A Greenhill quote depends on door count, worktop length, preparation, finish choice and access.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Greenhill, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Greenhill, S8 and nearby south Sheffield homes.",
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
      name: "Greenhill",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S8",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Meadowhead" },
    { "@type": "Place", name: "Lowedges" },
    { "@type": "Place", name: "Beauchief" },
    { "@type": "Place", name: "Bradway" },
    { "@type": "Place", name: "Woodseats" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: SERVICE_IMAGES.doors.src,
    alt: "Fresh kitchen door wrap finish suited to a Greenhill Sheffield home",
    caption: "Door and panel wrapping can change the room without changing the layout.",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation for a Sheffield S8 home",
    caption: "A useful Greenhill quote starts with condition checks, not just colour.",
  },
  {
    src: FINISH_IMAGES[1].src,
    alt: "Kitchen wrap finish samples for Greenhill homes in Sheffield",
    caption: "Samples help the finish work with the age, light and style of the kitchen.",
  },
] as const;

export default function GreenhillKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Greenhill", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Greenhill kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Greenhill, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Greenhill kitchens often sit in S8 homes where the layout still
              earns its keep, but the doors, worktops or old colour make the
              room feel tired. Wrapping gives you a way to update the visible
              surfaces before you commit to a full replacement.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover Greenhill Main Road, School Lane, Bocking Lane,
              Meadowhead, Lowedges and nearby streets towards Beauchief,
              Bradway and Woodseats. The advice starts with whether your
              existing kitchen is suitable, not with pushing a finish.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get a Greenhill Quote"
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
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Local judgement</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Greenhill is not just another S8 postcode
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Search results for kitchen wrapping usually focus on speed,
                cost and less mess. Those points are useful, but Greenhill also
                has its own mix: a historic village core around Greenhill Main
                Road and School Lane, practical family homes towards Meadowhead
                and Lowedges, and easy links to Beauchief, Bradway and
                Woodseats.
              </p>
              <p>
                The Sheffield City Council conservation-area notes highlight
                the old street layout, former village green and pond, stone
                boundary walls, mature trees and historic buildings around
                Greenhill Main Road. That does not mean every kitchen needs a
                heritage look, but it does mean the finish should feel at home
                in the property.
              </p>
              <p>
                If you are comparing options first, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or browse{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  other areas we cover
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {greenhillSignals.map((item) => (
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
            <p className="eyebrow">Survey-first quote</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Four questions decide whether wrapping is sensible
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good wrap depends on the kitchen underneath. Before we talk
              about matt greens, warm neutrals or stone-effect counters, we
              need to know whether the doors, worktops and edges are good
              enough to carry a new finish properly.
            </p>
            <ul className="mt-8 grid gap-3">
              {surveyQuestions.map((question) => (
                <li
                  key={question}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/70 shadow-sm"
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="eyebrow">Greenhill coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              From the village spine to Meadowhead and Lowedges
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                Greenhill sits between several south Sheffield areas we already
                cover, but it deserves its own guidance. A kitchen near the old
                village core can call for a different finish from a busy family
                kitchen towards Meadowhead or a practical refresh closer to
                Lowedges.
              </p>
              <p>
                Nearby pages that may help if you are just outside Greenhill
                include{" "}
                <Link href="/areas-covered/beauchief" className="font-medium text-moss link-underline">
                  Beauchief kitchen wrapping
                </Link>
                ,{" "}
                <Link href="/areas-covered/woodseats" className="font-medium text-moss link-underline">
                  Woodseats kitchen wrapping
                </Link>{" "}
                and{" "}
                <Link href="/areas-covered/bradway" className="font-medium text-moss link-underline">
                  Bradway kitchen wrapping
                </Link>
                .
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "greenhill_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for Greenhill kitchen wrapping advice
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
              Choose a finish that suits the street and the room
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              The best kitchen wrap is not always the boldest sample. In
              Greenhill, the right finish depends on the age of the property,
              how much light the kitchen gets, and whether you want a long-term
              family update, a sale-ready refresh or a rental-friendly lift.
            </p>
            <div className="mt-8 grid gap-4">
              {finishChoices.map((item) => (
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
              If the counter is the part that makes the room feel dated, the{" "}
              <Link
                href="/pricing/worktop-wrap-cost-sheffield"
                className="font-medium text-moss link-underline"
              >
                worktop wrap cost guide
              </Link>{" "}
              explains what affects worktop-only pricing in Sheffield.
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
          <p className="eyebrow">Greenhill FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before wrapping a Greenhill kitchen
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
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div>
              <p className="eyebrow text-linen/60">Free Greenhill quote</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Want a straight answer on your Greenhill kitchen?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send clear photos of the whole kitchen, close-ups of worn door
                edges or worktops, and your postcode. We will explain whether a
                door wrap, worktop wrap or full kitchen wrap is the sensible
                next step.
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
                and include wide photos, close-ups of problem edges, notes about
                parking or access, and whether you are near Greenhill Main Road,
                School Lane, Bocking Lane, Meadowhead or Lowedges.
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
