import type { IndustryPageContent } from "../types";

export const hurtowniePracaHandlowcow: IndustryPageContent = {
  industrySlug: "hurtownie-i-dystrybucja",
  subSlug: "praca-handlowcow",
  name: "Praca handlowców",
  excerpt: "CRM, który handlowcy faktycznie uzupełniają: notatki z wizyt, przypomnienia o klientach, sygnały z danych sprzedaży i raporty bez arkuszy.",
  metaTitle: "Praca handlowców w hurtowni: CRM, wizyty, raporty",
  metaDescription:
    "Automatyzujemy pracę handlowców w hurtowni: notatki z wizyt w CRM, przypomnienia o klientach, sygnały spadku zamówień, leady i raporty sprzedaży.",
  primaryKeyword: "praca handlowca w hurtowni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Hurtownie: praca handlowców",
    title: "Handlowcy u klientów, a nie w raportach",
    lead: "Handlowiec w hurtowni dzieli czas między klientów, biuro i raporty. Notatki z wizyt są w notesie, CRM uzupełnia się w piątek wieczorem, a o tym, że klient przestał zamawiać, handlowiec dowiaduje się po miesiącu. Automatyzujemy tę część pracy: notatki trafiają do CRM z dyktowania, system podpowiada, do kogo zadzwonić, i ostrzega o spadku zamówień, a raporty sprzedaży powstają same.",
    bullets: [
      "Notatki z wizyt w CRM z dyktowania",
      "Sygnały o klientach, którzy przestają zamawiać",
      "Raporty sprzedaży bez arkuszy",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Hurtownie i dystrybutorzy z zespołami handlowców w terenie i w biurze" },
    { label: "Co automatyzujemy", value: "Notatki, zadania, sygnały z danych, leady, raporty handlowców" },
    { label: "Narzędzia", value: "CRM, ERP, telefon, model AI, n8n" },
    { label: "Zasada", value: "System podpowiada, handlowiec decyduje" },
  ],
  symptoms: {
    title: "Kiedy pracę handlowców warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, handlowcy tracą czas na administrację, a firma traci klientów niezauważenie.",
    items: [
      "CRM jest uzupełniany nieregularnie, a notatki z wizyt są w notesach.",
      "O spadku zamówień klienta handlowiec dowiaduje się po fakcie.",
      "Raport tygodniowy handlowca to kilka godzin składania danych.",
      "Leady z formularza na stronie czekają na kontakt kilka dni.",
      "Kierownik sprzedaży nie widzi na bieżąco, co dzieje się u najważniejszych klientów.",
      "Gdy handlowiec odchodzi, wiedza o jego klientach odchodzi razem z nim.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja pracy handlowców",
    paragraphs: [
      "Po wizycie handlowiec dyktuje notatkę w telefonie. AI zamienia ją na uporządkowany wpis w CRM: z kim rozmawiał, czego dotyczyła rozmowa, jakie są ustalenia i następne kroki. Zadania i przypomnienia tworzą się automatycznie, a handlowiec sprawdza wpis w kilka sekund zamiast pisać go od zera.",
      "System analizuje dane sprzedaży z ERP i podpowiada handlowcom, gdzie warto zadzwonić: klient, który zamawia rzadziej niż zwykle, klient, który przestał kupować jakąś grupę produktów, klient, któremu kończy się towar sezonowy. To sygnały, a nie decyzje. Handlowiec ocenia, czy i jak zareagować.",
      "Leady z formularza na stronie trafiają do właściwego handlowca według regionu lub branży, z informacjami o firmie. Raporty sprzedaży dla handlowców i kierownika powstają automatycznie z ERP i CRM, więc piątkowe składanie arkuszy przestaje być potrzebne.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja pracy handlowców",
    lead: "Zakres dopasowujemy do sposobu pracy zespołu i CRM.",
    items: [
      { title: "Notatki z dyktowania", body: "Notatka z wizyty zamieniona przez AI na wpis w CRM z ustaleniami i zadaniami." },
      { title: "Zadania i przypomnienia", body: "Następne kroki z notatek i przypomnienia o klientach bez kontaktu." },
      { title: "Sygnały z danych sprzedaży", body: "Klienci zamawiający rzadziej lub mniej niż zwykle." },
      { title: "Leady ze strony", body: "Przypisanie do handlowca z informacjami o firmie." },
      { title: "Przygotowanie do wizyty", body: "Podsumowanie klienta: zamówienia, należności, otwarte sprawy." },
      { title: "Raporty handlowców", body: "Sprzedaż, marża, wizyty i oferty bez składania arkuszy." },
      { title: "Widok kierownika", body: "Sytuacja u najważniejszych klientów i aktywność zespołu." },
      { title: "Przekazanie klientów", body: "Historia klienta w CRM, gdy zmienia się handlowiec." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wizyty u klienta do zadania w CRM i od danych w ERP do telefonu do klienta.",
    items: [
      {
        title: "Notatka po wizycie",
        trigger: "Handlowiec dyktuje notatkę w telefonie",
        steps: ["AI porządkuje notatkę: ustalenia, potrzeby, następne kroki", "Wpis w CRM przy kliencie i zadania z terminami", "Handlowiec sprawdza i zatwierdza wpis"],
        result: "CRM jest aktualny, a handlowiec nie pisze raportów wieczorem.",
      },
      {
        title: "Klient zamawia mniej",
        trigger: "Zamówienia klienta spadają poniżej jego zwykłego poziomu",
        steps: ["Sygnał dla handlowca z danymi o zamówieniach", "Podsumowanie klienta przed rozmową", "Zadanie kontaktu w CRM"],
        result: "Handlowiec reaguje, zanim klient całkiem przejdzie do konkurencji.",
      },
    ],
  },
  example: {
    title: "Praca handlowców przed i po automatyzacji",
    lead: "Przykład dystrybutora z kilkunastoma handlowcami w terenie.",
    rows: [
      { label: "Notatki", before: "W notesie, CRM uzupełniany w piątek.", after: "Z dyktowania, w CRM po każdej wizycie." },
      { label: "Spadki zamówień", before: "Zauważane po miesiącu.", after: "Sygnał dla handlowca na bieżąco." },
      { label: "Raporty", before: "Kilka godzin składania arkuszy.", after: "Gotowe z ERP i CRM." },
      { label: "Leady", before: "Czekają kilka dni.", after: "U właściwego handlowca od razu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od kilku handlowców, którzy chcą testować, a potem włączamy cały zespół.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy CRM, dane w ERP i sposób pracy handlowców.", fromYou: "Rozmowa z kierownikiem sprzedaży i dwoma handlowcami." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy format notatek, sygnały, zasady przypisania leadów i raporty.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i testujemy je z kilkoma handlowcami.", fromYou: "Handlowcy testujący rozwiązanie." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały zespół i dopracowujemy sygnały na podstawie doświadczeń.", fromYou: "Uwagi handlowców." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od notatek i raportów, a sygnały z danych dodać później.",
    items: [
      { name: "CRM bez wysiłku", description: "Dla firm, w których CRM jest pusty.", includes: ["Notatki z dyktowania", "Zadania i przypomnienia", "Leady ze strony", "Przekazanie klientów"] },
      { name: "CRM i raporty", description: "Dla firm, które chcą skończyć z arkuszami.", includes: ["Wszystko z wariantu CRM bez wysiłku", "Raporty handlowców", "Widok kierownika", "Przygotowanie do wizyty"] },
      { name: "Sprzedaż oparta na danych", description: "Dla firm, które chcą reagować wcześniej.", includes: ["Wszystko z wariantu CRM i raporty", "Sygnały z danych sprzedaży", "Podpowiedzi dla handlowców", "Raport utraconych klientów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba handlowców,",
      "CRM i jego możliwości integracji,",
      "dostęp do danych sprzedaży w ERP,",
      "zakres sygnałów i raportów,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI źle zrozumie notatkę.", mitigation: "Handlowiec sprawdza i zatwierdza wpis przed zapisem w CRM." },
      { risk: "Za dużo sygnałów i przypomnień.", mitigation: "Progi ustalamy z zespołem i korygujemy po pierwszych tygodniach." },
      { risk: "Handlowcy odbiorą to jako kontrolę.", mitigation: "Rozwiązanie projektujemy tak, żeby oszczędzało czas handlowcom, a nie tylko dawało dane kierownikowi." },
      { risk: "Dane klientów w niewłaściwym miejscu.", mitigation: "Notatki przetwarzane są na kontach firmowych, w planach bez trenowania na danych." },
    ],
  },
  faq: [
    { question: "Czy handlowcy muszą zmienić CRM?", answer: "Nie. Pracujemy z CRM, którego używacie, np. HubSpot lub Pipedrive, albo z modułem CRM w ERP." },
    { question: "Czy dyktowanie działa w terenie?", answer: "Tak. Wystarczy telefon. Nagranie lub tekst z dyktowania trafia do przetworzenia, a wpis do CRM po zatwierdzeniu." },
    { question: "Skąd biorą się sygnały o klientach?", answer: "Z danych sprzedaży w ERP, np. częstotliwości i wartości zamówień. Progi ustalamy z zespołem." },
    { question: "Czy AI będzie rozmawiać z klientami za handlowca?", answer: "Nie. AI pomaga handlowcowi w notatkach, przygotowaniu do wizyty i raportach. Rozmowy prowadzi handlowiec." },
    { question: "Czy to pomoże przy zmianie handlowca?", answer: "Tak. Gdy historia klienta jest w CRM, nowy handlowiec ma pełny obraz współpracy." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-raportow", "agenci-ai"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["hubspot", "pipedrive", "n8n", "chatgpt"],
  relatedArticleSlugs: ["ai-w-handlu-b2b", "co-zautomatyzowac-w-hurtowni", "automatyzacja-obslugi-leadow-sprzedazowych"],
};
