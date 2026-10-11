import type { IndustryPageContent } from "../types";

export const biuraKsef: IndustryPageContent = {
  industrySlug: "biura-rachunkowe",
  subSlug: "ksef",
  name: "KSeF w biurze rachunkowym",
  excerpt: "Faktury klientów pobierane z KSeF automatycznie, połączone z innymi dokumentami i gotowe do pracy księgowego.",
  metaTitle: "KSeF w biurze rachunkowym: automatyczne pobieranie faktur",
  metaDescription:
    "Automatyzujemy pracę biura rachunkowego z KSeF: pobieranie faktur klientów, łączenie z dokumentami z innych źródeł, kontrola uprawnień i statusy klientów.",
  primaryKeyword: "KSeF w biurze rachunkowym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura rachunkowe: KSeF",
    title: "KSeF w biurze rachunkowym: faktury klientów bez ręcznego pobierania",
    lead: "KSeF zmienił sposób, w jaki faktury trafiają do biura. Dokumenty są w jednym systemie, ale trzeba je pobrać dla każdego klienta, połączyć z dokumentami spoza KSeF i pilnować uprawnień. Automatyzujemy tę pracę: faktury klientów pobierają się same, trafiają do właściwego miejsca i są gotowe do księgowania razem z resztą dokumentów.",
    bullets: [
      "Automatyczne pobieranie faktur dla wielu klientów",
      "Jedno zestawienie dokumentów z KSeF i spoza niego",
      "Kontrola uprawnień i statusów klientów",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura rachunkowe pracujące z KSeF w imieniu wielu klientów" },
    { label: "Co automatyzujemy", value: "Pobieranie faktur, łączenie dokumentów, kontrola uprawnień, statusy" },
    { label: "Narzędzia", value: "KSeF, n8n, program księgowy, magazyn dokumentów biura" },
    { label: "Zasada", value: "Dostęp tylko na podstawie uprawnień nadanych przez klienta" },
  ],
  symptoms: {
    title: "Kiedy pracę z KSeF warto zautomatyzować",
    lead: "Jeśli te sytuacje dotyczą biura, KSeF zamiast oszczędzać czas, dodał nową listę czynności.",
    items: [
      "Faktury z KSeF pobiera się ręcznie, klient po kliencie.",
      "Program księgowy pobiera faktury, ale nie dla wszystkich klientów albo nie w potrzebnym zakresie.",
      "Faktury z KSeF i dokumenty spoza KSeF są w dwóch różnych miejscach.",
      "Nie wiadomo, którzy klienci nadali biuru uprawnienia, a którym wygasły.",
      "Klienci pytają, czy biuro widzi już ich faktury, a sprawdzenie zajmuje czas.",
      "Faktury sprzedażowe klientów trzeba porównywać z tym, co klient przekazał sam.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja pracy z KSeF",
    paragraphs: [
      "Biuro pracuje w KSeF na podstawie uprawnień nadanych przez klientów. Na tej podstawie automatyzacja regularnie pobiera faktury zakupowe i sprzedażowe każdego klienta, zapisuje je w jego folderze i dopisuje do zestawienia dokumentów za dany miesiąc. Zespół nie musi logować się do KSeF dla każdego klienta osobno.",
      "Faktury z KSeF trafiają do tego samego miejsca co dokumenty spoza systemu: paragony, faktury zagraniczne i rachunki. Dzięki temu księgowy widzi pełny obraz klienta w jednym zestawieniu, a system może wskazać np. fakturę przesłaną przez klienta mailem, która jest już w KSeF.",
      "Automatyzacja pilnuje też organizacji: listy klientów z aktywnymi uprawnieniami, informacji o problemach z pobieraniem i statusu dokumentów klienta w danym miesiącu. Jeśli program księgowy biura sam pobiera faktury z KSeF, nie dublujemy tego, tylko uzupełniamy to, czego brakuje.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja KSeF w biurze",
    lead: "Zakres ustalamy po sprawdzeniu, co już robi wasz program księgowy.",
    items: [
      { title: "Pobieranie faktur", body: "Regularne pobieranie faktur zakupowych i sprzedażowych klientów." },
      { title: "Porządek w plikach", body: "Faktury w folderze klienta i miesiąca, w formacie XML i czytelnym podglądzie." },
      { title: "Jedno zestawienie", body: "Dokumenty z KSeF i spoza KSeF w jednym zestawieniu klienta." },
      { title: "Wykrywanie duplikatów", body: "Oznaczanie faktur przesłanych przez klienta, które są już w KSeF." },
      { title: "Lista uprawnień", body: "Którzy klienci nadali biuru uprawnienia i gdzie występują problemy z dostępem." },
      { title: "Informacje o błędach", body: "Powiadomienie zespołu, gdy pobieranie dla klienta się nie powiodło." },
      { title: "Przekazanie do programu", body: "Dane faktur do programu księgowego, jeśli program nie pobiera ich sam." },
      { title: "Odpowiedzi dla klientów", body: "Informacja dla klienta, jakie faktury biuro widzi za dany miesiąc." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od faktury w KSeF do kompletu dokumentów klienta.",
    items: [
      {
        title: "Codzienne pobieranie",
        trigger: "Harmonogram, np. co noc",
        steps: ["Pobranie nowych faktur dla każdego klienta z aktywnymi uprawnieniami", "Zapis w folderze klienta i dopisanie do zestawienia", "Lista problemów z pobieraniem dla zespołu"],
        result: "Rano zespół ma aktualne faktury wszystkich klientów bez logowania się do KSeF.",
      },
      {
        title: "Faktura przesłana dwa razy",
        trigger: "Klient wysyła mailem fakturę, która jest już w KSeF",
        steps: ["Porównanie numeru, NIP i kwot z fakturami z KSeF", "Oznaczenie dokumentu jako duplikat", "Pominięcie go przy odczycie i księgowaniu"],
        result: "Ta sama faktura nie trafia do ksiąg dwa razy.",
      },
    ],
  },
  example: {
    title: "Praca z KSeF przed i po automatyzacji",
    lead: "Przykład biura obsługującego kilkaset firm, z których większość wystawia i otrzymuje faktury w KSeF.",
    rows: [
      { label: "Pobieranie", before: "Logowanie i pobieranie dla każdego klienta osobno.", after: "Automatycznie dla wszystkich klientów z uprawnieniami." },
      { label: "Dokumenty", before: "KSeF w jednym miejscu, reszta w mailach.", after: "Jedno zestawienie dokumentów klienta." },
      { label: "Duplikaty", before: "Wychodzą przy księgowaniu.", after: "Oznaczane przed odczytem." },
      { label: "Uprawnienia", before: "Sprawdzane, gdy coś przestaje działać.", after: "Lista klientów i informacja o problemach." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po sprawdzeniu, co robi wasz program księgowy.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Cztery etapy, z testem na grupie klientów przed włączeniem wszystkich.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak biuro dziś pracuje z KSeF, co robi program księgowy i jak wyglądają uprawnienia klientów.", fromYou: "Rozmowa z osobą odpowiedzialną za KSeF w biurze." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy harmonogram pobierania, strukturę folderów, zestawienia i zasady wykrywania duplikatów.", fromYou: "Akceptacja projektu i sposobu uwierzytelnienia biura w KSeF." },
      { title: "Test", duration: "zwykle 2–3 tygodnie", body: "Uruchamiamy pobieranie dla wybranych klientów i porównujemy wyniki z obecnym sposobem pracy.", fromYou: "Wybór klientów do testu i osoba sprawdzająca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich klientów i pilnujemy działania, także przy zmianach po stronie KSeF.", fromYou: "Informowanie nas o nowych klientach i zmianach uprawnień, jeśli nie są automatyczne." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od pobierania faktur, a łączenie z innymi dokumentami dodać później.",
    items: [
      { name: "Pobieranie faktur", description: "Dla biur, które chcą skończyć z ręcznym pobieraniem.", includes: ["Pobieranie faktur klientów", "Porządek w plikach", "Lista problemów z pobieraniem", "Lista uprawnień"] },
      { name: "KSeF i dokumenty", description: "Dla biur, które chcą mieć pełny obraz klienta w jednym miejscu.", includes: ["Wszystko z wariantu Pobieranie faktur", "Jedno zestawienie dokumentów", "Wykrywanie duplikatów", "Status kompletności klienta"] },
      { name: "Pełny obieg", description: "Dla biur, które chcą połączyć KSeF, odczyt i program księgowy.", includes: ["Wszystko z wariantu KSeF i dokumenty", "Odczyt dokumentów spoza KSeF z AI", "Przekazanie danych do programu księgowego", "Informacje dla klientów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i faktur,",
      "to, co już robi program księgowy biura,",
      "zakres łączenia z dokumentami spoza KSeF,",
      "miejsce działania automatyzacji: serwer w UE lub infrastruktura biura,",
      "zakres opieki, w tym reagowanie na zmiany w KSeF.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Przerwa w działaniu KSeF lub zmiana jego interfejsu.", mitigation: "Automatyzacja ponawia pobieranie, informuje zespół o problemach, a zmiany po stronie KSeF obejmujemy opieką." },
      { risk: "Dostęp do danych klienta, który zakończył współpracę.", mitigation: "Lista klientów i uprawnień jest aktualizowana, a pobieranie dla byłych klientów jest wyłączane." },
      { risk: "Dublowanie tego, co robi program księgowy.", mitigation: "Przed projektem sprawdzamy, co program już robi, i automatyzujemy tylko brakujące elementy." },
      { risk: "Dane uwierzytelniające w niepowołanych rękach.", mitigation: "Dane dostępowe przechowujemy w zabezpieczonym miejscu, z dostępem ograniczonym do osób, które go potrzebują." },
    ],
  },
  faq: [
    { question: "Czy nasz program księgowy nie robi tego sam?", answer: "Część programów pobiera faktury z KSeF. Sprawdzamy, co robi wasz, i automatyzujemy tylko to, czego brakuje, np. łączenie z dokumentami spoza KSeF, listę uprawnień czy informacje dla klientów." },
    { question: "Na jakiej podstawie biuro pobiera faktury klientów?", answer: "Na podstawie uprawnień, które klient nadaje biuru w KSeF. Automatyzacja korzysta wyłącznie z tych uprawnień." },
    { question: "Czy faktury z KSeF trafią do programu księgowego?", answer: "Tak, jeśli program ich nie pobiera sam. Przekazujemy je przez import lub API, w formacie, który program obsługuje." },
    { question: "Gdzie działa automatyzacja?", answer: "Na serwerze w UE albo w infrastrukturze biura. Faktury zapisujemy w miejscu, którego biuro używa do przechowywania dokumentów." },
    { question: "Czy obsłużycie także wystawianie faktur dla klientów?", answer: "Tak, jeśli biuro wystawia faktury w imieniu klientów. Zakres ustalamy indywidualnie, bo zależy od sposobu pracy z danym klientem." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "integracje-systemow", "cyfryzacja-danych-i-dokumentow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["ksef", "n8n"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "cyfryzacja-danych-w-firmie", "rodo-a-automatyzacja-procesow"],
};
