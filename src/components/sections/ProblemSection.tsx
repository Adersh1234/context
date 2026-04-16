"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";

const items = [
  { text: "That stat from the PDF you closed an hour ago.", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="#299FD2" strokeWidth="1.5"/><path d="M14 2v6h6" stroke="#299FD2" strokeWidth="1.5"/></svg> },
  { text: "That Slack message from three days ago.", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { text: "That number you scrolled past in a spreadsheet.", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#299FD2" strokeWidth="1.5"/><path d="M3 9h18M3 15h18M9 3v18" stroke="#299FD2" strokeWidth="1" opacity="0.4"/></svg> },
  { text: "That link you had open in a tab last Tuesday.", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#299FD2" strokeWidth="1.5"/><path d="M2 8h20" stroke="#299FD2" strokeWidth="1.5"/></svg> },
];

export function ProblemSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="problem" className="bg-dark text-white px-5 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <FadeInView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-wider text-cyan font-medium mb-4">The problem</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                You&apos;ve already seen the answer.
              </h2>
              <h2 className="text-2xl md:text-3xl font-bold text-cyan mt-1">
                You just can&apos;t find it.
              </h2>
            </div>
          </FadeInView>

          <StaggerChildren className="grid gap-4 md:grid-cols-2" stagger={0.08}>
            {items.map((item) => (
              <m.div
                key={item.text}
                variants={staggerItem}
                className="group flex items-center gap-4 rounded-2xl bg-dark-card border border-dark-border px-6 py-5 transition-all duration-300 hover:border-dark-border-hover"
              >
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/10">
                  {item.icon}
                </div>
                <p className="text-text-muted text-[15px] leading-relaxed group-hover:text-white/70 transition-colors duration-300">{item.text}</p>
              </m.div>
            ))}
          </StaggerChildren>

          <FadeInView delay={0.3}>
            <div className="mt-14 text-center">
              <p className="text-text-muted text-base leading-relaxed max-w-lg mx-auto">
                The information exists. You&apos;ve already seen it. Every other tool expects you to save it, tag it, or remember where it lives.
              </p>
              <p className="mt-6 text-2xl md:text-3xl font-bold text-cyan">Ve remembers instead.</p>
            </div>
          </FadeInView>
        </div>
      </section>
    </LazyMotion>
  );
}
