"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContactModal } from "@/components/forms/ContactModal";
import type { HeroSlide } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SWIPE_THRESHOLD_PX = 48;

export function HeroSlider({
  slides,
  phone,
  services = [],
}: {
  slides: HeroSlide[];
  phone?: string;
  services?: { id: string; menuLabel: string }[];
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const resumeAutoplayTimeout = useRef<number | null>(null);
  const slide = slides[active];
  const total = slides.length;

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  const prev = useCallback(
    () => setActive((i) => (i === 0 ? slides.length - 1 : i - 1)),
    [slides.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === slides.length - 1 ? 0 : i + 1)),
    [slides.length],
  );

  const scheduleAutoplayResume = useCallback(() => {
    if (resumeAutoplayTimeout.current) {
      window.clearTimeout(resumeAutoplayTimeout.current);
    }

    resumeAutoplayTimeout.current = window.setTimeout(() => {
      setPaused(false);
      resumeAutoplayTimeout.current = null;
    }, 8000);
  }, []);

  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLElement>) => {
    if (slides.length <= 1) return;

    const touch = event.touches[0];
    if (!touch) return;

    setPaused(true);
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }, [slides.length]);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLElement>) => {
      if (!touchStart.current || slides.length <= 1) return;

      const touch = event.changedTouches[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;
      touchStart.current = null;

      const isHorizontalSwipe =
        Math.abs(deltaX) >= SWIPE_THRESHOLD_PX &&
        Math.abs(deltaX) > Math.abs(deltaY);

      if (isHorizontalSwipe) {
        if (deltaX < 0) {
          next();
        } else {
          prev();
        }
      }

      scheduleAutoplayResume();
    },
    [slides.length, next, prev, scheduleAutoplayResume],
  );

  const handleTouchCancel = useCallback(() => {
    touchStart.current = null;
    scheduleAutoplayResume();
  }, [scheduleAutoplayResume]);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;

    let intervalId = window.setInterval(next, 7000);

    const handleVisibility = () => {
      window.clearInterval(intervalId);
      if (!document.hidden && !paused) {
        intervalId = window.setInterval(next, 7000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [slides.length, next, paused]);

  useEffect(() => {
    if (contactModalOpen) {
      setPaused(true);
    }
  }, [contactModalOpen]);

  useEffect(() => {
    return () => {
      if (resumeAutoplayTimeout.current) {
        window.clearTimeout(resumeAutoplayTimeout.current);
      }
    };
  }, []);

  if (!slide) return null;

  return (
    <section
      className="relative min-h-[90vh] overflow-hidden bg-dark touch-pan-y md:touch-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="absolute inset-0" aria-hidden>
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-out",
              index === active ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={item.imageUrl}
              alt=""
              fill
              priority={index === 0}
              className={cn(
                "object-cover",
                index === active && "hero-ken-burns",
              )}
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/70 to-dark/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-dark/35" />
        <div className="absolute -right-1/4 top-0 h-[70%] w-[55%] bg-[radial-gradient(circle_at_center,rgba(109,81,253,0.28),transparent_68%)]" />
      </div>

      <div className="hero-grid" aria-hidden>
        <div className="hero-grid__base" />
        <div className="hero-grid__accent" />
      </div>

      <Container className="relative z-10 flex min-h-[90vh] items-center py-28 md:py-32">
        <div className="w-full max-w-4xl md:px-12 lg:max-w-none lg:px-16 xl:px-14">
          <div key={slide.id} className="hero-content-enter text-center sm:text-left">
            <div className="mb-6 flex items-center justify-center gap-4 sm:justify-start">
              <span className="hidden h-px w-10 bg-brand sm:block sm:w-14" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-light sm:text-sm">
                {slide.subtitle}
              </p>
            </div>

            <h1 className="mx-auto max-w-[18ch] text-4xl font-bold leading-[1.06] tracking-tight text-white sm:mx-0 sm:max-w-none sm:text-5xl lg:max-w-4xl lg:text-[3.25rem] xl:max-w-5xl xl:text-[3.5rem]">
              {slide.title}
            </h1>

            {slide.description ? (
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:mx-0 lg:max-w-3xl lg:text-[0.9375rem] xl:max-w-4xl">
                {slide.description}
              </p>
            ) : null}

            {(slide.buttonText && (slide.buttonOpensModal || slide.buttonLink)) ||
            phone ? (
              <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-start">
                {slide.buttonText && slide.buttonOpensModal ? (
                  <Button
                    type="button"
                    onClick={() => setContactModalOpen(true)}
                    className="group w-full px-8 py-4 text-base sm:w-auto md:px-10 md:py-[1.125rem] md:text-lg"
                  >
                    {slide.buttonText}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 md:h-5 md:w-5"
                      aria-hidden
                    />
                  </Button>
                ) : slide.buttonText && slide.buttonLink ? (
                  <Button
                    href={slide.buttonLink}
                    className="group w-full px-8 py-4 text-base sm:w-auto md:px-10 md:py-[1.125rem] md:text-lg"
                  >
                    {slide.buttonText}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 md:h-5 md:w-5"
                      aria-hidden
                    />
                  </Button>
                ) : null}
                {phone ? (
                  <Button
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    variant="outline-white"
                    className="w-full px-8 py-4 text-base sm:w-auto md:px-10 md:py-[1.125rem] md:text-lg"
                  >
                    {phone}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </Container>

      {total > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Poprzedni slajd"
            className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-dark/30 p-3.5 text-white transition-colors duration-300 hover:border-brand/60 hover:bg-brand/15 md:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Następny slajd"
            className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-dark/30 p-3.5 text-white transition-colors duration-300 hover:border-brand/60 hover:bg-brand/15 md:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-dark/20">
            <Container className="flex items-center gap-6 py-5 md:px-12 lg:px-8">
              <div className="flex shrink-0 items-baseline gap-2 tabular-nums">
                <span className="text-2xl font-bold text-white">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/35">/</span>
                <span className="text-sm text-white/55">
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <div className="hidden flex-1 items-center gap-2 sm:flex">
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Slajd ${index + 1}`}
                    aria-current={index === active ? "true" : undefined}
                    onClick={() => goTo(index)}
                    className="group relative h-px flex-1 overflow-hidden bg-white/15"
                  >
                    <span
                      className={cn(
                        "absolute inset-y-0 left-0 bg-brand transition-[width,opacity] duration-500 ease-out",
                        index === active
                          ? "w-full opacity-100"
                          : index < active
                            ? "w-full opacity-25"
                            : "w-0 opacity-100",
                      )}
                    />
                  </button>
                ))}
              </div>

              <div className="ml-auto flex items-center gap-2 sm:hidden">
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Slajd ${index + 1}`}
                    aria-current={index === active ? "true" : undefined}
                    onClick={() => goTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === active ? "w-7 bg-brand" : "w-2 bg-white/40",
                    )}
                  />
                ))}
              </div>
            </Container>
          </div>
        </>
      ) : null}

      <div className="pointer-events-none absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/45 lg:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Przewiń
        </span>
        <ChevronDown className="hero-scroll-hint h-4 w-4" aria-hidden />
      </div>

      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        sourcePage="/"
        services={services}
      />
    </section>
  );
}
