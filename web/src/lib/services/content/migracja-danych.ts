import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "migracja-danych",
  metaTitle: "Migracja danych do nowego systemu | Automation Minds",
  metaDescription:
    "Przenosimy dane z arkuszy, starych programów i baz do nowych systemów: CRM, ERP, Airtable. Bez utraty historii, z porządkiem w danych i testami.",
  primaryKeyword: "migracja danych",
  secondaryKeywords: [
    "przeniesienie danych do CRM",
    "migracja z Excela",
    "zmiana systemu w firmie",
    "import danych",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Dane i cyfryzacja",
    title: "Migracja danych do nowego systemu bez utraty historii i bez chaosu",
    lead: "Zmiana CRM, programu do faktur czy przejście z arkuszy do bazy danych to moment, w którym łatwo zgubić dane. Planujemy i przeprowadzamy migrację tak, żeby zespół następnego dnia pracował na kompletnych, uporządkowanych danych.",
    outcomes: [
      "Dane przeniesione razem z historią i powiązaniami",
      "Porządek w danych przy okazji migracji",
      "Testy i weryfikacja przed przełączeniem zespołu",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=1920&q=80",
    imageAlt: "Uporządkowane żółte i zielone kable światłowodowe",
  },
  problems: {
    title: "Co może pójść źle przy zmianie systemu",
    lead: "Nowy system bywa lepszy od starego, ale tylko wtedy, gdy trafią do niego dobre dane.",
    items: [
      {
        title: "Utrata historii",
        body: "Kontakty zostają przeniesione, ale bez notatek, maili i historii zamówień.",
      },
      {
        title: "Zerwane powiązania",
        body: "Zlecenia nie wiedzą, do jakiego klienta należą, a faktury do jakiego zlecenia.",
      },
      {
        title: "Przeniesiony bałagan",
        body: "Duplikaty i błędy ze starego systemu trafiają do nowego i od razu go zaśmiecają.",
      },
      {
        title: "Przestój w pracy",
        body: "Przez kilka dni nikt nie wie, w którym systemie pracować, a sprawy czekają.",
      },
      {
        title: "Brak zaufania do nowych danych",
        body: "Zespół znajduje kilka błędów i wraca do starych arkuszy „na wszelki wypadek”.",
      },
      {
        title: "Dane w nietypowych formatach",
        body: "Stary program eksportuje dane w formacie, którego nowy system nie przyjmie bez przekształceń.",
      },
    ],
  },
  scope: {
    title: "Co obejmuje migracja",
    lead: "Migrację traktujemy jak projekt, a nie jednorazowy import pliku.",
    items: [
      {
        title: "Inwentaryzacja danych",
        body: "Spisujemy, jakie dane są w starych systemach, które przenosimy, a które archiwizujemy.",
      },
      {
        title: "Mapowanie pól",
        body: "Ustalamy, które pole ze starego systemu trafia do którego pola w nowym, i co z polami bez odpowiednika.",
      },
      {
        title: "Porządki przed migracją",
        body: "Usuwamy duplikaty, ujednolicamy formaty i uzupełniamy braki, zanim dane trafią do nowego systemu.",
      },
      {
        title: "Przekształcenia",
        body: "Zmieniamy formaty dat, statusy i struktury tak, żeby pasowały do nowego systemu.",
      },
      {
        title: "Zachowanie powiązań",
        body: "Klienci, zlecenia, faktury i notatki zachowują powiązania także po migracji.",
      },
      {
        title: "Migracja próbna",
        body: "Przenosimy dane na środowisko testowe i sprawdzamy wynik z zespołem.",
      },
      {
        title: "Plan przełączenia",
        body: "Ustalamy dzień przełączenia, zamrożenie zmian w starym systemie i plan awaryjny.",
      },
      {
        title: "Weryfikacja po migracji",
        body: "Porównujemy liczby rekordów i sumy kontrolne, a zespół sprawdza znane przypadki.",
      },
    ],
  },
  example: {
    title: "Zmiana CRM przed i po zaplanowanej migracji",
    lead: "Przykład firmy, która przechodziła z kilku arkuszy i starego CRM do jednego nowego systemu.",
    rows: [
      {
        label: "Źródła",
        before: "Stary CRM i arkusze handlowców z różnymi danymi.",
        after: "Jedna baza klientów w nowym CRM, bez duplikatów.",
      },
      {
        label: "Historia",
        before: "Notatki i maile zostają w starym systemie.",
        after: "Historia kontaktów przeniesiona i przypisana do klientów.",
      },
      {
        label: "Przełączenie",
        before: "Kilka dni pracy w dwóch systemach naraz.",
        after: "Przełączenie w jeden dzień, według planu.",
      },
      {
        label: "Zaufanie do danych",
        before: "Zespół wraca do arkuszy, bo nie wierzy nowym danym.",
        after: "Zespół sprawdził dane przed startem i od razu pracuje w nowym systemie.",
      },
    ],
    note: "Stary system warto zostawić w trybie tylko do odczytu na jakiś czas. Daje to spokój, gdyby trzeba było coś sprawdzić.",
  },
  process: {
    title: "Jak przeprowadzamy migrację",
    lead: "Najważniejsze decyzje zapadają przed przeniesieniem pierwszego rekordu.",
    steps: [
      {
        title: "Analiza",
        body: "Poznajemy stary i nowy system, dane i ich zależności. Ustalamy, co przenosimy.",
      },
      {
        title: "Mapowanie i porządki",
        body: "Przygotowujemy mapę pól i porządkujemy dane w kopii.",
      },
      {
        title: "Migracja próbna",
        body: "Przenosimy dane na próbę i sprawdzamy wynik razem z zespołem.",
      },
      {
        title: "Przełączenie",
        body: "W ustalonym dniu przenosimy dane ostatecznie i uruchamiamy nowy system.",
      },
      {
        title: "Wsparcie po starcie",
        body: "Przez pierwsze tygodnie pomagamy zespołowi i poprawiamy to, co wyjdzie w praktyce.",
      },
    ],
  },
  tools: {
    title: "Systemy, z którymi pracujemy",
    lead: "Przenosimy dane między popularnymi systemami i z programów, które nie mają gotowych narzędzi do migracji.",
    items: [
      { name: "Excel, Google Sheets, Access", note: "najczęstsze źródła danych" },
      { name: "Pipedrive, HubSpot, Livespace", note: "systemy CRM" },
      { name: "Airtable", note: "bazy danych dla zespołów" },
      { name: "Comarch, enova, Subiekt", note: "programy handlowe i księgowe" },
      { name: "Python, Power Query", note: "przekształcanie i czyszczenie danych" },
      { name: "Make, n8n", note: "migracja przez API i synchronizacja" },
    ],
  },
  faq: [
    {
      question: "Czy stracimy historię kontaktów z klientami?",
      answer:
        "Nie, jeśli migracja jest dobrze zaplanowana. Przenosimy notatki, historię i powiązania tam, gdzie nowy system na to pozwala. Resztę archiwizujemy w dostępnej formie.",
    },
    {
      question: "Ile trwa migracja danych?",
      answer:
        "Zależy od ilości danych i liczby źródeł. Samo przełączenie planujemy tak, żeby trwało jak najkrócej, najczęściej jeden dzień albo weekend.",
    },
    {
      question: "Co jeśli stary system nie ma eksportu?",
      answer:
        "Szukamy innej drogi: bezpośredni dostęp do bazy, raporty systemu albo API. Rzadko zdarza się, że danych nie da się wyciągnąć.",
    },
    {
      question: "Czy migracja to dobry moment na porządki?",
      answer:
        "Najlepszy. Przenoszenie bałaganu do nowego systemu to strata szansy. Porządkujemy dane przed migracją, a nie po niej.",
    },
    {
      question: "Czy pomożecie wybrać nowy system?",
      answer:
        "Tak. Jeśli wybór nie jest jeszcze przesądzony, pomagamy porównać narzędzia pod kątem waszych procesów i danych.",
    },
  ],
  relatedArticleSlugs: [
    "airtable-czy-excel",
    "jak-wybrac-narzedzie-do-automatyzacji",
    "porzadek-w-danych-przed-ai-i-automatyzacja",
  ],
  relatedServiceSlugs: ["integracje-systemow"],
  contact: {
    title: "Planujesz zmianę systemu?",
    body: "Napisz, z jakiego systemu i do jakiego przenosicie dane. Podpowiemy, jak zaplanować migrację, żeby niczego nie zgubić.",
    highlights: [
      "Ocena źródeł danych i ryzyk migracji",
      "Propozycja planu i terminu przełączenia",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
