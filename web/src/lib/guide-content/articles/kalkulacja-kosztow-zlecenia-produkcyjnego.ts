import { defineArticle } from "../define";

export default defineArticle({
  id: "a89",
  slug: "kalkulacja-kosztow-zlecenia-produkcyjnego",
  title: "Kalkulacja kosztów zlecenia produkcyjnego: jak liczyć szybko i bez strat",
  metaTitle: "Kalkulacja kosztów zlecenia produkcyjnego",
  metaDescription:
    "Jak liczyć koszt zlecenia produkcyjnego: materiał, czasy operacji, stawki maszyn, koszty ogólne, kooperacja. Jak skrócić wycenę i porównać ją z wykonaniem.",
  primaryKeyword: "kalkulacja kosztów zlecenia produkcyjnego",
  secondaryKeywords: [
    "jak wycenić zlecenie produkcyjne",
    "koszt wytworzenia detalu",
    "stawka godzinowa maszyny",
  ],
  excerpt:
    "W zakładach produkujących na zamówienie każda oferta zaczyna się od kalkulacji. Gdy jest liczona od zera, oferta wychodzi późno, a gdy na wyczucie, część zleceń przynosi stratę. Opisujemy, z czego składa się koszt zlecenia, skąd brać dane i jak połączyć kalkulację z rzeczywistym wykonaniem.",
  categories: ["zaklady-produkcyjne", "audyt-i-koszty"],
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  imageUrl: "https://images.unsplash.com/photo-1740209475472-aa7d280f7452?w=1200&q=80",
  imageAlt: "Obróbka aluminiowego detalu na frezarce CNC",
  summary: [
    "Koszt zlecenia to materiał, czas operacji według stawek maszyn i ludzi, przezbrojenia, kooperacja i udział kosztów ogólnych.",
    "Najwięcej błędów bierze się z pominiętych przezbrojeń, braków i czasu poza maszyną.",
    "Kalkulacja oparta na podobnych wyrobach i aktualnych danych skraca wycenę bez utraty dokładności.",
    "Porównanie kalkulacji z wykonaniem po zleceniu to jedyny sposób, żeby kolejne wyceny były lepsze.",
  ],
  relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-raportow"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-zakladzie-produkcyjnym", "przeglady-maszyn-w-zakladzie", "ai-w-dziale-jakosci"],
  cta: {
    title: "Chcecie wyceniać zlecenia szybciej i dokładniej?",
    body: "W 30 minut przejdziemy przez to, jak dziś liczycie zlecenia, i pokażemy, jak wykorzystać dane z zakończonych zleceń w kolejnych wycenach. Rozmowa jest bezpłatna.",
  },
  body: [
    "W zakładzie produkującym na zamówienie kalkulacja jest pierwszym krokiem każdej oferty i jednym z najważniejszych momentów dla wyniku firmy. Zbyt wysoka cena oznacza przegrane zapytanie, zbyt niska oznacza zlecenie, przy którym zakład dokłada. Kłopot w tym, że kalkulację zwykle robi technolog, który ma też inne zadania, a zapytania przychodzą falami.",
    "W wielu zakładach kalkulacja wygląda podobnie: technolog otwiera rysunek, szacuje czasy operacji z doświadczenia, sprawdza cenę materiału w ostatniej fakturze, dolicza narzut i przekazuje wynik handlowcowi. Gdy zapytań jest dużo, część czeka kilka dni. Po realizacji rzadko ktoś sprawdza, czy rzeczywisty czas zgadzał się z kalkulacją.",
    "Poniżej opisujemy, z czego składa się koszt zlecenia, skąd brać dane i jak sprawić, żeby kalkulacja była szybsza i z każdym zleceniem dokładniejsza.",
    "## Z czego składa się koszt zlecenia",
    "Pełna kalkulacja zlecenia produkcyjnego obejmuje kilka składników:",
    "- **materiał**: ilość z uwzględnieniem naddatków i odpadu, przemnożona przez aktualną cenę,\n- **operacje**: czas każdej operacji przemnożony przez stawkę maszyny lub pracy ręcznej,\n- **przezbrojenia**: czas przygotowania maszyny, rozkładany na sztuki w serii,\n- **kooperacja**: obróbka cieplna, powłoki, usługi zewnętrzne,\n- **kontrola jakości i pakowanie**: czas pomiarów, dokumenty, opakowania,\n- **koszty ogólne**: udział kosztów zakładu, które nie wynikają z konkretnej operacji.",
    "Do tego dochodzi narzut, który ustala zarząd lub handlowiec w zależności od klienta, wielkości serii i sytuacji rynkowej.",
    "## Stawki maszyn",
    "Stawka godzinowa maszyny to koszt jednej godziny jej pracy: amortyzacja, energia, narzędzia, serwis, miejsce na hali i operator. Wiele zakładów ma jedną stawkę dla całej hali, co upraszcza liczenie, ale zniekształca wyniki. Godzina pracy nowego centrum obróbczego kosztuje zakład inaczej niż godzina starej wiertarki. Gdy stawka jest jedna, proste wyroby wychodzą za drogo, a skomplikowane za tanio.",
    "Stawek nie trzeba liczyć co miesiąc. Wystarczy kilka grup maszyn o podobnym koszcie i aktualizacja raz w roku albo po większej inwestycji. Ważne, żeby kalkulacja korzystała z tych samych stawek bez względu na to, kto liczy.",
    "## Gdzie kalkulacje najczęściej się mylą",
    "- **Przezbrojenia przy małych seriach.** Przy kilkunastu sztukach przygotowanie maszyny może kosztować więcej niż sama obróbka, a bywa pomijane.\n- **Braki i odrzuty.** Kalkulacja zakłada, że wszystkie sztuki będą dobre.\n- **Czas poza maszyną.** Gratowanie, mycie, pomiary, pakowanie, przemieszczanie między operacjami.\n- **Nieaktualne ceny materiałów.** Cena z faktury sprzed kilku miesięcy.\n- **Kooperacja liczona z pamięci.** Cena usługi zewnętrznej, która od tego czasu się zmieniła.",
    "Każdy z tych błędów osobno wydaje się drobny, ale razem potrafią zamienić zysk ze zlecenia w stratę.",
    "[[CTA]]",
    "## Skąd brać dane do kalkulacji",
    "Najlepszym źródłem są dane, które zakład już ma, tylko rzadko z nich korzysta:",
    "- czasy operacji z zakończonych zleceń, zapisane w raportach z hali,\n- ceny materiałów z ostatnich faktur zakupowych lub cennika dostawcy,\n- ceny kooperacji z ostatnich zamówień,\n- kalkulacje podobnych wyrobów wyceniane wcześniej.",
    "Problem polega na tym, że dane są w różnych miejscach: czasy w raportach zmianowych na papierze, ceny w ERP, stare kalkulacje w arkuszach na dysku technologa. Gdy raporty z hali są cyfrowe, o czym piszemy na stronie usługi [automatyzacja w produkcji](/uslugi/automatyzacja-w-produkcji), rzeczywiste czasy operacji stają się dostępne dla kalkulacji.",
    "## Kalkulacja z podobnych wyrobów",
    "Większość zapytań w zakładzie produkującym na zamówienie dotyczy wyrobów podobnych do tych, które już były liczone: ten sam materiał, podobne operacje, inna wielkość albo seria. Gdy kalkulacje są w jednym rejestrze, system może podpowiedzieć technologowi podobny wyrób i jego kalkulację jako punkt wyjścia, z aktualnymi cenami materiałów i stawkami. Technolog zmienia to, co inne, zamiast liczyć wszystko od zera.",
    "AI może pomóc na etapie wcześniejszym: wyodrębnić z zapytania i tekstu na rysunku materiał, wymiary gabarytowe, ilości i wymagania, a potem wyszukać podobne wyroby. Oceny technologicznej, czyli jakie operacje są potrzebne i ile potrwają, AI nie zastępuje. Opisujemy cały obieg na stronie [zapytania ofertowe i wyceny](/branze/zaklady-produkcyjne/zapytania-i-wyceny).",
    "## Przykład kalkulacji",
    "To przykład ilustracyjny. Zakład dostaje zapytanie o serię tulei ze stali nierdzewnej. System odczytuje z zapytania materiał, wymiary i ilość, a technologowi pokazuje dwie podobne tuleje liczone wcześniej. Jedna była produkowana i ma rzeczywiste czasy z raportów. Technolog bierze ją za punkt wyjścia, dodaje operację, której wcześniej nie było, i zauważa, że w poprzednim zleceniu przezbrojenie trwało dłużej niż w kalkulacji. Poprawia czas przezbrojenia. Cena materiału pochodzi z ostatniej faktury. Kalkulacja trafia do handlowca, który dolicza narzut i wysyła ofertę.",
    "## Porównanie kalkulacji z wykonaniem",
    "| Element | Kalkulacja | Wykonanie | Wniosek |\n|---|---|---|---|\n| Materiał | Według normy zużycia | Według wydań z magazynu | Czy odpad jest zgodny z założeniem |\n| Operacje | Czasy z kalkulacji | Czasy z raportów z hali | Które operacje trwają dłużej |\n| Przezbrojenia | Założony czas | Rzeczywisty czas | Czy małe serie są opłacalne |\n| Braki | Zwykle pomijane | Liczba odrzuconych sztuk | Czy doliczać naddatek |\n| Kooperacja | Cena z kalkulacji | Faktura od kooperanta | Czy cena była aktualna |",
    "Takie porównanie po każdym zleceniu, a przynajmniej po zleceniach powtarzalnych, to najprostszy sposób, żeby kolejne kalkulacje były dokładniejsze. Raport może powstawać automatycznie, gdy dane z hali, magazynu i faktur są połączone. O budowie takich raportów piszemy na stronie [automatyzacja raportów](/uslugi/automatyzacja-raportow).",
    "## Koszty ogólne i maszyny w przeglądzie",
    "Część kosztów zakładu nie wynika z żadnej operacji: biuro, magazyn, jakość, utrzymanie ruchu, postoje maszyn. Te koszty trzeba rozłożyć na zlecenia, najczęściej przez narzut na stawki maszyn albo na koszt wytworzenia. Gdy maszyna często stoi z powodu awarii, jej rzeczywisty koszt godziny produktywnej rośnie, choć stawka w kalkulacji pozostaje ta sama. Dlatego dane o postojach z utrzymania ruchu są przydatne także przy wycenach. Piszemy o tym w artykule [przeglądy maszyn w zakładzie](/poradnik/przeglady-maszyn-w-zakladzie).",
    "## Kalkulacja a oferta",
    "Kalkulacja to koszt, a oferta to cena. Handlowiec powinien widzieć oba: koszt z kalkulacji i proponowaną cenę z marżą. Wtedy decyzja o rabacie dla ważnego klienta jest świadoma, a nie zgadywana. Przyjęta oferta powinna przejść do zamówienia razem z kalkulacją, żeby po realizacji można było porównać ją z wykonaniem. Jak połączyć ofertę z zamówieniem bez przepisywania, opisujemy na stronie [zamówienia klientów i terminy](/branze/zaklady-produkcyjne/zamowienia-i-terminy).",
    "## Od czego zacząć",
    "Jeśli kalkulacje są dziś w arkuszach technologów, pierwszym krokiem jest jeden wspólny szablon kalkulacji ze stałymi stawkami i jeden rejestr kalkulacji. Drugim jest zbieranie rzeczywistych czasów z hali. Gdy oba działają, można dodać podpowiedzi z podobnych wyrobów i porównanie z wykonaniem. Inne procesy, od których zakłady zaczynają, opisujemy w artykule [co zautomatyzować w zakładzie produkcyjnym](/poradnik/co-zautomatyzowac-w-zakladzie-produkcyjnym), a całe podejście na stronie [automatyzacja zakładu produkcyjnego](/branze/zaklady-produkcyjne).",
  ].join("\n\n"),
  faq: [
    {
      question: "Jak policzyć koszt zlecenia produkcyjnego?",
      answer:
        "Zsumować materiał z odpadem, czasy operacji według stawek maszyn, przezbrojenia, kooperację, kontrolę i pakowanie oraz udział kosztów ogólnych. Narzut dolicza się na końcu.",
    },
    {
      question: "Jak policzyć stawkę godzinową maszyny?",
      answer:
        "Zsumować roczne koszty maszyny: amortyzację, energię, narzędzia, serwis, miejsce i operatora, i podzielić przez planowaną liczbę godzin pracy. Wystarczy kilka grup maszyn o podobnym koszcie.",
    },
    {
      question: "Czy AI może wycenić zlecenie?",
      answer:
        "AI może odczytać dane z zapytania i wyszukać podobne wyroby. Operacje i czasy ocenia technolog, a cenę zatwierdza handlowiec.",
    },
    {
      question: "Skąd wziąć rzeczywiste czasy operacji?",
      answer:
        "Z raportów z hali, najlepiej cyfrowych, zapisanych przy zleceniu i operacji.",
    },
  ],
});
