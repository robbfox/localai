import Link from "next/link";

export default function PmActivitiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-bg-dark-1 to-bg-dark-2 px-6 py-14 text-text-dark-primary md:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-lg border-2 border-white/35 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.08em] text-white/90">
            PM session
          </span>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 px-4 py-2 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/6"
          >
            Home
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Afternoon activities
        </h1>
        <p className="mt-4 max-w-[65ch] text-text-dark-secondary">
          Afternoon programme starts after lunch, with optional warm-up activities before the main
          session.
        </p>

        <section className="mt-10 rounded-xl border border-white/15 bg-black/20 p-6">
          <h2 className="text-xl font-bold">Schedule and instructions</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-5 text-text-dark-secondary">
            <li>
              <strong className="text-text-dark-primary">After lunch — Optional music session:</strong>{" "}
              informal creative session if attendees are interested.
            </li>
            <li>
              <strong className="text-text-dark-primary">PM session proper:</strong> main afternoon
              activities begin after the optional session.
            </li>
            <li>
              <strong className="text-text-dark-primary">Whole team activity:</strong> LocalAI Bingo.
            </li>
          </ol>
        </section>

        <section className="mt-6 rounded-xl border border-white/15 bg-black/20 p-6">
          <h2 className="text-xl font-bold">Notes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-dark-secondary">
            <li>Lunch is provided before the afternoon activities</li>
            <li>The exact PM run order will be confirmed on the day</li>
            <li>LocalAI Bingo is currently marked as TBC</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
