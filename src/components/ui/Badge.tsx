export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-dark/10 px-4 py-1.5 text-sm font-medium text-dark/80">
      {children}
    </span>
  );
}
