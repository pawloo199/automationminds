import type { IndustryPageContent } from "../types";

export const kancelariePrawne: IndustryPageContent = {
  industrySlug: "kancelarie-prawne",
  name: "Kancelarie prawne",
  excerpt: "Automatyzacja pracy kancelarii adwokackich i radcowskich: klienci, sprawy, terminy, pisma i rozliczenia.",
  metaTitle: "Automatyzacja kancelarii prawnej: klienci, sprawy, terminy",
  metaDescription:
    "Automatyzujemy pracę kancelarii prawnych: obsługa klientów, sprawy, terminy, pisma, umowy, rozliczenia i AI na wiedzy kancelarii. Z dbałością o tajemnicę zawodową.",
  primaryKeyword: "automatyzacja kancelarii prawnej",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Branża: kancelarie prawne",
    title: "Automatyzacja kancelarii prawnej: mniej administracji, więcej pracy prawniczej",
    lead: "Pomagamy kancelariom adwokackim i radcowskim zautomatyzować to, co odciąga prawników od spraw: przyjmowanie klientów, zakładanie spraw, pilnowanie terminów, przygotowanie pism, rozliczenia i szukanie wiedzy we własnych dokumentach. Z AI tam, gdzie pomaga, i z pełnym szacunkiem dla tajemnicy zawodowej.",
    bullets: [
      "Obsługa klientów, spraw i terminów bez przepisywania",
      "AI do dokumentów i wiedzy kancelarii",
      "Dane na serwerze w UE lub w infrastrukturze kancelarii",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Kancelarie adwokackie, radcowskie i wielospecjalistyczne, od kilku do kilkudziesięciu osób" },
    { label: "Co automatyzujemy", value: "Klienci, sprawy, terminy, pisma, dokumenty, rozliczenia, wiedza" },
    { label: "Jak", value: "Na narzędziach, których już używacie, z AI tam, gdzie ma sens" },
    { label: "Bezpieczeństwo", value: "Dane w UE, uprawnienia do spraw, prawnik zawsze decyduje" },
  ],
  symptoms: {
    title: "Po czym poznać, że kancelaria potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy administracyjnej da się przenieść na system.",
    items: [
      "Dane klienta i sprawy przepisuje się kilka razy: do systemu, do pełnomocnictwa, do umowy, do faktury.",
      "Terminy pilnuje się w kalendarzach poszczególnych osób, a ich bezpieczeństwo zależy od pamięci i dyscypliny.",
      "Zapytania od nowych klientów czekają na odpowiedź, bo wszyscy są w sądzie lub na spotkaniach.",
      "Szukanie wcześniejszych pism, opinii i wzorów zajmuje więcej czasu niż ich dopasowanie.",
      "Na koniec miesiąca ktoś ręcznie składa zestawienia godzin dla klientów i przygotowuje faktury.",
      "Dokumenty sprawy są rozproszone między skrzynkami, dyskiem i systemem kancelaryjnym.",
    ],
  },
  intro: {
    title: "Automatyzacja w kancelarii: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Kancelaria to firma oparta na wiedzy i dokumentach. Prawnicy są w niej najdroższym zasobem, a jednocześnie spora część ich dnia to praca, która nie wymaga wiedzy prawniczej: przepisywanie danych, szukanie plików, pilnowanie kalendarza, składanie zestawień. To właśnie tę pracę automatyzujemy.",
      "Automatyzacja nie zastępuje prawnika i nie podejmuje za niego decyzji. System przygotowuje dane, projekty dokumentów i przypomnienia, a prawnik je sprawdza i zatwierdza. Dotyczy to szczególnie terminów i treści pism, za które odpowiedzialność zawsze ponosi pełnomocnik.",
      "Pracujemy na narzędziach, których kancelaria już używa: Microsoft 365 lub Google Workspace, systemie do zarządzania sprawami, programie do faktur. Brakujące połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze kancelarii, tak żeby dane klientów nie trafiały tam, gdzie nie powinny.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w kancelariach",
    lead: "Od pierwszego kontaktu klienta do rozliczenia sprawy. Zaczynamy od jednego obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Przyjmowanie klientów", body: "Formularz i kwalifikacja sprawy, sprawdzenie konfliktu interesów w bazie klientów, umówienie konsultacji." },
      { title: "Zakładanie sprawy", body: "Sprawa w systemie, foldery, zespół i dokumenty startowe tworzone z jednego wpisu." },
      { title: "Terminy i kalendarz", body: "Termin z pisma proponowany przez system, zatwierdzany przez prawnika, z przypomnieniami i zastępstwami." },
      { title: "Pisma z szablonów", body: "Pełnomocnictwa, umowy z klientem, wezwania i pisma powtarzalne wypełniane danymi sprawy." },
      { title: "Analiza dokumentów z AI", body: "Streszczenia akt, przegląd umów względem wzorca, wyciąganie dat i stron z pism." },
      { title: "Wiedza kancelarii", body: "Asystent AI, który odnajduje wcześniejsze pisma, opinie i wzory, z podaniem źródła." },
      { title: "Rozliczenia", body: "Czas pracy, zestawienia dla klientów, faktury i przypomnienia o płatnościach." },
      { title: "Raporty dla partnerów", body: "Sprawy w toku, obciążenie zespołu, przychody i należności bez składania arkuszy." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w kancelarii",
    lead: "Typowe przepływy, które budujemy w kancelariach. Kroki wymagające oceny prawnej zawsze zostają przy prawniku.",
    items: [
      {
        title: "Nowe zapytanie od klienta",
        trigger: "Formularz na stronie lub mail na adres kancelarii",
        steps: [
          "Zapis zapytania i danych stron w bazie",
          "Sprawdzenie konfliktu interesów w dotychczasowych sprawach",
          "Propozycja terminów konsultacji i potwierdzenie dla klienta",
        ],
        result: "Klient dostaje odpowiedź szybko, a prawnik wie o możliwym konflikcie przed rozmową.",
      },
      {
        title: "Pismo w sprawie",
        trigger: "Nowe pismo z sądu lub od strony przeciwnej",
        steps: [
          "Przypisanie pisma do sprawy po sygnaturze lub stronach",
          "AI streszcza pismo i proponuje termin na odpowiedź",
          "Prawnik zatwierdza termin, który trafia do kalendarza z przypomnieniami",
        ],
        result: "Żadne pismo nie czeka w skrzynce, a termin zawsze sprawdza człowiek.",
      },
      {
        title: "Rozliczenie miesiąca",
        trigger: "Koniec okresu rozliczeniowego",
        steps: [
          "Zebranie czasu pracy z systemu lub kalendarzy",
          "Zestawienie godzin dla każdego klienta do akceptacji partnera",
          "Faktura w programie księgowym i przypomnienia o płatności",
        ],
        result: "Zestawienia i faktury gotowe w dniu zamknięcia miesiąca, bez ręcznego liczenia.",
      },
    ],
  },
  security: {
    title: "Tajemnica zawodowa i bezpieczeństwo danych",
    lead: "W kancelarii bezpieczeństwo danych to warunek, a nie dodatek. Każde wdrożenie projektujemy z myślą o tajemnicy adwokackiej i radcowskiej.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze kancelarii, bez przesyłania danych do zewnętrznych usług automatyzacji." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane kancelarii nie służą do trenowania, i przesyłamy tylko to, co potrzebne do zadania." },
      { title: "Uprawnienia do spraw", body: "Dostęp do dokumentów i wiedzy zgodny z tym, kto pracuje przy danej sprawie." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Umowa powierzenia", body: "Przetwarzanie danych opieramy na umowie powierzenia i ustalonych zasadach przechowywania." },
      { title: "Prawnik decyduje", body: "System przygotowuje i przypomina. Treść pism, terminy i porady zawsze zatwierdza prawnik." },
    ],
  },
  example: {
    title: "Kancelaria przed i po automatyzacji",
    lead: "Przykład kancelarii radcowskiej z kilkunastoma osobami, prowadzącej sprawy gospodarcze i obsługę stałych klientów.",
    rows: [
      { label: "Nowy klient", before: "Zapytanie w skrzynce ogólnej, konflikt interesów sprawdzany ręcznie.", after: "Zapytanie w bazie, sprawdzenie konfliktu i propozycja konsultacji od razu." },
      { label: "Nowa sprawa", before: "Dane klienta przepisywane do kilku dokumentów i systemów.", after: "Sprawa, foldery i dokumenty startowe z jednego wpisu." },
      { label: "Pisma i terminy", before: "Terminy wpisywane ręcznie do kalendarzy.", after: "Termin proponowany przez system i zatwierdzany przez prawnika." },
      { label: "Wiedza", before: "Wcześniejsze pisma i opinie szukane po folderach i mailach.", after: "Asystent AI wskazuje podobne dokumenty z podaniem źródła." },
      { label: "Rozliczenia", before: "Zestawienia godzin składane ręcznie na koniec miesiąca.", after: "Zestawienia do akceptacji i faktury w dniu zamknięcia." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej kancelarii.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w kancelarii",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie odrywać prawników od spraw bardziej, niż to konieczne.",
    phases: [
      {
        title: "Przegląd kancelarii",
        duration: "kilka dni",
        body: "Rozmawiamy z partnerem i osobą z sekretariatu lub administracji, przeglądamy narzędzia i wybieramy obszar z największą stratą czasu.",
        fromYou: "Godzina rozmowy i informacja o używanych systemach.",
      },
      {
        title: "Projekt i zasady",
        duration: "około tygodnia",
        body: "Projektujemy przepływ, uprawnienia i zasady pracy z danymi, w tym to, co robi AI, a co zawsze zatwierdza prawnik.",
        fromYou: "Akceptacja projektu i zasad bezpieczeństwa.",
      },
      {
        title: "Budowa i testy",
        duration: "zwykle 2–4 tygodnie",
        body: "Budujemy rozwiązanie na waszych narzędziach i testujemy je na zanonimizowanych lub wybranych sprawach.",
        fromYou: "Osoba, która ocenia wyniki testów, i przykładowe dokumenty.",
      },
      {
        title: "Start i opieka",
        duration: "stale",
        body: "Uruchamiamy rozwiązanie, szkolimy zespół i pilnujemy działania. Kolejne obszary dokładamy, gdy pierwszy działa.",
        fromYou: "Krótkie szkolenie zespołu i uwagi w pierwszych tygodniach.",
      },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      {
        name: "Jeden proces",
        description: "Dla kancelarii, które chcą sprawdzić automatyzację na jednym obszarze.",
        includes: [
          "Przegląd i wybór procesu",
          "Automatyzacja jednego obszaru, np. przyjmowania klientów",
          "Zasady bezpieczeństwa i uprawnień",
          "Szkolenie zespołu",
        ],
      },
      {
        name: "Kancelaria",
        description: "Dla kancelarii, które chcą uporządkować pracę od klienta do rozliczenia.",
        includes: [
          "Kilka połączonych procesów: klienci, sprawy, terminy, rozliczenia",
          "AI do dokumentów i wiedzy kancelarii",
          "Integracja z systemem kancelaryjnym i programem do faktur",
          "Raporty dla partnerów",
          "Opieka po wdrożeniu",
        ],
      },
      {
        name: "Agenci w abonamencie",
        description: "Dla kancelarii, które nie chcą zajmować się technologią.",
        includes: [
          "Agenci AI do konkretnych zadań, np. obsługi zapytań lub dokumentów",
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
      "użycie AI i liczba dokumentów, które przetwarza,",
      "wymagania bezpieczeństwa, np. działanie wyłącznie w infrastrukturze kancelarii,",
      "liczba osób i zespołów, dla których ustawiamy uprawnienia,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w kancelariach",
    items: [
      { risk: "Błędnie wyliczony termin procesowy.", mitigation: "System tylko proponuje termin. Każdy termin zatwierdza prawnik, a przypomnienia trafiają także do osoby zastępującej." },
      { risk: "AI poda nieprawdziwą informację.", mitigation: "Odpowiedzi asystenta opierają się na dokumentach kancelarii i wskazują źródło. Wyniki AI są materiałem roboczym do sprawdzenia, nie poradą." },
      { risk: "Dostęp do dokumentów spraw osób spoza zespołu.", mitigation: "Uprawnienia odwzorowują zespoły spraw, a dostęp do wiedzy kancelarii jest filtrowany według tych uprawnień." },
      { risk: "Zespół nie przyjmie nowego sposobu pracy.", mitigation: "Zaczynamy od obszaru, który najbardziej przeszkadza prawnikom, i budujemy na narzędziach, których już używają." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja i AI zastąpią prawnika?", answer: "Nie. Automatyzujemy pracę administracyjną i przygotowawczą: dane, dokumenty, przypomnienia, wyszukiwanie. Ocena prawna, treść pism i decyzje zawsze należą do prawnika." },
    { question: "Czy to jest zgodne z tajemnicą adwokacką i radcowską?", answer: "Projektujemy wdrożenia tak, żeby dane klientów były chronione: działanie na serwerze w UE lub w infrastrukturze kancelarii, modele AI bez trenowania na danych, uprawnienia do spraw i umowa powierzenia. Zasady korzystania z AI warto dodatkowo opisać w wewnętrznych procedurach kancelarii." },
    { question: "Czy pracujecie z kancelariami adwokackimi i radcowskimi?", answer: "Tak. Pracujemy z kancelariami adwokackimi, radcowskimi i wielospecjalistycznymi. Procesy są w nich podobne, a różnice uwzględniamy przy projektowaniu." },
    { question: "Czy musimy zmieniać system do zarządzania kancelarią?", answer: "Zwykle nie. Łączymy się z systemem, którego używacie, jeśli ma API lub możliwość importu i eksportu. Brakujące elementy budujemy obok niego." },
    { question: "Od czego najlepiej zacząć?", answer: "Od obszaru, który najbardziej odciąga prawników od pracy merytorycznej. Najczęściej to przyjmowanie klientów, terminy albo rozliczenia. Wskażemy go na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni. Wdrożenia obejmujące kilka obszarów i AI na wiedzy kancelarii trwają dłużej i prowadzimy je etapami." },
    { question: "Czy pracujecie z kancelariami notarialnymi i komorniczymi?", answer: "Tak, choć ich procesy różnią się od kancelarii adwokackich i radcowskich. Zakres ustalamy indywidualnie po rozmowie." },
  ],
  relatedServiceSlugs: ["asystent-ai-na-firmowej-wiedzy", "ai-w-obsludze-dokumentow", "automatyzacja-dla-firm-uslugowych", "szkolenia-ai-dla-zespolow"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "obieg-umow", "umawianie-wizyt", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["n8n", "microsoft-365", "claude", "chatgpt"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-kancelarii", "ai-w-kancelarii-prawnej", "rodo-a-automatyzacja-procesow"],
};
