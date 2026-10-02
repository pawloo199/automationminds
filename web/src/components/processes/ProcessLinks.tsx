import { processPath, type ProcessCatalogEntry } from "@/lib/processes";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

/** Lista opisanych procesów w sekcjach „Zobacz też”. */
export function ProcessLinks({ processes, title = "Opisane procesy" }: { processes: ProcessCatalogEntry[]; title?: string }) {
  if (processes.length === 0) return null;
  return (
    <>
      <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">{title}</h3>
      <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {processes.map((process) => (
          <li key={process.slug}>
            <Link
              href={processPath(process.slug)}
              className="group flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="text-lg font-semibold text-dark group-hover:text-brand">{process.name}</span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-brand/50 group-hover:text-brand" aria-hidden />
              </span>
              <span className="mt-2 text-sm leading-relaxed text-muted">{process.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
