import Link from "next/link";
import { ProjectRow } from "@/components/project-row";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Section className="pb-12 sm:pb-16">
        <Container className="space-y-10">
          <Heading level={1} variant="display">
            Design for clarity at scale.
          </Heading>
          <Text muted size="lg" className="max-w-md">
            Product designer focused on calm interfaces, trustworthy data, and
            teams that move fast without breaking things.
          </Text>
          <p>
            <Link
              href="/work"
              className="text-sm font-medium text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              View work
            </Link>
            <span className="mx-3 text-muted-foreground">·</span>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/20"
            >
              Contact
            </Link>
          </p>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10 pt-8 sm:pt-12">
        <Container>
          <Heading
            as="h2"
            level={2}
            variant="label"
            className="mb-4 sm:mb-8"
          >
            Featured work
          </Heading>
          <div className="divide-y divide-foreground/10">
            {featured.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
