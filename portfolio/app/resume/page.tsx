import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Resume",
  description: "Résumé and experience summary.",
};

export default function ResumePage() {
  return (
    <Section>
      <Container className="space-y-12 sm:space-y-16">
        <Heading level={1} variant="title">
          Resume
        </Heading>
        <div className="max-w-xl space-y-8">
          <Text muted>
            A PDF lives at{" "}
            <Link
              href="/resume.pdf"
              className="text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              /resume.pdf
            </Link>
            —add your file to the{" "}
            <span className="font-mono text-xs">public</span> folder when
            ready.
          </Text>
          <Text size="lg">
            Until then, the project list on the work page is the best summary
            of recent scope and impact.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
