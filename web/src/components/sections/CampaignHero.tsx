import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function CampaignHero({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  ctaText,
  ctaLink,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-dark">
      <Image
        src={imageUrl}
        alt={imageAlt || title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/50" />
      <Container className="relative z-10 flex min-h-[70vh] items-center py-20">
        <div className="max-w-3xl text-white">
          {subtitle ? (
            <p className="mb-4 text-lg font-light text-white/85">{subtitle}</p>
          ) : null}
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {ctaText && ctaLink ? (
            <div className="mt-8">
              <Button href={ctaLink}>{ctaText}</Button>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
