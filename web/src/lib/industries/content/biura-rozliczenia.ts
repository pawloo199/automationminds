import type { IndustryPageContent } from "../types";

export const biuraRozliczenia: IndustryPageContent = {
  industrySlug: "biura-rachunkowe",
  subSlug: "rozliczenia-biura",
  name: "Rozliczenia biura i nowi klienci",
  excerpt: "Faktury za usługi biura według pakietu lub liczby dokumentów, przypomnienia o płatnościach i sprawne przyjęcie nowego klienta.",
  metaTitle: "Rozliczenia biura rachunkowego i przyjmowanie klientów",
  metaDescription:
    "Automatyzujemy rozliczenia biura rachunkowego z klientami: faktury według pakietów i dokumentów, przypomnienia o płatnościach i nowi klienci.",
  primaryKeyword: "rozliczenia biura rachunkowego z klientami",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura rachunkowe: rozliczenia i nowi klienci",
    title: "Rozliczenia biura i nowi klienci: faktury i umowy, które przygotowują się same",
    lead: "Biuro rozlicza klientów według pakietów, liczby dokumentów, pracowników lub dodatkowych usług. Policzenie tego co miesiąc dla kilkuset klientów to praca, przy której łatwo o pominięcie. Automatyzujemy rozliczenia biura: dane do faktur zbierają się z bieżącej pracy, faktury powstają po akceptacji, a przypomnienia o płatnościach wychodzą same. Porządkujemy też przyjęcie nowego klienta, od oferty po założenie go w systemach.",
    bullets: [
      "Faktury według pakietu, dokumentów i usług dodatkowych",
      "Przypomnienia o płatnościach i raport należności",
      "Nowy klient: oferta, umowa i dane z rejestrów",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura z różnymi pakietami i zmiennym zakresem usług dla klientów" },
    { label: "Co automatyzujemy", value: "Dane do faktur, faktury, płatności, oferty, umowy, przyjęcie klienta" },
    { label: "Narzędzia", value: "Program do faktur, KSeF, bank, szablony Word, n8n" },
    { label: "Zasada", value: "Właściciel lub kierownik akceptuje rozliczenie przed fakturą" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia biura warto zautomatyzować",
    lead: "Jeśli te sytuacje dotyczą waszego biura, część przychodu może umykać, a czas zespołu idzie na administrację.",
    items: [
      "Liczbę dokumentów i pracowników klientów zlicza się ręcznie przed wystawieniem faktur.",
      "Usługi dodatkowe, np. korekty czy zaświadczenia, nie zawsze trafiają na fakturę.",
      "Faktury za usługi biura powstają kilka dni po zamknięciu miesiąca.",
      "Przypomnienia o płatnościach wysyła się nieregularnie albo wcale.",
      "Przyjęcie nowego klienta oznacza przepisywanie jego danych do umowy, pełnomocnictw i systemów.",
      "Nie wiadomo, którzy klienci regularnie przekraczają zakres pakietu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń biura",
    paragraphs: [
      "Dane do faktur biura zbierają się z bieżącej pracy: liczba dokumentów klienta ze zbierania dokumentów lub programu księgowego, liczba pracowników z kadr i płac, usługi dodatkowe odnotowane przez księgowe. Na koniec miesiąca system przygotowuje zestawienie dla każdego klienta według jego pakietu i cennika.",
      "Zestawienie trafia do akceptacji właściciela lub kierownika biura. Po akceptacji w programie do faktur powstają faktury, które trafiają do KSeF i do klientów. System pilnuje płatności i przypomina klientom przed terminem i po nim, a właściciel widzi należności w jednym raporcie.",
      "Drugi element to przyjęcie nowego klienta. Z formularza lub oferty system pobiera dane firmy z rejestrów po NIP, przygotowuje umowę i pełnomocnictwa z szablonów, zakłada klienta w bazie biura z obowiązkami i księgową prowadzącą oraz wysyła klientowi listę dokumentów startowych.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń biura",
    lead: "Zakres dopasowujemy do cennika biura i narzędzi, których używa.",
    items: [
      { title: "Dane do faktur", body: "Liczba dokumentów, pracowników i usług dodatkowych zbierana z bieżącej pracy." },
      { title: "Zestawienia według pakietów", body: "Kwota dla każdego klienta według pakietu i cennika." },
      { title: "Akceptacja", body: "Zestawienia do sprawdzenia przez właściciela lub kierownika przed fakturą." },
      { title: "Faktury i KSeF", body: "Faktury w programie do faktur, wysyłane do KSeF i do klientów." },
      { title: "Przypomnienia o płatnościach", body: "Uprzejme przypomnienia przed terminem i po nim." },
      { title: "Przekroczenia pakietu", body: "Informacja o klientach, którzy regularnie wychodzą poza zakres pakietu." },
      { title: "Oferta i umowa", body: "Oferta, umowa i pełnomocnictwa z szablonów wypełniane danymi klienta." },
      { title: "Przyjęcie klienta", body: "Dane z rejestrów, założenie w systemach biura i lista dokumentów startowych." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zamknięcia miesiąca do zapłaty i od zapytania do nowego klienta.",
    items: [
      {
        title: "Faktury za usługi biura",
        trigger: "Koniec miesiąca",
        steps: ["Zebranie liczby dokumentów, pracowników i usług dodatkowych", "Zestawienia według pakietów do akceptacji", "Faktury w programie do faktur, wysyłka i przypomnienia o płatności"],
        result: "Faktury wychodzą w pierwszych dniach miesiąca i obejmują wszystkie usługi.",
      },
      {
        title: "Nowy klient",
        trigger: "Klient akceptuje ofertę",
        steps: ["Dane firmy z rejestrów po NIP", "Umowa i pełnomocnictwa z szablonów do podpisu", "Założenie klienta w bazie biura i lista dokumentów startowych"],
        result: "Klient jest gotowy do obsługi w dniu podpisania umowy.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład biura z kilkoma pakietami i cennikiem usług dodatkowych.",
    rows: [
      { label: "Dane do faktur", before: "Zliczane ręcznie przed wystawieniem faktur.", after: "Zbierane z bieżącej pracy." },
      { label: "Usługi dodatkowe", before: "Część nie trafia na fakturę.", after: "Odnotowane i doliczone automatycznie." },
      { label: "Płatności", before: "Brak systematycznych przypomnień.", after: "Przypomnienia i raport należności." },
      { label: "Nowy klient", before: "Dane przepisywane do kilku dokumentów.", after: "Umowa i założenie klienta z jednego formularza." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednym zamknięciu miesiąca równolegle z obecnym sposobem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy cennik, pakiety, sposób zbierania danych do faktur i przyjmowania klientów.", fromYou: "Cennik, wzory umów i rozmowa z osobą od rozliczeń." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy źródła danych, zasady naliczania, akceptację i treści przypomnień.", fromYou: "Akceptacja zasad rozliczeń i treści wiadomości." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i porównujemy wyniki z rozliczeniem przygotowanym ręcznie.", fromYou: "Osoba, która porównuje wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i pilnujemy działania przy kolejnych zamknięciach.", fromYou: "Informacja o zmianach w cenniku i pakietach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od faktur i płatności albo od przyjmowania klientów.",
    items: [
      { name: "Faktury i płatności", description: "Dla biur, które chcą szybciej i dokładniej rozliczać klientów.", includes: ["Dane do faktur z bieżącej pracy", "Zestawienia według pakietów", "Faktury i KSeF", "Przypomnienia o płatnościach"] },
      { name: "Przyjęcie klienta", description: "Dla biur, które pozyskują wielu nowych klientów.", includes: ["Oferta i umowa z szablonów", "Dane z rejestrów po NIP", "Założenie klienta w systemach biura", "Lista dokumentów startowych"] },
      { name: "Pełne rozliczenia", description: "Dla biur, które chcą mieć kontrolę nad przychodem i rentownością klientów.", includes: ["Faktury i płatności", "Przyjęcie klienta", "Przekroczenia pakietów", "Raport należności i rentowności klientów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "złożoność cennika i liczba pakietów,",
      "źródła danych do faktur,",
      "integracja z programem do faktur, KSeF i bankiem,",
      "zakres przyjmowania klientów i liczba szablonów,",
      "zakres raportów dla właściciela.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędna faktura trafi do klienta.", mitigation: "Zestawienia akceptuje właściciel lub kierownik przed wystawieniem faktur." },
      { risk: "Niepełne dane do faktur.", mitigation: "System pokazuje, dla których klientów brakuje danych, zanim powstanie zestawienie." },
      { risk: "Przypomnienie o płatności zaszkodzi relacji.", mitigation: "Treści ustalacie sami, a dla wybranych klientów przypomnienia można wyłączyć." },
      { risk: "Błędy w danych z rejestrów.", mitigation: "Dane z rejestrów są propozycją, którą sprawdza osoba przyjmująca klienta." },
    ],
  },
  faq: [
    { question: "Czy obsłużycie nasz cennik?", answer: "Tak. Zasady naliczania zapisujemy dla każdego pakietu i klienta, także dla wyjątków i rabatów." },
    { question: "Skąd system wie, ile dokumentów miał klient?", answer: "Ze zbierania dokumentów lub z programu księgowego, jeśli udostępnia te dane. Usługi dodatkowe księgowe odnotowują w miejscu, w którym pracują." },
    { question: "Czy faktury trafią do KSeF?", answer: "Tak. Faktura powstaje w waszym programie do faktur, który wysyła ją do KSeF, albo przez bezpośrednie połączenie z KSeF." },
    { question: "Czy umowy mogą być podpisywane elektronicznie?", answer: "Tak, jeśli korzystacie z usługi podpisu elektronicznego. Umowa z szablonu może trafić do podpisu automatycznie." },
    { question: "Czy to pomoże w ocenie rentowności klientów?", answer: "Tak. Gdy dane o pracy i przychodach są w jednym miejscu, łatwo zobaczyć, którzy klienci wymagają więcej pracy niż przewiduje ich pakiet." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-dla-firm-uslugowych", "automatyzacja-raportow"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "ofertowanie", "obieg-umow"],
  relatedToolSlugs: ["ksef", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "jak-mierzyc-roi-automatyzacji", "5-procesow-do-automatyzacji-w-malej-firmie"],
};
