import { defineTerm } from "../types";

export default defineTerm({
  slug: "webhook",
  term: "Webhook",
  category: "automatyzacja",
  definition:
    "Webhook to automatyczne powiadomienie, które jeden system wysyła do drugiego w chwili, gdy coś się wydarzy, na przykład gdy klient wyśle formularz albo opłaci fakturę.",
  metaTitle: "Webhook: co to jest i jak działa w automatyzacji",
  metaDescription:
    "Webhook co to jest: jak system powiadamia inny system o zdarzeniu, czym różni się od API i jak webhooki uruchamiają automatyzacje w firmie.",
  primaryKeyword: "webhook co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest webhook",
    "Webhook działa jak dzwonek do drzwi. Zamiast co chwilę sprawdzać, czy ktoś przyszedł, system czeka, aż ktoś zadzwoni. Gdy w jednym programie wydarzy się coś ważnego, ten program sam wysyła wiadomość pod wskazany adres internetowy. Wiadomość zawiera dane o zdarzeniu, najczęściej w formacie [JSON](/slownik/json): kto wypełnił formularz, jaki numer ma zamówienie, jaka kwota wpłynęła.",
    "Drugi system odbiera tę wiadomość i od razu coś z nią robi. Może założyć klienta w CRM, wysłać powiadomienie do zespołu albo uruchomić cały przepływ pracy. Dlatego webhook jest jednym z najczęstszych [wyzwalaczy](/slownik/wyzwalacz) automatyzacji.",
    "## Webhook a API",
    "Oba pojęcia dotyczą wymiany danych między systemami, ale działają w przeciwnych kierunkach. Przez [API](/slownik/api) to my pytamy system o dane albo prosimy go o wykonanie operacji. Webhook to sytuacja odwrotna: system sam nas informuje, że coś się zmieniło.",
    "| Cecha | API | Webhook |\n|---|---|---|\n| Kto zaczyna | System, który pyta | System, w którym coś się wydarzyło |\n| Kiedy | Gdy pytamy | Od razu po zdarzeniu |\n| Typowe użycie | Pobranie lub zapis danych | Uruchomienie automatyzacji |\n| Obciążenie | Częste pytanie zużywa limity | Wiadomość tylko przy zdarzeniu |",
    "W praktyce oba mechanizmy pracują razem. Webhook informuje, że przyszło nowe zamówienie, a automatyzacja przez API pobiera jego szczegóły i zapisuje je w innym systemie.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Klient wypełnia formularz kontaktowy na stronie firmy. Formularz wysyła webhook do narzędzia automatyzacji, na przykład [n8n](/narzedzia/n8n) albo [Make](/narzedzia/make). Przepływ sprawdza, czy firma klienta jest już w CRM, zakłada nową szansę sprzedaży w [Pipedrive](/narzedzia/pipedrive), przypisuje handlowca według regionu i wysyła mu powiadomienie. Całość trwa kilka sekund, a handlowiec dzwoni do klienta, zanim ten zdąży wysłać zapytanie do konkurencji. Cały proces opisujemy na stronie [obsługa zapytań i leadów](/procesy/obsluga-zapytan-i-leadow).",
    "## Na co uważać",
    "- **Bezpieczeństwo adresu.** Adres webhooka powinien być trudny do odgadnięcia i najlepiej zabezpieczony podpisem albo tokenem, żeby nikt nie mógł wysłać fałszywych danych.\n- **Powtórzenia.** Niektóre systemy wysyłają tę samą wiadomość ponownie, gdy nie dostaną potwierdzenia. Automatyzacja musi rozpoznać duplikat, żeby nie założyć dwóch takich samych rekordów.\n- **Brak odbiorcy.** Jeśli serwer odbierający nie działa, wiadomość może przepaść. Dobre wdrożenie zapisuje błędy i pozwala ponowić obsługę.\n- **Zmiany po stronie dostawcy.** Gdy dostawca zmieni format danych, przepływ trzeba poprawić. Monitoring pozwala wyłapać to od razu.",
    "## Jak zacząć z webhookami",
    "Najpierw warto sprawdzić, które z używanych systemów potrafią wysyłać webhooki. Informację zwykle znajdziecie w ustawieniach integracji albo w dokumentacji dostawcy, pod hasłami „webhook”, „powiadomienia” lub „zdarzenia”. Potem wybieracie jedno zdarzenie, na którym dziś ktoś traci czas, na przykład nowe zapytanie z formularza, i budujecie dla niego pierwszy przepływ. Po kilku tygodniach widać, czy działa stabilnie, i można dokładać kolejne zdarzenia.",
    "## Kiedy warto się tym zająć",
    "Webhooki przydają się wszędzie tam, gdzie liczy się szybka reakcja na zdarzenie: nowe zapytanie, płatność, podpisana umowa, zmiana statusu zamówienia. Jeśli dziś ktoś w firmie co kilka godzin sprawdza skrzynkę lub panel i przepisuje dane dalej, to dobry kandydat na automatyzację opartą na webhooku. Łączeniem systemów w ten sposób zajmujemy się w usłudze [integracje systemów](/uslugi/integracje-systemow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy każdy program obsługuje webhooki?", answer: "Nie. Wiele nowoczesnych aplikacji je ma, ale starsze systemy często nie. Wtedy automatyzacja co jakiś czas sprawdza zmiany przez API albo pobiera eksport." },
    { question: "Czy webhook jest bezpieczny?", answer: "Tak, jeśli adres jest zabezpieczony, a odbiorca sprawdza podpis lub token. Dane powinny być przesyłane szyfrowanym połączeniem." },
    { question: "Czy do webhooków potrzebny jest programista?", answer: "Narzędzia takie jak n8n czy Make mają gotowe moduły do odbioru webhooków. Programista przydaje się przy nietypowych systemach i zabezpieczeniach." },
  ],
  relatedTermSlugs: ["api", "wyzwalacz", "json", "workflow"],
  relatedServiceSlugs: ["integracje-systemow", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedToolSlugs: ["n8n", "make", "zapier"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "n8n-co-to-jest"],
});
