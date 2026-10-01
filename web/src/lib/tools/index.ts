import type { GuideArticle } from "../airtable.types";
import { getGuideArticleBySlug } from "../guide-articles";
import { getServicesBySlugs } from "../services";
import { getToolEntry, TOOLS_HUB_PATH, toolPath } from "./catalog";
import { chatgpt } from "./content/chatgpt";
import { claude } from "./content/claude";
import { googleWorkspace } from "./content/google-workspace";
import { hubspot } from "./content/hubspot";
import { ksef } from "./content/ksef";
import { make } from "./content/make";
import { microsoft365 } from "./content/microsoft-365";
import { n8n } from "./content/n8n";
import { pipedrive } from "./content/pipedrive";
import { powerAutomate } from "./content/power-automate";
import { zapier } from "./content/zapier";
import type { ToolContent } from "./types";

export * from "./catalog";
export type * from "./types";

const TOOL_CONTENT: Record<string, ToolContent> = Object.fromEntries(
  [n8n, make, zapier, powerAutomate, hubspot, pipedrive, microsoft365, googleWorkspace, ksef, chatgpt, claude].map(
    (content) => [content.slug, content],
  ),
);

export function getToolContent(slug: string) {
  return TOOL_CONTENT[slug];
}

export function getToolRelatedArticles(content: ToolContent) {
  return content.relatedArticleSlugs
    .map((slug) => getGuideArticleBySlug(slug))
    .filter((article): article is GuideArticle => Boolean(article));
}

export function getToolRelatedServices(content: ToolContent) {
  return getServicesBySlugs(content.relatedServiceSlugs);
}

export function getRelatedTools(content: ToolContent) {
  return content.relatedToolSlugs
    .map((slug) => getToolEntry(slug))
    .filter((tool) => tool !== undefined);
}

export function toolBreadcrumbs(name: string, slug: string) {
  return [
    { label: "Strona główna", href: "/" },
    { label: "Narzędzia", href: TOOLS_HUB_PATH },
    { label: name, href: toolPath(slug) },
  ];
}

if (process.env.NODE_ENV !== "production") {
  for (const content of Object.values(TOOL_CONTENT)) {
    if (!getToolEntry(content.slug)) throw new Error(`Tool ${content.slug}: missing catalog entry`);
    if (getToolRelatedServices(content).length !== content.relatedServiceSlugs.length)
      throw new Error(`Tool ${content.slug}: unknown related service`);
    if (getToolRelatedArticles(content).length !== content.relatedArticleSlugs.length)
      throw new Error(`Tool ${content.slug}: unknown related article`);
    if (getRelatedTools(content).length !== content.relatedToolSlugs.length)
      throw new Error(`Tool ${content.slug}: unknown related tool`);
  }
}
