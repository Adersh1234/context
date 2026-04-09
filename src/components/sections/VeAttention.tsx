"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";

const cards = [
  {
    title: "Chat with everything you've seen",
    body: "Ve already knows your work, so you can ask questions without catching it up first.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" stroke="#299FD2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Focus on what matters",
    body: "Stop re-opening tabs. Stop re-reading threads. Ve holds the context so your brain doesn't have to.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#299FD2" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="#299FD2" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.5" fill="#299FD2" />
      </svg>
    ),
  },
  {
    title: "Proactive recall, on your terms",
    body: "Ve surfaces what's relevant before you even ask, so you're always prepared, never scrambling.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#299FD2" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function VeAttention() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="ve-attention" className="bg-chartreuse text-dark px-5 py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <FadeInView>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-h2 text-dark">Ve pays attention</h2>
            </div>
          </FadeInView>

          <StaggerChildren className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            {cards.map((card) => (
              <m.div
                key={card.title}
                variants={staggerItem}
                className="group rounded-2xl bg-white/80 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-dark/5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-dark">{card.title}</h3>
                <p className="mt-3 text-dark/50 leading-relaxed text-[15px]">{card.body}</p>
              </m.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </LazyMotion>
  );
}
