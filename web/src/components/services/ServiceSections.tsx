import { Reveal } from "@/components/about/Reveal";
import { Container } from "@/components/ui/Container";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { getServiceGroup, servicePath } from "@/lib/services/catalog";
import type {
  ServiceCatalogEntry,
  ServiceContent,
} from "@/lib/services/types";
import { cn } from "@/lib/cn";
import { toolHrefByName } from "@/lib/tools/catalog";
import { ArrowRight, ArrowUpRight, Check, Phone, X } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export const SERVICE_SECTIONS = [
  { id: "problemy", label: "Problemy" },
  { id: "zakres", label: "Zakres" },
  { id: "przyklad", label: "Przykład" },
  { id: "proces", label: "Jak pracujemy" },
  { id: "narzedzia", label: "Narzędzia" },
  { id: "faq", label: "FAQ" },
] as const;

function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.25em]",
        tone === "light" ? "text-brand" : "text-brand-light",
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  id,
  eyebrow,
  title,
  lead,
  tone = "light",
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          tone === "light" ? "text-dark" : "text-white",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "light" ? "text-muted" : "text-white/70",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Przyklejona nawigacja po sekcjach strony usługi. */
export function ServiceSubnav() {
  return (
    <nav
      aria-label="Sekcje strony"
      className="sticky top-[72px] z-30 border-b border-brand/10 bg-white/95 backdrop-blur"
    >
      <Container>
        <ul className="-mx-4 flex gap-1 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {SERVICE_SECTIONS.map((section) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-surface hover:text-dark"
              >
                {section.label}
              </a>
            </li>
          ))}
          <li className="ml-auto shrink-0 pl-2">
            <a
              href="#kontakt"
              data-track="consultation"
              data-track-location="service_subnav"
              data-track-method="anchor"
              className="inline-flex rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Bezpłatna konsultacja
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export function ServiceProblems({
  problems,
}: {
  problems: ServiceContent["problems"];
}) {
  return (
    <section
      id="problemy"
      aria-labelledby="problemy-tytul"
      className="scroll-mt-32 py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-40">
              <SectionTitle
                id="problemy-tytul"
                eyebrow="Z czym przychodzą firmy"
                title={problems.title}
                lead={problems.lead}
              />
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {problems.items.map((problem, index) => (
              <Reveal
                as="li"
                key={problem.title}
                delay={(index % 2) * 80}
                className="group rounded-2xl border border-brand/10 bg-white p-6 transition hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <X className="h-4 w-4" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-dark">
                  {problem.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {problem.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ServiceScope({ scope }: { scope: ServiceContent["scope"] }) {
  return (
    <section
      id="zakres"
      aria-labelledby="zakres-tytul"
      className="relative scroll-mt-32 overflow-hidden bg-dark py-20 text-white lg:py-28"
    >
      <div className="about-grid-bg absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionTitle
          id="zakres-tytul"
          eyebrow="Co robimy"
          title={scope.title}
          lead={scope.lead}
          tone="dark"
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {scope.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 4) * 70}
              className="group bg-dark p-6 transition hover:bg-white/[0.04] sm:p-7"
            >
              <span className="about-gradient-text text-sm font-bold tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function ServiceExample({
  example,
}: {
  example: ServiceContent["example"];
}) {
  return (
    <section
      id="przyklad"
      aria-labelledby="przyklad-tytul"
      className="scroll-mt-32 py-20 lg:py-28"
    >
      <Container>
        <SectionTitle
          id="przyklad-tytul"
          eyebrow="Przykład z praktyki"
          title={example.title}
          lead={example.lead}
        />
        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-xl shadow-brand/5">
          <table className="block w-full text-left md:table">
            <caption className="sr-only">{example.title}</caption>
            <thead className="hidden md:table-header-group">
              <tr className="border-b border-brand/10 bg-surface">
                <th scope="col" className="w-1/5 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Etap
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Dziś, ręcznie
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Po automatyzacji
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {example.rows.map((row) => (
                <tr
                  key={row.label}
                  className="block border-b border-brand/10 p-5 last:border-b-0 md:table-row md:p-0"
                >
                  <th
                    scope="row"
                    className="block pb-3 text-base font-semibold text-dark md:table-cell md:px-6 md:py-5 md:align-top"
                  >
                    {row.label}
                  </th>
                  <td className="block rounded-xl bg-surface/70 p-4 text-sm leading-relaxed text-muted md:table-cell md:rounded-none md:bg-transparent md:px-6 md:py-5 md:align-top">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-muted/80 md:hidden">
                      Dziś
                    </span>
                    {row.before}
                  </td>
                  <td className="mt-2 block rounded-xl bg-brand/[0.06] p-4 text-sm leading-relaxed text-dark md:mt-0 md:table-cell md:rounded-none md:bg-brand/[0.04] md:px-6 md:py-5 md:align-top">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-brand md:hidden">
                      Po automatyzacji
                    </span>
                    <span className="flex gap-2">
                      <Check className="mt-0.5 hidden h-4 w-4 shrink-0 text-brand md:block" aria-hidden />
                      <span>{row.after}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        {example.note ? (
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            {example.note}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export function ServiceProcess({
  process,
}: {
  process: ServiceContent["process"];
}) {
  return (
    <section
      id="proces"
      aria-labelledby="proces-tytul"
      className="scroll-mt-32 border-y border-brand/10 bg-surface py-20 lg:py-28"
    >
      <Container>
        <SectionTitle
          id="proces-tytul"
          eyebrow="Jak pracujemy"
          title={process.title}
          lead={process.lead}
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={(index % 3) * 80}
              className="relative rounded-2xl bg-white p-6 shadow-sm sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-base font-bold text-white shadow-lg shadow-brand/25">
                  {index + 1}
                </span>
                {step.duration ? (
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
                    {step.duration}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function ServiceTools({ tools }: { tools: ServiceContent["tools"] }) {
  return (
    <section
      id="narzedzia"
      aria-labelledby="narzedzia-tytul"
      className="scroll-mt-32 py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle
              id="narzedzia-tytul"
              eyebrow="Technologia"
              title={tools.title}
              lead={tools.lead}
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {tools.items.map((tool, index) => (
              <Reveal
                as="li"
                key={tool.name}
                delay={(index % 2) * 60}
                className="flex items-start gap-4 rounded-2xl border border-brand/10 bg-white p-5"
              >
                <span
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand"
                  aria-hidden
                />
                <div>
                  <p className="font-semibold text-dark">
                    {tool.name.split(", ").map((part, partIndex) => {
                      const href = toolHrefByName(part);
                      return (
                        <span key={part}>
                          {partIndex > 0 ? ", " : null}
                          {href ? (
                            <Link href={href} className="underline decoration-brand/30 underline-offset-4 hover:text-brand">
                              {part}
                            </Link>
                          ) : (
                            part
                          )}
                        </span>
                      );
                    })}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {tool.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ServiceMidCta({
  title,
  body,
  phone,
}: {
  title: string;
  body: string;
  phone: string;
}) {
  return (
    <Container>
      <Reveal className="relative overflow-hidden rounded-3xl bg-brand p-8 text-white sm:p-12">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          aria-hidden
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {CONSULTATION_OFFER.durationLabel}
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/85">{body}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href="#kontakt"
              data-track="consultation"
              data-track-location="service_mid_cta"
              data-track-method="anchor"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand transition hover:bg-white/90"
            >
              {CONSULTATION_OFFER.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              data-track-location="service_mid_cta"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {phone}
            </a>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}

/** Karty usług (powiązane usługi, strona /uslugi). */
export function ServiceCard({
  service,
  headingLevel = "h3",
  showGroup = false,
}: {
  service: ServiceCatalogEntry;
  headingLevel?: "h2" | "h3";
  showGroup?: boolean;
}) {
  const Heading = headingLevel;
  const Icon = service.icon;
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-brand/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
          aria-hidden
        />
      </div>
      {showGroup ? (
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          {getServiceGroup(service.group).name}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-lg font-semibold leading-snug text-dark",
          showGroup ? "mt-1" : "mt-5",
        )}
      >
        <Link
          href={servicePath(service.slug)}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
        >
          {service.name}
        </Link>
      </Heading>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.menuDescription}
      </p>
    </div>
  );
}
