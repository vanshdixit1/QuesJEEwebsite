import Link from "next/link";

// ── Homepage — Hero section with CTA ──
export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6">
      {/* Animated background glow */}
      <div className="hero-glow top-1/4 left-1/3" />
      <div className="hero-glow bottom-1/4 right-1/4 opacity-40" />

      {/* Hero content */}
      <div className="relative z-10 max-w-2xl text-center fade-in-up">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary-light border border-primary/20">
          Free Practice Questions
        </span>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Crack{" "}
          <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            JEE
          </span>{" "}
          with Confidence
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-foreground/60 max-w-lg mx-auto leading-relaxed fade-in-up delay-100">
          Practice handpicked Physics, Chemistry & Maths questions. Get instant
          feedback on every answer and track your progress.
        </p>

        {/* CTA Button — links to /dashboard */}
        <Link
          href="/dashboard"
          id="cta-start-practice"
          className="btn-shimmer inline-flex items-center gap-2 mt-10 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 fade-in-up delay-200"
        >
          Start Practicing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      {/* Subject pills */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mt-16 fade-in-up delay-300">
        {["Physics", "Chemistry", "Maths"].map((subject) => (
          <span
            key={subject}
            className="px-5 py-2 text-sm rounded-full bg-surface-light/60 border border-border text-foreground/70"
          >
            {subject}
          </span>
        ))}
      </div>
    </main>
  );
}
