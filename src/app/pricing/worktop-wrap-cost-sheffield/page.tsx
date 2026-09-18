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

const pagePath = "/pricing/worktop-wrap-cost-sheffield";

export const metadata = pageMeta({
  title: "Worktop Wrap Cost Sheffield | Kitchen Worktop Wrapping Prices",
  description:
    "Guide to worktop wrap cost in Sheffield. See typical worktop-only price ranges, what affects quotes, and when wrapping beats replacement.",
  path: pagePath,
});

const priceBands = [
  {
    label: "Small straight run",
    price: "From around £220-£350",
    detail:
      "Often suits compact flats, galley kitchens or a short laminate run with simple edges and no awkward joins.",
  },
  {
    label: "Average Sheffield kitchen",
    price: "Around £350-£650",
    detail:
      "A common range for L-shaped or U-shaped worktops where sink, hob and upstand details need careful fitting.",
  },
  {
    label: "Larger or detailed worktop job",
    price: "Around £650-£850+",
    detail:
      "More likely when there are long runs, islands, breakfast bars, returns, extra panels or premium stone-effect finishes.",
  },
] as const;

const quoteFactors = [
  "Total length of worktop and whether it is straight, L-shaped, U-shaped or split across an island.",
  "Sink cut-outs, hob areas, tap holes, draining grooves, joins, upstands and breakfast bar edges.",
  "Current condition: swollen chipboard, open seams, heat burns and loose laminate can change the recommendation.",
  "Finish choice, because simple colours and detailed marble, stone or concrete effects can price differently.",
  "Access and parking around the property, especially on tighter terrace streets in Crookes, Walkley and Hillsborough.",
] as const;

const suitabilityChecks = [
  {
    title: "Wrap when the structure is sound",
    body: "Worktop wrapping makes sense when the existing surface is level, secure and dry, but the colour or pattern is letting the kitchen down.",
  },
  {
    title: "Replace when damage is too deep",
    body: "If the worktop has blown around the sink, lifted badly at the joins or moved away from the wall, a wrap may only hide a problem for a short time.",
  },
  {
    title: "Quote after photos or survey",
    body: "Photos help us spot the number of joins, edging details and any risk areas before we confirm whether a worktop-only job is worthwhile.",
  },
] as const;

const localExamples = [
  "A compact Kelham Island or city-centre flat where the units are fine but the dark laminate worktop dates the whole room.",
  "A Hillsborough or Walkley terrace with a narrow galley kitchen where avoiding a skip and heavy worktop delivery keeps the job simpler.",
  "A family kitchen in Woodseats, Beauchief or Mosborough where doors still look acceptable but the worktop has the wrong colour or shine.",
] as const;

const faqs = [
  {
    question: "How much does worktop wrapping cost in Sheffield?",
    answer:
      "Most suitable Sheffield worktop-only wrapping jobs sit roughly between £220 and £850. A small straight run may be near the lower end, while longer runs, islands, upstands, sink areas and detailed stone-effect finishes increase the price.",
  },
  {
    question: "Is worktop wrapping cheaper than replacing worktops?",
    answer:
      "Usually, yes. Wrapping keeps the existing worktop in place, so there is less removal, less waste and less disruption. Replacement can still be better if the worktop is swollen, unstable, badly water damaged or you want a different thickness or layout.",
  },
  {
    question: "Can you wrap only the worktops and leave the doors alone?",
    answer:
      "Yes. A worktop-only wrap is useful when the cupboards still suit the room but the surface looks dated. We can also quote for doors, panels or a full kitchen wrap if you want to compare options.",
  },
  {
    question: "How quickly can a Sheffield worktop wrap be fitted?",
    answer:
      "Many worktop-only installations can be completed in a day once the survey, measurements and materials are sorted. Larger kitchens, extra upstands or detailed preparation may take longer, and we confirm timing before you book.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Worktop wrap cost Sheffield",
  serviceType: "Kitchen worktop wrapping",
  description:
    "Worktop-only vinyl wrapping quotes for Sheffield kitchens, including laminate worktops, breakfast bars, islands, upstands and suitable sink or hob areas.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Sheffield",
    },
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Walkley" },
    { "@type": "Place", name: "Kelham Island" },
    { "@type": "Place", name: "Woodseats" },
    { "@type": "Place", name: "Beauchief" },
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "220",
    highPrice: "850",
    offerCount: "3",
    availability: "https://schema.org/InStock",
    url: `${SITE.url}${pagePath}`,
  },
  url: `${SITE.url}${pagePath}`,
};

export default function WorktopWrapCostSheffieldPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
            { name: "Worktop wrap cost Sheffield", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Worktop wrap pricing</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Worktop Wrap Cost in Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your kitchen cupboards are still solid but the worktop makes
              the whole room feel tired, a worktop-only wrap can be a sensible
              middle option. It changes the surface you see every day without
              ordering new slabs, lifting out the existing tops or turning the
              kitchen into a full refit.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              Most Sheffield worktop wrapping quotes depend on length, shape,
              joins, sink details and the condition of the surface underneath.
              This guide explains the usual cost bands, what pushes the price
              up or down, and when we would recommend replacement instead.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get a Worktop Quote"
              showCall
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src={SERVICE_IMAGES.worktops.src}
                alt="Marble-effect kitchen worktop wrap fitted in Sheffield"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Worktop wrapping changes the visible surface while keeping the
              existing kitchen layout.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Typical cost bands</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                What should you budget for a worktop-only wrap?
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                The table below is a guide, not a final quote. A short straight
                run in a flat near Kelham Island is a different job from a
                family kitchen with upstands, a breakfast bar and several joins
                in Woodseats or Beauchief.
              </p>
            </div>

            <div className="grid gap-4">
              {priceBands.map((band) => (
                <article
                  key={band.label}
                  className="rounded-3xl border border-ink/8 bg-linen/70 p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-heading text-2xl font-medium">
                      {band.label}
                    </h3>
                    <p className="font-heading text-2xl font-medium text-moss">
                      {band.price}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {band.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">What changes the quote</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The details that matter more than the postcode
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                Search results often give a simple per-metre figure, but real
                kitchen worktops are rarely that neat. The price changes when a
                fitter has to work around sinks, taps, hobs, upstands, rounded
                corners or long joins. Those details decide how much preparation
                is needed and how much material is wasted.
              </p>
              <p>
                Sheffield homes add their own practical questions. Terraced
                streets in Crookes, Walkley and Hillsborough can make heavy
                replacement deliveries awkward, while city-centre and Kelham
                Island flats often have lift, parking or loading limits. A wrap
                is lighter and cleaner, but the surface still has to be suitable.
              </p>
              <p>
                If you want the wider cost picture, start with our{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                . For what can be wrapped beyond the worktop, see{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-linen p-6 shadow-sm sm:p-8">
            <h3 className="font-heading text-3xl font-medium">
              We check before pricing
            </h3>
            <ul className="mt-6 space-y-3">
              {quoteFactors.map((factor) => (
                <li
                  key={factor}
                  className="rounded-2xl bg-mist/55 px-5 py-4 text-sm leading-relaxed text-ink/70"
                >
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Wrap or replace?</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Cheaper is only useful when the worktop is worth keeping
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Worktop wrapping is usually cheaper than replacing, and it avoids
              much of the mess of taking old tops out. It is not magic, though.
              The existing surface has to be firm enough to carry the new finish
              cleanly, especially around sink cut-outs where water damage often
              starts.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {suitabilityChecks.map((item) => (
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
                src={GALLERY_IMAGES[3].src}
                alt="Light marble-effect worktop wrap for a Sheffield kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Lighter stone effects can brighten a kitchen without changing the
              cabinets.
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">Local examples</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Sheffield kitchens where worktop wrapping often makes sense
            </h2>
            <div className="mt-6 space-y-3">
              {localExamples.map((example) => (
                <p
                  key={example}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/70 shadow-sm"
                >
                  {example}
                </p>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-ink/65">
              You can also browse our{" "}
              <Link href="/areas-covered" className="font-medium text-moss link-underline">
                Sheffield areas covered
              </Link>{" "}
              if you want to check local service pages before sending photos.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Survey first</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              How to get a useful quote, not a vague estimate
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Send clear photos of the full worktop run, the sink, the hob,
              corners, joins and any damaged areas. Include your Sheffield
              postcode and say whether you want the worktop only or might also
              want doors and panels priced.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "worktop_cost_quote_section" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} if you would rather talk it through
            </TrackedLink>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src={PROCESS_IMAGES[1].src}
                alt="Kitchen worktop preparation before vinyl wrapping in Sheffield"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Preparation and edge checks are part of a reliable worktop wrap
              quote.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Worktop cost questions</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl bg-linen/80 open:bg-linen"
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
          <p className="eyebrow text-linen/60">Free worktop quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want a clear price for your Sheffield worktops?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos of your worktops and your postcode. We will tell you
            whether wrapping is realistic, what affects the price and whether a
            replacement would be the more sensible route.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Ask for a Worktop Quote"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer a form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and include a few photos of the sink, hob and worktop edges.
          </p>
        </div>
      </section>
    </>
  );
}
