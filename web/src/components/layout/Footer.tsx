import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Service, Settings } from "@/lib/airtable.types";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const mainNav = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/poradnik", label: "Poradnik" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex text-sm leading-snug text-muted transition hover:text-brand"
    >
      {children}
    </Link>
  );
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {title}
      </h2>
      <div className="mt-5 space-y-2.5">{children}</div>
    </div>
  );
}

export function Footer({
  settings,
  services = [],
}: {
  settings?: Settings;
  services?: Service[];
}) {
  const siteName = settings?.siteName || "Automation Minds";
  const phoneHref = settings?.phone
    ? `tel:${settings.phone.replace(/\s/g, "")}`
    : undefined;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand/10 bg-white">
      <Container className="py-16 lg:py-20">
        <div className="rounded-3xl border border-brand/10 bg-surface/60 p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src={settings?.logoColorUrl || "/images/logo-color.png"}
                  alt={siteName}
                  width={180}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                {settings?.metaDescription ||
                  "Automatyzacja procesów biznesowych i rozwiązania AI dla firm w całej Polsce."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/kontakt" className="text-sm">
                  Bezpłatna konsultacja
                </Button>
                <Button
                  href="/poradnik"
                  variant="secondary"
                  className="text-sm"
                >
                  Poradnik
                </Button>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              <FooterColumn title="Nawigacja">
                {mainNav.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
                <FooterLink href="/#case-studies">Case studies</FooterLink>
                <FooterLink href="/polityka-prywatnosci">
                  Polityka prywatności
                </FooterLink>
              </FooterColumn>

              <FooterColumn title="Usługi">
                <ul className="space-y-2.5">
                  {services.map((service) => (
                    <li key={service.id}>
                      <FooterLink href={`/uslugi/${service.slug}`}>
                        {service.menuLabel}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Kontakt">
                <div className="rounded-2xl border border-brand/10 bg-white p-4">
                  {settings?.phone ? (
                    <a
                      href={phoneHref}
                      className="flex items-start gap-3 text-sm text-dark transition hover:text-brand"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Phone className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="pt-1">{settings.phone}</span>
                    </a>
                  ) : null}
                  {settings?.email ? (
                    <a
                      href={`mailto:${settings.email}`}
                      className="mt-3 flex items-start gap-3 text-sm text-dark transition hover:text-brand"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Mail className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="break-all pt-1">{settings.email}</span>
                    </a>
                  ) : null}
                  {settings?.address ? (
                    <p className="mt-3 flex items-start gap-3 text-sm text-muted">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <MapPin className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="pt-1">{settings.address}</span>
                    </p>
                  ) : null}
                </div>
                <p className="text-sm text-muted">
                  Odpowiadamy zwykle w ciągu jednego dnia roboczego.
                </p>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-brand/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {year} {siteName}. Wszelkie prawa zastrzeżone.
          </p>
          <Link
            href="/polityka-prywatnosci"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand transition hover:gap-2"
          >
            Polityka prywatności
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted">
          Administratorem danych z formularzy kontaktowych jest {siteName}. Dane
          przetwarzamy w celu odpowiedzi na zapytania — szczegóły w{" "}
          <Link
            href="/polityka-prywatnosci"
            className="text-brand underline-offset-2 hover:underline"
          >
            polityce prywatności
          </Link>
          .
        </p>
      </Container>
    </footer>
  );
}
