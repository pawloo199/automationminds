import type { IndustryPageContent } from "../types";

export const firmySzkoleniowe: IndustryPageContent = {
  industrySlug: "firmy-szkoleniowe",
  name: "Firmy szkoleniowe",
  excerpt: "Automatyzacja pracy firm szkoleniowych i organizatorów kursów: zapisy i płatności, organizacja szkoleń, zapytania i oferty dla firm, certyfikaty i ankiety, trenerzy i dokumentacja.",
  metaTitle: "Automatyzacja firmy szkoleniowej i organizacji szkoleń",
  metaDescription:
    "Automatyzujemy pracę firm szkoleniowych: zapisy i płatności, organizacja szkoleń, oferty dla firm, certyfikaty, ankiety, rozliczenia trenerów, dokumenty.",
  primaryKeyword: "automatyzacja firmy szkoleniowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: firmy szkoleniowe",
    title: "Automatyzacja firmy szkoleniowej: więcej szkoleń bez więcej administracji",
    lead: "Każde szkolenie to zapisy, płatności, faktury, przypomnienia, sala, trener, materiały, lista obecności, certyfikaty i ankiety. Przy kilku szkoleniach w miesiącu da się to ogarnąć w arkuszu i skrzynce. Przy kilkudziesięciu administracja zaczyna ograniczać rozwój. Pomagamy firmom szkoleniowym zautomatyzować tę pracę na narzędziach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Zapisy, płatności i faktury bez przepisywania",
      "Przypomnienia, materiały i certyfikaty wysyłane automatycznie",
      "Oferty dla firm i rozliczenia trenerów pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy szkoleniowe, organizatorzy kursów i konferencji, szkoły językowe, centra szkoleniowe" },
    { label: "Co automatyzujemy", value: "Zapisy, płatności, organizacja, oferty, certyfikaty, ankiety, trenerzy, dokumentacja" },
    { label: "Jak", value: "Obok platformy zapisów i narzędzi, których używacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przygotowuje, zespół decyduje" },
  ],
  symptoms: {
    title: "Po czym poznać, że firma szkoleniowa potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy zespołu da się przenieść na system.",
    items: [
      "Zgłoszenia na szkolenia przepisuje się z formularza do arkusza i programu do faktur.",
      "Uczestnicy dopytują o płatność, fakturę, salę i materiały.",
      "Przypomnienia i materiały wysyła się ręcznie przed każdym szkoleniem.",
      "Certyfikaty powstają w edytorze tekstu, jeden po drugim.",
      "Zapytania od firm o szkolenia zamknięte czekają kilka dni na ofertę.",
      "Rozliczenia z trenerami i dokumentacja szkoleń dofinansowanych zabierają dni.",
    ],
  },
  intro: {
    title: "Automatyzacja w firmie szkoleniowej: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Firma szkoleniowa sprzedaje wiedzę trenerów i dobrze zorganizowane szkolenia. Wokół każdego szkolenia jest jednak dużo pracy administracyjnej: zapisy, płatności, faktury, przypomnienia, logistyka, materiały, listy obecności, certyfikaty, ankiety, rozliczenia z trenerami. Ta praca rośnie z każdym nowym szkoleniem i każdym uczestnikiem. To właśnie ją automatyzujemy.",
      "Automatyzacja nie zastępuje trenerów ani opiekunów szkoleń. Program szkolenia, prowadzenie zajęć, rozmowy z klientami firmowymi i decyzje o ofercie zostają przy ludziach. System przyjmuje zapisy, pilnuje płatności, wysyła przypomnienia i materiały, generuje certyfikaty, zbiera ankiety i przygotowuje rozliczenia. AI pomaga przy ofertach dla firm, podsumowaniach ankiet, opisach szkoleń i materiałach.",
      "Nie wymieniamy platformy zapisów, systemu e-learningowego ani programu do faktur. Budujemy obok nich to, czego brakuje: połączenia, przypomnienia, certyfikaty, rejestr szkoleń, rozliczenia, raporty. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze firmy.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w firmach szkoleniowych",
    lead: "Od zapisu uczestnika do rozliczenia szkolenia. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Zapisy i płatności", body: "Zgłoszenia, płatności, faktury i potwierdzenia bez przepisywania." },
      { title: "Organizacja szkoleń", body: "Sale, trenerzy, materiały, catering i przypomnienia dla uczestników." },
      { title: "Zapytania i oferty dla firm", body: "Analiza potrzeb, oferta szkolenia zamkniętego i follow-up." },
      { title: "Certyfikaty i ankiety", body: "Lista obecności, certyfikaty, ankiety i ich podsumowanie." },
      { title: "Trenerzy", body: "Dostępność, umowy, materiały i rozliczenia trenerów." },
      { title: "Dokumentacja szkoleń", body: "Listy obecności, umowy i dokumenty do rozliczeń dofinansowań." },
      { title: "Szkolenia online", body: "Linki, dostęp do platformy i nagrań dla uczestników." },
      { title: "Raporty", body: "Zapisy, przychody, obłożenie i oceny według szkoleń i trenerów." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w firmie szkoleniowej",
    lead: "Typowe przepływy, które budujemy w firmach szkoleniowych. Decyzje zostają przy zespole.",
    items: [
      {
        title: "Zapis na szkolenie otwarte",
        trigger: "Uczestnik wypełnia formularz zapisu",
        steps: ["Potwierdzenie i informacja o płatności", "Faktura po wpłacie i przypisanie do listy uczestników", "Przypomnienie z salą lub linkiem i materiałami przed szkoleniem"],
        result: "Uczestnik ma wszystkie informacje, a zespół nie przepisuje zgłoszeń.",
      },
      {
        title: "Po szkoleniu",
        trigger: "Trener zamyka listę obecności",
        steps: ["Certyfikaty dla obecnych uczestników", "Ankieta oceniająca szkolenie", "Podsumowanie ankiet dla trenera i opiekuna"],
        result: "Certyfikaty i ankiety wychodzą tego samego dnia.",
      },
      {
        title: "Zapytanie od firmy",
        trigger: "Firma pyta o szkolenie zamknięte",
        steps: ["Formularz analizy potrzeb", "Szkic oferty z programu i cennika", "Przypomnienie dla opiekuna o kontakcie po wysłaniu oferty"],
        result: "Oferta wychodzi w dzień, a nie po tygodniu.",
      },
    ],
  },
  security: {
    title: "Dane uczestników i klientów",
    lead: "Szkolenia to dane osobowe uczestników, dane firm i umowy. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Uprawnienia", body: "Trener widzi swoich uczestników, opiekun swoje szkolenia, zarząd całość." },
      { title: "Zgody uczestników", body: "Zgody na komunikację marketingową oddzielone od komunikacji o szkoleniu." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Ludzie decydują", body: "Oferty, ceny i decyzje wobec uczestników zatwierdza człowiek." },
    ],
  },
  example: {
    title: "Firma szkoleniowa przed i po automatyzacji",
    lead: "Przykład firmy prowadzącej kilkadziesiąt szkoleń otwartych i zamkniętych miesięcznie.",
    rows: [
      { label: "Zapisy", before: "Formularz, arkusz, faktura ręcznie.", after: "Zapis, płatność i faktura w jednym przepływie." },
      { label: "Przypomnienia", before: "Wysyłane ręcznie.", after: "Automatycznie przed szkoleniem." },
      { label: "Certyfikaty", before: "Edytor tekstu.", after: "Generowane z listy obecności." },
      { label: "Oferty dla firm", before: "Kilka dni.", after: "Szkic w dniu zapytania." },
      { label: "Trenerzy", before: "Rozliczenia w arkuszu.", after: "Zestawienia według umów." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w firmie szkoleniowej",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie zakłócać zaplanowanych szkoleń.",
    phases: [
      { title: "Przegląd firmy", duration: "kilka dni", body: "Rozmawiamy z właścicielem, opiekunem szkoleń i osobą od rozliczeń, przeglądamy narzędzia, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy i informacja o używanych narzędziach." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ, szablony i zasady: co robi system, co robi AI, a co zawsze robi człowiek.", fromYou: "Akceptacja projektu i przykładowe dokumenty." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie i testujemy je na kilku szkoleniach.", fromYou: "Opiekun szkoleń oceniający testy." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie dla wszystkich szkoleń i pilnujemy działania.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla firm, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. zapisów i faktur", "Połączenie z narzędziami firmy", "Szkolenie zespołu"] },
      { name: "Cała firma", description: "Dla firm, które chcą uporządkować pracę od zapisu do rozliczenia.", includes: ["Kilka połączonych procesów: zapisy, organizacja, certyfikaty, ankiety, trenerzy", "Oferty dla firm z AI", "Integracja z platformą zapisów i programem do faktur", "Raporty dla właściciela", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla firm, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. odpowiedzi uczestnikom", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "liczba szkoleń, uczestników i trenerów,",
      "możliwości integracji platformy zapisów i e-learningu,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w firmach szkoleniowych",
    items: [
      { risk: "Uczestnik dostanie błędne informacje o szkoleniu.", mitigation: "Informacje pochodzą z rejestru szkoleń, a zmiany trafiają do uczestników automatycznie." },
      { risk: "Certyfikat dla osoby nieobecnej.", mitigation: "Certyfikaty powstają tylko z zamkniętej listy obecności." },
      { risk: "Oferta z AI z błędnym zakresem lub ceną.", mitigation: "Szkic oferty sprawdza opiekun przed wysłaniem." },
      { risk: "Dokumentacja dofinansowania niezgodna z wymaganiami.", mitigation: "Wymagania określa operator programu, a my porządkujemy dokumenty według listy przygotowanej przez firmę." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja zastąpi opiekuna szkoleń?", answer: "Nie. Przejmuje zapisy, przypomnienia, certyfikaty i rozliczenia. Kontakt z klientami i uczestnikami w sprawach nietypowych zostaje przy opiekunie." },
    { question: "Czy łączycie się z platformami zapisów i e-learningu?", answer: "Tak, jeśli udostępniają dane przez API lub eksport. Zakres sprawdzamy przy przeglądzie." },
    { question: "Czy certyfikaty mogą być w naszym wzorze?", answer: "Tak. Certyfikat powstaje z waszego szablonu z danymi uczestnika i szkolenia." },
    { question: "Czy pomożecie przy szkoleniach dofinansowanych?", answer: "Pomagamy uporządkować dokumentację według wymagań, które przekazuje firma. Zasady programów określają ich operatorzy." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od zapisów, płatności i faktur albo od certyfikatów i ankiet. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni, łącznie z testem na kilku szkoleniach." },
    { question: "Czy pracujecie ze szkołami językowymi?", answer: "Tak. Zapisy, płatności, grupy i komunikacja z uczestnikami działają podobnie." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "ofertowanie", "przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["n8n", "airtable", "google-workspace", "ksef"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-firmie-szkoleniowej", "sprzedaz-szkolen-dla-firm", "ankieta-poszkoleniowa"],
};
