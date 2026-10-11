import type { IndustryPageContent } from "../types";

export const placowkiMedyczneGrafiki: IndustryPageContent = {
  industrySlug: "placowki-medyczne",
  subSlug: "grafiki-lekarzy",
  name: "Grafiki lekarzy i gabinetów",
  excerpt: "Grafik lekarzy, gabinetów i urządzeń w jednym miejscu, dostępność zgłaszana przez lekarzy, zmiany z informacją dla pacjentów i raport obłożenia.",
  metaTitle: "Grafik pracy lekarzy i gabinetów: automatyzacja",
  metaDescription:
    "Automatyzujemy grafiki w placówce medycznej: dostępność lekarzy, gabinety i urządzenia w jednym miejscu, zmiany z informacją dla pacjentów i obłożenie.",
  primaryKeyword: "grafik pracy lekarzy",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Placówki medyczne: grafiki",
    title: "Grafik lekarzy, gabinetów i urządzeń bez arkusza i telefonów",
    lead: "Lekarz przysyła dostępność SMS-em, inny mailem, a trzeci mówi przy kawie. Kierownik rejestracji układa grafik w arkuszu, pilnuje, żeby gabinety i urządzenia się nie dublowały, a gdy lekarz odwołuje dyżur, dzwoni do pacjentów. Automatyzujemy grafiki: lekarze zgłaszają dostępność w jednym miejscu, system pilnuje gabinetów i urządzeń, a zmiany trafiają do pacjentów automatycznie.",
    bullets: [
      "Dostępność lekarzy zgłaszana w jednym miejscu",
      "Gabinety i urządzenia bez konfliktów",
      "Zmiany w grafiku z informacją dla pacjentów",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Przychodnie i centra medyczne z wieloma lekarzami i gabinetami" },
    { label: "Co automatyzujemy", value: "Dostępność, grafik, gabinety, urządzenia, zmiany, obłożenie" },
    { label: "Narzędzia", value: "System gabinetowy, kalendarze, formularz, SMS, n8n" },
    { label: "Zasada", value: "Grafik zatwierdza kierownik placówki" },
  ],
  symptoms: {
    title: "Kiedy grafiki warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, układanie grafiku zabiera dni.",
    items: [
      "Lekarze zgłaszają dostępność różnymi kanałami.",
      "Grafik powstaje w arkuszu i jest przepisywany do systemu.",
      "Gabinety lub urządzenia są zarezerwowane podwójnie.",
      "Odwołanie dyżuru oznacza obdzwanianie pacjentów.",
      "Nie wiadomo, które gabinety są niewykorzystane.",
      "Rozliczenie godzin pracy lekarzy wymaga sprawdzania grafiku.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja grafików",
    paragraphs: [
      "Lekarze zgłaszają dostępność na kolejny miesiąc przez prosty formularz lub kalendarz. Kierownik placówki widzi wszystkie zgłoszenia w jednym miejscu, razem z gabinetami i urządzeniami, których wymagają usługi lekarza. System wskazuje konflikty, np. dwóch lekarzy w jednym gabinecie albo urządzenie potrzebne w dwóch miejscach.",
      "Zatwierdzony grafik trafia do systemu gabinetowego, a terminy do rejestracji online. Lekarze dostają swój grafik w kalendarzu. Gdy lekarz zgłasza zmianę, kierownik ją zatwierdza, a pacjenci umówieni na odwołane terminy dostają wiadomość z propozycją innego terminu.",
      "Raport obłożenia pokazuje wykorzystanie gabinetów i urządzeń oraz godziny pracy lekarzy, co ułatwia planowanie i rozliczenia.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja grafików",
    lead: "Zakres dopasowujemy do wielkości placówki i systemu gabinetowego.",
    items: [
      { title: "Zgłaszanie dostępności", body: "Formularz lub kalendarz dla lekarzy." },
      { title: "Gabinety i urządzenia", body: "Wymagania usług i rezerwacje bez konfliktów." },
      { title: "Konflikty", body: "Wskazane przed zatwierdzeniem." },
      { title: "Zatwierdzenie", body: "Przez kierownika placówki." },
      { title: "System gabinetowy", body: "Grafik i terminy przekazane do systemu." },
      { title: "Kalendarze lekarzy", body: "Grafik w kalendarzu każdego lekarza." },
      { title: "Zmiany", body: "Informacja i propozycje terminów dla pacjentów." },
      { title: "Raport obłożenia", body: "Gabinety, urządzenia i godziny pracy." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od dostępności do grafiku.",
    items: [
      {
        title: "Grafik na miesiąc",
        trigger: "Lekarze zgłaszają dostępność",
        steps: ["Zestawienie zgłoszeń z gabinetami i urządzeniami", "Wskazanie konfliktów", "Zatwierdzenie i przekazanie do systemu"],
        result: "Grafik gotowy w godziny, a nie w dni.",
      },
      {
        title: "Odwołany dyżur",
        trigger: "Lekarz zgłasza nieobecność",
        steps: ["Zatwierdzenie zmiany", "Wiadomości do pacjentów z propozycją terminów", "Lista pacjentów do kontaktu telefonicznego"],
        result: "Pacjenci wiedzą o zmianie od razu.",
      },
    ],
  },
  example: {
    title: "Grafiki przed i po automatyzacji",
    lead: "Przykład centrum medycznego z kilkudziesięcioma lekarzami i kilkunastoma gabinetami.",
    rows: [
      { label: "Dostępność", before: "SMS, mail, rozmowy.", after: "Jeden formularz." },
      { label: "Konflikty", before: "Wychodzą w dniu wizyty.", after: "Wskazane przed zatwierdzeniem." },
      { label: "Zmiany", before: "Obdzwanianie.", after: "Wiadomości z propozycją." },
      { label: "Obłożenie", before: "Nieznane.", after: "Raport." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej placówce.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od zbierania dostępności i konfliktów gabinetów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś powstaje grafik i jakie są zasady.", fromYou: "Rozmowa z kierownikiem placówki." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy formularz, zasady gabinetów i urządzeń.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy przepływ i testujemy na jednym miesiącu.", fromYou: "Kierownik i lekarze w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy całą placówkę i rozwijamy raporty.", fromYou: "Uwagi kierownika." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od zbierania dostępności.",
    items: [
      { name: "Dostępność", description: "Dla placówek, które chcą skończyć z SMS-ami.", includes: ["Zgłaszanie dostępności", "Zestawienie", "Zatwierdzenie", "Kalendarze lekarzy"] },
      { name: "Grafik i zasoby", description: "Dla placówek z wieloma gabinetami.", includes: ["Wszystko z wariantu Dostępność", "Gabinety i urządzenia", "Konflikty", "Przekazanie do systemu"] },
      { name: "Grafik i pacjenci", description: "Dla placówek z częstymi zmianami.", includes: ["Wszystko z wariantu Grafik i zasoby", "Informacje dla pacjentów przy zmianach", "Raport obłożenia", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba lekarzy, gabinetów i urządzeń,",
      "możliwości integracji systemu gabinetowego,",
      "złożoność zasad,",
      "kanały powiadomień,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Konflikt nie zostanie wykryty.", mitigation: "Wymagania usług są zapisane w systemie, a grafik zatwierdza człowiek." },
      { risk: "Pacjent nie odczyta wiadomości o zmianie.", mitigation: "Lista pacjentów do kontaktu telefonicznego." },
      { risk: "Lekarze nie będą zgłaszać dostępności w formularzu.", mitigation: "Formularz jest prosty, a kalendarz można połączyć z ich kalendarzem." },
      { risk: "System gabinetowy nie przyjmuje grafiku z zewnątrz.", mitigation: "Sprawdzamy to na początku i dobieramy zakres." },
    ],
  },
  faq: [
    { question: "Czy lekarze muszą korzystać z nowego narzędzia?", answer: "Wystarczy prosty formularz lub połączenie z kalendarzem, z którego korzystają." },
    { question: "Czy grafik trafi do systemu gabinetowego?", answer: "Tak, jeśli system na to pozwala. Sprawdzamy to przy przeglądzie." },
    { question: "Czy system sam ułoży grafik?", answer: "Zestawia zgłoszenia i wskazuje konflikty. Grafik zatwierdza kierownik." },
    { question: "Co z pacjentami przy odwołanym dyżurze?", answer: "Dostają wiadomość z propozycją terminów, a rejestracja listę osób do kontaktu." },
    { question: "Czy raport pomoże w rozliczeniu lekarzy?", answer: "Tak, pokazuje godziny pracy i wizyty, co ułatwia rozliczenia według umów." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-hr", "integracje-systemow", "automatyzacja-raportow"],
  relatedProcessSlugs: ["umawianie-wizyt"],
  relatedToolSlugs: ["microsoft-365", "google-workspace", "n8n"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-przychodni", "nieodwolane-wizyty-pacjentow", "airtable-w-praktyce-zastosowania"],
};
