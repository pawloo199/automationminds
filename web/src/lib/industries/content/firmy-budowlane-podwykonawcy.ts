import type { IndustryPageContent } from "../types";

export const firmyBudowlanePodwykonawcy: IndustryPageContent = {
  industrySlug: "firmy-budowlane",
  subSlug: "podwykonawcy",
  name: "Podwykonawcy i ich dokumenty",
  excerpt: "Umowy, ubezpieczenia, uprawnienia, protokoły i faktury podwykonawców w jednym rejestrze, z kontrolą braków, terminów i płatności.",
  metaTitle: "Zarządzanie podwykonawcami: dokumenty i faktury",
  metaDescription:
    "Automatyzujemy pracę z podwykonawcami: umowy, ubezpieczenia i uprawnienia w rejestrze, kontrola braków i terminów, protokoły i faktury do akceptacji.",
  primaryKeyword: "zarządzanie podwykonawcami",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy budowlane: podwykonawcy",
    title: "Dokumenty podwykonawców kompletne, zanim zapłacicie fakturę",
    lead: "Na budowie pracuje kilkunastu podwykonawców, a każdy ma umowę, polisę, uprawnienia pracowników, protokoły odbioru i faktury. Biuro zbiera to mailem, polisy wygasają niezauważone, a faktura czasem zostaje zapłacona bez protokołu. Automatyzujemy pracę z podwykonawcami: dokumenty trafiają do jednego rejestru, braki i wygasające terminy są widoczne, a faktura przechodzi do akceptacji tylko z kompletem.",
    bullets: [
      "Rejestr dokumentów podwykonawców z terminami",
      "Przypomnienia o brakach i wygasających polisach",
      "Faktura do akceptacji tylko z protokołem",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Generalni wykonawcy i firmy pracujące z wieloma podwykonawcami" },
    { label: "Co automatyzujemy", value: "Umowy, dokumenty, terminy, protokoły, faktury, płatności" },
    { label: "Narzędzia", value: "Rejestr, poczta, formularz, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Faktury akceptuje kierownik budowy" },
  ],
  symptoms: {
    title: "Kiedy pracę z podwykonawcami warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, firma ryzykuje płatności i odpowiedzialność.",
    items: [
      "Dokumenty podwykonawców są w mailach różnych osób.",
      "Polisy i uprawnienia wygasają, a nikt tego nie zauważa.",
      "Faktura przychodzi przed protokołem odbioru.",
      "Nie wiadomo, ile zostało do zapłaty na umowie podwykonawcy.",
      "Kierownik akceptuje faktury telefonicznie lub w komunikatorze.",
      "Przy rozliczeniu z inwestorem trudno zebrać dokumenty podwykonawców.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja pracy z podwykonawcami",
    paragraphs: [
      "Każdy podwykonawca ma w rejestrze swoją kartę: umowy na poszczególnych budowach, wartość, zakres, polisę, uprawnienia, dokumenty pracowników wymagane na budowie. Podwykonawca przesyła dokumenty mailem lub przez prosty formularz, a system przypisuje je do karty. Braki i wygasające terminy są widoczne i trafiają do podwykonawcy jako przypomnienie.",
      "Protokoły odbioru prac tworzy kierownik budowy na telefonie albo z szablonu. Faktura podwykonawcy, przesłana mailem lub odebrana z KSeF, jest odczytywana i łączona z umową i protokołem. Jeśli protokołu brakuje, faktura nie trafia do akceptacji.",
      "Kierownik akceptuje fakturę jednym kliknięciem, a biuro widzi stan umowy: wartość, zafakturowane, zapłacone, pozostało. Przy rozliczeniu z inwestorem dokumenty podwykonawców są w jednym miejscu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja",
    lead: "Zakres dopasowujemy do liczby podwykonawców i wymagań inwestorów.",
    items: [
      { title: "Karta podwykonawcy", body: "Umowy, polisy, uprawnienia i kontakty." },
      { title: "Dokumenty", body: "Przesyłane mailem lub formularzem, przypisane do karty." },
      { title: "Braki i terminy", body: "Przypomnienia o brakach i wygasających dokumentach." },
      { title: "Protokoły odbioru", body: "Z telefonu kierownika lub z szablonu." },
      { title: "Faktury", body: "Odczyt i połączenie z umową i protokołem." },
      { title: "Akceptacja", body: "Kierownik akceptuje fakturę w jednym miejscu." },
      { title: "Stan umowy", body: "Wartość, zafakturowane, zapłacone, pozostało." },
      { title: "Zestawienia dla inwestora", body: "Dokumenty podwykonawców na żądanie." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od umowy do zapłaty.",
    items: [
      {
        title: "Nowy podwykonawca",
        trigger: "Podpisanie umowy",
        steps: ["Karta z listą wymaganych dokumentów", "Prośba o dokumenty i przypomnienia", "Informacja dla kierownika, gdy komplet jest gotowy"],
        result: "Podwykonawca wchodzi na budowę z kompletem dokumentów.",
      },
      {
        title: "Faktura podwykonawcy",
        trigger: "Faktura w skrzynce lub KSeF",
        steps: ["Odczyt i połączenie z umową", "Sprawdzenie protokołu odbioru", "Akceptacja kierownika i aktualizacja stanu umowy"],
        result: "Żadna faktura nie zostaje zapłacona bez protokołu.",
      },
    ],
  },
  example: {
    title: "Podwykonawcy przed i po automatyzacji",
    lead: "Przykład generalnego wykonawcy z kilkunastoma podwykonawcami na budowie.",
    rows: [
      { label: "Dokumenty", before: "W mailach.", after: "W karcie podwykonawcy." },
      { label: "Terminy", before: "Nikt nie pilnuje.", after: "Przypomnienia." },
      { label: "Faktury", before: "Czasem bez protokołu.", after: "Tylko z protokołem." },
      { label: "Stan umowy", before: "W arkuszu.", after: "Na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru i listy wymaganych dokumentów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jakich dokumentów wymagacie i jak dziś obiegają faktury.", fromYou: "Lista dokumentów i wzory protokołów." },
      { title: "Rejestr", duration: "1–2 tygodnie", body: "Budujemy rejestr i przenosimy dane obecnych podwykonawców.", fromYou: "Weryfikacja danych." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Łączymy rejestr z pocztą i programem do faktur, testujemy na jednej budowie.", fromYou: "Kierownik i biuro w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejne budowy.", fromYou: "Informacja o zmianach wymagań." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru dokumentów.",
    items: [
      { name: "Rejestr dokumentów", description: "Dla firm, które chcą panować nad dokumentami.", includes: ["Karta podwykonawcy", "Dokumenty", "Braki i terminy", "Przypomnienia"] },
      { name: "Dokumenty i faktury", description: "Dla firm, które chcą kontrolować płatności.", includes: ["Wszystko z wariantu Rejestr dokumentów", "Protokoły odbioru", "Faktury z protokołem", "Akceptacja kierownika"] },
      { name: "Pełna kontrola", description: "Dla generalnych wykonawców.", includes: ["Wszystko z wariantu Dokumenty i faktury", "Stan umów", "Zestawienia dla inwestora", "Raport dla zarządu"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba podwykonawców i budów,",
      "lista wymaganych dokumentów,",
      "integracja z programem do faktur i KSeF,",
      "zakres protokołów,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Podwykonawca nie prześle dokumentów.", mitigation: "Przypomnienia i informacja dla kierownika przed wejściem na budowę." },
      { risk: "Faktura przypisana do złej umowy.", mitigation: "Niepewne przypisania trafiają do sprawdzenia." },
      { risk: "Dane osobowe pracowników podwykonawców.", mitigation: "Dostęp tylko dla osób, które ich potrzebują, i przechowywanie przez wymagany czas." },
      { risk: "Płatność bez kontroli.", mitigation: "System przygotowuje akceptację, a przelewy zatwierdza osoba upoważniona." },
    ],
  },
  faq: [
    { question: "Czy podwykonawcy muszą mieć konto?", answer: "Nie. Przesyłają dokumenty mailem lub przez prosty formularz." },
    { question: "Czy odczytacie faktury z KSeF?", answer: "Tak. Faktury z KSeF mają dane w uporządkowanej formie, którą łatwo połączyć z umową." },
    { question: "Czy system zablokuje płatność bez protokołu?", answer: "Faktura bez protokołu nie trafia do akceptacji. Decyzję o płatności zawsze podejmuje człowiek." },
    { question: "Czy pomożecie z dokumentami wymaganymi przez inwestora?", answer: "Tak, rejestr może zawierać listę dokumentów wymaganych przez inwestora i przygotowywać zestawienia." },
    { question: "Czy obsłużycie wielu podwykonawców na wielu budowach?", answer: "Tak. Podwykonawca ma jedną kartę z umowami na różnych budowach." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "obieg-umow"],
  relatedToolSlugs: ["ksef", "airtable", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
