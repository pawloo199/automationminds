const ALLOWED_TAGS = new Set(["p", "br", "strong", "em", "a", "ul", "ol", "li"]);

export function sanitizeSimpleHtml(html: string): string {
  if (!html) return "";

  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, (match, tag: string) => {
      const normalized = tag.toLowerCase();
      if (!ALLOWED_TAGS.has(normalized)) return "";
      if (match.startsWith("</")) return `</${normalized}>`;
      if (normalized === "br") return "<br />";
      if (normalized === "a") {
        const hrefMatch = match.match(/href\s*=\s*["']([^"']+)["']/i);
        const href = hrefMatch?.[1] ?? "";
        if (!href || href.startsWith("javascript:")) return "<a>";
        return `<a href="${href.replace(/"/g, "&quot;")}">`;
      }
      return `<${normalized}>`;
    });
}
