"use client";

import dynamic from "next/dynamic";

// WebGL is not SSR-compatible — load lazily on client only
const GL = dynamic(() => import("./gl").then((m) => m.GL), { ssr: false });

export function HeroParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <GL />
      {/* CSS vignette — replaces the postprocessing ShaderPass from the template */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
