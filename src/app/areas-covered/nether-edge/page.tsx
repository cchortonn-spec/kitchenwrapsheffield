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

export const metadata = pageMeta({
  title: "Kitchen Wrapping Nether Edge Sheffield | S7 Kitchen Wraps",
  description:
    "Kitchen wrapping in Nether Edge, Sheffield. Door, cupboard and worktop wraps for S7 homes around Nether Edge Road, Machon Bank, Kenwood and Sharrow.",
  path: "/areas-covered/nether-edge",
});

const pagePath = "/areas-covered/nether-edge";

const pageImages = [
  {
    src: GALLERY_IMAGES[5].src,
    alt: "Completed kitchen wrap suited to a Nether Edge period home in Sheffield",
    caption: "A clean wrap finish can update the room while keeping sound units",
  },
  {
    src: FINISH_IMAGES[0].src,
    alt: "Kitchen wrap colour samples for Nether Edge Sheffield homes",
    caption: "Samples help you judge colour against older joinery and natural light",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield S7 kitchen",
    caption: "The preparation decides whether the finished wrap looks sharp",
  },
] as const;

const conditionChecks = [
  {
    title: "Older doors and previous repairs",
    body: "Nether Edge has plenty of Victorian, Edwardian and converted homes where kitchens have been updated in stages. We check old paint layers, loose trims, hinges and edge damage before recommending a wrap.",
  },
  {
    title: "Worktops in busy family rooms",
    body: "A stone, marble or warmer wood-effect worktop wrap can make a big difference, but only if the existing surface is sound around the sink, hob, joins and upstands.",
  },
  {
    title: "Access on leafy side roads",
    body: "Streets around Nether Edge Road, Kenwood and Brincliffe can be tight or permit-heavy. Wrapping keeps deliveries light and avoids the skip a full refit often needs.",
  },
] as const;

const finishGuidance = [
  "Soft matt greens, clay tones and warm neutrals often sit well in rooms with original features or darker timber.",
  "Stone-effect worktops can sharpen older cabinets without making a character kitchen feel too glossy or new-build.",
  "For flats and rental kitchens nearer Sharrow or Abbeydale Road, a simple door-and-worktop refresh can make the room photograph cleaner.",
  "If the existing door profile is too detailed, swollen or peeling, we will say so before quoting rather than forcing the wrong finish.",
] as const;

const localCoverage = [
  "Nether Edge Road and Machon Bank",
  "Kenwood and Cherry Tree Hill side",
  "Chelsea Park and Brincliffe Edge",
  "Psalter Lane and Sharrow Vale edge",
  "Abbeydale Road and Broadfield Park",
  "Nearby S7 homes towards Highfield and Millhouses",
] as const;

const faqs = [
  {
    question: "Do you cover Nether Edge and S7?",
    answer:
      "Yes. We cover Nether Edge, Kenwood, Brincliffe, Sharrow, Abbeydale Road, Psalter Lane and nearby S7 streets. If your address sits on the edge of S7 or S11, send your postcode and we will confirm coverage.",
  },
  {
    question: "Is wrapping suitable for older Nether Edge kitchens?",
    answer:
      "Often, yes, but the survey matters. Many Nether Edge homes have sound cabinets with dated doors or worktops. If the surfaces are flat, stable and dry, wrapping can work well. If there is swelling, loose laminate or a very detailed door profile, repair or replacement may be better.",
  },
  {
    question: "Can you help choose finishes for a period home?",
    answer:
      "Yes. We can bring samples and talk through matt colours, wood effects and stone-effect worktops in the actual kitchen light. That is especially useful in Nether Edge homes with deeper rooms, garden shade or older timber details.",
  },
  {
    question: "How disruptive is a kitchen wrap near Nether Edge Road or Machon Bank?",
    answer:
      "A wrap is usually much lighter than a full refit. There is no skip, no carcass delivery and no long run of different trades. We still plan parking, access and timing properly, especially around busier stretches near Nether Edge Road, Machon Bank and Abbeydale Road.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Nether Edge, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, end panel and worktop vinyl wrapping for Nether Edge, Kenwood, Sharrow, Brincliffe and nearby S7 homes in Sheffield.",
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
      name: "Nether Edge",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S7",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Kenwood" },
    { "@type": "Place", name: "Brincliffe" },
    { "@type": "Place", name: "Sharrow" },
    { "@type": "Place", name: "Abbeydale Road" },
    { "@type": "Place", name: "Psalter Lane" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function NetherEdgeKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Nether Edge", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Nether Edge kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Nether Edge, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Got a solid Nether Edge kitchen that no longer suits the house?
              Wrapping can refresh doors, drawers, end panels and suitable
              worktops without pulling out units that are still doing their job.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover S7 homes around Nether Edge Road, Machon Bank Road,
              Kenwood, Chelsea Park, Psalter Lane, Brincliffe Edge, Sharrow and
              the Abbeydale Road side. The first step is a straight check of
              condition, not a hard sell.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Nether Edge Quote"
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">S7 homes with character</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A careful refresh for kitchens that are too good to rip out
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Nether Edge is not a copy-and-paste suburb. Around the village
                centre at Nether Edge Road and Machon Bank Road you see older
                houses, converted flats, family kitchens and character rooms that
                have been changed bit by bit over the years. Head towards
                Kenwood, Chelsea Park or Brincliffe Edge and the kitchens can be
                larger, darker, more traditional, or full of awkward corners.
              </p>
              <p>
                That is exactly where kitchen wrapping can make sense. If the
                carcasses are firm and the doors can be prepared properly, you
                can keep the layout and change the visible finish. No skip
                outside. No long rip-out. No replacing a working kitchen just
                because the colour or worktop looks tired.
              </p>
              <p>
                Start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , compare the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or browse the wider{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>
                . This Nether Edge page is here to explain the local fit, not
                repeat the same generic wrapping pitch.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {conditionChecks.map((item) => (
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
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Local survey detail</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Planned around period rooms, parking and everyday use
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                The official Nether Edge Conservation Area is known for leafy
                streets and Victorian and Edwardian buildings. In kitchen terms,
                that often means older joinery, deeper rooms, previous refits
                and surfaces that need a proper look before anyone promises a
                perfect finish.
              </p>
              <p>
                Homes nearer Sharrow, Abbeydale Road and Broadfield Park can
                have a different problem: the kitchen may be smaller, rented, or
                part of a flat conversion where you want the room looking cleaner
                without taking on a full replacement. We price the job around
                what is actually needed - doors only, worktops only, or a full
                kitchen wrap.
              </p>
            </div>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "nether_edge_local_detail" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} to talk through your S7 kitchen
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
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Finish choices</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              We help the new finish sit naturally in the room
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A smart wrap should not feel bolted on. In Nether Edge homes,
              finish choice is often about softening a dated kitchen while still
              respecting the room around it.
            </p>
            <figure className="mt-7 overflow-hidden rounded-[2rem] bg-linen shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src={pageImages[2].src}
                  alt={pageImages[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-ink/60">
                {pageImages[2].caption}
              </figcaption>
            </figure>
          </div>

          <ul className="space-y-3">
            {finishGuidance.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Nether Edge and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Local coverage across S7 and the south-west edge
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              We regularly quote across Sheffield, so Nether Edge sits well
              within our patch. If you are comparing nearby areas, you can also
              read our guides to{" "}
              <Link href="/areas-covered/crookes" className="font-medium text-moss link-underline">
                kitchen wrapping in Crookes
              </Link>{" "}
              and{" "}
              <Link href="/areas-covered/woodseats" className="font-medium text-moss link-underline">
                kitchen wrapping in Woodseats
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localCoverage.map((area) => (
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
          <p className="eyebrow">Nether Edge questions</p>
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
            Want a straight answer on your Nether Edge kitchen?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos, include your S7 postcode and tell us whether you are
            thinking about doors, worktops or the full kitchen. We will tell you
            what looks realistic before you commit.
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
            and mention Nether Edge, S7 or your nearest street.
          </p>
        </div>
      </section>
    </>
  );
}
