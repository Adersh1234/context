"use client";

import { ChipRow } from "@/components/ui/Chip";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative bg-chartreuse text-dark overflow-hidden px-5 min-h-dvh flex flex-col items-center justify-center pt-20 pb-16">
      <div className="relative mx-auto max-w-5xl text-center px-1">
        <FadeInView delay={0.1}>
          <h1 id="hero-heading" className="text-hero text-cyan">
            {copy.hero.h1Line1}<br />{copy.hero.h1Line2}
          </h1>
        </FadeInView>

        <FadeInView delay={0.3}>
          <p className="mt-6 text-lg md:text-xl text-dark/60 max-w-2xl mx-auto leading-relaxed">{copy.hero.subhead}</p>
        </FadeInView>

        <FadeInView delay={0.45}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a href={copy.hero.ctaLink} className="group inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3.5 md:px-8 md:py-4 font-semibold text-sm md:text-base text-white transition-all duration-300 cursor-pointer hover:bg-cyan/90 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]">
              {copy.hero.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <ChipRow items={copy.hero.trustChips} variant="dark" />
          </div>
        </FadeInView>
      </div>

      <FadeInView delay={0.55}>
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
          <p className="flex items-center gap-2 text-sm text-dark/50">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="3" y="6" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5 6V4.5a2 2 0 114 0V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {copy.hero.privacyLine}
          </p>
        </div>
      </FadeInView>
    </section>
  );
}
