/**
 * Parser uproszczonego markdownu artykułów Poradnika.
 * Bloki oddzielone pustą linią; format opisany przy `GuideArticle.body`.
 */

export type GuideBodyBlock =
  | { type: "h2" | "h3"; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "code"; code: string }
  | { type: "cta" };

export type GuideHeading = { id: string; text: string };

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/ł/g, "l")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function tableCells(line: string): string[] {
  return line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function parseGuideBody(body: string): GuideBodyBlock[] {
  const usedIds = new Set<string>();
  const uniqueId = (text: string) => {
    const base = slugifyHeading(text) || "sekcja";
    let id = base;
    for (let i = 2; usedIds.has(id); i += 1) id = `${base}-${i}`;
    usedIds.add(id);
    return id;
  };

  return body
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block): GuideBodyBlock => {
      const lines = block.split("\n").map((line) => line.trim());

      if (block === "[[CTA]]") return { type: "cta" };
      if (block.startsWith("```") && block.endsWith("```") && block.length > 6) {
        const raw = block.split("\n");
        return { type: "code", code: raw.slice(1, -1).join("\n") };
      }
      if (block.startsWith("### ")) {
        const text = block.slice(4).trim();
        return { type: "h3", text, id: uniqueId(text) };
      }
      if (block.startsWith("## ")) {
        const text = block.slice(3).trim();
        return { type: "h2", text, id: uniqueId(text) };
      }
      if (lines.every((line) => line.startsWith("- "))) {
        return { type: "ul", items: lines.map((line) => line.slice(2)) };
      }
      if (lines.every((line) => /^\d+\.\s/.test(line))) {
        return {
          type: "ol",
          items: lines.map((line) => line.replace(/^\d+\.\s/, "")),
        };
      }
      if (lines.every((line) => line.startsWith(">"))) {
        const content = lines.map((line) => line.replace(/^>\s?/, ""));
        const titleMatch = content[0]?.match(/^\[([^\]]+)\]$/);
        return {
          type: "callout",
          title: titleMatch?.[1],
          text: (titleMatch ? content.slice(1) : content).filter(Boolean),
        };
      }
      if (lines.every((line) => line.startsWith("|"))) {
        const rows = lines
          .filter((line) => !/^\|[\s:|-]+\|$/.test(line))
          .map(tableCells);
        return { type: "table", head: rows[0] ?? [], rows: rows.slice(1) };
      }
      return { type: "paragraph", text: lines.join(" ") };
    });
}

export function extractHeadings(body: string): GuideHeading[] {
  return parseGuideBody(body).flatMap((block) =>
    block.type === "h2" ? [{ id: block.id, text: block.text }] : [],
  );
}

/** Tekst bez znaczników, do liczenia słów i opisów. */
export function plainText(body: string): string {
  return body
    .replace(/\[\[CTA\]\]/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function countWords(text: string): number {
  return plainText(text).split(" ").filter((word) => /\p{L}/u.test(word))
    .length;
}
