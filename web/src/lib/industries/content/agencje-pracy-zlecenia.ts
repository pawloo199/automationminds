import type { IndustryPageContent } from "../types";

export const agencjePracyZlecenia: IndustryPageContent = {
  industrySlug: "agencje-pracy",
  subSlug: "zlecenia-od-klientow",
  name: "Zlecenia od klientów",
  excerpt: "Zlecenia od klientów z wymaganiami, liczbą osób i terminami w jednym rejestrze, lista kandydatów z bazy dla rekrutera, statusy obsadzenia i informacje dla klienta.",
  metaTitle: "Zlecenia rekrutacyjne od klientów: rejestr i obsadzanie",
  metaDescription:
    "Automatyzujemy obsługę zleceń od klientów agencji pracy: rejestr wymagań i terminów, kandydaci z bazy dla rekrutera, statusy obsadzenia dla klienta.",
  primaryKeyword: "zlecenia rekrutacyjne od klientów",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje pracy: zlecenia",
    title: "Zlecenie od klienta obsadzone szybciej, zaczynając od własnej bazy",
    lead: "Klient dzwoni, że potrzebuje dwudziestu osób na drugą zmianę od poniedziałku. Rekruter zapisuje wymagania w notesie, publikuje ogłoszenie i czeka na aplikacje, choć w bazie są kandydaci, którzy pracowali już u tego klienta. Automatyzujemy obsługę zleceń: wymagania trafiają do rejestru, rekruter dostaje listę kandydatów z bazy, a klient widzi postęp obsadzenia.",
    bullets: [
      "Zlecenia z wymaganiami i terminami w jednym rejestrze",
      "Kandydaci z bazy jako punkt startu dla rekrutera",
      "Statusy obsadzenia i informacje dla klienta",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracy tymczasowej i rekrutacyjne obsługujące wielu klientów" },
    { label: "Co automatyzujemy", value: "Rejestr zleceń, wymagania, kandydaci z bazy, statusy, informacje dla klienta" },
    { label: "Narzędzia", value: "Rejestr zleceń, baza kandydatów, poczta, SMS, n8n" },
    { label: "Zasada", value: "Kandydatów do przedstawienia wybiera rekruter" },
  ],
  symptoms: {
    title: "Kiedy obsługę zleceń warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, agencja obsadza zlecenia wolniej, niż mogłaby.",
    items: [
      "Wymagania zleceń są w notatkach rekruterów.",
      "Dla każdego zlecenia publikuje się nowe ogłoszenie.",
      "Kandydaci, którzy już pracowali u klienta, nie są brani pod uwagę.",
      "Klient dzwoni z pytaniem o postęp.",
      "Nie wiadomo, ile zleceń jest obsadzonych na czas.",
      "Pracownicy, którym kończy się praca u jednego klienta, nie są proponowani innym.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zleceń",
    paragraphs: [
      "Zlecenie od klienta, przez formularz, mail lub telefon, trafia do rejestru: rodzaj pracy, liczba osób, wymagania formalne, lokalizacja, zmiany, termin rozpoczęcia, stawka. Brakujące informacje są wskazane, a rekruter może dopytać klienta.",
      "System przeszukuje bazę kandydatów i pracowników po wymaganiach formalnych: uprawnienia, lokalizacja, dostępność, języki, wcześniejsza praca u klienta. Rekruter dostaje listę, przegląda ją i wybiera osoby, do których wysyła pytanie o dostępność. Odpowiedzi trafiają do zlecenia. Jeśli z bazy nie da się obsadzić zlecenia, rekruter publikuje ogłoszenie, którego szkic przygotowuje AI.",
      "Każde zlecenie ma status obsadzenia: liczba potwierdzonych osób, braki, termin. Klient dostaje informację o postępie bez dzwonienia. Pracownicy kończący pracę u jednego klienta mogą być automatycznie proponowani rekruterowi do nowych zleceń.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zleceń",
    lead: "Zakres dopasowujemy do rodzajów zleceń i klientów.",
    items: [
      { title: "Rejestr zleceń", body: "Wymagania, liczba osób, terminy, stawki." },
      { title: "Brakujące informacje", body: "Wskazane przed rozpoczęciem rekrutacji." },
      { title: "Kandydaci z bazy", body: "Lista według wymagań formalnych, do przeglądu przez rekrutera." },
      { title: "Pytania o dostępność", body: "Wiadomości do wybranych kandydatów, w ich języku." },
      { title: "Ogłoszenia", body: "Szkic z wymagań, gdy baza nie wystarcza." },
      { title: "Status obsadzenia", body: "Potwierdzeni, braki, termin." },
      { title: "Informacje dla klienta", body: "Postęp obsadzenia bez dzwonienia." },
      { title: "Kończące się przydziały", body: "Pracownicy do ponownego przydziału." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zlecenia do obsadzenia.",
    items: [
      {
        title: "Pilne zlecenie",
        trigger: "Klient potrzebuje dwudziestu osób od poniedziałku",
        steps: ["Zlecenie w rejestrze z wymaganiami", "Lista kandydatów z bazy dla rekrutera", "Pytania o dostępność do wybranych osób i status dla klienta"],
        result: "Pierwsze potwierdzenia jeszcze tego samego dnia.",
      },
      {
        title: "Koniec przydziału",
        trigger: "Pracownikowi kończy się praca u klienta",
        steps: ["Informacja dla rekrutera", "Propozycja otwartych zleceń pasujących do pracownika", "Kontakt rekrutera z pracownikiem"],
        result: "Pracownik nie odchodzi do konkurencji, bo dostał kolejną propozycję.",
      },
    ],
  },
  example: {
    title: "Zlecenia przed i po automatyzacji",
    lead: "Przykład agencji obsługującej kilkunastu klientów z branży logistycznej i produkcyjnej.",
    rows: [
      { label: "Wymagania", before: "W notatkach.", after: "W rejestrze." },
      { label: "Start rekrutacji", before: "Nowe ogłoszenie.", after: "Najpierw baza." },
      { label: "Klient", before: "Dzwoni z pytaniem.", after: "Dostaje status." },
      { label: "Pracownicy po przydziale", before: "Odchodzą.", after: "Dostają propozycje." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru zleceń i jednego klienta.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak przyjmujecie zlecenia i jak szukacie kandydatów.", fromYou: "Rozmowa z rekruterami." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy pola zlecenia, wymagania formalne i treści wiadomości.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Testujemy na zleceniach jednego klienta.", fromYou: "Rekruter w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich klientów.", fromYou: "Uwagi rekruterów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru zleceń.",
    items: [
      { name: "Rejestr zleceń", description: "Dla agencji, które chcą uporządkować zlecenia.", includes: ["Rejestr zleceń", "Brakujące informacje", "Status obsadzenia", "Raport zleceń"] },
      { name: "Zlecenia i baza", description: "Dla agencji z dużą bazą kandydatów.", includes: ["Wszystko z wariantu Rejestr zleceń", "Kandydaci z bazy", "Pytania o dostępność", "Kończące się przydziały"] },
      { name: "Zlecenia i klienci", description: "Dla agencji, które chcą lepiej informować klientów.", includes: ["Wszystko z wariantu Zlecenia i baza", "Informacje dla klienta", "Ogłoszenia z AI", "Raport dla klienta"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zleceń i klientów,",
      "wielkość bazy kandydatów,",
      "integracja z systemem rekrutacyjnym,",
      "kanały komunikacji,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Lista z bazy zostanie potraktowana jako wybór.", mitigation: "Lista to punkt startu. Kandydatów wybiera rekruter." },
      { risk: "Kryteria wyszukiwania prowadzące do dyskryminacji.", mitigation: "Wyszukiwanie tylko po wymaganiach formalnych związanych z pracą, ustalonych przez rekrutera." },
      { risk: "Wiadomość do kandydata w złym momencie.", mitigation: "Wiadomości wysyła rekruter do wybranych osób, w ustalonych godzinach." },
      { risk: "Klient zobaczy dane kandydatów.", mitigation: "Klient dostaje status, a dane kandydatów tylko w granicach uzgodnionych w umowie." },
    ],
  },
  faq: [
    { question: "Czy system sam wybierze kandydatów?", answer: "Nie. Przygotuje listę osób spełniających wymagania formalne, a rekruter decyduje, z kim się kontaktować." },
    { question: "Czy klient może zgłaszać zlecenia przez formularz?", answer: "Tak, a zlecenia z maili i telefonów trafiają do tego samego rejestru." },
    { question: "Czy klient zobaczy postęp obsadzenia?", answer: "Tak, przez wiadomość lub prosty widok statusu." },
    { question: "Czy pracownicy po przydziale dostaną nowe propozycje?", answer: "Rekruter dostaje informację i listę pasujących zleceń, a kontakt z pracownikiem należy do niego." },
    { question: "Czy AI napisze ogłoszenie?", answer: "Przygotuje szkic z wymagań zlecenia, który rekruter sprawdza." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-dla-hr", "automatyzacja-w-obsludze-klienta"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "przyjmowanie-zamowien"],
  relatedToolSlugs: ["airtable", "n8n", "pipedrive"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
