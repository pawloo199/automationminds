import type { ToolSubpageContent } from "../types";

export const n8nSzkolenie: ToolSubpageContent = {
  toolSlug: "n8n",
  slug: "szkolenie",
  name: "Szkolenie n8n",
  excerpt: "Praktyczne szkolenie z n8n dla zespołów, na waszych procesach i systemach.",
  metaTitle: "Szkolenie n8n dla firm: kurs na waszych procesach",
  metaDescription:
    "Szkolenie n8n dla zespołów: budowa przepływów, integracje przez API, obsługa błędów i agenci AI. Warsztaty online lub na miejscu, na przykładach z waszej firmy.",
  primaryKeyword: "szkolenie n8n",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Szkolenia n8n",
    title: "Szkolenie n8n dla firm: od pierwszego przepływu do agentów AI",
    lead: "Uczymy zespoły budować w n8n przepływy, które działają w prawdziwej firmie: z obsługą błędów, porządkiem i bezpieczeństwem. Zamiast ogólnych przykładów pracujemy na waszych procesach, więc po szkoleniu zostajecie z działającymi automatyzacjami.",
    bullets: [
      "Warsztaty na waszych procesach i systemach",
      "Od podstaw do agentów AI",
      "Online lub na miejscu, dla małych grup",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Zespoły IT, operacji, finansów i marketingu, które chcą samodzielnie budować automatyzacje" },
    { label: "Forma", value: "Warsztaty online lub na miejscu, w małych grupach" },
    { label: "Poziomy", value: "Podstawy, poziom zaawansowany, agenci AI" },
    { label: "Po waszej stronie", value: "Dostęp do n8n i 2–3 procesy do zautomatyzowania" },
  ],
  symptoms: {
    title: "Kiedy szkolenie z n8n ma sens",
    lead: "Szkolenie najlepiej sprawdza się, gdy firma chce budować automatyzacje sama, a nie tylko z nich korzystać.",
    items: [
      "Macie n8n, ale korzysta z niego jedna osoba i wszystko od niej zależy.",
      "Zespół zaczął budować przepływy z poradników, ale przy większych procesach pojawiają się błędy.",
      "Chcecie rozwijać automatyzacje we własnym zakresie po wdrożeniu przez zewnętrzną firmę.",
      "Planujecie budować agentów AI i potrzebujecie zrozumieć, jak robić to bezpiecznie.",
      "Dział IT ma utrzymywać n8n na własnym serwerze i potrzebuje dobrych praktyk.",
      "Przenosicie automatyzacje z Make lub Zapiera i zespół musi poznać nowe narzędzie.",
    ],
  },
  intro: {
    title: "Jak wygląda nasze szkolenie z n8n",
    paragraphs: [
      "Podstaw n8n można się nauczyć z dokumentacji i filmów. Trudniejsze jest to, czego poradniki zwykle nie pokazują: jak projektować przepływy, żeby nie psuły się po miesiącu, jak obsługiwać błędy, jak porządkować dziesiątki przepływów i jak bezpiecznie pracować z danymi firmy.",
      "Dlatego nasze szkolenia są warsztatami. Przed szkoleniem wybieramy z wami 2–3 procesy, które chcecie zautomatyzować, i to na nich pracujemy. Uczestnicy budują przepływy sami, a my pokazujemy, jak zrobić to dobrze, i odpowiadamy na pytania na bieżąco.",
      "Szkolenie prowadzą osoby, które wdrażają n8n w firmach na co dzień. Opowiadamy o tym, co sprawdza się w praktyce, i o błędach, które widzimy najczęściej.",
    ],
  },
  scope: {
    title: "Czego uczymy na szkoleniu n8n",
    lead: "Program dobieramy do poziomu zespołu i jego celów. Najczęściej obejmuje te obszary.",
    items: [
      { title: "Podstawy n8n", body: "Przepływy, węzły, wyzwalacze, dane w przepływie i wyrażenia." },
      { title: "Integracje i API", body: "Gotowe węzły, zapytania HTTP, uwierzytelnianie, webhooki i stronicowanie wyników." },
      { title: "Logika i dane", body: "Warunki, pętle, łączenie danych z kilku źródeł i węzeł z kodem w JavaScript." },
      { title: "Obsługa błędów", body: "Przepływy obsługujące błędy, ponawianie, powiadomienia i testowanie zmian." },
      { title: "Porządek i utrzymanie", body: "Nazewnictwo, podprzepływy, dokumentacja i zasady pracy w zespole." },
      { title: "AI w przepływach", body: "Modele językowe do odczytu dokumentów, klasyfikacji i streszczeń." },
      { title: "Agenci AI", body: "Agent, narzędzia, pamięć i baza wiedzy, z naciskiem na kontrolę wyników i kosztów." },
      { title: "Self-hosting", body: "Dla zespołów IT: instalacja, baza, kopie, aktualizacje i bezpieczeństwo." },
    ],
  },
  implementation: {
    title: "Jak przygotowujemy i prowadzimy szkolenie",
    lead: "Cztery kroki, od rozmowy do wsparcia po szkoleniu. Przy każdym piszemy, czego potrzebujemy od was.",
    phases: [
      {
        title: "Rozmowa o celach",
        duration: "30 minut",
        body: "Ustalamy, kto weźmie udział, jaki ma poziom i co zespół ma umieć po szkoleniu.",
        fromYou: "Informacja o uczestnikach i ich doświadczeniu.",
      },
      {
        title: "Przygotowanie programu",
        duration: "kilka dni",
        body: "Wybieramy z wami procesy do warsztatu, przygotowujemy program i środowisko ćwiczeniowe.",
        fromYou: "Opis 2–3 procesów i, jeśli to możliwe, dostęp testowy do systemów.",
      },
      {
        title: "Warsztaty",
        duration: "zwykle 1–3 dni",
        body: "Uczestnicy budują przepływy na waszych procesach. Część teorii ograniczamy do minimum, resztę wyjaśniamy przy pracy.",
        fromYou: "Udział zespołu i komputery z dostępem do n8n.",
      },
      {
        title: "Wsparcie po szkoleniu",
        duration: "ustalony okres",
        body: "Odpowiadamy na pytania, przeglądamy przepływy zbudowane po szkoleniu i podpowiadamy, co poprawić.",
        fromYou: "Pytania i przepływy do przeglądu.",
      },
    ],
  },
  variants: {
    title: "Rodzaje szkoleń",
    lead: "Poziomy można łączyć, np. podstawy i AI w jednym cyklu warsztatów.",
    items: [
      {
        name: "Podstawy n8n",
        description: "Dla osób, które zaczynają pracę z n8n.",
        includes: [
          "Budowa przepływów od zera",
          "Najpopularniejsze integracje i webhooki",
          "Podstawy obsługi błędów",
          "Pierwszy przepływ na waszym procesie",
        ],
      },
      {
        name: "n8n zaawansowane",
        description: "Dla zespołów, które budują już przepływy i chcą robić to lepiej.",
        includes: [
          "Integracje przez API i węzeł z kodem",
          "Obsługa błędów i testowanie zmian",
          "Porządek w dużej liczbie przepływów",
          "Przegląd waszych istniejących przepływów",
          "Dobre praktyki utrzymania i self-hostingu",
        ],
      },
      {
        name: "Agenci AI w n8n",
        description: "Dla zespołów, które chcą budować agentów AI na danych firmy.",
        includes: [
          "Modele językowe w przepływach",
          "Agent, narzędzia i pamięć",
          "Baza wiedzy na dokumentach firmy",
          "Kontrola jakości wyników i kosztów",
          "Agent zbudowany na waszym przypadku",
        ],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy cena szkolenia",
    lead: "Wycenę przygotowujemy po rozmowie o celach. Na cenę wpływa przede wszystkim:",
    items: [
      "liczba dni warsztatów i liczba uczestników,",
      "poziom i zakres programu,",
      "przygotowanie ćwiczeń na waszych procesach i systemach,",
      "forma: online czy na miejscu, z kosztem dojazdu,",
      "długość wsparcia po szkoleniu.",
    ],
  },
  risks: {
    title: "Jak dbamy o to, żeby szkolenie przyniosło efekt",
    items: [
      { risk: "Uczestnicy zapomną wszystko po tygodniu.", mitigation: "Pracujemy na waszych procesach, więc po szkoleniu zostają działające przepływy, a nie tylko notatki. Wsparcie po szkoleniu pomaga przejść od ćwiczeń do pracy." },
      { risk: "Grupa ma bardzo różny poziom.", mitigation: "Poziom ustalamy przed szkoleniem, a przy dużych różnicach proponujemy podział na grupy lub osobne moduły." },
      { risk: "Dane firmy trafią do środowiska szkoleniowego.", mitigation: "Ćwiczymy na danych testowych lub zanonimizowanych, a dostępy do systemów produkcyjnych ograniczamy do minimum." },
      { risk: "Zespół zbuduje przepływy, których nikt nie będzie utrzymywał.", mitigation: "Na szkoleniu ustalamy zasady pracy: nazwy, dokumentację, właścicieli przepływów i sposób wprowadzania zmian." },
    ],
  },
  faq: [
    { question: "Czy szkolenie n8n jest dla osób bez doświadczenia technicznego?", answer: "Podstawy tak, jeśli uczestnicy dobrze znają procesy, które chcą automatyzować. Poziom zaawansowany i agenci AI wymagają swobody w pracy z danymi i podstawowej znajomości API." },
    { question: "Ile osób może wziąć udział?", answer: "Najlepiej pracuje się w małych grupach, w których każdy buduje przepływy sam. Przy większych zespołach dzielimy uczestników na grupy." },
    { question: "Czy szkolenie może odbyć się online?", answer: "Tak. Szkolenia online prowadzimy na żywo, z udostępnianiem ekranu i pracą uczestników we własnym środowisku n8n." },
    { question: "Na jakiej wersji n8n pracujemy?", answer: "Na tej, której używacie: n8n Cloud lub wersji na własnym serwerze. Jeśli nie macie jeszcze n8n, przygotujemy środowisko szkoleniowe." },
    { question: "Czy po szkoleniu możemy liczyć na pomoc?", answer: "Tak. Po szkoleniu jest okres wsparcia, w którym odpowiadamy na pytania i przeglądamy przepływy. Można też przejść do stałej opieki." },
    { question: "Czy szkolimy też z innych narzędzi?", answer: "Tak, prowadzimy też szkolenia z AI dla zespołów i z innych narzędzi do automatyzacji, takich jak Make czy Power Automate." },
  ],
  relatedServiceSlugs: ["szkolenia-ai-dla-zespolow", "agenci-ai", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedArticleSlugs: ["n8n-co-to-jest", "ai-w-codziennej-pracy-zespolu", "bledy-przy-pierwszym-wdrozeniu-automatyzacji"],
};
