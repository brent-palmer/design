import type { Metadata } from "next";
import { ProjectRow } from "@/components/project-row";
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
        <div className="divide-y divide-foreground/10">
          {all.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
