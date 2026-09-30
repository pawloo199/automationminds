import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "integracje-systemow",
  metaTitle: "Integracje systemów w firmie | Automation Minds",
  metaDescription:
    "Łączymy CRM, ERP, sklep, program księgowy i inne systemy, żeby dane przechodziły między nimi same. Integracje przez API, Make, n8n i Power Automate.",
  primaryKeyword: "integracja systemów",
  secondaryKeywords: [
    "integracja CRM z ERP",
    "integracje API",
    "łączenie aplikacji",
    "synchronizacja danych",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Automatyzacja procesów",
    title: "Integracje systemów, dzięki którym dane przechodzą same",
    lead: "CRM nie wie, co dzieje się w programie księgowym, sklep nie zna stanów magazynu, a zespół przepisuje dane między nimi. Łączymy systemy tak, żeby informacja wpisana raz trafiała wszędzie tam, gdzie jest potrzebna.",
    outcomes: [
      "Dane wpisane raz dostępne we wszystkich systemach",
      "Synchronizacja klientów, zamówień, faktur i stanów",
      "Monitoring integracji i powiadomienia o błędach",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1695199193329-80b0cc659eb3?w=1920&q=80",
    imageAlt: "Zbliżenie na połączony kabel na czarnym tle",
  },
  problems: {
    title: "Jak wyglądają niepołączone systemy",
    lead: "Każdy system osobno działa dobrze. Kłopoty zaczynają się na styku między nimi.",
    items: [
      {
        title: "Przepisywanie między programami",
        body: "Dane klienta z CRM do programu do faktur, zamówienie ze sklepu do ERP, godziny z arkusza do płac.",
      },
      {
        title: "Różne dane w różnych systemach",
        body: "Adres klienta zmieniony w jednym miejscu, a w pozostałych stary. Faktura idzie pod zły adres.",
      },
      {
        title: "Opóźnienia",
        body: "Informacja trafia do kolejnego systemu dopiero, gdy ktoś ją przepisze. Czasem po kilku dniach.",
      },
      {
        title: "Integracje, które się psują",
        body: "Ktoś kiedyś połączył systemy, ale nikt nie wie jak. Gdy przestaje działać, nikt tego nie zauważa.",
      },
      {
        title: "Brak gotowej integracji",
        body: "Dwa systemy nie mają wbudowanego połączenia, a dostawcy nie są zainteresowani jego budową.",
      },
      {
        title: "Arkusz jako pośrednik",
        body: "Eksport z jednego systemu, poprawki w Excelu, import do drugiego. Co tydzień.",
      },
    ],
  },
  scope: {
    title: "Co integrujemy",
    lead: "Zaczynamy od przepływów danych, które najczęściej są przepisywane ręcznie.",
    items: [
      {
        title: "Mapa systemów",
        body: "Rysujemy, jakie systemy działają w firmie i jakie dane przechodzą między nimi.",
      },
      {
        title: "CRM z fakturowaniem",
        body: "Wygrana szansa sprzedaży tworzy fakturę, a płatność wraca do CRM.",
      },
      {
        title: "Sklep z ERP i magazynem",
        body: "Zamówienia trafiają do ERP, a stany magazynowe wracają do sklepu.",
      },
      {
        title: "Formularze z bazami",
        body: "Dane z formularzy trafiają od razu do CRM, Airtable albo systemu zgłoszeń.",
      },
      {
        title: "Poczta i kalendarz",
        body: "Maile i spotkania zapisują się przy właściwym kliencie w CRM.",
      },
      {
        title: "Integracje przez API",
        body: "Połączenia z systemami bez gotowych integracji, także ze starszymi programami.",
      },
      {
        title: "Monitoring",
        body: "Powiadomienia o błędach integracji i dziennik wymiany danych.",
      },
      {
        title: "Dokumentacja",
        body: "Opis wszystkich integracji, żeby było wiadomo, co z czym jest połączone.",
      },
    ],
  },
  example: {
    title: "Od oferty do faktury przed i po integracji",
    lead: "Przykład firmy, która używała CRM, programu do faktur i arkusza do rozliczeń.",
    rows: [
      {
        label: "Wygrana szansa",
        before: "Handlowiec wysyła mail do księgowości z danymi do faktury.",
        after: "Zmiana statusu w CRM tworzy fakturę w programie do faktur.",
      },
      {
        label: "Dane klienta",
        before: "Przepisywane z CRM do programu do faktur.",
        after: "Pobierane automatycznie, zawsze aktualne.",
      },
      {
        label: "Płatność",
        before: "Handlowiec nie wie, czy klient zapłacił.",
        after: "Status płatności widoczny przy kliencie w CRM.",
      },
      {
        label: "Rozliczenia prowizji",
        before: "Arkusz składany ręcznie na koniec miesiąca.",
        after: "Zestawienie oparte na opłaconych fakturach, gotowe w każdej chwili.",
      },
      {
        label: "Błąd integracji",
        before: "Nikt nie zauważa, że połączenie przestało działać.",
        after: "Powiadomienie dla odpowiedzialnej osoby przy pierwszym błędzie.",
      },
    ],
    note: "Integracje projektujemy tak, żeby jedno źródło było właścicielem danych. To zapobiega konfliktom i nadpisywaniu informacji.",
  },
  process: {
    title: "Jak budujemy integracje",
    lead: "Integracje muszą działać latami. Dlatego tak samo ważne jak budowa są monitoring i dokumentacja.",
    steps: [
      {
        title: "Mapa systemów i danych",
        body: "Spisujemy systemy, dane i przepływy. Ustalamy, który system jest źródłem jakich danych.",
      },
      {
        title: "Wybór sposobu integracji",
        body: "Wybieramy najprostszą drogę: gotowe połączenie, narzędzie bez kodu albo API.",
      },
      {
        title: "Budowa i testy",
        body: "Budujemy integrację i testujemy ją na danych testowych i wybranych prawdziwych przypadkach.",
      },
      {
        title: "Uruchomienie z monitoringiem",
        body: "Włączamy integrację i obserwujemy wymianę danych w pierwszych tygodniach.",
      },
      {
        title: "Opieka",
        body: "Reagujemy na błędy i zmiany w systemach, na przykład aktualizacje API dostawców.",
      },
    ],
  },
  tools: {
    title: "Narzędzia i systemy",
    lead: "Łączymy popularne systemy używane w polskich firmach i te mniej typowe.",
    items: [
      { name: "Make, n8n, Zapier", note: "integracje bez kodu i z niewielką ilością kodu" },
      { name: "Microsoft Power Automate", note: "integracje w środowisku Microsoft 365" },
      { name: "REST API, webhooki", note: "połączenia z systemami bez gotowych integracji" },
      { name: "Pipedrive, HubSpot, Livespace", note: "systemy CRM" },
      { name: "Comarch, enova, Subiekt, Fakturownia", note: "ERP, handel i fakturowanie" },
      { name: "Shoper, WooCommerce, BaseLinker", note: "sprzedaż internetowa" },
    ],
  },
  faq: [
    {
      question: "Make, Zapier czy n8n?",
      answer:
        "Zapier jest najprostszy, Make daje więcej możliwości przy rozsądnym koszcie, a n8n można uruchomić na własnym serwerze, co pomaga przy wymaganiach dotyczących danych. Wybieramy narzędzie pod konkretny przypadek.",
    },
    {
      question: "Co jeśli system nie ma API?",
      answer:
        "Szukamy innej drogi: dostęp do bazy danych, import i eksport plików, poczta albo automatyzacja interfejsu. Rzadko zdarza się, że integracja jest niemożliwa.",
    },
    {
      question: "Co się stanie, gdy integracja przestanie działać?",
      answer:
        "Ustawiamy monitoring i powiadomienia o błędach. Przy stałej opiece reagujemy na problemy i dostosowujemy integracje do zmian w systemach.",
    },
    {
      question: "Czy integracje są bezpieczne?",
      answer:
        "Stosujemy osobne konta techniczne z minimalnymi uprawnieniami, szyfrowane połączenia i zapis wymiany danych. Projektujemy przepływy zgodnie z RODO.",
    },
    {
      question: "Ile kosztuje integracja?",
      answer:
        "Zależy od systemów i liczby przepływów. Proste połączenie dwóch popularnych aplikacji to niewielki koszt, integracja ze starszym ERP wymaga więcej pracy. Wycenę przygotowujemy po przeglądzie systemów.",
    },
  ],
  relatedArticleSlugs: [
    "integracja-crm-z-fakturowaniem",
    "jak-wybrac-narzedzie-do-automatyzacji",
    "gotowa-automatyzacja-czy-budowana-od-zera",
  ],
  relatedServiceSlugs: ["migracja-danych", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  contact: {
    title: "Które systemy chcesz połączyć?",
    body: "Wypisz systemy, z których korzystacie, i dane, które dziś przepisujecie. Podpowiemy, jak je połączyć najprościej.",
    highlights: [
      "Przegląd systemów i możliwości integracji",
      "Propozycja najprostszego sposobu połączenia",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
