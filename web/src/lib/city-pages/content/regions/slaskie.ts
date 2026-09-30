import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "śląskie", regionCluster: "slask" } as const;

export const slaskieRegion = region({
  slug: "slaskie",
  intro: [
    "Województwo śląskie to najbardziej uprzemysłowiony region Polski i największa aglomeracja w kraju. Katowice, Gliwice, Sosnowiec, Tychy i kilkanaście innych miast tworzą Górnośląsko-Zagłębiowską Metropolię, w której zakłady produkcyjne, centra logistyczne i biura sąsiadują ze sobą.",
    "Gospodarka regionu przeszła długą drogę od górnictwa i hutnictwa do motoryzacji, produkcji maszyn, IT i usług biznesowych. Fabryki samochodów w Tychach i Gliwicach, zakłady w Katowickiej Specjalnej Strefie Ekonomicznej i skrzyżowanie autostrad A1 i A4 przyciągnęły setki dostawców i firm logistycznych.",
    "Na południu regionu Bielsko-Biała, Cieszyn i Żywiec łączą przemysł z turystyką w Beskidach, a na północy Częstochowa jest ośrodkiem przemysłu i ruchu pielgrzymkowego. Firmy z tych części województwa mają inne potrzeby niż zakłady z centrum aglomeracji.",
    "Z firmami ze Śląska pracujemy zdalnie. Nasza siedziba jest we Wrocławiu, dwie godziny drogi autostradą A4, więc warsztat na miejscu organizujemy bez problemu, gdy przyspiesza projekt.",
  ],
  industries: [
    ["Motoryzacja i dostawcy", "Harmonogramy dostaw, raporty jakości i dokumentacja partii dla fabryk w Tychach, Gliwicach i Bielsku-Białej."],
    ["Produkcja maszyn i metalu", "Zlecenia, materiały, raporty zmianowe i dokumentacja techniczna w jednym przepływie."],
    ["Logistyka przy A1 i A4", "Awizacje, statusy dostaw i dokumenty przewozowe w centrach dystrybucyjnych aglomeracji."],
    ["Usługi dla przemysłu", "Karty pracy, protokoły i rozliczenia firm remontowych, serwisowych i energetycznych."],
    ["Usługi biznesowe i IT", "Obieg dokumentów, onboarding i raporty w centrach usług i firmach technologicznych."],
  ],
  faq: [
    ["Czy przyjeżdżacie do firm na Śląsku?", "Tak, gdy spotkanie na miejscu przyspiesza projekt. Z Wrocławia do Katowic jedziemy około dwóch godzin, a większość pracy i tak prowadzimy zdalnie."],
    ["Czy pracujecie z dostawcami branży motoryzacyjnej?", "Tak. Najczęściej automatyzujemy przyjmowanie harmonogramów od odbiorców, raporty jakości i dokumentację dostaw."],
    ["Czy łączycie systemy w firmach z kilkoma zakładami?", "Tak. W aglomeracji to częsta sytuacja: kilka lokalizacji, różne systemy i raporty składane ręcznie. Łączymy dane w jednym miejscu."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji. Wskażemy proces, którego automatyzacja da najszybszy efekt."],
  ],
});

export const slaskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "katowice",
    name: "Katowice",
    nameGenitive: "Katowic",
    nameLocative: "Katowicach",
    nearbyCitySlugs: ["sosnowiec", "gliwice", "tarnowskie-gory", "mikolow", "bedzin", "tychy", "chorzow"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Katowic: produkcja, logistyka, usługi dla przemysłu i centra usług biznesowych. Konsultacja 30 min.",
    heroLead:
      "Pomagamy katowickim firmom przemysłowym, logistycznym i usługowym połączyć zakłady, magazyny i biuro jednym przepływem danych. Bez przepisywania i raportów składanych ręcznie.",
    intro: [
      "Katowice są centrum Górnośląsko-Zagłębiowskiej Metropolii i jej największym rynkiem pracy. W mieście mają siedziby grupy przemysłowe, działają centra usług biznesowych, firmy IT, dystrybutorzy i setki firm obsługujących przemysł całego regionu.",
      "Wiele katowickich firm ma kilka lokalizacji: zakład, magazyn, biuro, czasem oddziały w innych miastach aglomeracji. Dane o zamówieniach, stanach i realizacji trzeba wtedy zbierać z kilku systemów i arkuszy. Automatyzacja łączy je w jednym miejscu.",
    ],
    localContext:
      "Katowicki rynek pracy jest konkurencyjny, a specjaliści od danych i systemów są drodzy. Firmy szukają rozwiązań, które zdejmą z zespołu powtarzalną pracę bez budowania własnego działu IT.",
    whyHere:
      "W Katowicach automatyzacja pozwala firmie z kilkoma lokalizacjami pracować na jednych, aktualnych danych, a zespołowi zająć się klientami zamiast raportami.",
    economy: {
      title: "Czym żyje katowicki biznes",
      paragraphs: [
        "Katowice przeszły drogę od miasta kopalń i hut do metropolii usług. Dziś obok siedzib firm przemysłowych i energetycznych działają tu centra usług wspólnych, software house'y, międzynarodowe targi i kongresy w Międzynarodowym Centrum Kongresowym.",
        "Przemysł nie zniknął, tylko się zmienił. Katowicka Specjalna Strefa Ekonomiczna przyciągnęła do regionu producentów samochodów, maszyn i komponentów, a razem z nimi dostawców i firmy logistyczne działające przy skrzyżowaniu autostrad A1 i A4.",
        "Mniejsze katowickie firmy to w dużej mierze usługi dla przemysłu i biznesu: serwis, automatyka, budownictwo, biura rachunkowe, doradztwo i dystrybucja. Łączy je duża liczba dokumentów i klientów, którzy oczekują szybkiej odpowiedzi.",
      ],
    },
    industries: [
      ["Usługi dla przemysłu", "Zlecenia, karty pracy, protokoły i rozliczenia bez przepisywania danych z papieru."],
      ["Dystrybucja i hurt", "Zamówienia, stany z kilku magazynów i faktury w jednym widoku."],
      ["Centra usług i IT", "Obieg zgłoszeń, onboarding pracowników i raporty dla klientów."],
      ["Biura rachunkowe i doradztwo", "Zbieranie dokumentów od klientów, ich odczyt przez AI i przypomnienia o terminach."],
    ],
    processes: [
      ["Dane z kilku lokalizacji", "Stany, zamówienia i realizacja z zakładów i magazynów zebrane w jednym widoku."],
      ["Dokumenty przychodzące", "AI odczytuje faktury, zamówienia i protokoły i przenosi dane do systemu."],
      ["Onboarding pracownika", "Umowy, dostępy, szkolenia i sprzęt uruchamiane z jednej listy zadań."],
      ["Raport zarządczy", "Sprzedaż, koszty i realizacja odświeżane codziennie, bez sklejania plików."],
    ],
    example: {
      title: "Zamówienie w katowickiej firmie dystrybucyjnej przed i po automatyzacji",
      lead: "Przykład dystrybutora części przemysłowych z dwoma magazynami w aglomeracji. Tak zmienia się droga jednego zamówienia od klienta.",
      rows: [
        ["Zamówienie od klienta", "Mail z PDF, handlowiec przepisuje pozycje do systemu.", "AI odczytuje zamówienie i przygotowuje je w systemie do akceptacji."],
        ["Sprawdzenie dostępności", "Telefon do magazynu albo drugi arkusz ze stanami.", "Stany z obu magazynów widoczne od razu przy zamówieniu."],
        ["Potwierdzenie dla klienta", "Wysyłane ręcznie, często następnego dnia.", "Automatyczne potwierdzenie z terminem dostawy."],
        ["Wydanie i wysyłka", "Magazyn dowiaduje się z maila lub telefonu.", "Zlecenie wydania trafia do magazynu po akceptacji."],
        ["Faktura i należność", "Wystawiana ręcznie po wysyłce, płatności sprawdzane w wyciągu.", "Faktura po wydaniu, przypomnienie o płatności wysyłane automatycznie."],
      ],
    },
    faq: [
      ["Czy macie biuro w Katowicach?", "Nie. Nasza siedziba jest we Wrocławiu. Z firmami z Katowic pracujemy zdalnie, a gdy warsztat na miejscu przyspiesza projekt, przyjeżdżamy. To około dwóch godzin autostradą."],
      ["Czy łączycie systemy w firmie z kilkoma zakładami?", "Tak. Zbieramy dane z różnych systemów i arkuszy w jednym miejscu, żeby zarząd i zespoły pracowały na tych samych liczbach."],
      ["Czy automatyzujecie centra usług i firmy IT?", "Tak. Najczęściej obieg zgłoszeń, onboarding pracowników, raporty dla klientów i obsługę dokumentów."],
      ["Czy wdrażacie AI w obsłudze dokumentów?", "Tak. AI odczytuje faktury, zamówienia i umowy, a automatyzacja przenosi dane do waszych systemów. Człowiek zatwierdza tylko wyjątki."],
      ["Ile kosztuje automatyzacja w firmie z Katowic?", "Zależy od procesu i liczby systemów. Wycenę pierwszego etapu przygotowujemy po bezpłatnej konsultacji, zanim zaczniemy pracę."],
      ["Czy pracujecie z firmami z całej aglomeracji?", "Tak. Pracujemy z firmami z Gliwic, Sosnowca, Tychów, Chorzowa i pozostałych miast metropolii."],
    ],
    services: ["integracje-systemow", "ai-w-obsludze-dokumentow", "automatyzacja-raportow", "automatyzacja-dla-hr", "automatyzacja-dla-logistyki", "audyt-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "gliwice",
    name: "Gliwice",
    nameGenitive: "Gliwic",
    nameLocative: "Gliwicach",
    nearbyCitySlugs: ["zabrze", "katowice", "tarnowskie-gory", "raciborz", "chorzow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Gliwic: motoryzacja, produkcja w strefie ekonomicznej, logistyka przy A1 i A4, firmy technologiczne. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gliwickim dostawcom, zakładom i firmom technologicznym uporządkować zamówienia, raporty i dokumentację.",
    intro: [
      "Gliwice leżą na skrzyżowaniu autostrad A1 i A4 i są jednym z najważniejszych ośrodków przemysłowych regionu. Działa tu fabryka samochodów dostawczych, podstrefa Katowickiej Specjalnej Strefy Ekonomicznej, port śródlądowy i centra logistyczne.",
      "Politechnika Śląska sprawia, że w mieście powstało wiele firm technologicznych i inżynierskich. Obok nich działają setki dostawców i firm usługowych obsługujących przemysł.",
    ],
    localContext:
      "Gliwickie firmy często pracują dla dużych odbiorców z branży motoryzacyjnej i maszynowej. Wymagania dotyczące terminów, jakości i dokumentacji są wysokie, a zespoły biurowe niewielkie.",
    whyHere:
      "W Gliwicach automatyzacja pozwala dostawcy spełnić wymagania dużego odbiorcy bez ręcznego przepisywania harmonogramów i raportów.",
    economy: {
      title: "Czym żyje gliwicki biznes",
      paragraphs: [
        "Motoryzacja, produkcja maszyn i komponentów oraz logistyka to trzon gliwickiego przemysłu. Położenie przy A1 i A4 sprawia, że miasto jest naturalnym miejscem dla centrów dystrybucyjnych obsługujących całe południe Polski.",
        "Druga twarz Gliwic to technologie: firmy IT, automatyki przemysłowej i inżynierskie, często założone przez absolwentów politechniki.",
      ],
    },
    industries: [
      ["Dostawcy motoryzacji", "Harmonogramy dostaw, raporty jakości i dokumentacja partii."],
      ["Produkcja maszyn", "Zlecenia, materiały i dokumentacja techniczna w jednym przepływie."],
      ["Logistyka", "Awizacje, statusy i dokumenty przewozowe."],
      ["Firmy technologiczne", "Obieg zgłoszeń, rozliczenia projektów i onboarding."],
    ],
    processes: [
      ["Harmonogram od odbiorcy", "Zmiany w harmonogramie aktualizują plan produkcji bez przepisywania."],
      ["Raport jakości", "Wyniki kontroli składane w raport dla odbiorcy automatycznie."],
      ["Rozliczenie projektu", "Godziny i koszty z narzędzi zespołu zebrane w jednym zestawieniu."],
      ["Faktura po dostawie", "Potwierdzona dostawa uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami fabryk w Gliwicach?", "Tak. Automatyzujemy harmonogramy, raporty jakości i dokumentację dostaw."],
      ["Czy automatyzujecie firmy IT i inżynierskie?", "Tak. Najczęściej rozliczenia projektów, obieg zgłoszeń i onboarding."],
      ["Czy łączycie się z portalami odbiorców?", "Tak, jeśli portal pozwala na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Czy przyjeżdżacie do Gliwic?", "Pracujemy zdalnie, a na warsztat przyjeżdżamy, gdy przyspiesza projekt."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-dla-logistyki", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  }),

  town({
    ...base,
    slug: "sosnowiec",
    name: "Sosnowiec",
    nameGenitive: "Sosnowca",
    nameLocative: "Sosnowcu",
    nearbyCitySlugs: ["katowice", "bedzin", "dabrowa-gornicza", "zawiercie", "myslowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Sosnowca: handel, logistyka, produkcja, targi i usługi w Zagłębiu Dąbrowskim. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sosnowieckim firmom handlowym, logistycznym i produkcyjnym zamienić ręczne zamówienia i raporty w przepływy, które działają same.",
    intro: [
      "Sosnowiec jest największym miastem Zagłębia Dąbrowskiego. Po zamknięciu kopalń gospodarka miasta oparła się na handlu, logistyce, produkcji i usługach, a centrum wystawiennicze przyciąga targi branżowe z całego kraju.",
      "Położenie w sercu aglomeracji, przy drodze S1 i blisko A4, sprzyja firmom dystrybucyjnym i hurtowniom obsługującym całe południe Polski.",
    ],
    localContext:
      "Sosnowieckie hurtownie i firmy dystrybucyjne obsługują wielu klientów z aglomeracji. Zamówienia przychodzą różnymi kanałami, a stany i należności trzeba pilnować na bieżąco.",
    whyHere:
      "W Sosnowcu automatyzacja zbiera zamówienia z różnych kanałów, pilnuje stanów i przypomina o należnościach, a zespół zajmuje się sprzedażą.",
    economy: {
      title: "Czym żyje sosnowiecki biznes",
      paragraphs: [
        "Handel hurtowy i detaliczny, logistyka i produkcja to dziś największe gałęzie gospodarki Sosnowca. Miasto jest też ośrodkiem akademickim i medycznym.",
        "Centrum wystawiennicze sprawia, że działa tu wiele firm obsługujących targi i wydarzenia: od organizatorów po wykonawców stoisk.",
      ],
    },
    industries: [
      ["Hurt i dystrybucja", "Zamówienia, stany i faktury spięte z magazynem."],
      ["Logistyka", "Awizacje, statusy i dokumenty przewozowe."],
      ["Produkcja", "Zlecenia, materiały i wysyłki w jednym przepływie."],
      ["Targi i wydarzenia", "Zgłoszenia wystawców, wyceny i rozliczenia."],
    ],
    processes: [
      ["Zamówienia z wielu kanałów", "Zamówienia z maila, telefonu i sklepu B2B w jednej liście."],
      ["Stany magazynowe", "Powiadomienie o brakach i automatyczne zamówienie u dostawcy."],
      ["Należności", "Przypomnienia o płatnościach i blokada dla zalegających klientów."],
      ["Zgłoszenia wystawców", "Formularz, wycena i umowa w jednym przepływie."],
    ],
    faq: [
      ["Czy pracujecie z hurtowniami z Sosnowca?", "Tak. Automatyzujemy zamówienia, stany i przypomnienia o należnościach."],
      ["Czy automatyzujecie obsługę wystawców targowych?", "Tak. Zgłoszenia, wyceny, umowy i faktury mogą działać w jednym przepływie."],
      ["Czy trzeba zmieniać system?", "Zwykle nie. Łączymy narzędzia, które już macie."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "tychy",
    name: "Tychy",
    nameGenitive: "Tychów",
    nameLocative: "Tychach",
    nearbyCitySlugs: ["katowice", "bierun", "pszczyna", "mikolow", "myslowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Tychów: dostawcy fabryki samochodów, produkcja w strefie ekonomicznej, logistyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy tyskim dostawcom motoryzacji, zakładom i firmom usługowym uporządkować harmonogramy, dokumenty i raporty.",
    intro: [
      "Tychy to miasto fabryki samochodów osobowych i jednego z najbardziej znanych polskich browarów. W podstrefie Katowickiej Specjalnej Strefy Ekonomicznej działają dostawcy komponentów i firmy logistyczne.",
      "Dostawcy fabryki samochodów pracują według precyzyjnych harmonogramów. Każda zmiana w planie odbiorcy musi szybko trafić do produkcji, magazynu i transportu.",
    ],
    localContext:
      "Tyskie firmy często konkurują o pracowników z dużymi zakładami. Zespoły biurowe są małe, a wymagania odbiorców rosną.",
    whyHere:
      "W Tychach automatyzacja przenosi zmiany z harmonogramów odbiorcy do planu produkcji i dokumentów bez ręcznej pracy.",
    economy: {
      title: "Czym żyje tyski biznes",
      paragraphs: [
        "Motoryzacja i jej dostawcy są największą gałęzią tyskiego przemysłu. Obok nich działają zakłady spożywcze, firmy logistyczne i usługowe.",
        "Tychy są też dużym ośrodkiem mieszkaniowym aglomeracji, więc rozwinięty jest sektor usług dla mieszkańców: handel, zdrowie, edukacja i budownictwo.",
      ],
    },
    industries: [
      ["Dostawcy motoryzacji", "Harmonogramy, raporty jakości i dokumentacja dostaw."],
      ["Produkcja w strefie", "Zlecenia, materiały i raporty zmianowe."],
      ["Logistyka", "Awizacje, sloty i dokumenty przewozowe."],
      ["Usługi dla mieszkańców", "Zapisy, przypomnienia i płatności online."],
    ],
    processes: [
      ["Harmonogram dostaw", "Zmiany od odbiorcy aktualizują plan bez przepisywania."],
      ["Braki materiałowe", "Powiadomienie, gdy stan komponentu spada poniżej ustalonego poziomu."],
      ["Raport jakości", "Wyniki kontroli zebrane w raport dla odbiorcy."],
      ["Dokumenty wysyłki", "Zakończona dostawa uruchamia dokumenty i fakturę."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami fabryki w Tychach?", "Tak. Automatyzujemy harmonogramy, raporty jakości i dokumentację dostaw."],
      ["Czy łączycie się z systemami odbiorców?", "Tak, jeśli pozwalają na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Czy pracujecie zdalnie?", "Tak, a przy większym projekcie przyjeżdżamy na warsztat."],
      ["Ile trwa pierwsze wdrożenie?", "Wąski proces zwykle kilka tygodni. Termin podajemy po przeglądzie."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-dla-logistyki", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "bielsko-biala",
    name: "Bielsko-Biała",
    nameGenitive: "Bielska-Białej",
    nameLocative: "Bielsku-Białej",
    nearbyCitySlugs: ["tychy", "cieszyn", "zywiec", "pszczyna", "katowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Bielska-Białej: motoryzacja, przemysł lotniczy i maszynowy, IT, handel i turystyka w Beskidach. Konsultacja 30 min.",
    heroLead:
      "Pomagamy bielskim zakładom, firmom technologicznym i handlowym połączyć zamówienia, produkcję i biuro w jeden przepływ danych.",
    intro: [
      "Bielsko-Biała jest stolicą Podbeskidzia i jednym z najbardziej przedsiębiorczych miast w Polsce. Tradycje włókiennicze i motoryzacyjne przeszły w nowoczesny przemysł: produkcję silników i komponentów, szybowców, maszyn oraz elektroniki.",
      "Obok przemysłu rozwija się sektor IT i usług, a bliskość Beskidów przyciąga turystów, dla których działają hotele, wypożyczalnie i firmy turystyczne.",
    ],
    localContext:
      "Bielskie firmy to często rodzinne przedsiębiorstwa, które urosły do rozmiarów średnich zakładów, ale nadal pracują na arkuszach i poczcie. W którymś momencie przestaje to wystarczać.",
    whyHere:
      "W Bielsku-Białej automatyzacja pomaga firmie, która urosła, przejść z arkuszy na uporządkowany przepływ danych bez rewolucji w systemach.",
    economy: {
      title: "Czym żyje bielski biznes",
      paragraphs: [
        "Motoryzacja, przemysł lotniczy i maszynowy, elektronika i produkcja tekstyliów tworzą przemysłowe zaplecze miasta. Wiele firm to dostawcy dla odbiorców z Polski i zagranicy.",
        "Podbeskidzie słynie z przedsiębiorczości: dużo tu firm rodzinnych, handlowych i usługowych, a turystyka w Szczyrku i okolicach napędza branżę hotelarską.",
      ],
    },
    industries: [
      ["Motoryzacja i lotnictwo", "Zlecenia, dokumentacja techniczna i raporty jakości."],
      ["Firmy rodzinne w fazie wzrostu", "Z arkuszy do uporządkowanych danych i automatycznych raportów."],
      ["IT i usługi", "Rozliczenia projektów, zgłoszenia i onboarding."],
      ["Turystyka w Beskidach", "Rezerwacje, zapytania i płatności obsługiwane automatycznie."],
    ],
    processes: [
      ["Zamówienia i zlecenia", "Zamówienie od klienta zamienia się w zlecenie z terminem i materiałami."],
      ["Dokumentacja techniczna", "Karty, certyfikaty i raporty składane z danych produkcji."],
      ["Baza klientów i ofert", "Arkusze zamienione na bazę danych z historią i przypomnieniami."],
      ["Rezerwacje", "Rezerwacja uruchamia potwierdzenie, płatność i przypomnienie."],
    ],
    faq: [
      ["Czy pomagacie firmom przejść z arkuszy na bazę danych?", "Tak. Projektujemy bazę na waszych danych, przenosimy je i automatyzujemy to, co dziś robi się ręcznie."],
      ["Czy pracujecie z firmami z branży lotniczej i motoryzacyjnej?", "Tak. Automatyzujemy zlecenia, dokumentację techniczną i raporty jakości."],
      ["Czy automatyzujecie hotele w Beskidach?", "Tak. Rezerwacje, odpowiedzi na pytania gości i płatności."],
      ["Czy pracujecie zdalnie?", "Tak, większość pracy prowadzimy zdalnie."],
    ],
    services: ["automatyzacja-w-produkcji", "projektowanie-baz-danych", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-raportow", "chatbot-ai-dla-firmy"],
  }),

  town({
    ...base,
    slug: "czestochowa",
    name: "Częstochowa",
    nameGenitive: "Częstochowy",
    nameLocative: "Częstochowie",
    nearbyCitySlugs: ["klobuck", "lubliniec", "myszkow", "zawiercie", "katowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Częstochowy: przemysł metalowy, produkcja, turystyka pielgrzymkowa, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy częstochowskim zakładom, firmom handlowym i usługowym uporządkować zamówienia, rezerwacje i dokumenty.",
    intro: [
      "Częstochowa jest największym miastem północnej części województwa. Ma długą tradycję hutnictwa i przemysłu metalowego, a dziś rozwija się także w produkcji, przetwórstwie i handlu. Jasna Góra przyciąga pielgrzymów z całego świata.",
      "Firmy produkcyjne i handlowe z Częstochowy obsługują klientów z całej Polski, a branża turystyczna działa w rytmie pielgrzymek i świąt.",
    ],
    localContext:
      "Częstochowskie zakłady metalowe i ich dostawcy pracują z wymagającymi odbiorcami. Hotele i firmy obsługujące pielgrzymów mają z kolei duże grupowe rezerwacje i sezonowe szczyty.",
    whyHere:
      "W Częstochowie automatyzacja pomaga zakładom i branży turystycznej: porządkuje zamówienia, rezerwacje grupowe i dokumenty.",
    economy: {
      title: "Czym żyje częstochowski biznes",
      paragraphs: [
        "Przemysł metalowy, produkcja i przetwórstwo spożywcze są tradycyjną siłą Częstochowy. Wokół nich działają dostawcy, firmy transportowe i usługowe.",
        "Ruch pielgrzymkowy napędza hotele, gastronomię i biura podróży. To branże, w których rezerwacje grupowe i ich rozliczanie zajmują dużo czasu.",
      ],
    },
    industries: [
      ["Przemysł metalowy", "Zlecenia, materiały, atesty i wysyłki w jednym przepływie."],
      ["Produkcja i przetwórstwo", "Zamówienia, partie i dokumenty jakości."],
      ["Hotele i turystyka", "Rezerwacje grupowe, zaliczki i rozliczenia."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Atesty i certyfikaty", "Dokumenty do wysyłki składane z danych produkcji."],
      ["Rezerwacje grupowe", "Zapytanie, oferta, zaliczka i lista uczestników w jednym przepływie."],
      ["Zamówienia", "Zamówienie z maila trafia do systemu po automatycznym odczycie."],
      ["Raport sprzedaży", "Sprzedaż i należności bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z zakładami metalowymi?", "Tak. Automatyzujemy zlecenia, atesty i dokumenty wysyłkowe."],
      ["Czy automatyzujecie rezerwacje grupowe?", "Tak. Zapytania, oferty, zaliczki i listy uczestników mogą działać w jednym przepływie."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Od czego zacząć?", "Od bezpłatnej konsultacji i wyboru jednego procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "zabrze",
    name: "Zabrze",
    nameGenitive: "Zabrza",
    nameLocative: "Zabrzu",
    nearbyCitySlugs: ["gliwice", "chorzow", "katowice", "rybnik", "ruda-slaska"],
    metaDescription:
      "Automatyzacja procesów dla firm z Zabrza: produkcja, usługi medyczne, turystyka poprzemysłowa, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy zabrzańskim zakładom, placówkom medycznym i firmom usługowym uporządkować zlecenia, zapisy i dokumenty.",
    intro: [
      "Zabrze było jednym z centrów górnictwa, a dziś jest znane z turystyki poprzemysłowej, medycyny i produkcji. Działają tu specjalistyczne szpitale, zakłady przemysłowe i firmy usługowe dla całej aglomeracji.",
      "Placówki medyczne i firmy usługowe obsługują dużo pacjentów i klientów. Zapisy, przypomnienia i dokumenty zajmują czas personelu, który mógłby poświęcić go ludziom.",
    ],
    localContext:
      "Zabrzańskie firmy produkcyjne pracują dla odbiorców z aglomeracji, a sektor medyczny obsługuje pacjentów z całego regionu. Oba potrzebują porządku w dokumentach.",
    whyHere:
      "W Zabrzu automatyzacja odciąża recepcje, biura i działy obsługi z powtarzalnych zadań.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki w jednym przepływie."],
      ["Placówki medyczne", "Zapisy, przypomnienia i dokumenty pacjentów."],
      ["Turystyka poprzemysłowa", "Rezerwacje wycieczek i grup, płatności."],
      ["Usługi", "Zgłoszenia, terminy i rozliczenia."],
    ],
    processes: [
      ["Przypomnienia o wizytach", "Pacjent potwierdza lub przekłada wizytę jednym kliknięciem."],
      ["Rezerwacje grup", "Rezerwacja wycieczki z automatycznym potwierdzeniem i fakturą."],
      ["Zlecenia produkcyjne", "Zamówienie zamienia się w zlecenie z terminem."],
      ["Raport miesięczny", "Sprzedaż i koszty w jednym zestawieniu."],
    ],
    faq: [
      ["Czy automatyzujecie placówki medyczne?", "Tak. Zapisy, przypomnienia i formularze. Z danymi pacjentów pracujemy zgodnie z RODO."],
      ["Czy pracujecie z zakładami produkcyjnymi?", "Tak. Automatyzujemy zamówienia, raporty i dokumentację."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Czy trzeba zmieniać system?", "Zwykle nie. Łączymy narzędzia, które już macie."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "chorzow",
    name: "Chorzów",
    nameGenitive: "Chorzowa",
    nameLocative: "Chorzowie",
    nearbyCitySlugs: ["katowice", "zabrze", "ruda-slaska", "sosnowiec", "gliwice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Chorzowa: przemysł, handel, organizacja wydarzeń i usługi w centrum aglomeracji. Konsultacja 30 min.",
    heroLead:
      "Pomagamy chorzowskim firmom przemysłowym, handlowym i obsługującym wydarzenia zamienić ręczne zamówienia, rezerwacje i rozliczenia w przepływy, które działają same.",
    intro: [
      "Chorzów leży w samym centrum aglomeracji, obok Katowic. Ma tradycje hutnicze, a dziś jest znany ze Stadionu Śląskiego i Parku Śląskiego, które przyciągają koncerty, mecze i wydarzenia.",
      "Lokalne firmy to zakłady przemysłowe, handel, usługi i firmy obsługujące wydarzenia: catering, technika, ochrona, transport.",
    ],
    localContext:
      "Chorzowskie firmy obsługujące wydarzenia pracują w rytmie imprez, kiedy w krótkim czasie trzeba przygotować oferty, grafiki, umowy i rozliczenia.",
    whyHere:
      "W Chorzowie automatyzacja przyspiesza przygotowanie ofert i rozliczeń wydarzeń, a w zakładach porządkuje zamówienia i dokumenty.",
    industries: [
      ["Przemysł", "Zlecenia, materiały i dokumentacja."],
      ["Obsługa wydarzeń", "Oferty, grafiki ekip i rozliczenia imprez."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zapisy, terminy i płatności."],
    ],
    processes: [
      ["Oferta na wydarzenie", "Formularz zapytania zamienia się w ofertę z szablonu."],
      ["Grafik ekipy", "Dostępność ludzi i sprzętu w jednym kalendarzu."],
      ["Rozliczenie imprezy", "Koszty, godziny i faktury zebrane automatycznie."],
      ["Zamówienia", "Zamówienia z różnych kanałów w jednej liście."],
    ],
    faq: [
      ["Czy automatyzujecie firmy obsługujące wydarzenia?", "Tak. Oferty, grafiki, umowy i rozliczenia mogą działać w jednym przepływie."],
      ["Czy pracujecie z zakładami przemysłowymi?", "Tak. Automatyzujemy zlecenia, raporty i dokumenty."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Ile to kosztuje?", "Zależy od procesu. Wycenę dostajecie po konsultacji."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "wdrozenia-airtable", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "dabrowa-gornicza",
    name: "Dąbrowa Górnicza",
    nameGenitive: "Dąbrowy Górniczej",
    nameLocative: "Dąbrowie Górniczej",
    nearbyCitySlugs: ["sosnowiec", "katowice", "myslowice", "czestochowa", "tychy"],
    metaDescription:
      "Automatyzacja procesów dla firm z Dąbrowy Górniczej: hutnictwo i jego dostawcy, logistyka, produkcja i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy dąbrowskim podwykonawcom huty, zakładom i firmom logistycznym uporządkować zlecenia, protokoły i rozliczenia.",
    intro: [
      "Dąbrowa Górnicza jest miastem jednej z największych hut stali w Polsce. Wokół niej działa sieć firm remontowych, serwisowych, transportowych i dostawców, a strefa ekonomiczna przyciągnęła też zakłady z innych branż.",
      "Miasto zmienia się także dzięki Pogoriom, które przyciągają turystów i mieszkańców aglomeracji.",
    ],
    localContext:
      "Dąbrowskie firmy usługowe pracują według procedur dużego zakładu przemysłowego. Karty pracy, protokoły i uprawnienia pracowników generują dużo dokumentów.",
    whyHere:
      "W Dąbrowie Górniczej automatyzacja skraca drogę od wykonanej pracy do faktury i pilnuje uprawnień pracowników.",
    industries: [
      ["Usługi dla hutnictwa", "Karty pracy, protokoły i rozliczenia."],
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Logistyka", "Awizacje, statusy i dokumenty przewozowe."],
      ["Turystyka i rekreacja", "Rezerwacje i płatności."],
    ],
    processes: [
      ["Karta pracy", "Dane z prac wpisywane w telefonie trafiają od razu do biura."],
      ["Protokół odbioru", "Dokument generowany z danych zlecenia."],
      ["Uprawnienia", "Przypomnienia o ważności szkoleń i badań."],
      ["Faktura", "Kompletny protokół uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami huty?", "Tak. Automatyzujemy karty pracy, protokoły i rozliczenia."],
      ["Czy pilnujecie uprawnień pracowników?", "Tak. System przypomina o kończących się szkoleniach i badaniach."],
      ["Czy pracujecie zdalnie?", "Tak, a w razie potrzeby przyjeżdżamy na warsztat."],
      ["Od czego zacząć?", "Od bezpłatnej konsultacji i wyboru jednego procesu."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-hr", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "rybnik",
    name: "Rybnik",
    nameGenitive: "Rybnika",
    nameLocative: "Rybniku",
    nearbyCitySlugs: ["gliwice", "wodzislaw-slaski", "raciborz", "katowice", "zabrze"],
    metaDescription:
      "Automatyzacja procesów dla firm z Rybnika: energetyka i górnictwo, usługi dla przemysłu, produkcja, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy rybnickim firmom usługowym, produkcyjnym i handlowym odejść od papierowych kart pracy i ręcznych rozliczeń.",
    intro: [
      "Rybnik jest stolicą Rybnickiego Okręgu Węglowego. Energetyka i górnictwo wciąż są ważnymi pracodawcami, ale region przechodzi transformację: rośnie znaczenie produkcji, handlu i usług.",
      "Wiele rybnickich firm to podwykonawcy dużych zakładów, którzy dziś szukają nowych klientów. Porządek w dokumentach i szybkie rozliczenia pomagają w tej zmianie.",
    ],
    localContext:
      "Rybnickie firmy usługowe przez lata pracowały dla jednego dużego odbiorcy. Wejście na nowe rynki oznacza więcej klientów, ofert i dokumentów przy tym samym zespole.",
    whyHere:
      "W Rybniku automatyzacja pomaga firmie obsłużyć więcej klientów bez rozbudowy biura, co jest ważne w czasie zmian w regionie.",
    economy: {
      title: "Czym żyje rybnicki biznes",
      paragraphs: [
        "Elektrownie, kopalnie i firmy, które je obsługują, przez dekady tworzyły gospodarkę okręgu. Dziś obok nich rozwijają się produkcja, handel, usługi i firmy budowlane.",
        "Bliskość granicy z Czechami i autostrady A1 sprzyja handlowi i logistyce.",
      ],
    },
    industries: [
      ["Usługi dla energetyki i górnictwa", "Karty pracy, protokoły i rozliczenia zleceń."],
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Budownictwo", "Wyceny, harmonogramy i rozliczenia."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Oferty dla nowych klientów", "Zapytanie zamienia się w ofertę z szablonu w kilka minut."],
      ["Karta pracy", "Dane z terenu trafiają do biura bez papieru."],
      ["Rozliczenia", "Protokół uruchamia fakturę i zestawienie dla klienta."],
      ["Raport", "Przychody według klientów i zleceń w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z firmami usługowymi dla przemysłu?", "Tak. Automatyzujemy karty pracy, protokoły, oferty i rozliczenia."],
      ["Czy pomagacie w pozyskiwaniu nowych klientów?", "Pomagamy uporządkować sprzedaż: zapytania, oferty i przypomnienia, żeby żaden kontakt nie przepadł."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Ile trwa wdrożenie?", "Pierwszy proces zwykle kilka tygodni."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "ruda-slaska",
    name: "Ruda Śląska",
    nameGenitive: "Rudy Śląskiej",
    nameLocative: "Rudzie Śląskiej",
    nearbyCitySlugs: ["katowice", "chorzow", "zabrze", "myslowice", "gliwice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Rudy Śląskiej: logistyka przy A4 i DTŚ, produkcja, usługi dla przemysłu i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy rudzkim firmom logistycznym, produkcyjnym i usługowym uporządkować zlecenia, dokumenty i rozliczenia.",
    intro: [
      "Ruda Śląska leży między Katowicami, Zabrzem i Chorzowem, przy autostradzie A4 i Drogowej Trasie Średnicowej. Górnicze i hutnicze tradycje miasta ustępują dziś logistyce, produkcji i usługom.",
      "Dobre położenie w aglomeracji przyciąga magazyny i firmy dystrybucyjne, które obsługują klientów z całego Śląska.",
    ],
    localContext:
      "Rudzkie firmy logistyczne i usługowe obsługują wielu klientów z aglomeracji. Zlecenia, statusy i dokumenty trzeba przekazywać szybko.",
    whyHere:
      "W Rudzie Śląskiej automatyzacja przyspiesza obsługę zleceń i dokumentów bez dokładania pracy biurowej.",
    industries: [
      ["Logistyka i magazyny", "Awizacje, statusy i dokumenty przewozowe."],
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Usługi dla przemysłu", "Karty pracy, protokoły i rozliczenia."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Zlecenia", "Zlecenie z maila trafia do planu z terminem."],
      ["Status dla klienta", "Klient dostaje informację o statusie automatycznie."],
      ["Dokumenty", "Dokumenty przewozowe i faktury z danych zlecenia."],
      ["Raport", "Terminowość i przychody w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z firmami logistycznymi?", "Tak. Automatyzujemy awizacje, statusy i dokumenty."],
      ["Czy trzeba zmieniać system?", "Zwykle nie. Łączymy narzędzia, które już macie."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji i wyboru jednego procesu."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "myslowice",
    name: "Mysłowice",
    nameGenitive: "Mysłowic",
    nameLocative: "Mysłowicach",
    nearbyCitySlugs: ["sosnowiec", "katowice", "dabrowa-gornicza", "tychy", "chorzow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Mysłowic: logistyka przy A4 i S1, produkcja, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy mysłowickim firmom logistycznym, produkcyjnym i handlowym zamienić ręczne dokumenty i statusy w przepływy, które działają same.",
    intro: [
      "Mysłowice leżą na styku Śląska i Zagłębia, przy autostradzie A4 i drodze S1. Dogodny dojazd sprawił, że powstały tu centra logistyczne, zakłady produkcyjne i hurtownie.",
      "Firmy obsługujące łańcuchy dostaw muszą szybko przekazywać informacje: awizacje, statusy, dokumenty. Ręcznie to spowalnia całą pracę.",
    ],
    localContext:
      "Mysłowickie firmy często obsługują kilku dużych klientów, każdy z innymi wymaganiami i formatem danych.",
    whyHere:
      "W Mysłowicach automatyzacja przenosi dane między systemami klientów, magazynu i przewoźników bez ręcznego przepisywania.",
    industries: [
      ["Logistyka", "Awizacje, sloty i dokumenty przewozowe."],
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Hurtownie", "Zamówienia, stany i faktury."],
      ["Usługi", "Zgłoszenia, terminy i rozliczenia."],
    ],
    processes: [
      ["Dane od klientów", "Zamówienia w różnych formatach sprowadzone do jednego."],
      ["Awizacje", "Termin dostawy potwierdzany automatycznie."],
      ["Raport dla klienta", "Terminowość i stany liczone automatycznie."],
      ["Faktury", "Usługi fakturowane na podstawie danych z systemu."],
    ],
    faq: [
      ["Czy łączycie się z systemami magazynowymi?", "Tak, jeśli pozwalają na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Czy pracujecie z hurtowniami?", "Tak. Automatyzujemy zamówienia, stany i należności."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Czy potrzebny jest programista?", "Nie. Rozwiązanie projektujemy tak, żeby zespół umiał je obsługiwać."],
    ],
    services: ["automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "bedzin",
    name: "Będzin",
    nameGenitive: "Będzina",
    nameLocative: "Będzinie",
    nearbyCitySlugs: ["sosnowiec", "dabrowa-gornicza", "katowice", "myslowice", "zawiercie"],
    metaDescription:
      "Automatyzacja procesów dla firm z Będzina: handel, usługi, produkcja i budownictwo w Zagłębiu Dąbrowskim. Konsultacja 30 min.",
    heroLead:
      "Pomagamy będzińskim firmom handlowym, usługowym i produkcyjnym uporządkować zamówienia, zapisy i faktury.",
    intro: [
      "Będzin to jedno z najstarszych miast Zagłębia Dąbrowskiego, z zamkiem górującym nad doliną Czarnej Przemszy. Lokalna gospodarka opiera się na handlu, usługach, budownictwie i mniejszych zakładach produkcyjnych.",
      "W małych i średnich firmach z Będzina zespół jest niewielki, a klientów dużo. Automatyzacja przejmuje powtarzalną pracę.",
    ],
    localContext:
      "Będzińskie firmy obsługują klientów z całego Zagłębia i Katowic. Zapytania i zamówienia przychodzą różnymi kanałami, a potem trzeba je zebrać w jednym miejscu.",
    whyHere:
      "W Będzinie automatyzacja zbiera zapytania i zamówienia, przygotowuje oferty i faktury, a zespół zajmuje się klientami.",
    industries: [
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zapisy, przypomnienia i płatności."],
      ["Budownictwo", "Wyceny, harmonogramy i rozliczenia."],
      ["Produkcja", "Zlecenia i wysyłki."],
    ],
    processes: [
      ["Zapytania", "Zapytania z różnych kanałów w jednej liście."],
      ["Oferty", "Oferta tworzona z szablonu."],
      ["Faktury", "Zakończone zlecenie uruchamia fakturę."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z małymi firmami?", "Tak. Zaczynamy od jednego procesu z jasnym kosztem."],
      ["Czy trzeba zmieniać programy?", "Zwykle nie. Łączymy narzędzia, które już macie."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Od czego zacząć?", "Od bezpłatnej konsultacji i wyboru jednego procesu."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "bierun",
    name: "Bieruń",
    nameGenitive: "Bierunia",
    nameLocative: "Bieruniu",
    nearbyCitySlugs: ["tychy", "katowice", "pszczyna", "mikolow", "myslowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Bierunia: przemysł chemiczny, produkcja, logistyka i usługi pod Tychami. Konsultacja 30 min.",
    heroLead:
      "Pomagamy bieruńskim zakładom i firmom usługowym uporządkować zlecenia, dokumentację i raporty.",
    intro: [
      "Bieruń leży między Tychami a Oświęcimiem. Miasto ma tradycje przemysłu chemicznego, a dziś działają tu także zakłady produkcyjne, firmy logistyczne i usługi dla aglomeracji.",
      "Zakłady chemiczne i produkcyjne pracują według ścisłych wymagań bezpieczeństwa i dokumentacji. Wiele z tych dokumentów przygotowuje się ręcznie.",
    ],
    localContext:
      "Bieruńskie firmy obsługują odbiorców z Tychów, Katowic i Małopolski. Wymagania co do dokumentów i terminów są wysokie.",
    whyHere:
      "W Bieruniu automatyzacja porządkuje dokumentację i raporty, których wymagają odbiorcy i przepisy.",
    industries: [
      ["Przemysł chemiczny", "Dokumentacja partii, karty i raporty."],
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Logistyka", "Dokumenty przewozowe i statusy."],
      ["Usługi", "Zgłoszenia i rozliczenia."],
    ],
    processes: [
      ["Dokumentacja partii", "Dane z produkcji składane w dokument do wysyłki."],
      ["Zamówienia", "Zamówienie z maila trafia do systemu."],
      ["Terminy przeglądów", "Przypomnienia o przeglądach i ważności dokumentów."],
      ["Faktury", "Wysyłka uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z zakładami chemicznymi?", "Tak. Automatyzujemy dokumentację partii, zamówienia i raporty."],
      ["Czy pilnujecie terminów przeglądów?", "Tak. System przypomina o przeglądach i ważności dokumentów."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Ile to kosztuje?", "Zależy od procesu. Wycenę dostajecie przed startem."],
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "cieszyn",
    name: "Cieszyn",
    nameGenitive: "Cieszyna",
    nameLocative: "Cieszynie",
    nearbyCitySlugs: ["bielsko-biala", "zywiec", "pszczyna", "katowice", "rybnik"],
    metaDescription:
      "Automatyzacja procesów dla firm z Cieszyna: handel i usługi z Czechami, produkcja spożywcza, logistyka i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy cieszyńskim firmom obsługiwać klientów z Polski i Czech bez podwójnej pracy nad dokumentami.",
    intro: [
      "Cieszyn leży nad Olzą, która oddziela go od czeskiego Czeskiego Cieszyna. Miasto ma długą tradycję handlu przygranicznego, produkcji spożywczej i usług, a Śląsk Cieszyński przyciąga turystów.",
      "Firmy obsługujące klientów z dwóch krajów pracują w dwóch językach i walutach. Te same dane trzeba wpisywać w kilka dokumentów.",
    ],
    localContext:
      "Cieszyńskie firmy handlowe i usługowe mają klientów po obu stronach granicy. Faktury w złotych i koronach oraz korespondencja w dwóch językach to codzienność.",
    whyHere:
      "W Cieszynie automatyzacja usuwa podwójną pracę przy obsłudze klientów z Polski i Czech.",
    industries: [
      ["Handel przygraniczny", "Zamówienia i faktury w dwóch walutach."],
      ["Produkcja spożywcza", "Zamówienia, partie i wysyłki."],
      ["Logistyka", "Dokumenty dla przewozów międzynarodowych."],
      ["Turystyka", "Rezerwacje i zapytania w kilku językach."],
    ],
    processes: [
      ["Faktury w dwóch walutach", "Faktura w złotych lub koronach tworzona z danych zamówienia."],
      ["Odpowiedzi w języku klienta", "Asystent AI przygotowuje odpowiedź po polsku lub czesku."],
      ["Dokumenty przewozowe", "Dokumenty generowane z danych zlecenia."],
      ["Rezerwacje", "Rezerwacja z potwierdzeniem i płatnością."],
    ],
    faq: [
      ["Czy automatyzujecie obsługę klientów z Czech?", "Tak. Odpowiedzi, oferty i faktury mogą powstawać po czesku."],
      ["Czy faktury mogą być w koronach?", "Tak. Faktura tworzy się w walucie klienta z danych zamówienia."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Od czego zacząć?", "Od bezpłatnej konsultacji i wyboru jednego procesu."],
    ],
    services: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-logistyki", "chatbot-ai-dla-firmy"],
  }),

  town({
    ...base,
    slug: "klobuck",
    name: "Kłobuck",
    nameGenitive: "Kłobucka",
    nameLocative: "Kłobucku",
    nearbyCitySlugs: ["czestochowa", "lubliniec", "myszkow", "zawiercie", "katowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kłobucka: produkcja, przetwórstwo, handel i usługi pod Częstochową. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Kłobucka uporządkować zamówienia, dostawy i faktury, żeby mały zespół nadążał za klientami.",
    intro: [
      "Kłobuck leży na północny zachód od Częstochowy. Powiat łączy rolnictwo z produkcją i przetwórstwem, a wiele lokalnych firm współpracuje z odbiorcami z Częstochowy.",
      "W małych zakładach i hurtowniach jedna osoba często odpowiada za zamówienia, faktury i kontakt z klientami.",
    ],
    localContext:
      "Kłobuckie firmy sprzedają w całym regionie i coraz częściej przez internet. Zamówienia z różnych kanałów trzeba zebrać i rozliczyć.",
    whyHere:
      "W Kłobucku automatyzacja zbiera zamówienia w jednym miejscu i przygotowuje dokumenty za zespół.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Przetwórstwo", "Dostawy, partie i dokumenty."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Zapisy i przypomnienia."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z różnych kanałów w jednej liście."],
      ["Faktury", "Faktura tworzona z danych zamówienia."],
      ["Wysyłki", "Etykieta i powiadomienie dla klienta."],
      ["Raport", "Sprzedaż i należności."],
    ],
    faq: [
      ["Czy pracujecie z firmami z Kłobucka?", "Tak. Pracujemy zdalnie z firmami z całego województwa."],
      ["Czy mała firma może zacząć?", "Tak. Zaczynamy od jednego procesu."],
      ["Czy trzeba zmieniać programy?", "Zwykle nie."],
      ["Ile to kosztuje?", "Wycenę dostajecie po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "lubliniec",
    name: "Lubliniec",
    nameGenitive: "Lublińca",
    nameLocative: "Lublińcu",
    nearbyCitySlugs: ["czestochowa", "klobuck", "tarnowskie-gory", "gliwice", "opole"],
    metaDescription:
      "Automatyzacja procesów dla firm z Lublińca: produkcja, przetwórstwo drewna, handel i usługi na północy Śląska. Konsultacja 30 min.",
    heroLead:
      "Pomagamy lublinieckim zakładom i firmom usługowym zamienić ręczne zamówienia i dokumenty w proste przepływy.",
    intro: [
      "Lubliniec leży na północy województwa, w otoczeniu lasów, między Częstochową a Opolem. Lokalną gospodarkę tworzą produkcja, przetwórstwo drewna, handel i usługi.",
      "Mniejsze zakłady z regionu pracują dla odbiorców z Górnego Śląska i Opolszczyzny. Zamówienia, dokumenty i terminy trzeba pilnować przy niewielkim zespole.",
    ],
    localContext:
      "Lublinieckie firmy konkurują o pracowników z aglomeracją. Każda godzina oszczędzona w biurze ma dla nich wymierną wartość.",
    whyHere:
      "W Lublińcu automatyzacja przejmuje przepisywanie zamówień i przygotowanie dokumentów.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Przetwórstwo drewna", "Zamówienia, wymiary i terminy."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zgłoszenia i rozliczenia."],
    ],
    processes: [
      ["Zamówienia", "Zamówienie z maila trafia do systemu."],
      ["Zlecenia produkcyjne", "Zamówienie zamienia się w zlecenie z terminem."],
      ["Faktury", "Wysyłka uruchamia fakturę."],
      ["Raport", "Sprzedaż i produkcja w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Automatyzujemy zamówienia, zlecenia i dokumenty."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Czy trzeba zmieniać system?", "Zwykle nie. Łączymy narzędzia, które już macie."],
      ["Od czego zacząć?", "Od bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "mikolow",
    name: "Mikołów",
    nameGenitive: "Mikołowa",
    nameLocative: "Mikołowie",
    nearbyCitySlugs: ["tychy", "katowice", "bierun", "pszczyna", "ruda-slaska"],
    metaDescription:
      "Automatyzacja procesów dla firm z Mikołowa: usługi, handel, produkcja i budownictwo na południe od Katowic. Konsultacja 30 min.",
    heroLead:
      "Pomagamy mikołowskim firmom usługowym, handlowym i budowlanym uporządkować zapytania, oferty i rozliczenia.",
    intro: [
      "Mikołów leży między Katowicami a Tychami. Jest miastem mieszkaniowym i usługowym, z zakładami produkcyjnymi, firmami budowlanymi i handlem. Znany jest też z Śląskiego Ogrodu Botanicznego.",
      "Firmy z Mikołowa obsługują klientów z całej aglomeracji. Szybka odpowiedź na zapytanie często decyduje o zleceniu.",
    ],
    localContext:
      "Mikołowskie firmy budowlane i usługowe dostają zapytania mailem, telefonicznie i przez portale. Oferty przygotowuje się ręcznie, często wieczorami.",
    whyHere:
      "W Mikołowie automatyzacja przyspiesza odpowiedź na zapytanie i przygotowanie oferty.",
    industries: [
      ["Budownictwo i remonty", "Wyceny, harmonogramy i rozliczenia."],
      ["Usługi", "Zapisy, przypomnienia i płatności."],
      ["Handel", "Zamówienia i faktury."],
      ["Produkcja", "Zlecenia i wysyłki."],
    ],
    processes: [
      ["Zapytania", "Zapytania z różnych kanałów w jednej liście."],
      ["Wyceny", "Wycena z szablonu na podstawie formularza."],
      ["Harmonogram", "Terminy ekip i dostaw w jednym kalendarzu."],
      ["Faktury", "Zakończone zlecenie uruchamia fakturę."],
    ],
    faq: [
      ["Czy automatyzujecie firmy budowlane?", "Tak. Wyceny, harmonogramy i rozliczenia."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Czy trzeba znać się na technologii?", "Nie. Konfigurację robimy my."],
      ["Ile to kosztuje?", "Wycenę dostajecie po konsultacji."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "wdrozenia-airtable"],
  }),

  town({
    ...base,
    slug: "myszkow",
    name: "Myszków",
    nameGenitive: "Myszkowa",
    nameLocative: "Myszkowie",
    nearbyCitySlugs: ["czestochowa", "zawiercie", "klobuck", "katowice", "dabrowa-gornicza"],
    metaDescription:
      "Automatyzacja procesów dla firm z Myszkowa: produkcja metalowa, handel, usługi i turystyka na Jurze. Konsultacja 30 min.",
    heroLead:
      "Pomagamy myszkowskim zakładom i firmom usługowym uporządkować zamówienia, dokumenty i raporty.",
    intro: [
      "Myszków leży nad Wartą, na skraju Jury Krakowsko-Częstochowskiej. Miasto ma tradycje przemysłu metalowego, a dziś działają tu zakłady produkcyjne, handel, usługi i turystyka.",
      "Mniejsze zakłady pracują dla odbiorców z Częstochowy i aglomeracji. Zamówienia i dokumenty trzeba obsługiwać szybko przy niewielkim zespole.",
    ],
    localContext:
      "Myszkowskie firmy często łączą produkcję z usługami dla mieszkańców i turystów. Każdy obszar ma inne dokumenty i terminy.",
    whyHere:
      "W Myszkowie automatyzacja porządkuje zamówienia i dokumenty w jednym miejscu.",
    industries: [
      ["Produkcja metalowa", "Zlecenia, materiały i atesty."],
      ["Handel", "Zamówienia i faktury."],
      ["Turystyka na Jurze", "Rezerwacje i płatności."],
      ["Usługi", "Zapisy i przypomnienia."],
    ],
    processes: [
      ["Zamówienia", "Zamówienie z maila trafia do systemu."],
      ["Atesty", "Dokumenty do wysyłki z danych produkcji."],
      ["Rezerwacje", "Rezerwacja z potwierdzeniem i płatnością."],
      ["Faktury", "Faktura tworzona automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami metalowymi?", "Tak. Automatyzujemy zamówienia, atesty i wysyłki."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Czy trzeba zmieniać programy?", "Zwykle nie."],
      ["Od czego zacząć?", "Od bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "pszczyna",
    name: "Pszczyna",
    nameGenitive: "Pszczyny",
    nameLocative: "Pszczynie",
    nearbyCitySlugs: ["tychy", "bierun", "bielsko-biala", "cieszyn", "katowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Pszczyny: turystyka, hotelarstwo, produkcja, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy pszczyńskim hotelom, firmom usługowym i produkcyjnym obsłużyć rezerwacje, zamówienia i faktury bez ręcznego pilnowania.",
    intro: [
      "Pszczyna słynie z zamku, parku i pokazowej zagrody żubrów. Turystyka i hotelarstwo są ważną częścią lokalnej gospodarki, obok produkcji, handlu i usług dla mieszkańców powiatu.",
      "Hotele i obiekty organizujące wydarzenia obsługują dużo zapytań o wesela, szkolenia i pobyty. Każde zapytanie to oferta, umowa i zaliczka.",
    ],
    localContext:
      "Pszczyńskie firmy turystyczne obsługują gości z aglomeracji i z zagranicy. Szybka i konkretna odpowiedź decyduje o rezerwacji.",
    whyHere:
      "W Pszczynie automatyzacja przyspiesza odpowiedź na zapytania i porządkuje rezerwacje.",
    industries: [
      ["Hotele i wydarzenia", "Zapytania, oferty, umowy i zaliczki."],
      ["Turystyka", "Rezerwacje i płatności."],
      ["Produkcja", "Zlecenia i wysyłki."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury."],
    ],
    processes: [
      ["Zapytanie o wydarzenie", "Formularz zbiera szczegóły, oferta powstaje z szablonu."],
      ["Umowa i zaliczka", "Akceptacja oferty uruchamia umowę i płatność."],
      ["Pytania gości", "Asystent AI odpowiada o ceny, dostępność i dojazd."],
      ["Faktury", "Faktura po pobycie lub wydarzeniu."],
    ],
    faq: [
      ["Czy automatyzujecie hotele, które organizują wesela i szkolenia?", "Tak. Zapytania, oferty, umowy, zaliczki i przypomnienia."],
      ["Czy chatbot obsłuży gości?", "Tak, odpowiada na podstawie waszych informacji i przekazuje trudniejsze pytania dalej."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Ile to kosztuje?", "Wycenę dostajecie po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "raciborz",
    name: "Racibórz",
    nameGenitive: "Raciborza",
    nameLocative: "Raciborzu",
    nearbyCitySlugs: ["rybnik", "wodzislaw-slaski", "gliwice", "opole", "katowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Raciborza: produkcja urządzeń dla energetyki, przemysł spożywczy, handel z Czechami. Konsultacja 30 min.",
    heroLead:
      "Pomagamy raciborskim zakładom i firmom handlowym uporządkować zlecenia, dokumentację i obsługę klientów z kraju i zza granicy.",
    intro: [
      "Racibórz leży nad Odrą, blisko granicy z Czechami. Ma silne tradycje przemysłowe: produkcję urządzeń dla energetyki, przemysł spożywczy i chemiczny, a także handel przygraniczny.",
      "Zakłady produkujące dla energetyki pracują przy dużych projektach z bogatą dokumentacją techniczną. Mniejsze firmy obsługują klientów z Polski i Czech.",
    ],
    localContext:
      "Raciborskie firmy produkcyjne i ich dostawcy pracują z dokumentacją projektową, atestami i harmonogramami, które trzeba pilnować w wielu miejscach naraz.",
    whyHere:
      "W Raciborzu automatyzacja porządkuje dokumentację i harmonogramy, a w handlu usuwa podwójną pracę przy klientach z Czech.",
    industries: [
      ["Produkcja dla energetyki", "Dokumentacja techniczna, atesty i harmonogramy."],
      ["Przemysł spożywczy", "Partie, dostawy i dokumenty jakości."],
      ["Handel przygraniczny", "Faktury i korespondencja w dwóch językach."],
      ["Usługi", "Zgłoszenia i rozliczenia."],
    ],
    processes: [
      ["Dokumentacja projektu", "Atesty i dokumenty zbierane w jednym miejscu dla każdego zlecenia."],
      ["Harmonogram", "Terminy etapów i dostaw z przypomnieniami."],
      ["Faktury w dwóch walutach", "Faktura w złotych lub koronach."],
      ["Raport", "Postęp zleceń i należności w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z zakładami produkcyjnymi?", "Tak. Automatyzujemy dokumentację, harmonogramy i raporty."],
      ["Czy obsługujecie klientów z Czech?", "Tak. Faktury i korespondencja mogą powstawać po czesku."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Od czego zacząć?", "Od bezpłatnej konsultacji i wyboru jednego procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "tarnowskie-gory",
    name: "Tarnowskie Góry",
    nameGenitive: "Tarnowskich Gór",
    nameLocative: "Tarnowskich Górach",
    nearbyCitySlugs: ["gliwice", "katowice", "lubliniec", "zabrze", "chorzow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Tarnowskich Gór: logistyka przy A1, produkcja, handel, turystyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Tarnowskich Gór uporządkować zamówienia, dokumenty i rezerwacje, żeby mały zespół nadążał za klientami.",
    intro: [
      "Tarnowskie Góry to miasto z kopalnią srebra wpisaną na listę UNESCO. Dziś, dzięki autostradzie A1 i drodze S11, rozwija się tu logistyka, produkcja i usługi dla północnej części aglomeracji.",
      "Firmy logistyczne i produkcyjne obsługują klientów z całego regionu, a turystyka przyciąga grupy szkolne i zwiedzających.",
    ],
    localContext:
      "Tarnogórskie firmy często obsługują kilka rynków: klientów z aglomeracji, odbiorców z Polski i turystów. Każdy wymaga innej obsługi.",
    whyHere:
      "W Tarnowskich Górach automatyzacja pozwala obsłużyć więcej zamówień i rezerwacji tym samym zespołem.",
    industries: [
      ["Logistyka przy A1", "Awizacje, statusy i dokumenty."],
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Turystyka", "Rezerwacje grup i płatności."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury."],
    ],
    processes: [
      ["Awizacje", "Termin dostawy potwierdzany automatycznie."],
      ["Zamówienia", "Zamówienie z maila trafia do systemu."],
      ["Rezerwacje grup", "Rezerwacja z potwierdzeniem i fakturą."],
      ["Raport", "Sprzedaż i terminowość w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z firmami logistycznymi?", "Tak. Automatyzujemy awizacje, statusy i dokumenty."],
      ["Czy automatyzujecie rezerwacje grup?", "Tak. Rezerwacje, potwierdzenia i faktury."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Ile to kosztuje?", "Wycenę dostajecie po konsultacji."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "wodzislaw-slaski",
    name: "Wodzisław Śląski",
    nameGenitive: "Wodzisławia Śląskiego",
    nameLocative: "Wodzisławiu Śląskim",
    nearbyCitySlugs: ["rybnik", "raciborz", "gliwice", "katowice", "pszczyna"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wodzisławia Śląskiego: logistyka przy A1, handel z Czechami, produkcja i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wodzisławskim firmom logistycznym, handlowym i produkcyjnym zamienić ręczne dokumenty w przepływy, które działają same.",
    intro: [
      "Wodzisław Śląski leży przy autostradzie A1, niedaleko przejścia granicznego z Czechami. Po zmianach w górnictwie miasto rozwija się dzięki logistyce, handlowi i produkcji.",
      "Firmy transportowe i handlowe obsługują przewozy międzynarodowe i klientów z obu stron granicy. Dokumentów jest dużo, a zespoły małe.",
    ],
    localContext:
      "Wodzisławskie firmy przewozowe i handlowe codziennie przygotowują dokumenty dla transportu międzynarodowego i faktury w kilku walutach.",
    whyHere:
      "W Wodzisławiu Śląskim automatyzacja przygotowuje dokumenty przewozowe i faktury z danych zlecenia, bez przepisywania.",
    industries: [
      ["Transport międzynarodowy", "Zlecenia, dokumenty i rozliczenia kursów."],
      ["Handel przygraniczny", "Faktury w złotych i koronach."],
      ["Produkcja", "Zlecenia i wysyłki."],
      ["Usługi", "Zgłoszenia i rozliczenia."],
    ],
    processes: [
      ["Zlecenie transportowe", "Zlecenie z maila trafia do planu."],
      ["Dokumenty przewozowe", "Dokumenty generowane z danych zlecenia."],
      ["Rozliczenie kursu", "Zamknięty kurs uruchamia fakturę."],
      ["Raport floty", "Kursy, koszty i przychody w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z przewoźnikami międzynarodowymi?", "Tak. Automatyzujemy zlecenia, dokumenty i rozliczenia."],
      ["Czy faktury mogą być w euro lub koronach?", "Tak, w walucie klienta."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Od czego zacząć?", "Od bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "zawiercie",
    name: "Zawiercie",
    nameGenitive: "Zawiercia",
    nameLocative: "Zawierciu",
    nearbyCitySlugs: ["bedzin", "myszkow", "dabrowa-gornicza", "czestochowa", "katowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Zawiercia: hutnictwo i przemysł metalowy, produkcja, handel i turystyka na Jurze. Konsultacja 30 min.",
    heroLead:
      "Pomagamy zawierciańskim zakładom, ich dostawcom i firmom usługowym uporządkować zlecenia, atesty i rozliczenia.",
    intro: [
      "Zawiercie to miasto huty i przemysłu metalowego, położone na Jurze Krakowsko-Częstochowskiej. Obok zakładów przemysłowych działają firmy usługowe, handel i turystyka związana z zamkami Szlaku Orlich Gniazd.",
      "Dostawcy i podwykonawcy huty pracują według procedur dużego zakładu. Zlecenia, protokoły i rozliczenia wymagają dużo dokumentów.",
    ],
    localContext:
      "Zawierciańskie firmy usługowe działają w rytmie zamówień huty. Przy postojach i remontach liczba zleceń i dokumentów gwałtownie rośnie.",
    whyHere:
      "W Zawierciu automatyzacja skraca rozliczenie prac i porządkuje dokumentację dla odbiorców przemysłowych.",
    industries: [
      ["Hutnictwo i metal", "Zlecenia, atesty i wysyłki."],
      ["Usługi dla przemysłu", "Karty pracy, protokoły i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
      ["Turystyka na Jurze", "Rezerwacje i płatności."],
    ],
    processes: [
      ["Karta pracy", "Dane z terenu trafiają do biura bez papieru."],
      ["Protokół i faktura", "Kompletny protokół uruchamia fakturę."],
      ["Atesty", "Dokumenty do wysyłki z danych produkcji."],
      ["Rezerwacje", "Rezerwacja z potwierdzeniem i płatnością."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami huty?", "Tak. Automatyzujemy karty pracy, protokoły i rozliczenia."],
      ["Czy automatyzujecie obiekty turystyczne?", "Tak. Rezerwacje, pytania gości i płatności."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Ile to kosztuje?", "Wycenę dostajecie po konsultacji."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "zywiec",
    name: "Żywiec",
    nameGenitive: "Żywca",
    nameLocative: "Żywcu",
    nearbyCitySlugs: ["bielsko-biala", "cieszyn", "pszczyna", "katowice", "nowy-sacz"],
    metaDescription:
      "Automatyzacja procesów dla firm z Żywca: browarnictwo i produkcja spożywcza, przemysł drzewny, turystyka w Beskidach. Konsultacja 30 min.",
    heroLead:
      "Pomagamy żywieckim producentom, hotelom i firmom usługowym uporządkować zamówienia, rezerwacje i dokumenty.",
    intro: [
      "Żywiec jest znany w całej Polsce z browaru. Lokalną gospodarkę tworzą produkcja spożywcza, przemysł drzewny i turystyka w Beskidzie Żywieckim, nad Jeziorem Żywieckim i w okolicznych ośrodkach narciarskich.",
      "Firmy turystyczne działają w dwóch sezonach, zimowym i letnim, a producenci obsługują odbiorców z całego kraju.",
    ],
    localContext:
      "Żywieckie obiekty turystyczne obsługują gości z aglomeracji śląskiej i z zagranicy. W sezonie zapytań i rezerwacji jest więcej, niż zespół może obsłużyć ręcznie.",
    whyHere:
      "W Żywcu automatyzacja pomaga przejść przez sezon bez nadgodzin, a producentom porządkuje zamówienia i wysyłki.",
    industries: [
      ["Produkcja spożywcza", "Zamówienia, partie i wysyłki."],
      ["Przemysł drzewny", "Zamówienia na wymiar i terminy."],
      ["Hotele i pensjonaty", "Rezerwacje, zapytania i płatności."],
      ["Wypożyczalnie i usługi", "Rezerwacje sprzętu i przypomnienia."],
    ],
    processes: [
      ["Rezerwacje", "Rezerwacja z wielu portali w jednym kalendarzu."],
      ["Pytania gości", "Asystent AI odpowiada o dostępność, ceny i warunki."],
      ["Zamówienia hurtowe", "Zamówienie trafia do planu produkcji i wysyłki."],
      ["Faktury", "Faktura tworzona automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie pensjonaty w Beskidach?", "Tak. Rezerwacje, potwierdzenia, zaliczki i odpowiedzi na pytania gości."],
      ["Czy pracujecie z producentami żywności?", "Tak. Automatyzujemy zamówienia, partie i wysyłki."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Kiedy najlepiej zacząć?", "Przed sezonem, żeby zespół zdążył się oswoić z nowym sposobem pracy."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych"],
  }),
];
