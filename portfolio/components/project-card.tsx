import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/ui/text";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden border border-foreground/10 transition-colors hover:border-foreground/20"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-foreground/5">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-foreground/5 to-foreground/15" />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        >
          <span className="rounded-full bg-background/85 px-5 py-2.5 text-sm font-medium text-foreground ring-1 ring-foreground/15 backdrop-blur-md">
            View case study
          </span>
        </div>
      </div>
      <div className="space-y-3 p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {project.title}
        </p>
        <Text className="transition-colors group-hover:text-muted-foreground">
          {project.tagline}
        </Text>
        <p className="font-mono text-sm leading-relaxed text-muted-foreground">
          {project.year}
        </p>
      </div>
    </Link>
  );
}
