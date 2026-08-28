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

const pagePath = "/kitchen-wrapping-vs-replacing";

export const metadata = pageMeta({
  title: "Kitchen Wrapping vs Replacing Sheffield | Honest Guide",
  description:
    "Kitchen wrapping vs replacing in Sheffield. Compare cost, disruption, condition checks and when a full kitchen replacement is the better answer.",
  path: pagePath,
});

const comparisonRows = [
  {
    label: "Best fit",
    wrap: "Sound cupboards, decent layout, tired doors or worktops",
    replace: "Failed carcasses, poor layout, damp, plumbing or electrical changes",
  },
  {
    label: "Typical disruption",
    wrap: "Usually measured in days, with no rip-out and no skip",
    replace: "Often weeks once delivery, trades, waste and snagging are included",
  },
  {
    label: "What changes",
    wrap: "Visible finish: doors, drawers, panels and suitable worktops",
    replace: "Layout, units, worktops, services, flooring and room structure if needed",
  },
  {
    label: "Sheffield practical point",
    wrap: "Helpful where parking, narrow terraces or shared access make big deliveries awkward",
    replace: "Worth it when the room genuinely needs rebuilding, not just refreshing",
  },
] as const;

const wrapSignals = [
  "The doors close properly and the carcasses feel firm.",
  "You like the kitchen layout but dislike the colour, gloss or worktop finish.",
  "You want the kitchen smarter before selling, letting or improving photos.",
  "You cannot face weeks of trades, deliveries and dust through the house.",
] as const;

const replacementSignals = [
  "Cabinets are swollen, loose, damp-damaged or coming away from the wall.",
  "You need to move plumbing, electrics, appliances or the whole kitchen layout.",
  "The doors themselves are the wrong style or too damaged to prepare cleanly.",
  "You are opening walls, adding an island or changing how the room works.",
] as const;

const localChecks = [
  {
    title: "Older terraces and tight streets",
    body: "In areas like Crookes, Walkley, Hillsborough, Heeley and parts of Abbeydale, a full rip-out can mean awkward skip placement, tight parking and a lot of carrying through narrow access. Wrapping avoids most of that because the kitchen stays in place.",
  },
  {
    title: "Skip and waste planning",
    body: "Sheffield City Council requires a permit when a builder's skip sits on a public road, pavement or verge. That does not make replacement wrong, but it is a real job-planning detail that many homeowners only discover once quotes start.",
  },
  {
    title: "Period homes need honesty",
    body: "Victorian and Edwardian homes can hide uneven walls, older wiring or pipework behind units. If those issues matter, replacement or building work may be the safer route. If they do not, wrapping can freshen the visible kitchen without opening the room up.",
  },
] as const;

const pageImages = [
  {
    src: PROCESS_IMAGES[0].src,
    alt: "Tired Sheffield kitchen before deciding between wrapping and replacement",
    caption: "Start with condition: tired is fine, failing is different.",
  },
  {
    src: SERVICE_IMAGES.full.src,
    alt: "Full kitchen wrap in Sheffield as an alternative to replacement",
    caption: "A full wrap changes the visible finish while keeping sound units.",
  },
  {
    src: GALLERY_IMAGES[5].src,
    alt: "Completed Sheffield kitchen wrap finish compared with replacing",
    caption: "The right choice depends on structure, layout and budget.",
  },
] as const;

const faqs = [
  {
    question: "Is kitchen wrapping always better than replacing?",
    answer:
      "No. Wrapping is better when the kitchen is structurally sound and you mainly want to change the look. Replacing is better when units are damaged, the layout does not work, or plumbing, electrics and building work are part of the problem.",
  },
  {
    question: "How do I know if my Sheffield kitchen is suitable for wrapping?",
    answer:
      "Send clear photos of the doors, drawer fronts, end panels, worktops, sink area and any peeling edges. We can usually spot obvious warning signs first, then arrange a free survey if the kitchen looks like a sensible candidate.",
  },
  {
    question: "Does wrapping avoid the need for a skip?",
    answer:
      "Usually, yes. A kitchen wrap keeps the existing units in place, so there is no full rip-out or pile of old cabinets to remove. That can be useful on Sheffield streets where skip placement, parking or shared access is awkward.",
  },
  {
    question: "Should I wrap before selling a house in Sheffield?",
    answer:
      "If the kitchen is sound but photographs badly, wrapping can be a practical way to make the room feel cleaner and more modern before sale. If buyers are likely to change the layout anyway, a smaller tidy-up may be enough.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping vs replacing advice in Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Advice and fitting for Sheffield homeowners comparing kitchen wrapping with replacing an existing kitchen, including door, cupboard, panel and worktop wrapping.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
  },
  areaServed: [
    { "@type": "City", name: "Sheffield" },
    { "@type": "AdministrativeArea", name: "South Yorkshire" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function KitchenWrappingVsReplacingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Kitchen Wrapping vs Replacing", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Wrapping vs replacing</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping vs Replacing in Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your kitchen looks tired, it is easy to assume the answer is a
              full rip-out. Sometimes it is. But plenty of Sheffield kitchens
              have solid units, a workable layout and one main problem: the
              finish no longer feels right.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              This guide helps you decide when wrapping is the sensible,
              lower-disruption choice, and when replacing is the honest answer.
              We would rather tell you straight than wrap a kitchen that should
              really be rebuilt.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Ask for Honest Advice"
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow">The short version</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Wrap what is sound. Replace what is failing.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Kitchen wrapping is not magic. It will not straighten a sagging
                cabinet, fix damp behind a sink base or turn a cramped layout
                into an open-plan kitchen-diner. What it can do is transform
                doors, drawer fronts, end panels and suitable worktops when the
                bones of the kitchen are still good.
              </p>
              <p>
                That distinction matters in Sheffield. A terrace kitchen around
                Hillsborough or Crookes may be narrow but perfectly usable. A
                family kitchen in Woodseats, Beauchief or Fulwood may have a
                sensible layout but dated gloss doors. In those cases, wrapping
                can deliver the change you actually want without paying for a
                room you do not need to rebuild.
              </p>
              <p>
                If you are still pricing options, compare our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>{" "}
                with the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                . You can also check the{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>{" "}
                if you want to know whether we regularly work near you.
              </p>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-ink/8 bg-linen">
            <div className="grid bg-mist/60 px-6 py-5 text-sm font-medium text-ink/70 md:grid-cols-[0.8fr_1fr_1fr]">
              <span>Decision point</span>
              <span className="mt-3 md:mt-0">Wrapping usually fits when...</span>
              <span className="mt-3 md:mt-0">Replacing is better when...</span>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-4 border-t border-ink/8 px-6 py-6 text-sm leading-relaxed md:grid-cols-[0.8fr_1fr_1fr]"
              >
                <p className="font-heading text-xl font-medium text-ink">
                  {row.label}
                </p>
                <p className="text-ink/65">{row.wrap}</p>
                <p className="text-ink/65">{row.replace}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Cost, mess and access</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The cheapest option is not always the best option
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                Wrapping often costs much less than a full replacement because
                the existing kitchen stays in place. There are fewer materials,
                less waste and less labour. That is why homeowners look at it
                when a full new kitchen quote feels too much for what is mainly
                a visual problem.
              </p>
              <p>
                A replacement becomes better value when it solves more than
                looks. If the room needs new wiring, plumbing, plastering,
                flooring or a different layout, paying only to change the
                surface may be false economy. You could end up wrapping around
                problems that still need sorting later.
              </p>
              <p>
                We keep the conversation practical. If wrapping is right, we
                show finish samples and explain what can be included. If it is
                not right, we will say so before you spend money on the wrong
                job.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={pageImages[1].src}
                alt={pageImages[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              {pageImages[1].caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Use these checks</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Four signs wrapping is worth a proper look
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {wrapSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-3xl border border-moss/15 bg-linen/70 p-6 text-sm leading-relaxed text-ink/70"
              >
                {signal}
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <figure className="overflow-hidden rounded-[2rem] bg-mist/60">
              <div className="relative aspect-[4/3]">
                <Image
                  src={pageImages[2].src}
                  alt={pageImages[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-ink/60">
                {pageImages[2].caption}
              </figcaption>
            </figure>

            <div>
              <p className="eyebrow">When not to wrap</p>
              <h2 className="mt-4 font-heading text-4xl font-medium">
                Four signs replacement may be the better spend
              </h2>
              <div className="mt-8 space-y-3">
                {replacementSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-2xl bg-mist/60 px-5 py-4 text-sm leading-relaxed text-ink/70"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Sheffield-specific detail</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Local practicalities change the calculation
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                A comparison page should not pretend every home is the same.
                Around Sheffield, the access, street layout and age of the house
                can matter just as much as the finish you choose.
              </p>
            </div>
            <div className="grid gap-5">
              {localChecks.map((item) => (
                <article key={item.title} className="rounded-3xl bg-linen p-7">
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
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Wrapping vs replacing questions</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl bg-mist/50 open:bg-mist/80"
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
            Not sure whether to wrap or replace?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos of your kitchen and tell us what you dislike about it.
            We will explain whether wrapping is sensible, what it could include
            and where replacement would be the better route.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Get a Free Opinion"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer to talk it through?{" "}
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "wrapping_vs_replacing_footer" }}
              className="font-medium text-linen link-underline"
            >
              Call {SITE.phoneDisplay}
            </TrackedLink>{" "}
            or use the main{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
