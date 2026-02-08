export type LandingAnimationProfile = "full" | "lite";

export interface LandingAnimationContext {
  prefersReducedMotion: boolean;
  profile: LandingAnimationProfile;
  scope: Element;
}

export interface InitLandingAnimationsOptions {
  prefersReducedMotion: boolean;
  profile: LandingAnimationProfile;
  scope: Element;
}

export interface LandingAnimationController {
  destroy: () => void;
  pause: () => void;
  resume: () => void;
}

export type LandingAnimationFeature = (
  context: LandingAnimationContext,
) => void;
