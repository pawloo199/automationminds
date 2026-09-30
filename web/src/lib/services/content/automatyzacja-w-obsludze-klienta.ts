import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "automatyzacja-w-obsludze-klienta",
  metaTitle: "Automatyzacja obsługi klienta | Automation Minds",
  metaDescription:
    "Automatyzujemy obsługę klienta: zgłoszenia z wielu kanałów w jednym miejscu, przydział do właściwej osoby, statusy i szybsze odpowiedzi z pomocą AI.",
  primaryKeyword: "automatyzacja obsługi klienta",
  secondaryKeywords: [
    "obsługa zgłoszeń",
    "helpdesk dla firmy",
    "obsługa reklamacji",
    "AI w obsłudze klienta",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Automatyzacja procesów",
    title: "Automatyzacja obsługi klienta: szybsza odpowiedź i żadne zgłoszenie nie ginie",
    lead: "Zgłoszenia z maila, telefonu, formularza i czatu trafiają w jedno miejsce, do właściwej osoby. Klient dostaje potwierdzenie i informację o statusie, a zespół ma pod ręką historię i gotowe szkice odpowiedzi.",
    outcomes: [
      "Wszystkie zgłoszenia w jednym miejscu z historią klienta",
      "Automatyczny przydział i przypomnienia o terminach odpowiedzi",
      "Szkice odpowiedzi z AI na podstawie waszych szablonów",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?w=1920&q=80",
    imageAlt: "Dwie osoby ze słuchawkami pracują w jasnym biurze",
  },
  problems: {
    title: "Gdzie obsługa klienta traci czas",
    lead: "Klienci nie oceniają firmy po tym, ile ma zgłoszeń, tylko po tym, jak szybko i konkretnie dostają odpowiedź.",
    items: [
      {
        title: "Zgłoszenia w wielu kanałach",
        body: "Mail, telefon, Messenger, formularz. Każdy kanał obsługiwany osobno, bez wspólnej historii.",
      },
      {
        title: "Wspólna skrzynka",
        body: "Kilka osób czyta tę samą skrzynkę. Jedne maile dostają dwie odpowiedzi, inne żadnej.",
      },
      {
        title: "Klient pyta o status",
        body: "Klienci dzwonią, żeby zapytać, co się dzieje z ich sprawą. Każdy telefon to kolejna przerwa w pracy.",
      },
      {
        title: "Te same odpowiedzi od nowa",
        body: "Na powtarzające się pytania zespół pisze odpowiedzi od zera albo szuka ich w starych mailach.",
      },
      {
        title: "Reklamacje bez terminu",
        body: "Nie wiadomo, ile czasu minęło od zgłoszenia reklamacji i kiedy upływa termin odpowiedzi.",
      },
      {
        title: "Brak wiedzy o problemach",
        body: "Nikt nie wie, z czym klienci zgłaszają się najczęściej, więc trudno usunąć przyczyny.",
      },
    ],
  },
  scope: {
    title: "Co automatyzujemy",
    lead: "Zaczynamy od zbierania zgłoszeń w jednym miejscu. Bez tego żadna kolejna automatyzacja nie ma sensu.",
    items: [
      {
        title: "Jedno miejsce na zgłoszenia",
        body: "Maile, formularze, czaty i notatki z telefonów trafiają do jednej kolejki z historią klienta.",
      },
      {
        title: "Automatyczne potwierdzenie",
        body: "Klient od razu dostaje informację, że zgłoszenie dotarło, z numerem sprawy.",
      },
      {
        title: "Kategorie i przydział",
        body: "AI albo reguły rozpoznają temat zgłoszenia i przypisują je do właściwej osoby lub działu.",
      },
      {
        title: "Terminy odpowiedzi",
        body: "Przypomnienia i eskalacje, gdy zgłoszenie zbyt długo czeka na odpowiedź.",
      },
      {
        title: "Szkice odpowiedzi",
        body: "AI przygotowuje szkic odpowiedzi na podstawie waszych szablonów i historii sprawy.",
      },
      {
        title: "Statusy dla klienta",
        body: "Klient dostaje powiadomienia o zmianie statusu albo sprawdza go samodzielnie.",
      },
      {
        title: "Reklamacje i zwroty",
        body: "Formularz reklamacji, lista kroków, terminy ustawowe i dokumenty w jednym procesie.",
      },
      {
        title: "Raport zgłoszeń",
        body: "Liczba zgłoszeń, czas odpowiedzi i najczęstsze tematy w jednym dashboardzie.",
      },
    ],
  },
  example: {
    title: "Reklamacja przed i po automatyzacji",
    lead: "Przykład sklepu internetowego i firmy handlowej, która obsługuje reklamacje mailowo i telefonicznie.",
    rows: [
      {
        label: "Zgłoszenie",
        before: "Mail z opisem problemu, bez numeru zamówienia i zdjęć.",
        after: "Formularz reklamacji z numerem zamówienia, zdjęciami i opisem.",
      },
      {
        label: "Potwierdzenie",
        before: "Klient nie wie, czy ktoś przeczytał wiadomość.",
        after: "Automatyczne potwierdzenie z numerem sprawy i terminem odpowiedzi.",
      },
      {
        label: "Przydział",
        before: "Ktoś przegląda skrzynkę i przekazuje sprawę dalej.",
        after: "Reklamacja trafia do osoby odpowiedzialnej za daną kategorię.",
      },
      {
        label: "Termin",
        before: "Terminy pilnowane w pamięci.",
        after: "Przypomnienie przed upływem terminu odpowiedzi.",
      },
      {
        label: "Status",
        before: "Klient dzwoni, żeby zapytać, co z reklamacją.",
        after: "Klient dostaje powiadomienia o kolejnych etapach.",
      },
    ],
    note: "Automatyzacja nie zastępuje rozmowy z klientem. Ma sprawić, że zespół ma na nią więcej czasu.",
  },
  process: {
    title: "Jak wdrażamy",
    lead: "Wdrażamy zmiany stopniowo, żeby zespół obsługi nie musiał uczyć się wszystkiego naraz.",
    steps: [
      {
        title: "Przegląd kanałów i zgłoszeń",
        body: "Sprawdzamy, skąd przychodzą zgłoszenia, jakie są najczęstsze tematy i jak dziś wygląda obsługa.",
      },
      {
        title: "Jedna kolejka",
        body: "Łączymy kanały w jedno miejsce i ustalamy kategorie oraz osoby odpowiedzialne.",
      },
      {
        title: "Automatyzacje",
        body: "Dodajemy potwierdzenia, przydział, terminy i powiadomienia o statusie.",
      },
      {
        title: "AI",
        body: "Gdy podstawy działają, dokładamy kategoryzację i szkice odpowiedzi z AI.",
      },
      {
        title: "Raporty i rozwój",
        body: "Analizujemy dane o zgłoszeniach i pomagamy usuwać przyczyny najczęstszych problemów.",
      },
    ],
  },
  tools: {
    title: "Narzędzia",
    lead: "Pracujemy na narzędziach helpdesk, CRM i prostych bazach, zależnie od skali obsługi.",
    items: [
      { name: "Freshdesk, Zendesk", note: "systemy do obsługi zgłoszeń" },
      { name: "HubSpot Service Hub", note: "obsługa klienta połączona z CRM" },
      { name: "Airtable", note: "rejestr zgłoszeń i reklamacji w mniejszej skali" },
      { name: "Gmail, Outlook, Messenger", note: "kanały, z których przychodzą zgłoszenia" },
      { name: "OpenAI, Claude", note: "kategoryzacja i szkice odpowiedzi" },
      { name: "Make, n8n", note: "powiadomienia, statusy i integracje" },
    ],
  },
  faq: [
    {
      question: "Czy musimy kupić system helpdesk?",
      answer:
        "Nie zawsze. Przy mniejszej liczbie zgłoszeń wystarczy dobrze ustawiona skrzynka z automatyzacjami albo baza w Airtable. System helpdesk polecamy, gdy zgłoszeń jest dużo.",
    },
    {
      question: "Czy klienci będą rozmawiać z robotem?",
      answer:
        "Nie, jeśli tego nie chcecie. Automatyzacja działa w tle: przypisuje, przypomina, przygotowuje szkice. Odpowiada człowiek. Chatbota dla klientów wdrażamy osobno, gdy ma sens.",
    },
    {
      question: "Jak AI pomaga w obsłudze klienta?",
      answer:
        "Rozpoznaje temat zgłoszenia, streszcza długie wątki i przygotowuje szkic odpowiedzi na podstawie waszych szablonów. Pracownik sprawdza i wysyła odpowiedź.",
    },
    {
      question: "Czy da się połączyć zgłoszenia z danymi o zamówieniach?",
      answer:
        "Tak. Łączymy system obsługi z CRM, sklepem albo ERP, żeby przy zgłoszeniu było widać zamówienia i historię klienta.",
    },
    {
      question: "Co z terminami reklamacji?",
      answer:
        "Ustawiamy terminy zgodne z przepisami i waszymi zasadami oraz przypomnienia przed ich upływem, żeby żadna reklamacja nie została bez odpowiedzi.",
    },
  ],
  relatedArticleSlugs: [
    "automatyzacja-obslugi-leadow-sprzedazowych",
    "ai-w-codziennej-pracy-zespolu",
    "5-procesow-do-automatyzacji-w-malej-firmie",
  ],
  relatedServiceSlugs: ["chatbot-ai-dla-firmy", "asystent-ai-na-firmowej-wiedzy"],
  contact: {
    title: "Jak dziś obsługujecie zgłoszenia klientów?",
    body: "Opisz, skąd przychodzą zgłoszenia i ile osób je obsługuje. Wskażemy, co najszybciej odciąży zespół.",
    highlights: [
      "Przegląd kanałów i najczęstszych zgłoszeń",
      "Propozycja rozwiązania dopasowanego do skali",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
