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
  title: "Kitchen Wrapping Crookes Sheffield | S10 Kitchen Wraps",
  description:
    "Kitchen wrapping in Crookes, Sheffield for S10 terrace kitchens, family homes and rental refreshes near Crookes Road, Commonside and Bole Hills.",
  path: "/areas-covered/crookes",
});

const pagePath = "/areas-covered/crookes";

const quickChecks = [
  "Door edges, handles and hinges on older terrace kitchens",
  "Worktop joins, sink cut-outs and upstands before any film is ordered",
  "Parking and access around Crookes, Commonside, Walkley and Broomhill routes",
  "Whether a landlord refresh, sale prep or long-term family kitchen needs a different finish",
];

const localSituations = [
  {
    title: "Student-let and rental kitchens",
    body: "Crookes and Crookesmoor have plenty of rentals where the kitchen needs to look clean and cared for without taking the property out of use for a long refit.",
  },
  {
    title: "Terraces with sound carcasses",
    body: "In many S10 terraces the layout is compact but practical. If the units are sturdy, wrapping can change the colour and worktops while keeping the room working as it already does.",
  },
  {
    title: "Family homes heading towards Bole Hills",
    body: "For homes near Bole Hills, Northfield Road or the Walkley edge, a wrap can freshen a busy kitchen without skips, plaster dust or weeks of trades coming through the house.",
  },
];

const nearbyAreas = [
  "Crookes Road and Crookes high street",
  "Commonside and Crookesmoor",
  "Bole Hills and Northfield Road",
  "Walkley, Broomhill and Crosspool edges",
  "Nairn Street and St Thomas' Church area",
  "Mulehouse Road and local side streets",
];

const faqs = [
  {
    question: "Do you cover Crookes and Crookesmoor?",
    answer:
      "Yes. We cover Crookes, Crookesmoor, Commonside, Walkley edge, Broomhill edge and nearby S10 streets. If you are between Crookes, Fulwood or Hillsborough, send your postcode and we will confirm the best survey slot.",
  },
  {
    question: "Is kitchen wrapping good for Crookes rental properties?",
    answer:
      "Often, yes. If the units are sound, wrapping doors and worktops can make a rental kitchen photograph better and feel cleaner without the cost and downtime of a full replacement. We still check condition first, because swollen or loose doors are not worth hiding.",
  },
  {
    question: "Can you work around tight parking on Crookes streets?",
    answer:
      "Usually. A wrap does not need a skip or large deliveries, which helps on busy streets around Crookes Road, Commonside and the roads down towards Walkley. Tell us about permits, access or timing when you enquire.",
  },
  {
    question: "How much does a Crookes kitchen wrap cost?",
    answer:
      "Most Sheffield full kitchen wraps start from around £1,250, with door-only or worktop-only jobs costing less. The exact Crookes price depends on the number of doors, worktop length, chosen finish and the condition we find at survey.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Crookes, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard and worktop vinyl wrapping for Crookes, Crookesmoor and nearby S10 homes in west Sheffield.",
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
      name: "Crookes",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S10",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Crookesmoor" },
    { "@type": "Place", name: "Walkley" },
    { "@type": "Place", name: "Broomhill" },
    { "@type": "Place", name: "Crosspool" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: GALLERY_IMAGES[4].src,
    alt: "Black marble-effect worktop wrap suited to a Crookes Sheffield kitchen",
    caption: "Dark stone-effect worktops can sharpen a compact S10 kitchen",
  },
  {
    src: SERVICE_IMAGES.doors.src,
    alt: "Navy kitchen door wrapping for a Sheffield terrace kitchen",
    caption: "Door wraps refresh the visible surfaces without changing the layout",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield home",
    caption: "Careful preparation decides whether the finish lasts",
  },
] as const;

export default function CrookesKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Crookes", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Crookes kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Crookes, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Crookes kitchens work hard. Some are compact terrace kitchens off
              Crookes Road, some are family rooms heading towards Bole Hills, and
              some are rentals around Commonside and Crookesmoor that need to
              look fresh between tenants. If the units are still sound, wrapping
              can change the doors, drawer fronts, end panels and worktops
              without ripping the kitchen out.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Crookes Quote"
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
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Why Crookes is different</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A practical refresh for busy S10 homes
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Crookes sits between student-heavy Crookesmoor, family streets
                towards Crosspool, and the quieter roads looking over Rivelin and
                Loxley from Bole Hills. That mix matters. A kitchen wrap for a
                rental flat is not always the same decision as a wrap for a home
                you plan to stay in for years.
              </p>
              <p>
                The common problem is usually simple: the kitchen is not broken,
                but the finish makes the whole room feel tired. Gloss cream doors
                have yellowed, laminate worktops are marked, or dark units make a
                narrow room feel smaller. Wrapping is useful when the carcasses,
                doors and worktops can be prepared properly and you want a better
                look without weeks of disruption.
              </p>
              <p>
                Before you decide, it is worth comparing our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>{" "}
                with the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield pricing guide
                </Link>
                . If you are still checking whether we cover your part of west
                Sheffield, the main{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas covered page
                </Link>{" "}
                gives the wider service area.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {localSituations.map((situation) => (
              <article
                key={situation.title}
                className="rounded-3xl border border-ink/8 bg-linen/70 p-7"
              >
                <h3 className="font-heading text-2xl font-medium">
                  {situation.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {situation.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Survey-first advice</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              We check the boring details before talking finishes
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good kitchen wrap is not just a colour choice. Around Crookes,
              older houses can have slightly uneven walls, tight galley layouts
              or past DIY repairs. We look at the kitchen in front of us, then
              tell you plainly whether wrapping is the right spend.
            </p>
            <ul className="mt-8 grid gap-3">
              {quickChecks.map((check) => (
                <li
                  key={check}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/70"
                >
                  {check}
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
            <p className="eyebrow">Local coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Around Crookes, Commonside and Bole Hills
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                The centre of Crookes is focused around Crookes and Crookes Road,
                with Commonside pulling in the Crookesmoor side. Bole Hills is a
                useful local marker too, especially for homes on the north and
                west side of the suburb where parking and access can change from
                street to street.
              </p>
              <p>
                We also work nearby in{" "}
                <Link href="/areas-covered/fulwood" className="font-medium text-moss link-underline">
                  Fulwood
                </Link>{" "}
                and{" "}
                <Link href="/areas-covered/hillsborough" className="font-medium text-moss link-underline">
                  Hillsborough
                </Link>
                , so Crookes is a normal local survey area rather than a special
                trip. Send photos first if you want a quick steer before booking
                anything in.
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "crookes_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for Crookes kitchen wrapping advice
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {nearbyAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-ink/8 bg-mist/50 px-5 py-4 text-sm font-medium text-ink/75"
              >
                {area}
              </div>
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
            <p className="eyebrow">What happens next</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Photos, survey, then a clear quote
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Start with photos if that is easiest. We can often spot obvious
              problems from door edges, worktop joins or peeling panels before
              arranging a visit. If it looks suitable, we bring samples, discuss
              sensible finishes for your room and give you a clear quote for the
              agreed scope.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              Most local kitchen wraps are measured in days, not weeks. You keep
              the layout, avoid the skip, and get a room that feels cleaner and
              more current without pretending it is a brand-new kitchen refit.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Crookes questions</p>
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
          <p className="eyebrow text-linen/60">Free Crookes quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want a straight answer on your Crookes kitchen?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send a few photos or book a free survey. We will tell you whether
            wrapping is a good fit, what it is likely to cost and how quickly it
            can be done.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Ask for a Free Survey"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer typing it out? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact form
            </Link>{" "}
            and include your Crookes or S10 postcode.
          </p>
        </div>
      </section>
    </>
  );
}
