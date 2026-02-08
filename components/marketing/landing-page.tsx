import { LandingChrome } from "@/components/marketing/layout/landing-chrome";
import { LandingFooter } from "@/components/marketing/layout/landing-footer";
import { LandingAnimationScope } from "@/components/marketing/providers/landing-animation-scope";
import { EvidenceSection } from "@/components/marketing/sections/evidence-section";
import { HeroSection } from "@/components/marketing/sections/hero-section";
import { StrategySection } from "@/components/marketing/sections/strategy-section";
import { SectionSeparator } from "@/components/marketing/shared/section-separator";
import type { LandingContent } from "@/types/landing";

interface LandingPageProps {
  content: LandingContent;
}

export function LandingPage({ content }: LandingPageProps) {
  return (
    <LandingAnimationScope>
      <LandingChrome navigation={content.navigation} />

      <main>
        <HeroSection content={content.hero} />
        <SectionSeparator />
        <StrategySection items={content.strategy} />
        <SectionSeparator />
        <EvidenceSection content={content.evidence} />
      </main>

      <LandingFooter content={content.footer} />
    </LandingAnimationScope>
  );
}
