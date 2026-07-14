"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Service, Settings } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header({
  settings,
  services,
  transparent = false,
}: {
  settings: Settings;
  services: Service[];
  transparent?: boolean;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      setMobileServicesOpen(false);
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = scrolled || !transparent || mobileOpen;

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const desktopNavLink = (href: string, label: string) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition",
        pathname === href
          ? "text-brand"
          : isSolid
            ? "text-dark hover:text-brand"
            : "text-white/90 hover:text-white",
      )}
    >
      {label}
    </Link>
  );

  const mobileNavLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={closeMobileMenu}
        className={cn(
          "flex min-h-12 items-center rounded-xl px-4 text-base font-semibold transition",
          isActive
            ? "bg-brand/10 text-brand"
            : "text-dark hover:bg-surface",
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        mobileOpen ? "h-auto" : "h-[72px]",
        isSolid ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="relative z-10 flex items-center" onClick={closeMobileMenu}>
          <Image
            src={isSolid ? settings.logoColorUrl : settings.logoWhiteUrl}
            alt={settings.siteName || "Automation Minds"}
            width={180}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {desktopNavLink("/", "Start")}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-sm font-medium",
                isSolid ? "text-dark hover:text-brand" : "text-white/90 hover:text-white",
              )}
            >
              Usługi
              <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen ? (
              <div className="absolute left-0 top-full z-50 w-80 pt-2">
                <div className="rounded-2xl border border-brand/10 bg-white p-2 shadow-xl">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/uslugi/${service.slug}`}
                      className="block rounded-xl px-4 py-3 text-sm text-dark hover:bg-surface"
                    >
                      {service.menuLabel}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {desktopNavLink("/poradnik", "Poradnik")}
          {desktopNavLink("/o-nas", "O nas")}
          {desktopNavLink("/kontakt", "Kontakt")}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={`tel:${settings.phone.replace(/\s/g, "")}`}
            variant={isSolid ? "primary" : "outline-white"}
            className="text-sm"
          >
            {settings.phone}
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl lg:hidden",
            isSolid ? "text-dark hover:bg-surface" : "text-white hover:bg-white/10",
          )}
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-brand/10 bg-white lg:hidden"
        >
          <Container className="max-h-[calc(100dvh-72px)] overflow-y-auto py-5">
            <nav className="flex flex-col gap-2">
              {mobileNavLink("/", "Start")}

              <div className="rounded-xl">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((value) => !value)}
                  aria-expanded={mobileServicesOpen}
                  className={cn(
                    "flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-base font-semibold transition",
                    mobileServicesOpen
                      ? "bg-brand/10 text-brand"
                      : "text-dark hover:bg-surface",
                  )}
                >
                  <span>Usługi</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform duration-200",
                      mobileServicesOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-200",
                    mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-1 px-2 pb-2 pt-1">
                      {services.map((service) => {
                        const href = `/uslugi/${service.slug}`;
                        const isActive = pathname === href;

                        return (
                          <li key={service.id}>
                            <Link
                              href={href}
                              onClick={closeMobileMenu}
                              className={cn(
                                "flex min-h-11 items-center rounded-lg px-4 py-2.5 text-[15px] leading-snug transition",
                                isActive
                                  ? "bg-brand/10 font-medium text-brand"
                                  : "text-muted hover:bg-surface hover:text-dark",
                              )}
                            >
                              {service.menuLabel}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              {mobileNavLink("/poradnik", "Poradnik")}
              {mobileNavLink("/o-nas", "O nas")}
              {mobileNavLink("/kontakt", "Kontakt")}
            </nav>

            <div className="mt-6 border-t border-brand/10 pt-6">
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                onClick={closeMobileMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Zadzwoń: {settings.phone}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
