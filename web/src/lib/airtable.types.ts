export type PageSlug = "home" | "o-nas" | "kontakt" | string;

export type FeatureTileGroup = "areas";

export type CaseStudyContext = "home" | "service";

export interface Settings {
  siteName: string;
  phone: string;
  email: string;
  address: string;
  logoWhiteUrl: string;
  logoColorUrl: string;
  metaDescription: string;
  defaultOgImageUrl: string;
  googleSiteVerification: string;
  statRating: string;
  statRatingLabel: string;
  statPercent: string;
  statPercentLabel: string;
  statNumber: string;
  statNumberLabel: string;
  statDeployments: string;
  statDeploymentsLabel: string;
}

export interface HeroSlide {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  buttonOpensModal: boolean;
  order: number;
}

export interface PageSection {
  id: string;
  pageSlug: PageSlug;
  sectionKey: string;
  subtitle: string;
  title: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  citiesSubtitle?: string;
  citiesTitle?: string;
  citiesBody?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ListItem {
  id: string;
  pageSlug: PageSlug;
  text: string;
  order: number;
}

export interface FeatureTile {
  id: string;
  group: FeatureTileGroup;
  icon: string;
  title: string;
  body: string;
  order: number;
  /** Ścieżka do silosu tematycznego, np. /uslugi/automatyzacja-dla-hr */
  href?: string;
  /** Etykieta CTA na kafelku-linku; domyślnie „Dowiedz się więcej” */
  linkLabel?: string;
}

export interface CitySilo {
  id: string;
  name: string;
  href: string;
  order: number;
}

export interface CaseStudy {
  id: string;
  slug: string;
  context: CaseStudyContext;
  serviceSlug?: string;
  title: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
  body: string;
  order: number;
}

export interface GuideAuthor {
  id: string;
  name: string;
  jobTitle: string;
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

export interface GuideFaqItem {
  question: string;
  answer: string;
}

export interface GuideArticle {
  id: string;
  slug: string;
  /** H1 artykułu. */
  title: string;
  /** Lead pod nagłówkiem i opis na kartach listy. */
  excerpt: string;
  /**
   * Treść w uproszczonym markdownie: `##`/`###`, listy `-` i `1.`,
   * ramki `>`, tabele `|`, `**pogrubienie**`, `[link](/sciezka)`,
   * `[[CTA]]` (wezwanie do kontaktu w treści).
   */
  body: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  /** Wyliczane z liczby słów treści. */
  readTimeMinutes: number;
  wordCount: number;
  metaTitle: string;
  metaDescription: string;
  /** Fraza główna, pod którą optymalizujemy artykuł. */
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  author: GuideAuthor;
  /** Punkty sekcji „W skrócie”. */
  summary?: string[];
  faq?: GuideFaqItem[];
  relatedServiceSlugs?: string[];
  relatedArticleSlugs?: string[];
  /** Tekst CTA w treści i sekcji kontaktowej pod artykułem. */
  cta?: { title: string; body: string };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  order: number;
  keywords: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  menuLabel: string;
  metaTitle: string;
  metaDescription: string;
  ogImageUrl: string;
  updatedAt: string;
  bannerImageUrl: string;
  bannerTitle: string;
  introSubtitle: string;
  introTitle: string;
  introBody: string;
  introImageUrl: string;
  introImageAlt: string;
  introButtonText: string;
  introButtonLink: string;
  tabsSubtitle: string;
  tabsTitle: string;
  processSubtitle: string;
  processTitle: string;
  order: number;
}

export interface ProcessStep {
  id: string;
  serviceSlug: string;
  stepNumber: number;
  title: string;
  body: string;
}

export interface LandingBenefit {
  id: string;
  landingSlug: string;
  title: string;
  body: string;
  order: number;
}

export interface LandingSection {
  id: string;
  landingSlug: string;
  title: string;
  body: string;
  order: number;
}

export interface LandingPage {
  id: string;
  slug: string;
  campaignName: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  heroImageAlt: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  socialProof: string;
  relatedServiceSlug: string;
  formEnabled: boolean;
  noIndex: boolean;
  benefits: LandingBenefit[];
  sections: LandingSection[];
  updatedAt: string;
}

export interface ContactSubmissionData {
  name: string;
  email: string;
  phone: string;
  message: string;
  sourcePage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

export interface ContactSubmissionStep1Data {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  consent: boolean;
  sourcePage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

export interface ContactSubmissionStep2Data {
  employeeCount?: string;
  industry?: string;
  interestedServices?: string[];
  additionalNotes?: string;
}

export interface HomePageData {
  settings: Settings;
  heroSlides: HeroSlide[];
  intro: PageSection | null;
  listItems: ListItem[];
  areasHeader: PageSection | null;
  featureTilesAreas: FeatureTile[];
  stats: Settings;
  conversation: PageSection | null;
  citySilos: CitySilo[];
  caseStudiesHeader: PageSection | null;
  caseStudies: CaseStudy[];
  faqHeader: PageSection | null;
  faq: FaqItem[];
  guideHeader: PageSection | null;
  guideArticles: GuideArticle[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
