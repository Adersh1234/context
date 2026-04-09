export function EyeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M2 14s4.5-8 12-8 12 8 12 8-4.5 8-12 8S2 14 2 14z" stroke="#00C8FF" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="4" stroke="#00C8FF" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="1.5" fill="#00C8FF" />
    </svg>
  );
}

export function ConnectionsIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="3" stroke="#00C8FF" strokeWidth="1.5" />
      <circle cx="21" cy="7" r="3" stroke="#00C8FF" strokeWidth="1.5" />
      <circle cx="14" cy="21" r="3" stroke="#00C8FF" strokeWidth="1.5" />
      <path d="M9.5 8.5L12.5 19M18.5 8.5L15.5 19M10 7h8" stroke="#00C8FF" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

export function SearchIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="#00C8FF" strokeWidth="1.5" />
      <path d="M17 17l7 7" stroke="#00C8FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 11h6M9 14h4" stroke="#00C8FF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3L5 7.5v6.5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7.5L14 3z" stroke="#00C8FF" strokeWidth="1.5" />
      <path d="M10 14l3 3 5-6" stroke="#00C8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const featureIconMap = {
  eye: EyeIcon,
  connections: ConnectionsIcon,
  search: SearchIcon,
  shield: ShieldIcon,
} as const;
