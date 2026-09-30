import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "strategia-wdrozenia-ai",
  metaTitle: "Wdrożenie AI w firmie: strategia i plan | Automation Minds",
  metaDescription:
    "Pomagamy wybrać zastosowania AI z realnym zwrotem, przygotować dane i zespół oraz przeprowadzić wdrożenie krok po kroku. Dla małych i średnich firm.",
  primaryKeyword: "wdrożenie AI w firmie",
  secondaryKeywords: [
    "strategia AI",
    "doradztwo AI",
    "sztuczna inteligencja w firmie",
    "AI dla MŚP",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Doradztwo i strategia",
    title: "Wdrożenie AI w firmie, które zaczyna się od problemu, a nie od narzędzia",
    lead: "Pomagamy wybrać dwa, trzy zastosowania AI, które faktycznie odciążą zespół, i przeprowadzić je od pilotażu do codziennej pracy. Bez kupowania licencji, z których nikt nie korzysta.",
    outcomes: [
      "Lista zastosowań AI ocenionych pod kątem zwrotu i ryzyka",
      "Pilotaż na waszych danych, zanim zapadnie decyzja o skali",
      "Zasady korzystania z AI, które zespół rozumie i stosuje",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80",
    imageAlt: "Spotkanie zespołu przy laptopie podczas planowania",
  },
  problems: {
    title: "Z czym przychodzą firmy",
    lead: "O AI mówi się wszędzie. Trudniej odpowiedzieć na pytanie, co konkretnie zrobić w swojej firmie w przyszłym miesiącu.",
    items: [
      {
        title: "Zespół używa AI na własną rękę",
        body: "Każdy korzysta z innego czatu, na prywatnych kontach. Firmowe dane trafiają w miejsca, nad którymi nikt nie ma kontroli.",
      },
      {
        title: "Nie wiadomo, od czego zacząć",
        body: "Pomysłów jest dużo: chatbot, raporty, dokumenty. Brakuje sposobu, żeby wybrać te, które się opłacą.",
      },
      {
        title: "Pilotaże kończą się na demonstracji",
        body: "Coś zadziałało na prezentacji, ale nie przeszło do codziennej pracy. Po miesiącu nikt już z tego nie korzysta.",
      },
      {
        title: "Obawy o dane i RODO",
        body: "Zarząd nie wie, jakie dane wolno przekazywać do narzędzi AI i jak zabezpieczyć informacje klientów.",
      },
      {
        title: "Dane nie są gotowe",
        body: "Dokumenty leżą w różnych folderach, w różnych wersjach. AI nie pomoże, jeśli nie ma z czego korzystać.",
      },
      {
        title: "Trudno policzyć efekt",
        body: "Nie wiadomo, jak zmierzyć, czy AI oszczędza czas, więc trudno uzasadnić dalsze wydatki.",
      },
    ],
  },
  scope: {
    title: "Co obejmuje współpraca",
    lead: "Możemy poprowadzić cały proces albo pomóc w wybranym etapie, na przykład w wyborze zastosowań i pilotażu.",
    items: [
      {
        title: "Przegląd procesów pod kątem AI",
        body: "Sprawdzamy, w których zadaniach AI może pomóc: dokumenty, odpowiedzi na pytania, analiza tekstu, podsumowania.",
      },
      {
        title: "Ocena zastosowań",
        body: "Każdy pomysł oceniamy pod kątem czasu do odzyskania, kosztu, ryzyka błędu i gotowości danych.",
      },
      {
        title: "Wybór narzędzi",
        body: "Dobieramy narzędzia do zadania: gotowe usługi, modele przez API albo rozwiązanie budowane pod proces.",
      },
      {
        title: "Przygotowanie danych",
        body: "Porządkujemy dokumenty i dane, na których AI ma pracować, i ustalamy, jak utrzymać je aktualne.",
      },
      {
        title: "Pilotaż",
        body: "Uruchamiamy wybrane zastosowanie na małej grupie i prawdziwych danych, z mierzeniem efektu.",
      },
      {
        title: "Polityka korzystania z AI",
        body: "Spisujemy proste zasady: jakie narzędzia są dozwolone, jakie dane wolno przekazywać i kto sprawdza wyniki.",
      },
      {
        title: "Szkolenie zespołu",
        body: "Pokazujemy, jak korzystać z wdrożonych rozwiązań i jak rozpoznać, kiedy AI się myli.",
      },
      {
        title: "Wdrożenie i rozwój",
        body: "Po udanym pilotażu rozszerzamy rozwiązanie na kolejne osoby i procesy.",
      },
    ],
  },
  example: {
    title: "Jak zmienia się podejście do AI w firmie",
    lead: "Przykład firmy, w której pracownicy korzystali z AI na własną rękę. Tak wyglądała sytuacja przed uporządkowaniem i po nim.",
    rows: [
      {
        label: "Narzędzia",
        before: "Każdy używa innego czatu na prywatnym koncie.",
        after: "Firmowe konta w wybranym narzędziu z ustawieniami ochrony danych.",
      },
      {
        label: "Dane",
        before: "Umowy i dane klientów wklejane do czatu bez zastanowienia.",
        after: "Jasne zasady, co wolno przekazywać, a co zostaje w firmowych systemach.",
      },
      {
        label: "Zastosowania",
        before: "Przypadkowe próby, bez mierzenia efektu.",
        after: "Dwa wybrane zastosowania z pilotażem i porównaniem czasu pracy.",
      },
      {
        label: "Wiedza firmy",
        before: "Dokumenty w kilku folderach, w różnych wersjach.",
        after: "Uporządkowana baza wiedzy, z której korzysta asystent AI.",
      },
      {
        label: "Decyzje zarządu",
        before: "Kolejne wydatki na licencje bez uzasadnienia.",
        after: "Plan rozwoju oparty na wynikach pilotażu.",
      },
    ],
    note: "Zastosowania AI zawsze dobieramy do firmy. Zdarza się, że najlepszym pierwszym krokiem jest zwykła automatyzacja, a AI przychodzi później.",
  },
  process: {
    title: "Jak prowadzimy wdrożenie AI",
    lead: "Pracujemy etapami, żeby decyzje o większych wydatkach zapadały na podstawie wyników, a nie obietnic.",
    steps: [
      {
        title: "Rozmowa i przegląd",
        body: "Poznajemy procesy, narzędzia i obawy zespołu. Zbieramy pomysły na zastosowania AI.",
      },
      {
        title: "Wybór zastosowań",
        body: "Oceniamy pomysły i wybieramy jeden lub dwa na pilotaż. Ustalamy, jak zmierzymy efekt.",
      },
      {
        title: "Przygotowanie",
        body: "Porządkujemy dane, wybieramy narzędzia i ustalamy zasady bezpieczeństwa.",
      },
      {
        title: "Pilotaż",
        body: "Rozwiązanie działa na małej grupie przez kilka tygodni. Zbieramy wyniki i uwagi.",
      },
      {
        title: "Decyzja i skalowanie",
        body: "Na podstawie wyników decydujemy, co rozszerzyć, co poprawić, a z czego zrezygnować.",
      },
      {
        title: "Opieka",
        body: "Pilnujemy jakości odpowiedzi, aktualizujemy dane i rozwijamy rozwiązanie o kolejne zadania.",
      },
    ],
  },
  tools: {
    title: "Technologie, z którymi pracujemy",
    lead: "Nie jesteśmy związani z jednym dostawcą. Wybieramy narzędzie pod zadanie, koszt i wymagania dotyczące danych.",
    items: [
      { name: "ChatGPT, OpenAI API", note: "asystenci, analiza tekstu, generowanie treści" },
      { name: "Claude, Anthropic API", note: "praca na długich dokumentach" },
      { name: "Microsoft Copilot", note: "AI w środowisku Microsoft 365" },
      { name: "Gemini", note: "AI w Google Workspace" },
      { name: "Make, n8n", note: "łączenie AI z procesami i systemami" },
      { name: "Airtable, Notion", note: "bazy wiedzy i dane dla AI" },
    ],
  },
  faq: [
    {
      question: "Od czego zacząć wdrożenie AI w małej firmie?",
      answer:
        "Od jednego powtarzalnego zadania, które zabiera dużo czasu i opiera się na tekście, na przykład odpowiadanie na podobne pytania albo odczytywanie dokumentów. Takie zadanie łatwo przetestować i zmierzyć.",
    },
    {
      question: "Czy nasze dane będą bezpieczne?",
      answer:
        "Dobieramy narzędzia i ustawienia tak, żeby dane firmowe nie służyły do trenowania modeli, a dostęp miały tylko wybrane osoby. Spisujemy też zasady, jakich danych nie przekazywać do AI.",
    },
    {
      question: "Czy AI zastąpi pracowników?",
      answer:
        "W małych i średnich firmach AI najczęściej przejmuje żmudne części pracy: przepisywanie, wyszukiwanie, pierwsze wersje tekstów. Decyzje i kontakt z klientem zostają przy ludziach.",
    },
    {
      question: "Ile kosztuje wdrożenie AI?",
      answer:
        "Zależy od zastosowania i narzędzi. Dlatego zaczynamy od pilotażu o jasno określonym zakresie i koszcie. Dopiero jego wynik pokazuje, czy warto iść dalej.",
    },
    {
      question: "Co jeśli pilotaż się nie sprawdzi?",
      answer:
        "Wtedy wiecie to po kilku tygodniach i niewielkim koszcie, a nie po rocznym projekcie. Często wynik pilotażu wskazuje, co zmienić, żeby rozwiązanie zadziałało.",
    },
  ],
  relatedArticleSlugs: [
    "wdrozenie-ai-w-malej-i-sredniej-firmie",
    "ai-w-codziennej-pracy-zespolu",
    "porzadek-w-danych-przed-ai-i-automatyzacja",
    "rodo-a-automatyzacja-procesow",
  ],
  relatedServiceSlugs: [
    "asystent-ai-na-firmowej-wiedzy",
    "przygotowanie-danych-pod-ai",
  ],
  contact: {
    title: "Porozmawiajmy o AI w twojej firmie",
    body: "Opowiedz, w jakich zadaniach zespół traci najwięcej czasu. Podpowiemy, gdzie AI ma sens, a gdzie lepiej sprawdzi się zwykła automatyzacja.",
    highlights: [
      "Rozmowa bez żargonu, z przykładami z małych i średnich firm",
      "Wstępna ocena, które zastosowania AI warto przetestować",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
