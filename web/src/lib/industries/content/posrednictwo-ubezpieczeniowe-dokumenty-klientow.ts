import type { IndustryPageContent } from "../types";

export const posrednictwoUbezpieczenioweDokumentyKlientow: IndustryPageContent = {
  industrySlug: "posrednictwo-ubezpieczeniowe",
  subSlug: "dokumenty-klientow",
  name: "Dokumenty klientów",
  excerpt: "Analiza potrzeb, pełnomocnictwa, oświadczenia i zgody z szablonów agencji, wypełniane danymi z CRM, z podpisem i archiwum przy kliencie.",
  metaTitle: "Dokumenty w agencji ubezpieczeniowej: szablony i archiwum",
  metaDescription:
    "Automatyzujemy dokumenty w agencji ubezpieczeniowej: analiza potrzeb, pełnomocnictwa i zgody z szablonów, podpis, archiwum przy kliencie i terminy.",
  primaryKeyword: "dokumenty w agencji ubezpieczeniowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Pośrednictwo ubezpieczeniowe: dokumenty",
    title: "Dokumenty klientów z szablonów, w jednym archiwum",
    lead: "Analiza potrzeb klienta, pełnomocnictwo brokerskie, zgody na kontakt, oświadczenia: dokumentów przy każdym kliencie jest sporo, a część z nich trzeba przechowywać i umieć szybko odnaleźć. Automatyzujemy dokumenty: powstają z szablonów agencji i danych z CRM, trafiają do podpisu i do archiwum przy kliencie, a braki są widoczne od razu.",
    bullets: [
      "Dokumenty z szablonów agencji i danych z CRM",
      "Podpis elektroniczny i archiwum przy kliencie",
      "Lista braków i terminów",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje ubezpieczeniowe, multiagencje i brokerzy" },
    { label: "Co automatyzujemy", value: "Szablony, wypełnianie, podpis, archiwum, kontrola braków" },
    { label: "Narzędzia", value: "Szablony Word, CRM, podpis elektroniczny, dysk, n8n" },
    { label: "Zasada", value: "Treść wzorów ustala agencja, dokument sprawdza agent" },
  ],
  symptoms: {
    title: "Kiedy dokumenty warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, dokumentacja zabiera czas i rodzi ryzyko braków.",
    items: [
      "Dokumenty powstają przez kopiowanie poprzednich i podmianę danych.",
      "Podpisane dokumenty są w skrzynkach, segregatorach i na dyskach agentów.",
      "Przy kontroli trudno szybko znaleźć dokumenty konkretnego klienta.",
      "Nie wiadomo, którym klientom brakuje aktualnej analizy potrzeb lub zgód.",
      "Pełnomocnictwa wygasają, a nikt o tym nie pamięta.",
      "Agent wpisuje te same dane klienta do kilku dokumentów.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja dokumentów",
    paragraphs: [
      "Wzory dokumentów agencji zamieniamy w szablony z polami do wypełnienia. Agent wybiera dokument, a system wypełnia go danymi klienta i polisy z CRM. Brakujące dane są wskazane przed wygenerowaniem dokumentu.",
      "Gotowy dokument trafia do podpisu, także elektronicznego, jeśli z niego korzystacie, a podpisany do archiwum przy kliencie. Każdy klient ma listę dokumentów z datami, więc braki i dokumenty wymagające odnowienia widać od razu.",
      "Treść wzorów i zgodność z przepisami dotyczącymi dystrybucji ubezpieczeń pozostają w gestii agencji. Automatyzacja pilnuje, żeby właściwy dokument powstał, został podpisany i dał się szybko odnaleźć.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja dokumentów",
    lead: "Zakres dopasowujemy do wzorów i rodzaju działalności.",
    items: [
      { title: "Szablony", body: "Analiza potrzeb, pełnomocnictwa, zgody i oświadczenia." },
      { title: "Dane z CRM", body: "Dane klienta i polisy bez przepisywania." },
      { title: "Kontrola braków", body: "Brakujące dane wskazane przed wygenerowaniem." },
      { title: "Podpis elektroniczny", body: "Dokument do podpisu bez drukowania." },
      { title: "Archiwum przy kliencie", body: "Podpisane dokumenty w jednym miejscu." },
      { title: "Lista dokumentów klienta", body: "Co jest, czego brakuje, co wymaga odnowienia." },
      { title: "Terminy", body: "Wygasające pełnomocnictwa i zgody z przypomnieniem." },
      { title: "Wyszukiwanie", body: "Dokumenty klienta odnalezione w kilka sekund." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od danych w CRM do podpisanego dokumentu.",
    items: [
      {
        title: "Nowy klient",
        trigger: "Pierwsza rozmowa z klientem",
        steps: ["Dokumenty startowe z szablonów", "Podpis elektroniczny", "Archiwum przy kliencie i lista dokumentów"],
        result: "Komplet dokumentów od pierwszego dnia współpracy.",
      },
      {
        title: "Wygasające pełnomocnictwo",
        trigger: "Pełnomocnictwo kończy się za miesiąc",
        steps: ["Przypomnienie dla agenta", "Nowy dokument z szablonu", "Podpis i archiwum"],
        result: "Klient nie zostaje bez obsługi przez formalność.",
      },
    ],
  },
  example: {
    title: "Dokumenty przed i po automatyzacji",
    lead: "Przykład agencji brokerskiej obsługującej klientów firmowych.",
    rows: [
      { label: "Przygotowanie", before: "Kopiowanie poprzednich.", after: "Szablon i dane z CRM." },
      { label: "Podpis", before: "Druk i skan.", after: "Podpis elektroniczny." },
      { label: "Archiwum", before: "Skrzynki i segregatory.", after: "Przy kliencie." },
      { label: "Braki", before: "Wychodzą przy kontroli.", after: "Widoczne na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od najczęściej używanych dokumentów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy wzory dokumentów i sprawdzamy, skąd pochodzą dane.", fromYou: "Aktualne wzory dokumentów." },
      { title: "Szablony", duration: "około tygodnia", body: "Zamieniamy wzory w szablony i ustalamy listy dokumentów dla klientów.", fromYou: "Akceptacja szablonów." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go na nowych klientach.", fromYou: "Agent sprawdzający dokumenty testowe." },
      { title: "Start i opieka", duration: "stale", body: "Aktualizujemy szablony przy zmianach wzorów lub przepisów.", fromYou: "Informacja o zmianach we wzorach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od szablonów najważniejszych dokumentów.",
    items: [
      { name: "Szablony", description: "Dla agencji, które chcą skończyć z kopiowaniem.", includes: ["Szablony dokumentów", "Dane z CRM", "Kontrola braków", "Archiwum przy kliencie"] },
      { name: "Szablony i podpis", description: "Dla agencji, które chcą pracować bez papieru.", includes: ["Wszystko z wariantu Szablony", "Podpis elektroniczny", "Lista dokumentów klienta", "Wyszukiwanie"] },
      { name: "Pełna kontrola", description: "Dla agencji z wieloma klientami firmowymi.", includes: ["Wszystko z wariantu Szablony i podpis", "Terminy i przypomnienia", "Raport braków", "Przegląd archiwum"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba i złożoność wzorów,",
      "CRM i źródła danych,",
      "podpis elektroniczny,",
      "zakres archiwum i terminów,",
      "przeniesienie istniejących dokumentów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędne dane w dokumencie.", mitigation: "Dane pochodzą z CRM, braki są wskazane, a dokument sprawdza agent." },
      { risk: "Nieaktualny wzór.", mitigation: "Wzory są w jednym miejscu, a ich zmiana obejmuje wszystkie nowe dokumenty." },
      { risk: "Dostęp do dokumentów klientów.", mitigation: "Uprawnienia według ról w agencji." },
      { risk: "Dokument z danymi o zdrowiu w niewłaściwym miejscu.", mitigation: "Takie dokumenty mają osobne, ograniczone uprawnienia." },
    ],
  },
  faq: [
    { question: "Kto przygotowuje treść dokumentów?", answer: "Agencja, najlepiej z prawnikiem lub zgodnie z wytycznymi towarzystw. My zamieniamy wzory w szablony i automatyzujemy ich wypełnianie." },
    { question: "Czy automatyzacja wystarczy do zgodności z przepisami?", answer: "Nie zastępuje oceny prawnej. Pomaga pilnować, żeby właściwe dokumenty powstały, zostały podpisane i były łatwe do odnalezienia." },
    { question: "Czy podpis elektroniczny jest konieczny?", answer: "Nie. Dokumenty mogą być podpisywane tradycyjnie i skanowane do archiwum." },
    { question: "Czy przeniesiecie istniejące dokumenty?", answer: "Tak, możemy uporządkować i przenieść archiwum. Zakres zależy od liczby i formy dokumentów." },
    { question: "Czy dokumenty z towarzystw też trafią do archiwum?", answer: "Tak, polisy i dokumenty od towarzystw mogą trafiać do archiwum klienta z poczty lub z dysku." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["microsoft-365", "google-workspace", "n8n"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-ubezpieczeniowej", "ai-dla-agenta-ubezpieczeniowego", "rodo-a-automatyzacja-procesow"],
};
