import Link from "next/link";

export default function AmActivitiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-bg-dark-1 to-bg-dark-2 px-6 py-14 text-text-dark-primary md:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-lg border-2 border-white/35 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.08em] text-white/90">
            AM session
          </span>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 px-4 py-2 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/6"
          >
            Home
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Morning activities
        </h1>
        <p className="mt-4 max-w-[65ch] text-text-dark-secondary">
          Coffee first, then opening updates and a creative scenario exercise to frame the day.
        </p>

        <section className="mt-10 rounded-xl border border-white/15 bg-black/20 p-6">
          <h2 className="text-xl font-bold">Schedule and instructions</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-5 text-text-dark-secondary">
            <li>
              <strong className="text-text-dark-primary">09:30 — Coffee and arrival:</strong>{" "}
              get settled and connect with other attendees.
            </li>
            <li>
              <strong className="text-text-dark-primary">
                10:00 — Welcome from the organisers:
              </strong>{" "}
              short intro to the day and expected outcomes.
            </li>
            <li>
              <strong className="text-text-dark-primary">10:15 — Update from Kat:</strong>{" "}
              deputy director update and framing notes for the sessions.
            </li>
            <li>
              <strong className="text-text-dark-primary">
                10:30 onwards — AI catastrophe newscast activity:
              </strong>{" "}
              group exercise mimicking a Breakfast TV bulletin announcing an AI problem at MHCLG.
              Each group prepares a short segment and shares it back.
            </li>
          </ol>
        </section>

        <section className="mt-6 rounded-xl border border-white/15 bg-black/20 p-6">
          <h2 className="text-xl font-bold">Before lunch</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-dark-secondary">
            <li>Share your group newscast back with the room</li>
            <li>Capture key AI-risk themes raised during the exercise</li>
            <li>Lunch is provided</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
