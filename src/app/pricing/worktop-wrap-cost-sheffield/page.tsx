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

export const metadata = pageMeta({
  title: "Worktop Wrap Cost Sheffield | Kitchen Worktop Wrapping Prices",
  description:
    "A practical Sheffield guide to worktop wrap costs, price factors, replacement comparisons and when wrapping kitchen worktops is worth it.",
  path: "/pricing/worktop-wrap-cost-sheffield",
});

const pagePath = "/pricing/worktop-wrap-cost-sheffield";

const priceBands = [
  {
    title: "Small straight run",
    range: "£220-£350",
    detail:
      "Useful for a compact flat kitchen, utility worktop or a simple rental refresh where there are few cuts and no awkward joins.",
  },
  {
    title: "Typical Sheffield kitchen",
    range: "£350-£650",
    detail:
      "Common for L-shaped or U-shaped family kitchens with sink and hob cut-outs, mitred corners, upstands or a breakfast bar return.",
  },
  {
    title: "Larger or complex worktops",
    range: "£650-£850+",
    detail:
      "More likely when there are long runs, islands, curved sections, several joins, damaged laminate to prepare, or premium stone-effect films.",
  },
] as const;

const quoteFactors = [
  "Total worktop length, including returns, breakfast bars and island sections",
  "Sink, hob and tap cut-outs, especially where the current edges are swollen",
  "Whether upstands, splashback strips or exposed end panels need wrapping too",
  "The film chosen: plain matt, wood, concrete, marble and darker stone effects price differently",
  "How much preparation is needed before the surface can hold a clean, durable wrap",
  "Access and working room in tighter terraces, flats and busy family kitchens",
] as const;

const sheffieldExamples = [
  {
    title: "Rental kitchens",
    body: "For landlords around Kelham Island, Crookesmoor or Hillsborough, a worktop wrap can be a sensible middle ground when the units are sound but the surface photographs badly between tenancies.",
  },
  {
    title: "Family kitchens",
    body: "In family homes around Woodseats, Beauchief or Fulwood, the question is usually durability and downtime. Wrapping avoids a messy rip-out, but we still check heat marks, joins and sink edges before quoting.",
  },
  {
    title: "Sale preparation",
    body: "If you are preparing a Sheffield home for valuation or listing, a stone-effect wrap can make the kitchen feel cleaner without committing to quartz or a full replacement before moving.",
  },
] as const;

const notWorthWrapping = [
  "Blown chipboard around the sink or hob that has lost its shape",
  "Loose worktops, failed joins or sections that move when pressed",
  "Deep burn damage or heavy dents that would show through the new finish",
  "A layout you already plan to replace soon, where wrapping would only delay the right job",
] as const;

const faqs = [
  {
    question: "How much does worktop wrapping cost in Sheffield?",
    answer:
      "Most Sheffield worktop wrap jobs fall somewhere between £220 and £850, depending on length, cut-outs, finish choice and condition. A short straight run costs less than a large kitchen with an island, upstands and several joins.",
  },
  {
    question: "Is worktop wrapping cheaper than replacing laminate?",
    answer:
      "Usually, yes. Laminate replacement can be affordable, but removal, disposal, plumbing around the sink and fitting can push the final bill up. Wrapping keeps the existing worktop in place, so the job is normally quicker and less disruptive.",
  },
  {
    question: "Can you wrap worktops in Sheffield rental properties?",
    answer:
      "Often, provided the existing worktop is solid and dry. It can be a good option for rentals in areas such as Crookesmoor, Hillsborough and the city centre where you want the kitchen to look cleaner without taking it out of use for long.",
  },
  {
    question: "Will a worktop wrap cope with normal kitchen use?",
    answer:
      "A professionally fitted worktop film is designed for everyday use, but it is not indestructible. We explain care clearly: use chopping boards, avoid placing hot pans straight on the surface and clean with suitable products.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Worktop wrap cost guide for Sheffield",
  serviceType: "Kitchen worktop vinyl wrapping",
  description:
    "Kitchen worktop vinyl wrapping prices, survey advice and replacement comparisons for Sheffield homeowners and landlords.",
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
    { "@type": "Place", name: "Kelham Island" },
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Woodseats" },
    { "@type": "Place", name: "Beauchief" },
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "220",
    highPrice: "850",
    offerCount: "3",
  },
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: SERVICE_IMAGES.worktops.src,
    alt: "Marble-effect kitchen worktop wrap fitted in Sheffield",
    caption: "Worktop wrapping can give laminate a stone-effect finish without removing it",
  },
  {
    src: FINISH_IMAGES[1].src,
    alt: "Kitchen worktop wrap finish samples for Sheffield homes",
    caption: "Finish choice affects both the look and the final quote",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation work before fitting vinyl film in Sheffield",
    caption: "Preparation around joins and cut-outs matters more than the headline price",
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
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Worktop wrap prices</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Worktop Wrap Cost in Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your kitchen doors are acceptable but the worktops make the room
              feel tired, a wrap can be a useful way to refresh the surface
              without removing sinks, units or half the kitchen. This guide
              explains realistic Sheffield worktop wrap costs, what changes the
              quote and when replacing the worktop is the better spend.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Worktop Quote"
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
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">Typical ranges</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                What should you budget for a worktop wrap?
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Our main{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  kitchen wrap pricing guide
                </Link>{" "}
                gives worktop wrapping a broad Sheffield range of £220-£850.
                That is still the right starting point, but worktops deserve
                their own explanation because a small straight run and a large
                kitchen with an island are very different jobs.
              </p>
              <p>
                Most quotes are shaped by the metres of surface, the number of
                cut-outs and the preparation needed around joins. A worktop near
                a sink in a busy S8 or S10 family kitchen may need more prep than
                a clean utility run, even if both look similar in photos.
              </p>
              <p>
                If you already know you want doors, drawers and worktops done
                together, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>{" "}
                page as well. Combining the work can be more efficient than
                pricing each surface as a separate visit.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {priceBands.map((band) => (
              <article
                key={band.title}
                className="rounded-3xl border border-ink/8 bg-linen/70 p-7"
              >
                <p className="font-heading text-3xl font-medium text-moss">
                  {band.range}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-medium">
                  {band.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {band.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">What changes the quote</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The awkward details matter more than the headline metre price
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Search results often talk about a simple price per metre. That can
              be helpful, but it does not tell the whole story. A Sheffield
              kitchen worktop quote should account for the surface condition,
              how many cuts the film needs and whether the finish has to wrap
              neatly around visible ends, corners and upstands.
            </p>
            <ul className="mt-8 grid gap-3">
              {quoteFactors.map((factor) => (
                <li
                  key={factor}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/70"
                >
                  {factor}
                </li>
              ))}
            </ul>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={pageImages[1].src}
                alt={pageImages[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              {pageImages[1].caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Local scenarios</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Where worktop wrapping makes sense in Sheffield
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                The best worktop wrap jobs are not always the biggest ones. They
                are the jobs where the existing surface is sound, the layout
                still works and the kitchen needs to look fresher without the
                cost, noise and waiting time of a replacement.
              </p>
              <p>
                We cover the same local areas listed on our{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  Sheffield areas page
                </Link>
                , including detailed guides for{" "}
                <Link href="/areas-covered/woodseats" className="font-medium text-moss link-underline">
                  Woodseats
                </Link>{" "}
                and{" "}
                <Link href="/areas-covered/crookes" className="font-medium text-moss link-underline">
                  Crookes
                </Link>
                . Photos are usually enough for an early steer before we confirm
                the exact price at survey.
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "worktop_cost_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} to talk through your worktop
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-4">
            {sheffieldExamples.map((example) => (
              <article
                key={example.title}
                className="rounded-3xl border border-ink/8 bg-mist/50 p-6"
              >
                <h3 className="font-heading text-2xl font-medium">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {example.body}
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
                src={pageImages[2].src}
                alt={pageImages[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              {pageImages[2].caption}
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">Wrap or replace?</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Sometimes the honest answer is replacement
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Wrapping is not a magic cover-up for failed worktops. If the
              surface has swollen badly around the sink, the joins are opening,
              or the chipboard underneath has blown, a wrap may only hide the
              problem briefly. A good quote should tell you that before any
              material is ordered.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              Where the existing laminate is flat and secure, wrapping can make
              sense against replacement because there is no skip, no old worktop
              disposal and usually no need to disconnect the sink for a full
              refit. For stone or quartz ambitions, it is also a lower-cost way
              to get a similar look while keeping the kitchen layout unchanged.
            </p>
            <div className="mt-8 rounded-3xl bg-linen p-7">
              <h3 className="font-heading text-2xl font-medium">
                We would pause before quoting if we saw:
              </h3>
              <ul className="mt-5 grid gap-3">
                {notWorthWrapping.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink/65">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Worktop cost questions</p>
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
          <p className="eyebrow text-linen/60">Free Sheffield quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want a clear price for your worktops?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos of the worktop, sink, hob, corners and any damaged
            edges. We will tell you whether wrapping is worth pricing properly
            and what range your Sheffield kitchen is likely to sit in.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Ask for a Worktop Survey"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer a form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and include your Sheffield postcode.
          </p>
        </div>
      </section>
    </>
  );
}
