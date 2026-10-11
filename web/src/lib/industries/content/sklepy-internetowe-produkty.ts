import type { IndustryPageContent } from "../types";

export const sklepyInternetoweProdukty: IndustryPageContent = {
  industrySlug: "sklepy-internetowe",
  subSlug: "opisy-produktow",
  name: "Opisy i dane produktów",
  excerpt: "Dane produktów z plików dostawców, opisy i atrybuty przygotowane z AI według wytycznych sklepu, tłumaczenia i publikacja w kanałach sprzedaży.",
  metaTitle: "Opisy produktów z AI i dane produktowe sklepu",
  metaDescription:
    "Automatyzujemy pracę z produktami w sklepie: import danych od dostawców, opisy i atrybuty z AI według wytycznych, tłumaczenia i publikacja w kanałach.",
  primaryKeyword: "opisy produktów z AI",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sklepy internetowe: opisy produktów",
    title: "Nowe produkty w sprzedaży w dni, a nie tygodnie",
    lead: "Dostawca przysyła plik z setką nowych produktów. Ktoś musi przenieść dane, dodać zdjęcia, uzupełnić atrybuty, napisać opisy, przetłumaczyć je i opublikować w kilku kanałach. W wielu sklepach to tygodnie pracy, więc opisy są kopiowane od producenta, a atrybuty niekompletne. Automatyzujemy pracę z produktami: dane są importowane, AI przygotowuje opisy i atrybuty według wytycznych sklepu, a zespół sprawdza i publikuje.",
    bullets: [
      "Import danych i zdjęć z plików dostawców",
      "Opisy i atrybuty z AI według wytycznych sklepu",
      "Tłumaczenia i publikacja w kanałach",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Sklepy z dużą lub często zmieniającą się ofertą produktów" },
    { label: "Co automatyzujemy", value: "Import, opisy, atrybuty, tłumaczenia, kontrola jakości, publikacja" },
    { label: "Narzędzia", value: "Platforma sklepu, pliki dostawców, model AI, n8n" },
    { label: "Zasada", value: "Opis sprawdza zespół przed publikacją" },
  ],
  symptoms: {
    title: "Kiedy pracę z produktami warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, oferta rośnie wolniej, niż mógłby.",
    items: [
      "Dodanie nowych produktów zajmuje tygodnie.",
      "Opisy są kopiowane od producenta, takie same jak u konkurencji.",
      "Atrybuty są niekompletne, więc filtry w sklepie nie działają.",
      "Pliki od dostawców mają różne formaty.",
      "Tłumaczenia na rynki zagraniczne są opóźnione.",
      "Dane produktów różnią się między kanałami sprzedaży.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja pracy z produktami",
    paragraphs: [
      "Pliki od dostawców, w różnych formatach, są importowane i zamieniane na wspólną strukturę: nazwa, kod, cena, parametry, zdjęcia. AI pomaga przypisać kolumny z nietypowych plików i wyciągnąć parametry z opisów producenta.",
      "Na podstawie danych i wytycznych sklepu AI przygotowuje szkic opisu, uzupełnia atrybuty potrzebne do filtrów i proponuje kategorię. Wytyczne określają ton, długość, strukturę i zasady, np. bez obietnic, których nie da się potwierdzić. Opisy mogą powstawać w kilku językach.",
      "Zespół sprawdza szkice w jednym miejscu, poprawia i zatwierdza. Zatwierdzone produkty trafiają do platformy sklepu i kanałów sprzedaży. Raport jakości pokazuje produkty z brakującymi danymi, zdjęciami lub opisami.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja",
    lead: "Zakres dopasowujemy do produktów i kanałów.",
    items: [
      { title: "Import od dostawców", body: "Pliki w różnych formatach do wspólnej struktury." },
      { title: "Wytyczne opisów", body: "Ton, struktura i zasady wspólne dla sklepu." },
      { title: "Opisy z AI", body: "Szkice z danych produktu, do sprawdzenia." },
      { title: "Atrybuty", body: "Parametry potrzebne do filtrów i porównań." },
      { title: "Kategorie", body: "Propozycja kategorii w drzewie sklepu." },
      { title: "Tłumaczenia", body: "Opisy na języki rynków zagranicznych." },
      { title: "Kontrola jakości", body: "Produkty z brakami w danych lub zdjęciach." },
      { title: "Publikacja", body: "Zatwierdzone produkty w sklepie i kanałach." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od pliku dostawcy do produktu w sprzedaży.",
    items: [
      {
        title: "Nowa kolekcja",
        trigger: "Dostawca przysyła plik z produktami",
        steps: ["Import i przypisanie kolumn", "Szkice opisów, atrybuty i kategorie z AI", "Sprawdzenie przez zespół i publikacja"],
        result: "Produkty w sprzedaży w kilka dni.",
      },
      {
        title: "Nowy rynek",
        trigger: "Sklep wchodzi na rynek niemiecki",
        steps: ["Tłumaczenie opisów według wytycznych", "Sprawdzenie najważniejszych produktów", "Publikacja w wersji językowej i na marketplace"],
        result: "Produkty przygotowane dla nowego rynku bez tygodni tłumaczeń.",
      },
    ],
  },
  example: {
    title: "Produkty przed i po automatyzacji",
    lead: "Przykład sklepu z kilkoma tysiącami produktów od kilkunastu dostawców.",
    rows: [
      { label: "Dodanie produktów", before: "Tygodnie.", after: "Dni." },
      { label: "Opisy", before: "Kopiowane od producenta.", after: "Własne, w stylu sklepu." },
      { label: "Atrybuty", before: "Niekompletne.", after: "Uzupełnione do filtrów." },
      { label: "Tłumaczenia", before: "Opóźnione.", after: "Razem z opisem." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym sklepie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od wytycznych opisów i jednej kategorii produktów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy dane produktów, pliki dostawców i najlepsze obecne opisy.", fromYou: "Przykładowe pliki i opisy." },
      { title: "Wytyczne i projekt", duration: "około tygodnia", body: "Przygotowujemy wytyczne opisów, strukturę danych i zasady kontroli.", fromYou: "Akceptacja wytycznych." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy import i przepływ opisów, testujemy na jednej kategorii.", fromYou: "Osoba oceniająca opisy." },
      { title: "Start i opieka", duration: "stale", body: "Rozszerzamy na kolejne kategorie i dostawców.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od opisów dla jednej kategorii.",
    items: [
      { name: "Opisy z AI", description: "Dla sklepów, które chcą lepszych opisów.", includes: ["Wytyczne opisów", "Opisy z AI", "Sprawdzenie przez zespół", "Publikacja"] },
      { name: "Dane produktów", description: "Dla sklepów z wieloma dostawcami.", includes: ["Wszystko z wariantu Opisy z AI", "Import od dostawców", "Atrybuty", "Kontrola jakości"] },
      { name: "Wiele rynków", description: "Dla sklepów sprzedających za granicą.", includes: ["Wszystko z wariantu Dane produktów", "Tłumaczenia", "Publikacja w kanałach", "Raport jakości"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba produktów i dostawców,",
      "formaty plików od dostawców,",
      "liczba języków,",
      "możliwości integracji platformy sklepu,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Opis z błędnymi parametrami.", mitigation: "Opis powstaje z danych produktu, a zespół sprawdza go przed publikacją." },
      { risk: "Opisy brzmiące podobnie.", mitigation: "Wytyczne i dane o wyróżnikach produktu w każdym szkicu." },
      { risk: "Prawa do zdjęć i opisów producenta.", mitigation: "Korzystamy z materiałów zgodnie z zasadami ich udostępnienia przez dostawców." },
      { risk: "Błąd w tłumaczeniu.", mitigation: "Najważniejsze produkty sprawdza osoba znająca język." },
    ],
  },
  faq: [
    { question: "Czy AI napisze opisy bez udziału zespołu?", answer: "Przygotuje szkice. Zalecamy, żeby zespół sprawdzał opisy, przynajmniej na początku i dla najważniejszych produktów." },
    { question: "Czy opisy będą inne niż u konkurencji?", answer: "Tak, powstają według wytycznych sklepu i z danych produktu, a nie przez kopiowanie opisu producenta." },
    { question: "Czy obsłużycie pliki od różnych dostawców?", answer: "Tak. Dla każdego formatu przygotowujemy import, a AI pomaga przy nietypowych plikach." },
    { question: "Czy produkty trafią na marketplace?", answer: "Tak, jeśli marketplace lub narzędzie, z którego korzystacie, udostępnia API." },
    { question: "Czy AI przetłumaczy opisy?", answer: "Tak. Tłumaczenia najważniejszych produktów warto sprawdzić." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-marketingu"],
  relatedProcessSlugs: ["ofertowanie"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
