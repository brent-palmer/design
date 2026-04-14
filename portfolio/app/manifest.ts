import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brent Palmer — Product Designer",
    short_name: "Brent Palmer",
    description: "Product designer specializing in B2B SaaS, AI workflows, and enterprise systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/logo-light.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
