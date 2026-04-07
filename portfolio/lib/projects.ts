export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  featured: boolean;
  summary: string;
  cover?: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "northwind-analytics",
    title: "Northwind Analytics",
    tagline: "Self-serve reporting for operations teams",
    year: "2025",
    role: "Lead product design",
    featured: true,
    summary:
      "Redefined how warehouse managers explore daily throughput without exporting spreadsheets.",
    cover: "/globe.svg",
    problem:
      "Teams relied on static weekly PDFs and ad-hoc SQL requests, slowing decisions during peak season.",
    approach:
      "Co-designed a progressive disclosure model: snapshot KPIs first, drill-down filters second, raw exports last.",
    outcome:
      "Cut time-to-insight for the pilot cohort by roughly half; became the template for two sister products.",
  },
  {
    slug: "ledger-mobile",
    title: "Ledger Mobile",
    tagline: "Payments you can explain in one screen",
    year: "2024",
    role: "Product design",
    featured: true,
    summary:
      "A calmer mobile experience for small businesses reconciling payouts and fees.",
    problem:
      "Merchants saw inconsistent balances across web and app, eroding trust in payout timing.",
    approach:
      "Aligned on a single ledger narrative—available, pending, and fees—using plain language and predictable hierarchy.",
    outcome:
      "Higher task completion in usability tests; fewer support tickets tagged “balance confusion.”",
  },
  {
    slug: "atlas-onboarding",
    title: "Atlas Onboarding",
    tagline: "From signup to first value in minutes",
    year: "2023",
    role: "Design systems",
    featured: true,
    summary:
      "A modular onboarding flow that adapts to company size and compliance needs.",
    problem:
      "New teams abandoned setup when legal and billing steps appeared in arbitrary order.",
    approach:
      "Mapped jobs-to-be-done, then split flows into composable blocks owned by different squads.",
    outcome:
      "Reduced drop-off before first project creation; design system patterns reused in three adjacent flows.",
  },
  {
    slug: "signal-research",
    title: "Signal Research",
    tagline: "Qualitative synthesis at scale",
    year: "2022",
    role: "Founding designer",
    featured: false,
    summary:
      "Tools for tagging, clustering, and sharing interview insights across a distributed research org.",
    problem:
      "Insights lived in siloed docs; product teams duplicated interviews and missed patterns.",
    approach:
      "Shipped an MVP around shared tags and lightweight affinity mapping, with strict import from existing note tools.",
    outcome:
      "Research ops adopted it as source of truth for two product lines; informed roadmap prioritization workshops.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => b.year.localeCompare(a.year));
}
