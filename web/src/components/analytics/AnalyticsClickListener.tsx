"use client";

import {
  trackConsultationClick,
  trackPhoneClick,
} from "@/lib/analytics";
import { useEffect } from "react";

function closestElement(target: EventTarget | null, selector: string) {
  if (!(target instanceof Element)) return null;
  return target.closest(selector);
}

function readAttr(el: Element, name: string) {
  return el.getAttribute(name)?.trim() || undefined;
}

/**
 * Delegacja kliknięć pod GTM:
 * - a[href^="tel:"] → phone_click
 * - [data-track="consultation"] → consultation_click
 */
export function AnalyticsClickListener() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;

      const phoneLink = closestElement(event.target, 'a[href^="tel:"]');
      if (phoneLink) {
        const href = phoneLink.getAttribute("href") || "";
        const phone = href.replace(/^tel:/i, "");
        trackPhoneClick({
          phone,
          label: phoneLink.textContent?.trim() || phone,
          location:
            readAttr(phoneLink, "data-track-location") ||
            readAttr(phoneLink, "data-location") ||
            "link",
        });
        return;
      }

      const consultationEl = closestElement(
        event.target,
        '[data-track="consultation"]',
      );
      if (consultationEl) {
        const methodAttr = readAttr(consultationEl, "data-track-method");
        const method =
          methodAttr === "modal" ||
          methodAttr === "link" ||
          methodAttr === "anchor"
            ? methodAttr
            : consultationEl.tagName === "A"
              ? "link"
              : "modal";

        trackConsultationClick({
          label: consultationEl.textContent?.trim() || "consultation",
          location: readAttr(consultationEl, "data-track-location") || "cta",
          method,
        });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
