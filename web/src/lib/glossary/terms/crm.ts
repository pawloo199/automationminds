import { defineTerm } from "../types";

export default defineTerm({
  slug: "crm",
  term: "CRM",
  fullName: "Customer Relationship Management",
  category: "systemy",
  definition:
    "CRM to system do zarządzania relacjami z klientami, w którym firma prowadzi kontakty, szanse sprzedaży, historię rozmów i zadania handlowców, tak żeby nic nie ginęło w mailach i notatkach.",
  metaTitle: "CRM: co to jest system CRM i jak go automatyzować",
  metaDescription:
    "CRM co to jest: co zawiera system CRM, jak pomaga w sprzedaży i obsłudze klienta, czym różni się od ERP i co można w nim zautomatyzować.",
  primaryKeyword: "crm co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest CRM",
    "CRM to miejsce, w którym zespół sprzedaży i obsługi klienta prowadzi wszystko, co dotyczy klientów: firmy i osoby kontaktowe, zapytania, oferty, szanse sprzedaży na kolejnych etapach, zadania i historię kontaktów. Zamiast pamięci handlowca i jego skrzynki mailowej firma ma wspólną bazę, która zostaje także wtedy, gdy handlowiec odchodzi.",
    "Popularne systemy CRM to m.in. [HubSpot](/narzedzia/hubspot) i [Pipedrive](/narzedzia/pipedrive). Część firm buduje CRM dopasowany do siebie w [Airtable](/uslugi/wdrozenia-airtable), zwłaszcza gdy proces sprzedaży jest nietypowy.",
    "## Co zawiera CRM",
    "- **Kontakty i firmy:** dane, osoby decyzyjne, historia współpracy.\n- **Lejek sprzedaży:** szanse na etapach od zapytania do podpisania umowy.\n- **Aktywności:** rozmowy, spotkania, maile, zadania z terminami.\n- **Raporty:** wartość lejka, skuteczność, prognozy sprzedaży.\n- **Integracje:** poczta, kalendarz, formularze, program do faktur.",
    "## Co można zautomatyzować w CRM",
    "- zapytania z formularzy i maili trafiają do CRM same, z przypisanym handlowcem,\n- przypomnienia o kontakcie po wysłaniu oferty,\n- oferta z szablonu na podstawie danych szansy,\n- po wygranej szansie automatyczne zlecenie, faktura zaliczkowa lub onboarding klienta,\n- uzupełnianie danych firmy po NIP,\n- ocena i priorytetyzacja zapytań z pomocą AI.",
    "Więcej o tym piszemy w artykule [automatyzacja obsługi leadów sprzedażowych](/poradnik/automatyzacja-obslugi-leadow-sprzedazowych) i na stronie procesu [obsługa zapytań i leadów](/procesy/obsluga-zapytan-i-leadow).",
    "## CRM a ERP",
    "CRM służy relacjom z klientem i sprzedaży, a [ERP](/slownik/erp) operacjom i finansom. Gdy oba systemy są połączone, handlowiec widzi w CRM faktury i należności klienta, a ERP dostaje zamówienie bez przepisywania. O łączeniu CRM z fakturowaniem piszemy w artykule [integracja CRM z fakturowaniem](/poradnik/integracja-crm-z-fakturowaniem).",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Biuro nieruchomości dostaje zapytania z kilku portali. Wcześniej każdy agent odpisywał ze swojej skrzynki, a część zapytań ginęła. Po wdrożeniu zapytania z portali trafiają do CRM, są łączone z ofertą, której dotyczą, a agent dostaje zadanie z terminem odpowiedzi. Kierownik widzi, ile zapytań czeka i które oferty generują najwięcej zainteresowania.",
    "## Jak wdrożyć CRM, żeby zespół z niego korzystał",
    "Zacznijcie od zapisania, jak wygląda wasz proces sprzedaży: skąd przychodzą zapytania, jakie są etapy i kiedy szansa jest wygrana. Dopiero potem konfiguruje się CRM. Na start wystarczy kilka pól i etapów, a resztę dodaje się, gdy zespół zacznie korzystać z systemu. Automatyczne wpisywanie zapytań i przypomnienia sprawiają, że CRM oszczędza czas od pierwszego dnia.",
    "## Najczęstszy problem",
    "CRM działa tylko wtedy, gdy zespół z niego korzysta. Jeśli wprowadzanie danych zajmuje więcej czasu niż praca bez systemu, handlowcy wrócą do arkuszy. Dlatego automatyzacja wpisywania danych jest często ważniejsza niż sam wybór systemu. Wdrożenia CRM i automatyzacje sprzedaży opisujemy w usłudze [automatyzacja sprzedaży](/uslugi/automatyzacja-sprzedazy).",
  ].join("\n\n"),
  faq: [
    { question: "Jaki CRM wybrać dla małej firmy?", answer: "Taki, który pasuje do procesu sprzedaży i łatwo łączy się z pocztą i programem do faktur. Często są to Pipedrive lub HubSpot, a przy nietypowych procesach CRM w Airtable." },
    { question: "Czy CRM można połączyć z programem do faktur?", answer: "Tak. Po wygranej szansie faktura może powstać automatycznie, a status płatności wrócić do CRM." },
    { question: "Czy CRM to to samo co ERP?", answer: "Nie. CRM dotyczy klientów i sprzedaży, ERP operacji i finansów. W wielu firmach działają oba i warto je połączyć." },
  ],
  relatedTermSlugs: ["erp", "jedno-zrodlo-prawdy", "deduplikacja-danych", "webhook"],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "integracje-systemow", "wdrozenia-airtable"],
  relatedToolSlugs: ["hubspot", "pipedrive"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "ofertowanie"],
  relatedArticleSlugs: ["automatyzacja-obslugi-leadow-sprzedazowych", "integracja-crm-z-fakturowaniem", "crm-dla-biura-nieruchomosci"],
});
