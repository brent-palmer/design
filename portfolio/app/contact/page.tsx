import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container className="space-y-12 sm:space-y-16">
        <Heading level={1} variant="title">
          Contact
        </Heading>
        <div className="max-w-xl space-y-8">
          <Text size="lg">
            <a
              href="mailto:hello@example.com"
              className="text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              hello@example.com
            </a>
          </Text>
          <Text muted>
            Swap in your address above. For collaboration or full-time roles,
            a short note on timing and what you’re building goes a long way.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
