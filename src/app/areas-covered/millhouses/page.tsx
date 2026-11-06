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

const pagePath = "/areas-covered/millhouses";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Millhouses Sheffield | S7 Wraps",
  description:
    "Kitchen wrapping in Millhouses, Sheffield for S7 homes near Millhouses Park, Abbeydale Road South, Archer Road, Carter Knowle and the Beauchief edge.",
  path: pagePath,
});

const localFitNotes = [
  {
    title: "Family kitchens near Millhouses Park",
    body: "Homes around Millhouses Park, Hutcliffe Wood Road and the River Sheaf corridor often need a finish that handles busy daily use rather than just looking sharp for a few photos.",
  },
  {
    title: "Abbeydale Road South access",
    body: "Abbeydale Road South is a practical route for surveys and materials, but parking, loading and timing can vary from the main road to the quieter side streets.",
  },
  {
    title: "S7 homes on the S8 edge",
    body: "Millhouses sits close to Beauchief, Carter Knowle, Woodseats and Ecclesall. We check the postcode and the actual kitchen before deciding whether doors, worktops or both make sense.",
  },
] as const;

const planningChecks = [
  "Parking and loading from Abbeydale Road South, Archer Road, Hutcliffe Wood Road or tighter residential side roads.",
  "Door edges, panels and plinths where family use, pets, buggies or regular cleaning have worn the original finish.",
  "Worktop joins, sink runs and kettle corners before recommending a worktop wrap.",
  "Whether the kitchen needs a warmer long-term finish, a bright family refresh or a neutral sale-ready update.",
  "How the finish will sit with flooring, wall tiles and light from park-side or valley-facing rooms.",
] as const;

const localMarkers = [
  "Millhouses Park and the boating lake",
  "Abbeydale Road South and the River Sheaf corridor",
  "Archer Road shops and supermarkets",
  "Carter Knowle, Abbeydale and Nether Edge edges",
  "Beauchief Abbey and Abbeydale Industrial Hamlet nearby",
  "Ecclesall Woods and Dore & Totley station further south",
] as const;

const finishChoices = [
  {
    label: "Calm matt cabinet doors",
    detail:
      "A soft matt finish suits many Millhouses kitchens because it looks settled, hides glare and works well in practical family spaces.",
  },
  {
    label: "Stone-effect counters",
    detail:
      "If the cupboards are sound but the laminate worktop is dragging the room down, a stone-effect wrap can make the biggest visible difference.",
  },
  {
    label: "Warm wood or sage tones",
    detail:
      "Natural tones can sit nicely with older south Sheffield homes, garden-facing kitchens and rooms that already have warmer floors or tiles.",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Millhouses in Sheffield?",
    answer:
      "Yes. We cover Millhouses, Abbeydale Road South, Archer Road, Hutcliffe Wood Road, Carter Knowle, the Beauchief edge and nearby S7 and S8 streets. Send your postcode with photos and we will confirm the visit area before booking a survey.",
  },
  {
    question: "Is kitchen wrapping suitable for family homes near Millhouses Park?",
    answer:
      "It can be, provided the doors, panels, carcasses and worktops are sound. Busy family kitchens need extra checks around handles, sink runs, kettle corners, bin cupboards and lower door edges before we recommend wrapping.",
  },
  {
    question: "Can you wrap worktops as well as cupboard doors in Millhouses?",
    answer:
      "Often, yes. We can quote for doors only, worktops only or a full kitchen wrap. Worktops need a close look first because deep damage, swollen joins or heavy heat marks may make replacement a better option.",
  },
  {
    question: "How much does a Millhouses kitchen wrap cost?",
    answer:
      "Most full Sheffield kitchen wraps start from around 1,250 pounds, with smaller door-only or worktop-only jobs costing less. A Millhouses quote depends on door count, worktop length, finish choice, preparation and access.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Millhouses, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Millhouses, S7 and nearby south Sheffield homes.",
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
      name: "Millhouses",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S7",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Abbeydale Road South" },
    { "@type": "Place", name: "Carter Knowle" },
    { "@type": "Place", name: "Beauchief" },
    { "@type": "Place", name: "Woodseats" },
    { "@type": "Place", name: "Ecclesall" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: GALLERY_IMAGES[3].src,
    alt: "Marble-effect worktop wrap suitable for a Millhouses Sheffield kitchen",
    caption: "A worktop wrap can lift a sound kitchen without changing the layout.",
  },
  {
    src: PROCESS_IMAGES[0].src,
    alt: "Sheffield kitchen before wrapping and surface checks",
    caption: "Before quoting, we check whether the existing kitchen is worth keeping.",
  },
  {
    src: FINISH_IMAGES[2].src,
    alt: "Kitchen wrap finish samples for Millhouses homes in Sheffield",
    caption: "Samples help choose a finish that suits the room, not just the trend.",
  },
] as const;

export default function MillhousesKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Millhouses", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="eyebrow">Millhouses kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Millhouses, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Millhouses kitchens often belong to solid south Sheffield homes
              where the room still works, but the doors, worktops or colour
              have started to date the whole space. A wrap can be the sensible
              middle ground between living with it and ripping everything out.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover homes around Millhouses Park, Abbeydale Road South,
              Archer Road, Carter Knowle and the Beauchief edge. Before we talk
              finishes, we check the surfaces properly and tell you straight if
              wrapping is not the right fix.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get a Millhouses Quote"
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Local judgement</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Not every Millhouses kitchen needs a new kitchen
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Current search results for kitchen wrapping in Sheffield tend to
              talk about speed, cost saving and less mess. Those are useful
              points, but the real decision starts at your kitchen door. If the
              carcasses are sound and the layout works, wrapping the visible
              surfaces may give you the change you want without weeks of
              disruption.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {localFitNotes.map((item) => (
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
            <p className="eyebrow">What we check</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              A Millhouses quote should start with condition, not colour
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A tired colour can be fixed. Failed surfaces are different. We
              look closely at edges, old foil, water damage, heat marks and
              worktop joins before saying whether a wrap is good value.
            </p>
            <ul className="mt-8 grid gap-3">
              {planningChecks.map((check) => (
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
        <div className="container-site grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="eyebrow">Millhouses coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Abbeydale Road South, the park and the Sheaf valley side streets
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                Millhouses Park sits between Abbeydale Road South and the
                railway, with the River Sheaf running through the valley. That
                gives the area a mix of main-road homes, family streets, flats
                and quieter roads towards Carter Knowle, Hutcliffe Wood and
                Beauchief.
              </p>
              <p>
                If you are nearby rather than right in Millhouses, these pages
                may help too:{" "}
                <Link href="/areas-covered/beauchief" className="font-medium text-moss link-underline">
                  Beauchief kitchen wrapping
                </Link>
                ,{" "}
                <Link href="/areas-covered/woodseats" className="font-medium text-moss link-underline">
                  Woodseats kitchen wrapping
                </Link>{" "}
                and{" "}
                <Link href="/areas-covered/ecclesall" className="font-medium text-moss link-underline">
                  Ecclesall kitchen wrapping
                </Link>
                .
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "millhouses_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for Millhouses kitchen wrapping advice
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
            <p className="eyebrow">Finish choice</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Pick a finish that suits a real south Sheffield home
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A showroom sample can look different once it is beside your floor,
              tiles, worktop and natural light. For Millhouses homes, we usually
              talk through the way the kitchen is used before narrowing down
              colours and textures.
            </p>
            <div className="mt-8 grid gap-4">
              {finishChoices.map((item) => (
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
              For scope and budget, read our{" "}
              <Link href="/services" className="font-medium text-moss link-underline">
                kitchen wrapping services
              </Link>{" "}
              and the{" "}
              <Link href="/pricing" className="font-medium text-moss link-underline">
                Sheffield pricing guide
              </Link>
              . If the counter is the main issue, the{" "}
              <Link
                href="/pricing/worktop-wrap-cost-sheffield"
                className="font-medium text-moss link-underline"
              >
                worktop wrap cost guide
              </Link>{" "}
              is a useful next read.
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
          <p className="eyebrow">Millhouses FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before wrapping a Millhouses kitchen
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
              <p className="eyebrow text-linen/60">Free Millhouses quote</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Want a straight answer on your Millhouses kitchen?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send clear photos of the full kitchen, close-ups of worn edges
                or worktop damage, and your postcode. We will explain whether a
                door wrap, worktop wrap or full kitchen wrap is worth pricing.
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
                notes about parking or shared access, and whether you are near
                Abbeydale Road South, the park, Carter Knowle or Beauchief.
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
