import type { IndustryPageContent } from "../types";

export const agencjeAkceptacjeMaterialow: IndustryPageContent = {
  industrySlug: "agencje-marketingowe",
  subSlug: "akceptacje-materialow",
  name: "Akceptacje materiałów",
  excerpt: "Wersje kreacji i treści, uwagi klienta i decyzje w jednym miejscu, z terminami, przypomnieniami i historią akceptacji.",
  metaTitle: "Akceptacje materiałów z klientem w agencji: automatyzacja",
  metaDescription:
    "Automatyzujemy akceptacje materiałów w agencji: wersje kreacji, uwagi klienta przy wersji, terminy, przypomnienia i historia decyzji.",
  primaryKeyword: "akceptacja materiałów z klientem",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje marketingowe: akceptacje",
    title: "Akceptacje materiałów bez wątków mailowych i szukania ostatniej wersji",
    lead: "Kreacja w wersji piątej, uwagi od trzech osób po stronie klienta w trzech mailach, termin publikacji za dwa dni. Akceptacje to jedno z miejsc, w których agencje tracą najwięcej czasu i nerwów. Automatyzujemy ten obieg: każda wersja materiału ma jedno miejsce, uwagi i decyzje są zapisane przy niej, klient dostaje przypomnienie przed terminem, a zespół wie, na co czeka.",
    bullets: [
      "Wersje, uwagi i decyzje w jednym miejscu",
      "Przypomnienia dla klienta przed terminem",
      "Historia akceptacji na wypadek sporu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje kreatywne, social media i content z wieloma materiałami do akceptacji" },
    { label: "Co automatyzujemy", value: "Wysyłkę wersji, zbieranie uwag, terminy, przypomnienia, historię" },
    { label: "Narzędzia", value: "Narzędzie projektowe, dysk, poczta, formularz akceptacji, n8n" },
    { label: "Zasada", value: "Akceptację zawsze wyraża klient, system ją tylko zapisuje" },
  ],
  symptoms: {
    title: "Kiedy akceptacje warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, akceptacje spowalniają projekty i rodzą nieporozumienia.",
    items: [
      "Uwagi klienta są rozproszone w kilku mailach i komunikatorach.",
      "Zespół nie jest pewien, która wersja jest ostateczna.",
      "Akceptacje przychodzą w ostatniej chwili przed publikacją.",
      "Po stronie klienta akceptuje kilka osób, a ich uwagi są sprzeczne.",
      "W sporze trudno odtworzyć, kto i kiedy zaakceptował materiał.",
      "Account spędza dzień na przypominaniu klientom o akceptacjach.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja akceptacji",
    paragraphs: [
      "Gdy zespół kończy wersję materiału, zapisuje ją w ustalonym miejscu, np. na dysku lub w narzędziu projektowym. System wysyła klientowi link do wersji z prośbą o akceptację lub uwagi i terminem. Klient odpowiada przez prosty formularz albo mailem, a jego uwagi są zapisywane przy tej konkretnej wersji.",
      "Gdy akceptować musi kilka osób po stronie klienta, system zbiera ich odpowiedzi w jednym miejscu i pokazuje accountowi, kto jeszcze nie odpowiedział. Przed terminem klient dostaje przypomnienie, a gdy termin mija, account dostaje informację, że publikacja jest zagrożona.",
      "Każda decyzja jest zapisana: kto, kiedy, jaką wersję zaakceptował albo jakie miał uwagi. Po akceptacji zadanie w narzędziu projektowym przechodzi dalej, np. do publikacji. Uwagi do wersji mogą też trafić do AI, które porządkuje je w listę zmian dla zespołu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja akceptacji",
    lead: "Zakres dopasowujemy do rodzajów materiałów i sposobu pracy z klientami.",
    items: [
      { title: "Wersje materiałów", body: "Każda wersja w ustalonym miejscu, z numerem i datą." },
      { title: "Prośba o akceptację", body: "Link do wersji i termin dla klienta." },
      { title: "Uwagi przy wersji", body: "Uwagi zapisane przy konkretnej wersji, z formularza lub maila." },
      { title: "Wiele osób akceptujących", body: "Odpowiedzi kilku osób po stronie klienta w jednym miejscu." },
      { title: "Przypomnienia", body: "Przypomnienie przed terminem i informacja dla accounta po terminie." },
      { title: "Lista zmian", body: "Uwagi uporządkowane w listę zadań dla zespołu." },
      { title: "Historia decyzji", body: "Kto, kiedy i co zaakceptował." },
      { title: "Przejście dalej", body: "Zaakceptowany materiał przechodzi do publikacji lub produkcji." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wersji do akceptacji.",
    items: [
      {
        title: "Nowa wersja kreacji",
        trigger: "Zespół zapisuje nową wersję",
        steps: ["Link do wersji i prośba o akceptację dla klienta", "Uwagi zapisane przy wersji, lista zmian dla zespołu", "Akceptacja i przejście do publikacji"],
        result: "Zespół zawsze wie, która wersja jest aktualna i co trzeba poprawić.",
      },
      {
        title: "Brak odpowiedzi",
        trigger: "Zbliża się termin akceptacji",
        steps: ["Przypomnienie dla klienta", "Informacja dla accounta po terminie", "Oznaczenie publikacji jako zagrożonej"],
        result: "Account nie musi pamiętać o każdej akceptacji, a ryzyko opóźnienia jest widoczne wcześniej.",
      },
    ],
  },
  example: {
    title: "Akceptacje przed i po automatyzacji",
    lead: "Przykład agencji social media z kilkunastoma klientami i harmonogramami publikacji.",
    rows: [
      { label: "Uwagi", before: "W kilku mailach i komunikatorach.", after: "Przy konkretnej wersji." },
      { label: "Wersje", before: "Nie wiadomo, która jest ostateczna.", after: "Numer, data i status każdej wersji." },
      { label: "Terminy", before: "Account przypomina ręcznie.", after: "Przypomnienia i informacja o zagrożeniu." },
      { label: "Spory", before: "Trudno odtworzyć decyzje.", after: "Historia akceptacji." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od kilku klientów, którzy chętnie przetestują nowy sposób akceptacji.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś wyglądają akceptacje, gdzie są pliki i jak pracuje zespół.", fromYou: "Rozmowa z accountami i przykładowe wątki akceptacji." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy miejsce wersji, formularz, terminy, przypomnienia i powiązanie z narzędziem projektowym.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go z kilkoma klientami.", fromYou: "Wybór klientów do testu." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych klientów i dopracowujemy przepływ.", fromYou: "Informacja dla klientów o nowym sposobie akceptacji." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od prośby o akceptację i przypomnień.",
    items: [
      { name: "Akceptacje", description: "Dla agencji, które chcą skończyć z wątkami mailowymi.", includes: ["Prośba o akceptację z linkiem", "Uwagi przy wersji", "Przypomnienia", "Historia decyzji"] },
      { name: "Akceptacje i zespół", description: "Dla agencji, które chcą przyspieszyć poprawki.", includes: ["Wszystko z wariantu Akceptacje", "Lista zmian z AI", "Wiele osób akceptujących", "Powiązanie z narzędziem projektowym"] },
      { name: "Akceptacje i publikacje", description: "Dla agencji z harmonogramami publikacji.", includes: ["Wszystko z wariantu Akceptacje i zespół", "Przejście do publikacji", "Informacja o zagrożonych terminach", "Raport czasu akceptacji"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i rodzajów materiałów,",
      "miejsce przechowywania wersji,",
      "narzędzie projektowe i jego możliwości integracji,",
      "zakres przypomnień i raportów,",
      "wykorzystanie AI do listy zmian.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Klient nie skorzysta z formularza.", mitigation: "Odpowiedzi mailem też trafiają do historii wersji." },
      { risk: "Uwagi zostaną źle uporządkowane przez AI.", mitigation: "Lista zmian jest pomocą dla zespołu, a oryginalne uwagi klienta są zawsze dostępne." },
      { risk: "Akceptacja zostanie uznana bez decyzji klienta.", mitigation: "System tylko zapisuje decyzje klienta. Brak odpowiedzi nigdy nie oznacza akceptacji." },
      { risk: "Za dużo przypomnień dla klienta.", mitigation: "Częstotliwość i treść ustala agencja, osobno dla klientów." },
    ],
  },
  faq: [
    { question: "Czy klient musi zakładać konto?", answer: "Nie. Wystarczy link do wersji i prosty formularz albo odpowiedź mailem." },
    { question: "Czy to zastąpi narzędzie do proofingu?", answer: "Jeśli korzystacie z narzędzia do proofingu, możemy się z nim połączyć. Jeśli nie, prosty obieg akceptacji często wystarcza." },
    { question: "Czy obsłużycie wiele osób akceptujących po stronie klienta?", answer: "Tak. System zbiera odpowiedzi wszystkich osób i pokazuje, kto jeszcze nie odpowiedział." },
    { question: "Czy historia akceptacji pomoże w sporze?", answer: "Tak. Każda decyzja jest zapisana z datą, osobą i wersją materiału." },
    { question: "Czy to działa dla tekstów i grafik?", answer: "Tak. Obieg jest taki sam dla tekstów, grafik, wideo i innych materiałów." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["google-workspace", "microsoft-365", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "gotowa-automatyzacja-czy-budowana-od-zera", "bledy-przy-pierwszym-wdrozeniu-automatyzacji"],
};
