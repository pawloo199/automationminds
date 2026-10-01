import type { ToolContent } from "../types";

export const n8n: ToolContent = {
  slug: "n8n",
  metaTitle: "Wdrożenia n8n: automatyzacja i agenci AI | Automation Minds",
  metaDescription:
    "Wdrażamy n8n w firmach: automatyzacje procesów, integracje systemów i agentów AI, w chmurze lub na waszym serwerze. Bezpłatna konsultacja 30 min.",
  primaryKeyword: "wdrożenie n8n",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "Platforma automatyzacji",
    title: "Wdrożenia n8n: automatyzacje i agenci AI pod waszą kontrolą",
    lead: "Budujemy w n8n przepływy, które łączą systemy firmy, przetwarzają dokumenty z pomocą AI i działają na waszym serwerze albo w chmurze. Bez opłat za każdą operację i z pełną kontrolą nad danymi.",
    bullets: [
      "Instalacja na waszym serwerze lub w n8n Cloud",
      "Przepływy z AI, logiką i obsługą błędów",
      "Dokumentacja i przekazanie zespołowi",
    ],
  },
  intro: {
    title: "Czym jest n8n i kiedy ma sens",
    paragraphs: [
      "n8n to platforma do budowy automatyzacji, w której przepływy układa się z bloków na wizualnym schemacie. Od Make i Zapiera różni się przede wszystkim tym, że można ją uruchomić na własnym serwerze. Dane klientów i dokumenty nie muszą wtedy opuszczać infrastruktury firmy.",
      "Druga różnica to elastyczność. Gdy gotowy blok nie wystarcza, w n8n można dopisać fragment kodu w JavaScript lub Pythonie, wywołać dowolne API i zbudować logikę, której w prostszych narzędziach nie da się odwzorować. Dlatego n8n dobrze sprawdza się przy integracjach z mniej popularnymi systemami i przy przepływach z AI.",
      "n8n wymaga jednak więcej wiedzy technicznej niż Zapier. Ktoś musi zadbać o serwer, aktualizacje i kopie zapasowe, a przepływy trzeba projektować z myślą o błędach. To zadanie, które bierzemy na siebie przy wdrożeniu i opiece.",
    ],
  },
  useCases: {
    title: "Co najczęściej budujemy w n8n",
    lead: "n8n najlepiej wykorzystujemy tam, gdzie przepływ jest złożony, dotyczy wrażliwych danych albo potrzebuje AI.",
    items: [
      { title: "Agenci i przepływy AI", body: "Modele językowe odczytują dokumenty, klasyfikują zgłoszenia i przygotowują odpowiedzi, a n8n przenosi wyniki do systemów firmy." },
      { title: "Integracje bez gotowych konektorów", body: "Łączymy ERP, systemy branżowe i API, do których nie ma gotowych integracji w popularnych narzędziach." },
      { title: "Przetwarzanie danych wrażliwych", body: "Przepływy działają na waszym serwerze, więc dane osobowe i finansowe nie trafiają do zewnętrznych usług automatyzacji." },
      { title: "Duże wolumeny", body: "Tysiące rekordów dziennie bez rosnących opłat za każdą operację, z kolejkami i ponawianiem przy błędach." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy w n8n",
    lead: "Tak wyglądają typowe automatyzacje, które budujemy dla firm. Każdą dopasowujemy do waszych systemów.",
    items: [
      {
        title: "Faktury kosztowe z AI",
        trigger: "Nowa faktura w skrzynce lub folderze",
        steps: ["Model AI odczytuje dane z PDF", "Dopasowanie do dostawcy i zamówienia", "Zapis w systemie księgowym do akceptacji"],
        result: "Księgowość zatwierdza gotowe dane zamiast je przepisywać.",
      },
      {
        title: "Zgłoszenia klientów",
        trigger: "Mail lub formularz od klienta",
        steps: ["AI rozpoznaje temat i pilność", "Przypisanie do osoby i utworzenie zgłoszenia", "Szkic odpowiedzi z bazy wiedzy"],
        result: "Zgłoszenie trafia do właściwej osoby w kilka sekund, z gotowym szkicem odpowiedzi.",
      },
      {
        title: "Synchronizacja ERP i sklepu",
        trigger: "Zmiana stanu lub ceny w ERP",
        steps: ["Pobranie zmian przez API", "Przeliczenie i walidacja", "Aktualizacja sklepu i platform sprzedażowych"],
        result: "Stany i ceny są wszędzie takie same, bez ręcznego eksportu plików.",
      },
    ],
  },
  fit: {
    title: "Kiedy n8n się sprawdzi, a kiedy wybierzemy coś innego",
    good: [
      "Dane muszą zostać na waszym serwerze albo w wybranym regionie.",
      "Przepływ jest złożony, ma rozgałęzienia, pętle i własną logikę.",
      "Chcecie budować przepływy z AI i agentami.",
      "Wolumen operacji jest duży i opłaty za operacje w innych narzędziach szybko by rosły.",
      "Trzeba połączyć system, który ma API, ale nie ma gotowej integracji.",
    ],
    limits: [
      "Potrzebujecie jednej prostej integracji, którą zespół sam utrzyma bez wsparcia. Wtedy często wystarczy Zapier.",
      "Firma pracuje wyłącznie w Microsoft 365 i ma licencje Power Automate.",
      "Nikt nie może zająć się serwerem, a nie chcecie chmury n8n.",
    ],
  },
  comparison: {
    title: "n8n, Make czy Zapier",
    lead: "Wszystkie trzy narzędzia służą do budowy automatyzacji, ale różnią się modelem rozliczeń, elastycznością i miejscem, w którym działają.",
    columns: ["n8n", "Make", "Zapier"],
    rows: [
      { label: "Gdzie działa", values: ["Chmura lub wasz serwer", "Chmura", "Chmura"] },
      { label: "Próg wejścia", values: ["Najwyższy", "Średni", "Najniższy"] },
      { label: "Złożona logika", values: ["Bardzo dobra, także kod", "Bardzo dobra, wizualnie", "Ograniczona"] },
      { label: "Rozliczenie", values: ["Za wykonania w chmurze, własny serwer bez opłat za operacje", "Za operacje", "Za zadania"] },
      { label: "Przepływy z AI", values: ["Rozbudowane, z agentami", "Dobre", "Podstawowe"] },
      { label: "Dla kogo", values: ["Firmy z wrażliwymi danymi i złożonymi procesami", "Firmy z wieloma integracjami", "Proste automatyzacje w małych zespołach"] },
    ],
    note: "Porównanie jest uproszczone. Narzędzie dobieramy do procesu, a nie odwrotnie, i czasem łączymy kilka.",
  },
  example: {
    title: "Obsługa faktur kosztowych przed i po wdrożeniu n8n",
    lead: "Przykład firmy handlowej, która dostaje kilkaset faktur miesięcznie od różnych dostawców.",
    rows: [
      { label: "Odbiór faktury", before: "Faktury przychodzą na kilka skrzynek, ktoś je przekazuje dalej.", after: "n8n zbiera faktury ze skrzynek i z KSeF w jedno miejsce." },
      { label: "Dane z faktury", before: "Księgowa przepisuje kwoty, numery i daty.", after: "Model AI odczytuje dane, n8n sprawdza je z bazą dostawców." },
      { label: "Akceptacja", before: "Mail do kierownika i czekanie na odpowiedź.", after: "Kierownik akceptuje jednym kliknięciem w Teams lub mailu." },
      { label: "Księgowanie", before: "Ręczne wprowadzanie do programu księgowego.", after: "Zaakceptowana faktura trafia do systemu księgowego automatycznie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  costs: {
    title: "Ile kosztuje n8n",
    paragraphs: [
      "Na koszt składają się dwie rzeczy: licencja lub hosting n8n oraz praca nad wdrożeniem. n8n w chmurze rozlicza się według liczby wykonań przepływów. Wersję na własnym serwerze można uruchomić bez opłat za operacje, ale trzeba doliczyć koszt serwera i jego utrzymania. Część funkcji dla firm wymaga płatnego planu.",
      "Koszt wdrożenia zależy od liczby procesów, systemów do połączenia i tego, czy w przepływach jest AI. Zawsze zaczynamy od wyceny pierwszego etapu, więc znacie kwotę, zanim zaczniemy.",
    ],
  },
  faq: [
    { question: "Czy n8n jest darmowe?", answer: "Wersję n8n można samodzielnie uruchomić na własnym serwerze bez opłat za operacje, na zasadach licencji n8n. Płaci się wtedy za serwer i utrzymanie. Wersja w chmurze i część funkcji dla firm są płatne." },
    { question: "Czy n8n może działać na naszym serwerze?", answer: "Tak. Instalujemy n8n na waszym serwerze lub w wybranej chmurze, konfigurujemy kopie zapasowe, aktualizacje i dostęp dla zespołu." },
    { question: "Czy n8n nadaje się do agentów AI?", answer: "Tak. n8n ma rozbudowane bloki do pracy z modelami językowymi, pamięcią i narzędziami. Budujemy w nim agentów, którzy odczytują dokumenty, odpowiadają na zgłoszenia i wykonują zadania w waszych systemach." },
    { question: "n8n czy Make, co wybrać?", answer: "Make jest łatwiejszy na start i działa wyłącznie w chmurze. n8n daje większą kontrolę nad danymi i kosztami przy dużych wolumenach, ale wymaga więcej wiedzy technicznej. Wybór zależy od procesu, danych i zespołu." },
    { question: "Kto będzie utrzymywał przepływy po wdrożeniu?", answer: "Możemy przekazać przepływy waszemu zespołowi z dokumentacją albo zostać przy opiece: monitorować działanie, aktualizować n8n i rozwijać kolejne procesy." },
    { question: "Czy przenosicie automatyzacje z Make lub Zapiera do n8n?", answer: "Tak. Przenosimy istniejące scenariusze, przy okazji porządkując logikę i obsługę błędów. Najpierw oceniamy, czy migracja faktycznie się opłaci." },
  ],
  relatedServiceSlugs: ["automatyzacja-oraz-ai-w-niestandardowych-procesach", "agenci-ai", "integracje-systemow", "ai-w-obsludze-dokumentow"],
  relatedToolSlugs: ["make", "zapier", "claude", "chatgpt"],
  relatedArticleSlugs: ["jak-wybrac-narzedzie-do-automatyzacji", "gotowa-automatyzacja-czy-budowana-od-zera", "rodo-a-automatyzacja-procesow"],
};
