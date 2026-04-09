type ChipVariant = "dark" | "light";

const styles: Record<ChipVariant, string> = {
  dark: "text-dark/60",
  light: "text-text-muted",
};

export function ChipRow({
  items,
  variant = "dark",
}: {
  items: string[];
  variant?: ChipVariant;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
      {items.map((item, i) => (
        <span key={item} className={`flex items-center gap-2 ${styles[variant]}`}>
          {i > 0 && (
            <span className="opacity-40" aria-hidden="true">
              ·
            </span>
          )}
          {item}
        </span>
      ))}
    </div>
  );
}
