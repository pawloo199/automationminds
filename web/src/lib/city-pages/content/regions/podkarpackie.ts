import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "podkarpackie", regionCluster: "podkarpacie", updatedAt: "2026-10-15" } as const;

const remote = (genitive: string): [string, string] => [
  `Czy pracujecie z firmami z ${genitive}?`,
  "Tak, zdalnie. Pierwsza rozmowa i większość wdrożenia odbywają się online, a na warsztat przyjeżdżamy, gdy przyspiesza projekt.",
];
const start: [string, string] = ["Jak zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces do pierwszego wdrożenia."];
const smallFirm: [string, string] = ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na przepisywanie i pilnowanie terminów."];
const noErp: [string, string] = ["Czy musimy zmieniać ERP?", "Nie. Budujemy obok systemów, których używacie, i łączymy się z nimi tam, gdzie to możliwe."];
const supplier: [string, string] = ["Czy obsłużycie raporty jakości w formacie klienta?", "Tak. Szablony raportów, np. 8D, przygotowujemy w formacie wymaganym przez odbiorców."];

export const podkarpackieRegion = region({
  slug: "podkarpackie",
  intro: [
    "Podkarpacie jest jednym z najbardziej uprzemysłowionych regionów wschodniej Polski. Dolina Lotnicza skupia producentów i dostawców przemysłu lotniczego wokół Rzeszowa, Mielca i Krosna, a w regionie działają też duże zakłady oponiarskie, maszynowe, hutnicze i szklarskie.",
    "Specjalne strefy ekonomiczne w Mielcu, Tarnobrzegu i Stalowej Woli przyciągnęły setki firm. Rzeszów rozwija się jako ośrodek IT i usług, z parkiem naukowo-technologicznym przy lotnisku w Jasionce.",
    "Granica z Ukrainą sprawia, że ważną rolę odgrywają logistyka i handel, a Bieszczady przyciągają turystów przez cały rok.",
    "Z firmami z Podkarpacia pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt.",
  ],
  industries: [
    ["Przemysł lotniczy i dostawcy", "Dokumentacja jakości, śledzenie partii, zamówienia i reklamacje."],
    ["Motoryzacja i opony", "Zamówienia z portali, raporty jakości i reklamacje u dostawców."],
    ["Przemysł maszynowy i hutniczy", "Zapytania ofertowe, dokumentacja techniczna, zakupy i utrzymanie ruchu."],
    ["Logistyka przy granicy z Ukrainą", "Zlecenia transportowe, dokumenty, odprawy i statusy."],
    ["Turystyka w Bieszczadach", "Rezerwacje, zaliczki i pytania gości przez cały rok."],
  ],
  faq: [
    ["Czy macie biuro w Rzeszowie?", "Nie. Z firmami z Podkarpacia pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy pracujecie z dostawcami Doliny Lotniczej?", "Tak, w dokumentacji jakości, śledzeniu partii, zamówieniach, zakupach i reklamacjach. Dane mogą zostać w infrastrukturze firmy."],
    ["Czy automatyzujecie obiekty w Bieszczadach?", "Tak. Rezerwacje z kilku portali, zaliczki, przypomnienia i asystent odpowiadający na pytania gości."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const podkarpackieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "rzeszow",
    name: "Rzeszów",
    nameGenitive: "Rzeszowa",
    nameLocative: "Rzeszowie",
    nearbyCitySlugs: ["lancut", "mielec", "debica", "stalowa-wola", "krosno", "przemysl"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Rzeszowa: przemysł lotniczy, IT, farmacja, logistyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy rzeszowskim dostawcom przemysłu, firmom IT i usługowym przejąć powtarzalną pracę z dokumentacją, zgłoszeniami i raportami.",
    intro: [
      "Rzeszów jest stolicą Podkarpacia i sercem Doliny Lotniczej. Działają tu producenci i dostawcy przemysłu lotniczego, zakłady farmaceutyczne i maszynowe, a przy lotnisku w Jasionce park naukowo-technologiczny.",
      "Miasto szybko rozwija się jako ośrodek IT i usług dla biznesu, z uczelniami kształcącymi inżynierów i informatyków.",
    ],
    localContext:
      "Rzeszowskie firmy przemysłowe pracują według wymagań klientów z branży lotniczej i farmaceutycznej, gdzie dokumentacja i śledzenie partii są równie ważne jak sama produkcja.",
    whyHere:
      "W Rzeszowie automatyzacja porządkuje dokumentację jakości i raporty w przemyśle, a w IT i usługach zgłoszenia, czas pracy i rozliczenia.",
    economy: {
      title: "Czym żyje rzeszowski biznes",
      paragraphs: [
        "Dolina Lotnicza to skupisko firm przemysłu lotniczego, od dużych producentów silników i podzespołów po małych kooperantów i firmy inżynierskie.",
        "Obok lotnictwa działają zakłady farmaceutyczne, maszynowe i spożywcze, a park naukowo-technologiczny przy lotnisku przyciąga kolejne inwestycje.",
        "Sektor IT i usług dla biznesu rośnie dzięki uczelniom technicznym i dobrym połączeniom z resztą kraju.",
      ],
    },
    industries: [
      ["Przemysł lotniczy", "Dokumentacja jakości, śledzenie partii, zamówienia i reklamacje."],
      ["Farmacja i produkcja", "Dokumentacja, zakupy i raporty."],
      ["IT i usługi dla firm", "Zgłoszenia klientów, czas pracy i rozliczenia projektów."],
      ["Logistyka", "Zlecenia, awizacje i dokumenty."],
    ],
    processes: [
      ["Dokumentacja jakości", "Świadectwa i raporty przypisane do partii, gotowe na audyt."],
      ["Wersje dokumentacji technicznej", "Aktualna wersja rysunku przy zleceniu, zmiany z akceptacją."],
      ["Obsługa zgłoszeń", "Zgłoszenia z kategorią, priorytetem i terminem odpowiedzi."],
      ["Raport dla zarządu", "Wskaźniki z kilku systemów zebrane automatycznie."],
    ],
    example: {
      title: "Dostawa dla klienta z branży lotniczej w rzeszowskiej firmie przed i po automatyzacji",
      lead: "Przykład kooperanta z Doliny Lotniczej, który dostarcza obrabiane detale dużemu producentowi. Tak zmienia się przygotowanie jednej dostawy.",
      rows: [
        ["Certyfikaty materiałowe", "Szukane w mailach od dostawców i folderach.", "Przypisane do dostawy materiału i partii od chwili przyjęcia."],
        ["Wyniki pomiarów", "Przepisywane z arkuszy do raportu.", "Zebrane z formularzy kontroli i dołączone do partii."],
        ["Dokumenty do wysyłki", "Kompletowane ręcznie przez dział jakości.", "Pakiet dokumentów generowany z danych partii, do sprawdzenia."],
        ["Pytania klienta po dostawie", "Dział jakości odtwarza historię partii.", "Historia partii dostępna w rejestrze w kilka sekund."],
      ],
    },
    faq: [
      ["Czy pracujecie z firmami z Doliny Lotniczej?", "Tak, w dokumentacji jakości, śledzeniu partii, zamówieniach, zakupach i reklamacjach."],
      ["Czy pomagacie rzeszowskim firmom IT?", "Tak. Zgłoszenia, ewidencja czasu, rozliczenia projektów i onboarding."],
      ["Czy dane mogą zostać na naszym serwerze?", "Tak. Automatyzacje mogą działać w infrastrukturze firmy."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni od konsultacji do działającego procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-firm-uslugowych", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "mielec",
    name: "Mielec",
    nameGenitive: "Mielca",
    nameLocative: "Mielcu",
    nearbyCitySlugs: ["debica", "tarnobrzeg", "stalowa-wola", "rzeszow", "kolbuszowa"],
    metaDescription:
      "Automatyzacja dla firm z Mielca: przemysł lotniczy, strefa ekonomiczna, dostawcy, logistyka i usługi. Dokumentacja i zamówienia bez przepisywania.",
    heroLead:
      "Pomagamy mieleckim zakładom ze strefy ekonomicznej i ich dostawcom uporządkować zamówienia, dokumentację i raporty.",
    intro: [
      "Mielec ma długą tradycję przemysłu lotniczego i jest siedzibą jednej z pierwszych specjalnych stref ekonomicznych w Polsce. W strefie działają setki firm z branży lotniczej, motoryzacyjnej, drzewnej i metalowej.",
      "Wokół dużych producentów działa sieć kooperantów, firm serwisowych i logistycznych.",
    ],
    localContext:
      "Mieleckie firmy produkują dla wymagających odbiorców w Polsce i za granicą, z portalami zamówień, raportami jakości i audytami.",
    whyHere:
      "W Mielcu automatyzacja przyspiesza obsługę zamówień i dokumentacji, a działy jakości nie składają raportów ręcznie.",
    economy: {
      title: "Czym żyje mielecki biznes",
      paragraphs: [
        "Specjalna strefa ekonomiczna w Mielcu przyciągnęła firmy wielu branż: lotniczej, motoryzacyjnej, drzewnej, metalowej i tworzyw.",
        "Produkcja lotnicza ma tu wieloletnią tradycję, a wokół zakładów rozwinęła się sieć dostawców i usług.",
      ],
    },
    industries: [
      ["Przemysł lotniczy", "Dokumentacja jakości, śledzenie partii i reklamacje."],
      ["Motoryzacja", "Zamówienia z portali i raporty jakości."],
      ["Drewno i metal", "Zamówienia, zakupy i dokumentacja."],
      ["Logistyka", "Awizacje, dokumenty i rozliczenia."],
    ],
    processes: [
      ["Zamówienia z portali klientów", "Pobierane automatycznie i przekazywane do systemu."],
      ["Reklamacje 8D", "Rejestr z danymi partii i szkicem raportu."],
      ["Przeglądy maszyn", "Plan przeglądów z przypomnieniami i protokołami."],
      ["Zakupy", "Zapytania do dostawców i certyfikaty przypisane do dostaw."],
    ],
    faq: [
      ["Czy pracujecie z firmami ze strefy ekonomicznej w Mielcu?", "Tak, w procesach wokół produkcji: zamówienia, zakupy, jakość, reklamacje i utrzymanie ruchu."],
      supplier,
      noErp,
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-raportow", "integracje-systemow", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "debica",
    name: "Dębica",
    nameGenitive: "Dębicy",
    nameLocative: "Dębicy",
    nearbyCitySlugs: ["mielec", "ropczyce", "rzeszow", "tarnobrzeg", "jaslo"],
    metaDescription:
      "Automatyzacja dla firm z Dębicy: przemysł oponiarski, chemiczny, dostawcy, logistyka przy A4 i usługi. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy dębickim zakładom, dostawcom i firmom logistycznym uporządkować zamówienia, dokumentację i rozliczenia.",
    intro: [
      "Dębica jest znana z dużego zakładu produkującego opony, jednego z największych pracodawców regionu. W mieście działają też zakłady chemiczne i produkcyjne.",
      "Położenie przy autostradzie A4 sprzyja logistyce i dystrybucji.",
    ],
    localContext:
      "Dębickie firmy pracują jako dostawcy i podwykonawcy dużych zakładów, z wymaganiami dotyczącymi dokumentacji i terminów.",
    whyHere:
      "W Dębicy automatyzacja porządkuje dokumentację u dostawców i podwykonawców oraz zlecenia transportowe.",
    industries: [
      ["Przemysł oponiarski i dostawcy", "Zamówienia, dokumentacja jakości i reklamacje."],
      ["Przemysł chemiczny", "Dokumentacja, zakupy i raporty."],
      ["Logistyka przy A4", "Zlecenia, awizacje i dokumenty."],
      ["Serwis przemysłowy", "Zlecenia, protokoły i rozliczenia."],
    ],
    processes: [
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami."],
      ["Rejestr uprawnień", "Terminy badań i szkoleń z przypomnieniem."],
      ["Awizacje dostaw", "Terminy potwierdzane automatycznie z przewoźnikami."],
      ["Reklamacje", "Rejestr z danymi partii i terminami."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami dużych zakładów?", "Tak. Zlecenia, dokumentacja, uprawnienia pracowników i rozliczenia."],
      ["Czy automatyzujecie firmy logistyczne przy A4?", "Tak. Zlecenia, awizacje, dokumenty i rozliczenia."],
      remote("Dębicy"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "stalowa-wola",
    name: "Stalowa Wola",
    nameGenitive: "Stalowej Woli",
    nameLocative: "Stalowej Woli",
    nearbyCitySlugs: ["tarnobrzeg", "nisko", "mielec", "lezajsk", "rzeszow"],
    metaDescription:
      "Automatyzacja dla firm ze Stalowej Woli: przemysł maszynowy i hutniczy, strefa ekonomiczna, kooperanci i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy zakładom i kooperantom ze Stalowej Woli uporządkować zlecenia, dokumentację techniczną i rozliczenia.",
    intro: [
      "Stalowa Wola powstała jako ośrodek przemysłowy i do dziś jest jednym z ważniejszych centrów przemysłu maszynowego i hutniczego w Polsce. Działają tu producenci maszyn, w tym dla obronności, huta i dziesiątki kooperantów.",
      "Strefa ekonomiczna przyciąga kolejne zakłady, a miasto obsługuje północną część regionu.",
    ],
    localContext:
      "Firmy ze Stalowej Woli produkują na zamówienie dla dużych odbiorców, z rozbudowaną dokumentacją techniczną i wymaganiami jakościowymi.",
    whyHere:
      "W Stalowej Woli automatyzacja porządkuje wyceny, dokumentację techniczną i rozliczenia zleceń u kooperantów.",
    economy: {
      title: "Czym żyje biznes Stalowej Woli",
      paragraphs: [
        "Przemysł maszynowy i hutniczy to fundament gospodarki miasta. Wokół dużych zakładów działa sieć kooperantów wykonujących obróbkę, spawanie, malowanie i montaż.",
        "Strefa ekonomiczna przyciąga nowe inwestycje, a miasto ma silne zaplecze techniczne i szkolnictwo zawodowe.",
      ],
    },
    industries: [
      ["Przemysł maszynowy", "Zapytania ofertowe, dokumentacja techniczna, zakupy i reklamacje."],
      ["Hutnictwo i metal", "Zamówienia, świadectwa jakości i dostawy."],
      ["Kooperanci", "Zlecenia, terminy, protokoły i rozliczenia."],
      ["Logistyka", "Zlecenia i dokumenty."],
    ],
    processes: [
      ["Kalkulacja zlecenia", "Wycena z podobnych wyrobów i aktualnych cen materiałów."],
      ["Wersje rysunków", "Aktualna wersja dokumentacji przy zleceniu."],
      ["Świadectwa jakości", "Dokumenty przypisane do partii i wysyłane z dostawą."],
      ["Rozliczenia zleceń", "Godziny i materiały przypisane do zlecenia na bieżąco."],
    ],
    faq: [
      ["Czy pracujecie z kooperantami przemysłu maszynowego?", "Tak. Wyceny, dokumentacja techniczna, zlecenia i rozliczenia."],
      ["Czy dane mogą zostać na naszym serwerze?", "Tak. Automatyzacje mogą działać w infrastrukturze firmy."],
      noErp,
      start,
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "krosno",
    name: "Krosno",
    nameGenitive: "Krosna",
    nameLocative: "Krośnie",
    nearbyCitySlugs: ["jaslo", "sanok", "brzozow", "rzeszow", "strzyzow"],
    metaDescription:
      "Automatyzacja dla firm z Krosna: szkło, przemysł lotniczy, dostawcy, handel i turystyka. Zamówienia i dokumentacja bez przepisywania.",
    heroLead:
      "Pomagamy krośnieńskim zakładom szklarskim, dostawcom przemysłu i firmom handlowym uporządkować zamówienia i dokumentację.",
    intro: [
      "Krosno jest znane z tradycji przemysłu szklarskiego, a dziś także z firm przemysłu lotniczego należących do Doliny Lotniczej. W mieście działają zakłady produkcyjne, handlowe i usługowe.",
      "Położenie na trasie w Bieszczady sprawia, że miasto obsługuje też ruch turystyczny.",
    ],
    localContext:
      "Krośnieńskie zakłady sprzedają w kraju i za granicą, z zamówieniami eksportowymi, dokumentacją i reklamacjami.",
    whyHere:
      "W Krośnie automatyzacja przyspiesza zamówienia eksportowe i dokumentację jakości.",
    industries: [
      ["Przemysł szklarski", "Zamówienia eksportowe, terminy i reklamacje."],
      ["Przemysł lotniczy", "Dokumentacja jakości i śledzenie partii."],
      ["Handel", "Zamówienia i faktury."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Zamówienia eksportowe", "Zamówienia w językach klientów odczytane przez AI."],
      ["Reklamacje", "Rejestr ze zdjęciami, terminami i historią zamówienia."],
      ["Dokumentacja jakości", "Dokumenty przypisane do partii."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami szklarskimi?", "Tak. Zamówienia, terminy, dostawy i reklamacje."],
      supplier,
      remote("Krosna"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "przemysl",
    name: "Przemyśl",
    nameGenitive: "Przemyśla",
    nameLocative: "Przemyślu",
    nearbyCitySlugs: ["jaroslaw", "przeworsk", "lubaczow", "rzeszow", "sanok"],
    metaDescription:
      "Automatyzacja dla firm z Przemyśla: logistyka i handel przy granicy z Ukrainą, turystyka, produkcja i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy przemyskim firmom transportowym, handlowym i turystycznym uporządkować zlecenia, dokumenty i rezerwacje.",
    intro: [
      "Przemyśl jest jednym z najstarszych miast Polski i ważnym ośrodkiem przy granicy z Ukrainą. Bliskość przejścia w Medyce sprawia, że transport, spedycja i handel są tu bardzo ważne.",
      "Zabytki, twierdza i bliskość Bieszczadów przyciągają turystów.",
    ],
    localContext:
      "Przemyskie firmy obsługują ruch towarów i osób przez granicę, z dokumentami w kilku językach.",
    whyHere:
      "W Przemyślu automatyzacja przejmuje przepisywanie dokumentów przewozowych i odpowiedzi w kilku językach.",
    industries: [
      ["Spedycja i transport", "Zlecenia, dokumenty, odprawy i statusy."],
      ["Handel", "Zamówienia, faktury i korespondencja po ukraińsku."],
      ["Turystyka", "Rezerwacje i pytania gości."],
      ["Produkcja", "Zamówienia i zakupy."],
    ],
    processes: [
      ["Dokumenty przewozowe", "Dane z dokumentów odczytane przez AI i przypisane do zleceń."],
      ["Kompletowanie dokumentów do odprawy", "Lista braków wysyłana klientowi automatycznie."],
      ["Statusy dla klientów", "Informacja o etapie przesyłki bez telefonu."],
      ["Rezerwacje", "Potwierdzenia i zaliczki bez ręcznych maili."],
    ],
    faq: [
      ["Czy obsłużycie dokumenty po ukraińsku?", "Tak. AI odczytuje dokumenty i przygotowuje odpowiedzi w języku klienta."],
      ["Czy automatyzujecie agencje celne i spedytorów?", "Tak. Dokumenty, statusy, odprawy i rozliczenia."],
      remote("Przemyśla"),
      start,
    ],
    services: ["automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "tarnobrzeg",
    name: "Tarnobrzeg",
    nameGenitive: "Tarnobrzega",
    nameLocative: "Tarnobrzegu",
    nearbyCitySlugs: ["stalowa-wola", "nisko", "mielec", "rzeszow", "debica"],
    metaDescription:
      "Automatyzacja dla firm z Tarnobrzega: produkcja w strefie ekonomicznej, przetwórstwo, handel i usługi. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy tarnobrzeskim zakładom i firmom usługowym uporządkować zamówienia, dokumentację i rozliczenia.",
    intro: [
      "Tarnobrzeg przez dekady żył z wydobycia siarki. Dziś to siedziba specjalnej strefy ekonomicznej, w której działają zakłady produkcyjne wielu branż, a dawne tereny kopalni zamieniono w jezioro rekreacyjne.",
      "Miasto obsługuje północną część regionu jako centrum handlu i usług.",
    ],
    localContext:
      "Tarnobrzeskie zakłady ze strefy ekonomicznej pracują dla odbiorców w Polsce i za granicą.",
    whyHere:
      "W Tarnobrzegu automatyzacja przyspiesza zamówienia i dokumentację w produkcji.",
    industries: [
      ["Produkcja w strefie ekonomicznej", "Zamówienia, zakupy i dokumentacja."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi i rekreacja", "Rezerwacje i terminy."],
    ],
    processes: [
      ["Zamówienia z portali klientów", "Pobierane automatycznie i przekazywane do systemu."],
      ["Reklamacje", "Rejestr z danymi partii i terminami."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
      ["Raport produkcji", "Wskaźniki zbierane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami ze strefy ekonomicznej?", "Tak, w procesach wokół produkcji."],
      noErp,
      remote("Tarnobrzega"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "sanok",
    name: "Sanok",
    nameGenitive: "Sanoka",
    nameLocative: "Sanoku",
    nearbyCitySlugs: ["krosno", "brzozow", "ustrzyki-dolne", "przemysl", "rzeszow"],
    metaDescription:
      "Automatyzacja dla firm z Sanoka: przemysł gumowy i motoryzacyjny, produkcja, turystyka w Bieszczadach i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sanockim zakładom i firmom turystycznym uporządkować zamówienia, dokumentację i rezerwacje.",
    intro: [
      "Sanok ma silną tradycję przemysłową. Działa tu duży producent wyrobów gumowych dla motoryzacji i budownictwa, a w przeszłości miasto słynęło z produkcji autobusów.",
      "Sanok jest bramą w Bieszczady, a skansen i zabytki przyciągają turystów.",
    ],
    localContext:
      "Sanockie zakłady pracują dla klientów motoryzacyjnych z ich wymaganiami jakościowymi, a firmy turystyczne obsługują ruch w Bieszczady.",
    whyHere:
      "W Sanoku automatyzacja porządkuje zamówienia i dokumentację jakości w przemyśle oraz rezerwacje w turystyce.",
    industries: [
      ["Przemysł gumowy i motoryzacyjny", "Zamówienia z portali, raporty jakości i reklamacje."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Turystyka", "Rezerwacje i pytania gości."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia z portali klientów", "Pobierane automatycznie i przekazywane do systemu."],
      ["Reklamacje 8D", "Rejestr z danymi partii i szkicem raportu."],
      ["Rezerwacje", "Jeden kalendarz bez podwójnych rezerwacji."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami motoryzacji?", "Tak. Zamówienia z portali, raporty jakości i reklamacje."],
      ["Czy automatyzujecie obiekty turystyczne?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      remote("Sanoka"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-raportow", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "jaslo",
    name: "Jasło",
    nameGenitive: "Jasła",
    nameLocative: "Jaśle",
    nearbyCitySlugs: ["krosno", "debica", "strzyzow", "rzeszow", "sanok"],
    metaDescription:
      "Automatyzacja dla firm z Jasła: produkcja, przemysł metalowy, handel i usługi. Zamówienia, dokumenty i faktury bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy jasielskim zakładom i firmom handlowym przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Jasło leży na Pogórzu, w regionie z tradycjami przemysłu naftowego. Dziś działają tu zakłady produkcyjne, metalowe i firmy handlowe obsługujące południe Podkarpacia.",
      "Miasto ma podstrefę ekonomiczną i dobre połączenia z Krosnem i Rzeszowem.",
    ],
    localContext:
      "Jasielskie firmy to często rodzinne zakłady z niewielkim biurem, obsługujące klientów w całej Polsce.",
    whyHere:
      "W Jaśle automatyzacja pozwala obsłużyć więcej zamówień bez rozbudowy biura.",
    industries: [
      ["Produkcja metalowa", "Zapytania, zlecenia i dokumentacja."],
      ["Produkcja", "Zamówienia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Zapytania i terminy."],
    ],
    processes: [
      ["Wyceny zleceń", "Kalkulacja z podobnych wyrobów."],
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [smallFirm, noErp, remote("Jasła"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "jaroslaw",
    name: "Jarosław",
    nameGenitive: "Jarosławia",
    nameLocative: "Jarosławiu",
    nearbyCitySlugs: ["przemysl", "przeworsk", "lubaczow", "lancut", "rzeszow"],
    metaDescription:
      "Automatyzacja dla firm z Jarosławia: produkcja, przetwórstwo, logistyka przy A4 i handel z Ukrainą. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy jarosławskim zakładom i firmom logistycznym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Jarosław leży przy autostradzie A4, w drodze do granicy z Ukrainą. Działają tu zakłady produkcyjne, przetwórcze i firmy logistyczne.",
      "Miasto ma bogatą historię kupiecką, a zabytkowy rynek przyciąga turystów.",
    ],
    localContext:
      "Jarosławskie firmy obsługują ruch towarów na wschód i zachód, z dokumentami i rozliczeniami w kilku walutach.",
    whyHere:
      "W Jarosławiu automatyzacja przyspiesza zamówienia i dokumenty przewozowe.",
    industries: [
      ["Produkcja", "Zamówienia, zakupy i dokumentacja."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Logistyka przy A4", "Zlecenia, dokumenty i statusy."],
      ["Handel z Ukrainą", "Zamówienia i faktury w dwóch językach."],
    ],
    processes: [
      ["Zlecenia transportowe", "Zlecenia z maili w systemie, statusy dla klientów."],
      ["Dokumenty przewozowe", "Dane z dokumentów odczytane przez AI."],
      ["Zamówienia od klientów", "Zamówienia odczytane i przekazane do systemu."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy obsłużycie dokumenty po ukraińsku?", "Tak. AI odczytuje dokumenty i przygotowuje odpowiedzi w języku klienta."],
      ["Czy automatyzujecie firmy transportowe?", "Tak. Zlecenia, dokumenty, statusy i rozliczenia."],
      remote("Jarosławia"),
      start,
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "lancut",
    name: "Łańcut",
    nameGenitive: "Łańcuta",
    nameLocative: "Łańcucie",
    nearbyCitySlugs: ["rzeszow", "przeworsk", "lezajsk", "jaroslaw", "kolbuszowa"],
    metaDescription:
      "Automatyzacja dla firm z Łańcuta: przetwórstwo spożywcze, produkcja, turystyka i usługi. Zamówienia, rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy łańcuckim zakładom i firmom turystycznym uporządkować zamówienia, dostawy i rezerwacje.",
    intro: [
      "Łańcut słynie z zamku i kolekcji powozów, które przyciągają turystów, oraz z tradycji gorzelniczej. W mieście działają zakłady spożywcze i produkcyjne.",
      "Bliskość Rzeszowa i autostrady A4 sprawia, że wiele lokalnych firm obsługuje klientów z całego regionu.",
    ],
    localContext:
      "Łańcuckie firmy łączą obsługę turystów z produkcją dla odbiorców krajowych.",
    whyHere:
      "W Łańcucie automatyzacja porządkuje zamówienia w produkcji i rezerwacje grup w turystyce.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia od sieci i partie."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Turystyka", "Rezerwacje grup i pytania gości."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Rezerwacje grup", "Zapytanie, oferta i zaliczka."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
      ["Opinie", "Prośba o opinię po wizycie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      ["Czy automatyzujecie obiekty turystyczne?", "Tak. Rezerwacje grup, zaliczki i odpowiedzi na pytania."],
      remote("Łańcuta"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "lezajsk",
    name: "Leżajsk",
    nameGenitive: "Leżajska",
    nameLocative: "Leżajsku",
    nearbyCitySlugs: ["lancut", "nisko", "stalowa-wola", "jaroslaw", "rzeszow"],
    metaDescription:
      "Automatyzacja dla firm z Leżajska: browarnictwo, przetwórstwo, produkcja i handel. Zamówienia, dostawy i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy leżajskim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Leżajsk jest znany z browaru i bazyliki, która przyciąga pielgrzymów. W mieście działają też zakłady przetwórcze i produkcyjne.",
      "Lokalne firmy obsługują odbiorców z całej Polski.",
    ],
    localContext:
      "Leżajskie zakłady sprzedają do hurtowni i sieci handlowych, z zamówieniami i dostawami do obsłużenia każdego dnia.",
    whyHere:
      "W Leżajsku automatyzacja porządkuje zamówienia od odbiorców i dokumenty dostaw.",
    industries: [
      ["Browarnictwo i przetwórstwo", "Zamówienia od sieci, partie i dokumenty."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Awizacje dostaw", "Terminy potwierdzane automatycznie."],
      ["Reklamacje", "Rejestr z danymi partii."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      noErp,
      remote("Leżajska"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "przeworsk",
    name: "Przeworsk",
    nameGenitive: "Przeworska",
    nameLocative: "Przeworsku",
    nearbyCitySlugs: ["lancut", "jaroslaw", "przemysl", "rzeszow", "lezajsk"],
    metaDescription:
      "Automatyzacja dla firm z Przeworska: przetwórstwo, rolnictwo, produkcja i handel przy A4. Dostawy i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Przeworska uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Przeworsk leży przy autostradzie A4, w rolniczej okolicy. Działają tu zakłady przetwórcze, w tym związane z przetwórstwem buraków cukrowych, oraz firmy produkcyjne i handlowe.",
      "Miasto obsługuje powiat jako centrum usług.",
    ],
    localContext:
      "Przeworskie firmy obsługują rolnictwo i odbiorców z regionu, z sezonowymi szczytami dostaw.",
    whyHere:
      "W Przeworsku automatyzacja porządkuje dostawy i rozliczenia w sezonie.",
    industries: [
      ["Przetwórstwo", "Dostawy surowca, partie i rozliczenia."],
      ["Rolnictwo", "Umowy i dostawy."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Rozliczenia z dostawcami", "Zestawienie dostaw i należności."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
      ["Terminy płatności", "Przypomnienia o płatnościach."],
    ],
    faq: [["Czy pracujecie z firmami rolnymi?", "Tak, w dokumentach, rozliczeniach i raportach."], smallFirm, remote("Przeworska"), start],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "ropczyce",
    name: "Ropczyce",
    nameGenitive: "Ropczyc",
    nameLocative: "Ropczycach",
    nearbyCitySlugs: ["debica", "rzeszow", "mielec", "strzyzow", "kolbuszowa"],
    metaDescription:
      "Automatyzacja dla firm z Ropczyc: materiały ogniotrwałe, produkcja, handel i usługi przy A4. Zamówienia i dokumentacja bez przepisywania.",
    heroLead:
      "Pomagamy ropczyckim zakładom i firmom handlowym uporządkować zamówienia, dokumentację i dostawy.",
    intro: [
      "Ropczyce mają tradycję produkcji materiałów ogniotrwałych dla hutnictwa i przemysłu. Działają tu też inne zakłady produkcyjne i firmy handlowe.",
      "Położenie przy autostradzie A4 między Rzeszowem a Dębicą ułatwia dostawy.",
    ],
    localContext:
      "Ropczyckie zakłady sprzedają do odbiorców przemysłowych w kraju i za granicą, z dokumentacją techniczną i jakościową.",
    whyHere:
      "W Ropczycach automatyzacja przyspiesza zamówienia i porządkuje dokumentację jakości.",
    industries: [
      ["Materiały ogniotrwałe", "Zamówienia, świadectwa jakości i dostawy."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia od klientów", "Zamówienia z maili odczytane przez AI."],
      ["Świadectwa jakości", "Dokumenty przypisane do partii i dostaw."],
      ["Reklamacje", "Rejestr z terminami i historią."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [supplier, noErp, remote("Ropczyc"), start],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "integracje-systemow", "automatyzacja-sprzedazy"],
  }),
  town({
    ...base,
    slug: "kolbuszowa",
    name: "Kolbuszowa",
    nameGenitive: "Kolbuszowej",
    nameLocative: "Kolbuszowej",
    nearbyCitySlugs: ["rzeszow", "mielec", "lancut", "stalowa-wola", "ropczyce"],
    metaDescription:
      "Automatyzacja dla firm z Kolbuszowej: produkcja, drewno, handel i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy kolbuszowskim firmom przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Kolbuszowa leży między Rzeszowem a Mielcem, wśród lasów Puszczy Sandomierskiej. Działają tu zakłady produkcyjne, w tym drzewne, oraz firmy handlowe i usługowe.",
      "Skansen Kultury Ludowej przyciąga turystów.",
    ],
    localContext:
      "Kolbuszowskie firmy często współpracują z zakładami w Rzeszowie i Mielcu.",
    whyHere:
      "W Kolbuszowej automatyzacja odciąża małe biura z przepisywania zamówień i faktur.",
    industries: [
      ["Produkcja", "Zlecenia i zakupy."],
      ["Drewno", "Zamówienia i dostawy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [smallFirm, noErp, remote("Kolbuszowej"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "strzyzow",
    name: "Strzyżów",
    nameGenitive: "Strzyżowa",
    nameLocative: "Strzyżowie",
    nearbyCitySlugs: ["rzeszow", "krosno", "jaslo", "ropczyce", "brzozow"],
    metaDescription:
      "Automatyzacja dla firm ze Strzyżowa: produkcja, handel, rolnictwo i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom ze Strzyżowa uporządkować zamówienia, faktury i dokumenty.",
    intro: [
      "Strzyżów leży nad Wisłokiem, między Rzeszowem a Krosnem. Lokalna gospodarka to małe zakłady produkcyjne, handel, rolnictwo i usługi.",
      "Wiele firm ma klientów i dostawców w Rzeszowie i Krośnie.",
    ],
    localContext:
      "Strzyżowskie firmy to głównie małe przedsiębiorstwa z niewielkim biurem.",
    whyHere:
      "W Strzyżowie automatyzacja odciąża małe zespoły z powtarzalnej pracy.",
    industries: [
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia z maili", "Zamówienia odczytane przez AI i zapisane w rejestrze."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zamówień."],
      ["Przypomnienia o płatnościach", "Wysyłane automatycznie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [smallFirm, noErp, remote("Strzyżowa"), start],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "brzozow",
    name: "Brzozów",
    nameGenitive: "Brzozowa",
    nameLocative: "Brzozowie",
    nearbyCitySlugs: ["krosno", "sanok", "strzyzow", "rzeszow", "ustrzyki-dolne"],
    metaDescription:
      "Automatyzacja dla firm z Brzozowa: produkcja, handel, usługi i turystyka na Pogórzu. Zamówienia i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Brzozowa przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Brzozów leży na Pogórzu Dynowskim, między Krosnem a Sanokiem. Lokalna gospodarka to małe zakłady produkcyjne, handel i usługi.",
      "Okolica przyciąga turystów jadących w Bieszczady.",
    ],
    localContext:
      "Brzozowskie firmy obsługują klientów z regionu, często w kilkuosobowym zespole.",
    whyHere:
      "W Brzozowie automatyzacja odciąża małe zespoły z przepisywania i pilnowania terminów.",
    industries: [
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Rezerwacje", "Potwierdzenia i zaliczki bez ręcznych maili."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [smallFirm, noErp, remote("Brzozowa"), start],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "ustrzyki-dolne",
    name: "Ustrzyki Dolne",
    nameGenitive: "Ustrzyk Dolnych",
    nameLocative: "Ustrzykach Dolnych",
    nearbyCitySlugs: ["sanok", "brzozow", "krosno", "przemysl", "rzeszow"],
    metaDescription:
      "Automatyzacja dla pensjonatów, hoteli i firm z Ustrzyk Dolnych: rezerwacje, zaliczki, pytania gości i sezon w Bieszczadach. Konsultacja 30 min.",
    heroLead:
      "Pomagamy bieszczadzkim pensjonatom, hotelom i firmom turystycznym obsłużyć gości bez przeciążenia recepcji.",
    intro: [
      "Ustrzyki Dolne są jednym z głównych ośrodków turystycznych Bieszczadów. Pensjonaty, agroturystyki, hotele i stoki narciarskie obsługują gości latem i zimą.",
      "W okolicy działają też firmy drzewne i usługowe.",
    ],
    localContext:
      "Bieszczadzkie obiekty obsługują rezerwacje z wielu portali, a goście pytają o dojazd, szlaki i atrakcje.",
    whyHere:
      "W Ustrzykach Dolnych automatyzacja przejmuje rezerwacje i powtarzalne odpowiedzi, a gospodarze zajmują się gośćmi.",
    industries: [
      ["Pensjonaty i agroturystyka", "Rezerwacje z wielu portali, zaliczki i pytania gości."],
      ["Hotele i stoki", "Rezerwacje, pakiety i karnety."],
      ["Gastronomia", "Rezerwacje grup."],
      ["Drewno i usługi", "Zamówienia i faktury."],
    ],
    processes: [
      ["Jeden kalendarz rezerwacji", "Rezerwacje z kilku portali bez podwójnych rezerwacji."],
      ["Pytania gości", "Asystent AI odpowiada o dojazd, szlaki i ceny."],
      ["Zaliczki i przypomnienia", "Link do płatności i przypomnienie przed przyjazdem."],
      ["Opinie po pobycie", "Prośba o opinię wysyłana automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie pensjonaty w Bieszczadach?", "Tak. Rezerwacje, zaliczki, przypomnienia i odpowiedzi na pytania gości."],
      ["Czy asystent odpowie gościom w nocy?", "Tak. Odpowiada o każdej porze na podstawie waszych informacji."],
      remote("Ustrzyk Dolnych"),
      start,
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "nisko",
    name: "Nisko",
    nameGenitive: "Niska",
    nameLocative: "Nisku",
    nearbyCitySlugs: ["stalowa-wola", "tarnobrzeg", "lezajsk", "janow-lubelski", "rzeszow"],
    metaDescription:
      "Automatyzacja dla firm z Niska: produkcja, kooperanci przemysłu, drewno i usługi. Zamówienia, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Niska uporządkować zamówienia, zlecenia i dokumenty.",
    intro: [
      "Nisko leży nad Sanem, tuż obok Stalowej Woli. Wiele lokalnych firm współpracuje z tamtejszym przemysłem jako kooperanci i dostawcy.",
      "Okoliczne lasy wspierają przemysł drzewny.",
    ],
    localContext:
      "Firmy z Niska często pracują dla zakładów w Stalowej Woli, z ich wymaganiami dotyczącymi dokumentacji i terminów.",
    whyHere:
      "W Nisku automatyzacja porządkuje zlecenia i rozliczenia u kooperantów.",
    industries: [
      ["Kooperanci przemysłu", "Zlecenia, terminy i rozliczenia."],
      ["Drewno", "Zamówienia i dostawy."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zlecenia od zakładów", "Zlecenia z maili w rejestrze z terminami."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami."],
      ["Rozliczenia zleceń", "Godziny i materiały przypisane do zlecenia."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [["Czy pracujecie z kooperantami przemysłu?", "Tak. Zlecenia, dokumentacja, terminy i rozliczenia."], smallFirm, remote("Niska"), start],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "lubaczow",
    name: "Lubaczów",
    nameGenitive: "Lubaczowa",
    nameLocative: "Lubaczowie",
    nearbyCitySlugs: ["jaroslaw", "przemysl", "bilgoraj", "zamosc", "rzeszow"],
    metaDescription:
      "Automatyzacja dla firm z Lubaczowa: drewno, rolnictwo, handel przy granicy i usługi. Zamówienia i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Lubaczowa uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Lubaczów leży na Roztoczu Wschodnim, przy granicy z Ukrainą. Lokalna gospodarka to przemysł drzewny, rolnictwo, handel i usługi.",
      "Lasy i przyroda Roztocza przyciągają turystów.",
    ],
    localContext:
      "Lubaczowskie firmy to głównie małe przedsiębiorstwa, które obsługują klientów z obu stron granicy.",
    whyHere:
      "W Lubaczowie automatyzacja odciąża małe biura z przepisywania dokumentów.",
    industries: [
      ["Drewno", "Zamówienia i dostawy."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel przy granicy", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Dokumenty dostaw", "Dokumenty przypisane do zamówień."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Korespondencja po ukraińsku", "Szkice odpowiedzi przygotowane przez AI."],
    ],
    faq: [smallFirm, ["Czy obsłużycie dokumenty po ukraińsku?", "Tak, AI odczyta dokumenty i przygotuje odpowiedzi."], remote("Lubaczowa"), start],
    services: ["automatyzacja-dla-firm-uslugowych", "ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
];
