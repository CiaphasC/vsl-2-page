import Image from "next/image";
import { Play } from "lucide-react";

import { MistOverlay } from "@/components/marketing/shared/mist-overlay";
import { ScrollReveal } from "@/components/marketing/shared/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { EvidenceContent } from "@/types/landing";

interface EvidenceSectionProps {
  content: EvidenceContent;
}

export function EvidenceSection({ content }: EvidenceSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal className="mb-20 text-center">
          <Badge className="mb-4 rounded-full bg-cyan-50 px-4 py-1 text-[10px] font-bold tracking-[0.25em] uppercase text-sky-500 hover:bg-cyan-50">
            {content.badge}
          </Badge>
          <h2 className="font-display text-3xl leading-tight text-brand-navy md:text-5xl">
            {content.titlePrefix} <span className="text-cyan-500 italic">{content.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
          <ScrollReveal
            className="perspective-1000 w-full lg:w-1/2"
            start="top 88%"
            duration={0.56}
            fromY={22}
            fromOpacity={0.08}
            fromBlur={6}
            repeat
          >
            <div
              className="mist-reveal group relative overflow-hidden rounded-2xl border border-white bg-white shadow-floating transition-transform duration-700 hover:rotate-1"
              data-mist-end="top 56%"
              data-mist-from-blur="22"
              data-mist-from-opacity="0.74"
              data-mist-start="top 96%"
              data-mist-to-blur="1.2"
              data-mist-to-opacity="0.09"
            >
              <MistOverlay variant="media" />
              <div className="absolute inset-0 z-10 bg-brand-navy/0 transition-colors duration-500 group-hover:bg-brand-navy/5" />

              <Image
                src={content.imageUrl}
                alt={`${content.doctorName} testimonial`}
                width={960}
                height={640}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />

              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/20 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-10 w-10 text-white drop-shadow-md" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-brand-navy/90 to-transparent p-8">
                <h3 className="mb-1 font-display text-2xl text-white">{content.doctorName}</h3>
                <p className="text-sm font-light tracking-wide text-cyan-200">{content.doctorResult}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="w-full lg:w-5/12"
            start="top 86%"
            duration={0.52}
            fromY={20}
            fromOpacity={0.14}
            fromBlur={5}
            repeat
          >
            <Card className="group rounded-[2.5rem] border border-white bg-white/60 p-10 shadow-soft-card backdrop-blur-xl md:p-12">
              <CardContent className="relative p-0">
                <div className="absolute -left-6 -top-6 text-cyan-100/50">
                  <span className="text-8xl">&ldquo;</span>
                </div>

                <div className="relative z-10">
                  <p className="mb-10 text-justify font-serif text-xl leading-relaxed font-medium tracking-wide text-brand-navy/90 md:text-2xl">
                    &quot;{content.quote}{" "}
                    <span className="font-bold text-cyan-600 underline decoration-cyan-200 decoration-2 underline-offset-4">
                      {content.highlightedQuote}
                    </span>{" "}
                    {content.quoteSuffix}&quot;
                  </p>

                  <div className="flex items-center gap-5 border-t border-slate-200/60 pt-8">
                    <div className="h-16 w-16 overflow-hidden rounded-full bg-slate-200 ring-4 ring-white shadow-md">
                      <Image
                        src={content.avatarUrl}
                        alt={`${content.doctorName} avatar`}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-bold text-brand-navy">{content.doctorName}</h4>
                      <div className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-cyan-500" />
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                          {content.doctorRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
