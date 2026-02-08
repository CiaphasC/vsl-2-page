import { gsap } from "gsap";

import { selectAll, selectOne } from "@/lib/animations/dom";
import type { LandingAnimationFeature } from "@/lib/animations/types";

export const animateBrandSigil: LandingAnimationFeature = ({
  prefersReducedMotion,
  profile,
  scope,
}) => {
  const brandSigil = selectOne<SVGSVGElement>(scope, "#brand-prisms");
  const brandPrisms = selectAll<SVGPolygonElement>(scope, ".brand-prism");
  const brandLines = selectAll<SVGPathElement>(scope, ".brand-line");
  const brandNodes = selectAll<SVGCircleElement>(scope, ".brand-node");
  const isLite = profile === "lite";

  if (prefersReducedMotion) {
    gsap.set(brandPrisms, { opacity: 0.24 });
    gsap.set(brandLines, { opacity: 0.18 });
    gsap.set(brandNodes, { opacity: 0.3 });
    return;
  }

  if (!isLite) {
    if (brandSigil) {
      gsap.to(brandSigil, {
        x: 7,
        y: -4,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    brandPrisms.forEach((prism, index) => {
      gsap.to(prism, {
        x: "random(-6, 8)",
        y: "random(-5, 6)",
        rotation: index % 2 === 0 ? 8 : -8,
        scale: "random(0.94, 1.08)",
        opacity: "random(0.2, 0.52)",
        duration: 6.5 + index * 1.15,
        delay: index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.set(brandLines, {
      strokeDashoffset: 180,
    });

    gsap.to(brandLines, {
      strokeDashoffset: -180,
      duration: 8.2,
      stagger: 1.1,
      repeat: -1,
      ease: "none",
    });

    brandLines.forEach((line, index) => {
      gsap.to(line, {
        opacity: "random(0.18, 0.4)",
        duration: 3.8 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    brandNodes.forEach((node, index) => {
      gsap.to(node, {
        scale: "random(0.82, 1.45)",
        opacity: "random(0.22, 0.7)",
        duration: 2.8 + Math.random() * 1.8,
        delay: index * 0.12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return;
  }

  if (brandSigil) {
    gsap.to(brandSigil, {
      x: 4,
      y: -2,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  const animatedPrisms = brandPrisms.filter((_, index) => index % 2 === 0);
  const staticPrisms = brandPrisms.filter((_, index) => index % 2 !== 0);
  gsap.set(staticPrisms, { opacity: 0.2 });

  animatedPrisms.forEach((prism, index) => {
    gsap.to(prism, {
      x: gsap.utils.random(-3, 4, 1),
      y: gsap.utils.random(-2, 3, 1),
      rotation: index % 2 === 0 ? 4 : -4,
      scale: gsap.utils.random(0.97, 1.04, 0.01),
      opacity: gsap.utils.random(0.24, 0.4, 0.01),
      duration: 9 + index * 1.4,
      delay: index * 0.35,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  const animatedLines = brandLines.slice(0, 1);
  gsap.set(brandLines.slice(1), { opacity: 0.15, strokeDashoffset: 0 });

  if (animatedLines.length > 0) {
    gsap.set(animatedLines, {
      strokeDashoffset: 120,
    });

    gsap.to(animatedLines, {
      strokeDashoffset: -120,
      duration: 12,
      stagger: 2.3,
      repeat: -1,
      ease: "none",
    });

    animatedLines.forEach((line, index) => {
      gsap.to(line, {
        opacity: gsap.utils.random(0.2, 0.3, 0.01),
        duration: 5.2 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }

  const animatedNodes = brandNodes.filter((_, index) => index % 2 === 0);
  gsap.set(
    brandNodes.filter((_, index) => index % 2 !== 0),
    { opacity: 0.3, scale: 1 },
  );

  animatedNodes.forEach((node, index) => {
    gsap.to(node, {
      scale: gsap.utils.random(0.92, 1.22, 0.01),
      opacity: gsap.utils.random(0.3, 0.55, 0.01),
      duration: 4.2 + gsap.utils.random(0, 1.3, 0.1),
      delay: index * 0.24,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
};

