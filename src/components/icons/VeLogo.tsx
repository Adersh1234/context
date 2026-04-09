export function VeLogo({
  className = "h-8",
  variant = "blue",
}: {
  className?: string;
  variant?: "blue" | "dark" | "white";
}) {
  const filterStyle =
    variant === "dark"
      ? { filter: "brightness(0)" }
      : variant === "white"
        ? { filter: "brightness(0) invert(1)" }
        : {};

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://us.images.ve.ai/public/dashboard/image.png"
      alt="Ve"
      className={`${className} w-auto object-contain`}
      style={filterStyle}
    />
  );
}
