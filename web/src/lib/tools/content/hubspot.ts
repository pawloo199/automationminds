import type { ToolContent } from "../types";

export const hubspot: ToolContent = {
  slug: "hubspot",
  metaTitle: "Wdrożenie HubSpot CRM i automatyzacje | Automation Minds",
  metaDescription:
    "Wdrażamy i automatyzujemy HubSpot: CRM, lejki sprzedaży, marketing, obsługa klienta i integracje z księgowością. Bezpłatna konsultacja 30 min.",
  primaryKeyword: "wdrożenie HubSpot",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "CRM i sprzedaż",
    title: "Wdrożenie HubSpot: CRM, marketing i obsługa klienta w jednym miejscu",
    lead: "Konfigurujemy HubSpot tak, żeby odpowiadał waszemu procesowi sprzedaży, a nie odwrotnie. Porządkujemy dane, budujemy automatyzacje i łączymy CRM z księgowością, sklepem i komunikacją z klientami.",
    bullets: [
      "Lejki, etapy i właściwości dopasowane do firmy",
      "Automatyzacje sprzedaży i marketingu",
      "Integracje z systemami, których już używacie",
    ],
  },
  intro: {
    title: "Czym jest HubSpot i komu się sprawdzi",
    paragraphs: [
      "HubSpot to platforma, która łączy CRM z narzędziami do marketingu, sprzedaży, obsługi klienta i zarządzania danymi. Podstawowy CRM jest darmowy, a kolejne moduły, nazywane Hubami, dokłada się według potrzeb.",
      "Siłą HubSpota jest to, że marketing, sprzedaż i obsługa klienta pracują na tych samych danych. Widać, skąd przyszedł klient, jakie maile otworzył, co kupił i jakie zgłoszenia zgłaszał. Dzięki temu łatwiej mierzyć, które działania faktycznie przynoszą sprzedaż.",
      "Najczęstszy problem, który widzimy, to HubSpot używany jak książka adresowa: dużo kontaktów, brak porządku w etapach i właściwościach, ręcznie przeklejane dane. Wdrożenie zaczynamy od procesu, a dopiero potem konfigurujemy narzędzie.",
    ],
  },
  useCases: {
    title: "Co robimy w HubSpocie",
    lead: "Zakres zależy od tego, czy zaczynacie od zera, czy porządkujemy istniejące konto.",
    items: [
      { title: "Konfiguracja CRM", body: "Lejki, etapy, właściwości, uprawnienia i widoki dopasowane do waszego procesu sprzedaży." },
      { title: "Automatyzacje sprzedaży", body: "Przypisywanie leadów, zadania dla handlowców, przypomnienia i sekwencje maili." },
      { title: "Marketing i lead scoring", body: "Formularze, segmenty, kampanie mailowe i ocena leadów, żeby handlowcy dzwonili do właściwych osób." },
      { title: "Integracje", body: "Połączenie HubSpota z księgowością, sklepem, systemem rezerwacji i telefonią." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w HubSpocie",
    lead: "Część budujemy we wbudowanych przepływach HubSpota, część w Make lub n8n, gdy trzeba połączyć inne systemy.",
    items: [
      {
        title: "Nowy lead do handlowca",
        trigger: "Formularz na stronie lub z reklamy",
        steps: ["Ocena leadu według branży i wielkości firmy", "Przypisanie handlowca z odpowiedniego regionu", "Zadanie i mail powitalny"],
        result: "Najlepsze leady dostają telefon w ciągu godziny.",
      },
      {
        title: "Wygrana sprzedaż do faktury",
        trigger: "Szansa przechodzi na etap wygranej",
        steps: ["Pobranie produktów i danych firmy", "Wystawienie faktury w programie księgowym", "Utworzenie zgłoszenia onboardingu klienta"],
        result: "Sprzedaż, faktura i wdrożenie klienta ruszają bez przekazywania maili.",
      },
      {
        title: "Klient bez kontaktu",
        trigger: "Brak aktywności klienta przez ustalony czas",
        steps: ["Sprawdzenie historii zakupów", "Zadanie dla opiekuna", "Mail z propozycją kontaktu"],
        result: "Mniej klientów, którzy odchodzą po cichu.",
      },
    ],
  },
  fit: {
    title: "Kiedy HubSpot się sprawdzi, a kiedy wybierzemy coś innego",
    good: [
      "Marketing i sprzedaż mają pracować na wspólnych danych.",
      "Prowadzicie działania inbound: treści, formularze, kampanie mailowe.",
      "Planujecie rozwój obsługi klienta w tym samym systemie.",
      "Chcecie raportować, które kanały przynoszą sprzedaż.",
    ],
    limits: [
      "Potrzebujecie tylko prostego lejka sprzedaży dla kilku handlowców. Wtedy Pipedrive bywa prostszy i tańszy.",
      "Proces wymaga bardzo nietypowego modelu danych. Wtedy rozważamy bazę danych, np. Airtable.",
      "Budżet nie pozwala na płatne Huby, a potrzebne są zaawansowane automatyzacje.",
    ],
  },
  comparison: {
    title: "HubSpot czy Pipedrive",
    lead: "Oba systemy są popularne w małych i średnich firmach, ale rozwiązują trochę inne problemy.",
    columns: ["HubSpot", "Pipedrive"],
    rows: [
      { label: "Główna siła", values: ["Marketing, sprzedaż i obsługa w jednej platformie", "Prosty i czytelny lejek sprzedaży"] },
      { label: "Start", values: ["Darmowy CRM, płatne Huby", "Płatne plany od początku"] },
      { label: "Marketing", values: ["Rozbudowany", "Podstawowy, dodatki"] },
      { label: "Automatyzacje", values: ["Rozbudowane w płatnych planach", "Proste, wbudowane"] },
      { label: "Dla kogo", values: ["Firmy z marketingiem i dłuższym procesem sprzedaży", "Małe zespoły sprzedaży B2B"] },
    ],
    note: "Porównanie jest uproszczone. Pomagamy wybrać system na podstawie waszego procesu.",
  },
  example: {
    title: "Obsługa leadów przed i po wdrożeniu HubSpota",
    lead: "Przykład firmy B2B, która zbiera zapytania z formularzy, targów i reklam.",
    rows: [
      { label: "Nowe zapytanie", before: "Mail do skrzynki ogólnej, ktoś przekazuje go dalej.", after: "Lead w HubSpocie z oceną i przypisanym handlowcem." },
      { label: "Pierwszy kontakt", before: "Po kilku dniach albo wcale.", after: "Zadanie dla handlowca i automatyczny mail tego samego dnia." },
      { label: "Postęp sprzedaży", before: "W arkuszu handlowca, niewidoczny dla szefa.", after: "Lejek z etapami i wartością szans." },
      { label: "Źródło klienta", before: "Nikt nie wie, która kampania zadziałała.", after: "Raport pokazuje, z jakich kanałów przychodzi sprzedaż." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  costs: {
    title: "Ile kosztuje HubSpot",
    paragraphs: [
      "Podstawowy CRM HubSpot jest darmowy. Huby marketingu, sprzedaży, obsługi klienta i danych mają płatne plany, a zaawansowane automatyzacje są zwykle dostępne w wyższych planach. Cena zależy od liczby użytkowników i kontaktów marketingowych.",
      "Pomagamy dobrać plan do realnych potrzeb, żeby nie płacić za funkcje, których nie użyjecie. Część automatyzacji możemy zbudować poza HubSpotem, np. w Make lub n8n, jeśli tak jest taniej.",
    ],
  },
  faq: [
    { question: "Czy HubSpot jest darmowy?", answer: "Podstawowy CRM tak. Płatne są Huby z zaawansowanym marketingiem, automatyzacjami sprzedaży, obsługą klienta i zarządzaniem danymi." },
    { question: "Mamy HubSpota, ale nikt go dobrze nie używa. Co robicie?", answer: "Zaczynamy od przeglądu procesu i konta: lejków, właściwości, duplikatów i automatyzacji. Potem porządkujemy dane, upraszczamy konfigurację i szkolimy zespół." },
    { question: "Czy HubSpot połączy się z polskim programem do faktur?", answer: "Jeśli program ma API, tak. Łączymy HubSpota z księgowością bezpośrednio albo przez Make lub n8n." },
    { question: "Czy przenosicie dane z innego CRM do HubSpota?", answer: "Tak. Przenosimy kontakty, firmy, szanse i historię, czyszcząc przy okazji duplikaty i błędne dane." },
    { question: "Czy jesteście partnerem HubSpota?", answer: "Nie. Pracujemy jako niezależni specjaliści od automatyzacji i dobieramy narzędzia do procesu klienta." },
    { question: "Ile trwa wdrożenie HubSpota?", answer: "Podstawowa konfiguracja CRM to zwykle kilka tygodni. Dłużej trwają migracje danych i rozbudowane automatyzacje marketingu. Dokładny plan podajemy po konsultacji." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-marketingu", "automatyzacja-w-obsludze-klienta", "migracja-danych"],
  relatedToolSlugs: ["pipedrive", "make", "zapier", "chatgpt"],
  relatedArticleSlugs: ["automatyzacja-obslugi-leadow-sprzedazowych", "integracja-crm-z-fakturowaniem", "jak-wybrac-narzedzie-do-automatyzacji"],
};
