import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import { SchemaOrg, breadcrumbSchema } from "@/components/SchemaOrg";
import { pageMeta } from "@/lib/seo";
import { AREAS } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Sheffield & South Yorkshire | Areas We Cover",
  description:
    "Kitchen Wrap Sheffield covers the whole city and surrounding area — Ecclesfield, Hillsborough, Fulwood, Dore, Crookes, Chapeltown, Mosborough and more.",
  path: "/areas-covered",
});

const areaLinks: Partial<Record<string, string>> = {
  Hillsborough: "/areas-covered/hillsborough",
  Ecclesfield: "/areas-covered/ecclesfield",
  Fulwood: "/areas-covered/fulwood",
};

export default function AreasCoveredPage() {
  return (
    <>
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas Covered", path: "/areas-covered" },
        ])}
      />

      <section className="bg-mist/40 section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Service area</p>
            <h1 className="mt-4 font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping Across Sheffield &amp; South Yorkshire
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/65">
              Based in Sheffield, we cover the whole city and the surrounding
              area. From city-centre apartments to Peak-fringe homes in Dore and
              Totley, we bring the same careful wrap finish and honest quoting
              wherever we work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 sm:pt-0">
        <div className="container-site">
          <div className="grid gap-4 sm:grid-cols-2">
            {AREAS.map((area) => {
              const href = areaLinks[area.name] ?? null;

              const card = (
                <article className="h-full rounded-3xl border border-ink/8 bg-linen/60 px-6 py-7 transition hover:border-moss/25 hover:bg-linen">
                  <h2 className="font-heading text-2xl font-medium">{area.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {area.blurb}
                  </p>
                  {href ? (
                    <p className="mt-5 text-sm font-medium text-moss">
                      Read the {area.name} guide →
                    </p>
                  ) : null}
                </article>
              );

              return href ? (
                <Link key={area.name} href={href} className="block">
                  {card}
                </Link>
              ) : (
                <div key={area.name}>{card}</div>
              );
            })}
          </div>

          <div className="mt-14 soft-panel p-8 sm:p-10">
            <h2 className="font-heading text-3xl font-medium">Not seeing your area?</h2>
            <p className="mt-4 text-ink/65">
              We cover most of South Yorkshire.{" "}
              <Link href="/contact" className="link-underline font-medium text-moss">
                Get in touch
              </Link>{" "}
              with your postcode and we&apos;ll confirm coverage straight away.
            </p>
            <CtaButtons className="mt-8" />
          </div>
        </div>
      </section>
    </>
  );
}
