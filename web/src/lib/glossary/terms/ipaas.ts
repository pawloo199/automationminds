import { defineTerm } from "../types";

export default defineTerm({
  slug: "ipaas",
  term: "iPaaS",
  fullName: "Integration Platform as a Service",
  category: "automatyzacja",
  definition:
    "iPaaS to platforma integracyjna w chmurze, w której łączy się różne systemy i buduje automatyzacje z gotowych modułów, bez stawiania własnych serwerów i pisania całej integracji od zera.",
  metaTitle: "iPaaS: co to jest platforma integracyjna",
  metaDescription:
    "iPaaS co to jest: platforma integracyjna w chmurze, przykłady jak Make, Zapier i n8n, czym różni się od integracji pisanej od zera i jak ją wybrać.",
  primaryKeyword: "ipaas co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest iPaaS",
    "iPaaS to usługa w chmurze, w której łączy się systemy firmy i buduje między nimi przepływy danych. Platforma ma gotowe moduły do popularnych aplikacji: poczty, CRM, programów do faktur, arkuszy, sklepów internetowych. Zamiast pisać integrację od podstaw, buduje się [workflow](/slownik/workflow) z klocków: [wyzwalacz](/slownik/wyzwalacz), pobranie danych, warunek, zapis w innym systemie.",
    "Przykłady platform tego typu to [Make](/narzedzia/make), [Zapier](/narzedzia/zapier), [Power Automate](/narzedzia/power-automate) i [n8n](/narzedzia/n8n). To ostatnie można uruchomić także na własnym serwerze, więc nie jest wyłącznie usługą chmurową, ale pełni tę samą rolę.",
    "## iPaaS a integracja pisana od zera",
    "| Cecha | iPaaS | Integracja pisana od zera |\n|---|---|---|\n| Czas budowy | Krótki, gotowe moduły | Dłuższy |\n| Utrzymanie | Dostawca dba o moduły | Wszystko po stronie firmy |\n| Elastyczność | Duża, ale w granicach platformy | Pełna |\n| Koszt | Abonament, często zależny od liczby operacji | Koszt programistów i serwera |\n| Widoczność | Przepływ widać na schemacie | Logika ukryta w kodzie |",
    "W praktyce większość firm zyskuje na platformie integracyjnej, a własny kod dopisuje się tylko tam, gdzie gotowe moduły nie wystarczają. Takie podejście opisujemy w artykule [gotowa automatyzacja czy budowana od zera](/poradnik/gotowa-automatyzacja-czy-budowana-od-zera).",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Firma usługowa korzysta z formularza na stronie, CRM, programu do faktur i kalendarza. W platformie integracyjnej powstają cztery przepływy: zapytanie z formularza trafia do CRM, podpisana oferta tworzy zlecenie i termin w kalendarzu, zakończone zlecenie generuje fakturę, a nieopłacona faktura uruchamia przypomnienie. Każdy przepływ widać na schemacie, a błędy trafiają do jednej skrzynki.",
    "## Bezpieczeństwo danych w platformie integracyjnej",
    "Przez platformę integracyjną przepływają dane klientów, faktury i dokumenty. Warto sprawdzić, gdzie dostawca przetwarza dane, jak długo przechowuje historię wykonań i kto w firmie ma dostęp do przepływów i haseł do systemów. Dobrą praktyką jest osobne konto techniczne dla każdej integracji, z uprawnieniami ograniczonymi do tego, czego przepływ potrzebuje.",
    "## Jak wybrać platformę",
    "- **Gdzie mają być dane?** Gdy dane muszą zostać w UE lub na serwerze firmy, przewagę ma n8n w wersji self-hosted.\n- **Jakie systemy łączycie?** Sprawdźcie, czy platforma ma moduły do waszych programów albo czy obsłuży ich [API](/slownik/api).\n- **Ile będzie operacji?** Cenniki zależą od liczby wykonań lub kroków. Przy dużym ruchu różnice są wyraźne.\n- **Kto będzie utrzymywał przepływy?** W firmach z Microsoft 365 naturalnym wyborem bywa Power Automate.",
    "Porównania narzędzi opisujemy w artykułach [n8n czy Make](/poradnik/n8n-czy-make) i [n8n czy Zapier](/poradnik/n8n-czy-zapier). Pomagamy też dobrać i wdrożyć platformę w usłudze [integracje systemów](/uslugi/integracje-systemow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy n8n to iPaaS?", answer: "Pełni tę samą rolę co platformy integracyjne, ale można go uruchomić na własnym serwerze. W wersji chmurowej działa jak typowy iPaaS." },
    { question: "Czy iPaaS zastąpi programistę?", answer: "W wielu integracjach tak. Przy nietypowych systemach i złożonej logice nadal przydaje się kod, który platformy pozwalają dopisać." },
    { question: "Ile kosztuje platforma integracyjna?", answer: "To zależy od dostawcy, planu i liczby operacji. Cenniki zmieniają się często, dlatego porównujemy je przy konkretnym procesie." },
  ],
  relatedTermSlugs: ["workflow", "api", "no-code-low-code", "webhook"],
  relatedServiceSlugs: ["integracje-systemow"],
  relatedToolSlugs: ["n8n", "make", "zapier", "power-automate"],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["n8n-czy-make", "n8n-czy-zapier", "gotowa-automatyzacja-czy-budowana-od-zera"],
});
