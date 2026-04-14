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
    slug: "zocdoc",
    title: "Zocdoc",
    tagline: "Designing the onboarding journey for large practices",
    year: "2026",
    role: "Principal Product Designer",
    featured: true,
    summary:
      "Zocdoc's provider onboarding was fragmented, with disconnected flows and manual work slowing enterprise go-lives and straining ops. I designed a unified onboarding system — a new enterprise Home, guided tasks for staff, and a bulk NPI tool — giving practices a single source of truth.",
    cover: "/zocdoc/hero.avif",
    problem:
      "Teams relied on static weekly PDFs and ad-hoc SQL requests, slowing decisions during peak season.",
    approach:
      "Co-designed a progressive disclosure model: snapshot KPIs first, drill-down filters second, raw exports last.",
    outcome:
      "Cut time-to-insight for the pilot cohort by roughly half; became the template for two sister products.",
  },
  {
    slug: "samepage",
    title: "Samepage",
    tagline: "From scattered inputs to structured updates",
    year: "2025",
    role: "Lead Product Designer",
    featured: true,
    summary:
      "Samepage is a platform that helps project managers and teams collaborate more effectively.",
      cover: "/samepage/hero.avif",
    problem:
      "Project managers and teams were struggling to collaborate effectively.",
    approach:
      "We built a platform that helps project managers and teams collaborate more effectively.",
    outcome:
      "Project managers and teams are now collaborating more effectively.",
  },
  {
    slug: "tango",
    title: "Tango",
    tagline: "How-to guides that create themselves",
    year: "2024",
    role: "Lead Product Designer",
    featured: true,
    summary:
      "Tango is a platform that helps project managers and teams collaborate more effectively.",
      cover: "/tango/core view.avif",
    problem:
      "Project managers and teams were struggling to collaborate effectively.",
    approach:
      "We built a platform that helps project managers and teams collaborate more effectively.",
    outcome:
      "Project managers and teams are now collaborating more effectively.",
  },
  {
    slug: "handraise",
    title: "Handraise",
    tagline: "Turning earned media into owned reach",
    year: "2024",
    role: "Lead Product Designer",
    featured: false,
    summary:
      "Handraise is a platform that helps project managers and teams collaborate more effectively.",
      cover: "/handraise/handraise-hero1.avif",
    problem:
      "Project managers and teams were struggling to collaborate effectively.",
    approach:
      "We built a platform that helps project managers and teams collaborate more effectively.",
    outcome:
      "Project managers and teams are now collaborating more effectively.",
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
