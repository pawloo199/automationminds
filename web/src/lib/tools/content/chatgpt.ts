import type { ToolContent } from "../types";

export const chatgpt: ToolContent = {
  slug: "chatgpt",
  metaTitle: "Wdrożenie ChatGPT w firmie: zespół i automatyzacje | Automation Minds",
  metaDescription:
    "Wdrażamy ChatGPT i modele OpenAI w firmach: konta dla zespołu, własne GPT na wiedzy firmy i automatyczna obsługa dokumentów przez API. Konsultacja 30 min.",
  primaryKeyword: "wdrożenie ChatGPT w firmie",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "Sztuczna inteligencja",
    title: "Wdrożenie ChatGPT w firmie: od pracy zespołu do automatyzacji",
    lead: "Pomagamy wykorzystać ChatGPT i modele OpenAI tam, gdzie dają realną oszczędność czasu. Konfigurujemy konta dla zespołu, budujemy własne GPT na wiedzy firmy i podłączamy modele do automatyzacji, które pracują w tle.",
    bullets: [
      "Bezpieczne konta firmowe i zasady korzystania",
      "Własne GPT na procedurach i dokumentach firmy",
      "Modele OpenAI w automatycznych przepływach",
    ],
  },
  intro: {
    title: "ChatGPT w firmie to dwie różne rzeczy",
    paragraphs: [
      "Pierwsza to ChatGPT jako narzędzie dla zespołu: pisanie maili, streszczanie dokumentów, analiza danych, przygotowanie ofert. Tu najważniejsze są firmowe konta, w których dane nie służą do trenowania modeli, jasne zasady korzystania i szkolenie, które pokazuje, jak pisać skuteczne polecenia.",
      "Druga to modele OpenAI podłączone przez API do procesów firmy. Wtedy nikt nie musi otwierać czatu: model odczytuje faktury, klasyfikuje maile, wyciąga dane z umów i przekazuje je do systemów. To tu zwykle jest największa oszczędność.",
      "Wdrożenie zaczynamy od tego, które zadania zabierają zespołowi najwięcej czasu, i sprawdzamy, czy AI faktycznie poradzi sobie z nimi wystarczająco dobrze. Nie każdy proces potrzebuje AI.",
    ],
  },
  useCases: {
    title: "Jak wdrażamy ChatGPT i modele OpenAI",
    lead: "Od narzędzia dla każdego pracownika po automatyczne przetwarzanie dokumentów.",
    items: [
      { title: "Konta firmowe i zasady", body: "Konfiguracja przestrzeni dla zespołu, uprawnień i zasad dotyczących danych klientów." },
      { title: "Własne GPT na wiedzy firmy", body: "Asystenci znający procedury, ofertę i dokumentację, np. do obsługi klienta albo wdrażania nowych osób." },
      { title: "Dokumenty przez API", body: "Model odczytuje faktury, zamówienia i umowy, a automatyzacja przenosi dane do systemów." },
      { title: "Szkolenia dla zespołów", body: "Praktyczne warsztaty na waszych zadaniach: jak pisać polecenia i kiedy sprawdzać wyniki." },
    ],
  },
  flows: {
    title: "Przykładowe zastosowania modeli OpenAI",
    lead: "Przepływy, w których model działa w tle, a człowiek sprawdza tylko wyjątki.",
    items: [
      {
        title: "Klasyfikacja maili",
        trigger: "Nowy mail na adres ogólny",
        steps: ["Model rozpoznaje temat, pilność i klienta", "Przypisanie do działu i osoby", "Szkic odpowiedzi do akceptacji"],
        result: "Maile trafiają do właściwych osób bez ręcznego sortowania.",
      },
      {
        title: "Dane z zamówień w PDF",
        trigger: "Zamówienie od klienta jako załącznik",
        steps: ["Model wyciąga pozycje, ilości i terminy", "Sprawdzenie z cennikiem i stanami", "Utworzenie zamówienia w systemie do akceptacji"],
        result: "Handlowiec zatwierdza zamiast przepisywać.",
      },
      {
        title: "Odpowiedzi z bazy wiedzy",
        trigger: "Pytanie pracownika w Teams lub Slacku",
        steps: ["Wyszukanie w procedurach i dokumentach", "Odpowiedź z podaniem źródła", "Pytania bez odpowiedzi przekazywane ekspertowi"],
        result: "Mniej pytań do tych samych doświadczonych osób.",
      },
    ],
  },
  fit: {
    title: "Kiedy ChatGPT się sprawdzi, a kiedy wybierzemy coś innego",
    good: [
      "Zespół dużo pisze, streszcza i analizuje teksty.",
      "Macie powtarzalne dokumenty, z których trzeba wyciągać dane.",
      "Chcecie dać pracownikom narzędzie AI z jasnymi zasadami.",
      "Firma korzysta z Microsoft 365 lub innych narzędzi, które dobrze łączą się z OpenAI.",
    ],
    limits: [
      "Zadanie wymaga pracy z bardzo długimi dokumentami naraz. Wtedy często lepiej sprawdza się Claude.",
      "Dane nie mogą opuścić firmy. Wtedy rozważamy modele uruchamiane lokalnie.",
      "Proces da się rozwiązać prostą regułą bez AI.",
    ],
  },
  comparison: {
    title: "ChatGPT czy Claude",
    lead: "Oba modele są bardzo dobre. Wybór zależy od zadania i narzędzi, z których korzysta firma. Często używamy obu.",
    columns: ["ChatGPT (OpenAI)", "Claude (Anthropic)"],
    rows: [
      { label: "Mocne strony", values: ["Szerokie zastosowania, obrazy, analiza danych", "Długie dokumenty, staranne teksty, kod"] },
      { label: "Integracje", values: ["Bardzo dużo gotowych", "Coraz więcej, dobre API"] },
      { label: "Własni asystenci", values: ["GPT", "Projekty"] },
      { label: "Dane w planach firmowych", values: ["Domyślnie nie służą do trenowania", "Domyślnie nie służą do trenowania"] },
    ],
    note: "Porównanie jest uproszczone, a oba modele szybko się zmieniają. Model dobieramy do zadania i testujemy na waszych danych.",
  },
  example: {
    title: "Obsługa zapytań ofertowych przed i po wdrożeniu modeli OpenAI",
    lead: "Przykład firmy produkcyjnej, która dostaje zapytania ofertowe mailem, w różnej formie.",
    rows: [
      { label: "Zapytanie", before: "Handlowiec czyta maila i załączniki.", after: "Model wyciąga produkty, ilości i terminy do formularza." },
      { label: "Kalkulacja", before: "Ręczne szukanie cen w cenniku.", after: "Automatyczne przeliczenie według cennika." },
      { label: "Oferta", before: "Pisana od zera w Wordzie.", after: "Szkic oferty gotowy do sprawdzenia i wysłania." },
      { label: "Czas odpowiedzi", before: "Kilka dni.", after: "Zwykle tego samego dnia." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  costs: {
    title: "Ile kosztuje ChatGPT w firmie",
    paragraphs: [
      "Konta firmowe ChatGPT rozlicza się za użytkownika w miesiącu. Modele używane przez API rozlicza się za ilość przetworzonego tekstu, więc koszt zależy od liczby i długości dokumentów.",
      "Przy automatyzacjach szacujemy koszt API na podstawie waszych realnych wolumenów, zanim cokolwiek zbudujemy. Wycenę wdrożenia przygotowujemy po konsultacji.",
    ],
  },
  faq: [
    { question: "Czy dane z ChatGPT są bezpieczne?", answer: "W planach firmowych i przez API dane domyślnie nie służą do trenowania modeli. Ustalamy też zasady, jakich danych nie wpisywać do czatu, i konfigurujemy uprawnienia." },
    { question: "Czy ChatGPT nauczy się naszej firmy?", answer: "Model nie uczy się sam z rozmów. Budujemy własne GPT lub asystentów, którzy korzystają z waszych dokumentów i procedur jako źródła wiedzy." },
    { question: "Czy ChatGPT może odczytywać faktury?", answer: "Tak. Modele OpenAI dobrze odczytują dane z dokumentów. W automatyzacji dodajemy sprawdzenie wyników i akceptację przez człowieka tam, gdzie to potrzebne." },
    { question: "Czy prowadzicie szkolenia z ChatGPT?", answer: "Tak. Warsztaty na waszych zadaniach: pisanie poleceń, praca z dokumentami, analiza danych i zasady bezpieczeństwa." },
    { question: "Czy da się połączyć ChatGPT z CRM?", answer: "Tak, przez API i platformy automatyzacji. Model może np. streszczać rozmowy, uzupełniać dane klienta i przygotowywać follow-upy." },
    { question: "Czy jesteście partnerem OpenAI?", answer: "Nie. Jesteśmy niezależnymi specjalistami i dobieramy model do zadania, korzystając z różnych dostawców." },
  ],
  relatedServiceSlugs: ["strategia-wdrozenia-ai", "szkolenia-ai-dla-zespolow", "asystent-ai-na-firmowej-wiedzy", "ai-w-obsludze-dokumentow"],
  relatedToolSlugs: ["claude", "n8n", "microsoft-365", "make"],
  relatedArticleSlugs: ["ai-w-codziennej-pracy-zespolu", "wdrozenie-ai-w-malej-i-sredniej-firmie", "porzadek-w-danych-przed-ai-i-automatyzacja"],
};
