import type { IndustryPageContent } from "../types";

export const firmySerwisowe: IndustryPageContent = {
  industrySlug: "firmy-serwisowe",
  name: "Firmy serwisowe i instalacyjne",
  excerpt: "Automatyzacja pracy firm serwisowych i instalacyjnych: zgłoszenia, planowanie wizyt serwisantów, protokoły, przeglądy okresowe, wyceny i rozliczenia zleceń.",
  metaTitle: "Automatyzacja firmy serwisowej i instalacyjnej",
  metaDescription:
    "Automatyzujemy pracę firm serwisowych i instalacyjnych: zgłoszenia, planowanie wizyt, protokoły na telefonie, przeglądy okresowe, wyceny i rozliczenia.",
  primaryKeyword: "automatyzacja firmy serwisowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: firmy serwisowe i instalacyjne",
    title: "Automatyzacja firmy serwisowej: serwisanci w terenie, nie przy papierach",
    lead: "W serwisie liczy się czas reakcji i to, czy serwisant przyjeżdża przygotowany. Tymczasem biuro spędza godziny na odbieraniu telefonów, układaniu grafiku, przepisywaniu protokołów i pilnowaniu przeglądów, a serwisanci wypełniają papiery wieczorem. Pomagamy firmom serwisowym i instalacyjnym zautomatyzować tę pracę na narzędziach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Zgłoszenia z kompletem informacji, zanim serwisant wyjedzie",
      "Protokoły na telefonie i faktura bez przepisywania",
      "Przeglądy okresowe pilnowane automatycznie",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy serwisowe, instalacyjne i utrzymania technicznego" },
    { label: "Co automatyzujemy", value: "Zgłoszenia, grafik, protokoły, przeglądy, wyceny, rozliczenia" },
    { label: "Jak", value: "Obok programów, których używacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przygotowuje, biuro i serwisant decydują" },
  ],
  symptoms: {
    title: "Po czym poznać, że serwis potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy biura i serwisantów da się przenieść na system.",
    items: [
      "Zgłoszenia przychodzą telefonem, mailem i SMS-em, a część informacji trzeba dopytywać.",
      "Grafik serwisantów układa się ręcznie i zmienia kilka razy dziennie.",
      "Protokoły są na papierze, a biuro przepisuje je do systemu i faktury.",
      "Przeglądy okresowe u klientów pilnuje się w arkuszu albo z pamięci.",
      "Serwisant przyjeżdża bez potrzebnej części, bo nikt nie wiedział, co się zepsuło.",
      "Faktura za zlecenie wychodzi kilka dni lub tygodni po wykonaniu pracy.",
    ],
  },
  intro: {
    title: "Automatyzacja w serwisie: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Firma serwisowa łączy obsługę klienta, logistykę i pracę techniczną. Biuro przyjmuje zgłoszenia, planuje wizyty, zamawia części i rozlicza zlecenia. Serwisanci jeżdżą do klientów, naprawiają, montują i dokumentują pracę. Spora część pracy biura i część pracy serwisantów to przepisywanie danych i pilnowanie terminów. To właśnie tę pracę automatyzujemy.",
      "Automatyzacja nie zastępuje serwisanta ani dyspozytora. Diagnoza, naprawa, decyzja o kolejności wizyt w nietypowej sytuacji i rozmowa z trudnym klientem zostają przy ludziach. System przyjmuje zgłoszenia, zbiera informacje, podpowiada terminy, prowadzi protokół i przygotowuje fakturę. AI pomaga przy porządkowaniu zgłoszeń, rozpoznaniu usterki ze zdjęcia i wyszukiwaniu informacji w dokumentacji urządzeń.",
      "Nie wymieniamy programów do zarządzania serwisem, jeśli działają. Budujemy obok nich to, czego brakuje: formularze zgłoszeń, połączenia z pocztą i kalendarzami, protokoły na telefonie, przypomnienia o przeglądach i połączenie z programem do faktur. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze firmy.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w firmach serwisowych",
    lead: "Od zgłoszenia klienta do faktury. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Zgłoszenia serwisowe", body: "Formularz ze zdjęciami, dane urządzenia i historia klienta w jednym miejscu." },
      { title: "Planowanie wizyt", body: "Grafik serwisantów według umiejętności, lokalizacji i pilności." },
      { title: "Protokoły na telefonie", body: "Praca, części, zdjęcia i podpis klienta bez papieru." },
      { title: "Przeglądy okresowe", body: "Terminy przeglądów z umów i przepisów, z przypomnieniem dla klienta." },
      { title: "Wyceny i oferty", body: "Oferty montażu i napraw z szablonów i cenników." },
      { title: "Części i magazyn", body: "Części użyte w zleceniu, stany w samochodach i zamówienia." },
      { title: "Rozliczenia zleceń", body: "Faktura z protokołu, w programie do faktur i KSeF." },
      { title: "Wiedza serwisowa", body: "Asystent przeszukujący instrukcje i historię napraw urządzeń." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w firmie serwisowej",
    lead: "Typowe przepływy, które budujemy w serwisach. Decyzje zostają przy dyspozytorach i serwisantach.",
    items: [
      {
        title: "Awaria u klienta",
        trigger: "Klient zgłasza awarię przez formularz",
        steps: ["Zgłoszenie z danymi urządzenia, zdjęciem i historią klienta", "Propozycja terminu według pilności i lokalizacji serwisantów", "Potwierdzenie dla klienta i zlecenie w telefonie serwisanta"],
        result: "Serwisant jedzie przygotowany, a klient wie, kiedy przyjedzie.",
      },
      {
        title: "Zakończenie zlecenia",
        trigger: "Serwisant zamyka zlecenie na telefonie",
        steps: ["Protokół z pracą, częściami, zdjęciami i podpisem klienta", "Protokół w mailu do klienta", "Faktura do sprawdzenia w programie do faktur"],
        result: "Faktura wychodzi tego samego dnia, a biuro nie przepisuje protokołów.",
      },
      {
        title: "Przegląd okresowy",
        trigger: "Zbliża się termin przeglądu u klienta",
        steps: ["Przypomnienie dla klienta z propozycją terminu", "Wizyta w grafiku po potwierdzeniu", "Następny termin przeglądu zapisany automatycznie"],
        result: "Przeglądy nie umykają, a przychód z umów serwisowych jest przewidywalny.",
      },
    ],
  },
  security: {
    title: "Dane klientów i urządzeń",
    lead: "Serwis to dane klientów, adresy, dostęp do budynków i dokumentacja urządzeń. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Uprawnienia", body: "Serwisant widzi swoje zlecenia, biuro grafik i rozliczenia, właściciel całość." },
      { title: "Kody i dostępy", body: "Kody do budynków i dane dostępowe tylko w zleceniu, którego dotyczą." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Ludzie decydują", body: "Diagnozę, zakres naprawy i ceny ustalają serwisant i biuro." },
    ],
  },
  example: {
    title: "Firma serwisowa przed i po automatyzacji",
    lead: "Przykład firmy serwisującej klimatyzację i pompy ciepła, z kilkunastoma serwisantami.",
    rows: [
      { label: "Zgłoszenia", before: "Telefony i dopytywanie.", after: "Formularz ze zdjęciem i danymi urządzenia." },
      { label: "Grafik", before: "Arkusz zmieniany kilka razy dziennie.", after: "Propozycje terminów według zasad." },
      { label: "Protokoły", before: "Papier przepisywany w biurze.", after: "Telefon serwisanta i podpis klienta." },
      { label: "Przeglądy", before: "Arkusz i pamięć.", after: "Przypomnienia z umów." },
      { label: "Faktury", before: "Po kilku dniach.", after: "Tego samego dnia, po sprawdzeniu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w firmie serwisowej",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie przerywać obsługi klientów.",
    phases: [
      { title: "Przegląd firmy", duration: "kilka dni", body: "Rozmawiamy z właścicielem, dyspozytorem i serwisantem, przeglądamy narzędzia i dokumenty, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy i informacja o używanych narzędziach." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ, formularze i zasady: co robi system, co robi AI, a co zawsze robi człowiek.", fromYou: "Akceptacja projektu i przykładowe dokumenty." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie i testujemy je z kilkoma serwisantami.", fromYou: "Serwisanci i dyspozytor oceniający testy." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie dla całego zespołu, szkolimy i pilnujemy działania. Kolejne obszary dokładamy, gdy pierwszy działa.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla firm, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. protokołów", "Połączenie z programem do faktur", "Szkolenie zespołu"] },
      { name: "Cały serwis", description: "Dla firm, które chcą uporządkować pracę od zgłoszenia do faktury.", includes: ["Kilka połączonych procesów: zgłoszenia, grafik, protokoły, przeglądy, rozliczenia", "Asystent wiedzy serwisowej", "Integracja z kalendarzami i programem do faktur", "Raporty dla właściciela", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla firm, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. przyjmowania zgłoszeń", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "liczba serwisantów i zleceń,",
      "możliwości integracji programów, z których korzystacie,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w firmach serwisowych",
    items: [
      { risk: "Pilna awaria utknie w kolejce.", mitigation: "Zgłoszenia oznaczone jako pilne trafiają od razu do dyspozytora, także SMS-em." },
      { risk: "Serwisanci nie przekonają się do telefonu.", mitigation: "Formularz protokołu projektujemy z serwisantami, tak żeby był szybszy niż papier." },
      { risk: "Brak zasięgu u klienta.", mitigation: "Protokół można wypełnić bez internetu i wysłać po odzyskaniu połączenia." },
      { risk: "Błędna faktura z protokołu.", mitigation: "Faktura trafia do sprawdzenia przed wysłaniem." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja zastąpi dyspozytora?", answer: "Nie. Automatyzujemy przyjmowanie zgłoszeń, podpowiedzi terminów, protokoły i faktury. Decyzje o grafiku w nietypowych sytuacjach zostają przy dyspozytorze." },
    { question: "Czy musimy kupić program do zarządzania serwisem?", answer: "Nie zawsze. Jeśli macie program, który działa, łączymy się z nim. Jeśli pracujecie w arkuszach, budujemy prostą bazę zleceń dopasowaną do waszej pracy." },
    { question: "Czy serwisanci muszą mieć smartfony?", answer: "Tak, do protokołów na telefonie. Wystarczy zwykły smartfon i przeglądarka, bez instalowania aplikacji." },
    { question: "Czy obsłużycie przeglądy wymagane przepisami?", answer: "Pilnujemy terminów i dokumentacji. Zakres przeglądów i wymagania przepisów określa firma i jej klienci." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od protokołów na telefonie połączonych z fakturą albo od przyjmowania zgłoszeń. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni. Wdrożenia obejmujące kilka obszarów prowadzimy etapami." },
    { question: "Czy pracujecie z firmami instalacyjnymi?", answer: "Tak. U instalatorów częściej zaczynamy od wycen i ofert, a u firm serwisowych od zgłoszeń i protokołów." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  relatedProcessSlugs: ["umawianie-wizyt", "obsluga-reklamacji", "ofertowanie", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["n8n", "airtable", "google-workspace", "ksef"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
