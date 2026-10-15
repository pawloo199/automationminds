import type { CityPageContent } from "../types";

export const polnocWschodCities: CityPageContent[] = [
  {
    slug: "rzeszow",
    name: "Rzeszów",
    nameGenitive: "Rzeszowa",
    nameLocative: "Rzeszowie",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Rzeszowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Rzeszowa: lotnictwo, IT i usługi B2B. Zdalne wdrożenia procesów produkcji, HR i raportów. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Rzeszowie",
    heroLead:
      "Wspieramy rzeszowskie firmy z lotnictwa, IT i przemysłu, gdy dokumentacja, delivery i back-office muszą iść w tym samym tempie co kontrakt.",
    introParagraphs: [
      "Rzeszów to lotnictwo, zaawansowany przemysł, SSC i rosnące software house’y. Automatyzacja procesów w Rzeszowie często dotyczy jakości danych między produkcją a biurem, raportowania dla klienta i onboardingu specjalistów, gdy błąd kosztuje termin, a nie tylko nerwy.",
      "Wdrażamy dla rzeszowskich zespołów zdalnie, bez lokalnego oddziału. Zaczynamy od procesów z najszybszym zwrotem i rozwijamy je iteracyjnie.",
    ],
    localContext:
      "Lokalny rynek ma silne powiązania z branżą aerospace i dostawcami tier. Równolegle rośnie IT z klientami zagranicznymi. Widać ręczne statusy projektów, rozproszone checklisty jakości i presję SLA w obsłudze klienta.",
    whyHere:
      "W Rzeszowie automatyzacja chroni terminowość i reputację przy kontraktach wymagających śladu audytowego. To praktyczne uzupełnienie inwestycji w maszyny i licencje, porządkuje to, co dzieje się między systemami.",
    focusIndustries: [
      {
        title: "Lotnictwo i advanced manufacturing",
        body: "Dokumentacja, powiadomienia i raporty, mniej ręcznego składania statusów między działami.",
      },
      {
        title: "IT i centra usług",
        body: "Tickety, onboarding i raportowanie czasu / SLA dla klienta.",
      },
      {
        title: "Produkcja i łańcuch dostaw",
        body: "Zamówienia, braki komponentów i komunikacja z dostawcami w jednym torze.",
      },
      {
        title: "Usługi B2B",
        body: "Obiegi umów, faktur i akceptacji przy rosnącej liczbie kontraktów.",
      },
    ],
    focusProcesses: [
      {
        title: "Status projektu / zlecenia",
        body: "Aktualizacje z narzędzi źródłowych do klienta i zarządu.",
      },
      {
        title: "Onboarding specjalistów",
        body: "Checklisty dostępów, szkoleń BHP i IT w jednym widoku.",
      },
      {
        title: "Kontrola dokumentów",
        body: "Przypomnienia, wersje i archiwum zamiast maili z załącznikami.",
      },
      {
        title: "Raporty KPI",
        body: "Automatyczne dashboardy z ERP, CRM i arkuszy operacyjnych.",
      },
    ],
    howWeWork:
      "Z firmami z Rzeszowa pracujemy online: konsultacja, mapowanie procesu, wdrożenie i testy na waszych danych. W projektach wrażliwych na compliance omawiamy dostępy i zakres danych przed pierwszą linią kodu integracji.",
    faq: [
      {
        id: "rze-1",
        question: "Czy automatyzacja w Rzeszowie ma sens w branży lotniczej?",
        answer:
          "Tak. W obszarach obiegów, powiadomień i raportów, które da się opisać. Nie zastępujemy specjalistycznych systemów produkcyjnych bez analizy.",
      },
      {
        id: "rze-2",
        question: "Czy pracujecie z software house’ami z Rzeszowa?",
        answer:
          "Tak. Często od raportowania, onboardingu i obsługi ticketów. Startujemy od jednego modułu.",
      },
      {
        id: "rze-3",
        question: "Czy wymagacie obecności w Podkarpaciu?",
        answer:
          "Nie. Standard to współpraca zdalna i hybrydowa.",
      },
      {
        id: "rze-4",
        question: "Jak dbacie o bezpieczeństwo danych?",
        answer:
          "Minimalizujemy zakres danych, stosujemy role i omawiamy wymagania klienta / audytu przed wdrożeniem.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-raportow",
      "automatyzacja-dla-hr",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["lancut", "mielec", "debica", "stalowa-wola", "krosno", "przemysl"],
  },
];
