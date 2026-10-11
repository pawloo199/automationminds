import { defineArticle } from "../define";

export default defineArticle({
  id: "a70",
  slug: "dane-produktowe-w-sklepie",
  title: "Dane produktowe w sklepie internetowym: jak je uporządkować i utrzymać",
  metaTitle: "Dane produktowe w sklepie internetowym: jak je uporządkować",
  metaDescription:
    "Jak uporządkować dane produktowe w sklepie internetowym: struktura, atrybuty, pliki od dostawców, opisy, zdjęcia, kanały sprzedaży i rola AI.",
  primaryKeyword: "dane produktowe w sklepie internetowym",
  secondaryKeywords: [
    "zarządzanie danymi produktów",
    "atrybuty produktów w sklepie",
    "jakość danych produktowych",
  ],
  excerpt:
    "Filtry, które nie działają, opisy skopiowane od producenta, produkty w złej kategorii i różne dane w różnych kanałach: to objawy nieuporządkowanych danych produktowych. Opisujemy, jak je uporządkować, jak utrzymać porządek przy kolejnych dostawach i gdzie pomaga AI.",
  categories: ["sklepy-internetowe", "dane-i-cyfryzacja"],
  publishedAt: "2026-09-22",
  updatedAt: "2026-09-22",
  imageUrl: "https://images.unsplash.com/photo-1631010231130-5c7828d9a3a7?w=1200&q=80",
  imageAlt: "Kartonowe pudełko z produktem na jasnym stole",
  summary: [
    "Dane produktowe obejmują opisy, atrybuty, kategorie, zdjęcia i identyfikatory.",
    "Porządek zaczyna się od struktury: jakie dane ma mieć każdy produkt w danej kategorii.",
    "Pliki od dostawców to główne źródło bałaganu i główne miejsce do automatyzacji.",
    "AI dobrze uzupełnia atrybuty i przygotowuje opisy, ale wymaga kontroli i wytycznych.",
  ],
  relatedServiceSlugs: ["porzadkowanie-i-strukturyzowanie-danych", "ai-w-obsludze-dokumentow", "projektowanie-baz-danych"],
  relatedArticleSlugs: ["ai-w-ecommerce", "co-zautomatyzowac-w-sklepie-internetowym", "porzadek-w-danych-przed-ai-i-automatyzacja"],
  cta: {
    title: "Chcecie uporządkować dane produktów?",
    body: "Przejrzymy dane w waszym sklepie i pliki od dostawców i zaproponujemy, jak je uporządkować i utrzymać porządek przy kolejnych dostawach.",
  },
  body: [
    "Klient wybiera filtr rozmiaru, a połowa produktów znika, bo nie ma uzupełnionego rozmiaru. Szuka czarnej kurtki, ale część czarnych kurtek ma kolor zapisany jako czerń, a część jako black. Wchodzi w kategorię, a obok kurtek widzi buty, bo ktoś przypisał je do złej kategorii. Na marketplace ten sam produkt ma inną nazwę i inny opis niż w sklepie.",
    "To nie są problemy techniczne, tylko problemy z danymi produktowymi. W małym sklepie da się je poprawiać ręcznie. Przy kilku tysiącach produktów od kilkunastu dostawców, z nowościami co tydzień, ręczne poprawianie przestaje nadążać. W tym artykule opisujemy, jak uporządkować dane produktowe i jak utrzymać porządek.",
    "## Co to są dane produktowe",
    "Dane produktowe to wszystko, co sklep wie o produkcie i pokazuje klientowi lub wykorzystuje w procesach:",
    "- **identyfikatory**: kod sklepu, kod producenta, kod kreskowy,\n- **nazwa i opis**: tekst dla klienta,\n- **atrybuty**: kolor, rozmiar, materiał, wymiary, przeznaczenie,\n- **kategoria**: miejsce w drzewie sklepu i kategorie w kanałach sprzedaży,\n- **zdjęcia i materiały**: zdjęcia, instrukcje, karty techniczne,\n- **dane handlowe**: cena, stan, dostawca, czas dostawy.",
    "Każdy z tych elementów wpływa na to, czy klient znajdzie produkt, zrozumie go i kupi. I każdy może być źródłem problemów.",
    "## Krok 1. Struktura według kategorii",
    "Porządek zaczyna się od ustalenia, jakie dane ma mieć każdy produkt w danej kategorii. Kurtka potrzebuje rozmiaru, koloru, materiału i sezonu. Lampa potrzebuje mocy, gwintu, barwy światła i wymiarów. Taka lista atrybutów dla każdej kategorii, z dozwolonymi wartościami, np. lista kolorów, to fundament.",
    "Dozwolone wartości są ważne. Jeśli kolor może być wpisany dowolnie, za kilka miesięcy sklep będzie miał kilkanaście wariantów zapisu tego samego koloru i filtry przestaną działać. Lista wartości rozwiązuje ten problem raz na zawsze.",
    "## Krok 2. Porządki w istniejących danych",
    "Gdy struktura jest gotowa, trzeba do niej dopasować produkty, które już są w sklepie. To zwykle najbardziej pracochłonny etap. Trzeba ujednolicić wartości atrybutów, uzupełnić braki, poprawić kategorie. Tu bardzo pomaga AI: potrafi wyciągnąć atrybuty z nazwy, opisu i zdjęcia produktu, przypisać je do dozwolonych wartości i zaproponować kategorię. Zespół sprawdza wyniki, zaczynając od produktów, które sprzedają się najlepiej.",
    "Więcej o porządkowaniu danych przed automatyzacją piszemy w artykule [porządek w danych przed AI i automatyzacją](/poradnik/porzadek-w-danych-przed-ai-i-automatyzacja).",
    "## Krok 3. Pliki od dostawców",
    "Dostawcy są głównym źródłem nowych danych i głównym źródłem bałaganu. Każdy przysyła plik w innym formacie, z innymi nazwami kolumn i innym sposobem zapisu atrybutów. Jeden podaje kolor w osobnej kolumnie, drugi w nazwie produktu, trzeci wcale.",
    "Automatyzacja importu polega na przygotowaniu dla każdego dostawcy mapowania: która kolumna odpowiada któremu polu w sklepie, jak zamienić wartości dostawcy na dozwolone wartości sklepu. Przy nietypowych plikach AI pomaga przypisać kolumny i wyciągnąć dane z opisów. Nowe produkty od dostawcy trafiają do sklepu już w uporządkowanej formie. Opisujemy to na stronie [opisy i dane produktów](/branze/sklepy-internetowe/opisy-produktow).",
    "[[CTA]]",
    "## Krok 4. Opisy",
    "Opis produktu powinien powstawać z danych, a nie obok nich. Gdy atrybuty są uzupełnione, AI może przygotować opis według wytycznych sklepu: tonu, długości, struktury. Opis wtedy nie wymyśla cech produktu, tylko opisuje te, które są w danych. Zespół sprawdza opis i dopisuje to, czego w danych nie ma, np. doświadczenia z produktem.",
    "Wytyczne opisów warto spisać na podstawie najlepszych istniejących opisów sklepu. To dokument, z którego korzysta i zespół, i AI. O zastosowaniach AI w sklepie piszemy szerzej w artykule [AI w e-commerce](/poradnik/ai-w-ecommerce).",
    "## Krok 5. Kanały sprzedaży",
    "Marketplace mają własne kategorie i wymagane atrybuty. Produkt, który w sklepie jest kompletny, na marketplace może nie mieć wymaganego parametru. Gdy dane produktowe są uporządkowane w jednym miejscu, przygotowanie ofert dla kanałów sprowadza się do mapowania kategorii i atrybutów sklepu na kategorie i atrybuty kanału. Zmiana danych w jednym miejscu trafia do wszystkich kanałów. Szczegóły na stronie [oferty, ceny i stany w wielu kanałach](/branze/sklepy-internetowe/oferty-i-stany).",
    "## Krok 6. Kontrola jakości",
    "Porządek w danych trzeba utrzymywać. Najprostszy sposób to raport jakości, który regularnie pokazuje produkty z brakami: bez wymaganych atrybutów, bez zdjęć, bez opisu, z nietypowymi wartościami, w kategorii niezgodnej z atrybutami. Raport trafia do zespołu, który poprawia braki, zaczynając od produktów najważniejszych dla sprzedaży.",
    "## Zdjęcia",
    "Zdjęcia to część danych produktowych, o której łatwo zapomnieć przy porządkach. Produkt bez zdjęcia albo ze zdjęciem złej jakości sprzedaje się gorzej, a na części marketplace nie może być wystawiony. Raport jakości powinien pokazywać produkty z brakującymi zdjęciami, ze zdjęciami za małymi lub z nieodpowiednim tłem. Przy imporcie od dostawców zdjęcia warto pobierać automatycznie i zapisywać przy produkcie, a nie linkować do serwera dostawcy, który może się zmienić.",
    "## Kto odpowiada za dane",
    "Porządek w danych produktowych wymaga właściciela. W wielu sklepach dane dodaje kilka osób, a nikt nie odpowiada za ich jakość. Warto wyznaczyć osobę, która ustala strukturę atrybutów, zatwierdza nowe wartości na listach, przegląda raport jakości i dba o wytyczne opisów. To nie musi być pełny etat, ale musi być jasno przypisana odpowiedzialność.",
    "Ta osoba powinna też mieć kontakt z dostawcami. Często najprostszym sposobem na lepsze dane jest prośba do dostawcy o uzupełnienie pliku o brakujące kolumny, np. materiał czy wymiary. Wielu dostawców ma te dane, tylko ich nie wysyła, bo nikt nie zapytał.",
    "Lepsze pliki od dostawców to mniej pracy przy każdej kolejnej dostawie.",
    "## Gdzie trzymać dane produktowe",
    "W mniejszych sklepach źródłem prawdy jest zwykle platforma sklepu. W większych, z wieloma kanałami i dostawcami, często potrzebne jest osobne miejsce na dane produktowe: system do zarządzania informacją o produktach albo prostsza baza, np. w [Airtable](/uslugi/wdrozenia-airtable), z której dane trafiają do sklepu i kanałów. Wybór zależy od liczby produktów, kanałów i dostawców.",
    "## Porównanie: przed i po uporządkowaniu",
    "| Element | Bez porządku | Po uporządkowaniu |\n|---|---|---|\n| Atrybuty | Niekompletne, różne zapisy | Według struktury kategorii, z listą wartości |\n| Filtry | Działają częściowo | Działają |\n| Nowe produkty | Ręczne przepisywanie | Import z mapowaniem |\n| Opisy | Kopiowane od producenta | Z danych, według wytycznych |\n| Kanały | Różne dane w różnych miejscach | Jedno źródło, mapowanie do kanałów |\n| Jakość | Problemy zgłaszają klienci | Raport braków dla zespołu |",
    "## Od czego zacząć",
    "Najlepiej od jednej kategorii, najważniejszej dla sprzedaży. Ustalić dla niej strukturę atrybutów, uporządkować istniejące produkty z pomocą AI, przygotować import od głównego dostawcy i raport jakości. Gdy to działa, rozszerzyć na kolejne kategorie. Pozostałe procesy, które warto zautomatyzować w sklepie, opisujemy w artykule [co zautomatyzować w sklepie internetowym](/poradnik/co-zautomatyzowac-w-sklepie-internetowym).",
  ].join("\n\n"),
  faq: [
    {
      question: "Czym są dane produktowe?",
      answer:
        "To identyfikatory, nazwy, opisy, atrybuty, kategorie, zdjęcia i dane handlowe produktów, z których korzysta sklep i jego klienci.",
    },
    {
      question: "Dlaczego filtry w sklepie nie działają?",
      answer:
        "Najczęściej z powodu niekompletnych atrybutów lub różnych zapisów tej samej wartości. Rozwiązaniem jest struktura atrybutów z listą dozwolonych wartości.",
    },
    {
      question: "Czy AI uzupełni atrybuty produktów?",
      answer:
        "Tak, potrafi wyciągnąć je z nazwy, opisu i zdjęcia i przypisać do dozwolonych wartości. Wyniki warto sprawdzić, zaczynając od najważniejszych produktów.",
    },
    {
      question: "Jak obsłużyć pliki od wielu dostawców?",
      answer:
        "Przygotować dla każdego dostawcy mapowanie kolumn i wartości na strukturę sklepu. Przy nietypowych plikach pomaga AI.",
    },
    {
      question: "Czy potrzebny jest osobny system na dane produktowe?",
      answer:
        "W mniejszych sklepach zwykle wystarczy platforma sklepu. Przy wielu kanałach i dostawcach warto rozważyć osobną bazę.",
    },
  ],
});
