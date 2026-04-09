type SectionBg = "chartreuse" | "dark";

const bgStyles: Record<SectionBg, string> = {
  chartreuse: "bg-chartreuse text-dark",
  dark: "bg-dark text-text-on-dark",
};

export function SectionWrapper({
  bg,
  id,
  className = "",
  children,
}: {
  bg: SectionBg;
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`px-5 py-20 md:py-24 lg:py-28 ${bgStyles[bg]} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
