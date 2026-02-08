import { gsap } from "gsap";

import { selectAll } from "@/lib/animations/dom";
import type { LandingAnimationFeature } from "@/lib/animations/types";
import { parseNumber } from "@/lib/animations/utils";

export const animateMistLayers: LandingAnimationFeature = ({
  prefersReducedMotion,
  profile,
  scope,
}) => {
  const mistElements = selectAll<HTMLElement>(scope, ".mist-reveal");
  const isLite = profile === "lite";

  mistElements.forEach((element) => {
    const mistLayer = element.querySelector<HTMLElement>(".mist-overlay");
    if (!mistLayer) {
      return;
    }

    const mistStart = element.dataset.mistStart ?? "top 96%";
    const mistEnd = element.dataset.mistEnd ?? "top 60%";
    const mistFromOpacity = parseNumber(element.dataset.mistFromOpacity, 0.76);
    const mistToOpacity = parseNumber(element.dataset.mistToOpacity, 0.1);
    const mistFromBlur = parseNumber(element.dataset.mistFromBlur, 20);
    const mistToBlur = parseNumber(element.dataset.mistToBlur, 1.5);
    const mistFromScale = parseNumber(element.dataset.mistFromScale, 1.08);
    const mistToScale = parseNumber(element.dataset.mistToScale, 1);
    const mistFromY = element.dataset.mistFromY ?? "16%";
    const mistToY = element.dataset.mistToY ?? "-6%";

    if (prefersReducedMotion) {
      gsap.set(element, {
        "--mist-opacity": Math.max(mistToOpacity, 0.16),
        "--mist-y": "0%",
        "--mist-scale": 1,
        "--mist-blur": `${Math.max(mistToBlur, 6)}px`,
      });
      return;
    }

    if (isLite) {
      gsap.fromTo(
        element,
        {
          "--mist-opacity": Math.max(mistFromOpacity, mistToOpacity + 0.12),
          "--mist-y": mistFromY,
          "--mist-scale": Math.max(mistFromScale, 1.04),
          "--mist-blur": `${Math.max(mistFromBlur, 14)}px`,
        },
        {
          "--mist-opacity": Math.max(mistToOpacity, 0.07),
          "--mist-y": mistToY,
          "--mist-scale": mistToScale,
          "--mist-blur": `${Math.max(mistToBlur, 2)}px`,
          duration: 0.9,
          ease: "power1.out",
          scrollTrigger: {
            trigger: element,
            start: mistStart,
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
      return;
    }

    gsap.fromTo(
      element,
      {
        "--mist-opacity": mistFromOpacity,
        "--mist-y": mistFromY,
        "--mist-scale": mistFromScale,
        "--mist-blur": `${mistFromBlur}px`,
      },
      {
        "--mist-opacity": mistToOpacity,
        "--mist-y": mistToY,
        "--mist-scale": mistToScale,
        "--mist-blur": `${mistToBlur}px`,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: mistStart,
          end: mistEnd,
          scrub: 1.1,
        },
      },
    );
  });
};
