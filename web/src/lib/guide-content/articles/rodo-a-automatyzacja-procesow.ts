import { defineArticle } from "../define";

export default defineArticle({
  id: "a5",
  slug: "rodo-a-automatyzacja-procesow",
  title: "RODO a automatyzacja procesów — na co uważać?",
  excerpt:
    "Automatyzacja nie zwalnia z ochrony danych osobowych. Praktyczne wskazówki dla firm, które łączą systemy z danymi klientów i pracowników.",
  category: "Bezpieczeństwo",
  publishedAt: "2026-05-12",
  imageUrl:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
  imageAlt: "Bezpieczeństwo danych w firmie",
  body: [
    "Automatyzacja często oznacza przepływ danych między wieloma narzędziami. Z perspektywy RODO każdy taki przepływ trzeba traktować jak proces przetwarzania — z określonym celem, podstawą prawną i zabezpieczeniami.",
    "## Minimalizacja danych",
    "Przenoś tylko pola niezbędne do danego procesu. Jeśli automatyzacja wysyłki faktury nie potrzebuje daty urodzenia klienta, nie przekazuj jej do kolejnego systemu.",
    "## Umowy powierzenia",
    "Sprawdź, czy dostawcy narzędzi automatyzacji i chmury mają podpisane umowy powierzenia. W dokumentacji wdrożenia warto zapisać, jakie kategorie danych przechodzą przez które integracje.",
    "## Dostęp i audyt",
    "Ogranicz dostęp do przepływów z danymi wrażliwymi. Loguj zmiany w automatyzacjach tak samo jak w systemach źródłowych — kto zmodyfikował regułę i kiedy.",
    "## Prawa osób",
    "Upewnij się, że możesz usunąć lub zaktualizować dane we wszystkich systemach powiązanych automatyzacją. Bez tego realizacja żądań RODO będzie wymagała ręcznego grzebania w kilku narzędziach.",
    "RODO nie blokuje automatyzacji — wymusza natomiast świadome projektowanie. Dobrze udokumentowany przepływ to mniejsze ryzyko niż ręczne kopiowanie danych między arkuszami.",
  ].join("\n\n"),
});
