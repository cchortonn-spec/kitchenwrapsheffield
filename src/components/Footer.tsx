import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/TrackedLink";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-moss text-linen">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Kitchen Wrap Sheffield home" className="inline-block">
              <span className="inline-flex rounded-2xl bg-linen px-4 py-3">
                <Image
                  src="/brand/kitchen-wrap-sheffield-logo.png"
                  alt="Kitchen Wrap Sheffield"
                  width={200}
                  height={58}
                  className="h-12 w-auto object-contain object-left"
                />
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-linen/70">
              {SITE.tagline}. Local kitchen wrapping across Sheffield and South
              Yorkshire.
            </p>
          </div>

          <div>
            <p className="eyebrow text-linen/50">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-linen/80 transition hover:text-linen"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-sm text-linen/80 transition hover:text-linen"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-linen/50">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <TrackedLink
                  href={`tel:${SITE.phoneTel}`}
                  event="phone_click"
                  params={{ location: "footer" }}
                  className="text-linen/80 transition hover:text-linen"
                >
                  {SITE.phoneDisplay}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={SITE.whatsappUrl}
                  event="whatsapp_click"
                  params={{ location: "footer" }}
                  className="text-linen/80 transition hover:text-linen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={`mailto:${SITE.email}`}
                  event="email_click"
                  params={{ location: "footer" }}
                  className="text-linen/80 transition hover:text-linen"
                >
                  {SITE.email}
                </TrackedLink>
              </li>
            </ul>
            <p className="mt-6 text-sm text-linen/55">
              Serving Sheffield and South Yorkshire
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-linen/15 pt-6 text-xs text-linen/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Installed by WRPX</p>
        </div>
      </div>
    </footer>
  );
}
