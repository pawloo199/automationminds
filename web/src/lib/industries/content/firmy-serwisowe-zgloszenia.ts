import type { IndustryPageContent } from "../types";

export const firmySerwisoweZgloszenia: IndustryPageContent = {
  industrySlug: "firmy-serwisowe",
  subSlug: "zgloszenia-serwisowe",
  name: "Zgłoszenia serwisowe",
  excerpt: "Zgłoszenia awarii i napraw przez formularz, z danymi urządzenia, zdjęciem i historią klienta, z pilnością i potwierdzeniem dla klienta.",
  metaTitle: "Przyjmowanie zgłoszeń serwisowych: formularz i automatyzacja",
  metaDescription:
    "Automatyzujemy przyjmowanie zgłoszeń serwisowych: formularz ze zdjęciem, dane urządzenia i historia klienta, pilność, potwierdzenie i zlecenie dla serwisu.",
  primaryKeyword: "przyjmowanie zgłoszeń serwisowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy serwisowe: zgłoszenia",
    title: "Zgłoszenia serwisowe z kompletem informacji od pierwszego kontaktu",
    lead: "Klient dzwoni, że urządzenie nie działa. Nie zna modelu, nie pamięta, kiedy był przegląd, a objawy opisuje po swojemu. Dyspozytor dopytuje, zapisuje na kartce, a serwisant jedzie bez części. Automatyzujemy przyjmowanie zgłoszeń: klient zgłasza usterkę przez prosty formularz ze zdjęciem, system łączy zgłoszenie z urządzeniem i historią, ocenia pilność, a klient dostaje potwierdzenie.",
    bullets: [
      "Formularz ze zdjęciem urządzenia i usterki",
      "Dane urządzenia i historia klienta przy zgłoszeniu",
      "Pilność i potwierdzenie dla klienta",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy serwisowe i instalacyjne obsługujące klientów indywidualnych i firmy" },
    { label: "Co automatyzujemy", value: "Formularz, porządkowanie, historia, pilność, potwierdzenia" },
    { label: "Narzędzia", value: "Formularz, baza zleceń, poczta, SMS, model AI, n8n" },
    { label: "Zasada", value: "Pilne zgłoszenia zawsze trafiają od razu do człowieka" },
  ],
  symptoms: {
    title: "Kiedy zgłoszenia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, dyspozytor spędza dzień na telefonie.",
    items: [
      "Zgłoszenia przychodzą telefonem, mailem, SMS-em i przez komunikatory.",
      "Klient nie zna modelu urządzenia, a dyspozytor dopytuje.",
      "Serwisant jedzie bez części, bo nie wiadomo, co się zepsuło.",
      "Historia urządzenia jest w papierach albo w pamięci serwisanta.",
      "Klienci dzwonią z pytaniem, czy zgłoszenie dotarło.",
      "Zgłoszenia po godzinach czekają do rana bez odpowiedzi.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zgłoszeń",
    paragraphs: [
      "Klient zgłasza usterkę przez formularz na stronie, z linku w wiadomości lub z kodu QR na urządzeniu: opis objawów, zdjęcie urządzenia i tabliczki znamionowej, dostępność. Zgłoszenia mailem i SMS-em trafiają do tego samego miejsca, a AI porządkuje ich treść według tych samych pól.",
      "System łączy zgłoszenie z klientem i urządzeniem: model, data montażu, ostatni przegląd, wcześniejsze naprawy, umowa serwisowa. AI może odczytać model ze zdjęcia tabliczki i ocenić pilność z opisu, np. odróżnić brak ogrzewania zimą od głośnej pracy urządzenia.",
      "Pilne zgłoszenia trafiają od razu do dyspozytora, także SMS-em. Pozostałe czekają na zaplanowanie w kolejce. Klient dostaje potwierdzenie przyjęcia z informacją, kiedy może spodziewać się kontaktu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zgłoszeń",
    lead: "Zakres dopasowujemy do rodzaju urządzeń i klientów.",
    items: [
      { title: "Formularz zgłoszenia", body: "Objawy, zdjęcia i dostępność, ze strony, linku lub kodu QR." },
      { title: "Inne kanały", body: "Zgłoszenia z maili i SMS-ów w tym samym miejscu." },
      { title: "Dane urządzenia", body: "Model i numer seryjny, także ze zdjęcia tabliczki." },
      { title: "Historia", body: "Montaż, przeglądy i naprawy przy zgłoszeniu." },
      { title: "Pilność", body: "Ocena z opisu, pilne od razu do dyspozytora." },
      { title: "Umowa serwisowa", body: "Informacja, czy zgłoszenie jest objęte umową lub gwarancją." },
      { title: "Potwierdzenie", body: "Klient wie, że zgłoszenie dotarło i co dalej." },
      { title: "Raport zgłoszeń", body: "Zgłoszenia według urządzeń, klientów i rodzajów usterek." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zgłoszenia do zlecenia.",
    items: [
      {
        title: "Awaria zgłoszona wieczorem",
        trigger: "Klient wypełnia formularz o 21:00",
        steps: ["Rozpoznanie urządzenia i historii", "Ocena pilności: brak ogrzewania zimą", "SMS do osoby dyżurnej i potwierdzenie dla klienta"],
        result: "Pilna sprawa nie czeka do rana.",
      },
      {
        title: "Zgłoszenie mailem",
        trigger: "Firma zgłasza usterkę klimatyzacji w biurze",
        steps: ["AI porządkuje treść według pól", "Połączenie z umową serwisową klienta", "Zgłoszenie w kolejce z terminem reakcji z umowy"],
        result: "Dyspozytor widzi, że obowiązuje termin z umowy.",
      },
    ],
  },
  example: {
    title: "Zgłoszenia przed i po automatyzacji",
    lead: "Przykład firmy serwisującej kotły i pompy ciepła.",
    rows: [
      { label: "Kanały", before: "Telefon, mail, SMS.", after: "Jedno miejsce." },
      { label: "Dane urządzenia", before: "Dopytywanie.", after: "Ze zdjęcia tabliczki." },
      { label: "Historia", before: "W papierach.", after: "Przy zgłoszeniu." },
      { label: "Klient", before: "Dzwoni z pytaniem.", after: "Dostaje potwierdzenie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od formularza i rejestru zgłoszeń.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy kanały zgłoszeń i informacje, których brakuje serwisantom.", fromYou: "Rozmowa z dyspozytorem i serwisantem." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularz, zasady pilności i treści wiadomości.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy formularz i przepływy, testujemy je na nowych zgłoszeniach.", fromYou: "Dyspozytor oceniający zgłoszenia." },
      { title: "Start i opieka", duration: "stale", body: "Rozwijamy zasady i raporty.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od formularza i potwierdzeń.",
    items: [
      { name: "Formularz", description: "Dla firm, które chcą dostawać komplet informacji.", includes: ["Formularz zgłoszenia", "Rejestr zgłoszeń", "Potwierdzenie dla klienta", "Pilne do dyspozytora"] },
      { name: "Zgłoszenia z historią", description: "Dla firm z bazą urządzeń klientów.", includes: ["Wszystko z wariantu Formularz", "Dane urządzenia i historia", "Umowy serwisowe", "Inne kanały"] },
      { name: "Zgłoszenia z AI", description: "Dla firm z dużą liczbą zgłoszeń.", includes: ["Wszystko z wariantu Zgłoszenia z historią", "Odczyt tabliczek", "Ocena pilności", "Raport zgłoszeń"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zgłoszeń i kanałów,",
      "stan bazy klientów i urządzeń,",
      "integracja z programem serwisowym,",
      "zakres wykorzystania AI,",
      "kanały powiadomień, np. SMS.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Pilna awaria zostanie uznana za zwykłą.", mitigation: "Klient może sam oznaczyć zgłoszenie jako pilne, a lista objawów awaryjnych zawsze trafia do dyspozytora." },
      { risk: "Klient nie skorzysta z formularza.", mitigation: "Telefony i maile trafiają do tego samego rejestru." },
      { risk: "Błędnie odczytany model.", mitigation: "Odczyt sprawdza dyspozytor lub serwisant." },
      { risk: "Zgłoszenie zginie po godzinach.", mitigation: "Dyżury i powiadomienia SMS dla pilnych spraw." },
    ],
  },
  faq: [
    { question: "Czy klient musi instalować aplikację?", answer: "Nie. Wystarczy formularz w przeglądarce, z linku lub kodu QR na urządzeniu." },
    { question: "Co z klientami, którzy wolą dzwonić?", answer: "Dyspozytor wpisuje zgłoszenie do tego samego formularza, a dalsze kroki działają tak samo." },
    { question: "Czy AI rozpozna usterkę?", answer: "Może ocenić pilność i podpowiedzieć możliwe przyczyny. Diagnozę stawia serwisant." },
    { question: "Skąd system zna historię urządzenia?", answer: "Z bazy zleceń i protokołów. Jeśli jej nie ma, budujemy ją razem z wdrożeniem." },
    { question: "Czy obsłużycie zgłoszenia od firm z umowami SLA?", answer: "Tak. System pokazuje termin reakcji z umowy i przypomina, gdy się zbliża." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["obsluga-reklamacji", "umawianie-wizyt"],
  relatedToolSlugs: ["airtable", "n8n", "chatgpt"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
