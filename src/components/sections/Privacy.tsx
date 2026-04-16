"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";

const points = [
  {
    title: "Processed, not stored permanently",
    text: "Ve uses your screen data to power search, then discards it. It's not sitting in a database indefinitely.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6.5v5.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V6.5L12 2z" stroke="#299FD2" strokeWidth="1.5" /><path d="M9 12l2 2 4-4" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: "Never used to train AI models",
    text: "Your data works for you, not for us. Nothing you see on your screen improves anyone else's product.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#299FD2" strokeWidth="1.5" /><path d="M4 4l16 16" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  },
  {
    title: "CASA Tier 2 certified",
    text: "Independent verification that Ve meets enterprise-grade security standards for how your data is handled in transit and at rest.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="14" rx="2" stroke="#299FD2" strokeWidth="1.5" /><path d="M8 22h8M12 18v4" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" /><path d="M9 11l2 2 4-4" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
];

export function Privacy() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="privacy" className="bg-dark text-white px-5 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <FadeInView>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-h2 text-white">Your screen data is handled with the care it deserves.</h2>
              <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
                Ve is CASA Tier 2 certified, one of the most rigorous independent security standards for cloud applications.
              </p>
            </div>
          </FadeInView>
          <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {points.map((point) => (
              <m.div key={point.title} variants={staggerItem} className="group rounded-2xl bg-dark-card border border-dark-border p-7 transition-all duration-300 hover:border-dark-border-hover">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan/10 mb-5">{point.icon}</div>
                <h3 className="text-base font-semibold text-cyan mb-2">{point.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{point.text}</p>
              </m.div>
            ))}
          </StaggerChildren>
          <FadeInView delay={0.3}>
            <p className="mt-14 text-center text-lg font-medium text-cyan">
              No selling your data. No human browsing your screen. No permanent storage.
            </p>
          </FadeInView>
        </div>
      </section>
    </LazyMotion>
  );
}
