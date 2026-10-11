import type { IndustryPageContent } from "../types";

export const zakladyProdukcyjneZamowienia: IndustryPageContent = {
  industrySlug: "zaklady-produkcyjne",
  subSlug: "zamowienia-i-terminy",
  name: "Zamówienia klientów i terminy",
  excerpt: "Zamówienia klientów bez przepisywania, potwierdzenia z terminem realizacji, status zamówienia dla handlowca i klienta, informacja o opóźnieniach i dokumenty wysyłkowe.",
  metaTitle: "Obsługa zamówień w zakładzie produkcyjnym: terminy, status",
  metaDescription:
    "Automatyzujemy obsługę zamówień w zakładzie produkcyjnym: przyjęcie zamówień, potwierdzenia z terminem, status dla klienta i informację o opóźnieniach.",
  primaryKeyword: "obsługa zamówień w zakładzie produkcyjnym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Zakłady produkcyjne: zamówienia i terminy",
    title: "Klient zna termin i status zamówienia, a handlowiec nie dzwoni na halę",
    lead: "Zamówienie przychodzi mailem jako PDF, ktoś przepisuje je do ERP, a potwierdzenie z terminem wychodzi po kilku dniach. Gdy klient pyta o status, handlowiec dzwoni do planisty albo idzie na halę. O opóźnieniu klient dowiaduje się w dniu planowanej wysyłki. Automatyzujemy obsługę zamówień: dane trafiają do ERP bez przepisywania, potwierdzenie wychodzi szybko, a status zamówienia jest widoczny dla handlowca i klienta.",
    bullets: [
      "Zamówienia z maili i portali bez przepisywania",
      "Potwierdzenie z terminem realizacji",
      "Status i informacja o opóźnieniu z wyprzedzeniem",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Zakłady produkujące na zamówienie i seryjnie dla klientów B2B" },
    { label: "Co automatyzujemy", value: "Przyjęcie zamówień, potwierdzenia, status, opóźnienia, wysyłka" },
    { label: "Narzędzia", value: "ERP, poczta, portale klientów, model AI, n8n" },
    { label: "Zasada", value: "Terminy ustala planowanie, system je przekazuje" },
  ],
  symptoms: {
    title: "Kiedy obsługę zamówień warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, biuro handlowe traci czas na przepisywanie i telefony.",
    items: [
      "Zamówienia z PDF-ów i maili przepisuje się ręcznie do ERP.",
      "Potwierdzenie zamówienia wychodzi po kilku dniach.",
      "Handlowiec dzwoni na halę, żeby podać klientowi status.",
      "Klient dowiaduje się o opóźnieniu w dniu wysyłki.",
      "Zmiany w zamówieniach giną w mailach.",
      "Zamówienia z portali klientów trzeba ręcznie pobierać.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zamówień",
    paragraphs: [
      "Zamówienie z maila, PDF-u lub portalu klienta trafia do rejestru. AI odczytuje pozycje, ilości, ceny i terminy, a system porównuje je z ofertą lub cennikiem klienta i zaznacza różnice. Po sprawdzeniu przez handlowca zamówienie trafia do ERP.",
      "Planowanie podaje termin realizacji, a potwierdzenie zamówienia wychodzi do klienta z szablonu. Zmiany od klienta trafiają do tego samego zamówienia z historią, a nie do osobnego wątku mailowego.",
      "Status zamówienia pochodzi z ERP lub raportów z hali. Handlowiec widzi go bez telefonu, a klient może dostawać informację o głównych etapach. Gdy termin jest zagrożony, handlowiec dostaje sygnał z wyprzedzeniem i może uprzedzić klienta.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zamówień",
    lead: "Zakres dopasowujemy do kanałów, przez które przychodzą zamówienia.",
    items: [
      { title: "Przyjęcie zamówień", body: "Maile, PDF-y i portale klientów w jednym rejestrze." },
      { title: "Odczyt pozycji", body: "Pozycje, ilości, ceny i terminy bez przepisywania." },
      { title: "Kontrola z ofertą", body: "Różnice względem oferty lub cennika." },
      { title: "Potwierdzenia", body: "Potwierdzenie z terminem z szablonu." },
      { title: "Zmiany zamówień", body: "Historia zmian przy zamówieniu." },
      { title: "Status", body: "Etap realizacji dla handlowca i klienta." },
      { title: "Opóźnienia", body: "Sygnał o zagrożonym terminie z wyprzedzeniem." },
      { title: "Wysyłka i dokumenty", body: "Dokumenty wysyłkowe i informacja o wysyłce." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zamówienia do wysyłki.",
    items: [
      {
        title: "Nowe zamówienie",
        trigger: "Klient przysyła PDF z zamówieniem",
        steps: ["Pozycje odczytane i porównane z ofertą", "Handlowiec sprawdza i przekazuje do ERP", "Potwierdzenie z terminem do klienta"],
        result: "Potwierdzenie szybko i bez przepisywania.",
      },
      {
        title: "Zagrożony termin",
        trigger: "Zlecenie jest opóźnione względem planu",
        steps: ["Sygnał dla handlowca z przyczyną", "Szkic informacji dla klienta z nowym terminem", "Handlowiec wysyła po uzgodnieniu z planowaniem"],
        result: "Klient wie o opóźnieniu wcześniej, a nie w dniu wysyłki.",
      },
    ],
  },
  example: {
    title: "Zamówienia przed i po automatyzacji",
    lead: "Przykład zakładu produkującego komponenty dla kilkunastu stałych klientów.",
    rows: [
      { label: "Przyjęcie zamówienia", before: "Przepisywanie z PDF.", after: "Odczyt do sprawdzenia." },
      { label: "Potwierdzenie", before: "Po kilku dniach.", after: "Szybko, z terminem." },
      { label: "Status dla klienta", before: "Telefon na halę.", after: "Z systemu." },
      { label: "Opóźnienia", before: "W dniu wysyłki.", after: "Z wyprzedzeniem." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym zakładzie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od przyjęcia zamówień i potwierdzeń.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy przykładowe zamówienia i sprawdzamy możliwości ERP.", fromYou: "Zamówienia, dostęp do ERP." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przyjęcie, kontrolę i potwierdzenia.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Testujemy na zamówieniach wybranych klientów.", fromYou: "Handlowiec oceniający wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Rozszerzamy na kolejnych klientów i dokładamy status.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od przyjmowania zamówień.",
    items: [
      { name: "Przyjęcie zamówień", description: "Dla zakładów, które chcą skończyć z przepisywaniem.", includes: ["Rejestr zamówień", "Odczyt pozycji", "Kontrola z ofertą", "Przekazanie do ERP"] },
      { name: "Zamówienia i potwierdzenia", description: "Dla zakładów, które chcą szybciej potwierdzać.", includes: ["Wszystko z wariantu Przyjęcie zamówień", "Potwierdzenia z terminem", "Zmiany zamówień"] },
      { name: "Pełny obieg", description: "Dla zakładów, które chcą informować klientów na bieżąco.", includes: ["Wszystko z wariantu Zamówienia i potwierdzenia", "Status dla klienta", "Sygnał o opóźnieniach", "Dokumenty wysyłkowe"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zamówień i kanałów,",
      "forma zamówień od klientów,",
      "możliwości integracji z ERP,",
      "źródło danych o statusie,",
      "zakres wykorzystania AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI źle odczyta pozycję zamówienia.", mitigation: "Zamówienie trafia do ERP po sprawdzeniu przez handlowca, a różnice z ofertą są zaznaczone." },
      { risk: "Termin w potwierdzeniu nie jest realny.", mitigation: "Termin podaje planowanie, a nie system." },
      { risk: "Status w systemie jest nieaktualny.", mitigation: "Status pochodzi z ERP lub raportów z hali, z datą aktualizacji." },
      { risk: "Klient dostanie informację, której nie powinien.", mitigation: "Klient widzi tylko uzgodnione etapy, a informacje o opóźnieniach wysyła handlowiec." },
    ],
  },
  faq: [
    { question: "Czy zamówienia trafią do ERP automatycznie?", answer: "Po sprawdzeniu przez handlowca. Przy stałych klientach i powtarzalnych zamówieniach można ograniczyć kontrolę do różnic." },
    { question: "Czy obsłużycie portale zakupowe klientów?", answer: "Tak, jeśli portal pozwala pobrać zamówienia automatycznie albo przysyła je mailem." },
    { question: "Skąd system zna status zamówienia?", answer: "Z ERP lub z raportów z hali, jeśli są cyfrowe." },
    { question: "Czy klient zobaczy status?", answer: "Może dostawać informację o uzgodnionych etapach mailem albo w prostym widoku." },
    { question: "Czy system sam przesunie termin?", answer: "Nie. Termin ustala planowanie, a informację dla klienta wysyła handlowiec." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "integracje-systemow", "automatyzacja-w-produkcji"],
  relatedProcessSlugs: ["przyjmowanie-zamowien", "obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["n8n", "microsoft-365", "make"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
