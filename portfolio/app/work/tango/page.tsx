import type { Metadata } from "next";
import { LightboxImage } from "@/components/lightbox-image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Tango",
  description: "How-to guides that create themselves as you do the work.",
};

// ─── Block components ────────────────────────────────────────────────────────

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-foreground/20 pl-6 font-sans text-[24px] font-normal italic leading-[140%] text-foreground">
      {children}
    </blockquote>
  );
}

function CaseTable({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <table className="w-full border-collapse">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} className="border-t border-foreground/10">
            <td className="w-1/3 py-3 pr-8 align-top font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </td>
            <td className="py-3 align-top text-base text-foreground">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-none pl-0 text-muted-foreground text-lg leading-[1.7]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TangoPage() {
  return (
    <div data-reading-content>
      {/* Hero */}
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
              Tango
            </Heading>
            <Text muted size="lg" className="max-w-2xl">
              How-to guides that create themselves as you do the work
            </Text>
            <div className="flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>2024</span>
              <span>Lead Product Designer</span>
            </div>
          </div>
          <LightboxImage
            src="/tango/editing-hero.avif"
            alt="Tango guide editor with steps and inline content"
            caption="Tango — automated process documentation"
            priority
          />
        </Container>
      </Section>

      {/* Body */}
      <Section className="border-t border-foreground/10">
        <Container className="space-y-24 sm:space-y-32">

          {/* TL;DR */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">TL;DR</Heading>
            <Text muted>
              Process documentation was slow, inconsistent, and often avoided. I led design for
              Tango's editing and sharing experience, reframing the product from a simple recorder
              into a structured, enablement system.
            </Text>
            <Text muted>
              In 5 weeks, guide creation time dropped from ~10 minutes to under 1 minute. The new
              system shipped to all customers and laid the foundation for team-based knowledge sharing.
              Product direction emerged through building and testing, not a pre-defined spec.
            </Text>
          </section>

          {/* Problem */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">Problem</Heading>
            <Text muted>
              Teams with high turnover and repeatable workflows like sales, support, and ops had a
              documentation problem no one had solved well. Creating a single guide meant taking
              screenshots at every step, cropping, annotating, and ordering them, writing
              instructions from scratch, then sharing via Slack or email with no version control or
              discoverability.
            </Text>
            <Text muted>
              The result wasn't just slow documentation. It was no documentation. Teams avoided it
              because the cost was too high. New hires ramped on tribal knowledge, and processes
              drifted without visibility.
            </Text>
            <Text muted>
              Tango had the core insight with its Chrome extension that captured steps automatically.
              But it felt like a feature, not a product. There was no structure, no sharing model,
              and no reason to return.
            </Text>
            <LightboxImage
              src="/tango/old%20way2.avif"
              alt="Manual internal wiki with long lists of doc links—the workflow before guided steps"
              caption="Before Tango — screenshot, annotate, paste, repeat"
            />
          </section>

          {/* Sprint */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">The sprint</Heading>
            <div className="space-y-8">
              <div className="space-y-2">
                <Heading as="h3" level={3} variant="h3">Week 1 — Discovery &amp; reframe</Heading>
                <Text muted>
                  Interviewed 5 users across sales, support, and ops. Key insight: people didn't
                  want to document. They wanted documentation to exist as a byproduct of doing
                  the work. This reframed the product.
                </Text>
              </div>
              <div className="space-y-2">
                <Heading as="h3" level={3} variant="h3">Weeks 2–3 — Editor and sharing</Heading>
                <Text muted>
                  Designed a lightweight editor and shareable link model. Core constraint: editing
                  couldn't bring back manual effort. Solved with progressive disclosure.
                </Text>
              </div>
              <div className="space-y-2">
                <Heading as="h3" level={3} variant="h3">Week 4 — PLG hooks and handoff</Heading>
                <Text muted>
                  Defined the activation moment and upgrade path from individual use to team adoption.
                  Delivered annotated specs and interaction flows for engineering handoff.
                </Text>
              </div>
            </div>
          </section>

          {/* What I Designed */}
          <section className="space-y-12">
            <Heading as="h2" level={2} variant="h2">What I Designed</Heading>

            {/* North Star */}
            <div className="space-y-6">
              <Heading as="h3" level={3} variant="h3">The north star: Capture → Polish → Share</Heading>
              <Text muted>
                Before designing screens, I defined the product's core model. Tango wasn't a
                recorder. It was a system: capture user actions automatically in the background,
                turn those actions into clear structured steps, then publish as a persistent
                updatable link — not a file.
              </Text>
              <Text muted>
                This framing clarified the product's job and created a natural growth loop: capture
                once, share widely, update as the process evolves.
              </Text>
              <LightboxImage
                src="/tango/north%20star.avif"
                alt="Capture, Polish, Share—three-step system diagram"
                caption="System diagram — capture, guide, share flow"
              />
            </div>

            {/* Editor */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">The guide editor — lightweight, not overwhelming</Heading>
              <Text muted>
                Users needed to fix mistakes and add context without reintroducing manual work.
                The editor had to feel quick and optional, not like starting over.
              </Text>
              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Progressive disclosure</Heading>
                  <Text muted>
                    By default, guides are clean and read-only. A click enables inline editing.
                    Annotations and highlights are available, but only when a step is selected.
                    I tested a persistent toolbar against a contextual one. The persistent version
                    felt like a full document editor. The contextual version kept the sense that
                    the guide was already done and just needed light refinement. That framing helped
                    users move faster.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Safety over speed</Heading>
                  <Text muted>
                    Destructive actions like delete and merge are intentionally tucked one level
                    deeper. Accidental edits created outsized frustration in testing, so I
                    prioritized avoiding mistakes over making recovery easy.
                  </Text>
                </div>
              </div>
              <LightboxImage
                src="/tango/editing-hero.avif"
                alt="Tango guide editor—sidebar steps, drag and drop, and inline step preview"
                caption="Editor — contextual toolbar, inline editing, annotation panel"
              />
            </div>

            {/* Sharing */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Sharing &amp; distribution — from file to living resource</Heading>
              <Text muted>
                The default solution was a Google Doc with screenshots — static, hard to find, tied
                to one person's Drive. Tango needed to feel fundamentally different.
              </Text>
              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Links, not exports</Heading>
                  <Text muted>
                    A guide lives at a URL and stays up to date as the process changes. Anyone with
                    the link always sees the latest version. Not export, not download.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Built for reading, not editing</Heading>
                  <Text muted>
                    The viewing experience strips UI chrome, sidebar, and distractions. Clean enough
                    to drop into Slack or an onboarding doc without looking like a tool artifact.
                  </Text>
                </div>
              </div>
              <LightboxImage
                src="/tango/embed.avif"
                alt="Embed flow—share guide into Notion and other platforms"
                caption="Shareable guide view — clean public-facing output"
              />
            </div>

            {/* PLG */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">PLG foundation — designing the growth loop</Heading>
              <Text muted>
                Getting a user to create their first guide was table stakes. The real challenge was
                turning individual value into team adoption.
              </Text>
              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">The aha moment</Heading>
                  <Text muted>
                    Activation is not creation. It's the first time a guide is opened by someone
                    else. That shift refocused onboarding on sharing, not just producing.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Intent-based upgrade</Heading>
                  <Text muted>
                    I placed the upgrade moment at the point of intent. When a user tries to share
                    into a workspace they don't belong to, the prompt appears. Contextual and timely,
                    not a cold upsell.
                  </Text>
                </div>
              </div>
              <LightboxImage
                src="/tango/export.avif"
                alt="Export gated behind Pro—upgrade prompt in the share and export flow"
                caption="PLG upgrade moment — contextual prompt at point of sharing"
              />
              <LightboxImage
                src="/tango/core%20view.avif"
                alt="Team Library—guide cards, grid, and Share & export from the overflow menu"
                caption="Core view — team library and share surfaces"
              />
            </div>
          </section>

          {/* Key decisions */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">Key decisions &amp; tradeoffs</Heading>
            <div className="space-y-8">
              {[
                {
                  title: "Speed over customization",
                  body: "Shipped opinionated auto-formatting within a 1-column layout instead of letting users define structure. Tradeoff: harder to support non-linear workflows. Outcome: consistently high-quality guides out of the box, which built trust early.",
                },
                {
                  title: "Intent-based grouping over click fidelity",
                  body: "Recording every click was accurate but unusable. We grouped actions by intent instead. Tradeoff: less granular detail. Outcome: outputs became clear and usable, not overwhelming.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="space-y-2">
                  <Heading as="h3" level={3} variant="h3">{title}</Heading>
                  <Text muted>{body}</Text>
                </div>
              ))}
              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h3" level={3} variant="h3">Individual-first, team-second</Heading>
                  <Text muted>
                    Focused on solo value before building team features. Tradeoff: risk of needing to
                    rework for collaboration later. Outcome: faster validation, with a sharing model
                    designed to scale to teams.
                  </Text>
                </div>
                <LightboxImage
                  src="/tango/members.avif"
                  alt="Workspace Members screen—roles, invites, and permission levels"
                  caption="Members — workspace roles and admin access"
                />
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">Outcomes</Heading>

            <div className="space-y-4">
              <Heading as="h3" level={3} variant="h3">Shipped</Heading>
              <BulletList items={[
                "Guide editing experience and shareable links shipped to all customers",
                "PLG upgrade path from individual to team use",
              ]} />
            </div>

            <div className="space-y-4">
              <Heading as="h3" level={3} variant="h3">Impact</Heading>
              <CaseTable
                rows={[
                  ["Creation time", "~10 minutes to under 1 minute to share"],
                  ["Activation", "68% of new users shared a guide in their first session"],
                  ["Sharing rate", "43% of guides shared within 24 hours"],
                  ["Retention", "61% of users who shared a guide returned within 7 days"],
                ]}
              />
            </div>

            <Quote>
              I lost count of how many 30-minute how-to meetings I had to set up with people. Death
              by 30-minute meetings. Now, I can just send a Tango, saving so much time and errors.
            </Quote>
          </section>

          {/* What I Learned */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">What I Learned</Heading>
            <div className="space-y-8">
              <div className="space-y-2">
                <Heading as="h3" level={3} variant="h3">Naming the right job to be done unlocked everything</Heading>
                <Text muted>
                  "Documentation" implied effort. "Your guide is already done" changed the product.
                  That shift shaped capture, editing, and the growth loop. Getting the framing right
                  early had the biggest impact.
                </Text>
              </div>
              <div className="space-y-2">
                <Heading as="h3" level={3} variant="h3">Speed comes from deliberate constraints</Heading>
                <Text muted>
                  Five weeks was enough because we cut aggressively. No team features, no mobile, no
                  integrations. Every omission was intentional. That focus made the work shippable
                  and the signal clear.
                </Text>
              </div>
              <div className="space-y-2">
                <Heading as="h3" level={3} variant="h3">What I'd do differently</Heading>
                <Text muted>
                  I'd invest in the sharing experience earlier. Most of the sprint focused on capture
                  and editing. The consumption side came late and wasn't deeply tested. Earlier work
                  there would have strengthened the overall product.
                </Text>
              </div>
            </div>
          </section>

        </Container>
      </Section>
    </div>
  );
}
