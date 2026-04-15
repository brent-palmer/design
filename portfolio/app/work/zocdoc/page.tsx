import type { Metadata } from "next";
import { LightboxImage } from "@/components/lightbox-image";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Zocdoc",
  description: "Making onboarding work for large, multi-location practices.",
  openGraph: {
    title: "Zocdoc — Brent Palmer",
    description: "Making onboarding work for large, multi-location practices.",
    url: "/work/zocdoc",
    type: "article",
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brentpalmer.design";
const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Zocdoc — Brent Palmer",
  description: "Making onboarding work for large, multi-location practices.",
  url: `${baseUrl}/work/zocdoc`,
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

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ZocdocPage() {
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
              Zocdoc
            </Heading>
            <Text muted size="lg" className="max-w-2xl">
              Designing the onboarding journey for large healthcare practices
            </Text>
            <div className="flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Q1 2026</span>
              <span>Principal Product Designer</span>
            </div>
          </div>
          <LightboxImage
            src="/zocdoc/hero.avif"
            alt="Zocdoc enterprise home — provider onboarding"
            caption="Provider onboarding — enterprise home"
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
              Zocdoc's provider onboarding was fragmented, with disconnected flows and manual
              work slowing enterprise go-lives and straining ops. I designed a unified onboarding
              system: a new enterprise Home, guided tasks for staff, and a bulk NPI tool, giving
              practices a single source of truth.
            </Text>
            <Quote>
              Within 3 weeks of launching the redesigned onboarding flow, large practices with
              15+ providers cut time to first bookings from 8 weeks to under 6.
            </Quote>
          </section>

{/* Problem */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">Problem</Heading>
            <Text muted>
              Zocdoc's onboarding was never designed as a cohesive system. It evolved over time
              through product and sales-driven changes. By the time I took it on, "onboarding"
              was a patchwork of disconnected flows, each with its own entry point, mental model,
              and points of failure.
            </Text>

            <div className="space-y-4">
              <Heading as="h3" level={3} variant="h3">For providers and practice staff</Heading>
              <ul className="space-y-2 text-muted-foreground text-lg leading-[1.7] list-none pl-0">
                {[
                  "There was no single place to understand progress. Status was scattered across emails, CSM spreadsheets, and Slack.",
                  "Entry points like Sales handoffs, bulk uploads, NPI flows, and EHR integrations all behaved differently, with no shared language.",
                  "It wasn't clear what the practice owned versus what Zocdoc handled, so work often stalled while teams waited on each other.",
                  "Enterprise admins had no reliable way to onboard new staff or repeat a successful rollout across locations.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Heading as="h3" level={3} variant="h3">
                For internal teams
              </Heading>
              <ul className="space-y-2 text-muted-foreground text-lg leading-[1.7] list-none pl-0">
                {[
                  "Ops relied on manual spreadsheets and ad hoc check-ins to keep things moving.",
                  "Product teams kept adding new onboarding flows without a shared model, increasing fragmentation.",
                  "Simple questions like how long onboarding takes or where it breaks down had no clear answers.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Text muted>
              Net result: onboarding was hard to follow, easy to break, and costly to support.
              It also limited our ability to scale to larger, more complex enterprise customers.
            </Text>

            <LightboxImage
              src="/zocdoc/journey-map.avif"
              alt="Onboarding journey map for a single practice"
              caption="Onboarding journey map — single practice"
            />
          </section>

          {/* Reframe */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">Reframe</Heading>
            <Text muted>
            The first thing I challenged was the framing. The brief was to “improve the onboarding flow.” I pushed us to go deeper and rethink the{" "}
              <em>system</em>.
            </Text>
            <Text muted>
              Fixing a single flow would address the most visible issues. Redesigning the system would:
            </Text>
            <ul className="space-y-2 text-muted-foreground text-lg leading-[1.7] list-none pl-0">
              {[
                "Create a shared understanding of what onboarding is — and what it isn't.",
                "Make each task measurable so we could identify drop-offs and prioritize based on real impact.",
                "Support scale as Zocdoc moved into more complex enterprise segments.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Text muted>
              This shift in framing was the most important decision I made on the project.
              It defined the scope, the artifacts we created, and how we aligned with product
              and engineering.
            </Text>
            <LightboxImage
              src="/zocdoc/model.avif"
              alt="System reframe — from disconnected flows to a single onboarding system"
              caption="System reframe — from checklist to system"
            />
          </section>

          {/* Discovery */}
          <section className="space-y-6">
            <Heading as="h2" level={2} variant="h2">Discovery</Heading>
            <Text muted>
              Partnering with my user research lead, I ran a focused discovery sprint across
              three groups: practice admins and staff at 5 enterprise accounts, customer success
              and operations teams closest to where things were breaking down, and internal
              product and engineering partners to map system constraints and data models.
            </Text>
            <Text muted>Key findings that shaped the design:</Text>
            <ul className="space-y-2 text-muted-foreground text-lg leading-[1.7] list-none pl-0">
              {[
                "Staff weren't struggling with the interface. They were unsure what to do next or who owned the step.",
                "Enterprise admins needed a management view, not another task list. They were coordinating across teams, locations, and specialties.",
                "The riskiest moment wasn't a confusing form. It was the silence after submission. Practices assumed progress when work had stalled.",
                "Ops teams were effective but overloaded. Better provider tooling could unlock capacity without introducing new margins of error.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* What I Designed */}
          <section className="space-y-12">
            <Heading as="h2" level={2} variant="h2">What I designed</Heading>

            {/* System model */}
            <div className="space-y-6">
              <Heading as="h3" level={3} variant="h3">The system model</Heading>
              <Text muted>
                Before designing screens, I defined the core model that everything would follow:
              </Text>
              <ul className="space-y-2 text-muted-foreground text-lg leading-[1.7] list-none pl-0">
                {[
                  { label: "Prototype 1", href: "https://intro-path-progress.lovable.app", text: "Entities: Practice → Locations → Providers → Tasks (a smart grouping and hierarchy, not a flat list)" },
                  { label: "Prototype 2", href: "https://step-by-step-mate.lovable.app", text: "State model per entity: Not started → In progress → Blocked → Pending review → Live" },
                  { label: "Prototype 3", href: "https://onboard-buddy-station.lovable.app", text: "Ownership model: every task clearly assigned to Zocdoc or the practice so it's obvious who moves it forward" },
                ].map(({ label, href, text }) => (
                  <li key={label} className="flex gap-3">
                    <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                    <span><a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">{label}</a>: {text}</span>
                  </li>
                ))}
              </ul>
              <Text muted>
                This made instrumentation straightforward early on. We knew what to track, where
                users were getting stuck, and what each drop-off represented.
              </Text>
            </div>

            {/* Surface 1 */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Surface 1 — Enterprise Home</Heading>
              <Text muted>
                Home became the centerpiece: a cockpit that gives enterprise admins a clear,
                system-level view of their entire practice. Admins were managing dozens to hundreds
                of providers across locations and specialties. A flat task list didn't scale. A
                dense table wasn't actionable. The interface needed to answer, at a glance: are we
                performing, are we set up correctly, and what needs attention right now?
              </Text>

              <div className="space-y-4">
                <Heading as="h4" level={4} variant="h4">What Home answers instantly</Heading>
                <ul className="space-y-2 list-none pl-0 text-muted-foreground text-lg leading-[1.7]">
                  {[
                    "Are bookings up or down this month?",
                    "Is anything broken or blocking appointments?",
                    "Which providers or locations need attention?",
                    "Are all providers live, mapped, and accepting patients?",
                    "Are our channels and integrations working as expected?",
                    "Where are we leaving growth on the table?",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Hierarchy as navigation</Heading>
                  <Text muted>
                    Integrations → Locations → Providers. Supports both high-level oversight
                    and drill-down without losing context. Flat lists and timelines failed in testing.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">From tasks to system health</Heading>
                  <Text muted>
                    Shifted the mental model from "what do I need to do" to "what's happening
                    across my system." Account Health highlights urgent issues like missing
                    availability, broken integrations, and misconfigured insurance. Insights
                    surfaces optional optimizations — expand hours, improve profiles, adjust spend.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">A shared rally point</Heading>
                  <Text muted>
                    A single source of truth for CSMs, ops, and admins. Built to be easy to
                    screenshot and share in updates.
                  </Text>
                </div>
              </div>

              <Text muted>
                The layout uses a single-column, scrollable structure to maintain narrative flow,
                with clear section breaks to manage density. High-signal metrics are surfaced first,
                with supporting context progressively disclosed. Status indicators rely on more than
                color alone — iconography and labels ensure clarity at a glance. Empty states are
                intentional and reassuring, reinforcing when the system is healthy rather than
                leaving gaps.
              </Text>

              <LightboxImage
                src="/zocdoc/home-post-activation.avif"
                alt="Zocdoc enterprise Home — post-activation dashboard"
                caption="Enterprise Home — v2"
              />
            </div>

            {/* Surface 2 */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Surface 2 — Get Started tasks</Heading>
              <Text muted>
                For staff doing the work, I designed a simple checklist experience grounded in
                how practices actually operate. Staff were often part-time, non-technical, and
                juggling onboarding alongside other responsibilities. They needed clarity over
                completeness.
              </Text>

              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Group tasks by how staff think</Heading>
                  <Text muted>
                    Moved from system-based groupings to workflow-based ones like "Add providers," "Configure availability," and "Set accepted insurance." This reduced
                    drop-off in testing.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Make ownership explicit</Heading>
                  <Text muted>
                    Clearly label Zocdoc-owned vs. practice-owned tasks. This removed the most
                    common question: who is responsible for the next step?
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Keep the main path simple</Heading>
                  <Text muted>
                    Progressive disclosure with expanding step details. The core flow stays clean while still
                    supporting more complex scenarios.
                  </Text>
                </div>
              </div>

              <LightboxImage
                src="/zocdoc/get-started.avif"
                alt="Get Started — staff onboarding checklist"
                caption="Get Started — staff checklist"
              />
            </div>

            {/* Surface 3 */}
            <div className="space-y-8">
              <Heading as="h3" level={3} variant="h3">Surface 3 — Bulk NPI provider add</Heading>
              <Text muted>
                For enterprises adding large provider rosters — sometimes hundreds at once — I
                designed a dedicated bulk-add flow powered by NPI pre-fill. The previous approach
                relied on spreadsheet uploads with no feedback until after submission, with errors
                showing up days later as support tickets.
              </Text>

              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Validate early, not after the fact</Heading>
                  <Text muted>
                    Real-time NPI validation surfaces issues like specialty mismatches or unclear
                    roles before submission. Errors are clearly categorized as fix now or review later.
                  </Text>
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level={4} variant="h4">Preview before commit</Heading>
                  <Text muted>
                    Admins see exactly what will be created — providers, locations, and specialties.
                    This reduced accidental submissions and rollback requests.
                  </Text>
                </div>
              </div>

              <LightboxImage
                src="/zocdoc/bulk-npi.avif"
                alt="Bulk NPI — preview before commit for provider add"
                caption="Bulk NPI — provider add flow"
              />
            </div>
          </section>


          {/* Key decisions */}
          <section className="space-y-8">
            <Heading as="h2" level={2} variant="h2">Key decisions &amp; tradeoffs</Heading>
            <div className="space-y-8">
              {[
                {
                  title: "Prioritized in-flight customers, not just new ones",
                  body: "We designed for accounts already mid-onboarding, not just clean-slate flows. That meant handling messy, in-progress states from day one. It added complexity, but delivered value faster to our largest customers.",
                },
                {
                  title: "One Home, not scattered widgets",
                  body: "Instead of spreading status across pages, we created a single Home surface. This required rethinking navigation and retiring legacy patterns. The result is a clear control center that scales without fragmenting attention.",
                },
                {
                  title: "Tasks and states over timelines",
                  body: "Onboarding is modeled as tasks with states per entity, not a linear progress bar. More complex to design, but it supports parallel work, clear ownership, and reliable measurement.",
                },
                {
                  title: "Human-in-the-loop for compliance",
                  body: "For credentialing and specialty mapping, we kept human review in the loop. It slowed full automation, but reduced risk and matched regulatory and contractual realities.",
                },
                {
                  title: "Extensible EHR patterns, not deep integrations",
                  body: "We avoided deep integrations early and focused on flexible patterns. Fewer immediate wins, but a more maintainable foundation and a realistic first release.",
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
              <ul className="space-y-2 text-muted-foreground text-lg leading-[1.7] list-none pl-0">
                {[
                  "Enterprise Home rolled out to 13 enterprise accounts in March 2026",
                  "Guided staff onboarding flows launched to 50% of practices with < 15 providers",
                  "Bulk NPI tool released to all enterprise accounts",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Heading as="h3" level={3} variant="h3">Impact</Heading>
              <CaseTable
                rows={[
                  ["Time to go-live", "Reduced from 8 weeks to under 6"],
                  ["Ops overhead", "Manual effort per enterprise onboarding down from 37 hrs to 29"],
                  ["Support tickets", "\"Where are we in onboarding?\" tickets down 11%"],
                  ["Sales escalations", "Onboarding-related escalations down 18%"],
                  ["Adoption", "87% of enterprise admins used Home weekly within 30 days of launch"],
                ]}
              />
            </div>

            <div className="space-y-6">
              <Heading as="h3" level={3} variant="h3">Enabling the team</Heading>
              <Text muted>
                Designing the bulk NPI flow and enterprise Home exposed a core issue: we were
                relying on fake or static provider data to model highly variable, real-world scenarios.
              </Text>
              <Text muted>
                To solve this, I built a lightweight MCP server that brought live NPI Registry data
                into Claude Code. Designers and engineers could generate realistic provider profiles,
                locations, and specialties directly in their prototypes. This made edge cases visible
                early — especially around specialty mapping, location assignment, and incomplete
                records — and reduced rework later in development.
              </Text>
              <ul className="space-y-2 text-muted-foreground text-lg leading-[1.7] list-none pl-0">
                {[
                  "Replaced static data with real provider data from the NPI Registry",
                  "Reduced time to create realistic prototypes from hours to minutes",
                  "Surfaced edge cases earlier in the design process",
                  "Turned messy API data into a consistent structure",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </Container>
      </Section>
    </div>
  );
}
