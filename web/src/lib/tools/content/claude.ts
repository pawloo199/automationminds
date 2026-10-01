import type { ToolContent } from "../types";

export const claude: ToolContent = {
  slug: "claude",
  metaTitle: "Wdrożenie Claude w firmie: AI do dokumentów i wiedzy | Automation Minds",
  metaDescription:
    "Wdrażamy Claude od Anthropic: praca z długimi dokumentami, asystenci na wiedzy firmy, analiza umów i automatyzacje przez API. Bezpłatna konsultacja 30 min.",
  primaryKeyword: "wdrożenie Claude w firmie",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "Sztuczna inteligencja",
    title: "Wdrożenie Claude w firmie: AI do pracy z dokumentami i wiedzą",
    lead: "Claude od Anthropic świetnie radzi sobie z długimi dokumentami, starannym tekstem i analizą. Wdrażamy go dla zespołów, budujemy asystentów na wiedzy firmy i podłączamy przez API do automatyzacji, które przetwarzają umowy, raporty i korespondencję.",
    bullets: [
      "Analiza długich umów, raportów i dokumentacji",
      "Projekty z wiedzą firmy dla zespołów",
      "Claude w automatyzacjach przez API",
    ],
  },
  intro: {
    title: "Kiedy Claude sprawdza się najlepiej",
    paragraphs: [
      "Claude to rodzina modeli AI firmy Anthropic. Wyróżnia się pracą z bardzo długimi tekstami: potrafi przeanalizować obszerną umowę, specyfikację czy kilka raportów naraz i odpowiadać na pytania z odwołaniem do konkretnych fragmentów. Dobrze pisze po polsku i trzyma się podanych instrukcji.",
      "Dla zespołów Claude oferuje konta firmowe z Projektami, w których można zebrać dokumenty i instrukcje dla konkretnego zadania, np. obsługi przetargów czy przygotowania ofert. Przez API podłączamy modele Claude do automatyzacji w n8n lub Make.",
      "Nie traktujemy żadnego modelu jako jedynego słusznego. Na konsultacji sprawdzamy wasze zadania i testujemy, który model radzi sobie z nimi lepiej. Często w jednej firmie korzystamy z różnych modeli do różnych celów.",
    ],
  },
  useCases: {
    title: "Jak wdrażamy Claude",
    lead: "Najwięcej korzyści widzimy tam, gdzie zespół codziennie czyta i pisze długie teksty.",
    items: [
      { title: "Analiza umów i dokumentacji", body: "Wyszukiwanie ryzyk, terminów i zobowiązań w umowach, regulaminach i specyfikacjach przetargowych." },
      { title: "Asystent na wiedzy firmy", body: "Projekty z procedurami, ofertą i dokumentacją, z których korzysta cały zespół." },
      { title: "Raporty i streszczenia", body: "Streszczenia spotkań, raporty z wielu źródeł i podsumowania dla zarządu." },
      { title: "Automatyzacje przez API", body: "Claude w przepływach n8n lub Make: odczyt dokumentów, klasyfikacja, przygotowanie odpowiedzi." },
    ],
  },
  flows: {
    title: "Przykładowe zastosowania Claude",
    lead: "Przepływy, w których model pracuje z długimi dokumentami, a człowiek podejmuje decyzje.",
    items: [
      {
        title: "Przegląd umowy od klienta",
        trigger: "Nowa umowa w folderze do przeglądu",
        steps: ["Claude porównuje umowę z waszym wzorem", "Lista różnic, ryzyk i terminów", "Notatka dla prawnika lub zarządu"],
        result: "Przegląd zaczyna się od gotowej listy uwag, a nie od czytania od zera.",
      },
      {
        title: "Specyfikacja przetargowa",
        trigger: "Nowy przetarg do analizy",
        steps: ["Wyciągnięcie wymagań, terminów i kryteriów", "Porównanie z ofertą firmy", "Lista pytań i decyzja startuj albo odpuść"],
        result: "Decyzja o udziale w przetargu w godzinę zamiast w dzień.",
      },
      {
        title: "Raport z korespondencji",
        trigger: "Koniec tygodnia",
        steps: ["Zebranie maili i notatek z projektu", "Streszczenie postępów i problemów", "Wysłanie raportu do klienta lub zarządu"],
        result: "Raport projektowy bez wieczornego pisania.",
      },
    ],
  },
  fit: {
    title: "Kiedy Claude się sprawdzi, a kiedy wybierzemy coś innego",
    good: [
      "Pracujecie z długimi dokumentami: umowami, specyfikacjami, raportami.",
      "Liczy się staranny tekst po polsku i trzymanie się instrukcji.",
      "Chcecie dać zespołowi asystenta na wiedzy firmy.",
      "Budujecie automatyzacje, w których model analizuje treść dokumentów.",
    ],
    limits: [
      "Firma korzysta głównie z narzędzi, w które wbudowany jest ChatGPT lub Copilot.",
      "Dane nie mogą opuścić firmy. Wtedy rozważamy modele uruchamiane lokalnie.",
      "Zadanie da się rozwiązać prostą regułą bez AI.",
    ],
  },
  comparison: {
    title: "Claude czy ChatGPT",
    lead: "Oba modele są bardzo dobre i szybko się rozwijają. Najlepiej porównać je na waszych zadaniach.",
    columns: ["Claude (Anthropic)", "ChatGPT (OpenAI)"],
    rows: [
      { label: "Mocne strony", values: ["Długie dokumenty, staranne teksty, kod", "Szerokie zastosowania, obrazy, analiza danych"] },
      { label: "Praca zespołowa", values: ["Projekty z dokumentami i instrukcjami", "GPT i przestrzenie robocze"] },
      { label: "API do automatyzacji", values: ["Tak", "Tak"] },
      { label: "Dane w planach firmowych", values: ["Domyślnie nie służą do trenowania", "Domyślnie nie służą do trenowania"] },
    ],
    note: "Porównanie jest uproszczone. Model dobieramy do zadania i testujemy na waszych danych.",
  },
  example: {
    title: "Analiza umów przed i po wdrożeniu Claude",
    lead: "Przykład firmy usługowej, która podpisuje wiele umów na wzorach klientów.",
    rows: [
      { label: "Nowa umowa", before: "Prawnik czyta całość od początku.", after: "Claude przygotowuje listę różnic względem waszego wzoru." },
      { label: "Ryzyka", before: "Wyłapywane zależnie od doświadczenia osoby.", after: "Lista kar, terminów i odpowiedzialności z odwołaniem do paragrafów." },
      { label: "Decyzja", before: "Po kilku dniach.", after: "Prawnik skupia się na spornych punktach." },
      { label: "Terminy", before: "Zapisywane ręcznie w kalendarzu.", after: "Terminy z umowy trafiają do rejestru z przypomnieniami." },
    ],
    note: "To przykład ilustracyjny. AI wspiera prawnika, ale go nie zastępuje. Zakres zawsze ustalamy po rozmowie.",
  },
  costs: {
    title: "Ile kosztuje Claude w firmie",
    paragraphs: [
      "Konta firmowe Claude rozlicza się za użytkownika w miesiącu. Modele używane przez API rozlicza się za ilość przetworzonego tekstu, więc przy długich dokumentach koszt zależy od ich liczby i objętości.",
      "Przed budową automatyzacji szacujemy koszt API na podstawie waszych wolumenów. Wycenę wdrożenia przygotowujemy po konsultacji.",
    ],
  },
  faq: [
    { question: "Czy Claude dobrze radzi sobie z językiem polskim?", answer: "Tak. Claude dobrze rozumie i pisze po polsku, także teksty formalne i specjalistyczne." },
    { question: "Czy dane przekazane do Claude są bezpieczne?", answer: "W planach firmowych i przez API dane domyślnie nie służą do trenowania modeli. Ustalamy zasady pracy z danymi klientów i konfigurujemy dostęp." },
    { question: "Czy Claude zastąpi prawnika przy umowach?", answer: "Nie. Przyspiesza przegląd, wskazuje różnice i ryzyka, ale decyzje podejmuje człowiek. Tak też projektujemy wdrożenia." },
    { question: "Czy da się połączyć Claude z automatyzacjami?", answer: "Tak. Przez API podłączamy Claude do przepływów w n8n lub Make, które pobierają dokumenty i przekazują wyniki do waszych systemów." },
    { question: "Claude czy ChatGPT, co wybrać?", answer: "Zależy od zadania. Przy długich dokumentach i starannych tekstach często lepiej sprawdza się Claude, przy dużej liczbie gotowych integracji ChatGPT. Testujemy oba na waszych przykładach." },
    { question: "Czy jesteście partnerem Anthropic?", answer: "Nie. Jesteśmy niezależnymi specjalistami i dobieramy model do zadania." },
  ],
  relatedServiceSlugs: ["asystent-ai-na-firmowej-wiedzy", "ai-w-obsludze-dokumentow", "strategia-wdrozenia-ai", "agenci-ai"],
  relatedToolSlugs: ["chatgpt", "n8n", "make", "microsoft-365"],
  relatedArticleSlugs: ["wdrozenie-ai-w-malej-i-sredniej-firmie", "ai-w-codziennej-pracy-zespolu", "rodo-a-automatyzacja-procesow"],
};
