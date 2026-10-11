import { defineArticle } from "../define";

export default defineArticle({
  id: "a69",
  slug: "marza-w-sklepie-internetowym",
  title: "Marża w sklepie internetowym: jak policzyć, na czym zarabiacie po wszystkich kosztach",
  metaTitle: "Marża w sklepie internetowym: jak ją policzyć",
  metaDescription:
    "Jak policzyć marżę w sklepie internetowym po wszystkich kosztach: towar, prowizje, płatności, wysyłki, reklamy i zwroty. Według produktów i kanałów.",
  primaryKeyword: "marża w sklepie internetowym",
  secondaryKeywords: [
    "rentowność sklepu internetowego",
    "koszty sklepu internetowego",
    "marża na marketplace",
  ],
  excerpt:
    "Przychody w panelu sklepu rosną, a na koncie tego nie widać. Często powodem jest marża, którą liczy się tylko od ceny zakupu, bez prowizji, reklam, wysyłek i zwrotów. Opisujemy, jak policzyć marżę po wszystkich kosztach i jak zautomatyzować ten raport.",
  categories: ["sklepy-internetowe", "audyt-i-koszty"],
  publishedAt: "2026-07-29",
  updatedAt: "2026-07-29",
  imageUrl: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=1200&q=80",
  imageAlt: "Model wózka sklepowego na jasnym tle",
  summary: [
    "Marża liczona tylko od ceny zakupu pomija koszty, które w e-commerce bywają bardzo wysokie.",
    "Pełny rachunek obejmuje prowizje kanałów, płatności, wysyłki, reklamy i zwroty.",
    "Najwięcej wiedzy daje marża według produktów i kanałów, a nie tylko dla całego sklepu.",
    "Raport marży da się zautomatyzować, łącząc dane z paneli w jednym miejscu.",
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-marketingu"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-sklepie-internetowym", "ai-w-ecommerce", "jak-mierzyc-roi-automatyzacji"],
  cta: {
    title: "Chcecie znać marżę po wszystkich kosztach?",
    body: "Sprawdzimy, skąd można pobrać dane o kosztach w waszym sklepie, i zaproponujemy raport, który będzie aktualizował się sam.",
  },
  body: [
    "Większość właścicieli sklepów internetowych zna swoją marżę. A przynajmniej tak im się wydaje. Zwykle jest to różnica między ceną sprzedaży a ceną zakupu towaru. Tymczasem w e-commerce między tymi dwiema liczbami jest sporo kosztów, które zmieniają obraz: prowizje marketplace, opłaty za płatności, koszty wysyłek, kampanie reklamowe, zwroty. Produkt z wysoką marżą na towarze może po wszystkich kosztach przynosić stratę.",
    "W tym artykule opisujemy, jak policzyć marżę w sklepie internetowym po wszystkich kosztach, skąd wziąć dane i jak zautomatyzować raport, żeby nie składać go co miesiąc w arkuszu.",
    "## Marża na towarze to dopiero początek",
    "Marża na towarze, czyli cena sprzedaży netto minus cena zakupu, mówi, ile zostaje na pokrycie pozostałych kosztów. To ważna liczba, ale niewystarczająca do decyzji. Dwa produkty z tą samą marżą na towarze mogą mieć zupełnie różny wynik, jeśli jeden sprzedaje się głównie na marketplace z wysoką prowizją, a drugi we własnym sklepie, albo jeśli jeden jest często zwracany, a drugi prawie wcale.",
    "## Koszty, które warto uwzględnić",
    "Pełny rachunek marży dla zamówienia obejmuje zwykle:",
    "- **cenę zakupu towaru** wraz z kosztem dostawy od dostawcy,\n- **prowizję kanału sprzedaży**, np. marketplace,\n- **opłatę za płatność**, zależną od metody płatności,\n- **koszt wysyłki** ponoszony przez sklep, w tym opakowanie,\n- **koszt reklamy** przypisany do zamówienia lub kanału,\n- **zwroty**, czyli utracony przychód, koszt wysyłki zwrotnej i towar, którego nie da się sprzedać ponownie.",
    "Do tego dochodzą koszty stałe: zespół, magazyn, platforma, narzędzia. Tych zwykle nie przypisuje się do pojedynczych zamówień, ale warto wiedzieć, ile marży po kosztach zmiennych potrzeba, żeby je pokryć.",
    "## Marża według produktów i kanałów",
    "Marża dla całego sklepu mówi, czy sklep zarabia. Marża według produktów i kanałów mówi, gdzie zarabia, a gdzie traci. Typowe odkrycia po pierwszym takim raporcie:",
    "- bestseller na marketplace po prowizji i kosztach wysyłki ledwo wychodzi na zero,\n- produkt często zwracany przynosi stratę, choć sprzedaje się dobrze,\n- kampania reklamowa generuje dużo zamówień, ale na produktach z niską marżą,\n- mało widoczny produkt we własnym sklepie zarabia więcej niż kilka popularnych.",
    "Takie wnioski prowadzą do konkretnych decyzji: zmiany ceny w jednym kanale, poprawy opisu produktu, który jest często zwracany, przesunięcia budżetu reklamowego, rezygnacji ze sprzedaży niektórych produktów na marketplace.",
    "## Skąd wziąć dane",
    "Dane potrzebne do policzenia marży są zwykle dostępne, tylko rozproszone:",
    "| Koszt | Typowe źródło |\n|---|---|\n| Sprzedaż i zamówienia | Platforma sklepu, panele marketplace |\n| Cena zakupu | Program magazynowy, faktury zakupowe, arkusz |\n| Prowizje | Rozliczenia marketplace |\n| Płatności | Rozliczenia operatora płatności |\n| Wysyłki | Faktury i panele przewoźników |\n| Reklamy | Panele reklamowe |\n| Zwroty | Rejestr zwrotów, platforma sklepu |",
    "Problem polega na tym, że każde źródło ma inny format, inny okres rozliczeniowy i inny sposób identyfikowania zamówień. Złożenie ich w jeden raport ręcznie zajmuje dni.",
    "[[CTA]]",
    "## Jak zautomatyzować raport marży",
    "Automatyzacja polega na codziennym pobieraniu danych ze wszystkich źródeł do jednego miejsca i przypisywaniu kosztów do zamówień według ustalonych zasad. Prowizja marketplace jest przypisana do zamówienia z tego kanału. Koszt wysyłki do zamówienia, którego dotyczy przesyłka. Zwrot do zamówienia, z którego pochodził towar. Koszt reklamy, jeśli panel reklamowy udostępnia dane o zamówieniach, do zamówienia, a jeśli nie, do kanału lub kampanii.",
    "Raport aktualizuje się codziennie, a raz w tygodniu trafia do właściciela z najważniejszymi zmianami. Opisujemy to szczegółowo na stronie [raporty sprzedaży i marża](/branze/sklepy-internetowe/raporty-i-marza), a o automatyzacji raportów ogólnie na stronie usługi [automatyzacja raportów](/uslugi/automatyzacja-raportow).",
    "## Zasady przypisania kosztów",
    "Nie wszystkie koszty da się przypisać dokładnie. Koszt reklamy, która prowadziła do kilku produktów, trzeba rozdzielić według jakiejś zasady, np. proporcjonalnie do wartości zamówień. Koszt opakowań można przypisać średnio. Ważne, żeby zasady były jawne i stałe, a raport pokazywał, które koszty są dokładne, a które szacowane.",
    "Z czasem zasady można doprecyzować. Lepiej mieć raport z kilkoma szacunkami teraz niż idealny raport za pół roku.",
    "## Zwroty a marża",
    "Zwroty to koszt, o którym najłatwiej zapomnieć. Zwrócony produkt oznacza utracony przychód, koszt wysyłki w obie strony, czas pracy magazynu i czasem towar, którego nie da się sprzedać jako nowy. W branżach z wysokim odsetkiem zwrotów, np. w odzieży, różnica między marżą przed zwrotami i po zwrotach bywa bardzo duża.",
    "Raport marży powinien pokazywać wynik produktu po zwrotach. To pomaga zauważyć produkty, które warto poprawić, np. przez lepszą tabelę rozmiarów czy dokładniejsze zdjęcia. Opisujemy to na stronie [zwroty i reklamacje](/branze/sklepy-internetowe/zwroty-i-reklamacje).",
    "## Marża a ceny",
    "Gdy marża po wszystkich kosztach jest znana dla każdego produktu i kanału, łatwiej ustalać ceny. Można ustalić cenę minimalną dla każdego kanału, poniżej której sprzedaż przestaje się opłacać, i pilnować jej automatycznie przy promocjach i zmianach cen zakupu. Opisujemy to na stronie [oferty, ceny i stany w wielu kanałach](/branze/sklepy-internetowe/oferty-i-stany).",
    "## Marża kampanii reklamowych",
    "Panele reklamowe pokazują zwykle przychód z kampanii i jego stosunek do kosztu reklamy. To przydatna miara, ale nie mówi, czy kampania zarabia. Kampania z dobrym stosunkiem przychodu do kosztu może sprzedawać produkty z niską marżą albo często zwracane. Gdy raport marży uwzględnia koszt reklamy i zwroty, widać, które kampanie przynoszą zysk, a które tylko obrót. To jedna z najcenniejszych informacji dla sklepu, który dużo inwestuje w reklamy.",
    "## Jak często patrzeć na marżę",
    "Raport aktualizowany codziennie nie oznacza, że trzeba go codziennie analizować. Dla większości sklepów wystarczy przegląd raz w tygodniu, z uwagą na zmiany: produkty, których marża spadła, kanały, w których wzrosły koszty, kampanie, które przestały się opłacać. Raz w miesiącu warto spojrzeć szerzej i podjąć decyzje o cenach, kanałach i budżecie reklamowym. W sezonie przegląd może być częstszy, bo zmiany są szybsze.",
    "Ważne, żeby raport prowadził do działania. Każdy przegląd warto kończyć listą dwóch lub trzech decyzji, np. zmiany ceny w jednym kanale albo poprawy opisu produktu z wieloma zwrotami.",
    "## Raport marży a księgowość",
    "Raport marży to narzędzie do zarządzania, a nie wynik finansowy. Księgowość liczy wynik według przepisów, uwzględniając koszty stałe, amortyzację, podatki. Raport marży odpowiada na inne pytanie: które produkty, kanały i kampanie warto rozwijać. Oba źródła warto okresowo porównywać, żeby różnice były zrozumiałe.",
    "## Od czego zacząć",
    "Najprościej zacząć od sprzedaży ze wszystkich kanałów i ceny zakupu, a potem dokładać kolejne koszty: prowizje, wysyłki, zwroty, reklamy. Już pierwszy etap często daje zaskakujące wnioski. Pozostałe procesy, które warto zautomatyzować w sklepie, opisujemy w artykule [co zautomatyzować w sklepie internetowym](/poradnik/co-zautomatyzowac-w-sklepie-internetowym), a o liczeniu efektów automatyzacji w artykule [jak mierzyć ROI automatyzacji](/poradnik/jak-mierzyc-roi-automatyzacji).",
  ].join("\n\n"),
  faq: [
    {
      question: "Jak policzyć marżę w sklepie internetowym?",
      answer:
        "Od ceny sprzedaży netto odjąć cenę zakupu, prowizję kanału, opłatę za płatność, koszt wysyłki, przypisany koszt reklamy i koszt zwrotów. Najlepiej według produktów i kanałów.",
    },
    {
      question: "Dlaczego marża na marketplace jest często niższa?",
      answer:
        "Ze względu na prowizje i opłaty kanału, a czasem wyższe koszty wysyłek i zwrotów. Dlatego warto liczyć marżę osobno dla każdego kanału.",
    },
    {
      question: "Jak uwzględnić zwroty w marży?",
      answer:
        "Odjąć od wyniku produktu utracony przychód, koszt wysyłki w obie strony i wartość towaru, którego nie da się sprzedać ponownie.",
    },
    {
      question: "Czy raport marży może aktualizować się sam?",
      answer:
        "Tak. Dane z platformy, marketplace, przewoźników, reklam i zwrotów mogą być pobierane codziennie i łączone w jednym raporcie.",
    },
    {
      question: "Czy raport marży zastępuje księgowość?",
      answer:
        "Nie. Służy do decyzji o produktach, kanałach i kampaniach. Wynik finansowy liczy księgowość.",
    },
  ],
});
