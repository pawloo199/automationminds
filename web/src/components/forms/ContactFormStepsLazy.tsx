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
}: {
  sourcePage?: string;
  services?: { id: string; menuLabel: string }[];
  onComplete?: () => void;
}) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl bg-surface" aria-hidden />
      }
    >
      <ContactFormSteps
        sourcePage={sourcePage}
        services={services}
        onComplete={onComplete}
      />
    </Suspense>
  );
}
