"use client";

import { useEffect, useState } from "react";

interface ScrollMetrics {
  progress: number;
  isSticky: boolean;
}

interface UseScrollMetricsOptions {
  stickyThreshold?: number;
  progressPrecision?: number;
}

const DEFAULT_STICKY_THRESHOLD = 12;
const DEFAULT_PROGRESS_PRECISION = 1;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function useScrollMetrics(
  options: UseScrollMetricsOptions = {},
): ScrollMetrics {
  const stickyThreshold = options.stickyThreshold ?? DEFAULT_STICKY_THRESHOLD;
  const progressPrecision =
    options.progressPrecision ?? DEFAULT_PROGRESS_PRECISION;

  const [metrics, setMetrics] = useState<ScrollMetrics>({
    progress: 0,
    isSticky: false,
  });

  useEffect(() => {
    let rafId = 0;

    const calculateMetrics = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      const normalizedProgress = Number(
        clamp(progress, 0, 100).toFixed(progressPrecision),
      );
      const nextMetrics: ScrollMetrics = {
        progress: Number.isFinite(normalizedProgress) ? normalizedProgress : 0,
        isSticky: scrollTop > stickyThreshold,
      };

      setMetrics((previous) => {
        if (
          previous.progress === nextMetrics.progress &&
          previous.isSticky === nextMetrics.isSticky
        ) {
          return previous;
        }

        return nextMetrics;
      });
    };

    const onScroll = () => {
      if (rafId !== 0) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        calculateMetrics();
        rafId = 0;
      });
    };

    calculateMetrics();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [progressPrecision, stickyThreshold]);

  return metrics;
}
