"use client";

import type { RefObject } from "react";

import { useAnimationProfile } from "@/hooks/use-animation-profile";
import { useLandingAnimations } from "@/hooks/use-landing-animations";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface LandingAnimationProviderProps {
  scopeRef: RefObject<Element | null>;
}

export function LandingAnimationProvider({
  scopeRef,
}: LandingAnimationProviderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const profile = useAnimationProfile();

  useLandingAnimations(prefersReducedMotion, profile, scopeRef);

  return null;
}
