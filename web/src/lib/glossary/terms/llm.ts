import { defineTerm } from "../types";

export default defineTerm({
  slug: "llm",
  term: "LLM (duży model językowy)",
  fullName: "Large Language Model",
  category: "ai",
  definition:
    "LLM, czyli duży model językowy, to model AI wytrenowany na ogromnej ilości tekstu, który rozumie polecenia w języku naturalnym i generuje odpowiedzi, streszczenia, tłumaczenia czy szkice dokumentów.",
  metaTitle: "LLM: co to jest duży model językowy",
  metaDescription:
    "LLM co to jest: jak działa duży model językowy, co potrafi w firmie, gdzie się myli i jak bezpiecznie korzystać z ChatGPT, Claude i podobnych modeli.",
  primaryKeyword: "llm co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest LLM",
    "Duży model językowy to program, który nauczył się zależności w języku na podstawie bardzo dużej ilości tekstów. Na tej podstawie potrafi kontynuować tekst w sensowny sposób: odpowiedzieć na pytanie, streścić dokument, napisać szkic maila, wyodrębnić dane z faktury albo przetłumaczyć umowę. Na takich modelach działają [ChatGPT](/narzedzia/chatgpt) i [Claude](/narzedzia/claude).",
    "Model nie ma wiedzy w ludzkim rozumieniu. Przewiduje, jaki tekst najlepiej pasuje do polecenia i kontekstu. Zwykle robi to bardzo dobrze, ale czasem z pełnym przekonaniem podaje nieprawdę. To zjawisko nazywa się [halucynacjami](/slownik/halucynacje-ai).",
    "## Co LLM potrafi w firmie",
    "- **Praca z tekstem:** szkice maili, ofert, odpowiedzi do klientów, notatek ze spotkań.\n- **Streszczenia:** długie umowy, raporty, wątki mailowe skrócone do najważniejszych punktów.\n- **Wyodrębnianie danych:** pola z faktur, zamówień i formularzy zapisane w strukturze, którą przyjmie system.\n- **Klasyfikacja:** przypisanie zgłoszenia do kategorii, ocena pilności, rozpoznanie języka.\n- **Odpowiedzi na podstawie dokumentów firmy:** w połączeniu z [RAG](/slownik/rag) model odpowiada z waszej wiedzy, a nie z ogólnej.",
    "## Czego LLM nie robi dobrze",
    "Model nie zna waszych danych, jeśli mu ich nie dostarczycie. Nie ma dostępu do bieżących informacji, chyba że połączy się go z wyszukiwarką lub systemem. Słabiej radzi sobie z dokładnymi obliczeniami i może się mylić w faktach. Dlatego w procesach firmowych wynik modelu traktuje się jako szkic do sprawdzenia albo jako jeden krok przepływu z kontrolą, a nie jako ostateczną decyzję.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Dział obsługi klienta dostaje kilkadziesiąt maili dziennie. Przepływ automatyzacji przekazuje każdy mail do modelu językowego z poleceniem: określ kategorię, pilność i numer zamówienia, jeśli występuje. Wynik w formacie [JSON](/slownik/json) trafia do systemu zgłoszeń, a konsultant dostaje gotowy szkic odpowiedzi. Konsultant sprawdza, poprawia i wysyła. Całość opisujemy w usłudze [automatyzacja w obsłudze klienta](/uslugi/automatyzacja-w-obsludze-klienta).",
    "## Jak wybrać model",
    "Modele różnią się jakością odpowiedzi, szybkością, ceną i zasadami przetwarzania danych. Do prostych zadań, jak klasyfikacja maili, wystarcza mniejszy i tańszy model. Do analizy długich dokumentów i złożonych odpowiedzi warto użyć mocniejszego. Najlepiej porównać dwa lub trzy modele na kilkudziesięciu prawdziwych przykładach z firmy, zanim wybierze się jeden do procesu.",
    "## Bezpieczeństwo danych",
    "Przy pracy z danymi firmy ważne jest, z jakiej wersji modelu korzystacie. Plany firmowe dostawców zwykle nie wykorzystują danych do trenowania modeli i dają kontrolę nad przetwarzaniem. Darmowe konta prywatne nie zawsze. Zasady opisujemy w artykule [RODO a automatyzacja procesów](/poradnik/rodo-a-automatyzacja-procesow), a bezpieczne wdrożenie AI w firmie w usłudze [strategia wdrożenia AI](/uslugi/strategia-wdrozenia-ai).",
  ].join("\n\n"),
  faq: [
    { question: "Czym różni się LLM od ChatGPT?", answer: "LLM to rodzaj modelu. ChatGPT to aplikacja, która korzysta z modeli językowych firmy OpenAI. Podobnie Claude to aplikacja i rodzina modeli firmy Anthropic." },
    { question: "Czy LLM zna dane mojej firmy?", answer: "Nie, dopóki ich nie dostarczycie w poleceniu albo przez połączenie z dokumentami, np. w rozwiązaniu typu RAG." },
    { question: "Czy można korzystać z LLM bez wysyłania danych na zewnątrz?", answer: "Są modele, które można uruchomić na własnym serwerze. Wymagają one odpowiedniego sprzętu i opieki, a ich możliwości zależą od wielkości modelu." },
  ],
  relatedTermSlugs: ["prompt", "rag", "halucynacje-ai", "agent-ai"],
  relatedServiceSlugs: ["strategia-wdrozenia-ai", "szkolenia-ai-dla-zespolow", "asystent-ai-na-firmowej-wiedzy"],
  relatedToolSlugs: ["chatgpt", "claude"],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["wdrozenie-ai-w-malej-i-sredniej-firmie", "ai-w-codziennej-pracy-zespolu"],
});
