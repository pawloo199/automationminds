import type { IndustryPageContent } from "../types";

export const kancelarieObslugaKlienta: IndustryPageContent = {
  industrySlug: "kancelarie-prawne",
  subSlug: "obsluga-klienta",
  name: "Obsługa klienta kancelarii",
  excerpt: "Zapytania, konflikt interesów, konsultacje i przyjęcie klienta bez przepisywania danych.",
  metaTitle: "Obsługa klienta w kancelarii: automatyzacja od zapytania",
  metaDescription:
    "Automatyzujemy obsługę klientów kancelarii: zapytania, kwalifikacja sprawy, sprawdzenie konfliktu interesów, umawianie konsultacji, umowa i pełnomocnictwo.",
  primaryKeyword: "obsługa klienta kancelarii",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Kancelarie prawne: obsługa klienta",
    title: "Obsługa klienta w kancelarii: od pierwszego zapytania do podpisanej umowy",
    lead: "Potencjalny klient często wybiera kancelarię, która odpowie pierwsza. Automatyzujemy drogę od zapytania do rozpoczęcia sprawy: zapis zapytania, wstępną kwalifikację, sprawdzenie konfliktu interesów, umówienie konsultacji, umowę i pełnomocnictwo. Prawnik zajmuje się rozmową z klientem, a nie administracją.",
    bullets: [
      "Szybka odpowiedź na każde zapytanie",
      "Sprawdzenie konfliktu interesów przed rozmową",
      "Umowa i pełnomocnictwo z danych klienta",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Kancelarie, które dostają zapytania przez stronę, mail i telefon" },
    { label: "Co automatyzujemy", value: "Zapytania, kwalifikację, konflikt interesów, konsultacje, dokumenty startowe" },
    { label: "Narzędzia", value: "Formularz, kalendarz, baza klientów lub CRM, Microsoft 365" },
    { label: "Zasada", value: "Decyzję o przyjęciu sprawy zawsze podejmuje prawnik" },
  ],
  symptoms: {
    title: "Kiedy obsługę klienta warto zautomatyzować",
    lead: "Jeśli rozpoznajecie u siebie te sytuacje, część zapytań prawdopodobnie trafia do innych kancelarii.",
    items: [
      "Zapytania czekają na odpowiedź do końca rozprawy lub spotkania.",
      "Ustalanie terminu konsultacji to kilka maili lub telefonów.",
      "Konflikt interesów sprawdza się ręcznie, a czasem dopiero po pierwszej rozmowie.",
      "Dane klienta przepisuje się do umowy, pełnomocnictwa i systemu.",
      "Nie wiadomo, ile zapytań przychodzi i ile z nich zamienia się w sprawy.",
      "Klient po konsultacji długo czeka na umowę i informację o kolejnych krokach.",
    ],
  },
  intro: {
    title: "Jak wygląda zautomatyzowana obsługa klienta",
    paragraphs: [
      "Zapytanie z formularza, maila lub od recepcji trafia do jednej bazy razem z danymi stron. System od razu potwierdza klientowi przyjęcie zapytania i proponuje terminy konsultacji z kalendarza właściwego prawnika.",
      "Zanim dojdzie do rozmowy, system porównuje dane stron z bazą klientów i spraw kancelarii i oznacza możliwy konflikt interesów. Ostateczną ocenę zawsze robi prawnik, ale ma potrzebne informacje przed spotkaniem, a nie po nim.",
      "Po konsultacji, gdy kancelaria przyjmuje sprawę, z tych samych danych powstaje umowa z klientem, pełnomocnictwo i sprawa w systemie. Klient dostaje dokumenty do podpisu i informację o kolejnych krokach.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w obsłudze klienta",
    lead: "Zakres dopasowujemy do tego, jak kancelaria pozyskuje klientów i jakich narzędzi używa.",
    items: [
      { title: "Zbieranie zapytań", body: "Formularz, mail i wpisy recepcji w jednej bazie, z danymi stron i opisem sprawy." },
      { title: "Wstępna kwalifikacja", body: "AI porządkuje opis sprawy i proponuje dziedzinę prawa oraz prawnika do konsultacji." },
      { title: "Konflikt interesów", body: "Porównanie stron z bazą klientów i spraw, z wynikiem do oceny prawnika." },
      { title: "Umawianie konsultacji", body: "Wolne terminy z kalendarzy prawników, potwierdzenia i przypomnienia dla klienta." },
      { title: "Umowa i pełnomocnictwo", body: "Dokumenty startowe wypełniane danymi klienta i sprawy, gotowe do podpisu." },
      { title: "Założenie sprawy", body: "Sprawa w systemie, foldery i zespół tworzone po przyjęciu sprawy." },
      { title: "Informacja dla klienta", body: "Wiadomość powitalna z kolejnymi krokami i danymi kontaktowymi zespołu." },
      { title: "Raport zapytań", body: "Liczba zapytań według źródeł i dziedzin oraz to, ile z nich zamienia się w sprawy." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapytania do pierwszych dokumentów w sprawie.",
    items: [
      {
        title: "Zapytanie ze strony",
        trigger: "Formularz kontaktowy kancelarii",
        steps: ["Zapis zapytania i danych stron", "Sprawdzenie konfliktu interesów", "Propozycja terminów konsultacji dla klienta"],
        result: "Klient dostaje odpowiedź od razu, a prawnik ma komplet informacji przed rozmową.",
      },
      {
        title: "Przyjęcie sprawy",
        trigger: "Prawnik oznacza sprawę jako przyjętą po konsultacji",
        steps: ["Umowa i pełnomocnictwo z danych klienta", "Wysyłka dokumentów do podpisu", "Założenie sprawy i folderów"],
        result: "Sprawa startuje tego samego dnia, bez przepisywania danych.",
      },
    ],
  },
  example: {
    title: "Obsługa klienta przed i po automatyzacji",
    lead: "Przykład kancelarii adwokackiej prowadzącej sprawy rodzinne i cywilne, z kilkoma adwokatami.",
    rows: [
      { label: "Zapytanie", before: "Mail czeka, aż adwokat wróci z sądu.", after: "Potwierdzenie i propozycja terminów od razu." },
      { label: "Konflikt interesów", before: "Sprawdzany ręcznie, czasem po rozmowie.", after: "Wynik sprawdzenia przed konsultacją." },
      { label: "Dokumenty", before: "Umowa i pełnomocnictwo pisane od zera.", after: "Dokumenty z danych klienta gotowe do podpisu." },
      { label: "Wiedza o klientach", before: "Brak danych o źródłach zapytań.", after: "Raport zapytań i przyjętych spraw." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej kancelarii.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, skąd przychodzą zapytania, jak przydzielacie sprawy i jak sprawdzacie konflikt interesów.", fromYou: "Rozmowa z partnerem i osobą z sekretariatu." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularz, zasady przydziału, sprawdzanie konfliktu i wzory dokumentów startowych.", fromYou: "Wzory umowy i pełnomocnictwa oraz zasady przydziału spraw." },
      { title: "Budowa i testy", duration: "zwykle 2–3 tygodnie", body: "Łączymy formularz, kalendarze, bazę klientów i dokumenty. Testujemy na przykładowych zapytaniach.", fromYou: "Dostęp do kalendarzy i bazy klientów." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy nową obsługę zapytań i dopracowujemy ją w pierwszych tygodniach.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od samych zapytań i konsultacji.",
    items: [
      { name: "Zapytania i konsultacje", description: "Dla kancelarii, które chcą szybciej odpowiadać klientom.", includes: ["Jedna baza zapytań", "Potwierdzenie dla klienta", "Umawianie konsultacji z kalendarza", "Przypomnienia o spotkaniu"] },
      { name: "Pełne przyjęcie klienta", description: "Dla kancelarii, które chcą uporządkować całą drogę klienta.", includes: ["Wszystko z wariantu Zapytania i konsultacje", "Sprawdzanie konfliktu interesów", "Umowa i pełnomocnictwo z danych klienta", "Założenie sprawy w systemie", "Raport zapytań"] },
      { name: "Z asystentem AI", description: "Dla kancelarii z dużą liczbą zapytań.", includes: ["Wszystko z wariantu Pełne przyjęcie klienta", "AI porządkuje opis sprawy", "Propozycja dziedziny i prawnika", "Odpowiedzi na pytania organizacyjne klientów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba kanałów, z których przychodzą zapytania,",
      "sposób przechowywania danych klientów i spraw, od którego zależy sprawdzanie konfliktu,",
      "liczba wzorów dokumentów startowych,",
      "integracja z systemem kancelaryjnym i kalendarzami,",
      "użycie AI do kwalifikacji zapytań.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "System przeoczy konflikt interesów.", mitigation: "Sprawdzenie uwzględnia warianty nazw i NIP, a wynik zawsze ocenia prawnik. System wspiera, ale nie zastępuje procedury kancelarii." },
      { risk: "Automatyczna odpowiedź zostanie odebrana jako porada.", mitigation: "Automatyczne wiadomości dotyczą tylko organizacji: potwierdzenia, terminy, dokumenty. Porad udziela wyłącznie prawnik." },
      { risk: "Dane z zapytań trafią do zbyt wielu osób.", mitigation: "Dostęp do zapytań mają tylko wskazane osoby, a dane osób, które nie zostały klientami, są usuwane według ustalonych zasad." },
      { risk: "Wybrane sprawy wymagają dodatkowej weryfikacji klienta.", mitigation: "Jeśli kancelaria ma takie obowiązki przy niektórych czynnościach, proces zbiera wymagane informacje i przekazuje je do oceny osobie odpowiedzialnej." },
    ],
  },
  faq: [
    { question: "Czy chatbot może odpowiadać klientom kancelarii?", answer: "Tak, w sprawach organizacyjnych: godziny, terminy konsultacji, potrzebne dokumenty. Nie udziela porad prawnych. Każde pytanie merytoryczne trafia do prawnika." },
    { question: "Jak działa automatyczne sprawdzanie konfliktu interesów?", answer: "System porównuje dane stron z bazą klientów i spraw kancelarii, z uwzględnieniem wariantów nazw i numerów identyfikacyjnych, i pokazuje możliwe kolizje. Ocenę zawsze robi prawnik." },
    { question: "Czy klient może podpisać umowę elektronicznie?", answer: "Tak. Dokumenty startowe mogą trafić do podpisu elektronicznego. Rodzaj podpisu dobieramy do wymagań dokumentu, a przy pełnomocnictwach uwzględniamy wymogi formy." },
    { question: "Czy to działa z naszym kalendarzem?", answer: "Tak. Pracujemy z kalendarzami Microsoft 365 i Google oraz z popularnymi narzędziami do rezerwacji spotkań." },
    { question: "Czy potrzebujemy CRM?", answer: "Niekoniecznie. Wystarczy baza klientów i spraw, którą już macie, albo prosta baza, którą przygotujemy. CRM ma sens przy dużej liczbie zapytań." },
  ],
  relatedServiceSlugs: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "umawianie-wizyt", "obieg-umow"],
  relatedToolSlugs: ["microsoft-365", "google-workspace", "n8n"],
  relatedArticleSlugs: ["automatyzacja-obslugi-leadow-sprzedazowych", "rodo-a-automatyzacja-procesow", "5-procesow-do-automatyzacji-w-malej-firmie"],
};
