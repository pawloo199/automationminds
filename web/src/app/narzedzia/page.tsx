import { Reveal } from "@/components/about/Reveal";
import { LeadHero } from "@/components/city/LeadHero";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionTitle } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolCard } from "@/components/tools/ToolSections";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { breadcrumbJsonLd, guideFaqJsonLd, placesCollectionJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { TOOL_GROUPS, TOOLS, TOOLS_HUB_PATH, toolHref } from "@/lib/tools";
import type { Metadata } from "next";

export const revalidate = 3600;

const TITLE = "Narzędzia do automatyzacji, które wdrażamy";
const DESCRIPTION =
  "n8n, Make, Zapier, Power Automate, HubSpot, Pipedrive, Microsoft 365, Google Workspace, KSeF, ChatGPT, Claude i Airtable. Dobieramy narzędzie do procesu, nie odwrotnie.";

const FAQ = [
  {
    question: "Które narzędzie do automatyzacji wybrać?",
    answer:
      "To zależy od procesu, danych i zespołu. Do prostych połączeń wystarczy często Zapier, przy złożonej logice lepszy jest Make, a gdy dane mają zostać na waszym serwerze, n8n. Firmy pracujące w Microsoft 365 często korzystają z Power Automate. Na konsultacji pomagamy wybrać.",
  },
  {
    question: "Czy jesteście partnerem któregoś z tych narzędzi?",
    answer:
      "Nie. Jesteśmy niezależnymi specjalistami od automatyzacji. Dzięki temu doradzamy narzędzie, które najlepiej pasuje do procesu, a nie to, z którego mamy prowizję.",
  },
  {
    question: "Czy możemy zostać przy narzędziach, których już używamy?",
    answer:
      "Tak, i zwykle tak zaczynamy. Łączymy to, co już działa w firmie, a nowe narzędzie proponujemy tylko wtedy, gdy obecne nie dają rady.",
  },
  {
    question: "Czy pracujecie z narzędziami spoza tej listy?",
    answer:
      "Tak. To narzędzia, z którymi pracujemy najczęściej. Łączymy też systemy branżowe, programy księgowe, sklepy internetowe i każdy system, który ma API.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Narzędzia do automatyzacji: n8n, Make, Zapier i inne | Automation Minds",
    description: DESCRIPTION,
    path: TOOLS_HUB_PATH,
  });
}

export default async function ToolsHubPage() {
  const settings = await getSettings();
  const breadcrumbs = [{ label: "Strona główna", href: "/" }, { label: "Narzędzia" }];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          placesCollectionJsonLd(
            { path: TOOLS_HUB_PATH, name: TITLE, description: DESCRIPTION },
            TOOLS.map((tool) => ({ name: tool.name, path: toolHref(tool) })),
          ),
          breadcrumbJsonLd([{ label: "Strona główna", href: "/" }, { label: "Narzędzia", href: TOOLS_HUB_PATH }]),
          guideFaqJsonLd(FAQ),
        ]}
      />

      <LeadHero
        breadcrumbs={breadcrumbs}
        eyebrow="Narzędzia"
        title={TITLE}
        lead="Pracujemy na narzędziach, które znacie, i łączymy je tak, żeby dane przepływały między nimi same. Nie jesteśmy partnerem żadnego dostawcy, więc doradzamy to, co pasuje do waszego procesu."
        bullets={[CONSULTATION_OFFER.durationLabel, "Niezależny dobór narzędzi", "Integracje z systemami, które już macie"]}
        phone={settings.phone}
        sourcePage={TOOLS_HUB_PATH}
      />

      {TOOL_GROUPS.map((group, groupIndex) => {
        const tools = TOOLS.filter((tool) => tool.group === group.id);
        if (tools.length === 0) return null;
        return (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-tytul`}
            className={groupIndex % 2 === 0 ? "scroll-mt-28 py-16 lg:py-20" : "scroll-mt-28 bg-surface py-16 lg:py-20"}
          >
            <Container>
              <SectionTitle id={`${group.id}-tytul`} eyebrow={`0${groupIndex + 1}`} title={group.name} lead={group.description} />
              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {tools.map((tool, index) => (
                  <Reveal as="li" key={tool.slug} delay={(index % 4) * 60}>
                    <ToolCard tool={tool} headingLevel="h3" />
                  </Reveal>
                ))}
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
              <p className="mt-4 text-2xl font-bold leading-snug text-dark">Wybór narzędzi: pytania i odpowiedzi</p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={FAQ} />
            </div>
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Nie wiecie, które narzędzie wybrać?"
        body="Opowiedz, jak dziś wygląda proces. W 30 minut wskażemy narzędzie, które się sprawdzi, i to, od czego zacząć."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={TOOLS_HUB_PATH}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
