import type { Metadata } from "next";
import { LightboxImage } from "@/components/lightbox-image";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Samepage",
  description: "From scattered inputs to structured updates.",
  openGraph: {
    title: "Samepage — Brent Palmer",
    description: "From scattered inputs to structured updates.",
    url: "/work/samepage",
    type: "article",
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brentpalmer.design";
const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Samepage — Brent Palmer",
  description: "From scattered inputs to structured updates.",
  url: `${baseUrl}/work/samepage`,
  author: {
    "@type": "Person",
    name: "Brent Palmer",
    url: baseUrl,
  },
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

export default function SamepagePage() {
  return (
    <div data-reading-content>
      <JsonLd data={caseStudySchema} />
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
              From scattered inputs to structured updates
            </Text>
            <div className="flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>2025</span>
              <span>Lead Product Designer</span>
            </div>
          </div>
          <LightboxImage
            src="/samepage/hero.avif"
            alt="Samepage product — AI-powered project updates"
            caption="Samepage — AI-powered project updates"
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
              Product managers spend a disproportionate amount of time not building, but translating.
              They turn technical work into exec summaries, sprint output into stakeholder updates,
              and progress into shared understanding for audiences with different levels of context.
            </Text>
            <Text muted>
              I led design for Samepage, a 0–1 AI product that removes that translation work. PMs
              bring messy inputs — notes, tickets, threads — and leave with structured,
              audience-ready updates in under a minute. I defined the product direction, designed the
              core AI interaction model, and shaped the go-to-market narrative. The product launch
              secured 20+ customers and growing.
            </Text>
          </section>

          {/* Problem */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">Problem</Heading>
            <Text muted>
              Most AI writing tools solve the wrong problem for PMs. The issue isn't writing speed.
              It's translation. Turning a week of work into something a mixed audience can understand
              is a thinking problem, not a dictation problem.
            </Text>
            <Text muted>
              Existing tools start with a blank prompt and expect PMs to know what to ask for.
              That's the hard part. In practice, PMs rewrite the same updates across Notion, Slack,
              and meetings — spending 3–4 hours a week on communication that should take minutes.
              Even then, teams stay misaligned because the format shifts and the signal gets lost.
            </Text>
            <Text muted>
              Samepage's thesis: PMs communicate better when the system handles the structure, not
              just the words.
            </Text>
            <LightboxImage
              src="/samepage/problem.avif"
              alt="The Samepage thesis — information asymmetry"
              caption="The Samepage thesis — information asymmetry"
            />
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
            <Heading as="h2" level={2} variant="h2">What I designed</Heading>

            {/* Work brain */}
            <div className="space-y-6">
              <Heading as="h3" level={3} variant="h3">Connecting your work tools to AI</Heading>
              <Text muted>
                Before designing screens, I defined the core model:
              </Text>
              <ul className="space-y-2 list-none pl-0 text-muted-foreground text-lg leading-[1.7]">
                {[
                  "Inputs: Raw PM materials like notes, tickets, Slack threads, and Engineering issues",
                  "AI layer: Structures, communication best practices, and dynamic content based on audience and context",
                  "Outputs: Audience-ready updates for execs, engineers, or cross-functional teams",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Text muted>
                The key constraint: <strong>the AI handles structure, not just rewriting.</strong>{" "}
                Rewriting clean paragraphs isn't useful. Turning messy inputs into a clear,
                audience-appropriate narrative is the product.
              </Text>
              <LightboxImage
                src="/samepage/work-brain.avif"
                alt="Integrations — connecting your work tools to Samepage"
                caption="Integrations — connecting your work tools to Samepage"
              />
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
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Heading as="h4" level={4} variant="h4">Show the source</Heading>
                    <Text muted>
                      Every section includes lightweight source references so PMs can see where content
                      came from. This added some UI complexity, but removed the "is this accurate?"
                      hesitation we saw in early testing.
                    </Text>
                  </div>
                  <LightboxImage
                    src="/samepage/sources.avif"
                    alt="Update sections with visual citations"
                    caption="Show the source — visual citations"
                  />
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
              <LightboxImage
                src="/samepage/structure.avif"
                alt="AI-generated update — structured output with sources"
                caption="AI-generated update — structured output with sources"
              />
            </div>

            {/* AI uncertainty */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Designing for AI uncertainty</Heading>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Heading as="h4" level={4} variant="h4">Latency</Heading>
                    <Text muted>
                      AI isn't instant. Blank pages and generic spinners led to drop-off, so I replaced it with progressive
                      reveal. Sections appear as they're generated, starting with title and status,
                      then filling in detail. Users start reading right away, so it feels active,
                      not blocked.
                    </Text>
                  </div>
                  <LightboxImage
                    src="/samepage/loading.avif"
                    alt="Latency — progressive reveal as sections stream in"
                    caption="Latency — progressive reveal"
                  />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Heading as="h4" level={4} variant="h4">Bad outputs</Heading>
                    <Text muted>
                      Early results were often close, but off in subtle ways. A full regenerate
                      wasn't helpful. I designed targeted edits instead. PMs can make simple text edits and the AI will update the rest.
                    </Text>
                  </div>
                  <LightboxImage
                    src="/samepage/text-editing.avif"
                    alt="Polishing — targeted section edits with inline feedback"
                    caption="Polishing — targeted section edits"
                  />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Heading as="h4" level={4} variant="h4">Personalized prompts</Heading>
                    <Text muted>
                    As more updates were generated, the system became more tailored and began surfacing smarter prompts. This did two things: it reduced the time to create updates, and it improved structure and accuracy by learning from prior inputs.
                    </Text>
                  </div>
                  <LightboxImage
                    src="/samepage/prompt-explorations.avif"
                    alt="Sample prompts — personalized based on context"
                    caption="Sample prompts — personalized based on context"
                  />
                </div>
              </div>
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
                <Text muted>
                  The sidecar uses tighter type and spacing than the main canvas to signal it's a
                  working space, not the final output. It can be pinned or dismissed and never takes
                  over the screen.
                </Text>
              </div>
              <LightboxImage
                src="/samepage/copilot.avif"
                alt="Sidecar — balancing manual editing vs global context"
                caption="Sidecar — balancing manual editing vs global context"
              />
            </div>

            {/* Read receipts */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Read receipts — making updates stick</Heading>
              <Text muted>
                As I dug deeper, another problem emerged. Even when updates were clear, there was
                no signal they were actually read. Updates were sent into Slack or email and
                disappeared into the stream. PMs had no idea who saw them, who missed them, or
                when to follow up.
              </Text>
              <Text muted>
                Read receipts address this directly. Every update shows who has viewed it and when,
                turning communication from a one-way broadcast into something measurable. It creates
                a lightweight layer of accountability without adding friction.
              </Text>
              <Text muted>
                This shifts the goal of Samepage updates — not just making them easy to create, but
                making sure they land. Teams can quickly spot gaps, follow up with the right people,
                and build confidence that stakeholders are actually informed.
              </Text>
              <div className="space-y-2">
                <Text muted>
                  Read status is surfaced inline with each update, showing viewer names and
                  timestamps. Unread states are clearly indicated, making it easy to scan for gaps.
                  The UI stays minimal and unobtrusive so it supports the update without distracting
                  from the content itself.
                </Text>
              </div>
              <LightboxImage
                src="/samepage/read-receipts.avif"
                alt="Read receipts — inline viewer list and timestamps"
                caption="Read receipts — inline viewer list and timestamps"
              />
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
                "9 pilot customers across FinTech, MarTech, and Enterprise SaaS",
                "Prototype and positioning narrative used directly in sales conversations with 20+ customers",
              ]} />
            </div>

            <div className="space-y-4">
              <Heading as="h3" level={3} variant="h3">Impact</Heading>
              <CaseTable
                rows={[
                  ["Update time", "Dropped from ~10–15 min to under 1 min across 58 PM sessions (90% reduction)"],
                  ["Repeat usage", "72% of users who created one update returned within a week (2x increase)"],
                  ["Alignment", "81% of pilot stakeholders felt more informed about product progress (10x improvement)"],
                ]}
              />
            </div>

            <Quote>
              Samepage has completely changed how I start my day. The signals I get every morning
              put me on the front foot instantly — 10x more effective than before. It's one of those
              rare products that actually gets better every single week.
            </Quote>
          </section>

          {/* What I Learned */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">What I Learned</Heading>
            <div className="space-y-8">
              <div className="space-y-2">
                <Heading as="h3" level={3} variant="h3">Start with existing materials, not a blank canvas</Heading>
                <Text muted>
                  A text box assumes users already know what to ask. That's the hard part. Start
                  with their existing materials, not a blank canvas.
                </Text>
              </div>
              <div className="space-y-2">
                <Heading as="h3" level={3} variant="h3">Presentation drives belief</Heading>
                <Text muted>
                  The same output felt more trustworthy in an editorial layout than in a dense tool
                  UI. Presentation drives belief.
                </Text>
              </div>
            </div>
          </section>

        </Container>
      </Section>
    </div>
  );
}
