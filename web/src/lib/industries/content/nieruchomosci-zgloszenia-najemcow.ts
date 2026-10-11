import type { IndustryPageContent } from "../types";

export const nieruchomosciZgloszeniaNajemcow: IndustryPageContent = {
  industrySlug: "nieruchomosci",
  subSlug: "zgloszenia-najemcow",
  name: "Zgłoszenia najemców",
  excerpt: "Usterki i sprawy najemców w jednym rejestrze, z kategorią, pilnością, przydziałem do serwisu i informacją o statusie dla najemcy.",
  metaTitle: "Zgłoszenia usterek od najemców: rejestr i automatyzacja",
  metaDescription:
    "Automatyzujemy zgłoszenia najemców: formularz ze zdjęciami, kategoria i pilność, przydział do serwisu, statusy dla najemcy i raport dla właściciela.",
  primaryKeyword: "zgłoszenia usterek najemców",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Nieruchomości: zgłoszenia najemców",
    title: "Zgłoszenia najemców w jednym miejscu, z terminem i statusem",
    lead: "Cieknący kran, zepsuta pralka, problem z domofonem: zarządca najmu dostaje zgłoszenia telefonem, SMS-em i przez komunikatory, często wieczorem i w weekend. Bez wspólnego rejestru trudno pilnować, co jest zrobione, a najemcy dzwonią z pytaniem o status. Automatyzujemy obsługę zgłoszeń: najemca zgłasza usterkę przez prosty formularz, system nadaje kategorię i pilność, przydziela serwis i informuje najemcę o postępach.",
    bullets: [
      "Formularz ze zdjęciami zamiast telefonów",
      "Kategoria, pilność i przydział do serwisu",
      "Statusy dla najemcy i raport dla właściciela",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy zarządzające najmem, zarządcy budynków i właściciele wielu lokali" },
    { label: "Co automatyzujemy", value: "Przyjęcie, kategorię, przydział, statusy, koszty, raporty" },
    { label: "Narzędzia", value: "Formularz, baza zgłoszeń, SMS, poczta, model AI, n8n" },
    { label: "Zasada", value: "Pilne sprawy zawsze trafiają od razu do człowieka" },
  ],
  symptoms: {
    title: "Kiedy zgłoszenia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zarządca spędza dzień na telefonie zamiast na zarządzaniu.",
    items: [
      "Zgłoszenia przychodzą telefonem, SMS-em i przez komunikatory.",
      "Brakuje zdjęć i szczegółów, więc trzeba oddzwaniać do najemcy.",
      "Nie wiadomo bez sprawdzania, które usterki są otwarte.",
      "Najemcy dzwonią, żeby zapytać o termin naprawy.",
      "Koszty napraw trudno przypisać do lokali i właścicieli.",
      "Właściciel nie wie, co dzieje się w jego mieszkaniu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zgłoszeń",
    paragraphs: [
      "Najemca zgłasza usterkę przez prosty formularz z linku lub kodu QR w mieszkaniu: opis, zdjęcie, dostępność. Zgłoszenia przesłane SMS-em lub mailem trafiają do tego samego rejestru. AI może rozpoznać rodzaj usterki i jej pilność na podstawie opisu i zdjęcia, np. odróżnić zalanie od cieknącego kranu.",
      "Pilne zgłoszenia trafiają od razu do zarządcy, także SMS-em. Pozostałe są przydzielane do serwisu według kategorii i lokalizacji. Serwisant dostaje zgłoszenie z danymi kontaktowymi i zdjęciami, a po naprawie zamyka je z kosztem i zdjęciem.",
      "Najemca dostaje informację o przyjęciu zgłoszenia, terminie i zakończeniu naprawy. Koszty są przypisane do lokalu i trafiają do rozliczenia z właścicielem, a właściciel widzi zgłoszenia w swoim raporcie.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zgłoszeń",
    lead: "Zakres dopasowujemy do liczby lokali i sposobu współpracy z serwisami.",
    items: [
      { title: "Formularz dla najemcy", body: "Opis, zdjęcia i dostępność, z linku lub kodu QR." },
      { title: "Inne kanały", body: "Zgłoszenia z SMS-ów i maili w tym samym rejestrze." },
      { title: "Kategoria i pilność", body: "Rodzaj usterki i pilność rozpoznane z opisu i zdjęcia." },
      { title: "Przydział do serwisu", body: "Według kategorii, lokalizacji i dostępności." },
      { title: "Statusy dla najemcy", body: "Przyjęcie, termin i zakończenie naprawy." },
      { title: "Zamknięcie zgłoszenia", body: "Koszt, zdjęcie i opis od serwisanta." },
      { title: "Koszty i rozliczenia", body: "Koszty napraw przypisane do lokalu i właściciela." },
      { title: "Raport", body: "Zgłoszenia według lokali, kategorii i czasu naprawy." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zgłoszenia do zamkniętej naprawy.",
    items: [
      {
        title: "Usterka zwykła",
        trigger: "Najemca zgłasza cieknący kran przez formularz",
        steps: ["Rejestr z kategorią i zdjęciem", "Przydział do hydraulika i termin dla najemcy", "Zamknięcie z kosztem i informacja dla najemcy"],
        result: "Najemca wie, kiedy przyjdzie serwis, a koszt trafia do rozliczenia.",
      },
      {
        title: "Usterka pilna",
        trigger: "Zgłoszenie zalania",
        steps: ["Rozpoznanie pilności", "SMS i telefon do zarządcy", "Lista kontaktów awaryjnych dla najemcy"],
        result: "Pilna sprawa nie czeka w kolejce.",
      },
    ],
  },
  example: {
    title: "Zgłoszenia przed i po automatyzacji",
    lead: "Przykład firmy zarządzającej kilkudziesięcioma mieszkaniami.",
    rows: [
      { label: "Kanały", before: "Telefon, SMS, komunikatory.", after: "Formularz i jeden rejestr." },
      { label: "Szczegóły", before: "Oddzwanianie po zdjęcia.", after: "Zdjęcia w zgłoszeniu." },
      { label: "Status", before: "Najemca dzwoni z pytaniem.", after: "Dostaje informacje automatycznie." },
      { label: "Koszty", before: "Trudne do przypisania.", after: "Przypisane do lokalu i właściciela." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od kilku budynków lub grupy lokali.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś przyjmujecie zgłoszenia i współpracujecie z serwisami.", fromYou: "Rozmowa z zarządcą i lista serwisów." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy kategorie, zasady pilności, przydziału i treści wiadomości.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy formularz i przepływy, testujemy je na wybranych lokalach.", fromYou: "Informacja dla najemców w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie lokale i rozwijamy raporty.", fromYou: "Uwagi zarządców i serwisów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od formularza i rejestru.",
    items: [
      { name: "Rejestr zgłoszeń", description: "Dla firm, które chcą mieć wszystko w jednym miejscu.", includes: ["Formularz dla najemcy", "Rejestr zgłoszeń", "Statusy dla najemcy", "Pilne sprawy do zarządcy"] },
      { name: "Zgłoszenia i serwisy", description: "Dla firm współpracujących z wieloma serwisami.", includes: ["Wszystko z wariantu Rejestr zgłoszeń", "Przydział do serwisu", "Zamknięcie z kosztem", "Kategoria i pilność z AI"] },
      { name: "Zgłoszenia i właściciele", description: "Dla firm, które chcą lepiej informować właścicieli.", includes: ["Wszystko z wariantu Zgłoszenia i serwisy", "Koszty w rozliczeniach", "Raport dla właściciela", "Raport czasu napraw"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba lokali i zgłoszeń,",
      "liczba serwisów i zasad przydziału,",
      "kanały komunikacji, np. SMS,",
      "zakres wykorzystania AI,",
      "integracja z rozliczeniami.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Pilna usterka zostanie uznana za zwykłą.", mitigation: "Najemca może sam oznaczyć zgłoszenie jako pilne, a lista słów i kategorii awaryjnych zawsze trafia do zarządcy." },
      { risk: "Najemca nie skorzysta z formularza.", mitigation: "SMS-y i maile trafiają do tego samego rejestru." },
      { risk: "Serwis nie zamknie zgłoszenia.", mitigation: "Przypomnienia dla serwisu i informacja dla zarządcy po terminie." },
      { risk: "Dane najemców w niewłaściwych rękach.", mitigation: "Serwis widzi tylko dane potrzebne do naprawy." },
    ],
  },
  faq: [
    { question: "Czy najemca musi instalować aplikację?", answer: "Nie. Wystarczy formularz z linku lub kodu QR w mieszkaniu." },
    { question: "Co z usterkami zgłaszanymi w nocy?", answer: "Pilne zgłoszenia trafiają do osoby dyżurnej SMS-em, a najemca dostaje listę kontaktów awaryjnych." },
    { question: "Czy serwisanci muszą korzystać z systemu?", answer: "Wystarczy link do zgłoszenia i prosty formularz zamknięcia. Nie potrzebują konta." },
    { question: "Czy koszty napraw trafią do rozliczeń z właścicielem?", answer: "Tak, jeśli korzystacie z naszych rozliczeń najmu lub systemu, który na to pozwala." },
    { question: "Czy to działa dla wspólnot mieszkaniowych?", answer: "Tak. Zgłoszenia od mieszkańców mogą trafiać do zarządcy w ten sam sposób." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["airtable", "n8n", "chatgpt"],
  relatedArticleSlugs: ["airtable-w-praktyce-zastosowania", "5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji"],
};
