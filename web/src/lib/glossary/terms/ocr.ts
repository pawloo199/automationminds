import { defineTerm } from "../types";

export default defineTerm({
  slug: "ocr",
  term: "OCR",
  fullName: "Optical Character Recognition",
  category: "ai",
  definition:
    "OCR to technologia rozpoznawania tekstu na obrazach i skanach. Zamienia zdjęcie lub skan dokumentu na tekst, który można przeszukiwać, kopiować i przetwarzać dalej.",
  metaTitle: "OCR: co to jest i jak odczytuje tekst ze skanów",
  metaDescription:
    "OCR co to jest: jak działa rozpoznawanie tekstu ze skanów i zdjęć, czym różni się od inteligentnego przetwarzania dokumentów i gdzie się przydaje.",
  primaryKeyword: "ocr co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest OCR",
    "Skan faktury czy zdjęcie protokołu to dla komputera tylko obraz, zbiór kolorowych punktów. OCR, czyli optyczne rozpoznawanie znaków, analizuje ten obraz i odczytuje z niego litery i cyfry. Wynikiem jest tekst, który da się przeszukać, skopiować albo przekazać do dalszej automatyzacji.",
    "Nowoczesny OCR radzi sobie z różnymi czcionkami, krzywymi skanami, zdjęciami z telefonu, a coraz częściej także z pismem odręcznym. Jakość wyniku nadal zależy jednak od jakości obrazu: rozmazane zdjęcie albo pieczątka na tekście dadzą błędy.",
    "## OCR a inteligentne przetwarzanie dokumentów",
    "Sam OCR zwraca tekst, ale nie wie, co ten tekst znaczy. Nie odróżni numeru faktury od numeru konta ani daty wystawienia od terminu płatności. Tym zajmuje się kolejna warstwa, [inteligentne przetwarzanie dokumentów](/slownik/idp), w której AI rozumie strukturę dokumentu i wyodrębnia konkretne pola.",
    "| Etap | Co robi | Wynik |\n|---|---|---|\n| OCR | Odczytuje znaki z obrazu | Tekst dokumentu |\n| IDP | Rozumie dokument i wyodrębnia pola | Numer, data, NIP, kwoty |\n| Walidacja | Sprawdza poprawność danych | Dane gotowe do zapisu |\n| Integracja | Zapisuje w systemie | Faktura w programie księgowym |",
    "## Gdzie OCR się przydaje",
    "- **Faktury i rachunki papierowe** oraz w PDF bez warstwy tekstowej.\n- **Dokumenty przewozowe** w logistyce: listy przewozowe, potwierdzenia dostaw.\n- **Protokoły i formularze** wypełniane na miejscu, fotografowane telefonem.\n- **Archiwa papierowe**, które firma chce przeszukiwać cyfrowo.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Kierowcy firmy transportowej robią zdjęcie podpisanego dokumentu dostawy i wysyłają je przez komunikator. Automatyzacja odbiera zdjęcie, OCR odczytuje tekst, AI rozpoznaje numer zlecenia i datę dostawy, a system zmienia status zlecenia na dostarczone i dołącza zdjęcie do dokumentacji. Dział rozliczeń może od razu wystawić fakturę. Więcej o automatyzacji w transporcie piszemy w artykule [co zautomatyzować w firmie logistycznej](/poradnik/co-zautomatyzowac-w-firmie-logistycznej).",
    "## Jak poprawić jakość odczytu",
    "Najprostsze kroki dają często największy efekt. Skanowanie w rozdzielczości odpowiedniej do tekstu, zdjęcia robione prosto i w dobrym świetle, jeden dokument na jednym zdjęciu, pliki PDF zamiast zdjęć ekranu. Przy dokumentach z wieloma stronami ważne jest, żeby strony nie były pomieszane. Prosta instrukcja dla osób przesyłających dokumenty zmniejsza liczbę błędów bardziej niż zmiana narzędzia.",
    "## Na co zwrócić uwagę",
    "- **Jakość skanów:** prosta instrukcja dla osób robiących zdjęcia często daje więcej niż zmiana narzędzia.\n- **Język:** narzędzie powinno dobrze obsługiwać polskie znaki.\n- **Dane osobowe:** dokumenty bywają pełne danych, więc trzeba wiedzieć, gdzie są przetwarzane.\n- **Kontrola wyników:** przy kwotach i numerach kont potrzebna jest walidacja albo sprawdzenie przez człowieka.",
    "Odczyt dokumentów z OCR i AI wdrażamy w usługach [AI w obsłudze dokumentów](/uslugi/ai-w-obsludze-dokumentow) i [cyfryzacja danych i dokumentów](/uslugi/cyfryzacja-danych-i-dokumentow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy OCR odczyta pismo odręczne?", answer: "Nowoczesne narzędzia coraz lepiej, ale wyniki są mniej pewne niż przy druku. Przy ważnych danych potrzebne jest sprawdzenie." },
    { question: "Czy OCR jest potrzebny przy fakturach z KSeF?", answer: "Nie. Faktury z KSeF mają postać ustrukturyzowaną i dane można odczytać bezpośrednio. OCR przydaje się przy dokumentach papierowych i skanach." },
    { question: "Czym różni się OCR od IDP?", answer: "OCR odczytuje tekst z obrazu. IDP rozumie dokument i wyodrębnia z niego konkretne pola, np. NIP czy kwotę." },
  ],
  relatedTermSlugs: ["idp", "llm", "rpa"],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow"],
  relatedToolSlugs: ["n8n"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedArticleSlugs: ["cyfryzacja-danych-w-firmie", "co-zautomatyzowac-w-firmie-logistycznej"],
});
