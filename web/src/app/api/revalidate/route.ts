import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { getLandingPages, getServices } from "@/lib/airtable";

const REVALIDATE_PATHS = [
  "/",
  "/o-nas",
  "/kontakt",
  "/polityka-prywatnosci",
  "/dziekujemy",
] as const;

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const revalidated: string[] = [];

  for (const path of REVALIDATE_PATHS) {
    revalidatePath(path, "layout");
    revalidatePath(path, "page");
    revalidated.push(path);
  }

  revalidatePath("/uslugi", "layout");
  revalidatePath("/kampanie", "layout");
  revalidated.push("/uslugi", "/kampanie");

  const [services, landingPages] = await Promise.all([
    getServices(),
    getLandingPages(),
  ]);

  for (const service of services) {
    const path = `/uslugi/${service.slug}`;
    revalidatePath(path, "page");
    revalidated.push(path);
  }

  for (const page of landingPages) {
    const path = `/kampanie/${page.slug}`;
    revalidatePath(path, "page");
    revalidated.push(path);
  }

  const airtableConfigured = Boolean(
    process.env.AIRTABLE_API_TOKEN && process.env.AIRTABLE_BASE_ID,
  );

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    paths: revalidated,
    airtableConfigured,
    hint: airtableConfigured
      ? "Cache cleared. Next request should read from Airtable."
      : "WARNING: AIRTABLE_API_TOKEN or AIRTABLE_BASE_ID missing — page uses mock data.",
  });
}
