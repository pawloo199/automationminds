"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CaseStudy } from "@/lib/airtable.types";
import { caseStudyPath, getCaseStudyIcon } from "@/lib/case-study-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  const Icon = getCaseStudyIcon(current.icon);
  const paragraphs = current.body
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const preview = paragraphs[0] ?? current.body;

  return (
    <section id="case-studies" className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading subtitle={subtitle} title={title} className="mb-12" />
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ul className="space-y-2">
              {cases.map((item, index) => {
                const ItemIcon = getCaseStudyIcon(item.icon);
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
            <Link
              href={caseStudyPath(current.slug)}
              className="group relative block aspect-[16/9]"
            >
              <Image
                src={current.imageUrl}
                alt={current.imageAlt}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </Link>
            <div className="p-8">
              <div className="mb-3 flex items-center gap-2 text-brand">
                <Icon className="h-5 w-5" />
                <h3 className="text-xl font-semibold text-dark">{current.title}</h3>
              </div>
              <p className="leading-relaxed text-muted">{preview}</p>
              <div className="mt-6">
                <Button href={caseStudyPath(current.slug)}>
                  Zobacz case study
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
