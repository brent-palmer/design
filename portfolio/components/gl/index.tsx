"use client";

import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";

// Hardcoded values from the template's Leva defaults
const CONFIG = {
  speed: 1.0,
  noiseScale: 0.6,
  noiseIntensity: 0.52,
  timeScale: 1,
  focus: 3.8,
  aperture: 0.4,
  pointSize: 2.0,
  opacity: 0.8,
  planeScale: 10.0,
  size: 256, // 256 instead of 512 — 4× fewer particles for better performance
};

export const GL = ({ hovering = false }: { hovering?: boolean }) => {
  return (
    <Canvas
      dpr={1} // cap pixel ratio — avoids 2× GPU cost on Retina displays
      camera={{
        position: [1.2629783123314589, 2.664606471394044, -1.8178993743288914],
        fov: 50,
        near: 0.01,
        far: 300,
      }}
      gl={{ alpha: true, antialias: false }}
      style={{ width: "100%", height: "100%" }}
    >
      <Particles
        speed={CONFIG.speed}
        aperture={CONFIG.aperture}
        focus={CONFIG.focus}
        size={CONFIG.size}
        noiseScale={CONFIG.noiseScale}
        noiseIntensity={CONFIG.noiseIntensity}
        timeScale={CONFIG.timeScale}
        pointSize={CONFIG.pointSize}
        opacity={CONFIG.opacity}
        planeScale={CONFIG.planeScale}
        introspect={hovering}
      />
    </Canvas>
  );
};
