import type { IndustryPageContent } from "../types";

export const firmySerwisowePrzeglady: IndustryPageContent = {
  industrySlug: "firmy-serwisowe",
  subSlug: "przeglady-okresowe",
  name: "Przeglądy okresowe i umowy serwisowe",
  excerpt: "Terminy przeglądów z umów serwisowych i wymagań producentów, przypomnienia dla klientów, planowanie wizyt i rozliczenia umów.",
  metaTitle: "Przypomnienia o przeglądach okresowych dla klientów",
  metaDescription:
    "Automatyzujemy przeglądy okresowe: terminy z umów i wymagań producentów, przypomnienia dla klientów, planowanie wizyt i rozliczenia umów serwisowych.",
  primaryKeyword: "przypomnienia o przeglądach okresowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy serwisowe: przeglądy okresowe",
    title: "Przeglądy okresowe, które same przypominają o sobie klientom",
    lead: "Przeglądy okresowe to przewidywalny przychód i okazja do utrzymania klienta na lata. Ale gdy terminy są w arkuszu, część przeglądów umyka, klienci idą do konkurencji, a gwarancje producentów tracą ważność. Automatyzujemy przeglądy: terminy wynikają z umów i wymagań producentów, klient dostaje przypomnienie z propozycją terminu, a następny przegląd planuje się sam.",
    bullets: [
      "Terminy z umów i wymagań producentów",
      "Przypomnienia z propozycją terminu dla klienta",
      "Następny przegląd zaplanowany po wizycie",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy serwisowe z klientami na umowach i urządzeniami wymagającymi przeglądów" },
    { label: "Co automatyzujemy", value: "Terminy, przypomnienia, planowanie, rozliczenia umów, raporty" },
    { label: "Narzędzia", value: "Baza urządzeń i umów, poczta, SMS, kalendarze, n8n" },
    { label: "Zasada", value: "Klient decyduje o terminie, firma o zakresie przeglądu" },
  ],
  symptoms: {
    title: "Kiedy przeglądy warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, część przychodu z przeglądów umyka.",
    items: [
      "Terminy przeglądów są w arkuszu albo w kalendarzu jednej osoby.",
      "Klienci zapominają o przeglądzie i dzwonią dopiero przy awarii.",
      "Gwarancja producenta wygasa, bo przegląd nie odbył się na czas.",
      "Umowy serwisowe są rozliczane ręcznie, a część wizyt nie jest fakturowana.",
      "Przeglądy kumulują się w jednym miesiącu.",
      "Nie wiadomo, ilu klientów nie wróciło na kolejny przegląd.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja przeglądów",
    paragraphs: [
      "Podstawą jest baza urządzeń klientów z datą montażu, ostatniego przeglądu i częstotliwością przeglądów wynikającą z umowy serwisowej lub wymagań producenta. System codziennie sprawdza, którym urządzeniom zbliża się termin.",
      "Klient dostaje przypomnienie z propozycją terminów, a po wyborze wizyta trafia do grafiku. Jeśli klient nie odpowiada, dostaje kolejne przypomnienie, a potem telefon z biura. Po przeglądzie protokół zapisuje datę, a następny termin wylicza się automatycznie.",
      "Umowy serwisowe są rozliczane według ich zasad: abonament, pakiet wizyt albo płatność za przegląd. Raport pokazuje przeglądy zaplanowane, wykonane i utracone, więc wiadomo, ilu klientów nie wróciło.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja przeglądów",
    lead: "Zakres dopasowujemy do rodzaju urządzeń i umów.",
    items: [
      { title: "Baza urządzeń", body: "Urządzenia klientów z datami montażu i przeglądów." },
      { title: "Zasady terminów", body: "Częstotliwość z umów i wymagań producentów." },
      { title: "Przypomnienia", body: "Z propozycją terminu, w ustalonym wyprzedzeniu." },
      { title: "Wybór terminu", body: "Klient potwierdza termin, wizyta trafia do grafiku." },
      { title: "Rozkład w roku", body: "Przeglądy rozłożone tak, żeby nie kumulowały się w jednym miesiącu." },
      { title: "Następny termin", body: "Wyliczany po przeglądzie z protokołu." },
      { title: "Rozliczenia umów", body: "Abonamenty, pakiety i płatności za przegląd." },
      { title: "Raport przeglądów", body: "Zaplanowane, wykonane i utracone." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od terminu do wykonanego przeglądu.",
    items: [
      {
        title: "Przegląd pompy ciepła",
        trigger: "Za miesiąc mija rok od ostatniego przeglądu",
        steps: ["Przypomnienie z informacją o wymaganiach gwarancji", "Wybór terminu przez klienta", "Wizyta w grafiku i przypomnienie dzień wcześniej"],
        result: "Klient nie traci gwarancji, a firma ma zaplanowaną pracę.",
      },
      {
        title: "Umowa z firmą",
        trigger: "Kwartalny przegląd klimatyzacji w biurowcu",
        steps: ["Lista urządzeń do przeglądu", "Termin uzgodniony z administratorem", "Protokoły i rozliczenie według umowy"],
        result: "Przeglądy z umowy wykonane i rozliczone na czas.",
      },
    ],
  },
  example: {
    title: "Przeglądy przed i po automatyzacji",
    lead: "Przykład firmy serwisującej kotły gazowe i pompy ciepła.",
    rows: [
      { label: "Terminy", before: "Arkusz.", after: "Baza urządzeń i zasady." },
      { label: "Klienci", before: "Zapominają.", after: "Przypomnienie z propozycją terminu." },
      { label: "Rozliczenia", before: "Część wizyt bez faktury.", after: "Według zasad umowy." },
      { label: "Wiedza", before: "Brak.", after: "Raport utraconych przeglądów." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najwięcej pracy wymaga uporządkowanie bazy urządzeń.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, gdzie są dane o urządzeniach i umowach.", fromYou: "Dostęp do arkuszy i umów." },
      { title: "Baza i zasady", duration: "1–2 tygodnie", body: "Budujemy bazę urządzeń i ustalamy zasady terminów i przypomnień.", fromYou: "Weryfikacja danych." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływy i testujemy je na jednej grupie klientów.", fromYou: "Osoba z biura oceniająca wiadomości." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich klientów i rozwijamy raporty.", fromYou: "Informacja o nowych umowach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od przypomnień dla klientów.",
    items: [
      { name: "Przypomnienia", description: "Dla firm, które chcą, żeby przeglądy nie umykały.", includes: ["Baza urządzeń", "Zasady terminów", "Przypomnienia", "Wybór terminu przez klienta"] },
      { name: "Przeglądy i grafik", description: "Dla firm z dużą liczbą przeglądów.", includes: ["Wszystko z wariantu Przypomnienia", "Wizyty w grafiku", "Następny termin z protokołu", "Rozkład w roku"] },
      { name: "Umowy serwisowe", description: "Dla firm z klientami firmowymi.", includes: ["Wszystko z wariantu Przeglądy i grafik", "Rozliczenia umów", "Raport przeglądów", "Raport dla klienta firmowego"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i urządzeń,",
      "stan danych o urządzeniach,",
      "rodzaje umów serwisowych,",
      "kanały komunikacji,",
      "integracja z grafikiem i programem do faktur.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędna data w bazie i przypomnienie w złym terminie.", mitigation: "Dane weryfikujemy przy imporcie, a klient może poprawić termin." },
      { risk: "Klient odbierze przypomnienia jako nachalne.", mitigation: "Treści i częstotliwość ustala firma, a klient może zrezygnować." },
      { risk: "Przegląd wymagany przepisami zostanie pominięty.", mitigation: "Lista przeglądów zaległych trafia do biura, które kontaktuje się z klientem." },
      { risk: "Kumulacja przeglądów w sezonie.", mitigation: "System proponuje terminy z wyprzedzeniem, rozkładając pracę w czasie." },
    ],
  },
  faq: [
    { question: "Skąd system wie, kiedy jest przegląd?", answer: "Z bazy urządzeń: daty montażu, ostatniego przeglądu i zasad z umowy lub wymagań producenta." },
    { question: "Czy klient może sam wybrać termin?", answer: "Tak, spośród terminów zaproponowanych przez system." },
    { question: "Czy obsłużycie przeglądy wymagane przepisami?", answer: "Pilnujemy terminów i dokumentacji. Zakres przeglądu i wymagania przepisów określa firma." },
    { question: "Czy rozliczycie umowy abonamentowe?", answer: "Tak, według zasad umowy: abonament, pakiet wizyt albo płatność za przegląd." },
    { question: "Czy przeniesiecie dane z naszych arkuszy?", answer: "Tak. Import i uporządkowanie danych to część wdrożenia." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["umawianie-wizyt", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["airtable", "google-workspace", "n8n"],
  relatedArticleSlugs: ["umowy-serwisowe", "co-zautomatyzowac-w-firmie-serwisowej", "airtable-w-praktyce-zastosowania"],
};
