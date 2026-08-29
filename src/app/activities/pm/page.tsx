import Link from "next/link";
import PaintSplatter, { PunkBadge } from "@/components/PaintSplatter";
import { PunkStickerTape } from "@/components/PunkAccents";

export default function PmActivitiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-bg-dark-1 via-bg-dark-2 to-bg-dark-1 px-6 py-14 text-text-dark-primary md:px-16">
      {/* Background paint splatters */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-12 -left-12 opacity-75">
          <PaintSplatter variant="burst" color="yellow" size={320} rotate={-25} />
        </div>
        <div className="absolute bottom-16 -right-16 opacity-70">
          <PaintSplatter variant="clash" color="duo" size={300} rotate={15} />
        </div>
        <div className="absolute top-1/2 left-12 opacity-25">
          <PaintSplatter variant="spray" color="pink" size={240} rotate={110} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <PunkBadge color="yellow">
            🌙 PM SESSION
          </PunkBadge>
          <PunkStickerTape text="BINGO & MUSIC" color="pink" rotate={2} />
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/30 px-4 py-1.5 text-sm font-bold text-white transition-all hover:bg-punk-yellow hover:text-black hover:border-punk-yellow shadow-[2px_2px_0px_#ff2a85]"
          >
            ← Back Home
          </Link>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-8 -left-8 -z-10 opacity-70">
            <PaintSplatter variant="burst" color="pink" size={170} rotate={15} />
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Afternoon session
          </h1>
        </div>

        <p className="mt-4 max-w-[65ch] text-[17px] leading-relaxed text-text-dark-secondary">
          Afternoon programme starts after lunch, with an optional warm-up session before the main
          collaborative workshop.
        </p>

        <section className="relative mt-10 overflow-hidden rounded-2xl border-2 border-punk-yellow/40 bg-black/40 p-7 shadow-[6px_6px_0px_rgba(255,230,0,0.3)] backdrop-blur-sm">
          <div className="pointer-events-none absolute -top-4 -right-4 opacity-50">
            <PaintSplatter variant="dots" color="yellow" size={80} />
          </div>

          <h2 className="text-2xl font-black text-punk-pink flex items-center gap-2">
            <span>🎸</span> Schedule and instructions
          </h2>
          <ol className="mt-6 space-y-5 text-text-dark-secondary">
            <li className="flex gap-4 items-start">
              <span className="flex-none flex h-7 w-7 items-center justify-center rounded bg-punk-pink text-black font-black text-xs shadow-[2px_2px_0px_#ffe600]">
                01
              </span>
              <div>
                <strong className="text-punk-pink block text-base font-black">
                  After lunch — Optional music session 🎵
                </strong>
                <span className="text-sm">Informal creative jam session if attendees are interested.</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none flex h-7 w-7 items-center justify-center rounded bg-punk-yellow text-black font-black text-xs shadow-[2px_2px_0px_#ff2a85]">
                02
              </span>
              <div>
                <strong className="text-white block text-base font-bold">
                  PM session proper
                </strong>
                <span className="text-sm">Main afternoon activities begin after the optional session.</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none flex h-7 w-7 items-center justify-center rounded bg-punk-pink text-black font-black text-xs shadow-[2px_2px_0px_#ffe600]">
                03
              </span>
              <div>
                <strong className="text-punk-yellow block text-base font-black">
                  Whole team activity — LocalAI Bingo 🎱
                </strong>
                <span className="text-sm">High energy interactive team game with custom challenges.</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none flex h-7 w-7 items-center justify-center rounded bg-punk-yellow text-black font-black text-xs shadow-[2px_2px_0px_#ff2a85]">
                04
              </span>
              <div>
                <strong className="text-white block text-base font-bold">
                  After 16:30 — Optional social 🍻
                </strong>
                <span className="text-sm">
                  Informal nearby social for anyone who wants to continue the conversation.
                </span>
              </div>
            </li>
          </ol>
        </section>

        <section className="relative mt-8 overflow-hidden rounded-2xl border-2 border-punk-pink/40 bg-black/40 p-7 shadow-[6px_6px_0px_rgba(255,42,133,0.25)] backdrop-blur-sm">
          <div className="pointer-events-none absolute -bottom-4 -left-4 opacity-50">
            <PaintSplatter variant="dots" color="pink" size={80} />
          </div>

          <h2 className="text-2xl font-black text-punk-yellow flex items-center gap-2">
            <span>📌</span> Notes
          </h2>
          <ul className="mt-5 space-y-3 pl-2 text-text-dark-secondary">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-punk-yellow" />
              <span>Lunch is provided before the afternoon session</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-punk-pink" />
              <span>The exact PM run order will be confirmed on the day</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-punk-yellow" />
              <span className="font-bold text-white">Optional social at a nearby pub after 16:30</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

