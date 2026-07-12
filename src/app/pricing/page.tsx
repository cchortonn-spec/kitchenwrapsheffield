import type { Metadata } from "next";

import { CtaButtons } from "@/components/CtaButtons";
import {
  SchemaOrg,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SchemaOrg";
import { PRICING_FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kitchen Wrap Cost Sheffield | 2026 Pricing Guide",
  description:
    "How much does kitchen wrapping cost in Sheffield? See our guide to door wrapping, worktop wrapping, and full kitchen wrap prices. Free quotes available.",
  alternates: { canonical: "/pricing" },
};

const pricingRows = [
  {
    job: "Door & drawer front wrap (per unit)",
    price: "£30–£80",
  },
  {
    job: "Full kitchen door wrap (average kitchen)",
    price: "£450–£2,500",
  },
  {
    job: "Worktop wrap",
    price: "£220–£850",
  },
  {
    job: "Full kitchen wrap (doors + worktops)",
    price: "£1,250–£3,000",
  },
];

const priceFactors = [
  "Number of doors and drawers",
  "Worktop length and shape",
  "Finish chosen (matt, gloss, wood, stone, concrete)",
  "Current condition of your units",
];

export default function PricingPage() {
  return (
    <>
      <SchemaOrg
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqSchema(PRICING_FAQS),
        ]}
      />

      <section className="bg-mist/40 section-padding">
        <div className="container-site max-w-4xl">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-4 font-heading text-5xl font-medium sm:text-6xl">
            Kitchen Wrap Pricing in Sheffield
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/65">
            Every kitchen&apos;s different, so treat these as a starting guide —
            you&apos;ll get an exact price after a free survey. No obligation,
            and usually back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0 sm:pt-0">
        <div className="container-site max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-ink/8 bg-linen">
            <table className="w-full text-left text-sm">
              <thead className="bg-mist/80">
                <tr>
                  <th className="px-6 py-5 font-heading text-lg font-medium">
                    Job
                  </th>
                  <th className="px-6 py-5 font-heading text-lg font-medium">
                    Typical price
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.job} className="border-t border-ink/8">
                    <td className="px-6 py-5 text-ink/75">{row.job}</td>
                    <td className="px-6 py-5 font-medium text-moss">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-16 font-heading text-4xl font-medium">
            What affects the price
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {priceFactors.map((factor) => (
              <li
                key={factor}
                className="rounded-2xl border border-ink/8 px-5 py-4 text-sm text-ink/75"
              >
                {factor}
              </li>
            ))}
          </ul>

          <h2 className="mt-16 font-heading text-4xl font-medium">
            Pricing questions
          </h2>
          <div className="mt-8 space-y-3">
            {PRICING_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl bg-mist/50 open:bg-mist/80"
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

          <div className="mt-16 overflow-hidden rounded-[2rem] bg-moss px-8 py-10 text-linen sm:px-12 sm:py-14">
            <h2 className="font-heading text-3xl font-medium text-linen sm:text-4xl">
              Want an exact figure for your kitchen?
            </h2>
            <p className="mt-4 text-linen/70">
              Get a free, no-obligation quote. Most Sheffield surveys are turned
              around within 24 hours.
            </p>
            <CtaButtons className="mt-8" onDark />
          </div>
        </div>
      </section>
    </>
  );
}
