import type { GuideFaqItem } from "./airtable.types";
import type { ToolContent } from "./tools/types";

export const AGENCY_PATH = "/agencja-ai";

/** Treść strony /agencja-ai: „agencja AI”, „agencja automatyzacji”. */
export const AGENCY_CONTENT = {
  metaTitle: "Agencja AI i automatyzacji procesów | Automation Minds",
  metaDescription:
    "Automation Minds to agencja AI i automatyzacji procesów. Wdrażamy agentów AI, automatyzacje i integracje w firmach z całej Polski, od strategii po opiekę.",
  primaryKeyword: "agencja AI",
  hero: {
    eyebrow: "Agencja AI i automatyzacji",
    title: "Agencja AI i automatyzacji procesów dla firm",
    lead: "Jesteśmy agencją, która wdraża sztuczną inteligencję i automatyzację tam, gdzie przynoszą firmie konkretny efekt: w obsłudze klientów, dokumentach, sprzedaży, finansach i wiedzy firmy. Zaczynamy od procesu, dobieramy narzędzia i zostajemy z wami po wdrożeniu.",
    bullets: [
      "Od strategii i audytu po wdrożenie i opiekę",
      "Agenci AI, automatyzacje i integracje systemów",
      "Dane klientów w UE, rozwiązania zostają w firmie",
    ],
  },
  intro: {
    title: "Czym zajmuje się nasza agencja AI",
    paragraphs: [
      "Automation Minds to agencja AI i automatyzacji procesów z Wrocławia, pracująca zdalnie z firmami z całej Polski. Pomagamy małym i średnim firmom przenieść powtarzalną pracę na systemy: od przepisywania danych i obsługi zapytań, przez dokumenty i raporty, po agentów AI, którzy wykonują zadania w systemach firmy.",
      "Nie sprzedajemy jednego narzędzia. Zaczynamy od procesu i danych, a dopiero potem dobieramy technologię: n8n, Make, Power Automate, Airtable, modele AI od różnych dostawców. Dzięki temu rozwiązanie pasuje do firmy, a nie odwrotnie.",
      "Łączymy trzy kompetencje, które w wielu projektach są rozdzielone: analizę procesów, projektowanie danych i wdrożenia AI. To pozwala nam przeprowadzić firmę przez cały projekt, od pierwszej rozmowy do działającego rozwiązania i jego utrzymania.",
    ],
  },
  differentiators: {
    title: "Co wyróżnia naszą agencję",
    lead: "Zasady, według których pracujemy przy każdym projekcie, niezależnie od jego wielkości.",
    items: [
      { title: "Najpierw proces, potem narzędzie", body: "Zaczynamy od tego, jak firma pracuje, a technologię dobieramy na końcu." },
      { title: "Porządek w danych przed AI", body: "AI i automatyzacje działają dobrze tylko na uporządkowanych danych, dlatego od nich zaczynamy." },
      { title: "Dane w UE", body: "Gdy to potrzebne, automatyzacje działają na serwerze w UE lub w infrastrukturze klienta." },
      { title: "Rozwiązania zostają w firmie", body: "Dokumentacja i przekazanie wiedzy, a nie zamknięte rozwiązanie, którego nikt poza nami nie rozumie." },
      { title: "Agenci w abonamencie", body: "Dla firm, które nie chcą zajmować się technologią, utrzymujemy agentów AI w stałej opłacie." },
      { title: "Człowiek decyduje", body: "AI przygotowuje i podpowiada, a ważne decyzje zatwierdzają ludzie w firmie." },
      { title: "Wycena przed startem", body: "Każdy etap wyceniamy z góry, zanim zaczniemy pracę." },
      { title: "Niezależność od dostawców", body: "Nie jesteśmy związani z jednym producentem, więc dobieramy to, co najlepsze dla klienta." },
    ],
  },
  comparison: {
    title: "Agencja AI, software house, freelancer czy firma doradcza",
    lead: "Każda z tych opcji ma sens w innej sytuacji. Tak wygląda to z perspektywy firmy, która chce wdrożyć AI i automatyzację.",
    columns: ["Agencja AI i automatyzacji", "Software house", "Freelancer", "Firma doradcza"],
    rows: [
      { label: "Analiza procesów i danych", values: ["Tak, na start każdego projektu", "Zwykle po stronie klienta", "Rzadko", "Tak"] },
      { label: "Wdrożenie rozwiązania", values: ["Tak", "Tak, często od zera w kodzie", "Tak, w wąskim zakresie", "Rzadko"] },
      { label: "Czas i koszt startu", values: ["Tygodnie, wycena etapami", "Zwykle dłuższe projekty", "Szybki start", "Zależnie od zakresu"] },
      { label: "Utrzymanie i opieka", values: ["Tak, także w abonamencie", "Zależnie od umowy", "Zależnie od dostępności", "Rzadko"] },
      { label: "Ciągłość przy zmianie osób", values: ["Zespół i dokumentacja", "Zespół", "Zależna od jednej osoby", "Zespół"] },
    ],
    note: "Porównanie jest uproszczone i nie dotyczy wszystkich firm w danej kategorii. Na konsultacji powiemy wprost, jeśli wasz projekt lepiej pasuje do innego wykonawcy.",
  } satisfies ToolContent["comparison"],
  process: {
    title: "Jak pracujemy",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione i co dalej.",
    phases: [
      {
        title: "Konsultacja i przegląd",
        duration: "od 30 minut do kilku dni",
        body: "Rozmawiamy o firmie i procesach, wskazujemy, gdzie AI i automatyzacja dadzą najszybszy efekt.",
        fromYou: "Rozmowa i informacja o narzędziach, których używacie.",
      },
      {
        title: "Projekt i wycena",
        duration: "około tygodnia",
        body: "Opisujemy rozwiązanie, dane, bezpieczeństwo i zakres pierwszego etapu z wyceną przed startem.",
        fromYou: "Akceptacja zakresu i osoba po waszej stronie.",
      },
      {
        title: "Wdrożenie",
        duration: "zwykle kilka tygodni",
        body: "Budujemy rozwiązanie na waszych narzędziach i testujemy je na prawdziwych danych.",
        fromYou: "Dostępy do systemów i ocena wyników testów.",
      },
      {
        title: "Opieka i rozwój",
        duration: "stale",
        body: "Pilnujemy działania, szkolimy zespół i dokładamy kolejne procesy.",
        fromYou: "Uwagi zespołu i nowe potrzeby.",
      },
    ],
  },
  models: {
    title: "Modele współpracy",
    lead: "Dobieramy model do tego, jak firma chce pracować z technologią.",
    items: [
      {
        name: "Projekt",
        description: "Dla firm, które chcą wdrożyć konkretne rozwiązanie i rozwijać je samodzielnie.",
        includes: ["Przegląd i projekt rozwiązania", "Wdrożenie i testy", "Dokumentacja i szkolenie", "Przekazanie zespołowi"],
      },
      {
        name: "Agenci AI w abonamencie",
        description: "Dla firm, które chcą korzystać z AI bez zajmowania się technologią.",
        includes: ["Opłata za wdrożenie i stały abonament", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Drobne zmiany w abonamencie"],
      },
      {
        name: "Stała opieka",
        description: "Dla firm z działającymi automatyzacjami, które potrzebują partnera do ich utrzymania.",
        includes: ["Monitoring i reakcja na błędy", "Aktualizacje i kopie zapasowe", "Pula godzin na rozwój", "Okresowe przeglądy"],
      },
    ],
  },
  toolSlugs: ["n8n", "make", "power-automate", "claude", "chatgpt", "microsoft-365", "google-workspace", "hubspot"],
  articleSlugs: ["jak-wybrac-agencje-ai", "agencja-ai-czy-software-house", "wdrozenie-ai-w-malej-i-sredniej-firmie"],
  faq: [
    { question: "Czym zajmuje się agencja AI?", answer: "Agencja AI pomaga firmom wdrożyć sztuczną inteligencję w codziennej pracy: od wyboru zastosowań i przygotowania danych, przez budowę asystentów, agentów i automatyzacji, po szkolenia i utrzymanie. W naszym przypadku łączymy AI z automatyzacją procesów i integracją systemów." },
    { question: "Czym agencja AI różni się od agencji automatyzacji?", answer: "Agencja automatyzacji skupia się na przepływach między systemami, np. integracjach CRM z fakturowaniem. Agencja AI dodaje modele językowe, które czytają dokumenty, odpowiadają na pytania i wykonują zadania. My łączymy jedno i drugie, bo w praktyce najlepsze efekty daje automatyzacja wzbogacona o AI." },
    { question: "Ile kosztuje współpraca z agencją AI?", answer: "To zależy od zakresu: liczby procesów, systemów, użycia AI i modelu współpracy. Pierwszy etap wyceniamy przed startem, po bezpłatnej konsultacji. Agentów AI oferujemy też w modelu opłaty wdrożeniowej i miesięcznego abonamentu." },
    { question: "Jak wybrać agencję AI?", answer: "Warto sprawdzić, czy agencja zaczyna od procesu, a nie od narzędzia, jak dba o dane i ich lokalizację, czy pokazuje przykłady wdrożeń, kto utrzymuje rozwiązanie po wdrożeniu i czy dostaniecie dokumentację. Dobrze też zapytać, kiedy agencja odradza AI." },
    { question: "Czy pracujecie z firmami spoza Wrocławia?", answer: "Tak. Pracujemy zdalnie z firmami z całej Polski. Konsultacje, warsztaty i wdrożenia prowadzimy online, a spotkania na miejscu umawiamy, gdy są potrzebne." },
    { question: "Czy jesteście partnerem OpenAI, n8n lub Make?", answer: "Nie. Jesteśmy niezależną agencją i dobieramy narzędzia i modele do potrzeb klienta, bez zobowiązań wobec konkretnego producenta." },
    { question: "Dla jakich firm pracujecie?", answer: "Głównie dla małych i średnich firm usługowych, handlowych i produkcyjnych. Mamy też duże doświadczenie w kancelariach prawnych, dla których przygotowaliśmy osobną ścieżkę rozwiązań." },
  ] satisfies GuideFaqItem[],
};

/** Pasek „agenci w akcji” pod hero. */
export const AGENCY_TICKER = [
  "Agent AI zakwalifikował zapytanie ofertowe",
  "Umowa porównana ze wzorcem",
  "Faktura odczytana i wysłana do akceptacji",
  "Odpowiedź z bazy wiedzy przygotowana",
  "Dane firmy uzupełnione po NIP",
  "Raport tygodniowy wysłany do zarządu",
  "Zamówienie z PDF wprowadzone do systemu",
  "Przypomnienie o terminie wysłane",
  "Zgłoszenie przypisane do właściwej osoby",
  "Notatka ze spotkania gotowa",
] as const;

/** Schemat przepływu (komponent AutomationFlow) dla strony agencji. */
export const AGENCY_FLOW = {
  title: "Jak łączymy AI z systemami firmy",
  lead: "Agent AI sam niewiele zrobi. Siłę daje mu połączenie z miejscami, z których przychodzą informacje, i z systemami, w których mają trafić wyniki. Wybierz przykład.",
  scenarios: [
    {
      id: "agent",
      label: "Agent AI",
      sources: ["Formularz", "E-mail", "Czat na stronie", "Telefon"],
      hubLines: ["Agent AI rozumie", "i działa"],
      targets: ["CRM", "Kalendarz", "Szkic odpowiedzi", "Raport"],
      caption: "Agent czyta zapytanie, sprawdza klienta w CRM, proponuje termin rozmowy i przygotowuje odpowiedź. Człowiek zatwierdza to, co ważne.",
      href: "/narzedzia/n8n/agenci-ai",
      linkLabel: "Agenci AI w abonamencie",
    },
    {
      id: "dokumenty",
      label: "Dokumenty",
      sources: ["Faktury", "Umowy", "Zamówienia", "Skany"],
      hubLines: ["Odczyt i kontrola", "dokumentów"],
      targets: ["System księgowy", "ERP", "Akceptacja", "Archiwum"],
      caption: "AI odczytuje dane z dokumentów w różnych formatach, automat sprawdza je z systemami i przekazuje dalej, a wyjątki trafiają do człowieka.",
      href: "/uslugi/ai-w-obsludze-dokumentow",
      linkLabel: "AI w obsłudze dokumentów",
    },
    {
      id: "wiedza",
      label: "Wiedza firmy",
      sources: ["Procedury", "Oferty", "Umowy", "Maile"],
      hubLines: ["Asystent AI", "na wiedzy firmy"],
      targets: ["Teams", "Strona", "Zespół", "Klienci"],
      caption: "Asystent AI odpowiada na pytania zespołu i klientów na podstawie dokumentów firmy, zawsze ze wskazaniem źródła.",
      href: "/uslugi/asystent-ai-na-firmowej-wiedzy",
      linkLabel: "Asystent AI na firmowej wiedzy",
    },
  ],
};

export type AgentDemoScenario = {
  id: string;
  label: string;
  input: { from: string; subject: string; body: string };
  steps: { title: string; detail: string; tool: string }[];
  output: { title: string; lines: string[] };
  approveLabel: string;
};

/** Demo „agent AI w akcji”: przykłady ilustracyjne. */
export const AGENT_DEMO: AgentDemoScenario[] = [
  {
    id: "zapytanie",
    label: "Zapytanie ofertowe",
    input: {
      from: "Anna, kierowniczka zakupów",
      subject: "Zapytanie o wdrożenie obiegu faktur",
      body: "Dzień dobry, mamy ok. 300 faktur miesięcznie i trzy działy akceptujące koszty. Czy możecie przygotować ofertę?",
    },
    steps: [
      { title: "Czyta zapytanie", detail: "Rozpoznaje temat, skalę i oczekiwania klienta.", tool: "Model AI" },
      { title: "Sprawdza firmę", detail: "Uzupełnia dane firmy i historię kontaktów.", tool: "CRM" },
      { title: "Szuka podobnych wdrożeń", detail: "Znajduje opis procesu i wcześniejsze oferty.", tool: "Baza wiedzy" },
      { title: "Proponuje termin", detail: "Wybiera wolne terminy rozmowy w kalendarzu handlowca.", tool: "Kalendarz" },
    ],
    output: {
      title: "Szkic odpowiedzi do klientki",
      lines: [
        "Dziękujemy za zapytanie. Obieg faktur dla trzech działów to proces, który dobrze znamy.",
        "Proponujemy krótką rozmowę: wtorek 10:00 lub środa 14:00.",
        "W załączeniu opis, jak wygląda taki obieg po wdrożeniu.",
      ],
    },
    approveLabel: "Zatwierdź i wyślij",
  },
  {
    id: "faktura",
    label: "Faktura kosztowa",
    input: {
      from: "Skrzynka faktury@",
      subject: "FV 2026/10/112 od dostawcy",
      body: "Faktura PDF w załączniku: usługi serwisowe, 4 pozycje, termin płatności 14 dni.",
    },
    steps: [
      { title: "Odczytuje fakturę", detail: "Dostawca, NIP, pozycje, kwoty i termin płatności.", tool: "Model AI" },
      { title: "Sprawdza duplikaty", detail: "Porównuje z fakturami w systemie i z zamówieniem.", tool: "System księgowy" },
      { title: "Sprawdza rachunek", detail: "Weryfikuje numer konta na białej liście VAT.", tool: "Biała lista" },
      { title: "Proponuje opis kosztu", detail: "Dział, MPK i kategoria na podstawie historii dostawcy.", tool: "Reguły firmy" },
    ],
    output: {
      title: "Karta akceptacji dla kierownika",
      lines: [
        "Dostawca: serwis urządzeń, kwota zgodna z zamówieniem.",
        "Proponowany opis: dział produkcji, MPK 210, serwis.",
        "Rachunek zweryfikowany, brak duplikatu.",
      ],
    },
    approveLabel: "Zaakceptuj koszt",
  },
  {
    id: "pytanie",
    label: "Pytanie pracownika",
    input: {
      from: "Tomek, nowy handlowiec",
      subject: "Pytanie w Teams",
      body: "Jakie warunki płatności możemy dać nowemu klientowi hurtowemu przy pierwszym zamówieniu?",
    },
    steps: [
      { title: "Rozumie pytanie", detail: "Szuka zasad dotyczących warunków płatności.", tool: "Model AI" },
      { title: "Przeszukuje dokumenty", detail: "Znajduje politykę sprzedaży i cennik hurtowy.", tool: "Baza wiedzy" },
      { title: "Sprawdza uprawnienia", detail: "Pokazuje tylko dokumenty dostępne dla działu sprzedaży.", tool: "Uprawnienia" },
    ],
    output: {
      title: "Odpowiedź ze źródłem",
      lines: [
        "Przy pierwszym zamówieniu: przedpłata lub płatność 7 dni po akceptacji kierownika.",
        "Źródło: Polityka sprzedaży hurtowej, rozdział 3.",
      ],
    },
    approveLabel: "Odpowiedź pomocna",
  },
];

export type ModelPickerQuestion = {
  id: string;
  question: string;
  options: { label: string; scores: { projekt: number; abonament: number; opieka: number } }[];
};

/** Quiz „który model współpracy pasuje do was”. */
export const MODEL_PICKER = {
  questions: [
    {
      id: "zespol",
      question: "Kto u was zajmie się rozwiązaniem po wdrożeniu?",
      options: [
        { label: "Mamy osobę techniczną lub dział IT", scores: { projekt: 2, abonament: 0, opieka: 1 } },
        { label: "Ktoś się nauczy, ale potrzebujemy wsparcia", scores: { projekt: 1, abonament: 0, opieka: 2 } },
        { label: "Nikt, nie chcemy zajmować się technologią", scores: { projekt: 0, abonament: 3, opieka: 1 } },
      ],
    },
    {
      id: "stan",
      question: "Jak wygląda dziś automatyzacja w firmie?",
      options: [
        { label: "Zaczynamy od zera", scores: { projekt: 1, abonament: 2, opieka: 0 } },
        { label: "Mamy pierwsze automatyzacje, które trzeba utrzymać", scores: { projekt: 0, abonament: 1, opieka: 3 } },
        { label: "Mamy konkretny proces do zbudowania", scores: { projekt: 3, abonament: 1, opieka: 0 } },
      ],
    },
    {
      id: "budzet",
      question: "Jaki sposób rozliczenia wolicie?",
      options: [
        { label: "Jednorazowo za projekt", scores: { projekt: 3, abonament: 0, opieka: 0 } },
        { label: "Stała miesięczna opłata", scores: { projekt: 0, abonament: 2, opieka: 2 } },
        { label: "Nie wiemy, doradźcie", scores: { projekt: 1, abonament: 1, opieka: 1 } },
      ],
    },
  ] satisfies ModelPickerQuestion[],
  results: {
    projekt: {
      name: "Projekt",
      body: "Zbudujemy rozwiązanie, przekażemy je z dokumentacją i przeszkolimy zespół. Dalej rozwijacie je samodzielnie, a my pomagamy, gdy trzeba.",
      href: "/uslugi/automatyzacja-oraz-ai-w-niestandardowych-procesach",
      linkLabel: "Zobacz, jak budujemy rozwiązania",
    },
    abonament: {
      name: "Agenci AI w abonamencie",
      body: "Opisujecie zadanie, a my budujemy agenta i utrzymujemy go po naszej stronie. Płacicie stałą miesięczną opłatę i nie musicie zajmować się technologią.",
      href: "/narzedzia/n8n/agenci-ai",
      linkLabel: "Zobacz agentów w abonamencie",
    },
    opieka: {
      name: "Stała opieka",
      body: "Przejmiemy opiekę nad automatyzacjami, które już działają, uporządkujemy je i będziemy rozwijać kolejne w ustalonej puli godzin.",
      href: "/narzedzia/n8n/opieka",
      linkLabel: "Zobacz, jak wygląda opieka",
    },
  },
} as const;
