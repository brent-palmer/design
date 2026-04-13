import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "About",
  description: "Background and how I work with teams.",
};

const socials = [
  {
    label: "Follow on X",
    href: "https://x.com/brentpalmer",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Follow on Instagram",
    href: "https://instagram.com/brentpalmer",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Follow on LinkedIn",
    href: "https://linkedin.com/in/brentpalmer",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Follow on GitHub",
    href: "https://github.com/brentpalmer",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <Heading level={1} variant="title" className="mb-16 sm:mb-24">
          About
        </Heading>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-[3fr_2fr] sm:gap-24">
          {/* Left — bio text */}
          <div className="space-y-8">
            <Text size="lg">
              I'm a hybrid player-coach who likes making complicated things easier
              to understand and use. Most of my work has been in B2B software,
              where the problems are messy and the stakes are real.
            </Text>
            <Text muted>
              I've spent my career helping teams figure out what to build, not
              just how it should look. That usually means asking a lot of
              questions, working closely with product and engineering, and
              getting something in front of users as quickly as possible. I like
              to prototype ideas early so we can learn fast and avoid
              overthinking.
            </Text>
            <Text muted>
              I've worked at startups and growing companies, and I've learned
              that good design is less about perfect screens and more about
              clarity. Clear thinking, clear systems, and clear communication.
            </Text>
            <Text muted>
              I care about doing honest work with people I respect. I try to
              leave things better than I found them.
            </Text>
            <Text muted>
              Outside of work, I'm a dad, a husband, and a musician. I spend a
              lot of time playing guitar and being with my family. If you're
              working on something interesting, I'd love to hear about it.
            </Text>
          </div>

          {/* Right — photo + socials */}
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-sm bg-foreground/[0.06]">
              <Image
                src="/headshot.jpg"
                alt="Brent Palmer"
                width={600}
                height={720}
                className="w-full object-cover grayscale"
                priority
              />
            </div>

            <ul className="divide-y divide-foreground/10">
              {socials.map(({ label, href, icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    <span className="text-muted-foreground">{icon}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
