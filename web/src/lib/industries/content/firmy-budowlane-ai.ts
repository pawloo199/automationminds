import type { IndustryPageContent } from "../types";

export const firmyBudowlaneAi: IndustryPageContent = {
  industrySlug: "firmy-budowlane",
  subSlug: "ai",
  name: "AI w firmie budowlanej",
  excerpt: "AI w budownictwie: odczyt faktur i dokumentów podwykonawców, raporty z notatek kierownika, analiza specyfikacji i przedmiarów, asystent wiedzy o budowach.",
  metaTitle: "AI w firmie budowlanej: dokumenty, raporty i oferty",
  metaDescription:
    "Wdrażamy AI w firmach budowlanych: odczyt faktur i dokumentów, raporty z notatek kierownika, analiza specyfikacji przetargowych i asystent wiedzy.",
  primaryKeyword: "AI w firmie budowlanej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sztuczna inteligencja w budownictwie",
    title: "AI w firmie budowlanej: mniej czytania i przepisywania, więcej budowania",
    lead: "Firma budowlana tonie w dokumentach: specyfikacje przetargowe, przedmiary, umowy, faktury, protokoły, korespondencja z inwestorem. Kierownicy notują w biegu, a raporty piszą wieczorem. To rodzaj pracy, w którym AI daje dziś wyraźny efekt. Pomagamy firmom budowlanym wdrożyć AI tam, gdzie oszczędza czas, z kontrolą nad danymi i jasnym podziałem odpowiedzialności.",
    bullets: [
      "Faktury i dokumenty odczytane bez przepisywania",
      "Raporty z notatek głosowych kierownika",
      "Specyfikacje przetargowe streszczone przed decyzją",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Generalni wykonawcy, firmy wykonawcze, deweloperzy" },
    { label: "Co robimy", value: "AI w dokumentach, raportach i ofertach, zasady i szkolenia" },
    { label: "Bezpieczeństwo", value: "Dane w UE, bez trenowania modeli na danych, uprawnienia" },
    { label: "Zasada", value: "AI przygotowuje, kierownik i biuro decydują" },
  ],
  symptoms: {
    title: "Kiedy firma budowlana powinna zająć się AI",
    lead: "Jeśli rozpoznajecie u siebie któreś z tych sytuacji, AI może przejąć sporą część pracy z dokumentami.",
    items: [
      "Specyfikacje przetargowe mają setki stron, a decyzję o udziale trzeba podjąć szybko.",
      "Biuro przepisuje faktury podwykonawców i dostawców do arkuszy kosztów.",
      "Kierownicy piszą raporty wieczorem, a część informacji ginie.",
      "Korespondencja z inwestorem jest długa, a ustalenia trudno odnaleźć.",
      "Zespół korzysta z czatów AI na prywatnych kontach.",
      "Chcecie prowadzić więcej budów bez zatrudniania w biurze.",
    ],
  },
  intro: {
    title: "AI w budownictwie na trzech poziomach",
    paragraphs: [
      "Pierwszy poziom to narzędzia AI dla zespołu: czat z modelem językowym na koncie firmowym, z zasadami i szkoleniem. Biuro szybciej pisze pisma i oferty, kierownicy porządkują notatki, a firma wie, gdzie trafiają dane.",
      "Drugi poziom to AI w procesach. Model odczytuje faktury i przypisuje je do budów i pozycji budżetu. Zamienia notatki głosowe kierownika na raport dzienny. Streszcza specyfikacje przetargowe, wskazując wymagania, terminy, kary i ryzyka, jako materiał dla zarządu.",
      "Trzeci poziom to asystenci i agenci AI. Asystent wiedzy przeszukuje specyfikacje, umowy i protokoły budowy i odpowiada na pytania kierownika ze wskazaniem źródła. Agent może sprawdzać kompletność dokumentów podwykonawców i przypominać o brakach. Decyzje techniczne i finansowe zawsze należą do ludzi.",
    ],
  },
  scope: {
    title: "Jak AI pomaga w firmach budowlanych",
    lead: "Zastosowania, które wdrażamy najczęściej. Każde działa jako wsparcie, a decyzje należą do ludzi.",
    items: [
      { title: "Odczyt faktur", body: "Dane z faktur przypisane do budowy i pozycji budżetu." },
      { title: "Raporty z notatek", body: "Notatka głosowa kierownika zamieniona na raport dzienny." },
      { title: "Streszczenia specyfikacji", body: "Wymagania, terminy, kary i ryzyka z dokumentów przetargowych." },
      { title: "Porównanie ofert dostawców", body: "Ceny i warunki z kilku ofert w jednym zestawieniu." },
      { title: "Asystent wiedzy", body: "Odpowiedzi z umów, specyfikacji i protokołów, ze źródłem." },
      { title: "Kontrola dokumentów", body: "Sprawdzenie, czy dokumenty podwykonawcy są kompletne." },
      { title: "Pisma i korespondencja", body: "Szkice pism do inwestora i podwykonawców." },
      { title: "Zasady i szkolenia", body: "Polityka korzystania z AI i warsztaty dla biura i kierowników." },
    ],
  },
  security: {
    title: "AI a dokumenty budów",
    lead: "Budowy to umowy, dane inwestorów i pracowników, dokumentacja projektowa. Wdrażamy AI tak, żeby były pod kontrolą.",
    items: [
      { title: "Konta firmowe zamiast prywatnych", body: "Zespół korzysta z AI na kontach firmy, w planach, w których dane nie służą do trenowania modeli." },
      { title: "Minimum danych", body: "Do modelu trafia tylko to, co potrzebne do zadania." },
      { title: "Dokumentacja projektowa", body: "Projekty i dokumenty inwestora przetwarzamy zgodnie z umową i zasadami poufności." },
      { title: "Dane w UE lub u was", body: "Przepływy z AI mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "Jasne zasady", body: "Pisemne zasady korzystania z AI: co wolno przesyłać, jak sprawdzać wyniki, kto odpowiada za treść." },
      { title: "Weryfikacja przez człowieka", body: "Decyzje o udziale w przetargu, akceptacje faktur i pisma do inwestora zatwierdza człowiek." },
    ],
  },
  comparison: {
    title: "Prywatne konta AI czy AI wdrożone w firmie",
    lead: "Różnica nie polega na jakości modelu, tylko na kontroli nad danymi i wpływie na procesy.",
    columns: ["AI wdrożone w firmie", "Prywatne konta zespołu"],
    rows: [
      { label: "Gdzie trafiają dane", values: ["Ustalone miejsce, umowa z dostawcą", "Zależy od ustawień każdego konta"] },
      { label: "Trenowanie modeli na danych", values: ["Wyłączone w planach firmowych", "Często włączone domyślnie w planach prywatnych"] },
      { label: "Faktury i koszty", values: ["Trafiają do rejestru kosztów budowy", "Zostają w oknie czatu"] },
      { label: "Wiedza o budowach", values: ["Z dokumentów firmy, ze źródłem", "Ogólna wiedza modelu, bez źródła"] },
      { label: "Wpływ na procesy", values: ["AI w kosztach, raportach, przetargach", "Tylko praca w oknie czatu"] },
    ],
    note: "Porównanie jest uproszczone. Ustawienia narzędzi AI zmieniają się, dlatego weryfikujemy je przy każdym wdrożeniu.",
  },
  example: {
    title: "Praca z AI przed i po wdrożeniu",
    lead: "Przykład firmy wykonawczej startującej w przetargach i prowadzącej kilka budów.",
    rows: [
      { label: "Specyfikacje", before: "Czytane w całości przed decyzją.", after: "Streszczenie z wymaganiami i ryzykami." },
      { label: "Faktury", before: "Przepisywane do arkusza.", after: "Odczyt i przypisanie do budowy." },
      { label: "Raporty", before: "Pisane wieczorem.", after: "Z notatki głosowej." },
      { label: "Pytania kierowników", before: "Szukanie w dokumentach.", after: "Asystent ze źródłem." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak wdrażamy AI w firmie budowlanej",
    lead: "Zaczynamy od zasad i bezpiecznych narzędzi, a potem dokładamy AI do dokumentów, raportów i przetargów.",
    phases: [
      { title: "Przegląd i zasady", duration: "kilka dni", body: "Sprawdzamy, jak zespół korzysta dziś z AI i gdzie traci najwięcej czasu, i przygotowujemy zasady.", fromYou: "Rozmowa z zarządem, biurem i kierownikiem." },
      { title: "Narzędzia i szkolenie", duration: "1–2 tygodnie", body: "Konfigurujemy konta firmowe i prowadzimy warsztat na prawdziwych dokumentach.", fromYou: "Udział zespołu w warsztacie." },
      { title: "AI w procesach", duration: "zwykle 3–6 tygodni", body: "Budujemy wybrane zastosowania: odczyt faktur, raporty, streszczenia specyfikacji. Testujemy je na jednej budowie lub przetargu.", fromYou: "Osoby oceniające wyniki." },
      { title: "Opieka i rozwój", duration: "stale", body: "Pilnujemy jakości i kosztów, aktualizujemy zasady i dokładamy kolejne zastosowania.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty wdrożenia AI",
    lead: "Wiele firm zaczyna od bezpiecznego startu i po kilku tygodniach dokłada kolejne zastosowania.",
    items: [
      { name: "Bezpieczny start", description: "Dla firm, które chcą uporządkować korzystanie z AI.", includes: ["Zasady korzystania z AI", "Konfiguracja kont firmowych", "Warsztat dla zespołu", "Biblioteka sprawdzonych poleceń"] },
      { name: "AI w dokumentach", description: "Dla firm z dużą liczbą faktur i dokumentów.", includes: ["Wszystko z wariantu Bezpieczny start", "Odczyt faktur", "Kontrola dokumentów podwykonawców", "Raporty z notatek", "Przepływy działające na serwerze w UE"] },
      { name: "AI w przetargach i wiedzy", description: "Dla firm startujących w przetargach.", includes: ["Streszczenia specyfikacji", "Asystent wiedzy o budowach", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba osób korzystających z narzędzi AI,",
      "liczba faktur, dokumentów i budów,",
      "integracja z programem do faktur i rejestrem kosztów,",
      "zakres asystentów i agentów,",
      "zakres szkoleń i opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Granice AI w firmie budowlanej",
    items: [
      { risk: "Streszczenie specyfikacji pominie ważny wymóg.", mitigation: "Streszczenie to materiał roboczy. Decyzję o udziale w przetargu podejmuje zarząd po lekturze dokumentów." },
      { risk: "Błędnie odczytana faktura.", mitigation: "Odczyt sprawdza osoba z biura, a niepewne pola są oznaczone." },
      { risk: "Raport z AI doda coś, czego nie było.", mitigation: "Raport powstaje z notatki kierownika, który go zatwierdza." },
      { risk: "Zmiany w narzędziach AI.", mitigation: "Aktualizujemy zasady i konfigurację, gdy zmieniają się ustawienia narzędzi lub modele." },
    ],
  },
  faq: [
    { question: "Czy AI przygotuje kosztorys?", answer: "Nie wdrażamy takich rozwiązań. AI może pomóc w przeglądzie przedmiaru i porównaniu ofert dostawców, ale kosztorys przygotowuje kosztorysant." },
    { question: "Czy AI przeczyta specyfikację przetargową?", answer: "Może ją streścić i wskazać wymagania, terminy i kary. Dokumenty i tak powinna przejrzeć osoba podejmująca decyzję." },
    { question: "Czy AI odczyta faktury podwykonawców?", answer: "Tak, większość faktur w PDF i skanów dobrej jakości. Faktury z KSeF mają dane w formie, którą łatwo przetworzyć." },
    { question: "Czy kierownik może dyktować raport?", answer: "Tak. Notatka głosowa zamieniana jest na raport, który kierownik sprawdza i zatwierdza." },
    { question: "Czy prowadzicie szkolenia z AI dla firm budowlanych?", answer: "Tak. Warsztaty prowadzimy na dokumentach z praktyki firmy: specyfikacje, faktury, raporty, pisma i bezpieczeństwo danych." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "asystent-ai-na-firmowej-wiedzy", "szkolenia-ai-dla-zespolow", "agenci-ai"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["ai-dla-kierownika-budowy", "cyfryzacja-firmy-budowlanej", "ai-w-codziennej-pracy-zespolu"],
};
