"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/lib/airtable.types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqAccordion({
  subtitle,
  title,
  items,
}: {
  subtitle?: string;
  title: string;
  items: FaqItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading subtitle={subtitle} title={title} className="mb-12" />
        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-brand/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-dark">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-brand/10 px-6 pb-5 pt-2 text-muted">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
