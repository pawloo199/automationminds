import type { ToolSubpageContent } from "../types";

export const n8nAgenciAi: ToolSubpageContent = {
  toolSlug: "n8n",
  slug: "agenci-ai",
  name: "Agenci AI w n8n",
  excerpt: "Agenci AI zbudowani w n8n, utrzymywani przez nas w miesięcznym abonamencie.",
  metaTitle: "Agenci AI w n8n: budowa i utrzymanie w abonamencie",
  metaDescription:
    "Budujemy agentów AI w n8n, którzy obsługują leady, dokumenty i maile. Utrzymujemy ich w abonamencie: monitoring, poprawki i miesięczny raport. Konsultacja 30 min.",
  primaryKeyword: "agent AI n8n",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "n8n i sztuczna inteligencja",
    title: "Agenci AI w n8n: budujemy, uruchamiamy i utrzymujemy",
    lead: "Opisujecie zadanie, a my budujemy agenta AI w n8n, który je wykonuje: odpowiada na zapytania, odczytuje dokumenty, przygotowuje dane. Potem nie zostawiamy was z nim samych. W abonamencie pilnujemy, żeby agent działał, i poprawiamy go, gdy zmieniają się systemy.",
    bullets: [
      "Agent dopasowany do waszego procesu",
      "Monitoring i poprawki w abonamencie",
      "Miesięczny raport z pracy agenta",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Małe i średnie firmy bez własnego zespołu od automatyzacji" },
    { label: "Model", value: "Opłata za wdrożenie i miesięczny abonament za utrzymanie" },
    { label: "Czas uruchomienia", value: "Zwykle kilka tygodni od rozmowy do działającego agenta" },
    { label: "Po waszej stronie", value: "Opis zadania, dostęp do systemów i osoba do kontaktu" },
  ],
  symptoms: {
    title: "Kiedy agent AI w n8n się przyda",
    lead: "Agent ma sens tam, gdzie zespół codziennie wykonuje powtarzalne zadania, które wymagają przeczytania i zrozumienia tekstu.",
    items: [
      "Zapytania od klientów czekają na odpowiedź, bo nikt nie ma czasu ich przeczytać i zakwalifikować.",
      "Ktoś przepisuje dane z faktur, zamówień lub umów do systemu.",
      "Te same pytania klientów i pracowników wracają codziennie, a odpowiedzi są w dokumentach firmy.",
      "Raporty powstają z kilku systemów i trzeba je co tydzień składać ręcznie.",
      "Macie już automatyzację, ale nikt jej nie pilnuje i przestaje działać po zmianach w systemach.",
      "Chcecie wdrożyć AI, ale nie macie osoby, która będzie się nim zajmować na co dzień.",
    ],
  },
  intro: {
    title: "Czym jest agent AI w n8n",
    paragraphs: [
      "Agent AI to przepływ, w którym model językowy, np. GPT lub Claude, nie tylko generuje tekst, ale sam decyduje, jakich narzędzi użyć, żeby wykonać zadanie. Może sprawdzić klienta w CRM, wyszukać informację w bazie wiedzy, zapisać dane w arkuszu albo przygotować odpowiedź do akceptacji.",
      "n8n dobrze nadaje się do budowania takich agentów. Ma gotowe elementy do pracy z modelami AI, pamięcią rozmowy i bazami wiedzy, a jednocześnie łączy się z setkami systemów firmowych. Dzięki temu agent nie działa w oderwaniu od firmy, tylko pracuje na jej danych i w jej narzędziach.",
      "Najtrudniejsze nie jest zbudowanie agenta, tylko jego utrzymanie. Systemy zmieniają się, wygasają klucze dostępu, rosną koszty modeli. Dlatego agentów oferujemy w abonamencie: odpowiadamy za to, żeby działali, a wy płacicie za wykonaną pracę, nie za godziny programisty.",
    ],
  },
  scope: {
    title: "Agenci, których budujemy najczęściej",
    lead: "Zaczynamy od sprawdzonych typów agentów, które dopasowujemy do waszego procesu. Agentów do nietypowych zadań budujemy w wariancie indywidualnym.",
    items: [
      { title: "Obsługa i kwalifikacja leadów", body: "Agent czyta zapytanie, uzupełnia dane firmy, ocenia, czy to dobry klient, zakłada szansę w CRM i przygotowuje odpowiedź." },
      { title: "Faktury i dokumenty", body: "Agent odczytuje faktury, zamówienia i umowy, sprawdza dane i przekazuje je do systemu księgowego lub ERP." },
      { title: "Odpowiedzi z bazy wiedzy", body: "Agent odpowiada na maile i pytania klientów lub pracowników na podstawie dokumentów firmy, z podaniem źródła." },
      { title: "Raporty i synchronizacja danych", body: "Agent zbiera dane z CRM, arkuszy i sklepu, porządkuje je i przygotowuje raport z komentarzem." },
    ],
  },
  example: {
    title: "Obsługa zapytań przed i po wdrożeniu agenta",
    lead: "Przykład firmy usługowej, która dostaje zapytania przez formularz i mail.",
    rows: [
      { label: "Odczyt zapytania", before: "Handlowiec czyta każde zapytanie, często następnego dnia.", after: "Agent czyta zapytanie w kilka chwil po wysłaniu." },
      { label: "Dane klienta", before: "Szukanie firmy w internecie i w CRM.", after: "Agent uzupełnia dane firmy i sprawdza historię w CRM." },
      { label: "Kwalifikacja", before: "Zależna od tego, kto akurat odbierze.", after: "Według ustalonych kryteriów, z uzasadnieniem." },
      { label: "Odpowiedź", before: "Pisana od zera.", after: "Szkic gotowy do sprawdzenia i wysłania." },
      { label: "Utrzymanie", before: "Nikt nie wie, kto odpowiada za automatyzację.", after: "Monitoring i poprawki w abonamencie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  implementation: {
    title: "Jak uruchamiamy agenta",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Przy każdym piszemy, czego potrzebujemy od was.",
    phases: [
      {
        title: "Opis zadania",
        duration: "kilka dni",
        body: "Rozmawiamy o zadaniu, przeglądamy przykłady i ustalamy, co agent ma robić sam, a co zostawia do akceptacji człowieka.",
        fromYou: "Godzina rozmowy i kilkanaście prawdziwych przykładów zadań.",
      },
      {
        title: "Budowa i testy",
        duration: "zwykle 2–4 tygodnie",
        body: "Budujemy agenta w n8n, łączymy go z waszymi systemami i testujemy na prawdziwych przypadkach, porównując wyniki z pracą zespołu.",
        fromYou: "Dostępy do systemów i osoba, która ocenia wyniki testów.",
      },
      {
        title: "Uruchomienie",
        duration: "1–2 tygodnie",
        body: "Agent zaczyna pracować na prawdziwych danych, najpierw z akceptacją człowieka przy każdym kroku, potem samodzielnie tam, gdzie wyniki są pewne.",
        fromYou: "Akceptacja wyników w pierwszych tygodniach.",
      },
      {
        title: "Abonament",
        duration: "stale",
        body: "Monitorujemy działanie, reagujemy na błędy, aktualizujemy połączenia i co miesiąc wysyłamy raport z pracy agenta.",
        fromYou: "Informacja o zmianach w systemach i procesie.",
      },
    ],
  },
  variants: {
    title: "Pakiety abonamentu",
    lead: "Każdy pakiet to opłata za wdrożenie i miesięczny abonament. Abonament obejmuje ustalony limit pracy agenta, a większe zmiany rozliczamy osobno, żeby było jasne, za co płacicie.",
    items: [
      {
        name: "Start",
        description: "Jeden agent do prostego, powtarzalnego zadania.",
        includes: [
          "Jeden agent z gotowego szablonu",
          "Ustalony miesięczny limit operacji",
          "Monitoring i powiadomienia o błędach",
          "Wsparcie mailowe",
        ],
      },
      {
        name: "Biznes",
        description: "Kilku agentów, którzy obsługują ważne procesy firmy.",
        includes: [
          "Do trzech agentów",
          "Agenci z AI pracujący na waszych danych",
          "Monitoring i reakcja w ustalonym czasie",
          "Miesięczny raport z pracy agentów",
          "Drobne zmiany wliczone w abonament",
        ],
      },
      {
        name: "Pro",
        description: "Agenci do nietypowych zadań i większej skali.",
        includes: [
          "Agenci budowani indywidualnie",
          "Wyższe limity i priorytet zgłoszeń",
          "Pula godzin na rozwój agentów",
          "Regularne spotkania o wynikach",
          "Indywidualne warunki umowy",
        ],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy cena",
    lead: "Wycenę wdrożenia i abonamentu przygotowujemy po rozmowie. Na cenę wpływa przede wszystkim:",
    items: [
      "liczba agentów i złożoność ich zadań,",
      "liczba systemów, z którymi agent się łączy,",
      "wolumen pracy, np. liczba dokumentów lub rozmów w miesiącu, bo od niego zależy koszt modeli AI,",
      "oczekiwany czas reakcji na błędy,",
      "miejsce działania agenta: wasza infrastruktura lub środowisko, które utrzymujemy.",
    ],
  },
  risks: {
    title: "Jak dbamy o bezpieczeństwo i przewidywalność",
    items: [
      { risk: "Agent AI się pomyli.", mitigation: "Na starcie każde ważne działanie akceptuje człowiek. Samodzielność agent dostaje tylko tam, gdzie wyniki są sprawdzone, a umowa jasno opisuje zakres odpowiedzialności." },
      { risk: "Koszty modeli AI wzrosną razem z liczbą zadań.", mitigation: "Abonament ma ustalony limit, do prostych kroków używamy tańszych modeli, a koszt pracy agenta monitorujemy na bieżąco." },
      { risk: "Dane firmy trafią w niepowołane ręce.", mitigation: "Serwery w UE, modele w planach, w których dane nie służą do trenowania, umowa powierzenia danych i osobne środowisko dla każdego klienta." },
      { risk: "Uzależnienie od dostawcy.", mitigation: "Przy zakończeniu współpracy możecie otrzymać eksport przepływów i dokumentację na zasadach opisanych w umowie." },
    ],
  },
  faq: [
    { question: "Czym agent AI różni się od zwykłej automatyzacji?", answer: "Zwykła automatyzacja wykonuje zawsze te same kroki. Agent AI rozumie treść, np. maila czy dokumentu, i sam wybiera, jakich narzędzi użyć, żeby wykonać zadanie. Dzięki temu radzi sobie z sytuacjami, których nie da się opisać prostymi regułami." },
    { question: "Czy muszę znać n8n albo mieć własny serwer?", answer: "Nie. Budujemy, uruchamiamy i utrzymujemy agenta po naszej stronie albo w waszej infrastrukturze, jeśli tego potrzebujecie. Wy opisujecie zadanie i korzystacie z wyników." },
    { question: "Ile kosztuje agent AI w abonamencie?", answer: "Cena składa się z opłaty za wdrożenie i miesięcznego abonamentu. Zależy od liczby agentów, systemów i wolumenu pracy. Wycenę przygotowujemy po krótkiej rozmowie o zadaniu." },
    { question: "Co się stanie, jeśli zrezygnuję z abonamentu?", answer: "Zasady zakończenia współpracy opisujemy w umowie, w tym możliwość otrzymania eksportu przepływów i dokumentacji. Nie chcemy, żeby klient zostawał z nami tylko dlatego, że nie ma wyjścia." },
    { question: "Jakich modeli AI używacie?", answer: "Dobieramy model do zadania, najczęściej modele OpenAI lub Anthropic, w planach, w których dane nie służą do trenowania. Do prostych kroków używamy tańszych modeli, żeby koszt pracy agenta był przewidywalny." },
    { question: "Czy agent będzie odpowiadał klientom bez kontroli?", answer: "Tylko jeśli tak ustalimy i wyniki to uzasadniają. Zwykle zaczynamy od szkiców do akceptacji przez człowieka, a samodzielne odpowiedzi włączamy w prostych, powtarzalnych sprawach." },
    { question: "Czy agent może działać na n8n, który już mamy?", answer: "Tak. Jeśli macie własną instalację n8n, możemy zbudować i utrzymywać agenta na niej. Jeśli trzeba ją uporządkować, zajmiemy się tym przy usłudze n8n self-hosted." },
  ],
  relatedServiceSlugs: ["agenci-ai", "asystent-ai-na-firmowej-wiedzy", "ai-w-obsludze-dokumentow", "automatyzacja-w-obsludze-klienta"],
  relatedArticleSlugs: ["wdrozenie-ai-w-malej-i-sredniej-firmie", "porzadek-w-danych-przed-ai-i-automatyzacja", "automatyzacja-obslugi-leadow-sprzedazowych"],
};
