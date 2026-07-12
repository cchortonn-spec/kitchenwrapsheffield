import { Clock, Mail, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { SchemaOrg, breadcrumbSchema } from "@/components/SchemaOrg";
import { TrackedLink } from "@/components/TrackedLink";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Get a Free Kitchen Wrap Quote in Sheffield",
  description:
    "Get a free, no-obligation kitchen wrap quote in Sheffield. Fill in the form or call 07848 428975. Most quotes back within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="bg-mist/40 section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 font-heading text-5xl font-medium sm:text-6xl">
              Get a Free Quote
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/65">
              Fill in the form below or give us a call — most quotes are turned
              around within 24 hours. Serving Sheffield, Ecclesfield,
              Hillsborough, Fulwood, and the surrounding area.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <ContactForm />

            <aside className="space-y-5">
              <div className="rounded-3xl border border-ink/8 bg-linen p-7">
                <h2 className="font-heading text-2xl font-medium">
                  Talk to us directly
                </h2>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <TrackedLink
                      href={`tel:${SITE.phoneTel}`}
                      event="phone_click"
                      params={{ location: "contact_page" }}
                      className="flex items-center gap-3 font-medium text-ink/80 hover:text-moss"
                    >
                      <span className="flex size-10 items-center justify-center rounded-full bg-mist text-moss">
                        <Phone className="size-4" />
                      </span>
                      {SITE.phoneDisplay}
                    </TrackedLink>
                  </li>
                  <li>
                    <TrackedLink
                      href={SITE.whatsappUrl}
                      event="whatsapp_click"
                      params={{ location: "contact_page" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-medium text-ink/80 hover:text-moss"
                    >
                      <span className="flex size-10 items-center justify-center rounded-full bg-mist text-moss">
                        <MessageCircle className="size-4" />
                      </span>
                      WhatsApp chat
                    </TrackedLink>
                  </li>
                  <li>
                    <TrackedLink
                      href={`mailto:${SITE.email}`}
                      event="email_click"
                      params={{ location: "contact_page" }}
                      className="flex items-center gap-3 font-medium text-ink/80 hover:text-moss"
                    >
                      <span className="flex size-10 items-center justify-center rounded-full bg-mist text-moss">
                        <Mail className="size-4" />
                      </span>
                      {SITE.email}
                    </TrackedLink>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-mist/70 p-7">
                <h2 className="flex items-center gap-2 font-heading text-2xl font-medium">
                  <Clock className="size-5 text-moss" />
                  Opening hours
                </h2>
                <ul className="mt-6 space-y-3 text-sm">
                  {SITE.openingHours.map((row) => (
                    <li
                      key={row.days}
                      className="flex items-center justify-between gap-4 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-ink/55">{row.days}</span>
                      <span className="font-medium">{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
