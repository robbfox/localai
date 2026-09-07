"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const prompts = [
  "What is something you enjoy doing outside work?",
  "What is a small win from the last few weeks that we might have missed?",
  "If we could simplify one part of our day-to-day work, what would you change?",
  "What is something a teammate has helped you with recently?",
  "What have you read, watched or listened to lately that you would recommend?",
  "What would you like to try together as a team?",
];

export default function TeamConnection() {
  const [promptIndex, setPromptIndex] = useState(0);

  return (
    <section id="together" aria-labelledby="together-title" className="border-t border-white/10 bg-bg-dark-2 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 md:px-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="event-eyebrow">Room for a conversation</p>
          <h2 id="together-title" className="mt-4 text-4xl leading-tight font-black tracking-tight md:text-5xl">The best bits might<br />be between activities.</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-slate-300">
            Whether you see colleagues most days or less often, there is
            value in a conversation without a task list attached. Use the
            breaks to compare notes, follow up on an idea or just catch up.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-slate-400">
            There is no need to fill every minute. Grab a coffee, join a
            conversation or take a breather between activities.
          </p>
          <div className="mt-7 border-l-2 border-punk-yellow pl-5">
            <p className="text-sm leading-relaxed text-slate-300">
              Just for LocalAI and Softwire colleagues. Refer to your event
              invitation for attendance arrangements.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-punk-yellow/25 bg-gradient-to-br from-punk-yellow/[0.08] to-white/[0.02] p-7 md:p-9">
          <div className="flex items-center gap-3 text-punk-yellow">
            <MessageCircle size={22} aria-hidden="true" />
            <h3 className="text-sm font-semibold">A conversation starter</h3>
          </div>
          <p className="mt-3 text-sm text-slate-400">No icebreaker circle required. Just a little inspiration.</p>
          <div aria-live="polite" aria-atomic="true" className="flex min-h-52 flex-col justify-center py-6">
            <p key={promptIndex} className="event-session-content text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
              {prompts[promptIndex]}
            </p>
            <p className="mt-5 text-xs text-slate-400">Prompt {promptIndex + 1} of {prompts.length}</p>
          </div>
          <button type="button" onClick={() => setPromptIndex((index) => (index + 1) % prompts.length)} className="event-button event-button-primary">
            Try another prompt <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
