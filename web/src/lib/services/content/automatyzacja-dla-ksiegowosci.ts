import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "automatyzacja-dla-ksiegowosci",
  metaTitle: "Automatyzacja księgowości i finansów | Automation Minds",
  metaDescription:
    "Automatyzujemy faktury, KSeF, akceptację kosztów, płatności i przypomnienia o należnościach. Mniej przepisywania w dziale finansów i biurze rachunkowym.",
  primaryKeyword: "automatyzacja księgowości",
  secondaryKeywords: [
    "automatyzacja faktur",
    "KSeF automatyzacja",
    "obieg faktur kosztowych",
    "automatyzacja finansów",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Automatyzacja procesów",
    title: "Automatyzacja księgowości i finansów: faktury, płatności i rozrachunki bez przepisywania",
    lead: "Faktury z KSeF i maili trafiają do akceptacji i księgowania same. Przypomnienia o płatnościach wysyłają się automatycznie, a stan należności widać na bieżąco. Wdrażamy to w działach finansowych firm i w biurach rachunkowych.",
    outcomes: [
      "Faktury kosztowe w obiegu bez papieru i przepisywania",
      "Automatyczne przypomnienia o płatnościach dla klientów",
      "Aktualny obraz należności i zobowiązań",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?w=1920&q=80",
    imageAlt: "Biurko z wykresami finansowymi i smartfonem",
  },
  problems: {
    title: "Gdzie finanse tracą czas",
    lead: "W księgowości najwięcej czasu zabiera nie samo księgowanie, tylko zbieranie, sprawdzanie i przepisywanie dokumentów.",
    items: [
      {
        title: "Faktury z wielu źródeł",
        body: "KSeF, maile, papier, portale dostawców. Ktoś musi to wszystko zebrać w jednym miejscu.",
      },
      {
        title: "Akceptacja kosztów trwa",
        body: "Faktura czeka na podpis kierownika, który jest poza biurem. Termin płatności się zbliża.",
      },
      {
        title: "Ręczne przypomnienia o płatnościach",
        body: "Lista zaległości w arkuszu i ręczne maile do klientów. Albo brak przypomnień, bo nie ma kiedy.",
      },
      {
        title: "Uzgadnianie płatności",
        body: "Dopasowanie przelewów z wyciągu do faktur zajmuje godziny, szczególnie przy płatnościach zbiorczych.",
      },
      {
        title: "Dokumenty od klientów biura",
        body: "Biuro rachunkowe co miesiąc goni klientów o dokumenty, mailem i telefonicznie.",
      },
      {
        title: "Raporty dla zarządu",
        body: "Zestawienia kosztów, przepływów i należności składane ręcznie z kilku źródeł.",
      },
    ],
  },
  scope: {
    title: "Co automatyzujemy w finansach",
    lead: "Automatyzacje łączymy z programem księgowym, którego używacie. Nie trzeba zmieniać systemu.",
    items: [
      {
        title: "Pobieranie faktur z KSeF",
        body: "Faktury zakupowe pobierane automatycznie i przypisywane do właściwych osób i kategorii.",
      },
      {
        title: "Faktury spoza KSeF",
        body: "Rachunki z maili i skanów odczytywane przez AI i dodawane do tego samego obiegu.",
      },
      {
        title: "Obieg akceptacji",
        body: "Faktura trafia do osoby odpowiedzialnej, która akceptuje ją jednym kliknięciem, także na telefonie.",
      },
      {
        title: "Wystawianie faktur",
        body: "Faktury sprzedażowe tworzone z danych w CRM, zamówieniach albo zleceniach, bez przepisywania.",
      },
      {
        title: "Przypomnienia o należnościach",
        body: "Uprzejme przypomnienia przed terminem i po nim, wysyłane automatycznie według ustalonego harmonogramu.",
      },
      {
        title: "Dopasowanie płatności",
        body: "Przelewy z wyciągu dopasowywane do faktur. Człowiek sprawdza tylko niejasne przypadki.",
      },
      {
        title: "Zbieranie dokumentów od klientów",
        body: "Dla biur rachunkowych: przypomnienia, formularze do przesyłania dokumentów i status kompletności.",
      },
      {
        title: "Raporty finansowe",
        body: "Należności, zobowiązania, koszty według kategorii i przepływy w dashboardzie aktualizowanym na bieżąco.",
      },
    ],
  },
  example: {
    title: "Należności przed i po automatyzacji",
    lead: "Przykład firmy usługowej, w której przypominanie klientom o płatnościach zależało od wolnego czasu księgowej.",
    rows: [
      {
        label: "Lista zaległości",
        before: "Arkusz aktualizowany ręcznie raz w tygodniu.",
        after: "Lista zaległości aktualna codziennie na podstawie wyciągu i faktur.",
      },
      {
        label: "Przypomnienie przed terminem",
        before: "Nie wysyłane, bo nie ma kiedy.",
        after: "Automatyczny mail kilka dni przed terminem płatności.",
      },
      {
        label: "Po terminie",
        before: "Ręczne maile i telefony, gdy ktoś zauważy zaległość.",
        after: "Kolejne przypomnienia według harmonogramu, a przy dłuższej zaległości zadanie dla opiekuna klienta.",
      },
      {
        label: "Dopasowanie wpłat",
        before: "Ręczne szukanie faktur dla każdego przelewu.",
        after: "Automatyczne dopasowanie po numerze faktury i kwocie.",
      },
      {
        label: "Wiedza zarządu",
        before: "Stan należności znany raz w miesiącu.",
        after: "Dashboard z należnościami i klientami, którzy płacą z opóźnieniem.",
      },
    ],
    note: "Treść i ton przypomnień ustalamy razem z wami, żeby nie psuły relacji z klientami.",
  },
  process: {
    title: "Jak wdrażamy",
    lead: "Finanse wymagają ostrożności. Każdą automatyzację testujemy równolegle z dotychczasową pracą, zanim ją przejmie.",
    steps: [
      {
        title: "Przegląd procesów finansowych",
        body: "Poznajemy obieg faktur, płatności i raportów oraz program księgowy, którego używacie.",
      },
      {
        title: "Wybór pierwszego obszaru",
        body: "Zaczynamy od procesu, który zabiera najwięcej czasu, na przykład obiegu faktur kosztowych.",
      },
      {
        title: "Budowa i testy",
        body: "Budujemy automatyzację i testujemy ją na prawdziwych dokumentach równolegle z ręczną pracą.",
      },
      {
        title: "Uruchomienie",
        body: "Automatyzacja przejmuje codzienną pracę. Zespół ma instrukcję i wie, jak obsłużyć wyjątki.",
      },
      {
        title: "Kolejne obszary",
        body: "Dokładamy należności, raporty albo integrację z bankiem, gdy pierwszy obszar działa.",
      },
    ],
  },
  tools: {
    title: "Systemy, z którymi pracujemy",
    lead: "Łączymy automatyzacje z popularnymi programami księgowymi i fakturowymi w Polsce.",
    items: [
      { name: "KSeF", note: "pobieranie i wysyłka faktur ustrukturyzowanych" },
      { name: "Fakturownia, inFakt, wFirma", note: "fakturowanie w małych firmach" },
      { name: "Comarch Optima, enova365, Symfonia", note: "systemy księgowe i ERP" },
      { name: "Bankowość elektroniczna", note: "wyciągi i dopasowanie płatności" },
      { name: "Make, n8n, Power Automate", note: "obieg dokumentów i przypomnienia" },
      { name: "Power BI, Looker Studio", note: "raporty finansowe" },
    ],
  },
  faq: [
    {
      question: "Czy automatyzacja działa z KSeF?",
      answer:
        "Tak. Automatyzujemy pobieranie faktur z KSeF, ich przypisanie, akceptację i przekazanie do księgowości, a także wysyłkę faktur sprzedażowych.",
    },
    {
      question: "Czy musimy zmieniać program księgowy?",
      answer:
        "Nie. Łączymy automatyzacje z programem, którego używacie. Jeśli nie ma on integracji, korzystamy z importu plików albo innych dostępnych możliwości.",
    },
    {
      question: "Czy automatyzujecie procesy w biurach rachunkowych?",
      answer:
        "Tak. Najczęściej zbieranie dokumentów od klientów, przypomnienia o terminach, statusy kompletności i komunikację z klientami biura.",
    },
    {
      question: "Czy dane finansowe są bezpieczne?",
      answer:
        "Projektujemy przepływy z ograniczonym dostępem, zapisem działań i zgodnie z RODO. Dostęp do danych mają tylko osoby i systemy, które go potrzebują.",
    },
    {
      question: "Co z fakturami, których automat nie rozpozna?",
      answer:
        "Trafiają do kolejki wyjątków z zaznaczonym problemem. Człowiek je sprawdza i uzupełnia, a reszta faktur przechodzi automatycznie.",
    },
  ],
  relatedArticleSlugs: [
    "integracja-crm-z-fakturowaniem",
    "5-procesow-do-automatyzacji-w-malej-firmie",
    "ile-kosztuje-automatyzacja-procesow",
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
  contact: {
    title: "Porozmawiajmy o twoich finansach",
    body: "Opisz, jak dziś wygląda obieg faktur i płatności oraz jakiego programu używacie. Wskażemy, co zautomatyzować najpierw.",
    highlights: [
      "Rozmowa o waszym programie księgowym i KSeF",
      "Propozycja pierwszego obszaru do automatyzacji",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
