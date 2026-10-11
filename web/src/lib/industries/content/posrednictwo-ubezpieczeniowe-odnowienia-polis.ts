import type { IndustryPageContent } from "../types";

export const posrednictwoUbezpieczenioweOdnowieniaPolis: IndustryPageContent = {
  industrySlug: "posrednictwo-ubezpieczeniowe",
  subSlug: "odnowienia-polis",
  name: "Odnowienia polis",
  excerpt: "Polisy kończące się w najbliższych tygodniach na jednej liście, zadania dla agentów, wiadomości do klientów i kontrola, czy oferta wyszła na czas.",
  metaTitle: "Odnowienia polis: automatyczne przypomnienia i zadania",
  metaDescription:
    "Automatyzujemy odnowienia polis: lista polis kończących się z wyprzedzeniem, zadania dla agentów, wiadomości do klientów i raport utraconych odnowień.",
  primaryKeyword: "automatyzacja odnowień polis",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Pośrednictwo ubezpieczeniowe: odnowienia polis",
    title: "Odnowienia polis z wyprzedzeniem, a nie w ostatniej chwili",
    lead: "Odnowienia to podstawa przychodu agencji. Klient, któremu nikt nie zaproponował nowej polisy na czas, często przedłuża ją automatycznie u obecnego ubezpieczyciela albo kupuje u kogoś innego. Tymczasem w wielu agencjach polisy kończące się w przyszłym miesiącu wyszukuje się ręcznie. Automatyzujemy odnowienia: agent dostaje listę z wyprzedzeniem, klient prośbę o aktualne dane, a właściciel agencji raport, które odnowienia się udały.",
    bullets: [
      "Lista polis kończących się z wyprzedzeniem",
      "Zadania dla agentów i wiadomości do klientów",
      "Raport odnowień udanych i utraconych",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje ubezpieczeniowe i multiagencje z portfelem polis odnawialnych" },
    { label: "Co automatyzujemy", value: "Lista odnowień, zadania, wiadomości, przypomnienia, raporty" },
    { label: "Narzędzia", value: "Baza polis, CRM, poczta, SMS, n8n" },
    { label: "Zasada", value: "Ofertę i rekomendację przygotowuje agent" },
  ],
  symptoms: {
    title: "Kiedy odnowienia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, część odnowień umyka.",
    items: [
      "Polisy kończące się w przyszłym miesiącu wyszukuje się ręcznie w kilku systemach.",
      "Agent dowiaduje się o końcu polisy, gdy klient dzwoni z pytaniem.",
      "Klienci nie odpowiadają na prośbę o aktualne dane, a nikt im nie przypomina.",
      "Nie wiadomo, ile odnowień agencja traci i dlaczego.",
      "Polisy wielu towarzystw są w różnych miejscach.",
      "Po odejściu agenta jego klienci zostają bez opieki.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja odnowień",
    paragraphs: [
      "Podstawą jest baza polis z datą końca ochrony, towarzystwem, rodzajem ubezpieczenia i agentem prowadzącym. Dane mogą pochodzić z systemu agencyjnego, z zestawień towarzystw albo z importu. Codziennie system sprawdza, które polisy kończą się w ustalonym oknie, np. za 30, 45 lub 60 dni, zależnie od rodzaju ubezpieczenia.",
      "Agent dostaje zadanie z danymi polisy i historią klienta. Klient dostaje wiadomość z prośbą o potwierdzenie lub aktualizację danych, np. przebiegu pojazdu czy zmian w firmie. Gdy dane wrócą, agent przygotowuje ofertę. Jeśli nie wróciły albo oferta nie wyszła na czas, system przypomina.",
      "Po terminie odnowienie dostaje status: odnowione, przeniesione, utracone, z powodem. Właściciel agencji widzi raport odnowień według agentów i rodzajów ubezpieczeń, więc wie, gdzie agencja traci klientów.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja odnowień",
    lead: "Zakres dopasowujemy do portfela i sposobu pracy agencji.",
    items: [
      { title: "Baza polis", body: "Polisy z wielu towarzystw z datą końca i agentem prowadzącym." },
      { title: "Okna odnowień", body: "Różne terminy wyprzedzenia dla różnych rodzajów ubezpieczeń." },
      { title: "Zadania dla agentów", body: "Lista odnowień z danymi polisy i historią klienta." },
      { title: "Wiadomości do klientów", body: "Prośba o aktualne dane i informacja o odnowieniu." },
      { title: "Przypomnienia", body: "Dla klienta, który nie odpowiedział, i dla agenta, który nie wysłał oferty." },
      { title: "Statusy i powody", body: "Odnowione, przeniesione, utracone, z powodem utraty." },
      { title: "Zastępstwa", body: "Klienci nieobecnego lub odchodzącego agenta przypisani do innego." },
      { title: "Raport odnowień", body: "Wynik według agentów, towarzystw i rodzajów ubezpieczeń." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od daty końca polisy do odnowienia.",
    items: [
      {
        title: "Odnowienie OC/AC",
        trigger: "Polisa komunikacyjna kończy się za 30 dni",
        steps: ["Zadanie dla agenta z danymi polisy", "Wiadomość do klienta z prośbą o potwierdzenie danych", "Przypomnienie, jeśli oferta nie wyszła w ciągu tygodnia"],
        result: "Agent ma czas na porównanie ofert, a klient nie przedłuża polisy automatycznie bez rozmowy.",
      },
      {
        title: "Polisa firmowa",
        trigger: "Ubezpieczenie majątku firmy kończy się za 60 dni",
        steps: ["Zadanie dla agenta z historią szkód", "Prośba do klienta o aktualizację sum i działalności", "Przypomnienie o terminie przed końcem ochrony"],
        result: "Dłuższe wyprzedzenie przy polisach wymagających zebrania danych.",
      },
    ],
  },
  example: {
    title: "Odnowienia przed i po automatyzacji",
    lead: "Przykład multiagencji z portfelem kilku tysięcy polis.",
    rows: [
      { label: "Wyszukiwanie", before: "Ręcznie w kilku systemach.", after: "Lista codziennie, automatycznie." },
      { label: "Dane od klienta", before: "Telefon w ostatnim tygodniu.", after: "Prośba z wyprzedzeniem i przypomnienie." },
      { label: "Kontrola", before: "Z pamięci agenta.", after: "Przypomnienia i statusy." },
      { label: "Wiedza o stratach", before: "Brak.", after: "Raport z powodami utraty." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najwięcej pracy wymaga zebranie polis w jednej bazie.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, skąd pochodzą dane o polisach i jak dziś pilnujecie odnowień.", fromYou: "Dostęp do zestawień i rozmowa z agentem." },
      { title: "Baza i zasady", duration: "1–2 tygodnie", body: "Budujemy bazę polis i ustalamy okna odnowień, treści wiadomości i statusy.", fromYou: "Weryfikacja danych i akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływy i testujemy je na odnowieniach jednego agenta lub rodzaju ubezpieczenia.", fromYou: "Agent oceniający zadania i wiadomości." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały portfel i pilnujemy aktualności bazy.", fromYou: "Informacja o nowych towarzystwach i zmianach w zestawieniach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od samej listy odnowień.",
    items: [
      { name: "Lista odnowień", description: "Dla agencji, które chcą, żeby nic nie umykało.", includes: ["Baza polis", "Okna odnowień", "Zadania dla agentów", "Przypomnienia dla agentów"] },
      { name: "Odnowienia z klientem", description: "Dla agencji, które chcą wcześniej zbierać dane.", includes: ["Wszystko z wariantu Lista odnowień", "Wiadomości do klientów", "Przypomnienia dla klientów", "Statusy i powody"] },
      { name: "Pełna kontrola", description: "Dla agencji, które chcą mierzyć wyniki.", includes: ["Wszystko z wariantu Odnowienia z klientem", "Raport odnowień", "Zastępstwa", "Porównanie bazy z zestawieniami prowizji"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba polis i towarzystw,",
      "źródła i format danych o polisach,",
      "kanały komunikacji z klientami,",
      "zakres raportów,",
      "integracja z CRM lub systemem agencyjnym.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Polisa nie trafi do bazy i odnowienie umknie.", mitigation: "Porównanie bazy z zestawieniami prowizji wskazuje polisy, których brakuje." },
      { risk: "Wiadomość trafi do klienta, który już odnowił polisę.", mitigation: "Przed wysyłką system sprawdza status odnowienia." },
      { risk: "Klient odbierze wiadomość jako nachalną.", mitigation: "Treści i częstotliwość ustala agencja, a klient może zrezygnować z wiadomości." },
      { risk: "Wiadomość zostanie odebrana jako oferta.", mitigation: "Wiadomości dotyczą terminu i danych. Ofertę przygotowuje agent." },
    ],
  },
  faq: [
    { question: "Skąd system wie o polisach?", answer: "Z systemu agencyjnego, zestawień towarzystw albo z importu. Zwykle łączymy kilka źródeł w jednej bazie." },
    { question: "Jak wcześnie przypominać o odnowieniu?", answer: "To zależy od rodzaju ubezpieczenia. Przy polisach komunikacyjnych zwykle wystarcza miesiąc, przy firmowych warto zacząć wcześniej." },
    { question: "Czy klient dostanie ofertę automatycznie?", answer: "Nie. Klient dostaje prośbę o dane i informację o terminie. Ofertę przygotowuje i przedstawia agent." },
    { question: "Czy wiadomości mogą wychodzić SMS-em?", answer: "Tak, jeśli klient zgodził się na taki kontakt. Kanały ustalamy przy wdrożeniu." },
    { question: "Czy zobaczymy, ile odnowień tracimy?", answer: "Tak. Raport pokazuje odnowienia udane i utracone z powodami, według agentów i rodzajów ubezpieczeń." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "ofertowanie"],
  relatedToolSlugs: ["n8n", "pipedrive", "airtable"],
  relatedArticleSlugs: ["odnowienia-polis-jak-nie-tracic-klientow", "co-zautomatyzowac-w-agencji-ubezpieczeniowej", "jak-mierzyc-roi-automatyzacji"],
};
