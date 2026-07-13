"use client";

import { cn } from "@/lib/cn";
import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function IntroSection({
  subtitle,
  title,
  body,
  imageUrl,
  buttonText,
  buttonLink,
  listItems,
  reverse = false,
}: {
  subtitle?: string;
  title: string;
  body?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  listItems?: string[];
  reverse?: boolean;
}) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div>
            <SectionHeading
              subtitle={subtitle}
              title={title}
              body={body}
              align="left"
            />
            {listItems && listItems.length > 0 ? (
              <ul className="mt-8 space-y-4">
                {listItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-brand">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {buttonText && buttonLink ? (
              <div className="mt-8">
                <Button href={buttonLink}>{buttonText}</Button>
              </div>
            ) : null}
          </div>
          {imageUrl ? (
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
