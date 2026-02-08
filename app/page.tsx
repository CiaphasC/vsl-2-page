import { LandingPage } from "@/components/marketing/landing-page";
import { landingContent } from "@/lib/content/landing-content";

export default function HomePage() {
  return <LandingPage content={landingContent} />;
}
