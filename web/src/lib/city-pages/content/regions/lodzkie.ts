import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "łódzkie", regionCluster: "lodzkie", updatedAt: "2026-10-15" } as const;

const remote = (genitive: string): [string, string] => [
  `Czy pracujecie z firmami z ${genitive}?`,
  "Tak, zdalnie. Pierwsza rozmowa i większość wdrożenia odbywają się online, a na warsztat przyjeżdżamy, gdy przyspiesza projekt.",
];
const start: [string, string] = ["Jak zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces do pierwszego wdrożenia."];
const smallFirm: [string, string] = ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na przepisywanie i pilnowanie terminów."];
const noErp: [string, string] = ["Czy musimy zmieniać ERP?", "Nie. Budujemy obok systemów, których używacie, i łączymy się z nimi tam, gdzie to możliwe."];
const logisticsFaq: [string, string] = ["Czy automatyzujecie firmy logistyczne i magazyny?", "Tak. Zlecenia, awizacje, dokumenty, statusy dla klientów i rozliczenia z przewoźnikami."];

export const lodzkieRegion = region({
  slug: "lodzkie",
  intro: [
    "Łódzkie leży w centrum Polski, na skrzyżowaniu autostrad A1 i A2. Okolice Strykowa, Piotrkowa Trybunalskiego i Kutna stały się jednym z największych zagłębi magazynowych w kraju, z centrami dystrybucyjnymi sieci handlowych, firm e-commerce i operatorów logistycznych.",
    "Region ma tradycję przemysłu włókienniczego i odzieżowego, która żyje w Łodzi, Zduńskiej Woli, Sieradzu i Brzezinach. Działają tu też zakłady AGD, ceramiki w Opocznie, mebli w Radomsku, przetwórstwa spożywczego w Łowiczu i okolicach, a Bełchatów to zagłębie węgla brunatnego i energetyki.",
    "Łódź rozwija się jako ośrodek usług dla biznesu i IT, z centrami usług wspólnych i uczelniami kształcącymi specjalistów.",
    "Z firmami z Łódzkiego pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt.",
  ],
  industries: [
    ["Logistyka i magazyny przy A1 i A2", "Zlecenia, awizacje, dokumenty, statusy i rozliczenia z przewoźnikami."],
    ["Tekstylia i odzież", "Zamówienia, kolekcje, produkcja na zlecenie i rozliczenia z szwalniami."],
    ["Produkcja AGD, ceramiki i mebli", "Zamówienia z portali, dokumentacja jakości, zakupy i reklamacje."],
    ["Przetwórstwo spożywcze i sadownictwo", "Dostawy surowca, partie i zamówienia od sieci."],
    ["Centra usług i IT w Łodzi", "Odczyt dokumentów, zgłoszenia, onboarding i raporty."],
  ],
  faq: [
    ["Czy macie biuro w Łodzi?", "Nie. Z firmami z Łódzkiego pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy pracujecie z centrami logistycznymi przy A1 i A2?", "Tak. Awizacje, zlecenia, dokumenty, statusy dla klientów, rozliczenia z przewoźnikami i raporty."],
    ["Czy automatyzujecie firmy odzieżowe i tekstylne?", "Tak. Zamówienia od klientów, zlecenia dla szwalni, terminy, rozliczenia i reklamacje."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const lodzkieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "lodz",
    name: "Łódź",
    nameGenitive: "Łodzi",
    nameLocative: "Łodzi",
    nearbyCitySlugs: ["pabianice", "zgierz", "brzeziny", "tomaszow-mazowiecki", "piotrkow-trybunalski", "skierniewice", "kutno"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Łodzi: logistyka, centra usług, IT, produkcja AGD, moda i e-commerce. Konsultacja 30 min.",
    heroLead:
      "Pomagamy łódzkim firmom logistycznym, centrom usług, producentom i markom modowym przejąć powtarzalną pracę z dokumentami, zamówieniami i zgłoszeniami.",
    intro: [
      "Łódź jest trzecim co do wielkości miastem Polski i jednym z jej najważniejszych ośrodków gospodarczych. Dawne zagłębie włókiennicze zmieniło się w centrum logistyki, usług dla biznesu, IT, produkcji AGD i branży modowej.",
      "Położenie na skrzyżowaniu autostrad A1 i A2 sprawiło, że wokół miasta powstały jedne z największych centrów magazynowych w Polsce, a uczelnie kształcą specjalistów dla centrów usług i firm technologicznych.",
    ],
    localContext:
      "Łódzkie firmy obsługują ogromną liczbę zamówień, przesyłek i dokumentów: centra usług przetwarzają faktury dla międzynarodowych grup, magazyny wydają tysiące paczek dziennie, a marki modowe prowadzą sprzedaż w wielu kanałach.",
    whyHere:
      "W Łodzi automatyzacja przejmuje przepisywanie dokumentów w centrach usług, obsługę awizacji i statusów w logistyce oraz zamówienia i zwroty w e-commerce.",
    economy: {
      title: "Czym żyje łódzki biznes",
      paragraphs: [
        "Logistyka i magazyny wokół węzła autostrad A1 i A2 to jedna z największych koncentracji powierzchni magazynowej w kraju. Działają tu operatorzy logistyczni, centra dystrybucyjne sieci handlowych i firm e-commerce.",
        "Centra usług wspólnych i firmy IT zatrudniają dziesiątki tysięcy osób, obsługując finanse, HR i IT międzynarodowych grup.",
        "Tradycja włókiennicza żyje w branży modowej i odzieżowej, a w mieście działają też duże zakłady produkcji AGD i firmy farmaceutyczne.",
      ],
    },
    industries: [
      ["Logistyka i e-commerce", "Awizacje, zlecenia, statusy dla klientów, zwroty i rozliczenia."],
      ["Centra usług i IT", "Odczyt faktur i dokumentów, zgłoszenia, onboarding i raporty."],
      ["Moda i odzież", "Zamówienia z wielu kanałów, zlecenia dla szwalni, zwroty i reklamacje."],
      ["Produkcja AGD i farmacja", "Zamówienia, dokumentacja jakości, zakupy i reklamacje."],
    ],
    processes: [
      ["Odczyt faktur i dokumentów", "AI odczytuje dokumenty i przekazuje dane do systemu, wyjątki trafiają do człowieka."],
      ["Awizacje i okna rozładunkowe", "Przewoźnicy rezerwują okna, magazyn widzi plan dnia."],
      ["Zwroty w e-commerce", "Zgłoszenie zwrotu, etykieta, przyjęcie i zwrot pieniędzy w jednym przepływie."],
      ["Raporty dla zarządu", "Wskaźniki z kilku systemów zebrane automatycznie."],
    ],
    example: {
      title: "Obsługa faktur w łódzkim centrum usług przed i po automatyzacji",
      lead: "Przykład zespołu księgowości w centrum usług, który przetwarza faktury kosztowe dla spółek z kilku krajów. Tak zmienia się obsługa jednej faktury.",
      rows: [
        ["Przyjęcie faktury", "Pobranie z maila lub portalu, ręczne wprowadzenie danych.", "AI odczytuje dane, a faktury z KSeF trafiają do systemu bez odczytu."],
        ["Dopasowanie do zamówienia", "Szukanie numeru zamówienia w systemie.", "Dopasowanie automatyczne, rozbieżności oznaczone do sprawdzenia."],
        ["Akceptacja", "Maile do kierowników z prośbą o akcept.", "Zadanie dla akceptującego z przypomnieniem i eskalacją."],
        ["Raport dla klienta wewnętrznego", "Składany ręcznie co miesiąc.", "Wskaźniki obsługi odświeżane automatycznie."],
      ],
    },
    faq: [
      ["Czy pracujecie z centrami usług wspólnych w Łodzi?", "Tak. Odczyt dokumentów przez AI, obieg akceptacji, uzgodnienia i raporty."],
      logisticsFaq,
      ["Czy automatyzujecie łódzkie marki modowe i sklepy internetowe?", "Tak. Zamówienia z wielu kanałów, zwroty, reklamacje, stany i obsługa klienta."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni od konsultacji do działającego procesu."],
    ],
    services: ["ai-w-obsludze-dokumentow", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "piotrkow-trybunalski",
    name: "Piotrków Trybunalski",
    nameGenitive: "Piotrkowa Trybunalskiego",
    nameLocative: "Piotrkowie Trybunalskim",
    nearbyCitySlugs: ["belchatow", "radomsko", "opoczno", "tomaszow-mazowiecki", "pabianice", "lodz"],
    metaDescription:
      "Automatyzacja dla firm z Piotrkowa Trybunalskiego: centra logistyczne przy A1, produkcja, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy piotrkowskim centrom logistycznym, zakładom i firmom usługowym uporządkować zlecenia, dokumenty i rozliczenia.",
    intro: [
      "Piotrków Trybunalski leży przy autostradzie A1 i drodze S8, w samym środku Polski. To jedno z najważniejszych zagłębi magazynowych w kraju, z centrami dystrybucyjnymi sieci handlowych i operatorów logistycznych.",
      "Miasto ma też zakłady produkcyjne i długą historię, a zabytkowe stare miasto przypomina o czasach Trybunału Koronnego.",
    ],
    localContext:
      "Piotrkowskie centra logistyczne obsługują tysiące przesyłek dziennie, a pracownicy biur przepisują dokumenty, awizacje i statusy.",
    whyHere:
      "W Piotrkowie automatyzacja przejmuje awizacje, dokumenty i statusy, a biuro magazynu zajmuje się wyjątkami.",
    economy: {
      title: "Czym żyje piotrkowski biznes",
      paragraphs: [
        "Centra logistyczne przy A1 i S8 obsługują dystrybucję dla sieci handlowych, e-commerce i producentów w całej Polsce.",
        "W mieście działają też zakłady produkcyjne i firmy usługowe obsługujące logistykę i mieszkańców regionu.",
      ],
    },
    industries: [
      ["Centra logistyczne", "Awizacje, zlecenia, dokumenty i rozliczenia."],
      ["Transport", "Zlecenia, statusy i faktury przewoźników."],
      ["Produkcja", "Zamówienia, zakupy i dokumentacja."],
      ["Usługi dla logistyki", "Rekrutacja, grafiki i rozliczenia."],
    ],
    processes: [
      ["Awizacje i okna rozładunkowe", "Przewoźnicy rezerwują okna, magazyn widzi plan dnia."],
      ["Dokumenty dostaw", "Dokumenty odczytane przez AI i przypisane do zleceń."],
      ["Statusy dla klientów", "Informacja o etapie zamówienia bez telefonów."],
      ["Rozliczenia z przewoźnikami", "Faktury kosztowe dopasowane do zleceń."],
    ],
    faq: [logisticsFaq, noErp, remote("Piotrkowa Trybunalskiego"), start],
    services: ["automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "belchatow",
    name: "Bełchatów",
    nameGenitive: "Bełchatowa",
    nameLocative: "Bełchatowie",
    nearbyCitySlugs: ["piotrkow-trybunalski", "radomsko", "pajeczno", "lask", "lodz"],
    metaDescription:
      "Automatyzacja dla firm z Bełchatowa: energetyka, górnictwo, podwykonawcy, produkcja i usługi. Zlecenia, dokumentacja i rozliczenia bez przepisywania.",
    heroLead:
      "Pomagamy bełchatowskim podwykonawcom energetyki i górnictwa uporządkować zlecenia, uprawnienia i rozliczenia.",
    intro: [
      "Bełchatów jest znany z największej w Polsce elektrowni opalanej węglem brunatnym i kopalni odkrywkowej. Wokół nich działa sieć firm remontowych, serwisowych, transportowych i inżynierskich.",
      "Miasto ma też strefę ekonomiczną, a lokalne firmy przygotowują się do zmian związanych z transformacją energetyczną.",
    ],
    localContext:
      "Bełchatowskie firmy pracują dla dużych zakładów, które wymagają szczegółowej dokumentacji, uprawnień pracowników i protokołów z prac.",
    whyHere:
      "W Bełchatowie automatyzacja porządkuje dokumentację podwykonawców i rozliczenia zleceń, a firmy łatwiej szukają nowych klientów.",
    economy: {
      title: "Czym żyje bełchatowski biznes",
      paragraphs: [
        "Elektrownia i kopalnia węgla brunatnego od dekad są fundamentem gospodarki regionu. Wokół nich działają podwykonawcy wykonujący remonty, serwis i transport.",
        "Strefa ekonomiczna i transformacja energetyczna przyciągają nowe inwestycje, a lokalne firmy szukają klientów poza energetyką.",
      ],
    },
    industries: [
      ["Podwykonawcy energetyki i górnictwa", "Zlecenia, uprawnienia, protokoły i rozliczenia."],
      ["Serwis i remonty przemysłowe", "Zgłoszenia, wizyty i części."],
      ["Produkcja w strefie ekonomicznej", "Zamówienia i dokumentacja."],
      ["Transport", "Zlecenia i rozliczenia."],
    ],
    processes: [
      ["Rejestr uprawnień", "Terminy badań i szkoleń z przypomnieniem przed wygaśnięciem."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami."],
      ["Rozliczenia zleceń", "Godziny i materiały przypisane do zlecenia na bieżąco."],
      ["Lejek sprzedaży", "Zapytania od nowych klientów w CRM z przypomnieniami."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami elektrowni i kopalni?", "Tak. Zlecenia, uprawnienia, protokoły i rozliczenia."],
      ["Czy automatyzacja dotyka instalacji?", "Nie. Pracujemy w procesach biurowych i dokumentacji."],
      remote("Bełchatowa"),
      start,
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "pabianice",
    name: "Pabianice",
    nameGenitive: "Pabianic",
    nameLocative: "Pabianicach",
    nearbyCitySlugs: ["lodz", "lask", "zdunska-wola", "piotrkow-trybunalski", "zgierz"],
    metaDescription:
      "Automatyzacja dla firm z Pabianic: farmacja, tekstylia, produkcja, logistyka i usługi. Zamówienia i dokumentacja bez przepisywania.",
    heroLead:
      "Pomagamy pabianickim zakładom i firmom handlowym uporządkować zamówienia, dokumentację i dostawy.",
    intro: [
      "Pabianice leżą tuż obok Łodzi i dzielą z nią tradycję przemysłu włókienniczego. Dziś działają tu zakłady farmaceutyczne, produkcyjne i firmy handlowe.",
      "Bliskość Łodzi i drogi S8 sprawia, że wiele lokalnych firm obsługuje klientów z całej Polski.",
    ],
    localContext:
      "Pabianickie zakłady pracują według wymagań dotyczących jakości i dokumentacji, szczególnie w branży farmaceutycznej.",
    whyHere:
      "W Pabianicach automatyzacja porządkuje dokumentację jakości i zamówienia.",
    industries: [
      ["Farmacja", "Dokumentacja, zakupy i raporty."],
      ["Tekstylia", "Zamówienia i zlecenia produkcji."],
      ["Produkcja", "Zamówienia i reklamacje."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Dokumentacja jakości", "Dokumenty przypisane do partii, gotowe na audyt."],
      ["Zamówienia od klientów", "Zamówienia z maili odczytane przez AI."],
      ["Zakupy", "Zapytania do dostawców i certyfikaty przypisane do dostaw."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [["Czy dane mogą zostać na naszym serwerze?", "Tak. Automatyzacje mogą działać w infrastrukturze firmy."], noErp, remote("Pabianic"), start],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "zgierz",
    name: "Zgierz",
    nameGenitive: "Zgierza",
    nameLocative: "Zgierzu",
    nearbyCitySlugs: ["lodz", "lowicz", "leczyca", "brzeziny", "kutno"],
    metaDescription:
      "Automatyzacja dla firm ze Zgierza: logistyka przy A1 i A2, przemysł chemiczny i tekstylny, produkcja i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy zgierskim firmom logistycznym i zakładom uporządkować zlecenia, zamówienia i dokumenty.",
    intro: [
      "Zgierz sąsiaduje z Łodzią i leży blisko węzła autostrad A1 i A2 w Strykowie. Ma tradycję przemysłu tekstylnego i chemicznego, a dziś w okolicy działają też duże centra logistyczne.",
      "Miasto obsługuje powiat jako centrum handlu i usług.",
    ],
    localContext:
      "Zgierskie firmy pracują w rytmie logistyki i produkcji dla odbiorców w całym kraju.",
    whyHere:
      "W Zgierzu automatyzacja przyspiesza obsługę zleceń i dokumentów w logistyce i produkcji.",
    industries: [
      ["Logistyka", "Awizacje, zlecenia i dokumenty."],
      ["Przemysł chemiczny", "Dokumentacja, zakupy i raporty."],
      ["Tekstylia", "Zamówienia i zlecenia."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Awizacje dostaw", "Terminy potwierdzane automatycznie z przewoźnikami."],
      ["Dokumenty przewozowe", "Dane z dokumentów przypisane do zleceń."],
      ["Zamówienia od klientów", "Zamówienia z maili odczytane przez AI."],
      ["Raport dla zarządu", "Wskaźniki zbierane automatycznie."],
    ],
    faq: [logisticsFaq, noErp, remote("Zgierza"), start],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "tomaszow-mazowiecki",
    name: "Tomaszów Mazowiecki",
    nameGenitive: "Tomaszowa Mazowieckiego",
    nameLocative: "Tomaszowie Mazowieckim",
    nearbyCitySlugs: ["piotrkow-trybunalski", "opoczno", "brzeziny", "rawa-mazowiecka", "lodz"],
    metaDescription:
      "Automatyzacja dla firm z Tomaszowa Mazowieckiego: produkcja, tworzywa, handel, logistyka przy S8 i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy tomaszowskim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Tomaszów Mazowiecki ma tradycję przemysłową, a dziś działają tu zakłady produkcyjne różnych branż, w tym tworzyw i materiałów budowlanych. Miasto leży przy drodze S8.",
      "Zalew Sulejowski i rzeka Pilica przyciągają turystów i mieszkańców Łodzi.",
    ],
    localContext:
      "Tomaszowskie zakłady sprzedają do odbiorców w całym kraju, a firmy usługowe obsługują ruch turystyczny w sezonie.",
    whyHere:
      "W Tomaszowie Mazowieckim automatyzacja przyspiesza zamówienia i dokumenty w produkcji.",
    industries: [
      ["Produkcja", "Zamówienia, zakupy i reklamacje."],
      ["Materiały budowlane", "Zamówienia, dostawy i dokumenty."],
      ["Handel", "Zamówienia i faktury."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Zamówienia od hurtowni", "Zamówienia z maili i PDF odczytane przez AI."],
      ["Awizacje dostaw", "Terminy dostaw potwierdzane automatycznie."],
      ["Reklamacje", "Rejestr z terminami i historią zamówienia."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [noErp, ["Czy automatyzujecie obiekty nad Zalewem Sulejowskim?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."], remote("Tomaszowa Mazowieckiego"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "kutno",
    name: "Kutno",
    nameGenitive: "Kutna",
    nameLocative: "Kutnie",
    nearbyCitySlugs: ["leczyca", "lowicz", "zgierz", "plock", "lodz"],
    metaDescription:
      "Automatyzacja dla firm z Kutna: logistyka przy A1 i A2, przemysł spożywczy i farmaceutyczny, produkcja. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kutnowskim centrom logistycznym i zakładom uporządkować zlecenia, zamówienia i dokumentację.",
    intro: [
      "Kutno leży przy autostradach A1 i A2 oraz ważnym węźle kolejowym. W strefie ekonomicznej działają zakłady spożywcze, farmaceutyczne i produkcyjne, a w okolicy centra logistyczne.",
      "Miasto obsługuje północną część regionu jako centrum handlu i usług.",
    ],
    localContext:
      "Kutnowskie firmy obsługują dystrybucję i produkcję dla odbiorców w całej Polsce.",
    whyHere:
      "W Kutnie automatyzacja przyspiesza awizacje, zamówienia i dokumentację.",
    industries: [
      ["Logistyka", "Awizacje, zlecenia i dokumenty."],
      ["Przemysł spożywczy", "Zamówienia od sieci i partie."],
      ["Farmacja", "Dokumentacja i zakupy."],
      ["Produkcja", "Zamówienia i reklamacje."],
    ],
    processes: [
      ["Awizacje i okna rozładunkowe", "Przewoźnicy rezerwują okna, magazyn widzi plan dnia."],
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Dokumentacja jakości", "Dokumenty przypisane do partii."],
      ["Rozliczenia z przewoźnikami", "Faktury kosztowe dopasowane do zleceń."],
    ],
    faq: [logisticsFaq, noErp, remote("Kutna"), start],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "skierniewice",
    name: "Skierniewice",
    nameGenitive: "Skierniewic",
    nameLocative: "Skierniewicach",
    nearbyCitySlugs: ["lowicz", "rawa-mazowiecka", "brzeziny", "warszawa", "lodz"],
    metaDescription:
      "Automatyzacja dla firm ze Skierniewic: sadownictwo i warzywnictwo, przetwórstwo, logistyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy skierniewickim firmom sadowniczym, przetwórczym i usługowym uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Skierniewice są ośrodkiem sadownictwa i ogrodnictwa, z instytutem badawczym i uczelnią związaną z ogrodnictwem. Okolica to sady, uprawy warzyw i przetwórnie.",
      "Miasto leży między Łodzią a Warszawą, przy ważnej linii kolejowej, co sprzyja logistyce.",
    ],
    localContext:
      "Skierniewickie firmy sprzedają owoce i warzywa do sieci i na eksport, z sezonowymi szczytami dostaw.",
    whyHere:
      "W Skierniewicach automatyzacja porządkuje dostawy i zamówienia w sezonie.",
    industries: [
      ["Sadownictwo i warzywnictwo", "Dostawy, partie i sprzedaż."],
      ["Przetwórstwo", "Zamówienia i dokumenty jakości."],
      ["Logistyka", "Zlecenia i dokumenty."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Przyjęcie dostaw", "Dostawy z wagą, odmianą i partią zapisane od razu."],
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Dokumenty eksportowe", "Dokumenty przypisane do partii i wysyłek."],
      ["Rozliczenia z dostawcami", "Zestawienie dostaw i należności."],
    ],
    faq: [["Czy pracujecie z grupami producentów?", "Tak. Przyjęcie dostaw, partie, rozliczenia i sprzedaż do sieci."], noErp, remote("Skierniewic"), start],
    services: ["automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "lowicz",
    name: "Łowicz",
    nameGenitive: "Łowicza",
    nameLocative: "Łowiczu",
    nearbyCitySlugs: ["kutno", "skierniewice", "zgierz", "sochaczew", "lodz"],
    metaDescription:
      "Automatyzacja dla firm z Łowicza: przetwórstwo spożywcze, mleczarstwo, sadownictwo i handel. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy łowickim zakładom spożywczym i firmom rolnym uporządkować zamówienia, dostawy i dokumentację.",
    intro: [
      "Łowicz jest znany z kultury ludowej i silnego przetwórstwa spożywczego. Działają tu mleczarnie, przetwórnie owoców i warzyw, a okolica to rolnictwo i sady.",
      "Miasto leży przy autostradzie A2, między Łodzią a Warszawą.",
    ],
    localContext:
      "Łowickie zakłady sprzedają do sieci handlowych w całym kraju, z codziennymi zamówieniami i dokumentami jakości.",
    whyHere:
      "W Łowiczu automatyzacja porządkuje zamówienia od sieci i dostawy surowca.",
    industries: [
      ["Mleczarstwo", "Dostawy mleka, partie i zamówienia."],
      ["Przetwórstwo owoców i warzyw", "Dostawy, partie i dokumenty."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Rejestr dostaw surowca", "Dostawy z dokumentami i rozliczeniem."],
      ["Reklamacje", "Rejestr z danymi partii."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców."],
    ],
    faq: [["Czy pracujecie z zakładami spożywczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."], noErp, remote("Łowicza"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "radomsko",
    name: "Radomsko",
    nameGenitive: "Radomska",
    nameLocative: "Radomsku",
    nearbyCitySlugs: ["piotrkow-trybunalski", "belchatow", "opoczno", "czestochowa", "pajeczno"],
    metaDescription:
      "Automatyzacja dla firm z Radomska: meble, przemysł metalowy, logistyka przy A1 i handel. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy radomszczańskim producentom mebli i zakładom metalowym uporządkować zamówienia, terminy i dostawy.",
    intro: [
      "Radomsko słynie z tradycji meblarskiej, w tym produkcji mebli giętych, a także z przemysłu metalowego. Miasto leży przy autostradzie A1.",
      "Wiele zakładów sprzedaje meble i wyroby metalowe w kraju i za granicą.",
    ],
    localContext:
      "Radomszczańskie zakłady obsługują zamówienia od sieci meblowych i odbiorców zagranicznych, z terminami produkcji i reklamacjami.",
    whyHere:
      "W Radomsku automatyzacja przyspiesza zamówienia i potwierdzenia terminów.",
    industries: [
      ["Meble", "Zamówienia, terminy produkcji, dostawy i reklamacje."],
      ["Przemysł metalowy", "Zapytania ofertowe i dokumentacja."],
      ["Logistyka przy A1", "Zlecenia i dokumenty."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia eksportowe", "Zamówienia w językach klientów odczytane przez AI."],
      ["Potwierdzenie terminu", "Termin z planu produkcji przekazany klientowi automatycznie."],
      ["Reklamacje", "Zgłoszenie ze zdjęciami i terminem odpowiedzi."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [["Czy pracujecie z producentami mebli?", "Tak. Zamówienia, terminy, dostawy i reklamacje."], noErp, remote("Radomska"), start],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "opoczno",
    name: "Opoczno",
    nameGenitive: "Opoczna",
    nameLocative: "Opocznie",
    nearbyCitySlugs: ["tomaszow-mazowiecki", "piotrkow-trybunalski", "radomsko", "kielce", "radom"],
    metaDescription:
      "Automatyzacja dla firm z Opoczna: ceramika i płytki, materiały budowlane, produkcja i handel. Zamówienia i dostawy bez przepisywania.",
    heroLead:
      "Pomagamy opoczyńskim producentom ceramiki i firmom handlowym uporządkować zamówienia, dostawy i reklamacje.",
    intro: [
      "Opoczno jest jednym z najważniejszych ośrodków produkcji płytek ceramicznych w Polsce. Wokół zakładów ceramicznych działają firmy transportowe, handlowe i usługowe.",
      "Miasto leży między Łodzią, Kielcami i Radomiem.",
    ],
    localContext:
      "Opoczyńskie zakłady sprzedają do hurtowni i sieci budowlanych w całej Polsce i za granicą.",
    whyHere:
      "W Opocznie automatyzacja przyspiesza zamówienia od hurtowni i obsługę dostaw.",
    industries: [
      ["Ceramika i płytki", "Zamówienia od hurtowni, dostawy i reklamacje."],
      ["Materiały budowlane", "Zamówienia i faktury."],
      ["Transport", "Zlecenia i dokumenty."],
      ["Handel", "Zamówienia i należności."],
    ],
    processes: [
      ["Zamówienia od hurtowni", "Zamówienia z maili i PDF odczytane przez AI."],
      ["Awizacje dostaw", "Terminy potwierdzane automatycznie."],
      ["Reklamacje transportowe", "Zgłoszenie ze zdjęciami i terminem odpowiedzi."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [["Czy pracujecie z producentami ceramiki?", "Tak. Zamówienia, dostawy, reklamacje i raporty."], noErp, remote("Opoczna"), start],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy"],
  }),
  town({
    ...base,
    slug: "zdunska-wola",
    name: "Zduńska Wola",
    nameGenitive: "Zduńskiej Woli",
    nameLocative: "Zduńskiej Woli",
    nearbyCitySlugs: ["lask", "sieradz", "pabianice", "lodz", "poddebice"],
    metaDescription:
      "Automatyzacja dla firm ze Zduńskiej Woli: odzież i tekstylia, produkcja, handel i usługi. Zamówienia i zlecenia bez przepisywania.",
    heroLead:
      "Pomagamy firmom odzieżowym i produkcyjnym ze Zduńskiej Woli uporządkować zamówienia, zlecenia i rozliczenia.",
    intro: [
      "Zduńska Wola ma tradycję przemysłu tekstylnego i odzieżowego, a dziś działają tu też zakłady produkcyjne w strefie ekonomicznej.",
      "Miasto leży przy drodze S8 między Łodzią a Wrocławiem.",
    ],
    localContext:
      "Zduńskowolskie firmy szyją na zlecenie marek i sieci, z kolekcjami, terminami i rozliczeniami.",
    whyHere:
      "W Zduńskiej Woli automatyzacja porządkuje zlecenia produkcji i terminy dla klientów.",
    industries: [
      ["Odzież i tekstylia", "Zamówienia od marek, zlecenia i rozliczenia."],
      ["Produkcja", "Zamówienia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zlecenia od marek", "Zlecenia z ilościami i terminami w jednym rejestrze."],
      ["Status zlecenia", "Klient widzi etap realizacji bez telefonu."],
      ["Rozliczenia", "Faktura po wysyłce, przypomnienie po terminie."],
      ["Zakupy dodatków", "Zamówienia materiałów i potwierdzenia."],
    ],
    faq: [["Czy pracujecie z szwalniami i firmami odzieżowymi?", "Tak. Zlecenia, terminy, rozliczenia i reklamacje."], smallFirm, remote("Zduńskiej Woli"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "sieradz",
    name: "Sieradz",
    nameGenitive: "Sieradza",
    nameLocative: "Sieradzu",
    nearbyCitySlugs: ["zdunska-wola", "lask", "wielun", "wieruszow", "kalisz"],
    metaDescription:
      "Automatyzacja dla firm z Sieradza: odzież, produkcja, przetwórstwo i handel. Zamówienia, zlecenia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy sieradzkim firmom odzieżowym, produkcyjnym i handlowym uporządkować zamówienia i dokumenty.",
    intro: [
      "Sieradz jest jednym z najstarszych miast w Polsce i ośrodkiem przemysłu odzieżowego. Działają tu też zakłady produkcyjne i przetwórcze.",
      "Miasto leży przy drodze S8 i obsługuje zachodnią część regionu jako centrum handlu i usług.",
    ],
    localContext:
      "Sieradzkie firmy szyją dla marek z Polski i zagranicy, z kolekcjami, terminami i rozliczeniami.",
    whyHere:
      "W Sieradzu automatyzacja porządkuje zlecenia i rozliczenia w produkcji.",
    industries: [
      ["Odzież", "Zlecenia od marek, terminy i rozliczenia."],
      ["Produkcja", "Zamówienia i zakupy."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zlecenia od marek", "Zlecenia z ilościami i terminami w jednym rejestrze."],
      ["Status zlecenia", "Klient widzi etap realizacji bez telefonu."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [["Czy pracujecie z firmami odzieżowymi?", "Tak. Zlecenia, terminy, rozliczenia i reklamacje."], noErp, remote("Sieradza"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "wielun",
    name: "Wieluń",
    nameGenitive: "Wielunia",
    nameLocative: "Wieluniu",
    nearbyCitySlugs: ["sieradz", "wieruszow", "pajeczno", "kalisz", "czestochowa"],
    metaDescription:
      "Automatyzacja dla firm z Wielunia: produkcja, przetwórstwo, rolnictwo i handel. Zamówienia, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy wieluńskim zakładom i firmom handlowym przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Wieluń leży na południowym zachodzie regionu. Działają tu zakłady produkcyjne i przetwórcze, a okolica to rolnictwo.",
      "Miasto obsługuje powiat jako centrum handlu i usług.",
    ],
    localContext:
      "Wieluńskie firmy obsługują klientów z kilku województw, często w kilkuosobowym zespole.",
    whyHere:
      "W Wieluniu automatyzacja odciąża małe biura z przepisywania zamówień i faktur.",
    industries: [
      ["Produkcja", "Zlecenia i zakupy."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [smallFirm, noErp, remote("Wielunia"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "wieruszow",
    name: "Wieruszów",
    nameGenitive: "Wieruszowa",
    nameLocative: "Wieruszowie",
    nearbyCitySlugs: ["wielun", "sieradz", "kalisz", "ostrow-wielkopolski", "kepno"],
    metaDescription:
      "Automatyzacja dla firm z Wieruszowa: meble, produkcja, handel i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Wieruszowa uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Wieruszów leży na pograniczu Łódzkiego i Wielkopolski, w pobliżu zagłębia meblarskiego wokół Kępna. Działają tu zakłady produkcyjne i firmy handlowe.",
      "Wiele lokalnych firm współpracuje z odbiorcami z Wielkopolski.",
    ],
    localContext:
      "Wieruszowskie firmy to często rodzinne zakłady z niewielkim biurem.",
    whyHere:
      "W Wieruszowie automatyzacja pozwala obsłużyć więcej zamówień bez rozbudowy biura.",
    industries: [
      ["Meble", "Zamówienia, terminy i dostawy."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Terminy realizacji", "Klient dostaje informację o etapie zamówienia."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
    ],
    faq: [smallFirm, noErp, remote("Wieruszowa"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "pajeczno",
    name: "Pajęczno",
    nameGenitive: "Pajęczna",
    nameLocative: "Pajęcznie",
    nearbyCitySlugs: ["belchatow", "radomsko", "wielun", "sieradz", "czestochowa"],
    metaDescription:
      "Automatyzacja dla firm z Pajęczna: produkcja, rolnictwo, handel i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Pajęczna przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Pajęczno jest małym ośrodkiem powiatowym na południu regionu, niedaleko Bełchatowa i Częstochowy. Lokalna gospodarka to produkcja, rolnictwo, handel i usługi.",
      "Wiele firm współpracuje z odbiorcami z Bełchatowa i Częstochowy.",
    ],
    localContext:
      "Firmy z Pajęczna to głównie małe przedsiębiorstwa z kilkuosobowym zespołem.",
    whyHere:
      "W Pajęcznie automatyzacja odciąża małe zespoły z powtarzalnej pracy biurowej.",
    industries: [
      ["Produkcja", "Zlecenia i zakupy."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia z maili", "Zamówienia odczytane przez AI i zapisane w rejestrze."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zamówień."],
      ["Przypomnienia o płatnościach", "Wysyłane automatycznie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [smallFirm, noErp, remote("Pajęczna"), start],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "lask",
    name: "Łask",
    nameGenitive: "Łasku",
    nameLocative: "Łasku",
    nearbyCitySlugs: ["pabianice", "zdunska-wola", "sieradz", "lodz", "poddebice"],
    metaDescription:
      "Automatyzacja dla firm z Łasku: produkcja, handel, rolnictwo i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Łasku uporządkować zamówienia, faktury i dokumenty.",
    intro: [
      "Łask leży niedaleko Łodzi, przy drodze S8. W okolicy działa baza lotnictwa wojskowego, a lokalna gospodarka to produkcja, handel, rolnictwo i usługi.",
      "Bliskość Łodzi sprawia, że wiele firm obsługuje klientów z aglomeracji.",
    ],
    localContext:
      "Łaskie firmy to głównie małe i średnie przedsiębiorstwa z niewielkimi zespołami biurowymi.",
    whyHere:
      "W Łasku automatyzacja odciąża biura z przepisywania i pilnowania terminów.",
    industries: [
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [smallFirm, noErp, remote("Łasku"), start],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "poddebice",
    name: "Poddębice",
    nameGenitive: "Poddębic",
    nameLocative: "Poddębicach",
    nearbyCitySlugs: ["lask", "zdunska-wola", "leczyca", "sieradz", "lodz"],
    metaDescription:
      "Automatyzacja dla firm z Poddębic: termy i turystyka, rolnictwo, przetwórstwo i usługi. Rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Poddębic uporządkować rezerwacje, dostawy i dokumenty.",
    intro: [
      "Poddębice korzystają z wód geotermalnych, na których powstały termy przyciągające gości z regionu. Okolica to rolnictwo i przetwórstwo.",
      "Miasto leży przy autostradzie A2, niedaleko Łodzi.",
    ],
    localContext:
      "Firmy z Poddębic łączą obsługę gości term z rolnictwem i usługami dla mieszkańców.",
    whyHere:
      "W Poddębicach automatyzacja porządkuje rezerwacje i dokumenty w małych zespołach.",
    industries: [
      ["Termy i turystyka", "Rezerwacje, pakiety i pytania gości."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Pakiety pobytowe", "Rezerwacja noclegu z biletami w jednym przepływie."],
      ["Pytania gości", "Asystent AI odpowiada na typowe pytania o ofertę."],
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Faktury", "Faktura po realizacji i przypomnienie o płatności."],
    ],
    faq: [["Czy automatyzujecie obiekty przy termach?", "Tak. Rezerwacje, pakiety, zaliczki i odpowiedzi na pytania gości."], smallFirm, remote("Poddębic"), start],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "leczyca",
    name: "Łęczyca",
    nameGenitive: "Łęczycy",
    nameLocative: "Łęczycy",
    nearbyCitySlugs: ["kutno", "zgierz", "poddebice", "lowicz", "lodz"],
    metaDescription:
      "Automatyzacja dla firm z Łęczycy: rolnictwo, przetwórstwo warzyw, handel i usługi. Dostawy, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Łęczycy uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Łęczyca leży na żyznych ziemiach centralnej Polski, w okolicy znanej z upraw warzyw. Rolnictwo, przetwórstwo i handel tworzą lokalną gospodarkę.",
      "Zamek i legenda o diable Borucie przyciągają turystów.",
    ],
    localContext:
      "Firmy z Łęczycy obsługują gospodarstwa i odbiorców warzyw, z sezonowymi szczytami dostaw.",
    whyHere:
      "W Łęczycy automatyzacja porządkuje dostawy i rozliczenia w sezonie.",
    industries: [
      ["Uprawy warzyw", "Dostawy, partie i sprzedaż."],
      ["Przetwórstwo", "Zamówienia i dokumenty."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy z wagą i partią zapisane od razu."],
      ["Zamówienia od odbiorców", "Zamówienia z maili w rejestrze."],
      ["Rozliczenia z dostawcami", "Zestawienie dostaw i należności."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
    ],
    faq: [["Czy pracujecie z firmami rolnymi?", "Tak, w dokumentach, rozliczeniach i raportach."], smallFirm, remote("Łęczycy"), start],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "brzeziny",
    name: "Brzeziny",
    nameGenitive: "Brzezin",
    nameLocative: "Brzezinach",
    nearbyCitySlugs: ["lodz", "zgierz", "skierniewice", "tomaszow-mazowiecki", "rawa-mazowiecka"],
    metaDescription:
      "Automatyzacja dla firm z Brzezin: krawiectwo i odzież, produkcja, handel i usługi. Zamówienia i zlecenia bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy brzezińskim szwalniom i firmom produkcyjnym uporządkować zlecenia, terminy i rozliczenia.",
    intro: [
      "Brzeziny od dawna słyną z tradycji krawieckiej i szwalni, które szyją na zlecenie marek odzieżowych. Miasto leży tuż obok Łodzi.",
      "Lokalne firmy to w większości małe zakłady i rodzinne szwalnie.",
    ],
    localContext:
      "Brzezińskie szwalnie pracują na zlecenie, z krótkimi terminami, zmianami ilości i rozliczeniami za sztukę.",
    whyHere:
      "W Brzezinach automatyzacja porządkuje zlecenia, terminy i rozliczenia z markami.",
    industries: [
      ["Szwalnie i krawiectwo", "Zlecenia od marek, terminy i rozliczenia."],
      ["Produkcja", "Zamówienia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zlecenia od marek", "Zlecenia z ilościami i terminami w jednym rejestrze."],
      ["Zmiany w zleceniach", "Historia zmian przy zleceniu zamiast wątków w mailach."],
      ["Rozliczenia za sztukę", "Wykonane ilości przeliczone na fakturę automatycznie."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [["Czy pracujecie z małymi szwalniami?", "Tak. Zlecenia, terminy i rozliczenia to proste i szybkie wdrożenia."], smallFirm, remote("Brzezin"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "rawa-mazowiecka",
    name: "Rawa Mazowiecka",
    nameGenitive: "Rawy Mazowieckiej",
    nameLocative: "Rawie Mazowieckiej",
    nearbyCitySlugs: ["skierniewice", "tomaszow-mazowiecki", "brzeziny", "warszawa", "lodz"],
    metaDescription:
      "Automatyzacja dla firm z Rawy Mazowieckiej: sadownictwo, przetwórstwo, logistyka przy S8 i handel. Dostawy i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Rawy Mazowieckiej uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Rawa Mazowiecka leży przy drodze S8, w jednym z największych w Polsce rejonów sadowniczych. Działają tu przetwórnie, chłodnie i firmy transportowe.",
      "Położenie między Łodzią a Warszawą sprzyja logistyce.",
    ],
    localContext:
      "Rawskie firmy sadownicze i przetwórcze obsługują sieci handlowe i eksport, z sezonowymi szczytami dostaw.",
    whyHere:
      "W Rawie Mazowieckiej automatyzacja porządkuje dostawy owoców i zamówienia od sieci.",
    industries: [
      ["Sadownictwo", "Dostawy, partie i sprzedaż."],
      ["Przetwórstwo i chłodnie", "Przyjęcia, wydania i rozliczenia."],
      ["Transport przy S8", "Zlecenia i dokumenty."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Przyjęcie dostaw", "Dostawy z wagą, odmianą i partią zapisane od razu."],
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Dokumenty eksportowe", "Dokumenty przypisane do partii i wysyłek."],
      ["Rozliczenia z sadownikami", "Zestawienie dostaw i należności."],
    ],
    faq: [["Czy pracujecie z grupami producentów owoców?", "Tak. Przyjęcie dostaw, partie, rozliczenia i sprzedaż do sieci."], noErp, remote("Rawy Mazowieckiej"), start],
    services: ["automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),
];
