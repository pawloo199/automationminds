import { defineTerm } from "../types";

export default defineTerm({
  slug: "rpa",
  term: "RPA",
  fullName: "Robotic Process Automation",
  category: "automatyzacja",
  definition:
    "RPA to automatyzacja, w której program naśladuje pracę człowieka w interfejsie innych aplikacji: klika, kopiuje i wpisuje dane tam, gdzie nie da się połączyć systemów przez API.",
  metaTitle: "RPA: co to jest i kiedy ma sens w firmie",
  metaDescription:
    "RPA co to jest: jak robot programowy klika i przepisuje dane za człowieka, kiedy RPA ma sens, a kiedy lepsza jest integracja przez API.",
  primaryKeyword: "rpa co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest RPA",
    "RPA, czyli zrobotyzowana automatyzacja procesów, to programy, które wykonują w komputerze te same czynności co człowiek. Otwierają aplikację, logują się, przechodzą do odpowiedniego ekranu, kopiują dane z jednego okna i wklejają w drugie. Słowo „robot” nie oznacza tu maszyny, tylko program działający według zapisanego scenariusza.",
    "RPA powstało jako odpowiedź na stare systemy, które nie mają [API](/slownik/api). Gdy jedynym sposobem pracy z programem jest jego ekran, robot może ten ekran obsługiwać za człowieka.",
    "## RPA a integracja przez API",
    "| Cecha | RPA | Integracja przez API |\n|---|---|---|\n| Jak działa | Obsługuje ekran jak człowiek | Wymienia dane bezpośrednio |\n| Szybkość | Wolniejsza, zależna od interfejsu | Szybka |\n| Odporność na zmiany | Psuje się po zmianie wyglądu ekranu | Stabilna, dopóki API się nie zmieni |\n| Kiedy wybrać | System bez API | System z API |",
    "Zasada jest prosta: jeśli system ma API, integracja przez API jest prawie zawsze lepsza. RPA to rozwiązanie dla sytuacji, w których innej drogi nie ma, albo rozwiązanie przejściowe do czasu wymiany starego systemu.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Firma korzysta ze starszego programu magazynowego bez API. Każdego dnia pracownik przepisuje do niego zamówienia z arkusza. Robot RPA, zbudowany na przykład w [Power Automate](/narzedzia/power-automate), otwiera program, przechodzi do formularza zamówienia, wpisuje kolejne pozycje z arkusza i zapisuje numer dokumentu z powrotem w arkuszu. Pracownik sprawdza tylko zamówienia, przy których robot zgłosił błąd.",
    "## Kiedy RPA ma sens",
    "- system nie ma API ani możliwości importu plików,\n- czynność jest powtarzalna i ma jasne zasady,\n- wygląd ekranów rzadko się zmienia,\n- wymiana systemu nie jest planowana w najbliższym czasie.",
    "## RPA a AI",
    "Klasyczny robot RPA wykonuje dokładnie to, co mu zapisano, i zatrzymuje się, gdy coś wygląda inaczej. Połączenie z AI pozwala obsłużyć mniej przewidywalne sytuacje: model odczyta dokument w nowym układzie albo zrozumie treść maila, a robot wpisze wynik do starego programu. Taki układ wymaga jednak dodatkowej kontroli, bo błąd modelu zostanie wpisany do systemu tak samo sprawnie jak poprawne dane.",
    "## Na co uważać",
    "Roboty RPA są wrażliwe na zmiany: aktualizacja programu, nowe okno komunikatu czy wolniejsze działanie sieci potrafią zatrzymać robota. Dlatego każde wdrożenie RPA potrzebuje monitoringu i osoby, która wie, co zrobić, gdy robot się zatrzyma. Coraz częściej RPA łączy się też z AI: model odczytuje dokument, a robot wpisuje dane do starego systemu. Odczyt dokumentów opisujemy w haśle [IDP](/slownik/idp).",
    "Zanim zdecydujecie się na RPA, warto sprawdzić, czy proces nie da się uprościć albo czy system nie ma jednak importu danych. Pomagamy to ocenić podczas [audytu procesów](/uslugi/audyt-procesow-biznesowych), a automatyzacje w nietypowych systemach budujemy w usłudze [automatyzacja i AI w niestandardowych procesach](/uslugi/automatyzacja-oraz-ai-w-niestandardowych-procesach).",
  ].join("\n\n"),
  faq: [
    { question: "Czym RPA różni się od zwykłej automatyzacji?", answer: "Zwykła automatyzacja łączy systemy przez API. RPA obsługuje interfejs programu tak jak człowiek, dlatego sprawdza się tam, gdzie API nie ma." },
    { question: "Czy RPA wymaga stałej opieki?", answer: "Tak. Zmiany w obsługiwanych programach mogą zatrzymać robota, więc potrzebny jest monitoring i szybka poprawka." },
    { question: "W jakim narzędziu buduje się RPA?", answer: "W firmach korzystających z Microsoft 365 często w Power Automate, ale są też inne narzędzia. Wybór zależy od systemów, które robot ma obsługiwać." },
  ],
  relatedTermSlugs: ["api", "workflow", "idp", "ocr"],
  relatedServiceSlugs: ["automatyzacja-oraz-ai-w-niestandardowych-procesach", "audyt-procesow-biznesowych"],
  relatedToolSlugs: ["power-automate", "microsoft-365"],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["gotowa-automatyzacja-czy-budowana-od-zera", "jak-wybrac-narzedzie-do-automatyzacji"],
});
