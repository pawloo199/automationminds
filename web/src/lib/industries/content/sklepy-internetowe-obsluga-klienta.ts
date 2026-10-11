import type { IndustryPageContent } from "../types";

export const sklepyInternetoweObslugaKlienta: IndustryPageContent = {
  industrySlug: "sklepy-internetowe",
  subSlug: "obsluga-klienta",
  name: "Obsługa klienta sklepu",
  excerpt: "Pytania o status zamówienia, dostawę, płatności i zwroty obsłużone z danymi z platformy sklepu, w mailu i na czacie, z przekazaniem spraw nietypowych do zespołu.",
  metaTitle: "Obsługa klienta w sklepie internetowym: automatyzacja",
  metaDescription:
    "Automatyzujemy obsługę klienta w sklepie internetowym: odpowiedzi o status zamówienia, dostawę i zwroty z danych platformy, czat i mail.",
  primaryKeyword: "obsługa klienta w sklepie internetowym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sklepy internetowe: obsługa klienta",
    title: "Gdzie jest moja paczka? Odpowiedź od razu, bez kopiowania numerów",
    lead: "Większość wiadomości do sklepu to te same pytania: gdzie jest paczka, kiedy dotrze, jak zwrócić towar, czy płatność doszła. Każda odpowiedź wymaga sprawdzenia zamówienia w panelu i skopiowania danych. W sezonie skrzynka rośnie szybciej, niż zespół odpowiada. Automatyzujemy obsługę klienta: system rozpoznaje zamówienie, odpowiada z danymi z platformy, a sprawy nietypowe przekazuje zespołowi z pełnym kontekstem.",
    bullets: [
      "Odpowiedzi o status, dostawę i zwroty z danymi zamówienia",
      "Mail, czat i formularz w jednym miejscu",
      "Sprawy nietypowe do zespołu z kontekstem",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Sklepy internetowe z dużą liczbą wiadomości od klientów" },
    { label: "Co automatyzujemy", value: "Rozpoznanie zamówienia, odpowiedzi, kategorie, przekazanie, raporty" },
    { label: "Narzędzia", value: "Platforma sklepu, poczta, czat, model AI, n8n" },
    { label: "Zasada", value: "Reklamacje i sprawy nietypowe obsługuje człowiek" },
  ],
  symptoms: {
    title: "Kiedy obsługę klienta warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zespół spędza dzień na kopiowaniu statusów.",
    items: [
      "Większość wiadomości dotyczy statusu zamówienia i dostawy.",
      "Każda odpowiedź wymaga sprawdzenia zamówienia w panelu.",
      "W sezonie czas odpowiedzi wydłuża się do kilku dni.",
      "Wiadomości przychodzą mailem, przez czat, formularz i marketplace.",
      "Klienci piszą kilka razy, bo nie dostali odpowiedzi.",
      "Nie wiadomo, o co klienci pytają najczęściej.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja obsługi klienta",
    paragraphs: [
      "Wiadomości z maila, czatu, formularza i wiadomości z marketplace trafiają do jednego miejsca. System rozpoznaje zamówienie po numerze, adresie nadawcy lub danych w treści, a AI określa, czego dotyczy pytanie: status, dostawa, zwrot, płatność, produkt, reklamacja.",
      "Na typowe pytania system odpowiada od razu, korzystając z danych zamówienia: statusu, numeru przesyłki, terminu dostawy, informacji o zwrocie. Odpowiedź jest w tonie sklepu i może być wysyłana automatycznie albo czekać na zatwierdzenie, zależnie od rodzaju sprawy.",
      "Reklamacje, sprawy nietypowe i wiadomości od niezadowolonych klientów trafiają do zespołu z kontekstem: zamówienie, historia kontaktu, kategoria. Raport pokazuje, o co klienci pytają najczęściej, co pomaga poprawiać informacje na stronie i w komunikatach.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja obsługi klienta",
    lead: "Zakres dopasowujemy do kanałów i liczby wiadomości.",
    items: [
      { title: "Wszystkie kanały", body: "Mail, czat, formularz i marketplace w jednym miejscu." },
      { title: "Rozpoznanie zamówienia", body: "Po numerze, adresie lub danych w treści." },
      { title: "Kategorie", body: "Status, dostawa, zwrot, płatność, produkt, reklamacja." },
      { title: "Odpowiedzi z danymi", body: "Status, przesyłka, termin, zwrot z platformy sklepu." },
      { title: "Tryb zatwierdzania", body: "Automatycznie lub do zatwierdzenia, zależnie od sprawy." },
      { title: "Przekazanie do zespołu", body: "Sprawy nietypowe z kontekstem." },
      { title: "Proaktywne informacje", body: "Wiadomość do klienta, gdy przesyłka się opóźnia." },
      { title: "Raport pytań", body: "Najczęstsze tematy i czas odpowiedzi." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wiadomości do odpowiedzi.",
    items: [
      {
        title: "Pytanie o paczkę",
        trigger: "Klient pisze maila bez numeru zamówienia",
        steps: ["Rozpoznanie zamówienia po adresie", "Status i numer przesyłki z platformy", "Odpowiedź w tonie sklepu"],
        result: "Klient dostaje odpowiedź w kilka minut.",
      },
      {
        title: "Niezadowolony klient",
        trigger: "Wiadomość z reklamacją uszkodzonego produktu",
        steps: ["Kategoria: reklamacja", "Przekazanie do zespołu z zamówieniem i historią", "Potwierdzenie przyjęcia dla klienta"],
        result: "Trudna sprawa trafia do człowieka od razu.",
      },
    ],
  },
  example: {
    title: "Obsługa klienta przed i po automatyzacji",
    lead: "Przykład sklepu z kilkuset zamówieniami dziennie w sezonie.",
    rows: [
      { label: "Pytania o status", before: "Ręczne sprawdzanie i kopiowanie.", after: "Odpowiedź z danymi zamówienia." },
      { label: "Kanały", before: "Kilka skrzynek i paneli.", after: "Jedno miejsce." },
      { label: "Sezon", before: "Odpowiedzi po kilku dniach.", after: "Typowe sprawy od razu." },
      { label: "Wiedza", before: "Brak.", after: "Raport najczęstszych pytań." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym sklepie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od pytań o status zamówienia.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Analizujemy wiadomości z ostatnich miesięcy i kanały kontaktu.", fromYou: "Dostęp do skrzynki lub eksport wiadomości." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy kategorie, treści odpowiedzi i zasady przekazania do zespołu.", fromYou: "Akceptacja treści." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go w trybie zatwierdzania.", fromYou: "Osoba z obsługi klienta oceniająca odpowiedzi." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy automatyczne odpowiedzi dla sprawdzonych kategorii.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od odpowiedzi do zatwierdzenia.",
    items: [
      { name: "Szkice odpowiedzi", description: "Dla sklepów, które chcą zachować pełną kontrolę.", includes: ["Wszystkie kanały w jednym miejscu", "Rozpoznanie zamówienia", "Szkice odpowiedzi do zatwierdzenia", "Kategorie"] },
      { name: "Automatyczne odpowiedzi", description: "Dla sklepów z dużą liczbą typowych pytań.", includes: ["Wszystko z wariantu Szkice odpowiedzi", "Automatyczne odpowiedzi dla typowych spraw", "Przekazanie do zespołu", "Raport pytań"] },
      { name: "Asystent na czacie", description: "Dla sklepów, które chcą odpowiadać od razu.", includes: ["Wszystko z wariantu Automatyczne odpowiedzi", "Asystent na czacie", "Proaktywne informacje o opóźnieniach", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba wiadomości i kanałów,",
      "możliwości integracji platformy i marketplace,",
      "zakres automatycznych odpowiedzi,",
      "zakres wykorzystania AI,",
      "czat na stronie.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędna odpowiedź klientowi.", mitigation: "Odpowiedzi korzystają z danych zamówienia, a nowe kategorie zaczynają w trybie zatwierdzania." },
      { risk: "Niezadowolony klient dostanie automat.", mitigation: "Wiadomości z reklamacją i negatywnym tonem trafiają do zespołu." },
      { risk: "Pomyłka w rozpoznaniu zamówienia.", mitigation: "Gdy rozpoznanie jest niepewne, system pyta klienta o numer zamówienia." },
      { risk: "Dane innego klienta w odpowiedzi.", mitigation: "Odpowiedź zawiera tylko dane zamówienia powiązanego z adresem nadawcy." },
    ],
  },
  faq: [
    { question: "Czy klient będzie wiedział, że odpowiada automat?", answer: "Zalecamy informować o tym w stopce odpowiedzi. Klient zawsze może poprosić o kontakt z człowiekiem." },
    { question: "Czy obsłużycie wiadomości z marketplace?", answer: "Tak, jeśli marketplace udostępnia wiadomości przez API lub narzędzie, z którego korzystacie." },
    { question: "Czy asystent może działać na czacie?", answer: "Tak, na czacie na stronie sklepu, z tymi samymi danymi i zasadami." },
    { question: "Co z reklamacjami?", answer: "Trafiają do zespołu. Automatyzacja potwierdza przyjęcie i zbiera informacje, a decyzję podejmuje człowiek." },
    { question: "Czy działa to w kilku językach?", answer: "Tak. Odpowiedzi mogą być w języku klienta." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "agenci-ai"],
  relatedProcessSlugs: ["obsluga-reklamacji", "przyjmowanie-zamowien"],
  relatedToolSlugs: ["chatgpt", "n8n", "google-workspace"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
