import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import {
  getAllProjectsSorted,
  getProjectBySlug,
  type Project,
} from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjectsSorted().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

function CaseBlock({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <div className="space-y-4">
      <Heading as="h2" level={2} variant="label">
        {label}
      </Heading>
      <Text muted className="max-w-2xl">
        {body}
      </Text>
    </div>
  );
}

function CoverPlaceholder({ project }: { project: Project }) {
  if (project.cover) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-foreground/[0.04]">
        <Image
          src={project.cover}
          alt=""
          fill
          className="object-contain p-12 opacity-40 grayscale"
          sizes="(max-width: 42rem) 100vw, 42rem"
          priority
        />
      </div>
    );
  }
  return (
    <div
      className="aspect-[16/9] w-full bg-foreground/[0.06]"
      aria-hidden
    />
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Section className="pb-12 sm:pb-16">
        <Container className="space-y-12">
          <p>
            <Link
              href="/work"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Work
            </Link>
          </p>
          <div className="space-y-6">
            <Heading level={1} variant="title">
              {project.title}
            </Heading>
            <Text muted size="lg" className="max-w-2xl">
              {project.tagline}
            </Text>
            <div className="flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>{project.year}</span>
              <span>{project.role}</span>
            </div>
          </div>
          <CoverPlaceholder project={project} />
          <Text className="max-w-2xl text-lg leading-relaxed">
            {project.summary}
          </Text>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container className="space-y-20 sm:space-y-28">
          <CaseBlock label="Problem" body={project.problem} />
          <CaseBlock label="Approach" body={project.approach} />
          <CaseBlock label="Outcome" body={project.outcome} />
        </Container>
      </Section>
    </>
  );
}
