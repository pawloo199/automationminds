import { ContactCtaModalButton } from "@/components/forms/ContactCtaModalButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CitySilo, Settings } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type StatConfig = {
  value: string;
  suffix?: string;
  label: string;
};

function StatItem({ value, suffix, label }: StatConfig) {
  return (
    <div
      className={cn(
        "relative px-0 sm:px-6 lg:first:pl-0",
        "max-sm:py-1 max-sm:odd:border-r max-sm:odd:border-brand/15 max-sm:odd:pr-5 max-sm:even:pl-5",
      )}
    >
      <p className="text-4xl font-bold tracking-tight text-dark sm:text-3xl lg:text-4xl">
        {value}
        {suffix ? (
          <span className="ml-0.5 text-2xl font-semibold text-brand sm:text-xl lg:text-2xl">
            {suffix}
          </span>
        ) : null}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:max-w-xs">
        {label}
      </p>
    </div>
  );
}

export function StatsRow({
  section,
  stats,
  cities,
  sourcePage = "/",
  services = [],
  useModalCta = false,
}: {
  section: {
    subtitle?: string;
    title: string;
    body?: string;
    buttonText?: string;
    buttonLink?: string;
    imageUrl?: string;
    imageAlt?: string;
    citiesSubtitle?: string;
    citiesTitle?: string;
    citiesBody?: string;
  };
  stats: Settings;
  cities: CitySilo[];
  sourcePage?: string;
  services?: { id: string; menuLabel: string }[];
  useModalCta?: boolean;
}) {
  const bodyParagraphs = section.body
    ?.split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const statItems: StatConfig[] = [
    {
      value: stats.statNumber,
      suffix: "+",
      label: stats.statNumberLabel,
    },
    {
      value: stats.statDeployments,
      suffix: "+",
      label: stats.statDeploymentsLabel,
    },
    {
      value: stats.statPercent,
      suffix: "%",
      label: stats.statPercentLabel,
    },
    {
      value: stats.statRating,
      label: stats.statRatingLabel,
    },
  ];

  const citiesSubtitle =
    section.citiesSubtitle?.trim() || "Zasięg w całym kraju";
  const citiesTitle =
    section.citiesTitle?.trim() || "Automatyzacja tam, gdzie działa Twoja firma";
  const citiesBody =
    section.citiesBody?.trim() ||
    "Pracujemy z firmami w całej Polsce — od aglomeracji po mniejsze rynki lokalne. Dla każdego miasta dobieramy rozwiązania dopasowane do Twojego regionu i branży.";

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(109,81,253,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(139,116,255,0.06),transparent_60%)]" />
      </div>

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {section.imageUrl ? (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand/10 bg-surface shadow-xl">
                <Image
                  src={section.imageUrl}
                  alt={section.imageAlt || section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-sm font-medium text-dark shadow-sm backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-brand" aria-hidden />
                  Cała Polska
                </div>
              </div>
            </div>
          ) : null}

          <div className="lg:col-span-7">
            <SectionHeading
              subtitle={section.subtitle}
              title={section.title}
              align="left"
              className="max-w-none"
            />

            {bodyParagraphs && bodyParagraphs.length > 0 ? (
              <div className="mt-4 space-y-4">
                {bodyParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            {section.buttonText && section.buttonLink ? (
              <div className="mt-8">
                {useModalCta ? (
                  <ContactCtaModalButton
                    label={section.buttonText}
                    sourcePage={sourcePage}
                    services={services}
                    className="group w-full px-10 py-[1.125rem] text-base sm:w-auto md:text-lg"
                  />
                ) : (
                  <Button href={section.buttonLink}>{section.buttonText}</Button>
                )}
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-12">
            <div className="border-t border-brand/15 pt-10 lg:pt-12">
              <div className="grid max-sm:grid-cols-2 max-sm:gap-y-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:divide-x lg:divide-brand/10">
                {statItems.map((item) => (
                  <StatItem key={item.label} {...item} />
                ))}
              </div>
            </div>

            {cities.length > 0 ? (
              <div className="mt-12 border-t border-brand/15 pt-10 lg:mt-16 lg:pt-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    {citiesSubtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                    {citiesTitle}
                  </h3>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {citiesBody}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-1 sm:mt-8 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  {cities.map((city) => (
                    <li key={city.id}>
                      <Link
                        href={city.href}
                        className="group flex w-full items-center gap-2 py-2.5 text-sm font-medium text-dark transition-colors duration-200 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 sm:gap-3 sm:py-2"
                        aria-label={`Automatyzacja w mieście ${city.name}`}
                      >
                        <MapPin
                          className="h-3.5 w-3.5 shrink-0 text-brand/50"
                          aria-hidden
                        />
                        <span className="min-w-0 truncate">{city.name}</span>
                        <ArrowUpRight
                          className="ml-auto hidden h-3.5 w-3.5 shrink-0 text-brand/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand/80 sm:block sm:opacity-0 sm:group-hover:opacity-100"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
