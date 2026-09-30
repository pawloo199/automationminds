import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "pomorskie", regionCluster: "pomorskie" } as const;

export const pomorskieRegion = region({
  slug: "pomorskie",
  intro: [
    "Pomorze żyje z morza. Porty w Gdańsku i Gdyni należą do największych na Bałtyku, a wokół nich działają spedytorzy, agencje celne, stocznie, firmy offshore i centra logistyczne. Trójmiasto jest też jednym z największych w Polsce ośrodków usług biznesowych i IT.",
    "Poza Trójmiastem region ma silne ośrodki przemysłowe: farmację w Starogardzie Gdańskim, elektronikę w Tczewie, papiernictwo w Kwidzynie, stolarkę okienną w Bytowie i strefę ekonomiczną w Słupsku. Kaszuby, Żuławy i Kociewie to rolnictwo, przetwórstwo i turystyka.",
    "Wybrzeże i pojezierza przyciągają turystów, więc hotele, pensjonaty i firmy turystyczne w sezonie letnim obsługują wielokrotnie więcej gości niż zimą.",
    "Z firmami z Pomorza pracujemy zdalnie. Nasza siedziba jest we Wrocławiu, a na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt.",
  ],
  industries: [
    ["Porty, spedycja i logistyka", "Zlecenia, dokumenty celne i przewozowe, awizacje i statusy kontenerów w Trójmieście."],
    ["Usługi biznesowe i IT", "Obieg zgłoszeń, onboarding i raporty dla klientów w centrach usług Gdańska i Gdyni."],
    ["Przemysł i produkcja", "Zlecenia, dokumentacja jakości i raporty w zakładach Tczewa, Starogardu, Kwidzyna i Słupska."],
    ["Turystyka nadmorska", "Rezerwacje, pytania gości i płatności w hotelach i pensjonatach na wybrzeżu i Kaszubach."],
    ["Przetwórstwo spożywcze i rybne", "Dostawy surowca, partie i dokumenty jakości w zakładach na Żuławach i wybrzeżu."],
  ],
  faq: [
    ["Czy macie biuro w Trójmieście?", "Nie. Nasza siedziba jest we Wrocławiu, a z firmami z Pomorza pracujemy zdalnie. Gdy warsztat na miejscu przyspiesza projekt, przyjeżdżamy."],
    ["Czy pracujecie z firmami spedycyjnymi z Gdańska i Gdyni?", "Tak. Automatyzujemy zlecenia, dokumenty przewozowe i celne, statusy dla klientów i rozliczenia z przewoźnikami."],
    ["Czy automatyzujecie hotele i pensjonaty nad morzem?", "Tak. Rezerwacje z wielu portali, pytania gości w kilku językach, zaliczki i przypomnienia to częste wdrożenia przed sezonem."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const pomorskieCities: CityPageContent[] = [
  town({
    ...base,
    regionCluster: "trojmiasto",
    slug: "gdansk",
    name: "Gdańsk",
    nameGenitive: "Gdańska",
    nameLocative: "Gdańsku",
    nearbyCitySlugs: ["gdynia", "sopot", "pruszcz-gdanski", "wejherowo", "tczew", "kartuzy"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Gdańska: spedycja i logistyka portowa, IT, centra usług, produkcja i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gdańskim spedytorom, firmom technologicznym i usługowym przejąć powtarzalną pracę z dokumentami, zleceniami i zgłoszeniami. Zespół zajmuje się klientami, a nie przepisywaniem.",
    intro: [
      "Gdańsk jest największym miastem Pomorza i jednym z najważniejszych ośrodków gospodarczych nad Bałtykiem. Port z głębokowodnym terminalem kontenerowym, spedytorzy, agencje celne, stocznie i firmy offshore działają tu obok centrów usług biznesowych, firm IT i gamingowych.",
      "Wspólny mianownik gdańskich firm to duża liczba dokumentów, zleceń i klientów, często zagranicznych. Tam, gdzie zespół codziennie przepisuje dane między mailem, arkuszem i systemem, automatyzacja i AI dają najszybszy efekt.",
    ],
    localContext:
      "Gdańskie firmy spedycyjne i logistyczne obsługują klientów z całego świata, w kilku językach i strefach czasowych. Każda przesyłka to dziesiątki maili, dokumentów i aktualizacji statusu.",
    whyHere:
      "W Gdańsku automatyzacja zdejmuje z zespołu przepisywanie danych z dokumentów przewozowych, statusy dla klientów i rozliczenia. Ludzie zajmują się wyjątkami i relacjami.",
    economy: {
      title: "Czym żyje gdański biznes",
      paragraphs: [
        "Port Gdańsk jest jednym z największych portów kontenerowych na Bałtyku. Wokół niego działają setki firm: spedytorzy, agencje celne, przewoźnicy, magazyny i firmy obsługujące statki.",
        "Stocznie i firmy związane z energetyką morską rozwijają się razem z inwestycjami w morskie farmy wiatrowe. To branże z bogatą dokumentacją techniczną i wieloma podwykonawcami.",
        "Trójmiasto jest też jednym z największych w Polsce skupisk centrów usług biznesowych, firm IT i gamingowych, a turystyka w Gdańsku przyciąga gości przez cały rok.",
      ],
    },
    industries: [
      ["Spedycja i agencje celne", "Zlecenia, dokumenty przewozowe i celne, statusy kontenerów i rozliczenia z przewoźnikami."],
      ["Stocznie i offshore", "Dokumentacja techniczna, harmonogramy i rozliczenia podwykonawców przy projektach morskich."],
      ["IT, gaming i centra usług", "Obieg zgłoszeń, onboarding, rozliczenia projektów i raporty dla klientów."],
      ["Hotele i turystyka", "Rezerwacje z wielu portali, pytania gości w kilku językach i płatności."],
    ],
    processes: [
      ["Dokumenty przewozowe", "AI odczytuje konosamenty, faktury i listy pakunkowe i przenosi dane do systemu."],
      ["Status przesyłki", "Klient dostaje informację o etapie przesyłki bez pisania do spedytora."],
      ["Rozliczenia z przewoźnikami", "Faktury kosztowe dopasowywane do zleceń, rozbieżności oznaczane do sprawdzenia."],
      ["Onboarding w firmie IT", "Umowy, dostępy, sprzęt i szkolenia uruchamiane z jednej listy zadań."],
    ],
    example: {
      title: "Zlecenie w gdańskiej firmie spedycyjnej przed i po automatyzacji",
      lead: "Przykład spedytora obsługującego import kontenerowy przez port w Gdańsku. Tak zmienia się obsługa jednego zlecenia.",
      rows: [
        ["Przyjęcie zlecenia", "Mail od klienta z dokumentami, spedytor przepisuje dane do systemu.", "AI odczytuje dokumenty z maila i zakłada zlecenie do sprawdzenia."],
        ["Dokumenty do odprawy", "Kompletowane ręcznie z kilku maili i załączników.", "Lista brakujących dokumentów wysyłana klientowi automatycznie."],
        ["Status dla klienta", "Klient dzwoni i pisze z pytaniem, gdzie jest kontener.", "Powiadomienia o kolejnych etapach wysyłane automatycznie."],
        ["Faktura kosztowa od przewoźnika", "Ręczne dopasowanie do zlecenia i sprawdzanie kwot.", "Faktura dopasowana do zlecenia, rozbieżności oznaczone."],
        ["Refaktura dla klienta", "Wystawiana po zebraniu wszystkich kosztów, często z opóźnieniem.", "Tworzona automatycznie po zamknięciu kosztów zlecenia."],
      ],
    },
    faq: [
      ["Czy macie biuro w Gdańsku?", "Nie. Nasza siedziba jest we Wrocławiu. Z firmami z Gdańska pracujemy zdalnie, a gdy warsztat na miejscu przyspiesza projekt, przyjeżdżamy."],
      ["Czy automatyzujecie firmy spedycyjne i agencje celne z Gdańska?", "Tak. Odczyt dokumentów przewozowych przez AI, statusy dla klientów, rozliczenia z przewoźnikami i refaktury to typowy zakres."],
      ["Czy AI odczyta dokumenty po angielsku i w innych językach?", "Tak. AI odczytuje konosamenty, faktury i listy pakunkowe w wielu językach, a człowiek zatwierdza tylko wyjątki."],
      ["Czy pracujecie z gdańskimi firmami IT i centrami usług?", "Tak. Automatyzujemy obieg zgłoszeń, onboarding pracowników, rozliczenia projektów i raporty dla klientów."],
      ["Czy automatyzujecie hotele i apartamenty w Gdańsku?", "Tak. Łączymy portale rezerwacyjne, komunikację z gośćmi, zameldowania i grafik sprzątania."],
      ["Czy firma z Gdańska pozna koszt przed rozpoczęciem prac?", "Tak. Z każdą firmą z Gdańska zaczynamy od wyceny pierwszego etapu, więc decyzję podejmujecie, znając kwotę."],
    ],
    services: ["automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "integracje-systemow", "automatyzacja-dla-hr", "automatyzacja-w-obsludze-klienta", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    regionCluster: "trojmiasto",
    slug: "gdynia",
    name: "Gdynia",
    nameGenitive: "Gdyni",
    nameLocative: "Gdyni",
    nearbyCitySlugs: ["gdansk", "sopot", "wejherowo", "puck", "pruszcz-gdanski", "kartuzy"],
    metaDescription:
      "Automatyzacja procesów dla firm z Gdyni: port i gospodarka morska, logistyka, stocznie, IT i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy gdyńskim firmom morskim, logistycznym i technologicznym uporządkować zlecenia, dokumenty i raporty, bez przepisywania danych między systemami.",
    intro: [
      "Gdynia zbudowała swoją tożsamość na porcie i gospodarce morskiej. Działają tu terminale kontenerowe i promowe, stocznie, armatorzy, firmy obsługujące statki, a także Pomorski Park Naukowo-Technologiczny z firmami IT i start-upami.",
      "Firmy z branży morskiej pracują z bogatą dokumentacją: zlecenia, certyfikaty, harmonogramy, rozliczenia z podwykonawcami. Wiele z nich przygotowuje się ręcznie.",
    ],
    localContext:
      "Gdyńskie firmy często obsługują klientów zagranicznych i pracują w projektach z wieloma podwykonawcami. Informacje krążą w mailach, a status projektu trudno uchwycić.",
    whyHere:
      "W Gdyni automatyzacja porządkuje dokumentację i komunikację w projektach morskich oraz logistycznych, żeby zespół widział aktualny stan bez szukania w mailach.",
    economy: {
      title: "Czym żyje gdyński biznes",
      paragraphs: [
        "Port w Gdyni obsługuje kontenery, ładunki drobnicowe i promy do Skandynawii. Wokół niego działają spedytorzy, magazyny, agencje żeglugowe i firmy serwisowe.",
        "Stocznie remontowe i produkcyjne, firmy projektujące statki i dostawcy wyposażenia tworzą silne zaplecze przemysłowe. Obok nich rośnie sektor IT i usług biznesowych.",
      ],
    },
    industries: [
      ["Gospodarka morska", "Zlecenia, certyfikaty i harmonogramy prac przy statkach i wyposażeniu."],
      ["Spedycja i logistyka", "Dokumenty przewozowe, statusy i rozliczenia przy ładunkach portowych."],
      ["Stocznie i podwykonawcy", "Harmonogramy, protokoły i rozliczenia wielu podwykonawców w jednym miejscu."],
      ["IT i start-upy", "Obieg zgłoszeń, onboarding i rozliczenia projektów."],
    ],
    processes: [
      ["Dokumentacja projektu", "Certyfikaty, protokoły i rysunki zebrane dla każdego zlecenia w jednym miejscu."],
      ["Rozliczenie podwykonawców", "Godziny i koszty zebrane automatycznie z kart pracy."],
      ["Status zlecenia", "Klient i kierownik projektu widzą aktualny etap bez szukania w mailach."],
      ["Dokumenty przewozowe", "AI odczytuje dokumenty i przenosi dane do systemu spedycyjnego."],
    ],
    faq: [
      ["Czy pracujecie z gdyńskimi firmami z branży morskiej?", "Tak. Porządkujemy dokumentację projektów, harmonogramy i rozliczenia z podwykonawcami."],
      ["Czy automatyzujecie spedycję w porcie Gdynia?", "Tak. Odczyt dokumentów przez AI, statusy dla klientów i rozliczenia z przewoźnikami."],
      ["Czy pracujecie ze start-upami z Pomorskiego Parku Naukowo-Technologicznego?", "Tak. Pomagamy uporządkować obieg zgłoszeń, onboarding i rozliczenia, zanim firma urośnie."],
      ["Ile kosztuje automatyzacja w firmie z Gdyni?", "Zależy od procesu i liczby systemów do połączenia. Wycenę pierwszego etapu dostajecie po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "integracje-systemow", "automatyzacja-dla-firm-uslugowych"],
  }),

  town({
    ...base,
    slug: "sopot",
    name: "Sopot",
    nameGenitive: "Sopotu",
    nameLocative: "Sopocie",
    nearbyCitySlugs: ["gdansk", "gdynia", "pruszcz-gdanski", "wejherowo", "kartuzy"],
    metaDescription:
      "Automatyzacja dla firm z Sopotu: hotele, apartamenty, gastronomia, spa, wydarzenia i biura. Rezerwacje i obsługa gości bez nadgodzin. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sopockim hotelom, apartamentom i firmom usługowym obsłużyć sezon bez nadgodzin: rezerwacje, pytania gości i płatności działają same.",
    intro: [
      "Sopot to jeden z najbardziej znanych kurortów nad Bałtykiem. Lokalną gospodarkę tworzą hotele, apartamenty na wynajem, restauracje, spa, organizatorzy wydarzeń i konferencji, a także biura firm, które wybrały Sopot na siedzibę.",
      "W sezonie liczba gości rośnie kilkukrotnie, a z nią liczba rezerwacji, pytań i zmian terminów. Poza sezonem trudno uzasadnić dodatkowe etaty w recepcji.",
    ],
    localContext:
      "Sopockie obiekty obsługują gości z całej Polski i zagranicy. Rezerwacje przychodzą z kilku portali, przez stronę i telefonicznie, a pytania powtarzają się: parking, dojazd, godziny zameldowania.",
    whyHere:
      "W Sopocie automatyzacja przejmuje odpowiedzi na powtarzalne pytania, potwierdzenia i płatności, a zespół zajmuje się gośćmi.",
    industries: [
      ["Hotele i apartamenty", "Rezerwacje z wielu portali, zameldowania bez recepcji i grafik sprzątania."],
      ["Gastronomia i spa", "Rezerwacje stolików i zabiegów, przypomnienia i przedpłaty."],
      ["Wydarzenia i konferencje", "Zgłoszenia uczestników, oferty dla firm, umowy i rozliczenia."],
      ["Biura i usługi", "Obieg dokumentów, umów i zgłoszeń klientów."],
    ],
    processes: [
      ["Pytania gości", "Asystent AI odpowiada w kilku językach o dostępność, parking i dojazd."],
      ["Rezerwacja i przedpłata", "Rezerwacja uruchamia potwierdzenie, link do płatności i przypomnienie."],
      ["Zameldowanie w apartamencie", "Gość dostaje instrukcje i kod dostępu automatycznie przed przyjazdem."],
      ["Zgłoszenia na konferencję", "Formularz, potwierdzenie, faktura i lista uczestników bez ręcznej pracy."],
    ],
    faq: [
      ["Czy automatyzujecie apartamenty na wynajem w Sopocie?", "Tak. Łączymy portale rezerwacyjne, instrukcje dla gości, kody dostępu i grafik sprzątania."],
      ["Czy chatbot odpowie gościom sopockiego hotelu w nocy?", "Tak. Asystent AI odpowiada o każdej porze na podstawie waszych informacji i zostawia trudne pytania zespołowi."],
      ["Czy obsługujecie organizatorów wydarzeń w Sopocie?", "Tak. Zgłoszenia uczestników, oferty dla firm, umowy i rozliczenia mogą działać w jednym przepływie."],
      ["Kiedy sopocki obiekt powinien zacząć przygotowania?", "Najlepiej kilka tygodni przed sezonem, żeby wszystko działało, zanim zacznie się duże obłożenie."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "slupsk",
    name: "Słupsk",
    nameGenitive: "Słupska",
    nameLocative: "Słupsku",
    nearbyCitySlugs: ["lebork", "bytow", "koszalin", "gdansk", "czluchow"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Słupska: produkcja w strefie ekonomicznej, przetwórstwo, handel i turystyka w Ustce. Konsultacja 30 min.",
    heroLead:
      "Pomagamy słupskim zakładom, firmom handlowym i turystycznym uporządkować zamówienia, dokumenty i rezerwacje.",
    intro: [
      "Słupsk jest głównym ośrodkiem środkowego Pomorza. W Słupskiej Specjalnej Strefie Ekonomicznej działają zakłady produkcyjne, a miasto obsługuje handlowo i usługowo kilka powiatów. Pobliska Ustka to popularny kurort.",
      "Słupskie firmy produkcyjne i przetwórcze sprzedają w kraju i za granicą, a turystyka w sezonie letnim zwiększa liczbę klientów w usługach.",
    ],
    localContext:
      "Słupskie firmy mają mniejszy dostęp do specjalistów niż Trójmiasto, więc szukają rozwiązań, które działają bez rozbudowy biura i własnego działu IT.",
    whyHere:
      "W Słupsku automatyzacja pozwala obsłużyć więcej zamówień i klientów tym samym zespołem.",
    economy: {
      title: "Czym żyje słupski biznes",
      paragraphs: [
        "Strefa ekonomiczna przyciągnęła do Słupska producentów z branży metalowej, drzewnej, spożywczej i tworzyw. Wiele z nich eksportuje do Skandynawii i Niemiec.",
        "Miasto jest też zapleczem handlowym, edukacyjnym i medycznym dla regionu, a Ustka i wybrzeże napędzają turystykę.",
      ],
    },
    industries: [
      ["Produkcja w strefie ekonomicznej", "Zlecenia, materiały i dokumenty eksportowe dla odbiorców ze Skandynawii i Niemiec."],
      ["Przetwórstwo spożywcze i rybne", "Dostawy surowca, partie i dokumenty jakości."],
      ["Handel", "Zamówienia od sklepów środkowego Pomorza, stany i faktury."],
      ["Turystyka w Ustce", "Rezerwacje, pytania gości i płatności w sezonie."],
    ],
    processes: [
      ["Zamówienia eksportowe", "Zamówienie od zagranicznego klienta trafia do systemu, a faktura powstaje w jego walucie."],
      ["Dokumentacja partii", "Dane partii i dokumenty jakości zebrane automatycznie dla każdej wysyłki."],
      ["Rezerwacje w sezonie", "Rezerwacja uruchamia potwierdzenie, zaliczkę i przypomnienie."],
      ["Raport sprzedaży", "Sprzedaż według klientów i rynków w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z zakładami ze Słupskiej Specjalnej Strefy Ekonomicznej?", "Tak. Automatyzujemy zamówienia, dokumentację i raporty, na systemach, które zakład już ma."],
      ["Czy automatyzujecie sprzedaż eksportową słupskich firm?", "Tak. Faktury w walucie klienta, dokumenty wysyłkowe i korespondencja w kilku językach."],
      ["Czy obsługujecie obiekty turystyczne w Ustce?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ["Czy lokalizacja w Słupsku wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy dla firmy ze Słupska są takie same jak dla firm z największych miast."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "integracje-systemow", "automatyzacja-w-obsludze-klienta"],
  }),

  town({
    ...base,
    slug: "pruszcz-gdanski",
    name: "Pruszcz Gdański",
    nameGenitive: "Pruszcza Gdańskiego",
    nameLocative: "Pruszczu Gdańskim",
    nearbyCitySlugs: ["gdansk", "tczew", "sopot", "starogard-gdanski", "gdynia"],
    metaDescription:
      "Automatyzacja procesów dla firm z Pruszcza Gdańskiego: centra logistyczne przy A1 i S7, produkcja, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy pruszczańskim magazynom, firmom logistycznym i handlowym obsłużyć więcej zamówień i przesyłek tym samym zespołem.",
    intro: [
      "Pruszcz Gdański leży na styku autostrady A1 i drogi S7, tuż przy Gdańsku. W okolicy powstały centra logistyczne i magazyny obsługujące port, handel i e-commerce, a samo miasto szybko rośnie jako przedmieście Trójmiasta.",
      "Firmy logistyczne i dystrybucyjne pracują w rytmie dostaw z portu i zamówień klientów. Awizacje, dokumenty i statusy obsługiwane ręcznie spowalniają cały łańcuch.",
    ],
    localContext:
      "Pruszczańskie magazyny obsługują wielu klientów, z których każdy ma własne formaty danych i wymagania raportowe.",
    whyHere:
      "W Pruszczu Gdańskim automatyzacja przenosi dane między systemami klientów, magazynu i przewoźników bez ręcznego przepisywania.",
    industries: [
      ["Magazyny i centra dystrybucyjne", "Awizacje, sloty, raporty stanów i rozliczenia usług magazynowych."],
      ["E-commerce", "Zamówienia z wielu kanałów, wysyłki i zwroty obsługiwane z magazynów pod Gdańskiem."],
      ["Transport", "Zlecenia, dokumenty przewozowe i statusy dla klientów."],
      ["Usługi dla mieszkańców", "Zapisy, przypomnienia i płatności online w rosnącym przedmieściu."],
    ],
    processes: [
      ["Awizacja dostawy z portu", "Termin dostawy potwierdzany automatycznie z przewoźnikiem i magazynem."],
      ["Dane od klientów", "Zamówienia w różnych formatach sprowadzone do jednego, bez przepisywania."],
      ["Raport stanów dla klienta", "Stany i ruchy magazynowe wysyłane klientowi według harmonogramu."],
      ["Rozliczenie usług", "Usługi magazynowe fakturowane na podstawie danych z systemu."],
    ],
    faq: [
      ["Czy pracujecie z magazynami w Pruszczu Gdańskim?", "Tak. Automatyzujemy awizacje, raporty stanów dla klientów i rozliczenia usług magazynowych."],
      ["Czy łączycie się z systemem WMS?", "Tak, jeśli pozwala na wymianę danych przez API lub pliki. Sprawdzamy to na konsultacji."],
      ["Czy automatyzujecie sklepy internetowe z magazynem pod Gdańskiem?", "Tak. Zamówienia z wielu kanałów, etykiety, zwroty i powiadomienia dla klientów."],
      ["Od czego zależy cena wdrożenia w Pruszczu Gdańskim?", "Od liczby kroków w procesie, systemów do połączenia i ilości danych. Każdy etap wyceniamy osobno, przed startem."],
    ],
    services: ["automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-sprzedazy", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "tczew",
    name: "Tczew",
    nameGenitive: "Tczewa",
    nameLocative: "Tczewie",
    nearbyCitySlugs: ["pruszcz-gdanski", "starogard-gdanski", "malbork", "gdansk", "kwidzyn"],
    metaDescription:
      "Automatyzacja procesów dla firm z Tczewa: produkcja elektroniki, dostawcy, logistyka przy A1, handel. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy tczewskim zakładom, ich dostawcom i firmom logistycznym uporządkować zamówienia, raporty i dokumentację.",
    intro: [
      "Tczew leży nad Wisłą, przy autostradzie A1, około pół godziny od Gdańska. W mieście działa duży zakład produkcji elektroniki kontraktowej, a podstrefa strefy ekonomicznej przyciągnęła też innych producentów i firmy logistyczne.",
      "Produkcja elektroniki to precyzyjne harmonogramy, identyfikowalność komponentów i wymagania jakościowe odbiorców. Dostawcy i podwykonawcy muszą nadążać z dokumentami.",
    ],
    localContext:
      "Tczewskie firmy konkurują o pracowników z Trójmiastem i dużym zakładem w mieście. Zespoły biurowe są małe, a wymagania odbiorców rosną.",
    whyHere:
      "W Tczewie automatyzacja pozwala dostawcom sprostać wymaganiom dużego odbiorcy bez ręcznego przygotowania raportów i dokumentów.",
    industries: [
      ["Produkcja elektroniki", "Harmonogramy, identyfikowalność komponentów i raporty jakości."],
      ["Dostawcy i podwykonawcy", "Zamówienia, dokumentacja dostaw i terminy dla odbiorców przemysłowych."],
      ["Logistyka przy A1", "Awizacje, statusy i dokumenty przewozowe między portem a południem Polski."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury dla mieszkańców Kociewia."],
    ],
    processes: [
      ["Harmonogram od odbiorcy", "Zmiany w planie klienta trafiają do produkcji bez przepisywania."],
      ["Identyfikowalność partii", "Numery komponentów i partii zapisane przy każdym zleceniu."],
      ["Raport jakości", "Wyniki kontroli składane w raport dla odbiorcy automatycznie."],
      ["Faktura po dostawie", "Potwierdzona dostawa uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami zakładów elektronicznych w Tczewie?", "Tak. Harmonogramy, identyfikowalność partii i raporty jakości to typowy zakres."],
      ["Czy firmy logistyczne przy A1 pod Tczewem też mogą skorzystać?", "Tak. Awizacje, statusy i dokumenty przewozowe."],
      ["Czy tczewska firma musi wymieniać system ERP?", "Nie. Budujemy połączenia wokół tego, co już działa."],
      ["Od czego firma z Tczewa powinna zacząć automatyzację?", "Od bezpłatnej, 30-minutowej konsultacji. Wskazujemy jeden proces z najszybszym zwrotem dla firmy z Tczewa i przygotowujemy wycenę pierwszego etapu."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "starogard-gdanski",
    name: "Starogard Gdański",
    nameGenitive: "Starogardu Gdańskiego",
    nameLocative: "Starogardzie Gdańskim",
    nearbyCitySlugs: ["tczew", "koscierzyna", "pruszcz-gdanski", "kwidzyn", "gdansk"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Starogardu Gdańskiego: przemysł farmaceutyczny i jego dostawcy, produkcja, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy starogardzkim dostawcom, zakładom i firmom usługowym uporządkować dokumentację, zamówienia i raporty.",
    intro: [
      "Starogard Gdański, stolica Kociewia, jest siedzibą jednego z największych polskich producentów leków. Wokół niego działają dostawcy opakowań, surowców, usług laboratoryjnych i logistycznych, a w mieście jest też podstrefa strefy ekonomicznej.",
      "Przemysł farmaceutyczny wymaga rygorystycznej dokumentacji i identyfikowalności. Dostawcy muszą przekazywać certyfikaty, raporty i dokumenty partii bez błędów.",
    ],
    localContext:
      "Starogardzkie firmy współpracujące z przemysłem farmaceutycznym pracują według procedur odbiorcy. Każda dostawa ma komplet dokumentów, które często przygotowuje się ręcznie.",
    whyHere:
      "W Starogardzie Gdańskim automatyzacja porządkuje dokumentację i identyfikowalność, których wymagają odbiorcy z branży farmaceutycznej.",
    industries: [
      ["Dostawcy przemysłu farmaceutycznego", "Certyfikaty, dokumenty partii i raporty dla odbiorcy."],
      ["Produkcja w strefie", "Zlecenia, materiały i wysyłki."],
      ["Logistyka", "Dokumenty przewozowe i statusy dostaw dla wymagających odbiorców."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury dla mieszkańców Kociewia."],
    ],
    processes: [
      ["Dokumenty partii", "Certyfikaty i dokumenty jakości zebrane automatycznie dla każdej dostawy."],
      ["Zamówienia od odbiorcy", "Zamówienia z portalu klienta trafiają do systemu bez przepisywania."],
      ["Terminy ważności", "Przypomnienia o wygasających certyfikatach i audytach."],
      ["Raport dostaw", "Terminowość i kompletność dokumentów w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami przemysłu farmaceutycznego ze Starogardu?", "Tak. Porządkujemy dokumentację partii, certyfikaty i raporty dla odbiorcy."],
      ["Czy pilnujecie terminów certyfikatów i audytów?", "Tak. System przypomina o wygasających dokumentach z wyprzedzeniem."],
      ["Czy starogardzka firma może zacząć od jednego procesu?", "Tak. Zaczynamy od procesu, który zabiera najwięcej czasu, najczęściej od dokumentów dostaw."],
      ["Jak wygląda współpraca na odległość z firmą ze Starogardu Gdańskiego?", "Procesy poznajemy na wideorozmowach i przykładach dokumentów, a wdrożenie testujemy razem z zespołem na prawdziwych danych."],
    ],
    services: ["cyfryzacja-danych-i-dokumentow", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "kwidzyn",
    name: "Kwidzyn",
    nameGenitive: "Kwidzyna",
    nameLocative: "Kwidzynie",
    nearbyCitySlugs: ["sztum", "malbork", "starogard-gdanski", "tczew", "olsztyn"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kwidzyna: przemysł papierniczy i jego dostawcy, produkcja, transport i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kwidzyńskim dostawcom, podwykonawcom i firmom usługowym uporządkować zlecenia, protokoły i rozliczenia.",
    intro: [
      "Kwidzyn jest siedzibą jednego z największych zakładów papierniczych w Polsce. Wokół niego działają firmy remontowe, transportowe, dostawcy drewna i usług, a w mieście jest też podstrefa strefy ekonomicznej z innymi producentami.",
      "Podwykonawcy dużego zakładu pracują według jego procedur: zlecenia, pozwolenia, protokoły, uprawnienia pracowników. Dokumentów jest dużo.",
    ],
    localContext:
      "Kwidzyńskie firmy transportowe wożą drewno i papier, a firmy remontowe obsługują postoje zakładu. W obu przypadkach rozliczenia i dokumenty zajmują biuru dużo czasu.",
    whyHere:
      "W Kwidzynie automatyzacja skraca drogę od wykonanej pracy lub kursu do faktury.",
    industries: [
      ["Usługi dla przemysłu papierniczego", "Karty pracy, protokoły i rozliczenia zleceń remontowych."],
      ["Transport drewna i papieru", "Zlecenia, dokumenty przewozowe i rozliczenia kursów."],
      ["Produkcja w strefie", "Zlecenia, materiały i wysyłki."],
      ["Handel i usługi", "Zamówienia i faktury dla mieszkańców Powiśla."],
    ],
    processes: [
      ["Karta pracy z postoju", "Godziny i materiały wpisywane w telefonie trafiają od razu do biura."],
      ["Rozliczenie kursu", "Zamknięty kurs z dokumentami uruchamia fakturę."],
      ["Uprawnienia pracowników", "Przypomnienia o szkoleniach i badaniach wymaganych przez zakład."],
      ["Raport miesięczny", "Przychody i koszty według zleceń i klientów."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładu papierniczego w Kwidzynie?", "Tak. Automatyzujemy karty pracy, protokoły, rozliczenia i pilnowanie uprawnień pracowników."],
      ["Czy automatyzujecie firmy transportowe wożące drewno?", "Tak. Zlecenia, dokumenty przewozowe i rozliczenia kursów."],
      ["Czy kwidzyńska firma potrzebuje działu IT?", "Nie. Wystarczy osoba, która zna proces. Konfigurację robimy my."],
      ["Ile kosztuje pierwszy etap w Kwidzynie?", "Wycenę przygotowujemy po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-logistyki", "automatyzacja-dla-hr", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "malbork",
    name: "Malbork",
    nameGenitive: "Malborka",
    nameLocative: "Malborku",
    nearbyCitySlugs: ["tczew", "nowy-dwor-gdanski", "sztum", "kwidzyn", "gdansk"],
    metaDescription:
      "Automatyzacja procesów dla firm z Malborka: turystyka zamkowa, hotele, przetwórstwo spożywcze, produkcja i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy malborskim hotelom, firmom turystycznym i zakładom uporządkować rezerwacje, zamówienia i dokumenty.",
    intro: [
      "Malbork słynie z największego ceglanego zamku na świecie, wpisanego na listę UNESCO. Turystyka napędza hotele, gastronomię i firmy obsługujące grupy, a obok nich działają zakłady przetwórstwa spożywczego i produkcyjne.",
      "Obiekty turystyczne obsługują grupy szkolne, wycieczki zagraniczne i turystów indywidualnych. Rezerwacje, listy uczestników i płatności wymagają sporo pracy.",
    ],
    localContext:
      "Malborskie firmy turystyczne mają wyraźne szczyty: sezon letni, wycieczki szkolne i wydarzenia na zamku. W tym czasie zespół nie nadąża z obsługą zapytań.",
    whyHere:
      "W Malborku automatyzacja pomaga obsłużyć szczyty turystyczne bez nadgodzin, a zakładom porządkuje zamówienia i dokumenty.",
    industries: [
      ["Hotele i gastronomia", "Rezerwacje, pytania gości w kilku językach i płatności."],
      ["Obsługa grup zwiedzających", "Rezerwacje wycieczek, listy uczestników, zaliczki i faktury."],
      ["Przetwórstwo spożywcze", "Dostawy z Żuław, partie i dokumenty jakości."],
      ["Produkcja i handel", "Zlecenia, zamówienia i wysyłki."],
    ],
    processes: [
      ["Rezerwacja grupy szkolnej", "Termin, lista uczestników, zaliczka i faktura w jednym przepływie."],
      ["Pytania turystów", "Asystent AI odpowiada o godziny, bilety i dojazd w kilku językach."],
      ["Dostawy surowca", "Każda dostawa zapisana raz trafia do magazynu i rozliczeń."],
      ["Faktury", "Faktura wysyłana automatycznie po pobycie lub usłudze."],
    ],
    faq: [
      ["Czy automatyzujecie obsługę grup zwiedzających zamek w Malborku?", "Tak. Rezerwacje, listy uczestników, zaliczki, przypomnienia i faktury mogą działać w jednym przepływie."],
      ["Czy chatbot odpowie turystom zagranicznym?", "Tak. Asystent AI odpowiada w kilku językach na podstawie waszych informacji."],
      ["Czy pracujecie z zakładami przetwórczymi z Malborka?", "Tak. Dostawy surowca, partie i dokumenty jakości."],
      ["Kiedy malborski obiekt powinien zacząć?", "Przed sezonem wycieczek, żeby zespół zdążył poznać nowy sposób pracy."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-w-produkcji"],
  }),

  town({
    ...base,
    slug: "wejherowo",
    name: "Wejherowo",
    nameGenitive: "Wejherowa",
    nameLocative: "Wejherowie",
    nearbyCitySlugs: ["gdynia", "puck", "gdansk", "kartuzy", "sopot"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wejherowa: produkcja, handel, budownictwo i usługi dla północnej części aglomeracji. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wejherowskim firmom produkcyjnym, budowlanym i usługowym uporządkować zamówienia, wyceny i rozliczenia.",
    intro: [
      "Wejherowo jest stolicą powiatu na północ od Gdyni i jednym z największych miast Kaszub. Lokalną gospodarkę tworzą zakłady produkcyjne, firmy budowlane, handel i usługi dla szybko rosnącej liczby mieszkańców.",
      "Wiele wejherowskich firm obsługuje klientów z całego Trójmiasta. Szybka odpowiedź na zapytanie i sprawna obsługa decydują o zleceniach.",
    ],
    localContext:
      "Wejherowskie firmy budowlane i usługowe dostają zapytania mailem, telefonicznie i przez portale ogłoszeniowe. Wyceny przygotowuje się często po godzinach.",
    whyHere:
      "W Wejherowie automatyzacja przyspiesza odpowiedź na zapytanie i porządkuje zlecenia, żeby firma mogła przyjąć więcej pracy.",
    industries: [
      ["Budownictwo i wykończenia", "Zapytania, wyceny, harmonogramy ekip i rozliczenia z inwestorami."],
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z Trójmiasta."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi dla mieszkańców", "Zapisy, przypomnienia i płatności online."],
    ],
    processes: [
      ["Zapytania z wielu źródeł", "Zapytania z maila, telefonu i portali trafiają do jednej listy."],
      ["Wycena z szablonu", "Wycena przygotowana w kilka minut na podstawie formularza klienta."],
      ["Harmonogram ekip", "Terminy ekip i dostaw materiałów w jednym kalendarzu."],
      ["Rozliczenie etapu", "Zakończony etap prac uruchamia fakturę dla inwestora."],
    ],
    faq: [
      ["Czy automatyzujecie firmy budowlane z Wejherowa?", "Tak. Zapytania, wyceny, harmonogramy ekip i rozliczenia etapów."],
      ["Obsługujemy klientów z całego Trójmiasta. Jak szybciej odpowiadać?", "Zbieramy zapytania w jednym miejscu i przygotowujemy wycenę z szablonu, więc odpowiedź wychodzi tego samego dnia."],
      ["Czy wejherowska firma musi kupić nowy program?", "Zwykle nie. Łączymy pocztę, kalendarz i program do faktur, których już używacie."],
      ["Czy małą firmę z Wejherowa stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność dla firmy z Wejherowa oceniamy razem na konsultacji."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "wdrozenia-airtable", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "puck",
    name: "Puck",
    nameGenitive: "Pucka",
    nameLocative: "Pucku",
    nearbyCitySlugs: ["wejherowo", "gdynia", "gdansk", "lebork", "sopot"],
    metaDescription:
      "Automatyzacja dla firm z Pucka i Półwyspu Helskiego: turystyka, szkoły kitesurfingu, pensjonaty, rybołówstwo i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy puckim pensjonatom, szkołom sportów wodnych i firmom turystycznym obsłużyć sezon bez nadgodzin.",
    intro: [
      "Puck leży nad Zatoką Pucką, u nasady Półwyspu Helskiego. Region żyje z turystyki: pensjonatów, kempingów, szkół kitesurfingu i windsurfingu, wypożyczalni i gastronomii, a także z rybołówstwa i przetwórstwa ryb.",
      "Sezon letni jest krótki i intensywny. W kilka miesięcy firmy obsługują większość rocznych rezerwacji i klientów, a każde nieodebrane zapytanie to stracony klient.",
    ],
    localContext:
      "Puckie szkoły sportów wodnych i pensjonaty dostają zapytania przez stronę, portale, media społecznościowe i telefon, często w kilku językach.",
    whyHere:
      "W Pucku automatyzacja odpowiada na zapytania, przyjmuje rezerwacje i płatności, a zespół zajmuje się klientami na wodzie i w obiekcie.",
    industries: [
      ["Szkoły sportów wodnych", "Rezerwacje kursów, sprzętu i instruktorów z płatnością online."],
      ["Pensjonaty i kempingi", "Rezerwacje z wielu portali, zaliczki i pytania gości."],
      ["Rybołówstwo i przetwórstwo", "Dostawy ryb, partie i sprzedaż do odbiorców."],
      ["Gastronomia", "Rezerwacje stolików i zamówienia grupowe w sezonie."],
    ],
    processes: [
      ["Rezerwacja kursu", "Klient wybiera termin, poziom i sprzęt, płaci online i dostaje potwierdzenie."],
      ["Zmiana terminu przez pogodę", "Klient dostaje propozycję nowego terminu, gdy wiatr nie pozwala na zajęcia."],
      ["Pytania gości", "Asystent AI odpowiada o ceny, dojazd i warunki, także po angielsku i niemiecku."],
      ["Rozliczenie sezonu", "Przychody według usług i kanałów rezerwacji w jednym zestawieniu."],
    ],
    faq: [
      ["Czy automatyzujecie szkoły kitesurfingu nad Zatoką Pucką?", "Tak. Rezerwacje kursów i sprzętu, płatności, grafik instruktorów i zmiany terminów przez pogodę."],
      ["Czy pensjonat w Pucku może zbierać rezerwacje z kilku portali w jednym miejscu?", "Tak. Rezerwacje trafiają do jednego kalendarza, co zmniejsza ryzyko podwójnej rezerwacji."],
      ["Czy chatbot odpowie turystom z Niemiec?", "Tak. Asystent AI odpowiada w kilku językach na podstawie waszych informacji."],
      ["Kiedy firma z Pucka powinna zacząć przed sezonem?", "Najlepiej wiosną, żeby wszystko działało, zanim ruszą rezerwacje na lato."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "kartuzy",
    name: "Kartuzy",
    nameGenitive: "Kartuz",
    nameLocative: "Kartuzach",
    nearbyCitySlugs: ["gdansk", "koscierzyna", "wejherowo", "sopot", "gdynia"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kartuz: produkcja, meble, turystyka na Kaszubach, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kartuskim zakładom, firmom turystycznym i handlowym uporządkować zamówienia, rezerwacje i dokumenty.",
    intro: [
      "Kartuzy są stolicą Szwajcarii Kaszubskiej, regionu jezior i wzgórz niedaleko Gdańska. Lokalną gospodarkę tworzą zakłady produkcyjne, w tym meblarskie, firmy budowlane, handel i turystyka.",
      "Kaszubskie firmy słyną z przedsiębiorczości. Wiele z nich to firmy rodzinne, które urosły i obsługują klientów z całej Polski, ale wciąż pracują na arkuszach i poczcie.",
    ],
    localContext:
      "Kartuskie firmy produkcyjne konkurują o pracowników z Trójmiastem. Automatyzacja pozwala im rosnąć bez rozbudowy biura.",
    whyHere:
      "W Kartuzach automatyzacja pomaga firmie rodzinnej, która urosła, przejść z arkuszy na uporządkowany przepływ zamówień i dokumentów.",
    industries: [
      ["Produkcja mebli", "Zamówienia z wariantami, zlecenia produkcyjne i wysyłki."],
      ["Budownictwo", "Wyceny, harmonogramy ekip i rozliczenia."],
      ["Turystyka na Kaszubach", "Rezerwacje domków i pensjonatów, zaliczki i pytania gości."],
      ["Handel", "Zamówienia, stany i faktury dla klientów z Trójmiasta."],
    ],
    processes: [
      ["Zamówienie z wariantami", "Zamówienie z kolorem, wymiarem i materiałem trafia do produkcji bez przepisywania."],
      ["Status zamówienia", "Klient dostaje informację o terminie produkcji i dostawy."],
      ["Rezerwacje domków", "Rezerwacja z zaliczką i instrukcją dojazdu wysyłaną automatycznie."],
      ["Jedna baza zamiast arkuszy", "Klienci, zamówienia i produkty w jednej bazie z historią."],
    ],
    faq: [
      ["Czy pracujecie z kaszubskimi producentami mebli z okolic Kartuz?", "Tak. Zamówienia z wariantami, zlecenia produkcyjne, statusy dla klientów i wysyłki."],
      ["Czy automatyzujecie domki i pensjonaty w Szwajcarii Kaszubskiej?", "Tak. Rezerwacje, zaliczki, instrukcje dojazdu i pytania gości."],
      ["Czy pomagacie kartuskim firmom rodzinnym przejść z arkuszy na bazę danych?", "Tak. Projektujemy bazę na waszych danych i automatyzujemy to, co dziś robi się ręcznie."],
      ["Czy przyjeżdżacie do firm w Kartuzach?", "Pracujemy zdalnie, a do firm w Kartuzach przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
    ],
    services: ["automatyzacja-w-produkcji", "projektowanie-baz-danych", "automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "koscierzyna",
    name: "Kościerzyna",
    nameGenitive: "Kościerzyny",
    nameLocative: "Kościerzynie",
    nearbyCitySlugs: ["kartuzy", "starogard-gdanski", "bytow", "gdansk", "chojnice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kościerzyny: przemysł drzewny, produkcja, turystyka na pojezierzu i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kościerskim zakładom drzewnym, firmom turystycznym i handlowym uporządkować zamówienia i rezerwacje.",
    intro: [
      "Kościerzyna leży w południowej części Kaszub, w otoczeniu jezior i lasów. Lokalną gospodarkę tworzą przemysł drzewny, zakłady produkcyjne, handel i turystyka.",
      "Zakłady drzewne pracują na zamówieniach z określonymi wymiarami i terminami, a obiekty turystyczne mają wyraźny sezon letni.",
    ],
    localContext:
      "Kościerskie firmy często łączą produkcję z usługami. Mały zespół obsługuje odbiorców przemysłowych i gości w sezonie.",
    whyHere:
      "W Kościerzynie automatyzacja porządkuje zamówienia i rezerwacje w jednym miejscu, żeby nic nie umykało.",
    industries: [
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy produkcji i wysyłki."],
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z Pomorza."],
      ["Turystyka na pojezierzu", "Rezerwacje ośrodków, zaliczki i pytania gości."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Zamówienie z wymiarami", "Formularz z wymiarami i ilością zamienia się w zlecenie produkcyjne."],
      ["Termin dla klienta", "Klient dostaje potwierdzenie terminu i informację o wysyłce."],
      ["Rezerwacja ośrodka", "Rezerwacja z zaliczką i przypomnieniem przed przyjazdem."],
      ["Faktura", "Faktura tworzona po wydaniu lub pobycie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami drzewnymi z Kościerzyny?", "Tak. Zamówienia z wymiarami, zlecenia i wysyłki."],
      ["Czy automatyzujecie ośrodki wypoczynkowe na Pojezierzu Kaszubskim?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ["Czy kościerska firma może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze. Jeden proces, jasny koszt, szybki efekt."],
      ["Ile kosztuje wdrożenie w Kościerzynie?", "Wycenę pierwszego etapu przygotowujemy po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "chatbot-ai-dla-firmy"],
  }),

  town({
    ...base,
    slug: "nowy-dwor-gdanski",
    name: "Nowy Dwór Gdański",
    nameGenitive: "Nowego Dworu Gdańskiego",
    nameLocative: "Nowym Dworze Gdańskim",
    nearbyCitySlugs: ["malbork", "gdansk", "tczew", "sztum", "olsztyn"],
    metaDescription:
      "Automatyzacja procesów dla firm z Nowego Dworu Gdańskiego: rolnictwo na Żuławach, przetwórstwo, turystyka na Mierzei Wiślanej. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Żuław i Mierzei Wiślanej uporządkować dostawy, rozliczenia i rezerwacje.",
    intro: [
      "Nowy Dwór Gdański jest stolicą Żuław, jednego z najżyźniejszych regionów rolniczych w Polsce. Powiat obejmuje też Mierzeję Wiślaną z Krynicą Morską i Stegną, gdzie latem działa wiele obiektów turystycznych.",
      "Gospodarstwa, skupy i przetwórnie pracują z dużymi ilościami surowca, a firmy turystyczne w krótkim sezonie obsługują większość rocznych gości.",
    ],
    localContext:
      "Firmy z powiatu nowodworskiego łączą rolnictwo z turystyką. Dwie różne branże, dwa różne szczyty w roku i ten sam mały zespół.",
    whyHere:
      "W Nowym Dworze Gdańskim automatyzacja porządkuje skup i rozliczenia w rolnictwie oraz rezerwacje w turystyce.",
    industries: [
      ["Rolnictwo na Żuławach", "Dostawy zbóż i warzyw, rozliczenia i terminy."],
      ["Skupy i przetwórstwo", "Przyjęcie surowca, partie i sprzedaż do odbiorców."],
      ["Turystyka na Mierzei Wiślanej", "Rezerwacje pensjonatów i kempingów, zaliczki i pytania gości."],
      ["Handel", "Zamówienia środków produkcji i odroczone płatności."],
    ],
    processes: [
      ["Przyjęcie dostawy w skupie", "Ważenie i jakość zapisane raz trafiają do rozliczeń."],
      ["Rozliczenie dostawcy", "Zestawienie dla każdego gospodarstwa tworzone automatycznie."],
      ["Rezerwacje nad morzem", "Rezerwacja z zaliczką, potwierdzeniem i przypomnieniem."],
      ["Odroczone płatności", "Przypomnienia dla klientów przed terminem."],
    ],
    faq: [
      ["Czy pracujecie ze skupami i przetwórniami na Żuławach?", "Tak. Przyjęcie dostaw, rozliczenia z gospodarstwami i sprzedaż."],
      ["Czy automatyzujecie pensjonaty w Krynicy Morskiej i Stegnie?", "Tak. Rezerwacje z kilku portali, zaliczki i pytania gości."],
      ["Czy firma z Nowego Dworu Gdańskiego może zacząć przed sezonem?", "Tak. Najlepiej kilka tygodni wcześniej, żeby zespół zdążył poznać nowy sposób pracy."],
      ["Czy przyjeżdżacie do firm w Nowym Dworze Gdańskim?", "Pracujemy zdalnie, a do firm w Nowym Dworze Gdańskim przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-obsludze-klienta", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "sztum",
    name: "Sztum",
    nameGenitive: "Sztumu",
    nameLocative: "Sztumie",
    nearbyCitySlugs: ["kwidzyn", "malbork", "nowy-dwor-gdanski", "olsztyn", "tczew"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Sztumu: rolnictwo, przetwórstwo, produkcja i turystyka nad jeziorami. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sztumskim firmom zamienić ręczne zamówienia, rozliczenia i rezerwacje w proste przepływy.",
    intro: [
      "Sztum leży między dwoma jeziorami, niedaleko Malborka i Kwidzyna. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, mniejsze zakłady produkcyjne, handel i turystyka.",
      "Wiele firm z powiatu sztumskiego współpracuje z większymi zakładami z Kwidzyna i Malborka.",
    ],
    localContext:
      "Sztumskie firmy są niewielkie, a obowiązków dużo. Automatyzacja zdejmuje z zespołu powtarzalną pracę biurową.",
    whyHere:
      "W Sztumie automatyzacja zbiera zamówienia i rozliczenia w jednym miejscu.",
    industries: [
      ["Rolnictwo i przetwórstwo", "Dostawy, partie i rozliczenia z gospodarstwami."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z Kwidzyna i Malborka."],
      ["Turystyka nad jeziorami", "Rezerwacje, zaliczki i pytania gości."],
      ["Handel", "Zamówienia z telefonu i maila, stany i faktury."],
    ],
    processes: [
      ["Zbieranie zamówień", "Zamówienia z różnych kanałów w jednej liście."],
      ["Rozliczenia z dostawcami", "Zestawienia tworzone automatycznie."],
      ["Rezerwacje", "Rezerwacja z potwierdzeniem i zaliczką."],
      ["Faktura", "Faktura tworzona z danych zamówienia."],
    ],
    faq: [
      ["Czy pracujecie z firmami ze Sztumu współpracującymi z zakładami z Kwidzyna?", "Tak. Zamówienia, dokumentacja i rozliczenia dla odbiorców przemysłowych."],
      ["Czy automatyzujecie obiekty turystyczne nad jeziorami Sztumu?", "Tak. Rezerwacje, zaliczki i pytania gości."],
      ["Czy automatyzacja ma sens w małej firmie ze Sztumu?", "Tak. W małych zespołach, takich jak wiele firm w Sztumie, każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy musimy spotykać się osobiście?", "Nie. Pracujemy zdalnie."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "lebork",
    name: "Lębork",
    nameGenitive: "Lęborka",
    nameLocative: "Lęborku",
    nearbyCitySlugs: ["slupsk", "puck", "wejherowo", "bytow", "gdansk"],
    metaDescription:
      "Automatyzacja procesów dla firm z Lęborka: produkcja, przetwórstwo, turystyka w Łebie, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy lęborskim zakładom i firmom turystycznym z okolic Łeby uporządkować zamówienia i rezerwacje.",
    intro: [
      "Lębork jest ośrodkiem przemysłowym i handlowym między Trójmiastem a Słupskiem. Działają tu zakłady produkcyjne i przetwórcze, a pobliska Łeba z Słowińskim Parkiem Narodowym przyciąga latem tłumy turystów.",
      "Lęborskie firmy produkcyjne obsługują odbiorców z kraju i zagranicy, a firmy turystyczne z okolicy mają krótki, bardzo intensywny sezon.",
    ],
    localContext:
      "Lęborskie firmy mają ograniczony dostęp do specjalistów i konkurują o pracowników z Trójmiastem.",
    whyHere:
      "W Lęborku automatyzacja pozwala obsłużyć więcej zamówień i rezerwacji tym samym zespołem.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z kraju i zagranicy."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości."],
      ["Turystyka w Łebie", "Rezerwacje pensjonatów i kempingów, zaliczki i pytania gości."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "Zamówienie z maila odczytane i przygotowane w systemie."],
      ["Dokumentacja partii", "Dane partii i dokumenty jakości zebrane dla każdej wysyłki."],
      ["Rezerwacje w sezonie", "Rezerwacja z zaliczką, potwierdzeniem i przypomnieniem."],
      ["Raport sprzedaży", "Sprzedaż według klientów i produktów."],
    ],
    faq: [
      ["Czy pracujecie z zakładami produkcyjnymi z Lęborka?", "Tak. Zamówienia, dokumentacja i wysyłki."],
      ["Czy automatyzujecie pensjonaty w Łebie?", "Tak. Rezerwacje z kilku portali, zaliczki i pytania gości."],
      ["Czy lęborska firma potrzebuje działu IT?", "Nie. Wystarczy osoba, która zna proces."],
      ["Czy małą firmę z Lęborka stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność dla firmy z Lęborka oceniamy razem na konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "bytow",
    name: "Bytów",
    nameGenitive: "Bytowa",
    nameLocative: "Bytowie",
    nearbyCitySlugs: ["slupsk", "koscierzyna", "lebork", "chojnice", "czluchow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Bytowa: produkcja stolarki okiennej i jej dostawcy, przemysł drzewny, transport. Konsultacja 30 min.",
    heroLead:
      "Pomagamy bytowskim dostawcom, przewoźnikom i zakładom uporządkować zamówienia, produkcję i wysyłki.",
    intro: [
      "Bytów jest siedzibą jednego z największych w Europie producentów okien i drzwi. Wokół niego działają dostawcy komponentów, firmy transportowe i usługowe, a w regionie rozwinięty jest też przemysł drzewny.",
      "Produkcja stolarki to zamówienia na wymiar, z wieloma wariantami i terminami. Dostawcy i przewoźnicy muszą nadążać za tempem dużego zakładu.",
    ],
    localContext:
      "Bytowskie firmy transportowe wożą okna i drzwi do klientów w całej Europie. Dokumenty przewozowe, trasy i rozliczenia kursów zajmują biuru dużo czasu.",
    whyHere:
      "W Bytowie automatyzacja porządkuje zamówienia, dokumenty i rozliczenia kursów, żeby firmy nadążały za dużym odbiorcą.",
    industries: [
      ["Stolarka okienna i drzwiowa", "Zamówienia na wymiar, warianty i terminy produkcji."],
      ["Dostawcy komponentów", "Zamówienia od producenta, harmonogramy i dokumentacja dostaw."],
      ["Transport międzynarodowy", "Zlecenia, dokumenty przewozowe i rozliczenia kursów."],
      ["Przemysł drzewny", "Zamówienia, terminy i wysyłki."],
    ],
    processes: [
      ["Zamówienie na wymiar", "Wymiary i warianty trafiają do zlecenia bez przepisywania."],
      ["Harmonogram dostaw", "Zmiany w planie odbiorcy aktualizują produkcję i transport."],
      ["Dokumenty przewozowe", "Dokumenty dla przewozów międzynarodowych tworzone z danych zlecenia."],
      ["Rozliczenie kursu", "Zamknięty kurs uruchamia fakturę w walucie klienta."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami producentów okien z Bytowa?", "Tak. Zamówienia, harmonogramy i dokumentacja dostaw."],
      ["Czy automatyzujecie firmy transportowe wożące stolarkę po Europie?", "Tak. Zlecenia, dokumenty przewozowe i rozliczenia kursów w różnych walutach."],
      ["Czy bytowska firma musi wymieniać system?", "Zwykle nie. Łączymy to, czego już używacie."],
      ["Jaki jest pierwszy krok dla firmy z Bytowa?", "Krótka rozmowa online o tym, co zabiera waszemu zespołowi w Bytowie najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "chojnice",
    name: "Chojnice",
    nameGenitive: "Chojnic",
    nameLocative: "Chojnicach",
    nearbyCitySlugs: ["czluchow", "bytow", "koscierzyna", "bydgoszcz", "slupsk"],
    metaDescription:
      "Automatyzacja procesów dla firm z Chojnic: produkcja, przetwórstwo, turystyka w Borach Tucholskich, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy chojnickim zakładom, firmom handlowym i turystycznym uporządkować zamówienia, dostawy i rezerwacje.",
    intro: [
      "Chojnice są bramą do Borów Tucholskich i ważnym ośrodkiem południowo-zachodniego Pomorza. Lokalną gospodarkę tworzą zakłady produkcyjne, przetwórstwo spożywcze, handel i turystyka.",
      "Chojnickie firmy obsługują odbiorców z Pomorza, Kujaw i Wielkopolski. Zamówienia i dokumenty przychodzą z wielu kierunków.",
    ],
    localContext:
      "Chojnice są oddalone od dużych miast, więc firmy muszą radzić sobie z mniejszym dostępem do specjalistów i usług IT.",
    whyHere:
      "W Chojnicach automatyzacja pozwala małemu zespołowi obsłużyć klientów z trzech regionów bez rozbudowy biura.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z Pomorza i Kujaw."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości."],
      ["Turystyka w Borach Tucholskich", "Rezerwacje ośrodków, spływów i wypożyczalni."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "Zamówienie z maila trafia do systemu po automatycznym odczycie."],
      ["Dostawy surowca", "Każda dostawa zapisana raz trafia do magazynu i rozliczeń."],
      ["Rezerwacje spływów i noclegów", "Rezerwacja z płatnością i przypomnieniem."],
      ["Raport miesięczny", "Sprzedaż, koszty i należności w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z zakładami produkcyjnymi z Chojnic?", "Tak. Zamówienia, zlecenia i wysyłki."],
      ["Czy automatyzujecie ośrodki i wypożyczalnie w Borach Tucholskich?", "Tak. Rezerwacje, płatności i odpowiedzi na pytania gości."],
      ["Chojnice są daleko od dużych miast. Czy to przeszkadza we współpracy?", "Nie. Pracujemy zdalnie, więc odległość nie wpływa na zakres ani tempo projektu."],
      ["Ile kosztuje wdrożenie w firmie z Chojnic?", "Wycenę pierwszego etapu przygotowujemy po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "czluchow",
    name: "Człuchów",
    nameGenitive: "Człuchowa",
    nameLocative: "Człuchowie",
    nearbyCitySlugs: ["chojnice", "bytow", "slupsk", "koszalin", "bydgoszcz"],
    metaDescription:
      "Automatyzacja procesów dla firm z Człuchowa: rolnictwo, przemysł drzewny, produkcja i turystyka nad jeziorami. Konsultacja 30 min.",
    heroLead:
      "Pomagamy człuchowskim firmom uporządkować zamówienia, dostawy i rozliczenia.",
    intro: [
      "Człuchów leży na Pojezierzu Krajeńskim, niedaleko Chojnic. Lokalną gospodarkę tworzą rolnictwo, przemysł drzewny, zakłady produkcyjne, handel i turystyka nad jeziorami.",
      "Małe i średnie firmy z Człuchowa obsługują odbiorców z Pomorza i sąsiednich regionów przy niewielkich zespołach.",
    ],
    localContext:
      "Człuchowskie firmy często działają rodzinnie. Zamówienia i rozliczenia prowadzi się ręcznie, co przy większej liczbie klientów zaczyna spowalniać pracę.",
    whyHere:
      "W Człuchowie automatyzacja zbiera zamówienia w jednym miejscu i przygotowuje dokumenty za zespół.",
    industries: [
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy i wysyłki."],
      ["Rolnictwo", "Rozliczenia dostaw i terminy płatności."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z Pomorza."],
      ["Turystyka nad jeziorami", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Zamówienie z wymiarami", "Formularz zamówienia trafia prosto do planu produkcji."],
      ["Rozliczenia z dostawcami", "Zestawienia dostaw tworzone automatycznie."],
      ["Faktura po wydaniu", "Wydanie towaru uruchamia fakturę."],
      ["Należności", "Przypomnienia o płatnościach przed terminem."],
    ],
    faq: [
      ["Czy pracujecie z zakładami drzewnymi z Człuchowa?", "Tak. Zamówienia z wymiarami, zlecenia i wysyłki."],
      ["Czy człuchowska firma rodzinna może zacząć małym krokiem?", "Tak. Zaczynamy od jednego procesu, żeby szybko odczuć efekt."],
      ["Czy automatyzujecie obiekty turystyczne na Pojezierzu Krajeńskim?", "Tak. Rezerwacje, zaliczki i pytania gości."],
      ["Czy firma z Człuchowa może współpracować z wami całkowicie zdalnie?", "Tak. Z firmami z Człuchowa rozmowy, przegląd procesu i wdrożenie prowadzimy online, na waszych kontach w narzędziach, których już używacie."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),
];
