import type { GuideArticle } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";
import {
  formatGuideDate,
  guideArticlePath,
  guideCategoryPath,
} from "@/lib/guide-articles";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Karta artykułu. Cała karta jest klikalna (link w tytule rozciągnięty
 * na kartę), a chip kategorii prowadzi osobno do strony kategorii.
 */
export function ArticleCard({
  article,
  variant = "default",
  headingLevel = "h3",
  priority = false,
}: {
  article: GuideArticle;
  variant?: "default" | "featured";
  headingLevel?: "h2" | "h3";
  priority?: boolean;
}) {
  const Heading = headingLevel;
  const featured = variant === "featured";

  return (
    <article
      className={cn(
        "group relative flex h-full overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition hover:border-brand/25 hover:shadow-md",
        featured ? "flex-col lg:flex-row" : "flex-col",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-surface",
          featured ? "aspect-[16/10] lg:aspect-auto lg:w-[55%]" : "aspect-[16/10]",
        )}
      >
        <Image
          src={article.imageUrl}
          alt={article.imageAlt}
          fill
          priority={priority}
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 55vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
        />
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col",
          featured ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6",
        )}
      >
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
          <Link
            href={guideCategoryPath(article.categorySlug)}
            className="relative z-10 rounded-full bg-brand/10 px-2.5 py-1 font-semibold uppercase tracking-wide text-brand transition hover:bg-brand hover:text-white"
          >
            {article.category}
          </Link>
          <time dateTime={article.publishedAt}>
            {formatGuideDate(article.publishedAt)}
          </time>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {article.readTimeMinutes} min czytania
          </span>
        </div>
        <Heading
          className={cn(
            "font-semibold leading-snug text-dark",
            featured ? "text-2xl sm:text-3xl" : "text-lg",
          )}
        >
          <Link
            href={guideArticlePath(article.slug)}
            className="transition after:absolute after:inset-0 after:content-[''] group-hover:text-brand"
          >
            {article.title}
          </Link>
        </Heading>
        <p
          className={cn(
            "mt-3 flex-1 leading-relaxed text-muted",
            featured ? "text-base sm:text-lg" : "line-clamp-3 text-sm",
          )}
        >
          {article.excerpt}
        </p>
        <span
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2"
          aria-hidden
        >
          Czytaj artykuł
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
