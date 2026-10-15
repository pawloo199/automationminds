import { defineTerm } from "../types";

export default defineTerm({
  slug: "business-intelligence",
  term: "Business Intelligence (BI)",
  category: "dane",
  definition:
    "Business Intelligence to narzędzia i sposób pracy, dzięki którym dane z różnych systemów firmy trafiają do jednego miejsca i są pokazywane w raportach oraz na pulpitach, żeby łatwiej podejmować decyzje.",
  metaTitle: "Business Intelligence: co to jest BI i kiedy się przydaje",
  metaDescription:
    "Business Intelligence co to jest: jak dane z CRM, ERP i księgowości trafiają do raportów i pulpitów, z czego składa się BI i od czego zacząć w firmie.",
  primaryKeyword: "business intelligence co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest Business Intelligence",
    "Business Intelligence, w skrócie BI, to sposób na to, żeby zarząd i kierownicy widzieli aktualne liczby bez ręcznego składania arkuszy. Dane ze sprzedaży, finansów, produkcji czy obsługi klienta trafiają do jednego miejsca, a narzędzie BI pokazuje je na pulpitach: wykresach, tabelach i wskaźnikach, które można filtrować według okresu, klienta czy działu.",
    "## Z czego składa się BI",
    "- **Źródła danych:** [CRM](/slownik/crm), [ERP](/slownik/erp), program księgowy, sklep, arkusze.\n- **Przenoszenie i porządkowanie danych:** proces [ETL](/slownik/etl), który regularnie pobiera dane, ujednolica je i zapisuje.\n- **Miejsce na dane:** baza lub hurtownia danych przygotowana do raportów.\n- **Warstwa raportów:** narzędzie, które pokazuje pulpity, np. Power BI, Looker Studio albo widoki w Airtable.\n- **Definicje wskaźników:** spisane zasady, jak liczymy przychód, marżę czy rentowność klienta.",
    "Ostatni punkt bywa najważniejszy. Gdy sprzedaż i księgowość liczą przychód inaczej, najlepszy pulpit pokaże dwie różne liczby i wywoła spór zamiast decyzji.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Właściciel firmy dystrybucyjnej co miesiąc dostaje od księgowości i handlowców kilka arkuszy, które ktoś składa przez dwa dni. Po wdrożeniu dane z ERP i programu księgowego trafiają co noc do bazy raportowej. Pulpit pokazuje sprzedaż i marżę według klientów i grup produktów, przeterminowane należności i trend miesiąc do miesiąca. Raport tygodniowy wysyła się automatycznie w poniedziałek rano. O raportowaniu w finansach piszemy na stronie [raporty finansowe](/procesy/raporty-finansowe).",
    "## BI w małej i średniej firmie",
    "BI nie wymaga od razu dużej platformy i zespołu analityków. Często wystarczy uporządkowanie danych, kilka automatycznych przepływów i dobrze zaprojektowane trzy, cztery pulpity, z których ktoś faktycznie korzysta. Lepiej zacząć od pytań, na które zarząd chce odpowiadać co tydzień, niż od listy wszystkich możliwych wykresów.",
    "## Jak zaprojektować pierwszy pulpit",
    "Dobry pulpit odpowiada na kilka konkretnych pytań, a nie pokazuje wszystkiego. Na górze najważniejsze wskaźniki z porównaniem do poprzedniego okresu, niżej szczegóły, które pozwalają znaleźć przyczynę zmiany. Każdy wskaźnik powinien mieć opis, jak jest liczony. Po kilku tygodniach warto sprawdzić, z których elementów ktoś faktycznie korzysta, a resztę usunąć.",
    "## Na co uważać",
    "- **Jakość danych:** raport jest tak dobry, jak dane w systemach. Duplikaty i braki trzeba usunąć wcześniej.\n- **Za dużo wskaźników:** pulpit z pięćdziesięcioma wykresami nikt nie czyta.\n- **Brak właściciela:** każdy pulpit powinien mieć osobę, która odpowiada za jego poprawność.\n- **Ręczne kroki:** jeśli dane trzeba wgrywać ręcznie, raport szybko przestaje być aktualny.",
    "Raporty i pulpity budujemy w usłudze [automatyzacja raportów](/uslugi/automatyzacja-raportow). Jak wybierać wskaźniki, opisujemy na przykładzie logistyki w artykule [KPI w logistyce](/poradnik/kpi-w-logistyce).",
  ].join("\n\n"),
  faq: [
    { question: "Czy BI to to samo co raporty w Excelu?", answer: "Raport w Excelu to jeden z wyników. BI oznacza cały układ: automatyczne pobieranie danych, wspólne definicje wskaźników i aktualne pulpity." },
    { question: "Jakie narzędzie BI wybrać?", answer: "Firmy z Microsoft 365 często wybierają Power BI, a firmy z Google Workspace Looker Studio. Ważniejsze od narzędzia jest uporządkowanie danych." },
    { question: "Od czego zacząć BI?", answer: "Od kilku pytań, na które zarząd chce regularnie odpowiadać, i od sprawdzenia, w jakich systemach są potrzebne dane." },
  ],
  relatedTermSlugs: ["etl", "jedno-zrodlo-prawdy", "erp", "crm"],
  relatedServiceSlugs: ["automatyzacja-raportow", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedToolSlugs: ["microsoft-365", "google-workspace"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedArticleSlugs: ["kpi-w-logistyce", "jak-mierzyc-roi-automatyzacji"],
});
