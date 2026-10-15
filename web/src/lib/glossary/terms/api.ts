import { defineTerm } from "../types";

export default defineTerm({
  slug: "api",
  term: "API",
  fullName: "Application Programming Interface",
  category: "automatyzacja",
  definition:
    "API to uzgodniony sposób, w jaki jeden program może pobrać dane z innego programu albo zlecić mu wykonanie operacji, bez udziału człowieka i bez klikania w interfejs.",
  metaTitle: "API: co to jest i do czego służy w firmie",
  metaDescription:
    "API co to jest: jak programy wymieniają dane bez udziału człowieka, czym różni się od webhooka i czego potrzeba, żeby połączyć systemy w firmie.",
  primaryKeyword: "api co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest API",
    "Każdy program ma interfejs dla ludzi: ekrany, przyciski, formularze. API to interfejs dla innych programów. Zamiast klikać w panelu, program wysyła ustrukturyzowane zapytanie, na przykład „podaj listę faktur z ostatniego tygodnia” albo „zapisz nowego klienta z tymi danymi”, i dostaje odpowiedź w formacie, który łatwo przetworzyć, najczęściej [JSON](/slownik/json).",
    "API określa, o co można poprosić, jakie dane trzeba podać i jak wygląda odpowiedź. Dostawca systemu publikuje dokumentację API, a każdy, kto ma odpowiednie uprawnienia, może z niego korzystać. Dostęp zabezpiecza się kluczem albo logowaniem przez dedykowane konto.",
    "## Do czego API służy w firmie",
    "API pozwala połączyć systemy, które same z siebie się nie znają. Dzięki niemu:",
    "- zamówienie ze sklepu trafia do [ERP](/slownik/erp) bez przepisywania,\n- faktura z programu do fakturowania trafia do księgowości i do [KSeF](/narzedzia/ksef),\n- dane klienta z formularza zapisują się w [CRM](/slownik/crm),\n- raport pobiera dane z kilku systemów naraz.",
    "Bez API takie połączenia wymagałyby ręcznego eksportu i importu plików albo przepisywania danych przez ludzi.",
    "## API a webhook",
    "Przez API to automatyzacja pyta system o dane albo zleca zapis. [Webhook](/slownik/webhook) działa odwrotnie: system sam informuje, że coś się wydarzyło. Dobre integracje łączą oba podejścia. Webhook uruchamia przepływ, a API dostarcza szczegóły i zapisuje wynik.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Hurtownia chce, żeby stany magazynowe z ERP były widoczne w sklepie internetowym. Automatyzacja co kwadrans pyta API systemu ERP o zmiany stanów, a następnie przez API sklepu aktualizuje dostępność produktów. Nikt nie eksportuje plików i nikt nie sprzedaje towaru, którego nie ma. Takie połączenia budujemy w narzędziach jak [n8n](/narzedzia/n8n) albo [Make](/narzedzia/make), a gdy gotowe moduły nie wystarczają, piszemy własne wywołania API.",
    "## Jak czytać dokumentację API",
    "Dokumentacja API opisuje dostępne operacje, zwykle nazywane punktami końcowymi. Dla każdego jest adres, rodzaj zapytania, wymagane pola i przykład odpowiedzi. Nie trzeba być programistą, żeby z niej skorzystać przy ocenie systemu. Wystarczy sprawdzić, czy da się pobrać i zapisać dane, których potrzebujecie: klientów, zamówienia, faktury, statusy. Jeśli w dokumentacji brakuje operacji niezbędnej w waszym procesie, lepiej wiedzieć o tym przed zakupem.",
    "## Na co zwrócić uwagę przy wyborze systemów",
    "- **Czy system w ogóle ma API.** Starsze programy instalowane lokalnie często go nie mają albo udostępniają tylko część danych.\n- **Limity zapytań.** Wiele API ogranicza liczbę zapytań w określonym czasie. Integracja musi to uwzględniać.\n- **Dostęp w planie abonamentowym.** U części dostawców API jest dostępne dopiero w wyższych planach.\n- **Dokumentacja i stabilność.** Dobrze opisane API, które nie zmienia się co miesiąc, oznacza tańsze utrzymanie integracji.",
    "Jeśli wybieracie nowy system, warto zapytać o API przed zakupem. To często decyduje o tym, czy da się go potem połączyć z resztą firmy. Więcej o wyborze narzędzi piszemy w artykule [jak wybrać narzędzie do automatyzacji](/poradnik/jak-wybrac-narzedzie-do-automatyzacji), a samym łączeniem systemów zajmujemy się w usłudze [integracje systemów](/uslugi/integracje-systemow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy API jest płatne?", answer: "To zależy od dostawcy. Często API jest w cenie abonamentu, czasem tylko w wyższych planach, a niektóre usługi rozliczają się za liczbę zapytań." },
    { question: "Czy połączenie przez API jest bezpieczne?", answer: "Tak, jeśli dostęp ma ograniczone uprawnienia, klucze są przechowywane bezpiecznie, a połączenie jest szyfrowane." },
    { question: "Co zrobić, gdy system nie ma API?", answer: "Można korzystać z eksportów plików, poczty, a w ostateczności z RPA, które klika w interfejs za człowieka." },
  ],
  relatedTermSlugs: ["webhook", "json", "ipaas", "rpa"],
  relatedServiceSlugs: ["integracje-systemow", "migracja-danych"],
  relatedToolSlugs: ["n8n", "make", "zapier"],
  relatedProcessSlugs: ["przyjmowanie-zamowien"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "jak-wybrac-narzedzie-do-automatyzacji"],
});
