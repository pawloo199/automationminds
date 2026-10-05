import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { parseGuideBody } from "@/lib/guide-content/body";
import { ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const INLINE_PATTERN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

function renderInline(text: string): ReactNode[] {
  return text.split(INLINE_PATTERN).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-dark">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.length > 2 && part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.9em] text-dark">
          {part.slice(1, -1)}
        </code>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const className =
        "font-medium text-brand underline decoration-brand/30 underline-offset-2 transition hover:decoration-brand";
      return href.startsWith("/") || href.startsWith("#") ? (
        <Link key={index} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a
          key={index}
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

export function ArticleInlineCta({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <aside className="!my-10 rounded-2xl bg-dark p-6 text-white sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
        {CONSULTATION_OFFER.durationLabel}
      </p>
      <p className="mt-3 text-xl font-bold leading-snug sm:text-2xl">{title}</p>
      <p className="mt-3 text-base leading-relaxed text-white/80">{body}</p>
      <Link
        href="#kontakt"
        data-track="consultation"
        data-track-location="guide_inline_cta"
        data-track-method="anchor"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
      >
        {CONSULTATION_OFFER.cta}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </aside>
  );
}

export function ArticleBody({
  body,
  cta,
}: {
  body: string;
  cta: { title: string; body: string };
}) {
  const blocks = parseGuideBody(body);

  return (
    <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={block.id}
                id={block.id}
                className="!mt-12 scroll-mt-28 text-2xl font-bold leading-tight text-dark first:!mt-0 sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={block.id}
                id={block.id}
                className="!mt-8 scroll-mt-28 text-xl font-semibold text-dark"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="space-y-2 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      aria-hidden
                    />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="space-y-3">
                {block.items.map((item, itemIndex) => (
                  <li key={item} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                      {itemIndex + 1}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="rounded-2xl border border-brand/15 bg-brand/5 p-5 sm:p-6"
              >
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand">
                  <Lightbulb className="h-4 w-4" aria-hidden />
                  {block.title ?? "Wskazówka"}
                </p>
                {block.text.map((line) => (
                  <p key={line} className="mt-2 text-base text-dark">
                    {renderInline(line)}
                  </p>
                ))}
              </aside>
            );
          case "table":
            return (
              <div
                key={index}
                className="overflow-x-auto rounded-2xl border border-brand/10"
              >
                <table className="w-full min-w-[32rem] text-left text-sm sm:text-base">
                  <thead className="bg-surface text-dark">
                    <tr>
                      {block.head.map((cell) => (
                        <th key={cell} scope="col" className="px-4 py-3 font-semibold">
                          {renderInline(cell)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-t border-brand/10">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 align-top">
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "code":
            return (
              <pre
                key={index}
                className="overflow-x-auto rounded-2xl bg-dark p-5 font-mono text-sm leading-relaxed text-white/90"
              >
                <code>{block.code}</code>
              </pre>
            );
          case "cta":
            return <ArticleInlineCta key={index} {...cta} />;
          default:
            return <p key={index}>{renderInline(block.text)}</p>;
        }
      })}
    </div>
  );
}
