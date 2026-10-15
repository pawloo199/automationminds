import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "podlaskie", regionCluster: "podlasie", updatedAt: "2026-10-15" } as const;

export const podlaskieRegion = region({
  slug: "podlaskie",
  intro: [
    "Podlasie jest mleczarskim zagłębiem Polski. Działają tu jedne z największych spółdzielni mleczarskich w kraju, a obok nich tysiące gospodarstw, przetwórnie mięsa i firmy obsługujące rolnictwo.",
    "Drugą silną gałęzią jest przemysł drzewny, meblarski i stolarki budowlanej, oparty na lasach regionu. Białystok rozwija się też jako ośrodek przemysłu maszynowego, usług dla biznesu i IT.",
    "Region graniczy z Litwą i Białorusią, a Suwałki, Augustów i Puszcza Białowieska przyciągają turystów. To oznacza handel transgraniczny, logistykę i sezonowy ruch w turystyce.",
    "Z firmami z Podlasia pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt.",
  ],
  industries: [
    ["Mleczarstwo i przetwórstwo spożywcze", "Dostawy surowca, partie, dokumenty jakości i zamówienia od sieci."],
    ["Meble, drewno i stolarka", "Wyceny, zamówienia, terminy produkcji i dostawy do klientów w kraju i za granicą."],
    ["Przemysł maszynowy w Białymstoku", "Zapytania ofertowe, dokumentacja techniczna, zakupy i reklamacje."],
    ["Logistyka przy granicy", "Zlecenia transportowe, dokumenty i odprawy."],
    ["Turystyka", "Rezerwacje i pytania gości w Augustowie, nad Wigrami i w Puszczy Białowieskiej."],
  ],
  faq: [
    ["Czy macie biuro w Białymstoku?", "Nie. Z firmami z Podlasia pracujemy zdalnie, a na warsztaty na miejscu przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy pracujecie z zakładami mleczarskimi i spożywczymi?", "Tak, w procesach wokół produkcji: dostawy, partie, dokumenty jakości, zamówienia od sieci i raporty."],
    ["Czy automatyzujecie producentów mebli i stolarki?", "Tak. Wyceny, zamówienia, terminy, dostawy i reklamacje."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const podlaskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "bialystok",
    name: "Białystok",
    nameGenitive: "Białegostoku",
    nameLocative: "Białymstoku",
    nearbyCitySlugs: ["sokolka", "monki", "bielsk-podlaski", "wysokie-mazowieckie", "lomza", "suwalki"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Białegostoku: przemysł maszynowy i spożywczy, meble, IT i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy białostockim zakładom, firmom usługowym i technologicznym przejąć powtarzalną pracę z dokumentami, zamówieniami i raportami.",
    intro: [
      "Białystok jest największym miastem północno-wschodniej Polski i stolicą Podlasia. Działają tu zakłady przemysłu maszynowego, spożywczego i meblarskiego, park naukowo-technologiczny, uczelnie i rosnąca grupa firm IT.",
      "Miasto jest też centrum handlu i usług dla całego regionu oraz punktem wyjścia dla firm współpracujących z Litwą i krajami bałtyckimi.",
    ],
    localContext:
      "Białostockie firmy łączą produkcję dla klientów w Polsce i za granicą z rosnącym sektorem usług, w którym liczy się szybka obsługa klienta i rozliczanie projektów.",
    whyHere:
      "W Białymstoku automatyzacja przyspiesza wyceny i zamówienia w produkcji, a w usługach porządkuje zgłoszenia, czas pracy i rozliczenia.",
    economy: {
      title: "Czym żyje białostocki biznes",
      paragraphs: [
        "Białystok ma silny przemysł maszynowy i spożywczy oraz zakłady meblarskie. Wokół nich działają dostawcy, firmy serwisowe i logistyczne.",
        "Park naukowo-technologiczny i uczelnie sprzyjają rozwojowi firm IT i usług dla biznesu, które obsługują klientów w całej Polsce i za granicą.",
        "Miasto jest centrum administracji, handlu i usług dla Podlasia oraz ważnym punktem na trasie do krajów bałtyckich.",
      ],
    },
    industries: [
      ["Przemysł maszynowy", "Zapytania ofertowe, dokumentacja techniczna, zakupy i reklamacje."],
      ["Przemysł spożywczy", "Zamówienia od sieci, partie i dokumenty jakości."],
      ["IT i usługi dla biznesu", "Zgłoszenia klientów, czas pracy i rozliczenia projektów."],
      ["Handel i dystrybucja", "Zamówienia, stany i należności."],
    ],
    processes: [
      ["Zapytanie ofertowe", "Dane z maila i rysunku w rejestrze, kalkulacja z podobnych zleceń."],
      ["Zamówienia od sieci", "Zamówienia z portali i maili przekazane do systemu bez przepisywania."],
      ["Obsługa zgłoszeń", "Zgłoszenia klientów z kategorią, priorytetem i terminem odpowiedzi."],
      ["Raport dla zarządu", "Sprzedaż, koszty i należności zebrane automatycznie."],
    ],
    example: {
      title: "Zapytanie ofertowe w białostockim zakładzie maszynowym przed i po automatyzacji",
      lead: "Przykład zakładu produkującego maszyny i podzespoły na zamówienie. Tak zmienia się obsługa jednego zapytania.",
      rows: [
        ["Przyjęcie zapytania", "Mail z rysunkiem przepisywany do arkusza przez handlowca.", "Dane z maila i rysunku w rejestrze zapytań, z listą braków."],
        ["Kalkulacja", "Technolog liczy od zera, gdy znajdzie czas.", "Podpowiedź z podobnych wyrobów, technolog liczy tylko nowe operacje."],
        ["Oferta", "Pisana ręcznie w edytorze.", "Szkic z szablonu z warunkami handlowymi klienta."],
        ["Kontakt po ofercie", "Zależy od pamięci handlowca.", "Przypomnienie o kontakcie i status oferty z powodem przegranej."],
      ],
    },
    faq: [
      ["Czy pracujecie z zakładami z Białegostoku?", "Tak, w procesach wokół produkcji: wyceny, zamówienia, zakupy, reklamacje i raporty."],
      ["Czy pomagacie białostockim firmom IT?", "Tak. Zgłoszenia klientów, czas pracy, rozliczenia projektów i onboarding pracowników."],
      ["Czy pracujecie zdalnie?", "Tak, a w razie potrzeby przyjeżdżamy na warsztat."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni od konsultacji do działającego procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "suwalki",
    name: "Suwałki",
    nameGenitive: "Suwałk",
    nameLocative: "Suwałkach",
    nearbyCitySlugs: ["augustow", "sejny", "grajewo", "bialystok", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Suwałk: meble i drewno, produkcja w strefie ekonomicznej, logistyka przy granicy z Litwą i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy suwalskim zakładom, firmom logistycznym i turystycznym uporządkować zamówienia, dokumenty i obsługę klientów.",
    intro: [
      "Suwałki są drugim co do wielkości miastem Podlasia i ośrodkiem strefy ekonomicznej, w której działają zakłady meblarskie, drzewne i produkcyjne.",
      "Miasto leży blisko granicy z Litwą, na trasie Via Baltica, a okolice z Wigierskim Parkiem Narodowym i Suwalskim Parkiem Krajobrazowym przyciągają turystów.",
    ],
    localContext:
      "Suwalskie zakłady często produkują na eksport, a firmy transportowe obsługują ruch towarów do krajów bałtyckich.",
    whyHere:
      "W Suwałkach automatyzacja przyspiesza obsługę zamówień eksportowych i dokumentów przewozowych, a w turystyce porządkuje rezerwacje.",
    economy: {
      title: "Czym żyje suwalski biznes",
      paragraphs: [
        "Strefa ekonomiczna przyciągnęła do Suwałk zakłady meblarskie, drzewne i produkcyjne, które sprzedają w dużej części za granicę.",
        "Położenie przy Via Baltica i granicy z Litwą sprzyja logistyce, a jeziora i parki krajobrazowe rozwijają turystykę.",
      ],
    },
    industries: [
      ["Meble i drewno", "Zamówienia eksportowe, terminy produkcji i dostawy."],
      ["Produkcja w strefie ekonomicznej", "Zamówienia, zakupy i dokumentacja jakości."],
      ["Logistyka przy Via Baltica", "Zlecenia, dokumenty przewozowe i statusy."],
      ["Turystyka", "Rezerwacje, zaliczki i pytania gości."],
    ],
    processes: [
      ["Zamówienia eksportowe", "Zamówienia w językach klientów odczytane przez AI."],
      ["Dokumenty przewozowe", "Dane z dokumentów przypisane do zleceń automatycznie."],
      ["Rezerwacje gości", "Potwierdzenie, zaliczka i przypomnienie przed przyjazdem."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy pracujecie z zakładami meblarskimi z Suwałk?", "Tak. Zamówienia, terminy produkcji, dostawy i reklamacje."],
      ["Czy obsłużycie klientów z Litwy i Niemiec?", "Tak, AI odczytuje dokumenty i przygotowuje odpowiedzi w językach klientów."],
      ["Czy automatyzujecie obiekty turystyczne nad Wigrami?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "automatyzacja-w-obsludze-klienta"],
  }),
  town({
    ...base,
    slug: "lomza",
    name: "Łomża",
    nameGenitive: "Łomży",
    nameLocative: "Łomży",
    nearbyCitySlugs: ["zambrow", "kolno", "wysokie-mazowieckie", "bialystok", "warszawa"],
    metaDescription:
      "Automatyzacja dla firm z Łomży: przemysł spożywczy i browarniczy, produkcja, handel i usługi. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy łomżyńskim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumentację.",
    intro: [
      "Łomża jest jednym z największych miast Podlasia, położonym nad Narwią. Miasto słynie z tradycji browarniczej, a w okolicy działają zakłady spożywcze, mleczarskie i produkcyjne.",
      "Łomża jest też ośrodkiem handlu, usług i edukacji dla zachodniej części regionu.",
    ],
    localContext:
      "Łomżyńskie zakłady sprzedają do sieci handlowych i hurtowni w całej Polsce, z wymaganiami dotyczącymi zamówień, partii i terminów dostaw.",
    whyHere:
      "W Łomży automatyzacja porządkuje zamówienia od sieci i dokumenty jakości, a biuro nie przepisuje danych z maili i portali.",
    industries: [
      ["Przemysł spożywczy i browarniczy", "Zamówienia od sieci, partie, dokumenty jakości."],
      ["Mleczarstwo", "Dostawy surowca, rozliczenia z dostawcami i zamówienia."],
      ["Produkcja", "Zlecenia, zakupy i reklamacje."],
      ["Handel i usługi", "Zamówienia, faktury i należności."],
    ],
    processes: [
      ["Zamówienia od sieci", "Zamówienia z portali i maili przekazane do systemu."],
      ["Reklamacje", "Rejestr reklamacji z danymi partii i terminami."],
      ["Dostawy i awizacje", "Terminy dostaw potwierdzane automatycznie."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców i produktów, automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi z Łomży?", "Tak. Zamówienia, partie, dokumenty jakości, reklamacje i raporty."],
      ["Czy połączycie portale sieci handlowych z naszym systemem?", "Tak, jeśli portal pozwala pobrać zamówienia albo przysyła je mailem."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "augustow",
    name: "Augustów",
    nameGenitive: "Augustowa",
    nameLocative: "Augustowie",
    nearbyCitySlugs: ["suwalki", "sejny", "grajewo", "bialystok", "olsztyn"],
    metaDescription:
      "Automatyzacja dla hoteli, pensjonatów i firm z Augustowa: rezerwacje, pytania gości, sezon i rozliczenia. Konsultacja 30 min.",
    heroLead:
      "Pomagamy augustowskim hotelom, pensjonatom i firmom turystycznym obsłużyć sezon bez przeciążenia recepcji.",
    intro: [
      "Augustów jest jednym z najważniejszych ośrodków turystycznych północno-wschodniej Polski. Kanał Augustowski, jeziora i Puszcza Augustowska przyciągają turystów, żeglarzy i kajakarzy.",
      "Poza turystyką działają tu firmy drzewne, produkcyjne i usługowe obsługujące powiat.",
    ],
    localContext:
      "Augustowskie obiekty w sezonie obsługują setki rezerwacji i pytań, a poza sezonem pracują z małym zespołem.",
    whyHere:
      "W Augustowie automatyzacja przejmuje powtarzalne odpowiedzi i rezerwacje w sezonie, a zespół zajmuje się gośćmi.",
    industries: [
      ["Hotele i pensjonaty", "Rezerwacje z wielu portali, zaliczki i pytania gości."],
      ["Wypożyczalnie i rejsy", "Rezerwacje sprzętu, rejsów i spływów."],
      ["Przemysł drzewny", "Zamówienia, dostawy i faktury."],
      ["Gastronomia", "Rezerwacje grup i zamówienia."],
    ],
    processes: [
      ["Jeden kalendarz rezerwacji", "Rezerwacje z kilku portali bez podwójnych rezerwacji."],
      ["Pytania gości", "Asystent AI odpowiada o dojazd, ceny i atrakcje na podstawie waszej oferty."],
      ["Zaliczki i przypomnienia", "Link do płatności i przypomnienie przed przyjazdem."],
      ["Opinie po pobycie", "Prośba o opinię wysyłana automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie obiekty turystyczne w Augustowie?", "Tak. Rezerwacje, zaliczki, przypomnienia i odpowiedzi na pytania gości."],
      ["Kiedy zacząć przygotowania do sezonu?", "Najlepiej zimą lub wczesną wiosną, żeby wszystko działało przed majówką."],
      ["Czy asystent odpowie gościom z zagranicy?", "Tak, w ich języku, na podstawie waszych informacji."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "sejny",
    name: "Sejny",
    nameGenitive: "Sejn",
    nameLocative: "Sejnach",
    nearbyCitySlugs: ["suwalki", "augustow", "grajewo", "bialystok", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Sejn: turystyka, rolnictwo, handel z Litwą i usługi. Rezerwacje, zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Sejn uporządkować rezerwacje, zamówienia i dokumenty, także w kontaktach z partnerami z Litwy.",
    intro: [
      "Sejny leżą przy granicy z Litwą, w regionie zamieszkanym także przez mniejszość litewską. Lokalna gospodarka to rolnictwo, turystyka, handel i małe firmy usługowe.",
      "Jeziora i lasy Pojezierza Sejneńskiego przyciągają turystów szukających spokoju i przyrody.",
    ],
    localContext:
      "Firmy z Sejn często współpracują z partnerami z Litwy, a obiekty turystyczne obsługują gości z Polski i zagranicy.",
    whyHere:
      "W Sejnach automatyzacja pozwala małym firmom obsłużyć rezerwacje i dokumenty w kilku językach bez dodatkowych osób.",
    industries: [
      ["Turystyka i agroturystyka", "Rezerwacje, zaliczki i pytania gości."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel z Litwą", "Zamówienia i faktury w dwóch językach."],
      ["Usługi lokalne", "Terminy i płatności."],
    ],
    processes: [
      ["Rezerwacje", "Rezerwacje z kilku portali w jednym kalendarzu."],
      ["Odpowiedzi dla gości", "Szkice odpowiedzi po polsku, litewsku lub angielsku."],
      ["Faktury", "Faktura po realizacji i przypomnienie o płatności."],
      ["Dokumenty dostaw", "Dokumenty przypisane do zamówień."],
    ],
    faq: [
      ["Czy obsłużycie korespondencję po litewsku?", "Tak. AI przygotowuje szkice odpowiedzi i odczytuje dokumenty po litewsku."],
      ["Czy automatyzujecie agroturystyki?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "grajewo",
    name: "Grajewo",
    nameGenitive: "Grajewa",
    nameLocative: "Grajewie",
    nearbyCitySlugs: ["augustow", "kolno", "suwalki", "lomza", "bialystok"],
    metaDescription:
      "Automatyzacja dla firm z Grajewa: mleczarstwo, przetwórstwo, przemysł drzewny i usługi. Dostawy, zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy grajewskim zakładom i ich dostawcom uporządkować dostawy, zamówienia i dokumentację.",
    intro: [
      "Grajewo jest ważnym ośrodkiem przemysłu mleczarskiego. Działa tu jedna z największych spółdzielni mleczarskich w Polsce, a wokół niej gospodarstwa, przewoźnicy i firmy serwisowe.",
      "W mieście działają też zakłady drzewne i produkcyjne oraz firmy usługowe obsługujące powiat.",
    ],
    localContext:
      "Firmy z Grajewa pracują w rytmie dużego zakładu spożywczego: dostawy surowca, transport, serwis i dokumentacja jakości.",
    whyHere:
      "W Grajewie automatyzacja porządkuje dokumenty dostaw, zlecenia serwisowe i rozliczenia u dostawców i podwykonawców przemysłu.",
    industries: [
      ["Mleczarstwo", "Dostawy surowca, rozliczenia i dokumenty jakości."],
      ["Transport", "Trasy, zlecenia i rozliczenia."],
      ["Przemysł drzewny", "Zamówienia, dostawy i faktury."],
      ["Serwis i usługi techniczne", "Zlecenia, protokoły i rozliczenia."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy z dokumentami i rozliczeniem w jednym miejscu."],
      ["Protokoły serwisowe", "Formularz na telefonie zamiast notatek."],
      ["Rozliczenia przewozów", "Kursy i faktury dopasowane automatycznie."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy pracujecie z firmami obsługującymi przemysł mleczarski?", "Tak. Dostawy, transport, serwis i dokumentacja."],
      ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy te, których używacie."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "kolno",
    name: "Kolno",
    nameGenitive: "Kolna",
    nameLocative: "Kolnie",
    nearbyCitySlugs: ["lomza", "grajewo", "zambrow", "bialystok", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Kolna: rolnictwo, przetwórstwo, handel i usługi. Dostawy, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Kolna uporządkować dostawy, faktury i dokumenty.",
    intro: [
      "Kolno leży na zachodnim skraju Podlasia, na pograniczu z Mazurami. Lokalna gospodarka opiera się na rolnictwie, hodowli bydła mlecznego, przetwórstwie i handlu.",
      "Wiele firm z okolicy obsługuje gospodarstwa: sprzedaje paszę, nawozy i maszyny, prowadzi serwis i transport.",
    ],
    localContext:
      "Firmy z Kolna obsługują setki gospodarstw, z zamówieniami przez telefon, dostawami i fakturami.",
    whyHere:
      "W Kolnie automatyzacja porządkuje zamówienia od gospodarstw i rozliczenia, a mały zespół nie przepisuje danych.",
    industries: [
      ["Rolnictwo i hodowla", "Dostawy, umowy i rozliczenia."],
      ["Handel środkami produkcji", "Zamówienia od gospodarstw, dostawy i faktury."],
      ["Serwis maszyn rolniczych", "Zgłoszenia, wizyty i części."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia od gospodarstw", "Zamówienia z telefonów i SMS w jednym rejestrze."],
      ["Zgłoszenia serwisowe", "Zgłoszenie z terminem wizyty i historią maszyny."],
      ["Faktury i płatności", "Faktura po dostawie, przypomnienie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według klientów i produktów."],
    ],
    faq: [
      ["Czy pracujecie z firmami obsługującymi rolnictwo?", "Tak. Zamówienia, dostawy, serwis i rozliczenia."],
      ["Czy automatyzacja działa z telefonu?", "Wiele kroków tak, np. zgłoszenia i zdjęcia dokumentów."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "sokolka",
    name: "Sokółka",
    nameGenitive: "Sokółki",
    nameLocative: "Sokółce",
    nearbyCitySlugs: ["bialystok", "monki", "augustow", "hajnowka", "suwalki"],
    metaDescription:
      "Automatyzacja dla firm z Sokółki: stolarka okienna i drzwiowa, produkcja, handel z Białorusią i Litwą, usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sokólskim producentom stolarki i firmom handlowym uporządkować wyceny, zamówienia i dostawy.",
    intro: [
      "Sokółka ma tradycję produkcji stolarki okiennej i drzwiowej, a zakłady z miasta sprzedają swoje wyroby w całej Polsce i za granicą.",
      "Miasto leży blisko granicy z Białorusią, a w okolicy działają też firmy handlowe, transportowe i rolnicze.",
    ],
    localContext:
      "Producenci stolarki z Sokółki obsługują sieci dystrybutorów i montażystów, z wycenami na wymiar, terminami produkcji i reklamacjami.",
    whyHere:
      "W Sokółce automatyzacja przyspiesza wyceny i potwierdzenia zamówień od dystrybutorów, a reklamacje mają jasne terminy.",
    industries: [
      ["Stolarka okienna i drzwiowa", "Wyceny na wymiar, zamówienia, terminy i reklamacje."],
      ["Produkcja", "Zlecenia, zakupy i dokumentacja."],
      ["Handel i transport", "Zamówienia, dostawy i dokumenty."],
      ["Usługi", "Zapytania i terminy."],
    ],
    processes: [
      ["Zamówienia od dystrybutorów", "Zamówienia z wymiarami odczytane przez AI i sprawdzone."],
      ["Potwierdzenie terminu", "Termin produkcji przekazany dystrybutorowi automatycznie."],
      ["Reklamacje", "Zgłoszenie ze zdjęciami, terminem i historią zamówienia."],
      ["Trasy dostaw", "Dostawy zgrupowane według tras i klientów."],
    ],
    faq: [
      ["Czy pracujecie z producentami okien i drzwi?", "Tak. Zamówienia od dystrybutorów, terminy, dostawy i reklamacje."],
      ["Czy AI odczyta zamówienia z wymiarami?", "Tak, z maili, PDF i arkuszy, z kontrolą przez pracownika."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-logistyki"],
  }),
  town({
    ...base,
    slug: "monki",
    name: "Mońki",
    nameGenitive: "Moniek",
    nameLocative: "Mońkach",
    nearbyCitySlugs: ["bialystok", "sokolka", "grajewo", "lomza", "wysokie-mazowieckie"],
    metaDescription:
      "Automatyzacja dla firm z Moniek: rolnictwo, przetwórstwo, handel i usługi. Dostawy, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Moniek przejąć powtarzalną pracę z dostawami, fakturami i dokumentami.",
    intro: [
      "Mońki leżą między Białymstokiem a Biebrzańskim Parkiem Narodowym. Lokalna gospodarka opiera się na rolnictwie, hodowli bydła mlecznego, przetwórstwie i handlu.",
      "Bliskość Biebrzy przyciąga miłośników przyrody i ornitologów, co wspiera agroturystykę.",
    ],
    localContext:
      "Firmy z Moniek to w dużej mierze małe przedsiębiorstwa i gospodarstwa, które prowadzą dokumentację dostaw i rozliczenia z odbiorcami.",
    whyHere:
      "W Mońkach automatyzacja odciąża małe zespoły z przepisywania dokumentów i pilnowania terminów płatności.",
    industries: [
      ["Rolnictwo i hodowla", "Dostawy, umowy i rozliczenia."],
      ["Przetwórstwo", "Zamówienia, partie i dokumenty."],
      ["Handel", "Zamówienia i faktury."],
      ["Agroturystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
      ["Rezerwacje gości", "Potwierdzenie i zaliczka bez ręcznych maili."],
      ["Terminy płatności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z gospodarstwami?", "Tak, z większymi gospodarstwami i firmami rolnymi."],
      ["Czy automatyzujecie agroturystyki nad Biebrzą?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "bielsk-podlaski",
    name: "Bielsk Podlaski",
    nameGenitive: "Bielska Podlaskiego",
    nameLocative: "Bielsku Podlaskim",
    nearbyCitySlugs: ["bialystok", "hajnowka", "siemiatycze", "wysokie-mazowieckie", "biala-podlaska"],
    metaDescription:
      "Automatyzacja dla firm z Bielska Podlaskiego: przetwórstwo spożywcze, drewno, rolnictwo i handel. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy bielskim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumentację.",
    intro: [
      "Bielsk Podlaski jest ośrodkiem południowej części Podlasia, regionu wielokulturowego, z tradycjami prawosławnymi i katolickimi. Działają tu zakłady spożywcze, drzewne i produkcyjne.",
      "Miasto obsługuje okoliczne gminy jako centrum handlu i usług.",
    ],
    localContext:
      "Bielskie zakłady sprzedają do hurtowni i sieci handlowych, a firmy usługowe obsługują rolnictwo i mieszkańców powiatu.",
    whyHere:
      "W Bielsku Podlaskim automatyzacja przyspiesza obsługę zamówień i dokumentów dostaw.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty jakości."],
      ["Przemysł drzewny", "Zamówienia, dostawy i faktury."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel i usługi", "Zamówienia i należności."],
    ],
    processes: [
      ["Zamówienia od odbiorców", "Zamówienia z maili odczytane przez AI."],
      ["Dokumenty jakości", "Dokumenty przypisane do partii."],
      ["Dostawy i faktury", "Faktura po potwierdzeniu dostawy."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy te, których używacie."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "hajnowka",
    name: "Hajnówka",
    nameGenitive: "Hajnówki",
    nameLocative: "Hajnówce",
    nearbyCitySlugs: ["bielsk-podlaski", "bialystok", "sokolka", "siemiatycze", "biala-podlaska"],
    metaDescription:
      "Automatyzacja dla firm z Hajnówki: przemysł drzewny, turystyka w Puszczy Białowieskiej i usługi. Zamówienia i rezerwacje bez przepisywania.",
    heroLead:
      "Pomagamy hajnowskim firmom drzewnym i turystycznym uporządkować zamówienia, rezerwacje i dokumenty.",
    intro: [
      "Hajnówka leży na skraju Puszczy Białowieskiej i ma długą tradycję przemysłu drzewnego. Działają tu zakłady przetwórstwa drewna, firmy handlowe i usługowe.",
      "Puszcza przyciąga turystów z całego świata, więc turystyka i usługi dla gości są ważną częścią lokalnej gospodarki.",
    ],
    localContext:
      "Hajnowskie obiekty turystyczne obsługują gości z Polski i zagranicy, a zakłady drzewne sprzedają w kraju i za granicą.",
    whyHere:
      "W Hajnówce automatyzacja porządkuje rezerwacje i pytania gości w kilku językach, a w produkcji zamówienia i dostawy.",
    industries: [
      ["Przemysł drzewny", "Zamówienia, dostawy i dokumenty."],
      ["Turystyka i noclegi", "Rezerwacje, wycieczki z przewodnikiem i pytania gości."],
      ["Gastronomia", "Rezerwacje grup i zamówienia."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rezerwacje wycieczek", "Rezerwacja, płatność i przypomnienie dla grup."],
      ["Pytania gości", "Asystent AI odpowiada o dojazd, ceny i terminy w kilku językach."],
      ["Zamówienia drewna", "Zamówienia z maili odczytane i zapisane w rejestrze."],
      ["Faktury", "Faktura po realizacji i przypomnienie o płatności."],
    ],
    faq: [
      ["Czy automatyzujecie obiekty turystyczne przy Puszczy Białowieskiej?", "Tak. Rezerwacje, wycieczki, zaliczki i odpowiedzi na pytania gości."],
      ["Czy asystent odpowie gościom z zagranicy?", "Tak, w ich języku, na podstawie waszych informacji."],
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Zamówienia, dostawy i dokumenty."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "wysokie-mazowieckie",
    name: "Wysokie Mazowieckie",
    nameGenitive: "Wysokiego Mazowieckiego",
    nameLocative: "Wysokiem Mazowieckiem",
    nearbyCitySlugs: ["zambrow", "lomza", "bialystok", "bielsk-podlaski", "siedlce"],
    metaDescription:
      "Automatyzacja dla firm z Wysokiego Mazowieckiego: mleczarstwo, przetwórstwo, transport i usługi. Dostawy i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Wysokiego Mazowieckiego, które pracują z przemysłem mleczarskim, uporządkować dostawy, transport i dokumenty.",
    intro: [
      "Wysokie Mazowieckie jest jednym z najważniejszych ośrodków mleczarstwa w Polsce. Działa tu jedna z największych spółdzielni mleczarskich w Europie, a powiat ma bardzo dużą liczbę gospodarstw hodujących bydło mleczne.",
      "Wokół przemysłu mleczarskiego działają przewoźnicy, serwisy, dostawcy pasz i firmy obsługujące gospodarstwa.",
    ],
    localContext:
      "Firmy z Wysokiego Mazowieckiego obsługują gospodarstwa i przemysł w rytmie codziennych odbiorów i dostaw.",
    whyHere:
      "W Wysokiem Mazowieckiem automatyzacja porządkuje zlecenia, trasy i rozliczenia, a dokumenty nie są przepisywane ręcznie.",
    industries: [
      ["Mleczarstwo", "Dostawy surowca, rozliczenia i dokumenty jakości."],
      ["Transport i logistyka", "Trasy, zlecenia i rozliczenia."],
      ["Handel paszami i środkami produkcji", "Zamówienia od gospodarstw i faktury."],
      ["Serwis", "Zgłoszenia, wizyty i części."],
    ],
    processes: [
      ["Zamówienia od gospodarstw", "Zamówienia z telefonów w jednym rejestrze."],
      ["Rozliczenia przewozów", "Kursy i faktury dopasowane automatycznie."],
      ["Zgłoszenia serwisowe", "Zgłoszenie z terminem wizyty i historią urządzenia."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy pracujecie z firmami obsługującymi mleczarstwo?", "Tak. Transport, serwis, dostawy i rozliczenia."],
      ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy te, których używacie."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "zambrow",
    name: "Zambrów",
    nameGenitive: "Zambrowa",
    nameLocative: "Zambrowie",
    nearbyCitySlugs: ["lomza", "wysokie-mazowieckie", "kolno", "bialystok", "warszawa"],
    metaDescription:
      "Automatyzacja dla firm z Zambrowa: przetwórstwo spożywcze, logistyka przy S8, produkcja i usługi. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy zambrowskim zakładom i firmom transportowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Zambrów leży przy drodze S8 łączącej Warszawę z Białymstokiem. Działają tu zakłady spożywcze i produkcyjne, a dobre połączenie drogowe przyciąga firmy transportowe i logistyczne.",
      "Miasto ma tradycję przemysłu włókienniczego, a dziś jest centrum handlu i usług dla powiatu.",
    ],
    localContext:
      "Zambrowskie firmy obsługują klientów w Warszawie i w całym kraju, więc liczy się szybka obsługa zamówień i dostaw.",
    whyHere:
      "W Zambrowie automatyzacja przyspiesza zamówienia i dokumenty przewozowe, a handlowcy znają status dostawy bez telefonu.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty jakości."],
      ["Transport i logistyka przy S8", "Zlecenia, trasy i rozliczenia."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel i usługi", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zlecenia transportowe", "Zlecenia z maili w systemie, statusy dla klientów."],
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Rozliczenia z przewoźnikami", "Faktury kosztowe dopasowane do zleceń."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy automatyzujecie firmy transportowe z Zambrowa?", "Tak. Zlecenia, dokumenty, statusy i rozliczenia."],
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "siemiatycze",
    name: "Siemiatycze",
    nameGenitive: "Siemiatycz",
    nameLocative: "Siemiatyczach",
    nearbyCitySlugs: ["bielsk-podlaski", "hajnowka", "biala-podlaska", "siedlce", "bialystok"],
    metaDescription:
      "Automatyzacja dla firm z Siemiatycz: przetwórstwo spożywcze, rolnictwo, handel i usługi. Dostawy, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Siemiatycz uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Siemiatycze leżą na południu Podlasia, nad Bugiem. Lokalna gospodarka opiera się na przetwórstwie spożywczym, rolnictwie i handlu.",
      "Dolina Bugu przyciąga turystów, a w okolicy znajduje się Grabarka, ważne miejsce pielgrzymkowe.",
    ],
    localContext:
      "Firmy z Siemiatycz sprzedają produkty spożywcze w całej Polsce, a gospodarstwa współpracują z przetwórniami.",
    whyHere:
      "W Siemiatyczach automatyzacja porządkuje zamówienia i dokumenty dostaw w małych i średnich firmach.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty jakości."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Zamówienia od odbiorców", "Zamówienia z maili w jednym rejestrze."],
      ["Dokumenty jakości", "Dokumenty przypisane do partii."],
      ["Faktury i płatności", "Faktura po dostawie, przypomnienie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na powtarzalną pracę."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
];
