#!/usr/bin/env npx tsx
import Airtable from "airtable";
import { readFileSync } from "fs";
import path from "path";
import { getMockHomePageData } from "../src/lib/airtable-mock";

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

async function main() {
  loadEnv();

  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_API_TOKEN;
  if (!baseId || !token) {
    throw new Error("Ustaw AIRTABLE_API_TOKEN i AIRTABLE_BASE_ID w .env.local");
  }

  const base = new Airtable({ apiKey: token }).base(baseId);
  const section = getMockHomePageData().areasHeader;

  if (!section) {
    throw new Error("Brak mock areasHeader");
  }

  const fields = {
    PageSlug: "home",
    SectionKey: "areas-header",
    Subtitle: section.subtitle,
    Title: section.title,
    Body: section.body ?? "",
    ImageUrl: section.imageUrl ?? "",
    ImageAlt: section.imageAlt ?? "",
    ButtonText: section.buttonText ?? "",
    ButtonLink: section.buttonLink ?? "",
  };

  const records = await base("PageSections")
    .select({
      filterByFormula: "AND({PageSlug}='home',{SectionKey}='areas-header')",
      maxRecords: 5,
    })
    .all();

  if (records.length === 0) {
    await base("PageSections").create(fields);
    console.log("✓ Utworzono PageSections home::areas-header");
    return;
  }

  for (const record of records) {
    await base("PageSections").update(record.id, fields);
  }
  console.log(`✓ Zaktualizowano PageSections home::areas-header (${records.length})`);
  console.log(`  ButtonText: ${fields.ButtonText}`);
  console.log(`  ButtonLink: ${fields.ButtonLink}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
