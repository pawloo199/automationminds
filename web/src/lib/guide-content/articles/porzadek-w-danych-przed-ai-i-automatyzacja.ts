import { defineArticle } from "../define";

export default defineArticle({
  id: "a14",
  slug: "porzadek-w-danych-przed-ai-i-automatyzacja",
  title: "Dlaczego AI i automatyzacja nie działają na bałaganie w danych",
  metaTitle: "Przygotowanie danych do AI i automatyzacji w firmie",
  metaDescription:
    "Duplikaty, pola z trzema informacjami, brak identyfikatorów. Zobacz, jak bałagan w danych blokuje automatyzację i AI oraz jak uporządkować dane w firmie.",
  primaryKeyword: "przygotowanie danych do AI",
  secondaryKeywords: [
    "struktura danych w firmie",
    "jakość danych",
    "porządkowanie danych w firmie",
    "baza danych dla AI",
  ],
  excerpt:
    "Firmy chcą wdrażać AI i automatyzacje, a potem okazuje się, że najwięcej pracy wymaga sprzątanie danych. Wyjaśniamy bez żargonu, czym jest struktura danych, jakie błędy spotykamy najczęściej i jak je naprawić.",
  categories: ["dane-i-cyfryzacja", "ai-w-firmie"],
  publishedAt: "2026-08-10",
  updatedAt: "2026-09-30",
  imageUrl:
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=80",
  imageAlt: "Drewniane szuflady katalogu kartkowego jako symbol uporządkowanych danych",
  summary: [
    "Automatyzacja i AI robią dokładnie to, co wynika z danych. Jeśli dane są niespójne, wyniki też będą.",
    "Najczęstsze problemy to duplikaty, kilka informacji w jednym polu, wolny tekst zamiast list wyboru i brak jednoznacznych identyfikatorów.",
    "Struktura danych to plan: jakie rzeczy opisujemy, jakie mają cechy i jak się ze sobą łączą.",
    "Porządek w danych warto zrobić przed wdrożeniem, a nie w trakcie. Oszczędza to czas i budżet całego projektu.",
  ],
  relatedServiceSlugs: [
    "porzadkowanie-i-strukturyzowanie-danych",
    "przygotowanie-danych-pod-ai",
    "strategia-wdrozenia-ai",
  ],
  relatedArticleSlugs: [
    "cyfryzacja-danych-w-firmie",
    "wdrozenie-ai-w-malej-i-sredniej-firmie",
    "airtable-czy-excel",
  ],
  cta: {
    title: "Planujesz AI albo automatyzację i nie wiesz, czy dane są gotowe?",
    body: "Przejrzymy dane, na których ma działać wdrożenie, i powiemy wprost, co trzeba uporządkować, a co można zostawić. Zaprojektujemy też strukturę, która wytrzyma kolejne automatyzacje.",
  },
  body: [
    "Firma chce, żeby AI automatycznie przygotowywało oferty na podstawie historii zamówień klienta. Pomysł świetny. Pierwszy rzut oka na dane: ten sam klient występuje jako „ABC Sp. z o.o.”, „ABC spółka”, „Abc” i „ABC (Kraków)”. Produkty raz mają kody, raz nie. Część zamówień jest w programie do faktur, część w arkuszu handlowca, a część tylko w mailach.",
    "Model AI nie wie, że „Abc” i „ABC Sp. z o.o.” to ta sama firma. Automatyzacja nie połączy zamówienia z fakturą, jeśli nie mają wspólnego numeru. W efekcie projekt, który miał trwać kilka tygodni, zamienia się w miesiące sprzątania.",
    "To jedna z najczęstszych sytuacji, jakie widzimy przy wdrożeniach. Dlatego ten artykuł jest o czymś, co brzmi nudno, a decyduje o powodzeniu każdej automatyzacji i każdego projektu AI: o porządku w danych.",
    "## Automat robi dokładnie to, co wynika z danych",
    "Człowiek, widząc „Abc” i „ABC Sp. z o.o.”, domyśli się, że to ta sama firma. Widząc datę „koniec marca”, wie, o co chodzi. Automat nie domyśla się niczego. Robi dokładnie to, co wynika z danych, które dostaje.",
    "AI jest pod tym względem sprytniejsze, bo rozumie tekst i potrafi wyłapać podobieństwa. Ale to działa w obie strony: jeśli dane są sprzeczne, model może pewnym tonem podać złą odpowiedź. Raport sprzedaży zbudowany na zduplikowanych klientach pokaże zawyżone liczby. Asystent AI podłączony do trzech wersji cennika poda cenę z tej, na którą trafi.",
    "Dlatego zasada jest prosta: jakość wyniku nie będzie lepsza niż jakość danych. W branży mówi się na to „śmieci na wejściu, śmieci na wyjściu”.",
    "## Czym jest struktura danych, bez żargonu",
    "Struktura danych to plan, który mówi trzy rzeczy:",
    "1. Jakie „rzeczy” opisujemy, np. klientów, zamówienia, produkty, pracowników.\n2. Jakie cechy ma każda z nich, np. klient ma nazwę, NIP, adres, opiekuna.\n3. Jak się ze sobą łączą, np. klient ma wiele zamówień, zamówienie ma wiele produktów.",
    "Brzmi oczywiście, ale w praktyce większość firm nigdy tego nie spisała. Dane powstawały przez lata w różnych narzędziach, każde według własnej logiki. Arkusz handlowca ma inne kolumny niż arkusz księgowości, a CRM jeszcze inne. Dopóki ludzie przenoszą dane ręcznie, jakoś to działa. Gdy chcesz to zautomatyzować, brak wspólnego planu wychodzi od razu.",
    "## Najczęstsze problemy z danymi",
    "Poniżej problemy, które spotykamy prawie w każdej firmie. Każdy z osobna wygląda niewinnie. Razem potrafią zablokować projekt.",
    "### Duplikaty",
    "Ten sam klient, produkt albo pracownik zapisany kilka razy, często w nieco innej formie. Skutek: zawyżone liczby w raportach, klienci dostający tę samą wiadomość dwa razy, historia współpracy rozbita na kilka rekordów.",
    "### Kilka informacji w jednym polu",
    "Pole „Klient” zawiera nazwę, miasto i telefon. Pole „Uwagi” zawiera termin, rabat i informację, że klient woli kontakt mailowy. Człowiek to przeczyta, automat nie wyciągnie z tego terminu, żeby wysłać przypomnienie.",
    "### Wolny tekst zamiast listy wyboru",
    "Status zlecenia wpisywany ręcznie: „w toku”, „w trakcie”, „realizacja”, „WIP”. Branża klienta: „budowlanka”, „budownictwo”, „bud.”. Nie da się tego policzyć ani zautomatyzować bez wcześniejszego ujednolicenia.",
    "### Brak jednoznacznego identyfikatora",
    "Zamówienie w sklepie ma numer, faktura ma inny, a w CRM zapisano tylko nazwę klienta i kwotę. Nie ma jednego klucza, który łączy te trzy rekordy. Automat nie wie, która faktura dotyczy którego zamówienia. Dla firm najlepszym identyfikatorem klienta jest zwykle NIP, dla zamówień numer nadawany w jednym systemie i przenoszony do pozostałych.",
    "### Dane w złym formacie",
    "Daty zapisane jako tekst, kwoty z walutą w tym samym polu, numery telefonów raz ze spacjami, raz z myślnikami, raz z +48. Dla ludzi drobiazg, dla automatyzacji przeszkoda przy każdym porównaniu i każdym filtrze.",
    "### Te same dane w kilku miejscach",
    "Adres klienta jest w CRM, w programie do faktur i w arkuszu logistyki. Który jest aktualny? Jeśli nikt nie ustalił, gdzie jest źródło prawdy, każda zmiana rozjeżdża dane. Piszemy o tym szerzej na przykładzie [integracji CRM z fakturowaniem](/poradnik/integracja-crm-z-fakturowaniem).",
    "[[CTA]]",
    "## Jak uporządkować dane krok po kroku",
    "Porządkowanie danych nie musi być wielkim projektem. Dobrze jest zacząć od danych, na których ma działać konkretne wdrożenie, a nie od wszystkiego naraz.",
    "1. Wybierz obszar, np. klientów i zamówienia, jeśli planujesz automatyzację sprzedaży.\n2. Spisz strukturę: jakie tabele, jakie pola, jakie powiązania, jaki identyfikator.\n3. Ustal źródło prawdy dla każdej informacji: gdzie jest aktualna wersja.\n4. Oczyść dane: połącz duplikaty, rozdziel pola, ujednolić wartości, popraw formaty.\n5. Zabezpiecz porządek na przyszłość: listy wyboru, wymagane pola, walidacja formatów.\n6. Wyznacz osobę, która odpowiada za jakość danych w danym obszarze.",
    "Punkt piąty jest często pomijany, a bez niego po pół roku dane znowu są w nieładzie. Każdy nowy pracownik wpisuje klienta po swojemu, każdy import z innego systemu dokłada kilka duplikatów i porządek powoli się rozmywa. Najlepszy porządek to taki, którego nie da się zepsuć przy wpisywaniu, bo narzędzie na to nie pozwala.",
    "| Problem | Jak go naprawić | Jak zapobiec na przyszłość |\n|---|---|---|\n| Duplikaty klientów | Połączenie rekordów, np. po NIP | Sprawdzanie NIP przy dodawaniu klienta |\n| Kilka informacji w jednym polu | Rozdzielenie na osobne pola | Formularz z osobnymi polami |\n| Różne zapisy statusu | Ujednolicenie do jednej listy | Lista wyboru zamiast wolnego tekstu |\n| Brak identyfikatora | Nadanie numerów i połączenie rekordów | Numer nadawany automatycznie w jednym systemie |\n| Złe formaty | Konwersja dat, kwot, telefonów | Pola z typem danych i walidacją |",
    "## Narzędzia, które pomagają",
    "Do porządkowania danych nie potrzeba drogiego oprogramowania. W wielu przypadkach wystarczy dobrze zaprojektowana baza, np. w Airtable, gdzie typy pól, listy wyboru i powiązania między tabelami pilnują porządku od pierwszego wpisu. Kiedy baza danych wygrywa z arkuszem, piszemy w artykule [Airtable czy Excel](/poradnik/airtable-czy-excel).",
    "Samo czyszczenie danych przyspiesza AI. Modele językowe dobrze radzą sobie z rozpoznawaniem, że „Abc” i „ABC Sp. z o.o.” to ta sama firma, z rozdzielaniem adresu na ulicę, kod i miasto czy z przypisywaniem branży na podstawie opisu. Wyniki warto przejrzeć przed zapisaniem, ale praca, która ręcznie zajęłaby tygodnie, skraca się do dni.",
    "> [Z praktyki]\n> Zanim zaczniesz sprzątać, wyeksportuj kopię wszystkich danych i zachowaj ją. Łączenie duplikatów czy rozdzielanie pól to operacje, które czasem trzeba cofnąć, a bez kopii jest to trudne.",
    "## Porządek w danych a projekty AI",
    "Przy projektach AI jakość danych ma jeszcze większe znaczenie niż przy zwykłej automatyzacji. Asystent odpowiadający na pytania na podstawie firmowych dokumentów będzie powtarzał błędy z nieaktualnych procedur. Model przypisujący zgłoszenia do kategorii nauczy się złych kategorii, jeśli historyczne zgłoszenia były przypisywane chaotycznie.",
    "Dlatego w planie wdrożenia AI porządek w danych pojawia się na samym początku. Opisujemy to w artykule [wdrożenie AI w małej i średniej firmie. Plan na 90 dni](/poradnik/wdrozenie-ai-w-malej-i-sredniej-firmie). Jeśli dane firmy są jeszcze w dużej części na papierze albo w mailach, pierwszym krokiem jest [cyfryzacja danych](/poradnik/cyfryzacja-danych-w-firmie).",
    "## Przykład: jedna baza klientów zamiast trzech",
    "Weźmy hurtownię, w której dane klientów są w trzech miejscach: w programie do faktur, w arkuszu handlowców i w systemie sklepu internetowego. Każde źródło ma inne pola i inne zapisy nazw. Plan porządkowania mógłby wyglądać tak:",
    "1. Eksport klientów ze wszystkich trzech źródeł i kopia zapasowa.\n2. Ustalenie NIP jako identyfikatora dla firm i adresu e-mail dla klientów indywidualnych.\n3. Połączenie rekordów z tym samym NIP-em, z pomocą AI przy podobnych nazwach bez NIP-u.\n4. Wybór źródła prawdy: dane rejestrowe z programu do faktur, kontakty i opiekun z arkusza handlowców.\n5. Jedna baza klientów, z której pozostałe systemy pobierają dane, i sprawdzanie NIP przy dodawaniu nowego klienta.",
    "Po takim porządku raporty sprzedaży pokazują prawdziwą liczbę klientów, a automatyzacje, np. przypomnienia o płatnościach czy oferty dla stałych klientów, trafiają do właściwych osób. To przykład, ale schemat powtarza się w wielu firmach handlowych. Takie zestawienia, zbudowane na uporządkowanych danych, opisujemy na stronie [automatyzacja raportów](/uslugi/automatyzacja-raportow).",
    "## Ile czasu to zajmuje",
    "Zależy od skali i stanu danych. Uporządkowanie bazy klientów w małej firmie to zwykle kilka dni pracy. Połączenie danych z kilku systemów, z ustaleniem źródeł prawdy i identyfikatorów, kilka tygodni. W obu przypadkach jest to czas, który i tak trzeba by poświęcić w trakcie wdrożenia, tylko wtedy kosztowałby więcej, bo blokowałby pozostałe prace.",
    "Ocena jakości danych to stały element [audytu procesów](/poradnik/audyt-procesow-w-firmie), który prowadzimy przed wdrożeniami. Projektowanie baz i struktur danych to obszar, w którym mamy szczególnie duże doświadczenie: porządkujemy istniejące dane i budujemy nowe bazy pod automatyzacje i AI. Takie projekty prowadzimy przy [porządkowaniu i strukturyzowaniu danych](/uslugi/porzadkowanie-i-strukturyzowanie-danych) oraz [przygotowaniu danych pod AI](/uslugi/przygotowanie-danych-pod-ai).",
  ].join("\n\n"),
  faq: [
    {
      question: "Dlaczego jakość danych jest ważna przy wdrażaniu AI?",
      answer:
        "Bo AI i automatyzacje działają na danych, które dostają. Duplikaty, sprzeczne informacje i nieaktualne dokumenty prowadzą do błędnych wyników, które model podaje z pełnym przekonaniem. Uporządkowane dane to warunek, żeby wdrożenie AI dawało wiarygodne efekty.",
    },
    {
      question: "Co to jest struktura danych?",
      answer:
        "To plan, który określa, jakie rzeczy firma opisuje w swoich danych (np. klientów, zamówienia, produkty), jakie informacje o nich zbiera i jak te rzeczy się ze sobą łączą. Dobrze zaprojektowana struktura sprawia, że dane da się wyszukiwać, łączyć i automatyzować.",
    },
    {
      question: "Jak usunąć duplikaty klientów w bazie?",
      answer:
        "Najpierw trzeba ustalić, po czym rozpoznać duplikat, u firm najczęściej po numerze NIP. Potem połączyć rekordy, zachowując historię współpracy z obu. Na przyszłość warto dodać sprawdzanie NIP przy dodawaniu nowego klienta, żeby duplikaty nie powstawały ponownie.",
    },
    {
      question: "Czy AI może pomóc w porządkowaniu danych?",
      answer:
        "Tak. Modele językowe dobrze rozpoznają podobne zapisy tej samej firmy, rozdzielają pola zawierające kilka informacji i przypisują kategorie na podstawie opisu. Wyniki warto sprawdzić przed zapisaniem w bazie, ale czas pracy skraca się wielokrotnie.",
    },
    {
      question: "Czy trzeba porządkować wszystkie dane przed automatyzacją?",
      answer:
        "Nie. Wystarczy uporządkować dane, na których będzie działać konkretna automatyzacja, np. klientów i zamówienia przy automatyzacji sprzedaży. Kolejne obszary porządkuje się przy kolejnych wdrożeniach.",
    },
    {
      question: "Kto w firmie powinien odpowiadać za jakość danych?",
      answer:
        "Najlepiej osoba, która na co dzień korzysta z danego obszaru danych i rozumie, do czego służą, np. kierownik sprzedaży przy danych klientów. Nie musi to być specjalista IT. Ważne, żeby miała prawo ustalać zasady wprowadzania danych i regularnie sprawdzała, czy są przestrzegane.",
    },
  ],
});
