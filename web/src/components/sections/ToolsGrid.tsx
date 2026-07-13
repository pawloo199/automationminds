import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Tool } from "@/lib/airtable.types";
import Image from "next/image";

export function ToolsGrid({
  subtitle,
  title,
  tools,
}: {
  subtitle?: string;
  title: string;
  tools: Tool[];
}) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading subtitle={subtitle} title={title} className="mb-12" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex h-24 items-center justify-center rounded-xl border border-brand/10 bg-white p-4 shadow-sm"
            >
              {tool.logoUrl ? (
                <Image
                  src={tool.logoUrl}
                  alt={tool.name}
                  width={80}
                  height={40}
                  className="max-h-10 w-auto object-contain"
                />
              ) : (
                <span className="text-center text-sm font-semibold text-muted">
                  {tool.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
