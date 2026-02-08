"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

import { initLandingAnimations } from "@/lib/animations/landing-animations";
import type { LandingAnimationProfile } from "@/lib/animations/types";

export function useLandingAnimations(
  prefersReducedMotion: boolean | null,
  profile: LandingAnimationProfile | null,
  scopeRef: RefObject<Element | null>,
) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (prefersReducedMotion === null || profile === null || !scope) {
      return;
    }

    const controller = initLandingAnimations({
      prefersReducedMotion,
      profile,
      scope,
    });

    return () => {
      controller.destroy();
    };
  }, [prefersReducedMotion, profile, scopeRef]);
}
