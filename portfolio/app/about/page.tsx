import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "About",
  description: "Background and how I work with teams.",
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="space-y-12 sm:space-y-16">
        <Heading level={1} variant="title">
          About
        </Heading>
        <div className="max-w-xl space-y-8">
          <Text size="lg">
            I’m a product designer who likes systems that stay legible as they
            grow—typed tokens, honest empty states, and copy that matches what
            the UI actually does.
          </Text>
          <Text muted>
            Most of my recent work sits at the intersection of operational data
            and everyday tasks: making dense information feel approachable
            without hiding the hard parts.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
