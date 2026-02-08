"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import { LandingAnimationProvider } from "@/components/marketing/providers/landing-animation-provider";

interface LandingAnimationScopeProps {
  children: ReactNode;
}

export function LandingAnimationScope({ children }: LandingAnimationScopeProps) {
  const scopeRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scopeRef} className="selection:bg-cyan-100 selection:text-brand-navy">
      {children}
      <LandingAnimationProvider scopeRef={scopeRef} />
    </div>
  );
}
