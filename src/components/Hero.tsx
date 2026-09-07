import Link from "next/link";
import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import HeroVideo from "./HeroVideo";

const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Softwire%2C%20315%2C%20Highgate%20Studios%2C%2053-79%20Highgate%20Rd%2C%20London%20NW5%201TL";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="event-title" className="event-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-6 pt-14 pb-10 md:px-16 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="event-enter">
            <p className="event-eyebrow flex flex-wrap items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-punk-yellow" aria-hidden="true" />
              LocalAI × Softwire <span className="text-white/30">/</span> Away day 2026
            </p>
            <h1 id="event-title" className="mt-7 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] font-black tracking-[-0.045em]">
              A change of scene.<br />
              <span className="text-punk-yellow">A fresh perspective.</span>
            </h1>
            <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-slate-300">
              Step out of the usual routine for a day of practical AI
              challenges, fresh ideas and a chance to catch up with colleagues.
              A little less business as usual, with some fun along the way.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="#programme" className="event-button event-button-primary">
                Explore the day <ArrowDown size={18} aria-hidden="true" />
              </Link>
              <Link href="#together" className="event-button event-button-secondary">
                More than a meeting <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              In person · Invitation-only for LocalAI and Softwire colleagues
            </p>
          </div>

          <div className="event-hero-media event-enter relative min-w-0">
            <div className="mb-4 flex items-center justify-between text-xs font-semibold tracking-[0.16em] uppercase text-slate-400">
              <span>A different kind of working day</span>
              <span className="text-punk-yellow">30.09.26</span>
            </div>
            <HeroVideo videoSrc="/hero-image.mp4" posterSrc="/hero-image-v2.avif" />
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/15 pt-5">
              {[
                ["01", "Explore fresh ideas"],
                ["02", "Try something different"],
                ["03", "Have a little fun"],
              ].map(([number, label]) => (
                <div key={number}>
                  <span className="text-xs font-semibold text-punk-pink-bright">{number}</span>
                  <p className="mt-2 text-sm leading-snug font-medium text-slate-200">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul aria-label="Event details" className="mt-14 grid gap-6 rounded-2xl border border-white/15 bg-white/[0.03] p-6 md:mt-20 md:grid-cols-[1fr_0.7fr_1.3fr]">
          <li className="flex items-center gap-4">
            <CalendarDays className="shrink-0 text-punk-yellow" aria-hidden="true" />
            <div><p className="event-detail-label">Save the date</p><time dateTime="2026-09-30" className="text-sm font-semibold">Wednesday 30 September 2026</time></div>
          </li>
          <li className="flex items-center gap-4">
            <Clock3 className="shrink-0 text-punk-pink-bright" aria-hidden="true" />
            <div><p className="event-detail-label">Make a day of it</p><p className="text-sm font-semibold">09:30–16:30 · London time</p></div>
          </li>
          <li className="flex items-center gap-4">
            <MapPin className="shrink-0 text-punk-yellow" aria-hidden="true" />
            <div>
              <p className="event-detail-label">Meet us here</p>
              <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold underline decoration-white/30 underline-offset-4 hover:text-punk-yellow">
                Softwire, Highgate Studios, London<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
