import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Settings } from "@/lib/airtable.types";
import Image from "next/image";

export function StatsRow({
  section,
  stats,
}: {
  section: { subtitle?: string; title: string; body?: string; buttonText?: string; buttonLink?: string; imageUrl?: string };
  stats: Settings;
}) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {section.imageUrl ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={section.imageUrl}
                alt={section.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : null}
          <div>
            <SectionHeading
              subtitle={section.subtitle}
              title={section.title}
              body={section.body}
              align="left"
            />
            {section.buttonText && section.buttonLink ? (
              <div className="mt-6">
                <Button href={section.buttonLink}>{section.buttonText}</Button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-surface p-8 text-center">
            <p className="text-5xl font-bold text-dark">{stats.statRating}</p>
            <p className="mt-2 text-sm text-muted">{stats.statRatingLabel}</p>
          </div>
          <div className="rounded-2xl bg-surface p-8 text-center">
            <p className="text-5xl font-bold text-dark">
              {stats.statPercent}
              <span className="text-2xl">%</span>
            </p>
            <p className="mt-2 text-sm text-muted">{stats.statPercentLabel}</p>
          </div>
          <div className="rounded-2xl bg-surface p-8 text-center">
            <p className="text-5xl font-bold text-dark">
              {stats.statNumber}
              <span className="text-2xl">+</span>
            </p>
            <p className="mt-2 text-sm text-muted">{stats.statNumberLabel}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
