"use client";

import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

export function FinalCTA() {
  return (
    <section id="download" className="bg-chartreuse text-dark px-5 py-16 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <FadeInView>
          <h2 className="text-h2 text-cyan">{copy.finalCta.h2}</h2>
        </FadeInView>
        <FadeInView delay={0.1}>
          <p className="mt-4 text-base md:text-lg text-dark/50 leading-relaxed max-w-xl mx-auto">{copy.finalCta.subhead}</p>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="mt-8">
            <a href={copy.finalCta.ctaLink} className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 md:px-8 md:py-4 font-semibold text-sm md:text-base text-dark transition-all duration-300 cursor-pointer hover:bg-white/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
              {copy.finalCta.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
