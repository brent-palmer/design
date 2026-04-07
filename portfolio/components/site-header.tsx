import Link from "next/link";
import { Container } from "@/components/ui/container";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-8 py-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          Brent Palmer
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
