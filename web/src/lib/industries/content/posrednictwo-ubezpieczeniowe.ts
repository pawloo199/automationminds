import type { IndustryPageContent } from "../types";

export const posrednictwoUbezpieczeniowe: IndustryPageContent = {
  industrySlug: "posrednictwo-ubezpieczeniowe",
  name: "Pośrednictwo ubezpieczeniowe",
  excerpt: "Automatyzacja pracy agencji ubezpieczeniowych, multiagencji i brokerów: zapytania, odnowienia polis, dokumenty klientów, szkody, prowizje i baza polis.",
  metaTitle: "Automatyzacja agencji ubezpieczeniowej i multiagencji",
  metaDescription:
    "Automatyzujemy pracę agencji ubezpieczeniowych i brokerów: zapytania, odnowienia polis, dokumenty klientów, wsparcie przy szkodach, prowizje i baza polis.",
  primaryKeyword: "automatyzacja agencji ubezpieczeniowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: pośrednictwo ubezpieczeniowe",
    title: "Automatyzacja agencji ubezpieczeniowej: agenci przy klientach, nie przy przepisywaniu",
    lead: "Agencja ubezpieczeniowa żyje z odnowień i poleceń, a traci klientów, gdy przegapi termin albo odpowie za późno. Tymczasem agenci spędzają godziny na przepisywaniu danych z kalkulatorów towarzystw, szukaniu polis kończących się w przyszłym miesiącu, kompletowaniu dokumentów i rozliczaniu prowizji. Pomagamy agencjom, multiagencjom i brokerom zautomatyzować tę pracę na narzędziach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Odnowienia polis pilnowane automatycznie, z wyprzedzeniem",
      "Zapytania i dokumenty klientów bez przepisywania",
      "Prowizje i baza polis pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje ubezpieczeniowe, multiagencje, brokerzy i ich sieci" },
    { label: "Co automatyzujemy", value: "Zapytania, odnowienia, dokumenty, szkody, prowizje, baza polis" },
    { label: "Jak", value: "Obok CRM i systemów agencyjnych, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przygotowuje, agent doradza i decyduje" },
  ],
  symptoms: {
    title: "Po czym poznać, że agencja potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy agentów da się przenieść na system.",
    items: [
      "Polisy kończące się w przyszłym miesiącu wyszukuje się ręcznie albo z pamięci agenta.",
      "Dane klienta wpisuje się kilka razy: do CRM, do kalkulatorów kilku towarzystw, do dokumentów.",
      "Zapytania ze strony i telefonu trafiają do różnych osób i część czeka za długo.",
      "Dokumenty klientów, np. analiza potrzeb czy pełnomocnictwa, są rozproszone między skrzynkami i segregatorami.",
      "Klient zgłaszający szkodę dzwoni kilka razy, żeby dowiedzieć się, co dalej.",
      "Rozliczenie prowizji z kilkoma towarzystwami to co miesiąc kilka dni w arkuszach.",
    ],
  },
  intro: {
    title: "Automatyzacja w pośrednictwie ubezpieczeniowym: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Praca agenta ubezpieczeniowego łączy sprzedaż, doradztwo i administrację. Agent rozpoznaje potrzeby klienta, porównuje oferty, przygotowuje dokumenty, pilnuje odnowień i pomaga przy szkodach. Biuro agencji rozlicza prowizje, prowadzi bazę polis i dokumentację wymaganą przy dystrybucji ubezpieczeń. Spora część tej pracy to przepisywanie danych i pilnowanie terminów. To właśnie tę pracę automatyzujemy.",
      "Automatyzacja nie zastępuje agenta. Rozmowa z klientem, rozpoznanie jego potrzeb, rekomendacja i decyzja o wyborze ubezpieczenia zostają przy ludziach. System zbiera dane, przypomina o odnowieniach, przygotowuje dokumenty z szablonów i porządkuje prowizje. AI pomaga przy porządkowaniu zapytań, streszczaniu warunków ubezpieczenia i odpowiedziach na typowe pytania.",
      "Nie wymieniamy systemów agencyjnych ani CRM. Budujemy obok nich to, czego brakuje: połączenia z pocztą i formularzami, bazę polis z terminami, szablony dokumentów, rozliczenia prowizji i raporty. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze agencji. Nie łączymy się z systemami towarzystw tam, gdzie nie udostępniają do tego narzędzi, i mówimy o tym na początku.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w agencjach ubezpieczeniowych",
    lead: "Od zapytania klienta do rozliczenia prowizji. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Zapytania i kalkulacje", body: "Zapytania ze strony, telefonu i poczty w jednym miejscu, z kompletem danych do kalkulacji." },
      { title: "Odnowienia polis", body: "Lista polis kończących się w najbliższych tygodniach, przypomnienia dla agenta i klienta." },
      { title: "Dokumenty klientów", body: "Analiza potrzeb, pełnomocnictwa i oświadczenia z szablonów, z archiwum przy kliencie." },
      { title: "Wsparcie przy szkodach", body: "Lista dokumentów do zgłoszenia, statusy dla klienta i przypomnienia dla agenta." },
      { title: "Prowizje", body: "Zestawienia prowizji z towarzystw porównane z bazą polis, rozbieżności do wyjaśnienia." },
      { title: "Baza polis i klientów", body: "Polisy z wielu towarzystw w jednej bazie, z terminami i historią klienta." },
      { title: "Komunikacja z klientami", body: "Przypomnienia o płatnościach rat, życzenia, informacje o zmianach, bez ręcznego wysyłania." },
      { title: "Wiedza agencji", body: "Asystent odpowiadający agentom na pytania o produkty, procedury i warunki ubezpieczeń." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w agencji ubezpieczeniowej",
    lead: "Typowe przepływy, które budujemy w agencjach i u brokerów. Doradztwo i decyzje zostają przy agentach.",
    items: [
      {
        title: "Odnowienie polisy",
        trigger: "Polisa kończy się za 45 dni",
        steps: [
          "Zadanie dla agenta prowadzącego z danymi polisy i historią klienta",
          "Wiadomość do klienta z prośbą o aktualizację danych, np. przebiegu pojazdu",
          "Przypomnienie dla agenta, jeśli oferta nie została wysłana na czas",
        ],
        result: "Żadne odnowienie nie umyka, a agent ma czas porównać oferty.",
      },
      {
        title: "Nowe zapytanie",
        trigger: "Klient wypełnia formularz na stronie",
        steps: [
          "Zapytanie w CRM z rodzajem ubezpieczenia i danymi do kalkulacji",
          "Lista brakujących danych wysłana klientowi",
          "Przydział do agenta i termin kontaktu",
        ],
        result: "Agent dostaje komplet danych, a klient szybką odpowiedź.",
      },
      {
        title: "Rozliczenie prowizji",
        trigger: "Zestawienie prowizji z towarzystwa",
        steps: [
          "Import zestawienia i porównanie z bazą polis",
          "Lista rozbieżności: brakujące polisy, inne stawki",
          "Podział prowizji między agentów do akceptacji",
        ],
        result: "Rozbieżności widać od razu, a rozliczenie agentów nie wymaga arkuszy.",
      },
    ],
  },
  security: {
    title: "Dane klientów",
    lead: "Pośrednictwo ubezpieczeniowe to dane osobowe klientów, a przy ubezpieczeniach na życie i zdrowotnych także dane szczególnie chronione. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze agencji." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Dane o zdrowiu", body: "Informacji o stanie zdrowia nie przekazujemy do AI, a dostęp do nich ograniczamy do osób, które ich potrzebują." },
      { title: "Uprawnienia", body: "Agent widzi swoich klientów, biuro rozliczenia, właściciel agencji całość." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Ludzie decydują", body: "Rekomendacje dla klientów i dokumenty wymagane przy dystrybucji przygotowuje i zatwierdza agent." },
    ],
  },
  example: {
    title: "Agencja ubezpieczeniowa przed i po automatyzacji",
    lead: "Przykład multiagencji z kilkoma agentami, współpracującej z kilkunastoma towarzystwami.",
    rows: [
      { label: "Odnowienia", before: "Wyszukiwane ręcznie, część umyka.", after: "Lista z wyprzedzeniem i przypomnienia." },
      { label: "Zapytania", before: "W różnych skrzynkach.", after: "W CRM, z kompletem danych." },
      { label: "Dokumenty", before: "Kopiowane z poprzednich.", after: "Z szablonów, w archiwum klienta." },
      { label: "Szkody", before: "Klient dzwoni z pytaniami.", after: "Lista dokumentów i statusy." },
      { label: "Prowizje", before: "Arkusze na koniec miesiąca.", after: "Porównanie z bazą polis i lista rozbieżności." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w agencji",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie przerywać obsługi klientów.",
    phases: [
      { title: "Przegląd agencji", duration: "kilka dni", body: "Rozmawiamy z właścicielem, agentem i osobą od rozliczeń, przeglądamy narzędzia i dane o polisach, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy i informacja o używanych narzędziach." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ, szablony i zasady: co robi system, co robi AI, a co zawsze robi agent.", fromYou: "Akceptacja projektu i przykładowe dokumenty." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie obok waszych systemów i testujemy je na wybranych klientach lub towarzystwach.", fromYou: "Osoba, która ocenia wyniki testów." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie dla całego zespołu, szkolimy i pilnujemy działania. Kolejne obszary dokładamy, gdy pierwszy działa.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla agencji, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. odnowień", "Połączenie z CRM", "Szkolenie zespołu"] },
      { name: "Cała agencja", description: "Dla agencji, które chcą uporządkować pracę od zapytania do prowizji.", includes: ["Kilka połączonych procesów: zapytania, odnowienia, dokumenty, prowizje", "Baza polis z wielu towarzystw", "Asystent AI dla agentów", "Raporty dla właściciela", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla agencji, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. porządkowania zapytań", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "liczba towarzystw i format danych, które od nich dostajecie,",
      "liczba agentów i klientów,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w pośrednictwie ubezpieczeniowym",
    items: [
      { risk: "Automatyczna wiadomość zostanie odebrana jako rekomendacja.", mitigation: "Wiadomości automatyczne dotyczą terminów i dokumentów. Rekomendację zawsze przygotowuje agent." },
      { risk: "Odnowienie umknie, bo polisa nie trafiła do bazy.", mitigation: "Porównanie bazy z zestawieniami prowizji pokazuje polisy, których brakuje." },
      { risk: "Dane o zdrowiu trafią tam, gdzie nie powinny.", mitigation: "Takie dane nie trafiają do AI ani do automatycznych wiadomości, a dostęp do nich jest ograniczony." },
      { risk: "Towarzystwo zmieni format zestawienia prowizji.", mitigation: "Monitoring importu, a zmiany formatów obejmuje opieka." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja zastąpi agenta ubezpieczeniowego?", answer: "Nie. Automatyzujemy przepisywanie danych, przypomnienia, dokumenty i rozliczenia. Rozpoznanie potrzeb klienta, rekomendacja i rozmowa zostają przy agencie." },
    { question: "Czy łączycie się z systemami towarzystw?", answer: "Tam, gdzie towarzystwo udostępnia dane w formie, z której można korzystać, np. zestawienia, pliki lub API. Kalkulatorów towarzystw nie obsługujemy automatycznie bez ich zgody. Zakres sprawdzamy przy przeglądzie." },
    { question: "Czy musimy zmieniać system agencyjny lub CRM?", answer: "Zwykle nie. Łączymy się z narzędziami, których używacie, jeśli mają API lub import i eksport danych. Brakujące elementy budujemy obok nich." },
    { question: "Czy pracujecie z brokerami?", answer: "Tak. U brokerów częściej automatyzujemy obsługę klientów firmowych, dokumenty i raporty, ale zasady są podobne." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od odnowień polis, bo dają szybki i mierzalny efekt. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni. Wdrożenia obejmujące kilka obszarów prowadzimy etapami." },
    { question: "Czy automatyzacja pomoże w dokumentacji wymaganej przy dystrybucji ubezpieczeń?", answer: "Pomaga ją przygotować i przechowywać: szablony, terminy, archiwum przy kliencie. Treść dokumentów i zgodność z przepisami pozostają w gestii agencji." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "ai-w-obsludze-dokumentow", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "ofertowanie", "obieg-umow", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["n8n", "pipedrive", "microsoft-365", "chatgpt"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-ubezpieczeniowej", "odnowienia-polis-jak-nie-tracic-klientow", "porownanie-ofert-ubezpieczen-dla-klienta"],
};
