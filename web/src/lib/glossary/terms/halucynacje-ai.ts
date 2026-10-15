import { defineTerm } from "../types";

export default defineTerm({
  slug: "halucynacje-ai",
  term: "Halucynacje AI",
  category: "ai",
  definition:
    "Halucynacje AI to sytuacje, w których model językowy podaje nieprawdziwe informacje w przekonujący sposób, na przykład wymyśla przepis, numer dokumentu, cytat albo dane, których nie ma w źródłach.",
  metaTitle: "Halucynacje AI: dlaczego model zmyśla i jak to ograniczyć",
  metaDescription:
    "Halucynacje AI co to jest: dlaczego modele językowe podają nieprawdę, gdzie to groźne w firmie i jak ograniczyć ryzyko przez RAG, kontrolę i proces.",
  primaryKeyword: "halucynacje ai",
  updatedAt: "2026-10-15",
  body: [
    "## Co to są halucynacje AI",
    "[Model językowy](/slownik/llm) przewiduje, jaki tekst najlepiej pasuje do polecenia. Nie sprawdza faktów w bazie, tylko generuje odpowiedź, która wygląda wiarygodnie. Zwykle jest też prawdziwa, ale gdy model nie ma potrzebnej informacji, może ją dopowiedzieć: podać nieistniejący artykuł ustawy, wymyślić numer faktury albo nazwisko autora cytatu. Robi to tym samym pewnym tonem, co przy prawdziwych informacjach, dlatego halucynacje trudno zauważyć.",
    "## Kiedy halucynacje są najczęstsze",
    "- gdy pytanie dotyczy rzeczy, których model nie zna, np. danych waszej firmy,\n- gdy pytanie zawiera błędne założenie, a model próbuje się do niego dopasować,\n- przy szczegółach: datach, liczbach, numerach, cytatach i przepisach,\n- przy długich odpowiedziach, w których model musi połączyć wiele faktów,\n- gdy polecenie nie pozwala przyznać, że odpowiedzi nie ma.",
    "## Gdzie to groźne w firmie",
    "Halucynacja w szkicu posta na blog to drobny problem. Halucynacja w odpowiedzi dla klienta, piśmie prawnym, ofercie z cenami czy danych zapisanych w systemie księgowym to realne ryzyko. W branżach takich jak prawo czy księgowość szczególnie ważne jest, żeby żaden tekst z AI nie trafiał dalej bez sprawdzenia, o czym piszemy w artykule [ChatGPT dla prawników a tajemnica zawodowa](/poradnik/chatgpt-dla-prawnikow-tajemnica-zawodowa).",
    "## Jak ograniczyć halucynacje",
    "- **Dawać źródła zamiast pytać o wiedzę.** Model, który dostaje fragmenty dokumentów i polecenie odpowiadania tylko na ich podstawie, myli się rzadziej. Na tym polega [RAG](/slownik/rag).\n- **Pozwolić przyznać niewiedzę.** W [prompcie](/slownik/prompt) warto wprost napisać: jeśli informacji nie ma w dokumentach, napisz, że jej brak.\n- **Wymagać źródła.** Odpowiedź z odnośnikiem do dokumentu łatwo zweryfikować.\n- **Sprawdzać dane automatycznie.** Gdy AI odczytuje fakturę, automatyzacja może porównać NIP z bazą, sumy pozycji z kwotą razem i odrzucić wynik, który się nie zgadza.\n- **Zostawić decyzję człowiekowi.** Teksty dla klientów i dane finansowe sprawdza osoba odpowiedzialna.",
    "## Jak mierzyć skalę problemu",
    "Przed wdrożeniem warto przygotować zestaw pytań lub dokumentów testowych ze znanymi poprawnymi odpowiedziami. Wyniki modelu porównuje się z nimi i liczy, w ilu przypadkach odpowiedź zawierała błędną informację. Ten sam test uruchamia się po zmianie modelu, promptu lub dokumentów. Wtedy decyzja o wdrożeniu opiera się na wynikach z waszych danych, a nie na ogólnych deklaracjach dostawcy.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Asystent działu kadr odpowiada pracownikom na pytania o regulamin pracy. Bez dostępu do regulaminu odpowiadałby z ogólnej wiedzy o prawie pracy i mógłby podać zasady, które w firmie nie obowiązują. Z dostępem do aktualnego regulaminu przez RAG odpowiada na jego podstawie, podaje paragraf, a na pytania spoza regulaminu odpowiada, że trzeba zapytać dział kadr.",
    "Projektowanie wdrożeń AI z takimi bezpiecznikami to część naszej usługi [strategia wdrożenia AI](/uslugi/strategia-wdrozenia-ai), a pracy z odpowiedziami AI uczymy na [szkoleniach AI dla zespołów](/uslugi/szkolenia-ai-dla-zespolow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy nowsze modele już nie halucynują?", answer: "Robią to rzadziej, ale problem nie zniknął. Zabezpieczenia w procesie są nadal potrzebne." },
    { question: "Czy RAG całkowicie usuwa halucynacje?", answer: "Nie, ale wyraźnie je ogranicza i pozwala sprawdzić źródło odpowiedzi." },
    { question: "Jak rozpoznać halucynację?", answer: "Najprościej po braku źródła albo źródle, którego nie da się odnaleźć. Szczegóły, takie jak numery, daty i przepisy, zawsze warto zweryfikować." },
  ],
  relatedTermSlugs: ["llm", "rag", "prompt", "agent-ai"],
  relatedServiceSlugs: ["strategia-wdrozenia-ai", "asystent-ai-na-firmowej-wiedzy", "szkolenia-ai-dla-zespolow"],
  relatedToolSlugs: ["chatgpt", "claude"],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["chatgpt-dla-prawnikow-tajemnica-zawodowa", "ai-w-codziennej-pracy-zespolu"],
});
