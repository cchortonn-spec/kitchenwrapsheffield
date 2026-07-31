import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { BEFORE_AFTER, FINISH_IMAGES, PROCESS_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kitchen Looks Dated? Sheffield Kitchen Wrap Advice",
  description:
    "If your Sheffield kitchen looks dated, see when wrapping is enough, when replacement is better, and how to refresh doors and worktops without a full rip-out.",
  path: "/kitchen-looks-dated",
});

const pagePath = "/kitchen-looks-dated";

const datedSignals = [
  {
    title: "The colour dates the whole room",
    body: "Gloss cream, orange-toned wood, high-shine red or dark brown doors can make a kitchen feel older even when the units still work perfectly well.",
  },
  {
    title: "The worktop pulls the eye",
    body: "A marked laminate worktop, tired breakfast bar or old speckled surface can make the room feel worn before anyone notices the cupboards.",
  },
  {
    title: "The layout is fine, but the finish is not",
    body: "If storage, appliances and walkways still suit your daily routine, changing the visible surfaces may be enough.",
  },
  {
    title: "Small details spoil good carcasses",
    body: "End panels, plinths, handles and exposed edges often age faster than the cabinet boxes behind them.",
  },
] as const;

const localHomes = [
  "Narrow terrace kitchens around Crookes, Walkley, Hillsborough and Meersbrook where the layout is compact but already familiar",
  "Rental flats and city-centre apartments where photos matter and long renovation downtime is awkward",
  "Family kitchens in Woodseats, Beauchief and Fulwood where a full rip-out would disrupt school runs, pets and normal routines",
  "Older Sheffield homes where chimney breasts, uneven walls or previous alterations make a simple cosmetic refresh more sensible than forcing a new layout",
] as const;

const wrapIsGoodWhen = [
  "Doors and drawer fronts are flat, secure and not swollen",
  "Carcasses are solid and the current layout still works",
  "You mainly dislike the colour, sheen, worktop or general dated look",
  "You want a cleaner kitchen for living, letting or selling without weeks of trades",
] as const;

const replaceInsteadWhen = [
  "The carcasses are water damaged, loose or badly out of square",
  "The layout causes daily problems that a new finish will not solve",
  "You need plumbing, electrics, walls or storage redesigned",
  "Door profiles are failing or you want a completely different shape, not just a new finish",
] as const;

const faqs = [
  {
    question: "Can kitchen wrapping fix a dated Sheffield kitchen?",
    answer:
      "Yes, if the kitchen is structurally sound and the main problem is the finish. Wrapping can change doors, drawer fronts, end panels and worktops, which is usually what makes a solid kitchen look dated.",
  },
  {
    question: "What if my dated kitchen has old-fashioned door shapes?",
    answer:
      "Sometimes wrapping still works, especially if the profile is clean and the doors are in good condition. If the style itself is the problem, replacement doors or a full refit may be more honest. We will tell you at survey.",
  },
  {
    question: "Which finishes make an older kitchen look more current?",
    answer:
      "Soft matt greens, warm neutrals, navy, charcoal, pale wood and stone-effect worktops all work well in many Sheffield homes. The right answer depends on light, flooring, wall colour and whether the room is narrow or open-plan.",
  },
  {
    question: "Is wrapping worth doing before selling a house?",
    answer:
      "It can be, provided the units are sound. A dated kitchen can pull down first impressions in photos and viewings. Wrapping is often useful when you want the kitchen to look cleaner without investing in a full replacement before moving.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dated kitchen wrapping advice in Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Advice and kitchen wrapping services for Sheffield homeowners whose kitchen looks dated but does not need a full replacement.",
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
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Walkley" },
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Woodseats" },
    { "@type": "Place", name: "Beauchief" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function KitchenLooksDatedPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Kitchen Looks Dated", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Dated kitchen advice</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Looks Dated? What to Do Before You Rip It Out
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              A kitchen can look tired long before it is actually broken. If
              the layout works, the cabinets are solid and the main problem is
              colour, worktops or worn fronts, wrapping may give you the change
              you want without a full replacement. If the kitchen needs deeper
              work, we will say that too.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Ask if Wrapping Will Work"
                showCall
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src={BEFORE_AFTER.before.src}
                alt="Dated cream Sheffield kitchen before vinyl wrapping"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <span className="absolute left-4 top-4 rounded-full bg-linen/90 px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
                Before
              </span>
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              A dated finish can make sound units look ready for replacing
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Start with the real problem</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Why does the kitchen feel dated?
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Before spending money, separate the look from the structure. Lots
              of Sheffield kitchens feel old because the visible finish belongs
              to another decade, not because the cabinets have failed. That is
              exactly where wrapping can be useful.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {datedSignals.map((signal) => (
              <article
                key={signal.title}
                className="rounded-3xl border border-ink/8 bg-linen/70 p-7"
              >
                <h3 className="font-heading text-2xl font-medium">
                  {signal.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {signal.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">What a wrap can change</p>
              <h2 className="mt-4 font-heading text-4xl font-medium">
                Same kitchen, cleaner first impression
              </h2>
              <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
                <p>
                  A wrap will not move a sink, knock through a wall or create
                  extra storage. It can, however, change the parts you see every
                  day: doors, drawers, side panels, plinths, cornice and
                  worktops. In a kitchen where the layout is already practical,
                  that can be the difference between &quot;we need a new
                  kitchen&quot; and &quot;this finally feels like our room
                  again.&quot;
                </p>
                <p>
                  You can compare the options on our{" "}
                  <Link href="/services" className="font-medium text-moss link-underline">
                    kitchen wrapping services
                  </Link>{" "}
                  page, then check likely ranges on the{" "}
                  <Link href="/pricing" className="font-medium text-moss link-underline">
                    Sheffield pricing guide
                  </Link>
                  . We keep the conversation practical: what can be wrapped,
                  what should be left alone and what needs replacing.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[BEFORE_AFTER.before, BEFORE_AFTER.after].map((shot) => (
                <figure key={shot.label} className="overflow-hidden rounded-3xl bg-linen">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-linen/90 px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
                      {shot.label}
                    </span>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Sheffield homes</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Useful when the room is awkward but already works
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink/65">
              <p>
                Many Sheffield homes have kitchens shaped by the house rather
                than by a showroom plan. Terraces around Crookes, Walkley,
                Hillsborough and Meersbrook can be narrow, with chimney breasts,
                older walls or layouts that have evolved over time. If that
                layout still suits you, a cosmetic refresh may be more sensible
                than forcing a bigger project.
              </p>
              <p>
                The same thinking applies to rental flats, semis and family
                homes across the city. A dated kitchen can make a clean property
                feel unloved, but replacing everything is not always the best
                first move. Our{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas covered
                </Link>{" "}
                page shows the local parts of Sheffield we already write about
                in more detail.
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "kitchen_looks_dated_local_section" }}
                className="inline-flex font-medium text-moss link-underline"
              >
                Call {SITE.phoneDisplay} for straight advice
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-3">
            {localHomes.map((home) => (
              <div
                key={home}
                className="rounded-2xl border border-ink/8 bg-mist/50 px-5 py-4 text-sm leading-relaxed text-ink/70"
              >
                {home}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={FINISH_IMAGES[0].src}
                alt="Kitchen wrap colour samples for updating a dated Sheffield kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Samples help choose a finish that suits the light in your room
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">Honest suitability check</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              When wrapping is enough, and when it is not
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              We would rather turn down the wrong job than wrap a kitchen that
              will disappoint you. Dated is fine. Rotten, loose or badly planned
              is different. Here is the simple split we use when looking at
              photos or surveying in person.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-linen p-6">
                <h3 className="font-heading text-2xl font-medium text-moss">
                  Wrapping may be right
                </h3>
                <ul className="mt-5 grid gap-3">
                  {wrapIsGoodWhen.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-linen p-6">
                <h3 className="font-heading text-2xl font-medium text-moss">
                  Replacement may be better
                </h3>
                <ul className="mt-5 grid gap-3">
                  {replaceInsteadWhen.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Send photos before you spend money
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              The easiest first step is not a showroom appointment. Send clear
              photos of the whole kitchen, close-ups of door edges, any peeling
              or swelling, the worktops and the parts you dislike most. We can
              often tell from those photos whether wrapping is worth a survey.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              If it looks promising, we bring samples, check condition properly
              and give you a clear quote. If it looks like replacement doors or
              a full kitchen would be better, you will know before you waste
              money on the wrong fix.
            </p>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={PROCESS_IMAGES[1].src}
                alt="Kitchen wrapping preparation for a dated Sheffield kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Good preparation is what makes a cosmetic refresh last
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Dated kitchen questions</p>
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
          <p className="eyebrow text-linen/60">Free suitability check</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Not sure whether your dated kitchen is worth wrapping?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send photos or book a free survey. We will tell you plainly whether
            a wrap, replacement doors or a bigger refit makes most sense.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Ask for Honest Advice"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer typing it out? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact form
            </Link>{" "}
            and include your Sheffield postcode.
          </p>
        </div>
      </section>
    </>
  );
}
