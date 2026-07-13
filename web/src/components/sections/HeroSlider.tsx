"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeroSlide } from "@/lib/airtable.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  const prev = useCallback(
    () => setActive((i) => (i === 0 ? slides.length - 1 : i - 1)),
    [slides.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === slides.length - 1 ? 0 : i + 1)),
    [slides.length],
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(next, 6000);
    return () => window.clearInterval(id);
  }, [slides.length, next]);

  if (!slide) return null;

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <Image
          key={slide.id}
          src={slide.imageUrl}
          alt={slide.title}
          fill
          priority={active === 0}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
      </div>

      <Container className="relative z-10 flex min-h-[85vh] items-center py-24">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-lg font-light text-white/80">{slide.subtitle}</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          {slide.buttonText && slide.buttonLink ? (
            <div className="mt-8">
              <Button href={slide.buttonLink}>{slide.buttonText}</Button>
            </div>
          ) : null}
        </div>
        <div className="absolute bottom-8 right-8 hidden text-[120px] font-bold leading-none text-brand/20 lg:block">
          {String(active + 1).padStart(2, "0")}
        </div>
      </Container>

      {slides.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Poprzedni slajd"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Następny slajd"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((s, index) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Slajd ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === active ? "w-8 bg-brand" : "w-2.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
