import type { IndustryPageContent } from "../types";

export const biuraProjektoweDokumentacja: IndustryPageContent = {
  industrySlug: "biura-projektowe",
  subSlug: "dokumentacja-i-wersje",
  name: "Dokumentacja i wersje",
  excerpt: "Rejestr dokumentacji projektowej z numerami wersji, przekazania do inwestora i wykonawcy z potwierdzeniem, lista zmian i archiwum projektu.",
  metaTitle: "Obieg dokumentacji projektowej: wersje i przekazania",
  metaDescription:
    "Automatyzujemy obieg dokumentacji projektowej: rejestr dokumentów i wersji, przekazania do inwestora i wykonawcy z potwierdzeniem, lista zmian i archiwum.",
  primaryKeyword: "obieg dokumentacji projektowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura projektowe: dokumentacja",
    title: "Każdy wie, która wersja dokumentacji jest aktualna",
    lead: "Projekt budowlany w wersji trzeciej, poprawiony rysunek elewacji, nowy opis techniczny po uwagach: dokumentacja w trakcie projektu zmienia się wielokrotnie. Gdy przekazania idą mailem, inwestor i wykonawca pracują na różnych wersjach, a przy sporze trudno wykazać, co i kiedy zostało przekazane. Automatyzujemy obieg dokumentacji: każdy dokument ma wersję w rejestrze, przekazania idą z rejestru z potwierdzeniem, a poprzednie wersje są oznaczone jako zastąpione.",
    bullets: [
      "Rejestr dokumentów z numerami wersji",
      "Przekazania z listą zmian i potwierdzeniem",
      "Archiwum projektu gotowe po zakończeniu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura projektowe i pracownie przekazujące dokumentację wielu odbiorcom" },
    { label: "Co automatyzujemy", value: "Rejestr, wersje, przekazania, potwierdzenia, listy zmian, archiwum" },
    { label: "Narzędzia", value: "Dysk biura, rejestr, poczta, n8n" },
    { label: "Zasada", value: "Dokumentację zatwierdza projektant" },
  ],
  symptoms: {
    title: "Kiedy obieg dokumentacji warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, wersje dokumentacji są źródłem problemów.",
    items: [
      "Dokumentacja jest przekazywana mailem, w załącznikach.",
      "Inwestor lub wykonawca pracuje na nieaktualnej wersji.",
      "Nie wiadomo, kiedy i komu przekazano daną wersję.",
      "Nazwy plików są niespójne.",
      "Listy zmian między wersjami nikt nie prowadzi.",
      "Po zakończeniu projektu archiwum jest niekompletne.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja obiegu dokumentacji",
    paragraphs: [
      "Każdy dokument projektu, rysunek, opis, zestawienie, trafia do rejestru z numerem, nazwą według zasad biura, branżą i wersją. Pliki zostają na dysku biura, a rejestr zapisuje ich położenie i historię. Nowa wersja zastępuje poprzednią, która jest oznaczona jako nieaktualna.",
      "Przekazanie dokumentacji inwestorowi, wykonawcy lub branżyście idzie z rejestru: lista dokumentów z wersjami, lista zmian względem poprzedniego przekazania, link do pobrania. Odbiorca potwierdza odbiór, a potwierdzenie trafia do rejestru. AI może przygotować szkic listy zmian na podstawie notatek projektanta.",
      "Po zakończeniu projektu rejestr pokazuje komplet dokumentacji w ostatnich wersjach i historię przekazań. Archiwum projektu powstaje automatycznie, w uporządkowanej strukturze.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja dokumentacji",
    lead: "Zakres dopasowujemy do rodzajów projektów i odbiorców.",
    items: [
      { title: "Rejestr dokumentów", body: "Numer, nazwa, branża, wersja, położenie pliku." },
      { title: "Zasady nazw", body: "Spójne nazwy plików według zasad biura." },
      { title: "Wersje", body: "Nowa wersja zastępuje poprzednią." },
      { title: "Przekazania", body: "Lista dokumentów, wersji i zmian dla odbiorcy." },
      { title: "Potwierdzenia odbioru", body: "Zapis w rejestrze." },
      { title: "Listy zmian", body: "Szkic z notatek projektanta." },
      { title: "Dokumenty od branżystów", body: "Przyjęte do rejestru z wersją." },
      { title: "Archiwum", body: "Komplet dokumentacji po zakończeniu projektu." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od nowej wersji do potwierdzonego przekazania.",
    items: [
      {
        title: "Nowa wersja",
        trigger: "Projektant zapisuje poprawiony rysunek",
        steps: ["Wersja w rejestrze, poprzednia oznaczona jako zastąpiona", "Szkic listy zmian", "Projektant zatwierdza"],
        result: "Każdy w biurze widzi aktualną wersję.",
      },
      {
        title: "Przekazanie do wykonawcy",
        trigger: "Kierownik przekazuje dokumentację wykonawczą",
        steps: ["Lista dokumentów i wersji", "Link do pobrania i prośba o potwierdzenie", "Potwierdzenie odbioru w rejestrze"],
        result: "Biuro ma dowód, co i kiedy przekazało.",
      },
    ],
  },
  example: {
    title: "Dokumentacja przed i po automatyzacji",
    lead: "Przykład biura projektującego obiekty wielobranżowe.",
    rows: [
      { label: "Przekazania", before: "Maile z załącznikami.", after: "Z rejestru, z potwierdzeniem." },
      { label: "Wersje", before: "Niepewne.", after: "Aktualna oznaczona." },
      { label: "Zmiany", before: "Bez listy.", after: "Lista zmian przy przekazaniu." },
      { label: "Archiwum", before: "Niekompletne.", after: "Automatyczne." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru dokumentów jednego projektu.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy strukturę dysku, zasady nazw i sposób przekazań.", fromYou: "Dostęp do dysku i przykładowe przekazania." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy rejestr, zasady nazw i wersji, treści przekazań.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Uruchamiamy rejestr na kilku projektach.", fromYou: "Projektanci w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie projekty.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru i przekazań.",
    items: [
      { name: "Rejestr", description: "Dla biur, które chcą uporządkować wersje.", includes: ["Rejestr dokumentów", "Zasady nazw", "Wersje", "Dokumenty od branżystów"] },
      { name: "Rejestr i przekazania", description: "Dla biur przekazujących dokumentację wielu odbiorcom.", includes: ["Wszystko z wariantu Rejestr", "Przekazania", "Potwierdzenia", "Listy zmian"] },
      { name: "Pełny obieg", description: "Dla biur, które chcą kompletnych archiwów.", includes: ["Wszystko z wariantu Rejestr i przekazania", "Archiwum", "Raport przekazań", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba projektów i dokumentów,",
      "struktura dysku i zasady nazw,",
      "liczba odbiorców,",
      "zakres wykorzystania AI,",
      "przeniesienie dokumentacji z trwających projektów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Plik zmieniony bez nowej wersji.", mitigation: "Zasady zapisu i kontrola zmian na dysku, z informacją dla kierownika." },
      { risk: "Odbiorca nie potwierdzi odbioru.", mitigation: "Przypomnienie i informacja dla kierownika projektu." },
      { risk: "Lista zmian z AI pominie zmianę.", mitigation: "Lista to szkic, który projektant zatwierdza." },
      { risk: "Dostęp do dokumentacji dla niewłaściwych osób.", mitigation: "Linki do pobrania z uprawnieniami i terminem ważności." },
    ],
  },
  faq: [
    { question: "Czy musimy zmieniać sposób zapisywania plików?", answer: "Warto ustalić zasady nazw i folderów. Pliki zostają na dysku biura." },
    { question: "Czy działa to z programami projektowymi?", answer: "Tak, rejestr korzysta z plików zapisanych na dysku, niezależnie od programu." },
    { question: "Czy odbiorca musi mieć konto?", answer: "Nie. Dostaje link do pobrania i prośbę o potwierdzenie." },
    { question: "Czy lista zmian powstanie automatycznie?", answer: "Szkic powstaje z notatek projektanta, a projektant go zatwierdza." },
    { question: "Czy archiwum projektu powstanie samo?", answer: "Tak, z ostatnich wersji dokumentów i historii przekazań." },
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["microsoft-365", "google-workspace", "n8n"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-biurze-projektowym", "ai-dla-architektow", "porzadek-w-danych-przed-ai-i-automatyzacja"],
};
