"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Coffee, Sparkles, Users } from "lucide-react";

const sessions = [
  { id: "arrival", period: "Morning", time: "09:30", title: "Coffee & connection", category: "Meet & mingle", description: "Get settled, grab breakfast and connect with other attendees before the day begins.", detail: "A chance to catch up with colleagues and meet the people you will be working with.", icon: Coffee },
  { id: "welcome", period: "Morning", time: "10:00", title: "A quick hello", category: "Welcome", description: "Get everyone together and settle into the day.", detail: "A relaxed introduction from the organisers before we get stuck into the activities.", icon: Users },
  { id: "newscast", period: "Morning", time: "10:30 onwards", title: "Breaking news: an AI catastrophe", category: "Hands-on challenge", description: "Step into a Breakfast TV newsroom and report on an imagined AI problem at MHCLG.", detail: "Work in groups to prepare a short bulletin, share it with the room before lunch and capture the key AI-risk themes raised.", icon: Sparkles },
  { id: "music", period: "Afternoon", time: "After lunch", title: "A creative warm-up", category: "Optional · Music", description: "An informal music session for anyone who would like to take part.", detail: "A creative jam before the main afternoon activities. Participation is optional; the exact run order will be confirmed on the day.", icon: Sparkles },
  { id: "bingo", period: "Afternoon", time: "Afternoon", title: "LocalAI Bingo", category: "Team challenge", description: "Bring the whole team together for an interactive game with custom challenges.", detail: "The main collaborative afternoon activity follows the optional warm-up. Exact timings will be confirmed on the day.", icon: Users },
  { id: "social", period: "Afternoon", time: "After 16:30", title: "Keep the conversation going", category: "Optional · Social", description: "An informal nearby social for anyone who wants to stay a little longer.", detail: "Join colleagues at a nearby pub after the event. The venue will be confirmed on the day.", icon: Coffee },
];

const filters = ["All day", "Morning", "Afternoon"] as const;

export default function EventProgramme() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All day");
  const visibleSessions = sessions.filter((session) => filter === "All day" || session.period === filter);

  return (
    <section id="programme" aria-labelledby="programme-title" className="relative border-t border-white/10 bg-bg-dark-1 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="event-eyebrow">The programme</p>
            <h2 id="programme-title" className="mt-4 text-4xl leading-tight font-black tracking-tight md:text-5xl">
              A loose plan.<br /><span className="text-punk-yellow">A shared day.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              A guide to our time together, not a conference agenda. Browse the
              activities and open anything that catches your eye.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">A little room for spontaneity</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Lunch is provided. Any contributions from speakers will be
                informal, rather than scheduled talks. An exact schedule
                will be confirmed nearer the day.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-sm">
              <Link href="/activities/am" className="inline-flex min-h-11 items-center gap-2 font-semibold text-punk-yellow hover:underline">
                Morning guide <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/activities/pm" className="inline-flex min-h-11 items-center gap-2 font-semibold text-punk-pink-bright hover:underline">
                Afternoon guide <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <div role="group" aria-label="Filter programme by time of day" className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-black/20 p-2">
              {filters.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={filter === option}
                  aria-controls="programme-sessions"
                  onClick={() => setFilter(option)}
                  className="event-filter min-h-11 flex-1 rounded-xl px-4 py-3 text-sm font-semibold whitespace-nowrap"
                >
                  {option}
                </button>
              ))}
            </div>
            <p role="status" className="mt-4 mb-5 text-xs text-slate-400">
              {visibleSessions.length} activities · {filter}
            </p>
            <ol id="programme-sessions" className="space-y-3">
              {visibleSessions.map(({ id, time, title, category, description, detail, icon: Icon }) => (
                <li key={id}>
                  <details className="event-session group rounded-2xl border border-white/10 bg-white/[0.025]">
                    <summary className="flex cursor-pointer list-none items-start gap-4 rounded-2xl p-5">
                      <span className="mt-1 hidden rounded-xl border border-white/10 bg-white/5 p-2.5 text-punk-yellow sm:block">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold tracking-wide text-punk-pink-bright">{time} · {category}</span>
                        <span className="mt-2 block text-lg leading-snug font-bold text-white">{title}</span>
                        <span className="mt-2 block text-sm leading-relaxed text-slate-400">{description}</span>
                      </span>
                      <ChevronDown size={18} className="mt-1 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="event-session-content border-t border-white/10 px-5 py-5 sm:pl-[5.25rem]">
                      <p className="text-sm leading-relaxed text-slate-300">{detail}</p>
                    </div>
                  </details>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
