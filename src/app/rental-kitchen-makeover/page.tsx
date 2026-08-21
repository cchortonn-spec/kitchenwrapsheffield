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

export const metadata = pageMeta({
  title: "Rental Kitchen Makeover Sheffield | Landlord Kitchen Wraps",
  description:
    "Rental kitchen makeover in Sheffield for landlords, tenants and letting agents. Refresh doors, cupboards and worktops without a full refit.",
  path: "/rental-kitchen-makeover",
});

const pagePath = "/rental-kitchen-makeover";

const pageImages = [
  {
    src: SERVICE_IMAGES.full.src,
    alt: "Finished kitchen wrap suitable for a Sheffield rental kitchen makeover",
    caption:
      "A full wrap can refresh the parts tenants notice first: doors, panels and suitable worktops.",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield rental property",
    caption:
      "Preparation matters in rental kitchens because edges, joins and high-use areas take the punishment.",
  },
  {
    src: GALLERY_IMAGES[2].src,
    alt: "Light cabinet wrap finish for a clean Sheffield rental kitchen",
    caption:
      "Light, simple finishes often photograph well for listings and feel easy to keep clean.",
  },
] as const;

const rentalScenarios = [
  {
    title: "Between tenancies",
    body: "If a property is empty for a short handover window, wrapping can improve the kitchen without waiting on a full rip-out, skip, plumber, plasterer and new carcass delivery.",
  },
  {
    title: "HMO and student lets",
    body: "Shared kitchens around Ecclesall Road, Crookes, Broomhill and Crookesmoor get heavy use. We check condition first, then recommend practical finishes that are easy to wipe and not too precious.",
  },
  {
    title: "City flats and short lets",
    body: "In Kelham Island, the city centre and around West Bar, a cleaner-looking kitchen can make listing photos feel sharper without major works in a managed apartment block.",
  },
] as const;

const beforeQuoteChecks = [
  "Who owns the property and who can approve the work - landlord, agent, tenant or portfolio manager.",
  "Whether the doors are solid, swollen, delaminating or already peeling at the edges.",
  "Worktop condition around the sink, hob, joins and upstands before we quote a worktop wrap.",
  "Access, parking and fitting times around busy rental streets, tram routes and apartment buildings.",
  "How neutral the finish needs to be for future tenants, resale photos or a wider property portfolio.",
] as const;

const localRentalAreas = [
  "Ecclesall Road, Sharrow Vale and Endcliffe Park side streets",
  "Crookes, Broomhill, Crookesmoor and Walkley student-house routes",
  "Kelham Island, West Bar, Neepsend and city-centre flats",
  "Hillsborough and tram-linked S6 rentals",
  "Nether Edge, Woodseats and family rental homes",
  "Sheffield Hallam and University of Sheffield commuter areas",
] as const;

const faqs = [
  {
    question: "Can a tenant arrange a kitchen wrap in Sheffield?",
    answer:
      "Only with written permission from the landlord or managing agent. Wrapping changes the finish of doors, panels or worktops, so we need the property owner to approve the work before anything is booked.",
  },
  {
    question: "Is wrapping a good option between tenancies?",
    answer:
      "Often, yes. If the kitchen is structurally sound, a wrap can refresh the visible surfaces without a full refit. That can be useful when a Sheffield rental needs to photograph better and go back on the market quickly.",
  },
  {
    question: "Will a wrap cope with student or HMO use?",
    answer:
      "A professional wrap can work well in high-use kitchens, but condition matters. We check edges, handles, hinges, sink areas and existing damage before saying yes. If the base is too poor, we will tell you rather than hide a problem.",
  },
  {
    question: "Which finishes suit rental kitchens best?",
    answer:
      "Most landlords choose simple, neutral finishes such as soft matt grey, warm white, muted green, wood effect or stone-effect worktops. They tend to suit more tenants and keep listing photos clean.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rental kitchen makeover in Sheffield",
  serviceType: "Kitchen vinyl wrapping for rental properties",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Sheffield rental homes, landlord properties, HMOs, city flats and tenant-approved makeovers.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
  },
  areaServed: [
    { "@type": "City", name: "Sheffield" },
    { "@type": "Place", name: "Ecclesall Road" },
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Broomhill" },
    { "@type": "Place", name: "Kelham Island" },
    { "@type": "Place", name: "Hillsborough" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function RentalKitchenMakeoverPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Rental Kitchen Makeover", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Rental kitchen makeover</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Rental Kitchen Makeovers in Sheffield
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-ink/65">
              <p>
                If a rental kitchen is clean and solid but looks dated, you do
                not always need a new kitchen. A vinyl wrap can refresh doors,
                drawer fronts, end panels and suitable worktops while the
                existing layout stays in place.
              </p>
              <p>
                We help Sheffield landlords, letting agents and tenants with
                permission who want a sharper kitchen without weeks of mess. It
                is especially useful for student lets, HMOs, city flats and
                family rentals where the kitchen needs to look cared for before
                viewings.
              </p>
            </div>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Rental Kitchen Quote"
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
                sizes="(max-width: 1024px) 100vw, 48vw"
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
              <p className="eyebrow">Why rentals need a different plan</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A rental kitchen has to look good, clean easily and avoid long
                voids
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Sheffield has several different rental markets, and they do not
                all need the same kitchen. A shared house off Ecclesall Road is
                not the same as a Kelham Island apartment, and a Hillsborough
                terrace near the tram is not the same as a family let in Nether
                Edge or Woodseats.
              </p>
              <p>
                The common thread is simple: tenants judge kitchens quickly. Old
                cream doors, scratched worktops, tired plinths and mismatched
                panels can make the whole property feel harder to let, even when
                the carcasses underneath are fine. Wrapping deals with the
                visible finish without changing the plumbing, electrics or room
                layout.
              </p>
              <p>
                If you are weighing it up, start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , compare likely ranges on the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield pricing guide
                </Link>
                , or check the{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>
                . This page is here for the rental decision specifically.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {rentalScenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="rounded-3xl border border-ink/8 bg-linen/70 p-7"
              >
                <h3 className="font-heading text-2xl font-medium">
                  {scenario.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {scenario.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Landlords, tenants and agents</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Clear approval first, then a straight quote
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                For landlords and agents, the question is usually commercial:
                will this improve the kitchen enough without tying up the
                property? We keep the quote practical. Tell us whether it is a
                single buy-to-let, an HMO, a managed flat or part of a small
                portfolio, and we will price what actually needs doing.
              </p>
              <p>
                For tenants, the answer starts with permission. We will not
                advise a tenant to wrap a rented kitchen without the landlord or
                agent agreeing in writing. If approval is in place, we can help
                with a tidy, professional finish instead of DIY sticky film that
                peels at the kettle, sink or hob.
              </p>
            </div>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "rental_permission_section" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} to talk through a rental kitchen
            </TrackedLink>
          </div>

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
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Before we price it</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The checks that stop a rental refresh becoming a false economy
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Wrapping is not magic. It works when the kitchen underneath is
              sound enough to take a proper finish. A quick photo quote can
              start the conversation, but these are the details we look at
              before recommending the job.
            </p>
          </div>

          <div>
            <ul className="space-y-3">
              {beforeQuoteChecks.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
                >
                  {item}
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

      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Sheffield rental areas</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Useful for student streets, city apartments and family lets
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              We cover rental properties across Sheffield, from Ecclesall Road
              and Broomhill near the universities to Kelham Island flats,
              Hillsborough terraces and south Sheffield family homes. If the
              property is just outside these patches, send the postcode and we
              will tell you honestly whether we can help.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localRentalAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-ink/8 bg-linen px-5 py-4 text-sm font-medium text-ink/75"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Rental kitchen questions</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Frequently asked questions
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
          <p className="eyebrow text-linen/60">Free rental kitchen quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want a Sheffield rental kitchen to look sharper without a full refit?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos, the Sheffield postcode and who can approve the work. We
            will tell you what is realistic, what is not, and what a sensible
            wrap would include.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Ask for a Free Rental Quote"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer the form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and mention landlord, tenant, agent or HMO in your message.
          </p>
        </div>
      </section>
    </>
  );
}
