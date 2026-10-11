import type { IndustryPageContent } from "../types";

export const firmySzkolenioweTrenerzy: IndustryPageContent = {
  industrySlug: "firmy-szkoleniowe",
  subSlug: "trenerzy-i-rozliczenia",
  name: "Trenerzy i rozliczenia",
  excerpt: "Dostępność trenerów, potwierdzenia szkoleń, umowy, materiały, rozliczenia według stawek i faktury lub rachunki trenerów w jednym miejscu.",
  metaTitle: "Rozliczenia trenerów i współpraca z trenerami",
  metaDescription:
    "Automatyzujemy współpracę z trenerami: dostępność, potwierdzenia szkoleń, umowy, materiały, rozliczenia według stawek i faktury lub rachunki trenerów.",
  primaryKeyword: "rozliczenia trenerów",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy szkoleniowe: trenerzy",
    title: "Trenerzy potwierdzeni, rozliczeni i poinformowani bez telefonów",
    lead: "Firma współpracuje z kilkunastoma lub kilkudziesięcioma trenerami. Każdy ma inną dostępność, inne stawki, inny rodzaj umowy. Opiekun dzwoni, żeby potwierdzić termin, wysyła listę uczestników, a na koniec miesiąca ktoś liczy w arkuszu, ile należy się każdemu trenerowi. Automatyzujemy współpracę z trenerami: dostępność, potwierdzenia, informacje i rozliczenia działają w jednym miejscu.",
    bullets: [
      "Dostępność trenerów zgłaszana w jednym miejscu",
      "Potwierdzenia szkoleń i informacje dla trenerów",
      "Rozliczenia według stawek i porównanie z fakturami",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy szkoleniowe współpracujące z wieloma trenerami" },
    { label: "Co automatyzujemy", value: "Dostępność, potwierdzenia, umowy, materiały, rozliczenia, faktury" },
    { label: "Narzędzia", value: "Rejestr trenerów, kalendarze, poczta, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Rozliczenia zatwierdza osoba odpowiedzialna" },
  ],
  symptoms: {
    title: "Kiedy współpracę z trenerami warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, koordynacja trenerów zabiera dużo czasu.",
    items: [
      "Dostępność trenerów zbiera się telefonicznie i mailowo.",
      "Trener dowiaduje się o szczegółach szkolenia w ostatniej chwili.",
      "Umowy z trenerami powstają przez kopiowanie poprzednich.",
      "Rozliczenia trenerów liczy się w arkuszu.",
      "Faktury i rachunki trenerów trudno porównać z rozliczeniem.",
      "Nie wiadomo, którzy trenerzy mają najlepsze oceny.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja współpracy z trenerami",
    paragraphs: [
      "Każdy trener ma w rejestrze kartę: tematy, stawki, rodzaj umowy, dane do rozliczeń, oceny. Trenerzy zgłaszają dostępność przez prosty formularz lub kalendarz. Opiekun planujący szkolenie widzi, którzy trenerzy prowadzący dany temat są dostępni.",
      "Po wyborze trener dostaje prośbę o potwierdzenie, a po potwierdzeniu komplet informacji: termin, sala lub link, lista uczestników, wyniki analizy potrzeb przy szkoleniach zamkniętych. Umowa na szkolenie może powstać z szablonu. Przed szkoleniem trener dostaje przypomnienie, a po szkoleniu podsumowanie ankiet.",
      "Na koniec miesiąca system przygotowuje rozliczenie każdego trenera według stawek i przeprowadzonych szkoleń. Osoba odpowiedzialna zatwierdza je, trener dostaje zestawienie, a jego faktura lub rachunek, także z KSeF, jest porównywana z rozliczeniem.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja",
    lead: "Zakres dopasowujemy do modelu współpracy z trenerami.",
    items: [
      { title: "Rejestr trenerów", body: "Tematy, stawki, umowy, oceny." },
      { title: "Dostępność", body: "Zgłaszana przez formularz lub kalendarz." },
      { title: "Potwierdzenia", body: "Prośba i potwierdzenie szkolenia." },
      { title: "Informacje dla trenera", body: "Termin, sala, uczestnicy, analiza potrzeb." },
      { title: "Umowy z szablonu", body: "Dla każdego szkolenia lub okresu." },
      { title: "Rozliczenia", body: "Według stawek, do zatwierdzenia." },
      { title: "Faktury i rachunki", body: "Porównanie z rozliczeniem, także z KSeF." },
      { title: "Oceny trenerów", body: "Z ankiet poszkoleniowych." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od dostępności do rozliczenia.",
    items: [
      {
        title: "Nowe szkolenie",
        trigger: "Opiekun planuje szkolenie",
        steps: ["Lista dostępnych trenerów dla tematu", "Prośba o potwierdzenie", "Komplet informacji po potwierdzeniu"],
        result: "Trener przygotowany, bez telefonów.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu",
        steps: ["Rozliczenia według stawek", "Zatwierdzenie i zestawienia dla trenerów", "Porównanie z fakturami"],
        result: "Trenerzy rozliczeni na czas.",
      },
    ],
  },
  example: {
    title: "Współpraca z trenerami przed i po automatyzacji",
    lead: "Przykład firmy z kilkudziesięcioma trenerami współpracującymi.",
    rows: [
      { label: "Dostępność", before: "Telefony.", after: "Formularz." },
      { label: "Informacje", before: "W ostatniej chwili.", after: "Po potwierdzeniu." },
      { label: "Rozliczenia", before: "Arkusz.", after: "Według stawek." },
      { label: "Faktury", before: "Ręczne porównanie.", after: "Automatyczne porównanie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru trenerów i dostępności.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak współpracujecie z trenerami i jak ich rozliczacie.", fromYou: "Lista trenerów i zasady rozliczeń." },
      { title: "Rejestr i zasady", duration: "1–2 tygodnie", body: "Budujemy rejestr i zapisujemy zasady rozliczeń.", fromYou: "Weryfikacja danych." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Testujemy na jednym miesiącu równolegle z obecnym sposobem.", fromYou: "Osoba porównująca rozliczenia." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich trenerów.", fromYou: "Informacja o nowych trenerach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od dostępności i potwierdzeń.",
    items: [
      { name: "Koordynacja", description: "Dla firm, które chcą skończyć z telefonami.", includes: ["Rejestr trenerów", "Dostępność", "Potwierdzenia", "Informacje dla trenera"] },
      { name: "Rozliczenia", description: "Dla firm z wieloma trenerami.", includes: ["Wszystko z wariantu Koordynacja", "Rozliczenia według stawek", "Zestawienia dla trenerów", "Porównanie z fakturami"] },
      { name: "Pełna współpraca", description: "Dla firm, które chcą zarządzać jakością.", includes: ["Wszystko z wariantu Rozliczenia", "Umowy z szablonu", "Oceny trenerów", "Raport dla właściciela"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba trenerów i szkoleń,",
      "modele umów i stawek,",
      "integracja z programem do faktur i KSeF,",
      "szablony umów,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędne rozliczenie trenera.", mitigation: "Rozliczenie zatwierdza osoba odpowiedzialna, a trener widzi szczegóły." },
      { risk: "Trener nie potwierdzi w czasie.", mitigation: "Przypomnienie i informacja dla opiekuna." },
      { risk: "Dane trenerów w niewłaściwych rękach.", mitigation: "Dostęp do danych rozliczeniowych tylko dla osób, które ich potrzebują." },
      { risk: "Ocena trenera na podstawie małej liczby ankiet.", mitigation: "Raport pokazuje liczbę ankiet obok średniej." },
    ],
  },
  faq: [
    { question: "Czy trenerzy muszą mieć konto w systemie?", answer: "Nie. Wystarczy formularz dostępności i wiadomości e-mail." },
    { question: "Czy rozliczenia uwzględnią różne stawki?", answer: "Tak, według tematu, formy i rodzaju umowy." },
    { question: "Czy faktury trenerów trafią z KSeF?", answer: "Tak, faktury z KSeF mogą być porównywane z rozliczeniem." },
    { question: "Czy umowy mogą powstawać automatycznie?", answer: "Tak, z szablonu, do sprawdzenia przed podpisaniem." },
    { question: "Czy zobaczymy oceny trenerów?", answer: "Tak, z ankiet poszkoleniowych, z liczbą odpowiedzi." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-dla-hr", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["obieg-umow", "obieg-faktur-kosztowych", "raporty-finansowe"],
  relatedToolSlugs: ["airtable", "ksef", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
