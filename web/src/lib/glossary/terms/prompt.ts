import { defineTerm } from "../types";

export default defineTerm({
  slug: "prompt",
  term: "Prompt",
  category: "ai",
  definition:
    "Prompt to polecenie lub pytanie, które przekazuje się modelowi AI. Od jego treści, kontekstu i przykładów zależy, jak dokładna i użyteczna będzie odpowiedź.",
  metaTitle: "Prompt: co to jest i jak pisać dobre polecenia dla AI",
  metaDescription:
    "Prompt co to jest: jak napisać polecenie dla ChatGPT lub Claude, z czego składa się dobry prompt, przykłady z pracy firmy i najczęstsze błędy.",
  primaryKeyword: "prompt co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest prompt",
    "Prompt to wszystko, co model AI dostaje na wejściu: polecenie, kontekst, dane do przetworzenia i opis oczekiwanego wyniku. W rozmowie z [ChatGPT](/narzedzia/chatgpt) czy [Claude](/narzedzia/claude) prompt to wiadomość, którą piszecie. W automatyzacji prompt jest zapisany w przepływie i za każdym razem uzupełniany innymi danymi, na przykład treścią kolejnego maila.",
    "## Z czego składa się dobry prompt",
    "- **Rola i cel:** kim ma być model i po co powstaje odpowiedź, np. „przygotuj szkic odpowiedzi dla klienta sklepu”.\n- **Kontekst:** informacje, których model nie zna, np. zasady zwrotów, ton komunikacji firmy.\n- **Dane wejściowe:** dokument, mail, lista, na której ma pracować.\n- **Format wyniku:** lista punktów, tabela, pola w [JSON](/slownik/json), określona długość.\n- **Ograniczenia:** czego nie robić, np. „nie obiecuj terminów dostawy”, „jeśli brakuje danych, napisz, czego brakuje”.\n- **Przykład:** jedna lub dwie wzorcowe odpowiedzi bardzo poprawiają wynik.",
    "## Przykład: słaby i dobry prompt",
    "To przykład ilustracyjny. Słaby prompt: „Odpowiedz klientowi w sprawie reklamacji”. Model nie wie, czego dotyczy reklamacja, jakie są zasady i jak firma pisze do klientów.",
    "Lepszy prompt: „Jesteś konsultantem sklepu z artykułami domowymi. Przygotuj szkic odpowiedzi na reklamację poniżej. Zasady: reklamację rozpatrujemy w ciągu 14 dni, prosimy o zdjęcie wady i numer zamówienia. Pisz uprzejmie, krótko, na ty. Nie obiecuj zwrotu pieniędzy. Jeśli brakuje numeru zamówienia, poproś o niego. Treść reklamacji: […]”. Taki prompt daje odpowiedź, którą zwykle wystarczy przejrzeć.",
    "## Prompt w automatyzacji",
    "W procesach firmowych prompt jest częścią przepływu i działa setki razy dziennie. Dlatego pisze się go staranniej niż w zwykłej rozmowie: testuje na prawdziwych przykładach, wersjonuje i poprawia, gdy wyniki się pogarszają. Dobrze jest też wymagać stałego formatu odpowiedzi, żeby kolejny krok automatyzacji mógł ją odczytać. Przy odpowiedziach na podstawie dokumentów firmy prompt łączy się z wyszukiwaniem fragmentów, o czym piszemy w haśle [RAG](/slownik/rag).",
    "## Jak testować prompt",
    "Prompt do automatyzacji warto sprawdzić na kilkudziesięciu prawdziwych przykładach, a nie na jednym. Wśród nich powinny być przypadki trudne: niepełne dane, nietypowe sformułowania, dokumenty w innym języku. Wyniki porównuje się z tym, co odpowiedziałby doświadczony pracownik. Po każdej zmianie promptu test się powtarza, żeby poprawa w jednym miejscu nie zepsuła wyników w innym.",
    "## Najczęstsze błędy",
    "- polecenie zbyt ogólne, bez kontekstu,\n- brak opisu formatu wyniku,\n- kilka różnych zadań w jednym poleceniu,\n- wklejanie danych, których nie wolno przekazywać zewnętrznemu dostawcy,\n- brak sprawdzenia wyniku przed wysłaniem do klienta.",
    "Pisania skutecznych poleceń i bezpiecznej pracy z danymi uczymy zespoły podczas [szkoleń AI](/uslugi/szkolenia-ai-dla-zespolow). Przykłady codziennego użycia AI opisujemy w artykule [AI w codziennej pracy zespołu](/poradnik/ai-w-codziennej-pracy-zespolu).",
  ].join("\n\n"),
  faq: [
    { question: "Czy prompt musi być po angielsku?", answer: "Nie. Współczesne modele dobrze rozumieją polecenia po polsku. Ważniejsza od języka jest precyzja polecenia." },
    { question: "Czy warto mieć bibliotekę promptów?", answer: "Tak. Sprawdzone polecenia do powtarzalnych zadań oszczędzają czas i dają podobną jakość wyników w całym zespole." },
    { question: "Jak długi powinien być prompt?", answer: "Tak długi, jak potrzeba, żeby model miał komplet kontekstu. Przy zadaniach w automatyzacji polecenia bywają długie, a wynik i tak jest krótki." },
  ],
  relatedTermSlugs: ["llm", "rag", "halucynacje-ai"],
  relatedServiceSlugs: ["szkolenia-ai-dla-zespolow", "strategia-wdrozenia-ai"],
  relatedToolSlugs: ["chatgpt", "claude"],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["ai-w-codziennej-pracy-zespolu", "chatgpt-dla-ksiegowych-dane-klientow"],
});
