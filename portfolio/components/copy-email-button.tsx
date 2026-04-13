"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

const EMAIL = "brntpalmer@gmail.com";

function Toast({ phase }: { phase: "in" | "out" }) {
  return (
    <div
      style={{
        animation: `${phase === "in" ? "toast-in" : "toast-out"} 220ms ease forwards`,
      }}
      className="fixed bottom-8 left-1/2 z-50 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-lg"
    >
      Copied to clipboard
    </div>
  );
}

export function CopyEmailButton({ className }: { className?: string }) {
  const [phase, setPhase] = useState<"in" | "out" | null>(null);

  async function handleClick() {
    await navigator.clipboard.writeText(EMAIL);
    setPhase("in");
    setTimeout(() => setPhase("out"), 1700);
    setTimeout(() => setPhase(null), 1920);
  }

  return (
    <>
      <button onClick={handleClick} className={className}>
        Contact
      </button>
      {phase && createPortal(<Toast phase={phase} />, document.body)}
    </>
  );
}
