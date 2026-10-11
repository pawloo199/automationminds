import type { IndustryPageContent } from "../types";

export const firmySerwisoweRozliczenia: IndustryPageContent = {
  industrySlug: "firmy-serwisowe",
  subSlug: "rozliczenia-zlecen",
  name: "Części i rozliczenia zleceń",
  excerpt: "Części użyte w zleceniach, stany w samochodach serwisantów, zamówienia, faktury z protokołów, gwarancje i raport rentowności zleceń.",
  metaTitle: "Rozliczanie zleceń serwisowych i części",
  metaDescription:
    "Automatyzujemy rozliczenia w serwisie: części użyte w zleceniach, stany w samochodach, zamówienia, faktury z protokołów i KSeF, gwarancje i rentowność.",
  primaryKeyword: "rozliczanie zleceń serwisowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy serwisowe: części i rozliczenia",
    title: "Każde zlecenie rozliczone, każda część odpisana",
    lead: "Serwisant zużył część z samochodu, ale nikt jej nie odpisał. Zlecenie zakończyło się tydzień temu, ale faktura jeszcze nie wyszła. Naprawa gwarancyjna czeka na rozliczenie z producentem, bo brakuje zdjęcia. W wielu firmach serwisowych pieniądze uciekają między protokołem a fakturą. Automatyzujemy rozliczenia: części są odpisywane z protokołu, faktury powstają od razu, a gwarancje i rentowność zleceń są pod kontrolą.",
    bullets: [
      "Części odpisywane ze stanu przy zamknięciu zlecenia",
      "Faktura z protokołu i KSeF",
      "Gwarancje i rentowność zleceń pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy serwisowe i instalacyjne z magazynem części" },
    { label: "Co automatyzujemy", value: "Części, stany, zamówienia, faktury, gwarancje, rentowność" },
    { label: "Narzędzia", value: "Baza zleceń, magazyn, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Faktury i zamówienia zatwierdza biuro" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, firma traci pieniądze między protokołem a fakturą.",
    items: [
      "Faktury wychodzą kilka dni lub tygodni po zakończeniu zlecenia.",
      "Części w samochodach serwisantów nie zgadzają się ze stanem.",
      "Części zamawia się, gdy już ich brakuje.",
      "Naprawy gwarancyjne czekają na rozliczenie z producentem.",
      "Część zleceń nie jest fakturowana wcale.",
      "Nie wiadomo, które rodzaje zleceń są rentowne.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń",
    paragraphs: [
      "Przy zamknięciu zlecenia serwisant wybiera z listy użyte części, a system odpisuje je ze stanu w jego samochodzie. Gdy stan spada poniżej minimum, magazyn dostaje informację o uzupełnieniu, a gdy brakuje części w magazynie, przygotowuje się zamówienie do akceptacji.",
      "Na podstawie protokołu, cennika i zasad umowy system przygotowuje fakturę w programie do faktur. Biuro ją sprawdza i wysyła, a faktura trafia do KSeF. Zlecenia gwarancyjne trafiają do zestawienia dla producenta z kompletem dokumentów: protokołem, zdjęciami, numerem seryjnym.",
      "Raport zleceń pokazuje przychód, koszt części i czas pracy dla każdego zlecenia. Właściciel widzi, które rodzaje zleceń, klienci i umowy są rentowne, a które firma realizuje ze stratą.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń",
    lead: "Zakres dopasowujemy do sposobu pracy z częściami i klientami.",
    items: [
      { title: "Części w zleceniu", body: "Wybór z listy przy zamknięciu zlecenia." },
      { title: "Stany w samochodach", body: "Odpis części i minimalne stany." },
      { title: "Zamówienia", body: "Propozycje zamówień do akceptacji." },
      { title: "Faktura z protokołu", body: "Na podstawie prac, części i cennika." },
      { title: "KSeF", body: "Faktury w programie do faktur i w KSeF." },
      { title: "Gwarancje", body: "Zestawienia dla producentów z dokumentami." },
      { title: "Niezafakturowane zlecenia", body: "Lista zleceń zamkniętych bez faktury." },
      { title: "Rentowność", body: "Przychód, części i czas pracy według zleceń." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zamknięcia zlecenia do rozliczenia.",
    items: [
      {
        title: "Zamknięcie zlecenia",
        trigger: "Serwisant zamyka protokół",
        steps: ["Odpis części ze stanu w samochodzie", "Faktura do sprawdzenia", "Informacja o uzupełnieniu stanu"],
        result: "Części i faktura rozliczone tego samego dnia.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu",
        steps: ["Lista zleceń bez faktury", "Zestawienie gwarancji dla producentów", "Raport rentowności"],
        result: "Nic nie zostaje bez rozliczenia.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład firmy serwisowej z kilkunastoma samochodami serwisowymi.",
    rows: [
      { label: "Faktury", before: "Po kilku dniach lub tygodniach.", after: "Tego samego dnia, po sprawdzeniu." },
      { label: "Części", before: "Stany się nie zgadzają.", after: "Odpis z protokołu." },
      { label: "Gwarancje", before: "Czekają na dokumenty.", after: "Zestawienie z kompletem." },
      { label: "Rentowność", before: "Nieznana.", after: "Raport według zleceń." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednym miesiącu równolegle z obecnym sposobem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś rozliczacie zlecenia, części i gwarancje.", fromYou: "Rozmowa z osobą od rozliczeń." },
      { title: "Dane i zasady", duration: "1–2 tygodnie", body: "Porządkujemy listę części, cennik i zasady rozliczeń.", fromYou: "Weryfikacja list i cennika." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy przepływy i porównujemy wyniki z obecnym sposobem.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i rozwijamy raporty.", fromYou: "Informacja o zmianach cen i zasad." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od faktur z protokołów.",
    items: [
      { name: "Faktury", description: "Dla firm, które chcą szybciej fakturować.", includes: ["Faktura z protokołu", "KSeF", "Lista niezafakturowanych zleceń", "Raport faktur"] },
      { name: "Faktury i części", description: "Dla firm z częściami w samochodach.", includes: ["Wszystko z wariantu Faktury", "Części w zleceniu", "Stany w samochodach", "Propozycje zamówień"] },
      { name: "Pełne rozliczenia", description: "Dla firm, które chcą znać rentowność.", includes: ["Wszystko z wariantu Faktury i części", "Gwarancje", "Rentowność zleceń", "Raport dla właściciela"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zleceń i serwisantów,",
      "liczba części i stan danych o magazynie,",
      "integracja z programem do faktur i magazynowym,",
      "zasady rozliczeń umów i gwarancji,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędna faktura.", mitigation: "Faktura trafia do sprawdzenia przez biuro przed wysłaniem." },
      { risk: "Serwisant nie wpisze części.", mitigation: "Lista części w protokole i porównanie ze stanem przy uzupełnieniach." },
      { risk: "Zamówienie bez kontroli.", mitigation: "Zamówienia są propozycjami do akceptacji." },
      { risk: "Niekompletne dokumenty gwarancyjne.", mitigation: "Protokół gwarancyjny wymaga numeru seryjnego i zdjęć." },
    ],
  },
  faq: [
    { question: "Czy potrzebujemy programu magazynowego?", answer: "Nie zawsze. Przy prostym magazynie wystarczy baza części połączona z protokołami. Jeśli macie program magazynowy, łączymy się z nim." },
    { question: "Czy faktury wyjdą automatycznie?", answer: "Powstają automatycznie, a wysyła je biuro po sprawdzeniu." },
    { question: "Czy obsłużycie rozliczenia gwarancji z producentami?", answer: "Przygotowujemy zestawienia z kompletem dokumentów w formacie wymaganym przez producenta, jeśli jest znany." },
    { question: "Czy zobaczymy rentowność zleceń?", answer: "Tak, raport pokazuje przychód, koszt części i czas pracy dla zleceń, klientów i umów." },
    { question: "Czy faktury trafią do KSeF?", answer: "Tak, przez wasz program do faktur albo przez bezpośrednie połączenie." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "integracje-systemow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "raporty-finansowe"],
  relatedToolSlugs: ["ksef", "airtable", "n8n"],
  relatedArticleSlugs: ["umowy-serwisowe", "program-do-zarzadzania-serwisem", "integracja-crm-z-fakturowaniem"],
};
