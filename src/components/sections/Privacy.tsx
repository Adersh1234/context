"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";

const cards = [
  {
    title: "CASA Tier 2",
    body: "With CASA Tier 2 compliance and industry-leading encryption, your emails stay private, secure, and protected always.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6.5v5.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V6.5L12 2z" stroke="#299FD2" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3" stroke="#299FD2" strokeWidth="1.5" />
        <path d="M12 9v1.5" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Encrypted End-To-End",
    body: "All data is encrypted using modern cryptographic standards in transit and at rest, ensuring secure communication without human access.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="#299FD2" strokeWidth="1.5" />
        <path d="M8 11V8a4 4 0 118 0v3" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="#299FD2" />
      </svg>
    ),
  },
  {
    title: "No Training On Your Data",
    body: "Your interactions are excluded from model training and analytics. We don't learn from your data your AI works only for you.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="5" rx="1.5" stroke="#299FD2" strokeWidth="1.5" />
        <rect x="5" y="10" width="14" height="5" rx="1.5" stroke="#299FD2" strokeWidth="1.5" />
        <rect x="5" y="17" width="14" height="5" rx="1.5" stroke="#299FD2" strokeWidth="1.5" />
        <circle cx="8" cy="5.5" r="1" fill="#299FD2" />
        <circle cx="8" cy="12.5" r="1" fill="#299FD2" />
        <circle cx="8" cy="19.5" r="1" fill="#299FD2" />
      </svg>
    ),
  },
];

export function Privacy() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="privacy" aria-labelledby="privacy-heading" className="bg-[#111215] text-white px-5 py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <FadeInView>
            <h2 id="privacy-heading" className="text-h2 text-white max-w-4xl uppercase font-extrabold leading-[1.05]">
              Privacy isn&apos;t a feature in Ve.
              <br />
              It&apos;s the foundation.
            </h2>
          </FadeInView>

          <StaggerChildren className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.1}>
            {cards.map((card) => (
              <m.div
                key={card.title}
                variants={staggerItem}
                className="group rounded-2xl bg-[#1a1d24] border border-white/[0.06] p-8 flex flex-col justify-end min-h-[260px] transition-all duration-300 hover:border-cyan/20"
              >
                {/* Icon */}
                <div className="mb-auto">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/10">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-cyan">{card.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{card.body}</p>
                </div>
              </m.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </LazyMotion>
  );
}
