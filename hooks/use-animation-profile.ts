"use client";

import { useMemo } from "react";

import type { LandingAnimationProfile } from "@/lib/animations/types";

interface NavigatorWithNetworkInformation extends Navigator {
  connection?: {
    saveData?: boolean;
  };
}

export function useAnimationProfile(): LandingAnimationProfile | null {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const compactViewportQuery = window.matchMedia("(max-width: 700px)");
    const reducedDataQuery = window.matchMedia("(prefers-reduced-data: reduce)");
    const networkConnection = (navigator as NavigatorWithNetworkInformation)
      .connection;

    const isCompactViewport = compactViewportQuery.matches;
    const prefersDataSaving =
      reducedDataQuery.matches || Boolean(networkConnection?.saveData);

    return isCompactViewport || prefersDataSaving
      ? "lite"
      : "full";
  }, []);
}
