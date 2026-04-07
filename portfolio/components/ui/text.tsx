import type { HTMLAttributes } from "react";

type TextSize = "sm" | "base" | "lg";

type TextProps = {
  muted?: boolean;
  size?: TextSize;
} & HTMLAttributes<HTMLParagraphElement>;

const sizeClasses: Record<TextSize, string> = {
  sm: "text-sm leading-relaxed",
  base: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
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
