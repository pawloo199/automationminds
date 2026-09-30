import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich województwa opolskiego (bez Opola). */
export const opolskiePowiatCities: CityPageContent[] = [
  {
    slug: "brzeg",
    name: "Brzeg",
    nameGenitive: "Brzegu",
    nameLocative: "Brzegu",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Brzegu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Brzegu: produkcja, handel i usługi na styku Opolszczyzny i Dolnego Śląska. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Brzegu",
    heroLead:
      "Porządkujemy brzeskie procesy produkcyjne i handlowe, gdy ruch między Opolem a Wrocławiem wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Brzeg leży na styku Opolszczyzny i Dolnego Śląska: produkcja, handel, logistyka. Automatyzacja procesów w Brzegu zwykle dotyczy zamówień, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Powiat brzeski łączy zakłady i MŚP obsługujące klientów z obu województw. Typowy ból to ręczne potwierdzenia, opóźnione faktury i brak jednego statusu zlecenia.",
    whyHere:
      "W Brzegu automatyzacja wyrównuje tempo obsługi wobec klientów z Wrocławia i Opola bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia o odchyleniach.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali, biura i klienta.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport sprzedaży",
        body: "Dane z CRM i ERP bez ręcznego sklejania.",
      },
    ],
    howWeWork:
      "W Brzegu zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "brz-1",
        question: "Czy automatyzacja ma sens blisko Wrocławia?",
        answer:
          "Właśnie wtedy. Klienci oczekują tempa większego ośrodka, a lokalne biuro nie może się rozrastać bez limitu.",
      },
      {
        id: "brz-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "brz-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od zamówień, faktur albo statusów realizacji, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "brz-4",
        question: "Czy potrzebujemy działu IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["opole", "nysa", "namyslow", "wroclaw", "olesnica"],
  },
  {
    slug: "glubczyce",
    name: "Głubczyce",
    nameGenitive: "Głubczyc",
    nameLocative: "Głubczycach",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Głubczycach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Głubczyc: produkcja, handel i usługi przy południowej granicy Opolszczyzny. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Głubczycach",
    heroLead:
      "Spinamy głubczyckie procesy, gdy lokalna produkcja i handel wymagają sprawnych dokumentów przy klientach z Czech i regionu.",
    introParagraphs: [
      "Głubczyce to produkcja, handel i usługi w południowej części województwa opolskiego. Automatyzacja procesów w Głubczycach często dotyczy zamówień, protokołów jakości i fakturowania.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt, jasna instrukcja dla zespołu.",
    ],
    localContext:
      "Powiat głubczycki ma MŚP z cienkim back-office i kontaktami transgranicznymi. Typowy ból to ręczne statusy, wersje dokumentów i faktury doganiające wysyłkę.",
    whyHere:
      "W Głubczycach automatyzacja chroni jakość dokumentacji i skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i protokoły jakości w jednym torze.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Usługi B2B",
        body: "Zlecenia, protokoły i rozliczenia.",
      },
      {
        title: "Administracja",
        body: "Faktury i archiwum pod audyt klienta.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz i reguły zamiast domyślania z maila.",
      },
      {
        title: "Protokół jakości",
        body: "Terminy, role i archiwum.",
      },
      {
        title: "Dokumenty wysyłkowe",
        body: "Komplet przed załadunkiem.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Głubczycach startujemy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie i szkolimy osoby odpowiedzialne za wyjątki.",
    faq: [
      {
        id: "glu-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy dokumenty.",
      },
      {
        id: "glu-2",
        question: "Czy to dla małych zakładów?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu.",
      },
      {
        id: "glu-3",
        question: "Czy pracujecie zdalnie?",
        answer:
          "Tak. To standard dla całej Polski, także dla firm z Głubczyc.",
      },
      {
        id: "glu-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut pozwala ocenić sens startu bez zobowiązań.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["prudnik", "kedzierzyn-kozle", "nysa", "opole", "raciborz"],
  },
  {
    slug: "kedzierzyn-kozle",
    name: "Kędzierzyn-Koźle",
    nameGenitive: "Kędzierzyna-Koźla",
    nameLocative: "Kędzierzynie-Koźlu",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Kędzierzynie-Koźlu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kędzierzyna-Koźla: chemia, produkcja, logistyka i MŚP. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kędzierzynie-Koźlu",
    heroLead:
      "Porządkujemy procesy u kędzierzyńskich producentów i dostawców, gdy hala, magazyn i biuro muszą mówić tym samym językiem.",
    introParagraphs: [
      "Kędzierzyn-Koźle to silny ośrodek przemysłowy Opolszczyzny z zapleczem chemicznym, produkcyjnym i logistycznym. Automatyzacja procesów w Kędzierzynie-Koźlu zwykle nie zaczyna się od robotów na linii, lecz od zgłoszeń, zamówień części, statusów zleceń i dokumentów między zmianami a biurem.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres z mierzalnym efektem i szkolimy osoby, które zamykają temat w systemie.",
    ],
    localContext:
      "Region łączy procesy ciągłe, wielozmianowe i gęstą sieć dostawców. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie, zaopatrzenie albo księgowość.",
    whyHere:
      "W Kędzierzynie-Koźlu każda godzina niejasnego statusu kosztuje przestój albo zbędny zapas. Automatyzacja opłaca się, gdy skraca reakcję i daje jeden wiarygodny obraz operacji.",
    focusIndustries: [
      {
        title: "Przemysł chemiczny i produkcja",
        body: "Zgłoszenia, części i protokoły z obiegiem zatwierdzeń.",
      },
      {
        title: "Logistyka i magazyn",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Dostawcy utrzymania ruchu",
        body: "Harmonogramy serwisów i rozliczenia z klientem przemysłowym.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i statusy dostaw widoczne dla handlu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zgłoszenia awarii i eskalacje",
        body: "Priorytety, SLA i historia działań zamiast SMS-ów.",
      },
      {
        title: "Zamówienia części MRO",
        body: "Od zapotrzebowania po potwierdzenie dostawy.",
      },
      {
        title: "Raporty zmianowe",
        body: "Zbieranie danych bez ręcznego składania w piątek.",
      },
      {
        title: "Obieg protokołów",
        body: "Terminy, przypomnienia i archiwum pod audyt.",
      },
    ],
    howWeWork:
      "Z firmami z Kędzierzyna-Koźla startujemy od procesu krytycznego dla ciągłości, zwykle zgłoszeń albo statusów produkcji. Wdrażamy zdalnie i testujemy na realnych scenariuszach.",
    faq: [
      {
        id: "ked-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy z mniejszymi dostawcami serwisu, logistyki i produkcji, tam gdzie biuro nie nadąża za tempem hali.",
      },
      {
        id: "ked-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy, gdy realnie pomaga mapowaniu.",
      },
      {
        id: "ked-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od tego, co system i IT akceptują.",
      },
      {
        id: "ked-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni. Zakres ustalamy po krótkiej diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["opole", "strzelce-opolskie", "glubczyce", "gliwice", "raciborz"],
  },
  {
    slug: "kluczbork",
    name: "Kluczbork",
    nameGenitive: "Kluczborka",
    nameLocative: "Kluczborku",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Kluczborku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kluczborka: produkcja, handel i usługi północnej Opolszczyzny. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Kluczborku",
    heroLead:
      "Pomagamy kluczborskim firmom spiąć zamówienia z magazynem i fakturami, gdy lokalny rynek wymaga sprawnego biura.",
    introParagraphs: [
      "Kluczbork to produkcja, handel i usługi w północnej części województwa opolskiego. Automatyzacja procesów w Kluczborku zwykle dotyczy zamówień, statusów i fakturowania.",
      "Współpracujemy zdalnie. Prosty zakres, szybki zwrot, instrukcja dla zespołu.",
    ],
    localContext:
      "Powiat kluczborski ma MŚP z ograniczonym zapleczem administracyjnym. Typowy ból to ręczne potwierdzenia, faktury z opóźnieniem i brak wspólnego statusu zlecenia.",
    whyHere:
      "W Kluczborku automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel",
        body: "Zamówienia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie bez ręcznego przepisywania.",
      },
      {
        title: "Status zlecenia",
        body: "Jedna prawda dla hali i biura.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast Excela.",
      },
    ],
    howWeWork:
      "W Kluczborku zaczynamy od jednego obiegu o największym chaosie. Wdrażamy zdalnie po bezpłatnej konsultacji.",
    faq: [
      {
        id: "klu-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu.",
      },
      {
        id: "klu-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "klu-3",
        question: "Ile trwa wdrożenie?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "klu-4",
        question: "Czy musicie być w Kluczborku?",
        answer:
          "Nie. Standardem jest praca zdalna.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["olesno", "namyslow", "opole", "czestochowa", "kalisz"],
  },
  {
    slug: "namyslow",
    name: "Namysłów",
    nameGenitive: "Namysłowa",
    nameLocative: "Namysłowie",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Namysłowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Namysłowa: produkcja, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Namysłowie",
    heroLead:
      "Odciążamy namysłowskie biura i zakłady, gdy dokumenty i statusy nie nadążają za zamówieniami.",
    introParagraphs: [
      "Namysłów łączy produkcję, handel i logistykę w północno-zachodniej Opolszczyźnie. Automatyzacja procesów w Namysłowie często dotyczy awizacji, zamówień i faktur.",
      "Pracujemy zdalnie. Najpierw proces krytyczny dla terminu, potem kolejne obszary.",
    ],
    localContext:
      "Powiat namysłowski ma firmy powiązane z ruchem regionalnym w stronę Wrocławia i Kalisza. Typowy ból to ręczne statusy i opóźnione dokumenty wysyłkowe.",
    whyHere:
      "W Namysłowie automatyzacja broni terminów dostaw i skraca czas rozliczeń.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i gotowość wysyłki w jednym widoku.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia o opóźnieniach.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia powtarzalne i potwierdzenia.",
      },
      {
        title: "Administracja",
        body: "Faktury po kompletnym statusie.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja wysyłki",
        body: "Dane transportowe zbierane przed załadunkiem.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Dokumenty WZ",
        body: "Kompletność przed fakturą.",
      },
      {
        title: "Raport operacyjny",
        body: "KPI bez ręcznego składania.",
      },
    ],
    howWeWork:
      "W Namysłowie startujemy od procesu wysyłkowego lub fakturowego. Wdrażamy zdalnie i mierzymy efekt w dniach roboczych.",
    faq: [
      {
        id: "nam-1",
        question: "Czy to dla średnich firm logistycznych?",
        answer:
          "Tak. Awizacje i statusy to częsty pierwszy etap.",
      },
      {
        id: "nam-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie.",
      },
      {
        id: "nam-3",
        question: "Ile trwa etap?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po diagnozie.",
      },
      {
        id: "nam-4",
        question: "Czy pracujecie zdalnie?",
        answer:
          "Tak. To standard naszego modelu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["brzeg", "kluczbork", "opole", "wroclaw", "olesnica"],
  },
  {
    slug: "nysa",
    name: "Nysa",
    nameGenitive: "Nysy",
    nameLocative: "Nysie",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Nysie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Nysy: produkcja, handel, budownictwo i usługi. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Nysie",
    heroLead:
      "Porządkujemy nyskie procesy produkcyjne i usługowe, gdy lokalny rynek i bliskość granicy wymagają sprawnych statusów.",
    introParagraphs: [
      "Nysa to ważny ośrodek południowej Opolszczyzny: produkcja, handel, budownictwo i usługi. Automatyzacja procesów w Nysie zwykle dotyczy zamówień, zleceń terenowych, protokołów i faktur.",
      "Współpracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne, szkolenie zespołu.",
    ],
    localContext:
      "Powiat nyski łączy zakłady z firmami usługowymi i budowlanymi. Typowy ból to ręczne przekazywanie statusów między biurem a polem oraz faktury doganiające realizację.",
    whyHere:
      "W Nysie automatyzacja skraca ścieżkę od zlecenia do faktury i zmniejsza liczbę błędów w dokumentacji B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe.",
      },
      {
        title: "Budownictwo i instalacje",
        body: "Zlecenia terenowe, protokoły i fakturowanie po domknięciu.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w jednym torze.",
      },
      {
        title: "Usługi",
        body: "Lead, oferta i follow-up bez ginących maili.",
      },
    ],
    focusProcesses: [
      {
        title: "Zlecenie terenowe",
        body: "Od przyjęcia po protokół i fakturę.",
      },
      {
        title: "Status realizacji",
        body: "Widoczny dla biura i klienta.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
      {
        title: "Raport tygodniowy",
        body: "Dane zbierane automatycznie.",
      },
    ],
    howWeWork:
      "W Nysie zaczynamy od procesu o najwyższym koszcie chaosu, często zleceń lub faktur. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "nys-1",
        question: "Czy automatyzacja pomoże firmie budowlanej?",
        answer:
          "Tak. Zwłaszcza przy wielu zleceniach terenowych i protokołach.",
      },
      {
        id: "nys-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Projektujemy pod utrzymanie przez zespół biznesowy.",
      },
      {
        id: "nys-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "nys-4",
        question: "Czy musicie być w Nysie?",
        answer:
          "Nie. Standardem jest współpraca zdalna.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["opole", "brzeg", "prudnik", "glubczyce", "wroclaw"],
  },
  {
    slug: "olesno",
    name: "Olesno",
    nameGenitive: "Olesna",
    nameLocative: "Oleśnie",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Oleśnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Olesna: produkcja, handel i usługi wschodniej Opolszczyzny. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Oleśnie",
    heroLead:
      "Spinamy oleskie procesy, gdy lokalne MŚP muszą doganiać tempo klientów ze Śląska i Częstochowy.",
    introParagraphs: [
      "Olesno to produkcja, handel i usługi we wschodniej części województwa opolskiego. Automatyzacja procesów w Oleśnie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty start dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat oleski ma firmy z cienką administracją i kontaktami w stronę Śląska. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Oleśnie automatyzacja oddaje czas zespołowi i zmniejsza ryzyko błędów przy stałych odbiorcach B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy widoczne dla handlu.",
      },
      {
        title: "Handel",
        body: "Zamówienia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia bez mailowego ping-ponga.",
      },
      {
        title: "Back-office",
        body: "Faktury i zamknięcie miesiąca.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status.",
      },
      {
        title: "Reklamacja",
        body: "Numer sprawy, terminy i historia.",
      },
      {
        title: "Faktura",
        body: "Po realizacji.",
      },
      {
        title: "Raport sprzedaży",
        body: "Bez ręcznej tabeli na koniec miesiąca.",
      },
    ],
    howWeWork:
      "W Oleśnie startujemy od jednego obiegu. Wdrażamy zdalnie i zostawiamy instrukcję.",
    faq: [
      {
        id: "ole-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "ole-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zespół dostaje jasną instrukcję wyjątków.",
      },
      {
        id: "ole-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie.",
      },
      {
        id: "ole-4",
        question: "Czy musicie być w Oleśnie?",
        answer:
          "Nie. Pracujemy zdalnie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["kluczbork", "opole", "lubliniec", "czestochowa", "strzelce-opolskie"],
  },
  {
    slug: "prudnik",
    name: "Prudnik",
    nameGenitive: "Prudnika",
    nameLocative: "Prudniku",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Prudniku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Prudnika: produkcja, handel i usługi przy granicy. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Prudniku",
    heroLead:
      "Pomagamy prudnickim firmom uporządkować dokumenty i statusy, gdy klienci regionalni i zagraniczni nie czekają na biuro.",
    introParagraphs: [
      "Prudnik łączy produkcję, handel i usługi w południowo-zachodniej Opolszczyźnie. Automatyzacja procesów w Prudniku zwykle dotyczy zamówień, protokołów i fakturowania.",
      "Współpracujemy zdalnie. Zakres pod realne zlecenia, bez wymiany całych systemów na siłę.",
    ],
    localContext:
      "Powiat prudnicki ma MŚP z kontaktami transgranicznymi i cienkim back-office. Typowy ból to ręczne wersje dokumentów i opóźnione faktury.",
    whyHere:
      "W Prudniku automatyzacja chroni terminowość wobec klientów i skraca czas rozliczeń.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i jakość w jednym torze.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i protokoły.",
      },
      {
        title: "Administracja",
        body: "Faktury i archiwum.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz zamiast domyślania z maila.",
      },
      {
        title: "Status produkcji",
        body: "Widoczny dla handlu.",
      },
      {
        title: "Protokół",
        body: "Terminy i archiwum.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie.",
      },
    ],
    howWeWork:
      "W Prudniku zaczynamy od procesu zamówieniowego lub dokumentacyjnego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "pru-1",
        question: "Czy automatyzacja ma sens blisko granicy?",
        answer:
          "Tym bardziej. Klienci oczekują szybkiego statusu niezależnie od lokalizacji biura.",
      },
      {
        id: "pru-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy pod utrzymanie przez osoby biznesowe.",
      },
      {
        id: "pru-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "pru-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. To nasz standardowy model.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["nysa", "glubczyce", "opole", "kedzierzyn-kozle", "wroclaw"],
  },
  {
    slug: "strzelce-opolskie",
    name: "Strzelce Opolskie",
    nameGenitive: "Strzelec Opolskich",
    nameLocative: "Strzelcach Opolskich",
    voivodeship: "opolskie",
    regionCluster: "opolskie",
    metaTitle: "Automatyzacja procesów w Strzelcach Opolskich | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Strzelec Opolskich: produkcja, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Strzelcach Opolskich",
    heroLead:
      "Porządkujemy strzeleckie procesy produkcyjne i handlowe między Opolem a aglomeracją śląską.",
    introParagraphs: [
      "Strzelce Opolskie leżą między Opolem a Śląskiem: produkcja, handel, logistyka. Automatyzacja procesów w Strzelcach Opolskich często dotyczy statusów, awizacji i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat strzelecki łączy zakłady z firmami obsługującymi klientów ze Śląska. Typowy ból to ręczne statusy i dokumenty, które nie nadążają za tempem odbiorców.",
    whyHere:
      "W Strzelcach Opolskich automatyzacja wyrównuje tempo obsługi wobec klientów z większych ośrodków bez rozrostu biura.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i limity.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Awizacja",
        body: "Sloty i eskalacje opóźnień.",
      },
      {
        title: "Faktura",
        body: "Po statusie wysyłki.",
      },
      {
        title: "Raport KPI",
        body: "Z systemów źródłowych.",
      },
    ],
    howWeWork:
      "W Strzelcach Opolskich startujemy od procesu o największym koszcie chaosu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "str-1",
        question: "Czy średnia firma produkcyjna może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego toru dokumentów lub statusów.",
      },
      {
        id: "str-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Integrujemy się z tym, co działa.",
      },
      {
        id: "str-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie.",
      },
      {
        id: "str-4",
        question: "Czy musicie być na miejscu?",
        answer:
          "Nie. Standardem jest praca zdalna.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["opole", "kedzierzyn-kozle", "olesno", "gliwice", "lubliniec"],
  },
];
