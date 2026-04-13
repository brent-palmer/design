import { ButtonLink } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { HeroParticles } from "@/components/hero-particles";
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
      <Section className="relative overflow-hidden pb-12 sm:pb-16">
        <HeroParticles />
        <Container className="relative z-10 space-y-10">
          <div className="space-y-4">
            <Heading level={4} variant="eyebrow">
              Hi, I'm Brent.
            </Heading>
            <Heading level={1} variant="display">
              I design products that make complex systems feel simple.
            </Heading>
          </div>
          <Text muted size="lg" className="max-w-md">
          I help B2B SaaS teams turn messy systems into scalable experiences that actually work — improving onboarding, clarifying data, and creating interfaces customers love.         </Text>
          <div className="flex items-center gap-3">
            <ButtonLink href="/work" variant="primary">View work</ButtonLink>
            <CopyEmailButton className="inline-flex items-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/50" />
          </div>
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
