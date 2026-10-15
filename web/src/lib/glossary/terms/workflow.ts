import { defineTerm } from "../types";

export default defineTerm({
  slug: "workflow",
  term: "Workflow",
  category: "automatyzacja",
  definition:
    "Workflow to przepływ pracy: ustalona kolejność kroków, osób i decyzji, przez które przechodzi sprawa od początku do końca, na przykład faktura od wpłynięcia do zapłaty.",
  metaTitle: "Workflow: co to jest przepływ pracy i jak go automatyzować",
  metaDescription:
    "Workflow co to jest: jak opisać przepływ pracy w firmie, które kroki zautomatyzować, a które zostawić ludziom, i jak wygląda workflow w praktyce.",
  primaryKeyword: "workflow co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest workflow",
    "Workflow, po polsku przepływ pracy, opisuje, jak sprawa przechodzi przez firmę. Ma początek, czyli zdarzenie, które go uruchamia, kolejne kroki wykonywane przez ludzi lub systemy, punkty decyzji i koniec. Workflow istnieje w każdej firmie, nawet jeśli nikt go nie zapisał: faktura przychodzi mailem, ktoś ją sprawdza, ktoś zatwierdza, ktoś płaci.",
    "W narzędziach do automatyzacji słowo workflow oznacza też konkretny, zbudowany przepływ, na przykład w [n8n](/narzedzia/n8n), [Make](/narzedzia/make) czy [Power Automate](/narzedzia/power-automate). Taki przepływ składa się z [wyzwalacza](/slownik/wyzwalacz), który go uruchamia, i z kolejnych kroków: pobierz dane, sprawdź warunek, zapisz w systemie, wyślij powiadomienie.",
    "## Z czego składa się workflow",
    "- **Zdarzenie startowe:** nowy mail, formularz, zmiana statusu, termin w kalendarzu.\n- **Kroki:** czynności wykonywane po kolei, przez system albo przez człowieka.\n- **Decyzje:** rozgałęzienia, np. faktura powyżej określonej kwoty idzie do dodatkowej akceptacji.\n- **Role:** kto wykonuje lub zatwierdza dany krok.\n- **Wynik:** stan końcowy, np. faktura zaksięgowana i opłacona.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Faktura kosztowa przychodzi na wspólną skrzynkę. Workflow odczytuje z niej dane, sprawdza, czy dostawca jest w bazie, przypisuje fakturę do [MPK](/slownik/mpk) i wysyła ją do akceptacji kierownika działu. Po akceptacji faktura trafia do księgowości i do kolejki płatności. Gdy kierownik nie zatwierdzi faktury w ustalonym czasie, dostaje przypomnienie. Cały proces opisujemy na stronie [obieg faktur kosztowych](/procesy/obieg-faktur-kosztowych).",
    "## Workflow a proces",
    "Te słowa często używa się zamiennie. Proces to szersze pojęcie: opisuje cel i całą pracę wokół niego, łącznie z tym, czego nie da się zautomatyzować. Workflow to konkretna ścieżka kroków. Jeden proces może mieć kilka workflow, na przykład osobny dla faktur zwykłych i osobny dla faktur z zaliczki. Do rysowania procesów używa się często notacji [BPMN](/slownik/bpmn).",
    "## Jak dokumentować workflow",
    "Każdy zbudowany przepływ powinien mieć krótki opis: co go uruchamia, co robi, kto jest jego właścicielem i co się dzieje przy błędzie. Opis może być w tym samym narzędziu, w którym działa przepływ, albo we wspólnym rejestrze automatyzacji. Bez tego po kilku miesiącach nikt nie pamięta, dlaczego przepływ działa tak, a nie inaczej, a każda zmiana w procesie staje się ryzykowna.",
    "## Jak zacząć automatyzować workflow",
    "Najpierw trzeba opisać, jak przepływ wygląda dziś: kto co robi, gdzie sprawa czeka najdłużej i gdzie dane są przepisywane ręcznie. Dopiero na takiej mapie widać, które kroki warto oddać systemowi. Jak przygotować mapę, opisujemy w artykule [od czego zacząć mapowanie procesów](/poradnik/od-czego-zaczac-mapowanie-procesow).",
    "Dobra zasada: automatyzujemy przenoszenie danych, przypomnienia i powtarzalne decyzje według jasnych reguł, a ludziom zostawiamy oceny, wyjątki i kontakt z klientem. Pomagamy w tym w usłudze [doradztwo i optymalizacja procesów](/uslugi/doradztwo-i-optymalizacja-procesow-biznesowych).",
  ].join("\n\n"),
  faq: [
    { question: "Czym różni się workflow od procesu?", answer: "Proces opisuje cel i całą pracę wokół niego. Workflow to konkretna ścieżka kroków, osób i decyzji, często zbudowana w narzędziu do automatyzacji." },
    { question: "W jakim narzędziu buduje się workflow?", answer: "Najczęściej w n8n, Make, Zapier albo Power Automate. Wybór zależy od systemów w firmie, wymagań co do danych i budżetu." },
    { question: "Czy każdy workflow da się zautomatyzować w całości?", answer: "Rzadko. Zwykle automatyzuje się przenoszenie danych i przypomnienia, a decyzje wymagające oceny zostają przy ludziach." },
  ],
  relatedTermSlugs: ["wyzwalacz", "bpmn", "sla", "ipaas"],
  relatedServiceSlugs: ["doradztwo-i-optymalizacja-procesow-biznesowych", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedToolSlugs: ["n8n", "make", "power-automate"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "wnioski-urlopowe"],
  relatedArticleSlugs: ["od-czego-zaczac-mapowanie-procesow", "5-procesow-do-automatyzacji-w-malej-firmie"],
});
