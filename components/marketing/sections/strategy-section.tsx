import { StrategyCard } from "@/components/marketing/sections/strategy-card";
import type { StrategyItem } from "@/types/landing";

interface StrategySectionProps {
  items: StrategyItem[];
}

export function StrategySection({ items }: StrategySectionProps) {
  return (
    <section id="strategy" className="relative overflow-hidden py-20">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/40 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/2 rounded-full bg-blue-50/60 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-12">
          {items.map((item, index) => (
            <StrategyCard key={item.id} item={item} revealDelay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
