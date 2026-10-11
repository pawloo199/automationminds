import type { IndustryPageContent } from "../types";

export const zakladyProdukcyjne: IndustryPageContent = {
  industrySlug: "zaklady-produkcyjne",
  name: "Zakłady produkcyjne",
  excerpt: "Automatyzacja pracy zakładów produkcyjnych poza maszynami: zapytania i wyceny, zamówienia i terminy, zakupy u dostawców, reklamacje i jakość, utrzymanie ruchu, dokumentacja techniczna.",
  metaTitle: "Automatyzacja zakładu produkcyjnego: biuro, jakość, zakupy",
  metaDescription:
    "Automatyzujemy pracę wokół produkcji: zapytania i wyceny, zamówienia i terminy, zakupy, reklamacje, utrzymanie ruchu i dokumentację techniczną.",
  primaryKeyword: "automatyzacja zakładu produkcyjnego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: zakłady produkcyjne",
    title: "Automatyzacja zakładu produkcyjnego: informacja płynie tak sprawnie jak produkcja",
    lead: "W wielu zakładach maszyny pracują według planu, a informacja wokół nich krąży mailem, telefonem i w arkuszach. Wycena czeka na technologa, klient pyta o termin, a nikt nie wie, na jakim etapie jest zamówienie, reklamacja ciągnie się tygodniami, a przegląd maszyny przypomina się dopiero po awarii. Pomagamy zakładom produkcyjnym zautomatyzować tę pracę na systemach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Wyceny i potwierdzenia zamówień bez czekania",
      "Reklamacje, zakupy i dokumentacja w jednym obiegu",
      "Przeglądy maszyn i awarie pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Zakłady produkujące na zamówienie i seryjnie, małe i średnie" },
    { label: "Co automatyzujemy", value: "Wyceny, zamówienia, zakupy, reklamacje, utrzymanie ruchu, dokumentacja" },
    { label: "Jak", value: "Obok ERP i narzędzi, których używacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przenosi informacje, ludzie decydują o produkcji" },
  ],
  symptoms: {
    title: "Po czym poznać, że zakład potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy biura i działów wsparcia da się przenieść na system.",
    items: [
      "Wycena zapytania od klienta czeka kilka dni, bo technolog ma pilniejsze sprawy.",
      "Handlowiec dzwoni na halę, żeby podać klientowi termin realizacji.",
      "Reklamacje klientów są w mailach i arkuszu, a odpowiedź trwa tygodniami.",
      "Potwierdzenia od dostawców trzeba wyciągać telefonami.",
      "O przeglądzie maszyny ktoś przypomina sobie po awarii.",
      "Na hali bywa nieaktualna wersja rysunku lub instrukcji.",
    ],
  },
  intro: {
    title: "Automatyzacja w zakładzie produkcyjnym: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Wokół linii i maszyn pracuje biuro handlowe, technologia, zakupy, dział jakości, utrzymanie ruchu i księgowość. Każdy z tych działów przekazuje informacje pozostałym: zapytanie klienta do wyceny, zamówienie do planowania, brak materiału do zakupów, reklamację do jakości, awarię do utrzymania ruchu. Gdy te przekazania idą mailem i telefonem, informacja się gubi albo spóźnia. To właśnie automatyzujemy.",
      "Nie sterujemy maszynami i nie zmieniamy automatyki przemysłowej. Decyzje technologiczne, plan produkcji, ocena jakości i decyzje o bezpieczeństwie maszyn zostają przy ludziach. System przenosi dane między działami, pilnuje terminów, przygotowuje szkice dokumentów i daje kierownictwu aktualny obraz. AI pomaga czytać zapytania, rysunki opisowe i dokumenty od dostawców oraz pisać odpowiedzi.",
      "Nie wymieniamy ERP. Budujemy obok niego to, czego brakuje: rejestry zapytań, reklamacji i zgłoszeń, przypomnienia, połączenia z pocztą, dyskiem i programem do faktur, raporty. Pracę samej hali, czyli zlecenia, raporty zmianowe i stany materiałów, opisujemy osobno na stronie usługi automatyzacja w produkcji. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze zakładu.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w zakładach produkcyjnych",
    lead: "Od zapytania klienta do faktury i serwisu maszyn. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Zapytania i wyceny", body: "Zapytania ofertowe w rejestrze, kalkulacja z danych technologii." },
      { title: "Zamówienia i terminy", body: "Potwierdzenia zamówień, terminy i status dla klienta." },
      { title: "Zlecenia i hala", body: "Zlecenia i raporty zmianowe w cyfrowym obiegu." },
      { title: "Zakupy i dostawcy", body: "Zapytania do dostawców, potwierdzenia, terminy dostaw." },
      { title: "Reklamacje i jakość", body: "Reklamacje klientów i dostawców, raporty, świadectwa." },
      { title: "Utrzymanie ruchu", body: "Zgłoszenia awarii, przeglądy maszyn, części zamienne." },
      { title: "Dokumentacja techniczna", body: "Rysunki, wersje, instrukcje i zmiany konstrukcyjne." },
      { title: "Faktury i raporty", body: "Faktury, KSeF i raporty dla kierownictwa." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w zakładzie produkcyjnym",
    lead: "Typowe przepływy, które budujemy w zakładach. Decyzje o produkcji zostają przy ludziach.",
    items: [
      {
        title: "Zapytanie ofertowe",
        trigger: "Klient przysyła zapytanie z rysunkiem i ilościami",
        steps: ["Zapytanie w rejestrze z wyodrębnionymi danymi", "Kalkulacja z czasów i materiałów od technologa", "Handlowiec sprawdza i wysyła ofertę"],
        result: "Oferta szybciej, a technolog liczy tylko to, co nowe.",
      },
      {
        title: "Reklamacja klienta",
        trigger: "Klient zgłasza wadę partii",
        steps: ["Reklamacja w rejestrze z numerem partii i zdjęciami", "Dział jakości dostaje zadanie z terminem odpowiedzi", "Szkic raportu i odpowiedzi do klienta"],
        result: "Klient dostaje odpowiedź w terminie, a zakład ma historię wad.",
      },
      {
        title: "Przegląd maszyny",
        trigger: "Zbliża się termin przeglądu",
        steps: ["Zadanie dla utrzymania ruchu z listą kontrolną", "Informacja dla planowania o planowanym postoju", "Protokół z przeglądu w historii maszyny"],
        result: "Przeglądy w terminie i bez zaskoczeń w planie.",
      },
    ],
  },
  security: {
    title: "Dane produkcyjne i know-how",
    lead: "Rysunki klientów, receptury i technologia to wiedza, której zakład musi pilnować. Wdrożenia projektujemy tak, żeby była pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze zakładu." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Rysunki i technologia", body: "Dokumentacja klientów i technologia zostają w waszych systemach, automatyzacja korzysta z ich metadanych." },
      { title: "Uprawnienia", body: "Handlowiec widzi swoich klientów, dział jakości reklamacje, utrzymanie ruchu maszyny." },
      { title: "Ślad działań", body: "Każda zmiana statusu, dokumentu i automatyczna operacja są zapisane." },
      { title: "Ludzie decydują", body: "Wyceny, decyzje jakościowe i decyzje o maszynach zatwierdzają odpowiedzialne osoby." },
    ],
  },
  example: {
    title: "Zakład produkcyjny przed i po automatyzacji",
    lead: "Przykład zakładu obróbki metali produkującego na zamówienie dla klientów przemysłowych.",
    rows: [
      { label: "Wyceny", before: "Czekają na technologa.", after: "Kalkulacja z danych, technolog dopracowuje nowe pozycje." },
      { label: "Terminy dla klienta", before: "Telefon na halę.", after: "Status zamówienia w systemie." },
      { label: "Reklamacje", before: "Mail i arkusz.", after: "Rejestr z terminami i raportami." },
      { label: "Przeglądy maszyn", before: "Po awarii.", after: "Plan i przypomnienia." },
      { label: "Rysunki na hali", before: "Czasem nieaktualne.", after: "Aktualna wersja z rejestru." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym zakładzie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w zakładzie produkcyjnym",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie zakłócać produkcji.",
    phases: [
      { title: "Przegląd zakładu", duration: "kilka dni", body: "Rozmawiamy z kierownictwem, biurem handlowym, jakością i utrzymaniem ruchu, przeglądamy systemy i dokumenty, wybieramy obszar z największą stratą czasu.", fromYou: "Kilka godzin rozmów i informacja o używanych systemach." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ, rejestry i zasady: co robi system, co robi AI, a co zawsze robi człowiek.", fromYou: "Akceptacja projektu i przykładowe dokumenty." },
      { title: "Budowa i testy", duration: "zwykle 3–6 tygodni", body: "Budujemy rozwiązanie i testujemy je na wybranych klientach, maszynach lub wyrobach.", fromYou: "Osoba z działu, która ocenia testy." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie w całym dziale i pilnujemy działania.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla zakładów, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. reklamacji", "Połączenie z ERP i pocztą", "Szkolenie zespołu"] },
      { name: "Cały obieg", description: "Dla zakładów, które chcą połączyć działy od zapytania do faktury.", includes: ["Kilka połączonych procesów: wyceny, zamówienia, zakupy, reklamacje", "Utrzymanie ruchu i dokumentacja techniczna", "Integracja z ERP i programem do faktur", "Raporty dla kierownictwa", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla zakładów, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. czytania zapytań", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "możliwości integracji z waszym ERP,",
      "liczba klientów, wyrobów i maszyn,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w zakładach produkcyjnych",
    items: [
      { risk: "Automatyzacja zakłóci produkcję.", mitigation: "Nie dotykamy sterowania maszynami, a nowe przepływy testujemy obok dotychczasowych." },
      { risk: "Dane w ERP i w nowym rejestrze się rozjadą.", mitigation: "ERP zostaje źródłem danych o wyrobach i zamówieniach, a rejestry pobierają z niego dane." },
      { risk: "Kalkulacja z błędnymi danymi.", mitigation: "Wycenę zawsze sprawdza handlowiec lub technolog, a kalkulacja pokazuje, z jakich danych korzysta." },
      { risk: "Zespół hali nie przyjmie nowego narzędzia.", mitigation: "Projektujemy proste formularze na telefon lub tablet i testujemy je z pracownikami." },
    ],
  },
  faq: [
    { question: "Czy automatyzujecie maszyny i linie produkcyjne?", answer: "Nie. Automatyzujemy przepływ informacji wokół produkcji: wyceny, zamówienia, zakupy, reklamacje, utrzymanie ruchu i dokumentację." },
    { question: "Czy musimy wymienić ERP?", answer: "Nie. Budujemy obok ERP i łączymy się z nim tam, gdzie to możliwe. ERP zostaje źródłem danych o wyrobach i zamówieniach." },
    { question: "Czym ta strona różni się od usługi automatyzacja w produkcji?", answer: "Usługa dotyczy pracy samej hali: zleceń, raportów zmianowych i stanów materiałów. Ta strona opisuje cały zakład, w tym sprzedaż, zakupy, jakość i utrzymanie ruchu." },
    { question: "Czy pracujecie z zakładami produkującymi na zamówienie?", answer: "Tak. Tam najwięcej czasu zabierają wyceny, terminy i dokumentacja klientów, więc efekt jest szybko widoczny." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od wycen albo od reklamacji. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni, łącznie z testem na wybranych klientach lub maszynach." },
    { question: "Czy zakład musi mieć dział IT?", answer: "Nie. Potrzebna jest osoba, która zna proces i może ocenić testy. Resztą zajmujemy się my." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "cyfryzacja-danych-i-dokumentow"],
  relatedProcessSlugs: ["ofertowanie", "przyjmowanie-zamowien", "obsluga-reklamacji", "obieg-faktur-kosztowych"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365", "ksef"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-zakladzie-produkcyjnym", "kalkulacja-kosztow-zlecenia-produkcyjnego", "przeglady-maszyn-w-zakladzie"],
};
