import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "przygotowanie-danych-pod-ai",
  metaTitle: "Przygotowanie danych pod AI | Automation Minds",
  metaDescription:
    "Przygotowujemy dokumenty i dane firmy tak, żeby AI mogło z nich korzystać: struktura, opisy, wersje, uprawnienia i aktualizacja. Zanim kupicie narzędzia.",
  primaryKeyword: "przygotowanie danych pod AI",
  secondaryKeywords: [
    "dane dla AI",
    "baza wiedzy dla AI",
    "gotowość danych",
    "AI na dokumentach firmy",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Dane i cyfryzacja",
    title: "Przygotowanie danych pod AI, zanim wydasz pieniądze na narzędzia",
    lead: "AI odpowiada tak dobrze, jak dobre są dane, na których pracuje. Porządkujemy dokumenty, bazy i opisy tak, żeby asystent, chatbot czy agent AI znajdował właściwe informacje i nie mylił starych wersji z aktualnymi.",
    outcomes: [
      "Dokumenty i dane uporządkowane pod kątem AI",
      "Jasne zasady aktualizacji i wersjonowania wiedzy",
      "Uprawnienia, które chronią dane wrażliwe",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1727434032773-af3cd98375ba?w=1920&q=80",
    imageAlt: "Świetliste ciągi danych na granatowym tle",
  },
  problems: {
    title: "Dlaczego projekty AI nie dowożą",
    lead: "Najczęstszą przyczyną słabych wyników AI nie jest model, tylko dane, które dostaje.",
    items: [
      {
        title: "Kilka wersji tego samego dokumentu",
        body: "AI cytuje cennik sprzed roku, bo leży w tym samym folderze co aktualny.",
      },
      {
        title: "Wiedza w głowach, nie w dokumentach",
        body: "Najważniejsze zasady nigdy nie zostały spisane. AI nie ma skąd ich wziąć.",
      },
      {
        title: "Dokumenty bez struktury",
        body: "Długie pliki bez nagłówków, skany bez tekstu, tabele w obrazkach. AI gubi się w takiej treści.",
      },
      {
        title: "Dane wrażliwe obok ogólnych",
        body: "Umowy z danymi osobowymi leżą obok procedur. Bez porządku trudno ograniczyć dostęp.",
      },
      {
        title: "Dane w systemach bez opisu",
        body: "Tabele z nazwami kolumn typu „pole_7”. Ani człowiek, ani AI nie wie, co oznaczają.",
      },
      {
        title: "Nikt nie odpowiada za aktualność",
        body: "Dokumenty się starzeją, a AI dalej na nich odpowiada.",
      },
    ],
  },
  scope: {
    title: "Co przygotowujemy",
    lead: "Zakres zależy od tego, do czego ma służyć AI: asystent dla zespołu, chatbot dla klientów, analiza danych czy agent.",
    items: [
      {
        title: "Przegląd źródeł",
        body: "Spisujemy dokumenty, bazy i systemy, z których ma korzystać AI, i oceniamy ich stan.",
      },
      {
        title: "Wybór aktualnych wersji",
        body: "Oddzielamy aktualne dokumenty od archiwalnych, żeby AI nie mieszało wersji.",
      },
      {
        title: "Struktura dokumentów",
        body: "Nagłówki, sekcje, krótkie akapity i opisy tabel. Tak przygotowaną treść AI rozumie lepiej.",
      },
      {
        title: "Spisanie brakującej wiedzy",
        body: "Z pomocą zespołu spisujemy zasady i odpowiedzi, które dziś istnieją tylko w głowach.",
      },
      {
        title: "Opisy danych",
        body: "Nadajemy tabelom i polom zrozumiałe nazwy i opisy, żeby AI mogło z nich korzystać.",
      },
      {
        title: "Klasyfikacja wrażliwości",
        body: "Oznaczamy dane osobowe i poufne, żeby ograniczyć do nich dostęp.",
      },
      {
        title: "Zasady aktualizacji",
        body: "Ustalamy właścicieli dokumentów i sposób, w jaki zmiany trafiają do AI.",
      },
      {
        title: "Zestaw pytań testowych",
        body: "Przygotowujemy pytania, na których można sprawdzić, czy AI korzysta z danych poprawnie.",
      },
    ],
  },
  example: {
    title: "Baza wiedzy przed i po przygotowaniu",
    lead: "Przykład firmy, która chciała wdrożyć asystenta AI dla działu obsługi klienta.",
    rows: [
      {
        label: "Cenniki",
        before: "Pięć plików z różnych lat w jednym folderze.",
        after: "Jeden aktualny cennik, archiwum oddzielone od źródeł AI.",
      },
      {
        label: "Procedury",
        before: "Część w dokumentach, część tylko w pamięci zespołu.",
        after: "Spisane procedury w jednolitym formacie z nagłówkami.",
      },
      {
        label: "Umowy",
        before: "Umowy z danymi klientów obok instrukcji.",
        after: "Umowy oznaczone jako poufne i niedostępne dla asystenta ogólnego.",
      },
      {
        label: "Aktualizacje",
        before: "Nikt nie wie, kto odpowiada za dokument.",
        after: "Każdy dokument ma właściciela i datę przeglądu.",
      },
    ],
    note: "Przygotowanie danych procentuje wielokrotnie: z tej samej bazy wiedzy może korzystać asystent, chatbot i nowi pracownicy.",
  },
  process: {
    title: "Jak pracujemy",
    lead: "Przygotowanie danych prowadzimy razem z zespołem, bo to on wie, które informacje są aktualne i ważne.",
    steps: [
      {
        title: "Cel i zakres",
        body: "Ustalamy, do czego ma służyć AI i z jakich źródeł będzie korzystać.",
      },
      {
        title: "Ocena stanu danych",
        body: "Sprawdzamy dokumenty i bazy, wskazujemy braki, duplikaty i ryzyka.",
      },
      {
        title: "Porządkowanie",
        body: "Porządkujemy i uzupełniamy dane, spisujemy brakującą wiedzę z pomocą zespołu.",
      },
      {
        title: "Test z AI",
        body: "Sprawdzamy, jak AI odpowiada na przygotowanych danych, i poprawiamy słabe miejsca.",
      },
      {
        title: "Zasady na przyszłość",
        body: "Przekazujemy zasady aktualizacji i przypisujemy właścicieli dokumentów.",
      },
    ],
  },
  tools: {
    title: "Narzędzia",
    lead: "Pracujemy na narzędziach, w których macie dokumenty, i przygotowujemy je pod wybrane rozwiązanie AI.",
    items: [
      { name: "SharePoint, Google Drive", note: "porządek w folderach i wersjach dokumentów" },
      { name: "Notion, Confluence", note: "bazy wiedzy w czytelnej strukturze" },
      { name: "Airtable", note: "dane uporządkowane w tabelach z opisami" },
      { name: "OCR i AI do dokumentów", note: "zamiana skanów na tekst" },
      { name: "OpenAI, Claude", note: "testy odpowiedzi na przygotowanych danych" },
      { name: "n8n, Make", note: "automatyczna aktualizacja źródeł wiedzy" },
    ],
  },
  faq: [
    {
      question: "Czy musimy przygotowywać dane przed wdrożeniem AI?",
      answer:
        "Jeśli AI ma korzystać z waszych dokumentów albo baz, tak. Bez tego odpowiedzi są niepewne, a zespół szybko traci zaufanie do narzędzia.",
    },
    {
      question: "Ile to trwa?",
      answer:
        "Zależy od ilości i stanu dokumentów. Zwykle zaczynamy od jednego obszaru, na przykład procedur obsługi klienta, i rozszerzamy zakres po pierwszych wynikach.",
    },
    {
      question: "Co z dokumentami, które są tylko na papierze?",
      answer:
        "Digitalizujemy je i zamieniamy na tekst, który AI może przeczytać. Przy okazji porządkujemy ich strukturę.",
    },
    {
      question: "Jak chronić dane osobowe?",
      answer:
        "Oznaczamy dokumenty z danymi osobowymi i ustawiamy uprawnienia tak, żeby AI korzystało z nich tylko tam, gdzie to dozwolone i potrzebne.",
    },
    {
      question: "Czy ta praca przyda się bez AI?",
      answer:
        "Tak. Uporządkowana wiedza ułatwia wdrażanie nowych osób, szukanie informacji i pracę całego zespołu, niezależnie od AI.",
    },
  ],
  relatedArticleSlugs: [
    "porzadek-w-danych-przed-ai-i-automatyzacja",
    "wdrozenie-ai-w-malej-i-sredniej-firmie",
    "cyfryzacja-danych-w-firmie",
  ],
  relatedServiceSlugs: [
    "asystent-ai-na-firmowej-wiedzy",
    "strategia-wdrozenia-ai",
  ],
  contact: {
    title: "Sprawdźmy, czy twoje dane są gotowe na AI",
    body: "Napisz, do czego chcecie wykorzystać AI i gdzie leżą dokumenty. Ocenimy, ile pracy wymaga przygotowanie danych.",
    highlights: [
      "Wstępna ocena gotowości danych",
      "Propozycja zakresu na jeden obszar firmy",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
