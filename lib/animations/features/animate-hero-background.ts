import { gsap } from "gsap";

import { selectAll, selectOne } from "@/lib/animations/dom";
import type { LandingAnimationFeature } from "@/lib/animations/types";

export const animateHeroBackground: LandingAnimationFeature = ({
  prefersReducedMotion,
  profile,
  scope,
}) => {
  const orbitRings = selectAll<SVGCircleElement>(scope, ".orbit-ring");
  const orbitBeams = selectAll<SVGPathElement>(scope, ".orbit-beam");
  const orbitDots = selectAll<SVGCircleElement>(scope, ".orbit-dot");
  const prismFacets = selectAll<SVGPolygonElement>(scope, ".prism-facet");
  const prismLinks = selectAll<SVGPathElement>(scope, ".prism-link");
  const heroOrbits = selectOne<SVGSVGElement>(scope, "#hero-orbits");
  const heroSection = selectOne<HTMLElement>(scope, "header");
  const isLite = profile === "lite";

  if (prefersReducedMotion) {
    gsap.set(orbitRings, { opacity: 0.14 });
    gsap.set(orbitBeams, { opacity: 0.1 });
    gsap.set(orbitDots, { opacity: 0.3 });
    gsap.set(prismFacets, { opacity: 0.12 });
    gsap.set(prismLinks, { opacity: 0.1 });
    return;
  }

  if (!isLite) {
    orbitRings.forEach((ring, index) => {
      gsap.to(ring, {
        rotation: index % 2 === 0 ? 360 : -360,
        transformOrigin: "50% 50%",
        duration: 40 + index * 10,
        ease: "none",
        repeat: -1,
      });

      gsap.to(ring, {
        opacity: "random(0.12, 0.32)",
        duration: 6 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.set(orbitBeams, {
      strokeDasharray: 300,
      strokeDashoffset: 300,
    });

    gsap.to(orbitBeams, {
      strokeDashoffset: -300,
      duration: 11,
      stagger: 1.5,
      repeat: -1,
      ease: "none",
    });

    orbitBeams.forEach((beam, index) => {
      gsap.to(beam, {
        x: "random(-35, 35)",
        y: "random(-18, 18)",
        opacity: "random(0.12, 0.34)",
        duration: 9 + index * 2,
        delay: index * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    orbitDots.forEach((dot, index) => {
      gsap.to(dot, {
        x: "random(-45, 45)",
        y: "random(-30, 30)",
        scale: "random(0.75, 1.5)",
        opacity: "random(0.2, 0.75)",
        duration: 7 + Math.random() * 6,
        delay: index * 0.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    prismFacets.forEach((facet, index) => {
      gsap.to(facet, {
        x: "random(-20, 20)",
        y: "random(-16, 16)",
        rotation: index % 2 === 0 ? 7 : -7,
        scale: "random(0.94, 1.08)",
        opacity: "random(0.16, 0.38)",
        duration: 10 + index * 1.8,
        delay: index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.set(prismLinks, {
      strokeDashoffset: 220,
    });

    gsap.to(prismLinks, {
      strokeDashoffset: -220,
      duration: 10,
      stagger: 1.3,
      repeat: -1,
      ease: "none",
    });

    prismLinks.forEach((link, index) => {
      gsap.to(link, {
        opacity: "random(0.12, 0.34)",
        duration: 4 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    if (heroOrbits) {
      gsap.to(heroOrbits, {
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: heroSection ?? heroOrbits,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return;
  }

  const animatedRings = orbitRings.slice(0, 2);
  gsap.set(orbitRings.slice(2), { opacity: 0.14 });
  animatedRings.forEach((ring, index) => {
    gsap.to(ring, {
      rotation: index % 2 === 0 ? 360 : -360,
      transformOrigin: "50% 50%",
      duration: 58 + index * 14,
      ease: "none",
      repeat: -1,
    });

    gsap.to(ring, {
      opacity: gsap.utils.random(0.14, 0.25, 0.01),
      duration: 8 + index,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  const animatedBeams = orbitBeams.slice(0, 1);
  gsap.set(orbitBeams.slice(1), { opacity: 0.12, strokeDashoffset: 0 });
  if (animatedBeams.length > 0) {
    gsap.set(animatedBeams, {
      strokeDasharray: 300,
      strokeDashoffset: 300,
    });

    gsap.to(animatedBeams, {
      strokeDashoffset: -300,
      duration: 16,
      stagger: 2.4,
      repeat: -1,
      ease: "none",
    });

    animatedBeams.forEach((beam, index) => {
      gsap.to(beam, {
        x: gsap.utils.random(-16, 16, 1),
        y: gsap.utils.random(-8, 8, 1),
        opacity: gsap.utils.random(0.14, 0.24, 0.01),
        duration: 13 + index * 2.6,
        delay: index * 0.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }

  const animatedDots = orbitDots.filter((_, index) => index % 3 === 0);
  gsap.set(
    orbitDots.filter((_, index) => index % 3 !== 0),
    { opacity: 0.22, scale: 1 },
  );
  animatedDots.forEach((dot, index) => {
    gsap.to(dot, {
      x: gsap.utils.random(-18, 18, 1),
      y: gsap.utils.random(-12, 12, 1),
      scale: gsap.utils.random(0.9, 1.2, 0.01),
      opacity: gsap.utils.random(0.24, 0.5, 0.01),
      duration: 10 + gsap.utils.random(0, 4, 0.1),
      delay: index * 0.28,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  const animatedFacets = prismFacets.filter((_, index) => index % 2 === 0);
  gsap.set(
    prismFacets.filter((_, index) => index % 2 !== 0),
    { opacity: 0.14, scale: 1 },
  );
  animatedFacets.forEach((facet, index) => {
    gsap.to(facet, {
      x: gsap.utils.random(-10, 10, 1),
      y: gsap.utils.random(-8, 8, 1),
      rotation: index % 2 === 0 ? 3 : -3,
      scale: gsap.utils.random(0.97, 1.04, 0.01),
      opacity: gsap.utils.random(0.18, 0.28, 0.01),
      duration: 14 + index * 2.2,
      delay: index * 0.45,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  const animatedLinks = prismLinks.slice(0, 1);
  gsap.set(prismLinks.slice(1), { opacity: 0.12, strokeDashoffset: 0 });
  if (animatedLinks.length > 0) {
    gsap.set(animatedLinks, {
      strokeDashoffset: 220,
    });

    gsap.to(animatedLinks, {
      strokeDashoffset: -220,
      duration: 14,
      stagger: 2.2,
      repeat: -1,
      ease: "none",
    });

    animatedLinks.forEach((link, index) => {
      gsap.to(link, {
        opacity: gsap.utils.random(0.15, 0.24, 0.01),
        duration: 6 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }

  if (heroOrbits) {
    gsap.to(heroOrbits, {
      yPercent: 4,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection ?? heroOrbits,
        start: "top 12%",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }
};
