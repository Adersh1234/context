"use client";

import { useState } from "react";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

type AccordionItemProps = { question: string; answer: string };

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const id = question.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="border-b border-dark-border">
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`faq-${id}`} className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-white transition-colors hover:text-cyan">
        {question}
        <m.svg width="20" height="20" viewBox="0 0 20 20" fill="none" animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 ml-4" aria-hidden="true">
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </m.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <m.div id={`faq-${id}`} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden">
            <p className="pb-5 text-text-muted leading-relaxed">{answer}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items }: { items: AccordionItemProps[] }) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full max-w-2xl mx-auto">
        {items.map((item) => (<AccordionItem key={item.question} {...item} />))}
      </div>
    </LazyMotion>
  );
}
