import type {
  CaseStudy,
  CitySilo,
  FaqItem,
  FeatureTile,
  HeroSlide,
  HomePageData,
  LandingPage,
  ListItem,
  PageSection,
  ProcessStep,
  Service,
  Settings,
} from "./airtable.types";
import { getLatestGuideArticles } from "./guide-articles-mock";

const sectionDefaults = {
  imageAlt: "",
  metaTitle: "",
  metaDescription: "",
};

function completeService(
  s: Omit<
    Service,
    "metaTitle" | "metaDescription" | "ogImageUrl" | "updatedAt" | "introImageAlt"
  > &
    Partial<
      Pick<
        Service,
        "metaTitle" | "metaDescription" | "ogImageUrl" | "updatedAt" | "introImageAlt"
      >
    >,
): Service {
  return {
    ...s,
    metaTitle: s.metaTitle ?? s.title,
    metaDescription: s.metaDescription ?? s.introBody.slice(0, 155),
    ogImageUrl: s.ogImageUrl ?? s.bannerImageUrl,
    updatedAt: s.updatedAt ?? "",
    introImageAlt: s.introImageAlt ?? s.introTitle,
  };
}

function completeCaseStudy(
  c: Omit<CaseStudy, "imageAlt"> & Partial<Pick<CaseStudy, "imageAlt">>,
): CaseStudy {
  return { ...c, imageAlt: c.imageAlt ?? c.title };
}

function completeFaq(
  f: Omit<FaqItem, "keywords"> & Partial<Pick<FaqItem, "keywords">>,
): FaqItem {
  return { ...f, keywords: f.keywords ?? "" };
}

function withSectionDefaults(
  section: Omit<PageSection, keyof typeof sectionDefaults> &
    Partial<typeof sectionDefaults>,
): PageSection {
  return { ...sectionDefaults, ...section };
}

export const mockSettings: Settings = {
  siteName: "Automation Minds",
  phone: "+48 726 587 379",
  email: "kontakt@automationminds.net",
  address: "Polska",
  logoWhiteUrl: "/images/logo-white.png",
  logoColorUrl: "/images/logo-color.png",
  metaDescription:
    "Automation Minds — automatyzacja procesów biznesowych i rozwiązania AI dla firm.",
  defaultOgImageUrl: "/opengraph-image",
  googleSiteVerification: "",
  statRating: "4.95",
  statRatingLabel: "Średnia ocena współpracy wśród klientów.",
  statPercent: "80",
  statPercentLabel: "Powtarzalnych procesów da się zautomatyzować w typowej firmie.",
  statNumber: "1542",
  statNumberLabel: "Aktywnych automatyzacji każdego dnia u naszych klientów.",
  statDeployments: "320",
  statDeploymentsLabel: "Zrealizowanych projektów automatyzacji w Polsce.",
};

export const mockCitySilos: CitySilo[] = [
  { id: "c1", name: "Warszawa", href: "/automatyzacja-warszawa", order: 1 },
  { id: "c2", name: "Kraków", href: "/automatyzacja-krakow", order: 2 },
  { id: "c3", name: "Wrocław", href: "/automatyzacja-wroclaw", order: 3 },
  { id: "c4", name: "Łódź", href: "/automatyzacja-lodz", order: 4 },
  { id: "c5", name: "Poznań", href: "/automatyzacja-poznan", order: 5 },
  { id: "c6", name: "Gdańsk", href: "/automatyzacja-gdansk", order: 6 },
  { id: "c7", name: "Szczecin", href: "/automatyzacja-szczecin", order: 7 },
  { id: "c8", name: "Katowice", href: "/automatyzacja-katowice", order: 8 },
  { id: "c9", name: "Lublin", href: "/automatyzacja-lublin", order: 9 },
  { id: "c10", name: "Bydgoszcz", href: "/automatyzacja-bydgoszcz", order: 10 },
  { id: "c11", name: "Białystok", href: "/automatyzacja-bialystok", order: 11 },
  { id: "c12", name: "Gdynia", href: "/automatyzacja-gdynia", order: 12 },
  { id: "c13", name: "Częstochowa", href: "/automatyzacja-czestochowa", order: 13 },
  { id: "c14", name: "Radom", href: "/automatyzacja-radom", order: 14 },
  { id: "c15", name: "Toruń", href: "/automatyzacja-torun", order: 15 },
  { id: "c16", name: "Sosnowiec", href: "/automatyzacja-sosnowiec", order: 16 },
  { id: "c17", name: "Kielce", href: "/automatyzacja-kielce", order: 17 },
  { id: "c18", name: "Gliwice", href: "/automatyzacja-gliwice", order: 18 },
  { id: "c19", name: "Olsztyn", href: "/automatyzacja-olsztyn", order: 19 },
  { id: "c20", name: "Bielsko-Biała", href: "/automatyzacja-bielsko-biala", order: 20 },
  { id: "c21", name: "Rzeszów", href: "/automatyzacja-rzeszow", order: 21 },
  { id: "c22", name: "Zabrze", href: "/automatyzacja-zabrze", order: 22 },
  { id: "c23", name: "Opole", href: "/automatyzacja-opole", order: 23 },
  { id: "c24", name: "Ruda Śląska", href: "/automatyzacja-ruda-slaska", order: 24 },
  { id: "c25", name: "Rybnik", href: "/automatyzacja-rybnik", order: 25 },
  { id: "c26", name: "Tychy", href: "/automatyzacja-tychy", order: 26 },
  { id: "c27", name: "Płock", href: "/automatyzacja-plock", order: 27 },
  { id: "c28", name: "Wałbrzych", href: "/automatyzacja-walbrzych", order: 28 },
  { id: "c29", name: "Tarnów", href: "/automatyzacja-tarnow", order: 29 },
  { id: "c30", name: "Chorzów", href: "/automatyzacja-chorzow", order: 30 },
  { id: "c31", name: "Kalisz", href: "/automatyzacja-kalisz", order: 31 },
  { id: "c32", name: "Koszalin", href: "/automatyzacja-koszalin", order: 32 },
  { id: "c33", name: "Legnica", href: "/automatyzacja-legnica", order: 33 },
  { id: "c34", name: "Grudziądz", href: "/automatyzacja-grudziadz", order: 34 },
  { id: "c35", name: "Dąbrowa Górnicza", href: "/automatyzacja-dabrowa-gornicza", order: 35 },
  { id: "c36", name: "Nowy Sącz", href: "/automatyzacja-nowy-sacz", order: 36 },
  { id: "c37", name: "Jelenia Góra", href: "/automatyzacja-jelenia-gora", order: 37 },
  { id: "c38", name: "Konin", href: "/automatyzacja-konin", order: 38 },
  { id: "c39", name: "Piotrków Trybunalski", href: "/automatyzacja-piotrkow-trybunalski", order: 39 },
  { id: "c40", name: "Lubin", href: "/automatyzacja-lubin", order: 40 },
  { id: "c41", name: "Inowrocław", href: "/automatyzacja-inowroclaw", order: 41 },
  { id: "c42", name: "Ostrów Wielkopolski", href: "/automatyzacja-ostrow-wielkopolski", order: 42 },
  { id: "c43", name: "Stargard", href: "/automatyzacja-stargard", order: 43 },
  { id: "c44", name: "Mysłowice", href: "/automatyzacja-myslowice", order: 44 },
  { id: "c45", name: "Piła", href: "/automatyzacja-pila", order: 45 },
  { id: "c46", name: "Suwałki", href: "/automatyzacja-suwalki", order: 46 },
];

export const mockHeroSlides: HeroSlide[] = [
  {
    id: "1",
    subtitle: "Zwiększ efektywność Twojej firmy",
    title: "Zautomatyzujemy nawet 80% zadań wykonywanych w Twojej firmie",
    description:
      "Automatyzujemy powtarzalne zadania i wdrażamy AI, by Twój zespół pracował efektywniej.",
    imageUrl: "/images/migrated/hero-1.jpg",
    buttonText: "Skorzystaj z bezpłatnej konsultacji",
    buttonLink: "/kontakt",
    buttonOpensModal: true,
    order: 1,
  },
  {
    id: "2",
    subtitle: "Pomagamy automatyzować i mierzyć procesy",
    title: "Pomagamy automatyzować i mierzyć procesy",
    description:
      "Analizujemy procesy, wdrażamy narzędzia i mierzymy efekty na każdym etapie.",
    imageUrl: "/images/migrated/hero-2.jpg",
    buttonText: "Dowiedz się więcej",
    buttonLink: "/o-nas",
    buttonOpensModal: false,
    order: 2,
  },
  {
    id: "3",
    subtitle: "Sztuczna inteligencja w Twojej firmie",
    title: "Customowe rozwiązania AI",
    description:
      "Tworzymy rozwiązania AI dopasowane do procesów i celów Twojej firmy.",
    imageUrl: "/images/migrated/hero-3.jpg",
    buttonText: "Sprawdź",
    buttonLink: "/uslugi/automatyzacja-oraz-ai-w-niestandardowych-procesach",
    buttonOpensModal: false,
    order: 3,
  },
];

const introSection: PageSection = withSectionDefaults({
  id: "intro-home",
  pageSlug: "home",
  sectionKey: "intro",
  subtitle: "Prosto. Szybko. Skutecznie.",
  title: "Automatyzacje i AI, które realnie odciążają zespół",
  body: "Zaczynamy od krótkiej diagnozy, a potem wdrażamy rozwiązania, które skracają czas pracy i ograniczają błędy.",
  imageUrl:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  imageAlt: "Zespół pracujący nad automatyzacją procesów",
  buttonText: "Bezpłatna konsultacja",
  buttonLink: "/kontakt",
});

export const mockListItems: ListItem[] = [
  {
    id: "l1",
    pageSlug: "home",
    text: "Mniej ręcznej pracy w powtarzalnych zadaniach",
    order: 1,
  },
  {
    id: "l2",
    pageSlug: "home",
    text: "Niższe koszty operacyjne",
    order: 2,
  },
  {
    id: "l3",
    pageSlug: "home",
    text: "Więcej czasu na pracę strategiczną",
    order: 3,
  },
  {
    id: "l4",
    pageSlug: "home",
    text: "Skalowanie bez dokładania etatów",
    order: 4,
  },
  {
    id: "l5",
    pageSlug: "home",
    text: "Szybsze realizowanie zamówień, odpowiedzi na zapytania i obsługa klienta budują lepsze relacje",
    order: 5,
  },
  {
    id: "l6",
    pageSlug: "home",
    text: "Zmniejszenie ryzyka wynikających z błędów ludzkich",
    order: 6,
  },
];

export const mockFeatureTilesAreas: FeatureTile[] = [
  {
    id: "a1",
    group: "areas",
    icon: "sparkles",
    title: "Rozwiązania AI",
    body: "Customowe wdrożenia pod Twoje procesy.",
    href: "/uslugi/automatyzacja-oraz-ai-w-niestandardowych-procesach",
    order: 1,
  },
  {
    id: "a2",
    group: "areas",
    icon: "lightbulb",
    title: "Consulting AI",
    body: "Strategia i wdrożenie AI w organizacji.",
    href: "/uslugi/doradztwo-i-optymalizacja-procesow-biznesowych",
    order: 2,
  },
  {
    id: "a3",
    group: "areas",
    icon: "trending-up",
    title: "Sprzedaż",
    body: "Automatyzacja lejka i pracy handlowców.",
    href: "/uslugi/automatyzacja-dla-sprzedazy-i-marketingu",
    order: 3,
  },
  {
    id: "a4",
    group: "areas",
    icon: "megaphone",
    title: "Marketing",
    body: "Mniej ręcznej pracy w kampaniach i raportach.",
    href: "/uslugi/automatyzacja-dla-sprzedazy-i-marketingu",
    order: 4,
  },
  {
    id: "a5",
    group: "areas",
    icon: "calculator",
    title: "Księgowość",
    body: "Szybsze obiegi dokumentów i rozliczeń.",
    href: "/uslugi/automatyzacja-dla-ksiegowosci",
    order: 5,
  },
  {
    id: "a6",
    group: "areas",
    icon: "users",
    title: "HR",
    body: "Procesy rekrutacji i onboardingu bez chaosu.",
    href: "/uslugi/automatyzacja-dla-hr",
    order: 6,
  },
  {
    id: "a7",
    group: "areas",
    icon: "bar-chart",
    title: "Analityka i raportowanie",
    body: "Raporty i KPI bez ręcznego zbierania danych.",
    href: "/uslugi/automatyzacja-raportow",
    order: 7,
  },
  {
    id: "a8",
    group: "areas",
    icon: "database",
    title: "CRM",
    body: "Wdrożenia i integracje narzędzi CRM.",
    href: "/uslugi/automatyzacja-w-obsludze-klienta",
    order: 8,
  },
];

export const mockCaseStudies: CaseStudy[] = [
  completeCaseStudy({
    id: "c1",
    context: "home",
    slug: "sprzedaz-w-rytmie-sukcesu",
    title: "Sprzedaż w rytmie sukcesu",
    icon: "trending-up",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
    body: "Tworzymy jasne i spójne procesy sprzedażowe, które eliminują chaos, zwiększają efektywność zespołu i pozwalają na osiąganie lepszych wyników sprzedażowych.\n\nAutomatyzujemy przypomnienia, aktualizacje CRM i raportowanie pipeline'u, dzięki czemu handlowcy skupiają się na rozmowach z klientami zamiast na uzupełnianiu arkuszy.",
    order: 1,
  }),
  completeCaseStudy({
    id: "c2",
    context: "home",
    slug: "hr-w-nowoczesnym-wydaniu",
    title: "HR w nowoczesnym wydaniu",
    icon: "users",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
    body: "Pomagamy w wypracowaniu przejrzystych procesów zarządzania aplikacjami rekrutacyjnymi i kadrowymi, które usprawniają obsługę pracowników i kandydatów.\n\nOd onboardingu po wnioski urlopowe — łączymy narzędzia HR w jeden spójny przepływ, który skraca czas reakcji i poprawia doświadczenie zespołu.",
    order: 2,
  }),
  completeCaseStudy({
    id: "c3",
    context: "home",
    slug: "porzadek-w-finansach",
    title: "Porządek w finansach",
    icon: "calculator",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
    body: "Organizujemy procesy księgowe, eliminując wąskie gardła i zapewniając zgodność operacji finansowych z najlepszymi praktykami rynkowymi.\n\nFaktury, zatwierdzenia i raporty miesięczne przestają być ręcznym obowiązkiem — dane trafiają tam, gdzie trzeba, bez dublowania pracy między działami.",
    order: 3,
  }),
  completeCaseStudy({
    id: "c4",
    context: "home",
    slug: "produkcja-bez-przestojow",
    title: "Produkcja bez przestojów",
    icon: "factory",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    body: "Analizujemy i usprawniamy procesy produkcyjne, aby zwiększyć wydajność, zminimalizować straty i skrócić czas realizacji.\n\nIntegrujemy dane z hali produkcyjnej z planowaniem i magazynem, żeby zespoły widziały problemy zanim staną się przestojem.",
    order: 4,
  }),
  completeCaseStudy({
    id: "c5",
    context: "home",
    slug: "obsluga-klienta-bez-kolejek",
    title: "Obsługa klienta bez kolejek",
    icon: "headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9b?w=900&q=80",
    body: "Porządkujemy obsługę zgłoszeń klientów — od pierwszego kontaktu po zamknięcie sprawy — tak, by nic nie ginęło między kanałami komunikacji.\n\nAutomatyczne triażowanie, przypomnienia i eskalacje skracają czas odpowiedzi i podnoszą satysfakcję klientów bez dokładania etatów w supportcie.",
    order: 5,
  }),
];

export const mockFaq: FaqItem[] = [
  completeFaq({
    id: "f1",
    question: "Co to jest automatyzacja procesów biznesowych?",
    answer:
      "Automatyzacja procesów biznesowych to wdrożenie technologii, która przejmuje powtarzalne, ręczne zadania — od wprowadzania danych po wysyłkę powiadomień i raportów. Dzięki temu zespół może skupić się na pracy wymagającej decyzji, relacji z klientem i rozwoju firmy.",
    order: 1,
  }),
  completeFaq({
    id: "f2",
    question: "Ile czasu zajmuje wdrożenie automatyzacji w mojej firmie?",
    answer:
      "Czas zależy od skali i złożoności procesów. Prostsze automatyzacje — np. jeden przepływ między dwoma narzędziami — często uruchamiamy w kilka tygodni. Szersze projekty obejmujące wiele działów planujemy etapami, z pierwszymi efektami widocznymi już w trakcie wdrożenia.",
    order: 2,
  }),
  completeFaq({
    id: "f3",
    question: "Czy automatyzacja jest opłacalna dla małych firm?",
    answer:
      "Tak. Małe firmy często najszybciej odczuwają korzyści, bo każda zaoszczędzona godzina pracy ma większy wpływ na wynik. Zaczynamy od procesów, które generują największy chaos lub błędy — bez konieczności dużych inwestycji na start.",
    order: 3,
  }),
  completeFaq({
    id: "f4",
    question: "Jakie procesy warto automatyzować w pierwszej kolejności?",
    answer:
      "Najlepiej zacząć od zadań powtarzalnych, czasochłonnych i podatnych na błędy: obsługi formularzy, faktur, leadów sprzedażowych, onboardingu pracowników czy raportów cyklicznych. Podczas bezpłatnej konsultacji wspólnie wskażemy 2–3 obszary z najszybszym zwrotem.",
    order: 4,
  }),
  completeFaq({
    id: "f5",
    question: "Czy potrzebujemy własnego działu IT?",
    answer:
      "Nie. Projektujemy i wdrażamy rozwiązania end-to-end, tłumacząc je w języku biznesowym. Po uruchomieniu przekazujemy dokumentację i szkolimy zespół, aby mógł korzystać z automatyzacji bez codziennego wsparcia technicznego.",
    order: 5,
  }),
  completeFaq({
    id: "f6",
    question: "Jak wygląda współpraca z Automation Minds?",
    answer:
      "Zaczynamy od rozmowy i mapowania procesów, potem proponujemy zakres i harmonogram. Wdrażamy w krótkich iteracjach, testujemy na żywych danych i dopracowujemy rozwiązanie razem z Twoim zespołem. Na końcu przekazujemy gotowy przepływ wraz ze wsparciem po uruchomieniu.",
    order: 6,
  }),
  completeFaq({
    id: "f7",
    question: "Jakie narzędzia i technologie wykorzystujecie?",
    answer:
      "Dobieramy stack do Twoich systemów i budżetu — od platform no-code/low-code po integracje API i rozwiązania AI. Ważniejsze niż konkretna technologia jest to, żeby automatyzacja była stabilna, czytelna dla zespołu i łatwa w rozwoju w przyszłości.",
    order: 7,
  }),
  completeFaq({
    id: "f8",
    question: "Czy automatyzacja zastąpi pracowników?",
    answer:
      "Automatyzacja nie polega na redukcji etatów, lecz na odciążeniu zespołu od pracy mechaniczej. Pracownicy zyskują czas na obsługę klientów, sprzedaż, analizę i rozwój — obszary, w których ludzie mają największą wartość.",
    order: 8,
  }),
  completeFaq({
    id: "f9",
    question: "Ile kosztuje wdrożenie automatyzacji?",
    answer:
      "Koszt zależy od liczby procesów, integracji i stopnia skomplikowania logiki. Po wstępnej analizie przedstawiamy przejrzystą wycenę i priorytety — często można zacząć od jednego modułu i rozbudowywać rozwiązanie etapami.",
    order: 9,
  }),
  completeFaq({
    id: "f10",
    question: "Co jeśli nasze systemy nie mają gotowych integracji?",
    answer:
      "To częsta sytuacja. Łączymy narzędzia przez API, webhooki, pliki pośrednie lub dedykowane konektory. Jeśli dane są dostępne cyfrowo, prawie zawsze da się zaprojektować bezpieczny przepływ bez ręcznego przenoszenia informacji.",
    order: 10,
  }),
  completeFaq({
    id: "f11",
    question: "Czy oferujecie wsparcie po wdrożeniu?",
    answer:
      "Tak. Po uruchomieniu monitorujemy działanie rozwiązania, reagujemy na zmiany w procesach i pomagamy rozbudowywać automatyzacje wraz z rozwojem firmy. Możesz też zgłaszać nowe potrzeby w ramach stałej współpracy.",
    order: 11,
  }),
  completeFaq({
    id: "f12",
    question: "Czy dane mojej firmy są bezpieczne?",
    answer:
      "Bezpieczeństwo traktujemy priorytetowo. Stosujemy dostęp oparty na rolach, szyfrowanie połączeń i minimalizujemy zakres przetwarzanych danych. Przed wdrożeniem omawiamy wymagania RODO i zasady przechowywania informacji.",
    order: 12,
  }),
];

const rawMockServices = [
  {
    id: "s1",
    slug: "doradztwo-i-optymalizacja-procesow-biznesowych",
    title: "Doradztwo i optymalizacja procesów biznesowych",
    menuLabel: "Doradztwo i optymalizacja procesów biznesowych",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
    bannerTitle: "Doradztwo i optymalizacja procesów biznesowych",
    introSubtitle: "Analiza i usprawnienia",
    introTitle: "Zoptymalizuj procesy w swojej firmie",
    introBody:
      "Pomagamy zidentyfikować wąskie gardła i zaprojektować procesy, które skalują się wraz z rozwojem firmy.",
    introImageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 1,
  },
  {
    id: "s2",
    slug: "automatyzacja-dla-sprzedazy-i-marketingu",
    title: "Automatyzacja dla sprzedaży i marketingu",
    menuLabel: "Automatyzacja dla sprzedaży i marketingu",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80",
    bannerTitle: "Automatyzacja dla sprzedaży i marketingu",
    introSubtitle: "Sprzedaż i marketing",
    introTitle: "Więcej leadów, mniej ręcznej pracy",
    introBody:
      "Automatyzujemy lejki sprzedażowe, kampanie marketingowe i raportowanie wyników.",
    introImageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 2,
  },
  {
    id: "s3",
    slug: "automatyzacja-dla-hr",
    title: "Automatyzacja dla HR",
    menuLabel: "Automatyzacja dla HR",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80",
    bannerTitle: "Automatyzacja dla HR",
    introSubtitle: "Zasoby ludzkie",
    introTitle: "HR bez papierologii",
    introBody:
      "Usprawniamy rekrutację, onboarding i zarządzanie dokumentacją kadrową.",
    introImageUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 3,
  },
  {
    id: "s4",
    slug: "automatyzacja-dla-ksiegowosci",
    title: "Automatyzacja dla księgowości",
    menuLabel: "Automatyzacja dla księgowości",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80",
    bannerTitle: "Automatyzacja dla księgowości",
    introSubtitle: "Finanse",
    introTitle: "Porządek w procesach księgowych",
    introBody:
      "Automatyzujemy fakturowanie, raportowanie i integracje z systemami finansowymi.",
    introImageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04ac66d8a9?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 4,
  },
  {
    id: "s5",
    slug: "automatyzacja-raportow",
    title: "Automatyzacja raportów",
    menuLabel: "Automatyzacja raportów",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
    bannerTitle: "Automatyzacja raportów",
    introSubtitle: "Analityka",
    introTitle: "Raporty na czas, bez ręcznej pracy",
    introBody:
      "Budujemy automatyczne dashboardy i raporty odświeżane w czasie rzeczywistym.",
    introImageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 5,
  },
  {
    id: "s6",
    slug: "automatyzacja-w-obsludze-klienta",
    title: "Automatyzacja w obsłudze klienta",
    menuLabel: "Automatyzacja w obsłudze klienta",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    bannerTitle: "Automatyzacja w obsłudze klienta",
    introSubtitle: "Customer service",
    introTitle: "Szybsza obsługa, zadowoleni klienci",
    introBody:
      "Automatyzujemy tickety, odpowiedzi i śledzenie statusu zgłoszeń.",
    introImageUrl:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 6,
  },
  {
    id: "s7",
    slug: "automatyzacja-w-produkcji-i-uslugach",
    title: "Automatyzacja w produkcji i usługach",
    menuLabel: "Automatyzacja w produkcji i usługach",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
    bannerTitle: "Automatyzacja w produkcji i usługach",
    introSubtitle: "Produkcja",
    introTitle: "Produkcja bez przestojów",
    introBody:
      "Optymalizujemy procesy produkcyjne i monitorujemy kluczowe wskaźniki.",
    introImageUrl:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c3?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 7,
  },
  {
    id: "s8",
    slug: "automatyzacja-dla-logistyki",
    title: "Automatyzacja dla logistyki",
    menuLabel: "Automatyzacja dla logistyki",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
    bannerTitle: "Automatyzacja dla logistyki",
    introSubtitle: "Logistyka",
    introTitle: "Sprawna logistyka od zamówienia do dostawy",
    introBody:
      "Integrujemy systemy magazynowe, śledzenie przesyłek i planowanie tras.",
    introImageUrl:
      "https://images.unsplash.com/photo-1494412574643-ff9198504aa0?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 8,
  },
  {
    id: "s9",
    slug: "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    title: "Automatyzacja oraz AI w niestandardowych procesach",
    menuLabel: "Automatyzacja oraz AI w niestandardowych procesach",
    bannerImageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    bannerTitle: "Automatyzacja oraz AI w niestandardowych procesach",
    introSubtitle: "AI i custom",
    introTitle: "Customowe rozwiązania AI",
    introBody:
      "Projektujemy i wdrażamy rozwiązania AI dopasowane do unikalnych procesów Twojej firmy.",
    introImageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    introButtonText: "Bezpłatna konsultacja",
    introButtonLink: "/kontakt",
    tabsSubtitle: "Case Studies",
    tabsTitle: "Przykłady wdrożeń",
    processSubtitle: "Nasz proces",
    processTitle: "Jak pracujemy",
    order: 9,
  },
];

export const mockServices: Service[] = rawMockServices.map(completeService);

export const mockProcessSteps: ProcessStep[] = [
  {
    id: "p1",
    serviceSlug: "doradztwo-i-optymalizacja-procesow-biznesowych",
    stepNumber: 1,
    title: "Analiza procesów",
    body: "Mapujemy obecne procesy i identyfikujemy obszary do usprawnienia.",
  },
  {
    id: "p2",
    serviceSlug: "doradztwo-i-optymalizacja-procesow-biznesowych",
    stepNumber: 2,
    title: "Projekt rozwiązania",
    body: "Tworzymy plan automatyzacji dopasowany do Twojej firmy.",
  },
  {
    id: "p3",
    serviceSlug: "doradztwo-i-optymalizacja-procesow-biznesowych",
    stepNumber: 3,
    title: "Wdrożenie",
    body: "Implementujemy rozwiązania i integrujemy z istniejącymi narzędziami.",
  },
  {
    id: "p4",
    serviceSlug: "doradztwo-i-optymalizacja-procesow-biznesowych",
    stepNumber: 4,
    title: "Testy i szkolenia",
    body: "Testujemy rozwiązanie i szkolimy Twój zespół.",
  },
  {
    id: "p5",
    serviceSlug: "doradztwo-i-optymalizacja-procesow-biznesowych",
    stepNumber: 5,
    title: "Monitoring",
    body: "Monitorujemy działanie i optymalizujemy procesy.",
  },
  {
    id: "p6",
    serviceSlug: "doradztwo-i-optymalizacja-procesow-biznesowych",
    stepNumber: 6,
    title: "Wsparcie",
    body: "Zapewniamy ciągłe wsparcie i rozwój rozwiązania.",
  },
];

export function getMockHomePageData(): HomePageData {
  return {
    settings: mockSettings,
    heroSlides: mockHeroSlides,
    intro: introSection,
    listItems: mockListItems,
    areasHeader: withSectionDefaults({
      id: "areas-header",
      pageSlug: "home",
      sectionKey: "areas-header",
      subtitle: "Obszary wsparcia",
      title: "Gdzie wspieramy Twoją firmę",
      body: "",
      imageUrl: "",
      buttonText: "Bezpłatna konsultacja",
      buttonLink: "/kontakt",
    }),
    featureTilesAreas: mockFeatureTilesAreas,
    stats: mockSettings,
    conversation: withSectionDefaults({
      id: "conversation",
      pageSlug: "home",
      sectionKey: "conversation",
      subtitle: "Skala i zasięg",
      title: "Wdrażamy automatyzację w firmach w całej Polsce",
      body: "Ponad 1 500 aktywnych automatyzacji, setki wdrożeń i wsparcie w największych aglomeracjach — pomagamy firmom skalować procesy bez dokładania etatów.\n\nBez względu na to, czy działasz w Warszawie, Krakowie czy mniejszym mieście, dobieramy rozwiązania pod Twoje procesy i zespół.",
      imageUrl:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
      buttonText: "Bezpłatna konsultacja",
      buttonLink: "/kontakt",
      citiesSubtitle: "Zasięg w całym kraju",
      citiesTitle: "Automatyzacja tam, gdzie działa Twoja firma",
      citiesBody:
        "Pracujemy z firmami w całej Polsce — od aglomeracji po mniejsze rynki lokalne. Dla każdego miasta dobieramy rozwiązania dopasowane do Twojego regionu i branży.",
    }),
    citySilos: mockCitySilos,
    caseStudiesHeader: withSectionDefaults({
      id: "cases-header",
      pageSlug: "home",
      sectionKey: "cases-header",
      subtitle: "Case Studies",
      title: "Przykłady wykorzystania automatyzacji",
      body: "",
      imageUrl: "",
      buttonText: "",
      buttonLink: "",
    }),
    caseStudies: mockCaseStudies,
    faqHeader: withSectionDefaults({
      id: "faq-header",
      pageSlug: "home",
      sectionKey: "faq-header",
      subtitle: "Wszystko, co musisz wiedzieć",
      title: "Najczęściej zadawane pytania",
      body: "",
      imageUrl: "",
      buttonText: "",
      buttonLink: "",
    }),
    faq: mockFaq,
    guideHeader: withSectionDefaults({
      id: "guide-header",
      pageSlug: "home",
      sectionKey: "guide-header",
      subtitle: "Poradnik",
      title: "Wiedza o automatyzacji procesów",
      body: "Praktyczne artykuły o wdrożeniach, narzędziach i usprawnianiu codziennej pracy zespołu.",
      imageUrl: "",
      buttonText: "Więcej artykułów",
      buttonLink: "/poradnik",
    }),
    guideArticles: getLatestGuideArticles(6),
  };
}

export function getMockPageSection(
  pageSlug: string,
  sectionKey: string,
): PageSection | null {
  const home = getMockHomePageData();
  const sections: PageSection[] = [
    home.intro!,
    home.areasHeader!,
    home.conversation!,
    home.caseStudiesHeader!,
    home.faqHeader!,
    home.guideHeader!,
    withSectionDefaults({
      id: "about-banner",
      pageSlug: "o-nas",
      sectionKey: "banner",
      subtitle: "",
      title: "O nas",
      body: "",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
      buttonText: "",
      buttonLink: "",
    }),
    withSectionDefaults({
      id: "contact-banner",
      pageSlug: "kontakt",
      sectionKey: "banner",
      subtitle: "",
      title: "Kontakt",
      body: "",
      imageUrl:
        "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80",
      buttonText: "",
      buttonLink: "",
    }),
    withSectionDefaults({
      id: "contact-sidebar",
      pageSlug: "kontakt",
      sectionKey: "contact-sidebar",
      subtitle: "",
      title: "Automation Minds",
      body: "<p>Telefon: +48 726 587 379</p><p>Email: kontakt@automationminds.net</p>",
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      buttonText: "",
      buttonLink: "",
    }),
    withSectionDefaults({
      id: "contact-form-header",
      pageSlug: "kontakt",
      sectionKey: "contact-form",
      subtitle: "",
      title: "Napisz do nas",
      body: "",
      imageUrl: "",
      buttonText: "",
      buttonLink: "",
    }),
  ];

  const found = sections.find(
    (s) => s.pageSlug === pageSlug && s.sectionKey === sectionKey,
  );
  return found ?? null;
}

export const mockLandingPages: LandingPage[] = [
  {
    id: "lp1",
    slug: "automatyzacja-sprzedazy",
    campaignName: "Google Ads — Sprzedaż",
    metaTitle: "Automatyzacja sprzedaży dla firm | Automation Minds",
    metaDescription:
      "Zautomatyzuj procesy sprzedażowe i zwiększ efektywność zespołu. Bezpłatna konsultacja 30 min.",
    heroTitle: "Automatyzacja sprzedaży, która zwiększa wyniki",
    heroSubtitle: "Więcej leadów, mniej ręcznej pracy — dopasowane do Twojego CRM",
    heroImageUrl: "/images/migrated/hero-1.jpg",
    heroImageAlt: "Automatyzacja procesów sprzedażowych",
    primaryCtaText: "Umów bezpłatną konsultację",
    primaryCtaLink: "#formularz",
    socialProof: "80% procesów można zautomatyzować · 1542+ automatyzacji dziennie",
    relatedServiceSlug: "automatyzacja-dla-sprzedazy-i-marketingu",
    formEnabled: true,
    noIndex: false,
    updatedAt: new Date().toISOString(),
    benefits: [
      {
        id: "b1",
        landingSlug: "automatyzacja-sprzedazy",
        title: "Szybsza obsługa leadów",
        body: "Automatyczne przypisywanie i follow-up bez opóźnień.",
        order: 1,
      },
      {
        id: "b2",
        landingSlug: "automatyzacja-sprzedazy",
        title: "Mniej błędów w CRM",
        body: "Spójne dane klientów bez ręcznego przepisywania.",
        order: 2,
      },
      {
        id: "b3",
        landingSlug: "automatyzacja-sprzedazy",
        title: "Raporty na czas",
        body: "Dashboardy sprzedażowe odświeżane automatycznie.",
        order: 3,
      },
    ],
    sections: [
      {
        id: "s1",
        landingSlug: "automatyzacja-sprzedazy",
        title: "Dlaczego automatyzacja sprzedaży?",
        body: "Powtarzalne zadania pochłaniają czas handlowców. Automatyzacja pozwala skupić się na relacjach z klientami i zamykaniu transakcji. Wdrażamy rozwiązania dopasowane do Twojego lejka sprzedażowego — od pierwszego kontaktu po raportowanie wyników.",
        order: 1,
      },
      {
        id: "s2",
        landingSlug: "automatyzacja-sprzedazy",
        title: "Jak pracujemy",
        body: "Zaczynamy od bezpłatnej konsultacji 30 minut, podczas której analizujemy procesy i proponujemy konkretne usprawnienia. Następnie projektujemy i wdrażamy automatyzacje z testami oraz szkoleniem zespołu.",
        order: 2,
      },
    ],
  },
  {
    id: "lp2",
    slug: "ai-dla-firm",
    campaignName: "Google Ads — AI",
    metaTitle: "Rozwiązania AI dla firm | Automation Minds",
    metaDescription:
      "Customowe rozwiązania AI dopasowane do procesów Twojej firmy. Umów bezpłatną konsultację.",
    heroTitle: "Customowe rozwiązania AI dla Twojej firmy",
    heroSubtitle: "Praktyczne wdrożenia AI, które realnie odciążają zespół",
    heroImageUrl: "/images/migrated/hero-3.jpg",
    heroImageAlt: "Sztuczna inteligencja w biznesie",
    primaryCtaText: "Sprawdź możliwości AI",
    primaryCtaLink: "#formularz",
    socialProof: "4.95 ocena · 1 488 zadowolonych klientów",
    relatedServiceSlug: "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    formEnabled: true,
    noIndex: false,
    updatedAt: new Date().toISOString(),
    benefits: [
      {
        id: "b4",
        landingSlug: "ai-dla-firm",
        title: "Automatyzacja dokumentów",
        body: "Klasyfikacja, ekstrakcja danych i routing zadań.",
        order: 1,
      },
      {
        id: "b5",
        landingSlug: "ai-dla-firm",
        title: "Asystenci AI",
        body: "Wsparcie zespołu w codziennych procesach.",
        order: 2,
      },
    ],
    sections: [
      {
        id: "s3",
        landingSlug: "ai-dla-firm",
        title: "AI, które ma sens biznesowy",
        body: "Nie wdrażamy AI dla samego AI. Skupiamy się na procesach, gdzie automatyzacja przynosi mierzalne oszczędności czasu i kosztów. Od analizy po wdrożenie i wsparcie.",
        order: 1,
      },
    ],
  },
];

export function getMockLandingPageBySlug(slug: string): LandingPage | null {
  return mockLandingPages.find((p) => p.slug === slug) ?? null;
}

export function getMockLandingPages(): LandingPage[] {
  return mockLandingPages;
}

export function getMockListItems(pageSlug: string): ListItem[] {
  if (pageSlug === "home" || pageSlug === "o-nas") {
    return mockListItems.map((item) => ({ ...item, pageSlug }));
  }
  return [];
}

export function getMockServiceBySlug(slug: string): Service | null {
  return mockServices.find((s) => s.slug === slug) ?? null;
}

export function getMockProcessSteps(serviceSlug: string): ProcessStep[] {
  const steps = mockProcessSteps.filter((s) => s.serviceSlug === serviceSlug);
  if (steps.length > 0) return steps;
  return Array.from({ length: 6 }, (_, i) => ({
    id: `default-${serviceSlug}-${i + 1}`,
    serviceSlug,
    stepNumber: i + 1,
    title: `Krok ${i + 1}`,
    body: "Szczegóły procesu wdrożenia dopasowane do Twojej firmy.",
  }));
}

export function getMockCaseStudiesForService(
  serviceSlug: string,
): CaseStudy[] {
  return mockCaseStudies.map((c, i) => ({
    ...c,
    id: `${serviceSlug}-case-${i}`,
    context: "service" as const,
    serviceSlug,
  }));
}
