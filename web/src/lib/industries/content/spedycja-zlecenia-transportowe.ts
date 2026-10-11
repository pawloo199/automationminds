import type { IndustryPageContent } from "../types";

export const spedycjaZleceniaTransportowe: IndustryPageContent = {
  industrySlug: "spedycja",
  subSlug: "zlecenia-transportowe",
  name: "Zlecenia transportowe",
  excerpt: "Zlecenia dla przewoźników tworzone z danych zapytania i szablonu firmy, wysyłane do potwierdzenia i zapisywane w TMS.",
  metaTitle: "Automatyzacja zleceń transportowych dla przewoźników",
  metaDescription:
    "Automatyzujemy zlecenia transportowe: zlecenie dla przewoźnika z danych zapytania i szablonu, potwierdzenie, zapis w TMS i komplet danych do rozliczenia.",
  primaryKeyword: "automatyzacja zleceń transportowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Spedycja: zlecenia transportowe",
    title: "Zlecenia transportowe bez kopiowania: z zapytania prosto do przewoźnika",
    lead: "Zlecenie dla przewoźnika zawiera dane, które firma już ma: trasę, ładunek, terminy z zapytania, dane przewoźnika i warunki współpracy. Mimo to często powstaje przez kopiowanie z poprzedniego zlecenia i ręczne poprawki, przy których łatwo o błąd. Automatyzujemy tworzenie zleceń: dane trafiają do szablonu firmy, zlecenie idzie do potwierdzenia, a TMS i rozliczenia dostają komplet informacji.",
    bullets: [
      "Zlecenie z danych zapytania i szablonu firmy",
      "Potwierdzenie przewoźnika i zapis w TMS",
      "Komplet danych do rozliczenia i dokumentów",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy spedycyjne wystawiające wiele zleceń dziennie" },
    { label: "Co automatyzujemy", value: "Tworzenie zleceń, warunki, wysyłkę, potwierdzenia, zapis w TMS" },
    { label: "Narzędzia", value: "TMS, szablony Word lub PDF, poczta, podpis elektroniczny, n8n" },
    { label: "Zasada", value: "Spedytor wybiera przewoźnika i zatwierdza zlecenie" },
  ],
  symptoms: {
    title: "Kiedy zlecenia warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością, zlecenia zabierają spedytorom czas i są źródłem błędów.",
    items: [
      "Zlecenie powstaje przez skopiowanie poprzedniego i poprawienie danych.",
      "W zleceniach zdarzają się błędne daty, adresy lub numery referencyjne klienta.",
      "Warunki współpracy i kary umowne różnią się między zleceniami różnych spedytorów.",
      "Potwierdzenia od przewoźników przychodzą mailem i nikt nie pilnuje, czy przyszły.",
      "Dane ze zlecenia trzeba jeszcze raz wpisać do TMS i do faktury.",
      "Zlecenia w obcych językach przygotowuje się ręcznie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zleceń",
    paragraphs: [
      "Punktem wyjścia jest przyjęta wycena lub zlecenie klienta. Spedytor wybiera przewoźnika i cenę, a system uzupełnia zlecenie danymi z zapytania: trasą, adresami, terminami, ładunkiem i numerami referencyjnymi klienta. Dane przewoźnika pochodzą z bazy przewoźników, a warunki współpracy z szablonu firmy, w odpowiednim języku.",
      "Gotowe zlecenie trafia do spedytora do szybkiego sprawdzenia, a po zatwierdzeniu do przewoźnika z prośbą o potwierdzenie. System pilnuje, czy potwierdzenie przyszło, i przypomina, jeśli go brakuje. Zlecenie i jego status są zapisywane w TMS.",
      "Dane ze zlecenia są potem wykorzystywane dalej: do statusów dla klienta, do sprawdzenia dokumentów po dostawie i do rozliczenia. Dzięki temu informacja wpisana raz nie musi być przepisywana na kolejnych etapach.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zleceń",
    lead: "Zakres dopasowujemy do szablonów i TMS firmy.",
    items: [
      { title: "Dane z zapytania", body: "Trasa, terminy, ładunek i numery referencyjne bez kopiowania." },
      { title: "Szablony zleceń", body: "Zlecenie według wzoru firmy, w języku przewoźnika." },
      { title: "Warunki współpracy", body: "Jednolite warunki i kary umowne dołączane do każdego zlecenia." },
      { title: "Kontrola przed wysyłką", body: "Sprawdzenie kompletności danych i weryfikacji przewoźnika." },
      { title: "Wysyłka i potwierdzenie", body: "Zlecenie mailem lub do podpisu elektronicznego, z kontrolą potwierdzenia." },
      { title: "Przypomnienia", body: "Informacja dla spedytora, gdy potwierdzenie nie przyszło w ustalonym czasie." },
      { title: "Zapis w TMS", body: "Zlecenie, przewoźnik, cena i status w systemie bez ponownego wpisywania." },
      { title: "Zmiany zlecenia", body: "Aneks lub korekta zlecenia z historią zmian." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wyboru przewoźnika do potwierdzonego zlecenia.",
    items: [
      {
        title: "Nowe zlecenie",
        trigger: "Spedytor wybiera przewoźnika i cenę",
        steps: ["Zlecenie z danych zapytania, przewoźnika i szablonu", "Kontrola kompletności i weryfikacji przewoźnika", "Wysyłka do potwierdzenia i zapis w TMS"],
        result: "Zlecenie gotowe w chwilę, bez kopiowania i z jednolitymi warunkami.",
      },
      {
        title: "Brak potwierdzenia",
        trigger: "Przewoźnik nie potwierdził zlecenia w ustalonym czasie",
        steps: ["Przypomnienie dla przewoźnika", "Informacja dla spedytora", "Oznaczenie zlecenia jako zagrożonego"],
        result: "Spedytor wie o problemie, zanim samochód nie przyjedzie na załadunek.",
      },
    ],
  },
  example: {
    title: "Zlecenia przed i po automatyzacji",
    lead: "Przykład firmy, w której kilku spedytorów wystawia codziennie kilkadziesiąt zleceń.",
    rows: [
      { label: "Tworzenie", before: "Kopiowanie poprzedniego zlecenia.", after: "Zlecenie z danych zapytania i szablonu." },
      { label: "Warunki", before: "Różne wersje u różnych spedytorów.", after: "Jednolite warunki w każdym zleceniu." },
      { label: "Potwierdzenia", before: "Sprawdzane w skrzynce, gdy ktoś pamięta.", after: "Kontrola i przypomnienia." },
      { label: "TMS i faktura", before: "Dane wpisywane ponownie.", after: "Dane przekazane dalej automatycznie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Cztery etapy, z testem na wybranych relacjach przed włączeniem całego zespołu.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy wzory zleceń, warunki, sposób wysyłki i TMS.", fromYou: "Wzory zleceń i rozmowa z kierownikiem spedycji." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy szablony, wersje językowe, zasady kontroli i potwierdzeń.", fromYou: "Akceptacja szablonów i warunków." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go z kilkoma spedytorami.", fromYou: "Spedytorzy sprawdzający zlecenia testowe." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały zespół i aktualizujemy szablony przy zmianach warunków.", fromYou: "Informacja o zmianach w warunkach współpracy." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od szablonów, a kontrolę potwierdzeń i TMS dodać później.",
    items: [
      { name: "Szablony zleceń", description: "Dla firm, które chcą skończyć z kopiowaniem.", includes: ["Zlecenie z danych zapytania", "Szablony w kilku językach", "Jednolite warunki", "Kontrola kompletności"] },
      { name: "Zlecenia i potwierdzenia", description: "Dla firm, które chcą panować nad potwierdzeniami.", includes: ["Wszystko z wariantu Szablony zleceń", "Wysyłka i kontrola potwierdzeń", "Przypomnienia", "Zmiany zleceń z historią"] },
      { name: "Pełny obieg", description: "Dla firm, które chcą połączyć zlecenia z TMS i rozliczeniami.", includes: ["Wszystko z wariantu Zlecenia i potwierdzenia", "Zapis w TMS", "Weryfikacja przewoźnika przed wysyłką", "Dane do rozliczenia frachtu"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba szablonów i wersji językowych,",
      "integracja z TMS,",
      "sposób wysyłki i potwierdzania zleceń,",
      "połączenie z weryfikacją przewoźników i rozliczeniami,",
      "liczba zleceń dziennie.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędne dane w zleceniu.", mitigation: "Kontrola kompletności i sprawdzenie przez spedytora przed wysyłką." },
      { risk: "Zlecenie do niesprawdzonego przewoźnika.", mitigation: "Zlecenie wychodzi dopiero po weryfikacji przewoźnika albo z wyraźnym oznaczeniem, że jej brakuje." },
      { risk: "Nieaktualne warunki w szablonie.", mitigation: "Warunki są w jednym miejscu, a ich zmiana obejmuje wszystkie nowe zlecenia." },
      { risk: "Rozbieżność między zleceniem a TMS.", mitigation: "TMS jest źródłem danych zlecenia, a zmiany są zapisywane z historią." },
    ],
  },
  faq: [
    { question: "Czy zlecenia mogą być w różnych językach?", answer: "Tak. Szablony przygotowujemy w językach, w których pracujecie z przewoźnikami, a dane zlecenia są wstawiane do właściwej wersji." },
    { question: "Czy przewoźnik może potwierdzić zlecenie podpisem elektronicznym?", answer: "Tak, jeśli korzystacie z usługi podpisu elektronicznego. Zlecenie może trafić do podpisu automatycznie, a status potwierdzenia wraca do systemu." },
    { question: "Czy nasz TMS nie generuje zleceń sam?", answer: "Wiele TMS ma szablony zleceń. Automatyzujemy to, czego brakuje, np. przeniesienie danych z zapytania, kontrolę potwierdzeń czy weryfikację przewoźnika przed wysyłką." },
    { question: "Co z korektami zleceń?", answer: "Zmiana zlecenia tworzy nową wersję lub aneks z historią zmian, wysyłaną do przewoźnika do potwierdzenia." },
    { question: "Czy to działa dla transportów międzynarodowych?", answer: "Tak. Dane, szablony i warunki dopasowujemy do relacji krajowych i międzynarodowych." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedProcessSlugs: ["obieg-umow", "przyjmowanie-zamowien"],
  relatedToolSlugs: ["n8n", "microsoft-365", "google-workspace"],
  relatedArticleSlugs: ["gotowa-automatyzacja-czy-budowana-od-zera", "integracja-crm-z-fakturowaniem", "bledy-przy-pierwszym-wdrozeniu-automatyzacji"],
};
