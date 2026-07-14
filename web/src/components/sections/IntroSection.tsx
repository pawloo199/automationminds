import { cn } from "@/lib/cn";
import { Check } from "lucide-react";
import Image from "next/image";
import { ContactCtaModalButton } from "../forms/ContactCtaModalButton";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function IntroSection({
  subtitle,
  title,
  body,
  imageUrl,
  imageAlt,
  buttonText,
  buttonLink,
  listItems,
  services,
  sourcePage = "/",
  reverse = false,
}: {
  subtitle?: string;
  title: string;
  body?: string;
  imageUrl?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  listItems?: string[];
  services?: { id: string; menuLabel: string }[];
  sourcePage?: string;
  reverse?: boolean;
}) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(109,81,253,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(139,116,255,0.06),transparent_60%)]" />
      </div>

      <Container className="relative">
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-12",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div className="lg:col-span-6">
            <SectionHeading
              subtitle={subtitle}
              title={title}
              body={body}
              align="left"
              className="max-w-none"
            />
            {listItems && listItems.length > 0 ? (
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {listItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-white/70 p-4 shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-brand">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-dark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
            {buttonText && buttonLink ? (
              <div className="mt-10 flex">
                <ContactCtaModalButton
                  label={buttonText}
                  sourcePage={sourcePage}
                  services={services}
                  className="group w-full px-10 py-[1.125rem] text-base sm:w-auto md:text-lg"
                />
              </div>
            ) : null}
          </div>
          {imageUrl ? (
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand/10 bg-surface shadow-xl lg:aspect-square">
              <Image
                src={imageUrl}
                alt={imageAlt || title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-dark/10 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
