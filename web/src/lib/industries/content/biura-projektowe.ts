import type { IndustryPageContent } from "../types";

export const biuraProjektowe: IndustryPageContent = {
  industrySlug: "biura-projektowe",
  name: "Biura projektowe i architektoniczne",
  excerpt: "Automatyzacja pracy biur projektowych i pracowni architektonicznych: zapytania i oferty, projekty i terminy, dokumentacja i wersje, uzgodnienia, czas pracy i komunikacja z inwestorem.",
  metaTitle: "Automatyzacja biura projektowego i pracowni architekta",
  metaDescription:
    "Automatyzujemy pracę biur projektowych: oferty, terminy projektów, obieg dokumentacji, uzgodnienia, czas pracy, rentowność i kontakt z inwestorem.",
  primaryKeyword: "automatyzacja biura projektowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: biura projektowe",
    title: "Automatyzacja biura projektowego: projektanci przy projektach, nie przy administracji",
    lead: "Projektant powinien projektować. Tymczasem spora część dnia w biurze projektowym to oferty, pilnowanie terminów, wysyłanie kolejnych wersji dokumentacji, śledzenie uzgodnień, uzupełnianie czasu pracy i odpowiadanie inwestorowi na pytania o status. Pomagamy biurom projektowym i pracowniom architektonicznym zautomatyzować tę pracę na narzędziach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Oferty i terminy projektów pod kontrolą",
      "Dokumentacja i uzgodnienia bez szukania w mailach",
      "Czas pracy i rentowność projektów na bieżąco",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Pracownie architektoniczne, biura projektowe konstrukcyjne, instalacyjne i drogowe" },
    { label: "Co automatyzujemy", value: "Oferty, terminy, dokumentacja, uzgodnienia, czas pracy, kontakt z inwestorem" },
    { label: "Jak", value: "Obok programów projektowych i narzędzi, których używacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System pilnuje organizacji, projektant odpowiada za projekt" },
  ],
  symptoms: {
    title: "Po czym poznać, że biuro potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy organizacyjnej da się przenieść na system.",
    items: [
      "Oferta na projekt powstaje od zera, a zakres prac opisuje się za każdym razem inaczej.",
      "Terminy etapów i uzgodnień pilnuje się w kalendarzach poszczególnych projektantów.",
      "Inwestor dostaje różne wersje dokumentacji i nie wie, która jest aktualna.",
      "Status wniosków i uzgodnień trzeba sprawdzać w mailach i papierach.",
      "Czas pracy uzupełnia się na koniec miesiąca z pamięci.",
      "Nie wiadomo, które projekty są rentowne, a które przekroczyły budżet godzin.",
    ],
  },
  intro: {
    title: "Automatyzacja w biurze projektowym: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Biuro projektowe łączy pracę twórczą i inżynierską z dużą ilością organizacji. Każdy projekt to oferta, umowa, etapy, terminy, wersje dokumentacji, uzgodnienia z urzędami i gestorami sieci, uwagi inwestora, czas pracy zespołu i branżystów. Ta organizacja zajmuje projektantom i kierownikom projektów sporą część czasu. To właśnie ją automatyzujemy.",
      "Automatyzacja nie dotyka projektowania. Decyzje projektowe, rozwiązania techniczne, odpowiedzialność wynikająca z uprawnień i rozmowy z inwestorem o koncepcji zostają przy projektantach. System pilnuje terminów, prowadzi rejestr dokumentacji i uzgodnień, przygotowuje oferty z szablonów i zestawia czas pracy z budżetem. AI pomaga przy opisach, streszczeniach dokumentów i korespondencji.",
      "Nie wymieniamy programów projektowych. Budujemy obok nich to, czego brakuje: rejestr projektów, ofert i dokumentacji, przypomnienia, połączenia z pocztą, dyskiem i programem do faktur, raporty. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze biura.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w biurach projektowych",
    lead: "Od zapytania inwestora do rozliczenia projektu. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Zapytania i oferty", body: "Zakres, etapy i cena z szablonów i doświadczeń z poprzednich projektów." },
      { title: "Projekty i terminy", body: "Etapy, terminy i obciążenie zespołu w jednym miejscu." },
      { title: "Dokumentacja i wersje", body: "Rejestr dokumentów, wersji i przekazań do inwestora i wykonawcy." },
      { title: "Uzgodnienia", body: "Wnioski, terminy odpowiedzi i statusy uzgodnień." },
      { title: "Czas pracy", body: "Godziny według projektów i etapów, bez uzupełniania na koniec miesiąca." },
      { title: "Rentowność", body: "Czas pracy i koszty branżystów względem wynagrodzenia." },
      { title: "Komunikacja z inwestorem", body: "Uwagi, zmiany, akceptacje i status projektu." },
      { title: "Faktury", body: "Faktury za etapy po akceptacji, KSeF." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w biurze projektowym",
    lead: "Typowe przepływy, które budujemy w biurach projektowych. Decyzje projektowe zostają przy projektantach.",
    items: [
      {
        title: "Nowe zapytanie",
        trigger: "Inwestor pyta o projekt domu jednorodzinnego",
        steps: ["Zapytanie w rejestrze z formularzem o potrzeby i działkę", "Szkic oferty z zakresem i etapami z szablonu", "Kierownik projektu sprawdza, dopasowuje i wysyła"],
        result: "Oferta w dniu zapytania, z jasnym zakresem prac.",
      },
      {
        title: "Przekazanie dokumentacji",
        trigger: "Projektant kończy wersję projektu budowlanego",
        steps: ["Dokument w rejestrze z numerem wersji", "Przekazanie do inwestora z listą zmian", "Potwierdzenie odbioru i termin na uwagi"],
        result: "Inwestor wie, która wersja jest aktualna, a biuro ma ślad przekazania.",
      },
      {
        title: "Termin uzgodnienia",
        trigger: "Zbliża się termin odpowiedzi gestora sieci",
        steps: ["Przypomnienie dla projektanta", "Szkic pisma ponaglającego", "Aktualizacja statusu w harmonogramie projektu"],
        result: "Uzgodnienia nie opóźniają projektu bez wiedzy kierownika.",
      },
    ],
  },
  security: {
    title: "Dokumentacja i dane inwestorów",
    lead: "Projekty to dokumentacja chroniona prawem autorskim, dane inwestorów i umowy. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze biura." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Dokumentacja projektowa", body: "Rysunki i modele zostają w programach i na dysku biura, automatyzacja korzysta z ich metadanych." },
      { title: "Uprawnienia", body: "Projektant widzi swoje projekty, branżysta swoje zadania, inwestor swoje dokumenty." },
      { title: "Ślad działań", body: "Każde przekazanie dokumentacji i automatyczna operacja są zapisane." },
      { title: "Ludzie decydują", body: "Rozwiązania projektowe, oferty i pisma zatwierdza projektant lub kierownik projektu." },
    ],
  },
  example: {
    title: "Biuro projektowe przed i po automatyzacji",
    lead: "Przykład pracowni architektonicznej z kilkunastoma projektantami i współpracującymi branżystami.",
    rows: [
      { label: "Oferty", before: "Od zera.", after: "Szkic z szablonu i poprzednich projektów." },
      { label: "Terminy", before: "Kalendarze projektantów.", after: "Harmonogram projektu i przypomnienia." },
      { label: "Dokumentacja", before: "Wersje w mailach.", after: "Rejestr wersji i przekazań." },
      { label: "Uzgodnienia", before: "W mailach i papierach.", after: "Rejestr ze statusami." },
      { label: "Rentowność", before: "Po zakończeniu projektu.", after: "Na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w biurze projektowym",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie zakłócać trwających projektów.",
    phases: [
      { title: "Przegląd biura", duration: "kilka dni", body: "Rozmawiamy z właścicielem, kierownikiem projektu i projektantem, przeglądamy narzędzia i dokumenty, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy i informacja o używanych narzędziach." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ, szablony i zasady: co robi system, co robi AI, a co zawsze robi człowiek.", fromYou: "Akceptacja projektu i przykładowe dokumenty." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie i testujemy je na kilku projektach.", fromYou: "Kierownik projektu oceniający testy." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie dla wszystkich projektów i pilnujemy działania.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla biur, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. rejestru dokumentacji", "Połączenie z narzędziami biura", "Szkolenie zespołu"] },
      { name: "Całe biuro", description: "Dla biur, które chcą uporządkować pracę od zapytania do rozliczenia.", includes: ["Kilka połączonych procesów: oferty, terminy, dokumentacja, uzgodnienia, czas pracy", "Komunikacja z inwestorem", "Integracja z dyskiem i programem do faktur", "Raporty rentowności", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla biur, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. streszczeń dokumentów", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "liczba projektów, projektantów i branżystów,",
      "sposób przechowywania dokumentacji,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w biurach projektowych",
    items: [
      { risk: "Inwestor dostanie nieaktualną wersję dokumentacji.", mitigation: "Przekazania idą z rejestru wersji, a poprzednie wersje są oznaczone jako zastąpione." },
      { risk: "Przeoczony termin uzgodnienia.", mitigation: "Przypomnienia z wyprzedzeniem i lista uzgodnień w toku dla kierownika projektu." },
      { risk: "Oferta z AI z błędnym zakresem.", mitigation: "Szkic oferty sprawdza i dopasowuje kierownik projektu." },
      { risk: "Projektanci nie będą zapisywać czasu.", mitigation: "Zapis czasu projektujemy tak, żeby zajmował chwilę i był połączony z kalendarzem." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja dotyczy projektowania?", answer: "Nie. Automatyzujemy organizację wokół projektów: oferty, terminy, dokumentację, uzgodnienia, czas pracy i komunikację." },
    { question: "Czy łączycie się z programami projektowymi?", answer: "Korzystamy z plików i metadanych, które programy zapisują na dysku. Samych programów projektowych nie zmieniamy." },
    { question: "Czy musimy kupić system do zarządzania projektami?", answer: "Nie zawsze. Często wystarczy rejestr projektów dopasowany do biura, połączony z kalendarzami i dyskiem." },
    { question: "Czy pomożecie przy uzgodnieniach z urzędami i gestorami?", answer: "Pilnujemy terminów i statusów oraz przygotowujemy szkice pism. Treść i odpowiedzialność za wnioski należą do projektanta." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od rejestru dokumentacji i terminów albo od ofert i czasu pracy. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni, łącznie z testem na kilku projektach." },
    { question: "Czy pracujecie z biurami branżowymi?", answer: "Tak, z biurami konstrukcyjnymi, instalacyjnymi i drogowymi. Procesy są podobne, różnią się dokumenty i uzgodnienia." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "integracje-systemow"],
  relatedProcessSlugs: ["ofertowanie", "obieg-umow", "raporty-finansowe", "obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365", "ksef"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
