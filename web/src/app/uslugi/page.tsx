import { Reveal } from "@/components/about/Reveal";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServiceCard } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import type { GuideFaqItem } from "@/lib/airtable.types";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  breadcrumbJsonLd,
  guideFaqJsonLd,
  servicesHubJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  getPublishedServices,
  getPublishedServicesByGroup,
} from "@/lib/services";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AGENCY_PATH } from "@/lib/agency-content";

export const metadata: Metadata = buildMetadata({
  title: "Usługi automatyzacji procesów i AI | Automation Minds",
  description:
    "Audyt i mapowanie procesów, wdrożenia AI, porządek w danych, Airtable i automatyzacje dla działów firmy. Zobacz, w czym pomagamy małym i średnim firmom.",
  path: "/uslugi",
});

const STEPS = [
  {
    title: "Rozmowa",
    body: "Opowiadasz, jak dziś pracuje zespół. Wskazujemy, co warto zmienić najpierw.",
  },
  {
    title: "Plan i wycena",
    body: "Rozrysowujemy proces i wyceniamy pierwszy etap, zanim zaczniemy pracę.",
  },
  {
    title: "Wdrożenie etapami",
    body: "Budujemy, testujemy na prawdziwych danych i uczymy zespół korzystać z rozwiązania.",
  },
  {
    title: "Rozwój",
    body: "Gdy pierwszy etap działa, dokładamy kolejne albo przejmujemy stałą opiekę.",
  },
];

const FAQ: GuideFaqItem[] = [
  {
    question: "Nie wiem, której usługi potrzebuję. Od czego zacząć?",
    answer:
      "Od bezpłatnej konsultacji. W 30 minut porozmawiamy o tym, gdzie zespół traci najwięcej czasu, i wskażemy jeden lub dwa obszary, od których warto zacząć. Jeśli procesów jest dużo, zaproponujemy audyt.",
  },
  {
    question: "Czy pracujecie tylko z dużymi firmami?",
    answer:
      "Nie. Specjalizujemy się w małych i średnich firmach. Projektujemy rozwiązania tak, żeby dało się je uruchomić etapami i rozwijać razem z firmą.",
  },
  {
    question: "Czy musimy zmieniać narzędzia, których używamy?",
    answer:
      "Zwykle nie. Najpierw sprawdzamy, co już macie, i łączymy to ze sobą. Nowe narzędzie proponujemy tylko wtedy, gdy obecne blokuje pracę.",
  },
  {
    question: "Czy pracujecie zdalnie?",
    answer:
      "Tak. Pracujemy z firmami z całej Polski, głównie zdalnie. Gdy to potrzebne, spotykamy się na miejscu.",
  },
];

export default function ServicesHubPage() {
  const groups = getPublishedServicesByGroup();
  const services = getPublishedServices();
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi" },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          servicesHubJsonLd(services),
          breadcrumbJsonLd(breadcrumbs),
          guideFaqJsonLd(FAQ),
        ]}
      />

      <section className="relative overflow-hidden bg-dark text-white">
        <div className="about-grid-bg absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
          aria-hidden
        />
        <Container className="relative z-10 pb-16 pt-10 lg:pb-24 lg:pt-14">
          <div className="[&_a]:text-white/80 [&_nav]:mb-8 [&_span]:text-white/90">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
            Usługi
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Automatyzacja procesów, AI i porządek w danych dla{" "}
            <span className="about-gradient-text">małych i średnich firm</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Pomagamy od pierwszej diagnozy po działające wdrożenie. Zaczynamy od
            procesu, nie od narzędzia, i budujemy rozwiązania, które da się
            później rozwijać bez zaczynania od nowa.{" "}
            <Link href={AGENCY_PATH} className="font-semibold text-white underline decoration-brand-light/60 underline-offset-4 hover:decoration-white">
              Poznaj naszą agencję AI i automatyzacji
            </Link>
            .
          </p>
          <nav aria-label="Obszary usług" className="mt-10">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {groups.map(({ group, services: groupServices }) => {
                const Icon = group.icon;
                return (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-brand-light/50 hover:bg-white/[0.08]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block font-semibold text-white">
                          {group.name}
                        </span>
                        <span className="mt-1 block text-sm text-white/60">
                          {groupServices.length}{" "}
                          {groupServices.length === 1
                            ? "usługa"
                            : groupServices.length < 5
                              ? "usługi"
                              : "usług"}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </section>

      {groups.map(({ group, services: groupServices }, index) => {
        const Icon = group.icon;
        return (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-tytul`}
            className={
              index % 2 === 1
                ? "scroll-mt-24 border-y border-brand/10 bg-surface py-16 lg:py-24"
                : "scroll-mt-24 py-16 lg:py-24"
            }
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-12">
                <Reveal className="lg:col-span-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h2
                    id={`${group.id}-tytul`}
                    className="mt-5 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
                  >
                    {group.name}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    {group.description}
                  </p>
                </Reveal>
                <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
                  {groupServices.map((service, serviceIndex) => (
                    <Reveal as="li" key={service.slug} delay={(serviceIndex % 2) * 80}>
                      <ServiceCard service={service} />
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Container>
          </section>
        );
      })}

      <section aria-labelledby="jak-wspolpracujemy" className="py-20 lg:py-28">
        <Container>
          <div className="rounded-3xl bg-dark p-8 text-white sm:p-12 lg:p-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
                  Jak współpracujemy
                </p>
                <h2
                  id="jak-wspolpracujemy"
                  className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                >
                  Każda usługa zaczyna się tak samo: od rozmowy o procesie
                </h2>
              </div>
              <a
                href="#kontakt"
                data-track="consultation"
                data-track-location="services_hub"
                data-track-method="anchor"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark lg:self-auto"
              >
                {CONSULTATION_OFFER.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <ol className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, index) => (
                <li key={step.title}>
                  <span className="about-gradient-text text-sm font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container className="max-w-4xl [&>section]:mt-0">
          <ArticleFaq items={FAQ} />
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Opowiedz, co zabiera twojemu zespołowi najwięcej czasu"
        body="Nie musisz wiedzieć, której usługi potrzebujesz. Po rozmowie wskażemy, od czego zacząć i czy to się opłaci."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage="/uslugi"
      />
    </SiteLayout>
  );
}
