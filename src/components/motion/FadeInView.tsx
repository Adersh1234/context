"use client";

import { m, useReducedMotion, LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

type FadeInViewProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export function FadeInView({
  children,
  delay = 0,
  y = 20,
  className = "",
  once = true,
}: FadeInViewProps) {
  const reduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={reduced ? false : { opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: "-50px" }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
