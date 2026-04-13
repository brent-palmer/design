"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Container } from "@/components/ui/container";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

type PillRect = { left: number; top: number; width: number; height: number };

export function SiteHeader() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [pill, setPill] = useState<PillRect | null>(null);
  const [transition, setTransition] = useState(false);

  const activeIndex = nav.findIndex(({ href }) => pathname.startsWith(href));

  useLayoutEffect(() => {
    const navEl = navRef.current;
    const itemEl = itemRefs.current[activeIndex];

    if (activeIndex === -1 || !itemEl || !navEl) {
      setPill(null);
      setTransition(false);
      return;
    }

    const navRect = navEl.getBoundingClientRect();
    const itemRect = itemEl.getBoundingClientRect();
    setPill({
      left: itemRect.left - navRect.left,
      top: itemRect.top - navRect.top,
      width: itemRect.width,
      height: itemRect.height,
    });

    // Mirror CodyHouse: show pill first, then enable transition after one frame
    // so the pill doesn't animate in from position 0 on first appearance.
    if (!transition) {
      const t = setTimeout(() => setTransition(true), 10);
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useLayoutEffect(() => {
    const navEl = navRef.current;
    if (activeIndex === -1 || !navEl) return;

    const handleResize = () => {
      const itemEl = itemRefs.current[activeIndex];
      if (!itemEl) return;
      const navRect = navEl.getBoundingClientRect();
      const itemRect = itemEl.getBoundingClientRect();
      setPill({
        left: itemRect.left - navRect.left,
        top: itemRect.top - navRect.top,
        width: itemRect.width,
        height: itemRect.height,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-8 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-foreground transition-opacity hover:opacity-70"
        >
          <Image
            src="/logo-light.svg"
            alt="Brent Palmer"
            width={32}
            height={32}
            priority
            className="size-8"
          />
        </Link>
        <nav ref={navRef} className="relative flex flex-wrap items-center justify-end gap-y-2">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-[1] rounded-xl bg-foreground/10"
            style={{
              transform: pill ? `translateX(${pill.left}px) translateY(${pill.top}px)` : "none",
              width: pill?.width ?? 0,
              height: pill?.height ?? 0,
              opacity: pill ? 1 : 0,
              transformOrigin: "left top",
              backfaceVisibility: "hidden",
              willChange: "transform, width, height, border-radius",
              transition: transition
                ? "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), width 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms"
                : "opacity 300ms",
            }}
          />
          {nav.map(({ href, label }, i) => (
            <span key={href} ref={(el) => { itemRefs.current[i] = el; }} className="relative z-[2]">
              <Link
                href={href}
                className={`block px-4 py-1.5 text-sm transition-colors ${
                  pathname.startsWith(href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </span>
          ))}
          <CopyEmailButton className="px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground" />
        </nav>
      </Container>
    </header>
  );
}
