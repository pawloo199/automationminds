import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const REVALIDATE_PATHS = [
  "/",
  "/o-nas",
  "/kontakt",
  "/polityka-prywatnosci",
] as const;

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  for (const path of REVALIDATE_PATHS) {
    revalidatePath(path, "layout");
    revalidatePath(path, "page");
  }

  revalidatePath("/uslugi", "layout");

  const airtableConfigured = Boolean(
    process.env.AIRTABLE_API_TOKEN && process.env.AIRTABLE_BASE_ID,
  );

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    paths: REVALIDATE_PATHS,
    airtableConfigured,
    hint: airtableConfigured
      ? "Cache cleared. Next request should read from Airtable."
      : "WARNING: AIRTABLE_API_TOKEN or AIRTABLE_BASE_ID missing — page uses mock data.",
  });
}
