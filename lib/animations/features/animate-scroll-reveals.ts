import { gsap } from "gsap";

import { selectAll } from "@/lib/animations/dom";
import type { LandingAnimationFeature } from "@/lib/animations/types";
import { parseNumber } from "@/lib/animations/utils";

export const animateScrollReveals: LandingAnimationFeature = ({
  prefersReducedMotion,
  scope,
}) => {
  const revealElements = selectAll<HTMLElement>(scope, ".scroll-reveal");

  revealElements.forEach((element) => {
    if (prefersReducedMotion) {
      gsap.set(element, { autoAlpha: 1, y: 0 });
      return;
    }

    const revealDelay = parseNumber(element.dataset.revealDelay, 0);
    const revealStart = element.dataset.revealStart ?? "top 98%";
    const revealDuration = parseNumber(element.dataset.revealDuration, 0.5);
    const revealFromY = parseNumber(element.dataset.revealFromY, 16);
    const revealFromOpacity = parseNumber(element.dataset.revealFromOpacity, 0);
    const revealFromScale = parseNumber(element.dataset.revealFromScale, 1);
    const revealFromBlur = parseNumber(element.dataset.revealFromBlur, 0);
    const revealRepeat = element.dataset.revealRepeat === "true";
    const revealToggleActions =
      element.dataset.revealToggleActions ??
      (revealRepeat ? "play none none reset" : "play none none none");

    const toVars: gsap.TweenVars = {
      y: 0,
      scale: 1,
      autoAlpha: 1,
      filter: "blur(0px)",
      duration: revealDuration,
      delay: revealDelay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: revealStart,
        toggleActions: revealToggleActions,
        once: !revealRepeat,
      },
    };

    if (!revealRepeat) {
      toVars.clearProps = "transform,opacity,visibility,filter";
    }

    gsap.fromTo(
      element,
      {
        y: revealFromY,
        scale: revealFromScale,
        autoAlpha: revealFromOpacity,
        filter: revealFromBlur > 0 ? `blur(${revealFromBlur}px)` : "none",
      },
      toVars,
    );
  });
};
