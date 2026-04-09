"use client";

import { Button } from "@/components/ui/Button";
import { ChipRow } from "@/components/ui/Chip";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative bg-chartreuse text-dark overflow-hidden px-5 min-h-dvh flex flex-col items-center justify-center">
      <div className="relative mx-auto max-w-4xl text-center">
        <FadeInView delay={0.1}>
          <h1 id="hero-heading" className="text-hero text-cyan">
            {copy.hero.h1Line1}<br />{copy.hero.h1Line2}
          </h1>
        </FadeInView>

        <FadeInView delay={0.3}>
          <p className="mt-6 text-lg md:text-xl text-cyan font-medium max-w-2xl mx-auto leading-relaxed capitalize">{copy.hero.subhead}</p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button variant="primary" href={copy.hero.ctaLink}>{copy.hero.cta}</Button>
            <ChipRow items={copy.hero.trustChips} variant="dark" />
          </div>
        </FadeInView>
      </div>

      {/* Privacy line pinned to bottom */}
      <FadeInView delay={0.5}>
        <p className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2 text-sm text-dark/60">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="3" y="6" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M5 6V4.5a2 2 0 114 0V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {copy.hero.privacyLine}
        </p>
      </FadeInView>
    </section>
  );
}
