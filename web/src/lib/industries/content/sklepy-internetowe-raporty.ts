import type { IndustryPageContent } from "../types";

export const sklepyInternetoweRaporty: IndustryPageContent = {
  industrySlug: "sklepy-internetowe",
  subSlug: "raporty-i-marza",
  name: "Raporty sprzedaży i marża",
  excerpt: "Sprzedaż ze wszystkich kanałów w jednym raporcie, marża po prowizjach, reklamach, wysyłkach i zwrotach, według produktów, kategorii i kanałów.",
  metaTitle: "Raporty sprzedaży sklepu internetowego i marża",
  metaDescription:
    "Automatyzujemy raporty sprzedaży sklepu internetowego: wszystkie kanały w jednym miejscu, marża po prowizjach, reklamach, wysyłkach i zwrotach.",
  primaryKeyword: "raporty sprzedaży sklepu internetowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sklepy internetowe: raporty i marża",
    title: "Na czym sklep zarabia po wszystkich kosztach, a nie tylko po przychodach",
    lead: "Panel sklepu pokazuje przychody, panel marketplace swoje, panel reklam swoje, a zwroty i koszty wysyłek są jeszcze gdzie indziej. Żeby policzyć, na których produktach i kanałach sklep zarabia po wszystkich kosztach, ktoś musi składać arkusz z kilku źródeł. Automatyzujemy raporty: dane ze wszystkich kanałów trafiają do jednego miejsca, a marża jest liczona po prowizjach, reklamach, wysyłkach i zwrotach.",
    bullets: [
      "Sprzedaż ze wszystkich kanałów w jednym raporcie",
      "Marża po prowizjach, reklamach, wysyłkach i zwrotach",
      "Raport tygodniowy dla właściciela",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Sklepy sprzedające w kilku kanałach i inwestujące w reklamy" },
    { label: "Co automatyzujemy", value: "Sprzedaż, koszty, marża, kanały, produkty, raporty cykliczne" },
    { label: "Narzędzia", value: "Platforma sklepu, marketplace, panele reklam, arkusze, n8n" },
    { label: "Zasada", value: "Wnioski i decyzje należą do właściciela" },
  ],
  symptoms: {
    title: "Kiedy raporty warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, decyzje zapadają na niepełnych danych.",
    items: [
      "Dane o sprzedaży są w kilku panelach.",
      "Marżę liczy się raz na miesiąc albo wcale.",
      "Prowizje marketplace i koszty reklam nie są przypisane do produktów.",
      "Zwroty nie są uwzględniane w wynikach produktów.",
      "Raport dla właściciela składa się ręcznie.",
      "Nie wiadomo, który kanał sprzedaży jest najbardziej opłacalny.",
    ],
  },
  intro: {
    title: "Jak działają raporty sprzedaży i marży",
    paragraphs: [
      "Dane z platformy sklepu, marketplace, paneli reklamowych, przewoźników i rejestru zwrotów trafiają codziennie do jednego miejsca. Każde zamówienie dostaje swoje koszty: cenę zakupu towaru, prowizję kanału, koszt wysyłki, koszt płatności, a jeśli to możliwe, przypisany koszt reklamy.",
      "Na tej podstawie raport pokazuje marżę według produktów, kategorii, kanałów i kampanii. Zwroty są odejmowane od wyników produktów, które zostały zwrócone. Właściciel widzi, które produkty i kanały zarabiają, a które sprzedają się dobrze, ale po wszystkich kosztach przynoszą stratę.",
      "Raport tygodniowy trafia do właściciela automatycznie, z najważniejszymi zmianami. AI może przygotować krótki komentarz do zmian jako punkt wyjścia do analizy, ale wnioski i decyzje należą do ludzi.",
    ],
  },
  scope: {
    title: "Co obejmują raporty",
    lead: "Zakres dopasowujemy do kanałów i źródeł kosztów.",
    items: [
      { title: "Sprzedaż", body: "Wszystkie kanały w jednym miejscu." },
      { title: "Koszty towaru", body: "Cena zakupu przypisana do produktów." },
      { title: "Prowizje i opłaty", body: "Marketplace, płatności, inne opłaty kanałów." },
      { title: "Wysyłki", body: "Koszt wysyłki przypisany do zamówień." },
      { title: "Reklamy", body: "Koszt kampanii przypisany do kanałów i produktów, gdzie to możliwe." },
      { title: "Zwroty", body: "Odjęte od wyników produktów." },
      { title: "Marża", body: "Według produktów, kategorii, kanałów." },
      { title: "Raport cykliczny", body: "Tygodniowy i miesięczny, z komentarzem do sprawdzenia." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od danych w panelach do decyzji.",
    items: [
      {
        title: "Codzienna aktualizacja",
        trigger: "Każdej nocy",
        steps: ["Pobranie danych z kanałów, reklam i zwrotów", "Przypisanie kosztów do zamówień", "Aktualizacja raportów"],
        result: "Dane aktualne każdego ranka.",
      },
      {
        title: "Raport tygodniowy",
        trigger: "Poniedziałek rano",
        steps: ["Zestawienie marży i zmian", "Krótki komentarz z AI do sprawdzenia", "Wysyłka do właściciela"],
        result: "Właściciel zaczyna tydzień od danych, a nie od składania arkusza.",
      },
    ],
  },
  example: {
    title: "Raporty przed i po automatyzacji",
    lead: "Przykład sklepu sprzedającego w trzech kanałach i prowadzącego kampanie reklamowe.",
    rows: [
      { label: "Dane", before: "Kilka paneli.", after: "Jedno miejsce." },
      { label: "Marża", before: "Szacowana raz na miesiąc.", after: "Po wszystkich kosztach, na bieżąco." },
      { label: "Kanały", before: "Porównanie przychodów.", after: "Porównanie marży." },
      { label: "Raport", before: "Arkusz składany ręcznie.", after: "Automatycznie co tydzień." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym sklepie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od sprzedaży i kosztów towaru, potem dokładamy pozostałe koszty.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy źródła danych i sposób, w jaki dziś liczycie wyniki.", fromYou: "Dostęp do paneli w trybie podglądu." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zasady przypisania kosztów i wygląd raportów.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy pobieranie danych i raporty, porównujemy z obecnymi wynikami.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Pilnujemy połączeń z panelami i rozwijamy raporty.", fromYou: "Uwagi właściciela." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od raportu sprzedaży ze wszystkich kanałów.",
    items: [
      { name: "Sprzedaż", description: "Dla sklepów, które chcą mieć dane w jednym miejscu.", includes: ["Sprzedaż ze wszystkich kanałów", "Koszty towaru", "Raport tygodniowy", "Porównanie kanałów"] },
      { name: "Marża", description: "Dla sklepów, które chcą znać prawdziwy wynik.", includes: ["Wszystko z wariantu Sprzedaż", "Prowizje i opłaty", "Wysyłki", "Zwroty"] },
      { name: "Marża z reklamami", description: "Dla sklepów inwestujących w kampanie.", includes: ["Wszystko z wariantu Marża", "Koszty reklam", "Marża kampanii", "Komentarz z AI"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba kanałów i źródeł danych,",
      "dostępność danych w panelach,",
      "złożoność przypisania kosztów,",
      "zakres raportów,",
      "narzędzie raportowe.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Koszt reklamy przypisany niedokładnie.", mitigation: "Zasady przypisania są jawne, a raport pokazuje, które koszty są szacowane." },
      { risk: "Zmiana API panelu przerwie pobieranie danych.", mitigation: "Monitoring połączeń i powiadomienia o brakach." },
      { risk: "Komentarz z AI wyciągnie błędny wniosek.", mitigation: "Komentarz to punkt wyjścia, a wnioski sprawdza człowiek." },
      { risk: "Różnice z księgowością.", mitigation: "Raport służy do zarządzania, a wyniki finansowe uzgadnia się z księgowością." },
    ],
  },
  faq: [
    { question: "Czy raport zastąpi księgowość?", answer: "Nie. Raport służy do decyzji o produktach i kanałach. Wyniki finansowe prowadzi księgowość." },
    { question: "Czy przypiszecie koszt reklam do produktów?", answer: "Tam, gdzie panel reklamowy udostępnia takie dane. W pozostałych przypadkach koszt jest przypisany do kanału lub kampanii." },
    { question: "W jakim narzędziu będzie raport?", answer: "W narzędziu, z którego korzystacie, np. arkuszu, narzędziu raportowym lub bazie danych." },
    { question: "Jak często aktualizują się dane?", answer: "Zwykle raz dziennie, a w razie potrzeby częściej." },
    { question: "Czy uwzględnicie zwroty?", answer: "Tak, zwroty są odejmowane od wyników produktów." },
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "automatyzacja-marketingu", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedToolSlugs: ["google-workspace", "airtable", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
