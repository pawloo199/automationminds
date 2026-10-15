import { defineTerm } from "../types";

export default defineTerm({
  slug: "etl",
  term: "ETL",
  fullName: "Extract, Transform, Load",
  category: "dane",
  definition:
    "ETL to proces, w którym dane pobiera się z różnych systemów, porządkuje i przekształca do wspólnej postaci, a potem zapisuje w jednym miejscu, na przykład w bazie do raportów.",
  metaTitle: "ETL: co to jest i jak łączy dane z wielu systemów",
  metaDescription:
    "ETL co to jest: pobieranie, przekształcanie i ładowanie danych z wielu systemów do jednego miejsca, przykłady w raportowaniu i na co uważać.",
  primaryKeyword: "etl co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest ETL",
    "Nazwa ETL pochodzi od trzech kroków: extract, transform, load, czyli pobierz, przekształć, załaduj.",
    "- **Pobieranie:** dane trafiają z systemów źródłowych, np. z [CRM](/slownik/crm), [ERP](/slownik/erp), sklepu, programu do faktur czy arkuszy, przez [API](/slownik/api), eksport plików albo połączenie z bazą.\n- **Przekształcanie:** dane są ujednolicane. Daty dostają jeden format, nazwy klientów są porządkowane, duplikaty usuwane, waluty przeliczane, kody produktów mapowane na wspólny słownik.\n- **Ładowanie:** gotowe dane zapisuje się w miejscu docelowym, najczęściej w bazie lub hurtowni danych, z której korzystają raporty.",
    "## Do czego ETL służy w firmie",
    "Najczęściej do raportowania. Gdy sprzedaż jest w CRM, faktury w programie księgowym, a koszty w arkuszu, nikt nie ma pełnego obrazu bez ręcznego składania danych. ETL robi to automatycznie i regularnie, a narzędzia [Business Intelligence](/slownik/business-intelligence) pokazują wynik na wykresach.",
    "Drugie zastosowanie to przenoszenie danych między systemami, na przykład przy zmianie programu. Wtedy ETL jest częścią migracji danych, którą opisujemy na stronie usługi [migracja danych](/uslugi/migracja-danych).",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Agencja marketingowa chce widzieć rentowność klientów. Każdej nocy przepływ pobiera godziny pracy z systemu do ewidencji czasu, faktury z programu do fakturowania i koszty mediów z arkusza. Przypisuje je do klientów według wspólnego identyfikatora, przelicza godziny na koszt i zapisuje w bazie raportowej. Rano zarząd widzi raport rentowności bez ręcznego składania arkuszy. Szerzej piszemy o tym w artykule [rentowność klientów agencji](/poradnik/rentownosc-klientow-agencji).",
    "## ETL a ELT",
    "W nowszym podejściu, ELT, dane najpierw ładuje się w surowej postaci do hurtowni, a przekształca dopiero tam. Dla małej i średniej firmy różnica jest zwykle mniej ważna niż to, żeby proces był opisany, powtarzalny i miał właściciela.",
    "## Jak zacząć",
    "Zacznijcie od jednego raportu, który dziś składa się ręcznie z kilku źródeł. Spiszcie, skąd pochodzi każda liczba, jak ją przeliczacie i jak często raport jest potrzebny. To wystarczy, żeby zbudować pierwszy przepływ ETL. Kolejne raporty zwykle korzystają z tych samych danych, więc każdy następny powstaje szybciej.",
    "## Na co uważać",
    "- **Wspólne identyfikatory.** Bez jednego numeru klienta lub produktu w różnych systemach nie da się poprawnie połączyć danych.\n- **Jakość źródeł.** ETL nie naprawi danych, które od początku są wpisywane niedbale. Pomaga [deduplikacja danych](/slownik/deduplikacja-danych) i jasne zasady wprowadzania.\n- **Monitoring.** Gdy jedno źródło przestanie odpowiadać, raport pokaże niepełne liczby. Przepływ powinien zgłaszać takie sytuacje.\n- **Jedno źródło prawdy.** Trzeba ustalić, który system jest nadrzędny dla danej informacji, o czym piszemy w haśle [jedno źródło prawdy](/slownik/jedno-zrodlo-prawdy).",
    "Budową takich przepływów i raportów zajmujemy się w usłudze [automatyzacja raportów](/uslugi/automatyzacja-raportow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy ETL jest tylko dla dużych firm?", answer: "Nie. Mała firma też może co noc składać dane z kilku systemów do jednego raportu. Narzędzia jak n8n pozwalają zbudować prosty ETL bez drogiej platformy." },
    { question: "Jak często uruchamiać ETL?", answer: "Tak często, jak potrzebują ludzie korzystający z raportu. Zwykle raz dziennie wystarcza, czasem co godzinę." },
    { question: "Czy ETL zmienia dane w systemach źródłowych?", answer: "Zwykle nie. Pobiera kopię, przekształca ją i zapisuje w innym miejscu, a źródła zostają bez zmian." },
  ],
  relatedTermSlugs: ["business-intelligence", "jedno-zrodlo-prawdy", "deduplikacja-danych", "api"],
  relatedServiceSlugs: ["automatyzacja-raportow", "migracja-danych", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedToolSlugs: ["n8n", "make"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedArticleSlugs: ["rentownosc-klientow-agencji", "porzadek-w-danych-przed-ai-i-automatyzacja"],
});
