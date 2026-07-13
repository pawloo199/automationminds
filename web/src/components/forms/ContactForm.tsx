"use client";

import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";

export function ContactForm({ sourcePage = "/" }: { sourcePage?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { sourcePage },
  });

  const onSubmit = handleSubmit(async (data) => {
    if (data.website) return;
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      reset({ sourcePage, name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" {...register("sourcePage")} />
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("website")}
      />

      <div>
        <input
          placeholder="Imię i nazwisko*"
          className="w-full rounded-xl border border-brand/20 px-4 py-3 outline-none focus:border-brand"
          {...register("name")}
        />
        {errors.name ? (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        ) : null}
      </div>

      <div>
        <input
          type="email"
          placeholder="E-mail*"
          className="w-full rounded-xl border border-brand/20 px-4 py-3 outline-none focus:border-brand"
          {...register("email")}
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Telefon*"
          className="w-full rounded-xl border border-brand/20 px-4 py-3 outline-none focus:border-brand"
          {...register("phone")}
        />
        {errors.phone ? (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        ) : null}
      </div>

      <div>
        <textarea
          rows={4}
          placeholder="Treść zapytania*"
          className="w-full rounded-xl border border-brand/20 px-4 py-3 outline-none focus:border-brand"
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" className="w-full" disabled={status === "loading"}>
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
