"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-linen/95 backdrop-blur-md">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4 sm:h-[5rem]">
        <Link
          href="/"
          className="relative flex shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="Kitchen Wrap Sheffield home"
        >
          <Image
            src="/brand/kitchen-wrap-sheffield-logo.png"
            alt="Kitchen Wrap Sheffield"
            width={220}
            height={64}
            priority
            className="h-11 w-auto object-contain object-left sm:h-12 md:h-[3.25rem]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.8rem] font-medium tracking-wide text-ink/70 transition hover:text-ink",
                pathname === link.href && "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            onClick={() => trackEvent("phone_click", { location: "header" })}
            className="text-[0.8rem] font-medium tracking-wide text-ink/70 hover:text-ink"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            className="inline-flex h-10 items-center rounded-full bg-moss px-5 text-[0.8rem] font-medium text-linen transition hover:bg-moss/90"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-linen lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-sm font-medium text-ink/80",
                  pathname === link.href && "bg-mist text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-1 pb-2">
              <a
                href={`tel:${SITE.phoneTel}`}
                onClick={() => trackEvent("phone_click", { location: "mobile_nav" })}
                className="inline-flex h-11 items-center justify-center rounded-full border border-ink/15 text-sm font-medium"
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "mobile_nav" })}
                className="inline-flex h-11 items-center justify-center rounded-full bg-moss text-sm font-medium text-linen"
              >
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
