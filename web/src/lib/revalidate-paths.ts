import Airtable from "airtable";

const STATIC_PAGES = [
  "/",
  "/o-nas",
  "/kontakt",
  "/polityka-prywatnosci",
  "/dziekujemy",
] as const;

const LAYOUT_PATHS = ["/", "/uslugi", "/kampanie"] as const;

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function isConfigured(): boolean {
  return Boolean(
    process.env.AIRTABLE_API_TOKEN && process.env.AIRTABLE_BASE_ID,
  );
}

function getBase() {
  return new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
    process.env.AIRTABLE_BASE_ID!,
  );
}

function pageSlugToPath(pageSlug: string): string {
  if (!pageSlug || pageSlug === "home") return "/";
  return `/${pageSlug}`;
}

function unique(paths: string[]): string[] {
  return [...new Set(paths.filter(Boolean))];
}

function pathsForTableOnly(tableName: string): string[] {
  switch (tableName) {
    case "Settings":
      return [...STATIC_PAGES, "/uslugi", "/kampanie"];
    case "HeroSlides":
    case "FAQ":
    case "Tools":
      return ["/"];
    case "FeatureTiles":
      return ["/", "/o-nas"];
    case "ListItems":
      return ["/", "/o-nas"];
    case "PageSections":
      return ["/", "/o-nas", "/kontakt"];
    case "CaseStudies":
      return ["/", "/uslugi"];
    case "Services":
      return ["/", "/uslugi"];
    case "ProcessSteps":
      return ["/uslugi"];
    case "LandingPages":
      return ["/kampanie"];
    case "LandingBenefits":
    case "LandingSections":
      return ["/kampanie"];
    case "ContactSubmissions":
      return [];
    default:
      return [...STATIC_PAGES];
  }
}

function pathsFromRecord(
  tableName: string,
  fields: Record<string, unknown>,
): string[] {
  const slug = str(fields.Slug);
  const pageSlug = str(fields.PageSlug);
  const serviceSlug = str(fields.ServiceSlug);
  const landingSlug = str(fields.LandingSlug);
  const context = str(fields.Context);

  switch (tableName) {
    case "Settings":
      return [...STATIC_PAGES, "/uslugi", "/kampanie"];
    case "HeroSlides":
    case "FAQ":
    case "Tools":
      return ["/"];
    case "FeatureTiles":
      return str(fields.Group) === "areas" ? ["/", "/o-nas"] : ["/"];
    case "ListItems":
      return [pageSlugToPath(pageSlug)];
    case "PageSections":
      return [pageSlugToPath(pageSlug)];
    case "CaseStudies":
      return context === "service" && serviceSlug
        ? ["/", `/uslugi/${serviceSlug}`]
        : ["/"];
    case "Services":
      return unique(["/", slug ? `/uslugi/${slug}` : "/uslugi"]);
    case "ProcessSteps":
      return serviceSlug ? [`/uslugi/${serviceSlug}`] : ["/uslugi"];
    case "LandingPages":
      return slug ? [`/kampanie/${slug}`] : ["/kampanie"];
    case "LandingBenefits":
    case "LandingSections":
      return landingSlug ? [`/kampanie/${landingSlug}`] : ["/kampanie"];
    default:
      return pathsForTableOnly(tableName);
  }
}

async function fetchRecordFields(
  tableName: string,
  recordId: string,
): Promise<Record<string, unknown> | null> {
  try {
    const record = await getBase()(tableName).find(recordId);
    return record.fields as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function fetchAllDynamicPaths(): Promise<string[]> {
  if (!isConfigured()) return [];

  const base = getBase();
  const paths: string[] = [];

  try {
    const services = await base("Services")
      .select({ fields: ["Slug"], filterByFormula: "{Published} = TRUE()" })
      .all();
    for (const record of services) {
      const slug = str(record.fields.Slug);
      if (slug) paths.push(`/uslugi/${slug}`);
    }
  } catch {
    // ignore
  }

  try {
    const landingPages = await base("LandingPages")
      .select({ fields: ["Slug"], filterByFormula: "{Published} = TRUE()" })
      .all();
    for (const record of landingPages) {
      const slug = str(record.fields.Slug);
      if (slug) paths.push(`/kampanie/${slug}`);
    }
  } catch {
    // ignore
  }

  return paths;
}

export async function getAllRevalidatePaths(): Promise<string[]> {
  const dynamic = await fetchAllDynamicPaths();
  return unique([
    ...STATIC_PAGES,
    "/uslugi",
    "/kampanie",
    ...dynamic,
  ]);
}

export type RevalidatePlan = {
  paths: string[];
  mode: "full" | "targeted";
  tableName: string | null;
  recordId: string | null;
};

export async function resolveRevalidatePlan(options: {
  tableName?: string | null;
  recordId?: string | null;
  full?: boolean;
}): Promise<RevalidatePlan> {
  const tableName = options.tableName?.trim() || null;
  const recordId = options.recordId?.trim() || null;

  if (options.full || !tableName) {
    return {
      paths: await getAllRevalidatePaths(),
      mode: "full",
      tableName,
      recordId,
    };
  }

  if (tableName === "ContactSubmissions") {
    return { paths: [], mode: "targeted", tableName, recordId };
  }

  if (recordId && isConfigured()) {
    const fields = await fetchRecordFields(tableName, recordId);
    if (fields) {
      return {
        paths: pathsFromRecord(tableName, fields),
        mode: "targeted",
        tableName,
        recordId,
      };
    }
  }

  return {
    paths: pathsForTableOnly(tableName),
    mode: "targeted",
    tableName,
    recordId,
  };
}

export function applyRevalidatePath(
  path: string,
  revalidate: (path: string, type?: "layout" | "page") => void,
): void {
  if (path === "/uslugi" || path === "/kampanie") {
    revalidate(path, "layout");
    return;
  }

  if (LAYOUT_PATHS.includes(path as (typeof LAYOUT_PATHS)[number])) {
    revalidate(path, "layout");
    revalidate(path, "page");
    return;
  }

  revalidate(path, "page");

  if (path === "/" || path === "/o-nas" || path === "/kontakt") {
    revalidate(path, "layout");
  }
}
