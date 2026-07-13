import { Container } from "@/components/ui/Container";
import type { Service } from "@/lib/airtable.types";
import Link from "next/link";

export function RelatedServices({
  currentSlug,
  services,
}: {
  currentSlug: string;
  services: Service[];
}) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="bg-surface py-16">
      <Container>
        <h2 className="mb-8 text-2xl font-bold text-dark">Powiązane usługi</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((service) => (
            <Link
              key={service.id}
              href={`/uslugi/${service.slug}`}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="font-semibold text-dark">{service.menuLabel}</h3>
              <p className="mt-2 text-sm text-muted line-clamp-3">
                {service.introBody}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
