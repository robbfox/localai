"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const prompts = [
  "What is something you enjoy doing that never comes up on a work call?",
  "What is a small win from the last few weeks that we might have missed?",
  "If we could make one part of remote working better, what would you change?",
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
          <p className="event-eyebrow">Same team. Same room. For a change.</p>
          <h2 id="together-title" className="mt-4 text-4xl leading-tight font-black tracking-tight md:text-5xl">The best bits might<br />be between activities.</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-slate-300">
            Working remotely gives us plenty of video calls, but fewer chances
            for a proper catch-up. This is time to put faces to names, pick up
            conversations and get to know the people behind the work.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-slate-400">
            Come for the shared activities, stay for the conversations. There
            is room to listen, join in and find your own pace.
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
