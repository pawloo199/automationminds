import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "automatyzacja-sprzedazy",
  metaTitle: "Automatyzacja sprzedaży dla MŚP | Automation Minds",
  metaDescription:
    "Automatyzujemy obsługę leadów, CRM, oferty i follow-upy w małych i średnich firmach. Handlowcy sprzedają, a dane przenoszą się same. Bezpłatna konsultacja.",
  primaryKeyword: "automatyzacja sprzedaży",
  secondaryKeywords: [
    "automatyzacja CRM",
    "automatyzacja obsługi leadów",
    "automatyczne oferty",
    "follow-up sprzedażowy",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Automatyzacja procesów",
    title: "Automatyzacja sprzedaży, która oddaje handlowcom czas na rozmowy",
    lead: "Zapytania z formularzy, maili i telefonów trafiają do CRM same. Oferty powstają z szablonu, a przypomnienia pilnują, żeby żaden klient nie czekał na odpowiedź. Wdrażamy to w małych i średnich firmach, na narzędziach, których już używacie.",
    outcomes: [
      "Każde zapytanie w CRM po kilku minutach, bez przepisywania",
      "Oferty i follow-upy wysyłane na czas, bez pilnowania w kalendarzu",
      "Aktualny obraz lejka sprzedaży bez ręcznego raportu",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?w=1920&q=80",
    imageAlt: "Zespół sprzedaży przy stole z laptopami podczas spotkania",
  },
  problems: {
    title: "Gdzie sprzedaż traci czas i klientów",
    lead: "Rzadko winny jest jeden duży problem. Częściej to kilka drobnych zadań, które codziennie zabierają handlowcom po trochę czasu.",
    items: [
      {
        title: "Zapytania giną między kanałami",
        body: "Część przychodzi formularzem, część mailem, część telefonicznie albo przez Messengera. Gdy zapytanie trafi do skrzynki osoby na urlopie, klient czeka, a potem kupuje gdzie indziej.",
      },
      {
        title: "Handlowcy przepisują dane",
        body: "Te same dane klienta trafiają do CRM, do oferty, do arkusza z prognozą i do programu do faktur. Każde przepisanie to stracony czas i okazja do pomyłki.",
      },
      {
        title: "Oferty powstają od zera",
        body: "Kopiowanie starej oferty, poprawianie cen i nazw, szukanie aktualnego cennika. Przy kilku ofertach dziennie to spora część dnia pracy.",
      },
      {
        title: "Follow-up zależy od pamięci",
        body: "Klient prosił o kontakt za dwa tygodnie. Jeśli nikt tego nie zapisał albo przypomnienie zginęło, szansa na sprzedaż przepada po cichu.",
      },
      {
        title: "Raport sprzedaży powstaje ręcznie",
        body: "W piątek ktoś zbiera dane z CRM i arkuszy, żeby pokazać wyniki tygodnia. Zanim raport jest gotowy, liczby bywają już nieaktualne.",
      },
      {
        title: "CRM nie pokazuje rzeczywistości",
        body: "Gdy wpisywanie danych jest uciążliwe, handlowcy odkładają je na piątek albo pomijają. Decyzje zapadają wtedy na podstawie niepełnych danych.",
      },
    ],
  },
  scope: {
    title: "Co automatyzujemy w sprzedaży",
    lead: "Zaczynamy od miejsca, w którym tracicie najwięcej. Nie trzeba wdrażać wszystkiego naraz.",
    items: [
      {
        title: "Zbieranie leadów z wielu kanałów",
        body: "Formularze na stronie, maile, reklamy na Facebooku i LinkedInie, czat, telefon. Każde zapytanie trafia w jedno miejsce razem z historią kontaktu.",
      },
      {
        title: "Przydział i szybka odpowiedź",
        body: "Automat przypisuje zapytanie do właściwej osoby według regionu, produktu albo obłożenia i od razu potwierdza klientowi, że wiadomość dotarła.",
      },
      {
        title: "Ocena i kolejność leadów",
        body: "Proste reguły albo AI oceniają, które zapytania mają największą szansę na sprzedaż. Handlowiec widzi je na górze listy.",
      },
      {
        title: "Oferty z szablonu",
        body: "Oferta powstaje z danych w CRM i aktualnego cennika. Handlowiec ją sprawdza i wysyła, zamiast składać od zera.",
      },
      {
        title: "Follow-up i przypomnienia",
        body: "Sekwencje wiadomości, zadania w CRM i powiadomienia, gdy klient otworzy ofertę albo długo nie odpowiada.",
      },
      {
        title: "Przekazanie do realizacji i faktury",
        body: "Po wygranej szansie dane trafiają do fakturowania, magazynu albo zespołu realizacji bez ponownego wpisywania.",
      },
      {
        title: "Raporty i prognozy",
        body: "Lejek, konwersja na kolejnych etapach i wyniki handlowców w dashboardzie, który aktualizuje się sam.",
      },
      {
        title: "Porządek w bazie klientów",
        body: "Usuwanie duplikatów, uzupełnianie danych firmy po numerze NIP, jednolite statusy. Bez tego automatyzacja pracuje na złych danych.",
      },
    ],
  },
  example: {
    title: "Jedno zapytanie przed i po automatyzacji",
    lead: "Przykład firmy B2B, która dostaje zapytania przez formularz na stronie i mailem. Tak zmienia się droga jednego zapytania od klienta.",
    rows: [
      {
        label: "Nowe zapytanie",
        before: "Mail trafia do wspólnej skrzynki. Ktoś go zauważa, gdy znajdzie chwilę.",
        after: "Zapytanie od razu pojawia się w CRM, a klient dostaje potwierdzenie z informacją, kto się odezwie.",
      },
      {
        label: "Dane klienta",
        before: "Handlowiec przepisuje nazwę firmy, NIP i kontakt do CRM.",
        after: "Dane przechodzą z formularza, a pozostałe uzupełniają się z rejestru po numerze NIP.",
      },
      {
        label: "Przydział",
        before: "Kierownik rozdziela zapytania ręcznie, zwykle raz dziennie.",
        after: "Automat przypisuje zapytanie według ustalonych reguł i wysyła powiadomienie właściwej osobie.",
      },
      {
        label: "Oferta",
        before: "Kopia starej oferty w Wordzie i ręczna zmiana cen.",
        after: "Oferta tworzy się z danych w CRM i cennika, a handlowiec tylko ją sprawdza.",
      },
      {
        label: "Follow-up",
        before: "Przypomnienie w pamięci albo na karteczce przy monitorze.",
        after: "Zadanie w CRM i przypomnienie, gdy klient nie odpowiada od kilku dni.",
      },
      {
        label: "Raport",
        before: "Piątkowe zbieranie danych z kilku arkuszy.",
        after: "Dashboard z aktualnym lejkiem, dostępny w każdej chwili.",
      },
    ],
    note: "Zakres zawsze dopasowujemy do firmy. Czasem wystarczą dwa pierwsze kroki, żeby handlowcy odzyskali sporo czasu.",
  },
  process: {
    title: "Jak wdrażamy automatyzację sprzedaży",
    lead: "Pracujemy etapami. Po każdym widzicie działające rozwiązanie, a nie tylko dokumentację.",
    steps: [
      {
        title: "Rozmowa i przegląd procesu",
        body: "Poznajemy drogę klienta od pierwszego kontaktu do faktury, narzędzia, których używacie, i miejsca, w których handlowcy tracą czas.",
      },
      {
        title: "Mapa procesu i plan",
        body: "Rozrysowujemy proces, wskazujemy, co zautomatyzować najpierw, i wyceniamy pierwszy etap. Znacie koszt, zanim zaczniemy pracę.",
      },
      {
        title: "Porządek w danych",
        body: "Ujednolicamy statusy w CRM, usuwamy duplikaty i ustalamy, które pola są obowiązkowe. Automatyzacja działa dobrze tylko na dobrych danych.",
      },
      {
        title: "Budowa i testy",
        body: "Budujemy automatyzacje na waszych narzędziach i sprawdzamy je na prawdziwych zapytaniach, zanim przejmą codzienną pracę.",
      },
      {
        title: "Wdrożenie w zespole",
        body: "Pokazujemy handlowcom, co się zmienia, i zostawiamy krótką instrukcję. Pierwsze tygodnie obserwujemy razem z wami.",
      },
      {
        title: "Rozwój i opieka",
        body: "Gdy pierwszy etap działa, dokładamy kolejne: oferty, raporty, połączenie z fakturowaniem. Możemy też przejąć stałą opiekę nad automatyzacjami.",
      },
    ],
  },
  tools: {
    title: "Narzędzia, z którymi pracujemy",
    lead: "Najpierw sprawdzamy, co już macie. Żeby zautomatyzować sprzedaż, rzadko trzeba zmieniać CRM.",
    items: [
      { name: "Pipedrive", note: "CRM lubiany przez małe zespoły sprzedaży" },
      { name: "HubSpot", note: "CRM z marketingiem i sekwencjami maili" },
      { name: "Livespace", note: "polski CRM dla firm B2B" },
      { name: "Airtable", note: "własny CRM dla nietypowego procesu" },
      { name: "Make, Zapier, n8n", note: "łączenie narzędzi i logika automatyzacji" },
      { name: "Fakturownia, inFakt, wFirma", note: "faktury po wygranej szansie" },
      { name: "Google Workspace, Microsoft 365", note: "poczta, kalendarz i dokumenty ofert" },
      { name: "ChatGPT, Claude", note: "streszczenia zapytań i szkice odpowiedzi" },
    ],
  },
  faq: [
    {
      question: "Czy musimy zmieniać CRM, żeby zautomatyzować sprzedaż?",
      answer:
        "Zwykle nie. Najczęściej budujemy automatyzacje wokół CRM, który już macie, na przykład Pipedrive, HubSpot albo Livespace. Zmianę proponujemy tylko wtedy, gdy obecne narzędzie blokuje pracę albo gdy firma dopiero wybiera swój pierwszy CRM.",
    },
    {
      question: "Ile kosztuje automatyzacja sprzedaży?",
      answer:
        "To zależy od liczby kanałów, narzędzi i tego, co chcecie zautomatyzować najpierw. Po pierwszej rozmowie i przeglądzie procesu dostajecie wycenę konkretnego etapu, a nie całego projektu w ciemno.",
    },
    {
      question: "Jak długo trwa wdrożenie?",
      answer:
        "Pierwszy etap, na przykład zbieranie leadów do CRM z automatycznym przydziałem, zwykle uruchamiamy w ciągu kilku tygodni. Większe projekty dzielimy na etapy, żeby efekty były widoczne wcześnie.",
    },
    {
      question: "Czy automatyzacja zastąpi handlowców?",
      answer:
        "Nie. Automat przejmuje przepisywanie, przypomnienia i raporty. Rozmowy z klientami, negocjacje i budowanie relacji zostają przy ludziach, którzy mają na nie więcej czasu.",
    },
    {
      question: "Co z danymi osobowymi klientów?",
      answer:
        "Projektujemy przepływy zgodnie z RODO: dane trafiają tylko tam, gdzie są potrzebne, a dostęp mają wybrane osoby. Gdy to wymagane, pomagamy wybrać narzędzia przechowujące dane w Unii Europejskiej.",
    },
    {
      question: "Czy AI przyda się w sprzedaży małej firmy?",
      answer:
        "Tak, w konkretnych zadaniach. AI streszcza długie zapytania, podpowiada szkic odpowiedzi, porządkuje notatki po rozmowie i pomaga ocenić, które leady obsłużyć najpierw. Decyzję zawsze podejmuje człowiek.",
    },
  ],
  relatedArticleSlugs: [
    "automatyzacja-obslugi-leadow-sprzedazowych",
    "integracja-crm-z-fakturowaniem",
    "ile-kosztuje-automatyzacja-procesow",
    "jak-wybrac-narzedzie-do-automatyzacji",
  ],
  relatedServiceSlugs: [
    "automatyzacja-raportow",
    "doradztwo-i-optymalizacja-procesow-biznesowych",
    "automatyzacja-oraz-ai-w-niestandardowych-procesach",
  ],
  contact: {
    title: "Porozmawiajmy o twojej sprzedaży",
    body: "Opowiedz, skąd przychodzą zapytania i co dzieje się z nimi dalej. W 30 minut wskażemy, co zautomatyzować najpierw i czy to się opłaci.",
    highlights: [
      "Rozmowa z osobą, która wdraża automatyzacje sprzedaży",
      "Konkretne propozycje dla waszego CRM i narzędzi",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
