import type { GuideFaqItem } from "../airtable.types";

export const GUIDE_CATEGORY_SLUGS = [
  "automatyzacja-procesow",
  "ai-w-firmie",
  "airtable",
  "dane-i-cyfryzacja",
  "audyt-i-koszty",
  "narzedzia-i-integracje",
  "kancelarie-prawne",
] as const;

export type GuideCategorySlug = (typeof GUIDE_CATEGORY_SLUGS)[number];

export interface GuideCategory {
  slug: GuideCategorySlug;
  /** Krótka nazwa: chip na karcie, menu, okruszki. */
  name: string;
  /** H1 strony kategorii. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Jedno zdanie na kafelku tematu i w menu. */
  shortDescription: string;
  /** Lead pod H1. */
  lead: string;
  /** Unikalna treść sekcji „O tym temacie”. */
  about: string[];
  faq: GuideFaqItem[];
  relatedServiceSlugs: string[];
  cta: { title: string; body: string };
  /** Czy pokazywać w rozwijanym menu Poradnika. */
  inMenu: boolean;
}

export const guideCategories: GuideCategory[] = [
  {
    slug: "automatyzacja-procesow",
    name: "Automatyzacja procesów",
    title: "Automatyzacja procesów w firmie. Poradniki i praktyczne wskazówki",
    metaTitle: "Automatyzacja procesów w firmie. Poradnik",
    metaDescription:
      "Jak zautomatyzować procesy w małej i średniej firmie: od wyboru pierwszego procesu, przez mapowanie i wdrożenie, po obsługę leadów, faktur i onboardingu.",
    shortDescription:
      "Które procesy zautomatyzować najpierw, jak je rozrysować i jak przeprowadzić wdrożenie bez chaosu.",
    lead: "Wszystko, co warto wiedzieć, zanim zautomatyzujesz pierwszy proces w firmie, i to, co przyda się przy kolejnych. Piszemy z perspektywy wdrożeń w małych i średnich firmach.",
    about: [
      "Automatyzacja procesów to przekazanie powtarzalnej pracy systemom: przepisywania danych, wysyłania tych samych wiadomości, pilnowania terminów, składania raportów. W małej i średniej firmie zwykle nie wymaga to dużego projektu IT. Wystarczy dobrze wybrany proces, uporządkowane dane i narzędzie dopasowane do skali.",
      "W tej części Poradnika znajdziesz artykuły o tym, jak wybrać pierwszy proces do automatyzacji, jak go rozrysować z zespołem, jakich błędów unikać przy wdrożeniu i jak wyglądają konkretne automatyzacje: obsługa zapytań od klientów, onboarding pracowników czy przepływ od sprzedaży do faktury.",
      "Jeśli dopiero zaczynasz, najlepiej przeczytać najpierw tekst o pięciu procesach, od których warto zacząć, a potem poradnik o mapowaniu. Dwa kolejne kroki to zwykle ocena opłacalności i pilotaż jednego procesu.",
    ],
    faq: [
      {
        question: "Od czego zacząć automatyzację procesów w firmie?",
        answer:
          "Od wyboru jednego procesu, który powtarza się często, ma stałe reguły i zabiera zespołowi dużo czasu, np. obsługi zapytań, faktur albo cyklicznych raportów. Potem warto go rozrysować z osobami, które go wykonują, zmierzyć, ile trwa, i dopiero wtedy wybrać narzędzie.",
      },
      {
        question: "Jakie procesy najczęściej automatyzują małe firmy?",
        answer:
          "Najczęściej obsługę zapytań i leadów, wystawianie faktur i przypomnienia o płatnościach, raporty, onboarding pracowników oraz komunikację z klientem po sprzedaży. Te procesy powtarzają się w wielu branżach i zwykle najszybciej się zwracają.",
      },
      {
        question: "Czy automatyzacja procesów wymaga programisty?",
        answer:
          "Przy prostych przepływach nie, bo narzędzia takie jak Make, Zapier czy n8n działają bez pisania kodu. Doświadczenie przydaje się przy procesach obejmujących kilka systemów, wyjątki, obsługę błędów i dane osobowe.",
      },
    ],
    relatedServiceSlugs: [
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "integracje-systemow",
    ],
    cta: {
      title: "Chcesz wiedzieć, który proces zautomatyzować najpierw?",
      body: "Opowiedz nam, jak wygląda zwykły tydzień w twojej firmie. W 30 minut wskażemy procesy, na których odzyskasz najwięcej czasu, i powiemy, jak mogłoby wyglądać wdrożenie.",
    },
    inMenu: true,
  },
  {
    slug: "ai-w-firmie",
    name: "AI w firmie",
    title: "AI w firmie. Jak mądrze wdrożyć sztuczną inteligencję",
    metaTitle: "AI w firmie. Poradniki o wdrażaniu AI",
    metaDescription:
      "Gdzie AI ma sens w małej i średniej firmie, jak zaplanować wdrożenie, przygotować dane i zadbać o bezpieczeństwo. Praktyczne poradniki bez żargonu.",
    shortDescription:
      "Gdzie sztuczna inteligencja realnie odciąża zespół, jak ją wdrożyć i czego się wystrzegać.",
    lead: "Praktyczne podejście do AI w małej i średniej firmie: od wyboru pierwszego zastosowania, przez przygotowanie danych, po zasady dla zespołu i pomiar efektów.",
    about: [
      "Sztuczna inteligencja przestała być ciekawostką, ale w wielu firmach dalej kończy się na kilku osobach korzystających z czatu AI na własną rękę. Realną wartość AI daje wtedy, gdy staje się jednym krokiem w dobrze opisanym procesie: sortuje zgłoszenia, odczytuje dokumenty, przygotowuje szkice odpowiedzi albo odpowiada na pytania na podstawie firmowej wiedzy.",
      "W tej kategorii opisujemy, gdzie AI sprawdza się już dziś, jak zaplanować wdrożenie w 90 dni, dlaczego porządek w danych jest ważniejszy niż wybór modelu i jak korzystać z AI zgodnie z RODO.",
      "Zamiast obietnic o rewolucji znajdziesz tu konkretne zastosowania, sposób na pilotaż i uczciwe wskazanie sytuacji, w których lepiej się jeszcze wstrzymać.",
    ],
    faq: [
      {
        question: "Od czego zacząć wdrażanie AI w małej firmie?",
        answer:
          "Od jednego, częstego zadania z dużą ilością tekstu, np. sortowania maili, odczytu dokumentów albo notatek ze spotkań. Warto sprawdzić, czy dane są uporządkowane, uruchomić pilotaż obok obecnego procesu i porównać wyniki przed wdrożeniem na stałe.",
      },
      {
        question: "Czy AI jest bezpieczne dla danych firmy?",
        answer:
          "Tak, jeśli korzysta się z wersji biznesowych lub API, w których dostawca nie trenuje modeli na danych klienta i podpisuje umowę powierzenia. Ryzyko pojawia się przy wklejaniu danych klientów do prywatnych, darmowych kont, dlatego zespół potrzebuje jasnych zasad.",
      },
      {
        question: "Ile trwa wdrożenie pierwszego zastosowania AI?",
        answer:
          "Zwykle około trzech miesięcy: miesiąc na diagnozę i wybór zastosowania, miesiąc na przygotowanie danych i pilotaż, miesiąc na uruchomienie, zasady dla zespołu i pomiar efektów. Proste zastosowania da się uruchomić szybciej.",
      },
    ],
    relatedServiceSlugs: [
      "strategia-wdrozenia-ai",
      "asystent-ai-na-firmowej-wiedzy",
      "ai-w-obsludze-dokumentow",
      "szkolenia-ai-dla-zespolow",
    ],
    cta: {
      title: "Chcesz sprawdzić, gdzie AI odciąży twój zespół?",
      body: "Pokaż nam zadanie, które zjada zespołowi najwięcej czasu. Ocenimy, czy AI sobie z nim poradzi, jak przygotować dane i jak zmierzyć efekt.",
    },
    inMenu: true,
  },
  {
    slug: "airtable",
    name: "Airtable",
    title: "Airtable w firmie. Poradniki, zastosowania i wdrożenia",
    metaTitle: "Airtable w firmie. Poradniki i przykłady",
    metaDescription:
      "Czym jest Airtable, kiedy zastępuje Excela i jak wykorzystać go jako CRM, bazę zleceń czy rejestr terminów. Poradniki zespołu, który wdraża Airtable.",
    shortDescription:
      "Kiedy Airtable zastępuje arkusze, jak zaprojektować bazę i jakie automatyzacje na niej zbudować.",
    lead: "Airtable to jedno z narzędzi, z którymi pracujemy najczęściej. Tu zebraliśmy wiedzę o tym, kiedy ma sens, jak go dobrze zaprojektować i co można na nim zbudować.",
    about: [
      "Airtable wygląda jak arkusz kalkulacyjny, ale działa jak baza danych. Pozwala łączyć ze sobą klientów, zlecenia, produkty i pracowników, pilnuje porządku w danych i ma wbudowane automatyzacje. Dla wielu małych i średnich firm to najszybsza droga od rozproszonych arkuszy do jednego, uporządkowanego miejsca pracy.",
      "W tej kategorii porównujemy Airtable z Excelem, pokazujemy typowe zastosowania w firmach, od CRM po rejestr terminów, i opisujemy, jak przenieść dane z arkuszy tak, żeby baza działała latami.",
      "Piszemy z perspektywy zespołu, który projektuje bazy w Airtable i buduje na nich automatyzacje oraz przepływy z AI. Dlatego obok zalet uczciwie opisujemy też ograniczenia narzędzia.",
    ],
    faq: [
      {
        question: "Czy Airtable nadaje się dla małej firmy?",
        answer:
          "Tak. Airtable dobrze sprawdza się w firmach, które prowadzą w arkuszach powiązane dane, z których korzysta kilka osób: klientów, zlecenia, sprzęt, zamówienia. Ma plan darmowy do testów, a plany płatne rozliczane są za użytkownika.",
      },
      {
        question: "Czym Airtable różni się od Excela?",
        answer:
          "Excel służy głównie do obliczeń i analiz. Airtable jest bazą danych: rekordy z różnych tabel łączą się ze sobą, pola mają określone typy, każdy użytkownik może mieć własny widok, a automatyzacje są wbudowane. Do liczenia lepszy jest Excel, do prowadzenia powiązanych danych w zespole Airtable.",
      },
      {
        question: "Czy Airtable można połączyć z CRM i programem do faktur?",
        answer:
          "Tak. Airtable ma API i gotowe integracje, a przez narzędzia takie jak Make, Zapier czy n8n łączy się z CRM-ami, programami do faktur, pocztą i formularzami. Często staje się centrum, z którego dane trafiają do innych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "wdrozenia-airtable",
      "projektowanie-baz-danych",
      "migracja-danych",
    ],
    cta: {
      title: "Chcesz przenieść firmę z arkuszy do Airtable?",
      body: "Pokaż nam swoje arkusze. Zaprojektujemy strukturę bazy, przeniesiemy dane i zbudujemy automatyzacje, które na niej działają.",
    },
    inMenu: true,
  },
  {
    slug: "dane-i-cyfryzacja",
    name: "Dane i cyfryzacja",
    title: "Dane i cyfryzacja firmy. Jak uporządkować informacje",
    metaTitle: "Cyfryzacja i porządek w danych firmy",
    metaDescription:
      "Jak scyfryzować dane firmy, zaprojektować strukturę bazy i uporządkować informacje przed automatyzacją i AI. Poradniki dla małych i średnich firm.",
    shortDescription:
      "Jak przenieść dane z papieru i arkuszy do jednej bazy i przygotować je pod automatyzację i AI.",
    lead: "Uporządkowane dane to fundament każdej automatyzacji i każdego wdrożenia AI. Pokazujemy, jak scyfryzować informacje w firmie i zaprojektować ich strukturę.",
    about: [
      "W wielu firmach wiedza leży w segregatorach, skrzynkach mailowych, rozproszonych arkuszach i głowach pracowników. Dopóki firma jest mała, jakoś to działa. Kiedy rośnie albo chce wdrożyć automatyzację lub AI, brak porządku w danych staje się największą przeszkodą.",
      "W tej kategorii opisujemy, jak podejść do cyfryzacji danych krok po kroku, od czego zacząć, jak zaprojektować strukturę bazy, jak pozbyć się duplikatów i jak zadbać, żeby porządek nie rozmył się po kilku miesiącach.",
      "Projektowanie baz i struktur danych to obszar, w którym mamy szczególnie duże doświadczenie. Dlatego w artykułach znajdziesz nie tylko zasady, ale też typowe problemy, które widzimy w firmach, i sposoby ich rozwiązania.",
    ],
    faq: [
      {
        question: "Czym jest cyfryzacja danych w firmie?",
        answer:
          "To przeniesienie informacji, na których firma pracuje, z papieru, maili i rozproszonych plików do jednej bazy, w której da się je wyszukać, połączyć i wykorzystać w innych systemach. Chodzi o dane, a nie tylko o skany dokumentów.",
      },
      {
        question: "Dlaczego porządek w danych jest ważny przed automatyzacją?",
        answer:
          "Bo automatyzacje i AI działają dokładnie na tym, co dostają. Duplikaty klientów, różne zapisy statusów i brak identyfikatorów prowadzą do błędnych raportów, podwójnych wiadomości i przepływów, które nie potrafią połączyć zamówienia z fakturą.",
      },
      {
        question: "Od czego zacząć porządkowanie danych?",
        answer:
          "Od obszaru, na którym ma działać najbliższe wdrożenie, np. klientów i zamówień. Trzeba spisać strukturę, ustalić źródło prawdy dla każdej informacji, oczyścić dane i zabezpieczyć porządek na przyszłość listami wyboru i wymaganymi polami.",
      },
    ],
    relatedServiceSlugs: [
      "porzadkowanie-i-strukturyzowanie-danych",
      "cyfryzacja-danych-i-dokumentow",
      "przygotowanie-danych-pod-ai",
      "automatyzacja-raportow",
    ],
    cta: {
      title: "Dane w twojej firmie są wszędzie, tylko nie tam, gdzie trzeba?",
      body: "Pomożemy zaplanować cyfryzację, zaprojektować strukturę bazy i uporządkować dane tak, żeby mogły na nich działać automatyzacje i AI.",
    },
    inMenu: true,
  },
  {
    slug: "audyt-i-koszty",
    name: "Audyt, koszty i ROI",
    title: "Audyt, koszty i ROI automatyzacji. Jak podjąć dobrą decyzję",
    metaTitle: "Audyt, koszty i ROI automatyzacji",
    metaDescription:
      "Jak wygląda audyt procesów, ile kosztuje automatyzacja i jak policzyć zwrot z wdrożenia. Poradniki, które pomagają zaplanować budżet i pierwszy krok.",
    shortDescription:
      "Jak wygląda audyt procesów, z czego składa się koszt automatyzacji i jak policzyć zwrot.",
    lead: "Zanim wydasz pieniądze na automatyzację, warto wiedzieć, co zmienić najpierw, ile to kosztuje i kiedy się zwróci. Te artykuły pomagają podjąć decyzję na podstawie liczb.",
    about: [
      "Najczęstsze pytania na pierwszej rozmowie o automatyzacji brzmią: od czego zacząć, ile to kosztuje i czy się opłaci. Na każde z nich da się odpowiedzieć rzetelnie, pod warunkiem że zna się procesy firmy i ma punkt odniesienia do porównania.",
      "W tej kategorii opisujemy, jak wygląda audyt procesów i co powinno powstać na jego końcu, z czego składa się wycena automatyzacji, jakie są modele współpracy i jak policzyć ROI oraz okres zwrotu na prostym przykładzie.",
      "To dobre miejsce na start dla właścicieli i zarządów, którzy muszą uzasadnić budżet albo porównać oferty kilku wykonawców.",
    ],
    faq: [
      {
        question: "Czy przed automatyzacją potrzebny jest audyt?",
        answer:
          "Przy jednym, jasno opisanym procesie nie zawsze. Audyt ma sens, gdy firma chce zautomatyzować kilka procesów, nie wie, od czego zacząć, albo procesy i dane są rozproszone. Kończy się listą zmian z priorytetami i szacunkiem kosztów.",
      },
      {
        question: "Z czego składa się koszt automatyzacji?",
        answer:
          "Z analizy lub audytu, jednorazowego wdrożenia, abonamentów narzędzi i utrzymania. Cenę najbardziej podnoszą liczba systemów do połączenia, liczba wyjątków i jakość danych, a obniżają jasno opisany proces i sprawdzone rozwiązania dla powtarzalnych procesów.",
      },
      {
        question: "Jak policzyć, czy automatyzacja się opłaca?",
        answer:
          "Trzeba zmierzyć proces przed wdrożeniem, policzyć wszystkie koszty, łącznie z utrzymaniem, i zestawić je z korzyściami: odzyskanym czasem, mniejszą liczbą błędów i szybszą obsługą. ROI to korzyści minus koszty, podzielone przez koszty.",
      },
    ],
    relatedServiceSlugs: [
      "audyt-procesow-biznesowych",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-raportow",
    ],
    cta: {
      title: "Chcesz wiedzieć, ile kosztowałaby automatyzacja w twojej firmie?",
      body: "Po 30-minutowej rozmowie powiemy, czy potrzebny jest audyt, z czego będzie się składać wycena i czego spodziewać się po wdrożeniu.",
    },
    inMenu: true,
  },
  {
    slug: "narzedzia-i-integracje",
    name: "Narzędzia i integracje",
    title: "Narzędzia do automatyzacji i integracje systemów",
    metaTitle: "Narzędzia do automatyzacji i integracje",
    metaDescription:
      "Make, Zapier, n8n, Power Automate, Airtable i integracje CRM z fakturowaniem. Jak dobrać narzędzia do automatyzacji i połączyć systemy w firmie.",
    shortDescription:
      "Jak dobrać narzędzia do automatyzacji i połączyć CRM, faktury i inne systemy w jedną całość.",
    lead: "Porównania narzędzi i praktyczne opisy integracji. Pomagają wybrać platformę dopasowaną do skali firmy i połączyć systemy tak, żeby dane płynęły same.",
    about: [
      "Wybór narzędzia do automatyzacji to decyzja na lata. Make, Zapier, n8n i Power Automate różnią się sposobem rozliczania, możliwościami, miejscem przechowywania danych i tym, jak łatwo się je utrzymuje. Do tego dochodzą bazy danych, takie jak Airtable, i gotowe połączenia między CRM a programami do faktur.",
      "W tej kategorii porównujemy najpopularniejsze platformy, pokazujemy, jak przetestować narzędzie przed decyzją, i opisujemy konkretne integracje, np. CRM z systemem do fakturowania, razem z pułapkami, które wychodzą dopiero przy prawdziwych danych.",
      "Nie mamy ulubionego narzędzia, które musimy sprzedać. Dlatego w artykułach piszemy wprost, kiedy które rozwiązanie wygrywa, a kiedy lepiej wybrać coś innego.",
    ],
    faq: [
      {
        question: "Jakie narzędzie do automatyzacji wybrać na start?",
        answer:
          "Przy prostych przepływach i małej liczbie operacji dobrym startem jest Zapier albo Make. Firmy pracujące w Microsoft 365 powinny najpierw sprawdzić Power Automate. Przy wrażliwych danych i dużej liczbie operacji warto rozważyć n8n na własnym serwerze.",
      },
      {
        question: "Czy każdy system da się zintegrować z innym?",
        answer:
          "Prawie każdy, jeśli ma API, czyli możliwość wymiany danych z innymi programami. Popularne CRM-y i programy do faktur mają też gotowe konektory. Trudniej jest ze starszymi programami instalowanymi lokalnie, ale i tam zwykle da się zbudować połączenie.",
      },
      {
        question: "Gotowy konektor czy integracja na zamówienie?",
        answer:
          "Gotowy konektor wystarczy przy prostych przypadkach i jest tani. Integracja na zamówienie jest potrzebna, gdy dane mają płynąć w obie strony, proces ma wiele wyjątków albo systemy nie mają gotowych połączeń.",
      },
    ],
    relatedServiceSlugs: [
      "integracje-systemow",
      "migracja-danych",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    cta: {
      title: "Nie wiesz, jakie narzędzie wybrać albo jak połączyć systemy?",
      body: "Opisz nam proces i systemy, z których korzystasz. Dobierzemy platformę do twojej skali i zaprojektujemy integracje, które nie drożeją z każdym miesiącem.",
    },
    inMenu: true,
  },
  {
    slug: "kancelarie-prawne",
    name: "Kancelarie prawne",
    title: "AI i automatyzacja w kancelarii prawnej. Poradnik dla prawników",
    metaTitle: "AI i automatyzacja w kancelarii. Poradnik",
    metaDescription:
      "Jak bezpiecznie korzystać z AI i automatyzacji w kancelarii prawnej: zastosowania, tajemnica zawodowa, analiza umów i procesy, od których warto zacząć.",
    shortDescription:
      "Jak kancelarie mogą korzystać z AI i automatyzacji bez ryzyka dla tajemnicy zawodowej i jakości pracy.",
    lead: "Artykuły dla adwokatów, radców prawnych i zespołów kancelarii, które chcą pracować szybciej, ale nie kosztem bezpieczeństwa danych klientów. Piszemy z perspektywy wdrożeń w kancelariach.",
    about: [
      "Kancelaria to miejsce, w którym praca z dokumentami, terminami i wiedzą wypełnia większość dnia. To dobre pole dla automatyzacji i AI, ale też szczególne: obowiązuje tajemnica zawodowa, a za każdy termin i każde pismo odpowiada pełnomocnik.",
      "W tej części Poradnika opisujemy, jak AI pomaga prawnikom w praktyce, gdzie są jego granice, jak korzystać z narzędzi takich jak ChatGPT bez ryzyka dla danych klientów i które procesy w kancelarii warto zautomatyzować najpierw.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji kancelarii w części Branże.",
    ],
    faq: [
      {
        question: "Czy kancelaria może bezpiecznie korzystać z AI?",
        answer:
          "Tak, jeśli korzysta z narzędzi na kontach firmowych, ogranicza dane przesyłane do modeli, ma spisane zasady korzystania z AI i traktuje wyniki AI jako materiał roboczy, który weryfikuje prawnik.",
      },
      {
        question: "Od czego zacząć automatyzację w kancelarii?",
        answer:
          "Od obszaru, który najbardziej odciąga prawników od pracy merytorycznej. Najczęściej to przyjmowanie klientów, pilnowanie terminów, powtarzalne pisma albo rozliczenia.",
      },
    ],
    relatedServiceSlugs: ["asystent-ai-na-firmowej-wiedzy", "ai-w-obsludze-dokumentow", "szkolenia-ai-dla-zespolow"],
    cta: {
      title: "Chcecie wdrożyć AI lub automatyzację w kancelarii?",
      body: "Porozmawiajmy o tym, co zabiera wam najwięcej czasu. Wskażemy, od czego zacząć i jak zadbać o tajemnicę zawodową.",
    },
    inMenu: false,
  },
];

export function guideCategoryPath(slug: string): string {
  return `/poradnik/kategoria/${slug}`;
}

export function getGuideCategory(slug: string): GuideCategory | null {
  return guideCategories.find((category) => category.slug === slug) ?? null;
}
