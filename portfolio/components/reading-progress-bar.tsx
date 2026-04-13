"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function ReadingProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);
  const [out, setOut] = useState(false);
  const rafPending = useRef(false);

  useEffect(() => {
    const content = document.querySelector<HTMLElement>("[data-reading-content]");
    if (!content) return;

    const update = () => {
      const rect = content.getBoundingClientRect();
      const height = content.offsetHeight;
      const winH = window.innerHeight;

      if (height <= winH) {
        setActive(false);
        rafPending.current = false;
        return;
      }

      setActive(true);
      const value = rect.top >= 0 ? 0 : Math.min(100, ((0 - rect.top) / (height - winH)) * 100);
      setProgress(value);
      setOut(rect.bottom <= 0);
      rafPending.current = false;
    };

    const onScroll = () => {
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    if (document.fonts) document.fonts.ready.then(update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 h-[4px] w-full"
      style={{
        transform: out ? "translateY(-100%)" : "translateY(0)",
        opacity: active ? 1 : 0,
        transition: "transform 0.2s, opacity 0.2s",
      }}
    >
      <div
        className="h-full bg-accent"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
}
