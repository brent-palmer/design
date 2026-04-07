import type { ElementType, HTMLAttributes } from "react";

type HeadingLevel = 1 | 2 | 3;
type HeadingVariant = "display" | "title" | "label";

type HeadingProps<T extends ElementType = "h1"> = {
  as?: T;
  level?: HeadingLevel;
  variant?: HeadingVariant;
} & Omit<HTMLAttributes<HTMLElement>, "as">;

const variantClasses: Record<HeadingVariant, string> = {
  display:
    "text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground",
  title: "text-3xl sm:text-4xl font-semibold tracking-tight text-foreground",
  label:
    "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground font-mono",
};

export function Heading<T extends ElementType = "h1">({
  as,
  level = 1,
  variant,
  className = "",
  ...props
}: HeadingProps<T>) {
  const Tag = (as ?? (`h${level}` as const)) as ElementType;
  const resolvedVariant =
    variant ??
    (level === 1 ? "display" : level === 2 ? "title" : "label");
  return (
    <Tag
      className={`${variantClasses[resolvedVariant]} ${className}`.trim()}
      {...props}
    />
  );
}
