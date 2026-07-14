import { ArticleCard } from "@/components/guide/ArticleCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { GuideArticle } from "@/lib/airtable.types";
import { ArrowUpRight } from "lucide-react";

export function GuideArticlesSection({
  subtitle,
  title,
  body,
  articles,
  buttonText = "Więcej artykułów",
  buttonLink = "/poradnik",
}: {
  subtitle?: string;
  title: string;
  body?: string;
  articles: GuideArticle[];
  buttonText?: string;
  buttonLink?: string;
}) {
  if (articles.length === 0) return null;

  return (
    <section id="poradnik" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          subtitle={subtitle}
          title={title}
          body={body}
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href={buttonLink}>
            {buttonText}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
