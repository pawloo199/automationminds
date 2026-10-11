import type { IndustryPageContent } from "../types";

export const agencjePracy: IndustryPageContent = {
  industrySlug: "agencje-pracy",
  name: "Agencje pracy",
  excerpt: "Automatyzacja pracy agencji pracy tymczasowej i rekrutacyjnych: kandydaci, zlecenia od klientów, dokumenty pracowników, ewidencja czasu pracy, rozliczenia i komunikacja.",
  metaTitle: "Automatyzacja agencji pracy tymczasowej i rekrutacji",
  metaDescription:
    "Automatyzujemy pracę agencji pracy: obsługa kandydatów, zlecenia od klientów, dokumenty pracowników, ewidencja czasu pracy, rozliczenia i komunikacja.",
  primaryKeyword: "automatyzacja agencji pracy",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: agencje pracy",
    title: "Automatyzacja agencji pracy: rekruterzy przy ludziach, nie przy arkuszach",
    lead: "W agencji pracy liczy się szybkość: kto pierwszy przedstawi klientowi dobrych kandydatów, ten dostaje zlecenie. Tymczasem rekruterzy przepisują CV, szukają kandydatów w skrzynkach, pilnują terminów badań i dokumentów, a biuro zbiera godziny od klientów i liczy rozliczenia. Pomagamy agencjom pracy i rekrutacyjnym zautomatyzować tę pracę na narzędziach, których już używają, z AI tam, gdzie pomaga. Decyzje o kandydatach zawsze podejmują ludzie.",
    bullets: [
      "Kandydaci i zlecenia w jednym miejscu, bez przepisywania CV",
      "Dokumenty i terminy pracowników pilnowane automatycznie",
      "Godziny od klientów, rozliczenia i faktury bez arkuszy",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracy tymczasowej, agencje rekrutacyjne, agencje zatrudniające cudzoziemców" },
    { label: "Co automatyzujemy", value: "Kandydaci, zlecenia, dokumenty, czas pracy, rozliczenia, komunikacja" },
    { label: "Jak", value: "Obok systemu rekrutacyjnego i programów kadrowych, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System porządkuje, rekruter ocenia i decyduje" },
  ],
  symptoms: {
    title: "Po czym poznać, że agencja potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy rekruterów i biura da się przenieść na system.",
    items: [
      "CV przychodzą z portali, maili i komunikatorów, a rekruterzy przepisują je do bazy.",
      "Rekruter nie wie, że kandydat idealny do zlecenia jest już w bazie.",
      "Terminy badań, szkoleń BHP i dokumentów pobytowych pilnuje się w arkuszu.",
      "Godziny pracy od klientów przychodzą w różnych formatach i są przepisywane.",
      "Rozliczenie z klientami i dane do wynagrodzeń składa się ręcznie co miesiąc.",
      "Pracownicy dzwonią z pytaniami o grafik, wypłatę i dokumenty.",
    ],
  },
  intro: {
    title: "Automatyzacja w agencji pracy: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Agencja pracy łączy rekrutację, kadry i obsługę klientów. Rekruterzy pozyskują kandydatów i dopasowują ich do zleceń, biuro prowadzi dokumenty pracowników, zbiera ewidencję czasu pracy i rozlicza klientów, koordynatorzy utrzymują kontakt z pracownikami. Spora część tej pracy to przepisywanie danych i pilnowanie terminów. To właśnie tę pracę automatyzujemy.",
      "Automatyzacja nie zastępuje rekrutera. Ocena kandydata, rozmowa, rekomendacja dla klienta i decyzja o zatrudnieniu zostają przy ludziach. Unijne przepisy o AI zaliczają systemy używane do wyboru kandydatów do kategorii wysokiego ryzyka, dlatego AI w naszych wdrożeniach porządkuje informacje i podpowiada, ale nie ocenia ani nie odrzuca kandydatów. System przyjmuje CV, uzupełnia bazę, przypomina o terminach, zbiera godziny i przygotowuje rozliczenia.",
      "Nie wymieniamy systemu rekrutacyjnego ani programu kadrowo-płacowego. Budujemy obok nich to, czego brakuje: połączenia z portalami i pocztą, rejestr dokumentów i terminów, zbieranie ewidencji od klientów, rozliczenia, komunikację z pracownikami. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze agencji.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w agencjach pracy",
    lead: "Od CV kandydata do faktury dla klienta. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Kandydaci", body: "CV z portali, maili i formularzy w bazie, bez przepisywania." },
      { title: "Zlecenia od klientów", body: "Wymagania, liczba osób, terminy i statusy obsadzenia." },
      { title: "Wyszukiwanie w bazie", body: "Kandydaci pasujący do zlecenia jako lista dla rekrutera." },
      { title: "Dokumenty pracowników", body: "Umowy, badania, BHP, dokumenty pobytowe i ich terminy." },
      { title: "Ewidencja czasu pracy", body: "Godziny od klientów w jednym formacie, do akceptacji." },
      { title: "Rozliczenia i faktury", body: "Faktury dla klientów i dane do wynagrodzeń." },
      { title: "Komunikacja z pracownikami", body: "Grafiki, informacje i odpowiedzi w języku pracownika." },
      { title: "Raporty", body: "Obsadzenie zleceń, rotacja, godziny i marża według klientów." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w agencji pracy",
    lead: "Typowe przepływy, które budujemy w agencjach. Decyzje o kandydatach zostają przy rekruterach.",
    items: [
      {
        title: "Nowe zlecenie",
        trigger: "Klient zamawia dziesięć osób do magazynu",
        steps: ["Zlecenie w rejestrze z wymaganiami i terminem", "Lista kandydatów z bazy spełniających wymagania formalne", "Wiadomości do wybranych przez rekrutera kandydatów z pytaniem o dostępność"],
        result: "Rekruter zaczyna od kandydatów z bazy, a nie od nowego ogłoszenia.",
      },
      {
        title: "Termin dokumentu",
        trigger: "Za miesiąc kończy się ważność badań pracownika",
        steps: ["Przypomnienie dla koordynatora", "Wiadomość do pracownika z terminem badania", "Aktualizacja dokumentu po badaniu"],
        result: "Pracownik nie traci możliwości pracy przez przeoczony termin.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu rozliczeniowego",
        steps: ["Ewidencja godzin od klientów do akceptacji", "Faktury dla klientów według stawek", "Dane do wynagrodzeń dla programu kadrowo-płacowego"],
        result: "Rozliczenie bez przepisywania godzin.",
      },
    ],
  },
  security: {
    title: "Dane kandydatów i pracowników",
    lead: "Agencja przetwarza dużo danych osobowych, w tym dokumenty tożsamości, dane o zdrowiu z badań i dokumenty pobytowe. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze agencji." },
      { title: "AI bez decyzji o ludziach", body: "AI porządkuje informacje i podpowiada, ale nie ocenia, nie odrzuca i nie rankinguje kandydatów automatycznie." },
      { title: "Minimum danych w AI", body: "Do modeli nie trafiają dokumenty tożsamości ani dane o zdrowiu." },
      { title: "Uprawnienia", body: "Rekruter widzi kandydatów, kadry dokumenty, klient tylko dane uzgodnione w umowie." },
      { title: "Okresy przechowywania", body: "Dane kandydatów przechowywane i usuwane według zgód i zasad agencji." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
    ],
  },
  example: {
    title: "Agencja pracy przed i po automatyzacji",
    lead: "Przykład agencji pracy tymczasowej obsługującej kilkunastu klientów i kilkuset pracowników.",
    rows: [
      { label: "CV", before: "Przepisywane do bazy.", after: "W bazie automatycznie." },
      { label: "Zlecenia", before: "Nowe ogłoszenie za każdym razem.", after: "Najpierw kandydaci z bazy." },
      { label: "Dokumenty", before: "Arkusz terminów.", after: "Przypomnienia dla koordynatora i pracownika." },
      { label: "Godziny", before: "Przepisywane z plików klientów.", after: "Jeden format, do akceptacji." },
      { label: "Rozliczenia", before: "Kilka dni pracy.", after: "Faktury i dane do płac po akceptacji." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w agencji pracy",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie przerywać obsadzania zleceń.",
    phases: [
      { title: "Przegląd agencji", duration: "kilka dni", body: "Rozmawiamy z właścicielem, rekruterem, koordynatorem i osobą od rozliczeń, przeglądamy narzędzia, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy i informacja o używanych narzędziach." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ i zasady: co robi system, co robi AI, a co zawsze robi człowiek, także od strony ochrony danych.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie i testujemy je na wybranych klientach lub zleceniach.", fromYou: "Rekruter i koordynator oceniający testy." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie dla całej agencji i pilnujemy działania.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla agencji, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. terminów dokumentów", "Połączenie z narzędziami agencji", "Szkolenie zespołu"] },
      { name: "Cała agencja", description: "Dla agencji, które chcą uporządkować pracę od kandydata do faktury.", includes: ["Kilka połączonych procesów: kandydaci, zlecenia, dokumenty, czas pracy, rozliczenia", "Komunikacja z pracownikami", "Integracja z systemem rekrutacyjnym i programem kadrowym", "Raporty dla właściciela", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla agencji, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. porządkowania CV", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "liczba kandydatów, pracowników i klientów,",
      "możliwości integracji systemu rekrutacyjnego i programu kadrowego,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w agencjach pracy",
    items: [
      { risk: "AI zostanie użyte do oceny kandydatów.", mitigation: "Nie wdrażamy automatycznej oceny ani odrzucania kandydatów. AI porządkuje dane, a decyzje podejmuje rekruter." },
      { risk: "Przeoczony termin dokumentu pobytowego.", mitigation: "Przypomnienia z wyprzedzeniem i lista dokumentów kończących się w najbliższych tygodniach." },
      { risk: "Błędne godziny w rozliczeniu.", mitigation: "Ewidencja od klienta trafia do akceptacji, a rozbieżności są oznaczone." },
      { risk: "Dane kandydatów przechowywane za długo.", mitigation: "Okresy przechowywania według zgód i automatyczne przypomnienia o usunięciu." },
    ],
  },
  faq: [
    { question: "Czy AI będzie wybierać kandydatów?", answer: "Nie. AI porządkuje CV i podpowiada kandydatów spełniających wymagania formalne. Ocena i wybór należą do rekrutera." },
    { question: "Czy łączycie się z portalami z ogłoszeniami?", answer: "Tam, gdzie portal przekazuje aplikacje mailem lub przez API. Zakres sprawdzamy przy przeglądzie." },
    { question: "Czy musimy zmieniać system rekrutacyjny?", answer: "Zwykle nie. Łączymy się z systemem, z którego korzystacie, a brakujące elementy budujemy obok." },
    { question: "Czy pomożecie przy zatrudnianiu cudzoziemców?", answer: "Pilnujemy dokumentów i terminów według listy wymagań przekazanej przez agencję. Ocena prawna i procedury należą do agencji i jej doradców." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od terminów dokumentów albo od ewidencji czasu pracy i rozliczeń. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni, łącznie z testem." },
    { question: "Czy pracujecie z agencjami rekrutacji stałej?", answer: "Tak. U nich częściej zaczynamy od kandydatów, zleceń i komunikacji z klientami." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-hr", "automatyzacja-dla-ksiegowosci", "porzadkowanie-i-strukturyzowanie-danych", "integracje-systemow"],
  relatedProcessSlugs: ["onboarding-pracownika", "obsluga-zapytan-i-leadow", "raporty-finansowe", "obieg-umow"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365", "ksef"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-pracy", "baza-kandydatow-w-agencji-pracy", "obsadzanie-zlecen-w-agencji-pracy"],
};
