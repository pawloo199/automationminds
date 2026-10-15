import { defineTerm } from "../types";

export default defineTerm({
  slug: "rag",
  term: "RAG",
  fullName: "Retrieval-Augmented Generation",
  category: "ai",
  definition:
    "RAG to sposób działania asystenta AI, w którym przed odpowiedzią system wyszukuje pasujące fragmenty w dokumentach firmy i przekazuje je modelowi, żeby odpowiadał na ich podstawie i wskazywał źródło.",
  metaTitle: "RAG: co to jest i jak AI odpowiada z dokumentów firmy",
  metaDescription:
    "RAG co to jest: jak asystent AI wyszukuje fragmenty w dokumentach firmy i odpowiada na ich podstawie, ze źródłem. Zastosowania, ograniczenia i wdrożenie.",
  primaryKeyword: "rag co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest RAG",
    "Model językowy sam z siebie nie zna procedur, cenników ani umów waszej firmy. Można by je wkleić do każdego pytania, ale dokumentów jest zwykle za dużo. RAG rozwiązuje ten problem w dwóch krokach. Najpierw system wyszukuje w bazie dokumentów fragmenty, które pasują do pytania. Potem przekazuje je modelowi razem z pytaniem i poleceniem, żeby odpowiedział tylko na ich podstawie.",
    "W ten sposób asystent odpowiada z waszej wiedzy, a nie z ogólnej wiedzy modelu, i może wskazać dokument, z którego pochodzi odpowiedź. To najważniejsza różnica między ogólnym czatem a asystentem na firmowej wiedzy.",
    "## Jak działa RAG krok po kroku",
    "- **Przygotowanie dokumentów:** procedury, instrukcje, umowy, FAQ dzieli się na mniejsze fragmenty i zapisuje w bazie, w której można je wyszukiwać według znaczenia, a nie tylko słów.\n- **Wyszukiwanie:** pytanie użytkownika trafia do bazy, która zwraca kilka najbardziej pasujących fragmentów.\n- **Odpowiedź:** model dostaje pytanie i znalezione fragmenty, a w [prompcie](/slownik/prompt) polecenie, by odpowiadał tylko na ich podstawie i podawał źródło.\n- **Aktualizacja:** gdy dokument się zmienia, jego fragmenty w bazie są odświeżane.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Serwisant w terenie pyta asystenta, jaki moment dokręcenia podaje producent dla danego modelu urządzenia. System znajduje odpowiedni fragment instrukcji serwisowej, model formułuje odpowiedź i podaje nazwę dokumentu oraz stronę. Serwisant może sprawdzić źródło jednym kliknięciem. Podobnie działa asystent dla działu kadr z regulaminami albo dla handlowców z cennikami i warunkami. Szerzej o tym w artykule [AI dla serwisantów](/poradnik/ai-dla-serwisantow).",
    "## RAG a halucynacje",
    "RAG wyraźnie ogranicza [halucynacje](/slownik/halucynacje-ai), ale ich nie eliminuje. Gdy wyszukiwanie zwróci złe fragmenty albo dokumenty są sprzeczne, odpowiedź też będzie błędna. Dlatego dobre wdrożenie pokazuje źródło przy każdej odpowiedzi, każe modelowi przyznać, że nie zna odpowiedzi, gdy brak jej w dokumentach, i regularnie sprawdza jakość na zestawie pytań testowych.",
    "## RAG a fine-tuning",
    "Fine-tuning, czyli dotrenowanie modelu na danych firmy, zmienia sposób, w jaki model pisze, ale słabo nadaje się do przekazywania mu aktualnej wiedzy. Każda zmiana w dokumentach wymagałaby ponownego trenowania. RAG pozwala zaktualizować wiedzę przez podmianę dokumentu i pokazać źródło odpowiedzi. Dlatego w asystentach na firmowej wiedzy zwykle zaczyna się od RAG.",
    "## Od czego zależy jakość",
    "- **Porządek w dokumentach:** nieaktualne wersje i duplikaty dają sprzeczne odpowiedzi. Zanim powstanie asystent, warto [przygotować dane pod AI](/uslugi/przygotowanie-danych-pod-ai).\n- **Podział na fragmenty:** zbyt małe gubią kontekst, zbyt duże rozmywają wyszukiwanie.\n- **Uprawnienia:** asystent powinien pokazywać tylko dokumenty, do których dana osoba ma dostęp.",
    "Asystentów opartych na RAG wdrażamy w usłudze [asystent AI na firmowej wiedzy](/uslugi/asystent-ai-na-firmowej-wiedzy).",
  ].join("\n\n"),
  faq: [
    { question: "Czy RAG to to samo co trenowanie modelu na danych firmy?", answer: "Nie. Przy RAG model się nie zmienia, tylko dostaje pasujące fragmenty dokumentów przy każdym pytaniu. To tańsze, łatwiejsze do aktualizacji i pozwala wskazać źródło." },
    { question: "Jakie dokumenty nadają się do RAG?", answer: "Procedury, instrukcje, regulaminy, umowy, bazy wiedzy, FAQ, opisy produktów. Najlepiej dokumenty tekstowe w aktualnych wersjach." },
    { question: "Czy asystent RAG może działać na danych poufnych?", answer: "Tak, jeśli wdrożenie uwzględnia uprawnienia, miejsce przetwarzania danych i plan dostawcy modelu, który nie trenuje na waszych danych." },
  ],
  relatedTermSlugs: ["llm", "agent-ai", "halucynacje-ai", "prompt"],
  relatedServiceSlugs: ["asystent-ai-na-firmowej-wiedzy", "przygotowanie-danych-pod-ai"],
  relatedToolSlugs: ["claude", "chatgpt", "n8n"],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["ai-dla-serwisantow", "porzadek-w-danych-przed-ai-i-automatyzacja"],
});
