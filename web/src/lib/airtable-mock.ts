import type {
  CaseStudy,
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
  Tool,
} from "./airtable.types";

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
  statRatingLabel: "1,488 ocen",
  statPercent: "80",
  statPercentLabel: "Nawet tyle procesów możesz z nami zaoszczędzić.",
  statNumber: "1542",
  statNumberLabel: "Codziennych automatyzacji u naszych klientów.",
};

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
    order: 3,
  },
];

const introSection: PageSection = withSectionDefaults({
  id: "intro-home",
  pageSlug: "home",
  sectionKey: "intro",
  subtitle: "Proste kroki do efektywności",
  title: "Procesy z myślą o Twoim zespole",
  body: "Pomagamy firmom budować, automatyzować i mierzyć ich procesy niezależnie od działu. Wierzymy, że aż 80% zadań wykonywanych przez pracowników może być z powodzeniem zautomatyzowane przy użyciu nowoczesnych technologii oraz sztucznej inteligencji.",
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
    text: "Automatyzacja powtarzalnych zadań pozwala na szybsze i bardziej niezawodne wykonanie procesów",
    order: 1,
  },
  {
    id: "l2",
    pageSlug: "home",
    text: "Obniżenie kosztów operacyjnych",
    order: 2,
  },
  {
    id: "l3",
    pageSlug: "home",
    text: "Skupienie pracowników na bardziej strategicznych i kreatywnych zadaniach",
    order: 3,
  },
  {
    id: "l4",
    pageSlug: "home",
    text: "Skalowanie operacji bez proporcjonalnego wzrostu kosztów",
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
    body: "Customowe rozwiązania AI",
    order: 1,
  },
  {
    id: "a2",
    group: "areas",
    icon: "lightbulb",
    title: "Consulting AI",
    body: "Pomoc w przygotowaniu i wdrażaniu AI w firmie",
    order: 2,
  },
  {
    id: "a3",
    group: "areas",
    icon: "trending-up",
    title: "Sprzedaż",
    body: "Automatyzacje procesów sprzedażowych",
    order: 3,
  },
  {
    id: "a4",
    group: "areas",
    icon: "megaphone",
    title: "Marketing",
    body: "Automatyzacje procesów marketingowych",
    order: 4,
  },
  {
    id: "a5",
    group: "areas",
    icon: "calculator",
    title: "Księgowość",
    body: "Automatyzacje procesów księgowych",
    order: 5,
  },
  {
    id: "a6",
    group: "areas",
    icon: "users",
    title: "HR",
    body: "Automatyzacje procesów HR",
    order: 6,
  },
  {
    id: "a7",
    group: "areas",
    icon: "bar-chart",
    title: "Analityka i raportowanie",
    body: "Automatyzacje Raportów i Analityki",
    order: 7,
  },
  {
    id: "a8",
    group: "areas",
    icon: "database",
    title: "CRM",
    body: "Wdrażanie narzędzi CRM",
    order: 8,
  },
];

export const mockFeatureTilesBenefits: FeatureTile[] = [
  {
    id: "b1",
    group: "benefits",
    icon: "users",
    title: "Skalowanie wymaga większej ilości osób",
    body: "Rozwój Twojej firmy wiąże się z zatrudnianiem dodatkowych osób, aby zrealizować powtarzalne zadania.",
    order: 1,
  },
  {
    id: "b2",
    group: "benefits",
    icon: "clock",
    title: "Zespół spędza większość czasu na powtarzalnych zadaniach",
    body: "Twój zespół nie może rozwinąć skrzydeł, bo większość czasu spędza na powtarzalnych zadaniach.",
    order: 2,
  },
  {
    id: "b3",
    group: "benefits",
    icon: "file-spreadsheet",
    title: "Brak danych z kluczowych procesów twojej firmy",
    body: "Wiedza o produkcji lub statusie realizowanych zadań istnieje tylko na kartach lub w excelu.",
    order: 3,
  },
  {
    id: "b4",
    group: "benefits",
    icon: "chart-line",
    title: "Brak zautomatyzowanych raportów",
    body: "Na raporty musisz czekać tygodniami. Nie podejmujesz decyzji biznesowych w oparciu o dane.",
    order: 4,
  },
  {
    id: "b5",
    group: "benefits",
    icon: "messages-square",
    title: "Niefektywna komunikacja pomiędzy działami",
    body: "Brak spójności i synchronizacji działań pomiędzy zespołami. Chaos w kalendarzach i działaniach.",
    order: 5,
  },
];

export const mockCaseStudies: CaseStudy[] = [
  completeCaseStudy({
    id: "c1",
    context: "home",
    title: "Sprzedaż w rytmie sukcesu",
    icon: "trending-up",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
    body: "Tworzymy jasne i spójne procesy sprzedażowe, które eliminują chaos, zwiększają efektywność zespołu i pozwalają na osiąganie lepszych wyników sprzedażowych.",
    order: 1,
  }),
  completeCaseStudy({
    id: "c2",
    context: "home",
    title: "HR w nowoczesnym wydaniu",
    icon: "users",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
    body: "Pomagamy w wypracowaniu przejrzystych procesów zarządzania aplikacjami rekrutacyjnymi i kadrowymi, które usprawniają obsługę pracowników i kandydatów.",
    order: 2,
  }),
  completeCaseStudy({
    id: "c3",
    context: "home",
    title: "Porządek w finansach",
    icon: "calculator",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
    body: "Organizujemy procesy księgowe, eliminując wąskie gardła i zapewniając zgodność operacji finansowych z najlepszymi praktykami rynkowymi.",
    order: 3,
  }),
  completeCaseStudy({
    id: "c4",
    context: "home",
    title: "Produkcja bez przestojów",
    icon: "factory",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    body: "Analizujemy i usprawniamy procesy produkcyjne, aby zwiększyć wydajność, zminimalizować straty i skrócić czas realizacji.",
    order: 4,
  }),
];

export const mockTools: Tool[] = [
  { id: "t1", name: "Google", logoUrl: "", order: 1 },
  { id: "t2", name: "Microsoft", logoUrl: "", order: 2 },
  { id: "t3", name: "Zapier", logoUrl: "", order: 3 },
  { id: "t4", name: "Make", logoUrl: "", order: 4 },
  { id: "t5", name: "PowerApps", logoUrl: "/images/tools/PowerApps_scalable.svg", order: 5 },
  { id: "t6", name: "WordPress", logoUrl: "", order: 6 },
  { id: "t7", name: "HubSpot", logoUrl: "/images/tools/hubspot-logo.svg", order: 7 },
  { id: "t8", name: "Pipedrive", logoUrl: "/images/tools/Pipedrive-logo.svg", order: 8 },
];

export const mockFaq: FaqItem[] = [
  completeFaq({
    id: "f1",
    question: "Co to jest automatyzacja procesów biznesowych?",
    answer:
      "Automatyzacja procesów biznesowych to wdrożenie technologii, która zastępuje ręczne, powtarzalne zadania, pozwalając Twojemu zespołowi skupić się na bardziej strategicznych działaniach.",
    order: 1,
  }),
  completeFaq({
    id: "f2",
    question: "Ile czasu zajmuje wdrożenie automatyzacji w mojej firmie?",
    answer:
      "Czas wdrożenia zależy od wielkości firmy, złożoności procesów i liczby obszarów do automatyzacji. Prostsze procesy mogą trwać kilka tygodni, bardziej złożone projekty kilka miesięcy.",
    order: 2,
  }),
  completeFaq({
    id: "f3",
    question: "Czy automatyzacja jest opłacalna dla małych firm?",
    answer:
      "Tak, automatyzacja przynosi korzyści niezależnie od wielkości firmy. Nawet małe przedsiębiorstwa mogą zyskać dzięki oszczędności czasu, zmniejszeniu liczby błędów i lepszej organizacji procesów.",
    order: 3,
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
      subtitle: "W jakich obszarach możesz na nas liczyć",
      title: "Kompleksowe wsparcie w AI dla Twojej firmy",
      body: "",
      imageUrl: "",
      buttonText: "",
      buttonLink: "",
    }),
    featureTilesAreas: mockFeatureTilesAreas,
    stats: mockSettings,
    conversation: withSectionDefaults({
      id: "conversation",
      pageSlug: "home",
      sectionKey: "conversation",
      subtitle: "Poznaj nasze możliwości",
      title: "Wszystko zaczynamy od rozmowy",
      body: "Zapraszamy do rozmowy z jednym z naszych ekspertów automatyzacji. Podczas bezpłatnych 30 minut możesz ocenić nasze kompetencje oraz opowiedzieć o potrzebach Twojej firmy.",
      imageUrl:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
      buttonText: "Bezpłatna konsultacja",
      buttonLink: "/kontakt",
    }),
    benefitsHeader: withSectionDefaults({
      id: "benefits-header",
      pageSlug: "home",
      sectionKey: "benefits-header",
      subtitle: "Korzyści z automatyzacji",
      title: "Czy potrzebujesz automatyzacji?",
      body: "Jeżeli Ty lub Twoi pracownicy muszą regularnie wykonywać powtarzalne zadania, automatyzacja procesów biznesowych jest dla Ciebie.",
      imageUrl: "",
      buttonText: "Bezpłatna konsultacja",
      buttonLink: "/kontakt",
    }),
    featureTilesBenefits: mockFeatureTilesBenefits,
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
    toolsHeader: withSectionDefaults({
      id: "tools-header",
      pageSlug: "home",
      sectionKey: "tools-header",
      subtitle: "Sprawdzone technologie",
      title: "Narzędzia",
      body: "",
      imageUrl: "",
      buttonText: "",
      buttonLink: "",
    }),
    tools: mockTools,
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
    contactCta: withSectionDefaults({
      id: "contact-cta",
      pageSlug: "home",
      sectionKey: "contact-cta",
      subtitle: "Skontaktuj się z nami",
      title: "Porozmawiajmy jak możemy odciążyć Twój zespół",
      body: "Opowiedz nam o swojej firmie, jej procesach i potrzebach, a my pokażemy możliwości automatyzacji.",
      imageUrl: "",
      buttonText: "Wyślij zapytanie",
      buttonLink: "/kontakt",
    }),
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
    home.benefitsHeader!,
    home.caseStudiesHeader!,
    home.toolsHeader!,
    home.faqHeader!,
    home.contactCta!,
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
