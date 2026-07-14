import { createAirtableBase, type FieldSet } from "./airtable-client";
import { normalizeLogoUrl } from "./assets";
import { cache } from "react";
import type {
  CaseStudy,
  CitySilo,
  ContactSubmissionData,
  ContactSubmissionStep1Data,
  ContactSubmissionStep2Data,
  FaqItem,
  FeatureTile,
  FeatureTileGroup,
  HeroSlide,
  HomePageData,
  LandingBenefit,
  LandingPage,
  LandingSection,
  ListItem,
  PageSection,
  ProcessStep,
  Service,
  Settings,
} from "./airtable.types";
import {
  getLatestGuideArticles,
} from "./guide-articles-mock";
import {
  getMockCaseStudiesForService,
  getMockHomePageData,
  getMockLandingPageBySlug,
  getMockLandingPages,
  getMockListItems,
  getMockPageSection,
  getMockProcessSteps,
  getMockServiceBySlug,
  mockCaseStudies,
  mockCitySilos,
  mockFaq,
  mockFeatureTilesAreas,
  mockHeroSlides,
  mockListItems,
  mockServices,
  mockSettings,
} from "./airtable-mock";

const TABLES = {
  settings: "Settings",
  heroSlides: "HeroSlides",
  pageSections: "PageSections",
  listItems: "ListItems",
  featureTiles: "FeatureTiles",
  caseStudies: "CaseStudies",
  citySilos: "CitySilos",
  faq: "FAQ",
  services: "Services",
  processSteps: "ProcessSteps",
  contactSubmissions: "ContactSubmissions",
  landingPages: "LandingPages",
  landingBenefits: "LandingBenefits",
  landingSections: "LandingSections",
} as const;

function isConfigured(): boolean {
  return Boolean(
    process.env.AIRTABLE_API_TOKEN && process.env.AIRTABLE_BASE_ID,
  );
}

function getBase() {
  if (!isConfigured()) {
    throw new Error("Airtable not configured");
  }
  return createAirtableBase();
}

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function num(value: unknown): number {
  return typeof value === "number" ? value : 0;
}

function bool(value: unknown): boolean {
  return value === true;
}

async function fetchPublished<T>(
  table: string,
  mapRecord: (record: { id: string; fields: FieldSet }) => T,
  sortField = "Order",
): Promise<T[]> {
  const records = await getBase()(table)
    .select({
      filterByFormula: "{Published} = TRUE()",
      sort: [{ field: sortField, direction: "asc" }],
    })
    .all();

  return records.map((r) => mapRecord({ id: r.id, fields: r.fields }));
}

function mapSettings(fields: FieldSet): Settings {
  return {
    siteName: str(fields.SiteName) || mockSettings.siteName,
    phone: str(fields.Phone) || mockSettings.phone,
    email: str(fields.Email) || mockSettings.email,
    address: str(fields.Address) || mockSettings.address,
    logoWhiteUrl: normalizeLogoUrl(
      str(fields.LogoWhiteUrl),
      mockSettings.logoWhiteUrl,
    ),
    logoColorUrl: normalizeLogoUrl(
      str(fields.LogoColorUrl),
      mockSettings.logoColorUrl,
    ),
    metaDescription:
      str(fields.MetaDescription) || mockSettings.metaDescription,
    defaultOgImageUrl:
      str(fields.DefaultOgImageUrl) || mockSettings.defaultOgImageUrl,
    googleSiteVerification:
      str(fields.GoogleSiteVerification) || mockSettings.googleSiteVerification,
    statRating: str(fields.StatRating) || mockSettings.statRating,
    statRatingLabel: str(fields.StatRatingLabel) || mockSettings.statRatingLabel,
    statPercent: str(fields.StatPercent) || mockSettings.statPercent,
    statPercentLabel:
      str(fields.StatPercentLabel) || mockSettings.statPercentLabel,
    statNumber: str(fields.StatNumber) || mockSettings.statNumber,
    statNumberLabel: str(fields.StatNumberLabel) || mockSettings.statNumberLabel,
    statDeployments:
      str(fields.StatDeployments) || mockSettings.statDeployments,
    statDeploymentsLabel:
      str(fields.StatDeploymentsLabel) || mockSettings.statDeploymentsLabel,
  };
}

function mapHeroSlide(record: {
  id: string;
  fields: FieldSet;
}): HeroSlide {
  const { id, fields } = record;
  return {
    id,
    subtitle: str(fields.Subtitle),
    title: str(fields.Title),
    description: str(fields.Description),
    imageUrl: str(fields.ImageUrl),
    buttonText: str(fields.ButtonText),
    buttonLink: str(fields.ButtonLink),
    buttonOpensModal: bool(fields.ButtonOpensModal),
    order: num(fields.Order),
  };
}

function mapPageSection(record: {
  id: string;
  fields: FieldSet;
}): PageSection {
  const { id, fields } = record;
  return {
    id,
    pageSlug: str(fields.PageSlug),
    sectionKey: str(fields.SectionKey),
    subtitle: str(fields.Subtitle),
    title: str(fields.Title),
    body: str(fields.Body),
    imageUrl: str(fields.ImageUrl),
    imageAlt: str(fields.ImageAlt),
    buttonText: str(fields.ButtonText),
    buttonLink: str(fields.ButtonLink),
    citiesSubtitle: str(fields.CitiesSubtitle) || undefined,
    citiesTitle: str(fields.CitiesTitle) || undefined,
    citiesBody: str(fields.CitiesBody) || undefined,
    metaTitle: str(fields.MetaTitle),
    metaDescription: str(fields.MetaDescription),
  };
}

function mapListItem(record: { id: string; fields: FieldSet }): ListItem {
  const { id, fields } = record;
  return {
    id,
    pageSlug: str(fields.PageSlug),
    text: str(fields.Text),
    order: num(fields.Order),
  };
}

function mapFeatureTile(record: {
  id: string;
  fields: FieldSet;
}): FeatureTile {
  const { id, fields } = record;
  return {
    id,
    group: str(fields.Group) as FeatureTileGroup,
    icon: str(fields.Icon),
    title: str(fields.Title),
    body: str(fields.Body),
    order: num(fields.Order),
    href: str(fields.Href) || undefined,
    linkLabel: str(fields.LinkLabel) || undefined,
  };
}

function mapCitySilo(record: { id: string; fields: FieldSet }): CitySilo {
  const { id, fields } = record;
  return {
    id,
    name: str(fields.Name),
    href: str(fields.Href),
    order: num(fields.Order),
  };
}

function mapCaseStudy(record: { id: string; fields: FieldSet }): CaseStudy {
  const { id, fields } = record;
  const title = str(fields.Title);
  return {
    id,
    slug: str(fields.Slug) || slugify(title),
    context: str(fields.Context) === "service" ? "service" : "home",
    serviceSlug: str(fields.ServiceSlug) || undefined,
    title: str(fields.Title),
    icon: str(fields.Icon),
    imageUrl: str(fields.ImageUrl),
    imageAlt: str(fields.ImageAlt) || str(fields.Title),
    body: str(fields.Body),
    order: num(fields.Order),
  };
}

function mapFaq(record: { id: string; fields: FieldSet }): FaqItem {
  const { id, fields } = record;
  return {
    id,
    question: str(fields.Question),
    answer: str(fields.Answer),
    order: num(fields.Order),
    keywords: str(fields.Keywords),
  };
}

function mapService(record: { id: string; fields: FieldSet }): Service {
  const { id, fields } = record;
  const title = str(fields.Title);
  const introBody = str(fields.IntroBody);
  const introTitle = str(fields.IntroTitle);
  const bannerImageUrl = str(fields.BannerImageUrl);
  return {
    id,
    slug: str(fields.Slug),
    title,
    menuLabel: str(fields.MenuLabel) || title,
    metaTitle: str(fields.MetaTitle) || title,
    metaDescription: str(fields.MetaDescription) || introBody.slice(0, 155),
    ogImageUrl: str(fields.OgImageUrl) || bannerImageUrl,
    updatedAt: str(fields.UpdatedAt),
    bannerImageUrl,
    bannerTitle: str(fields.BannerTitle) || title,
    introSubtitle: str(fields.IntroSubtitle),
    introTitle,
    introBody,
    introImageUrl: str(fields.IntroImageUrl),
    introImageAlt: str(fields.IntroImageAlt) || introTitle,
    introButtonText: str(fields.IntroButtonText),
    introButtonLink: str(fields.IntroButtonLink),
    tabsSubtitle: str(fields.TabsSubtitle),
    tabsTitle: str(fields.TabsTitle),
    processSubtitle: str(fields.ProcessSubtitle),
    processTitle: str(fields.ProcessTitle),
    order: num(fields.Order),
  };
}

function mapProcessStep(record: {
  id: string;
  fields: FieldSet;
}): ProcessStep {
  const { id, fields } = record;
  return {
    id,
    serviceSlug: str(fields.ServiceSlug),
    stepNumber: num(fields.StepNumber),
    title: str(fields.Title),
    body: str(fields.Body),
  };
}

export const getSettings = cache(async (): Promise<Settings> => {
  if (!isConfigured()) return mockSettings;

  try {
    const records = await getBase()(TABLES.settings).select({ maxRecords: 1 }).all();
    if (records.length === 0) return mockSettings;
    return mapSettings(records[0].fields);
  } catch {
    return mockSettings;
  }
});

export const getHeroSlides = cache(async (): Promise<HeroSlide[]> => {
  if (!isConfigured()) return mockHeroSlides;

  try {
    const slides = await fetchPublished(TABLES.heroSlides, mapHeroSlide);
    return slides.length > 0 ? slides : mockHeroSlides;
  } catch {
    return mockHeroSlides;
  }
});

async function getPageSections(pageSlug?: string): Promise<PageSection[]> {
  if (!isConfigured()) {
    if (!pageSlug) return [];
    const keys = [
      "intro",
      "areas-header",
      "conversation",
      "cases-header",
      "faq-header",
      "guide-header",
      "banner",
      "contact-sidebar",
      "contact-form",
    ];
    return keys
      .map((key) => getMockPageSection(pageSlug, key))
      .filter((s): s is PageSection => s !== null);
  }

  try {
    const formula = pageSlug
      ? `AND({PageSlug} = '${pageSlug}')`
      : "TRUE()";
    const records = (await getBase()(TABLES.pageSections)
      .select({ filterByFormula: formula })
      .all());
    return records.map((r) => mapPageSection({ id: r.id, fields: r.fields }));
  } catch {
    return [];
  }
}

function findSection(
  sections: PageSection[],
  pageSlug: string,
  sectionKey: string,
): PageSection | null {
  return (
    sections.find(
      (s) => s.pageSlug === pageSlug && s.sectionKey === sectionKey,
    ) ?? getMockPageSection(pageSlug, sectionKey)
  );
}

export const getPageSection = cache(
  async (pageSlug: string, sectionKey: string): Promise<PageSection | null> => {
    if (!isConfigured()) {
      return getMockPageSection(pageSlug, sectionKey);
    }

    try {
      const records = (await getBase()(TABLES.pageSections)
        .select({
          filterByFormula: `AND({PageSlug} = '${pageSlug}', {SectionKey} = '${sectionKey}')`,
          maxRecords: 1,
        })
        .all());
      if (records.length === 0) {
        return getMockPageSection(pageSlug, sectionKey);
      }
      return mapPageSection({ id: records[0].id, fields: records[0].fields });
    } catch {
      return getMockPageSection(pageSlug, sectionKey);
    }
  },
);

function mapLandingBenefit(record: {
  id: string;
  fields: FieldSet;
}): LandingBenefit {
  const { id, fields } = record;
  return {
    id,
    landingSlug: str(fields.LandingSlug),
    title: str(fields.Title),
    body: str(fields.Body),
    order: num(fields.Order),
  };
}

function mapLandingSection(record: {
  id: string;
  fields: FieldSet;
}): LandingSection {
  const { id, fields } = record;
  return {
    id,
    landingSlug: str(fields.LandingSlug),
    title: str(fields.Title),
    body: str(fields.Body),
    order: num(fields.Order),
  };
}

function mapLandingPage(
  record: { id: string; fields: FieldSet },
  benefits: LandingBenefit[],
  sections: LandingSection[],
): LandingPage {
  const { id, fields } = record;
  const slug = str(fields.Slug);
  return {
    id,
    slug,
    campaignName: str(fields.CampaignName),
    metaTitle: str(fields.MetaTitle),
    metaDescription: str(fields.MetaDescription),
    heroTitle: str(fields.HeroTitle),
    heroSubtitle: str(fields.HeroSubtitle),
    heroImageUrl: str(fields.HeroImageUrl),
    heroImageAlt: str(fields.HeroImageAlt) || str(fields.HeroTitle),
    primaryCtaText: str(fields.PrimaryCtaText),
    primaryCtaLink: str(fields.PrimaryCtaLink),
    socialProof: str(fields.SocialProof),
    relatedServiceSlug: str(fields.RelatedServiceSlug),
    formEnabled: Boolean(fields.FormEnabled),
    noIndex: Boolean(fields.NoIndex),
    updatedAt: str(fields.UpdatedAt),
    benefits: benefits
      .filter((b) => b.landingSlug === slug)
      .sort((a, b) => a.order - b.order),
    sections: sections
      .filter((s) => s.landingSlug === slug)
      .sort((a, b) => a.order - b.order),
  };
}

async function fetchLandingBenefits(): Promise<LandingBenefit[]> {
  try {
    const records = (await getBase()(TABLES.landingBenefits)
      .select({ sort: [{ field: "Order", direction: "asc" }] })
      .all());
    return records.map((r) =>
      mapLandingBenefit({ id: r.id, fields: r.fields }),
    );
  } catch {
    return [];
  }
}

async function fetchLandingSections(): Promise<LandingSection[]> {
  try {
    const records = (await getBase()(TABLES.landingSections)
      .select({ sort: [{ field: "Order", direction: "asc" }] })
      .all());
    return records.map((r) =>
      mapLandingSection({ id: r.id, fields: r.fields }),
    );
  } catch {
    return [];
  }
}

export const getLandingPages = cache(async (): Promise<LandingPage[]> => {
  if (!isConfigured()) return getMockLandingPages();

  try {
    const [records, benefits, sections] = await Promise.all([
      getBase()(TABLES.landingPages)
        .select({
          filterByFormula: "AND({Published} = TRUE(), {NoIndex} != TRUE())",
          sort: [{ field: "Slug", direction: "asc" }],
        })
        .all(),
      fetchLandingBenefits(),
      fetchLandingSections(),
    ]);

    const pages = records.map((r) =>
      mapLandingPage({ id: r.id, fields: r.fields }, benefits, sections),
    );
    return pages.length > 0 ? pages : getMockLandingPages();
  } catch {
    return getMockLandingPages();
  }
});

export const getLandingPageBySlug = cache(
  async (slug: string): Promise<LandingPage | null> => {
    if (!isConfigured()) return getMockLandingPageBySlug(slug);

    try {
      const [records, benefits, sections] = await Promise.all([
        getBase()(TABLES.landingPages)
          .select({
            filterByFormula: `AND({Slug} = '${slug}', {Published} = TRUE())`,
            maxRecords: 1,
          })
          .all(),
        fetchLandingBenefits(),
        fetchLandingSections(),
      ]);

      if (records.length === 0) return getMockLandingPageBySlug(slug);
      return mapLandingPage(
        { id: records[0].id, fields: records[0].fields },
        benefits,
        sections,
      );
    } catch {
      return getMockLandingPageBySlug(slug);
    }
  },
);

export const getListItems = cache(
  async (pageSlug: string): Promise<ListItem[]> => {
    if (!isConfigured()) return getMockListItems(pageSlug);

    try {
      const records = (await getBase()(TABLES.listItems)
        .select({
          filterByFormula: `{PageSlug} = '${pageSlug}'`,
          sort: [{ field: "Order", direction: "asc" }],
        })
        .all());
      const items = records.map((r) =>
        mapListItem({ id: r.id, fields: r.fields }),
      );
      return items.length > 0 ? items : getMockListItems(pageSlug);
    } catch {
      return getMockListItems(pageSlug);
    }
  },
);

export const getFeatureTiles = cache(async (): Promise<FeatureTile[]> => {
  if (!isConfigured()) return mockFeatureTilesAreas;

  try {
    const tiles = await fetchPublished(TABLES.featureTiles, mapFeatureTile);
    const filtered = tiles.filter((t) => t.group === "areas");
    return filtered.length > 0 ? filtered : mockFeatureTilesAreas;
  } catch {
    return mockFeatureTilesAreas;
  }
});

export const getCaseStudies = cache(
  async (context: "home" | string): Promise<CaseStudy[]> => {
    if (!isConfigured()) {
      return context === "home"
        ? mockCaseStudies
        : getMockCaseStudiesForService(context);
    }

    try {
      const formula =
        context === "home"
          ? "{Context} = 'home'"
          : `AND({Context} = 'service', {ServiceSlug} = '${context}')`;
      const records = (await getBase()(TABLES.caseStudies)
        .select({
          filterByFormula: formula,
          sort: [{ field: "Order", direction: "asc" }],
        })
        .all());
      const items = records.map((r) =>
        mapCaseStudy({ id: r.id, fields: r.fields }),
      );
      if (items.length > 0) return items;
      return context === "home"
        ? mockCaseStudies
        : getMockCaseStudiesForService(context);
    } catch {
      return context === "home"
        ? mockCaseStudies
        : getMockCaseStudiesForService(context);
    }
  },
);

export const getCaseStudyBySlug = cache(
  async (slug: string): Promise<CaseStudy | null> => {
    if (!slug) return null;

    if (!isConfigured()) {
      return mockCaseStudies.find((item) => item.slug === slug) ?? null;
    }

    try {
      const records = (await getBase()(TABLES.caseStudies)
        .select({
          filterByFormula: `AND({Slug} = '${slug}', {Published} = TRUE())`,
          maxRecords: 1,
        })
        .all());
      if (records.length > 0) {
        return mapCaseStudy({ id: records[0].id, fields: records[0].fields });
      }
      return mockCaseStudies.find((item) => item.slug === slug) ?? null;
    } catch {
      return mockCaseStudies.find((item) => item.slug === slug) ?? null;
    }
  },
);

export const getCitySilos = cache(async (): Promise<CitySilo[]> => {
  if (!isConfigured()) return mockCitySilos;

  try {
    const cities = await fetchPublished(TABLES.citySilos, mapCitySilo);
    return cities.length > 0 ? cities : mockCitySilos;
  } catch {
    return mockCitySilos;
  }
});

export const getFaq = cache(async (): Promise<FaqItem[]> => {
  if (!isConfigured()) return mockFaq;

  try {
    const items = await fetchPublished(TABLES.faq, mapFaq);
    return items.length > 0 ? items : mockFaq;
  } catch {
    return mockFaq;
  }
});

export const getServices = cache(async (): Promise<Service[]> => {
  if (!isConfigured()) return mockServices;

  try {
    const records = (await getBase()(TABLES.services)
      .select({
        filterByFormula: "{Published} = TRUE()",
        sort: [{ field: "Order", direction: "asc" }],
      })
      .all());
    const services = records.map((r) =>
      mapService({ id: r.id, fields: r.fields }),
    );
    return services.length > 0 ? services : mockServices;
  } catch {
    return mockServices;
  }
});

export const getServiceBySlug = cache(
  async (slug: string): Promise<Service | null> => {
    if (!isConfigured()) return getMockServiceBySlug(slug);

    try {
      const records = (await getBase()(TABLES.services)
        .select({
          filterByFormula: `{Slug} = '${slug}'`,
          maxRecords: 1,
        })
        .all());
      if (records.length === 0) return getMockServiceBySlug(slug);
      return mapService({ id: records[0].id, fields: records[0].fields });
    } catch {
      return getMockServiceBySlug(slug);
    }
  },
);

export const getProcessSteps = cache(
  async (serviceSlug: string): Promise<ProcessStep[]> => {
    if (!isConfigured()) return getMockProcessSteps(serviceSlug);

    try {
      const records = (await getBase()(TABLES.processSteps)
        .select({
          filterByFormula: `{ServiceSlug} = '${serviceSlug}'`,
          sort: [{ field: "StepNumber", direction: "asc" }],
        })
        .all());
      const steps = records.map((r) =>
        mapProcessStep({ id: r.id, fields: r.fields }),
      );
      return steps.length > 0 ? steps : getMockProcessSteps(serviceSlug);
    } catch {
      return getMockProcessSteps(serviceSlug);
    }
  },
);

export const getHomePageData = cache(async (): Promise<HomePageData> => {
  if (!isConfigured()) return getMockHomePageData();

  const [
    settings,
    heroSlides,
    homeSections,
    listItems,
    featureTilesAreas,
    caseStudies,
    citySilos,
    faq,
  ] = await Promise.all([
    getSettings(),
    getHeroSlides(),
    getPageSections("home"),
    getListItems("home"),
    getFeatureTiles(),
    getCaseStudies("home"),
    getCitySilos(),
    getFaq(),
  ]);

  return {
    settings,
    heroSlides,
    intro: findSection(homeSections, "home", "intro"),
    listItems: listItems.length > 0 ? listItems : mockListItems,
    areasHeader: findSection(homeSections, "home", "areas-header"),
    featureTilesAreas,
    stats: settings,
    conversation: findSection(homeSections, "home", "conversation"),
    citySilos,
    caseStudiesHeader: findSection(homeSections, "home", "cases-header"),
    caseStudies,
    faqHeader: findSection(homeSections, "home", "faq-header"),
    faq,
    guideHeader: findSection(homeSections, "home", "guide-header"),
    guideArticles: getLatestGuideArticles(6),
  };
});

export async function createContactSubmission(
  data: ContactSubmissionData,
): Promise<void> {
  if (!isConfigured()) {
    console.info("[mock] Contact submission:", data);
    return;
  }

  await getBase()(TABLES.contactSubmissions).create({
    Name: data.name,
    Email: data.email,
    Phone: data.phone,
    Message: data.message,
    SourcePage: data.sourcePage,
    UtmSource: data.utmSource || "",
    UtmMedium: data.utmMedium || "",
    UtmCampaign: data.utmCampaign || "",
    UtmTerm: data.utmTerm || "",
    UtmContent: data.utmContent || "",
    Status: "New",
  });
}

export async function createContactSubmissionStep1(
  data: ContactSubmissionStep1Data,
): Promise<string> {
  if (!isConfigured()) {
    console.info("[mock] Contact step 1:", data);
    return "mock-submission-id";
  }

  const record = await getBase()(TABLES.contactSubmissions).create({
    FirstName: data.firstName,
    LastName: data.lastName,
    Name: `${data.firstName} ${data.lastName}`.trim(),
    Email: data.email,
    Phone: data.phone,
    Company: data.company,
    ConsentGiven: data.consent,
    Message: "",
    SourcePage: data.sourcePage,
    UtmSource: data.utmSource || "",
    UtmMedium: data.utmMedium || "",
    UtmCampaign: data.utmCampaign || "",
    UtmTerm: data.utmTerm || "",
    UtmContent: data.utmContent || "",
    FormStep: "1",
    Status: "New",
  });

  return record.id;
}

export async function updateContactSubmissionStep2(
  submissionId: string,
  data: ContactSubmissionStep2Data,
): Promise<void> {
  if (!isConfigured()) {
    console.info("[mock] Contact step 2:", submissionId, data);
    return;
  }

  const fields: Record<string, unknown> = {
    FormStep: "2",
  };

  if (data.employeeCount) fields.EmployeeCount = data.employeeCount;
  if (data.industry) fields.Industry = data.industry;
  if (data.interestedServices?.length) {
    fields.InterestedServices = data.interestedServices.join(", ");
  }
  if (data.additionalNotes?.trim()) {
    fields.AdditionalNotes = data.additionalNotes.trim();
    fields.Message = data.additionalNotes.trim();
  }

  await getBase()(TABLES.contactSubmissions).update(submissionId, fields);
}

export { isConfigured };
