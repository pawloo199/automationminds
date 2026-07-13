export type PageSlug = "home" | "o-nas" | "kontakt" | string;

export type FeatureTileGroup = "areas" | "benefits";

export type CaseStudyContext = "home" | "service";

export interface Settings {
  phone: string;
  logoWhiteUrl: string;
  logoColorUrl: string;
  metaDescription: string;
  statRating: string;
  statRatingLabel: string;
  statPercent: string;
  statPercentLabel: string;
  statNumber: string;
  statNumberLabel: string;
}

export interface HeroSlide {
  id: string;
  subtitle: string;
  title: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
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
  buttonText: string;
  buttonLink: string;
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
}

export interface CaseStudy {
  id: string;
  context: CaseStudyContext;
  serviceSlug?: string;
  title: string;
  icon: string;
  imageUrl: string;
  body: string;
  order: number;
}

export interface Tool {
  id: string;
  name: string;
  logoUrl: string;
  order: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  menuLabel: string;
  bannerImageUrl: string;
  bannerTitle: string;
  introSubtitle: string;
  introTitle: string;
  introBody: string;
  introImageUrl: string;
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

export interface ContactSubmissionData {
  name: string;
  email: string;
  phone: string;
  message: string;
  sourcePage: string;
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
  benefitsHeader: PageSection | null;
  featureTilesBenefits: FeatureTile[];
  caseStudiesHeader: PageSection | null;
  caseStudies: CaseStudy[];
  toolsHeader: PageSection | null;
  tools: Tool[];
  faqHeader: PageSection | null;
  faq: FaqItem[];
  contactCta: PageSection | null;
}
