"use client"; // ← client component because we use useState for interactivity

import { useState } from "react";
import Link from "next/link";
import questions, { type Question } from "../data/questions";

// ── Dashboard Page — Lists JEE practice questions ──
export default function DashboardPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10 fade-in-up">
        <Link
          href="/"
          id="back-home"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary-light transition-colors mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Practice{" "}
          <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            Questions
          </span>
        </h1>
        <p className="mt-2 text-foreground/50 text-sm sm:text-base">
          Select an answer for each question. You&apos;ll get instant feedback!
        </p>
      </div>

      {/* Questions list */}
      <div className="max-w-3xl mx-auto space-y-6">
        {questions.map((q, idx) => (
          <QuestionCard key={q.id} question={q} index={idx} />
        ))}
      </div>
    </main>
  );
}

// ── Single Question Card Component ──
function QuestionCard({
  question,
  index,
}: {
  question: Question;
  index: number;
}) {
  // null = no answer selected yet, number = index of selected option
  const [selected, setSelected] = useState<number | null>(null);

  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctIndex;

  return (
    <div
      className="fade-in-up rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-primary/30"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Question number + text */}
      <p className="text-sm font-semibold text-primary-light mb-1">
        Question {question.id}
      </p>
      <p className="text-base sm:text-lg font-medium leading-relaxed mb-5">
        {question.question}
      </p>

      {/* Options grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option, optIdx) => {
          // Determine button style based on state
          let style =
            "border-border bg-surface-light/50 hover:border-primary/40 hover:bg-surface-light cursor-pointer";

          if (isAnswered) {
            if (optIdx === question.correctIndex) {
              // Always highlight the correct answer in green
              style = "border-success/50 bg-success/10 text-success";
            } else if (optIdx === selected) {
              // User picked wrong answer — show red
              style = "border-danger/50 bg-danger/10 text-danger";
            } else {
              // Other options — dim them
              style = "border-border/50 bg-surface-light/30 opacity-50";
            }
          }

          return (
            <button
              key={optIdx}
              id={`q${question.id}-opt${optIdx}`}
              disabled={isAnswered}
              onClick={() => setSelected(optIdx)}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border text-sm sm:text-base transition-all duration-200 ${style}`}
            >
              {/* Option letter (A, B, C, D) */}
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-background/50 text-xs font-bold">
                {String.fromCharCode(65 + optIdx)}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback message */}
      {isAnswered && (
        <p
          className={`mt-4 text-sm font-medium ${
            isCorrect ? "text-success" : "text-danger"
          }`}
        >
          {isCorrect
            ? "✓ Correct! Well done."
            : `✗ Incorrect. The correct answer is ${String.fromCharCode(
                65 + question.correctIndex
              )}: ${question.options[question.correctIndex]}`}
        </p>
      )}
    </div>
  );
}
