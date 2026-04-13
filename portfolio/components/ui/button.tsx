import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost";

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

const variantClasses: Record<Variant, string> = {
  primary:
    "inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80",
  ghost:
    "inline-flex items-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/50",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${variantClasses[variant]} ${className}`.trim()}
      {...props}
    />
  );
}
