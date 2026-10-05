import type { IndustryPageContent } from "../types";

export const kancelarieRozliczenia: IndustryPageContent = {
  industrySlug: "kancelarie-prawne",
  subSlug: "rozliczenia",
  name: "Rozliczenia kancelarii",
  excerpt: "Czas pracy, zestawienia dla klientów, faktury i przypomnienia o płatnościach bez ręcznego liczenia.",
  metaTitle: "Rozliczenia kancelarii: czas pracy, raporty i faktury",
  metaDescription:
    "Automatyzujemy rozliczenia kancelarii: czas pracy, zestawienia godzin dla klientów, akceptacja partnera, faktury z KSeF i przypomnienia o płatnościach.",
  primaryKeyword: "rozliczenia kancelarii",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Kancelarie prawne: rozliczenia",
    title: "Rozliczenia kancelarii: od czasu pracy do zapłaconej faktury",
    lead: "Rozliczenia godzinowe, ryczałty i success fee wymagają dokładnych danych, a zestawienia dla klientów często składa się ręcznie na koniec miesiąca. Automatyzujemy drogę od ewidencji czasu do zapłaconej faktury: zestawienia do akceptacji partnera, faktury w programie księgowym i KSeF, przypomnienia o płatnościach i raporty dla partnerów.",
    bullets: [
      "Zestawienia godzin dla klientów bez ręcznego liczenia",
      "Faktury w programie księgowym i KSeF",
      "Przypomnienia o płatnościach i raport należności",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Kancelarie rozliczające się godzinowo, ryczałtowo lub mieszanie" },
    { label: "Co automatyzujemy", value: "Czas pracy, zestawienia, akceptacje, faktury, płatności, raporty" },
    { label: "Narzędzia", value: "System lub arkusz czasu pracy, program do faktur, KSeF, bank" },
    { label: "Zasada", value: "Partner akceptuje zestawienie przed wystawieniem faktury" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia warto zautomatyzować",
    lead: "Jeśli rozpoznajecie te sytuacje, kancelaria prawdopodobnie traci przychód i czas na każdym zamknięciu miesiąca.",
    items: [
      "Prawnicy uzupełniają czas pracy na koniec miesiąca z pamięci.",
      "Zestawienia godzin dla klientów składa się ręcznie z kilku źródeł.",
      "Faktury powstają kilka dni po zamknięciu miesiąca.",
      "Nikt nie pilnuje, czy ryczałt nie przekracza ustalonej liczby godzin.",
      "Przypomnienia o płatnościach wysyła się nieregularnie albo wcale.",
      "Partnerzy nie widzą na bieżąco rentowności klientów i obciążenia zespołu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń",
    paragraphs: [
      "Punktem wyjścia jest ewidencja czasu pracy. Jeśli kancelaria używa systemu, łączymy się z nim. Jeśli czas zapisuje się w arkuszach lub wcale, proponujemy prosty sposób zapisu, np. z kalendarza lub krótkiego formularza wypełnianego po pracy, który przypomina o uzupełnieniu wpisów.",
      "Na koniec okresu system przygotowuje dla każdego klienta zestawienie czynności i godzin według umowy: stawki godzinowej, ryczałtu z limitem godzin albo modelu mieszanego. Partner sprawdza zestawienie i je akceptuje, a dopiero wtedy w programie do faktur powstaje faktura, która trafia do KSeF.",
      "Po wystawieniu faktury system pilnuje płatności: przypomina klientom przed terminem i po nim, a partnerzy widzą należności i rentowność klientów w jednym raporcie.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń",
    lead: "Zakres dopasowujemy do modeli rozliczeń i narzędzi kancelarii.",
    items: [
      { title: "Ewidencja czasu", body: "Połączenie z systemem czasu pracy albo prosty zapis z przypomnieniami." },
      { title: "Zestawienia dla klientów", body: "Czynności i godziny według umowy z klientem, gotowe do wysłania." },
      { title: "Limity ryczałtów", body: "Informacja dla partnera, gdy liczba godzin zbliża się do limitu w umowie." },
      { title: "Akceptacja partnera", body: "Zestawienie trafia do akceptacji przed wystawieniem faktury." },
      { title: "Faktury i KSeF", body: "Faktura w programie księgowym z danymi z zestawienia, wysyłana do KSeF." },
      { title: "Przypomnienia o płatnościach", body: "Uprzejme przypomnienia przed terminem i po nim, z informacją dla partnera." },
      { title: "Koszty sprawy", body: "Opłaty sądowe i inne wydatki przypisane do sprawy i refakturowane." },
      { title: "Raporty dla partnerów", body: "Przychody, należności, obciążenie zespołu i rentowność klientów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od czasu pracy do zapłaty.",
    items: [
      {
        title: "Zamknięcie miesiąca",
        trigger: "Ostatni dzień okresu rozliczeniowego",
        steps: ["Przypomnienie o uzupełnieniu czasu pracy", "Zestawienia dla klientów do akceptacji partnera", "Faktury w programie księgowym i KSeF"],
        result: "Faktury wychodzą w pierwszych dniach miesiąca, a nie po tygodniu.",
      },
      {
        title: "Ryczałt blisko limitu",
        trigger: "Liczba godzin przekracza ustalony próg",
        steps: ["Informacja dla partnera opiekującego się klientem", "Zestawienie czynności w okresie", "Decyzja o rozmowie z klientem"],
        result: "Kancelaria wie o przekroczeniu, zanim stanie się stratą.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład kancelarii obsługującej kilkudziesięciu stałych klientów na ryczałtach i stawkach godzinowych.",
    rows: [
      { label: "Czas pracy", before: "Uzupełniany z pamięci na koniec miesiąca.", after: "Zapisywany na bieżąco, z przypomnieniami." },
      { label: "Zestawienia", before: "Składane ręcznie z kilku arkuszy.", after: "Gotowe do akceptacji w dniu zamknięcia." },
      { label: "Ryczałty", before: "Przekroczenia widoczne po fakcie.", after: "Informacja przy zbliżaniu się do limitu." },
      { label: "Płatności", before: "Brak systematycznych przypomnień.", after: "Przypomnienia i raport należności." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej kancelarii.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Cztery etapy, testowane na zamknięciu jednego miesiąca przed pełnym startem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy modele rozliczeń, ewidencję czasu, program do faktur i obieg akceptacji.", fromYou: "Rozmowa z partnerem i osobą od rozliczeń." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy format zestawień, zasady akceptacji, limity ryczałtów i przypomnienia.", fromYou: "Wzory zestawień i zasady rozliczeń z klientami." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i testujemy je na zamknięciu jednego miesiąca równolegle z obecnym sposobem.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i pilnujemy działania przy kolejnych zamknięciach.", fromYou: "Uwagi po pierwszych zamknięciach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od zestawień i faktur, a raporty dla partnerów dodać później.",
    items: [
      { name: "Zestawienia i faktury", description: "Dla kancelarii, które chcą przyspieszyć zamknięcie miesiąca.", includes: ["Zestawienia dla klientów", "Akceptacja partnera", "Faktury w programie księgowym", "Wysyłka do KSeF"] },
      { name: "Pełne rozliczenia", description: "Dla kancelarii z wieloma modelami rozliczeń.", includes: ["Wszystko z wariantu Zestawienia i faktury", "Ewidencja czasu z przypomnieniami", "Limity ryczałtów", "Przypomnienia o płatnościach"] },
      { name: "Rozliczenia i raporty", description: "Dla kancelarii, w których partnerzy chcą widzieć wyniki na bieżąco.", includes: ["Wszystko z wariantu Pełne rozliczenia", "Raport należności", "Rentowność klientów", "Obciążenie zespołu"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba modeli rozliczeń i ich złożoność,",
      "sposób ewidencji czasu pracy,",
      "integracja z programem do faktur, KSeF i bankiem,",
      "zakres raportów dla partnerów,",
      "liczba klientów i prawników.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędne zestawienie trafi do klienta.", mitigation: "Każde zestawienie akceptuje partner przed wysyłką i wystawieniem faktury." },
      { risk: "Prawnicy nie będą zapisywać czasu.", mitigation: "Prosty sposób zapisu, przypomnienia i podpowiedzi z kalendarza zamiast dodatkowego systemu." },
      { risk: "Niezgodność z umową z klientem.", mitigation: "Zasady rozliczeń każdego klienta są zapisane w jednym miejscu i używane do zestawień." },
      { risk: "Przypomnienie o płatności zaszkodzi relacji.", mitigation: "Treści ustalacie sami, a dla wybranych klientów przypomnienia można wyłączyć." },
    ],
  },
  faq: [
    { question: "Czy obsłużycie ryczałty, stawki godzinowe i success fee?", answer: "Tak. Zasady rozliczeń zapisujemy dla każdego klienta, a zestawienia powstają według nich. Success fee zwykle wymaga decyzji partnera, więc trafia do akceptacji." },
    { question: "Czy musimy kupić system do ewidencji czasu?", answer: "Nie zawsze. Jeśli go macie, łączymy się z nim. Jeśli nie, proponujemy prosty zapis czasu z przypomnieniami, np. w Microsoft 365 lub Airtable." },
    { question: "Czy faktury trafią do KSeF?", answer: "Tak. Faktura powstaje w waszym programie księgowym, który wysyła ją do KSeF, albo przez bezpośrednie połączenie z KSeF, jeśli program tego nie obsługuje." },
    { question: "Czy klient dostanie szczegółowe zestawienie czynności?", answer: "Tak, w formacie, który ustalicie: od listy czynności z czasem po krótkie podsumowanie. Zestawienie trafia do klienta dopiero po akceptacji partnera." },
    { question: "Czy to działa, gdy księgowość prowadzi biuro rachunkowe?", answer: "Tak. Faktury i dane o płatnościach mogą trafiać do biura na bieżąco, a kancelaria ma własne raporty należności i przychodów." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "integracje-systemow"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["ksef", "microsoft-365", "n8n"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "jak-mierzyc-roi-automatyzacji", "airtable-czy-excel"],
};
