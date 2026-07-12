import Image from "next/image";

import { CtaButtons } from "@/components/CtaButtons";
import { SchemaOrg, breadcrumbSchema } from "@/components/SchemaOrg";
import { PROCESS_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Kitchen Wrap Sheffield | Local Kitchen Wrapping Specialists",
  description:
    "We're a Sheffield-based kitchen wrapping specialist. Straight-talking quotes, honest advice, and jobs done in 2–3 days. Find out how we work.",
  path: "/about",
});

const steps = [
  "Free survey and quote — usually within 24 hours",
  "We agree finish, colour, and timeline with you",
  "We protect your kitchen and get to work — most jobs done in 2–3 days",
  "Final walkthrough — we don't consider it finished until you're happy",
];

export default function AboutPage() {
  return (
    <>
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section className="bg-mist/40 section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">About us</p>
          <h1 className="mt-4 font-heading text-5xl font-medium sm:text-6xl">
            About Kitchen Wrap Sheffield
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/65">
            <p>
              We&apos;re a Sheffield-based kitchen wrapping specialist. We
              started this because too many people were being quoted
              eye-watering sums for a full kitchen replacement when their units
              were still structurally sound — they just looked tired.
            </p>
            <p>
              Every job is quoted honestly. If your kitchen genuinely isn&apos;t
              a good candidate for wrapping, we&apos;ll tell you before you
              spend a penny.
            </p>
            <p>
              We work across Sheffield and nearby towns — from Ecclesfield and
              Hillsborough to Fulwood, Dore, Crookes, and Stocksbridge. Same
              team, same straight talk, whether you&apos;re near the city centre
              or out towards the Peak fringe.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <p className="eyebrow">How a job looks</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">
            Before, during, after
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PROCESS_IMAGES.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-ink/65">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 font-heading text-4xl font-medium">How we work</h2>
          <ol className="mt-10 space-y-0">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-5 border-t border-ink/10 py-6 first:border-t-0 first:pt-0"
              >
                <span className="font-heading text-3xl font-medium text-moss/35">
                  0{index + 1}
                </span>
                <p className="pt-2 text-base leading-relaxed text-ink/75">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 soft-panel p-8 sm:p-10">
            <h2 className="font-heading text-3xl font-medium">Honest advice, always</h2>
            <p className="mt-4 text-ink/65">
              We&apos;ll tell you straight if wrapping&apos;s not right for your
              kitchen — we&apos;d rather be honest than take a job that
              won&apos;t last. That&apos;s how we like to work with Sheffield
              homeowners.
            </p>
            <CtaButtons className="mt-8" />
          </div>
        </div>
      </section>
    </>
  );
}
