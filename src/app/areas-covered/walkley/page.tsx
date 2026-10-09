import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { GALLERY_IMAGES, PROCESS_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const pagePath = "/areas-covered/walkley";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Walkley Sheffield | S6 Kitchen Wraps",
  description:
    "Kitchen wrapping in Walkley, Sheffield for S6 terraces, rental kitchens and family homes near South Road, Ruskin Park and the Crookes edge.",
  path: pagePath,
});

const surveyChecks = [
  "Door edges, peeling foil and past DIY repairs before any finish is promised.",
  "Worktop joins, sink areas and kettle steam damage in compact terrace kitchens.",
  "Access and parking around steep streets off South Road, Walkley Road and Commonside.",
  "Whether a landlord refresh, sale prep or long-term home needs the tougher finish choice.",
] as const;

const walkleyFits = [
  {
    title: "Terraces with practical layouts",
    body: "Many Walkley kitchens are narrow but usable. If the carcasses are firm and the layout already works, wrapping can change the visible surfaces without trying to turn the room into a building project.",
  },
  {
    title: "Homes near South Road and Ruskin Park",
    body: "Older houses around South Road, Walkley Road, Daniel Hill and Ruskin Park often need a clean, warm finish that suits the property rather than a cold showroom look.",
  },
  {
    title: "Rental and sale-ready refreshes",
    body: "Walkley sits close to Crookes, Hillsborough and the university rental belt, so some kitchens need to photograph better quickly between tenancies or before viewings.",
  },
] as const;

const localMarkers = [
  "South Road shops, cafes and local high-street homes",
  "Walkley Carnegie Library and Walkley Road",
  "Ruskin Park, Daniel Hill Street and Burgoyne Road",
  "Commonside, Crookesmoor and the Crookes edge",
  "Steeper side streets looking towards the Rivelin Valley",
  "S6 homes close to Hillsborough and Langsett Road routes",
] as const;

const finishAdvice = [
  {
    label: "Warm neutrals",
    detail:
      "Useful where older stone terraces, darker corners or traditional floors make bright white feel too harsh.",
  },
  {
    label: "Soft greens and blues",
    detail:
      "Good for lived-in family kitchens that need colour but still need to feel calm and easy to maintain.",
  },
  {
    label: "Stone-effect worktops",
    detail:
      "Helpful when the cabinets are acceptable but the counter surface makes the whole kitchen look worn.",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Walkley and the S6 side of Sheffield?",
    answer:
      "Yes. We cover Walkley, South Road, Walkley Road, Ruskin Park, Commonside, the Crookes edge and nearby S6 streets towards Hillsborough. If you are unsure whether you are Walkley, Crookes or Upperthorpe, send your postcode and we will confirm.",
  },
  {
    question: "Is kitchen wrapping suitable for Walkley terrace kitchens?",
    answer:
      "Often, yes. Many Walkley terraces have compact kitchens where the layout works but the doors, panels or worktops look tired. We check the surfaces first, because swollen MDF, loose hinges or damp worktops need sorting before a wrap makes sense.",
  },
  {
    question: "Can wrapping help a Walkley rental kitchen between tenants?",
    answer:
      "It can when the units are sound and the issue is mainly cosmetic. A door, panel or worktop wrap can make the kitchen look cleaner for photos and viewings without the downtime of a full replacement. Landlords still need to arrange access and tenant permissions properly.",
  },
  {
    question: "How much does a Walkley kitchen wrap cost?",
    answer:
      "Most full Sheffield kitchen wraps start from around 1,250 pounds, with smaller door-only or worktop-only jobs costing less. The final Walkley quote depends on door count, worktop length, finish choice, access and the condition we find at survey.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Walkley, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Walkley, S6 and nearby west Sheffield homes.",
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
      name: "Walkley",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S6",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "South Road, Walkley" },
    { "@type": "Place", name: "Ruskin Park" },
    { "@type": "Place", name: "Commonside" },
    { "@type": "Place", name: "Crookesmoor" },
    { "@type": "Place", name: "Hillsborough" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: GALLERY_IMAGES[1].src,
    alt: "Navy kitchen door wrap suited to a Walkley Sheffield terrace kitchen",
    caption: "A darker door wrap can sharpen a compact west Sheffield kitchen.",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield home",
    caption: "Preparation matters more than the colour choice.",
  },
  {
    src: SERVICE_IMAGES.worktops.src,
    alt: "Marble-effect worktop wrapping for a Walkley Sheffield kitchen",
    caption: "Worktop wrapping can lift the room when the cabinets still work.",
  },
] as const;

export default function WalkleyKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Walkley", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="eyebrow">Walkley kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Walkley, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Walkley kitchens tend to be practical, busy rooms rather than
              show-home spaces. You might have a terrace kitchen just off South
              Road, a family home near Ruskin Park, or a rental on the Crookes
              and Commonside edge that needs to look cared for without a long
              refit.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              If the units are still solid, kitchen wrapping can refresh doors,
              drawer fronts, end panels and worktops without ripping out the
              carcasses. We check the surfaces first and tell you straight if
              wrapping is not the right answer for your kitchen.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get a Walkley Quote"
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
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="eyebrow">Local fit</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A low-mess refresh for steep streets and compact layouts
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Walkley is one of those Sheffield areas where access can change
                from one street to the next. South Road has the shops and cafes,
                side roads drop away towards Upperthorpe, and other streets look
                out towards the Rivelin Valley. A full kitchen rip-out can mean
                skips, deliveries and awkward parking before any fitting starts.
              </p>
              <p>
                Wrapping is simpler when the kitchen underneath is sound. There
                is no skip, no carcass removal and no need to turn a narrow
                terrace kitchen into a building site. The job is still careful
                trade work, though: greasy edges, old adhesive, peeling foil and
                worktop damage all need checking before we promise a finish.
              </p>
              <p>
                For the full service breakdown, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                . If budget is the first question, start with the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {walkleyFits.map((item) => (
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
              What we check before quoting a Walkley kitchen
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A kitchen wrap only looks right when the base is good enough. That
              matters in older terraces where steam, past repairs and heavy use
              can show up around door edges, sinks and worktop joins.
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
            <p className="eyebrow">Walkley coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              South Road, Ruskin Park and the Crookes edge
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                Real local detail helps when arranging a survey. A kitchen near
                Walkley Carnegie Library is a different access job from one down
                towards Commonside or up on the Crookes side. If parking is
                awkward, tell us early so we can plan the visit properly.
              </p>
              <p>
                We already cover nearby{" "}
                <Link href="/areas-covered/crookes" className="font-medium text-moss link-underline">
                  Crookes
                </Link>{" "}
                and{" "}
                <Link href="/areas-covered/hillsborough" className="font-medium text-moss link-underline">
                  Hillsborough
                </Link>
                , so Walkley sits naturally in our west Sheffield service area.
                You can also check all current locations on the{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas covered page
                </Link>
                .
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "walkley_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for Walkley kitchen wrapping advice
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
            <p className="eyebrow">Finish choices</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Choose a finish that suits the house, not just the trend
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A Walkley kitchen can look odd if the finish is too cold or too
              glossy for the rest of the house. We help narrow the options down
              to finishes that make sense for the light, layout and amount of
              daily use.
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
          <p className="eyebrow">Walkley FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before you refresh a Walkley kitchen
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
              <p className="eyebrow text-linen/60">Free Walkley quote</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Want to know if your Walkley kitchen can be wrapped?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send a few photos, your postcode and what you want to change.
                We will tell you whether wrapping is suitable, what needs
                preparing, and whether doors, worktops or a full kitchen wrap
                would be the sensible spend.
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
                Prefer to write it down?
              </p>
              <p className="mt-4 text-sm leading-relaxed text-linen/70">
                Use the{" "}
                <Link href="/contact" className="font-medium text-linen link-underline">
                  contact form
                </Link>{" "}
                and include photos of the full kitchen, door edges, worktop
                joins and any peeling or swollen areas.
              </p>
              <p className="mt-5 text-sm text-linen/70">
                Call {SITE.phoneDisplay} if you would rather talk through access
                or timings first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
