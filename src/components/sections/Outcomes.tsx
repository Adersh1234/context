"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";

const outcomes = [
  {
    title: 'Stop the "where did I see that?" hunt',
    body: "Ve surfaces anything from your screen history, instantly. The 15-minute hunt becomes a 5-second search.",
    metric: "15 min → 5 sec",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#299FD2" strokeWidth="1.5" /><path d="M16 16l5 5" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  },
  {
    title: "One search. Every app.",
    body: "Slack, PDFs, email, browser tabs. Ve searches across all of it at once.",
    metric: "All apps, one query",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#299FD2" strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#299FD2" strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#299FD2" strokeWidth="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#299FD2" strokeWidth="1.5" /></svg>,
  },
  {
    title: "Ask like talking to a colleague",
    body: 'Just describe what you remember: "that funding slide from the pitch deck." Ve understands context, not keywords.',
    metric: "Context-aware",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: "Switch tasks without losing your place",
    body: "Close 12 tabs, start something new. Come back an hour later and pick up exactly where you were.",
    metric: "Zero context lost",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 1l4 4-4 4" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 13v2a4 4 0 01-4 4H3" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
];

export function Outcomes() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="outcomes" className="bg-dark text-white px-5 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <FadeInView>
            <p className="text-sm uppercase tracking-wider text-cyan font-medium mb-3">Features</p>
            <h2 className="text-h2 text-white mb-14">What changes in your day.</h2>
          </FadeInView>

          <StaggerChildren className="grid gap-5 md:grid-cols-2" stagger={0.1}>
            {outcomes.map((item) => (
              <m.div key={item.title} variants={staggerItem} className="group rounded-2xl bg-dark-card border border-dark-border p-7 md:p-8 h-full transition-all duration-300 hover:border-dark-border-hover">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/10 flex items-center justify-center">{item.icon}</div>
                  <span className="text-[11px] font-medium text-cyan bg-cyan/10 px-3 py-1 rounded-full">{item.metric}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.body}</p>
              </m.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </LazyMotion>
  );
}
