import { ContactFormStepsLazy } from "@/components/forms/ContactFormStepsLazy";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import type { BreadcrumbItem } from "@/lib/airtable.types";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { CONTACT_FORM_SERVICE_OPTIONS } from "@/lib/services/catalog";
import { ArrowRight, Check, Phone } from "lucide-react";
import Image from "next/image";

/** Domyślne zdjęcie hero stron lokalnych (to samo co na stronie głównej). */
export const DEFAULT_LOCAL_HERO_IMAGE =
  "https://tkwurcvdccuuc86o.public.blob.vercel-storage.com/automatyzacje-procesow-ai.webp";

/**
 * Hero stron lokalnych (miasta, województwa, cała Polska): nagłówek,
 * korzyści, telefon i formularz konsultacji w pierwszym ekranie.
 */
export function LeadHero({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  bullets,
  imageUrl = DEFAULT_LOCAL_HERO_IMAGE,
  imageAlt = "",
  phone,
  sourcePage,
}: {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  lead: string;
  bullets: readonly string[];
  imageUrl?: string;
  imageAlt?: string;
  phone: string;
  sourcePage: string;
}) {
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-dark text-white">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-dark/50" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/80 to-dark/45"
        aria-hidden
      />
      <div
        className="home-aurora pointer-events-none absolute -bottom-40 left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand/25 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10 pb-14 pt-8 lg:pb-20 lg:pt-12">
        <div className="[&_a]:text-white/75 [&_nav]:mb-8 [&_span]:text-white/90">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 lg:pt-2">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light sm:text-sm">
              <span className="h-px w-10 bg-brand" aria-hidden />
              {eyebrow}
            </p>
            <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lead}</p>
            <ul className="mt-7 space-y-2.5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-white/90">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#konsultacja"
                data-track="consultation"
                data-track-location="local_hero"
                data-track-method="anchor"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark lg:hidden"
              >
                {CONSULTATION_OFFER.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={phoneHref}
                data-track-location="local_hero"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Zadzwoń: {phone}
              </a>
            </div>
          </div>

          <div
            id="konsultacja"
            className="scroll-mt-24 rounded-2xl bg-white p-6 text-dark shadow-2xl sm:p-8 lg:col-span-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {CONSULTATION_OFFER.durationLabel}
            </p>
            <h2 className="mt-2 text-2xl font-bold">Umów bezpłatną konsultację</h2>
            <p className="mb-6 mt-2 text-sm leading-relaxed text-muted">
              Zostaw kontakt, a oddzwonimy w ciągu 1 dnia roboczego. Rozmowa trwa
              około 30 minut i do niczego nie zobowiązuje.
            </p>
            <ContactFormStepsLazy
              sourcePage={sourcePage}
              redirectOnSuccess
              services={CONTACT_FORM_SERVICE_OPTIONS}
            />
            <p className="mt-5 border-t border-brand/10 pt-4 text-sm text-muted">
              Wolisz zadzwonić?{" "}
              <a
                href={phoneHref}
                data-track-location="local_hero_form"
                className="font-semibold text-brand hover:underline"
              >
                {phone}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
