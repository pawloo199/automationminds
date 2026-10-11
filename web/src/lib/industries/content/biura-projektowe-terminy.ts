import type { IndustryPageContent } from "../types";

export const biuraProjektoweTerminy: IndustryPageContent = {
  industrySlug: "biura-projektowe",
  subSlug: "projekty-i-terminy",
  name: "Projekty, etapy i terminy",
  excerpt: "Rejestr projektów z etapami, terminami i zadaniami branżystów, przypomnienia o terminach, obciążenie zespołu i status dla kierownika i inwestora.",
  metaTitle: "Zarządzanie projektami w biurze projektowym: terminy",
  metaDescription:
    "Automatyzujemy zarządzanie projektami w biurze projektowym: etapy, terminy, zadania branżystów, przypomnienia, obciążenie zespołu i status dla inwestora.",
  primaryKeyword: "zarządzanie projektami w biurze projektowym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura projektowe: projekty i terminy",
    title: "Terminy projektów i branż w jednym harmonogramie, a nie w kalendarzach",
    lead: "Każdy projekt ma kilka etapów, kilku projektantów, kilka branż i kilkanaście terminów: przekazanie koncepcji, materiały od branżystów, złożenie wniosku, odpowiedzi gestorów. Gdy terminy są w kalendarzach poszczególnych osób, kierownik projektu dowiaduje się o opóźnieniu w ostatniej chwili. Automatyzujemy zarządzanie terminami: projekt ma harmonogram z etapami i zadaniami, a przypomnienia trafiają do właściwych osób z wyprzedzeniem.",
    bullets: [
      "Harmonogram projektu z etapami i zadaniami branż",
      "Przypomnienia o terminach dla projektantów i branżystów",
      "Obciążenie zespołu i status dla inwestora",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura projektowe i pracownie prowadzące wiele projektów jednocześnie" },
    { label: "Co automatyzujemy", value: "Etapy, terminy, zadania, przypomnienia, obciążenie, status" },
    { label: "Narzędzia", value: "Rejestr projektów, kalendarze, poczta, n8n" },
    { label: "Zasada", value: "Harmonogram ustala kierownik projektu" },
  ],
  symptoms: {
    title: "Kiedy terminy warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, opóźnienia wychodzą za późno.",
    items: [
      "Terminy są w kalendarzach poszczególnych projektantów.",
      "Branżyści przekazują materiały z opóźnieniem, a nikt im nie przypomina.",
      "Kierownik projektu dowiaduje się o opóźnieniu w dniu terminu.",
      "Nie wiadomo, kto w zespole ma czas na nowy projekt.",
      "Inwestor dzwoni z pytaniem o status.",
      "Etapy projektu są różnie nazywane w różnych projektach.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja terminów",
    paragraphs: [
      "Każdy projekt ma w rejestrze harmonogram według szablonu dla danego rodzaju projektu: etapy, zadania, osoby odpowiedzialne, branżyści, terminy. Kierownik projektu dopasowuje harmonogram, a terminy trafiają do kalendarzy osób odpowiedzialnych.",
      "Przed terminem osoby odpowiedzialne dostają przypomnienie, a branżyści zewnętrzni prośbę o przekazanie materiałów. Gdy zadanie jest zagrożone, kierownik projektu dostaje informację wcześniej. Zakończenie etapu uruchamia kolejne kroki: przekazanie dokumentacji, fakturę za etap, informację dla inwestora.",
      "Widok obciążenia pokazuje, kto w zespole ile ma zadań i terminów w najbliższych tygodniach. To pomaga planować nowe projekty. Inwestor może dostawać regularną informację o statusie projektu bez dzwonienia.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja terminów",
    lead: "Zakres dopasowujemy do rodzajów projektów i sposobu pracy biura.",
    items: [
      { title: "Rejestr projektów", body: "Wszystkie projekty z etapami i statusem." },
      { title: "Szablony harmonogramów", body: "Etapy i zadania według rodzaju projektu." },
      { title: "Zadania branżystów", body: "Terminy przekazania materiałów od branż." },
      { title: "Przypomnienia", body: "Dla projektantów i branżystów z wyprzedzeniem." },
      { title: "Zagrożone terminy", body: "Informacja dla kierownika projektu." },
      { title: "Kolejne kroki", body: "Zakończenie etapu uruchamia przekazanie i fakturę." },
      { title: "Obciążenie zespołu", body: "Zadania i terminy w najbliższych tygodniach." },
      { title: "Status dla inwestora", body: "Regularna informacja o postępie." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od harmonogramu do zakończenia etapu.",
    items: [
      {
        title: "Materiały branżowe",
        trigger: "Za tydzień termin przekazania projektu instalacji",
        steps: ["Przypomnienie dla branżysty", "Informacja dla kierownika, jeśli brak potwierdzenia", "Materiały w rejestrze dokumentacji po przekazaniu"],
        result: "Kierownik wie o opóźnieniu z wyprzedzeniem.",
      },
      {
        title: "Koniec etapu",
        trigger: "Kierownik zamyka etap projektu budowlanego",
        steps: ["Przekazanie dokumentacji inwestorowi", "Faktura za etap do sprawdzenia", "Kolejny etap w harmonogramie"],
        result: "Kolejne kroki bez pamiętania o nich.",
      },
    ],
  },
  example: {
    title: "Terminy przed i po automatyzacji",
    lead: "Przykład biura prowadzącego kilkanaście projektów z kilkoma branżami zewnętrznymi.",
    rows: [
      { label: "Terminy", before: "Kalendarze osób.", after: "Harmonogram projektu." },
      { label: "Branżyści", before: "Przypominani telefonicznie.", after: "Automatyczne przypomnienia." },
      { label: "Opóźnienia", before: "W dniu terminu.", after: "Z wyprzedzeniem." },
      { label: "Obciążenie", before: "Nieznane.", after: "Widok zespołu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru projektów i szablonów harmonogramów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś planujecie projekty i jakie są typowe etapy.", fromYou: "Rozmowa z kierownikami projektów." },
      { title: "Projekt", duration: "około tygodnia", body: "Przygotowujemy rejestr, szablony i zasady przypomnień.", fromYou: "Akceptacja szablonów." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Uruchamiamy rejestr na kilku projektach.", fromYou: "Kierownik projektu w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie projekty i rozwijamy raporty.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru i przypomnień.",
    items: [
      { name: "Rejestr i przypomnienia", description: "Dla biur, które chcą pilnować terminów.", includes: ["Rejestr projektów", "Szablony harmonogramów", "Przypomnienia", "Zagrożone terminy"] },
      { name: "Projekty i branże", description: "Dla biur współpracujących z branżystami.", includes: ["Wszystko z wariantu Rejestr i przypomnienia", "Zadania branżystów", "Kolejne kroki", "Status dla inwestora"] },
      { name: "Planowanie", description: "Dla biur, które chcą planować obciążenie.", includes: ["Wszystko z wariantu Projekty i branże", "Obciążenie zespołu", "Raport projektów", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba projektów i osób,",
      "liczba branżystów zewnętrznych,",
      "szablony harmonogramów,",
      "integracja z kalendarzami i rejestrem dokumentacji,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Harmonogram nie odpowiada rzeczywistości.", mitigation: "Kierownik projektu dopasowuje harmonogram, a zmiany terminów są łatwe." },
      { risk: "Za dużo przypomnień.", mitigation: "Częstotliwość i odbiorców ustalamy z zespołem." },
      { risk: "Branżysta nie potwierdzi przypomnienia.", mitigation: "Informacja dla kierownika projektu." },
      { risk: "Status dla inwestora przed sprawdzeniem.", mitigation: "Kierownik decyduje, które informacje trafiają do inwestora." },
    ],
  },
  faq: [
    { question: "Czy potrzebujemy programu do zarządzania projektami?", answer: "Nie zawsze. Często wystarcza rejestr projektów dopasowany do biura, połączony z kalendarzami." },
    { question: "Czy branżyści muszą mieć konto?", answer: "Nie. Dostają przypomnienia mailem i link do przekazania materiałów." },
    { question: "Czy terminy trafią do naszych kalendarzy?", answer: "Tak, do kalendarzy Google lub Microsoft, z których korzystacie." },
    { question: "Czy inwestor zobaczy status?", answer: "Tak, w formie wiadomości lub prostego widoku, w formie ustalonej przez kierownika projektu." },
    { question: "Czy zobaczymy, kto ma czas na nowy projekt?", answer: "Tak, widok obciążenia pokazuje zadania i terminy w najbliższych tygodniach." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "projektowanie-baz-danych", "integracje-systemow"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedToolSlugs: ["airtable", "microsoft-365", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
