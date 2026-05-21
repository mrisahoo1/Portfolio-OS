import { Award, BarChart3, CheckCircle2, Target } from "lucide-react";
import { impactMetrics } from "@/data/impact";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeader } from "@/components/SectionHeader";

export function ImpactMetrics() {
  const leadMetrics = impactMetrics.slice(0, 2);
  const remainingMetrics = impactMetrics.slice(2);

  return (
    <section id="impact" className="container-premium py-24">
      <SectionHeader
        eyebrow="Measured Impact"
        title="Outcome signals, not vanity numbers."
        description="The metrics stay bounded to provided project evidence. The layout makes them faster to scan and easier to connect to real workflow change."
        align="center"
      />
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-slate-950/72 p-7 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(16,185,129,0.14),transparent_32%)]" />
          <div className="relative">
            <div className="mb-8 flex items-center gap-3 text-cyan-100"><BarChart3 className="h-5 w-5" /> Impact cockpit</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {leadMetrics.map((metric) => (
                <div key={metric.label} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6">
                  <p className="gradient-text text-6xl font-semibold tracking-tight md:text-7xl">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1.75rem] border border-emerald-300/15 bg-emerald-300/[0.07] p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-emerald-300/10 p-3 text-emerald-200"><Target className="h-5 w-5" /></div>
                <div>
                  <h3 className="font-semibold text-white">The pattern</h3>
                  <p className="mt-2 text-sm leading-7 text-emerald-50/75">The strongest signal is consistency: retrieval quality, automation, adoption, and operational efficiency appear across different domains, not one isolated prototype.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {remainingMetrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <CheckCircle2 className="h-5 w-5 text-cyan-200" />
                <p className="gradient-text text-4xl font-semibold tracking-tight">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{metric.label}</p>
            </div>
          ))}
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/58 p-6 backdrop-blur-xl sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200"><Award className="h-6 w-6" /></div>
              <div>
                <h3 className="text-lg font-semibold text-white">Multiple Volkswagen awards</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">Recognition across innovation, culture, AIPowerX, and Digital Library contributions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}