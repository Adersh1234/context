"use client";

import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost" | "onDark";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-dark text-chartreuse hover:bg-[#1a2a2a] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(241,255,10,0.3)]",
  ghost:
    "border border-dark bg-transparent text-dark hover:bg-dark/10",
  onDark:
    "bg-chartreuse text-dark hover:bg-chartreuse-dim hover:scale-[1.02] active:scale-[0.98]",
};

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`group inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-base transition-all duration-300 cursor-pointer select-none ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        <path
          d="M3 8h10m0 0L9 4m4 4L9 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
