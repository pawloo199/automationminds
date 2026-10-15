import { defineTerm } from "../types";

export default defineTerm({
  slug: "bpmn",
  term: "BPMN",
  fullName: "Business Process Model and Notation",
  category: "systemy",
  definition:
    "BPMN to standardowa notacja do rysowania procesów biznesowych. Za pomocą ustalonych symboli pokazuje zdarzenia, czynności, decyzje i osoby odpowiedzialne, tak że diagram rozumieją zarówno ludzie biznesu, jak i osoby budujące automatyzacje.",
  metaTitle: "BPMN: co to jest i jak rysować procesy w firmie",
  metaDescription:
    "BPMN co to jest: notacja do modelowania procesów biznesowych, podstawowe symbole, przykład diagramu i jak mapa procesu pomaga zaplanować automatyzację.",
  primaryKeyword: "bpmn co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest BPMN",
    "Każdy może narysować proces po swojemu, ale wtedy każdy rysunek trzeba tłumaczyć. BPMN ustala wspólny język: konkretny symbol oznacza zdarzenie, inny czynność, jeszcze inny decyzję. Diagram narysowany w BPMN zrozumie analityk, kierownik działu i osoba, która będzie budować automatyzację.",
    "## Podstawowe elementy",
    "| Element | Symbol | Znaczenie |\n|---|---|---|\n| Zdarzenie | Okrąg | Start, koniec lub coś, co się wydarzyło, np. wpłynęła faktura |\n| Czynność | Prostokąt z zaokrąglonymi rogami | Praca do wykonania, np. sprawdź fakturę |\n| Bramka | Romb | Decyzja lub rozgałęzienie, np. kwota powyżej limitu |\n| Przepływ | Strzałka | Kolejność kroków |\n| Tor | Pas na diagramie | Osoba, dział lub system wykonujący czynności |",
    "Pełna notacja ma znacznie więcej symboli, ale do opisania większości procesów w małej i średniej firmie wystarczy tych kilka.",
    "## Do czego BPMN przydaje się przy automatyzacji",
    "Zanim zautomatyzuje się proces, trzeba wiedzieć, jak wygląda w rzeczywistości. Diagram BPMN pokazuje, gdzie dane są przepisywane, gdzie sprawa czeka na decyzję, ile razy przechodzi między działami i które kroki mają jasne reguły. Na takim diagramie łatwo zaznaczyć, co przejmie [workflow](/slownik/workflow), a co zostanie przy ludziach.",
    "Często rysuje się dwa diagramy: stan obecny i stan docelowy po automatyzacji. Różnica między nimi pokazuje zakres wdrożenia i pozwala oszacować oszczędność czasu.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Proces urlopowy w diagramie BPMN ma trzy tory: pracownik, przełożony i kadry. Zdarzenie startowe to złożenie wniosku. Bramka sprawdza, czy pracownik ma wystarczającą liczbę dni. Jeśli tak, wniosek trafia do przełożonego, który akceptuje lub odrzuca. Po akceptacji kadry aktualizują ewidencję. Na diagramie stanu docelowego sprawdzenie dni, powiadomienia i aktualizacja ewidencji przechodzą na system, a przełożony tylko akceptuje. Cały proces opisujemy na stronie [wnioski urlopowe](/procesy/wnioski-urlopowe).",
    "## Typowe błędy przy rysowaniu procesów",
    "Najczęstszy błąd to rysowanie procesu tak, jak opisuje go procedura, a nie tak, jak wygląda w praktyce. Drugi to zbyt duża szczegółowość: diagram z setką elementów nikomu nie pomaga. Trzeci to pominięcie wyjątków, które w rzeczywistości zabierają najwięcej czasu, np. faktur bez zamówienia albo wniosków złożonych po terminie.",
    "## Czy zawsze trzeba rysować w BPMN",
    "Nie. Przy prostym procesie wystarczy lista kroków. BPMN przydaje się przy procesach z wieloma działami, wyjątkami i decyzjami, gdzie lista kroków przestaje być czytelna. Ważniejsza od notacji jest rozmowa z osobami, które wykonują proces na co dzień, bo to one wiedzą, jak wygląda w praktyce, a nie w procedurze. Jak przygotować mapę procesu, opisujemy w artykule [od czego zacząć mapowanie procesów](/poradnik/od-czego-zaczac-mapowanie-procesow).",
    "Mapy procesów przygotowujemy podczas [audytu procesów biznesowych](/uslugi/audyt-procesow-biznesowych) i w usłudze [doradztwo i optymalizacja procesów](/uslugi/doradztwo-i-optymalizacja-procesow-biznesowych).",
  ].join("\n\n"),
  faq: [
    { question: "W jakim programie rysuje się BPMN?", answer: "Jest wiele narzędzi, od prostych edytorów diagramów w przeglądarce po specjalistyczne programy. Do większości potrzeb wystarczy darmowe narzędzie." },
    { question: "Czy diagram BPMN da się zamienić bezpośrednio na automatyzację?", answer: "Niektóre systemy wykonują diagramy BPMN. W małych firmach diagram służy raczej jako plan, według którego buduje się przepływ w narzędziu automatyzacji." },
    { question: "Kto powinien rysować procesy?", answer: "Najlepiej osoba prowadząca razem z ludźmi, którzy wykonują proces. Sam diagram bez ich udziału zwykle pokazuje procedurę, a nie rzeczywistość." },
  ],
  relatedTermSlugs: ["workflow", "sla", "wyzwalacz"],
  relatedServiceSlugs: ["audyt-procesow-biznesowych", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  relatedToolSlugs: [],
  relatedProcessSlugs: ["wnioski-urlopowe", "obieg-umow"],
  relatedArticleSlugs: ["od-czego-zaczac-mapowanie-procesow", "audyt-procesow-w-firmie"],
});
