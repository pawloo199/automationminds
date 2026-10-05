import type { IndustryPageContent } from "../types";

export const kancelarieAsystentWiedzy: IndustryPageContent = {
  industrySlug: "kancelarie-prawne",
  subSlug: "asystent-wiedzy",
  name: "Asystent AI dla kancelarii",
  excerpt: "Asystent AI, który odnajduje wiedzę kancelarii w pismach, opiniach i wzorach, ze wskazaniem źródła.",
  metaTitle: "Asystent AI dla kancelarii: wiedza kancelarii pod ręką",
  metaDescription:
    "Budujemy asystenta AI na pismach, opiniach i wzorach kancelarii. Odpowiada ze wskazaniem źródła, z uprawnieniami do spraw i danymi chronionymi w UE.",
  primaryKeyword: "asystent AI dla kancelarii",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Kancelarie prawne: asystent wiedzy",
    title: "Asystent AI dla kancelarii: doświadczenie zespołu dostępne w kilka sekund",
    lead: "Kancelaria latami gromadzi pisma, opinie, wzory umów i notatki ze spraw. Ta wiedza jest cenna, ale rozproszona w folderach i skrzynkach. Budujemy asystenta AI, który ją odnajduje, streszcza i zawsze wskazuje dokument źródłowy, z dostępem tylko do tego, co wolno zobaczyć danej osobie.",
    bullets: [
      "Odpowiedzi na podstawie dokumentów kancelarii",
      "Zawsze ze wskazaniem źródła",
      "Uprawnienia zgodne z zespołami spraw",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Kancelarie z dużym zbiorem pism, opinii i wzorów" },
    { label: "Na czym działa", value: "Dokumenty kancelarii: pisma, opinie, wzory, procedury, notatki" },
    { label: "Jak odpowiada", value: "Krótka odpowiedź i lista dokumentów, z których pochodzi" },
    { label: "Bezpieczeństwo", value: "Uprawnienia do spraw, dane w UE, bez trenowania modeli" },
  ],
  symptoms: {
    title: "Kiedy asystent wiedzy przyda się kancelarii",
    lead: "Jeśli te sytuacje są u was codziennością, wiedza kancelarii pracuje dużo słabiej, niż mogłaby.",
    items: [
      "Prawnicy pytają kolegów, czy ktoś miał już podobną sprawę, i czekają na odpowiedź.",
      "Wzory pism i umów istnieją w kilku wersjach i nie wiadomo, która jest aktualna.",
      "Młodsi prawnicy długo szukają wcześniejszych opinii, zamiast zacząć od gotowego punktu wyjścia.",
      "Wiedza o sprawach i klientach jest w głowach kilku partnerów.",
      "Wewnętrzne procedury kancelarii są w dokumentach, których nikt nie czyta.",
      "Wyszukiwarka w systemie lub na dysku znajduje pliki tylko po dokładnych słowach.",
    ],
  },
  intro: {
    title: "Jak działa asystent AI na wiedzy kancelarii",
    paragraphs: [
      "Asystent przeszukuje dokumenty kancelarii według znaczenia, a nie tylko po słowach. Na pytanie „czy prowadziliśmy spór o kary umowne w umowie o roboty budowlane” znajdzie właściwe pisma, nawet jeśli użyto w nich innych sformułowań. Następnie przygotowuje krótką odpowiedź i podaje listę dokumentów, z których korzystał.",
      "Technicznie to rozwiązanie nazywa się RAG: model językowy odpowiada wyłącznie na podstawie fragmentów znalezionych w dokumentach kancelarii, a nie ze swojej ogólnej wiedzy. Dzięki temu odpowiedzi można sprawdzić, a ryzyko, że asystent coś wymyśli, jest wyraźnie mniejsze niż w zwykłym czacie AI.",
      "Asystent nie zastępuje baz aktów prawnych i orzecznictwa. Udostępnia to, czego żadna baza nie ma: doświadczenie waszej kancelarii, wasze wzory, argumentację i sposób pracy.",
    ],
  },
  scope: {
    title: "Co potrafi asystent wiedzy kancelarii",
    lead: "Zakres dobieramy do dokumentów, które kancelaria chce udostępnić, i do sposobu pracy zespołu.",
    items: [
      { title: "Wyszukiwanie po znaczeniu", body: "Odnajduje pisma i opinie o podobnym problemie, nawet przy innych sformułowaniach." },
      { title: "Odpowiedź ze źródłami", body: "Krótka odpowiedź i lista dokumentów, do których można przejść jednym kliknięciem." },
      { title: "Aktualne wzory", body: "Wskazuje obowiązujący wzór pisma lub umowy zamiast jego starszych wersji." },
      { title: "Streszczenia", body: "Streszcza znalezione dokumenty, żeby szybko ocenić, czy są przydatne." },
      { title: "Procedury kancelarii", body: "Odpowiada na pytania o wewnętrzne zasady, np. obieg dokumentów czy rozliczenia." },
      { title: "Wdrażanie nowych osób", body: "Nowi prawnicy i asystenci szybciej poznają sposób pracy kancelarii." },
      { title: "Uprawnienia", body: "Dokumenty spraw widzą tylko osoby, które mają do nich dostęp w kancelarii." },
      { title: "Miejsce pracy", body: "Asystent w Teams, przeglądarce lub w narzędziu, z którego korzysta kancelaria." },
    ],
  },
  security: {
    title: "Bezpieczeństwo asystenta wiedzy",
    lead: "Asystent pracuje na najbardziej poufnych dokumentach kancelarii, dlatego bezpieczeństwo projektujemy od pierwszego dnia.",
    items: [
      { title: "Uprawnienia do dokumentów", body: "Asystent filtruje wyniki według uprawnień użytkownika, tak jak w systemie kancelarii." },
      { title: "Wybrany zbiór dokumentów", body: "Kancelaria decyduje, które foldery i rodzaje dokumentów trafiają do asystenta." },
      { title: "Dane w UE", body: "Indeks dokumentów i przepływy działają na serwerze w UE lub w infrastrukturze kancelarii." },
      { title: "Modele bez trenowania", body: "Modele AI w planach, w których przesyłane fragmenty nie służą do trenowania." },
      { title: "Rejestr zapytań", body: "Wiadomo, kto, kiedy i o co pytał, co ułatwia kontrolę i audyt." },
      { title: "Usuwanie danych", body: "Dokumenty usunięte z kancelarii znikają także z indeksu asystenta." },
    ],
  },
  example: {
    title: "Szukanie wiedzy przed i po wdrożeniu asystenta",
    lead: "Przykład kancelarii z kilkunastoma prawnikami i wieloletnim archiwum pism w Microsoft 365.",
    rows: [
      { label: "Podobna sprawa", before: "Pytanie na komunikatorze do całego zespołu.", after: "Asystent wskazuje pisma z podobnym problemem w kilka sekund." },
      { label: "Wzór umowy", before: "Kilka wersji w różnych folderach.", after: "Wskazanie aktualnego wzoru i jego źródła." },
      { label: "Nowa osoba", before: "Tygodnie pytań o to, jak robi się rzeczy w kancelarii.", after: "Odpowiedzi na pytania o procedury z dokumentów kancelarii." },
      { label: "Weryfikacja", before: "Brak pewności, skąd pochodzi informacja.", after: "Każda odpowiedź z listą dokumentów źródłowych." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej kancelarii.",
  },
  implementation: {
    title: "Jak budujemy asystenta wiedzy",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione.",
    phases: [
      {
        title: "Wybór dokumentów",
        duration: "kilka dni",
        body: "Ustalamy, które dokumenty trafią do asystenta, jakie są uprawnienia i jakie pytania zadają prawnicy.",
        fromYou: "Lista folderów i rodzajów dokumentów oraz przykładowe pytania.",
      },
      {
        title: "Przygotowanie wiedzy",
        duration: "1–2 tygodnie",
        body: "Porządkujemy i indeksujemy dokumenty, pomijamy duplikaty i wersje robocze, ustawiamy uprawnienia.",
        fromYou: "Wskazanie aktualnych wzorów i dokumentów, które trzeba pominąć.",
      },
      {
        title: "Testy z prawnikami",
        duration: "1–2 tygodnie",
        body: "Kilka osób zadaje prawdziwe pytania i ocenia odpowiedzi. Na tej podstawie poprawiamy wyszukiwanie.",
        fromYou: "2–3 prawników do testów.",
      },
      {
        title: "Start i rozwój",
        duration: "stale",
        body: "Udostępniamy asystenta zespołowi, dbamy o aktualność indeksu i dokładamy kolejne zbiory dokumentów.",
        fromYou: "Uwagi zespołu i informacja o nowych zbiorach.",
      },
    ],
  },
  variants: {
    title: "Warianty asystenta",
    lead: "Można zacząć od jednego zbioru dokumentów i rozszerzać go stopniowo.",
    items: [
      {
        name: "Wzory i procedury",
        description: "Dla kancelarii, które chcą zacząć od wiedzy wspólnej dla całego zespołu.",
        includes: ["Wzory pism i umów", "Procedury i zasady kancelarii", "Odpowiedzi ze źródłami", "Dostęp w Teams lub przeglądarce"],
      },
      {
        name: "Wiedza ze spraw",
        description: "Dla kancelarii, które chcą korzystać z doświadczenia z wcześniejszych spraw.",
        includes: ["Wszystko z wariantu Wzory i procedury", "Pisma i opinie ze spraw", "Uprawnienia zgodne z zespołami spraw", "Streszczenia znalezionych dokumentów", "Rejestr zapytań"],
      },
      {
        name: "Asystent w abonamencie",
        description: "Dla kancelarii, które nie chcą zajmować się utrzymaniem.",
        includes: ["Asystent z wybranym zakresem wiedzy", "Aktualizacja indeksu i poprawki", "Monitoring jakości i kosztów", "Stała miesięczna opłata"],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie dokumentów. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba i rodzaj dokumentów oraz ich stan,",
      "złożoność uprawnień do spraw,",
      "miejsce działania: serwer w UE czy infrastruktura kancelarii,",
      "liczba użytkowników i zapytań, od których zależy koszt modeli AI,",
      "zakres opieki i aktualizacji indeksu.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Asystent poda odpowiedź, której nie ma w dokumentach.", mitigation: "Odpowiada wyłącznie na podstawie znalezionych fragmentów, wskazuje źródła, a gdy ich brak, mówi, że nie znalazł odpowiedzi." },
      { risk: "Ktoś zobaczy dokument sprawy, do której nie ma dostępu.", mitigation: "Wyniki filtrowane według uprawnień użytkownika, testowane przed startem." },
      { risk: "Asystent wskaże nieaktualny wzór.", mitigation: "Oznaczamy aktualne wzory i pomijamy wersje robocze. Indeks aktualizuje się razem z dokumentami." },
      { risk: "Zespół nie zacznie korzystać z asystenta.", mitigation: "Asystent działa tam, gdzie prawnicy już pracują, a testy z prawnikami pokazują, na jakie pytania ma odpowiadać." },
    ],
  },
  faq: [
    { question: "Czym asystent wiedzy różni się od ChatGPT?", answer: "Zwykły czat AI odpowiada z ogólnej wiedzy modelu. Asystent wiedzy odpowiada na podstawie dokumentów kancelarii, wskazuje źródła i respektuje uprawnienia do spraw." },
    { question: "Czy asystent zastąpi bazy prawnicze?", answer: "Nie. Bazy aktów prawnych i orzecznictwa pozostają źródłem przepisów i wyroków. Asystent udostępnia wiedzę samej kancelarii: jej pisma, opinie, wzory i procedury." },
    { question: "Czy asystent może się mylić?", answer: "Tak, dlatego zawsze podaje źródła. Prawnik może w każdej chwili przejść do dokumentu i sprawdzić, czy odpowiedź jest trafna." },
    { question: "Na jakich dokumentach może działać?", answer: "Na dokumentach Word i PDF, mailach, notatkach i stronach w systemach kancelarii, np. w Microsoft 365. Zbiór ustalamy razem z wami." },
    { question: "Czy asystent może działać w Teams?", answer: "Tak. Asystent może działać w Teams, w przeglądarce albo w innym narzędziu, z którego korzysta kancelaria." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwsza wersja na wybranym zbiorze dokumentów zwykle kilka tygodni. Kolejne zbiory dokładamy etapami." },
  ],
  relatedServiceSlugs: ["asystent-ai-na-firmowej-wiedzy", "przygotowanie-danych-pod-ai", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedProcessSlugs: [],
  relatedToolSlugs: ["microsoft-365", "claude", "n8n"],
  relatedArticleSlugs: ["ai-w-kancelarii-prawnej", "porzadek-w-danych-przed-ai-i-automatyzacja", "cyfryzacja-danych-w-firmie"],
};
