import type { IndustryPageContent } from "../types";

export const nieruchomosciLeadyZPortali: IndustryPageContent = {
  industrySlug: "nieruchomosci",
  subSlug: "leady-z-portali",
  name: "Leady z portali i prezentacje",
  excerpt: "Zapytania z portali ogłoszeniowych i strony w CRM, z szybką odpowiedzią, kwalifikacją i umawianiem prezentacji.",
  metaTitle: "Leady z portali nieruchomości: automatyczna obsługa",
  metaDescription:
    "Automatyzujemy obsługę leadów w biurze nieruchomości: zapytania z portali w CRM, szybka odpowiedź, kwalifikacja, umawianie prezentacji i przypomnienia.",
  primaryKeyword: "obsługa leadów w biurze nieruchomości",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Nieruchomości: leady i prezentacje",
    title: "Każde zapytanie z portalu z odpowiedzią w kilka minut",
    lead: "Klient szukający mieszkania wysyła zapytania do kilku biur naraz. Często wygrywa to, które odpowie pierwsze. Tymczasem zapytania z portali trafiają do skrzynek agentów, którzy są na prezentacjach, i czekają godzinami. Automatyzujemy tę drogę: zapytanie trafia do CRM, klient dostaje odpowiedź z informacjami o ofercie i propozycją terminu, a prezentacja ląduje w kalendarzu agenta.",
    bullets: [
      "Zapytania z portali i strony w CRM automatycznie",
      "Odpowiedź z danymi oferty i terminami prezentacji",
      "Przypomnienia dla klienta i agenta",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura nieruchomości i działy sprzedaży deweloperów z wieloma zapytaniami" },
    { label: "Co automatyzujemy", value: "Przyjęcie zapytań, przypisanie, odpowiedź, kwalifikację, prezentacje, follow-up" },
    { label: "Narzędzia", value: "Portale, poczta, CRM, kalendarz, SMS, n8n" },
    { label: "Zasada", value: "Negocjacje i szczegóły transakcji prowadzi agent" },
  ],
  symptoms: {
    title: "Kiedy obsługę leadów warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, biuro traci klientów, zanim agent zdąży odpowiedzieć.",
    items: [
      "Zapytania z portali trafiają do skrzynek agentów i część z nich czeka do wieczora.",
      "Agent przepisuje dane klienta z maila do CRM albo nie przepisuje wcale.",
      "Umawianie prezentacji to kilka telefonów i SMS-ów.",
      "Klienci nie przychodzą na umówione prezentacje, bo nikt im nie przypomniał.",
      "Po prezentacji brakuje systematycznego kontaktu z klientem.",
      "Nie wiadomo, z których portali przychodzą klienci, którzy kupują lub wynajmują.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja leadów",
    paragraphs: [
      "Zapytania z portali ogłoszeniowych, strony biura i formularzy trafiają do jednego miejsca. System rozpoznaje ofertę, której dotyczy zapytanie, zapisuje klienta w CRM i przypisuje go do agenta prowadzącego ofertę. Jeśli klient pytał już wcześniej o inne oferty, agent widzi pełną historię.",
      "Klient od razu dostaje odpowiedź: podstawowe informacje o ofercie i propozycję terminów prezentacji z kalendarza agenta. AI może przygotować odpowiedź dopasowaną do treści pytania i wskazać w CRM, czego szuka klient, np. budżet i termin. Pytania o cenę, negocjacje i sprawy prawne zawsze trafiają do agenta.",
      "Po wyborze terminu prezentacja trafia do kalendarza, a klient i agent dostają przypomnienia. Po prezentacji system przypomina agentowi o kontakcie z klientem, a raport pokazuje, z których portali przychodzą zapytania i ile z nich kończy się transakcją.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja leadów",
    lead: "Zakres dopasowujemy do portali i CRM biura.",
    items: [
      { title: "Zbieranie zapytań", body: "Zapytania z portali, strony i formularzy w jednym miejscu." },
      { title: "Rozpoznanie oferty", body: "Przypisanie zapytania do oferty i agenta prowadzącego." },
      { title: "Zapis w CRM", body: "Klient i jego historia bez przepisywania." },
      { title: "Szybka odpowiedź", body: "Informacje o ofercie i propozycja terminów prezentacji." },
      { title: "Kwalifikacja", body: "Budżet, termin i potrzeby klienta wskazane w CRM." },
      { title: "Prezentacje", body: "Rezerwacja terminu w kalendarzu agenta i przypomnienia." },
      { title: "Follow-up", body: "Przypomnienie o kontakcie po prezentacji i podobne oferty." },
      { title: "Raport źródeł", body: "Zapytania, prezentacje i transakcje według portali." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapytania do prezentacji.",
    items: [
      {
        title: "Nowe zapytanie",
        trigger: "Zapytanie z portalu o konkretną ofertę",
        steps: ["Zapis w CRM i przypisanie do agenta", "Odpowiedź z informacjami i terminami", "Prezentacja w kalendarzu po wyborze terminu"],
        result: "Klient dostaje odpowiedź w kilka minut, nawet gdy agent jest na prezentacji.",
      },
      {
        title: "Po prezentacji",
        trigger: "Dzień po prezentacji",
        steps: ["Przypomnienie dla agenta o kontakcie", "Propozycja podobnych ofert dla klienta do zatwierdzenia", "Zapis wyniku w CRM"],
        result: "Żaden klient po prezentacji nie zostaje bez kontaktu.",
      },
    ],
  },
  example: {
    title: "Leady przed i po automatyzacji",
    lead: "Przykład biura z kilkunastoma agentami i kilkudziesięcioma zapytaniami dziennie.",
    rows: [
      { label: "Odpowiedź", before: "Po kilku godzinach, gdy agent znajdzie czas.", after: "W kilka minut, z terminami prezentacji." },
      { label: "CRM", before: "Uzupełniany wybiórczo.", after: "Każdy klient z historią." },
      { label: "Prezentacje", before: "Telefony i SMS-y.", after: "Rezerwacja i przypomnienia." },
      { label: "Źródła", before: "Nie wiadomo, który portal działa.", after: "Raport zapytań i transakcji." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od najważniejszych portali i kilku agentów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, skąd przychodzą zapytania, jak wygląda CRM i kalendarze agentów.", fromYou: "Rozmowa z właścicielem i agentem." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy treści odpowiedzi, zasady przypisania, kwalifikację i przypomnienia.", fromYou: "Akceptacja treści." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go z kilkoma agentami.", fromYou: "Agenci testujący rozwiązanie." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały zespół i pilnujemy połączeń z portalami.", fromYou: "Uwagi agentów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od zapisu zapytań i szybkiej odpowiedzi.",
    items: [
      { name: "Zapytania w CRM", description: "Dla biur, które chcą, żeby żadne zapytanie nie zginęło.", includes: ["Zbieranie zapytań", "Rozpoznanie oferty i agenta", "Zapis w CRM", "Szybka odpowiedź"] },
      { name: "Zapytania i prezentacje", description: "Dla biur, które chcą umawiać szybciej.", includes: ["Wszystko z wariantu Zapytania w CRM", "Rezerwacja prezentacji", "Przypomnienia", "Follow-up"] },
      { name: "Pełna obsługa leadów", description: "Dla biur, które chcą wiedzieć, co działa.", includes: ["Wszystko z wariantu Zapytania i prezentacje", "Kwalifikacja z AI", "Podobne oferty dla klienta", "Raport źródeł"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba portali i źródeł zapytań,",
      "CRM i jego możliwości integracji,",
      "liczba agentów i ofert,",
      "zakres kwalifikacji z AI,",
      "kanały przypomnień, np. SMS.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Automatyczna odpowiedź będzie brzmieć jak automat.", mitigation: "Treści ustalacie sami, a odpowiedź wychodzi w imieniu agenta i odnosi się do pytania klienta." },
      { risk: "Klient zapyta o coś, czego nie ma w danych oferty.", mitigation: "Takie pytania trafiają do agenta, a klient dostaje informację, że agent odpowie osobiście." },
      { risk: "Portal zmieni format wiadomości.", mitigation: "Monitoring i opieka obejmująca zmiany po stronie portali." },
      { risk: "Termin prezentacji koliduje z innym.", mitigation: "Propozycje terminów pochodzą z aktualnego kalendarza agenta." },
    ],
  },
  faq: [
    { question: "Z jakimi portalami to działa?", answer: "Z portalami, które przekazują zapytania mailem lub przez system do publikacji ofert, z którego korzystacie. Zakres sprawdzamy przy przeglądzie." },
    { question: "Czy odpowiedź wychodzi od agenta?", answer: "Tak. Wiadomość wychodzi w imieniu agenta prowadzącego ofertę, w stylu biura." },
    { question: "Czy klient może sam wybrać termin prezentacji?", answer: "Tak, z terminów dostępnych w kalendarzu agenta. Agent może też potwierdzać terminy ręcznie." },
    { question: "Czy to działa dla deweloperów?", answer: "Tak. Dział sprzedaży dewelopera dostaje zapytania o lokale w ten sam sposób, a prezentacje mogą odbywać się w biurze sprzedaży." },
    { question: "Czy musimy zmieniać CRM?", answer: "Zwykle nie. Łączymy się z CRM, którego używacie, jeśli ma API lub import danych." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "umawianie-wizyt"],
  relatedToolSlugs: ["hubspot", "pipedrive", "n8n"],
  relatedArticleSlugs: ["crm-dla-biura-nieruchomosci", "co-zautomatyzowac-w-biurze-nieruchomosci", "automatyzacja-obslugi-leadow-sprzedazowych"],
};
