import type { IndustryPageContent } from "../types";

export const biuraRachunkowe: IndustryPageContent = {
  industrySlug: "biura-rachunkowe",
  name: "Biura rachunkowe",
  excerpt: "Automatyzacja pracy biur rachunkowych: dokumenty od klientów, KSeF, zamknięcie miesiąca, komunikacja i rozliczenia.",
  metaTitle: "Automatyzacja biura rachunkowego: dokumenty, KSeF, klienci",
  metaDescription:
    "Automatyzujemy pracę biur rachunkowych: zbieranie dokumentów od klientów, odczyt faktur z AI, KSeF, terminy, komunikacja z klientami i rozliczenia biura.",
  primaryKeyword: "automatyzacja biura rachunkowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: biura rachunkowe",
    title: "Automatyzacja biura rachunkowego: mniej pogoni za dokumentami, więcej księgowania",
    lead: "Pomagamy biurom rachunkowym zautomatyzować to, co zabiera księgowym najwięcej czasu poza samym księgowaniem: zbieranie dokumentów od klientów, przepisywanie danych z faktur, pilnowanie terminów, odpowiadanie na te same pytania i rozliczanie klientów biura. Z AI tam, gdzie pomaga, i z kontrolą nad danymi klientów.",
    bullets: [
      "Dokumenty od klientów na czas i w komplecie",
      "Odczyt faktur i dokumentów z AI, KSeF bez ręcznego pobierania",
      "Dane klientów na serwerze w UE lub w infrastrukturze biura",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura rachunkowe i kancelarie podatkowe, od kilku do kilkudziesięciu osób" },
    { label: "Co automatyzujemy", value: "Dokumenty, KSeF, terminy, komunikacja z klientami, rozliczenia biura" },
    { label: "Jak", value: "Obok programu księgowego, którego używacie, z AI tam, gdzie ma sens" },
    { label: "Bezpieczeństwo", value: "Dane w UE, uprawnienia do klientów, księgowy zawsze decyduje" },
  ],
  symptoms: {
    title: "Po czym poznać, że biuro potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy da się przenieść na system.",
    items: [
      "Pod koniec miesiąca połowa zespołu dzwoni i pisze do klientów, żeby przesłali brakujące dokumenty.",
      "Dokumenty przychodzą mailem, przez komunikatory, na papierze i w zdjęciach z telefonu.",
      "Dane z faktur i paragonów ktoś przepisuje do programu księgowego, choć są już w pliku.",
      "Kwoty podatków i składek do zapłaty wysyła się klientom ręcznie, każdemu osobno.",
      "Klienci pytają o te same rzeczy: termin, kwotę, status, a odpowiedzi zajmują godziny tygodniowo.",
      "Nie wiadomo, który klient jest już zamknięty w danym miesiącu, a który czeka na dokumenty.",
    ],
  },
  intro: {
    title: "Automatyzacja w biurze rachunkowym: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Biuro rachunkowe pracuje na dokumentach, terminach i danych klientów. Samo księgowanie to tylko część dnia. Reszta to zbieranie dokumentów, sprawdzanie ich kompletności, przepisywanie danych, wysyłanie informacji do klientów i odpowiadanie na pytania. To właśnie tę pracę automatyzujemy.",
      "Automatyzacja nie zastępuje księgowego i nie podejmuje decyzji podatkowych. System zbiera dokumenty, odczytuje z nich dane, proponuje dekretację na podstawie historii i przypomina o terminach, a księgowy sprawdza i zatwierdza. Odpowiedzialność za księgi i deklaracje zostaje tam, gdzie była.",
      "Nie wymieniamy programu księgowego. Budujemy obok niego to, czego w nim brakuje: portal lub skrzynkę do przyjmowania dokumentów, odczyt danych z AI, przypomnienia i statusy klientów, komunikację i rozliczenia biura. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze biura.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w biurach rachunkowych",
    lead: "Od dokumentu klienta do zamknięcia miesiąca i faktury za usługi biura. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Zbieranie dokumentów", body: "Jedno miejsce na dokumenty od klientów, automatyczne przypomnienia i status kompletności dla każdego klienta." },
      { title: "Odczyt dokumentów z AI", body: "Dane z faktur, paragonów i innych dokumentów odczytane i przygotowane do sprawdzenia przez księgowego." },
      { title: "KSeF", body: "Faktury klientów pobierane z KSeF i łączone z dokumentami z innych źródeł, bez ręcznego logowania." },
      { title: "Terminy i zamknięcie miesiąca", body: "Kalendarz obowiązków klientów, statusy zamknięcia i przypomnienia dla zespołu." },
      { title: "Informacje o podatkach", body: "Kwoty podatków i składek do zapłaty wysyłane klientom automatycznie po zatwierdzeniu przez księgowego." },
      { title: "Komunikacja z klientami", body: "Odpowiedzi na powtarzalne pytania i asystent AI na wiedzy biura, z przekazaniem trudniejszych spraw księgowemu." },
      { title: "Przyjęcie nowego klienta", body: "Umowa, pełnomocnictwa, dane z rejestrów i lista dokumentów startowych z jednego formularza." },
      { title: "Rozliczenia biura", body: "Faktury za usługi według liczby dokumentów lub pakietu i przypomnienia o płatnościach." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w biurze rachunkowym",
    lead: "Typowe przepływy, które budujemy w biurach. Kroki wymagające oceny księgowej lub podatkowej zawsze zostają przy księgowym.",
    items: [
      {
        title: "Dokumenty od klienta",
        trigger: "Klient przesyła dokumenty mailem, przez formularz lub zdjęciem z telefonu",
        steps: [
          "Przypisanie dokumentów do klienta i miesiąca",
          "AI odczytuje dane i proponuje opis dokumentu",
          "Aktualizacja statusu kompletności i przypomnienie o brakach",
        ],
        result: "Księgowy dostaje dokumenty w jednym miejscu, z danymi do sprawdzenia, a nie do przepisania.",
      },
      {
        title: "Zamknięcie miesiąca",
        trigger: "Zbliża się termin rozliczeń",
        steps: [
          "Lista klientów z brakującymi dokumentami i automatyczne przypomnienia",
          "Status zamknięcia każdego klienta widoczny dla zespołu i kierownika",
          "Kwoty podatków i składek po zatwierdzeniu wysyłane do klientów",
        ],
        result: "Mniej telefonów pod koniec miesiąca i jasny obraz, kto na co czeka.",
      },
      {
        title: "Nowy klient biura",
        trigger: "Podpisanie umowy z klientem",
        steps: [
          "Dane firmy uzupełniane z rejestrów po NIP",
          "Umowa, pełnomocnictwa i lista dokumentów startowych z szablonów",
          "Założenie klienta w systemach biura i przypisanie księgowego",
        ],
        result: "Nowy klient jest gotowy do obsługi bez przepisywania danych do kilku miejsc.",
      },
    ],
  },
  security: {
    title: "Dane klientów i bezpieczeństwo",
    lead: "Biuro rachunkowe ma dostęp do pełnych danych finansowych klientów. Każde wdrożenie projektujemy tak, żeby te dane były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze biura, bez przesyłania dokumentów do zewnętrznych usług automatyzacji." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne do zadania." },
      { title: "Uprawnienia do klientów", body: "Każdy księgowy widzi dokumenty swoich klientów, a kierownik całość." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Umowa powierzenia", body: "Przetwarzanie danych opieramy na umowie powierzenia i ustalonych zasadach przechowywania." },
      { title: "Księgowy decyduje", body: "System przygotowuje dane i przypomina. Dekretację, deklaracje i kwoty do zapłaty zatwierdza księgowy." },
    ],
  },
  example: {
    title: "Biuro rachunkowe przed i po automatyzacji",
    lead: "Przykład biura z kilkunastoma osobami, które prowadzi księgi i ryczałt dla kilkuset małych firm.",
    rows: [
      { label: "Dokumenty", before: "Maile, komunikatory i papier, przypomnienia wysyłane ręcznie.", after: "Jedno miejsce na dokumenty, automatyczne przypomnienia i status braków." },
      { label: "Dane z faktur", before: "Przepisywanie danych do programu księgowego.", after: "Dane odczytane przez AI, księgowy sprawdza i zatwierdza." },
      { label: "Koniec miesiąca", before: "Arkusz z listą klientów aktualizowany ręcznie.", after: "Status zamknięcia każdego klienta widoczny na bieżąco." },
      { label: "Podatki do zapłaty", before: "Mail do każdego klienta pisany osobno.", after: "Wiadomości z kwotami wysyłane po zatwierdzeniu, z jednego miejsca." },
      { label: "Pytania klientów", before: "Telefony i maile w trakcie pracy nad księgami.", after: "Odpowiedzi na typowe pytania automatycznie, trudniejsze sprawy u księgowego." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w biurze rachunkowym",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Ważne zmiany planujemy poza okresami największego obciążenia.",
    phases: [
      {
        title: "Przegląd biura",
        duration: "kilka dni",
        body: "Rozmawiamy z właścicielem lub kierownikiem i jedną z księgowych, przeglądamy program księgowy i kanały kontaktu z klientami, wybieramy obszar z największą stratą czasu.",
        fromYou: "Godzina rozmowy i informacja o używanych programach.",
      },
      {
        title: "Projekt i zasady",
        duration: "około tygodnia",
        body: "Projektujemy przepływ, uprawnienia i zasady pracy z danymi, w tym to, co robi AI, a co zawsze zatwierdza księgowy.",
        fromYou: "Akceptacja projektu i zasad bezpieczeństwa.",
      },
      {
        title: "Budowa i testy",
        duration: "zwykle 2–4 tygodnie",
        body: "Budujemy rozwiązanie obok programu księgowego i testujemy je na wybranej grupie klientów.",
        fromYou: "Osoba, która ocenia wyniki testów, i kilku klientów do pilotażu.",
      },
      {
        title: "Start i opieka",
        duration: "stale",
        body: "Uruchamiamy rozwiązanie dla wszystkich klientów, szkolimy zespół i pilnujemy działania. Kolejne obszary dokładamy, gdy pierwszy działa.",
        fromYou: "Informacja dla klientów o nowym sposobie przesyłania dokumentów.",
      },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      {
        name: "Jeden proces",
        description: "Dla biur, które chcą sprawdzić automatyzację na jednym obszarze.",
        includes: [
          "Przegląd i wybór procesu",
          "Automatyzacja jednego obszaru, np. zbierania dokumentów",
          "Zasady bezpieczeństwa i uprawnień",
          "Szkolenie zespołu",
        ],
      },
      {
        name: "Biuro",
        description: "Dla biur, które chcą uporządkować pracę od dokumentu klienta do zamknięcia miesiąca.",
        includes: [
          "Kilka połączonych procesów: dokumenty, KSeF, terminy, komunikacja",
          "Odczyt dokumentów z AI",
          "Połączenie z programem księgowym przez import lub API",
          "Raporty dla właściciela biura",
          "Opieka po wdrożeniu",
        ],
      },
      {
        name: "Agenci w abonamencie",
        description: "Dla biur, które nie chcą zajmować się technologią.",
        includes: [
          "Agenci AI do konkretnych zadań, np. przyjmowania dokumentów lub pytań klientów",
          "Infrastruktura i utrzymanie po naszej stronie",
          "Monitoring i miesięczny raport",
          "Stała miesięczna opłata",
        ],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "liczba klientów i dokumentów, które przetwarza AI,",
      "możliwości integracji programu księgowego, którego używacie,",
      "wymagania bezpieczeństwa, np. działanie wyłącznie w infrastrukturze biura,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w biurach rachunkowych",
    items: [
      { risk: "AI błędnie odczyta kwotę lub stawkę VAT.", mitigation: "Odczytane dane trafiają do sprawdzenia, a dokumenty z niską pewnością odczytu są oznaczane. Do ksiąg nic nie trafia bez zatwierdzenia." },
      { risk: "Klient dostanie złą kwotę podatku do zapłaty.", mitigation: "Wiadomości z kwotami wysyłają się dopiero po zatwierdzeniu przez księgowego prowadzącego klienta." },
      { risk: "Klienci nie zmienią sposobu przesyłania dokumentów.", mitigation: "Przyjmujemy dokumenty tymi kanałami, których klienci już używają, i porządkujemy je po stronie biura." },
      { risk: "Program księgowy nie ma API.", mitigation: "Korzystamy z importu plików, który ma większość programów, a połączenie projektujemy pod możliwości waszego systemu." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja i AI zastąpią księgowego?", answer: "Nie. Automatyzujemy zbieranie i przygotowanie danych, przypomnienia i komunikację. Dekretację, deklaracje i decyzje podatkowe zawsze zatwierdza księgowy." },
    { question: "Czy musimy zmieniać program księgowy?", answer: "Nie. Budujemy rozwiązania obok programu, którego używacie, i łączymy się z nim przez import plików albo API, jeśli program je udostępnia." },
    { question: "Czy klienci biura muszą instalować nową aplikację?", answer: "Nie muszą. Dokumenty mogą dalej przychodzić mailem lub przez prosty formularz. Porządek robimy po stronie biura." },
    { question: "Jak automatyzacja współpracuje z KSeF?", answer: "Faktury klientów mogą być pobierane z KSeF automatycznie i łączone z dokumentami z innych źródeł. Zakres zależy od uprawnień, które klienci nadadzą biuru." },
    { question: "Czy dane klientów są bezpieczne?", answer: "Projektujemy wdrożenia z myślą o danych finansowych: serwer w UE lub w infrastrukturze biura, modele AI bez trenowania na danych, uprawnienia do klientów i umowa powierzenia." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od zbierania dokumentów od klientów, bo to ono najbardziej obciąża zespół pod koniec miesiąca. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Czy pracujecie z kancelariami podatkowymi?", answer: "Tak. Procesy w kancelariach podatkowych są podobne do biur rachunkowych, a różnice uwzględniamy przy projektowaniu." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "asystent-ai-na-firmowej-wiedzy"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "przypomnienia-o-platnosciach", "raporty-finansowe", "obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["n8n", "ksef", "microsoft-365", "google-workspace"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "cyfryzacja-danych-w-firmie", "rodo-a-automatyzacja-procesow"],
};
