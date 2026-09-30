import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "automatyzacja-dla-hr",
  metaTitle: "Automatyzacja HR: rekrutacja i onboarding | Automation Minds",
  metaDescription:
    "Automatyzujemy rekrutację, onboarding, wnioski urlopowe i dokumenty pracownicze. Mniej maili i arkuszy w HR, lepsze doświadczenie kandydatów i pracowników.",
  primaryKeyword: "automatyzacja HR",
  secondaryKeywords: [
    "automatyzacja rekrutacji",
    "automatyzacja onboardingu",
    "HR w małej firmie",
    "obieg dokumentów pracowniczych",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Automatyzacja procesów",
    title: "Automatyzacja HR: rekrutacja, onboarding i dokumenty bez gonienia za mailami",
    lead: "Kandydaci dostają odpowiedź szybko, nowa osoba ma dostępy i sprzęt pierwszego dnia, a wnioski i dokumenty przechodzą przez akceptację bez papieru. HR zajmuje się ludźmi, a nie arkuszami.",
    outcomes: [
      "Rekrutacja prowadzona w jednym miejscu, z szybką odpowiedzią dla kandydatów",
      "Onboarding z listą zadań, która pilnuje się sama",
      "Wnioski i dokumenty pracownicze w cyfrowym obiegu",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1758518730384-be3d205838e8?w=1920&q=80",
    imageAlt: "Dwie osoby podają sobie ręce przy stole w biurze",
  },
  problems: {
    title: "Gdzie HR traci czas",
    lead: "W małych i średnich firmach HR to często jedna osoba albo dodatkowy obowiązek kogoś z biura.",
    items: [
      {
        title: "CV w skrzynce mailowej",
        body: "Zgłoszenia z kilku portali trafiają do maila. Trudno śledzić, kto na jakim jest etapie.",
      },
      {
        title: "Kandydaci czekają na odpowiedź",
        body: "Po rozmowie kandydat nie dostaje informacji przez tygodnie. Dobrzy kandydaci przyjmują inne oferty.",
      },
      {
        title: "Chaotyczny pierwszy dzień",
        body: "Nowa osoba przychodzi, a nie ma laptopa, kont ani planu. Pierwszy tydzień to czekanie.",
      },
      {
        title: "Wnioski na papierze albo w mailach",
        body: "Urlopy, delegacje, zmiany danych. Każdy wniosek to kilka maili i ręczne wpisanie do systemu.",
      },
      {
        title: "Terminy, o których łatwo zapomnieć",
        body: "Badania okresowe, szkolenia BHP, koniec okresu próbnego. Pilnowane w kalendarzu albo wcale.",
      },
      {
        title: "Offboarding bez listy",
        body: "Po odejściu pracownika konta i dostępy zostają aktywne, bo nikt nie pamięta o wszystkich.",
      },
    ],
  },
  scope: {
    title: "Co automatyzujemy w HR",
    lead: "Dobieramy zakres do wielkości firmy. W małym zespole często wystarczy prosta baza i kilka automatyzacji.",
    items: [
      {
        title: "Zbieranie aplikacji",
        body: "Zgłoszenia z portali i formularza trafiają do jednej bazy kandydatów z informacją o stanowisku.",
      },
      {
        title: "Etapy rekrutacji",
        body: "Kandydaci przechodzą przez etapy, a każda zmiana wysyła odpowiednią wiadomość.",
      },
      {
        title: "Umawianie rozmów",
        body: "Kandydat sam wybiera termin w kalendarzu rekrutera, bez wymiany maili.",
      },
      {
        title: "Wsparcie AI przy CV",
        body: "AI streszcza CV i porównuje je z wymaganiami. Decyzję zawsze podejmuje człowiek.",
      },
      {
        title: "Onboarding",
        body: "Po podpisaniu umowy startuje lista zadań dla IT, biura, przełożonego i nowej osoby.",
      },
      {
        title: "Wnioski pracownicze",
        body: "Urlopy, delegacje i zmiany danych przez formularz, z akceptacją przełożonego.",
      },
      {
        title: "Przypomnienia o terminach",
        body: "Badania, szkolenia, koniec umów i okresu próbnego z automatycznymi przypomnieniami.",
      },
      {
        title: "Offboarding",
        body: "Lista zadań przy odejściu pracownika: odbiór sprzętu, zamknięcie kont, dokumenty.",
      },
    ],
  },
  example: {
    title: "Pierwszy dzień nowej osoby przed i po automatyzacji",
    lead: "Przykład firmy, która zatrudnia kilka osób w kwartale. Tak zmienił się onboarding.",
    rows: [
      {
        label: "Po podpisaniu umowy",
        before: "HR wysyła kilka maili do IT, biura i przełożonego.",
        after: "Automatycznie powstaje lista zadań z terminami dla każdej osoby.",
      },
      {
        label: "Sprzęt i dostępy",
        before: "Laptop zamawiany w dniu przyjścia, konta zakładane w pierwszym tygodniu.",
        after: "IT dostaje zadanie z wyprzedzeniem, dostępy są gotowe pierwszego dnia.",
      },
      {
        label: "Informacje dla nowej osoby",
        before: "Wszystko przekazywane ustnie, w pośpiechu.",
        after: "Nowa osoba dostaje przed startem mail z planem pierwszego tygodnia.",
      },
      {
        label: "Dokumenty",
        before: "Papierowe oświadczenia do wypełnienia pierwszego dnia.",
        after: "Formularze do wypełnienia online przed pierwszym dniem.",
      },
      {
        label: "Kontrola",
        before: "Nikt nie wie, co jeszcze zostało do zrobienia.",
        after: "Postęp onboardingu widoczny w jednym miejscu.",
      },
    ],
    note: "Automatyzujemy formalności, żeby HR i przełożeni mieli więcej czasu na rozmowę z nową osobą.",
  },
  process: {
    title: "Jak wdrażamy",
    lead: "Zaczynamy od procesu, który najbardziej przeszkadza: rekrutacji, onboardingu albo wniosków.",
    steps: [
      {
        title: "Przegląd procesów HR",
        body: "Poznajemy, jak dziś wygląda rekrutacja, onboarding i obieg dokumentów oraz jakich narzędzi używacie.",
      },
      {
        title: "Projekt",
        body: "Projektujemy bazę, etapy, wiadomości i listy zadań dopasowane do firmy.",
      },
      {
        title: "Budowa i testy",
        body: "Budujemy automatyzacje i testujemy je na jednej rekrutacji albo jednym onboardingu.",
      },
      {
        title: "Wdrożenie",
        body: "Uczymy HR i przełożonych, jak korzystać z nowych narzędzi.",
      },
      {
        title: "Rozwój",
        body: "Dokładamy kolejne procesy, na przykład wnioski urlopowe albo przypomnienia o terminach.",
      },
    ],
  },
  tools: {
    title: "Narzędzia",
    lead: "Łączymy narzędzia HR z pocztą, kalendarzem i systemami, z których korzysta firma.",
    items: [
      { name: "Airtable", note: "baza kandydatów, pracowników i onboardingu" },
      { name: "Teamtailor, eRecruiter", note: "systemy do rekrutacji" },
      { name: "Calendly, Microsoft Bookings", note: "umawianie rozmów z kandydatami" },
      { name: "Google Workspace, Microsoft 365", note: "konta, poczta i dokumenty" },
      { name: "Make, n8n, Power Automate", note: "listy zadań, powiadomienia i akceptacje" },
      { name: "Autenti, DocuSign", note: "podpisywanie dokumentów online" },
    ],
  },
  faq: [
    {
      question: "Czy automatyzacja HR ma sens w małej firmie?",
      answer:
        "Tak, jeśli firma regularnie rekrutuje albo przyjmuje nowe osoby. Nawet prosta lista zadań onboardingowych oszczędza sporo pracy i nerwów przy każdym zatrudnieniu.",
    },
    {
      question: "Czy AI będzie odrzucać kandydatów?",
      answer:
        "Nie. AI może streścić CV i wskazać, jak kandydat pasuje do wymagań, ale decyzję zawsze podejmuje człowiek. Tak projektujemy każde wdrożenie w rekrutacji.",
    },
    {
      question: "Co z danymi osobowymi kandydatów?",
      answer:
        "Projektujemy procesy zgodnie z RODO: zbieramy zgody, ograniczamy dostęp i automatycznie usuwamy dane kandydatów po upływie ustalonego czasu.",
    },
    {
      question: "Czy musimy kupić system HR?",
      answer:
        "Nie zawsze. W wielu firmach wystarczy dobrze zaprojektowana baza w Airtable i kilka automatyzacji. System HR polecamy przy większej skali.",
    },
    {
      question: "Czy automatyzacje połączycie z kadrami i płacami?",
      answer:
        "Tak, jeśli program kadrowy pozwala na integrację albo import danych. Sprawdzamy to na początku projektu.",
    },
  ],
  relatedArticleSlugs: [
    "automatyzacja-onboardingu-pracownika",
    "rodo-a-automatyzacja-procesow",
    "5-procesow-do-automatyzacji-w-malej-firmie",
  ],
  relatedServiceSlugs: ["wdrozenia-airtable", "cyfryzacja-danych-i-dokumentow"],
  contact: {
    title: "Który proces HR zabiera ci najwięcej czasu?",
    body: "Opisz, jak dziś wygląda rekrutacja albo przyjmowanie nowej osoby. Podpowiemy, co warto zautomatyzować najpierw.",
    highlights: [
      "Rozmowa o procesach HR w waszej skali",
      "Propozycja rozwiązania bez przepłacania za system",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
