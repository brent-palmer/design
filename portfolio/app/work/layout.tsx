import { ReadingProgressBar } from "@/components/reading-progress-bar";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgressBar />
      {children}
    </>
  );
}
