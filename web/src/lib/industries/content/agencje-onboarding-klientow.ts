import type { IndustryPageContent } from "../types";

export const agencjeOnboardingKlientow: IndustryPageContent = {
  industrySlug: "agencje-marketingowe",
  subSlug: "onboarding-klientow",
  name: "Onboarding klientów",
  excerpt: "Dostępy, dane, materiały marki i brief startowy zebrane na początku współpracy, bez tygodni maili i przypominania.",
  metaTitle: "Onboarding klientów agencji marketingowej: automatyzacja",
  metaDescription:
    "Automatyzujemy onboarding klientów agencji: umowa, dostępy do kont reklamowych i analityki, materiały marki, brief startowy i projekt w narzędziu.",
  primaryKeyword: "onboarding klienta agencji marketingowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje marketingowe: onboarding klientów",
    title: "Onboarding klienta w dni, a nie w tygodnie",
    lead: "Nowy klient podpisał umowę, a agencja przez kolejne tygodnie zbiera dostępy do kont reklamowych, analityki i strony, prosi o logotypy, wytyczne marki i dane o produktach. Zespół czeka, a klient zastanawia się, kiedy zacznie się praca. Automatyzujemy onboarding: klient dostaje jedną listę rzeczy do przekazania, system pilnuje, czego brakuje, a zespół zaczyna pracę z kompletem materiałów.",
    bullets: [
      "Jedna lista dostępów i materiałów dla klienta",
      "Przypomnienia o brakach bez angażowania accounta",
      "Projekt i zespół gotowe w dniu kompletu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pozyskujące regularnie nowych klientów na retainery i projekty" },
    { label: "Co automatyzujemy", value: "Umowy, dostępy, materiały, brief startowy, projekt, komunikację" },
    { label: "Narzędzia", value: "Formularz, dysk, narzędzie projektowe, podpis elektroniczny, n8n" },
    { label: "Zasada", value: "Dostępy w uporządkowany sposób, z kontrolą uprawnień" },
  ],
  symptoms: {
    title: "Kiedy onboarding warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, pierwsze tygodnie współpracy tracicie na zbieranie informacji.",
    items: [
      "Zebranie dostępów do kont reklamowych i analityki trwa tygodniami.",
      "Materiały marki przychodzą w kilku mailach i różnych wersjach.",
      "Account przypomina klientowi o brakach zamiast planować pracę.",
      "Każdy account prowadzi onboarding po swojemu.",
      "Zespół zaczyna pracę bez kompletu informacji.",
      "Po zakończeniu współpracy nie wiadomo, jakie dostępy agencja jeszcze ma.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja onboardingu",
    paragraphs: [
      "Po podpisaniu umowy, także elektronicznie, klient dostaje jedną listę rzeczy do przekazania, dopasowaną do zakresu współpracy: dostępy do kont reklamowych, analityki, strony i mediów społecznościowych, materiały marki, informacje o produktach, osoby kontaktowe. Lista ma formę prostego formularza z instrukcjami, jak nadać dostęp.",
      "System pilnuje, czego brakuje, i przypomina klientowi o brakach. Account widzi stan onboardingu w jednym miejscu i angażuje się tylko wtedy, gdy potrzebna jest rozmowa. Przekazane materiały trafiają do folderu klienta, a dostępy do rejestru dostępów agencji.",
      "Gdy komplet jest gotowy, projekt w narzędziu projektowym jest zakładany z zespołem, zadaniami startowymi i briefem. Po zakończeniu współpracy rejestr dostępów pomaga uporządkować uprawnienia i przekazać je klientowi.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja onboardingu",
    lead: "Zakres dopasowujemy do usług agencji.",
    items: [
      { title: "Umowa", body: "Umowa z szablonu i podpis elektroniczny." },
      { title: "Lista dla klienta", body: "Dostępy i materiały dopasowane do zakresu współpracy." },
      { title: "Instrukcje dostępów", body: "Jak nadać agencji dostęp do poszczególnych kont." },
      { title: "Przypomnienia", body: "Informacja dla klienta o brakach, bez angażowania accounta." },
      { title: "Materiały marki", body: "Logotypy, wytyczne i przykłady w folderze klienta." },
      { title: "Rejestr dostępów", body: "Jakie dostępy agencja ma, do czego i od kiedy." },
      { title: "Start projektu", body: "Projekt, zespół i zadania startowe po skompletowaniu." },
      { title: "Zakończenie współpracy", body: "Lista dostępów do uporządkowania i przekazania." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od podpisanej umowy do pierwszego zadania.",
    items: [
      {
        title: "Nowy klient",
        trigger: "Klient podpisuje umowę",
        steps: ["Lista dostępów i materiałów dla klienta", "Przypomnienia o brakach i stan onboardingu dla accounta", "Projekt i zadania startowe po skompletowaniu"],
        result: "Zespół zaczyna pracę z kompletem informacji, a account nie goni klienta.",
      },
      {
        title: "Koniec współpracy",
        trigger: "Umowa z klientem się kończy",
        steps: ["Lista dostępów z rejestru", "Zadania uporządkowania uprawnień", "Potwierdzenie dla klienta"],
        result: "Agencja nie zostaje z dostępami, których nie powinna mieć.",
      },
    ],
  },
  example: {
    title: "Onboarding przed i po automatyzacji",
    lead: "Przykład agencji, która pozyskuje kilku nowych klientów miesięcznie.",
    rows: [
      { label: "Dostępy", before: "Zbierane tygodniami w mailach.", after: "Jedna lista z instrukcjami." },
      { label: "Przypomnienia", before: "Account pisze i dzwoni.", after: "Automatyczne przypomnienia." },
      { label: "Start pracy", before: "Bez kompletu informacji.", after: "Projekt po skompletowaniu." },
      { label: "Koniec współpracy", before: "Nie wiadomo, jakie dostępy zostały.", after: "Rejestr i lista do uporządkowania." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od spisania, czego agencja potrzebuje od klienta przy każdej usłudze.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś wygląda onboarding i czego potrzebuje zespół na starcie.", fromYou: "Rozmowa z accountami i liderami zespołów." },
      { title: "Listy i projekt", duration: "około tygodnia", body: "Przygotowujemy listy dla usług, instrukcje dostępów i rejestr.", fromYou: "Akceptacja list i instrukcji." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go z nowymi klientami.", fromYou: "Nowi klienci do testu." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy przepływ dla wszystkich nowych klientów i aktualizujemy instrukcje.", fromYou: "Informacja o nowych usługach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od listy i przypomnień.",
    items: [
      { name: "Lista i przypomnienia", description: "Dla agencji, które chcą szybciej zbierać dostępy.", includes: ["Lista dla klienta", "Instrukcje dostępów", "Przypomnienia", "Stan onboardingu dla accounta"] },
      { name: "Onboarding i projekt", description: "Dla agencji, które chcą zaczynać pracę z kompletem.", includes: ["Wszystko z wariantu Lista i przypomnienia", "Umowa i podpis elektroniczny", "Materiały marki w folderze klienta", "Start projektu"] },
      { name: "Pełny cykl", description: "Dla agencji, które chcą panować nad dostępami.", includes: ["Wszystko z wariantu Onboarding i projekt", "Rejestr dostępów", "Zakończenie współpracy", "Raport onboardingu"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba usług i list dla klientów,",
      "narzędzie projektowe i dysk,",
      "podpis elektroniczny,",
      "zakres rejestru dostępów,",
      "liczba nowych klientów miesięcznie.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Hasła przesyłane w niebezpieczny sposób.", mitigation: "Instrukcje prowadzą do nadania dostępu przez uprawnienia kont, a nie do przesyłania haseł." },
      { risk: "Za dużo przypomnień dla klienta.", mitigation: "Częstotliwość ustala agencja, a account może wstrzymać przypomnienia." },
      { risk: "Nieaktualny rejestr dostępów.", mitigation: "Rejestr aktualizuje się przy onboardingu i zakończeniu współpracy, a okresowo jest przeglądany." },
      { risk: "Klient poczuje, że rozmawia z automatem.", mitigation: "Account wita klienta osobiście, a automatyzacja przejmuje tylko listy i przypomnienia." },
    ],
  },
  faq: [
    { question: "Czy klient musi przesyłać hasła?", answer: "Nie powinien. Instrukcje prowadzą do nadania agencji dostępu przez uprawnienia w kontach, co jest bezpieczniejsze." },
    { question: "Czy lista zależy od zakresu współpracy?", answer: "Tak. Klient dostaje tylko te punkty, które dotyczą zamówionych usług." },
    { question: "Czy to obsłuży podpis umowy?", answer: "Tak, jeśli korzystacie z usługi podpisu elektronicznego. Umowa z szablonu może trafić do podpisu automatycznie." },
    { question: "Gdzie trafiają materiały marki?", answer: "Do folderu klienta na dysku, którego używacie, i do wytycznych marki, jeśli korzystacie z AI w treściach." },
    { question: "Czy rejestr dostępów pomoże przy zakończeniu współpracy?", answer: "Tak. Pokazuje, jakie dostępy agencja ma, i pozwala je uporządkować i przekazać klientowi." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["obieg-umow", "onboarding-pracownika"],
  relatedToolSlugs: ["google-workspace", "n8n", "airtable"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-marketingowej", "automatyzacja-onboardingu-pracownika", "rodo-a-automatyzacja-procesow"],
};
