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
  title: "Kitchen Wrapping Stocksbridge | S36 Kitchen Wrap Quotes",
  description:
    "Kitchen wrapping in Stocksbridge, S36. Door, cupboard and worktop wraps for homes near Fox Valley, Deepcar, Bolsterstone and Underbank Reservoir.",
  path: "/areas-covered/stocksbridge",
});

const pagePath = "/areas-covered/stocksbridge";

const pageImages = [
  {
    src: SERVICE_IMAGES.full.src,
    alt: "Full kitchen wrap finish suitable for a Stocksbridge S36 home",
    caption: "A full wrap can change doors, panels and worktops without a rip-out",
  },
  {
    src: GALLERY_IMAGES[3].src,
    alt: "Light marble-effect worktop wrap for a north Sheffield kitchen",
    caption: "Lighter worktops can help valley-side kitchens feel brighter",
  },
  {
    src: PROCESS_IMAGES[1].src,
    alt: "Kitchen wrapping preparation in progress for a Sheffield home",
    caption: "Preparation matters, especially on older doors and busy family kitchens",
  },
] as const;

const localConsiderations = [
  {
    title: "S36 homes are varied",
    body: "Stocksbridge has stone terraces, family homes near Fox Valley, older properties towards Deepcar, and hillside houses around Bolsterstone. We check the actual kitchen rather than assuming one finish suits every home.",
  },
  {
    title: "Useful when access matters",
    body: "A wrap does not need a skip or weeks of trades, which helps if your street is tight, your drive is steep, or you are fitting the work around school runs and commuting on the A616.",
  },
  {
    title: "Good for settled layouts",
    body: "Many Stocksbridge kitchens are not badly planned; they just look tired. If the carcasses and doors are sound, wrapping lets you keep the working layout and change the surfaces you see every day.",
  },
] as const;

const surveyNotes = [
  "Door edges, swelling and older paint layers before we recommend wrapping",
  "Worktop joins, sink cut-outs and upstands if you want a stone-effect finish",
  "Natural light in valley, hillside and garden-facing rooms before choosing colour",
  "Parking, access and fitting plans for Stocksbridge, Deepcar and Bolsterstone streets",
] as const;

const nearbyAreas = [
  "Stocksbridge town centre and Fox Valley",
  "Deepcar and the eastern end of the valley",
  "Bolsterstone and hillside S36 homes",
  "Underbank Reservoir and Midhopestones side",
  "Wharncliffe Side, Oughtibridge and nearby Upper Don routes",
  "Penistone, Chapeltown and north Sheffield edges",
] as const;

const faqs = [
  {
    question: "Do you cover Stocksbridge and the S36 postcode?",
    answer:
      "Yes. We cover Stocksbridge, Deepcar, Bolsterstone, Midhopestones and nearby S36 homes, plus surrounding north Sheffield routes towards Oughtibridge, Wharncliffe Side and Chapeltown. Send your postcode with a few kitchen photos and we will confirm coverage.",
  },
  {
    question: "Is kitchen wrapping suitable for older Stocksbridge homes?",
    answer:
      "Often, but the survey matters. Older homes around Stocksbridge, Deepcar and Bolsterstone can have previous paintwork, uneven doors or repaired units. If the surfaces are sound, wrapping can work well. If swelling or loose edges would spoil the finish, we will tell you before quoting.",
  },
  {
    question: "Can you wrap worktops as well as cupboard doors in Stocksbridge?",
    answer:
      "Yes. We can wrap suitable doors, drawer fronts, end panels, plinths and worktops. Worktop wrapping depends on the condition of the surface, joins, sink area and upstands, so we check those details carefully during the survey.",
  },
  {
    question: "How does wrapping compare with replacing a Stocksbridge kitchen?",
    answer:
      "Wrapping keeps the existing layout and units, so it is usually quicker and less disruptive than a full replacement. Most Sheffield wraps take 2-3 days once finishes are chosen, while a replacement kitchen can involve ordering, rip-out, plumbing, electrics and several trades.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping in Stocksbridge",
  serviceType: "Kitchen vinyl wrapping",
  description:
    "Kitchen door, cupboard, panel and worktop vinyl wrapping for Stocksbridge, Deepcar, Bolsterstone and nearby S36 homes in north Sheffield.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Stocksbridge",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        postalCode: "S36",
        addressCountry: "GB",
      },
    },
    { "@type": "Place", name: "Deepcar" },
    { "@type": "Place", name: "Bolsterstone" },
    { "@type": "Place", name: "Midhopestones" },
    { "@type": "Place", name: "Wharncliffe Side" },
    { "@type": "Place", name: "Oughtibridge" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function StocksbridgeKitchenWrappingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Covered", path: "/areas-covered" },
            { name: "Stocksbridge", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Stocksbridge kitchen wrapping</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Kitchen Wrapping in Stocksbridge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If your Stocksbridge kitchen still works but the finish feels old,
              wrapping can refresh the doors, drawer fronts, panels and suitable
              worktops without replacing the whole room. We cover S36 homes from
              Fox Valley and the town centre through to Deepcar, Bolsterstone,
              Underbank Reservoir and the surrounding Upper Don valley.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              The first step is not choosing a colour. It is checking whether
              your kitchen is worth wrapping. We look at the doors, edges,
              worktop joins and everyday access before giving clear advice and a
              free quote.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Get a Stocksbridge Quote"
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
                preload
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Why Stocksbridge is different</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                A local refresh for kitchens on the north-west edge of Sheffield
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Stocksbridge is around 10 miles from Sheffield city centre, but
                it is still firmly part of the city. It sits in the steep-sided
                Little Don valley, just east of the Peak District, with different
                home styles around Fox Valley, Deepcar, Bolsterstone and the
                roads heading towards Midhopestones and Underbank Reservoir.
                That mix is exactly why a one-size-fits-all kitchen quote is not
                helpful.
              </p>
              <p>
                Some S36 kitchens are compact and practical. Others are larger
                family rooms where the layout has been working for years. The
                common problem is usually the visible finish: yellowing gloss,
                dark laminate, worn worktops or door colours that no longer suit
                the rest of the house. Wrapping is useful when those surfaces can
                be prepared properly and the underlying units are still solid.
              </p>
              <p>
                If you are comparing options, start with our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or browse the full list of{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>
                . You can also send photos through the{" "}
                <Link href="/contact" className="font-medium text-moss link-underline">
                  contact page
                </Link>{" "}
                if you want a quick first opinion.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {localConsiderations.map((item) => (
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
        <div className="container-site grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="eyebrow">Before we quote</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What we check in a Stocksbridge survey
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              A good wrap is not just vinyl over old doors. The surface has to be
              suitable, the finish has to work in your room, and the fitting plan
              has to suit the house. Hillside light, older joinery and daily
              access all matter in Stocksbridge, especially around narrower
              streets and valley-side homes.
            </p>
            <ul className="mt-8 space-y-3">
              {surveyNotes.map((note) => (
                <li
                  key={note}
                  className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5">
            {pageImages.slice(1).map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-3xl bg-linen shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-ink/60">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">S36 and nearby</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Covering Stocksbridge, Deepcar and the Upper Don side
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Fox Valley has given Stocksbridge a busy modern centre, while the
              wider area still has a strong valley and village feel. Deepcar sits
              at the eastern end, Bolsterstone looks over the Stocksbridge and
              Ewden valleys, and Underbank Reservoir is close by on the road out
              towards Midhopestones. We use those local details practically: they
              affect travel, access, parking and how we plan the work around your
              home.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              The quoting process is simple. Send photos first, include your S36
              postcode, and tell us whether you want doors, worktops or a full
              wrap looking at. If the kitchen appears suitable, we arrange a free
              survey and talk through finishes in the room itself.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nearbyAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-ink/8 bg-linen px-5 py-4 text-sm font-medium text-ink/75"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Stocksbridge questions</p>
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
        <div className="container-site section-padding grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="eyebrow text-linen/60">Free local quote</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
              Want to know if your Stocksbridge kitchen is worth wrapping?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-linen/70">
              Send a few photos or book a free survey. We will tell you what can
              be wrapped, what needs preparation, and whether replacement would
              be the better route before you commit.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-linen/15 bg-linen/10 p-6">
            <p className="text-sm leading-relaxed text-linen/70">
              Prefer to speak first? Call{" "}
              <TrackedLink
                href={`tel:${SITE.phoneTel}`}
                event="phone_click"
                params={{ location: "stocksbridge_final_cta" }}
                className="font-medium text-linen link-underline"
              >
                {SITE.phoneDisplay}
              </TrackedLink>{" "}
              or use the form and include your Stocksbridge, Deepcar or S36
              postcode.
            </p>
            <div className="mt-6">
              <CtaButtons
                onDark
                showCall
                quoteLabel="Ask for a Free Survey"
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
