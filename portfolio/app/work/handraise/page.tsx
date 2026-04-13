import type { Metadata } from "next";
import Link from "next/link";
import { LightboxImage } from "@/components/lightbox-image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Handraise",
  description: "Discovering the right product by building the wrong one first.",
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

function CompareTable({
  colA,
  colB,
  rows,
}: {
  colA: string;
  colB: string;
  rows: [string, string][];
}) {
  return (
    <table className="w-full border-collapse text-base">
      <thead>
        <tr className="border-b border-foreground/20">
          <th className="py-3 pr-8 text-left font-semibold text-foreground w-1/2">{colA}</th>
          <th className="py-3 text-left font-semibold text-foreground w-1/2">{colB}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([a, b]) => (
          <tr key={a} className="border-t border-foreground/10">
            <td className="py-3 pr-8 align-top text-muted-foreground">{a}</td>
            <td className="py-3 align-top text-muted-foreground">{b}</td>
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

export default function HandraisePage() {
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
          <div className="space-y-8">
            <div className="space-y-6">
              <Heading level={1} variant="title">
                Handraise
              </Heading>
              <Text muted size="lg" className="max-w-2xl">
                Discovering the right product by building the wrong one first
              </Text>
              <div className="flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>2024</span>
                <span>Lead Product Designer – Contract</span>
              </div>
            </div>
            <LightboxImage
              src="/handraise/handraise-hero1.avif"
              alt="Handraise product UI — Earned media distribution system for PR"
              caption="Handraise — Earned media distribution system for PR"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* Body */}
      <Section className="border-t border-foreground/10">
        <Container className="space-y-24 sm:space-y-32">

          {/* TL;DR */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">TL;DR</Heading>
            <Text muted>
              PR teams earn media coverage but lack control over distribution, amplification, and
              measurement. I led design for Handraise's 0–1 AI product to solve this.
            </Text>
            <Text muted>
              In 7 weeks, we built, tested, and pivoted. Early prototypes showed audience
              targeting mattered more than content generation, which reshaped the product. I
              redesigned the experience around an audience-first workflow, created a lightweight
              design system, and left the team with a validated direction and a shippable foundation.
            </Text>
          </section>

          {/* Problem */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">Problem</Heading>
            <Text muted>
              PR has a distribution problem, not a content problem. PR teams are good at earning
              coverage. The breakdown happens after the story runs.
            </Text>
            <Text muted>
              The coverage exists, but the right audiences often don't see it. Reaching them depends
              on marketing tools, budget, and coordination that moves slower than the news cycle.
              By the time a campaign launches, the moment has passed.
            </Text>
            <Text muted>
              At the same time, expectations changed. PR teams are now asked to show measurable
              impact, not just impressions. But they don't have the tools to drive that themselves.
              The expectations evolved. The tools didn't.
            </Text>
            <LightboxImage
              src="/handraise/cision-problem.avif"
              alt="Competitors like Cision didn't support article distribution"
              caption="Competitors like Cision didn't support article distribution"
            />
          </section>

          {/* The pivot */}
          <section className="space-y-12">
            <Heading as="h2" level={2} variant="h2">The original bet</Heading>

            <div className="space-y-6">
              <Heading as="h3" level={3} variant="h3">What we started with</Heading>
              <Text muted>
                The initial idea was straightforward: an AI tool that turns a press article into
                ready-to-use social posts and ads. Fast, simple, and clearly useful. I built a
                high-fidelity prototype and tested it with PR professionals across multiple sessions.
              </Text>
              <Text muted>
                It worked. People could see themselves using it. But in every session, the
                conversation shifted to a different question.
              </Text>
              <LightboxImage
                src="/handraise/handraise-discovery1.avif"
                alt="Original concept — a shareable article summary for social media"
                caption="Original concept — a shareable article summary for social media"
              />
            </div>

            <div className="space-y-6">
              <Heading as="h3" level={3} variant="h3">What the testing revealed</Heading>
              <Text muted>
                Across 5 of 6 sessions, users moved quickly past the generated content and asked:
                who is this going to? How do I reach the right people?
              </Text>
              <Text muted>
                Content wasn't the issue. They trusted Handraise to generate social media ads from articles. What they lacked
                was a way to identify the right audience, reach them without marketing, and know if
                it worked.
              </Text>
            </div>

            <div className="space-y-6">
              <Heading as="h3" level={3} variant="h3">What we rebuilt</Heading>
              <Text muted>
                I reframed the product from a content generator to a distribution system. The new
                framing gave Handraise a clear reason to exist in a crowded field of AI-generated creative
                tools. Generating posts is a feature. Getting the right content to the right audience,
                without relying on marketing, is the product.
              </Text>
              <CompareTable
                colA="Original pitch"
                colB="Reframed value proposition"
                rows={[
                  ["Input: Press article", "Input: Earned media"],
                  ["Output: Auto-create social posts", "Output: Article distribution to precise audiences"],
                  ["Value: Promote press coverage", "Value: Unlocks additional reach"],
                ]}
              />
            </div>
          </section>

          {/* What I Designed */}
          <section className="space-y-12">
            <Heading as="h2" level={2} variant="h2">What I designed</Heading>

            {/* Audience-first */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">The audience-first workflow</Heading>
              <Text muted>
                If audience targeting is the core value, it has to come first — not as a step after
                content is created. Early versions placed targeting at the end. Users rushed through
                it or skipped it. By then, key creative decisions were already locked in.
              </Text>
              <LightboxImage
                src="/handraise/handraise-design-first.avif"
                alt="Audience-first flow — step 1"
                caption="Audience-first flow — step 1"
                priority
              />
              <div className="space-y-2">
                <Heading as="h4" level={4} variant="h4">Audience before content</Heading>
                <Text muted>
                  I moved audience definition to step one. The first question is simple: who are
                  you trying to reach? That answer shapes content, channels, and success metrics.
                  When audience came first, users made better decisions and felt more confident
                  in their campaigns.
                </Text>
              </div>
            </div>

            {/* AI as infrastructure */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">AI as infrastructure, not interface</Heading>
              <Text muted>
                Most AI-generated social posts tools center on prompts and outputs. That model doesn't fit PR teams.
                They don't think in prompts and shouldn't have to.
              </Text>
              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">No visible prompt box</Heading>
                  <Text muted>
                    I treated AI as infrastructure — it powers the experience but stays out of the
                    way. The UI shows outcomes, not mechanics. If users feel like they're prompting
                    AI too much, we've lost. It should feel like a fast, intelligent distribution tool.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Selectable post options</Heading>
                  <Text muted>
                    Content appears as selectable post options — usually three variations per audience,
                    labeled by approach like "Recommended," "Fun," or "Data-forward."
                    Users choose a direction, then edit if needed. No blank states. We avoided
                    explaining how the AI works. Trust is earned through relevance, not explanation.
                  </Text>
                </div>
              </div>
              <LightboxImage
                src="/handraise/handraise-original-bet.avif"
                alt="AI content suggestions — multiple style variations"
                caption="AI content suggestions — multiple style variations"
              />
            </div>

            {/* HighFive */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">HighFive — the design system built for speed</Heading>
              <Text muted>
                Six weeks is short. To keep design and engineering moving together through multiple
                pivots, I built a lightweight design system —{" "}
                <a
                  href="https://www.figma.com/design/1arch80IHWRgg1eTN9P2uI/%E2%9C%8B-HighFive-Design-System?node-id=565-4495&t=yODAD5dhzOGOsSJO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  HighFive
                </a>
                {" "}
                — in 1.5 weeks on top of shad/cn. It wasn't a full component library. It was the
                minimum system we needed to move fast without creating inconsistency.
              </Text>
              <BulletList items={[
                "Spacing scale: 4px base with 8 steps — no guessing on layout",
                "Type system: 3 weights, 4 sizes — enough for hierarchy without overhead",
                "Color tokens: 6 semantic tokens mapped to fixed values — no hardcoded colors",
                "Core components: buttons, inputs, cards, segmented controls, badges, modals, loading states",
                "Data states: empty, loading, and error patterns defined up front",
              ]} />
              <Text muted>
                Without it, a fast-moving sprint would have produced a fragmented UI. With it,
                engineering could build without constant design input, and I could iterate without
                breaking consistency.
              </Text>
              <LightboxImage
                src="/handraise/handraise-high-five.avif"
                alt="HighFive design system — component library overview"
                caption="HighFive design system — component library overview"
              />
            </div>

            {/* Iteration */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Prototype-led validation</Heading>
              <Text muted>
                Given the timeline, we validated through shipping and observing real usage rather
                than formal user testing.
              </Text>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Heading as="h4" level={4} variant="h4">Iteration 1 — original concept</Heading>
                    <Text muted>
                      Shipped an AI content generation flow. Observed: users engaged with output but
                      quickly shifted focus to audience and distribution. Decision: pivot to audience-first.
                    </Text>
                  </div>
                  <LightboxImage
                    src="/handraise/handraise-iteration1.avif"
                    alt="Iteration 1 — AI content generation flow"
                    caption="Iteration 1 — AI content generation flow"
                  />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Heading as="h4" level={4} variant="h4">Iteration 2 — audience-first flow</Heading>
                    <Text muted>
                      Shipped a reordered workflow with audience upfront. Observed: better engagement,
                      but friction in building audiences. Too many configuration options, unclear starting point. Decision:
                      1-click segments and curated suggestions based on article context.
                    </Text>
                  </div>
                  <LightboxImage
                    src="/handraise/handraise-iteration2.avif"
                    alt="Iteration 2 — audience-first workflow"
                    caption="Iteration 2 — audience-first workflow"
                  />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Heading as="h4" level={4} variant="h4">Iteration 3 — Lightweight reporting</Heading>
                    <Text muted>
                      Shipped simple funnel tracking for social post conversions. Saw a small lift in
                      click-through rate. Creative quality drove most of the performance, with
                      platform-specific formatting also playing a role. Decision: narrow the pilot to
                      fewer platforms, focusing on LinkedIn and Twitter.
                    </Text>
                  </div>
                  <LightboxImage
                    src="/handraise/handraise-reporting.avif"
                    alt="Iteration 3 — Lightweight reporting"
                    caption="Iteration 3 — Lightweight reporting"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Key decisions */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">Key decisions &amp; tradeoffs</Heading>
            <div className="space-y-8">
              {[
                {
                  title: "Reframed the problem before designing",
                  body: "The brief was \"AI campaign tool for PR.\" I reframed it to \"AI distribution system\" based on what we saw in usage. Tradeoff: reset early assumptions and rebuilt the core flow mid-sprint. Outcome: aligned the team around a more valuable problem.",
                },
                {
                  title: "Audience-first over creative-first",
                  body: "Moved audience selection to the start of the flow, which goes against most campaign tools. Tradeoff: less immediate \"wow\" since content doesn't appear first. Outcome: better targeting decisions and higher confidence in the final output.",
                },
                {
                  title: "AI as invisible infrastructure",
                  body: "Removed prompt boxes, generate buttons, and explanatory AI copy. Tradeoff: less obvious differentiation in demos. Outcome: higher trust in use — users focused on outcomes, not how to prompt.",
                },
                {
                  title: "Narrow MVP scope",
                  body: "Excluded analytics, integrations, and collaboration to stay focused on the core loop. Tradeoff: gaps in functionality and some unmet expectations. Outcome: clearer signal on what mattered most versus what users said they wanted.",
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
              <Heading as="h3" level={3} variant="h3">Validated</Heading>
              <CaseTable
                rows={[
                  ["Audience-first flow", "5 of 6 users completed the core loop without prompting"],
                  ["Intent to use", "6 of 6 users said they'd use Handraise over their current tool"],
                  ["Core loop speed", "Article → audience → distribution completed in under 3 minutes"],
                ]}
              />
            </div>

            <Quote>
              Every other tool makes me do all the thinking. This one starts with who I'm trying
              to reach. That's the right place to begin. — Public Relations Manager, Outdoorsy
            </Quote>
          </section>

        </Container>
      </Section>
    </div>
  );
}
