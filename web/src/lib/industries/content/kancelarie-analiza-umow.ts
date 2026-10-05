import type { IndustryPageContent } from "../types";

export const kancelarieAnalizaUmow: IndustryPageContent = {
  industrySlug: "kancelarie-prawne",
  subSlug: "analiza-umow",
  name: "Analiza umów z AI",
  excerpt: "AI porównuje umowy ze wzorcami kancelarii, oznacza odstępstwa i streszcza dokumenty do oceny prawnika.",
  metaTitle: "Analiza umów AI dla kancelarii: szybszy przegląd umów",
  metaDescription:
    "AI do analizy umów w kancelariach: porównanie ze wzorcem, lista odstępstw, streszczenia i dane z umów. Wynik do oceny prawnika, dane chronione w UE.",
  primaryKeyword: "analiza umów AI",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Kancelarie prawne: analiza umów",
    title: "Analiza umów z AI: przegląd umów szybciej, decyzje nadal po stronie prawnika",
    lead: "Przegląd umowy to w dużej części czytanie i porównywanie z tym, co kancelaria uważa za standard. Budujemy rozwiązanie, w którym AI zestawia umowę ze wzorcem i zasadami kancelarii, oznacza postanowienia wymagające uwagi i przygotowuje streszczenie. Prawnik zaczyna od listy odstępstw, a nie od pierwszej strony.",
    bullets: [
      "Porównanie umowy ze wzorcem i zasadami kancelarii",
      "Lista odstępstw do oceny prawnika",
      "Dane z umów w systemie zamiast przepisywania",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Kancelarie i działy prawne, które przeglądają dużo umów" },
    { label: "Co robi AI", value: "Porównuje, oznacza odstępstwa, streszcza i wyciąga dane" },
    { label: "Co robi prawnik", value: "Ocenia ryzyka, negocjuje i decyduje o treści umowy" },
    { label: "Bezpieczeństwo", value: "Dane w UE, bez trenowania modeli, minimum przesyłanych danych" },
  ],
  symptoms: {
    title: "Kiedy analiza umów z AI ma sens",
    lead: "Najwięcej korzyści widać tam, gdzie umów jest dużo, a kancelaria ma swoje standardy.",
    items: [
      "Przegląd powtarzalnych umów, np. NDA, umów dostawy czy najmu, zajmuje prawnikom dużo czasu.",
      "Kancelaria ma wzorce i listy kontrolne, ale porównanie z nimi robi się ręcznie.",
      "Przy badaniu due diligence trzeba przejrzeć dziesiątki lub setki umów w krótkim czasie.",
      "Klient przysyła umowę kontrahenta i oczekuje szybkiej informacji o ryzykach.",
      "Daty, kwoty, okresy wypowiedzenia i kary umowne przepisuje się z umów ręcznie.",
      "Poziom przeglądu zależy od tego, który prawnik akurat się nim zajmuje.",
    ],
  },
  intro: {
    title: "Jak działa analiza umów z AI",
    paragraphs: [
      "Punktem wyjścia są standardy kancelarii: wzorce umów, listy kontrolne i zasady, np. jaki limit odpowiedzialności jest akceptowalny dla klienta. AI czyta przesłaną umowę, odnajduje odpowiadające postanowienia i porównuje je z tymi zasadami.",
      "Wynikiem jest raport roboczy: streszczenie umowy, lista postanowień odbiegających od standardu z krótkim opisem różnicy, lista brakujących postanowień i najważniejsze dane, takie jak strony, terminy, kwoty i kary. Każda pozycja wskazuje miejsce w umowie, więc prawnik szybko ją sprawdzi.",
      "AI nie ocenia, czy dane postanowienie jest dla klienta akceptowalne w konkretnej sytuacji. To nadal praca prawnika. Rozwiązanie skraca natomiast czas potrzebny na dotarcie do miejsc, które tej oceny wymagają.",
    ],
  },
  scope: {
    title: "Co obejmuje analiza umów z AI",
    lead: "Zakres dopasowujemy do rodzajów umów, z którymi kancelaria pracuje najczęściej.",
    items: [
      { title: "Porównanie ze wzorcem", body: "Postanowienia umowy zestawione ze wzorcem i zasadami kancelarii." },
      { title: "Lista odstępstw", body: "Postanowienia odbiegające od standardu z opisem różnicy i wskazaniem miejsca w umowie." },
      { title: "Brakujące postanowienia", body: "Informacja, czego w umowie brakuje względem listy kontrolnej." },
      { title: "Streszczenie", body: "Krótkie streszczenie umowy dla prawnika lub klienta, do weryfikacji." },
      { title: "Dane z umów", body: "Strony, terminy, kwoty, okresy wypowiedzenia i kary zapisane w systemie." },
      { title: "Przegląd wielu umów", body: "Zestawienie dla zbioru umów, np. przy badaniu due diligence." },
      { title: "Porównanie wersji", body: "Zmiany między wersjami umowy w negocjacjach, z opisem ich znaczenia." },
      { title: "Raport dla klienta", body: "Projekt zestawienia ryzyk do dopracowania przez prawnika." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Typowe zastosowania w kancelariach. W każdym z nich raport AI trafia do prawnika, a nie bezpośrednio do klienta.",
    items: [
      {
        title: "Umowa od kontrahenta klienta",
        trigger: "Klient przesyła umowę do zaopiniowania",
        steps: ["Zapis umowy w sprawie klienta", "Porównanie ze wzorcem i listą kontrolną", "Raport odstępstw do oceny prawnika"],
        result: "Prawnik zaczyna od miejsc wymagających uwagi.",
      },
      {
        title: "Badanie due diligence",
        trigger: "Zbiór umów spółki do przejrzenia",
        steps: ["Odczyt danych z każdej umowy", "Oznaczenie postanowień o zmianie kontroli, karach i wypowiedzeniu", "Zestawienie wszystkich umów w jednej tabeli"],
        result: "Zespół widzi obraz całego zbioru i wie, które umowy przeczytać w pierwszej kolejności.",
      },
      {
        title: "Kolejna wersja w negocjacjach",
        trigger: "Strona przeciwna odsyła poprawioną umowę",
        steps: ["Porównanie z poprzednią wersją", "Opis zmian i ich znaczenia", "Wskazanie zmian sprzecznych z zasadami klienta"],
        result: "Szybka odpowiedź w negocjacjach bez ręcznego porównywania dokumentów.",
      },
    ],
  },
  security: {
    title: "Umowy klientów pod ochroną",
    lead: "Umowy zawierają tajemnice handlowe klientów, dlatego każdy przepływ projektujemy z myślą o poufności.",
    items: [
      { title: "Dane w UE", body: "Przepływy działają na serwerze w UE lub w infrastrukturze kancelarii." },
      { title: "Modele bez trenowania", body: "Treść umów nie służy do trenowania modeli AI." },
      { title: "Tylko to, co potrzebne", body: "Gdzie się da, dane osobowe w umowach są usuwane lub zastępowane przed analizą." },
      { title: "Dostęp do spraw", body: "Raporty widzą tylko osoby pracujące przy danej sprawie." },
      { title: "Brak automatycznej wysyłki", body: "Żaden raport nie trafia do klienta bez akceptacji prawnika." },
      { title: "Ślad działań", body: "Zapisujemy, kiedy i jaka analiza została wykonana." },
    ],
  },
  example: {
    title: "Przegląd umowy przed i po wdrożeniu",
    lead: "Przykład kancelarii obsługującej firmy, które regularnie przysyłają umowy kontrahentów do zaopiniowania.",
    rows: [
      { label: "Pierwsze czytanie", before: "Prawnik czyta umowę od początku do końca.", after: "Prawnik zaczyna od streszczenia i listy odstępstw." },
      { label: "Standard kancelarii", before: "Porównanie z listą kontrolną w pamięci.", after: "Porównanie z zapisanymi zasadami kancelarii." },
      { label: "Dane z umowy", before: "Przepisywanie terminów i kwot.", after: "Dane w systemie do sprawdzenia." },
      { label: "Odpowiedź dla klienta", before: "Pisana od zera.", after: "Projekt zestawienia ryzyk do dopracowania." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej kancelarii.",
  },
  implementation: {
    title: "Jak wdrażamy analizę umów",
    lead: "Zaczynamy od jednego rodzaju umów i standardów kancelarii, a potem rozszerzamy zakres.",
    phases: [
      {
        title: "Standardy kancelarii",
        duration: "około tygodnia",
        body: "Spisujemy z prawnikami wzorce, listy kontrolne i zasady oceny dla wybranego rodzaju umów.",
        fromYou: "Wzorce, listy kontrolne i kilka godzin pracy prawnika.",
      },
      {
        title: "Budowa",
        duration: "1–3 tygodnie",
        body: "Budujemy przepływ analizy i format raportu, połączony z miejscem, w którym kancelaria przechowuje dokumenty.",
        fromYou: "Dostęp do środowiska i akceptacja formatu raportu.",
      },
      {
        title: "Testy na umowach",
        duration: "1–2 tygodnie",
        body: "Porównujemy raporty AI z oceną prawników na zanonimizowanych lub archiwalnych umowach i poprawiamy zasady.",
        fromYou: "Zbiór umów testowych i prawnik oceniający wyniki.",
      },
      {
        title: "Start i rozwój",
        duration: "stale",
        body: "Uruchamiamy rozwiązanie i dokładamy kolejne rodzaje umów, gdy pierwszy działa dobrze.",
        fromYou: "Uwagi prawników i aktualizacje standardów.",
      },
    ],
  },
  variants: {
    title: "Warianty wdrożenia",
    lead: "Zakres zależy od liczby rodzajów umów i tego, czy analiza ma działać w procesie kancelarii.",
    items: [
      {
        name: "Jeden rodzaj umów",
        description: "Dla kancelarii, które chcą sprawdzić rozwiązanie na najczęstszej umowie.",
        includes: ["Standardy dla jednego rodzaju umów", "Raport odstępstw i streszczenie", "Testy z prawnikami", "Przepływ na serwerze w UE"],
      },
      {
        name: "Kilka rodzajów umów",
        description: "Dla kancelarii obsługujących wielu klientów biznesowych.",
        includes: ["Wszystko z wariantu Jeden rodzaj umów", "Standardy dla kilku rodzajów umów", "Dane z umów w systemie", "Porównanie wersji w negocjacjach"],
      },
      {
        name: "Due diligence",
        description: "Dla kancelarii prowadzących transakcje.",
        includes: ["Przegląd zbiorów umów", "Zestawienie postanowień w tabeli", "Oznaczenie umów do pilnego przeczytania", "Praca na wydzielonym środowisku dla transakcji"],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po rozmowie o rodzajach umów. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba rodzajów umów i stopień uporządkowania standardów kancelarii,",
      "liczba i długość analizowanych umów, od których zależy koszt modeli AI,",
      "integracja z miejscem przechowywania dokumentów i systemem kancelarii,",
      "wymagania bezpieczeństwa, np. działanie wyłącznie w infrastrukturze kancelarii,",
      "zakres opieki i aktualizacji standardów.",
    ],
  },
  risks: {
    title: "Granice analizy umów z AI",
    items: [
      { risk: "AI pominie ważne postanowienie.", mitigation: "Raport jest materiałem roboczym, a nie opinią. Lista kontrolna wskazuje także brakujące postanowienia, a prawnik odpowiada za ostateczną ocenę." },
      { risk: "AI źle zinterpretuje nietypowe sformułowanie.", mitigation: "Każda pozycja raportu wskazuje miejsce w umowie, więc prawnik szybko sprawdza kontekst." },
      { risk: "Standardy kancelarii są nieaktualne.", mitigation: "Standardy są zapisane w jednym miejscu i aktualizowane razem z prawnikami, a nie ukryte w ustawieniach modelu." },
      { risk: "Poufne umowy trafią w niewłaściwe miejsce.", mitigation: "Przepływy w UE lub w infrastrukturze kancelarii, modele bez trenowania na danych i dostęp tylko dla zespołu sprawy." },
    ],
  },
  faq: [
    { question: "Czy AI może samodzielnie zaopiniować umowę?", answer: "Nie. AI przygotowuje raport roboczy: odstępstwa od standardu, brakujące postanowienia i streszczenie. Ocenę prawną i odpowiedź dla klienta przygotowuje prawnik." },
    { question: "Jakie umowy najlepiej nadają się do analizy z AI?", answer: "Najlepiej powtarzalne umowy, dla których kancelaria ma wzorce lub listy kontrolne, np. NDA, umowy dostawy, najmu, usług czy licencyjne. Przy umowach nietypowych AI pomaga głównie w streszczeniu i wyciągnięciu danych." },
    { question: "Czy analiza działa na umowach w języku angielskim?", answer: "Tak. Modele AI dobrze radzą sobie z umowami po angielsku i w innych językach, a raport może być przygotowany po polsku." },
    { question: "Czy to działa przy badaniu due diligence?", answer: "Tak. Przy dużych zbiorach umów AI odczytuje dane i oznacza ważne postanowienia, a zespół dostaje zestawienie wszystkich umów i wie, od których zacząć." },
    { question: "Skąd AI zna standardy naszej kancelarii?", answer: "Spisujemy je razem z wami w postaci wzorców, list kontrolnych i zasad. AI porównuje umowy z tymi zasadami, więc raport odzwierciedla podejście kancelarii, a nie ogólne założenia modelu." },
    { question: "Czy treść umów jest bezpieczna?", answer: "Przepływy działają na serwerze w UE lub w infrastrukturze kancelarii, modele AI nie są trenowane na przesyłanych danych, a raporty widzą tylko osoby pracujące przy sprawie." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "asystent-ai-na-firmowej-wiedzy", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["claude", "chatgpt", "n8n"],
  relatedArticleSlugs: ["ai-w-codziennej-pracy-zespolu", "rodo-a-automatyzacja-procesow", "porzadek-w-danych-przed-ai-i-automatyzacja"],
};
