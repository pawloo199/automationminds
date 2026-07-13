"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Service, Settings } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";
import { ChevronDown, Menu, X } from "lucide-react";
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

  const isSolid = scrolled || !transparent;

  const navLink = (href: string, label: string) => (
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
      onClick={() => setMobileOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[72px] transition-colors duration-300",
        isSolid ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-4">
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src={isSolid ? settings.logoColorUrl : settings.logoWhiteUrl}
            alt={settings.siteName || "Automation Minds"}
            width={180}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLink("/", "Start")}
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
          {navLink("/o-nas", "O nas")}
          {navLink("/kontakt", "Kontakt")}
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
            "rounded-lg p-2 lg:hidden",
            isSolid ? "text-dark" : "text-white",
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-brand/10 bg-white px-4 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLink("/", "Start")}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Usługi
              </p>
              <div className="flex flex-col gap-2 pl-2">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/uslugi/${service.slug}`}
                    className="text-sm text-dark"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.menuLabel}
                  </Link>
                ))}
              </div>
            </div>
            {navLink("/o-nas", "O nas")}
            {navLink("/kontakt", "Kontakt")}
            <Button href={`tel:${settings.phone.replace(/\s/g, "")}`}>
              {settings.phone}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
