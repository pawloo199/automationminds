import type { GuideFaqItem } from "./airtable.types";
import type { ToolContent } from "./tools/types";

export const AGENCY_PATH = "/agencja-ai";

/** Treść strony /agencja-ai: „agencja AI”, „agencja automatyzacji”. */
export const AGENCY_CONTENT = {
  metaTitle: "Agencja AI i automatyzacji procesów | Automation Minds",
  metaDescription:
    "Automation Minds to agencja AI i automatyzacji procesów. Wdrażamy agentów AI, automatyzacje i integracje w firmach z całej Polski, od strategii po opiekę.",
  primaryKeyword: "agencja AI",
  hero: {
    eyebrow: "Agencja AI i automatyzacji",
    title: "Agencja AI i automatyzacji procesów dla firm",
    lead: "Jesteśmy agencją, która wdraża sztuczną inteligencję i automatyzację tam, gdzie przynoszą firmie konkretny efekt: w obsłudze klientów, dokumentach, sprzedaży, finansach i wiedzy firmy. Zaczynamy od procesu, dobieramy narzędzia i zostajemy z wami po wdrożeniu.",
    bullets: [
      "Od strategii i audytu po wdrożenie i opiekę",
      "Agenci AI, automatyzacje i integracje systemów",
      "Dane klientów w UE, rozwiązania zostają w firmie",
    ],
  },
  intro: {
    title: "Czym zajmuje się nasza agencja AI",
    paragraphs: [
      "Automation Minds to agencja AI i automatyzacji procesów z Wrocławia, pracująca zdalnie z firmami z całej Polski. Pomagamy małym i średnim firmom przenieść powtarzalną pracę na systemy: od przepisywania danych i obsługi zapytań, przez dokumenty i raporty, po agentów AI, którzy wykonują zadania w systemach firmy.",
      "Nie sprzedajemy jednego narzędzia. Zaczynamy od procesu i danych, a dopiero potem dobieramy technologię: n8n, Make, Power Automate, Airtable, modele AI od różnych dostawców. Dzięki temu rozwiązanie pasuje do firmy, a nie odwrotnie.",
      "Łączymy trzy kompetencje, które w wielu projektach są rozdzielone: analizę procesów, projektowanie danych i wdrożenia AI. To pozwala nam przeprowadzić firmę przez cały projekt, od pierwszej rozmowy do działającego rozwiązania i jego utrzymania.",
    ],
  },
  differentiators: {
    title: "Co wyróżnia naszą agencję",
    lead: "Zasady, według których pracujemy przy każdym projekcie, niezależnie od jego wielkości.",
    items: [
      { title: "Najpierw proces, potem narzędzie", body: "Zaczynamy od tego, jak firma pracuje, a technologię dobieramy na końcu." },
      { title: "Porządek w danych przed AI", body: "AI i automatyzacje działają dobrze tylko na uporządkowanych danych, dlatego od nich zaczynamy." },
      { title: "Dane w UE", body: "Gdy to potrzebne, automatyzacje działają na serwerze w UE lub w infrastrukturze klienta." },
      { title: "Rozwiązania zostają w firmie", body: "Dokumentacja i przekazanie wiedzy, a nie zamknięte rozwiązanie, którego nikt poza nami nie rozumie." },
      { title: "Agenci w abonamencie", body: "Dla firm, które nie chcą zajmować się technologią, utrzymujemy agentów AI w stałej opłacie." },
      { title: "Człowiek decyduje", body: "AI przygotowuje i podpowiada, a ważne decyzje zatwierdzają ludzie w firmie." },
      { title: "Wycena przed startem", body: "Każdy etap wyceniamy z góry, zanim zaczniemy pracę." },
      { title: "Niezależność od dostawców", body: "Nie jesteśmy związani z jednym producentem, więc dobieramy to, co najlepsze dla klienta." },
    ],
  },
  comparison: {
    title: "Agencja AI, software house, freelancer czy firma doradcza",
    lead: "Każda z tych opcji ma sens w innej sytuacji. Tak wygląda to z perspektywy firmy, która chce wdrożyć AI i automatyzację.",
    columns: ["Agencja AI i automatyzacji", "Software house", "Freelancer", "Firma doradcza"],
    rows: [
      { label: "Analiza procesów i danych", values: ["Tak, na start każdego projektu", "Zwykle po stronie klienta", "Rzadko", "Tak"] },
      { label: "Wdrożenie rozwiązania", values: ["Tak", "Tak, często od zera w kodzie", "Tak, w wąskim zakresie", "Rzadko"] },
      { label: "Czas i koszt startu", values: ["Tygodnie, wycena etapami", "Zwykle dłuższe projekty", "Szybki start", "Zależnie od zakresu"] },
      { label: "Utrzymanie i opieka", values: ["Tak, także w abonamencie", "Zależnie od umowy", "Zależnie od dostępności", "Rzadko"] },
      { label: "Ciągłość przy zmianie osób", values: ["Zespół i dokumentacja", "Zespół", "Zależna od jednej osoby", "Zespół"] },
    ],
    note: "Porównanie jest uproszczone i nie dotyczy wszystkich firm w danej kategorii. Na konsultacji powiemy wprost, jeśli wasz projekt lepiej pasuje do innego wykonawcy.",
  } satisfies ToolContent["comparison"],
  process: {
    title: "Jak pracujemy",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione i co dalej.",
    phases: [
      {
        title: "Konsultacja i przegląd",
        duration: "od 30 minut do kilku dni",
        body: "Rozmawiamy o firmie i procesach, wskazujemy, gdzie AI i automatyzacja dadzą najszybszy efekt.",
        fromYou: "Rozmowa i informacja o narzędziach, których używacie.",
      },
      {
        title: "Projekt i wycena",
        duration: "około tygodnia",
        body: "Opisujemy rozwiązanie, dane, bezpieczeństwo i zakres pierwszego etapu z wyceną przed startem.",
        fromYou: "Akceptacja zakresu i osoba po waszej stronie.",
      },
      {
        title: "Wdrożenie",
        duration: "zwykle kilka tygodni",
        body: "Budujemy rozwiązanie na waszych narzędziach i testujemy je na prawdziwych danych.",
        fromYou: "Dostępy do systemów i ocena wyników testów.",
      },
      {
        title: "Opieka i rozwój",
        duration: "stale",
        body: "Pilnujemy działania, szkolimy zespół i dokładamy kolejne procesy.",
        fromYou: "Uwagi zespołu i nowe potrzeby.",
      },
    ],
  },
  models: {
    title: "Modele współpracy",
    lead: "Dobieramy model do tego, jak firma chce pracować z technologią.",
    items: [
      {
        name: "Projekt",
        description: "Dla firm, które chcą wdrożyć konkretne rozwiązanie i rozwijać je samodzielnie.",
        includes: ["Przegląd i projekt rozwiązania", "Wdrożenie i testy", "Dokumentacja i szkolenie", "Przekazanie zespołowi"],
      },
      {
        name: "Agenci AI w abonamencie",
        description: "Dla firm, które chcą korzystać z AI bez zajmowania się technologią.",
        includes: ["Opłata za wdrożenie i stały abonament", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Drobne zmiany w abonamencie"],
      },
      {
        name: "Stała opieka",
        description: "Dla firm z działającymi automatyzacjami, które potrzebują partnera do ich utrzymania.",
        includes: ["Monitoring i reakcja na błędy", "Aktualizacje i kopie zapasowe", "Pula godzin na rozwój", "Okresowe przeglądy"],
      },
    ],
  },
  toolSlugs: ["n8n", "make", "power-automate", "claude", "chatgpt", "microsoft-365", "google-workspace", "hubspot"],
  articleSlugs: ["wdrozenie-ai-w-malej-i-sredniej-firmie", "ile-kosztuje-automatyzacja-procesow", "jak-wybrac-narzedzie-do-automatyzacji"],
  faq: [
    { question: "Czym zajmuje się agencja AI?", answer: "Agencja AI pomaga firmom wdrożyć sztuczną inteligencję w codziennej pracy: od wyboru zastosowań i przygotowania danych, przez budowę asystentów, agentów i automatyzacji, po szkolenia i utrzymanie. W naszym przypadku łączymy AI z automatyzacją procesów i integracją systemów." },
    { question: "Czym agencja AI różni się od agencji automatyzacji?", answer: "Agencja automatyzacji skupia się na przepływach między systemami, np. integracjach CRM z fakturowaniem. Agencja AI dodaje modele językowe, które czytają dokumenty, odpowiadają na pytania i wykonują zadania. My łączymy jedno i drugie, bo w praktyce najlepsze efekty daje automatyzacja wzbogacona o AI." },
    { question: "Ile kosztuje współpraca z agencją AI?", answer: "To zależy od zakresu: liczby procesów, systemów, użycia AI i modelu współpracy. Pierwszy etap wyceniamy przed startem, po bezpłatnej konsultacji. Agentów AI oferujemy też w modelu opłaty wdrożeniowej i miesięcznego abonamentu." },
    { question: "Jak wybrać agencję AI?", answer: "Warto sprawdzić, czy agencja zaczyna od procesu, a nie od narzędzia, jak dba o dane i ich lokalizację, czy pokazuje przykłady wdrożeń, kto utrzymuje rozwiązanie po wdrożeniu i czy dostaniecie dokumentację. Dobrze też zapytać, kiedy agencja odradza AI." },
    { question: "Czy pracujecie z firmami spoza Wrocławia?", answer: "Tak. Pracujemy zdalnie z firmami z całej Polski. Konsultacje, warsztaty i wdrożenia prowadzimy online, a spotkania na miejscu umawiamy, gdy są potrzebne." },
    { question: "Czy jesteście partnerem OpenAI, n8n lub Make?", answer: "Nie. Jesteśmy niezależną agencją i dobieramy narzędzia i modele do potrzeb klienta, bez zobowiązań wobec konkretnego producenta." },
    { question: "Dla jakich firm pracujecie?", answer: "Głównie dla małych i średnich firm usługowych, handlowych i produkcyjnych. Mamy też duże doświadczenie w kancelariach prawnych, dla których przygotowaliśmy osobną ścieżkę rozwiązań." },
  ] satisfies GuideFaqItem[],
};
