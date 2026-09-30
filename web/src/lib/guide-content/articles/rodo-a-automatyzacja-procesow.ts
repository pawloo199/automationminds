import { defineArticle } from "../define";

export default defineArticle({
  id: "a5",
  slug: "rodo-a-automatyzacja-procesow",
  title: "RODO a automatyzacja procesów. Na co uważać, łącząc systemy z danymi osobowymi",
  metaTitle: "RODO a automatyzacja procesów. Na co uważać?",
  metaDescription:
    "Jak automatyzować procesy zgodnie z RODO: mapa przepływu danych, umowy powierzenia, serwery poza UE, decyzje automatyczne i AI. Praktyczna checklista.",
  primaryKeyword: "RODO a automatyzacja",
  secondaryKeywords: [
    "automatyzacja a ochrona danych osobowych",
    "umowa powierzenia przetwarzania danych",
    "art. 22 RODO",
  ],
  excerpt:
    "Automatyzacja nie zwalnia z ochrony danych osobowych, ale też nie musi być jej wrogiem. Pokazujemy, o czym pamiętać, łącząc systemy z danymi klientów i pracowników, i co sprawdzić przed uruchomieniem.",
  category: "Bezpieczeństwo",
  publishedAt: "2026-05-12",
  updatedAt: "2026-09-30",
  imageUrl:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
  imageAlt: "Laptop z kłódką symbolizującą ochronę danych osobowych",
  summary: [
    "Każda automatyzacja, przez którą przechodzą dane osobowe, to czynność przetwarzania. Musi mieć cel, podstawę prawną i zabezpieczenia.",
    "Zacznij od mapy: jakie dane, z którego systemu, do którego, po co i kto ma do nich dostęp.",
    "Z dostawcami narzędzi potrzebujesz umów powierzenia, a przy serwerach poza EOG także podstawy do transferu danych.",
    "Decyzje o ludziach podejmowane w pełni automatycznie, np. odrzucenie wniosku, podlegają dodatkowym wymogom z art. 22 RODO.",
    "Dobrze zaprojektowana automatyzacja bywa bezpieczniejsza niż ręczne kopiowanie danych między arkuszami.",
  ],
  relatedServiceSlugs: [
    "doradztwo-i-optymalizacja-procesow-biznesowych",
    "automatyzacja-oraz-ai-w-niestandardowych-procesach",
  ],
  relatedArticleSlugs: [
    "jak-wybrac-narzedzie-do-automatyzacji",
    "ai-w-codziennej-pracy-zespolu",
    "automatyzacja-onboardingu-pracownika",
  ],
  cta: {
    title: "Chcesz automatyzować bez obaw o dane klientów?",
    body: "Projektujemy przepływy tak, żeby dane osobowe trafiały tylko tam, gdzie muszą, a dokumentacja była przygotowana na pytania IOD czy audytora. Porozmawiajmy o twoim procesie.",
  },
  body: [
    "„Chcielibyśmy to zautomatyzować, ale boimy się RODO.” Słyszymy to zdanie regularnie, zwykle od firm, które dziś przesyłają dane klientów mailem, trzymają je w arkuszach udostępnionych całemu zespołowi i kopiują ręcznie między systemami.",
    "Paradoks polega na tym, że ręczna praca na danych osobowych często jest bardziej ryzykowna niż dobrze zaprojektowana automatyzacja. Człowiek wyśle arkusz nie do tej osoby, zapisze plik na prywatnym dysku, zapomni usunąć dane po zakończeniu współpracy. Automat robi zawsze to samo i zostawia ślad.",
    "RODO nie zabrania automatyzacji. Wymaga, żeby była przemyślana. Poniżej opisujemy, na co zwracamy uwagę przy każdym projekcie, w którym przez przepływ przechodzą dane osobowe.",
    "> [Ważne]\n> Ten artykuł opisuje praktykę wdrożeniową, a nie jest poradą prawną. Przy przetwarzaniu danych wrażliwych albo na dużą skalę skonsultuj projekt z inspektorem ochrony danych lub prawnikiem.",
    "## Automatyzacja to nowy sposób przetwarzania danych",
    "Z punktu widzenia RODO każdy przepływ, w którym dane osobowe przechodzą z jednego systemu do drugiego, to przetwarzanie. Formularz ze strony, który zapisuje kontakt w CRM i wysyła powiadomienie na komunikator, przetwarza dane w trzech miejscach.",
    "Każde takie przetwarzanie musi mieć określony cel i podstawę prawną, np. przygotowanie oferty na prośbę klienta, wykonanie umowy albo obowiązek prawny. Zanim zbudujesz automatyzację, upewnij się, że cel, dla którego zbierasz dane, obejmuje też to, co automat będzie z nimi robił.",
    "## Zacznij od mapy przepływu danych",
    "Najbardziej praktyczny krok to rozrysowanie, jakie dane i dokąd płyną. Dla każdego przepływu odpowiedz na pięć pytań:",
    "1. Jakie dane osobowe przechodzą przez przepływ (imię, e-mail, telefon, PESEL, dane o zdrowiu)?\n2. Z którego systemu wychodzą i do których trafiają?\n3. Po co każdy z tych systemów je dostaje?\n4. Kto ma dostęp do danych w każdym miejscu, łącznie z samym narzędziem do automatyzacji?\n5. Jak długo dane są tam przechowywane i kto je usuwa?",
    "Taka mapa przyda się trzy razy: przy projektowaniu, przy aktualizacji rejestru czynności przetwarzania (art. 30 RODO) i wtedy, gdy klient poprosi o usunięcie swoich danych. Jeśli nie wiesz, jak do tego podejść, zajrzyj do artykułu o [mapowaniu procesów](/poradnik/od-czego-zaczac-mapowanie-procesow). Mapa danych to ten sam warsztat, tylko z inną perspektywą. Jeśli dane firmy są jeszcze w dużej części na papierze i w mailach, przy okazji warto zaplanować [cyfryzację danych](/poradnik/cyfryzacja-danych-w-firmie).",
    "## Przenoś tylko to, co jest potrzebne",
    "Zasada minimalizacji danych (art. 5 RODO) w automatyzacji jest bardzo konkretna. Jeśli przepływ wysyła handlowcowi powiadomienie o nowym zapytaniu, wystarczy mu imię, firma i temat. Nie potrzebuje pełnej treści wiadomości z numerem telefonu na kanale, który czyta cały zespół.",
    "W praktyce to najczęstsza poprawka, jaką wprowadzamy przy audycie istniejących automatyzacji. Ktoś kiedyś przekazał „wszystkie pola”, bo tak było szybciej, i od tamtej pory dane klientów lądują w pięciu narzędziach zamiast w dwóch.",
    "## Umowy powierzenia i serwery poza Unią",
    "Narzędzia takie jak Make, Zapier, n8n w chmurze, CRM czy program do mailingu przetwarzają dane w twoim imieniu. Z każdym z tych dostawców potrzebujesz umowy powierzenia przetwarzania (art. 28 RODO). Duzi dostawcy udostępniają ją jako DPA (Data Processing Agreement) do zaakceptowania online. Warto ją pobrać i przechowywać w dokumentacji.",
    "Druga sprawa to miejsce przetwarzania. Część narzędzi działa na serwerach w USA. Transfer danych poza Europejski Obszar Gospodarczy jest dopuszczalny, ale wymaga podstawy: np. certyfikacji dostawcy w unijno-amerykańskim programie ochrony danych (EU-US Data Privacy Framework) albo standardowych klauzul umownych. Część platform pozwala też wybrać region serwerów w Unii.",
    "| Co sprawdzić u dostawcy | Gdzie tego szukać |\n|---|---|\n| Czy podpisuje umowę powierzenia | Strona „DPA”, „Privacy”, „Legal” lub „Trust Center” |\n| Gdzie są serwery i czy można wybrać region UE | Dokumentacja, ustawienia konta lub zespołu |\n| Podstawa transferu poza EOG | Treść DPA, lista certyfikacji dostawcy |\n| Lista podwykonawców | Załącznik do DPA („subprocessors”) |\n| Jak długo przechowywane są logi z danymi | Dokumentacja i ustawienia narzędzia |",
    "Jeśli przez przepływy przechodzą szczególnie wrażliwe dane, rozważ narzędzie, które można uruchomić na własnym serwerze, np. n8n. Porównanie platform pod tym kątem znajdziesz w artykule [jak wybrać narzędzie do automatyzacji](/poradnik/jak-wybrac-narzedzie-do-automatyzacji).",
    "[[CTA]]",
    "## Decyzje podejmowane automatycznie",
    "Większość automatyzacji przenosi dane i wysyła powiadomienia. Czasem jednak automat podejmuje decyzję o człowieku: odrzuca wniosek kredytowy, odsiewa kandydata w rekrutacji, blokuje konto klienta. Tu wchodzi art. 22 RODO.",
    "Osoba ma prawo nie podlegać decyzji opartej wyłącznie na zautomatyzowanym przetwarzaniu, jeśli wywołuje ona wobec niej skutki prawne lub w podobny sposób istotnie na nią wpływa. Takie decyzje są dopuszczalne tylko w określonych sytuacjach, a osoba powinna mieć możliwość zakwestionowania decyzji i uzyskania interwencji człowieka.",
    "Najprostsze rozwiązanie w praktyce: automat przygotowuje rekomendację, a decyzję zatwierdza człowiek. Przepływ zostaje szybki, a odpowiedzialność jest tam, gdzie powinna być.",
    "## AI i dane osobowe",
    "Coraz więcej automatyzacji korzysta z modeli językowych: do klasyfikacji maili, streszczeń, wyciągania danych z dokumentów. Tu obowiązują te same zasady, plus kilka dodatkowych.",
    "- Nie wklejaj danych klientów do publicznych, darmowych czatów AI. Korzystaj z wersji biznesowych albo z API, w których dostawca deklaruje, że nie trenuje modeli na przesłanych danych.\n- Sprawdź, gdzie przetwarzane są zapytania do modelu i czy dostawca podpisuje umowę powierzenia.\n- Przed wysłaniem tekstu do modelu usuń dane, które nie są potrzebne do zadania, np. numery PESEL czy konta.\n- Wyniki pracy AI dotyczące ludzi traktuj jako podpowiedź, nie decyzję.",
    "Więcej o tym, gdzie AI w firmie ma sens, piszemy w artykule [AI w codziennej pracy zespołu](/poradnik/ai-w-codziennej-pracy-zespolu).",
    "## Dostęp, logi i konta techniczne",
    "Narzędzie do automatyzacji ma zwykle szerokie uprawnienia: czyta CRM, pisze do systemu księgowego, wysyła maile. Dlatego samo narzędzie trzeba chronić jak system z danymi.",
    "- Dostęp do edycji przepływów tylko dla osób, które ich potrzebują, z logowaniem dwuskładnikowym.\n- Połączenia z systemami przez osobne konta techniczne z minimalnymi uprawnieniami, a nie przez prywatne konto pracownika.\n- Logi wykonań przechowywane tak krótko, jak to możliwe, bo często zawierają pełne dane rekordów.\n- Historia zmian w przepływach: kto i kiedy zmodyfikował regułę.",
    "Konto techniczne rozwiązuje też problem, który wraca przy każdym odejściu pracownika: automatyzacje przestają działać, bo były podpięte pod jego konto.",
    "## Prawa osób, których dotyczą dane",
    "Klient może poprosić o dostęp do swoich danych, ich poprawienie albo usunięcie. Jeśli automatyzacja rozesłała jego dane do pięciu systemów, trzeba je znaleźć i obsłużyć wszędzie, w tym w logach narzędzia do automatyzacji.",
    "Tu znowu przydaje się mapa przepływu. Jeszcze lepiej, gdy samo usunięcie też jest zautomatyzowane: prośba o usunięcie danych uruchamia przepływ, który czyści rekord we wszystkich połączonych systemach i zostawia potwierdzenie.",
    "## Przykład: formularz kontaktowy połączony z CRM",
    "Weźmy jeden z najczęstszych przepływów: formularz na stronie zapisuje kontakt w CRM, handlowiec dostaje powiadomienie, a klient potwierdzenie. Tak wygląda on po przejściu przez zasady opisane wyżej:",
    "- formularz informuje, kto jest administratorem danych, w jakim celu je przetwarza i gdzie znaleźć pełną informację (link do polityki prywatności),\n- zgoda na wiadomości marketingowe jest osobnym, niezaznaczonym domyślnie polem, a jej treść i data zapisują się w CRM,\n- powiadomienie dla handlowca na komunikatorze zawiera imię, firmę i temat, ale nie pełną treść wiadomości ani numeru telefonu,\n- narzędzie do automatyzacji przechowuje logi wykonań przez krótki czas, a połączenia działają na koncie technicznym,\n- w CRM jest ustawiony termin usunięcia danych osób, które nie zostały klientami,\n- prośba o usunięcie danych uruchamia przepływ, który usuwa kontakt z CRM, listy mailingowej i arkusza raportowego.",
    "Żaden z tych elementów nie spowalnia obsługi klienta. Za to przy kontroli albo skardze wszystko da się pokazać i wyjaśnić. Jak zbudować cały proces obsługi zapytań, opisujemy w artykule o [automatyzacji obsługi leadów](/poradnik/automatyzacja-obslugi-leadow-sprzedazowych). Podobne zasady dotyczą integracji systemów finansowych, np. [CRM z programem do faktur](/poradnik/integracja-crm-z-fakturowaniem).",
    "## Checklista przed uruchomieniem automatyzacji",
    "Zanim włączysz przepływ z danymi osobowymi, sprawdź:",
    "- czy cel przetwarzania i podstawa prawna obejmują to, co robi automatyzacja,\n- czy przepływ przenosi tylko niezbędne pola,\n- czy masz umowy powierzenia ze wszystkimi dostawcami narzędzi,\n- czy wiesz, gdzie fizycznie przetwarzane są dane i na jakiej podstawie trafiają poza EOG,\n- czy decyzje o ludziach zatwierdza człowiek,\n- czy dostęp do przepływów jest ograniczony, a połączenia działają na kontach technicznych,\n- czy wiesz, jak usunąć dane jednej osoby ze wszystkich systemów,\n- czy przepływ jest opisany w dokumentacji i rejestrze czynności przetwarzania.",
    "## RODO jako argument za automatyzacją",
    "Dobrze zaprojektowana automatyzacja porządkuje przetwarzanie danych w firmie. Zamiast arkusza krążącego mailem jest jeden przepływ o opisanym przeznaczeniu, ograniczonym dostępem i historią zmian. Zamiast ręcznego szukania danych klienta przy żądaniu usunięcia jest jeden przycisk.",
    "Przy każdym projekcie [doradztwa i optymalizacji procesów](/uslugi/doradztwo-i-optymalizacja-procesow-biznesowych) projektujemy przepływ razem z mapą danych, a przy procesach z AI lub nietypowymi systemami dobieramy architekturę tak, żeby dane zostawały tam, gdzie powinny. Szczegóły znajdziesz na stronie [automatyzacja oraz AI w niestandardowych procesach](/uslugi/automatyzacja-oraz-ai-w-niestandardowych-procesach).",
  ].join("\n\n"),
  faq: [
    {
      question: "Czy automatyzacja procesów jest zgodna z RODO?",
      answer:
        "Tak, jeśli ma określony cel i podstawę prawną, przetwarza tylko niezbędne dane, a dostawcy narzędzi podpisali umowy powierzenia. RODO nie zabrania automatyzacji, wymaga jedynie, żeby była przemyślana i opisana.",
    },
    {
      question: "Czy potrzebuję umowy powierzenia z Make, Zapierem albo n8n?",
      answer:
        "Jeśli przez przepływy przechodzą dane osobowe, tak. Dostawca platformy przetwarza je w twoim imieniu, więc potrzebna jest umowa powierzenia (DPA). Najwięksi dostawcy udostępniają ją do zaakceptowania online. Przy n8n uruchomionym na własnym serwerze umowę zawierasz z dostawcą serwera.",
    },
    {
      question: "Czy mogę korzystać z narzędzi, które mają serwery w USA?",
      answer:
        "Tak, ale transfer danych poza Europejski Obszar Gospodarczy wymaga podstawy prawnej, np. certyfikacji dostawcy w programie EU-US Data Privacy Framework albo standardowych klauzul umownych. Część narzędzi pozwala też wybrać region serwerów w Unii Europejskiej.",
    },
    {
      question: "Czym jest zautomatyzowane podejmowanie decyzji według art. 22 RODO?",
      answer:
        "To decyzja o osobie podjęta wyłącznie przez system, bez udziału człowieka, która wywołuje wobec niej skutki prawne lub w podobny sposób istotnie na nią wpływa, np. automatyczne odrzucenie wniosku. Takie decyzje są dopuszczalne tylko w określonych przypadkach, a osoba ma prawo do interwencji człowieka. Najbezpieczniej, gdy automat przygotowuje rekomendację, a decyzję zatwierdza pracownik.",
    },
    {
      question: "Czy mogę wysyłać dane klientów do ChatGPT albo innego modelu AI?",
      answer:
        "Nie przez publiczny, darmowy czat. Przy danych klientów korzystaj z wersji biznesowych lub API, w których dostawca deklaruje, że nie trenuje modeli na przesłanych danych i podpisuje umowę powierzenia. Przed wysłaniem usuń z tekstu dane, które nie są potrzebne do zadania.",
    },
  ],
});
