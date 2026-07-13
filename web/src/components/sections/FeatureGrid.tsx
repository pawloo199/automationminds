import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FeatureTile } from "@/lib/airtable.types";
import {
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
  return <Icon className="h-6 w-6 text-brand" />;
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
  return (
    <section className={variant === "cards" ? "bg-surface py-20 lg:py-28" : "py-20 lg:py-28"}>
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
