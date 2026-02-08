import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { animateBrandSigil } from "@/lib/animations/features/animate-brand-sigil";
import { animateClouds } from "@/lib/animations/features/animate-clouds";
import { animateHeroBackground } from "@/lib/animations/features/animate-hero-background";
import { animateIconDraw } from "@/lib/animations/features/animate-icon-draw";
import { animateMistLayers } from "@/lib/animations/features/animate-mist-layers";
import { animateScrollReveals } from "@/lib/animations/features/animate-scroll-reveals";
import { animateShimmer } from "@/lib/animations/features/animate-shimmer";
import type {
  InitLandingAnimationsOptions,
  LandingAnimationContext,
  LandingAnimationController,
  LandingAnimationFeature,
} from "@/lib/animations/types";

const animationFeatures: readonly LandingAnimationFeature[] = [
  animateClouds,
  animateBrandSigil,
  animateHeroBackground,
  animateMistLayers,
  animateScrollReveals,
  animateIconDraw,
  animateShimmer,
];

let isPluginRegistered = false;
const FULL_PROFILE_FPS = 60;
const LITE_PROFILE_FPS = 42;

function registerGsapPlugins() {
  if (isPluginRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    autoRefreshEvents: "DOMContentLoaded,load,resize",
  });
  isPluginRegistered = true;
}

function isElement(value: unknown): value is Element {
  return value instanceof Element;
}

function hasScrollTrigger(animation: gsap.core.Animation): boolean {
  return Boolean(
    (animation as gsap.core.Tween).scrollTrigger ??
      (animation as gsap.core.Timeline).scrollTrigger,
  );
}

function animationBelongsToScope(
  animation: gsap.core.Animation,
  scope: Element,
): boolean {
  const tween = animation as gsap.core.Tween;
  if (typeof tween.targets !== "function") {
    return false;
  }

  return tween
    .targets()
    .some((target) => isElement(target) && scope.contains(target));
}

function getScopedAnimations(scope: Element): gsap.core.Animation[] {
  return gsap.globalTimeline
    .getChildren(true, true, true)
    .filter((animation) => animationBelongsToScope(animation, scope));
}

export function initLandingAnimations({
  prefersReducedMotion,
  profile,
  scope,
}: InitLandingAnimationsOptions): LandingAnimationController {
  registerGsapPlugins();
  gsap.ticker.fps(profile === "lite" ? LITE_PROFILE_FPS : FULL_PROFILE_FPS);

  const context = gsap.context(() => {
    const featureContext: LandingAnimationContext = {
      prefersReducedMotion,
      profile,
      scope,
    };

    for (const feature of animationFeatures) {
      feature(featureContext);
    }
  }, scope);

  let isPaused = false;
  let isDestroyed = false;
  let pausedAnimations: gsap.core.Animation[] = [];

  const pause = () => {
    if (isDestroyed || isPaused) {
      return;
    }

    isPaused = true;
    pausedAnimations = getScopedAnimations(scope).filter(
      (animation) => !hasScrollTrigger(animation),
    );
    for (const animation of pausedAnimations) {
      animation.pause();
    }
    gsap.ticker.sleep();
  };

  const resume = () => {
    if (isDestroyed || !isPaused) {
      return;
    }

    isPaused = false;
    gsap.ticker.wake();
    for (const animation of pausedAnimations) {
      animation.resume();
    }
    pausedAnimations = [];
  };

  const destroy = () => {
    if (isDestroyed) {
      return;
    }

    isDestroyed = true;
    context.revert();
    pausedAnimations = [];
    gsap.ticker.fps(FULL_PROFILE_FPS);
  };

  return {
    destroy,
    pause,
    resume,
  };
}
