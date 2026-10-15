import { defineTerm } from "../types";

export default defineTerm({
  slug: "relacyjna-baza-danych",
  term: "Relacyjna baza danych",
  category: "dane",
  definition:
    "Relacyjna baza danych przechowuje informacje w powiązanych ze sobą tabelach, na przykład klienci, zamówienia i produkty, tak że każdą informację zapisuje się raz, a powiązania łączą ją z resztą.",
  metaTitle: "Relacyjna baza danych: co to jest i czym różni się od Excela",
  metaDescription:
    "Relacyjna baza danych co to jest: tabele, rekordy i powiązania prostym językiem, czym baza różni się od arkusza Excel i kiedy firma jej potrzebuje.",
  primaryKeyword: "relacyjna baza danych",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest relacyjna baza danych",
    "W arkuszu wszystko trafia zwykle do jednej, coraz szerszej tabeli. Przy każdym zamówieniu powtarza się nazwa klienta, adres i NIP. Gdy klient zmieni adres, trzeba go poprawić w wielu wierszach, a często w kilku plikach. Relacyjna baza danych działa inaczej. Klienci są w jednej tabeli, zamówienia w drugiej, produkty w trzeciej. Zamówienie nie przechowuje adresu klienta, tylko odwołanie do klienta. Adres zmienia się w jednym miejscu i od razu jest aktualny wszędzie.",
    "## Podstawowe pojęcia",
    "- **Tabela:** zbiór rekordów jednego rodzaju, np. klienci.\n- **Rekord:** jeden wiersz, np. jeden klient.\n- **Pole:** jedna informacja o rekordzie, np. NIP.\n- **Klucz:** niepowtarzalny identyfikator rekordu, np. numer klienta.\n- **Relacja:** powiązanie między tabelami, np. zamówienie należy do klienta, a klient ma wiele zamówień.",
    "## Baza danych a arkusz",
    "| Cecha | Arkusz | Relacyjna baza danych |\n|---|---|---|\n| Struktura | Dowolna, łatwo o bałagan | Ustalona, z typami pól |\n| Powtarzanie danych | Częste | Każda informacja raz |\n| Praca wielu osób | Konflikty i wersje plików | Jednoczesna praca z uprawnieniami |\n| Automatyzacja | Utrudniona | Naturalna, przez API |\n| Raporty | Ręczne składanie | Zapytania i widoki |",
    "Arkusz świetnie sprawdza się w analizie i jednorazowych obliczeniach. Gdy staje się systemem, w którym zespół prowadzi klientów, zlecenia czy dokumenty, zaczyna sprawiać problemy. Więcej o tej granicy piszemy w artykule [Airtable czy Excel](/poradnik/airtable-czy-excel).",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Firma serwisowa prowadzi zlecenia w arkuszu. Ten sam klient występuje pod trzema nazwami, urządzenia są wpisywane tekstem, a historii serwisu nie da się łatwo odtworzyć. Po przeniesieniu do bazy powstają tabele: klienci, lokalizacje, urządzenia, zlecenia, protokoły. Przy zgłoszeniu serwisant od razu widzi historię urządzenia, a automatyzacja może przypomnieć o przeglądzie, bo wie, które urządzenie należy do którego klienta.",
    "## Jak zaprojektować pierwszą bazę",
    "Zacznijcie od spisania obiektów, z którymi pracujecie: klienci, zlecenia, faktury, pracownicy. Dla każdego zapiszcie, jakie informacje są potrzebne i jak obiekty się łączą, np. jeden klient ma wiele zleceń, jedno zlecenie ma wiele faktur. Taka kartka papieru jest już projektem bazy. Dopiero potem wybiera się narzędzie i przenosi dane.",
    "## Jakie narzędzie wybrać",
    "Relacyjne bazy danych są wbudowane w większość systemów firmowych, jak [ERP](/slownik/erp) czy [CRM](/slownik/crm). Gdy potrzebny jest własny rejestr dopasowany do procesu, dobrym wyborem jest [Airtable](/uslugi/wdrozenia-airtable), który łączy bazę z wygodnym interfejsem. Przy większej skali i wymaganiach technicznych sprawdza się klasyczna baza, np. PostgreSQL, z aplikacją lub narzędziem no-code jako interfejsem.",
    "Bez względu na narzędzie najważniejszy jest dobry projekt tabel i powiązań. Zajmujemy się tym w usłudze [projektowanie baz danych](/uslugi/projektowanie-baz-danych), a przeniesieniem danych z arkuszy w usłudze [migracja danych](/uslugi/migracja-danych).",
  ].join("\n\n"),
  faq: [
    { question: "Czy Airtable to relacyjna baza danych?", answer: "Działa jak relacyjna baza: ma tabele, typy pól i powiązania między rekordami, a do tego wygodny interfejs i automatyzacje." },
    { question: "Kiedy arkusz przestaje wystarczać?", answer: "Gdy pracuje na nim kilka osób jednocześnie, dane się powtarzają, powstają kopie plików, a raporty trzeba składać ręcznie." },
    { question: "Czy przeniesienie danych z arkuszy do bazy jest trudne?", answer: "Wymaga uporządkowania danych i projektu tabel. Samo przeniesienie zwykle jest szybkie, jeśli projekt jest dobry." },
  ],
  relatedTermSlugs: ["jedno-zrodlo-prawdy", "deduplikacja-danych", "no-code-low-code", "crm"],
  relatedServiceSlugs: ["projektowanie-baz-danych", "wdrozenia-airtable", "migracja-danych"],
  relatedToolSlugs: [],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["airtable-czy-excel", "airtable-w-praktyce-zastosowania"],
});
