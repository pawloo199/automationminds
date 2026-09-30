import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Podkarpackiego oraz Krosno, Przemyśl i Tarnobrzeg (bez Rzeszowa). */
export const podkarpackiePowiatCities: CityPageContent[] = [
  {
    slug: "krosno",
    name: "Krosno",
    nameGenitive: "Krosna",
    nameLocative: "Krośnie",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Krośnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Krosna: przemysł, produkcja, handel i usługi południowego Podkarpacia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Krośnie",
    heroLead:
      "Porządkujemy krośnieńskie procesy przemysłowe i handlowe, gdy dokumenty nie nadążają za produkcją i dostawami.",
    introParagraphs: [
      "Krosno to ośrodek przemysłowy i handlowy południowego Podkarpacia z zapleczem usługowym. Automatyzacja procesów w Krośnie zwykle dotyczy statusów zleceń, awizacji i faktur między halą a biurem.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Miasto łączy produkcję, handel B2B i usługi dla regionu bieszczadzkiego. Typowy ból to ręczne statusy, rozjazd między magazynem a księgowością i faktury doganiające wysyłkę.",
    whyHere:
      "W Krośnie automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Produkcja i przemysł lokalny",
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
      "W Krośnie zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "kro-1",
        question: "Czy automatyzacja ma sens w średnim zakładzie z Krosna?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kro-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "kro-3",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od zamówień, faktur albo statusów realizacji, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "kro-4",
        question: "Czy potrzebujemy działu IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-dla-logistyki",
    ],
    nearbyCitySlugs: ["jaslo", "sanok", "brzozow", "rzeszow", "strzyzow"],
  },
  {
    slug: "przemysl",
    name: "Przemyśl",
    nameGenitive: "Przemyśla",
    nameLocative: "Przemyślu",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Przemyślu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Przemyśla: handel przygraniczny, logistyka, produkcja i usługi. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Przemyślu",
    heroLead:
      "Wspieramy przemyskie firmy w porządkowaniu handlu i operacji, gdy bliskość granicy podnosi tempo dokumentów.",
    introParagraphs: [
      "Przemyśl to handel, logistyka, produkcja i usługi przy wschodniej granicy. Automatyzacja procesów w Przemyślu sprawdza się, gdy zamówienia, statusy i faktury nie mogą żyć w trzech osobnych Excelach.",
      "Pracujemy zdalnie: od mapy procesu po działające integracje.",
    ],
    localContext:
      "Miasto łączy handel regionalny z ruchem przygranicznym i lokalną produkcją. Typowy obraz: solidny system księgowy, CRM niedokończony i operacje w arkuszach.",
    whyHere:
      "W Przemyślu automatyzacja pomaga rosnąć bez proporcjonalnego wzrostu administracji wobec klientów z Rzeszowa i regionu.",
    focusIndustries: [
      {
        title: "Handel przygraniczny i B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia o odchyleniach.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń między halą a biurem bez ręcznego przepisywania.",
      },
      {
        title: "Usługi",
        body: "Lead, oferta i follow-up w CRM zamiast ginącej skrzynki.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie od oferty do FV",
        body: "Mniej ręcznego przepisywania między handlem a księgowością.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia i eskalacje opóźnień zamiast telefonów.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
      {
        title: "Lejek sprzedaży",
        body: "CRM z przypomnieniami o follow-upie zamiast ginącej skrzynki.",
      },
    ],
    howWeWork:
      "W Przemyślu startujemy od konkretnego bólu, zwykle zamówień, faktur albo awizacji. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "prz-1",
        question: "Czy automatyzacja sprawdzi się w firmie rodzinnej?",
        answer:
          "Tak. Często właśnie w firmach rodzinnych zwrot jest najszybszy.",
      },
      {
        id: "prz-2",
        question: "Czy integrujecie polskie systemy?",
        answer:
          "Łączymy to, do czego jest bezpieczny dostęp. Dobieramy metodę pod Wasz stack.",
      },
      {
        id: "prz-3",
        question: "Czy potrzebujemy biura projektu w Przemyślu?",
        answer:
          "Nie. Pracujemy zdalnie i hybrydowo. Spotkanie stacjonarne tylko gdy realnie pomaga.",
      },
      {
        id: "prz-4",
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
    nearbyCitySlugs: ["jaroslaw", "przeworsk", "lubaczow", "rzeszow", "sanok"],
  },
  {
    slug: "tarnobrzeg",
    name: "Tarnobrzeg",
    nameGenitive: "Tarnobrzega",
    nameLocative: "Tarnobrzegu",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Tarnobrzegu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Tarnobrzega: przemysł, handel, logistyka i usługi nad Wisłą. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Tarnobrzegu",
    heroLead:
      "Odciążamy tarnobrzeskie biura, gdy lokalny przemysł i handel wymagają sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Tarnobrzeg łączy przemysł, handel i logistykę w północnej części Podkarpacia. Automatyzacja procesów w Tarnobrzegu zwykle dotyczy zamówień, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Wąski start, mierzalny efekt, jasna instrukcja.",
    ],
    localContext:
      "Miasto i okolice mają zakłady oraz MŚP z cienkim back-office. Typowy ból to ręczne potwierdzenia, rozjazd statusów i faktury z opóźnieniem.",
    whyHere:
      "W Tarnobrzegu automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Przemysł i produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
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
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Tarnobrzegu startujemy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "tar-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "tar-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "tar-3",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "tar-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["stalowa-wola", "nisko", "mielec", "rzeszow", "debica"],
  },
  {
    slug: "lancut",
    name: "Łańcut",
    nameGenitive: "Łańcuta",
    nameLocative: "Łańcucie",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Łańcucie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łańcuta: handel, produkcja i usługi we wschodnim pierścieniu Rzeszowa. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Łańcucie",
    heroLead:
      "Spinamy łańcuckie procesy, gdy lokalne MŚP obsługują Rzeszów w jednym tempie dokumentów.",
    introParagraphs: [
      "Łańcut to handel, produkcja i usługi tuż na wschód od Rzeszowa. Automatyzacja procesów w Łańcucie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat łańcucki żyje bliskością Rzeszowa. Typowy ból to ręczne potwierdzenia i faktury doganiające realizację.",
    whyHere:
      "W Łańcucie automatyzacja wyrównuje tempo obsługi wobec klientów z Rzeszowa bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Handel B2B",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja lokalna",
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
        title: "Status realizacji",
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
      "W Łańcucie zaczynamy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lan-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lan-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "lan-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "lan-4",
        question: "Czy musicie być w Łańcucie?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["rzeszow", "przeworsk", "lezajsk", "jaroslaw", "kolbuszowa"],
  },
  {
    slug: "kolbuszowa",
    name: "Kolbuszowa",
    nameGenitive: "Kolbuszowej",
    nameLocative: "Kolbuszowej",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Kolbuszowej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kolbuszowej: handel, produkcja i usługi północnego pierścienia Rzeszowa. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kolbuszowej",
    heroLead:
      "Odciążamy kolbuszowskie biura, gdy lokalny rynek wymaga sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Kolbuszowa łączy handel, produkcję i usługi na północ od Rzeszowa. Automatyzacja procesów w Kolbuszowej zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat kolbuszowski ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Kolbuszowej automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych spraw.",
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
      "W Kolbuszowej zaczynamy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "kol-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kol-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "kol-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "kol-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["rzeszow", "mielec", "lancut", "stalowa-wola", "ropczyce"],
  },
  {
    slug: "strzyzow",
    name: "Strzyżów",
    nameGenitive: "Strzyżowa",
    nameLocative: "Strzyżowie",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Strzyżowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Strzyżowa: produkcja, handel i usługi południowego pierścienia Rzeszowa. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Strzyżowie",
    heroLead:
      "Porządkujemy strzyżowskie procesy, gdy lokalne MŚP potrzebują sprawnego biura bez dokładania etatów.",
    introParagraphs: [
      "Strzyżów to produkcja, handel i usługi na południe od Rzeszowa. Automatyzacja procesów w Strzyżowie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat strzyżowski ma firmy z cienką administracją. Typowy ból to ręczne potwierdzenia i dokumenty z opóźnieniem.",
    whyHere:
      "W Strzyżowie automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
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
        title: "Status realizacji",
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
      "W Strzyżowie startujemy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "str-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "str-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę utrzymania, także w mniejszym zespole bez etatu IT.",
      },
      {
        id: "str-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "str-4",
        question: "Czy musicie być w Strzyżowie?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["rzeszow", "krosno", "jaslo", "ropczyce", "brzozow"],
  },
  {
    slug: "ropczyce",
    name: "Ropczyce",
    nameGenitive: "Ropczyc",
    nameLocative: "Ropczycach",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Ropczycach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ropczyc: produkcja, handel i logistyka zachodniego pierścienia Rzeszowa. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Ropczycach",
    heroLead:
      "Spinamy ropczyckie procesy produkcyjne i handlowe, gdy ruch w stronę Rzeszowa i Dębicy wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Ropczyce to siedziba powiatu ropczycko-sędziszowskiego z produkcją, handlem i logistyką. Automatyzacja procesów w Ropczycach zwykle dotyczy zamówień, awizacji i faktur.",
      "Współpracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat łączy zakłady z firmami handlowymi między Rzeszowem a Dębicą. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Ropczycach automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury.",
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
        title: "Awizacja",
        body: "Powiadomienia i eskalacje opóźnień zamiast telefonów.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "KPI zbierane automatycznie, bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Ropczycach zaczynamy od procesu zamówieniowego lub wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "rop-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "rop-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "rop-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "rop-4",
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
    nearbyCitySlugs: ["debica", "rzeszow", "mielec", "strzyzow", "kolbuszowa"],
  },
  {
    slug: "lezajsk",
    name: "Leżajsk",
    nameGenitive: "Leżajska",
    nameLocative: "Leżajsku",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Leżajsku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Leżajska: produkcja, handel i usługi północno-wschodniego Podkarpacia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Leżajsku",
    heroLead:
      "Pomagamy leżajskim firmom uporządkować dokumenty i statusy bez rozrostu biura.",
    introParagraphs: [
      "Leżajsk łączy produkcję, handel i usługi na północny wschód od Rzeszowa. Automatyzacja procesów w Leżajsku często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat leżajski ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Leżajsku automatyzacja skraca czas od zlecenia do faktury i broni jakości obsługi.",
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
      "W Leżajsku zaczynamy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "lez-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lez-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "lez-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "lez-4",
        question: "Czy musicie być w Leżajsku?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lancut", "nisko", "stalowa-wola", "jaroslaw", "rzeszow"],
  },
  {
    slug: "mielec",
    name: "Mielec",
    nameGenitive: "Mielca",
    nameLocative: "Mielcu",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Mielcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Mielca: aerospace, produkcja, handel i logistyka. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Mielcu",
    heroLead:
      "Porządkujemy mieleckie procesy produkcyjne, gdy hala, magazyn i biuro muszą mówić tym samym językiem.",
    introParagraphs: [
      "Mielec to silny ośrodek produkcyjny Podkarpacia z tradycją lotniczą i zapleczem dostawców. Automatyzacja procesów w Mielcu zwykle dotyczy statusów zleceń, zgłoszeń, awizacji i dokumentów między zmianami a biurem.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres i szkolimy osoby odpowiedzialne za wyjątki.",
    ],
    localContext:
      "Region łączy advanced manufacturing z lokalnymi MŚP. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie albo księgowość.",
    whyHere:
      "W Mielcu automatyzacja opłaca się, gdy skraca reakcję na odchylenia i daje jeden wiarygodny obraz operacji.",
    focusIndustries: [
      {
        title: "Aerospace i advanced manufacturing",
        body: "Statusy, protokoły i obiegi zatwierdzeń w przewidywalnym torze.",
      },
      {
        title: "Dostawcy utrzymania ruchu",
        body: "Zgłoszenia, części i rozliczenia bez ginących maili.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
    ],
    focusProcesses: [
      {
        title: "Zgłoszenia i eskalacje",
        body: "Priorytety, SLA i historia działań w jednym miejscu.",
      },
      {
        title: "Status produkcji",
        body: "Status widoczny dla biura i handlu bez telefonów na halę.",
      },
      {
        title: "Raport zmianowy",
        body: "Dane zbierane automatycznie, bez ręcznego składania w piątek.",
      },
      {
        title: "Faktura po wysyłce",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "Z firmami z Mielca startujemy od procesu krytycznego dla ciągłości. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "mie-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy też z mniejszymi dostawcami i firmami usługowymi wokół przemysłu.",
      },
      {
        id: "mie-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "mie-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od Waszego stacku.",
      },
      {
        id: "mie-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często w kilka tygodni po krótkiej diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-dla-logistyki",
    ],
    nearbyCitySlugs: ["debica", "tarnobrzeg", "stalowa-wola", "rzeszow", "kolbuszowa"],
  },
  {
    slug: "debica",
    name: "Dębica",
    nameGenitive: "Dębicy",
    nameLocative: "Dębicy",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Dębicy | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Dębicy: produkcja, przemysł, handel i logistyka. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Dębicy",
    heroLead:
      "Pomagamy dębickim zakładom spiąć zamówienia z magazynem, gdy lokalna produkcja wymaga sprawnego biura.",
    introParagraphs: [
      "Dębica to produkcja, przemysł i handel na zachodzie Podkarpacia. Automatyzacja procesów w Dębicy często dotyczy statusów zleceń, awizacji i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat dębicki ma zakłady i MŚP z presją na terminy. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Dębicy automatyzacja broni terminów dostaw i skraca rozliczenia.",
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
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Back-office",
        body: "Faktury po kompletnym statusie zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla handlu i magazynu.",
      },
      {
        title: "Status produkcji",
        body: "Status widoczny dla handlu bez telefonów na halę.",
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
      "W Dębicy startujemy od procesu wysyłkowego lub produkcyjnego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "deb-1",
        question: "Czy to dla firm produkcyjnych?",
        answer:
          "Tak. Statusy i awizacje to częsty pierwszy etap u firm produkcyjnych.",
      },
      {
        id: "deb-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "deb-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "deb-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["mielec", "ropczyce", "rzeszow", "tarnobrzeg", "jaslo"],
  },
  {
    slug: "stalowa-wola",
    name: "Stalowa Wola",
    nameGenitive: "Stalowej Woli",
    nameLocative: "Stalowej Woli",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Stalowej Woli | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Stalowej Woli: przemysł ciężki, produkcja, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Stalowej Woli",
    heroLead:
      "Porządkujemy stalowowolskie procesy przemysłowe, gdy dokumenty muszą nadążyć za operacjami na hali.",
    introParagraphs: [
      "Stalowa Wola to silny ośrodek przemysłowy północnego Podkarpacia. Automatyzacja procesów w Stalowej Woli zwykle dotyczy statusów zleceń, zgłoszeń utrzymania ruchu i dokumentów między zmianami a biurem.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ i wdrażamy wąski zakres.",
    ],
    localContext:
      "Region łączy przemysł ciężki z dostawcami i MŚP. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie albo księgowość.",
    whyHere:
      "W Stalowej Woli automatyzacja skraca reakcję na odchylenia i daje jeden wiarygodny obraz operacji.",
    focusIndustries: [
      {
        title: "Przemysł i produkcja",
        body: "Statusy, protokoły i obiegi zatwierdzeń w przewidywalnym torze.",
      },
      {
        title: "Utrzymanie ruchu",
        body: "Zgłoszenia, części i rozliczenia bez ginących maili.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
    ],
    focusProcesses: [
      {
        title: "Zgłoszenia i eskalacje",
        body: "Priorytety, SLA i historia działań w jednym miejscu.",
      },
      {
        title: "Status produkcji",
        body: "Status widoczny dla biura i handlu bez telefonów na halę.",
      },
      {
        title: "Raport zmianowy",
        body: "Dane zbierane automatycznie, bez ręcznego składania w piątek.",
      },
      {
        title: "Faktura po wysyłce",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "Z firmami ze Stalowej Woli startujemy od procesu krytycznego dla ciągłości. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "stw-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy też z mniejszymi dostawcami i firmami usługowymi wokół przemysłu.",
      },
      {
        id: "stw-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "stw-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od Waszego stacku.",
      },
      {
        id: "stw-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często w kilka tygodni po krótkiej diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-dla-logistyki",
    ],
    nearbyCitySlugs: ["tarnobrzeg", "nisko", "mielec", "lezajsk", "rzeszow"],
  },
  {
    slug: "nisko",
    name: "Nisko",
    nameGenitive: "Niska",
    nameLocative: "Nisku",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Nisku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Niska: produkcja, handel i usługi powiatu niżańskiego. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Nisku",
    heroLead:
      "Odciążamy niżańskie biura, gdy lokalne MŚP potrzebują sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Nisko to siedziba powiatu niżańskiego z produkcją, handlem i usługami. Automatyzacja procesów w Nisku często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat niżański ma firmy z cienkim back-office i kontaktami w stronę Stalowej Woli. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Nisku automatyzacja skraca czas od zlecenia do faktury.",
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
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Nisku zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "nis-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "nis-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "nis-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "nis-4",
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
    nearbyCitySlugs: ["stalowa-wola", "tarnobrzeg", "lezajsk", "janow-lubelski", "rzeszow"],
  },
  {
    slug: "jaslo",
    name: "Jasło",
    nameGenitive: "Jasła",
    nameLocative: "Jaśle",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Jaśle | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Jasła: przemysł, produkcja, handel i usługi południowo-zachodniego Podkarpacia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Jaśle",
    heroLead:
      "Spinamy jasielskie procesy przemysłowe, gdy lokalna produkcja i handel wymagają sprawnych dokumentów.",
    introParagraphs: [
      "Jasło łączy przemysł, produkcję i handel na południowym zachodzie regionu. Automatyzacja procesów w Jaśle zwykle dotyczy statusów zleceń, awizacji i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat jasielski ma zakłady i MŚP z cienkim biurem. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Jaśle automatyzacja broni terminów i skraca ścieżkę od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Przemysł i produkcja",
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
        title: "Status produkcji",
        body: "Status widoczny dla handlu bez telefonów na halę.",
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
      "W Jaśle zaczynamy od procesu produkcyjnego lub zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "jas-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "jas-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "jas-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "jas-4",
        question: "Czy musicie być w Jaśle?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["krosno", "debica", "strzyzow", "rzeszow", "sanok"],
  },
  {
    slug: "jaroslaw",
    name: "Jarosław",
    nameGenitive: "Jarosławia",
    nameLocative: "Jarosławiu",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Jarosławiu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Jarosławia: handel, produkcja i logistyka wschodniego Podkarpacia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Jarosławiu",
    heroLead:
      "Porządkujemy jarosławskie procesy handlowe i produkcyjne, gdy ruch regionalny wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Jarosław to handel, produkcja i logistyka na wschodzie Podkarpacia. Automatyzacja procesów w Jarosławiu często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat jarosławski łączy handel z lokalną produkcją i ruchem w stronę Przemyśla. Typowy ból to ręczne potwierdzenia i dokumenty z opóźnieniem.",
    whyHere:
      "W Jarosławiu automatyzacja broni tempa obsługi i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
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
        body: "Potwierdzenie widoczne dla handlu i magazynu.",
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
      "W Jarosławiu startujemy od procesu zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "jar-1",
        question: "Czy automatyzacja ma sens przy handlu regionalnym?",
        answer:
          "Właśnie wtedy. Status i dokumenty muszą być szybsze niż telefon do biura.",
      },
      {
        id: "jar-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "jar-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "jar-4",
        question: "Czy musicie być w Jarosławiu?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["przemysl", "przeworsk", "lubaczow", "lancut", "rzeszow"],
  },
  {
    slug: "przeworsk",
    name: "Przeworsk",
    nameGenitive: "Przeworska",
    nameLocative: "Przeworsku",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Przeworsku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Przeworska: handel, produkcja i usługi między Rzeszowem a Przemyślem. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Przeworsku",
    heroLead:
      "Odciążamy przeworskie biura, gdy lokalny rynek wymaga sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Przeworsk łączy handel, produkcję i usługi między Rzeszowem a wschodnią granicą. Automatyzacja procesów w Przeworsku zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat przeworski ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Przeworsku automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Przeworsku zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "prw-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "prw-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "prw-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "prw-4",
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
    nearbyCitySlugs: ["lancut", "jaroslaw", "przemysl", "rzeszow", "lezajsk"],
  },
  {
    slug: "lubaczow",
    name: "Lubaczów",
    nameGenitive: "Lubaczowa",
    nameLocative: "Lubaczowie",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Lubaczowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lubaczowa: handel, produkcja i usługi przy wschodniej granicy Podkarpacia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Lubaczowie",
    heroLead:
      "Spinamy lubaczowskie procesy, gdy odległość od Rzeszowa nie może spowalniać biura.",
    introParagraphs: [
      "Lubaczów to handel, produkcja i usługi przy wschodniej granicy. Automatyzacja procesów w Lubaczowie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat lubaczowski ma firmy z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Lubaczowie automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja lokalna",
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
      "W Lubaczowie startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "lub-1",
        question: "Czy automatyzacja ma sens daleko od Rzeszowa?",
        answer:
          "Tym bardziej. Klienci i tak oczekują szybkiego statusu niezależnie od odległości od stolicy regionu.",
      },
      {
        id: "lub-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
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
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["jaroslaw", "przemysl", "bilgoraj", "zamosc", "rzeszow"],
  },
  {
    slug: "sanok",
    name: "Sanok",
    nameGenitive: "Sanoka",
    nameLocative: "Sanoku",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Sanoku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sanoka: produkcja, handel, turystyka i usługi Bieszczad. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Sanoku",
    heroLead:
      "Porządkujemy sanockie procesy produkcyjne i usługowe, gdy lokalny rynek i turystyka mnożą dokumenty.",
    introParagraphs: [
      "Sanok łączy produkcję, handel, usługi i turystykę u wrót Bieszczad. Automatyzacja procesów w Sanoku zwykle dotyczy zamówień, zapytań, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Miasto i powiat mają MŚP z cienkim biurem oraz sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury doganiające realizację.",
    whyHere:
      "W Sanoku automatyzacja skraca czas od zlecenia do faktury i broni jakości obsługi w sezonie.",
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
        title: "Turystyka i usługi",
        body: "Rezerwacje, oferty i follow-up w CRM zamiast ginącej skrzynki.",
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
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
    ],
    howWeWork:
      "W Sanoku zaczynamy od procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "san-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "san-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "san-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "san-4",
        question: "Czy musicie być w Sanoku?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["krosno", "brzozow", "ustrzyki-dolne", "przemysl", "rzeszow"],
  },
  {
    slug: "brzozow",
    name: "Brzozów",
    nameGenitive: "Brzozowa",
    nameLocative: "Brzozowie",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Brzozowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Brzozowa: produkcja, handel i usługi południowego Podkarpacia. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Brzozowie",
    heroLead:
      "Pomagamy brzozowskim firmom uporządkować dokumenty i statusy bez rozrostu biura.",
    introParagraphs: [
      "Brzozów to produkcja, handel i usługi na południu regionu. Automatyzacja procesów w Brzozowie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start.",
    ],
    localContext:
      "Powiat brzozowski ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Brzozowie automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Brzozowie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "brz-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "brz-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "brz-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "brz-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["krosno", "sanok", "strzyzow", "rzeszow", "ustrzyki-dolne"],
  },
  {
    slug: "ustrzyki-dolne",
    name: "Ustrzyki Dolne",
    nameGenitive: "Ustrzyk Dolnych",
    nameLocative: "Ustrzykach Dolnych",
    voivodeship: "podkarpackie",
    regionCluster: "podkarpacie",
    metaTitle: "Automatyzacja procesów w Ustrzykach Dolnych | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ustrzyk Dolnych: turystyka, handel i usługi Bieszczad. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Ustrzykach Dolnych",
    heroLead:
      "Spinamy ustrzyckie procesy, gdy sezon i odległość od Rzeszowa nie mogą spowalniać biura.",
    introParagraphs: [
      "Ustrzyki Dolne to siedziba powiatu bieszczadzkiego z turystyką, handlem i usługami. Automatyzacja procesów w Ustrzykach Dolnych często dotyczy rezerwacji, zapytań, zamówień i faktur.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do małego zespołu i sezonowego ruchu.",
    ],
    localContext:
      "Powiat bieszczadzki ma firmy z ograniczonym zapleczem IT i wyraźnym sezonem. Typowy ból to ręczne potwierdzenia, ginące zapytania i faktury z opóźnieniem.",
    whyHere:
      "W Ustrzykach Dolnych automatyzacja wyrównuje tempo obsługi w sezonie i chroni jakość kontaktu z gośćmi oraz kontrahentami.",
    focusIndustries: [
      {
        title: "Turystyka i noclegi",
        body: "Rezerwacje, oferty i follow-up w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Handel i usługi lokalne",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Gastronomia i wydarzenia",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie i rezerwacja",
        body: "Kolejka w CRM z przypomnieniem o follow-upie.",
      },
      {
        title: "Potwierdzenie usługi",
        body: "Status widoczny dla zespołu bez telefonów między osobami.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport sezonowy",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Ustrzykach Dolnych startujemy od jednego obiegu, zwykle zapytań lub faktur. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "ust-1",
        question: "Czy automatyzacja ma sens w sezonowej firmie turystycznej?",
        answer:
          "Właśnie wtedy. W szczycie nie macie czasu na ręczne doganianie zapytań.",
      },
      {
        id: "ust-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "ust-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ust-4",
        question: "Czy musicie być w Ustrzykach Dolnych?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["sanok", "brzozow", "krosno", "przemysl", "rzeszow"],
  },
];
