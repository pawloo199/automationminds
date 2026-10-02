import { Reveal } from "@/components/about/Reveal";
import { LeadHero } from "@/components/city/LeadHero";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionTitle } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { breadcrumbJsonLd, guideFaqJsonLd, placesCollectionJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getLiveProcesses, PROCESS_AREAS, PROCESSES, PROCESSES_HUB_PATH, processPath } from "@/lib/processes";
import { ArrowUpRight, Clock, Map, ListChecks, Route } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

const TITLE = "Procesy, które automatyzujemy";
const DESCRIPTION =
  "Jak wygląda automatyzacja konkretnych procesów w firmie: faktury, płatności, sprzedaż, obsługa klienta, kadry i dokumenty. Mapa procesu, etapy wdrożenia i warianty.";

const HOW_TO_READ = [
  { icon: Map, title: "Mapa procesu", body: "Krok po kroku: co robi system, a gdzie decyduje człowiek." },
  { icon: Route, title: "Przebieg wdrożenia", body: "Etapy, orientacyjny czas i to, czego potrzebujemy od was." },
  { icon: ListChecks, title: "Lista do przygotowania", body: "Co warto zebrać przed startem, żeby wdrożenie poszło sprawnie." },
  { icon: Clock, title: "Warianty i koszty", body: "Od czego zacząć, co można dołożyć później i od czego zależy cena." },
];

const FAQ = [
  {
    question: "Mojego procesu nie ma na liście. Czy możecie go zautomatyzować?",
    answer:
      "Najprawdopodobniej tak. To procesy, o które pytacie najczęściej, i lista stale się wydłuża. Na bezpłatnej konsultacji sprawdzimy wasz proces i powiemy, czy i jak da się go zautomatyzować.",
  },
  {
    question: "Od którego procesu zacząć?",
    answer:
      "Od tego, który zabiera zespołowi najwięcej czasu, powtarza się codziennie i ma jasne zasady. Najczęściej są to faktury, zapytania od klientów albo raporty.",
  },
  {
    question: "Czy jeden proces można wdrożyć bez zmiany całej firmy?",
    answer:
      "Tak, tak właśnie pracujemy. Automatyzujemy jeden proces na narzędziach, których już używacie, a kolejne dokładamy, gdy pierwszy działa.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Automatyzacja procesów w firmie: przykłady i przebieg | Automation Minds",
    description: DESCRIPTION,
    path: PROCESSES_HUB_PATH,
  });
}

export default async function ProcessesHubPage() {
  const settings = await getSettings();
  const breadcrumbs = [{ label: "Strona główna", href: "/" }, { label: "Procesy" }];
  const live = getLiveProcesses();

  return (
    <SiteLayout>
      <JsonLd
        data={[
          placesCollectionJsonLd(
            { path: PROCESSES_HUB_PATH, name: TITLE, description: DESCRIPTION },
            live.map((process) => ({ name: process.name, path: processPath(process.slug) })),
          ),
          breadcrumbJsonLd([{ label: "Strona główna", href: "/" }, { label: "Procesy", href: PROCESSES_HUB_PATH }]),
          guideFaqJsonLd(FAQ),
        ]}
      />

      <LeadHero
        breadcrumbs={breadcrumbs}
        eyebrow="Procesy"
        title={TITLE}
        lead="Każda strona to opis jednego procesu: jak wygląda dziś, jak działa po automatyzacji, jak przebiega wdrożenie i co warto przygotować. Dobry punkt wyjścia przed rozmową albo po niej."
        bullets={[CONSULTATION_OFFER.durationLabel, "Mapa procesu krok po kroku", "Warianty od podstawowego do pełnego"]}
        phone={settings.phone}
        sourcePage={PROCESSES_HUB_PATH}
      />

      <section aria-labelledby="jak-czytac" className="py-16 lg:py-20">
        <Container>
          <SectionTitle id="jak-czytac" eyebrow="Jak czytać te strony" title="Co znajdziesz w opisie każdego procesu" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_TO_READ.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 60} className="rounded-2xl border border-brand/10 bg-white p-6">
                <item.icon className="h-6 w-6 text-brand" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {PROCESS_AREAS.map((area, areaIndex) => {
        const processes = PROCESSES.filter((process) => process.area === area.id);
        if (processes.length === 0) return null;
        const Icon = area.icon;
        return (
          <section
            key={area.id}
            id={area.id}
            aria-labelledby={`${area.id}-tytul`}
            className={areaIndex % 2 === 0 ? "scroll-mt-28 bg-surface py-14 lg:py-16" : "scroll-mt-28 py-14 lg:py-16"}
          >
            <Container>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h2 id={`${area.id}-tytul`} className="text-2xl font-bold text-dark sm:text-3xl">{area.name}</h2>
                  <p className="mt-1 text-base text-muted">{area.description}</p>
                </div>
              </div>
              <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {processes.map((process) =>
                  process.status === "live" ? (
                    <li key={process.slug}>
                      <Link
                        href={processPath(process.slug)}
                        className="group flex h-full flex-col rounded-2xl border border-brand/20 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
                      >
                        <span className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-semibold text-dark group-hover:text-brand">{process.name}</h3>
                          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                        </span>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{process.summary}</p>
                        <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand">Zobacz opis procesu</span>
                      </Link>
                    </li>
                  ) : (
                    <li key={process.slug} className="flex h-full flex-col rounded-2xl border border-dashed border-brand/20 p-6">
                      <h3 className="text-lg font-semibold text-dark/70">{process.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{process.summary}</p>
                      <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted">Opis wkrótce, zapytaj na konsultacji</span>
                    </li>
                  ),
                )}
              </ul>
            </Container>
          </section>
        );
      })}

      <section aria-label="Najczęstsze pytania" className="border-t border-brand/10 py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</p>
              <p className="mt-4 text-2xl font-bold leading-snug text-dark">Automatyzacja procesów: pytania i odpowiedzi</p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={FAQ} />
            </div>
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Nie widzisz swojego procesu?"
        body="Opowiedz, co zabiera zespołowi najwięcej czasu. W 30 minut sprawdzimy, czy i jak da się to zautomatyzować."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={PROCESSES_HUB_PATH}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
