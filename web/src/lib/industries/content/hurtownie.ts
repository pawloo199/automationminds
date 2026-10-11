import type { IndustryPageContent } from "../types";

export const hurtownie: IndustryPageContent = {
  industrySlug: "hurtownie-i-dystrybucja",
  name: "Hurtownie i dystrybucja",
  excerpt: "Automatyzacja pracy hurtowni, dystrybutorów i firm handlowych B2B: zamówienia, oferty i cenniki, handlowcy, zakupy, reklamacje i należności.",
  metaTitle: "Automatyzacja hurtowni i dystrybucji: zamówienia, oferty",
  metaDescription:
    "Automatyzujemy pracę hurtowni i dystrybutorów: zamówienia od klientów, oferty i cenniki, praca handlowców, zakupy u dostawców, reklamacje i należności.",
  primaryKeyword: "automatyzacja hurtowni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: hurtownie i dystrybucja",
    title: "Automatyzacja hurtowni: handlowcy sprzedają, zamówienia przyjmują się same",
    lead: "W hurtowni i firmie dystrybucyjnej sprzedaż opiera się na relacjach handlowców z klientami, a obsługa zamówień na pracy biura. Zamówienia przychodzą mailem, telefonicznie i w plikach, oferty i cenniki przygotowuje się ręcznie, a należności pilnuje się w arkuszu. Pomagamy firmom handlowym B2B zautomatyzować tę pracę na systemach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Zamówienia z maili i plików prosto do ERP",
      "Oferty i cenniki klientów bez ręcznego składania",
      "Należności i limity kupieckie pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Hurtownie, dystrybutorzy i firmy handlowe B2B, od kilkunastu do kilkuset pracowników" },
    { label: "Co automatyzujemy", value: "Zamówienia, oferty, cenniki, pracę handlowców, zakupy, reklamacje, należności" },
    { label: "Jak", value: "Obok ERP, CRM i platformy B2B, których używacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przygotowuje, handlowiec i biuro decydują o warunkach" },
  ],
  symptoms: {
    title: "Po czym poznać, że hurtownia potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy handlowców i biura da się przenieść na system.",
    items: [
      "Zamówienia od klientów przychodzą mailem, w PDF i telefonicznie, a biuro przepisuje je do ERP.",
      "Przygotowanie oferty lub cennika dla klienta zajmuje handlowcowi godzinę lub dłużej.",
      "Handlowcy nie wiedzą bez dzwonienia do biura, czy towar jest dostępny i kiedy dojedzie.",
      "Klienci przekraczają limity kupieckie, a o zaległościach handlowiec dowiaduje się za późno.",
      "Zamówienia do dostawców i ich potwierdzenia są w mailach, a terminy dostaw pilnuje się ręcznie.",
      "Reklamacje i zwroty obsługuje się mailowo, bez wspólnego rejestru i terminów.",
    ],
  },
  intro: {
    title: "Automatyzacja w hurtowni: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Hurtownia działa na dużej liczbie zamówień, pozycji i klientów. ERP prowadzi stany, ceny i dokumenty, ale wiele informacji wchodzi do niego ręcznie: zamówienia z maili, oferty z arkuszy, potwierdzenia od dostawców, notatki handlowców. Każde przepisanie to czas i ryzyko błędu, które kończy się złym towarem u klienta albo błędną fakturą.",
      "Automatyzacja nie zastępuje handlowców. Relacje z klientami, negocjacje i warunki handlowe zostają przy ludziach. System przejmuje to, co powtarzalne: odczytuje zamówienia, przygotowuje oferty i cenniki, informuje o dostępności, przypomina o należnościach i zbiera dane do raportów.",
      "Nie wymieniamy ERP ani platformy B2B. Budujemy obok nich to, czego brakuje: połączenia z pocztą, odczyt zamówień i dokumentów z AI, generowanie ofert, powiadomienia dla handlowców i klientów. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze firmy.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w hurtowniach",
    lead: "Od zamówienia klienta do zapłaty i od zapytania do zamówienia u dostawcy. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Zamówienia od klientów", body: "Zamówienia z maili, PDF i plików odczytane i wprowadzone do ERP po kontroli." },
      { title: "Dostępność i terminy", body: "Informacja o dostępności i terminach dostaw dla handlowców i klientów bez dzwonienia." },
      { title: "Oferty i cenniki", body: "Oferty i cenniki z warunkami klienta przygotowywane z ERP w kilka chwil." },
      { title: "Praca handlowców", body: "CRM, przypomnienia o klientach, raporty z wizyt i leady z formularzy." },
      { title: "Zakupy u dostawców", body: "Zamówienia do dostawców, potwierdzenia i pilnowanie terminów dostaw." },
      { title: "Reklamacje i zwroty", body: "Jeden rejestr zgłoszeń z dokumentami, terminami i statusami." },
      { title: "Należności i limity", body: "Przypomnienia o płatnościach i informacja o limitach kupieckich dla handlowców." },
      { title: "Raporty sprzedaży", body: "Sprzedaż, marża, klienci i handlowcy bez składania arkuszy." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w hurtowni",
    lead: "Typowe przepływy, które budujemy w firmach handlowych B2B. Warunki handlowe zawsze ustala człowiek.",
    items: [
      {
        title: "Zamówienie od klienta",
        trigger: "Mail z zamówieniem w PDF lub treści wiadomości",
        steps: [
          "AI odczytuje pozycje, ilości i dane klienta",
          "Kontrola indeksów, cen i dostępności w ERP",
          "Zamówienie w ERP i potwierdzenie dla klienta z terminem realizacji",
        ],
        result: "Zamówienie jest w systemie kilka minut po wysłaniu, a biuro zajmuje się tylko wyjątkami.",
      },
      {
        title: "Oferta dla klienta",
        trigger: "Handlowiec wybiera klienta i produkty",
        steps: [
          "Ceny i rabaty klienta z ERP",
          "Oferta z szablonu firmy z dostępnością i terminami",
          "Wysyłka i przypomnienie o ofercie bez odpowiedzi",
        ],
        result: "Oferta gotowa w kilka chwil, a handlowiec nie zapomina o follow-upie.",
      },
      {
        title: "Przekroczony limit",
        trigger: "Nowe zamówienie klienta z zaległymi płatnościami",
        steps: [
          "Sprawdzenie należności i limitu kupieckiego",
          "Informacja dla handlowca i działu finansów",
          "Decyzja o realizacji zamówienia i przypomnienie dla klienta",
        ],
        result: "Firma nie wysyła towaru klientom z zaległościami bez świadomej decyzji.",
      },
    ],
  },
  security: {
    title: "Systemy, dane i warunki handlowe",
    lead: "Ceny, rabaty i dane klientów to dla hurtowni tajemnica handlowa. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "ERP jako źródło prawdy", body: "Ceny, stany i dokumenty zostają w ERP. Automatyzacja z nich korzysta i je uzupełnia." },
      { title: "Warunki handlowe chronione", body: "Ceny i rabaty klientów nie trafiają do zewnętrznych usług bez potrzeby." },
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Uprawnienia", body: "Handlowiec widzi swoich klientów, kierownik sprzedaży całość." },
      { title: "Ludzie decydują o warunkach", body: "Ceny specjalne, wyjątki od limitów i uznanie reklamacji zatwierdza człowiek." },
    ],
  },
  example: {
    title: "Hurtownia przed i po automatyzacji",
    lead: "Przykład dystrybutora z kilkunastoma handlowcami i kilkuset stałymi klientami.",
    rows: [
      { label: "Zamówienia", before: "Przepisywane z maili i PDF do ERP.", after: "Odczytane i wprowadzone po kontroli." },
      { label: "Oferty", before: "Składane w arkuszu dla każdego klienta.", after: "Generowane z ERP z warunkami klienta." },
      { label: "Dostępność", before: "Handlowiec dzwoni do biura.", after: "Informacja w telefonie handlowca." },
      { label: "Należności", before: "Arkusz aktualizowany raz w tygodniu.", after: "Przypomnienia i informacja przy zamówieniu." },
      { label: "Zakupy", before: "Potwierdzenia dostawców w mailach.", after: "Terminy dostaw pilnowane automatycznie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w hurtowni",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie zatrzymywać sprzedaży.",
    phases: [
      {
        title: "Przegląd firmy",
        duration: "kilka dni",
        body: "Rozmawiamy z kierownikiem sprzedaży, biurem obsługi zamówień i działem zakupów, przeglądamy ERP i CRM, wybieramy obszar z największą stratą czasu.",
        fromYou: "Kilka godzin rozmów i informacja o używanych systemach.",
      },
      {
        title: "Projekt",
        duration: "około tygodnia",
        body: "Projektujemy przepływ i zasady: co robi system, co robi AI, a co zawsze zatwierdza człowiek.",
        fromYou: "Akceptacja projektu i przykładowe zamówienia, oferty lub cenniki.",
      },
      {
        title: "Budowa i testy",
        duration: "zwykle 2–5 tygodni",
        body: "Budujemy rozwiązanie obok ERP i testujemy je na wybranej grupie klientów lub handlowców.",
        fromYou: "Osoby, które oceniają wyniki testów.",
      },
      {
        title: "Start i opieka",
        duration: "stale",
        body: "Uruchamiamy rozwiązanie dla całej firmy, szkolimy zespół i pilnujemy działania. Kolejne obszary dokładamy, gdy pierwszy działa.",
        fromYou: "Uwagi zespołu w pierwszych tygodniach.",
      },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      {
        name: "Jeden proces",
        description: "Dla firm, które chcą sprawdzić automatyzację na jednym obszarze.",
        includes: [
          "Przegląd i wybór procesu",
          "Automatyzacja jednego obszaru, np. zamówień z maili",
          "Połączenie z ERP",
          "Szkolenie zespołu",
        ],
      },
      {
        name: "Hurtownia",
        description: "Dla firm, które chcą uporządkować pracę od zamówienia do zapłaty.",
        includes: [
          "Kilka połączonych procesów: zamówienia, oferty, należności, zakupy",
          "Odczyt zamówień i dokumentów z AI",
          "Integracja z ERP, CRM i platformą B2B",
          "Raporty sprzedaży i marży",
          "Opieka po wdrożeniu",
        ],
      },
      {
        name: "Agenci w abonamencie",
        description: "Dla firm, które nie chcą zajmować się technologią.",
        includes: [
          "Agenci AI do konkretnych zadań, np. zamówień z maili lub pytań o dostępność",
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
      "możliwości integracji ERP,",
      "liczba zamówień i dokumentów, które przetwarza AI,",
      "liczba handlowców i klientów,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w hurtowniach",
    items: [
      { risk: "AI źle odczyta indeks lub ilość w zamówieniu.", mitigation: "Kontrola z ERP przed wprowadzeniem zamówienia, a pozycje z niepewnym odczytem trafiają do sprawdzenia." },
      { risk: "Oferta z błędną ceną trafi do klienta.", mitigation: "Ceny pochodzą z ERP, a ceny specjalne i wyjątki zatwierdza handlowiec przed wysyłką." },
      { risk: "Klient poczuje, że rozmawia z automatem.", mitigation: "Automatyzacja przejmuje obsługę powtarzalną, a relacja i negocjacje zostają przy handlowcu." },
      { risk: "ERP nie ma API.", mitigation: "Korzystamy z importu i eksportu plików albo bazy danych, a połączenie projektujemy pod możliwości systemu." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja zastąpi handlowców?", answer: "Nie. Automatyzujemy przepisywanie zamówień, przygotowanie ofert, informacje o dostępności i przypomnienia. Relacje z klientami, negocjacje i warunki handlowe zostają przy handlowcach." },
    { question: "Czy musimy zmieniać ERP?", answer: "Zwykle nie. Łączymy się z ERP, którego używacie, przez API, import i eksport plików albo bazę danych. Brakujące elementy budujemy obok niego." },
    { question: "Mamy platformę B2B. Czy to coś zmienia?", answer: "Platforma B2B dobrze obsługuje klientów, którzy z niej korzystają. Automatyzacja pomaga przy pozostałych: tych, którzy zamawiają mailem, telefonicznie lub w plikach, i łączy platformę z resztą procesów." },
    { question: "Czy AI odczyta zamówienia w PDF od klientów?", answer: "Tak, także gdy każdy klient ma inny układ dokumentu. Dane przed wprowadzeniem do ERP przechodzą kontrolę." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od zamówień z maili albo od ofert i cenników, bo tam biuro i handlowcy tracą najwięcej czasu. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni. Wdrożenia obejmujące kilka obszarów prowadzimy etapami." },
    { question: "Czy pracujecie z firmami produkcyjnymi, które sprzedają hurtowo?", answer: "Tak. Procesy sprzedaży i obsługi zamówień w firmach produkcyjnych są podobne. Zakres ustalamy po rozmowie." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "integracje-systemow", "ai-w-obsludze-dokumentow", "automatyzacja-w-obsludze-klienta"],
  relatedProcessSlugs: ["przyjmowanie-zamowien", "ofertowanie", "przypomnienia-o-platnosciach", "obsluga-reklamacji"],
  relatedToolSlugs: ["n8n", "hubspot", "pipedrive", "microsoft-365"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-hurtowni", "platforma-b2b-czy-automatyzacja-zamowien", "limity-kupieckie-i-naleznosci"],
};
