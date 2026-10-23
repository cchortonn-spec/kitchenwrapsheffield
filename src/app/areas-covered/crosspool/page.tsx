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

const pagePath = "/areas-covered/crosspool";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Crosspool Sheffield | S10 Kitchen Wraps",
  description:
    "Kitchen wrapping in Crosspool, Sheffield for S10 homes near Manchester Road, Sandygate Road, Lydgate Lane, Tapton Hall and the Crookes edge.",
  path: pagePath,
});

const localKitchenNeeds = [
  {
    title: "Solid family kitchens that need a cleaner finish",
    body: "Many Crosspool homes already have practical layouts. If the doors, frames and worktops are sound, wrapping can change the visible surfaces without the cost and disruption of a full replacement.",
  },
  {
    title: "Older kitchens on the Fulwood and Crookes edges",
    body: "Around Sandygate, Lydgate and nearby west Sheffield streets, the right finish often needs to feel warm and settled rather than ultra-glossy or out of place.",
  },
  {
    title: "Sale-ready refreshes near the A57 route",
    body: "Crosspool sits on a busy route out towards the city boundary, so a wrap can be useful when a kitchen needs to photograph better before viewings without turning the house into a building site.",
  },
] as const;

const surveyFocus = [
  "Parking and loading around Manchester Road, Sandygate Road and Lydgate Lane, especially at busier times of day.",
  "Door edges, hinges and older foil surfaces before any colour or worktop finish is promised.",
  "Worktop damage near sinks, kettles and joins in well-used family kitchens.",
  "Whether the kitchen needs a calm long-term finish, a bolder change, or a neutral sale-ready refresh.",
  "Access for doors, tools and materials in homes close to Crosspool shops, schools and steeper side roads.",
] as const;

const localMarkers = [
  "Manchester Road and the A57 west Sheffield route",
  "Sandygate Road, Lydgate Lane and Crosspool shops",
  "Crosspool Tavern, The Plough and St Columba's Church",
  "Tapton Hall, Shore Lane and the Tapton Hill transmitter",
  "Darwin Lane, Tapton School and King Edward VII lower school",
  "Nearby Crookes, Fulwood, Ranmoor and Lodge Moor edges",
] as const;

const finishRoutes = [
  {
    label: "Soft matt doors",
    detail:
      "A good fit where the kitchen needs to feel calmer, especially in family homes with lots of daily use.",
  },
  {
    label: "Stone-effect worktops",
    detail:
      "Useful when the existing counter is what dates the room, but the base units and layout still work.",
  },
  {
    label: "Warm natural tones",
    detail:
      "Often better for west Sheffield homes than a cold, high-contrast finish that does not suit the rest of the house.",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Crosspool and S10?",
    answer:
      "Yes. We cover Crosspool, Manchester Road, Sandygate Road, Lydgate Lane, Shore Lane, the Crookes edge, Fulwood, Ranmoor and nearby S10 streets. Send your postcode with photos and we will confirm before arranging a survey.",
  },
  {
    question: "Is wrapping suitable for Crosspool family kitchens?",
    answer:
      "Often, yes, if the doors, panels, carcasses and worktops are sound. Crosspool kitchens can be busy family rooms, so we check high-use areas such as door edges, sink runs and kettle positions before recommending a wrap.",
  },
  {
    question: "Can you work around parking near Manchester Road or Lydgate Lane?",
    answer:
      "Usually, but it helps to know the access details early. A survey near Crosspool shops, Manchester Road or the school routes may need different planning from a quieter side street, so tell us about permits, driveways or loading restrictions when you enquire.",
  },
  {
    question: "How much does a Crosspool kitchen wrap cost?",
    answer:
      "Most full Sheffield kitchen wraps start from around 1,250 pounds, with smaller door-only or worktop-only jobs costing less. A Crosspool quote depends on door count, worktop length, finish choice, preparation and access.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Crosspool, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Crosspool, S10 and nearby west Sheffield homes.",
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
      name: "Crosspool",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S10",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Manchester Road, Crosspool" },
    { "@type": "Place", name: "Sandygate Road" },
    { "@type": "Place", name: "Lydgate Lane" },
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Fulwood" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: GALLERY_IMAGES[4].src,
    alt: "Black marble worktop wrap suited to a Crosspool Sheffield kitchen",
    caption: "A darker worktop wrap can sharpen a practical S10 kitchen.",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield kitchen",
    caption: "Surface preparation decides whether the finish will last.",
  },
  {
    src: FINISH_IMAGES[1].src,
    alt: "Kitchen wrap finish swatches for Crosspool Sheffield homes",
    caption: "Finish samples help the new look sit naturally with the house.",
  },
] as const;

export default function CrosspoolKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Crosspool", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Crosspool kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Crosspool, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Crosspool kitchens often sit in solid S10 homes where the layout
              still works but the doors, worktops or colour make the room feel
              tired. If that sounds familiar, wrapping can be a practical way to
              change the look without pulling out the carcasses.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover homes around Manchester Road, Sandygate Road, Lydgate
              Lane and the Crookes and Fulwood edges. The first step is always a
              surface check, because honest advice matters more than forcing a
              wrap onto a kitchen that is not ready for one.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get a Crosspool Quote"
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
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="eyebrow">Local fit</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A low-disruption refresh for elevated west Sheffield homes
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Crosspool is centred around the junction of Manchester Road,
                Sandygate Road and Lydgate Lane, with homes sitting high above
                the Porter and Rivelin valleys. That elevated position is part
                of the area&apos;s character, but it can also make access,
                parking and deliveries worth planning before a bigger kitchen
                job.
              </p>
              <p>
                A wrap keeps the work focused on the visible surfaces: doors,
                drawer fronts, end panels, plinths and worktops where suitable.
                There is no skip, no full rip-out and no need to replace a
                layout that already works for the house.
              </p>
              <p>
                For the full service breakdown, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                . If you want a guide price before sending photos, start with
                the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {localKitchenNeeds.map((item) => (
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
              What we check before quoting in Crosspool
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good kitchen wrap starts before any film is fitted. We look at
              the door edges, old adhesive, worktop joins, heat marks and daily
              wear so the quote reflects the kitchen you actually have.
            </p>
            <ul className="mt-8 grid gap-3">
              {surveyFocus.map((check) => (
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
        <div className="container-site grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="eyebrow">Crosspool coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Manchester Road, Sandygate and the S10 edge
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                Local details help us plan the visit properly. A kitchen near
                Crosspool shops or the Crosspool Tavern is a different access
                question from a quieter home near Tapton Hall, Shore Lane or the
                roads heading towards Lodge Moor.
              </p>
              <p>
                If you are just outside Crosspool, nearby pages may help too:
                see{" "}
                <Link href="/areas-covered/crookes" className="font-medium text-moss link-underline">
                  Crookes kitchen wrapping
                </Link>
                ,{" "}
                <Link href="/areas-covered/fulwood" className="font-medium text-moss link-underline">
                  Fulwood kitchen wrapping
                </Link>{" "}
                or our full{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas covered
                </Link>{" "}
                guide.
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "crosspool_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for Crosspool kitchen wrapping advice
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
              Choose the finish around the house, not just the sample
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Crosspool homes vary from post-war family houses to older
              properties on the Fulwood and Crookes edges. The best finish is
              the one that works with the room&apos;s light, floor, wall colour
              and how hard the kitchen is used every week.
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
            <p className="mt-6 text-sm leading-relaxed text-ink/65">
              If the worktops are the main problem, the{" "}
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
          <p className="eyebrow">Crosspool FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before wrapping a Crosspool kitchen
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
              <p className="eyebrow text-linen/60">Free Crosspool quote</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Want to know if your Crosspool kitchen is worth wrapping?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send photos of the whole kitchen, close-ups of any worn edges
                and your S10 postcode. We will explain whether wrapping is
                suitable, what preparation is needed, and whether doors,
                worktops or a full kitchen wrap makes most sense.
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
                What to send with your enquiry
              </p>
              <p className="mt-4 text-sm leading-relaxed text-linen/70">
                Use the{" "}
                <Link href="/contact" className="font-medium text-linen link-underline">
                  contact form
                </Link>{" "}
                and include your postcode, wide kitchen photos, close-ups of
                worn edges, worktop damage near sinks or hobs, and any access
                notes for parking or shared driveways.
              </p>
              <p className="mt-5 text-sm text-linen/70">
                Call {SITE.phoneDisplay} if you would rather talk through the
                kitchen first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
