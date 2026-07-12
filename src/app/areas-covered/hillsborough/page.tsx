import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import { SchemaOrg, breadcrumbSchema, faqSchema } from "@/components/SchemaOrg";
import { GALLERY_IMAGES, SERVICE_IMAGES, FINISH_IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Hillsborough Sheffield | S6 Kitchen Wraps",
  description:
    "Kitchen wrapping in Hillsborough, Sheffield. Door, cupboard and worktop wraps for S6 homes near Hillsborough Park, Owlerton and the tram routes. Free quotes.",
  alternates: { canonical: "/areas-covered/hillsborough" },
};

const hillsboroughFaqs = [
  {
    question: "Do you cover all of Hillsborough and the wider S6 area?",
    answer:
      "Yes. We cover Hillsborough, Owlerton, Wadsley Bridge, the streets around Hillsborough Park and nearby S6 postcodes. If you are just outside Hillsborough, send your postcode and we will confirm before booking a survey.",
  },
  {
    question: "Is wrapping practical in a smaller Hillsborough terrace kitchen?",
    answer:
      "Usually, yes. Smaller terrace kitchens are often good candidates because the carcasses are still sound but the doors, end panels or worktops look dated. We remove doors where needed and work neatly, so there is no skip or long rip-out.",
  },
  {
    question: "How long does a Hillsborough kitchen wrap normally take?",
    answer:
      "Most kitchen wraps take 2 to 3 days, depending on the number of doors, drawers, panels and worktop runs. A doors-only refresh can be quicker, while a full door and worktop wrap needs more preparation time.",
  },
  {
    question: "Can you quote from photos before visiting?",
    answer:
      "Photos are a helpful first step. Send clear pictures of your doors, worktops and any damaged edges, then we can give an initial view before confirming the exact price after a survey.",
  },
] as const;

const suitabilityChecks = [
  "Flat or lightly profiled doors that are still solid underneath",
  "Worktops with sound edges and no major water swelling",
  "End panels and plinths that need matching to the new finish",
  "A layout you already like, but a colour or surface you are tired of",
];

const localConcerns = [
  {
    title: "Parking and access",
    body: "Around match days, tram stops and the busier roads near Hillsborough Corner, access can be tight. We plan surveys sensibly and only need normal working space, not a skip or a driveway full of materials.",
  },
  {
    title: "Older S6 kitchens",
    body: "A lot of Hillsborough homes have kitchens that have been updated in stages. We check hinges, doors, end panels and worktop edges before recommending a wrap, because vinyl only lasts if the surface beneath it is right.",
  },
  {
    title: "Keeping disruption down",
    body: "If you rely on the kitchen every day, wrapping is far easier to live with than a replacement. Doors can come off, surfaces are prepared, and most work is finished in days rather than dragging across weeks.",
  },
];

const pageUrl = `${SITE.url}/areas-covered/hillsborough`;

function hillsboroughServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kitchen Wrapping Hillsborough Sheffield",
    serviceType: "Kitchen vinyl wrapping",
    url: pageUrl,
    description:
      "Kitchen door, cupboard, worktop and full kitchen wrapping for homeowners in Hillsborough, Sheffield and nearby S6 areas.",
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phoneTel,
      email: SITE.email,
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Hillsborough, Sheffield",
      },
      {
        "@type": "PostalAddress",
        postalCode: "S6",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        addressCountry: "GB",
      },
    ],
  };
}

export default function HillsboroughKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Hillsborough", path: "/areas-covered/hillsborough" },
          ]),
          hillsboroughServiceSchema(),
          faqSchema(hillsboroughFaqs),
        ]}
      />

      <section className="bg-mist/40 section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Hillsborough kitchen wrapping</p>
            <h1 className="mt-4 font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Hillsborough, Sheffield
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your Hillsborough kitchen is solid but looking tired, wrapping
              can give it a proper fresh start without ripping the room apart.
              We cover homes across S6, from the streets around Hillsborough
              Park and the tram interchange to Owlerton, Wadsley Bridge and the
              stadium side of town.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-ink/65 sm:flex-row sm:flex-wrap">
              <span className="rounded-full bg-linen px-4 py-2">
                Doors, drawers and panels
              </span>
              <span className="rounded-full bg-linen px-4 py-2">
                Worktop wrap options
              </span>
              <span className="rounded-full bg-linen px-4 py-2">
                Usually done in 2-3 days
              </span>
            </div>
            <CtaButtons className="mt-8" />
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={GALLERY_IMAGES[1].src}
                alt="Navy kitchen door wrap finish suited to Hillsborough homes in Sheffield"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-6 py-4 text-sm text-ink/60">
              A darker door finish can sharpen up compact S6 kitchens without
              changing the layout.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why wrap here</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              A sensible option for busy Hillsborough homes
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink/65">
            <p>
              Hillsborough has a real mix of homes: terraces close to Langsett
              Road, family houses near the park, flats and rentals around the
              tram routes, and older properties that have had more than one
              kitchen update over the years. In many of those homes, the layout
              still works. The problem is usually the finish: yellowing doors,
              peeling vinyl, scratched worktops or colours that suited someone
              else&apos;s taste ten years ago.
            </p>
            <p>
              Kitchen wrapping is made for that kind of job. Instead of pulling
              out units, disturbing plumbing, waiting on fitters and living with
              dust, we prepare the surfaces you already have and apply a durable
              architectural vinyl finish. You can go warmer with wood effect,
              cleaner with soft matt colours, or bolder with navy, green or dark
              charcoal. If your existing carcasses are sound, it can look like a
              serious refit without the full replacement cost.
            </p>
            <p>
              We will still tell you straight if wrapping is not right. Blown
              worktops, badly swollen MDF or doors that have lost their shape may
              need repair or replacement first. A free survey is there to check
              that before you spend money.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">Local practicalities</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              What we look at on a Hillsborough survey
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {localConcerns.map((item) => (
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
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">What can be wrapped</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Doors only, worktops only, or the full kitchen
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Some Hillsborough homeowners only want the cupboard doors changed.
              Others want worktops, end panels and plinths included so the whole
              room feels consistent. We can talk through both routes and show
              you finishes that suit your light, flooring and wall colour.
            </p>
            <ul className="mt-8 space-y-4">
              {suitabilityChecks.map((item) => (
                <li
                  key={item}
                  className="border-b border-ink/10 pb-4 text-sm leading-relaxed text-ink/70 last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <Link href="/services" className="link-underline font-medium text-moss">
                See kitchen wrapping services
              </Link>
              <Link href="/pricing" className="link-underline font-medium text-moss">
                Check the Sheffield price guide
              </Link>
            </div>
          </div>

          <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2">
            <figure className="overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={SERVICE_IMAGES.worktops.src}
                  alt="Marble-effect worktop wrapping option for Hillsborough kitchens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </figure>
            <figure className="overflow-hidden rounded-3xl sm:translate-y-10">
              <div className="relative aspect-[4/5]">
                <Image
                  src={FINISH_IMAGES[0].src}
                  alt="Kitchen wrap colour samples for Sheffield homeowners"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-moss p-8 text-linen sm:p-10">
            <p className="eyebrow text-linen/75">Free quote</p>
            <h2 className="mt-4 font-heading text-4xl font-medium text-linen">
              Want us to look at your Hillsborough kitchen?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-linen/70">
              Send a few photos or book a free survey. We will tell you if a
              wrap makes sense, what finish options will work, and what the
              price looks like before you decide.
            </p>
            <div className="mt-6 space-y-2 text-sm text-linen/80">
              <p>Call: {SITE.phoneDisplay}</p>
              <p>Email: {SITE.email}</p>
            </div>
            <CtaButtons className="mt-8" onDark showCall />
          </div>

          <div>
            <p className="eyebrow">Hillsborough FAQs</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Questions before you book
            </h2>
            <div className="mt-8 space-y-3">
              {hillsboroughFaqs.map((faq) => (
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
            <Link
              href="/areas-covered"
              className="mt-8 inline-flex text-sm font-medium text-moss link-underline"
            >
              Back to all Sheffield areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
