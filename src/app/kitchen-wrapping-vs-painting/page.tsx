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
  title: "Kitchen Wrapping vs Painting Sheffield | Honest Comparison",
  description:
    "Kitchen wrapping vs painting in Sheffield: compare cost, finish, disruption, durability and when each option makes sense for your doors and worktops.",
  path: "/kitchen-wrapping-vs-painting",
});

const pagePath = "/kitchen-wrapping-vs-painting";

const pageImages = [
  {
    src: SERVICE_IMAGES.doors.src,
    alt: "Wrapped kitchen cupboard doors in a Sheffield home",
    caption: "Wrapping changes the visible door finish without waiting for paint to cure",
  },
  {
    src: GALLERY_IMAGES[4].src,
    alt: "Black marble worktop wrap detail in Sheffield",
    caption: "Wraps can add stone, marble, concrete and wood effects that paint cannot copy",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen doors being prepared for wrapping in Sheffield",
    caption: "Good preparation matters whichever route you choose",
  },
] as const;

const decisionCards = [
  {
    title: "Choose wrapping when",
    points: [
      "You want a textured finish such as woodgrain, marble, stone or concrete.",
      "You want doors, panels and suitable worktops refreshed together.",
      "You need the room back quickly with no paint smell or long curing period.",
      "Your doors are flat, cleanable and sound enough to take architectural vinyl.",
    ],
  },
  {
    title: "Choose painting when",
    points: [
      "You have solid timber doors with detail you want to keep visible.",
      "You want a specific paint colour matched to walls, furniture or joinery.",
      "You only need the cupboards changing, not the worktops or appliance panels.",
      "You are happy with drying time, masking and the risk of paint chips later.",
    ],
  },
] as const;

const comparisonRows = [
  {
    factor: "Finish choice",
    wrapping:
      "Matt colours, gloss, wood effect, stone effect, marble, concrete and other tactile finishes.",
    painting:
      "Excellent for solid colours, especially if colour matching is more important than texture.",
  },
  {
    factor: "Typical disruption",
    wrapping:
      "Often finished in 1-3 days for suitable Sheffield kitchens, with no drying time between coats.",
    painting:
      "Can take several days once cleaning, sanding, priming, spraying or brushing and curing are included.",
  },
  {
    factor: "Worktops",
    wrapping:
      "Suitable worktops can be wrapped, including marble and stone-effect finishes after a condition check.",
    painting:
      "Paint is generally not the right answer for normal kitchen worktop wear, heat and water.",
  },
  {
    factor: "Surface condition",
    wrapping:
      "Needs a stable surface. Swollen MDF, greasy edges or lifting foil must be addressed first.",
    painting:
      "Also needs preparation. Flaking paint, grease and failed laminate will show through if ignored.",
  },
] as const;

const localFit = [
  "Terrace kitchens in Crookes, Walkley and Hillsborough where a full strip-out would block narrow rooms and busy streets.",
  "Period homes around Nether Edge, Sharrow and Fulwood where a calm matt door wrap can sit alongside older features.",
  "City-centre and Kelham Island flats where less smell, less dust and no skip can make a big difference.",
  "Family homes around Woodseats, Beauchief and Totley where the layout works but the doors and worktops date the room.",
] as const;

const surveyChecks = [
  "Door material, edge condition, hinges, handle holes and whether any old foil is lifting.",
  "Grease around extractors, kettles and hobs, because both vinyl and paint fail early on poor preparation.",
  "Worktop joins, sink cut-outs, upstands and splash zones if you are comparing a full wrap with cupboard painting.",
  "How much downtime the household can tolerate, especially if you work from home or have a busy family kitchen.",
] as const;

const faqs = [
  {
    question: "Is kitchen wrapping better than painting for Sheffield homes?",
    answer:
      "It depends on the kitchen. Wrapping is usually better if you want textured finishes, worktop options and a quick turnaround. Painting can be better for solid wood doors, detailed shaker-style cupboards or a very specific paint colour.",
  },
  {
    question: "Can painted kitchen doors be wrapped later?",
    answer:
      "Sometimes, but the paint has to be sound. If it is flaking, soft, greasy or badly brush-marked, it may need stripping or repair before a wrap can be fitted cleanly. We check this during the survey.",
  },
  {
    question: "Does wrapping smell less than painting?",
    answer:
      "Yes. Wrapping does not rely on wet paint coats, drying time or curing. That can help in smaller Sheffield terraces, flats and winter jobs where leaving windows open all day is not ideal.",
  },
  {
    question: "Should I paint or wrap my kitchen worktops?",
    answer:
      "For most worktops, wrapping is the more realistic refresh option. Paint is rarely suited to the water, wiping, heat and impact a worktop sees. We still need to check the existing worktop is stable before recommending a wrap.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping vs painting advice in Sheffield",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Advice and surveys for Sheffield homeowners comparing kitchen wrapping with painting, including cupboard doors, panels and suitable worktops.",
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
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Nether Edge" },
    { "@type": "Place", name: "Woodseats" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function KitchenWrappingVsPaintingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Kitchen wrapping vs painting", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Wrap or paint?</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping vs Painting in Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your kitchen cupboards look tired, painting and wrapping can
              both avoid a full replacement. The right choice depends on the
              surface underneath, the finish you want, whether worktops are
              involved and how much disruption your household can handle.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              This guide gives a straight comparison for Sheffield homes, from
              narrow terraces in Crookes and Hillsborough to flats around Kelham
              Island and older houses near Nether Edge. We will tell you when a
              wrap makes sense, and when painting is the more honest answer.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Ask for a Wrap Survey"
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">The short answer</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Wrapping changes the surface. Painting changes the colour.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                A professional kitchen wrap covers suitable doors, drawer
                fronts, end panels and sometimes worktops with architectural
                vinyl. It creates a new outer layer, so you can choose finishes
                that paint cannot realistically copy: marble, stone, concrete,
                woodgrain, soft matt neutrals or gloss colours.
              </p>
              <p>
                Painting keeps the original surface visible and adds a coated
                colour. Done well, a sprayed cupboard repaint can look smart,
                especially on timber or detailed doors. Done quickly with a
                brush and poor preparation, it can chip, show ridges and start
                looking tired again around handles.
              </p>
              <p>
                Before you decide, compare our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , look at the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , and check the wider{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>
                . A good quote should explain the condition of your kitchen, not
                just sell one method.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {decisionCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-ink/8 bg-linen/70 p-7"
              >
                <h3 className="font-heading text-3xl font-medium">
                  {card.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/65">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-moss" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
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
            <p className="eyebrow">Finish and feel</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Paint is strongest on colour. Wrap wins when texture matters.
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/65">
              <p>
                If you want sage green, warm white, navy or charcoal doors,
                either option may be worth considering. The difference becomes
                clearer when the brief includes a marble-effect worktop, a
                walnut look, a concrete breakfast bar or matching end panels
                and plinths. Those are wrap-led finishes.
              </p>
              <p>
                Sheffield kitchens also vary a lot by property type. A compact
                city flat may need a light-reflecting finish without days of
                masking and paint smell. A larger Fulwood or Dore kitchen with
                painted timber cabinetry may suit a specialist repaint if the
                existing doors are part of the character of the room.
              </p>
            </div>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "wrap_vs_paint_finish" }}
              className="mt-7 inline-flex text-sm font-medium text-moss link-underline"
            >
              Call {SITE.phoneDisplay} to compare your options
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Side-by-side</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              The practical differences before you book anything
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Search results often argue that one method always wins. Real
              kitchens are not that tidy. The better question is which method
              fits the surface, the finish and the way your home is used.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-ink/8 bg-linen">
            <div className="grid bg-mist/70 text-sm font-medium text-ink sm:grid-cols-[0.8fr_1fr_1fr]">
              <div className="px-5 py-4">Factor</div>
              <div className="px-5 py-4">Wrapping</div>
              <div className="px-5 py-4">Painting</div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.factor}
                className="grid border-t border-ink/8 text-sm leading-relaxed text-ink/65 sm:grid-cols-[0.8fr_1fr_1fr]"
              >
                <div className="bg-mist/30 px-5 py-4 font-medium text-ink">
                  {row.factor}
                </div>
                <div className="px-5 py-4">{row.wrapping}</div>
                <div className="px-5 py-4">{row.painting}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Local reality</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Why low-disruption work matters in Sheffield kitchens
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A full replacement can be the right choice when the layout is
              wrong or the units are failing. But if the kitchen is structurally
              sound, a lighter refresh can avoid weeks of cooking around dust,
              trades and deliveries. That matters when parking is tight, access
              is narrow or there is no easy place for a skip.
            </p>
          </div>

          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {localFit.map((item) => (
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

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Survey checks</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                The honest answer comes from looking at the kitchen first
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                We do not need you to know the right technical term for every
                panel. Send photos or book a free survey and we will check the
                details that decide whether wrapping is sensible.
              </p>
            </div>

            <div className="space-y-3">
              {surveyChecks.map((check) => (
                <div
                  key={check}
                  className="rounded-2xl border border-ink/8 bg-linen/70 px-5 py-4 text-sm leading-relaxed text-ink/75"
                >
                  {check}
                </div>
              ))}
              <div className="mt-6 rounded-[2rem] bg-moss px-7 py-8 text-linen sm:px-9">
                <h3 className="font-heading text-3xl font-medium text-linen">
                  Not sure if your doors should be painted or wrapped?
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-linen/70">
                  Tell us what you dislike about the kitchen, include your
                  Sheffield postcode and send a few clear photos. We will give
                  you a practical view before you spend money on the wrong
                  route.
                </p>
                <CtaButtons className="mt-7" onDark quoteLabel="Get Advice" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Kitchen wrapping vs painting FAQs
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
        <div className="container-site section-padding text-center">
          <p className="eyebrow text-linen/60">Free Sheffield quote</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Compare wrapping and painting before you commit
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            If wrapping is right, we will quote clearly. If your kitchen is a
            better candidate for painting or replacement, we will say so.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Book a Free Survey"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer the form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and mention that you are comparing painting with wrapping.
          </p>
        </div>
      </section>
    </>
  );
}
