import { defineTerm } from "../types";

export default defineTerm({
  slug: "jedno-zrodlo-prawdy",
  term: "Jedno źródło prawdy",
  category: "dane",
  definition:
    "Jedno źródło prawdy to zasada, że każda informacja w firmie, na przykład dane klienta, cena czy stan zamówienia, ma jedno nadrzędne miejsce, a pozostałe systemy pobierają ją stamtąd zamiast prowadzić własne kopie.",
  metaTitle: "Jedno źródło prawdy: co to jest i jak je zbudować",
  metaDescription:
    "Jedno źródło prawdy co to jest: dlaczego kopie danych w wielu systemach szkodzą, jak ustalić system nadrzędny i jak automatyzacja utrzymuje spójność.",
  primaryKeyword: "jedno źródło prawdy",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest jedno źródło prawdy",
    "W wielu firmach te same dane żyją w kilku miejscach. Adres klienta jest w CRM, w programie do faktur, w arkuszu handlowca i w skrzynce mailowej. Gdy klient zmieni adres, poprawia się go w jednym miejscu, a w pozostałych zostaje stary. Po kilku miesiącach nikt nie wie, która wersja jest właściwa.",
    "Zasada jednego źródła prawdy, po angielsku single source of truth, mówi, że dla każdej informacji ustala się jeden system nadrzędny. Tam dane się zmienia, a pozostałe systemy albo pobierają je na bieżąco, albo dostają aktualizację automatycznie.",
    "## Jak ustalić, co jest źródłem",
    "Źródłem prawdy nie musi być jeden system dla wszystkiego. Zwykle różne informacje mają różne źródła:",
    "| Informacja | Typowe źródło | Kto pobiera |\n|---|---|---|\n| Dane klienta i kontakty | [CRM](/slownik/crm) | Faktury, obsługa klienta, marketing |\n| Produkty, ceny, stany | [ERP](/slownik/erp) | Sklep, oferty, CRM |\n| Faktury i płatności | Program księgowy, KSeF | CRM, windykacja, raporty |\n| Pracownicy | System kadrowy | Uprawnienia, grafiki |",
    "Najważniejsze, żeby ta mapa była spisana i znana zespołowi. Wtedy każdy wie, gdzie poprawić dane, a automatyzacje wiedzą, skąd je pobierać.",
    "## Jak automatyzacja pomaga",
    "Gdy źródła są ustalone, integracje przenoszą zmiany w jednym kierunku: z systemu nadrzędnego do pozostałych. Zmiana adresu w CRM automatycznie aktualizuje kontrahenta w programie do faktur. Zmiana ceny w ERP aktualizuje sklep. Nikt nie poprawia danych w kilku miejscach, a raporty pokazują te same liczby. Takie połączenia budujemy w usłudze [integracje systemów](/uslugi/integracje-systemow).",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. W biurze rachunkowym lista klientów jest w programie księgowym, w arkuszu z terminami i w skrzynce każdej księgowej. Po wdrożeniu nadrzędnym rejestrem klientów staje się baza w Airtable. Program księgowy, przypomnienia o dokumentach i raport obciążenia zespołu pobierają dane stamtąd. Nowy klient jest dodawany raz i od razu pojawia się w przypomnieniach.",
    "## Jak sprawdzić, czy macie problem",
    "Wybierzcie kilku klientów i porównajcie ich dane w każdym systemie, w którym występują: CRM, program do faktur, arkusze. Jeśli adres, osoba kontaktowa albo warunki płatności różnią się między systemami, macie kilka źródeł prawdy. Taki prosty test w kilkanaście minut pokazuje skalę problemu i pomaga ustalić, od których danych zacząć porządki.",
    "## Najczęstsze przeszkody",
    "- **Przyzwyczajenia:** ludzie wolą swój arkusz. Pomaga to, że nowy system jest wygodniejszy, a nie tylko obowiązkowy.\n- **Duplikaty:** zanim dane trafią do źródła, trzeba je oczyścić, o czym piszemy w haśle [deduplikacja danych](/slownik/deduplikacja-danych).\n- **Brak wspólnych identyfikatorów:** bez numeru klienta lub NIP trudno połączyć rekordy z różnych systemów.",
    "Porządkowanie danych przed takimi zmianami opisujemy w artykule [porządek w danych przed AI i automatyzacją](/poradnik/porzadek-w-danych-przed-ai-i-automatyzacja) oraz w usłudze [porządkowanie i strukturyzowanie danych](/uslugi/porzadkowanie-i-strukturyzowanie-danych).",
  ].join("\n\n"),
  faq: [
    { question: "Czy jedno źródło prawdy oznacza jeden system dla całej firmy?", answer: "Nie. Różne informacje mogą mieć różne źródła. Ważne, żeby dla każdej informacji źródło było jedno i znane." },
    { question: "Co zrobić z danymi, które są w kilku miejscach?", answer: "Ustalić system nadrzędny, oczyścić dane, przenieść je tam, a w pozostałych systemach zastąpić kopie automatyczną synchronizacją." },
    { question: "Czy to ważne przed wdrożeniem AI?", answer: "Tak. AI odpowiadające na podstawie sprzecznych danych daje sprzeczne odpowiedzi." },
  ],
  relatedTermSlugs: ["deduplikacja-danych", "etl", "crm", "erp"],
  relatedServiceSlugs: ["porzadkowanie-i-strukturyzowanie-danych", "integracje-systemow", "wdrozenia-airtable"],
  relatedToolSlugs: [],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["porzadek-w-danych-przed-ai-i-automatyzacja", "integracja-crm-z-fakturowaniem"],
});
