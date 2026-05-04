import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { getAllProjectsSorted } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product design and systems work.",
};

export default function WorkPage() {
  const all = getAllProjectsSorted();

  return (
    <Section>
      <Container className="space-y-16 sm:space-y-24">
        <div className="max-w-xl space-y-6">
          <Heading level={1} variant="title">
            Selected work
          </Heading>
          <Text muted size="lg">
          Work spanning B2B SaaS, healthcare, and internal systems, with a
          focus on AI workflows and strategic outcomes
          </Text>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {all.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
