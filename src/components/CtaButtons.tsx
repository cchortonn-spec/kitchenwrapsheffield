import Link from "next/link";

import { TrackedLink } from "@/components/TrackedLink";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaButtonsProps = {
  className?: string;
  quoteLabel?: string;
  whatsappLabel?: string;
  showWhatsapp?: boolean;
  showCall?: boolean;
  callLabel?: string;
  onDark?: boolean;
};

export function CtaButtons({
  className,
  quoteLabel = "Get a Free Quote",
  whatsappLabel = "Chat on WhatsApp",
  showWhatsapp = true,
  showCall = false,
  callLabel,
  onDark = false,
}: CtaButtonsProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Link
        href="/contact"
        className={cn(
          "inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium transition",
          onDark
            ? "bg-linen text-ink hover:bg-linen/90"
            : "bg-moss text-linen hover:bg-moss/90"
        )}
      >
        {quoteLabel}
      </Link>
      {showWhatsapp ? (
        <TrackedLink
          href={SITE.whatsappUrl}
          event="whatsapp_click"
          params={{ location: "cta" }}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex h-12 items-center justify-center rounded-full border px-7 text-sm font-medium transition",
            onDark
              ? "border-linen/40 text-linen hover:bg-linen/10"
              : "border-ink/15 text-ink hover:bg-mist"
          )}
        >
          {whatsappLabel}
        </TrackedLink>
      ) : null}
      {showCall ? (
        <TrackedLink
          href={`tel:${SITE.phoneTel}`}
          event="phone_click"
          params={{ location: "cta" }}
          className={cn(
            "inline-flex h-12 items-center justify-center rounded-full border px-7 text-sm font-medium transition",
            onDark
              ? "border-linen/40 text-linen hover:bg-linen/10"
              : "border-ink/15 text-ink hover:bg-mist"
          )}
        >
          {callLabel ?? `Call ${SITE.phoneDisplay}`}
        </TrackedLink>
      ) : null}
    </div>
  );
}
