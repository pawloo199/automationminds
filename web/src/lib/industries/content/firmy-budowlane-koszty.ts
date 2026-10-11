import type { IndustryPageContent } from "../types";

export const firmyBudowlaneKoszty: IndustryPageContent = {
  industrySlug: "firmy-budowlane",
  subSlug: "rozliczenia-i-koszty",
  name: "Rozliczenia i koszty budowy",
  excerpt: "Faktury przypisane do budów i etapów, porównanie z budżetem na bieżąco, przerób, fakturowanie inwestora i raport rentowności budów.",
  metaTitle: "Rozliczanie budowy i koszty względem budżetu",
  metaDescription:
    "Automatyzujemy rozliczanie budów: faktury przypisane do budów i etapów, koszty względem budżetu na bieżąco, przerób, fakturowanie inwestora i raporty.",
  primaryKeyword: "rozliczanie budowy",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy budowlane: rozliczenia i koszty",
    title: "Koszty budowy względem budżetu na bieżąco, a nie po zakończeniu etapu",
    lead: "O tym, że budowa przekroczyła budżet, wiele firm dowiaduje się, gdy jest już za późno, żeby coś zmienić. Faktury trafiają do księgowości, księgowość przypisuje je do budów z opóźnieniem, a zestawienie kosztów powstaje raz na kwartał. Automatyzujemy rozliczenia: faktury są przypisywane do budów i pozycji budżetu w dniu wpływu, koszty są porównywane z budżetem na bieżąco, a zarząd widzi, które budowy wymagają uwagi.",
    bullets: [
      "Faktury przypisane do budów i pozycji budżetu w dniu wpływu",
      "Koszty względem budżetu na bieżąco",
      "Fakturowanie inwestora i raport rentowności",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy budowlane i wykonawcze prowadzące kilka budów" },
    { label: "Co automatyzujemy", value: "Faktury, przypisanie, budżet, przerób, fakturowanie, rentowność" },
    { label: "Narzędzia", value: "KSeF, program do faktur, rejestr budów, model AI, n8n" },
    { label: "Zasada", value: "Przypisania i akceptacje sprawdza człowiek" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zarząd decyduje bez aktualnych danych.",
    items: [
      "Faktury przypisuje się do budów z opóźnieniem.",
      "Zestawienie kosztów budowy powstaje raz na miesiąc lub kwartał.",
      "Przekroczenie budżetu widać po zakończeniu etapu.",
      "Przerób i fakturowanie inwestora liczy się w arkuszach.",
      "Nie wiadomo, które budowy są rentowne.",
      "Księgowość pyta kierowników, do której budowy należy faktura.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń",
    paragraphs: [
      "Faktury kosztowe przychodzą z KSeF, mailem lub od podwykonawców. AI odczytuje je i podpowiada budowę i pozycję budżetu na podstawie dostawcy, zamówienia, umowy i treści faktury. Podpowiedź zatwierdza kierownik lub osoba z biura, a niepewne przypisania są oznaczone.",
      "Budżet budowy jest rozpisany na pozycje lub etapy. Każda zatwierdzona faktura od razu trafia do odpowiedniej pozycji, a system porównuje koszty z budżetem i postępem prac. Gdy koszt pozycji zbliża się do budżetu, kierownik i zarząd dostają ostrzeżenie.",
      "Przerób i fakturowanie inwestora liczy się na podstawie protokołów zaawansowania. Raport rentowności pokazuje dla każdej budowy przychody, koszty i marżę, także w trakcie realizacji, więc zarząd widzi problemy, gdy jeszcze można coś zmienić.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń",
    lead: "Zakres dopasowujemy do struktury budżetów i sposobu pracy księgowości.",
    items: [
      { title: "Faktury z KSeF i poczty", body: "Wszystkie faktury kosztowe w jednym miejscu." },
      { title: "Przypisanie z AI", body: "Budowa i pozycja budżetu podpowiedziane z dostawcy i treści." },
      { title: "Akceptacja", body: "Kierownik zatwierdza przypisanie i fakturę." },
      { title: "Budżet budowy", body: "Pozycje lub etapy z kwotami." },
      { title: "Porównanie z budżetem", body: "Koszty i zaawansowanie na bieżąco." },
      { title: "Ostrzeżenia", body: "Gdy koszt zbliża się do budżetu pozycji." },
      { title: "Fakturowanie inwestora", body: "Na podstawie protokołów zaawansowania." },
      { title: "Rentowność", body: "Przychody, koszty i marża według budów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od faktury do decyzji zarządu.",
    items: [
      {
        title: "Faktura kosztowa",
        trigger: "Nowa faktura w KSeF",
        steps: ["Odczyt i podpowiedź budowy i pozycji", "Akceptacja kierownika", "Koszt w budżecie, ostrzeżenie przy przekroczeniu"],
        result: "Koszt widoczny w dniu wpływu faktury.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu",
        steps: ["Protokół zaawansowania i przerób", "Faktura dla inwestora do sprawdzenia", "Raport rentowności budów dla zarządu"],
        result: "Zarząd widzi wynik każdej budowy co miesiąc.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład firmy wykonawczej z kilkoma budowami jednocześnie.",
    rows: [
      { label: "Przypisanie faktur", before: "Z opóźnieniem, przez pytania do kierowników.", after: "W dniu wpływu, z podpowiedzią." },
      { label: "Budżet", before: "Zestawienie raz na kwartał.", after: "Porównanie na bieżąco." },
      { label: "Przekroczenia", before: "Po etapie.", after: "Ostrzeżenie wcześniej." },
      { label: "Rentowność", before: "Po zakończeniu budowy.", after: "W trakcie realizacji." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednej budowie równolegle z obecnym sposobem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy strukturę budżetów i obieg faktur.", fromYou: "Przykładowe budżety i rozmowa z księgowością." },
      { title: "Budżety i zasady", duration: "1–2 tygodnie", body: "Ustalamy pozycje budżetu i zasady przypisań.", fromYou: "Akceptacja struktury." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Uruchamiamy przepływy na jednej budowie i porównujemy wyniki.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejne budowy i rozwijamy raporty.", fromYou: "Informacja o nowych budowach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od przypisania faktur do budów.",
    items: [
      { name: "Faktury i budowy", description: "Dla firm, które chcą znać koszty budów.", includes: ["Faktury z KSeF i poczty", "Przypisanie z AI", "Akceptacja kierownika", "Zestawienie kosztów"] },
      { name: "Koszty i budżet", description: "Dla firm, które chcą reagować wcześniej.", includes: ["Wszystko z wariantu Faktury i budowy", "Budżet budowy", "Porównanie z budżetem", "Ostrzeżenia"] },
      { name: "Pełne rozliczenia", description: "Dla firm, które chcą znać rentowność.", includes: ["Wszystko z wariantu Koszty i budżet", "Przerób", "Fakturowanie inwestora", "Raport rentowności"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba budów i faktur,",
      "struktura budżetów,",
      "integracja z KSeF, programem do faktur i księgowością,",
      "zakres wykorzystania AI,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Faktura przypisana do złej budowy.", mitigation: "Podpowiedź zatwierdza kierownik, a niepewne przypisania są oznaczone." },
      { risk: "Budżet nieaktualny po zmianach zakresu.", mitigation: "Zmiany budżetu zapisuje się w jednym miejscu, z historią." },
      { risk: "Fałszywe poczucie kontroli.", mitigation: "Raporty pokazują też koszty jeszcze niezafakturowane, np. z zamówień." },
      { risk: "Różnice z księgowością.", mitigation: "Rejestr kosztów budów uzgadnia się z księgowością co miesiąc." },
    ],
  },
  faq: [
    { question: "Czy to zastępuje księgowość?", answer: "Nie. Księgowość prowadzi księgi, a rejestr kosztów budów służy zarządowi i kierownikom do kontroli." },
    { question: "Czy AI przypisze faktury do budów?", answer: "Podpowie budowę i pozycję na podstawie dostawcy, zamówienia i treści faktury. Przypisanie zatwierdza człowiek." },
    { question: "Czy obsłużycie faktury z KSeF?", answer: "Tak. Faktury z KSeF mają dane w uporządkowanej formie, którą łatwo przetworzyć." },
    { question: "Czy zobaczymy przekroczenie budżetu wcześniej?", answer: "Tak. System ostrzega, gdy koszt pozycji zbliża się do budżetu, także z uwzględnieniem zamówień." },
    { question: "Czy to działa z naszym programem do kosztorysowania?", answer: "Budżet można zaimportować z kosztorysu, jeśli program pozwala na eksport." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "raporty-finansowe"],
  relatedToolSlugs: ["ksef", "airtable", "n8n"],
  relatedArticleSlugs: ["kontrola-kosztow-budowy", "cyfryzacja-firmy-budowlanej", "jak-mierzyc-roi-automatyzacji"],
};
