import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Zachodniopomorskiego oraz Świnoujście (bez Szczecina, Koszalina i Stargardu). */
export const zachodniopomorskiePowiatCities: CityPageContent[] = [
  {
    slug: "police",
    name: "Police",
    nameGenitive: "Polic",
    nameLocative: "Policach",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Policach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Polic: chemia, produkcja, logistyka i handel w pierścieniu Szczecina. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Policach",
    heroLead:
      "Porządkujemy polickie procesy przemysłowe i handlowe, gdy bliskość Szczecina i zakładów chemicznych wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Police łączą przemysł chemiczny, produkcję, logistykę i handel w północnym pierścieniu Szczecina. Automatyzacja procesów w Policach zwykle dotyczy statusów zleceń, zgłoszeń, awizacji i faktur.",
      "Współpracujemy zdalnie. Mapujemy krytyczny przepływ, wdrażamy wąski zakres i szkolimy osoby odpowiedzialne za wyjątki.",
    ],
    localContext:
      "Powiat policki żyje przemysłem i ruchem towarowym wokół Szczecina. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi biuro, oraz faktury doganiające wysyłkę.",
    whyHere:
      "W Policach automatyzacja skraca reakcję na odchylenia i daje jeden wiarygodny obraz operacji bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Przemysł chemiczny i produkcja",
        body: "Statusy, protokoły i obiegi zatwierdzeń.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Dostawcy utrzymania ruchu",
        body: "Zgłoszenia, części i rozliczenia w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i statusy dostaw w jednym torze.",
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
      "W Policach zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces krytyczny dla ciągłości i wdrażamy zdalnie.",
    faq: [
      {
        id: "pol-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy też z mniejszymi dostawcami i firmami usługowymi wokół przemysłu.",
      },
      {
        id: "pol-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "pol-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od Waszego stacku.",
      },
      {
        id: "pol-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["szczecin", "goleniow", "swinoujscie", "gryfino", "stargard"],
  },
  {
    slug: "goleniow",
    name: "Goleniów",
    nameGenitive: "Goleniowa",
    nameLocative: "Goleniowie",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Goleniowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Goleniowa: logistyka, produkcja i handel przy S3. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Goleniowie",
    heroLead:
      "Spinamy goleniowskie procesy, gdy lotnisko, S3 i pierścień Szczecina podnoszą tempo zamówień.",
    introParagraphs: [
      "Goleniów to logistyka, produkcja i handel we wschodnim pierścieniu Szczecina. Automatyzacja procesów w Goleniowie często dotyczy awizacji, statusów magazynowych i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt, jasna instrukcja.",
    ],
    localContext:
      "Powiat goleniowski żyje ruchem towarowym i firmami obsługującymi Szczecin. Typowy ból to ręczne awizacje, rozjazd statusów i faktury doganiające wysyłkę.",
    whyHere:
      "W Goleniowie automatyzacja broni terminów dostaw i skraca czas od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Logistyka i magazyn",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura w przewidywalnym obiegu.",
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
      "W Goleniowie startujemy od procesu wysyłkowego lub zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "gol-1",
        question: "Czy to dla firm logistycznych przy S3?",
        answer:
          "Tak. Awizacje i statusy to częsty pierwszy etap.",
      },
      {
        id: "gol-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie.",
      },
      {
        id: "gol-3",
        question: "Ile trwa etap?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "gol-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["szczecin", "stargard", "police", "lobez", "kamien-pomorski"],
  },
  {
    slug: "gryfino",
    name: "Gryfino",
    nameGenitive: "Gryfina",
    nameLocative: "Gryfinie",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Gryfinie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Gryfina: produkcja, handel i logistyka południowego pierścienia Szczecina. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Gryfinie",
    heroLead:
      "Porządkujemy gryfińskie procesy produkcyjne i handlowe przy granicy i bliskości Szczecina.",
    introParagraphs: [
      "Gryfino łączy produkcję, handel i logistykę na południe od Szczecina. Automatyzacja procesów w Gryfinie zwykle dotyczy zamówień, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat gryfiński ma firmy z kontaktami przygranicznymi i cienkim back-office. Typowy ból to ręczne potwierdzenia i dokumenty z opóźnieniem.",
    whyHere:
      "W Gryfinie automatyzacja wyrównuje tempo obsługi wobec klientów ze Szczecina i Niemiec bez rozrostu biura.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe.",
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
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla magazynu.",
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
        body: "Automatyczny zbiór danych w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Gryfinie zaczynamy od procesu o największym chaosie. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "gry-1",
        question: "Czy automatyzacja ma sens przy handlu przygranicznym?",
        answer:
          "Właśnie wtedy. Status i dokumenty muszą być szybsze niż telefon do biura.",
      },
      {
        id: "gry-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok.",
      },
      {
        id: "gry-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "gry-4",
        question: "Czy musicie być w Gryfinie?",
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
    nearbyCitySlugs: ["szczecin", "pyrzyce", "mysliborz", "stargard", "police"],
  },
  {
    slug: "pyrzyce",
    name: "Pyrzyce",
    nameGenitive: "Pyrzyc",
    nameLocative: "Pyrzycach",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Pyrzycach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pyrzyc: handel, produkcja rolno-spożywcza i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Pyrzycach",
    heroLead:
      "Odciążamy pyrzyckie biura, gdy dokumenty i statusy nie nadążają za zamówieniami lokalnymi i szczecińskimi.",
    introParagraphs: [
      "Pyrzyce łączą handel, produkcję rolno-spożywczą i usługi na południowy wschód od Szczecina. Automatyzacja procesów w Pyrzycach często dotyczy zamówień, partii i faktur.",
      "Pracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat pyrzycki ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury doganiające wysyłkę.",
    whyHere:
      "W Pyrzycach automatyzacja chroni terminowość i skraca rozliczenia.",
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
      "W Pyrzycach startujemy od procesu zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "pyr-1",
        question: "Czy automatyzujecie dokumenty partii?",
        answer:
          "W zakresie terminów, ról i archiwum dokumentów.",
      },
      {
        id: "pyr-2",
        question: "Czy to dla MŚP?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "pyr-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "pyr-4",
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
    nearbyCitySlugs: ["stargard", "gryfino", "mysliborz", "choszczno", "szczecin"],
  },
  {
    slug: "mysliborz",
    name: "Myślibórz",
    nameGenitive: "Myśliborza",
    nameLocative: "Myśliborzu",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Myśliborzu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Myśliborza: produkcja, handel i logistyka południowego Pomorza Zachodniego. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Myśliborzu",
    heroLead:
      "Spinamy myśliborskie procesy, gdy lokalne MŚP obsługują Szczecin i Lubuskie w jednym tempie dokumentów.",
    introParagraphs: [
      "Myślibórz to produkcja, handel i logistyka na południu województwa. Automatyzacja procesów w Myśliborzu zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty start dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat myśliborski ma firmy z cienkim biurem i kontaktami w stronę Gorzowa. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Myśliborzu automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy widoczne dla handlu w przewidywalnym obiegu.",
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
      "W Myśliborzu zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "mys-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "mys-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "mys-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "mys-4",
        question: "Czy musicie być w Myśliborzu?",
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
    nearbyCitySlugs: ["gryfino", "pyrzyce", "gorzow-wielkopolski", "choszczno", "szczecin"],
  },
  {
    slug: "swinoujscie",
    name: "Świnoujście",
    nameGenitive: "Świnoujścia",
    nameLocative: "Świnoujściu",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Świnoujściu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Świnoujścia: port, logistyka, turystyka i handel. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Świnoujściu",
    heroLead:
      "Porządkujemy świnoujskie procesy portowe i usługowe, gdy sezon i ruch graniczny mnożą dokumenty szybciej niż etaty.",
    introParagraphs: [
      "Świnoujście łączy port, logistykę, turystykę i handel przygraniczny. Automatyzacja procesów w Świnoujściu zwykle dotyczy awizacji, rezerwacji, zapytań i faktur, tam gdzie sezonowy skok wolumenu wykańcza ręczny model.",
      "Pracujemy zdalnie. Zakres pod realny sezon i operacje, nie pod prezentację.",
    ],
    localContext:
      "Miasto żyje portem, promami i turystyką. Typowy ból to ręczne potwierdzenia, rozproszone skrzynki i dokumenty rozliczeniowe po szczycie.",
    whyHere:
      "W Świnoujściu automatyzacja chroni jakość obsługi w sezonie i skraca czas rozliczeń poza nim.",
    focusIndustries: [
      {
        title: "Port i logistyka",
        body: "Awizacje, statusy i dokumenty przewozowe.",
      },
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje, potwierdzenia i dokumenty dla gości.",
      },
      {
        title: "Handel przygraniczny",
        body: "Zamówienia, stany i statusy dostaw.",
      },
      {
        title: "Back-office",
        body: "Faktury i zamknięcie dnia w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja i status operacji",
        body: "Jedna prawda dla magazynu i biura w przewidywalnym obiegu.",
      },
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
        body: "Po kompletnym statusie realizacji w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Świnoujściu zaczynamy od procesu operacyjnego lub rezerwacyjnego. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "swi-1",
        question: "Czy automatyzacja ma sens przy sezonowości i porcie?",
        answer:
          "Właśnie wtedy. Skok wolumenu najszybciej demaskuje ręczny model.",
      },
      {
        id: "swi-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "swi-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od awizacji, rezerwacji albo obiegu faktur.",
      },
      {
        id: "swi-4",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["police", "kamien-pomorski", "szczecin", "goleniow", "gryfice"],
  },
  {
    slug: "kamien-pomorski",
    name: "Kamień Pomorski",
    nameGenitive: "Kamienia Pomorskiego",
    nameLocative: "Kamieniu Pomorskim",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Kamieniu Pomorskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kamienia Pomorskiego: turystyka, handel, usługi i logistyka nadmorska. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kamieniu Pomorskim",
    heroLead:
      "Odciążamy kamieńskie biura, gdy sezon nadmorski mnoży zapytania szybciej niż etaty.",
    introParagraphs: [
      "Kamień Pomorski to turystyka, handel, usługi i lokalna logistyka na wybrzeżu. Automatyzacja procesów w Kamieniu Pomorskim zwykle dotyczy rezerwacji, zapytań, statusów zleceń i faktur.",
      "Współpracujemy zdalnie. Zakres pod realny sezon.",
    ],
    localContext:
      "Powiat kamieński żyje sezonowością i klientami ze Szczecina. Typowy ból to ręczne potwierdzenia i dokumenty rozliczeniowe po szczycie.",
    whyHere:
      "W Kamieniu Pomorskim automatyzacja broni jakości obsługi w sezonie i skraca rozliczenia poza nim.",
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
      "W Kamieniu Pomorskim zaczynamy od procesu rezerwacyjnego lub obsługowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kam-1",
        question: "Czy automatyzacja pomoże firmie sezonowej?",
        answer:
          "Tak. Skok wolumenu to właśnie moment, w którym ręczny model się wysyca.",
      },
      {
        id: "kam-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "kam-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "kam-4",
        question: "Czy musicie być w Kamieniu Pomorskim?",
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
    nearbyCitySlugs: ["swinoujscie", "gryfice", "goleniow", "szczecin", "kolobrzeg"],
  },
  {
    slug: "gryfice",
    name: "Gryfice",
    nameGenitive: "Gryfic",
    nameLocative: "Gryficach",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Gryficach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Gryfic: handel, usługi, produkcja i turystyka. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Gryficach",
    heroLead:
      "Pomagamy gryfickim firmom uporządkować dokumenty i statusy między wybrzeżem a szczecińskim zapleczem.",
    introParagraphs: [
      "Gryfice łączą handel, usługi, produkcję i turystykę w północnej części regionu. Automatyzacja procesów w Gryficach często dotyczy zamówień, zapytań i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat gryficki ma MŚP z sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Gryficach automatyzacja oddaje czas zespołowi i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Handel i usługi",
        body: "Zapytania, oferty i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Turystyka",
        body: "Rezerwacje i potwierdzenia bez mailowego chaosu.",
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
      "W Gryficach startujemy od procesu obsługowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "grf-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "grf-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "grf-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "grf-4",
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
    nearbyCitySlugs: ["kamien-pomorski", "kolobrzeg", "lobez", "goleniow", "swidwin"],
  },
  {
    slug: "kolobrzeg",
    name: "Kołobrzeg",
    nameGenitive: "Kołobrzegu",
    nameLocative: "Kołobrzegu",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Kołobrzegu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kołobrzegu: turystyka, hospitality, handel i usługi uzdrowiskowe. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kołobrzegu",
    heroLead:
      "Porządkujemy kołobrzeskie procesy usługowe, gdy sezon mnoży rezerwacje szybciej niż biuro.",
    introParagraphs: [
      "Kołobrzeg żyje turystyką, hospitality, handlem i usługami uzdrowiskowymi. Automatyzacja procesów w Kołobrzegu zwykle dotyczy rezerwacji, zapytań, statusów obsługi i faktur.",
      "Współpracujemy zdalnie. Zakres pod realny sezon, nie pod prezentację.",
    ],
    localContext:
      "Powiat kołobrzeski żyje sezonowością. Typowy ból to ręczne potwierdzenia, rozproszone skrzynki i dokumenty rozliczeniowe po szczycie.",
    whyHere:
      "W Kołobrzegu automatyzacja chroni jakość obsługi w sezonie i skraca czas rozliczeń poza nim.",
    focusIndustries: [
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje, potwierdzenia i dokumenty dla gości.",
      },
      {
        title: "Usługi uzdrowiskowe",
        body: "Zapisy, statusy i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Handel i retail",
        body: "Zamówienia, stany i statusy w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury i zamknięcie dnia w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja",
        body: "Potwierdzenie i checklista w przewidywalnym obiegu.",
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
      "W Kołobrzegu zaczynamy od procesu rezerwacyjnego lub obsługowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "kol-1",
        question: "Czy automatyzacja ma sens przy sezonowości?",
        answer:
          "Właśnie wtedy. Skok wolumenu najszybciej demaskuje ręczny model.",
      },
      {
        id: "kol-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "kol-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od rezerwacji, zapytań albo obiegu faktur.",
      },
      {
        id: "kol-4",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["bialogard", "koszalin", "gryfice", "swidwin", "slawno"],
  },
  {
    slug: "lobez",
    name: "Łobez",
    nameGenitive: "Łobza",
    nameLocative: "Łobzie",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Łobzie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łobza: handel, produkcja i usługi środkowego Pomorza Zachodniego. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Łobzie",
    heroLead:
      "Spinamy łobeskie procesy, gdy lokalne MŚP potrzebują sprawnego biura bez dokładania etatów.",
    introParagraphs: [
      "Łobez to handel, produkcja i usługi w środkowej części regionu. Automatyzacja procesów w Łobzie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat łobeski ma firmy z cienkim back-office. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Łobzie automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Łobzie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lob-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lob-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "lob-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "lob-4",
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
    nearbyCitySlugs: ["swidwin", "drawsko-pomorskie", "goleniow", "gryfice", "stargard"],
  },
  {
    slug: "swidwin",
    name: "Świdwin",
    nameGenitive: "Świdwina",
    nameLocative: "Świdwinie",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Świdwinie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Świdwina: produkcja, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Świdwinie",
    heroLead:
      "Pomagamy świdwińskim firmom uporządkować zamówienia i dokumenty między Koszalinem a Drawskiem.",
    introParagraphs: [
      "Świdwin łączy produkcję, handel i usługi we wschodniej części regionu. Automatyzacja procesów w Świdwinie zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start.",
    ],
    localContext:
      "Powiat świdwiński ma MŚP z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Świdwinie automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
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
      "W Świdwinie startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "swd-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "swd-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "swd-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "swd-4",
        question: "Czy musicie być w Świdwinie?",
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
    nearbyCitySlugs: ["bialogard", "lobez", "drawsko-pomorskie", "kolobrzeg", "koszalin"],
  },
  {
    slug: "drawsko-pomorskie",
    name: "Drawsko Pomorskie",
    nameGenitive: "Drawska Pomorskiego",
    nameLocative: "Drawsku Pomorskim",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Drawsku Pomorskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Drawska Pomorskiego: produkcja, handel i logistyka. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Drawsku Pomorskim",
    heroLead:
      "Porządkujemy drawskie procesy produkcyjne i handlowe we wschodnim Pomorzu Zachodnim.",
    introParagraphs: [
      "Drawsko Pomorskie to produkcja, handel i logistyka we wschodniej części województwa. Automatyzacja procesów w Drawsku Pomorskim często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat drawski ma firmy z cienkim biurem. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Drawsku Pomorskim automatyzacja broni terminów i skraca rozliczenia.",
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
      "W Drawsku Pomorskim zaczynamy od procesu zamówieniowego lub wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "dra-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "dra-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "dra-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "dra-4",
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
    nearbyCitySlugs: ["szczecinek", "swidwin", "lobez", "walcz", "choszczno"],
  },
  {
    slug: "choszczno",
    name: "Choszczno",
    nameGenitive: "Choszczna",
    nameLocative: "Choszcznie",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Choszcznie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Choszczna: produkcja, handel i usługi południowo-wschodniego Pomorza Zachodniego. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Choszcznie",
    heroLead:
      "Odciążamy choszczeńskie biura, gdy lokalny rynek wymaga sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Choszczno łączy produkcję, handel i usługi na południowym wschodzie regionu. Automatyzacja procesów w Choszcznie zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat choszczeński ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Choszcznie automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Choszcznie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "cho-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "cho-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "cho-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "cho-4",
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
    nearbyCitySlugs: ["stargard", "pyrzyce", "drawsko-pomorskie", "walcz", "szczecin"],
  },
  {
    slug: "bialogard",
    name: "Białogard",
    nameGenitive: "Białogardu",
    nameLocative: "Białogardzie",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Białogardzie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Białogardu: produkcja, handel i usługi w koszalińskim zapleczu. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Białogardzie",
    heroLead:
      "Spinamy białogardzkie procesy produkcyjne i handlowe między Koszalinem a Świdwinem.",
    introParagraphs: [
      "Białogard to produkcja, handel i usługi w zapleczu Koszalina. Automatyzacja procesów w Białogardzie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat białogardzki ma zakłady i MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i dokumenty z opóźnieniem.",
    whyHere:
      "W Białogardzie automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
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
        title: "Administracja",
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
      "W Białogardzie startujemy od procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "bia-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "bia-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "bia-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "bia-4",
        question: "Czy musicie być w Białogardzie?",
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
    nearbyCitySlugs: ["koszalin", "kolobrzeg", "swidwin", "szczecinek", "slawno"],
  },
  {
    slug: "slawno",
    name: "Sławno",
    nameGenitive: "Sławna",
    nameLocative: "Sławnie",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Sławnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Sławna: handel, usługi, produkcja i turystyka przy styku z Pomorskim. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Sławnie",
    heroLead:
      "Porządkujemy sławieńskie procesy, gdy lokalny handel i sezon wymagają sprawnych dokumentów.",
    introParagraphs: [
      "Sławno łączy handel, usługi, produkcję i zaplecze turystyczne przy granicy z Pomorskim. Automatyzacja procesów w Sławnie zwykle dotyczy zamówień, zapytań i faktur.",
      "Współpracujemy zdalnie. Prosty zakres pod mały zespół.",
    ],
    localContext:
      "Powiat sławieński ma MŚP z sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Sławnie automatyzacja broni jakości obsługi w sezonie i skraca rozliczenia poza nim.",
    focusIndustries: [
      {
        title: "Handel i usługi",
        body: "Zapytania, oferty i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Turystyka",
        body: "Rezerwacje i potwierdzenia bez mailowego chaosu.",
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
      "W Sławnie zaczynamy od procesu obsługowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "sla-1",
        question: "Czy pomoże firmie sezonowej?",
        answer:
          "Tak. Skok wolumenu najszybciej psuje ręczny model.",
      },
      {
        id: "sla-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "sla-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "sla-4",
        question: "Czy musicie być w Sławnie?",
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
    nearbyCitySlugs: ["koszalin", "slupsk", "bialogard", "kolobrzeg", "lebork"],
  },
  {
    slug: "szczecinek",
    name: "Szczecinek",
    nameGenitive: "Szczecinka",
    nameLocative: "Szczecinku",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Szczecinku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Szczecinka: produkcja, handel i logistyka wschodniego Pomorza Zachodniego. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Szczecinku",
    heroLead:
      "Pomagamy szczecineckim zakładom i firmom handlowym spiąć statusy, gdy odległość od Szczecina nie może spowalniać biura.",
    introParagraphs: [
      "Szczecinek to produkcja, handel i logistyka we wschodniej części województwa. Automatyzacja procesów w Szczecinku często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat szczecinecki ma firmy z cienkim back-office. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Szczecinku automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe.",
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
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia o odchyleniach w przewidywalnym obiegu.",
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
      "W Szczecinku startujemy od procesu zamówieniowego lub wysyłkowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "szc-1",
        question: "Czy automatyzacja ma sens daleko od Szczecina?",
        answer:
          "Tym bardziej. Klienci i tak oczekują szybkiego statusu.",
      },
      {
        id: "szc-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "szc-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "szc-4",
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
    nearbyCitySlugs: ["drawsko-pomorskie", "walcz", "koszalin", "bialogard", "pila"],
  },
  {
    slug: "walcz",
    name: "Wałcz",
    nameGenitive: "Wałcza",
    nameLocative: "Wałczu",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Wałczu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wałcza: produkcja, handel i usługi południowo-wschodniego Pomorza Zachodniego. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Wałczu",
    heroLead:
      "Spinamy wałeckie procesy, gdy lokalna produkcja i handel wymagają sprawnego biura przy styku z Wielkopolską.",
    introParagraphs: [
      "Wałcz łączy produkcję, handel i usługi przy południowo-wschodniej granicy regionu. Automatyzacja procesów w Wałczu zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start, jasna instrukcja.",
    ],
    localContext:
      "Powiat wałecki ma MŚP z kontaktami w stronę Piły i Poznania. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Wałczu automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe w jednym torze.",
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
      "W Wałczu zaczynamy od procesu o największym chaosie. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "wal-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "wal-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "wal-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "wal-4",
        question: "Czy musicie być w Wałczu?",
        answer:
          "Nie. Standardem jest praca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["szczecinek", "pila", "drawsko-pomorskie", "choszczno", "poznan"],
  },
];
