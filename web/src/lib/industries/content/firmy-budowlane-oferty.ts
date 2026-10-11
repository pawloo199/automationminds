import type { IndustryPageContent } from "../types";

export const firmyBudowlaneOferty: IndustryPageContent = {
  industrySlug: "firmy-budowlane",
  subSlug: "oferty-i-kosztorysy",
  name: "Zapytania, przetargi i oferty",
  excerpt: "Zapytania inwestorów i przetargi w jednym rejestrze, terminy składania ofert, zapytania do podwykonawców i dostawców, oferty z szablonów.",
  metaTitle: "Oferty budowlane i przetargi: rejestr i automatyzacja",
  metaDescription:
    "Automatyzujemy przygotowanie ofert w firmie budowlanej: rejestr zapytań i przetargów, terminy, zapytania do podwykonawców i dostawców, oferty z szablonów.",
  primaryKeyword: "przygotowanie ofert budowlanych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy budowlane: oferty i przetargi",
    title: "Oferty budowlane na czas, bez gonienia podwykonawców o ceny",
    lead: "Zapytanie od inwestora albo przetarg to kilkaset stron dokumentów i krótki termin. Trzeba zdecydować, czy startować, zebrać ceny od podwykonawców i dostawców, przygotować kosztorys i ofertę. Część zapytań umyka, a część ofert powstaje w ostatniej nocy. Automatyzujemy pracę wokół ofert: zapytania i przetargi trafiają do jednego rejestru z terminami, zapytania do podwykonawców wychodzą z jednego miejsca, a oferta powstaje z szablonu firmy.",
    bullets: [
      "Rejestr zapytań i przetargów z terminami",
      "Zapytania do podwykonawców i dostawców z jednego miejsca",
      "Oferta z szablonu i statusy ofert",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Generalni wykonawcy i firmy wykonawcze składające wiele ofert" },
    { label: "Co automatyzujemy", value: "Rejestr, terminy, zapytania do podwykonawców, porównanie cen, oferty" },
    { label: "Narzędzia", value: "Rejestr, poczta, szablony, model AI, n8n" },
    { label: "Zasada", value: "Kosztorys i cenę ustala firma" },
  ],
  symptoms: {
    title: "Kiedy pracę z ofertami warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, firma traci zlecenia, zanim zacznie budować.",
    items: [
      "Zapytania i przetargi są w skrzynkach różnych osób.",
      "Terminy składania ofert pilnuje się w kalendarzu jednej osoby.",
      "Zapytania do podwykonawców wysyła się ręcznie, każde osobno.",
      "Odpowiedzi podwykonawców przychodzą w różnych formatach i trudno je porównać.",
      "Oferta powstaje od zera w edytorze tekstu.",
      "Nie wiadomo, ile ofert wygrywa firma i dlaczego przegrywa pozostałe.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja ofert",
    paragraphs: [
      "Zapytania inwestorów i ogłoszenia przetargowe trafiają do jednego rejestru: inwestor, zakres, termin składania ofert, wymagania, dokumenty. AI może przygotować streszczenie dokumentów, wskazując zakres, terminy, wymagane doświadczenie i kary, jako materiał do decyzji, czy startować.",
      "Po decyzji o udziale system przygotowuje zapytania do podwykonawców i dostawców według branż i zakresów, z dokumentami i terminem odpowiedzi. Przypomina tym, którzy nie odpowiedzieli. Odpowiedzi trafiają do jednego miejsca, a AI pomaga zestawić ceny i warunki z różnych formatów.",
      "Kosztorysant przygotowuje kosztorys w swoim programie, a oferta powstaje z szablonu firmy z danymi z rejestru. Każda oferta ma status: złożona, wygrana, przegrana z powodem. Zarząd widzi, ile ofert firma składa, ile wygrywa i gdzie traci.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja ofert",
    lead: "Zakres dopasowujemy do rodzaju zleceń i sposobu pracy działu ofert.",
    items: [
      { title: "Rejestr zapytań", body: "Zapytania i przetargi z terminami i dokumentami." },
      { title: "Streszczenia z AI", body: "Zakres, wymagania, terminy i kary jako materiał do decyzji." },
      { title: "Terminy", body: "Przypomnienia o terminach pytań, wizji i składania ofert." },
      { title: "Zapytania do podwykonawców", body: "Wysyłka według branż, z dokumentami i terminem." },
      { title: "Przypomnienia", body: "Dla podwykonawców, którzy nie odpowiedzieli." },
      { title: "Zestawienie cen", body: "Odpowiedzi z różnych formatów w jednym porównaniu." },
      { title: "Oferta z szablonu", body: "Dane z rejestru w dokumencie firmy." },
      { title: "Statusy i raport", body: "Oferty złożone, wygrane i przegrane z powodami." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapytania do złożonej oferty.",
    items: [
      {
        title: "Nowy przetarg",
        trigger: "Ogłoszenie przetargowe trafia do firmy",
        steps: ["Rejestr z terminem i dokumentami", "Streszczenie z wymaganiami i ryzykami", "Decyzja zarządu o udziale"],
        result: "Decyzja w dzień, a nie po tygodniu czytania.",
      },
      {
        title: "Ceny od podwykonawców",
        trigger: "Decyzja o udziale w przetargu",
        steps: ["Zapytania do podwykonawców według branż", "Przypomnienia przed terminem", "Zestawienie odpowiedzi dla kosztorysanta"],
        result: "Kosztorysant ma ceny na czas, w jednym miejscu.",
      },
    ],
  },
  example: {
    title: "Oferty przed i po automatyzacji",
    lead: "Przykład firmy wykonawczej składającej kilkanaście ofert miesięcznie.",
    rows: [
      { label: "Zapytania", before: "W skrzynkach.", after: "W rejestrze z terminami." },
      { label: "Podwykonawcy", before: "Telefony i maile.", after: "Zapytania z jednego miejsca." },
      { label: "Ceny", before: "Różne formaty.", after: "Jedno zestawienie." },
      { label: "Wyniki", before: "Nieznane.", after: "Raport z powodami." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru zapytań i bazy podwykonawców.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś powstają oferty i z kim współpracujecie.", fromYou: "Rozmowa z działem ofert." },
      { title: "Baza i szablony", duration: "1–2 tygodnie", body: "Porządkujemy bazę podwykonawców i dostawców, przygotowujemy szablony.", fromYou: "Weryfikacja bazy." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i testujemy je na bieżących przetargach.", fromYou: "Osoba z działu ofert w teście." },
      { title: "Start i opieka", duration: "stale", body: "Rozwijamy raporty i bazę.", fromYou: "Uwagi działu ofert." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru zapytań i terminów.",
    items: [
      { name: "Rejestr", description: "Dla firm, które chcą, żeby nic nie umykało.", includes: ["Rejestr zapytań i przetargów", "Terminy i przypomnienia", "Statusy ofert", "Raport"] },
      { name: "Rejestr i podwykonawcy", description: "Dla firm zbierających wiele cen.", includes: ["Wszystko z wariantu Rejestr", "Zapytania do podwykonawców", "Przypomnienia", "Zestawienie cen"] },
      { name: "Oferty z AI", description: "Dla firm startujących w wielu przetargach.", includes: ["Wszystko z wariantu Rejestr i podwykonawcy", "Streszczenia dokumentów", "Oferta z szablonu", "Raport przegranych z powodami"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba ofert i przetargów,",
      "liczba podwykonawców i branż,",
      "integracja z programem do kosztorysowania,",
      "zakres wykorzystania AI,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Streszczenie pominie ważny wymóg.", mitigation: "Streszczenie to materiał do decyzji. Dokumenty przegląda osoba odpowiedzialna za ofertę." },
      { risk: "Podwykonawca dostanie niewłaściwe dokumenty.", mitigation: "Zapytania przygotowuje się według branż i zakresów, a dział ofert je zatwierdza." },
      { risk: "Termin umknie.", mitigation: "Przypomnienia z wyprzedzeniem i lista ofert w toku." },
      { risk: "Błędne zestawienie cen.", mitigation: "Zestawienie sprawdza kosztorysant, a oryginały odpowiedzi są przy nim." },
    ],
  },
  faq: [
    { question: "Czy przygotujecie kosztorys?", answer: "Nie. Kosztorys przygotowuje kosztorysant w swoim programie. Automatyzujemy pracę wokół niego." },
    { question: "Czy AI przeczyta dokumentację przetargową?", answer: "Może przygotować streszczenie z wymaganiami, terminami i karami. Decyzję podejmuje zarząd." },
    { question: "Czy podwykonawcy muszą mieć konto?", answer: "Nie. Odpowiadają mailem lub przez prosty formularz." },
    { question: "Czy obsłużycie zapytania od inwestorów prywatnych?", answer: "Tak, rejestr obejmuje każde zapytanie, niezależnie od źródła." },
    { question: "Czy zobaczymy, dlaczego przegrywamy przetargi?", answer: "Tak, jeśli każda oferta dostaje status i powód. Raport pokazuje to według rodzajów zleceń." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  relatedProcessSlugs: ["ofertowanie", "obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["microsoft-365", "n8n", "chatgpt"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
