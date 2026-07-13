import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="flex min-h-[60vh] items-center py-24">
        <Container className="text-center">
          <h1 className="text-5xl font-bold text-dark">404</h1>
          <p className="mt-4 text-muted">Nie znaleziono strony.</p>
          <div className="mt-8">
            <Button href="/">Wróć na stronę główną</Button>
          </div>
          <p className="mt-4">
            <Link href="/kontakt" className="text-brand underline">
              Skontaktuj się z nami
            </Link>
          </p>
        </Container>
      </section>
    </SiteLayout>
  );
}
