"use client";

import { m, LazyMotion, domAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

function StepCard({ step }: { step: { number: number; title: string; body: string } }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <m.div ref={ref} style={{ opacity, y }} className="group relative flex items-start gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-dark-card border border-dark-border transition-all duration-300 hover:border-dark-border-hover">
      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-cyan/10 border border-cyan/20 group-hover:bg-cyan group-hover:border-cyan transition-colors duration-300">
        <span className="text-sm font-semibold text-cyan group-hover:text-white transition-colors duration-300">{String(step.number).padStart(2, "0")}</span>
      </div>
      <div className="pt-1">
        <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
        <p className="mt-2 text-text-muted leading-relaxed max-w-lg">{step.body}</p>
      </div>
    </m.div>
  );
}

export function HowItWorks() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="how-it-works" className="bg-chartreuse text-dark px-5 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <p className="text-sm uppercase tracking-wider text-cyan font-medium">{copy.howItWorks.eyebrow}</p>
            <h2 className="text-h2 text-dark mt-3 mb-10">{copy.howItWorks.h2}</h2>
          </FadeInView>

          <div className="flex flex-col gap-5">
            {copy.howItWorks.steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
