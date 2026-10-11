import type { GuideFaqItem } from "../airtable.types";

export const GUIDE_CATEGORY_SLUGS = [
  "automatyzacja-procesow",
  "ai-w-firmie",
  "airtable",
  "dane-i-cyfryzacja",
  "audyt-i-koszty",
  "narzedzia-i-integracje",
  "kancelarie-prawne",
  "biura-rachunkowe",
  "spedycja",
  "firmy-logistyczne",
  "hurtownie-i-dystrybucja",
  "agencje-marketingowe",
  "nieruchomosci",
  "posrednictwo-ubezpieczeniowe",
  "firmy-serwisowe",
  "firmy-budowlane",
  "sklepy-internetowe",
  "placowki-medyczne",
  "firmy-szkoleniowe",
  "agencje-pracy",
  "biura-projektowe",
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
  {
    slug: "biura-rachunkowe",
    name: "Biura rachunkowe",
    title: "AI i automatyzacja w biurze rachunkowym. Poradnik dla księgowych",
    metaTitle: "AI i automatyzacja w biurze rachunkowym. Poradnik",
    metaDescription:
      "Jak biura rachunkowe mogą korzystać z AI i automatyzacji: procesy na początek, KSeF, odczyt dokumentów i bezpieczna praca z narzędziami takimi jak ChatGPT.",
    shortDescription:
      "Jak biura rachunkowe mogą korzystać z AI i automatyzacji bez ryzyka dla danych klientów.",
    lead: "Artykuły dla właścicieli biur rachunkowych, księgowych i kancelarii podatkowych, które chcą mniej czasu poświęcać na dokumenty i administrację, a więcej na klientów. Piszemy z perspektywy wdrożeń w biurach.",
    about: [
      "Biuro rachunkowe pracuje na dokumentach, terminach i danych finansowych klientów. Duża część dnia to praca, która nie wymaga wiedzy księgowej: zbieranie dokumentów, przepisywanie danych, przypominanie i odpowiadanie na te same pytania. To dobre pole dla automatyzacji i AI.",
      "W tej części Poradnika opisujemy, które procesy w biurze warto zautomatyzować najpierw, jak pracować z KSeF w imieniu wielu klientów, jak AI pomaga księgowym w praktyce i jak korzystać z narzędzi takich jak ChatGPT bez ryzyka dla danych klientów.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji biur rachunkowych w części Branże.",
    ],
    faq: [
      {
        question: "Czy biuro rachunkowe może bezpiecznie korzystać z AI?",
        answer:
          "Tak, jeśli korzysta z narzędzi na kontach firmowych, w planach bez trenowania na danych, ogranicza dane przesyłane do modeli, ma spisane zasady korzystania z AI i traktuje wyniki AI jako materiał do sprawdzenia przez księgowego.",
      },
      {
        question: "Od czego zacząć automatyzację w biurze rachunkowym?",
        answer:
          "Najczęściej od zbierania dokumentów od klientów, bo to ono najbardziej obciąża zespół pod koniec miesiąca. Kolejne obszary to odczyt dokumentów, KSeF, komunikacja z klientami i rozliczenia biura.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "ai-w-obsludze-dokumentow", "szkolenia-ai-dla-zespolow"],
    cta: {
      title: "Chcecie wdrożyć AI lub automatyzację w biurze?",
      body: "Porozmawiajmy o tym, co zabiera wam najwięcej czasu. Wskażemy, od czego zacząć i jak zadbać o bezpieczeństwo danych klientów.",
    },
    inMenu: false,
  },
  {
    slug: "spedycja",
    name: "Spedycja",
    title: "AI i automatyzacja w spedycji. Poradnik dla spedytorów",
    metaTitle: "AI i automatyzacja w spedycji. Poradnik",
    metaDescription:
      "Jak firmy spedycyjne mogą korzystać z AI i automatyzacji: procesy na początek, weryfikacja przewoźników, TMS i integracje oraz AI w pracy spedytora.",
    shortDescription:
      "Jak firmy spedycyjne mogą pracować szybciej dzięki automatyzacji i AI, bez utraty kontroli nad zleceniami.",
    lead: "Artykuły dla właścicieli firm spedycyjnych, kierowników spedycji i spedytorów, którzy chcą mniej czasu spędzać na przepisywaniu danych i szukaniu dokumentów, a więcej na klientach i przewoźnikach. Piszemy z perspektywy wdrożeń w spedycji.",
    about: [
      "Spedycja to praca na danych, które krążą między klientem, spedytorem i przewoźnikiem. Zapytania, zlecenia, statusy, dokumenty i faktury przechodzą przez wiele rąk i systemów, a każde przepisanie to czas i ryzyko błędu.",
      "W tej części Poradnika opisujemy, które procesy w spedycji warto zautomatyzować najpierw, jak sprawdzać przewoźników, jak łączyć TMS z innymi systemami i jak AI pomaga spedytorom w codziennej pracy.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji spedycji w części Branże.",
    ],
    faq: [
      {
        question: "Co w spedycji da się zautomatyzować?",
        answer:
          "Najczęściej odczyt zapytań i wyceny, zlecenia dla przewoźników, weryfikację przewoźników, statusy dla klientów, obieg CMR i innych dokumentów oraz rozliczenia frachtu.",
      },
      {
        question: "Czy automatyzacja wymaga zmiany TMS?",
        answer:
          "Zwykle nie. Automatyzacje buduje się obok TMS i łączy z nim przez API, import i eksport plików albo pocztę, zależnie od możliwości systemu.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-dla-logistyki", "integracje-systemow", "ai-w-obsludze-dokumentow"],
    cta: {
      title: "Chcecie zautomatyzować pracę spedycji?",
      body: "Porozmawiajmy o tym, co zabiera spedytorom najwięcej czasu. Wskażemy, od czego zacząć i co da się połączyć z waszym TMS.",
    },
    inMenu: false,
  },
  {
    slug: "firmy-logistyczne",
    name: "Logistyka i magazyny",
    title: "AI i automatyzacja w firmie logistycznej. Poradnik dla logistyki i magazynów",
    metaTitle: "AI i automatyzacja w logistyce i magazynie. Poradnik",
    metaDescription:
      "Jak firmy logistyczne i magazyny mogą korzystać z AI i automatyzacji: procesy na początek, WMS i integracje, raporty KPI dla klientów i AI w logistyce.",
    shortDescription:
      "Jak operatorzy logistyczni i magazyny mogą ograniczyć pracę biurową wokół operacji dzięki automatyzacji i AI.",
    lead: "Artykuły dla właścicieli i menedżerów firm logistycznych, magazynów i firm transportowych, którzy chcą, żeby biuro obsługi klienta i dział rozliczeń nadążały za operacjami. Piszemy z perspektywy wdrożeń w logistyce.",
    about: [
      "W firmie logistycznej operacje są zwykle dobrze zorganizowane, a słabym ogniwem jest przepływ informacji: zlecenia od klientów w różnych formatach, awizacje, dokumenty, raporty i rozliczenia. To tu biuro spędza najwięcej czasu na przepisywaniu i szukaniu.",
      "W tej części Poradnika opisujemy, które procesy w firmie logistycznej warto zautomatyzować najpierw, jak łączyć WMS z innymi systemami, jak automatyzować raporty i KPI dla klientów i jak AI pomaga w logistyce w praktyce.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji firm logistycznych w części Branże.",
    ],
    faq: [
      {
        question: "Co w firmie logistycznej da się zautomatyzować?",
        answer:
          "Najczęściej przyjmowanie zleceń od klientów, awizacje dostaw, obieg dokumentów i reklamacji, raporty i KPI dla klientów, administrację floty i rozliczenia usług logistycznych.",
      },
      {
        question: "Czy automatyzacja wymaga zmiany WMS?",
        answer:
          "Zwykle nie. Automatyzacje buduje się obok WMS i TMS i łączy z nimi przez API, import i eksport plików albo pocztę.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
    cta: {
      title: "Chcecie zautomatyzować pracę firmy logistycznej?",
      body: "Porozmawiajmy o tym, co zabiera biuru najwięcej czasu. Wskażemy, od czego zacząć i co da się połączyć z waszym WMS lub TMS.",
    },
    inMenu: false,
  },
  {
    slug: "hurtownie-i-dystrybucja",
    name: "Hurtownie i dystrybucja",
    title: "AI i automatyzacja w hurtowni i handlu B2B. Poradnik",
    metaTitle: "AI i automatyzacja w hurtowni i handlu B2B. Poradnik",
    metaDescription:
      "Jak hurtownie i dystrybutorzy mogą korzystać z AI i automatyzacji: procesy na początek, zamówienia B2B, należności i limity kupieckie, AI w handlu B2B.",
    shortDescription:
      "Jak hurtownie i firmy handlowe B2B mogą odciążyć handlowców i biuro dzięki automatyzacji i AI.",
    lead: "Artykuły dla właścicieli i menedżerów hurtowni, dystrybutorów i firm handlowych B2B, które chcą, żeby handlowcy spędzali więcej czasu z klientami, a biuro mniej czasu na przepisywaniu. Piszemy z perspektywy wdrożeń w handlu B2B.",
    about: [
      "Hurtownia pracuje na dużej liczbie zamówień, produktów i klientów. ERP prowadzi stany, ceny i dokumenty, ale wiele informacji trafia do niego ręcznie: zamówienia z maili, oferty z arkuszy, potwierdzenia od dostawców.",
      "W tej części Poradnika opisujemy, które procesy w hurtowni warto zautomatyzować najpierw, kiedy wystarczy platforma B2B, a kiedy automatyzacja zamówień z maili, jak pilnować należności i limitów kupieckich i jak AI pomaga w handlu B2B.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji hurtowni w części Branże.",
    ],
    faq: [
      {
        question: "Co w hurtowni da się zautomatyzować?",
        answer:
          "Najczęściej obsługę zamówień od klientów, oferty i cenniki, pracę handlowców w CRM, zakupy u dostawców, reklamacje i zwroty oraz należności i limity kupieckie.",
      },
      {
        question: "Czy automatyzacja wymaga zmiany ERP?",
        answer:
          "Zwykle nie. Automatyzacje buduje się obok ERP i łączy z nim przez API, import i eksport plików albo bazę danych.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-sprzedazy", "integracje-systemow", "ai-w-obsludze-dokumentow"],
    cta: {
      title: "Chcecie zautomatyzować pracę hurtowni?",
      body: "Porozmawiajmy o tym, co zabiera handlowcom i biuru najwięcej czasu. Wskażemy, od czego zacząć i co da się połączyć z waszym ERP.",
    },
    inMenu: false,
  },
  {
    slug: "agencje-marketingowe",
    name: "Agencje marketingowe",
    title: "AI i automatyzacja w agencji marketingowej. Poradnik",
    metaTitle: "AI i automatyzacja w agencji marketingowej. Poradnik",
    metaDescription:
      "Jak agencje marketingowe mogą korzystać z AI i automatyzacji: procesy na początek, AI w treściach, raporty dla klientów i rentowność klientów agencji.",
    shortDescription:
      "Jak agencje marketingowe mogą oddać pracę operacyjną systemom i bezpiecznie korzystać z AI.",
    lead: "Artykuły dla właścicieli agencji marketingowych, reklamowych i interaktywnych oraz ich zespołów, które chcą więcej czasu poświęcać strategii i kreacji, a mniej raportom, akceptacjom i rozliczeniom. Piszemy z perspektywy wdrożeń w agencjach.",
    about: [
      "Agencja sprzedaje wiedzę, kreatywność i czas. Wokół tej pracy jest jednak dużo operacji: raporty dla klientów, briefy, akceptacje, wyceny, czas pracy i faktury. Ta praca rośnie z każdym klientem i zjada czas zespołu.",
      "W tej części Poradnika opisujemy, które procesy w agencji warto zautomatyzować najpierw, jak korzystać z AI w treściach i raportach bez utraty jakości, jak przygotować raport dla klienta i jak liczyć rentowność klientów.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji agencji marketingowej w części Branże.",
    ],
    faq: [
      {
        question: "Co w agencji marketingowej da się zautomatyzować?",
        answer:
          "Najczęściej raporty dla klientów, briefy i wyceny, akceptacje materiałów, część pracy nad treściami z AI, kontrolę czasu pracy i rentowności oraz onboarding klientów.",
      },
      {
        question: "Czy agencja może bezpiecznie korzystać z AI?",
        answer:
          "Tak, jeśli korzysta z kont firmowych w planach bez trenowania na danych, chroni materiały klientów, ma spisane zasady i redaguje treści przed przekazaniem klientowi.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-raportow", "automatyzacja-dla-firm-uslugowych", "szkolenia-ai-dla-zespolow"],
    cta: {
      title: "Chcecie zautomatyzować pracę agencji?",
      body: "Porozmawiajmy o tym, co zabiera zespołowi najwięcej czasu poza pracą kreatywną. Wskażemy, od czego zacząć i jak bezpiecznie korzystać z AI.",
    },
    inMenu: false,
  },
  {
    slug: "nieruchomosci",
    name: "Nieruchomości",
    title: "AI i automatyzacja w biurze nieruchomości. Poradnik",
    metaTitle: "AI i automatyzacja w nieruchomościach. Poradnik",
    metaDescription:
      "Jak biura nieruchomości i zarządcy najmu mogą korzystać z AI i automatyzacji: procesy na początek, AI dla agentów, CRM i zarządzanie najmem wielu mieszkań.",
    shortDescription:
      "Jak biura nieruchomości i firmy zarządzające najmem mogą oddać pracę powtarzalną systemom i bezpiecznie korzystać z AI.",
    lead: "Artykuły dla właścicieli biur nieruchomości, agentów i firm zarządzających najmem, które chcą więcej czasu poświęcać klientom i transakcjom, a mniej przepisywaniu zapytań, dokumentom i rozliczeniom. Piszemy z perspektywy wdrożeń w tej branży.",
    about: [
      "Biuro nieruchomości sprzedaje wiedzę o rynku, kontakty i czas agentów. Wokół tej pracy jest dużo operacji: zapytania z portali, opisy ofert, umowy, prezentacje, a w zarządzaniu najmem także zgłoszenia, czynsze i rozliczenia z właścicielami.",
      "W tej części Poradnika opisujemy, które procesy warto zautomatyzować najpierw, jak agenci mogą korzystać z AI bez ryzyka dla danych klientów, jak uporządkować CRM i jak zarządzać najmem wielu mieszkań bez arkuszy.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji biura nieruchomości w części Branże.",
    ],
    faq: [
      {
        question: "Co w biurze nieruchomości da się zautomatyzować?",
        answer:
          "Najczęściej obsługę zapytań z portali, umawianie prezentacji, opisy ofert, umowy i protokoły z szablonów, zgłoszenia najemców, rozliczenia najmu i raporty dla właścicieli.",
      },
      {
        question: "Czy agent nieruchomości może bezpiecznie korzystać z AI?",
        answer:
          "Tak, jeśli korzysta z kont firmowych w planach bez trenowania na danych, nie wkleja danych klientów do prywatnych narzędzi i sprawdza każdy tekst przed publikacją lub wysłaniem.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-dla-firm-uslugowych", "szkolenia-ai-dla-zespolow"],
    cta: {
      title: "Chcecie zautomatyzować pracę biura?",
      body: "Porozmawiajmy o tym, co zabiera agentom i zarządcom najwięcej czasu poza pracą z klientem. Wskażemy, od czego zacząć i jak bezpiecznie korzystać z AI.",
    },
    inMenu: false,
  },
  {
    slug: "posrednictwo-ubezpieczeniowe",
    name: "Pośrednictwo ubezpieczeniowe",
    title: "AI i automatyzacja w agencji ubezpieczeniowej. Poradnik",
    metaTitle: "AI i automatyzacja w agencji ubezpieczeniowej. Poradnik",
    metaDescription:
      "Jak agencje ubezpieczeniowe i brokerzy mogą korzystać z AI i automatyzacji: procesy na początek, AI dla agentów, odnowienia polis i porównanie ofert.",
    shortDescription:
      "Jak agencje ubezpieczeniowe, multiagencje i brokerzy mogą oddać pracę powtarzalną systemom i bezpiecznie korzystać z AI.",
    lead: "Artykuły dla właścicieli agencji ubezpieczeniowych, multiagencji i kancelarii brokerskich oraz ich agentów, którzy chcą więcej czasu poświęcać klientom i doradztwu, a mniej przepisywaniu danych, pilnowaniu terminów i rozliczeniom. Piszemy z perspektywy wdrożeń w tej branży.",
    about: [
      "Agencja ubezpieczeniowa żyje z relacji z klientami i odnowień. Wokół tej pracy jest dużo operacji: zapytania, dane do kalkulacji, dokumenty, szkody, zestawienia prowizji z wielu towarzystw.",
      "W tej części Poradnika opisujemy, które procesy warto zautomatyzować najpierw, jak agenci mogą korzystać z AI bez ryzyka dla danych klientów, jak nie tracić klientów przy odnowieniach i jak przygotować porównanie ofert dla klienta.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji agencji ubezpieczeniowej w części Branże.",
    ],
    faq: [
      {
        question: "Co w agencji ubezpieczeniowej da się zautomatyzować?",
        answer:
          "Najczęściej odnowienia polis, obsługę zapytań i zbieranie danych do kalkulacji, dokumenty klientów, wsparcie przy szkodach, rozliczenia prowizji i bazę polis z wielu towarzystw.",
      },
      {
        question: "Czy agent ubezpieczeniowy może bezpiecznie korzystać z AI?",
        answer:
          "Tak, jeśli korzysta z kont firmowych w planach bez trenowania na danych, nie przekazuje do AI danych o zdrowiu klientów i sprawdza każdy materiał, zanim trafi do klienta.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-sprzedazy", "ai-w-obsludze-dokumentow", "szkolenia-ai-dla-zespolow"],
    cta: {
      title: "Chcecie zautomatyzować pracę agencji?",
      body: "Porozmawiajmy o tym, co zabiera agentom najwięcej czasu poza rozmowami z klientami. Wskażemy, od czego zacząć i jak bezpiecznie korzystać z AI.",
    },
    inMenu: false,
  },
  {
    slug: "firmy-serwisowe",
    name: "Firmy serwisowe",
    title: "AI i automatyzacja w firmie serwisowej. Poradnik",
    metaTitle: "AI i automatyzacja w firmie serwisowej. Poradnik",
    metaDescription:
      "Jak firmy serwisowe i instalacyjne mogą korzystać z AI i automatyzacji: procesy na początek, AI dla serwisantów, program do serwisu i umowy serwisowe.",
    shortDescription:
      "Jak firmy serwisowe i instalacyjne mogą oddać pracę powtarzalną systemom i bezpiecznie korzystać z AI.",
    lead: "Artykuły dla właścicieli firm serwisowych, instalacyjnych i utrzymania technicznego oraz ich dyspozytorów i serwisantów, którzy chcą mniej czasu spędzać na telefonie, grafiku i papierach, a więcej na pracy u klientów. Piszemy z perspektywy wdrożeń w tej branży.",
    about: [
      "Firma serwisowa sprzedaje wiedzę techniczną i czas serwisantów. Wokół tej pracy jest dużo operacji: zgłoszenia, grafik, protokoły, przeglądy, części, faktury.",
      "W tej części Poradnika opisujemy, które procesy warto zautomatyzować najpierw, jak serwisanci mogą korzystać z AI, kiedy wystarczy program do zarządzania serwisem, a kiedy potrzebna jest automatyzacja, i jak rozliczać umowy serwisowe.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji firmy serwisowej w części Branże.",
    ],
    faq: [
      {
        question: "Co w firmie serwisowej da się zautomatyzować?",
        answer:
          "Najczęściej przyjmowanie zgłoszeń, planowanie wizyt, protokoły na telefonie, przeglądy okresowe, wyceny i oferty oraz rozliczenia zleceń i części.",
      },
      {
        question: "Czy serwisanci mogą korzystać z AI?",
        answer:
          "Tak, np. do wyszukiwania informacji w instrukcjach urządzeń i opisów prac z notatek głosowych. Diagnozę i decyzję o naprawie zawsze podejmuje serwisant.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "asystent-ai-na-firmowej-wiedzy"],
    cta: {
      title: "Chcecie zautomatyzować pracę serwisu?",
      body: "Porozmawiajmy o tym, co zabiera biuru i serwisantom najwięcej czasu. Wskażemy, od czego zacząć i gdzie AI ma sens.",
    },
    inMenu: false,
  },
  {
    slug: "firmy-budowlane",
    name: "Firmy budowlane",
    title: "AI i automatyzacja w firmie budowlanej. Poradnik",
    metaTitle: "AI i automatyzacja w firmie budowlanej. Poradnik",
    metaDescription:
      "Jak firmy budowlane mogą korzystać z AI i automatyzacji: procesy na początek, AI dla kierownika budowy, kontrola kosztów budowy i cyfryzacja firmy.",
    shortDescription:
      "Jak firmy budowlane i wykonawcze mogą uporządkować przepływ informacji między budową a biurem i bezpiecznie korzystać z AI.",
    lead: "Artykuły dla właścicieli i zarządów firm budowlanych, kierowników budów i pracowników biur, którzy chcą mniej czasu spędzać na raportach, dokumentach i rozliczeniach, a więcej na prowadzeniu budów. Piszemy z perspektywy wdrożeń w tej branży.",
    about: [
      "Firma budowlana łączy pracę w terenie z dużą ilością dokumentów: oferty, raporty, dokumenty podwykonawców, zamówienia, protokoły odbioru, faktury. Informacje przechodzą między budową a biurem przez telefony i maile, a część z nich ginie po drodze.",
      "W tej części Poradnika opisujemy, które procesy warto zautomatyzować najpierw, jak kierownik budowy może korzystać z AI, jak kontrolować koszty budowy na bieżąco i od czego zacząć cyfryzację firmy.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji firmy budowlanej w części Branże.",
    ],
    faq: [
      {
        question: "Co w firmie budowlanej da się zautomatyzować?",
        answer:
          "Najczęściej raporty z budowy, dokumenty i faktury podwykonawców, zamówienia materiałów, odbiory i usterki, przypisanie kosztów do budów oraz rejestr ofert i przetargów.",
      },
      {
        question: "Czy automatyzacja zastąpi dziennik budowy?",
        answer:
          "Nie. Dziennik budowy prowadzi się według przepisów. Raporty i rejestry wewnętrzne mogą ułatwić jego prowadzenie.",
      },
    ],
    relatedServiceSlugs: ["integracje-systemow", "ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
    cta: {
      title: "Chcecie uporządkować pracę firmy budowlanej?",
      body: "Porozmawiajmy o tym, co zabiera biuru i kierownikom najwięcej czasu. Wskażemy, od czego zacząć i gdzie AI ma sens.",
    },
    inMenu: false,
  },
  {
    slug: "sklepy-internetowe",
    name: "Sklepy internetowe",
    title: "AI i automatyzacja w sklepie internetowym. Poradnik",
    metaTitle: "AI i automatyzacja w sklepie internetowym. Poradnik",
    metaDescription:
      "Jak sklepy internetowe mogą korzystać z AI i automatyzacji: procesy na początek, AI w e-commerce, marża po wszystkich kosztach i dane produktowe.",
    shortDescription:
      "Jak sklepy internetowe mogą oddać pracę powtarzalną systemom i bezpiecznie korzystać z AI.",
    lead: "Artykuły dla właścicieli sklepów internetowych, marek sprzedających online i ich zespołów, które chcą rosnąć bez proporcjonalnego zwiększania zespołu. Piszemy z perspektywy wdrożeń w e-commerce.",
    about: [
      "Sklep internetowy to sprzedaż, obsługa klienta, zarządzanie produktami i logistyka w jednym. Wiele z tej pracy polega na kopiowaniu danych między platformą, marketplace, magazynem i arkuszami.",
      "W tej części Poradnika opisujemy, które procesy w sklepie warto zautomatyzować najpierw, jak korzystać z AI w e-commerce, jak liczyć marżę po wszystkich kosztach i jak uporządkować dane produktowe.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji sklepu internetowego w części Branże.",
    ],
    faq: [
      {
        question: "Co w sklepie internetowym da się zautomatyzować?",
        answer:
          "Najczęściej odpowiedzi o status zamówienia, zwroty i reklamacje, opisy i dane produktów, synchronizację stanów i cen, zakupy u dostawców oraz raporty sprzedaży i marży.",
      },
      {
        question: "Czy sklep internetowy może bezpiecznie korzystać z AI?",
        answer:
          "Tak, jeśli korzysta z kont firmowych w planach bez trenowania na danych, nie przekazuje do AI danych płatności i sprawdza opisy i odpowiedzi, zanim trafią do klientów.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-logistyki", "automatyzacja-marketingu"],
    cta: {
      title: "Chcecie zautomatyzować pracę sklepu?",
      body: "Porozmawiajmy o tym, co zabiera zespołowi sklepu najwięcej czasu. Wskażemy, od czego zacząć i gdzie AI ma sens.",
    },
    inMenu: false,
  },
  {
    slug: "placowki-medyczne",
    name: "Placówki medyczne",
    title: "Automatyzacja w przychodni i gabinecie. Poradnik",
    metaTitle: "Automatyzacja w przychodni i gabinecie. Poradnik",
    metaDescription:
      "Jak przychodnie i gabinety mogą korzystać z automatyzacji i AI w pracy organizacyjnej: procesy na początek, dane pacjentów, nieobecności, rejestracja.",
    shortDescription:
      "Jak przychodnie i gabinety mogą odciążyć rejestrację i administrację, z najwyższą ostrożnością wobec danych pacjentów.",
    lead: "Artykuły dla właścicieli i kierowników prywatnych przychodni, gabinetów i centrów medycznych, którzy chcą odciążyć rejestrację i administrację. Piszemy wyłącznie o pracy organizacyjnej, nie o decyzjach medycznych.",
    about: [
      "Placówka medyczna to praca personelu i dużo pracy organizacyjnej wokół niej: rejestracja, przypomnienia, formularze, pytania pacjentów, grafiki, rozliczenia. Ta praca obciąża rejestrację i rośnie z każdym nowym lekarzem.",
      "W tej części Poradnika opisujemy, które procesy organizacyjne warto zautomatyzować najpierw, jak chronić dane pacjentów przy automatyzacji, jak ograniczyć nieodwołane wizyty i jak odciążyć rejestrację.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji przychodni w części Branże.",
    ],
    faq: [
      {
        question: "Co w przychodni da się zautomatyzować?",
        answer:
          "Pracę organizacyjną: rejestrację online, przypomnienia o wizytach, listę oczekujących, formularze i zgody przed wizytą, odpowiedzi na pytania organizacyjne, grafiki i rozliczenia.",
      },
      {
        question: "Czy automatyzacja w przychodni dotyczy decyzji medycznych?",
        answer:
          "Nie. Automatyzacja dotyczy organizacji pracy. Decyzje medyczne, dokumentacja i rozmowy o zdrowiu należą do personelu.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow"],
    cta: {
      title: "Chcecie odciążyć rejestrację?",
      body: "Porozmawiajmy o tym, co zabiera rejestracji i administracji najwięcej czasu. Wskażemy, od czego zacząć, z ostrożnością wobec danych pacjentów.",
    },
    inMenu: false,
  },
  {
    slug: "firmy-szkoleniowe",
    name: "Firmy szkoleniowe",
    title: "AI i automatyzacja w firmie szkoleniowej. Poradnik",
    metaTitle: "AI i automatyzacja w firmie szkoleniowej. Poradnik",
    metaDescription:
      "Jak firmy szkoleniowe mogą korzystać z AI i automatyzacji: procesy na początek, AI w szkoleniach, ankiety poszkoleniowe i sprzedaż szkoleń dla firm.",
    shortDescription:
      "Jak firmy szkoleniowe i organizatorzy kursów mogą ograniczyć administrację i bezpiecznie korzystać z AI.",
    lead: "Artykuły dla właścicieli firm szkoleniowych, organizatorów kursów i szkół językowych oraz ich opiekunów i trenerów, którzy chcą prowadzić więcej szkoleń bez dokładania administracji. Piszemy z perspektywy wdrożeń w tej branży.",
    about: [
      "Firma szkoleniowa sprzedaje wiedzę trenerów i dobrze zorganizowane szkolenia. Wokół każdego szkolenia jest jednak dużo administracji: zapisy, płatności, faktury, przypomnienia, certyfikaty, ankiety, rozliczenia trenerów.",
      "W tej części Poradnika opisujemy, które procesy warto zautomatyzować najpierw, jak korzystać z AI przy tworzeniu szkoleń, jak wykorzystać ankiety poszkoleniowe i jak lepiej sprzedawać szkolenia firmom.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji firmy szkoleniowej w części Branże.",
    ],
    faq: [
      {
        question: "Co w firmie szkoleniowej da się zautomatyzować?",
        answer:
          "Najczęściej zapisy, płatności i faktury, przypomnienia i informacje dla uczestników, certyfikaty i ankiety, oferty dla firm, rozliczenia trenerów i dokumentację szkoleń.",
      },
      {
        question: "Czy trenerzy mogą korzystać z AI?",
        answer:
          "Tak, np. przy przygotowaniu ćwiczeń, przykładów i quizów, na kontach firmowych i z kontrolą jakości treści przez trenera.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "szkolenia-ai-dla-zespolow"],
    cta: {
      title: "Chcecie ograniczyć administrację szkoleń?",
      body: "Porozmawiajmy o tym, co zabiera zespołowi najwięcej czasu. Wskażemy, od czego zacząć i gdzie AI ma sens.",
    },
    inMenu: false,
  },
  {
    slug: "agencje-pracy",
    name: "Agencje pracy",
    title: "AI i automatyzacja w agencji pracy. Poradnik",
    metaTitle: "AI i automatyzacja w agencji pracy. Poradnik",
    metaDescription:
      "Jak agencje pracy i rekrutacyjne mogą korzystać z AI i automatyzacji: procesy na początek, AI w rekrutacji, baza kandydatów i szybsze obsadzanie zleceń.",
    shortDescription:
      "Jak agencje pracy i rekrutacyjne mogą ograniczyć administrację i odpowiedzialnie korzystać z AI.",
    lead: "Artykuły dla właścicieli agencji pracy tymczasowej i rekrutacyjnych oraz ich rekruterów i koordynatorów, którzy chcą szybciej obsadzać zlecenia i mniej czasu spędzać na przepisywaniu danych. Piszemy z perspektywy wdrożeń w tej branży.",
    about: [
      "Agencja pracy łączy rekrutację, kadry i obsługę klientów. Wokół tej pracy jest dużo administracji: CV z wielu kanałów, dokumenty pracowników i ich terminy, godziny od klientów, rozliczenia i komunikacja w wielu językach.",
      "W tej części Poradnika opisujemy, które procesy warto zautomatyzować najpierw, jak odpowiedzialnie korzystać z AI w rekrutacji, jak zbudować bazę kandydatów, która pracuje dla agencji, i jak szybciej obsadzać zlecenia.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji agencji pracy w części Branże.",
    ],
    faq: [
      {
        question: "Co w agencji pracy da się zautomatyzować?",
        answer:
          "Najczęściej obsługę aplikacji i bazy kandydatów, rejestr zleceń, terminy dokumentów pracowników, ewidencję czasu pracy od klientów, rozliczenia i komunikację z pracownikami.",
      },
      {
        question: "Czy AI może wybierać kandydatów?",
        answer:
          "Nie powinno. AI może porządkować CV i pomagać w wyszukiwaniu, ale ocena i wybór kandydatów należą do rekrutera. Unijne przepisy traktują takie systemy jako wysokiego ryzyka.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-dla-hr", "porzadkowanie-i-strukturyzowanie-danych", "szkolenia-ai-dla-zespolow"],
    cta: {
      title: "Chcecie ograniczyć administrację w agencji?",
      body: "Porozmawiajmy o tym, co zabiera rekruterom i biuru najwięcej czasu. Wskażemy, od czego zacząć i jak odpowiedzialnie korzystać z AI.",
    },
    inMenu: false,
  },
  {
    slug: "biura-projektowe",
    name: "Biura projektowe",
    title: "AI i automatyzacja w biurze projektowym. Poradnik",
    metaTitle: "AI i automatyzacja w biurze projektowym. Poradnik",
    metaDescription:
      "Jak biura projektowe i pracownie architektoniczne mogą korzystać z AI i automatyzacji: procesy na początek, AI dla architektów, wycena prac i rentowność.",
    shortDescription:
      "Jak biura projektowe i pracownie architektoniczne mogą ograniczyć organizację wokół projektów i bezpiecznie korzystać z AI.",
    lead: "Artykuły dla właścicieli pracowni architektonicznych i biur projektowych oraz ich kierowników projektów i projektantów, którzy chcą więcej czasu poświęcać projektowaniu, a mniej ofertom, terminom, dokumentacji i rozliczeniom. Piszemy z perspektywy wdrożeń w tej branży.",
    about: [
      "Biuro projektowe łączy pracę twórczą i inżynierską z dużą ilością organizacji: oferty, harmonogramy, wersje dokumentacji, uzgodnienia, uwagi inwestorów, czas pracy i rozliczenia.",
      "W tej części Poradnika opisujemy, które procesy warto zautomatyzować najpierw, jak architekci i projektanci mogą korzystać z AI bez ryzyka dla projektów, jak wyceniać prace projektowe na podstawie danych i jak liczyć rentowność projektów.",
      "Jeśli szukacie konkretnych rozwiązań i przebiegu wdrożenia, zajrzyjcie także na stronę automatyzacji biura projektowego w części Branże.",
    ],
    faq: [
      {
        question: "Co w biurze projektowym da się zautomatyzować?",
        answer:
          "Najczęściej oferty i rejestr zapytań, harmonogramy i terminy, obieg dokumentacji i wersji, rejestr uzgodnień, czas pracy i rentowność oraz komunikację z inwestorem.",
      },
      {
        question: "Czy AI może projektować za architekta?",
        answer:
          "Nie w naszych wdrożeniach. AI pomaga w pracy z tekstem wokół projektu, a decyzje projektowe i odpowiedzialność należą do projektanta z uprawnieniami.",
      },
    ],
    relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow"],
    cta: {
      title: "Chcecie odciążyć projektantów od organizacji?",
      body: "Porozmawiajmy o tym, co zabiera zespołowi najwięcej czasu poza projektowaniem. Wskażemy, od czego zacząć i gdzie AI ma sens.",
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
