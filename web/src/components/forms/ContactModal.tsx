"use client";

import { ContactFormStepsLazy } from "@/components/forms/ContactFormStepsLazy";
import { cn } from "@/lib/cn";
import { X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export function ContactModal({
  open,
  onClose,
  sourcePage = "/",
  services = [],
  title = "Bezpłatna konsultacja",
  subtitle = "Zostaw dane kontaktowe — odezwiemy się wkrótce.",
}: {
  open: boolean;
  onClose: () => void;
  sourcePage?: string;
  services?: { id: string; menuLabel: string }[];
  title?: string;
  subtitle?: string;
}) {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setFormKey((value) => value + 1);
    }
  }, [open]);

  function handleComplete() {
    window.setTimeout(() => {
      onClose();
    }, 1800);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label="Zamknij okno"
        className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={cn(
          "relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-2xl",
          "max-h-[calc(100dvh-2rem)] overflow-y-auto",
        )}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand/10 bg-white px-6 py-5">
          <div>
            <h2 id={titleId} className="text-xl font-bold text-dark sm:text-2xl">
              {title}
            </h2>
            <p id={descriptionId} className="mt-1 text-sm text-muted">
              {subtitle}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Zamknij"
            className="rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-dark"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="px-5 py-5">
          <ContactFormStepsLazy
            key={formKey}
            sourcePage={sourcePage}
            services={services}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  );
}
