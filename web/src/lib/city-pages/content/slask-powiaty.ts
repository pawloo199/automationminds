import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Śląska (bez miast już obecnych w slask.ts / tier1). */
export const slaskPowiatCities: CityPageContent[] = [
  {
    slug: "bedzin",
    name: "Będzin",
    nameGenitive: "Będzina",
    nameLocative: "Będzinie",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Będzinie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Będzina: przemysł, logistyka i usługi Zagłębia. Zdalne wdrożenia, konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Będzinie",
    heroLead:
      "Porządkujemy będzińskie procesy produkcyjne i biurowe, gdy Zagłębie wymaga tempa, a Excel nie nadąża za halą.",
    introParagraphs: [
      "Będzin leży w sercu Zagłębia: przemysł, logistyka i usługi powiązane z Sosnowcem oraz Dąbrową Górniczą. Automatyzacja procesów w Będzinie zwykle dotyczy statusów zleceń, faktur i raportów między zmianami a biurem.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go tak, by dało się utrzymać bez osobnego działu IT.",
    ],
    localContext:
      "Powiat będziński łączy zakłady produkcyjne z firmami usługowymi dla aglomeracji. Typowy ból to ręczne raporty zmianowe, opóźnione faktury i brak jednej prawdy o stanie zlecenia.",
    whyHere:
      "W Będzinie automatyzacja chroni marżę przy krótkich terminach odbiorców z Zagłębia i zmniejsza liczbę godzin na poprawianie dokumentów.",
    focusIndustries: [
      {
        title: "Produkcja i montaż",
        body: "Statusy i wyjątki jakości między zmianami.",
      },
      {
        title: "Logistyka lokalna",
        body: "Awizacje i powiadomienia bez ręcznych SMS-ów.",
      },
      {
        title: "Usługi dla przemysłu",
        body: "Zlecenia serwisowe i protokoły.",
      },
      {
        title: "Back-office",
        body: "Faktury, HR i raporty dla właściciela.",
      },
    ],
    focusProcesses: [
      {
        title: "Raport zmianowy",
        body: "Dane zbierane automatycznie, nie w piątek.",
      },
      {
        title: "Faktura po realizacji",
        body: "Po statusie, nie po pamięci.",
      },
      {
        title: "Reklamacja",
        body: "Historia i terminy w jednym torze.",
      },
      {
        title: "Zamówienie B2B",
        body: "Potwierdzenie i limity w CRM.",
      },
    ],
    howWeWork:
      "Z firmami z Będzina zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "bed-1",
        question: "Czy automatyzacja w Będzinie ma sens dla średniego zakładu?",
        answer:
          "Tak. Startujemy od jednego obiegu z szybkim zwrotem.",
      },
      {
        id: "bed-2",
        question: "Czy musicie być na hali?",
        answer:
          "Warsztat planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "bed-3",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Spinamy to, czym już pracujecie.",
      },
      {
        id: "bed-4",
        question: "Jak zacząć?",
        answer:
          "Umów konsultację i opiszcie wąskie gardło.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["sosnowiec", "dabrowa-gornicza", "katowice", "myslowice", "zawiercie"],
  },
  {
    slug: "bierun",
    name: "Bieruń",
    nameGenitive: "Bierunia",
    nameLocative: "Bieruniu",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Bieruniu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Bierunia: produkcja, automotive-adjacent i logistyka. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Bieruniu",
    heroLead:
      "Spinamy bieruńskie procesy produkcyjne i magazynowe, gdy terminy odbiorców nie wybaczą chaosu w dokumentach.",
    introParagraphs: [
      "Bieruń jest siedzibą powiatu bieruńsko-lędzińskiego: produkcja, logistyka i firmy powiązane z łańcuchem dostaw aglomeracji. Automatyzacja procesów w Bieruniu często dotyczy statusów zleceń, jakości i awizacji.",
      "Pracujemy zdalnie. Wąski zakres, mierzalny efekt, dokumentacja po polsku.",
    ],
    localContext:
      "W powiecie widać zakłady i dostawców pracujących pod presją terminów. Typowy ból to ręczne protokoły, rozjazd planowania ze sprzedażą i opóźnione powiadomienia o odchyleniach.",
    whyHere:
      "W Bieruniu automatyzacja broni terminów wobec klientów B2B i skraca czas reakcji na wyjątek jakości lub dostawy.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy, materiały, wyjątki.",
      },
      {
        title: "Dostawcy automotive-adjacent",
        body: "Dokumentacja i eskalacje.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i sloty.",
      },
      {
        title: "HR zmianowy",
        body: "Wnioski i onboarding.",
      },
    ],
    focusProcesses: [
      {
        title: "Status zlecenia",
        body: "Jedna prawda dla hali i biura.",
      },
      {
        title: "Protokół jakości",
        body: "Termin i archiwum.",
      },
      {
        title: "Awizacja",
        body: "Potwierdzenia bez telefonów.",
      },
      {
        title: "Raport KPI",
        body: "Z systemów źródłowych.",
      },
    ],
    howWeWork:
      "W Bieruniu startujemy od procesu krytycznego dla klienta. Wdrażamy zdalnie, z testami na realnych zleceniach.",
    faq: [
      {
        id: "bir-1",
        question: "Czy automatyzujecie procesy pod odbiorców przemysłowych?",
        answer:
          "Tak. Statusy, dokumenty i powiadomienia to częsty zakres.",
      },
      {
        id: "bir-2",
        question: "Czy wymieniacie MES?",
        answer:
          "Nie z marszu. Najpierw spajamy dziury informacyjne.",
      },
      {
        id: "bir-3",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy: kilka tygodni.",
      },
      {
        id: "bir-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["tychy", "katowice", "pszczyna", "mikolow", "myslowice"],
  },
  {
    slug: "cieszyn",
    name: "Cieszyn",
    nameGenitive: "Cieszyna",
    nameLocative: "Cieszynie",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Cieszynie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Cieszyna: produkcja, handel przygraniczny, turystyka i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Cieszynie",
    heroLead:
      "Porządkujemy cieszyńskie procesy, gdy dokumenty i statusy muszą działać po obu stronach granicy i w sezonie.",
    introParagraphs: [
      "Cieszyn łączy produkcję, handel przygraniczny, turystykę i usługi. Automatyzacja procesów w Cieszynie często dotyczy zamówień, faktur, rezerwacji i statusów dostaw.",
      "Współpracujemy zdalnie. Poza sezonem mapujemy procesy, przed szczytem wdrażamy to, co najbardziej odciąża biuro.",
    ],
    localContext:
      "Powiat cieszyński żyje eksportem, lokalnym przemysłem i ruchem turystycznym. Typowy ból to ręczne tłumaczenie statusów, rozproszone kanały zapytań i faktury doganiające sezon.",
    whyHere:
      "W Cieszynie automatyzacja broni terminowości wobec partnerów zagranicznych i spokój biura w sezonie.",
    focusIndustries: [
      {
        title: "Produkcja i eksport",
        body: "Dokumenty, statusy, rozliczenia.",
      },
      {
        title: "Handel przygraniczny",
        body: "Zamówienia i limity.",
      },
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje i przypomnienia.",
      },
      {
        title: "Usługi B2B",
        body: "Lead, oferta, follow-up.",
      },
    ],
    focusProcesses: [
      {
        title: "Dokumenty eksportowe",
        body: "Komplet zamiast zbierania załączników.",
      },
      {
        title: "Rezerwacja",
        body: "Potwierdzenie i przypomnienie.",
      },
      {
        title: "Faktura",
        body: "Po statusie realizacji.",
      },
      {
        title: "Zapytanie ofertowe",
        body: "Kolejka w CRM.",
      },
    ],
    howWeWork:
      "W Cieszynie zaczynamy od procesu, który generuje najwięcej pilnych maili. Wdrażamy zdalnie.",
    faq: [
      {
        id: "cie-1",
        question: "Czy pomagacie przy dokumentach dla partnerów z Czech?",
        answer:
          "Pomagamy w przepływie danych i statusów po Waszej stronie.",
      },
      {
        id: "cie-2",
        question: "Czy automatyzacja ma sens dla pensjonatu lub hotelu?",
        answer:
          "Tak. Rezerwacje i dokumenty to częsty start.",
      },
      {
        id: "cie-3",
        question: "Czy musicie być w Cieszynie?",
        answer:
          "Nie. Model zdalny to standard.",
      },
      {
        id: "cie-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["bielsko-biala", "zywiec", "pszczyna", "katowice", "rybnik"],
  },
  {
    slug: "klobuck",
    name: "Kłobuck",
    nameGenitive: "Kłobucka",
    nameLocative: "Kłobucku",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Kłobucku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kłobucka: produkcja, handel i usługi północnego Śląska. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Kłobucku",
    heroLead:
      "Pomagamy kłobuckim firmom spiąć zamówienia i dokumenty, gdy północ województwa potrzebuje tempa bez rozrostu biura.",
    introParagraphs: [
      "Kłobuck to siedziba powiatu na północy Śląska: produkcja, handel, usługi. Automatyzacja procesów w Kłobucku zwykle dotyczy potwierdzeń zamówień, faktur i prostych raportów.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do MŚP.",
    ],
    localContext:
      "Powiat kłobucki ma firmy z cienką administracją. Typowy ból to ręczne maile statusowe i faktury wystawiane z opóźnieniem.",
    whyHere:
      "W Kłobucku automatyzacja oddaje czas małemu zespołowi i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i limity.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie.",
      },
      {
        title: "Realizacja",
        body: "Status widoczny.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu.",
      },
      {
        title: "Raport",
        body: "Bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Kłobucku startujemy od procesu, który najbardziej zabiera czas biura. Wdrażamy zdalnie.",
    faq: [
      {
        id: "klo-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Od jednego obiegu.",
      },
      {
        id: "klo-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu.",
      },
      {
        id: "klo-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie.",
      },
      {
        id: "klo-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["czestochowa", "lubliniec", "myszkow", "zawiercie", "katowice"],
  },
  {
    slug: "lubliniec",
    name: "Lubliniec",
    nameGenitive: "Lublińca",
    nameLocative: "Lublińcu",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Lublińcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lublińca: produkcja, handel i logistyka. Zdalne wdrożenia procesów. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Lublińcu",
    heroLead:
      "Porządkujemy lublinieckie procesy produkcyjne i handlowe, gdy dokumenty nie mogą zostawać w tyle za wysyłką.",
    introParagraphs: [
      "Lubliniec to produkcja, handel i usługi w powiecie lublinieckim. Automatyzacja procesów w Lublińcu często dotyczy zamówień, magazynu i fakturowania.",
      "Współpracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat lubliniecki łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy, opóźnione dokumenty wysyłkowe i brak jednego raportu należności.",
    whyHere:
      "W Lublińcu automatyzacja skraca czas od zamówienia do faktury i zmniejsza liczbę błędów w B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i wyjątki.",
      },
      {
        title: "Handel",
        body: "Zamówienia.",
      },
      {
        title: "Logistyka",
        body: "Awizacje.",
      },
      {
        title: "Administracja",
        body: "Faktury i HR.",
      },
    ],
    focusProcesses: [
      {
        title: "Potwierdzenie zamówienia",
        body: "Reguły zamiast maila.",
      },
      {
        title: "Dokumenty wysyłkowe",
        body: "Komplet przed wyjazdem.",
      },
      {
        title: "Faktura",
        body: "Po statusie dostawy.",
      },
      {
        title: "Raport sprzedaży",
        body: "Automatycznie.",
      },
    ],
    howWeWork:
      "W Lublińcu zaczynamy od procesu wysyłkowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lub-1",
        question: "Czy automatyzacja pomoże średniej firmie?",
        answer:
          "Tak.",
      },
      {
        id: "lub-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę.",
      },
      {
        id: "lub-3",
        question: "Czy musicie być na miejscu?",
        answer:
          "Nie.",
      },
      {
        id: "lub-4",
        question: "Jak zacząć?",
        answer:
          "Konsultacja 30 minut.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["czestochowa", "klobuck", "tarnowskie-gory", "gliwice", "opole"],
  },
  {
    slug: "mikolow",
    name: "Mikołów",
    nameGenitive: "Mikołowa",
    nameLocative: "Mikołowie",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Mikołowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Mikołowa: produkcja, usługi i logistyka południa aglomeracji. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Mikołowie",
    heroLead:
      "Spinamy mikołowskie procesy, gdy bliskość Katowic i Tychów podnosi oczekiwania, a biuro zostaje w tyle.",
    introParagraphs: [
      "Mikołów leży na południu aglomeracji: produkcja, usługi, logistyka. Automatyzacja procesów w Mikołowie zwykle dotyczy statusów zleceń, faktur i obsługi klienta B2B.",
      "Pracujemy zdalnie. Najpierw proces o najwyższym koszcie chaosu.",
    ],
    localContext:
      "Powiat mikołowski ma firmy rosnące wraz z aglomeracją. Typowy ból to ręczne leady, opóźnione faktury i brak wspólnego statusu zlecenia.",
    whyHere:
      "W Mikołowie automatyzacja wyrównuje tempo obsługi wobec klientów z Katowic i Tychów bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i jakość.",
      },
      {
        title: "Usługi B2B",
        body: "Zlecenia i follow-up.",
      },
      {
        title: "Logistyka",
        body: "Awizacje.",
      },
      {
        title: "HR",
        body: "Onboarding i wnioski.",
      },
    ],
    focusProcesses: [
      {
        title: "Lead do handlowca",
        body: "CRM z przypomnieniami.",
      },
      {
        title: "Domknięcie zlecenia",
        body: "Checklist przed fakturą.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje z limitem.",
      },
      {
        title: "Raport dla właściciela",
        body: "Bez cotygodniowego Excela.",
      },
    ],
    howWeWork:
      "W Mikołowie zaczynamy od konsultacji i jednego procesu. Wdrażamy zdalnie, etapami.",
    faq: [
      {
        id: "mik-1",
        question: "Czy to dla MŚP z Mikołowa?",
        answer:
          "Tak. To częsty profil.",
      },
      {
        id: "mik-2",
        question: "Czy potrzebujemy własnego IT?",
        answer:
          "Nie do startu.",
      },
      {
        id: "mik-3",
        question: "Ile trwa etap?",
        answer:
          "Kilka tygodni przy wąskim zakresie.",
      },
      {
        id: "mik-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["tychy", "katowice", "bierun", "pszczyna", "ruda-slaska"],
  },
  {
    slug: "myszkow",
    name: "Myszków",
    nameGenitive: "Myszkowa",
    nameLocative: "Myszkowie",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Myszkowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Myszkowa: produkcja, handel i usługi wschodniego Śląska. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Myszkowie",
    heroLead:
      "Odciążamy myszkowskie biura i zakłady, gdy lokalny przemysł potrzebuje porządku w statusach i dokumentach.",
    introParagraphs: [
      "Myszków to produkcja, handel i usługi w powiecie myszkowskim. Automatyzacja procesów w Myszkowie często dotyczy zamówień, jakości i faktur.",
      "Współpracujemy zdalnie. Prosty start, utrzymanie po stronie zespołu biznesowego.",
    ],
    localContext:
      "Powiat myszkowski ma MŚP z ograniczonym zapleczem administracyjnym. Typowy ból to ręczne raporty i faktury doganiające realizację.",
    whyHere:
      "W Myszkowie automatyzacja zwraca czas biuru i zmniejsza ryzyko błędów przy stałych odbiorcach.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i wyjątki.",
      },
      {
        title: "Handel",
        body: "Zamówienia B2B.",
      },
      {
        title: "Usługi",
        body: "Zlecenia.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie.",
      },
      {
        title: "Jakość",
        body: "Protokół i archiwum.",
      },
      {
        title: "Faktura",
        body: "Po realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny.",
      },
    ],
    howWeWork:
      "W Myszkowie startujemy od procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "mys-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak.",
      },
      {
        id: "mys-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę.",
      },
      {
        id: "mys-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni.",
      },
      {
        id: "mys-4",
        question: "Czy musicie być w Myszkowie?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["czestochowa", "zawiercie", "klobuck", "katowice", "dabrowa-gornicza"],
  },
  {
    slug: "pszczyna",
    name: "Pszczyna",
    nameGenitive: "Pszczyny",
    nameLocative: "Pszczynie",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Pszczynie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pszczyny: produkcja, logistyka, handel i usługi. Zdalne wdrożenia. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Pszczynie",
    heroLead:
      "Porządkujemy pszczyńskie procesy produkcyjne i handlowe, gdy południe aglomeracji wymaga sprawnych statusów.",
    introParagraphs: [
      "Pszczyna to produkcja, logistyka i handel na południu województwa. Automatyzacja procesów w Pszczynie często dotyczy awizacji, zamówień i dokumentów jakości.",
      "Pracujemy zdalnie. Wąski zakres z mierzalnym efektem przed skalowaniem.",
    ],
    localContext:
      "Powiat pszczyński łączy zakłady z firmami usługowymi. Typowy ból to ręczne potwierdzenia terminów i rozjazd magazynu ze sprzedażą.",
    whyHere:
      "W Pszczynie automatyzacja broni terminów dostaw i skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i materiały.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i wyjątki.",
      },
      {
        title: "Handel",
        body: "Zamówienia i limity.",
      },
      {
        title: "Usługi",
        body: "Zlecenia terenowe.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja",
        body: "Sloty i powiadomienia.",
      },
      {
        title: "Status magazynu",
        body: "Jedna prawda.",
      },
      {
        title: "Protokół",
        body: "Termin i archiwum.",
      },
      {
        title: "Faktura",
        body: "Po wysyłce.",
      },
    ],
    howWeWork:
      "W Pszczynie zaczynamy od procesu wysyłkowego lub jakościowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "psz-1",
        question: "Czy automatyzujecie awizacje?",
        answer:
          "Tak. To częsty pierwszy etap.",
      },
      {
        id: "psz-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Najpierw spajamy to, co działa.",
      },
      {
        id: "psz-3",
        question: "Jak szybko widać efekt?",
        answer:
          "Przy wąskim zakresie często w kilka tygodni.",
      },
      {
        id: "psz-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["tychy", "bierun", "bielsko-biala", "cieszyn", "katowice"],
  },
  {
    slug: "raciborz",
    name: "Racibórz",
    nameGenitive: "Raciborza",
    nameLocative: "Raciborzu",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Raciborzu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Raciborza: produkcja, handel przygraniczny i logistyka. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Raciborzu",
    heroLead:
      "Wspieramy raciborskie firmy, gdy dokumenty i statusy muszą nadążyć za partnerami z regionu i za granicą.",
    introParagraphs: [
      "Racibórz to produkcja, handel i logistyka na zachodzie województwa, z ekspozycją na rynek przygraniczny. Automatyzacja procesów w Raciborzu zwykle dotyczy zamówień, dokumentów wysyłkowych i faktur.",
      "Współpracujemy zdalnie. Najpierw proces krytyczny dla terminu lub rozliczenia.",
    ],
    localContext:
      "Powiat raciborski łączy zakłady z firmami handlowymi. Typowy ból to ręczne kompletowanie dokumentów, opóźnione faktury i brak jednego statusu dostawy.",
    whyHere:
      "W Raciborzu automatyzacja poprawia przewidywalność wobec klientów B2B i zmniejsza koszt błędów w dokumentach.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i jakość.",
      },
      {
        title: "Handel i eksport",
        body: "Dokumenty i limity.",
      },
      {
        title: "Logistyka",
        body: "Awizacje.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Dokumenty wysyłkowe",
        body: "Komplet przed wyjazdem.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i rezerwacja.",
      },
      {
        title: "Faktura",
        body: "Po statusie dostawy.",
      },
      {
        title: "Raport należności",
        body: "Automatyczny.",
      },
    ],
    howWeWork:
      "W Raciborzu startujemy od dokumentów lub zamówień. Wdrażamy zdalnie, z testami na realnych zleceniach.",
    faq: [
      {
        id: "rac-1",
        question: "Czy pomagacie przy dokumentach eksportowych?",
        answer:
          "W zakresie kompletowania i statusów po Waszej stronie.",
      },
      {
        id: "rac-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak.",
      },
      {
        id: "rac-3",
        question: "Czy musicie być w Raciborzu?",
        answer:
          "Nie.",
      },
      {
        id: "rac-4",
        question: "Jak zacząć?",
        answer:
          "Konsultacja 30 minut.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["rybnik", "wodzislaw-slaski", "gliwice", "opole", "katowice"],
  },
  {
    slug: "tarnowskie-gory",
    name: "Tarnowskie Góry",
    nameGenitive: "Tarnowskich Gór",
    nameLocative: "Tarnowskich Górach",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Tarnowskich Górach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Tarnowskich Gór: przemysł, logistyka, handel i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Tarnowskich Górach",
    heroLead:
      "Porządkujemy tarnogórskie procesy, gdy przemysł i usługi lokalne wymagają sprawnego biura i śladu dokumentów.",
    introParagraphs: [
      "Tarnowskie Góry łączą przemysł, logistykę, handel i usługi. Automatyzacja procesów w Tarnowskich Górach często dotyczy obiegów dokumentów, statusów zleceń i raportów.",
      "Pracujemy zdalnie. Zakres pod realny ból operacyjny, nie pod slajd transformacji.",
    ],
    localContext:
      "Powiat tarnogórski ma firmy przemysłowe i usługowe z presją na terminy. Typowy ból to ręczne protokoły, opóźnione akceptacje i raporty składane z kilku źródeł.",
    whyHere:
      "W Tarnowskich Górach automatyzacja chroni ślad decyzji i skraca czas reakcji na odchylenia w procesie.",
    focusIndustries: [
      {
        title: "Przemysł",
        body: "Protokoły, statusy, zatwierdzenia.",
      },
      {
        title: "Logistyka",
        body: "Awizacje.",
      },
      {
        title: "Handel",
        body: "Zamówienia B2B.",
      },
      {
        title: "Usługi lokalne",
        body: "Zlecenia i dokumenty.",
      },
    ],
    focusProcesses: [
      {
        title: "Obieg protokołu",
        body: "Termin i archiwum.",
      },
      {
        title: "Status zlecenia",
        body: "Widoczny dla biura i hali.",
      },
      {
        title: "Faktura",
        body: "Po realizacji.",
      },
      {
        title: "Raport",
        body: "Z danych źródłowych.",
      },
    ],
    howWeWork:
      "W Tarnowskich Górach zaczynamy od procesu dokumentacyjnego o najwyższym ryzyku. Wdrażamy zdalnie.",
    faq: [
      {
        id: "tar-1",
        question: "Czy automatyzacja pomoże firmie przemysłowej?",
        answer:
          "Tak. Statusy i dokumenty to częsty start.",
      },
      {
        id: "tar-2",
        question: "Czy wymagacie IT?",
        answer:
          "Nie do startu.",
      },
      {
        id: "tar-3",
        question: "Ile trwa etap?",
        answer:
          "Kilka tygodni przy prostym zakresie.",
      },
      {
        id: "tar-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["gliwice", "katowice", "lubliniec", "zabrze", "chorzow"],
  },
  {
    slug: "wodzislaw-slaski",
    name: "Wodzisław Śląski",
    nameGenitive: "Wodzisławia Śląskiego",
    nameLocative: "Wodzisławiu Śląskim",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Wodzisławiu Śląskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wodzisławia Śląskiego: przemysł, handel i usługi. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Wodzisławiu Śląskim",
    heroLead:
      "Spinamy wodzisławskie procesy produkcyjne i biurowe, gdy południowy zachód województwa wymaga sprawnych statusów.",
    introParagraphs: [
      "Wodzisław Śląski to przemysł, handel i usługi w powiecie wodzisławskim. Automatyzacja procesów w Wodzisławiu Śląskim zwykle dotyczy zamówień, jakości i faktur.",
      "Współpracujemy zdalnie. Wąski start, jasna instrukcja.",
    ],
    localContext:
      "Powiat wodzisławski łączy zakłady z firmami usługowymi. Typowy ból to ręczne statusy między zmianami a biurem oraz opóźnione rozliczenia.",
    whyHere:
      "W Wodzisławiu Śląskim automatyzacja zmniejsza koszt ręcznej koordynacji i broni terminów wobec klientów B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i wyjątki.",
      },
      {
        title: "Handel",
        body: "Zamówienia.",
      },
      {
        title: "Usługi przemysłowe",
        body: "Zlecenia i protokoły.",
      },
      {
        title: "Back-office",
        body: "Faktury i HR.",
      },
    ],
    focusProcesses: [
      {
        title: "Status zlecenia",
        body: "Jedna prawda.",
      },
      {
        title: "Reklamacja",
        body: "Historia sprawy.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu.",
      },
      {
        title: "Raport zmianowy",
        body: "Automatyczny zbiór danych.",
      },
    ],
    howWeWork:
      "W Wodzisławiu Śląskim startujemy od procesu krytycznego dla produkcji lub rozliczeń. Wdrażamy zdalnie.",
    faq: [
      {
        id: "wod-1",
        question: "Czy automatyzujecie procesy na hali?",
        answer:
          "Spinamy dane między halą a biurem.",
      },
      {
        id: "wod-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak.",
      },
      {
        id: "wod-3",
        question: "Czy musicie być na miejscu?",
        answer:
          "Tylko gdy pomaga mapowaniu.",
      },
      {
        id: "wod-4",
        question: "Jak zacząć?",
        answer:
          "Konsultacja 30 minut.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["rybnik", "raciborz", "gliwice", "katowice", "pszczyna"],
  },
  {
    slug: "zawiercie",
    name: "Zawiercie",
    nameGenitive: "Zawiercia",
    nameLocative: "Zawierciu",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Zawierciu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Zawiercia: produkcja, handel i logistyka. Zdalne wdrożenia procesów. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Zawierciu",
    heroLead:
      "Pomagamy zawierciańskim zakładom i dystrybutorom domknąć zamówienia oraz dokumenty bez dokładania etatów.",
    introParagraphs: [
      "Zawiercie to produkcja, handel i logistyka na wschodzie województwa. Automatyzacja procesów w Zawierciu często dotyczy statusów produkcji, wysyłek i faktur.",
      "Pracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat zawierciański ma firmy z rosnącym B2B i cienkim back-office. Typowy ból to ręczne potwierdzenia, opóźnione faktury i brak jednego raportu dla właściciela.",
    whyHere:
      "W Zawierciu automatyzacja skraca ścieżkę od zamówienia do wysyłki z kompletem dokumentów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i jakość.",
      },
      {
        title: "Handel",
        body: "Zamówienia i limity.",
      },
      {
        title: "Logistyka",
        body: "Awizacje.",
      },
      {
        title: "Administracja",
        body: "Faktury i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i rezerwacja.",
      },
      {
        title: "Wysyłka",
        body: "Dokumenty kompletne.",
      },
      {
        title: "Faktura",
        body: "Po statusie.",
      },
      {
        title: "Raport",
        body: "Automatyczny.",
      },
    ],
    howWeWork:
      "W Zawierciu zaczynamy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "zaw-1",
        question: "Czy automatyzacja ma sens dla średniej firmy?",
        answer:
          "Tak. Start od jednego obiegu.",
      },
      {
        id: "zaw-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę.",
      },
      {
        id: "zaw-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie.",
      },
      {
        id: "zaw-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["bedzin", "myszkow", "dabrowa-gornicza", "czestochowa", "katowice"],
  },
  {
    slug: "zywiec",
    name: "Żywiec",
    nameGenitive: "Żywca",
    nameLocative: "Żywcu",
    voivodeship: "śląskie",
    regionCluster: "slask",
    metaTitle: "Automatyzacja procesów w Żywcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Żywca: produkcja, turystyka, handel i usługi Beskidów. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Żywcu",
    heroLead:
      "Odciążamy żywieckie firmy, gdy sezon turystyczny i lokalna produkcja mnożą dokumenty, a zespół zostaje ten sam.",
    introParagraphs: [
      "Żywiec łączy produkcję, turystykę, handel i usługi u stóp Beskidów. Automatyzacja procesów w Żywcu często dotyczy rezerwacji, zamówień, faktur i obsługi szczytów sezonowych.",
      "Współpracujemy zdalnie. Idealnie mapujemy poza sezonem, a wdrażamy przed kolejnym szczytem.",
    ],
    localContext:
      "Powiat żywiecki żyje sezonowością i lokalnym przemysłem. Typowy ból to ręczne potwierdzenia, rozproszone kanały zapytań i faktury doganiające sezon z opóźnieniem.",
    whyHere:
      "W Żywcu automatyzacja sprawia, że sezon nie wypala biura. Potwierdzenia i proste raporty dzieją się w trakcie roku.",
    focusIndustries: [
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje, zaliczki, przypomnienia.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy i dokumenty.",
      },
      {
        title: "Handel",
        body: "Zamówienia B2B.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja",
        body: "Potwierdzenie i przypomnienie.",
      },
      {
        title: "Zapytanie ofertowe",
        body: "Kolejka w CRM.",
      },
      {
        title: "Faktura",
        body: "Po statusie.",
      },
      {
        title: "Raport sezonowy",
        body: "Dane zbierane na bieżąco.",
      },
    ],
    howWeWork:
      "W Żywcu najlepiej zacząć poza szczytem. Konsultacja, mapa procesu, wdrożenie przed sezonem.",
    faq: [
      {
        id: "zyw-1",
        question: "Czy automatyzacja pomoże pensjonatowi lub hotelowi?",
        answer:
          "Tak. Rezerwacje i dokumenty to częsty start.",
      },
      {
        id: "zyw-2",
        question: "Czy ma sens poza sezonem?",
        answer:
          "Tak. Wtedy spokojnie mapuje się procesy.",
      },
      {
        id: "zyw-3",
        question: "Czy integrujecie systemy rezerwacyjne?",
        answer:
          "Gdy API lub eksport na to pozwala.",
      },
      {
        id: "zyw-4",
        question: "Czy musicie być w Żywcu?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-dla-sprzedazy-i-marketingu",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["bielsko-biala", "cieszyn", "pszczyna", "katowice", "nowy-sacz"],
  },
];
