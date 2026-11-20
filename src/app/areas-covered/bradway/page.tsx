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

const pagePath = "/areas-covered/bradway";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Bradway Sheffield | S17 Kitchen Wraps",
  description:
    "Kitchen wrapping in Bradway, Sheffield for S17 homes around Bradway Road, Twentywell Lane, Twentywell Road, the village green and the Totley edge.",
  path: pagePath,
});

const bradwayHomeNotes = [
  {
    title: "S17 kitchens that are sound underneath",
    body: "Many Bradway kitchens do not need a full rip-out. If the layout works and the carcasses are solid, wrapping the visible doors, panels and suitable worktops can make the room feel properly updated.",
  },
  {
    title: "Access around Bradway Road and Twentywell",
    body: "Bradway has main-road stretches, small parades and quieter residential roads. We ask about parking, steps, narrow drives and shared access before promising a fitting plan.",
  },
  {
    title: "A finish that suits the edge-of-city feel",
    body: "Homes near the village green, golf club side and Totley edge often suit calmer matt, warm wood or stone-effect finishes rather than a harsh showroom look.",
  },
] as const;

const quoteChecks = [
  "Door edges, old vinyl lift and swollen MDF around sink, dishwasher and kettle zones.",
  "Worktop joins, hob cut-outs and upstands before recommending a stone or marble-effect worktop wrap.",
  "Parking and loading around Bradway Road, Twentywell Lane, Twentywell Road, Prospect Road and nearby side streets.",
  "How natural light, flooring and existing wall tiles affect the right colour choice.",
  "Whether the kitchen needs a long-term family finish, a sale-ready refresh or a lighter update before new flooring or decorating.",
] as const;

const localMarkers = [
  "Bradway Road and the village green",
  "Twentywell Lane, Twentywell Road and the Castle Inn side",
  "Dore & Totley Golf Club and Abbeydale Golf Club nearby",
  "Prospect Road, Queen Victoria Road and Lower Bradway",
  "Totley Brook, Greenhill and Beauchief edges",
  "Dore, Totley, Lowedges and the Derbyshire boundary",
] as const;

const finishAdvice = [
  {
    label: "Soft matt cabinet doors",
    detail:
      "Matt finishes tend to sit well in Bradway family kitchens because they reduce glare and feel settled beside warmer flooring, garden views and older tiles.",
  },
  {
    label: "Stone-effect worktops",
    detail:
      "If the cupboards are still useful but the counter is doing the room no favours, a stone-effect wrap can change the first surface you notice.",
  },
  {
    label: "Warm wood and muted green tones",
    detail:
      "For homes on the Dore, Totley and Greenhill edges, natural tones can look more at home than a stark white or high-gloss finish.",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Bradway in Sheffield?",
    answer:
      "Yes. We cover Bradway, Bradway Road, Twentywell Lane, Twentywell Road, Lower Bradway, the Totley edge, Greenhill edge and nearby S17 and S8 streets. Send your postcode with a few photos and we will confirm before arranging a survey.",
  },
  {
    question: "Is wrapping suitable for older Bradway kitchen doors?",
    answer:
      "Often, but it depends on the surface. We check for peeling foil, swollen MDF, loose edges, heat damage and water marks before recommending wrapping. If replacement doors or another fix makes more sense, we will say so.",
  },
  {
    question: "Can you wrap worktops as well as cupboards in Bradway?",
    answer:
      "Usually, yes, if the worktops are stable and the joins, sink cut-outs and hob areas are in good enough condition. We can quote for doors only, worktops only or a full kitchen wrap.",
  },
  {
    question: "How much does a Bradway kitchen wrap cost?",
    answer:
      "Most full Sheffield kitchen wraps start from around 1,250 pounds, with smaller door-only or worktop-only jobs costing less. A Bradway quote depends on door count, worktop length, finish choice, preparation and access.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Bradway, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Bradway, S17 and nearby south Sheffield homes.",
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
      name: "Bradway",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S17",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Twentywell Lane" },
    { "@type": "Place", name: "Twentywell Road" },
    { "@type": "Place", name: "Lower Bradway" },
    { "@type": "Place", name: "Totley" },
    { "@type": "Place", name: "Dore" },
    { "@type": "Place", name: "Greenhill" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: GALLERY_IMAGES[5].src,
    alt: "Completed kitchen wrap suitable for a Bradway S17 home",
    caption: "A full wrap can refresh a sound Bradway kitchen without changing the layout.",
  },
  {
    src: PROCESS_IMAGES[0].src,
    alt: "Kitchen surface checks before wrapping in Sheffield",
    caption: "The quote starts with the condition of the kitchen, not just the colour.",
  },
  {
    src: FINISH_IMAGES[1].src,
    alt: "Kitchen wrap finish samples for Bradway homes in Sheffield",
    caption: "Samples help choose a finish that suits the room and the wider house.",
  },
] as const;

export default function BradwayKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Bradway", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="eyebrow">Bradway kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Bradway, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Bradway kitchens often sit in solid S17 homes where the room still
              works, but the doors, worktops or old colour make the whole space
              feel tired. Wrapping can be the sensible middle step before a full
              replacement.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover Bradway Road, Twentywell Lane, Twentywell Road, Lower
              Bradway and nearby streets towards Dore, Totley, Greenhill and
              Beauchief. We will check the surfaces properly and tell you
              straight if wrapping is not the right answer.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get a Bradway Quote"
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
              <p className="eyebrow">Local fit</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A Bradway update should feel calm, practical and lived-in
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Search results for kitchen wrapping around Sheffield usually
                talk about saving money, avoiding mess and finishing quickly.
                Those points matter, but Bradway homes need a bit more local
                judgement: family kitchens, edge-of-city routes, older surfaces
                and a mix of S17 properties around the village spine.
              </p>
              <p>
                Around Bradway Road, Twentywell Lane and the village green, the
                right finish is often about making a working kitchen feel
                lighter and cleaner without turning it into a show kitchen. On
                streets towards Totley Brook, Dore or Greenhill, access and
                parking can also shape how the job is planned.
              </p>
              <p>
                If you want the full service breakdown first, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                . For budget guidance, start with{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  kitchen wrap pricing in Sheffield
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {bradwayHomeNotes.map((item) => (
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
              We check the kitchen before we sell you a finish
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A wrap only lasts when the base surface is stable. That is why a
              Bradway quote starts with the doors, worktops, edges and access,
              not a rushed colour choice from a photo.
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
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Bradway coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Bradway Road, Twentywell and the S17 edge
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                Bradway sits around a clear village spine, with Bradway Road,
                Twentywell Lane, Twentywell Road and Lower Bradway leading
                towards the Totley, Dore, Greenhill and Derbyshire edges. That
                gives the area a different feel from a city-centre flat or a
                tight terrace closer to town.
              </p>
              <p>
                Nearby pages that may help if you are just outside Bradway are{" "}
                <Link href="/areas-covered/totley" className="font-medium text-moss link-underline">
                  Totley kitchen wrapping
                </Link>
                ,{" "}
                <Link href="/areas-covered/dore" className="font-medium text-moss link-underline">
                  Dore kitchen wrapping
                </Link>{" "}
                and{" "}
                <Link href="/areas-covered/beauchief" className="font-medium text-moss link-underline">
                  Beauchief kitchen wrapping
                </Link>
                .
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "bradway_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for Bradway kitchen wrapping advice
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
              Choose a finish that belongs in the house
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A sample can look right in isolation and wrong once it sits beside
              your floor, tiles, handles and natural light. For Bradway homes,
              we usually narrow the choice after seeing how the kitchen is used.
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
              If the counter is the part bothering you most, the{" "}
              <Link
                href="/pricing/worktop-wrap-cost-sheffield"
                className="font-medium text-moss link-underline"
              >
                worktop wrap cost guide
              </Link>{" "}
              explains what affects worktop-only pricing.
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
          <p className="eyebrow">Bradway FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before wrapping a Bradway kitchen
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
              <p className="eyebrow text-linen/60">Free Bradway quote</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Want a straight answer on your Bradway kitchen?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send clear photos of the full kitchen, close-ups of worn edges
                or worktops, and your postcode. We will explain whether a door
                wrap, worktop wrap or full kitchen wrap is worth pricing.
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
                and include wide photos, close-ups of door edges and worktops,
                notes about parking or access, and whether you are near Bradway
                Road, Twentywell Lane, the village green, Totley or Greenhill.
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
