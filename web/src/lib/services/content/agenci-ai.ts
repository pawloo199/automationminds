import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "agenci-ai",
  metaTitle: "Agenci AI w procesach firmy | Automation Minds",
  metaDescription:
    "Projektujemy agentów AI, którzy wykonują wieloetapowe zadania: zbierają informacje, przygotowują dokumenty i aktualizują systemy. Z kontrolą człowieka.",
  primaryKeyword: "agenci AI dla firm",
  secondaryKeywords: [
    "agent AI w firmie",
    "automatyzacja z AI",
    "AI workflow",
    "autonomiczne procesy AI",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Sztuczna inteligencja",
    title: "Agenci AI, którzy wykonują zadania od początku do końca",
    lead: "Agent AI nie tylko odpowiada na pytania jak czat. Potrafi zebrać informacje z kilku źródeł, przygotować dokument, zaktualizować CRM i poprosić człowieka o akceptację tam, gdzie to potrzebne. Projektujemy takich agentów pod konkretne procesy.",
    outcomes: [
      "Wieloetapowe zadania wykonywane bez ręcznego przeklikiwania",
      "Punkty kontrolne, w których decyzję podejmuje człowiek",
      "Pełny zapis działań agenta do wglądu",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&q=80",
    imageAlt: "Abstrakcyjna sieć połączonych punktów na niebieskim tle",
  },
  problems: {
    title: "Zadania, przy których sprawdzają się agenci",
    lead: "Zwykła automatyzacja działa świetnie przy stałych regułach. Agent przydaje się tam, gdzie trzeba przeczytać, zrozumieć i zdecydować, co dalej.",
    items: [
      {
        title: "Research przed rozmową",
        body: "Przed spotkaniem ktoś zbiera informacje o kliencie z kilku stron i systemów. Zajmuje to dużo czasu.",
      },
      {
        title: "Zapytania wymagające zrozumienia",
        body: "Maile od klientów są różne. Trzeba ustalić, o co chodzi, znaleźć dane i przygotować odpowiedź.",
      },
      {
        title: "Przygotowanie dokumentów",
        body: "Oferty, raporty i podsumowania powstają z danych rozrzuconych po kilku narzędziach.",
      },
      {
        title: "Monitorowanie i reakcja",
        body: "Ktoś codziennie sprawdza skrzynki, zestawienia i statusy, żeby wyłapać sprawy wymagające działania.",
      },
      {
        title: "Kwalifikacja zgłoszeń",
        body: "Zgłoszenia trzeba przeczytać, ocenić i przypisać. Reguły są zbyt złożone dla prostej automatyzacji.",
      },
      {
        title: "Porządkowanie danych",
        body: "Rekordy w CRM są niepełne. Uzupełnienie ich wymaga szukania informacji w różnych miejscach.",
      },
    ],
  },
  scope: {
    title: "Co projektujemy",
    lead: "Każdego agenta projektujemy pod jedno zadanie, z jasnymi granicami: co może zrobić sam, a co wymaga zgody człowieka.",
    items: [
      {
        title: "Opis zadania i granic",
        body: "Spisujemy, co agent ma osiągnąć, z jakich źródeł korzysta i czego nie wolno mu zrobić.",
      },
      {
        title: "Dostęp do narzędzi",
        body: "Agent korzysta z wybranych systemów: CRM, poczty, kalendarza, bazy danych, wyszukiwarki.",
      },
      {
        title: "Punkty akceptacji",
        body: "Przed wysłaniem maila, zmianą w systemie czy płatnością agent prosi człowieka o zgodę.",
      },
      {
        title: "Pamięć i kontekst",
        body: "Agent korzysta z historii sprawy i firmowej wiedzy, żeby nie zaczynać za każdym razem od zera.",
      },
      {
        title: "Zapis działań",
        body: "Każdy krok agenta jest zapisany, więc wiadomo, co zrobił, na jakiej podstawie i kiedy.",
      },
      {
        title: "Obsługa błędów",
        body: "Gdy agent nie jest pewien albo coś pójdzie nie tak, przekazuje sprawę człowiekowi.",
      },
      {
        title: "Testy na prawdziwych sprawach",
        body: "Sprawdzamy agenta na historycznych przypadkach, zanim zacznie pracować na bieżących.",
      },
      {
        title: "Mierzenie efektu",
        body: "Porównujemy czas i jakość pracy przed wdrożeniem agenta i po nim.",
      },
    ],
  },
  example: {
    title: "Przygotowanie do rozmowy handlowej z agentem i bez",
    lead: "Przykład firmy B2B, w której handlowcy przed każdym spotkaniem zbierają informacje o kliencie.",
    rows: [
      {
        label: "Informacje o firmie",
        before: "Handlowiec przegląda stronę klienta, rejestry i LinkedIn.",
        after: "Agent zbiera najważniejsze informacje i przygotowuje krótką notatkę.",
      },
      {
        label: "Historia kontaktu",
        before: "Przeglądanie maili i notatek w CRM.",
        after: "Agent streszcza dotychczasowe ustalenia i otwarte sprawy.",
      },
      {
        label: "Propozycja rozmowy",
        before: "Handlowiec sam układa plan spotkania.",
        after: "Agent proponuje tematy i pytania na podstawie potrzeb klienta.",
      },
      {
        label: "Po spotkaniu",
        before: "Notatka pisana wieczorem albo wcale.",
        after: "Agent przygotowuje notatkę i zadania w CRM do akceptacji handlowca.",
      },
    ],
    note: "Agent przygotowuje materiał, a decyzje zostają przy ludziach. Tak projektujemy każde wdrożenie.",
  },
  process: {
    title: "Jak wdrażamy agentów AI",
    lead: "Agentów wdrażamy ostrożnie: od wąskiego zadania, z kontrolą człowieka, i dopiero potem dajemy im więcej swobody.",
    steps: [
      {
        title: "Wybór zadania",
        body: "Szukamy zadania, które jest powtarzalne, ale wymaga czytania i oceny. Tam agent daje najwięcej.",
      },
      {
        title: "Projekt agenta",
        body: "Ustalamy źródła, narzędzia, granice działania i punkty akceptacji.",
      },
      {
        title: "Budowa i testy",
        body: "Budujemy agenta i sprawdzamy go na historycznych przypadkach.",
      },
      {
        title: "Pilotaż z akceptacją",
        body: "Agent pracuje na bieżących sprawach, ale każdy jego krok zatwierdza człowiek.",
      },
      {
        title: "Większa samodzielność",
        body: "Gdy agent działa dobrze, zmniejszamy liczbę akceptacji tam, gdzie ryzyko jest niskie.",
      },
    ],
  },
  tools: {
    title: "Technologie",
    lead: "Budujemy agentów na sprawdzonych modelach i narzędziach do automatyzacji, z pełną kontrolą nad tym, co robią.",
    items: [
      { name: "OpenAI, Anthropic", note: "modele językowe z obsługą narzędzi" },
      { name: "n8n", note: "agenci AI w przepływach automatyzacji" },
      { name: "Make", note: "łączenie agentów z systemami firmy" },
      { name: "MCP", note: "bezpieczny dostęp agentów do narzędzi i danych" },
      { name: "Airtable, bazy SQL", note: "pamięć, rejestr spraw i zapis działań" },
      { name: "Slack, Teams, e-mail", note: "akceptacje i powiadomienia dla ludzi" },
    ],
  },
  faq: [
    {
      question: "Czym agent AI różni się od chatbota?",
      answer:
        "Chatbot odpowiada na pytania. Agent wykonuje zadania: sprawdza dane w systemach, przygotowuje dokumenty, zapisuje zmiany i prosi o zgodę tam, gdzie trzeba.",
    },
    {
      question: "Czy agent może popełnić błąd?",
      answer:
        "Tak, dlatego projektujemy punkty akceptacji i zapis wszystkich działań. Na początku człowiek zatwierdza każdy krok. Samodzielność rośnie dopiero wtedy, gdy agent działa pewnie.",
    },
    {
      question: "Czym agent różni się od zwykłej automatyzacji?",
      answer:
        "Automatyzacja wykonuje stałe reguły. Agent potrafi przeczytać nieuporządkowane informacje i zdecydować o kolejnym kroku. Często łączymy jedno z drugim.",
    },
    {
      question: "Czy agenci AI mają sens w małej firmie?",
      answer:
        "Tak, jeśli jest zadanie, które zabiera dużo czasu i wymaga czytania oraz oceny. W małej firmie jeden dobrze zaprojektowany agent potrafi odciążyć najbardziej zapracowaną osobę.",
    },
    {
      question: "Jak kontrolujecie dostęp agenta do danych?",
      answer:
        "Agent dostaje dostęp tylko do tych narzędzi i danych, których potrzebuje do zadania, z uprawnieniami ograniczonymi do minimum.",
    },
  ],
  relatedArticleSlugs: [
    "wdrozenie-ai-w-malej-i-sredniej-firmie",
    "gotowa-automatyzacja-czy-budowana-od-zera",
    "ai-w-codziennej-pracy-zespolu",
  ],
  relatedServiceSlugs: ["strategia-wdrozenia-ai", "integracje-systemow"],
  contact: {
    title: "Jakie zadanie mógłby przejąć agent AI?",
    body: "Opisz zadanie, które wymaga zbierania informacji z kilku miejsc albo czytania wielu wiadomości. Ocenimy, czy agent ma tu sens.",
    highlights: [
      "Ocena zadania pod kątem agenta AI albo prostszej automatyzacji",
      "Propozycja pilotażu z kontrolą człowieka",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
