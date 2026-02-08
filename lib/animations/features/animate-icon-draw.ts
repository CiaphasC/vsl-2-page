import { ScrollTrigger } from "gsap/ScrollTrigger";

import { selectAll } from "@/lib/animations/dom";
import type { LandingAnimationFeature } from "@/lib/animations/types";

export const animateIconDraw: LandingAnimationFeature = ({
  prefersReducedMotion,
  profile,
  scope,
}) => {
  const icons = selectAll<SVGSVGElement>(scope, ".icon-draw");
  if (icons.length === 0) {
    return;
  }

  if (prefersReducedMotion) {
    icons.forEach((icon) => icon.classList.add("active"));
    return;
  }

  const isLite = profile === "lite";

  icons.forEach((icon) => {
    if (isLite) {
      ScrollTrigger.create({
        trigger: icon,
        start: "top 82%",
        once: true,
        onEnter: () => icon.classList.add("active"),
      });
      return;
    }

    ScrollTrigger.create({
      trigger: icon,
      start: "top 80%",
      onEnter: () => icon.classList.add("active"),
      onLeaveBack: () => icon.classList.remove("active"),
    });
  });
};
