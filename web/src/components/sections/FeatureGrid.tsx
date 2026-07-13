import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FeatureTile } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";
import {
  ArrowUpRight,
  BarChart3,
  Calculator,
  Clock,
  Database,
  Factory,
  FileSpreadsheet,
  Lightbulb,
  Megaphone,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import styles from "./FeatureGrid.module.css";

const DEFAULT_LINK_LABEL = "Dowiedz się więcej";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  lightbulb: Lightbulb,
  "trending-up": TrendingUp,
  megaphone: Megaphone,
  calculator: Calculator,
  users: Users,
  "bar-chart": BarChart3,
  database: Database,
  clock: Clock,
  "file-spreadsheet": FileSpreadsheet,
  "chart-line": BarChart3,
  "messages-square": MessageSquare,
  factory: Factory,
};

function TileIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className="h-5 w-5 text-brand" aria-hidden />;
}

function AreaTileCard({
  tile,
  index,
}: {
  tile: FeatureTile;
  index: number;
}) {
  const href = tile.href?.trim();
  const isLinked = Boolean(href);
  const linkLabel = tile.linkLabel?.trim() || DEFAULT_LINK_LABEL;
  const indexLabel = String(index + 1).padStart(2, "0");

  const cardClassName = cn(
    "group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-2xl border bg-white p-5 shadow-sm",
    "transition-[transform,box-shadow,border-color] duration-300 will-change-transform",
    "max-sm:shadow-[0_10px_40px_rgba(35,35,35,0.1)]",
    isLinked
      ? "cursor-pointer border-brand/15 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 max-sm:hover:translate-y-0"
      : "border-brand/10 hover:-translate-y-1 hover:shadow-lg max-sm:hover:translate-y-0",
  );

  const content = (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(109,81,253,0.14),transparent_62%)]" />
      </div>

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/10 bg-surface transition-colors duration-300 group-hover:border-brand/20 group-hover:bg-brand/[0.06]">
          <TileIcon name={tile.icon} />
        </div>

        <span className="rounded-full border border-brand/10 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand/80">
          {indexLabel}
        </span>
      </div>

      <h3 className="relative mt-5 text-base font-semibold tracking-tight text-dark sm:text-lg">
        {tile.title}
      </h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">
        {tile.body}
      </p>

      {isLinked ? (
        <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-brand/10 pt-4 text-sm font-medium text-brand/70">
          <span>{linkLabel}</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 shrink-0 text-brand/45 transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand/80"
            aria-hidden
          />
        </div>
      ) : null}
    </>
  );

  if (isLinked && href) {
    return (
      <Link
        href={href}
        className={cardClassName}
        aria-label={`${tile.title} — ${linkLabel}`}
      >
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}

export function FeatureGrid({
  subtitle,
  title,
  tiles,
  variant = "cards",
}: {
  subtitle?: string;
  title: string;
  tiles: FeatureTile[];
  variant?: "cards" | "benefits";
}) {
  if (variant === "benefits") {
    return (
      <section className="py-20 lg:py-28">
        <Container>
          {title ? (
            <SectionHeading subtitle={subtitle} title={title} className="mb-12" />
          ) : subtitle ? (
            <p className="mb-12 text-center text-sm font-semibold uppercase tracking-widest text-brand">
              {subtitle}
            </p>
          ) : null}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((tile) => (
              <div
                key={tile.id}
                className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface">
                  <TileIcon name={tile.icon} />
                </div>
                <h3 className="text-lg font-semibold text-dark">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tile.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const linkedCount = tiles.filter((tile) => tile.href?.trim()).length;
  const summary =
    tiles.length > 0
      ? linkedCount > 0
        ? `${tiles.length} obszarów — ${linkedCount} już z dedykowanymi podstronami.`
        : `${tiles.length} obszarów — od strategii AI po wdrożenia operacyjne.`
      : undefined;

  return (
    <section className="relative bg-surface py-20 lg:py-28">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(109,81,253,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(139,116,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(35,35,35,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,35,35,0.05)_1px,transparent_1px)] [background-size:5rem_5rem] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          {title ? (
            <>
              <SectionHeading
                subtitle={subtitle}
                title={title}
                align="center"
                className="max-w-none"
              />
              {summary ? (
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {summary}
                </p>
              ) : null}
            </>
          ) : subtitle ? (
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div
          className={cn(
            styles.tileStack,
            "grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5",
          )}
        >
          {tiles.map((tile, index) => (
            <div key={tile.id} className={styles.tileStackItem}>
              <AreaTileCard tile={tile} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
