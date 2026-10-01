import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { TOOLS_HUB_PATH, toolHrefByName } from "@/lib/tools/catalog";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

/**
 * Statyczna „ściana” narzędzi: siatka nazw z cienkimi liniami, bez ruchu.
 * Liczba elementów powinna dzielić się przez liczbę kolumn (12 lub 16).
 */
export function ToolsStrip({
  tools,
  title = "Pracujemy na narzędziach, które znasz",
  body = "Najczęściej łączymy to, czego już używacie, zamiast dokładać kolejne programy.",
}: {
  tools: readonly string[];
  title?: string;
  body?: string;
}) {
  const wide = tools.length > 12;

  return (
    <section aria-labelledby="narzedzia-tytul" className="border-y border-brand/10 bg-white py-12 lg:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-3">
            <h2
              id="narzedzia-tytul"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand"
            >
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
            <Link
              href={TOOLS_HUB_PATH}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5"
            >
              Jak pracujemy z narzędziami
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ul
            className={cn(
              "grid gap-px overflow-hidden rounded-2xl border border-brand/10 bg-brand/10 lg:col-span-9",
              wide ? "grid-cols-4 lg:grid-cols-8" : "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6",
            )}
          >
            {tools.map((tool) => {
              const href = toolHrefByName(tool);
              const cell =
                "flex h-16 items-center justify-center bg-white px-2 text-center text-xs font-semibold leading-tight tracking-tight text-dark/55 transition-colors duration-300 hover:bg-surface hover:text-brand sm:text-sm lg:h-[4.5rem]";
              return (
                <li key={tool} className="flex">
                  {href ? (
                    <Link href={href} className={cn(cell, "w-full")}>
                      {tool}
                    </Link>
                  ) : (
                    <span className={cn(cell, "w-full")}>{tool}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
