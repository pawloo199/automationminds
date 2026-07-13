import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function PageBanner({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-dark">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-dark/60" />
      <Container className="relative z-10 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
      </Container>
    </section>
  );
}
