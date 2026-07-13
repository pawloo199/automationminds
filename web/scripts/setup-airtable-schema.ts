#!/usr/bin/env npx tsx
/**
 * Tworzy tabele CMS w Airtable (Meta API).
 * Wymaga PAT z schema.bases:write + data.records:write
 *
 * Uruchomienie: npm run setup-schema
 */

import { readFileSync } from "fs";
import path from "path";

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

loadEnv();

const TOKEN = process.env.AIRTABLE_API_TOKEN;
const BASE_ID = process.env.AIRTABLE_BASE_ID;

if (!TOKEN || !BASE_ID) {
  console.error("Ustaw AIRTABLE_API_TOKEN i AIRTABLE_BASE_ID w .env.local");
  process.exit(1);
}

type FieldDef = {
  name: string;
  type: string;
  options?: Record<string, unknown>;
};

type TableDef = { name: string; fields: FieldDef[] };

const tables: TableDef[] = [
  {
    name: "Settings",
    fields: [
      { name: "Label", type: "singleLineText" },
      { name: "Phone", type: "singleLineText" },
      { name: "LogoWhiteUrl", type: "url" },
      { name: "LogoColorUrl", type: "url" },
      { name: "MetaDescription", type: "multilineText" },
      { name: "StatRating", type: "singleLineText" },
      { name: "StatRatingLabel", type: "singleLineText" },
      { name: "StatPercent", type: "singleLineText" },
      { name: "StatPercentLabel", type: "multilineText" },
      { name: "StatNumber", type: "singleLineText" },
      { name: "StatNumberLabel", type: "multilineText" },
    ],
  },
  {
    name: "HeroSlides",
    fields: [
      { name: "Title", type: "multilineText" },
      { name: "Subtitle", type: "singleLineText" },
      { name: "ImageUrl", type: "url" },
      { name: "ButtonText", type: "singleLineText" },
      { name: "ButtonLink", type: "url" },
      { name: "Order", type: "number", options: { precision: 0 } },
      {
        name: "Published",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
    ],
  },
  {
    name: "PageSections",
    fields: [
      { name: "PageSlug", type: "singleLineText" },
      { name: "SectionKey", type: "singleLineText" },
      { name: "Subtitle", type: "singleLineText" },
      { name: "Title", type: "multilineText" },
      { name: "Body", type: "multilineText" },
      { name: "ImageUrl", type: "url" },
      { name: "ButtonText", type: "singleLineText" },
      { name: "ButtonLink", type: "url" },
    ],
  },
  {
    name: "ListItems",
    fields: [
      { name: "Text", type: "multilineText" },
      { name: "PageSlug", type: "singleLineText" },
      { name: "Order", type: "number", options: { precision: 0 } },
    ],
  },
  {
    name: "FeatureTiles",
    fields: [
      { name: "Title", type: "singleLineText" },
      {
        name: "Group",
        type: "singleSelect",
        options: { choices: [{ name: "areas" }, { name: "benefits" }] },
      },
      { name: "Icon", type: "singleLineText" },
      { name: "Body", type: "multilineText" },
      { name: "Order", type: "number", options: { precision: 0 } },
      {
        name: "Published",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
    ],
  },
  {
    name: "CaseStudies",
    fields: [
      { name: "Title", type: "singleLineText" },
      {
        name: "Context",
        type: "singleSelect",
        options: { choices: [{ name: "home" }, { name: "service" }] },
      },
      { name: "ServiceSlug", type: "singleLineText" },
      { name: "Icon", type: "singleLineText" },
      { name: "ImageUrl", type: "url" },
      { name: "Body", type: "multilineText" },
      { name: "Order", type: "number", options: { precision: 0 } },
      {
        name: "Published",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
    ],
  },
  {
    name: "Tools",
    fields: [
      { name: "Name", type: "singleLineText" },
      { name: "LogoUrl", type: "url" },
      { name: "Order", type: "number", options: { precision: 0 } },
      {
        name: "Published",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
    ],
  },
  {
    name: "FAQ",
    fields: [
      { name: "Question", type: "multilineText" },
      { name: "Answer", type: "multilineText" },
      { name: "Order", type: "number", options: { precision: 0 } },
      {
        name: "Published",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
    ],
  },
  {
    name: "Services",
    fields: [
      { name: "Slug", type: "singleLineText" },
      { name: "Title", type: "singleLineText" },
      { name: "MenuLabel", type: "singleLineText" },
      { name: "BannerImageUrl", type: "url" },
      { name: "BannerTitle", type: "singleLineText" },
      { name: "IntroSubtitle", type: "singleLineText" },
      { name: "IntroTitle", type: "multilineText" },
      { name: "IntroBody", type: "multilineText" },
      { name: "IntroImageUrl", type: "url" },
      { name: "IntroButtonText", type: "singleLineText" },
      { name: "IntroButtonLink", type: "url" },
      { name: "TabsSubtitle", type: "singleLineText" },
      { name: "TabsTitle", type: "singleLineText" },
      { name: "ProcessSubtitle", type: "singleLineText" },
      { name: "ProcessTitle", type: "singleLineText" },
      { name: "Order", type: "number", options: { precision: 0 } },
      {
        name: "Published",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
    ],
  },
  {
    name: "ProcessSteps",
    fields: [
      { name: "ServiceSlug", type: "singleLineText" },
      { name: "StepNumber", type: "number", options: { precision: 0 } },
      { name: "Title", type: "singleLineText" },
      { name: "Body", type: "multilineText" },
    ],
  },
  {
    name: "ContactSubmissions",
    fields: [
      { name: "Name", type: "singleLineText" },
      { name: "Email", type: "email" },
      { name: "Phone", type: "singleLineText" },
      { name: "Message", type: "multilineText" },
      { name: "SourcePage", type: "singleLineText" },
      {
        name: "Status",
        type: "singleSelect",
        options: {
          choices: [
            { name: "New" },
            { name: "Contacted" },
            { name: "Closed" },
          ],
        },
      },
    ],
  },
];

async function metaRequest(method: string, apiPath: string, body?: unknown) {
  const res = await fetch(`https://api.airtable.com/v0/meta${apiPath}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Meta API ${method} ${apiPath} (${res.status}): ${text}`);
  }
  return text ? JSON.parse(text) : {};
}

async function main() {
  const schema = (await metaRequest(
    "GET",
    `/bases/${BASE_ID}/tables`,
  )) as { tables: { name: string }[] };

  const existing = new Set(schema.tables.map((t) => t.name));

  for (const table of tables) {
    if (existing.has(table.name)) {
      console.log(`✓ Tabela już istnieje: ${table.name}`);
      continue;
    }

    console.log(`+ Tworzę tabelę: ${table.name}`);
    await metaRequest("POST", `/bases/${BASE_ID}/tables`, {
      name: table.name,
      fields: table.fields.map((f) => ({
        name: f.name,
        type: f.type,
        ...(f.options ? { options: f.options } : {}),
      })),
    });
  }

  console.log("\nSchemat gotowy. Uruchom: npm run migrate -- --seed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
