declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

type TrackPayload = Record<string, unknown>;

function pushDataLayer(payload: TrackPayload) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

function currentPath() {
  if (typeof window === "undefined") return "";
  return window.location.pathname + window.location.search;
}

/** Klik w numer telefonu (tel:) — konwersja o wysokiej wartości. */
export function trackPhoneClick(details: {
  location?: string;
  phone?: string;
  label?: string;
} = {}) {
  pushDataLayer({
    event: "phone_click",
    event_category: "contact",
    event_label: details.label || details.phone || "phone",
    click_location: details.location || "unknown",
    phone_number: details.phone || "",
    page_path: currentPath(),
  });
}

/** Klik w CTA konsultacji (modal / link do formularza /kontakt). */
export function trackConsultationClick(details: {
  location?: string;
  label?: string;
  method?: "modal" | "link" | "anchor";
} = {}) {
  pushDataLayer({
    event: "consultation_click",
    event_category: "engagement",
    event_label: details.label || "consultation",
    click_location: details.location || "unknown",
    cta_method: details.method || "link",
    page_path: currentPath(),
  });
}

/**
 * Wysłanie formularza konsultacji — główna konwersja leadowa.
 * Event `generate_lead` jest rekomendowany przez GA4; `consultation_submit` ułatwia filtr w GTM.
 */
export function trackLeadConversion(details: {
  formName?: string;
  sourcePage?: string;
} = {}) {
  const formName = details.formName || "contact";
  const sourcePage = details.sourcePage || currentPath();

  pushDataLayer({
    event: "generate_lead",
    event_category: "contact",
    event_label: "form_submit",
    form_name: formName,
    source_page: sourcePage,
    page_path: currentPath(),
  });

  pushDataLayer({
    event: "consultation_submit",
    event_category: "contact",
    event_label: formName,
    form_name: formName,
    source_page: sourcePage,
    page_path: currentPath(),
  });

  if (typeof window.gtag === "function") {
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

    window.gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "form_submit",
      form_name: formName,
      source_page: sourcePage,
    });

    if (adsId && conversionLabel) {
      window.gtag("event", "conversion", {
        send_to: `${adsId}/${conversionLabel}`,
      });
    }
  }
}
