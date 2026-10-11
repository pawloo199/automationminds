import type { IndustryPageContent } from "../types";

export const biuraProjektoweCzasPracy: IndustryPageContent = {
  industrySlug: "biura-projektowe",
  subSlug: "czas-pracy-i-rentownosc",
  name: "Czas pracy i rentowność",
  excerpt: "Czas pracy według projektów i etapów zapisywany na bieżąco, koszty branżystów, porównanie z budżetem godzin, ostrzeżenia i rentowność projektów.",
  metaTitle: "Czas pracy w biurze projektowym i rentowność projektów",
  metaDescription:
    "Automatyzujemy czas pracy w biurze projektowym: godziny według projektów i etapów, koszty branżystów, budżet godzin, ostrzeżenia i rentowność projektów.",
  primaryKeyword: "czas pracy w biurze projektowym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura projektowe: czas pracy",
    title: "Godziny projektu względem budżetu na bieżąco, a nie po jego zakończeniu",
    lead: "Projektanci uzupełniają czas pracy na koniec miesiąca z pamięci, branżyści przysyłają faktury, a o tym, że projekt przekroczył budżet godzin, biuro dowiaduje się po jego zakończeniu. Wtedy nie da się już porozmawiać z inwestorem o pracach dodatkowych. Automatyzujemy czas pracy: godziny są zapisywane na bieżąco, porównywane z budżetem, a kierownik projektu dostaje ostrzeżenie, zanim budżet się skończy.",
    bullets: [
      "Czas pracy według projektów i etapów na bieżąco",
      "Budżet godzin i ostrzeżenia",
      "Rentowność projektów po kosztach branżystów",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura projektowe i pracownie rozliczające projekty ryczałtowo lub godzinowo" },
    { label: "Co automatyzujemy", value: "Czas pracy, budżet godzin, ostrzeżenia, koszty branżystów, rentowność" },
    { label: "Narzędzia", value: "Rejestr czasu, kalendarze, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Decyzje o pracach dodatkowych należą do kierownika projektu" },
  ],
  symptoms: {
    title: "Kiedy czas pracy warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, biuro nie wie, na czym zarabia.",
    items: [
      "Czas pracy uzupełnia się na koniec miesiąca z pamięci.",
      "Przekroczenie budżetu godzin wychodzi po zakończeniu projektu.",
      "Prace dodatkowe na prośbę inwestora nie są rozliczane.",
      "Koszty branżystów nie są przypisane do projektów.",
      "Nie wiadomo, które rodzaje projektów są rentowne.",
      "Wyceny nowych projektów nie korzystają z danych o poprzednich.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja czasu pracy",
    paragraphs: [
      "Projektant zapisuje czas pracy przy projekcie i etapie: w prostym formularzu, z kalendarza albo po zakończeniu dnia pracy z podpowiedzią na podstawie spotkań i plików, nad którymi pracował. Zapis zajmuje chwilę, a dane są aktualne.",
      "Każdy projekt ma budżet godzin z oferty, rozpisany na etapy. System porównuje zapisany czas z budżetem i zaawansowaniem prac, a gdy etap zbliża się do budżetu, kierownik projektu dostaje ostrzeżenie. Prace wykonane na prośbę inwestora poza zakresem mogą być oznaczane jako dodatkowe, do rozmowy o rozliczeniu.",
      "Faktury branżystów, z KSeF lub mailem, są przypisywane do projektów. Raport rentowności pokazuje dla każdego projektu wynagrodzenie, koszt czasu pracy zespołu i koszty branżystów. Dane z zakończonych projektów pomagają wyceniać kolejne.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja",
    lead: "Zakres dopasowujemy do sposobu rozliczania projektów.",
    items: [
      { title: "Zapis czasu", body: "Formularz, kalendarz lub podpowiedź po zakończeniu dnia pracy." },
      { title: "Projekty i etapy", body: "Czas przypisany do etapów." },
      { title: "Budżet godzin", body: "Z oferty, rozpisany na etapy." },
      { title: "Ostrzeżenia", body: "Gdy etap zbliża się do budżetu." },
      { title: "Prace dodatkowe", body: "Oznaczone do rozmowy z inwestorem." },
      { title: "Koszty branżystów", body: "Faktury przypisane do projektów." },
      { title: "Rentowność", body: "Wynagrodzenie, czas i koszty według projektów." },
      { title: "Dane do wycen", body: "Czas realizacji podobnych projektów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapisu czasu do decyzji.",
    items: [
      {
        title: "Zbliżający się budżet",
        trigger: "Etap projektu budowlanego wykorzystał większość budżetu godzin",
        steps: ["Ostrzeżenie dla kierownika projektu", "Lista prac oznaczonych jako dodatkowe", "Kierownik decyduje o rozmowie z inwestorem"],
        result: "Rozmowa o pracach dodatkowych w trakcie, a nie po projekcie.",
      },
      {
        title: "Koniec projektu",
        trigger: "Projekt zakończony",
        steps: ["Raport rentowności", "Dane czasu realizacji do biblioteki wycen", "Wnioski dla kolejnych ofert"],
        result: "Kolejne oferty oparte na danych.",
      },
    ],
  },
  example: {
    title: "Czas pracy przed i po automatyzacji",
    lead: "Przykład pracowni architektonicznej rozliczającej projekty ryczałtowo.",
    rows: [
      { label: "Zapis czasu", before: "Na koniec miesiąca.", after: "Na bieżąco." },
      { label: "Budżet", before: "Po projekcie.", after: "W trakcie, z ostrzeżeniami." },
      { label: "Prace dodatkowe", before: "Nierozliczane.", after: "Oznaczone." },
      { label: "Rentowność", before: "Nieznana.", after: "Raport według projektów." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od prostego zapisu czasu i budżetu dla kilku projektów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś zapisujecie czas i rozliczacie projekty.", fromYou: "Rozmowa z właścicielem i projektantami." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy sposób zapisu, etapy i zasady ostrzeżeń.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Testujemy na kilku projektach.", fromYou: "Projektanci w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie projekty i rozwijamy raporty.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od zapisu czasu i budżetu.",
    items: [
      { name: "Czas i budżet", description: "Dla biur, które chcą widzieć przekroczenia.", includes: ["Zapis czasu", "Projekty i etapy", "Budżet godzin", "Ostrzeżenia"] },
      { name: "Rentowność", description: "Dla biur, które chcą wiedzieć, na czym zarabiają.", includes: ["Wszystko z wariantu Czas i budżet", "Koszty branżystów", "Rentowność", "Prace dodatkowe"] },
      { name: "Wyceny z danych", description: "Dla biur, które chcą lepiej wyceniać.", includes: ["Wszystko z wariantu Rentowność", "Dane do wycen", "Raport dla właściciela", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba projektów i osób,",
      "sposób zapisu czasu,",
      "integracja z kalendarzami i programem do faktur,",
      "zakres raportów,",
      "połączenie z ofertami.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Projektanci nie będą zapisywać czasu.", mitigation: "Zapis zajmuje chwilę, a podpowiedzi z kalendarza go ułatwiają." },
      { risk: "Poczucie kontroli w zespole.", mitigation: "Zasady ustalamy z zespołem, a dane służą do planowania projektów, nie do oceny osób." },
      { risk: "Błędne przypisanie faktury branżysty.", mitigation: "Niepewne przypisania trafiają do sprawdzenia." },
      { risk: "Budżet godzin nieaktualny po zmianie zakresu.", mitigation: "Zmiany budżetu zapisuje się z datą i powodem." },
    ],
  },
  faq: [
    { question: "Czy projektanci muszą zapisywać czas co godzinę?", answer: "Nie. Wystarczy zapis po zakończeniu dnia pracy, z podpowiedziami z kalendarza." },
    { question: "Czy dane posłużą do oceny pracowników?", answer: "Projektujemy je do planowania i rentowności projektów. Zasady wykorzystania ustala biuro z zespołem." },
    { question: "Czy faktury branżystów trafią z KSeF?", answer: "Tak, i są przypisywane do projektów." },
    { question: "Czy zobaczymy rentowność projektów?", answer: "Tak, w raporcie według projektów i rodzajów projektów." },
    { question: "Czy dane pomogą w wycenach?", answer: "Tak, czas realizacji podobnych projektów jest dostępny przy nowych ofertach." },
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "automatyzacja-dla-ksiegowosci", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["raporty-finansowe", "obieg-faktur-kosztowych"],
  relatedToolSlugs: ["airtable", "ksef", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
