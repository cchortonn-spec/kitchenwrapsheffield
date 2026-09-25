import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { FINISH_IMAGES, PROCESS_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const pagePath = "/kitchen-looks-dated";

export const metadata = pageMeta({
  title: "Kitchen Looks Dated? Sheffield Wrap Advice | Refresh Without Refit",
  description:
    "Kitchen looks dated in Sheffield? Learn what makes a kitchen feel old, when wrapping helps, when it will not, and how to get a clear local quote.",
  path: pagePath,
});

const datedSignals = [
  {
    title: "The door colour is doing most of the damage",
    body: "Cream gloss, orange-toned wood effect, high-shine black, or cold grey can make an otherwise solid kitchen feel older than it is. If the layout works and the doors are flat and stable, wrapping can change the whole mood without changing the carcasses.",
  },
  {
    title: "The worktop is pulling the room backwards",
    body: "A stained laminate, busy speckled pattern, or dark counter can make new paint and accessories feel wasted. A worktop wrap can be the right fix when the board underneath is level, dry, secure, and not blown around the sink.",
  },
  {
    title: "Small details are making it look tired",
    body: "End panels, plinths, cornice, pelmet, handles and visible frame edges all matter. A dated kitchen often looks wrong because only the obvious doors have been considered, so our quote checks the whole visible run.",
  },
] as const;

const localScenarios = [
  "A Crookes or Walkley terrace where the kitchen layout is narrow but practical, so a low-mess refresh is easier than arranging a skip on a tight street.",
  "A Kelham Island or city-centre flat where lift access, parking and shared entrances make heavy replacement deliveries more awkward than a wrap installation.",
  "A Woodseats, Hillsborough or Mosborough family kitchen where the units still work well, but the colour and worktops make the room photograph badly.",
] as const;

const decisionChecks = [
  {
    label: "Wrap is usually worth pricing when...",
    points: [
      "Cabinet boxes are firm, dry and fixed in place.",
      "Doors and drawer fronts are flat enough for a clean finish.",
      "You like the layout and mainly want a fresher look.",
      "The worktops are sound but dated in colour or pattern.",
    ],
  },
  {
    label: "Replacement may be the better answer when...",
    points: [
      "Units are swollen, loose, mouldy or badly water damaged.",
      "You need a new layout, more storage or structural changes.",
      "Old wiring, plumbing or gas work needs sorting first.",
      "Door surfaces are failing so badly that a wrap would only hide the issue.",
    ],
  },
] as const;

const finishNotes = [
  {
    title: "Warm neutrals",
    body: "Useful in older Sheffield terraces where bright white can feel stark against original floors, darker corners or brick features.",
  },
  {
    title: "Soft greens and blues",
    body: "A good middle ground for family homes that need colour without making the kitchen feel trendy for only one season.",
  },
  {
    title: "Stone-effect worktops",
    body: "Helpful when the doors are not the main problem, but the counter surface makes the kitchen look flat or worn.",
  },
] as const;

const faqs = [
  {
    question: "Can wrapping really fix a kitchen that looks dated?",
    answer:
      "It can when the dated look comes from visible surfaces rather than the layout or structure. Doors, drawer fronts, end panels, plinths and worktops are what most people notice first. If those are sound, wrapping can make the kitchen feel much newer without a full refit.",
  },
  {
    question: "What if my Sheffield kitchen is old but still works well?",
    answer:
      "That is often the best situation for wrapping. Many Sheffield homes have perfectly usable carcasses but tired colours, dark worktops or worn door faces. We check condition first and will say if keeping the existing kitchen is sensible.",
  },
  {
    question: "Will a wrap help before selling or letting a property?",
    answer:
      "Often, yes. If the kitchen photographs badly but does not need a new layout, a wrap can improve the first impression for viewings. It is common for terraces, flats and rental kitchens where disruption and budget both matter.",
  },
  {
    question: "When should I not wrap a dated kitchen?",
    answer:
      "Do not wrap if the underlying units are damp, swollen, unstable or badly damaged. Wrapping is a finish, not a structural repair. In those cases we would recommend repairs, replacement doors or a fuller renovation before spending money on surface finishes.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dated kitchen wrapping advice Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Survey-first advice and vinyl wrapping for Sheffield kitchens that look dated but may not need a full replacement.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
  },
  areaServed: [
    { "@type": "City", name: "Sheffield" },
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Walkley" },
    { "@type": "Place", name: "Kelham Island" },
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Woodseats" },
    { "@type": "Place", name: "Mosborough" },
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
            { name: "Kitchen looks dated", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="eyebrow">Dated kitchen advice</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Looks Dated? A Sheffield Guide Before You Replace It
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your kitchen feels old every time you walk in, it is tempting
              to jump straight to replacement. But many Sheffield kitchens look
              dated because the visible surfaces are tired, not because the
              whole room has failed.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              Kitchen wrapping can change doors, drawer fronts, side panels and
              worktops while keeping the layout you already have. The important
              part is knowing whether your kitchen is a good candidate before
              you spend money.
            </p>
            <CtaButtons
              className="mt-8"
              quoteLabel="Ask If Wrapping Will Work"
              showCall
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src={PROCESS_IMAGES[0].src}
                alt="Tired grey Sheffield kitchen before vinyl wrapping"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              A dated finish does not always mean the whole kitchen needs
              replacing.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Start with the cause</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What is actually making the kitchen feel old?
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Most ranking advice says to change doors, handles, lighting or
              worktops. That can be true, but the order matters. If you only
              swap handles while the door colour still dominates the room, the
              kitchen will still feel dated. If you wrap perfect doors but leave
              a damaged worktop, the job can look unfinished.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {datedSignals.map((item) => (
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
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={SERVICE_IMAGES.doors.src}
                alt="Fresh navy kitchen door wrap for a dated Sheffield kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Door wrapping can modernise the part of the kitchen you notice
              first.
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">Sheffield homes</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Why local homes often suit a lower-disruption refresh
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                Sheffield has a mix of Victorian terraces, 1930s semis, newer
                estates and city flats. In many of them, the kitchen layout is
                perfectly usable. The problem is the finish: dark laminate,
                dated gloss, peeling edges, or a worktop that no longer suits
                the rest of the house.
              </p>
              <p>
                A full refit can still be right if you need plumbing,
                electrical work or a new layout. But if the units are sound,
                wrapping avoids weeks of upheaval and the practical headaches
                that come with heavy deliveries, waste and skips on narrow
                streets.
              </p>
              <p>
                For the full service breakdown, see our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrapping services
                </Link>
                . If cost is your first question, start with the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  kitchen wrap pricing guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Local examples</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                When a dated kitchen is a surface problem
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                These are the kinds of enquiries where we would usually ask for
                photos before suggesting a survey. The goal is not to force a
                wrap onto every kitchen. It is to work out whether the visible
                surfaces are the real issue.
              </p>
            </div>

            <div className="grid gap-4">
              {localScenarios.map((scenario) => (
                <p
                  key={scenario}
                  className="rounded-3xl bg-linen px-6 py-5 text-sm leading-relaxed text-ink/70 shadow-sm"
                >
                  {scenario}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Wrap or rethink?</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              A simple way to decide before you spend
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Search results often make each option sound like the obvious
              answer. In real homes, the right choice depends on condition. We
              would rather tell you not to wrap than put a fresh finish over a
              failing surface.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {decisionChecks.map((group) => (
              <article
                key={group.label}
                className="rounded-[2rem] border border-ink/8 bg-linen/80 p-7"
              >
                <h3 className="font-heading text-3xl font-medium">
                  {group.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.points.map((point) => (
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

      <section className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Finish choices</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Pick a finish that suits the house, not just the trend
            </h2>
            <div className="mt-6 space-y-4">
              {finishNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-2xl border border-ink/8 px-5 py-4"
                >
                  <h3 className="font-heading text-2xl font-medium">
                    {note.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-ink/65">
              If the worktop is the main issue, compare options on our{" "}
              <Link
                href="/pricing/worktop-wrap-cost-sheffield"
                className="font-medium text-moss link-underline"
              >
                worktop wrap cost guide
              </Link>
              . You can also check our{" "}
              <Link href="/areas-covered" className="font-medium text-moss link-underline">
                Sheffield areas covered
              </Link>{" "}
              if you want a more local page before getting in touch.
            </p>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={FINISH_IMAGES[0].src}
                alt="Kitchen wrap colour samples for modernising a dated Sheffield kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              Colour choice should work with the room, light and property style.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Dated kitchen FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Questions before you refresh an older kitchen
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
                Want to know if wrapping is the sensible fix?
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-linen/70">
                Send photos of the full kitchen, close-ups of any peeling or
                damaged areas, and your Sheffield postcode. We will tell you
                plainly whether a wrap, worktop refresh, replacement doors or a
                fuller refit is the better next step.
              </p>
              <div className="mt-8">
                <CtaButtons
                  onDark
                  showCall
                  quoteLabel="Send Photos for Advice"
                  callLabel={`Call ${SITE.phoneDisplay}`}
                />
              </div>
            </div>

            <div className="rounded-3xl border border-linen/15 bg-linen/8 p-6">
              <p className="font-heading text-2xl font-medium text-linen">
                Prefer to talk it through?
              </p>
              <p className="mt-4 text-sm leading-relaxed text-linen/70">
                Call {SITE.phoneDisplay} or email {SITE.email}. You can also use
                the{" "}
                <Link href="/contact" className="font-medium text-linen link-underline">
                  contact form
                </Link>{" "}
                and upload enough detail for a useful first answer.
              </p>
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "dated_kitchen_cta" }}
                className="mt-6 inline-flex text-sm font-medium text-linen link-underline"
              >
                Call {SITE.phoneDisplay}
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
