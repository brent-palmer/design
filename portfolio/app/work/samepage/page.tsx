import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Samepage",
  description: "AI that does the structural thinking so PMs don't have to.",
};

// ─── Block components ────────────────────────────────────────────────────────

function PlaceholderImage({ label }: { label?: string }) {
  return (
    <div className="space-y-3">
      <div className="aspect-[16/9] w-full bg-foreground/[0.06]" aria-hidden />
      {label && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
      )}
    </div>
  );
}

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
    <ul className="space-y-2 list-none pl-0 text-muted-foreground text-base leading-relaxed">
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

export default function SamepagePage() {
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
              Samepage
            </Heading>
            <Text muted size="lg" className="max-w-2xl">
              AI that does the structural thinking so PMs don't have to
            </Text>
            <div className="flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>2025</span>
              <span>Lead Product Designer</span>
            </div>
          </div>
          <PlaceholderImage label="Samepage — AI-powered project updates" />
        </Container>
      </Section>

      {/* Body */}
      <Section className="border-t border-foreground/10">
        <Container className="space-y-24 sm:space-y-32">

          {/* TL;DR */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">TL;DR</Heading>
            <Text muted>
              Product managers spend a disproportionate amount of time not building, but translating.
              They turn technical work into exec summaries, sprint output into stakeholder updates,
              and progress into shared understanding for audiences with different levels of context.
            </Text>
            <Text muted>
              I led design for Samepage, a 0–1 AI product that removes that translation work. PMs
              bring messy inputs — notes, tickets, raw context — and leave with structured,
              audience-ready updates in under a minute. I defined the product vision, designed the
              core AI interaction model, and shaped the go-to-market narrative. The product secured
              9 pilot customers during my engagement.
            </Text>
          </section>

          {/* Problem */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">Problem</Heading>
            <Text muted>
              Most AI writing tools solve the wrong problem for PMs. The issue isn't writing speed.
              It's translation. Turning a week of work into something a mixed audience can understand
              is a thinking problem, not a typing problem.
            </Text>
            <Text muted>
              Existing tools start with a blank prompt and expect PMs to know what to ask for.
              That's the hard part. In practice, PMs rewrite the same updates across Notion, Slack,
              and meetings — spending 3–4 hours a week on communication that should take 30 minutes.
              Even then, teams stay misaligned because the format shifts and the signal gets lost.
            </Text>
            <Text muted>
              Samepage's thesis: PMs communicate better when the system handles the structure, not
              just the words.
            </Text>
            <PlaceholderImage label="The core tension — messy inputs to structured stakeholder update" />
          </section>

          {/* My role */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">My role &amp; approach</Heading>
            <Text muted>
              I didn't start with features. I started with a positioning question: what does this
              product need to be to actually solve the problem?
            </Text>
            <Text muted>
              The answer shaped everything. Samepage had to be a <em>clarity tool</em>, not an AI
              writing assistant. That choice drove the interaction model, AI patterns, output format,
              and how we positioned it to customers.
            </Text>
            <Text muted>
              I ran 17 discovery interviews with product leaders across B2B SaaS, then moved into
              rapid prototyping to test the core idea before investing in engineering.
            </Text>
          </section>

          {/* What I Designed */}
          <section className="space-y-12">
            <Heading as="h2" level={2} variant="h2">What I Designed</Heading>

            {/* Signal over noise */}
            <div className="space-y-6">
              <Heading as="h3" level={3} variant="h3">The "signal over noise" system</Heading>
              <Text muted>
                Before designing screens, I defined the core model: raw PM materials flow into an
                AI layer that structures, prioritizes, and adapts content based on audience and
                context — producing audience-ready updates for execs, engineers, or cross-functional
                teams.
              </Text>
              <Text muted>
                The key constraint: <strong>the AI handles structure, not just rewriting.</strong>{" "}
                Rewriting clean paragraphs isn't useful. Turning messy inputs into a clear,
                audience-appropriate narrative is the product.
              </Text>
              <PlaceholderImage label="System model — inputs, AI layer, output types" />
            </div>

            {/* AI-generated updates */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">AI-generated updates — the core experience</Heading>
              <Text muted>
                PMs had too much context and no fast way to distill it. At the same time, trust in
                AI was low. One wrong detail and the PM still owns it. Outputs had to feel ready to
                send, not something to clean up.
              </Text>
              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Show the source</Heading>
                  <Text muted>
                    Every section includes lightweight source references so PMs can see where content
                    came from. This added some UI complexity, but removed the "is this accurate?"
                    hesitation we saw in early testing.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Structure over freeform</Heading>
                  <Text muted>
                    Outputs follow a clear template — status, decisions, blockers, next steps. This
                    improves accuracy and makes it easy to scan and verify. The output uses an
                    editorial layout with clear hierarchy. In testing, cleaner layouts increased
                    trust even when the content was the same.
                  </Text>
                </div>
              </div>
              <PlaceholderImage label="AI-generated update — structured output with source annotations" />
            </div>

            {/* AI uncertainty */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Designing for AI uncertainty</Heading>
              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Latency</Heading>
                  <Text muted>
                    AI isn't instant. A spinner led to drop-off, so I replaced it with progressive
                    reveal. Sections appear as they're generated, starting with title and status,
                    then filling in detail. Users start reading right away, so it feels active,
                    not blocked.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Bad outputs</Heading>
                  <Text muted>
                    Early results were often close, but wrong in subtle ways. A full regenerate
                    wasn't helpful. I designed targeted edits instead — PMs can adjust a single
                    section with feedback like "too technical" or "timeline is off." The AI updates
                    that section and leaves the rest intact.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Confidence calibration</Heading>
                  <Text muted>
                    Some inputs were thin, which led to weaker outputs. I added a lightweight signal
                    when context is limited, prompting users to add more detail. This set clearer
                    expectations and improved output quality without adding friction.
                  </Text>
                </div>
              </div>
              <PlaceholderImage label="AI uncertainty states — progressive reveal, targeted edits, confidence signal" />
            </div>

            {/* Sidecar */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">The sidecar interaction model</Heading>
              <Text muted>
                AI tools that live in a separate tab or modal break the flow. PMs think in context
                while reviewing tickets, notes, or docs. The tool needed to live alongside the work,
                not pull them away from it.
              </Text>
              <Text muted>
                I designed a sidecar — a persistent panel that sits next to the source material.
                PMs select content, open the sidecar, and see the generated update in place. No
                context switching. In testing, the sidecar consistently outperformed modal and
                standalone approaches on speed, trust, and repeat use.
              </Text>
              <div className="space-y-2">
                <Heading as="h4" level={4} variant="h4">Craft detail</Heading>
                <Text muted>
                  The sidecar uses tighter type and spacing than the main canvas to signal it's a
                  working space, not the final output. It can be pinned or dismissed and never takes
                  over the screen.
                </Text>
              </div>
              <PlaceholderImage label="Sidecar — source content alongside generated update" />
            </div>

            {/* Pages */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Pages — a home for product communication</Heading>
              <Text muted>
                Even when updates were clear, they had nowhere to live. They were shared in Slack
                and lost, or buried in a Notion doc no one revisited. Pages solve this — a
                persistent, shareable surface for product communication. Each page tracks a product
                area over time, lives at a stable URL, and is built for async reading by stakeholders
                catching up, not just those present in the moment.
              </Text>
              <div className="space-y-2">
                <Heading as="h4" level={4} variant="h4">Craft detail</Heading>
                <Text muted>
                  Pages use a reverse chronological layout with a sticky summary at the top, so
                  current status is always visible. Older updates collapse to reduce noise but stay
                  accessible. Branding is intentionally minimal so it reads like a product update,
                  not a tool output.
                </Text>
              </div>
              <PlaceholderImage label="Pages — persistent shareable product communication surface" />
            </div>
          </section>

          {/* Key decisions */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">Key decisions &amp; tradeoffs</Heading>
            <div className="space-y-8">
              {[
                {
                  title: "Clarity tool, not writing assistant",
                  body: "Positioned Samepage as a communication tool, not an AI writer. This shaped defaults, empty states, and what \"done\" looks like. Tradeoff: narrower audience, focused on PMs. Outcome: stronger fit and a clearer story.",
                },
                {
                  title: "AI-first, not AI-assisted",
                  body: "AI generates structure from raw inputs, instead of improving finished drafts. Tradeoff: more complexity around trust and error handling. Outcome: a differentiated experience that's hard to replicate with a simple AI add-on.",
                },
                {
                  title: "Structured outputs over freeform",
                  body: "Outputs follow a consistent format. Users can edit, but the AI always starts from a clear structure. Tradeoff: less flexibility for edge cases. Outcome: more accurate, scannable updates that build trust.",
                },
                {
                  title: "Editorial UX over tool-heavy UI",
                  body: "Designed the output like a document, not an app. Minimal chrome, content-first layout. Tradeoff: less visible \"power\" at first glance. Outcome: outputs feel ready to send, which created strong early buy-in.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="space-y-2">
                  <Heading as="h3" level={3} variant="h3">{title}</Heading>
                  <Text muted>{body}</Text>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">Outcomes</Heading>

            <div className="space-y-4">
              <Heading as="h3" level={3} variant="h3">Shipped</Heading>
              <BulletList items={[
                "9 pilot customers across FinTech, MarTech, and Productivity tools",
                "Prototype and positioning narrative used directly in sales conversations",
              ]} />
            </div>

            <div className="space-y-4">
              <Heading as="h3" level={3} variant="h3">Impact</Heading>
              <CaseTable
                rows={[
                  ["Update time", "Dropped from ~10–15 min to under 1 min across 58 PM sessions"],
                  ["Repeat usage", "72% of users who created one update returned within a week"],
                  ["Alignment", "81% of pilot stakeholders felt more informed about product progress"],
                ]}
              />
            </div>

            <Quote>
              Samepage has completely changed how I start my day. The signals I get every morning
              put me on the front foot instantly — 10x more effective than before. It's one of those
              rare products that actually gets better every single week.
            </Quote>
          </section>

        </Container>
      </Section>
    </div>
  );
}
