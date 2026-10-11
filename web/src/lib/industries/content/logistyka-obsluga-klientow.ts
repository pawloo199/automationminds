import type { IndustryPageContent } from "../types";

export const logistykaObslugaKlientow: IndustryPageContent = {
  industrySlug: "firmy-logistyczne",
  subSlug: "obsluga-klientow",
  name: "Raporty i obsługa klientów",
  excerpt: "Stany, statusy i raporty dla klientów wysyłane automatycznie, odpowiedzi na typowe pytania i KPI usług na bieżąco.",
  metaTitle: "Raporty dla klientów 3PL i obsługa klienta w logistyce",
  metaDescription:
    "Automatyzujemy obsługę klientów firmy logistycznej: raporty stanów i operacji, statusy zleceń, KPI usług i agent AI odpowiadający na pytania klientów.",
  primaryKeyword: "raporty dla klientów logistyka",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy logistyczne: raporty i obsługa klientów",
    title: "Klient wie, co dzieje się z jego towarem, zanim zapyta",
    lead: "Klienci operatora logistycznego chcą wiedzieć, ile mają towaru, co wyszło, co przyszło i jak firma realizuje umowę. Biuro obsługi klienta składa raporty z WMS i TMS, odpowiada na pytania o stany i statusy, a przed spotkaniem z klientem ktoś liczy KPI w arkuszu. Automatyzujemy tę pracę: raporty wychodzą same, KPI są liczone na bieżąco, a na typowe pytania odpowiada agent AI.",
    bullets: [
      "Raporty stanów i operacji wysyłane automatycznie",
      "KPI usług liczone na bieżąco",
      "Agent AI odpowiadający na pytania o stany i statusy",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Operatorzy logistyczni i magazyny kontraktowe z wieloma klientami" },
    { label: "Co automatyzujemy", value: "Raporty, statusy, KPI, odpowiedzi na pytania, przeglądy z klientami" },
    { label: "Narzędzia", value: "WMS, TMS, Power BI lub arkusze, poczta, agent AI, n8n" },
    { label: "Zasada", value: "Problemy i wyjątki klient omawia z opiekunem" },
  ],
  symptoms: {
    title: "Kiedy obsługę klientów warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością, biuro obsługi klienta spędza dzień na raportach i odpowiedziach.",
    items: [
      "Raporty dla klientów składa się ręcznie z eksportów z WMS i TMS.",
      "Każdy klient chce raport w innym formacie i o innej porze.",
      "Pytania o stany i statusy zabierają opiekunom klientów sporą część dnia.",
      "KPI z umowy liczy się dopiero przed spotkaniem z klientem.",
      "O problemie z terminowością klient dowiaduje się wcześniej niż zarząd.",
      "Nowy klient oznacza nowy raport, który ktoś musi przygotowywać co tydzień.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja obsługi klientów",
    paragraphs: [
      "Podstawą są dane z WMS i TMS: stany, przyjęcia, wydania, zlecenia, terminowość. Automatyzacja pobiera je regularnie i przygotowuje dla każdego klienta raport w uzgodnionym formacie: plik, raport w Power BI albo podsumowanie w mailu. Raporty wychodzą o ustalonej porze, bez udziału biura.",
      "KPI z umów, takie jak terminowość wysyłek, czas przyjęcia, dokładność kompletacji czy liczba reklamacji, są liczone na bieżąco. Zarząd i opiekunowie klientów widzą je w jednym miejscu, a gdy wskaźnik spada poniżej progu, dostają informację, zanim klient zwróci na to uwagę.",
      "Na typowe pytania klientów, np. o stan konkretnego indeksu, status zlecenia czy dokument, może odpowiadać agent AI na podstawie danych z systemów. Agent widzi tylko dane klienta, który pyta, a sprawy wymagające decyzji przekazuje opiekunowi.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja obsługi klientów",
    lead: "Zakres dopasowujemy do wymagań klientów i systemów firmy.",
    items: [
      { title: "Raporty stanów", body: "Stany magazynowe według indeksów, partii i dat ważności." },
      { title: "Raporty operacji", body: "Przyjęcia, wydania, zwroty i zlecenia transportowe w okresie." },
      { title: "Formaty klientów", body: "Plik, raport w Power BI lub podsumowanie w mailu, o ustalonej porze." },
      { title: "KPI usług", body: "Terminowość, czas przyjęcia, dokładność i reklamacje liczone na bieżąco." },
      { title: "Alerty", body: "Informacja dla opiekuna i zarządu, gdy wskaźnik spada poniżej progu." },
      { title: "Agent AI", body: "Odpowiedzi na pytania o stany, statusy i dokumenty." },
      { title: "Przeglądy z klientami", body: "Zestawienie na spotkanie z klientem przygotowane automatycznie." },
      { title: "Rozdzielenie danych", body: "Każdy klient widzi tylko swoje dane." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od danych w WMS do informacji u klienta.",
    items: [
      {
        title: "Raport poranny",
        trigger: "Codziennie o ustalonej godzinie",
        steps: ["Pobranie stanów i operacji z WMS", "Raport w formacie klienta", "Wysyłka do osób wskazanych przez klienta"],
        result: "Klient zaczyna dzień z aktualnymi danymi, a biuro nie składa raportów.",
      },
      {
        title: "Spadek terminowości",
        trigger: "Terminowość wysyłek klienta spada poniżej progu",
        steps: ["Informacja dla opiekuna i kierownika operacji", "Lista zleceń, które wpłynęły na wynik", "Szkic informacji dla klienta do decyzji opiekuna"],
        result: "Firma reaguje na problem, zanim klient go zgłosi.",
      },
    ],
  },
  example: {
    title: "Obsługa klientów przed i po automatyzacji",
    lead: "Przykład operatora logistycznego z kilkunastoma klientami kontraktowymi.",
    rows: [
      { label: "Raporty", before: "Składane ręcznie z eksportów.", after: "Wysyłane automatycznie w formacie klienta." },
      { label: "KPI", before: "Liczone przed spotkaniem.", after: "Na bieżąco, z alertami." },
      { label: "Pytania", before: "Opiekun sprawdza w systemach.", after: "Agent odpowiada na typowe pytania." },
      { label: "Nowy klient", before: "Nowy raport do składania co tydzień.", after: "Raport skonfigurowany raz." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od raportów dla największych klientów, a agenta dodajemy w kolejnym kroku.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jakie raporty i KPI przygotowujecie, dla kogo i z jakich danych.", fromYou: "Przykładowe raporty i rozmowa z opiekunami klientów." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy formaty, harmonogram, definicje KPI, progi alertów i zakres agenta.", fromYou: "Akceptacja definicji KPI." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Budujemy raporty i porównujemy je z raportami przygotowanymi ręcznie.", fromYou: "Opiekun porównujący wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych klientów i rozwijamy raporty.", fromYou: "Informacja o nowych wymaganiach klientów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od raportów i dodawać KPI i agenta.",
    items: [
      { name: "Raporty", description: "Dla firm, które chcą skończyć z ręcznym składaniem raportów.", includes: ["Raporty stanów i operacji", "Formaty klientów", "Harmonogram wysyłki", "Rozdzielenie danych"] },
      { name: "Raporty i KPI", description: "Dla firm, które chcą panować nad jakością usług.", includes: ["Wszystko z wariantu Raporty", "KPI liczone na bieżąco", "Alerty", "Zestawienia na przeglądy z klientami"] },
      { name: "Obsługa z agentem", description: "Dla firm, które chcą odciążyć opiekunów klientów.", includes: ["Wszystko z wariantu Raporty i KPI", "Agent AI dla klientów", "Przekazanie spraw opiekunowi", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i formatów raportów,",
      "dostęp do danych w WMS i TMS,",
      "liczba i złożoność KPI,",
      "zakres agenta AI,",
      "narzędzie raportowe, np. Power BI lub arkusze.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Klient zobaczy dane innego klienta.", mitigation: "Raporty i agent korzystają z danych filtrowanych po kliencie, a konfigurację sprawdzamy przy każdym nowym kliencie." },
      { risk: "KPI policzone inaczej niż w umowie.", mitigation: "Definicje KPI ustalamy na podstawie umów i porównujemy z dotychczasowymi wyliczeniami." },
      { risk: "Raport z błędnymi danymi trafi do klienta.", mitigation: "Kontrola kompletności danych przed wysyłką i wstrzymanie raportu, gdy dane są niepełne." },
      { risk: "Agent poda nieaktualny stan.", mitigation: "Agent korzysta z bieżących danych z czasem aktualizacji, a przy wątpliwościach przekazuje pytanie opiekunowi." },
    ],
  },
  faq: [
    { question: "Czy raporty mogą być w Power BI?", answer: "Tak. Raporty mogą być w Power BI, w arkuszach albo w formie podsumowań w mailu, zależnie od oczekiwań klientów." },
    { question: "Czy klient może mieć własny dostęp do danych?", answer: "Tak, przez portal lub raport online, z dostępem tylko do jego danych." },
    { question: "Jak liczone są KPI?", answer: "Według definicji z umów z klientami, które ustalamy z wami przed wdrożeniem. Obliczenia wykonują systemy, nie model AI." },
    { question: "Czy agent może odpowiadać w obcych językach?", answer: "Tak. Agent odpowiada w języku pytania, na podstawie danych z waszych systemów." },
    { question: "Czy to obciąży WMS?", answer: "Dane pobieramy w sposób uzgodniony z dostawcą lub administratorem WMS, np. poza godzinami szczytu albo z kopii danych." },
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "automatyzacja-w-obsludze-klienta", "agenci-ai"],
  relatedProcessSlugs: ["obsluga-reklamacji", "raporty-finansowe"],
  relatedToolSlugs: ["microsoft-365", "n8n", "chatgpt"],
  relatedArticleSlugs: ["kpi-w-logistyce", "ai-w-logistyce", "jak-mierzyc-roi-automatyzacji"],
};
