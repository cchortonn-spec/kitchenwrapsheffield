import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { PROCESS_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kitchen Wrapping vs Spray Painting Sheffield | Honest Guide",
  description:
    "Kitchen wrapping vs spray painting in Sheffield. Compare cost, disruption, finish choice, worktops, durability and which option suits your kitchen.",
  path: "/kitchen-wrapping-vs-spray-painting",
});

const pagePath = "/kitchen-wrapping-vs-spray-painting";

const comparisonRows = [
  {
    question: "You want marble, stone, concrete or wood effect",
    wrapping:
      "Usually the stronger choice, especially when doors and suitable worktops need to change together.",
    spraying:
      "Better for solid colours. Spray can look excellent, but it will not create a convincing marble or woodgrain surface.",
  },
  {
    question: "You want one exact paint colour",
    wrapping:
      "Good if there is a close film match, but you are choosing from available vinyl ranges.",
    spraying:
      "Often better because a sprayer can usually colour-match to ranges such as RAL, Farrow & Ball or Little Greene.",
  },
  {
    question: "You need the kitchen back quickly",
    wrapping:
      "Most suitable Sheffield kitchens can be wrapped in a few days, with no spray booth or overspray masking.",
    spraying:
      "Still much cleaner than replacing, but doors are often removed, dried and refitted over a longer process.",
  },
  {
    question: "Your worktops are part of the problem",
    wrapping:
      "A clear advantage. Worktop wrapping can be planned with doors, panels and plinths for one full refresh.",
    spraying:
      "Spraying is mainly a door, drawer, panel and furniture finish. Worktop refinishing is a separate specialist job.",
  },
] as const;

const sheffieldScenarios = [
  {
    title: "Crookes, Walkley and Hillsborough terraces",
    body: "Narrow streets, tight parking and busy family routines make low-disruption work attractive. Wrapping avoids a skip and keeps the job lighter when the layout already works.",
  },
  {
    title: "Nether Edge, Fulwood and older fitted kitchens",
    body: "If the doors have detail, curves or older timber that deserves a painted finish, spray painting may be the right answer. If the flat panels are sound but dated, wrapping is still worth pricing.",
  },
  {
    title: "Kelham Island flats and Ecclesall Road rentals",
    body: "For landlords, tenants with permission, or sellers who need clean photos quickly, wrapping can lift doors and worktops without turning the property into a building site.",
  },
] as const;

const wrapSignals = [
  "You like textured finishes such as oak, walnut, marble, stone, concrete or soft-touch matt.",
  "The worktops look tired as well as the cupboard doors.",
  "You want a fast, clean refresh before selling, letting or hosting.",
  "The kitchen doors are flat or simple enough for clean wrapped edges.",
] as const;

const spraySignals = [
  "You want an exact paint colour across detailed doors, cornices or a traditional kitchen.",
  "The existing doors are high-quality timber or MDF and deserve a painted furniture finish.",
  "You are happy for doors and drawers to be removed, sprayed, dried and refitted.",
  "You are focused on a seamless solid-colour finish rather than texture or worktops.",
] as const;

const inspectionPoints = [
  "Edges close to ovens, dishwashers, kettles and sinks, because heat and steam matter for any surface finish.",
  "Door shape and detail. Flat slab doors are usually easier to wrap; heavily profiled doors may suit spraying.",
  "Existing vinyl, laminate, paint or foil that is lifting. Neither wrapping nor spraying should hide a failed surface.",
  "Worktop joins, sink cut-outs and hob areas if you want a full door-and-worktop refresh.",
] as const;

const faqs = [
  {
    question: "Is kitchen wrapping cheaper than spray painting in Sheffield?",
    answer:
      "Often it is cheaper upfront, especially for a quick door refresh or a wrap that includes worktops. The honest answer depends on the number of doors, the finish chosen, whether worktops are included and how much preparation the kitchen needs.",
  },
  {
    question: "Does spray painting last longer than kitchen wrapping?",
    answer:
      "A well-prepared professional spray finish can be very durable, especially on good-quality doors. A well-fitted architectural vinyl wrap can also last well, but heat, steam and poor existing surfaces need checking first. We will tell you if spraying is likely to suit your kitchen better.",
  },
  {
    question: "Can you wrap a kitchen that has already been spray painted?",
    answer:
      "Sometimes, but only if the paint is sound, clean and firmly bonded. If the paint is flaking, soft or poorly prepared, wrapping over it would be the wrong advice. Send photos first and we can give you a sensible view before a survey.",
  },
  {
    question: "Which is better for Sheffield rental kitchens?",
    answer:
      "Wrapping is often useful for rentals because it is quick, tidy and can refresh doors and worktops together. Spray painting can be better where the landlord wants a long-term solid colour on good doors. Permission, surface condition and timescale decide it.",
  },
] as const;

const pageImages = [
  {
    src: SERVICE_IMAGES.doors.src,
    alt: "Wrapped kitchen doors in a Sheffield home, compared with spray painting",
    caption:
      "Door wrapping suits clean, simple fronts where a new film finish can cover the visible face and edges neatly.",
  },
  {
    src: SERVICE_IMAGES.worktops.src,
    alt: "Marble-effect worktop wrap for a Sheffield kitchen",
    caption:
      "Worktops are where wrapping can do something spray painting usually cannot: add a stone, marble or wood-effect surface.",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation underway in Sheffield",
    caption:
      "Preparation decides the finish. We check heat, steam, lifting edges and surface condition before recommending wrapping.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping vs spray painting advice in Sheffield",
  serviceType: "Kitchen vinyl wrapping comparison and quotation",
  description:
    "Advice and free quotes for Sheffield homeowners comparing kitchen wrapping with kitchen spray painting, including doors, drawers, panels and suitable worktops.",
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
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Walkley" },
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Nether Edge" },
    { "@type": "Place", name: "Kelham Island" },
    { "@type": "Place", name: "Woodseats" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function KitchenWrappingVsSprayPaintingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Wrapping vs Spray Painting",
              path: pagePath,
            },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Honest comparison</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping vs Spray Painting in Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Trying to choose between vinyl wrapping and spray painting your
              kitchen doors? Both can be good. Both can be wrong. The right
              answer depends on your doors, worktops, budget, timescale and the
              finish you actually want to look at every morning.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We fit kitchen wraps across Sheffield, but we will not tell you
              wrapping is best if spray painting makes more sense. This guide
              gives you the straight version before you book anyone in.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Ask for Advice"
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
                sizes="(max-width: 1024px) 100vw, 42vw"
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Quick answer</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Choose by finish first, then by disruption
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Spray painting is usually strongest when you want a smooth
                solid colour on good doors. A professional sprayer removes or
                masks what is needed, prepares the surface, primes it and sprays
                a fine coating. It can look like a factory-painted kitchen when
                it is done well.
              </p>
              <p>
                Wrapping is different. It applies a specialist architectural
                vinyl film over prepared doors, drawers, panels and suitable
                worktops. That means you can choose finishes that paint cannot
                copy properly: marble, stone, concrete, woodgrain, brushed
                effects and soft-touch matt surfaces.
              </p>
              <p>
                For a Sheffield terrace around Crookes, Walkley or Hillsborough,
                where parking is tight and you do not want a long job dragging
                on, wrapping can be the simpler route. For a traditional kitchen
                in Nether Edge or Fulwood with detailed timber doors and a very
                specific paint colour in mind, spraying may be the better call.
              </p>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-ink/8 bg-linen">
            <div className="grid bg-mist/70 px-6 py-5 text-sm font-medium text-ink/75 md:grid-cols-[1.05fr_1fr_1fr]">
              <span>What matters?</span>
              <span className="hidden md:block">Wrapping</span>
              <span className="hidden md:block">Spray painting</span>
            </div>
            <div className="divide-y divide-ink/8">
              {comparisonRows.map((row) => (
                <article
                  key={row.question}
                  className="grid gap-4 px-6 py-6 md:grid-cols-[1.05fr_1fr_1fr]"
                >
                  <h3 className="font-heading text-2xl font-medium">
                    {row.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">
                    <span className="mb-1 block font-medium text-moss md:hidden">
                      Wrapping
                    </span>
                    {row.wrapping}
                  </p>
                  <p className="text-sm leading-relaxed text-ink/65">
                    <span className="mb-1 block font-medium text-moss md:hidden">
                      Spray painting
                    </span>
                    {row.spraying}
                  </p>
                </article>
              ))}
            </div>
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
            <p className="eyebrow">Sheffield homes</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The local answer changes from kitchen to kitchen
            </h2>
            <p className="mt-6 leading-relaxed text-ink/65">
              Search results for Sheffield show plenty of spray painters, and
              that is no bad thing. Kitchen respraying is a real trade, not a
              shortcut. The useful question is not which service shouts louder.
              It is which finish suits your kitchen, your street and your plan
              for the property.
            </p>
            <div className="mt-8 space-y-4">
              {sheffieldScenarios.map((scenario) => (
                <article
                  key={scenario.title}
                  className="rounded-3xl bg-linen/80 p-6 shadow-sm"
                >
                  <h3 className="font-heading text-2xl font-medium">
                    {scenario.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {scenario.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Decision guide</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              When wrapping is the better fit, and when it is not
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              These are not hard sales rules. They are the checks we would talk
              through on a survey, whether you are in Woodseats, Dore, Beauchief
              or a city-centre apartment near Kelham Island.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-moss p-7 text-linen sm:p-9">
              <h3 className="font-heading text-3xl font-medium text-linen">
                Wrapping is worth a look if...
              </h3>
              <ul className="mt-6 space-y-4">
                {wrapSignals.map((signal) => (
                  <li key={signal} className="text-sm leading-relaxed text-linen/75">
                    {signal}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-7 inline-flex text-sm font-medium text-linen link-underline"
              >
                See our kitchen wrapping services
              </Link>
            </article>

            <article className="rounded-[2rem] border border-ink/8 bg-linen p-7 sm:p-9">
              <h3 className="font-heading text-3xl font-medium">
                Spray painting may be better if...
              </h3>
              <ul className="mt-6 space-y-4">
                {spraySignals.map((signal) => (
                  <li key={signal} className="text-sm leading-relaxed text-ink/65">
                    {signal}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed text-ink/60">
                If that sounds like your kitchen, we would rather say so early
                than sell you the wrong job.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Survey checks</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What we check before recommending a wrap
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Kitchens fail at the details. The glossy door beside the oven, the
              swollen panel under the sink, the old foil lifting near the kettle
              - those bits decide whether wrapping is sensible.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              Start with photos if you like. Send wide shots, close-ups of any
              damage and a note of your Sheffield postcode. We can usually tell
              whether a full survey is worthwhile.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "wrapping_vs_spray_inspection" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} for a straight answer
            </TrackedLink>
          </div>

          <div>
            <ul className="space-y-3">
              {inspectionPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
            <figure className="mt-6 overflow-hidden rounded-[2rem] bg-linen shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src={pageImages[2].src}
                  alt={pageImages[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-ink/60">
                {pageImages[2].caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Useful next steps</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Compare the numbers, then send the photos
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
            <p>
              If cost is the main question, start with our{" "}
              <Link href="/pricing" className="font-medium text-moss link-underline">
                Sheffield kitchen wrap pricing guide
              </Link>
              . If you are still choosing between doors, worktops or the whole
              room, the{" "}
              <Link href="/services" className="font-medium text-moss link-underline">
                services page
              </Link>{" "}
              explains what we actually wrap.
            </p>
            <p>
              For local examples, browse the{" "}
              <Link href="/areas-covered" className="font-medium text-moss link-underline">
                areas we cover
              </Link>
              , including homes around{" "}
              <Link href="/areas-covered/hillsborough" className="font-medium text-moss link-underline">
                Hillsborough
              </Link>
              ,{" "}
              <Link href="/areas-covered/woodseats" className="font-medium text-moss link-underline">
                Woodseats
              </Link>{" "}
              and{" "}
              <Link href="/areas-covered/beauchief" className="font-medium text-moss link-underline">
                Beauchief
              </Link>
              . Then send your own kitchen photos and we will give you a plain
              view on wrapping versus spray painting.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Questions homeowners ask</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Kitchen wrapping vs spray painting FAQs
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
          <p className="eyebrow text-linen/60">Free Sheffield quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want us to tell you which route makes sense?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos of your doors, worktops and any problem edges. We will
            explain whether wrapping is realistic, what it may cost, and when
            spray painting would be the better option.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Get a Free Opinion"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer a form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and mention you are comparing wrapping with spray painting.
          </p>
        </div>
      </section>
    </>
  );
}
