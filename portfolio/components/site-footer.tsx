import Link from "next/link";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Container } from "@/components/ui/container";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10">
      <Container className="flex items-center justify-between gap-8 py-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BPD. Made in Texas.
        </p>
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
          <a
            href="/Brent-Palmer-CV-2026.pdf"
            download
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
          <CopyEmailButton className="text-sm text-muted-foreground transition-colors hover:text-foreground" />
        </nav>
      </Container>
    </footer>
  );
}
