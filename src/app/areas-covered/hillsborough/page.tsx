import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { GALLERY_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Hillsborough Sheffield | S6 Kitchen Wraps",
  description:
    "Kitchen wrapping in Hillsborough, Sheffield for S6 terraces, family homes and rental kitchens. Door, worktop and full wraps with free local quotes.",
  path: "/areas-covered/hillsborough",
});

const localFit = [
  {
    title: "Good for S6 terrace kitchens",
    body: "A lot of Hillsborough homes have practical galley or off-shot kitchens where the units are still solid but the finish feels tired. Wrapping keeps the layout you already know, but changes the look properly.",
  },
  {
    title: "Less disruption on tight streets",
    body: "No skip outside, no ripped-out carcasses, and no kitchen unusable for weeks. That matters on residential streets around Middlewood Road, Parkside Road, and the roads running down towards Penistone Road.",
  },
  {
    title: "Useful before selling or letting",
    body: "If the kitchen photographs badly but the cupboards work, a clean door and worktop wrap can make the room feel cared for without taking on a full refit.",
  },
];

const processNotes = [
  "Send photos or book a free survey so we can check the doors, drawer fronts, end panels, and worktops.",
  "We talk through finishes that suit your house: matt neutrals, warmer wood effects, darker modern colours, or stone-style worktops.",
  "Doors are removed where needed, surfaces are prepared properly, and the wrap is fitted cleanly around edges and handles.",
  "Before we leave, we do a walkthrough with you and give care advice so the finish keeps looking smart.",
];

const hillsboroughFaqs = [
  {
    question: "Do you cover all of Hillsborough and S6?",
    answer:
      "Yes. We cover Hillsborough and nearby S6 areas including roads around Hillsborough Park, Middlewood Road, Penistone Road, Wadsley, Walkley edge, and Stannington side. Send your postcode if you are just outside the area.",
  },
  {
    question: "Is wrapping suitable for older terraced kitchens?",
    answer:
      "Often, yes. Many older Hillsborough kitchens have solid carcasses but dated doors or worktops. If the units are swollen, badly peeling, or loose, we will tell you straight before quoting.",
  },
  {
    question: "How long does a Hillsborough kitchen wrap normally take?",
    answer:
      "Most local door and worktop wraps take 2-3 days once materials are ready. Smaller door-only jobs can be quicker, and larger kitchens or extra panels may take longer.",
  },
  {
    question: "Can you work around parking and access on narrow streets?",
    answer:
      "Usually, yes. We do not need a skip or heavy materials like a full kitchen refit. If access is tricky, mention it when you enquire and we will plan the survey and fitting sensibly.",
  },
];

function hillsboroughServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kitchen wrapping in Hillsborough, Sheffield",
    description:
      "Vinyl kitchen door, cupboard, worktop, and full kitchen wrapping for homeowners in Hillsborough and the S6 area of Sheffield.",
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
    serviceType: "Kitchen wrapping",
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
            <p className="mt-6 text-lg leading-relaxed text-ink/65">
              Fed up with a kitchen that looks dated, but not ready for a full
              rip-out? We wrap kitchen doors, drawers, end panels, and worktops
              across Hillsborough and the wider S6 area, giving solid kitchens a
              fresh finish without weeks of mess.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Hillsborough has a real mix of homes: terraces near the tram and
              shops, family houses around Hillsborough Park, and properties
              heading up towards Wadsley and Stannington. The right wrap depends
              on the kitchen in front of us, so we quote after seeing photos or
              visiting properly.
            </p>
            <CtaButtons
              className="mt-8"
              showCall
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-linen shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src={GALLERY_IMAGES[1].src}
                alt="Navy kitchen door wrap suitable for a Hillsborough Sheffield home"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink/60">
              A door wrap can change the room without changing the whole
              kitchen layout.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Local fit</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Why wrapping makes sense for Hillsborough homes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Around Hillsborough Park, Middlewood Road, Penistone Road, and the
              side streets between, plenty of kitchens are not broken. They are
              just the wrong colour, too glossy, marked from everyday use, or
              letting down the rest of the house.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
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

      <section className="section-padding bg-mist/45">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <figure className="overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/3]">
              <Image
                src={SERVICE_IMAGES.worktops.src}
                alt="Marble-effect worktop wrapping for a Sheffield kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </figure>

          <div>
            <p className="eyebrow">What we can wrap</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Doors, worktops, or the full kitchen
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                If your doors are sound, a new vinyl finish can take them from
                worn cream or dated wood effect to something calmer and more
                modern. Matt greens, warm neutrals, navy, charcoal, and wood
                tones all work well in Sheffield homes because they feel less
                clinical than bright gloss.
              </p>
              <p>
                Worktop wrapping is useful when the surface is structurally
                fine but visually tired. Stone and marble-effect films can lift
                a small kitchen without adding the cost and weight of new
                worktops.
              </p>
              <p>
                For a bigger change, a full wrap covers doors, drawers, visible
                panels, and worktops together. See our{" "}
                <Link href="/services" className="link-underline text-moss">
                  kitchen wrapping services
                </Link>{" "}
                for the full breakdown, or check the{" "}
                <Link href="/pricing" className="link-underline text-moss">
                  Sheffield kitchen wrap pricing guide
                </Link>{" "}
                if you want a ballpark before asking for a quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              A simple survey-first process
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              We keep the process straightforward. You do not need to know the
              technical terms or choose from a huge book of finishes before we
              have even seen the kitchen.
            </p>
          </div>

          <ol className="space-y-4">
            {processNotes.map((note, index) => (
              <li
                key={note}
                className="grid gap-4 rounded-3xl bg-mist/45 p-6 sm:grid-cols-[4rem_1fr] sm:items-start"
              >
                <span className="font-heading text-4xl font-medium text-moss/35">
                  0{index + 1}
                </span>
                <p className="text-base leading-relaxed text-ink/70">{note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Hillsborough FAQs</p>
          <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
            Questions we get from local homeowners
          </h2>
          <div className="mt-10 space-y-3">
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
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="overflow-hidden rounded-[2rem] bg-moss px-8 py-10 text-linen sm:px-12 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow text-linen/55">Free Hillsborough quote</p>
                <h2 className="mt-4 font-heading text-4xl font-medium text-linen sm:text-5xl">
                  Want to know if your kitchen can be wrapped?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-linen/70">
                  Send photos or book a survey. We will tell you plainly if
                  wrapping is worth doing, what needs preparing, and what it is
                  likely to cost before you commit.
                </p>
              </div>
              <div className="rounded-3xl border border-linen/15 bg-linen/8 p-6">
                <p className="font-heading text-2xl font-medium text-linen">
                  Talk to us directly
                </p>
                <p className="mt-4 text-sm leading-relaxed text-linen/70">
                  Call {SITE.phoneDisplay} or email {SITE.email}. You can also{" "}
                  <Link href="/contact" className="link-underline text-linen">
                    send a quote request
                  </Link>{" "}
                  with your postcode and kitchen photos.
                </p>
                <CtaButtons
                  className="mt-6"
                  onDark
                  showCall
                  callLabel={`Call ${SITE.phoneDisplay}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
