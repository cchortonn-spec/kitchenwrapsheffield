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
  title: "Kitchen Wrapping Totley Sheffield | S17 Kitchen Wraps",
  description:
    "Kitchen wrapping in Totley, Sheffield. Door, cupboard and worktop wraps for S17 homes around Baslow Road, Totley Rise and Totley Village.",
  path: "/areas-covered/totley",
});

const pagePath = "/areas-covered/totley";

const pageImages = [
  {
    src: SERVICE_IMAGES.full.src,
    alt: "Full kitchen wrap finish suited to a Totley Sheffield home",
    caption: "A full wrap can refresh doors, panels and worktops together",
  },
  {
    src: GALLERY_IMAGES[5].src,
    alt: "Finished kitchen wrap for a south-west Sheffield home",
    caption: "Warmer finishes can suit stone, brick and garden-facing homes",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrap preparation in progress for a Sheffield kitchen",
    caption: "Careful preparation is what makes the new finish last",
  },
] as const;

const totleyFit = [
  {
    title: "Established homes near Totley Village",
    body: "Around Totley Hall Lane, Hillfoot Road and the older village streets, kitchens can have solid carcasses but dated doors, worn handles or worktops that no longer suit the rest of the house.",
  },
  {
    title: "Busy homes around Totley Rise",
    body: "Baslow Road and Totley Rise are practical, everyday parts of S17. Wrapping keeps the job compact, with no skip and far less disruption than ripping out a working kitchen.",
  },
  {
    title: "Peak-edge light and colour choices",
    body: "Homes towards Totley Brook, Old Hay Brook and the Derbyshire edge can feel different through the seasons. We look at the room itself before suggesting matt, wood, stone or lighter finishes.",
  },
] as const;

const surveyChecks = [
  "Door edges, old hinge points and handle holes before we recommend wrapping",
  "Worktop joins, sink cut-outs and upstands if you want a stone or marble effect",
  "Natural light in kitchens facing gardens, mature trees or the brook valleys",
  "Parking and access around Baslow Road, Totley Rise, Totley Hall Lane and Hillfoot Road",
  "Moisture swelling or peeling foil - if the surface is not sound, we will say so",
] as const;

const localCoverage = [
  "Totley Village and Totley Hall Lane",
  "Totley Rise and Baslow Road",
  "Hillfoot Road, Old Hay and Totley Brook side",
  "New Totley and the Bradway edge",
  "Dore & Totley station side of S17",
  "Dore, Bradway, Abbeydale Road South and nearby Peak-edge homes",
] as const;

const faqs = [
  {
    question: "Do you cover Totley and S17?",
    answer:
      "Yes. We cover Totley, Totley Rise, Totley Village, New Totley, the Dore and Totley station side, Bradway, Dore and nearby S17 homes. If you are close to the Sheffield or Derbyshire boundary, send your postcode and we will confirm.",
  },
  {
    question: "Is wrapping suitable for older Totley kitchens?",
    answer:
      "Often, yes, as long as the doors, drawer fronts and worktops are sound. Some Totley homes have older units that are well made but visually dated. We check swelling, loose foil, previous paint and worn edges before quoting.",
  },
  {
    question: "Can you work around Baslow Road and Totley Rise access?",
    answer:
      "Usually. A kitchen wrap is easier to plan than a full refit because there is no skip, no carcass delivery and fewer trades coming in and out. Tell us about parking, permits or tight access when you enquire.",
  },
  {
    question: "How much does a Totley kitchen wrap cost?",
    answer:
      "Most full kitchen wraps in Sheffield start from around £1,250, with smaller door-only or worktop-only jobs costing less. Your Totley price depends on door count, worktop length, finish choice and how much preparation is needed.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Totley, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Totley, Totley Rise, Totley Village and nearby S17 homes in south-west Sheffield.",
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
      name: "Totley",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S17",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Totley Rise" },
    { "@type": "Place", name: "Totley Village" },
    { "@type": "Place", name: "New Totley" },
    { "@type": "Place", name: "Dore" },
    { "@type": "Place", name: "Bradway" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function TotleyKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Totley", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="eyebrow">Totley kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Totley, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your Totley kitchen is solid but starting to look tired, wrapping
              can change the doors, drawer fronts, end panels and suitable
              worktops without a full rebuild. It is a good fit when the layout
              still works and you want the room to feel cleaner, lighter or more
              up to date.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover S17 homes around Baslow Road, Totley Rise, Totley Village,
              Totley Hall Lane, Hillfoot Road, Dore &amp; Totley station and the
              Bradway edge. The quote starts with your kitchen, not a generic
              sales pitch.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Totley Quote"
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
                preload
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
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">S17, not stock content</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Why Totley kitchens need a proper look first
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Totley sits on the south-west edge of Sheffield, where Baslow Road
                heads out towards Owler Bar and the Peak District. It still has a
                village feel in places, especially around Totley Hall Lane,
                Hillfoot Road, All Saints Church and the older stone boundary
                walls noted in the conservation area. That mix matters when you
                are choosing a kitchen finish.
              </p>
              <p>
                Some homes here suit warmer wood-effect doors. Others need a
                lighter matt colour because the kitchen looks out towards mature
                trees, the Totley Brook side or a shaded garden. A glossy finish
                that looks fine in a showroom can feel harsh in a quieter S17
                room, so we talk through practical options before anything is
                ordered.
              </p>
              <p>
                If you are still comparing the basics, start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or browse the full list of{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>
                . Totley is close to our existing{" "}
                <Link href="/areas-covered/dore" className="font-medium text-moss link-underline">
                  Dore kitchen wrapping
                </Link>{" "}
                patch too, so surveys on this side of S17 are straightforward.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {totleyFit.map((item) => (
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
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Local planning</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Planned around Baslow Road, Totley Rise and the village lanes
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                Baslow Road is the main route through Totley, but the homes off it
                vary a lot. Totley Rise has everyday shops and busier access. The
                village side around Totley Hall Lane and Hillfoot Road can feel
                quieter and more historic. Towards Old Hay Brook, Totley Brook and
                the boundary with Derbyshire, kitchens can sit in homes with more
                garden outlook and heavier use of local stone.
              </p>
              <p>
                A wrap keeps the work contained. We remove and prepare the parts
                that need wrapping, protect the room, fit the new finish and check
                the edges properly. There is no skip outside, no long wait for
                new units and no need to turn a working kitchen into a building
                site for weeks.
              </p>
            </div>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "totley_local_planning" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} to talk through your Totley kitchen
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
            <p className="eyebrow">Survey details</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What we check before quoting a Totley kitchen wrap
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good wrap is not just a new colour. It relies on a clean, stable
              surface and a finish that suits the way the room is used. That is
              why we look closely before giving you a straight answer.
            </p>
          </div>

          <div>
            <ul className="space-y-3">
              {surveyChecks.map((item) => (
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
            <p className="eyebrow">Totley and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Covering Totley, Dore, Bradway and the Peak-edge side
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Totley is close enough to the city to be simple for surveys, but it
              has its own feel: Totley Hall, All Saints, the Cross Scythes side of
              Baslow Road, Totley Rise and the routes towards Dore &amp; Totley
              station all sit within a small S17 patch. We use those details to
              plan access and give advice that fits the house.
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
          <p className="eyebrow">Totley questions</p>
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
              Want an honest view on your Totley kitchen?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-linen/70">
              Send photos, include your S17 postcode and tell us whether you are
              thinking about doors, worktops or the full kitchen. We will let you
              know what looks realistic before you spend money.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-linen/15 bg-linen/10 p-6">
            <p className="text-sm leading-relaxed text-linen/70">
              Prefer a quick form? Use the main{" "}
              <Link href="/contact" className="font-medium text-linen link-underline">
                contact page
              </Link>{" "}
              and mention Totley, Totley Rise or your nearest street. You can also
              call{" "}
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "totley_final_cta" }}
                className="font-medium text-linen link-underline"
              >
                {SITE.phoneDisplay}
              </TrackedLink>
              .
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
