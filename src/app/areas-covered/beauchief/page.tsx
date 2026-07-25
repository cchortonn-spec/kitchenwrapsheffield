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
  title: "Kitchen Wrapping Beauchief Sheffield | S8 Kitchen Wraps",
  description:
    "Kitchen wrapping in Beauchief, Sheffield. Door, cupboard and worktop wraps for S8 homes near Beauchief Abbey, Abbey Lane, Greenhill and Meadowhead.",
  path: "/areas-covered/beauchief",
});

const pagePath = "/areas-covered/beauchief";

const pageImages = [
  {
    src: SERVICE_IMAGES.full.src,
    alt: "Full kitchen wrap finish suited to a Beauchief Sheffield home",
    caption: "Doors, panels and worktops can be planned as one clean refresh",
  },
  {
    src: GALLERY_IMAGES[3].src,
    alt: "Light marble-effect worktop wrap for a Sheffield S8 kitchen",
    caption: "Lighter worktops can help south-facing and shaded rooms feel fresher",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield home",
    caption: "Preparation comes first, especially on older doors and worktops",
  },
] as const;

const localChecks = [
  {
    title: "Good for settled layouts",
    body: "Beauchief homes often have kitchens that work day to day, but the finish no longer matches the rest of the house. Wrapping suits that middle ground: keep the layout, change the surfaces.",
  },
  {
    title: "Less fuss around Abbey Lane",
    body: "A wrap does not need a skip, a large carcass delivery or weeks of trades. That helps around Abbey Lane, Beauchief Abbey Lane, Abbeydale Road South and quieter residential streets.",
  },
  {
    title: "Useful before selling or letting",
    body: "If a kitchen near Greenhill, Meadowhead or Millhouses is sound but photographs dark or tired, a door and worktop wrap can lift it without committing to a full replacement.",
  },
] as const;

const surveyFocus = [
  "Door edges, handle holes, hinges and any old foil or laminate lifting before we price the wrap.",
  "Worktop joins, sink areas, hob splash zones and upstands if you want a marble, stone or wood-effect finish.",
  "Natural light and room direction, because homes near Beauchief Abbey, Parkbank Wood or Chancet Wood can feel very different through the day.",
  "Access, parking and timing around Abbey Lane, Abbeydale Road South, Meadowhead, Greenhill and school-run routes.",
] as const;

const nearbyAreas = [
  "Beauchief Abbey and Beauchief Abbey Lane",
  "Beauchief Hall and the golf course side",
  "Abbey Lane and Abbeydale Road South",
  "Greenhill, Chancet Wood and Meadowhead",
  "Millhouses and the Abbeydale corridor",
  "Bradway, Lowedges and nearby S8 homes",
] as const;

const faqs = [
  {
    question: "Do you cover Beauchief and the S8 postcode?",
    answer:
      "Yes. We cover Beauchief, Greenhill, Meadowhead, Chancet Wood, Millhouses, Bradway, Lowedges and nearby S8 streets. If your postcode sits just outside the area, send it over and we will confirm before arranging a survey.",
  },
  {
    question: "Is kitchen wrapping suitable for Beauchief family homes?",
    answer:
      "Often, yes. If the kitchen layout works and the units are sound, wrapping can refresh doors, drawer fronts, panels and suitable worktops without a full rip-out. We check swelling, peeling, loose edges and surface damage before recommending it.",
  },
  {
    question: "Can you wrap worktops as well as doors in Beauchief?",
    answer:
      "Yes, provided the worktop is in the right condition. We look closely at joins, sink cut-outs, hob areas and upstands because those details decide whether a worktop wrap will finish cleanly and last properly.",
  },
  {
    question: "How does wrapping compare with replacing a Beauchief kitchen?",
    answer:
      "Wrapping keeps the existing layout and sound units, so it is usually quicker, cleaner and less disruptive than replacing. Replacement is better if the carcasses are failing, the layout needs changing or there is damage a wrap cannot hide.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Beauchief, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Beauchief, Greenhill, Meadowhead, Chancet Wood and nearby S8 homes in Sheffield.",
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
      name: "Beauchief",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S8",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Greenhill" },
    { "@type": "Place", name: "Meadowhead" },
    { "@type": "Place", name: "Chancet Wood" },
    { "@type": "Place", name: "Millhouses" },
    { "@type": "Place", name: "Bradway" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function BeauchiefKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Beauchief", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Beauchief kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Beauchief, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your Beauchief kitchen still works but the finish feels tired,
              wrapping can change the doors, drawer fronts, end panels and
              suitable worktops without ripping out the whole room.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover S8 homes around Beauchief Abbey, Beauchief Hall, Abbey
              Lane, Abbeydale Road South, Greenhill, Meadowhead, Chancet Wood
              and Millhouses. We will tell you straight if wrapping is sensible
              for your kitchen - and if it is not.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Beauchief Quote"
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Why Beauchief asks about wrapping</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A practical refresh for homes near Abbey Lane and the S8 edge
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Beauchief has a different feel from the busier parts of
                Sheffield. Around Beauchief Abbey, Beauchief Hall and the golf
                course side, you get older stone, mature trees and quieter
                streets. Head towards Greenhill, Chancet Wood and Meadowhead and
                you see practical family homes where the kitchen often has a
                good layout but dated doors or worktops.
              </p>
              <p>
                That is the kind of kitchen where wrapping is worth a proper
                look. If the carcasses are firm and the surfaces can be prepared
                cleanly, a wrap changes what you see every day while leaving the
                working room in place. It is not about hiding damage. It is
                about avoiding a full refit when the structure does not need one.
              </p>
              <p>
                If you are comparing options, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or browse the wider{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>
                . This page explains the local fit for Beauchief rather than
                repeating a generic Sheffield page.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {localChecks.map((item) => (
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
            <p className="eyebrow">Local detail</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Planned around local roads, green space and real kitchen condition
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                Beauchief sits close to some of Sheffield&apos;s best-known
                local heritage: Beauchief Abbey, the Beauchief Hall Conservation
                Area and the woodland running towards Parkbank Wood and Chancet
                Wood. Homes nearby can have older details, sloping plots and
                kitchens that have been modernised in stages.
              </p>
              <p>
                Further along Abbeydale Road South, towards Millhouses and the
                A621 route, access and timing can matter. A kitchen wrap keeps
                the job lighter than a replacement because we are not bringing in
                new carcasses or filling a skip. We still plan the survey and
                fitting properly so the job runs neatly.
              </p>
            </div>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "beauchief_local_detail" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} to talk through your Beauchief kitchen
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Survey first</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              We check the details that decide whether the wrap will last
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good Beauchief quote is not just a door count. The finish only
              works if the kitchen underneath is suitable, so we look closely
              before any vinyl is ordered.
            </p>
          </div>

          <div>
            <ul className="space-y-3">
              {surveyFocus.map((item) => (
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
            <p className="eyebrow">Beauchief and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Local coverage across south Sheffield
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Beauchief sits between several patches we already cover. If you
              are comparing nearby guides, our pages for{" "}
              <Link href="/areas-covered/woodseats" className="font-medium text-moss link-underline">
                kitchen wrapping in Woodseats
              </Link>{" "}
              and{" "}
              <Link href="/areas-covered/dore" className="font-medium text-moss link-underline">
                kitchen wrapping in Dore
              </Link>{" "}
              may also be useful.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nearbyAreas.map((area) => (
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
          <p className="eyebrow">Beauchief questions</p>
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
          <p className="eyebrow text-linen/60">Free local quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want a straight answer on your Beauchief kitchen?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos, include your S8 postcode and tell us whether you are
            thinking about doors, worktops or the full kitchen. We will tell you
            what is realistic before you commit.
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
            Prefer a form? Use the main{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and mention Beauchief, S8 or your nearest street.
          </p>
        </div>
      </section>
    </>
  );
}
