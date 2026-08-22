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
          Focus: understanding AI risk in local government service design and creating practical
          mitigations that teams can apply immediately.
        </p>

        <section className="mt-10 rounded-xl border border-white/15 bg-black/20 p-6">
          <h2 className="text-xl font-bold">Schedule and instructions</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-5 text-text-dark-secondary">
            <li>
              <strong className="text-text-dark-primary">09:30–09:45 — Briefing:</strong> form
              groups of 4–6 and review the scenario pack.
            </li>
            <li>
              <strong className="text-text-dark-primary">09:45–10:25 — Risk mapping:</strong>{" "}
              identify failure modes across data quality, fairness, explainability, and operations.
            </li>
            <li>
              <strong className="text-text-dark-primary">10:25–10:45 — Prioritisation:</strong>{" "}
              score each risk by impact and likelihood; select top 3 to address.
            </li>
            <li>
              <strong className="text-text-dark-primary">10:45–11:20 — Mitigation design:</strong>{" "}
              define controls, owners, success metrics, and escalation paths.
            </li>
            <li>
              <strong className="text-text-dark-primary">11:20–11:45 — Playback:</strong> share
              your one-page risk plan with the room.
            </li>
          </ol>
        </section>

        <section className="mt-6 rounded-xl border border-white/15 bg-black/20 p-6">
          <h2 className="text-xl font-bold">Outputs to submit</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-dark-secondary">
            <li>Top-3 prioritised risk list</li>
            <li>Mitigation plan with clear owners</li>
            <li>Success metrics and review cadence</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
