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

const pagePath = "/peeling-cupboard-doors";

export const metadata = pageMeta({
  title: "Peeling Cupboard Doors Sheffield | Repair, Rewrap or Replace?",
  description:
    "Peeling kitchen cupboard doors in Sheffield? Learn why vinyl doors lift, when rewrapping works, when spraying or replacement is better, and how to get honest advice.",
  path: pagePath,
});

const warningSigns = [
  {
    title: "Edges lifting near heat or steam",
    body: "Kettles, ovens, hobs and dishwashers often start the problem at the door edge. Once steam gets behind old vinyl or foil, the glue can fail and the loose edge usually keeps spreading.",
  },
  {
    title: "Bubbles across the door face",
    body: "Bubbling normally means the factory-applied vinyl has let go from the MDF underneath. Pressing it flat may hide it for a day, but it rarely bonds cleanly again.",
  },
  {
    title: "Swollen MDF under the loose finish",
    body: "If the exposed board has gone furry, soft or raised, it needs checking before anyone promises a wrap. A smart finish on a damp or blown base will not last.",
  },
] as const;

const decisionRoutes = [
  {
    label: "Rewrap may be worth pricing when",
    points: [
      "Only the visible finish has failed and the door underneath is dry, flat and stable.",
      "You want to change the colour or finish across several doors, panels or worktops.",
      "The kitchen layout works and the carcasses are still solid.",
    ],
  },
  {
    label: "Spraying can be the better route when",
    points: [
      "The old vinyl needs removing from shaped MDF doors before a new colour goes on.",
      "You want a painted colour match across doors, frames and fixed panels.",
      "Several doors have failed but the MDF can be prepared properly.",
    ],
  },
  {
    label: "Replacement is safer when",
    points: [
      "Water has swollen the door around the sink, dishwasher or plinth line.",
      "Edges are crumbly, hinges are loose, or the door profile has moved.",
      "Only one or two damaged doors need matching and the rest of the kitchen is fine.",
    ],
  },
] as const;

const localChecks = [
  "A Walkley or Crookes terrace kitchen where the kettle sits under a wall unit and steam has lifted the underside of the door.",
  "A Hillsborough, Upperthorpe or S6 rental where peeling foil makes the kitchen look neglected even though the boxes are still firm.",
  "A Nether Edge, Woodseats or Ecclesall Road let where condensation and heavy daily use mean the cause needs sorting before cosmetic work.",
] as const;

const prepSteps = [
  "Send close-up photos of the peeling, plus a wider shot of the whole kitchen so we can see matching and layout.",
  "We check whether the exposed MDF is dry, smooth and still bonded well enough for a new finish.",
  "If wrapping is sensible, we price the doors, drawer fronts, end panels and any worktop sections as one coherent job.",
  "If spraying, replacement doors or repair work makes more sense, we will say that before you spend money on the wrong finish.",
] as const;

const faqs = [
  {
    question: "Can you glue peeling vinyl back onto cupboard doors?",
    answer:
      "We would not recommend it as a proper repair. Glue can leave lumps, bubbles and messy edges, and heat or steam often makes the same section lift again. It can also make later preparation harder if the MDF underneath needs stripping, priming, wrapping or spraying.",
  },
  {
    question: "Can peeling kitchen cupboard doors be wrapped again?",
    answer:
      "Sometimes, yes, but only after checking the base. If the door is dry, flat and sound once the failed finish is dealt with, wrapping may be possible. If the MDF is swollen, crumbly or damp, replacement or another repair route is usually safer.",
  },
  {
    question: "Why do cupboard doors peel in Sheffield kitchens?",
    answer:
      "The causes are usually practical rather than local magic: steam from kettles and hobs, heat near ovens, moisture around sinks, old adhesive and poor ventilation. Sheffield Council guidance on condensation also points homeowners towards using kitchen ventilation and not blocking permanent vents, which matters in older terraces and rentals.",
  },
  {
    question: "Will you tell me if wrapping is not the right fix?",
    answer:
      "Yes. Peeling doors are exactly the sort of job where we need to be honest. If a wrap would hide a failing surface for a short time rather than solve the problem, we will explain the safer options before quoting.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Peeling cupboard door advice Sheffield",
  serviceType: "Kitchen door wrapping and surface suitability advice",
  description:
    "Survey-first advice for Sheffield homeowners with peeling kitchen cupboard doors, including rewrap suitability, worktop wrapping, surface checks and alternatives to replacement.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
  },
  areaServed: [
    { "@type": "City", name: "Sheffield" },
    { "@type": "Place", name: "Walkley" },
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Nether Edge" },
    { "@type": "Place", name: "Woodseats" },
    { "@type": "Place", name: "Ecclesall Road" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function PeelingCupboardDoorsPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Peeling cupboard doors", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="eyebrow">Peeling door advice</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Peeling Kitchen Cupboard Doors in Sheffield?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If the vinyl or foil is lifting from your cupboard doors, the
              first question is not which colour to pick. It is whether the door
              underneath is still sound enough to take a proper new finish.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We help Sheffield homeowners work out whether peeling cupboard
              doors can be rewrapped, whether spraying is the better repair, or
              whether a few replacement doors would save money in the long run.
              No hard sell. Just a straight answer after seeing the surfaces.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Send Photos for Advice"
              showCall
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src={PROCESS_IMAGES[0].src}
                alt="Tired Sheffield kitchen doors before wrapping suitability check"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Peeling needs a surface check before anyone promises a new finish.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">What is failing?</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Peeling is a symptom, not the whole problem
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                Many kitchen doors are MDF with a vinyl or foil face bonded on
                at the factory. Over time, heat, steam, old adhesive and
                everyday moisture can break that bond. Once a corner lifts, the
                loose area catches more steam and grease, so it rarely fixes
                itself.
              </p>
              <p className="mt-4 leading-relaxed text-ink/65">
                That is why we do not start by saying every peeling door should
                be wrapped. A good result depends on what is left behind when
                the failed finish is removed or trimmed back.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {warningSigns.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-ink/8 bg-linen/70 p-6 shadow-sm"
                >
                  <h3 className="font-heading text-2xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={SERVICE_IMAGES.doors.src}
                alt="Fresh wrapped kitchen doors after Sheffield cupboard door repair advice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              A fresh door finish only lasts if the base is suitable first.
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">Do not patch and hope</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Why glue is usually the wrong answer
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                It is tempting to dab glue under the lifted vinyl and clamp it
                down. The problem is that the old adhesive has already failed,
                and kitchen doors keep facing the same heat, steam and cleaning
                products that caused the lift in the first place.
              </p>
              <p>
                A quick glue repair can also leave ridges under the surface.
                Those ridges show through a new wrap, and some glues make it
                harder to prepare the MDF if spraying becomes the better option.
              </p>
              <p>
                If the kitchen also looks tired overall, read our{" "}
                <Link href="/kitchen-looks-dated" className="font-medium text-moss link-underline">
                  dated kitchen advice
                </Link>
                . If the surfaces are sound and you want a wider refresh, our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>{" "}
                page explains doors, panels and worktops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Choose the right fix</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Rewrap, spray, or replace?
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Search results can make every service sound like the only sensible
              one. In a real kitchen, the answer depends on the door material,
              the damage, whether the failure is localised, and whether the rest
              of the kitchen is worth keeping as it is.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {decisionRoutes.map((route) => (
              <article
                key={route.label}
                className="rounded-[2rem] border border-ink/8 bg-linen/70 p-7"
              >
                <h3 className="font-heading text-3xl font-medium">
                  {route.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {route.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl bg-mist/55 px-5 py-4 text-sm leading-relaxed text-ink/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Sheffield homes</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Heat, steam and ventilation matter locally
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Sheffield has plenty of older terraces, student lets, compact
              flats and busy family kitchens where moisture hangs around longer
              than people realise. Council condensation guidance talks about
              ventilating kitchens and bathrooms, closing doors while cooking,
              and not blocking permanent vents. That is not just damp advice. It
              can affect how long cupboard finishes last.
            </p>
            <div className="mt-6 grid gap-3">
              {localChecks.map((check) => (
                <p
                  key={check}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/70 shadow-sm"
                >
                  {check}
                </p>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-ink/65">
              If the worktop around the sink is also tired or lifting, compare
              options on our{" "}
              <Link
                href="/pricing/worktop-wrap-cost-sheffield"
                className="font-medium text-moss link-underline"
              >
                worktop wrap cost guide
              </Link>
              .
            </p>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={GALLERY_IMAGES[2].src}
                alt="Powder blue kitchen cabinet wrap for a Sheffield home with refreshed doors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Sorting the cause of peeling helps the new finish stay smart.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">Survey-first quoting</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What to send before we advise
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A useful quote needs more than one cropped photo of a lifted
              corner. We need to see the whole run, the problem areas and the
              places that create heat or steam. That helps us avoid vague advice
              and spot when a door is already too damaged for wrapping.
            </p>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "peeling_doors_quote_section" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} if you want to talk it through
            </TrackedLink>
          </div>

          <ol className="space-y-4">
            {prepSteps.map((step, index) => (
              <li
                key={step}
                className="grid gap-4 rounded-3xl bg-mist/45 p-6 sm:grid-cols-[4rem_1fr] sm:items-start"
              >
                <span className="font-heading text-4xl font-medium text-moss/35">
                  0{index + 1}
                </span>
                <p className="text-base leading-relaxed text-ink/70">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Peeling cupboard door FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before you repair peeling doors
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl bg-linen/80 open:bg-linen"
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
              <p className="eyebrow text-linen/60">Free Sheffield advice</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
                Not sure whether peeling doors can be saved?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send photos of the lifting vinyl, the door edges, the sink and
                hob areas, and your Sheffield postcode. We will give a straight
                view on wrapping, spraying, replacement doors or a fuller
                refresh.
              </p>
              <div className="mt-8">
                <CtaButtons
                  onDark
                  showCall
                  quoteLabel="Ask for Door Advice"
                  callLabel={`Call ${SITE.phoneDisplay}`}
                />
              </div>
            </div>

            <div className="rounded-3xl border border-linen/15 bg-linen/8 p-6">
              <p className="font-heading text-2xl font-medium text-linen">
                Prefer a form?
              </p>
              <p className="mt-4 text-sm leading-relaxed text-linen/70">
                Use the{" "}
                <Link href="/contact" className="font-medium text-linen link-underline">
                  contact page
                </Link>{" "}
                and include close-ups, a full kitchen photo and whether any
                doors feel soft or swollen.
              </p>
              <p className="mt-5 text-sm text-linen/70">
                For budget context, the{" "}
                <Link href="/pricing" className="font-medium text-linen link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>{" "}
                is a useful starting point before an exact quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
