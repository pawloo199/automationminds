import { glossaryPath } from "@/lib/glossary";
import type { GlossaryTerm } from "@/lib/glossary/types";
import Link from "next/link";

/** Pojęcia ze słownika powiązane ze stroną usługi lub narzędzia. */
export function GlossaryTermLinks({
  terms,
  title = "Pojęcia ze słownika",
}: {
  terms: GlossaryTerm[];
  title?: string;
}) {
  if (terms.length === 0) return null;
  return (
    <>
      <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
        {title}
      </h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {terms.map((term) => (
          <li key={term.slug}>
            <Link
              href={glossaryPath(term.slug)}
              className="inline-flex rounded-full border border-brand/15 bg-white px-4 py-2 text-sm font-medium text-dark transition hover:border-brand/40 hover:text-brand"
            >
              {term.term}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
