import { defineTerm } from "../types";

export default defineTerm({
  slug: "agent-ai",
  term: "Agent AI",
  category: "ai",
  definition:
    "Agent AI to program oparty na modelu językowym, który nie tylko odpowiada na pytania, ale sam planuje kolejne kroki i korzysta z narzędzi, na przykład sprawdza dane w CRM, wysyła maila albo zakłada zadanie, żeby wykonać powierzone zadanie.",
  metaTitle: "Agent AI: co to jest i czym różni się od chatbota",
  metaDescription:
    "Agent AI co to jest: jak model językowy planuje kroki i korzysta z narzędzi, czym agent różni się od chatbota i automatyzacji oraz gdzie są granice.",
  primaryKeyword: "agent ai co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest agent AI",
    "Zwykły czat z modelem językowym odpowiada tekstem i na tym kończy. Agent AI dostaje cel, na przykład „przygotuj odpowiedź na to zapytanie ofertowe”, oraz dostęp do narzędzi: wyszukiwania w dokumentach, odczytu danych z systemu, wysyłki wiadomości. Sam decyduje, których narzędzi użyć i w jakiej kolejności. Sprawdza wynik każdego kroku i planuje następny, aż zadanie zostanie wykonane albo trzeba będzie poprosić człowieka o decyzję.",
    "## Agent AI, chatbot i automatyzacja",
    "| Cecha | Klasyczna automatyzacja | Chatbot | Agent AI |\n|---|---|---|---|\n| Jak działa | Stałe kroki zapisane z góry | Odpowiada na pytania | Sam planuje kroki |\n| Narzędzia | Te, które zaprojektowano | Zwykle brak | Kilka, wybiera sam |\n| Elastyczność | Niska, za to przewidywalna | Średnia | Wysoka |\n| Ryzyko błędu | Niskie | Błędna odpowiedź | Błędne działanie |",
    "W praktyce najlepiej sprawdza się połączenie. Przewidywalne kroki robi klasyczny [workflow](/slownik/workflow), a agent wchodzi tam, gdzie trzeba zrozumieć tekst, wybrać właściwy wariant albo poradzić sobie z nietypową sytuacją.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Do hurtowni przychodzi zapytanie ofertowe w mailu, napisane swobodnie i z załącznikiem. Agent odczytuje treść, rozpoznaje produkty i ilości, sprawdza w [ERP](/slownik/erp) ceny i dostępność, szuka w historii klienta jego rabatu i przygotowuje szkic oferty. Gdy jakiegoś produktu nie rozpoznaje, nie zgaduje, tylko oznacza pozycję do wyjaśnienia. Handlowiec dostaje gotowy szkic do sprawdzenia i wysyłki.",
    "## Granice i bezpieczeństwo",
    "Im więcej agent może zrobić sam, tym ważniejsze są zasady:",
    "- **Ograniczone uprawnienia:** agent ma dostęp tylko do tych narzędzi i danych, których potrzebuje.\n- **Akceptacja człowieka:** działania nieodwracalne, jak wysyłka do klienta, płatność czy zmiana w umowie, wymagają zatwierdzenia.\n- **Ślad działań:** każdy krok agenta jest zapisany, żeby można było sprawdzić, dlaczego zrobił to, co zrobił.\n- **Jasne granice:** agent nie podejmuje decyzji, które wymagają oceny prawnej, kadrowej czy finansowej.",
    "Modele potrafią się mylić, o czym piszemy w haśle [halucynacje AI](/slownik/halucynacje-ai). Agent, który działa, a nie tylko pisze, potrzebuje więc dobrze zaprojektowanych bezpieczników.",
    "## Jak zacząć z agentami",
    "Najlepiej od jednego, dobrze opisanego zadania, które dziś zajmuje komuś sporo czasu i ma jasne kryteria poprawnego wyniku. Na początku agent przygotowuje wyniki do akceptacji, a człowiek sprawdza każdy z nich. Gdy po kilku tygodniach wyniki są stabilne, można zmniejszyć zakres kontroli w sprawach o niskim ryzyku i dodawać kolejne narzędzia.",
    "## Gdzie agenci AI sprawdzają się najlepiej",
    "Przy zadaniach, które wymagają przeczytania i zrozumienia tekstu, a potem kilku prostych działań w systemach: obsługa zapytań, przygotowanie ofert, odpowiedzi na typowe pytania klientów, porządkowanie dokumentów. Agentów budujemy między innymi w [n8n](/narzedzia/n8n/agenci-ai). Całą usługę opisujemy na stronie [agenci AI](/uslugi/agenci-ai), a o różnicy między agentem a chatbotem więcej na stronie [chatbot AI dla firmy](/uslugi/chatbot-ai-dla-firmy).",
  ].join("\n\n"),
  faq: [
    { question: "Czy agent AI może działać bez nadzoru?", answer: "W zadaniach o niskim ryzyku, np. porządkowaniu danych, tak. Działania wobec klientów i pieniędzy powinien zatwierdzać człowiek." },
    { question: "Czym agent AI różni się od chatbota?", answer: "Chatbot odpowiada na pytania. Agent wykonuje zadania: korzysta z narzędzi, sprawdza dane i podejmuje kolejne kroki." },
    { question: "Na jakich modelach buduje się agentów?", answer: "Na modelach językowych dostawców takich jak OpenAI czy Anthropic. Wybór zależy od zadania, kosztu i wymagań co do danych." },
  ],
  relatedTermSlugs: ["llm", "rag", "workflow", "halucynacje-ai"],
  relatedServiceSlugs: ["agenci-ai", "chatbot-ai-dla-firmy", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedToolSlugs: ["n8n", "claude", "chatgpt"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow"],
  relatedArticleSlugs: ["wdrozenie-ai-w-malej-i-sredniej-firmie", "ai-w-handlu-b2b"],
});
