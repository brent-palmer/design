import type { HTMLAttributes } from "react";

type TextSize = "sm" | "base" | "lg";

type TextProps = {
  muted?: boolean;
  size?: TextSize;
} & HTMLAttributes<HTMLParagraphElement>;

const sizeClasses: Record<TextSize, string> = {
  sm: "text-sm leading-relaxed",
  base: "text-lg leading-[1.7]",
  lg: "text-lg leading-[1.7]",
};

export function Text({
  muted = false,
  size = "base",
  className = "",
  ...props
}: TextProps) {
  return (
    <p
      className={`${sizeClasses[size]} ${muted ? "text-muted-foreground" : "text-foreground"} ${className}`.trim()}
      {...props}
    />
  );
}
