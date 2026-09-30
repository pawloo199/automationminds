import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "automatyzacja-raportow",
  metaTitle: "Automatyczne raporty i dashboardy | Automation Minds",
  metaDescription:
    "Automatyzujemy raporty i budujemy dashboardy dla zarządu i działów. Dane z CRM, księgowości i sprzedaży aktualizują się same, bez ręcznego składania.",
  primaryKeyword: "automatyzacja raportów",
  secondaryKeywords: [
    "dashboard dla zarządu",
    "raportowanie w firmie",
    "Power BI dla firm",
    "Looker Studio",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Dane i cyfryzacja",
    title: "Raporty i dashboardy, które aktualizują się same",
    lead: "Zamiast co tydzień zbierać dane z kilku systemów i składać je w arkuszu, macie dashboard, który pokazuje aktualne liczby w każdej chwili. Ustalamy, co warto mierzyć, i łączymy źródła danych w jeden obraz firmy.",
    outcomes: [
      "Aktualne liczby bez ręcznego składania raportów",
      "Jeden obraz sprzedaży, finansów i realizacji",
      "Alerty, gdy coś wymaga reakcji",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
    imageAlt: "Wykresy analityczne na ekranie laptopa",
  },
  problems: {
    title: "Jak dziś powstają raporty",
    lead: "W wielu firmach raport to kilka godzin pracy jednej osoby, powtarzanej co tydzień albo co miesiąc.",
    items: [
      {
        title: "Ręczne zbieranie danych",
        body: "Eksport z CRM, eksport z księgowości, kopiowanie do arkusza, formatowanie. Co tydzień to samo.",
      },
      {
        title: "Liczby się nie zgadzają",
        body: "Sprzedaż i finanse pokazują różne wyniki, bo liczą inaczej albo biorą dane z innych źródeł.",
      },
      {
        title: "Raport jest nieaktualny",
        body: "Zanim raport trafi do zarządu, dane mają kilka dni. Decyzje zapadają na podstawie przeszłości.",
      },
      {
        title: "Za dużo wskaźników",
        body: "Raport ma kilkadziesiąt zakładek, a nikt nie wie, na które liczby patrzeć.",
      },
      {
        title: "Raport zależy od jednej osoby",
        body: "Gdy osoba, która składa raport, jest na urlopie, zarząd nie dostaje danych.",
      },
      {
        title: "Problemy widać za późno",
        body: "Spadek sprzedaży albo rosnące zaległości klientów wychodzą dopiero w raporcie miesięcznym.",
      },
    ],
  },
  scope: {
    title: "Co robimy",
    lead: "Zaczynamy od pytań, na które raport ma odpowiadać. Dopiero potem wybieramy dane i narzędzia.",
    items: [
      {
        title: "Wybór wskaźników",
        body: "Ustalamy z zarządem i działami kilka wskaźników, które pomagają podejmować decyzje.",
      },
      {
        title: "Wspólne definicje",
        body: "Spisujemy, jak liczymy sprzedaż, marżę czy konwersję, żeby wszyscy mówili o tych samych liczbach.",
      },
      {
        title: "Połączenie źródeł",
        body: "Łączymy dane z CRM, programu księgowego, sklepu, arkuszy i innych systemów.",
      },
      {
        title: "Automatyczne odświeżanie",
        body: "Dane aktualizują się same, codziennie albo co godzinę, bez udziału człowieka.",
      },
      {
        title: "Dashboard dla zarządu",
        body: "Jedna strona z najważniejszymi liczbami firmy, czytelna także na telefonie.",
      },
      {
        title: "Raporty dla działów",
        body: "Widoki dla sprzedaży, finansów, produkcji czy obsługi klienta, z danymi, których potrzebują.",
      },
      {
        title: "Alerty",
        body: "Powiadomienia, gdy wskaźnik przekroczy próg, na przykład gdy rosną zaległe płatności.",
      },
      {
        title: "Raporty wysyłane automatycznie",
        body: "Zestawienia trafiające mailem albo na Teams w stałe dni, bez przygotowywania ręcznie.",
      },
    ],
  },
  example: {
    title: "Tygodniowy raport sprzedaży przed i po automatyzacji",
    lead: "Przykład firmy handlowej, w której raport sprzedaży przygotowywała co tydzień jedna osoba.",
    rows: [
      {
        label: "Zbieranie danych",
        before: "Eksporty z CRM i programu do faktur w każdy piątek.",
        after: "Dane pobierane automatycznie każdej nocy.",
      },
      {
        label: "Składanie raportu",
        before: "Kilka godzin kopiowania i formatowania w arkuszu.",
        after: "Dashboard gotowy w każdej chwili.",
      },
      {
        label: "Zgodność liczb",
        before: "Dyskusje, czyje liczby są prawidłowe.",
        after: "Jedna definicja sprzedaży i jedno źródło danych.",
      },
      {
        label: "Reakcja na problemy",
        before: "Spadek widoczny dopiero w raporcie na koniec miesiąca.",
        after: "Alert, gdy sprzedaż w tygodniu odbiega od planu.",
      },
      {
        label: "Dostęp",
        before: "Raport w mailu, różne wersje w obiegu.",
        after: "Jeden link do aktualnego dashboardu, z uprawnieniami.",
      },
    ],
    note: "Dobry dashboard ma kilka liczb, nie kilkadziesiąt. Najwięcej pracy wymaga ustalenie, które z nich są ważne.",
  },
  process: {
    title: "Jak budujemy raporty",
    lead: "Pierwszą wersję dashboardu pokazujemy szybko, a potem dopracowujemy ją razem z osobami, które z niej korzystają.",
    steps: [
      {
        title: "Pytania biznesowe",
        body: "Ustalamy, jakie decyzje ma wspierać raport i jakie pytania zadaje zarząd.",
      },
      {
        title: "Przegląd danych",
        body: "Sprawdzamy, gdzie są potrzebne dane, jak są zapisane i czy się zgadzają.",
      },
      {
        title: "Pierwsza wersja",
        body: "Budujemy dashboard na prawdziwych danych i pokazujemy go zespołowi.",
      },
      {
        title: "Dopracowanie",
        body: "Poprawiamy wskaźniki, widoki i definicje według uwag użytkowników.",
      },
      {
        title: "Automatyzacja i opieka",
        body: "Ustawiamy odświeżanie, alerty i wysyłkę raportów. Pilnujemy, żeby dane się zgadzały.",
      },
    ],
  },
  tools: {
    title: "Narzędzia",
    lead: "Dobieramy narzędzie do skali firmy i tego, z czego już korzystacie.",
    items: [
      { name: "Power BI", note: "raporty w środowisku Microsoft" },
      { name: "Looker Studio", note: "darmowe dashboardy w narzędziach Google" },
      { name: "Airtable Interfaces", note: "raporty operacyjne na danych z Airtable" },
      { name: "Google Sheets, Excel", note: "proste zestawienia z automatycznym odświeżaniem" },
      { name: "Make, n8n", note: "pobieranie danych i wysyłka raportów" },
      { name: "BigQuery, PostgreSQL", note: "hurtownia danych przy większych zbiorach" },
    ],
  },
  faq: [
    {
      question: "Power BI czy Looker Studio?",
      answer:
        "Power BI lepiej sprawdza się w firmach pracujących w Microsoft 365 i przy bardziej złożonych analizach. Looker Studio jest darmowe i wygodne dla firm pracujących w Google Workspace. Wybieramy pod wasze narzędzia i potrzeby.",
    },
    {
      question: "Czy można połączyć dane z programu księgowego?",
      answer:
        "Najczęściej tak: przez API, bezpośredni dostęp do bazy albo automatyczny eksport. Sprawdzamy możliwości waszego programu na początku projektu.",
    },
    {
      question: "Jak często odświeżają się dane?",
      answer:
        "Zwykle raz dziennie albo co kilka godzin. Tam, gdzie to potrzebne, dane mogą odświeżać się częściej.",
    },
    {
      question: "Kto będzie miał dostęp do dashboardu?",
      answer:
        "Ustawiamy uprawnienia tak, żeby każda osoba widziała dane, których potrzebuje. Zarząd widzi całość, działy swoje obszary.",
    },
    {
      question: "Co jeśli nasze dane są w złym stanie?",
      answer:
        "Wtedy zaczynamy od porządków w danych. Dashboard na złych danych tylko szybciej pokazuje złe liczby.",
    },
  ],
  relatedArticleSlugs: [
    "jak-mierzyc-roi-automatyzacji",
    "porzadek-w-danych-przed-ai-i-automatyzacja",
    "5-procesow-do-automatyzacji-w-malej-firmie",
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci"],
  contact: {
    title: "Ile czasu zabiera ci dziś raportowanie?",
    body: "Napisz, jakie raporty powstają ręcznie i skąd pochodzą dane. Zaproponujemy, jak je zautomatyzować.",
    highlights: [
      "Rozmowa o wskaźnikach, a nie tylko o narzędziach",
      "Propozycja pierwszego dashboardu na waszych danych",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
