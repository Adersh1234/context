"use client";

import { useState } from "react";
import { VeLogo } from "@/components/icons/VeLogo";
import { copy } from "@/config/copy";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-chartreuse/90 backdrop-blur-md" aria-label="Main navigation">
      <div className="flex items-center justify-between px-5 md:px-8 py-4">
        <a href="/" aria-label="Ve home">
          <VeLogo className="h-8 md:h-10" variant="blue" />
        </a>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="hidden md:inline text-sm font-medium text-dark/70 hover:text-dark transition-colors">How it works</a>
          <a href="#features" className="hidden md:inline text-sm font-medium text-dark/70 hover:text-dark transition-colors">Features</a>
          <a href="#privacy" className="hidden md:inline text-sm font-medium text-dark/70 hover:text-dark transition-colors">Privacy</a>
          <a href={copy.hero.ctaLink} className="hidden md:inline-flex items-center rounded-full bg-cyan px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-cyan/90 hover:scale-[1.02] active:scale-[0.98]">{copy.hero.cta}</a>
          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle menu">
            <span className={`block w-5 h-0.5 bg-dark transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-dark transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-dark transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-chartreuse border-t border-dark/10 px-5 py-4 flex flex-col gap-3">
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm font-medium text-dark/70 py-2">How it works</a>
          <a href="#features" onClick={() => setOpen(false)} className="text-sm font-medium text-dark/70 py-2">Features</a>
          <a href="#privacy" onClick={() => setOpen(false)} className="text-sm font-medium text-dark/70 py-2">Privacy</a>
          <a href={copy.hero.ctaLink} onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-white mt-2">{copy.hero.cta}</a>
        </div>
      )}
    </nav>
  );
}
