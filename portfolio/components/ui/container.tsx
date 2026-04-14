import type { ElementType, HTMLAttributes } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
} & Omit<HTMLAttributes<HTMLElement>, "as">;

export function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: ContainerProps<T> & { as?: T }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = (as ?? "div") as any;
  return (
    <Component
      className={`max-w-reading mx-auto px-6 sm:px-8 ${className}`.trim()}
      {...(props as Record<string, unknown>)}
    />
  );
}
