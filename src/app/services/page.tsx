import Image from "next/image";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  serviceSchema,
} from "@/components/SchemaOrg";
import { FINISH_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { FINISHES, SERVICES } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kitchen Wrapping Services Sheffield | Doors, Worktops & Full Wraps",
  description:
    "Professional kitchen wrapping in Sheffield. Door wrapping, worktop wrapping, and full kitchen wraps. Matt, gloss, wood effect & stone effect finishes.",
  path: "/services",
});

const serviceMedia = [
  SERVICE_IMAGES.doors,
  SERVICE_IMAGES.worktops,
  SERVICE_IMAGES.full,
];

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...serviceSchema(SERVICES),
        ]}
      />

      <section className="bg-mist/40 section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping Services in Sheffield
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/65">
              Whether you want fresh doors, tougher worktops, or a complete
              kitchen wrap, we fit durable vinyl finishes across Sheffield and
              the surrounding area — usually in 2–3 days.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 sm:pt-0">
        <div className="container-site space-y-10">
          {SERVICES.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 items-center gap-8 overflow-hidden rounded-[2rem] bg-mist/50 lg:grid-cols-2"
            >
              <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={serviceMedia[index].src}
                  alt={serviceMedia[index].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="px-6 py-8 sm:px-10 sm:py-12">
                <p className="font-heading text-2xl text-moss/35">0{index + 1}</p>
                <h2 className="mt-2 font-heading text-3xl font-medium sm:text-4xl">
                  {service.title} Sheffield
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-ink/65">
                  {service.description}
                </p>
              </div>
            </article>
          ))}

          <div className="mt-6">
            <p className="eyebrow">Finishes</p>
            <h2 className="mt-4 font-heading text-4xl font-medium">
              Finishes available
            </h2>
            <p className="mt-4 max-w-2xl text-ink/65">
              Choose the look that fits your home — from soft matt neutrals to
              wood and stone effects that suit Sheffield kitchens of every age.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {FINISHES.map((finish) => (
                <li
                  key={finish}
                  className="rounded-full border border-ink/10 bg-linen px-5 py-2.5 text-sm font-medium text-ink/80"
                >
                  {finish}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {FINISH_IMAGES.map((finish) => (
                <div
                  key={finish.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-3xl"
                >
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

          <div className="overflow-hidden rounded-[2rem] bg-moss px-8 py-10 text-linen sm:px-12 sm:py-14">
            <h2 className="font-heading text-3xl font-medium text-linen sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mt-4 max-w-2xl text-linen/70">
              Book a free survey. We&apos;ll look at your kitchen properly and
              tell you what makes sense — doors only, worktops, or a full wrap.
            </p>
            <CtaButtons className="mt-8" onDark />
          </div>
        </div>
      </section>
    </>
  );
}
