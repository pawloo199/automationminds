import type { GuideArticle } from "@/lib/airtable.types";
import {
  formatGuideDate,
  guideArticlePath,
} from "@/lib/guide-articles";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ArticleCard({ article }: { article: GuideArticle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition hover:border-brand/25 hover:shadow-md">
      <Link
        href={guideArticlePath(article.slug)}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={article.imageUrl}
          alt={article.imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-brand/10 px-2.5 py-1 font-semibold uppercase tracking-wide text-brand">
            {article.category}
          </span>
          <time dateTime={article.publishedAt}>
            {formatGuideDate(article.publishedAt)}
          </time>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {article.readTimeMinutes} min
          </span>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-dark">
          <Link
            href={guideArticlePath(article.slug)}
            className="transition hover:text-brand"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <Link
          href={guideArticlePath(article.slug)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:gap-2"
        >
          Czytaj artykuł
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
