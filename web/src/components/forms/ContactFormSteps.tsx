"use client";

import { Button } from "@/components/ui/Button";
import { trackLeadConversion } from "@/lib/analytics";
import {
  EMPLOYEE_COUNT_OPTIONS,
  INDUSTRY_OPTIONS,
} from "@/lib/contact-form-options";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Step = 1 | 2 | "done";

type Step1Errors = Partial<
  Record<"firstName" | "lastName" | "email" | "phone" | "company" | "consent", string>
>;

const fieldClass =
  "w-full rounded-xl border border-brand/20 px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand";

export function ContactFormSteps({
  sourcePage = "/",
  services = [],
  onComplete,
}: {
  sourcePage?: string;
  services?: { id: string; menuLabel: string }[];
  onComplete?: () => void;
}) {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>(1);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [step1Errors, setStep1Errors] = useState<Step1Errors>({});
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    setStep(1);
    setSubmissionId(null);
    setStatus("idle");
    setStep1Errors({});
    setSelectedServices([]);
  }, [sourcePage]);

  function validateStep1(data: FormData): Step1Errors {
    const errors: Step1Errors = {};
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (firstName.length < 2) errors.firstName = "Podaj imię";
    if (lastName.length < 2) errors.lastName = "Podaj nazwisko";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Podaj poprawny e-mail";
    }
    if (phone.length < 7) errors.phone = "Podaj numer telefonu";
    if (company.length < 2) errors.company = "Podaj nazwę firmy";
    if (!consent) errors.consent = "Wymagana zgoda";

    return errors;
  }

  async function submitStep1(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return;

    const nextErrors = validateStep1(data);
    if (Object.keys(nextErrors).length > 0) {
      setStep1Errors(nextErrors);
      return;
    }

    setStep1Errors({});
    setStatus("loading");

    const payload = {
      step: 1,
      firstName: String(data.get("firstName")),
      lastName: String(data.get("lastName")),
      email: String(data.get("email")),
      phone: String(data.get("phone")),
      company: String(data.get("company")),
      consent: true,
      sourcePage,
      utmSource: searchParams.get("utm_source") ?? "",
      utmMedium: searchParams.get("utm_medium") ?? "",
      utmCampaign: searchParams.get("utm_campaign") ?? "",
      utmTerm: searchParams.get("utm_term") ?? "",
      utmContent: searchParams.get("utm_content") ?? "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      const result = (await response.json()) as { submissionId?: string };
      if (!result.submissionId) throw new Error("Missing submission id");

      trackLeadConversion();
      setSubmissionId(result.submissionId);
      setStep(2);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  async function submitStep2(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!submissionId) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;

    setStatus("loading");

    const payload = {
      submissionId,
      employeeCount: String(data.get("employeeCount") ?? "") || undefined,
      industry: String(data.get("industry") ?? "") || undefined,
      interestedServices: selectedServices.length ? selectedServices : undefined,
      additionalNotes: String(data.get("additionalNotes") ?? "").trim() || undefined,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStep("done");
      setStatus("idle");
      onComplete?.();
    } catch {
      setStatus("error");
    }
  }

  async function skipStep2() {
    if (!submissionId) return;
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submissionId }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStep("done");
      setStatus("idle");
      onComplete?.();
    } catch {
      setStatus("error");
    }
  }

  function toggleService(label: string) {
    setSelectedServices((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  }

  if (step === "done") {
    return (
      <div className="py-4 text-center">
        <p className="text-base font-semibold text-dark">Dziękujemy!</p>
        <p className="mt-2 text-sm text-muted">
          Otrzymaliśmy Twoje dane. Skontaktujemy się wkrótce.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
              step === 1 ? "bg-brand text-white" : "bg-brand/15 text-brand",
            )}
          >
            1
          </span>
          <span
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
              step === 2 ? "bg-brand text-white" : "bg-surface text-muted",
            )}
          >
            2
          </span>
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          Krok {step} z 2
        </p>
      </div>

      {step === 1 ? (
        <form onSubmit={submitStep1} className="space-y-3">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <input
                name="firstName"
                required
                minLength={2}
                placeholder="Imię*"
                autoComplete="given-name"
                className={fieldClass}
              />
              {step1Errors.firstName ? (
                <p className="mt-1 text-xs text-red-600">{step1Errors.firstName}</p>
              ) : null}
            </div>
            <div>
              <input
                name="lastName"
                required
                minLength={2}
                placeholder="Nazwisko*"
                autoComplete="family-name"
                className={fieldClass}
              />
              {step1Errors.lastName ? (
                <p className="mt-1 text-xs text-red-600">{step1Errors.lastName}</p>
              ) : null}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail*"
              autoComplete="email"
              className={fieldClass}
            />
            {step1Errors.email ? (
              <p className="mt-1 text-xs text-red-600">{step1Errors.email}</p>
            ) : null}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              required
              minLength={7}
              placeholder="Telefon*"
              autoComplete="tel"
              className={fieldClass}
            />
            {step1Errors.phone ? (
              <p className="mt-1 text-xs text-red-600">{step1Errors.phone}</p>
            ) : null}
          </div>

          <div>
            <input
              name="company"
              required
              minLength={2}
              placeholder="Firma*"
              autoComplete="organization"
              className={fieldClass}
            />
            {step1Errors.company ? (
              <p className="mt-1 text-xs text-red-600">{step1Errors.company}</p>
            ) : null}
          </div>

          <label className="flex items-start gap-3 rounded-xl border border-brand/15 bg-surface/60 px-3 py-3">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
            />
            <span className="text-xs leading-relaxed text-dark">
              Wyrażam zgodę na przetwarzanie danych w celu kontaktu.{" "}
              <Link href="/polityka-prywatnosci" className="text-brand underline">
                Polityka prywatności
              </Link>
              *
            </span>
          </label>
          {step1Errors.consent ? (
            <p className="text-xs text-red-600">{step1Errors.consent}</p>
          ) : null}

          <Button
            type="submit"
            className="min-h-11 w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Zapisywanie..." : "Dalej"}
          </Button>
        </form>
      ) : (
        <form onSubmit={submitStep2} className="space-y-3">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <p className="text-sm text-muted">
            Opcjonalnie — pomoże nam lepiej przygotować się do rozmowy.
          </p>

          <div>
            <label htmlFor="employeeCount" className="mb-1.5 block text-xs font-medium text-dark">
              Liczba pracowników
            </label>
            <select id="employeeCount" name="employeeCount" className={fieldClass} defaultValue="">
              <option value="">Wybierz...</option>
              {EMPLOYEE_COUNT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="industry" className="mb-1.5 block text-xs font-medium text-dark">
              Branża
            </label>
            <select id="industry" name="industry" className={fieldClass} defaultValue="">
              <option value="">Wybierz...</option>
              {INDUSTRY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {services.length > 0 ? (
            <fieldset>
              <legend className="mb-2 text-xs font-medium text-dark">
                Interesujące usługi
              </legend>
              <div className="max-h-36 space-y-2 overflow-y-auto rounded-xl border border-brand/15 p-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex cursor-pointer items-start gap-2.5 text-sm text-dark"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.menuLabel)}
                      onChange={() => toggleService(service.menuLabel)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
                    />
                    <span>{service.menuLabel}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ) : null}

          <div>
            <label htmlFor="additionalNotes" className="mb-1.5 block text-xs font-medium text-dark">
              Dodatkowe informacje
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              rows={3}
              placeholder="Opisz krótko swoje potrzeby..."
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              type="submit"
              className="min-h-11 w-full sm:flex-1"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Wysyłanie..." : "Wyślij"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="min-h-11 w-full sm:w-auto"
              disabled={status === "loading"}
              onClick={skipStep2}
            >
              Pomiń
            </Button>
          </div>
        </form>
      )}

      {status === "error" ? (
        <p className="text-center text-xs text-red-600">
          Wystąpił błąd. Spróbuj ponownie.
        </p>
      ) : null}
    </div>
  );
}
