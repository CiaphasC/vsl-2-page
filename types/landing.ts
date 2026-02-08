export interface BrandContent {
  primary: string;
  secondary: string;
  subtitle: string;
}

export interface NavigationContent {
  brand: BrandContent;
  homeHref: string;
  strategyLabel: string;
  strategyHref: string;
}

export interface HeroVideoContent {
  thumbnailUrl: string;
  watchLabel: string;
  stepLabel: string;
  stepAction: string;
  duration: string;
}

export interface HeroContent {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  descriptionLead: string;
  descriptionHighlight: string;
  descriptionTail: string;
  video: HeroVideoContent;
  ctaStep: string;
  ctaLabel: string;
  availability: string;
}

export interface StrategyItem {
  id: string;
  kicker: string;
  title: string;
  description: string;
  icon: "patients" | "roi" | "automation";
}

export interface EvidenceContent {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  quote: string;
  highlightedQuote: string;
  quoteSuffix: string;
  doctorName: string;
  doctorRole: string;
  doctorResult: string;
  imageUrl: string;
  avatarUrl: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  companyName: string;
  summary: string;
  legalLinks: FooterLink[];
  disclaimerTitle: string;
  disclaimerText: string;
  copyright: string;
  signature: string;
}

export interface LandingContent {
  navigation: NavigationContent;
  hero: HeroContent;
  strategy: StrategyItem[];
  evidence: EvidenceContent;
  footer: FooterContent;
}
