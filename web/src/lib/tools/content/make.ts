import type { ToolContent } from "../types";

export const make: ToolContent = {
  slug: "make",
  metaTitle: "Wdrożenia Make (Integromat): automatyzacja procesów | Automation Minds",
  metaDescription:
    "Budujemy scenariusze w Make: integracje CRM, księgowości, sklepu i AI. Przejmujemy też istniejące automatyzacje do uporządkowania. Konsultacja 30 min.",
  primaryKeyword: "automatyzacja Make",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "Platforma automatyzacji",
    title: "Automatyzacja w Make: scenariusze, które łączą wasze systemy",
    lead: "Projektujemy i budujemy scenariusze w Make, dawniej Integromat. Łączymy CRM, księgowość, sklep, pocztę i AI w przepływy, które działają bez przepisywania danych i mają przemyślaną obsługę błędów.",
    bullets: [
      "Nowe scenariusze i porządki w istniejących",
      "Integracje z polskimi systemami przez API",
      "Monitoring i opieka po wdrożeniu",
    ],
  },
  intro: {
    title: "Czym jest Make i dla kogo się nadaje",
    paragraphs: [
      "Make to platforma, w której automatyzacje buduje się jako scenariusze na wizualnym schemacie. Każdy moduł to krok: pobranie danych, filtr, przekształcenie, zapis w innym systemie. Widać, jak dane płyną od początku do końca, co ułatwia zrozumienie i późniejsze zmiany.",
      "Make świetnie radzi sobie ze złożoną logiką bez pisania kodu: rozgałęzienia, pętle po listach, agregacja danych, obsługa wyjątków. Ma gotowe moduły dla wielu popularnych aplikacji, a z resztą łączy się przez API i webhooki.",
      "Częsty problem, z którym przychodzą do nas firmy, to scenariusze zbudowane latami przez różne osoby. Działają, dopóki coś się nie zepsuje, a potem nikt nie wie dlaczego. Porządkujemy je, dokumentujemy i dodajemy powiadomienia o błędach.",
    ],
  },
  useCases: {
    title: "Co najczęściej budujemy w Make",
    lead: "Make wybieramy, gdy proces łączy kilka aplikacji w chmurze i potrzebuje logiki, której nie da się zrobić prostym połączeniem.",
    items: [
      { title: "Obsługa leadów", body: "Zapytania z formularzy, reklam i maili trafiają do CRM, są przypisywane handlowcom i dostają automatyczną odpowiedź." },
      { title: "Sprzedaż i księgowość", body: "Wygrana szansa w CRM tworzy fakturę, a opłacona faktura zmienia status klienta i uruchamia kolejne kroki." },
      { title: "E-commerce", body: "Zamówienia, stany, etykiety i powiadomienia synchronizowane między sklepem, magazynem i kurierami." },
      { title: "Porządek w starych scenariuszach", body: "Przegląd, uproszczenie i dokumentacja automatyzacji, które zbudował ktoś inny, z obsługą błędów i alertami." },
    ],
  },
  flows: {
    title: "Przykładowe scenariusze w Make",
    lead: "Takie scenariusze budujemy najczęściej. Każdy dopasowujemy do aplikacji, których używacie.",
    items: [
      {
        title: "Lead z formularza do CRM",
        trigger: "Nowe zgłoszenie z formularza lub reklamy",
        steps: ["Sprawdzenie duplikatu w CRM", "Utworzenie kontaktu i szansy", "Powiadomienie handlowca i odpowiedź do klienta"],
        result: "Każde zapytanie ma właściciela w kilka minut, bez przepisywania.",
      },
      {
        title: "Wygrana szansa do faktury",
        trigger: "Zmiana etapu szansy na wygraną",
        steps: ["Pobranie danych klienta i produktów", "Wystawienie faktury w programie księgowym", "Wysłanie faktury i zadanie dla opiekuna"],
        result: "Faktura wychodzi tego samego dnia, a dane w CRM i księgowości są zgodne.",
      },
      {
        title: "Raport tygodniowy",
        trigger: "Harmonogram, poniedziałek rano",
        steps: ["Zebranie danych z CRM, sklepu i księgowości", "Wyliczenie wskaźników", "Wysłanie podsumowania do zarządu"],
        result: "Zarząd dostaje aktualne liczby bez składania raportu ręcznie.",
      },
    ],
  },
  fit: {
    title: "Kiedy Make się sprawdzi, a kiedy wybierzemy coś innego",
    good: [
      "Łączycie kilka aplikacji w chmurze, np. CRM, sklep, księgowość i pocztę.",
      "Proces ma rozgałęzienia, filtry i operacje na listach danych.",
      "Chcecie widzieć przepływ na schemacie i rozumieć, co się dzieje.",
      "Liczba operacji jest umiarkowana i przewidywalna.",
    ],
    limits: [
      "Dane muszą zostać na waszym serwerze. Wtedy lepszy jest n8n.",
      "Przetwarzacie bardzo duże wolumeny, przy których opłaty za operacje szybko rosną.",
      "Potrzebna jest jedna prosta integracja, którą zespół sam obsłuży w Zapierze.",
    ],
  },
  comparison: {
    title: "Make, n8n czy Zapier",
    lead: "Make plasuje się pośrodku: daje dużo możliwości bez programowania, ale działa wyłącznie w chmurze i rozlicza się za operacje.",
    columns: ["Make", "n8n", "Zapier"],
    rows: [
      { label: "Gdzie działa", values: ["Chmura, z wyborem regionu", "Chmura lub wasz serwer", "Chmura"] },
      { label: "Złożona logika", values: ["Bardzo dobra, wizualnie", "Bardzo dobra, także kod", "Ograniczona"] },
      { label: "Próg wejścia", values: ["Średni", "Najwyższy", "Najniższy"] },
      { label: "Rozliczenie", values: ["Za operacje", "Za wykonania lub własny serwer", "Za zadania"] },
      { label: "Czytelność przepływu", values: ["Bardzo dobra, schemat", "Dobra, schemat", "Lista kroków"] },
    ],
    note: "Porównanie jest uproszczone. Narzędzie dobieramy do procesu, a nie odwrotnie.",
  },
  example: {
    title: "Obsługa zamówień B2B przed i po wdrożeniu Make",
    lead: "Przykład hurtowni, która dostaje zamówienia mailem, przez sklep B2B i od handlowców.",
    rows: [
      { label: "Nowe zamówienie", before: "Trzy źródła, ktoś przepisuje zamówienia do systemu.", after: "Make zbiera zamówienia ze wszystkich źródeł do jednego systemu." },
      { label: "Dostępność", before: "Telefon do magazynu.", after: "Scenariusz sprawdza stany i oznacza braki." },
      { label: "Potwierdzenie", before: "Wysyłane ręcznie, często następnego dnia.", after: "Klient dostaje potwierdzenie z terminem automatycznie." },
      { label: "Faktura", before: "Wystawiana ręcznie po wysyłce.", after: "Wydanie towaru uruchamia fakturę w programie księgowym." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  costs: {
    title: "Ile kosztuje Make",
    paragraphs: [
      "Make rozlicza się w abonamencie zależnym od liczby operacji w miesiącu. Każdy krok scenariusza zużywa operacje, więc koszt zależy od tego, jak często i na ilu danych działa automatyzacja. Dobrze zaprojektowany scenariusz zużywa ich wyraźnie mniej niż zbudowany na szybko.",
      "Do abonamentu dochodzi praca nad wdrożeniem. Wycenę pierwszego etapu przygotowujemy po konsultacji, a przy okazji szacujemy, ile operacji miesięcznie zużyją wasze scenariusze.",
    ],
  },
  faq: [
    { question: "Czy Make to to samo co Integromat?", answer: "Tak. Integromat zmienił nazwę na Make. Stare scenariusze zostały przeniesione na nową platformę." },
    { question: "Czy Make łączy się z polskimi programami księgowymi?", answer: "Z tymi, które mają API, tak. Część popularnych polskich systemów ma gotowe moduły, z pozostałymi łączymy się przez API lub webhooki." },
    { question: "Mamy scenariusze, których nikt nie rozumie. Pomożecie?", answer: "Tak, to częste zlecenie. Przeglądamy scenariusze, upraszczamy je, dodajemy obsługę błędów i powiadomienia oraz piszemy dokumentację." },
    { question: "Gdzie Make przechowuje dane?", answer: "Make działa w chmurze. Przy zakładaniu organizacji można wybrać region, w tym europejski. Przy danych wrażliwych omawiamy, co trafia do scenariuszy, a co zostaje w waszych systemach." },
    { question: "Make czy Zapier dla małej firmy?", answer: "Zapier jest prostszy przy pojedynczych połączeniach. Make lepiej sprawdza się, gdy przepływ ma kilka kroków, warunki i operacje na listach. Przy rosnącej liczbie automatyzacji Make bywa też tańszy." },
    { question: "Czy zostajecie z nami po wdrożeniu?", answer: "Tak. Monitorujemy scenariusze, reagujemy na błędy i rozwijamy automatyzacje. Możemy też przekazać wszystko waszemu zespołowi z dokumentacją." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-dla-ksiegowosci", "automatyzacja-marketingu"],
  relatedToolSlugs: ["n8n", "zapier", "pipedrive", "hubspot"],
  relatedArticleSlugs: ["jak-wybrac-narzedzie-do-automatyzacji", "automatyzacja-obslugi-leadow-sprzedazowych", "integracja-crm-z-fakturowaniem"],
};
