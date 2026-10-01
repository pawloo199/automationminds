import type { ToolContent } from "../types";

export const microsoft365: ToolContent = {
  slug: "microsoft-365",
  metaTitle: "Automatyzacja Microsoft 365: Teams, SharePoint, Excel | Automation Minds",
  metaDescription:
    "Porządkujemy i automatyzujemy pracę w Microsoft 365: dokumenty w SharePoint, akceptacje w Teams, raporty z Excela i poczta w Outlooku. Konsultacja 30 min.",
  primaryKeyword: "automatyzacja Microsoft 365",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "Pakiet biurowy",
    title: "Automatyzacja Microsoft 365: Outlook, Teams, SharePoint i Excel w jednym procesie",
    lead: "Większość firm ma Microsoft 365, ale używa go jak zestawu osobnych programów. Łączymy pocztę, Teams, SharePoint i Excel w uporządkowane procesy, w których dokumenty, akceptacje i raporty obsługują się same.",
    bullets: [
      "Porządek w dokumentach i uprawnieniach SharePoint",
      "Akceptacje i powiadomienia w Teams",
      "Raporty z Excela bez ręcznego składania",
    ],
  },
  intro: {
    title: "Microsoft 365 jako podstawa automatyzacji",
    paragraphs: [
      "Oprócz Worda i Excela w pakiecie Microsoft 365 są też SharePoint do dokumentów i list, Teams do komunikacji, Forms do formularzy, Lists do prostych rejestrów i Power Automate do automatyzacji. Wiele firm płaci za te narzędzia, ale korzysta tylko z poczty i plików.",
      "Gdy dokumenty leżą na dyskach osobistych, akceptacje odbywają się mailem, a raporty składa się ręcznie z kilku arkuszy, firma traci czas i kontrolę. Porządkujemy strukturę SharePoint, ustawiamy uprawnienia i budujemy przepływy, które łączą te elementy.",
      "Zostajemy w środowisku, które zespół zna i które dział IT już kontroluje. Do automatyzacji używamy Power Automate, a gdy trzeba połączyć systemy spoza Microsoftu, także Make lub n8n.",
    ],
  },
  useCases: {
    title: "Co porządkujemy i automatyzujemy w Microsoft 365",
    lead: "Zaczynamy od tego, gdzie zespół traci najwięcej czasu: dokumenty, akceptacje albo raporty.",
    items: [
      { title: "Struktura SharePoint", body: "Biblioteki, metadane i uprawnienia, dzięki którym każdy wie, gdzie jest aktualna wersja dokumentu." },
      { title: "Akceptacje w Teams", body: "Faktury, umowy i wnioski zatwierdzane w Teams, z historią decyzji przy dokumencie." },
      { title: "Formularze i rejestry", body: "Zgłoszenia z Forms trafiają do list SharePoint i uruchamiają kolejne kroki." },
      { title: "Raporty z Excela", body: "Dane z kilku plików i systemów łączone w raport odświeżany automatycznie lub w Power BI." },
    ],
  },
  flows: {
    title: "Przykładowe procesy w Microsoft 365",
    lead: "Procesy, które budujemy na narzędziach, które już macie w pakiecie.",
    items: [
      {
        title: "Umowa do akceptacji",
        trigger: "Nowy dokument w bibliotece Umowy w SharePoint",
        steps: ["Uzupełnienie metadanych: klient, wartość, termin", "Akceptacja prawnika i zarządu w Teams", "Zapis wersji podpisanej i przypomnienie przed końcem umowy"],
        result: "Umowy są w jednym miejscu, a terminy nie umykają.",
      },
      {
        title: "Zgłoszenie do działu IT",
        trigger: "Formularz w Forms lub Teams",
        steps: ["Zapis na liście zgłoszeń", "Przypisanie osoby i priorytetu", "Powiadomienie zgłaszającego o postępie"],
        result: "Zgłoszenia nie giną w mailach.",
      },
      {
        title: "Raport sprzedaży",
        trigger: "Harmonogram, każdy poniedziałek",
        steps: ["Pobranie danych z plików oddziałów", "Połączenie i przeliczenie w Excelu", "Wysłanie raportu do zarządu w Teams"],
        result: "Raport gotowy bez godzin kopiowania danych.",
      },
    ],
  },
  fit: {
    title: "Kiedy stawiamy na Microsoft 365, a kiedy na coś innego",
    good: [
      "Firma ma licencje Microsoft 365 i pracuje w Outlooku i Teams.",
      "Dokumenty i uprawnienia muszą być pod kontrolą działu IT.",
      "Procesy opierają się na akceptacjach i dokumentach.",
      "Chcecie wykorzystać narzędzia, za które już płacicie.",
    ],
    limits: [
      "Proces wymaga elastycznej bazy danych z relacjami. Wtedy często lepszy jest Airtable lub Dataverse.",
      "Większość systemów firmy jest spoza Microsoftu i łatwiej połączyć je w Make lub n8n.",
      "Zespół pracuje w Google Workspace.",
    ],
  },
  comparison: {
    title: "Microsoft 365 czy Google Workspace",
    lead: "Oba pakiety dają podobne podstawy. Różnią się podejściem do dokumentów, automatyzacji i zarządzania.",
    columns: ["Microsoft 365", "Google Workspace"],
    rows: [
      { label: "Dokumenty", values: ["SharePoint i OneDrive, rozbudowane uprawnienia", "Dysk Google, prosta współpraca"] },
      { label: "Komunikacja", values: ["Teams", "Google Chat i Meet"] },
      { label: "Automatyzacja", values: ["Power Automate", "Apps Script, AppSheet"] },
      { label: "Arkusze i raporty", values: ["Excel, Power BI", "Arkusze, Looker Studio"] },
      { label: "Dla kogo", values: ["Firmy z działem IT i rozbudowanymi uprawnieniami", "Małe i średnie zespoły nastawione na prostotę"] },
    ],
    note: "Porównanie jest uproszczone. Automatyzujemy w obu środowiskach.",
  },
  example: {
    title: "Dokumenty i akceptacje przed i po uporządkowaniu Microsoft 365",
    lead: "Przykład firmy inżynierskiej, w której dokumenty projektowe leżały na dyskach osobistych i w mailach.",
    rows: [
      { label: "Dokumenty", before: "Na dyskach osobistych i w załącznikach.", after: "W bibliotekach SharePoint z metadanymi projektu." },
      { label: "Wersje", before: "Kilka plików z dopiskiem final.", after: "Jedna wersja z historią zmian." },
      { label: "Akceptacje", before: "Mailem, bez śladu decyzji.", after: "W Teams, z zapisem przy dokumencie." },
      { label: "Dostęp", before: "Pliki wysyłane mailem do zewnętrznych osób.", after: "Kontrolowane udostępnianie z datą wygaśnięcia." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  costs: {
    title: "Ile kosztuje automatyzacja w Microsoft 365",
    paragraphs: [
      "Duża część narzędzi, z których korzystamy, jest już w waszych licencjach Microsoft 365: SharePoint, Teams, Forms, Lists i podstawowe przepływy Power Automate. Dodatkowe licencje są potrzebne przy konektorach premium, Power BI Pro czy przepływach desktopowych bez nadzoru.",
      "Przed wdrożeniem sprawdzamy wasze licencje i planujemy rozwiązanie tak, żeby nie kupować niczego bez potrzeby. Koszt pracy wyceniamy po konsultacji.",
    ],
  },
  faq: [
    { question: "Czy potrzebujemy dodatkowych licencji?", answer: "Często nie. Wiele procesów da się zbudować na SharePoint, Teams, Forms i podstawowym Power Automate. Dodatkowe licencje sprawdzamy i planujemy przed wdrożeniem." },
    { question: "Czy porządkujecie SharePoint, w którym jest bałagan?", answer: "Tak. Projektujemy strukturę bibliotek, metadane i uprawnienia, a potem przenosimy dokumenty i uczymy zespół, jak z nich korzystać." },
    { question: "Czy da się zrobić akceptacje w Teams?", answer: "Tak. Faktury, umowy, wnioski i zamówienia mogą być akceptowane w Teams, z historią decyzji przy dokumencie." },
    { question: "Czy łączycie Microsoft 365 z systemami spoza Microsoftu?", answer: "Tak. Przez Power Automate albo, gdy jest wygodniej, przez Make lub n8n." },
    { question: "Czy wdrażacie Copilota?", answer: "Pomagamy przygotować dane i uprawnienia, bez których Copilot daje słabe wyniki, i pokazujemy zespołowi, jak go używać w codziennej pracy." },
    { question: "Czy współpracujecie z naszym działem IT?", answer: "Tak. Uzgadniamy uprawnienia, konta techniczne i zasady bezpieczeństwa, żeby automatyzacje były zgodne z polityką firmy." },
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "automatyzacja-dla-hr", "szkolenia-ai-dla-zespolow"],
  relatedToolSlugs: ["power-automate", "google-workspace", "ksef", "chatgpt"],
  relatedArticleSlugs: ["cyfryzacja-danych-w-firmie", "automatyzacja-onboardingu-pracownika", "od-czego-zaczac-mapowanie-procesow"],
};
