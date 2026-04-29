"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  ariaLabel: string;
  className?: string;
}

export function LazyVideo({ src, ariaLabel, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "500px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      aria-label={ariaLabel}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
}
