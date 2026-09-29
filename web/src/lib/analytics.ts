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
 * Etap 1 formularza — dane kontaktowe + zgoda (rekord w Airtable).
 * W Ads: niższa wartość; eventy `generate_lead` + `consultation_submit`.
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

/**
 * Etap 2 formularza — uzupełnione dane (bez „Pomiń”).
 * W Ads: wyższa wartość, główna konwersja do optymalizacji.
 */
export function trackConsultationComplete(details: {
  formName?: string;
  sourcePage?: string;
} = {}) {
  const formName = details.formName || "contact_form_steps";
  const sourcePage = details.sourcePage || currentPath();

  pushDataLayer({
    event: "consultation_complete",
    event_category: "contact",
    event_label: "form_step2_complete",
    form_name: formName,
    source_page: sourcePage,
    page_path: currentPath(),
  });
}
