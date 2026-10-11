import type { IndustryPageContent } from "../types";

export const firmySerwisoweProtokoly: IndustryPageContent = {
  industrySlug: "firmy-serwisowe",
  subSlug: "protokoly-serwisowe",
  name: "Protokoły serwisowe na telefonie",
  excerpt: "Protokół serwisowy wypełniany na telefonie: wykonane prace, części, zdjęcia, pomiary i podpis klienta, wysłany klientowi i gotowy do faktury.",
  metaTitle: "Elektroniczny protokół serwisowy na telefonie",
  metaDescription:
    "Automatyzujemy protokoły serwisowe: formularz na telefonie z pracami, częściami, zdjęciami i podpisem klienta, protokół w mailu i faktura od razu.",
  primaryKeyword: "elektroniczny protokół serwisowy",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy serwisowe: protokoły",
    title: "Protokół serwisowy na telefonie zamiast papieru i przepisywania",
    lead: "Serwisant wypełnia protokół na papierze, klient podpisuje, kartka trafia do biura po kilku dniach, a biuro przepisuje ją do systemu i na fakturę. Część protokołów jest nieczytelna, część niekompletna, a zdjęcia zostają w telefonie serwisanta. Automatyzujemy protokoły: serwisant wypełnia formularz na telefonie, klient podpisuje na ekranie, protokół trafia do klienta i do biura, a faktura jest gotowa do sprawdzenia.",
    bullets: [
      "Formularz na telefonie z pracami, częściami i zdjęciami",
      "Podpis klienta na ekranie i protokół w mailu",
      "Faktura z protokołu bez przepisywania",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy serwisowe, instalacyjne i utrzymania technicznego" },
    { label: "Co automatyzujemy", value: "Protokół, części, zdjęcia, podpis, wysyłka, faktura" },
    { label: "Narzędzia", value: "Formularz mobilny, baza zleceń, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Fakturę sprawdza biuro przed wysłaniem" },
  ],
  symptoms: {
    title: "Kiedy protokoły warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, protokoły opóźniają faktury i rodzą spory.",
    items: [
      "Protokoły papierowe trafiają do biura po kilku dniach.",
      "Biuro przepisuje protokoły do systemu i na fakturę.",
      "Część protokołów jest nieczytelna lub niekompletna.",
      "Zdjęcia z wizyty są w telefonie serwisanta, a nie przy zleceniu.",
      "Klient kwestionuje zakres prac, a nie ma dowodu.",
      "Użyte części nie są odpisywane ze stanu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja protokołów",
    paragraphs: [
      "Serwisant otwiera zlecenie na telefonie. Dane klienta, adres i urządzenie są już wpisane. Uzupełnia wykonane prace, użyte części z listy, pomiary, zdjęcia przed i po, uwagi. Opis prac może nagrać głosowo, a AI zamieni go na tekst w protokole.",
      "Klient podpisuje protokół na ekranie telefonu i dostaje go mailem. Protokół trafia do zlecenia w bazie razem ze zdjęciami. Części są odpisywane ze stanu w samochodzie serwisanta.",
      "Na podstawie protokołu i cennika system przygotowuje fakturę w programie do faktur. Biuro ją sprawdza i wysyła, a faktura trafia do KSeF. Zlecenia objęte gwarancją lub umową serwisową są oznaczone i rozliczane według ich zasad.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja protokołów",
    lead: "Zakres dopasowujemy do rodzajów prac i urządzeń.",
    items: [
      { title: "Formularz na telefonie", body: "Prace, części, pomiary i uwagi, bez instalowania aplikacji." },
      { title: "Dane ze zlecenia", body: "Klient, adres i urządzenie wpisane automatycznie." },
      { title: "Zdjęcia", body: "Przed i po, zapisane przy zleceniu." },
      { title: "Opis głosowy", body: "Notatka głosowa zamieniona na opis prac." },
      { title: "Podpis klienta", body: "Na ekranie telefonu, z datą i godziną." },
      { title: "Wysyłka do klienta", body: "Protokół w mailu zaraz po wizycie." },
      { title: "Części", body: "Odpis ze stanu w samochodzie serwisanta." },
      { title: "Faktura", body: "Z protokołu i cennika, do sprawdzenia przez biuro." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wizyty do faktury.",
    items: [
      {
        title: "Naprawa płatna",
        trigger: "Serwisant kończy naprawę",
        steps: ["Protokół z pracami, częściami i zdjęciami", "Podpis klienta i protokół w mailu", "Faktura do sprawdzenia w programie do faktur"],
        result: "Faktura wychodzi tego samego dnia.",
      },
      {
        title: "Naprawa gwarancyjna",
        trigger: "Serwisant zamyka zlecenie gwarancyjne",
        steps: ["Protokół z numerem seryjnym i zdjęciami", "Oznaczenie jako gwarancja", "Zestawienie do rozliczenia z producentem"],
        result: "Dokumenty do rozliczenia gwarancji kompletne od razu.",
      },
    ],
  },
  example: {
    title: "Protokoły przed i po automatyzacji",
    lead: "Przykład firmy instalacyjnej z kilkoma ekipami.",
    rows: [
      { label: "Protokół", before: "Papier.", after: "Telefon i podpis na ekranie." },
      { label: "Do biura", before: "Po kilku dniach.", after: "Od razu." },
      { label: "Zdjęcia", before: "W telefonie serwisanta.", after: "Przy zleceniu." },
      { label: "Faktura", before: "Po przepisaniu.", after: "Z protokołu, po sprawdzeniu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Formularz projektujemy z serwisantami, żeby był szybszy niż papier.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy wzory protokołów i sprawdzamy, jak dziś powstaje faktura.", fromYou: "Wzory protokołów i cennik." },
      { title: "Projekt formularza", duration: "około tygodnia", body: "Projektujemy formularz i testujemy go z serwisantami.", fromYou: "Serwisanci oceniający formularz." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Łączymy formularz z bazą zleceń i programem do faktur, testujemy na prawdziwych wizytach.", fromYou: "Biuro sprawdzające faktury testowe." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich serwisantów i rozwijamy formularz.", fromYou: "Uwagi serwisantów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od protokołu i wysyłki do klienta.",
    items: [
      { name: "Protokół", description: "Dla firm, które chcą skończyć z papierem.", includes: ["Formularz na telefonie", "Zdjęcia", "Podpis klienta", "Wysyłka do klienta"] },
      { name: "Protokół i faktura", description: "Dla firm, które chcą szybciej fakturować.", includes: ["Wszystko z wariantu Protokół", "Faktura z protokołu", "KSeF", "Opis głosowy"] },
      { name: "Pełne rozliczenie", description: "Dla firm z magazynem części.", includes: ["Wszystko z wariantu Protokół i faktura", "Odpis części", "Gwarancje i umowy", "Raport zleceń"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba serwisantów i rodzajów protokołów,",
      "integracja z programem do faktur,",
      "zakres cennika i zasad rozliczeń,",
      "obsługa części i magazynu,",
      "zakres wykorzystania AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Brak zasięgu u klienta.", mitigation: "Formularz działa bez internetu i wysyła dane po odzyskaniu połączenia." },
      { risk: "Błędna faktura.", mitigation: "Faktura trafia do sprawdzenia przez biuro przed wysłaniem." },
      { risk: "Serwisant pominie ważne pole.", mitigation: "Pola wymagane są oznaczone, a formularz nie zamknie się bez nich." },
      { risk: "Spór o zakres prac.", mitigation: "Zdjęcia, podpis klienta i godzina zamknięcia zapisane przy zleceniu." },
    ],
  },
  faq: [
    { question: "Czy serwisant musi instalować aplikację?", answer: "Nie. Formularz działa w przeglądarce telefonu." },
    { question: "Czy protokół działa bez internetu?", answer: "Tak, dane zapisują się w telefonie i wysyłają po odzyskaniu połączenia." },
    { question: "Czy podpis na ekranie jest ważny?", answer: "Dokumentuje akceptację prac przez klienta. Jeśli potrzebujecie innej formy podpisu, dobieramy ją przy wdrożeniu." },
    { question: "Czy faktura wyjdzie automatycznie?", answer: "Faktura powstaje automatycznie, ale wysyła ją biuro po sprawdzeniu." },
    { question: "Czy obsłużycie nasz wzór protokołu?", answer: "Tak. Formularz odwzorowuje wasz wzór i może go uprościć." },
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["airtable", "ksef", "n8n"],
  relatedArticleSlugs: ["ai-dla-serwisantow", "program-do-zarzadzania-serwisem", "cyfryzacja-danych-w-firmie"],
};
