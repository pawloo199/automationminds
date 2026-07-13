"use client";

import { trackLeadConversion } from "@/lib/analytics";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";

type FormErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (name.length < 2) errors.name = "Podaj imię i nazwisko";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Podaj poprawny adres e-mail";
  if (phone.length < 7) errors.phone = "Podaj numer telefonu";
  if (message.length < 10) errors.message = "Wiadomość jest zbyt krótka";

  return errors;
}

export function ContactForm({
  sourcePage = "/",
  redirectOnSuccess = false,
}: {
  sourcePage?: string;
  redirectOnSuccess?: boolean;
}) {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<FormErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return;

    const nextErrors = validateForm(data);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    const payload = {
      name: String(data.get("name")),
      email: String(data.get("email")),
      phone: String(data.get("phone")),
      message: String(data.get("message")),
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

      trackLeadConversion();
      setStatus("success");
      form.reset();

      if (redirectOnSuccess) {
        window.location.href = "/dziekujemy";
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" id="formularz">
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div>
        <input
          name="name"
          required
          minLength={2}
          placeholder="Imię i nazwisko*"
          className="w-full rounded-xl border border-brand/20 px-4 py-3 outline-none focus:border-brand"
        />
        {errors.name ? (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail*"
          className="w-full rounded-xl border border-brand/20 px-4 py-3 outline-none focus:border-brand"
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          required
          minLength={7}
          placeholder="Telefon*"
          className="w-full rounded-xl border border-brand/20 px-4 py-3 outline-none focus:border-brand"
        />
        {errors.phone ? (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        ) : null}
      </div>

      <div>
        <textarea
          name="message"
          required
          minLength={10}
          rows={4}
          placeholder="Treść zapytania*"
          className="w-full rounded-xl border border-brand/20 px-4 py-3 outline-none focus:border-brand"
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <Button type="submit" className="min-h-11 w-full" disabled={status === "loading"}>
        {status === "loading" ? "Wysyłanie..." : "Wyślij zapytanie"}
      </Button>

      {status === "success" ? (
        <p className="text-center text-sm text-green-600">
          Dziękujemy! Skontaktujemy się z Tobą wkrótce.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-center text-sm text-red-600">
          Wystąpił błąd. Spróbuj ponownie później.
        </p>
      ) : null}
    </form>
  );
}
