import type { IndustryPageContent } from "../types";

export const nieruchomosciOfertyIOpisy: IndustryPageContent = {
  industrySlug: "nieruchomosci",
  subSlug: "oferty-i-opisy",
  name: "Oferty i opisy z AI",
  excerpt: "Pozyskanie oferty, dane i zdjęcia w jednym miejscu, opisy ofert przygotowane z AI w stylu biura i aktualizacje bez przepisywania.",
  metaTitle: "Opisy ofert nieruchomości z AI i obsługa ofert",
  metaDescription:
    "Automatyzujemy pracę z ofertami nieruchomości: dane i zdjęcia w jednym miejscu, opisy ofert z AI w stylu biura, aktualizacje cen i raporty dla właścicieli.",
  primaryKeyword: "opisy ofert nieruchomości AI",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Nieruchomości: oferty i opisy",
    title: "Opisy ofert w stylu biura w kilka minut, a nie w godzinę",
    lead: "Dobra oferta to dobre zdjęcia, kompletne dane i opis, który zachęca do kontaktu. Napisanie takiego opisu zabiera agentowi czas, a dane trzeba potem aktualizować w kilku miejscach. Automatyzujemy pracę z ofertami: dane i zdjęcia z pozyskania trafiają do jednego miejsca, AI przygotowuje szkic opisu w stylu biura, a agent sprawdza go i publikuje.",
    bullets: [
      "Dane i zdjęcia z pozyskania w jednym miejscu",
      "Szkic opisu z AI w stylu biura",
      "Aktualizacje i raporty dla właściciela",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura nieruchomości z wieloma ofertami i agentami" },
    { label: "Co automatyzujemy", value: "Pozyskanie oferty, dane, opisy, aktualizacje, raporty dla właścicieli" },
    { label: "Narzędzia", value: "Formularz pozyskania, CRM, system publikacji ofert, model AI, n8n" },
    { label: "Zasada", value: "Agent sprawdza opis i odpowiada za publikację" },
  ],
  symptoms: {
    title: "Kiedy pracę z ofertami warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, przygotowanie oferty trwa dłużej, niż powinno.",
    items: [
      "Opis oferty pisze się od zera albo kopiuje z podobnej.",
      "Opisy różnych agentów mają różny styl i jakość.",
      "Dane z pozyskania są w notatkach agenta i trzeba je przepisać do CRM.",
      "Zmiana ceny oznacza ręczną aktualizację w kilku miejscach.",
      "Właściciel pyta o zainteresowanie ofertą, a raport trzeba składać ręcznie.",
      "Brakuje części danych, np. kosztów utrzymania, i wychodzą one dopiero przy zapytaniach.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja pracy z ofertami",
    paragraphs: [
      "Podczas pozyskania agent wypełnia prosty formularz na telefonie: parametry, stan, koszty utrzymania, zdjęcia, uwagi. Dane trafiają do CRM, a system sprawdza, czy niczego nie brakuje do publikacji.",
      "Na podstawie danych i uwag agenta AI przygotowuje szkic opisu w stylu biura: z ustalonym tonem, strukturą i zasadami, np. bez przesadnych obietnic. Agent sprawdza parametry, dopracowuje tekst i zatwierdza publikację. Zmiany ceny i statusu wprowadza w jednym miejscu.",
      "Właściciel nieruchomości dostaje regularny raport: liczba zapytań, prezentacji i uwagi klientów. To ułatwia rozmowę o cenie, gdy zainteresowanie jest mniejsze niż oczekiwano.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja ofert",
    lead: "Zakres dopasowujemy do sposobu pracy biura.",
    items: [
      { title: "Formularz pozyskania", body: "Parametry, koszty, zdjęcia i uwagi wprowadzane na telefonie." },
      { title: "Kontrola kompletności", body: "Lista brakujących danych przed publikacją." },
      { title: "Opis z AI", body: "Szkic w stylu biura na podstawie danych i uwag agenta." },
      { title: "Wytyczne biura", body: "Ton, struktura i zasady opisów wspólne dla wszystkich agentów." },
      { title: "Aktualizacje", body: "Zmiana ceny i statusu w jednym miejscu." },
      { title: "Raport dla właściciela", body: "Zapytania, prezentacje i uwagi klientów." },
      { title: "Wersje językowe", body: "Opis w innym języku dla klientów z zagranicy, do sprawdzenia." },
      { title: "Archiwum ofert", body: "Historia ofert i transakcji jako materiał do wycen." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od pozyskania do publikacji i raportu.",
    items: [
      {
        title: "Nowa oferta",
        trigger: "Agent wypełnia formularz pozyskania",
        steps: ["Dane i zdjęcia w CRM, kontrola kompletności", "Szkic opisu z AI w stylu biura", "Agent zatwierdza, oferta trafia do publikacji"],
        result: "Oferta gotowa do publikacji tego samego dnia.",
      },
      {
        title: "Raport dla właściciela",
        trigger: "Co tydzień lub co dwa tygodnie",
        steps: ["Zestawienie zapytań i prezentacji", "Uwagi klientów zebrane przez agenta", "Raport wysłany do właściciela"],
        result: "Właściciel wie, jak radzi sobie oferta, bez dzwonienia do agenta.",
      },
    ],
  },
  example: {
    title: "Oferty przed i po automatyzacji",
    lead: "Przykład biura z kilkudziesięcioma aktywnymi ofertami.",
    rows: [
      { label: "Opis", before: "Pisany od zera.", after: "Szkic z AI do dopracowania." },
      { label: "Styl", before: "Różny u różnych agentów.", after: "Wspólne wytyczne biura." },
      { label: "Dane", before: "Notatki agenta.", after: "Formularz i kontrola kompletności." },
      { label: "Właściciel", before: "Dzwoni z pytaniami.", after: "Dostaje regularny raport." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od wytycznych opisów i formularza pozyskania.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy obecne opisy, sposób pozyskania i publikacji ofert.", fromYou: "Przykłady dobrych opisów i rozmowa z agentami." },
      { title: "Wytyczne i projekt", duration: "około tygodnia", body: "Przygotowujemy wytyczne opisów, formularz i raport dla właściciela.", fromYou: "Akceptacja wytycznych." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go na nowych ofertach.", fromYou: "Agenci oceniający opisy." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały zespół i dopracowujemy wytyczne.", fromYou: "Uwagi agentów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od opisów z AI.",
    items: [
      { name: "Opisy z AI", description: "Dla biur, które chcą szybciej przygotowywać oferty.", includes: ["Wytyczne opisów", "Szkic opisu z AI", "Kontrola przez agenta", "Wersje językowe"] },
      { name: "Oferty od pozyskania", description: "Dla biur, które chcą uporządkować dane.", includes: ["Wszystko z wariantu Opisy z AI", "Formularz pozyskania", "Kontrola kompletności", "Aktualizacje w jednym miejscu"] },
      { name: "Oferty i właściciele", description: "Dla biur, które chcą lepiej informować właścicieli.", includes: ["Wszystko z wariantu Oferty od pozyskania", "Raport dla właściciela", "Uwagi klientów", "Archiwum ofert"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba ofert i agentów,",
      "CRM i system publikacji ofert,",
      "zakres formularza pozyskania,",
      "wersje językowe,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Opis będzie zawierał błędne parametry.", mitigation: "Opis powstaje z danych w CRM, a agent sprawdza go przed publikacją." },
      { risk: "Opis będzie przesadzony lub nieprecyzyjny.", mitigation: "Wytyczne biura określają zasady, np. bez obietnic, których nie da się potwierdzić." },
      { risk: "Opisy różnych ofert będą brzmieć podobnie.", mitigation: "Szkic korzysta z uwag agenta o wyróżnikach nieruchomości." },
      { risk: "Zdjęcia w złej jakości.", mitigation: "Formularz podpowiada wymagania i oznacza oferty bez kompletu zdjęć." },
    ],
  },
  faq: [
    { question: "Czy AI napisze opis bez udziału agenta?", answer: "Przygotuje szkic, ale opis zawsze sprawdza i zatwierdza agent, który zna nieruchomość." },
    { question: "Czy opisy będą w stylu naszego biura?", answer: "Tak. Przygotowujemy wytyczne na podstawie waszych najlepszych opisów, a AI korzysta z nich przy każdej ofercie." },
    { question: "Czy opis może powstać w innym języku?", answer: "Tak. Wersję w innym języku warto sprawdzić, zanim trafi do publikacji." },
    { question: "Czy oferty trafią na portale automatycznie?", answer: "Jeśli korzystacie z systemu do publikacji ofert, łączymy się z nim. Zakres sprawdzamy przy przeglądzie." },
    { question: "Czy raport dla właściciela jest obowiązkowy?", answer: "Nie. To opcja, która zwykle ułatwia rozmowy o cenie i buduje zaufanie właściciela do biura." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "automatyzacja-sprzedazy", "szkolenia-ai-dla-zespolow"],
  relatedProcessSlugs: ["ofertowanie"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["ai-dla-agentow-nieruchomosci", "crm-dla-biura-nieruchomosci", "porzadek-w-danych-przed-ai-i-automatyzacja"],
};
