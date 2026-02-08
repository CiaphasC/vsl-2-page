import { gsap } from "gsap";

import { selectAll } from "@/lib/animations/dom";
import type { LandingAnimationFeature } from "@/lib/animations/types";

export const animateShimmer: LandingAnimationFeature = ({
  prefersReducedMotion,
  profile,
  scope,
}) => {
  const shimmerLayers = selectAll<HTMLElement>(scope, ".animate-shimmer");
  if (shimmerLayers.length === 0) {
    return;
  }

  if (prefersReducedMotion) {
    gsap.set(shimmerLayers, { x: "0%" });
    return;
  }

  const isLite = profile === "lite";

  gsap.to(shimmerLayers, {
    x: "100%",
    duration: isLite ? 4 : 2,
    repeat: -1,
    ease: "power2.inOut",
    delay: isLite ? 1.8 : 1,
    stagger: isLite ? 1.2 : 0.35,
  });
};
