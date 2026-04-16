"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";

const personas = [
  { role: "The Developer", body: "Find that one StackOverflow snippet from this morning, without scrolling through 40 browser tabs.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { role: "The Researcher", body: "Recall that specific stat from a report you closed yesterday. Ve finds the exact screen moment.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#299FD2" strokeWidth="1.5" /><path d="M12 8v4l2.5 2.5" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" /></svg> },
  { role: "The Operator", body: "Search across Slack, Zoom, email, and docs in one place. In seconds.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#299FD2" strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#299FD2" strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#299FD2" strokeWidth="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#299FD2" strokeWidth="1.5" /></svg> },
];

export function VeAttention() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="perfect-for" className="bg-chartreuse text-dark px-5 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeInView>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-wider text-cyan font-medium mb-3">Perfect for</p>
              <h2 className="text-h2 text-dark">Built for people who work with information all day.</h2>
            </div>
          </FadeInView>
          <StaggerChildren className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            {personas.map((p) => (
              <m.div key={p.role} variants={staggerItem} className="group rounded-2xl bg-white/80 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-dark/5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan/10 mb-5">{p.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-3">{p.role}</h3>
                <p className="text-dark/50 text-sm leading-relaxed">{p.body}</p>
              </m.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </LazyMotion>
  );
}
