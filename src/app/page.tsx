import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  faqSchema,
} from "@/components/SchemaOrg";
import {
  BEFORE_AFTER,
  FINISH_IMAGES,
  GALLERY_IMAGES,
  HERO_IMAGE,
} from "@/lib/images";
import { AREAS, HOME_FAQS, SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kitchen Wrap Sheffield | Transform Your Kitchen Without the Rebuild",
  description:
    "Vinyl kitchen wrapping in Sheffield. Transform your kitchen in 2–3 days at a fraction of replacement cost. Free no-obligation quotes. Call 07848 428975.",
  alternates: { canonical: "/" },
};

const whyWrap = [
  {
    title: "Cost",
    body: "A full wrap typically costs a fraction of a new kitchen. Same transformation, without the five-figure bill.",
  },
  {
    title: "Speed",
    body: "Most kitchens are wrapped in 2–3 days. No living out of your microwave for a month.",
  },
  {
    title: "Mess",
    body: "No rip-out, no skip on the drive, no dust through the house. We work around your existing units.",
  },
];

const whyUs = [
  "Local to Sheffield, not a national call centre",
  "Straight-talking quotes — no hidden extras",
  "We tell you honestly if wrapping isn't the right fix for your kitchen",
  "Full range of finishes: matt, wood effect, stone effect, gloss",
];

export default function HomePage() {
  const teaserAreas = AREAS.slice(0, 9).map((area) => area.name);

  return (
    <>
      <SchemaOrg data={faqSchema(HOME_FAQS)} />

      {/* Full-bleed hero — bright photo first, light text on soft scrims */}
      <section className="relative min-h-[85vh] overflow-hidden bg-mist">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="soft-zoom object-cover object-center brightness-[1.08] contrast-[1.05] saturate-[1.05]"
          sizes="100vw"
        />
        {/* Light wash only — keep the photo vivid */}
        <div className="absolute inset-0 bg-white/10" aria-hidden />
        {/* Soft fade at the bottom for white copy, without dulling the whole image */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink/70 via-ink/25 to-transparent"
          aria-hidden
        />

        <div className="container-site relative flex min-h-[85vh] flex-col justify-end pb-16 pt-16 sm:pb-24 sm:pt-20">
          <p className="fade-up mb-5 inline-flex w-fit rounded-full border border-white/40 bg-white/85 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink shadow-sm backdrop-blur-sm">
            Sheffield &amp; South Yorkshire
          </p>
          <p className="fade-up font-heading text-5xl font-medium tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl">
            Kitchen Wrap Sheffield
          </p>
          <h1 className="fade-up-delay mt-5 max-w-2xl font-heading text-3xl font-medium leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)] sm:text-4xl lg:text-[2.75rem]">
            Your Kitchen, Transformed — Without the Rebuild
          </h1>
          <p className="fade-up-delay mt-5 max-w-xl text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)] sm:text-lg">
            Vinyl wrapping gives your kitchen a brand new look in days, not
            weeks — at a fraction of the cost of replacing it.
          </p>
          <div className="fade-up-delay-2 mt-9">
            <CtaButtons onDark />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-linen">
        <div className="container-site flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5 text-[0.8rem] tracking-wide text-ink/60">
          <span>★★★★★ Rated by Sheffield homeowners</span>
          <span>Fully insured</span>
          <span>Free no-obligation quotes</span>
          <span>Usually done in 2–3 days</span>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-xl">
            <p className="eyebrow">The quieter way</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Why wrap, not replace?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              If your units are still solid, you don&apos;t need a full rip-out.
              Wrapping gives Sheffield homeowners a fresh kitchen without the
              upheaval.
            </p>
          </div>

          <div className="mt-14 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-3 md:gap-12">
            {whyWrap.map((item, index) => (
              <div key={item.title}>
                <p className="font-heading text-5xl font-medium text-moss/25">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className="section-padding bg-mist/60">
        <div className="container-site">
          <div className="max-w-xl">
            <p className="eyebrow">Real Sheffield job</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Same kitchen. Different look.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Cream units to matt black — doors and worktops wrapped, no rip-out.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[BEFORE_AFTER.before, BEFORE_AFTER.after].map((shot) => (
              <figure key={shot.label} className="overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-linen/90 px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
                    {shot.label}
                  </span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Kitchen wrapping, done properly
              </h2>
            </div>
            <Link href="/services" className="link-underline text-sm font-medium text-ink">
              View all services
            </Link>
          </div>

          <div className="mt-14 space-y-4">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                href="/services"
                className="group flex flex-col gap-3 rounded-3xl bg-mist/50 px-6 py-7 transition hover:bg-mist sm:flex-row sm:items-center sm:justify-between sm:px-8"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-heading text-2xl text-moss/40">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-medium sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink/60">
                      {service.short}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-moss transition group-hover:translate-x-1">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work gallery */}
      <section className="section-padding bg-mist/40">
        <div className="container-site">
          <div className="max-w-xl">
            <p className="eyebrow">Around Sheffield</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Recent work
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Real kitchens we&apos;ve wrapped for homeowners across Sheffield
              and South Yorkshire.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((job, index) => (
              <figure
                key={job.src}
                className={`overflow-hidden rounded-3xl ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[16/10] sm:aspect-[2/1]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={job.src}
                    alt={job.alt}
                    fill
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 pt-16">
                    <p className="font-heading text-lg font-medium text-linen">
                      {job.caption}
                    </p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-xl">
            <p className="eyebrow">Finishes</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Matt, wood, stone, and more
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Browse finishes with us on the survey — greens, blues, greys, and
              natural tones that suit Sheffield homes.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {FINISH_IMAGES.map((finish) => (
              <div key={finish.src} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={finish.src}
                  alt={finish.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/50">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Why us</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Why choose Kitchen Wrap Sheffield
            </h2>
            <ul className="mt-8 space-y-5">
              {whyUs.map((item) => (
                <li
                  key={item}
                  className="border-b border-ink/10 pb-5 text-base leading-relaxed text-ink/75 last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="soft-panel flex flex-col justify-between p-8 sm:p-10">
            <div>
              <p className="eyebrow">Coverage</p>
              <h2 className="mt-4 font-heading text-3xl font-medium sm:text-4xl">
                Areas we cover
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink/65">
                We cover Sheffield and the surrounding area, including{" "}
                {teaserAreas.join(", ")}.
              </p>
            </div>
            <Link
              href="/areas-covered"
              className="mt-8 inline-flex text-sm font-medium text-moss link-underline"
            >
              See all areas we cover →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
            Straightforward from the start
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/65">
            Full kitchen wraps typically start from around £999 depending on
            size and finish.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-flex text-sm font-medium text-moss link-underline"
          >
            See a full price guide →
          </Link>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {HOME_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-linen/80 open:bg-linen"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-heading text-xl font-medium marker:content-none">
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
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, #5a7463 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-site relative section-padding text-center">
          <h2 className="font-heading text-4xl font-medium text-linen sm:text-5xl">
            Ready to see your kitchen without the guesswork?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-linen/70">
            Get a free, no-obligation quote — usually back to you within 24 hours.
          </p>
          <CtaButtons
            className="mt-9 justify-center"
            showWhatsapp={false}
            showCall
            onDark
            callLabel={`Call ${SITE.phoneDisplay}`}
          />
        </div>
      </section>
    </>
  );
}
