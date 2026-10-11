import type { IndustryPageContent } from "../types";

export const posrednictwoUbezpieczenioweProwizje: IndustryPageContent = {
  industrySlug: "posrednictwo-ubezpieczeniowe",
  subSlug: "prowizje",
  name: "Prowizje i rozliczenia agentów",
  excerpt: "Zestawienia prowizji z wielu towarzystw w jednym miejscu, porównanie z bazą polis, lista rozbieżności i podział prowizji między agentów bez arkuszy.",
  metaTitle: "Rozliczanie prowizji w agencji ubezpieczeniowej",
  metaDescription:
    "Automatyzujemy rozliczanie prowizji w agencji: import zestawień z towarzystw, porównanie z bazą polis, rozbieżności, podział na agentów i raporty.",
  primaryKeyword: "rozliczanie prowizji agencji ubezpieczeniowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Pośrednictwo ubezpieczeniowe: prowizje",
    title: "Prowizje z kilkunastu towarzystw rozliczone bez arkuszy",
    lead: "Każde towarzystwo przysyła zestawienie prowizji w innym formacie, w innym terminie i z inną strukturą. Agencja musi sprawdzić, czy prowizja wpłynęła za wszystkie polisy i w dobrej wysokości, a potem rozliczyć agentów. W wielu agencjach to kilka dni pracy w arkuszach co miesiąc. Automatyzujemy rozliczenia: zestawienia trafiają do jednej bazy, są porównane z polisami, a rozbieżności i podział prowizji widać od razu.",
    bullets: [
      "Zestawienia z wielu towarzystw w jednym formacie",
      "Porównanie z bazą polis i lista rozbieżności",
      "Podział prowizji między agentów do akceptacji",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje, multiagencje i sieci agentów" },
    { label: "Co automatyzujemy", value: "Import zestawień, porównanie, rozbieżności, podział, raporty" },
    { label: "Narzędzia", value: "Baza polis, arkusze i pliki z towarzystw, program do faktur, n8n" },
    { label: "Zasada", value: "Rozliczenie agentów akceptuje właściciel agencji" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia prowizji warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, rozliczenia zabierają za dużo czasu.",
    items: [
      "Zestawienia z każdego towarzystwa mają inny format.",
      "Sprawdzenie, czy prowizja wpłynęła za każdą polisę, robi się ręcznie albo wcale.",
      "Rozbieżności wychodzą po kilku miesiącach.",
      "Podział prowizji między agentów liczy się w arkuszu.",
      "Agenci pytają o swoje rozliczenia, a odpowiedź wymaga szukania.",
      "Nie wiadomo, które towarzystwa i produkty przynoszą agencji najwięcej.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń prowizji",
    paragraphs: [
      "Zestawienia prowizji z towarzystw, przysyłane jako pliki lub pobierane z portali, trafiają do jednej bazy. Dla każdego towarzystwa przygotowujemy import, który zamienia jego format na wspólny: polisa, klient, składka, stawka, kwota prowizji.",
      "System porównuje zestawienia z bazą polis agencji. Wskazuje polisy, za które prowizja nie wpłynęła, polisy w zestawieniu, których nie ma w bazie, i różnice w stawkach. Rozbieżności trafiają do wyjaśnienia z towarzystwem.",
      "Na podstawie zasad współpracy z agentami system przygotowuje podział prowizji. Właściciel agencji akceptuje rozliczenie, agenci dostają zestawienia, a faktury lub rachunki powstają w programie do faktur.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja prowizji",
    lead: "Zakres dopasowujemy do liczby towarzystw i modelu współpracy z agentami.",
    items: [
      { title: "Import zestawień", body: "Pliki z towarzystw zamienione na wspólny format." },
      { title: "Porównanie z polisami", body: "Brakujące prowizje i polisy spoza bazy." },
      { title: "Kontrola stawek", body: "Różnice względem warunków współpracy z towarzystwem." },
      { title: "Lista rozbieżności", body: "Do wyjaśnienia z towarzystwem, ze statusem." },
      { title: "Podział na agentów", body: "Według zasad współpracy, do akceptacji." },
      { title: "Zestawienia dla agentów", body: "Każdy agent widzi swoje polisy i prowizje." },
      { title: "Faktury i KSeF", body: "Dokumenty rozliczeniowe w programie do faktur." },
      { title: "Raporty", body: "Prowizje według towarzystw, produktów i agentów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zestawienia do rozliczenia agentów.",
    items: [
      {
        title: "Zestawienie z towarzystwa",
        trigger: "Nowy plik prowizyjny w skrzynce",
        steps: ["Import do wspólnego formatu", "Porównanie z bazą polis", "Lista rozbieżności do wyjaśnienia"],
        result: "Rozbieżności widać w dniu otrzymania zestawienia, a nie po kwartale.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu",
        steps: ["Podział prowizji między agentów", "Akceptacja właściciela", "Zestawienia dla agentów i dokumenty rozliczeniowe"],
        result: "Agenci dostają rozliczenia na czas, bez pytań.",
      },
    ],
  },
  example: {
    title: "Prowizje przed i po automatyzacji",
    lead: "Przykład multiagencji współpracującej z kilkunastoma towarzystwami.",
    rows: [
      { label: "Zestawienia", before: "Każde w innym arkuszu.", after: "Wspólny format." },
      { label: "Kontrola", before: "Wybiórcza.", after: "Każda polisa porównana z bazą." },
      { label: "Agenci", before: "Rozliczenie w arkuszu.", after: "Podział do akceptacji." },
      { label: "Wiedza", before: "Brak przeglądu.", after: "Raport według towarzystw i produktów." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednym miesiącu równolegle z obecnym sposobem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy zestawienia z towarzystw i zasady współpracy z agentami.", fromYou: "Przykładowe zestawienia i zasady podziału." },
      { title: "Importy i zasady", duration: "1–2 tygodnie", body: "Przygotowujemy importy dla towarzystw i reguły porównania.", fromYou: "Weryfikacja wyników importu." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy przepływy i porównujemy wyniki z ręcznym rozliczeniem.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i pilnujemy zmian formatów.", fromYou: "Informacja o nowych towarzystwach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od importu i porównania z polisami.",
    items: [
      { name: "Kontrola prowizji", description: "Dla agencji, które chcą wiedzieć, czy dostają wszystko.", includes: ["Import zestawień", "Porównanie z polisami", "Lista rozbieżności", "Kontrola stawek"] },
      { name: "Rozliczenia agentów", description: "Dla agencji i sieci z wieloma agentami.", includes: ["Wszystko z wariantu Kontrola prowizji", "Podział na agentów", "Zestawienia dla agentów", "Faktury i KSeF"] },
      { name: "Pełny przegląd", description: "Dla agencji, które chcą zarządzać portfelem.", includes: ["Wszystko z wariantu Rozliczenia agentów", "Raporty według towarzystw i produktów", "Raport dla właściciela", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba towarzystw i formatów zestawień,",
      "liczba agentów i złożoność zasad podziału,",
      "stan bazy polis,",
      "integracja z programem do faktur,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędny import po zmianie formatu przez towarzystwo.", mitigation: "Import sprawdza strukturę pliku i zatrzymuje się przy zmianach." },
      { risk: "Błędny podział prowizji.", mitigation: "Właściciel agencji akceptuje rozliczenie przed wysyłką." },
      { risk: "Agent zobaczy prowizje innych agentów.", mitigation: "Każdy agent ma dostęp tylko do swoich danych." },
      { risk: "Rozbieżność zostanie bez wyjaśnienia.", mitigation: "Rozbieżności mają status i przypomnienia." },
    ],
  },
  faq: [
    { question: "Czy obsłużycie zestawienia z każdego towarzystwa?", answer: "Z każdego, które przysyła dane w pliku lub udostępnia je do pobrania. Dla każdego formatu przygotowujemy osobny import." },
    { question: "Czy system sam wyjaśni rozbieżności z towarzystwem?", answer: "Nie. Przygotowuje listę rozbieżności z danymi, a wyjaśnia je osoba z agencji." },
    { question: "Czy agenci zobaczą swoje rozliczenia online?", answer: "Tak, przez zestawienie lub prosty widok z danymi tylko ich polis." },
    { question: "Czy to działa dla sieci agentów?", answer: "Tak. Zasady podziału mogą obejmować kilka poziomów współpracy." },
    { question: "Czy dokumenty rozliczeniowe trafią do KSeF?", answer: "Faktury powstają w waszym programie do faktur, który wysyła je do KSeF, albo przez bezpośrednie połączenie." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedToolSlugs: ["airtable", "ksef", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
