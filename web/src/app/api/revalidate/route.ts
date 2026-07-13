import {
  applyRevalidatePath,
  resolveRevalidatePlan,
} from "@/lib/revalidate-paths";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const tableName = request.nextUrl.searchParams.get("tableName");
  const recordId = request.nextUrl.searchParams.get("recordId");
  const full = request.nextUrl.searchParams.get("full") === "true";

  const plan = await resolveRevalidatePlan({ tableName, recordId, full });
  const revalidated: string[] = [];

  for (const path of plan.paths) {
    applyRevalidatePath(path, revalidatePath);
    revalidated.push(path);
  }

  const airtableConfigured = Boolean(
    process.env.AIRTABLE_API_TOKEN && process.env.AIRTABLE_BASE_ID,
  );

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    mode: plan.mode,
    tableName: plan.tableName,
    recordId: plan.recordId,
    paths: revalidated,
    airtableConfigured,
    hint: airtableConfigured
      ? "Cache cleared. Next request should read from Airtable."
      : "WARNING: AIRTABLE_API_TOKEN or AIRTABLE_BASE_ID missing — page uses mock data.",
  });
}
