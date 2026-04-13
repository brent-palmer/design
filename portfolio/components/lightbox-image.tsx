"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface LightboxImageProps {
  src: string;
  alt: string;
  caption?: string;
  sizes?: string;
  priority?: boolean;
}

function LightboxOverlay({
  src,
  alt,
  caption,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        style={{ animation: "lightbox-in 0.2s ease-out" }}
        className="flex flex-col items-center gap-4 px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[85vh] max-w-[90vw]">
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            className="object-contain max-h-[85vh] max-w-[90vw] w-auto h-auto"
            sizes="90vw"
          />
        </div>
        {caption && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {caption}
          </p>
        )}
      </div>
      <button
        onClick={onClose}
        className="absolute top-6 right-6 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close lightbox"
      >
        ✕
      </button>
    </div>
  );
}

export function LightboxImage({ src, alt, caption, sizes, priority }: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    if (window.innerWidth >= 768) setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, handleClose]);

  return (
    <>
      <figure className="space-y-3">
        <div
          className="relative aspect-[16/9] w-full overflow-hidden md:cursor-zoom-in"
          onClick={handleOpen}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={sizes ?? "(max-width: 768px) 100vw, min(1200px, 100vw)"}
            priority={priority}
          />
        </div>
        {caption && (
          <figcaption className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>
      {open && createPortal(
        <LightboxOverlay src={src} alt={alt} caption={caption} onClose={handleClose} />,
        document.body
      )}
    </>
  );
}
