import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Brent Palmer — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: "32px",
          }}
        >
          BRENTPALMER.DESIGN
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Brent Palmer
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "28px",
            fontWeight: 400,
            color: "#888",
            lineHeight: 1.4,
            maxWidth: "700px",
          }}
        >
          Product designer specializing in B2B SaaS, AI workflows, and enterprise systems.
        </div>
      </div>
    ),
    { ...size }
  );
}
