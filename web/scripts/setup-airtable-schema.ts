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

const dateTimeOptions = {
  timeZone: "Europe/Warsaw",
  dateFormat: { name: "iso" },
  timeFormat: { name: "24hour" },
};

const tables: TableDef[] = [
  {
    name: "Settings",
    fields: [
      { name: "Label", type: "singleLineText" },
      { name: "SiteName", type: "singleLineText" },
      { name: "Phone", type: "singleLineText" },
      { name: "Email", type: "email" },
      { name: "Address", type: "singleLineText" },
      { name: "LogoWhiteUrl", type: "url" },
      { name: "LogoColorUrl", type: "url" },
      { name: "MetaDescription", type: "multilineText" },
      { name: "DefaultOgImageUrl", type: "url" },
      { name: "GoogleSiteVerification", type: "singleLineText" },
      { name: "StatRating", type: "singleLineText" },
      { name: "StatRatingLabel", type: "singleLineText" },
      { name: "StatPercent", type: "singleLineText" },
      { name: "StatPercentLabel", type: "multilineText" },
      { name: "StatNumber", type: "singleLineText" },
      { name: "StatNumberLabel", type: "multilineText" },
      { name: "StatDeployments", type: "singleLineText" },
      { name: "StatDeploymentsLabel", type: "multilineText" },
    ],
  },
  {
    name: "HeroSlides",
    fields: [
      { name: "Title", type: "multilineText" },
      { name: "Subtitle", type: "singleLineText" },
      { name: "Description", type: "multilineText" },
      { name: "ImageUrl", type: "url" },
      { name: "ButtonText", type: "singleLineText" },
      { name: "ButtonLink", type: "url" },
      {
        name: "ButtonOpensModal",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
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
      { name: "ImageAlt", type: "singleLineText" },
      { name: "ButtonText", type: "singleLineText" },
      { name: "ButtonLink", type: "url" },
      { name: "CitiesSubtitle", type: "singleLineText" },
      { name: "CitiesTitle", type: "singleLineText" },
      { name: "CitiesBody", type: "multilineText" },
      { name: "MetaTitle", type: "singleLineText" },
      { name: "MetaDescription", type: "multilineText" },
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
        options: { choices: [{ name: "areas" }] },
      },
      { name: "Icon", type: "singleLineText" },
      { name: "Body", type: "multilineText" },
      { name: "Href", type: "singleLineText" },
      { name: "LinkLabel", type: "singleLineText" },
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
      { name: "Slug", type: "singleLineText" },
      {
        name: "Context",
        type: "singleSelect",
        options: { choices: [{ name: "home" }, { name: "service" }] },
      },
      { name: "ServiceSlug", type: "singleLineText" },
      { name: "Icon", type: "singleLineText" },
      { name: "ImageUrl", type: "url" },
      { name: "ImageAlt", type: "singleLineText" },
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
    name: "CitySilos",
    fields: [
      { name: "Name", type: "singleLineText" },
      { name: "Href", type: "singleLineText" },
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
      { name: "Keywords", type: "singleLineText" },
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
      { name: "MetaTitle", type: "singleLineText" },
      { name: "MetaDescription", type: "multilineText" },
      { name: "OgImageUrl", type: "url" },
      { name: "UpdatedAt", type: "dateTime", options: dateTimeOptions },
      { name: "BannerImageUrl", type: "url" },
      { name: "BannerTitle", type: "singleLineText" },
      { name: "IntroSubtitle", type: "singleLineText" },
      { name: "IntroTitle", type: "multilineText" },
      { name: "IntroBody", type: "multilineText" },
      { name: "IntroImageUrl", type: "url" },
      { name: "IntroImageAlt", type: "singleLineText" },
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
      { name: "FirstName", type: "singleLineText" },
      { name: "LastName", type: "singleLineText" },
      { name: "Name", type: "singleLineText" },
      { name: "Email", type: "email" },
      { name: "Phone", type: "singleLineText" },
      { name: "Company", type: "singleLineText" },
      {
        name: "ConsentGiven",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
      { name: "Message", type: "multilineText" },
      { name: "AdditionalNotes", type: "multilineText" },
      {
        name: "EmployeeCount",
        type: "singleSelect",
        options: {
          choices: [
            { name: "1–10" },
            { name: "11–50" },
            { name: "51–200" },
            { name: "201–500" },
            { name: "500+" },
          ],
        },
      },
      {
        name: "Industry",
        type: "singleSelect",
        options: {
          choices: [
            { name: "IT / technologie" },
            { name: "E-commerce" },
            { name: "Produkcja" },
            { name: "Usługi profesjonalne" },
            { name: "Finanse i ubezpieczenia" },
            { name: "Zdrowie i medycyna" },
            { name: "Edukacja" },
            { name: "Inna" },
          ],
        },
      },
      { name: "InterestedServices", type: "multilineText" },
      {
        name: "FormStep",
        type: "singleSelect",
        options: {
          choices: [{ name: "1" }, { name: "2" }],
        },
      },
      { name: "SourcePage", type: "singleLineText" },
      { name: "UtmSource", type: "singleLineText" },
      { name: "UtmMedium", type: "singleLineText" },
      { name: "UtmCampaign", type: "singleLineText" },
      { name: "UtmTerm", type: "singleLineText" },
      { name: "UtmContent", type: "singleLineText" },
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
  {
    name: "LandingPages",
    fields: [
      { name: "Slug", type: "singleLineText" },
      { name: "CampaignName", type: "singleLineText" },
      {
        name: "Published",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
      { name: "MetaTitle", type: "singleLineText" },
      { name: "MetaDescription", type: "multilineText" },
      { name: "HeroTitle", type: "multilineText" },
      { name: "HeroSubtitle", type: "singleLineText" },
      { name: "HeroImageUrl", type: "url" },
      { name: "HeroImageAlt", type: "singleLineText" },
      { name: "PrimaryCtaText", type: "singleLineText" },
      { name: "PrimaryCtaLink", type: "url" },
      { name: "SocialProof", type: "singleLineText" },
      { name: "RelatedServiceSlug", type: "singleLineText" },
      {
        name: "FormEnabled",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
      {
        name: "NoIndex",
        type: "checkbox",
        options: { icon: "check", color: "greenBright" },
      },
      { name: "UpdatedAt", type: "dateTime", options: dateTimeOptions },
    ],
  },
  {
    name: "LandingBenefits",
    fields: [
      { name: "LandingSlug", type: "singleLineText" },
      { name: "Title", type: "singleLineText" },
      { name: "Body", type: "multilineText" },
      { name: "Order", type: "number", options: { precision: 0 } },
    ],
  },
  {
    name: "LandingSections",
    fields: [
      { name: "LandingSlug", type: "singleLineText" },
      { name: "Title", type: "singleLineText" },
      { name: "Body", type: "multilineText" },
      { name: "Order", type: "number", options: { precision: 0 } },
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
  )) as {
    tables: { id: string; name: string; fields: { name: string }[] }[];
  };

  const existing = new Map(schema.tables.map((t) => [t.name, t]));

  for (const table of tables) {
    const current = existing.get(table.name);
    if (!current) {
      console.log(`+ Tworzę tabelę: ${table.name}`);
      await metaRequest("POST", `/bases/${BASE_ID}/tables`, {
        name: table.name,
        fields: table.fields.map((f) => ({
          name: f.name,
          type: f.type,
          ...(f.options ? { options: f.options } : {}),
        })),
      });
      continue;
    }

    console.log(`✓ Tabela już istnieje: ${table.name}`);
    const fieldNames = new Set(current.fields.map((f) => f.name));
    for (const field of table.fields) {
      if (fieldNames.has(field.name)) continue;
      console.log(`  + Dodaję pole ${table.name}.${field.name}`);
      await metaRequest(
        "POST",
        `/bases/${BASE_ID}/tables/${current.id}/fields`,
        {
          name: field.name,
          type: field.type,
          ...(field.options ? { options: field.options } : {}),
        },
      );
    }
  }

  console.log("\nSchemat gotowy. Uruchom: npm run migrate -- --seed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
