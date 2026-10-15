import { defineTerm } from "../types";

export default defineTerm({
  slug: "idp",
  term: "IDP (inteligentne przetwarzanie dokumentów)",
  fullName: "Intelligent Document Processing",
  category: "ai",
  definition:
    "IDP, czyli inteligentne przetwarzanie dokumentów, to połączenie odczytu tekstu i AI, które rozumie dokument, wyodrębnia z niego potrzebne dane, sprawdza je i przekazuje do systemów firmy.",
  metaTitle: "IDP: co to jest inteligentne przetwarzanie dokumentów",
  metaDescription:
    "IDP co to jest: jak AI odczytuje faktury, zamówienia i umowy, wyodrębnia dane, sprawdza je i zapisuje w systemach. Etapy, przykłady i granice.",
  primaryKeyword: "inteligentne przetwarzanie dokumentów",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest IDP",
    "Firmy dostają dziesiątki rodzajów dokumentów: faktury, zamówienia, umowy, protokoły, dokumenty przewozowe, CV. Każdy dostawca ma inny układ faktury, każdy klient wysyła zamówienie w innym formacie. Klasyczne rozwiązania wymagały szablonu dla każdego układu. IDP wykorzystuje [model językowy](/slownik/llm), który rozumie dokument podobnie jak człowiek, więc radzi sobie z nowymi układami bez osobnej konfiguracji.",
    "## Etapy przetwarzania",
    "- **Przyjęcie:** dokument przychodzi mailem, ze skanera, z formularza lub z systemu.\n- **Odczyt:** jeśli to obraz, [OCR](/slownik/ocr) zamienia go na tekst. Jeśli to PDF z tekstem, krok jest prostszy.\n- **Klasyfikacja:** system rozpoznaje rodzaj dokumentu, np. faktura, korekta, zamówienie.\n- **Wyodrębnienie:** AI zwraca konkretne pola, najczęściej jako [JSON](/slownik/json): numer, daty, kontrahent, pozycje, kwoty.\n- **Walidacja:** automatyzacja sprawdza dane, np. czy NIP istnieje w bazie, czy suma pozycji zgadza się z kwotą razem, czy zamówione produkty są w ofercie.\n- **Akceptacja:** dokumenty, przy których coś się nie zgadza, trafiają do człowieka.\n- **Zapis:** dane trafiają do [ERP](/slownik/erp), programu księgowego, CRM albo rejestru.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Hurtownia dostaje zamówienia mailem od kilkuset klientów, każde w innym formacie: PDF z systemu klienta, Excel, zwykła treść maila. IDP rozpoznaje klienta, wyodrębnia pozycje i ilości, dopasowuje nazwy produktów klienta do kodów hurtowni i porównuje ceny z cennikiem klienta. Zamówienia, w których wszystko się zgadza, trafiają do ERP od razu. Te z nierozpoznanym produktem lub inną ceną czekają na sprawdzenie przez handlowca. Cały proces opisujemy na stronie [przyjmowanie zamówień](/procesy/przyjmowanie-zamowien).",
    "## IDP a RPA",
    "IDP rozumie dokument, a [RPA](/slownik/rpa) obsługuje interfejs programu. Te podejścia się uzupełniają: gdy docelowy system nie ma API, IDP wyodrębnia dane, a robot RPA wpisuje je do programu.",
    "## Od czego zacząć",
    "Wybierzcie jeden rodzaj dokumentu, który przychodzi często i jest dziś przepisywany ręcznie, np. faktury kosztowe albo zamówienia od klientów. Zbierzcie kilkadziesiąt przykładów, w tym te nietypowe, i spiszcie, które pola są potrzebne i jak je sprawdzić. Na tej podstawie powstaje pierwszy przepływ, który przez kilka tygodni działa równolegle z dotychczasową pracą.",
    "## Granice",
    "IDP przyspiesza pracę, ale nie zdejmuje odpowiedzialności. Przy danych finansowych potrzebne są reguły walidacji i ścieżka dla wyjątków. Przy umowach AI może streścić zapisy i wskazać nietypowe klauzule, ale ich ocena należy do prawnika, o czym piszemy w artykule [AI w analizie umów](/poradnik/ai-w-analizie-umow). Warto też ustalić, gdzie dokumenty są przetwarzane, jeśli zawierają dane osobowe.",
    "IDP wdrażamy w usłudze [AI w obsłudze dokumentów](/uslugi/ai-w-obsludze-dokumentow), a przykład obiegu faktur opisujemy na stronie [obieg faktur kosztowych](/procesy/obieg-faktur-kosztowych).",
  ].join("\n\n"),
  faq: [
    { question: "Czy IDP wymaga szablonu dla każdego dostawcy?", answer: "Nie. Modele językowe rozumieją różne układy dokumentów. Szablony i reguły przydają się do walidacji, a nie do odczytu." },
    { question: "Jakie dokumenty nadają się do IDP?", answer: "Faktury, zamówienia, dokumenty przewozowe, protokoły, umowy, formularze. Najlepiej te, które przychodzą często i mają powtarzalną treść." },
    { question: "Co się dzieje z dokumentami, których AI nie odczyta?", answer: "Trafiają do kolejki do sprawdzenia przez człowieka, razem z informacją, czego brakuje." },
  ],
  relatedTermSlugs: ["ocr", "llm", "rpa", "json"],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow"],
  relatedToolSlugs: ["n8n", "claude", "chatgpt"],
  relatedProcessSlugs: ["przyjmowanie-zamowien", "obieg-faktur-kosztowych"],
  relatedArticleSlugs: ["ai-w-analizie-umow", "platforma-b2b-czy-automatyzacja-zamowien"],
});
