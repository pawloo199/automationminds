import type { IndustryPageContent } from "../types";

export const firmySzkolenioweDokumentacja: IndustryPageContent = {
  industrySlug: "firmy-szkoleniowe",
  subSlug: "dokumentacja-szkolen",
  name: "Dokumentacja szkoleń",
  excerpt: "Listy obecności, umowy, programy, certyfikaty i ankiety zebrane przy każdym szkoleniu, kompletne zestawy dokumentów dla klientów i do rozliczeń dofinansowań.",
  metaTitle: "Dokumentacja szkoleń: komplet dokumentów i archiwum",
  metaDescription:
    "Automatyzujemy dokumentację szkoleń: listy obecności, umowy, programy, certyfikaty i ankiety przy szkoleniu, komplety dla klientów i do dofinansowań.",
  primaryKeyword: "dokumentacja szkoleń",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy szkoleniowe: dokumentacja",
    title: "Komplet dokumentów każdego szkolenia w jednym miejscu, gotowy do wysłania",
    lead: "Klient firmowy prosi o listę obecności i ankiety. Szkolenie było dofinansowane i operator wymaga kompletu dokumentów. Audytor chce zobaczyć dokumentację szkoleń z ostatniego roku. W wielu firmach oznacza to szukanie w kilku folderach i skrzynkach. Automatyzujemy dokumentację: dokumenty powstają przy szkoleniu i trafiają do jego folderu, braki są widoczne od razu, a komplet można wysłać w kilka minut.",
    bullets: [
      "Dokumenty zbierane przy szkoleniu, a nie po fakcie",
      "Lista braków dla każdego szkolenia",
      "Komplet dla klienta lub do rozliczenia w kilka minut",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy szkoleniowe pracujące z klientami firmowymi i szkoleniami dofinansowanymi" },
    { label: "Co automatyzujemy", value: "Listy, umowy, programy, certyfikaty, ankiety, komplety, archiwum" },
    { label: "Narzędzia", value: "Rejestr szkoleń, dysk, szablony, poczta, n8n" },
    { label: "Zasada", value: "Wymagania dokumentacji określa firma lub operator programu" },
  ],
  symptoms: {
    title: "Kiedy dokumentację warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, dokumenty zabierają czas, gdy są najbardziej potrzebne.",
    items: [
      "Dokumenty szkolenia są w kilku folderach i skrzynkach.",
      "Klienci proszą o listy obecności i ankiety po kilku tygodniach.",
      "Przy szkoleniach dofinansowanych brakuje części dokumentów.",
      "Nie wiadomo, które szkolenia mają kompletną dokumentację.",
      "Przygotowanie dokumentów do kontroli zabiera dni.",
      "Wersje programów i umów są niespójne.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja dokumentacji",
    paragraphs: [
      "Każde szkolenie ma w rejestrze listę wymaganych dokumentów, zależną od rodzaju szkolenia i klienta: umowa, program, lista obecności, certyfikaty, ankiety, faktura, a przy szkoleniach dofinansowanych dokumenty wymagane przez operatora programu, według listy przekazanej przez firmę.",
      "Dokumenty powstają lub trafiają do folderu szkolenia automatycznie: umowa z szablonu, program z biblioteki, lista obecności i certyfikaty po szkoleniu, ankiety po zebraniu odpowiedzi, faktura z programu do faktur. Braki są widoczne w rejestrze, a opiekun dostaje przypomnienie.",
      "Na prośbę klienta lub do rozliczenia system przygotowuje komplet dokumentów w jednym pakiecie. Zasady programów dofinansowania i wymagania dokumentacji określają ich operatorzy, a firma odpowiada za zgodność z nimi. Automatyzacja pilnuje kompletności i porządku.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja dokumentacji",
    lead: "Zakres dopasowujemy do rodzajów szkoleń i klientów.",
    items: [
      { title: "Lista wymaganych dokumentów", body: "Według rodzaju szkolenia i klienta." },
      { title: "Folder szkolenia", body: "Wszystkie dokumenty w jednym miejscu." },
      { title: "Dokumenty z szablonów", body: "Umowy, programy, listy, certyfikaty." },
      { title: "Dokumenty z innych kroków", body: "Ankiety, faktury, potwierdzenia." },
      { title: "Lista braków", body: "Widoczna w rejestrze, z przypomnieniem." },
      { title: "Komplet dla klienta", body: "Pakiet dokumentów na prośbę." },
      { title: "Szkolenia dofinansowane", body: "Lista dokumentów według wymagań przekazanych przez firmę." },
      { title: "Archiwum", body: "Dokumenty z poprzednich lat łatwe do odnalezienia." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od szkolenia do kompletu dokumentów.",
    items: [
      {
        title: "Szkolenie zamknięte",
        trigger: "Zakończenie szkolenia dla firmy",
        steps: ["Lista obecności, certyfikaty i ankiety w folderze", "Sprawdzenie kompletności", "Komplet dla klienta z fakturą"],
        result: "Klient dostaje dokumenty bez proszenia.",
      },
      {
        title: "Szkolenie dofinansowane",
        trigger: "Przygotowanie do rozliczenia",
        steps: ["Lista dokumentów według wymagań", "Braki z przypomnieniami", "Pakiet do rozliczenia"],
        result: "Dokumentacja kompletna przed terminem rozliczenia.",
      },
    ],
  },
  example: {
    title: "Dokumentacja przed i po automatyzacji",
    lead: "Przykład firmy prowadzącej szkolenia zamknięte i szkolenia dofinansowane.",
    rows: [
      { label: "Dokumenty", before: "W kilku miejscach.", after: "W folderze szkolenia." },
      { label: "Braki", before: "Wychodzą przy rozliczeniu.", after: "Widoczne od razu." },
      { label: "Komplety", before: "Dni szukania.", after: "Minuty." },
      { label: "Archiwum", before: "Trudne do przeszukania.", after: "Uporządkowane." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od listy dokumentów i folderów szkoleń.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Spisujemy dokumenty wymagane przez klientów i programy, z których korzystacie.", fromYou: "Listy wymagań i przykładowe dokumenty." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy strukturę folderów, listy i szablony.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Testujemy na kilku szkoleniach.", fromYou: "Opiekun w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie szkolenia i aktualizujemy wymagania.", fromYou: "Informacja o zmianach wymagań." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od folderów i listy braków.",
    items: [
      { name: "Porządek", description: "Dla firm, które chcą mieć dokumenty w jednym miejscu.", includes: ["Folder szkolenia", "Lista wymaganych dokumentów", "Lista braków", "Przypomnienia"] },
      { name: "Komplety", description: "Dla firm pracujących z klientami firmowymi.", includes: ["Wszystko z wariantu Porządek", "Dokumenty z szablonów", "Komplet dla klienta", "Archiwum"] },
      { name: "Dofinansowania", description: "Dla firm prowadzących szkolenia dofinansowane.", includes: ["Wszystko z wariantu Komplety", "Listy według wymagań programów", "Pakiety do rozliczenia", "Raport kompletności"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba szkoleń i rodzajów dokumentów,",
      "wymagania klientów i programów,",
      "szablony dokumentów,",
      "integracja z innymi procesami,",
      "przeniesienie archiwum.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Wymagania programu się zmienią.", mitigation: "Listy dokumentów są w jednym miejscu i aktualizowane przez firmę." },
      { risk: "Dokument w złej wersji.", mitigation: "Szablony i programy w jednym miejscu, z wersjami." },
      { risk: "Dane uczestników w pakiecie dla klienta.", mitigation: "Pakiety zawierają tylko dokumenty uzgodnione z klientem i zgodne z zasadami ochrony danych." },
      { risk: "Fałszywe poczucie zgodności.", mitigation: "Automatyzacja pilnuje kompletności, a zgodność z wymaganiami ocenia firma." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja wystarczy do zgodności z wymaganiami dofinansowania?", answer: "Nie zastępuje oceny firmy. Pilnuje kompletności dokumentów według listy wymagań, którą przekazuje firma." },
    { question: "Czy obsłużycie dokumenty z platformy e-learningowej?", answer: "Tak, jeśli platforma udostępnia raporty lub dane o obecności." },
    { question: "Czy przeniesiecie dokumenty z poprzednich lat?", answer: "Tak, możemy uporządkować i przenieść archiwum." },
    { question: "Czy klient może sam pobrać dokumenty?", answer: "Tak, przez link do pakietu, jeśli firma tego chce." },
    { question: "Gdzie przechowywane są dokumenty?", answer: "Na dysku lub w narzędziu, z którego korzysta firma, z uprawnieniami według ról." },
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["google-workspace", "microsoft-365", "n8n"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-firmie-szkoleniowej", "cyfryzacja-danych-w-firmie", "rodo-a-automatyzacja-procesow"],
};
