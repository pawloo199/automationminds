import type { IndustryPageContent } from "../types";

export const agencjeProjektyIRentownosc: IndustryPageContent = {
  industrySlug: "agencje-marketingowe",
  subSlug: "projekty-i-rentownosc",
  name: "Projekty, czas pracy i rentowność",
  excerpt: "Czas pracy zestawiony z retainerami i budżetami projektów, alerty o przekroczeniach i rentowność klientów na bieżąco.",
  metaTitle: "Czas pracy i rentowność klientów agencji: automatyzacja",
  metaDescription:
    "Automatyzujemy kontrolę projektów w agencji: czas pracy zestawiony z retainerami i budżetami, alerty o przekroczeniach, rentowność klientów i faktury.",
  primaryKeyword: "rentowność klientów agencji",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje marketingowe: projekty i rentowność",
    title: "Wiedzcie, na których klientach agencja zarabia, a na których dokłada",
    lead: "W wielu agencjach retainery i budżety projektów są ustalone, ale nikt na bieżąco nie zestawia ich z czasem pracy zespołu. Przekroczenia wychodzą na koniec miesiąca albo wcale, a właściciel nie wie, którzy klienci są rentowni. Automatyzujemy tę kontrolę: czas pracy jest zestawiany z retainerami i budżetami, account dostaje alert przed przekroczeniem, a rentowność klientów jest widoczna na bieżąco.",
    bullets: [
      "Czas pracy zestawiony z retainerami i budżetami",
      "Alerty przed przekroczeniem budżetu godzin",
      "Rentowność klientów i faktury bez arkuszy",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracujące na retainerach i projektach z budżetem godzinowym" },
    { label: "Co automatyzujemy", value: "Czas pracy, budżety, alerty, rentowność, faktury, raporty dla właściciela" },
    { label: "Narzędzia", value: "Narzędzie do czasu pracy, narzędzie projektowe, program do faktur, n8n" },
    { label: "Zasada", value: "Decyzje o rozmowie z klientem i zmianie zakresu podejmuje człowiek" },
  ],
  symptoms: {
    title: "Kiedy kontrolę projektów warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, agencja może pracować więcej, niż klienci płacą.",
    items: [
      "Czas pracy jest zapisywany, ale nikt nie zestawia go z retainerami.",
      "Przekroczenie budżetu godzin wychodzi po zakończeniu projektu.",
      "Właściciel nie wie bez liczenia, którzy klienci są rentowni.",
      "Prace dodatkowe poza zakresem nie są fakturowane.",
      "Zespół uzupełnia czas pracy na koniec miesiąca z pamięci.",
      "Faktury za retainery i projekty przygotowuje się ręcznie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja kontroli projektów",
    paragraphs: [
      "Punktem wyjścia jest czas pracy. Jeśli agencja używa narzędzia do ewidencji, łączymy się z nim. Jeśli czas zapisuje się nieregularnie, proponujemy prosty sposób zapisu i przypomnienia, żeby dane były aktualne. Każdy wpis jest przypisany do klienta i projektu lub retainera.",
      "System zestawia czas pracy z budżetami: liczbą godzin w retainerze, budżetem projektu, etapami. Account widzi, ile budżetu zostało, a gdy zbliża się próg, dostaje alert. Może wtedy porozmawiać z klientem o zakresie, zanim agencja zacznie dokładać do projektu. Prace poza zakresem są oznaczane do rozliczenia.",
      "Na tej podstawie właściciel agencji widzi rentowność klientów: przychód zestawiony z kosztem czasu zespołu. Faktury za retainery i projekty powstają w programie do faktur według ustaleń, a prace dodatkowe trafiają na fakturę po akceptacji accounta.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja kontroli projektów",
    lead: "Zakres dopasowujemy do modeli rozliczeń i narzędzi agencji.",
    items: [
      { title: "Czas pracy", body: "Połączenie z narzędziem do ewidencji albo prosty zapis z przypomnieniami." },
      { title: "Budżety", body: "Retainery, budżety projektów i etapów w jednym miejscu." },
      { title: "Zestawienie", body: "Czas pracy wobec budżetu dla każdego klienta i projektu." },
      { title: "Alerty", body: "Informacja dla accounta przed przekroczeniem budżetu." },
      { title: "Prace dodatkowe", body: "Oznaczenie prac poza zakresem do rozliczenia." },
      { title: "Rentowność", body: "Przychód wobec kosztu czasu zespołu dla każdego klienta." },
      { title: "Faktury", body: "Retainery, projekty i prace dodatkowe w programie do faktur." },
      { title: "Raport dla właściciela", body: "Rentowność, obciążenie zespołu i należności." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od czasu pracy do decyzji i faktury.",
    items: [
      {
        title: "Retainer blisko limitu",
        trigger: "Wykorzystanie godzin w retainerze przekracza próg",
        steps: ["Alert dla accounta z zestawieniem prac", "Lista prac, które mogą wykraczać poza zakres", "Decyzja accounta o rozmowie z klientem"],
        result: "Agencja wie o przekroczeniu, zanim stanie się stratą.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu rozliczeniowego",
        steps: ["Zestawienie czasu pracy i budżetów", "Faktury za retainery i prace dodatkowe do akceptacji", "Raport rentowności dla właściciela"],
        result: "Faktury wychodzą szybko, a właściciel widzi wyniki klientów.",
      },
    ],
  },
  example: {
    title: "Kontrola projektów przed i po automatyzacji",
    lead: "Przykład agencji z kilkudziesięcioma klientami na retainerach i projektach.",
    rows: [
      { label: "Czas pracy", before: "Uzupełniany z pamięci na koniec miesiąca.", after: "Zapisywany na bieżąco, z przypomnieniami." },
      { label: "Budżety", before: "Przekroczenia widoczne po fakcie.", after: "Alerty przed przekroczeniem." },
      { label: "Prace dodatkowe", before: "Często niezafakturowane.", after: "Oznaczone i rozliczane." },
      { label: "Rentowność", before: "Nieznana bez liczenia.", after: "Widoczna na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najważniejsze jest aktualne zapisywanie czasu pracy. Resztę budujemy na tych danych.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy modele rozliczeń, sposób zapisu czasu pracy i narzędzia.", fromYou: "Rozmowa z właścicielem i accountami." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy budżety, progi alertów, sposób oznaczania prac dodatkowych i raporty.", fromYou: "Zestawienie retainerów i budżetów projektów." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy zestawienia i alerty, testujemy je przez jedno zamknięcie miesiąca.", fromYou: "Osoba porównująca wyniki z dotychczasowymi wyliczeniami." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich klientów i rozwijamy raporty.", fromYou: "Informacja o nowych klientach i zmianach budżetów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od czasu pracy i alertów.",
    items: [
      { name: "Czas i budżety", description: "Dla agencji, które chcą wiedzieć o przekroczeniach wcześniej.", includes: ["Czas pracy z przypomnieniami", "Budżety retainerów i projektów", "Zestawienia", "Alerty"] },
      { name: "Budżety i faktury", description: "Dla agencji, które chcą fakturować wszystko, co robią.", includes: ["Wszystko z wariantu Czas i budżety", "Prace dodatkowe", "Faktury za retainery i projekty", "Przypomnienia o płatnościach"] },
      { name: "Rentowność", description: "Dla właścicieli, którzy chcą zarządzać agencją na danych.", includes: ["Wszystko z wariantu Budżety i faktury", "Rentowność klientów", "Obciążenie zespołu", "Raport dla właściciela"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "sposób zapisu czasu pracy,",
      "liczba klientów i modeli rozliczeń,",
      "integracja z narzędziem projektowym i programem do faktur,",
      "zakres raportów,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Zespół nie będzie zapisywać czasu.", mitigation: "Prosty sposób zapisu, przypomnienia i pokazanie zespołowi, po co te dane są potrzebne." },
      { risk: "Rentowność policzona na złych kosztach.", mitigation: "Koszt godziny ustalamy z właścicielem i aktualizujemy przy zmianach." },
      { risk: "Za dużo alertów dla accountów.", mitigation: "Progi ustalamy z zespołem i korygujemy po pierwszych tygodniach." },
      { risk: "Zespół odbierze to jako kontrolę.", mitigation: "Dane służą do rozmów o zakresie z klientami i planowania pracy, a nie do oceny pojedynczych osób." },
    ],
  },
  faq: [
    { question: "Czy musimy kupić narzędzie do ewidencji czasu?", answer: "Nie zawsze. Jeśli je macie, łączymy się z nim. Jeśli nie, proponujemy prosty zapis czasu z przypomnieniami w narzędziu, którego już używacie." },
    { question: "Jak liczona jest rentowność klienta?", answer: "Jako przychód od klienta wobec kosztu czasu zespołu, według kosztu godziny ustalonego z właścicielem agencji, oraz kosztów bezpośrednich, jeśli je uwzględniamy." },
    { question: "Czy alerty trafiają do klienta?", answer: "Nie. Alerty trafiają do accounta, który decyduje, czy i jak porozmawiać z klientem." },
    { question: "Czy faktury trafią do KSeF?", answer: "Tak. Faktura powstaje w waszym programie do faktur, który wysyła ją do KSeF, albo przez bezpośrednie połączenie z KSeF." },
    { question: "Czy to działa dla projektów rozliczanych ryczałtem?", answer: "Tak. Budżet godzinowy projektu ryczałtowego pozwala sprawdzić, czy wycena była trafna, i lepiej wyceniać kolejne projekty." },
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["airtable", "n8n", "ksef", "google-workspace"],
  relatedArticleSlugs: ["rentownosc-klientow-agencji", "co-zautomatyzowac-w-agencji-marketingowej", "airtable-czy-excel"],
};
