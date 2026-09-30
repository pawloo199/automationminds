import type { CityPageContent } from "../../types";
import { town } from "../town";

const base = { voivodeship: "dolnośląskie", regionCluster: "dolny-slask" } as const;

/** Dolny Śląsk bez Wrocławia (Wrocław ma treść poziomu A w tier-a/wroclaw.ts). */
export const dolnoslaskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "legnica",
    name: "Legnica",
    nameGenitive: "Legnicy",
    nameLocative: "Legnicy",
    nearbyCitySlugs: ["wroclaw", "lubin", "jawor", "zlotoryja", "polkowice", "swidnica"],
    metaDescription:
      "Automatyzacja procesów dla firm z Legnicy: produkcja w strefie ekonomicznej, dostawcy dla przemysłu miedziowego, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy legnickim zakładom, dostawcom i firmom usługowym odejść od przepisywania danych między mailem, arkuszem i systemem. Zaczynamy od procesu, który najbardziej spowalnia zespół.",
    intro: [
      "Legnica leży przy autostradzie A4, w połowie drogi między Wrocławiem a granicą z Niemcami, i jest siedzibą Legnickiej Specjalnej Strefy Ekonomicznej. Działają tu zakłady produkcyjne, firmy obsługujące zagłębie miedziowe oraz rosnący sektor usług.",
      "W takich firmach powtarzalna praca biurowa rośnie razem z liczbą klientów i dostawców. Zamówienia przychodzą mailem, statusy sprawdza się telefonicznie, a raporty składa ręcznie z kilku plików. Tu automatyzacja daje najszybszy efekt.",
    ],
    localContext:
      "Wiele legnickich firm pracuje dla dużych odbiorców: koncernów motoryzacyjnych ze strefy albo spółek z branży miedziowej. Tacy klienci wymagają terminowości, pełnej dokumentacji i szybkich odpowiedzi, a biuro zwykle ma do tego kilka osób.",
    whyHere:
      "Automatyzacja pozwala legnickiej firmie obsłużyć więcej zamówień i dokumentów tym samym zespołem. Zamiast kolejnego etatu w biurze, dane same trafiają tam, gdzie są potrzebne.",
    economy: {
      title: "Czym żyje legnicki biznes",
      paragraphs: [
        "Gospodarkę miasta napędzają trzy obszary: produkcja w strefie ekonomicznej, usługi dla przemysłu miedziowego z sąsiedniego Lubina, Polkowic i Głogowa oraz handel i usługi dla całego subregionu.",
        "Położenie przy A4 sprzyja firmom, które współpracują z odbiorcami z Niemiec. To oznacza dokumenty w dwóch językach, kilka walut i klientów przyzwyczajonych do stałego dostępu do statusu zamówienia.",
      ],
    },
    industries: [
      ["Produkcja w strefie", "Zlecenia, raporty zmianowe i dokumentacja jakości w jednym przepływie zamiast arkuszy na hali."],
      ["Dostawcy dla przemysłu miedziowego", "Zamówienia, protokoły i rozliczenia z dużym odbiorcą bez ręcznego pilnowania terminów."],
      ["Handel hurtowy", "Oferty, zamówienia i stany magazynowe spięte z systemem księgowym."],
      ["Usługi i biura", "Obieg dokumentów, umów i zgłoszeń klientów z historią każdej sprawy."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "AI odczytuje zamówienie z maila lub PDF i przygotowuje je w systemie do sprawdzenia."],
      ["Dokumentacja dla odbiorcy", "Protokoły, certyfikaty i raporty jakości składane automatycznie z danych, które już są."],
      ["Faktura po realizacji", "Zamknięcie zlecenia uruchamia fakturę i powiadomienie dla klienta."],
      ["Raport dla zarządu", "Sprzedaż, produkcja i należności w jednym zestawieniu odświeżanym codziennie."],
    ],
    faq: [
      ["Czy pracujecie z firmami ze strefy ekonomicznej w Legnicy?", "Tak. Z zakładami produkcyjnymi i ich dostawcami najczęściej automatyzujemy przyjmowanie zamówień, raporty i dokumentację dla odbiorców. Działamy na systemach, które firma już ma."],
      ["Czy przyjeżdżacie do Legnicy?", "Większość pracy prowadzimy zdalnie. Nasza siedziba jest we Wrocławiu, więc gdy warsztat na miejscu przyspiesza projekt, łatwo nam przyjechać."],
      ["Czy automatyzacja wymaga zmiany ERP?", "Nie. Zwykle budujemy połączenia między tym, co już działa: ERP, pocztą, arkuszami i systemem księgowym."],
      ["Ile trwa pierwsze wdrożenie w firmie z Legnicy?", "Wąski proces zwykle kilka tygodni. Dokładny termin dla firmy z Legnicy podajemy po przeglądzie procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "walbrzych",
    name: "Wałbrzych",
    nameGenitive: "Wałbrzycha",
    nameLocative: "Wałbrzychu",
    nearbyCitySlugs: ["jelenia-gora", "swidnica", "dzierzoniow", "kamienna-gora", "klodzko", "legnica"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wałbrzycha: produkcja i motoryzacja w strefie Invest-Park, dostawcy, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy wałbrzyskim zakładom i ich dostawcom uporządkować zamówienia, dokumentację i raporty. Tak, żeby biuro nadążało za produkcją bez dokładania etatów.",
    intro: [
      "Wałbrzych to dawne miasto górnicze, które przebudowało gospodarkę wokół Wałbrzyskiej Specjalnej Strefy Ekonomicznej Invest-Park. W mieście i okolicy działają fabryki motoryzacyjne, dostawcy komponentów i firmy usługowe, które je obsługują.",
      "Duzi odbiorcy z branży motoryzacyjnej narzucają dostawcom wysokie wymagania: terminowość, identyfikowalność partii, raporty jakości. W mniejszych firmach wszystko to często robi się ręcznie. Automatyzacja zdejmuje z zespołu tę powtarzalną część pracy.",
    ],
    localContext:
      "Rynek pracy w regionie jest napięty, bo fabryki w strefie zatrudniają wiele osób. Firmy mają trudność z pozyskaniem pracowników biurowych i specjalistów, więc każda godzina odzyskana z przepisywania danych ma realną wartość.",
    whyHere:
      "W Wałbrzychu automatyzacja pomaga sprostać wymaganiom dużych odbiorców bez rozbudowy biura. Dokumenty i raporty powstają z danych, które już są w systemach.",
    economy: {
      title: "Czym żyje wałbrzyski biznes",
      paragraphs: [
        "Strefa ekonomiczna przyciągnęła do Wałbrzycha producentów z branży motoryzacyjnej, a za nimi sieć dostawców, firm logistycznych i serwisowych. To one tworzą dziś trzon lokalnej gospodarki.",
        "Obok przemysłu rośnie sektor usług i turystyki, związany z Zamkiem Książ i rewitalizacją dawnych terenów kopalnianych.",
      ],
    },
    industries: [
      ["Motoryzacja i komponenty", "Zamówienia z systemów odbiorców, raporty jakości i dokumentacja partii bez ręcznego przepisywania."],
      ["Produkcja kontraktowa", "Zlecenia, stany materiałów i terminy widoczne dla biura i handlowców."],
      ["Logistyka i serwis", "Awizacje, zlecenia serwisowe i protokoły generowane automatycznie."],
      ["Usługi i turystyka", "Rezerwacje, zapytania i faktury obsługiwane w jednym miejscu."],
    ],
    processes: [
      ["Zamówienia od odbiorców", "Dane z portali i maili klientów trafiają do systemu bez przepisywania."],
      ["Raporty jakości", "Wyniki kontroli zbierane z hali i składane w raport dla klienta automatycznie."],
      ["Braki materiałowe", "Powiadomienie, gdy stan komponentu spada poniżej ustalonego poziomu."],
      ["Rozliczenia i faktury", "Zamknięcie dostawy uruchamia fakturę i zestawienie dla klienta."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami branży motoryzacyjnej?", "Tak. Najczęściej automatyzujemy przyjmowanie zamówień od odbiorców, raporty jakości i dokumentację wysyłek. Łączymy systemy, których firma już używa."],
      ["Czy trzeba mieć własny dział IT?", "Nie. Wystarczy osoba, która zna proces, i dostęp do narzędzi. Rozwiązanie budujemy tak, żeby zespół umiał je obsługiwać sam."],
      ["Czy przyjeżdżacie do Wałbrzycha?", "Pracujemy głównie zdalnie. Z Wrocławia mamy blisko, więc warsztat na miejscu organizujemy, gdy wyraźnie przyspiesza projekt."],
      ["Jaki jest pierwszy krok dla firmy z Wałbrzycha?", "Krótka rozmowa online o tym, co zabiera waszemu zespołowi w Wałbrzychu najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "ai-w-obsludze-dokumentow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "jelenia-gora",
    name: "Jelenia Góra",
    nameGenitive: "Jeleniej Góry",
    nameLocative: "Jeleniej Górze",
    nearbyCitySlugs: ["walbrzych", "kamienna-gora", "lwowek-slaski", "luban", "zgorzelec", "boleslawiec"],
    metaDescription:
      "Automatyzacja procesów dla firm z Jeleniej Góry: turystyka i hotelarstwo, produkcja, handel i usługi w Kotlinie Jeleniogórskiej. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Jeleniej Góry i Karkonoszy uporządkować rezerwacje, zamówienia i dokumenty. Mniej przepisywania, szybsza odpowiedź dla klienta.",
    intro: [
      "Jelenia Góra jest centrum Kotliny Jeleniogórskiej i bramą w Karkonosze. Lokalna gospodarka łączy turystykę i hotelarstwo z produkcją, handlem i usługami dla całego regionu, w tym dla klientów z Czech i Niemiec.",
      "Sezonowość turystyki oznacza szczyty zapytań i rezerwacji, których mały zespół nie jest w stanie obsłużyć ręcznie. W firmach produkcyjnych i handlowych problemem są z kolei zamówienia i dokumenty rozproszone między mailem a arkuszami.",
    ],
    localContext:
      "Firmy z regionu często obsługują gości i klientów zagranicznych. Zapytania przychodzą z wielu kanałów, w kilku językach, a odpowiedź musi być szybka, bo klient porównuje oferty.",
    whyHere:
      "W Jeleniej Górze automatyzacja pomaga przejść przez sezon bez nadgodzin: odpowiedzi, potwierdzenia i faktury wychodzą same, a zespół zajmuje się gośćmi i klientami.",
    economy: {
      title: "Czym żyje jeleniogórski biznes",
      paragraphs: [
        "Turystyka w Karkonoszach, Szklarskiej Porębie i Karpaczu napędza hotele, pensjonaty, wypożyczalnie i firmy obsługujące ruch turystyczny. Wiele z nich ma siedzibę albo zaplecze w Jeleniej Górze.",
        "Obok turystyki działa tu przemysł, w tym podstrefa strefy ekonomicznej, oraz handel i usługi dla mieszkańców całej kotliny.",
      ],
    },
    industries: [
      ["Hotele i pensjonaty", "Rezerwacje z wielu kanałów, potwierdzenia i faktury bez ręcznego przepisywania."],
      ["Turystyka i rekreacja", "Zapytania, oferty i płatności obsługiwane automatycznie, także w językach obcych."],
      ["Produkcja", "Zlecenia, stany magazynowe i dokumenty wysyłkowe w jednym przepływie."],
      ["Handel i usługi", "Zamówienia, reklamacje i obsługa klienta z pełną historią sprawy."],
    ],
    processes: [
      ["Obsługa zapytań", "Asystent AI przygotowuje odpowiedź na typowe pytania gości, a trudniejsze przekazuje do zespołu."],
      ["Potwierdzenia rezerwacji", "Rezerwacja uruchamia potwierdzenie, przypomnienie i fakturę zaliczkową."],
      ["Zamówienia i dostawy", "Zamówienia od klientów i do dostawców w jednym widoku ze statusem."],
      ["Raport sezonu", "Obłożenie, przychody i koszty w zestawieniu bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy automatyzujecie obsługę rezerwacji?", "Tak. Łączymy systemy rezerwacyjne, pocztę i księgowość, żeby potwierdzenia, przypomnienia i faktury wychodziły automatycznie."],
      ["Czy chatbot poradzi sobie z pytaniami gości zagranicznych?", "Tak, asystent AI odpowiada w kilku językach na podstawie waszych informacji o obiekcie. Pytania nietypowe przekazuje do zespołu."],
      ["Czy pracujecie z firmami produkcyjnymi z kotliny?", "Tak. W produkcji najczęściej automatyzujemy zamówienia, dokumenty wysyłkowe i raporty."],
      ["Czy musicie przyjechać?", "Nie. Projekty prowadzimy zdalnie, a na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza pracę."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "lubin",
    name: "Lubin",
    nameGenitive: "Lubina",
    nameLocative: "Lubinie",
    nearbyCitySlugs: ["legnica", "polkowice", "glogow", "zlotoryja", "wroclaw", "jawor"],
    metaDescription:
      "Automatyzacja procesów dla firm z Lubina: dostawcy i podwykonawcy branży miedziowej, usługi techniczne, handel. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Lubina, które pracują dla przemysłu miedziowego, uporządkować zlecenia, protokoły i rozliczenia. Mniej papieru, szybsza faktura.",
    intro: [
      "Lubin jest siedzibą KGHM Polska Miedź i sercem Legnicko-Głogowskiego Okręgu Miedziowego. Wokół kopalń działa gęsta sieć firm: podwykonawców, serwisów technicznych, dostawców materiałów i usług.",
      "Praca dla dużego odbiorcy przemysłowego oznacza dużo dokumentów: zlecenia, protokoły odbioru, raporty i rozliczenia. W wielu firmach wypełnia się je ręcznie, a faktura czeka, aż ktoś zbierze podpisy i dane.",
    ],
    localContext:
      "Lubińskie firmy usługowe często pracują w terenie i na zmiany. Informacje z brygad trafiają do biura z opóźnieniem, telefonicznie albo na papierze, co wydłuża rozliczenie każdego zlecenia.",
    whyHere:
      "W Lubinie automatyzacja skraca drogę od wykonanej pracy do wystawionej faktury. Dane z terenu trafiają do biura od razu, a dokumenty dla odbiorcy składają się same.",
    economy: {
      title: "Czym żyje lubiński biznes",
      paragraphs: [
        "Przemysł miedziowy jest największym pracodawcą w regionie, a wokół niego działają setki mniejszych firm: od usług górniczych i budowlanych, przez serwis maszyn, po transport i zaopatrzenie.",
        "Stabilne zamówienia od dużego odbiorcy sprzyjają rozwojowi, ale też wymuszają porządek w dokumentach i terminach, bo każde opóźnienie w papierach opóźnia zapłatę.",
      ],
    },
    industries: [
      ["Usługi dla górnictwa", "Zlecenia, protokoły i raporty z prac rozliczane bez ręcznego przepisywania."],
      ["Serwis maszyn", "Zgłoszenia, harmonogram przeglądów i historia napraw w jednym miejscu."],
      ["Budownictwo i instalacje", "Kosztorysy, dzienniki prac i rozliczenia podwykonawców."],
      ["Transport i zaopatrzenie", "Zamówienia, dostawy i dokumenty przewozowe ze statusem dla klienta."],
    ],
    processes: [
      ["Raport z terenu", "Brygada wypełnia krótki formularz w telefonie, a dane od razu trafiają do biura."],
      ["Protokół odbioru", "Dokument generowany automatycznie z danych zlecenia i gotowy do podpisu."],
      ["Rozliczenie zlecenia", "Kompletny protokół uruchamia fakturę i zestawienie dla odbiorcy."],
      ["Przeglądy i terminy", "Przypomnienia o przeglądach, uprawnieniach i ważności dokumentów."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami branży miedziowej?", "Tak. Automatyzujemy raporty z prac, protokoły i rozliczenia, czyli dokumenty, które najbardziej obciążają biuro takich firm."],
      ["Czy pracownicy w terenie muszą uczyć się nowego systemu?", "Nie musi to być nowy system. Często wystarczy prosty formularz w telefonie, z którego dane same trafiają do biura."],
      ["Czy łączycie się z systemem księgowym?", "Tak. Łączymy formularze, arkusze i system księgowy, żeby faktura powstawała z danych zlecenia."],
      ["Ile kosztuje automatyzacja w firmie z Lubina?", "Zależy od procesu i liczby systemów do połączenia. Wycenę pierwszego etapu dostajecie po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "glogow",
    name: "Głogów",
    nameGenitive: "Głogowa",
    nameLocative: "Głogowie",
    nearbyCitySlugs: ["lubin", "polkowice", "legnica", "gora", "wolow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Głogowa: dostawcy huty miedzi, produkcja, transport i handel nad Odrą. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy głogowskim firmom przemysłowym i usługowym zamienić ręczne raporty i przepisywanie zamówień w przepływy, które działają same.",
    intro: [
      "Głogów to miasto huty miedzi i jeden z filarów zagłębia miedziowego. Wokół huty działają firmy remontowe, serwisowe, transportowe i dostawcy materiałów, a miasto obsługuje handlowo północną część regionu.",
      "Takie firmy łączy jedno: dużo dokumentów i mało czasu. Zlecenia, protokoły, karty pracy i faktury krążą między halą, biurem i klientem. Automatyzacja porządkuje ten obieg.",
    ],
    localContext:
      "W głogowskich firmach usługowych dane z prac często trafiają do biura na papierze albo telefonicznie. Biuro przepisuje je do arkusza, a potem do systemu księgowego, co kosztuje czas i rodzi pomyłki.",
    whyHere:
      "W Głogowie automatyzacja skraca rozliczenie prac dla dużych odbiorców i porządkuje dokumentację, której wymagają audyty i kontrole.",
    industries: [
      ["Usługi dla huty", "Zlecenia remontowe, karty pracy i protokoły rozliczane bez przepisywania."],
      ["Produkcja i obróbka", "Zlecenia, materiały i terminy widoczne w jednym miejscu."],
      ["Transport", "Zlecenia przewozowe, dokumenty i statusy dostaw dla klienta."],
      ["Handel", "Zamówienia, stany i faktury spięte z systemem księgowym."],
    ],
    processes: [
      ["Karta pracy", "Dane z prac wpisywane w telefonie trafiają od razu do zestawienia."],
      ["Protokół i faktura", "Kompletny protokół uruchamia fakturę dla odbiorcy."],
      ["Zamówienia materiałów", "Zapotrzebowanie z hali zamienia się w zamówienie do dostawcy."],
      ["Raport miesięczny", "Godziny, koszty i przychody z każdego zlecenia w jednym raporcie."],
    ],
    faq: [
      ["Czy pracujecie z firmami obsługującymi hutę?", "Tak. Takim firmom najczęściej automatyzujemy karty pracy, protokoły i rozliczenia zleceń."],
      ["Czy firma z Głogowa potrzebuje nowego systemu, żeby zacząć?", "Najczęściej nie. Zaczynamy od połączenia poczty, arkuszy i programów, które już macie."],
      ["Jak wygląda współpraca na odległość z firmą z Głogowa?", "Procesy poznajemy na wideorozmowach i przykładach dokumentów, a wdrożenie testujemy razem z zespołem na prawdziwych danych."],
      ["Czy automatyzacja ma sens w małej firmie z Głogowa?", "Tak. W małych zespołach, takich jak wiele firm w Głogowie, każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "swidnica",
    name: "Świdnica",
    nameGenitive: "Świdnicy",
    nameLocative: "Świdnicy",
    nearbyCitySlugs: ["walbrzych", "dzierzoniow", "wroclaw", "jawor", "zabkowice-slaskie"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Świdnicy: produkcja w strefie ekonomicznej, dostawcy motoryzacji, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy świdnickim zakładom i firmom usługowym uporządkować zamówienia, raporty i dokumenty, żeby biuro nadążało za produkcją.",
    intro: [
      "Świdnica łączy historyczne centrum z nowoczesnym przemysłem. W podstrefie wałbrzyskiej strefy ekonomicznej działają zakłady produkcyjne, w tym dostawcy branży motoryzacyjnej i AGD, a miasto jest też zapleczem handlowym dla okolicznych gmin.",
      "Firmy produkcyjne ze Świdnicy często pracują dla dużych odbiorców, którzy oczekują stałego dostępu do statusu zamówienia i pełnej dokumentacji. Gdy takie informacje zbiera się ręcznie, biuro staje się wąskim gardłem.",
    ],
    localContext:
      "Bliskość Wrocławia i Wałbrzycha oznacza konkurencję o pracowników. Świdnickie firmy szukają sposobów, żeby obsłużyć więcej zamówień bez zatrudniania kolejnych osób do pracy biurowej.",
    whyHere:
      "W Świdnicy automatyzacja przejmuje przepisywanie zamówień, zbieranie statusów i przygotowanie dokumentów. Zespół zyskuje czas na pracę z klientem.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i raporty zmianowe w jednym przepływie."],
      ["Dostawcy motoryzacji i AGD", "Zamówienia z systemów odbiorców i raporty jakości bez ręcznej pracy."],
      ["Handel", "Oferty, zamówienia i faktury spięte z magazynem."],
      ["Usługi", "Zgłoszenia, umowy i terminy obsługiwane w jednym miejscu."],
    ],
    processes: [
      ["Zamówienie do systemu", "AI odczytuje zamówienie z maila i przygotowuje je w ERP do sprawdzenia."],
      ["Status dla klienta", "Klient i handlowiec widzą postęp zamówienia bez telefonu na halę."],
      ["Dokumenty wysyłkowe", "Zakończenie zlecenia uruchamia dokumenty wysyłki i fakturę."],
      ["Raport produkcji", "Wyniki z hali składane w raport codziennie, bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z zakładami ze strefy ekonomicznej?", "Tak. Z producentami i ich dostawcami automatyzujemy zamówienia, dokumentację jakości i raporty."],
      ["Czy przyjeżdżacie do Świdnicy?", "Pracujemy głównie zdalnie. Siedzibę mamy we Wrocławiu, więc spotkanie na miejscu nie jest problemem, gdy pomaga w projekcie."],
      ["Czy automatyzacja zadziała na programach, których używamy w Świdnicy?", "W większości przypadków tak. Sprawdzamy to na konsultacji i nie wymieniamy tego, co działa."],
      ["Kiedy firma ze Świdnicy zobaczy pierwszy efekt?", "Zwykle po kilku tygodniach, gdy pierwszy proces zaczyna działać na waszych danych."],
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "boleslawiec",
    name: "Bolesławiec",
    nameGenitive: "Bolesławca",
    nameLocative: "Bolesławcu",
    nearbyCitySlugs: ["zgorzelec", "luban", "legnica", "lwowek-slaski", "jelenia-gora"],
    metaDescription:
      "Automatyzacja procesów dla firm z Bolesławca: manufaktury ceramiki, produkcja, sprzedaż internetowa i eksport do Niemiec. Konsultacja 30 min.",
    heroLead:
      "Pomagamy bolesławieckim producentom i sklepom uporządkować zamówienia, wysyłki i sprzedaż zagraniczną, bez przepisywania danych między systemami.",
    intro: [
      "Bolesławiec jest znany w Polsce i za granicą z ceramiki. Działają tu manufaktury, sklepy firmowe i sprzedawcy internetowi, a obok nich zakłady produkcyjne i firmy logistyczne korzystające z bliskości autostrady A4 i granicy z Niemcami.",
      "Sprzedaż w wielu kanałach i do wielu krajów oznacza dużo powtarzalnej pracy: zamówienia z kilku sklepów, dokumenty wysyłkowe, faktury w różnych walutach i obsługa pytań klientów w kilku językach.",
    ],
    localContext:
      "Wiele bolesławieckich firm sprzedaje jednocześnie w sklepie stacjonarnym, we własnym sklepie internetowym, na platformach sprzedażowych i do hurtowni za granicą. Stany magazynowe i zamówienia łatwo się wtedy rozjeżdżają.",
    whyHere:
      "W Bolesławcu automatyzacja pozwala obsłużyć sprzedaż wielokanałową i eksport tym samym zespołem. Zamówienia, stany i faktury aktualizują się same.",
    industries: [
      ["Ceramika i rękodzieło", "Zamówienia z wielu kanałów, stany i wysyłki w jednym widoku."],
      ["Sprzedaż internetowa", "Obsługa zamówień, zwrotów i pytań klientów, także zagranicznych."],
      ["Produkcja", "Zlecenia, materiały i dokumenty wysyłkowe bez ręcznego przepisywania."],
      ["Logistyka", "Wysyłki krajowe i zagraniczne z automatycznymi dokumentami."],
    ],
    processes: [
      ["Zamówienia z wielu sklepów", "Zamówienia z platform i sklepu trafiają do jednego miejsca ze wspólnym stanem."],
      ["Wysyłka i etykiety", "Opłacone zamówienie uruchamia etykietę kuriera i powiadomienie dla klienta."],
      ["Faktury eksportowe", "Faktury w walucie i języku klienta generowane z danych zamówienia."],
      ["Pytania klientów", "Asystent AI odpowiada na typowe pytania o zamówienie i wysyłkę."],
    ],
    faq: [
      ["Czy łączycie kilka sklepów internetowych i platform?", "Tak. Spinamy kanały sprzedaży z magazynem i księgowością, żeby stany i zamówienia były wszędzie aktualne."],
      ["Czy automatyzujecie sprzedaż do Niemiec?", "Tak. Faktury, dokumenty wysyłkowe i odpowiedzi dla klientów mogą powstawać w języku odbiorcy."],
      ["Czy mała manufaktura może zacząć?", "Tak. Zaczynamy od jednego procesu, najczęściej od zamówień i wysyłek, z jasnym kosztem pierwszego etapu."],
      ["Jak często będziemy się kontaktować podczas wdrożenia w Bolesławcu?", "Zwykle raz w tygodniu na krótkim spotkaniu online z zespołem w Bolesławcu, a na bieżąco przez maila lub komunikator."],
    ],
    services: ["automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "olesnica",
    name: "Oleśnica",
    nameGenitive: "Oleśnicy",
    nameLocative: "Oleśnicy",
    nearbyCitySlugs: ["wroclaw", "milicz", "trzebnica", "olawa", "strzelin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Oleśnicy: produkcja w strefie ekonomicznej, logistyka przy S8, handel i usługi pod Wrocławiem. Konsultacja 30 min.",
    heroLead:
      "Pomagamy oleśnickim firmom produkcyjnym i logistycznym uporządkować zamówienia, statusy i dokumenty, żeby rosnąć bez rozbudowy biura.",
    intro: [
      "Oleśnica leży przy drodze ekspresowej S8, kilkadziesiąt minut od Wrocławia. W mieście działa podstrefa strefy ekonomicznej z zakładami produkcyjnymi, a dogodny dojazd przyciąga firmy logistyczne i dystrybucyjne.",
      "Firmy z Oleśnicy często obsługują klientów w całej Polsce i za granicą. Im więcej zamówień, tym więcej maili, telefonów i dokumentów, które ktoś musi przepisać do systemu.",
    ],
    localContext:
      "Bliskość Wrocławia pomaga w rozwoju, ale utrudnia rekrutację. Oleśnickie firmy konkurują o pracowników z metropolią, więc każdy proces, który zespół może oddać automatyzacji, pomaga utrzymać tempo.",
    whyHere:
      "W Oleśnicy automatyzacja pozwala obsłużyć więcej zamówień i przesyłek tym samym zespołem, bez szukania kolejnych osób do biura.",
    industries: [
      ["Produkcja", "Zlecenia, stany i dokumenty wysyłkowe spięte w jednym przepływie."],
      ["Logistyka i dystrybucja", "Awizacje, statusy przesyłek i dokumenty generowane automatycznie."],
      ["Handel B2B", "Oferty, zamówienia i faktury bez ręcznego przepisywania."],
      ["Usługi dla firm", "Zgłoszenia, umowy i rozliczenia z historią każdej sprawy."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "Zamówienie z maila lub pliku trafia do systemu po automatycznym odczycie."],
      ["Awizacja dostawy", "Klient dostaje termin i status dostawy bez telefonu do biura."],
      ["Dokumenty przewozowe", "Listy przewozowe i etykiety tworzone z danych zamówienia."],
      ["Raport tygodniowy", "Sprzedaż, wysyłki i należności w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z firmami logistycznymi z Oleśnicy?", "Tak. Automatyzujemy awizacje, statusy dostaw i dokumenty przewozowe."],
      ["Czy możecie przyjechać do Oleśnicy?", "Tak, z Wrocławia mamy blisko. Większość pracy i tak prowadzimy zdalnie."],
      ["Czy zmieniacie systemy w firmie?", "Nie. Łączymy te, których już używacie, a nowe narzędzia proponujemy tylko wtedy, gdy są konieczne."],
      ["Od czego firma z Oleśnicy powinna zacząć automatyzację?", "Od bezpłatnej, 30-minutowej konsultacji. Wskazujemy jeden proces z najszybszym zwrotem dla firmy z Oleśnicy i przygotowujemy wycenę pierwszego etapu."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "olawa",
    name: "Oława",
    nameGenitive: "Oławy",
    nameLocative: "Oławie",
    nearbyCitySlugs: ["wroclaw", "olesnica", "strzelin", "dzierzoniow", "trzebnica"],
    metaDescription:
      "Automatyzacja procesów dla firm z Oławy: zakłady w strefie ekonomicznej, logistyka przy A4, produkcja i usługi pod Wrocławiem. Konsultacja 30 min.",
    heroLead:
      "Pomagamy oławskim zakładom, magazynom i ich dostawcom zamienić ręczne statusy i raporty w przepływy, które aktualizują się same.",
    intro: [
      "Oława leży przy autostradzie A4, tuż za Wrocławiem. Podstrefa strefy ekonomicznej przyciągnęła tu zakłady produkcyjne i centra logistyczne, a razem z nimi dostawców, przewoźników i firmy serwisowe.",
      "W takiej gospodarce liczy się tempo: dostawy na czas, szybka informacja o statusie i komplet dokumentów. Gdy wszystko to zbiera się ręcznie, biuro nie nadąża za produkcją i magazynem.",
    ],
    localContext:
      "Oławskie firmy często są ogniwem w łańcuchu dostaw większych producentów. Oczekuje się od nich precyzyjnych awizacji, raportów i dokumentów, zwykle w systemach odbiorcy.",
    whyHere:
      "W Oławie automatyzacja pozwala spełnić wymagania dużych odbiorców bez ręcznego przepisywania danych do ich portali i raportów.",
    industries: [
      ["Produkcja", "Zlecenia, stany i raporty zmianowe w jednym miejscu."],
      ["Magazyny i logistyka", "Awizacje, sloty i dokumenty przewozowe bez ręcznej pracy."],
      ["Dostawcy dla przemysłu", "Zamówienia z portali odbiorców trafiają do systemu automatycznie."],
      ["Usługi techniczne", "Zgłoszenia serwisowe, harmonogramy i protokoły w jednym przepływie."],
    ],
    processes: [
      ["Zamówienia z portali", "Dane z portali odbiorców pobierane i wprowadzane do systemu bez przepisywania."],
      ["Awizacje i sloty", "Termin dostawy potwierdzany automatycznie z przewoźnikiem i magazynem."],
      ["Raport dla odbiorcy", "Terminowość i jakość dostaw liczone z danych, które już są."],
      ["Faktura po dostawie", "Potwierdzona dostawa uruchamia fakturę."],
    ],
    faq: [
      ["Czy łączycie się z portalami dużych odbiorców?", "Tak, jeśli portal pozwala na import, eksport albo API. Gdy nie, automatyzujemy przynajmniej przygotowanie danych."],
      ["Czy pracujecie z magazynami?", "Tak. Automatyzujemy awizacje, statusy i dokumenty przewozowe."],
      ["Czy przyjedziecie do Oławy?", "Tak, jeśli to pomoże w projekcie. Z Wrocławia to kilkanaście minut drogi."],
      ["Czy firma z Oławy potrzebuje działu IT?", "Nie. Wystarczy osoba, która zna proces. Konfigurację robimy my, a zespół dostaje instrukcję."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "dzierzoniow",
    name: "Dzierżoniów",
    nameGenitive: "Dzierżoniowa",
    nameLocative: "Dzierżoniowie",
    nearbyCitySlugs: ["swidnica", "walbrzych", "zabkowice-slaskie", "strzelin", "klodzko"],
    metaDescription:
      "Automatyzacja procesów dla firm z Dzierżoniowa: produkcja w strefie ekonomicznej, przemysł elektromaszynowy, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Dzierżoniowa uporządkować zlecenia, dokumenty i raporty. Tak, żeby zespół pracował na aktualnych danych, a nie na kolejnych wersjach arkusza.",
    intro: [
      "Dzierżoniów ma długą tradycję przemysłową, od włókiennictwa po elektronikę. Dziś w podstrefie strefy ekonomicznej działają zakłady produkcyjne, a miasto obsługuje handlowo i usługowo cały powiat.",
      "Mniejsze firmy produkcyjne i usługowe często opierają się na arkuszach i poczcie. To działa, dopóki zamówień jest niewiele. Gdy firma rośnie, ręczne przepisywanie danych zaczyna spowalniać całą pracę.",
    ],
    localContext:
      "Dzierżoniowskie firmy konkurują o pracowników z zakładami w Świdnicy i Wałbrzychu. Trudno o osoby do pracy biurowej, więc automatyzacja jest sposobem na rozwój bez rozbudowy administracji.",
    whyHere:
      "W Dzierżoniowie automatyzacja przejmuje powtarzalną pracę biurową. Zespół nie traci czasu na szukanie informacji i przepisywanie zamówień.",
    industries: [
      ["Produkcja elektromaszynowa", "Zlecenia, materiały i dokumentacja techniczna w jednym przepływie."],
      ["Przetwórstwo i produkcja", "Stany, terminy i wysyłki widoczne dla biura i handlowców."],
      ["Handel", "Zamówienia, faktury i stany magazynowe spięte ze sobą."],
      ["Usługi", "Zgłoszenia, terminy i rozliczenia z pełną historią."],
    ],
    processes: [
      ["Zlecenie produkcyjne", "Zamówienie klienta automatycznie zamienia się w zlecenie z terminem."],
      ["Stany materiałów", "Powiadomienie o brakach, zanim zatrzymają produkcję."],
      ["Faktura i wysyłka", "Gotowe zlecenie uruchamia dokumenty i fakturę."],
      ["Raport dla właściciela", "Sprzedaż, produkcja i należności w jednym widoku."],
    ],
    faq: [
      ["Czy automatyzacja ma sens w małej firmie z Dzierżoniowa?", "Tak. W małych zespołach, takich jak wiele firm w Dzierżoniowie, każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy firma z Dzierżoniowa potrzebuje nowego systemu, żeby zacząć?", "Najczęściej nie. Zaczynamy od połączenia poczty, arkuszy i programów, które już macie."],
      ["Czy firma z Dzierżoniowa może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online, bez wyjazdu z Dzierżoniowa. Wystarczy komputer i kilka przykładowych dokumentów."],
      ["Czy zostajecie z firmą z Dzierżoniowa po wdrożeniu?", "Tak. Pilnujemy, żeby rozwiązanie działało, poprawiamy je i pomagamy dokładać kolejne procesy."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "zgorzelec",
    name: "Zgorzelec",
    nameGenitive: "Zgorzelca",
    nameLocative: "Zgorzelcu",
    nearbyCitySlugs: ["boleslawiec", "luban", "jelenia-gora", "lwowek-slaski", "kamienna-gora"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Zgorzelca: handel i usługi transgraniczne z Görlitz, logistyka, energetyka i produkcja. Konsultacja 30 min.",
    heroLead:
      "Pomagamy zgorzeleckim firmom obsługiwać klientów z Polski i Niemiec bez podwójnej pracy: dokumenty, faktury i odpowiedzi w dwóch językach powstają automatycznie.",
    intro: [
      "Zgorzelec tworzy jeden organizm miejski z niemieckim Görlitz. Wiele lokalnych firm ma klientów po obu stronach Nysy, a powiat zgorzelecki to także energetyka i górnictwo węgla brunatnego w rejonie Bogatyni oraz firmy obsługujące ten sektor.",
      "Praca na dwóch rynkach oznacza dwa języki, dwie waluty i różne wymagania dokumentacyjne. Gdy wszystko robi się ręcznie, ta sama informacja jest wpisywana kilka razy.",
    ],
    localContext:
      "Zgorzeleckie firmy usługowe i handlowe często odpowiadają na zapytania po polsku i po niemiecku, wystawiają faktury w złotych i euro, a dokumenty wysyłkowe muszą spełniać wymogi obu krajów.",
    whyHere:
      "W Zgorzelcu automatyzacja usuwa podwójną pracę przy obsłudze klientów z dwóch krajów. Jedne dane, dokumenty w odpowiednim języku i walucie.",
    industries: [
      ["Handel transgraniczny", "Zamówienia, faktury w euro i złotych oraz dokumenty wysyłkowe z jednego źródła."],
      ["Usługi dla klientów z Niemiec", "Zapytania, oferty i rezerwacje obsługiwane w dwóch językach."],
      ["Energetyka i jej dostawcy", "Zlecenia, protokoły i rozliczenia z dużym odbiorcą."],
      ["Logistyka", "Przewozy międzynarodowe z automatycznymi dokumentami."],
    ],
    processes: [
      ["Zapytania w dwóch językach", "Asystent AI przygotowuje odpowiedź w języku klienta do akceptacji."],
      ["Faktury w dwóch walutach", "Faktura w złotych lub euro tworzona z danych zamówienia."],
      ["Dokumenty przewozowe", "Dokumenty dla transportu międzynarodowego generowane automatycznie."],
      ["Protokoły prac", "Protokół odbioru i rozliczenie bez ręcznego przepisywania."],
    ],
    faq: [
      ["Czy automatyzujecie obsługę klientów z Niemiec?", "Tak. Odpowiedzi, oferty i faktury mogą powstawać po niemiecku, z tych samych danych co dokumenty polskie."],
      ["Czy łączycie polski i niemiecki system księgowy?", "Jeśli oba systemy pozwalają na wymianę danych, tak. Szczegóły sprawdzamy na konsultacji."],
      ["Czy pracujecie z firmami z branży energetycznej?", "Tak, zwłaszcza z podwykonawcami, którym automatyzujemy protokoły i rozliczenia."],
      ["Czy musicie przyjechać?", "Nie. Pracujemy zdalnie, a na miejscu spotykamy się, gdy to przyspiesza projekt."],
    ],
    services: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-logistyki", "chatbot-ai-dla-firmy"],
  }),

  town({
    ...base,
    slug: "klodzko",
    name: "Kłodzko",
    nameGenitive: "Kłodzka",
    nameLocative: "Kłodzku",
    nearbyCitySlugs: ["zabkowice-slaskie", "dzierzoniow", "walbrzych", "swidnica", "strzelin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kłodzka i Kotliny Kłodzkiej: turystyka, uzdrowiska, hotele, handel i produkcja. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Kotliny Kłodzkiej obsłużyć sezon bez nadgodzin: rezerwacje, zapytania i faktury obsługiwane automatycznie.",
    intro: [
      "Kłodzko jest centrum Kotliny Kłodzkiej, regionu uzdrowisk i turystyki górskiej. W okolicy leżą Polanica-Zdrój, Duszniki-Zdrój i Kudowa-Zdrój, a wiele firm obsługujących ruch turystyczny ma siedzibę albo zaplecze w Kłodzku.",
      "Obok turystyki działają tu firmy handlowe, produkcyjne i usługowe dla mieszkańców całego powiatu. Łączy je niewielki zespół i duża liczba powtarzalnych zadań biurowych.",
    ],
    localContext:
      "W sezonie liczba zapytań i rezerwacji rośnie kilkukrotnie, a zespół pozostaje ten sam. Poza sezonem trudno uzasadnić dodatkowe etaty, więc firmy szukają sposobu, żeby obsłużyć szczyt bez przepalania ludzi.",
    whyHere:
      "W Kłodzku automatyzacja przejmuje odpowiedzi na typowe pytania, potwierdzenia i faktury. Zespół zajmuje się gośćmi, a nie przepisywaniem danych.",
    industries: [
      ["Hotele i pensjonaty", "Rezerwacje z wielu portali w jednym kalendarzu z automatycznymi potwierdzeniami."],
      ["Uzdrowiska i usługi zdrowotne", "Zapisy, przypomnienia i dokumenty dla gości."],
      ["Handel", "Zamówienia, stany i faktury bez ręcznego przepisywania."],
      ["Produkcja i przetwórstwo", "Zlecenia, dostawy i dokumenty w jednym przepływie."],
    ],
    processes: [
      ["Obsługa zapytań", "Asystent AI odpowiada o dostępność, ceny i dojazd, trudniejsze pytania przekazuje dalej."],
      ["Rezerwacja i zaliczka", "Rezerwacja uruchamia potwierdzenie, link do płatności i przypomnienie."],
      ["Opinie gości", "Prośba o opinię wysyłana automatycznie po pobycie."],
      ["Raport sezonu", "Obłożenie, przychody i źródła rezerwacji w jednym zestawieniu."],
    ],
    faq: [
      ["Czy automatyzujecie rezerwacje w pensjonatach?", "Tak. Łączymy portale rezerwacyjne, pocztę i płatności, żeby potwierdzenia i przypomnienia wychodziły same."],
      ["Czy asystent AI poradzi sobie z pytaniami gości?", "Tak, odpowiada na podstawie informacji o waszym obiekcie. Pytania nietypowe przekazuje do zespołu."],
      ["Czy to się opłaca małemu obiektowi?", "Często tak, bo zyskujecie czas w sezonie. Opłacalność oceniamy wspólnie na bezpłatnej konsultacji."],
      ["Czy lokalizacja w Kłodzku wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy dla firmy z Kłodzka są takie same jak dla firm z największych miast."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "automatyzacja-marketingu"],
  }),

  town({
    ...base,
    slug: "polkowice",
    name: "Polkowice",
    nameGenitive: "Polkowic",
    nameLocative: "Polkowicach",
    nearbyCitySlugs: ["lubin", "glogow", "legnica", "zlotoryja", "jawor"],
    metaDescription:
      "Automatyzacja procesów dla firm z Polkowic: dostawcy motoryzacji w strefie ekonomicznej, usługi dla górnictwa miedzi, transport. Konsultacja 30 min.",
    heroLead:
      "Pomagamy polkowickim dostawcom i firmom usługowym uporządkować zamówienia, raporty i rozliczenia z dużymi odbiorcami.",
    intro: [
      "Polkowice łączą dwie gałęzie przemysłu: wydobycie miedzi w kopalniach zagłębia i produkcję w podstrefie Legnickiej Specjalnej Strefy Ekonomicznej, gdzie działają zakłady branży motoryzacyjnej.",
      "Firmy, które obsługują takie zakłady, pracują według ścisłych wymagań odbiorców. Zamówienia, raporty jakości, protokoły i rozliczenia trzeba przygotować szybko i bez błędów.",
    ],
    localContext:
      "W Polkowicach wiele mniejszych firm pracuje na zmiany i w terenie. Informacje z hali i brygad docierają do biura z opóźnieniem, co wydłuża rozliczenie i zapłatę.",
    whyHere:
      "W Polkowicach automatyzacja skraca drogę od wykonanej pracy do faktury i porządkuje dokumentację, której wymagają duzi odbiorcy.",
    industries: [
      ["Dostawcy motoryzacji", "Zamówienia i raporty jakości zgodne z wymaganiami odbiorców."],
      ["Usługi dla górnictwa", "Karty pracy, protokoły i rozliczenia zleceń."],
      ["Transport", "Zlecenia przewozowe i dokumenty z automatycznym statusem."],
      ["Serwis techniczny", "Zgłoszenia, przeglądy i historia napraw w jednym miejscu."],
    ],
    processes: [
      ["Zamówienia od odbiorcy", "Dane z systemu klienta trafiają do waszego bez przepisywania."],
      ["Raport z prac", "Formularz w telefonie zamiast papierowej karty pracy."],
      ["Protokół i faktura", "Kompletny protokół uruchamia fakturę."],
      ["Terminy i uprawnienia", "Przypomnienia o przeglądach i ważności dokumentów."],
    ],
    faq: [
      ["Czy pracujecie z firmami ze strefy w Polkowicach?", "Tak. Dostawcom i usługodawcom automatyzujemy zamówienia, raporty i rozliczenia."],
      ["Czy pracownicy na zmianach sobie poradzą?", "Tak. Formularze projektujemy tak, żeby dało się je wypełnić w telefonie w minutę."],
      ["Czy łączycie się z systemem księgowym?", "Tak, faktura może powstawać bezpośrednio z danych zlecenia."],
      ["Jaki jest pierwszy krok dla firmy z Polkowic?", "Krótka rozmowa online o tym, co zabiera waszemu zespołowi w Polkowicach najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "jawor",
    name: "Jawor",
    nameGenitive: "Jawora",
    nameLocative: "Jaworze",
    nearbyCitySlugs: ["legnica", "swidnica", "zlotoryja", "walbrzych", "sroda-slaska"],
    metaDescription:
      "Automatyzacja procesów dla firm z Jawora: dostawcy fabryki silników Mercedes-Benz, produkcja, logistyka i usługi przy A4. Konsultacja 30 min.",
    heroLead:
      "Pomagamy jaworskim dostawcom, przewoźnikom i firmom usługowym sprostać wymaganiom dużego odbiorcy bez ręcznej pracy nad dokumentami.",
    intro: [
      "Jawor zmienił się, odkąd w mieście powstała fabryka silników Mercedes-Benz. Za nią przyszli dostawcy, firmy logistyczne i usługowe, a miasto zyskało nowe miejsca pracy przy autostradzie A4.",
      "Współpraca z producentem motoryzacyjnym oznacza ścisłe terminy, raporty i dokumentację. Mniejsze firmy często przygotowują je ręcznie, co pochłania czas zespołu.",
    ],
    localContext:
      "Jaworskie firmy często rosną szybciej, niż rośnie ich biuro. Nowe zamówienia i nowi klienci oznaczają więcej maili, dokumentów i raportów, a zatrudnić kolejne osoby jest trudno.",
    whyHere:
      "W Jaworze automatyzacja pozwala obsłużyć rosnącą liczbę zamówień i wymagania odbiorcy bez rozbudowy administracji.",
    industries: [
      ["Dostawcy motoryzacji", "Zamówienia, raporty jakości i dokumentacja dostaw bez ręcznej pracy."],
      ["Logistyka", "Awizacje, statusy i dokumenty przewozowe generowane automatycznie."],
      ["Usługi dla przemysłu", "Zlecenia, protokoły i rozliczenia w jednym przepływie."],
      ["Handel i usługi lokalne", "Zamówienia, rezerwacje i faktury obsługiwane sprawnie."],
    ],
    processes: [
      ["Zamówienia i harmonogramy", "Harmonogram dostaw od odbiorcy aktualizuje plan bez przepisywania."],
      ["Raporty dla odbiorcy", "Terminowość i jakość liczone automatycznie."],
      ["Dokumenty dostaw", "Zakończona wysyłka uruchamia dokumenty i fakturę."],
      ["Zgłoszenia serwisowe", "Zgłoszenie od klienta trafia do właściwej osoby z terminem."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami branży motoryzacyjnej?", "Tak. Automatyzujemy zamówienia, raporty jakości i dokumentację dostaw."],
      ["Czy firma z Jawora potrzebuje nowego systemu, żeby zacząć?", "Najczęściej nie. Zaczynamy od połączenia poczty, arkuszy i programów, które już macie."],
      ["Czy przyjeżdżacie do Jawora?", "Pracujemy głównie zdalnie, ale z Wrocławia mamy blisko i przyjeżdżamy, gdy trzeba."],
      ["Czy małą firmę z Jawora stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność dla firmy z Jawora oceniamy razem na konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "luban",
    name: "Lubań",
    nameGenitive: "Lubania",
    nameLocative: "Lubaniu",
    nearbyCitySlugs: ["zgorzelec", "jelenia-gora", "lwowek-slaski", "boleslawiec", "kamienna-gora"],
    metaDescription:
      "Automatyzacja procesów dla firm z Lubania: produkcja, handel z Niemcami i Czechami, usługi i przetwórstwo. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy lubańskim firmom uporządkować zamówienia, faktury i obsługę klientów z kraju i zza granicy, bez dokładania pracy biurowej.",
    intro: [
      "Lubań leży blisko granic z Niemcami i Czechami. Działają tu zakłady produkcyjne, firmy handlowe i usługowe, a część z nich sprzedaje i kupuje po drugiej stronie granicy.",
      "W niewielkich firmach jedna osoba często odpowiada za zamówienia, faktury i kontakt z klientami. Automatyzacja zdejmuje z niej powtarzalną część tej pracy.",
    ],
    localContext:
      "Lubańskie firmy często obsługują klientów w kilku językach i walutach. Te same dane wpisuje się wtedy do kilku dokumentów, co zajmuje czas i sprzyja pomyłkom.",
    whyHere:
      "W Lubaniu automatyzacja pozwala małemu zespołowi obsłużyć więcej klientów, także zagranicznych, bez nadgodzin.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki w jednym przepływie."],
      ["Handel transgraniczny", "Faktury i dokumenty w walucie i języku klienta."],
      ["Usługi", "Zgłoszenia, terminy i rozliczenia z historią."],
      ["Przetwórstwo", "Dostawy, partie i dokumenty jakości bez papieru."],
    ],
    processes: [
      ["Zamówienia", "Zamówienie z maila trafia do systemu po automatycznym odczycie."],
      ["Faktury", "Faktura w odpowiedniej walucie tworzona z danych zamówienia."],
      ["Obsługa klienta", "Odpowiedzi na typowe pytania przygotowywane automatycznie."],
      ["Raport miesięczny", "Sprzedaż i koszty w jednym zestawieniu bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z małymi firmami z Lubania?", "Tak. Zaczynamy od jednego procesu, żeby koszt był niewielki, a efekt szybki."],
      ["Czy automatyzujecie faktury w euro?", "Tak. Faktury mogą powstawać w walucie i języku klienta."],
      ["Czy firma z Lubania może współpracować z wami całkowicie zdalnie?", "Tak. Z firmami z Lubania rozmowy, przegląd procesu i wdrożenie prowadzimy online, na waszych kontach w narzędziach, których już używacie."],
      ["Czy pomożecie wybrać, co automatyzować?", "Tak. To właśnie robimy na bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "kamienna-gora",
    name: "Kamienna Góra",
    nameGenitive: "Kamiennej Góry",
    nameLocative: "Kamiennej Górze",
    nearbyCitySlugs: ["jelenia-gora", "walbrzych", "lwowek-slaski", "luban", "zgorzelec"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kamiennej Góry: produkcja w strefie ekonomicznej, tradycje włókiennicze, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Kamiennej Góry uporządkować zlecenia i dokumenty, żeby mały zespół mógł obsłużyć więcej zamówień.",
    intro: [
      "Kamienna Góra ma tradycje włókiennicze i własną specjalną strefę ekonomiczną dla małej przedsiębiorczości. Działają tu zakłady produkcyjne, firmy usługowe i handlowe obsługujące powiat.",
      "W mniejszych zakładach wiele informacji krąży na papierze i w arkuszach. Gdy przybywa klientów, ręczne przepisywanie danych zaczyna spowalniać produkcję i fakturowanie.",
    ],
    localContext:
      "Kamiennogórskie firmy często konkurują o pracowników z większymi ośrodkami. Przy małym biurze każda godzina odzyskana z ręcznej pracy od razu przekłada się na obsługę klientów.",
    whyHere:
      "W Kamiennej Górze automatyzacja pozwala rosnąć bez rozbudowy biura. Zamówienia, dokumenty i raporty tworzą się z danych, które już są.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i dokumenty wysyłkowe w jednym przepływie."],
      ["Szycie i tekstylia", "Zamówienia, rozmiary i terminy widoczne dla hali i biura."],
      ["Handel", "Oferty, zamówienia i faktury bez przepisywania."],
      ["Usługi", "Zgłoszenia i terminy z automatycznymi przypomnieniami."],
    ],
    processes: [
      ["Zlecenie produkcyjne", "Zamówienie klienta zamienia się w zlecenie z terminem."],
      ["Status zamówienia", "Handlowiec i klient widzą postęp bez telefonu na halę."],
      ["Faktura po wysyłce", "Wysłane zamówienie uruchamia fakturę."],
      ["Raport produkcji", "Wykonanie planu liczone automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie małe zakłady produkcyjne?", "Tak. Zaczynamy od jednego procesu, najczęściej od zamówień albo raportów."],
      ["Czy potrzebny jest nowy system?", "Zwykle nie. Pracujemy na narzędziach, które już macie."],
      ["Czy wdrożenie odciągnie zespół z Kamiennej Góry od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania z zespołem z Kamiennej Góry są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Ile kosztuje automatyzacja w firmie z Kamiennej Góry?", "Zależy od procesu i liczby systemów do połączenia. Wycenę pierwszego etapu dostajecie po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "zabkowice-slaskie",
    name: "Ząbkowice Śląskie",
    nameGenitive: "Ząbkowic Śląskich",
    nameLocative: "Ząbkowicach Śląskich",
    nearbyCitySlugs: ["klodzko", "dzierzoniow", "strzelin", "swidnica", "olawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Ząbkowic Śląskich: przetwórstwo, rolnictwo, handel, produkcja i usługi na południu Dolnego Śląska. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Ząbkowic Śląskich uporządkować zamówienia, dostawy i dokumenty, bez ręcznego przepisywania danych.",
    intro: [
      "Ząbkowice Śląskie leżą przy drodze z Wrocławia do Kotliny Kłodzkiej, w rolniczej części Dolnego Śląska. Lokalna gospodarka to przetwórstwo, handel, produkcja i usługi dla mieszkańców powiatu.",
      "W firmach przetwórczych i handlowych dużo czasu zajmują dostawy, zamówienia i dokumenty. Gdy obsługuje się je ręcznie, trudno o aktualny obraz stanów i należności.",
    ],
    localContext:
      "Ząbkowickie firmy często pracują z wieloma drobnymi dostawcami i odbiorcami. Każdy wysyła zamówienia w innej formie, a biuro scala je ręcznie.",
    whyHere:
      "W Ząbkowicach Śląskich automatyzacja porządkuje dostawy i zamówienia w jednym miejscu, żeby zespół wiedział, co jest na stanie i kto zapłacił.",
    industries: [
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości bez papieru."],
      ["Rolnictwo i skupy", "Rozliczenia dostawców i dokumenty w jednym przepływie."],
      ["Handel", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Usługi", "Zgłoszenia, terminy i rozliczenia z przypomnieniami."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dostawa zapisana raz trafia do magazynu i rozliczeń."],
      ["Zamówienia od odbiorców", "Zamówienia z różnych kanałów w jednym widoku."],
      ["Faktury i płatności", "Przypomnienia o należnościach wysyłane automatycznie."],
      ["Raport stanów", "Aktualny stan magazynu bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z firmami przetwórczymi?", "Tak. Automatyzujemy przyjęcie dostaw, dokumenty jakości i rozliczenia."],
      ["Czy mała firma z Ząbkowic Śląskich może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze, także z firmami z Ząbkowic Śląskich. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Czy przyjeżdżacie do firm w Ząbkowicach Śląskich?", "Pracujemy zdalnie, a do firm w Ząbkowicach Śląskich przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
      ["Czy obsługa będzie trudna dla zespołu z Ząbkowic Śląskich?", "Nie powinna. Projektujemy rozwiązania tak, żeby korzystało się z nich w narzędziach, które zespół już zna."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "zlotoryja",
    name: "Złotoryja",
    nameGenitive: "Złotoryi",
    nameLocative: "Złotoryi",
    nearbyCitySlugs: ["legnica", "jawor", "polkowice", "lubin", "sroda-slaska"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Złotoryi: usługi dla przemysłu, produkcja, handel i turystyka pod Legnicą. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy złotoryjskim firmom odzyskać czas tracony na przepisywanie zamówień, faktur i raportów.",
    intro: [
      "Złotoryja, jedno z najstarszych miast w Polsce, leży w pobliżu Legnicy i zagłębia miedziowego. Działają tu firmy usługowe dla przemysłu, zakłady produkcyjne, handel i turystyka związana z historią wydobycia złota.",
      "W małych firmach właściciel często sam pilnuje zamówień, faktur i terminów. Automatyzacja zdejmuje z niego część tej pracy i porządkuje informacje w jednym miejscu.",
    ],
    localContext:
      "Złotoryjskie firmy często pracują dla odbiorców z Legnicy, Lubina i Polkowic. Tacy klienci wymagają dokumentacji i terminowości, a zespół jest niewielki.",
    whyHere:
      "W Złotoryi automatyzacja pozwala małej firmie pracować z dużym klientem bez tonięcia w dokumentach.",
    industries: [
      ["Usługi dla przemysłu", "Zlecenia, protokoły i rozliczenia bez przepisywania."],
      ["Produkcja", "Zamówienia, materiały i terminy w jednym widoku."],
      ["Handel", "Zamówienia i faktury spięte z magazynem."],
      ["Turystyka", "Rezerwacje i zapytania obsługiwane automatycznie."],
    ],
    processes: [
      ["Zlecenie od klienta", "Zlecenie z maila trafia do rejestru z terminem."],
      ["Protokół prac", "Protokół generowany z danych zlecenia."],
      ["Faktura", "Kompletny protokół uruchamia fakturę."],
      ["Przypomnienia", "Terminy, przeglądy i należności pilnowane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z małymi firmami ze Złotoryi?", "Tak. Większość naszych klientów to małe i średnie firmy."],
      ["Jaki jest pierwszy krok dla firmy ze Złotoryi?", "Krótka rozmowa online o tym, co zabiera waszemu zespołowi w Złotoryi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
      ["Czy automatyzacja zadziała na programach, których używamy w Złotoryi?", "W większości przypadków tak. Sprawdzamy to na konsultacji i nie wymieniamy tego, co działa."],
      ["Czy przyjeżdżacie do firm w Złotoryi?", "Pracujemy zdalnie, a do firm w Złotoryi przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "trzebnica",
    name: "Trzebnica",
    nameGenitive: "Trzebnicy",
    nameLocative: "Trzebnicy",
    nearbyCitySlugs: ["wroclaw", "olesnica", "milicz", "wolow", "olawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Trzebnicy: usługi, handel, sadownictwo i przetwórstwo, logistyka przy S5 pod Wrocławiem. Konsultacja 30 min.",
    heroLead:
      "Pomagamy trzebnickim firmom usługowym i handlowym uporządkować zamówienia, terminy i faktury, żeby zespół mógł skupić się na klientach.",
    intro: [
      "Trzebnica leży tuż na północ od Wrocławia, przy drodze ekspresowej S5. Wzgórza Trzebnickie to region sadowniczy, a miasto rozwija się dzięki mieszkańcom, którzy pracują we Wrocławiu, i firmom usługowym, które ich obsługują.",
      "Małe firmy usługowe i handlowe często prowadzą zapisy, zamówienia i faktury ręcznie. Przy rosnącej liczbie klientów łatwo o pomyłki i spóźnione płatności.",
    ],
    localContext:
      "Trzebnickie firmy obsługują coraz więcej klientów z przedmieść Wrocławia. Klienci oczekują szybkiej odpowiedzi, przypomnień i płatności online, a zespół jest mały.",
    whyHere:
      "W Trzebnicy automatyzacja pozwala małej firmie obsługiwać klientów jak duża: szybkie odpowiedzi, przypomnienia i faktury wysyłane automatycznie.",
    industries: [
      ["Usługi dla mieszkańców", "Zapisy, przypomnienia i płatności bez ręcznego pilnowania."],
      ["Sadownictwo i przetwórstwo", "Dostawy, partie i sprzedaż do odbiorców w jednym widoku."],
      ["Handel", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Budownictwo i remonty", "Wyceny, harmonogramy i rozliczenia zleceń."],
    ],
    processes: [
      ["Zapisy i przypomnienia", "Klient rezerwuje termin online i dostaje przypomnienie."],
      ["Wyceny", "Wycena tworzona z szablonu na podstawie formularza klienta."],
      ["Faktury i płatności", "Faktura z linkiem do płatności i przypomnieniem o terminie."],
      ["Opinie klientów", "Prośba o opinię wysyłana automatycznie po usłudze."],
    ],
    faq: [
      ["Czy automatyzujecie małe firmy usługowe?", "Tak. Najczęściej zaczynamy od zapisów, przypomnień i faktur."],
      ["Czy przyjeżdżacie do Trzebnicy?", "Tak, jeśli to potrzebne. Z Wrocławia to kilkadziesiąt minut. Większość pracy robimy zdalnie."],
      ["Czy małą firmę z Trzebnicy stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność dla firmy z Trzebnicy oceniamy razem na konsultacji."],
      ["Czy firma z Trzebnicy potrzebuje działu IT?", "Nie. Wystarczy osoba, która zna proces. Konfigurację robimy my, a zespół dostaje instrukcję."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "automatyzacja-marketingu"],
  }),

  town({
    ...base,
    slug: "wolow",
    name: "Wołów",
    nameGenitive: "Wołowa",
    nameLocative: "Wołowie",
    nearbyCitySlugs: ["wroclaw", "trzebnica", "gora", "sroda-slaska", "glogow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wołowa: usługi, handel, rolnictwo i produkcja nad Odrą, blisko Wrocławia. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy wołowskim firmom zamienić ręczne zapisy, zamówienia i faktury w proste przepływy, które działają same.",
    intro: [
      "Wołów leży nad Odrą, na północny zachód od Wrocławia. Gospodarka powiatu opiera się na rolnictwie, handlu, usługach i mniejszych zakładach produkcyjnych.",
      "W takich firmach zespół jest zwykle mały, a obowiązków dużo. Każda godzina oszczędzona na przepisywaniu danych przekłada się na więcej czasu dla klientów.",
    ],
    localContext:
      "Wołowskie firmy często obsługują klientów z całego powiatu i z Wrocławia. Zamówienia przychodzą telefonicznie, mailowo i przez komunikatory, a potem trzeba je zebrać w jednym miejscu.",
    whyHere:
      "W Wołowie automatyzacja zbiera zamówienia i zgłoszenia z różnych kanałów w jedno miejsce, żeby nic nie ginęło.",
    industries: [
      ["Rolnictwo i skupy", "Dostawy, rozliczenia i dokumenty bez papierowych zeszytów."],
      ["Handel", "Zamówienia z różnych kanałów w jednym widoku."],
      ["Usługi", "Zapisy, terminy i przypomnienia dla klientów."],
      ["Produkcja", "Zlecenia i wysyłki ze statusem dla klienta."],
    ],
    processes: [
      ["Zbieranie zamówień", "Zamówienia z maila i formularzy trafiają do jednej listy."],
      ["Potwierdzenia", "Klient dostaje potwierdzenie i termin automatycznie."],
      ["Faktury", "Faktura tworzona z danych zamówienia."],
      ["Raport miesięczny", "Sprzedaż i należności w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z firmami z Wołowa?", "Tak, pracujemy z firmami z całego Dolnego Śląska, głównie zdalnie."],
      ["Od czego firma z Wołowa powinna zacząć automatyzację?", "Od bezpłatnej, 30-minutowej konsultacji. Wskazujemy jeden proces z najszybszym zwrotem dla firmy z Wołowa i przygotowujemy wycenę pierwszego etapu."],
      ["Czy potrzebne jest nowe oprogramowanie?", "Zwykle nie. Łączymy narzędzia, które już są w firmie."],
      ["Czy zostajecie z firmą z Wołowa po wdrożeniu?", "Tak. Pilnujemy, żeby rozwiązanie działało, poprawiamy je i pomagamy dokładać kolejne procesy."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "strzelin",
    name: "Strzelin",
    nameGenitive: "Strzelina",
    nameLocative: "Strzelinie",
    nearbyCitySlugs: ["olawa", "zabkowice-slaskie", "dzierzoniow", "wroclaw", "olesnica"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Strzelina: kamieniołomy granitu, przetwórstwo rolne, produkcja, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy strzelińskim firmom uporządkować zamówienia, dostawy i dokumentację, żeby biuro nie było wąskim gardłem.",
    intro: [
      "Strzelin jest znany z wydobycia i obróbki granitu. Obok kamieniołomów działa tu przetwórstwo rolne, produkcja, handel i usługi dla mieszkańców powiatu położonego na południe od Wrocławia.",
      "Firmy wydobywcze i przetwórcze obsługują wielu odbiorców, a każda dostawa wymaga dokumentów, ważenia i rozliczenia. Robione ręcznie, zajmują sporo czasu.",
    ],
    localContext:
      "Strzelińskie firmy często wysyłają materiał do klientów budowlanych w całym regionie. Zamówienia, transport i faktury muszą się zgadzać, a informacje krążą między biurem, wagą i kierowcami.",
    whyHere:
      "W Strzelinie automatyzacja łączy zamówienie, wydanie, transport i fakturę w jeden przepływ. Mniej telefonów i przepisywania.",
    industries: [
      ["Wydobycie i obróbka kamienia", "Zamówienia, wydania z wagi i dokumenty dostaw w jednym miejscu."],
      ["Przetwórstwo rolne", "Dostawy surowca, partie i rozliczenia bez papieru."],
      ["Budownictwo", "Wyceny, harmonogramy i rozliczenia zleceń."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury obsługiwane sprawnie."],
    ],
    processes: [
      ["Zamówienie materiału", "Zamówienie od klienta trafia do planu wydań z terminem."],
      ["Wydanie i transport", "Dane z wydania trafiają do dokumentu dostawy automatycznie."],
      ["Faktura", "Dostarczone zamówienie uruchamia fakturę."],
      ["Raport sprzedaży", "Sprzedaż według klientów i produktów bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z firmami wydobywczymi?", "Tak. Automatyzujemy zamówienia, dokumenty wydań i rozliczenia."],
      ["Czy łączycie się z systemem wagowym?", "Jeśli system pozwala na eksport danych, tak. Sprawdzamy to na konsultacji."],
      ["Czy przyjeżdżacie do Strzelina?", "Tak, jeśli to potrzebne. Z Wrocławia mamy blisko."],
      ["Ile trwa pierwsze wdrożenie w firmie ze Strzelina?", "Wąski proces zwykle kilka tygodni. Dokładny termin dla firmy ze Strzelina podajemy po przeglądzie procesu."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "gora",
    name: "Góra",
    nameGenitive: "Góry",
    nameLocative: "Górze",
    nearbyCitySlugs: ["glogow", "wolow", "milicz", "lubin", "trzebnica"],
    metaDescription:
      "Automatyzacja procesów dla firm z Góry: rolnictwo, przetwórstwo, handel i usługi na północy Dolnego Śląska. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Góry i okolic uporządkować zamówienia, dostawy i faktury, bez rozbudowy biura.",
    intro: [
      "Góra leży na północy Dolnego Śląska, między Głogowem a Rawiczem. Powiat ma rolniczy charakter, a lokalną gospodarkę tworzą przetwórstwo, handel, usługi i mniejsze zakłady produkcyjne.",
      "W takich firmach jedna osoba często odpowiada za kilka obszarów naraz. Automatyzacja przejmuje powtarzalne czynności, żeby nic nie umknęło.",
    ],
    localContext:
      "Firmy z powiatu górowskiego często współpracują z odbiorcami z Głogowa, Leszna i Wrocławia. Zamówienia i dokumenty przychodzą w różnych formach i trzeba je scalać ręcznie.",
    whyHere:
      "W Górze automatyzacja zbiera informacje z różnych źródeł w jednym miejscu i pilnuje terminów za zespół.",
    industries: [
      ["Rolnictwo", "Rozliczenia dostaw, dokumenty i terminy bez zeszytów."],
      ["Przetwórstwo", "Partie, dostawy i sprzedaż w jednym widoku."],
      ["Handel", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Usługi", "Zgłoszenia, terminy i przypomnienia."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z różnych kanałów w jednej liście."],
      ["Dostawy", "Przyjęcie dostawy zapisane raz, widoczne wszędzie."],
      ["Faktury", "Faktura tworzona z danych zamówienia lub dostawy."],
      ["Należności", "Przypomnienia o płatnościach wysyłane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z firmami z małych miast?", "Tak. Pracujemy zdalnie, więc lokalizacja nie ma znaczenia."],
      ["Czy mała firma z Góry może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze, także z firmami z Góry. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Czy automatyzacja zadziała na programach, których używamy w Górze?", "W większości przypadków tak. Sprawdzamy to na konsultacji i nie wymieniamy tego, co działa."],
      ["Czy zostajecie z firmą z Góry po wdrożeniu?", "Tak. Pilnujemy, żeby rozwiązanie działało, poprawiamy je i pomagamy dokładać kolejne procesy."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "cyfryzacja-danych-i-dokumentow", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "milicz",
    name: "Milicz",
    nameGenitive: "Milicza",
    nameLocative: "Miliczu",
    nearbyCitySlugs: ["olesnica", "trzebnica", "gora", "wroclaw", "wolow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Milicza: turystyka w Dolinie Baryczy, gospodarstwa rybackie, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Milicza i Doliny Baryczy obsłużyć rezerwacje, zamówienia i faktury bez ręcznego pilnowania każdej sprawy.",
    intro: [
      "Milicz leży w sercu Doliny Baryczy, znanej ze Stawów Milickich i hodowli karpia. Lokalna gospodarka łączy gospodarstwa rybackie, turystykę przyrodniczą, handel i usługi.",
      "Sezonowa sprzedaż ryb i ruch turystyczny oznaczają okresy, w których zamówień i rezerwacji jest bardzo dużo. Mały zespół nie jest w stanie obsłużyć ich ręcznie bez nadgodzin.",
    ],
    localContext:
      "W Miliczu wiele firm to gospodarstwa i obiekty rodzinne. Zamówienia przychodzą telefonicznie i przez komunikatory, a sezon świąteczny czy wakacyjny oznacza lawinę pytań.",
    whyHere:
      "W Miliczu automatyzacja przejmuje zbieranie zamówień, potwierdzenia i przypomnienia, żeby sezon nie zamieniał się w chaos.",
    industries: [
      ["Gospodarstwa rybackie", "Zamówienia sezonowe, odbiory i faktury w jednym miejscu."],
      ["Turystyka i agroturystyka", "Rezerwacje, zapytania i płatności obsługiwane automatycznie."],
      ["Handel", "Zamówienia i stany bez ręcznego liczenia."],
      ["Usługi", "Zapisy i przypomnienia dla klientów."],
    ],
    processes: [
      ["Zamówienia sezonowe", "Formularz zamówienia z terminem odbioru zamiast telefonów."],
      ["Potwierdzenia i przypomnienia", "Klient dostaje potwierdzenie i przypomnienie o odbiorze."],
      ["Rezerwacje", "Rezerwacja uruchamia potwierdzenie i link do płatności."],
      ["Raport sezonu", "Sprzedaż i rezerwacje podsumowane automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie sprzedaż sezonową?", "Tak. Formularz zamówień, potwierdzenia i przypomnienia o odbiorze znacząco odciążają zespół w szczycie."],
      ["Czy pracujecie z obiektami turystycznymi?", "Tak. Automatyzujemy rezerwacje, odpowiedzi na pytania i płatności."],
      ["Czy to trudne w obsłudze?", "Nie. Rozwiązania projektujemy tak, żeby obsługa była prosta, a zespół dostaje instrukcję."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Miliczu?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat w Miliczu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
    ],
    services: ["automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych"],
  }),

  town({
    ...base,
    slug: "sroda-slaska",
    name: "Środa Śląska",
    nameGenitive: "Środy Śląskiej",
    nameLocative: "Środzie Śląskiej",
    nearbyCitySlugs: ["wroclaw", "jawor", "wolow", "legnica", "trzebnica"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Środy Śląskiej: logistyka i produkcja przy A4, dostawcy dla przemysłu, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy średzkim firmom logistycznym i produkcyjnym uporządkować zamówienia, awizacje i dokumenty, żeby nadążać za tempem odbiorców.",
    intro: [
      "Środa Śląska leży przy autostradzie A4, kilkadziesiąt kilometrów od Wrocławia. W okolicy powstały centra logistyczne i zakłady produkcyjne, a miasto obsługuje handlowo i usługowo powiat.",
      "Firmy działające w łańcuchach dostaw muszą szybko przekazywać informacje: awizacje, statusy, dokumenty. Gdy robi się to ręcznie, każdy dodatkowy klient oznacza więcej pracy w biurze.",
    ],
    localContext:
      "Średzkie firmy konkurują o pracowników z Wrocławiem i centrami logistycznymi wzdłuż A4. Trudno o osoby do pracy biurowej, więc automatyzacja pomaga utrzymać tempo.",
    whyHere:
      "W Środzie Śląskiej automatyzacja pozwala obsługiwać więcej zleceń i przesyłek bez dokładania pracy biurowej.",
    industries: [
      ["Logistyka i magazyny", "Awizacje, sloty i dokumenty przewozowe generowane automatycznie."],
      ["Produkcja", "Zlecenia, stany i wysyłki w jednym przepływie."],
      ["Transport", "Zlecenia i statusy przewozów dla klienta."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury obsługiwane sprawnie."],
    ],
    processes: [
      ["Awizacje", "Termin dostawy potwierdzany automatycznie z klientem i przewoźnikiem."],
      ["Status przesyłki", "Klient dostaje informację o statusie bez telefonu."],
      ["Dokumenty", "Dokumenty przewozowe i etykiety tworzone z danych zlecenia."],
      ["Faktura", "Zrealizowane zlecenie uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z firmami logistycznymi przy A4?", "Tak. Automatyzujemy awizacje, statusy i dokumenty przewozowe."],
      ["Czy przyjeżdżacie do Środy Śląskiej?", "Tak, z Wrocławia mamy blisko. Większość pracy robimy zdalnie."],
      ["Czy łączycie się z systemem magazynowym?", "Tak, jeśli system pozwala na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Który proces w Środzie Śląskiej warto zautomatyzować najpierw?", "Ten, który zabiera najwięcej czasu i powtarza się codziennie, najczęściej zamówienia, faktury albo raporty. Wybieramy go razem na konsultacji."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "lwowek-slaski",
    name: "Lwówek Śląski",
    nameGenitive: "Lwówka Śląskiego",
    nameLocative: "Lwówku Śląskim",
    nearbyCitySlugs: ["jelenia-gora", "luban", "boleslawiec", "kamienna-gora", "zgorzelec"],
    metaDescription:
      "Automatyzacja procesów dla firm z Lwówka Śląskiego: turystyka, browarnictwo, produkcja, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Lwówka Śląskiego uporządkować zamówienia, rezerwacje i faktury, żeby mały zespół mógł obsłużyć więcej klientów.",
    intro: [
      "Lwówek Śląski to miasto z tradycją browarniczą i turystyczną, położone na Pogórzu Izerskim. Lokalną gospodarkę tworzą produkcja, handel, usługi i turystyka, w tym coroczne Lwóweckie Lato Agatowe.",
      "Firmy z Lwówka często sprzedają poza powiat, a nawet za granicę. Zamówienia, wysyłki i faktury obsługuje zwykle kilka osób, które mają też wiele innych obowiązków.",
    ],
    localContext:
      "Lwóweckie firmy łączą sprzedaż lokalną z wysyłkową. Zamówienia przychodzą z różnych kanałów, a stany magazynowe i terminy trzeba pilnować ręcznie.",
    whyHere:
      "W Lwówku Śląskim automatyzacja zbiera zamówienia w jednym miejscu, pilnuje stanów i wysyła dokumenty za zespół.",
    industries: [
      ["Browarnictwo i produkcja żywności", "Zamówienia hurtowe, partie i wysyłki w jednym przepływie."],
      ["Turystyka", "Rezerwacje, zapytania i płatności obsługiwane automatycznie."],
      ["Handel", "Sprzedaż lokalna i internetowa ze wspólnym stanem."],
      ["Usługi", "Zapisy, przypomnienia i faktury."],
    ],
    processes: [
      ["Zamówienia hurtowe", "Zamówienie od odbiorcy trafia do planu produkcji i wysyłki."],
      ["Stany magazynowe", "Wspólny stan dla sklepu, hurtu i sprzedaży internetowej."],
      ["Wysyłki", "Opłacone zamówienie uruchamia etykietę i powiadomienie dla klienta."],
      ["Faktury", "Faktura tworzona automatycznie z danych zamówienia."],
    ],
    faq: [
      ["Czy łączycie sprzedaż lokalną z internetową?", "Tak. Spinamy kanały sprzedaży z magazynem, żeby stany były wszędzie aktualne."],
      ["Czy pracujecie z producentami żywności?", "Tak. Automatyzujemy zamówienia, partie i dokumenty wysyłkowe."],
      ["Czy przyjeżdżacie do firm w Lwówku Śląskim?", "Pracujemy zdalnie, a do firm w Lwówku Śląskim przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
      ["Czy firma z Lwówka Śląskiego pozna koszt przed rozpoczęciem prac?", "Tak. Z każdą firmą z Lwówka Śląskiego zaczynamy od wyceny pierwszego etapu, więc decyzję podejmujecie, znając kwotę."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-w-obsludze-klienta"],
  }),
];
