"use client";

import { cn } from "@/lib/cn";
import { MODEL_PICKER } from "@/lib/agency-content";
import { ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ModelKey = keyof typeof MODEL_PICKER.results;

/** Trzy pytania, które podpowiadają model współpracy. */
export function ModelPicker() {
  const { questions, results } = MODEL_PICKER;
  const [answers, setAnswers] = useState<number[]>([]);
  const step = answers.length;
  const finished = step >= questions.length;

  let winner: ModelKey = "projekt";
  if (finished) {
    const totals: Record<ModelKey, number> = { projekt: 0, abonament: 0, opieka: 0 };
    answers.forEach((optionIndex, questionIndex) => {
      const { scores } = questions[questionIndex].options[optionIndex];
      (Object.keys(totals) as ModelKey[]).forEach((key) => {
        totals[key] += scores[key];
      });
    });
    winner = (Object.keys(totals) as ModelKey[]).reduce((best, key) => (totals[key] > totals[best] ? key : best));
  }
  const result = results[winner];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-dark p-6 text-white sm:p-10">
      <div className="about-grid-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="home-aurora pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand/25 blur-3xl" aria-hidden />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
            {finished ? "Wasz wynik" : `Pytanie ${step + 1} z ${questions.length}`}
          </p>
          <div className="flex gap-1.5" aria-hidden>
            {questions.map((question, index) => (
              <span
                key={question.id}
                className={cn("h-1.5 w-8 rounded-full transition", index < step ? "bg-brand-light" : "bg-white/15")}
              />
            ))}
          </div>
        </div>

        <div aria-live="polite">
          {finished ? (
            <div key="result" className="agency-demo-pop mt-6">
              <p className="text-sm text-white/60">Na początek najlepiej pasuje:</p>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{result.name}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">{result.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#formularz"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand/90"
                >
                  Porozmawiajmy o tym modelu
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <Link
                  href={result.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
                >
                  {result.linkLabel}
                </Link>
                <button
                  type="button"
                  onClick={() => setAnswers([])}
                  className="inline-flex items-center justify-center gap-1.5 px-2 py-3 text-sm font-semibold text-white/60 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden />
                  Zacznij od nowa
                </button>
              </div>
            </div>
          ) : (
            <div key={questions[step].id} className="agency-demo-pop mt-6">
              <p className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">{questions[step].question}</p>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {questions[step].options.map((option, index) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setAnswers((value) => [...value, index])}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.05] p-5 text-left text-base font-medium transition hover:-translate-y-0.5 hover:border-brand-light hover:bg-brand/20"
                  >
                    {option.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white" aria-hidden />
                  </button>
                ))}
              </div>
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setAnswers((value) => value.slice(0, -1))}
                  className="mt-6 text-sm font-semibold text-white/60 hover:text-white"
                >
                  Wróć do poprzedniego pytania
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
