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
          Focus: prototyping safeguards and delivery patterns so teams can move from strategy to
          implementation with confidence.
        </p>

        <section className="mt-10 rounded-xl border border-white/15 bg-black/20 p-6">
          <h2 className="text-xl font-bold">Schedule and instructions</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-5 text-text-dark-secondary">
            <li>
              <strong className="text-text-dark-primary">13:30–13:45 — Kick-off:</strong> recap
              morning outputs and choose one priority risk to tackle.
            </li>
            <li>
              <strong className="text-text-dark-primary">13:45–14:35 — Safeguard build:</strong>{" "}
              design workflow checks, human review points, and monitoring alerts.
            </li>
            <li>
              <strong className="text-text-dark-primary">14:35–15:15 — Prototype sprint:</strong>{" "}
              draft a lightweight operating model (roles, data flow, fallback plan).
            </li>
            <li>
              <strong className="text-text-dark-primary">15:15–15:45 — Peer challenge:</strong>{" "}
              swap plans with another group for stress testing and feedback.
            </li>
            <li>
              <strong className="text-text-dark-primary">15:45–16:20 — Final playback:</strong>{" "}
              present your final approach and first 30-day action plan.
            </li>
          </ol>
        </section>

        <section className="mt-6 rounded-xl border border-white/15 bg-black/20 p-6">
          <h2 className="text-xl font-bold">Outputs to submit</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-dark-secondary">
            <li>Safeguard workflow diagram</li>
            <li>Owner-by-owner implementation plan</li>
            <li>30-day action list with milestones</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
