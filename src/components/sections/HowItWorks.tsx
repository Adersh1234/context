"use client";

import { m, LazyMotion, domAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { copy } from "@/config/copy";

function StepCard({
  step,
}: {
  step: { number: number; title: string; body: string };
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <m.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="group relative flex items-start gap-6 md:gap-8 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white/90 hover:backdrop-blur-sm hover:shadow-xl hover:shadow-black/5 hover:-mx-2 md:hover:-mx-4"
    >
      {/* Number circle */}
      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 group-hover:bg-cyan/10 group-hover:border-cyan/30 transition-colors duration-300">
        <span className="text-sm font-semibold text-white/60 group-hover:text-cyan transition-colors duration-300">
          {String(step.number).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-dark transition-colors duration-300">{step.title}</h3>
        <p className="mt-2 text-white/50 group-hover:text-dark/50 leading-relaxed max-w-md transition-colors duration-300">{step.body}</p>
      </div>
    </m.div>
  );
}

export function HowItWorks() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="bg-dark text-white px-5 py-24 md:py-32 lg:py-40 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl">
          <div>
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="text-sm uppercase tracking-wider text-cyan font-medium mb-4">
                {copy.howItWorks.eyebrow}
              </p>
              {copy.howItWorks.steps.map((step) => (
                <StepCard key={step.number} step={step} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
