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
  title: "Kitchen Wrapping Mosborough | S20 Kitchen Wrap Quotes",
  description:
    "Kitchen wrapping in Mosborough, S20. Door, cupboard and worktop wraps for homes near Mosborough Hall, High Street, Crystal Peaks and Owlthorpe.",
  path: "/areas-covered/mosborough",
});

const pagePath = "/areas-covered/mosborough";

const localFit = [
  {
    title: "Village homes and newer estates",
    body: "Mosborough mixes older village properties near High Street and Mosborough Hall with newer family homes towards Owlthorpe, Westfield and Waterthorpe. We check the actual doors and carcasses before recommending a wrap.",
  },
  {
    title: "Good for busy S20 households",
    body: "If you are working around school runs, Crystal Peaks trips, Moss Way traffic or commuting towards the Parkway and M1, a kitchen refresh that usually takes days instead of weeks is a practical route.",
  },
  {
    title: "Useful before selling or letting",
    body: "A tired kitchen can make an otherwise well-kept Mosborough home look older than it is. Wrapping can lift the room for photos, viewings or everyday use without replacing sound units.",
  },
] as const;

const surveyChecks = [
  "Door edges, drawer fronts and hinges - these decide whether the finish will sit cleanly and last.",
  "Worktop joins, sink cut-outs and upstands - especially important if you want a stone or marble-effect worktop wrap.",
  "End panels and plinths - small visible areas can spoil the result if they are not planned into the quote.",
  "Previous DIY repairs, swelling or peeling - we will say plainly if wrapping is not the right fix.",
] as const;

const localCoverage = [
  "Mosborough village and High Street",
  "Mosborough Hall and St Mark's area",
  "Owlthorpe, Westfield and Waterthorpe",
  "Crystal Peaks and Drake House edge",
  "Halfway, Holbrook and Moss Way",
  "Ridgeway, Hackenthorpe and nearby S20 homes",
] as const;

const faqs = [
  {
    question: "Do you cover Mosborough and the whole S20 postcode?",
    answer:
      "Yes. We cover Mosborough, Owlthorpe, Westfield, Waterthorpe, Halfway, Holbrook, Crystal Peaks, Ridgeway and nearby S20 streets. If you are on the edge towards Eckington or Hackenthorpe, send your postcode and we will confirm.",
  },
  {
    question: "Can you wrap kitchens in older Mosborough village homes?",
    answer:
      "Often, yes, but we need to check condition first. Older kitchens near the village centre can have uneven panels, repaired doors or older carcasses. If the units are solid enough, wrapping can work well. If they are not, we will tell you before quoting.",
  },
  {
    question: "Is kitchen wrapping cheaper than replacing a Mosborough kitchen?",
    answer:
      "In most suitable kitchens, yes. Wrapping keeps the existing layout and units, so you avoid the cost of new carcasses, trades and a full rip-out. Your exact price depends on door count, worktop length, finish and preparation.",
  },
  {
    question: "How long does a Mosborough kitchen wrap usually take?",
    answer:
      "Most Sheffield kitchen wraps take 2-3 days once the finish is chosen and materials are ready. A small door-only job may be quicker, while a full door and worktop wrap can take longer.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Mosborough",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, end panel and worktop vinyl wrapping for Mosborough and nearby S20 homes in south-east Sheffield.",
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
      name: "Mosborough",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S20",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Owlthorpe" },
    { "@type": "Place", name: "Westfield" },
    { "@type": "Place", name: "Waterthorpe" },
    { "@type": "Place", name: "Halfway" },
    { "@type": "Place", name: "Holbrook" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function MosboroughKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Mosborough", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Mosborough kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Mosborough
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your Mosborough kitchen is still solid but the colour, doors or
              worktops make the room feel tired, wrapping can give it a fresh
              finish without a full replacement. We cover S20 homes around the
              village, Mosborough Hall, High Street, Owlthorpe, Westfield,
              Waterthorpe, Halfway and Crystal Peaks.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              The job starts with a proper look at your kitchen. Some doors wrap
              beautifully. Some need repair first. Some are not worth wrapping at
              all. We will tell you which one you have before you spend a penny.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Mosborough Quote"
                showCall
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </div>

          <aside className="rounded-[2rem] bg-linen p-6 shadow-sm">
            <p className="eyebrow">Straight advice first</p>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight">
              A new look for the kitchen you already know works
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Mosborough sits on the south-east edge of Sheffield, close to
              Derbyshire, Rother Valley and the Crystal Peaks side of the city.
              Homes here vary a lot, so we do not quote from a generic price
              list. Photos and a free survey help us price the real kitchen in
              front of us.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "mosborough_hero_panel" }}
              className="mt-6 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay}
            </TrackedLink>
          </aside>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow">Why it works locally</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A practical refresh for S20 kitchens
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Mosborough is not one single housing style. There are older
                properties around the village and St Mark&apos;s, family homes
                running out towards Owlthorpe and Westfield, and newer layouts
                close to Waterthorpe and the Crystal Peaks shopping area. The
                kitchen issue is often the same: the layout still works, but the
                finish is dragging the room down.
              </p>
              <p>
                Wrapping is useful when the bones of the kitchen are good. We
                keep the existing units, prepare the visible surfaces, and fit a
                new vinyl finish to doors, drawers, end panels and worktops as
                agreed. That means no skip outside, no ripped-out carcasses, and
                no living around a building job for weeks.
              </p>
              <p>
                If you are comparing options, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap price guide
                </Link>
                , or see the full{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>{" "}
                before asking for a survey.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {localFit.map((item) => (
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
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">What we check</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Not every kitchen should be wrapped
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              We would rather be honest at survey stage than fit a finish that
              will disappoint you later. Whether you are near Mosborough Hall,
              High Street, Moss Way or the Halfway edge, these checks matter
              more than a quick quote over the phone.
            </p>
          </div>

          <ul className="space-y-3">
            {surveyChecks.map((check) => (
              <li
                key={check}
                className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
              >
                {check}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Mosborough and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Local coverage across south-east Sheffield
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Mosborough was historically a Derbyshire village before becoming
              part of Sheffield, and it still feels different from the inner
              suburbs. That matters for planning a job: access can be simple on
              newer estates, tighter around older village streets, and busier
              around Crystal Peaks and Moss Way at peak times.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              We keep the process plain. Send photos first, include your S20
              postcode, and tell us whether you want doors, worktops or the full
              kitchen looking at. If it looks suitable, we arrange a free survey
              and talk through finishes in your own kitchen light.
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

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Mosborough questions</p>
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
          <p className="eyebrow text-linen/60">Free local quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want to know if your Mosborough kitchen is worth wrapping?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos or book a free survey. We will tell you what can be
            wrapped, what needs preparation, and what it is likely to cost
            before you commit.
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
            and include your Mosborough or S20 postcode.
          </p>
        </div>
      </section>
    </>
  );
}
