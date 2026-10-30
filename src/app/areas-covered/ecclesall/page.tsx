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

const pagePath = "/areas-covered/ecclesall";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Ecclesall Sheffield | S11 Kitchen Wraps",
  description:
    "Kitchen wrapping in Ecclesall, Sheffield for S11 homes near Ecclesall Road South, Banner Cross, Hunters Bar, Endcliffe Park and Ecclesall Woods.",
  path: pagePath,
});

const ecclesallSituations = [
  {
    title: "Older S11 homes with good carcasses",
    body: "Around Ecclesall Road South, Banner Cross and the All Saints side, many kitchens are not failed kitchens. They are solid rooms with worn doors, dated colours or worktops that make the whole space feel older than it is.",
  },
  {
    title: "Busy family kitchens near parks and schools",
    body: "Family homes close to Endcliffe Park, Greystones, High Storrs and the Porter Valley need finishes that cope with everyday use. We check handles, door edges, sink runs and kettle areas before recommending a wrap.",
  },
  {
    title: "Rental and sale-ready refreshes",
    body: "Ecclesall and Sharrow Vale have a strong rental and moving market. When the layout already works, wrapping can help a kitchen photograph better without starting a full refit between tenants or viewings.",
  },
] as const;

const localSurveyChecks = [
  "Parking and loading around Ecclesall Road South, Banner Cross Road, Sharrow Vale and Hunters Bar.",
  "Door profiles, hinge positions and any previous paint or foil repairs on older kitchen fronts.",
  "Worktop joins, sink damage and heat marks in well-used family kitchens.",
  "Whether the finish should feel warm and settled, clean and rental-safe, or sharper for sale photos.",
  "Access through terraces, shared entrances, steep drives or busy side roads off Ecclesall Road.",
] as const;

const localMarkers = [
  "Ecclesall Road South and Banner Cross",
  "All Saints Church and Ecclesall War Memorial",
  "Hunters Bar, Brocco Bank and Sharrow Vale Road",
  "Endcliffe Park, Porter Brook and the Mi Amigo memorial",
  "Greystones, Bents Green and High Storrs",
  "Ecclesall Woods and the J G Graves Woodland Discovery Centre",
] as const;

const finishAdvice = [
  {
    label: "Warm matt doors",
    detail:
      "A soft matt finish often suits S11 houses better than a cold high-gloss look, especially where the room has timber floors, stone details or older features nearby.",
  },
  {
    label: "Stone-effect worktops",
    detail:
      "Useful when the cabinets still work but a scratched laminate counter is making the kitchen feel tired. We check sink and hob areas carefully first.",
  },
  {
    label: "Practical neutral finishes",
    detail:
      "For rentals, flats and sale preparation, a calm neutral wrap can make the room feel clean without locking the next owner or tenant into a strong colour.",
  },
] as const;

const faqs = [
  {
    question: "Do you cover Ecclesall and S11?",
    answer:
      "Yes. We cover Ecclesall, Ecclesall Road South, Banner Cross, Hunters Bar, Sharrow Vale, Greystones, Bents Green, Endcliffe and nearby S11 streets. Send your postcode with a few kitchen photos and we will confirm coverage before arranging a survey.",
  },
  {
    question: "Is wrapping suitable for older Ecclesall kitchens?",
    answer:
      "Often, yes, if the doors, panels, worktops and carcasses are stable. We look closely at old foil, paint, swollen MDF, loose edges and worktop damage before quoting. If replacement doors or a refit would be safer, we will say so.",
  },
  {
    question: "Can you work around parking near Ecclesall Road or Hunters Bar?",
    answer:
      "Usually, but it is worth planning early. Some Ecclesall and Hunters Bar streets are busy or permit-heavy, while other homes have drives or easier side-street access. Tell us about parking, shared entrances or loading limits when you enquire.",
  },
  {
    question: "How much does an Ecclesall kitchen wrap cost?",
    answer:
      "Most full Sheffield kitchen wraps start from around 1,250 pounds, with smaller door-only or worktop-only jobs costing less. An Ecclesall quote depends on door count, worktop length, finish choice, preparation, access and whether the job is for a house, flat or rental.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Ecclesall, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Ecclesall, S11 and nearby south-west Sheffield homes.",
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
      name: "Ecclesall",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S11",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Ecclesall Road South" },
    { "@type": "Place", name: "Banner Cross" },
    { "@type": "Place", name: "Hunters Bar" },
    { "@type": "Place", name: "Sharrow Vale" },
    { "@type": "Place", name: "Greystones" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: GALLERY_IMAGES[5].src,
    alt: "Full kitchen wrap finish suitable for an Ecclesall Sheffield home",
    caption: "A full wrap can modernise the visible kitchen without replacing the layout.",
  },
  {
    src: FINISH_IMAGES[0].src,
    alt: "Kitchen wrap colour samples for Ecclesall S11 homes",
    caption: "Colour samples help the finish sit naturally with the house.",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield kitchen",
    caption: "Preparation checks matter before any film is fitted.",
  },
] as const;

export default function EcclesallKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Ecclesall", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="eyebrow">Ecclesall kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Ecclesall, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Ecclesall kitchens come in all shapes: stone-fronted S11 homes,
              terraces close to Sharrow Vale, family houses near Endcliffe Park
              and flats around the Ecclesall Road corridor. A full replacement
              is not always the sensible first move.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              If the cabinets are sound, wrapping can refresh the doors,
              panels and worktops without a skip, weeks of dust or losing a
              layout that already works. We check the surfaces first and tell
              you straight if wrapping is the right route.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Get an Ecclesall Quote"
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
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Local fit</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A practical refresh for S11 homes, flats and rentals
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/65">
              <p>
                Ecclesall runs from the busy Ecclesall Road and Hunters Bar
                side through Banner Cross and out towards greener south-west
                Sheffield. That mix matters. A kitchen in a compact flat near
                Sharrow Vale does not need the same finish advice as a long-term
                family home near Ecclesall Woods.
              </p>
              <p>
                Local search results for kitchen wrapping in Sheffield are often
                broad: quick turnaround, lots of finishes, less cost than
                replacing. Those points are true, but a better quote starts with
                the actual kitchen, the access, the age of the doors and how the
                room is used day to day.
              </p>
              <p>
                For the full service breakdown, start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                . If you want a budget guide before sending photos, read the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing page
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {ecclesallSituations.map((item) => (
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
        <div className="container-site grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
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
            <p className="eyebrow">Finish direction</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Choose the wrap around the street, the room and the use
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Ecclesall has older houses, student and professional rentals,
              family homes and quieter roads towards Bents Green and Whirlow.
              The best finish is not just the one that looks good on a sample.
              It needs to suit the light, flooring, worktops and how hard the
              kitchen is used.
            </p>
            <div className="mt-8 grid gap-4">
              {finishAdvice.map((item) => (
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
              If worktops are the main issue, the{" "}
              <Link
                href="/pricing/worktop-wrap-cost-sheffield"
                className="font-medium text-moss link-underline"
              >
                worktop wrap cost guide
              </Link>{" "}
              explains what changes the price.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="eyebrow">Ecclesall coverage</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Ecclesall Road South, Banner Cross and the Porter Valley edge
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                We plan surveys around the real local details: busy approaches
                near Ecclesall Road, tighter terrace streets near Sharrow Vale,
                quieter family roads towards Greystones, and homes out by
                Ecclesall Woods where parking may be simpler but access still
                needs checking.
              </p>
              <p>
                If you are on an edge street, nearby pages may help too: see{" "}
                <Link href="/areas-covered/nether-edge" className="font-medium text-moss link-underline">
                  Nether Edge kitchen wrapping
                </Link>
                ,{" "}
                <Link href="/areas-covered/beauchief" className="font-medium text-moss link-underline">
                  Beauchief kitchen wrapping
                </Link>{" "}
                or our full{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas covered
                </Link>{" "}
                guide.
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "ecclesall_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for Ecclesall kitchen wrapping advice
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
            <p className="eyebrow">Survey first</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What we check before quoting in Ecclesall
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A kitchen wrap is only good value when the base is worth keeping.
              We look beyond the colour and check whether the doors, edges,
              panels and worktops can take a clean, long-lasting finish.
            </p>
            <ul className="mt-8 grid gap-3">
              {localSurveyChecks.map((check) => (
                <li
                  key={check}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/70 shadow-sm"
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
          <p className="eyebrow">Ecclesall FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before wrapping an Ecclesall kitchen
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
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow text-linen/60">Free Ecclesall quote</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Want straight advice on your Ecclesall kitchen?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send photos of the full kitchen, close-ups of worn edges and
                your S11 postcode. We will explain whether wrapping is suitable,
                what preparation is needed and whether doors, worktops or a
                full kitchen wrap gives the best value.
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
                Helpful photos to send
              </p>
              <p className="mt-4 text-sm leading-relaxed text-linen/70">
                Use the{" "}
                <Link href="/contact" className="font-medium text-linen link-underline">
                  contact form
                </Link>{" "}
                and include wide kitchen photos, close-ups of door edges,
                worktop joins, sink areas, any peeling sections and notes about
                parking or shared access.
              </p>
              <p className="mt-5 text-sm text-linen/70">
                Call {SITE.phoneDisplay} if you would rather talk through the
                kitchen first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
