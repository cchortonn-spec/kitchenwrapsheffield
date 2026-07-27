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
    "Kitchen wrapping in Nether Edge, Sheffield. Door, cupboard and worktop wraps for S7 homes around Nether Edge Road, Kenwood, Chelsea Park and Sharrow.",
  path: "/areas-covered/nether-edge",
});

const pagePath = "/areas-covered/nether-edge";

const pageImages = [
  {
    src: GALLERY_IMAGES[5].src,
    alt: "Completed kitchen wrap suited to a Nether Edge period home in Sheffield",
    caption: "A calmer finish can suit older rooms without changing the layout",
  },
  {
    src: FINISH_IMAGES[1].src,
    alt: "Kitchen wrap finish swatches in warm natural tones for Nether Edge homes",
    caption: "Finish choice matters in rooms with period detail and changing light",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield S7 home",
    caption: "We remove doors where needed and prepare edges before wrapping",
  },
] as const;

const fitChecks = [
  "Whether older doors are flat, stable and free from swelling around sink or dishwasher areas.",
  "How new finishes will sit with original floors, sash-window light, deep skirting or fireplaces.",
  "Access and parking around Nether Edge Road, Machon Bank Road, Kenwood Road and Psalter Lane.",
  "Whether a careful door-and-panel refresh is enough, or worktops need changing too.",
] as const;

const finishIdeas = [
  {
    title: "Soft matt colours",
    body: "Warm whites, muted greens, taupes and charcoal tones often work better than harsh gloss in Nether Edge kitchens with older joinery or period proportions.",
  },
  {
    title: "Wood-effect surfaces",
    body: "A lighter oak or walnut-style worktop wrap can sit comfortably with natural floorboards, painted doors and the calmer feel of streets around Kenwood and Brincliffe.",
  },
  {
    title: "Stone-effect worktops",
    body: "Useful when the existing worktop is sound but dominates the room. We check joins, upstands and sink cut-outs before recommending it.",
  },
] as const;

const localAreas = [
  "Nether Edge Road and Machon Bank Road",
  "Kenwood and Cherry Tree Hill Road",
  "Psalter Lane and Brincliffe Edge",
  "Chelsea Park and Brincliffe",
  "Sharrow, Highfield and Abbeydale Road",
  "Banner Cross, Sharrow Vale and nearby S7 streets",
] as const;

const faqs = [
  {
    question: "Do you cover Nether Edge and S7?",
    answer:
      "Yes. We cover Nether Edge, Kenwood, Brincliffe, Sharrow, Highfield, Abbeydale Road, Banner Cross and nearby S7 streets. If you are just outside the postcode, send your address and we will confirm before arranging a survey.",
  },
  {
    question: "Is kitchen wrapping suitable for Victorian or Edwardian homes in Nether Edge?",
    answer:
      "Often, yes, but it depends on the kitchen rather than the age of the house. Many Nether Edge homes have solid fitted kitchens that only look dated. We check door condition, old repairs, moisture damage and worktop joins before saying whether wrapping is a good idea.",
  },
  {
    question: "Can you help choose a finish that suits a period room?",
    answer:
      "Yes. We bring finish options and talk through what will work with the light, floor, wall colour and existing features. In Nether Edge, softer matt colours, warm woods and calmer stone effects are often better than very bright gloss finishes.",
  },
  {
    question: "Will wrapping cause much disruption on tighter Nether Edge streets?",
    answer:
      "Usually not. A wrap is lighter on access than a replacement kitchen because there is no skip, no carcass delivery and fewer trades. We still ask about parking, permits, stairs and shared entrances so the fitting day is planned properly.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Nether Edge, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Nether Edge, Kenwood, Brincliffe, Sharrow and nearby S7 homes in Sheffield.",
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
    { "@type": "Place", name: "Highfield" },
    { "@type": "Place", name: "Abbeydale Road" },
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
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Nether Edge kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Nether Edge, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Nether Edge homes often have character in the rest of the house,
              then a kitchen that feels a bit behind. If the units are still
              solid, wrapping can change the doors, drawer fronts, panels and
              suitable worktops without ripping out a working layout.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover S7 kitchens around Nether Edge Road, Machon Bank Road,
              Kenwood, Chelsea Park, Psalter Lane, Brincliffe, Sharrow and the
              Abbeydale Road side. We will tell you straight if wrapping fits the
              room, and just as straight if it does not.
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p className="eyebrow text-ink">A different sort of Sheffield kitchen</p>
              <h2 className="font-heading text-4xl font-medium text-ink sm:text-5xl">
                A refresh that respects older homes and busy modern life
              </h2>
              <p>
                Nether Edge is not a row of identical houses. The conservation
                area is known for Victorian and Edwardian buildings, leafy
                streets and the village feel around the Nether Edge Road and
                Machon Bank Road shops. Nearby Kenwood, Brincliffe and Sharrow
                all have their own mix of larger homes, terraces, flats and
                converted buildings.
              </p>
              <p>
                That matters when you choose a kitchen finish. A bright gloss
                wrap might look right in one newer kitchen and completely wrong
                in a room with high ceilings, old boards, sash-window light or a
                darker north-facing outlook. We look at the actual space before
                recommending colours, textures or whether a worktop wrap should
                be part of the job.
              </p>
              <p>
                If you are still comparing options, start with our{" "}
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
                . This page is for the Nether Edge details that those broader
                pages cannot cover properly.
              </p>
            </div>

            <aside className="rounded-[2rem] bg-linen p-6 shadow-sm">
              <p className="eyebrow">Good fit when</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/70">
                <li>The kitchen layout works and the carcasses are sound.</li>
                <li>The finish feels dated but the room does not need rebuilding.</li>
                <li>You want a cleaner look before selling, letting or settling in.</li>
                <li>You would rather avoid a skip and a full run of trades.</li>
              </ul>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "nether_edge_fit_panel" }}
                className="mt-6 inline-flex text-sm font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for a straight opinion
              </TrackedLink>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
            <p className="eyebrow">Finish choice</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Not every modern finish suits a Nether Edge room
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good wrap should make the kitchen feel fresher without fighting
              the house. Around Chelsea Park, Kenwood Hall, Brincliffe Edge and
              the roads down towards Abbeydale Road, we see kitchens with very
              different light levels and proportions. The right vinyl choice can
              make the room calmer; the wrong one can make it feel out of place.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {finishIdeas.map((idea) => (
                <article
                  key={idea.title}
                  className="rounded-3xl border border-ink/8 bg-linen/70 p-5"
                >
                  <h3 className="font-heading text-xl font-medium">
                    {idea.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {idea.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="eyebrow">Survey first</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What we check before pricing a Nether Edge kitchen wrap
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              We do not price from a postcode alone. Nether Edge has period
              houses, converted flats, later semis and practical terraces, so
              the survey needs to look at condition, style and access. A wrap
              only makes sense when the base is sound enough for the finish to
              last.
            </p>
            <ul className="mt-8 space-y-3">
              {fitChecks.map((check) => (
                <li
                  key={check}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
                >
                  {check}
                </li>
              ))}
            </ul>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
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
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">S7 and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Covering Nether Edge, Kenwood, Sharrow and Abbeydale Road
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Nether Edge sits around 2-3 miles south west of Sheffield city
              centre, between the Porter Brook and Sheaf Valley. We plan surveys
              around local access, from the shops at Nether Edge Road and Machon
              Bank Road to busier edges near Abbeydale Road, Sharrow and
              Highfield.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localAreas.map((area) => (
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
        <div className="container-site section-padding grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="eyebrow text-linen/60">Free local quote</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
              Want your Nether Edge kitchen checked before you decide?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-linen/70">
              Send a few photos, include your S7 postcode, and tell us whether
              you are thinking about doors, worktops or the full kitchen. We will
              give you plain advice and arrange a free survey if wrapping looks
              sensible.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-linen/15 bg-linen/10 p-6">
            <p className="text-sm leading-relaxed text-linen/70">
              Prefer to talk first? Call{" "}
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "nether_edge_final_cta" }}
                className="font-medium text-linen link-underline"
              >
                {SITE.phoneDisplay}
              </TrackedLink>{" "}
              or use the contact form and mention Nether Edge, Kenwood, Sharrow
              or your nearest road.
            </p>
            <div className="mt-6">
              <CtaButtons
                onDark
                showCall
                quoteLabel="Ask for a Free Survey"
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
