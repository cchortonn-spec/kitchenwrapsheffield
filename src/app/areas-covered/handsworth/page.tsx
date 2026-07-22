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
  title: "Kitchen Wrapping Handsworth | S13 Kitchen Wrap Quotes",
  description:
    "Kitchen wrapping in Handsworth, S13. Door, cupboard and worktop wraps for homes near Handsworth Road, St Mary's, Richmond Park, Darnall and Woodhouse.",
  path: "/areas-covered/handsworth",
});

const pagePath = "/areas-covered/handsworth";

const localReasons = [
  {
    title: "Useful on busy Handsworth Road",
    body: "If your kitchen is sound but dated, wrapping avoids the disruption of deliveries, skips and extra trades around one of east Sheffield's busier routes.",
  },
  {
    title: "Good for family S13 homes",
    body: "Many Handsworth and Richmond kitchens still have practical layouts. A door, drawer and worktop wrap can change the room without changing how the house runs.",
  },
  {
    title: "Honest before-and-after advice",
    body: "We check swelling, loose edges, heat damage and old repairs first. If replacing a door or worktop is the better route, we will say so before quoting.",
  },
] as const;

const surveyNotes = [
  "Door condition around handles, corners and sink-adjacent cupboards, where older vinyl or laminate often starts to lift.",
  "Worktop joins, sink cut-outs and hob areas, especially if you want a stone-effect wrap to run cleanly across the room.",
  "Parking and access near Handsworth Road, Richmond Park Road, Retford Road and the Parkway side streets.",
  "Whether a smaller door-only refresh is enough, or whether end panels and worktops need wrapping so the job feels finished.",
] as const;

const wrapChoices = [
  {
    title: "Door and drawer front wrap",
    body: "Best when the units close properly but the colour is dragging the room down. It is often the simplest way to move away from old gloss, orange wood effect or tired cream.",
  },
  {
    title: "Worktop wrap",
    body: "A practical option when the surface is still solid but marked, dark or out of step with newer flooring. We look closely at joins before promising a clean finish.",
  },
  {
    title: "Full kitchen wrap",
    body: "Doors, drawers, visible panels and worktops planned together. This suits homeowners who want the kitchen to feel properly changed without a full refit.",
  },
] as const;

const localCoverage = [
  "Handsworth Road and St Mary's area",
  "Richmond Park and Richmond Park Road",
  "Retford Road and Orgreave edge",
  "Darnall and High Hazels side",
  "Woodhouse and Woodthorpe",
  "Parkway, Manor Park and nearby S13 streets",
] as const;

const faqs = [
  {
    question: "Do you cover Handsworth and the S13 postcode?",
    answer:
      "Yes. We cover Handsworth, Richmond, Woodhouse, Woodthorpe, the Darnall edge, Manor Park and nearby S13 streets. If your postcode sits just outside the area, send it over and we will confirm before arranging a survey.",
  },
  {
    question: "Is wrapping better than replacing a Handsworth kitchen?",
    answer:
      "It depends on the condition. If the carcasses, doors and worktops are sound, wrapping can give a strong visual change with far less mess than replacing. If units are swollen, loose or badly damaged, we will tell you that replacement or repair is the safer option.",
  },
  {
    question: "Can you work around parking near Handsworth Road or Richmond Park?",
    answer:
      "Usually, yes. We do not need a skip or large deliveries like a full kitchen refit, but access still matters. Tell us about parking, narrow streets or busy school-run times when you enquire so we can plan the survey and fitting properly.",
  },
  {
    question: "How long does a Handsworth kitchen wrap normally take?",
    answer:
      "Most Sheffield kitchen wraps take 2-3 days once the finish is chosen and materials are ready. A door-only Handsworth job may be quicker, while a full kitchen with worktops, end panels and extra preparation can take longer.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Handsworth",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, end panel and worktop vinyl wrapping for Handsworth and nearby S13 homes in east Sheffield.",
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
      name: "Handsworth",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S13",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Richmond" },
    { "@type": "Place", name: "Woodhouse" },
    { "@type": "Place", name: "Woodthorpe" },
    { "@type": "Place", name: "Darnall" },
    { "@type": "Place", name: "Manor Park" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function HandsworthKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Handsworth", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Handsworth kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Handsworth, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Want the kitchen to look newer without ripping out units that still
              work? We wrap kitchen doors, drawers, end panels and worktops
              across Handsworth and S13, including homes near Handsworth Road,
              St Mary&apos;s Church, Richmond Park, Retford Road, Darnall and
              Woodhouse.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              The first job is not selling you a wrap. It is checking whether
              your kitchen is actually suitable. Send photos, include your
              postcode, and we will give you plain advice before booking a free
              survey.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Handsworth Quote"
                showCall
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </div>

          <aside className="rounded-[2rem] bg-linen p-6 shadow-sm">
            <p className="eyebrow">Local survey first</p>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight">
              A practical refresh for a practical east Sheffield area
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Handsworth sits between older village history around St Mary&apos;s,
              everyday shopping on Handsworth Road, and quick routes towards the
              Sheffield Parkway. A good kitchen quote needs to understand the
              actual house, not just the postcode.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "handsworth_hero_panel" }}
              className="mt-6 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay}
            </TrackedLink>
          </aside>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Why homeowners ask</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                When replacement feels too much, wrapping may be enough
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Search for kitchen help around Handsworth and you will mostly
                find broad Sheffield wrapping companies or full kitchen
                suppliers. That is useful if you already know what you want, but
                many homeowners are in the middle. The layout works. The units
                are not falling apart. The finish just makes the whole room feel
                older than the rest of the house.
              </p>
              <p>
                Wrapping is for that middle ground. We keep the existing kitchen
                where it is, prepare the visible surfaces, and apply a new vinyl
                finish to the agreed doors, drawers, panels and worktops. There
                is no skip, no full rip-out, and no waiting weeks for several
                trades to pass through.
              </p>
              <p>
                If you are comparing your options, start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or look at the wider{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>{" "}
                before asking for a survey.
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
        <div className="container-site grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">What we check in S13</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              A fair quote comes from seeing the real kitchen
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Handsworth has a mix of older properties, post-war family homes,
              newer layouts and busy through-routes. A small kitchen near
              Richmond Park is not the same job as a larger home towards
              Woodhouse or a rental kitchen near Darnall. Photos help us decide
              whether a survey is worth your time.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              We also plan around normal life. If the school run, shift work or
              Parkway traffic affects access, tell us early. Kitchen wrapping is
              lower disruption than a refit, but a tidy job still needs a clear
              plan.
            </p>
          </div>

          <ul className="space-y-3">
            {surveyNotes.map((note) => (
              <li
                key={note}
                className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Pick the right level</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Doors, worktops or the full kitchen
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              You do not always need everything wrapped. Sometimes the doors are
              doing all the damage visually. Sometimes the worktop is the bit
              that dates the room. Sometimes both need changing together so the
              kitchen looks intentional rather than half-finished.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {wrapChoices.map((choice) => (
              <article key={choice.title} className="rounded-3xl bg-mist/50 p-7">
                <h3 className="font-heading text-2xl font-medium">
                  {choice.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {choice.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Handsworth and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Local coverage across east Sheffield
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/65">
              We cover the normal Handsworth patch, from the historic St
              Mary&apos;s side of Handsworth Road through to Richmond, the Asda
              supercentre area, Retford Road, Woodhouse and the Parkway edge.
              The sculpture known locally as Parkway Man sits nearby in Bowden
              Housteads Wood - a useful marker for how close this area is to the
              main routes across Sheffield.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
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
          <p className="eyebrow">Handsworth questions</p>
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
            Want a straight answer on your Handsworth kitchen?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos, tell us your S13 postcode, and we will explain what can
            be wrapped, what needs preparation, and whether a full refit would
            make more sense.
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
            Prefer a form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and include your Handsworth or S13 postcode.
          </p>
        </div>
      </section>
    </>
  );
}
