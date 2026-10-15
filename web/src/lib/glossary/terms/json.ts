import { defineTerm } from "../types";

export default defineTerm({
  slug: "json",
  term: "JSON",
  fullName: "JavaScript Object Notation",
  category: "dane",
  definition:
    "JSON to tekstowy format zapisu danych, w którym informacje mają postać par nazwa i wartość. Systemy najczęściej wymieniają w nim dane przez API i webhooki.",
  metaTitle: "JSON: co to jest i dlaczego go spotkasz w automatyzacji",
  metaDescription:
    "JSON co to jest: prosty format danych używany przez API i webhooki, jak wygląda, jak go czytać i gdzie spotkasz go przy automatyzacji procesów.",
  primaryKeyword: "json co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest JSON",
    "JSON to sposób zapisania danych tak, żeby mógł je łatwo odczytać zarówno program, jak i człowiek. Dane zapisuje się jako pary: nazwa pola i jego wartość. Pola można grupować w obiekty, a obiekty w listy. Mimo że nazwa pochodzi od języka JavaScript, z JSON korzystają praktycznie wszystkie współczesne systemy.",
    "Tak może wyglądać zamówienie zapisane w JSON:",
    "```\n{\n  \"numer\": \"ZAM/2026/10/123\",\n  \"klient\": { \"nazwa\": \"Przykładowa sp. z o.o.\", \"nip\": \"0000000000\" },\n  \"pozycje\": [\n    { \"produkt\": \"Uszczelka A\", \"ilosc\": 50 },\n    { \"produkt\": \"Uszczelka B\", \"ilosc\": 20 }\n  ],\n  \"zaplacone\": false\n}\n```",
    "To przykład ilustracyjny. Widać tu obiekt klienta, listę pozycji i pole z wartością logiczną. Program wie, że „ilosc” to liczba, a „zaplacone” to tak albo nie.",
    "## Gdzie spotkasz JSON",
    "- **API:** odpowiedzi z [API](/slownik/api) większości systemów przychodzą w JSON.\n- **Webhooki:** [webhook](/slownik/webhook) przesyła dane o zdarzeniu najczęściej w tym formacie.\n- **Narzędzia do automatyzacji:** w [n8n](/narzedzia/n8n) i [Make](/narzedzia/make) dane przepływające między krokami są pokazywane właśnie jako JSON.\n- **AI:** modele językowe mogą zwracać dane wyodrębnione z dokumentu w JSON, a automatyzacja od razu zapisze je w systemie.",
    "## JSON a CSV i Excel",
    "| Cecha | JSON | CSV lub Excel |\n|---|---|---|\n| Struktura | Zagnieżdżona, np. zamówienie z listą pozycji | Płaska tabela |\n| Typy danych | Liczby, tekst, wartości logiczne, listy | Głównie tekst i liczby |\n| Kto czyta | Programy, a w razie potrzeby ludzie | Głównie ludzie |\n| Typowe użycie | Wymiana danych między systemami | Raporty, eksporty, import |",
    "## JSON i AI",
    "Przy odczycie dokumentów przez AI JSON jest bardzo przydatny. Zamiast prosić model o opis faktury, prosi się go o zwrócenie konkretnych pól: numer, data, NIP sprzedawcy, kwoty. Taki wynik łatwo sprawdzić i zapisać w systemie. Na tym opiera się [inteligentne przetwarzanie dokumentów](/slownik/idp), które wdrażamy w usłudze [AI w obsłudze dokumentów](/uslugi/ai-w-obsludze-dokumentow).",
    "## Najczęstsze kłopoty z JSON w integracjach",
    "Błędy w integracjach często wynikają z różnic w danych, a nie z samego formatu. Jeden system zapisuje datę jako tekst, drugi jako liczbę. Pole, które zwykle jest wypełnione, czasem przychodzi puste. Lista pozycji ma jedną pozycję i system traktuje ją inaczej niż listę. Dobra integracja sprawdza takie przypadki i zamiast się zatrzymać, zgłasza czytelny błąd z informacją, czego brakuje.",
    "## Czy trzeba znać JSON, żeby automatyzować",
    "Nie trzeba go pisać, ale warto umieć go przeczytać. Kto rozumie, gdzie w JSON jest numer zamówienia, a gdzie lista pozycji, szybciej znajdzie błąd w przepływie i łatwiej dogada się z osobą budującą integrację. Podstawy pracy z danymi w narzędziach automatyzacji omawiamy podczas [szkoleń z n8n](/narzedzia/n8n/szkolenie).",
  ].join("\n\n"),
  faq: [
    { question: "Czy JSON to język programowania?", answer: "Nie. To format zapisu danych. Nie wykonuje żadnych poleceń, tylko przechowuje informacje." },
    { question: "Czym otworzyć plik JSON?", answer: "Dowolnym edytorem tekstu. Przeglądarki i edytory kodu dodatkowo go formatują, co ułatwia czytanie." },
    { question: "Czy JSON można zamienić na Excel?", answer: "Tak, jeśli dane da się sprowadzić do tabeli. Narzędzia automatyzacji robią to w jednym kroku." },
  ],
  relatedTermSlugs: ["api", "webhook", "idp"],
  relatedServiceSlugs: ["integracje-systemow", "ai-w-obsludze-dokumentow"],
  relatedToolSlugs: ["n8n", "make"],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["n8n-co-to-jest", "jak-zainstalowac-n8n"],
});
