"use client";

import { m, useReducedMotion, LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
};

const container = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function StaggerChildren({
  children,
  className = "",
  stagger = 0.08,
  once = true,
}: StaggerChildrenProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={container(stagger)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
