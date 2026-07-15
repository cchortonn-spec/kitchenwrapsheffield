import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Fulwood | S10 Kitchen Wrap Quotes",
  description:
    "Kitchen wrapping in Fulwood, S10. Door, cupboard and worktop wraps for homes near Fulwood Road, Forge Dam, Whiteley Woods and Porter Valley.",
  path: "/areas-covered/fulwood",
});

const pagePath = "/areas-covered/fulwood";

const fitChecks = [
  {
    title: "Older doors and frames",
    body: "Fulwood has plenty of established kitchens where the layout still works. We check door edges, hinges and carcasses before saying a wrap is sensible.",
  },
  {
    title: "Worktops and splashbacks",
    body: "A dark or marked worktop can make the whole room feel dated. We look at joins, sink cut-outs and upstands so the finish is planned properly.",
  },
  {
    title: "Access and timing",
    body: "Around Fulwood Road, Crimicar Lane and the school-run routes, a tidy two or three day install matters. We agree practical access before the job starts.",
  },
];

const localNotes = [
  "Fulwood village and Fulwood Road",
  "Forge Dam and the Porter Valley",
  "Whiteley Woods and Wire Mill Dam",
  "Lodge Moor, Ranmoor and Crosspool edges",
  "S10 homes heading towards Ringinglow",
  "Nearby Bents Green and Stumperlowe",
];

const pageImages = [
  {
    src: "/images/after/marble-worktop-wrap-sheffield-01.jpeg",
    alt: "Marble-effect kitchen worktop wrap suited to a Fulwood home",
    caption: "Light worktop finishes suit many south-west Sheffield kitchens",
  },
  {
    src: "/images/after/kitchen-wrap-sheffield-completed-03.jpeg",
    alt: "Completed Sheffield kitchen wrap with clean cabinet finish",
    caption: "A changed room without ripping out sound units",
  },
  {
    src: "/images/finishes/kitchen-wrap-colour-samples-sheffield-01.jpeg",
    alt: "Kitchen wrap colour samples for Fulwood homes",
    caption: "Samples help you judge the finish in your own light",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Fulwood and the wider S10 area?",
    answer:
      "Yes. We cover Fulwood, the Fulwood Road area, Lodge Moor, Ranmoor, Crosspool, Bents Green and nearby S10 postcodes. If you are just outside that patch, send your postcode and we will confirm.",
  },
  {
    question: "Is wrapping right for period or older Fulwood kitchens?",
    answer:
      "It can be, but condition matters. Older doors, handmade panels or previous repairs need a proper look before we quote. If the units are not sound enough for a lasting wrap, we will say so.",
  },
  {
    question: "Can you bring samples to a Fulwood survey?",
    answer:
      "Yes. Seeing matt, wood, stone and marble-effect finishes in your own kitchen light is much better than choosing from a screen, especially in rooms with shaded garden views or darker worktops.",
  },
  {
    question: "How long does a Fulwood kitchen wrap usually take?",
    answer:
      "Most Sheffield kitchen wraps take 2-3 days once the finish is chosen and the surfaces are ready. Larger kitchens or door and worktop jobs can take longer, but we confirm the schedule before booking.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Fulwood",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard and worktop vinyl wrapping for Fulwood and nearby S10 homes in south-west Sheffield.",
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
      name: "Fulwood",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S10",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Lodge Moor" },
    { "@type": "Place", name: "Ranmoor" },
    { "@type": "Place", name: "Crosspool" },
    { "@type": "Place", name: "Bents Green" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function FulwoodKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Fulwood", path: pagePath },
          ]),
          faqSchema(faqs),
          serviceJsonLd,
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Fulwood kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Fulwood
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Fulwood kitchens often sit in homes where the units are still
              solid, but the finish no longer fits the room. We wrap kitchen
              doors, drawer fronts, end panels and worktops across S10, from
              Fulwood Road and the old village core through to Forge Dam,
              Whiteley Woods, Lodge Moor and the Porter Valley side of Sheffield.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Fulwood Quote"
                showCall
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </div>

          <div className="rounded-[2rem] bg-linen p-6 shadow-sm">
            <p className="eyebrow">Local survey advice</p>
            <p className="mt-4 font-heading text-3xl leading-tight">
              Keep the kitchen you like. Change the finish you are fed up with.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              The official Fulwood Conservation Area covers the old village,
              Christ Church, the Old Chapel, and parts of the Porter Brook valley.
              Homes around there can have character, awkward corners and older
              joinery. That is exactly why we look first, quote second.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "fulwood_hero_panel" }}
              className="mt-6 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay}
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Why Fulwood asks about wrapping</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A careful refresh suits homes where the layout already works
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Fulwood is not one single type of kitchen. You see larger family
                rooms, older properties around the village, and quieter homes
                climbing towards Ringinglow and Lodge Moor. The common thread is
                simple: many kitchens are too good to throw away, but too tired
                to enjoy every day.
              </p>
              <p>
                Kitchen wrapping is useful in that gap. If the doors close
                properly, the carcasses are firm and the worktops can be prepared,
                a wrap can change the colour, texture and feel of the room
                without ordering a full replacement. No skip outside. No long
                building job. Just proper prep and a clean finish.
              </p>
              <p>
                If you are still deciding what level of work you need, compare
                our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield price guide
                </Link>
                , or browse the{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>{" "}
                before you ask for a survey.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pageImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-3xl bg-mist/50">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-ink/65">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">What we check</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The details that decide whether a wrap will last
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              We would rather turn down a bad fit than leave you with lifting
              edges or a finish that disappoints. During a Fulwood survey, these
              are the practical things we pay attention to.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {fitChecks.map((check) => (
              <article key={check.title} className="rounded-3xl bg-linen p-7">
                <h3 className="font-heading text-2xl font-medium">{check.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {check.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">Fulwood and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Local coverage across S10
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              Forge Dam, Wire Mill Dam and Whiteley Woods are part of the same
              Porter Valley landscape that makes Fulwood feel different from the
              busier parts of Sheffield. A kitchen job here should respect that:
              neat parking arrangements, tidy work, and no unnecessary disruption
              for neighbours.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              Send a few photos first if you are unsure. We can often tell from
              pictures whether your kitchen is likely to be suitable, then book a
              free survey if it looks worth pricing properly.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {localNotes.map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-ink/8 bg-linen px-5 py-4 text-sm font-medium text-ink/75"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Fulwood questions</p>
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
          <p className="eyebrow text-linen/60">Straight answer first</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want to know if your Fulwood kitchen is worth wrapping?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos or book a free local survey. We will talk through
            finishes, likely cost and whether wrapping is the right route before
            you spend anything.
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
            and include your Fulwood or S10 postcode.
          </p>
        </div>
      </section>
    </>
  );
}
