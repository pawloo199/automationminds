import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Wielkopolski (bez miast już w katalogu). */
export const wielkopolskaPowiatCities: CityPageContent[] = [
  {
    slug: "gniezno",
    name: "Gniezno",
    nameGenitive: "Gniezna",
    nameLocative: "Gnieźnie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Gnieźnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Gniezna: produkcja, handel i usługi wschodniego pierścienia Poznania. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Gnieźnie",
    heroLead:
      "Porządkujemy gnieźnieńskie procesy produkcyjne i handlowe, gdy bliskość Poznania podnosi tempo, a biuro zostaje w tyle.",
    introParagraphs: [
      "Gniezno łączy produkcję, handel i usługi między Poznaniem a wschodnią Wielkopolską. Automatyzacja procesów w Gnieźnie zwykle dotyczy zamówień, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Powiat gnieźnieński ma firmy rosnące wraz z pierścieniem stolicy regionu. Typowy ból to ręczne potwierdzenia, opóźnione faktury i brak jednego statusu zlecenia.",
    whyHere:
      "W Gnieźnie automatyzacja wyrównuje tempo obsługi wobec klientów z Poznania bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity kredytowe i statusy dostaw w jednym torze.",
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
      "W Gnieźnie zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "gni-1",
        question: "Czy automatyzacja ma sens blisko Poznania?",
        answer:
          "Właśnie wtedy. Klienci z Poznania i regionu oczekują tempa bez usprawiedliwień o odległość.",
      },
      {
        id: "gni-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "gni-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od zamówień, faktur albo statusów realizacji, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "gni-4",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["poznan", "wrzesnia", "wagrowiec", "sroda-wielkopolska", "konin"],
  },
  {
    slug: "sroda-wielkopolska",
    name: "Środa Wielkopolska",
    nameGenitive: "Środy Wielkopolskiej",
    nameLocative: "Środzie Wielkopolskiej",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Środzie Wielkopolskiej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Środy Wielkopolskiej: produkcja, logistyka i handel. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Środzie Wielkopolskiej",
    heroLead:
      "Spinamy procesy firm ze Środy Wielkopolskiej, gdy dojazd do Poznania jest krótki, a dokumenty nadal żyją w mailach.",
    introParagraphs: [
      "Środa Wielkopolska to produkcja, logistyka i handel w południowo-wschodnim pierścieniu Poznania. Automatyzacja procesów w Środzie Wielkopolskiej często dotyczy awizacji, zamówień i faktur.",
      "Pracujemy zdalnie. Wąski zakres, mierzalny efekt.",
    ],
    localContext:
      "Powiat średzki łączy zakłady z firmami usługowymi dla aglomeracji. Typowy ból to ręczne statusy magazynu i opóźnione fakturowanie po wysyłce.",
    whyHere:
      "W Środzie Wielkopolskiej automatyzacja broni terminów wobec klientów z Poznania i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja",
        body: "Sloty, powiadomienia i eskalacje opóźnień.",
      },
      {
        title: "Status magazynu",
        body: "Stan i rezerwacje widoczne bez ręcznych tabel.",
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
      "W Środzie Wielkopolskiej startujemy od procesu wysyłkowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "sro-1",
        question: "Czy automatyzujecie awizacje?",
        answer:
          "Tak. To częsty pierwszy etap To częsty start u firm z Środy Wielkopolskiej.",
      },
      {
        id: "sro-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "sro-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni. Zakres ustalamy po krótkiej diagnozie.",
      },
      {
        id: "sro-4",
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
    nearbyCitySlugs: ["poznan", "srem", "jarocin", "wrzesnia", "gniezno"],
  },
  {
    slug: "srem",
    name: "Śrem",
    nameGenitive: "Śremu",
    nameLocative: "Śremie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Śremie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Śremu: produkcja, handel i usługi południowego pierścienia Poznania. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Śremie",
    heroLead:
      "Porządkujemy śremskie procesy produkcyjne i biurowe, gdy lokalny przemysł potrzebuje sprawnych statusów.",
    introParagraphs: [
      "Śrem to produkcja, handel i usługi na południe od Poznania. Automatyzacja procesów w Śremie zwykle dotyczy statusów zleceń, jakości i faktur.",
      "Współpracujemy zdalnie. Najpierw proces o najwyższym koszcie chaosu.",
    ],
    localContext:
      "Powiat śremski ma zakłady i MŚP z cienkim back-office. Typowy ból to ręczne raporty zmianowe i faktury doganiające realizację.",
    whyHere:
      "W Śremie automatyzacja chroni marżę przy rosnącym B2B i zmniejsza liczbę godzin na poprawki dokumentów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "HR",
        body: "Wnioski, ewidencja i onboarding w prostym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Status zlecenia",
        body: "Jedna prawda dla hali i biura zamiast telefonów.",
      },
      {
        title: "Reklamacja",
        body: "Numer sprawy, terminy i historia działań.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport zmianowy",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Śremie zaczynamy od konsultacji i jednego procesu. Wdrażamy zdalnie, etapami.",
    faq: [
      {
        id: "sre-1",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "sre-2",
        question: "Czy musicie być na hali?",
        answer:
          "Tylko gdy realnie pomaga mapowaniu. Standardem pozostaje praca zdalna.",
      },
      {
        id: "sre-3",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "sre-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut. Potem propozycja wąskiego zakresu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["poznan", "sroda-wielkopolska", "koscian", "gostyn", "jarocin"],
  },
  {
    slug: "oborniki",
    name: "Oborniki",
    nameGenitive: "Obornik",
    nameLocative: "Obornikach",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Obornikach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Obornik: produkcja, handel i logistyka północnego pierścienia Poznania. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Obornikach",
    heroLead:
      "Pomagamy obornickim firmom spiąć magazyn z biurem, gdy trasa na Poznań generuje wolumen zamówień.",
    introParagraphs: [
      "Oborniki leżą na północnym pierścieniu Poznania: produkcja, handel, logistyka. Automatyzacja procesów w Obornikach często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Krótka diagnoza, konkretny zakres.",
    ],
    localContext:
      "Powiat obornicki ma firmy powiązane z aglomeracją. Typowy ból to ręczne potwierdzenia i rozjazd stanów ze sprzedażą.",
    whyHere:
      "W Obornikach automatyzacja skraca czas od zamówienia do wysyłki z kompletem dokumentów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        body: "Sloty, powiadomienia i eskalacje opóźnień.",
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
      "W Obornikach startujemy od procesu zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "obo-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "obo-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "obo-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "obo-4",
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
    nearbyCitySlugs: ["poznan", "szamotuly", "wagrowiec", "czarnkow", "gniezno"],
  },
  {
    slug: "szamotuly",
    name: "Szamotuły",
    nameGenitive: "Szamotuł",
    nameLocative: "Szamotułach",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Szamotułach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Szamotuł: produkcja, handel i usługi północno-zachodniego pierścienia Poznania. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Szamotułach",
    heroLead:
      "Odciążamy szamotulskie biura, gdy lokalny handel i produkcja mnożą dokumenty bez dokładania etatów.",
    introParagraphs: [
      "Szamotuły to produkcja, handel i usługi na północny zachód od Poznania. Automatyzacja procesów w Szamotułach zwykle dotyczy zamówień, faktur i follow-upu.",
      "Współpracujemy zdalnie. Prosty start, utrzymanie po stronie zespołu.",
    ],
    localContext:
      "Powiat szamotulski ma MŚP z cienką administracją. Typowy ból to ginące maile i faktury wystawiane z opóźnieniem.",
    whyHere:
      "W Szamotułach automatyzacja oddaje czas właścicielowi i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
      },
    ],
    focusProcesses: [
      {
        title: "Oferta",
        body: "CRM z przypomnieniem follow-upu.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
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
      "W Szamotułach zaczynamy od procesu, który najbardziej zabiera czas. Wdrażamy zdalnie.",
    faq: [
      {
        id: "sza-1",
        question: "Czy to dla firm rodzinnych?",
        answer:
          "Tak. Często tam zwrot jest najszybszy To częsty start u firm z Szamotuł.",
      },
      {
        id: "sza-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę utrzymania. Zespół dostaje instrukcję i jasne wyjątki.",
      },
      {
        id: "sza-3",
        question: "Jak wyceniacie?",
        answer:
          "Po analizie: jasny zakres. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "sza-4",
        question: "Czy musicie być w Szamotułach?",
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
    nearbyCitySlugs: ["poznan", "oborniki", "nowy-tomysl", "miedzychod", "wolsztyn"],
  },
  {
    slug: "nowy-tomysl",
    name: "Nowy Tomyśl",
    nameGenitive: "Nowego Tomyśla",
    nameLocative: "Nowym Tomyślu",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Nowym Tomyślu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Nowego Tomyśla: produkcja, handel i logistyka. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Nowym Tomyślu",
    heroLead:
      "Spinamy nowotomyskie procesy, gdy lokalna produkcja i handel wymagają sprawnych statusów bez rozrostu biura.",
    introParagraphs: [
      "Nowy Tomyśl to produkcja, handel i usługi w powiecie nowotomyskim. Automatyzacja procesów w Nowym Tomyślu często dotyczy zamówień, magazynu i faktur.",
      "Pracujemy zdalnie. Wąski zakres z mierzalnym efektem.",
    ],
    localContext:
      "Powiat nowotomyski łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy i opóźnione dokumenty wysyłkowe.",
    whyHere:
      "W Nowym Tomyślu automatyzacja skraca ścieżkę od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        title: "Wysyłka",
        body: "Dokumenty kompletne przed załadunkiem.",
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
      "W Nowym Tomyślu startujemy od procesu wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "nto-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "nto-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "nto-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "nto-4",
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
    nearbyCitySlugs: ["poznan", "grodzisk-wielkopolski", "wolsztyn", "szamotuly", "leszno"],
  },
  {
    slug: "grodzisk-wielkopolski",
    name: "Grodzisk Wielkopolski",
    nameGenitive: "Grodziska Wielkopolskiego",
    nameLocative: "Grodzisku Wielkopolskim",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Grodzisku Wielkopolskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Grodziska Wielkopolskiego: produkcja, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Grodzisku Wielkopolskim",
    heroLead:
      "Porządkujemy grodziskie procesy produkcyjne i handlowe na zachodnim pierścieniu Poznania.",
    introParagraphs: [
      "Grodzisk Wielkopolski łączy produkcję, handel i usługi. Automatyzacja procesów w Grodzisku Wielkopolskim zwykle dotyczy statusów zleceń, zamówień i faktur.",
      "Współpracujemy zdalnie. Najpierw proces, potem narzędzie.",
    ],
    localContext:
      "Powiat grodziski ma firmy powiązane z Poznaniem i zachodnią Wielkopolską. Typowy ból to ręczne raporty i opóźnione faktury.",
    whyHere:
      "W Grodzisku Wielkopolskim automatyzacja broni terminów i zmniejsza koszt ręcznej koordynacji.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "HR",
        body: "Wnioski, ewidencja i onboarding w prostym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Status zlecenia",
        body: "Jedna prawda dla hali i biura zamiast telefonów.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
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
      "W Grodzisku Wielkopolskim zaczynamy od konsultacji i jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "grw-1",
        question: "Czy to dla MŚP?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "grw-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "grw-3",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut pozwala ocenić sens startu bez zobowiązań.",
      },
      {
        id: "grw-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["poznan", "nowy-tomysl", "wolsztyn", "koscian", "leszno"],
  },
  {
    slug: "wrzesnia",
    name: "Września",
    nameGenitive: "Wrześni",
    nameLocative: "Wrześni",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Wrześni | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wrześni: produkcja, automotive-adjacent, handel i logistyka. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Wrześni",
    heroLead:
      "Pomagamy wrzesińskim zakładom i dostawcom spiąć produkcję z biurem, gdy terminy odbiorców nie wybaczą chaosu w danych.",
    introParagraphs: [
      "Września to silny ośrodek produkcyjny i logistyczny na wschód od Poznania. Automatyzacja procesów we Wrześni często dotyczy statusów zleceń, jakości i awizacji.",
      "Pracujemy zdalnie. Zakres pod realne terminy klienta, nie pod slajd transformacji.",
    ],
    localContext:
      "Powiat wrzesiński łączy produkcję z firmami w łańcuchu dostaw. Typowy ból to ręczne protokoły, rozjazd planowania ze sprzedażą i opóźnione powiadomienia.",
    whyHere:
      "We Wrześni automatyzacja broni terminów wobec odbiorców B2B i skraca czas reakcji na wyjątek jakości.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Dostawcy",
        body: "Dokumentacja i eskalacje w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "HR zmianowy",
        body: "Wnioski i onboarding przy pracy zmianowej.",
      },
    ],
    focusProcesses: [
      {
        title: "Status zlecenia",
        body: "Jedna prawda dla hali i biura zamiast telefonów.",
      },
      {
        title: "Protokół jakości",
        body: "Terminy, przypomnienia i archiwum.",
      },
      {
        title: "Awizacja",
        body: "Sloty, powiadomienia i eskalacje opóźnień.",
      },
      {
        title: "Raport KPI",
        body: "Zbieranie wskaźników bez ręcznego składania w piątek.",
      },
    ],
    howWeWork:
      "We Wrześni startujemy od procesu krytycznego dla klienta. Wdrażamy zdalnie, z testami na realnych zleceniach.",
    faq: [
      {
        id: "wrz-1",
        question: "Czy automatyzujecie procesy produkcyjne?",
        answer:
          "Spinamy dane między halą a biurem: statusy, protokoły i raporty bez ręcznego składania.",
      },
      {
        id: "wrz-2",
        question: "Czy wymieniacie MES?",
        answer:
          "Nie z marszu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "wrz-3",
        question: "Ile trwa etap?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni. Zakres ustalamy po krótkiej diagnozie.",
      },
      {
        id: "wrz-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["poznan", "gniezno", "sroda-wielkopolska", "slupca", "konin"],
  },
  {
    slug: "wolsztyn",
    name: "Wolsztyn",
    nameGenitive: "Wolsztyna",
    nameLocative: "Wolsztynie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Wolsztynie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wolsztyna: produkcja, handel, turystyka i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Wolsztynie",
    heroLead:
      "Porządkujemy wolsztyńskie procesy, gdy lokalny handel i sezon turystyczny mnożą dokumenty w małym biurze.",
    introParagraphs: [
      "Wolsztyn łączy produkcję, handel, usługi i ruch związany z turystyką kolejową. Automatyzacja procesów w Wolsztynie często dotyczy zamówień, faktur i obsługi zapytań.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do MŚP.",
    ],
    localContext:
      "Powiat wolsztyński ma firmy z cienką administracją i sezonowymi skokami ruchu. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Wolsztynie automatyzacja oddaje czas biuru i zmniejsza liczbę niedomkniętych spraw w szczycie.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Turystyka i usługi",
        body: "Rezerwacje, potwierdzenia i dokumenty dla gości oraz B2B.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie",
        body: "Kolejka leadów zamiast ginącej skrzynki.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Przypomnienie płatności",
        body: "Automatyczne przypomnienia według reguł.",
      },
    ],
    howWeWork:
      "W Wolsztynie zaczynamy od procesu, który generuje najwięcej maili. Wdrażamy zdalnie.",
    faq: [
      {
        id: "wol-1",
        question: "Czy automatyzacja pomoże małej firmie usługowej?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "wol-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę utrzymania. Zespół dostaje instrukcję i jasne wyjątki.",
      },
      {
        id: "wol-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "wol-4",
        question: "Czy musicie być w Wolsztynie?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["nowy-tomysl", "grodzisk-wielkopolski", "leszno", "szamotuly", "poznan"],
  },
  {
    slug: "miedzychod",
    name: "Międzychód",
    nameGenitive: "Międzychodu",
    nameLocative: "Międzychodzie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Międzychodzie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Międzychodu: handel, usługi, turystyka i produkcja. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Międzychodzie",
    heroLead:
      "Odciążamy międzychodzkie biura, gdy sezon nad Jeziorami i lokalny handel mnożą dokumenty.",
    introParagraphs: [
      "Międzychód to handel, usługi, turystyka i lokalna produkcja na zachodzie Wielkopolski. Automatyzacja procesów w Międzychodzie zwykle dotyczy rezerwacji, faktur i zamówień.",
      "Pracujemy zdalnie. Idealnie mapujemy poza sezonem.",
    ],
    localContext:
      "Powiat międzychodzki żyje sezonowością i lokalnym rynkiem. Typowy ból to ręczne potwierdzenia i faktury doganiające sezon.",
    whyHere:
      "W Międzychodzie automatyzacja sprawia, że sezon nie wypala małego zespołu.",
    focusIndustries: [
      {
        title: "Turystyka",
        body: "Rezerwacje, potwierdzenia i dokumenty dla gości oraz B2B.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń i dokumenty dla lokalnych odbiorców.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja",
        body: "Potwierdzenie i dokumenty bez ręcznego przepisywania.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Zapytanie",
        body: "Kolejka leadów zamiast ginącej skrzynki.",
      },
      {
        title: "Raport sezonowy",
        body: "Dane sezonowe na bieżąco, nie po sezonie.",
      },
    ],
    howWeWork:
      "W Międzychodzie najlepiej zacząć poza szczytem. Konsultacja, mapa, wdrożenie przed sezonem.",
    faq: [
      {
        id: "mie-1",
        question: "Czy pomoże pensjonatowi lub firmie usługowej?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "mie-2",
        question: "Czy ma sens poza sezonem?",
        answer:
          "Tak. Wtedy spokojnie mapuje się procesy To częsty start u firm z Międzychodu.",
      },
      {
        id: "mie-3",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "mie-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut pozwala ocenić sens startu bez zobowiązań.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["szamotuly", "nowy-tomysl", "pila", "poznan", "wolsztyn"],
  },
  {
    slug: "leszno",
    name: "Leszno",
    nameGenitive: "Leszna",
    nameLocative: "Lesznie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Lesznie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Leszna: produkcja, handel, logistyka i usługi. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Lesznie",
    heroLead:
      "Porządkujemy leszczyńskie procesy produkcyjne i biurowe, gdy południowa Wielkopolska wymaga tempa bez rozrostu administracji.",
    introParagraphs: [
      "Leszno to ośrodek produkcyjny, handlowy i usługowy południowej Wielkopolski. Automatyzacja procesów w Lesznie zwykle dotyczy zamówień, statusów realizacji, faktur i raportów.",
      "Współpracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne, szkolenie zespołu.",
    ],
    localContext:
      "Lokalny biznes łączy produkcję z firmami B2B obsługującymi region. Typowy ból to ręczne statusy, opóźnione faktury i raporty składane z kilku Exceli.",
    whyHere:
      "W Lesznie automatyzacja pozwala skalować obsługę bez liniowego wzrostu etatów biurowych.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel i dystrybucja",
        body: "Zamówienia, limity i statusy dostaw bez ręcznego przepisywania.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "HR i finanse",
        body: "Wnioski, ewidencja i onboarding w prostym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Lejek leadów",
        body: "Od formularza po CRM z przypomnieniami.",
      },
      {
        title: "Status zlecenia",
        body: "Jedna prawda dla hali i biura zamiast telefonów.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje, limity i archiwum zamiast skrzynki zbiorczej.",
      },
      {
        title: "Raport zarządczy",
        body: "KPI zbierane automatycznie z systemów źródłowych.",
      },
    ],
    howWeWork:
      "W Lesznie zaczynamy od bezpłatnej konsultacji i procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "les-1",
        question: "Czy automatyzacja jest tylko dla dużych firm?",
        answer:
          "Nie. Często startujemy u rosnących MŚP. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "les-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Nie. Model zdalny i hybrydowy. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "les-3",
        question: "Czy integrujecie CRM i ERP?",
        answer:
          "Tak, gdy jest bezpieczny dostęp do danych. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "les-4",
        question: "Od czego zacząć?",
        answer:
          "Od leadów, faktur albo statusów produkcji. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["koscian", "gostyn", "rawicz", "wolsztyn", "poznan", "grodzisk-wielkopolski"],
  },
  {
    slug: "koscian",
    name: "Kościan",
    nameGenitive: "Kościana",
    nameLocative: "Kościanie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Kościanie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kościana: produkcja, handel i logistyka. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Kościanie",
    heroLead:
      "Spinamy kościńskie procesy, gdy lokalna produkcja i handel wymagają sprawnych dokumentów.",
    introParagraphs: [
      "Kościan to produkcja, handel i usługi między Poznaniem a Lesznem. Automatyzacja procesów w Kościanie często dotyczy zamówień, magazynu i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat kościański ma zakłady i MŚP z cienkim back-office. Typowy ból to ręczne potwierdzenia i opóźnione fakturowanie.",
    whyHere:
      "W Kościanie automatyzacja skraca czas od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        title: "Wysyłka",
        body: "Dokumenty kompletne przed załadunkiem.",
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
      "W Kościanie startujemy od procesu zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kos-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kos-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "kos-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "kos-4",
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
    nearbyCitySlugs: ["leszno", "srem", "gostyn", "poznan", "grodzisk-wielkopolski"],
  },
  {
    slug: "gostyn",
    name: "Gostyń",
    nameGenitive: "Gostynia",
    nameLocative: "Gostyniu",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Gostyniu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Gostynia: produkcja spożywcza, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Gostyniu",
    heroLead:
      "Porządkujemy gostyńskie procesy produkcyjne i handlowe, gdy dokumenty jakości i zamówienia nie mogą tonąć w mailach.",
    introParagraphs: [
      "Gostyń łączy produkcję, często spożywczą, z handlem i usługami. Automatyzacja procesów w Gostyniu zwykle dotyczy partii, zamówień i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat gostyński ma firmy z presją na jakość danych. Typowy ból to ręczne protokoły i faktury doganiające wysyłkę.",
    whyHere:
      "W Gostyniu automatyzacja chroni jakość dokumentacji i skraca czas rozliczeń.",
    focusIndustries: [
      {
        title: "Produkcja spożywcza",
        body: "Partie, protokoły i dokumenty wysyłkowe w jednym torze.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
      },
    ],
    focusProcesses: [
      {
        title: "Protokół",
        body: "Terminy, role i archiwum pod audyt.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
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
      "W Gostyniu zaczynamy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "gos-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy obieg dokumentów.",
      },
      {
        id: "gos-2",
        question: "Czy to dla MŚP?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "gos-3",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "gos-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut pozwala ocenić sens startu bez zobowiązań.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["leszno", "koscian", "rawicz", "jarocin", "srem"],
  },
  {
    slug: "rawicz",
    name: "Rawicz",
    nameGenitive: "Rawicza",
    nameLocative: "Rawiczu",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Rawiczu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Rawicza: produkcja, handel i logistyka przy południowej granicy Wielkopolski. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Rawiczu",
    heroLead:
      "Pomagamy rawickim firmom domknąć zamówienia i dokumenty, gdy ruch regionalny nie wybacza chaosu w biurze.",
    introParagraphs: [
      "Rawicz to produkcja, handel i logistyka na południu Wielkopolski. Automatyzacja procesów w Rawiczu często dotyczy statusów, wysyłek i faktur.",
      "Pracujemy zdalnie. Krótka diagnoza, konkretny zakres.",
    ],
    localContext:
      "Powiat rawicki łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy i opóźnione dokumenty wysyłkowe.",
    whyHere:
      "W Rawiczu automatyzacja skraca ścieżkę od zamówienia do wysyłki z kompletem dokumentów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        title: "Dokumenty wysyłkowe",
        body: "Komplet danych transportowych przed wysyłką.",
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
      "W Rawiczu startujemy od procesu wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "raw-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "raw-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
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
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["leszno", "gostyn", "krotoszyn", "jarocin", "wroclaw"],
  },
  {
    slug: "jarocin",
    name: "Jarocin",
    nameGenitive: "Jarocina",
    nameLocative: "Jarocinie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Jarocinie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Jarocina: produkcja, handel i usługi. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Jarocinie",
    heroLead:
      "Porządkujemy jarocińskie procesy produkcyjne i handlowe, gdy lokalny rynek wymaga sprawnych statusów.",
    introParagraphs: [
      "Jarocin to produkcja, handel i usługi w południowo-wschodniej Wielkopolsce. Automatyzacja procesów w Jarocinie zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start, jasna instrukcja.",
    ],
    localContext:
      "Powiat jarociński ma MŚP z rosnącym B2B. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Jarocinie automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
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
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Jarocinie zaczynamy od procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "jar-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "jar-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę utrzymania. Zespół dostaje instrukcję i jasne wyjątki.",
      },
      {
        id: "jar-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "jar-4",
        question: "Czy musicie być w Jarocinie?",
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
    nearbyCitySlugs: ["sroda-wielkopolska", "gostyn", "krotoszyn", "pleszew", "kalisz"],
  },
  {
    slug: "krotoszyn",
    name: "Krotoszyn",
    nameGenitive: "Krotoszyna",
    nameLocative: "Krotoszynie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Krotoszynie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Krotoszyna: produkcja, handel i logistyka. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Krotoszynie",
    heroLead:
      "Spinamy krotoszyńskie procesy, gdy dokumenty i statusy muszą nadążyć za produkcją i wysyłką.",
    introParagraphs: [
      "Krotoszyn to produkcja, handel i logistyka. Automatyzacja procesów w Krotoszynie często dotyczy zamówień, magazynu i faktur.",
      "Pracujemy zdalnie. Najpierw proces krytyczny dla terminu.",
    ],
    localContext:
      "Powiat krotoszyński łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy i opóźnione faktury.",
    whyHere:
      "W Krotoszynie automatyzacja broni terminów i skraca czas rozliczeń.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        title: "Wysyłka",
        body: "Dokumenty kompletne przed załadunkiem.",
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
      "W Krotoszynie startujemy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kro-1",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kro-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "kro-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "kro-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["jarocin", "rawicz", "ostrow-wielkopolski", "pleszew", "kalisz"],
  },
  {
    slug: "pleszew",
    name: "Pleszew",
    nameGenitive: "Pleszewa",
    nameLocative: "Pleszewie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Pleszewie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pleszewa: produkcja, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Pleszewie",
    heroLead:
      "Pomagamy pleszewskim firmom uporządkować zamówienia i dokumenty bez dokładania etatów.",
    introParagraphs: [
      "Pleszew to produkcja, handel i usługi między Kaliszem a Jarocinem. Automatyzacja procesów w Pleszewie zwykle dotyczy statusów, zamówień i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat pleszewski ma MŚP z cienkim biurem. Typowy ból to ręczne maile i faktury z opóźnieniem.",
    whyHere:
      "W Pleszewie automatyzacja oddaje czas zespołowi i zmniejsza liczbę błędów w B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
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
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Pleszewie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "ple-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ple-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "ple-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ple-4",
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
    nearbyCitySlugs: ["kalisz", "jarocin", "krotoszyn", "ostrow-wielkopolski", "konin"],
  },
  {
    slug: "kepno",
    name: "Kępno",
    nameGenitive: "Kępna",
    nameLocative: "Kępnie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Kępnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kępna: produkcja meblarska, handel i logistyka. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Kępnie",
    heroLead:
      "Porządkujemy kępińskie procesy produkcyjne, gdy specyfikacje zamówień i dokumenty nie mogą ginąć w mailach.",
    introParagraphs: [
      "Kępno kojarzy się z produkcją meblarską i lokalnym handlem. Automatyzacja procesów w Kępnie często dotyczy konfiguracji zamówień, statusów produkcji i fakturowania.",
      "Pracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat kępiński łączy produkcję z handlem B2B. Typowy ból to ręczne przekazywanie specyfikacji i opóźnione faktury po odbiorze.",
    whyHere:
      "W Kępnie automatyzacja zmniejsza kosztowne błędy w zamówieniach i skraca czas od protokołu do faktury.",
    focusIndustries: [
      {
        title: "Produkcja meblarska",
        body: "Specyfikacje zamówień i statusy produkcji bez mailowego chaosu.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        title: "Przyjęcie zamówienia",
        body: "Formularz ze specyfikacją zamiast domyślania z maila.",
      },
      {
        title: "Status produkcji",
        body: "Etapy zlecenia widoczne dla handlu i klienta.",
      },
      {
        title: "Protokół odbioru",
        body: "Checklist przed fakturą i archiwum.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Kępnie zaczynamy od procesu przyjęcia zamówienia. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kep-1",
        question: "Czy automatyzujecie zamówienia ze specyfikacją?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kep-2",
        question: "Czy to dla małych zakładów?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kep-3",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kep-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut pozwala ocenić sens startu bez zobowiązań.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["ostrow-wielkopolski", "ostrzeszow", "kalisz", "krotoszyn", "wroclaw"],
  },
  {
    slug: "ostrzeszow",
    name: "Ostrzeszów",
    nameGenitive: "Ostrzeszowa",
    nameLocative: "Ostrzeszowie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Ostrzeszowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ostrzeszowa: produkcja, handel i usługi. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Ostrzeszowie",
    heroLead:
      "Spinamy ostrzeszowskie procesy, gdy lokalna produkcja i handel wymagają sprawnego biura.",
    introParagraphs: [
      "Ostrzeszów to produkcja, handel i usługi w powiecie ostrzeszowskim. Automatyzacja procesów w Ostrzeszowie zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start.",
    ],
    localContext:
      "Powiat ostrzeszowski ma MŚP z ograniczonym zapleczem administracyjnym. Typowy ból to ręczne statusy i faktury z opóźnieniem.",
    whyHere:
      "W Ostrzeszowie automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
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
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Ostrzeszowie startujemy od procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "ost-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ost-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "ost-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ost-4",
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
    nearbyCitySlugs: ["kepno", "ostrow-wielkopolski", "kalisz", "krotoszyn", "leszno"],
  },
  {
    slug: "kolo",
    name: "Koło",
    nameGenitive: "Koła",
    nameLocative: "Kole",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Kole | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Koła: produkcja, handel i usługi wschodniej Wielkopolski. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kole",
    heroLead:
      "Porządkujemy kolskie procesy produkcyjne i handlowe, gdy region koniński wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Koło to produkcja, handel i usługi na wschodzie Wielkopolski. Automatyzacja procesów w Kole często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres, szybki zwrot.",
    ],
    localContext:
      "Powiat kolski ma firmy z cienkim biurem. Typowy ból to ręczne potwierdzenia i brak wspólnego statusu zlecenia.",
    whyHere:
      "W Kole automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Kole zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kol-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kol-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę utrzymania. Zespół dostaje instrukcję i jasne wyjątki.",
      },
      {
        id: "kol-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "kol-4",
        question: "Czy musicie być w Kole?",
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
    nearbyCitySlugs: ["konin", "turek", "slupca", "kalisz", "lodz"],
  },
  {
    slug: "slupca",
    name: "Słupca",
    nameGenitive: "Słupcy",
    nameLocative: "Słupcy",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Słupcy | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Słupcy: produkcja, handel i logistyka. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Słupcy",
    heroLead:
      "Pomagamy słupeckim firmom spiąć zamówienia z magazynem, gdy trasa Poznań-Konin generuje wolumen.",
    introParagraphs: [
      "Słupca leży między Poznaniem a Koninem: produkcja, handel, logistyka. Automatyzacja procesów w Słupcy zwykle dotyczy awizacji, zamówień i faktur.",
      "Współpracujemy zdalnie.",
    ],
    localContext:
      "Powiat słupecki ma firmy powiązane z ruchem regionalnym. Typowy ból to ręczne statusy i opóźnione dokumenty.",
    whyHere:
      "W Słupcy automatyzacja broni terminów dostaw i skraca czas rozliczeń.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja",
        body: "Sloty, powiadomienia i eskalacje opóźnień.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
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
      "W Słupcy startujemy od procesu wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "slu-1",
        question: "Czy to dla średnich firm?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "slu-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "slu-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "slu-4",
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
    nearbyCitySlugs: ["konin", "wrzesnia", "gniezno", "kolo", "poznan"],
  },
  {
    slug: "turek",
    name: "Turek",
    nameGenitive: "Turku",
    nameLocative: "Turku",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Turku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Turku: produkcja, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Turku",
    heroLead:
      "Odciążamy tureckie biura i zakłady, gdy lokalny przemysł potrzebuje porządku w statusach i dokumentach.",
    introParagraphs: [
      "Turek to produkcja, handel i usługi we wschodniej Wielkopolsce. Automatyzacja procesów w Turku często dotyczy zamówień, jakości i faktur.",
      "Pracujemy zdalnie. Prosty start.",
    ],
    localContext:
      "Powiat turecki ma MŚP z ograniczonym zapleczem administracyjnym. Typowy ból to ręczne raporty i faktury z opóźnieniem.",
    whyHere:
      "W Turku automatyzacja zwraca czas biuru i zmniejsza ryzyko błędów przy stałych odbiorcach.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        title: "Jakość",
        body: "Protokół, wyjątki i odpowiedzialności w jednym torze.",
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
      "W Turku zaczynamy od procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "tur-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "tur-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "tur-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "tur-4",
        question: "Czy musicie być w Turku?",
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
    nearbyCitySlugs: ["konin", "kolo", "kalisz", "lodz", "slupca"],
  },
  {
    slug: "chodziez",
    name: "Chodzież",
    nameGenitive: "Chodzieży",
    nameLocative: "Chodzieży",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Chodzieży | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Chodzieży: produkcja, handel i usługi północnej Wielkopolski. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Chodzieży",
    heroLead:
      "Porządkujemy chodzieskie procesy, gdy lokalna produkcja i handel wymagają sprawnych dokumentów.",
    introParagraphs: [
      "Chodzież to produkcja, handel i usługi na północy Wielkopolski. Automatyzacja procesów w Chodzieży zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie.",
    ],
    localContext:
      "Powiat chodzieski ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Chodzieży automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
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
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Chodzieży startujemy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "cho-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "cho-2",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "cho-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "cho-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut pozwala ocenić sens startu bez zobowiązań.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["pila", "czarnkow", "wagrowiec", "oborniki", "poznan"],
  },
  {
    slug: "czarnkow",
    name: "Czarnków",
    nameGenitive: "Czarnkowa",
    nameLocative: "Czarnkowie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Czarnkowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Czarnkowa: produkcja, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Czarnkowie",
    heroLead:
      "Spinamy czarnkowskie procesy produkcyjne i handlowe w powiecie czarnkowsko-trzcianeckim.",
    introParagraphs: [
      "Czarnków jest siedzibą powiatu czarnkowsko-trzcianeckiego: produkcja, handel, logistyka. Automatyzacja procesów w Czarnkowie często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Wąski zakres.",
    ],
    localContext:
      "Powiat łączy zakłady z firmami handlowymi na północy regionu. Typowy ból to ręczne statusy i dokumenty wysyłkowe.",
    whyHere:
      "W Czarnkowie automatyzacja broni terminów dostaw i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja",
        body: "Sloty, powiadomienia i eskalacje opóźnień.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
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
      "W Czarnkowie zaczynamy od procesu wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "cza-1",
        question: "Czy to dla średnich firm?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "cza-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "cza-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "cza-4",
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
    nearbyCitySlugs: ["pila", "chodziez", "szamotuly", "oborniki", "zlotow"],
  },
  {
    slug: "wagrowiec",
    name: "Wągrowiec",
    nameGenitive: "Wągrowca",
    nameLocative: "Wągrowcu",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Wągrowcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wągrowca: produkcja, handel i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Wągrowcu",
    heroLead:
      "Pomagamy wągrowieckim firmom uporządkować dokumenty i statusy bez rozrostu biura.",
    introParagraphs: [
      "Wągrowiec to produkcja, handel i usługi na północnym wschodzie Wielkopolski. Automatyzacja procesów w Wągrowcu zwykle dotyczy zamówień, faktur i follow-upu.",
      "Współpracujemy zdalnie.",
    ],
    localContext:
      "Powiat wągrowiecki ma MŚP z cienką administracją. Typowy ból to ręczne maile i faktury z opóźnieniem.",
    whyHere:
      "W Wągrowcu automatyzacja oddaje czas zespołowi i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, wnioski i raporty bez ręcznego zbierania danych.",
      },
    ],
    focusProcesses: [
      {
        title: "Oferta",
        body: "CRM z przypomnieniem follow-upu.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
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
      "W Wągrowcu startujemy od procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "wag-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "wag-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę utrzymania. Zespół dostaje instrukcję i jasne wyjątki.",
      },
      {
        id: "wag-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "wag-4",
        question: "Czy musicie być w Wągrowcu?",
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
    nearbyCitySlugs: ["gniezno", "chodziez", "oborniki", "pila", "poznan"],
  },
  {
    slug: "zlotow",
    name: "Złotów",
    nameGenitive: "Złotowa",
    nameLocative: "Złotowie",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Złotowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Złotowa: produkcja, handel i usługi północnej Wielkopolski. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Złotowie",
    heroLead:
      "Porządkujemy złotowskie procesy, gdy odległość od dużych ośrodków nie może spowalniać biura.",
    introParagraphs: [
      "Złotów to produkcja, handel i usługi na północnym krańcu Wielkopolski. Automatyzacja procesów w Złotowie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat złotowski ma firmy z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Złotowie automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel",
        body: "Zamówienia, potwierdzenia i limity w przewidywalnym obiegu.",
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
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Złotowie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "zlo-1",
        question: "Czy automatyzacja ma sens daleko od Poznania?",
        answer:
          "Tym bardziej. Klienci i tak oczekują szybkiego statusu.",
      },
      {
        id: "zlo-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "zlo-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "zlo-4",
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
    nearbyCitySlugs: ["pila", "czarnkow", "chodziez", "szczecin", "koszalin"],
  },
];
