import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "automatyzacja-dla-logistyki",
  metaTitle: "Automatyzacja logistyki i wysyłek | Automation Minds",
  metaDescription:
    "Automatyzujemy zamówienia, wysyłki, etykiety, statusy przesyłek i komunikację z klientami. Mniej ręcznej pracy w magazynie, spedycji i e-commerce.",
  primaryKeyword: "automatyzacja logistyki",
  secondaryKeywords: [
    "automatyzacja wysyłek",
    "śledzenie przesyłek",
    "automatyzacja magazynu",
    "integracja z kurierami",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Automatyzacja procesów",
    title: "Automatyzacja logistyki: zamówienia, wysyłki i statusy bez ręcznego pilnowania",
    lead: "Zamówienia z różnych kanałów trafiają do jednej kolejki, etykiety generują się same, a klient dostaje informację o statusie przesyłki bez pytania. Zespół zajmuje się wyjątkami, a nie przepisywaniem numerów.",
    outcomes: [
      "Zamówienia z wszystkich kanałów w jednej kolejce",
      "Etykiety i zlecenia dla kurierów bez przepisywania",
      "Automatyczne powiadomienia o statusie dla klientów",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
    imageAlt: "Pojemniki na regałach w magazynie",
  },
  problems: {
    title: "Gdzie logistyka traci czas",
    lead: "W logistyce liczy się każda minuta, a ręczne przepisywanie danych jest jednym z głównych źródeł opóźnień i pomyłek.",
    items: [
      {
        title: "Zamówienia z wielu kanałów",
        body: "Sklep, marketplace, mail, telefon. Każdy kanał obsługiwany osobno.",
      },
      {
        title: "Ręczne tworzenie etykiet",
        body: "Adres kopiowany z zamówienia do panelu kuriera. Pomyłka w numerze domu oznacza zwrot paczki.",
      },
      {
        title: "Pytania o status",
        body: "Klienci pytają, gdzie jest paczka. Zespół sprawdza numer w panelu kuriera i odpisuje.",
      },
      {
        title: "Problemy z przesyłkami wychodzą późno",
        body: "Zagubiona albo zatrzymana paczka zostaje zauważona dopiero po reklamacji klienta.",
      },
      {
        title: "Rozbieżności w stanach",
        body: "Stan w sklepie nie zgadza się ze stanem w magazynie. Sprzedaje się towar, którego nie ma.",
      },
      {
        title: "Dokumenty transportowe",
        body: "Listy przewozowe, CMR i dokumenty dla spedycji przygotowywane ręcznie.",
      },
    ],
  },
  scope: {
    title: "Co automatyzujemy",
    lead: "Automatyzacje łączymy z systemem sprzedaży, magazynem i kurierami, z których korzystacie.",
    items: [
      {
        title: "Jedna kolejka zamówień",
        body: "Zamówienia ze sklepu, marketplace i maili trafiają do jednego miejsca w jednolitym formacie.",
      },
      {
        title: "Etykiety i zlecenia kurierskie",
        body: "Etykieta i zamówienie kuriera generowane automatycznie z danych zamówienia.",
      },
      {
        title: "Wybór przewoźnika",
        body: "Reguły dobierające kuriera według wagi, gabarytu, kraju i kosztu.",
      },
      {
        title: "Śledzenie przesyłek",
        body: "Statusy przesyłek pobierane automatycznie i widoczne przy zamówieniu.",
      },
      {
        title: "Powiadomienia dla klientów",
        body: "Informacja o wysyłce, numerze przesyłki i opóźnieniach bez udziału zespołu.",
      },
      {
        title: "Alerty o problemach",
        body: "Powiadomienie dla zespołu, gdy przesyłka utknęła albo wraca do nadawcy.",
      },
      {
        title: "Synchronizacja stanów",
        body: "Stany magazynowe aktualne we wszystkich kanałach sprzedaży.",
      },
      {
        title: "Raporty logistyczne",
        body: "Czas realizacji, koszty wysyłek, zwroty i problemy z przewoźnikami w jednym widoku.",
      },
    ],
  },
  example: {
    title: "Zamówienie od złożenia do doręczenia",
    lead: "Przykład firmy sprzedającej przez sklep internetowy i marketplace, z własnym magazynem.",
    rows: [
      {
        label: "Nowe zamówienie",
        before: "Pracownik sprawdza sklep i marketplace osobno.",
        after: "Zamówienia z obu kanałów pojawiają się w jednej kolejce.",
      },
      {
        label: "Etykieta",
        before: "Kopiowanie adresu do panelu kuriera.",
        after: "Etykieta drukuje się jednym kliknięciem z danymi z zamówienia.",
      },
      {
        label: "Informacja dla klienta",
        before: "Numer przesyłki wysyłany ręcznie albo wcale.",
        after: "Automatyczny mail z numerem i linkiem do śledzenia.",
      },
      {
        label: "Problem z przesyłką",
        before: "Wychodzi na jaw, gdy klient napisze reklamację.",
        after: "Alert dla zespołu, zanim klient zacznie się niepokoić.",
      },
      {
        label: "Stany",
        before: "Ręczne poprawianie stanów w kilku kanałach.",
        after: "Stany aktualizowane automatycznie po każdej sprzedaży.",
      },
    ],
    note: "Przy dużej skali polecamy specjalistyczne systemy magazynowe. Automatyzacje pomagają połączyć je z resztą firmy.",
  },
  process: {
    title: "Jak wdrażamy",
    lead: "W logistyce zmiany wprowadzamy tak, żeby nie zatrzymać wysyłek ani na jeden dzień.",
    steps: [
      {
        title: "Przegląd procesu",
        body: "Poznajemy drogę zamówienia, kanały sprzedaży, przewoźników i systemy magazynowe.",
      },
      {
        title: "Wybór obszaru",
        body: "Zaczynamy od miejsca, w którym ręcznej pracy i pomyłek jest najwięcej.",
      },
      {
        title: "Budowa i testy",
        body: "Budujemy automatyzację i testujemy ją na próbnych zamówieniach.",
      },
      {
        title: "Uruchomienie",
        body: "Włączamy automatyzację w spokojniejszym okresie, z możliwością szybkiego powrotu.",
      },
      {
        title: "Rozwój",
        body: "Dokładamy kolejne kanały, przewoźników, powiadomienia i raporty.",
      },
    ],
  },
  tools: {
    title: "Systemy, z którymi pracujemy",
    lead: "Łączymy sklepy, marketplace, kurierów i magazyn w jeden przepływ.",
    items: [
      { name: "BaseLinker", note: "zamówienia z wielu kanałów i wysyłki" },
      { name: "Shoper, WooCommerce, Shopify", note: "sklepy internetowe" },
      { name: "Allegro, Amazon", note: "marketplace" },
      { name: "InPost, DPD, DHL, GLS", note: "przewoźnicy i śledzenie przesyłek" },
      { name: "Airtable", note: "rejestr zamówień i wyjątków" },
      { name: "Make, n8n", note: "integracje i powiadomienia" },
    ],
  },
  faq: [
    {
      question: "Czy pracujecie z BaseLinkerem?",
      answer:
        "Tak. Często uzupełniamy BaseLinkera o automatyzacje, których nie ma w standardzie, na przykład niestandardowe powiadomienia, raporty albo integracje z innymi systemami.",
    },
    {
      question: "Czy automatyzacja działa z moim kurierem?",
      answer:
        "Większość przewoźników w Polsce ma API albo integracje przez popularne platformy. Sprawdzamy to na początku projektu.",
    },
    {
      question: "Czy to rozwiązanie tylko dla e-commerce?",
      answer:
        "Nie. Automatyzujemy też logistykę w firmach B2B, dystrybucji i produkcji: zamówienia od klientów, dostawy, dokumenty transportowe i komunikację ze spedycją.",
    },
    {
      question: "Jak unikacie przestojów przy wdrożeniu?",
      answer:
        "Testujemy automatyzacje na próbnych zamówieniach, uruchamiamy je w spokojniejszym okresie i zostawiamy możliwość szybkiego powrotu do starego sposobu pracy.",
    },
    {
      question: "Czy klient może sam sprawdzić status zamówienia?",
      answer:
        "Tak. Wysyłamy automatyczne powiadomienia, a przy potrzebie budujemy prostą stronę statusu albo chatbota, który sprawdza zamówienie po numerze.",
    },
  ],
  relatedArticleSlugs: [
    "5-procesow-do-automatyzacji-w-malej-firmie",
    "integracja-crm-z-fakturowaniem",
    "jak-wybrac-narzedzie-do-automatyzacji",
  ],
  relatedServiceSlugs: ["integracje-systemow", "chatbot-ai-dla-firmy"],
  contact: {
    title: "Porozmawiajmy o twoich wysyłkach",
    body: "Opisz, skąd przychodzą zamówienia i z jakich przewoźników korzystacie. Wskażemy, gdzie automatyzacja oszczędzi najwięcej czasu.",
    highlights: [
      "Przegląd kanałów sprzedaży i przewoźników",
      "Propozycja pierwszej automatyzacji w logistyce",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
