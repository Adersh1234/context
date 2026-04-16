"use client";

import { FadeInView } from "@/components/motion/FadeInView";

const testimonials = [
  { quote: "I typed a question and it found a Slack message from three days ago. I had completely forgotten it existed.", name: "Sarah K.", title: "Product Lead" },
  { quote: "The thing that got me was searching for something I half-remembered from a PDF I'd closed. It found it immediately.", name: "James R.", title: "Founder & CEO" },
];

export function ProofBar() {
  return (
    <section className="bg-dark border-y border-dark-border px-5 py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <FadeInView>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            {testimonials.map((t) => (
              <div key={t.name}>
                <p className="text-text-muted text-base md:text-lg leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm"><span className="text-white font-medium">{t.name}</span><span className="text-text-muted">, {t.title}</span></p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
