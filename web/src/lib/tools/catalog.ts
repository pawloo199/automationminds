import { Bot, Building2, Database, Users, Workflow } from "lucide-react";
import type { ToolCatalogEntry, ToolGroup, ToolGroupId } from "./types";

export const TOOLS_HUB_PATH = "/narzedzia";

export function toolPath(slug: string) {
  return `${TOOLS_HUB_PATH}/${slug}`;
}

export const TOOL_GROUPS: ToolGroup[] = [
  {
    id: "automatyzacja",
    name: "Platformy automatyzacji",
    description: "Narzędzia, w których budujemy przepływy łączące systemy firmy.",
    icon: Workflow,
  },
  {
    id: "crm",
    name: "CRM i sprzedaż",
    description: "Systemy, w których zespoły prowadzą klientów, szanse i lejki.",
    icon: Users,
  },
  {
    id: "biuro",
    name: "Pakiety biurowe i e-faktury",
    description: "Poczta, dokumenty, arkusze i obowiązkowa wymiana faktur.",
    icon: Building2,
  },
  {
    id: "ai",
    name: "Sztuczna inteligencja",
    description: "Modele językowe w codziennej pracy i w automatycznych przepływach.",
    icon: Bot,
  },
  {
    id: "dane",
    name: "Bazy danych",
    description: "Miejsce, w którym porządkujemy dane, zanim zaczniemy je automatyzować.",
    icon: Database,
  },
];

export const TOOLS: ToolCatalogEntry[] = [
  { slug: "n8n", name: "n8n", group: "automatyzacja", summary: "Automatyzacje i agenci AI na własnym serwerze lub w chmurze, z pełną kontrolą nad danymi." },
  { slug: "make", name: "Make", group: "automatyzacja", summary: "Wizualne scenariusze łączące setki aplikacji, dobre do złożonej logiki bez programowania." },
  { slug: "zapier", name: "Zapier", group: "automatyzacja", summary: "Najprostszy start z automatyzacją i największy wybór gotowych integracji." },
  { slug: "power-automate", name: "Power Automate", group: "automatyzacja", summary: "Automatyzacja w Microsoft 365, także dla starszych aplikacji desktopowych." },
  { slug: "hubspot", name: "HubSpot", group: "crm", summary: "CRM z marketingiem, sprzedażą i obsługą klienta w jednej platformie." },
  { slug: "pipedrive", name: "Pipedrive", group: "crm", summary: "Prosty CRM sprzedażowy z lejkiem, który handlowcy faktycznie lubią używać." },
  { slug: "microsoft-365", name: "Microsoft 365", group: "biuro", summary: "Outlook, Teams, SharePoint i Excel połączone w uporządkowane procesy." },
  { slug: "google-workspace", name: "Google Workspace", group: "biuro", summary: "Gmail, Arkusze, Dysk i Formularze jako podstawa automatyzacji w małej firmie." },
  { slug: "ksef", name: "KSeF", group: "biuro", summary: "Krajowy System e-Faktur połączony z obiegiem dokumentów i księgowością." },
  { slug: "chatgpt", name: "ChatGPT", group: "ai", summary: "Modele OpenAI w pracy zespołu i w automatycznej obsłudze dokumentów." },
  { slug: "claude", name: "Claude", group: "ai", summary: "Modele Anthropic do pracy z długimi dokumentami, wiedzą firmy i tekstem." },
  { slug: "airtable", name: "Airtable", group: "dane", summary: "Elastyczna baza danych, która zastępuje arkusze i staje się sercem procesów.", externalHref: "/uslugi/wdrozenia-airtable" },
];

export function getToolEntry(slug: string) {
  return TOOLS.find((tool) => tool.slug === slug);
}

/** Narzędzia z własną stroną w silosie. */
export function getToolPages() {
  return TOOLS.filter((tool) => !tool.externalHref);
}

export function toolHref(tool: ToolCatalogEntry) {
  return tool.externalHref ?? toolPath(tool.slug);
}

/** Link dla nazwy narzędzia z paska narzędzi lub sekcji „Technologia”. */
export function toolHrefByName(name: string) {
  const key = name.trim().toLowerCase();
  const tool = TOOLS.find((t) => t.name.toLowerCase() === key || key.startsWith(t.name.toLowerCase() + " "));
  return tool ? toolHref(tool) : undefined;
}

export function getToolGroup(id: ToolGroupId) {
  return TOOL_GROUPS.find((group) => group.id === id)!;
}
