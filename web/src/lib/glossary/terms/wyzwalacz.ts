import { defineTerm } from "../types";

export default defineTerm({
  slug: "wyzwalacz",
  term: "Wyzwalacz (trigger)",
  category: "automatyzacja",
  definition:
    "Wyzwalacz, po angielsku trigger, to zdarzenie, które uruchamia automatyzację, na przykład nowy mail, wysłany formularz, zmiana statusu w CRM albo określona godzina.",
  metaTitle: "Wyzwalacz (trigger): co uruchamia automatyzację",
  metaDescription:
    "Trigger co to jest: rodzaje wyzwalaczy w automatyzacji, od webhooka przez harmonogram po zmianę w bazie danych, i jak dobrać właściwy do procesu.",
  primaryKeyword: "trigger co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest wyzwalacz",
    "Każda automatyzacja musi wiedzieć, kiedy zacząć działać. Wyzwalacz to właśnie ten moment: zdarzenie, po którym narzędzie uruchamia zaplanowane kroki. W [n8n](/narzedzia/n8n), [Make](/narzedzia/make) czy [Zapierze](/narzedzia/zapier) wyzwalacz jest zawsze pierwszym elementem przepływu.",
    "## Rodzaje wyzwalaczy",
    "| Rodzaj | Przykład | Kiedy wybrać |\n|---|---|---|\n| Webhook | Formularz wysyła dane od razu po wypełnieniu | Gdy liczy się natychmiastowa reakcja |\n| Sprawdzanie zmian | Co 15 minut narzędzie pyta system o nowe rekordy | Gdy system nie ma webhooków |\n| Harmonogram | Codziennie o 7:00 przygotuj raport | Raporty, przypomnienia, porządki |\n| Nowa wiadomość | Mail z fakturą w załączniku | Dokumenty przychodzące pocztą |\n| Zmiana w bazie | Status zamówienia zmienia się na „wysłane” | Procesy oparte na statusach |\n| Ręczne uruchomienie | Przycisk w aplikacji | Gdy decyzję o starcie podejmuje człowiek |",
    "Najszybszy jest [webhook](/slownik/webhook), bo system sam informuje o zdarzeniu. Sprawdzanie zmian przez [API](/slownik/api) działa z opóźnieniem i zużywa limity zapytań, ale bywa jedyną możliwością.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Biuro rachunkowe chce, żeby dokumenty od klientów trafiały do właściwego folderu i rejestru. Wyzwalaczem jest nowa wiadomość na skrzynce dokumentów z załącznikiem. Automatyzacja rozpoznaje klienta po adresie nadawcy, zapisuje plik w jego folderze i dodaje wpis do rejestru dokumentów. Drugi przepływ ma wyzwalacz czasowy: piątego dnia miesiąca sprawdza, którzy klienci nie przesłali jeszcze dokumentów, i wysyła im przypomnienie.",
    "## Jak dobrać wyzwalacz",
    "- **Jak szybko trzeba zareagować?** Zapytanie od klienta wymaga reakcji od razu, raport dzienny może poczekać do rana.\n- **Co udostępnia system?** Nie każdy program wysyła webhooki. Czasem trzeba sprawdzać zmiany co kilka minut.\n- **Czy zdarzenie jest jednoznaczne?** Wyzwalacz „nowy mail” uruchomi się też przy spamie, więc potrzebny jest filtr.\n- **Co przy awarii?** Dobrze, gdy zdarzenia, których nie udało się obsłużyć, można ponownie przetworzyć.",
    "## Wyzwalacz a warunki",
    "Wyzwalacz decyduje, kiedy przepływ rusza, a warunki w kolejnych krokach, czy ma coś zrobić. Przykład: wyzwalaczem jest każda zmiana statusu zamówienia, a warunek sprawdza, czy nowy status to „wysłane”. Takie rozdzielenie ułatwia późniejsze zmiany, bo ten sam wyzwalacz może obsłużyć kilka statusów, a każdy warunek prowadzi do innej części przepływu.",
    "## Najczęstsze błędy",
    "Zbyt szeroki wyzwalacz uruchamia automatyzację w sytuacjach, których nikt nie przewidział, na przykład przy każdej zmianie rekordu zamiast przy zmianie statusu. Zbyt wąski pomija część przypadków. Dlatego przy projektowaniu automatyzacji warto spisać wszystkie sytuacje, w których przepływ powinien ruszyć, i te, w których nie powinien. Więcej o typowych pułapkach piszemy w artykule [błędy przy pierwszym wdrożeniu automatyzacji](/poradnik/bledy-przy-pierwszym-wdrozeniu-automatyzacji), a projektowaniem przepływów zajmujemy się w usłudze [integracje systemów](/uslugi/integracje-systemow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy automatyzacja może mieć kilka wyzwalaczy?", answer: "Zwykle jeden przepływ ma jeden wyzwalacz. Gdy ta sama praca ma ruszać z kilku powodów, buduje się kilka przepływów, które uruchamiają wspólną część." },
    { question: "Jak często sprawdzać zmiany, gdy nie ma webhooka?", answer: "Tak często, jak wymaga proces i pozwalają limity API. Dla zapytań od klientów co kilka minut, dla raportów raz dziennie." },
    { question: "Co się stanie, gdy wyzwalacz zadziała dwa razy?", answer: "Dobrze zbudowana automatyzacja rozpoznaje duplikaty i nie wykonuje tej samej pracy drugi raz." },
  ],
  relatedTermSlugs: ["webhook", "workflow", "api"],
  relatedServiceSlugs: ["integracje-systemow", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedToolSlugs: ["n8n", "make", "zapier"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow"],
  relatedArticleSlugs: ["bledy-przy-pierwszym-wdrozeniu-automatyzacji", "n8n-czy-make"],
});
