import { defineArticle } from "../define";

export default defineArticle({
  id: "a38",
  slug: "tms-a-automatyzacja-spedycji",
  title: "TMS a automatyzacja spedycji: kiedy system wystarczy, a kiedy potrzebne są integracje",
  metaTitle: "TMS a automatyzacja spedycji: co jeszcze połączyć",
  metaDescription:
    "Co robi TMS, a czego nie robi w firmie spedycyjnej. Kiedy wystarczy system, a kiedy warto połączyć go z pocztą, AI, KSeF i księgowością przez integracje.",
  primaryKeyword: "TMS dla spedycji",
  secondaryKeywords: [
    "system TMS spedycja",
    "integracja TMS",
    "automatyzacja TMS",
  ],
  excerpt:
    "TMS jest sercem pracy firmy spedycyjnej, ale rzadko obejmuje wszystko. Wyjaśniamy, co zwykle robi TMS, czego brakuje i jak łączyć go z pocztą, AI, KSeF i księgowością, żeby spedytorzy nie przepisywali danych.",
  categories: ["spedycja", "narzedzia-i-integracje"],
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
  imageAlt: "Statki z kontenerami przy nabrzeżu",
  summary: [
    "TMS dobrze porządkuje zlecenia, przewoźników i statusy, ale zwykle nie obejmuje całej pracy spedytora.",
    "Najczęściej brakuje połączenia z pocztą, odczytu dokumentów, komunikacji z klientami i powiązania z księgowością.",
    "Zanim firma zmieni TMS, warto sprawdzić, czy brakujące elementy da się zbudować obok niego.",
    "Integracje najlepiej projektować tak, żeby TMS był źródłem danych o zleceniach, a nie jednym z wielu miejsc z tymi samymi danymi.",
  ],
  relatedServiceSlugs: ["integracje-systemow", "automatyzacja-dla-logistyki", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-spedycji", "jak-wybrac-narzedzie-do-automatyzacji", "gotowa-automatyzacja-czy-budowana-od-zera"],
  cta: {
    title: "Chcecie połączyć TMS z innymi systemami?",
    body: "Sprawdzimy, co robi wasz TMS, i wskażemy, co warto zbudować obok niego, zamiast zmieniać system. Pierwsza rozmowa trwa 30 minut i jest bezpłatna.",
  },
  body: [
    "W wielu firmach spedycyjnych rozmowa o automatyzacji zaczyna się od pytania o TMS: czy obecny system wystarczy, czy trzeba go zmienić. To dobre pytanie, ale często postawione za wcześnie. Zmiana TMS to duży projekt, a problemy, które firma chce rozwiązać, często leżą poza samym systemem: w poczcie, dokumentach, komunikacji z klientami i księgowości.",
    "W tym artykule opisujemy, co zwykle robi TMS, czego w nim brakuje i jak łączyć go z innymi systemami. Nie porównujemy konkretnych produktów, bo ich możliwości zmieniają się szybko. Skupiamy się na tym, jak podejść do tematu.",
    "## Co zwykle robi TMS",
    "System do zarządzania transportem jest centrum pracy spedycji. Najczęściej obejmuje:",
    "- rejestr zleceń z trasami, terminami i ładunkami,\n- bazę klientów i przewoźników,\n- tworzenie zleceń dla przewoźników z szablonów,\n- statusy zleceń i często integrację z GPS,\n- podstawowe rozliczenia i dane do faktur,\n- raporty o zleceniach i wolumenie.",
    "To dużo, a dobrze wdrożony TMS porządkuje pracę firmy. Problem pojawia się na styku TMS z resztą świata.",
    "## Czego w TMS najczęściej brakuje",
    "### Poczta",
    "Zapytania od klientów, potwierdzenia od przewoźników, CMR i faktury przychodzą mailem. Jeśli TMS nie jest połączony z pocztą, spedytor przepisuje dane z maila do systemu. To jeden z największych pożeraczy czasu w spedycji. Połączenie poczty z TMS, często z odczytem treści przez AI, opisujemy na stronie [zapytania i wyceny frachtu](/branze/spedycja/zapytania-i-wyceny).",
    "### Odczyt dokumentów",
    "TMS przechowuje dokumenty, ale rzadko je odczytuje. CMR, potwierdzenia dostaw i faktury przewoźników ktoś musi przypisać do zleceń i sprawdzić. Odczyt dokumentów z AI i automatyczne przypisanie do zleceń to element, który zwykle buduje się obok TMS. Więcej na stronie [CMR i dokumenty przewozowe](/branze/spedycja/dokumenty-przewozowe).",
    "### Komunikacja z klientami",
    "Statusy w TMS to jedno, a informacja dla klienta to drugie. Wiele systemów nie wysyła klientom informacji automatycznie albo robi to w formie, która nie odpowiada oczekiwaniom dużych klientów. Automatyczne statusy, raporty i agent odpowiadający na pytania to typowe uzupełnienie TMS.",
    "### Księgowość i KSeF",
    "Faktury dla klientów i od przewoźników muszą trafić do programu księgowego i KSeF. Część TMS ma takie połączenia, część nie. Dopasowanie faktur przewoźników z KSeF do zleceń i kontrola kwot to elementy, których często brakuje. Opisujemy je na stronie [rozliczenia frachtu](/branze/spedycja/rozliczenia-frachtu).",
    "### Weryfikacja przewoźników",
    "Baza przewoźników w TMS rzadko sprawdza dane w rejestrach, na białej liście VAT i pilnuje terminów ważności dokumentów. To kolejny element, który można zbudować obok systemu.",
    "[[CTA]]",
    "## Typowe objawy, że TMS nie wystarcza",
    "Najłatwiej rozpoznać problem po tym, jak pracuje zespół. Jeśli spedytorzy prowadzą obok TMS własne arkusze z zapytaniami, przewoźnikami albo marżą, to znak, że system nie obejmuje części ich pracy. Podobnie, gdy te same dane są wpisywane kilka razy: do arkusza, do TMS, do zlecenia i do faktury, albo gdy kierownik, żeby zobaczyć wyniki, musi poprosić kogoś o zestawienie.",
    "Innym objawem są dokumenty. Jeśli CMR i faktury przewoźników są w skrzynkach spedytorów, a nie przy zleceniach, to dział rozliczeń traci czas na ich szukanie, a fakturowanie klientów się opóźnia. Takie objawy nie muszą oznaczać złego TMS. Zwykle oznaczają, że system nie jest połączony z miejscami, w których ta praca faktycznie się dzieje.",
    "Dobrym ćwiczeniem jest prześledzenie jednego zlecenia od zapytania do zapłaty i zapisanie, w ilu miejscach pojawiają się te same dane i kto je tam wpisuje. Taka mapa zwykle pokazuje kilka miejsc, w których jedno połączenie oszczędziłoby spedytorom sporo pracy. Jak przygotować taką mapę, opisujemy w artykule [od czego zacząć mapowanie procesów](/poradnik/od-czego-zaczac-mapowanie-procesow).",
    "## Zmienić TMS czy zbudować integracje",
    "Gdy brakuje wielu elementów, pojawia się pokusa zmiany systemu. Czasem to dobra decyzja, np. gdy obecny TMS nie ma API, nie jest rozwijany albo nie obsługuje podstawowych potrzeb firmy. Często jednak lepiej zbudować brakujące elementy obok obecnego systemu.",
    "| Sytuacja | Lepsze rozwiązanie |\n|---|---|\n| TMS dobrze obsługuje zlecenia, brakuje połączeń z pocztą i dokumentami | Integracje obok TMS |\n| TMS ma API lub import i eksport danych | Integracje obok TMS |\n| TMS nie jest rozwijany, nie ma API ani eksportu | Rozważenie zmiany systemu |\n| Zespół omija TMS i pracuje w arkuszach | Najpierw ustalenie, dlaczego, potem decyzja |\n| Firma szybko rośnie i zmienia model działania | Przegląd wymagań przed decyzją |",
    "Zmiana TMS nie rozwiąże problemów poza systemem. Nowy TMS też będzie potrzebował połączenia z pocztą, dokumentami i księgowością. Dlatego warto najpierw zobaczyć, ile da się osiągnąć integracjami. O wyborze między gotowym rozwiązaniem a budowanym od zera piszemy w artykule [gotowa automatyzacja czy budowana od zera](/poradnik/gotowa-automatyzacja-czy-budowana-od-zera).",
    "## Jak projektować integracje z TMS",
    "Kilka zasad, które sprawdzają się w praktyce:",
    "1. **TMS jako źródło danych o zleceniach.** Integracje uzupełniają dane w TMS i z nich korzystają, a nie tworzą równoległej bazy zleceń.\n2. **Najpierw API, potem pliki.** Jeśli TMS ma API, to najlepsza droga. Jeśli nie, często wystarczy import i eksport plików albo poczta.\n3. **Jedno połączenie na raz.** Lepiej uruchomić jedno połączenie i dopracować je, niż budować kilka naraz.\n4. **Ślad działań.** Każda automatyczna operacja powinna być zapisana, żeby było wiadomo, co zrobił system, a co człowiek.\n5. **Opieka.** TMS, KSeF i inne systemy się zmieniają. Integracje wymagają opieki, a nie tylko zbudowania.",
    "Integracje budujemy najczęściej w n8n, które może działać na serwerze w UE lub w infrastrukturze firmy i łączy się z TMS, pocztą, KSeF i modelami AI. O wyborze narzędzia do automatyzacji piszemy w artykule [jak wybrać narzędzie do automatyzacji](/poradnik/jak-wybrac-narzedzie-do-automatyzacji), a o samym n8n na stronie [n8n](/narzedzia/n8n).",
    "## Ile to kosztuje",
    "Koszt integracji zależy przede wszystkim od tego, jak TMS udostępnia dane, ile połączeń potrzeba i czy w przepływie jest AI, które przetwarza maile i dokumenty. Proste połączenie, np. przekazywanie statusów do klientów, jest zwykle znacznie tańsze od wymiany systemu. Bardziej złożone przepływy, jak odczyt zapytań i dokumentów z AI, wymagają więcej pracy, ale też dają większy efekt. Szerzej o kosztach piszemy w artykule [ile kosztuje automatyzacja procesów](/poradnik/ile-kosztuje-automatyzacja-procesow).",
    "## Od czego zacząć",
    "Najlepiej od przeglądu: co robi TMS, gdzie spedytorzy przepisują dane i które z tych miejsc zabiera najwięcej czasu. Taki przegląd pokazuje, czy potrzebna jest zmiana systemu, czy wystarczą integracje, i od którego połączenia zacząć. Przegląd procesów do automatyzacji znajdziecie w artykule [co zautomatyzować w spedycji](/poradnik/co-zautomatyzowac-w-spedycji), a całe podejście na stronie [automatyzacja spedycji](/branze/spedycja).",
  ].join("\n\n"),
  faq: [
    {
      question: "Czy TMS wystarczy do automatyzacji spedycji?",
      answer:
        "TMS dobrze porządkuje zlecenia, przewoźników i statusy, ale zwykle nie obejmuje poczty, odczytu dokumentów, komunikacji z klientami i pełnego powiązania z księgowością. Te elementy często buduje się obok niego.",
    },
    {
      question: "Kiedy warto zmienić TMS?",
      answer:
        "Gdy obecny system nie ma API ani eksportu danych, nie jest rozwijany albo nie obsługuje podstawowych potrzeb firmy. W innych przypadkach często lepiej zbudować brakujące elementy obok niego.",
    },
    {
      question: "Jak połączyć TMS z pocztą?",
      answer:
        "Przez automatyzację, która zbiera maile, odczytuje z nich dane, często z pomocą AI, i zapisuje je w TMS przez API lub import danych.",
    },
    {
      question: "Czy TMS można połączyć z KSeF?",
      answer:
        "Tak, bezpośrednio, jeśli system to obsługuje, albo przez integrację, która pobiera faktury z KSeF i dopasowuje je do zleceń w TMS.",
    },
    {
      question: "Co, jeśli TMS nie ma API?",
      answer:
        "Często wystarczy import i eksport plików albo poczta. Połączenie projektuje się pod możliwości systemu, choć bez API jest ono zwykle mniej wygodne.",
    },
  ],
});
