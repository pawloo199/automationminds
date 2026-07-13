declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackLeadConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  window.gtag("event", "generate_lead", {
    event_category: "contact",
    event_label: "form_submit",
  });

  if (adsId && conversionLabel) {
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${conversionLabel}`,
    });
  }
}
