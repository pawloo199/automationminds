import type { GuideArticle } from "./airtable.types";

function completeArticle(
  article: Omit<GuideArticle, "metaTitle" | "metaDescription"> &
    Partial<Pick<GuideArticle, "metaTitle" | "metaDescription">>,
): GuideArticle {
  return {
    ...article,
    metaTitle: article.metaTitle ?? article.title,
    metaDescription:
      article.metaDescription ?? article.excerpt.slice(0, 155),
    imageAlt: article.imageAlt ?? article.title,
  };
}

export const mockGuideArticles: GuideArticle[] = [
  completeArticle({
    id: "a1",
    slug: "5-procesow-do-automatyzacji-w-malej-firmie",
    title: "5 procesów, które warto zautomatyzować w małej firmie",
    excerpt:
      "Nie musisz automatyzować wszystkiego naraz. Oto pięć obszarów, w których małe firmy najszybciej odzyskują czas i porządkują pracę zespołu.",
    category: "Na start",
    publishedAt: "2026-06-15",
    readTimeMinutes: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Zespół analizujący procesy biznesowe",
    body: [
      "W małych firmach każda godzina pracy ma wagę złota. Dlatego automatyzacja nie powinna zaczynać się od skomplikowanych projektów IT, lecz od zadań, które codziennie powtarzają się w identyczny sposób.",
      "## 1. Obsługa formularzy i zapytań",
      "Formularze ze strony, e-mail i social media często trafiają do różnych skrzynek. Automatyczny przepływ może przypisać lead do handlowca, wysłać potwierdzenie klientowi i utworzyć zadanie w CRM — bez ręcznego przeklejania danych.",
      "## 2. Faktury i dokumenty",
      "Wprowadzanie faktur kosztowych, przypomnienia o terminach płatności i archiwizacja dokumentów to klasyka, która zajmuje działom administracji godziny tygodniowo. Integracja skrzynki mailowej z systemem księgowym usuwa większość ręcznej pracy.",
      "## 3. Raporty cykliczne",
      "Jeśli co tydzień ktoś w zespole zbiera te same dane z kilku arkuszy, to sygnał do automatyzacji. Raport może generować się sam o ustalonej porze i trafiać do właściwych osób na Slacku lub mailu.",
      "## 4. Onboarding pracownika",
      "Checklisty, konta w narzędziach, szkolenia wstępne — powtarzalny schemat idealny do usztywnienia. Nowy członek zespołu dostaje spójne doświadczenie, a HR nie musi pamiętać o każdym kroku.",
      "## 5. Obsługa klienta po sprzedaży",
      "Potwierdzenia zamówień, statusy realizacji i proste pytania klientów można obsłużyć automatycznie, zostawiając zespołowi czas na trudniejsze sprawy. Zacznij od jednego kanału i jednego typu zgłoszeń.",
      "Wybierz jeden proces z listy, zmierz ile czasu zajmuje dziś i ile błędów się pojawia. To najlepszy punkt wyjścia do rozmowy o pierwszym wdrożeniu.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a2",
    slug: "jak-wybrac-narzedzie-do-automatyzacji",
    title: "Jak wybrać narzędzie do automatyzacji procesów?",
    excerpt:
      "Make, Zapier, Power Automate czy dedykowany kod? Praktyczna checklista, która pomoże dobrać rozwiązanie do skali firmy i budżetu.",
    category: "Narzędzia",
    publishedAt: "2026-06-08",
    readTimeMinutes: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    imageAlt: "Programista wybierający narzędzia automatyzacji",
    body: [
      "Rynek narzędzi do automatyzacji rośnie szybciej niż zdolność firm do ich sensownego wykorzystania. Zanim wybierzesz platformę, odpowiedz na trzy pytania: jakie systemy już masz, kto będzie utrzymywał automatyzacje i jak złożona jest logika procesu.",
      "## Złożoność procesu",
      "Proste połączenia typu „nowy lead → wiadomość na Slacku” świetnie działają na platformach no-code. Gdy pojawiają się warunki, wiele systemów i duże wolumeny danych, warto rozważyć rozwiązanie z możliwością kodu lub dedykowane integracje API.",
      "## Koszty ukryte",
      "Licencja to nie wszystko. Policz też czas wdrożenia, szkolenia zespołu i koszt zmian przy każdej modyfikacji procesu. Czasem tańsze narzędzie w abonamencie generuje wyższy koszt utrzymania, bo każda zmiana wymaga specjalisty.",
      "## Bezpieczeństwo i RODO",
      "Sprawdź, gdzie przetwarzane są dane, czy można ograniczyć dostęp do poszczególnych przepływów i jak wygląda audyt zmian. W procesach z danymi osobowymi to kryterium równie ważne jak funkcjonalność.",
      "## Skalowalność",
      "Narzędzie, które wystarcza na dziś, za rok może nie nadążać za liczbą operacji. Wybieraj rozwiązanie, które pozwoli dokładać kolejne moduły bez przepisywania wszystkiego od zera.",
      "Nie ma jednego najlepszego narzędzia dla każdej firmy. Najpierw opisz proces, potem dopasuj technologię — nie odwrotnie.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a3",
    slug: "integracja-crm-z-fakturowaniem",
    title: "Integracja CRM z systemem fakturowaniem — co zyskasz?",
    excerpt:
      "Gdy sprzedaż i księgowość pracują na tych samych danych, znika dublowanie pracy i spada liczba błędów na fakturach.",
    category: "Integracje",
    publishedAt: "2026-05-28",
    readTimeMinutes: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    imageAlt: "Dokumenty finansowe i raporty",
    body: [
      "W wielu firmach handlowiec zamyka transakcję w CRM, a potem księgowość ręcznie przenosi dane do systemu fakturowego. To prosta droga do pomyłek w kwotach, NIP-ach i terminach płatności.",
      "## Jedno źródło prawdy",
      "Integracja sprawia, że po wygranym dealu faktura może wygenerować się automatycznie z danymi klienta pobranymi z CRM. Zmiana adresu lub danych kontaktowych aktualizuje się w obu systemach bez dublowania wpisów.",
      "## Szybsze zamknięcie miesiąca",
      "Księgowość nie musi prosić handlowców o uzupełnienia brakujących pól. Raporty sprzedaży i przychodów można zestawiać w czasie zbliżonym do rzeczywistego, zamiast czekać na ręczne zestawienia.",
      "## Lepsza widoczność dla zarządu",
      "Połączone dane pozwalają szybciej odpowiedzieć na pytania: które produkty sprzedają się najlepiej, gdzie utykają faktury i które kontrakty wymagają interwencji.",
      "Wdrożenie zaczynamy od mapy pól — co musi przejść z CRM do faktury i w drugą stronę. Dopiero potem budujemy przepływ i testujemy na kilku realnych transakcjach.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a4",
    slug: "automatyzacja-onboardingu-pracownika",
    title: "Automatyzacja onboardingu pracownika krok po kroku",
    excerpt:
      "Spójne doświadczenie pierwszych dni w firmie i mniej chaosu w HR — bez wdrażania drogiego systemu HRM.",
    category: "HR",
    publishedAt: "2026-05-20",
    readTimeMinutes: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
    imageAlt: "Spotkanie HR z nowym pracownikiem",
    body: [
      "Onboarding to proces, który łatwo rozjechać się między działami: IT zakłada konta, HR zbiera dokumenty, manager nie wie, co już zostało zrobione. Automatyzacja porządkuje te zależności.",
      "## Checklista zamiast maili w błoto",
      "Po podpisaniu umowy uruchamia się sekwencja zadań: przygotowanie stanowiska, dostępy, szkolenia BHP, spotkanie z zespołem. Każdy krok ma właściciela i termin, a status jest widoczny w jednym miejscu.",
      "## Komunikacja z nowym pracownikiem",
      "Automatyczne wiadomości powitalne, harmonogram pierwszego tygodnia i linki do materiałów redukują liczbę pytań „co dalej?”. Pracownik czuje się zaopiekowany, a HR nie odpowiada na te same wiadomości w kółko.",
      "## Integracja z narzędziami",
      "Nowe konto w mailu, Slacku, CRM czy systemie projektowym może zakładać się po zatwierdzeniu etapu przez HR. To eliminuje sytuacje, w których ktoś ma dostęp, zanim powinien go dostać.",
      "Zacznij od jednego działu i jednego typu umowy — np. pracownicy biurowi na pełen etat. Gdy schemat działa, rozszerzasz go na kolejne przypadki.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a5",
    slug: "rodo-a-automatyzacja-procesow",
    title: "RODO a automatyzacja procesów — na co uważać?",
    excerpt:
      "Automatyzacja nie zwalnia z ochrony danych osobowych. Praktyczne wskazówki dla firm, które łączą systemy z danymi klientów i pracowników.",
    category: "Bezpieczeństwo",
    publishedAt: "2026-05-12",
    readTimeMinutes: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    imageAlt: "Bezpieczeństwo danych w firmie",
    body: [
      "Automatyzacja często oznacza przepływ danych między wieloma narzędziami. Z perspektywy RODO każdy taki przepływ trzeba traktować jak proces przetwarzania — z określonym celem, podstawą prawną i zabezpieczeniami.",
      "## Minimalizacja danych",
      "Przenoś tylko pola niezbędne do danego procesu. Jeśli automatyzacja wysyłki faktury nie potrzebuje daty urodzenia klienta, nie przekazuj jej do kolejnego systemu.",
      "## Umowy powierzenia",
      "Sprawdź, czy dostawcy narzędzi automatyzacji i chmury mają podpisane umowy powierzenia. W dokumentacji wdrożenia warto zapisać, jakie kategorie danych przechodzą przez które integracje.",
      "## Dostęp i audyt",
      "Ogranicz dostęp do przepływów z danymi wrażliwymi. Loguj zmiany w automatyzacjach tak samo jak w systemach źródłowych — kto zmodyfikował regułę i kiedy.",
      "## Prawa osób",
      "Upewnij się, że możesz usunąć lub zaktualizować dane we wszystkich systemach powiązanych automatyzacją. Bez tego realizacja żądań RODO będzie wymagała ręcznego grzebania w kilku narzędziach.",
      "RODO nie blokuje automatyzacji — wymusza natomiast świadome projektowanie. Dobrze udokumentowany przepływ to mniejsze ryzyko niż ręczne kopiowanie danych między arkuszami.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a6",
    slug: "ai-w-codziennej-pracy-zespolu",
    title: "AI w codziennej pracy zespołu — gdzie ma sens?",
    excerpt:
      "Sztuczna inteligencja nie zastąpi procesów, ale może przyspieszyć klasyfikację zgłoszeń, streszczenia i obsługę powtarzalnych pytań.",
    category: "AI",
    publishedAt: "2026-05-01",
    readTimeMinutes: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    imageAlt: "Sztuczna inteligencja w biznesie",
    body: [
      "Moda na AI sprawia, że firmy chcą „dodać sztuczną inteligencję” wszędzie. Największy zwrot dają jednak wąskie przypadki, w których model wspiera istniejący proces, a nie zastępuje go bez planu.",
      "## Klasyfikacja zgłoszeń",
      "E-maile i formularze można automatycznie tagować według tematu, pilności lub działu. Zespół dostaje już posortowaną kolejkę zamiast ręcznie czytać każdą wiadomość od zera.",
      "## Streszczenia i notatki",
      "Po spotkaniu sprzedażowym AI może przygotować skrót ustaleń i listę zadań do CRM. Oszczędza to czas, ale wymaga weryfikacji przez człowieka przed wysyłką do klienta.",
      "## Baza wiedzy wewnętrzna",
      "Nowi pracownicy mogą zadawać pytania asystentowi trenowanemu na procedurach firmy. Kluczowe jest aktualizowanie źródeł — inaczej odpowiedzi szybko się dezaktualizują.",
      "## Czego unikać na start",
      "Nie powierzaj AI decyzji finansowych, wycen kontraktowych ani komunikacji kryzysowej bez nadzoru. Zacznij od wsparcia, nie od pełnej autonomii.",
      "AI działa najlepiej jako element automatyzacji z jasnymi regułami: co wchodzi, co wychodzi i kto zatwierdza wynik.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a7",
    slug: "jak-mierzyc-roi-automatyzacji",
    title: "Jak mierzyć ROI automatyzacji w firmie?",
    excerpt:
      "Zwrot z inwestycji to nie tylko zaoszczędzone godziny. Pokażemy, jakie wskaźniki warto śledzić przed i po wdrożeniu.",
    category: "Strategia",
    publishedAt: "2026-04-22",
    readTimeMinutes: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    imageAlt: "Analiza wskaźników biznesowych",
    body: [
      "Bez pomiaru trudno uzasadnić kolejne etapy automatyzacji. ROI nie musi być skomplikowanym modelem — wystarczy kilka konkretnych metryk powiązanych z celem procesu.",
      "## Czas cyklu",
      "Ile trwa od zgłoszenia do zamknięcia sprawy? Porównaj medianę sprzed i po wdrożeniu. Skrócenie o jeden dzień w procesie obsługi klienta często przekłada się na wyraźniejszy efekt niż sama liczba zaoszczędzonych godzin.",
      "## Liczba błędów",
      "Błędne faktury, pomyłki w danych klienta czy zduplikowane wpisy to ukryty koszt. Automatyzacja powinna go redukować — zmierz to explicite.",
      "## Obciążenie zespołu",
      "Zapytaj zespół, ile czasu tygodniowo odzyskali na zadaniach strategicznych. Subiektywna ocena plus twarde dane daje pełniejszy obraz niż sam arkusz kalkulacyjny.",
      "## Koszt utrzymania",
      "Licencje, wsparcie i drobne zmiany w przepływie to stały koszt. Ujmij go obok oszczędności, żeby uniknąć złudzenia „darmowej” automatyzacji po wdrożeniu.",
      "Ustal baseline przed startem projektu. Bez punktu odniesienia każda oszczędność będzie trudna do obrony przed zarządem.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a8",
    slug: "bledy-przy-pierwszym-wdrozeniu-automatyzacji",
    title: "7 błędów przy pierwszym wdrożeniu automatyzacji",
    excerpt:
      "Zbyt szeroki zakres, brak właściciela procesu i ignorowanie wyjątków — oto pułapki, które opóźniają efekty wdrożenia.",
    category: "Wdrożenia",
    publishedAt: "2026-04-10",
    readTimeMinutes: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    imageAlt: "Zespół omawiający wdrożenie",
    body: [
      "Pierwsze wdrożenie automatyzacji ustawia tempo kolejnych projektów. Gdy kończy się chaosem, zarząd długo pamięta. Uniknięcie kilku typowych błędów znacząco podnosi szanse na sukces.",
      "## 1. Zbyt duży zakres",
      "Próba automatyzacji całego działu naraz rozmywa priorytety. Lepiej jeden proces end-to-end niż pięć rozpoczętych równolegle.",
      "## 2. Brak właściciela po stronie klienta",
      "Bez osoby odpowiedzialnej za decyzje biznesowe wdrożenie stoi w miejscu przy pierwszym wyjątku od reguły.",
      "## 3. Pomijanie wyjątków",
      "Każdy proces ma przypadki brzegowe. Trzeba je opisać i zdecydować, czy automatyzować, czy przekierować do człowieka.",
      "## 4. Brak testów na realnych danych",
      "Symulacje na próbkach nie pokazują problemów z formatami, brakującymi polami i duplikatami. Testuj na żywych danych w kontrolowanym oknie.",
      "## 5. Brak dokumentacji",
      "Za pół roku nikt nie będzie pamiętał, dlaczego dany krok istnieje. Prosta dokumentacja i diagram przepływu oszczędzają miesiące później.",
      "Traktuj pierwsze wdrożenie jako pilotaż z jasnymi kryteriami sukcesu, a nie jako „wdrożenie wszystkiego”.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a9",
    slug: "automatyzacja-obslugi-leadow-sprzedazowych",
    title: "Automatyzacja obsługi leadów sprzedażowych",
    excerpt:
      "Szybka reakcja na zapytanie i porządek w CRM to podstawa. Zobacz, jak poukładać lejek bez dokładania handlowców.",
    category: "Sprzedaż",
    publishedAt: "2026-03-28",
    readTimeMinutes: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    imageAlt: "Zespół sprzedaży w pracy",
    body: [
      "Lead traci wartość z każdą godziną bez odpowiedzi. Jednocześnie handlowcy często tracą czas na ręczne wpisywanie danych z formularzy i maili. Automatyzacja łączy szybkość reakcji z porządkiem w CRM.",
      "## Natychmiastowe potwierdzenie",
      "Klient powinien dostać wiadomość w ciągu minut, nie dni. Automatyczny e-mail lub SMS z podsumowaniem zapytania buduje zaufanie, zanim zadzwoni handlowiec.",
      "## Scoring i routing",
      "Nie każdy lead wymaga tej samej ścieżki. Reguły mogą kierować duże szanse do seniora, a mniejsze zapytania do sekwencji nurturingowej.",
      "## Przypomnienia i eskalacje",
      "Gdy handlowiec nie oddzwoni w ustalonym czasie, system przypomina lub eskaluje sprawę do managera. To prosta mechanika, która chroni przychód.",
      "## Raportowanie lejka",
      "Automatyczne zestawienia konwersji między etapami pokazują, gdzie leady utykają — bez ręcznego składania raportu w piątek wieczorem.",
      "Zacznij od jednego źródła leadów i jednej ścieżki follow-up. Gdy działa stabilnie, dokładaj kolejne kanały.",
    ].join("\n\n"),
  }),
  completeArticle({
    id: "a10",
    slug: "od-czego-zaczac-mapowanie-procesow",
    title: "Od czego zacząć mapowanie procesów w firmie?",
    excerpt:
      "Zanim zautomatyzujesz cokolwiek, musisz wiedzieć, jak proces wygląda dziś. Praktyczny przewodnik po warsztacie mapowania.",
    category: "Procesy",
    publishedAt: "2026-03-15",
    readTimeMinutes: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    imageAlt: "Mapowanie procesów biznesowych",
    body: [
      "Mapowanie procesu to fundament sensownej automatyzacji. Bez niego wdrażasz narzędzia na opisach „jak powinno być”, a nie na tym, co naprawdę dzieje się w firmie.",
      "## Wybierz jeden proces",
      "Weź proces, który boli najbardziej: dużo czasu, dużo błędów lub dużo frustracji. Nie mapuj całej organizacji w jednym tygodniu.",
      "## Zbierz ludzi z różnych ról",
      "Osoba wykonująca zadanie, przełożony i ktoś z IT lub administracji widzą różne fragmenty tej samej ścieżki. Warsztat 60–90 minut wystarczy na pierwszy szkic.",
      "## Rysuj kroki i decyzje",
      "Od triggera (co startuje proces) do wyniku (co jest produktem końcowym). Zaznacz, gdzie dane przechodzą między systemami, a gdzie lądują w mailu lub arkuszu.",
      "## Nazwij wąskie gardła",
      "Gdzie czekacie na innych? Gdzie kopiujecie dane ręcznie? Gdzie pojawiają się błędy? To kandydaci do automatyzacji w pierwszej kolejności.",
      "## Ustal priorytet",
      "Na koniec wybierz jeden krok do usprawnienia w ciągu 30 dni. Mapa bez decyzji zostaje w szufladzie — ma prowadzić do działania.",
      "Dobrze zmapowany proces to inwestycja, która zwraca się wielokrotnie przy każdym kolejnym projekcie automatyzacji.",
    ].join("\n\n"),
  }),
].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getLatestGuideArticles(limit = 6): GuideArticle[] {
  return mockGuideArticles.slice(0, limit);
}
