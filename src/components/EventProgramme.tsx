"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Coffee, Sparkles, Users } from "lucide-react";

const sessions = [
  { id: "arrival", period: "Morning", time: "09:00", title: "Coffee & arrival", category: "Getting started", description: "Get settled and have a chat before the day begins.", detail: "A chance to arrive and catch up with colleagues.", icon: Coffee },
  { id: "welcome", period: "Morning", time: "10:00", title: "Welcome from organisers", category: "Welcome", description: "Get everyone together and settle into the day.", detail: "A welcome introduction from the event organisers.", icon: Users },
  { id: "localai-update", period: "Morning", time: "10:05", title: "Update on Local AI from Kat Sexton", category: "Talk", description: "Hear about Local AI developments and initiatives.", detail: "An update from Kat Sexton on the Local AI project.", icon: Sparkles },
  { id: "bias-talk", period: "Morning", time: "10:30", title: "Softwire inspiration talk: \"Bias as a Feature, Not a Bug\"", category: "Talk", description: "Elizabeth Jamieson explores how gender bias enters AI systems through structural choices.", detail: "A broadly accessible talk from Softwire Senior L&D Advisor Elizabeth Jamieson on responsible AI, covering examples such as biased hiring tools and healthcare AI that misses female presentations of disease, plus practical steps like dataset auditing and safety-by-design.", icon: Sparkles },
  { id: "newscast", period: "Morning", time: "11:00", title: "Hands-on challenge: AI catastrophe newscast", category: "Hands-on challenge", description: "Work in groups to prepare a newscast about an imagined AI problem.", detail: "A group activity where you'll work together to create a newscast, share it back, and capture key AI-risk themes.", icon: Users },
  { id: "lunch", period: "Afternoon", time: "12:30", title: "Lunch", category: "Break", description: "Lunch is provided.", detail: "Take a break and enjoy lunch with colleagues.", icon: Coffee },
  { id: "music", period: "Afternoon", time: "13:30", title: "Optional creative warm-up (music session)", category: "Optional · Music", description: "An informal music session in Softwire's music room.", detail: "A creative warm-up for anyone who would like to take part. Participation is optional.", icon: Sparkles },
  { id: "proportionate-talk", period: "Afternoon", time: "14:00", title: "Softwire talk: Proportionate by design", category: "Talk", description: "Softwire Public Sector Consultant Rumman Amin presents on governing AI without the friction.", detail: "Softwire Public Sector Consultant Rumman Amin explores how to govern AI effectively while maintaining proportionality.", link: "https://www.softwire.com/perspectives/proportionate-by-design-governing-ai-without-the-friction", icon: Sparkles },
  { id: "tea-break", period: "Afternoon", time: "14:45", title: "Tea & coffee break", category: "Break", description: "A quick break for refreshments.", detail: "Grab a hot drink and stretch your legs.", icon: Coffee },
  { id: "social-care", period: "Afternoon", time: "15:00", title: "Afternoon activity: Handling social care with care", category: "Activity", description: "Explore social care considerations in AI systems.", detail: "An afternoon activity focused on how AI can be applied thoughtfully in social care.", icon: Users },
  { id: "feedback", period: "Afternoon", time: "15:30", title: "Feedback on the morning hands-on challenge", category: "Reflection", description: "Share insights from the newscast activity.", detail: "A chance to reflect on and discuss the morning's hands-on challenge.", icon: Users },
  { id: "closing", period: "Afternoon", time: "15:40", title: "Quarterly planning and closing vote of thanks", category: "Closing", description: "Wrap up the day with thanks and next steps.", detail: "Closing remarks, quarterly planning insights, and a vote of thanks for the day.", icon: Sparkles },
  { id: "social", period: "Afternoon", time: "16:00 onwards", title: "Optional social at The Vine pub", category: "Optional · Social", description: "Join colleagues at a nearby pub across the street.", detail: "Optional social at The Vine pub, 86 Highgate Rd, London NW5 1PB. Continue the conversation in a relaxed setting.", icon: Coffee },
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
              A day with direction.<br /><span className="text-punk-yellow">Plenty of space to explore.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              A guide to the day, not a conference agenda. Browse the
              activities and open anything that catches your eye.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">A structured day with space to reflect</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Lunch is provided. The day includes scheduled talks, practical
                activities and time between sessions to compare notes with
                colleagues.
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
              {visibleSessions.map(({ id, time, title, category, description, detail, link, icon: Icon }) => (
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
                      {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-punk-yellow hover:underline">
                          Learn more <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
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
