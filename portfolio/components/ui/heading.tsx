import type { ElementType, HTMLAttributes } from "react";

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingVariant =
  | "display"
  | "title"
  | "label"
  | "projectTitle"
  | "eyebrow"
  | "h2"
  | "h3"
  | "h4";

type HeadingProps<T extends ElementType = "h1"> = {
  as?: T;
  level?: HeadingLevel;
  variant?: HeadingVariant;
} & Omit<HTMLAttributes<HTMLElement>, "as">;

const variantClasses: Record<HeadingVariant, string> = {
  display:
    "text-5xl sm:text-6xl md:text-7xl font-light tracking-[1.3px] leading-[90%] text-foreground font-heading",
  title:
    "text-7xl font-light tracking-normal leading-[100%] text-foreground font-heading",
  projectTitle:
    "text-5xl sm:text-5xl font-light tracking-[0.5px] leading-[100%] text-foreground font-heading",
  label:
    "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground font-mono",
  eyebrow:
    "text-base font-medium leading-snug tracking-tight text-muted-foreground font-sans",
  h2: "text-4xl sm:text-5xl font-light tracking-[0.5px] leading-tight text-foreground font-heading",
  h3: "text-2xl font-semibold leading-snug tracking-normal text-foreground font-sans",
  h4: "text-xl font-semibold leading-snug tracking-tight text-foreground font-sans",
};

export function Heading<T extends ElementType = "h1">({
  as,
  level = 1,
  variant,
  className = "",
  ...props
}: HeadingProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = (as ?? (`h${level}` as const)) as any;
  const resolvedVariant =
    variant ??
    (level === 1 ? "display" : level === 2 || level === 4 ? "title" : "label");
  return (
    <Tag
      className={`${variantClasses[resolvedVariant]} ${className}`.trim()}
      {...(props as Record<string, unknown>)}
    />
  );
}
