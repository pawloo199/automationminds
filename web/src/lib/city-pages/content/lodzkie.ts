import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Łódzkiego oraz Skierniewice (bez Łodzi i Piotrkowa Trybunalskiego). */
export const lodzkiePowiatCities: CityPageContent[] = [
  {
    slug: "pabianice",
    name: "Pabianice",
    nameGenitive: "Pabianic",
    nameLocative: "Pabianicach",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Pabianicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pabianic: produkcja, handel i logistyka w pierścieniu Łodzi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Pabianicach",
    heroLead:
      "Porządkujemy pabianickie procesy produkcyjne i handlowe, gdy bliskość Łodzi podnosi tempo, a biuro zostaje w tyle.",
    introParagraphs: [
      "Pabianice łączą produkcję, handel i logistykę w południowym pierścieniu Łodzi. Automatyzacja procesów w Pabianicach zwykle dotyczy zamówień, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Powiat pabianicki żyje bliskością Łodzi i ruchem towarowym. Typowy ból to ręczne potwierdzenia, rozjazd statusów i faktury doganiające wysyłkę.",
    whyHere:
      "W Pabianicach automatyzacja wyrównuje tempo obsługi wobec klientów z Łodzi bez liniowego wzrostu etatów.",
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
      "W Pabianicach zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "pab-1",
        question: "Czy automatyzacja ma sens blisko Łodzi?",
        answer:
          "Właśnie wtedy. Klienci oczekują tempa stolicy regionu, a lokalne biuro nie może rosnąć bez limitu.",
      },
      {
        id: "pab-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "pab-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od zamówień, faktur albo statusów realizacji, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "pab-4",
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
    nearbyCitySlugs: ["lodz", "lask", "zdunska-wola", "piotrkow-trybunalski", "zgierz"],
  },
  {
    slug: "zgierz",
    name: "Zgierz",
    nameGenitive: "Zgierza",
    nameLocative: "Zgierzu",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Zgierzu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Zgierza: produkcja, handel i logistyka północnego pierścienia Łodzi. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Zgierzu",
    heroLead:
      "Spinamy zgierskie procesy, gdy lokalna produkcja i handel muszą doganiać tempo Łodzi.",
    introParagraphs: [
      "Zgierz to produkcja, handel i logistyka na północ od Łodzi. Automatyzacja procesów w Zgierzu często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt, jasna instrukcja.",
    ],
    localContext:
      "Powiat zgierski ma firmy rosnące wraz z aglomeracją. Typowy ból to ręczne potwierdzenia, brak jednego statusu zlecenia i opóźnione faktury.",
    whyHere:
      "W Zgierzu automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych spraw.",
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
        title: "Logistyka",
        body: "Awizacje i powiadomienia o odchyleniach.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status w przewidywalnym obiegu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali i biura w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu realizacji w przewidywalnym obiegu.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast Excela.",
      },
    ],
    howWeWork:
      "W Zgierzu startujemy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "zgi-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu.",
      },
      {
        id: "zgi-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "zgi-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "zgi-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["lodz", "lowicz", "leczyca", "brzeziny", "kutno"],
  },
  {
    slug: "brzeziny",
    name: "Brzeziny",
    nameGenitive: "Brzezin",
    nameLocative: "Brzezinach",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Brzezinach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Brzezin: handel, usługi i produkcja wschodniego pierścienia Łodzi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Brzezinach",
    heroLead:
      "Pomagamy brzezińskim firmom uporządkować dokumenty i statusy bez dokładania etatów.",
    introParagraphs: [
      "Brzeziny łączą handel, usługi i produkcję na wschód od Łodzi. Automatyzacja procesów w Brzezinach zwykle dotyczy zamówień, zapytań i faktur.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat brzeziński ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Brzezinach automatyzacja oddaje czas zespołowi i wyrównuje tempo wobec klientów z Łodzi.",
    focusIndustries: [
      {
        title: "Handel i usługi",
        body: "Zapytania, oferty i follow-up bez ginących maili.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka lokalna",
        body: "Awizacje i statusy dostaw w przewidywalnym obiegu.",
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
      "W Brzezinach zaczynamy od jednego obiegu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "brz-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "brz-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zespół dostaje jasną instrukcję wyjątków.",
      },
      {
        id: "brz-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "brz-4",
        question: "Czy musicie być w Brzezinach?",
        answer:
          "Nie. Standardem jest praca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lodz", "zgierz", "skierniewice", "tomaszow-mazowiecki", "rawa-mazowiecka"],
  },
  {
    slug: "lask",
    name: "Łask",
    nameGenitive: "Łasku",
    nameLocative: "Łasku",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Łasku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łasku: produkcja, handel i logistyka południowo-zachodniego pierścienia Łodzi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Łasku",
    heroLead:
      "Spinamy łaskie procesy produkcyjne i handlowe, gdy lokalny rynek wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Łask to produkcja, handel i logistyka na południowy zachód od Łodzi. Automatyzacja procesów w Łasku często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat łaski ma firmy z cienkim back-office. Typowy ból to ręczne potwierdzenia i brak wspólnego statusu zlecenia.",
    whyHere:
      "W Łasku automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę błędów w B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla handlu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia w przewidywalnym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury i raporty bez ręcznego zbierania danych.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie bez przepisywania w przewidywalnym obiegu.",
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
        title: "Raport",
        body: "Automatyczny zbiór KPI w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Łasku startujemy od procesu o największym chaosie. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "las-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "las-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "las-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "las-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["pabianice", "zdunska-wola", "sieradz", "lodz", "poddebice"],
  },
  {
    slug: "zdunska-wola",
    name: "Zduńska Wola",
    nameGenitive: "Zduńskiej Woli",
    nameLocative: "Zduńskiej Woli",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Zduńskiej Woli | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Zduńskiej Woli: produkcja, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Zduńskiej Woli",
    heroLead:
      "Porządkujemy zduńskowolskie procesy produkcyjne, gdy dokumenty i statusy muszą nadążyć za wysyłką.",
    introParagraphs: [
      "Zduńska Wola łączy produkcję, handel i logistykę w zachodniej części regionu łódzkiego. Automatyzacja procesów w Zduńskiej Woli zwykle dotyczy statusów zleceń, awizacji i faktur.",
      "Współpracujemy zdalnie. Najpierw proces krytyczny dla terminu.",
    ],
    localContext:
      "Powiat zduńskowolski ma zakłady i MŚP z presją na terminy. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Zduńskiej Woli automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i wyjątki jakościowe w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia w przewidywalnym obiegu.",
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
        title: "Awizacja",
        body: "Powiadomienia i eskalacje opóźnień.",
      },
      {
        title: "Status produkcji",
        body: "Widoczny dla handlu i biura w przewidywalnym obiegu.",
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
      "W Zduńskiej Woli zaczynamy od procesu wysyłkowego lub produkcyjnego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "zdw-1",
        question: "Czy to dla firm produkcyjnych?",
        answer:
          "Tak. Statusy i awizacje to częsty pierwszy etap.",
      },
      {
        id: "zdw-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie.",
      },
      {
        id: "zdw-3",
        question: "Ile trwa etap?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "zdw-4",
        question: "Czy musicie być w Zduńskiej Woli?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["lask", "sieradz", "pabianice", "lodz", "poddebice"],
  },
  {
    slug: "poddebice",
    name: "Poddębice",
    nameGenitive: "Poddębic",
    nameLocative: "Poddębicach",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Poddębicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Poddębic: handel, produkcja i usługi zachodniego pierścienia Łodzi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Poddębicach",
    heroLead:
      "Odciążamy poddębickie biura, gdy dokumenty nie nadążają za lokalnymi zleceniami.",
    introParagraphs: [
      "Poddębice to handel, produkcja i usługi na zachód od Łodzi. Automatyzacja procesów w Poddębicach często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty start.",
    ],
    localContext:
      "Powiat poddębicki ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Poddębicach automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Poddębicach zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "pod-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "pod-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "pod-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "pod-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lask", "zdunska-wola", "leczyca", "sieradz", "lodz"],
  },
  {
    slug: "kutno",
    name: "Kutno",
    nameGenitive: "Kutna",
    nameLocative: "Kutnie",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Kutnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kutna: logistyka kolejowa, produkcja i handel. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kutnie",
    heroLead:
      "Pomagamy kutnowskim firmom spiąć awizacje i dokumenty, gdy węzeł kolejowy i A1 generują wolumen.",
    introParagraphs: [
      "Kutno to ważny węzeł logistyczny i produkcyjny północnej części województwa łódzkiego. Automatyzacja procesów w Kutnie zwykle dotyczy awizacji, statusów magazynowych, zamówień i faktur.",
      "Współpracujemy zdalnie. Najpierw proces krytyczny dla terminu dostawy.",
    ],
    localContext:
      "Powiat kutnowski żyje ruchem towarowym i firmami produkcyjnymi. Typowy ból to ręczne awizacje, rozjazd statusów i faktury doganiające wysyłkę.",
    whyHere:
      "W Kutnie automatyzacja broni terminów dostaw i skraca czas od zamówienia do rozliczenia.",
    focusIndustries: [
      {
        title: "Logistyka i magazyn",
        body: "Awizacje, sloty i wyjątki bez wieczornych telefonów.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń i gotowość wysyłki w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i limity w jednym torze.",
      },
      {
        title: "Back-office",
        body: "Faktury po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja dostawy",
        body: "Powiadomienia i eskalacje opóźnień.",
      },
      {
        title: "Status magazynu",
        body: "Jedna prawda dla operacji i biura w przewidywalnym obiegu.",
      },
      {
        title: "Zamówienie B2B",
        body: "Potwierdzenie bez ręcznego przepisywania.",
      },
      {
        title: "Fakturowanie po wysyłce",
        body: "Trigger, gdy dokumenty są kompletne.",
      },
    ],
    howWeWork:
      "W Kutnie startujemy od procesu wysyłkowego lub magazynowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "kut-1",
        question: "Czy to dla firm logistycznych przy węźle?",
        answer:
          "Tak. Awizacje i statusy to częsty pierwszy etap.",
      },
      {
        id: "kut-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Budujemy warstwę obok. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "kut-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "kut-4",
        question: "Czy musicie być w Kutnie?",
        answer:
          "Nie. Standardem jest praca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["leczyca", "lowicz", "zgierz", "plock", "lodz"],
  },
  {
    slug: "leczyca",
    name: "Łęczyca",
    nameGenitive: "Łęczycy",
    nameLocative: "Łęczycy",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Łęczycy | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łęczycy: produkcja, handel i usługi północnej części regionu. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Łęczycy",
    heroLead:
      "Spinamy łęczyckie procesy, gdy lokalne MŚP potrzebują sprawnego biura bez rozrostu etatów.",
    introParagraphs: [
      "Łęczyca to produkcja, handel i usługi na północ od Łodzi. Automatyzacja procesów w Łęczycy często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat łęczycki ma firmy z cienkim back-office. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Łęczycy automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy widoczne dla handlu w przewidywalnym obiegu.",
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
        title: "Status zlecenia",
        body: "Jedna prawda dla zespołu w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Dane zbierane automatycznie, bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Łęczycy zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lec-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lec-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "lec-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "lec-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["kutno", "zgierz", "poddebice", "lowicz", "lodz"],
  },
  {
    slug: "lowicz",
    name: "Łowicz",
    nameGenitive: "Łowicza",
    nameLocative: "Łowiczu",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Łowiczu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łowicza: produkcja spożywcza, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Łowiczu",
    heroLead:
      "Porządkujemy łowickie procesy produkcyjne i handlowe, gdy dokumenty jakości nie mogą tonąć w mailach.",
    introParagraphs: [
      "Łowicz łączy produkcję, często spożywczą, z handlem i usługami między Łodzią a Warszawą. Automatyzacja procesów w Łowiczu zwykle dotyczy partii, zamówień i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat łowicki ma zakłady i MŚP z presją na jakość danych. Typowy ból to ręczne protokoły i faktury doganiające wysyłkę.",
    whyHere:
      "W Łowiczu automatyzacja chroni jakość dokumentacji i skraca cykl od zamówienia do faktury.",
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
        body: "Zlecenia i follow-up w przewidywalnym obiegu.",
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
      "W Łowiczu zaczynamy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "low-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy dokumenty.",
      },
      {
        id: "low-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego toru dokumentów.",
      },
      {
        id: "low-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "low-4",
        question: "Czy musicie być w Łowiczu?",
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
    nearbyCitySlugs: ["kutno", "skierniewice", "zgierz", "sochaczew", "lodz"],
  },
  {
    slug: "skierniewice",
    name: "Skierniewice",
    nameGenitive: "Skierniewic",
    nameLocative: "Skierniewicach",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Skierniewicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Skierniewic: handel, usługi, produkcja między Łodzią a Warszawą. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Skierniewicach",
    heroLead:
      "Wspieramy skierniewickie firmy w porządkowaniu sprzedaży i operacji, gdy położenie między dwoma aglomeracjami podnosi tempo.",
    introParagraphs: [
      "Skierniewice to ośrodek handlu, usług i produkcji między Łodzią a Warszawą. Automatyzacja procesów w Skierniewicach sprawdza się, gdy zamówienia, statusy i faktury nie mogą żyć w trzech osobnych Excelach.",
      "Pracujemy zdalnie: od mapy procesu po działające integracje. Liczy się mniej ręcznej pracy i mniej błędów w dokumentach.",
    ],
    localContext:
      "Miasto i powiat łączą obsługę B2B z obu kierunków aglomeracyjnych. Typowy obraz: solidny system księgowy, CRM niedokończony i operacje w arkuszach.",
    whyHere:
      "W Skierniewicach automatyzacja pomaga rosnąć bez proporcjonalnego wzrostu administracji wobec klientów z Łodzi i Warszawy.",
    focusIndustries: [
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw.",
      },
      {
        title: "Usługi profesjonalne",
        body: "Ścieżka od briefu po fakturę i follow-up.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń między halą a biurem.",
      },
      {
        title: "Finanse i controlling",
        body: "Skracamy zamknięcie miesiąca w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie od oferty do FV",
        body: "Mniej ręcznego przepisywania pozycji i statusów.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje, limity i archiwum w przewidywalnym obiegu.",
      },
      {
        title: "Lejek sprzedaży",
        body: "CRM z przypomnieniami w przewidywalnym obiegu.",
      },
      {
        title: "HR operacyjny",
        body: "Wnioski i onboarding w prostym obiegu.",
      },
    ],
    howWeWork:
      "W Skierniewicach startujemy od konkretnego bólu, zwykle sprzedaży, faktur albo statusów. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "ski-1",
        question: "Czy automatyzacja sprawdzi się w firmie rodzinnej?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "ski-2",
        question: "Czy integrujecie polskie systemy księgowe i CRM?",
        answer:
          "Łączymy to, do czego jest bezpieczny dostęp. Dobieramy metodę pod Wasz stack.",
      },
      {
        id: "ski-3",
        question: "Czy potrzebujemy biura projektu w Skierniewicach?",
        answer:
          "Nie. Pracujemy zdalnie i hybrydowo. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "ski-4",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od procesu z największym chaosem: faktury, zamówienia albo leady.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lowicz", "rawa-mazowiecka", "brzeziny", "warszawa", "lodz"],
  },
  {
    slug: "rawa-mazowiecka",
    name: "Rawa Mazowiecka",
    nameGenitive: "Rawy Mazowieckiej",
    nameLocative: "Rawie Mazowieckiej",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Rawie Mazowieckiej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Rawy Mazowieckiej: handel, produkcja i usługi wschodniej części regionu. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Rawie Mazowieckiej",
    heroLead:
      "Odciążamy rawskie biura, gdy lokalny rynek i bliskość Mazowsza wymagają sprawnych statusów.",
    introParagraphs: [
      "Rawa Mazowiecka to handel, produkcja i usługi we wschodniej części województwa łódzkiego. Automatyzacja procesów w Rawie Mazowieckiej zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat rawski ma MŚP z cienkim biurem i kontaktami w stronę Warszawy. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Rawie Mazowieckiej automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
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
      "W Rawie Mazowieckiej zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "raw-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "raw-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "raw-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "raw-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["skierniewice", "tomaszow-mazowiecki", "brzeziny", "warszawa", "lodz"],
  },
  {
    slug: "tomaszow-mazowiecki",
    name: "Tomaszów Mazowiecki",
    nameGenitive: "Tomaszowa Mazowieckiego",
    nameLocative: "Tomaszowie Mazowieckim",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Tomaszowie Mazowieckim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Tomaszowa Mazowieckiego: produkcja, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Tomaszowie Mazowieckim",
    heroLead:
      "Porządkujemy tomaszowskie procesy produkcyjne i handlowe między Łodzią a Piotrkowem.",
    introParagraphs: [
      "Tomaszów Mazowiecki łączy produkcję, handel i logistykę we wschodniej części regionu. Automatyzacja procesów w Tomaszowie Mazowieckim często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat tomaszowski ma zakłady i MŚP z cienkim biurem. Typowy ból to ręczne statusy i dokumenty z opóźnieniem.",
    whyHere:
      "W Tomaszowie Mazowieckim automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę błędów w B2B.",
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
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia w jednym obiegu.",
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
      "W Tomaszowie Mazowieckim startujemy od procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "tom-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "tom-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "tom-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "tom-4",
        question: "Czy musicie być w Tomaszowie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["piotrkow-trybunalski", "opoczno", "brzeziny", "rawa-mazowiecka", "lodz"],
  },
  {
    slug: "opoczno",
    name: "Opoczno",
    nameGenitive: "Opoczna",
    nameLocative: "Opocznie",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Opocznie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Opoczna: produkcja, handel i logistyka południowo-wschodniego Łódzkiego. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Opocznie",
    heroLead:
      "Spinamy opoczyńskie procesy produkcyjne, gdy dokumenty i statusy muszą nadążyć za wysyłką.",
    introParagraphs: [
      "Opoczno to produkcja, handel i logistyka na południowym wschodzie regionu. Automatyzacja procesów w Opocznie zwykle dotyczy statusów zleceń, awizacji i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat opoczyński ma zakłady z presją na terminy. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Opocznie automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury.",
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
      "W Opocznie zaczynamy od procesu wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "opo-1",
        question: "Czy to dla firm produkcyjnych?",
        answer:
          "Tak. Statusy i awizacje to częsty pierwszy etap.",
      },
      {
        id: "opo-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "opo-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "opo-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["tomaszow-mazowiecki", "piotrkow-trybunalski", "radomsko", "kielce", "radom"],
  },
  {
    slug: "radomsko",
    name: "Radomsko",
    nameGenitive: "Radomska",
    nameLocative: "Radomsku",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Radomsku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Radomska: produkcja, handel i logistyka południowego Łódzkiego. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Radomsku",
    heroLead:
      "Porządkujemy radomszczańskie procesy produkcyjne i handlowe przy południowej granicy regionu.",
    introParagraphs: [
      "Radomsko łączy produkcję, handel i logistykę na południu województwa łódzkiego. Automatyzacja procesów w Radomsku często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat radomszczański ma zakłady i MŚP z kontaktami w stronę Częstochowy i Piotrkowa. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Radomsku automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych bez rozrostu biura.",
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
        body: "Faktury i raporty bez ręcznego zbierania danych.",
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
      "W Radomsku startujemy od procesu zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "rad-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "rad-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "rad-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "rad-4",
        question: "Czy musicie być w Radomsku?",
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
    nearbyCitySlugs: ["piotrkow-trybunalski", "belchatow", "opoczno", "czestochowa", "pajeczno"],
  },
  {
    slug: "belchatow",
    name: "Bełchatów",
    nameGenitive: "Bełchatowa",
    nameLocative: "Bełchatowie",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Bełchatowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Bełchatowa: energetyka, przemysł, handel i usługi. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Bełchatowie",
    heroLead:
      "Wspieramy bełchatowskie firmy w porządkowaniu raportów, dokumentów i operacji, gdy transformacja i przemysł wymagają porządku w danych.",
    introParagraphs: [
      "Bełchatów to ośrodek energetyczny i przemysłowy południowego Łódzkiego, z zapleczem usług i handlu. Automatyzacja procesów w Bełchatowie zwykle dotyczy raportowania, obiegu dokumentów, statusów zleceń i faktur.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres i szkolimy osoby odpowiedzialne za wyjątki.",
    ],
    localContext:
      "Region łączy projekty wieloletnie, dostawców przemysłowych i MŚP. Typowy ból to ręczne śledzenie statusów, dokumentów i terminów przy ograniczonym zapleczu administracyjnym.",
    whyHere:
      "W Bełchatowie automatyzacja opłaca się, gdy raporty i dokumenty powstają z jednego źródła prawdy, a nie z heroizmu biura.",
    focusIndustries: [
      {
        title: "Energetyka i projekty przemysłowe",
        body: "Checklisty dokumentów, terminy i statusy.",
      },
      {
        title: "Produkcja i utrzymanie ruchu",
        body: "Zgłoszenia, części i protokoły w przewidywalnym obiegu.",
      },
      {
        title: "Usługi dla przemysłu",
        body: "Oferty, harmonogramy i rozliczenia.",
      },
      {
        title: "Handel i logistyka",
        body: "Zamówienia, awizacje i faktury w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Obieg dokumentów projektowych",
        body: "Wersje, zatwierdzenia i przypomnienia.",
      },
      {
        title: "Raporty operacyjne",
        body: "Automatyczne zbieranie KPI zamiast ręcznego składania.",
      },
      {
        title: "Zamówienia MRO",
        body: "Od zapotrzebowania po dostawę w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie realizacji w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "Z firmami z Bełchatowa startujemy od procesu o najwyższym koszcie opóźnień, często raportów albo obiegu dokumentów. Wdrażamy zdalnie.",
    faq: [
      {
        id: "bel-1",
        question: "Czy automatyzacja dotyczy tylko energetyki?",
        answer:
          "Nie. Wspieramy też przemysł, logistykę i usługi B2B w regionie.",
      },
      {
        id: "bel-2",
        question: "Czy potrzebujemy osobnego działu IT?",
        answer:
          "Nie. Projektujemy pod utrzymanie przez zespół biznesowy z dokumentacją.",
      },
      {
        id: "bel-3",
        question: "Jak łączycie dane z wielu źródeł?",
        answer:
          "Budujemy warstwę agregacji z API, plików lub formularzy.",
      },
      {
        id: "bel-4",
        question: "Czy pracujecie stacjonarnie w Bełchatowie?",
        answer:
          "Nie. Standardem jest współpraca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["piotrkow-trybunalski", "radomsko", "pajeczno", "lask", "lodz"],
  },
  {
    slug: "pajeczno",
    name: "Pajęczno",
    nameGenitive: "Pajęczna",
    nameLocative: "Pajęcznie",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Pajęcznie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pajęczna: produkcja, handel i usługi południowo-zachodniego Łódzkiego. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Pajęcznie",
    heroLead:
      "Pomagamy pajęczańskim firmom uporządkować zamówienia i dokumenty bez rozrostu biura.",
    introParagraphs: [
      "Pajęczno to produkcja, handel i usługi w południowo-zachodniej części regionu. Automatyzacja procesów w Pajęcznie zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat pajęczański ma MŚP z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Pajęcznie automatyzacja skraca czas od zlecenia do faktury.",
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
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Pajęcznie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "paj-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "paj-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "paj-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "paj-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["belchatow", "radomsko", "wielun", "sieradz", "czestochowa"],
  },
  {
    slug: "sieradz",
    name: "Sieradz",
    nameGenitive: "Sieradza",
    nameLocative: "Sieradzu",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Sieradzu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sieradza: produkcja, handel i logistyka zachodniego Łódzkiego. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Sieradzu",
    heroLead:
      "Porządkujemy sieradzkie procesy produkcyjne i handlowe, gdy lokalny rynek wymaga sprawnych statusów.",
    introParagraphs: [
      "Sieradz to produkcja, handel i logistyka na zachodzie województwa łódzkiego. Automatyzacja procesów w Sieradzu często dotyczy zamówień, awizacji i faktur.",
      "Współpracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat sieradzki łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Sieradzu automatyzacja broni terminów i skraca rozliczenia.",
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
        body: "Potwierdzenie widoczne dla magazynu.",
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
      "W Sieradzu zaczynamy od procesu zamówieniowego lub wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "sie-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "sie-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "sie-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "sie-4",
        question: "Czy musicie być w Sieradzu?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["zdunska-wola", "lask", "wielun", "wieruszow", "kalisz"],
  },
  {
    slug: "wielun",
    name: "Wieluń",
    nameGenitive: "Wielunia",
    nameLocative: "Wieluniu",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Wieluniu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wielunia: produkcja, handel i usługi południowo-zachodniego Łódzkiego. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Wieluniu",
    heroLead:
      "Spinamy wieluńskie procesy, gdy lokalna produkcja i handel wymagają sprawnego biura.",
    introParagraphs: [
      "Wieluń łączy produkcję, handel i usługi w południowo-zachodniej części regionu. Automatyzacja procesów w Wieluniu zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, jasna instrukcja.",
    ],
    localContext:
      "Powiat wieluński ma MŚP z cienkim back-office i kontaktami w stronę Kalisza oraz Częstochowy. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Wieluniu automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
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
        body: "Zlecenia, protokoły i rozliczenia w jednym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury i raporty bez ręcznego zbierania danych.",
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
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Wieluniu startujemy od procesu o największym chaosie. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "wie-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "wie-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "wie-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "wie-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["sieradz", "wieruszow", "pajeczno", "kalisz", "czestochowa"],
  },
  {
    slug: "wieruszow",
    name: "Wieruszów",
    nameGenitive: "Wieruszowa",
    nameLocative: "Wieruszowie",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Wieruszowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wieruszowa: produkcja, handel i logistyka przy zachodniej granicy regionu. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Wieruszowie",
    heroLead:
      "Pomagamy wieruszowskim firmom spiąć zamówienia z fakturami przy styku z Wielkopolską.",
    introParagraphs: [
      "Wieruszów to produkcja, handel i logistyka przy zachodniej granicy województwa łódzkiego. Automatyzacja procesów w Wieruszowie często dotyczy zamówień, awizacji i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat wieruszowski ma MŚP z kontaktami w stronę Kalisza i Ostrowa. Typowy ból to ręczne statusy i dokumenty z opóźnieniem.",
    whyHere:
      "W Wieruszowie automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
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
        body: "Powiadomienia i eskalacje opóźnień.",
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
      "W Wieruszowie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "wir-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od procesu o wysokim koszcie chaosu.",
      },
      {
        id: "wir-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "wir-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "wir-4",
        question: "Czy musicie być w Wieruszowie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["wielun", "sieradz", "kalisz", "ostrow-wielkopolski", "kepno"],
  },
];
