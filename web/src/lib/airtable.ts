import Airtable from "airtable";
import type { FieldSet, Records } from "airtable";
import { cache } from "react";
import type {
  CaseStudy,
  ContactSubmissionData,
  FaqItem,
  FeatureTile,
  FeatureTileGroup,
  HeroSlide,
  HomePageData,
  ListItem,
  PageSection,
  ProcessStep,
  Service,
  Settings,
  Tool,
} from "./airtable.types";
import {
  getMockCaseStudiesForService,
  getMockHomePageData,
  getMockListItems,
  getMockPageSection,
  getMockProcessSteps,
  getMockServiceBySlug,
  mockCaseStudies,
  mockFaq,
  mockFeatureTilesAreas,
  mockFeatureTilesBenefits,
  mockHeroSlides,
  mockListItems,
  mockServices,
  mockSettings,
  mockTools,
} from "./airtable-mock";

const TABLES = {
  settings: "Settings",
  heroSlides: "HeroSlides",
  pageSections: "PageSections",
  listItems: "ListItems",
  featureTiles: "FeatureTiles",
  caseStudies: "CaseStudies",
  tools: "Tools",
  faq: "FAQ",
  services: "Services",
  processSteps: "ProcessSteps",
  contactSubmissions: "ContactSubmissions",
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
  return new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
    process.env.AIRTABLE_BASE_ID!,
  );
}

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function num(value: unknown): number {
  return typeof value === "number" ? value : 0;
}

async function fetchPublished<T>(
  table: string,
  mapRecord: (record: { id: string; fields: FieldSet }) => T,
  sortField = "Order",
): Promise<T[]> {
  const records = (await getBase()(table)
    .select({
      filterByFormula: "{Published} = TRUE()",
      sort: [{ field: sortField, direction: "asc" }],
    })
    .all()) as Records<FieldSet>;

  return records.map((r) => mapRecord({ id: r.id, fields: r.fields }));
}

function mapSettings(fields: FieldSet): Settings {
  return {
    phone: str(fields.Phone) || mockSettings.phone,
    logoWhiteUrl: str(fields.LogoWhiteUrl) || mockSettings.logoWhiteUrl,
    logoColorUrl: str(fields.LogoColorUrl) || mockSettings.logoColorUrl,
    metaDescription:
      str(fields.MetaDescription) || mockSettings.metaDescription,
    statRating: str(fields.StatRating) || mockSettings.statRating,
    statRatingLabel: str(fields.StatRatingLabel) || mockSettings.statRatingLabel,
    statPercent: str(fields.StatPercent) || mockSettings.statPercent,
    statPercentLabel:
      str(fields.StatPercentLabel) || mockSettings.statPercentLabel,
    statNumber: str(fields.StatNumber) || mockSettings.statNumber,
    statNumberLabel: str(fields.StatNumberLabel) || mockSettings.statNumberLabel,
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
    imageUrl: str(fields.ImageUrl),
    buttonText: str(fields.ButtonText),
    buttonLink: str(fields.ButtonLink),
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
    buttonText: str(fields.ButtonText),
    buttonLink: str(fields.ButtonLink),
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
  };
}

function mapCaseStudy(record: { id: string; fields: FieldSet }): CaseStudy {
  const { id, fields } = record;
  return {
    id,
    context: str(fields.Context) === "service" ? "service" : "home",
    serviceSlug: str(fields.ServiceSlug) || undefined,
    title: str(fields.Title),
    icon: str(fields.Icon),
    imageUrl: str(fields.ImageUrl),
    body: str(fields.Body),
    order: num(fields.Order),
  };
}

function mapTool(record: { id: string; fields: FieldSet }): Tool {
  const { id, fields } = record;
  return {
    id,
    name: str(fields.Name),
    logoUrl: str(fields.LogoUrl),
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
  };
}

function mapService(record: { id: string; fields: FieldSet }): Service {
  const { id, fields } = record;
  return {
    id,
    slug: str(fields.Slug),
    title: str(fields.Title),
    menuLabel: str(fields.MenuLabel) || str(fields.Title),
    bannerImageUrl: str(fields.BannerImageUrl),
    bannerTitle: str(fields.BannerTitle) || str(fields.Title),
    introSubtitle: str(fields.IntroSubtitle),
    introTitle: str(fields.IntroTitle),
    introBody: str(fields.IntroBody),
    introImageUrl: str(fields.IntroImageUrl),
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
      "benefits-header",
      "cases-header",
      "tools-header",
      "faq-header",
      "contact-cta",
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
      .all()) as Records<FieldSet>;
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

export const getListItems = cache(
  async (pageSlug: string): Promise<ListItem[]> => {
    if (!isConfigured()) return getMockListItems(pageSlug);

    try {
      const records = (await getBase()(TABLES.listItems)
        .select({
          filterByFormula: `{PageSlug} = '${pageSlug}'`,
          sort: [{ field: "Order", direction: "asc" }],
        })
        .all()) as Records<FieldSet>;
      const items = records.map((r) =>
        mapListItem({ id: r.id, fields: r.fields }),
      );
      return items.length > 0 ? items : getMockListItems(pageSlug);
    } catch {
      return getMockListItems(pageSlug);
    }
  },
);

export const getFeatureTiles = cache(
  async (group: FeatureTileGroup): Promise<FeatureTile[]> => {
    const fallback =
      group === "areas" ? mockFeatureTilesAreas : mockFeatureTilesBenefits;

    if (!isConfigured()) return fallback;

    try {
      const tiles = await fetchPublished(TABLES.featureTiles, mapFeatureTile);
      const filtered = tiles.filter((t) => t.group === group);
      return filtered.length > 0 ? filtered : fallback;
    } catch {
      return fallback;
    }
  },
);

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
        .all()) as Records<FieldSet>;
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

export const getTools = cache(async (): Promise<Tool[]> => {
  if (!isConfigured()) return mockTools;

  try {
    const tools = await fetchPublished(TABLES.tools, mapTool);
    return tools.length > 0 ? tools : mockTools;
  } catch {
    return mockTools;
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
      .all()) as Records<FieldSet>;
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
        .all()) as Records<FieldSet>;
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
        .all()) as Records<FieldSet>;
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
    featureTilesBenefits,
    caseStudies,
    tools,
    faq,
  ] = await Promise.all([
    getSettings(),
    getHeroSlides(),
    getPageSections("home"),
    getListItems("home"),
    getFeatureTiles("areas"),
    getFeatureTiles("benefits"),
    getCaseStudies("home"),
    getTools(),
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
    benefitsHeader: findSection(homeSections, "home", "benefits-header"),
    featureTilesBenefits,
    caseStudiesHeader: findSection(homeSections, "home", "cases-header"),
    caseStudies,
    toolsHeader: findSection(homeSections, "home", "tools-header"),
    tools,
    faqHeader: findSection(homeSections, "home", "faq-header"),
    faq,
    contactCta: findSection(homeSections, "home", "contact-cta"),
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
    Status: "New",
  });
}

export { isConfigured };
