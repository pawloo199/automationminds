"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CaseStudy } from "@/lib/airtable.types";
import {
  Calculator,
  Factory,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  users: Users,
  calculator: Calculator,
  factory: Factory,
};

export function TabbedCases({
  subtitle,
  title,
  cases,
}: {
  subtitle?: string;
  title: string;
  cases: CaseStudy[];
}) {
  const [active, setActive] = useState(0);
  const current = cases[active];

  if (!current) return null;

  const Icon = iconMap[current.icon] ?? TrendingUp;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading subtitle={subtitle} title={title} className="mb-12" />
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ul className="space-y-2">
              {cases.map((item, index) => {
                const ItemIcon = iconMap[item.icon] ?? TrendingUp;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                        index === active
                          ? "bg-brand text-white shadow-md"
                          : "bg-white text-dark hover:bg-brand/5"
                      }`}
                    >
                      <ItemIcon className="h-5 w-5 shrink-0" />
                      <span className="font-medium">{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg lg:col-span-8">
            <div className="relative aspect-[16/9]">
              <Image
                src={current.imageUrl}
                alt={current.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            <div className="p-8">
              <div className="mb-3 flex items-center gap-2 text-brand">
                <Icon className="h-5 w-5" />
                <h3 className="text-xl font-semibold text-dark">{current.title}</h3>
              </div>
              <p className="leading-relaxed text-muted">{current.body}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
