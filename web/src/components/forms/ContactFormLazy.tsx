"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ContactForm = dynamic(
  () => import("./ContactForm").then((m) => m.ContactForm),
  {
    ssr: false,
    loading: () => (
      <div className="h-80 animate-pulse rounded-xl bg-surface" aria-hidden />
    ),
  },
);

export function ContactFormLazy({
  sourcePage = "/",
  redirectOnSuccess = false,
}: {
  sourcePage?: string;
  redirectOnSuccess?: boolean;
}) {
  return (
    <Suspense
      fallback={
        <div className="h-80 animate-pulse rounded-xl bg-surface" aria-hidden />
      }
    >
      <ContactForm sourcePage={sourcePage} redirectOnSuccess={redirectOnSuccess} />
    </Suspense>
  );
}
