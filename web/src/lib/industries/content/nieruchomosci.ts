import type { IndustryPageContent } from "../types";

export const nieruchomosci: IndustryPageContent = {
  industrySlug: "nieruchomosci",
  name: "Nieruchomości",
  excerpt: "Automatyzacja pracy biur nieruchomości i firm zarządzających: leady z portali, oferty, umowy, zgłoszenia najemców, rozliczenia i raporty dla właścicieli.",
  metaTitle: "Automatyzacja biura nieruchomości i zarządzania najmem",
  metaDescription:
    "Automatyzujemy pracę biur nieruchomości i zarządców: leady z portali, oferty i opisy z AI, umowy, zgłoszenia najemców, rozliczenia najmu i raporty.",
  primaryKeyword: "automatyzacja biura nieruchomości",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: nieruchomości",
    title: "Automatyzacja biura nieruchomości: agenci przy klientach, nie przy formularzach",
    lead: "W nieruchomościach wygrywa ten, kto szybciej odpowie na zapytanie i lepiej zadba o klienta. Tymczasem agenci i zarządcy spędzają godziny na przepisywaniu leadów z portali, aktualizowaniu ofert, przygotowywaniu umów, obsłudze zgłoszeń najemców i rozliczeniach. Pomagamy biurom nieruchomości i firmom zarządzającym zautomatyzować tę pracę na narzędziach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Leady z portali od razu w CRM, z szybką odpowiedzią",
      "Oferty, umowy i protokoły bez przepisywania",
      "Zgłoszenia najemców i rozliczenia najmu pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura nieruchomości, firmy zarządzające najmem i zarządcy nieruchomości" },
    { label: "Co automatyzujemy", value: "Leady, oferty, umowy, zgłoszenia, rozliczenia, raporty dla właścicieli" },
    { label: "Jak", value: "Obok CRM i systemów, których używacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przygotowuje, agent lub zarządca decyduje" },
  ],
  symptoms: {
    title: "Po czym poznać, że biuro potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy agentów i zarządców da się przenieść na system.",
    items: [
      "Zapytania z portali ogłoszeniowych trafiają do skrzynek agentów i część z nich czeka na odpowiedź za długo.",
      "Opis oferty pisze się od zera, a potem ręcznie aktualizuje na kilku portalach.",
      "Umowy i protokoły zdawczo-odbiorcze przygotowuje się przez kopiowanie poprzednich.",
      "Zgłoszenia usterek od najemców przychodzą telefonem i SMS-em, bez wspólnego rejestru.",
      "Czynsze, media i rozliczenia z właścicielami prowadzi się w arkuszach.",
      "Właściciele pytają o stan swoich mieszkań, a raport trzeba składać ręcznie.",
    ],
  },
  intro: {
    title: "Automatyzacja w nieruchomościach: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Branża nieruchomości łączy sprzedaż, obsługę klienta i administrację. Agent pozyskuje oferty, odpowiada na zapytania, organizuje prezentacje i prowadzi transakcję. Zarządca dba o najemców, usterki, rozliczenia i raporty dla właścicieli. W obu przypadkach spora część pracy to przepisywanie danych i pilnowanie terminów. To właśnie tę pracę automatyzujemy.",
      "Automatyzacja nie zastępuje agenta ani zarządcy. Rozmowa z klientem, negocjacje, ocena nieruchomości i decyzje dotyczące najemców zostają przy ludziach. System przyjmuje zapytania, przygotowuje dokumenty, przypomina o terminach i zbiera dane do rozliczeń. AI pomaga przy opisach ofert, kwalifikacji zapytań i odpowiedziach na typowe pytania.",
      "Nie wymieniamy CRM ani systemów do zarządzania najmem. Budujemy obok nich to, czego brakuje: połączenia z portalami i pocztą, szablony dokumentów, rejestr zgłoszeń, rozliczenia i raporty. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze firmy.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w nieruchomościach",
    lead: "Od zapytania klienta do raportu dla właściciela. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Leady z portali", body: "Zapytania z portali ogłoszeniowych i strony w CRM, z szybką odpowiedzią i propozycją terminu prezentacji." },
      { title: "Oferty i opisy", body: "Opisy ofert przygotowane z AI na podstawie danych i zdjęć, do sprawdzenia przez agenta." },
      { title: "Umowy i dokumenty", body: "Umowy pośrednictwa, najmu i protokoły wypełniane danymi z CRM." },
      { title: "Prezentacje", body: "Terminy prezentacji, potwierdzenia i przypomnienia dla klientów i agentów." },
      { title: "Zgłoszenia najemców", body: "Usterki i sprawy najemców w jednym rejestrze, z przydziałem do serwisu i statusami." },
      { title: "Rozliczenia najmu", body: "Czynsze, media, przypomnienia o płatnościach i rozliczenia z właścicielami." },
      { title: "Raporty dla właścicieli", body: "Przychody, koszty, zgłoszenia i stan nieruchomości w regularnym raporcie." },
      { title: "Wiedza biura", body: "Asystent odpowiadający na pytania o oferty, procedury i dokumenty biura." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w nieruchomościach",
    lead: "Typowe przepływy, które budujemy w biurach i firmach zarządzających. Decyzje zostają przy agentach i zarządcach.",
    items: [
      {
        title: "Zapytanie z portalu",
        trigger: "Klient pyta o ofertę na portalu ogłoszeniowym",
        steps: [
          "Zapytanie trafia do CRM, przypisane do agenta prowadzącego ofertę",
          "Klient dostaje odpowiedź z podstawowymi informacjami i propozycją terminów",
          "Prezentacja w kalendarzu agenta z przypomnieniem dla obu stron",
        ],
        result: "Klient dostaje odpowiedź od razu, a agent nie przepisuje zapytań.",
      },
      {
        title: "Zgłoszenie usterki",
        trigger: "Najemca zgłasza usterkę przez formularz",
        steps: [
          "Zgłoszenie w rejestrze, z kategorią i zdjęciami",
          "Przydział do serwisu lub zarządcy według rodzaju usterki",
          "Informacja dla najemcy o terminie i zamknięciu sprawy",
        ],
        result: "Najemca wie, co się dzieje, a zarządca widzi wszystkie sprawy w jednym miejscu.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu rozliczeniowego",
        steps: [
          "Sprawdzenie wpłat czynszów i przypomnienia o zaległościach",
          "Rozliczenie z właścicielem: przychody, koszty, prowizja",
          "Raport dla właściciela i przelew do akceptacji",
        ],
        result: "Właściciele dostają rozliczenia na czas, bez składania arkuszy.",
      },
    ],
  },
  security: {
    title: "Dane klientów i najemców",
    lead: "Nieruchomości to dane osobowe klientów, najemców i właścicieli, często także dokumenty finansowe. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Uprawnienia", body: "Agent widzi swoich klientów i oferty, zarządca swoje nieruchomości, właściciel firmy całość." },
      { title: "Dokumenty tożsamości", body: "Kopie dokumentów przechowujemy tylko tam, gdzie są potrzebne, z ograniczonym dostępem." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Ludzie decydują", body: "Ceny, warunki umów i decyzje wobec najemców zatwierdza człowiek." },
    ],
  },
  example: {
    title: "Biuro nieruchomości przed i po automatyzacji",
    lead: "Przykład biura, które prowadzi pośrednictwo i zarządza kilkudziesięcioma mieszkaniami na wynajem.",
    rows: [
      { label: "Zapytania", before: "W skrzynkach agentów, część bez odpowiedzi.", after: "W CRM, z odpowiedzią i propozycją prezentacji." },
      { label: "Oferty", before: "Opisy pisane od zera.", after: "Szkic z AI, agent dopracowuje." },
      { label: "Umowy", before: "Kopiowane z poprzednich.", after: "Wypełniane danymi z CRM." },
      { label: "Usterki", before: "Telefony i SMS-y.", after: "Rejestr ze statusami dla najemców." },
      { label: "Rozliczenia", before: "Arkusze na koniec miesiąca.", after: "Rozliczenia i raporty dla właścicieli." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w nieruchomościach",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie przerywać obsługi klientów.",
    phases: [
      { title: "Przegląd firmy", duration: "kilka dni", body: "Rozmawiamy z właścicielem, agentem i zarządcą, przeglądamy CRM, portale i sposób obsługi najemców, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy i informacja o używanych narzędziach." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ, szablony i zasady: co robi system, co robi AI, a co zawsze zatwierdza człowiek.", fromYou: "Akceptacja projektu i przykładowe dokumenty." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie obok CRM i testujemy je na wybranych ofertach lub nieruchomościach.", fromYou: "Osoba, która ocenia wyniki testów." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie dla całego zespołu, szkolimy i pilnujemy działania. Kolejne obszary dokładamy, gdy pierwszy działa.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla biur, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. leadów z portali", "Połączenie z CRM", "Szkolenie zespołu"] },
      { name: "Biuro i zarządzanie", description: "Dla firm, które chcą uporządkować pracę od zapytania do raportu dla właściciela.", includes: ["Kilka połączonych procesów: leady, oferty, umowy, zgłoszenia, rozliczenia", "Opisy ofert z AI", "Integracja z CRM, portalami i bankiem", "Raporty dla właścicieli", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla firm, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. odpowiedzi na zapytania", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "możliwości integracji CRM i portali, z których korzystacie,",
      "liczba ofert, nieruchomości i najemców,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w nieruchomościach",
    items: [
      { risk: "Automatyczna odpowiedź poda klientowi błędne informacje o ofercie.", mitigation: "Odpowiedzi korzystają z danych oferty w CRM, a pytania o cenę, negocjacje i szczegóły prawne trafiają do agenta." },
      { risk: "Opis z AI będzie zawierał nieprawdziwe parametry.", mitigation: "Opis powstaje z danych oferty i jest sprawdzany przez agenta przed publikacją." },
      { risk: "Pilna usterka utknie w kolejce.", mitigation: "Zgłoszenia oznaczone jako pilne trafiają od razu do zarządcy, także SMS-em." },
      { risk: "Portal zmieni sposób przekazywania zapytań.", mitigation: "Monitoring połączeń, a zmiany po stronie portali obejmuje opieka." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja zastąpi agentów nieruchomości?", answer: "Nie. Automatyzujemy przepisywanie zapytań, dokumenty, przypomnienia i rozliczenia. Rozmowy z klientami, prezentacje i negocjacje zostają przy agentach." },
    { question: "Czy łączycie się z portalami ogłoszeniowymi?", answer: "Tam, gdzie portal przekazuje zapytania mailem, przez API lub przez system do publikacji ofert, z którego korzystacie. Zakres sprawdzamy przy przeglądzie." },
    { question: "Czy musimy zmieniać CRM?", answer: "Zwykle nie. Łączymy się z CRM, którego używacie, jeśli ma API lub import i eksport danych. Brakujące elementy budujemy obok niego." },
    { question: "Czy pracujecie z firmami zarządzającymi najmem?", answer: "Tak. Zgłoszenia najemców, rozliczenia i raporty dla właścicieli to jedne z najczęstszych wdrożeń w zarządzaniu najmem." },
    { question: "Od czego najlepiej zacząć?", answer: "W pośrednictwie najczęściej od leadów z portali, w zarządzaniu od zgłoszeń najemców albo rozliczeń. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni. Wdrożenia obejmujące kilka obszarów prowadzimy etapami." },
    { question: "Czy pracujecie ze wspólnotami i zarządcami budynków?", answer: "Tak, choć procesy zarządców wspólnot różnią się od zarządzania najmem. Zakres ustalamy po rozmowie." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "ai-w-obsludze-dokumentow", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "umawianie-wizyt", "obieg-umow", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["n8n", "hubspot", "google-workspace", "chatgpt"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-biurze-nieruchomosci", "crm-dla-biura-nieruchomosci", "zarzadzanie-najmem-wielu-mieszkan"],
};
