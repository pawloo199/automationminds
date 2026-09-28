"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ContactFormSteps = dynamic(
  () => import("./ContactFormSteps").then((m) => m.ContactFormSteps),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 animate-pulse rounded-xl bg-surface" aria-hidden />
    ),
  },
);

export function ContactFormStepsLazy({
  sourcePage = "/",
  services = [],
  onComplete,
  redirectOnSuccess = false,
}: {
  sourcePage?: string;
  services?: { id: string; menuLabel: string }[];
  onComplete?: () => void;
  redirectOnSuccess?: boolean;
}) {
  function handleComplete() {
    if (redirectOnSuccess) {
      window.location.href = "/dziekujemy";
      return;
    }
    onComplete?.();
  }

  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl bg-surface" aria-hidden />
      }
    >
      <ContactFormSteps
        sourcePage={sourcePage}
        services={services}
        onComplete={handleComplete}
      />
    </Suspense>
  );
}
