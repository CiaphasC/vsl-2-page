import Image from "next/image";
import { Expand, Play, Volume2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/marketing/shared/hero-background";
import { MistOverlay } from "@/components/marketing/shared/mist-overlay";
import { ScrollReveal } from "@/components/marketing/shared/scroll-reveal";
import type { HeroContent } from "@/types/landing";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden px-4 pb-20 pt-32 lg:pb-32 lg:pt-48">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <ScrollReveal className="mb-8 flex justify-center" duration={0.65} fromY={24}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/60 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-navy">
              {content.badge}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h1 className="mb-8 font-display text-4xl leading-tight font-medium tracking-tight text-brand-navy md:text-6xl lg:text-7xl">
            {content.titlePrefix} <span className="text-gradient-cyan font-bold">{content.titleHighlight}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed font-light text-slate-500 md:text-xl">
            {content.descriptionLead} {" "}
            <span className="border-b-2 border-cyan-200 font-semibold text-brand-navy">
              {content.descriptionHighlight}
            </span>{" "}
            {content.descriptionTail}
          </p>
        </ScrollReveal>

        <ScrollReveal className="perspective-1000 group relative mx-auto mb-20 w-full max-w-5xl">
          <div className="video-aura" />

          <div
            className="mist-reveal relative aspect-video overflow-hidden rounded-2xl border border-white/20 bg-[#020f24] shadow-video ring-1 ring-black/5 transition-transform duration-700 hover:scale-[1.01]"
            data-mist-end="top 58%"
            data-mist-from-blur="22"
            data-mist-from-opacity="0.72"
            data-mist-start="top 96%"
            data-mist-to-blur="1.2"
            data-mist-to-opacity="0.08"
          >
            <MistOverlay variant="media" />

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
              <Image
                src={content.video.thumbnailUrl}
                alt="VSL Thumbnail - Surgeons"
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="absolute inset-0 h-full w-full object-cover opacity-50"
                priority
              />

              <div className="group relative z-20 cursor-pointer">
                <div className="glass-btn flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30 md:h-24 md:w-24">
                  <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg md:h-16 md:w-16">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50 to-white opacity-0 transition-opacity group-hover:opacity-100" />
                    <Play className="relative z-10 ml-1 h-8 w-8 text-brand-navy md:h-9 md:w-9" />
                  </div>
                </div>
                <p className="mt-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white opacity-80 transition-opacity group-hover:opacity-100">
                  {content.video.watchLabel}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex h-20 items-end justify-between bg-gradient-to-t from-black/90 via-black/40 to-transparent px-8 py-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex w-full items-center gap-4">
                  <Play className="h-5 w-5 cursor-pointer text-white/90 hover:text-white" />
                  <div className="group/seek h-0.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/20">
                    <div className="relative h-full w-1/3 bg-cyan-400">
                      <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white opacity-0 shadow group-hover/seek:opacity-100" />
                    </div>
                  </div>
                  <span className="font-mono text-xs text-white/90">{content.video.duration}</span>
                  <div className="flex gap-3">
                    <Volume2 className="h-5 w-5 cursor-pointer text-white/90 hover:text-white" />
                    <span className="cursor-pointer text-sm font-semibold text-white/90 hover:text-white">HD</span>
                    <Expand className="h-5 w-5 cursor-pointer text-white/90 hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
              {content.video.stepLabel}
            </p>
            <p className="cursor-pointer text-sm font-medium text-sky-500 transition-colors hover:text-brand-navy">
              {content.video.stepAction}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal id="cta-section" className="flex flex-col items-center justify-center gap-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/60">{content.ctaStep}</p>
          <Button className="group relative overflow-hidden rounded-full bg-brand-navy px-10 py-6 text-lg font-medium tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-navy-dark hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            <span className="animate-shimmer absolute left-0 top-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="relative z-10 flex items-center gap-3">
              {content.ctaLabel}
              <span className="text-cyan-400 transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Button>

          <div className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span>{content.availability}</span>
          </div>
        </ScrollReveal>
      </div>
    </header>
  );
}
