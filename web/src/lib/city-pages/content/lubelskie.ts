import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Lubelskiego oraz Chełm, Zamość i Biała Podlaska (bez Lublina). */
export const lubelskiePowiatCities: CityPageContent[] = [
  {
    slug: "swidnik",
    name: "Świdnik",
    nameGenitive: "Świdnika",
    nameLocative: "Świdniku",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Świdniku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Świdnika: produkcja, lotnictwo, handel i logistyka w pierścieniu Lublina. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Świdniku",
    heroLead:
      "Porządkujemy świdnickie procesy produkcyjne i handlowe, gdy bliskość Lublina podnosi tempo, a biuro zostaje w tyle.",
    introParagraphs: [
      "Świdnik łączy produkcję, zaplecze lotnicze, handel i logistykę tuż przy Lublinie. Automatyzacja procesów w Świdniku zwykle dotyczy zamówień, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Powiat świdnicki żyje bliskością Lublina i ruchem towarowym. Typowy ból to ręczne potwierdzenia, rozjazd statusów i faktury doganiające wysyłkę.",
    whyHere:
      "W Świdniku automatyzacja wyrównuje tempo obsługi wobec klientów z Lublina bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Produkcja i lotnictwo-adjacent",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla handlu i magazynu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali, biura i klienta bez telefonów między zmianami.",
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
      "W Świdniku zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "swi-1",
        question: "Czy automatyzacja ma sens blisko Lublina?",
        answer:
          "Właśnie wtedy. Klienci oczekują tempa stolicy regionu, a lokalne biuro nie może rosnąć bez limitu.",
      },
      {
        id: "swi-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "swi-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od zamówień, faktur albo statusów realizacji, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "swi-4",
        question: "Czy potrzebujemy działu IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lublin", "leczna", "krasnik", "lubartow", "krasnystaw"],
  },
  {
    slug: "lubartow",
    name: "Lubartów",
    nameGenitive: "Lubartowa",
    nameLocative: "Lubartowie",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Lubartowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lubartowa: handel, produkcja i usługi północnego pierścienia Lublina. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Lubartowie",
    heroLead:
      "Spinamy lubartowskie procesy, gdy lokalne MŚP obsługują Lublin w jednym tempie dokumentów.",
    introParagraphs: [
      "Lubartów to handel, produkcja i usługi na północ od Lublina. Automatyzacja procesów w Lubartowie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt, jasna instrukcja.",
    ],
    localContext:
      "Powiat lubartowski ma firmy rosnące wraz z pierścieniem Lublina. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Lubartowie automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Handel B2B",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status w przewidywalnym obiegu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla zespołu w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu realizacji w przewidywalnym obiegu.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Lubartowie startujemy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lub-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lub-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "lub-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "lub-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lublin", "leczna", "parczew", "radzyn-podlaski", "swidnik"],
  },
  {
    slug: "leczna",
    name: "Łęczna",
    nameGenitive: "Łęcznej",
    nameLocative: "Łęcznej",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Łęcznej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łęcznej: przemysł, handel i usługi wschodniego pierścienia Lublina. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Łęcznej",
    heroLead:
      "Porządkujemy łęczyńskie procesy przemysłowe i handlowe, gdy dokumenty muszą nadążyć za operacjami.",
    introParagraphs: [
      "Łęczna łączy przemysł, handel i usługi na wschód od Lublina. Automatyzacja procesów w Łęcznej zwykle dotyczy statusów zleceń, awizacji i faktur.",
      "Współpracujemy zdalnie. Najpierw proces krytyczny dla terminu.",
    ],
    localContext:
      "Powiat łęczyński ma firmy z cienkim back-office i kontaktami w stronę Lublina. Typowy ból to ręczne statusy i dokumenty z opóźnieniem.",
    whyHere:
      "W Łęcznej automatyzacja broni terminów i skraca ścieżkę od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Przemysł i produkcja",
        body: "Statusy i wyjątki jakościowe w przewidywalnym obiegu.",
      },
      {
        title: "Handel",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Administracja",
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
        body: "Jedna prawda dla hali, biura i klienta bez telefonów między zmianami.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia o odchyleniach w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Łęcznej zaczynamy od procesu o największym chaosie. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "lec-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lec-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "lec-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "lec-4",
        question: "Czy musicie być w Łęcznej?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["lublin", "swidnik", "lubartow", "wlodawa", "chelm"],
  },
  {
    slug: "krasnik",
    name: "Kraśnik",
    nameGenitive: "Kraśnika",
    nameLocative: "Kraśniku",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Kraśniku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kraśnika: produkcja, handel i logistyka południowego pierścienia Lublina. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Kraśniku",
    heroLead:
      "Pomagamy kraśnickim zakładom spiąć zamówienia z magazynem, gdy lokalna produkcja wymaga sprawnego biura.",
    introParagraphs: [
      "Kraśnik to produkcja, handel i logistyka na południe od Lublina. Automatyzacja procesów w Kraśniku często dotyczy statusów zleceń, awizacji i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat kraśnicki ma zakłady i MŚP z presją na terminy. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Kraśniku automatyzacja broni terminów dostaw i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Back-office",
        body: "Faktury po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla handlu i magazynu w jednym torze.",
      },
      {
        title: "Status produkcji",
        body: "Widoczny dla handlu w przewidywalnym obiegu.",
      },
      {
        title: "Dokumenty wysyłkowe",
        body: "Komplet dokumentów wysyłkowych przed fakturą.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Kraśniku startujemy od procesu wysyłkowego lub produkcyjnego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kra-1",
        question: "Czy to dla firm produkcyjnych?",
        answer:
          "Tak. Statusy i awizacje to częsty pierwszy etap u firm produkcyjnych.",
      },
      {
        id: "kra-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "kra-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "kra-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lublin", "opole-lubelskie", "janow-lubelski", "swidnik", "pulawy"],
  },
  {
    slug: "opole-lubelskie",
    name: "Opole Lubelskie",
    nameGenitive: "Opola Lubelskiego",
    nameLocative: "Opolu Lubelskim",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Opolu Lubelskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Opola Lubelskiego: handel, produkcja i usługi zachodniego pierścienia Lublina. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Opolu Lubelskim",
    heroLead:
      "Odciążamy opolskie biura, gdy dokumenty nie nadążają za lokalnymi zleceniami w stronę Lublina i Puław.",
    introParagraphs: [
      "Opole Lubelskie łączy handel, produkcję i usługi na zachód od Lublina. Automatyzacja procesów w Opolu Lubelskim zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat opolski ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Opolu Lubelskim automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Status",
        body: "Status widoczny dla biura bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Opolu Lubelskim zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "opo-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "opo-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "opo-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "opo-4",
        question: "Czy musicie być w Opolu Lubelskim?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["pulawy", "krasnik", "lublin", "ryki", "swidnik"],
  },
  {
    slug: "pulawy",
    name: "Puławy",
    nameGenitive: "Puław",
    nameLocative: "Puławach",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Puławach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Puław: chemia, przemysł, handel i logistyka. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Puławach",
    heroLead:
      "Porządkujemy puławskie procesy przemysłowe, gdy hala, magazyn i biuro muszą mówić tym samym językiem.",
    introParagraphs: [
      "Puławy to silny ośrodek chemiczny i przemysłowy Lubelszczyzny z zapleczem handlu i logistyki. Automatyzacja procesów w Puławach zwykle dotyczy statusów zleceń, zgłoszeń, awizacji i dokumentów między zmianami a biurem.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres i szkolimy osoby odpowiedzialne za wyjątki.",
    ],
    localContext:
      "Region łączy produkcję ciągłą z dostawcami i MŚP. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie albo księgowość.",
    whyHere:
      "W Puławach automatyzacja opłaca się, gdy skraca reakcję na odchylenia i daje jeden wiarygodny obraz operacji.",
    focusIndustries: [
      {
        title: "Przemysł chemiczny i produkcja",
        body: "Statusy, protokoły i obiegi zatwierdzeń.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia o odchyleniach.",
      },
      {
        title: "Dostawcy utrzymania ruchu",
        body: "Zgłoszenia, części i rozliczenia w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i statusy dostaw w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zgłoszenia i eskalacje",
        body: "Priorytety, SLA i historia działań w jednym miejscu.",
      },
      {
        title: "Status produkcji",
        body: "Widoczny dla biura i handlu w przewidywalnym obiegu.",
      },
      {
        title: "Raport zmianowy",
        body: "Bez ręcznego składania w piątek w przewidywalnym obiegu.",
      },
      {
        title: "Faktura po wysyłce",
        body: "Po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "Z firmami z Puław startujemy od procesu krytycznego dla ciągłości. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "pul-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy też z mniejszymi dostawcami i firmami usługowymi wokół przemysłu.",
      },
      {
        id: "pul-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "pul-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od Waszego stacku.",
      },
      {
        id: "pul-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często w kilka tygodni po krótkiej diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-dla-logistyki",
    ],
    nearbyCitySlugs: ["lublin", "opole-lubelskie", "ryki", "krasnik", "warszawa"],
  },
  {
    slug: "biala-podlaska",
    name: "Biała Podlaska",
    nameGenitive: "Białej Podlaskiej",
    nameLocative: "Białej Podlaskiej",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Białej Podlaskiej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Białej Podlaskiej: handel, logistyka, produkcja i usługi północnej Lubelszczyzny. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Białej Podlaskiej",
    heroLead:
      "Wspieramy białopodlaskie firmy w porządkowaniu sprzedaży i operacji, gdy położenie przy wschodniej granicy podnosi tempo dokumentów.",
    introParagraphs: [
      "Biała Podlaska to ośrodek handlu, logistyki, produkcji i usług na północy województwa. Automatyzacja procesów w Białej Podlaskiej sprawdza się, gdy zamówienia, statusy i faktury nie mogą żyć w trzech osobnych Excelach.",
      "Pracujemy zdalnie: od mapy procesu po działające integracje.",
    ],
    localContext:
      "Miasto i powiat łączą handel regionalny z ruchem przygranicznym. Typowy obraz: solidny system księgowy, CRM niedokończony i operacje w arkuszach.",
    whyHere:
      "W Białej Podlaskiej automatyzacja pomaga rosnąć bez proporcjonalnego wzrostu administracji wobec klientów z Lublina i Siedlec.",
    focusIndustries: [
      {
        title: "Handel B2B i dystrybucja",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i wyjątki w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń między halą a biurem bez ręcznego przepisywania.",
      },
      {
        title: "Usługi",
        body: "Lead, oferta i follow-up w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie od oferty do FV",
        body: "Mniej ręcznego przepisywania w przewidywalnym obiegu.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia i eskalacje w przewidywalnym obiegu.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje i archiwum w przewidywalnym obiegu.",
      },
      {
        title: "Lejek sprzedaży",
        body: "CRM z przypomnieniami w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Białej Podlaskiej startujemy od konkretnego bólu, zwykle zamówień, faktur albo awizacji. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "bia-1",
        question: "Czy automatyzacja sprawdzi się w firmie rodzinnej?",
        answer:
          "Tak. Często właśnie w firmach rodzinnych zwrot jest najszybszy.",
      },
      {
        id: "bia-2",
        question: "Czy integrujecie polskie systemy?",
        answer:
          "Łączymy to, do czego jest bezpieczny dostęp. Dobieramy metodę pod Wasz stack.",
      },
      {
        id: "bia-3",
        question: "Czy potrzebujemy biura projektu w Białej Podlaskiej?",
        answer:
          "Nie. Pracujemy zdalnie i hybrydowo. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "bia-4",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od procesu z największym chaosem: faktury, zamówienia albo statusy.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["radzyn-podlaski", "parczew", "wlodawa", "siedlce", "bialystok", "lublin"],
  },
  {
    slug: "radzyn-podlaski",
    name: "Radzyń Podlaski",
    nameGenitive: "Radzynia Podlaskiego",
    nameLocative: "Radzyniu Podlaskim",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Radzyniu Podlaskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Radzynia Podlaskiego: handel, produkcja i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Radzyniu Podlaskim",
    heroLead:
      "Odciążamy radzyńskie biura, gdy lokalny rynek wymaga sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Radzyń Podlaski to handel, produkcja i usługi na północy Lubelszczyzny. Automatyzacja procesów w Radzyniu Podlaskim często dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat radzyński ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Radzyniu Podlaskim automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
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
        title: "Status",
        body: "Status widoczny dla biura bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Radzyniu Podlaskim zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "rad-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "rad-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "rad-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "rad-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["biala-podlaska", "parczew", "lubartow", "lukow", "lublin"],
  },
  {
    slug: "parczew",
    name: "Parczew",
    nameGenitive: "Parczewa",
    nameLocative: "Parczewie",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Parczewie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Parczewa: handel, produkcja i usługi północno-wschodniej Lubelszczyzny. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Parczewie",
    heroLead:
      "Spinamy parczewskie procesy, gdy lokalne MŚP potrzebują sprawnego biura bez dokładania etatów.",
    introParagraphs: [
      "Parczew łączy handel, produkcję i usługi w północno-wschodniej części regionu. Automatyzacja procesów w Parczewie zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start.",
    ],
    localContext:
      "Powiat parczewski ma firmy z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i dokumenty z opóźnieniem.",
    whyHere:
      "W Parczewie automatyzacja zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Oferta",
        body: "CRM z przypomnieniem follow-upu w przewidywalnym obiegu.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Parczewie startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "par-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "par-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "par-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "par-4",
        question: "Czy musicie być w Parczewie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["biala-podlaska", "radzyn-podlaski", "wlodawa", "lubartow", "lublin"],
  },
  {
    slug: "lukow",
    name: "Łuków",
    nameGenitive: "Łukowa",
    nameLocative: "Łukowie",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Łukowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łukowa: produkcja, handel i logistyka między Lublinem a Siedlcami. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Łukowie",
    heroLead:
      "Porządkujemy łukowskie procesy produkcyjne i handlowe, gdy ruch regionalny wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Łuków to produkcja, handel i logistyka na północnym zachodzie Lubelszczyzny. Automatyzacja procesów w Łukowie często dotyczy zamówień, awizacji i faktur.",
      "Współpracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat łukowski łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Łukowie automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe w jednym torze.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla handlu i magazynu w jednym torze.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia o odchyleniach w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po statusie wysyłki w przewidywalnym obiegu.",
      },
      {
        title: "Raport",
        body: "KPI bez ręcznego Excela w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Łukowie zaczynamy od procesu zamówieniowego lub wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "luk-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "luk-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "luk-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "luk-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["radzyn-podlaski", "ryki", "siedlce", "lublin", "pulawy"],
  },
  {
    slug: "ryki",
    name: "Ryki",
    nameGenitive: "Ryk",
    nameLocative: "Rykach",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Rykach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ryk: handel, produkcja i usługi między Lublinem a Warszawą. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Rykach",
    heroLead:
      "Odciążamy ryckie biura, gdy położenie między aglomeracjami podnosi oczekiwania klientów.",
    introParagraphs: [
      "Ryki łączą handel, produkcję i usługi na styku Lubelszczyzny i Mazowsza. Automatyzacja procesów w Rykach zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat rycki ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Rykach automatyzacja wyrównuje tempo obsługi wobec klientów z Lublina i Warszawy.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
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
        title: "Status",
        body: "Status widoczny dla biura bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Rykach zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "ryk-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ryk-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "ryk-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ryk-4",
        question: "Czy musicie być w Rykach?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["pulawy", "lukow", "opole-lubelskie", "lublin", "warszawa"],
  },
  {
    slug: "wlodawa",
    name: "Włodawa",
    nameGenitive: "Włodawy",
    nameLocative: "Włodawie",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Włodawie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Włodawy: handel, usługi i produkcja przy wschodniej granicy. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Włodawie",
    heroLead:
      "Spinamy włodawskie procesy, gdy odległość od Lublina nie może spowalniać biura.",
    introParagraphs: [
      "Włodawa to handel, usługi i produkcja przy wschodniej granicy Lubelszczyzny. Automatyzacja procesów we Włodawie często dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat włodawski ma firmy z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "We Włodawie automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "We Włodawie startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "wlo-1",
        question: "Czy automatyzacja ma sens daleko od Lublina?",
        answer:
          "Tym bardziej. Klienci i tak oczekują szybkiego statusu niezależnie od odległości od Lublina.",
      },
      {
        id: "wlo-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "wlo-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "wlo-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["chelm", "parczew", "biala-podlaska", "leczna", "lublin"],
  },
  {
    slug: "zamosc",
    name: "Zamość",
    nameGenitive: "Zamościa",
    nameLocative: "Zamościu",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Zamościu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Zamościa: handel, produkcja, turystyka i usługi Roztocza. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Zamościu",
    heroLead:
      "Porządkujemy zamojskie procesy handlowe i produkcyjne, gdy lokalny rynek i turystyka mnożą dokumenty.",
    introParagraphs: [
      "Zamość łączy handel, produkcję, usługi i turystykę na Roztoczu. Automatyzacja procesów w Zamościu zwykle dotyczy zamówień, zapytań, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Miasto i powiat mają MŚP z cienkim biurem oraz sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury doganiające realizację.",
    whyHere:
      "W Zamościu automatyzacja skraca czas od zlecenia do faktury i broni jakości obsługi w sezonie.",
    focusIndustries: [
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń i jakość w przewidywalnym obiegu.",
      },
      {
        title: "Turystyka i usługi",
        body: "Rezerwacje, oferty i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla handlu i magazynu w jednym torze.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla zespołu w przewidywalnym obiegu.",
      },
      {
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
    ],
    howWeWork:
      "W Zamościu zaczynamy od procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "zam-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "zam-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "zam-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "zam-4",
        question: "Czy musicie być w Zamościu?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["tomaszow-lubelski", "krasnystaw", "bilgoraj", "hrubieszow", "lublin"],
  },
  {
    slug: "tomaszow-lubelski",
    name: "Tomaszów Lubelski",
    nameGenitive: "Tomaszowa Lubelskiego",
    nameLocative: "Tomaszowie Lubelskim",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Tomaszowie Lubelskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Tomaszowa Lubelskiego: produkcja, handel i usługi Roztocza. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Tomaszowie Lubelskim",
    heroLead:
      "Spinamy tomaszowskie procesy produkcyjne i handlowe przy południowo-wschodniej Lubelszczyźnie.",
    introParagraphs: [
      "Tomaszów Lubelski to produkcja, handel i usługi na Roztoczu. Automatyzacja procesów w Tomaszowie Lubelskim często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat tomaszowski ma firmy z cienkim back-office. Typowy ból to ręczne potwierdzenia i dokumenty z opóźnieniem.",
    whyHere:
      "W Tomaszowie Lubelskim automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Status",
        body: "Jedna prawda dla hali, biura i klienta bez telefonów między zmianami.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Tomaszowie Lubelskim startujemy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "tom-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "tom-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "tom-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "tom-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["zamosc", "bilgoraj", "hrubieszow", "rzeszow", "lublin"],
  },
  {
    slug: "bilgoraj",
    name: "Biłgoraj",
    nameGenitive: "Biłgoraja",
    nameLocative: "Biłgoraju",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Biłgoraju | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Biłgoraja: produkcja meblarska, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Biłgoraju",
    heroLead:
      "Porządkujemy biłgorajskie procesy produkcyjne, gdy specyfikacje zamówień i dokumenty nie mogą ginąć w mailach.",
    introParagraphs: [
      "Biłgoraj kojarzy się z produkcją meblarską i lokalnym handlem. Automatyzacja procesów w Biłgoraju zwykle dotyczy konfiguracji zamówień, statusów produkcji i fakturowania.",
      "Współpracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat biłgorajski łączy produkcję z handlem B2B. Typowy ból to ręczne przekazywanie specyfikacji i faktury doganiające odbiór.",
    whyHere:
      "W Biłgoraju automatyzacja zmniejsza kosztowne błędy w zamówieniach i skraca czas od protokołu do faktury.",
    focusIndustries: [
      {
        title: "Produkcja meblarska",
        body: "Specyfikacje zamówień i statusy produkcji.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i dokumenty wysyłkowe w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia ze specyfikacją",
        body: "Formularz i walidacja zamiast domyślania z maila.",
      },
      {
        title: "Status produkcji",
        body: "Widoczny dla handlu i klienta w przewidywalnym obiegu.",
      },
      {
        title: "Protokół odbioru",
        body: "Checklist przed fakturą w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Faktura po protokole odbioru, bez ręcznego doganiania.",
      },
    ],
    howWeWork:
      "W Biłgoraju zaczynamy od procesu przyjęcia zamówienia. Wdrażamy zdalnie i szkolimy biuro oraz produkcję.",
    faq: [
      {
        id: "bil-1",
        question: "Czy automatyzujecie zamówienia ze specyfikacją?",
        answer:
          "Tak. Przyjęcie zamówienia ze specyfikacją to częsty pierwszy etap u zakładów meblarskich.",
      },
      {
        id: "bil-2",
        question: "Czy to dla małych zakładów?",
        answer:
          "Tak. Projektujemy pod prostotę utrzymania, także w mniejszym zespole.",
      },
      {
        id: "bil-3",
        question: "Czy musicie być w Biłgoraju?",
        answer:
          "Nie. Standardem jest współpraca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "bil-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["zamosc", "janow-lubelski", "tomaszow-lubelski", "krasnik", "rzeszow"],
  },
  {
    slug: "janow-lubelski",
    name: "Janów Lubelski",
    nameGenitive: "Janowa Lubelskiego",
    nameLocative: "Janowie Lubelskim",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Janowie Lubelskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Janowa Lubelskiego: produkcja, handel i usługi południowej Lubelszczyzny. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Janowie Lubelskim",
    heroLead:
      "Pomagamy janowskim firmom uporządkować dokumenty i statusy bez rozrostu biura.",
    introParagraphs: [
      "Janów Lubelski to produkcja, handel i usługi na południu regionu. Automatyzacja procesów w Janowie Lubelskim często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start.",
    ],
    localContext:
      "Powiat janowski ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Janowie Lubelskim automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
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
        title: "Status",
        body: "Status widoczny dla biura bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Janowie Lubelskim zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "jan-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "jan-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "jan-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "jan-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bilgoraj", "krasnik", "zamosc", "lublin", "rzeszow"],
  },
  {
    slug: "krasnystaw",
    name: "Krasnystaw",
    nameGenitive: "Krasnegostawu",
    nameLocative: "Krasnymstawie",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Krasnymstawie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Krasnegostawu: produkcja spożywcza, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Krasnymstawie",
    heroLead:
      "Spinamy krasnostawskie procesy produkcyjne, gdy dokumenty jakości i zamówienia nie mogą tonąć w mailach.",
    introParagraphs: [
      "Krasnystaw łączy produkcję, często spożywczą, z handlem i usługami. Automatyzacja procesów w Krasnymstawie zwykle dotyczy partii, zamówień i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat krasnostawski ma zakłady i MŚP z presją na jakość danych. Typowy ból to ręczne protokoły i faktury doganiające wysyłkę.",
    whyHere:
      "W Krasnymstawie automatyzacja chroni jakość dokumentacji i skraca cykl od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja spożywcza",
        body: "Partie, protokoły i dokumenty wysyłkowe.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia w przewidywalnym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz i potwierdzenie w przewidywalnym obiegu.",
      },
      {
        title: "Protokół jakości",
        body: "Terminy, role i archiwum w przewidywalnym obiegu.",
      },
      {
        title: "Status produkcji",
        body: "Widoczny dla handlu w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Krasnymstawie zaczynamy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "krs-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy dokumenty.",
      },
      {
        id: "krs-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "krs-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "krs-4",
        question: "Czy musicie być w Krasnymstawie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["chelm", "zamosc", "swidnik", "lublin", "hrubieszow"],
  },
  {
    slug: "hrubieszow",
    name: "Hrubieszów",
    nameGenitive: "Hrubieszowa",
    nameLocative: "Hrubieszowie",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Hrubieszowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Hrubieszowa: handel, produkcja i logistyka przy wschodniej granicy. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Hrubieszowie",
    heroLead:
      "Porządkujemy hrubieszowskie procesy, gdy handel przygraniczny i lokalna produkcja wymagają sprawnych dokumentów.",
    introParagraphs: [
      "Hrubieszów to handel, produkcja i logistyka przy wschodniej granicy. Automatyzacja procesów w Hrubieszowie często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Zakres pod realny wolumen.",
    ],
    localContext:
      "Powiat hrubieszowski ma firmy z cienkim biurem i kontaktami transgranicznymi. Typowy ból to ręczne statusy i dokumenty z opóźnieniem.",
    whyHere:
      "W Hrubieszowie automatyzacja broni tempa obsługi i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Handel przygraniczny",
        body: "Zamówienia i statusy dostaw w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
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
        title: "Awizacja",
        body: "Powiadomienia i eskalacje opóźnień zamiast telefonów.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Hrubieszowie startujemy od procesu zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "hru-1",
        question: "Czy automatyzacja ma sens przy handlu przygranicznym?",
        answer:
          "Właśnie wtedy. Status i dokumenty muszą być szybsze niż telefon do biura.",
      },
      {
        id: "hru-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "hru-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "hru-4",
        question: "Czy musicie być w Hrubieszowie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["zamosc", "chelm", "tomaszow-lubelski", "wlodawa", "lublin"],
  },
  {
    slug: "chelm",
    name: "Chełm",
    nameGenitive: "Chełma",
    nameLocative: "Chełmie",
    voivodeship: "lubelskie",
    regionCluster: "lubelskie",
    metaTitle: "Automatyzacja procesów w Chełmie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Chełma: produkcja, handel, logistyka i usługi wschodniej Lubelszczyzny. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Chełmie",
    heroLead:
      "Wspieramy chełmskie firmy w porządkowaniu produkcji i handlu, gdy bliskość granicy podnosi tempo dokumentów.",
    introParagraphs: [
      "Chełm to ośrodek produkcyjny, handlowy i usługowy wschodniej Lubelszczyzny. Automatyzacja procesów w Chełmie sprawdza się, gdy zamówienia, statusy i faktury nie mogą żyć w osobnych Excelach.",
      "Pracujemy zdalnie: od mapy procesu po działające integracje.",
    ],
    localContext:
      "Miasto i powiat łączą przemysł lokalny z handlem i logistyką przygraniczną. Typowy ból to ręczne potwierdzenia, rozjazd statusów i opóźnione faktury.",
    whyHere:
      "W Chełmie automatyzacja pomaga rosnąć bez proporcjonalnego wzrostu administracji wobec klientów z Lublina i regionu.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i jakość w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i dostawy w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i wyjątki w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Lead, oferta i follow-up w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie od oferty do FV",
        body: "Mniej ręcznego przepisywania w przewidywalnym obiegu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali i biura w przewidywalnym obiegu.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia o odchyleniach w przewidywalnym obiegu.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje i archiwum w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Chełmie startujemy od konkretnego bólu, zwykle zamówień, faktur albo statusów. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "che-1",
        question: "Czy automatyzacja sprawdzi się w firmie rodzinnej?",
        answer:
          "Tak. Często właśnie w firmach rodzinnych zwrot jest najszybszy.",
      },
      {
        id: "che-2",
        question: "Czy integrujecie polskie systemy księgowe i CRM?",
        answer:
          "Łączymy to, do czego jest bezpieczny dostęp. Dobieramy metodę pod Wasz stack.",
      },
      {
        id: "che-3",
        question: "Czy potrzebujemy biura projektu w Chełmie?",
        answer:
          "Nie. Pracujemy zdalnie i hybrydowo. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "che-4",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od procesu z największym chaosem: faktury, zamówienia albo statusy.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["krasnystaw", "wlodawa", "hrubieszow", "leczna", "zamosc", "lublin"],
  },
];
