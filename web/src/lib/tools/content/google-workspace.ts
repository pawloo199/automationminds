import type { ToolContent } from "../types";

export const googleWorkspace: ToolContent = {
  slug: "google-workspace",
  metaTitle: "Automatyzacja Google Workspace: Gmail, Arkusze, Dysk | Automation Minds",
  metaDescription:
    "Automatyzujemy pracę w Google Workspace: Gmail, Arkusze, Dysk, Formularze i Kalendarz. Apps Script, AppSheet i integracje z innymi systemami. Konsultacja 30 min.",
  primaryKeyword: "automatyzacja Google Workspace",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "Pakiet biurowy",
    title: "Automatyzacja Google Workspace: Gmail, Arkusze i Dysk, które pracują za was",
    lead: "W wielu małych firmach Google Workspace to centrum wszystkiego: poczta, arkusze, dokumenty i kalendarz. Łączymy te narzędzia w procesy, w których dane nie są przepisywane, raporty składają się same, a ważne maile nie giną.",
    bullets: [
      "Arkusze, które aktualizują się same",
      "Gmail i Formularze połączone z resztą systemów",
      "Apps Script i AppSheet tam, gdzie to wystarczy",
    ],
  },
  intro: {
    title: "Google Workspace jako podstawa automatyzacji",
    paragraphs: [
      "Google Workspace to Gmail, Kalendarz, Dysk, Dokumenty, Arkusze, Formularze i Meet. Dla małych firm to często jedyne narzędzia, na których opiera się codzienna praca, a Arkusze pełnią rolę CRM, magazynu i systemu do rozliczeń jednocześnie.",
      "To działa, dopóki dane nie zaczynają się rozjeżdżać: kilka wersji arkusza, ręcznie kopiowane wiersze, formuły, które ktoś przypadkiem usunął. Automatyzacja w Google Workspace porządkuje przepływ danych między pocztą, formularzami i arkuszami.",
      "Do prostych zadań używamy wbudowanego Apps Script i AppSheet. Gdy trzeba połączyć Google z CRM, księgowością czy sklepem, budujemy przepływy w Make lub n8n. A gdy arkusz przestaje wystarczać, pomagamy przejść na bazę danych.",
    ],
  },
  useCases: {
    title: "Co automatyzujemy w Google Workspace",
    lead: "Najwięcej czasu odzyskujemy tam, gdzie dane krążą między mailem, formularzem i arkuszem.",
    items: [
      { title: "Formularze do arkuszy i dalej", body: "Zgłoszenie z Formularzy trafia do arkusza, tworzy zadanie i wysyła potwierdzenie." },
      { title: "Porządek w Gmailu", body: "Maile od klientów oznaczane, przypisywane i zapisywane w CRM, załączniki trafiają na Dysk." },
      { title: "Raporty w Arkuszach", body: "Dane z kilku źródeł zbierane automatycznie, raport w Looker Studio odświeżany codziennie." },
      { title: "Proste aplikacje", body: "AppSheet zamienia arkusz w aplikację mobilną, np. do zgłoszeń z terenu." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy w Google Workspace",
    lead: "Typowe procesy w firmach, które pracują w Gmailu i Arkuszach.",
    items: [
      {
        title: "Zapytanie z formularza",
        trigger: "Nowa odpowiedź w Formularzu Google",
        steps: ["Zapis w arkuszu z numerem zgłoszenia", "Przypisanie osoby i termin w Kalendarzu", "Potwierdzenie dla klienta z Gmaila"],
        result: "Każde zgłoszenie ma numer, właściciela i termin.",
      },
      {
        title: "Załączniki z maili",
        trigger: "Mail z fakturą lub dokumentem od klienta",
        steps: ["Zapis załącznika w folderze klienta na Dysku", "Dopisanie wiersza w rejestrze dokumentów", "Powiadomienie odpowiedzialnej osoby"],
        result: "Dokumenty są uporządkowane bez ręcznego pobierania.",
      },
      {
        title: "Raport z kilku arkuszy",
        trigger: "Harmonogram, koniec dnia",
        steps: ["Zebranie danych z arkuszy zespołów", "Przeliczenie wskaźników", "Aktualizacja raportu w Looker Studio"],
        result: "Zarząd widzi aktualne liczby bez czekania na arkusz.",
      },
    ],
  },
  fit: {
    title: "Kiedy Google Workspace wystarczy, a kiedy potrzeba czegoś więcej",
    good: [
      "Firma pracuje w Gmailu, Kalendarzu i Arkuszach.",
      "Procesy są proste i zespół chce je rozumieć.",
      "Zależy wam na szybkim starcie bez nowych systemów.",
      "Dane mieszczą się w arkuszach bez problemów z wydajnością.",
    ],
    limits: [
      "Arkusz pełni rolę bazy danych z relacjami i wieloma użytkownikami. Wtedy lepszy jest Airtable lub inna baza.",
      "Procesy łączą wiele zewnętrznych systemów. Wtedy budujemy je w Make lub n8n.",
      "Firma pracuje w Microsoft 365.",
    ],
  },
  comparison: {
    title: "Google Workspace czy Microsoft 365",
    lead: "Oba pakiety dają podobne podstawy. Google wygrywa prostotą i współpracą na żywo, Microsoft kontrolą i integracją z działem IT.",
    columns: ["Google Workspace", "Microsoft 365"],
    rows: [
      { label: "Współpraca na dokumentach", values: ["Bardzo prosta, na żywo", "Dobra, w SharePoint i OneDrive"] },
      { label: "Automatyzacja", values: ["Apps Script, AppSheet", "Power Automate"] },
      { label: "Raporty", values: ["Arkusze, Looker Studio", "Excel, Power BI"] },
      { label: "Uprawnienia", values: ["Proste", "Rozbudowane"] },
      { label: "Dla kogo", values: ["Małe i średnie zespoły nastawione na prostotę", "Firmy z działem IT i złożonymi uprawnieniami"] },
    ],
    note: "Porównanie jest uproszczone. Automatyzujemy w obu środowiskach.",
  },
  example: {
    title: "Obsługa zgłoszeń przed i po automatyzacji w Google Workspace",
    lead: "Przykład firmy serwisowej, która przyjmowała zgłoszenia mailem i prowadziła je w arkuszu.",
    rows: [
      { label: "Zgłoszenie", before: "Mail, ktoś przepisuje je do arkusza.", after: "Formularz zapisuje zgłoszenie w arkuszu z numerem." },
      { label: "Przydział", before: "Szef rozdziela zgłoszenia telefonicznie.", after: "Przypisanie technika według regionu i termin w Kalendarzu." },
      { label: "Informacja dla klienta", before: "Klient dzwoni z pytaniem o status.", after: "Mail o przyjęciu, terminie i zakończeniu wysyłany automatycznie." },
      { label: "Raport", before: "Liczony ręcznie na koniec miesiąca.", after: "Raport w Looker Studio aktualny codziennie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  costs: {
    title: "Ile kosztuje automatyzacja w Google Workspace",
    paragraphs: [
      "Apps Script, Formularze, Arkusze i Looker Studio są dostępne w Google Workspace, więc proste automatyzacje nie wymagają dodatkowych licencji. AppSheet i integracje z zewnętrznymi systemami mogą oznaczać dodatkowy abonament.",
      "Koszt wdrożenia zależy od liczby procesów i systemów. Wycenę przygotowujemy po konsultacji, zanim zaczniemy pracę.",
    ],
  },
  faq: [
    { question: "Czy Apps Script wystarczy do automatyzacji?", answer: "Do prostych zadań w obrębie Google, takich jak przenoszenie danych między arkuszami czy wysyłka maili, często tak. Przy integracjach z wieloma systemami wygodniejsze są Make lub n8n." },
    { question: "Nasz arkusz robi się za duży. Co dalej?", answer: "To sygnał, że arkusz pełni rolę bazy danych. Pomagamy przenieść dane do Airtable lub innej bazy, zostawiając arkusze tam, gdzie są wygodne." },
    { question: "Czy da się połączyć Gmaila z CRM?", answer: "Tak. Maile od klientów mogą trafiać do CRM, a załączniki na Dysk, automatycznie i bez ręcznego kopiowania." },
    { question: "Czy robicie raporty w Looker Studio?", answer: "Tak. Łączymy dane z Arkuszy i innych systemów w raporty, które odświeżają się same." },
    { question: "Czy AppSheet nadaje się do aplikacji dla zespołu w terenie?", answer: "Tak, przy prostych formularzach i listach. Zamienia arkusz w aplikację na telefon, np. do zgłoszeń serwisowych." },
    { question: "Czy wdrażacie Gemini w Google Workspace?", answer: "Pomagamy uporządkować dane i pokazujemy zespołowi, jak korzystać z AI w Gmailu, Dokumentach i Arkuszach w codziennej pracy." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-raportow", "porzadkowanie-i-strukturyzowanie-danych", "projektowanie-baz-danych"],
  relatedToolSlugs: ["microsoft-365", "zapier", "make", "chatgpt"],
  relatedArticleSlugs: ["airtable-czy-excel", "5-procesow-do-automatyzacji-w-malej-firmie", "porzadek-w-danych-przed-ai-i-automatyzacja"],
};
