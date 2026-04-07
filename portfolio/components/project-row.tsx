import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { Project } from "@/lib/projects";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block py-16 transition-opacity first:pt-0 hover:opacity-80 sm:py-20"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-16">
        <div className="max-w-xl space-y-4">
          <Heading as="h2" level={2} variant="title" className="transition-colors group-hover:text-muted-foreground">
            {project.title}
          </Heading>
          <Text muted>{project.tagline}</Text>
        </div>
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {project.year}
        </p>
      </div>
    </Link>
  );
}
