import type { IndustryPageContent } from "../types";

export const sklepyInternetowe: IndustryPageContent = {
  industrySlug: "sklepy-internetowe",
  name: "Sklepy internetowe",
  excerpt: "Automatyzacja pracy sklepów internetowych: obsługa klienta, zwroty i reklamacje, opisy produktów, oferty i stany w wielu kanałach, zakupy u dostawców i raporty marży.",
  metaTitle: "Automatyzacja sklepu internetowego i sprzedaży online",
  metaDescription:
    "Automatyzujemy pracę sklepów internetowych: obsługa klienta, zwroty, opisy produktów z AI, oferty i stany w wielu kanałach, zakupy u dostawców i marża.",
  primaryKeyword: "automatyzacja sklepu internetowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: sklepy internetowe",
    title: "Automatyzacja sklepu internetowego: zespół przy rozwoju, nie przy kopiowaniu",
    lead: "Sklep internetowy rośnie szybciej niż zespół. Każdy nowy kanał sprzedaży, nowy dostawca i nowa kategoria produktów oznaczają więcej pytań klientów, więcej zwrotów, więcej opisów do napisania i więcej stanów do pilnowania. Pomagamy sklepom zautomatyzować tę pracę na platformach i narzędziach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Pytania o zamówienia i zwroty obsłużone bez kopiowania",
      "Opisy i dane produktów przygotowane z AI",
      "Oferty, stany i marża pod kontrolą we wszystkich kanałach",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Sklepy internetowe, marki sprzedające online i sprzedawcy na marketplace" },
    { label: "Co automatyzujemy", value: "Obsługa klienta, zwroty, produkty, oferty, zakupy, raporty" },
    { label: "Jak", value: "Obok platformy sklepu i narzędzi, których używacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przygotowuje, zespół sklepu decyduje" },
  ],
  symptoms: {
    title: "Po czym poznać, że sklep potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy zespołu da się przenieść na system.",
    items: [
      "Większość wiadomości od klientów to pytania o status zamówienia i zwroty.",
      "Zwroty i reklamacje obsługuje się mailowo, bez wspólnego rejestru.",
      "Opisy nowych produktów powstają tygodniami albo są kopiowane od producenta.",
      "Stany i ceny w różnych kanałach sprzedaży nie zgadzają się ze sobą.",
      "Zamówienia do dostawców składa się, gdy towaru już brakuje.",
      "Nie wiadomo, na których produktach i kanałach sklep zarabia po wszystkich kosztach.",
    ],
  },
  intro: {
    title: "Automatyzacja w e-commerce: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Sklep internetowy to sprzedaż, obsługa klienta, zarządzanie produktami i logistyka w jednym. Zespół odpowiada na wiadomości, przyjmuje zwroty, dodaje produkty, pilnuje stanów i cen w kilku kanałach, zamawia towar i liczy wyniki. Spora część tej pracy to kopiowanie danych między platformą sklepu, marketplace, programem magazynowym, pocztą i arkuszami. To właśnie tę pracę automatyzujemy.",
      "Automatyzacja nie zastępuje zespołu. Decyzje o doborze produktów, cenach, promocjach, trudnych reklamacjach i relacjach z dostawcami zostają przy ludziach. System odpowiada na typowe pytania, prowadzi zwroty, przygotowuje dane i opisy produktów, synchronizuje oferty i stany, podpowiada zamówienia i liczy marżę. AI pomaga przy opisach, tłumaczeniach, odpowiedziach dla klientów i kategoryzacji zgłoszeń.",
      "Nie wymieniamy platformy sklepu ani programów, które działają. Budujemy obok nich to, czego brakuje: połączenia między kanałami, rejestr zwrotów, asystenta dla klientów, raporty. Wysyłki i etykiety opisujemy osobno w usłudze automatyzacji logistyki. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze sklepu.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w sklepach internetowych",
    lead: "Od pytania klienta do raportu marży. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Obsługa klienta", body: "Odpowiedzi o status zamówienia, dostawę i zwroty, z danymi z platformy." },
      { title: "Zwroty i reklamacje", body: "Formularz, rejestr, decyzja, zwrot pieniędzy i informacja dla klienta." },
      { title: "Opisy i dane produktów", body: "Opisy, atrybuty i tłumaczenia przygotowane z AI, do sprawdzenia." },
      { title: "Oferty i stany", body: "Ceny i stany zsynchronizowane między sklepem a marketplace." },
      { title: "Zakupy u dostawców", body: "Podpowiedzi zamówień na podstawie sprzedaży i stanów." },
      { title: "Raporty i marża", body: "Marża po prowizjach, reklamach, wysyłkach i zwrotach." },
      { title: "Opinie klientów", body: "Prośby o opinię i zestawienie uwag klientów." },
      { title: "Faktury i KSeF", body: "Faktury dla firm i korekty przy zwrotach bez ręcznej pracy." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w sklepie internetowym",
    lead: "Typowe przepływy, które budujemy w sklepach. Decyzje zostają przy zespole.",
    items: [
      {
        title: "Pytanie o zamówienie",
        trigger: "Klient pisze, gdzie jest jego paczka",
        steps: ["Rozpoznanie zamówienia z treści i adresu nadawcy", "Odpowiedź ze statusem i numerem przesyłki", "Przekazanie do zespołu, jeśli przesyłka ma problem"],
        result: "Klient dostaje odpowiedź od razu, a zespół zajmuje się wyjątkami.",
      },
      {
        title: "Zwrot",
        trigger: "Klient zgłasza zwrot przez formularz",
        steps: ["Sprawdzenie terminu i warunków zwrotu", "Instrukcja i etykieta dla klienta", "Po przyjęciu towaru zwrot pieniędzy do akceptacji i korekta"],
        result: "Zwrot bez wymiany kilku maili, a pieniądze wracają do klienta szybciej.",
      },
      {
        title: "Nowy produkt",
        trigger: "Dostawca przysyła plik z nowymi produktami",
        steps: ["Import danych i zdjęć", "Szkic opisu i atrybutów z AI według wytycznych sklepu", "Sprawdzenie przez zespół i publikacja w kanałach"],
        result: "Produkty w sprzedaży w dni, a nie tygodnie.",
      },
    ],
  },
  security: {
    title: "Dane klientów sklepu",
    lead: "Sklep to dane osobowe klientów, adresy, historia zakupów i płatności. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze sklepu." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Płatności poza AI", body: "Dane kart i płatności nie trafiają do automatyzacji ani do AI." },
      { title: "Uprawnienia", body: "Obsługa klienta widzi zamówienia, zakupy dostawców, właściciel całość." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Ludzie decydują", body: "Zwroty pieniędzy, trudne reklamacje i ceny zatwierdza człowiek." },
    ],
  },
  example: {
    title: "Sklep internetowy przed i po automatyzacji",
    lead: "Przykład sklepu sprzedającego we własnym sklepie i na dwóch marketplace.",
    rows: [
      { label: "Wiadomości", before: "Ręczne odpowiedzi o status.", after: "Odpowiedzi z danymi zamówienia." },
      { label: "Zwroty", before: "Maile i arkusz.", after: "Formularz i rejestr." },
      { label: "Produkty", before: "Opisy pisane tygodniami.", after: "Szkic z AI do sprawdzenia." },
      { label: "Stany", before: "Rozjeżdżają się między kanałami.", after: "Synchronizacja." },
      { label: "Marża", before: "Szacowana.", after: "Raport po wszystkich kosztach." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym sklepie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w sklepie",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie przerywać sprzedaży.",
    phases: [
      { title: "Przegląd sklepu", duration: "kilka dni", body: "Rozmawiamy z właścicielem i zespołem, przeglądamy platformę, kanały i narzędzia, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy i dostęp do paneli w trybie podglądu." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ i zasady: co robi system, co robi AI, a co zawsze robi człowiek.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie i testujemy je na części zamówień lub produktów.", fromYou: "Osoba oceniająca wyniki testów." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie dla całego sklepu i pilnujemy działania, także w sezonie.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla sklepów, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. zwrotów", "Połączenie z platformą sklepu", "Szkolenie zespołu"] },
      { name: "Cały sklep", description: "Dla sklepów, które chcą uporządkować pracę od pytania klienta do raportu.", includes: ["Kilka połączonych procesów: obsługa klienta, zwroty, produkty, oferty, zakupy", "Opisy produktów z AI", "Integracja z platformą, marketplace i programem do faktur", "Raporty marży", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla sklepów, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. odpowiedzi klientom", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i kanałów sprzedaży,",
      "możliwości integracji platformy i marketplace,",
      "liczba zamówień, produktów i wiadomości,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w sklepach internetowych",
    items: [
      { risk: "Automatyczna odpowiedź poda klientowi błędną informację.", mitigation: "Odpowiedzi korzystają z danych zamówienia, a sprawy nietypowe trafiają do zespołu." },
      { risk: "Opis produktu z AI będzie zawierał błędne parametry.", mitigation: "Opis powstaje z danych produktu i jest sprawdzany przed publikacją." },
      { risk: "Stany rozjadą się przy awarii połączenia.", mitigation: "Monitoring synchronizacji i powiadomienia o błędach." },
      { risk: "Sezon przeciąży automatyzacje.", mitigation: "Testujemy przepływy przy większej liczbie zamówień przed sezonem." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja zastąpi obsługę klienta?", answer: "Nie. Przejmuje typowe pytania o status i zwroty. Reklamacje, sprawy nietypowe i trudne rozmowy zostają przy zespole." },
    { question: "Z jakimi platformami sklepów pracujecie?", answer: "Z platformami, które udostępniają dane przez API lub eksport. Zakres sprawdzamy przy przeglądzie." },
    { question: "Czy łączycie się z marketplace?", answer: "Tak, z tymi, które udostępniają API dla sprzedawców, albo przez narzędzia do obsługi wielu kanałów, z których korzystacie." },
    { question: "Czy obsługujecie wysyłki i etykiety?", answer: "Tak, opisujemy je w usłudze automatyzacji logistyki. Na tej stronie skupiamy się na pozostałej pracy sklepu." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od obsługi pytań o zamówienia albo zwrotów, bo dają szybki efekt. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni. Przed sezonem warto zacząć odpowiednio wcześniej." },
    { question: "Czy pracujecie z małymi sklepami?", answer: "Tak. W mniejszych sklepach zaczynamy zwykle od jednego procesu, który zabiera właścicielowi najwięcej czasu." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-logistyki", "automatyzacja-marketingu", "integracje-systemow"],
  relatedProcessSlugs: ["przyjmowanie-zamowien", "obsluga-reklamacji", "obsluga-zapytan-i-leadow", "raporty-finansowe"],
  relatedToolSlugs: ["n8n", "make", "google-workspace", "chatgpt"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-sklepie-internetowym", "marza-w-sklepie-internetowym", "dane-produktowe-w-sklepie"],
};
