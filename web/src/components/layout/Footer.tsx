import { Container } from "@/components/ui/Container";
import type { Settings } from "@/lib/airtable.types";
import Link from "next/link";

export function Footer({ settings }: { settings?: Settings }) {
  return (
    <footer className="border-t border-brand/10 py-12">
      <Container>
        {settings?.email || settings?.address ? (
          <div className="mb-8 text-center text-sm text-muted">
            {settings.email ? <p>E-mail: {settings.email}</p> : null}
            {settings.address ? <p>{settings.address}</p> : null}
            {settings.phone ? <p>Tel: {settings.phone}</p> : null}
          </div>
        ) : null}
        <nav className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/o-nas" className="text-brand hover:underline">
            O nas
          </Link>
          <Link href="/kontakt" className="text-brand hover:underline">
            Kontakt
          </Link>
          <Link
            href="/polityka-prywatnosci"
            className="text-brand hover:underline"
          >
            Polityka prywatności
          </Link>
        </nav>
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted">
          Administratorem danych wprowadzonych do formularza jest firma Automation
          Minds. Dane osobowe będą przetwarzane w celu nawiązania kontaktu i
          udzielenia odpowiedzi na pytania. Więcej informacji o przysługujących
          prawach i zasadach przetwarzania danych dostępne jest w{" "}
          <Link href="/polityka-prywatnosci" className="text-brand underline">
            polityce prywatności
          </Link>
          .
        </p>
      </Container>
    </footer>
  );
}
