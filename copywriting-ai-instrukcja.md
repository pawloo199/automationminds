# Copywriting z użyciem AI: instrukcja pisania tekstów, które brzmią jak ludzkie

Wersja 1.1 · wrzesień 2026 (dodany rozdział o specyfice języka polskiego)

Dokument ma dwie warstwy:

1. **Część analityczna (rozdziały 1–4):** skąd biorą się „sztuczne” teksty, po czym je rozpoznać i jakie pułapki są specyficzne dla polszczyzny.
2. **Część wykonawcza (rozdziały 5–11):** zasady, proces, przykłady, checklista i gotowy prompt systemowy do wklejenia w dowolne narzędzie AI.

Jeśli potrzebujesz tylko instrukcji dla modelu, przejdź od razu do [rozdziału 10](#10-gotowy-prompt-systemowy).

---

## Spis treści

1. [Cel i zakres](#1-cel-i-zakres)
2. [Dlaczego teksty AI brzmią jak AI](#2-dlaczego-teksty-ai-brzmią-jak-ai)
3. [Katalog znaków rozpoznawczych tekstu AI](#3-katalog-znaków-rozpoznawczych-tekstu-ai)
4. [Specyfika języka polskiego](#4-specyfika-języka-polskiego)
5. [Zasady pisania, które dają ludzki efekt](#5-zasady-pisania-które-dają-ludzki-efekt)
6. [Proces pracy z AI krok po kroku](#6-proces-pracy-z-ai-krok-po-kroku)
7. [Wytyczne dla poszczególnych formatów](#7-wytyczne-dla-poszczególnych-formatów)
8. [Przykłady: przed i po](#8-przykłady-przed-i-po)
9. [Checklista kontroli jakości](#9-checklista-kontroli-jakości)
10. [Gotowy prompt systemowy](#10-gotowy-prompt-systemowy)
11. [Automatyczna kontrola tekstu (skrypt)](#11-automatyczna-kontrola-tekstu-skrypt)
12. [Etyka i prawo](#12-etyka-i-prawo)
13. [Źródła i inspiracje](#13-źródła-i-inspiracje)

---

## 1. Cel i zakres

Dokument opisuje, jak generować teksty reklamowe (strony www, opisy produktów, reklamy, posty, e-maile, hasła) przy pomocy modeli językowych tak, żeby:

- sprzedawały, czyli były jasne, konkretne i prowadziły do działania,
- nie zdradzały maszynowego pochodzenia typowymi „odciskami palców” AI,
- brzmiały jak tekst konkretnej marki, a nie jak uśredniony tekst dowolnej firmy.

Cel nie polega na „oszukiwaniu detektorów”. Detektory AI są zawodne i łatwo je zmylić. Chodzi o coś ważniejszego: cechy, które zdradzają AI, to w większości po prostu **cechy słabego copywritingu** (ogólniki, puste przymiotniki, przewidywalny rytm). Usunięcie ich poprawia skuteczność tekstu.

Dokument dotyczy przede wszystkim języka polskiego, ale zawiera też listę angielskich odpowiedników, bo polskie teksty AI często są kalkami angielskich wzorców.

---

## 2. Dlaczego teksty AI brzmią jak AI

Zrozumienie mechanizmu pomaga pisać lepsze instrukcje.

| Mechanizm | Skutek w tekście |
|---|---|
| **Wybór najbardziej prawdopodobnego słowa.** Model przewiduje kolejne słowo na podstawie statystyki. | Tekst ląduje w „środku rozkładu”: bezpieczne, najczęstsze sformułowania. Każda firma jest „kompleksowa”, każdy produkt „wyjątkowy”. |
| **Trening na tekstach redagowanych** (książki, artykuły, dokumentacja, w dużej mierze angielska). | Pauzy (—), „furthermore”, konstrukcje z angielskiej składni przeniesione do polszczyzny. |
| **Dostrajanie na ocenach ludzi (RLHF).** Model nagradzany za uprzejmość, kompletność i bezpieczeństwo. | Przymilny, stale entuzjastyczny ton, asekuracja, podsumowania na końcu, symetryczne „z jednej strony, z drugiej strony”. |
| **Brak wiedzy o konkretnym kliencie.** Model nie wie, co odróżnia twoją firmę, chyba że mu to powiesz. | Ogólniki, które pasują do każdej marki. Albo gorzej: zmyślone liczby i opinie. |
| **Formatowanie czatowe.** Modele są uczone odpowiadać w stylu czatu. | Nagłówki co dwa akapity, pogrubienia, wypunktowania, emoji jako punktory, pozostałości w stylu „Oto propozycja tekstu:”. |
| **Jednorodność.** Model utrzymuje stały poziom „poprawności”. | Zdania podobnej długości, akapity po trzy zdania, listy zawsze po trzy elementy. Tekstowi brakuje zmienności (tzw. *burstiness*), którą ma pismo człowieka. |

**Wniosek:** sama instrukcja „pisz jak człowiek” nie wystarcza. Trzeba modelowi (a) dostarczyć konkretną wiedzę, (b) wprost zakazać wzorców domyślnych, (c) wymusić kontrolę po napisaniu.

---

## 3. Katalog znaków rozpoznawczych tekstu AI

Pojedynczy element nie przesądza o niczym. Ludzie też czasem napiszą „kompleksowy”. Problemem jest **zagęszczenie**: kilka poniższych cech w jednym akapicie od razu ustawia czytelnika w trybie „to napisał bot”.

### 3.1 Interpunkcja i typografia

| Cecha | Dlaczego zdradza AI | Co robić |
|---|---|---|
| **Pauza (—)** i półpauza ze spacjami (–) w funkcji myślnika | Najbardziej znany sygnał tekstu AI. Większość ludzi nie ma tego znaku na klawiaturze i pisząc szybko, go nie używa. Modele wstawiają go w co drugim zdaniu. | Całkowity zakaz pauzy. Zamiast niej: przecinek, dwukropek, kropka (nowe zdanie) lub nawias. Półpauza dopuszczalna tylko w zakresach liczbowych („10–15 dni”). Dywiz (-) normalnie w wyrazach złożonych („biało-czerwony”). |
| **Cudzysłów angielski** `"tekst"` w polskim tekście | Model domyślnie pisze po angielsku typograficznie. | Polskie cudzysłowy „tekst” (albo konsekwentnie proste, jeśli tak wymaga CMS). Byle jednolicie. |
| **Wykrzykniki** w nadmiarze | Sztuczny entuzjazm. | Maksymalnie jeden na tekst, a najlepiej zero. Emocję ma nieść treść. |
| **Dwukropek w nagłówkach** („Komfort: nowy wymiar wygody”) | Szablonowa konstrukcja tytułu „X: Y”. | Nagłówek jako normalne zdanie lub równoważnik. |
| **Title Case** („Odkryj Nasze Nowe Produkty”) | Angielska konwencja wielkich liter. | W polszczyźnie wielka litera tylko na początku i w nazwach własnych. |
| **Wielokropek i pytajnik w każdym akapicie** | Mechaniczne „budowanie napięcia”. | Rzadko i celowo. |
| **Emoji jako punktory** (✅ 🚀 ✨ 💡 👉) | Szablon postów generowanych masowo. | Emoji tylko jeśli pasuje do marki i kanału, maksymalnie 1–2, nigdy jako znaczniki listy. |
| **Pozostałości markdown** (`**`, `###`) wklejone do CMS lub posta | Ewidentny ślad kopiuj-wklej z czatu. | Oddawać czysty tekst albo HTML zgodny z miejscem publikacji. |

### 3.2 Słownictwo nadużywane przez AI (polski)

Te słowa nie są zakazane w języku. Są zakazane **jako wypełniacz**, czyli wtedy, gdy nie stoi za nimi konkretny fakt.

**Przymiotniki-wydmuszki**

| Unikaj | Zamiast tego |
|---|---|
| kluczowy, istotny, fundamentalny | powiedz, co konkretnie od tego zależy |
| wyjątkowy, unikalny, niepowtarzalny | wskaż, czym się różni (materiał, metoda, liczba) |
| innowacyjny, nowoczesny, przełomowy, rewolucyjny | nazwij nowość: „pierwszy w Polsce z…”, „działa bez…” |
| kompleksowy, holistyczny, wszechstronny | wymień, co dokładnie obejmuje |
| bezproblemowy, płynny, intuicyjny | „konfiguracja zajmuje 3 minuty”, „bez instrukcji” |
| niezawodny, solidny, sprawdzony | gwarancja, liczba lat, wynik testu |
| dynamiczny, szybko zmieniający się (świat, rynek) | usuń |
| najwyższej jakości, premium, luksusowy | skład, pochodzenie, sposób wykonania |
| niezapomniany, magiczny, wyjątkowe doświadczenie | opisz konkretną scenę |

**Czasowniki-wytrychy**

| Unikaj | Zamiast tego |
|---|---|
| odkryj, poznaj, zanurz się | sprawdź, zobacz, przeczytaj (albo konkretna czynność) |
| odblokuj, uwolnij (potencjał) | powiedz, co się da zrobić |
| przenieś na wyższy poziom, zrewolucjonizuj | podaj rezultat liczbowo |
| stanowi, charakteryzuje się, wyróżnia się | „jest”, „ma” |
| umożliwia, pozwala na, zapewnia, gwarantuje (w każdym zdaniu) | strona czynna, podmiot = klient: „zrobisz”, „oszczędzisz” |
| posiadać | mieć |
| dedykowany (w znaczeniu „przeznaczony”) | przeznaczony, dla |
| adresować (problem) | rozwiązywać, zajmować się |
| nawigować (przez proces) | przejść, poradzić sobie |
| optymalizować, usprawniać | co konkretnie: skrócić, obniżyć, przyspieszyć |

**Rzeczowniki z korporacyjnego słownika AI**

podróż (klienta), ekosystem, krajobraz, era, sfera, obszar, synergia, wartość dodana, rozwiązanie/rozwiązania (jako zamiennik produktu), pasja, zaangażowanie, doświadczenie (w sensie *experience*), potencjał, harmonia, równowaga, perełka.

**Frazesy branżowe, które AI powiela z tysięcy stron firmowych**

- „zespół doświadczonych profesjonalistów”
- „indywidualne podejście do każdego klienta”
- „rozwiązania szyte na miarę”
- „wychodzimy naprzeciw oczekiwaniom”
- „spełnimy oczekiwania nawet najbardziej wymagających klientów”
- „połączenie tradycji z nowoczesnością”
- „elegancja i funkcjonalność w jednym”
- „szeroki wachlarz / bogata oferta”
- „dbałość o każdy detal”
- „idealny wybór dla każdego, kto…”
- „sprawdzi się zarówno w…, jak i w…”
- „to coś więcej niż [produkt]”
- „dołącz do grona zadowolonych klientów”

**Wypełniacze i wzmacniacze:** naprawdę, niezwykle, niesamowicie, absolutnie, zdecydowanie, z pewnością, oczywiście, właściwie, po prostu, wręcz, całkowicie, w pełni.

### 3.3 Frazy otwierające, łączące i zamykające

| Typ | Przykłady do eliminacji |
|---|---|
| **Otwarcia** | „W dzisiejszych czasach…”, „W dobie…”, „W dzisiejszym dynamicznym świecie…”, „W erze cyfrowej…”, „Czy kiedykolwiek zastanawiałeś się…?”, „Wyobraź sobie…”, „Nie od dziś wiadomo, że…”, „Każdy z nas…” |
| **Łączniki** | „Co więcej”, „Ponadto”, „Dodatkowo”, „Warto zauważyć/podkreślić, że…”, „Należy pamiętać, że…”, „Nie bez powodu…”, „Tym samym”, „Z kolei”, „W tym kontekście”, „Mając to na uwadze” |
| **Zamknięcia** | „Podsumowując…”, „Reasumując…”, „Nie czekaj!”, „Gotowy na zmianę?”, „Przekonaj się sam!”, „Twoja przygoda z X zaczyna się tutaj”, „Wybierz jakość, wybierz [marka]” |
| **Resztki czatu** | „Oto propozycja tekstu:”, „Mam nadzieję, że to pomoże”, „Oczywiście! Oto…”, „Daj znać, jeśli…”, placeholdery typu „[Nazwa firmy]” pozostawione w tekście |

Angielskie odpowiedniki (przydatne przy tekstach dwujęzycznych): *delve, leverage, utilize, foster, bolster, underscore, unveil, navigate, streamline, robust, seamless, pivotal, crucial, cutting-edge, game-changer, tapestry, testament to, in today's fast-paced world, it's worth noting, at its core, that being said, moreover, furthermore, in conclusion, unlock, elevate, embark, journey, realm, landscape*.

### 3.4 Wzorce składniowe

To najtrudniejsza do wychwycenia grupa, bo słowa są w porządku, a zdradza sama konstrukcja.

1. **Reguła trzech wszędzie.** „Szybko, wygodnie i bezpiecznie.” Trzy przymiotniki, trzy korzyści, trzy punkty na liście, akapit za akapitem. Człowiek wymienia tyle rzeczy, ile ich jest: czasem dwie, czasem pięć.
2. **Fragmentowane triady.** „Prosto. Szybko. Skutecznie.” Styl AI udającego copywritera. Jednorazowo może zadziałać, w każdym tekście to maniera.
3. **„To nie X. To Y.”** / „Nie chodzi o X, chodzi o Y.” / „To nie tylko X, to także Y.” Fałszywe przeciwstawienie, które udaje głęboką myśl.
4. **„Nie tylko…, ale także…”** i **„zarówno…, jak i…”** w każdym akapicie.
5. **Imiesłów na doczepkę.** „Kurtkę uszyto z wodoodpornej tkaniny, zapewniając komfort w każdych warunkach.” Typowe dla polskich tekstów AI i często błędne gramatycznie (imiesłów przysłówkowy wymaga wspólnego podmiotu). Poprawnie: „Kurtka jest z wodoodpornej tkaniny. W deszczu zostaniesz sucha.”
6. **„Dzięki czemu” / „co sprawia, że” / „co przekłada się na”** jako stały doczepiany ogon zdania.
7. **Pytanie retoryczne + natychmiastowa odpowiedź.** „Szukasz idealnego prezentu? Mamy dla ciebie rozwiązanie!”
8. **„Niezależnie od tego, czy jesteś X, Y czy Z…”** (odpowiednik angielskiego *Whether you're…*).
9. **Zdanie zaczynające się od „Dzięki” lub „Wybierając”:** „Wybierając nasz produkt, zyskujesz…”.
10. **Nominalizacja i strona bierna:** „dokonać zakupu”, „przeprowadzić analizę”, „zostało zaprojektowane w celu zapewnienia”. Człowiek napisze „kupić”, „sprawdzić”, „zaprojektowaliśmy, żeby”.
11. **Kalki z angielskiego:** „na koniec dnia”, „to ma sens” (w znaczeniu *makes sense* ujdzie, „robi sens” nie), „w oparciu o”, „bazując na”, „wiodący dostawca”, „ekscytujące wieści”.
12. **Metafora rozwinięta na siłę:** „Pomyśl o naszej aplikacji jak o osobistym szefie kuchni, który…”.

### 3.5 Rytm i struktura

- **Jednakowa długość zdań.** Każde zdanie ma 12–18 słów. Tekst człowieka skacze: dwa słowa, potem trzydzieści.
- **Jednakowe akapity.** Każdy po 3 zdania, każdy zaczyna się od tezy i kończy wnioskiem.
- **Nadmiar struktury.** Nagłówek nad każdym akapitem, wypunktowania tam, gdzie wystarczyłoby jedno zdanie.
- **Pogrubione wstępniaki w punktach:** „**Wygoda:** …”, „**Oszczędność:** …”, „**Bezpieczeństwo:** …”. Najbardziej rozpoznawalny układ list z czatu.
- **Paralelizm list.** Każdy punkt ma tę samą długość i zaczyna się od tej samej formy gramatycznej.
- **Symetria „zalet i wad”.** Ta sama liczba argumentów po obu stronach, nawet gdy jedna jest ewidentnie mocniejsza.
- **Podsumowanie powtarzające treść** na końcu krótkiego tekstu.

### 3.6 Treść i retoryka

- **Uniwersalność.** Test: podmień nazwę marki na konkurenta. Jeśli tekst nadal pasuje, jest do wyrzucenia.
- **Brak konkretu.** Zero liczb, nazw, miejsc, dat, cen, nazwisk, materiałów.
- **Zmyślone konkrety.** Odwrotny problem: model wymyśla statystyki („87% klientów poleca”), opinie, nagrody, certyfikaty. To ryzyko prawne, nie tylko stylistyczne.
- **Hiperbola bez pokrycia:** „najlepszy”, „jedyny taki”, „rewolucja”.
- **Asekuracja:** „może pomóc”, „potencjalnie”, „w wielu przypadkach”. W reklamie osłabia obietnicę do zera.
- **Brak opinii i stanowiska.** AI unika twierdzeń, z którymi ktoś mógłby się nie zgodzić. Dobra reklama często z kimś się nie zgadza.
- **Fałszywa głębia:** zdania brzmiące mądrze, które nic nie mówią („Jakość to nie przypadek, to wybór”).
- **Moralizowanie i pouczanie:** „Pamiętaj, że twoje zdrowie jest najważniejsze”.
- **Tłumaczenie oczywistości:** „Buty są ważną częścią garderoby”.

### 3.7 Ton

- **Stały, wysoki entuzjazm** od pierwszego do ostatniego zdania.
- **Przymilność wobec czytelnika:** „Zasługujesz na to, co najlepsze”.
- **Rodzaj męski jako domyślny:** „Gotowy?”, „Zadowolony klient”. Człowiek piszący do konkretnej grupy dobiera formę albo przeformułowuje zdanie („Gotowe do wyjścia?”, „Zacznij dziś”).
- **Wielka litera w zwrotach do odbiorcy** („Ty”, „Twój”, „Ciebie”) stosowana mechanicznie. Poradnie językowe zalecają małą literę w komunikacji masowej (reklama, strona www), a wielką w korespondencji do konkretnej osoby. Decyzja należy do marki, ale musi być **spójna**. AI często miesza obie formy w jednym tekście. Szczegóły form grzecznościowych i rodzaju: rozdział 4.7 i 4.8.
- **Rejestr bez skoków.** Człowiek potrafi wpleść potoczne słowo w formalny tekst i odwrotnie. AI trzyma jeden rejestr jak linijka.

---

## 4. Specyfika języka polskiego

Modele językowe uczą się głównie na tekstach angielskich. Nawet gdy piszą po polsku, często „myślą” po angielsku: przenoszą szyk, zaimki, interpunkcję, formaty liczb i gotowe slogany. Do tego dochodzą rzeczy, których angielski w ogóle nie ma: odmiana, rodzaj gramatyczny w czasowniku, wołacz, trzy formy liczebnika. Ten rozdział zbiera polskie pułapki w jednym miejscu.

### 4.1 Nadmiar zaimków i dzierżawczych (kalka z *your*)

Angielski musi mówić *your*, polski nie. Polszczyzna pomija podmiot i zaimek, gdy wynika on z kontekstu. Tekst z „twoim” w co drugim zdaniu od razu brzmi jak tłumaczenie.

| Kalka | Naturalnie |
|---|---|
| Zaloguj się na swoje konto, aby zobaczyć swoje zamówienia. | Zaloguj się, żeby zobaczyć zamówienia. |
| Twój telefon, twoje zasady. | Telefon ustawisz po swojemu. |
| My w [marka] wierzymy, że… (*We at X believe*) | Uważamy, że… / albo od razu konkret |
| Zadbaj o swoją skórę z naszym kremem. | Krem na przesuszoną skórę po zimie. |

Reguła: dzierżawczy („twój”, „swój”, „nasz”) tylko wtedy, gdy bez niego zmienia się sens. Podmiot („ty”, „my”, „on”) pomijaj, bo zdradza go końcówka czasownika.

### 4.2 Karuzela synonimów

W szkole uczy się unikać powtórzeń. Modele przesadzają z tym: ten sam produkt staje się kolejno „materacem”, „produktem”, „modelem”, „wyrobem” i „tym rozwiązaniem”. Czytelnik zaczyna się zastanawiać, czy chodzi o jedną rzecz.

- Powtórzenie nazwy produktu w reklamie jest w porządku, a często pomaga (zapamiętywalność).
- Zamiast synonimu: pomiń podmiot („Materac ma trzy strefy. Twardszą stronę…”), użyj zaimka („ten”, „on”) albo przebuduj zdanie.
- Nie używaj zastępników urzędowych: „wyrób”, „artykuł”, „asortyment”, „omawiany model”, „przedmiotowy produkt”.

### 4.3 Szyk zdania

W polszczyźnie najważniejsza, nowa informacja zwykle stoi na końcu zdania. Model przenosi angielską kolejność, więc akcent pada nie tam, gdzie trzeba.

| Szyk angielski | Szyk polski |
|---|---|
| Oferujemy darmową dostawę na wszystkie zamówienia powyżej 200 zł. (*free shipping on all orders over*) | Przy zakupach od 200 zł dostawa jest gratis. |
| Zamów teraz i otrzymaj 20% zniżki na swoje pierwsze zamówienie. | Na pierwsze zakupy dostajesz 20% rabatu. |
| Nowe smaki są teraz dostępne w naszych kawiarniach. | W kawiarniach są już nowe smaki. |

### 4.4 Kalki angielskich sloganów

Najbardziej zdradliwa grupa, bo każde słowo jest poprawne, a całość brzmi jak dubbing.

| Kalka | Oryginał | Zamiast tego |
|---|---|---|
| Twoje zdrowie ma znaczenie | *Your health matters* | konkretna obietnica: „Wyniki badań w 24 godziny” |
| Stworzone z myślą o tobie | *Designed with you in mind* | dla kogo i po co, konkretnie |
| Wszystko, czego potrzebujesz, w jednym miejscu | *Everything you need in one place* | wymień, co jest w środku |
| Poczuj różnicę | *Feel the difference* | nazwij różnicę |
| Robi różnicę / zrób różnicę | *Makes a difference* | „zmienia wiele”, „pomaga”, albo konkret |
| Uzyskaj dostęp | *Get access* | „Wejdź”, „Otwórz”, „Pobierz” |
| Dowiedz się więcej | *Learn more* | „Zobacz, jak działa”, „Sprawdź cennik” |
| Zacznij teraz | *Get started* | „Załóż konto”, „Zamów próbkę” |
| Mamy to dla ciebie | *We've got you covered* | usuń |
| Kochamy to, co robimy | *We love what we do* | pokaż to faktem |
| Przejmij kontrolę nad… | *Take control of…* | „Sam decydujesz, kiedy…” (albo forma bezosobowa) |
| Jesteśmy podekscytowani, mogąc ogłosić | *We're excited to announce* | „Od dziś…”, „Mamy nowość:” |
| Bądź pierwszym, który… | *Be the first to…* | „Zobacz przed premierą” |
| dostarczać wartość, adresować potrzeby | *deliver value, address needs* | co konkretnie robicie |
| na koniec dnia, w oparciu o, wiodący | *at the end of the day, based on, leading* | „w sumie”, „na podstawie”, konkretna pozycja |

### 4.5 Anglicyzmy

Nie wszystkie są złe. Liczy się to, czy odbiorca sam ich używa.

- **Zadomowione, można śmiało:** online, newsletter, e-book, smartfon, laptop, weekend, lunch, fitness, Black Friday.
- **Zależne od odbiorcy (B2B, marketing, IT tak; konsument raczej nie):** feedback, lead, insight, deadline, target, onboarding, performance.
- **Unikaj w komunikacji do konsumenta:** must-have, game changer, eventy (wydarzenia), customizować (dopasować), sale (wyprzedaż, chyba że marka świadomie tak pisze), dedykowany (przeznaczony).

### 4.6 Nowomowa urzędowa

Gdy model chce brzmieć „profesjonalnie” po polsku, zjeżdża w urzędniczy styl.

| Unikaj | Zamiast tego |
|---|---|
| w celu, celem | żeby, aby |
| w zakresie, w ramach | w, przy, albo przebuduj zdanie |
| dokonać zakupu / płatności / rejestracji | kupić, zapłacić, zarejestrować się |
| realizacja zamówienia | wysyłamy, pakujemy |
| niniejszy, przedmiotowy, powyższy | ten |
| w związku z powyższym | dlatego |
| uprzejmie informujemy | usuń i napisz informację |
| posiadać | mieć |

### 4.7 Formy grzecznościowe i wołacz

**Wybór formy** (ustal w briefie):

- **ty:** większość B2C, lifestyle, moda, jedzenie, aplikacje, młodsi odbiorcy.
- **Pan/Pani:** medycyna, prawo, finanse osobiste, odbiorcy 50+, komunikacja 1:1.
- **Państwo:** B2B, komunikaty do grup, oferty dla firm.

**Nie mieszaj form.** Częsty błąd AI: „Zapraszamy Państwa do naszego sklepu. Sprawdź nowości!” Przy formie „Państwo” tryb rozkazujący („sprawdź”) nie działa; zamiast niego: „Zapraszamy do…”, „Prosimy o…”, forma bezosobowa („Nowości można zobaczyć…”) albo 1. osoba liczby mnogiej („Zobaczmy…”).

**Wielka litera:** „Ty”, „Twój” wielką literą w korespondencji do konkretnej osoby (e-mail 1:1, list), w komunikacji masowej zalecana mała. „Państwo”, „Pan”, „Pani” w bezpośrednim zwrocie zwyczajowo wielką. Najważniejsza jest konsekwencja w całym tekście.

**Wołacz.** Angielski go nie ma, więc model i systemy mailingowe często go gubią.

| Błędnie | Poprawnie |
|---|---|
| Dzień dobry, Pani Anna, | Dzień dobry, Pani Anno, |
| Szanowny Pan Tomasz, | Szanowny Panie Tomaszu, |
| Cześć Magdalena! | Cześć, Magdaleno! (albo potocznie: Cześć, Magda!) |

W mailingach masowych personalizuj imieniem tylko wtedy, gdy masz w bazie pole z formą wołacza. W przeciwnym razie lepiej samo „Dzień dobry,”.

### 4.8 Rodzaj gramatyczny i pisanie neutralne

W polszczyźnie rodzaj widać w czasie przeszłym, w przymiotnikach i imiesłowach. Model domyślnie wybiera rodzaj męski: „Gotowy?”, „Zapomniałeś hasła?”, „Zadowolony klient”.

**Techniki pisania neutralnego** (bez ukośników i nawiasów):

| Z rodzajem | Neutralnie |
|---|---|
| Zapomniałeś hasła? | Nie pamiętasz hasła? |
| Jesteś gotowy na zmianę? | Zaczynamy? |
| Czy zastanawiałeś się kiedyś… | (usuń, to i tak fraza AI) |
| Zadowolony klient to nasz cel | Chcemy, żeby klienci wracali |
| Byłeś u nas? Zostaw opinię. | Po wizycie zostaw opinię. |

- Tryb rozkazujący, czas teraźniejszy i przyszły nie mają rodzaju („zrób”, „robisz”, „zrobisz”). Czas przeszły ma („zrobiłeś”, „zrobiłaś”).
- Liczba mnoga („Zadowoleni klienci”) jest powszechnie przyjęta jako forma łączna.
- Unikaj form „zadowolony/a”, „zrobiłeś(-aś)” w reklamie. Są poprawne w formularzach, ale w reklamie brzmią jak dokument.
- Jeśli grupa docelowa jest wyraźnie określona (np. kosmetyki dla kobiet), pisz świadomie w jej rodzaju: „Gotowa na lato?”.
- Feminatywy („klientka”, „projektantka”) stosuj zgodnie z decyzją marki i konsekwentnie. Dublety („klientki i klienci”) w każdym zdaniu męczą; lepiej przebudować zdanie.

### 4.9 Odmiana: liczebniki, nazwy, szablony

**Trzy formy po liczebniku.** Częsty błąd w szablonach i wariantach generowanych przez AI.

| Liczba | Forma | Przykład |
|---|---|---|
| 1 | mianownik l.poj. | 1 minuta, 1 sztuka |
| 2, 3, 4, 22, 23, 24, 32… (ale nie 12–14) | mianownik l.mn. | 3 minuty, 24 sztuki |
| 0, 5–21, 25–31, 35… | dopełniacz l.mn. | 5 minut, 12 sztuk, 25 sztuk |
| ułamki | dopełniacz l.poj. | 1,5 minuty, 2,5 litra |

Przymiotnik też się zmienia: „2 nowe modele”, ale „5 nowych modeli”. Jeśli tekst ma dynamiczne liczby (sklep, aplikacja, mailing), programista musi obsłużyć trzy formy, a nie dwie jak w angielskim.

**Nazwy marek, sklepów i miejsc.** Model unika odmiany, pisząc „w sklepie Biedronka” albo „na platformie Instagram”. Naturalnie: „w Biedronce”, „na Instagramie”, „na Facebooku”, „do iPhone'a”, „w ZUS-ie”, „z InPostu”.

- Obce nazwy z niewymawianą końcówką odmieniamy z apostrofem („iPhone'a”), skrótowce z dywizem („ZUS-u”, „PIT-u”).
- **Nazwa własnej marki:** ustal w briefie, czy i jak ją odmieniać. Część marek tego nie chce, ale wtedy trzeba budować zdania tak, żeby nazwa stała w mianowniku („Marka X to…”), zamiast łamać odmianę.

### 4.10 Liczby, ceny, daty, jednostki

| Element | Po polsku | Błędy typowe dla AI |
|---|---|---|
| Separator dziesiętny | 9,99 zł | 9.99 zł |
| Separator tysięcy | 12 500 zł (spacja; w liczbach 4-cyfrowych można bez: 1299 zł) | 12,500 zł, 12.500 zł |
| Waluta | 199 zł (po liczbie, ze spacją, bez kropki) | PLN 199, 199PLN, zł199 |
| PLN | w cennikach B2B, fakturach, dokumentach | w reklamie konsumenckiej brzmi obco |
| Data | 30 września 2026, 30.09.2026 | 09/30/2026, „30 wrzesień” (brak dopełniacza) |
| Godzina | 9:00 lub 9.00; zakres 9:00–17:00 | 9 AM |
| Liczebnik porządkowy | 3. piętro, 2. miejsce (kropka!), XXI wiek | 3 piętro, 2nd |
| Jednostki | 5 kg, 30 min, 24 h (spacja przed jednostką) | 5kg, 24h |
| Procent | 20% (najczęstszy zapis; „20 %” też poprawne, byle konsekwentnie) | 20 procent w nagłówku |
| Skróty | tys., mln, mld (bez kropki), godz., min (bez kropki), m.in., np. | 10k, 2M |
| Telefon | +48 600 123 456 | 600-123-456 |

### 4.11 Wielkie i małe litery

- Dni tygodnia i miesiące małą literą: „w piątek”, „do końca listopada”. Model pod wpływem angielskiego pisze „Piątek”, „Listopad”.
- Przymiotniki od nazw krajów i miast małą: „polski produkt”, „krakowski sernik”. Mieszkańcy krajów i regionów wielką („Polak”, „Ślązaczka”), mieszkańcy miast małą („krakowianin”, „warszawianka”).
- Święta wielką: „Boże Narodzenie”, „Dzień Matki”, „Wielkanoc”.
- Po dwukropku zwykle mała litera, także w punktach listy („Wygoda: nie musisz…”).
- Nagłówki: wielka litera tylko na początku (bez Title Case), bez kropki na końcu.

### 4.12 Przecinki

Polska interpunkcja opiera się na składni, angielska na intonacji. Model przenosi angielskie nawyki.

| Zasada | Źle | Dobrze |
|---|---|---|
| Brak przecinka po okoliczniku na początku zdania | W tym roku, otwieramy drugi lokal. | W tym roku otwieramy drugi lokal. |
| Brak „oksfordzkiego” przecinka przed „i” w wyliczeniu | kawa, herbata, i sok | kawa, herbata i sok |
| Przecinek przed „że”, „który”, „bo”, „żeby”, „gdy”, „jeśli” (zawsze w zdaniu złożonym) | Wiemy że to ważne. | Wiemy, że to ważne. |
| Przecinek w „zarówno…, jak i…” | zarówno w domu jak i w pracy | zarówno w domu, jak i w pracy |
| Imiesłów przysłówkowy zawsze oddzielony | Kupując dwa dostajesz trzeci gratis. | Kupując dwa, dostajesz trzeci gratis. |
| „Jak” i „niż” w porównaniu bez czasownika: bez przecinka | lekki, jak piórko | lekki jak piórko |

### 4.13 Twarde spacje i „sierotki”

W polskiej typografii jednoliterowe spójniki i przyimki (a, i, o, u, w, z) nie powinny zostawać na końcu wiersza. To samo dotyczy liczby oddzielonej od jednostki („5 | kg”) i skrótu od wyrazu („np. | kawa”).

- Ma to znaczenie przede wszystkim w **druku, na banerach, grafikach i w nagłówkach** o dużym kroju, gdzie łamanie jest widoczne.
- Na stronach www: w HTML twarda spacja to `&nbsp;` (znak U+00A0). W WordPressie są wtyczki, które robią to automatycznie (szukaj „sierotki” w repozytorium wtyczek).
- Skrypt z rozdziału 11 ma opcję `--nbsp`, która wstawia twarde spacje w gotowy tekst.

### 4.14 Czego AI w polszczyźnie używa za rzadko

Dodanie tych elementów sprawia, że tekst brzmi po polsku, a nie jak przekład:

- **Formy bezosobowe na -no/-to:** „Uszyto w Łodzi”, „Sprawdzono na 200 osobach”, „Sprzedano 3 tys. sztuk”. Zwięzłe i bez problemu z rodzajem.
- **Partykuły:** „już”, „tylko”, „aż”, „jeszcze”, „dopiero”, „właśnie”, „przecież”. „Zostały już tylko 3 sztuki” brzmi naturalnie, „Pozostały 3 sztuki” jak komunikat systemu.
- **Pominięty podmiot:** „Pieczemy od piątej rano” zamiast „Nasza piekarnia piecze pieczywo od godziny piątej rano”.
- **Zdrobnienia** tam, gdzie pasują do branży i marki (gastronomia, produkty dla dzieci, kosmetyki): „kawka”, „ciasteczko”. W B2B i finansach nie.
- **Polskie realia:** BLIK, paczkomat, KSeF, PKP, długi weekend majowy, 13. pensja, „Dzień Babci”. Konkretne odniesienia lokalne są mocnym sygnałem ludzkiego autora, bo model domyślnie pisze „globalnie”.
- **Frazeologia polska zamiast kalki angielskiej**, ale oszczędnie i bez wytartych zwrotów („w mgnieniu oka”, „palce lizać” też bywają frazesem).

### 4.15 Tłumaczenie a pisanie od zera

- **Nie każ modelowi tłumaczyć angielskiego tekstu reklamowego.** Dostaniesz kalki z tabeli 4.4. Podaj fakty z oryginału i poproś o napisanie polskiej reklamy od nowa (tzw. transkreacja).
- **Polski tekst jest zwykle o 20–30% dłuższy od angielskiego.** Przy limitach znaków (Google Ads: 30 znaków w nagłówku, 90 w opisie; push, SMS) planuj krótsze komunikaty, a nie skracanie przekładu.
- **Hasła i gry słów praktycznie zawsze trzeba wymyślić na nowo.** Angielska gra słów przetłumaczona dosłownie przestaje być grą słów.

---

## 5. Zasady pisania, które dają ludzki efekt

Zakazy usuwają najgorsze wzorce. Tekst staje się dobry dopiero dzięki zasadom pozytywnym. Część z nich pochodzi bezpośrednio z klasycznych reguł copywritingu.

### 5.1 Konkret zamiast przymiotnika

Każdy przymiotnik oceniający zastąp faktem, który pozwala czytelnikowi samemu dojść do tej oceny.

- Źle: „Wyjątkowo wytrzymały plecak.”
- Dobrze: „Szwy wytrzymują 40 kg. Sprawdziliśmy na workach z cementem.”

### 5.2 Korzyść zamiast cechy

Cecha mówi, czym produkt jest. Korzyść mówi, co zmienia w życiu klienta. Formuła: *cecha → więc → skutek dla klienta*.

- Cecha: „Bateria 5000 mAh.”
- Korzyść: „Rano ładujesz, wieczorem nadal masz 30%.”

### 5.3 Język klienta zamiast języka firmy

Najlepsze sformułowania pochodzą z opinii, maili do obsługi, komentarzy, forów. Jeśli klienci piszą „nie muszę latać po mieście”, użyj tego, a nie „oszczędność czasu dzięki centralizacji usług”.

### 5.4 Zmienny rytm

Mieszaj długość zdań świadomie. Krótkie zdanie po długim działa jak akcent. Dopuść równoważnik zdania. Zacznij czasem od „A” albo „Bo”. Nie każdy akapit musi mieć tezę i puentę.

### 5.5 Pisz do jednej osoby

Wyobraź sobie konkretnego klienta i pisz tak, jak rozmawia się z nim przy ladzie. Test: przeczytaj tekst na głos. Zdanie, którego nie da się naturalnie powiedzieć znajomemu, przepisz.

### 5.6 Jedna myśl na sekcję

Każdy akapit popycha jeden argument. Nie wciskaj wszystkich korzyści do nagłówka.

### 5.7 Czasownik zamiast rzeczownika, strona czynna zamiast biernej

„Sprawdzamy każdą paczkę” zamiast „Każda paczka jest poddawana procesowi weryfikacji”.

### 5.8 Szczegół, którego AI nie wymyśli

Najsilniejszy sygnał ludzkiego autorstwa to informacja, która wymaga bycia na miejscu: nazwa ulicy, imię szefa zmiany, liczba prób receptury, godzina, o której piekarz zaczyna pracę, konkretna wpadka, z której wyciągnięto wnioski. Takie detale musi dostarczyć człowiek w briefie.

### 5.9 Stanowisko

Marka może mieć zdanie: „Nie robimy promocji –70%, bo wtedy ceny byłyby zawyżone przez resztę roku.” Wyraźna opinia odróżnia tekst od uśrednionej papki.

### 5.10 Przejrzystość ponad pomysłowość

Jeśli masz wybór między zabawnym a jasnym, wybierz jasne. Gra słów działa tylko wtedy, gdy nie trzeba jej rozszyfrowywać.

### 5.11 Uczciwość

Żadnych wymyślonych liczb, opinii, nagród, porównań z konkurencją. Jeśli brakuje dowodu, zostaw w tekście widoczne miejsce do uzupełnienia i poinformuj o tym, zamiast zmyślać.

---

## 6. Proces pracy z AI krok po kroku

Najwięcej „AI-owości” wynika nie z modelu, tylko z pustego briefu. Model bez danych ma do dyspozycji wyłącznie średnią z internetu.

### Krok 1. Brief (wypełnia człowiek)

```text
MARKA: nazwa, branża, miasto/rynek
PRODUKT/USŁUGA: co dokładnie sprzedajemy, cena, warianty
CEL TEKSTU: jedno działanie, którego oczekujemy (kup, zapisz się, zadzwoń)
KANAŁ I FORMAT: np. opis produktu w sklepie, reklama Meta, sekcja hero na stronie
LIMIT: liczba znaków / słów
ODBIORCA: kto to jest, jaki ma problem, czego się obawia, jak o tym mówi
WYRÓŻNIKI: 3–5 faktów, których konkurencja nie może powiedzieć o sobie
DOWODY: liczby, opinie klientów (dosłowne cytaty), certyfikaty, historia
JĘZYK KLIENTA: dosłowne fragmenty opinii, maili, komentarzy
TON: np. „jak rozmowa z właścicielem sklepu, na ty, bez zadęcia”
FORMA ZWRACANIA SIĘ: ty/Pan/Pani/Państwo, mała czy wielka litera, rodzaj gramatyczny
ODMIANA NAZWY MARKI: czy odmieniamy i jak (np. „w Rossmannie” czy „w sklepie Rossmann”)
PRZYKŁADY GŁOSU MARKI: 2–3 teksty, które marka uważa za swoje
ZAKAZY SPECYFICZNE: słowa i obietnice, których marka nie używa
```

### Krok 2. Generowanie wariantów, nie jednej wersji

Poproś o 5–10 wersji nagłówka i 2–3 wersje całego tekstu, każdą z innego kąta (problem, rezultat, dowód, historia, kontrast z alternatywą). Pierwsza propozycja modelu jest zwykle najbardziej przewidywalna.

### Krok 3. Autokorekta przez model

Każ modelowi przejrzeć własny tekst według checklisty z rozdziału 9 i wypisać każde naruszenie, zanim poda wersję poprawioną. Druga, osobna prośba działa lepiej niż „pisz i od razu sprawdzaj”.

### Krok 4. Kontrola automatyczna

Przepuść tekst przez skrypt z rozdziału 11. Wyłapie pauzy, cudzysłowy, zakazane słowa, kalki, błędy w zapisie liczb, brak wołacza, podejrzane przecinki i monotonny rytm.

### Krok 5. Redakcja człowieka

- Przeczytaj na głos.
- Zrób test podmiany marki.
- Sprawdź każdy fakt i każdą liczbę.
- Dodaj co najmniej jeden szczegół, który zna tylko ktoś z firmy.

### Krok 6. Test

Ważne teksty (nagłówki, reklamy) testuj A/B. Ostatecznym sędzią jest konwersja, nie to, czy tekst „brzmi dobrze”.

---

## 7. Wytyczne dla poszczególnych formatów

### 7.1 Nagłówek

- Jedna najważniejsza obietnica, konkretna.
- Sprawdzone formuły: „[rezultat] bez [problemu]”, „[kategoria] dla [odbiorcy]”, „Koniec z [nieprzyjemną sytuacją]”, pytanie o ból klienta.
- Test „Teraz możesz…”: jeśli nagłówka nie da się dokończyć po słowach „Teraz możesz…”, prawdopodobnie nie komunikuje wartości.
- Bez dwukropka „X: Y”, bez „Odkryj”, bez „Twój partner w…”.

### 7.2 CTA (przycisk)

- Formuła: czasownik + co dostajesz + ewentualnie doprecyzowanie.
- Słabe: „Wyślij”, „Dowiedz się więcej”, „Kliknij tutaj”, „Zacznij”.
- Mocne: „Pobierz cennik”, „Zarezerwuj stolik na dziś”, „Sprawdź termin dostawy”, „Zacznij 14 dni za darmo”.

### 7.3 Opis produktu w sklepie

- Pierwsze zdanie: dla kogo i do czego, nie „Przedstawiamy…”.
- Potem korzyści oparte na faktach (materiał, wymiary, jak się sprawdza w użyciu).
- Odpowiedz na obiekcje: rozmiar, zwrot, pielęgnacja, czas dostawy.
- Parametry techniczne w osobnej tabeli, nie w prozie.

### 7.4 Reklama (Meta, Google, LinkedIn)

- Pierwsze 125 znaków tekstu głównego w Meta musi działać samodzielnie (reszta jest zwinięta).
- Google Ads: nagłówki do 30 znaków, teksty do 90. Każdy nagłówek musi mieć sens w dowolnej kombinacji.
- Hak w pierwszej linii: konkretny ból, liczba lub zaskakujący fakt. Nie „Szukasz…?”.

### 7.5 Post w mediach społecznościowych

- Pisz tak, jak pisze człowiek w tym kanale: krótsze akapity, język potoczny, pierwsza osoba.
- Bez listy z emoji-punktorami i bez 15 hashtagów.
- Jedna myśl, jedna historia, jedno pytanie lub wezwanie.

### 7.6 E-mail marketingowy

- Temat: konkret lub ciekawość, bez clickbaitu i bez wykrzykników.
- Pisz jak od konkretnej osoby, nie od „Zespołu [marki]”.
- Jedno główne CTA.

### 7.7 Strona „O nas”

- Historia: dlaczego firma powstała, co konkretnie zrobiliście inaczej.
- Imiona, zdjęcia, liczby, daty. Żadnego „zespołu pasjonatów z wieloletnim doświadczeniem”.

---

## 8. Przykłady: przed i po

### Przykład 1. Kawiarnia

**Przed (typowy tekst AI):**

> W dzisiejszym zabieganym świecie każdy z nas potrzebuje chwili wytchnienia. Nasza kawiarnia to wyjątkowe miejsce, które łączy tradycję z nowoczesnością — to nie tylko kawa, to prawdziwe doświadczenie! Odkryj bogatą ofertę starannie wyselekcjonowanych ziaren, domowych wypieków i przytulnej atmosfery. Zapraszamy!

Znalezione wzorce: otwarcie „W dzisiejszym…”, „każdy z nas”, „wyjątkowe”, „łączy tradycję z nowoczesnością”, pauza, „to nie tylko X, to Y”, „doświadczenie”, wykrzyknik, „Odkryj”, „bogatą ofertę”, triada, zero faktów.

**Po:**

> Ziarno palimy sami, we wtorki, na zapleczu przy Długiej 12. W środę rano pachnie nim pół ulicy. Espresso kosztuje 9 zł, sernik pieczemy według przepisu babci Ani i zwykle kończy się przed 14. Stolik przy oknie jest najlepszy, ale trzeba przyjść przed dziewiątą.

### Przykład 2. Oprogramowanie B2B

**Przed:**

> Nasze innowacyjne rozwiązanie umożliwia kompleksowe zarządzanie fakturami, zapewniając płynną integrację z Twoim ekosystemem. Dzięki intuicyjnemu interfejsowi zoptymalizujesz procesy i przeniesiesz swój biznes na wyższy poziom.

**Po:**

> Faktury z KSeF trafiają do systemu same. Księgowa nie przepisuje już numerów NIP, więc zamknięcie miesiąca zajmuje jej dzień zamiast trzech. Podłączenie do Subiekta i Optimy robimy za ciebie, zwykle w godzinę.

### Przykład 3. Opis produktu

**Przed:**

> Ta elegancka i funkcjonalna torba to idealny wybór dla każdej nowoczesnej kobiety. Wykonana z najwyższej jakości materiałów, sprawdzi się zarówno w pracy, jak i podczas weekendowych wyjść.

**Po:**

> Mieści laptopa 14", ładowarkę, bidon i jeszcze zostaje miejsce na lunch. Skóra licowa z garbarni pod Radomiem, więc po roku noszenia wygląda lepiej niż nowa. Pasek odpinasz, gdy idziesz wieczorem bez laptopa.

### Przykład 4. Nagłówek i CTA

| Przed | Po |
|---|---|
| Odkryj nowy wymiar komfortu snu | Materac, na którym przestaniesz budzić się o 4 rano |
| Twój partner w świecie finansów | Księgowość dla jednoosobowych firm za 199 zł miesięcznie |
| Dowiedz się więcej | Sprawdź, czy mamy wolny termin |
| Rozpocznij swoją podróż | Załóż konto w 2 minuty |

---

## 9. Checklista kontroli jakości

Każdy punkt to pytanie tak/nie. Tekst przechodzi dopiero przy komplecie.

**Typografia i forma**

- [ ] Brak pauzy (—) i półpauzy w funkcji myślnika.
- [ ] Cudzysłowy jednolite i zgodne z polską typografią (albo z wytycznymi CMS).
- [ ] Najwyżej jeden wykrzyknik (najlepiej zero).
- [ ] Brak Title Case, brak dwukropka w nagłówkach typu „X: Y”.
- [ ] Brak emoji jako punktorów; emoji tylko jeśli marka ich używa.
- [ ] Brak znaczników markdown i resztek czatu („Oto…”, placeholdery).
- [ ] Forma zwracania się (ty/Ty, rodzaj) spójna w całym tekście.

**Słownictwo**

- [ ] Brak słów z list w rozdziałach 3.2, 3.3 i 4.4–4.6 (albo każde użycie jest uzasadnione konkretem).
- [ ] Brak wzmacniaczy typu „naprawdę”, „niezwykle”, „absolutnie”.
- [ ] Brak kalek z angielskiego.

**Składnia i rytm**

- [ ] Zdania różnej długości; są zdania krótsze niż 6 słów i dłuższe niż 20.
- [ ] Listy i wyliczenia nie są zawsze trzyelementowe.
- [ ] Brak konstrukcji „to nie X, to Y” i „nie tylko…, ale także…” (lub najwyżej jedna w tekście).
- [ ] Brak imiesłowów doczepionych na końcu zdania („…, zapewniając komfort”).
- [ ] Strona czynna, czasowniki zamiast rzeczowników odczasownikowych.
- [ ] Brak podsumowania powtarzającego treść.

**Polszczyzna**

- [ ] Brak zbędnych zaimków dzierżawczych („twój”, „swój”) i podmiotów („my”, „ty”).
- [ ] Ten sam przedmiot nazywany konsekwentnie (brak karuzeli synonimów).
- [ ] Brak kalk angielskich sloganów i nowomowy urzędowej (4.4, 4.6).
- [ ] Jedna forma grzecznościowa (ty / Pan, Pani / Państwo), bez mieszania z trybem rozkazującym przy „Państwo”.
- [ ] Wołacz w powitaniach („Pani Anno”, „Panie Tomaszu”).
- [ ] Rodzaj gramatyczny świadomy: neutralny albo zgodny z grupą docelową; brak „zadowolony/a”.
- [ ] Poprawna odmiana po liczebnikach (1 minuta, 3 minuty, 5 minut) i odmiana nazw („w Biedronce”, nie „w sklepie Biedronka”).
- [ ] Liczby po polsku: 9,99 zł, 12 500 zł, 30 września, 3. piętro, 5 kg.
- [ ] Dni tygodnia i miesiące małą literą.
- [ ] Przecinki: brak po okoliczniku na początku zdania, brak przed „i” w wyliczeniu, jest przed „że”, „który”, „bo”, „żeby”.
- [ ] Twarde spacje po jednoliterowych spójnikach i przyimkach (w druku, na grafikach, w dużych nagłówkach).
- [ ] Mieści się w limicie znaków po polsku (nie przekład skracany na siłę).

**Treść**

- [ ] Test podmiany marki: tekst nie pasuje do konkurenta.
- [ ] Co najmniej jeden konkretny fakt na akapit (liczba, nazwa, miejsce, czas, cena).
- [ ] Każda cecha przełożona na korzyść dla klienta.
- [ ] Każda liczba, opinia i nagroda pochodzi z briefu, nic nie jest zmyślone.
- [ ] Jeden główny cel i jedno główne CTA.
- [ ] Tekst czytany na głos brzmi jak mowa, nie jak pismo urzędowe.

---

## 10. Gotowy prompt systemowy

Poniższy tekst można wkleić jako instrukcję systemową (system prompt, „instrukcje niestandardowe”, instrukcje projektu, plik skilla). Pola w nawiasach kwadratowych uzupełnij lub dostarcz w briefie.

```text
Jesteś doświadczonym polskim copywriterem sprzedażowym. Piszesz teksty reklamowe,
które sprzedają i brzmią jak napisane przez człowieka znającego produkt z bliska.

## ZANIM ZACZNIESZ
1. Sprawdź, czy masz: produkt, odbiorcę, cel (jedno działanie), kanał, limit długości,
   wyróżniki i dowody. Jeśli brakuje czegoś istotnego, zadaj maksymalnie 3 pytania.
   Jeśli nie możesz pytać, pisz z tym, co masz, a brakujące fakty oznacz jako
   [DO UZUPEŁNIENIA: ...].
2. NIGDY nie wymyślaj liczb, statystyk, opinii klientów, nagród, certyfikatów,
   nazwisk ani porównań z konkurencją. Używaj wyłącznie faktów z briefu.

## JAK PISZESZ
- Konkret zamiast przymiotnika: zamiast oceny podaj fakt (liczbę, materiał, miejsce,
  czas, cenę), z którego czytelnik sam wyciągnie wniosek.
- Korzyść zamiast cechy: każda cecha prowadzi do skutku w życiu klienta.
- Język klienta: jeśli brief zawiera cytaty klientów, używaj ich słów.
- Pisz do jednej osoby, jak w rozmowie. Zdanie, którego nie da się naturalnie
  powiedzieć na głos znajomemu, przepisz.
- Rytm: mieszaj zdania krótkie (2–6 słów) z dłuższymi. Nie wszystkie akapity
  tej samej długości. Wyliczaj tyle elementów, ile naprawdę jest (nie zawsze trzy).
- Strona czynna, czasowniki zamiast rzeczowników („kupisz”, nie „dokonasz zakupu”).
- Jasność ponad pomysłowość. Jedna myśl na akapit. Jedno główne CTA.
- CTA = czasownik + to, co klient dostaje („Pobierz cennik”, „Sprawdź termin”).
- Forma zwracania się: [ty / Ty / Pan/Pani], rodzaj: [neutralny / żeński / męski].
  Stosuj konsekwentnie. Jeśli rodzaj nie jest określony, formułuj zdania tak,
  żeby go nie wymagały.
- Ton marki: [opis tonu]. Przykłady głosu marki: [wklej].

## POLSZCZYZNA
- Pisz po polsku od zera, nie tłumacz w myślach z angielskiego. Jeśli dostajesz
  angielski tekst źródłowy, weź z niego fakty i napisz nową polską reklamę.
- Pomijaj zbędne zaimki i dzierżawcze: „Zaloguj się”, nie „Zaloguj się na swoje konto”.
  Nie zaczynaj od „My w [marka]”. Podmiot pomijaj, gdy wynika z końcówki czasownika.
- Nazywaj ten sam przedmiot tak samo. Bez karuzeli synonimów („produkt”, „model”,
  „wyrób”). Powtórzenie nazwy jest lepsze niż zastępnik.
- Najważniejsza informacja na końcu zdania (polski szyk), nie na początku.
- Bez kalk sloganów: „ma znaczenie”, „stworzone z myślą o tobie”, „poczuj różnicę”,
  „robi różnicę”, „uzyskaj dostęp”, „dowiedz się więcej”, „wszystko, czego
  potrzebujesz”, „przejmij kontrolę”, „jesteśmy podekscytowani”, „bądź pierwszym”.
- Bez nowomowy: „w celu”, „w zakresie”, „w ramach”, „dokonać zakupu”, „realizacja
  zamówienia”, „niniejszy”, „uprzejmie informujemy”.
- Anglicyzmy tylko takie, których odbiorca sam używa. W B2C bez „must-have”,
  „game changer”, „eventów”.
- Forma grzecznościowa jedna w całym tekście. Przy „Państwo” nie używaj trybu
  rozkazującego („Sprawdź”); pisz „Zapraszamy do…”, „Prosimy o…” lub bezosobowo.
- Powitania w wołaczu: „Pani Anno”, „Panie Tomaszu”. Bez imienia, jeśli nie znasz
  formy wołacza: „Dzień dobry,”.
- Rodzaj: gdy nie jest określony, unikaj czasu przeszłego w 2. osobie („zapomniałeś”)
  i przymiotników o odbiorcy („gotowy”). Używaj trybu rozkazującego, czasu
  teraźniejszego lub przyszłego, form bezosobowych. Nigdy „zadowolony/a”.
- Odmiana po liczebnikach: 1 minuta, 2–4 minuty, 5–21 minut, 22–24 minuty.
  Odmieniaj nazwy: „w Biedronce”, „na Instagramie”, „do iPhone'a”, „w ZUS-ie”.
- Liczby: 9,99 zł (przecinek dziesiętny), 12 500 zł (spacja), „zł” po liczbie,
  nie „PLN”; daty „30 września 2026” lub „30.09.2026”; „3. piętro”; „5 kg”, „24 h”.
- Dni tygodnia i miesiące małą literą. Przymiotniki od nazw krajów i miast małą.
- Przecinki według polskich zasad: bez przecinka po okoliczniku na początku zdania
  („W tym roku otwieramy”), bez przecinka przed „i” w wyliczeniu, zawsze przed „że”,
  „który”, „bo”, „żeby”, „gdy”, „jeśli”; imiesłów przysłówkowy oddzielony przecinkiem.
- Korzystaj z tego, co brzmi po polsku: formy bezosobowe („Uszyto w Łodzi”),
  partykuły („już tylko 3 sztuki”), polskie realia (BLIK, paczkomat), zdrobnienia
  tylko tam, gdzie pasują do marki.

## BEZWZGLĘDNE ZAKAZY
Interpunkcja i forma:
- Nie używaj pauzy (—) ani półpauzy (–) jako myślnika. Zamiast nich: przecinek,
  dwukropek, kropka lub nawias. Półpauza wolno tylko w zakresach liczb (10–15).
- Polskie cudzysłowy „…”. Wielka litera tylko na początku zdania i w nazwach własnych.
- Najwyżej jeden wykrzyknik w całym tekście. Najlepiej żadnego.
- Bez emoji, chyba że brief wprost na nie pozwala (wtedy max 2, nigdy jako punktory).
- Bez nagłówków w formie „X: Y”, bez pogrubionych wstępniaków w punktach
  („**Wygoda:** ...”), bez markdown, jeśli tekst ma trafić do CMS lub posta.
- Oddajesz sam tekst. Bez wstępów („Oto propozycja…”) i zakończeń („Mam nadzieję…”).

Słowa i frazy (nie używaj, chyba że stoi za nimi konkretny fakt z briefu):
kluczowy, istotny, wyjątkowy, unikalny, niepowtarzalny, innowacyjny, nowoczesny,
przełomowy, rewolucyjny, kompleksowy, holistyczny, wszechstronny, bezproblemowy,
płynny, intuicyjny, niezawodny, dynamiczny, najwyższej jakości, premium, luksusowy,
niezapomniany, magiczny, odkryj, poznaj, zanurz się, odblokuj, uwolnij potencjał,
przenieś na wyższy poziom, zrewolucjonizuj, stanowi, charakteryzuje się, wyróżnia się,
umożliwia, zapewnia, gwarantuje, posiadać, dedykowany, optymalizować, usprawniać,
podróż, ekosystem, krajobraz, era, sfera, synergia, wartość dodana, rozwiązanie
(zamiast nazwy produktu), pasja, doświadczenie (jako „experience”), perełka,
naprawdę, niezwykle, niesamowicie, absolutnie, zdecydowanie, oczywiście, po prostu.

Frazy:
„W dzisiejszych czasach”, „W dobie”, „W dzisiejszym dynamicznym świecie”,
„Czy kiedykolwiek zastanawiałeś się”, „Wyobraź sobie”, „Nie od dziś wiadomo”,
„Co więcej”, „Ponadto”, „Warto zauważyć/podkreślić”, „Należy pamiętać”,
„Podsumowując”, „Reasumując”, „Nie czekaj”, „Gotowy na…?”, „Przekonaj się sam”,
„zespół doświadczonych profesjonalistów”, „indywidualne podejście”, „szyte na miarę”,
„wychodzimy naprzeciw oczekiwaniom”, „połączenie tradycji z nowoczesnością”,
„elegancja i funkcjonalność”, „szeroki wachlarz”, „bogata oferta”, „dbałość o każdy
detal”, „idealny wybór dla”, „sprawdzi się zarówno…, jak i…”, „to coś więcej niż”,
„dołącz do grona zadowolonych klientów”.

Konstrukcje:
- „To nie X. To Y.” / „Nie chodzi o X, chodzi o Y.” / „To nie tylko X, to także Y.”
- „Nie tylko…, ale także…” i „zarówno…, jak i…” (najwyżej raz w tekście).
- Triady przymiotników i rwane triady („Szybko. Prosto. Skutecznie.”).
- Imiesłów doczepiony na końcu zdania („…, zapewniając komfort”).
- Ogony „dzięki czemu”, „co sprawia, że”, „co przekłada się na”.
- Pytanie retoryczne z natychmiastową odpowiedzią („Szukasz X? Mamy dla ciebie Y!”).
- „Niezależnie od tego, czy jesteś X, Y czy Z”.
- Zdania zaczynające się od „Wybierając…” lub „Dzięki…”.
- Strona bierna i nominalizacje („zostało zaprojektowane w celu zapewnienia”).
- Kalki: „na koniec dnia”, „w oparciu o”, „bazując na”, „wiodący”.
- Podsumowanie na końcu, które powtarza treść.
- Asekuracja („może pomóc”, „potencjalnie”) i hiperbola bez dowodu („najlepszy”).
- Moralizowanie, pouczanie, tłumaczenie oczywistości.

## KONTROLA PRZED ODDANIEM
Po napisaniu przejdź tekst i sprawdź:
1. Czy jest choć jeden znak — lub – użyty jako myślnik? Usuń.
2. Czy jest którekolwiek słowo lub konstrukcja z listy zakazów? Przepisz zdanie.
3. Test podmiany marki: czy tekst pasowałby do konkurenta? Jeśli tak, dodaj konkret.
4. Czy każdy akapit ma fakt (liczbę, nazwę, miejsce, czas, cenę)?
5. Czy zdania mają wyraźnie różną długość?
6. Czy każda liczba i opinia pochodzi z briefu?
7. Czy tekst mieści się w limicie znaków kanału?
8. Polszczyzna: czy nie ma kalk, zbędnych „twój/swój”, karuzeli synonimów,
   mieszanych form grzecznościowych, błędnej odmiany po liczebnikach, angielskiego
   zapisu liczb i dat, dni lub miesięcy wielką literą, angielskich przecinków?
Oddaj wyłącznie finalny tekst. Jeśli użytkownik poprosi o warianty, podaj je
ponumerowane, każdy z innego kąta (problem, rezultat, dowód, historia, kontrast),
z jednym zdaniem uzasadnienia pod spodem.
```

### Prompt do osobnej rundy autokorekty

Używaj jako drugiej wiadomości po otrzymaniu tekstu:

```text
Przeczytaj swój tekst jako surowy redaktor, który tropi ślady pisania przez AI.
1. Wypisz każde naruszenie zasad z sekcji POLSZCZYZNA i BEZWZGLĘDNE ZAKAZY,
   cytując fragment.
2. Wskaż zdania, które pasowałyby do dowolnej marki z tej branży.
3. Wskaż miejsca, gdzie przymiotnik zastępuje fakt.
4. Oceń rytm: podaj długość (w słowach) każdego zdania i wskaż monotonne fragmenty.
5. Wskaż zdania, które brzmią jak przekład z angielskiego, i zaproponuj polski szyk.
Następnie podaj poprawioną wersję. Nie dodawaj faktów spoza briefu.
```

---

## 11. Automatyczna kontrola tekstu (skrypt)

Skrypt w Pythonie (bez zależności), który wyłapuje najczęstsze ślady AI i typowe błędy polszczyzny generowanej przez modele. Zapisz jako `ai_lint.py` i uruchom:

```bash
python3 ai_lint.py tekst.txt
```

Z opcją `--nbsp` dodatkowo zapisze kopię tekstu z twardymi spacjami (po jednoliterowych spójnikach i przyimkach, między liczbą a jednostką, po skrótach typu „np.”) jako `tekst_nbsp.txt`:

```bash
python3 ai_lint.py tekst.txt --nbsp
```

Wyniki są pogrupowane w kategorie: `typografia`, `AI`, `kalka`, `urzędowe`, `liczby`, `wielka litera`, `forma`, `rodzaj`, `wołacz`, `przecinek`, `rytm`.

```python
import re, sys, statistics

# Słowa i frazy typowe dla AI (rozdział 3)
ZAKAZANE = [
    r"kluczow\w*", r"istotn\w*", r"wyjątkow\w*", r"unikaln\w*", r"niepowtarzaln\w*",
    r"innowacyjn\w*", r"przełomow\w*", r"rewolucyjn\w*", r"kompleksow\w*",
    r"holistyczn\w*", r"wszechstronn\w*", r"bezproblemow\w*", r"intuicyjn\w*",
    r"niezawodn\w*", r"dynamiczn\w*", r"najwyższej jakości", r"niezapomnian\w*",
    r"odkryj\w*", r"zanurz\w*", r"odblokuj\w*", r"potencjał\w*", r"wyższy poziom",
    r"stanowi\w*", r"charakteryzuj\w*", r"umożliwi\w*", r"zapewni\w*",
    r"gwarantuj\w*", r"posiada\w*", r"dedykowan\w*", r"optymaliz\w*", r"usprawni\w*",
    r"podróż\w*", r"ekosystem\w*", r"krajobraz\w*", r"synergi\w*", r"wartość dodan\w*",
    r"pasj\w*", r"perełk\w*", r"naprawdę", r"niezwykle", r"niesamowici\w*",
    r"absolutnie", r"zdecydowanie", r"w dzisiejsz\w+", r"w dobie",
    r"każdy z nas", r"to nie tylko", r"wyobraź sobie", r"gotow[ya] na",
    r"co więcej", r"ponadto", r"warto (zauważyć|podkreślić|wspomnieć)",
    r"należy pamiętać", r"podsumowując", r"reasumując", r"nie czekaj",
    r"szyt\w* na miarę", r"indywidualne podejście", r"tradycj\w* z nowoczesnością",
    r"szeroki wachlarz", r"bogat\w* ofert\w*", r"idealny wybór",
    r"coś więcej niż", r"nie tylko\b.*\bale (także|również)", r"zarówno\b.*\bjak i",
    r"to nie \w+[.,] to", r"niezależnie od tego, czy", r"dzięki czemu",
    r"co przekłada się", r"oto (propozycja|tekst)",
]

# Kalki z angielskiego, anglicyzmy i nowomowa (rozdział 4)
KALKI = [
    r"ma znaczenie", r"stworzon\w* z myślą o", r"wszystko, czego potrzebujesz",
    r"poczuj różnicę", r"\brobi\w* różnicę|\bzrób różnicę", r"uzyskaj dostęp",
    r"dowiedz się więcej", r"zacznij teraz", r"mamy (cię|to dla)",
    r"kochamy to, co robimy", r"przejmij kontrolę", r"podekscytowan\w*",
    r"bądź pierwsz\w+", r"dostarcza\w* wartoś\w*", r"adresowa\w*", r"na koniec dnia",
    r"w oparciu o", r"bazując na", r"wiodąc\w*", r"\bmy w [A-ZŁŚŻŹĆ]\w*",
    r"must[- ]have", r"game[- ]?changer\w*", r"event\w*", r"customiz\w*",
]
NOWOMOWA = [
    r"\bw celu\b", r"\bcelem\b", r"\bw zakresie\b", r"\bw ramach\b",
    r"dokona\w* (zakupu|płatności|rejestracji|zamówienia)", r"realizacj\w* zamówie\w*",
    r"niniejsz\w*", r"przedmiotow\w*", r"w związku z powyższym",
    r"uprzejmie informuj\w*", r"\bwyrób\b", r"asortyment\w*", r"omawian\w*",
]
MIESIACE_DNI = (r"Poniedział\w*|Wtor\w*|Środ[aęyą]|Czwart\w*|Piąt\w*|Sobot\w*|"
                r"Niedziel\w*|Stycze?ń|Stycznia|Luty|Lutego|Marzec|Marca|Kwie[ct]\w*|"
                r"Czerw(iec|ca)|Lip(iec|ca)|Sierp\w*|Wrze[sś]\w*|Październik\w*|"
                r"Listopad\w*|Grud\w*")
PRZYIMKI = (r"mimo|chyba|tak|dlatego|pomimo|zwłaszcza|podczas|tylko|przy|w|we|z|ze|"
            r"na|do|od|o|po|dla|przez|za|pod|nad|przed|u|a|i|oraz|lub|albo|to|niż")


def sprawdz(t):
    wyniki = []
    dodaj = lambda kat, opis: wyniki.append(f"[{kat}] {opis}")

    # Typografia
    for znak, opis in [("—", "pauza"), (" – ", "półpauza jako myślnik"),
                       ('"', "cudzysłów prosty/angielski"), ("**", "markdown")]:
        if (n := t.count(znak)):
            dodaj("typografia", f"{opis}: {n}x")
    if (n := t.count("!")) > 1:
        dodaj("typografia", f"wykrzykniki: {n}x")
    if re.search(r"[\U0001F300-\U0001FAFF✅✨]", t):
        dodaj("typografia", "emoji w tekście")
    if re.search(r"\[[^\]]*(nazwa|firma|marka)[^\]]*\]", t, re.I):
        dodaj("typografia", "pozostawiony placeholder")

    # Słownictwo AI, kalki, nowomowa
    for kat, lista in [("AI", ZAKAZANE), ("kalka", KALKI), ("urzędowe", NOWOMOWA)]:
        for wzor in lista:
            flagi = 0 if wzor.startswith(r"\bmy w") else re.I
            for m in re.finditer(wzor, t, flagi):
                dodaj(kat, f"'{m.group(0)}'")

    # Liczby, ceny, daty, jednostki
    for wzor, opis in [
        (r"\d\s?PLN|PLN\s?\d", "PLN w tekście (w reklamie konsumenckiej: zł)"),
        (r"\b\d{1,3}(,\d{3})+\b(?!,)", "przecinek jako separator tysięcy"),
        (r"\b\d{1,3}(\.\d{3})+\b", "kropka jako separator tysięcy"),
        (r"\b\d+\.\d{1,2}\s?zł", "kropka dziesiętna w cenie (powinien być przecinek)"),
        (r"\b\d+(zł|kg|g|km|m|cm|ml|l|min|h)\b", "brak spacji między liczbą a jednostką"),
        (r"\b\d{1,2}/\d{1,2}/\d{2,4}\b", "anglosaski zapis daty"),
        (r"\b\d{1,2}\s?(AM|PM|am|pm)\b", "godzina w formacie AM/PM"),
        (r"\b\d+(st|nd|rd|th)\b", "angielski liczebnik porządkowy"),
        (r"\b\d+[kKM]\b", "skrót 10k/2M (po polsku: tys., mln)"),
        (r"\b\d{1,2} (styczeń|luty|marzec|kwiecień|maj|czerwiec|lipiec|sierpień|"
         r"wrzesień|październik|listopad|grudzień)\b", "miesiąc w mianowniku po dacie"),
    ]:
        for m in re.finditer(wzor, t):
            dodaj("liczby", f"{opis}: '{m.group(0)}'")

    # Wielkie litery: dni i miesiące w środku zdania
    for m in re.finditer(r"(?<=[^.!?\n:]\s)(" + MIESIACE_DNI + r")\b", t):
        dodaj("wielka litera", f"dzień/miesiąc wielką literą: '{m.group(0)}'")

    # Spójność ty/Ty
    male = re.findall(r"\b(ty|twój|twoja|twoje|twoim|twojej|twoich|twoją|ciebie|tobie)\b", t)
    duze = re.findall(r"(?<=[^.!?\n]\s)(Ty|Twój|Twoja|Twoje|Twoim|Twojej|Twoich|Twoją|"
                      r"Ciebie|Tobie)\b", t)
    if male and duze:
        dodaj("forma", f"niespójna wielka litera: {len(duze)}x wielką, {len(male)}x małą")

    # Nadmiar dzierżawczych (kalka z 'your')
    slowa = len(t.split())
    dz = re.findall(r"\b(twój|twoj\w+|twoją|swój|swoj\w+|swoją)\b", t, re.I)
    if slowa and len(dz) / slowa > 0.02:
        dodaj("forma", f"dużo zaimków dzierżawczych: {len(dz)} na {slowa} słów")

    # Rodzaj męski jako domyślny
    for m in re.finditer(r"\b\w+łeś\b|\b(gotowy|zadowolony|pewny|przekonany)\b\?", t, re.I):
        dodaj("rodzaj", f"forma męska, sprawdź czy celowa: '{m.group(0)}'")
    for m in re.finditer(r"\b\w+/(a|na|ła|łaś|aś)\b|\w+\(-?(a|aś|łaś|na)\)", t):
        dodaj("rodzaj", f"forma z ukośnikiem/nawiasem: '{m.group(0)}'")

    # Wołacz w powitaniu
    for m in re.finditer(r"(?:Dzień dobry|Szanown\w+|Cześć|Witaj|Hej),?\s+"
                         r"((?:Pani\s+)?[A-ZŁŚŻŹ]\w*a|Pan\s+[A-ZŁŚŻŹ]\w*)(?=[,!\n])", t):
        dodaj("wołacz", f"mianownik zamiast wołacza: '{m.group(0)}'")

    # Przecinki (tylko do sprawdzenia, możliwe fałszywe alarmy)
    for m in re.finditer(r"(?:^|[.!?]\s+)((?:W|We|Od|Do|Po|Przez|Dla|Na|Za|Przed)\s+\w+"
                         r"(?:\s+\w+)?),\s+(?!któr|że|gdy|jeśli|bo|aby|żeby|kiedy|gdzie|jak|co)",
                         t, re.M):
        dodaj("przecinek", f"przecinek po okoliczniku na początku zdania? '{m.group(0).strip()}'")
    for m in re.finditer(r"\w+, \w+, (i|oraz|lub|albo) \w+", t):
        dodaj("przecinek", f"przecinek przed spójnikiem w wyliczeniu? '{m.group(0)}'")
    for m in re.finditer(r"(\w+)\s+(że|któr[yaeiąo]\w*)\b", t):
        if not re.fullmatch(PRZYIMKI, m.group(1), re.I):
            dodaj("przecinek", f"brak przecinka przed '{m.group(2)}'? '{m.group(0)}'")

    # Rytm zdań
    zdania = [z for z in re.split(r"(?<=[.!?])\s+", t) if z.strip()]
    dl = [len(z.split()) for z in zdania]
    if len(dl) >= 6:
        odch = statistics.pstdev(dl)
        print(f"Zdania: {len(dl)}, średnio {statistics.mean(dl):.1f} słów, "
              f"odchylenie {odch:.1f} (poniżej 3.5 = monotonny rytm)")
        if odch < 3.5:
            dodaj("rytm", "monotonny rytm zdań")
    return wyniki


def twarde_spacje(t):
    nbsp = " "
    t = re.sub(r"(?<![\w ])([aiouwzAIOUWZ])\s+", r"\1" + nbsp, t)
    t = re.sub(r"(\d)\s+(zł|gr|kg|g|km|m|cm|mm|ml|l|min|h|%|tys\.|mln|mld)(?!\w)",
               r"\1" + nbsp + r"\2", t)
    t = re.sub(r"\b(np\.|m\.in\.|ok\.|godz\.|ul\.|tel\.)\s+", r"\1" + nbsp, t)
    return t


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("Użycie: python3 ai_lint.py tekst.txt [--nbsp]")
    tekst = open(sys.argv[1], encoding="utf-8").read()
    if "--nbsp" in sys.argv:
        wynik = sys.argv[1].rsplit(".", 1)[0] + "_nbsp.txt"
        open(wynik, "w", encoding="utf-8").write(twarde_spacje(tekst))
        print(f"Zapisano tekst z twardymi spacjami: {wynik}")
    problemy = sprawdz(tekst)
    print("\n".join(problemy) if problemy else "Brak wykrytych problemów.")
```

Skrypt to sito, nie wyrocznia. Trafienie oznacza „sprawdź to miejsce”, nie „usuń bezwarunkowo”. Słowo „gwarantujemy” w zdaniu o 30-dniowej gwarancji zwrotu jest w porządku. Najwięcej fałszywych alarmów dają kategorie `przecinek` i `rodzaj` (np. „zapomniałeś” w tekście celowo pisanym do mężczyzn), bo reguły interpunkcji i rodzaju zależą od składni, której proste wyrażenia regularne nie rozumieją.

---

## 12. Etyka i prawo

- **Zmyślone opinie i statystyki** to nie tylko zły styl. Publikowanie fałszywych opinii konsumenckich i nieprawdziwych twierdzeń w reklamie jest w UE zakazane jako nieuczciwa praktyka rynkowa (w Polsce pilnuje tego UOKiK). Model nie może być źródłem dowodów.
- **Superlatywy** („najlepszy”, „nr 1”, „najtańszy”) wymagają dowodu. Bez niego to reklama wprowadzająca w błąd.
- **Oświadczenia zdrowotne i ekologiczne** podlegają osobnym, ostrym regulacjom (suplementy, żywność, kosmetyki, tzw. zielone deklaracje). Teksty z tych branż zawsze do weryfikacji przez człowieka.
- **Oznaczanie treści AI:** przepisy (m.in. unijny AI Act) nakładają obowiązki przejrzystości w określonych sytuacjach. Zwykły tekst reklamowy zredagowany i zatwierdzony przez człowieka zazwyczaj nie wymaga oznaczenia, ale warto to zweryfikować dla swojego przypadku, bo przepisy i wytyczne się rozwijają.
- **Cel tego dokumentu** to lepsze teksty, nie ukrywanie udziału AI tam, gdzie jego ujawnienie jest wymagane.

---

## 13. Źródła i inspiracje

- Zasady copywritingu konwersyjnego (jasność ponad pomysłowość, korzyści zamiast cech, konkret, język klienta, formuły nagłówków i CTA): skill `copywriting` i jego materiały referencyjne.
- Siedmioetapowa redakcja tekstu (jasność, głos, „i co z tego”, dowód, konkret, emocja, zero ryzyka): skill `copy-editing`.
- Lista wzorców AI w tekstach angielskich (pauza jako główny sygnał, nadużywane czasowniki, przymiotniki, łączniki, frazy otwierające i zamykające, konstrukcje „Whether you're…”, „It's not just X”): materiał referencyjny `ai-writing-detection` ze skilla `seo-audit`, oparty m.in. na publikacjach Grammarly, Microsoft 365, Plagiarism Today i Rolling Stone (2025).
- Zasady polskiej typografii i interpunkcji (pauza, półpauza, dywiz, cudzysłów „…”, wielka litera w zwrotach grzecznościowych): Wielki słownik ortograficzny PWN, Poradnia Językowa PWN, Rada Języka Polskiego.
- Odmiana liczebników, wołacz, formy grzecznościowe, zapis liczb, dat i jednostek, wielkie litery, interpunkcja: Wielki słownik poprawnej polszczyzny PWN, Słownik języka polskiego PWN, zasady pisowni i interpunkcji (Rada Języka Polskiego).
- Polskie wzorce AI (imiesłów doczepiony, frazesy branżowe, kalki, forma „Gotowy?”) opracowano na podstawie analizy typowych wyników modeli językowych generujących polskie teksty reklamowe.
