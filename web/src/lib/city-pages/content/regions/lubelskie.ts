import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "lubelskie", regionCluster: "lubelskie", updatedAt: "2026-10-15" } as const;

const remote = (genitive: string): [string, string] => [
  `Czy pracujecie z firmami z ${genitive}?`,
  "Tak, zdalnie. Pierwsza rozmowa i większość wdrożenia odbywają się online, a na warsztat przyjeżdżamy, gdy przyspiesza projekt.",
];
const start: [string, string] = ["Jak zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces do pierwszego wdrożenia."];
const smallFirm: [string, string] = ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na przepisywanie i pilnowanie terminów."];
const agriFirm: [string, string] = ["Czy pracujecie z firmami rolnymi i sadowniczymi?", "Tak, z większymi gospodarstwami, grupami producentów i firmami obsługującymi rolnictwo."];

export const lubelskieRegion = region({
  slug: "lubelskie",
  intro: [
    "Lubelskie jest jednym z najważniejszych regionów rolniczych w Polsce. Sady, uprawy owoców miękkich, zboża i chmiel tworzą silne zaplecze dla przetwórstwa spożywczego, chłodni, grup producentów i eksporterów.",
    "Region ma też ważne ośrodki przemysłu: zakłady azotowe w Puławach, przemysł lotniczy w Świdniku, kopalnię węgla koło Łęcznej, cementownię w Chełmie i zakłady maszynowe w Kraśniku. Lublin rozwija się jako ośrodek akademicki, IT i usług dla biznesu.",
    "Wschodnia granica z Ukrainą i Białorusią sprawia, że przez region płynie duży ruch towarów, a w okolicy Białej Podlaskiej działają terminale przeładunkowe i firmy logistyczne.",
    "Z firmami z Lubelszczyzny pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt.",
  ],
  industries: [
    ["Sadownictwo i przetwórstwo", "Dostawy owoców, partie, chłodnie, zamówienia od sieci i eksport."],
    ["Przemysł chemiczny, lotniczy i maszynowy", "Dokumentacja jakości, zamówienia, zakupy i reklamacje."],
    ["Logistyka przy wschodniej granicy", "Zlecenia transportowe, dokumenty, odprawy i rozliczenia."],
    ["IT i usługi w Lublinie", "Zgłoszenia, czas pracy, rozliczenia projektów i onboarding."],
    ["Turystyka", "Rezerwacje i pytania gości w Zamościu, Kazimierzu Dolnym i na Pojezierzu Łęczyńsko-Włodawskim."],
  ],
  faq: [
    ["Czy macie biuro w Lublinie?", "Nie. Z firmami z Lubelszczyzny pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy pracujecie z grupami producentów owoców?", "Tak. Przyjęcie dostaw, partie, rozliczenia z sadownikami, zamówienia od sieci i dokumenty eksportowe."],
    ["Czy automatyzujecie firmy logistyczne przy granicy?", "Tak. Zlecenia, dokumenty przewozowe, statusy i rozliczenia z przewoźnikami."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const lubelskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "lublin",
    name: "Lublin",
    nameGenitive: "Lublina",
    nameLocative: "Lublinie",
    nearbyCitySlugs: ["swidnik", "pulawy", "krasnik", "lubartow", "chelm", "zamosc"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Lublina: IT i usługi, przetwórstwo spożywcze, produkcja, logistyka i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy lubelskim firmom technologicznym, usługowym i produkcyjnym przejąć powtarzalną pracę z dokumentami, zgłoszeniami i zamówieniami.",
    intro: [
      "Lublin jest największym miastem wschodniej Polski i jednym z ważniejszych ośrodków akademickich w kraju. Kilka uczelni kształci tysiące absolwentów rocznie, co przyciąga firmy IT, centra usług i firmy technologiczne.",
      "Miasto jest też centrum handlu, przetwórstwa spożywczego i produkcji dla całego regionu, a lotnisko i drogi ekspresowe łączą je z resztą kraju.",
    ],
    localContext:
      "Lubelskie firmy łączą szybko rosnący sektor usług i IT z tradycyjnym przemysłem spożywczym i handlem obsługującym rolnictwo regionu.",
    whyHere:
      "W Lublinie automatyzacja porządkuje zgłoszenia, czas pracy i rozliczenia w usługach, a w przetwórstwie i handlu zamówienia i dokumenty.",
    economy: {
      title: "Czym żyje lubelski biznes",
      paragraphs: [
        "Lublin jest ośrodkiem akademickim, z którego wyrasta sektor IT, centrów usług i firm technologicznych obsługujących klientów z Polski i zagranicy.",
        "Przetwórstwo spożywcze, handel hurtowy i firmy obsługujące rolnictwo korzystają z położenia w sercu jednego z największych regionów rolniczych kraju.",
        "W strefie ekonomicznej działają zakłady produkcyjne, a miasto jest węzłem logistycznym na trasie do wschodniej granicy.",
      ],
    },
    industries: [
      ["IT i centra usług", "Zgłoszenia klientów, czas pracy, rozliczenia projektów i onboarding."],
      ["Przetwórstwo spożywcze", "Zamówienia od sieci, partie i dokumenty jakości."],
      ["Handel hurtowy", "Zamówienia, stany, limity kupieckie i należności."],
      ["Produkcja", "Zamówienia, zakupy i reklamacje."],
    ],
    processes: [
      ["Obsługa zgłoszeń", "Zgłoszenia z kategorią, priorytetem i terminem odpowiedzi."],
      ["Rozliczenia projektów", "Godziny z ewidencji przypisane do klientów, raport rentowności."],
      ["Zamówienia od klientów B2B", "Zamówienia z maili odczytane przez AI i przekazane do systemu."],
      ["Należności", "Przypomnienia o płatnościach i raport przeterminowanych faktur."],
    ],
    example: {
      title: "Projekt w lubelskiej firmie IT przed i po automatyzacji",
      lead: "Przykład software house'u z Lublina, który rozlicza projekty z klientami godzinowo. Tak zmienia się rozliczenie jednego miesiąca.",
      rows: [
        ["Zbieranie godzin", "Przypomnienia na czacie, braki uzupełniane z pamięci.", "Przypomnienia automatyczne, braki widoczne dla kierownika projektu."],
        ["Raport dla klienta", "Składany ręcznie z kilku narzędzi.", "Generowany z ewidencji czasu i zadań, do sprawdzenia."],
        ["Faktura", "Wystawiana po zatwierdzeniu raportu mailem.", "Tworzona po akceptacji raportu przez klienta."],
        ["Rentowność projektu", "Liczona raz na kwartał.", "Widoczna na bieżąco w raporcie dla zarządu."],
      ],
    },
    faq: [
      ["Czy pomagacie lubelskim firmom IT?", "Tak. Zgłoszenia klientów, ewidencja czasu, rozliczenia projektów, onboarding i raporty."],
      ["Czy pracujecie z przetwórniami i hurtowniami z Lublina?", "Tak. Zamówienia, partie, dokumenty jakości, limity kupieckie i należności."],
      ["Czy pracujecie zdalnie?", "Tak, a na warsztaty w Lublinie przyjeżdżamy, gdy przyspieszają projekt."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni od konsultacji do działającego procesu."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-raportow", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "pulawy",
    name: "Puławy",
    nameGenitive: "Puław",
    nameLocative: "Puławach",
    nearbyCitySlugs: ["lublin", "opole-lubelskie", "ryki", "krasnik", "warszawa"],
    metaDescription:
      "Automatyzacja dla firm z Puław: przemysł chemiczny, podwykonawcy, sadownictwo, instytuty badawcze i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy puławskim podwykonawcom przemysłu, firmom sadowniczym i usługowym uporządkować zlecenia, dostawy i dokumentację.",
    intro: [
      "Puławy są jednym z największych ośrodków przemysłu chemicznego w Polsce. Duże zakłady azotowe produkują nawozy, a wokół nich działa sieć firm serwisowych, remontowych i transportowych.",
      "W mieście działają też instytuty badawcze związane z rolnictwem, a okolice to sady i uprawy. W pobliżu leży Kazimierz Dolny, który przyciąga turystów.",
    ],
    localContext:
      "Puławskie firmy pracują dla dużego zakładu chemicznego, z wymaganiami dotyczącymi dokumentacji, uprawnień i bezpieczeństwa, albo obsługują sadownictwo regionu.",
    whyHere:
      "W Puławach automatyzacja porządkuje dokumentację podwykonawców i dostawy w sadownictwie.",
    economy: {
      title: "Czym żyje puławski biznes",
      paragraphs: [
        "Zakłady azotowe są fundamentem gospodarki Puław. Wokół nich działają podwykonawcy: firmy remontowe, serwisowe, laboratoryjne i transportowe.",
        "Okolica to jeden z ważniejszych rejonów sadowniczych, a instytuty badawcze i turystyka w Kazimierzu Dolnym uzupełniają lokalną gospodarkę.",
      ],
    },
    industries: [
      ["Podwykonawcy przemysłu chemicznego", "Zlecenia, uprawnienia, protokoły i rozliczenia."],
      ["Sadownictwo", "Dostawy owoców, partie i sprzedaż."],
      ["Transport", "Zlecenia, dokumenty ADR i rozliczenia."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Rejestr uprawnień", "Terminy badań i szkoleń z przypomnieniem przed wygaśnięciem."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami."],
      ["Przyjęcie dostaw owoców", "Dostawy z wagą, odmianą i partią, rozliczenie automatyczne."],
      ["Rozliczenia zleceń", "Godziny i materiały przypisane do zlecenia na bieżąco."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładów azotowych?", "Tak. Zlecenia, dokumentacja, uprawnienia pracowników i rozliczenia."],
      ["Czy automatyzacja dotyka instalacji?", "Nie. Pracujemy w procesach biurowych i dokumentacji."],
      agriFirm,
      start,
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-logistyki", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "chelm",
    name: "Chełm",
    nameGenitive: "Chełma",
    nameLocative: "Chełmie",
    nearbyCitySlugs: ["krasnystaw", "wlodawa", "hrubieszow", "leczna", "zamosc", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Chełma: cement i materiały budowlane, logistyka przy granicy, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy chełmskim zakładom, firmom transportowym i handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Chełm jest jednym z większych miast regionu, położonym blisko granicy z Ukrainą. Działa tu cementownia, a złoża kredy od wieków kształtują miasto, które słynie z podziemnej trasy w kredowych korytarzach.",
      "Bliskość przejścia granicznego w Dorohusku sprawia, że ważną rolę odgrywają transport, spedycja i handel.",
    ],
    localContext:
      "Chełmskie firmy obsługują ruch towarów przez granicę i odbiorców materiałów budowlanych, z dużą liczbą dokumentów przewozowych i dostaw.",
    whyHere:
      "W Chełmie automatyzacja przyspiesza obsługę zleceń transportowych i dokumentów, a w handlu zamówienia i dostawy.",
    economy: {
      title: "Czym żyje chełmski biznes",
      paragraphs: [
        "Cementownia i przemysł materiałów budowlanych to tradycyjna gałąź gospodarki Chełma, z siecią odbiorców i przewoźników.",
        "Bliskość granicy z Ukrainą sprzyja transportowi, spedycji i handlowi, a miasto jest centrum usług dla wschodniej części regionu.",
      ],
    },
    industries: [
      ["Materiały budowlane", "Zamówienia, wydania, dokumenty dostaw i rozliczenia."],
      ["Transport i spedycja", "Zlecenia, dokumenty, odprawy i rozliczenia."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zapytania i terminy."],
    ],
    processes: [
      ["Zlecenia transportowe", "Zlecenia z maili w systemie, statusy dla klientów."],
      ["Dokumenty przewozowe", "Dane z dokumentów odczytane przez AI i przypisane do zleceń."],
      ["Zamówienie i wydanie", "Zamówienie odbiorcy przechodzi w wydanie i dokument dostawy."],
      ["Rozliczenia z przewoźnikami", "Faktury kosztowe dopasowane do zleceń."],
    ],
    faq: [
      ["Czy automatyzujecie firmy spedycyjne z Chełma?", "Tak. Zlecenia, dokumenty, statusy i rozliczenia z przewoźnikami."],
      ["Czy obsłużycie dokumenty po ukraińsku?", "Tak. AI odczytuje dokumenty i przygotowuje odpowiedzi w języku klienta."],
      remote("Chełma"),
      start,
    ],
    services: ["automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "zamosc",
    name: "Zamość",
    nameGenitive: "Zamościa",
    nameLocative: "Zamościu",
    nearbyCitySlugs: ["tomaszow-lubelski", "krasnystaw", "bilgoraj", "hrubieszow", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Zamościa: turystyka, przetwórstwo spożywcze, handel, usługi i produkcja. Konsultacja 30 min.",
    heroLead:
      "Pomagamy zamojskim firmom turystycznym, przetwórczym i usługowym uporządkować rezerwacje, zamówienia i dokumenty.",
    intro: [
      "Zamość słynie z renesansowego starego miasta wpisanego na listę UNESCO. Turystyka, hotele i gastronomia są ważną częścią lokalnej gospodarki.",
      "Miasto jest też ośrodkiem przetwórstwa spożywczego, handlu i usług dla południowo-wschodniej części regionu, otoczonym żyznymi ziemiami Roztocza i Zamojszczyzny.",
    ],
    localContext:
      "Zamojskie firmy łączą obsługę turystów z przetwórstwem płodów rolnych i handlem dla okolicznych gmin.",
    whyHere:
      "W Zamościu automatyzacja porządkuje rezerwacje i pytania gości w turystyce, a w przetwórstwie zamówienia i dokumenty.",
    economy: {
      title: "Czym żyje zamojski biznes",
      paragraphs: [
        "Turystyka oparta na zabytkach UNESCO przyciąga gości przez cały rok, a hotele, restauracje i przewodnicy obsługują grupy z kraju i zagranicy.",
        "Przetwórstwo spożywcze i handel korzystają z rolniczego zaplecza Zamojszczyzny, a w mieście działają też zakłady produkcyjne.",
      ],
    },
    industries: [
      ["Turystyka i gastronomia", "Rezerwacje, grupy, pytania gości i opinie."],
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty jakości."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rezerwacje grup", "Zapytanie, oferta, zaliczka i przypomnienie."],
      ["Pytania gości", "Asystent AI odpowiada w kilku językach na podstawie waszej oferty."],
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Opinie", "Prośba o opinię po wizycie wysyłana automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie hotele i restauracje w Zamościu?", "Tak. Rezerwacje, grupy, zaliczki i odpowiedzi na pytania gości."],
      ["Czy pracujecie z zakładami przetwórczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      remote("Zamościa"),
      start,
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "biala-podlaska",
    name: "Biała Podlaska",
    nameGenitive: "Białej Podlaskiej",
    nameLocative: "Białej Podlaskiej",
    nearbyCitySlugs: ["radzyn-podlaski", "parczew", "wlodawa", "siedlce", "bialystok", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Białej Podlaskiej: logistyka i przeładunki przy granicy, produkcja w strefie ekonomicznej, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy bialskim firmom logistycznym, spedycyjnym i produkcyjnym uporządkować zlecenia, dokumenty i rozliczenia.",
    intro: [
      "Biała Podlaska leży przy trasie do przejścia granicznego w Terespolu. W pobliżu działają terminale przeładunkowe w Małaszewiczach, przez które przechodzi duży ruch kolejowy między Europą a Azją.",
      "W strefie ekonomicznej działają zakłady produkcyjne, a miasto jest centrum handlu i usług dla północnej części regionu.",
    ],
    localContext:
      "Bialskie firmy spedycyjne i logistyczne obsługują przesyłki międzynarodowe z dużą liczbą dokumentów, odpraw i statusów.",
    whyHere:
      "W Białej Podlaskiej automatyzacja przejmuje przepisywanie dokumentów przewozowych i celnych, a klienci dostają statusy bez telefonu.",
    economy: {
      title: "Czym żyje bialski biznes",
      paragraphs: [
        "Logistyka i przeładunki na granicy z Białorusią to specyfika regionu. Terminale kolejowe, agencje celne i spedytorzy obsługują towary z Europy i Azji.",
        "Strefa ekonomiczna przyciągnęła zakłady produkcyjne, w tym meblarskie, a miasto obsługuje handel i usługi dla okolicy.",
      ],
    },
    industries: [
      ["Spedycja i agencje celne", "Zlecenia, dokumenty przewozowe i celne, statusy."],
      ["Logistyka kolejowa i przeładunki", "Awizacje, dokumenty i rozliczenia."],
      ["Produkcja w strefie ekonomicznej", "Zamówienia, zakupy i dokumentacja."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Dokumenty przewozowe", "AI odczytuje listy przewozowe i faktury i przenosi dane do systemu."],
      ["Status przesyłki", "Klient dostaje informację o etapie bez pisania do spedytora."],
      ["Kompletowanie dokumentów do odprawy", "Lista brakujących dokumentów wysyłana klientowi automatycznie."],
      ["Refaktury", "Tworzone po zamknięciu kosztów zlecenia."],
    ],
    faq: [
      ["Czy automatyzujecie agencje celne i spedytorów z Białej Podlaskiej?", "Tak. Dokumenty, statusy, kompletowanie dokumentów do odprawy i rozliczenia."],
      ["Czy AI odczyta dokumenty w różnych językach?", "Tak, w tym po rosyjsku, ukraińsku, angielsku i chińsku, z kontrolą przez pracownika."],
      remote("Białej Podlaskiej"),
      start,
    ],
    services: ["automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "integracje-systemow", "automatyzacja-w-produkcji"],
  }),
  town({
    ...base,
    slug: "swidnik",
    name: "Świdnik",
    nameGenitive: "Świdnika",
    nameLocative: "Świdniku",
    nearbyCitySlugs: ["lublin", "leczna", "krasnik", "lubartow", "krasnystaw"],
    metaDescription:
      "Automatyzacja dla firm ze Świdnika: przemysł lotniczy, dostawcy, logistyka przy lotnisku i usługi. Dokumentacja i zamówienia bez przepisywania.",
    heroLead:
      "Pomagamy świdnickim dostawcom przemysłu lotniczego i firmom usługowym uporządkować dokumentację, zamówienia i rozliczenia.",
    intro: [
      "Świdnik jest ośrodkiem przemysłu lotniczego, z zakładem produkującym śmigłowce, wokół którego działają dostawcy i kooperanci. Przy mieście leży Port Lotniczy Lublin.",
      "Bliskość Lublina sprawia, że wiele lokalnych firm obsługuje klientów z całej aglomeracji.",
    ],
    localContext:
      "Dostawcy przemysłu lotniczego ze Świdnika pracują według bardzo rygorystycznych wymagań dotyczących dokumentacji i śledzenia partii.",
    whyHere:
      "W Świdniku automatyzacja porządkuje dokumentację jakości i śledzenie partii, a działy wsparcia nie składają raportów ręcznie.",
    industries: [
      ["Przemysł lotniczy i kooperanci", "Dokumentacja jakości, śledzenie partii, zamówienia i reklamacje."],
      ["Logistyka przy lotnisku", "Zlecenia i dokumenty."],
      ["Usługi dla firm", "Zapytania, umowy i faktury."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Dokumentacja jakości", "Świadectwa i raporty przypisane do partii, gotowe na audyt."],
      ["Wersje dokumentacji technicznej", "Aktualna wersja rysunku przy zleceniu."],
      ["Reklamacje", "Rejestr z danymi partii i szkicem raportu."],
      ["Zakupy materiałów", "Zapytania do dostawców i certyfikaty przypisane do dostaw."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami przemysłu lotniczego?", "Tak, w dokumentacji jakości, zamówieniach, zakupach i reklamacjach."],
      ["Czy dane mogą zostać na naszym serwerze?", "Tak. Automatyzacje mogą działać w infrastrukturze firmy."],
      remote("Świdnika"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "krasnik",
    name: "Kraśnik",
    nameGenitive: "Kraśnika",
    nameLocative: "Kraśniku",
    nearbyCitySlugs: ["lublin", "opole-lubelskie", "janow-lubelski", "swidnik", "pulawy"],
    metaDescription:
      "Automatyzacja dla firm z Kraśnika: przemysł maszynowy, łożyska, produkcja, handel i usługi. Zamówienia i dokumentacja bez przepisywania.",
    heroLead:
      "Pomagamy kraśnickim zakładom i ich dostawcom uporządkować zamówienia, dokumentację i reklamacje.",
    intro: [
      "Kraśnik ma długą tradycję przemysłu maszynowego, w tym produkcji łożysk. Wokół zakładów działają kooperanci, firmy serwisowe i handlowe.",
      "Miasto obsługuje powiat jako centrum handlu i usług.",
    ],
    localContext:
      "Kraśnickie zakłady sprzedają do odbiorców przemysłowych w Polsce i za granicą, z wymaganiami dotyczącymi dokumentacji i jakości.",
    whyHere:
      "W Kraśniku automatyzacja przyspiesza zamówienia i dokumentację, a reklamacje mają jasne terminy.",
    industries: [
      ["Przemysł maszynowy", "Zapytania ofertowe, zamówienia, dokumentacja i reklamacje."],
      ["Kooperanci", "Zlecenia, terminy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Zapytania i terminy."],
    ],
    processes: [
      ["Zamówienia od klientów", "Zamówienia z maili i portali przekazane do systemu."],
      ["Reklamacje", "Rejestr z danymi partii i terminami."],
      ["Przeglądy maszyn", "Plan przeglądów z przypomnieniami."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
    ],
    faq: [
      ["Czy pracujecie z zakładami maszynowymi?", "Tak. Wyceny, zamówienia, zakupy, reklamacje i utrzymanie ruchu."],
      ["Czy musimy zmieniać ERP?", "Nie. Budujemy obok systemów, których używacie."],
      remote("Kraśnika"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "leczna",
    name: "Łęczna",
    nameGenitive: "Łęcznej",
    nameLocative: "Łęcznej",
    nearbyCitySlugs: ["lublin", "swidnik", "lubartow", "wlodawa", "chelm"],
    metaDescription:
      "Automatyzacja dla firm z Łęcznej: górnictwo, podwykonawcy kopalni, transport i usługi. Zlecenia, dokumentacja i rozliczenia bez przepisywania.",
    heroLead:
      "Pomagamy łęczyńskim podwykonawcom górnictwa i firmom usługowym uporządkować zlecenia, uprawnienia i rozliczenia.",
    intro: [
      "W powiecie łęczyńskim działa kopalnia węgla kamiennego, jeden z największych pracodawców regionu. Wokół niej pracują firmy serwisowe, transportowe i dostawcy.",
      "Okolica to też Pojezierze Łęczyńsko-Włodawskie i Poleski Park Narodowy, które przyciągają turystów.",
    ],
    localContext:
      "Firmy z Łęcznej pracują dla kopalni, która wymaga szczegółowej dokumentacji, uprawnień pracowników i protokołów.",
    whyHere:
      "W Łęcznej automatyzacja porządkuje dokumentację podwykonawców i rozliczenia zleceń.",
    industries: [
      ["Podwykonawcy górnictwa", "Zlecenia, uprawnienia, protokoły i rozliczenia."],
      ["Transport", "Zlecenia i dokumenty."],
      ["Usługi", "Zapytania i faktury."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Rejestr uprawnień", "Terminy badań i szkoleń z przypomnieniem."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami."],
      ["Rozliczenia zleceń", "Godziny i materiały przypisane do zlecenia."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami kopalni?", "Tak. Zlecenia, uprawnienia, protokoły i rozliczenia."],
      ["Czy automatyzacja dotyka wydobycia?", "Nie. Pracujemy w procesach biurowych i dokumentacji."],
      remote("Łęcznej"),
      start,
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "lubartow",
    name: "Lubartów",
    nameGenitive: "Lubartowa",
    nameLocative: "Lubartowie",
    nearbyCitySlugs: ["lublin", "leczna", "parczew", "radzyn-podlaski", "swidnik"],
    metaDescription:
      "Automatyzacja dla firm z Lubartowa: produkcja, przetwórstwo, rolnictwo i handel. Zamówienia, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy lubartowskim firmom przejąć powtarzalną pracę z zamówieniami, fakturami i dokumentami.",
    intro: [
      "Lubartów leży na północ od Lublina, przy drodze S19. W mieście działają zakłady produkcyjne i przetwórcze, a okolica to rolnictwo.",
      "Bliskość Lublina sprawia, że wiele lokalnych firm obsługuje klientów z całej aglomeracji.",
    ],
    localContext:
      "Lubartowskie firmy to często rodzinne zakłady i firmy handlowe z kilkuosobowym biurem.",
    whyHere:
      "W Lubartowie automatyzacja odciąża biura z przepisywania zamówień i faktur.",
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
    faq: [smallFirm, agriFirm, remote("Lubartowa"), start],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "opole-lubelskie",
    name: "Opole Lubelskie",
    nameGenitive: "Opola Lubelskiego",
    nameLocative: "Opolu Lubelskim",
    nearbyCitySlugs: ["pulawy", "krasnik", "lublin", "ryki", "swidnik"],
    metaDescription:
      "Automatyzacja dla firm z Opola Lubelskiego: sadownictwo, owoce miękkie, przetwórstwo i handel. Dostawy i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy sadownikom, grupom producentów i firmom z Opola Lubelskiego uporządkować dostawy, partie i rozliczenia.",
    intro: [
      "Powiat opolski to jeden z największych w Polsce rejonów sadowniczych i upraw owoców miękkich. Działają tu grupy producentów, chłodnie, skupy i przetwórnie.",
      "Owoce trafiają do sieci handlowych w kraju i na eksport.",
    ],
    localContext:
      "Firmy z Opola Lubelskiego w sezonie zbiorów przyjmują dziesiątki dostaw dziennie, z wagą, odmianą, partią i rozliczeniem z każdym dostawcą.",
    whyHere:
      "W Opolu Lubelskim automatyzacja porządkuje przyjęcie dostaw i rozliczenia z sadownikami w szczycie sezonu.",
    industries: [
      ["Grupy producentów", "Dostawy, partie, sortowanie i sprzedaż."],
      ["Chłodnie i skupy", "Przyjęcia, wydania i rozliczenia."],
      ["Przetwórnie", "Zamówienia i dokumenty jakości."],
      ["Handel środkami produkcji", "Zamówienia od gospodarstw i faktury."],
    ],
    processes: [
      ["Przyjęcie dostaw", "Dostawy z wagą, odmianą i partią zapisane od razu."],
      ["Rozliczenia z sadownikami", "Zestawienie dostaw i należności dla każdego dostawcy."],
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Dokumenty eksportowe", "Dokumenty przypisane do partii i wysyłek."],
    ],
    faq: [
      ["Czy pracujecie z grupami producentów owoców?", "Tak. Przyjęcie dostaw, partie, rozliczenia i sprzedaż do sieci."],
      ["Czy system działa w sezonie przy dużej liczbie dostaw?", "Tak. Formularz przyjęcia jest szybki, a rozliczenia liczą się same."],
      remote("Opola Lubelskiego"),
      start,
    ],
    services: ["automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "radzyn-podlaski",
    name: "Radzyń Podlaski",
    nameGenitive: "Radzynia Podlaskiego",
    nameLocative: "Radzyniu Podlaskim",
    nearbyCitySlugs: ["biala-podlaska", "parczew", "lubartow", "lukow", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Radzynia Podlaskiego: przetwórstwo, rolnictwo, produkcja i handel. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Radzynia Podlaskiego uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Radzyń Podlaski słynie z barokowego pałacu Potockich. Lokalna gospodarka to przetwórstwo spożywcze, rolnictwo, produkcja i handel.",
      "Miasto obsługuje powiat jako centrum usług.",
    ],
    localContext:
      "Radzyńskie firmy obsługują rolnictwo i odbiorców z regionu, często w małych zespołach.",
    whyHere:
      "W Radzyniu Podlaskim automatyzacja porządkuje zamówienia i dokumenty dostaw.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia od odbiorców", "Zamówienia z maili odczytane przez AI."],
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [smallFirm, agriFirm, remote("Radzynia Podlaskiego"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "parczew",
    name: "Parczew",
    nameGenitive: "Parczewa",
    nameLocative: "Parczewie",
    nearbyCitySlugs: ["biala-podlaska", "radzyn-podlaski", "wlodawa", "lubartow", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Parczewa: rolnictwo, przetwórstwo, drewno i usługi. Dostawy, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Parczewa uporządkować dostawy, faktury i dokumenty.",
    intro: [
      "Parczew leży wśród lasów Polesia. Lokalna gospodarka opiera się na rolnictwie, przetwórstwie, przemyśle drzewnym i usługach.",
      "Okoliczne lasy i jeziora przyciągają turystów i miłośników przyrody.",
    ],
    localContext:
      "Firmy z Parczewa to w większości małe przedsiębiorstwa i gospodarstwa z niewielką administracją.",
    whyHere:
      "W Parczewie automatyzacja odciąża małe zespoły z przepisywania dokumentów.",
    industries: [
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Drewno", "Zamówienia i dostawy."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Zamówienia", "Zamówienia z maili i telefonów w rejestrze."],
      ["Faktury i płatności", "Faktura po dostawie, przypomnienie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców."],
    ],
    faq: [smallFirm, agriFirm, remote("Parczewa"), start],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "lukow",
    name: "Łuków",
    nameGenitive: "Łukowa",
    nameLocative: "Łukowie",
    nearbyCitySlugs: ["radzyn-podlaski", "ryki", "siedlce", "lublin", "pulawy"],
    metaDescription:
      "Automatyzacja dla firm z Łukowa: przetwórstwo mięsa, przemysł spożywczy, produkcja i handel. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy łukowskim zakładom spożywczym i firmom handlowym uporządkować zamówienia, partie i dokumentację.",
    intro: [
      "Łuków jest znany z przetwórstwa mięsa i przemysłu spożywczego, a zakłady z miasta sprzedają swoje produkty w całej Polsce i za granicą.",
      "Miasto leży na północy regionu, przy ważnej linii kolejowej, i obsługuje powiat jako centrum handlu i usług.",
    ],
    localContext:
      "Łukowskie zakłady spożywcze pracują dla sieci handlowych i hurtowni, z codziennymi zamówieniami, partiami i dokumentami jakości.",
    whyHere:
      "W Łukowie automatyzacja porządkuje zamówienia od sieci i dokumenty jakości, a biuro nie przepisuje danych z portali.",
    industries: [
      ["Przetwórstwo mięsa", "Zamówienia od sieci, partie i dokumenty jakości."],
      ["Przemysł spożywczy", "Zamówienia i reklamacje."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia od sieci", "Zamówienia z portali i maili przekazane do systemu."],
      ["Partie i dokumenty jakości", "Dokumenty przypisane do partii."],
      ["Reklamacje", "Rejestr z danymi partii i terminami."],
      ["Trasy dostaw", "Dostawy zgrupowane według tras i klientów."],
    ],
    faq: [
      ["Czy pracujecie z zakładami mięsnymi?", "Tak, w procesach wokół produkcji: zamówienia, partie, dokumenty jakości i reklamacje."],
      ["Czy połączycie portale sieci handlowych z naszym systemem?", "Tak, jeśli portal pozwala pobrać zamówienia albo przysyła je mailem."],
      remote("Łukowa"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "ryki",
    name: "Ryki",
    nameGenitive: "Ryk",
    nameLocative: "Rykach",
    nearbyCitySlugs: ["pulawy", "lukow", "opole-lubelskie", "lublin", "warszawa"],
    metaDescription:
      "Automatyzacja dla firm z Ryk: sadownictwo, transport przy S17, produkcja i handel. Dostawy, zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Ryk uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Ryki leżą przy drodze S17 między Warszawą a Lublinem. Okolica to sady i uprawy, a położenie przy trasie przyciąga firmy transportowe i handlowe.",
      "Miasto obsługuje powiat jako centrum usług.",
    ],
    localContext:
      "Firmy z Ryk obsługują sadownictwo i transport na trasie Warszawa–Lublin.",
    whyHere:
      "W Rykach automatyzacja porządkuje dostawy w sadownictwie i zlecenia w transporcie.",
    industries: [
      ["Sadownictwo", "Dostawy, partie i sprzedaż."],
      ["Transport przy S17", "Zlecenia, dokumenty i rozliczenia."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Przyjęcie dostaw", "Dostawy z wagą i partią zapisane od razu."],
      ["Zlecenia transportowe", "Zlecenia z maili w systemie, statusy dla klientów."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [agriFirm, ["Czy automatyzujecie firmy transportowe?", "Tak. Zlecenia, dokumenty, statusy i rozliczenia."], remote("Ryk"), start],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "wlodawa",
    name: "Włodawa",
    nameGenitive: "Włodawy",
    nameLocative: "Włodawie",
    nearbyCitySlugs: ["chelm", "parczew", "biala-podlaska", "leczna", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Włodawy: turystyka na Pojezierzu Łęczyńsko-Włodawskim, rolnictwo, drewno i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Włodawy uporządkować rezerwacje, zamówienia i dokumenty.",
    intro: [
      "Włodawa leży nad Bugiem, przy granicy z Białorusią i Ukrainą, w miejscu, gdzie od wieków spotykały się różne kultury. Zespół synagogalny i festiwal kultur przyciągają turystów.",
      "Pojezierze Łęczyńsko-Włodawskie z ośrodkami nad jeziorami to ważne zaplecze turystyczne, a okolica to też rolnictwo i lasy.",
    ],
    localContext:
      "Włodawskie firmy łączą sezonową turystykę z rolnictwem i handlem, w niewielkich zespołach.",
    whyHere:
      "We Włodawie automatyzacja porządkuje rezerwacje w sezonie i dokumenty w handlu.",
    industries: [
      ["Turystyka nad jeziorami", "Rezerwacje, zaliczki i pytania gości."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Drewno", "Zamówienia i dostawy."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Rezerwacje z kilku portali", "Jeden kalendarz bez podwójnych rezerwacji."],
      ["Zaliczki i przypomnienia", "Link do płatności i przypomnienie przed przyjazdem."],
      ["Zamówienia", "Zamówienia z maili w rejestrze."],
      ["Faktury", "Faktura po realizacji i przypomnienie o płatności."],
    ],
    faq: [
      ["Czy automatyzujecie ośrodki wypoczynkowe nad jeziorami?", "Tak. Rezerwacje, zaliczki, przypomnienia i odpowiedzi na pytania gości."],
      smallFirm,
      remote("Włodawy"),
      start,
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "tomaszow-lubelski",
    name: "Tomaszów Lubelski",
    nameGenitive: "Tomaszowa Lubelskiego",
    nameLocative: "Tomaszowie Lubelskim",
    nearbyCitySlugs: ["zamosc", "bilgoraj", "hrubieszow", "rzeszow", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Tomaszowa Lubelskiego: transport przy granicy, drewno, turystyka na Roztoczu i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Tomaszowa Lubelskiego uporządkować zlecenia, zamówienia i rezerwacje.",
    intro: [
      "Tomaszów Lubelski leży na Roztoczu, przy trasie do przejścia granicznego z Ukrainą w Hrebennem. Transport i handel są ważne dla lokalnej gospodarki.",
      "Lasy Roztocza sprzyjają przemysłowi drzewnemu i turystyce.",
    ],
    localContext:
      "Tomaszowskie firmy transportowe obsługują ruch przez granicę, a obiekty turystyczne gości Roztocza.",
    whyHere:
      "W Tomaszowie Lubelskim automatyzacja przyspiesza obsługę dokumentów przewozowych i rezerwacji.",
    industries: [
      ["Transport i spedycja", "Zlecenia, dokumenty i rozliczenia."],
      ["Drewno", "Zamówienia i dostawy."],
      ["Turystyka na Roztoczu", "Rezerwacje i pytania gości."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Dokumenty przewozowe", "Dane z dokumentów odczytane przez AI."],
      ["Statusy dla klientów", "Informacja o etapie przesyłki automatycznie."],
      ["Rezerwacje", "Potwierdzenia i zaliczki bez ręcznych maili."],
      ["Rozliczenia z przewoźnikami", "Faktury kosztowe dopasowane do zleceń."],
    ],
    faq: [
      ["Czy automatyzujecie firmy transportowe przy granicy?", "Tak. Zlecenia, dokumenty, statusy i rozliczenia."],
      ["Czy obsłużycie dokumenty po ukraińsku?", "Tak. AI odczytuje dokumenty i przygotowuje odpowiedzi w języku klienta."],
      remote("Tomaszowa Lubelskiego"),
      start,
    ],
    services: ["automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "bilgoraj",
    name: "Biłgoraj",
    nameGenitive: "Biłgoraja",
    nameLocative: "Biłgoraju",
    nearbyCitySlugs: ["zamosc", "janow-lubelski", "tomaszow-lubelski", "krasnik", "rzeszow"],
    metaDescription:
      "Automatyzacja dla firm z Biłgoraja: produkcja, drewno, meble, przetwórstwo i handel. Zamówienia i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy biłgorajskim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Biłgoraj leży na skraju Puszczy Solskiej i ma silną tradycję przedsiębiorczości. Działają tu zakłady produkcyjne, w tym drzewne i meblarskie, oraz przetwórstwo spożywcze.",
      "Miasto ma podstrefę ekonomiczną i obsługuje powiat jako centrum handlu.",
    ],
    localContext:
      "Biłgorajskie firmy to często rodzinne zakłady, które sprzedają w całej Polsce i za granicą.",
    whyHere:
      "W Biłgoraju automatyzacja przyspiesza zamówienia i dostawy w produkcji, bez rozbudowy biura.",
    industries: [
      ["Drewno i meble", "Zamówienia, terminy i dostawy."],
      ["Produkcja", "Zlecenia, zakupy i reklamacje."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia od klientów", "Zamówienia z maili odczytane przez AI."],
      ["Terminy realizacji", "Klient dostaje informację o etapie zamówienia."],
      ["Reklamacje", "Rejestr z terminami i historią zamówienia."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami drzewnymi i meblarskimi?", "Tak. Zamówienia, terminy, dostawy i reklamacje."],
      ["Czy musimy zmieniać systemy?", "Zwykle nie. Łączymy te, których używacie."],
      remote("Biłgoraja"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "janow-lubelski",
    name: "Janów Lubelski",
    nameGenitive: "Janowa Lubelskiego",
    nameLocative: "Janowie Lubelskim",
    nearbyCitySlugs: ["bilgoraj", "krasnik", "zamosc", "lublin", "rzeszow"],
    metaDescription:
      "Automatyzacja dla firm z Janowa Lubelskiego: drewno, produkcja, turystyka w Lasach Janowskich i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Janowa Lubelskiego uporządkować zamówienia, dostawy i rezerwacje.",
    intro: [
      "Janów Lubelski leży w otoczeniu Lasów Janowskich. Przemysł drzewny, produkcja i usługi tworzą lokalną gospodarkę, a lasy i zalew przyciągają turystów.",
      "Miasto ma podstrefę ekonomiczną i obsługuje powiat jako centrum usług.",
    ],
    localContext:
      "Janowskie firmy to głównie małe i średnie zakłady oraz obiekty turystyczne.",
    whyHere:
      "W Janowie Lubelskim automatyzacja porządkuje zamówienia w produkcji i rezerwacje w turystyce.",
    industries: [
      ["Drewno", "Zamówienia i dostawy."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Turystyka", "Rezerwacje i pytania gości."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z maili w jednym rejestrze."],
      ["Rezerwacje", "Potwierdzenia i zaliczki bez ręcznych maili."],
      ["Faktury", "Faktura po realizacji i przypomnienie."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
    ],
    faq: [smallFirm, ["Czy automatyzujecie obiekty turystyczne?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."], remote("Janowa Lubelskiego"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "krasnystaw",
    name: "Krasnystaw",
    nameGenitive: "Krasnegostawu",
    nameLocative: "Krasnymstawie",
    nearbyCitySlugs: ["chelm", "zamosc", "swidnik", "lublin", "hrubieszow"],
    metaDescription:
      "Automatyzacja dla firm z Krasnegostawu: przetwórstwo spożywcze, chmiel, rolnictwo i handel. Dostawy, zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy krasnostawskim zakładom i firmom rolnym uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Krasnystaw leży nad Wieprzem, w jednym z ważnych regionów upraw chmielu w Polsce. W mieście działają zakłady przetwórstwa spożywczego, a okolica to rolnictwo.",
      "Miasto obsługuje powiat jako centrum handlu i usług.",
    ],
    localContext:
      "Krasnostawskie firmy obsługują rolnictwo i odbiorców spożywczych, z sezonowymi szczytami dostaw.",
    whyHere:
      "W Krasnymstawie automatyzacja porządkuje dostawy i rozliczenia w sezonie.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty."],
      ["Chmiel i uprawy", "Dostawy, umowy i rozliczenia."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Rozliczenia z dostawcami", "Zestawienie dostaw i należności."],
      ["Zamówienia od odbiorców", "Zamówienia z maili w rejestrze."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
    ],
    faq: [agriFirm, smallFirm, remote("Krasnegostawu"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "hrubieszow",
    name: "Hrubieszów",
    nameGenitive: "Hrubieszowa",
    nameLocative: "Hrubieszowie",
    nearbyCitySlugs: ["zamosc", "chelm", "tomaszow-lubelski", "wlodawa", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Hrubieszowa: rolnictwo, przetwórstwo, logistyka przy granicy i handel. Dostawy i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Hrubieszowa uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Hrubieszów leży na żyznych ziemiach Kotliny Hrubieszowskiej, przy granicy z Ukrainą. Rolnictwo, przetwórstwo i handel tworzą lokalną gospodarkę.",
      "W pobliżu działa kolejowe przejście towarowe, które obsługuje przeładunki na granicy.",
    ],
    localContext:
      "Hrubieszowskie firmy obsługują duże gospodarstwa i ruch towarów przez granicę.",
    whyHere:
      "W Hrubieszowie automatyzacja porządkuje dokumenty dostaw i przewozów.",
    industries: [
      ["Rolnictwo", "Umowy, dostawy i rozliczenia."],
      ["Przetwórstwo", "Dostawy surowca i partie."],
      ["Logistyka przy granicy", "Zlecenia i dokumenty przewozowe."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Dokumenty przewozowe", "Dane z dokumentów przypisane do zleceń."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
      ["Terminy płatności", "Przypomnienia o płatnościach."],
    ],
    faq: [agriFirm, ["Czy obsłużycie dokumenty po ukraińsku?", "Tak, AI odczyta dokumenty i przygotuje odpowiedzi w języku klienta."], remote("Hrubieszowa"), start],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
];
