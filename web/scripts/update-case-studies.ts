#!/usr/bin/env npx tsx
import Airtable from "airtable";
import { readFileSync } from "fs";
import path from "path";
import { mockCaseStudies } from "../src/lib/airtable-mock";

function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    const value = trimmed.slice(eq + 1);
    if (!process.env[key]) process.env[key] = value;
  }
}

async function deleteInBatches(
  base: Airtable.Base,
  tableName: string,
  recordIds: string[],
) {
  for (let i = 0; i < recordIds.length; i += 10) {
    const batch = recordIds.slice(i, i + 10);
    await base(tableName).destroy(batch);
  }
}

async function main() {
  loadEnv();

  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_API_TOKEN;
  if (!baseId || !token) {
    throw new Error("Ustaw AIRTABLE_API_TOKEN i AIRTABLE_BASE_ID w .env.local");
  }

  const base = new Airtable({ apiKey: token }).base(baseId);
  const homeCases = mockCaseStudies.filter((item) => item.context === "home");

  const existing = await base("CaseStudies").select().all();
  if (existing.length > 0) {
    await deleteInBatches(
      base,
      "CaseStudies",
      existing.map((record) => record.id),
    );
    console.log(`✓ Usunięto poprzednie CaseStudies (${existing.length})`);
  }

  for (const item of homeCases) {
    await base("CaseStudies").create({
      Context: item.context,
      ServiceSlug: item.serviceSlug ?? "",
      Title: item.title,
      Slug: item.slug,
      Icon: item.icon,
      ImageUrl: item.imageUrl,
      ImageAlt: item.imageAlt,
      Body: item.body,
      Order: item.order,
      Published: true,
    });
  }

  console.log(`✓ Zapisano ${homeCases.length} case studies (home)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
