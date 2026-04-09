"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";
import { featureIconMap } from "@/components/icons/FeatureIcons";
import { copy } from "@/config/copy";

export function FeatureCards() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="features"
        aria-labelledby="features-heading"
        className="relative bg-dark text-text-on-dark px-5 py-20 md:py-28 lg:py-36 overflow-hidden"
      >
        <div className="relative mx-auto max-w-5xl">
          {/* Section header */}
          <FadeInView>
            <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
              <h2 id="features-heading" className="text-h2 text-white">
                {copy.features.eyebrow}
              </h2>
            </div>
          </FadeInView>

          {/* 2x2 card grid */}
          <StaggerChildren className="grid gap-5 md:gap-6 md:grid-cols-2" stagger={0.12}>
            {copy.features.cards.map((card) => {
              const Icon = featureIconMap[card.icon];
              return (
                <m.div
                  key={card.title}
                  variants={staggerItem}
                  className="group relative rounded-3xl bg-[#111] border border-white/[0.06] p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-end transition-all duration-300 hover:border-cyan/20 overflow-hidden"
                >
                  {/* Icon — top left */}
                  <div className="absolute top-8 left-8 md:top-10 md:left-10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/10">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Subtle corner glow on hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyan/0 group-hover:bg-cyan/[0.04] rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

                  {/* Content — bottom */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide text-cyan leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-white/50 leading-relaxed text-[15px]">
                      {card.body}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>
    </LazyMotion>
  );
}
