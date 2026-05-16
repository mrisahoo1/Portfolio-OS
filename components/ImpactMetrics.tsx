import { Award } from "lucide-react";
import { impactMetrics } from "@/data/impact";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeader } from "@/components/SectionHeader";

export function ImpactMetrics() {
  return (
    <section id="impact" className="container-premium py-24">
      <SectionHeader
        eyebrow="Measured Impact"
        title="Signals that the systems changed real workflows."
        description="The numbers here are limited to the provided resume/project evidence and intentionally avoid inflated claims."
        align="center"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {impactMetrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 text-center backdrop-blur-xl">
            <p className="gradient-text text-5xl font-semibold tracking-tight md:text-6xl">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-slate-950/58 p-6 backdrop-blur-xl md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200"><Award className="h-6 w-6" /></div>
          <div>
            <h3 className="text-lg font-semibold text-white">Multiple Volkswagen awards</h3>
            <p className="mt-1 text-sm text-slate-400">Recognition across innovation, culture, AIPowerX, and Digital Library contributions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

