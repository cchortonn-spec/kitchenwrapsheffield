type AnalyticsEvent =
  | "phone_click"
  | "whatsapp_click"
  | "email_click"
  | "form_submit"
  | "quote_request";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
