import type { IndustryPageContent } from "../types";

export const biuraKomunikacjaZKlientami: IndustryPageContent = {
  industrySlug: "biura-rachunkowe",
  subSlug: "komunikacja-z-klientami",
  name: "Komunikacja z klientami",
  excerpt: "Kwoty podatków i składek, odpowiedzi na typowe pytania i informacje dla klientów biura bez pisania każdej wiadomości osobno.",
  metaTitle: "Komunikacja z klientami biura rachunkowego: automatyzacja",
  metaDescription:
    "Automatyzujemy komunikację biura rachunkowego z klientami: kwoty podatków i składek, odpowiedzi na typowe pytania, asystent AI i terminy.",
  primaryKeyword: "komunikacja z klientami biura rachunkowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura rachunkowe: komunikacja z klientami",
    title: "Komunikacja z klientami biura: mniej telefonów, szybsze odpowiedzi",
    lead: "Klienci biura pytają o to samo: ile zapłacić, do kiedy, czy dokumenty dotarły, jak rozliczyć samochód. Każde pytanie odrywa księgowego od pracy, a kwoty podatków i składek wysyła się co miesiąc, każdemu osobno. Automatyzujemy tę komunikację: wiadomości z kwotami wychodzą po zatwierdzeniu, typowe pytania dostają szybką odpowiedź, a trudniejsze sprawy trafiają do księgowego z pełnym kontekstem.",
    bullets: [
      "Kwoty podatków i składek wysyłane po zatwierdzeniu",
      "Odpowiedzi na typowe pytania klientów",
      "Trudniejsze sprawy u księgowego, z kontekstem",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura, w których komunikacja z klientami zabiera księgowym kilka godzin tygodniowo" },
    { label: "Co automatyzujemy", value: "Informacje o płatnościach, przypomnienia, odpowiedzi na pytania, statusy" },
    { label: "Narzędzia", value: "Poczta, SMS, formularz lub czat, asystent AI na wiedzy biura" },
    { label: "Zasada", value: "Kwoty i porady zatwierdza księgowy" },
  ],
  symptoms: {
    title: "Kiedy komunikację z klientami warto zautomatyzować",
    lead: "Jeśli te sytuacje są częste, księgowi spędzają sporo czasu na rozmowach, które mogłyby się odbyć bez nich.",
    items: [
      "Kwoty podatków i składek wysyła się ręcznie, każdemu klientowi osobno.",
      "Klienci dzwonią z pytaniem, czy dokumenty dotarły albo ile mają zapłacić.",
      "Te same pytania o koszty, samochód czy terminy padają co miesiąc od różnych klientów.",
      "Informacja o zmianach w przepisach trafia do klientów nieregularnie.",
      "Pytania klientów są rozproszone w mailach, telefonach i komunikatorach.",
      "Nowa osoba w zespole nie wie, co ustalono z klientem wcześniej.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja komunikacji",
    paragraphs: [
      "Najprostszy i najczęstszy pierwszy krok to wiadomości z kwotami do zapłaty. Gdy księgowy zamknie miesiąc klienta i zatwierdzi kwoty, system przygotowuje wiadomość z kwotą, rachunkiem i terminem, wysyła ją mailem lub SMS-em, a przed terminem przypomina klientowi o płatności. Księgowy nie pisze tych wiadomości ręcznie, ale każdą kwotę zatwierdza.",
      "Drugi obszar to pytania. Część z nich dotyczy statusu: czy dokumenty dotarły, czy miesiąc jest zamknięty, ile do zapłaty. Na takie pytania system odpowiada na podstawie danych biura. Pytania ogólne, np. o dokumenty potrzebne do rozliczenia czy terminy, może obsłużyć asystent AI oparty na materiałach biura, z podaniem źródła.",
      "Pytania wymagające oceny księgowej lub podatkowej trafiają do księgowego prowadzącego klienta, razem z historią kontaktu i dokumentami. Asystent nie udziela porad podatkowych w konkretnych sprawach, tylko pomaga uporządkować komunikację i odpowiada na to, co jest powtarzalne.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja komunikacji",
    lead: "Zakres dopasowujemy do kanałów, którymi biuro rozmawia z klientami.",
    items: [
      { title: "Kwoty do zapłaty", body: "Wiadomości z kwotami podatków i składek po zatwierdzeniu przez księgowego." },
      { title: "Przypomnienia o płatnościach", body: "Przypomnienie przed terminem zapłaty podatku lub składki." },
      { title: "Statusy dla klientów", body: "Odpowiedź na pytanie o dokumenty i zamknięcie miesiąca na podstawie danych biura." },
      { title: "Asystent AI", body: "Odpowiedzi na typowe pytania na podstawie materiałów biura, ze wskazaniem źródła." },
      { title: "Przekazanie do księgowego", body: "Pytania wymagające oceny trafiają do osoby prowadzącej klienta, z historią kontaktu." },
      { title: "Informacje dla grup klientów", body: "Wiadomości o zmianach w przepisach do klientów, których dotyczą." },
      { title: "Historia kontaktu", body: "Ustalenia z klientem zapisane w jednym miejscu, dostępne dla zespołu." },
      { title: "Ankieta po rozliczeniu rocznym", body: "Krótka informacja zwrotna od klientów po najbardziej obciążającym okresie." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zamknięcia miesiąca do odpowiedzi na pytanie klienta.",
    items: [
      {
        title: "Kwoty do zapłaty",
        trigger: "Księgowy zatwierdza zamknięcie miesiąca klienta",
        steps: ["Wiadomość z kwotami, rachunkami i terminami", "Wysyłka mailem lub SMS-em", "Przypomnienie przed terminem płatności"],
        result: "Klient dostaje informację od razu po zamknięciu, a księgowy nie pisze maili.",
      },
      {
        title: "Pytanie klienta",
        trigger: "Mail lub wiadomość z formularza",
        steps: ["Rozpoznanie klienta i tematu pytania", "Odpowiedź na pytanie o status lub ogólne zasady", "Przekazanie do księgowego, jeśli pytanie wymaga oceny"],
        result: "Proste pytania nie odrywają księgowych od pracy, a trudne trafiają do właściwej osoby.",
      },
    ],
  },
  example: {
    title: "Komunikacja przed i po automatyzacji",
    lead: "Przykład biura, w którym każda księgowa prowadzi kilkudziesięciu klientów.",
    rows: [
      { label: "Kwoty do zapłaty", before: "Mail do każdego klienta pisany ręcznie.", after: "Wiadomości wysyłane po zatwierdzeniu." },
      { label: "Pytania o status", before: "Telefon i sprawdzanie w kilku miejscach.", after: "Odpowiedź na podstawie danych biura." },
      { label: "Typowe pytania", before: "Ta sama odpowiedź pisana wielokrotnie.", after: "Asystent AI z materiałami biura." },
      { label: "Historia", before: "Ustalenia w skrzynkach poszczególnych osób.", after: "Historia kontaktu w jednym miejscu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od wiadomości z kwotami, bo dają szybki efekt, a asystenta dodajemy w kolejnym kroku.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy kanały kontaktu, najczęstsze pytania i sposób przekazywania kwot do zapłaty.", fromYou: "Przykłady wiadomości i lista najczęstszych pytań." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy treści wiadomości, zasady zatwierdzania, zakres odpowiedzi automatycznych i materiały dla asystenta.", fromYou: "Akceptacja treści i zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i testujemy je na wybranych klientach przez jedno zamknięcie miesiąca.", fromYou: "Księgowe, które sprawdzają wiadomości i odpowiedzi." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich klientów i rozwijamy asystenta o nowe tematy.", fromYou: "Uwagi o pytaniach, na które asystent powinien odpowiadać." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od kwot do zapłaty i dokładać kolejne elementy.",
    items: [
      { name: "Kwoty i przypomnienia", description: "Dla biur, które chcą skończyć z ręcznym wysyłaniem kwot.", includes: ["Wiadomości z kwotami po zatwierdzeniu", "Mail lub SMS", "Przypomnienia o płatnościach", "Treści ustalone przez biuro"] },
      { name: "Komunikacja i statusy", description: "Dla biur, które chcą ograniczyć pytania o status.", includes: ["Wszystko z wariantu Kwoty i przypomnienia", "Odpowiedzi o dokumenty i zamknięcie", "Historia kontaktu", "Informacje dla grup klientów"] },
      { name: "Asystent AI", description: "Dla biur, które chcą odpowiadać szybko także na typowe pytania.", includes: ["Wszystko z wariantu Komunikacja i statusy", "Asystent AI na materiałach biura", "Przekazanie do księgowego", "Raport najczęstszych pytań"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba kanałów komunikacji, np. mail, SMS, formularz,",
      "skąd pochodzą kwoty do zapłaty i jak się je zatwierdza,",
      "zakres i materiały dla asystenta AI,",
      "liczba klientów i wiadomości,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Klient dostanie błędną kwotę.", mitigation: "Wiadomość wychodzi dopiero po zatwierdzeniu przez księgowego prowadzącego klienta." },
      { risk: "Asystent udzieli porady podatkowej.", mitigation: "Asystent odpowiada tylko na pytania ogólne i o status, na podstawie materiałów biura. Pytania o konkretną sytuację podatkową przekazuje księgowemu." },
      { risk: "Klienci poczują, że rozmawiają z automatem.", mitigation: "Automat obsługuje sprawy proste, a każdy klient może poprosić o kontakt z księgową." },
      { risk: "Dane jednego klienta trafią do innego.", mitigation: "Odpowiedzi o status powstają tylko po rozpoznaniu klienta, a asystent nie ma dostępu do danych innych klientów." },
    ],
  },
  faq: [
    { question: "Skąd system bierze kwoty do zapłaty?", answer: "Z programu księgowego, jeśli udostępnia dane, albo z prostego zestawienia, które księgowa uzupełnia przy zamknięciu. W obu przypadkach wiadomość wychodzi dopiero po zatwierdzeniu." },
    { question: "Czy asystent AI będzie doradzał klientom?", answer: "Nie. Asystent odpowiada na pytania ogólne i organizacyjne na podstawie materiałów biura. Pytania o konkretną sytuację podatkową trafiają do księgowego." },
    { question: "Czy wiadomości mogą wychodzić z naszego adresu?", answer: "Tak. Wiadomości wychodzą z adresu biura i w waszym stylu. Treści ustalacie sami." },
    { question: "Czy klienci mogą pytać przez komunikatory?", answer: "Zależy od komunikatora i jego możliwości integracji. Najczęściej zaczynamy od maila i formularza, a inne kanały dodajemy, jeśli to możliwe." },
    { question: "Czy to działa w okresie rozliczeń rocznych?", answer: "Tak, i właśnie wtedy daje najwięcej. Informacje o potrzebnych dokumentach i terminach mogą wychodzić do klientów automatycznie, a asystent odpowiada na powtarzalne pytania." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "asystent-ai-na-firmowej-wiedzy", "chatbot-ai-dla-firmy"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["n8n", "microsoft-365", "claude"],
  relatedArticleSlugs: ["ai-w-codziennej-pracy-zespolu", "5-procesow-do-automatyzacji-w-malej-firmie", "rodo-a-automatyzacja-procesow"],
};
