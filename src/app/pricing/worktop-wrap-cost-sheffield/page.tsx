import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { GALLERY_IMAGES, PROCESS_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Worktop Wrap Cost Sheffield | Kitchen Worktop Wrapping Prices",
  description:
    "How much does worktop wrapping cost in Sheffield? See local guide prices, what affects the quote, when wrapping is worth it and when replacement is better.",
  path: "/pricing/worktop-wrap-cost-sheffield",
});

const pagePath = "/pricing/worktop-wrap-cost-sheffield";

const priceBands = [
  {
    title: "Small straight run",
    price: "£220-£350",
    detail:
      "Often one or two short laminate sections with simple edges and no island. Common in compact terrace kitchens and smaller flats.",
  },
  {
    title: "Typical L-shape kitchen",
    price: "£350-£600",
    detail:
      "The most common Sheffield enquiry: a few joins, a sink cut-out, an upstand or breakfast-bar return, and careful edge finishing.",
  },
  {
    title: "Larger U-shape or island",
    price: "£600-£850+",
    detail:
      "More surface area, extra corners, deeper breakfast bars, islands, waterfall edges or awkward appliance cut-outs can push the price higher.",
  },
] as const;

const quoteFactors = [
  "Total worktop length and depth, including returns and breakfast bars.",
  "Number of joins, corners, sink cut-outs, hob cut-outs and upstands.",
  "Current condition: swollen chipboard, blown laminate or loose edging may need repair or replacement instead.",
  "Finish choice, especially thicker stone, marble, concrete or wood-effect architectural films.",
  "Access and parking, which can matter around Kelham Island, Crookes terraces, Hillsborough, Abbeydale Road and busy S8 routes.",
] as const;

const localExamples = [
  {
    area: "Terrace and galley kitchens",
    note: "In Crookes, Walkley, Hillsborough and parts of Heeley, narrow galley kitchens often have shorter worktop runs but more tight corners and awkward appliance positions.",
  },
  {
    area: "1930s semis and family kitchens",
    note: "Woodseats, Meadowhead, Fulwood and Ecclesall homes often have longer L-shape or U-shape layouts where the price is driven by surface area and sink detailing.",
  },
  {
    area: "Flats and conversions",
    note: "Kelham Island, city-centre and Nether Edge conversions can be simpler on worktop length, but access, lifts and parking can affect how the fitting day is planned.",
  },
] as const;

const faqs = [
  {
    question: "How much does a worktop wrap cost in Sheffield?",
    answer:
      "Most Sheffield worktop-only wraps sit between £220 and £850, depending on worktop length, joins, sink and hob cut-outs, finish choice and preparation. A short straight run can be less than a larger U-shape kitchen with an island.",
  },
  {
    question: "Is worktop wrapping cheaper than replacing the worktops?",
    answer:
      "Usually, yes. Wrapping keeps the existing worktop in place, so there is no heavy removal, skip, templating wait or plumbing upheaval in most cases. Replacement may still be better if the worktop is swollen, rotten, badly loose or the layout needs changing.",
  },
  {
    question: "Can you quote from photos and measurements?",
    answer:
      "Photos and rough measurements are enough for an initial guide. For a fixed Sheffield quote, we normally need to check joins, edges, sink cut-outs, upstands and the condition of the existing laminate before confirming the price.",
  },
  {
    question: "How long does a worktop-only wrap take?",
    answer:
      "Many worktop-only jobs can be completed in a day once materials are ready. More detailed kitchens with several joins, returns, upstands or islands may take longer, and we confirm that before booking the work.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Worktop wrap cost Sheffield",
  serviceType: "Kitchen worktop vinyl wrapping",
  description:
    "Guide prices and free quotes for kitchen worktop vinyl wrapping in Sheffield, including laminate, stone-effect, marble-effect and wood-effect finishes.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
  },
  areaServed: [
    { "@type": "City", name: "Sheffield" },
    { "@type": "AdministrativeArea", name: "South Yorkshire" },
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Woodseats" },
    { "@type": "Place", name: "Fulwood" },
    { "@type": "Place", name: "Kelham Island" },
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "220",
    highPrice: "850",
    offerCount: "3",
    url: `${SITE.url}${pagePath}`,
  },
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: SERVICE_IMAGES.worktops.src,
    alt: "Marble-effect worktop wrap fitted in a Sheffield kitchen",
    caption: "Worktop wrapping can change the surface without removing the units",
  },
  {
    src: GALLERY_IMAGES[3].src,
    alt: "Light marble-effect worktop wrap for a Sheffield pricing guide",
    caption: "Stone and marble-effect finishes are popular for brighter kitchens",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Preparation work before fitting kitchen worktop wrap in Sheffield",
    caption: "Edges, joins and cut-outs decide how tidy the final finish looks",
  },
] as const;

export default function WorktopWrapCostSheffieldPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
            { name: "Worktop Wrap Cost Sheffield", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Worktop wrap cost Sheffield</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              How Much Does Worktop Wrapping Cost in Sheffield?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              A worktop wrap is usually the quickest way to change a kitchen
              that feels dark, scratched or dated when the cabinets underneath
              are still sound. In Sheffield, most worktop-only wraps fall
              between £220 and £850, but the useful answer depends on the shape
              of your kitchen, not just a price per metre.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              This guide explains what changes the quote, when wrapping is good
              value, and when we would rather tell you to replace the worktop
              instead. If you want a fixed price, send photos, rough dimensions
              and your postcode.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Ask for a Worktop Quote"
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
          <div className="max-w-3xl">
            <p className="eyebrow">Guide prices</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Typical worktop wrapping price bands
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              National pages often quote a simple per-metre cost, but that can
              be misleading. A short worktop with a sink, hob, joins and upstand
              can take more care than a longer straight run. These ranges are a
              practical starting point for Sheffield kitchens.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {priceBands.map((band) => (
              <article
                key={band.title}
                className="rounded-3xl border border-ink/8 bg-linen/70 p-7"
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-moss/70">
                  {band.title}
                </p>
                <p className="mt-4 font-heading text-4xl font-medium text-moss">
                  {band.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {band.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
            <p className="eyebrow">What changes the quote</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The details that matter more than square metres
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Worktop wrapping looks simple from a distance, but the cost is in
              the preparation and the finishing. A clean edge around a Belfast
              sink, a neat return on a breakfast bar, or a tidy join near a hob
              takes more time than laying film over a flat sample board.
            </p>
            <ul className="mt-8 space-y-3">
              {quoteFactors.map((factor) => (
                <li
                  key={factor}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
                >
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Local fit</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Why Sheffield homes rarely need a one-size quote
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-ink/65">
            <p>
              Sheffield kitchens vary street by street. A compact S6 terrace
              near Hillsborough Park is not the same quoting job as a larger
              family kitchen around Woodseats, Meadowhead or Fulwood. Some
              homes have short, practical laminate runs. Others have older
              upstands, rounded front edges, added breakfast bars or worktops
              that have been patched after previous appliance changes.
            </p>
            <p>
              That is why a useful quote starts with the kitchen in front of us.
              We look at the surface condition, the sink and hob cuts, how the
              worktop meets the wall, and whether the finish you want will suit
              the room. A light stone-effect wrap can brighten a shaded terrace
              kitchen; a warmer wood-effect finish can soften newer flats or
              open-plan spaces.
            </p>
            <p>
              If you are still comparing options, the main{" "}
              <Link href="/pricing" className="font-medium text-moss link-underline">
                Sheffield kitchen wrap pricing guide
              </Link>{" "}
              gives the bigger picture, and our{" "}
              <Link
                href="/services#worktop-wrapping"
                className="font-medium text-moss link-underline"
              >
                worktop wrapping service
              </Link>{" "}
              explains how worktops fit alongside doors, panels and full kitchen
              wraps. You can also check the{" "}
              <Link
                href="/areas-covered"
                className="font-medium text-moss link-underline"
              >
                areas we cover
              </Link>{" "}
              if you are outside central Sheffield.
            </p>
          </div>
        </div>

        <div className="container-site mt-12 grid gap-5 md:grid-cols-3">
          {localExamples.map((example) => (
            <article key={example.area} className="rounded-3xl bg-mist/55 p-7">
              <h3 className="font-heading text-2xl font-medium">
                {example.area}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                {example.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Worth it or not?</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              When worktop wrapping is good value
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                Wrapping makes sense when the worktop is flat, firmly fixed and
                structurally sound, but the colour or surface marks are letting
                the room down. It is especially useful before selling, refreshing
                a rental, or tying newer doors into older worktops without
                taking on a full replacement.
              </p>
              <p>
                It is not a magic repair. If the chipboard has swollen around a
                sink, the laminate is badly lifting, or the worktop moves when
                you lean on it, we will say so before pricing. In those cases,
                replacing the surface first may save money and frustration.
              </p>
              <p>
                The quickest way to find out is to send clear photos of the full
                worktop, close-ups of edges and joins, plus rough measurements.
                We will give you an honest steer before arranging a survey.
              </p>
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
          <p className="eyebrow">Worktop wrap cost FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions Sheffield homeowners ask before pricing
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl bg-mist/70 open:bg-mist"
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
          <p className="eyebrow text-linen/60">Free Sheffield worktop quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want a clear price for your worktops?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-linen/70">
            Send photos, rough measurements and your postcode. We will tell you
            whether wrapping is sensible, what is likely to affect the price,
            and whether a survey is worth booking.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              quoteLabel="Request a Worktop Quote"
              showCall
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer a form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and mention worktop wrapping.
          </p>
        </div>
      </section>
    </>
  );
}
