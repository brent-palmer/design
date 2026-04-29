"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface CompareSliderProps {
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
}

const LABEL_HIDE_THRESHOLD = 12;

export function CompareSlider({
  before,
  beforeAlt,
  after,
  afterAlt,
  caption,
  priority,
  sizes,
}: CompareSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setDragging(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  const beforeLabelHidden = position < LABEL_HIDE_THRESHOLD;
  const afterLabelHidden = position > 100 - LABEL_HIDE_THRESHOLD;
  const imageSizes = sizes ?? "(max-width: 768px) 100vw, min(1200px, 100vw)";
  const valueNow = Math.round(position);

  return (
    <figure className="space-y-3">
      <div
        ref={containerRef}
        className="relative aspect-[3324/1952] w-full overflow-hidden touch-none select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        aria-label={`Before and after comparison: ${beforeAlt} versus ${afterAlt}`}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          className="object-cover pointer-events-none select-none"
          sizes={imageSizes}
          priority={priority}
          draggable={false}
        />
        <Image
          src={after}
          alt={afterAlt}
          fill
          className="object-cover pointer-events-none select-none"
          sizes={imageSizes}
          priority={priority}
          draggable={false}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-white"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={valueNow}
          aria-valuetext={`${valueNow}% after revealed`}
          onKeyDown={onKeyDown}
          className={`absolute top-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-md outline-none ring-0 focus-visible:ring-2 focus-visible:ring-foreground/60 ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M7.7,5.042a.5.5,0,0,0-.54.092l-7,6.5a.5.5,0,0,0,0,.732l7,6.5A.5.5,0,0,0,7.5,19a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,7.7,5.042Z" />
            <path d="M23.84,11.634l-7-6.5A.5.5,0,0,0,16,5.5v13a.5.5,0,0,0,.84.366l7-6.5a.5.5,0,0,0,0-.732Z" />
          </svg>
        </button>

        <span
          aria-hidden
          className={`absolute bottom-3 left-3 rounded-full bg-gray-900/75 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md transition-opacity duration-200 ${
            beforeLabelHidden ? "opacity-0" : "opacity-100"
          }`}
        >
          After
        </span>
        <span
          aria-hidden
          className={`absolute bottom-3 right-3 rounded-full bg-gray-900/75 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md transition-opacity duration-200 ${
            afterLabelHidden ? "opacity-0" : "opacity-100"
          }`}
        >
          Before
        </span>
      </div>
      {caption && (
        <figcaption className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
