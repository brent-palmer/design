import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollToTop } from "@/components/scroll-to-top";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://design-nu-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Brent Palmer — Product Designer",
    template: "%s — Brent Palmer",
  },
  description:
    "Product designer specializing in B2B SaaS, AI workflows, and enterprise systems.",
  openGraph: {
    type: "website",
    siteName: "Brent Palmer",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@palmer_bre50981",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brent Palmer",
  url: baseUrl,
  jobTitle: "Product Designer",
  sameAs: [
    "https://www.linkedin.com/in/brentpalmerdesign/",
    "https://x.com/palmer_bre50981",
    "https://github.com/brent-palmer",
    "https://figma.com/@Brent",
  ],
  knowsAbout: ["Product Design", "UX Design", "B2B SaaS", "AI workflows", "Enterprise systems"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={personSchema} />
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}
