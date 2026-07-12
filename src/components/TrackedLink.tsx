"use client";

import type { ComponentProps } from "react";

import { trackEvent } from "@/lib/analytics";

type AnalyticsEvent =
  | "phone_click"
  | "whatsapp_click"
  | "email_click"
  | "form_submit"
  | "quote_request";

type TrackedLinkProps = ComponentProps<"a"> & {
  event: AnalyticsEvent;
  params?: Record<string, string | number | boolean>;
};

export function TrackedLink({
  event,
  params,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, params);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
