type JsonLdNode = Record<string, unknown>;

function normalizeJsonLd(data: JsonLdNode | JsonLdNode[]): JsonLdNode | null {
  if (Array.isArray(data)) {
    const items = data.filter(Boolean);
    if (items.length === 0) return null;
    if (items.length === 1) return items[0];

    // Safari fails on top-level JSON-LD arrays; @graph avoids the parser bug.
    return {
      "@context": "https://schema.org",
      "@graph": items.map(({ "@context": _context, ...node }) => node),
    };
  }

  return data;
}

export function JsonLd({ data }: { data: JsonLdNode | JsonLdNode[] }) {
  const normalized = normalizeJsonLd(data);
  if (!normalized) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(normalized) }}
    />
  );
}
