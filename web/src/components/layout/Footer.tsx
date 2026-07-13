import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand/10 py-12">
      <Container>
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
