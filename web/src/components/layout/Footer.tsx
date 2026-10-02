import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Settings } from "@/lib/airtable.types";
import { SERVICE_GROUPS, SERVICES_HUB_PATH } from "@/lib/services/catalog";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { COMPANY, COMPANY_ADDRESS_LINE } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";
import { CITY_HUB_PATH } from "@/lib/city-pages/types";
import { PROCESSES_HUB_PATH } from "@/lib/processes/catalog";
import { TOOLS_HUB_PATH } from "@/lib/tools/catalog";

const mainNav = [
  { href: "/", label: "Start" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/o-nas", label: "O nas" },
  { href: "/poradnik", label: "Poradnik" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

const FOOTER_ABOUT =
  "Pomagamy firmom w całej Polsce skracać czas pracy zespołów przez automatyzację procesów i wdrożenia AI. Łączymy systemy, porządkujemy przepływy danych i budujemy rozwiązania, które realnie odciążają biuro, sprzedaż, produkcję oraz obsługę klienta. Pracujemy zdalnie, w mierzalnych etapach.";

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
      className="block text-sm leading-snug text-muted transition hover:text-brand"
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
      <div className="mt-5 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function EmailWithSoftBreak({ email }: { email: string }) {
  const at = email.indexOf("@");
  if (at === -1) return <span className="min-w-0">{email}</span>;

  return (
    <span className="min-w-0 break-words">
      {email.slice(0, at)}
      <wbr />
      {email.slice(at)}
    </span>
  );
}

export function Footer({
  settings,
  guideCategories = [],
}: {
  settings?: Settings;
  guideCategories?: { slug: string; name: string }[];
}) {
  const siteName = settings?.siteName || "Automation Minds";
  const phoneHref = settings?.phone
    ? `tel:${settings.phone.replace(/\s/g, "")}`
    : undefined;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand/10 bg-surface">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={settings?.logoColorUrl || "/images/logo-color.png"}
                alt={siteName}
                width={180}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted lg:max-w-none">
              {FOOTER_ABOUT}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href="/kontakt"
                className="text-sm"
                data-track="consultation"
                data-track-method="link"
                data-track-location="footer"
              >
                Bezpłatna konsultacja
              </Button>
              <Button href="/poradnik" variant="secondary" className="text-sm">
                Poradnik
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 lg:gap-8">
            <FooterColumn title="Nawigacja">
              {mainNav.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
              <FooterLink href="/#case-studies">Case studies</FooterLink>
              <FooterLink href={PROCESSES_HUB_PATH}>Procesy</FooterLink>
              <FooterLink href={TOOLS_HUB_PATH}>Narzędzia</FooterLink>
              <FooterLink href={CITY_HUB_PATH}>Automatyzacja w miastach</FooterLink>
              <FooterLink href="/polityka-prywatnosci">
                Polityka prywatności
              </FooterLink>
              {guideCategories.length > 0 ? (
                <>
                  <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Tematy Poradnika
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {guideCategories.map((category) => (
                      <li key={category.slug}>
                        <FooterLink href={`/poradnik/kategoria/${category.slug}`}>
                          {category.name}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </FooterColumn>

            <FooterColumn title="Usługi">
              <ul className="flex flex-col gap-2.5">
                {SERVICE_GROUPS.map((group) => (
                  <li key={group.id}>
                    <FooterLink href={`${SERVICES_HUB_PATH}#${group.id}`}>
                      {group.name}
                    </FooterLink>
                  </li>
                ))}
                <li>
                  <Link
                    href={SERVICES_HUB_PATH}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:gap-2"
                  >
                    Wszystkie usługi
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn title="Kontakt" className="sm:col-span-2 lg:col-span-1">
              {settings?.phone ? (
                <a
                  href={phoneHref}
                  data-track-location="footer"
                  className="flex items-start gap-3 text-sm text-dark transition hover:text-brand"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand/70" />
                  <span>{settings.phone}</span>
                </a>
              ) : null}
              {settings?.email ? (
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-start gap-3 text-sm text-dark transition hover:text-brand"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand/70" />
                  <EmailWithSoftBreak email={settings.email} />
                </a>
              ) : null}
              {settings?.address ? (
                <p className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand/70" />
                  <span>{settings.address}</span>
                </p>
              ) : null}
              <p className="text-sm text-muted">
                Odpowiadamy zwykle w ciągu jednego dnia roboczego.
              </p>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
        <p className="mt-4 text-xs leading-relaxed text-muted">
          {COMPANY.legalName}, {COMPANY_ADDRESS_LINE}. KRS {COMPANY.krs}, NIP{" "}
          {COMPANY.nip}, REGON {COMPANY.regon}, kapitał zakładowy{" "}
          {COMPANY.shareCapital}.
        </p>
        <p className="mt-2 max-w-3xl text-xs leading-relaxed text-muted">
          Administratorem danych z formularzy kontaktowych jest {COMPANY.legalName}. Dane
          przetwarzamy w celu odpowiedzi na zapytania, szczegóły w{" "}
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
