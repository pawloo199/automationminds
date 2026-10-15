import { defineTerm } from "../types";

export default defineTerm({
  slug: "erp",
  term: "ERP",
  fullName: "Enterprise Resource Planning",
  category: "systemy",
  definition:
    "ERP to zintegrowany system do zarządzania zasobami firmy, który w jednym miejscu łączy sprzedaż, zakupy, magazyn, produkcję i finanse, tak że dane wprowadzone w jednym dziale są od razu dostępne w innych.",
  metaTitle: "ERP: co to jest system ERP i jak go połączyć z resztą firmy",
  metaDescription:
    "ERP co to jest: jakie obszary obejmuje system ERP, czym różni się od CRM, kiedy firma go potrzebuje i jak automatyzacja łączy ERP z innymi systemami.",
  primaryKeyword: "erp co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest ERP",
    "ERP to system, w którym firma prowadzi swoje podstawowe operacje: kartoteki towarów i kontrahentów, zamówienia, dokumenty magazynowe, zakupy, produkcję i księgowość. Zamiast osobnych programów dla każdego działu jest jedna baza danych. Zamówienie przyjęte przez handlowca od razu zmniejsza dostępny stan w magazynie, a wydanie towaru tworzy dokument do faktury.",
    "Na polskim rynku popularne są zarówno systemy dla małych firm, jak i rozbudowane platformy dla dużych przedsiębiorstw. Różnią się zakresem modułów, sposobem wdrożenia i tym, czy działają w chmurze, czy na serwerze firmy.",
    "## Typowe moduły",
    "- sprzedaż i zamówienia klientów,\n- zakupy i dostawcy,\n- magazyn i stany,\n- produkcja i planowanie,\n- finanse i księgowość,\n- kadry i płace, w części systemów.",
    "## ERP a CRM",
    "| Cecha | ERP | [CRM](/slownik/crm) |\n|---|---|---|\n| Główny cel | Operacje i finanse | Relacje z klientami i sprzedaż |\n| Typowe dane | Towary, stany, dokumenty, księgowość | Kontakty, szanse, aktywności |\n| Główni użytkownicy | Magazyn, zakupy, księgowość, produkcja | Handlowcy, marketing, obsługa |",
    "Wiele firm ma oba systemy, a problemy zaczynają się, gdy nie są połączone: handlowiec nie widzi w CRM należności klienta, a ERP nie wie o ustaleniach z klientem.",
    "## Automatyzacja wokół ERP",
    "ERP rzadko obejmuje wszystko, co dzieje się w firmie. Zamówienia przychodzą mailem, faktury kosztowe w PDF, klienci pytają o status przez telefon. Automatyzacja łączy ERP z resztą świata przez [API](/slownik/api) albo, gdy go brak, przez import plików lub [RPA](/slownik/rpa). Przykłady:",
    "- zamówienia z maili odczytane przez AI trafiają do ERP bez przepisywania, o czym piszemy na stronie [przyjmowanie zamówień](/procesy/przyjmowanie-zamowien),\n- stany i ceny z ERP aktualizują sklep internetowy,\n- dane z ERP zasilają raporty i pulpity zarządu.",
    "## Wybór ERP a automatyzacja",
    "Przy wyborze nowego systemu ERP pytania o funkcje zwykle przesłaniają pytania o wymianę danych. Tymczasem to, czy ERP ma udokumentowane API, czy pozwala na import i eksport w czytelnych formatach i czy obsługuje powiadomienia o zdarzeniach, decyduje o kosztach każdej późniejszej integracji. Warto zapisać te pytania w zapytaniu ofertowym do dostawców.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Zakład produkcyjny ma ERP, ale reklamacje, zgłoszenia awarii i dokumentacja techniczna są poza nim. Zamiast kupować kolejny moduł, zakład buduje lekkie rejestry obok ERP, które pobierają z niego dane o wyrobach, partiach i klientach. ERP zostaje [jednym źródłem prawdy](/slownik/jedno-zrodlo-prawdy) dla danych podstawowych. Takie podejście opisujemy na stronie [automatyzacja zakładu produkcyjnego](/branze/zaklady-produkcyjne).",
    "Łączeniem ERP z innymi systemami zajmujemy się w usłudze [integracje systemów](/uslugi/integracje-systemow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy mała firma potrzebuje ERP?", answer: "Nie zawsze. Mała firma usługowa często wystarczy program do faktur, CRM i dobrze połączone rejestry. ERP przydaje się zwłaszcza przy magazynie i produkcji." },
    { question: "Czy można połączyć ERP z innymi programami?", answer: "Tak, jeśli ERP ma API albo import i eksport danych. Przed zakupem systemu warto zapytać, jak wygląda wymiana danych." },
    { question: "Czy automatyzacja wymaga wymiany ERP?", answer: "Zwykle nie. Automatyzację buduje się obok ERP i łączy się z nim tam, gdzie to możliwe." },
  ],
  relatedTermSlugs: ["crm", "api", "jedno-zrodlo-prawdy", "mpk"],
  relatedServiceSlugs: ["integracje-systemow", "automatyzacja-w-produkcji", "automatyzacja-dla-logistyki"],
  relatedToolSlugs: ["n8n", "ksef"],
  relatedProcessSlugs: ["przyjmowanie-zamowien"],
  relatedArticleSlugs: ["platforma-b2b-czy-automatyzacja-zamowien", "co-zautomatyzowac-w-hurtowni"],
});
