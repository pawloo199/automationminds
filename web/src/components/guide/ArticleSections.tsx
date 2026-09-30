import type {
  GuideAuthor,
  GuideFaqItem,
} from "@/lib/airtable.types";
import type { GuideHeading } from "@/lib/guide-content/body";
import { servicePath } from "@/lib/services/catalog";
import type { ServiceCatalogEntry } from "@/lib/services/types";
import { ArrowUpRight, ChevronDown, ListChecks } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FAQ_HEADING: GuideHeading = {
  id: "najczesciej-zadawane-pytania",
  text: "Najczęściej zadawane pytania",
};

export function ArticleSummary({ items }: { items: string[] }) {
  return (
    <section
      aria-labelledby="w-skrocie"
      className="rounded-2xl border border-brand/15 bg-surface p-6 sm:p-7"
    >
      <h2
        id="w-skrocie"
        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand"
      >
        <ListChecks className="h-4 w-4" aria-hidden />W skrócie
      </h2>
      <ul className="mt-4 space-y-2.5 text-base leading-relaxed text-dark">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TocList({ headings }: { headings: GuideHeading[] }) {
  return (
    <ol className="space-y-2 text-sm">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className="block leading-snug text-muted transition hover:text-brand"
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Spis treści zwijany (mobile, w kolumnie tekstu). */
export function ArticleTocMobile({ headings }: { headings: GuideHeading[] }) {
  if (headings.length < 3) return null;
  return (
    <details className="group rounded-2xl border border-brand/10 bg-white p-5 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-dark">
        Spis treści
        <ChevronDown
          className="h-5 w-5 text-brand transition group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <nav aria-label="Spis treści" className="mt-4">
        <TocList headings={headings} />
      </nav>
    </details>
  );
}

/** Spis treści w bocznej kolumnie (desktop). */
export function ArticleTocSidebar({
  headings,
}: {
  headings: GuideHeading[];
}) {
  if (headings.length < 3) return null;
  return (
    <nav
      aria-label="Spis treści artykułu"
      className="rounded-2xl border border-brand/10 bg-white p-5"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-dark">
        W tym artykule
      </p>
      <TocList headings={headings} />
    </nav>
  );
}

export function ArticleFaq({ items }: { items: GuideFaqItem[] }) {
  return (
    <section aria-labelledby={FAQ_HEADING.id} className="mt-14">
      <h2
        id={FAQ_HEADING.id}
        className="scroll-mt-28 text-2xl font-bold leading-tight text-dark sm:text-3xl"
      >
        {FAQ_HEADING.text}
      </h2>
      <div className="mt-6 space-y-3">
        {items.map((item, index) => (
          <details
            key={item.question}
            open={index === 0}
            className="group overflow-hidden rounded-2xl border border-brand/10 bg-white"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-dark sm:px-6">
              <h3 className="text-base sm:text-lg">{item.question}</h3>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-brand transition group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="border-t border-brand/10 px-5 pb-5 pt-3 text-base leading-relaxed text-muted sm:px-6">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function ArticleAuthor({ author }: { author: GuideAuthor }) {
  return (
    <section
      id="autor"
      aria-label="O autorze"
      className="mt-14 flex scroll-mt-28 flex-col gap-5 rounded-2xl border border-brand/10 bg-surface p-6 sm:flex-row sm:p-7"
    >
      {author.imageUrl ? (
        <Image
          src={author.imageUrl}
          alt={author.name}
          width={80}
          height={80}
          className="h-20 w-20 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white"
          aria-hidden
        >
          {initials(author.name)}
        </span>
      )}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
          Autor
        </p>
        <p className="mt-1 text-lg font-bold text-dark">{author.name}</p>
        <p className="text-sm text-muted">{author.jobTitle}</p>
        <p className="mt-3 text-base leading-relaxed text-muted">{author.bio}</p>
        {author.linkedinUrl ? (
          <a
            href={author.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer me"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
          >
            Profil na LinkedIn
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        ) : null}
      </div>
    </section>
  );
}

export function ArticleServices({
  services,
}: {
  services: ServiceCatalogEntry[];
}) {
  if (services.length === 0) return null;
  return (
    <section aria-labelledby="jak-mozemy-pomoc" className="mt-14">
      <h2
        id="jak-mozemy-pomoc"
        className="text-2xl font-bold leading-tight text-dark"
      >
        Jak możemy pomóc
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={servicePath(service.slug)}
            className="group flex flex-col justify-between rounded-2xl border border-brand/10 bg-white p-5 transition hover:border-brand/30 hover:shadow-md"
          >
            <div>
              <p className="font-semibold text-dark">{service.name}</p>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                {service.menuDescription}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Zobacz usługę
              <ArrowUpRight
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
