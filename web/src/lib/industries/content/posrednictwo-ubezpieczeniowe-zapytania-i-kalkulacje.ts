import type { IndustryPageContent } from "../types";

export const posrednictwoUbezpieczenioweZapytaniaIKalkulacje: IndustryPageContent = {
  industrySlug: "posrednictwo-ubezpieczeniowe",
  subSlug: "zapytania-i-kalkulacje",
  name: "Zapytania i dane do kalkulacji",
  excerpt: "Zapytania ze strony, telefonu i poczty w jednym miejscu, z kompletem danych do kalkulacji, przydziałem do agenta i szybką odpowiedzią dla klienta.",
  metaTitle: "Obsługa zapytań o ubezpieczenie: dane do kalkulacji",
  metaDescription:
    "Automatyzujemy obsługę zapytań o ubezpieczenie: formularze według rodzaju polisy, lista brakujących danych, przydział do agenta i szybka odpowiedź.",
  primaryKeyword: "obsługa zapytań o ubezpieczenie",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Pośrednictwo ubezpieczeniowe: zapytania",
    title: "Zapytania o ubezpieczenie z kompletem danych od pierwszego kontaktu",
    lead: "Klient pyta o ubezpieczenie domu, ale nie podaje metrażu, roku budowy ani sumy. Agent oddzwania, dopytuje, a klient w tym czasie dostaje ofertę od kogoś innego. Automatyzujemy obsługę zapytań: klient wypełnia formularz dopasowany do rodzaju ubezpieczenia, brakujące dane są wskazane od razu, a zapytanie trafia do właściwego agenta z kompletem informacji.",
    bullets: [
      "Formularze dopasowane do rodzaju ubezpieczenia",
      "Lista brakujących danych wysłana od razu",
      "Przydział do agenta i termin kontaktu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje ubezpieczeniowe, multiagencje i brokerzy pozyskujący klientów online" },
    { label: "Co automatyzujemy", value: "Formularze, porządkowanie zapytań, przydział, odpowiedź, statusy" },
    { label: "Narzędzia", value: "Formularz, CRM, poczta, model AI, n8n" },
    { label: "Zasada", value: "Ofertę i rekomendację przygotowuje agent" },
  ],
  symptoms: {
    title: "Kiedy zapytania warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, agencja traci część klientów na etapie zapytania.",
    items: [
      "Zapytania przychodzą przez stronę, telefon, pocztę i media społecznościowe.",
      "W zapytaniu brakuje danych potrzebnych do kalkulacji.",
      "Nie wiadomo, kto zajmuje się danym zapytaniem.",
      "Klient czeka na odpowiedź dłużej niż dzień.",
      "Dane klienta wpisuje się kilka razy do różnych kalkulatorów.",
      "Nie wiadomo, ile zapytań kończy się sprzedażą.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zapytań",
    paragraphs: [
      "Klient wybiera rodzaj ubezpieczenia i wypełnia formularz z pytaniami potrzebnymi do kalkulacji: inne dla samochodu, inne dla domu, inne dla firmy. Zapytania z poczty i wiadomości trafiają do tego samego miejsca, a AI porządkuje ich treść według tych samych pól.",
      "System sprawdza, czy dane są kompletne, i od razu wysyła klientowi listę braków. Zapytanie trafia do agenta według rodzaju ubezpieczenia, regionu lub kolejki, a klient dostaje potwierdzenie z informacją, kiedy agent się odezwie.",
      "Agent ma dane w jednym miejscu, gotowe do przeniesienia do kalkulatorów towarzystw. Każde zapytanie ma status, więc właściciel agencji widzi, ile zapytań przychodzi, z jakich źródeł i ile z nich kończy się polisą.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zapytań",
    lead: "Zakres dopasowujemy do rodzajów ubezpieczeń i kanałów pozyskania.",
    items: [
      { title: "Formularze", body: "Pytania dopasowane do rodzaju ubezpieczenia." },
      { title: "Wszystkie kanały", body: "Strona, poczta i wiadomości w jednym miejscu." },
      { title: "Porządkowanie z AI", body: "Dane z treści wiadomości przypisane do pól." },
      { title: "Lista braków", body: "Wysyłana klientowi od razu, z przypomnieniem." },
      { title: "Przydział", body: "Według rodzaju ubezpieczenia, regionu lub kolejki." },
      { title: "Potwierdzenie", body: "Klient wie, kiedy agent się odezwie." },
      { title: "Statusy", body: "Nowe, w kalkulacji, oferta wysłana, polisa, utracone." },
      { title: "Raport", body: "Zapytania według źródeł, agentów i wyników." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapytania do kontaktu agenta.",
    items: [
      {
        title: "Zapytanie ze strony",
        trigger: "Klient wypełnia formularz ubezpieczenia domu",
        steps: ["Sprawdzenie kompletności danych", "Lista braków wysłana klientowi", "Przydział do agenta z terminem kontaktu"],
        result: "Agent dostaje komplet danych, a klient wie, co dalej.",
      },
      {
        title: "Zapytanie mailem",
        trigger: "Klient pisze wiadomość z pytaniem o OC firmy",
        steps: ["AI przypisuje dane z treści do pól", "Pytania o brakujące dane", "Zapytanie w CRM u właściwego agenta"],
        result: "Wiadomość nie czeka w skrzynce, a dane są uporządkowane.",
      },
    ],
  },
  example: {
    title: "Zapytania przed i po automatyzacji",
    lead: "Przykład agencji pozyskującej klientów przez stronę i polecenia.",
    rows: [
      { label: "Kanały", before: "Kilka skrzynek i telefony.", after: "Jedno miejsce." },
      { label: "Dane", before: "Dopytywanie telefonicznie.", after: "Lista braków od razu." },
      { label: "Przydział", before: "Kto pierwszy zauważy.", after: "Według zasad agencji." },
      { label: "Wyniki", before: "Nieznane.", after: "Raport według źródeł." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od najczęstszych rodzajów ubezpieczeń.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy kanały zapytań i dane potrzebne do kalkulacji.", fromYou: "Lista danych dla głównych produktów." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularze, zasady przydziału i treści wiadomości.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy formularze i przepływy, testujemy je na nowych zapytaniach.", fromYou: "Agent oceniający zapytania." },
      { title: "Start i opieka", duration: "stale", body: "Dokładamy kolejne rodzaje ubezpieczeń i rozwijamy raporty.", fromYou: "Uwagi agentów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od formularzy dla dwóch lub trzech produktów.",
    items: [
      { name: "Formularze", description: "Dla agencji, które chcą dostawać komplet danych.", includes: ["Formularze według produktów", "Lista braków", "Potwierdzenie dla klienta", "Zapytania w CRM"] },
      { name: "Wszystkie kanały", description: "Dla agencji z zapytaniami z wielu źródeł.", includes: ["Wszystko z wariantu Formularze", "Poczta i wiadomości", "Porządkowanie z AI", "Przydział do agentów"] },
      { name: "Pełna kontrola", description: "Dla agencji, które chcą mierzyć sprzedaż.", includes: ["Wszystko z wariantu Wszystkie kanały", "Statusy zapytań", "Raport według źródeł", "Przypomnienia dla agentów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba rodzajów ubezpieczeń,",
      "liczba kanałów,",
      "integracja z CRM,",
      "zakres wykorzystania AI,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI źle przypisze dane z wiadomości.", mitigation: "Agent widzi treść oryginału obok uporządkowanych danych." },
      { risk: "Klient poda dane o zdrowiu w formularzu.", mitigation: "Formularze nie pytają o zdrowie, a takie dane nie trafiają do AI." },
      { risk: "Zapytanie trafi do niewłaściwego agenta.", mitigation: "Zasady przydziału są proste do zmiany, a agent może przekazać zapytanie." },
      { risk: "Klient poczuje się obsłużony przez automat.", mitigation: "Automatyczne jest tylko potwierdzenie i lista braków. Rozmowę prowadzi agent." },
    ],
  },
  faq: [
    { question: "Czy klient dostanie kalkulację automatycznie?", answer: "Nie. Automatyzujemy zebranie danych. Kalkulację w systemach towarzystw i ofertę przygotowuje agent." },
    { question: "Czy formularz można osadzić na naszej stronie?", answer: "Tak, formularze działają na stronie agencji albo pod linkiem, np. w wiadomości." },
    { question: "Czy obsłużycie zapytania z telefonu?", answer: "Agent może wpisać je do tego samego formularza, a dalsze kroki działają tak samo." },
    { question: "Czy przeniesiecie dane do kalkulatorów towarzystw?", answer: "Tylko tam, gdzie towarzystwo na to pozwala. W pozostałych przypadkach agent ma dane w jednym miejscu, gotowe do przepisania." },
    { question: "Czy zobaczymy, skąd przychodzą klienci?", answer: "Tak. Raport pokazuje zapytania i polisy według źródeł." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "ofertowanie"],
  relatedToolSlugs: ["n8n", "hubspot", "chatgpt"],
  relatedArticleSlugs: ["porownanie-ofert-ubezpieczen-dla-klienta", "co-zautomatyzowac-w-agencji-ubezpieczeniowej", "automatyzacja-obslugi-leadow-sprzedazowych"],
};
