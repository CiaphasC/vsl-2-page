import { gsap } from "gsap";

import { selectAll } from "@/lib/animations/dom";
import type { LandingAnimationFeature } from "@/lib/animations/types";

export const animateClouds: LandingAnimationFeature = ({
  prefersReducedMotion,
  profile,
  scope,
}) => {
  const clouds = selectAll<SVGCircleElement>(scope, ".cloud-shape");
  if (clouds.length === 0) {
    return;
  }

  if (prefersReducedMotion) {
    gsap.set(clouds, { x: 0, y: 0, scale: 1, opacity: 0.48 });
    return;
  }

  const isLite = profile === "lite";
  if (!isLite) {
    clouds.forEach((cloud, index) => {
      gsap.to(cloud, {
        duration: 15 + Math.random() * 10,
        x: "random(-50, 50)",
        y: "random(-30, 30)",
        scale: "random(0.9, 1.1)",
        opacity: "random(0.4, 0.7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });
    });
    return;
  }

  const animatedClouds = clouds.filter((_, index) => index % 2 === 0);
  const staticClouds = clouds.filter((_, index) => index % 2 !== 0);
  gsap.set(staticClouds, { opacity: 0.52 });

  animatedClouds.forEach((cloud, index) => {
    const xDrift = gsap.utils.random(isLite ? -20 : -50, isLite ? 20 : 50, 1);
    const yDrift = gsap.utils.random(isLite ? -12 : -30, isLite ? 12 : 30, 1);
    const scaleTarget = gsap.utils.random(isLite ? 0.96 : 0.9, isLite ? 1.04 : 1.1, 0.01);
    const opacityTarget = gsap.utils.random(isLite ? 0.46 : 0.4, isLite ? 0.62 : 0.7, 0.01);

    gsap.to(cloud, {
      duration: (isLite ? 24 : 15) + gsap.utils.random(0, isLite ? 12 : 10, 0.1),
      x: xDrift,
      y: yDrift,
      scale: scaleTarget,
      opacity: opacityTarget,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * (isLite ? 0.8 : 0.5),
    });
  });
};

