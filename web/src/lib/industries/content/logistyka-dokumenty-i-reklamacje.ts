import type { IndustryPageContent } from "../types";

export const logistykaDokumentyIReklamacje: IndustryPageContent = {
  industrySlug: "firmy-logistyczne",
  subSlug: "dokumenty-i-reklamacje",
  name: "Dokumenty i reklamacje",
  excerpt: "Dokumenty magazynowe i przewozowe odczytane i przypisane do zleceń, rozbieżności i reklamacje z dokumentami i zdjęciami w jednym miejscu.",
  metaTitle: "Dokumenty magazynowe i reklamacje w logistyce",
  metaDescription:
    "Automatyzujemy obieg dokumentów w firmie logistycznej: odczyt dokumentów dostaw i listów przewozowych z AI, rozbieżności, reklamacje i szkody ze zdjęciami.",
  primaryKeyword: "obieg dokumentów magazynowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy logistyczne: dokumenty i reklamacje",
    title: "Dokumenty przy zleceniu, reklamacje z kompletem dowodów",
    lead: "Dokumenty dostaw, listy przewozowe, potwierdzenia odbioru, protokoły szkód: w firmie logistycznej każdy ruch towaru zostawia dokument. Gdy są w skrzynkach, segregatorach i na dyskach, każda reklamacja zaczyna się od szukania. Automatyzujemy obieg dokumentów: są odczytywane przez AI, przypisywane do zleceń, a rozbieżności i reklamacje mają w jednym miejscu dokumenty, zdjęcia i historię.",
    bullets: [
      "Dokumenty odczytane i przypisane do zleceń",
      "Rozbieżności wychwycone przy przyjęciu",
      "Reklamacje z dokumentami i zdjęciami w jednym miejscu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Magazyny i firmy transportowe z dużą liczbą dokumentów i reklamacji" },
    { label: "Co automatyzujemy", value: "Przyjmowanie, odczyt i przypisanie dokumentów, rozbieżności, reklamacje" },
    { label: "Narzędzia", value: "Poczta, skaner, aplikacja na telefon, WMS, TMS, model AI, n8n" },
    { label: "Zasada", value: "Ocenę reklamacji i odpowiedzialności podejmuje człowiek" },
  ],
  symptoms: {
    title: "Kiedy obieg dokumentów warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, dokumenty spowalniają pracę i osłabiają pozycję firmy w sporach.",
    items: [
      "Dokumenty dostaw i potwierdzenia odbioru są w segregatorach i skrzynkach.",
      "Przy reklamacji szukanie dokumentów i zdjęć trwa dłużej niż jej rozpatrzenie.",
      "Rozbieżności przy przyjęciu nie są systematycznie zgłaszane klientom.",
      "Zdjęcia uszkodzeń są w telefonach magazynierów.",
      "Nie wiadomo, ile reklamacji jest otwartych i z jakich przyczyn powstają.",
      "Klienci proszą o kopie dokumentów, a ich przygotowanie zajmuje czas.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja dokumentów i reklamacji",
    paragraphs: [
      "Dokumenty trafiają do systemu z poczty, skanera i telefonów magazynierów. Model AI rozpoznaje rodzaj dokumentu i odczytuje z niego dane: numer zlecenia lub dostawy, kontrahenta, pozycje, ilości, daty i uwagi. Na tej podstawie dokument jest przypisywany do zlecenia w WMS lub TMS i zapisywany w archiwum z czytelną nazwą.",
      "Przy przyjęciu towaru dane z dokumentu dostawcy są porównywane z tym, co faktycznie przyjęto. Rozbieżności, np. braki, nadwyżki czy uszkodzenia, trafiają do zestawienia dla klienta razem ze zdjęciami zrobionymi na rampie. Klient dostaje informację od razu, a nie przy inwentaryzacji.",
      "Reklamacje od klientów i wobec przewoźników mają w jednym miejscu dokumenty, zdjęcia, historię zlecenia i korespondencję. Osoba prowadząca reklamację widzi komplet informacji, a raport pokazuje przyczyny i czas rozpatrzenia. Ocena odpowiedzialności i decyzja zostają przy człowieku.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja dokumentów i reklamacji",
    lead: "Zakres dopasowujemy do rodzajów dokumentów i procedur reklamacyjnych firmy.",
    items: [
      { title: "Przyjmowanie dokumentów", body: "Dokumenty z poczty, skanera i telefonu w jednym miejscu." },
      { title: "Odczyt z AI", body: "Numery, kontrahenci, pozycje, ilości, daty i uwagi." },
      { title: "Przypisanie do zleceń", body: "Dokument przy właściwym zleceniu w WMS lub TMS." },
      { title: "Rozbieżności przy przyjęciu", body: "Porównanie dokumentu z przyjęciem i zgłoszenie do klienta." },
      { title: "Zdjęcia z rampy", body: "Zdjęcia uszkodzeń zrobione telefonem i przypisane do dostawy." },
      { title: "Rejestr reklamacji", body: "Zgłoszenie, dokumenty, zdjęcia, historia i terminy w jednym miejscu." },
      { title: "Kopie dla klientów", body: "Dokumenty dla klienta wysyłane na prośbę lub automatycznie." },
      { title: "Raport", body: "Rozbieżności, reklamacje, przyczyny i czas rozpatrzenia." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od dokumentu do zamkniętej reklamacji.",
    items: [
      {
        title: "Przyjęcie z rozbieżnością",
        trigger: "Ilość przyjęta różni się od dokumentu dostawy",
        steps: ["Porównanie dokumentu z przyjęciem w WMS", "Zestawienie rozbieżności ze zdjęciami", "Informacja dla klienta w dniu przyjęcia"],
        result: "Klient wie o rozbieżności od razu, a magazyn ma dowody.",
      },
      {
        title: "Reklamacja od klienta",
        trigger: "Klient zgłasza uszkodzenie towaru u odbiorcy",
        steps: ["Rejestracja zgłoszenia i powiązanie ze zleceniem", "Zebranie dokumentów, zdjęć i historii", "Przekazanie osobie prowadzącej z terminem odpowiedzi"],
        result: "Reklamacja zaczyna się od kompletu informacji, a nie od szukania.",
      },
    ],
  },
  example: {
    title: "Dokumenty i reklamacje przed i po automatyzacji",
    lead: "Przykład magazynu obsługującego klientów z branży handlowej i produkcyjnej.",
    rows: [
      { label: "Dokumenty", before: "W segregatorach i skrzynkach.", after: "Odczytane i przy zleceniu." },
      { label: "Rozbieżności", before: "Zgłaszane nieregularnie.", after: "Zestawienie dla klienta w dniu przyjęcia." },
      { label: "Zdjęcia", before: "W telefonach magazynierów.", after: "Przy dostawie i reklamacji." },
      { label: "Reklamacje", before: "Szukanie dokumentów przy każdej sprawie.", after: "Komplet informacji od początku." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Jakość odczytu sprawdzamy na waszych dokumentach, a procedurę reklamacji ustalamy z zespołem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy rodzaje dokumentów, sposób archiwizacji i obecną procedurę reklamacji.", fromYou: "Przykładowe dokumenty i rozmowa z osobą od reklamacji." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zakres odczytu, zasady przypisania, rejestr reklamacji i raporty.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Budujemy przepływy i testujemy je na dokumentach wybranego klienta.", fromYou: "Osoba sprawdzająca odczyt i przypisania." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych klientów i pilnujemy jakości odczytu.", fromYou: "Zgłaszanie dokumentów, z którymi odczyt sobie nie radzi." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od dokumentów, a rejestr reklamacji dodać później.",
    items: [
      { name: "Porządek w dokumentach", description: "Dla firm, które chcą mieć dokumenty przy zleceniach.", includes: ["Przyjmowanie dokumentów", "Odczyt z AI", "Przypisanie do zleceń", "Archiwum"] },
      { name: "Rozbieżności", description: "Dla magazynów, które chcą szybciej informować klientów.", includes: ["Wszystko z wariantu Porządek w dokumentach", "Porównanie z przyjęciem", "Zdjęcia z rampy", "Zestawienia dla klientów"] },
      { name: "Dokumenty i reklamacje", description: "Dla firm, które chcą uporządkować reklamacje.", includes: ["Wszystko z wariantu Rozbieżności", "Rejestr reklamacji", "Terminy odpowiedzi", "Raport przyczyn"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po teście na waszych dokumentach. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba i rodzaje dokumentów,",
      "integracja z WMS i TMS,",
      "sposób robienia i przesyłania zdjęć,",
      "zakres rejestru reklamacji,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Dokument trafi do złego zlecenia.", mitigation: "Przypisanie opiera się na kilku cechach, a niepewne przypadki trafiają do sprawdzenia." },
      { risk: "Błędne zgłoszenie rozbieżności.", mitigation: "Rozbieżności powyżej ustalonego progu potwierdza magazyn przed wysłaniem do klienta." },
      { risk: "Słaba jakość skanów.", mitigation: "Nieczytelne dokumenty są oznaczane od razu do ponownego skanu." },
      { risk: "Reklamacja rozpatrzona automatycznie.", mitigation: "System zbiera informacje, a decyzję o uznaniu reklamacji podejmuje człowiek." },
    ],
  },
  faq: [
    { question: "Czy magazynierzy muszą korzystać z nowej aplikacji?", answer: "Do zdjęć wystarczy prosty formularz na telefonie lub skaner, którego już używają. Wybór zależy od sposobu pracy na rampie." },
    { question: "Czy AI odczyta dokumenty dostawców w różnych układach?", answer: "Tak. Model AI rozpoznaje dokumenty niezależnie od układu, a niepewne odczyty trafiają do sprawdzenia." },
    { question: "Gdzie są przechowywane dokumenty?", answer: "W WMS, TMS lub magazynie dokumentów, którego używacie, np. w Microsoft 365." },
    { question: "Czy klient może sam pobierać dokumenty?", answer: "Tak, przez portal lub link, jeśli tego chcecie. Można też wysyłać je automatycznie razem z raportami." },
    { question: "Czy rejestr reklamacji obsłuży też reklamacje wobec przewoźników?", answer: "Tak. Reklamacje od klientów i wobec przewoźników mogą być w jednym rejestrze, z powiązaniem między nimi." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "automatyzacja-w-obsludze-klienta"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["ai-w-logistyce", "co-zautomatyzowac-w-firmie-logistycznej", "cyfryzacja-danych-w-firmie"],
};
