"use client";

import { FadeInView } from "@/components/motion/FadeInView";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/config/faq";

export function FAQ() {
  return (
    <section id="faq" className="bg-dark text-white px-5 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeInView>
          <h2 className="text-h2 text-white text-center mb-12">Common questions</h2>
        </FadeInView>
        <FadeInView delay={0.1}>
          <Accordion items={faqItems} />
        </FadeInView>
      </div>
    </section>
  );
}
