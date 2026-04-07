import type { HTMLAttributes } from "react";

export function Section({
  className = "",
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={`py-24 sm:py-32 ${className}`.trim()}
      {...props}
    />
  );
}
