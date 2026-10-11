import { defineArticle } from "../define";

export default defineArticle({
  id: "a80",
  slug: "ai-w-rekrutacji",
  title: "AI w rekrutacji: jak korzystać odpowiedzialnie i gdzie postawić granicę",
  metaTitle: "AI w rekrutacji: odpowiedzialne zastosowania i granice",
  metaDescription:
    "Jak agencje pracy i działy rekrutacji mogą korzystać z AI odpowiedzialnie: odczyt CV, wyszukiwanie, ogłoszenia, komunikacja. Przepisy, ryzyka i granice.",
  primaryKeyword: "AI w rekrutacji",
  secondaryKeywords: [
    "sztuczna inteligencja w rekrutacji",
    "AI w agencji rekrutacyjnej",
    "ChatGPT dla rekrutera",
  ],
  excerpt:
    "AI może przejąć sporą część żmudnej pracy rekrutera: przepisywanie CV, przeszukiwanie bazy, pisanie ogłoszeń i wiadomości. Jednocześnie rekrutacja to obszar, w którym błąd AI dotyka ludzi i może być dyskryminujący. Opisujemy, jak korzystać z AI, żeby przyspieszyć pracę i nie przekroczyć granicy.",
  categories: ["agencje-pracy", "ai-w-firmie"],
  publishedAt: "2026-06-17",
  updatedAt: "2026-06-17",
  imageUrl: "https://images.unsplash.com/photo-1698047681432-006d2449c631?w=1200&q=80",
  imageAlt: "Rekruterka czyta CV kandydata podczas rozmowy",
  summary: [
    "AI dobrze porządkuje informacje: odczytuje CV, uzupełnia bazę, pomaga wyszukiwać i pisać.",
    "AI nie powinno oceniać, rankingować do decyzji ani odrzucać kandydatów.",
    "Unijne przepisy o AI zaliczają systemy używane do wyboru kandydatów do kategorii wysokiego ryzyka.",
    "Dane kandydatów przetwarza się tylko na kontach firmowych, zgodnie z zasadami agencji.",
  ],
  relatedServiceSlugs: ["szkolenia-ai-dla-zespolow", "strategia-wdrozenia-ai", "ai-w-obsludze-dokumentow"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-pracy", "baza-kandydatow-w-agencji-pracy", "ai-w-codziennej-pracy-zespolu"],
  cta: {
    title: "Chcecie wprowadzić AI w rekrutacji odpowiedzialnie?",
    body: "Pomożemy wybrać zastosowania, które przyspieszą pracę rekruterów, przygotować zasady i zaprojektować rozwiązania bez automatycznych decyzji o ludziach.",
  },
  body: [
    "Rekruter spędza dużą część dnia na pracy, która nie wymaga jego doświadczenia: przepisuje dane z CV, przegląda setki aplikacji w poszukiwaniu kilku uprawnień, pisze ogłoszenia i wiadomości do kandydatów, tłumaczy instrukcje dla pracowników z zagranicy. To praca, w której AI daje dziś wyraźny efekt.",
    "Jednocześnie rekrutacja to obszar szczególny. Każda decyzja dotyczy człowieka, jego pracy i dochodu. Błąd AI w ocenie kandydata nie jest zwykłą pomyłką, tylko może być niesprawiedliwy lub dyskryminujący. Dlatego w rekrutacji ważniejsze niż pytanie, co AI potrafi, jest pytanie, co powinno robić. W tym artykule opisujemy obie strony.",
    "## Co AI robi dobrze",
    "Modele językowe świetnie radzą sobie z porządkowaniem informacji. W pracy rekrutera oznacza to kilka konkretnych zastosowań:",
    "- **odczyt CV**: dane z CV w różnych formatach i językach trafiają do pól bazy,\n- **wyszukiwanie**: rekruter znajduje w bazie osoby z określonymi uprawnieniami, językiem, lokalizacją,\n- **ogłoszenia**: szkic ogłoszenia z wymagań zlecenia, w kilku językach,\n- **wiadomości**: zaproszenia, pytania o dostępność, informacje organizacyjne w języku kandydata,\n- **notatki z rozmów**: podsumowanie rozmowy do sprawdzenia przez rekrutera.",
    "Każde z tych zastosowań oszczędza czas, a decyzja pozostaje przy rekruterze.",
    "## Odczyt CV",
    "Najbardziej czasochłonna praca w agencji to przepisywanie danych z CV do bazy. AI odczytuje doświadczenie, uprawnienia, języki, lokalizację i oczekiwania, a rekruter sprawdza wynik. Wątpliwe pola są oznaczone. Dzięki temu baza jest kompletna i da się ją przeszukiwać, a rekruter nie traci godzin na przepisywanie. Opisujemy to na stronie [kandydaci i baza CV](/branze/agencje-pracy/kandydaci).",
    "Ważne, żeby odczyt dotyczył faktów z CV, a nie ocen. AI zapisuje, że kandydat ma uprawnienia na wózek widłowy, ale nie zapisuje, czy jest dobrym kandydatem.",
    "## Wyszukiwanie w bazie",
    "Gdy dane z CV są w bazie, rekruter może szybko znaleźć osoby spełniające wymagania formalne zlecenia: uprawnienia, lokalizacja, dostępność, język. To lista, którą rekruter przegląda i z której wybiera osoby do kontaktu. Lista nie jest rankingiem i nie służy do automatycznego odrzucania. Piszemy o tym w artykule [baza kandydatów w agencji pracy](/poradnik/baza-kandydatow-w-agencji-pracy).",
    "## Ogłoszenia i komunikacja",
    "AI przygotowuje szkic ogłoszenia z wymagań zlecenia, w tonie agencji i w kilku językach. Rekruter sprawdza, czy ogłoszenie nie zawiera wymagań, które mogą być dyskryminujące, np. dotyczących wieku czy płci, jeśli nie wynikają z charakteru pracy. Wiadomości do kandydatów i pracowników, w ich języku, oszczędzają czas koordynatorów i zmniejszają ryzyko nieporozumień.",
    "[[CTA]]",
    "## Czego AI nie powinno robić",
    "Najważniejsza granica dotyczy decyzji o ludziach. AI nie powinno:",
    "- **oceniać kandydatów**, np. przyznawać punktów za dopasowanie do zlecenia,\n- **tworzyć rankingów**, na podstawie których rekruter automatycznie kontaktuje się tylko z najwyżej ocenionymi,\n- **odrzucać aplikacji** bez udziału człowieka,\n- **analizować zdjęć, głosu czy wyrazu twarzy** kandydatów.",
    "Powód jest prosty. Model uczy się na danych, które mogą zawierać uprzedzenia, np. wobec kobiet, osób starszych czy cudzoziemców. Jeśli ocenia kandydatów, może te uprzedzenia powielać, a rekruter często nie wie, dlaczego jeden kandydat dostał lepszą ocenę od drugiego.",
    "## Nadzór człowieka w praktyce",
    "Nadzór człowieka nie może być formalnością. Rekruter, który przegląda listę dwustu kandydatów przygotowaną przez system i klika zatwierdź przy pierwszych dziesięciu, nie sprawuje realnego nadzoru. Dlatego warto projektować rozwiązania tak, żeby rekruter widział, dlaczego kandydat znalazł się na liście: jakie wymagania formalne spełnia. Lista uporządkowana według daty aplikacji lub dostępności, a nie według oceny modelu, zostawia decyzję o kolejności kontaktu przy rekruterze.",
    "Dobrą praktyką jest też okresowe sprawdzanie, kogo agencja zaprasza do rozmów i zatrudnia. Jeśli pewne grupy kandydatów są systematycznie pomijane, warto zrozumieć dlaczego. Dotyczy to procesów z AI i bez niego.",
    "## Szkolenie rekruterów",
    "Nawet najlepiej zaprojektowane narzędzie nie pomoże, jeśli rekruterzy nie wiedzą, jak z niego korzystać i czego unikać. Krótki warsztat na prawdziwych zadaniach, z omówieniem zasad i przykładów błędów AI, to podstawa wdrożenia. O szkoleniach piszemy na stronie usługi [szkolenia AI dla zespołów](/uslugi/szkolenia-ai-dla-zespolow).",
    "## Przepisy",
    "Unijne przepisy o AI zaliczają systemy używane do rekrutacji i wyboru kandydatów, w tym do filtrowania aplikacji i oceny kandydatów, do kategorii wysokiego ryzyka. Takie systemy podlegają szczególnym wymaganiom, m.in. dotyczącym nadzoru człowieka, jakości danych i przejrzystości. Szczegóły i terminy obowiązywania warto omówić z prawnikiem.",
    "Najprostszy sposób na ograniczenie ryzyka to projektowanie rozwiązań tak, żeby AI nie podejmowało decyzji o kandydatach. Odczyt danych, wyszukiwanie po wymaganiach formalnych i pomoc w pisaniu to zastosowania, w których decyzja w oczywisty sposób pozostaje przy rekruterze.",
    "## Dane kandydatów",
    "CV zawiera dane osobowe, często więcej, niż kandydat musiałby podać. Rekruterzy, którzy wklejają CV do prywatnych kont czatów AI, przekazują te dane poza kontrolą agencji. Dlatego potrzebne są:",
    "- konta firmowe w planach, w których dane nie służą do trenowania modeli,\n- zasady, jakie dane wolno przekazywać do AI, a jakie nie, np. dokumentów tożsamości i danych o zdrowiu,\n- rozwiązania z ustalonym przepływem danych zamiast wklejania do czatu,\n- informacja dla kandydatów o wykorzystaniu narzędzi w procesie, zgodnie z zasadami agencji.",
    "Więcej o zasadach przetwarzania danych piszemy w artykule [RODO a automatyzacja procesów](/poradnik/rodo-a-automatyzacja-procesow).",
    "## Porównanie zastosowań",
    "| Zastosowanie | Czy decyduje o kandydacie | Efekt | Kontrola |\n|---|---|---|---|\n| Odczyt CV do bazy | Nie | Mniej przepisywania | Rekruter sprawdza dane |\n| Wyszukiwanie po wymaganiach formalnych | Nie | Szybszy start zlecenia | Rekruter wybiera z listy |\n| Ogłoszenia | Nie | Szybsze publikacje | Rekruter sprawdza treść |\n| Wiadomości i tłumaczenia | Nie | Mniej telefonów | Szablony sprawdzone |\n| Ocena i ranking kandydatów | Tak | Pozorna oszczędność czasu | Nie wdrażamy |",
    "## Pytania do dostawców narzędzi",
    "Coraz więcej systemów rekrutacyjnych ma wbudowane funkcje AI. Przed ich włączeniem warto zapytać dostawcę: co dokładnie robi funkcja, czy ocenia lub rankinguje kandydatów, na jakich danych działa, gdzie przetwarzane są dane, czy dane służą do trenowania modeli i jak dostawca podchodzi do wymagań unijnych przepisów o AI. Funkcja, która ocenia kandydatów, wymaga szczególnej uwagi i rozmowy z prawnikiem.",
    "Odpowiedzi warto zachować w dokumentacji agencji, razem z opisem, jak funkcja jest używana w praktyce.",
    "To ułatwia odpowiedź na pytania klientów, kandydatów i kontrolujących.",
    "Dokumentację warto aktualizować przy każdej zmianie.",
    "## Jak zacząć",
    "Najlepiej od zasad i krótkiego warsztatu dla rekruterów: co wolno, czego nie, z jakich narzędzi korzystać. Potem od odczytu CV do bazy i szablonów wiadomości, bo dają szybki efekt bez ryzyka dla kandydatów. Wyszukiwanie w bazie warto dodać, gdy dane są uporządkowane. Szersze spojrzenie znajdziecie na stronie [AI w agencji pracy](/branze/agencje-pracy/ai), a o tym, jak AI zmienia pracę zespołów, w artykule [AI w codziennej pracy zespołu](/poradnik/ai-w-codziennej-pracy-zespolu).",
  ].join("\n\n"),
  faq: [
    {
      question: "Czy AI może oceniać kandydatów?",
      answer:
        "Nie zalecamy tego. Unijne przepisy zaliczają takie systemy do wysokiego ryzyka, a ocena przez AI może powielać uprzedzenia. Ocena należy do rekrutera.",
    },
    {
      question: "Do czego rekruter może bezpiecznie używać AI?",
      answer:
        "Do odczytu CV do bazy, wyszukiwania po wymaganiach formalnych, pisania ogłoszeń i wiadomości oraz notatek z rozmów, które sprawdza.",
    },
    {
      question: "Czy można wklejać CV do ChatGPT?",
      answer:
        "Tylko na kontach firmowych, zgodnie z zasadami agencji. Lepiej przygotować rozwiązanie z ustalonym przepływem danych.",
    },
    {
      question: "Czy kandydat powinien wiedzieć o wykorzystaniu AI?",
      answer:
        "Warto informować kandydatów o narzędziach używanych w procesie, zgodnie z zasadami agencji i przepisami.",
    },
    {
      question: "Od czego zacząć AI w rekrutacji?",
      answer:
        "Od zasad i warsztatu dla rekruterów, a potem od odczytu CV i szablonów wiadomości.",
    },
  ],
});
