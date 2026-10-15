import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "kujawsko-pomorskie", regionCluster: "kujawy", updatedAt: "2026-10-15" } as const;

const q4 = (city: string, locative: string): [string, string][] => [
  [`Czy pracujecie z firmami z ${city}?`, `Tak, zdalnie. Pierwsza rozmowa i większość wdrożenia odbywają się online, a w razie potrzeby przyjeżdżamy na warsztat do ${locative}.`],
  ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy programy, których już używacie, i dokładamy tylko to, czego brakuje."],
];

export const kujawskoPomorskieRegion = region({
  slug: "kujawsko-pomorskie",
  intro: [
    "Kujawsko-Pomorskie ma dwa główne ośrodki: Bydgoszcz z silnym przemysłem i usługami dla biznesu oraz Toruń, miasto uniwersyteckie i turystyczne z zabytkowym starym miastem na liście UNESCO.",
    "Region ma rozbudowany przemysł chemiczny we Włocławku i Inowrocławiu, papierniczy w Świeciu, spożywczy i przetwórczy na Kujawach oraz meblarski i drzewny w Borach Tucholskich i okolicach Brodnicy.",
    "Kujawy to jedne z najżyźniejszych terenów rolniczych w Polsce, a Inowrocław i Ciechocinek to znane uzdrowiska. Przez region przebiegają autostrada A1 i drogi ekspresowe, co sprzyja logistyce.",
    "Z firmami z regionu pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt.",
  ],
  industries: [
    ["Przemysł chemiczny", "Dokumentacja jakości, zamówienia, dostawy i raporty we Włocławku i Inowrocławiu."],
    ["Przemysł w Bydgoszczy", "Zapytania ofertowe, zamówienia z portali, dokumentacja i reklamacje."],
    ["Rolnictwo i przetwórstwo na Kujawach", "Dostawy surowca, partie, zamówienia od sieci i rozliczenia."],
    ["Meble i drewno", "Wyceny, zamówienia, terminy i dostawy w Borach Tucholskich i okolicach Brodnicy."],
    ["Uzdrowiska i turystyka", "Rezerwacje pobytów, zabiegi i pytania gości w Toruniu, Inowrocławiu i Chełmnie."],
  ],
  faq: [
    ["Czy macie biuro w Bydgoszczy lub Toruniu?", "Nie. Z firmami z regionu pracujemy zdalnie, a na warsztaty na miejscu przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy pracujecie z zakładami chemicznymi i spożywczymi?", "Tak, w procesach wokół produkcji: zamówienia, dokumentacja jakości, dostawy, reklamacje i raporty. Nie ingerujemy w sterowanie instalacjami."],
    ["Czy automatyzujecie uzdrowiska i hotele?", "Tak. Rezerwacje pobytów, harmonogramy zabiegów, przypomnienia i odpowiedzi na pytania gości."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const kujawskoPomorskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "bydgoszcz",
    name: "Bydgoszcz",
    nameGenitive: "Bydgoszczy",
    nameLocative: "Bydgoszczy",
    nearbyCitySlugs: ["torun", "naklo-nad-notecia", "swiecie", "inowroclaw", "znin", "tuchola"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Bydgoszczy: przemysł, tworzywa, elektronika, logistyka, centra usług i IT. Konsultacja 30 min.",
    heroLead:
      "Pomagamy bydgoskim zakładom, centrom usług i firmom logistycznym przejąć powtarzalną pracę z dokumentami, zamówieniami i raportami.",
    intro: [
      "Bydgoszcz jest największym miastem regionu i jednym z ważniejszych ośrodków przemysłowych północnej Polski. Działają tu zakłady produkujące pojazdy szynowe, elektronikę, wyroby z tworzyw sztucznych i narzędzia, a park przemysłowo-technologiczny przyciąga kolejne firmy.",
      "Miasto rozwija się też jako ośrodek usług dla biznesu i IT. Centra usług wspólnych i firmy technologiczne obsługują klientów z Polski i zagranicy.",
    ],
    localContext:
      "Bydgoskie firmy produkcyjne pracują dla wymagających klientów, z portalami zamówień, raportami jakości i reklamacjami, a centra usług przetwarzają dziesiątki tysięcy dokumentów.",
    whyHere:
      "W Bydgoszczy automatyzacja przyspiesza obsługę zamówień i dokumentacji w produkcji, a w centrach usług przejmuje odczyt dokumentów i obsługę zgłoszeń.",
    economy: {
      title: "Czym żyje bydgoski biznes",
      paragraphs: [
        "Bydgoszcz ma długą tradycję przemysłową. Dziś działają tu producenci pojazdów szynowych, elektroniki, tworzyw sztucznych, narzędzi i maszyn, a wokół nich dostawcy i kooperanci.",
        "Park przemysłowo-technologiczny i strefy inwestycyjne przyciągają kolejne zakłady, a centra usług wspólnych i firmy IT zatrudniają tysiące osób.",
        "Położenie przy drodze S5 i blisko A1 sprzyja logistyce, a port lotniczy łączy miasto z innymi ośrodkami.",
      ],
    },
    industries: [
      ["Przemysł maszynowy i pojazdy szynowe", "Zapytania ofertowe, dokumentacja techniczna, zakupy i reklamacje."],
      ["Tworzywa sztuczne i elektronika", "Zamówienia z portali klientów, dokumentacja jakości i raporty."],
      ["Centra usług i IT", "Odczyt dokumentów, obsługa zgłoszeń, onboarding i raporty."],
      ["Logistyka", "Zlecenia, awizacje, dokumenty i rozliczenia."],
    ],
    processes: [
      ["Odczyt dokumentów", "AI odczytuje faktury, zamówienia i formularze i przekazuje dane do systemu."],
      ["Reklamacje klientów", "Rejestr z danymi partii, terminami i szkicem raportu w formacie klienta."],
      ["Obsługa zgłoszeń", "Zgłoszenia z kategorią, priorytetem i terminem odpowiedzi."],
      ["Raporty dla zarządu", "Wskaźniki z kilku systemów zebrane automatycznie."],
    ],
    example: {
      title: "Reklamacja klienta w bydgoskim zakładzie tworzyw przed i po automatyzacji",
      lead: "Przykład zakładu produkującego elementy z tworzyw dla klientów przemysłowych. Tak zmienia się obsługa jednej reklamacji.",
      rows: [
        ["Zgłoszenie", "Mail ze zdjęciami, dział jakości szuka numeru partii.", "Reklamacja w rejestrze z numerem partii odczytanym z maila."],
        ["Dane o partii", "Zbierane z ERP, raportów zmianowych i świadectw.", "Dołączane automatycznie do reklamacji."],
        ["Raport dla klienta", "Pisany od zera w formacie klienta.", "Szkic raportu z danych, dział jakości uzupełnia przyczynę i działania."],
        ["Termin odpowiedzi", "Pilnowany w kalendarzu jednej osoby.", "Przypomnienie przed terminem dla działu jakości i kierownika."],
      ],
    },
    faq: [
      ["Czy pracujecie z zakładami przemysłowymi z Bydgoszczy?", "Tak, w procesach wokół produkcji: wyceny, zamówienia, zakupy, reklamacje, utrzymanie ruchu i dokumentacja."],
      ["Czy automatyzujecie centra usług wspólnych?", "Tak. Odczyt dokumentów przez AI, obieg zgłoszeń, uzgodnienia i raporty."],
      ["Czy pracujecie zdalnie?", "Tak, a na warsztaty w Bydgoszczy przyjeżdżamy, gdy przyspieszają projekt."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni od konsultacji do działającego procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-raportow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "torun",
    name: "Toruń",
    nameGenitive: "Torunia",
    nameLocative: "Toruniu",
    nearbyCitySlugs: ["bydgoszcz", "chelmno", "aleksandrow-kujawski", "golub-dobrzyn", "inowroclaw", "grudziadz"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Torunia: turystyka, usługi, IT, produkcja i logistyka przy A1. Konsultacja 30 min.",
    heroLead:
      "Pomagamy toruńskim firmom usługowym, turystycznym i produkcyjnym przejąć powtarzalną pracę z rezerwacjami, dokumentami i zamówieniami.",
    intro: [
      "Toruń jest siedzibą władz samorządowych województwa, dużym ośrodkiem akademickim i jednym z najchętniej odwiedzanych miast w Polsce. Zabytkowe stare miasto przyciąga turystów przez cały rok.",
      "Obok turystyki i usług działają tu zakłady produkcyjne, firmy IT i logistyczne, korzystające z położenia przy autostradzie A1.",
    ],
    localContext:
      "Toruńskie firmy łączą obsługę turystów i studentów z produkcją i usługami dla biznesu, a wiele z nich pracuje z małym zespołem biurowym.",
    whyHere:
      "W Toruniu automatyzacja porządkuje rezerwacje i pytania gości w turystyce, a w usługach i produkcji przejmuje przepisywanie dokumentów.",
    economy: {
      title: "Czym żyje toruński biznes",
      paragraphs: [
        "Turystyka jest jedną z najważniejszych gałęzi gospodarki Torunia. Hotele, restauracje, przewodnicy i organizatorzy wycieczek obsługują gości z Polski i zagranicy.",
        "Uniwersytet tworzy zaplecze dla firm IT i usług, a w strefach inwestycyjnych działają zakłady produkcyjne i centra logistyczne przy A1.",
      ],
    },
    industries: [
      ["Turystyka, hotele i gastronomia", "Rezerwacje, grupy, pytania gości i opinie."],
      ["IT i usługi dla firm", "Zgłoszenia, czas pracy i rozliczenia projektów."],
      ["Produkcja", "Zamówienia, zakupy i dokumentacja jakości."],
      ["Logistyka przy A1", "Zlecenia, awizacje i dokumenty."],
    ],
    processes: [
      ["Rezerwacje grup", "Zapytanie, oferta, zaliczka i przypomnienie w jednym przepływie."],
      ["Pytania gości", "Asystent AI odpowiada w kilku językach na podstawie waszej oferty."],
      ["Obieg faktur kosztowych", "Faktury z KSeF przypisane do projektów lub działów."],
      ["Lejek sprzedaży", "Zapytania z formularzy trafiają do CRM z przypisanym handlowcem."],
    ],
    faq: [
      ["Czy automatyzujecie hotele i obiekty turystyczne w Toruniu?", "Tak. Rezerwacje z kilku portali, grupy, zaliczki i odpowiedzi na pytania gości."],
      ["Czy pomagacie toruńskim firmom IT?", "Tak. Zgłoszenia klientów, ewidencja czasu, rozliczenia projektów i onboarding."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "wloclawek",
    name: "Włocławek",
    nameGenitive: "Włocławka",
    nameLocative: "Włocławku",
    nearbyCitySlugs: ["aleksandrow-kujawski", "lipno", "radziejow", "torun", "plock", "inowroclaw"],
    metaDescription:
      "Automatyzacja dla firm z Włocławka: przemysł chemiczny, przetwórstwo, podwykonawcy przemysłu i logistyka. Dokumentacja i zlecenia bez przepisywania.",
    heroLead:
      "Pomagamy włocławskim zakładom i ich podwykonawcom uporządkować dokumentację, zlecenia i rozliczenia.",
    intro: [
      "Włocławek jest jednym z największych ośrodków przemysłu chemicznego w Polsce. Duży zakład produkujący nawozy i tworzywa jest jednym z największych pracodawców regionu, a wokół niego działają firmy serwisowe, remontowe i transportowe.",
      "Miasto leży nad Wisłą, przy autostradzie A1, a w okolicy działają zakłady przetwórstwa spożywczego.",
    ],
    localContext:
      "Firmy z Włocławka pracują często dla zakładów, które wymagają szczegółowej dokumentacji, uprawnień pracowników i protokołów z prac.",
    whyHere:
      "We Włocławku automatyzacja zdejmuje z kierowników kompletowanie dokumentów i protokołów, a rozliczenia zleceń są gotowe szybciej.",
    economy: {
      title: "Czym żyje włocławski biznes",
      paragraphs: [
        "Przemysł chemiczny jest fundamentem gospodarki Włocławka. Wokół dużego zakładu działa sieć podwykonawców: firm remontowych, serwisowych, transportowych i laboratoryjnych.",
        "W mieście i okolicy działają też zakłady spożywcze, a położenie przy A1 i nad Wisłą sprzyja logistyce.",
      ],
    },
    industries: [
      ["Przemysł chemiczny", "Dokumentacja jakości, zamówienia i raporty dla działów wsparcia."],
      ["Serwis i remonty przemysłowe", "Zlecenia, uprawnienia pracowników, protokoły i rozliczenia."],
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty jakości."],
      ["Transport i logistyka", "Zlecenia, dokumenty ADR i rozliczenia."],
    ],
    processes: [
      ["Rejestr uprawnień", "Terminy badań i szkoleń z przypomnieniem przed wygaśnięciem."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami."],
      ["Dokumenty przewozowe", "Dane z dokumentów przypisane do zleceń automatycznie."],
      ["Rozliczenia zleceń", "Godziny i materiały przypisane do zlecenia na bieżąco."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładów chemicznych?", "Tak. Zlecenia, dokumentacja, uprawnienia pracowników i rozliczenia."],
      ["Czy automatyzacja dotyka instalacji przemysłowych?", "Nie. Pracujemy w procesach biurowych i dokumentacji."],
      ...q4("Włocławka", "Włocławka"),
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "grudziadz",
    name: "Grudziądz",
    nameGenitive: "Grudziądza",
    nameLocative: "Grudziądzu",
    nearbyCitySlugs: ["swiecie", "chelmno", "torun", "wabrzezno", "bydgoszcz", "brodnica"],
    metaDescription:
      "Automatyzacja dla firm z Grudziądza: produkcja, przemysł gumowy i metalowy, logistyka przy A1 i usługi. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy grudziądzkim zakładom i firmom logistycznym uporządkować zamówienia, dokumentację i rozliczenia.",
    intro: [
      "Grudziądz ma długą tradycję przemysłową, w tym w przemyśle gumowym i metalowym. Dziś w strefie ekonomicznej i parkach przemysłowych działają zakłady produkcyjne różnych branż.",
      "Miasto leży nad Wisłą, przy autostradzie A1, co przyciąga firmy logistyczne i dystrybucyjne.",
    ],
    localContext:
      "Grudziądzkie zakłady produkują dla odbiorców w Polsce i za granicą, z wymaganiami dotyczącymi dokumentacji i terminów.",
    whyHere:
      "W Grudziądzu automatyzacja przyspiesza obsługę zamówień i dokumentacji, a działy wsparcia nie przepisują danych.",
    economy: {
      title: "Czym żyje grudziądzki biznes",
      paragraphs: [
        "Grudziądz od ponad stu lat jest ośrodkiem przemysłu, m.in. gumowego i metalowego. W strefach inwestycyjnych powstają nowe zakłady i centra logistyczne.",
        "Miasto jest też centrum handlu i usług dla północnej części regionu.",
      ],
    },
    industries: [
      ["Przemysł gumowy i metalowy", "Zamówienia, dokumentacja jakości i reklamacje."],
      ["Produkcja w strefie ekonomicznej", "Zamówienia z portali, zakupy i raporty."],
      ["Logistyka przy A1", "Zlecenia, awizacje i dokumenty."],
      ["Handel i usługi", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia z portali klientów", "Pobierane automatycznie i przekazywane do systemu."],
      ["Reklamacje", "Rejestr z danymi partii i terminami."],
      ["Awizacje dostaw", "Terminy potwierdzane automatycznie z przewoźnikami."],
      ["Przeglądy maszyn", "Plan przeglądów z przypomnieniami i protokołami."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Grudziądza?", "Tak, w procesach wokół produkcji: zamówienia, zakupy, reklamacje i utrzymanie ruchu."],
      ["Czy automatyzujecie firmy logistyczne przy A1?", "Tak. Zlecenia, awizacje, dokumenty i rozliczenia."],
      ...q4("Grudziądza", "Grudziądza"),
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "inowroclaw",
    name: "Inowrocław",
    nameGenitive: "Inowrocławia",
    nameLocative: "Inowrocławiu",
    nearbyCitySlugs: ["mogilno", "znin", "radziejow", "bydgoszcz", "torun", "wloclawek"],
    metaDescription:
      "Automatyzacja dla firm z Inowrocławia: przemysł sodowy i solny, uzdrowisko, przetwórstwo i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy inowrocławskim zakładom, obiektom uzdrowiskowym i firmom usługowym uporządkować dokumenty, rezerwacje i zamówienia.",
    intro: [
      "Inowrocław łączy przemysł z uzdrowiskiem. W mieście działają zakłady przemysłu sodowego i solnego, a solanki i tężnie przyciągają kuracjuszy do parku zdrojowego.",
      "Kujawy wokół miasta to tereny rolnicze z przetwórstwem spożywczym i handlem.",
    ],
    localContext:
      "Inowrocławskie firmy obsługują duże zakłady przemysłowe, a obiekty uzdrowiskowe kuracjuszy, którzy oczekują sprawnej obsługi pobytów.",
    whyHere:
      "W Inowrocławiu automatyzacja porządkuje dokumentację u podwykonawców przemysłu i rezerwacje w obiektach uzdrowiskowych.",
    industries: [
      ["Przemysł sodowy i solny", "Dokumentacja, zlecenia podwykonawców i raporty."],
      ["Uzdrowisko i hotele", "Rezerwacje pobytów, zabiegi i pytania gości."],
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty jakości."],
      ["Handel i usługi", "Zamówienia i faktury."],
    ],
    processes: [
      ["Harmonogram zabiegów", "Zabiegi przypisane do gości automatycznie, z przypomnieniem."],
      ["Rezerwacja i zaliczka", "Potwierdzenie, link do płatności i przypomnienie."],
      ["Protokoły z prac", "Formularz na telefonie zamiast notatek przepisywanych wieczorem."],
      ["Zamówienia od odbiorców", "Zamówienia z maili odczytane przez AI."],
    ],
    faq: [
      ["Czy automatyzujecie obiekty uzdrowiskowe w Inowrocławiu?", "Tak. Rezerwacje, zabiegi, przypomnienia i odpowiedzi na pytania gości."],
      ["Czy pracujecie z podwykonawcami zakładów przemysłowych?", "Tak. Zlecenia, dokumentacja, uprawnienia i rozliczenia."],
      ...q4("Inowrocławia", "Inowrocławia"),
    ],
    services: ["automatyzacja-w-obsludze-klienta", "automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "chatbot-ai-dla-firmy"],
  }),
  town({
    ...base,
    slug: "swiecie",
    name: "Świecie",
    nameGenitive: "Świecia",
    nameLocative: "Świeciu",
    nearbyCitySlugs: ["bydgoszcz", "grudziadz", "tuchola", "chelmno", "torun"],
    metaDescription:
      "Automatyzacja dla firm ze Świecia: przemysł papierniczy, podwykonawcy, transport i usługi. Zlecenia, dokumenty i rozliczenia bez przepisywania.",
    heroLead:
      "Pomagamy firmom ze Świecia, które pracują dla przemysłu papierniczego, uporządkować zlecenia, transport i dokumentację.",
    intro: [
      "Świecie jest znane z jednego z największych zakładów papierniczych w Polsce. Wokół niego działają firmy transportowe, serwisowe, leśne i remontowe.",
      "Miasto leży nad Wisłą i przy autostradzie A1, co ułatwia transport surowca i wyrobów.",
    ],
    localContext:
      "Firmy ze Świecia pracują w rytmie dużego zakładu: dostawy drewna, transport wyrobów, serwis maszyn i dokumentacja.",
    whyHere:
      "W Świeciu automatyzacja porządkuje zlecenia transportowe, dokumenty i rozliczenia u dostawców i podwykonawców przemysłu.",
    industries: [
      ["Przemysł papierniczy i podwykonawcy", "Zlecenia, protokoły, uprawnienia i rozliczenia."],
      ["Transport i dostawy drewna", "Zlecenia, kursy, dokumenty i rozliczenia."],
      ["Usługi leśne", "Zlecenia, ewidencja prac i faktury."],
      ["Handel i usługi", "Zamówienia i faktury."],
    ],
    processes: [
      ["Rozliczenia kursów", "Kursy i dokumenty dostaw dopasowane do faktur."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami."],
      ["Rejestr uprawnień", "Terminy badań i szkoleń z przypomnieniem."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy pracujecie z firmami transportowymi ze Świecia?", "Tak. Zlecenia, dokumenty, kursy i rozliczenia."],
      ["Czy automatyzacja dotyka produkcji papieru?", "Nie. Pracujemy w procesach biurowych i dokumentacji wokół produkcji."],
      ...q4("Świecia", "Świecia"),
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "chelmno",
    name: "Chełmno",
    nameGenitive: "Chełmna",
    nameLocative: "Chełmnie",
    nearbyCitySlugs: ["torun", "grudziadz", "swiecie", "golub-dobrzyn", "wabrzezno"],
    metaDescription:
      "Automatyzacja dla firm z Chełmna: turystyka, produkcja, przetwórstwo i usługi. Rezerwacje, zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy chełmińskim firmom turystycznym, produkcyjnym i usługowym uporządkować rezerwacje, zamówienia i dokumenty.",
    intro: [
      "Chełmno, nazywane miastem zakochanych, słynie z gotyckiego starego miasta i murów obronnych. Turystyka jest ważna dla lokalnej gospodarki, szczególnie w okresie walentynkowym i latem.",
      "W mieście działają też zakłady produkcyjne i przetwórcze oraz firmy obsługujące okoliczne rolnictwo.",
    ],
    localContext:
      "Chełmińskie firmy to w dużej mierze małe przedsiębiorstwa, które w sezonie i przy wydarzeniach obsługują wielu gości naraz.",
    whyHere:
      "W Chełmnie automatyzacja pomaga obsłużyć szczyty rezerwacji i zapytań bez nadgodzin.",
    industries: [
      ["Turystyka i gastronomia", "Rezerwacje, grupy i pytania gości."],
      ["Produkcja", "Zamówienia i zakupy."],
      ["Przetwórstwo", "Partie, zamówienia i dokumenty."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rezerwacje grup", "Zapytanie, oferta i zaliczka w jednym przepływie."],
      ["Pytania gości", "Asystent AI odpowiada na typowe pytania o ofertę."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Opinie", "Prośba o opinię po wizycie wysyłana automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie obiekty turystyczne w Chełmnie?", "Tak. Rezerwacje, grupy, zaliczki i odpowiedzi na pytania."],
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci czas na powtarzalne odpowiedzi i przepisywanie."],
      ...q4("Chełmna", "Chełmna"),
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "brodnica",
    name: "Brodnica",
    nameGenitive: "Brodnicy",
    nameLocative: "Brodnicy",
    nearbyCitySlugs: ["rypin", "wabrzezno", "golub-dobrzyn", "olsztyn", "torun"],
    metaDescription:
      "Automatyzacja dla firm z Brodnicy: meble, produkcja, mleczarstwo i turystyka na Pojezierzu Brodnickim. Zamówienia i rezerwacje bez przepisywania.",
    heroLead:
      "Pomagamy brodnickim zakładom i obiektom turystycznym uporządkować zamówienia, dostawy i rezerwacje.",
    intro: [
      "Brodnica leży nad Drwęcą, na skraju Pojezierza Brodnickiego. Działają tu zakłady produkcyjne, w tym meblarskie i mleczarskie, a jeziora przyciągają turystów.",
      "Miasto jest ośrodkiem handlu i usług dla wschodniej części regionu.",
    ],
    localContext:
      "Brodnickie zakłady sprzedają w całej Polsce i za granicą, a obiekty turystyczne mają wyraźny sezon letni.",
    whyHere:
      "W Brodnicy automatyzacja przyspiesza obsługę zamówień w produkcji i rezerwacji w turystyce.",
    industries: [
      ["Meble i drewno", "Zamówienia, terminy produkcji i dostawy."],
      ["Mleczarstwo", "Dostawy surowca, partie i dokumenty."],
      ["Turystyka", "Rezerwacje i pytania gości."],
      ["Handel i usługi", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia od klientów", "Zamówienia z maili odczytane przez AI."],
      ["Terminy realizacji", "Klient dostaje informację o etapie zamówienia."],
      ["Rezerwacje z kilku portali", "Jeden kalendarz bez podwójnych rezerwacji."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z producentami mebli?", "Tak. Zamówienia, terminy, dostawy i reklamacje."],
      ["Czy automatyzujecie obiekty nad jeziorami?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ...q4("Brodnicy", "Brodnicy"),
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "tuchola",
    name: "Tuchola",
    nameGenitive: "Tucholi",
    nameLocative: "Tucholi",
    nearbyCitySlugs: ["sepolno-krajenskie", "swiecie", "bydgoszcz", "chojnice", "naklo-nad-notecia"],
    metaDescription:
      "Automatyzacja dla firm z Tucholi: przemysł drzewny, turystyka w Borach Tucholskich i usługi. Zamówienia i rezerwacje bez przepisywania.",
    heroLead:
      "Pomagamy tucholskim firmom drzewnym i turystycznym uporządkować zamówienia, dostawy i rezerwacje.",
    intro: [
      "Tuchola jest stolicą Borów Tucholskich, jednego z największych kompleksów leśnych w Polsce. Przemysł drzewny i usługi leśne od dawna tworzą lokalną gospodarkę.",
      "Lasy, jeziora i rzeki przyciągają turystów, kajakarzy i grzybiarzy, co wspiera noclegi i gastronomię.",
    ],
    localContext:
      "Tucholskie firmy to często rodzinne zakłady drzewne i obiekty turystyczne, które w sezonie obsługują wielu gości.",
    whyHere:
      "W Tucholi automatyzacja porządkuje zamówienia i dostawy drewna oraz rezerwacje w sezonie.",
    industries: [
      ["Przemysł drzewny", "Zamówienia, wyceny, dostawy i faktury."],
      ["Usługi leśne", "Zlecenia, ewidencja prac i rozliczenia."],
      ["Turystyka", "Rezerwacje noclegów i spływów."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Wyceny zamówień", "Szkic wyceny z cennika i podobnych zamówień."],
      ["Rezerwacje spływów", "Rezerwacja, zaliczka i przypomnienie."],
      ["Dokumenty dostaw", "Dokumenty przypisane do zamówień i faktur."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Wyceny, zamówienia, dostawy i dokumenty."],
      ["Czy automatyzujecie obiekty turystyczne w Borach Tucholskich?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ...q4("Tucholi", "Tucholi"),
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "naklo-nad-notecia",
    name: "Nakło nad Notecią",
    nameGenitive: "Nakła nad Notecią",
    nameLocative: "Nakle nad Notecią",
    nearbyCitySlugs: ["bydgoszcz", "znin", "sepolno-krajenskie", "tuchola", "inowroclaw"],
    metaDescription:
      "Automatyzacja dla firm z Nakła nad Notecią: przetwórstwo spożywcze, produkcja, rolnictwo i handel. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Nakła nad Notecią uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Nakło nad Notecią leży niedaleko Bydgoszczy, nad Notecią i Kanałem Bydgoskim. Działają tu zakłady przetwórstwa spożywczego, firmy produkcyjne i handlowe.",
      "Bliskość Bydgoszczy sprawia, że wiele lokalnych firm współpracuje z tamtejszym przemysłem i handlem.",
    ],
    localContext:
      "Firmy z Nakła sprzedają do sieci handlowych i hurtowni, a gospodarstwa z okolicy dostarczają surowiec do przetwórni.",
    whyHere:
      "W Nakle automatyzacja porządkuje zamówienia od odbiorców i dokumenty dostaw.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty jakości."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Rejestr dostaw surowca", "Dostawy z dokumentami i rozliczeniem."],
      ["Reklamacje", "Rejestr z danymi partii i terminami."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      ["Czy połączycie portale sieci z naszym systemem?", "Tak, jeśli portal pozwala pobrać zamówienia lub przysyła je mailem."],
      ...q4("Nakła nad Notecią", "Nakła"),
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "sepolno-krajenskie",
    name: "Sępólno Krajeńskie",
    nameGenitive: "Sępólna Krajeńskiego",
    nameLocative: "Sępólnie Krajeńskim",
    nearbyCitySlugs: ["tuchola", "naklo-nad-notecia", "bydgoszcz", "pila", "chojnice"],
    metaDescription:
      "Automatyzacja dla firm z Sępólna Krajeńskiego: produkcja, przemysł drzewny, rolnictwo i usługi. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Sępólna Krajeńskiego przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Sępólno Krajeńskie leży w Krajnie, na zachodnim skraju regionu, wśród lasów i jezior. Działają tu zakłady produkcyjne, w tym drzewne, oraz firmy rolnicze i usługowe.",
      "Lokalne firmy to w dużej mierze rodzinne przedsiębiorstwa z niewielkim biurem.",
    ],
    localContext:
      "Firmy z Sępólna często prowadzi właściciel z kilkuosobowym zespołem, który zajmuje się wszystkim.",
    whyHere:
      "W Sępólnie Krajeńskim automatyzacja odciąża właściciela i biuro z przepisywania zamówień i faktur.",
    industries: [
      ["Produkcja", "Zlecenia, zakupy i dokumenty."],
      ["Przemysł drzewny", "Zamówienia i dostawy."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na powtarzalną pracę."],
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Zamówienia, dostawy i dokumenty."],
      ...q4("Sępólna Krajeńskiego", "Sępólna"),
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "golub-dobrzyn",
    name: "Golub-Dobrzyń",
    nameGenitive: "Golubia-Dobrzynia",
    nameLocative: "Golubiu-Dobrzyniu",
    nearbyCitySlugs: ["torun", "wabrzezno", "rypin", "brodnica", "chelmno"],
    metaDescription:
      "Automatyzacja dla firm z Golubia-Dobrzynia: turystyka, przetwórstwo, rolnictwo i usługi. Rezerwacje, zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Golubia-Dobrzynia uporządkować rezerwacje, zamówienia i dokumenty.",
    intro: [
      "Golub-Dobrzyń leży nad Drwęcą, a nad miastem góruje krzyżacki zamek, który przyciąga turystów i organizatorów wydarzeń.",
      "Lokalna gospodarka opiera się na rolnictwie, przetwórstwie, handlu i usługach dla mieszkańców.",
    ],
    localContext:
      "Firmy z Golubia-Dobrzynia to głównie małe przedsiębiorstwa usługowe, handlowe i rolnicze.",
    whyHere:
      "W Golubiu-Dobrzyniu automatyzacja pozwala małym firmom obsłużyć więcej klientów bez nadgodzin.",
    industries: [
      ["Turystyka i wydarzenia", "Rezerwacje, grupy i pytania gości."],
      ["Przetwórstwo", "Zamówienia i dokumenty."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rezerwacje grup", "Zapytanie, oferta i zaliczka w jednym przepływie."],
      ["Zamówienia", "Zamówienia z maili i telefonów w rejestrze."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Opinie", "Prośba o opinię po wizycie."],
    ],
    faq: [
      ["Czy automatyzujecie obiekty turystyczne?", "Tak. Rezerwacje, grupy, zaliczki i odpowiedzi na pytania."],
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci czas na powtarzalną pracę."],
      ...q4("Golubia-Dobrzynia", "Golubia-Dobrzynia"),
    ],
    services: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "wabrzezno",
    name: "Wąbrzeźno",
    nameGenitive: "Wąbrzeźna",
    nameLocative: "Wąbrzeźnie",
    nearbyCitySlugs: ["golub-dobrzyn", "brodnica", "grudziadz", "torun", "rypin"],
    metaDescription:
      "Automatyzacja dla firm z Wąbrzeźna: przetwórstwo, produkcja, rolnictwo i handel. Zamówienia, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy wąbrzeskim firmom uporządkować zamówienia, faktury i dokumenty.",
    intro: [
      "Wąbrzeźno leży w ziemi chełmińskiej, wśród jezior i pól. Lokalna gospodarka to przetwórstwo spożywcze, produkcja, rolnictwo i handel.",
      "Miasto obsługuje okoliczne gminy jako ośrodek usług.",
    ],
    localContext:
      "Wąbrzeskie firmy obsługują rolnictwo i odbiorców z regionu, często z niewielkim biurem.",
    whyHere:
      "W Wąbrzeźnie automatyzacja porządkuje zamówienia i dokumenty dostaw w małych zespołach.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia od odbiorców", "Zamówienia z maili odczytane przez AI."],
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      ["Czy pomagacie firmom rolnym?", "Tak, w dokumentach, rozliczeniach i raportach."],
      ...q4("Wąbrzeźna", "Wąbrzeźna"),
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "rypin",
    name: "Rypin",
    nameGenitive: "Rypina",
    nameLocative: "Rypinie",
    nearbyCitySlugs: ["brodnica", "lipno", "golub-dobrzyn", "wabrzezno", "plock"],
    metaDescription:
      "Automatyzacja dla firm z Rypina: produkcja, przetwórstwo, rolnictwo i handel. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy rypińskim firmom przejąć powtarzalną pracę z zamówieniami, fakturami i dokumentami.",
    intro: [
      "Rypin jest ośrodkiem ziemi dobrzyńskiej, na wschodzie regionu. Działają tu zakłady produkcyjne i przetwórcze, firmy handlowe i rolnicze.",
      "Miasto obsługuje okoliczne gminy jako centrum handlu i usług.",
    ],
    localContext:
      "Rypińskie firmy obsługują odbiorców z kilku województw, często z niewielkim zespołem biurowym.",
    whyHere:
      "W Rypinie automatyzacja odciąża małe biura z przepisywania i pilnowania terminów.",
    industries: [
      ["Produkcja", "Zlecenia, zakupy i dokumenty."],
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
    faq: [
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na powtarzalną pracę."],
      ["Czy pomagacie firmom rolnym?", "Tak, w dokumentach, rozliczeniach i raportach."],
      ...q4("Rypina", "Rypina"),
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "lipno",
    name: "Lipno",
    nameGenitive: "Lipna",
    nameLocative: "Lipnie",
    nearbyCitySlugs: ["wloclawek", "rypin", "aleksandrow-kujawski", "plock", "torun"],
    metaDescription:
      "Automatyzacja dla firm z Lipna: produkcja, przetwórstwo, rolnictwo i handel. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Lipna uporządkować zamówienia, faktury i dokumenty.",
    intro: [
      "Lipno leży w ziemi dobrzyńskiej, niedaleko Włocławka. Działają tu zakłady produkcyjne i przetwórcze, firmy handlowe i rolnicze.",
      "Bliskość Włocławka i Torunia sprawia, że wiele firm ma tam klientów i dostawców.",
    ],
    localContext:
      "Lipnowskie firmy obsługują odbiorców z regionu i z Mazowsza, często w kilkuosobowym zespole.",
    whyHere:
      "W Lipnie automatyzacja pozwala obsłużyć więcej zamówień bez rozbudowy biura.",
    industries: [
      ["Produkcja", "Zlecenia i zakupy."],
      ["Przetwórstwo", "Zamówienia, partie i dokumenty."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia z maili", "Zamówienia odczytane przez AI i zapisane w rejestrze."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zamówień."],
      ["Przypomnienia o płatnościach", "Wysyłane automatycznie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według klientów i produktów."],
    ],
    faq: [
      ["Czy pracujecie z małymi firmami?", "Tak. W małym zespole każda zaoszczędzona godzina jest odczuwalna."],
      ["Czy pomagacie firmom rolnym?", "Tak, w dokumentach, rozliczeniach i raportach."],
      ...q4("Lipna", "Lipna"),
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "aleksandrow-kujawski",
    name: "Aleksandrów Kujawski",
    nameGenitive: "Aleksandrowa Kujawskiego",
    nameLocative: "Aleksandrowie Kujawskim",
    nearbyCitySlugs: ["torun", "wloclawek", "radziejow", "inowroclaw", "lipno"],
    metaDescription:
      "Automatyzacja dla firm z Aleksandrowa Kujawskiego: uzdrowiska, przetwórstwo, logistyka i usługi. Rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Aleksandrowa Kujawskiego i okolic Ciechocinka uporządkować rezerwacje, zamówienia i dokumenty.",
    intro: [
      "Aleksandrów Kujawski leży między Toruniem a Włocławkiem, przy autostradzie A1. W powiecie znajduje się Ciechocinek, jedno z najbardziej znanych uzdrowisk w Polsce, z tężniami i sanatoriami.",
      "W okolicy działają też zakłady przetwórcze, firmy transportowe i handlowe.",
    ],
    localContext:
      "Firmy z powiatu aleksandrowskiego obsługują kuracjuszy i turystów, a położenie przy A1 sprzyja transportowi i dystrybucji.",
    whyHere:
      "W Aleksandrowie Kujawskim automatyzacja porządkuje rezerwacje w obiektach uzdrowiskowych i dokumenty w transporcie.",
    industries: [
      ["Uzdrowiska i sanatoria", "Rezerwacje pobytów, zabiegi i pytania gości."],
      ["Transport przy A1", "Zlecenia, dokumenty i rozliczenia."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Harmonogram zabiegów", "Zabiegi przypisane do gości automatycznie."],
      ["Rezerwacja i zaliczka", "Potwierdzenie, link do płatności i przypomnienie."],
      ["Zlecenia transportowe", "Zlecenia z maili w systemie, statusy dla klientów."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy automatyzujecie sanatoria w Ciechocinku?", "Tak. Rezerwacje, zabiegi, przypomnienia i odpowiedzi na pytania gości."],
      ["Czy pracujecie z firmami transportowymi?", "Tak. Zlecenia, dokumenty i rozliczenia."],
      ...q4("Aleksandrowa Kujawskiego", "Aleksandrowa"),
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-logistyki", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "radziejow",
    name: "Radziejów",
    nameGenitive: "Radziejowa",
    nameLocative: "Radziejowie",
    nearbyCitySlugs: ["inowroclaw", "aleksandrow-kujawski", "wloclawek", "znin", "mogilno"],
    metaDescription:
      "Automatyzacja dla firm z Radziejowa: rolnictwo, przetwórstwo, handel środkami produkcji i usługi. Dostawy i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Radziejowa uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Radziejów leży w sercu Kujaw, na jednych z najżyźniejszych ziem w Polsce. Rolnictwo, uprawy i przetwórstwo tworzą lokalną gospodarkę.",
      "W mieście działają firmy handlowe i usługowe obsługujące gospodarstwa.",
    ],
    localContext:
      "Duże gospodarstwa z okolic Radziejowa prowadzą dokumentację podobną do przedsiębiorstw: umowy, dostawy, faktury i rozliczenia.",
    whyHere:
      "W Radziejowie automatyzacja porządkuje dokumenty i rozliczenia w firmach rolnych i handlowych.",
    industries: [
      ["Rolnictwo", "Umowy, dostawy i rozliczenia."],
      ["Przetwórstwo", "Dostawy surowca i partie."],
      ["Handel środkami produkcji", "Zamówienia od gospodarstw i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rejestr umów i dostaw", "Umowy z odbiorcami i dostawy w jednym miejscu."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do upraw lub działów."],
      ["Rozliczenia z odbiorcami", "Dostawy porównane z fakturami."],
      ["Terminy", "Przypomnienia o płatnościach i dokumentach."],
    ],
    faq: [
      ["Czy pracujecie z gospodarstwami?", "Tak, z większymi gospodarstwami i firmami rolnymi."],
      ["Czy automatyzacja działa z telefonu?", "Wiele kroków tak, np. zdjęcie dokumentu dostawy."],
      ...q4("Radziejowa", "Radziejowa"),
    ],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "mogilno",
    name: "Mogilno",
    nameGenitive: "Mogilna",
    nameLocative: "Mogilnie",
    nearbyCitySlugs: ["znin", "inowroclaw", "radziejow", "gniezno", "bydgoszcz"],
    metaDescription:
      "Automatyzacja dla firm z Mogilna: rolnictwo, przetwórstwo, produkcja i handel. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Mogilna przejąć powtarzalną pracę z zamówieniami, fakturami i dokumentami.",
    intro: [
      "Mogilno leży na pograniczu Kujaw i Wielkopolski, wśród jezior. Lokalna gospodarka to rolnictwo, przetwórstwo, produkcja i handel.",
      "Miasto słynie z benedyktyńskiego opactwa, a jeziora przyciągają turystów.",
    ],
    localContext:
      "Firmy z Mogilna obsługują klientów z Kujaw i Wielkopolski, często w kilkuosobowym zespole.",
    whyHere:
      "W Mogilnie automatyzacja odciąża małe biura z przepisywania zamówień i faktur.",
    industries: [
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na powtarzalną pracę."],
      ["Czy pomagacie firmom rolnym?", "Tak, w dokumentach, rozliczeniach i raportach."],
      ...q4("Mogilna", "Mogilna"),
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "znin",
    name: "Żnin",
    nameGenitive: "Żnina",
    nameLocative: "Żninie",
    nearbyCitySlugs: ["mogilno", "naklo-nad-notecia", "inowroclaw", "bydgoszcz", "gniezno"],
    metaDescription:
      "Automatyzacja dla firm z Żnina: przetwórstwo, rolnictwo, turystyka na Pałukach i usługi. Zamówienia, rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Żnina uporządkować zamówienia, rezerwacje i dokumenty.",
    intro: [
      "Żnin jest stolicą Pałuk. Okolica słynie z rolnictwa i przetwórstwa, a turystów przyciągają wąskotorówka i pobliski rezerwat archeologiczny w Biskupinie.",
      "W mieście działają firmy przetwórcze, handlowe i usługowe.",
    ],
    localContext:
      "Żnińskie firmy łączą obsługę rolnictwa z turystyką, która ma wyraźny sezon.",
    whyHere:
      "W Żninie automatyzacja porządkuje dokumenty dostaw w przetwórstwie i rezerwacje grup w turystyce.",
    industries: [
      ["Przetwórstwo i rolnictwo", "Dostawy, partie i rozliczenia."],
      ["Turystyka", "Rezerwacje grup i pytania gości."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rezerwacje grup", "Zapytanie, oferta i zaliczka w jednym przepływie."],
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Opinie", "Prośba o opinię po wizycie."],
    ],
    faq: [
      ["Czy automatyzujecie obiekty turystyczne na Pałukach?", "Tak. Rezerwacje grup, zaliczki i odpowiedzi na pytania."],
      ["Czy pracujecie z zakładami przetwórczymi?", "Tak. Dostawy, partie, dokumenty jakości i zamówienia."],
      ...q4("Żnina", "Żnina"),
    ],
    services: ["automatyzacja-w-obsludze-klienta", "automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
];
