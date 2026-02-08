import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { MistOverlay } from "@/components/marketing/shared/mist-overlay";
import { cn } from "@/lib/utils";
import type { StrategyItem } from "@/types/landing";

interface StrategyCardProps {
  item: StrategyItem;
  revealDelay?: number;
}

interface StrategyMistConfig {
  fromBlur: number;
  fromOpacity: number;
  toBlur: number;
  toOpacity: number;
}

const STRATEGY_ICON_PATHS: Record<StrategyItem["icon"], ReactNode> = {
  patients: (
    <>
      <path
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="text-cyan-500"
        d="M19 11l2 2m0 0l-2 2m2-2H9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </>
  ),
  roi: (
    <path
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  ),
  automation: (
    <path
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  ),
};

const STRATEGY_MIST_CONFIG: Record<StrategyItem["icon"], StrategyMistConfig> = {
  automation: {
    fromBlur: 24,
    fromOpacity: 0.84,
    toBlur: 1.4,
    toOpacity: 0.14,
  },
  patients: {
    fromBlur: 26,
    fromOpacity: 0.86,
    toBlur: 1.5,
    toOpacity: 0.16,
  },
  roi: {
    fromBlur: 24,
    fromOpacity: 0.84,
    toBlur: 1.4,
    toOpacity: 0.14,
  },
};

function StrategyIcon({ icon }: Pick<StrategyItem, "icon">) {
  return (
    <svg className="icon-draw h-10 w-10 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {STRATEGY_ICON_PATHS[icon]}
    </svg>
  );
}

export function StrategyCard({ item, revealDelay = 0 }: StrategyCardProps) {
  const mistConfig = STRATEGY_MIST_CONFIG[item.icon];

  return (
    <Card
      className={cn(
        "group strategy-card mist-reveal scroll-reveal relative rounded-3xl border border-white/95 p-8 shadow-[0_14px_42px_-20px_rgba(2,15,36,0.2),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-700 hover:border-cyan-100/50 hover:shadow-soft-card md:p-10",
        "glass-card",
      )}
      data-mist-end="top 60%"
      data-mist-from-blur={mistConfig.fromBlur}
      data-mist-from-opacity={mistConfig.fromOpacity}
      data-mist-start="top 98%"
      data-mist-to-blur={mistConfig.toBlur}
      data-mist-to-opacity={mistConfig.toOpacity}
      data-reveal-delay={revealDelay}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/38 via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <MistOverlay variant="card" />

      <CardContent className="relative z-10 p-0">
        <div className="strategy-icon-wrap mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 md:mb-8 md:h-20 md:w-20">
          <StrategyIcon icon={item.icon} />
        </div>

        <p className="strategy-kicker">{item.kicker}</p>
        <h3 className="strategy-title">{item.title}</h3>
        <p className="strategy-copy">{item.description}</p>
      </CardContent>
    </Card>
  );
}
