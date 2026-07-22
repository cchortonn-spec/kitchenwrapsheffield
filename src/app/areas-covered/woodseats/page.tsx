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
  title: "Kitchen Wrapping Woodseats Sheffield | S8 Kitchen Wraps",
  description:
    "Kitchen wrapping in Woodseats, Sheffield. Door, cupboard and worktop wraps for S8 homes around Chesterfield Road, Abbey Lane and Graves Park.",
  path: "/areas-covered/woodseats",
});

const pagePath = "/areas-covered/woodseats";

const localReasons = [
  {
    title: "Good for solid 1930s and family kitchens",
    body: "Woodseats has plenty of older semis and practical family houses where the units are still sturdy, but the colour or worktops date the room. Wrapping is worth considering when the layout already works.",
  },
  {
    title: "Less disruption on busy S8 roads",
    body: "A kitchen wrap does not need a skip or big rip-out delivery, which helps around Chesterfield Road, Woodseats Road, Abbey Lane and the tighter streets running towards Graves Park.",
  },
  {
    title: "Useful before selling or letting",
    body: "If a Woodseats kitchen photographs dark, glossy or tired, a wrap can give it a cleaner look for listings and viewings without committing to a full replacement kitchen.",
  },
] as const;

const surveyFocus = [
  "Door edges, hinge holes and old handle positions, especially on kitchens that have had several updates over the years.",
  "Worktop joins, sink cut-outs and upstands before we suggest a marble, stone or wood-effect wrap.",
  "Access and parking around Chesterfield Road, Abbey Lane, Derbyshire Lane and school-run times near local primaries.",
  "Moisture swelling, peeling foil or loose panels - if the base is not sound, wrapping will not be the right answer.",
] as const;

const localCoverage = [
  "Woodseats and Chesterfield Road",
  "Abbey Lane and Woodseats Road",
  "Derbyshire Lane and Graves Park edge",
  "Norton, Meadowhead and Norton Lees",
  "Heeley and the A61 route into town",
  "Abbeydale Road, Millhouses and nearby S8 homes",
] as const;

const faqs = [
  {
    question: "Do you cover Woodseats and the S8 postcode?",
    answer:
      "Yes. We cover Woodseats, Abbey Lane, Derbyshire Lane, Norton, Meadowhead, Norton Lees, Millhouses, Heeley and nearby S8 streets. If you are just outside S8, send your postcode and we will confirm.",
  },
  {
    question: "Is kitchen wrapping suitable for older Woodseats houses?",
    answer:
      "Often, yes, provided the doors, drawer fronts and carcasses are solid. Many Woodseats homes have practical kitchens that do not need ripping out. We check condition first and will say plainly if swollen doors, peeling foil or damaged worktops make wrapping a poor choice.",
  },
  {
    question: "Can you work around parking on Chesterfield Road or Abbey Lane?",
    answer:
      "Usually. Wrapping is lighter on access than a full replacement because there is no skip and no large carcass delivery. Tell us about permits, driveways, shared access or busy times when you enquire so we can plan the survey and fitting properly.",
  },
  {
    question: "How much does a Woodseats kitchen wrap cost?",
    answer:
      "Most full kitchen wraps in Sheffield start from around £1,250, with smaller door-only or worktop-only jobs costing less. Your Woodseats quote depends on door count, worktop length, finish choice and how much preparation is needed.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Woodseats, Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Woodseats and nearby S8 homes in south Sheffield.",
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
      name: "Woodseats",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S8",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Norton" },
    { "@type": "Place", name: "Meadowhead" },
    { "@type": "Place", name: "Norton Lees" },
    { "@type": "Place", name: "Heeley" },
    { "@type": "Place", name: "Millhouses" },
  ],
  url: `${SITE.url}${pagePath}`,
};

const pageImages = [
  {
    src: SERVICE_IMAGES.full.src,
    alt: "Full kitchen wrap finish suited to a Woodseats Sheffield family kitchen",
    caption: "A full wrap can change doors, panels and worktops together",
  },
  {
    src: GALLERY_IMAGES[3].src,
    alt: "Light marble-effect worktop wrap for a Sheffield S8 kitchen",
    caption: "Lighter worktops help brighten kitchens that face shaded streets",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield home",
    caption: "Good preparation matters more than rushing the finish",
  },
] as const;

export default function WoodseatsKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Woodseats", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Woodseats kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Woodseats, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Fed up with a Woodseats kitchen that looks older than the rest of
              the house? If the units are still solid, wrapping can change the
              doors, drawer fronts, end panels and worktops without the cost and
              mess of a full rip-out.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We cover S8 homes around Chesterfield Road, Abbey Lane,
              Woodseats Road, Derbyshire Lane, Graves Park, Norton and
              Meadowhead. The advice starts with the actual kitchen in front of
              us, not a stock answer.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Woodseats Quote"
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
              <p className="eyebrow">S8 homes, real-world fit</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Why wrapping makes sense in Woodseats
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Woodseats is one of those Sheffield areas where kitchens have
                often been improved bit by bit. A new floor one year. Handles
                changed another year. Worktops swapped when the old ones marked.
                After a while the room can feel patched together, even when the
                layout is still perfectly useful.
              </p>
              <p>
                Wrapping suits that situation. We keep the parts that are doing
                their job and refinish the visible surfaces. That can mean a
                clean matt colour on doors, a warmer wood effect, a sharper
                stone-look worktop, or a full kitchen wrap planned as one tidy
                job.
              </p>
              <p>
                If you are comparing options, start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , read the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or check the wider{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>
                . Those pages explain the basics; this page is about whether it
                fits Woodseats homes in particular.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {localReasons.map((item) => (
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
            <p className="eyebrow">Local detail</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Planned around Chesterfield Road, Graves Park and everyday access
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                Chesterfield Road is the spine of Woodseats. It is handy, but it
                is also busy. Around the Abbey Lane junction, Woodseats Road and
                the routes up towards Derbyshire Lane, parking and timing can
                matter more than people expect. A wrap is usually easier to plan
                than a full replacement because there is less waste, less heavy
                delivery, and no skip blocking the front of the house.
              </p>
              <p>
                Graves Park sits right on the edge of the area, between
                Woodseats, Norton and Meadowhead. Homes around that side of S8
                can be very different from the busier A61 streets: some have
                larger family kitchens, some have older door profiles, and some
                have worktops that have taken years of school-run breakfasts,
                packed lunches and weekend cooking.
              </p>
            </div>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "woodseats_local_detail" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} to talk through your S8 kitchen
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
            <p className="eyebrow">Survey first</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              We check whether your kitchen is actually worth wrapping
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good Woodseats quote is not just a door count. We want the
              finish to last, so we look at the details that decide whether the
              job is sensible before any vinyl is ordered.
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
            <p className="eyebrow">Woodseats and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Local coverage across south Sheffield
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Woodseats sits in a practical spot between the city, Graves Park,
              Norton, Meadowhead, Heeley and Abbeydale Road. That makes it a
              straightforward area for surveys and fitting, whether you are just
              off Chesterfield Road or tucked away nearer the park.
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
          <p className="eyebrow">Woodseats questions</p>
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
            Want a straight answer on your Woodseats kitchen?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos, include your S8 postcode, and tell us whether you are
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
            and include Woodseats, S8 or your nearest street.
          </p>
        </div>
      </section>
    </>
  );
}
