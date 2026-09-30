import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Kujawsko-Pomorskiego oraz Włocławek (bez Bydgoszczy, Torunia, Grudziądza i Inowrocławia). */
export const kujawskoPomorskiePowiatCities: CityPageContent[] = [
  {
    slug: "naklo-nad-notecia",
    name: "Nakło nad Notecią",
    nameGenitive: "Nakła nad Notecią",
    nameLocative: "Nakle nad Notecią",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Nakle nad Notecią | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Nakła nad Notecią: produkcja, handel i logistyka w pierścieniu Bydgoszczy. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Nakle nad Notecią",
    heroLead:
      "Porządkujemy nakielskie procesy produkcyjne i handlowe, gdy bliskość Bydgoszczy podnosi tempo, a biuro zostaje w tyle.",
    introParagraphs: [
      "Nakło nad Notecią łączy produkcję, handel i logistykę na zachód od Bydgoszczy. Automatyzacja procesów w Nakle nad Notecią zwykle dotyczy zamówień, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Powiat nakielski żyje bliskością Bydgoszczy i ruchem towarowym. Typowy ból to ręczne potwierdzenia, rozjazd statusów i faktury doganiające wysyłkę.",
    whyHere:
      "W Nakle nad Notecią automatyzacja wyrównuje tempo obsługi wobec klientów z Bydgoszczy bez liniowego wzrostu etatów.",
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
      "W Nakle nad Notecią zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "nak-1",
        question: "Czy automatyzacja ma sens blisko Bydgoszczy?",
        answer:
          "Właśnie wtedy. Klienci oczekują tempa większego ośrodka, a lokalne biuro nie może rosnąć bez limitu.",
      },
      {
        id: "nak-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "nak-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od zamówień, faktur albo statusów realizacji, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "nak-4",
        question: "Czy potrzebujemy działu IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bydgoszcz", "znin", "sepolno-krajenskie", "tuchola", "inowroclaw"],
  },
  {
    slug: "swiecie",
    name: "Świecie",
    nameGenitive: "Świecia",
    nameLocative: "Świeciu",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Świeciu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Świecia: produkcja papiernicza, przemysł i logistyka. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Świeciu",
    heroLead:
      "Spinamy świeckie procesy przemysłowe, gdy hala, magazyn i biuro muszą mówić tym samym językiem.",
    introParagraphs: [
      "Świecie to silny ośrodek produkcji papierniczej i przemysłowej na północ od Bydgoszczy. Automatyzacja procesów w Świeciu zwykle dotyczy statusów zleceń, zgłoszeń, awizacji i dokumentów między zmianami a biurem.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres i szkolimy osoby odpowiedzialne za wyjątki.",
    ],
    localContext:
      "Powiat świecki łączy produkcję wielozmianową z dostawcami i logistyką. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie albo księgowość.",
    whyHere:
      "W Świeciu automatyzacja opłaca się, gdy skraca reakcję na odchylenia i daje jeden wiarygodny obraz operacji.",
    focusIndustries: [
      {
        title: "Produkcja przemysłowa",
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
        body: "Priorytety, SLA i historia działań.",
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
      "Z firmami ze Świecia startujemy od procesu krytycznego dla ciągłości. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "swi-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy też z mniejszymi dostawcami i firmami usługowymi wokół przemysłu.",
      },
      {
        id: "swi-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "swi-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od Waszego stacku.",
      },
      {
        id: "swi-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często w kilka tygodni po krótkiej diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bydgoszcz", "grudziadz", "tuchola", "chelmno", "torun"],
  },
  {
    slug: "tuchola",
    name: "Tuchola",
    nameGenitive: "Tucholi",
    nameLocative: "Tucholi",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Tucholi | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Tucholi: handel, usługi, produkcja i turystyka Borów Tucholskich. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Tucholi",
    heroLead:
      "Pomagamy tucholskim firmom uporządkować dokumenty i statusy, gdy sezon i lokalny rynek mnożą zapytania.",
    introParagraphs: [
      "Tuchola łączy handel, usługi, produkcję i turystykę w Borach Tucholskich. Automatyzacja procesów w Tucholi zwykle dotyczy zamówień, zapytań, rezerwacji i faktur.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat tucholski ma MŚP z cienkim biurem i sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Tucholi automatyzacja oddaje czas zespołowi i broni jakości obsługi w sezonie.",
    focusIndustries: [
      {
        title: "Handel i usługi",
        body: "Zapytania, oferty i follow-up bez ginących maili.",
      },
      {
        title: "Turystyka",
        body: "Rezerwacje i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie ofertowe",
        body: "Kolejka w CRM zamiast skrzynki zbiorczej.",
      },
      {
        title: "Rezerwacja",
        body: "Potwierdzenie i checklista w przewidywalnym obiegu.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
    ],
    howWeWork:
      "W Tucholi zaczynamy od jednego obiegu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "tuc-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "tuc-2",
        question: "Czy pomoże firmie sezonowej?",
        answer:
          "Tak. Skok wolumenu najszybciej psuje ręczny model.",
      },
      {
        id: "tuc-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "tuc-4",
        question: "Czy musicie być w Tucholi?",
        answer:
          "Nie. Standardem jest praca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["sepolno-krajenskie", "swiecie", "bydgoszcz", "chojnice", "naklo-nad-notecia"],
  },
  {
    slug: "sepolno-krajenskie",
    name: "Sępólno Krajeńskie",
    nameGenitive: "Sępólna Krajeńskiego",
    nameLocative: "Sępólnie Krajeńskim",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Sępólnie Krajeńskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sępólna Krajeńskiego: produkcja, handel i usługi na Krajnie. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Sępólnie Krajeńskim",
    heroLead:
      "Spinamy sępoleńskie procesy, gdy lokalne MŚP potrzebują sprawnego biura bez dokładania etatów.",
    introParagraphs: [
      "Sępólno Krajeńskie to produkcja, handel i usługi na Krajnie, na północny zachód od Bydgoszczy. Automatyzacja procesów w Sępólnie Krajeńskim często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat sępoleński ma firmy z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Sępólnie Krajeńskim automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
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
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Sępólnie Krajeńskim startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "sep-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "sep-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "sep-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "sep-4",
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
    nearbyCitySlugs: ["tuchola", "naklo-nad-notecia", "bydgoszcz", "pila", "chojnice"],
  },
  {
    slug: "chelmno",
    name: "Chełmno",
    nameGenitive: "Chełmna",
    nameLocative: "Chełmnie",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Chełmnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Chełmna: handel, usługi, produkcja między Toruniem a Grudziądzem. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Chełmnie",
    heroLead:
      "Porządkujemy chełmińskie procesy handlowe i usługowe, gdy lokalny rynek wymaga sprawnych statusów.",
    introParagraphs: [
      "Chełmno łączy handel, usługi i produkcję między Toruniem a Grudziądzem. Automatyzacja procesów w Chełmnie zwykle dotyczy zamówień, zapytań i faktur.",
      "Współpracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat chełmiński ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Chełmnie automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Handel i usługi",
        body: "Zapytania, oferty i follow-up bez ginących maili.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Turystyka lokalna",
        body: "Rezerwacje i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport sprzedaży",
        body: "Bez ręcznego sklejania w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Chełmnie zaczynamy od procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "che-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "che-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "che-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "che-4",
        question: "Czy musicie być w Chełmnie?",
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
    nearbyCitySlugs: ["torun", "grudziadz", "swiecie", "golub-dobrzyn", "wabrzezno"],
  },
  {
    slug: "golub-dobrzyn",
    name: "Golub-Dobrzyń",
    nameGenitive: "Golubia-Dobrzynia",
    nameLocative: "Golubiu-Dobrzyniu",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Golubiu-Dobrzyniu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Golubia-Dobrzynia: handel, usługi i produkcja wschodniego pierścienia Torunia. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Golubiu-Dobrzyniu",
    heroLead:
      "Odciążamy golubsko-dobrzyńskie biura, gdy dokumenty nie nadążają za lokalnymi zleceniami.",
    introParagraphs: [
      "Golub-Dobrzyń to handel, usługi i produkcja na wschód od Torunia. Automatyzacja procesów w Golubiu-Dobrzyniu często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty start.",
    ],
    localContext:
      "Powiat golubsko-dobrzyński ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Golubiu-Dobrzyniu automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
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
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Golubiu-Dobrzyniu zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "gol-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "gol-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "gol-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "gol-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["torun", "wabrzezno", "rypin", "brodnica", "chelmno"],
  },
  {
    slug: "wabrzezno",
    name: "Wąbrzeźno",
    nameGenitive: "Wąbrzeźna",
    nameLocative: "Wąbrzeźnie",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Wąbrzeźnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wąbrzeźna: produkcja, handel i usługi północno-wschodnich Kujaw. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Wąbrzeźnie",
    heroLead:
      "Spinamy wąbrzeskie procesy produkcyjne i handlowe między Toruniem a Brodnicą.",
    introParagraphs: [
      "Wąbrzeźno łączy produkcję, handel i usługi w północno-wschodniej części regionu. Automatyzacja procesów w Wąbrzeźnie zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start, jasna instrukcja.",
    ],
    localContext:
      "Powiat wąbrzeski ma firmy z cienkim back-office. Typowy ból to ręczne statusy i dokumenty z opóźnieniem.",
    whyHere:
      "W Wąbrzeźnie automatyzacja broni terminów i skraca rozliczenia.",
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
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia w jednym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali, biura i klienta.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Wąbrzeźnie startujemy od procesu zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "wab-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "wab-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "wab-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "wab-4",
        question: "Czy musicie być w Wąbrzeźnie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["golub-dobrzyn", "brodnica", "grudziadz", "torun", "rypin"],
  },
  {
    slug: "brodnica",
    name: "Brodnica",
    nameGenitive: "Brodnicy",
    nameLocative: "Brodnicy",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Brodnicy | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Brodnicy: produkcja, handel i logistyka wschodniego Kujawsko-Pomorskiego. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Brodnicy",
    heroLead:
      "Porządkujemy brodnickie procesy produkcyjne i handlowe, gdy lokalny rynek wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Brodnica to produkcja, handel i logistyka na wschodzie województwa. Automatyzacja procesów w Brodnicy często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat brodnicki łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Brodnicy automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe.",
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
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia o odchyleniach w przewidywalnym obiegu.",
      },
      {
        title: "Dokumenty wysyłkowe",
        body: "Komplet dokumentów wysyłkowych przed fakturą.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Brodnicy zaczynamy od procesu wysyłkowego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "bro-1",
        question: "Czy to dla firm produkcyjnych?",
        answer:
          "Tak. Statusy i awizacje to częsty pierwszy etap.",
      },
      {
        id: "bro-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "bro-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "bro-4",
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
    nearbyCitySlugs: ["rypin", "wabrzezno", "golub-dobrzyn", "olsztyn", "torun"],
  },
  {
    slug: "rypin",
    name: "Rypin",
    nameGenitive: "Rypina",
    nameLocative: "Rypinie",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Rypinie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Rypina: handel, produkcja i usługi na styku z Mazowszem. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Rypinie",
    heroLead:
      "Pomagamy rypińskim firmom uporządkować zamówienia i dokumenty bez rozrostu biura.",
    introParagraphs: [
      "Rypin to handel, produkcja i usługi we wschodniej części regionu, blisko Mazowsza. Automatyzacja procesów w Rypinie zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat rypiński ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Rypinie automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
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
        title: "Oferta",
        body: "CRM z przypomnieniem follow-upu w przewidywalnym obiegu.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Rypinie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "ryp-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ryp-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "ryp-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ryp-4",
        question: "Czy musicie być w Rypinie?",
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
    nearbyCitySlugs: ["brodnica", "lipno", "golub-dobrzyn", "wabrzezno", "plock"],
  },
  {
    slug: "wloclawek",
    name: "Włocławek",
    nameGenitive: "Włocławka",
    nameLocative: "Włocławku",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Włocławku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Włocławka: produkcja, handel, logistyka i usługi nad Wisłą. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Włocławku",
    heroLead:
      "Wspieramy włocławskie firmy w porządkowaniu sprzedaży, produkcji i finansów, bez rozrastania biurokracji.",
    introParagraphs: [
      "Włocławek to ośrodek produkcyjny, handlowy i usługowy południowych Kujaw. Automatyzacja procesów we Włocławku sprawdza się, gdy zamówienia, statusy i faktury nie mogą żyć w trzech osobnych Excelach.",
      "Pracujemy zdalnie: od mapy procesu po działające integracje. Liczy się mniej ręcznej pracy i mniej błędów w dokumentach.",
    ],
    localContext:
      "Region łączy produkcję, handel B2B i firmy obsługujące Wisłę oraz okoliczne powiaty. Typowy obraz: solidny system księgowy, CRM niedokończony i operacje w arkuszach.",
    whyHere:
      "We Włocławku automatyzacja pomaga rosnąć bez proporcjonalnego wzrostu administracji wobec klientów z Torunia, Płocka i Łodzi.",
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
        title: "Usługi i finanse",
        body: "Faktury, HR i zamknięcie miesiąca w przewidywalnym obiegu.",
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
        title: "Obieg faktur",
        body: "Akceptacje i archiwum w przewidywalnym obiegu.",
      },
      {
        title: "Lejek sprzedaży",
        body: "CRM z przypomnieniami w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "We Włocławku startujemy od konkretnego bólu, zwykle zamówień, faktur albo statusów produkcji. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "wlo-1",
        question: "Czy automatyzacja sprawdzi się w firmie rodzinnej?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "wlo-2",
        question: "Czy integrujecie polskie systemy księgowe i CRM?",
        answer:
          "Łączymy to, do czego jest bezpieczny dostęp. Dobieramy metodę pod Wasz stack.",
      },
      {
        id: "wlo-3",
        question: "Czy potrzebujemy biura projektu we Włocławku?",
        answer:
          "Nie. Pracujemy zdalnie i hybrydowo. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "wlo-4",
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
    nearbyCitySlugs: ["aleksandrow-kujawski", "lipno", "radziejow", "torun", "plock", "inowroclaw"],
  },
  {
    slug: "aleksandrow-kujawski",
    name: "Aleksandrów Kujawski",
    nameGenitive: "Aleksandrowa Kujawskiego",
    nameLocative: "Aleksandrowie Kujawskim",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Aleksandrowie Kujawskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Aleksandrowa Kujawskiego: handel, usługi i produkcja między Toruniem a Włocławkiem. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Aleksandrowie Kujawskim",
    heroLead:
      "Odciążamy aleksandrowskie biura, gdy lokalny rynek między dwoma ośrodkami wymaga sprawnych statusów.",
    introParagraphs: [
      "Aleksandrów Kujawski leży między Toruniem a Włocławkiem: handel, usługi, produkcja. Automatyzacja procesów w Aleksandrowie Kujawskim często dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat aleksandrowski ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Aleksandrowie Kujawskim automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
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
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Aleksandrowie Kujawskim zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "ale-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ale-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "ale-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ale-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["torun", "wloclawek", "radziejow", "inowroclaw", "lipno"],
  },
  {
    slug: "radziejow",
    name: "Radziejów",
    nameGenitive: "Radziejowa",
    nameLocative: "Radziejowie",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Radziejowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Radziejowa: produkcja rolno-spożywcza, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Radziejowie",
    heroLead:
      "Spinamy radziejowskie procesy, gdy dokumenty jakości i zamówienia nie mogą tonąć w mailach.",
    introParagraphs: [
      "Radziejów łączy produkcję rolno-spożywczą, handel i usługi na południowych Kujawach. Automatyzacja procesów w Radziejowie zwykle dotyczy zamówień, partii i faktur.",
      "Pracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat radziejowski ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury doganiające wysyłkę.",
    whyHere:
      "W Radziejowie automatyzacja chroni terminowość i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Produkcja rolno-spożywcza",
        body: "Partie, protokoły i dokumenty wysyłkowe.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Protokół",
        body: "Terminy i archiwum w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po statusie realizacji w przewidywalnym obiegu.",
      },
      {
        title: "Raport",
        body: "Dane zbierane automatycznie, bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Radziejowie startujemy od procesu zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "rad-1",
        question: "Czy automatyzujecie dokumenty partii?",
        answer:
          "W zakresie terminów, ról i archiwum dokumentów.",
      },
      {
        id: "rad-2",
        question: "Czy to dla MŚP?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "rad-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "rad-4",
        question: "Czy musicie być w Radziejowie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["inowroclaw", "aleksandrow-kujawski", "wloclawek", "znin", "mogilno"],
  },
  {
    slug: "lipno",
    name: "Lipno",
    nameGenitive: "Lipna",
    nameLocative: "Lipnie",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Lipnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lipna: produkcja, handel i usługi południowo-wschodnich Kujaw. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Lipnie",
    heroLead:
      "Porządkujemy lipnowskie procesy produkcyjne i handlowe między Włocławkiem a Rypinem.",
    introParagraphs: [
      "Lipno to produkcja, handel i usługi na południowym wschodzie regionu. Automatyzacja procesów w Lipnie często dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start.",
    ],
    localContext:
      "Powiat lipnowski ma firmy z cienkim back-office. Typowy ból to ręczne potwierdzenia i dokumenty z opóźnieniem.",
    whyHere:
      "W Lipnie automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
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
        body: "Jedna prawda dla hali, biura i klienta.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Lipnie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lip-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lip-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "lip-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "lip-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["wloclawek", "rypin", "aleksandrow-kujawski", "plock", "torun"],
  },
  {
    slug: "mogilno",
    name: "Mogilno",
    nameGenitive: "Mogilna",
    nameLocative: "Mogilnie",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Mogilnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Mogilna: produkcja spożywcza, handel i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Mogilnie",
    heroLead:
      "Pomagamy mogileńskim firmom uporządkować zamówienia i dokumenty jakości bez dokładania etatów.",
    introParagraphs: [
      "Mogilno łączy produkcję, często spożywczą, z handlem i usługami na południowym zachodzie regionu. Automatyzacja procesów w Mogilnie zwykle dotyczy partii, zamówień i faktur.",
      "Pracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat mogileński ma zakłady i MŚP z presją na jakość danych. Typowy ból to ręczne protokoły i faktury doganiające wysyłkę.",
    whyHere:
      "W Mogilnie automatyzacja chroni jakość dokumentacji i skraca cykl od zamówienia do faktury.",
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
      "W Mogilnie zaczynamy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "mog-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy dokumenty.",
      },
      {
        id: "mog-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego toru dokumentów.",
      },
      {
        id: "mog-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "mog-4",
        question: "Czy musicie być w Mogilnie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["znin", "inowroclaw", "radziejow", "gniezno", "bydgoszcz"],
  },
  {
    slug: "znin",
    name: "Żnin",
    nameGenitive: "Żnina",
    nameLocative: "Żninie",
    voivodeship: "kujawsko-pomorskie",
    regionCluster: "kujawy",
    metaTitle: "Automatyzacja procesów w Żninie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Żnina: produkcja, handel i usługi Pałuk. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Żninie",
    heroLead:
      "Spinamy żnińskie procesy produkcyjne i handlowe, gdy lokalny rynek Pałuk wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Żnin to produkcja, handel i usługi na Pałukach, na południowy zachód od Bydgoszczy. Automatyzacja procesów w Żninie często dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty start, mierzalny efekt.",
    ],
    localContext:
      "Powiat żniński ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Żninie automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę błędów w B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia w jednym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla zespołu w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport sprzedaży",
        body: "Bez ręcznego Excela w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Żninie startujemy od procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "zni-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "zni-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "zni-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "zni-4",
        question: "Czy musicie być w Żninie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["mogilno", "naklo-nad-notecia", "inowroclaw", "bydgoszcz", "gniezno"],
  },
];
