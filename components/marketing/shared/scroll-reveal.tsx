import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  start?: string;
  duration?: number;
  fromY?: number;
  fromOpacity?: number;
  fromScale?: number;
  fromBlur?: number;
  repeat?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay,
  start,
  duration,
  fromY,
  fromOpacity,
  fromScale,
  fromBlur,
  repeat,
  ...props
}: ScrollRevealProps) {
  return (
    <div
      className={cn("scroll-reveal", className)}
      data-reveal-delay={delay}
      data-reveal-start={start}
      data-reveal-duration={duration}
      data-reveal-from-y={fromY}
      data-reveal-from-opacity={fromOpacity}
      data-reveal-from-scale={fromScale}
      data-reveal-from-blur={fromBlur}
      data-reveal-repeat={repeat}
      {...props}
    >
      {children}
    </div>
  );
}
