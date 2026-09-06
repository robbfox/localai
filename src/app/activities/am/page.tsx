import Link from "next/link";
import PaintSplatter, { PunkBadge } from "@/components/PaintSplatter";
import { PunkStickerTape } from "@/components/PunkAccents";

export default function AmActivitiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-bg-dark-1 via-bg-dark-2 to-bg-dark-1 px-6 py-14 text-text-dark-primary md:px-16">
      {/* Background paint splatters */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-10 -right-10 opacity-75">
          <PaintSplatter variant="clash" color="duo" size={320} rotate={30} />
        </div>
        <div className="absolute bottom-20 -left-16 opacity-65">
          <PaintSplatter variant="drip" color="pink" size={280} rotate={-10} />
        </div>
        <div className="absolute top-1/2 right-10 opacity-30">
          <PaintSplatter variant="spray" color="yellow" size={220} rotate={80} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <PunkBadge color="pink">
            ☀️ AM SESSION
          </PunkBadge>
          <PunkStickerTape text="CRITICAL SCENARIOS" color="yellow" rotate={-2} />
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/30 px-4 py-1.5 text-sm font-bold text-white transition-all hover:bg-punk-pink hover:text-black hover:border-punk-pink shadow-[2px_2px_0px_#ffe600]"
          >
            ← Back Home
          </Link>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-8 -left-8 -z-10 opacity-70">
            <PaintSplatter variant="burst" color="yellow" size={170} rotate={-20} />
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Morning session
          </h1>
        </div>

        <p className="mt-4 max-w-[65ch] text-[17px] leading-relaxed text-text-dark-secondary">
          Coffee and a proper catch-up first, then a relaxed welcome and a creative group activity.
        </p>

        <section className="relative mt-10 overflow-hidden rounded-2xl border-2 border-punk-pink/40 bg-black/40 p-7 shadow-[6px_6px_0px_rgba(255,42,133,0.3)] backdrop-blur-sm">
          {/* Micro splat in card corner */}
          <div className="pointer-events-none absolute -top-4 -right-4 opacity-50">
            <PaintSplatter variant="dots" color="pink" size={80} />
          </div>

          <h2 className="text-2xl font-black text-punk-yellow flex items-center gap-2">
            <span>⚡</span> Schedule and instructions
          </h2>
          <ol className="mt-6 space-y-5 text-text-dark-secondary">
            <li className="flex gap-4 items-start">
              <span className="flex-none flex h-7 w-7 items-center justify-center rounded bg-punk-pink text-black font-black text-xs shadow-[2px_2px_0px_#ffe600]">
                01
              </span>
              <div>
                <strong className="text-white block text-base font-bold">
                  09:30 — Coffee and arrival
                </strong>
                <span className="text-sm">Get settled, grab breakfast, and connect with other attendees.</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none flex h-7 w-7 items-center justify-center rounded bg-punk-yellow text-black font-black text-xs shadow-[2px_2px_0px_#ff2a85]">
                02
              </span>
              <div>
                <strong className="text-white block text-base font-bold">
                  10:00 — A quick hello from the organisers
                </strong>
                <span className="text-sm">Get everyone together and settle into the day before the activities.</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none flex h-7 w-7 items-center justify-center rounded bg-punk-yellow text-black font-black text-xs shadow-[2px_2px_0px_#ff2a85]">
                03
              </span>
              <div>
                <strong className="text-punk-yellow block text-base font-black">
                  10:30 onwards — AI catastrophe newscast activity 📺
                </strong>
                <span className="text-sm">
                  Group exercise mimicking a Breakfast TV bulletin announcing an AI problem at MHCLG.
                  Each group prepares a short segment and shares it back.
                </span>
              </div>
            </li>
          </ol>
        </section>

        <section className="relative mt-8 overflow-hidden rounded-2xl border-2 border-punk-yellow/40 bg-black/40 p-7 shadow-[6px_6px_0px_rgba(255,230,0,0.25)] backdrop-blur-sm">
          <div className="pointer-events-none absolute -bottom-4 -left-4 opacity-50">
            <PaintSplatter variant="dots" color="yellow" size={80} />
          </div>

          <h2 className="text-2xl font-black text-punk-pink flex items-center gap-2">
            <span>🎯</span> Before lunch
          </h2>
          <ul className="mt-5 space-y-3 pl-2 text-text-dark-secondary">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-punk-pink" />
              <span>Share your group newscast back with the room</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-punk-yellow" />
              <span>Capture key AI-risk themes raised during the exercise</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-punk-pink" />
              <span className="font-bold text-white">Lunch is provided for all attendees</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
