import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Małopolski (bez Krakowa, Tarnowa i Nowego Sącza). */
export const malopolskaPowiatCities: CityPageContent[] = [
  {
    slug: "wieliczka",
    name: "Wieliczka",
    nameGenitive: "Wieliczki",
    nameLocative: "Wieliczce",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Wieliczce | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wieliczki: handel, usługi, logistyka i turystyka w pierścieniu Krakowa. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Wieliczce",
    heroLead:
      "Porządkujemy wielickie procesy handlowe i usługowe, gdy bliskość Krakowa podnosi tempo, a biuro zostaje w tyle.",
    introParagraphs: [
      "Wieliczka łączy handel, usługi, logistykę i turystykę w południowo-wschodnim pierścieniu Krakowa. Automatyzacja procesów w Wieliczce zwykle dotyczy zamówień, zapytań, faktur i follow-upu.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Powiat wielicki żyje bliskością Krakowa i ruchem turystycznym. Typowy ból to ręczne potwierdzenia, rozproszone skrzynki i faktury doganiające realizację.",
    whyHere:
      "W Wieliczce automatyzacja wyrównuje tempo obsługi wobec klientów z Krakowa bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Handel i dystrybucja",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Usługi B2B",
        body: "Lead, oferta i follow-up bez ginących maili.",
      },
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje, potwierdzenia i dokumenty.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zapytania",
        body: "Kolejka w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Follow-up",
        body: "Przypomnienia według reguł, nie pamięci.",
      },
    ],
    howWeWork:
      "W Wieliczce zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "wie-1",
        question: "Czy automatyzacja ma sens blisko Krakowa?",
        answer:
          "Właśnie wtedy. Klienci oczekują tempa stolicy regionu, a lokalne biuro nie może rosnąć bez limitu.",
      },
      {
        id: "wie-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "wie-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od zamówień, faktur albo zapytań, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "wie-4",
        question: "Czy potrzebujemy działu IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["krakow", "bochnia", "myslenice", "proszowice", "tarnow"],
  },
  {
    slug: "myslenice",
    name: "Myślenice",
    nameGenitive: "Myślenic",
    nameLocative: "Myślenicach",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Myślenicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Myślenic: handel, usługi, produkcja i logistyka południowego pierścienia Krakowa. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Myślenicach",
    heroLead:
      "Spinamy myślenickie procesy, gdy lokalne MŚP obsługują Kraków i Beskidy w jednym tempie dokumentów.",
    introParagraphs: [
      "Myślenice to handel, usługi, produkcja i logistyka na południe od Krakowa. Automatyzacja procesów w Myślenicach często dotyczy zamówień, statusów realizacji i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt, jasna instrukcja.",
    ],
    localContext:
      "Powiat myślenicki ma firmy rosnące wraz z pierścieniem Krakowa. Typowy ból to ręczne potwierdzenia, brak jednego statusu zlecenia i opóźnione faktury.",
    whyHere:
      "W Myślenicach automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych spraw.",
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
        title: "Logistyka",
        body: "Awizacje i powiadomienia o odchyleniach.",
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
        title: "Raport sprzedaży",
        body: "Bez ręcznego sklejania Excela w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Myślenicach startujemy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "mys-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu.",
      },
      {
        id: "mys-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "mys-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "mys-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["krakow", "wieliczka", "wadowice", "limanowa", "sucha-beskidzka"],
  },
  {
    slug: "chrzanow",
    name: "Chrzanów",
    nameGenitive: "Chrzanowa",
    nameLocative: "Chrzanowie",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Chrzanowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Chrzanowa: produkcja, handel i logistyka na styku Małopolski i Śląska. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Chrzanowie",
    heroLead:
      "Porządkujemy chrzanowskie procesy produkcyjne i handlowe, gdy ruch w stronę Śląska wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Chrzanów leży na styku Małopolski i Śląska: produkcja, handel, logistyka. Automatyzacja procesów w Chrzanowie zwykle dotyczy statusów zleceń, awizacji i faktur.",
      "Współpracujemy zdalnie. Najpierw proces krytyczny dla terminu.",
    ],
    localContext:
      "Powiat chrzanowski łączy zakłady z firmami obsługującymi klientów ze Śląska i Krakowa. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Chrzanowie automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
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
        body: "Komplet przed fakturą w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Chrzanowie zaczynamy od procesu wysyłkowego lub produkcyjnego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "chr-1",
        question: "Czy to dla firm na styku ze Śląskiem?",
        answer:
          "Tak. Statusy i awizacje to częsty pierwszy etap.",
      },
      {
        id: "chr-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie.",
      },
      {
        id: "chr-3",
        question: "Ile trwa etap?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "chr-4",
        question: "Czy musicie być w Chrzanowie?",
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
    nearbyCitySlugs: ["olkusz", "oswiecim", "krakow", "katowice", "wadowice"],
  },
  {
    slug: "olkusz",
    name: "Olkusz",
    nameGenitive: "Olkusza",
    nameLocative: "Olkuszu",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Olkuszu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Olkusza: produkcja, handel i usługi północno-zachodniej Małopolski. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Olkuszu",
    heroLead:
      "Pomagamy olkuskim zakładom i MŚP spiąć zamówienia z magazynem, gdy lokalny przemysł wymaga sprawnego biura.",
    introParagraphs: [
      "Olkusz to produkcja, handel i usługi w północno-zachodniej Małopolsce. Automatyzacja procesów w Olkuszu często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres, mierzalny efekt.",
    ],
    localContext:
      "Powiat olkuski ma firmy z cienkim back-office i kontaktami w stronę Krakowa oraz Śląska. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Olkuszu automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy widoczne dla biura i handlu.",
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
        body: "Faktury i raporty bez ręcznego zbierania danych.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie bez przepisywania w przewidywalnym obiegu.",
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
        body: "Automatyczny zbiór danych w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Olkuszu startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "olk-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "olk-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zespół dostaje jasną instrukcję wyjątków.",
      },
      {
        id: "olk-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "olk-4",
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
    nearbyCitySlugs: ["chrzanow", "miechow", "krakow", "katowice", "czestochowa"],
  },
  {
    slug: "proszowice",
    name: "Proszowice",
    nameGenitive: "Proszowic",
    nameLocative: "Proszowicach",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Proszowicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Proszowic: handel, produkcja rolno-spożywcza i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Proszowicach",
    heroLead:
      "Odciążamy proszowickie biura, gdy dokumenty i statusy nie nadążają za zamówieniami lokalnymi i krakowskimi.",
    introParagraphs: [
      "Proszowice łączą handel, produkcję rolno-spożywczą i usługi na północny wschód od Krakowa. Automatyzacja procesów w Proszowicach zwykle dotyczy zamówień, partii i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat proszowicki ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury doganiające wysyłkę.",
    whyHere:
      "W Proszowicach automatyzacja chroni terminowość i skraca rozliczenia.",
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
        title: "Back-office",
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
        body: "Terminy, role i archiwum pod audyt.",
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
      "W Proszowicach zaczynamy od procesu zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "pro-1",
        question: "Czy automatyzujecie dokumenty partii?",
        answer:
          "W zakresie terminów, ról i archiwum dokumentów.",
      },
      {
        id: "pro-2",
        question: "Czy to dla MŚP?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "pro-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "pro-4",
        question: "Czy musicie być w Proszowicach?",
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
    nearbyCitySlugs: ["krakow", "wieliczka", "miechow", "bochnia", "kielce"],
  },
  {
    slug: "miechow",
    name: "Miechów",
    nameGenitive: "Miechowa",
    nameLocative: "Miechowie",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Miechowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Miechowa: handel, produkcja i usługi północnej Małopolski. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Miechowie",
    heroLead:
      "Spinamy miechowskie procesy, gdy lokalne firmy muszą doganiać tempo klientów z Krakowa i Kielc.",
    introParagraphs: [
      "Miechów to handel, produkcja i usługi w północnej Małopolsce. Automatyzacja procesów w Miechowie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty start dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat miechowski ma MŚP z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Miechowie automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
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
        body: "Zlecenia i rozliczenia w przewidywalnym obiegu.",
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
        body: "Potwierdzenie i status w przewidywalnym obiegu.",
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
      "W Miechowie startujemy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "mie-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "mie-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "mie-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "mie-4",
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
    nearbyCitySlugs: ["olkusz", "proszowice", "krakow", "kielce", "czestochowa"],
  },
  {
    slug: "oswiecim",
    name: "Oświęcim",
    nameGenitive: "Oświęcimia",
    nameLocative: "Oświęcimiu",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Oświęcimiu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Oświęcimia: chemia, produkcja, logistyka i handel. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Oświęcimiu",
    heroLead:
      "Porządkujemy oświęcimskie procesy przemysłowe, gdy hala, magazyn i biuro muszą mówić tym samym językiem.",
    introParagraphs: [
      "Oświęcim to silny ośrodek przemysłowy zachodniej Małopolski z zapleczem chemicznym, produkcyjnym i logistycznym. Automatyzacja procesów w Oświęcimiu zwykle dotyczy statusów zleceń, zgłoszeń, awizacji i dokumentów między zmianami a biurem.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres i szkolimy osoby odpowiedzialne za wyjątki.",
    ],
    localContext:
      "Region łączy produkcję wielozmianową z dostawcami i logistyką. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie albo księgowość.",
    whyHere:
      "W Oświęcimiu automatyzacja opłaca się, gdy skraca reakcję na odchylenia i daje jeden wiarygodny obraz operacji.",
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
      "Z firmami z Oświęcimia startujemy od procesu krytycznego dla ciągłości. Wdrażamy zdalnie.",
    faq: [
      {
        id: "osw-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy też z mniejszymi dostawcami i firmami usługowymi wokół przemysłu.",
      },
      {
        id: "osw-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy, gdy realnie pomaga mapowaniu.",
      },
      {
        id: "osw-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od Waszego stacku.",
      },
      {
        id: "osw-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często w kilka tygodni po diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["chrzanow", "wadowice", "krakow", "bielsko-biala", "katowice"],
  },
  {
    slug: "wadowice",
    name: "Wadowice",
    nameGenitive: "Wadowic",
    nameLocative: "Wadowicach",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Wadowicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wadowic: produkcja spożywcza, handel i usługi. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Wadowicach",
    heroLead:
      "Pomagamy wadowickim firmom uporządkować zamówienia i dokumenty jakości bez dokładania etatów.",
    introParagraphs: [
      "Wadowice łączą produkcję, często spożywczą, z handlem i usługami. Automatyzacja procesów w Wadowicach zwykle dotyczy zamówień, partii, protokołów i faktur.",
      "Pracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat wadowicki ma zakłady i MŚP z presją na jakość danych. Typowy ból to ręczne protokoły i faktury doganiające wysyłkę.",
    whyHere:
      "W Wadowicach automatyzacja chroni jakość dokumentacji i skraca cykl od zamówienia do faktury.",
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
      "W Wadowicach zaczynamy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "wad-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy dokumenty.",
      },
      {
        id: "wad-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego toru dokumentów.",
      },
      {
        id: "wad-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "wad-4",
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
    nearbyCitySlugs: ["oswiecim", "myslenice", "sucha-beskidzka", "krakow", "bielsko-biala"],
  },
  {
    slug: "sucha-beskidzka",
    name: "Sucha Beskidzka",
    nameGenitive: "Suchej Beskidzkiej",
    nameLocative: "Suchej Beskidzkiej",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Suchej Beskidzkiej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Suchej Beskidzkiej: handel, usługi, turystyka i produkcja. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Suchej Beskidzkiej",
    heroLead:
      "Odciążamy biura w Suchej Beskidzkiej, gdy sezon i lokalny handel mnożą zapytania szybciej niż etaty.",
    introParagraphs: [
      "Sucha Beskidzka to handel, usługi, turystyka i produkcja w Beskidach. Automatyzacja procesów w Suchej Beskidzkiej często dotyczy zapytań, rezerwacji, zamówień i faktur.",
      "Współpracujemy zdalnie. Prosty zakres pod mały zespół.",
    ],
    localContext:
      "Powiat suski ma MŚP z sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Suchej Beskidzkiej automatyzacja broni jakości obsługi w sezonie i skraca rozliczenia poza nim.",
    focusIndustries: [
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Handel i usługi",
        body: "Zapytania, oferty i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Rezerwacja",
        body: "Automatyczne potwierdzenie z checklistą dokumentów.",
      },
      {
        title: "Zamówienie",
        body: "Status widoczny dla handlu i magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
    ],
    howWeWork:
      "W Suchej Beskidzkiej startujemy od procesu obsługowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "suc-1",
        question: "Czy pomoże firmie sezonowej?",
        answer:
          "Tak. Skok wolumenu najszybciej psuje ręczny model.",
      },
      {
        id: "suc-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "suc-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "suc-4",
        question: "Czy musicie być w Suchej Beskidzkiej?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["wadowice", "myslenice", "nowy-targ", "zakopane", "bielsko-biala"],
  },
  {
    slug: "bochnia",
    name: "Bochnia",
    nameGenitive: "Bochni",
    nameLocative: "Bochni",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Bochni | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Bochni: produkcja, handel i usługi między Krakowem a Tarnowem. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Bochni",
    heroLead:
      "Porządkujemy bocheńskie procesy produkcyjne i handlowe, gdy lokalny rynek wymaga sprawnych statusów.",
    introParagraphs: [
      "Bochnia leży między Krakowem a Tarnowem: produkcja, handel, usługi. Automatyzacja procesów w Bochni zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat bocheński ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i brak wspólnego statusu zlecenia.",
    whyHere:
      "W Bochni automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę błędów w B2B.",
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
      "W Bochni zaczynamy od procesu o największym chaosie. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "boc-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "boc-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "boc-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "boc-4",
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
    nearbyCitySlugs: ["wieliczka", "brzesko", "krakow", "tarnow", "limanowa"],
  },
  {
    slug: "brzesko",
    name: "Brzesko",
    nameGenitive: "Brzeska",
    nameLocative: "Brzesku",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Brzesku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Brzeska: produkcja spożywcza, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Brzesku",
    heroLead:
      "Spinamy brzeskie procesy produkcyjne, gdy dokumenty jakości i zamówienia nie mogą tonąć w mailach.",
    introParagraphs: [
      "Brzesko łączy produkcję, często spożywczą, z handlem i logistyką. Automatyzacja procesów w Brzesku często dotyczy partii, statusów produkcji i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat brzeski ma zakłady z presją na jakość danych i terminy. Typowy ból to ręczne protokoły i faktury doganiające wysyłkę.",
    whyHere:
      "W Brzesku automatyzacja chroni jakość dokumentacji i skraca cykl od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja spożywcza",
        body: "Partie, protokoły i dokumenty wysyłkowe.",
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
        title: "Awizacja",
        body: "Powiadomienia przed załadunkiem w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Brzesku startujemy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "brz-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum dokumentów.",
      },
      {
        id: "brz-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "brz-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "brz-4",
        question: "Czy musicie być na hali?",
        answer:
          "Tylko gdy realnie pomaga mapowaniu. Standardem jest praca zdalna.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bochnia", "tarnow", "dabrowa-tarnowska", "krakow", "nowy-sacz"],
  },
  {
    slug: "dabrowa-tarnowska",
    name: "Dąbrowa Tarnowska",
    nameGenitive: "Dąbrowy Tarnowskiej",
    nameLocative: "Dąbrowie Tarnowskiej",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Dąbrowie Tarnowskiej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Dąbrowy Tarnowskiej: handel, produkcja i usługi wschodniej Małopolski. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Dąbrowie Tarnowskiej",
    heroLead:
      "Pomagamy dąbrowskim firmom uporządkować dokumenty i statusy bez rozrostu biura.",
    introParagraphs: [
      "Dąbrowa Tarnowska to handel, produkcja i usługi na północny wschód od Tarnowa. Automatyzacja procesów w Dąbrowie Tarnowskiej zwykle dotyczy zamówień, faktur i follow-upu.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat dąbrowski ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Dąbrowie Tarnowskiej automatyzacja oddaje czas zespołowi i zmniejsza liczbę niedomkniętych spraw.",
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
        title: "Oferta",
        body: "CRM z przypomnieniem follow-upu zamiast pamięci handlowca.",
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
      "W Dąbrowie Tarnowskiej zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "dab-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "dab-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "dab-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "dab-4",
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
    nearbyCitySlugs: ["tarnow", "brzesko", "rzeszow", "kielce", "bochnia"],
  },
  {
    slug: "nowy-targ",
    name: "Nowy Targ",
    nameGenitive: "Nowego Targu",
    nameLocative: "Nowym Targu",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Nowym Targu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Nowego Targu: handel, produkcja, logistyka i usługi Podhala. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Nowym Targu",
    heroLead:
      "Porządkujemy nowotarskie procesy handlowe i produkcyjne, gdy Podhale łączy lokalny rynek z turystyką i eksportem.",
    introParagraphs: [
      "Nowy Targ to ośrodek handlu, produkcji i usług na Podhalu. Automatyzacja procesów w Nowym Targu często dotyczy zamówień, statusów, awizacji i faktur.",
      "Współpracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat nowotarski ma firmy handlowe i produkcyjne z cienkim biurem oraz sezonowym ruchem. Typowy ból to ręczne statusy i dokumenty z opóźnieniem.",
    whyHere:
      "W Nowym Targu automatyzacja skraca czas od zamówienia do faktury i broni tempa obsługi w sezonie.",
    focusIndustries: [
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń i jakość w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia w przewidywalnym obiegu.",
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
        title: "Awizacja",
        body: "Powiadomienia o odchyleniach w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Nowym Targu startujemy od procesu zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "nta-1",
        question: "Czy to dla firm handlowych z Podhala?",
        answer:
          "Tak. Zamówienia i statusy to częsty pierwszy etap.",
      },
      {
        id: "nta-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "nta-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "nta-4",
        question: "Czy musicie być w Nowym Targu?",
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
    nearbyCitySlugs: ["zakopane", "limanowa", "sucha-beskidzka", "nowy-sacz", "krakow"],
  },
  {
    slug: "zakopane",
    name: "Zakopane",
    nameGenitive: "Zakopanego",
    nameLocative: "Zakopanem",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Zakopanem | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Zakopanego: turystyka, hospitality, handel i usługi. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Zakopanem",
    heroLead:
      "Odciążamy zakopiańskie biura i obiekty, gdy sezon mnoży rezerwacje szybciej niż etaty.",
    introParagraphs: [
      "Zakopane żyje turystyką, hospitality, handlem i usługami. Automatyzacja procesów w Zakopanem zwykle dotyczy rezerwacji, zapytań, statusów obsługi i faktur, tam gdzie sezonowy skok wolumenu wykańcza ręczny model.",
      "Pracujemy zdalnie. Zakres pod realny sezon, nie pod prezentację.",
    ],
    localContext:
      "Powiat tatrzański żyje sezonowością i klientami z całego kraju. Typowy ból to ręczne potwierdzenia, rozproszone skrzynki i dokumenty rozliczeniowe po szczycie.",
    whyHere:
      "W Zakopanem automatyzacja chroni jakość obsługi w sezonie i skraca czas rozliczeń poza nim.",
    focusIndustries: [
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje, potwierdzenia i dokumenty dla gości.",
      },
      {
        title: "Handel i retail",
        body: "Zamówienia, stany i statusy w przewidywalnym obiegu.",
      },
      {
        title: "Usługi lokalne",
        body: "Zapytania, oferty i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury i zamknięcie dnia w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja",
        body: "Potwierdzenie i checklista dokumentów.",
      },
      {
        title: "Kolejka zapytań",
        body: "CRM zamiast ginących wątków w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po statusie realizacji w przewidywalnym obiegu.",
      },
      {
        title: "Raport sezonowy",
        body: "Dane na bieżąco, nie po sezonie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Zakopanem zaczynamy od procesu rezerwacyjnego lub obsługowego. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "zak-1",
        question: "Czy automatyzacja ma sens przy sezonowości?",
        answer:
          "Właśnie wtedy. Skok wolumenu najszybciej demaskuje ręczny model.",
      },
      {
        id: "zak-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "zak-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od rezerwacji, zapytań albo obiegu faktur.",
      },
      {
        id: "zak-4",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["nowy-targ", "limanowa", "sucha-beskidzka", "nowy-sacz", "krakow"],
  },
  {
    slug: "limanowa",
    name: "Limanowa",
    nameGenitive: "Limanowej",
    nameLocative: "Limanowej",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Limanowej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Limanowej: produkcja, handel i usługi Sądecczyzny. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Limanowej",
    heroLead:
      "Spinamy limanowskie procesy produkcyjne i handlowe, gdy lokalne MŚP potrzebują sprawnego biura.",
    introParagraphs: [
      "Limanowa to produkcja, handel i usługi między Sądecczyzną a Podhalem. Automatyzacja procesów w Limanowej często dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty start.",
    ],
    localContext:
      "Powiat limanowski ma firmy z cienkim back-office. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Limanowej automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
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
      "W Limanowej zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lim-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lim-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "lim-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "lim-4",
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
    nearbyCitySlugs: ["nowy-sacz", "nowy-targ", "bochnia", "myslenice", "gorlice"],
  },
  {
    slug: "gorlice",
    name: "Gorlice",
    nameGenitive: "Gorlic",
    nameLocative: "Gorlicach",
    voivodeship: "małopolskie",
    regionCluster: "malopolska",
    metaTitle: "Automatyzacja procesów w Gorlicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Gorlic: produkcja, handel i usługi południowo-wschodniej Małopolski. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Gorlicach",
    heroLead:
      "Porządkujemy gorlickie procesy produkcyjne i handlowe przy granicy z Podkarpaciem.",
    introParagraphs: [
      "Gorlice łączą produkcję, handel i usługi w południowo-wschodniej Małopolsce. Automatyzacja procesów w Gorlicach zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, jasna instrukcja.",
    ],
    localContext:
      "Powiat gorlicki ma MŚP z ograniczonym zapleczem administracyjnym i kontaktami w stronę Nowego Sącza oraz Rzeszowa. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Gorlicach automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych bez rozrostu biura.",
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
      "W Gorlicach startujemy od procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "gor-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "gor-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "gor-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "gor-4",
        question: "Czy musicie być w Gorlicach?",
        answer:
          "Nie. Standardem jest praca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["nowy-sacz", "limanowa", "tarnow", "rzeszow", "krakow"],
  },
];
