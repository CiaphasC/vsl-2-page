"use client";

import { useEffect, useState } from "react";

import { subscribeToMediaQueryChange } from "@/lib/browser/media-query";

export function usePrefersReducedMotion(): boolean | null {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();
    const unsubscribe = subscribeToMediaQueryChange(mediaQuery, handleChange);

    return () => {
      unsubscribe();
    };
  }, []);

  return prefersReducedMotion;
}
