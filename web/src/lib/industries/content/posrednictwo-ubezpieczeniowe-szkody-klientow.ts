import type { IndustryPageContent } from "../types";

export const posrednictwoUbezpieczenioweSzkodyKlientow: IndustryPageContent = {
  industrySlug: "posrednictwo-ubezpieczeniowe",
  subSlug: "szkody-klientow",
  name: "Wsparcie klientów przy szkodach",
  excerpt: "Zgłoszenie szkody w jednym miejscu, lista dokumentów dla klienta, terminy i statusy, żeby klient wiedział, co dalej, a agent nie odbierał tych samych telefonów.",
  metaTitle: "Obsługa szkód klientów w agencji: dokumenty i statusy",
  metaDescription:
    "Automatyzujemy wsparcie klientów przy szkodach: zgłoszenie w jednym miejscu, lista dokumentów, terminy, statusy dla klienta i rejestr szkód agencji.",
  primaryKeyword: "obsługa szkód klientów agencji",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Pośrednictwo ubezpieczeniowe: szkody",
    title: "Klient przy szkodzie wie, co dalej, a agent ma wszystko w jednym miejscu",
    lead: "Szkoda to moment, w którym klient ocenia agencję. Nie wie, jakie dokumenty przygotować, do kogo dzwonić i ile to potrwa, więc dzwoni do agenta. Agent nie prowadzi likwidacji, ale pomaga klientowi przez nią przejść. Automatyzujemy to wsparcie: klient zgłasza szkodę w jednym miejscu, dostaje listę dokumentów i informacje o kolejnych krokach, a agent widzi wszystkie sprawy w rejestrze.",
    bullets: [
      "Zgłoszenie szkody przez formularz lub wiadomość",
      "Lista dokumentów dla klienta",
      "Rejestr szkód i przypomnienia dla agenta",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje ubezpieczeniowe i brokerzy wspierający klientów przy szkodach" },
    { label: "Co automatyzujemy", value: "Zgłoszenie, lista dokumentów, statusy, przypomnienia, rejestr" },
    { label: "Narzędzia", value: "Formularz, baza szkód, poczta, SMS, model AI, n8n" },
    { label: "Zasada", value: "Likwidację prowadzi towarzystwo, agent wspiera klienta" },
  ],
  symptoms: {
    title: "Kiedy wsparcie przy szkodach warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, szkody zabierają agentom dużo czasu.",
    items: [
      "Klienci dzwonią z pytaniem, co zrobić po zdarzeniu.",
      "Każdemu klientowi trzeba osobno tłumaczyć, jakie dokumenty przygotować.",
      "Nie wiadomo bez sprawdzania, które szkody klientów są w toku.",
      "Klient pyta o status, a agent musi sprawdzić u towarzystwa.",
      "Informacje o szkodach są w skrzynkach agentów.",
      "Historia szkód klienta nie jest widoczna przy odnowieniu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja wsparcia przy szkodach",
    paragraphs: [
      "Klient zgłasza szkodę przez formularz lub wiadomość: rodzaj zdarzenia, datę, opis i zdjęcia. Na podstawie rodzaju szkody i polisy dostaje listę dokumentów do przygotowania i informację, jak zgłosić szkodę w towarzystwie, jeśli robi to sam.",
      "Sprawa trafia do rejestru szkód agencji, przypisana do agenta. AI może przygotować listę dokumentów na podstawie opisu zdarzenia i streścić korespondencję z towarzystwem. Agent dostaje przypomnienia o terminach, a klient informacje o kolejnych etapach.",
      "Historia szkód jest przy kliencie i polisie, więc agent ma ją przed oczami przy odnowieniu. Właściciel agencji widzi, ile szkód obsługuje zespół i jak długo trwają.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja",
    lead: "Zakres dopasowujemy do rodzajów ubezpieczeń i roli agencji przy szkodach.",
    items: [
      { title: "Formularz zgłoszenia", body: "Opis, data, zdjęcia i polisa." },
      { title: "Lista dokumentów", body: "Według rodzaju szkody, wysłana klientowi." },
      { title: "Instrukcje", body: "Jak zgłosić szkodę w towarzystwie i czego się spodziewać." },
      { title: "Rejestr szkód", body: "Wszystkie sprawy klientów z agentem i statusem." },
      { title: "Przypomnienia", body: "O brakujących dokumentach i terminach." },
      { title: "Informacje dla klienta", body: "Kolejne etapy bez dzwonienia do agenta." },
      { title: "Streszczenia z AI", body: "Najważniejsze informacje z korespondencji z towarzystwem." },
      { title: "Historia przy kliencie", body: "Szkody widoczne przy odnowieniu polisy." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zdarzenia do zamknięcia sprawy.",
    items: [
      {
        title: "Szkoda komunikacyjna",
        trigger: "Klient zgłasza kolizję przez formularz",
        steps: ["Lista dokumentów i instrukcja zgłoszenia", "Sprawa w rejestrze u agenta", "Przypomnienie o brakujących dokumentach"],
        result: "Klient wie, co zrobić, a agent ma sprawę pod kontrolą.",
      },
      {
        title: "Szkoda majątkowa firmy",
        trigger: "Klient firmowy zgłasza zalanie magazynu",
        steps: ["Lista dokumentów dla szkody majątkowej", "Zadanie dla agenta z danymi polisy", "Streszczenie korespondencji z towarzystwem"],
        result: "Agent wspiera klienta w dużej sprawie bez szukania informacji.",
      },
    ],
  },
  example: {
    title: "Szkody przed i po automatyzacji",
    lead: "Przykład agencji z kilkoma agentami i portfelem polis komunikacyjnych i majątkowych.",
    rows: [
      { label: "Zgłoszenie", before: "Telefon do agenta.", after: "Formularz lub wiadomość." },
      { label: "Dokumenty", before: "Tłumaczone każdemu klientowi.", after: "Lista według rodzaju szkody." },
      { label: "Status", before: "Klient dzwoni z pytaniem.", after: "Informacje o etapach." },
      { label: "Przegląd", before: "W skrzynkach agentów.", after: "Rejestr szkód agencji." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od najczęstszych rodzajów szkód.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak agenci wspierają klientów przy szkodach i jakie pytania padają najczęściej.", fromYou: "Rozmowa z agentami." },
      { title: "Projekt", duration: "około tygodnia", body: "Przygotowujemy listy dokumentów, instrukcje i zasady przypomnień.", fromYou: "Akceptacja list i treści." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy formularz i rejestr, testujemy je na nowych szkodach.", fromYou: "Agent oceniający sprawy testowe." },
      { title: "Start i opieka", duration: "stale", body: "Rozwijamy listy dokumentów i raporty.", fromYou: "Uwagi agentów i klientów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od formularza i list dokumentów.",
    items: [
      { name: "Formularz i listy", description: "Dla agencji, które chcą odciążyć agentów od telefonów.", includes: ["Formularz zgłoszenia", "Listy dokumentów", "Instrukcje dla klienta", "Rejestr szkód"] },
      { name: "Szkody pod kontrolą", description: "Dla agencji z wieloma szkodami w toku.", includes: ["Wszystko z wariantu Formularz i listy", "Przypomnienia", "Informacje o etapach", "Historia przy kliencie"] },
      { name: "Szkody z AI", description: "Dla brokerów obsługujących duże szkody firmowe.", includes: ["Wszystko z wariantu Szkody pod kontrolą", "Listy dokumentów z AI", "Streszczenia korespondencji", "Raport szkód"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba szkód i rodzajów ubezpieczeń,",
      "kanały komunikacji z klientami,",
      "integracja z CRM,",
      "zakres wykorzystania AI,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Klient uzna agencję za likwidatora.", mitigation: "Komunikaty jasno mówią, że szkodę likwiduje towarzystwo, a agencja pomaga klientowi." },
      { risk: "Lista dokumentów będzie niepełna.", mitigation: "Listy przygotowuje agencja, a AI tylko podpowiada na podstawie opisu. Agent je sprawdza." },
      { risk: "Dane o zdrowiu przy szkodach osobowych.", mitigation: "Takie dane nie trafiają do AI i mają ograniczony dostęp." },
      { risk: "Sprawa utknie bez kontaktu.", mitigation: "Przypomnienia dla agenta, gdy sprawa nie zmienia statusu." },
    ],
  },
  faq: [
    { question: "Czy agencja prowadzi likwidację szkody?", answer: "Nie. Likwidację prowadzi towarzystwo. Automatyzacja pomaga agencji wspierać klienta: dokumenty, terminy, informacje." },
    { question: "Czy system pobierze status szkody z towarzystwa?", answer: "Tylko tam, gdzie towarzystwo udostępnia dane w formie, z której można korzystać. Zwykle status aktualizuje agent." },
    { question: "Czy klient może zgłosić szkodę wieczorem?", answer: "Tak, przez formularz. Dostaje od razu listę dokumentów i instrukcję, a agent widzi sprawę rano." },
    { question: "Czy obsłużycie szkody osobowe?", answer: "Tak, z ograniczeniami dotyczącymi danych o zdrowiu, które nie trafiają do AI." },
    { question: "Czy historia szkód będzie widoczna przy odnowieniu?", answer: "Tak, szkody są przypisane do klienta i polisy." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["airtable", "n8n", "chatgpt"],
  relatedArticleSlugs: ["ai-dla-agenta-ubezpieczeniowego", "co-zautomatyzowac-w-agencji-ubezpieczeniowej", "5-procesow-do-automatyzacji-w-malej-firmie"],
};
