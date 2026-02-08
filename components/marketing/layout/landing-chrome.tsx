"use client";

import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

import { BrandSigil } from "@/components/marketing/shared/brand-sigil";
import { useScrollMetrics } from "@/hooks/use-scroll-metrics";
import { cn } from "@/lib/utils";
import type { NavigationContent } from "@/types/landing";

interface LandingChromeProps {
  navigation: NavigationContent;
}

export function LandingChrome({ navigation }: LandingChromeProps) {
  const { isSticky, progress } = useScrollMetrics({ progressPrecision: 1 });

  return (
    <>
      <div
        id="scroll-progress"
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 to-sky-500 will-change-transform"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      <nav
        id="navbar"
        className={cn("glass-header fixed start-0 top-0 z-50 w-full", {
          "is-sticky": isSticky,
        })}
      >
        <div className="nav-shell mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={navigation.homeHref} className="nav-brand group flex items-center gap-3">
            <BrandSigil />

            <div className="brand-content">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-md transition-all group-hover:bg-sky-500/20" />
                <SlidersHorizontal className="relative z-10 h-8 w-8 text-brand-navy transition-colors duration-300 group-hover:text-sky-500" />
              </div>

              <div className="logo-font flex flex-col">
                <span className="leading-none text-xl font-bold tracking-tight text-brand-navy">
                  {navigation.brand.primary}
                  <span className="font-light text-slate-400">{navigation.brand.secondary}</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-500">
                  {navigation.brand.subtitle}
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex">
            <a
              href={navigation.strategyHref}
              className="nav-strategy-link text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors hover:text-sky-500"
            >
              {navigation.strategyLabel}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
