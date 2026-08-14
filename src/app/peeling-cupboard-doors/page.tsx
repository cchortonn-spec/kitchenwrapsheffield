import Link from "next/link";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Peeling Kitchen Cupboard Doors Sheffield | Repair or Wrap?",
  description:
    "Peeling kitchen cupboard doors in Sheffield? Learn when a repair is enough, when re-wrapping makes sense, and when replacement is safer. Free local quotes.",
  path: "/peeling-cupboard-doors",
});

const pagePath = "/peeling-cupboard-doors";

const warningSigns = [
  "Vinyl lifting at the top edge above a kettle, toaster, hob or dishwasher.",
  "Bubbling or ripples spreading across several matching doors.",
  "Exposed MDF that feels rough, swollen, soft or crumbly.",
  "Peeling around sink cupboards, bin doors and handles where moisture and grease collect.",
] as const;

const doorTypes = [
  {
    title: "Vinyl-wrapped MDF doors",
    body: "This is the common one. A thin factory vinyl skin is bonded over MDF. Once heat or moisture breaks that bond, the edge starts to lift and the door can look shabby very quickly.",
  },
  {
    title: "Laminate or foil-faced doors",
    body: "These can peel at edges or corners too, but the surface is usually stiffer. We need to check whether it can be prepared cleanly before promising a wrap.",
  },
  {
    title: "Painted doors",
    body: "If paint is flaking rather than vinyl lifting, the fix is different. Wrapping may still be possible, but only after loose paint is removed and the surface is stable.",
  },
] as const;

const sheffieldCauses = [
  {
    title: "Steam-heavy kitchens",
    body: "Rear kitchens in older Sheffield terraces around Walkley, Crookes and Hillsborough often work hard every day. If extraction is weak, steam sits around upper doors and softens old adhesive.",
  },
  {
    title: "Cold outside walls",
    body: "Across Sheffield's hillier streets, some kitchens sit against colder external walls. Condensation and poor airflow can make peeling worse, especially through winter.",
  },
  {
    title: "Heat in the wrong place",
    body: "Kettles, toasters, air fryers and hobs tucked under wall units can cook the same cupboard edge again and again. Moving the appliance matters as much as fixing the door.",
  },
  {
    title: "Rental and student wear",
    body: "In busy rental kitchens near Sharrow, Broomhill, Crookesmoor and the city centre, handles, bin units and sink doors take more knocks, cleaning products and moisture than quieter rooms.",
  },
] as const;

const options = [
  {
    title: "Small local repair",
    bestFor: "One dry, flat edge lifting slightly",
    body: "A careful re-bond may buy time if the MDF underneath is smooth and the vinyl has not shrunk. We are honest about this: it is often a short-term fix, not a full transformation.",
  },
  {
    title: "Re-wrap suitable doors",
    bestFor: "Sound doors with tired or failing finish",
    body: "If the door is stable, we can strip or prepare the surface properly and apply a new finish. This suits kitchens where the layout still works but the cupboard faces look past it.",
  },
  {
    title: "Replace damaged parts",
    bestFor: "Swollen MDF, blown edges or water damage",
    body: "Wrapping over swollen board is not a good job. If a sink door or end panel has blown, we will tell you where replacement is safer before any wrap is fitted.",
  },
] as const;

const quoteChecks = [
  "Close-up photos of the peeling edge, including the underside if safe to show.",
  "A wider photo of the whole kitchen so we can see matching doors, panels and worktops.",
  "Your Sheffield postcode, especially if access or parking is tight.",
  "Any known causes, such as no extractor fan, a leaking appliance or heat from a toaster or kettle.",
] as const;

const faqs = [
  {
    question: "Can you wrap over peeling kitchen cupboard doors?",
    answer:
      "Sometimes, but not blindly. If the door underneath is dry, flat and solid, it may be possible after the failing surface is stripped or prepared. If the MDF is swollen or crumbling, wrapping over it would only hide the problem for a short time.",
  },
  {
    question: "Is it worth gluing peeling vinyl doors back down?",
    answer:
      "For one small dry corner, a tidy repair may buy time. If several doors are peeling, the adhesive has usually failed more widely because of age, steam or heat. In that case, patching every edge can cost time without giving you a clean, lasting finish.",
  },
  {
    question: "Do Sheffield terrace kitchens peel more often?",
    answer:
      "Older terraces in areas such as Walkley, Crookes and Hillsborough can have colder walls and less modern ventilation, so steam and condensation may hang around. That does not mean every terrace has a problem, but we always ask about extraction, heating and appliance positions before quoting.",
  },
  {
    question: "Can you quote from photos of the peeling doors?",
    answer:
      "Yes. Photos are the best first step. Send close-ups, a wider kitchen photo and your postcode. We can usually tell you whether a survey is worthwhile, whether repair is enough, or whether one or two damaged doors should be replaced first.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Peeling kitchen cupboard door repair and wrapping in Sheffield",
  serviceType: "Kitchen cupboard door wrapping and refinishing advice",
  description:
    "Assessment, preparation and vinyl wrapping advice for peeling kitchen cupboard doors, drawers and panels in Sheffield homes.",
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
    { "@type": "Place", name: "Walkley" },
    { "@type": "Place", name: "Crookes" },
    { "@type": "Place", name: "Hillsborough" },
    { "@type": "Place", name: "Sharrow" },
    { "@type": "Place", name: "Broomhill" },
  ],
  url: `${SITE.url}${pagePath}`,
};

export default function PeelingCupboardDoorsPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Peeling Cupboard Doors", path: pagePath },
          ]),
          serviceJsonLd,
          faqSchema(faqs),
        ]}
      />

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Peeling cupboard doors</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">
              Peeling Kitchen Cupboard Doors in Sheffield?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              If the vinyl is lifting, bubbling or flaking away from your
              cupboard doors, do not panic and do not glue everything down
              before someone has looked at it. Some doors can be repaired. Some
              can be re-wrapped. Some need replacing first.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">
              We help Sheffield homeowners work out the sensible route before
              spending money. Send photos of the peeling doors, tell us your
              postcode, and we will give you a straight answer.
            </p>
            <div className="mt-8">
              <CtaButtons
                quoteLabel="Ask About Peeling Doors"
                showCall
                callLabel={`Call ${SITE.phoneDisplay}`}
              />
            </div>
          </div>

          <aside className="rounded-[2rem] bg-linen p-6 shadow-sm">
            <p className="eyebrow">Quick check</p>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight">
              What are you seeing on the door?
            </h2>
            <ul className="mt-6 space-y-3">
              {warningSigns.map((sign) => (
                <li
                  key={sign}
                  className="rounded-2xl border border-ink/8 bg-background px-5 py-4 text-sm leading-relaxed text-ink/70"
                >
                  {sign}
                </li>
              ))}
            </ul>
            <TrackedLink
              href={`tel:${SITE.phoneTel}`}
              event="phone_click"
              params={{ location: "peeling_doors_quick_check" }}
              className="mt-6 inline-flex text-sm font-medium text-moss link-underline"
            >
              Talk it through on {SITE.phoneDisplay}
            </TrackedLink>
          </aside>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Start with the surface</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                The right fix depends on what is actually peeling
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                Search results for peeling kitchen doors often jump straight to
                glue, heat guns or full replacement. Real kitchens are not that
                simple. A little lift on one upper door is a different job from
                bubbling vinyl across a whole run of cupboards.
              </p>
              <p>
                The first thing we check is whether the door is still sound
                underneath. MDF can take a wrap well when it is dry and stable.
                Once moisture gets into an exposed edge and the board swells, a
                new film will not sit flat for long.
              </p>
              <p>
                If you are comparing options, read our{" "}
                <Link href="/services" className="font-medium text-moss link-underline">
                  kitchen wrapping services
                </Link>
                , check the{" "}
                <Link href="/pricing" className="font-medium text-moss link-underline">
                  Sheffield kitchen wrap pricing guide
                </Link>
                , or see the{" "}
                <Link href="/areas-covered" className="font-medium text-moss link-underline">
                  areas we cover
                </Link>{" "}
                before asking for a quote.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {doorTypes.map((item) => (
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
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Why it happens</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              Heat, steam and everyday Sheffield kitchens
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Peeling is rarely just bad luck. It usually starts where the door
              has been stressed for months or years. In Sheffield, we see a mix
              of older terrace kitchens, busy family homes, rental properties
              and newer rooms where appliances have been squeezed under wall
              cupboards.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {sheffieldCauses.map((cause) => (
              <article key={cause.title} className="rounded-3xl bg-linen p-7">
                <h3 className="font-heading text-2xl font-medium">
                  {cause.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {cause.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow">Honest options</p>
              <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
                Repair, re-wrap or replace the damaged parts?
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                A proper answer needs eyes on the doors. We would rather lose a
                job by being honest than wrap a damaged surface that will fail
                again.
              </p>
            </div>

            <div className="space-y-4">
              {options.map((option) => (
                <article
                  key={option.title}
                  className="rounded-3xl border border-ink/8 bg-linen/70 p-7"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-heading text-2xl font-medium">
                      {option.title}
                    </h3>
                    <p className="rounded-full bg-mist px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
                      {option.bestFor}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/65">
                    {option.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist/40">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Photo-first quote</p>
            <h2 className="mt-4 font-heading text-4xl font-medium sm:text-5xl">
              What to send before we visit
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Photos save you time. They help us spot whether the job is a
              simple door refresh, a full kitchen wrap, or a case where one or
              two damaged doors should be replaced before any wrapping starts.
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              If the kitchen is in a rented house or you are sorting it before a
              sale, say that too. The right finish for a hard-working rental near
              the universities may be different from a forever-home kitchen in
              Woodseats, Fulwood or Handsworth.
            </p>
          </div>

          <ul className="space-y-3">
            {quoteChecks.map((check) => (
              <li
                key={check}
                className="rounded-2xl bg-linen px-5 py-4 text-sm leading-relaxed text-ink/75 shadow-sm"
              >
                {check}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Peeling door questions</p>
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
          <p className="eyebrow text-linen/60">Free Sheffield advice</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-medium text-linen sm:text-5xl">
            Want to know if your peeling doors can be saved?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-linen/70">
            Send a few photos and your postcode. We will tell you plainly
            whether repair, re-wrapping or replacing damaged doors makes the
            most sense.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons
              onDark
              showCall
              quoteLabel="Send Photos for a Free Quote"
              callLabel={`Call ${SITE.phoneDisplay}`}
            />
          </div>
          <p className="mt-6 text-sm text-linen/60">
            Prefer the form? Use the{" "}
            <Link href="/contact" className="font-medium text-linen link-underline">
              contact page
            </Link>{" "}
            and mention the peeling cupboard doors.
          </p>
        </div>
      </section>
    </>
  );
}
