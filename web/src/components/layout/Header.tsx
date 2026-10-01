"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Settings } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  getPublishedServicesByGroup,
  servicePath,
  SERVICES_HUB_PATH,
} from "@/lib/services/catalog";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TOOLS_HUB_PATH } from "@/lib/tools/catalog";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type HeaderGuideCategory = { slug: string; name: string };

const SERVICE_MENU = getPublishedServicesByGroup();


export function Header({
  settings,
  guideCategories = [],
  transparent = false,
}: {
  settings: Settings;
  guideCategories?: HeaderGuideCategory[];
  transparent?: boolean;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [mobileGuideOpen, setMobileGuideOpen] = useState(false);
  const isGuideActive = pathname.startsWith("/poradnik");
  const isServicesActive = pathname.startsWith(SERVICES_HUB_PATH);

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
    setMobileGuideOpen(false);
    setGuideOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      setMobileServicesOpen(false);
      setMobileGuideOpen(false);
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = scrolled || !transparent || mobileOpen || servicesOpen;

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileGuideOpen(false);
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
            className="flex h-[72px] items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setServicesOpen(false);
              }
            }}
          >
            <Link
              href={SERVICES_HUB_PATH}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="mega-menu-uslugi"
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition",
                isServicesActive
                  ? "text-brand"
                  : isSolid
                    ? "text-dark hover:text-brand"
                    : "text-white/90 hover:text-white",
              )}
            >
              Usługi
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
                aria-hidden
              />
            </Link>
            <div
              id="mega-menu-uslugi"
              className={cn(
                "absolute inset-x-0 top-full z-50 border-t border-brand/10 bg-white shadow-2xl shadow-dark/10 transition duration-200",
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0",
              )}
            >
              <Container className="py-8">
                <div className="grid grid-cols-4 gap-x-8">
                  {SERVICE_MENU.map(({ group, services: groupServices }) => {
                    const Icon = group.icon;
                    return (
                      <div key={group.id}>
                        <Link
                          href={`${SERVICES_HUB_PATH}#${group.id}`}
                          className="group/heading flex items-start gap-3 rounded-xl p-2 -m-2 transition hover:bg-surface"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                            <Icon className="h-[18px] w-[18px]" aria-hidden />
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-dark group-hover/heading:text-brand">
                              {group.name}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-muted">
                              {group.description}
                            </span>
                          </span>
                        </Link>
                        <ul className="mt-4 space-y-0.5 border-l border-brand/10 pl-3">
                          {groupServices.map((service) => {
                            const href = servicePath(service.slug);
                            const isActive = pathname === href;
                            return (
                              <li key={service.slug}>
                                <Link
                                  href={href}
                                  title={service.menuDescription}
                                  className={cn(
                                    "block rounded-lg px-3 py-1.5 text-sm leading-snug transition hover:bg-surface hover:text-brand",
                                    isActive ? "bg-brand/5 font-semibold text-brand" : "text-dark",
                                  )}
                                >
                                  {service.menuLabel}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex items-center justify-between gap-6 rounded-2xl bg-surface px-6 py-4">
                  <p className="text-sm text-dark">
                    <span className="font-semibold">Nie wiesz, od czego zacząć?</span>{" "}
                    <span className="text-muted">
                      {CONSULTATION_OFFER.durationLabel}. Wskażemy, co zautomatyzować najpierw.
                    </span>
                  </p>
                  <div className="flex shrink-0 items-center gap-6">
                    <Link
                      href={TOOLS_HUB_PATH}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark transition-all hover:gap-2.5 hover:text-brand"
                    >
                      Narzędzia
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href={SERVICES_HUB_PATH}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5"
                    >
                      Wszystkie usługi
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="/kontakt"
                      data-track="consultation"
                      data-track-method="link"
                      data-track-location="mega_menu"
                      className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                    >
                      Umów konsultację
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          {guideCategories.length > 0 ? (
            <div
              className="relative"
              onMouseEnter={() => setGuideOpen(true)}
              onMouseLeave={() => setGuideOpen(false)}
              onFocus={() => setGuideOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setGuideOpen(false);
                }
              }}
            >
              <Link
                href="/poradnik"
                aria-haspopup="true"
                aria-expanded={guideOpen}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition",
                  isGuideActive
                    ? "text-brand"
                    : isSolid
                      ? "text-dark hover:text-brand"
                      : "text-white/90 hover:text-white",
                )}
              >
                Poradnik
                <ChevronDown className="h-4 w-4" aria-hidden />
              </Link>
              {guideOpen ? (
                <div className="absolute left-0 top-full z-50 w-72 pt-2">
                  <div className="rounded-2xl border border-brand/10 bg-white p-2 shadow-xl">
                    <Link
                      href="/poradnik"
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand hover:bg-surface"
                    >
                      Wszystkie artykuły
                    </Link>
                    {guideCategories.map((category) => {
                      const href = `/poradnik/kategoria/${category.slug}`;
                      return (
                        <Link
                          key={category.slug}
                          href={href}
                          className={cn(
                            "block rounded-xl px-4 py-3 text-sm hover:bg-surface",
                            pathname === href ? "text-brand" : "text-dark",
                          )}
                        >
                          {category.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            desktopNavLink("/poradnik", "Poradnik")
          )}
          {desktopNavLink("/o-nas", "O nas")}
          {desktopNavLink("/kontakt", "Kontakt")}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={`tel:${settings.phone.replace(/\s/g, "")}`}
            variant={isSolid ? "primary" : "outline-white"}
            className="text-sm"
            data-track-location="header"
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
                    <div className="space-y-4 px-2 pb-3 pt-2">
                      <Link
                        href={SERVICES_HUB_PATH}
                        onClick={closeMobileMenu}
                        className="flex min-h-11 items-center rounded-lg px-4 py-2.5 text-[15px] font-semibold text-brand hover:bg-surface"
                      >
                        Wszystkie usługi
                      </Link>
                      <Link
                        href={TOOLS_HUB_PATH}
                        onClick={closeMobileMenu}
                        className="flex min-h-11 items-center rounded-lg px-4 py-2.5 text-[15px] font-semibold text-dark hover:bg-surface"
                      >
                        Narzędzia, które wdrażamy
                      </Link>
                      {SERVICE_MENU.map(({ group, services: groupServices }) => (
                        <div key={group.id}>
                          <p className="px-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            {group.name}
                          </p>
                          <ul className="mt-1 space-y-1">
                            {groupServices.map((service) => {
                              const href = servicePath(service.slug);
                              const isActive = pathname === href;
                              return (
                                <li key={service.slug}>
                                  <Link
                                    href={href}
                                    onClick={closeMobileMenu}
                                    className={cn(
                                      "flex min-h-11 items-center rounded-lg px-4 py-2.5 text-[15px] leading-snug transition",
                                      isActive
                                        ? "bg-brand/10 font-medium text-brand"
                                        : "text-dark hover:bg-surface",
                                    )}
                                  >
                                    {service.menuLabel}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {guideCategories.length > 0 ? (
                <div className="rounded-xl">
                  <button
                    type="button"
                    onClick={() => setMobileGuideOpen((value) => !value)}
                    aria-expanded={mobileGuideOpen}
                    className={cn(
                      "flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-base font-semibold transition",
                      mobileGuideOpen || isGuideActive
                        ? "bg-brand/10 text-brand"
                        : "text-dark hover:bg-surface",
                    )}
                  >
                    <span>Poradnik</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-200",
                        mobileGuideOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200",
                      mobileGuideOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-1 px-2 pb-2 pt-1">
                        {[
                          { href: "/poradnik", label: "Wszystkie artykuły" },
                          ...guideCategories.map((category) => ({
                            href: `/poradnik/kategoria/${category.slug}`,
                            label: category.name,
                          })),
                        ].map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={closeMobileMenu}
                                className={cn(
                                  "flex min-h-11 items-center rounded-lg px-4 py-2.5 text-[15px] leading-snug transition",
                                  isActive
                                    ? "bg-brand/10 font-medium text-brand"
                                    : "text-muted hover:bg-surface hover:text-dark",
                                )}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                mobileNavLink("/poradnik", "Poradnik")
              )}
              {mobileNavLink("/o-nas", "O nas")}
              {mobileNavLink("/kontakt", "Kontakt")}
            </nav>

            <div className="mt-6 border-t border-brand/10 pt-6">
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                onClick={closeMobileMenu}
                data-track-location="header_mobile"
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
