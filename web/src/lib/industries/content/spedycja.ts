import type { IndustryPageContent } from "../types";

export const spedycja: IndustryPageContent = {
  industrySlug: "spedycja",
  name: "Spedycja",
  excerpt: "Automatyzacja pracy firm spedycyjnych: zapytania i wyceny, zlecenia dla przewoźników, statusy, dokumenty i rozliczenia frachtu.",
  metaTitle: "Automatyzacja spedycji: zlecenia, przewoźnicy, dokumenty",
  metaDescription:
    "Automatyzujemy pracę firm spedycyjnych: zapytania i wyceny, zlecenia dla przewoźników, przewoźnicy, statusy dla klientów, CMR i rozliczenia frachtu.",
  primaryKeyword: "automatyzacja spedycji",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: spedycja",
    title: "Automatyzacja spedycji: mniej przepisywania, więcej czasu na klientów i przewoźników",
    lead: "Spedytor zarabia na relacjach i szybkich decyzjach, a spędza dużą część dnia na przepisywaniu: zapytań do arkusza, danych do zlecenia, statusów do maili, numerów z CMR do faktury. Pomagamy firmom spedycyjnym zautomatyzować tę pracę na narzędziach, których już używają, z AI tam, gdzie pomaga, i z kontrolą spedytora nad każdą decyzją.",
    bullets: [
      "Zapytania, wyceny i zlecenia bez przepisywania",
      "Statusy dla klientów i dokumenty przewozowe w jednym miejscu",
      "Połączenie z TMS, pocztą i programem do faktur",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy spedycyjne i działy spedycji w firmach transportowych, od kilku do kilkudziesięciu spedytorów" },
    { label: "Co automatyzujemy", value: "Zapytania, wyceny, zlecenia, przewoźnicy, statusy, dokumenty, rozliczenia" },
    { label: "Jak", value: "Obok TMS i giełd, z których korzystacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przygotowuje, spedytor decyduje o cenie i przewoźniku" },
  ],
  symptoms: {
    title: "Po czym poznać, że spedycja potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy spedytorów da się przenieść na system.",
    items: [
      "Zapytania od klientów przychodzą mailem w różnych formatach i ktoś przepisuje je do arkusza lub TMS.",
      "Zlecenie dla przewoźnika powstaje przez kopiowanie danych z zapytania, maila i poprzedniego zlecenia.",
      "Klienci dzwonią z pytaniem, gdzie jest ładunek, a spedytor dzwoni do kierowcy, żeby odpowiedzieć.",
      "Weryfikacja nowego przewoźnika to kilka stron internetowych i dokumentów sprawdzanych ręcznie.",
      "Faktury od przewoźników trzeba dopasować do zleceń, a CMR i potwierdzenia dostaw szuka się w mailach.",
      "Nie wiadomo bez arkusza, jaka jest marża na zleceniach i który klient jest najbardziej rentowny.",
    ],
  },
  intro: {
    title: "Automatyzacja w spedycji: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Spedycja to praca na danych, które krążą między klientem, spedytorem i przewoźnikiem: trasa, ładunek, terminy, ceny, dokumenty, statusy. Większość tych danych pojawia się raz, a potem jest przepisywana w kolejnych miejscach. Każde przepisanie to czas i ryzyko błędu, który w transporcie bywa kosztowny. To właśnie tę pracę automatyzujemy.",
      "Automatyzacja nie zastępuje spedytora. Negocjacja ceny, wybór przewoźnika, reakcja na problem na trasie i relacja z klientem zostają przy człowieku. System odczytuje zapytania, przygotowuje zlecenia, sprawdza przewoźników, zbiera statusy i dokumenty, a spedytor zatwierdza to, co wymaga decyzji.",
      "Nie wymieniamy TMS ani giełd transportowych, z których korzystacie. Budujemy obok nich to, czego brakuje: połączenia z pocztą, odczyt dokumentów z AI, automatyczne powiadomienia, rozliczenia i raporty. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze firmy.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w spedycji",
    lead: "Od zapytania klienta do rozliczenia zlecenia. Zaczynamy od obszaru, który zabiera spedytorom najwięcej czasu.",
    items: [
      { title: "Zapytania i wyceny", body: "Zapytania z maili odczytane i uporządkowane, propozycja ceny na podstawie historii podobnych tras." },
      { title: "Zlecenia transportowe", body: "Zlecenie dla przewoźnika z danych zapytania, wysłane do potwierdzenia, bez kopiowania." },
      { title: "Weryfikacja przewoźników", body: "Dane z rejestrów, biała lista VAT, dokumenty i ubezpieczenie sprawdzane w jednym miejscu." },
      { title: "Statusy i awizacje", body: "Statusy z TMS lub od przewoźnika przekazywane klientowi automatycznie." },
      { title: "Dokumenty przewozowe", body: "CMR i potwierdzenia dostaw odczytane, przypisane do zlecenia i sprawdzone pod kątem kompletności." },
      { title: "Rozliczenia frachtu", body: "Faktury dla klientów, faktury przewoźników dopasowane do zleceń, marża na zleceniu." },
      { title: "Płatności", body: "Przypomnienia o należnościach od klientów i terminy płatności dla przewoźników." },
      { title: "Raporty", body: "Marża, wolumen, klienci, trasy i przewoźnicy bez składania arkuszy." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w spedycji",
    lead: "Typowe przepływy, które budujemy w firmach spedycyjnych. Decyzje o cenie i przewoźniku zawsze zostają przy spedytorze.",
    items: [
      {
        title: "Zapytanie od klienta",
        trigger: "Mail z zapytaniem o transport",
        steps: [
          "AI odczytuje trasę, ładunek, terminy i wymagania",
          "Zapytanie trafia do TMS lub bazy zapytań, z historią podobnych tras",
          "Spedytor dostaje propozycję ceny i szkic odpowiedzi do zatwierdzenia",
        ],
        result: "Klient dostaje wycenę szybciej, a spedytor nie przepisuje maila.",
      },
      {
        title: "Zlecenie dla przewoźnika",
        trigger: "Spedytor wybiera przewoźnika",
        steps: [
          "Sprawdzenie przewoźnika w rejestrach i na białej liście VAT",
          "Zlecenie z danych zapytania i warunków przewoźnika, z szablonu firmy",
          "Wysyłka do potwierdzenia i zapis w TMS",
        ],
        result: "Zlecenie gotowe w kilka chwil, bez kopiowania danych i z kontrolą przewoźnika.",
      },
      {
        title: "Po dostawie",
        trigger: "Przewoźnik przesyła CMR i fakturę",
        steps: [
          "Odczyt CMR i faktury, przypisanie do zlecenia",
          "Porównanie kwoty z faktury z ceną w zleceniu",
          "Faktura dla klienta i przypomnienie o terminie płatności dla przewoźnika",
        ],
        result: "Zlecenie zamknięte z kompletem dokumentów, a rozbieżności widoczne od razu.",
      },
    ],
  },
  security: {
    title: "Dane, systemy i kontrola",
    lead: "Spedycja pracuje na danych klientów i przewoźników oraz na wielu systemach naraz. Wdrożenie projektujemy tak, żeby niczego nie rozregulować.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne do zadania." },
      { title: "TMS jako źródło prawdy", body: "Dane zleceń zostają w TMS. Automatyzacja je uzupełnia, a nie tworzy równoległej bazy." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Uprawnienia", body: "Spedytor widzi swoje zlecenia i klientów, kierownik całość." },
      { title: "Spedytor decyduje", body: "Cena, przewoźnik i odpowiedzi na reklamacje zawsze należą do człowieka." },
    ],
  },
  example: {
    title: "Spedycja przed i po automatyzacji",
    lead: "Przykład firmy spedycyjnej z kilkunastoma spedytorami, obsługującej transport krajowy i międzynarodowy.",
    rows: [
      { label: "Zapytania", before: "Przepisywane z maili do arkusza.", after: "Odczytane przez AI, z historią podobnych tras." },
      { label: "Zlecenia", before: "Kopiowane z poprzednich zleceń.", after: "Tworzone z danych zapytania i szablonu." },
      { label: "Przewoźnicy", before: "Sprawdzani ręcznie na kilku stronach.", after: "Weryfikacja w jednym miejscu przed zleceniem." },
      { label: "Statusy", before: "Telefon do kierowcy, telefon do klienta.", after: "Informacja dla klienta automatycznie." },
      { label: "Dokumenty i faktury", before: "CMR szukane w mailach, faktury dopasowywane ręcznie.", after: "Dokumenty przy zleceniu, rozbieżności oznaczone." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w spedycji",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie zatrzymywać bieżących zleceń.",
    phases: [
      {
        title: "Przegląd firmy",
        duration: "kilka dni",
        body: "Rozmawiamy z kierownikiem spedycji i jednym ze spedytorów, przeglądamy TMS, pocztę i program do faktur, wybieramy obszar z największą stratą czasu.",
        fromYou: "Godzina rozmowy i informacja o używanych systemach.",
      },
      {
        title: "Projekt",
        duration: "około tygodnia",
        body: "Projektujemy przepływ i zasady: co robi system, co robi AI, a co zawsze zatwierdza spedytor.",
        fromYou: "Akceptacja projektu i przykładowe dokumenty.",
      },
      {
        title: "Budowa i testy",
        duration: "zwykle 2–4 tygodnie",
        body: "Budujemy rozwiązanie obok TMS i testujemy je na wybranych klientach lub trasach.",
        fromYou: "Spedytor, który ocenia wyniki testów.",
      },
      {
        title: "Start i opieka",
        duration: "stale",
        body: "Uruchamiamy rozwiązanie dla całego zespołu, szkolimy spedytorów i pilnujemy działania. Kolejne obszary dokładamy, gdy pierwszy działa.",
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
          "Automatyzacja jednego obszaru, np. zleceń dla przewoźników",
          "Połączenie z TMS lub pocztą",
          "Szkolenie zespołu",
        ],
      },
      {
        name: "Spedycja",
        description: "Dla firm, które chcą uporządkować pracę od zapytania do rozliczenia.",
        includes: [
          "Kilka połączonych procesów: zapytania, zlecenia, statusy, rozliczenia",
          "Odczyt zapytań i dokumentów z AI",
          "Integracja z TMS i programem do faktur",
          "Raporty marży i wolumenu",
          "Opieka po wdrożeniu",
        ],
      },
      {
        name: "Agenci w abonamencie",
        description: "Dla firm, które nie chcą zajmować się technologią.",
        includes: [
          "Agenci AI do konkretnych zadań, np. odczytu zapytań lub statusów",
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
      "możliwości integracji TMS, z którego korzystacie,",
      "liczba zapytań, zleceń i dokumentów, które przetwarza AI,",
      "liczba klientów, którym przekazujemy statusy, i ich wymagania,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w spedycji",
    items: [
      { risk: "AI błędnie odczyta datę, adres lub wagę ładunku.", mitigation: "Odczytane dane trafiają do sprawdzenia przez spedytora przed wysłaniem wyceny lub zlecenia, a niepewne pola są oznaczone." },
      { risk: "Zlecenie trafi do nieuczciwego przewoźnika.", mitigation: "Weryfikacja przewoźnika przed zleceniem i lista przewoźników sprawdzonych. Decyzja o współpracy zostaje przy spedytorze." },
      { risk: "Klient dostanie nieaktualny status.", mitigation: "Statusy opieramy na danych z TMS lub od przewoźnika, z informacją o czasie aktualizacji." },
      { risk: "TMS nie ma API.", mitigation: "Korzystamy z importu i eksportu plików albo poczty, a połączenie projektujemy pod możliwości waszego systemu." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja zastąpi spedytorów?", answer: "Nie. Automatyzujemy przepisywanie danych, dokumenty, powiadomienia i rozliczenia. Negocjacje, wybór przewoźnika i relacja z klientem zostają przy spedytorze." },
    { question: "Czy musimy zmieniać TMS?", answer: "Zwykle nie. Łączymy się z TMS, którego używacie, przez API, import i eksport plików albo pocztę. Brakujące elementy budujemy obok niego." },
    { question: "Czy łączycie się z giełdami transportowymi?", answer: "Tam, gdzie giełda udostępnia API lub eksport danych, a firma ma do tego dostęp na swoim koncie. Zakres sprawdzamy przy przeglądzie, bo zależy od giełdy i planu." },
    { question: "Czy AI odczyta zapytania w różnych językach?", answer: "Tak. Modele AI dobrze radzą sobie z zapytaniami po polsku, angielsku, niemiecku i w innych językach. Odczytane dane zawsze sprawdza spedytor." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od zapytań i zleceń, bo tam spedytorzy tracą najwięcej czasu na przepisywanie. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni. Wdrożenia obejmujące kilka obszarów prowadzimy etapami." },
    { question: "Czy pracujecie z firmami transportowymi z własną flotą?", answer: "Tak. Procesy w dziale spedycji firmy transportowej są podobne. Jeśli interesuje was także praca magazynu i floty, zajrzyjcie na stronę o logistyce." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-logistyki", "integracje-systemow", "ai-w-obsludze-dokumentow", "agenci-ai"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "ofertowanie", "obieg-faktur-kosztowych", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["n8n", "microsoft-365", "chatgpt", "ksef"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "integracja-crm-z-fakturowaniem", "rodo-a-automatyzacja-procesow"],
};
