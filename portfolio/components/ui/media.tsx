import type { HTMLAttributes } from "react";

export function Media({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`py-6 sm:py-10 [&_figcaption]:hidden lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-[min(100vw-2rem,80rem)] ${className}`.trim()}
      {...props}
    />
  );
}
