"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { Project } from "@/lib/projects";

export function ProjectRow({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const entryPos = useRef({ x: 0, y: 0 });
  const moving = useRef(false);
  const previewRef = useRef<HTMLDivElement | null>(null);

  function handleMouseEnter(e: React.MouseEvent) {
    entryPos.current = { x: e.clientX, y: e.clientY };
    setHovered(true);
  }

  function handleMouseLeave() {
    // Clear JS-written transform first so CSS class handles the exit scale animation
    if (previewRef.current) {
      previewRef.current.style.transform = "";
    }
    setHovered(false);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (moving.current) return;
    moving.current = true;
    const clientX = e.clientX;
    const clientY = e.clientY;
    requestAnimationFrame(() => {
      if (previewRef.current) {
        const dx = Math.round((clientX - entryPos.current.x) / 30);
        const dy = Math.round((clientY - entryPos.current.y) / 30);
        previewRef.current.style.transform = `translateY(calc(-50% + ${dy}px)) translateX(${dx}px)`;
      }
      moving.current = false;
    });
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block py-16 first:pt-0 sm:py-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-[2] flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-16">
        <div className="max-w-xl space-y-4">
          <Heading
            as="h2"
            level={2}
            variant="projectTitle"
            className="transition-colors group-hover:text-muted-foreground"
          >
            {project.title}
          </Heading>
          <Text muted>{project.tagline}</Text>
        </div>
        <p className="relative z-[2] shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {project.year}
        </p>
      </div>

      {/* Preview — 60px from right edge, xl+ only, vertically centered, subtle parallax on move */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={`pointer-events-none absolute right-[60px] top-1/2 z-[1] hidden w-[30%] overflow-hidden rounded-lg xl:block [aspect-ratio:3/2] [backface-visibility:hidden] [transition:opacity_0.2s,visibility_0.2s,transform_0.2s] will-change-transform ${
          hovered
            ? "visible opacity-100 [transform:translateY(-50%)]"
            : "invisible opacity-0 [transform:translateY(-50%)_scale(0.9)]"
        }`}
      >
        {project.cover ? (
          <div className="relative h-full w-full">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-foreground/5 to-foreground/15" />
        )}
      </div>
    </Link>
  );
}
