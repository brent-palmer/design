import type { ElementType, HTMLAttributes } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
} & Omit<HTMLAttributes<HTMLElement>, "as">;

export function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: ContainerProps<T> & { as?: T }) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={`max-w-content mx-auto px-6 sm:px-8 ${className}`.trim()}
      {...props}
    />
  );
}
